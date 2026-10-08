/**
 * A1 · L06 — Listening: a café order.
 *
 * Nine short lines, one idea each, all easy for the de-DE text-to-speech voice.
 * Two offers are made and one of them is refused, so the learner really has to
 * listen instead of ticking the first food word they hear.
 *
 * Exercise ids 24-27 belong to this file.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l06.im-cafe',
  level: 'A1',
  title: 'Im Café',
  titleEn: 'At the café',
  minutes: 3,
  intro:
    'A guest orders in a small café. Listen for two things: what he eats, and what the whole order costs.',
  transcriptHidden: true,
  script: [
    { who: 'Kellner', text: 'Guten Tag! Was möchten Sie trinken?' },
    { who: 'Gast', text: 'Ich möchte einen Kaffee, bitte.' },
    { who: 'Kellner', text: 'Gern. Und möchten Sie auch etwas essen?' },
    { who: 'Gast', text: 'Ja, ich nehme ein Brötchen mit Käse.' },
    { who: 'Kellner', text: 'Sehr gern. Möchten Sie auch einen Salat?' },
    { who: 'Gast', text: 'Nein, danke. Nur das Brötchen.' },
    { who: 'Kellner', text: 'Schmeckt der Kaffee?' },
    { who: 'Gast', text: 'Ja, er schmeckt sehr lecker. Die Rechnung, bitte!' },
    { who: 'Kellner', text: 'Das macht sechs Euro fünfzig.' },
  ],
  questions: [
    {
      id: 'x.a1.l06.24',
      kind: 'mcq',
      prompt: 'Was möchte der Gast trinken?',
      options: ['Einen Kaffee.', 'Einen Saft.', 'Ein Wasser.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'He answers the very first question with "Ich möchte einen Kaffee, bitte". The ending -en on einen already tells you the drink is masculine.',
    },
    {
      id: 'x.a1.l06.25',
      kind: 'mcq',
      prompt: 'Was isst der Gast?',
      options: ['Ein Brötchen mit Käse.', 'Einen Salat.', 'Eine Suppe.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      hint: 'The waiter offers something else afterwards — listen to the answer.',
      explain:
        'The salad is offered but refused with "Nein, danke". Only the Brötchen mit Käse is actually ordered, so hearing a word is not the same as hearing an order.',
    },
    {
      id: 'x.a1.l06.26',
      kind: 'mcq',
      prompt: 'Was kostet alles zusammen?',
      options: ['Sechs Euro fünfzig.', 'Sechs Euro.', 'Fünf Euro sechzig.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'The last line is "Das macht sechs Euro fünfzig" — the standard phrase for the total. fünfzig (50) and sechzig (60) differ only in the first syllable.',
    },
    {
      id: 'x.a1.l06.27',
      kind: 'blank',
      sentence: 'Der Gast nimmt ___ Brötchen mit Käse.',
      options: ['ein', 'einen', 'eine'],
      answer: 'ein',
      skill: 'listening',
      difficulty: 3,
      tags: ['akkusativ', 'artikel'],
      hint: 'What gender does the ending -chen give a noun?',
      explain:
        'Brötchen ends in -chen, so it is neuter, and neuter never changes in the accusative: ein Brötchen stays ein Brötchen.',
    },
  ],
}

export default listening
