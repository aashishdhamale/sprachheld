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
    const voice = opts.voice || picked
    u.lang = voice?.lang || 'de-DE'
    if (voice) u.voice = voice
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

/* ── Several speakers (exam dialogues) ───────────────────────────────────── */

const MALE_VOICE = /stefan|conrad|killian|hans|markus|florian|ralf|jonas|bernd|klaus|yannick|male|männlich/i
const FEMALE_VOICE = /hedda|katja|anna|petra|marlene|vicki|amala|seraphina|helena|sabine|louisa|female|weiblich/i
// With only one German voice installed, pitch is all we have to tell people apart.
const PITCH = { f: 1.15, f2: 1.32, m: 0.82, m2: 0.68, n: 1 }

function germanVoices() {
  if (!voices.length) loadVoices()
  return voices.filter((v) => /^de(-|_|$)/i.test(v.lang || ''))
}

/**
 * Speak one line as a given speaker: f / f2 (women), m / m2 (men), n (announcer).
 * Uses a matching voice when more than one German voice is installed.
 */
export function speakAs(text, { speaker = 'n', rate, onend } = {}) {
  const de = germanVoices()
  let voice = null
  if (de.length > 1) {
    voice = speaker.startsWith('m') ? de.find((v) => MALE_VOICE.test(v.name)) : de.find((v) => FEMALE_VOICE.test(v.name))
  }
  const pitch = voice ? (speaker.endsWith('2') ? (speaker.startsWith('m') ? 0.85 : 1.15) : 1) : PITCH[speaker] ?? 1
  return speak(text, { rate, onend, voice, pitch })
}

/* ── Speech recognition (speaking practice) ──────────────────────────────── */

/**
 * Keep listening until stopped — for speaking tasks longer than one sentence.
 * onText receives the full transcript so far (final + current interim).
 */
export function listenLong({ onText, onError, onEnd } = {}) {
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
  rec.interimResults = true
  rec.continuous = true
  let finals = ''
  rec.onresult = (e) => {
    let interim = ''
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript
      if (e.results[i].isFinal) finals += (finals ? ' ' : '') + t.trim()
      else interim += t
    }
    onText?.((finals + (interim ? ' ' + interim.trim() : '')).trim())
  }
  rec.onerror = (e) => onError?.(e.error || 'error')
  rec.onend = () => onEnd?.(finals)
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
  }
}

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
