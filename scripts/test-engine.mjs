#!/usr/bin/env node
/**
 * Smoke tests for the teaching engines — the parts that must not silently rot.
 *
 *   npm test
 *
 * These are assertions about behaviour a learner would notice: that the error
 * checker catches the classic mistakes, that it stays quiet on correct German,
 * that grading is forgiving in the right ways, and that a conversation can be
 * driven to its end without dead-ending.
 */

import { checkGerman, explainMistake } from '../src/engine/checker.js'
import { grade } from '../src/engine/grader.js'
import { schedule, newCard, GRADE, strength } from '../src/engine/srs.js'
import { createSession, openSession, respond } from '../src/engine/conversation.js'
import { sameAnswer, matchesAny, joinTokens } from '../src/lib/text.js'

let pass = 0
const fails = []

function ok(name, cond, detail = '') {
  if (cond) pass++
  else fails.push(`${name}${detail ? ` — ${detail}` : ''}`)
}

function hasTag(issues, tag) {
  return issues.some((i) => i.tag === tag)
}

/* ── Checker: catches the classics ───────────────────────────────────────── */

const CATCH = [
  ['Ich bin aus Indien komme.', 'zwei-verben'],
  ['Ich morgen fahre nach Berlin.', 'wortstellung'],
  ['Ich habe 25 Jahre alt.', 'alter'],
  ['Ich komme von Indien.', 'praeposition'],
  ['Du bin müde.', 'konjugation'],
  ['Ich habe nicht ein Auto.', 'negation'],
  ['Ich fahre mit den Bus.', 'dativ'],
  ['Ich gehe mit den Mann ins Kino.', 'dativ'],
  ['Ich gehe zu Hause.', 'nach-zu'],
  ['Ich bleibe hier, weil ich bin müde.', 'nebensatz'],
]

for (const [sentence, tag] of CATCH) {
  const issues = checkGerman(sentence)
  ok(`catches ${tag}`, hasTag(issues, tag), `"${sentence}" → [${issues.map((i) => i.tag).join(', ') || 'nothing'}]`)
}

/* ── Checker: stays quiet on correct German ──────────────────────────────── */

const QUIET = [
  'Ich komme aus Indien.',
  'Ich heiße Anna.',
  'Morgen fahre ich nach Berlin.',
  'Wie geht es dir?',
  'Ich bin 25 Jahre alt.',
  'Er hat einen Hund.',
  'Wir wohnen in Berlin.',
  'Ich kann gut Deutsch sprechen.',
  'Sie arbeitet als Ärztin.',
  'Ich habe kein Auto.',
  'Um acht Uhr stehe ich auf.',
  'Was machst du am Wochenende?',
  'Ich fahre mit dem Bus zur Arbeit.',
  'Er ist mein Bruder.',
  'Das Buch ist interessant.',
  'Ich trinke gern Kaffee.',
  'Kommst du aus Deutschland?',
  'Ich gehe nach Hause.',
  'Sie hat zwei Kinder.',
  'Wir essen um zwölf Uhr.',
  // "den" is also the Dative plural — never flag it.
  'Ich spiele mit den Kindern.',
  'Wir fahren mit den Autos.',
  'Die Klasse mit den meisten Punkten gewinnt.',
]

for (const s of QUIET) {
  const issues = checkGerman(s)
  ok(`quiet on "${s}"`, issues.length === 0, `flagged [${issues.map((i) => `${i.tag}: ${i.wrong}`).join(' | ')}]`)
}

/* ── Grading: forgiving where it should be ───────────────────────────────── */

const translateEx = {
  id: 't1',
  kind: 'translate',
  direction: 'en-de',
  prompt: 'I come from India.',
  answer: 'Ich komme aus Indien.',
  accept: ['Aus Indien komme ich.'],
  skill: 'writing',
  difficulty: 1,
  explain: 'x',
}

ok('exact translation', grade(translateEx, 'Ich komme aus Indien.').correct)
ok('ignores final punctuation', grade(translateEx, 'Ich komme aus Indien').correct)
ok('ignores case', grade(translateEx, 'ich komme aus indien.').correct)
ok('accepts listed variant', grade(translateEx, 'Aus Indien komme ich.').correct)
ok('rejects wrong answer', !grade(translateEx, 'Ich gehe nach Indien.').correct)
ok('umlaut transliteration', sameAnswer('Grüße', 'Gruesse'))

const orderEx = {
  id: 'o1',
  kind: 'order',
  tokens: ['ich', 'fahre', 'morgen', 'nach Berlin'],
  answer: 'Ich fahre morgen nach Berlin.',
  accept: ['Morgen fahre ich nach Berlin.'],
  skill: 'wordorder',
  difficulty: 2,
  explain: 'x',
}

ok('order: correct', grade(orderEx, ['ich', 'fahre', 'morgen', 'nach Berlin']).correct)
ok('order: accepted alternative', grade(orderEx, ['morgen', 'fahre', 'ich', 'nach Berlin']).correct)
const wrongOrder = grade(orderEx, ['ich', 'morgen', 'fahre', 'nach Berlin'])
ok('order: wrong order detected', !wrongOrder.correct)
ok('order: diagnosed as an ordering problem', wrongOrder.kind === 'order', `got kind=${wrongOrder.kind}`)
ok('order: gives a reason', !!wrongOrder.diagnosis)

const articleEx = {
  id: 'a1',
  kind: 'article',
  noun: 'Tisch',
  answer: 'der',
  plural: 'die Tische',
  meaning: 'table',
  skill: 'articles',
  difficulty: 1,
  explain: 'x',
}
ok('article: right', grade(articleEx, 'der').correct)
ok('article: wrong gives a hint', !grade(articleEx, 'die').correct && !!grade(articleEx, 'die').diagnosis)

const mcqEx = {
  id: 'm1',
  kind: 'mcq',
  prompt: 'p',
  options: ['a', 'b', 'c'],
  answer: 1,
  skill: 'grammar',
  difficulty: 1,
  explain: 'x',
}
ok('mcq: right index', grade(mcqEx, 1).correct)
ok('mcq: wrong index', !grade(mcqEx, 0).correct)

ok('joinTokens capitalises', joinTokens(['ich', 'fahre']) === 'Ich fahre')

/* ── SRS: schedule behaves ───────────────────────────────────────────────── */

let card = newCard(0)
card = schedule(card, GRADE.GOOD, 0)
ok('srs: first good → 1 day', card.int === 1, `int=${card.int}`)
card = schedule(card, GRADE.GOOD, 1)
ok('srs: second good → 3 days', card.int === 3, `int=${card.int}`)
card = schedule(card, GRADE.GOOD, 4)
ok('srs: third good grows', card.int > 3, `int=${card.int}`)
const lapsed = schedule(card, GRADE.AGAIN, 10)
ok('srs: again resets interval', lapsed.int === 0 && lapsed.due === 10)
ok('srs: again records a lapse', lapsed.lapses === 1)
ok('srs: ease never below 1.3', schedule({ ...newCard(0), ease: 1.3 }, GRADE.AGAIN, 0).ease >= 1.3)
ok('srs: strength rises with interval', strength({ reps: 5, int: 40, lapses: 0 }) > strength({ reps: 2, int: 3, lapses: 0 }))

/* ── Conversation: can be driven to the end ──────────────────────────────── */

const convo = {
  id: 'c.test',
  level: 'A1',
  title: 'test',
  setting: 's',
  goal: 'g',
  roleBot: 'Lena',
  turns: [
    {
      bot: { de: 'Wie heißt du?', en: 'What is your name?' },
      accept: [{ match: ['ich heiße', 'mein name ist'], reply: { de: 'Freut mich!', en: 'Nice to meet you!' } }],
      fallback: { de: 'Wie heißt du?', en: 'What is your name?' },
      hints: ['Ich heiße …'],
      sample: 'Ich heiße Anna.',
      requires: { any: ['ich heiße', 'mein name ist'] },
    },
    {
      bot: { de: 'Woher kommst du?', en: 'Where are you from?' },
      accept: [{ match: ['ich komme aus'], reply: { de: 'Interessant!', en: 'Interesting!' } }],
      fallback: { de: 'Woher kommst du?', en: 'Where are you from?' },
      hints: ['Ich komme aus …'],
      sample: 'Ich komme aus Indien.',
      requires: { any: ['ich komme aus'] },
    },
  ],
  closing: { de: 'Tschüss!', en: 'Bye!' },
}

let s = createSession(convo, { name: 'Aashish' })
openSession(s)
ok('convo: opens with the first bot line', s.messages.some((m) => m.de === 'Wie heißt du?'))

let r = respond(s, 'Ich heiße Aashish.')
ok('convo: matched branch replies', r.messages.some((m) => m.de === 'Freut mich!'))
ok('convo: advances', r.advanced === true)
ok('convo: clean German → no correction', !r.messages.some((m) => m.role === 'correction'))

// Matches the branch, but the German has a mistake: it must both advance and correct.
r = respond(s, 'Ich komme aus Indien und ich habe 25 Jahre alt.')
ok('convo: corrects bad German', r.messages.some((m) => m.role === 'correction'))
ok('convo: reaches the end', r.done === true, `done=${r.done}`)
ok('convo: says goodbye', r.messages.some((m) => m.de === 'Tschüss!'))

// An off-topic reply must NOT advance the script — it re-asks instead.
let sOff = createSession(convo, { name: 'X' })
openSession(sOff)
const off = respond(sOff, 'Ich bin aus Indien komme.')
ok('convo: off-target reply does not advance', off.advanced === false)
ok('convo: off-target reply still corrects the German', off.messages.some((m) => m.role === 'correction'))

// Two misses must not dead-end.
let s2 = createSession(convo, { name: 'X' })
openSession(s2)
const m1 = respond(s2, 'blah blah')
ok('convo: first miss re-asks', !m1.advanced && m1.messages.some((m) => m.role === 'bot'))
const m2 = respond(s2, 'blah blah again')
ok('convo: second miss moves on', m2.advanced === true)
ok('convo: second miss models the answer', m2.messages.some((m) => m.modelAnswer))

// {name} interpolation
let s3 = createSession(
  {
    ...convo,
    turns: [
      {
        ...convo.turns[0],
        accept: [{ match: ['ich heiße'], reply: { de: 'Hallo {name}!', en: 'Hello {name}!' } }],
      },
    ],
  },
  { name: 'Aashish' },
)
openSession(s3)
const r3 = respond(s3, 'Ich heiße Aashish.')
ok('convo: fills in {name}', r3.messages.some((m) => m.de === 'Hallo Aashish!'))

/* ── explainMistake ──────────────────────────────────────────────────────── */

ok(
  'explainMistake: word order',
  !!explainMistake('Ich morgen fahre nach Berlin.', 'Ich fahre morgen nach Berlin.'),
)
ok(
  'explainMistake: silent when identical',
  explainMistake('Ich komme aus Indien.', 'Ich komme aus Indien.') === null,
)

/* ── Report ──────────────────────────────────────────────────────────────── */

const total = pass + fails.length
if (fails.length) {
  console.log(`\n  ✖ ${fails.length} of ${total} checks failed\n`)
  for (const f of fails) console.log(`    · ${f}`)
  console.log('')
  process.exit(1)
} else {
  console.log(`\n  ✓ all ${total} engine checks passed\n`)
}
