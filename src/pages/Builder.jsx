/**
 * Sentence builder — every 'order' exercise in the app, sorted from easy to
 * hard, so word order becomes muscle memory.
 */

import { useMemo, useState } from 'react'
import { allExercises } from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { href, navigate } from '../lib/router.js'
import { currentLevel } from '../engine/adaptive.js'
import { lessonsByLevel } from '../content/index.js'
import ExerciseRunner from '../ui/ExerciseRunner.jsx'
import { Empty, Pill, Card } from '../ui/primitives.jsx'

const SIZE = 8

export default function Builder() {
  const { state } = useProgress()
  const [level, setLevel] = useState('auto')
  const [running, setRunning] = useState(false)

  const myLevel = currentLevel(lessonsByLevel, state.lessons)
  const order = ['A1', 'A2', 'B1']

  const pool = useMemo(() => {
    const all = allExercises.filter((e) => e.kind === 'order')
    if (level === 'auto') {
      const max = order.indexOf(myLevel)
      return all.filter((e) => order.indexOf(e.level) <= max)
    }
    return all.filter((e) => e.level === level)
  }, [level, myLevel])

  const selection = useMemo(() => {
    const sorted = pool.slice().sort((a, b) => (a.difficulty ?? 2) - (b.difficulty ?? 2))
    // Spread across difficulties rather than taking all the easy ones.
    const byD = { 1: [], 2: [], 3: [] }
    for (const e of sorted) byD[e.difficulty ?? 2].push(e)
    const out = []
    const want = { 1: 2, 2: 4, 3: 2 }
    for (const d of [1, 2, 3]) out.push(...shuffle(byD[d]).slice(0, want[d]))
    if (out.length < SIZE) out.push(...shuffle(pool).filter((e) => !out.includes(e)).slice(0, SIZE - out.length))
    return out.slice(0, SIZE).sort((a, b) => (a.difficulty ?? 2) - (b.difficulty ?? 2))
  }, [pool, running])

  if (!pool.length) {
    return (
      <Empty icon="🧩" title="No sentence exercises yet" action={
        <a className="btn btn-primary" href={href('/practice')}>Back to practice</a>
      }>
        These appear as you unlock lessons.
      </Empty>
    )
  }

  if (running) {
    return (
      <div className="stack">
        <div className="between">
          <button className="btn btn-ghost btn-sm" onClick={() => setRunning(false)}>
            ✕ Exit
          </button>
          <Pill tone="accent">Sentence builder</Pill>
        </div>
        <ExerciseRunner
          exercises={selection}
          onDone={() => navigate('/practice')}
          title="Build the sentence"
          doneLabel="Done"
        />
      </div>
    )
  }

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">🧩 Sentence builder</h1>
        <p className="page-sub">
          Tap the words into the right order. German word order is strict in one place and
          flexible everywhere else — this is how you feel the difference.
        </p>
      </header>

      <Card className="stack">
        <div className="row-wrap">
          <span className="small bold">Level</span>
          {['auto', 'A1', 'A2', 'B1'].map((l) => (
            <button
              key={l}
              className={`chip ${level === l ? 'on' : ''}`}
              aria-pressed={level === l}
              onClick={() => setLevel(l)}
            >
              {l === 'auto' ? `Auto (${myLevel})` : l}
            </button>
          ))}
          <span className="tiny dim grow" style={{ textAlign: 'right' }}>
            {pool.length} sentences
          </span>
        </div>
        <button className="btn btn-primary btn-lg btn-block" onClick={() => setRunning(true)}>
          Build {selection.length} sentences
        </button>
      </Card>

      <Card className="sunk">
        <div className="sec-title" style={{ marginBottom: 8 }}>
          The one rule that matters
        </div>
        <div className="stack-sm small">
          <p className="muted">
            In a German statement the conjugated verb is <strong>always the second element</strong>.
            Not the second word — the second <em>block</em>.
          </p>
          <div className="example">
            <div className="ex-de">
              <strong>Ich</strong> <u>fahre</u> morgen nach Berlin.
            </div>
            <div className="ex-en">I'm going to Berlin tomorrow.</div>
          </div>
          <div className="example">
            <div className="ex-de">
              <strong>Morgen</strong> <u>fahre</u> ich nach Berlin.
            </div>
            <div className="ex-en">
              Same meaning — put the time first and the subject moves behind the verb.
            </div>
          </div>
          <p className="muted">
            Both are correct. What you may <em>not</em> do is write “Morgen ich fahre…”.
          </p>
        </div>
      </Card>
    </div>
  )
}

function shuffle(a) {
  const out = a.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}
