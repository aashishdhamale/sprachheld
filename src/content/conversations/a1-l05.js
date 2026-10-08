/**
 * A1 · L05 — Daily routine
 *
 * A colleague wants to know what your working day looks like. The learner has
 * to produce separable verbs in real sentences: aufstehen, anfangen, ankommen,
 * fernsehen, mitkommen — plus clock times and frequency words.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l05.arbeitstag',
    level: 'A1',
    title: 'A normal working day',
    titleDe: 'Ein ganz normaler Arbeitstag',
    icon: '⏰',
    setting:
      'Monday morning in the office kitchen. Your colleague Jonas pours a coffee and asks how your days usually run.',
    goal: 'Describe your day: when you get up, when work starts, and what you do in the evening.',
    roleBot: 'Jonas, your colleague',
    roleUser: 'You, telling him about your day',
    vocabIds: [
      'v.a1.l05.aufstehen',
      'v.a1.l05.anfangen',
      'v.a1.l05.ankommen',
      'v.a1.l05.fernsehen',
      'v.a1.l05.mitkommen',
      'v.a1.l05.einkaufen',
      'v.a1.l05.fruehstuecken',
      'v.a1.l05.morgens',
      'v.a1.l05.abends',
      'v.a1.l05.nie',
    ],
    grammarIds: ['g.a1.trennbar', 'g.a1.unregelmaessig'],
    tags: ['trennbar', 'wortstellung'],
    turns: [
      /* ── 1. Getting up ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Morgen, {name}! Du bist ja immer so früh da. Wann stehst du morgens auf?',
          en: 'Good morning, {name}! You are always here so early. When do you get up in the morning?',
        },
        accept: [
          {
            match: ['fünf', 'halb sechs', 'sechs'],
            reply: {
              de: 'Oh, das ist wirklich früh! Mein Wecker klingelt erst um sieben Uhr.',
              en: 'Oh, that really is early! My alarm clock does not ring until seven.',
            },
          },
          {
            match: ['sieben', 'halb acht'],
            reply: {
              de: 'Genau wie ich, {name}. Um sieben Uhr klingelt auch mein Wecker.',
              en: 'Exactly like me, {name}. My alarm clock rings at seven too.',
            },
          },
          {
            match: ['acht', 'neun', 'spät'],
            reply: {
              de: 'Schön, du schläfst gern lange! Ich kann das leider nicht.',
              en: 'Nice, you like to sleep in! Unfortunately I cannot do that.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das verstehe ich nicht. Wann stehst du auf? Zum Beispiel: „Ich stehe um sieben Uhr auf.“',
          en: 'Sorry, I do not understand. When do you get up? For example: "Ich stehe um sieben Uhr auf."',
        },
        hints: ['Ich stehe um … Uhr auf.', 'Um halb sieben stehe ich auf.', 'Mein Wecker klingelt um …'],
        sample: 'Ich stehe um sieben Uhr auf.',
        requires: { any: ['stehe', 'uhr', 'wecker'] },
        teaches: ['g.a1.trennbar'],
      },

      /* ── 2. When work starts ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Und wann fängt deine Arbeit an?',
          en: 'And when does your work start?',
        },
        accept: [
          {
            match: ['acht', 'halb neun'],
            reply: {
              de: 'Bei mir auch. Um acht Uhr sind fast alle im Büro.',
              en: 'For me too. At eight almost everyone is in the office.',
            },
          },
          {
            match: ['neun', 'zehn'],
            reply: {
              de: 'Das ist entspannt. Ich fange schon um acht Uhr an.',
              en: 'That is relaxed. I already start at eight.',
            },
          },
          {
            match: ['sechs', 'sieben', 'früh'],
            reply: {
              de: 'So früh! Dann hast du am Nachmittag frei, oder?',
              en: 'That early! Then you are free in the afternoon, right?',
            },
          },
        ],
        fallback: {
          de: 'Sag das noch einmal, bitte. Wann fängt deine Arbeit an? Zum Beispiel: „Meine Arbeit fängt um acht Uhr an.“',
          en: 'Say that again, please. When does your work start? For example: "Meine Arbeit fängt um acht Uhr an."',
        },
        hints: ['Meine Arbeit fängt um … an.', 'Ich fange um neun Uhr an.', 'Um acht Uhr fängt die Arbeit an.'],
        sample: 'Meine Arbeit fängt um acht Uhr an.',
        requires: { any: ['fängt', 'fange', 'uhr'] },
        teaches: ['g.a1.trennbar'],
      },

      /* ── 3. Breakfast ──────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Frühstückst du morgens? Ich habe nie Zeit für ein Frühstück.',
          en: 'Do you have breakfast in the morning? I never have time for breakfast.',
        },
        accept: [
          {
            match: ['ja', 'frühstücke', 'kaffee', 'brot'],
            reply: {
              de: 'Sehr gut! Ein Frühstück ist wichtig. Ich trinke nur einen Kaffee im Büro.',
              en: 'Very good! Breakfast is important. I only drink a coffee in the office.',
            },
          },
          {
            match: ['nein', 'nie', 'keine zeit'],
            reply: {
              de: 'Wir sind gleich, {name}! Morgens ist einfach keine Zeit.',
              en: 'We are the same, {name}! In the morning there is simply no time.',
            },
          },
          {
            match: ['manchmal', 'wochenende', 'samstag', 'sonntag'],
            reply: {
              de: 'Am Wochenende frühstücke ich auch gern lange.',
              en: 'At the weekend I like to have a long breakfast too.',
            },
          },
        ],
        fallback: {
          de: 'Also, frühstückst du morgens — ja oder nein?',
          en: 'So, do you have breakfast in the morning — yes or no?',
        },
        hints: ['Ja, ich frühstücke jeden Tag.', 'Nein, ich frühstücke nie.', 'Manchmal, am Wochenende.'],
        sample: 'Ja, ich frühstücke jeden Tag um halb sieben.',
        requires: { any: ['ja', 'nein', 'frühstücke', 'manchmal'] },
        teaches: ['g.a1.praesens'],
      },

      /* ── 4. Coming home ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Ich fahre mit dem Zug. Abends komme ich erst um sieben Uhr zu Hause an. Und du?',
          en: 'I travel by train. In the evening I only get home at seven. And you?',
        },
        accept: [
          {
            match: ['vier', 'fünf', 'halb sechs'],
            reply: {
              de: 'Das ist super. Dann hast du noch einen langen Abend.',
              en: 'That is great. Then you still have a long evening.',
            },
          },
          {
            match: ['sechs', 'sieben'],
            reply: {
              de: 'Genau wie ich. Der Abend ist dann leider kurz.',
              en: 'Exactly like me. Unfortunately the evening is short then.',
            },
          },
          {
            match: ['acht', 'neun', 'spät'],
            reply: {
              de: 'Oh, so spät! Dann isst du sicher erst um neun Uhr.',
              en: 'Oh, that late! Then you surely do not eat until nine.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — wann bist du abends zu Hause? Zum Beispiel: „Ich komme um sechs Uhr an.“',
          en: 'Sorry — when are you home in the evening? For example: "Ich komme um sechs Uhr an."',
        },
        hints: ['Ich komme um … Uhr an.', 'Um halb sieben bin ich zu Hause.', 'Ich fahre um fünf Uhr nach Hause.'],
        sample: 'Ich komme um halb sechs zu Hause an.',
        requires: { any: ['komme', 'uhr', 'zu hause'] },
        teaches: ['g.a1.trennbar'],
      },

      /* ── 5. The evening ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und was machst du abends? Ich sehe fast jeden Tag fern.',
          en: 'And what do you do in the evening? I watch TV almost every day.',
        },
        accept: [
          {
            match: ['fern', 'serie', 'film'],
            reply: {
              de: 'Wir sind gleich! Am Montag kommt ein guter Film.',
              en: 'We are the same! There is a good film on Monday.',
            },
          },
          {
            match: ['lese', 'buch', 'lesen', 'zeitung'],
            reply: {
              de: 'Schön. Ich lese leider nie — abends bin ich zu müde.',
              en: 'Nice. Unfortunately I never read — in the evening I am too tired.',
            },
          },
          {
            match: ['koche', 'sport', 'musik', 'freunde', 'deutsch'],
            reply: {
              de: 'Das klingt gut, {name}! Ich bin abends oft zu faul.',
              en: 'That sounds good, {name}! In the evening I am often too lazy.',
            },
          },
        ],
        fallback: {
          de: 'Sorry, was machst du abends? Zum Beispiel: „Abends sehe ich fern.“',
          en: 'Sorry, what do you do in the evening? For example: "Abends sehe ich fern."',
        },
        hints: ['Abends sehe ich fern.', 'Ich lese ein Buch.', 'Ich koche und höre Musik.'],
        sample: 'Abends sehe ich fern und lese ein Buch.',
        requires: { any: ['sehe', 'lese', 'koche', 'mache'] },
        teaches: ['g.a1.unregelmaessig'],
      },

      /* ── 6. The invitation ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Ich kaufe am Samstag um zehn Uhr ein. Kommst du mit, {name}?',
          en: 'I am doing the shopping on Saturday at ten. Are you coming along, {name}?',
        },
        accept: [
          {
            match: ['ja', 'gern', 'komme mit', 'natürlich'],
            reply: {
              de: 'Super! Dann bis Samstag um zehn Uhr.',
              en: 'Great! See you on Saturday at ten, then.',
            },
          },
          {
            match: ['nein', 'leider', 'keine zeit', 'kann nicht'],
            reply: {
              de: 'Schade! Vielleicht das nächste Mal.',
              en: 'What a pity! Maybe next time.',
            },
          },
          {
            match: ['wann', 'wie spät', 'wo'],
            reply: {
              de: 'Um zehn Uhr im Supermarkt. Er macht schon um acht Uhr auf.',
              en: 'At ten at the supermarket. It opens at eight already.',
            },
          },
        ],
        fallback: {
          de: 'Also, kommst du am Samstag mit — ja oder nein?',
          en: 'So, are you coming along on Saturday — yes or no?',
        },
        hints: ['Ja, gern! Ich komme mit.', 'Nein, leider habe ich keine Zeit.', 'Wann fängt es an?'],
        sample: 'Ja, gern! Ich komme mit.',
        requires: { any: ['ja', 'nein', 'gern', 'komme mit'] },
        teaches: ['g.a1.trennbar'],
      },
    ],
    closing: {
      de: 'Danke für das Gespräch, {name}! Jetzt kenne ich deinen Tag. Bis Samstag!',
      en: 'Thanks for the chat, {name}! Now I know your day. See you on Saturday!',
    },
  },
]

export default conversations
