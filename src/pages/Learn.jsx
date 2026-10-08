import { useState } from 'react'
import {
  levels,
  modulesByLevel,
  lessonById,
  lessonsByLevel,
  grammarByLevel,
} from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { levelProgress, levelUnlocked } from '../engine/adaptive.js'
import { nextLesson } from '../engine/planner.js'
import { Card, Bar, Pill } from '../ui/primitives.jsx'

export default function Learn({ levelId }) {
  const { state } = useProgress()
  const [open, setOpen] = useState(() => levelId || null)
  const next = nextLesson(state.lessons)

  const activeLevel = open || levels.find((l) => levelProgress(lessonsByLevel[l.cefr] || [], state.lessons) < 1)?.id || 'a1'

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">Your path</h1>
        <p className="page-sub">
          {levels.reduce((n, l) => n + (lessonsByLevel[l.cefr] || []).length, 0)} lessons from
          absolute beginner to confident intermediate. Work through them in order — each one
          builds on the last.
        </p>
      </header>

      {next && (
        <a
          href={href(`/lesson/${next.id}`)}
          className="card card-link"
          style={{
            borderColor: 'var(--accent)',
            background: 'var(--accent-soft)',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div className="next-lesson">
            <span className="next-lesson-icon">{next.icon || '📘'}</span>
            <div className="grow" style={{ minWidth: 0 }}>
              <div className="tiny dim">
                {state.lessons[next.id]?.status === 'started' ? 'Continue where you left off' : 'Up next'}
              </div>
              <div className="bold big">{next.title}</div>
              <div className="small muted">{next.summary}</div>
            </div>
            <span className="btn btn-primary next-lesson-cta">Start</span>
          </div>
        </a>
      )}

      {levels.map((lv) => {
        const lessons = lessonsByLevel[lv.cefr] || []
        const pct = levelProgress(lessons, state.lessons)
        const unlocked = levelUnlocked(lv.cefr, lessonsByLevel, state.lessons)
        const isOpen = activeLevel === lv.id
        const done = lessons.filter((l) => state.lessons[l.id]?.status === 'done').length

        return (
          <section key={lv.id}>
            <button
              className="card card-link stack-sm"
              onClick={() => setOpen(isOpen ? '' : lv.id)}
              style={{ opacity: unlocked ? 1 : 0.75 }}
            >
              <div className="row" style={{ gap: 'var(--s3)' }}>
                <span style={{ fontSize: '1.5rem' }}>{lv.icon}</span>
                <div className="grow">
                  <div className="row" style={{ gap: 8 }}>
                    <Pill tone={lv.id}>{lv.cefr}</Pill>
                    <span className="bold">{lv.title}</span>
                    {!unlocked && <span className="tiny dim">🔒 finish {prevOf(lv.cefr)} first</span>}
                    {pct >= 1 && <Pill tone="ok">✓ complete</Pill>}
                  </div>
                  <div className="small muted">{lv.tagline}</div>
                </div>
                <span className="dim">{isOpen ? '▾' : '▸'}</span>
              </div>
              <div className="row" style={{ gap: 'var(--s3)' }}>
                <div className="grow">
                  <Bar value={pct} tone={pct >= 1 ? 'ok' : ''} size="sm" />
                </div>
                <span className="tiny dim nowrap">
                  {done}/{lessons.length}
                </span>
              </div>
            </button>

            {isOpen && (
              <div className="stack" style={{ marginTop: 'var(--s3)' }}>
                <div className="card sunk pad-sm">
                  <div className="sec-title" style={{ marginBottom: 6 }}>
                    What you will be able to do
                  </div>
                  <ul className="stack-sm small muted" style={{ paddingLeft: '1.1em' }}>
                    {lv.canDo.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                {(modulesByLevel[lv.id] || []).map((mod) => (
                  <ModuleBlock key={mod.id} mod={mod} state={state} unlocked={unlocked} />
                ))}

                {lessons.length === 0 && (
                  <Card className="sunk flat stack-sm">
                    <p className="small muted">
                      The {lv.cefr} lessons are not built yet — but all{' '}
                      <strong>{(grammarByLevel[lv.cefr] || []).length} {lv.cefr} grammar topics</strong>{' '}
                      are written and ready to work through, each with its own exercises.
                    </p>
                    <a className="btn btn-sm btn-soft" href={href('/grammar')}>
                      Open {lv.cefr} grammar →
                    </a>
                  </Card>
                )}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

function ModuleBlock({ mod, state, unlocked }) {
  const lessons = (mod.lessonIds || []).map((id) => lessonById.get(id)).filter(Boolean)
  if (!lessons.length) return null
  const done = lessons.filter((l) => state.lessons[l.id]?.status === 'done').length

  return (
    <div className="stack-sm">
      <div className="between" style={{ padding: '0 2px' }}>
        <div className="row" style={{ gap: 7 }}>
          <span>{mod.icon}</span>
          <span className="bold small">{mod.title}</span>
        </div>
        <span className="tiny dim">
          {done}/{lessons.length}
        </span>
      </div>
      <div className="stack-sm">
        {lessons.map((l) => (
          <LessonRow key={l.id} lesson={l} state={state} unlocked={unlocked} />
        ))}
      </div>
    </div>
  )
}

function LessonRow({ lesson: l, state, unlocked }) {
  const st = state.lessons[l.id]
  const done = st?.status === 'done'
  const started = st?.status === 'started'

  return (
    <a
      href={href(`/lesson/${l.id}`)}
      className="card card-link pad-sm row"
      style={{
        gap: 'var(--s3)',
        textDecoration: 'none',
        color: 'inherit',
        opacity: unlocked ? 1 : 0.7,
        borderColor: started ? 'var(--accent)' : undefined,
      }}
    >
      <span
        className="center"
        style={{
          width: 34,
          height: 34,
          flex: 'none',
          borderRadius: 10,
          background: done ? 'var(--ok-soft)' : started ? 'var(--accent-soft)' : 'var(--surface-3)',
          fontSize: 16,
        }}
      >
        {done ? '✓' : l.icon || l.order}
      </span>
      <span className="grow" style={{ minWidth: 0 }}>
        <span className="row" style={{ gap: 6 }}>
          <span className="bold small">{l.title}</span>
          {started && <Pill tone="accent">in progress</Pill>}
        </span>
        <span
          className="tiny dim"
          style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {l.summary}
        </span>
      </span>
      <span className="tiny dim nowrap">
        {done && st.bestScore != null ? `${Math.round(st.bestScore * 100)}%` : `${l.minutes} min`}
      </span>
    </a>
  )
}

function prevOf(cefr) {
  return { A2: 'A1', B1: 'A2' }[cefr] || ''
}
