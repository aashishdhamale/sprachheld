/**
 * Adaptive difficulty and weak-area detection.
 *
 * Two ideas, both deliberately simple:
 *
 *  1. A rolling accuracy (EMA) per skill decides which difficulty band the
 *     learner sees. Three right in a row nudges the band up; two wrong in a
 *     row nudges it down and unlocks a worked example.
 *  2. Accuracy per grammar tag decides what to recommend next.
 */

import { SKILLS, SKILL_LABEL, labelForTag } from '../store/progress.jsx'

/** Confidence-adjusted accuracy: unseen skills sit at neutral, not at 0. */
export function accuracy(stat, prior = 0.6, priorWeight = 4) {
  if (!stat || !stat.total) return null
  return (stat.correct + prior * priorWeight) / (stat.total + priorWeight)
}

export function rawAccuracy(stat) {
  if (!stat?.total) return null
  return stat.correct / stat.total
}

/** 1 | 2 | 3 — which difficulty to serve for this skill right now. */
export function bandFor(skills, skill) {
  const ema = skills?.[skill]?.ema ?? 0.5
  const total = skills?.[skill]?.total ?? 0
  if (total < 4) return 1 // always start gently
  if (ema >= 0.82) return 3
  if (ema >= 0.58) return 2
  return 1
}

/**
 * Live session tuning. Feed it the running streaks and it tells you whether to
 * step up, step down, or hold — plus whether to show extra scaffolding.
 */
export function tuneSession({ band = 2, correctStreak = 0, wrongStreak = 0 } = {}) {
  let next = band
  let reason = null
  if (correctStreak >= 3 && band < 3) {
    next = band + 1
    reason = 'up'
  } else if (wrongStreak >= 2 && band > 1) {
    next = band - 1
    reason = 'down'
  }
  return { band: next, reason, scaffold: wrongStreak >= 2 }
}

/**
 * Choose the next exercise from a pool, respecting the band and avoiding
 * anything just answered. Falls back gracefully when the band is empty.
 */
export function pickExercise(pool, { band = 2, exclude = new Set(), seenCount = {} } = {}) {
  if (!pool?.length) return null
  const fresh = pool.filter((e) => !exclude.has(e.id))
  const candidates = fresh.length ? fresh : pool
  const exact = candidates.filter((e) => (e.difficulty ?? 2) === band)
  const near = candidates.filter((e) => Math.abs((e.difficulty ?? 2) - band) === 1)
  const tier = exact.length ? exact : near.length ? near : candidates
  // Prefer the least-seen item so practice does not loop.
  return tier.reduce((best, e) =>
    (seenCount[e.id] ?? 0) < (seenCount[best.id] ?? 0) ? e : best,
  tier[0])
}

/* ── Weak areas ──────────────────────────────────────────────────────────── */

const MIN_SAMPLES = 4

/**
 * Skills sorted worst first. Only skills with enough data are ranked.
 * @returns {Array<{skill, label, acc, total, level:'weak'|'ok'|'strong'}>}
 */
export function skillReport(skills) {
  const out = []
  for (const s of SKILLS) {
    const stat = skills?.[s]
    const acc = rawAccuracy(stat)
    out.push({
      skill: s,
      label: SKILL_LABEL[s] || s,
      acc,
      total: stat?.total ?? 0,
      ema: stat?.ema ?? 0.5,
      level: acc == null ? 'new' : acc < 0.65 ? 'weak' : acc < 0.82 ? 'ok' : 'strong',
    })
  }
  return out
}

export function weakSkills(skills, { limit = 4 } = {}) {
  return skillReport(skills)
    .filter((s) => s.total >= MIN_SAMPLES && s.acc != null && s.acc < 0.8)
    .sort((a, b) => a.acc - b.acc)
    .slice(0, limit)
}

/**
 * Grammar topics the learner keeps getting wrong.
 * @returns {Array<{tag, label, acc, total}>}
 */
export function weakTags(tagStats, { limit = 5, minTotal = 3 } = {}) {
  return Object.entries(tagStats || {})
    .filter(([, s]) => s.total >= minTotal)
    .map(([tag, s]) => ({ tag, label: labelForTag(tag), acc: s.correct / s.total, total: s.total }))
    .filter((t) => t.acc < 0.85)
    .sort((a, b) => a.acc - b.acc)
    .slice(0, limit)
}

export function strongTags(tagStats, { limit = 3, minTotal = 4 } = {}) {
  return Object.entries(tagStats || {})
    .filter(([, s]) => s.total >= minTotal)
    .map(([tag, s]) => ({ tag, label: labelForTag(tag), acc: s.correct / s.total, total: s.total }))
    .filter((t) => t.acc >= 0.85)
    .sort((a, b) => b.acc - a.acc)
    .slice(0, limit)
}

/** The three-bucket colour used across the UI. */
export function ratingOf(acc) {
  if (acc == null) return { key: 'new', label: 'Not started', tone: 'muted' }
  if (acc >= 0.85) return { key: 'strong', label: 'Strong', tone: 'ok' }
  if (acc >= 0.65) return { key: 'ok', label: 'Getting there', tone: 'warn' }
  return { key: 'weak', label: 'Needs work', tone: 'bad' }
}

/**
 * Repeated mistakes, grouped — "you have mixed up der/den five times".
 */
export function recurringMistakes(mistakes, { limit = 5 } = {}) {
  const byTag = new Map()
  for (const m of mistakes || []) {
    for (const t of m.tags?.length ? m.tags : [m.skill]) {
      if (!byTag.has(t)) byTag.set(t, { tag: t, count: 0, examples: [] })
      const rec = byTag.get(t)
      rec.count++
      if (rec.examples.length < 3 && m.given && m.expected)
        rec.examples.push({ given: m.given, expected: m.expected })
    }
  }
  return Array.from(byTag.values())
    .filter((r) => r.count >= 2)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
    .map((r) => ({ ...r, label: labelForTag(r.tag) }))
}

/* ── Level readiness ─────────────────────────────────────────────────────── */

/** Fraction of a level's lessons completed. */
export function levelProgress(lessonsInLevel, lessonState) {
  if (!lessonsInLevel.length) return 0
  const done = lessonsInLevel.filter((l) => lessonState?.[l.id]?.status === 'done').length
  return done / lessonsInLevel.length
}

/** A level unlocks once the previous one is 80% done. */
export function levelUnlocked(levelId, lessonsByLevel, lessonState) {
  const order = ['A1', 'A2', 'B1']
  const i = order.indexOf(levelId)
  if (i <= 0) return true
  const prev = order[i - 1]
  return levelProgress(lessonsByLevel[prev] || [], lessonState) >= 0.8
}

/** The CEFR level the learner is actually working at right now. */
export function currentLevel(lessonsByLevel, lessonState) {
  const order = ['A1', 'A2', 'B1']
  for (const lv of order) {
    if (levelProgress(lessonsByLevel[lv] || [], lessonState) < 1) return lv
  }
  return 'B1'
}
