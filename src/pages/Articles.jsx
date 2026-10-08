/**
 * The article trainer — der / die / das, endlessly, with spaced repetition so
 * the nouns you keep getting wrong come back most often.
 */

import { useMemo, useRef, useState } from 'react'
import { nouns, levelsIn } from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { cardId, strength, GRADE } from '../engine/srs.js'
import { articleHint } from '../engine/grader.js'
import { dayNumber } from '../lib/storage.js'
import { Speak, Pill, Bar, Empty, ScoreRing, Rich } from '../ui/primitives.jsx'

const GENDER_CLASS = { der: 'gender-der', die: 'gender-die', das: 'gender-das' }
const ROUND = 10

export default function Articles() {
  const { state, dispatch } = useProgress()
  const [level, setLevel] = useState('all')
  const [session, setSession] = useState(null)

  const pool = useMemo(
    () => (level === 'all' ? nouns : nouns.filter((n) => n.level === level)),
    [level],
  )

  if (!nouns.length) {
    return (
      <Empty icon="🎲" title="No nouns yet">
        Article practice appears once vocabulary content is installed.
      </Empty>
    )
  }

  if (session) {
    return (
      <Round
        words={session}
        onExit={() => setSession(null)}
        onAgain={() => setSession(buildRound(pool, state))}
      />
    )
  }

  const stats = genderStats(state, nouns)

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">🎲 Article trainer</h1>
        <p className="page-sub">
          German gender is not guessable — it is learned. Ten nouns per round, weighted so the
          ones you keep missing come back most often.
        </p>
      </header>

      <div className="card stack">
        <div className="row-wrap">
          <span className="small bold">Level</span>
          {['all', ...levelsIn(nouns)].map((l) => (
            <button
              key={l}
              className={`chip ${level === l ? 'on' : ''}`}
              aria-pressed={level === l}
              onClick={() => setLevel(l)}
            >
              {l === 'all' ? 'All' : l}
            </button>
          ))}
          <span className="tiny dim grow" style={{ textAlign: 'right' }}>
            {pool.length} nouns
          </span>
        </div>
        <button
          className="btn btn-primary btn-lg btn-block"
          disabled={!pool.length}
          onClick={() => setSession(buildRound(pool, state))}
        >
          Start a round of {Math.min(ROUND, pool.length)}
        </button>
      </div>

      <div className="grid grid-3">
        {['der', 'die', 'das'].map((g) => (
          <div key={g} className="card pad-sm" style={{ textAlign: 'center' }}>
            <span className={`pill ${GENDER_CLASS[g]}`} style={{ fontSize: '1rem', padding: '4px 14px' }}>
              {g}
            </span>
            <div style={{ fontSize: '1.4rem', fontWeight: 750, marginTop: 8 }}>{stats[g].total}</div>
            <div className="tiny dim">nouns</div>
            {stats[g].seen > 0 && (
              <div style={{ marginTop: 8 }}>
                <Bar value={stats[g].known / stats[g].total} size="sm" tone="ok" />
                <div className="tiny dim" style={{ marginTop: 4 }}>
                  {stats[g].known} learned
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="card sunk">
        <div className="sec-title" style={{ marginBottom: 8 }}>
          Patterns worth knowing
        </div>
        <div className="stack-sm small">
          <Rule g="die" text="-ung, -heit, -keit, -schaft, -ion, -tät, -ik, -ur — always feminine" />
          <Rule g="das" text="-chen, -lein, -ment, -um — always neuter. Also most Ge- words." />
          <Rule g="der" text="-er, -ling, -ismus, -ant, -or — usually masculine. Also days, months, seasons." />
          <Rule g="die" text="Every plural takes die, whatever the singular gender was." />
        </div>
      </div>
    </div>
  )
}

function Rule({ g, text }) {
  return (
    <div className="row" style={{ alignItems: 'flex-start', gap: 8 }}>
      <span className={`pill ${GENDER_CLASS[g]}`} style={{ minWidth: 38, justifyContent: 'center' }}>
        {g}
      </span>
      <span className="muted grow">{text}</span>
    </div>
  )
}

/* ── One round ───────────────────────────────────────────────────────────── */

function Round({ words, onExit, onAgain }) {
  const { state, dispatch } = useProgress()
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [log, setLog] = useState([])
  const streak = useRef(0)

  const w = words[i]
  const answered = picked !== null
  const correct = answered && picked === w.article

  const choose = (a) => {
    if (answered) return
    setPicked(a)
    const ok = a === w.article
    streak.current = ok ? streak.current + 1 : 0
    dispatch({ type: 'srs', kind: 'v', id: w.id, grade: ok ? GRADE.GOOD : GRADE.AGAIN })
    dispatch({
      type: 'answer',
      exercise: { id: `art.${w.id}`, kind: 'article', noun: w.de },
      correct: ok,
      given: `${a} ${w.de}`,
      expected: `${w.article} ${w.de}`,
      skill: 'articles',
      tags: ['artikel'],
      xp: ok ? 2 : 0,
    })
    setLog((l) => [...l, { id: w.id, ok }])
  }

  const next = () => {
    setPicked(null)
    setI((n) => n + 1)
  }

  if (i >= words.length) {
    const right = log.filter((l) => l.ok).length
    const wrongWords = log.filter((l) => !l.ok).map((l) => words.find((x) => x.id === l.id))
    return (
      <div className="stack-lg">
        <div className="celebrate stack">
          <ScoreRing value={right / words.length} sub={`${right}/${words.length}`} />
          <h2 style={{ marginTop: 'var(--s4)' }}>
            {right === words.length ? 'Alles richtig!' : right >= words.length * 0.7 ? 'Gut!' : 'Weiter üben!'}
          </h2>
          {wrongWords.length > 0 && (
            <div className="card sunk stack-sm" style={{ textAlign: 'left', width: '100%' }}>
              <div className="sec-title">Learn these</div>
              {wrongWords.filter(Boolean).map((x) => (
                <div key={x.id} className="between">
                  <span className="row" style={{ gap: 8 }}>
                    <span className={`pill ${GENDER_CLASS[x.article]}`} style={{ minWidth: 36, justifyContent: 'center' }}>
                      {x.article}
                    </span>
                    <span className="de bold">{x.de}</span>
                  </span>
                  <span className="small dim">{x.en}</span>
                </div>
              ))}
            </div>
          )}
          <div className="stack-sm" style={{ width: '100%' }}>
            <button className="btn btn-primary btn-lg btn-block" onClick={onAgain}>
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

  return (
    <div className="stack">
      <div className="between">
        <button className="btn btn-ghost btn-sm" onClick={onExit}>
          ✕ Exit
        </button>
        <div className="row" style={{ gap: 8 }}>
          {streak.current >= 3 && <Pill tone="ok">🔥 {streak.current}</Pill>}
          <span className="tiny dim">
            {i + 1} / {words.length}
          </span>
        </div>
      </div>
      <Bar value={i / words.length} size="sm" />

      <div
        className="card center"
        style={{ padding: 'var(--s8) var(--s4)', flexDirection: 'column', gap: 8, minHeight: 190 }}
      >
        <div style={{ fontSize: '2rem', fontWeight: 750, letterSpacing: '-0.02em' }}>
          <span className={answered ? '' : 'dim'} style={{ color: answered ? `var(--${w.article})` : undefined }}>
            {answered ? w.article : '___'}
          </span>{' '}
          <span className="de">{w.de}</span>
        </div>
        <div className="muted">{w.en}</div>
        {answered && <Speak text={`${w.article} ${w.de}`} size="lg" />}
      </div>

      <div className="opts" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {['der', 'die', 'das'].map((a) => (
          <button
            key={a}
            className={`opt ${optClass(a, w.article, picked, answered)}`}
            style={{ justifyContent: 'center', fontWeight: 700, fontSize: '1.05rem' }}
            disabled={answered}
            onClick={() => choose(a)}
          >
            {a}
          </button>
        ))}
      </div>

      {answered && (
        <div className={`feedback ${correct ? 'ok' : 'bad'}`}>
          <div className="feedback-head">
            <span>{correct ? '✅' : '❌'}</span>
            <span>
              {w.article} {w.de}
            </span>
          </div>
          <div className="feedback-body stack-sm">
            <div className="between small">
              <span className="dim">Plural</span>
              <strong className="de">{w.plural || '—'}</strong>
            </div>
            <div className="between small">
              <span className="dim">Example</span>
              <strong className="de" style={{ textAlign: 'right' }}>
                {w.example}
              </strong>
            </div>
            {!correct && (
              <p style={{ marginTop: 4 }}>
                <Rich text={articleHint({ noun: w.de, answer: w.article })} />
              </p>
            )}
          </div>
        </div>
      )}

      {answered && (
        <button className="btn btn-primary btn-lg btn-block" onClick={next} autoFocus>
          {i + 1 >= words.length ? 'See results' : 'Next'}
        </button>
      )}
    </div>
  )
}

function optClass(a, answer, picked, answered) {
  if (!answered) return ''
  if (a === answer) return 'correct'
  if (a === picked) return 'wrong'
  return 'faded'
}

/* ── Selection weighted by how badly the noun is known ───────────────────── */

function buildRound(pool, state) {
  const today = dayNumber()
  const scored = pool.map((n) => {
    const card = state.srs[cardId.vocab(n.id)]
    // Lower score = more urgent.
    let s = strength(card)
    if (!card) s = 0.35 // unseen words are worth showing, but due cards come first
    else if ((card.due ?? 0) <= today) s -= 0.5
    s += Math.random() * 0.35 // keep rounds from being identical
    return { n, s }
  })
  scored.sort((a, b) => a.s - b.s)
  return scored.slice(0, Math.min(ROUND, pool.length)).map((x) => x.n)
}

function genderStats(state, list) {
  const out = {
    der: { total: 0, seen: 0, known: 0 },
    die: { total: 0, seen: 0, known: 0 },
    das: { total: 0, seen: 0, known: 0 },
  }
  for (const n of list) {
    const g = out[n.article]
    if (!g) continue
    g.total++
    const card = state.srs[cardId.vocab(n.id)]
    if (card?.reps) {
      g.seen++
      if (strength(card) > 0.5) g.known++
    }
  }
  return out
}
