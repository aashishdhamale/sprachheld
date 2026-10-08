/**
 * Exam prep — Goethe-Zertifikat A1 (Start Deutsch 1) and A2 mock exams:
 * the format at a glance, every Modelltest with its best section scores,
 * and the way in to a full timed exam or one section as practice.
 */

import { useState } from 'react'
import { exams, lessonsByLevel } from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { currentLevel } from '../engine/adaptive.js'
import { FORMATS, PASS_MARK, SECTION_POINTS, bestBySection, latestFull, verdict } from '../engine/exam.js'
import { Bar, Pill, Section, Empty } from '../ui/primitives.jsx'

const FORMAT_BY_LEVEL = { A1: 'goethe-a1', A2: 'goethe-a2' }

export default function ExamHub() {
  const { state } = useProgress()
  const learnerLevel = currentLevel(lessonsByLevel, state.lessons)
  const [level, setLevel] = useState(learnerLevel === 'A1' ? 'A1' : 'A2')
  const fmt = FORMATS[FORMAT_BY_LEVEL[level]]
  const list = exams.filter((e) => e.level === level)
  const attempts = (state.exams || []).filter((a) => a.level === level)
  const totalMinutes = fmt.order.reduce((m, s) => m + fmt.sections[s].minutes, 0)

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">🎓 Exam prep</h1>
        <p className="page-sub">
          Mock exams in the format of the Goethe-Zertifikat A1 and A2 — the same four sections, the same
          task types, the same timing and audio rules. Take a whole exam under real conditions, or practise
          one section at a time.
        </p>
      </header>

      <div className="row-wrap">
        {['A1', 'A2'].map((l) => (
          <button key={l} className={`chip ${level === l ? 'on' : ''}`} aria-pressed={level === l} onClick={() => setLevel(l)}>
            {FORMATS[FORMAT_BY_LEVEL[l]].name}
            {l === 'A1' ? ' · Start Deutsch 1' : ''}
          </button>
        ))}
      </div>

      <div className="card stack">
        <div className="between">
          <div className="bold">{fmt.name}</div>
          <span className="tiny dim">≈ {totalMinutes} min · {PASS_MARK}/100 to pass</span>
        </div>
        <div className="grid grid-2">
          {fmt.order.map((s, i) => {
            const sp = fmt.sections[s]
            return (
              <div key={s} className="card sunk pad-sm stack-sm">
                <div className="between">
                  <span className="bold small">
                    {i + 1}. {sp.icon} {sp.title}
                  </span>
                  <span className="tiny dim">{sp.minutes} min</span>
                </div>
                <div className="tiny muted">
                  {sp.en} · {sp.parts.length} parts · {SECTION_POINTS} points
                </div>
              </div>
            )
          })}
        </div>
        <div className="tiny dim">
          Listening and reading are marked automatically. For writing and speaking you compare your answer
          with the task points and a model answer and rate yourself — with optional AI feedback on your
          writing. All questions are original practice material, not official Goethe-Institut papers.
        </div>
      </div>

      {!list.length ? (
        <Empty icon="🎓" title="No mock exams for this level yet" />
      ) : (
        <Section title="Modelltests">
          <div className="stack">
            {list.map((ex) => (
              <ExamCard key={ex.id} exam={ex} fmt={fmt} attempts={state.exams} minutes={totalMinutes} />
            ))}
          </div>
        </Section>
      )}

      {attempts.length > 0 && (
        <Section title="Recent attempts">
          <div className="card stack-sm">
            {attempts.slice(0, 6).map((a) => {
              const ex = exams.find((e) => e.id === a.examId)
              const secs = Object.entries(a.sections || {})
              return (
                <div key={a.id} className="between small" style={{ gap: 8 }}>
                  <span className="grow" style={{ minWidth: 0 }}>
                    <span className="bold">{ex?.title || a.examId}</span>{' '}
                    <span className="dim">
                      · {a.complete ? 'full exam' : secs.map(([s]) => fmt.sections[s]?.title || s).join(', ')}
                    </span>
                  </span>
                  <span className="nowrap">
                    {a.complete ? <Pill tone={a.total >= PASS_MARK ? 'ok' : 'bad'}>{a.total}/100</Pill> : secs.map(([, v]) => `${v.points}/${SECTION_POINTS}`).join(' · ')}
                  </span>
                  <span className="tiny dim nowrap">{new Date(a.at).toLocaleDateString()}</span>
                </div>
              )
            })}
          </div>
        </Section>
      )}
    </div>
  )
}

function ExamCard({ exam, fmt, attempts, minutes }) {
  const best = bestBySection(attempts, exam.id)
  const full = latestFull(attempts, exam.id)
  const v = full ? verdict(full.total) : null
  return (
    <div className="card stack">
      <div className="between">
        <div>
          <div className="bold">{exam.title}</div>
          <div className="tiny dim">{full ? `Last full exam: ${new Date(full.at).toLocaleDateString()}` : 'Not taken as a full exam yet'}</div>
        </div>
        {full && <Pill tone={v.tone}>{full.total}/100 · {v.label}</Pill>}
      </div>

      <div className="grid grid-2">
        {fmt.order.map((s) => {
          const sp = fmt.sections[s]
          const b = best[s]
          return (
            <a
              key={s}
              href={href(`/exam/${exam.id}?mode=practice&section=${s}`)}
              className="card card-link pad-sm stack-sm"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="between small">
                <span className="bold">
                  {sp.icon} {sp.title}
                </span>
                <span className="tiny dim">{b ? `best ${b.points}/${SECTION_POINTS}` : 'practise →'}</span>
              </div>
              <Bar value={b ? b.points / SECTION_POINTS : 0} size="sm" tone={b && b.points >= SECTION_POINTS * 0.6 ? 'ok' : 'warn'} />
            </a>
          )
        })}
      </div>

      <a className="btn btn-primary btn-block" href={href(`/exam/${exam.id}?mode=exam`)}>
        Full mock exam · timed · ≈ {minutes} min
      </a>
    </div>
  )
}
