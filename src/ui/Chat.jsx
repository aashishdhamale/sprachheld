/**
 * The conversation surface.
 *
 * Runs a scenario with the offline engine by default. If the learner has
 * enabled the AI tutor in Settings, the same UI is driven by the model
 * instead — but always inside a level-locked system prompt.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  createSession,
  openSession,
  respond,
  suggestions,
  sampleAnswer,
  useHint,
  currentTurn,
  progressOf,
  debrief,
} from '../engine/conversation.js'
import { aiReady, systemPrompt, buildLearnerContext, chat as aiChat, parseTutorReply } from '../engine/ai.js'
import { nounLexicon, vocabById } from '../content/index.js'
import { useProgress, labelForTag } from '../store/progress.jsx'
import { speak, listenOnce, sttSupported } from '../lib/speech.js'
import { Speak, Bar, Pill, Rich, ScoreRing } from './primitives.jsx'

export default function Chat({ conversation, onFinish, compact = false }) {
  const { state, dispatch } = useProgress()
  const useAi = aiReady(state.settings)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [aiError, setAiError] = useState(null)
  const [listening, setListening] = useState(false)
  const bottomRef = useRef(null)
  const recRef = useRef(null)
  const startedAt = useRef(Date.now())

  const session = useMemo(
    () => createSession(conversation, { name: state.profile.name }),
    [conversation.id, state.profile.name],
  )

  // Open the conversation.
  useEffect(() => {
    const opening = openSession(session)
    setMessages(opening)
    setDone(false)
    setInput('')
    startedAt.current = Date.now()
    if (state.settings.autoSpeak) {
      const last = opening.filter((m) => m.role === 'bot').pop()
      if (last) setTimeout(() => speak(last.de, { rate: state.settings.rate }), 350)
    }
  }, [session])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }, [messages, busy])

  useEffect(() => () => recRef.current?.abort?.(), [])

  const record = (issues) => {
    for (const i of issues || []) {
      dispatch({
        type: 'conversationIssue',
        tag: i.tag || 'vokabular',
        skill: i.skill || 'conversation',
        wrong: i.wrong,
        right: i.right,
      })
    }
  }

  const finish = (score) => {
    setDone(true)
    const minutes = Math.max(1, Math.round((Date.now() - startedAt.current) / 60000))
    dispatch({ type: 'scenarioDone', id: conversation.id, score, minutes })
  }

  /* ── Offline engine turn ───────────────────────────────────────────── */

  const sendScripted = (text) => {
    const res = respond(session, text, { lexicon: nounLexicon })
    record(res.issues)
    setMessages((m) => [...m, ...res.messages])
    if (state.settings.autoSpeak) {
      const botLine = res.messages.filter((x) => x.role === 'bot').pop()
      if (botLine) setTimeout(() => speak(botLine.de, { rate: state.settings.rate }), 250)
    }
    if (res.done) finish(res.score ?? 0)
  }

  /* ── AI turn ───────────────────────────────────────────────────────── */

  const sendAi = async (text) => {
    setAiError(null)
    const history = [...messages, { role: 'me', de: text }]
      .filter((m) => m.role === 'bot' || m.role === 'me')
      .slice(-14)
      .map((m) => ({ role: m.role === 'me' ? 'user' : 'assistant', content: m.de }))

    const known = (conversation.vocabIds || [])
      .map((id) => vocabById.get(id)?.de)
      .filter(Boolean)

    try {
      const raw = await aiChat({
        settings: state.settings,
        system: systemPrompt({
          level: conversation.level,
          scenario: conversation,
          learnerContext: buildLearnerContext({
            state,
            level: conversation.level,
            knownVocab: known,
            weakAreas: Object.entries(state.tagStats || {})
              .filter(([, s]) => s.total >= 3 && s.correct / s.total < 0.7)
              .map(([t]) => labelForTag(t)),
          }),
        }),
        messages: history,
        maxTokens: 480,
      })
      const reply = parseTutorReply(raw)
      const issues = reply.corrections.map((c) => ({
        wrong: c.wrong,
        right: c.right,
        why: c.why,
        tag: c.tag || 'vokabular',
        skill: 'conversation',
      }))
      record(issues)
      const add = []
      if (issues.length) add.push({ role: 'correction', issues })
      add.push({ role: 'bot', de: reply.de, en: reply.en })
      setMessages((m) => [...m, ...add])
      if (state.settings.autoSpeak) setTimeout(() => speak(reply.de, { rate: state.settings.rate }), 250)
      if (reply.done) finish(0.8)
    } catch (e) {
      if (e.name === 'AbortError') return
      setAiError(e.message)
      // Fall back to the scripted engine so the learner is never blocked.
      sendScripted(text)
    }
  }

  const send = async (raw) => {
    const text = String(raw ?? input).trim()
    if (!text || busy || done) return
    setInput('')
    setShowHints(false)
    if (useAi) {
      setMessages((m) => [...m, { role: 'me', de: text }])
      setBusy(true)
      await sendAi(text)
      setBusy(false)
    } else {
      sendScripted(text)
    }
  }

  const mic = () => {
    if (listening) {
      recRef.current?.stop()
      return
    }
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

  const turn = currentTurn(session)
  const prog = progressOf(session)
  const chips = useAi ? [] : suggestions(session)

  if (done) {
    return <Debrief session={session} conversation={conversation} onFinish={onFinish} />
  }

  return (
    <div className="stack">
      {!compact && (
        <div className="card sunk pad-sm stack-sm">
          <div className="between">
            <div className="row" style={{ gap: 8 }}>
              <span style={{ fontSize: '1.2rem' }}>{conversation.icon || '💬'}</span>
              <div>
                <div className="bold small">{conversation.title}</div>
                <div className="tiny dim">{conversation.roleBot}</div>
              </div>
            </div>
            <Pill tone={conversation.level.toLowerCase()}>{conversation.level}</Pill>
          </div>
          <p className="small muted">{conversation.setting}</p>
          <div className="note tip tiny">🎯 {conversation.goal}</div>
          {!useAi && <Bar value={prog.pct} size="sm" label="Conversation progress" />}
        </div>
      )}

      {aiError && (
        <div className="note warn small">
          AI tutor unavailable ({aiError}) — carrying on with the built-in tutor.
        </div>
      )}

      <div className="chat">
        {messages.map((m, i) => (
          <Message key={i} msg={m} rate={state.settings.rate} showEn={state.settings.showTranslation} />
        ))}
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

      {showHints && turn && (
        <div className="card sunk pad-sm stack-sm anim-in">
          <div className="tiny dim">You could say</div>
          {(turn.hints || []).map((h, i) => (
            <button key={i} className="chip" style={{ textAlign: 'left' }} onClick={() => setInput(h)}>
              {h}
            </button>
          ))}
          <div className="tiny dim" style={{ marginTop: 4 }}>
            Model answer: <strong className="de">{sampleAnswer(session)}</strong>
          </div>
        </div>
      )}

      {chips.length > 0 && !showHints && (
        <div className="row-wrap">
          {chips.map((c, i) => (
            <button key={i} className="chip" onClick={() => setInput(c)}>
              {c}
            </button>
          ))}
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
          placeholder="Antworte auf Deutsch…"
          disabled={busy || done}
          autoComplete="off"
          spellCheck={false}
        />
        {sttSupported() && (
          <button
            className={`btn btn-icon ${listening ? 'btn-danger' : ''}`}
            onClick={mic}
            aria-label="Speak your answer"
            disabled={busy || done}
          >
            {listening ? '🔴' : '🎙'}
          </button>
        )}
        <button className="btn btn-primary" onClick={() => send()} disabled={!input.trim() || busy || done}>
          Senden
        </button>
      </div>

      <div className="row" style={{ justifyContent: 'space-between' }}>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => {
            useHint(session)
            setShowHints((v) => !v)
          }}
        >
          💡 {showHints ? 'Hide help' : 'I need help'}
        </button>
        <span className="tiny dim">
          {useAi ? 'AI tutor' : `Turn ${prog.turn} of ${prog.total}`}
        </span>
      </div>
    </div>
  )
}

/* ── Message bubbles ─────────────────────────────────────────────────────── */

function Message({ msg: m, rate, showEn }) {
  if (m.role === 'correction') {
    return (
      <div className="card pad-sm anim-in" style={{ borderColor: 'var(--warn-line)', background: 'var(--warn-soft)' }}>
        <div className="tiny bold" style={{ color: 'var(--warn)', marginBottom: 6 }}>
          ✏️ Kleine Korrektur
        </div>
        <div className="stack-sm">
          {m.issues.map((iss, i) => (
            <div key={i}>
              <div className="correction">
                {iss.wrong && <div className="was">{iss.wrong}</div>}
                {iss.right && <div className="is">{iss.right}</div>}
              </div>
              <div className="small muted">
                <Rich text={iss.why} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (m.role === 'system') {
    return <div className="note small anim-in">{m.de}</div>
  }

  if (m.role === 'note') {
    return <div className="note tip small anim-in">{m.text}</div>
  }

  const isMe = m.role === 'me'
  return (
    <div className={`msg ${isMe ? 'me' : 'bot'}`}>
      <div className="msg-avatar">{isMe ? '🙂' : '🇩🇪'}</div>
      <div>
        <div className="bubble">
          <div className="de">{m.de}</div>
          {!isMe && showEn && m.en && <div className="bubble-en">{m.en}</div>}
        </div>
        {!isMe && (
          <div className="msg-tools">
            <Speak text={m.de} rate={rate} />
            {m.modelAnswer && (
              <span className="tiny dim">
                Try: <strong className="de">{m.modelAnswer}</strong>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* ── End-of-scenario debrief ─────────────────────────────────────────────── */

function Debrief({ session, conversation, onFinish }) {
  const d = debrief(session)
  return (
    <div className="celebrate stack">
      <ScoreRing value={d.score} sub="scenario" />
      <div>
        <h2 style={{ marginTop: 'var(--s4)' }}>{d.verdict.de}</h2>
        <p className="muted">{d.verdict.en}</p>
      </div>

      <div className="card sunk pad-sm stack-sm" style={{ textAlign: 'left' }}>
        <div className="between small">
          <span className="dim">Turns</span>
          <strong>{session.stats.turns}</strong>
        </div>
        <div className="between small">
          <span className="dim">Clean German</span>
          <strong>
            {session.stats.clean}/{session.stats.turns}
          </strong>
        </div>
        {session.stats.hintsUsed > 0 && (
          <div className="between small">
            <span className="dim">Hints used</span>
            <strong>{session.stats.hintsUsed}</strong>
          </div>
        )}
      </div>

      {d.corrections.length > 0 && (
        <div className="stack-sm" style={{ textAlign: 'left' }}>
          <div className="sec-title">What to work on</div>
          {d.topics.map((t) => (
            <Pill key={t.tag} tone="warn">
              {labelForTag(t.tag)} · {t.n}×
            </Pill>
          ))}
          <div className="card sunk pad-sm stack-sm">
            {d.corrections.slice(0, 5).map((c, i) => (
              <div key={i}>
                <div className="correction">
                  <div className="was">{c.wrong}</div>
                  <div className="is">{c.right}</div>
                </div>
                <div className="tiny muted">
                  <Rich text={c.why} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {d.corrections.length === 0 && (
        <div className="note tip small">
          No corrections needed — your German held up for the whole conversation.
        </div>
      )}

      <button className="btn btn-primary btn-lg" onClick={() => onFinish?.(d.score)}>
        Continue
      </button>
    </div>
  )
}
