/**
 * A1 · L01 — Conversation: your first day in the office.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l01.erster-arbeitstag',
    level: 'A1',
    title: 'Your first day at the office',
    icon: '🤝',
    setting:
      'Monday, nine in the morning. It is your first day at a new company. A colleague walks over to your desk with a coffee.',
    goal: 'Greet Lena, tell her your name, say how you are, meet the boss politely with Sie, and say goodbye.',
    roleBot: 'Lena, a colleague on your team',
    roleUser: 'You, the new team member',
    vocabIds: [
      'v.a1.l01.hallo',
      'v.a1.l01.guten-morgen',
      'v.a1.l01.guten-tag',
      'v.a1.l01.tschuess',
      'v.a1.l01.auf-wiedersehen',
      'v.a1.l01.heissen',
      'v.a1.l01.wie-geht-es-dir',
      'v.a1.l01.danke',
      'v.a1.l01.freut-mich',
      'v.a1.l01.gut',
      'v.a1.l01.herr',
      'v.a1.l01.frau',
    ],
    grammarIds: ['g.a1.pronomen', 'g.a1.sein'],
    tags: ['greetings', 'hoeflichkeit'],
    turns: [
      {
        bot: {
          de: 'Guten Morgen! Willkommen im Team. Ich bin Lena.',
          en: 'Good morning! Welcome to the team. I am Lena.',
        },
        accept: [
          {
            match: ['guten morgen'],
            reply: {
              de: 'Guten Morgen! Vor zwölf Uhr ist das genau richtig.',
              en: 'Good morning! Before twelve that is exactly right.',
            },
          },
          {
            match: ['guten tag'],
            reply: {
              de: 'Guten Tag! Das geht den ganzen Tag — auch am Morgen.',
              en: 'Hello! That works all day long — in the morning too.',
            },
          },
          {
            match: ['hallo', 'hi'],
            reply: {
              de: 'Hallo! Im Team sagen wir alle du, also passt Hallo perfekt.',
              en: 'Hello! In the team we all say du, so Hallo fits perfectly.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, ich verstehe dich nicht. Sagst du „Guten Morgen“ oder „Hallo“?',
          en: 'Sorry, I do not understand you. Do you say "Guten Morgen" or "Hallo"?',
        },
        hints: ['Guten Morgen!', 'Hallo, Lena!', 'Guten Tag!'],
        sample: 'Guten Morgen, Lena!',
        requires: { any: ['guten morgen', 'guten tag', 'guten abend', 'hallo', 'hi'] },
        teaches: ['g.a1.pronomen'],
      },
      {
        bot: {
          de: 'Du bist heute neu, oder? Wie heißt du?',
          en: 'You are new today, right? What is your name?',
        },
        accept: [
          {
            match: ['ich heiße', 'ich heisse'],
            reply: {
              de: 'Freut mich, {name}! „Ich heiße …“ ist die normale Antwort auf diese Frage.',
              en: 'Nice to meet you, {name}! "Ich heiße …" is the normal answer to this question.',
            },
          },
          {
            match: ['mein name ist'],
            reply: {
              de: 'Freut mich, {name}! „Mein Name ist …“ klingt etwas formeller — im Büro auch gut.',
              en: 'Nice to meet you, {name}! "Mein Name ist …" sounds a bit more formal — fine in the office too.',
            },
          },
          {
            match: ['ich bin'],
            reply: {
              de: 'Freut mich, {name}! „Ich bin …“ ist kurz und sehr freundlich.',
              en: 'Nice to meet you, {name}! "Ich bin …" is short and very friendly.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — wie heißt du? Ich bin Lena.',
          en: 'Sorry — what is your name? I am Lena.',
        },
        hints: ['Ich heiße …', 'Mein Name ist …', 'Ich bin …'],
        sample: 'Ich heiße Aashish.',
        requires: { any: ['ich heiße', 'ich heisse', 'mein name ist', 'ich bin'] },
        teaches: ['g.a1.sein'],
      },
      {
        bot: {
          de: 'Und wie geht es dir heute, {name}?',
          en: 'And how are you today, {name}?',
        },
        accept: [
          {
            match: ['gut', 'super', 'prima'],
            reply: {
              de: 'Das ist schön! Der erste Tag ist immer ein bisschen aufregend.',
              en: 'That is good! The first day is always a bit exciting.',
            },
          },
          {
            match: ['nervös', 'nervos', 'müde', 'muede'],
            reply: {
              de: 'Das ist ganz normal. Der Kaffee ist in der Küche — er hilft immer.',
              en: 'That is completely normal. The coffee is in the kitchen — it always helps.',
            },
          },
          {
            match: ['danke', 'es geht'],
            reply: {
              de: 'Bitte! Mir geht es auch gut, danke.',
              en: 'You are welcome! I am fine too, thanks.',
            },
          },
        ],
        fallback: {
          de: 'Wie geht es dir? Danke, gut — oder nicht so gut?',
          en: 'How are you? Fine, thanks — or not so good?',
        },
        hints: ['Danke, gut!', 'Danke, sehr gut. Und dir?', 'Es geht.'],
        sample: 'Danke, gut. Und dir?',
        requires: { any: ['gut', 'danke', 'es geht', 'müde', 'nervös'] },
        teaches: ['g.a1.sein'],
      },
      {
        bot: {
          de: 'Hier kommt dein Chef, Herr Weber. Was sagst du zu ihm?',
          en: 'Here comes your boss, Mr Weber. What do you say to him?',
        },
        accept: [
          {
            match: ['wie geht es ihnen'],
            reply: {
              de: 'Perfekt! „Wie geht es Ihnen?“ mit großem Ihnen — das ist die höfliche Form.',
              en: 'Perfect! "Wie geht es Ihnen?" with a capital Ihnen — that is the polite form.',
            },
          },
          {
            match: ['guten tag', 'guten morgen'],
            reply: {
              de: 'Sehr gut! Bei „Herr“ oder „Frau“ plus Nachname sagst du immer Sie, nie du.',
              en: 'Very good! With "Herr" or "Frau" plus a surname you always use Sie, never du.',
            },
          },
          {
            match: ['hallo', 'wie geht es dir'],
            reply: {
              de: 'Vorsicht! Herr Weber ist dein Chef. Sag lieber „Guten Tag, Herr Weber“ mit Sie.',
              en: 'Careful! Mr Weber is your boss. Better say "Guten Tag, Herr Weber" with Sie.',
            },
          },
        ],
        fallback: {
          de: 'Dein Chef wartet. „Guten Tag, Herr Weber“ ist immer richtig.',
          en: 'Your boss is waiting. "Guten Tag, Herr Weber" is always right.',
        },
        hints: [
          'Guten Tag, Herr Weber!',
          'Guten Morgen, Herr Weber. Wie geht es Ihnen?',
          'Guten Tag, Herr Weber. Freut mich!',
        ],
        sample: 'Guten Tag, Herr Weber. Wie geht es Ihnen?',
        requires: { any: ['guten tag', 'guten morgen', 'wie geht es ihnen'] },
        teaches: ['g.a1.pronomen'],
      },
      {
        bot: {
          de: 'Und das ist Sofia. Sie ist auch neu. Sofia, das ist {name}.',
          en: 'And this is Sofia. She is new too. Sofia, this is {name}.',
        },
        accept: [
          {
            match: ['freut mich'],
            reply: {
              de: 'Sofia: „Freut mich auch!“ Genau so macht man das in Deutschland.',
              en: 'Sofia: "Nice to meet you too!" That is exactly how it is done in Germany.',
            },
          },
          {
            match: ['wie geht es dir', 'wie heißt du', 'wie heisst du'],
            reply: {
              de: 'Sofia: „Danke, gut! Und dir?“ Eine Frage zurück ist immer freundlich.',
              en: 'Sofia: "Fine, thanks! And you?" A question back is always friendly.',
            },
          },
          {
            match: ['hallo', 'hi', 'guten tag'],
            reply: {
              de: 'Sofia: „Hallo, {name}! Willkommen.“ Ihr seid im gleichen Team, also sagt ihr du.',
              en: 'Sofia: "Hello, {name}! Welcome." You are on the same team, so you say du.',
            },
          },
        ],
        fallback: {
          de: 'Sofia wartet. „Hallo, ich heiße …“ oder „Freut mich“ ist perfekt.',
          en: 'Sofia is waiting. "Hallo, ich heiße …" or "Freut mich" is perfect.',
        },
        hints: ['Freut mich!', 'Hallo, Sofia! Ich heiße …', 'Hallo! Wie geht es dir?'],
        sample: 'Hallo, Sofia! Freut mich.',
        requires: { any: ['freut mich', 'hallo', 'hi', 'wie geht es', 'ich heiße', 'ich heisse'] },
        teaches: ['g.a1.pronomen'],
      },
      {
        bot: {
          de: 'So, der Tag ist zu Ende. Ich gehe jetzt nach Hause. Bis morgen, {name}!',
          en: 'Right, the day is over. I am going home now. See you tomorrow, {name}!',
        },
        accept: [
          {
            match: ['tschüss', 'tschuess', 'tschüs'],
            reply: {
              de: 'Tschüss, {name}! Unter Kollegen ist „Tschüss“ genau richtig.',
              en: 'Bye, {name}! Among colleagues "Tschüss" is exactly right.',
            },
          },
          {
            match: ['auf wiedersehen'],
            reply: {
              de: 'Auf Wiedersehen! Sehr höflich — für den Chef ideal, für mich ein bisschen formell.',
              en: 'Goodbye! Very polite — ideal for the boss, a little formal for me.',
            },
          },
          {
            match: ['bis morgen', 'bis bald', 'bis später'],
            reply: {
              de: 'Bis morgen! Ich bin um neun wieder im Büro.',
              en: 'See you tomorrow! I am back in the office at nine.',
            },
          },
        ],
        fallback: {
          de: 'Hallo? Ich gehe jetzt. Sagst du „Tschüss“ oder „Auf Wiedersehen“?',
          en: 'Hello? I am going now. Do you say "Tschüss" or "Auf Wiedersehen"?',
        },
        hints: ['Tschüss, Lena!', 'Auf Wiedersehen!', 'Bis morgen!'],
        sample: 'Tschüss, Lena! Bis morgen.',
        requires: { any: ['tschüss', 'tschuess', 'auf wiedersehen', 'bis morgen', 'bis bald'] },
      },
    ],
    closing: {
      de: 'Super! Erster Tag, erstes Gespräch auf Deutsch. Bis morgen!',
      en: 'Great! First day, first conversation in German. See you tomorrow!',
    },
  },
]

export default conversations
