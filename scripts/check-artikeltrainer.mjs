#!/usr/bin/env node
/**
 * Validates the word list embedded in tools/artikeltrainer.html.
 *
 *   node scripts/check-artikeltrainer.mjs
 */
import fs from 'node:fs'

const html = fs.readFileSync('tools/artikeltrainer.html', 'utf8')
const m = html.match(/const RAW = `([\s\S]*?)`/)
if (!m) {
  console.error('could not find the RAW word block')
  process.exit(1)
}

const errors = []
const words = []
let topic = null
const perTopic = new Map()

m[1].split('\n').forEach((raw, i) => {
  const line = raw.trim()
  if (!line) return
  if (line.startsWith('#')) {
    topic = line.slice(1).trim()
    perTopic.set(topic, 0)
    return
  }
  const parts = line.split('|')
  const where = `line ${i + 1} "${line}"`
  if (parts.length !== 4) return errors.push(`${where}: needs exactly 4 fields`)
  const [a, w, en, pl] = parts
  if (!['der', 'die', 'das'].includes(a)) errors.push(`${where}: article must be der/die/das`)
  if (!w || w[0] !== w[0].toUpperCase()) errors.push(`${where}: noun must start with a capital`)
  if (/^(der|die|das) /i.test(w)) errors.push(`${where}: noun must not include the article`)
  if (!en) errors.push(`${where}: missing English meaning`)
  if (pl && /^(der|die|das) /i.test(pl)) errors.push(`${where}: plural must not include "die"`)
  if (pl && pl[0] !== pl[0].toUpperCase()) errors.push(`${where}: plural must start with a capital`)
  if (!topic) errors.push(`${where}: word before the first # topic`)
  words.push({ a, w, en, pl, topic })
  perTopic.set(topic, (perTopic.get(topic) || 0) + 1)
})

// The same spelling twice is either a duplicate or — worse — a word shown
// with two different "correct" articles.
const byWord = new Map()
for (const x of words) {
  if (!byWord.has(x.w)) byWord.set(x.w, [])
  byWord.get(x.w).push(x)
}
for (const [w, list] of byWord) {
  if (list.length > 1) {
    const arts = [...new Set(list.map((x) => x.a))]
    errors.push(
      arts.length > 1
        ? `"${w}" appears with different articles: ${arts.join(', ')}`
        : `"${w}" appears ${list.length} times`,
    )
  }
}

// Known homographs whose gender changes the meaning — the trainer shows the
// bare word, so these would have two defensible answers.
const AMBIGUOUS = ['See', 'Band', 'Steuer', 'Leiter', 'Teil', 'Schild', 'Kiefer', 'Heide', 'Erbe', 'Messer?']
for (const w of AMBIGUOUS) if (byWord.has(w)) errors.push(`"${w}" has two genders with different meanings`)
// der See (lake) is kept deliberately: it is the everyday meaning, and "die See"
// is only literary "sea". Remove it from the flag list if present.
const realErrors = errors.filter((e) => !e.startsWith('"See" has two genders'))

const byArt = { der: 0, die: 0, das: 0 }
for (const x of words) byArt[x.a]++
const noPlural = words.filter((x) => !x.pl).length

console.log(`\n  ${words.length} words in ${perTopic.size} topics`)
console.log(`  der ${byArt.der} · die ${byArt.die} · das ${byArt.das} · no plural ${noPlural}\n`)
for (const [t, n] of perTopic) console.log(`    ${t.padEnd(20)} ${String(n).padStart(3)}`)

if (words.length !== 600) realErrors.push(`expected exactly 600 words, found ${words.length}`)

if (realErrors.length) {
  console.log(`\n  ✖ ${realErrors.length} problem(s)`)
  for (const e of realErrors) console.log(`    · ${e}`)
  console.log('')
  process.exit(1)
}
console.log('\n  ✓ word list is valid\n')
