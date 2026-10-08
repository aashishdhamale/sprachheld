/**
 * A2 · L17 — Listening: Nadia tells a colleague how her suitcase went missing.
 *
 * Twelve short lines, each carrying one fact, because the four questions ask
 * for four different ones: where the suitcase stayed, how long she waited at
 * the belt, what she had in her rucksack, and after how many days she got the
 * case back. Two numbers appear in the audio (eine Stunde / drei Tage) and the
 * questions deliberately ask for both, so guessing does not work.
 *
 * Exercise ids: x.a2.l17.25 … x.a2.l17.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a2.l17.koffer-weg',
  level: 'A2',
  title: 'Der Koffer ist weg',
  titleEn: 'The suitcase is gone',
  minutes: 4,
  intro:
    'Monday morning in the office kitchen. Tom asks Nadia about her holiday and gets a whole story back. Listen for the two numbers — one is how long she waited, the other is how long the suitcase was away.',
  transcriptHidden: true,
  script: [
    { who: 'Tom', text: 'Und, wie war dein Urlaub in Spanien?' },
    { who: 'Nadia', text: 'Schön. Aber der erste Tag war eine Katastrophe.' },
    { who: 'Tom', text: 'Oje. Was ist denn passiert?' },
    { who: 'Nadia', text: 'Mein Koffer ist nicht in Madrid angekommen.' },
    { who: 'Nadia', text: 'Ich habe eine Stunde am Gepäckband gewartet.' },
    { who: 'Tom', text: 'Und dann?' },
    { who: 'Nadia', text: 'Dann bin ich zum Schalter gegangen und habe alles gemeldet.' },
    { who: 'Nadia', text: 'Die Frau am Schalter hat gesagt: Ihr Koffer ist noch in Frankfurt.' },
    { who: 'Nadia', text: 'Zum Glück habe ich meine Medikamente im Rucksack gehabt.' },
    { who: 'Tom', text: 'Hast du den Koffer wiederbekommen?' },
    { who: 'Nadia', text: 'Ja. Nach drei Tagen hat ein Fahrer den Koffer ins Hotel gebracht.' },
    { who: 'Nadia', text: 'Seitdem packe ich immer ein T-Shirt in den Rucksack.' },
  ],
  questions: [
    {
      id: 'x.a2.l17.25',
      kind: 'mcq',
      prompt: 'Wo war Nadias Koffer?',
      options: ['In Frankfurt.', 'In Madrid.', 'Im Hotel.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'The woman at the desk says it plainly: Ihr Koffer ist noch in Frankfurt. Madrid is where Nadia landed, and the hotel is only where the case arrives three days later.',
    },
    {
      id: 'x.a2.l17.26',
      kind: 'mcq',
      prompt: 'Wie lange hat Nadia am Gepäckband gewartet?',
      options: ['Eine Stunde.', 'Drei Tage.', 'Zehn Minuten.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Two periods of time turn up in the story. eine Stunde belongs to the waiting at the belt; drei Tage belongs to the suitcase. Always link a number to the verb that stands next to it.',
    },
    {
      id: 'x.a2.l17.27',
      kind: 'mcq',
      prompt: 'Was hatte Nadia im Rucksack?',
      options: ['Ihre Medikamente.', 'Ein T-Shirt.', 'Ihren Pass.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'She says Zum Glück habe ich meine Medikamente im Rucksack gehabt. The T-shirt comes in the very last line and is what she packs now, after the trip — not what she had then.',
    },
    {
      id: 'x.a2.l17.28',
      kind: 'mcq',
      prompt: 'Wann hat Nadia ihren Koffer wiederbekommen?',
      options: ['Nach drei Tagen.', 'Am ersten Tag.', 'Nach einer Stunde.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      hint: 'The answer comes right after Tom asks whether she got it back at all.',
      explain:
        'Nach drei Tagen hat ein Fahrer den Koffer ins Hotel gebracht. nach + dative names the time that passed first, so the phrase answers "when", not "how long".',
    },
  ],
}

export default listening
