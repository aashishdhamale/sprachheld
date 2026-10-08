/**
 * German audio without audio files: Web Speech API text-to-speech, plus
 * optional speech recognition for the speaking exercises.
 * Everything degrades silently when the browser has no support.
 */

let voices = []
let picked = null
let warmed = false

function loadVoices() {
  if (typeof speechSynthesis === 'undefined') return []
  voices = speechSynthesis.getVoices() || []
  picked = pickGermanVoice(voices)
  return voices
}

function pickGermanVoice(list) {
  const de = list.filter((v) => /^de(-|_|$)/i.test(v.lang || ''))
  if (!de.length) return null
  // Prefer a de-DE voice, then a local one, then anything German.
  return (
    de.find((v) => /de[-_]DE/i.test(v.lang) && v.localService) ||
    de.find((v) => /de[-_]DE/i.test(v.lang)) ||
    de.find((v) => v.localService) ||
    de[0]
  )
}

if (typeof speechSynthesis !== 'undefined') {
  loadVoices()
  speechSynthesis.addEventListener?.('voiceschanged', loadVoices)
}

export function ttsSupported() {
  return typeof speechSynthesis !== 'undefined' && typeof SpeechSynthesisUtterance !== 'undefined'
}

export function hasGermanVoice() {
  if (!ttsSupported()) return false
  if (!voices.length) loadVoices()
  return !!picked
}

export function germanVoiceName() {
  return picked?.name || null
}

/**
 * Speak German text.
 * @param {string} text
 * @param {{rate?:number, onend?:Function, onstart?:Function}} opts
 * @returns {boolean} whether speech was actually started
 */
export function speak(text, opts = {}) {
  if (!ttsSupported() || !text) return false
  try {
    speechSynthesis.cancel()
    // Chrome needs a nudge after a long idle period.
    if (!warmed) {
      warmed = true
      speechSynthesis.resume?.()
    }
    if (!voices.length) loadVoices()
    const u = new SpeechSynthesisUtterance(String(text))
    u.lang = picked?.lang || 'de-DE'
    if (picked) u.voice = picked
    u.rate = opts.rate ?? 0.95
    u.pitch = opts.pitch ?? 1
    u.volume = opts.volume ?? 1
    if (opts.onstart) u.onstart = opts.onstart
    if (opts.onend) {
      u.onend = opts.onend
      u.onerror = opts.onend
    }
    speechSynthesis.speak(u)
    return true
  } catch {
    return false
  }
}

export function stopSpeaking() {
  if (ttsSupported()) {
    try {
      speechSynthesis.cancel()
    } catch {
      /* ignore */
    }
  }
}

/** Speak a multi-line dialogue one line after another. */
export function speakSequence(lines, opts = {}) {
  if (!ttsSupported() || !lines?.length) return () => {}
  let cancelled = false
  let i = 0
  const next = () => {
    if (cancelled || i >= lines.length) {
      if (!cancelled) opts.onend?.()
      return
    }
    const line = lines[i++]
    opts.onLine?.(i - 1)
    speak(line, { rate: opts.rate, onend: next })
  }
  next()
  return () => {
    cancelled = true
    stopSpeaking()
  }
}

/* ── Speech recognition (speaking practice) ──────────────────────────────── */

function RecognitionCtor() {
  if (typeof window === 'undefined') return null
  return window.SpeechRecognition || window.webkitSpeechRecognition || null
}

export function sttSupported() {
  return !!RecognitionCtor()
}

/**
 * Listen for one German utterance.
 * @returns {{stop:Function}|null}
 */
export function listenOnce({ onResult, onError, onEnd, interim = true } = {}) {
  const Ctor = RecognitionCtor()
  if (!Ctor) {
    onError?.('unsupported')
    return null
  }
  let rec
  try {
    rec = new Ctor()
  } catch {
    onError?.('unsupported')
    return null
  }
  rec.lang = 'de-DE'
  rec.interimResults = interim
  rec.maxAlternatives = 3
  rec.continuous = false

  rec.onresult = (e) => {
    const res = e.results[e.results.length - 1]
    const alts = Array.from(res).map((a) => a.transcript)
    onResult?.({ text: alts[0] || '', alternatives: alts, final: res.isFinal })
  }
  rec.onerror = (e) => onError?.(e.error || 'error')
  rec.onend = () => onEnd?.()

  try {
    rec.start()
  } catch {
    onError?.('start-failed')
    return null
  }
  return {
    stop: () => {
      try {
        rec.stop()
      } catch {
        /* ignore */
      }
    },
    abort: () => {
      try {
        rec.abort()
      } catch {
        /* ignore */
      }
    },
  }
}
