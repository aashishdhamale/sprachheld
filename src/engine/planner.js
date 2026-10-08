/**
 * "What should I do today?" — the single question the dashboard must answer.
 *
 * The planner turns the learner's state into an ordered list of activities that
 * fits their daily goal, always ending with review of what they got wrong.
 */

import {
  lessonPath,
  lessonsByLevel,
  conversationsByLevel,
  vocabById,
  allExercises,
  exercisesByTag,
  exercisesBySkill,
} from '../content/index.js'
import { reviewQueue, dueCount, parseCardId } from './srs.js'
import { weakTags, weakSkills, currentLevel, levelProgress } from './adaptive.js'
import { dayNumber, todayKey } from '../lib/storage.js'

/**
 * The next lesson the learner has not finished.
 *
 * Strictly the earliest unfinished lesson in path order. Deliberately *not*
 * "the most recently opened one": peeking at a later lesson marks it started,
 * and the dashboard should still send you back to where the path actually is
 * rather than skipping everything in between.
 */
export function nextLesson(lessonState) {
  return lessonPath.find((l) => lessonState?.[l.id]?.status !== 'done') || null
}

export function lastCompletedLesson(lessonState) {
  let best = null
  let bestAt = 0
  for (const l of lessonPath) {
    const st = lessonState?.[l.id]
    if (st?.status === 'done' && (st.completedAt || 0) > bestAt) {
      best = l
      bestAt = st.completedAt || 0
    }
  }
  return best
}

/**
 * Today's plan.
 * @returns {{items: Array, totalMin: number, doneCount: number}}
 */
export function dailyPlan(state) {
  const today = dayNumber()
  const items = []
  const lesson = nextLesson(state.lessons)
  const level = currentLevel(lessonsByLevel, state.lessons)
  const due = dueCount(state.srs, today)
  const doneToday = state.days?.[todayKey()] || { xp: 0, minutes: 0, answers: 0 }

  // 1. Review first — spaced repetition works best before new material.
  if (due > 0) {
    items.push({
      key: 'review',
      icon: '🔄',
      title: `Review ${due} item${due === 1 ? '' : 's'}`,
      sub: 'Words and mistakes that are due today',
      minutes: Math.min(8, Math.max(2, Math.round(due * 0.35))),
      href: '#/review',
      tone: 'warn',
    })
  }

  // 2. The lesson itself.
  if (lesson) {
    const st = state.lessons?.[lesson.id]
    items.push({
      key: 'lesson',
      icon: lesson.icon || '📘',
      title: st?.status === 'started' ? `Continue: ${lesson.title}` : lesson.title,
      sub: `${lesson.level} · Lesson ${lesson.order} · ${lesson.summary}`,
      minutes: lesson.minutes || 15,
      href: `#/lesson/${lesson.id}`,
      tone: 'accent',
      primary: true,
    })
  }

  // 3. Targeted practice on the weakest area.
  const weakT = weakTags(state.tagStats, { limit: 1 })[0]
  const weakS = weakSkills(state.skills, { limit: 1 })[0]
  if (weakT && exercisesByTag(weakT.tag).length >= 4) {
    items.push({
      key: 'weak',
      icon: '🎯',
      title: `Fix your weak spot: ${weakT.label}`,
      sub: `${Math.round(weakT.acc * 100)}% correct so far — 6 targeted questions`,
      minutes: 4,
      href: `#/drill/tag/${weakT.tag}`,
      tone: 'bad',
    })
  } else if (weakS && exercisesBySkill(weakS.skill).length >= 4) {
    items.push({
      key: 'weak',
      icon: '🎯',
      title: `Fix your weak spot: ${weakS.label}`,
      sub: `${Math.round(weakS.acc * 100)}% correct so far`,
      minutes: 4,
      href: `#/drill/skill/${weakS.skill}`,
      tone: 'bad',
    })
  }

  // 4. A conversation — the point of the whole app.
  const convo = pickConversation(state, level)
  if (convo) {
    items.push({
      key: 'conversation',
      icon: '🗣',
      title: `Speak: ${convo.title}`,
      sub: convo.setting,
      minutes: 5,
      href: `#/chat/${convo.id}`,
      tone: 'ok',
    })
  }

  // 5. Article trainer — the eternal German problem.
  items.push({
    key: 'articles',
    icon: '🎲',
    title: 'Article trainer',
    sub: 'der, die or das — 10 quick rounds',
    minutes: 3,
    href: '#/articles',
    tone: 'accent',
  })

  const totalMin = items.reduce((n, i) => n + i.minutes, 0)
  return { items, totalMin, doneToday, level, due }
}

/** A scenario the learner has not done recently, at or just below their level. */
export function pickConversation(state, level) {
  const order = ['A1', 'A2', 'B1']
  const i = order.indexOf(level)
  const pool = [...(conversationsByLevel[level] || []), ...(conversationsByLevel[order[i - 1]] || [])]
  if (!pool.length) return null
  const unseen = pool.filter((c) => !state.scenariosDone?.[c.id])
  if (unseen.length) return unseen[0]
  return pool.reduce((oldest, c) => {
    const a = state.scenariosDone?.[c.id]?.at || 0
    const b = state.scenariosDone?.[oldest.id]?.at || 0
    return a < b ? c : oldest
  }, pool[0])
}

/* ── Review session assembly ─────────────────────────────────────────────── */

/**
 * Build today's review: due vocabulary cards + exercises the learner got wrong.
 * @returns {{vocab: Array, exercises: Array, total: number}}
 */
export function buildReview(state, { limit = 20 } = {}) {
  const today = dayNumber()
  const q = reviewQueue(state.srs, { limit, today })
  const vocab = []
  const exercises = []
  for (const cid of q) {
    const { kind, id } = parseCardId(cid)
    if (kind === 'v') {
      const v = vocabById.get(id)
      if (v) vocab.push(v)
    } else if (kind === 'x') {
      const ex = allExercises.find((e) => e.id === id)
      if (ex) exercises.push(ex)
    }
  }
  return { vocab, exercises, total: vocab.length + exercises.length }
}

/**
 * Filler exercises for a lesson's "review" step: the learner's own past
 * mistakes first, then anything from earlier lessons.
 */
export function reviewExercisesFor(state, lesson, count = 3) {
  const out = []
  const seen = new Set()
  const idx = lessonPath.findIndex((l) => l.id === lesson.id)

  // 1. Their own recent mistakes.
  for (const m of state.mistakes || []) {
    if (out.length >= count) break
    if (!m.exId || seen.has(m.exId)) continue
    const ex = allExercises.find((e) => e.id === m.exId)
    if (!ex || ex.ownerId === lesson.id) continue
    seen.add(m.exId)
    out.push(ex)
  }

  // 2. Exercises from earlier lessons.
  if (out.length < count && idx > 0) {
    const earlier = lessonPath.slice(Math.max(0, idx - 4), idx).map((l) => l.id)
    const pool = allExercises.filter((e) => earlier.includes(e.ownerId) && !seen.has(e.id))
    for (const ex of pool) {
      if (out.length >= count) break
      seen.add(ex.id)
      out.push(ex)
    }
  }

  // 3. Anything at the same level, as a last resort.
  if (out.length < count) {
    const pool = allExercises.filter((e) => e.level === lesson.level && !seen.has(e.id) && e.ownerId !== lesson.id)
    for (const ex of pool) {
      if (out.length >= count) break
      seen.add(ex.id)
      out.push(ex)
    }
  }
  return out.slice(0, count)
}

/* ── Streak & goal ───────────────────────────────────────────────────────── */

export function goalProgress(state) {
  const t = state.days?.[todayKey()] || { minutes: 0, xp: 0, answers: 0 }
  const goal = state.profile?.dailyGoalMin || 15
  // Minutes are only recorded on completion, so count answers too.
  const effective = Math.max(t.minutes, Math.round(t.answers * 0.25))
  return {
    minutes: effective,
    goal,
    pct: Math.min(1, effective / goal),
    met: effective >= goal,
    xp: t.xp,
    answers: t.answers,
  }
}

/** The one-line recommendation shown under the greeting. */
export function recommendation(state) {
  const plan = dailyPlan(state)
  const g = goalProgress(state)
  if (g.met) return { text: 'Daily goal reached — anything else today is a bonus. 🎉', tone: 'ok' }
  const first = plan.items.find((i) => i.primary) || plan.items[0]
  if (!first) return { text: 'Start with Lesson 1 — Greetings and introductions.', tone: 'accent' }
  return { text: first.title, href: first.href, tone: first.tone }
}

/* ── Overall progress figures for the dashboard ──────────────────────────── */

export function overview(state) {
  const levels = ['A1', 'A2', 'B1'].map((lv) => ({
    level: lv,
    pct: levelProgress(lessonsByLevel[lv] || [], state.lessons),
    total: (lessonsByLevel[lv] || []).length,
    done: (lessonsByLevel[lv] || []).filter((l) => state.lessons?.[l.id]?.status === 'done').length,
  }))
  const lessonsDone = levels.reduce((n, l) => n + l.done, 0)
  const lessonsTotal = levels.reduce((n, l) => n + l.total, 0)
  return { levels, lessonsDone, lessonsTotal, level: currentLevel(lessonsByLevel, state.lessons) }
}
