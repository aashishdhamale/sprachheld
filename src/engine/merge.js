/**
 * Merge two copies of the learner's progress — this device's and the copy
 * synced from another device — without a server and without losing work done
 * on either side.
 *
 * There is no shared history to diff against, so every field has its own
 * rule, chosen so that nothing is ever counted twice and nothing learned is
 * ever forgotten:
 *
 *   days        per day, the larger of each counter (never summed)
 *   xp          the larger total, or the sum of the merged days if higher
 *   streak      recomputed from the merged days
 *   lessons     the furthest status, best score, most runs
 *   srs         per card, the most recently reviewed copy
 *   skills/tags per key, the record with more answers behind it
 *   mistakes    union, newest first
 *   exams       union of attempts
 *   profile and settings stay this device's own — unless this device has
 *   never been set up, in which case it adopts the synced ones.
 *
 * Every rule is idempotent: merging the result with either input again
 * changes nothing, so devices settle instead of ping-ponging.
 */

import { todayKey, daysBetween } from '../lib/storage.js'

const MISTAKE_CAP = 250
const EXAM_CAP = 60

export function mergeStates(local, remote, today = todayKey()) {
  if (!remote || typeof remote !== 'object') return local
  if (!local || typeof local !== 'object') return remote

  const fresh = !local.profile?.onboarded && !!remote.profile?.onboarded

  const days = mergeDays(local.days, remote.days)
  const daysXp = Object.values(days).reduce((s, d) => s + (d.xp || 0), 0)

  return {
    ...remote,
    ...local,
    v: Math.max(local.v || 1, remote.v || 1),
    profile: fresh
      ? { ...remote.profile }
      : {
          ...(remote.profile || {}),
          ...(local.profile || {}),
          name: local.profile?.name || remote.profile?.name || '',
          onboarded: !!(local.profile?.onboarded || remote.profile?.onboarded),
          startedAt: minKey(local.profile?.startedAt, remote.profile?.startedAt),
        },
    settings: fresh
      ? { ...(remote.settings || {}), aiKey: local.settings?.aiKey || '' }
      : { ...(remote.settings || {}), ...(local.settings || {}) },
    xp: Math.max(local.xp || 0, remote.xp || 0, daysXp),
    days,
    streak: mergeStreak(local.streak, remote.streak, days, today),
    badges: [...new Set([...(local.badges || []), ...(remote.badges || [])])],
    lessons: mergeMap(local.lessons, remote.lessons, mergeLesson),
    srs: mergeMap(local.srs, remote.srs, newerCard),
    skills: mergeMap(local.skills, remote.skills, moreAnswers),
    tagStats: mergeMap(local.tagStats, remote.tagStats, moreAnswers),
    vocab: mergeMap(local.vocab, remote.vocab, (a, b) => ({ ...b, ...a })),
    scenariosDone: mergeMap(local.scenariosDone, remote.scenariosDone, mergeScenario),
    numbers: mergeMap(local.numbers, remote.numbers, mergeNumbers),
    mistakes: mergeMistakes(local.mistakes, remote.mistakes),
    exams: mergeExams(local.exams, remote.exams),
  }
}

/* ── Field rules ─────────────────────────────────────────────────────────── */

function mergeMap(a = {}, b = {}, pick) {
  const out = {}
  for (const k of new Set([...Object.keys(a || {}), ...Object.keys(b || {})])) {
    const x = a?.[k]
    const y = b?.[k]
    out[k] = x == null ? y : y == null ? x : pick(x, y)
  }
  return out
}

function mergeDays(a, b) {
  return mergeMap(a, b, (x, y) => ({
    xp: Math.max(x.xp || 0, y.xp || 0),
    minutes: Math.max(x.minutes || 0, y.minutes || 0),
    answers: Math.max(x.answers || 0, y.answers || 0),
    correct: Math.max(x.correct || 0, y.correct || 0),
  }))
}

function mergeStreak(a = {}, b = {}, days, today) {
  const lastDay = maxKey(a?.lastDay, b?.lastDay) || maxKey(...Object.keys(days))
  if (!lastDay) return { count: 0, best: Math.max(a?.best || 0, b?.best || 0), lastDay: null }
  // Consecutive active days ending at lastDay.
  let run = 0
  const d = new Date(lastDay + 'T12:00:00')
  while (days[todayKey(d)]) {
    run++
    d.setDate(d.getDate() - 1)
  }
  const stored = Math.max(a?.lastDay === lastDay ? a.count || 0 : 0, b?.lastDay === lastDay ? b.count || 0 : 0)
  let count = Math.max(run, stored)
  if (daysBetween(lastDay, today) > 1) count = 0
  return { count, best: Math.max(a?.best || 0, b?.best || 0, count), lastDay }
}

const STATUS_RANK = { new: 0, started: 1, done: 2 }

function mergeLesson(a, b) {
  const later = (b.completedAt || 0) > (a.completedAt || 0) ? b : a
  const status = (STATUS_RANK[b.status] || 0) > (STATUS_RANK[a.status] || 0) ? b.status : a.status
  const out = {
    ...a,
    ...b,
    status,
    stepIndex: Math.max(a.stepIndex || 0, b.stepIndex || 0),
    bestScore: Math.max(a.bestScore || 0, b.bestScore || 0),
    runs: Math.max(a.runs || 0, b.runs || 0),
  }
  if (a.completedAt || b.completedAt) out.completedAt = Math.max(a.completedAt || 0, b.completedAt || 0)
  if (later.lastScore != null) out.lastScore = later.lastScore
  return out
}

/** The copy reviewed most recently wins; ties go to the one with more history. */
function newerCard(a, b) {
  if ((b.seen ?? -1) !== (a.seen ?? -1)) return (b.seen ?? -1) > (a.seen ?? -1) ? b : a
  if ((b.reps || 0) + (b.lapses || 0) !== (a.reps || 0) + (a.lapses || 0)) return (b.reps || 0) + (b.lapses || 0) > (a.reps || 0) + (a.lapses || 0) ? b : a
  return (b.due ?? 0) > (a.due ?? 0) ? b : a
}

function moreAnswers(a, b) {
  return (b.total || 0) > (a.total || 0) ? b : a
}

function mergeScenario(a, b) {
  const later = (b.at || 0) > (a.at || 0) ? b : a
  return { ...later, runs: Math.max(a.runs || 0, b.runs || 0) }
}

function mergeNumbers(a, b) {
  const pick = (b.rounds || 0) > (a.rounds || 0) || ((b.rounds || 0) === (a.rounds || 0) && (b.lastAt || 0) > (a.lastAt || 0)) ? b : a
  return { ...pick, best: Math.max(a.best || 0, b.best || 0) }
}

function mergeMistakes(a = [], b = []) {
  const seen = new Map()
  for (const m of [...(a || []), ...(b || [])]) {
    const k = `${m.ts}|${m.exId || ''}|${m.given || ''}`
    if (!seen.has(k)) seen.set(k, m)
  }
  return [...seen.values()].sort((x, y) => (y.ts || 0) - (x.ts || 0)).slice(0, MISTAKE_CAP)
}

function mergeExams(a = [], b = []) {
  const byId = new Map()
  for (const x of [...(a || []), ...(b || [])]) {
    const prev = byId.get(x.id)
    if (!prev) byId.set(x.id, x)
    else {
      const n = Object.keys(x.sections || {}).length
      const p = Object.keys(prev.sections || {}).length
      if (n > p || (n === p && (x.at || 0) > (prev.at || 0))) byId.set(x.id, x)
    }
  }
  return [...byId.values()].sort((x, y) => (y.at || 0) - (x.at || 0)).slice(0, EXAM_CAP)
}

function minKey(a, b) {
  if (!a) return b
  if (!b) return a
  return a < b ? a : b
}

function maxKey(...keys) {
  return keys.filter(Boolean).sort().pop() || null
}

/* ── Comparison ──────────────────────────────────────────────────────────── */

/**
 * A canonical string of the parts that sync — key order fixed, and the
 * per-device profile and settings left out — so two devices can tell
 * whether there is anything new to send.
 */
export function syncFingerprint(state) {
  if (!state) return ''
  // eslint-disable-next-line no-unused-vars
  const { settings, profile, ...rest } = state
  return stable(rest)
}

function stable(v) {
  if (Array.isArray(v)) return '[' + v.map(stable).join(',') + ']'
  if (v && typeof v === 'object') {
    return '{' + Object.keys(v).sort().filter((k) => v[k] !== undefined).map((k) => JSON.stringify(k) + ':' + stable(v[k])).join(',') + '}'
  }
  return JSON.stringify(v)
}
