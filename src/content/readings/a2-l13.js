/**
 * A2 · L13 — Reading: an internal team email about a project delay.
 *
 * The everyday German of an office inbox: Perfekt for what has happened,
 * weil / dass / wenn for the reasons and the promises, and the fixed chunks
 * (Bescheid sagen, einen Termin halten, eine Frist verschieben) the lesson
 * teaches. Present tense and Perfekt only — no passive, no Konjunktiv.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a2.l13.projekt-verzoegerung',
  level: 'A2',
  title: 'Verzögerung beim Projekt Nordlicht',
  titleEn: 'A delay on the Nordlicht project',
  minutes: 4,
  intro:
    'Markus leads a small project team. On Tuesday morning he writes to everyone, because the customer deadline on Friday can no longer be kept.',
  paragraphs: [
    'Liebes Team,',
    'ich muss euch leider Bescheid sagen, dass wir den Termin am Freitag nicht halten können. Der Kunde hat uns die Zahlen erst gestern geschickt, und deshalb sind wir jetzt zwei Tage im Rückstand.',
    'Ich habe schon mit der Abteilung Einkauf gesprochen. Wir verschieben die Frist auf Mittwoch, den 14. Mai. Wenn ihr noch offene Aufgaben habt, meldet euch bitte heute bei mir.',
    'Ab morgen arbeite ich im Homeoffice, aber ich bin per Telefon und E-Mail erreichbar. Sandra kümmert sich um die Besprechung am Montag, weil ich um zehn Uhr einen anderen Termin habe.',
    'Und bitte macht keine Überstunden. Wir schaffen das auch ohne Stress, wenn alle ihre Aufgaben bis Dienstag erledigen.',
    'Viele Grüße, Markus',
  ],
  glossary: [
    { de: 'Bescheid sagen', en: 'to let someone know' },
    { de: 'einen Termin halten', en: 'to keep to a date, to meet a deadline' },
    { de: 'im Rückstand sein', en: 'to be behind schedule' },
    { de: 'eine Frist verschieben', en: 'to move a deadline' },
    { de: 'offene Aufgaben', en: 'unfinished tasks' },
    { de: 'der Einkauf', en: 'purchasing (the department that buys things in)' },
    { de: 'erreichbar', en: 'reachable, available' },
    { de: 'Viele Grüße', en: 'Kind regards (normal email sign-off)' },
  ],
  questions: [
    {
      id: 'x.a2.l13.21',
      kind: 'mcq',
      prompt: 'Warum schreibt Markus diese E-Mail?',
      options: [
        'Weil das Team den Termin am Freitag nicht halten kann.',
        'Weil ein neuer Kollege in der Abteilung anfängt.',
        'Weil alle mehr Gehalt bekommen.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['nebensatz'],
      explain:
        'The first sentence names the whole reason: „… dass wir den Termin am Freitag nicht halten können.“ Everything after that is only the consequence.',
    },
    {
      id: 'x.a2.l13.22',
      kind: 'mcq',
      prompt: 'Wann ist die neue Frist?',
      options: ['Am Mittwoch, den 14. Mai.', 'Am Freitag.', 'Am Montag.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Paragraph three says „Wir verschieben die Frist auf Mittwoch, den 14. Mai.“ Friday was the old date and Monday is only the meeting.',
    },
    {
      id: 'x.a2.l13.23',
      kind: 'blank',
      sentence: 'Ab morgen arbeitet Markus im ___.',
      options: ['Homeoffice', 'Büro', 'Urlaub', 'Einkauf'],
      answer: 'Homeoffice',
      skill: 'reading',
      difficulty: 2,
      explain:
        'German uses the fixed phrase im Homeoffice arbeiten for working from home — and Markus adds that he is still reachable by phone and email.',
    },
    {
      id: 'x.a2.l13.24',
      kind: 'mcq',
      prompt: 'Warum kümmert sich Sandra um die Besprechung am Montag?',
      options: [
        'Weil Markus um zehn Uhr einen anderen Termin hat.',
        'Weil Markus krank ist.',
        'Weil Sandra für das Projekt zuständig ist.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['nebensatz'],
      explain:
        'The weil-clause in paragraph four gives the reason directly: „… weil ich um zehn Uhr einen anderen Termin habe.“ The email never says that Markus is ill.',
    },
    {
      id: 'x.a2.l13.25',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Wenn ihr noch offene Aufgaben habt, meldet euch bitte heute bei mir.',
      answer: 'If you still have unfinished tasks, please get in touch with me today.',
      accept: [
        'If you still have open tasks, please get in touch with me today.',
        'If you still have unfinished tasks, please contact me today.',
        'If you have any unfinished tasks left, please get in touch with me today.',
      ],
      skill: 'reading',
      difficulty: 3,
      tags: ['nebensatz'],
      hint: 'meldet euch is the ihr imperative of sich melden.',
      explain:
        'The wenn-clause sets the condition and pushes habt to its end; the main clause is an ihr imperative, so it starts with the verb meldet and keeps the reflexive euch.',
    },
  ],
}

export default reading
