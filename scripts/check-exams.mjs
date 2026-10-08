#!/usr/bin/env node
/**
 * Mock exams must match the real exam's structure exactly, and every item
 * must be answerable — a wrong answer key in an exam is far worse than in a
 * drill, because the learner trusts the score.
 *
 * Checks, for every file in src/content/exams/:
 *   - it matches its FORMAT (sections, parts, item counts, option counts)
 *   - every answer key points at a real option / choice
 *   - listening items have audio, every speaker is known
 *   - form gaps accept their own answer; model texts hit the word range,
 *     open and close properly, and cover every content point
 *   - the error checker stays silent on all of the exam's German
 *
 *   node scripts/check-exams.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { FORMATS, wordCount, hasGreetingAndClose, pointLooksCovered } from '../src/engine/exam.js'
import { matchesAny } from '../src/lib/text.js'
import { checkGerman } from '../src/engine/checker.js'

const ROOT = path.resolve(process.cwd(), 'src', 'content')
const SPEAKERS = new Set(['f', 'f2', 'm', 'm2', 'n'])
const errors = []
const err = (where, msg) => errors.push(`${where}: ${msg}`)

async function loadDir(dir) {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) return []
  const out = []
  for (const f of fs.readdirSync(abs).filter((x) => x.endsWith('.js')).sort()) {
    const mod = await import(pathToFileURL(path.join(abs, f)).href)
    const val = mod.default ?? mod
    for (const it of Array.isArray(val) ? val : [val]) out.push({ ...it, __file: `${dir}/${f}` })
  }
  return out
}

const exams = await loadDir('exams')
const vocab = await loadDir('vocab')
const lexicon = new Map()
for (const v of vocab) {
  if (!v.de) continue
  lexicon.set(v.de, v)
  lexicon.set(v.de.toLowerCase(), v)
}

const sentences = []
const add = (text, where) => {
  if (typeof text !== 'string') return
  const clean = text.replace(/\{name\}/g, 'Alex')
  for (const line of clean.split(/\n+/)) {
    for (const s of line.split(/(?<=[.!?])\s+/)) {
      const t = s.trim()
      if (t.split(/\s+/).length >= 3 && /[.!?]$/.test(t)) sentences.push({ text: t, where })
    }
  }
}

const seenIds = new Set()
const answerSpread = {}

for (const ex of exams) {
  const where = ex.__file
  if (!ex.id) err(where, 'missing id')
  if (seenIds.has(ex.id)) err(where, `duplicate exam id ${ex.id}`)
  seenIds.add(ex.id)
  const fmt = FORMATS[ex.format]
  if (!fmt) {
    err(where, `unknown format ${ex.format}`)
    continue
  }
  if (ex.level !== fmt.level) err(where, `level ${ex.level} does not match format level ${fmt.level}`)
  if (!ex.title) err(where, 'missing title')
  answerSpread[ex.id] = [0, 0, 0]

  for (const sid of fmt.order) {
    const spec = fmt.sections[sid]
    const sec = ex.sections?.[sid]
    if (!sec) {
      err(where, `missing section ${sid}`)
      continue
    }
    for (const p of spec.parts) {
      const part = sec[p.id]
      const w = `${where} ${sid}.${p.id}`
      if (!part) {
        err(w, 'missing part')
        continue
      }
      checkPart(p, part, w, sid, ex.id)
    }
  }
}

function checkPart(p, part, w, sid, examId) {
  const items = part.items || []
  const itemIds = new Set()
  for (const it of items) {
    if (!it.id) err(w, 'item without id')
    else if (itemIds.has(it.id)) err(w, `duplicate item id ${it.id}`)
    itemIds.add(it.id)
  }

  if (sid === 'hoeren') {
    if (part.audio) checkAudio(part.audio, `${w} (part audio)`)
    else for (const it of items) {
      if (!it.audio?.length) err(w, `${it.id} has no audio`)
      else checkAudio(it.audio, `${w} ${it.id}`)
    }
  }

  switch (p.type) {
    case 'mc':
      if (items.length !== p.count) err(w, `expected ${p.count} items, found ${items.length}`)
      for (const it of items) {
        if (!it.question) err(w, `${it.id} missing question`)
        if (it.options?.length !== p.options) err(w, `${it.id} needs ${p.options} options`)
        if (!Number.isInteger(it.answer) || it.answer < 0 || it.answer >= (it.options?.length || 0)) err(w, `${it.id} answer out of range`)
        else answerSpread[examId][it.answer]++
        if (new Set(it.options || []).size !== (it.options || []).length) err(w, `${it.id} has duplicate options`)
        add(it.question, `${w} ${it.id}`)
      }
      if (part.text) add(part.text.body, `${w} text`)
      break
    case 'tf':
    case 'yn':
      if (items.length !== p.count) err(w, `expected ${p.count} items, found ${items.length}`)
      for (const it of items) {
        if (typeof it.answer !== 'boolean') err(w, `${it.id} answer must be true/false`)
        if (!it.statement) err(w, `${it.id} missing statement`)
        add(it.statement, `${w} ${it.id}`)
        if (it.text) add(it.text.body, `${w} ${it.id} text`)
      }
      for (const t of part.texts || []) add(t.body, `${w} text`)
      if (items.length && items.every((i) => i.answer === items[0].answer)) err(w, 'every answer is the same')
      break
    case 'ab':
      if (items.length !== p.count) err(w, `expected ${p.count} items, found ${items.length}`)
      for (const it of items) {
        if (!it.situation) err(w, `${it.id} missing situation`)
        if (it.options?.length !== 2 || it.options.some((o) => !o.body)) err(w, `${it.id} needs two option texts`)
        if (it.answer !== 0 && it.answer !== 1) err(w, `${it.id} answer must be 0 or 1`)
        add(it.situation, `${w} ${it.id}`)
        for (const o of it.options || []) add(o.body, `${w} ${it.id} option`)
      }
      break
    case 'match': {
      if (items.length !== p.count) err(w, `expected ${p.count} items, found ${items.length}`)
      const keys = new Set((part.choices || []).map((c) => c.key))
      if (keys.size !== (part.choices || []).length) err(w, 'duplicate choice keys')
      if (keys.size <= items.length) err(w, 'needs more choices than items')
      const used = new Map()
      for (const it of items) {
        if (it.answer === 'x') {
          if (sid !== 'lesen') err(w, `${it.id} — x (no match) only exists in reading`)
          continue
        }
        if (!keys.has(it.answer)) err(w, `${it.id} answer ${it.answer} is not a choice`)
        used.set(it.answer, (used.get(it.answer) || 0) + 1)
        add(it.situation, `${w} ${it.id}`)
      }
      for (const [k, n] of used) if (n > 1) err(w, `choice ${k} is the answer ${n} times`)
      if (sid === 'lesen' && items.filter((i) => i.answer === 'x').length !== 1) err(w, 'reading match needs exactly one x')
      for (const c of part.choices || []) add(c.body, `${w} choice ${c.key}`)
      break
    }
    case 'form': {
      const gaps = (part.form?.fields || []).filter((f) => f.answer != null)
      if (gaps.length !== p.count) err(w, `expected ${p.count} gaps, found ${gaps.length}`)
      for (const f of gaps) if (!matchesAny(f.answer, f.answer, f.accept)) err(w, `gap ${f.label} rejects its own answer`)
      if (!part.situation) err(w, 'missing situation')
      add(part.situation, `${w} situation`)
      break
    }
    case 'message': {
      if (part.points?.length !== 3) err(w, 'needs exactly three content points')
      if (!['formal', 'informal'].includes(part.register)) err(w, 'register must be formal or informal')
      const n = wordCount(part.sample)
      const [lo, hi] = p.words
      if (n < lo || n > hi + 5) err(w, `sample has ${n} words, target ${lo}–${hi}`)
      const gc = hasGreetingAndClose(part.sample)
      if (!gc.open || !gc.close) err(w, `sample is missing a ${!gc.open ? 'greeting' : 'sign-off'}`)
      for (const pt of part.points || []) {
        if (!pt.keys?.length) err(w, `point "${pt.de}" has no keys`)
        else if (!pointLooksCovered(part.sample, pt)) err(w, `sample does not look like it covers "${pt.de}"`)
      }
      add(part.situation, `${w} situation`)
      add(part.sample, `${w} sample`)
      break
    }
    case 'intro': {
      if ((part.keywords || []).length < 5) err(w, 'needs at least five keywords')
      const covered = (part.keywords || []).filter((k) => pointLooksCovered(part.sample, k)).length
      if (covered < (part.keywords || []).length) err(w, `sample covers only ${covered}/${part.keywords.length} keywords`)
      add(part.sample, `${w} sample`)
      break
    }
    case 'askcards':
      if ((part.cards || []).length !== p.count) err(w, `expected ${p.count} cards`)
      for (const c of part.cards || []) {
        if (!c.word || !c.sampleQ?.endsWith('?') || !c.partnerQ?.endsWith('?') || !c.sampleA) err(w, `card ${c.word} is incomplete`)
        add(c.sampleQ, `${w} ${c.word}`)
        add(c.partnerQ, `${w} ${c.word}`)
        add(c.sampleA, `${w} ${c.word}`)
      }
      break
    case 'requests':
      if ((part.cards || []).length !== p.count) err(w, `expected ${p.count} cards`)
      for (const c of part.cards || []) {
        if (!c.emoji || !c.label || !c.sample || !c.partnerReq || !c.reactSample) err(w, `card ${c.label} is incomplete`)
        add(c.sample, `${w} ${c.label}`)
        add(c.partnerReq, `${w} ${c.label}`)
        add(c.reactSample, `${w} ${c.label}`)
      }
      break
    case 'monologue':
      if ((part.prompts || []).length !== 4) err(w, 'needs four prompts')
      for (const pr of part.prompts || []) if (!pointLooksCovered(part.sample, pr)) err(w, `sample does not cover "${pr.de}"`)
      if (!part.followQ || !part.followA) err(w, 'needs a follow-up question and answer')
      add(part.sample, `${w} sample`)
      add(part.followQ, `${w} follow`)
      add(part.followA, `${w} follow`)
      break
    case 'plan':
      if (!part.task || !part.calendar?.length) err(w, 'needs a task and a calendar')
      if ((part.turns || []).length < 3) err(w, 'needs at least three turns')
      for (const t of part.turns || []) {
        if (!t.partner || !t.sample) err(w, 'turn is incomplete')
        add(t.partner, `${w} partner`)
        add(t.sample, `${w} sample`)
      }
      break
    default:
      err(w, `unknown part type ${p.type}`)
  }
}

function checkAudio(lines, w) {
  for (const l of lines) {
    if (!SPEAKERS.has(l.s)) err(w, `unknown speaker "${l.s}"`)
    if (!l.de) err(w, 'empty audio line')
    add(l.de, w)
  }
}

/* ── German check ── */
const hits = []
for (const { text, where } of sentences) {
  const issues = checkGerman(text, { lexicon })
  if (issues.length) hits.push({ text, where, issues })
}
const rate = sentences.length ? hits.length / sentences.length : 0

/* ── Report ── */
console.log(`\n  Checked ${exams.length} mock exam(s)`)
for (const ex of exams) {
  const s = answerSpread[ex.id]
  if (s) console.log(`    ${ex.id.padEnd(12)} ${ex.level} · ${ex.title.padEnd(12)} a/b/c answers: ${s.join(' / ')}`)
}
console.log(`  ${sentences.length} German sentences through the error checker — ${hits.length} flagged (${(rate * 100).toFixed(2)}%)`)
for (const h of hits) console.log(`    ⚠ ${h.where}\n      "${h.text}"\n      → ${h.issues.map((i) => `${i.tag}: ${i.wrong} → ${i.right}`).join('; ')}`)

if (rate > 0.01) errors.push(`error checker flags ${(rate * 100).toFixed(1)}% of exam sentences (budget 1%)`)

console.log()
if (errors.length) {
  for (const e of errors) console.log(`  ✗ ${e}`)
  console.log(`\n  ✗ ${errors.length} exam problem(s)`)
  process.exit(1)
}
console.log('  ✓ every exam matches its format and every item is answerable')
