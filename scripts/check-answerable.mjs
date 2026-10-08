#!/usr/bin/env node
/**
 * Every exercise must accept its own model answer.
 *
 * This is the check that catches the mismatches a schema validator cannot see:
 * an `order` exercise whose tokens cannot actually spell the answer, a `blank`
 * whose answer is not among its options, a `translate` whose expected string
 * normalises differently from what the learner would type. If any exercise
 * here fails, a learner would answer it perfectly and be told they are wrong.
 *
 *   node scripts/check-answerable.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { grade } from '../src/engine/grader.js'

const ROOT = path.resolve(process.cwd(), 'src', 'content')

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

const [grammar, lessons, readings, listenings] = await Promise.all([
  loadDir('grammar'),
  loadDir('lessons'),
  loadDir('readings'),
  loadDir('listenings'),
])

/* ── Collect every exercise with its origin ──────────────────────────────── */

const all = []
const take = (list, where) => {
  for (const ex of list || []) if (ex?.id) all.push({ ex, where })
}
for (const g of grammar) take(g.exercises, `${g.__file} ${g.id}`)
for (const l of lessons) for (const st of l.steps || []) take(st.exercises, `${l.__file} ${l.id} ${st.type}`)
for (const r of readings) take(r.questions, `${r.__file} ${r.id}`)
for (const h of listenings) take(h.questions, `${h.__file} ${h.id}`)

/**
 * The response a learner who knows the answer perfectly would give.
 * Deliberately built from the exercise's OWN declared answer, so a pass means
 * "the exercise is self-consistent".
 */
function modelResponse(ex) {
  switch (ex.kind) {
    case 'mcq':
    case 'dialogue':
    case 'listen':
      return ex.answer
    case 'article':
      return ex.answer
    case 'match':
      return ex.pairs.map((p) => p[1])
    case 'order':
      // Lay the tokens out so they spell the answer — what a learner who gets
      // it right would tap. Tokens can be multi-word ("am Wochenende"), so
      // match greedily against the answer's word sequence.
      return layOutTokens(ex.tokens, ex.answer)
    default:
      return ex.answer
  }
}

/**
 * Arrange `tokens` so their words, in order, equal the words of `target`.
 * Returns null when that is impossible — which means the exercise is broken.
 */
function layOutTokens(tokens, target) {
  const want = norm(target).split(' ').filter(Boolean)
  const pool = tokens.map((t, i) => ({ t, i, words: norm(t).split(' ').filter(Boolean) }))
  const used = new Set()
  const out = []
  let at = 0
  while (at < want.length) {
    // Prefer the longest token that matches here, so "nach Hause" wins over "nach".
    const cands = pool
      .filter((p) => !used.has(p.i))
      .filter((p) => p.words.every((w, k) => want[at + k] === w))
      .sort((a, b) => b.words.length - a.words.length)
    if (!cands.length) return null
    const pick = cands[0]
    used.add(pick.i)
    out.push(pick.t)
    at += pick.words.length
  }
  if (used.size !== tokens.length) return null // a token was left over
  return out
}

const norm = (s) =>
  String(s ?? '')
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' })[c])
    .replace(/[.,!?;:"'`´’“”„…()\[\]{}\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

/* ── Run ─────────────────────────────────────────────────────────────────── */

const broken = []
const byKind = new Map()

for (const { ex, where } of all) {
  byKind.set(ex.kind, (byKind.get(ex.kind) || 0) + 1)
  let resp
  try {
    resp = modelResponse(ex)
  } catch (e) {
    broken.push({ ex, where, why: `could not build a model answer: ${e.message}` })
    continue
  }
  if (resp === null || resp === undefined) {
    broken.push({ ex, where, why: 'tokens cannot spell the answer' })
    continue
  }
  let res
  try {
    res = grade(ex, resp)
  } catch (e) {
    broken.push({ ex, where, why: `grade() threw: ${e.message}` })
    continue
  }
  if (!res.correct) {
    broken.push({
      ex,
      where,
      why: `model answer rejected — gave "${res.given}", expected "${res.expected}"`,
    })
  }
}

console.log(`\n  Checked ${all.length} exercises against their own model answers`)
console.log(
  '  ' +
    [...byKind].sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k}:${n}`).join('  '),
)
console.log('')

if (broken.length) {
  console.log(`  ✖ ${broken.length} exercise(s) a learner could not get right\n`)
  for (const b of broken.slice(0, 40)) {
    console.log(`  · ${b.ex.id}  (${b.ex.kind})`)
    console.log(`      ${b.where}`)
    console.log(`      ${b.why}`)
    if (b.ex.kind === 'order') {
      console.log(`      tokens: [${b.ex.tokens.join(' | ')}]`)
      console.log(`      answer: "${b.ex.answer}"`)
    }
  }
  if (broken.length > 40) console.log(`\n  … and ${broken.length - 40} more`)
  console.log('')
  process.exit(1)
}

console.log('  ✓ every exercise accepts its own answer\n')
