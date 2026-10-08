/**
 * Text helpers for comparing what the learner typed with what German expects.
 * Forgiving about punctuation, spacing, case and umlaut transliteration —
 * strict about the actual words.
 */

const UMLAUT_MAP = { ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' }

/** Lowercase + strip umlauts, so "Grüße" and "Gruesse" both match. */
export function fold(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => UMLAUT_MAP[c])
}

/** Canonical form for comparison: folded, punctuation-free, single-spaced. */
export function normalize(s) {
  return fold(s)
    .replace(/[.,!?;:¡¿"'`´’“”„…()\[\]{}\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** True when the learner's answer matches the expected string closely enough. */
export function sameAnswer(given, expected) {
  return normalize(given) === normalize(expected)
}

/** Match against a primary answer plus any number of accepted variants. */
export function matchesAny(given, answer, accept = []) {
  const all = [answer, ...(accept || [])].filter((a) => a != null)
  return all.some((a) => sameAnswer(given, a))
}

/** Levenshtein distance, capped for speed. */
export function distance(a, b) {
  a = normalize(a)
  b = normalize(b)
  if (a === b) return 0
  const m = a.length
  const n = b.length
  if (!m) return n
  if (!n) return m
  let prev = Array.from({ length: n + 1 }, (_, i) => i)
  const cur = new Array(n + 1)
  for (let i = 1; i <= m; i++) {
    cur[0] = i
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost)
    }
    prev = cur.slice()
  }
  return prev[n]
}

/** "Almost right" — same words but a typo or two. Used for gentle feedback. */
export function isNearMiss(given, expected) {
  const g = normalize(given)
  const e = normalize(expected)
  if (!g || !e) return false
  if (g === e) return false
  const d = distance(g, e)
  return d > 0 && d <= Math.max(1, Math.round(e.length * 0.12))
}

/** Split a German sentence into comparable word tokens. */
export function words(s) {
  return normalize(s).split(' ').filter(Boolean)
}

/** Same words, different order — the classic word-order mistake. */
export function sameWordsDifferentOrder(given, expected) {
  const g = words(given).slice().sort()
  const e = words(expected).slice().sort()
  return g.length === e.length && g.every((w, i) => w === e[i]) && !sameAnswer(given, expected)
}

/** Which words the learner is missing / has extra, for targeted feedback. */
export function wordDiff(given, expected) {
  const g = words(given)
  const e = words(expected)
  const gc = new Map()
  g.forEach((w) => gc.set(w, (gc.get(w) || 0) + 1))
  const missing = []
  e.forEach((w) => {
    const n = gc.get(w) || 0
    if (n > 0) gc.set(w, n - 1)
    else missing.push(w)
  })
  const extra = []
  gc.forEach((n, w) => {
    for (let i = 0; i < n; i++) extra.push(w)
  })
  return { missing, extra }
}

/** Capitalise the first letter (tokens arrive lowercase from the sentence builder). */
export function capFirst(s) {
  if (!s) return s
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/** Join sentence-builder tokens into a readable sentence. */
export function joinTokens(tokens) {
  const raw = tokens.join(' ').replace(/\s+([,.!?])/g, '$1').trim()
  return capFirst(raw)
}

/** Very small markdown subset used inside content strings. */
export function inlineMarkup(text) {
  const parts = []
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g
  let last = 0
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ t: 'text', v: text.slice(last, m.index) })
    const tok = m[0]
    if (tok.startsWith('**')) parts.push({ t: 'b', v: tok.slice(2, -2) })
    else if (tok.startsWith('`')) parts.push({ t: 'code', v: tok.slice(1, -1) })
    else parts.push({ t: 'i', v: tok.slice(1, -1) })
    last = m.index + tok.length
  }
  if (last < text.length) parts.push({ t: 'text', v: text.slice(last) })
  return parts
}

/** Deterministic shuffle so a re-render does not reorder the options. */
export function seededShuffle(arr, seedStr) {
  let h = 2166136261
  const s = String(seedStr)
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  const rand = () => {
    h ^= h << 13
    h ^= h >>> 17
    h ^= h << 5
    return ((h >>> 0) % 100000) / 100000
  }
  const out = arr.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}
