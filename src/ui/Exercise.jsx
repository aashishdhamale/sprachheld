/**
 * One component that renders and grades every exercise kind.
 *
 * Pages hand it an exercise and get a callback when the learner answers —
 * they never need to know what kind it was.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import { grade, headline, xpFor } from '../engine/grader.js'
import { seededShuffle, joinTokens, capFirst } from '../lib/text.js'
import { listenOnce, sttSupported, speak } from '../lib/speech.js'
import { useProgress } from '../store/progress.jsx'
import { Feedback, Rich, Speak, AudioControls, Pill } from './primitives.jsx'

const KIND_LABEL = {
  mcq: 'Choose the right answer',
  blank: 'Fill in the gap',
  article: 'Which article?',
  order: 'Put the sentence in order',
  translate: 'Translate',
  correct: 'Fix the sentence',
  conjugate: 'Conjugate the verb',
  match: 'Match the pairs',
  dialogue: 'Complete the conversation',
  listen: 'Listen and answer',
  speak: 'Say it out loud',
}

export default function Exercise({
  exercise: ex,
  onAnswered,
  onNext,
  index = 0,
  total = 0,
  autoFocus = true,
  nextLabel = 'Continue',
  scaffold = false,
}) {
  const { state } = useProgress()
  const [response, setResponse] = useState(initialResponse(ex))
  const [result, setResult] = useState(null)
  const [hintOpen, setHintOpen] = useState(false)
  const answered = result !== null
  const nextRef = useRef(null)

  // Reset whenever the exercise changes.
  useEffect(() => {
    setResponse(initialResponse(ex))
    setResult(null)
    setHintOpen(false)
  }, [ex?.id])

  // Move focus to Continue so keyboard users can chain through a drill.
  useEffect(() => {
    if (answered) nextRef.current?.focus()
  }, [answered])

  const submit = (override) => {
    if (answered) return
    const resp = override !== undefined ? override : response
    if (isEmpty(ex, resp)) return
    const res = grade(ex, resp)
    setResult(res)
    onAnswered?.({
      correct: res.correct,
      result: res,
      exercise: ex,
      xp: xpFor(res, ex.difficulty ?? 1),
      usedHint: hintOpen,
    })
  }

  const canSubmit = !answered && !isEmpty(ex, response)

  return (
    <div className="stack">
      <div className="between">
        <div className="row-wrap" style={{ gap: 6 }}>
          <span className="sec-title">{KIND_LABEL[ex.kind] || 'Question'}</span>
          {total > 1 && (
            <span className="tiny dim">
              {index + 1} / {total}
            </span>
          )}
        </div>
        <div className="row" style={{ gap: 6 }}>
          {ex.difficulty === 3 && <Pill tone="warn">stretch</Pill>}
          {ex.hint && !answered && (
            <button className="btn btn-ghost btn-sm" onClick={() => setHintOpen((v) => !v)}>
              💡 Hint
            </button>
          )}
        </div>
      </div>

      {hintOpen && ex.hint && (
        <div className="note tip small anim-in">
          <Rich text={ex.hint} />
        </div>
      )}

      <Body
        ex={ex}
        response={response}
        setResponse={setResponse}
        answered={answered}
        result={result}
        submit={submit}
        autoFocus={autoFocus}
        settings={state.settings}
      />

      {answered && (
        <Feedback
          correct={result.correct}
          title={headline(result, index)}
          correction={
            !result.correct && needsCorrectionCard(ex)
              ? { wrong: result.given, right: result.expected }
              : null
          }
        >
          {result.diagnosis && (
            <p style={{ marginBottom: 6 }}>
              <Rich text={result.diagnosis} />
            </p>
          )}
          <Rich text={ex.explain} />
          {scaffold && !result.correct && ex.kind !== 'match' && (
            <p className="small dim" style={{ marginTop: 8 }}>
              Take your time — this one comes back later so you can get it right.
            </p>
          )}
        </Feedback>
      )}

      <div className="row" style={{ marginTop: 4 }}>
        {!answered ? (
          <button className="btn btn-primary btn-lg btn-block" disabled={!canSubmit} onClick={() => submit()}>
            Check
          </button>
        ) : (
          <button ref={nextRef} className="btn btn-primary btn-lg btn-block" onClick={onNext}>
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  )
}

/* ── Per-kind bodies ─────────────────────────────────────────────────────── */

function Body(props) {
  switch (props.ex.kind) {
    case 'mcq':
      return <Choice {...props} prompt={props.ex.prompt} speakOptions />
    case 'dialogue':
      return <DialogueBody {...props} />
    case 'listen':
      return <ListenBody {...props} />
    case 'blank':
      return <BlankBody {...props} />
    case 'article':
      return <ArticleBody {...props} />
    case 'order':
      return <OrderBody {...props} />
    case 'translate':
      return <TranslateBody {...props} />
    case 'correct':
      return <CorrectBody {...props} />
    case 'conjugate':
      return <ConjugateBody {...props} />
    case 'match':
      return <MatchBody {...props} />
    case 'speak':
      return <SpeakBody {...props} />
    default:
      return <p className="dim">Unsupported exercise.</p>
  }
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

function Choice({ ex, response, setResponse, answered, submit, prompt, speakOptions }) {
  return (
    <div className="stack">
      {prompt && (
        <div className="row" style={{ alignItems: 'flex-start', gap: 8 }}>
          <p className="big grow" style={{ fontWeight: 550 }}>
            <Rich text={prompt} />
          </p>
        </div>
      )}
      <div className="opts">
        {ex.options.map((o, i) => {
          // The speaker sits beside the option, never inside it — a button
          // nested in a button is invalid HTML and breaks keyboard navigation.
          const speakable = speakOptions && looksGerman(o)
          return (
            <div className="opt-wrap" key={i}>
              <button
                className={`opt grow ${optClass(i, ex.answer, response, answered)}`}
                disabled={answered}
                onClick={() => {
                  setResponse(i)
                  submit(i)
                }}
              >
                <span className="opt-key">{LETTERS[i]}</span>
                <span className="grow de">{o}</span>
                {answered && i === ex.answer && <span className="opt-mark">✓</span>}
                {answered && i === response && i !== ex.answer && <span className="opt-mark">✕</span>}
              </button>
              {speakable && <Speak text={o} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function optClass(i, answer, response, answered) {
  if (!answered) return response === i ? 'picked' : ''
  if (i === answer) return 'correct'
  if (i === response) return 'wrong'
  return 'faded'
}

function DialogueBody(props) {
  const { ex, answered, response } = props
  const chosen = answered ? ex.options[response] : null
  return (
    <div className="stack">
      <div className="card sunk pad-sm stack-sm">
        {ex.lines.map((l, i) => {
          const isBlank = String(l.text).includes('___')
          const text = isBlank && chosen ? String(l.text).replace('___', chosen) : l.text
          return (
            <div key={i} className="row" style={{ alignItems: 'flex-start', gap: 8 }}>
              <span className="pill" style={{ minWidth: 44, justifyContent: 'center' }}>
                {l.who}
              </span>
              <span className={`grow de ${isBlank && !chosen ? 'dim' : ''}`}>{text}</span>
              {!isBlank && <Speak text={l.text} />}
            </div>
          )
        })}
      </div>
      <Choice {...props} prompt={null} speakOptions />
    </div>
  )
}

function ListenBody(props) {
  const { ex } = props
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="stack">
      <div className="card sunk pad-sm stack-sm">
        <AudioControls text={ex.audio} />
        {!revealed ? (
          <button className="btn btn-ghost btn-sm" onClick={() => setRevealed(true)}>
            Show transcript
          </button>
        ) : (
          <p className="de">{ex.audio}</p>
        )}
      </div>
      <p className="big" style={{ fontWeight: 550 }}>
        <Rich text={ex.question} />
      </p>
      <Choice {...props} prompt={null} />
    </div>
  )
}

function BlankBody({ ex, response, setResponse, answered, result, submit, autoFocus }) {
  const [before, after] = String(ex.sentence).split('___')
  const filled = answered ? result.given || '…' : response || '…'

  return (
    <div className="stack">
      <p className="big de" style={{ lineHeight: 1.9 }}>
        {before}
        <span
          className={`pill ${
            answered ? (result.correct ? 'pill-ok' : 'pill-bad') : 'pill-accent'
          }`}
          style={{ margin: '0 4px', fontSize: 'inherit', padding: '2px 12px' }}
        >
          {filled}
        </span>
        {after}
      </p>

      {ex.options?.length ? (
        <div className="opts">
          {ex.options.map((o, i) => (
            <button
              key={i}
              className={`opt ${blankOptClass(o, ex.answer, response, answered)}`}
              disabled={answered}
              onClick={() => {
                setResponse(o)
                submit(o)
              }}
            >
              <span className="opt-key">{LETTERS[i]}</span>
              <span className="grow de">{o}</span>
            </button>
          ))}
        </div>
      ) : (
        <TypedInput
          value={response}
          onChange={setResponse}
          onSubmit={submit}
          disabled={answered}
          state={answered ? (result.correct ? 'correct' : 'wrong') : ''}
          autoFocus={autoFocus}
          placeholder="Type the missing word"
        />
      )}
      {answered && !result.correct && (
        <p className="small">
          Correct: <strong className="de">{ex.answer}</strong>
        </p>
      )}
    </div>
  )
}

function blankOptClass(o, answer, response, answered) {
  const norm = (s) => String(s).trim().toLowerCase()
  if (!answered) return norm(response) === norm(o) ? 'picked' : ''
  if (norm(o) === norm(answer)) return 'correct'
  if (norm(o) === norm(response)) return 'wrong'
  return 'faded'
}

const ARTICLE_OPTIONS = ['der', 'die', 'das']

function ArticleBody({ ex, response, setResponse, answered, result, submit }) {
  const opts = ex.answer === 'die (pl)' ? [...ARTICLE_OPTIONS, 'die (pl)'] : ARTICLE_OPTIONS
  return (
    <div className="stack">
      <div className="card sunk center" style={{ padding: 'var(--s6) var(--s4)', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          <span className={answered ? '' : 'dim'}>{answered ? ex.answer : '___'}</span>{' '}
          <span className="de">{ex.noun}</span>
        </div>
        <div className="small dim">{ex.meaning}</div>
        {answered && <Speak text={`${ex.answer === 'die (pl)' ? 'die' : ex.answer} ${ex.noun}`} size="lg" />}
      </div>

      <div className="opts" style={{ gridTemplateColumns: `repeat(${opts.length}, 1fr)` }}>
        {opts.map((a) => (
          <button
            key={a}
            className={`opt ${articleOptClass(a, ex.answer, response, answered)}`}
            style={{ justifyContent: 'center', fontWeight: 700 }}
            disabled={answered}
            onClick={() => {
              setResponse(a)
              submit(a)
            }}
          >
            {a}
          </button>
        ))}
      </div>

      {answered && (
        <div className="card sunk pad-sm small stack-sm">
          <div className="between">
            <span className="dim">Singular</span>
            <strong className="de">
              {ex.answer === 'die (pl)' ? '—' : `${ex.answer} ${ex.noun}`}
            </strong>
          </div>
          {ex.plural && (
            <div className="between">
              <span className="dim">Plural</span>
              <strong className="de">{ex.plural}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function articleOptClass(a, answer, response, answered) {
  if (!answered) return response === a ? 'picked' : ''
  if (a === answer) return 'correct'
  if (a === response) return 'wrong'
  return 'faded'
}

function OrderBody({ ex, response, setResponse, answered, result }) {
  const bank = useMemo(() => seededShuffle(ex.tokens, ex.id), [ex.id])
  const picked = Array.isArray(response) ? response : []
  const usedCount = {}
  picked.forEach((t) => (usedCount[t] = (usedCount[t] || 0) + 1))
  const availableCount = {}
  bank.forEach((t) => (availableCount[t] = (availableCount[t] || 0) + 1))

  const add = (t) => !answered && setResponse([...picked, t])
  const removeAt = (i) => !answered && setResponse(picked.filter((_, j) => j !== i))

  return (
    <div className="stack">
      {ex.hint && !answered && <p className="small dim">{ex.hint}</p>}

      <div className={`builder-slot ${answered ? (result.correct ? 'correct' : 'wrong') : ''}`}>
        {picked.length === 0 && <span className="dim small">Tap the words in the right order…</span>}
        {picked.map((t, i) => (
          <button key={`${t}-${i}`} className="token" onClick={() => removeAt(i)} disabled={answered}>
            {i === 0 ? capFirst(t) : t}
          </button>
        ))}
      </div>

      <div className="token-bank">
        {bank.map((t, i) => {
          const spent = (usedCount[t] || 0) >= (availableCount[t] || 0)
          const alreadyIndex = bank.slice(0, i).filter((x) => x === t).length
          const disabled = answered || alreadyIndex < (usedCount[t] || 0) || spent
          return (
            <button key={`${t}-${i}`} className="token" onClick={() => add(t)} disabled={disabled}>
              {t}
            </button>
          )
        })}
      </div>

      <div className="row">
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => setResponse([])}
          disabled={answered || !picked.length}
        >
          ↺ Clear
        </button>
        {picked.length > 0 && !answered && (
          <span className="small dim grow" style={{ textAlign: 'right' }}>
            {joinTokens(picked)}
          </span>
        )}
      </div>

      {answered && !result.correct && (
        <div className="card sunk pad-sm">
          <div className="small dim">Correct sentence</div>
          <div className="row">
            <strong className="de big grow">{ex.answer}</strong>
            <Speak text={ex.answer} />
          </div>
          {ex.accept?.length > 0 && (
            <div className="tiny dim" style={{ marginTop: 4 }}>
              Also correct: {ex.accept.join(' · ')}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function TranslateBody({ ex, response, setResponse, answered, result, submit, autoFocus }) {
  const toGerman = ex.direction === 'en-de'
  return (
    <div className="stack">
      <div className="card sunk pad-sm">
        <div className="tiny dim" style={{ marginBottom: 4 }}>
          {toGerman ? 'English → German' : 'German → English'}
        </div>
        <div className="row">
          <span className={`big grow ${toGerman ? '' : 'de'}`} style={{ fontWeight: 550 }}>
            {ex.prompt}
          </span>
          {!toGerman && <Speak text={ex.prompt} />}
        </div>
      </div>

      <TypedInput
        value={response}
        onChange={setResponse}
        onSubmit={submit}
        disabled={answered}
        state={answered ? (result.correct ? 'correct' : 'wrong') : ''}
        autoFocus={autoFocus}
        multiline
        placeholder={toGerman ? 'Schreib den Satz auf Deutsch…' : 'Write it in English…'}
      />

      {answered && (
        <div className="card sunk pad-sm">
          <div className="small dim">Model answer</div>
          <div className="row">
            <strong className={`grow ${toGerman ? 'de' : ''}`}>{ex.answer}</strong>
            {toGerman && <Speak text={ex.answer} />}
          </div>
          {ex.accept?.length > 0 && (
            <div className="tiny dim" style={{ marginTop: 4 }}>
              Also fine: {ex.accept.join(' · ')}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function CorrectBody({ ex, response, setResponse, answered, result, submit, autoFocus }) {
  return (
    <div className="stack">
      <div className="card sunk pad-sm">
        <div className="tiny dim">This sentence has a mistake</div>
        <div className="row">
          <span className="big de grow" style={{ textDecoration: 'line-through', textDecorationColor: 'var(--bad)' }}>
            {ex.wrong}
          </span>
        </div>
      </div>
      <TypedInput
        value={response}
        onChange={setResponse}
        onSubmit={submit}
        disabled={answered}
        state={answered ? (result.correct ? 'correct' : 'wrong') : ''}
        autoFocus={autoFocus}
        multiline
        placeholder="Write the correct sentence"
      />
      {answered && !result.correct && (
        <div className="card sunk pad-sm row">
          <strong className="de grow">{ex.answer}</strong>
          <Speak text={ex.answer} />
        </div>
      )}
    </div>
  )
}

function ConjugateBody({ ex, response, setResponse, answered, result, submit, autoFocus }) {
  return (
    <div className="stack">
      <div className="card sunk center" style={{ padding: 'var(--s5)', flexDirection: 'column', gap: 4 }}>
        <div className="small dim">{ex.verb}</div>
        <div className="row" style={{ fontSize: '1.4rem', fontWeight: 700 }}>
          <span className="de">{ex.person}</span>
          <span className={answered ? (result.correct ? '' : 'dim') : 'dim'}>
            {answered ? ex.answer : '…'}
          </span>
        </div>
      </div>
      <TypedInput
        value={response}
        onChange={setResponse}
        onSubmit={submit}
        disabled={answered}
        state={answered ? (result.correct ? 'correct' : 'wrong') : ''}
        autoFocus={autoFocus}
        placeholder={`${ex.person} …`}
      />
    </div>
  )
}

function MatchBody({ ex, response, setResponse, answered, result }) {
  const rights = useMemo(() => seededShuffle(ex.pairs.map((p) => p[1]), ex.id), [ex.id])
  const picks = Array.isArray(response) ? response : new Array(ex.pairs.length).fill('')

  const setPick = (i, v) => {
    if (answered) return
    const next = picks.slice()
    // A value can only be used once — clear it wherever else it sits.
    for (let j = 0; j < next.length; j++) if (next[j] === v) next[j] = ''
    next[i] = v
    setResponse(next)
  }

  return (
    <div className="stack-sm">
      {ex.pairs.map((p, i) => {
        const ok = answered && picks[i] === p[1]
        return (
          <div
            key={i}
            className="card sunk pad-sm row"
            style={{
              borderColor: answered ? (ok ? 'var(--ok)' : 'var(--bad)') : undefined,
              gap: 'var(--s3)',
            }}
          >
            <span className="de grow">{p[0]}</span>
            <Speak text={p[0]} />
            <select
              className="select"
              style={{ maxWidth: 190 }}
              value={picks[i] || ''}
              disabled={answered}
              onChange={(e) => setPick(i, e.target.value)}
            >
              <option value="">choose…</option>
              {rights.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {answered && <span>{ok ? '✅' : '❌'}</span>}
          </div>
        )
      })}
      {answered && !result.correct && (
        <div className="card sunk pad-sm small stack-sm">
          <div className="dim">Correct pairs</div>
          {ex.pairs.map((p, i) => (
            <div key={i} className="between">
              <span className="de">{p[0]}</span>
              <strong>{p[1]}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function SpeakBody({ ex, response, setResponse, answered, result, submit, settings }) {
  const [listening, setListening] = useState(false)
  const [error, setError] = useState(null)
  const recRef = useRef(null)

  useEffect(() => () => recRef.current?.abort?.(), [])

  const start = () => {
    setError(null)
    setListening(true)
    recRef.current = listenOnce({
      onResult: ({ text, final }) => {
        setResponse(text)
        if (final) {
          setListening(false)
          submit(text)
        }
      },
      onError: (e) => {
        setError(
          e === 'unsupported'
            ? 'Speech recognition is not available in this browser — type your answer instead.'
            : e === 'not-allowed'
              ? 'Microphone access was blocked. Type your answer instead.'
              : 'Could not hear you. Try again or type your answer.',
        )
        setListening(false)
      },
      onEnd: () => setListening(false),
    })
    if (!recRef.current) setListening(false)
  }

  return (
    <div className="stack">
      <div className="card sunk pad-sm stack-sm">
        <div className="tiny dim">{ex.prompt}</div>
        <div className="row">
          <strong className="de big grow">{ex.answer}</strong>
          <Speak text={ex.answer} size="lg" rate={settings.slowRate} label="Hear it slowly" />
        </div>
      </div>

      {sttSupported() ? (
        <button
          className={`btn ${listening ? 'btn-danger' : 'btn-primary'} btn-lg btn-block`}
          onClick={listening ? () => recRef.current?.stop() : start}
          disabled={answered}
        >
          {listening ? '🔴 Listening — tap to stop' : '🎙 Tap and say it'}
        </button>
      ) : (
        <p className="small dim">
          This browser cannot listen to you. Say the sentence out loud, then type it to check
          yourself.
        </p>
      )}

      {error && <div className="note warn small">{error}</div>}

      <TypedInput
        value={response}
        onChange={setResponse}
        onSubmit={submit}
        disabled={answered}
        state={answered ? (result.correct ? 'correct' : 'wrong') : ''}
        placeholder="…or type what you said"
      />
      {response && !answered && <p className="tiny dim">Heard: “{response}”</p>}
    </div>
  )
}

/* ── Shared input ────────────────────────────────────────────────────────── */

const UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü']

function TypedInput({
  value,
  onChange,
  onSubmit,
  disabled,
  state = '',
  autoFocus,
  placeholder,
  multiline = false,
}) {
  const ref = useRef(null)
  useEffect(() => {
    if (autoFocus && !disabled) {
      const t = setTimeout(() => ref.current?.focus(), 60)
      return () => clearTimeout(t)
    }
  }, [autoFocus, disabled])

  const insert = (ch) => {
    const el = ref.current
    if (!el) return
    const s = el.selectionStart ?? String(value || '').length
    const e = el.selectionEnd ?? s
    const next = String(value || '').slice(0, s) + ch + String(value || '').slice(e)
    onChange(next)
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(s + 1, s + 1)
    })
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && (!multiline || e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      onSubmit?.()
    }
  }

  const Tag = multiline ? 'textarea' : 'input'
  return (
    <div className="stack-sm">
      <Tag
        ref={ref}
        className={`${multiline ? 'textarea' : 'input'} ${state}`}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        rows={multiline ? 2 : undefined}
      />
      {!disabled && (
        <div className="row-wrap" style={{ gap: 4 }}>
          {UMLAUTS.map((u) => (
            <button key={u} className="chip" style={{ padding: '4px 10px' }} onClick={() => insert(u)}>
              {u}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function initialResponse(ex) {
  if (!ex) return ''
  if (ex.kind === 'order') return []
  if (ex.kind === 'match') return new Array(ex.pairs?.length || 0).fill('')
  if (['mcq', 'dialogue', 'listen'].includes(ex.kind)) return null
  return ''
}

function isEmpty(ex, r) {
  if (ex.kind === 'order') return !Array.isArray(r) || r.length === 0
  if (ex.kind === 'match') return !Array.isArray(r) || r.some((x) => !x)
  if (['mcq', 'dialogue', 'listen'].includes(ex.kind)) return r === null || r === undefined
  return !String(r ?? '').trim()
}

function needsCorrectionCard(ex) {
  return ['translate', 'correct', 'order', 'speak', 'blank', 'conjugate'].includes(ex.kind)
}

function looksGerman(s) {
  return /[äöüß]/i.test(s) || /\b(der|die|das|ich|du|er|sie|es|wir|ihr|ein|eine|ist|bin|hat|habe|nicht|kein)\b/i.test(s)
}

export { KIND_LABEL }
