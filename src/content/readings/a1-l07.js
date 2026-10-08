/**
 * A1 · L07 — Shopping and money
 *
 * A shopping list plus a short note on where each thing gets bought. Every
 * sentence is present tense, and three of them start with the object or a
 * place so the learner sees the verb hold position 2 in real text.
 *
 * Exercise ids: x.a1.l07.19 … x.a1.l07.22
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l07.einkaufsliste',
  level: 'A1',
  title: 'Meine Einkaufsliste',
  titleEn: 'My shopping list',
  minutes: 3,
  intro: 'Nils writes his Saturday shopping list and notes where he buys what.',
  paragraphs: [
    'Einkaufsliste: ein Kilo Tomaten, zwei Flaschen Wasser, eine Packung Kaffee und Brot.',
    'Das Brot kaufe ich in der Bäckerei. Es ist nicht billig, aber sehr gut. Die Tomaten kaufe ich auf dem Markt. Wasser und Kaffee kaufe ich im Supermarkt. Im Supermarkt kostet ein Kilo Tomaten drei Euro — das ist zu teuer. Ich bezahle immer mit Karte. Eine Tüte brauche ich nicht.',
  ],
  glossary: [
    { de: 'die Einkaufsliste', en: 'the shopping list' },
    { de: 'in der Bäckerei', en: 'at the bakery' },
    { de: 'auf dem Markt', en: 'at the market' },
    { de: 'im Supermarkt', en: 'at the supermarket' },
    { de: 'zu teuer', en: 'too expensive' },
    { de: 'mit Karte bezahlen', en: 'to pay by card' },
  ],
  questions: [
    {
      id: 'x.a1.l07.19',
      kind: 'mcq',
      prompt: 'Wo kauft Nils das Brot?',
      options: ['In der Bäckerei.', 'Im Supermarkt.', 'Auf dem Markt.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain: 'The text says „Das Brot kaufe ich in der Bäckerei." The object Brot stands first, so the verb kaufe is still the second element.',
    },
    {
      id: 'x.a1.l07.20',
      kind: 'blank',
      sentence: 'Im Supermarkt kostet ein Kilo Tomaten ___ Euro.',
      options: ['drei', 'zwei', 'vier'],
      answer: 'drei',
      skill: 'reading',
      difficulty: 2,
      explain: 'The price stands in the fifth sentence: drei Euro. Nils calls that zu teuer, which is why he buys tomatoes at the market instead.',
    },
    {
      id: 'x.a1.l07.21',
      kind: 'mcq',
      prompt: 'Wie bezahlt Nils?',
      options: ['Mit Karte.', 'Bar.', 'Mit einer Tüte.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain: '„Ich bezahle immer mit Karte." The two fixed answers to this question are always bar or mit Karte — you never need a preposition with bar.',
    },
    {
      id: 'x.a1.l07.22',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Eine Tüte brauche ich nicht.',
      answer: 'I do not need a bag.',
      accept: ['I do not need a carrier bag.', 'I need no bag.'],
      skill: 'reading',
      difficulty: 3,
      hint: 'Which word is the subject — eine Tüte or ich?',
      explain: 'German may put the object first for emphasis, so eine Tüte opens the sentence but ich is still the subject. English cannot copy that, so it becomes "I do not need a bag."',
    },
  ],
}

export default reading
