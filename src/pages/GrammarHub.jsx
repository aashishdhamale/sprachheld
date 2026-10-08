import { useMemo, useState } from 'react'
import { grammar, grammarByLevel, lessons } from '../content/index.js'
import { useProgress, labelForTag } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { ratingOf } from '../engine/adaptive.js'
import { fold } from '../lib/text.js'
import { Empty, Pill, Bar, Card } from '../ui/primitives.jsx'

export default function GrammarHub() {
  const { state } = useProgress()
  const [q, setQ] = useState('')
  const [level, setLevel] = useState('all')

  // Which lesson introduces each grammar topic, so we can show "Lesson 6".
  const owner = useMemo(() => {
    const m = new Map()
    for (const l of lessons) for (const gid of l.grammarIds || []) if (!m.has(gid)) m.set(gid, l)
    return m
  }, [])

  const list = useMemo(() => {
    const needle = fold(q.trim())
    return grammar.filter((g) => {
      if (level !== 'all' && g.level !== level) return false
      if (!needle) return true
      return (
        fold(g.title).includes(needle) ||
        fold(g.short).includes(needle) ||
        (g.tags || []).some((t) => fold(labelForTag(t)).includes(needle))
      )
    })
  }, [q, level])

  if (!grammar.length) {
    return <Empty icon="📐" title="No grammar topics installed" />
  }

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">📐 Grammar</h1>
        <p className="page-sub">
          {grammar.length} topics, each one a short explanation followed immediately by practice.
          Nothing here takes more than five minutes.
        </p>
      </header>

      <div className="stack-sm">
        <input
          className="input"
          placeholder="Search grammar…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="row-wrap">
          {['all', 'A1', 'A2', 'B1'].map((l) => (
            <button
              key={l}
              className={`chip ${level === l ? 'on' : ''}`}
              aria-pressed={level === l}
              onClick={() => setLevel(l)}
            >
              {l === 'all' ? `All (${grammar.length})` : `${l} (${(grammarByLevel[l] || []).length})`}
            </button>
          ))}
        </div>
      </div>

      <div className="stack-sm">
        {list.map((g) => {
          const acc = accuracyOf(state, g)
          const r = ratingOf(acc)
          const l = owner.get(g.id)
          return (
            <a
              key={g.id}
              href={href(`/grammar/${g.id}`)}
              className="card card-link stack-sm"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="between">
                <div className="grow" style={{ minWidth: 0 }}>
                  <div className="row" style={{ gap: 7 }}>
                    <span className="bold">{g.title}</span>
                    {acc != null && (
                      <span aria-hidden>{r.key === 'weak' ? '🔴' : r.key === 'ok' ? '🟡' : '🟢'}</span>
                    )}
                  </div>
                  <div className="small dim" style={{ marginTop: 2 }}>
                    {g.short}
                  </div>
                </div>
                <Pill tone={g.level.toLowerCase()}>{g.level}</Pill>
              </div>
              <div className="row" style={{ gap: 'var(--s3)' }}>
                {acc != null ? (
                  <>
                    <div className="grow">
                      <Bar
                        value={acc}
                        size="sm"
                        tone={r.tone === 'ok' ? 'ok' : r.tone === 'warn' ? 'warn' : 'bad'}
                      />
                    </div>
                    <span className="tiny dim nowrap">{Math.round(acc * 100)}%</span>
                  </>
                ) : (
                  <span className="tiny dim grow">
                    {g.exercises?.length ?? 0} exercises
                    {l ? ` · taught in lesson ${l.order}` : ''}
                  </span>
                )}
              </div>
            </a>
          )
        })}
        {!list.length && (
          <Card className="sunk flat">
            <p className="small muted">Nothing matches “{q}”.</p>
          </Card>
        )}
      </div>
    </div>
  )
}

/** Accuracy across all of a topic's tags. */
function accuracyOf(state, g) {
  let c = 0
  let t = 0
  for (const tag of g.tags || []) {
    const s = state.tagStats[tag]
    if (s) {
      c += s.correct
      t += s.total
    }
  }
  return t >= 3 ? c / t : null
}
