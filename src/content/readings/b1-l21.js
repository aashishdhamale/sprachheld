/**
 * B1 · L21 — Reading: three readers' views on working from home.
 *
 * The shape of a magazine reader survey — the classic B1 reading task:
 * three people, three positions (for, against, both), each argued with a
 * reason. Konjunktiv II carries the wishes (müsste, würde, wäre), and the
 * connectors from L19 come back (allerdings, außerdem, deshalb).
 *
 * Exercise ids: x.b1.l21.20 … x.b1.l21.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.b1.l21.homeoffice-meinungen',
  level: 'B1',
  title: 'Homeoffice — ja oder nein?',
  titleEn: 'Working from home — yes or no?',
  minutes: 6,
  intro:
    'A magazine asked its readers whether working from home is a good solution for everyone. Read the three answers and work out who is for it, who is against it, and who is in between.',
  paragraphs: [
    'Seit einigen Jahren arbeiten viele Deutsche regelmäßig von zu Hause. Die Zeitschrift „Arbeit heute“ hat ihre Leserinnen und Leser gefragt: Ist das Homeoffice eine gute Lösung für alle?',
    'Sabine, 34: Für mich ist das Homeoffice ideal. Ich spare jeden Tag zwei Stunden, weil ich nicht mehr mit dem Zug fahren muss. In dieser Zeit kann ich morgens mit meinen Kindern frühstücken. Wenn ich wieder jeden Tag ins Büro müsste, würde ich wahrscheinlich kündigen.',
    'Markus, 52: Ich sehe das ganz anders. Zu Hause fehlen mir die Kollegen, und eigentlich arbeite ich viel länger als im Büro, weil ich abends nicht abschalten kann. Außerdem ist meine Wohnung zu klein für einen richtigen Arbeitsplatz. Ich wäre froh, wenn die Firma uns alle wieder ins Büro holen würde.',
    'Leyla, 27: Ich finde, beides hat Vorteile und Nachteile. Zu Hause kann ich mich besser konzentrieren. Allerdings glaube ich nicht, dass man alle Probleme am Computer lösen kann. Deshalb arbeite ich zwei Tage zu Hause und drei Tage im Büro. Für mich ist das ein guter Kompromiss.',
  ],
  glossary: [
    { de: 'regelmäßig', en: 'regularly' },
    { de: 'die Zeitschrift', en: 'magazine' },
    { de: 'sparen', en: 'to save' },
    { de: 'kündigen', en: 'to hand in your notice, to quit' },
    { de: 'abschalten', en: 'to switch off, to unwind' },
    { de: 'der Arbeitsplatz', en: 'workplace, desk' },
    { de: 'sich konzentrieren', en: 'to concentrate' },
    { de: 'lösen', en: 'to solve' },
  ],
  questions: [
    {
      id: 'x.b1.l21.20',
      kind: 'mcq',
      prompt: 'Warum gefällt Sabine das Homeoffice?',
      options: [
        'Sie spart Zeit, weil sie nicht mehr mit dem Zug fahren muss.',
        'Sie verdient zu Hause mehr Geld.',
        'Ihre Wohnung ist sehr groß.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['nebensatz'],
      explain:
        'Her reason is in the weil-clause: weil ich nicht mehr mit dem Zug fahren muss — two hours a day saved.',
    },
    {
      id: 'x.b1.l21.21',
      kind: 'mcq',
      prompt: 'Was würde Sabine machen, wenn sie wieder jeden Tag ins Büro müsste?',
      options: ['Sie würde wahrscheinlich kündigen.', 'Sie würde mit dem Auto fahren.', 'Sie würde früher aufstehen.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['konjunktiv2'],
      explain:
        'müsste and würde are Konjunktiv II: she imagines a situation that is not real now. In that case she would probably quit — würde ich wahrscheinlich kündigen.',
    },
    {
      id: 'x.b1.l21.22',
      kind: 'mcq',
      prompt: 'Welches Problem hat Markus im Homeoffice?',
      options: [
        'Er arbeitet zu Hause länger und vermisst die Kollegen.',
        'Er hat zu wenig Arbeit.',
        'Sein Computer ist zu alt.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Two problems, linked by außerdem: the colleagues are missing and he works longer — and on top of that his flat is too small for a proper desk.',
    },
    {
      id: 'x.b1.l21.23',
      kind: 'mcq',
      prompt: 'Wie arbeitet Leyla?',
      options: ['Zwei Tage zu Hause und drei Tage im Büro.', 'Nur im Büro.', 'Nur zu Hause.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['konnektoren'],
      explain:
        'deshalb introduces the consequence of her opinion: because both sides have advantages, she does both — her Kompromiss.',
    },
    {
      id: 'x.b1.l21.24',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Ich wäre froh, wenn die Firma uns alle wieder ins Büro holen würde.',
      answer: 'I would be glad if the company brought us all back to the office.',
      accept: [
        'I would be happy if the company brought us all back to the office.',
        'I would be glad if the company brought us all back into the office.',
        'I would be happy if the company brought us all back into the office.',
        'I would be glad if the company would bring us all back to the office.',
      ],
      skill: 'reading',
      difficulty: 3,
      tags: ['konjunktiv2'],
      explain:
        'wäre froh = would be glad, a wish. In the wenn-clause German repeats Konjunktiv II with würde … holen, where English simply uses the past "brought".',
    },
  ],
}

export default reading
