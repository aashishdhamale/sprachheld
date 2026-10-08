import { useState } from 'react'
import { useProgress } from '../store/progress.jsx'
import { CONTENT_STATS, lessons, lessonsByLevel, levelsIn } from '../content/index.js'

const GOALS = [
  { min: 10, label: '10 min', sub: 'Light' },
  { min: 15, label: '15 min', sub: 'Steady' },
  { min: 25, label: '25 min', sub: 'Serious' },
]

const STARTS = [
  { level: 'A1', label: 'Complete beginner', sub: 'I know almost no German' },
  { level: 'A1', label: 'A few words', sub: 'Hallo, danke, tschüss — start at A1 anyway' },
  { level: 'A2', label: 'I know the basics', sub: 'Present tense, simple sentences — skip ahead to A2' },
  { level: 'B1', label: 'I can get by', sub: 'Perfekt, dative, weil-clauses — skip ahead to B1' },
].filter((s) => lessonsByLevel[s.level]?.length)

const TOP_LEVEL = levelsIn(lessons).slice(-1)[0] || 'A1'

export default function Onboarding() {
  const { dispatch } = useProgress()
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [goal, setGoal] = useState(15)
  const [start, setStart] = useState(0)

  const finish = () => {
    dispatch({
      type: 'profile',
      patch: {
        name: name.trim(),
        dailyGoalMin: goal,
        level: STARTS[start].level,
        onboarded: true,
      },
    })
  }

  return (
    <div className="app">
      <main className="main" style={{ maxWidth: 520, paddingTop: 'var(--s7)' }}>
        {step === 0 && (
          <div className="stack-lg anim-in">
            <div style={{ textAlign: 'center' }}>
              <div
                className="brand-mark"
                style={{ width: 52, height: 52, margin: '0 auto var(--s4)', fontSize: 22 }}
                aria-hidden
              />
              <h1>Sprachheld</h1>
              <p className="muted big" style={{ marginTop: 6 }}>
                German from A1 to {TOP_LEVEL} — by using it, not by reading about it.
              </p>
            </div>

            <div className="card stack">
              <div className="grid grid-3">
                <Stat n={CONTENT_STATS.lessons} label="lessons" />
                <Stat n={CONTENT_STATS.vocab} label="words" />
                <Stat n={CONTENT_STATS.exercises} label="exercises" />
              </div>
              <hr />
              <ul className="stack-sm small muted" style={{ paddingLeft: '1.1em' }}>
                <li>Short explanations, then immediate practice</li>
                <li>Real conversations that correct your German as you go</li>
                <li>Spaced repetition so what you learn actually sticks</li>
                <li>Everything stays on this device — no account, no server</li>
              </ul>
            </div>

            <button className="btn btn-primary btn-lg btn-block" onClick={() => setStep(1)}>
              Los geht's →
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="stack-lg anim-in">
            <div>
              <h1>Wie heißt du?</h1>
              <p className="muted">Your tutor will use your name in conversations.</p>
            </div>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setStep(2)}
              placeholder="Your first name"
              autoFocus
              maxLength={30}
            />
            <div className="row">
              <button className="btn btn-ghost" onClick={() => setStep(0)}>
                Back
              </button>
              <button className="btn btn-primary grow" onClick={() => setStep(2)}>
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="stack-lg anim-in">
            <div>
              <h1>Where are you starting?</h1>
              <p className="muted">You can change this later — nothing is locked.</p>
            </div>
            <div className="stack-sm">
              {STARTS.map((s, i) => (
                <button
                  key={i}
                  className={`opt ${start === i ? 'picked' : ''}`}
                  onClick={() => setStart(i)}
                  style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}
                >
                  <span className="bold">{s.label}</span>
                  <span className="small dim">{s.sub}</span>
                </button>
              ))}
            </div>
            <div className="row">
              <button className="btn btn-ghost" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="btn btn-primary grow" onClick={() => setStep(3)}>
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="stack-lg anim-in">
            <div>
              <h1>How long each day?</h1>
              <p className="muted">
                Consistency beats intensity. Ten focused minutes a day works better than two
                hours on Sunday.
              </p>
            </div>
            <div className="row" style={{ gap: 'var(--s2)' }}>
              {GOALS.map((g) => (
                <button
                  key={g.min}
                  className={`opt grow ${goal === g.min ? 'picked' : ''}`}
                  onClick={() => setGoal(g.min)}
                  style={{ flexDirection: 'column', alignItems: 'center', gap: 0 }}
                >
                  <span className="bold big">{g.label}</span>
                  <span className="tiny dim">{g.sub}</span>
                </button>
              ))}
            </div>
            <div className="row">
              <button className="btn btn-ghost" onClick={() => setStep(2)}>
                Back
              </button>
              <button className="btn btn-primary grow btn-lg" onClick={finish}>
                Start learning
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

function Stat({ n, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 750, letterSpacing: '-0.02em' }}>{n}</div>
      <div className="tiny dim">{label}</div>
    </div>
  )
}
