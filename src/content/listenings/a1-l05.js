/**
 * A1 · L05 — Listening: Tobias describes his morning.
 *
 * Short lines, one idea each, all in the present tense — built for the
 * de-DE text-to-speech voice. Two clock times sound similar on purpose
 * (Viertel vor sechs / Viertel vor acht), so the learner has to listen.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l05.mein-morgen',
  level: 'A1',
  title: 'Mein Morgen',
  titleEn: 'My morning',
  minutes: 3,
  intro:
    'A radio reporter asks Tobias how his mornings go. Listen for the clock times — there are three of them.',
  transcriptHidden: true,
  script: [
    { who: 'Reporterin', text: 'Tobias, wie ist dein Morgen?' },
    { who: 'Tobias', text: 'Mein Wecker klingelt um Viertel vor sechs.' },
    { who: 'Tobias', text: 'Ich stehe sofort auf und dusche.' },
    { who: 'Tobias', text: 'Dann frühstücke ich: ein Brot und einen Kaffee.' },
    { who: 'Reporterin', text: 'Und wann fängt deine Arbeit an?' },
    { who: 'Tobias', text: 'Meine Arbeit fängt um acht Uhr an.' },
    { who: 'Tobias', text: 'Ich fahre mit dem Fahrrad ins Büro.' },
    { who: 'Tobias', text: 'Ich komme immer um Viertel vor acht an.' },
    { who: 'Reporterin', text: 'Liest du morgens Zeitung?' },
    { who: 'Tobias', text: 'Nein, nie. Morgens habe ich keine Zeit.' },
  ],
  questions: [
    {
      id: 'x.a1.l05.24',
      kind: 'mcq',
      prompt: 'Wie fährt Tobias ins Büro?',
      options: ['Mit dem Fahrrad.', 'Mit dem Bus.', 'Mit dem Auto.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'He says "Ich fahre mit dem Fahrrad ins Büro". German names transport with mit dem / mit der, so listen for the word after mit.',
    },
    {
      id: 'x.a1.l05.25',
      kind: 'mcq',
      prompt: 'Wann klingelt sein Wecker?',
      options: ['Um Viertel vor sechs.', 'Um Viertel nach sechs.', 'Um halb sechs.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'vor means before and nach means after, so Viertel vor sechs is 5:45 — the little word between Viertel and the hour carries the whole meaning.',
    },
    {
      id: 'x.a1.l05.26',
      kind: 'mcq',
      prompt: 'Wann fängt seine Arbeit an?',
      options: ['Um acht Uhr.', 'Um Viertel vor acht.', 'Um Viertel vor sechs.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      hint: 'He arrives at one time and starts at another.',
      explain:
        'Viertel vor acht is when he arrives (kommt … an); the work itself starts um acht Uhr (fängt … an) — two separable verbs, two different times.',
    },
    {
      id: 'x.a1.l05.27',
      kind: 'blank',
      sentence: 'Tobias liest morgens ___ Zeitung.',
      options: ['nie', 'oft', 'immer', 'manchmal'],
      answer: 'nie',
      skill: 'listening',
      difficulty: 2,
      explain:
        'He answers "Nein, nie." nie is already a negation, so it replaces nicht and kein in the sentence.',
    },
  ],
}

export default listening
