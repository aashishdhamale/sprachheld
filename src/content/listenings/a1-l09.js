/**
 * A1 · L09 — Listening: the morning weather report for three cities.
 *
 * Short lines built for the de-DE text-to-speech voice. Each city gets its own
 * weather word and its own number, so every question has exactly one answer
 * that can be heard.
 *
 * Exercise ids x.a1.l09.24 … x.a1.l09.27.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l09.wetterbericht',
  level: 'A1',
  title: 'Der Wetterbericht',
  titleEn: 'The weather report',
  minutes: 3,
  intro:
    'The morning weather report on the radio: Hamburg, München and Berlin. Listen for the city name first, then for the number of degrees.',
  transcriptHidden: true,
  script: [
    { who: 'Moderatorin', text: 'Guten Morgen! Hier ist das Wetter für heute.' },
    { who: 'Moderatorin', text: 'In Hamburg regnet es den ganzen Tag.' },
    { who: 'Moderatorin', text: 'Es ist kalt: nur zehn Grad.' },
    { who: 'Moderatorin', text: 'In München scheint die Sonne.' },
    { who: 'Moderatorin', text: 'Es ist sonnig und warm, wir haben sechsundzwanzig Grad.' },
    { who: 'Moderatorin', text: 'In Berlin ist es grau, aber es regnet nicht.' },
    { who: 'Moderatorin', text: 'Der Wind ist stark, und wir haben achtzehn Grad.' },
    { who: 'Moderatorin', text: 'Ein Tipp: In München können Sie heute gut schwimmen.' },
    { who: 'Moderatorin', text: 'In Hamburg müssen Sie leider zu Hause bleiben.' },
  ],
  questions: [
    {
      id: 'x.a1.l09.24',
      kind: 'mcq',
      prompt: 'Wo scheint die Sonne?',
      options: ['In München.', 'In Hamburg.', 'In Berlin.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'The report says "In München scheint die Sonne". In a weather report the city name always comes first, so listen to the word right after in — then to the weather word that follows it.',
    },
    {
      id: 'x.a1.l09.25',
      kind: 'mcq',
      prompt: 'Wie viel Grad sind es in Hamburg?',
      options: ['Zehn Grad.', 'Achtzehn Grad.', 'Sechsundzwanzig Grad.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Hamburg gets "nur zehn Grad". The other two numbers belong to other cities — achtzehn to Berlin, sechsundzwanzig to München — so each number has to be tied to the city named just before it.',
    },
    {
      id: 'x.a1.l09.26',
      kind: 'mcq',
      prompt: 'Was ist in Berlin anders als in Hamburg?',
      options: ['In Berlin regnet es nicht.', 'In Berlin scheint die Sonne.', 'In Berlin ist es warm.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Berlin is grey, but the line ends "aber es regnet nicht". nicht stands at the very end and cancels the verb in front of it, so grey is not the same as wet.',
    },
    {
      id: 'x.a1.l09.27',
      kind: 'blank',
      sentence: 'In Hamburg ___ Sie heute zu Hause bleiben.',
      options: ['müssen', 'können', 'möchten', 'muss'],
      answer: 'müssen',
      skill: 'listening',
      difficulty: 3,
      tags: ['modalverben'],
      hint: 'Rain gives you no choice.',
      explain:
        'The last line is "In Hamburg müssen Sie leider zu Hause bleiben" — müssen (have to), not können (can). Formal Sie takes the -en form, so muss on its own cannot fit.',
    },
  ],
}

export default listening
