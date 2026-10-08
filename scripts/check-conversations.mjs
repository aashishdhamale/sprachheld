#!/usr/bin/env node
/**
 * Every conversation must be completable.
 *
 * For each scenario we play the learner: at each turn we say exactly what the
 * content itself offers as the model answer (`sample`), and then each of the
 * `hints`. All of them should match a branch and move the dialogue forward —
 * if the content's own suggested answer does not match its own keywords, a
 * real learner following the hint would be told "sorry, what?".
 *
 * We also check the tutor stays quiet on its own sample answers: a hint that
 * trips the error checker is either bad German or a checker bug.
 *
 *   node scripts/check-conversations.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { createSession, openSession, respond } from '../src/engine/conversation.js'
import { checkGerman } from '../src/engine/checker.js'

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

const conversations = await loadDir('conversations')
const vocab = await loadDir('vocab')

const lexicon = new Map()
for (const v of vocab) {
  if (!v.de) continue
  lexicon.set(v.de, v)
  lexicon.set(v.de.toLowerCase(), v)
}

const problems = []
let played = 0
let turnsPlayed = 0
let unverifiableHints = 0

for (const c of conversations) {
  /* ── 1. Play it through with the model answers ─────────────────────────── */
  const s = createSession(c, { name: 'Aashish' })
  openSession(s)
  let guard = 0
  let finished = false
  while (guard++ < c.turns.length * 3) {
    const turn = c.turns[s.turn]
    if (!turn) break
    const sample = String(turn.sample || '').replace(/\{name\}/g, 'Aashish')
    const before = s.turn
    const r = respond(s, sample, { lexicon })
    turnsPlayed++
    if (r.done) {
      finished = true
      break
    }
    if (s.turn === before) {
      problems.push({
        id: c.id,
        file: c.__file,
        why: `turn ${before + 1}: the sample answer "${sample}" does not match any accept branch`,
        detail: `branches: ${JSON.stringify((turn.accept || []).map((a) => a.match))}`,
      })
      break
    }
  }
  if (!finished) {
    problems.push({ id: c.id, file: c.__file, why: 'never reached the end using its own samples' })
  } else {
    played++
  }

  /* ── 2. Every hint should also work ────────────────────────────────────── */
  c.turns.forEach((turn, i) => {
    for (const hint of turn.hints || []) {
      const raw = String(hint).replace(/\{name\}/g, 'Aashish')
      // A hint with a gap in the middle ("Ich stehe um … Uhr auf.") is a frame
      // the learner completes with their own word — we cannot guess it, so it
      // cannot be verified here.
      if (/[…]|\.\.\./.test(raw.replace(/[…\.]{1,3}\s*$/, ''))) {
        unverifiableHints++
        continue
      }
      // A hint ending in "…" is a frame the learner finishes. Complete it with
      // a word the turn actually accepts, which is what a learner would do.
      const isFrame = /[…]\s*$|\.\.\.\s*$/.test(raw)
      const completion = isFrame
        ? (turn.accept || []).flatMap((a) => a.match || []).find((m) => !m.startsWith('/')) || ''
        : ''
      const filled = (raw.replace(/[…\.]{1,3}\s*$/, '').trim() + ' ' + completion).trim()
      if (!filled || filled.split(/\s+/).length < 2) continue
      const probe = createSession(c, { name: 'Aashish' })
      openSession(probe)
      probe.turn = i
      const before = probe.turn
      respond(probe, filled, { lexicon })
      if (probe.turn === before) {
        problems.push({
          id: c.id,
          file: c.__file,
          why: `turn ${i + 1}: the hint "${hint}" does not match its own branches`,
          detail: `branches: ${JSON.stringify((turn.accept || []).map((a) => a.match))}`,
        })
      }
    }
  })

  /* ── 3. The content's own German should be clean ───────────────────────── */
  c.turns.forEach((turn, i) => {
    const sample = String(turn.sample || '').replace(/\{name\}/g, 'Aashish')
    const issues = checkGerman(sample, { lexicon })
    if (issues.length) {
      problems.push({
        id: c.id,
        file: c.__file,
        why: `turn ${i + 1}: the sample answer trips the error checker`,
        detail: `"${sample}" → ${issues.map((x) => `[${x.tag}] ${x.why.replace(/\*\*/g, '')}`).join('; ')}`,
      })
    }
  })
}

console.log(`\n  Played ${played}/${conversations.length} conversations to the end (${turnsPlayed} turns)`)
if (unverifiableHints)
  console.log(`  ${unverifiableHints} hint(s) with a mid-sentence gap skipped — the learner supplies the word`)

if (problems.length) {
  console.log(`\n  ✖ ${problems.length} problem(s)\n`)
  for (const p of problems.slice(0, 30)) {
    console.log(`  · ${p.id}`)
    console.log(`      ${p.file}`)
    console.log(`      ${p.why}`)
    if (p.detail) console.log(`      ${p.detail}`)
  }
  if (problems.length > 30) console.log(`\n  … and ${problems.length - 30} more`)
  console.log('')
  process.exit(1)
}

console.log('  ✓ every conversation completes and every hint works\n')
