/**
 * A1 · L10 — Listening: a tourist stops a passer-by in the street.
 *
 * Short spoken lines built for the de-DE text-to-speech voice: one instruction
 * per line, and the key details (erste Straße links, zehn Minuten, an der Ecke)
 * are each said exactly once, so every question has one defensible answer.
 *
 * Exercise ids 23-26 belong to this file.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l10.wo-ist-der-bahnhof',
  level: 'A1',
  title: 'Wie komme ich zum Bahnhof?',
  titleEn: 'How do I get to the station?',
  minutes: 3,
  intro:
    'A tourist stops a woman on the street and asks the way to the station. Listen for the street, the direction and the number of minutes.',
  transcriptHidden: true,
  script: [
    { who: 'Tourist', text: 'Entschuldigung, wie komme ich zum Bahnhof?' },
    { who: 'Passantin', text: 'Zum Bahnhof? Gehen Sie hier geradeaus.' },
    { who: 'Passantin', text: 'Dann nehmen Sie die erste Straße links.' },
    { who: 'Tourist', text: 'Die erste Straße links. Und dann?' },
    { who: 'Passantin', text: 'An der Ecke ist eine Bank. Der Bahnhof ist gegenüber.' },
    { who: 'Tourist', text: 'Ist das weit?' },
    { who: 'Passantin', text: 'Nein, zehn Minuten zu Fuß.' },
    { who: 'Passantin', text: 'Sie können auch den Bus nehmen, Linie 3.' },
    { who: 'Tourist', text: 'Vielen Dank!' },
    { who: 'Passantin', text: 'Bitte schön. Gute Fahrt!' },
  ],
  questions: [
    {
      id: 'x.a1.l10.23',
      kind: 'mcq',
      prompt: 'Wohin möchte der Tourist?',
      options: ['Zum Bahnhof.', 'Zum Flughafen.', 'Zur Post.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'His very first sentence is "wie komme ich zum Bahnhof?" — in a Wie komme ich …? question the word after zum or zur names the destination.',
    },
    {
      id: 'x.a1.l10.24',
      kind: 'mcq',
      prompt: 'Welche Straße nimmt er?',
      options: ['Die erste Straße links.', 'Die erste Straße rechts.', 'Die zweite Straße links.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'She says "die erste Straße links" and he repeats it back. The number comes before the street, the direction word after it — both have to match.',
    },
    {
      id: 'x.a1.l10.25',
      kind: 'mcq',
      prompt: 'Wie viele Minuten sind es zu Fuß?',
      options: ['Zehn Minuten.', 'Drei Minuten.', 'Zwanzig Minuten.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      hint: 'The bus line is a number too — do not mix them up.',
      explain:
        'She answers "Nein, zehn Minuten zu Fuß". The other number in the text, 3, belongs to the bus line, not to the walking time.',
    },
    {
      id: 'x.a1.l10.26',
      kind: 'mcq',
      prompt: 'Was ist an der Ecke?',
      options: ['Eine Bank.', 'Eine Apotheke.', 'Eine Haltestelle.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'She says "An der Ecke ist eine Bank. Der Bahnhof ist gegenüber." — the bank marks the corner and the station stands opposite it.',
    },
  ],
}

export default listening
