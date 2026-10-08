/**
 * A1 · L08 — Showing a friend around your new flat.
 *
 * Six turns, each one forcing a different piece of the lesson: the number of
 * rooms (plural), light or dark (nominative + sein), the furniture in the
 * living room (plural again), the bedroom, the rent, the balcony.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l08.wohnung-zeigen',
    level: 'A1',
    title: 'Showing your new flat',
    titleDe: 'Ich zeige dir meine Wohnung',
    icon: '🏠',
    setting:
      'You moved in last weekend. Your friend Lena rings the bell with a plant under her arm and wants the full tour.',
    goal: 'Give Lena a tour: name the rooms, say what furniture is in them, and tell her the rent.',
    roleBot: 'Lena, your friend',
    roleUser: 'You, showing her around your new flat',
    vocabIds: [
      'v.a1.l08.wohnung',
      'v.a1.l08.zimmer',
      'v.a1.l08.wohnzimmer',
      'v.a1.l08.schlafzimmer',
      'v.a1.l08.kueche',
      'v.a1.l08.tisch',
      'v.a1.l08.stuhl',
      'v.a1.l08.bett',
      'v.a1.l08.schrank',
      'v.a1.l08.sofa',
      'v.a1.l08.lampe',
      'v.a1.l08.fenster',
      'v.a1.l08.miete',
      'v.a1.l08.hell',
      'v.a1.l08.gemuetlich',
    ],
    grammarIds: ['g.a1.plural', 'g.a1.nominativ'],
    tags: ['plural', 'nominativ'],
    turns: [
      /* ── 1. How many rooms? ────────────────────────────────────────────── */
      {
        bot: {
          de: 'Hallo {name}! Deine Wohnung ist ja schön. Wie viele Zimmer hast du?',
          en: 'Hello {name}! Your flat is lovely. How many rooms do you have?',
        },
        accept: [
          {
            match: ['ein zimmer', 'zwei', '2 '],
            reply: {
              de: 'Das ist genau richtig für eine Person. Und die Küche ist extra, oder?',
              en: 'That is exactly right for one person. And the kitchen is separate, right?',
            },
          },
          {
            match: ['drei', '3 '],
            reply: {
              de: 'Drei Zimmer! Das ist viel Platz. Ich habe nur zwei.',
              en: 'Three rooms! That is a lot of space. I only have two.',
            },
          },
          {
            match: ['vier', 'fünf', 'groß'],
            reply: {
              de: 'So groß? Dann hast du wirklich viel Platz, {name}.',
              en: 'That big? Then you really do have a lot of space, {name}.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das habe ich nicht verstanden. Wie viele Zimmer hat die Wohnung?',
          en: 'Sorry, I did not catch that. How many rooms does the flat have?',
        },
        hints: [
          'Ich habe zwei Zimmer.',
          'Die Wohnung hat drei Zimmer.',
          'Drei Zimmer, eine Küche und ein Bad.',
        ],
        sample: 'Meine Wohnung hat drei Zimmer, eine Küche und ein Bad.',
        requires: { any: ['zimmer'] },
        teaches: ['g.a1.plural'],
      },

      /* ── 2. Light or dark? ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und wie ist das Wohnzimmer? Ist es hell?',
          en: 'And what is the living room like? Is it bright?',
        },
        accept: [
          {
            match: ['hell', 'sonne', 'groß'],
            reply: {
              de: 'Super! Ein Wohnzimmer ist nie zu hell.',
              en: 'Great! A living room can never be too bright.',
            },
          },
          {
            match: ['dunkel', 'klein', 'nicht hell'],
            reply: {
              de: 'Schade. Dann brauchst du eine gute Lampe.',
              en: 'What a pity. Then you need a good lamp.',
            },
          },
          {
            match: ['fenster'],
            reply: {
              de: 'Fenster sind wichtig! Hier ist es wirklich sehr hell.',
              en: 'Windows are important! It really is very bright in here.',
            },
          },
        ],
        fallback: {
          de: 'Sag mal, ist das Wohnzimmer hell oder dunkel?',
          en: 'Tell me, is the living room bright or dark?',
        },
        hints: ['Ja, es ist sehr hell.', 'Nein, es ist ziemlich dunkel.', 'Es hat zwei Fenster.'],
        sample: 'Ja, das Wohnzimmer ist sehr hell. Es hat zwei Fenster.',
        requires: { any: ['hell', 'dunkel', 'fenster'] },
        teaches: ['g.a1.nominativ'],
      },

      /* ── 3. The furniture ──────────────────────────────────────────────── */
      {
        bot: {
          de: 'Das Sofa ist ja gemütlich! Was steht noch im Wohnzimmer?',
          en: 'The sofa is so cosy! What else is in the living room?',
        },
        accept: [
          {
            match: ['tisch'],
            reply: {
              de: 'Ein Tisch ist praktisch. Dann trinken wir hier gleich einen Kaffee.',
              en: 'A table is practical. Then we can have a coffee here in a minute.',
            },
          },
          {
            match: ['stuhl', 'stühle'],
            reply: {
              de: 'Stühle sind wichtig. Dann haben deine Gäste alle einen Platz.',
              en: 'Chairs are important. Then all your guests have a seat.',
            },
          },
          {
            match: ['lampe', 'schrank', 'nichts'],
            reply: {
              de: 'Ja, das sehe ich. Die Wohnung ist schon fast fertig.',
              en: 'Yes, I can see that. The flat is almost finished already.',
            },
          },
        ],
        fallback: {
          de: 'Ich sehe nur das Sofa. Was steht noch hier — ein Tisch? Stühle?',
          en: 'I only see the sofa. What else is here — a table? Chairs?',
        },
        hints: [
          'Hier steht ein Tisch.',
          'Da sind vier Stühle.',
          'Im Wohnzimmer stehen eine Lampe und ein Schrank.',
        ],
        sample: 'Im Wohnzimmer stehen ein Tisch und vier Stühle.',
        requires: { any: ['tisch', 'stuhl', 'stühle', 'lampe', 'schrank'] },
        teaches: ['g.a1.plural'],
      },

      /* ── 4. The bedroom ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Die Küche ist wirklich neu. Und wo ist dein Schlafzimmer?',
          en: 'The kitchen really is new. And where is your bedroom?',
        },
        accept: [
          {
            match: ['hier', 'da', 'links', 'rechts', 'hinten'],
            reply: {
              de: 'Ah, hier hinten. Das ist bestimmt schön ruhig.',
              en: 'Ah, back here. That must be nice and quiet.',
            },
          },
          {
            match: ['bett', 'schrank'],
            reply: {
              de: 'Ein Bett und ein Schrank — perfekt. Mehr braucht man nicht.',
              en: 'A bed and a wardrobe — perfect. You do not need more.',
            },
          },
          {
            match: ['klein', 'dunkel', 'ruhig'],
            reply: {
              de: 'Das ist nicht schlimm. Du schläfst dort ja nur.',
              en: 'That is not a problem. You only sleep there, after all.',
            },
          },
        ],
        fallback: {
          de: 'Zeig mal — wo ist das Schlafzimmer?',
          en: 'Show me — where is the bedroom?',
        },
        hints: [
          'Das Schlafzimmer ist hier.',
          'Es ist klein, aber gemütlich.',
          'Dort stehen mein Bett und mein Schrank.',
        ],
        sample: 'Das Schlafzimmer ist hier. Es ist klein, aber sehr gemütlich.',
        requires: { any: ['schlafzimmer', 'hier', 'dort', 'bett'] },
        teaches: ['g.a1.nominativ'],
      },

      /* ── 5. The rent ───────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Eine Frage darf ich doch stellen, {name}: Was kostet die Miete?',
          en: 'I am allowed one question, {name}: what is the rent?',
        },
        accept: [
          {
            match: ['euro'],
            reply: {
              de: 'Das finde ich fair für so eine Wohnung.',
              en: 'I think that is fair for a flat like this.',
            },
          },
          {
            match: ['teuer', 'viel', 'hoch'],
            reply: {
              de: 'Ja, in der Stadt ist die Miete leider immer hoch.',
              en: 'Yes, in the city the rent is unfortunately always high.',
            },
          },
          {
            match: ['billig', 'günstig', 'nicht teuer'],
            reply: {
              de: 'Wirklich? Dann hast du großes Glück!',
              en: 'Really? Then you are very lucky!',
            },
          },
        ],
        fallback: {
          de: 'Sag doch — wie hoch ist die Miete im Monat?',
          en: 'Do tell me — how high is the rent per month?',
        },
        hints: [
          'Die Miete kostet 640 Euro.',
          'Sie ist nicht teuer.',
          'Ich zahle 750 Euro im Monat.',
        ],
        sample: 'Die Miete kostet 640 Euro im Monat.',
        requires: { any: ['miete', 'euro', 'teuer', 'kostet'] },
        teaches: ['g.a1.nominativ'],
      },

      /* ── 6. Balcony or garden ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Letzte Frage: Hat die Wohnung auch einen Balkon?',
          en: 'Last question: does the flat have a balcony too?',
        },
        accept: [
          {
            match: ['ja', 'balkon'],
            reply: {
              de: 'Perfekt! Im Sommer sitzen wir dann dort.',
              en: 'Perfect! In the summer we will sit out there.',
            },
          },
          {
            match: ['nein', 'kein', 'leider'],
            reply: {
              de: 'Schade. Aber die Wohnung ist trotzdem toll.',
              en: 'A pity. But the flat is great anyway.',
            },
          },
          {
            match: ['garten', 'fenster'],
            reply: {
              de: 'Ein Garten! Das ist wirklich schön.',
              en: 'A garden! That is really lovely.',
            },
          },
        ],
        fallback: {
          de: 'Also, gibt es einen Balkon — ja oder nein?',
          en: 'So, is there a balcony — yes or no?',
        },
        hints: [
          'Ja, die Wohnung hat einen Balkon.',
          'Nein, leider nicht.',
          'Nein, aber das Haus hat einen Garten.',
        ],
        sample: 'Nein, leider nicht. Aber das Haus hat einen Garten.',
        requires: { any: ['ja', 'nein', 'balkon', 'garten'] },
        teaches: ['g.a1.nominativ'],
      },
    ],
    closing: {
      de: 'Danke für die Führung, {name}! Deine Wohnung ist wirklich gemütlich. Bis bald!',
      en: 'Thanks for the tour, {name}! Your flat is really cosy. See you soon!',
    },
  },
]

export default conversations
