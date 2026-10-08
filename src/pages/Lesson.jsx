/**
 * The lesson runner: Learn → Practice → Apply → Review, one step at a time,
 * full-screen so nothing competes for attention.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  lessonById,
  getVocab,
  grammarById,
  conversationById,
  readingById,
  listeningById,
  nextLessonAfter,
} from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { navigate, href } from '../lib/router.js'
import { reviewExercisesFor } from '../engine/planner.js'
import ExerciseRunner from '../ui/ExerciseRunner.jsx'
import Chat from '../ui/Chat.jsx'
import { Flashcard } from '../ui/VocabCard.jsx'
import Reading from '../ui/Reading.jsx'
import Listening from '../ui/Listening.jsx'
import { Blocks, Bar, StepDots, Pill, ScoreRing, Rich, ExampleRow } from '../ui/primitives.jsx'

export default function Lesson({ id }) {
  const lesson = lessonById.get(id)
  const { state, dispatch } = useProgress()
  const saved = state.lessons[id]
  const [step, setStep] = useState(() => Math.min(saved?.stepIndex ?? 0, (lesson?.steps.length ?? 1) - 1))
  const [scores, setScores] = useState([])
  const [finished, setFinished] = useState(false)
  const startedAt = useRef(Date.now())

  // Seed the lesson's vocabulary into the SRS the moment the lesson opens.
  useEffect(() => {
    if (lesson?.vocabIds?.length) dispatch({ type: 'srsSeed', kind: 'v', ids: lesson.vocabIds })
  }, [lesson?.id])

  useEffect(() => {
    if (lesson) dispatch({ type: 'lessonStep', lessonId: lesson.id, stepIndex: step })
  }, [step, lesson?.id])

  if (!lesson) {
    return (
      <div className="runner">
        <div className="runner-body">
          <div className="runner-body-inner empty">
            <div className="empty-icon">🧭</div>
            <p>That lesson does not exist.</p>
            <a className="btn btn-primary" href={href('/learn')}>
              Back to the path
            </a>
          </div>
        </div>
      </div>
    )
  }

  const steps = lesson.steps
  const current = steps[step]
  const isLast = step >= steps.length - 1

  const advance = (score) => {
    if (typeof score === 'number') setScores((s) => [...s, score])
    if (isLast) {
      const all = typeof score === 'number' ? [...scores, score] : scores
      const avg = all.length ? all.reduce((a, b) => a + b, 0) / all.length : 1
      const minutes = Math.max(2, Math.round((Date.now() - startedAt.current) / 60000))
      dispatch({ type: 'lessonDone', lessonId: lesson.id, score: avg, minutes, steps: steps.length })
      setFinished(true)
    } else {
      setStep((s) => s + 1)
      document.querySelector('.runner-body')?.scrollTo({ top: 0 })
    }
  }

  if (finished) {
    return <Complete lesson={lesson} scores={scores} />
  }

  return (
    <div className="runner">
      <div className="runner-top">
        <div className="runner-top-inner">
          <div className="between">
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/learn')}>
              ✕ Exit
            </button>
            <div style={{ textAlign: 'center', minWidth: 0 }}>
              <div className="tiny dim">
                {lesson.level} · Lesson {lesson.order}
              </div>
              <div className="bold small" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {lesson.title}
              </div>
            </div>
            <span className="tiny dim nowrap">
              {step + 1}/{steps.length}
            </span>
          </div>
          <StepDots total={steps.length} current={step} />
        </div>
      </div>

      <div className="runner-body">
        <div className="runner-body-inner">
          <StepView
            key={`${lesson.id}-${step}`}
            step={current}
            lesson={lesson}
            onDone={advance}
            state={state}
          />
        </div>
      </div>
    </div>
  )
}

/* ── Step dispatch ───────────────────────────────────────────────────────── */

const PHASE = {
  learn: 'Learn',
  vocab: 'Learn',
  grammar: 'Learn',
  practice: 'Practice',
  build: 'Practice',
  reading: 'Apply',
  listening: 'Apply',
  conversation: 'Apply',
  quiz: 'Practice',
  review: 'Review',
}

function StepHeader({ step }) {
  return (
    <div className="row-wrap" style={{ marginBottom: 'var(--s4)' }}>
      <Pill tone="accent">{PHASE[step.type] || 'Step'}</Pill>
      <h1 style={{ fontSize: 'var(--fs-xl)' }}>{step.title}</h1>
    </div>
  )
}

function StepView({ step, lesson, onDone, state }) {
  switch (step.type) {
    case 'learn':
      return <LearnStep step={step} lesson={lesson} onDone={onDone} />
    case 'vocab':
      return <VocabStep step={step} onDone={onDone} />
    case 'grammar':
      return <GrammarStep step={step} onDone={onDone} lesson={lesson} />
    case 'practice':
    case 'quiz':
    case 'build':
      return (
        <div>
          <StepHeader step={step} />
          {step.type === 'build' && (
            <p className="muted" style={{ marginBottom: 'var(--s4)' }}>
              Tap the words to build the sentence. German puts the conjugated verb in
              position&nbsp;2 — whatever comes first.
            </p>
          )}
          <ExerciseRunner
            exercises={step.exercises}
            lessonId={lesson.id}
            onDone={(s) => onDone(s.score)}
            doneLabel="Continue"
          />
        </div>
      )
    case 'reading':
      return <ReadingStep step={step} onDone={onDone} lesson={lesson} />
    case 'listening':
      return <ListeningStep step={step} onDone={onDone} lesson={lesson} />
    case 'conversation':
      return <ConversationStep step={step} onDone={onDone} />
    case 'review':
      return <ReviewStep step={step} lesson={lesson} onDone={onDone} state={state} />
    default:
      return (
        <div>
          <p className="dim">Unknown step.</p>
          <button className="btn btn-primary" onClick={() => onDone(1)}>
            Continue
          </button>
        </div>
      )
  }
}

/* ── Learn ───────────────────────────────────────────────────────────────── */

function LearnStep({ step, lesson, onDone }) {
  return (
    <div className="stack-lg">
      <div>
        <div className="row-wrap" style={{ marginBottom: 6 }}>
          <span style={{ fontSize: '1.6rem' }}>{lesson.icon}</span>
          <Pill tone={lesson.level.toLowerCase()}>{lesson.level}</Pill>
        </div>
        <h1>{lesson.title}</h1>
        {lesson.titleDe && <p className="muted de big">{lesson.titleDe}</p>}
      </div>

      {lesson.objectives?.length > 0 && (
        <div className="card sunk">
          <div className="sec-title" style={{ marginBottom: 8 }}>
            After this lesson you can
          </div>
          <ul className="stack-sm small">
            {lesson.objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      <Blocks blocks={step.blocks} />

      <button className="btn btn-primary btn-lg btn-block" onClick={() => onDone()}>
        Let's go
      </button>
    </div>
  )
}

/* ── Vocabulary ──────────────────────────────────────────────────────────── */

function VocabStep({ step, onDone }) {
  const words = getVocab(step.vocabIds)
  const [i, setI] = useState(0)
  const word = words[i]

  if (!word) {
    return (
      <div>
        <p className="dim">No words in this step.</p>
        <button className="btn btn-primary" onClick={() => onDone(1)}>
          Continue
        </button>
      </div>
    )
  }

  const next = () => {
    if (i + 1 >= words.length) onDone(1)
    else setI(i + 1)
  }

  return (
    <div className="stack">
      <StepHeader step={step} />
      <div className="between">
        <span className="tiny dim">
          Word {i + 1} of {words.length}
        </span>
        <span className="tiny dim">{word.topic}</span>
      </div>
      <Bar value={i / words.length} size="sm" />
      <Flashcard key={word.id} vocab={word} onGrade={next} />
      <button className="btn btn-ghost btn-sm" onClick={next}>
        Skip →
      </button>
    </div>
  )
}

/* ── Grammar ─────────────────────────────────────────────────────────────── */

function GrammarStep({ step, lesson, onDone }) {
  const g = grammarById.get(step.grammarId)
  const [phase, setPhase] = useState('explain')

  if (!g) {
    return (
      <div>
        <p className="dim">Grammar topic not found.</p>
        <button className="btn btn-primary" onClick={() => onDone(1)}>
          Continue
        </button>
      </div>
    )
  }

  if (phase === 'explain') {
    return (
      <div className="stack-lg">
        <div>
          <Pill tone="accent">Grammar</Pill>
          <h1 style={{ marginTop: 8 }}>{g.title}</h1>
          {g.titleDe && <p className="muted de">{g.titleDe}</p>}
        </div>

        <p className="big">{g.short}</p>

        <Blocks blocks={g.explain} />

        {g.examples?.length > 0 && (
          <div className="stack-sm">
            <div className="sec-title">Examples</div>
            {g.examples.map((ex, i) => (
              <ExampleRow key={i} ex={ex} />
            ))}
          </div>
        )}

        {g.pitfalls?.length > 0 && (
          <div className="stack-sm">
            <div className="sec-title">Watch out</div>
            {g.pitfalls.map((p, i) => (
              <div key={i} className="card pad-sm" style={{ borderColor: 'var(--warn-line)' }}>
                <div className="correction">
                  <div className="was">{p.wrong}</div>
                  <div className="is">{p.right}</div>
                </div>
                <div className="small muted">
                  <Rich text={p.why} />
                </div>
              </div>
            ))}
          </div>
        )}

        <button className="btn btn-primary btn-lg btn-block" onClick={() => setPhase('practice')}>
          Practise it →
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="row-wrap" style={{ marginBottom: 'var(--s4)' }}>
        <Pill tone="accent">Grammar</Pill>
        <h1 style={{ fontSize: 'var(--fs-xl)' }}>{g.title}</h1>
      </div>
      <ExerciseRunner
        exercises={g.exercises}
        lessonId={lesson.id}
        onDone={(s) => onDone(s.score)}
        doneLabel="Continue"
      />
      <button
        className="btn btn-ghost btn-sm"
        style={{ marginTop: 'var(--s3)' }}
        onClick={() => setPhase('explain')}
      >
        ← Show the explanation again
      </button>
    </div>
  )
}

/* ── Reading / Listening ─────────────────────────────────────────────────── */

function ReadingStep({ step, lesson, onDone }) {
  const r = readingById.get(step.readingId)
  if (!r) return <Skip onDone={onDone} what="reading" />
  return (
    <div>
      <StepHeader step={step} />
      <Reading reading={r} lessonId={lesson.id} onDone={(s) => onDone(s)} />
    </div>
  )
}

function ListeningStep({ step, lesson, onDone }) {
  const h = listeningById.get(step.listeningId)
  if (!h) return <Skip onDone={onDone} what="listening" />
  return (
    <div>
      <StepHeader step={step} />
      <Listening listening={h} lessonId={lesson.id} onDone={(s) => onDone(s)} />
    </div>
  )
}

function ConversationStep({ step, onDone }) {
  const c = conversationById.get(step.conversationId)
  if (!c) return <Skip onDone={onDone} what="conversation" />
  return (
    <div>
      <StepHeader step={step} />
      <Chat conversation={c} onFinish={(score) => onDone(score)} />
    </div>
  )
}

function Skip({ onDone, what }) {
  return (
    <div className="stack">
      <p className="dim">This {what} is not available.</p>
      <button className="btn btn-primary" onClick={() => onDone(1)}>
        Continue
      </button>
    </div>
  )
}

/* ── Review ──────────────────────────────────────────────────────────────── */

function ReviewStep({ step, lesson, onDone, state }) {
  const exercises = useMemo(
    () => reviewExercisesFor(state, lesson, step.count || 3),
    [lesson.id],
  )

  if (!exercises.length) {
    return (
      <div className="stack">
        <StepHeader step={step} />
        <p className="muted">Nothing from earlier lessons is waiting — you are all caught up.</p>
        <button className="btn btn-primary btn-lg btn-block" onClick={() => onDone(1)}>
          Finish lesson
        </button>
      </div>
    )
  }

  return (
    <div>
      <StepHeader step={step} />
      <p className="muted" style={{ marginBottom: 'var(--s4)' }}>
        A few questions from earlier — this is what makes it stick.
      </p>
      <ExerciseRunner
        exercises={exercises}
        lessonId={lesson.id}
        onDone={(s) => onDone(s.score)}
        doneLabel="Finish lesson"
        requeueWrong={false}
      />
    </div>
  )
}

/* ── Completion ──────────────────────────────────────────────────────────── */

function Complete({ lesson, scores }) {
  const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 1
  const next = nextLessonAfter(lesson.id)
  const { state } = useProgress()

  return (
    <div className="runner">
      <div className="runner-body">
        <div className="runner-body-inner">
          <div className="celebrate stack">
            <div className="celebrate-emoji">{avg >= 0.85 ? '🎉' : avg >= 0.6 ? '👏' : '💪'}</div>
            <ScoreRing value={avg} sub="lesson score" />
            <div>
              <h1 style={{ marginTop: 'var(--s4)' }}>
                {avg >= 0.85 ? 'Ausgezeichnet!' : avg >= 0.6 ? 'Gut gemacht!' : 'Geschafft!'}
              </h1>
              <p className="muted">
                Lesson {lesson.order} — {lesson.title}
              </p>
            </div>

            <div className="card sunk" style={{ textAlign: 'left' }}>
              <div className="grid grid-3">
                <div style={{ textAlign: 'center' }}>
                  <div className="big bold">+{25 + Math.round(avg * 25)}</div>
                  <div className="tiny dim">XP</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="big bold">{lesson.vocabIds.length}</div>
                  <div className="tiny dim">new words</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="big bold">🔥 {state.streak.count}</div>
                  <div className="tiny dim">day streak</div>
                </div>
              </div>
            </div>

            <p className="small muted">
              Everything you missed is now scheduled for review. It will come back on your
              dashboard exactly when you are about to forget it.
            </p>

            <div className="stack-sm" style={{ width: '100%' }}>
              {next ? (
                <a className="btn btn-primary btn-lg btn-block" href={href(`/lesson/${next.id}`)}>
                  Next: {next.title} →
                </a>
              ) : (
                <a className="btn btn-primary btn-lg btn-block" href={href('/learn')}>
                  Back to the path
                </a>
              )}
              <a className="btn btn-block" href={href('/')}>
                Back to dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
