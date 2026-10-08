/**
 * Reading practice: a level-appropriate text where any word can be tapped for
 * its meaning, followed by comprehension questions.
 */

import { useMemo, useState } from 'react'
import ExerciseRunner from './ExerciseRunner.jsx'
import { Speak, Pill, AudioControls } from './primitives.jsx'
import { nounLexicon } from '../content/index.js'
import { fold } from '../lib/text.js'

export default function Reading({ reading: r, lessonId, onDone, showQuestions = true }) {
  const [phase, setPhase] = useState('read')
  const [popup, setPopup] = useState(null)

  // Glossary + the whole vocabulary list, so most words are tappable.
  const gloss = useMemo(() => {
    const m = new Map()
    for (const g of r.glossary || []) m.set(fold(g.de), g)
    return m
  }, [r.id])

  const lookup = (raw) => {
    const clean = raw.replace(/[.,!?;:"'„“()–—]/g, '')
    if (!clean) return null
    const k = fold(clean)
    if (gloss.has(k)) return { de: clean, en: gloss.get(k).en, source: 'glossary' }
    const v = nounLexicon.get(clean) || nounLexicon.get(clean.toLowerCase())
    if (v) {
      return {
        de: v.article ? `${v.article} ${v.de}` : v.de,
        en: v.en,
        plural: v.plural,
        example: v.example,
        source: 'vocab',
      }
    }
    return null
  }

  if (phase === 'quiz' && showQuestions) {
    return (
      <div className="stack">
        <button className="btn btn-ghost btn-sm" onClick={() => setPhase('read')}>
          ← Read the text again
        </button>
        <ExerciseRunner
          exercises={r.questions}
          lessonId={lessonId}
          onDone={(s) => onDone?.(s.score)}
          title="Comprehension"
          doneLabel="Continue"
        />
      </div>
    )
  }

  const fullText = (r.paragraphs || []).join(' ')

  return (
    <div className="stack">
      <div className="between">
        <div>
          <h2>{r.title}</h2>
          {r.intro && <p className="small muted">{r.intro}</p>}
        </div>
        <Pill tone={r.level.toLowerCase()}>{r.level}</Pill>
      </div>

      <AudioControls text={fullText} />

      <div className="card reader">
        {(r.paragraphs || []).map((p, i) => (
          <p key={i}>
            <Tappable text={p} onTap={(w, e) => setPopup({ word: lookup(w), x: e.clientX, y: e.clientY })} />
          </p>
        ))}
      </div>

      <p className="tiny dim center">Tap any word to see what it means.</p>

      {popup && (
        <div className="modal-backdrop" onClick={() => setPopup(null)}>
          <div className="modal" style={{ maxWidth: 380 }} onClick={(e) => e.stopPropagation()}>
            {popup.word ? (
              <div className="stack-sm">
                <div className="row">
                  <h2 className="grow de">{popup.word.de}</h2>
                  <Speak text={popup.word.de} size="lg" />
                </div>
                <div className="big" style={{ color: 'var(--accent-text)', fontWeight: 600 }}>
                  {popup.word.en}
                </div>
                {popup.word.plural && (
                  <div className="small dim">
                    plural: <strong className="de">{popup.word.plural}</strong>
                  </div>
                )}
                {popup.word.example && (
                  <div className="card sunk pad-sm small de">{popup.word.example}</div>
                )}
              </div>
            ) : (
              <p className="muted">
                That word is not in the glossary. Try to work it out from the sentence around it —
                that is a real reading skill.
              </p>
            )}
            <button
              className="btn btn-block"
              style={{ marginTop: 'var(--s4)' }}
              onClick={() => setPopup(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {r.glossary?.length > 0 && (
        <details className="card sunk pad-sm">
          <summary className="bold small" style={{ cursor: 'pointer' }}>
            Glossary ({r.glossary.length})
          </summary>
          <div className="stack-sm" style={{ marginTop: 'var(--s3)' }}>
            {r.glossary.map((g, i) => (
              <div key={i} className="between small">
                <span className="de">{g.de}</span>
                <span className="dim">{g.en}</span>
              </div>
            ))}
          </div>
        </details>
      )}

      {showQuestions && r.questions?.length > 0 && (
        <button className="btn btn-primary btn-lg btn-block" onClick={() => setPhase('quiz')}>
          Answer {r.questions.length} questions →
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

/** Splits a paragraph into tappable word spans, preserving punctuation. */
function Tappable({ text, onTap }) {
  const parts = String(text).split(/(\s+)/)
  return (
    <>
      {parts.map((p, i) => {
        if (/^\s+$/.test(p) || !p) return <span key={i}>{p}</span>
        const isWord = /[a-zA-ZäöüÄÖÜß]/.test(p)
        if (!isWord) return <span key={i}>{p}</span>
        return (
          <span
            key={i}
            className="gloss-word"
            role="button"
            tabIndex={0}
            onClick={(e) => onTap(p, e)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onTap(p, e)}
          >
            {p}
          </span>
        )
      })}
    </>
  )
}
