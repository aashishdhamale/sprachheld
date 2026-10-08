/**
 * Vocabulary cards — the flip-card drill and the compact list row.
 */

import { useEffect, useState } from 'react'
import { Speak, Pill, ArticlePill, Bar } from './primitives.jsx'
import { useProgress } from '../store/progress.jsx'
import { GRADE, cardId, strength } from '../engine/srs.js'

const GENDER_CLASS = { der: 'gender-der', die: 'gender-die', das: 'gender-das' }

export function withArticle(v) {
  return v.article ? `${v.article} ${v.de}` : v.de
}

/* ── Flip card ───────────────────────────────────────────────────────────── */

export function Flashcard({ vocab: v, onGrade, showGrades = true, front = 'de' }) {
  const { state, dispatch } = useProgress()
  const [flipped, setFlipped] = useState(false)
  const mark = state.vocab[v.id] || {}
  const card = state.srs[cardId.vocab(v.id)]

  useEffect(() => setFlipped(false), [v.id])

  useEffect(() => {
    if (flipped && state.settings.autoSpeak) {
      // Speaking on flip is how you tie sound to meaning.
      const t = setTimeout(() => {}, 0)
      return () => clearTimeout(t)
    }
  }, [flipped, state.settings.autoSpeak])

  const grade = (g) => {
    dispatch({ type: 'srs', kind: 'v', id: v.id, grade: g })
    onGrade?.(g)
    setFlipped(false)
  }

  return (
    <div className="stack">
      <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
        <div className="flashcard-inner">
          {/* The face is a div, not a button: it holds a speaker button, and a
              button inside a button is invalid HTML. The "Show answer" control
              below gives keyboard users the same action. */}
          <div className="flashcard-face">
            <div
              className="flashcard-tap"
              role="button"
              tabIndex={0}
              aria-label="Show meaning"
              onClick={() => setFlipped(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setFlipped(true)
                }
              }}
            >
              {front === 'de' ? (
                <>
                  <div className="row" style={{ gap: 10, justifyContent: 'center' }}>
                    {v.article && <ArticlePill article={v.article} />}
                    <span style={{ fontSize: '1.9rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                      {v.de}
                    </span>
                  </div>
                  <span className="tiny dim">Tap to reveal</span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: '1.6rem', fontWeight: 650 }}>{v.en}</span>
                  <span className="tiny dim">What is this in German?</span>
                </>
              )}
            </div>
            {front === 'de' && <Speak text={withArticle(v)} size="lg" />}
          </div>

          <div className="flashcard-face back">
            <div className="row" style={{ gap: 10 }}>
              {v.article && <ArticlePill article={v.article} />}
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{v.de}</span>
              <Speak text={withArticle(v)} />
            </div>
            <div className="big bold" style={{ color: 'var(--accent-text)' }}>
              {v.en}
            </div>
            {v.plural && (
              <div className="small dim">
                plural: <strong className="de">{v.plural}</strong>
              </div>
            )}
            <div className="card sunk pad-sm" style={{ width: '100%' }}>
              <div className="row" style={{ gap: 8 }}>
                <span className="de grow" style={{ textAlign: 'left' }}>
                  {v.example}
                </span>
                <Speak text={v.example} />
              </div>
              {state.settings.showTranslation && (
                <div className="small dim" style={{ textAlign: 'left', marginTop: 2 }}>
                  {v.exampleEn}
                </div>
              )}
            </div>
            {v.note && <div className="tiny dim">{v.note}</div>}
          </div>
        </div>
      </div>

      {showGrades && (
        <div className="stack-sm">
          {!flipped ? (
            <button className="btn btn-primary btn-lg btn-block" onClick={() => setFlipped(true)}>
              Show answer
            </button>
          ) : (
            <>
              <p className="tiny dim center">How well did you know it?</p>
              <div className="row" style={{ gap: 6 }}>
                <button className="btn btn-danger grow" onClick={() => grade(GRADE.AGAIN)}>
                  Again
                </button>
                <button className="btn grow" onClick={() => grade(GRADE.HARD)}>
                  Hard
                </button>
                <button className="btn btn-soft grow" onClick={() => grade(GRADE.GOOD)}>
                  Good
                </button>
                <button className="btn btn-ok grow" onClick={() => grade(GRADE.EASY)}>
                  Easy
                </button>
              </div>
            </>
          )}
          <div className="row" style={{ justifyContent: 'center', gap: 6 }}>
            <button
              className={`chip ${mark.difficult ? 'on' : ''}`}
              aria-pressed={!!mark.difficult}
              onClick={() => dispatch({ type: 'vocab', id: v.id, patch: { difficult: !mark.difficult } })}
            >
              ⚠️ Difficult
            </button>
            <button
              className={`chip ${mark.favorite ? 'on' : ''}`}
              aria-pressed={!!mark.favorite}
              onClick={() => dispatch({ type: 'vocab', id: v.id, patch: { favorite: !mark.favorite } })}
            >
              ★ Favourite
            </button>
            <button
              className={`chip ${mark.known ? 'on' : ''}`}
              aria-pressed={!!mark.known}
              onClick={() => dispatch({ type: 'vocab', id: v.id, patch: { known: !mark.known } })}
            >
              ✓ Known
            </button>
          </div>
          {card?.reps > 0 && (
            <div className="row" style={{ gap: 8 }}>
              <span className="tiny dim nowrap">strength</span>
              <div className="grow">
                <Bar value={strength(card)} size="sm" tone={strength(card) > 0.6 ? 'ok' : ''} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ── Compact row for lists ───────────────────────────────────────────────── */

export function VocabRow({ vocab: v, onClick, showStrength = true }) {
  const { state, dispatch } = useProgress()
  const mark = state.vocab[v.id] || {}
  const card = state.srs[cardId.vocab(v.id)]

  return (
    <div className="card pad-sm row" style={{ gap: 'var(--s3)' }}>
      <button
        className="grow"
        style={{ textAlign: 'left', minWidth: 0 }}
        onClick={() => onClick?.(v)}
      >
        <div className="row" style={{ gap: 7 }}>
          {v.article && (
            <span className={`pill ${GENDER_CLASS[v.article]}`} style={{ minWidth: 34, justifyContent: 'center' }}>
              {v.article}
            </span>
          )}
          <span className="de bold">{v.de}</span>
          {v.pos !== 'noun' && <span className="tiny dim">{v.pos}</span>}
        </div>
        <div className="small muted" style={{ marginTop: 2 }}>
          {v.en}
        </div>
        {showStrength && card?.reps > 0 && (
          <div style={{ marginTop: 6, maxWidth: 120 }}>
            <Bar value={strength(card)} size="sm" tone={strength(card) > 0.6 ? 'ok' : ''} />
          </div>
        )}
      </button>
      <div className="row" style={{ gap: 4 }}>
        <button
          className="btn btn-ghost btn-icon"
          aria-label={mark.favorite ? 'Remove from favourites' : 'Add to favourites'}
          onClick={() => dispatch({ type: 'vocab', id: v.id, patch: { favorite: !mark.favorite } })}
          style={{ color: mark.favorite ? 'var(--warn)' : undefined }}
        >
          {mark.favorite ? '★' : '☆'}
        </button>
        <Speak text={withArticle(v)} />
      </div>
    </div>
  )
}

/* ── Detail panel ────────────────────────────────────────────────────────── */

export function VocabDetail({ vocab: v }) {
  const { state, dispatch } = useProgress()
  const mark = state.vocab[v.id] || {}
  const card = state.srs[cardId.vocab(v.id)]

  return (
    <div className="stack">
      <div className="row" style={{ gap: 10 }}>
        {v.article && <ArticlePill article={v.article} />}
        <h2 className="grow">{v.de}</h2>
        <Speak text={withArticle(v)} size="lg" />
      </div>
      <div className="big" style={{ color: 'var(--accent-text)', fontWeight: 600 }}>
        {v.en}
      </div>

      <div className="row-wrap">
        <Pill tone={v.level.toLowerCase()}>{v.level}</Pill>
        <Pill>{v.topic}</Pill>
        <Pill>{v.pos}</Pill>
        {v.plural && <Pill>pl. {v.plural}</Pill>}
        {v.separable && <Pill tone="warn">separable</Pill>}
      </div>

      <div className="card sunk pad-sm">
        <div className="row">
          <span className="de grow">{v.example}</span>
          <Speak text={v.example} />
        </div>
        <div className="small dim">{v.exampleEn}</div>
      </div>

      {v.forms && (
        <div className="table-wrap">
          <table className="table">
            <tbody>
              {Object.entries(v.forms).map(([person, form]) => (
                <tr key={person}>
                  <td>{person}</td>
                  <td className="de">{form}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(v.perfect || v.praeteritum) && (
        <div className="small stack-sm">
          {v.praeteritum && (
            <div className="between">
              <span className="dim">Präteritum</span>
              <strong className="de">{v.praeteritum}</strong>
            </div>
          )}
          {v.perfect && (
            <div className="between">
              <span className="dim">Perfekt</span>
              <strong className="de">{v.perfect}</strong>
            </div>
          )}
        </div>
      )}

      {v.note && <div className="note tip small">{v.note}</div>}

      {card?.reps > 0 && (
        <div className="stack-sm">
          <div className="between small">
            <span className="dim">Memory strength</span>
            <strong>{Math.round(strength(card) * 100)}%</strong>
          </div>
          <Bar value={strength(card)} tone={strength(card) > 0.6 ? 'ok' : ''} />
          <div className="tiny dim">
            Seen {card.reps} time{card.reps === 1 ? '' : 's'}
            {card.lapses ? ` · forgotten ${card.lapses}×` : ''} · next in {Math.max(0, card.int)} day
            {card.int === 1 ? '' : 's'}
          </div>
        </div>
      )}

      <div className="row-wrap">
        <button
          className={`chip ${mark.known ? 'on' : ''}`}
          aria-pressed={!!mark.known}
          onClick={() => dispatch({ type: 'vocab', id: v.id, patch: { known: !mark.known } })}
        >
          ✓ I know this
        </button>
        <button
          className={`chip ${mark.difficult ? 'on' : ''}`}
          aria-pressed={!!mark.difficult}
          onClick={() => dispatch({ type: 'vocab', id: v.id, patch: { difficult: !mark.difficult } })}
        >
          ⚠️ Difficult
        </button>
        <button
          className={`chip ${mark.favorite ? 'on' : ''}`}
          aria-pressed={!!mark.favorite}
          onClick={() => dispatch({ type: 'vocab', id: v.id, patch: { favorite: !mark.favorite } })}
        >
          ★ Favourite
        </button>
      </div>
    </div>
  )
}
