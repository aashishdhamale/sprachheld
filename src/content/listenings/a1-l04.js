/**
 * A1 · L04 — Family and people
 *
 * h.a1.l04.geschwister — two friends compare their brothers and sisters.
 * Short, fully speakable lines for the de-DE TTS voice.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l04.geschwister',
  level: 'A1',
  title: 'Hast du Geschwister?',
  minutes: 3,
  intro: 'Max and Nina are waiting for the bus and talk about their families.',
  transcriptHidden: true,
  script: [
    { who: 'Max', text: 'Sag mal, Nina, hast du Geschwister?' },
    { who: 'Nina', text: 'Ja, ich habe zwei Brüder. Und du?' },
    { who: 'Max', text: 'Ich habe eine Schwester. Sie heißt Clara.' },
    { who: 'Nina', text: 'Wie alt ist Clara?' },
    { who: 'Max', text: 'Sie ist vierundzwanzig und sie studiert in Leipzig.' },
    { who: 'Nina', text: 'Meine Brüder sind noch klein. Sie sind acht und zehn.' },
    { who: 'Max', text: 'Und wo wohnen deine Eltern?' },
    { who: 'Nina', text: 'Meine Eltern wohnen in Dresden. Meine Brüder auch.' },
  ],
  questions: [
    {
      id: 'x.a1.l04.24',
      kind: 'mcq',
      prompt: 'Wie viele Brüder hat Nina?',
      options: ['Zwei.', 'Einen.', 'Drei.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'Nina says "Ich habe zwei Brüder". The plural Brüder already tells you it is more than one, so the only question left is the number.',
    },
    {
      id: 'x.a1.l04.25',
      kind: 'mcq',
      prompt: 'Wie alt ist Clara?',
      options: ['24', '42', '20'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      hint: 'Which part of vierundzwanzig do you hear first?',
      explain:
        'German says the units before the tens: vier-und-zwanzig = 4 + 20 = 24. Heard word by word it sounds like "four and twenty", which is why learners write 42.',
    },
    {
      id: 'x.a1.l04.26',
      kind: 'mcq',
      prompt: 'Wo wohnen Ninas Eltern?',
      options: ['In Dresden.', 'In Leipzig.', 'In Kiel.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'Two towns are named: Leipzig is where Max’s sister studies, Dresden is where Nina’s parents live. Always link a place to the person who is being talked about.',
    },
    {
      id: 'x.a1.l04.27',
      kind: 'blank',
      sentence: 'Max hat eine ___. Sie heißt Clara.',
      options: ['Schwester', 'Bruder', 'Tochter'],
      answer: 'Schwester',
      skill: 'listening',
      difficulty: 2,
      explain:
        'Max says "Ich habe eine Schwester". The article eine is itself a clue: a masculine noun like Bruder would need einen after haben.',
    },
  ],
}

export default listening
