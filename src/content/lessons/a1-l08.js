/**
 * A1 · L08 — Home and furniture / Wohnen und Möbel
 *
 * The lesson where nouns stop coming one at a time. The learner names the rooms
 * of a flat, puts furniture in them, reads a real advert and tells a friend what
 * the rent is — and every single noun has to be stored twice: article + plural.
 *
 * Exercise ids run x.a1.l08.1 … 19 here; the reading owns 20-23 and the
 * listening 24-27.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l08',
  moduleId: 'a1.living',
  level: 'A1',
  order: 8,
  title: 'Home and furniture',
  titleDe: 'Wohnen und Möbel',
  icon: '🏠',
  summary:
    'Name every room of a flat, say what furniture stands in it, describe it as hell, dunkel or gemütlich — and build the plural of every noun you meet.',
  minutes: 16,
  objectives: [
    'Show someone around your flat and name each room',
    'Say what furniture is in a room: Im Wohnzimmer stehen ein Tisch und vier Stühle.',
    'Build the plural of an everyday noun and use die in front of it',
    'Read a flat advert and find the rooms, the size and the rent',
  ],
  vocabIds: [
    'v.a1.l08.wohnung',
    'v.a1.l08.zimmer',
    'v.a1.l08.schlafzimmer',
    'v.a1.l08.wohnzimmer',
    'v.a1.l08.kueche',
    'v.a1.l08.bad',
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

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Your flat in German',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can walk a friend through your flat: name every room, say what stands in it, and describe it as **hell**, **dunkel** or **gemütlich**. Along the way you learn the German plural — and the one article every plural takes.',
        },
        {
          kind: 'table',
          head: ['Singular', 'Plural', 'English'],
          rows: [
            ['die Wohnung', 'die Wohnungen', 'flat'],
            ['das Zimmer', 'die Zimmer', 'room'],
            ['die Küche', 'die Küchen', 'kitchen'],
            ['das Bad', 'die Bäder', 'bathroom'],
            ['der Stuhl', 'die Stühle', 'chair'],
            ['der Schrank', 'die Schränke', 'wardrobe'],
          ],
        },
        {
          kind: 'examples',
          items: [
            { de: 'Meine Wohnung hat drei Zimmer.', en: 'My flat has three rooms.' },
            {
              de: 'Das Wohnzimmer ist groß und sehr hell.',
              en: 'The living room is big and very bright.',
              note: 'sein works like an equals sign — das Wohnzimmer stays nominative.',
            },
            {
              de: 'Im Schlafzimmer stehen ein Bett und ein Schrank.',
              en: 'In the bedroom there are a bed and a wardrobe.',
              note: 'Two things, so the verb is plural: stehen.',
            },
            { de: 'Die Miete kostet 640 Euro im Monat.', en: 'The rent is 640 euros a month.' },
          ],
        },
        {
          kind: 'tip',
          text: 'A compound noun takes the gender of its **last** part: *das Zimmer* → *das Schlaf**zimmer***, *das Wohn**zimmer***. The long word is never the hard one.',
        },
        {
          kind: 'warn',
          text: 'German says **stehen** (stand) for furniture, not "there is": *Im Wohnzimmer steht ein Sofa.* And in the plural every noun takes **die** — *der Stuhl* but *die Stühle*.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a1.l08.wohnung',
        'v.a1.l08.zimmer',
        'v.a1.l08.schlafzimmer',
        'v.a1.l08.wohnzimmer',
        'v.a1.l08.kueche',
        'v.a1.l08.bad',
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
    },

    /* ── 3. Grammar: plurals ────────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Making plurals',
      grammarId: 'g.a1.plural',
    },

    /* ── 4. Grammar: nominative ─────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'The nominative case',
      grammarId: 'g.a1.nominativ',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l08.1',
          kind: 'article',
          noun: 'Küche',
          answer: 'die',
          plural: 'die Küchen',
          meaning: 'kitchen',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel', 'plural'],
          explain:
            'Nouns ending in -e are usually feminine, and feminine nouns nearly always add -n or -en in the plural: die Küche → die Küchen.',
        },
        {
          id: 'x.a1.l08.2',
          kind: 'match',
          pairs: [
            ['das Schlafzimmer', 'bedroom'],
            ['das Wohnzimmer', 'living room'],
            ['die Küche', 'kitchen'],
            ['das Bad', 'bathroom'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'Three of these end in -zimmer, so they are all neuter. Learn the second half of a compound and the gender comes free.',
        },
        {
          id: 'x.a1.l08.3',
          kind: 'blank',
          sentence: 'Im Wohnzimmer stehen ein Sofa und zwei ___.',
          options: ['Lampen', 'Lampe', 'Lampens', 'Lampes'],
          answer: 'Lampen',
          skill: 'vocabulary',
          difficulty: 1,
          tags: ['plural'],
          explain:
            'die Lampe is feminine, so the plural simply adds -n: die Lampen. A number in front never replaces the plural ending.',
        },
        {
          id: 'x.a1.l08.4',
          kind: 'blank',
          sentence: 'Wir haben einen Tisch und vier ___.',
          options: ['Stühle', 'Stuhle', 'Stühlen', 'Stuhls'],
          answer: 'Stühle',
          skill: 'vocabulary',
          difficulty: 2,
          tags: ['plural'],
          hint: 'The vowel changes too.',
          explain:
            'Many masculine nouns build the plural with -e plus an Umlaut: der Stuhl → die Stühle, der Schrank → die Schränke.',
        },
        {
          id: 'x.a1.l08.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: ['Die Zimmer sind klein.', 'Der Zimmer sind klein.', 'Die Zimmern sind klein.'],
          answer: 0,
          skill: 'cases',
          difficulty: 2,
          tags: ['plural', 'nominativ'],
          explain:
            'das Zimmer adds nothing in the plural, and every plural noun takes die — whatever gender it had in the singular.',
        },
        {
          id: 'x.a1.l08.6',
          kind: 'article',
          noun: 'Bad',
          answer: 'das',
          plural: 'die Bäder',
          meaning: 'bathroom',
          skill: 'articles',
          difficulty: 2,
          tags: ['artikel', 'plural'],
          explain:
            'das Bad is neuter and takes the -er plural with an Umlaut: die Bäder — the same pattern as das Haus → die Häuser.',
        },
        {
          id: 'x.a1.l08.7',
          kind: 'dialogue',
          lines: [
            { who: 'Lena', text: 'Wie viele Zimmer hat deine Wohnung?' },
            { who: 'Du', text: '___' },
          ],
          options: [
            'Meine Wohnung hat drei Zimmer.',
            'Meine Wohnung hat drei Zimmern.',
            'Meine Wohnung haben drei Zimmer.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['plural'],
          explain:
            'The plural of das Zimmer is die Zimmer — nothing is added. And the subject is meine Wohnung (one flat), so the verb stays hat.',
        },
        {
          id: 'x.a1.l08.8',
          kind: 'correct',
          wrong: 'Das ist meinen Schrank.',
          answer: 'Das ist mein Schrank.',
          skill: 'cases',
          difficulty: 2,
          tags: ['nominativ'],
          explain:
            'ist works like an equals sign: nothing is being done to the wardrobe, so it stays nominative and mein keeps its plain form.',
        },
        {
          id: 'x.a1.l08.9',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'The kitchen is small, but the living room is very bright.',
          answer: 'Die Küche ist klein, aber das Wohnzimmer ist sehr hell.',
          skill: 'writing',
          difficulty: 3,
          hint: 'Two subjects, so two verbs — and aber does not move anything.',
          explain:
            'aber simply joins two full sentences; each half keeps its own subject in the nominative and its own verb ist.',
        },
      ],
    },

    /* ── 6. Build the sentence ──────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l08.10',
          kind: 'order',
          tokens: ['die', 'Wohnung', 'hat', 'drei', 'Zimmer'],
          answer: 'Die Wohnung hat drei Zimmer.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['wortstellung', 'nominativ'],
          explain:
            'Subject first, verb second: die Wohnung is the subject, so it keeps the nominative die and hat follows immediately.',
        },
        {
          id: 'x.a1.l08.11',
          kind: 'order',
          tokens: ['das', 'Wohnzimmer', 'ist', 'groß', 'und', 'sehr', 'hell'],
          answer: 'Das Wohnzimmer ist groß und sehr hell.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung', 'nominativ'],
          explain:
            'Adjectives after sein never take an ending, so groß and hell stay exactly as the dictionary gives them.',
        },
        {
          id: 'x.a1.l08.12',
          kind: 'order',
          tokens: ['am Abend', 'ist', 'das', 'Wohnzimmer', 'sehr', 'gemütlich'],
          answer: 'Am Abend ist das Wohnzimmer sehr gemütlich.',
          accept: ['Das Wohnzimmer ist am Abend sehr gemütlich.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          hint: 'If the time phrase opens the sentence, what has to come next?',
          explain:
            'A time phrase may stand first, but the conjugated verb is always the second element — so the subject moves behind ist.',
        },
        {
          id: 'x.a1.l08.13',
          kind: 'order',
          tokens: ['jeden Monat', 'kostet', 'die', 'Miete', 'achthundert', 'Euro'],
          answer: 'Jeden Monat kostet die Miete achthundert Euro.',
          accept: ['Die Miete kostet jeden Monat achthundert Euro.'],
          skill: 'wordorder',
          difficulty: 3,
          hint: 'Only one word may stand in front of the verb.',
          tags: ['wortstellung', 'nominativ'],
          explain:
            'Jeden Monat fills position 1, so kostet takes position 2 and the subject die Miete comes third — it stays nominative wherever it stands.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read',
      readingId: 'r.a1.l08.wohnungsanzeige',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen',
      listeningId: 'h.a1.l08.neue-wohnung',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it',
      conversationId: 'c.a1.l08.wohnung-zeigen',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l08.14',
          kind: 'article',
          noun: 'Schrank',
          answer: 'der',
          plural: 'die Schränke',
          meaning: 'wardrobe, cupboard',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel', 'plural'],
          explain:
            'der Schrank is masculine, and its plural adds -e with an Umlaut: die Schränke. The same word appears in der Kühlschrank (fridge).',
        },
        {
          id: 'x.a1.l08.15',
          kind: 'blank',
          sentence: '___ Küche ist klein und sehr hell.',
          options: ['Die', 'Der', 'Das', 'Den'],
          answer: 'Die',
          skill: 'cases',
          difficulty: 1,
          tags: ['nominativ'],
          explain:
            'Küche is feminine and it is the subject — wer oder was ist klein? — so it takes the nominative article die.',
        },
        {
          id: 'x.a1.l08.16',
          kind: 'mcq',
          prompt: 'Which plural is correct?',
          options: [
            'das Fenster → die Fenster',
            'das Fenster → die Fensters',
            'das Fenster → die Fenstern',
          ],
          answer: 0,
          skill: 'vocabulary',
          difficulty: 2,
          tags: ['plural'],
          explain:
            'Nouns ending in -er, -el or -en normally add nothing, so only the article shows the plural: das Fenster → die Fenster.',
        },
        {
          id: 'x.a1.l08.17',
          kind: 'correct',
          wrong: 'Meine Wohnung hat vier Zimmern.',
          answer: 'Meine Wohnung hat vier Zimmer.',
          skill: 'vocabulary',
          difficulty: 2,
          tags: ['plural'],
          explain:
            'das Zimmer is one of the nouns whose plural looks identical to the singular — adding -n invents an ending German does not use here.',
        },
        {
          id: 'x.a1.l08.18',
          kind: 'listen',
          audio: 'Die Wohnung hat zwei Zimmer, eine Küche und ein Bad.',
          question: 'How many Zimmer does the flat have?',
          options: ['Two', 'Three', 'Four'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          explain:
            'You hear zwei Zimmer. The kitchen and the bathroom are named separately, because German never counts them as Zimmer.',
        },
        {
          id: 'x.a1.l08.19',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'My bedroom is small and dark, but the living room is bright.',
          answer: 'Mein Schlafzimmer ist klein und dunkel, aber das Wohnzimmer ist hell.',
          skill: 'writing',
          difficulty: 3,
          hint: 'Schlafzimmer ends in -zimmer. What gender does that make it?',
          explain:
            'das Schlafzimmer is neuter, so the possessive is mein with no ending — and both subjects stand in the nominative around ist.',
        },
      ],
    },

    /* ── 11. Review ─────────────────────────────────────────────────────── */
    {
      type: 'review',
      title: 'Review',
      count: 3,
    },
  ],
}

export default lesson
