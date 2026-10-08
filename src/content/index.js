/**
 * Content registry.
 *
 * Every file in the folders below is picked up automatically — dropping a new
 * `vocab/b1-media.js` or `lessons/a2-l07.js` into place is all it takes to add
 * content. Each module default-exports an array (or a single object).
 *
 * See SCHEMA.md for the shape of each record.
 */

import { levels as LEVELS } from './levels.js'
import { modules as MODULES } from './modules.js'

function collect(globbed) {
  const out = []
  for (const path of Object.keys(globbed).sort()) {
    const mod = globbed[path]
    const val = mod.default ?? mod
    if (Array.isArray(val)) out.push(...val)
    else if (val && typeof val === 'object') out.push(val)
  }
  return out
}

export const vocab = collect(import.meta.glob('./vocab/*.js', { eager: true }))
export const grammar = collect(import.meta.glob('./grammar/*.js', { eager: true }))
export const lessons = collect(import.meta.glob('./lessons/*.js', { eager: true }))
export const conversations = collect(import.meta.glob('./conversations/*.js', { eager: true }))
export const readings = collect(import.meta.glob('./readings/*.js', { eager: true }))
export const listenings = collect(import.meta.glob('./listenings/*.js', { eager: true }))

export const levels = LEVELS
export const modules = MODULES

/* ── Indexes ─────────────────────────────────────────────────────────────── */

const byId = (arr) => {
  const m = new Map()
  for (const x of arr) m.set(x.id, x)
  return m
}

export const vocabById = byId(vocab)
export const grammarById = byId(grammar)
export const lessonById = byId(lessons)
export const conversationById = byId(conversations)
export const readingById = byId(readings)
export const listeningById = byId(listenings)
export const moduleById = byId(modules)
export const levelById = byId(levels)

/** Noun lookup for the error checker: "Tisch" -> vocab entry. */
export const nounLexicon = (() => {
  const m = new Map()
  for (const v of vocab) {
    if (!v.de) continue
    m.set(v.de, v)
    m.set(v.de.toLowerCase(), v)
  }
  return m
})()

/** Every exercise in the app, flattened, with a back-pointer to its owner. */
export const allExercises = (() => {
  const out = []
  const push = (ex, owner) => {
    if (ex?.id) out.push({ ...ex, ownerId: owner.id, ownerKind: owner.kind, level: owner.level })
  }
  for (const g of grammar) (g.exercises || []).forEach((ex) => push(ex, { id: g.id, kind: 'grammar', level: g.level }))
  for (const l of lessons) {
    for (const st of l.steps || []) {
      ;(st.exercises || []).forEach((ex) => push(ex, { id: l.id, kind: 'lesson', level: l.level }))
    }
  }
  for (const r of readings) (r.questions || []).forEach((ex) => push(ex, { id: r.id, kind: 'reading', level: r.level }))
  for (const h of listenings) (h.questions || []).forEach((ex) => push(ex, { id: h.id, kind: 'listening', level: h.level }))
  return out
})()

export const exerciseById = byId(allExercises)

/* ── Ordered structures ──────────────────────────────────────────────────── */

export const lessonsByLevel = (() => {
  const m = { A1: [], A2: [], B1: [] }
  for (const l of lessons) (m[l.level] ||= []).push(l)
  for (const k of Object.keys(m)) m[k].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  return m
})()

export const modulesByLevel = (() => {
  const m = { a1: [], a2: [], b1: [] }
  for (const mod of modules) (m[mod.levelId] ||= []).push(mod)
  return m
})()

/** The full lesson sequence A1 → A2 → B1, which drives "what's next". */
export const lessonPath = [...lessonsByLevel.A1, ...lessonsByLevel.A2, ...lessonsByLevel.B1]

export const vocabByLevel = (() => {
  const m = { A1: [], A2: [], B1: [] }
  for (const v of vocab) (m[v.level] ||= []).push(v)
  return m
})()

export const vocabByTopic = (() => {
  const m = new Map()
  for (const v of vocab) {
    if (!m.has(v.topic)) m.set(v.topic, [])
    m.get(v.topic).push(v)
  }
  return m
})()

export const nouns = vocab.filter((v) => v.pos === 'noun' && v.article)

export const grammarByLevel = (() => {
  const m = { A1: [], A2: [], B1: [] }
  for (const g of grammar) (m[g.level] ||= []).push(g)
  return m
})()

export const conversationsByLevel = (() => {
  const m = { A1: [], A2: [], B1: [] }
  for (const c of conversations) (m[c.level] ||= []).push(c)
  return m
})()

export const readingsByLevel = (() => {
  const m = { A1: [], A2: [], B1: [] }
  for (const r of readings) (m[r.level] ||= []).push(r)
  return m
})()

export const listeningsByLevel = (() => {
  const m = { A1: [], A2: [], B1: [] }
  for (const h of listenings) (m[h.level] ||= []).push(h)
  return m
})()

/* ── Helpers ─────────────────────────────────────────────────────────────── */

export function getVocab(ids = []) {
  return ids.map((id) => vocabById.get(id)).filter(Boolean)
}

export function getGrammar(ids = []) {
  return ids.map((id) => grammarById.get(id)).filter(Boolean)
}

export function lessonIndex(lessonId) {
  return lessonPath.findIndex((l) => l.id === lessonId)
}

export function nextLessonAfter(lessonId) {
  const i = lessonIndex(lessonId)
  return i >= 0 ? lessonPath[i + 1] || null : null
}

/** Exercises tagged with a given grammar topic, for targeted practice. */
export function exercisesByTag(tag, { level = null, limit = 40 } = {}) {
  const out = allExercises.filter(
    (ex) => ex.tags?.includes(tag) && (!level || ex.level === level),
  )
  return out.slice(0, limit)
}

export function exercisesBySkill(skill, { level = null, limit = 40 } = {}) {
  const out = allExercises.filter((ex) => ex.skill === skill && (!level || ex.level === level))
  return out.slice(0, limit)
}

export const CONTENT_STATS = {
  levels: levels.length,
  modules: modules.length,
  lessons: lessons.length,
  vocab: vocab.length,
  nouns: nouns.length,
  grammar: grammar.length,
  conversations: conversations.length,
  readings: readings.length,
  listenings: listenings.length,
  exercises: allExercises.length,
}
