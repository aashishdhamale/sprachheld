/**
 * A1 · L09 — Making weekend plans with a friend.
 *
 * Nina has Saturday off and wants a plan. The learner has to produce a hobby,
 * a preference with gern, a weather sentence with es, and two modal verbs
 * (können / möchten / müssen) with the infinitive at the end.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l09.wochenendplan',
    level: 'A1',
    title: 'Making plans for the weekend',
    titleDe: 'Pläne für das Wochenende',
    icon: '⚽',
    setting:
      'Thursday evening. Your friend Nina writes to you: she has Saturday off and wants to do something together.',
    goal: 'Say what you would like to do, what your hobby is, how the weather will be, and agree on a time.',
    roleBot: 'Nina, deine Freundin',
    roleUser: 'You, making the plan with her',
    vocabIds: [
      'v.a1.l09.hobby',
      'v.a1.l09.freizeit',
      'v.a1.l09.sport',
      'v.a1.l09.schwimmen',
      'v.a1.l09.wandern',
      'v.a1.l09.kochen',
      'v.a1.l09.tanzen',
      'v.a1.l09.fotografieren',
      'v.a1.l09.gern',
      'v.a1.l09.lieber',
      'v.a1.l09.wetter',
      'v.a1.l09.sonne',
      'v.a1.l09.regen',
      'v.a1.l09.regnen',
      'v.a1.l09.grad',
    ],
    grammarIds: ['g.a1.modalverben'],
    tags: ['modalverben', 'wortstellung'],
    turns: [
      /* ── 1. What do you want to do? ────────────────────────────────────── */
      {
        bot: {
          de: 'Hallo {name}! Am Samstag habe ich frei. Was möchtest du am Wochenende machen?',
          en: 'Hi {name}! I have Saturday off. What would you like to do at the weekend?',
        },
        accept: [
          {
            match: ['fußball', 'fussball', 'sport', 'spielen'],
            reply: {
              de: 'Fußball, sehr gut! Ich spiele auch gern Fußball. Im Park ist immer Platz.',
              en: 'Football, great! I like playing football too. There is always space in the park.',
            },
          },
          {
            match: ['wandern', 'park', 'draußen', 'spazieren'],
            reply: {
              de: 'Wandern finde ich toll. Dann müssen wir aber früh anfangen.',
              en: 'I think hiking is great. But then we have to start early.',
            },
          },
          {
            match: ['kochen', 'essen', 'musik', 'tanzen', 'fotografieren', 'schwimmen'],
            reply: {
              de: 'Das klingt schön, {name}! Ich koche auch sehr gern.',
              en: 'That sounds nice, {name}! I like cooking a lot too.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das verstehe ich nicht. Was möchtest du machen? Zum Beispiel: „Ich möchte Fußball spielen.“',
          en: 'Sorry, I do not understand. What would you like to do? For example: "Ich möchte Fußball spielen."',
        },
        hints: ['Ich möchte Fußball spielen.', 'Ich möchte wandern.', 'Ich möchte kochen und Musik hören.'],
        sample: 'Ich möchte am Samstag Fußball spielen.',
        requires: { any: ['möchte', 'spielen', 'wandern', 'kochen', 'schwimmen'] },
        teaches: ['g.a1.modalverben'],
      },

      /* ── 2. Your hobby ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und was ist eigentlich dein Hobby? Was machst du gern in der Freizeit?',
          en: 'And what is your hobby, actually? What do you like doing in your free time?',
        },
        accept: [
          {
            match: ['schwimm', 'sport', 'fitness'],
            reply: {
              de: 'Schwimmen ist super. Ich schwimme leider nicht so gut.',
              en: 'Swimming is great. Unfortunately I do not swim very well.',
            },
          },
          {
            match: ['musik', 'tanz', 'singe'],
            reply: {
              de: 'Musik! Am liebsten tanze ich. Vielleicht tanzen wir mal zusammen.',
              en: 'Music! Most of all I like dancing. Maybe we will dance together some time.',
            },
          },
          {
            match: ['foto', 'koch', 'lese', 'buch', 'garten'],
            reply: {
              de: 'Schön, {name}. Das möchte ich auch einmal lernen.',
              en: 'Nice, {name}. I would like to learn that too one day.',
            },
          },
        ],
        fallback: {
          de: 'Sag das noch einmal, bitte. Was machst du gern? Zum Beispiel: „Ich schwimme gern.“',
          en: 'Say that again, please. What do you like doing? For example: "Ich schwimme gern."',
        },
        hints: ['Ich schwimme gern.', 'Mein Hobby ist Musik.', 'In der Freizeit koche ich gern.'],
        sample: 'Ich schwimme gern. Das ist mein Hobby.',
        requires: { any: ['gern', 'hobby', 'schwimme', 'koche', 'tanze', 'fotografiere'] },
        teaches: ['g.a1.modalverben'],
      },

      /* ── 3. The weather ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Eine Frage noch: Wie ist das Wetter am Samstag?',
          en: 'One more question: what is the weather like on Saturday?',
        },
        accept: [
          {
            match: ['sonnig', 'sonne', 'warm', 'schön', 'grad'],
            reply: {
              de: 'Perfekt! Bei Sonne können wir den ganzen Tag draußen sein.',
              en: 'Perfect! When it is sunny we can be outside all day.',
            },
          },
          {
            match: ['regnet', 'regen', 'kalt', 'schlecht', 'wind'],
            reply: {
              de: 'Oh nein, Regen. Dann müssen wir vielleicht drinnen bleiben.',
              en: 'Oh no, rain. Then we may have to stay indoors.',
            },
          },
          {
            match: ['weiß nicht', 'keine ahnung', 'vielleicht', 'ich glaube'],
            reply: {
              de: 'Kein Problem. Das Wetter am Samstag ist noch nicht sicher.',
              en: 'No problem. Saturday’s weather is not certain yet.',
            },
          },
        ],
        fallback: {
          de: 'Also, wie ist das Wetter am Samstag? Zum Beispiel: „Es ist sonnig.“ oder „Es regnet.“',
          en: 'So, what is the weather like on Saturday? For example: "Es ist sonnig." or "Es regnet."',
        },
        hints: ['Es ist sonnig und warm.', 'Es regnet leider.', 'Wir haben zwanzig Grad.'],
        sample: 'Es ist sonnig und warm, ungefähr zwanzig Grad.',
        requires: { any: ['sonnig', 'sonne', 'regnet', 'regen', 'warm', 'kalt', 'grad'] },
        teaches: ['g.a1.modalverben'],
      },

      /* ── 4. A time ─────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Ich möchte am Samstag im Park fotografieren. Kannst du um zehn Uhr kommen?',
          en: 'I would like to take photos in the park on Saturday. Can you come at ten?',
        },
        accept: [
          {
            match: ['ja', 'gern', 'natürlich', 'klar', 'kann kommen'],
            reply: {
              de: 'Super, {name}! Dann sind wir um zehn Uhr im Park.',
              en: 'Great, {name}! Then we will be in the park at ten.',
            },
          },
          {
            match: ['nein', 'leider', 'kann nicht', 'arbeiten', 'keine zeit'],
            reply: {
              de: 'Schade. Kannst du vielleicht am Nachmittag?',
              en: 'What a pity. Could you do the afternoon perhaps?',
            },
          },
          {
            match: ['später', 'elf', 'zwölf', 'nachmittag', 'lieber um'],
            reply: {
              de: 'Gut, dann später. Um zwölf Uhr ist die Sonne sowieso besser.',
              en: 'Good, later then. At twelve the sun is better anyway.',
            },
          },
        ],
        fallback: {
          de: 'Sorry — kannst du am Samstag um zehn Uhr kommen? Ja oder nein?',
          en: 'Sorry — can you come at ten on Saturday? Yes or no?',
        },
        hints: ['Ja, ich kann um zehn Uhr kommen.', 'Nein, ich kann leider nicht.', 'Ich möchte lieber um zwölf Uhr kommen.'],
        sample: 'Ja, gern! Ich kann um zehn Uhr kommen.',
        requires: { any: ['ja', 'nein', 'kann', 'möchte'] },
        teaches: ['g.a1.modalverben'],
      },

      /* ── 5. Plan B for Sunday ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Am Sonntag regnet es leider. Was können wir dann machen?',
          en: 'On Sunday it is going to rain, unfortunately. What can we do then?',
        },
        accept: [
          {
            match: ['kochen', 'essen', 'kuchen'],
            reply: {
              de: 'Perfekt! Wir kochen zusammen und hören Musik.',
              en: 'Perfect! We will cook together and listen to music.',
            },
          },
          {
            match: ['musik', 'film', 'fernsehen', 'tanzen', 'lesen', 'spiel'],
            reply: {
              de: 'Gute Idee! Bei Regen ist das genau richtig.',
              en: 'Good idea! When it rains that is exactly right.',
            },
          },
          {
            match: ['schwimm', 'sport', 'fotografieren'],
            reply: {
              de: 'Das geht auch bei Regen. Nass werden wir ja sowieso!',
              en: 'That works in the rain too. We are going to get wet anyway!',
            },
          },
        ],
        fallback: {
          de: 'Hm, was können wir am Sonntag machen? Zum Beispiel: „Wir können kochen.“',
          en: 'Hm, what can we do on Sunday? For example: "Wir können kochen."',
        },
        hints: ['Wir können kochen.', 'Wir können Musik hören.', 'Ich möchte lieber tanzen.'],
        sample: 'Wir können kochen und Musik hören.',
        requires: { any: ['können', 'kochen', 'musik', 'möchte', 'tanzen'] },
        teaches: ['g.a1.modalverben'],
      },

      /* ── 6. Tomorrow ───────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Der Plan steht! Eine letzte Frage: Musst du morgen arbeiten?',
          en: 'The plan is set! One last question: do you have to work tomorrow?',
        },
        accept: [
          {
            match: ['ja, ich muss', 'ja', 'muss arbeiten', 'muss'],
            reply: {
              de: 'Oh je. Dann ist der Samstag sicher besonders schön.',
              en: 'Oh dear. Then Saturday will surely be especially nice.',
            },
          },
          {
            match: ['nein', 'frei', 'urlaub'],
            reply: {
              de: 'Sehr schön! Ich muss leider bis achtzehn Uhr arbeiten.',
              en: 'Very nice! Unfortunately I have to work until six.',
            },
          },
          {
            match: ['nur', 'vormittag', 'halb', 'bis zwölf', 'stunden'],
            reply: {
              de: 'Das geht ja noch. Dann hast du am Nachmittag frei.',
              en: 'That is not too bad. Then you are free in the afternoon.',
            },
          },
        ],
        fallback: {
          de: 'Also, musst du morgen arbeiten — ja oder nein?',
          en: 'So, do you have to work tomorrow — yes or no?',
        },
        hints: ['Ja, ich muss arbeiten.', 'Nein, ich habe frei.', 'Ja, aber nur bis zwölf Uhr.'],
        sample: 'Ja, ich muss bis fünf Uhr arbeiten.',
        requires: { any: ['ja', 'nein', 'muss', 'frei'] },
        teaches: ['g.a1.modalverben'],
      },
    ],
    closing: {
      de: 'Wunderbar, {name}! Wir haben einen Plan: Samstag Park, Sonntag drinnen. Bis dann!',
      en: 'Wonderful, {name}! We have a plan: park on Saturday, indoors on Sunday. See you then!',
    },
  },
]

export default conversations
