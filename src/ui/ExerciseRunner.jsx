/**
 * Runs a sequence of exercises: tracks score, records every answer in the
 * learner profile, adapts the difficulty as it goes, and re-queues anything
 * answered wrong so the learner leaves having got it right at least once.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import Exercise from './Exercise.jsx'
import { Bar, ScoreRing, Pill } from './primitives.jsx'
import { useProgress } from '../store/progress.jsx'
import { tuneSession, bandFor } from '../engine/adaptive.js'
import { srsGradeFor } from '../engine/grader.js'

export default function ExerciseRunner({
  exercises,
  lessonId = null,
  onDone,
  title,
  showSummary = true,
  requeueWrong = true,
  nextLabel = 'Continue',
  doneLabel = 'Finish',
}) {
  const { state, dispatch } = useProgress()
  const [queue, setQueue] = useState(() => exercises.slice())
  const [pos, setPos] = useState(0)
  const [log, setLog] = useState([])
  const [streaks, setStreaks] = useState({ correct: 0, wrong: 0 })
  const [finished, setFinished] = useState(false)
  const startedAt = useRef(Date.now())
  const requeued = useRef(new Set())

  useEffect(() => {
    setQueue(exercises.slice())
    setPos(0)
    setLog([])
    setStreaks({ correct: 0, wrong: 0 })
    setFinished(false)
    startedAt.current = Date.now()
    requeued.current = new Set()
  }, [exercises])

  const current = queue[pos]
  const firstPassTotal = exercises.length
  const answeredFirstPass = log.filter((l) => l.firstPass).length

  const band = useMemo(() => {
    if (!current) return 2
    const base = bandFor(state.skills, current.skill || 'grammar')
    return tuneSession({ band: base, correctStreak: streaks.correct, wrongStreak: streaks.wrong }).band
  }, [current?.id, state.skills, streaks])

  const scaffold = streaks.wrong >= 2

  const onAnswered = ({ correct, result, exercise, xp, usedHint }) => {
    dispatch({
      type: 'answer',
      exercise,
      correct,
      given: result.given,
      expected: result.expected,
      skill: exercise.skill || 'grammar',
      tags: exercise.tags || [],
      lessonId,
      xp,
    })
    // Grade the underlying vocabulary card too, when the exercise targets a word.
    if (exercise.vocabId) {
      dispatch({ type: 'srs', kind: 'v', id: exercise.vocabId, grade: srsGradeFor(result, usedHint) })
    }
    setLog((l) => [...l, { id: exercise.id, correct, firstPass: !requeued.current.has(exercise.id) }])
    setStreaks((s) => ({
      correct: correct ? s.correct + 1 : 0,
      wrong: correct ? 0 : s.wrong + 1,
    }))

    // Put a wrong answer back near the end so it comes round again.
    if (!correct && requeueWrong && !requeued.current.has(exercise.id)) {
      requeued.current.add(exercise.id)
      setQueue((q) => [...q, exercise])
    }
  }

  const next = () => {
    if (pos + 1 >= queue.length) {
      const minutes = Math.max(1, Math.round((Date.now() - startedAt.current) / 60000))
      setFinished(true)
      dispatch({ type: 'time', minutes })
      if (!showSummary) onDone?.(summaryOf(log))
      return
    }
    setPos((p) => p + 1)
  }

  if (!exercises.length) {
    return <p className="dim">Nothing to practise here yet.</p>
  }

  if (finished && showSummary) {
    const s = summaryOf(log)
    return (
      <div className="celebrate stack">
        <ScoreRing value={s.score} sub={`${s.correct}/${s.total}`} />
        <div>
          <h2 style={{ marginTop: 'var(--s4)' }}>
            {s.score >= 0.9 ? 'Ausgezeichnet!' : s.score >= 0.7 ? 'Gut gemacht!' : 'Weiter so!'}
          </h2>
          <p className="muted">
            {s.score >= 0.9
              ? 'Almost everything right on the first try.'
              : s.score >= 0.7
                ? 'Solid. The ones you missed will come back in your review.'
                : 'Every mistake is now scheduled for review — that is how it sticks.'}
          </p>
        </div>
        {s.wrongIds.length > 0 && (
          <p className="small dim">
            {s.wrongIds.length} item{s.wrongIds.length === 1 ? '' : 's'} added to your review queue.
          </p>
        )}
        <button className="btn btn-primary btn-lg" onClick={() => onDone?.(s)}>
          {doneLabel}
        </button>
      </div>
    )
  }

  if (!current) return null

  return (
    <div className="stack">
      <div className="stack-sm">
        <div className="between">
          {title ? <span className="sec-title">{title}</span> : <span />}
          <div className="row" style={{ gap: 6 }}>
            {streaks.correct >= 3 && <Pill tone="ok">🔥 {streaks.correct} in a row</Pill>}
            <span className="tiny dim">
              {Math.min(answeredFirstPass + 1, firstPassTotal)} / {firstPassTotal}
            </span>
          </div>
        </div>
        <Bar value={answeredFirstPass / firstPassTotal} size="sm" label="Progress" />
      </div>

      <Exercise
        key={`${current.id}-${pos}`}
        exercise={current}
        index={pos}
        total={queue.length}
        onAnswered={onAnswered}
        onNext={next}
        nextLabel={pos + 1 >= queue.length ? doneLabel : nextLabel}
        scaffold={scaffold}
      />

      {requeued.current.has(current.id) && pos >= firstPassTotal && (
        <p className="tiny dim center">Second chance — you missed this one earlier.</p>
      )}
    </div>
  )
}

function summaryOf(log) {
  const firstPass = log.filter((l) => l.firstPass)
  const correct = firstPass.filter((l) => l.correct).length
  const total = firstPass.length || 1
  return {
    correct,
    total: firstPass.length,
    score: correct / total,
    wrongIds: firstPass.filter((l) => !l.correct).map((l) => l.id),
  }
}

export { summaryOf }
