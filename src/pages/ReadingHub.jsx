import { useState } from 'react'
import { readings, readingById } from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { href, navigate } from '../lib/router.js'
import Reading from '../ui/Reading.jsx'
import { Empty, Pill, Card } from '../ui/primitives.jsx'

export default function ReadingHub({ id }) {
  const { state } = useProgress()
  const [level, setLevel] = useState('all')
  const active = id ? readingById.get(id) : null

  if (active) {
    return (
      <div className="stack">
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/reading')}>
          ← All texts
        </button>
        <Reading reading={active} onDone={() => navigate('/reading')} />
      </div>
    )
  }

  if (!readings.length) {
    return (
      <Empty icon="📖" title="No reading texts yet" action={
        <a className="btn btn-primary" href={href('/practice')}>Back to practice</a>
      }>
        Texts arrive with the lessons.
      </Empty>
    )
  }

  const list = level === 'all' ? readings : readings.filter((r) => r.level === level)

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">📖 Reading</h1>
        <p className="page-sub">
          Real everyday German — notices, messages, adverts and short articles. Tap any word you
          do not know.
        </p>
      </header>

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
        {list.map((r) => (
          <a
            key={r.id}
            href={href(`/reading/${r.id}`)}
            className="card card-link row"
            style={{ gap: 'var(--s3)', textDecoration: 'none', color: 'inherit' }}
          >
            <span style={{ fontSize: '1.4rem' }}>📄</span>
            <span className="grow" style={{ minWidth: 0 }}>
              <span className="bold" style={{ display: 'block' }}>
                {r.title}
              </span>
              <span className="small dim" style={{ display: 'block' }}>
                {r.intro || `${wordCount(r)} words · ${r.questions?.length ?? 0} questions`}
              </span>
            </span>
            <Pill tone={r.level.toLowerCase()}>{r.level}</Pill>
          </a>
        ))}
        {!list.length && (
          <Card className="sunk flat">
            <p className="small muted">No texts at {level} yet.</p>
          </Card>
        )}
      </div>
    </div>
  )
}

function wordCount(r) {
  return (r.paragraphs || []).join(' ').split(/\s+/).filter(Boolean).length
}
