/**
 * A1 · L03 — Listening: a station announcement and a question at the counter.
 *
 * Spoken by the browser's German TTS voice, so every line is short and plain.
 */

export const listening = {
  id: 'h.a1.l03.bahnhof',
  level: 'A1',
  title: 'Am Bahnhof',
  minutes: 3,
  intro: 'You are standing at the main station. Listen to the announcement, then to a traveller at the information desk.',
  script: [
    { who: 'Durchsage', text: 'Achtung am Gleis fünf: Der Zug nach München fährt um zehn Uhr dreißig.' },
    { who: 'Durchsage', text: 'Der Zug nach Hamburg kommt heute zwanzig Minuten später.' },
    { who: 'Reisende', text: 'Entschuldigung, wann fährt der nächste Zug nach Köln?' },
    { who: 'Mitarbeiter', text: 'Der nächste Zug nach Köln fährt um Viertel vor elf.' },
    { who: 'Reisende', text: 'Und wie lange dauert die Fahrt?' },
    { who: 'Mitarbeiter', text: 'Die Fahrt dauert zwei Stunden.' },
    { who: 'Reisende', text: 'Vielen Dank! Welches Gleis ist das?' },
    { who: 'Mitarbeiter', text: 'Gleis drei. Gute Reise!' },
  ],
  transcriptHidden: true,
  questions: [
    {
      id: 'x.a1.l03.24',
      kind: 'mcq',
      prompt: 'What time does the train to Munich leave?',
      options: ['10:30', '10:45', '11:00'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['zeitangaben'],
      explain: '„zehn Uhr dreißig" is the digital way of saying the time: the hour first, then the minutes — 10:30.',
    },
    {
      id: 'x.a1.l03.25',
      kind: 'mcq',
      prompt: 'When does the next train to Cologne leave?',
      options: ['At 11:15', 'At 10:45', 'At 10:30'],
      answer: 1,
      skill: 'listening',
      difficulty: 2,
      tags: ['zeitangaben'],
      explain: '„Viertel vor elf" counts backwards from eleven: fifteen minutes before 11:00 is 10:45.',
    },
    {
      id: 'x.a1.l03.26',
      kind: 'mcq',
      prompt: 'How long does the journey to Cologne take?',
      options: ['Twenty minutes', 'One hour', 'Two hours'],
      answer: 2,
      skill: 'listening',
      difficulty: 2,
      tags: ['zeitangaben'],
      explain: 'The answer to „wie lange?" is a length of time: „zwei Stunden". The twenty minutes belong to the delayed Hamburg train.',
    },
    {
      id: 'x.a1.l03.27',
      kind: 'mcq',
      prompt: 'Which platform does the train to Cologne leave from?',
      options: ['Gleis drei', 'Gleis fünf', 'Gleis elf'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      tags: ['zeitangaben'],
      explain: 'Gleis fünf was announced for Munich and elf was part of a time („vor elf") — only „Gleis drei" answers the question about Cologne.',
    },
  ],
}

export default listening
