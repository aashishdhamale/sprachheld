/**
 * B1 · L23 — Reading: a small town that wants to produce almost no rubbish.
 *
 * A local-news feature with the lesson's grammar woven through: adjective
 * endings after every kind of article (die kleine Stadt, ein großes Ziel,
 * kaputte Toaster), verbs with prepositions (sich engagieren für, sich
 * ärgern über) and a relative clause or two, plus the passive from L22.
 *
 * Exercise ids: x.b1.l23.20 … x.b1.l23.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.b1.l23.stadt-ohne-muell',
  level: 'B1',
  title: 'Eine Stadt ohne Müll?',
  titleEn: 'A town without rubbish?',
  minutes: 6,
  intro:
    'A small German town wants to produce almost no waste by 2030. Read how a shop without packaging and a repair café are helping — and what the critics say.',
  paragraphs: [
    'Die kleine Stadt Friedberg hat ein großes Ziel: Bis 2030 soll es dort fast keinen Müll mehr geben. Viele Bürgerinnen und Bürger engagieren sich für das Projekt, das vor zwei Jahren von einer Gruppe junger Eltern gestartet wurde.',
    'Im Zentrum gibt es jetzt einen kleinen Laden, in dem man Lebensmittel ohne Verpackung kaufen kann. Man bringt eigene Gläser und Dosen mit und füllt Reis, Nudeln oder Kaffee selbst ab. „Am Anfang war das ungewohnt“, sagt die Kundin Petra Lang, „aber heute möchte ich nicht mehr anders einkaufen.“',
    'Jeden ersten Samstag im Monat findet im alten Rathaus ein Reparatur-Café statt. Freiwillige Helfer reparieren dort kaputte Toaster, alte Fahrräder und Kleidung. „Viele Leute ärgern sich darüber, dass neue Geräte so schnell kaputtgehen“, erklärt der Organisator Jens Müller. „Bei uns lernen sie, wie man sie selbst repariert.“',
    'Natürlich gibt es auch Kritik. Einige Einwohner finden, dass das Projekt zu viel Geld kostet. Trotzdem sind die Ergebnisse gut: Seit dem Start ist die Menge an Müll in Friedberg um ein Drittel kleiner geworden.',
  ],
  glossary: [
    { de: 'die Bürgerinnen und Bürger', en: 'citizens' },
    { de: 'die Verpackung', en: 'packaging' },
    { de: 'abfüllen', en: 'to fill (into a container)' },
    { de: 'ungewohnt', en: 'unfamiliar, strange at first' },
    { de: 'freiwillig', en: 'voluntary' },
    { de: 'kaputtgehen', en: 'to break, to stop working' },
    { de: 'die Einwohner', en: 'inhabitants' },
    { de: 'die Menge', en: 'amount, quantity' },
    { de: 'ein Drittel', en: 'a third' },
  ],
  questions: [
    {
      id: 'x.b1.l23.20',
      kind: 'mcq',
      prompt: 'Was ist das Ziel von Friedberg?',
      options: ['Bis 2030 soll es fast keinen Müll mehr geben.', 'Die Stadt soll größer werden.', 'Es soll mehr Geschäfte geben.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The colon after ein großes Ziel announces it: Bis 2030 soll es dort fast keinen Müll mehr geben. kein … mehr = no more, not any longer.',
    },
    {
      id: 'x.b1.l23.21',
      kind: 'mcq',
      prompt: 'Was ist besonders an dem Laden im Zentrum?',
      options: ['Man kauft Lebensmittel ohne Verpackung.', 'Alles ist sehr billig.', 'Er ist nur am Samstag geöffnet.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['relativsatz'],
      explain:
        'The relative clause in dem man Lebensmittel ohne Verpackung kaufen kann describes the shop. Saturday belongs to the repair café, not the shop.',
    },
    {
      id: 'x.b1.l23.22',
      kind: 'mcq',
      prompt: 'Was passiert im Reparatur-Café?',
      options: ['Freiwillige reparieren kaputte Sachen.', 'Man kann dort neue Geräte kaufen.', 'Man trinkt dort Kaffee aus der Region.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['adjektivendungen'],
      explain:
        'Freiwillige Helfer reparieren dort kaputte Toaster, alte Fahrräder und Kleidung. No article in front of the plural nouns, so the adjectives take the strong -e: kaputte, alte.',
    },
    {
      id: 'x.b1.l23.23',
      kind: 'blank',
      sentence: 'Viele Leute ärgern sich ___, dass neue Geräte so schnell kaputtgehen.',
      options: ['darüber', 'dafür', 'daran', 'darauf'],
      answer: 'darüber',
      skill: 'reading',
      difficulty: 2,
      tags: ['praeposition'],
      explain:
        'sich ärgern über — and when a whole dass-clause follows, the preposition becomes da(r) + über: darüber points forward to the clause.',
    },
    {
      id: 'x.b1.l23.24',
      kind: 'mcq',
      prompt: 'Wie hat sich die Menge an Müll verändert?',
      options: ['Sie ist um ein Drittel kleiner geworden.', 'Sie ist gleich geblieben.', 'Sie ist um ein Drittel größer geworden.'],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      tags: ['komparativ'],
      explain:
        'Trotzdem sind die Ergebnisse gut — despite the criticism. um ein Drittel kleiner geworden: um gives the size of the change, and werden in the Perfekt is ist … geworden.',
    },
  ],
}

export default reading
