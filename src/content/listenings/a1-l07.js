/**
 * A1 · L07 — Shopping and money
 *
 * Eight short lines in a supermarket: finding a product, hearing its price,
 * and one negation the learner has to catch (Tee haben wir leider nicht).
 * Every line is short enough for the browser TTS voice to read cleanly.
 *
 * Exercise ids: x.a1.l07.23 … x.a1.l07.26
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l07.im-supermarkt',
  level: 'A1',
  title: 'Im Supermarkt',
  titleEn: 'At the supermarket',
  minutes: 3,
  intro: 'A customer is looking for coffee and asks what a packet costs. Listen twice before you answer.',
  transcriptHidden: true,
  script: [
    { who: 'Kundin', text: 'Entschuldigung, haben Sie Kaffee?' },
    { who: 'Mitarbeiter', text: 'Ja, natürlich. Der Kaffee ist hinten links.' },
    { who: 'Kundin', text: 'Danke. Und wie viel kostet eine Packung?' },
    { who: 'Mitarbeiter', text: 'Eine Packung kostet vier Euro neunzig.' },
    { who: 'Kundin', text: 'Das ist ein bisschen teuer. Haben Sie auch Tee?' },
    { who: 'Mitarbeiter', text: 'Tee haben wir leider nicht.' },
    { who: 'Kundin', text: 'Gut, dann nehme ich zwei Packungen Kaffee.' },
    { who: 'Mitarbeiter', text: 'Sehr gern. Die Kasse ist vorne rechts.' },
  ],
  questions: [
    {
      id: 'x.a1.l07.23',
      kind: 'mcq',
      prompt: 'What is the customer looking for?',
      options: ['Coffee', 'Water', 'Bread'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain: 'Her first line is „Haben Sie Kaffee?" — Haben Sie …? is the normal way to ask a shop whether it stocks something.',
    },
    {
      id: 'x.a1.l07.24',
      kind: 'mcq',
      prompt: 'Where is the coffee?',
      options: ['At the back on the left', 'At the front on the right', 'Next to the till'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain: 'hinten links = at the back on the left. vorne rechts, at the end, is where the Kasse is — not the coffee.',
    },
    {
      id: 'x.a1.l07.25',
      kind: 'mcq',
      prompt: 'How much does one packet of coffee cost?',
      options: ['4,90 €', '4,19 €', '9,40 €'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain: 'Prices are read as „vier Euro neunzig" — the euros first, then the cents, with no word for the comma.',
    },
    {
      id: 'x.a1.l07.26',
      kind: 'mcq',
      prompt: 'Does the shop have tea?',
      options: [
        'No — they do not sell tea.',
        'Yes, and it is next to the coffee.',
        'Yes, but it is too expensive.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      tags: ['negation'],
      hint: 'Listen to the very last word of his answer.',
      explain: 'He says „Tee haben wir leider nicht." German likes nicht at the very end, so the negation arrives last — the plain version of the same answer is „Wir haben keinen Tee."',
    },
  ],
}

export default listening
