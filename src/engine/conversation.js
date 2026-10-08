/**
 * The conversation engine.
 *
 * Runs a scripted-but-branching German dialogue entirely offline: it matches
 * what the learner wrote against the turn's accept branches, corrects the
 * German as a tutor would, and never lets the learner get stuck.
 *
 * An AI adapter can replace `respond()` (see ai.js) — but everything here
 * works with no network, no key and no cost, which is the default.
 */

import { normalize, fold } from '../lib/text.js'
import { reviewReply } from './checker.js'

/* ── Matching ────────────────────────────────────────────────────────────── */

/** A match entry is a lowercase substring, or "/regex/flags". */
function matchOne(text, pattern) {
  const n = normalize(text)
  if (typeof pattern !== 'string') return false
  if (pattern.startsWith('/') && pattern.lastIndexOf('/') > 0) {
    const end = pattern.lastIndexOf('/')
    try {
      const re = new RegExp(pattern.slice(1, end), pattern.slice(end + 1) || 'i')
      return re.test(text) || re.test(n)
    } catch {
      return false
    }
  }
  return n.includes(normalize(pattern))
}

function branchScore(text, branch) {
  const hits = (branch.match || []).filter((m) => matchOne(text, m)).length
  if (!hits) return 0
  // Longer, more specific patterns win ties.
  const spec = (branch.match || [])
    .filter((m) => matchOne(text, m))
    .reduce((n, m) => Math.max(n, m.length), 0)
  return hits * 100 + spec
}

function pickBranch(text, turn) {
  let best = null
  let bestScore = 0
  for (const b of turn.accept || []) {
    const s = branchScore(text, b)
    if (s > bestScore) {
      bestScore = s
      best = b
    }
  }
  return best
}

/* ── Session ─────────────────────────────────────────────────────────────── */

export function createSession(conversation, { name = '' } = {}) {
  return {
    conversation,
    name: name || 'du',
    turn: 0,
    messages: [],
    misses: 0, // consecutive fallbacks on the current turn
    stats: { turns: 0, clean: 0, corrected: 0, hintsUsed: 0, offTarget: 0 },
    corrections: [],
    done: false,
  }
}

function fill(text, session) {
  return String(text || '').replace(/\{name\}/g, session.name || 'du')
}

function botMessage(session, line, extra = {}) {
  return {
    role: 'bot',
    de: fill(line?.de, session),
    en: fill(line?.en, session),
    ...extra,
  }
}

/** The opening bot line. Call once when the chat mounts. */
export function openSession(session) {
  const turn = session.conversation.turns[0]
  const msgs = []
  if (session.conversation.intro) {
    msgs.push({ role: 'system', de: session.conversation.intro.de, en: session.conversation.intro.en })
  }
  msgs.push(botMessage(session, turn.bot))
  session.messages = msgs
  return msgs
}

/**
 * Feed the learner's reply into the session.
 * Mutates the session and returns the new messages to append.
 *
 * @returns {{messages: Array, done: boolean, issues: Array, advanced: boolean}}
 */
export function respond(session, userText, opts = {}) {
  const out = []
  const conv = session.conversation
  const turn = conv.turns[session.turn]
  if (!turn || session.done) return { messages: [], done: true, issues: [], advanced: false }

  const text = String(userText || '').trim()
  out.push({ role: 'me', de: text })

  const { issues, onTarget, empty } = reviewReply(text, turn, { lexicon: opts.lexicon })
  session.stats.turns++

  // Tutor correction — shown as its own card, never mixed into the dialogue.
  if (issues.length) {
    session.stats.corrected++
    for (const i of issues) session.corrections.push(i)
    out.push({
      role: 'correction',
      issues: issues.map((i) => ({
        wrong: i.wrong,
        right: i.right,
        why: i.why,
        tag: i.tag,
        skill: i.skill,
      })),
    })
  } else if (!empty) {
    session.stats.clean++
  }

  const branch = empty ? null : pickBranch(text, turn)

  if (!branch) {
    session.misses++
    session.stats.offTarget++
    if (session.misses >= 2) {
      // Two misses: model the answer and move on. Never let the learner stall.
      out.push({
        role: 'bot',
        de: fill(turn.fallback?.de, session),
        en: fill(turn.fallback?.en, session),
        modelAnswer: fill(turn.sample, session),
      })
      session.misses = 0
      return advance(session, out, { forced: true })
    }
    out.push(botMessage(session, turn.fallback, { hint: true }))
    return { messages: out, done: false, issues, advanced: false }
  }

  session.misses = 0
  if (!onTarget) session.stats.offTarget++

  if (branch.reply) out.push(botMessage(session, branch.reply))
  if (branch.note) out.push({ role: 'note', text: fill(branch.note, session) })

  // A branch can jump elsewhere in the script.
  if (typeof branch.goto === 'number') {
    session.turn = branch.goto
    const nt = conv.turns[session.turn]
    if (nt && !branch.reply) out.push(botMessage(session, nt.bot))
    return { messages: out, done: false, issues, advanced: true }
  }

  return advance(session, out, {})
}

function advance(session, out, { forced }) {
  const conv = session.conversation
  session.turn++
  if (session.turn >= conv.turns.length) {
    session.done = true
    if (conv.closing) out.push(botMessage(session, conv.closing, { closing: true }))
    return { messages: out, done: true, issues: [], advanced: true, score: scoreSession(session) }
  }
  const next = conv.turns[session.turn]
  // Only speak the next prompt if the branch did not already carry the question.
  out.push(botMessage(session, next.bot))
  return { messages: out, done: false, issues: [], advanced: true, forced }
}

/** 0..1 — how well the learner handled the scenario. */
export function scoreSession(session) {
  const s = session.stats
  if (!s.turns) return 0
  const cleanRate = s.clean / s.turns
  const targetRate = 1 - Math.min(1, s.offTarget / s.turns)
  const hintPenalty = Math.min(0.2, s.hintsUsed * 0.04)
  return Math.max(0, Math.min(1, cleanRate * 0.5 + targetRate * 0.5 - hintPenalty))
}

/** What the tutor should say at the end. */
export function debrief(session) {
  const score = scoreSession(session)
  const byTag = new Map()
  for (const c of session.corrections) {
    byTag.set(c.tag, (byTag.get(c.tag) || 0) + 1)
  }
  const topics = Array.from(byTag.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tag, n]) => ({ tag, n }))

  let verdict
  if (score >= 0.85) verdict = { de: 'Sehr gut gemacht!', en: 'Really well done — that was natural German.' }
  else if (score >= 0.6) verdict = { de: 'Gut gemacht!', en: 'Good — you got your message across. A few things to tidy up.' }
  else verdict = { de: 'Weiter üben!', en: 'You finished the scenario. Let us look at what tripped you up.' }

  return { score, verdict, topics, corrections: session.corrections }
}

/** Hints for the current turn, revealed on demand. */
export function currentTurn(session) {
  return session.conversation.turns[session.turn] || null
}

export function useHint(session) {
  session.stats.hintsUsed++
  const turn = currentTurn(session)
  return turn?.hints || []
}

export function sampleAnswer(session) {
  const turn = currentTurn(session)
  return turn ? fill(turn.sample, session) : ''
}

/** Suggested reply chips: the hints, shortened. */
export function suggestions(session) {
  const turn = currentTurn(session)
  if (!turn) return []
  return (turn.hints || []).slice(0, 3).map((h) => fill(h, session))
}

export function progressOf(session) {
  const total = session.conversation.turns.length
  return { turn: Math.min(session.turn + 1, total), total, pct: session.turn / total }
}

export { fold }
