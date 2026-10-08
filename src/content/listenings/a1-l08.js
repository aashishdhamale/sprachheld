/**
 * A1 · L08 — Listening: Nina phones Max about her new flat.
 *
 * Ten short lines, one idea each, built for the de-DE text-to-speech voice.
 * The rent is spoken as a word (fünfhundert) so the learner has to hear the
 * number, not read it.
 *
 * Exercise ids x.a1.l08.24 … 27.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l08.neue-wohnung',
  level: 'A1',
  title: 'Die neue Wohnung',
  titleEn: 'The new flat',
  minutes: 3,
  intro:
    'Nina has moved. She calls her friend Max and describes the flat room by room. Listen for two numbers: the rooms and the rent.',
  transcriptHidden: true,
  script: [
    { who: 'Max', text: 'Hallo Nina! Wie ist deine neue Wohnung?' },
    { who: 'Nina', text: 'Sie ist super! Ich habe zwei Zimmer, eine Küche und ein Bad.' },
    { who: 'Max', text: 'Und wie ist das Wohnzimmer?' },
    { who: 'Nina', text: 'Es ist sehr hell. Es hat drei Fenster.' },
    { who: 'Max', text: 'Hast du auch einen Balkon?' },
    { who: 'Nina', text: 'Nein, leider nicht. Aber das Haus hat einen Garten.' },
    { who: 'Max', text: 'Und was kostet die Miete?' },
    { who: 'Nina', text: 'Die Miete kostet fünfhundert Euro im Monat.' },
    { who: 'Max', text: 'Das ist nicht teuer. Ist die Wohnung auch gemütlich?' },
    { who: 'Nina', text: 'Ja! Mein Sofa und meine Lampen sind schon da.' },
  ],
  questions: [
    {
      id: 'x.a1.l08.24',
      kind: 'mcq',
      prompt: 'Wie viele Zimmer hat Ninas Wohnung?',
      options: ['Zwei.', 'Drei.', 'Vier.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'Nina says "Ich habe zwei Zimmer, eine Küche und ein Bad". Germans count only the living and sleeping rooms as Zimmer — kitchen and bathroom come on top.',
    },
    {
      id: 'x.a1.l08.25',
      kind: 'mcq',
      prompt: 'Hat Nina einen Balkon?',
      options: [
        'Nein, aber das Haus hat einen Garten.',
        'Ja, der Balkon ist sehr groß.',
        'Ja, sie hat zwei Balkone.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      explain:
        'She answers "Nein, leider nicht" and then adds the garden. leider ("unfortunately") almost always announces a no.',
    },
    {
      id: 'x.a1.l08.26',
      kind: 'blank',
      sentence: 'Die Miete kostet ___ Euro im Monat.',
      options: ['500', '400', '550', '600'],
      answer: '500',
      skill: 'listening',
      difficulty: 2,
      explain:
        'Nina says fünfhundert. German builds hundreds as one word, hundreds first: fünf + hundert = 500.',
    },
    {
      id: 'x.a1.l08.27',
      kind: 'mcq',
      prompt: 'Wie ist das Wohnzimmer?',
      options: [
        'Sehr hell — es hat drei Fenster.',
        'Sehr dunkel — es hat ein Fenster.',
        'Klein, aber gemütlich.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      hint: 'Count the windows.',
      explain:
        'Nina says "Es ist sehr hell. Es hat drei Fenster." Both halves point the same way: many Fenster is exactly why a room is hell.',
    },
  ],
}

export default listening
