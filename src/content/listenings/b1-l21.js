/**
 * B1 · L21 — Listening: two colleagues argue about a four-day week.
 *
 * Twelve lines with a real for-and-against: Tim is keen, Jana has a reason
 * to be sceptical, and they end on a compromise. Konjunktiv II does the
 * imagining (hätte, wäre, fände, könnte) and the questions follow the
 * structure of the argument — opinion, objection, compromise, next step.
 *
 * Exercise ids: x.b1.l21.25 … x.b1.l21.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.b1.l21.vier-tage-woche',
  level: 'B1',
  title: 'Die Vier-Tage-Woche',
  titleEn: 'The four-day week',
  minutes: 4,
  intro:
    'The boss is thinking about a four-day week. Jana and Tim discuss it over coffee. Listen for each opinion, the reason against, the compromise they find, and what Jana does tonight.',
  transcriptHidden: true,
  script: [
    { who: 'Jana', text: 'Hast du schon gehört? Die Chefin überlegt, ob wir eine Vier-Tage-Woche einführen.' },
    { who: 'Tim', text: 'Ja, ich finde die Idee super. Dann hätte ich endlich mehr Zeit für meine Familie.' },
    { who: 'Jana', text: 'Ich bin mir nicht so sicher. Wir hätten dann ja jeden Tag zehn Stunden Arbeit.' },
    { who: 'Tim', text: 'Das stimmt. Aber wenn ich dafür am Freitag frei hätte, wäre mir das egal.' },
    { who: 'Jana', text: 'Für dich vielleicht. Ich muss meinen Sohn jeden Tag um vier vom Kindergarten abholen.' },
    { who: 'Tim', text: 'Ach so, das ist natürlich ein Problem. Könntest du nicht früher anfangen?' },
    { who: 'Jana', text: 'Um sechs Uhr morgens? Nein, danke!' },
    { who: 'Tim', text: 'Vielleicht gibt es einen Kompromiss: Jeder entscheidet selbst, ob er vier oder fünf Tage arbeitet.' },
    { who: 'Jana', text: 'Das fände ich gut. Dann könnte jeder machen, was für ihn passt.' },
    { who: 'Tim', text: 'Wollen wir das morgen in der Besprechung vorschlagen?' },
    { who: 'Jana', text: 'Gern. Ich schreibe heute Abend schon mal ein paar Argumente auf.' },
    { who: 'Tim', text: 'Super, und ich bringe die Zahlen aus der Umfrage mit.' },
  ],
  questions: [
    {
      id: 'x.b1.l21.25',
      kind: 'mcq',
      prompt: 'Was denkt Tim über die Vier-Tage-Woche?',
      options: ['Er findet die Idee super.', 'Er ist dagegen.', 'Er hat keine Meinung.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['konjunktiv2'],
      explain:
        'Tim says ich finde die Idee super straight away, and his reason follows in Konjunktiv II: Dann hätte ich endlich mehr Zeit für meine Familie.',
    },
    {
      id: 'x.b1.l21.26',
      kind: 'mcq',
      prompt: 'Warum ist Jana skeptisch?',
      options: [
        'Sie muss ihren Sohn jeden Tag um vier abholen.',
        'Sie möchte mehr Geld verdienen.',
        'Sie arbeitet lieber am Freitag.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Ten-hour days would clash with her son: she has to pick him up from the Kindergarten at four every day. That is the concrete reason behind her Ich bin mir nicht so sicher.',
    },
    {
      id: 'x.b1.l21.27',
      kind: 'mcq',
      prompt: 'Welchen Kompromiss schlägt Tim vor?',
      options: [
        'Jeder entscheidet selbst, ob er vier oder fünf Tage arbeitet.',
        'Alle fangen um sechs Uhr an.',
        'Alle arbeiten nur noch vier Tage.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      tags: ['nebensatz'],
      explain:
        'He introduces it with Vielleicht gibt es einen Kompromiss — the ob-clause then gives the choice: vier oder fünf Tage. Starting at six was his earlier idea, and Jana said no.',
    },
    {
      id: 'x.b1.l21.28',
      kind: 'mcq',
      prompt: 'Was macht Jana heute Abend?',
      options: ['Sie schreibt Argumente auf.', 'Sie bringt Zahlen aus der Umfrage mit.', 'Sie spricht mit der Chefin.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'They split the work: Jana writes down arguments tonight (heute Abend), Tim brings the survey figures. Neither of them says they will talk to the boss before the meeting.',
    },
  ],
}

export default listening
