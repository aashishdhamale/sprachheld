import { useMemo, useState } from 'react'
import { vocab, vocabByTopic } from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { cardId, strength, summarize, dueCount } from '../engine/srs.js'
import { fold } from '../lib/text.js'
import { VocabRow, VocabDetail, Flashcard } from '../ui/VocabCard.jsx'
import { Empty, Modal, Bar, Card } from '../ui/primitives.jsx'

const FILTERS = [
  { k: 'all', l: 'All' },
  { k: 'learning', l: 'Learning' },
  { k: 'due', l: 'Due' },
  { k: 'difficult', l: 'Difficult' },
  { k: 'favorite', l: 'Favourites' },
  { k: 'new', l: 'Not started' },
]

export default function Vocabulary() {
  const { state } = useProgress()
  const [q, setQ] = useState('')
  const [level, setLevel] = useState('all')
  const [topic, setTopic] = useState('all')
  const [filter, setFilter] = useState('all')
  const [detail, setDetail] = useState(null)
  const [drill, setDrill] = useState(null)

  const topics = useMemo(() => Array.from(vocabByTopic.keys()).sort(), [])
  const summary = summarize(state.srs, undefined, 'v')
  const due = dueCount(state.srs, undefined, 'v')

  const list = useMemo(() => {
    const needle = fold(q.trim())
    return vocab.filter((v) => {
      if (level !== 'all' && v.level !== level) return false
      if (topic !== 'all' && v.topic !== topic) return false
      if (needle && !fold(v.de).includes(needle) && !fold(v.en).includes(needle)) return false
      const card = state.srs[cardId.vocab(v.id)]
      const mark = state.vocab[v.id] || {}
      switch (filter) {
        case 'learning':
          return card?.reps > 0 && strength(card) < 0.7
        case 'due':
          return card && (card.due ?? 0) <= Math.floor(Date.now() / 86400000)
        case 'difficult':
          return mark.difficult || (card?.lapses ?? 0) >= 2
        case 'favorite':
          return !!mark.favorite
        case 'new':
          return !card?.reps
        default:
          return true
      }
    })
  }, [q, level, topic, filter, state.srs, state.vocab])

  if (!vocab.length) {
    return (
      <Empty icon="🗂" title="No vocabulary installed yet" action={
        <a className="btn btn-primary" href={href('/learn')}>Go to lessons</a>
      }>
        Words appear here as content is added.
      </Empty>
    )
  }

  if (drill) {
    return <DrillView words={drill} onExit={() => setDrill(null)} />
  }

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">🗂 Vocabulary</h1>
        <p className="page-sub">
          {vocab.length} words. {summary.total - summary.neu} started, {summary.mature} known
          solidly{due > 0 ? `, ${due} due for review` : ''}.
        </p>
      </header>

      <Card className="stack-sm">
        <div className="meter-row">
          <span className="meter-label">Progress</span>
          <Bar value={summary.total ? summary.mature / vocab.length : 0} tone="ok" />
          <span className="meter-val">{Math.round((summary.mature / vocab.length) * 100)}%</span>
        </div>
        <div className="row-wrap tiny dim">
          <span>🆕 {vocab.length - summary.total + summary.neu} untouched</span>
          <span>📖 {summary.learning + summary.young} learning</span>
          <span>✅ {summary.mature} known</span>
        </div>
      </Card>

      <div className="stack-sm">
        <input
          className="input"
          placeholder="Search German or English…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="row-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.k}
              className={`chip ${filter === f.k ? 'on' : ''}`}
              aria-pressed={filter === f.k}
              onClick={() => setFilter(f.k)}
            >
              {f.l}
            </button>
          ))}
        </div>
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
          <select className="select" style={{ maxWidth: 170 }} value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="all">All topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="between">
        <span className="small dim">
          {list.length} word{list.length === 1 ? '' : 's'}
        </span>
        <button
          className="btn btn-primary btn-sm"
          disabled={!list.length}
          onClick={() => setDrill(list.slice(0, 20))}
        >
          Drill these {Math.min(list.length, 20)} →
        </button>
      </div>

      <div className="grid grid-2">
        {list.slice(0, 300).map((v) => (
          <VocabRow key={v.id} vocab={v} onClick={setDetail} />
        ))}
      </div>
      {list.length > 300 && (
        <p className="tiny dim center">Showing the first 300 — narrow the filters to see more.</p>
      )}
      {!list.length && (
        <Card className="sunk flat">
          <p className="small muted">Nothing matches those filters.</p>
        </Card>
      )}

      <Modal open={!!detail} onClose={() => setDetail(null)}>
        {detail && <VocabDetail vocab={detail} />}
      </Modal>
    </div>
  )
}

function DrillView({ words, onExit }) {
  const [i, setI] = useState(0)
  const word = words[i]

  if (!word) {
    return (
      <div className="celebrate stack">
        <div className="celebrate-emoji">🧠</div>
        <h2>Done — {words.length} words reviewed</h2>
        <button className="btn btn-primary btn-lg" onClick={onExit}>
          Back to vocabulary
        </button>
      </div>
    )
  }

  return (
    <div className="stack">
      <div className="between">
        <button className="btn btn-ghost btn-sm" onClick={onExit}>
          ✕ Exit
        </button>
        <span className="tiny dim">
          {i + 1} / {words.length}
        </span>
      </div>
      <Bar value={i / words.length} size="sm" />
      <Flashcard key={word.id} vocab={word} onGrade={() => setI(i + 1)} />
      <button className="btn btn-ghost btn-sm" onClick={() => setI(i + 1)}>
        Skip →
      </button>
    </div>
  )
}
