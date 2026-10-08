/** Small, dependency-free building blocks shared by every page. */

import { useEffect, useRef, useState } from 'react'
import { inlineMarkup } from '../lib/text.js'
import { speak, stopSpeaking, ttsSupported } from '../lib/speech.js'
import { useProgress } from '../store/progress.jsx'

/* ── Text with **bold** / *italic* / `code` ──────────────────────────────── */

export function Rich({ text, className }) {
  if (!text) return null
  const parts = inlineMarkup(String(text))
  return (
    <span className={className}>
      {parts.map((p, i) => {
        if (p.t === 'b') return <strong key={i}>{p.v}</strong>
        if (p.t === 'i') return <em key={i}>{p.v}</em>
        if (p.t === 'code') return <code key={i}>{p.v}</code>
        return <span key={i}>{p.v}</span>
      })}
    </span>
  )
}

/* ── Card ────────────────────────────────────────────────────────────────── */

export function Card({ as = 'div', className = '', children, ...rest }) {
  const El = as
  return (
    <El className={`card ${className}`} {...rest}>
      {children}
    </El>
  )
}

export function Section({ title, action, children, className = '' }) {
  return (
    <section className={className}>
      {(title || action) && (
        <div className="sec-head">
          {title && <h2 className="sec-title">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  )
}

/* ── Progress bar ────────────────────────────────────────────────────────── */

export function Bar({ value = 0, tone = '', size = '', label }) {
  const pct = Math.max(0, Math.min(100, Math.round(value * 100)))
  return (
    <div
      className={`bar ${size === 'sm' ? 'bar-sm' : size === 'lg' ? 'bar-lg' : ''}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className={`bar-fill ${tone}`} style={{ width: `${pct}%` }} />
    </div>
  )
}

/** The A1 ██████░░░░ 60% look from the spec, as a real element. */
export function LevelBar({ level, pct, done, total }) {
  const t = pct >= 1 ? 'ok' : ''
  return (
    <div className="row" style={{ gap: 'var(--s3)' }}>
      <span className={`pill pill-${level.toLowerCase()}`} style={{ width: 38, justifyContent: 'center' }}>
        {level}
      </span>
      <div className="grow">
        <Bar value={pct} tone={t} label={`${level} progress`} />
      </div>
      <span className="small bold nowrap" style={{ minWidth: 62, textAlign: 'right' }}>
        {Math.round(pct * 100)}%
        {total ? <span className="dim tiny"> · {done}/{total}</span> : null}
      </span>
    </div>
  )
}

/* ── Pills ───────────────────────────────────────────────────────────────── */

export function Pill({ tone = '', children, className = '', ...rest }) {
  return (
    <span className={`pill ${tone ? `pill-${tone}` : ''} ${className}`} {...rest}>
      {children}
    </span>
  )
}

export function LevelPill({ level }) {
  return <Pill tone={String(level).toLowerCase()}>{level}</Pill>
}

const GENDER_CLASS = { der: 'gender-der', die: 'gender-die', das: 'gender-das', 'die (pl)': 'gender-plural' }

export function ArticlePill({ article, children }) {
  return <span className={`pill ${GENDER_CLASS[article] || ''}`}>{children ?? article}</span>
}

/* ── Speak button ────────────────────────────────────────────────────────── */

export function Speak({ text, rate, size = '', label = 'Listen', className = '' }) {
  const { state } = useProgress()
  const [playing, setPlaying] = useState(false)
  const mounted = useRef(true)
  useEffect(() => () => { mounted.current = false }, [])

  if (!ttsSupported() || !text) return null

  const onClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (playing) {
      stopSpeaking()
      setPlaying(false)
      return
    }
    setPlaying(true)
    const ok = speak(text, {
      rate: rate ?? state.settings.rate,
      onend: () => mounted.current && setPlaying(false),
    })
    if (!ok) setPlaying(false)
  }

  return (
    <button
      type="button"
      className={`speak-btn ${size === 'lg' ? 'lg' : ''} ${playing ? 'playing' : ''} ${className}`}
      onClick={onClick}
      title={label}
      aria-label={label}
    >
      {playing ? '⏸' : '🔊'}
    </button>
  )
}

/** Play / slow / stop trio for listening exercises. */
export function AudioControls({ text, lines, onLine }) {
  const { state } = useProgress()
  const [busy, setBusy] = useState(false)
  const cancel = useRef(null)

  useEffect(() => () => stopSpeaking(), [])

  if (!ttsSupported()) {
    return (
      <div className="note warn small">
        Your browser has no speech synthesis, so audio is unavailable. The transcript is
        shown instead.
      </div>
    )
  }

  const play = (rate) => {
    stopSpeaking()
    setBusy(true)
    if (lines?.length) {
      cancel.current = speakSequenceLocal(lines, rate, onLine, () => setBusy(false))
    } else {
      speak(text, { rate, onend: () => setBusy(false) })
    }
  }

  const stop = () => {
    cancel.current?.()
    stopSpeaking()
    setBusy(false)
  }

  return (
    <div className="row-wrap">
      <button className="btn btn-primary" onClick={() => play(state.settings.rate)} disabled={busy}>
        ▶ Play
      </button>
      <button className="btn" onClick={() => play(state.settings.slowRate)} disabled={busy}>
        🐢 Slow
      </button>
      <button className="btn btn-ghost" onClick={stop} disabled={!busy}>
        ⏹ Stop
      </button>
      {busy && <span className="spinner" aria-hidden />}
    </div>
  )
}

function speakSequenceLocal(lines, rate, onLine, onDone) {
  let cancelled = false
  let i = 0
  const next = () => {
    if (cancelled || i >= lines.length) {
      if (!cancelled) onDone?.()
      return
    }
    const idx = i++
    onLine?.(idx)
    speak(lines[idx], { rate, onend: next })
  }
  next()
  return () => {
    cancelled = true
    onLine?.(-1)
  }
}

/* ── Feedback ────────────────────────────────────────────────────────────── */

export function Feedback({ correct, title, children, correction }) {
  return (
    <div className={`feedback ${correct ? 'ok' : 'bad'}`} role="status">
      <div className="feedback-head">
        <span>{correct ? '✅' : '❌'}</span>
        <span>{title}</span>
      </div>
      {correction && (
        <div className="correction">
          {correction.wrong && <div className="was">{correction.wrong}</div>}
          {correction.right && <div className="is">{correction.right}</div>}
        </div>
      )}
      {children && <div className="feedback-body">{children}</div>}
    </div>
  )
}

/* ── Empty state ─────────────────────────────────────────────────────────── */

export function Empty({ icon = '🗂', title, children, action }) {
  return (
    <div className="empty">
      <div className="empty-icon">{icon}</div>
      <div className="bold" style={{ color: 'var(--text-2)' }}>{title}</div>
      {children && <div className="small" style={{ marginTop: 6 }}>{children}</div>}
      {action && <div style={{ marginTop: 'var(--s4)' }}>{action}</div>}
    </div>
  )
}

/* ── Modal ───────────────────────────────────────────────────────────────── */

export function Modal({ open, onClose, title, children, footer }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="between" style={{ marginBottom: 'var(--s4)' }}>
            <h2>{title}</h2>
            <button className="btn btn-ghost btn-icon" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        )}
        {children}
        {footer && <div className="row" style={{ marginTop: 'var(--s5)', justifyContent: 'flex-end' }}>{footer}</div>}
      </div>
    </div>
  )
}

/* ── Toggle row ──────────────────────────────────────────────────────────── */

export function ToggleRow({ label, hint, value, onChange }) {
  return (
    <div className="between" style={{ padding: 'var(--s2) 0' }}>
      <div className="grow">
        <div className="bold small">{label}</div>
        {hint && <div className="tiny dim">{hint}</div>}
      </div>
      <button
        className="toggle"
        aria-pressed={!!value}
        aria-label={label}
        onClick={() => onChange(!value)}
      />
    </div>
  )
}

/* ── Score ring ──────────────────────────────────────────────────────────── */

export function ScoreRing({ value = 0, sub }) {
  const pct = Math.round(value * 100)
  return (
    <div className="score-ring" style={{ '--pct': pct }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 750, lineHeight: 1 }}>{pct}%</div>
        {sub && <div className="tiny dim">{sub}</div>}
      </div>
    </div>
  )
}

/* ── Step dots ───────────────────────────────────────────────────────────── */

export function StepDots({ total, current }) {
  return (
    <div className="steps" aria-label={`Step ${current + 1} of ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`step-dot ${i < current ? 'done' : i === current ? 'now' : ''}`} />
      ))}
    </div>
  )
}

/* ── Content blocks (from lesson/grammar `explain`) ──────────────────────── */

export function Blocks({ blocks = [] }) {
  return (
    <div className="stack">
      {blocks.map((b, i) => (
        <Block key={i} block={b} />
      ))}
    </div>
  )
}

function Block({ block: b }) {
  switch (b.kind) {
    case 'text':
      return <p><Rich text={b.text} /></p>
    case 'tip':
      return <div className="note tip"><Rich text={b.text} /></div>
    case 'warn':
      return <div className="note warn"><Rich text={b.text} /></div>
    case 'list':
      return (
        <ul className="stack-sm">
          {b.items.map((it, i) => (
            <li key={i}><Rich text={it} /></li>
          ))}
        </ul>
      )
    case 'examples':
      return (
        <div className="stack-sm">
          {b.items.map((ex, i) => (
            <ExampleRow key={i} ex={ex} />
          ))}
        </div>
      )
    case 'table':
      return (
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j} className={j > 0 ? 'de' : ''}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export function ExampleRow({ ex }) {
  const { state } = useProgress()
  return (
    <div className="example">
      <div className="row" style={{ gap: 8 }}>
        <span className="ex-de grow">{ex.de}</span>
        <Speak text={ex.de} />
      </div>
      {state.settings.showTranslation && <div className="ex-en">{ex.en}</div>}
      {ex.note && <div className="ex-note"><Rich text={ex.note} /></div>}
    </div>
  )
}
