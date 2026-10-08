/**
 * A1 · L03 — Conversation: fixing a day and a time for a coffee.
 *
 * Every turn has real branches, so a different answer leads somewhere
 * different. Plain data only.
 */

export const conversations = [
  {
    id: 'c.a1.l03.kaffee-termin',
    level: 'A1',
    title: 'Einen Kaffee-Termin machen',
    icon: '☕',
    setting: 'Your friend Jonas writes to you. He would like to meet for a coffee this week.',
    goal: 'Agree on a day and a time, and say the appointment back at the end.',
    roleBot: 'Jonas, dein Freund',
    roleUser: 'Du',
    vocabIds: [
      'v.a1.l03.uhr',
      'v.a1.l03.stunde',
      'v.a1.l03.termin',
      'v.a1.l03.woche',
      'v.a1.l03.halb',
      'v.a1.l03.viertel',
    ],
    grammarIds: ['g.a1.janein', 'g.a1.satzbau'],
    tags: ['zeitangaben', 'wortstellung'],
    turns: [
      {
        bot: {
          de: 'Hallo {name}! Hast du diese Woche Zeit für einen Kaffee?',
          en: 'Hello {name}! Do you have time for a coffee this week?',
        },
        accept: [
          {
            match: ['ja', 'gern', 'gerne', 'klar'],
            reply: {
              de: 'Super, das ist eine gute Idee!',
              en: 'Great, that is a good idea!',
            },
          },
          {
            match: ['nein', 'leider', 'keine zeit'],
            reply: {
              de: 'Schade! Dann machen wir es nächste Woche.',
              en: 'What a pity! Then let us do it next week.',
            },
          },
          {
            match: ['vielleicht', 'weiß nicht', 'weiss nicht', 'mal sehen'],
            reply: {
              de: 'Kein Problem, wir finden bestimmt einen Termin.',
              en: 'No problem, I am sure we will find a slot.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — hast du diese Woche Zeit? Ja oder nein?',
          en: 'Sorry — do you have time this week? Yes or no?',
        },
        hints: ['Ja, gern!', 'Ja, ich habe Zeit.', 'Nein, leider habe ich keine Zeit.'],
        sample: 'Ja, gern!',
        requires: { any: ['ja', 'gern', 'klar', 'nein', 'leider'] },
        teaches: ['g.a1.janein'],
      },
      {
        bot: {
          de: 'Wann hast du Zeit: am Dienstag oder am Donnerstag?',
          en: 'When do you have time: on Tuesday or on Thursday?',
        },
        accept: [
          {
            match: ['dienstag'],
            reply: {
              de: 'Dienstag ist perfekt. Den Tag schreibe ich in meinen Kalender.',
              en: 'Tuesday is perfect. I will put that day in my calendar.',
            },
          },
          {
            match: ['donnerstag'],
            reply: {
              de: 'Donnerstag ist auch gut. Am Donnerstag arbeite ich nur bis zwei.',
              en: 'Thursday is fine too. On Thursday I only work until two.',
            },
          },
          {
            match: ['egal', 'beide', 'alle zwei'],
            reply: {
              de: 'Dann nehmen wir den Dienstag — am Donnerstag ist das Café immer voll.',
              en: 'Then let us take Tuesday — on Thursday the café is always full.',
            },
          },
        ],
        fallback: {
          de: 'Also: Dienstag oder Donnerstag? Sag einfach „Am Dienstag" oder „Am Donnerstag".',
          en: 'So: Tuesday or Thursday? Just say "Am Dienstag" or "Am Donnerstag".',
        },
        hints: ['Am Dienstag habe ich Zeit.', 'Am Donnerstag, bitte.', 'Beide Tage sind gut.'],
        sample: 'Am Dienstag habe ich Zeit.',
        requires: { any: ['dienstag', 'donnerstag', 'egal', 'beide'] },
        teaches: ['g.a1.satzbau'],
      },
      {
        bot: {
          de: 'Gut. Und um wie viel Uhr hast du Zeit?',
          en: 'Good. And at what time do you have time?',
        },
        accept: [
          {
            match: ['vormittag', 'zehn', 'elf', 'morgens'],
            reply: {
              de: 'Am Vormittag ist das Café noch ruhig. Sehr gut!',
              en: 'In the morning the café is still quiet. Very good!',
            },
          },
          {
            match: ['nachmittag', 'drei', 'halb vier', 'vierzehn', 'fünfzehn', 'sechzehn'],
            reply: {
              de: 'Am Nachmittag passt mir auch sehr gut.',
              en: 'The afternoon suits me very well too.',
            },
          },
          {
            match: ['abend', 'sechs', 'sieben', 'acht', 'achtzehn', 'neunzehn'],
            reply: {
              de: 'Am Abend, nach der Arbeit — perfekt.',
              en: 'In the evening, after work — perfect.',
            },
          },
        ],
        fallback: {
          de: 'Sag mir bitte eine Uhrzeit — zum Beispiel „um zehn Uhr" oder „um halb vier".',
          en: 'Please tell me a time — for example "um zehn Uhr" or "um halb vier".',
        },
        hints: ['Um zehn Uhr, bitte.', 'Um halb vier.', 'Um Viertel nach sechs.'],
        sample: 'Um halb vier, bitte.',
        requires: { any: ['uhr', 'halb', 'viertel', 'um'] },
        teaches: ['g.a1.satzbau'],
      },
      {
        bot: {
          de: 'Prima. Ich kenne ein Café am Marktplatz. Kennst du das Café?',
          en: 'Great. I know a café on the market square. Do you know the café?',
        },
        accept: [
          {
            match: ['ja', 'kenne ich', 'klar'],
            reply: {
              de: 'Sehr gut, dann findest du es sofort.',
              en: 'Very good, then you will find it straight away.',
            },
          },
          {
            match: ['nein', 'nicht', 'leider'],
            reply: {
              de: 'Kein Problem. Es heißt Café Mozart und liegt direkt neben der Post.',
              en: 'No problem. It is called Café Mozart and it is right next to the post office.',
            },
          },
          {
            match: ['wo', 'welches', 'wie heißt', 'wie heisst'],
            reply: {
              de: 'Es heißt Café Mozart. Der Marktplatz ist im Zentrum.',
              en: 'It is called Café Mozart. The market square is in the centre.',
            },
          },
        ],
        fallback: {
          de: 'Kennst du das Café am Marktplatz? Antworte mit „Ja" oder „Nein".',
          en: 'Do you know the café on the market square? Answer with "Ja" or "Nein".',
        },
        hints: ['Ja, ich kenne das Café.', 'Nein, ich kenne es nicht.', 'Wo ist das Café?'],
        sample: 'Nein, ich kenne das Café nicht.',
        requires: { any: ['ja', 'nein', 'kenne', 'wo'] },
        teaches: ['g.a1.janein'],
      },
      {
        bot: {
          de: 'Eine Frage noch: Wie lange hast du Zeit — eine Stunde oder zwei Stunden?',
          en: 'One more question: how long do you have — one hour or two hours?',
        },
        accept: [
          {
            match: ['eine stunde', '1 stunde', 'eine'],
            reply: {
              de: 'Eine Stunde reicht für einen guten Kaffee.',
              en: 'One hour is enough for a good coffee.',
            },
          },
          {
            match: ['zwei stunden', '2 stunden', 'zwei'],
            reply: {
              de: 'Zwei Stunden — super, dann haben wir richtig Zeit.',
              en: 'Two hours — great, then we really have time.',
            },
          },
          {
            match: ['kurz', 'nicht lange', 'dreißig minuten', 'halbe stunde'],
            reply: {
              de: 'Okay, dann machen wir es kurz.',
              en: 'Okay, then we will keep it short.',
            },
          },
        ],
        fallback: {
          de: 'Wie lange hast du Zeit? Zum Beispiel: „Ich habe eine Stunde Zeit."',
          en: 'How long do you have? For example: "Ich habe eine Stunde Zeit."',
        },
        hints: ['Ich habe eine Stunde Zeit.', 'Zwei Stunden, kein Problem.', 'Nur kurz, bitte.'],
        sample: 'Ich habe eine Stunde Zeit.',
        requires: { any: ['stunde', 'stunden', 'kurz', 'minuten'] },
        teaches: ['g.a1.satzbau'],
      },
      {
        bot: {
          de: 'Perfekt, {name}. Sag mir bitte noch einmal Tag und Uhrzeit zusammen.',
          en: 'Perfect, {name}. Please tell me the day and the time once more, together.',
        },
        accept: [
          {
            match: ['dienstag'],
            reply: {
              de: 'Dienstag steht! Ich schreibe den Termin sofort in meinen Kalender.',
              en: 'Tuesday it is! I am putting the appointment in my calendar right now.',
            },
          },
          {
            match: ['donnerstag'],
            reply: {
              de: 'Donnerstag steht! Ich schreibe den Termin sofort in meinen Kalender.',
              en: 'Thursday it is! I am putting the appointment in my calendar right now.',
            },
          },
          {
            match: ['uhr', 'halb', 'viertel'],
            reply: {
              de: 'Die Uhrzeit habe ich. Sag mir beim nächsten Mal auch den Tag dazu!',
              en: 'I have got the time. Next time tell me the day as well!',
            },
          },
        ],
        fallback: {
          de: 'Zum Beispiel: „Am Dienstag um halb vier." Sag es bitte noch einmal.',
          en: 'For example: "Am Dienstag um halb vier." Please say it once more.',
        },
        hints: [
          'Am Dienstag um halb vier.',
          'Am Donnerstag um zehn Uhr.',
          'Wir haben am Dienstag um sechs Uhr einen Termin.',
        ],
        sample: 'Am Dienstag um halb vier.',
        requires: { all: ['um'], any: ['dienstag', 'donnerstag'] },
        teaches: ['g.a1.satzbau'],
      },
    ],
    closing: {
      de: 'Super, {name}! Der Termin steht. Bis bald und danke!',
      en: 'Great, {name}! The appointment is set. See you soon, and thank you!',
    },
  },
]

export default conversations
