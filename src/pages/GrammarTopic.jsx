import { useState } from 'react'
import { grammarById, conversations } from '../content/index.js'
import { useProgress, labelForTag } from '../store/progress.jsx'
import { href, navigate } from '../lib/router.js'
import ExerciseRunner from '../ui/ExerciseRunner.jsx'
import { Blocks, Empty, Pill, Rich, ExampleRow, Card } from '../ui/primitives.jsx'

export default function GrammarTopic({ id }) {
  const g = grammarById.get(id)
  const { state } = useProgress()
  const [practising, setPractising] = useState(false)

  if (!g) {
    return (
      <Empty
        icon="🧭"
        title="Grammar topic not found"
        action={
          <a className="btn btn-primary" href={href('/grammar')}>
            All grammar
          </a>
        }
      />
    )
  }

  // Scenarios that exercise this grammar, so "Apply" is one tap away.
  const applyIn = conversations.filter((c) => (c.grammarIds || []).includes(g.id))

  if (practising) {
    return (
      <div className="stack">
        <div className="between">
          <button className="btn btn-ghost btn-sm" onClick={() => setPractising(false)}>
            ← Explanation
          </button>
          <Pill tone={g.level.toLowerCase()}>{g.level}</Pill>
        </div>
        <ExerciseRunner
          exercises={g.exercises}
          onDone={() => setPractising(false)}
          title={g.title}
          doneLabel="Done"
        />
      </div>
    )
  }

  return (
    <div className="stack-lg">
      <button className="btn btn-ghost btn-sm" onClick={() => navigate('/grammar')}>
        ← All grammar
      </button>

      <header className="page-head">
        <div className="row-wrap" style={{ marginBottom: 6 }}>
          <Pill tone={g.level.toLowerCase()}>{g.level}</Pill>
          {(g.tags || []).map((t) => (
            <Pill key={t}>{labelForTag(t)}</Pill>
          ))}
        </div>
        <h1 className="page-title">{g.title}</h1>
        {g.titleDe && <p className="page-sub de">{g.titleDe}</p>}
      </header>

      <p className="big">{g.short}</p>

      <Card>
        <Blocks blocks={g.explain} />
      </Card>

      {g.examples?.length > 0 && (
        <section className="stack-sm">
          <div className="sec-title">Examples</div>
          {g.examples.map((ex, i) => (
            <ExampleRow key={i} ex={ex} />
          ))}
        </section>
      )}

      {g.pitfalls?.length > 0 && (
        <section className="stack-sm">
          <div className="sec-title">Common mistakes</div>
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
        </section>
      )}

      <button
        className="btn btn-primary btn-lg btn-block"
        onClick={() => setPractising(true)}
        disabled={!g.exercises?.length}
      >
        Practise · {g.exercises?.length ?? 0} questions
      </button>

      {applyIn.length > 0 && (
        <section className="stack-sm">
          <div className="sec-title">Use it in a conversation</div>
          {applyIn.map((c) => (
            <a
              key={c.id}
              href={href(`/chat/${c.id}`)}
              className="card card-link pad-sm row"
              style={{ gap: 'var(--s3)', textDecoration: 'none', color: 'inherit' }}
            >
              <span style={{ fontSize: '1.3rem' }}>{c.icon || '💬'}</span>
              <span className="grow">
                <span className="bold small" style={{ display: 'block' }}>
                  {c.title}
                </span>
                <span className="tiny dim">{c.goal}</span>
              </span>
              <span className="dim">›</span>
            </a>
          ))}
        </section>
      )}
    </div>
  )
}
