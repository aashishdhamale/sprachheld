/**
 * B1 · L24 — Listening: a job interview at a hotel reception.
 *
 * Thirteen lines through the classic interview stages: motivation, career
 * so far, languages, strengths, weaknesses, start date. Herr Okafor tells
 * his past in the Präteritum like someone who has rehearsed it; the
 * interviewer closes with a Futur I.
 *
 * Exercise ids: x.b1.l24.25 … x.b1.l24.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.b1.l24.vorstellungsgespraech',
  level: 'B1',
  title: 'Ein Vorstellungsgespräch im Hotel',
  titleEn: 'A job interview at a hotel',
  minutes: 4,
  intro:
    'Herr Okafor has applied for a job at a hotel reception. Listen for why he applied, what he did after his training, the weakness he names, and when he can start.',
  transcriptHidden: true,
  script: [
    { who: 'Frau Krüger', text: 'Guten Tag, Herr Okafor. Bitte nehmen Sie Platz. Warum haben Sie sich bei uns beworben?' },
    { who: 'Herr Okafor', text: 'Ich arbeite gern mit Menschen, und Ihr Hotel hat einen sehr guten Ruf.' },
    { who: 'Frau Krüger', text: 'Was haben Sie bisher gemacht?' },
    { who: 'Herr Okafor', text: 'Nach der Schule machte ich eine Ausbildung als Hotelfachmann in Hamburg. Danach arbeitete ich zwei Jahre an der Rezeption eines kleinen Hotels.' },
    { who: 'Frau Krüger', text: 'Welche Sprachen sprechen Sie?' },
    { who: 'Herr Okafor', text: 'Englisch und Französisch fließend, und mein Deutsch ist inzwischen auch sehr gut.' },
    { who: 'Frau Krüger', text: 'Was sind Ihre Stärken?' },
    { who: 'Herr Okafor', text: 'Ich bin zuverlässig und bleibe auch in stressigen Situationen ruhig.' },
    { who: 'Frau Krüger', text: 'Und Ihre Schwächen?' },
    { who: 'Herr Okafor', text: 'Manchmal bin ich zu ungeduldig. Aber ich arbeite daran.' },
    { who: 'Frau Krüger', text: 'Ab wann könnten Sie bei uns anfangen?' },
    { who: 'Herr Okafor', text: 'Mein jetziger Vertrag endet am 31. März, also ab dem 1. April.' },
    { who: 'Frau Krüger', text: 'Sehr gut. Sie werden in den nächsten Tagen von uns hören.' },
  ],
  questions: [
    {
      id: 'x.b1.l24.25',
      kind: 'mcq',
      prompt: 'Warum hat sich Herr Okafor beworben?',
      options: [
        'Er arbeitet gern mit Menschen, und das Hotel hat einen guten Ruf.',
        'Er möchte mehr Geld verdienen.',
        'Er wohnt in der Nähe des Hotels.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'His first answer gives two reasons joined by und: working with people, and the hotel’s good reputation (der gute Ruf). Money is never mentioned.',
    },
    {
      id: 'x.b1.l24.26',
      kind: 'mcq',
      prompt: 'Was machte er nach der Ausbildung?',
      options: ['Er arbeitete zwei Jahre an einer Rezeption.', 'Er studierte in Hamburg.', 'Er machte ein Praktikum in Frankreich.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      tags: ['praeteritum'],
      explain:
        'Danach arbeitete ich zwei Jahre an der Rezeption eines kleinen Hotels — Präteritum, the way a prepared CV story sounds. Hamburg is where he trained, not where he studied.',
    },
    {
      id: 'x.b1.l24.27',
      kind: 'mcq',
      prompt: 'Was sagt er über seine Schwäche?',
      options: ['Er ist manchmal zu ungeduldig.', 'Er spricht nicht gut Englisch.', 'Er ist oft unpünktlich.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Manchmal bin ich zu ungeduldig — and, in good interview style, he adds that he is working on it: Aber ich arbeite daran.',
    },
    {
      id: 'x.b1.l24.28',
      kind: 'mcq',
      prompt: 'Ab wann kann er anfangen?',
      options: ['Ab dem 1. April.', 'Ab dem 31. März.', 'Sofort.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'The 31st of March is when his current contract ends; the start date follows after also: ab dem ersten April.',
    },
  ],
}

export default listening
