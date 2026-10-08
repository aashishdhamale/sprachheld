/**
 * A1 · L10 — Reading: written directions from the station to an office.
 *
 * Every sentence is a polite Sie-request or a simple statement in the present
 * tense, so the learner reads exactly the shape the grammar step teaches:
 * Nehmen Sie …, Gehen Sie …, Das ist …, Die Post ist gegenüber.
 *
 * Exercise ids 19-22 belong to this file.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l10.weg-zum-buero',
  level: 'A1',
  title: 'Der Weg zum Büro',
  titleEn: 'The way to the office',
  minutes: 4,
  intro:
    'Frau Kumar has a meeting tomorrow morning and has never been to the office before. Her colleague writes her the route from the main station.',
  paragraphs: [
    'Liebe Frau Kumar, hier ist der Weg vom Bahnhof zum Büro.',
    'Sie kommen um neun Uhr am Hauptbahnhof an. Nehmen Sie den Ausgang Süd und gehen Sie geradeaus.',
    'Dann sehen Sie links eine Apotheke. Nehmen Sie dort die zweite Straße rechts. Das ist die Gartenstraße.',
    'Unser Büro ist links, Nummer 12. Die Post ist gegenüber. Sie können auch mit dem Bus fahren, Linie 5, vier Haltestellen.',
  ],
  glossary: [
    { de: 'der Weg', en: 'the way, the route' },
    { de: 'der Hauptbahnhof', en: 'the main station' },
    { de: 'der Ausgang', en: 'the exit' },
    { de: 'die Apotheke', en: 'the pharmacy' },
    { de: 'die Post', en: 'the post office' },
    { de: 'gegenüber', en: 'opposite, across the street' },
    { de: 'die Linie', en: 'the line, the (bus) number' },
  ],
  questions: [
    {
      id: 'x.a1.l10.19',
      kind: 'mcq',
      prompt: 'Wo kommt Frau Kumar an?',
      options: ['Am Hauptbahnhof.', 'Am Flughafen.', 'An der Apotheke.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The second paragraph says "Sie kommen um neun Uhr am Hauptbahnhof an". ankommen is separable, so the information sits between kommen and the final an.',
    },
    {
      id: 'x.a1.l10.20',
      kind: 'blank',
      sentence: 'Frau Kumar nimmt die zweite Straße ___.',
      options: ['rechts', 'links', 'geradeaus', 'gegenüber'],
      answer: 'rechts',
      skill: 'reading',
      difficulty: 2,
      explain:
        'The text says "Nehmen Sie dort die zweite Straße rechts". German puts the number in front of the street and the direction word behind it.',
    },
    {
      id: 'x.a1.l10.21',
      kind: 'mcq',
      prompt: 'Was ist gegenüber?',
      options: ['Die Post.', 'Die Apotheke.', 'Der Bahnhof.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'gegenüber means opposite, and the last paragraph says "Die Post ist gegenüber" — so the post office faces the office across the street.',
    },
    {
      id: 'x.a1.l10.22',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Sie können auch mit dem Bus fahren, Linie 5, vier Haltestellen.',
      answer: 'You can also go by bus, line 5, four stops.',
      accept: [
        'You can also take the bus, line 5, four stops.',
        'You can also travel by bus, line 5, four stops.',
      ],
      skill: 'reading',
      difficulty: 3,
      hint: 'mit dem Bus is the fixed chunk for "by bus".',
      explain:
        'German names transport with mit dem / mit der, and after the modal können the second verb fahren has to close the clause.',
    },
  ],
}

export default reading
