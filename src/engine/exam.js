/**
 * Mock exams in the shape of the Goethe-Zertifikat A1 (Start Deutsch 1) and
 * Goethe-Zertifikat A2.
 *
 * A FORMAT says what an exam looks like: its sections, their order, timing,
 * and for every part the task type, item count and how often audio may be
 * played. The exam CONTENT (src/content/exams/) only supplies the items, and
 * scripts/check-exams.mjs proves every content file matches its format.
 *
 * Each section is scored out of 25 like the real exam (100 in total, 60 to
 * pass). Listening and reading are marked automatically; writing and
 * speaking are self-assessed against a model answer, with optional AI
 * feedback for writing.
 */

import { matchesAny } from '../lib/text.js'

export const SECTION_POINTS = 25
export const PASS_MARK = 60

export const FORMATS = {
  'goethe-a1': {
    id: 'goethe-a1',
    level: 'A1',
    name: 'Goethe-Zertifikat A1',
    alias: 'Start Deutsch 1',
    order: ['hoeren', 'lesen', 'schreiben', 'sprechen'],
    sections: {
      hoeren: {
        title: 'Hören',
        en: 'Listening',
        icon: '🎧',
        minutes: 20,
        parts: [
          { id: 'teil1', type: 'mc', count: 6, options: 3, plays: 2, de: 'Sie hören sechs kurze Gespräche. Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.', en: 'Six short conversations — choose a, b or c. Each is played twice.' },
          { id: 'teil2', type: 'tf', count: 4, plays: 1, de: 'Sie hören vier Durchsagen. Kreuzen Sie an: Richtig oder Falsch. Sie hören jeden Text einmal.', en: 'Four announcements — true or false? Each is played once.' },
          { id: 'teil3', type: 'mc', count: 5, options: 3, plays: 2, de: 'Sie hören fünf Ansagen am Telefon. Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.', en: 'Five phone messages — choose a, b or c. Each is played twice.' },
        ],
      },
      lesen: {
        title: 'Lesen',
        en: 'Reading',
        icon: '📖',
        minutes: 25,
        parts: [
          { id: 'teil1', type: 'tf', count: 5, de: 'Lesen Sie die zwei Texte. Sind die Sätze richtig oder falsch?', en: 'Two short messages, five statements — true or false?' },
          { id: 'teil2', type: 'ab', count: 5, de: 'Lesen Sie die Aufgaben und die Texte. Wo finden Sie Informationen? Kreuzen Sie an: a oder b.', en: 'For each task, which of two ads or web pages has the answer — a or b?' },
          { id: 'teil3', type: 'tf', count: 5, de: 'Lesen Sie die Schilder und Hinweise. Richtig oder falsch?', en: 'Five signs and notices — true or false?' },
        ],
      },
      schreiben: {
        title: 'Schreiben',
        en: 'Writing',
        icon: '✍️',
        minutes: 20,
        parts: [
          { id: 'teil1', type: 'form', count: 5, de: 'Lesen Sie den Text und füllen Sie das Formular aus.', en: 'Fill in a form for someone, using the information in the text. Five gaps.' },
          { id: 'teil2', type: 'message', words: [25, 40], de: 'Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter). Vergessen Sie nicht Anrede und Gruß.', en: 'A short message covering three points — about 30 words, with a greeting and a sign-off.' },
        ],
      },
      sprechen: {
        title: 'Sprechen',
        en: 'Speaking',
        icon: '🗣',
        minutes: 15,
        parts: [
          { id: 'teil1', type: 'intro', weight: 3, de: 'Stellen Sie sich vor. Buchstabieren Sie Ihren Namen und nennen Sie eine Zahl.', en: 'Introduce yourself using the keywords, then spell your name and say a number.' },
          { id: 'teil2', type: 'askcards', count: 4, weight: 6, de: 'Fragen und antworten Sie: Bilden Sie mit jeder Karte eine Frage.', en: 'Make a question from each word card, then answer your partner’s question.' },
          { id: 'teil3', type: 'requests', count: 4, weight: 6, de: 'Formulieren Sie zu jeder Karte eine Bitte und reagieren Sie.', en: 'Make a polite request for each picture card, then react to your partner’s.' },
        ],
      },
    },
  },

  'goethe-a2': {
    id: 'goethe-a2',
    level: 'A2',
    name: 'Goethe-Zertifikat A2',
    alias: 'A2',
    order: ['lesen', 'hoeren', 'schreiben', 'sprechen'],
    sections: {
      lesen: {
        title: 'Lesen',
        en: 'Reading',
        icon: '📖',
        minutes: 30,
        parts: [
          { id: 'teil1', type: 'mc', count: 5, options: 3, de: 'Sie lesen in einer Zeitung diesen Text. Wählen Sie für die Aufgaben die richtige Lösung a, b oder c.', en: 'A newspaper article — five questions, a, b or c.' },
          { id: 'teil2', type: 'mc', count: 5, options: 3, de: 'Sie sind in einem Gebäude und lesen diese Informationstafel. Wählen Sie die richtige Lösung a, b oder c.', en: 'A building directory — where do you go? Five questions, a, b or c.' },
          { id: 'teil3', type: 'mc', count: 5, options: 3, de: 'Sie lesen eine E-Mail. Wählen Sie für die Aufgaben die richtige Lösung a, b oder c.', en: 'An e-mail — five questions, a, b or c.' },
          { id: 'teil4', type: 'match', count: 5, de: 'Fünf Personen suchen im Internet. Welche Anzeige passt? Für eine Aufgabe gibt es keine Lösung. Markieren Sie dann x.', en: 'Five people, six ads — match each person to an ad. One person has no match: choose x.' },
        ],
      },
      hoeren: {
        title: 'Hören',
        en: 'Listening',
        icon: '🎧',
        minutes: 30,
        parts: [
          { id: 'teil1', type: 'mc', count: 5, options: 3, plays: 2, de: 'Sie hören fünf kurze Texte im Radio. Wählen Sie die richtige Lösung a, b oder c. Sie hören jeden Text zweimal.', en: 'Five short radio texts — a, b or c. Each is played twice.' },
          { id: 'teil2', type: 'match', count: 5, plays: 1, de: 'Sie hören ein Gespräch. Was passt zusammen? Wählen Sie für jede Aufgabe die richtige Lösung. Sie hören den Text einmal.', en: 'One conversation — match each item to the right answer. Played once.' },
          { id: 'teil3', type: 'mc', count: 5, options: 3, plays: 1, de: 'Sie hören fünf kurze Gespräche. Wählen Sie die richtige Lösung a, b oder c. Sie hören jeden Text einmal.', en: 'Five short conversations — a, b or c. Each is played once.' },
          { id: 'teil4', type: 'yn', count: 5, plays: 2, de: 'Sie hören ein Interview. Wählen Sie: Ja oder Nein. Sie hören den Text zweimal.', en: 'A radio interview — yes or no? Played twice.' },
        ],
      },
      schreiben: {
        title: 'Schreiben',
        en: 'Writing',
        icon: '✍️',
        minutes: 30,
        parts: [
          { id: 'teil1', type: 'message', words: [20, 30], de: 'Schreiben Sie eine Nachricht (circa 20–30 Wörter). Schreiben Sie zu allen drei Punkten.', en: 'A short informal message — 20 to 30 words, all three points.' },
          { id: 'teil2', type: 'message', words: [30, 40], de: 'Schreiben Sie eine E-Mail (circa 30–40 Wörter). Schreiben Sie zu allen drei Punkten.', en: 'A formal e-mail — 30 to 40 words, all three points.' },
        ],
      },
      sprechen: {
        title: 'Sprechen',
        en: 'Speaking',
        icon: '🗣',
        minutes: 15,
        parts: [
          { id: 'teil1', type: 'askcards', count: 4, weight: 8, de: 'Fragen zur Person: Stellen Sie mit jeder Karte eine Frage und antworten Sie.', en: 'Personal questions — ask one with each card, and answer one yourself.' },
          { id: 'teil2', type: 'monologue', weight: 8, de: 'Erzählen Sie von sich. Die Stichwörter auf der Karte helfen Ihnen.', en: 'Talk about your own life — the four prompts on the card guide you.' },
          { id: 'teil3', type: 'plan', weight: 9, de: 'Planen Sie etwas gemeinsam. Finden Sie einen Termin.', en: 'Plan something together — find a time that works for both of you.' },
        ],
      },
    },
  },
}

/* ── Items ───────────────────────────────────────────────────────────────── */

export function isObjective(type) {
  return ['mc', 'tf', 'yn', 'ab', 'match', 'form'].includes(type)
}

/** Is a single answer right? `form` answers are graded by the caller. */
export function isCorrect(type, item, value) {
  if (value == null || value === '') return false
  if (type === 'tf' || type === 'yn') return value === item.answer
  if (type === 'match') return value === item.answer
  return Number(value) === Number(item.answer)
}

/* ── Scoring ─────────────────────────────────────────────────────────────── */

const MESSAGE_MAX = 10 // 3 points × 3 for the content points + 1 for greeting & sign-off

/**
 * @param spec      the section's format
 * @param result    { [partId]: { raw, max } }  — from gradePart, per part
 * @returns {{ raw, max, points }}  points out of 25
 */
export function scoreSection(spec, result = {}) {
  let raw = 0
  let max = 0
  for (const p of spec.parts) {
    const r = result[p.id]
    if (!r) continue
    raw += r.raw
    max += r.max
  }
  const points = max ? Math.round((raw / max) * SECTION_POINTS * 2) / 2 : 0
  return { raw, max, points }
}

/**
 * Score a message from the learner's self-assessment.
 * ratings: one of 0 / 0.5 / 1 per content point; greeting: boolean.
 */
export function scoreMessage(ratings = [], greeting = false) {
  const content = ratings.reduce((s, r) => s + (Number(r) || 0) * 3, 0)
  return { raw: Math.min(MESSAGE_MAX, content + (greeting ? 1 : 0)), max: MESSAGE_MAX }
}

/** Speaking: tasks rated 0 / 0.5 / 1 share the part's weight equally. */
export function scoreSpeaking(part, ratings = []) {
  const n = Math.max(1, ratings.length)
  const raw = ratings.reduce((s, r) => s + (Number(r) || 0), 0) * (part.weight / n)
  return { raw: Math.round(raw * 10) / 10, max: part.weight }
}

/** How many self-rated tasks a speaking part has. */
export function speakingTasks(spec, content) {
  if (spec.type === 'intro' || spec.type === 'monologue') return 1
  if (spec.type === 'plan') return (content?.turns || []).length
  return (content?.cards || []).length
}

/**
 * Grade one part from the learner's state for it.
 * @returns {{ raw, max, items?: Array<{id, correct, given, expected}> }}
 */
export function gradePart(spec, content, state = {}) {
  switch (spec.type) {
    case 'mc':
    case 'tf':
    case 'yn':
    case 'ab':
    case 'match': {
      const items = (content?.items || []).map((it) => ({
        id: it.id,
        given: state[it.id],
        expected: it.answer,
        correct: isCorrect(spec.type, it, state[it.id]),
      }))
      return { raw: items.filter((i) => i.correct).length, max: items.length, items }
    }
    case 'form': {
      const gaps = (content?.form?.fields || []).filter((f) => f.answer != null)
      const items = gaps.map((f) => ({
        id: f.label,
        given: state[f.label] || '',
        expected: f.answer,
        correct: matchesAny(state[f.label] || '', f.answer, f.accept),
      }))
      return { raw: items.filter((i) => i.correct).length, max: items.length, items }
    }
    case 'message': {
      const gc = hasGreetingAndClose(state.text)
      return scoreMessage(state.ratings || [], gc.open && gc.close)
    }
    default: {
      const n = speakingTasks(spec, content)
      const ratings = Array.from({ length: n }, (_, i) => state.ratings?.[i] ?? 0)
      return scoreSpeaking(spec, ratings)
    }
  }
}

export function totalOf(sections = {}) {
  return Object.values(sections).reduce((s, x) => s + (x?.points || 0), 0)
}

export function verdict(total) {
  if (total >= 90) return { label: 'sehr gut', en: 'very good', tone: 'ok' }
  if (total >= 80) return { label: 'gut', en: 'good', tone: 'ok' }
  if (total >= 70) return { label: 'befriedigend', en: 'satisfactory', tone: 'ok' }
  if (total >= PASS_MARK) return { label: 'ausreichend', en: 'pass', tone: 'ok' }
  return { label: 'nicht bestanden', en: 'not passed yet', tone: 'bad' }
}

/* ── Writing helpers ─────────────────────────────────────────────────────── */

export function wordCount(text) {
  return String(text || '')
    .trim()
    .split(/\s+/)
    .filter((w) => /[A-Za-zÄÖÜäöüß0-9]/.test(w)).length
}

const OPENERS = /^\s*(liebe|lieber|hallo|hi|sehr geehrte|sehr geehrter|guten tag|moin|servus)\b/i
const CLOSERS = /(viele grüße|liebe grüße|herzliche grüße|beste grüße|mit freundlichen grüßen|freundliche grüße|grüße|gruß|bis \S+|tschüss|ciao|lg)\b[\s\S]{0,40}$/i

/** A message needs a greeting and a sign-off — checked automatically. */
export function hasGreetingAndClose(text) {
  const t = String(text || '')
  return { open: OPENERS.test(t), close: CLOSERS.test(t.replace(/[.!,]/g, ' ').trim()) }
}

/** Light hint that a content point is probably covered — the learner confirms. */
export function pointLooksCovered(text, point) {
  const t = String(text || '').toLowerCase()
  return (point.keys || []).some((k) => new RegExp(k, 'i').test(t))
}

/* ── Attempts ────────────────────────────────────────────────────────────── */

/** Best points per section across all attempts at one exam. */
export function bestBySection(attempts, examId) {
  const out = {}
  for (const a of attempts || []) {
    if (a.examId !== examId) continue
    for (const [sid, s] of Object.entries(a.sections || {})) {
      if (!out[sid] || s.points > out[sid].points) out[sid] = s
    }
  }
  return out
}

export function latestFull(attempts, examId) {
  return (attempts || []).find((a) => a.examId === examId && a.complete) || null
}
