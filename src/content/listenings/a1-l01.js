/**
 * A1 · L01 — Listening: reception desk at a language school.
 *
 * Every line is short and easy for the browser TTS voice to speak.
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l01.sprachschule',
  level: 'A1',
  title: 'An der Rezeption',
  minutes: 3,
  intro: 'Maria arrives at a language school. The man at the reception desk greets her. Listen twice before you answer.',
  script: [
    { who: 'Herr Roth', text: 'Guten Morgen! Willkommen in der Sprachschule.' },
    { who: 'Maria', text: 'Guten Morgen! Ich bin neu hier.' },
    { who: 'Herr Roth', text: 'Wie heißen Sie, bitte?' },
    { who: 'Maria', text: 'Ich heiße Maria Santos.' },
    { who: 'Herr Roth', text: 'Freut mich, Frau Santos. Ich bin Herr Roth.' },
    { who: 'Maria', text: 'Freut mich auch. Wie geht es Ihnen?' },
    { who: 'Herr Roth', text: 'Danke, sehr gut. Und Ihnen?' },
    { who: 'Maria', text: 'Danke, auch gut. Auf Wiedersehen!' },
    { who: 'Herr Roth', text: 'Auf Wiedersehen, Frau Santos!' },
  ],
  transcriptHidden: true,
  questions: [
    {
      id: 'x.a1.l01.18',
      kind: 'mcq',
      prompt: 'What time of day is it?',
      options: ['Morning', 'Afternoon', 'Evening'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain: 'Both speakers open with "Guten Morgen" — the German greeting itself tells you the time of day, so listening to the first word is enough.',
    },
    {
      id: 'x.a1.l01.19',
      kind: 'mcq',
      prompt: 'What is the woman called?',
      options: ['Maria Santos', 'Maria Roth', 'Maria Sander'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain: 'She answers "Ich heiße Maria Santos". Roth is the man at the desk — after heißen comes the speaker’s own name.',
    },
    {
      id: 'x.a1.l01.20',
      kind: 'mcq',
      prompt: 'How do the two speak to each other?',
      options: [
        'Formally, with Sie',
        'Informally, with du',
        'She uses du, he uses Sie',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain: 'You hear "Wie heißen Sie?" and "Wie geht es Ihnen?" from both sides — Sie and Ihnen are the formal pair, and strangers plus surnames always mean Sie.',
    },
    {
      id: 'x.a1.l01.21',
      kind: 'blank',
      sentence: 'Herr Roth sagt: „Danke, sehr ___.“',
      answer: 'gut',
      skill: 'listening',
      difficulty: 3,
      hint: 'It is the normal answer to Wie geht es Ihnen?',
      explain: 'gut is the standard reply to Wie geht es Ihnen?, and sehr makes it stronger — sehr gut means "very well".',
    },
  ],
}

export default listening
