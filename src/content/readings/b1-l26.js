/**
 * B1 · L26 — Reading: a travel blog about six months in New Zealand.
 *
 * The revision text for B1: a blog post that uses the whole toolkit — the
 * written past (kündigte, packte, flog), the Plusquamperfekt (hatte mich
 * gewöhnt), relative clauses (die beste Entscheidung, die ich je getroffen
 * habe; Strände, an denen …), a superlative with its ending, um … zu, and a
 * closing Konjunktiv II.
 *
 * Exercise ids: x.b1.l26.20 … x.b1.l26.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.b1.l26.neuseeland',
  level: 'B1',
  title: 'Sechs Monate in Neuseeland',
  titleEn: 'Six months in New Zealand',
  minutes: 7,
  intro:
    'A travel blogger looks back on six months in New Zealand. Read how it started, what was hard, the best moment — and what she would do differently.',
  paragraphs: [
    'Vor einem Jahr kündigte ich meinen Job, packte meinen Rucksack und flog nach Neuseeland. Meine Freunde hielten mich für verrückt. Heute weiß ich: Es war die beste Entscheidung, die ich je getroffen habe.',
    'Am Anfang war alles fremd. Ich verstand den Akzent der Leute kaum, und ich vermisste meine Familie sehr. Aber nach ein paar Wochen hatte ich mich an das neue Leben gewöhnt. Ich arbeitete auf einer Farm, wo ich Äpfel pflückte, und am Wochenende entdeckte ich die Insel.',
    'Die Landschaft ist unglaublich: Berge, Seen und Strände, an denen man oft stundenlang keinen Menschen trifft. Das schönste Erlebnis war eine Wanderung zu einem Vulkan. Wir starteten um vier Uhr morgens, um oben den Sonnenaufgang zu sehen.',
    'Was ich gelernt habe? Dass man nicht viel braucht, um glücklich zu sein. Wenn ich noch einmal fahren könnte, würde ich weniger planen und spontaner sein. Mein nächster Traum: eine Reise mit dem Zug von Berlin bis nach Peking.',
  ],
  glossary: [
    { de: 'jemanden für verrückt halten', en: 'to think someone is crazy' },
    { de: 'je', en: 'ever' },
    { de: 'der Akzent', en: 'accent' },
    { de: 'pflücken', en: 'to pick (fruit)' },
    { de: 'der See', en: 'lake' },
    { de: 'stundenlang', en: 'for hours' },
    { de: 'der Vulkan', en: 'volcano' },
    { de: 'der Sonnenaufgang', en: 'sunrise' },
  ],
  questions: [
    {
      id: 'x.b1.l26.20',
      kind: 'mcq',
      prompt: 'Was dachten die Freunde der Autorin über ihren Plan?',
      options: ['Sie hielten sie für verrückt.', 'Sie wollten mitkommen.', 'Sie fanden den Plan langweilig.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['praeteritum'],
      explain:
        'Meine Freunde hielten mich für verrückt — halten für = to consider someone something. hielten is the Präteritum of halten.',
    },
    {
      id: 'x.b1.l26.21',
      kind: 'mcq',
      prompt: 'Was war am Anfang schwierig?',
      options: [
        'Sie verstand den Akzent kaum und vermisste ihre Familie.',
        'Sie fand keine Arbeit.',
        'Das Wetter war schlecht.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Two difficulties joined by und: the accent and missing her family. Work was not a problem — she found a job on a farm.',
    },
    {
      id: 'x.b1.l26.22',
      kind: 'mcq',
      prompt: 'Was machte sie auf der Farm?',
      options: ['Sie pflückte Äpfel.', 'Sie fuhr Traktor.', 'Sie kochte für die Arbeiter.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['relativsatz'],
      explain:
        'eine Farm, wo ich Äpfel pflückte — wo can introduce a relative clause about a place, like in der.',
    },
    {
      id: 'x.b1.l26.23',
      kind: 'blank',
      sentence: 'Wenn sie noch einmal fahren ___, würde sie weniger planen.',
      options: ['könnte', 'kann', 'konnte', 'könnten'],
      answer: 'könnte',
      skill: 'reading',
      difficulty: 2,
      tags: ['konjunktiv2', 'nebensatz'],
      explain:
        'An unreal condition needs Konjunktiv II: könnte, with the Umlaut. konnte is plain past, and könnten would need a plural subject.',
    },
    {
      id: 'x.b1.l26.24',
      kind: 'mcq',
      prompt: 'Was ist ihr nächster Traum?',
      options: ['Mit dem Zug von Berlin nach Peking fahren.', 'Noch einmal nach Neuseeland fliegen.', 'Auf einer Farm arbeiten.'],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      explain:
        'The last sentence: Mein nächster Traum: eine Reise mit dem Zug von Berlin bis nach Peking. Going back to New Zealand is only hinted at with the Konjunktiv — what she would do differently.',
    },
  ],
}

export default reading
