/**
 * A2 · L16 — Listening: two friends compare two restaurants and pick one.
 *
 * Every line is short enough for the de-DE TTS voice and carries exactly one
 * fact, because the questions ask for four different ones: which place is more
 * expensive, why the cheap one is out, who pays, and the meeting time — which
 * is deliberately NOT the same as the reservation time.
 *
 * Exercise ids: x.a2.l16.25 … x.a2.l16.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a2.l16.zwei-lokale',
  level: 'A2',
  title: 'Zwei Lokale, ein Abend',
  titleEn: 'Two restaurants, one evening',
  minutes: 4,
  intro:
    'Lena and Paul are deciding where to eat tonight. Listen for the two comparatives that decide it — teurer and lauter — and note the time at the very end. It is not the time of the reservation.',
  transcriptHidden: true,
  script: [
    { who: 'Lena', text: 'Du, wohin gehen wir heute Abend essen?' },
    { who: 'Paul', text: 'Ich kenne zwei gute Lokale hier in der Nähe.' },
    { who: 'Paul', text: 'Das Adria am Markt ist sehr gemütlich, aber ziemlich teuer.' },
    { who: 'Lena', text: 'Und das andere?' },
    { who: 'Paul', text: 'Das Bella Napoli ist billiger, aber auch viel lauter.' },
    { who: 'Lena', text: 'Ich möchte heute in Ruhe reden. Da ist es mir zu laut.' },
    { who: 'Paul', text: 'Dann nehmen wir das Adria. Dort ist es ruhiger.' },
    { who: 'Lena', text: 'Gut. Aber du hast recht, es ist wirklich teuer.' },
    { who: 'Paul', text: 'Kein Problem. Heute lade ich dich ein. Du hast Geburtstag!' },
    { who: 'Lena', text: 'Oh, danke! Dann reserviere ich einen Tisch für acht Uhr.' },
    { who: 'Paul', text: 'Perfekt. Wir treffen uns am besten um Viertel vor acht vor dem Lokal.' },
  ],
  questions: [
    {
      id: 'x.a2.l16.25',
      kind: 'mcq',
      prompt: 'Welches Lokal ist teurer?',
      options: ['Das Adria.', 'Das Bella Napoli.', 'Beide kosten gleich viel.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'Paul says the Adria is gemütlich, aber ziemlich teuer, and then that the Bella Napoli is billiger. billiger als das Adria means the Adria is the expensive one.',
    },
    {
      id: 'x.a2.l16.26',
      kind: 'mcq',
      prompt: 'Warum möchte Lena nicht ins Bella Napoli?',
      options: ['Es ist dort zu laut.', 'Es ist dort zu teuer.', 'Das Essen ist dort schlecht.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Price is the Adria’s problem, not the Bella Napoli’s. Lena rules the cheap place out with Da ist es mir zu laut — she wants to talk in Ruhe.',
    },
    {
      id: 'x.a2.l16.27',
      kind: 'mcq',
      prompt: 'Wer bezahlt heute das Essen?',
      options: ['Paul.', 'Lena.', 'Jeder bezahlt selbst.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'Paul says Heute lade ich dich ein. einladen has a second meaning: not only "to invite" but also "to pay for the other person".',
    },
    {
      id: 'x.a2.l16.28',
      kind: 'mcq',
      prompt: 'Wann treffen sich Lena und Paul?',
      options: ['Um Viertel vor acht.', 'Um acht Uhr.', 'Um halb acht.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      hint: 'Two times are mentioned. One is for the table, one is for the two of them.',
      explain:
        'Acht Uhr is the reservation Lena makes; Paul then sets the meeting for Viertel vor acht, a quarter of an hour earlier. The last time named is the one that applies to the people.',
    },
  ],
}

export default listening
