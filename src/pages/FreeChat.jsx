/**
 * Open-ended conversation with the AI tutor, level-locked to what the learner
 * has actually covered. Requires the learner's own API key.
 */

import { useEffect, useRef, useState } from 'react'
import { useProgress, labelForTag } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { aiReady, systemPrompt, buildLearnerContext, chat, parseTutorReply } from '../engine/ai.js'
import { currentLevel } from '../engine/adaptive.js'
import { lessonsByLevel, vocabById } from '../content/index.js'
import { nextLesson } from '../engine/planner.js'
import { speak, listenOnce, sttSupported } from '../lib/speech.js'
import { Speak, Pill, Rich, Card } from '../ui/primitives.jsx'

const STARTERS = {
  A1: [
    'Hallo! Wie geht es dir?',
    'Ich möchte über meine Familie sprechen.',
    'Was machst du am Wochenende?',
  ],
  A2: [
    'Erzähl mir von deinem letzten Urlaub.',
    'Ich habe ein Problem mit meiner Wohnung.',
    'Was hast du gestern gemacht?',
  ],
  B1: [
    'Was hältst du von Homeoffice?',
    'Ich möchte über Umweltschutz diskutieren.',
    'Kannst du mir bei einer E-Mail an meinen Chef helfen?',
  ],
}

export default function FreeChat() {
  const { state, dispatch } = useProgress()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  const [listening, setListening] = useState(false)
  const bottomRef = useRef(null)
  const recRef = useRef(null)
  const abortRef = useRef(null)

  const level = currentLevel(lessonsByLevel, state.lessons)
  const ready = aiReady(state.settings)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }, [messages, busy])

  useEffect(() => () => {
    recRef.current?.abort?.()
    abortRef.current?.abort()
  }, [])

  if (!ready) {
    return (
      <div className="stack-lg">
        <header className="page-head">
          <h1 className="page-title">🤖 Free conversation</h1>
          <p className="page-sub">
            Talk about whatever you like, in German, with a tutor that keeps to your level and
            corrects you as you go.
          </p>
        </header>

        <Card className="stack">
          <div className="note warn">
            This is the one feature that needs an API key. Everything else in the app — all 26
            lessons, the scenarios, the drills — works offline with no key at all.
          </div>
          <p className="small muted">
            Add your own Anthropic API key in Settings. It is stored only in this browser and
            sent only to Anthropic.
          </p>
          <a className="btn btn-primary btn-block" href={href('/settings')}>
            Open settings
          </a>
          <a className="btn btn-block" href={href('/chat')}>
            Use the built-in scenarios instead
          </a>
        </Card>
      </div>
    )
  }

  const send = async (raw) => {
    const text = String(raw ?? input).trim()
    if (!text || busy) return
    setInput('')
    setError(null)
    const nextMsgs = [...messages, { role: 'me', de: text }]
    setMessages(nextMsgs)
    setBusy(true)

    const lesson = nextLesson(state.lessons)
    const known = Object.keys(state.srs)
      .filter((k) => k.startsWith('v:'))
      .map((k) => vocabById.get(k.slice(2))?.de)
      .filter(Boolean)
    const weak = Object.entries(state.tagStats || {})
      .filter(([, s]) => s.total >= 3 && s.correct / s.total < 0.7)
      .map(([t]) => labelForTag(t))

    abortRef.current = new AbortController()
    try {
      const out = await chat({
        settings: state.settings,
        system: systemPrompt({
          level,
          learnerContext: buildLearnerContext({ state, level, lesson, knownVocab: known, weakAreas: weak }),
        }),
        messages: nextMsgs
          .slice(-16)
          .map((m) => ({ role: m.role === 'me' ? 'user' : 'assistant', content: m.de })),
        maxTokens: 520,
        signal: abortRef.current.signal,
      })
      const reply = parseTutorReply(out)
      const add = []
      if (reply.corrections.length) {
        add.push({
          role: 'correction',
          issues: reply.corrections.map((c) => ({ ...c, tag: c.tag || 'vokabular' })),
        })
        for (const c of reply.corrections) {
          dispatch({
            type: 'conversationIssue',
            tag: c.tag || 'vokabular',
            skill: 'conversation',
            wrong: c.wrong,
            right: c.right,
          })
        }
      }
      add.push({ role: 'bot', de: reply.de, en: reply.en })
      setMessages((m) => [...m, ...add])
      dispatch({ type: 'xp', amount: 2 })
      if (state.settings.autoSpeak) setTimeout(() => speak(reply.de, { rate: state.settings.rate }), 200)
    } catch (e) {
      if (e.name !== 'AbortError') setError(e.message)
    } finally {
      setBusy(false)
    }
  }

  const mic = () => {
    if (listening) return recRef.current?.stop()
    setListening(true)
    recRef.current = listenOnce({
      onResult: ({ text, final }) => {
        setInput(text)
        if (final) {
          setListening(false)
          send(text)
        }
      },
      onError: () => setListening(false),
      onEnd: () => setListening(false),
    })
    if (!recRef.current) setListening(false)
  }

  return (
    <div className="stack">
      <div className="between">
        <div>
          <h1 style={{ fontSize: 'var(--fs-xl)' }}>🤖 Free conversation</h1>
          <p className="tiny dim">Level-locked to {level} · {state.settings.aiModel}</p>
        </div>
        <div className="row" style={{ gap: 6 }}>
          <Pill tone={level.toLowerCase()}>{level}</Pill>
          {messages.length > 0 && (
            <button className="btn btn-ghost btn-sm" onClick={() => setMessages([])}>
              Clear
            </button>
          )}
        </div>
      </div>

      {error && <div className="note warn small">{error}</div>}

      {messages.length === 0 ? (
        <Card className="stack">
          <p className="muted">
            Write in German about anything. The tutor stays inside {level} grammar and
            vocabulary, and corrections go straight into your weak-areas list.
          </p>
          <div className="sec-title">Try one of these</div>
          <div className="stack-sm">
            {(STARTERS[level] || STARTERS.A1).map((s, i) => (
              <button key={i} className="chip" style={{ textAlign: 'left' }} onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        </Card>
      ) : (
        <div className="chat">
          {messages.map((m, i) =>
            m.role === 'correction' ? (
              <div
                key={i}
                className="card pad-sm anim-in"
                style={{ borderColor: 'var(--warn-line)', background: 'var(--warn-soft)' }}
              >
                <div className="tiny bold" style={{ color: 'var(--warn)', marginBottom: 6 }}>
                  ✏️ Kleine Korrektur
                </div>
                <div className="stack-sm">
                  {m.issues.map((iss, j) => (
                    <div key={j}>
                      <div className="correction">
                        <div className="was">{iss.wrong}</div>
                        <div className="is">{iss.right}</div>
                      </div>
                      <div className="small muted">
                        <Rich text={iss.why} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key={i} className={`msg ${m.role === 'me' ? 'me' : 'bot'}`}>
                <div className="msg-avatar">{m.role === 'me' ? '🙂' : '🇩🇪'}</div>
                <div>
                  <div className="bubble">
                    <div className="de">{m.de}</div>
                    {m.role !== 'me' && state.settings.showTranslation && m.en && (
                      <div className="bubble-en">{m.en}</div>
                    )}
                  </div>
                  {m.role !== 'me' && (
                    <div className="msg-tools">
                      <Speak text={m.de} />
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
          {busy && (
            <div className="msg bot">
              <div className="msg-avatar">🇩🇪</div>
              <div className="bubble">
                <div className="typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      )}

      <div className="composer">
        <textarea
          className="textarea"
          style={{ minHeight: 46 }}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
          placeholder="Schreib auf Deutsch…"
          disabled={busy}
          spellCheck={false}
        />
        {sttSupported() && (
          <button
            className={`btn btn-icon ${listening ? 'btn-danger' : ''}`}
            onClick={mic}
            disabled={busy}
            aria-label="Speak"
          >
            {listening ? '🔴' : '🎙'}
          </button>
        )}
        <button className="btn btn-primary" onClick={() => send()} disabled={!input.trim() || busy}>
          Senden
        </button>
      </div>
    </div>
  )
}
