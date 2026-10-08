/**
 * One function that can grade every exercise kind, and say something useful
 * about *why* an answer was wrong.
 *
 * grade(exercise, response) -> {
 *   correct, given, expected, feedback, kind: 'exact'|'near'|'order'|'wrong',
 *   diagnosis: string|null
 * }
 */

import {
  matchesAny,
  sameAnswer,
  isNearMiss,
  sameWordsDifferentOrder,
  wordDiff,
  joinTokens,
} from '../lib/text.js'
import { explainMistake } from './checker.js'

function expectedOf(ex) {
  switch (ex.kind) {
    case 'mcq':
    case 'dialogue':
    case 'listen':
      return ex.options?.[ex.answer] ?? ''
    case 'article':
      return `${ex.answer} ${ex.noun}`
    default:
      return ex.answer ?? ''
  }
}

/**
 * @param {object} ex   the exercise
 * @param {any} response  index for choice exercises, string for typed ones,
 *                        array of tokens for 'order', array of pairs for 'match'
 */
export function grade(ex, response) {
  const expected = expectedOf(ex)

  switch (ex.kind) {
    case 'mcq':
    case 'dialogue':
    case 'listen': {
      const correct = Number(response) === Number(ex.answer)
      return result(correct, ex.options?.[response] ?? '', expected, correct ? 'exact' : 'wrong')
    }

    case 'article': {
      const given = String(response || '')
      const correct = given === ex.answer
      let diagnosis = null
      if (!correct) diagnosis = articleHint(ex)
      return result(correct, `${given} ${ex.noun}`, expected, correct ? 'exact' : 'wrong', diagnosis)
    }

    case 'blank': {
      const given = String(response ?? '').trim()
      if (ex.options?.length) {
        const correct = sameAnswer(given, ex.answer)
        return result(correct, given, expected, correct ? 'exact' : 'wrong')
      }
      if (matchesAny(given, ex.answer, ex.accept)) return result(true, given, expected, 'exact')
      if (isNearMiss(given, ex.answer))
        return result(false, given, expected, 'near', 'Almost — check the spelling.')
      return result(false, given, expected, 'wrong', explainMistake(given, ex.answer))
    }

    case 'conjugate': {
      const given = String(response ?? '').trim()
      const correct = matchesAny(given, ex.answer, ex.accept)
      return result(
        correct,
        given,
        expected,
        correct ? 'exact' : isNearMiss(given, ex.answer) ? 'near' : 'wrong',
        correct ? null : `The ${ex.person} form of ${ex.verb} is “${ex.answer}”.`,
      )
    }

    case 'order': {
      const tokens = Array.isArray(response) ? response : []
      const built = joinTokens(tokens)
      if (matchesAny(built, ex.answer, ex.accept)) return result(true, built, ex.answer, 'exact')
      if (sameWordsDifferentOrder(built, ex.answer))
        return result(
          false,
          built,
          ex.answer,
          'order',
          explainMistake(built, ex.answer) || 'All the right words — wrong order.',
        )
      const { missing, extra } = wordDiff(built, ex.answer)
      const bits = []
      if (missing.length) bits.push(`missing: ${missing.join(', ')}`)
      if (extra.length) bits.push(`not needed: ${extra.join(', ')}`)
      return result(false, built, ex.answer, 'wrong', bits.join(' · ') || null)
    }

    case 'translate':
    case 'speak': {
      const given = String(response ?? '').trim()
      if (matchesAny(given, ex.answer, ex.accept)) return result(true, given, ex.answer, 'exact')
      if (isNearMiss(given, ex.answer))
        return result(false, given, ex.answer, 'near', 'So close — check the spelling.')
      if (sameWordsDifferentOrder(given, ex.answer))
        return result(
          false,
          given,
          ex.answer,
          'order',
          explainMistake(given, ex.answer) || 'Right words, wrong order.',
        )
      return result(false, given, ex.answer, 'wrong', explainMistake(given, ex.answer))
    }

    case 'correct': {
      const given = String(response ?? '').trim()
      const correct = matchesAny(given, ex.answer, ex.accept)
      return result(
        correct,
        given,
        ex.answer,
        correct ? 'exact' : isNearMiss(given, ex.answer) ? 'near' : 'wrong',
        correct ? null : explainMistake(given, ex.answer),
      )
    }

    case 'match': {
      // response: array of chosen right-hand values, aligned to ex.pairs order
      const picks = Array.isArray(response) ? response : []
      const wrongAt = ex.pairs.findIndex((p, i) => !sameAnswer(picks[i] ?? '', p[1]))
      const correct = wrongAt === -1
      return result(
        correct,
        picks.join(' · '),
        ex.pairs.map((p) => p[1]).join(' · '),
        correct ? 'exact' : 'wrong',
      )
    }

    default:
      return result(false, String(response ?? ''), expected, 'wrong')
  }
}

function result(correct, given, expected, kind, diagnosis = null) {
  return { correct, given, expected, kind, diagnosis }
}

/* ── Gender heuristics: turn a wrong article into something memorable ────── */

const GENDER_RULES = [
  [/(ung|heit|keit|schaft|ion|tät|ik|ur|ei|enz|anz)$/i, 'die', 'Nouns ending in -{suf} are feminine.'],
  [/(chen|lein|ment|um|ma|tum)$/i, 'das', 'Nouns ending in -{suf} are neuter.'],
  [/(er|ling|ismus|ant|ent|ist|or|och|eur)$/i, 'der', 'Nouns ending in -{suf} are usually masculine.'],
  [/^ge/i, 'das', 'Many nouns starting with Ge- are neuter.'],
  [/(e)$/i, 'die', 'Most nouns ending in -e are feminine (but not all).'],
]

export function articleHint(ex) {
  const noun = ex.noun || ''
  for (const [re, gender, tpl] of GENDER_RULES) {
    const m = noun.match(re)
    if (m && gender === ex.answer) {
      return tpl.replace('{suf}', m[1] ?? m[0])
    }
  }
  const label = { der: 'masculine', die: 'feminine', das: 'neuter', 'die (pl)': 'plural' }[ex.answer]
  return `${ex.noun} is ${label} — ${ex.answer} ${ex.noun}. Learn the noun together with its article.`
}

/** A short encouraging headline for the feedback panel. */
const PRAISE = ['Genau!', 'Richtig!', 'Sehr gut!', 'Perfekt!', 'Super!', 'Stimmt!']
const CONSOLE_ = ['Fast!', 'Nicht ganz.', 'Kleiner Fehler.', 'Noch mal.']

export function headline(res, i = 0) {
  if (res.correct) return PRAISE[i % PRAISE.length]
  if (res.kind === 'near' || res.kind === 'order') return CONSOLE_[i % CONSOLE_.length]
  return 'Nicht ganz.'
}

/** XP awarded for one answer — small, so lessons matter more than grinding. */
export function xpFor(res, difficulty = 1) {
  if (!res.correct) return 0
  return 2 + (difficulty - 1)
}

/** Map a graded result to an SRS grade. */
export function srsGradeFor(res, usedHint = false) {
  if (!res.correct) return 0
  if (usedHint) return 1
  if (res.kind === 'exact') return 2
  return 1
}
