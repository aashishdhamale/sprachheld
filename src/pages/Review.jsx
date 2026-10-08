/**
 * "Review today" — the spaced-repetition queue: vocabulary cards that are due,
 * then any exercises the learner previously got wrong.
 */

import { useMemo, useState } from 'react'
import { useProgress } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { buildReview } from '../engine/planner.js'
import { summarize, dueCount } from '../engine/srs.js'
import { Flashcard } from '../ui/VocabCard.jsx'
import ExerciseRunner from '../ui/ExerciseRunner.jsx'
import { Empty, Bar, Pill, Card } from '../ui/primitives.jsx'

export default function Review() {
  const { state } = useProgress()
  const [phase, setPhase] = useState('intro')
  const [i, setI] = useState(0)

  const queue = useMemo(() => buildReview(state, { limit: 20 }), [phase === 'intro'])
  const summary = summarize(state.srs, undefined, 'v')
  const due = dueCount(state.srs)

  if (due === 0 && phase === 'intro') {
    return (
      <div className="stack-lg">
        <header className="page-head">
          <h1 className="page-title">🔄 Review</h1>
        </header>
        <Empty
          icon="✅"
          title="Nothing is due right now"
          action={
            <a className="btn btn-primary" href={href('/learn')}>
              Take the next lesson
            </a>
          }
        >
          Spaced repetition only shows you a word when you are about to forget it. Come back
          tomorrow — or learn something new in the meantime.
        </Empty>
        {summary.total > 0 && <MemoryBreakdown s={summary} />}
      </div>
    )
  }

  if (phase === 'intro') {
    return (
      <div className="stack-lg">
        <header className="page-head">
          <h1 className="page-title">🔄 Review</h1>
          <p className="page-sub">
            {due > queue.total
              ? `${due} items are due. This session takes the ${queue.total} most urgent — `
              : `${queue.total} item${queue.total === 1 ? '' : 's'} due today — `}
            {queue.vocab.length} word{queue.vocab.length === 1 ? '' : 's'}
            {queue.exercises.length > 0 &&
              ` and ${queue.exercises.length} past mistake${queue.exercises.length === 1 ? '' : 's'}`}
            .
            {due > queue.total && ' The rest stay queued for your next session.'}
          </p>
        </header>

        <Card className="stack">
          <p className="muted small">
            Grade yourself honestly. <strong>Again</strong> brings a word back in minutes;{' '}
            <strong>Easy</strong> pushes it weeks away. The schedule does the remembering for you.
          </p>
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={() => {
              setI(0)
              setPhase(queue.vocab.length ? 'vocab' : 'exercises')
            }}
          >
            Start review
          </button>
        </Card>

        <MemoryBreakdown s={summary} />
      </div>
    )
  }

  if (phase === 'vocab') {
    const word = queue.vocab[i]
    if (!word) {
      setPhase(queue.exercises.length ? 'exercises' : 'done')
      return null
    }
    return (
      <div className="stack">
        <div className="between">
          <button className="btn btn-ghost btn-sm" onClick={() => setPhase('intro')}>
            ✕ Exit
          </button>
          <span className="tiny dim">
            Word {i + 1} of {queue.vocab.length}
          </span>
        </div>
        <Bar value={i / queue.vocab.length} size="sm" />
        <Flashcard
          key={word.id}
          vocab={word}
          onGrade={() => {
            if (i + 1 >= queue.vocab.length) setPhase(queue.exercises.length ? 'exercises' : 'done')
            else setI(i + 1)
          }}
        />
      </div>
    )
  }

  if (phase === 'exercises') {
    return (
      <div className="stack">
        <div className="between">
          <button className="btn btn-ghost btn-sm" onClick={() => setPhase('intro')}>
            ✕ Exit
          </button>
          <Pill tone="warn">Past mistakes</Pill>
        </div>
        <ExerciseRunner
          exercises={queue.exercises}
          onDone={() => setPhase('done')}
          title="Second chances"
          doneLabel="Finish review"
          requeueWrong={false}
        />
      </div>
    )
  }

  return (
    <div className="celebrate stack">
      <div className="celebrate-emoji">🧠</div>
      <h1>Review complete</h1>
      <p className="muted">
        {queue.total} item{queue.total === 1 ? '' : 's'} rescheduled. The ones you found hard will
        be back soon; the ones you knew will not bother you for weeks.
      </p>
      <div className="stack-sm" style={{ width: '100%' }}>
        <a className="btn btn-primary btn-lg btn-block" href={href('/learn')}>
          Take the next lesson
        </a>
        <a className="btn btn-block" href={href('/')}>
          Back to dashboard
        </a>
      </div>
    </div>
  )
}

function MemoryBreakdown({ s }) {
  const rows = [
    { label: 'New', n: s.neu, tone: '' },
    { label: 'Learning', n: s.learning, tone: 'warn' },
    { label: 'Young', n: s.young, tone: '' },
    { label: 'Mature', n: s.mature, tone: 'ok' },
  ]
  return (
    <Card className="stack-sm">
      <div className="sec-title">Your memory</div>
      {rows.map((r) => (
        <div key={r.label} className="meter-row">
          <span className="meter-label">{r.label}</span>
          <Bar value={s.total ? r.n / s.total : 0} tone={r.tone} size="sm" />
          <span className="meter-val">{r.n}</span>
        </div>
      ))}
      <p className="tiny dim" style={{ marginTop: 6 }}>
        “Mature” means the word is scheduled more than three weeks out — you know it.
      </p>
    </Card>
  )
}
