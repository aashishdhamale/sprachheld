/**
 * The learner profile: one reducer, one localStorage key, no dependencies.
 *
 * Everything the app knows about the learner lives here — progress, SRS
 * scheduling, skill accuracy, mistakes, settings. Components read it with
 * useProgress() and change it with dispatch({type, ...}).
 */

import { createContext, useContext, useEffect, useMemo, useReducer, useRef } from 'react'
import { load, save, todayKey, dayNumber, daysBetween } from '../lib/storage.js'
import { schedule, cardId, newCard } from '../engine/srs.js'

const KEY = 'sprachheld.v1'
const MISTAKE_CAP = 250
const EXAM_CAP = 60

export const SKILLS = [
  'vocabulary',
  'grammar',
  'articles',
  'verbs',
  'wordorder',
  'cases',
  'prepositions',
  'reading',
  'listening',
  'conversation',
  'writing',
]

export const SKILL_LABEL = {
  vocabulary: 'Vocabulary',
  grammar: 'Grammar',
  articles: 'Articles',
  verbs: 'Verbs',
  wordorder: 'Word order',
  cases: 'Cases',
  prepositions: 'Prepositions',
  reading: 'Reading',
  listening: 'Listening',
  conversation: 'Conversation',
  writing: 'Writing',
}

export const TAG_LABEL = {
  nominativ: 'Nominative',
  akkusativ: 'Accusative',
  dativ: 'Dative',
  perfekt: 'Perfect tense',
  praeteritum: 'Präteritum',
  plusquamperfekt: 'Plusquamperfekt',
  modalverben: 'Modal verbs',
  trennbar: 'Separable verbs',
  nebensatz: 'Subordinate clauses',
  relativsatz: 'Relative clauses',
  konjunktiv2: 'Konjunktiv II',
  passiv: 'Passive voice',
  adjektivendungen: 'Adjective endings',
  wechselpraepositionen: 'Two-way prepositions',
  negation: 'Negation',
  possessiv: 'Possessives',
  reflexiv: 'Reflexive verbs',
  komparativ: 'Comparison',
  imperativ: 'Imperative',
  'w-fragen': 'Question words',
  praesens: 'Present tense',
  wortstellung: 'Word order',
  konjugation: 'Conjugation',
  artikel: 'Articles',
  praeposition: 'Prepositions',
  grossschreibung: 'Capitalisation',
  plural: 'Plurals',
  verbs: 'Verbs',
  konnektoren: 'Connectors',
  infinitiv: 'Infinitive clauses',
  futur: 'Future',
  formell: 'Formal register',
  pronomen: 'Pronouns',
  hoeflichkeit: 'Polite requests',
  begruessung: 'Greetings',
  zeitangaben: 'Time expressions',
  zahlen: 'Numbers',
  vokabular: 'Vocabulary',
  subjekt: 'Missing subject',
  alter: 'Saying your age',
  'nach-zu': 'nach vs zu',
  'zwei-verben': 'One verb per clause',
}

export function labelForTag(tag) {
  return TAG_LABEL[tag] || tag.charAt(0).toUpperCase() + tag.slice(1)
}

/* ── Initial state ───────────────────────────────────────────────────────── */

function freshSkills() {
  const o = {}
  for (const s of SKILLS) o[s] = { correct: 0, total: 0, ema: 0.5 }
  return o
}

export function initialState() {
  return {
    v: 1,
    profile: {
      name: '',
      startedAt: todayKey(),
      level: 'A1',
      dailyGoalMin: 15,
      onboarded: false,
    },
    xp: 0,
    badges: [],
    streak: { count: 0, best: 0, lastDay: null },
    days: {}, // 'YYYY-MM-DD' -> { xp, minutes, answers, correct }
    lessons: {}, // lessonId -> { status, stepIndex, bestScore, runs, completedAt }
    srs: {}, // cardId -> card
    skills: freshSkills(),
    tagStats: {}, // tag -> { correct, total }
    mistakes: [], // newest first
    vocab: {}, // vocabId -> { known, difficult, favorite }
    scenariosDone: {}, // conversationId -> { runs, lastScore }
    numbers: {}, // trainer mode -> { band, rounds, best, lastAt }
    exams: [], // mock-exam attempts, newest first
    settings: {
      theme: 'auto',
      showTranslation: true,
      autoSpeak: false,
      rate: 0.95,
      slowRate: 0.65,
      germanUi: 'auto', // auto | english | more-german
      aiEnabled: false,
      aiKey: '',
      aiModel: 'claude-sonnet-5',
    },
  }
}

/* ── Migration / hydration ───────────────────────────────────────────────── */

function hydrate() {
  const saved = load(KEY, null)
  if (!saved || typeof saved !== 'object') return initialState()
  const base = initialState()
  const merged = {
    ...base,
    ...saved,
    profile: { ...base.profile, ...(saved.profile || {}) },
    settings: { ...base.settings, ...(saved.settings || {}) },
    streak: { ...base.streak, ...(saved.streak || {}) },
    skills: { ...base.skills, ...(saved.skills || {}) },
    days: saved.days || {},
    lessons: saved.lessons || {},
    srs: saved.srs || {},
    tagStats: saved.tagStats || {},
    vocab: saved.vocab || {},
    scenariosDone: saved.scenariosDone || {},
    numbers: saved.numbers || {},
    exams: Array.isArray(saved.exams) ? saved.exams : [],
    mistakes: Array.isArray(saved.mistakes) ? saved.mistakes : [],
  }
  for (const s of SKILLS) if (!merged.skills[s]) merged.skills[s] = { correct: 0, total: 0, ema: 0.5 }
  return applyStreak(merged)
}

/** Recompute the streak on load — it can lapse while the app is closed. */
function applyStreak(state) {
  const today = todayKey()
  const last = state.streak.lastDay
  if (!last) return state
  const gap = daysBetween(last, today)
  if (gap <= 1) return state
  return { ...state, streak: { ...state.streak, count: 0 } }
}

/* ── Reducer ─────────────────────────────────────────────────────────────── */

const EMA_ALPHA = 0.18

function touchDay(state, { xp = 0, minutes = 0, answers = 0, correct = 0 } = {}) {
  const today = todayKey()
  const prev = state.days[today] || { xp: 0, minutes: 0, answers: 0, correct: 0 }
  const days = {
    ...state.days,
    [today]: {
      xp: prev.xp + xp,
      minutes: prev.minutes + minutes,
      answers: prev.answers + answers,
      correct: prev.correct + correct,
    },
  }
  let streak = state.streak
  if (state.streak.lastDay !== today) {
    const gap = state.streak.lastDay ? daysBetween(state.streak.lastDay, today) : 999
    const count = gap === 1 ? state.streak.count + 1 : 1
    streak = { count, best: Math.max(state.streak.best || 0, count), lastDay: today }
  }
  return { ...state, days, streak }
}

function reducer(state, action) {
  switch (action.type) {
    /* --- profile & settings --- */
    case 'profile':
      return { ...state, profile: { ...state.profile, ...action.patch } }

    case 'settings':
      return { ...state, settings: { ...state.settings, ...action.patch } }

    /* --- answering an exercise --- */
    case 'answer': {
      const { skill = 'grammar', tags = [], correct, exercise, given, expected, lessonId } = action
      let next = { ...state }

      // Skill stats + exponential moving average of recent accuracy.
      const cur = state.skills[skill] || { correct: 0, total: 0, ema: 0.5 }
      next.skills = {
        ...state.skills,
        [skill]: {
          correct: cur.correct + (correct ? 1 : 0),
          total: cur.total + 1,
          ema: cur.ema * (1 - EMA_ALPHA) + (correct ? 1 : 0) * EMA_ALPHA,
        },
      }

      // Per-tag stats drive the "weak areas" list.
      if (tags.length) {
        const ts = { ...state.tagStats }
        for (const t of tags) {
          const p = ts[t] || { correct: 0, total: 0 }
          ts[t] = { correct: p.correct + (correct ? 1 : 0), total: p.total + 1 }
        }
        next.tagStats = ts
      }

      // Wrong answers become SRS cards so they come back.
      if (!correct && exercise?.id) {
        const cid = cardId.exercise(exercise.id)
        next.srs = { ...next.srs, [cid]: schedule(state.srs[cid], 0) }
        next.mistakes = [
          {
            ts: Date.now(),
            exId: exercise.id,
            kind: exercise.kind,
            skill,
            tags,
            prompt: shortPrompt(exercise),
            given: String(given ?? '').slice(0, 120),
            expected: String(expected ?? '').slice(0, 120),
            lessonId: lessonId || null,
          },
          ...state.mistakes,
        ].slice(0, MISTAKE_CAP)
      } else if (correct && exercise?.id && state.srs[cardId.exercise(exercise.id)]) {
        const cid = cardId.exercise(exercise.id)
        next.srs = { ...next.srs, [cid]: schedule(state.srs[cid], 2) }
      }

      const gained = action.xp ?? (correct ? 2 : 0)
      next.xp = state.xp + gained
      next = touchDay(next, { xp: gained, answers: 1, correct: correct ? 1 : 0 })
      return next
    }

    /* --- SRS grading (flashcards, review) --- */
    case 'srs': {
      const { id, kind = 'v', grade } = action
      const cid = `${kind}:${id}`
      const gained = grade > 0 ? 1 : 0
      let next = {
        ...state,
        srs: { ...state.srs, [cid]: schedule(state.srs[cid], grade) },
        xp: state.xp + gained,
      }
      next = touchDay(next, { xp: gained })
      return next
    }

    case 'srsSeed': {
      // Introduce cards without grading them (first exposure in a lesson).
      const srs = { ...state.srs }
      const today = dayNumber()
      for (const id of action.ids || []) {
        const cid = `${action.kind || 'v'}:${id}`
        if (!srs[cid]) srs[cid] = newCard(today)
      }
      return { ...state, srs }
    }

    /* --- lessons --- */
    case 'lessonStep': {
      const prev = state.lessons[action.lessonId] || { status: 'new', stepIndex: 0, runs: 0 }
      return {
        ...state,
        lessons: {
          ...state.lessons,
          [action.lessonId]: {
            ...prev,
            status: prev.status === 'done' ? 'done' : 'started',
            stepIndex: Math.max(prev.stepIndex || 0, action.stepIndex),
          },
        },
      }
    }

    case 'lessonDone': {
      const { lessonId, score = 0, minutes = 0 } = action
      const prev = state.lessons[lessonId] || { runs: 0, bestScore: 0 }
      const first = prev.status !== 'done'
      const gained = first ? 25 + Math.round(score * 25) : 8
      let next = {
        ...state,
        xp: state.xp + gained,
        lessons: {
          ...state.lessons,
          [lessonId]: {
            ...prev,
            status: 'done',
            stepIndex: action.steps ?? prev.stepIndex ?? 0,
            bestScore: Math.max(prev.bestScore || 0, score),
            lastScore: score,
            runs: (prev.runs || 0) + 1,
            completedAt: Date.now(),
          },
        },
      }
      next = touchDay(next, { xp: gained, minutes })
      return next
    }

    case 'lessonReset': {
      const l = { ...state.lessons }
      delete l[action.lessonId]
      return { ...state, lessons: l }
    }

    /* --- vocabulary marks --- */
    case 'vocab': {
      const prev = state.vocab[action.id] || {}
      return { ...state, vocab: { ...state.vocab, [action.id]: { ...prev, ...action.patch } } }
    }

    /* --- conversation --- */
    case 'scenarioDone': {
      const prev = state.scenariosDone[action.id] || { runs: 0 }
      let next = {
        ...state,
        scenariosDone: {
          ...state.scenariosDone,
          [action.id]: { runs: prev.runs + 1, lastScore: action.score ?? null, at: Date.now() },
        },
        xp: state.xp + 15,
      }
      next = touchDay(next, { xp: 15, minutes: action.minutes || 0 })
      return next
    }

    case 'conversationIssue': {
      // A correction made during a live conversation counts as a mistake.
      const { tag, skill = 'conversation', wrong, right } = action
      const ts = { ...state.tagStats }
      const p = ts[tag] || { correct: 0, total: 0 }
      ts[tag] = { correct: p.correct, total: p.total + 1 }
      const cur = state.skills[skill] || { correct: 0, total: 0, ema: 0.5 }
      return {
        ...state,
        tagStats: ts,
        skills: {
          ...state.skills,
          [skill]: { ...cur, total: cur.total + 1, ema: cur.ema * (1 - EMA_ALPHA) },
        },
        mistakes: [
          {
            ts: Date.now(),
            skill,
            tags: [tag],
            prompt: 'Conversation',
            given: String(wrong || '').slice(0, 120),
            expected: String(right || '').slice(0, 120),
            fromChat: true,
          },
          ...state.mistakes,
        ].slice(0, MISTAKE_CAP),
      }
    }

    /* --- numbers trainer --- */
    case 'numbersBand': {
      const prev = state.numbers[action.mode] || { band: 1, rounds: 0, best: 0 }
      return { ...state, numbers: { ...state.numbers, [action.mode]: { ...prev, band: action.band } } }
    }

    case 'numbersRound': {
      const prev = state.numbers[action.mode] || { band: 1, rounds: 0, best: 0 }
      const gained = 5
      let next = {
        ...state,
        xp: state.xp + gained,
        numbers: {
          ...state.numbers,
          [action.mode]: {
            ...prev,
            band: action.band ?? prev.band,
            rounds: (prev.rounds || 0) + 1,
            best: Math.max(prev.best || 0, action.score || 0),
            lastAt: Date.now(),
          },
        },
      }
      next = touchDay(next, { xp: gained, minutes: action.minutes || 0 })
      return next
    }

    /* --- mock exams --- */
    case 'examAttempt': {
      const gained = action.attempt.complete ? 30 : 10
      let next = {
        ...state,
        xp: state.xp + gained,
        exams: [action.attempt, ...state.exams.filter((a) => a.id !== action.attempt.id)].slice(0, EXAM_CAP),
      }
      next = touchDay(next, { xp: gained, minutes: action.minutes || 0 })
      return next
    }

    /* --- sync: the merged state arrives whole --- */
    case 'replace':
      return {
        ...action.state,
        settings: { ...action.state.settings, aiKey: state.settings.aiKey },
      }

    /* --- misc --- */
    case 'xp': {
      let next = { ...state, xp: state.xp + (action.amount || 0) }
      next = touchDay(next, { xp: action.amount || 0, minutes: action.minutes || 0 })
      return next
    }

    case 'time':
      return touchDay(state, { minutes: action.minutes || 0 })

    case 'badge':
      if (state.badges.includes(action.id)) return state
      return { ...state, badges: [...state.badges, action.id] }

    case 'clearMistake':
      return { ...state, mistakes: state.mistakes.filter((m) => m.exId !== action.exId) }

    case 'import': {
      const incoming = action.state || {}
      const base = initialState()
      return {
        ...base,
        ...incoming,
        profile: { ...base.profile, ...(incoming.profile || {}) },
        settings: {
          ...base.settings,
          ...(incoming.settings || {}),
          // Backups deliberately omit the API key — keep whatever is already
          // set here rather than signing the learner out of the AI tutor.
          aiKey: incoming.settings?.aiKey || state.settings.aiKey || '',
        },
      }
    }

    case 'reset':
      return initialState()

    default:
      return state
  }
}

function shortPrompt(ex) {
  const s =
    ex.prompt || ex.sentence || ex.question || ex.wrong || ex.noun || ex.verb || ex.tokens?.join(' ') || ''
  return String(s).slice(0, 140)
}

/* ── Context ─────────────────────────────────────────────────────────────── */

const Ctx = createContext(null)

export function ProgressProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, hydrate)
  const timer = useRef(null)

  // Debounced persistence — never blocks a render.
  useEffect(() => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => save(KEY, state), 200)
    return () => clearTimeout(timer.current)
  }, [state])

  // Theme
  useEffect(() => {
    const t = state.settings.theme
    const root = document.documentElement
    if (t === 'auto') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', t)
  }, [state.settings.theme])

  const value = useMemo(() => ({ state, dispatch }), [state])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useProgress() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useProgress must be used inside <ProgressProvider>')
  return v
}

export { KEY as STORAGE_KEY }
