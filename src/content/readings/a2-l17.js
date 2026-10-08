/**
 * A2 · L17 — Reading: a blog post about the day of a move that went wrong.
 *
 * A personal blog entry, told entirely in the Perfekt with war/hatte for the
 * background. The story runs along the chain zuerst – dann – plötzlich – zum
 * Glück – schließlich, so the comprehension questions can ask for the order of
 * events, not only for single facts.
 *
 * Exercise ids: x.a2.l17.20 … x.a2.l17.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a2.l17.umzugstag',
  level: 'A2',
  title: 'Mein erster Tag in Hamburg',
  titleEn: 'My first day in Hamburg',
  minutes: 4,
  intro:
    'Katja writes a blog about her life in the north. In this post she tells the story of her moving day. Read for three things: what went well in the morning, what went wrong in the afternoon, and who saved the day.',
  paragraphs: [
    'Vor drei Jahren bin ich nach Hamburg umgezogen. Ich erinnere mich noch genau an diesen Tag, denn er war ziemlich chaotisch.',
    'Zuerst ist alles gut gelaufen. Der Umzugswagen ist pünktlich gekommen, und drei Freunde haben mir geholfen. Wir haben den ganzen Vormittag Kisten in den vierten Stock getragen. Mittags haben wir zusammen Pizza gegessen.',
    'Dann ist etwas Dummes passiert. Ich habe die Wohnungstür zugemacht und meinen Schlüssel in der Küche vergessen. Wir haben überall gesucht, aber wir haben ihn natürlich nicht gefunden. Plötzlich waren wir zu viert im Treppenhaus.',
    'Zum Glück ist meine neue Nachbarin aus ihrer Wohnung gekommen. Sie hat für uns Kaffee gekocht und danach den Notdienst angerufen. Der Mann vom Notdienst ist nach einer Stunde gekommen und hat die Tür in zwei Minuten aufgemacht.',
    'Schließlich war alles gut. Meine Nachbarin heißt Britta, und heute ist sie meine beste Freundin in Hamburg. Ein schlechter Tag ist also manchmal ein guter Anfang.',
  ],
  glossary: [
    { de: 'der Umzugswagen', en: 'the removal van' },
    { de: 'die Kiste', en: 'the box, the crate' },
    { de: 'im vierten Stock', en: 'on the fourth floor' },
    { de: 'zumachen', en: 'to close, to shut' },
    { de: 'das Treppenhaus', en: 'the stairwell' },
    { de: 'zu viert', en: 'the four of us together' },
    { de: 'der Notdienst', en: 'the emergency service (here: an out-of-hours locksmith)' },
    { de: 'aufmachen', en: 'to open' },
    { de: 'etwas Dummes', en: 'something stupid' },
  ],
  questions: [
    {
      id: 'x.a2.l17.20',
      kind: 'mcq',
      prompt: 'Wann ist Katja nach Hamburg umgezogen?',
      options: ['Vor drei Jahren.', 'Vor drei Wochen.', 'Letztes Jahr.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The very first words give the answer: Vor drei Jahren. vor + a period of time always means "ago", and it is the standard way a German story sets its date.',
    },
    {
      id: 'x.a2.l17.21',
      kind: 'mcq',
      prompt: 'Was haben Katja und ihre Freunde am Vormittag gemacht?',
      options: [
        'Sie haben Kisten in den vierten Stock getragen.',
        'Sie haben die Wohnung geputzt.',
        'Sie haben den Notdienst angerufen.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The second paragraph says den ganzen Vormittag Kisten … getragen. The phone call happens much later in the text, so the time word decides which answer fits.',
    },
    {
      id: 'x.a2.l17.22',
      kind: 'mcq',
      prompt: 'Warum kommen alle nicht mehr in die Wohnung?',
      options: [
        'Der Schlüssel liegt in der Küche.',
        'Die Nachbarin hat die Tür zugemacht.',
        'Der Umzugswagen ist zu spät gekommen.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Katja writes: Ich habe die Wohnungstür zugemacht und meinen Schlüssel in der Küche vergessen. She closed the door herself — the neighbour only appears afterwards, as the rescue.',
    },
    {
      id: 'x.a2.l17.23',
      kind: 'mcq',
      prompt: 'Was hat die Nachbarin zuerst gemacht?',
      options: [
        'Sie hat Kaffee gekocht.',
        'Sie hat den Notdienst angerufen.',
        'Sie hat die Tür aufgemacht.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      hint: 'Two of the three things really happen — but one word in the text puts them in order.',
      explain:
        'The sentence runs: Sie hat für uns Kaffee gekocht und danach den Notdienst angerufen. danach means "after that", so the coffee comes first. The door is opened by the Notdienst man, not by her.',
    },
    {
      id: 'x.a2.l17.24',
      kind: 'blank',
      sentence: 'Heute ist die Nachbarin Britta Katjas beste ___ in Hamburg.',
      options: ['Freundin', 'Kollegin', 'Nachbarin'],
      answer: 'Freundin',
      skill: 'reading',
      difficulty: 2,
      explain:
        'The last paragraph closes the story: heute ist sie meine beste Freundin in Hamburg. Britta is of course still the neighbour, but the point of the ending is what she has become.',
    },
  ],
}

export default reading
