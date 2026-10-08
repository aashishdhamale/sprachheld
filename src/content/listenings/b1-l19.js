/**
 * B1 · L19 — Listening: two colleagues move a project meeting.
 *
 * Twelve lines of an ordinary office phone call. The four facts the
 * questions test — why the meeting moves, the new time, who writes the
 * minutes and what happens today — each sit in one line, and each wrong
 * option is something the call mentions and then rules out.
 *
 * Exercise ids: x.b1.l19.25 … x.b1.l19.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.b1.l19.termin-verschieben',
  level: 'B1',
  title: 'Die Besprechung wird verschoben',
  titleEn: 'The meeting is being moved',
  minutes: 4,
  intro:
    'Herr Becker calls his colleague Frau Lindner about Thursday’s project meeting. Listen for why it moves, the new day and time, who takes the minutes, and what Frau Lindner does today.',
  transcriptHidden: true,
  script: [
    { who: 'Frau Lindner', text: 'Lindner, guten Morgen.' },
    { who: 'Herr Becker', text: 'Guten Morgen, Frau Lindner, hier ist Becker. Es geht um unsere Besprechung am Donnerstag.' },
    { who: 'Frau Lindner', text: 'Ja? Gibt es ein Problem?' },
    { who: 'Herr Becker', text: 'Leider ja. Der Kunde aus Hamburg kann am Donnerstag nicht, obwohl er den Termin selbst vorgeschlagen hat.' },
    { who: 'Frau Lindner', text: 'Typisch! Und was schlagen Sie vor?' },
    { who: 'Herr Becker', text: 'Wir könnten die Besprechung auf Montag verschieben. Dann haben wir auch mehr Zeit für die Präsentation.' },
    { who: 'Frau Lindner', text: 'Montag passt mir gut, aber erst ab zehn Uhr. Vorher habe ich einen Arzttermin.' },
    { who: 'Herr Becker', text: 'Kein Problem. Sagen wir Montag um halb elf im großen Konferenzraum?' },
    { who: 'Frau Lindner', text: 'Einverstanden. Wer schreibt das Protokoll? Letztes Mal habe ich das gemacht.' },
    { who: 'Herr Becker', text: 'Stimmt, diesmal übernehme ich das. Und Sie leiten die Besprechung, ja?' },
    { who: 'Frau Lindner', text: 'Gern. Ich schicke allen heute noch die neue Tagesordnung.' },
    { who: 'Herr Becker', text: 'Perfekt. Vielen Dank und bis Montag!' },
  ],
  questions: [
    {
      id: 'x.b1.l19.25',
      kind: 'mcq',
      prompt: 'Warum wird die Besprechung verschoben?',
      options: ['Der Kunde hat am Donnerstag keine Zeit.', 'Frau Lindner ist krank.', 'Die Präsentation ist noch nicht fertig.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['konnektoren'],
      explain:
        'Der Kunde kann am Donnerstag nicht. The obwohl-clause after it only adds the irony that he proposed the date himself — it is not a second reason.',
    },
    {
      id: 'x.b1.l19.26',
      kind: 'mcq',
      prompt: 'Wann ist die neue Besprechung?',
      options: ['Am Montag um 10:30 Uhr.', 'Am Montag um 10 Uhr.', 'Am Donnerstag um 10:30 Uhr.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'ab zehn Uhr is only when Frau Lindner becomes free; the time they actually agree is Herr Becker’s suggestion — Montag um halb elf, which is 10:30.',
    },
    {
      id: 'x.b1.l19.27',
      kind: 'mcq',
      prompt: 'Wer schreibt dieses Mal das Protokoll?',
      options: ['Herr Becker.', 'Frau Lindner.', 'Der Kunde.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Frau Lindner wrote it last time (letztes Mal habe ich das gemacht). Herr Becker answers diesmal übernehme ich das — übernehmen means to take something on.',
    },
    {
      id: 'x.b1.l19.28',
      kind: 'mcq',
      prompt: 'Was macht Frau Lindner heute noch?',
      options: ['Sie schickt die neue Tagesordnung.', 'Sie geht zum Arzt.', 'Sie ruft den Kunden an.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'heute noch — "later today" — goes with the agenda. The doctor’s appointment is on Monday before ten, not today, and nobody says they will call the client.',
    },
  ],
}

export default listening
