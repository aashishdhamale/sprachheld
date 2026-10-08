import { useState } from 'react'
import { listenings, levelsIn } from '../content/index.js'
import { href } from '../lib/router.js'
import { hasGermanVoice, ttsSupported, germanVoiceName } from '../lib/speech.js'
import Listening from '../ui/Listening.jsx'
import { Empty, Pill, Card } from '../ui/primitives.jsx'

export default function ListeningHub() {
  const [level, setLevel] = useState('all')
  const [active, setActive] = useState(null)

  if (active) {
    return (
      <div className="stack">
        <button className="btn btn-ghost btn-sm" onClick={() => setActive(null)}>
          ← All recordings
        </button>
        <Listening listening={active} onDone={() => setActive(null)} />
      </div>
    )
  }

  if (!listenings.length) {
    return (
      <Empty
        icon="🎧"
        title="No listening scenes yet"
        action={
          <a className="btn btn-primary" href={href('/practice')}>
            Back to practice
          </a>
        }
      >
        Listening arrives with the lessons.
      </Empty>
    )
  }

  const list = level === 'all' ? listenings : listenings.filter((h) => h.level === level)

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">🎧 Listening</h1>
        <p className="page-sub">
          Everyday scenes spoken aloud by your browser. Play it as many times as you like, and
          slow it down when it runs away from you.
        </p>
      </header>

      <VoiceNotice />

      <div className="row-wrap">
        {['all', ...levelsIn(listenings)].map((l) => (
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
        {list.map((h) => (
          <button
            key={h.id}
            className="card card-link row"
            style={{ gap: 'var(--s3)' }}
            onClick={() => setActive(h)}
          >
            <span style={{ fontSize: '1.4rem' }}>🔊</span>
            <span className="grow" style={{ minWidth: 0, textAlign: 'left' }}>
              <span className="bold" style={{ display: 'block' }}>
                {h.title}
              </span>
              <span className="small dim" style={{ display: 'block' }}>
                {h.intro || `${h.script?.length ?? 0} lines · ${h.questions?.length ?? 0} questions`}
              </span>
            </span>
            <Pill tone={h.level.toLowerCase()}>{h.level}</Pill>
          </button>
        ))}
        {!list.length && (
          <Card className="sunk flat">
            <p className="small muted">Nothing at {level} yet.</p>
          </Card>
        )}
      </div>
    </div>
  )
}

function VoiceNotice() {
  if (!ttsSupported()) {
    return (
      <div className="note warn small">
        This browser has no speech synthesis, so the audio will not play. You can still read the
        transcripts and answer the questions.
      </div>
    )
  }
  if (!hasGermanVoice()) {
    return (
      <div className="note warn small">
        No German voice is installed, so playback will use your default voice and the
        pronunciation will be off. On Windows: <strong>Settings → Time &amp; Language → Language
        &amp; region → Add a language → Deutsch</strong>, and include the speech pack.
      </div>
    )
  }
  return (
    <div className="note tip tiny">
      🔊 Using the voice <strong>{germanVoiceName()}</strong>.
    </div>
  )
}
