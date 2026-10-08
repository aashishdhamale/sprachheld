/**
 * B1 · L24 — Reading: a career portrait told in the Präteritum.
 *
 * A company-magazine portrait — the natural home of the written past. The
 * narration runs in the Präteritum (kam, sprach, war, besuchte, bewarb,
 * gefiel, stellte ein), the quotes switch to the spoken Perfekt or present,
 * and the last line looks ahead with Futur I.
 *
 * Exercise ids: x.b1.l24.20 … x.b1.l24.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.b1.l24.aylin-demir',
  level: 'B1',
  title: 'Vom Praktikum zur Abteilungsleiterin',
  titleEn: 'From intern to head of department',
  minutes: 6,
  intro:
    'A company magazine portrays one of its managers. Read how she came to Germany, how she got her first job, and what she plans next. Notice the tense: the story is in the Präteritum.',
  paragraphs: [
    'Als Aylin Demir vor zwölf Jahren nach Deutschland kam, sprach sie kein Wort Deutsch. Sie war 19 Jahre alt und hatte in der Türkei gerade die Schule beendet. In Stuttgart besuchte sie zuerst einen Sprachkurs, am Abend arbeitete sie in einer Bäckerei.',
    'Nach einem Jahr bewarb sie sich um ein Praktikum bei einer Autofirma. „Im Vorstellungsgespräch war ich furchtbar nervös“, erinnert sie sich. „Aber ich wusste genau, was ich wollte.“ Das Praktikum gefiel ihr so gut, dass sie danach eine Ausbildung zur Industriekauffrau machte.',
    'Nach der Ausbildung stellte die Firma sie fest ein. Neben der Arbeit studierte sie Betriebswirtschaft, abends und am Wochenende. „Das war eine anstrengende Zeit, ich hatte kaum Freizeit“, sagt sie. Heute leitet sie eine Abteilung mit 25 Mitarbeiterinnen und Mitarbeitern.',
    'Ihr Rat für junge Leute: „Man wird nicht über Nacht erfolgreich. Aber wer zuverlässig arbeitet und Fragen stellt, bekommt seine Chance.“ Und ihre Pläne? „In zwei Jahren werde ich wahrscheinlich ein neues Team in München aufbauen.“',
  ],
  glossary: [
    { de: 'beenden', en: 'to finish' },
    { de: 'furchtbar', en: 'terribly' },
    { de: 'gefallen (gefiel)', en: 'to please, to be liked' },
    { de: 'die Industriekauffrau', en: 'industrial clerk (a trained office profession)' },
    { de: 'fest einstellen', en: 'to hire permanently' },
    { de: 'die Betriebswirtschaft', en: 'business administration' },
    { de: 'anstrengend', en: 'exhausting, demanding' },
    { de: 'über Nacht', en: 'overnight' },
    { de: 'aufbauen', en: 'to build up' },
  ],
  questions: [
    {
      id: 'x.b1.l24.20',
      kind: 'mcq',
      prompt: 'Wie gut sprach Aylin Deutsch, als sie nach Deutschland kam?',
      options: ['Gar nicht.', 'Sehr gut.', 'Ein bisschen.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['praeteritum'],
      explain:
        'sprach sie kein Wort Deutsch — not a single word. sprach is the Präteritum of sprechen: the vowel changes, there is no -te.',
    },
    {
      id: 'x.b1.l24.21',
      kind: 'mcq',
      prompt: 'Was machte sie in ihrem ersten Jahr in Stuttgart?',
      options: [
        'Sie besuchte einen Sprachkurs und arbeitete in einer Bäckerei.',
        'Sie studierte Betriebswirtschaft.',
        'Sie machte ein Praktikum bei einer Autofirma.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['praeteritum'],
      explain:
        'zuerst … am Abend: the language course by day, the bakery in the evening. The internship only came nach einem Jahr, the degree much later.',
    },
    {
      id: 'x.b1.l24.22',
      kind: 'mcq',
      prompt: 'Warum machte Aylin danach eine Ausbildung?',
      options: ['Das Praktikum hatte ihr sehr gut gefallen.', 'Sie hatte keine andere Stelle gefunden.', 'Ihre Eltern wollten das.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['nebensatz'],
      explain:
        'so … dass links cause and result: Das Praktikum gefiel ihr so gut, dass sie danach eine Ausbildung … machte.',
    },
    {
      id: 'x.b1.l24.23',
      kind: 'blank',
      sentence: 'Neben der Arbeit ___ sie Betriebswirtschaft.',
      options: ['studierte', 'studierten', 'studieren', 'gestudiert'],
      answer: 'studierte',
      skill: 'reading',
      difficulty: 2,
      tags: ['praeteritum'],
      explain:
        'The text tells the story in the Präteritum: studieren is regular, so studier + te. -ieren verbs never take ge- in the participle either: studiert, not "gestudiert".',
    },
    {
      id: 'x.b1.l24.24',
      kind: 'mcq',
      prompt: 'Was plant Aylin für die Zukunft?',
      options: [
        'Sie wird wahrscheinlich ein neues Team in München aufbauen.',
        'Sie wird in die Türkei zurückgehen.',
        'Sie wird noch einmal studieren.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      tags: ['futur'],
      explain:
        'The last sentence switches to Futur I: In zwei Jahren werde ich wahrscheinlich … aufbauen. wahrscheinlich softens it into a confident plan, not a certainty.',
    },
  ],
}

export default reading
