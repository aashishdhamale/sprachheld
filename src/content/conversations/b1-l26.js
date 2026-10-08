/**
 * B1 · L26 — Conversation: swapping travel stories with a colleague at lunch.
 *
 * Seven turns that ask for every B1 structure in turn: the last trip
 * (Perfekt), the best part, something that went wrong, the dream trip
 * (Konjunktiv II), what you would do there, firm plans (Futur I) and a
 * recommendation with a relative clause. du between colleagues; every turn
 * accepts simpler answers too.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.b1.l26.reisegeschichten',
    level: 'B1',
    title: 'Travel talk at lunch',
    titleDe: 'Reisegeschichten in der Mittagspause',
    icon: '🌍',
    setting:
      'Lunch break in the office canteen. Your colleague Nina loves travelling and has just booked her next holiday. She wants to hear your travel stories too.',
    goal:
      'Tell her about your last trip and something that went wrong, describe your dream trip, share your next plans and recommend a city.',
    roleBot: 'Nina, your colleague',
    roleUser: 'You, her colleague',
    vocabIds: [
      'v.b1.l26.traum',
      'v.b1.l26.traeumen',
      'v.b1.l26.entdecken',
      'v.b1.l26.landschaft',
      'v.b1.l26.sehenswuerdigkeit',
      'v.b1.l26.unvergesslich',
      'v.b1.l26.ausland',
    ],
    grammarIds: ['g.b1.konjunktiv2', 'g.b1.praeteritum'],
    tags: ['konjunktiv2', 'perfekt'],
    turns: [
      /* ── 1. Your last trip ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Sag mal, {name}, du reist doch auch gern, oder? Wo warst du zuletzt im Urlaub?',
          en: 'Tell me, {name}, you like travelling too, don’t you? Where were you on holiday last?',
        },
        accept: [
          {
            match: ['war', 'bin', 'gefahren', 'geflogen', 'gereist'],
            reply: {
              de: 'Oh, da wollte ich auch schon immer hin!',
              en: 'Oh, I have always wanted to go there too!',
            },
          },
          {
            match: ['urlaub', 'sommer', 'letztes jahr', 'winter'],
            reply: {
              de: 'Schön! Und wie war es?',
              en: 'Lovely! And how was it?',
            },
          },
          {
            match: ['zu hause', 'keinen urlaub', 'lange nicht'],
            reply: {
              de: 'Oh, dann wird es aber Zeit für eine Reise!',
              en: 'Oh, then it is high time for a trip!',
            },
          },
        ],
        fallback: {
          de: 'Wohin bist du zuletzt gereist?',
          en: 'Where did you travel to last?',
        },
        hints: [
          'Im Sommer war ich zwei Wochen in Italien.',
          'Letztes Jahr bin ich nach Portugal geflogen.',
          'Ich hatte lange keinen Urlaub.',
        ],
        sample: 'Im Sommer war ich zwei Wochen in Italien.',
        requires: { any: ['war', 'bin', 'gefahren', 'geflogen', 'urlaub', 'keinen'] },
        teaches: ['g.b1.praeteritum'],
      },

      /* ── 2. The best part ──────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und was hat dir dort am besten gefallen?',
          en: 'And what did you like best there?',
        },
        accept: [
          {
            match: ['am besten', 'gefallen', 'besonders'],
            reply: {
              de: 'Das klingt wunderschön. Ich bekomme gleich Fernweh!',
              en: 'That sounds beautiful. I am getting wanderlust already!',
            },
          },
          {
            match: ['essen', 'landschaft', 'strand', 'meer', 'berge', 'menschen', 'stadt'],
            reply: {
              de: 'Ach, das klingt toll. Davon träume ich jetzt bestimmt heute Nacht!',
              en: 'Oh, that sounds great. I will probably dream about it tonight!',
            },
          },
        ],
        fallback: {
          de: 'Was war das Schönste an der Reise?',
          en: 'What was the best thing about the trip?',
        },
        hints: [
          'Am besten hat mir die Landschaft gefallen.',
          'Das Essen war fantastisch, besonders die Pizza in Neapel.',
          'Die Menschen waren sehr freundlich.',
        ],
        sample: 'Am besten hat mir die Landschaft am Meer gefallen.',
        requires: { any: ['gefallen', 'essen', 'landschaft', 'strand', 'meer', 'menschen', 'stadt', 'berge'] },
        teaches: ['g.b1.praeteritum'],
      },

      /* ── 3. Something that went wrong ──────────────────────────────────── */
      {
        bot: {
          de: 'Ist dir auf einer Reise schon einmal etwas Lustiges oder Schlimmes passiert?',
          en: 'Has something funny or bad ever happened to you on a trip?',
        },
        accept: [
          {
            match: ['verloren', 'vergessen', 'gestohlen', 'verpasst', 'verirrt'],
            reply: {
              de: 'Oh nein! Wie ist die Geschichte ausgegangen?',
              en: 'Oh no! How did the story end?',
            },
          },
          {
            match: ['einmal', 'passiert', 'lustig', 'schlimm'],
            reply: {
              de: 'Solche Geschichten erzählt man später am liebsten!',
              en: 'Those are the stories you love telling afterwards!',
            },
          },
          {
            match: ['nein', 'noch nie', 'zum glück'],
            reply: {
              de: 'Da hast du aber Glück gehabt!',
              en: 'You have been lucky, then!',
            },
          },
        ],
        fallback: {
          de: 'Ist bei einer Reise schon mal etwas schiefgegangen?',
          en: 'Has anything ever gone wrong on a trip?',
        },
        hints: [
          'Ja, einmal habe ich meinen Koffer am Flughafen verloren.',
          'Wir hatten den Zug verpasst und mussten im Bahnhof schlafen.',
          'Nein, zum Glück noch nie.',
        ],
        sample: 'Ja, einmal habe ich meinen Koffer am Flughafen verloren. Er kam erst nach drei Tagen.',
        requires: { any: ['verloren', 'vergessen', 'verpasst', 'gestohlen', 'passiert', 'nein', 'noch nie', 'verirrt'] },
        teaches: ['g.b1.praeteritum'],
      },

      /* ── 4. The dream trip ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und wohin würdest du gern einmal reisen, wenn Geld keine Rolle spielen würde?',
          en: 'And where would you like to travel one day if money were no object?',
        },
        accept: [
          {
            match: ['würde', 'gern einmal', 'würde gern'],
            reply: {
              de: 'Oh, gute Wahl! Das steht auch auf meiner Liste.',
              en: 'Oh, good choice! That is on my list too.',
            },
          },
          {
            match: ['träume', 'traum', 'möchte'],
            reply: {
              de: 'Ein schöner Traum! Vielleicht klappt es ja bald.',
              en: 'A lovely dream! Maybe it will work out soon.',
            },
          },
        ],
        fallback: {
          de: 'Was wäre deine Traumreise?',
          en: 'What would your dream trip be?',
        },
        hints: [
          'Ich würde gern einmal nach Japan reisen.',
          'Ich träume schon lange von einer Reise nach Australien.',
          'Ich möchte einmal mit dem Zug durch Kanada fahren.',
        ],
        sample: 'Ich würde gern einmal nach Japan reisen.',
        requires: { any: ['würde', 'träume', 'möchte', 'traum'] },
        teaches: ['g.b1.konjunktiv2'],
      },

      /* ── 5. What you would do there ────────────────────────────────────── */
      {
        bot: {
          de: 'Klingt toll! Was würdest du dort machen?',
          en: 'Sounds great! What would you do there?',
        },
        accept: [
          {
            match: ['würde', 'würden'],
            reply: {
              de: 'Das klingt nach einer perfekten Reise.',
              en: 'That sounds like a perfect trip.',
            },
          },
          {
            match: ['besuchen', 'sehen', 'essen', 'wandern', 'lernen', 'kennenlernen', 'entdecken'],
            reply: {
              de: 'Super, da hast du ja schon einen richtigen Plan!',
              en: 'Great, you already have a real plan!',
            },
          },
        ],
        fallback: {
          de: 'Was würdest du dort am liebsten sehen oder machen?',
          en: 'What would you most like to see or do there?',
        },
        hints: [
          'Ich würde die alten Tempel besuchen und viel Sushi essen.',
          'Ich würde gern in den Bergen wandern.',
          'Ich würde die Kultur und die Menschen kennenlernen.',
        ],
        sample: 'Ich würde die alten Tempel besuchen und jeden Tag Sushi essen.',
        requires: { any: ['würde', 'besuchen', 'sehen', 'essen', 'wandern', 'kennenlernen'] },
        teaches: ['g.b1.konjunktiv2'],
      },

      /* ── 6. Next plans ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und hast du schon Pläne für deinen nächsten Urlaub?',
          en: 'And do you already have plans for your next holiday?',
        },
        accept: [
          {
            match: ['werde', 'werden'],
            reply: {
              de: 'Wie schön, dann hast du ja schon etwas, worauf du dich freuen kannst.',
              en: 'How nice, then you already have something to look forward to.',
            },
          },
          {
            match: ['fahre', 'fliege', 'besuche', 'plane', 'herbst', 'winter', 'frühling'],
            reply: {
              de: 'Toll! Ich fliege übrigens im März nach Island.',
              en: 'Great! I am flying to Iceland in March, by the way.',
            },
          },
          {
            match: ['noch nicht', 'nein', 'keine ahnung', 'spontan'],
            reply: {
              de: 'Spontan ist auch gut — manchmal sind das die besten Reisen.',
              en: 'Spontaneous is good too — sometimes those are the best trips.',
            },
          },
        ],
        fallback: {
          de: 'Weißt du schon, wohin du als Nächstes fährst?',
          en: 'Do you already know where you are going next?',
        },
        hints: [
          'Ja, im Herbst werde ich mit meiner Familie nach Wien fahren.',
          'Ich fliege im Winter zu meinen Eltern.',
          'Noch nicht, diesmal mache ich es spontan.',
        ],
        sample: 'Ja, im Herbst werde ich mit meiner Familie nach Wien fahren.',
        requires: { any: ['werde', 'fahre', 'fliege', 'plane', 'noch nicht', 'nein', 'spontan'] },
        teaches: ['g.b1.konjunktiv2'],
      },

      /* ── 7. A recommendation ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Zum Schluss: Kannst du mir eine Stadt empfehlen, die man unbedingt sehen muss?',
          en: 'Finally: can you recommend a city that you absolutely have to see?',
        },
        accept: [
          {
            match: ['die ich', 'die man', 'in der', 'wo man'],
            reply: {
              de: 'Danke für den Tipp! Die schreibe ich mir gleich auf.',
              en: 'Thanks for the tip! I will write that down straight away.',
            },
          },
          {
            match: ['empfehle', 'unbedingt', 'musst', 'stadt'],
            reply: {
              de: 'Super, die kommt auf meine Liste!',
              en: 'Great, that is going on my list!',
            },
          },
        ],
        fallback: {
          de: 'Welche Stadt hat dir am besten gefallen?',
          en: 'Which city did you like best?',
        },
        hints: [
          'Lissabon ist eine Stadt, die ich jedem empfehle.',
          'Du musst unbedingt nach Prag fahren.',
          'Ich empfehle dir Kyoto, wo man viele alte Tempel sehen kann.',
        ],
        sample: 'Lissabon ist eine Stadt, die ich jedem empfehle — das Essen und die Aussicht sind unvergesslich.',
        requires: { any: ['empfehle', 'musst', 'stadt', 'unbedingt', 'die ich', 'wo man'] },
        teaches: ['g.b1.konjunktiv2'],
      },
    ],
    closing: {
      de: 'Danke, {name}! Jetzt habe ich richtig Fernweh. Lass uns bald wieder über Reisen reden!',
      en: 'Thanks, {name}! Now I have real wanderlust. Let us talk about travel again soon!',
    },
  },
]

export default conversations
