/**
 * Translation practice in both directions. The point is not word-for-word
 * accuracy but saying the thing the way a German would say it.
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

export default function Translate() {
  const { state } = useProgress()
  const [dir, setDir] = useState('both')
  const [running, setRunning] = useState(false)

  const myLevel = currentLevel(lessonsByLevel, state.lessons)
  const order = ['A1', 'A2', 'B1']

  const pool = useMemo(() => {
    const max = order.indexOf(myLevel)
    return allExercises.filter(
      (e) =>
        e.kind === 'translate' &&
        order.indexOf(e.level) <= max &&
        (dir === 'both' || e.direction === dir),
    )
  }, [dir, myLevel])

  const selection = useMemo(() => shuffle(pool).slice(0, SIZE), [pool, running])

  if (!pool.length) {
    return (
      <Empty
        icon="🔁"
        title="No translation exercises at your level yet"
        action={
          <a className="btn btn-primary" href={href('/practice')}>
            Back to practice
          </a>
        }
      >
        Work through a few more lessons and these will fill up.
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
          <Pill tone="accent">Translation</Pill>
        </div>
        <ExerciseRunner
          exercises={selection}
          onDone={() => navigate('/practice')}
          title="Translate"
          doneLabel="Done"
        />
      </div>
    )
  }

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">🔁 Translation</h1>
        <p className="page-sub">
          Say it the way a German would, not word for word. Several phrasings are accepted —
          umlauts and punctuation are forgiven.
        </p>
      </header>

      <Card className="stack">
        <div className="row-wrap">
          <span className="small bold">Direction</span>
          {[
            { k: 'both', l: 'Both' },
            { k: 'en-de', l: 'English → German' },
            { k: 'de-en', l: 'German → English' },
          ].map((d) => (
            <button
              key={d.k}
              className={`chip ${dir === d.k ? 'on' : ''}`}
              aria-pressed={dir === d.k}
              onClick={() => setDir(d.k)}
            >
              {d.l}
            </button>
          ))}
          <span className="tiny dim grow" style={{ textAlign: 'right' }}>
            {pool.length} available
          </span>
        </div>
        <button className="btn btn-primary btn-lg btn-block" onClick={() => setRunning(true)}>
          Translate {selection.length} sentences
        </button>
      </Card>

      <Card className="sunk">
        <div className="sec-title" style={{ marginBottom: 8 }}>
          Translating well
        </div>
        <ul className="stack-sm small muted" style={{ paddingLeft: '1.1em' }}>
          <li>
            German often needs a word English drops — <span className="de">Ich fahre <strong>mit dem</strong> Bus</span>,
            not “I go bus”.
          </li>
          <li>
            English continuous has no German equivalent: “I am working” is simply{' '}
            <span className="de">Ich arbeite</span>.
          </li>
          <li>
            Watch the verb position. If you start with a time phrase, the verb still comes second.
          </li>
        </ul>
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
