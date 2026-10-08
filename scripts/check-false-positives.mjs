#!/usr/bin/env node
/**
 * The error checker's worst possible failure is telling a learner that correct
 * German is wrong. Every German sentence in the content has been written and
 * proofread as correct, so ANY sentence the checker flags here is a false
 * positive worth looking at.
 *
 *   node scripts/check-false-positives.mjs
 *   node scripts/check-false-positives.mjs --all   (list every hit)
 *
 * Exits non-zero if the false-positive rate exceeds the threshold below.
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { checkGerman } from '../src/engine/checker.js'

const ROOT = path.resolve(process.cwd(), 'src', 'content')
const SHOW_ALL = process.argv.includes('--all')
const MAX_RATE = 0.01 // 1% of sentences

async function loadDir(dir) {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) return []
  const out = []
  for (const f of fs.readdirSync(abs).filter((x) => x.endsWith('.js')).sort()) {
    try {
      const mod = await import(pathToFileURL(path.join(abs, f)).href)
      const val = mod.default ?? mod
      for (const it of Array.isArray(val) ? val : [val]) {
        if (it && typeof it === 'object') out.push({ ...it, __file: `${dir}/${f}` })
      }
    } catch {
      /* validate-content.mjs reports import errors */
    }
  }
  return out
}

const [vocab, grammar, lessons, conversations, readings, listenings] = await Promise.all([
  loadDir('vocab'),
  loadDir('grammar'),
  loadDir('lessons'),
  loadDir('conversations'),
  loadDir('readings'),
  loadDir('listenings'),
])

/** Build the noun lexicon the checker uses at runtime. */
const lexicon = new Map()
for (const v of vocab) {
  if (!v.de) continue
  lexicon.set(v.de, v)
  lexicon.set(v.de.toLowerCase(), v)
}

/* ── Harvest every German sentence we can find ───────────────────────────── */

const sentences = [] // { text, where }
const add = (text, where) => {
  if (typeof text !== 'string') return
  for (const s of text.split(/(?<=[.!?])\s+/)) {
    const t = s.trim()
    // Only full sentences — fragments and single words are not the checker's job.
    if (t.split(/\s+/).length >= 3 && /[.!?]$/.test(t)) sentences.push({ text: t, where })
  }
}

for (const v of vocab) add(v.example, `${v.__file} ${v.id}`)

for (const g of grammar) {
  for (const e of g.examples || []) add(e.de, `${g.__file} ${g.id} example`)
  for (const p of g.pitfalls || []) add(p.right, `${g.__file} ${g.id} pitfall.right`)
  for (const b of g.explain || []) {
    for (const it of b.items || []) if (it?.de) add(it.de, `${g.__file} ${g.id} block`)
  }
  collectExercises(g.exercises, `${g.__file} ${g.id}`)
}

for (const l of lessons) {
  for (const st of l.steps || []) {
    for (const b of st.blocks || []) {
      for (const it of b.items || []) if (it?.de) add(it.de, `${l.__file} ${l.id} block`)
    }
    collectExercises(st.exercises, `${l.__file} ${l.id}`)
  }
}

for (const c of conversations) {
  for (const t of c.turns || []) {
    add(t.bot?.de, `${c.__file} ${c.id} bot`)
    add(t.sample, `${c.__file} ${c.id} sample`)
    for (const a of t.accept || []) add(a.reply?.de, `${c.__file} ${c.id} reply`)
    add(t.fallback?.de, `${c.__file} ${c.id} fallback`)
  }
  add(c.closing?.de, `${c.__file} ${c.id} closing`)
}

for (const r of readings) for (const p of r.paragraphs || []) add(p, `${r.__file} ${r.id}`)
for (const h of listenings) for (const l of h.script || []) add(l.text, `${h.__file} ${h.id}`)

function collectExercises(list, where) {
  for (const ex of list || []) {
    if (!ex) continue
    // Only strings that are meant to be CORRECT German.
    add(ex.answer && ex.kind !== 'translate' ? ex.answer : null, `${where} ${ex.id}.answer`)
    if (ex.kind === 'translate' && ex.direction === 'en-de') add(ex.answer, `${where} ${ex.id}.answer`)
    if (ex.kind === 'correct') add(ex.answer, `${where} ${ex.id}.answer`)
    for (const a of ex.accept || []) add(a, `${where} ${ex.id}.accept`)
    add(ex.audio, `${where} ${ex.id}.audio`)
    for (const l of ex.lines || []) if (!String(l.text).includes('___')) add(l.text, `${where} ${ex.id}.line`)
    // NOT ex.wrong (deliberately broken), NOT ex.sentence (has a gap),
    // NOT ex.prompt (may be English), NOT ex.options (fragments).
  }
}

/* ── Scan ────────────────────────────────────────────────────────────────── */

const hits = []
for (const { text, where } of sentences) {
  const issues = checkGerman(text, { lexicon })
  if (issues.length) hits.push({ text, where, issues })
}

const byTag = new Map()
for (const h of hits) {
  for (const i of h.issues) byTag.set(i.tag, (byTag.get(i.tag) || 0) + 1)
}

const rate = sentences.length ? hits.length / sentences.length : 0

console.log(`\n  Checked ${sentences.length} correct German sentences from the content`)
console.log(`  False positives: ${hits.length} (${(rate * 100).toFixed(2)}%)\n`)

if (byTag.size) {
  console.log('  By rule:')
  for (const [tag, n] of [...byTag].sort((a, b) => b[1] - a[1])) {
    console.log(`    ${tag.padEnd(18)} ${n}`)
  }
  console.log('')
  const show = SHOW_ALL ? hits : hits.slice(0, 15)
  for (const h of show) {
    console.log(`  · "${h.text}"`)
    console.log(`      ${h.where}`)
    for (const i of h.issues) console.log(`      [${i.tag}] ${i.why.replace(/\*\*/g, '')}`)
  }
  if (!SHOW_ALL && hits.length > show.length) {
    console.log(`\n  … and ${hits.length - show.length} more (use --all)`)
  }
  console.log('')
}

if (rate > MAX_RATE) {
  console.log(`  ✖ false-positive rate ${(rate * 100).toFixed(2)}% exceeds the ${(MAX_RATE * 100).toFixed(0)}% budget\n`)
  process.exit(1)
}
console.log('  ✓ within budget\n')
