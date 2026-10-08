/**
 * A rule-based German error checker.
 *
 * It is deliberately *narrow*: it only fires on mistakes that beginners make
 * constantly and that can be detected with high confidence. A checker that
 * stays quiet is far better than one that "corrects" correct German, so every
 * rule below is written to under-report rather than over-report.
 *
 * checkGerman(text) -> Issue[]
 *   Issue = { tag, skill, wrong, right, why, severity }
 */

import { fold, normalize, words } from '../lib/text.js'

/* ── Small lexicon ───────────────────────────────────────────────────────── */

const PRONOUNS = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie', 'Sie', 'man']

// person index: 0=ich 1=du 2=er/sie/es 3=wir 4=ihr 5=sie/Sie
const PERSON_OF = {
  ich: 0,
  du: 1,
  er: 2,
  sie: 2, // ambiguous with 3rd plural — handled below
  es: 2,
  man: 2,
  wir: 3,
  ihr: 4,
}

const IRREGULAR = {
  sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
  haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
  werden: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'],
  können: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
  müssen: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
  wollen: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
  sollen: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
  dürfen: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
  mögen: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
  fahren: ['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren'],
  essen: ['esse', 'isst', 'isst', 'essen', 'esst', 'essen'],
  lesen: ['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'],
  sprechen: ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'],
  nehmen: ['nehme', 'nimmst', 'nimmt', 'nehmen', 'nehmt', 'nehmen'],
  geben: ['gebe', 'gibst', 'gibt', 'geben', 'gebt', 'geben'],
  sehen: ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen'],
  schlafen: ['schlafe', 'schläfst', 'schläft', 'schlafen', 'schlaft', 'schlafen'],
  laufen: ['laufe', 'läufst', 'läuft', 'laufen', 'lauft', 'laufen'],
  wissen: ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'],
}

/** Every finite verb form we can recognise -> its infinitive + person. */
const FINITE = new Map()
for (const [inf, forms] of Object.entries(IRREGULAR)) {
  forms.forEach((f, p) => {
    if (!FINITE.has(fold(f))) FINITE.set(fold(f), [])
    FINITE.get(fold(f)).push({ inf, person: p })
  })
}

const REGULAR_VERBS = [
  'kommen', 'wohnen', 'heißen', 'lernen', 'arbeiten', 'machen', 'spielen', 'kaufen',
  'kochen', 'trinken', 'hören', 'brauchen', 'suchen', 'fragen', 'sagen', 'zahlen',
  'bezahlen', 'wandern', 'reisen', 'tanzen', 'warten', 'studieren', 'telefonieren',
  'buchstabieren', 'verstehen', 'gehen', 'stehen', 'finden', 'trinken', 'bleiben',
  'schreiben', 'bestellen', 'besuchen', 'schwimmen', 'singen', 'holen', 'zeigen',
  'regnen', 'schneien', 'scheinen', 'dauern', 'kosten', 'passen', 'gehören',
  'putzen', 'duschen', 'aufstehen', 'anfangen', 'wechseln', 'buchen', 'melden',
]

function conjugateRegular(inf, person) {
  const stem = inf.replace(/e?n$/, '')
  // A linking -e- appears after -d/-t, and after -m/-n only when the letter
  // before it is a consonant other than l, m, n, r, h:
  //   arbeit → arbeitet, atm → atmet, rechn → rechnet
  //   but wohn → wohnt, lern → lernt, komm → kommt
  const needsE = /[dt]$/.test(stem) || (/[mn]$/.test(stem) && !/[lmnrh][mn]$/.test(stem))
  const e = needsE ? 'e' : ''
  const sEnd = /[sßxz]$/.test(stem) ? 't' : e + 'st'
  switch (person) {
    case 0: return stem + 'e'
    case 1: return stem + sEnd
    case 2: return stem + e + 't'
    case 3: return inf
    case 4: return stem + e + 't'
    case 5: return inf
    default: return inf
  }
}

for (const inf of REGULAR_VERBS) {
  for (let p = 0; p < 6; p++) {
    const f = fold(conjugateRegular(inf, p))
    if (!FINITE.has(f)) FINITE.set(f, [])
    FINITE.get(f).push({ inf, person: p })
  }
}

const PREP_CASE = {
  aus: 'D', bei: 'D', mit: 'D', nach: 'D', seit: 'D', von: 'D', zu: 'D',
  gegenüber: 'D', ab: 'D',
  durch: 'A', für: 'A', gegen: 'A', ohne: 'A', um: 'A', bis: 'A', entlang: 'A',
}

const SUBORDINATORS = [
  'weil', 'dass', 'wenn', 'ob', 'obwohl', 'damit', 'bevor', 'nachdem', 'während',
  'als', 'sobald', 'solange', 'falls', 'seitdem', 'bis',
]

const COORDINATORS = ['und', 'aber', 'oder', 'denn', 'sondern']

const W_WORDS = ['wer', 'was', 'wo', 'wann', 'wie', 'warum', 'woher', 'wohin', 'welche', 'welcher', 'welches', 'wieso', 'weshalb', 'wen', 'wem', 'wessen']

// Stored folded, because every lookup folds the token first — an umlaut here
// would simply never match.
const MODALS = new Set(
  [
  'kann', 'kannst', 'können', 'könnt', 'konnte', 'konntest', 'konnten',
  'muss', 'musst', 'müssen', 'müsst', 'musste', 'mussten',
  'will', 'willst', 'wollen', 'wollt', 'wollte', 'wollten',
  'soll', 'sollst', 'sollen', 'sollt', 'sollte', 'sollten',
  'darf', 'darfst', 'dürfen', 'dürft', 'durfte', 'durften',
  'mag', 'magst', 'mögen', 'mögt',
  'möchte', 'möchtest', 'möchten', 'möchtet',
  'werde', 'wirst', 'wird', 'werden', 'werdet',
  // Konjunktiv II — the B1 politeness and wish forms
  'würde', 'würdest', 'würden', 'würdet', 'könnte', 'könntest', 'könnten', 'könntet',
  'müsste', 'müsstest', 'müssten', 'dürfte', 'dürften', 'sollte', 'solltest',
  'hätte', 'hättest', 'hätten', 'hättet', 'wäre', 'wärst', 'wären', 'wärt',
    'lass', 'lasst', 'lassen',
  ].map(fold),
)

/* ── Tokenising ──────────────────────────────────────────────────────────── */

const strip = (t) => String(t).replace(/[.,!?;:„“"'»«]/g, '')

/**
 * Split a sentence into clauses. German coordination (*und*, *aber*, …) and
 * commas each start a new clause, and every clause gets its own verb — so the
 * single-verb and verb-second rules must look at clauses, never whole
 * sentences, or perfectly good German gets flagged.
 */
function clauses(sentence) {
  // Quoted material ("Ich heiße …" ist die Antwort) is a noun phrase here, not
  // a clause — drop it before splitting rather than reading its verb.
  const cleaned = sentence.replace(/[„"“»][^„"“”«»]*[”“"«]/g, ' ')
  const toks = cleaned.trim().replace(/[.!?]+$/, '').split(/\s+/).filter(Boolean)
  const parts = []
  const closed = new Set() // segments ended by punctuation or a dash
  let cur = []
  for (const t of toks) {
    const bare = fold(strip(t))
    // A dash separates two independent clauses just as a comma does.
    if (/^[—–-]$/.test(t)) {
      if (cur.length) {
        parts.push(cur)
        closed.add(cur)
      }
      cur = []
      continue
    }
    const endsClause = /[,:;]$/.test(t)
    if (COORDINATORS.includes(bare) && cur.length) {
      parts.push(cur)
      // Keep the conjunction at the head of the next clause: it is the marker
      // that tells the agreement rule a coordinated subject may follow.
      cur = [t]
      continue
    }
    cur.push(t)
    if (endsClause) {
      parts.push(cur)
      closed.add(cur)
      cur = []
    }
  }
  if (cur.length) parts.push(cur)

  // "Meine Frau und ich kochen…" is one clause with a coordinated subject, not
  // two clauses. A fragment without its own verb belongs to its neighbour.
  const out = []
  for (const p of parts) {
    const hasVerb = p.some((_, i) => finiteAt(p, i))
    // "…, wenn ich nach München ziehe" — a subordinate clause is a clause of
    // its own even when its verb is one we do not know.
    const ownClause = SUBORDINATORS.includes(fold(strip(p[0] || '')))
    if (!hasVerb && ownClause) out.push(p)
    else if (!hasVerb && out.length) out[out.length - 1] = out[out.length - 1].concat(p)
    else if (!hasVerb && parts.length > 1) out.push(p) // leading fragment; merged below
    else out.push(p)
  }
  // A leading verbless fragment merges forward into the clause that follows —
  // but only a true fragment. A segment closed by punctuation was a clause of
  // its own whose verb we simply do not recognise, and merging it would drag
  // the next clause's verb into the wrong sentence position.
  if (
    out.length > 1 &&
    !/[,:;]$/.test(out[0][out[0].length - 1] || '') &&
    !closed.has(out[0]) &&
    !out[0].some((_, i) => finiteAt(out[0], i))
  ) {
    const head = out.shift()
    out[0] = head.concat(out[0])
  }
  return out.filter((c) => c.length)
}

/** Past participles, including the ones that take no ge-. */
const PARTICIPLE =
  /^(ge[a-zäöüß]+(t|en)|[a-zäöüß]+iert|(be|ver|ent|er|emp|miss|zer|über|unter|durch|um|wider)[a-zäöüß]+(t|en))$/i

/** An -en form that a modal or werden in the same clause governs. */
function isGovernedInfinitive(toks, i) {
  const bare = fold(strip(toks[i]))
  if (!/e?n$/.test(bare)) return false
  const cands = FINITE.get(bare) || []
  if (!cands.some((c) => c.person === 3 || c.person === 5)) return false
  return toks.some((t) => MODALS.has(fold(strip(t))))
}

/**
 * Is this token a finite verb *here*?
 *
 * German capitalises nouns, and plenty of nouns share a spelling with a verb
 * form — *die Fragen* / *wir fragen*, *eine Frage* / *ich frage*. A capitalised
 * word that is not sentence-initial is a noun, full stop.
 */
function finiteAt(tokens, i) {
  const raw = strip(tokens[i])
  if (!raw) return null
  const capitalised = raw[0] === raw[0].toUpperCase() && /[a-zäöüß]/i.test(raw[0])
  if (i > 0 && capitalised) return null
  // A capitalised -en word opening a statement is a nominalised infinitive
  // acting as the subject: *Wandern finde ich toll.*, *Schwimmen ist super.*
  // In a question it really is the verb: *Können Sie das buchstabieren?*
  if (i === 0 && capitalised && /e?n$/.test(raw) && !MODALS.has(fold(raw))) {
    const lastTok = tokens[tokens.length - 1] || ''
    if (!/\?$/.test(lastTok)) return null
  }
  return FINITE.get(fold(raw)) || null
}

/** An -en form sitting at the end of a clause is an infinitive, not a 2nd verb. */
function isTrailingInfinitive(tokens, i) {
  if (i !== tokens.length - 1) return false
  const bare = fold(strip(tokens[i]))
  if (!/e?n$/.test(bare)) return false
  const cands = FINITE.get(bare) || []
  return cands.some((c) => c.person === 3 || c.person === 5)
}

/** *ihr* is a subject pronoun only when a noun does not follow it. */
function isSubjectPronoun(tokens, i) {
  const bare = fold(strip(tokens[i]))
  if (!(bare in PERSON_OF)) return false
  if (bare === 'ihr') {
    const prev = fold(strip(tokens[i - 1] || ''))
    if (PREP_CASE[prev] || ['an', 'auf', 'in', 'über', 'unter', 'vor', 'hinter', 'neben', 'zwischen'].map(fold).includes(prev)) return false
    const next = strip(tokens[i + 1] || '')
    // "Ihr Mann", "ihr Auto" → possessive. "Ihr kommt" → pronoun.
    if (next && next[0] === next[0].toUpperCase() && /[a-zäöüß]/i.test(next[0])) return false
  }
  return true
}

/* ── Rules ───────────────────────────────────────────────────────────────── */

/**
 * @param {string} text  one sentence (or a short utterance) of learner German
 * @param {{lexicon?: Map<string,object>}} [opts]  optional noun→article map
 * @returns {Array<{tag:string,skill:string,wrong:string,right:string,why:string,severity:number}>}
 */
export function checkGerman(text, opts = {}) {
  const raw = String(text || '').trim()
  if (!raw) return []
  const issues = []
  // Work sentence by sentence.
  const sentences = raw.split(/(?<=[.!?])\s+/).filter((s) => s.trim())
  for (const s of sentences) {
    for (const rule of RULES) {
      try {
        const found = rule(s, opts)
        if (found) issues.push(...(Array.isArray(found) ? found : [found]))
      } catch {
        /* a rule must never break the app */
      }
    }
  }
  // De-duplicate by tag+wrong, keep the most severe.
  const seen = new Map()
  for (const i of issues) {
    const k = i.tag + '|' + i.wrong
    if (!seen.has(k) || seen.get(k).severity < i.severity) seen.set(k, i)
  }
  return Array.from(seen.values()).sort((a, b) => b.severity - a.severity).slice(0, 3)
}

const issue = (tag, skill, wrong, right, why, severity = 2) => ({
  tag, skill, wrong, right, why, severity,
})

const RULES = []

/**
 * Verb-second: in a statement the conjugated verb must be the 2nd *element*.
 *
 * "Element" is the trap here — *Um acht Uhr* and *Das Buch* are each ONE
 * element, so counting words would flag perfectly good German. Rather than
 * try to parse constituents, this rule only fires in the one case where the
 * first element is unambiguously a single word: a bare subject pronoun.
 * That still catches the mistake learners actually make
 * (*Ich morgen fahre…*, *Ich aus Indien komme…*) and never fires on a
 * fronted phrase.
 */
RULES.push((s) => {
  if (/[?]$/.test(s.trim())) return null
  for (const toks of clauses(s)) {
    if (toks.length < 3) continue
    const first = fold(strip(toks[0]))
    // Skip questions, subordinate clauses and imperatives — different rules.
    if (W_WORDS.includes(first)) continue
    if (SUBORDINATORS.includes(first)) continue
    // Only judge when position 1 is a single-word subject pronoun; anything
    // else (a noun phrase, a time phrase) is an element we cannot measure.
    if (!isSubjectPronoun(toks, 0)) continue

    let vp = -1
    for (let i = 0; i < toks.length; i++) {
      if (finiteAt(toks, i) && !isTrailingInfinitive(toks, i)) {
        vp = i
        break
      }
    }
    if (vp <= 1) continue // already correct, or a yes/no question

    // The verb must agree with that pronoun, or it is not the clause's verb.
    const verb = strip(toks[vp])
    const cands = finiteAt(toks, vp) || []
    if (!cands.some((c) => c.person === PERSON_OF[first])) continue

    const fixed = [toks[0], verb, ...toks.slice(1, vp), ...toks.slice(vp + 1)]
    return issue(
      'wortstellung',
      'wordorder',
      toks.join(' '),
      capitalise(fixed.join(' ')).replace(/\s+([.!?])/, '$1'),
      `In a German main clause the conjugated verb is always the **second element**. Move “${verb}” right after “${toks[0]}”.`,
      3,
    )
  }
  return null
})

/** Two conjugated verbs in one clause ("Ich bin aus Indien komme"). */
RULES.push((s) => {
  for (const toks of clauses(s)) {
    // A modal or werden licenses a second verb (an infinitive) in the clause.
    if (toks.some((t) => MODALS.has(fold(strip(t))))) continue
    // Perfect / passive: auxiliary + participle is two verbs by design.
    const hasAux = toks.some((t) => /^(habe|hast|hat|haben|habt|bin|bist|ist|sind|seid|war|warst|waren|wart)$/i.test(strip(t)))
    const hasPart = toks.some((t) => PARTICIPLE.test(strip(t)))
    if (hasAux && hasPart) continue
    // zu + Infinitiv
    if (toks.some((t) => fold(strip(t)) === 'zu')) continue

    const finite = []
    for (let i = 0; i < toks.length; i++) {
      if (finiteAt(toks, i) && !isTrailingInfinitive(toks, i)) finite.push(strip(toks[i]))
    }
    if (finite.length < 2) continue
    const [a, b] = finite
    return issue(
      'zwei-verben',
      'grammar',
      toks.join(' '),
      null,
      `A German clause has **one** conjugated verb. You used two: “${a}” and “${b}”. Keep the one that carries the meaning.`,
      3,
    )
  }
  return null
})

/** Subject–verb agreement for recognisable verbs. */
RULES.push((s) => {
  const out = []
  for (const toks of clauses(s)) {
    for (let i = 0; i < toks.length - 1; i++) {
      const p = fold(strip(toks[i]))
      if (p === 'sie') continue // sie sg / sie pl / Sie — ambiguous, skip
      if (!isSubjectPronoun(toks, i)) continue
      // "Meine Frau und ich kochen…" — a coordinated subject is plural, so the
      // pronoun alone does not decide the verb form.
      if (i > 0 && COORDINATORS.includes(fold(strip(toks[i - 1])))) continue
      const person = PERSON_OF[p]
      const nextRaw = strip(toks[i + 1])
      const cands = finiteAt(toks, i + 1)
      if (!cands) continue
      // "…weil ich arbeiten muss" — arbeiten is an infinitive under muss.
      if (isGovernedInfinitive(toks, i + 1)) continue
      if (cands.some((c) => c.person === person)) continue
      // Wrong person: propose the right form of the same infinitive.
      const inf = cands[0].inf
      const right = IRREGULAR[inf] ? IRREGULAR[inf][person] : conjugateRegular(inf, person)
      if (!right || fold(right) === fold(nextRaw)) continue
      out.push(
        issue(
          'konjugation',
          'verbs',
          `${toks[i]} ${nextRaw}`,
          `${toks[i]} ${right}`,
          `With **${toks[i]}**, ${inf} becomes **${right}**.`,
          3,
        ),
      )
    }
  }
  return out.length ? out : null
})

/** "Ich habe 25 Jahre" — age uses sein, not haben. */
RULES.push((s) => {
  const m = s.match(/\b(habe|hast|hat|haben|habt)\b[^.]*\b(\d{1,3})\s*(jahre?|jahren)\b/i)
  if (!m) return null
  return issue(
    'alter',
    'grammar',
    s.trim(),
    s.replace(/\b(habe|hast|hat|haben|habt)\b/i, (v) =>
      ({ habe: 'bin', hast: 'bist', hat: 'ist', haben: 'sind', habt: 'seid' })[v.toLowerCase()] || v,
    ),
    'German states age with **sein**, not haben: *Ich **bin** 25 Jahre alt.*',
    3,
  )
})

/** kommen von <country> → kommen aus <country>. */
RULES.push((s) => {
  const m = s.match(/\b(komme|kommst|kommt|kommen)\b\s+von\b/i)
  if (!m) return null
  return issue(
    'praeposition',
    'prepositions',
    m[0],
    `${m[1]} aus`,
    'With countries and cities, **kommen** takes **aus**: *Ich komme **aus** Indien.*',
    3,
  )
})

/** wohnen takes in + Dative, not "in" + accusative-looking article. */
RULES.push((s) => {
  const m = s.match(/\b(wohne|wohnst|wohnt|wohnen)\b\s+(in\s+(?:den|das|die)\b)/i)
  if (!m) return null
  return issue(
    'dativ',
    'cases',
    m[0],
    `${m[1]} in dem/der …`,
    '**wohnen** answers *wo?* → Dative: *Ich wohne **in der** Stadt / **im** Zentrum.*',
    2,
  )
})

/** nach Hause vs zu Hause. */
RULES.push((s) => {
  if (!/\bzu\s+hause\b/i.test(s)) return null
  if (!/\b(gehe|gehst|geht|gehen|fahre|fährst|fährt|fahren|komme|kommst|kommt|kommen)\b/i.test(s))
    return null
  // *ankommen* takes zu/bei, not nach: "Ich komme um sechs zu Hause an."
  if (/\ban\b\s*[.!?]?\s*$/i.test(s) || /\bange?kommen\b/i.test(s)) return null
  return issue(
    'nach-zu',
    'prepositions',
    'zu Hause',
    'nach Hause',
    '**nach Hause** = going home (movement). **zu Hause** = being at home.',
    2,
  )
})

/** ein + feminine / eine + masculine, for nouns we can identify. */
RULES.push((s, opts) => {
  const lex = opts.lexicon
  if (!lex) return null
  const out = []
  const re = /\b(ein|eine|einen|einem|einer|der|die|das|den|dem)\s+([A-ZÄÖÜ][a-zäöüß]+)/g
  let m
  while ((m = re.exec(s)) !== null) {
    const art = m[1].toLowerCase()
    const noun = m[2]
    const entry = lex.get(noun) || lex.get(fold(noun))
    if (!entry?.article) continue
    const g = entry.article // der | die | das
    const ok = ARTICLE_OK[g] || []
    if (ok.includes(art)) continue
    // Many nouns spell their plural exactly like the singular (das Fenster →
    // die Fenster), and every plural takes die/den/der. Never flag those.
    if (entry.plural && fold(entry.plural) === fold(`die ${noun}`)) continue
    const suggest = SUGGEST[g]?.[art]
    if (!suggest) continue
    out.push(
      issue(
        'artikel',
        'articles',
        `${m[1]} ${noun}`,
        `${suggest} ${noun}`,
        `**${noun}** is ${GENDER_NAME[g]} — *${g} ${noun}*.`,
        2,
      ),
    )
  }
  return out.length ? out : null
})

const ARTICLE_OK = {
  der: ['der', 'den', 'dem', 'des', 'ein', 'einen', 'einem', 'eines'],
  die: ['die', 'der', 'eine', 'einer'],
  das: ['das', 'dem', 'des', 'ein', 'einem', 'eines'],
}
const SUGGEST = {
  der: { eine: 'ein', einer: 'einem', die: 'der', das: 'der' },
  die: { ein: 'eine', einen: 'eine', einem: 'einer', der: 'die', das: 'die', den: 'die', dem: 'der' },
  das: { eine: 'ein', einen: 'ein', einer: 'einem', die: 'das', der: 'das', den: 'das' },
}
const GENDER_NAME = { der: 'masculine', die: 'feminine', das: 'neuter' }

/** German nouns are capitalised. Only flag words we know are nouns. */
RULES.push((s, opts) => {
  const lex = opts.lexicon
  if (!lex) return null
  const out = []
  const toks = s.split(/\s+/)
  for (let i = 1; i < toks.length; i++) {
    const w = toks[i].replace(/[.,!?;:]/g, '')
    if (!w || w[0] !== w[0].toLowerCase()) continue
    const entry = lex.get(capitalise(w))
    if (!entry || entry.pos !== 'noun') continue
    out.push(
      issue(
        'grossschreibung',
        'writing',
        w,
        capitalise(w),
        'All German nouns start with a **capital letter**.',
        1,
      ),
    )
  }
  return out.length ? out.slice(0, 1) : null
})

/** Subordinate clause: verb goes to the end after weil / dass / wenn … */
RULES.push((s) => {
  const m = s.match(/,\s*(weil|dass|wenn|obwohl|damit|ob)\s+([^.,!?]+)/i)
  if (!m) return null
  const conj = m[1].toLowerCase()
  const clause = m[2].trim().split(/\s+/)
  if (clause.length < 3) return null
  // The clause is correct when its LAST word is the conjugated verb. Anything
  // earlier that looks verb-ish is an infinitive or participle the final verb
  // governs — *weil ich arbeiten muss*, *dass ich mehr trinken soll*.
  const last = clause[clause.length - 1]
  if (finiteAt(clause, clause.length - 1) || MODALS.has(fold(strip(last)))) return null
  const finiteIdx = clause.findIndex(
    (_, i) => finiteAt(clause, i) && !isGovernedInfinitive(clause, i),
  )
  if (finiteIdx === -1) return null
  if (finiteIdx === clause.length - 1) return null // already at the end
  const verb = strip(clause[finiteIdx])
  const rest = clause.filter((_, i) => i !== finiteIdx)
  return issue(
    'nebensatz',
    'wordorder',
    `${conj} ${clause.join(' ')}`,
    `${conj} ${rest.join(' ')} ${verb}`,
    `After **${conj}** the conjugated verb moves to the **end** of the clause.`,
    3,
  )
})

function dativePluralFollows(rest, lex) {
  const noun = rest
    .trim()
    .split(/\s+/)
    .slice(0, 3)
    .find((t) => /^[A-ZÄÖÜ]/.test(t))
  if (!noun) return false
  const w = noun.replace(/[^A-Za-zÄÖÜäöüß]/g, '')
  const entry = lex?.get(w)
  if (entry?.article && entry.de === w && !(entry.plural && fold(entry.plural) === fold(`die ${w}`))) return false
  return /(en|ern|eln|rn|ln)$/.test(w) || /(os|ys|ls|ts|as)$/.test(w)
}

/** Preposition + wrong case article, for the fixed-case prepositions. */
RULES.push((s, opts) => {
  const out = []
  const re = /\b(aus|bei|mit|nach|seit|von|zu|durch|für|gegen|ohne|um)\s+(den|dem|die|der|das|einen|einem|eine|einer|ein)\b/gi
  let m
  while ((m = re.exec(s)) !== null) {
    const prep = m[1].toLowerCase()
    const art = m[2].toLowerCase()
    const want = PREP_CASE[prep]
    if (!want) continue
    const isAcc = ['den', 'einen'].includes(art)
    const isDat = ['dem', 'einem'].includes(art)
    // "den" is also the Dative PLURAL: *mit den Kindern*, *mit den meisten
    // Punkten*, *mit den Autos*. Skip when the noun has a plural-dative ending
    // — unless the lexicon knows it as a singular (*mit den Garten*).
    if (want === 'D' && art === 'den' && dativePluralFollows(s.slice(m.index + m[0].length), opts?.lexicon)) continue
    if (want === 'D' && isAcc) {
      out.push(
        issue(
          'dativ',
          'cases',
          `${m[1]} ${m[2]}`,
          `${m[1]} ${art === 'den' ? 'dem' : 'einem'}`,
          `**${prep}** always takes the **Dative**: ${prep} dem / der / dem.`,
          3,
        ),
      )
    } else if (want === 'A' && isDat) {
      out.push(
        issue(
          'akkusativ',
          'cases',
          `${m[1]} ${m[2]}`,
          `${m[1]} ${art === 'dem' ? 'den' : 'einen'}`,
          `**${prep}** always takes the **Accusative**: ${prep} den / die / das.`,
          3,
        ),
      )
    }
  }
  return out.length ? out : null
})

/** nicht ein → kein */
RULES.push((s) => {
  const m = s.match(/\bnicht\s+(ein|eine|einen|einem|einer)\b/i)
  if (!m) return null
  const kein = { ein: 'kein', eine: 'keine', einen: 'keinen', einem: 'keinem', einer: 'keiner' }[
    m[1].toLowerCase()
  ]
  return issue(
    'negation',
    'grammar',
    m[0],
    kein,
    'Negate a noun with **kein-**, not *nicht ein*: *Ich habe **kein** Auto.*',
    3,
  )
})

/** Missing subject pronoun ("Bin Student" instead of "Ich bin Student"). */
RULES.push((s) => {
  const toks = s.trim().replace(/[.!?]+$/, '').split(/\s+/)
  if (toks.length < 2 || toks.length > 6) return null
  if (/[?]$/.test(s.trim())) return null
  const first = fold(toks[0])
  if (!FINITE.has(first)) return null
  const cands = FINITE.get(first)
  if (!cands.some((c) => c.person === 0)) return null // only flag clear "ich" forms
  if (toks.some((t) => PRONOUNS.includes(fold(t)))) return null
  return issue(
    'subjekt',
    'grammar',
    s.trim(),
    `Ich ${s.trim()[0].toLowerCase()}${s.trim().slice(1)}`,
    'German always needs a subject: *__Ich__ bin …*, *__Ich__ komme …*',
    2,
  )
})

/* ── Comparing a learner answer with the model answer ────────────────────── */

/**
 * Explain the difference between what the learner wrote and the expected
 * sentence, in one sentence. Returns null when nothing useful can be said.
 */
export function explainMistake(given, expected) {
  if (!given || !expected) return null
  const issues = checkGerman(given)
  if (issues.length) return issues[0].why

  const g = words(given)
  const e = words(expected)

  // Same multiset, different order → point at the verb position.
  const gs = g.slice().sort().join(' ')
  const es = e.slice().sort().join(' ')
  if (gs === es && g.join(' ') !== e.join(' ')) {
    const verbIdx = e.findIndex((t) => FINITE.has(t))
    if (verbIdx === 1) {
      return `Word order: the conjugated verb “${e[1]}” belongs in **position 2** — right after “${capitalise(e[0])}”.`
    }
    return 'All the right words — but German word order puts them differently here.'
  }

  const missing = e.filter((w) => !g.includes(w))
  const extra = g.filter((w) => !e.includes(w))

  if (missing.length === 1 && extra.length === 1) {
    return `Use **${missing[0]}** instead of *${extra[0]}*.`
  }
  if (missing.length === 1 && !extra.length) {
    return `You are missing **${missing[0]}**.`
  }
  if (!missing.length && extra.length === 1) {
    return `**${extra[0]}** is not needed here.`
  }
  if (normalize(given) === normalize(expected)) return null
  return null
}

/**
 * Score a free-text reply in a conversation: did the learner say what the turn
 * asked for, and is the German clean?
 */
export function reviewReply(text, turn, opts = {}) {
  const issues = checkGerman(text, opts)
  const n = normalize(text)
  let onTarget = true
  const req = turn?.requires
  if (req?.any?.length) onTarget = req.any.some((k) => n.includes(normalize(k)))
  if (onTarget && req?.all?.length) onTarget = req.all.every((k) => n.includes(normalize(k)))
  return { issues, onTarget, empty: !n }
}

function capitalise(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s
}

export { conjugateRegular, FINITE, PERSON_OF, IRREGULAR, SUBORDINATORS, COORDINATORS, W_WORDS }
