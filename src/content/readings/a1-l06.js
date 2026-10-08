/**
 * A1 · L06 — Reading: the lunch menu of a small restaurant.
 *
 * A menu is the friendliest A1 text there is: nouns with their articles,
 * prices the learner already knows from L03, and two full sentences of context
 * around it. Present tense only, one clause per sentence.
 *
 * Exercise ids 20-23 belong to this file (the lesson owns 1-19).
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l06.mittagskarte',
  level: 'A1',
  title: 'Die Mittagskarte',
  titleEn: 'The lunch menu',
  minutes: 4,
  intro:
    'The restaurant „Sonne“ prints a small lunch menu every week. Read it like a real guest: first the prices, then the two sentences around them.',
  paragraphs: [
    'Das Restaurant „Sonne“ ist klein und freundlich. Von Montag bis Freitag gibt es ein Mittagsmenü.',
    'Vorspeise: Tomatensuppe — 3,50 Euro. Gemischter Salat mit Käse — 4,20 Euro.',
    'Hauptgericht: Fleisch mit Kartoffeln und Gemüse — 9,80 Euro. Nudeln mit Tomaten — 7,50 Euro.',
    'Getränke: Kaffee — 2,40 Euro. Apfelsaft — 2,80 Euro. Wasser — 2,00 Euro.',
    'Der Kellner bringt die Speisekarte und später die Rechnung. Das Essen schmeckt hier immer lecker.',
  ],
  glossary: [
    { de: 'das Mittagsmenü', en: 'the set lunch' },
    { de: 'die Vorspeise', en: 'starter' },
    { de: 'das Hauptgericht', en: 'main course' },
    { de: 'das Getränk', en: 'drink' },
    { de: 'die Kartoffel', en: 'potato' },
    { de: 'die Nudeln', en: 'pasta, noodles' },
    { de: 'gemischt', en: 'mixed' },
    { de: 'kosten', en: 'to cost' },
  ],
  questions: [
    {
      id: 'x.a1.l06.20',
      kind: 'mcq',
      prompt: 'Was kostet die Tomatensuppe?',
      options: ['3,50 Euro', '4,20 Euro', '2,40 Euro'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The soup stands under Vorspeise (starter) with 3,50 Euro next to it. 4,20 belongs to the salad on the same line, so read to the end of each item.',
    },
    {
      id: 'x.a1.l06.21',
      kind: 'blank',
      sentence: 'Der Kellner bringt die Speisekarte und später ___ Rechnung.',
      options: ['die', 'den', 'das', 'dem'],
      answer: 'die',
      skill: 'reading',
      difficulty: 2,
      tags: ['akkusativ', 'artikel'],
      explain:
        'Rechnung ends in -ung, so it is feminine, and feminine keeps die in the accusative — only masculine der ever turns into den.',
    },
    {
      id: 'x.a1.l06.22',
      kind: 'mcq',
      prompt: 'Was kostet mehr: der Kaffee oder das Wasser?',
      options: ['Der Kaffee.', 'Das Wasser.', 'Beide kosten gleich viel.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      hint: 'Both prices stand in the line under Getränke.',
      explain:
        'Coffee is 2,40 Euro and water is 2,00 Euro, so the coffee is the more expensive one. In German prices the comma is the decimal point.',
    },
    {
      id: 'x.a1.l06.23',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Das Essen schmeckt hier immer lecker.',
      answer: 'The food here always tastes delicious.',
      accept: [
        'The food always tastes delicious here.',
        'The food here always tastes good.',
        'The food always tastes good here.',
        'The food here always tastes really good.',
      ],
      skill: 'reading',
      difficulty: 3,
      hint: 'The food is the subject of schmecken, not the person eating it.',
      explain:
        'schmecken belongs to the food: das Essen schmeckt. A German never says "ich schmecke das Essen" for "I like the taste".',
    },
  ],
}

export default reading
