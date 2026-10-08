#!/usr/bin/env node
/**
 * The numbers trainer generates its own German, so the German itself is what
 * needs testing: number words, ordinals, clock readings, prices and dates —
 * plus a brute-force pass proving every generated item accepts its own answer.
 *
 *   node scripts/check-numbers.mjs
 */

import {
  numberToWords, ordinal, timeFormal, timeInformal, priceWords, dateWords,
  parseTime, parsePrice, parseDate, makeRound, gradeItem, MODES, numberKey,
} from '../src/engine/numbers.js'

let failed = 0
let passed = 0
function eq(label, got, want) {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (ok) passed++
  else {
    failed++
    console.log(`  ✗ ${label}\n      got  ${JSON.stringify(got)}\n      want ${JSON.stringify(want)}`)
  }
}

/* ── Number words ── */
const N = {
  0: 'null', 1: 'eins', 7: 'sieben', 16: 'sechzehn', 17: 'siebzehn', 21: 'einundzwanzig',
  30: 'dreißig', 31: 'einunddreißig', 67: 'siebenundsechzig', 99: 'neunundneunzig',
  100: 'einhundert', 101: 'einhunderteins', 111: 'einhundertelf', 121: 'einhunderteinundzwanzig',
  200: 'zweihundert', 999: 'neunhundertneunundneunzig', 1000: 'eintausend', 1001: 'eintausendeins',
  1100: 'eintausendeinhundert', 2024: 'zweitausendvierundzwanzig', 21000: 'einundzwanzigtausend',
  101000: 'einhunderteintausend', 1000000: 'eine Million', 2500000: 'zwei Millionen fünfhunderttausend',
}
for (const [n, w] of Object.entries(N)) eq(`numberToWords(${n})`, numberToWords(Number(n)), w)
eq('year 1999', numberToWords(1999, { year: true }), 'neunzehnhundertneunundneunzig')
eq('year 1900', numberToWords(1900, { year: true }), 'neunzehnhundert')
eq('year 2026', numberToWords(2026, { year: true }), 'zweitausendsechsundzwanzig')
eq('key drops leading ein', numberKey('hundertzwei'), numberKey('einhundertzwei'))
eq('key keeps 101000 ≠ 100000', numberKey('einhunderteintausend') === numberKey('einhunderttausend'), false)

/* ── Ordinals ── */
const O = { 1: 'erste', 2: 'zweite', 3: 'dritte', 7: 'siebte', 8: 'achte', 16: 'sechzehnte', 19: 'neunzehnte', 20: 'zwanzigste', 21: 'einundzwanzigste', 31: 'einunddreißigste' }
for (const [n, w] of Object.entries(O)) eq(`ordinal(${n})`, ordinal(Number(n)), w)
eq('ordinal dative', ordinal(3, 'en'), 'dritten')

/* ── Clock ── */
const T = [
  [7, 15, 'Viertel nach sieben'], [7, 30, 'halb acht'], [7, 45, 'Viertel vor acht'],
  [12, 30, 'halb eins'], [0, 30, 'halb eins'], [12, 45, 'Viertel vor eins'], [13, 0, 'ein Uhr'],
  [7, 25, 'fünf vor halb acht'], [7, 35, 'fünf nach halb acht'], [7, 40, 'zwanzig vor acht'],
  [7, 50, 'zehn vor acht'], [11, 55, 'fünf vor zwölf'], [12, 55, 'fünf vor eins'], [19, 10, 'zehn nach sieben'],
]
for (const [h, m, w] of T) eq(`timeInformal(${h}:${m})`, timeInformal(h, m), w)
eq('formal 19:45', timeFormal(19, 45), 'neunzehn Uhr fünfundvierzig')
eq('formal 1:05', timeFormal(1, 5), 'ein Uhr fünf')
eq('formal 0:10', timeFormal(0, 10), 'null Uhr zehn')
eq('formal 21:00', timeFormal(21, 0), 'einundzwanzig Uhr')

/* ── Prices & dates ── */
eq('price 3,99', priceWords(399), 'drei Euro neunundneunzig')
eq('price 1,00', priceWords(100), 'ein Euro')
eq('price 1,50', priceWords(150), 'ein Euro fünfzig')
eq('price 0,50', priceWords(50), 'fünfzig Cent')
eq('price 21,05', priceWords(2105), 'einundzwanzig Euro fünf')
eq('date nom', dateWords(3, 5), 'der dritte Mai')
eq('date dat', dateWords(1, 9, 'dat'), 'am ersten September')
eq('date year', dateWords(24, 12, 'dat', 1999), 'am vierundzwanzigsten Dezember neunzehnhundertneunundneunzig')

/* ── Parsers ── */
for (const s of ['7:15', '07.15', '715', '7h15', '7 Uhr 15', '7 15']) eq(`parseTime(${s})`, parseTime(s), { h: 7, m: 15 })
eq('parseTime 19:45', parseTime('19:45'), { h: 19, m: 45 })
eq('parseTime bare hour', parseTime('8'), { h: 8, m: 0 })
eq('parseTime junk', parseTime('acht'), null)
for (const [s, c] of [['3,99', 399], ['3.99 €', 399], ['€3,99', 399], ['3,9', 390], ['50 Cent', 50], ['3', 300], ['3 Euro 99', 399], ['249,99', 24999]])
  eq(`parsePrice(${s})`, parsePrice(s), c)
for (const s of ['3.5.', '03.05', '3. Mai', '3 mai', '3.5'])
  eq(`parseDate(${s})`, parseDate(s), { d: 3, m: 5, y: null })
eq('parseDate year', parseDate('3.5.2026'), { d: 3, m: 5, y: 2026 })
eq('parseDate März', parseDate('12. März'), { d: 12, m: 3, y: null })
eq('parseDate Marz', parseDate('12. Marz'), { d: 12, m: 3, y: null })
eq('parseDate Juni ≠ Juli', parseDate('1. Jun')?.m, 6)

/* ── Grading edge cases ── */
const fakeTime = { mode: 'uhrzeit', value: { h: 19, m: 30 }, informal: true, expected: '19:30', say: 'Es ist halb acht.', answerWords: 'halb acht', readings: [] }
eq('halb acht → 7:30 accepted', gradeItem(fakeTime, '7:30').correct, true)
eq('halb acht → 8:30 rejected', gradeItem(fakeTime, '8:30').correct, false)
const fakeNum = { mode: 'zahlen', value: 21, expected: '21', say: 'einundzwanzig', readings: ['einundzwanzig'] }
eq('21 vs 12 explains the swap', /ones first/.test(gradeItem(fakeNum, '12').note || ''), true)
eq('write with spaces still right', gradeItem(fakeNum, 'ein und zwanzig', 'write').correct, true)

/* ── Every generated item accepts its own answer ── */
let generated = 0
for (const mode of MODES) {
  for (let band = 1; band <= 4; band++) {
    for (let r = 0; r < 25; r++) {
      for (const it of makeRound(mode.id, band, 10)) {
        generated++
        const listen = gradeItem(it, it.expected, 'listen')
        if (!listen.correct) eq(`${mode.id}/${band} listen ${it.key}`, listen.correct, true)
        if (mode.write) {
          for (const reading of it.readings) {
            const w = gradeItem(it, reading, 'write')
            if (!w.correct) eq(`${mode.id}/${band} write "${reading}"`, w.correct, true)
          }
        }
        if (!it.say || /undefined|NaN/.test(it.say + it.show)) eq(`${mode.id}/${band} text ${it.key}`, it.say, '(clean text)')
      }
    }
  }
}

console.log()
if (failed) {
  console.log(`  ✗ ${failed} numbers check(s) failed, ${passed} passed`)
  process.exit(1)
}
console.log(`  ✓ all ${passed} numbers checks passed · ${generated} generated items answerable`)
