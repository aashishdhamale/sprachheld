/**
 * A1 · L08 — Reading: a real German flat advertisement.
 *
 * The text a learner actually meets on ImmoScout: rooms, square metres, rent.
 * Short main clauses, present tense only, every plural visible (Zimmer,
 * Fenster, Stühle) so the grammar of the lesson is on the page.
 *
 * Exercise ids x.a1.l08.20 … 23.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l08.wohnungsanzeige',
  level: 'A1',
  title: '3-Zimmer-Wohnung in Leipzig',
  titleEn: 'Three-room flat in Leipzig',
  minutes: 4,
  intro:
    'You are looking for a flat in Leipzig. This advert is online today — read it the way a German reader does: rooms first, then the rent.',
  paragraphs: [
    'Wir vermieten eine Wohnung in Leipzig. Die Wohnung hat drei Zimmer, eine Küche und ein Bad. Sie ist 72 Quadratmeter groß.',
    'Das Wohnzimmer ist groß und sehr hell. Es hat zwei Fenster und einen Balkon. Das Schlafzimmer ist klein, aber ruhig.',
    'Die Küche ist neu. Ein Tisch und vier Stühle sind schon da.',
    'Die Miete kostet 640 Euro im Monat. Das Haus hat einen Garten. Rufen Sie uns an!',
  ],
  glossary: [
    { de: 'vermieten', en: 'to rent out (the landlord does this)' },
    { de: 'der Quadratmeter', en: 'square metre — German ads always give the size' },
    { de: 'der Balkon', en: 'balcony (plural: die Balkone)' },
    { de: 'ruhig', en: 'quiet' },
    { de: 'schon da', en: 'already there — the furniture stays in the flat' },
    { de: 'im Monat', en: 'per month' },
    { de: 'der Garten', en: 'garden (plural: die Gärten)' },
    { de: 'Rufen Sie uns an!', en: 'Call us! (polite form of anrufen)' },
  ],
  questions: [
    {
      id: 'x.a1.l08.20',
      kind: 'mcq',
      prompt: 'Wie viele Zimmer hat die Wohnung?',
      options: ['Drei.', 'Zwei.', 'Vier.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The first paragraph says "Die Wohnung hat drei Zimmer". In a German advert the kitchen and the bathroom are listed separately and are never counted as Zimmer.',
    },
    {
      id: 'x.a1.l08.21',
      kind: 'blank',
      sentence: 'Die ___ kostet 640 Euro im Monat.',
      options: ['Miete', 'Küche', 'Lampe', 'Tür'],
      answer: 'Miete',
      skill: 'reading',
      difficulty: 2,
      tags: ['nominativ'],
      explain:
        'die Miete is the money you pay every month. It is the subject of the sentence — wer oder was kostet 640 Euro? — so it keeps the nominative article die.',
    },
    {
      id: 'x.a1.l08.22',
      kind: 'mcq',
      prompt: 'Was ist richtig?',
      options: [
        'Das Wohnzimmer hat zwei Fenster.',
        'Das Schlafzimmer hat zwei Fenster.',
        'Die Küche hat zwei Fenster.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'The text says "Es hat zwei Fenster". The pronoun es points back to the last neuter subject, das Wohnzimmer — that is how German avoids repeating the noun.',
    },
    {
      id: 'x.a1.l08.23',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Ein Tisch und vier Stühle sind schon da.',
      answer: 'A table and four chairs are already there.',
      accept: ['There are already a table and four chairs.'],
      skill: 'reading',
      difficulty: 3,
      hint: 'Two things, so the verb is plural.',
      explain:
        'Stühle is the plural of der Stuhl (-e plus Umlaut). Because two things are listed, the verb is plural: sind, not ist.',
    },
  ],
}

export default reading
