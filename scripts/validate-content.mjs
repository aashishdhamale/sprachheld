#!/usr/bin/env node
/**
 * Validates everything under src/content against SCHEMA.md.
 *
 *   npm run validate            # report
 *   npm run validate -- --json  # machine readable
 *
 * Exits non-zero when there is at least one error. Warnings do not fail.
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(process.cwd(), 'src', 'content')
const JSON_OUT = process.argv.includes('--json')

const errors = []
const warnings = []
const err = (where, msg) => errors.push(`${where}: ${msg}`)
const warn = (where, msg) => warnings.push(`${where}: ${msg}`)

/* ── Load ────────────────────────────────────────────────────────────────── */

async function loadDir(dir) {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) return []
  const files = fs.readdirSync(abs).filter((f) => f.endsWith('.js')).sort()
  const out = []
  for (const f of files) {
    const full = path.join(abs, f)
    try {
      const mod = await import(pathToFileURL(full).href)
      const val = mod.default ?? mod
      const items = Array.isArray(val) ? val : [val]
      for (const it of items) {
        if (it && typeof it === 'object' && !Array.isArray(it)) out.push({ ...it, __file: `${dir}/${f}` })
      }
      if (!items.length) warn(`${dir}/${f}`, 'exports nothing')
    } catch (e) {
      err(`${dir}/${f}`, `failed to import — ${e.message}`)
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

let levels = []
let modules = []
try {
  levels = (await import(pathToFileURL(path.join(ROOT, 'levels.js')).href)).levels
  modules = (await import(pathToFileURL(path.join(ROOT, 'modules.js')).href)).modules
} catch (e) {
  err('levels/modules', e.message)
}

/* ── Constants ───────────────────────────────────────────────────────────── */

const LEVELS = ['A1', 'A2', 'B1']
const SKILLS = new Set([
  'vocabulary', 'grammar', 'articles', 'verbs', 'wordorder', 'cases',
  'prepositions', 'reading', 'listening', 'conversation', 'writing',
])
const POS = new Set(['noun', 'verb', 'adj', 'adv', 'phrase', 'prep', 'num', 'pron', 'conj'])
const ARTICLES = new Set(['der', 'die', 'das'])
const ARTICLE_ANSWERS = new Set(['der', 'die', 'das', 'die (pl)'])
const KINDS = new Set([
  'mcq', 'blank', 'article', 'order', 'translate', 'correct',
  'conjugate', 'match', 'dialogue', 'listen', 'speak',
])
const STEP_TYPES = new Set([
  'learn', 'vocab', 'grammar', 'practice', 'build', 'reading', 'listening',
  'conversation', 'quiz', 'review',
])
const BLOCK_KINDS = new Set(['text', 'tip', 'warn', 'examples', 'table', 'list'])
const REQUIRED_STEPS = ['learn', 'vocab', 'practice', 'conversation', 'quiz', 'review']

// Grammar that must not appear before its level.
const LEVEL_GATE = {
  konjunktiv2: 'B1', passiv: 'B1', plusquamperfekt: 'B1', relativsatz: 'B1',
  adjektivendungen: 'B1', praeteritum: 'B1',
  dativ: 'A2', perfekt: 'A2', nebensatz: 'A2', reflexiv: 'A2',
  komparativ: 'A2', wechselpraepositionen: 'A2', imperativ: 'A2',
}
const rank = { A1: 0, A2: 1, B1: 2 }

/* ── Helpers ─────────────────────────────────────────────────────────────── */

const ids = new Map() // id -> where
function claimId(id, where) {
  if (!id || typeof id !== 'string') {
    err(where, `missing or non-string id`)
    return
  }
  if (ids.has(id)) err(where, `duplicate id "${id}" (also in ${ids.get(id)})`)
  else ids.set(id, where)
}

function need(obj, field, where, type = 'string') {
  const v = obj[field]
  if (v === undefined || v === null || v === '') {
    err(where, `missing "${field}"`)
    return false
  }
  if (type === 'string' && typeof v !== 'string') {
    err(where, `"${field}" must be a string`)
    return false
  }
  if (type === 'array' && !Array.isArray(v)) {
    err(where, `"${field}" must be an array`)
    return false
  }
  if (type === 'number' && typeof v !== 'number') {
    err(where, `"${field}" must be a number`)
    return false
  }
  return true
}

function checkLevel(o, where) {
  if (!LEVELS.includes(o.level)) err(where, `level must be one of ${LEVELS.join('/')} (got ${o.level})`)
}

const norm = (s) =>
  String(s ?? '')
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' })[c])
    .replace(/[.,!?;:"'`´’“”„…()\[\]{}\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

/* ── Vocab ───────────────────────────────────────────────────────────────── */

const vocabIds = new Set()
for (const v of vocab) {
  const w = `${v.__file} [${v.id ?? '?'}]`
  claimId(v.id, w)
  vocabIds.add(v.id)
  if (v.id && !/^v\.(a1|a2|b1)\.l\d\d\./.test(v.id))
    err(w, `vocab id must look like v.a1.l01.slug`)
  need(v, 'de', w)
  need(v, 'en', w)
  need(v, 'example', w)
  need(v, 'exampleEn', w)
  need(v, 'topic', w)
  checkLevel(v, w)
  if (!POS.has(v.pos)) err(w, `pos "${v.pos}" is not valid`)
  if (typeof v.difficulty !== 'number' || v.difficulty < 1 || v.difficulty > 3)
    err(w, `difficulty must be 1-3`)
  if (v.pos === 'noun') {
    if (!ARTICLES.has(v.article)) err(w, `noun needs article der/die/das (got ${v.article})`)
    if (v.plural === undefined) err(w, `noun needs a plural (or null)`)
    if (v.plural && !/^(die|der) /.test(v.plural))
      warn(w, `plural "${v.plural}" should start with "die "`)
    if (v.de && v.de[0] !== v.de[0].toUpperCase()) err(w, `German noun "${v.de}" must be capitalised`)
    if (v.article && v.de && norm(v.example).includes(norm(`${v.article} ${v.de}`)) === false) {
      // not an error — the example may use another case
    }
  }
  if (v.pos === 'noun' && v.de && /^(der|die|das) /i.test(v.de))
    err(w, `"de" must not include the article — put it in "article"`)
  if (v.example && v.de && !norm(v.example).includes(norm(v.de).split(' ')[0].slice(0, 4)))
    warn(w, `example does not seem to contain "${v.de}"`)
  if (v.forms) {
    const req = ['ich', 'du', 'er', 'wir', 'ihr', 'sie']
    for (const p of req) if (!v.forms[p]) warn(w, `forms is missing "${p}"`)
  }
}

/* ── Exercises ───────────────────────────────────────────────────────────── */

function checkExercise(ex, where, ctxLevel) {
  const w = `${where} [${ex?.id ?? '?'}]`
  if (!ex || typeof ex !== 'object') {
    err(where, 'exercise is not an object')
    return
  }
  claimId(ex.id, w)
  if (!KINDS.has(ex.kind)) {
    err(w, `unknown kind "${ex.kind}"`)
    return
  }
  if (!SKILLS.has(ex.skill)) err(w, `skill "${ex.skill}" is not valid`)
  if (typeof ex.difficulty !== 'number' || ex.difficulty < 1 || ex.difficulty > 3)
    err(w, 'difficulty must be 1-3')
  if (!ex.explain || typeof ex.explain !== 'string' || ex.explain.length < 8)
    err(w, 'needs a real "explain" string (why, not just what)')
  if (ex.accept && !Array.isArray(ex.accept)) err(w, '"accept" must be an array')
  if (ex.tags && !Array.isArray(ex.tags)) err(w, '"tags" must be an array')
  for (const t of ex.tags || []) {
    if (/[^a-z0-9-]/.test(t)) err(w, `tag "${t}" must be a lowercase ascii slug`)
    const gate = LEVEL_GATE[t]
    if (gate && ctxLevel && rank[ctxLevel] < rank[gate])
      err(w, `tag "${t}" is ${gate} material but appears in ${ctxLevel}`)
  }

  const optionsOk = (n = 2) => {
    if (!Array.isArray(ex.options) || ex.options.length < n) {
      err(w, `needs at least ${n} options`)
      return false
    }
    if (new Set(ex.options.map(norm)).size !== ex.options.length)
      err(w, 'options contain duplicates')
    if (typeof ex.answer !== 'number' || ex.answer < 0 || ex.answer >= ex.options.length)
      err(w, `answer index ${ex.answer} is out of range`)
    return true
  }

  switch (ex.kind) {
    case 'mcq':
      need(ex, 'prompt', w)
      optionsOk(3)
      break

    case 'blank': {
      if (!need(ex, 'sentence', w)) break
      const gaps = (ex.sentence.match(/___/g) || []).length
      if (gaps !== 1) err(w, `sentence must contain exactly one "___" (found ${gaps})`)
      if (!need(ex, 'answer', w)) break
      if (ex.options) {
        if (!Array.isArray(ex.options) || ex.options.length < 3)
          err(w, 'blank with options needs at least 3')
        else if (!ex.options.some((o) => norm(o) === norm(ex.answer)))
          err(w, `answer "${ex.answer}" is not among the options`)
        else if (new Set(ex.options.map(norm)).size !== ex.options.length)
          err(w, 'options contain duplicates')
      }
      break
    }

    case 'article':
      need(ex, 'noun', w)
      need(ex, 'meaning', w)
      if (!ARTICLE_ANSWERS.has(ex.answer)) err(w, `answer must be der/die/das/die (pl)`)
      if (ex.noun && ex.noun[0] !== ex.noun[0].toUpperCase()) err(w, 'noun must be capitalised')
      if (ex.noun && /^(der|die|das) /i.test(ex.noun)) err(w, '"noun" must not include the article')
      if (ex.plural && !/^die /.test(ex.plural)) warn(w, `plural "${ex.plural}" should start with "die "`)
      break

    case 'order': {
      if (!need(ex, 'tokens', w, 'array')) break
      if (!need(ex, 'answer', w)) break
      if (ex.tokens.length < 3) err(w, 'needs at least 3 tokens')
      const tokenWords = norm(ex.tokens.join(' ')).split(' ').filter(Boolean).sort()
      const targets = [ex.answer, ...(ex.accept || [])]
      for (const t of targets) {
        const tw = norm(t).split(' ').filter(Boolean).sort()
        if (tw.join('|') !== tokenWords.join('|'))
          err(
            w,
            `tokens cannot build "${t}" — tokens give [${tokenWords.join(' ')}], target needs [${tw.join(' ')}]`,
          )
      }
      break
    }

    case 'translate':
      need(ex, 'prompt', w)
      need(ex, 'answer', w)
      if (!['de-en', 'en-de'].includes(ex.direction)) err(w, `direction must be de-en or en-de`)
      break

    case 'correct':
      need(ex, 'wrong', w)
      need(ex, 'answer', w)
      if (ex.wrong && ex.answer && norm(ex.wrong) === norm(ex.answer))
        err(w, '"wrong" and "answer" are identical')
      break

    case 'conjugate':
      need(ex, 'verb', w)
      need(ex, 'person', w)
      need(ex, 'answer', w)
      break

    case 'match':
      if (!need(ex, 'pairs', w, 'array')) break
      if (ex.pairs.length < 3) err(w, 'needs at least 3 pairs')
      if (ex.pairs.length > 6) warn(w, 'more than 6 pairs is hard on mobile')
      for (const p of ex.pairs)
        if (!Array.isArray(p) || p.length !== 2 || !p[0] || !p[1])
          err(w, `bad pair ${JSON.stringify(p)}`)
      if (new Set(ex.pairs.map((p) => norm(p[1]))).size !== ex.pairs.length)
        err(w, 'the English sides must be distinct')
      break

    case 'dialogue': {
      if (!need(ex, 'lines', w, 'array')) break
      const blanks = ex.lines.filter((l) => String(l.text).includes('___')).length
      if (blanks !== 1) err(w, `dialogue needs exactly one line containing "___" (found ${blanks})`)
      for (const l of ex.lines) if (!l.who || !l.text) err(w, 'each line needs who + text')
      optionsOk(3)
      break
    }

    case 'listen':
      need(ex, 'audio', w)
      need(ex, 'question', w)
      optionsOk(2)
      break

    case 'speak':
      need(ex, 'prompt', w)
      need(ex, 'answer', w)
      break
  }
}

function checkBlocks(blocks, where) {
  if (!Array.isArray(blocks)) {
    err(where, 'blocks must be an array')
    return
  }
  blocks.forEach((b, i) => {
    const w = `${where}.blocks[${i}]`
    if (!BLOCK_KINDS.has(b?.kind)) {
      err(w, `unknown block kind "${b?.kind}"`)
      return
    }
    if (['text', 'tip', 'warn'].includes(b.kind) && !b.text) err(w, 'needs "text"')
    if (b.kind === 'list' && (!Array.isArray(b.items) || !b.items.length)) err(w, 'needs "items"')
    if (b.kind === 'examples') {
      if (!Array.isArray(b.items) || !b.items.length) err(w, 'needs "items"')
      else for (const it of b.items) if (!it.de || !it.en) err(w, 'each example needs de + en')
    }
    if (b.kind === 'table') {
      if (!Array.isArray(b.head) || !Array.isArray(b.rows)) err(w, 'needs head + rows')
      else
        for (const r of b.rows)
          if (!Array.isArray(r) || r.length !== b.head.length)
            err(w, `row [${r}] does not match ${b.head.length} columns`)
    }
  })
}

/* ── Grammar ─────────────────────────────────────────────────────────────── */

const grammarIds = new Set()
for (const g of grammar) {
  const w = `${g.__file} [${g.id ?? '?'}]`
  claimId(g.id, w)
  grammarIds.add(g.id)
  if (g.id && !/^g\.(a1|a2|b1)\./.test(g.id)) err(w, 'grammar id must look like g.a1.slug')
  need(g, 'title', w)
  need(g, 'short', w)
  checkLevel(g, w)
  if (!SKILLS.has(g.skill)) err(w, `skill "${g.skill}" is not valid`)
  checkBlocks(g.explain, w)
  const wordCount = (g.explain || [])
    .map((b) => b.text || (b.items || []).join(' ') || '')
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
  if (wordCount > 130) warn(w, `explanation is ${wordCount} words — keep it short and let practice teach`)
  if (!Array.isArray(g.examples) || g.examples.length < 2) err(w, 'needs at least 2 examples')
  for (const e of g.examples || []) if (!e.de || !e.en) err(w, 'each example needs de + en')
  for (const p of g.pitfalls || [])
    if (!p.wrong || !p.right || !p.why) err(w, 'each pitfall needs wrong + right + why')
  if (!Array.isArray(g.exercises) || g.exercises.length < 3)
    err(w, 'needs at least 3 exercises')
  ;(g.exercises || []).forEach((ex) => checkExercise(ex, w, g.level))
}

/* ── Conversations ───────────────────────────────────────────────────────── */

const convIds = new Set()
for (const c of conversations) {
  const w = `${c.__file} [${c.id ?? '?'}]`
  claimId(c.id, w)
  convIds.add(c.id)
  if (c.id && !/^c\.(a1|a2|b1)\./.test(c.id)) err(w, 'conversation id must look like c.a1.slug')
  need(c, 'title', w)
  need(c, 'setting', w)
  need(c, 'goal', w)
  need(c, 'roleBot', w)
  checkLevel(c, w)
  if (!Array.isArray(c.turns) || c.turns.length < 3) err(w, 'needs at least 3 turns')
  ;(c.turns || []).forEach((t, i) => {
    const tw = `${w}.turns[${i}]`
    if (!t.bot?.de || !t.bot?.en) err(tw, 'bot needs de + en')
    if (!Array.isArray(t.accept) || !t.accept.length) err(tw, 'needs at least one accept branch')
    ;(t.accept || []).forEach((a, j) => {
      if (!Array.isArray(a.match) || !a.match.length) err(`${tw}.accept[${j}]`, 'needs match keywords')
      for (const m of a.match || [])
        if (typeof m !== 'string') err(`${tw}.accept[${j}]`, 'match entries must be strings')
        else if (m !== m.toLowerCase() && !m.startsWith('/'))
          warn(`${tw}.accept[${j}]`, `match "${m}" should be lowercase`)
      if (a.reply && (!a.reply.de || !a.reply.en)) err(`${tw}.accept[${j}]`, 'reply needs de + en')
    })
    if (!t.fallback?.de) err(tw, 'needs a fallback so the learner is never stuck')
    if (!Array.isArray(t.hints) || !t.hints.length) err(tw, 'needs at least one hint')
    if (!t.sample) err(tw, 'needs a "sample" model answer')
  })
  for (const id of c.vocabIds || [])
    if (!vocabIds.has(id)) err(w, `unknown vocabId "${id}"`)
  for (const id of c.grammarIds || [])
    if (!grammarIds.has(id)) err(w, `unknown grammarId "${id}"`)
}

/* ── Readings ────────────────────────────────────────────────────────────── */

const readingIds = new Set()
for (const r of readings) {
  const w = `${r.__file} [${r.id ?? '?'}]`
  claimId(r.id, w)
  readingIds.add(r.id)
  need(r, 'title', w)
  checkLevel(r, w)
  if (!Array.isArray(r.paragraphs) || !r.paragraphs.length) err(w, 'needs paragraphs')
  const wc = (r.paragraphs || []).join(' ').split(/\s+/).filter(Boolean).length
  const min = { A1: 35, A2: 80, B1: 140 }[r.level] ?? 40
  if (wc < min) warn(w, `only ${wc} words — ${r.level} texts should be at least ~${min}`)
  for (const gl of r.glossary || [])
    if (!gl.de || !gl.en) err(w, 'each glossary entry needs de + en')
  if (!Array.isArray(r.questions) || r.questions.length < 3) err(w, 'needs at least 3 questions')
  ;(r.questions || []).forEach((ex) => checkExercise(ex, w, r.level))
}

/* ── Listenings ──────────────────────────────────────────────────────────── */

const listeningIds = new Set()
for (const h of listenings) {
  const w = `${h.__file} [${h.id ?? '?'}]`
  claimId(h.id, w)
  listeningIds.add(h.id)
  need(h, 'title', w)
  checkLevel(h, w)
  if (!Array.isArray(h.script) || h.script.length < 2) err(w, 'needs a script of at least 2 lines')
  for (const l of h.script || []) if (!l.who || !l.text) err(w, 'each script line needs who + text')
  if (!Array.isArray(h.questions) || h.questions.length < 2) err(w, 'needs at least 2 questions')
  ;(h.questions || []).forEach((ex) => checkExercise(ex, w, h.level))
}

/* ── Lessons ─────────────────────────────────────────────────────────────── */

const lessonIds = new Set()
for (const l of lessons) {
  const w = `${l.__file} [${l.id ?? '?'}]`
  claimId(l.id, w)
  lessonIds.add(l.id)
  need(l, 'title', w)
  need(l, 'summary', w)
  need(l, 'moduleId', w)
  need(l, 'order', w, 'number')
  need(l, 'minutes', w, 'number')
  checkLevel(l, w)
  if (!Array.isArray(l.objectives) || l.objectives.length < 2) err(w, 'needs at least 2 objectives')
  if (!Array.isArray(l.vocabIds) || l.vocabIds.length < 6)
    err(w, `needs at least 6 vocabIds (has ${l.vocabIds?.length ?? 0})`)
  for (const id of l.vocabIds || []) if (!vocabIds.has(id)) err(w, `unknown vocabId "${id}"`)
  for (const id of l.grammarIds || []) if (!grammarIds.has(id)) err(w, `unknown grammarId "${id}"`)

  if (!Array.isArray(l.steps) || !l.steps.length) {
    err(w, 'needs steps')
    continue
  }
  const types = new Set()
  l.steps.forEach((st, i) => {
    const sw = `${w}.steps[${i}](${st?.type})`
    if (!STEP_TYPES.has(st?.type)) {
      err(sw, `unknown step type "${st?.type}"`)
      return
    }
    types.add(st.type)
    if (!st.title) err(sw, 'needs a title')
    switch (st.type) {
      case 'learn':
        checkBlocks(st.blocks, sw)
        break
      case 'vocab':
        if (!Array.isArray(st.vocabIds) || !st.vocabIds.length) err(sw, 'needs vocabIds')
        for (const id of st.vocabIds || []) if (!vocabIds.has(id)) err(sw, `unknown vocabId "${id}"`)
        break
      case 'grammar':
        if (!grammarIds.has(st.grammarId)) err(sw, `unknown grammarId "${st.grammarId}"`)
        break
      case 'practice':
      case 'quiz':
      case 'build':
        if (!Array.isArray(st.exercises) || st.exercises.length < 3)
          err(sw, `needs at least 3 exercises (has ${st.exercises?.length ?? 0})`)
        ;(st.exercises || []).forEach((ex) => checkExercise(ex, sw, l.level))
        if (st.type === 'build')
          for (const ex of st.exercises || [])
            if (ex.kind !== 'order') err(sw, `build steps only take "order" exercises (got ${ex.kind})`)
        break
      case 'reading':
        if (!readingIds.has(st.readingId)) err(sw, `unknown readingId "${st.readingId}"`)
        break
      case 'listening':
        if (!listeningIds.has(st.listeningId)) err(sw, `unknown listeningId "${st.listeningId}"`)
        break
      case 'conversation':
        if (!convIds.has(st.conversationId)) err(sw, `unknown conversationId "${st.conversationId}"`)
        break
      case 'review':
        if (typeof st.count !== 'number' || st.count < 1) err(sw, 'needs a count >= 1')
        break
    }
  })
  for (const t of REQUIRED_STEPS) if (!types.has(t)) err(w, `is missing a "${t}" step`)
  const order = l.steps.map((s) => s.type)
  if (order[0] !== 'learn') err(w, 'the first step must be "learn"')
  if (order[order.length - 1] !== 'review') err(w, 'the last step must be "review"')
  const qi = order.indexOf('quiz')
  const pi = order.indexOf('practice')
  if (qi >= 0 && pi >= 0 && qi < pi) err(w, 'the quiz must come after practice')

  // Difficulty mix
  const all = l.steps.flatMap((s) => s.exercises || [])
  if (all.length) {
    const d3 = all.filter((e) => e.difficulty === 3).length
    const d1 = all.filter((e) => e.difficulty === 1).length
    if (!d1) warn(w, 'no difficulty-1 exercises — struggling learners have nothing easier to fall back on')
    if (!d3) warn(w, 'no difficulty-3 exercises — fast learners never get stretched')
  }
}

/* ── Structure: levels & modules ─────────────────────────────────────────── */

const moduleIds = new Set(modules.map((m) => m.id))
for (const lv of levels) {
  const w = `levels.js [${lv.id}]`
  for (const mid of lv.moduleIds || []) if (!moduleIds.has(mid)) err(w, `unknown moduleId "${mid}"`)
}
const claimedLessons = new Set()
for (const m of modules) {
  const w = `modules.js [${m.id}]`
  if (!levels.some((l) => l.id === m.levelId)) err(w, `unknown levelId "${m.levelId}"`)
  for (const lid of m.lessonIds || []) {
    if (!lessonIds.has(lid)) err(w, `unknown lessonId "${lid}"`)
    if (claimedLessons.has(lid)) err(w, `lesson "${lid}" belongs to two modules`)
    claimedLessons.add(lid)
  }
}
for (const l of lessons) {
  if (!claimedLessons.has(l.id)) err(`${l.__file} [${l.id}]`, 'lesson is not listed in any module')
  if (!moduleIds.has(l.moduleId)) err(`${l.__file} [${l.id}]`, `unknown moduleId "${l.moduleId}"`)
}

// Orphan content is a warning, not an error — the Practice hub can still use it.
const usedConv = new Set(lessons.flatMap((l) => (l.steps || []).map((s) => s.conversationId)))
for (const c of conversations)
  if (!usedConv.has(c.id)) warn(`${c.__file} [${c.id}]`, 'not used by any lesson (available in Practice)')

// Orders unique per level
for (const lv of LEVELS) {
  const ls = lessons.filter((l) => l.level === lv)
  const seen = new Map()
  for (const l of ls) {
    if (seen.has(l.order)) err(`${l.__file} [${l.id}]`, `order ${l.order} clashes with ${seen.get(l.order)}`)
    seen.set(l.order, l.id)
  }
}

/* ── Vocabulary coverage ─────────────────────────────────────────────────── */

const usedVocab = new Set(lessons.flatMap((l) => l.vocabIds || []))
const orphanVocab = vocab.filter((v) => !usedVocab.has(v.id))
if (orphanVocab.length)
  warn('vocab', `${orphanVocab.length} words are not taught by any lesson (still in the Vocabulary hub)`)

// The same German word taught twice wastes a slot and confuses the SRS.
const byWord = new Map()
for (const v of vocab) {
  const k = `${v.pos}|${norm(v.de)}`
  if (!byWord.has(k)) byWord.set(k, [])
  byWord.get(k).push(v)
}
for (const [k, list] of byWord) {
  if (list.length > 1)
    warn('vocab', `"${list[0].de}" (${list[0].pos}) is defined ${list.length}× — ${list.map((v) => v.id).join(', ')}`)
}

/* ── Report ──────────────────────────────────────────────────────────────── */

const exCount =
  grammar.reduce((n, g) => n + (g.exercises?.length || 0), 0) +
  lessons.reduce((n, l) => n + (l.steps || []).reduce((k, s) => k + (s.exercises?.length || 0), 0), 0) +
  readings.reduce((n, r) => n + (r.questions?.length || 0), 0) +
  listenings.reduce((n, h) => n + (h.questions?.length || 0), 0)

const stats = {
  levels: levels.length,
  modules: modules.length,
  lessons: lessons.length,
  vocab: vocab.length,
  nouns: vocab.filter((v) => v.pos === 'noun').length,
  grammar: grammar.length,
  conversations: conversations.length,
  readings: readings.length,
  listenings: listenings.length,
  exercises: exCount,
  errors: errors.length,
  warnings: warnings.length,
}

if (JSON_OUT) {
  console.log(JSON.stringify({ stats, errors, warnings }, null, 2))
} else {
  const pad = (s, n) => String(s).padStart(n)
  console.log('\n  Content')
  console.log('  ' + '─'.repeat(34))
  for (const [k, v] of Object.entries(stats)) {
    if (k === 'errors' || k === 'warnings') continue
    console.log(`  ${k.padEnd(16)}${pad(v, 6)}`)
  }
  if (warnings.length) {
    console.log(`\n  ⚠ ${warnings.length} warning(s)`)
    for (const w of warnings.slice(0, 40)) console.log(`    · ${w}`)
    if (warnings.length > 40) console.log(`    … and ${warnings.length - 40} more`)
  }
  if (errors.length) {
    console.log(`\n  ✖ ${errors.length} error(s)`)
    for (const e of errors.slice(0, 80)) console.log(`    · ${e}`)
    if (errors.length > 80) console.log(`    … and ${errors.length - 80} more`)
    console.log('')
  } else {
    console.log('\n  ✓ content is valid\n')
  }
}

process.exit(errors.length ? 1 : 0)
