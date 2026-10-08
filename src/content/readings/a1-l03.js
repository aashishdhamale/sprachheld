/**
 * A1 · L03 — Reading: a notice on the door of a language school.
 *
 * Opening hours plus the January course timetable. Plain data only.
 */

export const reading = {
  id: 'r.a1.l03.sprachschule',
  level: 'A1',
  title: 'Aushang in der Sprachschule',
  minutes: 3,
  intro: 'A notice on the door of the language school. Read the opening hours and the course times.',
  paragraphs: [
    'Sprachschule Rheinblick – Öffnungszeiten',
    'Das Büro ist von Montag bis Freitag von neun bis sechzehn Uhr offen. Am Samstag öffnen wir um zehn Uhr und schließen um halb eins. Am Sonntag ist das Büro zu.',
    'Kurse im Januar: Deutsch A1 am Montag und Mittwoch um achtzehn Uhr, Deutsch A2 am Dienstag um Viertel nach sechs.',
    'Der neue Kurs beginnt am zwölften Januar.',
  ],
  glossary: [
    { de: 'die Sprachschule', en: 'language school' },
    { de: 'der Aushang', en: 'notice, posted sign' },
    { de: 'die Öffnungszeiten', en: 'opening hours' },
    { de: 'von … bis …', en: 'from … to …' },
    { de: 'offen', en: 'open' },
    { de: 'zu', en: 'closed (everyday word for geschlossen)' },
    { de: 'schließen', en: 'to close' },
    { de: 'halb eins', en: 'half past twelve (12:30)' },
  ],
  questions: [
    {
      id: 'x.a1.l03.20',
      kind: 'mcq',
      prompt: 'Wann schließt das Büro am Samstag?',
      options: ['Um zehn Uhr.', 'Um halb eins.', 'Um sechzehn Uhr.'],
      answer: 1,
      skill: 'reading',
      difficulty: 2,
      tags: ['zeitangaben'],
      explain: 'The notice says „Am Samstag öffnen wir um zehn Uhr und schließen um halb eins." — ten is the opening time, halb eins (12:30) the closing time.',
    },
    {
      id: 'x.a1.l03.21',
      kind: 'blank',
      sentence: 'Am Sonntag ist das Büro ___.',
      options: ['offen', 'zu', 'spät'],
      answer: 'zu',
      skill: 'reading',
      difficulty: 1,
      tags: ['zeitangaben'],
      explain: 'The last line of the opening hours says „Am Sonntag ist das Büro zu." — zu is the everyday opposite of offen.',
    },
    {
      id: 'x.a1.l03.22',
      kind: 'mcq',
      prompt: 'An welchen Tagen ist der Kurs Deutsch A1?',
      options: ['Am Montag und am Mittwoch.', 'Nur am Dienstag.', 'Am Samstag und am Sonntag.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['zeitangaben'],
      explain: 'A1 runs „am Montag und Mittwoch"; Tuesday belongs to the A2 course, and at the weekend the school is closed.',
    },
    {
      id: 'x.a1.l03.23',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Der Kurs beginnt am zwölften Januar.',
      answer: 'The course starts on the twelfth of January.',
      accept: [
        'The course begins on the twelfth of January.',
        'The course starts on January the twelfth.',
        'The course starts on 12 January.',
      ],
      skill: 'reading',
      difficulty: 3,
      tags: ['zeitangaben'],
      hint: 'am + a date always answers the question "Wann?"',
      explain: 'Dates take am + the ordinal: am zwölften Januar. English switches to "on", and the month name stays capitalised in both languages.',
    },
  ],
}

export default reading
