/**
 * B1 · L23 — Listening: a neighbour explains how rubbish is sorted.
 *
 * Twelve lines of a very German conversation in a stairwell. Every bin
 * comes with a colour adjective in its proper ending (die blaue Tonne, den
 * gelben Sack, die braune Biotonne), and the questions ask which rubbish
 * goes where, when it is collected and why not on Sunday.
 *
 * Exercise ids: x.b1.l23.25 … x.b1.l23.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.b1.l23.muelltrennung',
  level: 'B1',
  title: 'Welcher Müll kommt wohin?',
  titleEn: 'Which rubbish goes where?',
  minutes: 4,
  intro:
    'Frau Sato has just moved in. Her neighbour Herr Wagner explains the bins. Listen for where paper goes, when the yellow bag is collected, what goes into the organic bin, and why bottles must wait on Sundays.',
  transcriptHidden: true,
  script: [
    { who: 'Herr Wagner', text: 'Hallo! Sie sind neu im Haus, oder? Ich bin Herr Wagner aus dem dritten Stock.' },
    { who: 'Frau Sato', text: 'Guten Tag! Ja, ich wohne seit einer Woche hier. Ich habe eine Frage zum Müll.' },
    { who: 'Herr Wagner', text: 'Gern. In Deutschland trennen wir ziemlich genau. Die blaue Tonne ist für Papier und Karton.' },
    { who: 'Frau Sato', text: 'Und Plastikverpackungen? Kommen die auch in die blaue Tonne?' },
    { who: 'Herr Wagner', text: 'Nein, die kommen in den gelben Sack. Den holt die Müllabfuhr jeden zweiten Dienstag ab.' },
    { who: 'Frau Sato', text: 'Und was ist mit Essensresten?' },
    { who: 'Herr Wagner', text: 'Dafür haben wir die braune Biotonne im Hof. Da kommen auch Kaffeefilter und Gartenabfälle hinein.' },
    { who: 'Frau Sato', text: 'Gut zu wissen. Und leere Flaschen?' },
    { who: 'Herr Wagner', text: 'Glasflaschen bringen Sie zum Container an der Ecke. Aber bitte nicht am Sonntag, das ist zu laut für die Nachbarn.' },
    { who: 'Frau Sato', text: 'Das ist ja kompliziert! Aber ich finde es gut, dass so viel recycelt wird.' },
    { who: 'Herr Wagner', text: 'Sie gewöhnen sich schnell daran. Wenn Sie Fragen haben, klingeln Sie einfach bei mir.' },
    { who: 'Frau Sato', text: 'Vielen Dank, das ist sehr nett von Ihnen!' },
  ],
  questions: [
    {
      id: 'x.b1.l23.25',
      kind: 'mcq',
      prompt: 'Wohin kommt Papier?',
      options: ['In die blaue Tonne.', 'In den gelben Sack.', 'In die braune Biotonne.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['adjektivendungen'],
      explain:
        'Die blaue Tonne ist für Papier und Karton. Plastic packaging was her guess for the blue bin too — and Herr Wagner answers Nein.',
    },
    {
      id: 'x.b1.l23.26',
      kind: 'mcq',
      prompt: 'Wann wird der gelbe Sack abgeholt?',
      options: ['Jeden zweiten Dienstag.', 'Jeden Dienstag.', 'Jeden zweiten Donnerstag.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'jeden zweiten Dienstag = every other Tuesday. Both details count: zweiten (every second one) and Dienstag (not Donnerstag).',
    },
    {
      id: 'x.b1.l23.27',
      kind: 'mcq',
      prompt: 'Was kommt in die Biotonne?',
      options: ['Essensreste und Kaffeefilter.', 'Plastikverpackungen.', 'Glasflaschen.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'She asks about Essensreste, and he adds Kaffeefilter und Gartenabfälle. Plastic is the yellow bag, glass the container on the corner.',
    },
    {
      id: 'x.b1.l23.28',
      kind: 'mcq',
      prompt: 'Warum soll man am Sonntag keine Flaschen zum Container bringen?',
      options: [
        'Weil es für die Nachbarn zu laut ist.',
        'Weil der Container am Sonntag geschlossen ist.',
        'Weil am Sonntag die Müllabfuhr kommt.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'das ist zu laut für die Nachbarn — Sunday is a quiet day by law in Germany (Sonntagsruhe), and breaking glass is noisy.',
    },
  ],
}

export default listening
