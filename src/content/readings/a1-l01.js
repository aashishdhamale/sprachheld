/**
 * A1 · L01 — Reading: Anna introduces herself.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l01.anna',
  level: 'A1',
  title: 'Das bin ich',
  minutes: 3,
  intro: 'Anna is new at the hospital. She introduces herself in three sentences — read them and answer the questions.',
  paragraphs: [
    'Hallo! Ich heiße Anna Bergmann. Ich bin 28 Jahre alt. Ich komme aus Österreich und wohne jetzt in Hamburg. Ich bin Ärztin und arbeite im Krankenhaus.',
    'Meine Kollegen sind sehr nett. Am Morgen sage ich immer „Guten Morgen“, und am Abend sage ich „Tschüss“. Wie heißen Sie? Und woher kommen Sie?',
  ],
  glossary: [
    { de: 'Jahre alt', en: 'years old' },
    { de: 'die Ärztin', en: 'doctor (female)' },
    { de: 'das Krankenhaus', en: 'hospital' },
    { de: 'die Kollegen', en: 'the colleagues' },
    { de: 'nett', en: 'nice, friendly' },
    { de: 'sagen', en: 'to say' },
    { de: 'immer', en: 'always' },
    { de: 'jetzt', en: 'now' },
  ],
  questions: [
    {
      id: 'x.a1.l01.14',
      kind: 'mcq',
      prompt: 'Wo wohnt Anna jetzt?',
      options: ['In Hamburg.', 'In Österreich.', 'Im Krankenhaus.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain: 'She writes "wohne jetzt in Hamburg" — wohnen tells you where someone lives, while kommen aus tells you where they started.',
    },
    {
      id: 'x.a1.l01.15',
      kind: 'blank',
      sentence: 'Anna ist ___ Jahre alt.',
      answer: '28',
      accept: ['achtundzwanzig'],
      skill: 'reading',
      difficulty: 1,
      hint: 'Look for the sentence with sein and a number.',
      explain: 'German states age with sein, not haben — "Ich bin 28 Jahre alt", so the gap takes the number itself.',
    },
    {
      id: 'x.a1.l01.16',
      kind: 'mcq',
      prompt: 'Was sagt Anna am Abend?',
      options: ['Tschüss', 'Guten Morgen', 'Freut mich'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain: 'The text pairs the time with the phrase: "Am Morgen … Guten Morgen, und am Abend … Tschüss." Greetings in German depend on the time of day.',
    },
    {
      id: 'x.a1.l01.17',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Meine Kollegen sind sehr nett.',
      answer: 'My colleagues are very nice.',
      accept: ['My colleagues are very friendly.', 'My colleagues are very kind.'],
      skill: 'reading',
      difficulty: 3,
      hint: 'Kollegen is plural, so the verb is the plural form of sein.',
      explain: 'A plural subject takes sind, the wir/sie form of sein — English "are" is one word for several forms, German picks the form from the subject.',
    },
  ],
}

export default reading
