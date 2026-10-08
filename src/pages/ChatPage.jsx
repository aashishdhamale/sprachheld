import { conversationById, getVocab, getGrammar } from '../content/index.js'
import { href, navigate } from '../lib/router.js'
import Chat from '../ui/Chat.jsx'
import { Empty, Pill } from '../ui/primitives.jsx'
import { useState } from 'react'

export default function ChatPage({ id }) {
  const c = conversationById.get(id)
  const [started, setStarted] = useState(false)

  if (!c) {
    return (
      <Empty
        icon="🧭"
        title="Scenario not found"
        action={
          <a className="btn btn-primary" href={href('/chat')}>
            All conversations
          </a>
        }
      />
    )
  }

  if (!started) {
    const vocab = getVocab(c.vocabIds || [])
    const grammar = getGrammar(c.grammarIds || [])
    return (
      <div className="stack-lg">
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/chat')}>
          ← All conversations
        </button>

        <header className="page-head">
          <div className="row-wrap" style={{ marginBottom: 6 }}>
            <span style={{ fontSize: '1.6rem' }}>{c.icon || '💬'}</span>
            <Pill tone={c.level.toLowerCase()}>{c.level}</Pill>
          </div>
          <h1 className="page-title">{c.title}</h1>
          <p className="page-sub">{c.setting}</p>
        </header>

        <div className="card stack">
          <div>
            <div className="sec-title" style={{ marginBottom: 4 }}>
              Your task
            </div>
            <p>{c.goal}</p>
          </div>
          <hr />
          <div className="grid grid-2">
            <div>
              <div className="tiny dim">You are</div>
              <div className="bold small">{c.roleUser || 'yourself'}</div>
            </div>
            <div>
              <div className="tiny dim">Talking to</div>
              <div className="bold small">{c.roleBot}</div>
            </div>
          </div>
        </div>

        {vocab.length > 0 && (
          <div className="card stack-sm">
            <div className="sec-title">Words you will need</div>
            <div className="row-wrap">
              {vocab.map((v) => (
                <span key={v.id} className="chip" style={{ cursor: 'default' }}>
                  <span className="de">{v.article ? `${v.article} ${v.de}` : v.de}</span>
                  <span className="dim">· {v.en}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {grammar.length > 0 && (
          <div className="card stack-sm">
            <div className="sec-title">Grammar in play</div>
            {grammar.map((g) => (
              <a key={g.id} href={href(`/grammar/${g.id}`)} className="between small" style={{ color: 'inherit' }}>
                <span className="bold">{g.title}</span>
                <span className="dim">review →</span>
              </a>
            ))}
          </div>
        )}

        <div className="note tip small">
          Type in German. Do not worry about mistakes — the tutor corrects them as you go, and
          the corrections feed straight into your weak-areas list.
        </div>

        <button className="btn btn-primary btn-lg btn-block" onClick={() => setStarted(true)}>
          Start the conversation
        </button>
      </div>
    )
  }

  return (
    <div className="stack">
      <button className="btn btn-ghost btn-sm" onClick={() => navigate('/chat')}>
        ✕ Leave conversation
      </button>
      <Chat conversation={c} onFinish={() => navigate('/chat')} />
    </div>
  )
}
