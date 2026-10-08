/**
 * A1 · L09 — Reading: a short weekend forecast plus a plan.
 *
 * Present tense only, one clause per sentence. Every weather sentence shows
 * the empty subject es, and both modal verbs put their infinitive last.
 *
 * Exercise ids x.a1.l09.20 … x.a1.l09.23.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l09.wochenende',
  level: 'A1',
  title: 'Das Wetter am Wochenende',
  titleEn: 'The weather at the weekend',
  minutes: 4,
  intro:
    'A short forecast from a city website — and underneath it, what one reader is planning to do with the two days.',
  paragraphs: [
    'Das Wetter am Wochenende: Am Samstag scheint die Sonne. Es ist warm, wir haben zweiundzwanzig Grad.',
    'Am Sonntag kommt der Regen. Es regnet den ganzen Tag, und der Wind ist kalt.',
    'Mein Plan: Am Samstag möchte ich mit Lena im Park Fußball spielen. Danach kochen wir zusammen.',
    'Am Sonntag kann ich leider nicht wandern. Ich bleibe zu Hause, höre Musik und fotografiere meine Katze.',
  ],
  glossary: [
    { de: 'die Sonne scheint', en: 'the sun is shining' },
    { de: 'der Grad', en: 'degree — zweiundzwanzig Grad = 22 degrees' },
    { de: 'den ganzen Tag', en: 'all day long' },
    { de: 'der Wind', en: 'wind' },
    { de: 'danach', en: 'after that' },
    { de: 'zusammen', en: 'together' },
    { de: 'zu Hause bleiben', en: 'to stay at home' },
    { de: 'die Katze', en: 'cat' },
  ],
  questions: [
    {
      id: 'x.a1.l09.20',
      kind: 'mcq',
      prompt: 'Wie ist das Wetter am Samstag?',
      options: ['Die Sonne scheint.', 'Es regnet.', 'Es schneit.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The first paragraph says "Am Samstag scheint die Sonne". The sun has its own verb in German — scheinen — so that sentence alone tells you Saturday is the dry day.',
    },
    {
      id: 'x.a1.l09.21',
      kind: 'blank',
      sentence: 'Am Samstag ___ ich im Park Fußball spielen.',
      options: ['möchte', 'möchtest', 'möchten', 'möchtet'],
      answer: 'möchte',
      skill: 'reading',
      difficulty: 2,
      tags: ['modalverben'],
      explain:
        'ich takes möchte with no ending at all. Am Samstag already fills position 1, so the modal verb has to follow immediately and spielen waits at the end.',
    },
    {
      id: 'x.a1.l09.22',
      kind: 'mcq',
      prompt: 'Was macht die Person am Sonntag?',
      options: ['Sie bleibt zu Hause.', 'Sie wandert.', 'Sie spielt Fußball.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Sunday is the rainy day, and the text says "Ich kann leider nicht wandern. Ich bleibe zu Hause." The weather decides the plan, so the hiking is the thing that does not happen.',
    },
    {
      id: 'x.a1.l09.23',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Es ist warm, wir haben zweiundzwanzig Grad.',
      answer: 'It is warm, we have twenty-two degrees.',
      accept: [
        'It is warm, it is twenty-two degrees.',
        'It is warm, we have 22 degrees.',
        'It is warm, it is 22 degrees.',
      ],
      skill: 'reading',
      difficulty: 3,
      hint: 'German says "we have" where English says "it is".',
      explain:
        'Temperatures are stated with haben in German — wir haben 22 Grad — and the number is read back to front: zwei-und-zwanzig is literally "two-and-twenty".',
    },
  ],
}

export default reading
