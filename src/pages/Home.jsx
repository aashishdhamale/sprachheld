import { useMemo } from 'react'
import { useProgress } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { greetingFor, lastNDays, todayKey } from '../lib/storage.js'
import { dailyPlan, goalProgress, overview, nextLesson } from '../engine/planner.js'
import { weakTags, weakSkills, ratingOf } from '../engine/adaptive.js'
import { summarize } from '../engine/srs.js'
import { vocab as allVocab } from '../content/index.js'
import { Section, Card, Bar, LevelBar, Pill } from '../ui/primitives.jsx'

const vocabCount = allVocab.length

export default function Home() {
  const { state } = useProgress()
  const greet = greetingFor()
  const plan = useMemo(() => dailyPlan(state), [state])
  const goal = goalProgress(state)
  const ov = overview(state)
  const lesson = nextLesson(state.lessons)
  const weakT = weakTags(state.tagStats, { limit: 3 })
  const weakS = weakSkills(state.skills, { limit: 3 })
  const vocabSummary = summarize(state.srs, undefined, 'v')
  const name = state.profile.name

  return (
    <div className="stack-lg">
      {/* Greeting */}
      <header className="page-head">
        <div className="row-wrap" style={{ gap: 8, marginBottom: 4 }}>
          <Pill tone={ov.level.toLowerCase()}>{ov.level}</Pill>
          {lesson && <span className="tiny dim">Lesson {lesson.order} · {lesson.title}</span>}
        </div>
        <h1 className="page-title">
          {greet.emoji} {greet.de}
          {name ? `, ${name}` : ''}!
        </h1>
        <p className="page-sub">
          {goal.met
            ? 'Daily goal reached. Anything else today is a bonus.'
            : plan.due > 0
              ? `${plan.due} item${plan.due === 1 ? '' : 's'} are due for review — start there, then take the next lesson.`
              : 'Here is your plan for today.'}
        </p>
      </header>

      {/* Today's goal */}
      <Card className="stack">
        <div className="between">
          <div>
            <div className="card-title">Today</div>
            <div className="card-sub">
              {goal.minutes} of {goal.goal} minutes · {goal.answers} answer
              {goal.answers === 1 ? '' : 's'} · {goal.xp} XP
            </div>
          </div>
          <div className="row" style={{ gap: 6 }}>
            {goal.met && <Pill tone="ok">✓ done</Pill>}
            <span className="streak-badge">🔥 {state.streak.count}</span>
          </div>
        </div>
        <Bar value={goal.pct} tone={goal.met ? 'ok' : ''} label="Daily goal" />
        <WeekStrip days={state.days} />
      </Card>

      {/* The plan */}
      <Section
        title={`Your plan · about ${plan.totalMin} min`}
        action={
          <a className="small" href={href('/practice')}>
            More practice →
          </a>
        }
      >
        <div className="stack-sm">
          {plan.items.map((item) => (
            <PlanRow key={item.key} item={item} />
          ))}
        </div>
      </Section>

      {/* Progress */}
      <Section
        title="Your levels"
        action={
          <a className="small" href={href('/progress')}>
            Details →
          </a>
        }
      >
        <Card className="stack">
          {ov.levels.map((l) => (
            <LevelBar key={l.level} level={l.level} pct={l.pct} done={l.done} total={l.total} />
          ))}
          <hr />
          <div className="grid grid-3">
            <Metric n={ov.lessonsDone} of={ov.lessonsTotal} label="Lessons" />
            <Metric
              n={vocabSummary.total - vocabSummary.neu}
              of={vocabCount}
              label="Words learned"
            />
            <Metric n={state.xp} label="XP" />
          </div>
        </Card>
      </Section>

      {/* Weak areas */}
      <Section title="Weak areas">
        {weakT.length === 0 && weakS.length === 0 ? (
          <Card className="flat sunk">
            <p className="small muted">
              Not enough data yet. Answer a few more questions and this will show exactly which
              grammar topics need work.
            </p>
          </Card>
        ) : (
          <Card className="stack-sm">
            {weakT.map((t) => (
              <WeakRow
                key={t.tag}
                label={t.label}
                acc={t.acc}
                total={t.total}
                href={`/drill/tag/${t.tag}`}
              />
            ))}
            {weakS.slice(0, Math.max(0, 3 - weakT.length)).map((s) => (
              <WeakRow
                key={s.skill}
                label={s.label}
                acc={s.acc}
                total={s.total}
                href={`/drill/skill/${s.skill}`}
              />
            ))}
          </Card>
        )}
      </Section>
    </div>
  )
}

/* ── Pieces ──────────────────────────────────────────────────────────────── */

function PlanRow({ item }) {
  return (
    <a
      href={item.href}
      className={`card card-link pad-sm row ${item.primary ? '' : ''}`}
      style={{
        gap: 'var(--s3)',
        borderColor: item.primary ? 'var(--accent)' : undefined,
        background: item.primary ? 'var(--accent-soft)' : undefined,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <span style={{ fontSize: '1.35rem', lineHeight: 1 }} aria-hidden>
        {item.icon}
      </span>
      <span className="grow" style={{ minWidth: 0 }}>
        <span className="bold" style={{ display: 'block' }}>
          {item.title}
        </span>
        <span
          className="small dim"
          style={{
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item.sub}
        </span>
      </span>
      <span className="tiny dim nowrap">{item.minutes} min</span>
      <span className="dim">›</span>
    </a>
  )
}

function Metric({ n, of, label }) {
  return (
    <div>
      <div style={{ fontSize: '1.3rem', fontWeight: 750, letterSpacing: '-0.02em' }}>
        {n}
        {of != null && <span className="dim" style={{ fontSize: '0.8rem', fontWeight: 500 }}> / {of}</span>}
      </div>
      <div className="tiny dim">{label}</div>
    </div>
  )
}

function WeakRow({ label, acc, total, href: to }) {
  const r = ratingOf(acc)
  const dot = r.key === 'weak' ? '🔴' : r.key === 'ok' ? '🟡' : '🟢'
  return (
    <a href={href(to)} className="between" style={{ textDecoration: 'none', color: 'inherit', padding: '4px 0' }}>
      <span className="row" style={{ gap: 8 }}>
        <span aria-hidden>{dot}</span>
        <span className="bold small">{label}</span>
        <span className="tiny dim">{total} answered</span>
      </span>
      <span className="row" style={{ gap: 10 }}>
        <span className="small bold" style={{ color: `var(--${r.tone === 'muted' ? 'text-3' : r.tone})` }}>
          {Math.round(acc * 100)}%
        </span>
        <span className="btn btn-sm btn-soft">Practise</span>
      </span>
    </a>
  )
}

function WeekStrip({ days }) {
  const keys = lastNDays(7)
  const today = todayKey()
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <div className="row" style={{ gap: 6, justifyContent: 'space-between' }}>
      {keys.map((k, i) => {
        const d = days?.[k]
        const active = d && (d.xp > 0 || d.answers > 0)
        const isToday = k === today
        const dow = new Date(k + 'T00:00:00').getDay()
        return (
          <div key={k} style={{ textAlign: 'center', flex: 1 }} title={k}>
            <div
              style={{
                height: 26,
                borderRadius: 7,
                background: active ? 'var(--ok)' : 'var(--surface-3)',
                border: isToday ? '2px solid var(--accent)' : '2px solid transparent',
                display: 'grid',
                placeItems: 'center',
                fontSize: 11,
                fontWeight: 700,
                color: active ? '#fff' : 'var(--text-3)',
              }}
            >
              {active ? '✓' : ''}
            </div>
            <div className="tiny dim" style={{ marginTop: 3 }}>
              {labels[(dow + 6) % 7]}
            </div>
          </div>
        )
      })}
    </div>
  )
}
