import { useState } from 'react'
import { conversations } from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { currentLevel } from '../engine/adaptive.js'
import { lessonsByLevel } from '../content/index.js'
import { Empty, Pill, Card } from '../ui/primitives.jsx'

export default function ChatIndex() {
  const { state } = useProgress()
  const [level, setLevel] = useState('all')
  const myLevel = currentLevel(lessonsByLevel, state.lessons)

  if (!conversations.length) {
    return (
      <Empty
        icon="💬"
        title="No scenarios yet"
        action={
          <a className="btn btn-primary" href={href('/learn')}>
            Start a lesson
          </a>
        }
      >
        Conversations arrive with the lessons.
      </Empty>
    )
  }

  const list = level === 'all' ? conversations : conversations.filter((c) => c.level === level)
  const done = (id) => state.scenariosDone?.[id]

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">💬 Conversations</h1>
        <p className="page-sub">
          Real situations, in German, where your answers are corrected as you go. This is where
          everything else you have learned turns into something you can use.
        </p>
      </header>

      <a
        href={href('/freechat')}
        className="card card-link row"
        style={{ gap: 'var(--s3)', textDecoration: 'none', color: 'inherit' }}
      >
        <span style={{ fontSize: '1.5rem' }}>🤖</span>
        <span className="grow">
          <span className="bold" style={{ display: 'block' }}>
            Free conversation
          </span>
          <span className="small dim">
            {state.settings.aiEnabled
              ? `Talk about anything at ${myLevel} level`
              : 'Optional — needs your own Anthropic API key'}
          </span>
        </span>
        <Pill tone={state.settings.aiEnabled ? 'ok' : ''}>
          {state.settings.aiEnabled ? 'ready' : 'setup'}
        </Pill>
      </a>

      <div className="row-wrap">
        {['all', 'A1', 'A2', 'B1'].map((l) => (
          <button
            key={l}
            className={`chip ${level === l ? 'on' : ''}`}
            aria-pressed={level === l}
            onClick={() => setLevel(l)}
          >
            {l === 'all' ? 'All levels' : l}
          </button>
        ))}
      </div>

      <div className="stack-sm">
        {list.map((c) => {
          const d = done(c.id)
          return (
            <a
              key={c.id}
              href={href(`/chat/${c.id}`)}
              className="card card-link row"
              style={{ gap: 'var(--s3)', textDecoration: 'none', color: 'inherit' }}
            >
              <span style={{ fontSize: '1.5rem' }}>{c.icon || '💬'}</span>
              <span className="grow" style={{ minWidth: 0 }}>
                <span className="row" style={{ gap: 6 }}>
                  <span className="bold">{c.title}</span>
                  {d && <Pill tone="ok">✓ {d.runs}×</Pill>}
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
                  {c.setting}
                </span>
              </span>
              <Pill tone={c.level.toLowerCase()}>{c.level}</Pill>
            </a>
          )
        })}
        {!list.length && (
          <Card className="sunk flat">
            <p className="small muted">No scenarios at {level} yet.</p>
          </Card>
        )}
      </div>
    </div>
  )
}
