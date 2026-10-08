import { useProgress } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import {
  nouns,
  allExercises,
  readings,
  listenings,
  conversations,
  CONTENT_STATS,
} from '../content/index.js'
import { dueCount } from '../engine/srs.js'
import { weakTags, weakSkills, ratingOf } from '../engine/adaptive.js'
import { currentLevel } from '../engine/adaptive.js'
import { lessonsByLevel } from '../content/index.js'
import { Section, Pill, Bar } from '../ui/primitives.jsx'

export default function Practice() {
  const { state } = useProgress()
  const due = dueCount(state.srs)
  const level = currentLevel(lessonsByLevel, state.lessons)
  const weakT = weakTags(state.tagStats, { limit: 4 })
  const weakS = weakSkills(state.skills, { limit: 3 })

  const modes = [
    {
      to: '/review',
      icon: '🔄',
      title: 'Review',
      sub: due > 0 ? `${due} item${due === 1 ? '' : 's'} due today` : 'Nothing due right now',
      badge: due > 0 ? String(due) : null,
      tone: due > 0 ? 'warn' : null,
      disabled: due === 0,
    },
    {
      to: '/articles',
      icon: '🎲',
      title: 'Article trainer',
      sub: `der · die · das — ${nouns.length} nouns`,
    },
    {
      to: '/builder',
      icon: '🧩',
      title: 'Sentence builder',
      sub: 'Get German word order into your fingers',
    },
    {
      to: '/translate',
      icon: '🔁',
      title: 'Translation',
      sub: 'Both directions, natural phrasing',
    },
    {
      to: '/listening',
      icon: '🎧',
      title: 'Listening',
      sub: `${listenings.length} audio scene${listenings.length === 1 ? '' : 's'}`,
      disabled: listenings.length === 0,
    },
    {
      to: '/reading',
      icon: '📖',
      title: 'Reading',
      sub: `${readings.length} text${readings.length === 1 ? '' : 's'} with tap-to-translate`,
      disabled: readings.length === 0,
    },
    {
      to: '/chat',
      icon: '🗣',
      title: 'Conversations',
      sub: `${conversations.length} real-life scenario${conversations.length === 1 ? '' : 's'}`,
      disabled: conversations.length === 0,
    },
    {
      to: '/grammar',
      icon: '📐',
      title: 'Grammar',
      sub: `${CONTENT_STATS.grammar} topics, each with its own drills`,
    },
  ]

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">Practice</h1>
        <p className="page-sub">
          Pick a skill and drill it. Everything here feeds the same profile, so your weak areas
          update as you go.
        </p>
      </header>

      {(weakT.length > 0 || weakS.length > 0) && (
        <Section title="Recommended for you">
          <div className="stack-sm">
            {weakT.map((t) => (
              <WeakCard
                key={t.tag}
                to={`/drill/tag/${t.tag}`}
                label={t.label}
                acc={t.acc}
                total={t.total}
                count={allExercises.filter((e) => e.tags?.includes(t.tag)).length}
              />
            ))}
            {weakS.slice(0, Math.max(0, 3 - weakT.length)).map((s) => (
              <WeakCard
                key={s.skill}
                to={`/drill/skill/${s.skill}`}
                label={s.label}
                acc={s.acc}
                total={s.total}
                count={allExercises.filter((e) => e.skill === s.skill).length}
              />
            ))}
          </div>
        </Section>
      )}

      <Section title="All practice modes">
        <div className="grid grid-2">
          {modes.map((m) => (
            <a
              key={m.to}
              href={m.disabled ? undefined : href(m.to)}
              className="card card-link row"
              style={{
                gap: 'var(--s3)',
                textDecoration: 'none',
                color: 'inherit',
                opacity: m.disabled ? 0.5 : 1,
                pointerEvents: m.disabled ? 'none' : undefined,
              }}
              aria-disabled={m.disabled}
            >
              <span style={{ fontSize: '1.5rem' }} aria-hidden>
                {m.icon}
              </span>
              <span className="grow" style={{ minWidth: 0 }}>
                <span className="bold" style={{ display: 'block' }}>
                  {m.title}
                </span>
                <span className="small dim" style={{ display: 'block' }}>
                  {m.sub}
                </span>
              </span>
              {m.badge && <Pill tone={m.tone}>{m.badge}</Pill>}
            </a>
          ))}
        </div>
      </Section>

      <Section title="Free conversation">
        <a
          href={href('/freechat')}
          className="card card-link row"
          style={{ gap: 'var(--s3)', textDecoration: 'none', color: 'inherit' }}
        >
          <span style={{ fontSize: '1.5rem' }}>🤖</span>
          <span className="grow">
            <span className="bold" style={{ display: 'block' }}>
              Open-ended chat with an AI tutor
            </span>
            <span className="small dim">
              {state.settings.aiEnabled
                ? `Talk about anything at ${level} level — corrections included`
                : 'Needs your own Anthropic API key — set it up in Settings'}
            </span>
          </span>
          {!state.settings.aiEnabled && <Pill>optional</Pill>}
        </a>
      </Section>
    </div>
  )
}

function WeakCard({ to, label, acc, total, count }) {
  const r = ratingOf(acc)
  return (
    <a
      href={href(to)}
      className="card card-link stack-sm"
      style={{ textDecoration: 'none', color: 'inherit', borderColor: 'var(--bad-line)' }}
    >
      <div className="between">
        <div className="row" style={{ gap: 8 }}>
          <span>🎯</span>
          <span className="bold">{label}</span>
        </div>
        <span className="small bold" style={{ color: `var(--${r.tone})` }}>
          {Math.round(acc * 100)}%
        </span>
      </div>
      <Bar value={acc} tone={r.tone === 'ok' ? 'ok' : r.tone === 'warn' ? 'warn' : 'bad'} size="sm" />
      <div className="tiny dim">
        {total} answered · {count} exercises available
      </div>
    </a>
  )
}
