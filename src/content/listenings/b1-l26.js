/**
 * B1 · L26 — Listening: a friend is back from a road trip through Morocco.
 *
 * Eleven lines of "Und, wie war's?" — the most common conversation after
 * any holiday. The trip in the Perfekt, the language detail in the
 * Plusquamperfekt, a helpful stranger in a relative clause, a wish in
 * Konjunktiv II and the next trip in Futur I.
 *
 * Exercise ids: x.b1.l26.25 … x.b1.l26.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.b1.l26.marokko',
  level: 'B1',
  title: 'Zurück aus Marokko',
  titleEn: 'Back from Morocco',
  minutes: 4,
  intro:
    'Ben is back from two weeks in Morocco and tells his friend Paula about it. Listen for how he travelled, his best moment, who helped him when he got lost, and when he is going back.',
  transcriptHidden: true,
  script: [
    { who: 'Paula', text: 'Hallo Ben! Du bist ja ganz braun. Wie war es in Marokko?' },
    { who: 'Ben', text: 'Fantastisch! Wir sind zwei Wochen mit dem Mietwagen durch das ganze Land gefahren.' },
    { who: 'Paula', text: 'Und was hat dir am besten gefallen?' },
    { who: 'Ben', text: 'Die Nacht in der Wüste. Wir haben in einem Zelt geschlafen, und der Himmel war voller Sterne.' },
    { who: 'Paula', text: 'Wie romantisch! Gab es auch Probleme?' },
    { who: 'Ben', text: 'Ja, in Marrakesch haben wir uns total verirrt. Aber ein Junge, der ein bisschen Deutsch sprach, hat uns zum Hotel gebracht.' },
    { who: 'Paula', text: 'Wie nett! Und wie habt ihr euch sonst verständigt?' },
    { who: 'Ben', text: 'Meistens auf Französisch. Das hatte ich zum Glück in der Schule gelernt.' },
    { who: 'Paula', text: 'Ich würde auch so gern einmal nach Marokko fahren.' },
    { who: 'Ben', text: 'Dann komm doch mit! Wir werden im Frühling wieder hinfahren, dann ist es nicht so heiß.' },
    { who: 'Paula', text: 'Im Frühling habe ich vielleicht Urlaub. Ich frage morgen meinen Chef.' },
  ],
  questions: [
    {
      id: 'x.b1.l26.25',
      kind: 'mcq',
      prompt: 'Wie ist Ben durch Marokko gereist?',
      options: ['Mit dem Mietwagen.', 'Mit dem Zug.', 'Mit dem Bus.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['perfekt'],
      explain:
        'Wir sind … mit dem Mietwagen durch das ganze Land gefahren — a rented car. fahren takes sein because it is movement.',
    },
    {
      id: 'x.b1.l26.26',
      kind: 'mcq',
      prompt: 'Was war für Ben das schönste Erlebnis?',
      options: ['Die Nacht in der Wüste.', 'Das Essen in Marrakesch.', 'Der Strand am Meer.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Paula asks Was hat dir am besten gefallen? and Ben answers at once: Die Nacht in der Wüste — a tent and a sky full of stars.',
    },
    {
      id: 'x.b1.l26.27',
      kind: 'mcq',
      prompt: 'Wer hat Ben in Marrakesch geholfen?',
      options: ['Ein Junge, der ein bisschen Deutsch sprach.', 'Ein Polizist.', 'Die Frau vom Hotel.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      tags: ['relativsatz'],
      explain:
        'The relative clause der ein bisschen Deutsch sprach describes the boy who brought them back to the hotel after they got lost.',
    },
    {
      id: 'x.b1.l26.28',
      kind: 'mcq',
      prompt: 'Wann fährt Ben wieder nach Marokko?',
      options: ['Im Frühling.', 'Im Sommer.', 'Im Herbst.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      tags: ['futur'],
      explain:
        'Wir werden im Frühling wieder hinfahren — Futur I for a firm plan. He even gives the reason: then it is not so hot, which rules out summer.',
    },
  ],
}

export default listening
