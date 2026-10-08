/**
 * The building blocks of a mock exam: audio with a play limit, the item
 * types (a/b/c, richtig/falsch, ad a-or-b, matching), the form, the writing
 * task and the speaking tasks. Each part is controlled: it gets its state as
 * `value` and reports changes through `onChange`.
 */

import { useEffect, useRef, useState } from 'react'
import { speakAs, stopSpeaking, ttsSupported, sttSupported, listenLong } from '../lib/speech.js'
import { fold, matchesAny } from '../lib/text.js'
import { useProgress } from '../store/progress.jsx'
import { checkGerman } from '../engine/checker.js'
import { nounLexicon } from '../content/index.js'
import { wordCount, hasGreetingAndClose, pointLooksCovered } from '../engine/exam.js'
import { aiReady, chat } from '../engine/ai.js'
import { Pill, Rich } from './primitives.jsx'

const LETTERS = ['a', 'b', 'c', 'd']
const SPEAKER_LABEL = { f: 'Frau', f2: 'Frau', m: 'Mann', m2: 'Mann', n: 'Ansage' }

const withName = (s, name) => String(s || '').replace(/\{name\}/g, name || 'Alex')

/* ── Audio with a play limit ─────────────────────────────────────────────── */

// Only one dialogue may play at a time; a newer one silently retires the old.
let activeSequence = 0

export function ExamAudio({ lines, limit = Infinity, used = 0, onPlay, transcript = false }) {
  const { state } = useProgress()
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(-1)
  const mine = useRef(0)

  useEffect(
    () => () => {
      if (mine.current === activeSequence) {
        activeSequence++
        stopSpeaking()
      }
    },
    [],
  )

  const left = limit - used
  const play = (slow = false) => {
    if (left <= 0) return
    onPlay?.()
    const id = ++activeSequence
    mine.current = id
    setPlaying(true)
    let i = 0
    const rate = slow ? state.settings.slowRate : state.settings.rate
    const next = () => {
      if (id !== activeSequence) return
      if (i >= lines.length) {
        setPlaying(false)
        setCurrent(-1)
        return
      }
      const l = lines[i]
      setCurrent(i)
      i++
      const ok = speakAs(l.de, { speaker: l.s, rate, onend: () => setTimeout(next, 280) })
      if (!ok) {
        setPlaying(false)
        setCurrent(-1)
      }
    }
    next()
  }

  const stop = () => {
    activeSequence++
    stopSpeaking()
    setPlaying(false)
    setCurrent(-1)
  }

  if (!ttsSupported()) {
    return (
      <div className="stack-sm">
        <div className="note warn small">This browser has no speech synthesis — read the transcript instead.</div>
        <Transcript lines={lines} current={-1} />
      </div>
    )
  }

  const limited = Number.isFinite(limit)
  return (
    <div className="stack-sm">
      <div className="row-wrap">
        {!playing ? (
          <button className="btn btn-primary" onClick={() => play(false)} disabled={left <= 0}>
            ▶ {used === 0 ? 'Abspielen' : 'Noch einmal'}
          </button>
        ) : (
          <button className="btn" onClick={stop}>
            ⏹ Stop
          </button>
        )}
        {!limited && !playing && (
          <button className="btn" onClick={() => play(true)} title="Slowly">
            🐢 Langsam
          </button>
        )}
        {limited && (
          <span className="tiny dim">
            {left > 0 ? `${left} of ${limit} play${limit === 1 ? '' : 's'} left` : 'No plays left — as in the real exam'}
          </span>
        )}
        {playing && <span className="spinner" aria-hidden />}
      </div>
      {transcript && <Transcript lines={lines} current={current} />}
    </div>
  )
}

function Transcript({ lines, current }) {
  return (
    <div className="card sunk pad-sm stack-sm small">
      {lines.map((l, i) => (
        <div key={i} className="row" style={{ alignItems: 'flex-start', gap: 8, fontWeight: i === current ? 650 : undefined }}>
          <span className="tiny dim nowrap" style={{ minWidth: 48 }}>
            {SPEAKER_LABEL[l.s] || ''}
          </span>
          <span className="de grow">{l.de}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Text blocks ─────────────────────────────────────────────────────────── */

export function ExamText({ text, compact = false }) {
  if (!text) return null
  return (
    <div className={`card exam-text ${compact ? 'pad-sm' : ''}`}>
      {text.title && <div className="exam-text-title">{text.title}</div>}
      <div className="exam-text-body de">{text.body}</div>
    </div>
  )
}

/* ── Items ───────────────────────────────────────────────────────────────── */

function choiceClass(i, answer, value, reveal) {
  if (!reveal) return value === i ? 'picked' : ''
  if (i === answer) return 'correct'
  if (i === value) return 'wrong'
  return 'faded'
}

export function McItem({ n, item, value, onChange, reveal }) {
  return (
    <div className="stack-sm">
      <div className="bold">
        <span className="exam-num">{n}</span> {item.question}
      </div>
      <div className="opts">
        {item.options.map((o, i) => (
          <button
            key={i}
            className={`opt ${choiceClass(i, item.answer, value, reveal)}`}
            onClick={() => !reveal && onChange(i)}
            disabled={reveal}
            aria-pressed={value === i}
          >
            <span className="opt-key">{LETTERS[i]}</span>
            <span className="grow de">{o}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function TfItem({ n, item, value, onChange, reveal, yesNo = false }) {
  const labels = yesNo ? ['Ja', 'Nein'] : ['Richtig', 'Falsch']
  const vals = [true, false]
  return (
    <div className="stack-sm">
      {item.text && <ExamText text={item.text} compact />}
      <div className="bold">
        <span className="exam-num">{n}</span> <span className="de">{item.statement}</span>
      </div>
      <div className="opts" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {vals.map((v, i) => (
          <button
            key={labels[i]}
            className={`opt ${choiceClass(v, item.answer, value, reveal)}`}
            style={{ justifyContent: 'center', fontWeight: 650 }}
            onClick={() => !reveal && onChange(v)}
            disabled={reveal}
            aria-pressed={value === v}
          >
            {labels[i]}
          </button>
        ))}
      </div>
    </div>
  )
}

export function AbItem({ n, item, value, onChange, reveal }) {
  return (
    <div className="stack-sm">
      <div className="bold">
        <span className="exam-num">{n}</span> <span className="de">{item.situation}</span>
      </div>
      <div className="grid grid-2">
        {item.options.map((o, i) => (
          <button
            key={i}
            className={`opt exam-ad ${choiceClass(i, item.answer, value, reveal)}`}
            onClick={() => !reveal && onChange(i)}
            disabled={reveal}
            aria-pressed={value === i}
          >
            <span className="opt-key">{LETTERS[i]}</span>
            <span className="grow" style={{ minWidth: 0 }}>
              {o.title && <span className="bold small" style={{ display: 'block' }}>{o.title}</span>}
              <span className="small de" style={{ display: 'block' }}>{o.body}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

/** Match each item to a choice. Choices are ads (title/body) or pictures (emoji/label). */
export function MatchPart({ part, value = {}, onChange, reveal, allowX }) {
  const keyLabel = (k) => {
    if (k === 'x') return 'x – keine Anzeige passt'
    const c = part.choices.find((x) => x.key === k)
    return c ? `${k} – ${c.label || c.title}` : k
  }
  return (
    <div className="stack">
      <div className={part.choices[0]?.emoji ? 'grid grid-2' : 'stack-sm'}>
        {part.choices.map((c) => (
          <div key={c.key} className="card pad-sm row" style={{ alignItems: 'flex-start', gap: 10 }}>
            <span className="opt-key">{c.key}</span>
            {c.emoji && <span style={{ fontSize: '1.4rem' }} aria-hidden>{c.emoji}</span>}
            <span className="grow" style={{ minWidth: 0 }}>
              <span className="bold small de" style={{ display: 'block' }}>{c.label || c.title}</span>
              {c.body && <span className="small de" style={{ display: 'block' }}>{c.body}</span>}
            </span>
          </div>
        ))}
      </div>
      <div className="stack-sm">
        {part.items.map((it, i) => {
          const v = value[it.id] ?? ''
          const ok = reveal && v === it.answer
          return (
            <div key={it.id} className="card pad-sm stack-sm" style={reveal ? { borderColor: ok ? 'var(--ok)' : 'var(--bad)' } : undefined}>
              <div className="small">
                <span className="exam-num">{i + 1}</span> <span className="de bold">{it.situation || it.label}</span>
              </div>
              <select
                className="select"
                value={v}
                disabled={reveal}
                onChange={(e) => onChange({ ...value, [it.id]: e.target.value })}
                aria-label={`Answer for ${it.situation || it.label}`}
              >
                <option value="">— wählen —</option>
                {part.choices.map((c) => (
                  <option key={c.key} value={c.key}>
                    {keyLabel(c.key)}
                  </option>
                ))}
                {allowX && <option value="x">{keyLabel('x')}</option>}
              </select>
              {reveal && !ok && <div className="tiny" style={{ color: 'var(--bad)' }}>Richtig: {keyLabel(it.answer)}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Schreiben Teil 1: the form ──────────────────────────────────────────── */

export function FormPart({ content, value = {}, onChange, reveal }) {
  return (
    <div className="stack">
      <ExamText text={{ title: 'Situation', body: content.situation }} />
      <div className="card stack-sm">
        <div className="exam-text-title">{content.form.title}</div>
        {content.form.fields.map((f) => {
          const isGap = f.answer != null
          const v = value[f.label] ?? ''
          return (
            <div key={f.label} className="field">
              <label className="label">{f.label}</label>
              {isGap ? (
                <>
                  <input
                    className="input"
                    value={v}
                    disabled={reveal}
                    onChange={(e) => onChange({ ...value, [f.label]: e.target.value })}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  {reveal && <FormReveal field={f} value={v} />}
                </>
              ) : (
                <input className="input" value={f.given} disabled readOnly />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function FormReveal({ field, value }) {
  const ok = matchesAny(value, field.answer, field.accept)
  return ok ? (
    <div className="tiny" style={{ color: 'var(--ok)' }}>✓ richtig</div>
  ) : (
    <div className="tiny" style={{ color: 'var(--bad)' }}>Richtig: {field.answer}</div>
  )
}

/* ── Self-assessment ─────────────────────────────────────────────────────── */

export function RateChips({ value, onChange, label = 'How did it go?' }) {
  const opts = [
    { v: 0, l: '✗ Not yet' },
    { v: 0.5, l: '~ Partly' },
    { v: 1, l: '✓ Got it' },
  ]
  return (
    <div className="row-wrap" role="group" aria-label={label}>
      <span className="tiny dim">{label}</span>
      {opts.map((o) => (
        <button key={o.v} className={`chip ${value === o.v ? 'on' : ''}`} aria-pressed={value === o.v} onClick={() => onChange(o.v)}>
          {o.l}
        </button>
      ))}
    </div>
  )
}

function Issues({ text }) {
  const sentences = String(text || '')
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean)
  const issues = sentences.flatMap((s) => checkGerman(s, { lexicon: nounLexicon }))
  if (!issues.length) return <div className="note tip small">The error checker found no common mistakes. (It only catches the classics — compare with the model too.)</div>
  return (
    <div className="stack-sm">
      {issues.map((i, k) => (
        <div key={k} className="card pad-sm small">
          <div className="correction">
            <div className="was">{i.wrong}</div>
            <div className="is">{i.right}</div>
          </div>
          <Rich text={i.why} />
        </div>
      ))}
    </div>
  )
}

/* ── Schreiben: a message ────────────────────────────────────────────────── */

export function MessagePart({ spec, content, value = {}, onChange, level }) {
  const { state } = useProgress()
  const [aiBusy, setAiBusy] = useState(false)
  const [aiError, setAiError] = useState(null)
  const text = value.text || ''
  const n = wordCount(text)
  const [lo, hi] = spec.words
  const gc = hasGreetingAndClose(text)
  const set = (patch) => onChange({ ...value, ...patch })
  const ratings = value.ratings || []

  const askAi = async () => {
    setAiBusy(true)
    setAiError(null)
    try {
      const reply = await chat({
        settings: state.settings,
        maxTokens: 700,
        system: `You are an examiner for the Goethe-Zertifikat ${level}. A candidate wrote a short ${content.register} message. Assess it fairly at ${level} level — do not expect more than ${level}.
Reply with ONE JSON object only:
{"points":[{"covered":"yes|partly|no","comment":"short, in English"}],"corrections":[{"wrong":"exact phrase","right":"corrected phrase","why":"one short sentence"}],"comment":"two sentences of overall feedback in English"}
"points" has exactly one entry per content point, in order. List at most 5 real corrections; [] if none.`,
        messages: [
          {
            role: 'user',
            content: `Task: ${content.situation}\nContent points:\n${content.points.map((p, i) => `${i + 1}. ${p.de}`).join('\n')}\nTarget: ${lo}–${hi} words.\n\nCandidate's text:\n${text}`,
          },
        ],
      })
      const s = reply.indexOf('{')
      const e = reply.lastIndexOf('}')
      const obj = JSON.parse(reply.slice(s, e + 1))
      const map = { yes: 1, partly: 0.5, no: 0 }
      set({ ai: obj, ratings: content.points.map((_, i) => map[obj.points?.[i]?.covered] ?? ratings[i] ?? 0) })
    } catch (e) {
      setAiError(e.message?.startsWith('Unexpected') ? 'The tutor’s reply could not be read — try again.' : e.message)
    } finally {
      setAiBusy(false)
    }
  }

  return (
    <div className="stack">
      <ExamText text={{ title: 'Situation', body: content.situation }} />
      <div className="card stack-sm">
        <div className="small bold">Schreiben Sie zu allen drei Punkten:</div>
        <ul className="stack-sm small">
          {content.points.map((p, i) => (
            <li key={i}>
              <span className="de bold">{p.de}</span> <span className="dim">— {p.en}</span>
            </li>
          ))}
        </ul>
        <div className="tiny dim">
          {content.register === 'formal'
            ? 'Formal: Sehr geehrte/r … / Liebe/r Frau/Herr … · Sie · Mit freundlichen Grüßen'
            : 'Informal: Liebe/r … / Hallo … · du · Viele Grüße / Bis bald'}
        </div>
      </div>

      <div className="field">
        <textarea
          className="textarea de"
          rows={8}
          value={text}
          disabled={value.done}
          onChange={(e) => set({ text: e.target.value })}
          placeholder={content.register === 'formal' ? 'Sehr geehrte …' : 'Liebe …'}
          spellCheck={false}
        />
        <div className="between tiny" style={{ marginTop: 6 }}>
          <span style={{ color: n === 0 ? undefined : n < lo || n > hi + 10 ? 'var(--warn)' : 'var(--ok)' }}>
            {n} words · target {lo}–{hi}
          </span>
          {!value.done && (
            <button className="btn btn-primary btn-sm" disabled={n < 5} onClick={() => set({ done: true })}>
              Fertig — check it
            </button>
          )}
        </div>
      </div>

      {value.done && (
        <div className="stack">
          <div className="card stack-sm">
            <div className="sec-title">Form</div>
            <div className="small">{gc.open ? '✅' : '❌'} Greeting {gc.open ? '' : '— start with Liebe/r … or Sehr geehrte/r …'}</div>
            <div className="small">{gc.close ? '✅' : '❌'} Sign-off {gc.close ? '' : '— end with Viele Grüße / Mit freundlichen Grüßen + your name'}</div>
            <div className="small">{n >= lo && n <= hi + 10 ? '✅' : '⚠️'} Length: {n} words</div>
          </div>

          <div className="card stack-sm">
            <div className="sec-title">Did you cover every point?</div>
            {content.points.map((p, i) => (
              <div key={i} className="stack-sm" style={{ paddingBottom: 8, borderBottom: i < 2 ? '1px solid var(--line)' : undefined }}>
                <div className="small">
                  <span className="de bold">{p.de}</span>{' '}
                  {pointLooksCovered(text, p) ? <Pill tone="ok">looks covered</Pill> : <Pill tone="warn">not found</Pill>}
                </div>
                {value.ai?.points?.[i]?.comment && <div className="tiny muted">🤖 {value.ai.points[i].comment}</div>}
                <RateChips
                  label="Covered?"
                  value={ratings[i]}
                  onChange={(v) => {
                    const r = [...ratings]
                    r[i] = v
                    set({ ratings: r })
                  }}
                />
              </div>
            ))}
          </div>

          <div className="card stack-sm">
            <div className="sec-title">Grammar check</div>
            <Issues text={text} />
            {value.ai?.corrections?.length > 0 && (
              <div className="stack-sm">
                <div className="tiny dim">🤖 AI tutor</div>
                {value.ai.corrections.map((c, k) => (
                  <div key={k} className="card pad-sm small">
                    <div className="correction">
                      <div className="was">{c.wrong}</div>
                      <div className="is">{c.right}</div>
                    </div>
                    {c.why}
                  </div>
                ))}
              </div>
            )}
            {value.ai?.comment && <div className="note tip small">🤖 {value.ai.comment}</div>}
            {aiReady(state.settings) ? (
              <button className="btn btn-soft btn-sm" onClick={askAi} disabled={aiBusy}>
                {aiBusy ? 'Asking the tutor…' : value.ai ? '🤖 Ask again' : '🤖 Get AI examiner feedback'}
              </button>
            ) : (
              <div className="tiny dim">Add an Anthropic API key in Settings to get examiner-style AI feedback here.</div>
            )}
            {aiError && <div className="tiny" style={{ color: 'var(--bad)' }}>{aiError}</div>}
          </div>

          <div className="card sunk stack-sm">
            <div className="sec-title">A model answer</div>
            <div className="de small" style={{ whiteSpace: 'pre-line' }}>{withName(content.sample, state.profile.name)}</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={() => set({ done: false })}>
            ✎ Edit my text
          </button>
        </div>
      )}
    </div>
  )
}

/* ── Sprechen ────────────────────────────────────────────────────────────── */

/** A text area you can also dictate into. */
function SpeakBox({ value, onChange, placeholder, rows = 3, disabled }) {
  const [rec, setRec] = useState(null)
  const base = useRef('')
  useEffect(() => () => rec?.stop(), [rec])

  const toggle = () => {
    if (rec) {
      rec.stop()
      setRec(null)
      return
    }
    base.current = value ? value.trim() + ' ' : ''
    const r = listenLong({
      onText: (t) => onChange(base.current + t),
      onEnd: () => setRec(null),
      onError: () => setRec(null),
    })
    setRec(r)
  }

  return (
    <div className="stack-sm">
      <textarea
        className="textarea de"
        rows={rows}
        value={value || ''}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        spellCheck={false}
      />
      {!disabled && (
        <div className="row-wrap">
          {sttSupported() ? (
            <button className={`btn btn-sm ${rec ? 'btn-danger' : ''}`} onClick={toggle}>
              {rec ? '⏹ Stop' : '🎤 Speak'}
            </button>
          ) : (
            <span className="tiny dim">Say it out loud, then type what you said — speech recognition needs Chrome or Edge.</span>
          )}
          {rec && <span className="tiny dim">Listening… speak German</span>}
        </div>
      )}
    </div>
  )
}

function PartnerLine({ text, speaker = 'f', auto = false }) {
  const { state } = useProgress()
  useEffect(() => {
    if (auto) speakAs(text, { speaker, rate: state.settings.rate })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])
  return (
    <div className="row" style={{ gap: 8, alignItems: 'flex-start' }}>
      <span aria-hidden>🧑‍🏫</span>
      <span className="de grow bubble" style={{ margin: 0 }}>{text}</span>
      <button className="speak-btn" onClick={() => speakAs(text, { speaker, rate: state.settings.rate })} aria-label="Play">
        🔊
      </button>
    </div>
  )
}

function Model({ text, label = 'Model answer' }) {
  const { state } = useProgress()
  const t = withName(text, state.profile.name)
  return (
    <div className="card sunk pad-sm stack-sm">
      <div className="between">
        <span className="tiny dim">{label}</span>
        <button className="speak-btn" onClick={() => speakAs(t, { speaker: 'n', rate: state.settings.rate })} aria-label="Play model answer">
          🔊
        </button>
      </div>
      <div className="de small">{t}</div>
    </div>
  )
}

function looksLikeQuestion(t) {
  const s = fold(t).trim()
  return (
    /\?\s*$/.test(t.trim()) ||
    /^(wie|was|wo|wann|wer|wen|wem|welch\w*|warum|wohin|woher)\b/.test(s) ||
    /^\w+(st|t)\s+(du|ihr|sie)\b/.test(s) ||
    /^(hast|bist|kannst|magst|isst|willst)\b/.test(s)
  )
}

/** A1 Teil 1 — introduce yourself. */
export function IntroPart({ content, value = {}, onChange }) {
  const set = (patch) => onChange({ ...value, ...patch })
  const text = value.text || ''
  return (
    <div className="stack">
      <div className="row-wrap">
        {content.keywords.map((k) => (
          <Pill key={k.de} tone={pointLooksCovered(text, k) ? 'ok' : ''}>
            {k.de}
          </Pill>
        ))}
      </div>
      <SpeakBox value={text} onChange={(t) => set({ text: t })} rows={5} placeholder="Ich heiße … Ich bin … Jahre alt …" disabled={value.done} />
      <div className="card sunk pad-sm small stack-sm">
        <div className="bold">Then, in the exam:</div>
        {content.extra.map((x) => (
          <div key={x} className="de">• {x}</div>
        ))}
      </div>
      {!value.done ? (
        <button className="btn btn-primary" disabled={text.trim().length < 10} onClick={() => set({ done: true })}>
          Fertig
        </button>
      ) : (
        <div className="stack">
          <Model text={content.sample} />
          <RateChips value={value.ratings?.[0]} onChange={(v) => set({ ratings: [v] })} />
        </div>
      )}
    </div>
  )
}

/** A1 Teil 2 / A2 Teil 1 — ask with a word card, answer the partner. */
export function CardsPart({ content, value = {}, onChange, topic }) {
  const idx = value.idx || 0
  const card = content.cards[idx]
  const entry = value.entries?.[idx] || {}
  const setEntry = (patch) => onChange({ ...value, entries: { ...(value.entries || {}), [idx]: { ...entry, ...patch } } })
  const rate = (v) => {
    const r = [...(value.ratings || [])]
    r[idx] = v
    onChange({ ...value, ratings: r })
  }
  const stem = fold(card.word).slice(0, 5)

  return (
    <div className="stack">
      <CardNav count={content.cards.length} idx={idx} ratings={value.ratings} onGo={(i) => onChange({ ...value, idx: i })} />
      <div className="card center exam-card" style={{ flexDirection: 'column' }}>
        {topic && <div className="tiny dim">Thema: {topic}</div>}
        <div className="exam-card-word de">{card.word}</div>
      </div>

      <div className="stack-sm">
        <div className="small bold">1 · Ask a question with this word</div>
        <SpeakBox value={entry.q} onChange={(t) => setEntry({ q: t })} rows={2} placeholder="Was …? / Hast du …?" disabled={entry.qDone} />
        {!entry.qDone ? (
          <button className="btn btn-sm btn-primary" disabled={!entry.q?.trim()} onClick={() => setEntry({ qDone: true })}>
            Fertig
          </button>
        ) : (
          <>
            {!looksLikeQuestion(entry.q || '') && <div className="note warn small">That doesn’t look like a question yet — start with a W-word or the verb.</div>}
            {!fold(entry.q || '').includes(stem) && <div className="tiny dim">Tip: in the exam, use the word on the card.</div>}
            <Model text={card.sampleQ} label="One good question" />
          </>
        )}
      </div>

      {entry.qDone && (
        <div className="stack-sm">
          <div className="small bold">2 · Your partner asks you</div>
          <PartnerLine text={card.partnerQ} auto />
          <SpeakBox value={entry.a} onChange={(t) => setEntry({ a: t })} rows={2} placeholder="Ich …" disabled={entry.aDone} />
          {!entry.aDone ? (
            <button className="btn btn-sm btn-primary" disabled={!entry.a?.trim()} onClick={() => setEntry({ aDone: true })}>
              Fertig
            </button>
          ) : (
            <>
              <Model text={card.sampleA} label="One good answer" />
              <RateChips value={value.ratings?.[idx]} onChange={rate} />
              {idx < content.cards.length - 1 && value.ratings?.[idx] != null && (
                <button className="btn btn-primary" onClick={() => onChange({ ...value, idx: idx + 1 })}>
                  Next card →
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

/** A1 Teil 3 — polite requests from picture cards. */
export function RequestsPart({ content, value = {}, onChange }) {
  const idx = value.idx || 0
  const card = content.cards[idx]
  const entry = value.entries?.[idx] || {}
  const setEntry = (patch) => onChange({ ...value, entries: { ...(value.entries || {}), [idx]: { ...entry, ...patch } } })
  const rate = (v) => {
    const r = [...(value.ratings || [])]
    r[idx] = v
    onChange({ ...value, ratings: r })
  }
  return (
    <div className="stack">
      <CardNav count={content.cards.length} idx={idx} ratings={value.ratings} onGo={(i) => onChange({ ...value, idx: i })} />
      <div className="card center exam-card" style={{ flexDirection: 'column' }}>
        <div style={{ fontSize: '3rem' }} aria-hidden>{card.emoji}</div>
        <div className="small dim de">{card.label}</div>
      </div>
      <div className="stack-sm">
        <div className="small bold">1 · Ask for this, politely</div>
        <SpeakBox value={entry.q} onChange={(t) => setEntry({ q: t })} rows={2} placeholder="Kannst du bitte …? / Ich hätte gern …" disabled={entry.qDone} />
        {!entry.qDone ? (
          <button className="btn btn-sm btn-primary" disabled={!entry.q?.trim()} onClick={() => setEntry({ qDone: true })}>
            Fertig
          </button>
        ) : (
          <>
            {!/bitte/i.test(entry.q || '') && <div className="note warn small">Add <strong>bitte</strong> — it is what makes it a request.</div>}
            <Model text={card.sample} label="One good request" />
          </>
        )}
      </div>
      {entry.qDone && (
        <div className="stack-sm">
          <div className="small bold">2 · React to your partner’s request</div>
          <PartnerLine text={card.partnerReq} auto />
          <SpeakBox value={entry.a} onChange={(t) => setEntry({ a: t })} rows={2} placeholder="Ja, gern. / Tut mir leid, …" disabled={entry.aDone} />
          {!entry.aDone ? (
            <button className="btn btn-sm btn-primary" disabled={!entry.a?.trim()} onClick={() => setEntry({ aDone: true })}>
              Fertig
            </button>
          ) : (
            <>
              <Model text={card.reactSample} label="One good reaction" />
              <RateChips value={value.ratings?.[idx]} onChange={rate} />
              {idx < content.cards.length - 1 && value.ratings?.[idx] != null && (
                <button className="btn btn-primary" onClick={() => onChange({ ...value, idx: idx + 1 })}>
                  Next card →
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

/** A2 Teil 2 — talk about yourself from a topic card. */
export function MonologuePart({ content, value = {}, onChange }) {
  const set = (patch) => onChange({ ...value, ...patch })
  const text = value.text || ''
  return (
    <div className="stack">
      <div className="card center exam-card" style={{ flexDirection: 'column', gap: 10 }}>
        <div className="exam-card-word de" style={{ fontSize: '1.4rem' }}>{content.topic}</div>
        <div className="row-wrap" style={{ justifyContent: 'center' }}>
          {content.prompts.map((p) => (
            <Pill key={p.de} tone={pointLooksCovered(text, p) ? 'ok' : ''}>
              {p.de}
            </Pill>
          ))}
        </div>
      </div>
      <div className="tiny dim">Talk for about a minute. Say something about every point on the card.</div>
      <SpeakBox value={text} onChange={(t) => set({ text: t })} rows={6} placeholder="Ich wohne …" disabled={value.done} />
      {!value.done ? (
        <button className="btn btn-primary" disabled={text.trim().length < 20} onClick={() => set({ done: true })}>
          Fertig
        </button>
      ) : (
        <div className="stack">
          <Model text={content.sample} />
          <div className="small bold">The examiner asks one more question:</div>
          <PartnerLine text={content.followQ} speaker="m" auto />
          <SpeakBox value={value.follow} onChange={(t) => set({ follow: t })} rows={2} placeholder="Ja, … / Nein, …" />
          {value.follow?.trim() && <Model text={content.followA} label="One good answer" />}
          <RateChips value={value.ratings?.[0]} onChange={(v) => set({ ratings: [v] })} />
        </div>
      )}
    </div>
  )
}

/** A2 Teil 3 — plan something together, from your calendar. */
export function PlanPart({ content, value = {}, onChange }) {
  const idx = value.idx || 0
  const turn = content.turns[idx]
  const entry = value.entries?.[idx] || {}
  const setEntry = (patch) => onChange({ ...value, entries: { ...(value.entries || {}), [idx]: { ...entry, ...patch } } })
  const rate = (v) => {
    const r = [...(value.ratings || [])]
    r[idx] = v
    onChange({ ...value, ratings: r })
  }
  return (
    <div className="stack">
      <ExamText text={{ title: 'Aufgabe', body: content.task }} />
      <div className="card pad-sm">
        <div className="exam-text-title">Ihr Kalender – {content.day}</div>
        <table className="table cal-table">
          <tbody>
            {content.calendar.map((c) => (
              <tr key={c.t}>
                <td className="nowrap tiny dim" style={{ width: 60 }}>{c.t}</td>
                <td className="de small">{c.e || <span className="dim">—</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CardNav count={content.turns.length} idx={idx} ratings={value.ratings} onGo={(i) => onChange({ ...value, idx: i })} />
      <PartnerLine text={turn.partner} auto />
      <SpeakBox value={entry.a} onChange={(t) => setEntry({ a: t })} rows={2} placeholder="Nein, da … / Ja, da habe ich Zeit." disabled={entry.done} />
      {!entry.done ? (
        <button className="btn btn-sm btn-primary" disabled={!entry.a?.trim()} onClick={() => setEntry({ done: true })}>
          Fertig
        </button>
      ) : (
        <>
          <Model text={turn.sample} label="One good reply" />
          <RateChips value={value.ratings?.[idx]} onChange={rate} />
          {idx < content.turns.length - 1 && value.ratings?.[idx] != null && (
            <button className="btn btn-primary" onClick={() => onChange({ ...value, idx: idx + 1 })}>
              Next →
            </button>
          )}
        </>
      )}
    </div>
  )
}

function CardNav({ count, idx, ratings = [], onGo }) {
  return (
    <div className="row" style={{ gap: 6 }}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          className={`chip ${i === idx ? 'on' : ''}`}
          style={{ padding: '4px 11px' }}
          onClick={() => onGo(i)}
          aria-label={`Card ${i + 1}`}
        >
          {ratings[i] != null ? (ratings[i] === 1 ? '✓' : ratings[i] === 0.5 ? '~' : '✗') : i + 1}
        </button>
      ))}
    </div>
  )
}
