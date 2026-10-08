/**
 * Listening practice. The audio is browser text-to-speech reading the script
 * line by line — no audio files, works offline, and the learner can slow it
 * down as much as they need.
 */

import { useEffect, useState } from 'react'
import ExerciseRunner from './ExerciseRunner.jsx'
import { AudioControls, Pill, Speak } from './primitives.jsx'
import { stopSpeaking, ttsSupported } from '../lib/speech.js'

export default function Listening({ listening: h, lessonId, onDone, showQuestions = true }) {
  const [phase, setPhase] = useState('listen')
  const [showTranscript, setShowTranscript] = useState(!h.transcriptHidden)
  const [activeLine, setActiveLine] = useState(-1)
  const [played, setPlayed] = useState(false)

  useEffect(() => () => stopSpeaking(), [])

  const lines = (h.script || []).map((l) => l.text)

  if (phase === 'quiz' && showQuestions) {
    return (
      <div className="stack">
        <button className="btn btn-ghost btn-sm" onClick={() => setPhase('listen')}>
          ← Listen again
        </button>
        <ExerciseRunner
          exercises={h.questions}
          lessonId={lessonId}
          onDone={(s) => onDone?.(s.score)}
          title="What did you hear?"
          doneLabel="Continue"
        />
      </div>
    )
  }

  return (
    <div className="stack">
      <div className="between">
        <div>
          <h2>{h.title}</h2>
          {h.intro && <p className="small muted">{h.intro}</p>}
        </div>
        <Pill tone={h.level.toLowerCase()}>{h.level}</Pill>
      </div>

      <div className="card sunk stack">
        <AudioControls
          lines={lines}
          onLine={(i) => {
            setActiveLine(i)
            if (i >= 0) setPlayed(true)
          }}
        />
        <p className="tiny dim">
          Listen a few times before you look at the transcript. Use 🐢 Slow if it goes too fast.
        </p>
      </div>

      {!showTranscript ? (
        <button className="btn btn-block" onClick={() => setShowTranscript(true)}>
          📄 Show transcript
        </button>
      ) : (
        <div className="card stack-sm">
          <div className="between">
            <span className="sec-title">Transcript</span>
            {h.transcriptHidden && (
              <button className="btn btn-ghost btn-sm" onClick={() => setShowTranscript(false)}>
                Hide
              </button>
            )}
          </div>
          {(h.script || []).map((l, i) => (
            <div
              key={i}
              className="row"
              style={{
                alignItems: 'flex-start',
                gap: 8,
                padding: '4px 6px',
                borderRadius: 8,
                background: activeLine === i ? 'var(--accent-soft)' : 'transparent',
                transition: 'background 150ms',
              }}
            >
              <span className="pill" style={{ minWidth: 62, justifyContent: 'center' }}>
                {l.who}
              </span>
              <span className="grow de">{l.text}</span>
              <Speak text={l.text} />
            </div>
          ))}
        </div>
      )}

      {!ttsSupported() && (
        <div className="note warn small">
          This browser cannot speak German, so read the transcript aloud yourself and then answer
          the questions.
        </div>
      )}

      {showQuestions && h.questions?.length > 0 && (
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={() => {
            stopSpeaking()
            setPhase('quiz')
          }}
        >
          Answer {h.questions.length} questions →
        </button>
      )}
      {!showQuestions && onDone && (
        <button className="btn btn-primary btn-lg btn-block" onClick={() => onDone(1)}>
          Continue
        </button>
      )}
    </div>
  )
}
