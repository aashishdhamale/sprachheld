/**
 * A2 · L13 — Listening: two colleagues split the work before a deadline.
 *
 * Short spoken lines, one idea each, built for the de-DE text-to-speech voice.
 * Three different days are named on purpose (Dienstagmittag, Mittwoch,
 * Donnerstag), so the learner has to listen for which day belongs to which job.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a2.l13.wer-macht-was',
  level: 'A2',
  title: 'Wer macht was?',
  titleEn: 'Who does what?',
  minutes: 3,
  intro:
    'Nina and Timo work in the same team. The report is due on Thursday, so they quickly agree who takes which part. Listen for the days.',
  transcriptHidden: true,
  script: [
    { who: 'Nina', text: 'Timo, hast du kurz Zeit? Die Frist für den Bericht ist am Donnerstag.' },
    { who: 'Timo', text: 'Ja, klar. Was ist denn noch offen?' },
    { who: 'Nina', text: 'Die Zahlen aus der Abteilung Einkauf und die Präsentation für den Kunden.' },
    { who: 'Timo', text: 'Ich kümmere mich um die Zahlen. Ich rufe Frau Berger heute noch an.' },
    { who: 'Nina', text: 'Super. Dann mache ich die Präsentation, weil ich die Folien schon habe.' },
    { who: 'Timo', text: 'Schaffst du das bis Mittwoch?' },
    { who: 'Nina', text: 'Ich glaube schon. Aber ich brauche die Zahlen bis Dienstagmittag.' },
    { who: 'Timo', text: 'Kein Problem. Ich sage dir Bescheid, wenn ich sie habe.' },
    { who: 'Nina', text: 'Danke! Und bitte keine Überstunden. Am Donnerstag sind wir sonst alle müde.' },
    { who: 'Timo', text: 'Einverstanden. Dann bis morgen!' },
  ],
  questions: [
    {
      id: 'x.a2.l13.26',
      kind: 'mcq',
      prompt: 'Wann ist die Frist für den Bericht?',
      options: ['Am Donnerstag.', 'Am Dienstag.', 'Am Mittwoch.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'Nina names the deadline in her very first line: „Die Frist für den Bericht ist am Donnerstag.“ The other two days belong to smaller steps inside the plan.',
    },
    {
      id: 'x.a2.l13.27',
      kind: 'mcq',
      prompt: 'Wer kümmert sich um die Zahlen?',
      options: ['Timo.', 'Nina.', 'Frau Berger.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Timo says „Ich kümmere mich um die Zahlen.“ He only calls Frau Berger to get them — the job itself stays with him.',
    },
    {
      id: 'x.a2.l13.28',
      kind: 'mcq',
      prompt: 'Bis wann braucht Nina die Zahlen?',
      options: ['Bis Dienstagmittag.', 'Bis Mittwoch.', 'Bis Donnerstag.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Nina says „… ich brauche die Zahlen bis Dienstagmittag.“ Mittwoch is when her presentation has to be ready, which is a later step.',
    },
    {
      id: 'x.a2.l13.29',
      kind: 'blank',
      sentence: 'Nina macht die Präsentation, weil sie die Folien schon ___.',
      options: ['hat', 'ist', 'haben', 'habe'],
      answer: 'hat',
      skill: 'listening',
      difficulty: 3,
      tags: ['nebensatz'],
      explain:
        'In a weil-clause the conjugated verb comes last, and it still has to match the subject sie (singular) → hat. haben would belong to wir or sie in the plural.',
    },
  ],
}

export default listening
