/**
 * Spaced repetition — a compact SM-2 variant.
 *
 * A "card" is anything worth remembering, addressed by a prefixed id:
 *   v:<vocabId>   a vocabulary word
 *   g:<grammarId> a grammar point
 *   x:<exerciseId> an exercise the learner got wrong
 *
 * Grades: 0 = again (wrong), 1 = hard, 2 = good, 3 = easy.
 */

import { dayNumber } from '../lib/storage.js'

export const GRADE = { AGAIN: 0, HARD: 1, GOOD: 2, EASY: 3 }

export const cardId = {
  vocab: (id) => `v:${id}`,
  grammar: (id) => `g:${id}`,
  exercise: (id) => `x:${id}`,
}

export function parseCardId(cid) {
  const i = cid.indexOf(':')
  return { kind: cid.slice(0, i), id: cid.slice(i + 1) }
}

export function newCard(today = dayNumber()) {
  return { ease: 2.5, int: 0, due: today, reps: 0, lapses: 0, seen: today }
}

/** Apply a grade and return the updated card. Pure. */
export function schedule(card, grade, today = dayNumber()) {
  const c = card ? { ...card } : newCard(today)
  c.seen = today

  if (grade === GRADE.AGAIN) {
    c.lapses += 1
    c.reps = 0
    c.ease = Math.max(1.3, c.ease - 0.2)
    c.int = 0
    c.due = today // same session / same day
    return c
  }

  c.reps += 1
  // Ease adjustment, SM-2 style but gentler.
  if (grade === GRADE.HARD) c.ease = Math.max(1.3, c.ease - 0.15)
  else if (grade === GRADE.EASY) c.ease = Math.min(3.0, c.ease + 0.1)

  if (c.reps === 1) c.int = grade === GRADE.EASY ? 2 : 1
  else if (c.reps === 2) c.int = grade === GRADE.HARD ? 2 : grade === GRADE.EASY ? 5 : 3
  else {
    const mult = grade === GRADE.HARD ? 1.2 : grade === GRADE.EASY ? c.ease * 1.3 : c.ease
    c.int = Math.max(1, Math.round(c.int * mult))
  }
  c.int = Math.min(c.int, 180)
  c.due = today + c.int
  return c
}

/** Cards due today (or overdue), hardest first. */
export function dueCards(srs, today = dayNumber(), filterKind = null) {
  const out = []
  for (const [cid, card] of Object.entries(srs || {})) {
    if (filterKind && !cid.startsWith(filterKind + ':')) continue
    if ((card?.due ?? 0) <= today) out.push({ cid, card })
  }
  out.sort((a, b) => {
    const overdueA = today - (a.card.due ?? 0)
    const overdueB = today - (b.card.due ?? 0)
    if (overdueB !== overdueA) return overdueB - overdueA
    return (b.card.lapses ?? 0) - (a.card.lapses ?? 0)
  })
  return out
}

export function dueCount(srs, today = dayNumber(), filterKind = null) {
  return dueCards(srs, today, filterKind).length
}

/**
 * How well a card is known, 0..1. Used for the vocabulary strength bars and
 * to decide which words still need work.
 */
export function strength(card) {
  if (!card || !card.reps) return 0
  const byInterval = Math.min(1, Math.log2(1 + card.int) / Math.log2(1 + 60))
  const byLapses = Math.max(0, 1 - card.lapses * 0.15)
  return Math.max(0, Math.min(1, byInterval * 0.75 + byLapses * 0.25))
}

export function isMature(card) {
  return (card?.int ?? 0) >= 21
}

/** Split a set of cards into learning stages, for the progress page. */
export function summarize(srs, today = dayNumber(), kind = 'v') {
  let neu = 0
  let learning = 0
  let young = 0
  let mature = 0
  let due = 0
  for (const [cid, card] of Object.entries(srs || {})) {
    if (!cid.startsWith(kind + ':')) continue
    if (!card.reps) neu++
    else if (card.int < 3) learning++
    else if (card.int < 21) young++
    else mature++
    if ((card.due ?? 0) <= today) due++
  }
  return { neu, learning, young, mature, due, total: neu + learning + young + mature }
}

/**
 * Pick the next batch to review: everything due, plus a few "leeches"
 * (cards lapsed 3+ times) so weak items keep coming back.
 */
export function reviewQueue(srs, { limit = 20, today = dayNumber(), kind = null } = {}) {
  const due = dueCards(srs, today, kind).map((d) => d.cid)
  if (due.length >= limit) return due.slice(0, limit)
  const leeches = Object.entries(srs || {})
    .filter(([cid, c]) => (!kind || cid.startsWith(kind + ':')) && (c.lapses ?? 0) >= 3)
    .sort((a, b) => (b[1].lapses ?? 0) - (a[1].lapses ?? 0))
    .map(([cid]) => cid)
    .filter((cid) => !due.includes(cid))
  return due.concat(leeches).slice(0, limit)
}
