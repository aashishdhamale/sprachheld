/**
 * Targeted practice on one weak area — reached from the dashboard's
 * "fix your weak spot" recommendation.
 */

import { useMemo, useState } from 'react'
import { allExercises } from '../content/index.js'
import { useProgress, labelForTag, SKILL_LABEL } from '../store/progress.jsx'
import { href, navigate } from '../lib/router.js'
import { bandFor, ratingOf } from '../engine/adaptive.js'
import { currentLevel } from '../engine/adaptive.js'
import { lessonsByLevel } from '../content/index.js'
import ExerciseRunner from '../ui/ExerciseRunner.jsx'
import { Empty, Bar, Pill } from '../ui/primitives.jsx'

const SIZE = 8

export default function Drill({ kind, value }) {
  const { state } = useProgress()
  const [running, setRunning] = useState(false)

  const label = kind === 'tag' ? labelForTag(value) : SKILL_LABEL[value] || value
  const level = currentLevel(lessonsByLevel, state.lessons)

  const pool = useMemo(() => {
    const match = (e) => (kind === 'tag' ? e.tags?.includes(value) : e.skill === value)
    const all = allExercises.filter(match)
    // Keep it at or below the learner's level, so a drill never leaps ahead.
    const order = ['A1', 'A2', 'B1']
    const max = order.indexOf(level)
    return all.filter((e) => order.indexOf(e.level) <= max)
  }, [kind, value, level])

  const stat = kind === 'tag' ? state.tagStats[value] : state.skills[value]
  const acc = stat?.total ? stat.correct / stat.total : null
  const rating = ratingOf(acc)

  const selection = useMemo(() => {
    if (!pool.length) return []
    const band = bandFor(state.skills, kind === 'skill' ? value : 'grammar')
    // Anything previously wrong comes first, then band-appropriate items.
    const wrongIds = new Set(state.mistakes.map((m) => m.exId))
    const wrong = pool.filter((e) => wrongIds.has(e.id))
    const rest = pool
      .filter((e) => !wrongIds.has(e.id))
      .sort((a, b) => Math.abs((a.difficulty ?? 2) - band) - Math.abs((b.difficulty ?? 2) - band))
    return [...wrong, ...rest].slice(0, SIZE)
  }, [pool, running])

  if (!pool.length) {
    return (
      <Empty icon="🎯" title={`No exercises for ${label} yet`} action={
        <a className="btn btn-primary" href={href('/practice')}>
          Back to practice
        </a>
      }>
        This area has no exercises at your level. Keep going through the lessons — more will
        unlock.
      </Empty>
    )
  }

  if (running) {
    return (
      <div className="stack">
        <div className="between">
          <button className="btn btn-ghost btn-sm" onClick={() => setRunning(false)}>
            ✕ Exit drill
          </button>
          <Pill tone="accent">{label}</Pill>
        </div>
        <ExerciseRunner
          exercises={selection}
          onDone={() => navigate('/practice')}
          title={`${label} drill`}
          doneLabel="Done"
        />
      </div>
    )
  }

  return (
    <div className="stack-lg">
      <header className="page-head">
        <div className="row-wrap" style={{ marginBottom: 6 }}>
          <Pill tone="accent">🎯 Targeted practice</Pill>
        </div>
        <h1 className="page-title">{label}</h1>
        <p className="page-sub">
          {acc == null
            ? 'You have not answered enough of these yet — let us find out where you stand.'
            : `You are getting ${Math.round(acc * 100)}% of these right. ${
                rating.key === 'weak'
                  ? 'This is your weakest area, so it is worth the time.'
                  : 'A short drill will push it higher.'
              }`}
        </p>
      </header>

      {acc != null && (
        <div className="card stack-sm">
          <div className="between">
            <span className="small bold">Current accuracy</span>
            <span className="bold" style={{ color: `var(--${rating.tone})` }}>
              {Math.round(acc * 100)}%
            </span>
          </div>
          <Bar
            value={acc}
            tone={rating.tone === 'ok' ? 'ok' : rating.tone === 'warn' ? 'warn' : 'bad'}
          />
          <div className="tiny dim">
            {stat.total} answered · {stat.correct} correct
          </div>
        </div>
      )}

      <div className="card stack">
        <div className="between">
          <div>
            <div className="card-title">{selection.length}-question drill</div>
            <div className="card-sub">
              Starts with anything you have got wrong before, then adapts as you go.
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-lg btn-block" onClick={() => setRunning(true)}>
          Start drill
        </button>
      </div>

      <p className="tiny dim center">
        {pool.length} exercises available for this area across your levels.
      </p>
    </div>
  )
}
