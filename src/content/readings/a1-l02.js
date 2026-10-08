/**
 * A1 · L02 — Reading: three short profiles.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a1.l02.drei-profile',
  level: 'A1',
  title: 'Drei Profile',
  minutes: 3,
  intro: 'Three people at the same language school introduce themselves in writing.',
  paragraphs: [
    'Das ist Priya Sharma. Sie kommt aus Indien und wohnt jetzt in Frankfurt. Priya ist Ärztin und spricht Englisch, Hindi und ein bisschen Deutsch.',
    'Marek Nowak kommt aus Polen. Er wohnt in Wien und arbeitet dort als Ingenieur. Marek ist 34 Jahre alt und spricht sehr gut Deutsch.',
    'Sofia Rossi kommt aus Italien und wohnt in Hamburg. Sie ist Studentin und 22 Jahre alt. Sofia spricht Italienisch und Englisch.',
  ],
  glossary: [
    { de: 'jetzt', en: 'now' },
    { de: 'dort', en: 'there' },
    { de: 'ein bisschen', en: 'a little' },
    { de: 'sehr gut', en: 'very well' },
    { de: 'Jahre alt', en: 'years old' },
    { de: 'als', en: 'as (introducing a job)' },
  ],
  questions: [
    {
      id: 'x.a1.l02.14',
      kind: 'mcq',
      prompt: 'Woher kommt Priya?',
      options: ['Aus Indien.', 'Aus Italien.', 'Aus Polen.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['w-fragen'],
      explain: 'woher asks for the country of origin, and the text answers it with kommen + aus: "Sie kommt aus Indien." Frankfurt is only where she lives now.',
    },
    {
      id: 'x.a1.l02.15',
      kind: 'blank',
      sentence: 'Priya kommt ___ Indien und wohnt in Frankfurt.',
      options: ['aus', 'in', 'als', 'von'],
      answer: 'aus',
      skill: 'reading',
      difficulty: 2,
      tags: ['praeposition'],
      explain: 'Countries of origin always take aus after kommen, while the town you live in takes in after wohnen. The two prepositions are never swapped.',
    },
    {
      id: 'x.a1.l02.16',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Marek wohnt in Wien und arbeitet dort als Ingenieur.',
      answer: 'Marek lives in Vienna and works there as an engineer.',
      accept: ['Marek lives in Vienna and works as an engineer there.'],
      skill: 'reading',
      difficulty: 2,
      tags: ['praesens'],
      explain: 'One German present tense covers both "lives" and "is living"; als introduces the job and, unlike English, needs no article after it.',
    },
    {
      id: 'x.a1.l02.17',
      kind: 'mcq',
      prompt: 'Which sentence matches the text?',
      options: [
        'Sofia wohnt in Hamburg und ist 22 Jahre alt.',
        'Marek wohnt in Hamburg und ist 22 Jahre alt.',
        'Priya kommt aus Italien und wohnt in Wien.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      tags: ['praesens'],
      explain: 'Reading for detail means checking every fact against the same person: only Sofia is paired with Hamburg and with 22 Jahre alt in the text.',
    },
  ],
}

export default reading
