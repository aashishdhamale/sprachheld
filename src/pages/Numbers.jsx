/**
 * Numbers & time trainer — the A1 listening classic. Hear "Viertel vor acht"
 * and type 7:45, or see 3,99 € and write it out in German. Items are
 * generated, so it never runs dry; the band adapts as you go.
 */

import { useEffect, useRef, useState } from 'react'
import { useProgress } from '../store/progress.jsx'
import { MODES, MODE_BY_ID, makeItem, gradeItem, nextBand } from '../engine/numbers.js'
import { speak, stopSpeaking, ttsSupported } from '../lib/speech.js'
import { Bar, Pill, ScoreRing, Speak, Rich } from '../ui/primitives.jsx'

const ROUND = 10

const RULES = {
  zahlen: [
    '**Ones before tens:** 21 = *einundzwanzig* — "one-and-twenty". The single most common mistake.',
    '**-zehn vs -zig:** *dreizehn* is 13, *dreißig* is 30. Note *sechzehn/sechzig* and *siebzehn/siebzig* drop letters.',
    '**eins → ein:** 1 alone is *eins*, inside a word it is *ein*: *einhundert*, *einundzwanzig*. A final 1 stays *eins*: *hunderteins*.',
    '**One word:** German writes numbers below a million as one word — *zweitausendvierundzwanzig*.',
    '**Years:** 1999 is *neunzehnhundertneunundneunzig*; from 2000 on it is *zweitausend…*.',
  ],
  uhrzeit: [
    '**halb points forward:** *halb acht* = half **to** eight = 7:30. The trap for English speakers.',
    '**Viertel nach / vor:** *Viertel nach sieben* = 7:15, *Viertel vor acht* = 7:45.',
    '**Around half past:** *fünf vor halb acht* = 7:25, *fünf nach halb acht* = 7:35.',
    '**Timetables use 24 hours:** *neunzehn Uhr fünfundvierzig* = 19:45. 1:00 is *ein Uhr*, not "eins Uhr".',
    '**Regional:** in the east and south you will hear *viertel acht* (7:15) and *dreiviertel acht* (7:45).',
  ],
  preise: [
    '**Euro sits in the middle:** 3,99 € = *drei Euro neunundneunzig* — the cents come last, without "Cent".',
    '**1 €** is *ein Euro*; **1,50 €** is *ein Euro fünfzig*.',
    '**Under a euro:** 0,50 € = *fünfzig Cent*.',
    '**Comma, not point:** Germans write 3,99 € — the comma is the decimal mark.',
  ],
  datum: [
    '**Ordinals:** *erste, zweite, dritte, vierte … siebte, achte … neunzehnte* — add **-te** up to 19.',
    '**From 20:** add **-ste**: *zwanzigste, einundzwanzigste, dreißigste*.',
    '**der / am:** *Heute ist **der** dritte Mai* — but *Ich komme **am** dritten Mai* (after *am* the ending is **-en**).',
    '**Written:** 3.5. or 3. Mai — the dot marks an ordinal.',
  ],
  telefon: [
    '**Digit by digit:** phone numbers are usually read one digit at a time.',
    '**zwo = 2:** on the phone Germans say *zwo* so it is not confused with *drei*.',
    '**Mobile numbers** start with 01… (015, 016, 017).',
  ],
}

export default function Numbers() {
  const { state } = useProgress()
  const [mode, setMode] = useState('zahlen')
  const [direction, setDirection] = useState('listen')
  const [band, setBand] = useState(() => state.numbers?.zahlen?.band || 1)
  const [session, setSession] = useState(null)

  const m = MODE_BY_ID[mode]
  const canWrite = m.write
  const dir = canWrite ? direction : 'listen'

  const chooseMode = (id) => {
    setMode(id)
    setBand(state.numbers?.[id]?.band || 1)
  }

  if (session) {
    return (
      <Round
        key={session.started}
        mode={session.mode}
        direction={session.direction}
        startBand={session.band}
        onExit={() => setSession(null)}
        onAgain={(b) => setSession({ ...session, band: b, started: Date.now() })}
      />
    )
  }

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">🔢 Numbers &amp; time</h1>
        <p className="page-sub">
          Numbers, clock times, prices, dates and phone numbers — the part of every A1 listening
          test that catches people out. Generated fresh each round, and it adapts: three right in a
          row moves you up, two wrong moves you back.
        </p>
      </header>

      <div className="card stack">
        <div className="field">
          <span className="label">What to practise</span>
          <div className="row-wrap">
            {MODES.map((x) => (
              <button
                key={x.id}
                className={`chip ${mode === x.id ? 'on' : ''}`}
                aria-pressed={mode === x.id}
                onClick={() => chooseMode(x.id)}
              >
                <span aria-hidden>{x.icon}</span> {x.label}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <span className="label">Direction</span>
          <div className="row-wrap">
            <button
              className={`chip ${dir === 'listen' ? 'on' : ''}`}
              aria-pressed={dir === 'listen'}
              onClick={() => setDirection('listen')}
            >
              🎧 Hear it → type the digits
            </button>
            <button
              className={`chip ${dir === 'write' ? 'on' : ''}`}
              aria-pressed={dir === 'write'}
              disabled={!canWrite}
              onClick={() => setDirection('write')}
              title={canWrite ? undefined : 'Phone numbers are listening-only'}
            >
              ✍️ See it → write it in German
            </button>
          </div>
        </div>

        <div className="field">
          <span className="label">Start at</span>
          <div className="row-wrap">
            {m.bands.map((label, i) => (
              <button
                key={label}
                className={`chip ${band === i + 1 ? 'on' : ''}`}
                aria-pressed={band === i + 1}
                onClick={() => setBand(i + 1)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {dir === 'listen' && !ttsSupported() && (
          <div className="note warn small">
            This browser has no speech synthesis, so listening mode cannot play audio. Try the
            writing direction instead.
          </div>
        )}

        <button
          className="btn btn-primary btn-lg btn-block"
          disabled={dir === 'listen' && !ttsSupported()}
          onClick={() => setSession({ mode, direction: dir, band, started: Date.now() })}
        >
          Start a round of {ROUND}
        </button>

        {state.numbers?.[mode]?.rounds > 0 && (
          <div className="tiny dim">
            {state.numbers[mode].rounds} round{state.numbers[mode].rounds === 1 ? '' : 's'} so far · best{' '}
            {Math.round((state.numbers[mode].best || 0) * 100)}%
          </div>
        )}
      </div>

      <div className="card sunk">
        <div className="sec-title" style={{ marginBottom: 8 }}>
          {m.icon} {m.en} — what to listen for
        </div>
        <ul className="stack-sm small">
          {RULES[mode].map((r) => (
            <li key={r}>
              <Rich text={r} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ── One round ───────────────────────────────────────────────────────────── */

function Round({ mode, direction, startBand, onExit, onAgain }) {
  const { state, dispatch } = useProgress()
  const m = MODE_BY_ID[mode]
  const [band, setBand] = useState(startBand)
  const [items, setItems] = useState(() => [makeItem(mode, startBand)])
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [log, setLog] = useState([])
  const [bandNote, setBandNote] = useState(null)
  const streaks = useRef({ rightStreak: 0, wrongStreak: 0 })
  const startedAt = useRef(Date.now())
  const inputRef = useRef(null)
  const recorded = useRef(false)
  const [finished, setFinished] = useState(false)

  const item = items[items.length - 1]
  const done = finished

  const play = (slow = false) => {
    speak(item.say, { rate: slow ? state.settings.slowRate : item.rate ?? state.settings.rate })
  }

  // Each new item speaks itself in listening mode.
  useEffect(() => {
    if (direction === 'listen' && !done) play()
    inputRef.current?.focus()
    return () => stopSpeaking()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, done])

  const score = log.length ? log.filter((l) => l.correct).length / log.length : 0

  useEffect(() => {
    if (!done || recorded.current) return
    recorded.current = true
    dispatch({
      type: 'numbersRound',
      mode,
      band,
      score,
      minutes: Math.max(1, Math.round((Date.now() - startedAt.current) / 60000)),
    })
  }, [done, dispatch, mode, band, score])

  const submit = (e) => {
    e?.preventDefault()
    if (result || !input.trim()) return
    const r = gradeItem(item, input, direction)
    setResult(r)
    setLog((l) => [...l, { item, given: input, ...r }])

    const s = streaks.current
    s.rightStreak = r.correct ? s.rightStreak + 1 : 0
    s.wrongStreak = r.correct ? 0 : s.wrongStreak + 1
    const nb = nextBand(band, s)
    if (nb !== band) {
      setBand(nb)
      setBandNote(nb > band ? `⬆ Up to: ${m.bands[nb - 1]}` : `⬇ Back to: ${m.bands[nb - 1]}`)
      s.rightStreak = 0
      s.wrongStreak = 0
      dispatch({ type: 'numbersBand', mode, band: nb })
    } else setBandNote(null)

    dispatch({
      type: 'answer',
      correct: r.correct,
      given: input,
      expected: direction === 'write' ? r.words : r.expected,
      skill: direction === 'listen' ? 'listening' : 'writing',
      tags: [mode === 'uhrzeit' ? 'zeitangaben' : 'zahlen'],
      xp: r.correct ? 2 : 0,
    })
  }

  const next = () => {
    if (log.length >= ROUND) {
      setFinished(true)
      return
    }
    const seen = new Set(items.map((x) => x.key))
    let it = makeItem(mode, band)
    for (let guard = 0; seen.has(it.key) && guard < 20; guard++) it = makeItem(mode, band)
    setItems((xs) => [...xs, it])
    setInput('')
    setResult(null)
    setBandNote(null)
  }

  if (done) {
    const right = log.filter((l) => l.correct).length
    const misses = log.filter((l) => !l.correct)
    return (
      <div className="stack-lg">
        <div className="celebrate stack">
          <ScoreRing value={right / log.length} sub={`${right}/${log.length}`} />
          <h2 style={{ marginTop: 'var(--s4)' }}>
            {right === log.length ? 'Alles richtig!' : right >= log.length * 0.7 ? 'Gut gemacht!' : 'Weiter üben!'}
          </h2>
          <p className="small dim">
            {m.label} · finished at <strong>{m.bands[band - 1]}</strong>
          </p>
          {misses.length > 0 && (
            <div className="card sunk stack-sm" style={{ textAlign: 'left', width: '100%' }}>
              <div className="sec-title">Go over these</div>
              {misses.map((x, k) => (
                <div key={k} className="between" style={{ gap: 8, alignItems: 'flex-start' }}>
                  <span className="grow" style={{ minWidth: 0 }}>
                    <span className="bold">{x.expected}</span>{' '}
                    <span className="small dim">— you wrote “{x.given}”</span>
                    <span className="de small" style={{ display: 'block' }}>
                      {x.words}
                    </span>
                  </span>
                  <Speak text={x.item.say} />
                </div>
              ))}
            </div>
          )}
          <div className="stack-sm" style={{ width: '100%' }}>
            <button className="btn btn-primary btn-lg btn-block" onClick={() => onAgain(band)}>
              Another round
            </button>
            <button className="btn btn-block" onClick={onExit}>
              Done
            </button>
          </div>
        </div>
      </div>
    )
  }

  const placeholder =
    direction === 'write'
      ? mode === 'datum'
        ? item.frame === 'dat' ? 'z. B. dritten Mai' : 'z. B. dritte Mai'
        : 'auf Deutsch …'
      : { zahlen: 'z. B. 21', uhrzeit: 'z. B. 7:45', preise: 'z. B. 3,99', datum: 'z. B. 3.5.', telefon: 'nur Ziffern' }[mode]

  return (
    <div className="stack">
      <div className="between">
        <button className="btn btn-ghost btn-sm" onClick={onExit}>
          ✕ Exit
        </button>
        <div className="row" style={{ gap: 8 }}>
          <Pill>{m.bands[band - 1]}</Pill>
          <span className="tiny dim">
            {log.length + (result ? 0 : 1)} / {ROUND}
          </span>
        </div>
      </div>
      <Bar value={log.length / ROUND} size="sm" />

      <div
        className="card center"
        style={{ padding: 'var(--s7) var(--s4)', flexDirection: 'column', gap: 'var(--s3)', minHeight: 180 }}
      >
        {direction === 'listen' ? (
          <>
            <div className="tiny dim">{m.icon} Listen and type what you hear</div>
            <div className="row" style={{ gap: 8 }}>
              <button className="btn btn-primary btn-lg" onClick={() => play(false)}>
                🔊 Play again
              </button>
              <button className="btn btn-lg" onClick={() => play(true)} title="Slowly">
                🐢
              </button>
            </div>
            {result && <div className="de muted">{item.say}</div>}
          </>
        ) : (
          <>
            <div className="tiny dim">{m.icon} Write this in German</div>
            <div style={{ fontSize: '2rem', fontWeight: 750, letterSpacing: '-0.02em', textAlign: 'center' }}>
              {mode === 'datum' ? item.show.replace(item.lead, '').replace(/\.$/, '').trim() : item.show}
            </div>
            {mode === 'datum' && <div className="small muted">{item.lead} …</div>}
          </>
        )}
      </div>

      <form onSubmit={submit} className="row" style={{ gap: 8 }}>
        <input
          ref={inputRef}
          className="input grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          inputMode={direction === 'listen' ? (mode === 'datum' || mode === 'uhrzeit' || mode === 'preise' ? 'decimal' : 'numeric') : 'text'}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          disabled={!!result}
          aria-label="Your answer"
        />
        {!result && (
          <button className="btn btn-primary" type="submit" disabled={!input.trim()}>
            Check
          </button>
        )}
      </form>

      {result && (
        <div className={`feedback ${result.correct ? 'ok' : 'bad'}`} role="status">
          <div className="feedback-head">
            <span>{result.correct ? '✅' : '❌'}</span>
            <span>{result.correct ? 'Richtig!' : `It was ${direction === 'listen' ? result.expected : 'this'}`}</span>
          </div>
          <div className="feedback-body stack-sm">
            <div className="row" style={{ gap: 8 }}>
              <span className="de bold grow">{result.words}</span>
              <Speak text={item.say} />
            </div>
            {result.note && (
              <p className="small">
                <Rich text={result.note} />
              </p>
            )}
          </div>
        </div>
      )}

      {bandNote && (
        <div className="center">
          <Pill tone={bandNote.startsWith('⬆') ? 'ok' : 'warn'}>{bandNote}</Pill>
        </div>
      )}

      {result && (
        <button className="btn btn-primary btn-lg btn-block" onClick={next} autoFocus>
          {log.length >= ROUND ? 'See results' : 'Next'}
        </button>
      )}
    </div>
  )
}
