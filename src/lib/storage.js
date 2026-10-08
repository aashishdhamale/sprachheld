/** Safe localStorage wrappers — never throw, even in private mode. */

export function load(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key)
    if (raw == null) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

/* ── Day helpers (local time, not UTC — the streak should follow the user) ── */

export function todayKey(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Whole days since the epoch, in local time. SRS scheduling unit. */
export function dayNumber(d = new Date()) {
  const local = new Date(d.getFullYear(), d.getMonth(), d.getDate())
  return Math.floor(local.getTime() / 86400000)
}

export function dayKeyFromNumber(n) {
  return todayKey(new Date(n * 86400000 + new Date().getTimezoneOffset() * 60000))
}

export function daysBetween(aKey, bKey) {
  const a = new Date(aKey + 'T00:00:00')
  const b = new Date(bKey + 'T00:00:00')
  return Math.round((b - a) / 86400000)
}

export function lastNDays(n, from = new Date()) {
  const out = []
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(from)
    d.setDate(d.getDate() - i)
    out.push(todayKey(d))
  }
  return out
}

export function greetingFor(d = new Date()) {
  const h = d.getHours()
  if (h < 11) return { de: 'Guten Morgen', en: 'Good morning', emoji: '☀️' }
  if (h < 18) return { de: 'Guten Tag', en: 'Good day', emoji: '🌤️' }
  return { de: 'Guten Abend', en: 'Good evening', emoji: '🌙' }
}
