/**
 * Numbers, clock times, prices, dates and phone numbers — generated, spoken
 * and graded. Nothing here is authored content: every item is built on the
 * fly, so the trainer never runs out.
 *
 * Framework-free and pure (apart from the default random source), so the
 * checks can exercise it in Node.
 */

import { fold } from '../lib/text.js'

/* ── Number words ────────────────────────────────────────────────────────── */

const ONES = [
  'null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun',
  'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn',
  'achtzehn', 'neunzehn',
]
const TENS = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig']

export const MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
]

/** 1–99. A trailing 1 is "eins" on its own, "ein" when a word follows it. */
function under100(n, compound = false) {
  if (n < 20) return n === 1 ? (compound ? 'ein' : 'eins') : ONES[n]
  const t = Math.floor(n / 10)
  const o = n % 10
  if (!o) return TENS[t]
  return (o === 1 ? 'ein' : ONES[o]) + 'und' + TENS[t]
}

function under1000(n, compound = false) {
  const h = Math.floor(n / 100)
  const r = n % 100
  let out = ''
  if (h) out += (h === 1 ? 'ein' : ONES[h]) + 'hundert'
  if (r) out += under100(r, compound)
  return out
}

/**
 * German number words, written the German way — as one word below a million.
 * `year: true` reads 1100–1999 in hundreds: neunzehnhundertneunundneunzig.
 */
export function numberToWords(n, { year = false } = {}) {
  n = Math.trunc(Number(n))
  if (!Number.isFinite(n)) return ''
  if (n < 0) return 'minus ' + numberToWords(-n)
  if (n === 0) return 'null'
  if (year && n >= 1100 && n < 2000) {
    const lo = n % 100
    return under100(Math.floor(n / 100)) + 'hundert' + (lo ? under100(lo) : '')
  }
  if (n >= 1_000_000) {
    const m = Math.floor(n / 1_000_000)
    const rest = n % 1_000_000
    const head = m === 1 ? 'eine Million' : `${numberToWords(m)} Millionen`
    return rest ? `${head} ${numberToWords(rest)}` : head
  }
  const th = Math.floor(n / 1000)
  const rest = n % 1000
  let out = ''
  if (th) out += (th === 1 ? 'ein' : under1000(th, true)) + 'tausend'
  if (rest) out += under1000(rest)
  return out
}

/**
 * Comparison key for number words: letters only, umlauts folded, and the
 * optional leading "ein" of einhundert / eintausend dropped — "hundertzwei"
 * and "einhundertzwei" are both right.
 */
export function numberKey(s) {
  return fold(s)
    .replace(/[^a-z]/g, '')
    .replace(/^ein(hundert|tausend)/, '$1')
    .replace(/tausendeinhundert/, 'tausendhundert')
}

/** Ordinal with its ending: ordinal(3, 'e') → "dritte", ordinal(21, 'en') → "einundzwanzigsten". */
export function ordinal(n, ending = 'e') {
  const special = { 1: 'erst', 3: 'dritt', 7: 'siebt', 8: 'acht' }
  if (special[n]) return special[n] + ending
  if (n < 20) return numberToWords(n) + 't' + ending
  return numberToWords(n) + 'st' + ending
}

/* ── Clock times ─────────────────────────────────────────────────────────── */

/** "neunzehn Uhr fünfundvierzig" — the timetable / announcement reading. */
export function timeFormal(h, m) {
  const hw = h === 1 ? 'ein' : numberToWords(h)
  return m ? `${hw} Uhr ${numberToWords(m)}` : `${hw} Uhr`
}

/** "Viertel vor acht" — the everyday reading. Minutes should be a multiple of 5. */
export function timeInformal(h, m) {
  const h12 = h % 12 || 12
  const next = (h12 % 12) + 1
  const w = (x) => numberToWords(x)
  if (m === 0) return `${h12 === 1 ? 'ein' : w(h12)} Uhr`
  if (m === 15) return `Viertel nach ${w(h12)}`
  if (m === 25) return `fünf vor halb ${w(next)}`
  if (m === 30) return `halb ${w(next)}`
  if (m === 35) return `fünf nach halb ${w(next)}`
  if (m === 45) return `Viertel vor ${w(next)}`
  if (m < 30) return `${w(m)} nach ${w(h12)}`
  return `${w(60 - m)} vor ${w(next)}`
}

/** Every reading a German speaker would accept for this time. */
export function timeReadings(h, m) {
  const h12 = h % 12 || 12
  const next = (h12 % 12) + 1
  const w = (x) => numberToWords(x)
  const out = new Set([timeFormal(h, m), timeFormal(h12, m), timeFormal((h12 % 12) + 12, m)])
  if (m % 5 === 0) out.add(timeInformal(h, m))
  if (m === 0) {
    out.add(w(h12))
    out.add(`punkt ${w(h12)}`)
    out.add(`punkt ${h12 === 1 ? 'ein' : w(h12)} Uhr`)
  }
  // Regional readings — heard all over eastern and southern Germany.
  if (m === 15) out.add(`viertel ${w(next)}`)
  if (m === 45) out.add(`dreiviertel ${w(next)}`)
  if (m === 20) out.add(`zehn vor halb ${w(next)}`)
  if (m === 40) out.add(`zehn nach halb ${w(next)}`)
  return [...out]
}

export function formatTime(h, m) {
  return `${h}:${String(m).padStart(2, '0')}`
}

/** "7:15", "07.15", "7 15", "715", "7h15", "7:15 Uhr" → { h, m } */
export function parseTime(input) {
  const s = String(input ?? '').toLowerCase().replace(/uhr/g, '').trim()
  let m = s.match(/^(\d{1,2})\s*[:.,h ]\s*(\d{1,2})$/)
  if (!m) m = s.match(/^(\d{1,2})(\d{2})$/)
  if (!m) {
    const only = s.match(/^(\d{1,2})$/)
    if (only) m = [null, only[1], '0']
  }
  if (!m) return null
  const h = Number(m[1])
  const min = Number(m[2])
  if (h > 24 || min > 59) return null
  return { h: h % 24, m: min }
}

/* ── Prices ──────────────────────────────────────────────────────────────── */

function euroWord(e) {
  return e === 1 ? 'ein' : numberToWords(e)
}

/** 399 → "drei Euro neunundneunzig" */
export function priceWords(cents) {
  const e = Math.floor(cents / 100)
  const c = cents % 100
  if (!e) return `${numberToWords(c)} Cent`
  if (!c) return `${euroWord(e)} Euro`
  return `${euroWord(e)} Euro ${numberToWords(c)}`
}

export function priceReadings(cents) {
  const e = Math.floor(cents / 100)
  const c = cents % 100
  const out = new Set([priceWords(cents)])
  if (e && c) {
    out.add(`${euroWord(e)} Euro ${numberToWords(c)} Cent`)
    out.add(`${euroWord(e)} Euro und ${numberToWords(c)} Cent`)
    out.add(`${numberToWords(e)} ${numberToWords(c)}`)
  }
  if (!e) out.add(`null Euro ${numberToWords(c)}`)
  return [...out]
}

/** 399 → "3,99 €" */
export function formatPrice(cents) {
  const e = Math.floor(cents / 100)
  const c = cents % 100
  return `${e},${String(c).padStart(2, '0')} €`
}

/** "3,99", "3.99 €", "€3,99", "3 Euro 99", "50 Cent", "3" → cents */
export function parsePrice(input) {
  const s = String(input ?? '')
    .toLowerCase()
    .replace(/€|eur(o)?s?/g, ' ')
    .trim()
  const cent = s.match(/^(\d{1,2})\s*(cent|ct|c)$/)
  if (cent) return Number(cent[1])
  const m = s.match(/^(\d{1,4})(?:\s*[,.\s]\s*(\d{1,2}))?$/)
  if (!m) return null
  const e = Number(m[1])
  let c = 0
  if (m[2] != null) c = m[2].length === 1 ? Number(m[2]) * 10 : Number(m[2])
  return e * 100 + c
}

/* ── Dates ───────────────────────────────────────────────────────────────── */

/** frame 'nom' → "der dritte Mai", 'dat' → "am dritten Mai" */
export function dateWords(d, mo, frame = 'nom', year = null) {
  const core = frame === 'dat' ? `am ${ordinal(d, 'en')} ${MONTHS[mo - 1]}` : `der ${ordinal(d, 'e')} ${MONTHS[mo - 1]}`
  return year ? `${core} ${numberToWords(year, { year: true })}` : core
}

/** What the learner types after "Heute ist der …" / "… am": the ordinal and the month. */
export function dateReadings(d, mo, frame = 'nom', year = null) {
  const end = frame === 'dat' ? 'en' : 'e'
  const art = frame === 'dat' ? 'am' : 'der'
  const y = year ? ` ${numberToWords(year, { year: true })}` : ''
  const cores = [`${ordinal(d, end)} ${MONTHS[mo - 1]}${y}`, `${ordinal(d, end)} ${ordinal(mo, end)}${y}`]
  if (d === 7) cores.push(`siebent${end} ${MONTHS[mo - 1]}${y}`)
  return cores.flatMap((c) => [c, `${art} ${c}`])
}

export function formatDate(d, mo, year = null) {
  return year ? `${d}.${mo}.${year}` : `${d}. ${MONTHS[mo - 1]}`
}

const MONTH_KEYS = MONTHS.map((m) => fold(m))

/** "3.5.", "03.05", "3. Mai", "3 mai 2026", "3.5.2026" → { d, m, y } */
export function parseDate(input) {
  const s = fold(String(input ?? '').trim()).replace(/\s+/g, ' ')
  let m = s.match(/^(\d{1,2})\s*\.\s*(\d{1,2})\s*\.?\s*(\d{4})?$/)
  if (m) return valid(Number(m[1]), Number(m[2]), m[3] ? Number(m[3]) : null)
  m = s.match(/^(\d{1,2})\s*\.?\s*([a-z]+)\s*(\d{4})?$/)
  if (m) {
    const word = m[2] === 'marz' ? 'maerz' : m[2]
    const idx = MONTH_KEYS.findIndex((k) => k === word || (word.length >= 3 && k.startsWith(word)))
    if (idx === -1) return null
    return valid(Number(m[1]), idx + 1, m[3] ? Number(m[3]) : null)
  }
  return null
  function valid(d, mo, y) {
    if (d < 1 || d > 31 || mo < 1 || mo > 12) return null
    return { d, m: mo, y }
  }
}

/* ── Phone numbers ───────────────────────────────────────────────────────── */

/** Digit by digit, groups separated by a pause. `zwo` is what Germans say on the phone. */
export function phoneWords(digits, { zwo = false } = {}) {
  return digits
    .split(' ')
    .map((g) =>
      g
        .split('')
        .map((c) => (c === '2' && zwo ? 'zwo' : ONES[Number(c)]))
        .join(' '),
    )
    .join(', ')
}

/* ── Modes and difficulty bands ──────────────────────────────────────────── */

export const MODES = [
  { id: 'zahlen', label: 'Zahlen', en: 'Numbers', icon: '🔢', bands: ['0–20', '21–99', '100–999', '1000+ & years'], write: true },
  { id: 'uhrzeit', label: 'Uhrzeit', en: 'Clock time', icon: '🕒', bands: ['Full & half', 'Quarters', 'Every 5 min', 'Timetable 24h'], write: true },
  { id: 'preise', label: 'Preise', en: 'Prices', icon: '💶', bands: ['Simple', 'Under 20 €', 'Under 100 €', 'Over 100 €'], write: true },
  { id: 'datum', label: 'Datum', en: 'Dates', icon: '📅', bands: ['1st–10th', '1st–19th', 'Whole month', 'With year'], write: true },
  { id: 'telefon', label: 'Telefon', en: 'Phone numbers', icon: '📞', bands: ['4 digits', '7 digits', 'Mobile', 'Mobile, fast'], write: false },
]
export const MODE_BY_ID = Object.fromEntries(MODES.map((m) => [m.id, m]))

const int = (rng, lo, hi) => lo + Math.floor(rng() * (hi - lo + 1))
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)]
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)

/**
 * Build one item.
 * @returns {{mode, band, key, say, show, expected, readings, rate?}}
 *   say       German text spoken in listening mode
 *   show      what the learner sees in writing mode
 *   expected  the digits/format a listener should type
 *   readings  every German wording accepted in writing mode
 */
export function makeItem(mode, band = 1, rng = Math.random) {
  band = Math.max(1, Math.min(4, band))
  switch (mode) {
    case 'zahlen': {
      if (band === 4 && rng() < 0.5) {
        const y = int(rng, 1950, 2030)
        const w = numberToWords(y, { year: true })
        return item({ mode, band, key: `y${y}`, say: `Im Jahr ${w}.`, show: `${y} (als Jahreszahl)`, expected: String(y), readings: [w, `im Jahr ${w}`], value: y })
      }
      const n = band === 1 ? int(rng, 0, 20) : band === 2 ? int(rng, 21, 99) : band === 3 ? int(rng, 100, 999) : int(rng, 1000, 99999)
      const w = numberToWords(n)
      return item({ mode, band, key: `n${n}`, say: w, show: n.toLocaleString('de-DE'), expected: String(n), readings: [w], value: n })
    }
    case 'uhrzeit': {
      let h = int(rng, 0, 23)
      let m
      if (band === 1) m = pick(rng, [0, 30])
      else if (band === 2) m = pick(rng, [0, 15, 30, 45])
      else if (band === 3) m = int(rng, 0, 11) * 5
      else m = int(rng, 0, 59)
      if (band < 4) h = int(rng, 1, 12) + (rng() < 0.5 ? 0 : 12)
      h = h % 24
      const informal = band < 4 && (band > 1 || rng() < 0.7)
      const spoken = informal ? timeInformal(h, m) : timeFormal(h, m)
      const say =
        band === 4
          ? pick(rng, [`Der Zug fährt um ${spoken}.`, `Der Bus kommt um ${spoken}.`, `Das Spiel beginnt um ${spoken}.`, `Es ist ${spoken}.`])
          : `Es ist ${spoken}.`
      return item({
        mode, band, key: `t${h}:${m}`, say, show: formatTime(h, m), expected: formatTime(h, m),
        readings: timeReadings(h, m), value: { h, m }, informal, answerWords: spoken,
      })
    }
    case 'preise': {
      let e
      let c
      if (band === 1) {
        if (rng() < 0.3) {
          e = 0
          c = int(rng, 1, 9) * 10
        } else {
          e = int(rng, 1, 20)
          c = 0
        }
      } else if (band === 2) {
        e = int(rng, 1, 19)
        c = pick(rng, [50, 99, 49, 95, 25, 75, 90])
      } else {
        e = band === 3 ? int(rng, 1, 99) : int(rng, 100, 999)
        c = pick(rng, [0, 5, 10, 15, 20, 25, 29, 35, 40, 45, 49, 50, 55, 60, 65, 70, 75, 79, 80, 85, 89, 90, 95, 99])
      }
      const cents = e * 100 + c
      const w = priceWords(cents)
      const say = pick(rng, [`Das kostet ${w}.`, `Das macht ${w}, bitte.`, `Zusammen ${w}.`, `Nur ${w}!`])
      return item({ mode, band, key: `p${cents}`, say, show: formatPrice(cents), expected: formatPrice(cents), readings: priceReadings(cents), value: cents, answerWords: w })
    }
    case 'datum': {
      const maxDay = band === 1 ? 10 : band === 2 ? 19 : 31
      const mo = int(rng, 1, 12)
      const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][mo - 1]
      const d = int(rng, 1, Math.min(maxDay, days))
      const frame = band === 1 ? 'nom' : rng() < 0.5 ? 'nom' : 'dat'
      const year = band === 4 ? int(rng, 1990, 2030) : null
      const w = dateWords(d, mo, frame, year)
      const say =
        frame === 'nom'
          ? pick(rng, [`Heute ist ${w}.`, `Morgen ist ${w}.`])
          : pick(rng, [`Ich habe ${w} Geburtstag.`, `Der Kurs beginnt ${w}.`, `Wir fahren ${w} in den Urlaub.`, `Der Termin ist ${w}.`])
      const lead = frame === 'nom' ? 'Heute ist der' : 'Der Kurs beginnt am'
      return item({
        mode, band, key: `d${d}.${mo}.${year || ''}`, say,
        show: `${lead} ${year ? `${d}.${mo}.${year}` : `${d}. ${MONTHS[mo - 1]}`}.`,
        lead, expected: year ? `${d}.${mo}.${year}` : `${d}.${mo}.`,
        readings: dateReadings(d, mo, frame, year), value: { d, m: mo, y: year }, frame, answerWords: w,
      })
    }
    case 'telefon': {
      const groups =
        band === 1 ? [4] : band === 2 ? [3, 4] : band === 3 ? [4, 3, 4] : [5, 3, 3]
      const parts = groups.map((len, gi) =>
        Array.from({ length: len }, (_, i) => (gi === 0 && i === 0 && band >= 3 ? '0' : String(int(rng, 0, 9)))).join(''),
      )
      if (band >= 3) parts[0] = '01' + parts[0].slice(2)
      const digits = parts.join(' ')
      const say = phoneWords(digits, { zwo: band >= 3 })
      return item({ mode, band, key: `f${digits}`, say: `Meine Nummer ist ${say}.`, show: digits, expected: digits, readings: [], value: digits.replace(/\s/g, ''), rate: band === 4 ? 1.05 : null })
    }
    default:
      throw new Error(`unknown mode ${mode}`)
  }
}

function item(o) {
  return { ...o }
}

/** A round of distinct items (no repeated value inside one round). */
export function makeRound(mode, band, count = 10, rng = Math.random) {
  const out = []
  const seen = new Set()
  let guard = 0
  while (out.length < count && guard++ < count * 20) {
    const it = makeItem(mode, band, rng)
    if (seen.has(it.key)) continue
    seen.add(it.key)
    out.push(it)
  }
  return out
}

/* ── Grading ─────────────────────────────────────────────────────────────── */

/**
 * @param item       from makeItem
 * @param input      what the learner typed
 * @param direction  'listen' (typed digits) | 'write' (typed German words)
 * @returns {{correct:boolean, expected:string, words:string, note?:string}}
 */
export function gradeItem(item, input, direction = 'listen') {
  const words = item.answerWords || item.say.replace(/^(Im Jahr |Meine Nummer ist )/, '').replace(/\.$/, '')
  const base = { expected: item.expected, words: cap(words) }
  const raw = String(input ?? '').trim()
  if (!raw) return { ...base, correct: false }

  if (direction === 'write') {
    const strip = (s) => numberKey(String(s).replace(/^(es ist|um|heute ist|der kurs beginnt am|im jahr)\s+/i, ''))
    const given = strip(raw)
    const ok = item.readings.some((r) => strip(r) === given)
    if (ok) {
      const spaced = /\s/.test(raw) && item.mode === 'zahlen' && !/\s/.test(item.readings[0])
      return { ...base, correct: true, note: spaced ? 'Right — and German writes it as one word.' : undefined }
    }
    const primary = item.answerWords || item.readings[0]
    let note = writeHint(item, raw)
    if (item.mode === 'uhrzeit') {
      const { h, m } = item.value
      if (item.informal) note = `${note} Also right: *${timeFormal(h, m)}*.`
      else if (m % 5 === 0) note = `${note} Also right: *${timeInformal(h, m)}*.`
    }
    return { ...base, correct: false, words: cap(primary), note }
  }

  switch (item.mode) {
    case 'zahlen': {
      const n = Number(raw.replace(/[.\s']/g, ''))
      return { ...base, correct: n === item.value, note: n !== item.value ? listenHint(item, n) : undefined }
    }
    case 'uhrzeit': {
      const t = parseTime(raw)
      const { h, m } = item.value
      if (!t) return { ...base, correct: false, note: 'Type the time like 7:15.' }
      const sameMinute = t.m === m
      const exact = sameMinute && t.h === h
      const sameClock = sameMinute && t.h % 12 === h % 12
      if (exact || sameClock) {
        const note = !exact && !item.informal ? `In 24-hour time that is ${formatTime(h, m)}.` : undefined
        return { ...base, correct: true, note }
      }
      return { ...base, correct: false, note: timeHint(item, t) }
    }
    case 'preise': {
      const c = parsePrice(raw)
      if (c == null) return { ...base, correct: false, note: 'Type the price like 3,99.' }
      return { ...base, correct: c === item.value, note: c !== item.value ? 'Listen for the euros first, then the cents — "Euro" sits in the middle.' : undefined }
    }
    case 'datum': {
      const d = parseDate(raw)
      const v = item.value
      if (!d) return { ...base, correct: false, note: 'Type the date like 3.5. or 3. Mai.' }
      const ok = d.d === v.d && d.m === v.m && (!v.y || d.y === v.y)
      return { ...base, correct: ok, note: ok ? undefined : 'Ordinals: erste, zweite, dritte … neunzehnte, then -ste from zwanzigste.' }
    }
    case 'telefon': {
      const digits = raw.replace(/\D/g, '')
      const ok = digits === item.value
      return { ...base, correct: ok, note: ok ? undefined : '"zwo" means 2 — Germans say it on the phone so it is not confused with "drei".' }
    }
    default:
      return { ...base, correct: false }
  }
}

function listenHint(item, n) {
  const v = item.value
  if (Number.isFinite(n) && v >= 21 && v <= 99) {
    const swapped = (v % 10) * 10 + Math.floor(v / 10)
    if (n === swapped) return 'German says the ones first: einundzwanzig = one-and-twenty = 21.'
  }
  if (Number.isFinite(n) && v >= 13 && v <= 19 && n === (v - 10) * 10) return '-zehn is the teens (13–19), -zig the tens (30, 40 …).'
  if (Number.isFinite(n) && v >= 30 && v < 100 && v % 10 === 0 && n === v / 10 + 10) return '-zig is the tens (30, 40 …), -zehn the teens.'
  return undefined
}

function timeHint(item, t) {
  const { h, m } = item.value
  if (item.informal && m === 30 && t.m === 30 && t.h % 12 === (h + 1) % 12) return '"halb acht" is half TO eight — 7:30, not 8:30.'
  if (item.informal && (m === 25 || m === 35)) return '"fünf vor halb acht" = five before half-to-eight = 7:25.'
  if (item.informal && m === 45) return '"Viertel vor acht" = a quarter before eight = 7:45.'
  return undefined
}

function writeHint(item, raw) {
  if (item.mode === 'zahlen') {
    const v = item.value
    if (v >= 21 && v <= 99 && v % 10) return 'Ones first, then "und", then the tens: einundzwanzig.'
    if (v % 100 === 1 && v > 100) return 'A final 1 is "eins": hunderteins.'
    return 'Write the whole number as one word.'
  }
  if (item.mode === 'uhrzeit') return '"halb" points to the NEXT hour: 7:30 = halb acht.'
  if (item.mode === 'preise') return 'Euros, then "Euro", then the cents: drei Euro neunundneunzig.'
  if (item.mode === 'datum')
    return item.frame === 'dat'
      ? 'After "am" the ordinal ends in -en: am dritten Mai.'
      : 'After "der" the ordinal ends in -e: der dritte Mai.'
  return undefined
}

/* ── Adaptive band ───────────────────────────────────────────────────────── */

/** Three right in a row moves up a band, two wrong in a row moves down — same rule as lessons. */
export function nextBand(band, { rightStreak, wrongStreak }) {
  if (rightStreak >= 3) return Math.min(4, band + 1)
  if (wrongStreak >= 2) return Math.max(1, band - 1)
  return band
}
