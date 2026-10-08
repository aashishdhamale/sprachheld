/**
 * A1 · L10 — Transport and directions / Verkehr und Wegbeschreibung
 *
 * The lesson that gets the learner across a German city on their own: the
 * two question chunks (Wo ist …? / Wie komme ich zu …?), the polite answers
 * that come back (Gehen Sie …, Nehmen Sie …), the transport chunks
 * (mit dem Bus, mit der Bahn, zu Fuß) and the three separable steigen-verbs.
 *
 * Exercise ids run x.a1.l10.1 … x.a1.l10.18 here; the reading owns 19-22 and
 * the listening 23-26.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l10',
  moduleId: 'a1.out',
  level: 'A1',
  order: 10,
  title: 'Transport and directions',
  titleDe: 'Verkehr und Wegbeschreibung',
  icon: '🚌',
  summary:
    'Stop a stranger, ask the way, understand the answer and buy a ticket — with the transport chunks (mit dem Bus, zu Fuß) and the polite Sie-requests that every German gives you in the street.',
  minutes: 17,
  objectives: [
    'Ask a stranger the way: Entschuldigung, wie komme ich zum Bahnhof?',
    'Understand and give directions with links, rechts, geradeaus and gegenüber',
    'Say how you travel: mit dem Bus, mit der Bahn, mit dem Fahrrad, zu Fuß',
    'Buy a ticket at the counter: Eine Fahrkarte nach Köln, bitte.',
  ],
  vocabIds: [
    'v.a1.l10.bus',
    'v.a1.l10.bahn',
    'v.a1.l10.zug',
    'v.a1.l10.fahrrad',
    'v.a1.l10.haltestelle',
    'v.a1.l10.bahnhof',
    'v.a1.l10.strasse',
    'v.a1.l10.fahrkarte',
    'v.a1.l10.einsteigen',
    'v.a1.l10.aussteigen',
    'v.a1.l10.umsteigen',
    'v.a1.l10.links',
    'v.a1.l10.rechts',
    'v.a1.l10.geradeaus',
    'v.a1.l10.zu-fuss',
    'v.a1.l10.entschuldigung',
  ],
  grammarIds: ['g.a1.imperativ-basis', 'g.a1.praepositionen'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Finding your way',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can stop a stranger, ask the way, understand the answer and buy a ticket. Two little words carry the whole conversation: **Entschuldigung** to open it and **bitte** to keep it polite.',
        },
        {
          kind: 'table',
          head: ['Your question', 'English'],
          rows: [
            ['Entschuldigung, wo ist der Bahnhof?', 'Excuse me, where is the station?'],
            ['Wie komme ich zum Bahnhof?', 'How do I get to the station?'],
            ['Wie komme ich zur Haltestelle?', 'How do I get to the stop?'],
            ['Ist das weit?', 'Is that far?'],
            ['Eine Fahrkarte nach Köln, bitte.', 'One ticket to Cologne, please.'],
          ],
        },
        {
          kind: 'table',
          head: ['The answer you hear', 'English'],
          rows: [
            ['Gehen Sie geradeaus.', 'Go straight on.'],
            ['Nehmen Sie die erste Straße links.', 'Take the first street on the left.'],
            ['Dann rechts an der Ecke.', 'Then right at the corner.'],
            ['Der Bahnhof ist gegenüber.', 'The station is opposite.'],
            ['Fahren Sie mit dem Bus, Linie 5.', 'Take the bus, line 5.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Ich fahre jeden Tag mit dem Bus zur Arbeit.',
              en: 'Every day I go to work by bus.',
              note: 'mit dem / mit der names the vehicle. Only zu Fuß goes without mit.',
            },
            {
              de: 'Am Bahnhof steigen wir in die U-Bahn um.',
              en: 'At the station we change to the underground.',
              note: 'umsteigen is separable, so the prefix um closes the sentence.',
            },
            {
              de: 'Nehmen Sie die U-Bahn und steigen Sie am Markt aus.',
              en: 'Take the underground and get off at the market.',
            },
            {
              de: 'Zum Flughafen fährt die Linie 9.',
              en: 'Line 9 goes to the airport.',
              note: 'The place phrase opens the sentence, so fährt slides into position 2.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'A request puts the verb **first** and keeps **Sie** right behind it: *Gehen Sie geradeaus.* A statement puts the verb second: *Sie gehen geradeaus.* Moving that one word is the whole difference.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a1.l10.bus',
        'v.a1.l10.bahn',
        'v.a1.l10.zug',
        'v.a1.l10.fahrrad',
        'v.a1.l10.haltestelle',
        'v.a1.l10.bahnhof',
        'v.a1.l10.strasse',
        'v.a1.l10.fahrkarte',
        'v.a1.l10.einsteigen',
        'v.a1.l10.aussteigen',
        'v.a1.l10.umsteigen',
        'v.a1.l10.links',
        'v.a1.l10.rechts',
        'v.a1.l10.geradeaus',
        'v.a1.l10.zu-fuss',
        'v.a1.l10.entschuldigung',
      ],
    },

    /* ── 3. Grammar: polite requests ────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Gehen Sie geradeaus — polite requests',
      grammarId: 'g.a1.imperativ-basis',
    },

    /* ── 4. Grammar: prepositions ───────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'nach, zu, mit — the little words of travel',
      grammarId: 'g.a1.praepositionen',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l10.1',
          kind: 'article',
          noun: 'Haltestelle',
          answer: 'die',
          plural: 'die Haltestellen',
          meaning: 'bus or tram stop',
          skill: 'articles',
          difficulty: 1,
          explain:
            'German nouns ending in -e are almost always feminine, and they simply add -n in the plural: die Haltestelle, die Haltestellen.',
        },
        {
          id: 'x.a1.l10.2',
          kind: 'blank',
          sentence: 'Ich fahre jeden Tag ___ dem Bus zur Arbeit.',
          options: ['mit', 'zu', 'nach', 'aus'],
          answer: 'mit',
          skill: 'prepositions',
          difficulty: 1,
          tags: ['praeposition'],
          explain:
            'Means of transport always take mit: mit dem Bus, mit der Bahn, mit dem Fahrrad. zu and nach point at a destination, not at a vehicle.',
        },
        {
          id: 'x.a1.l10.3',
          kind: 'match',
          pairs: [
            ['links', 'left'],
            ['rechts', 'right'],
            ['geradeaus', 'straight on'],
            ['gegenüber', 'opposite'],
            ['zu Fuß', 'on foot'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'These five words answer almost every Wie komme ich …? question, so learn them as one set rather than one by one.',
        },
        {
          id: 'x.a1.l10.4',
          kind: 'mcq',
          prompt: 'Which question asks the way to the station?',
          options: [
            'Wie komme ich zum Bahnhof?',
            'Wie komme ich nach Bahnhof?',
            'Wie komme ich in Bahnhof?',
          ],
          answer: 0,
          skill: 'prepositions',
          difficulty: 2,
          tags: ['praeposition'],
          explain:
            'Buildings and institutions take zu, and zu dem is always shortened to zum: zum Bahnhof, zum Flughafen. nach is only for cities and countries.',
        },
        {
          id: 'x.a1.l10.5',
          kind: 'blank',
          sentence: 'Wir ___ am Hauptbahnhof um.',
          options: ['steigen', 'steigt', 'umsteigen', 'steige'],
          answer: 'steigen',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar'],
          explain:
            'umsteigen splits: the verb steigen takes the wir ending -en in position 2, and the prefix um waits at the very end of the sentence.',
        },
        {
          id: 'x.a1.l10.6',
          kind: 'correct',
          wrong: 'Fahren bitte Sie mit der U-Bahn.',
          answer: 'Fahren Sie bitte mit der U-Bahn.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['hoeflichkeit'],
          explain:
            'In a polite request nothing may stand between the verb and Sie — the pair is fixed, and bitte follows behind it.',
        },
        {
          id: 'x.a1.l10.7',
          kind: 'article',
          noun: 'Fahrrad',
          answer: 'das',
          plural: 'die Fahrräder',
          meaning: 'bicycle',
          skill: 'articles',
          difficulty: 2,
          explain:
            'das Fahrrad is neuter because its base word das Rad is neuter — and like das Rad it takes an umlaut plus -er in the plural: die Fahrräder.',
        },
        {
          id: 'x.a1.l10.8',
          kind: 'dialogue',
          lines: [
            { who: 'Sie', text: 'Entschuldigung, wie komme ich zum Flughafen?' },
            { who: 'Passantin', text: '___' },
          ],
          options: [
            'Nehmen Sie die U-Bahn, Linie 8.',
            'Sie nehmen die U-Bahn Linie 8 nehmen.',
            'Nehmen die U-Bahn, Linie 8.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 3,
          tags: ['hoeflichkeit'],
          explain:
            'A stranger answers with a Sie-request: verb first, Sie immediately behind it. Drop the Sie and the sentence is simply not German.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l10.9',
          kind: 'order',
          tokens: ['der', 'Bus', 'fährt', 'zum', 'Bahnhof'],
          answer: 'Der Bus fährt zum Bahnhof.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['wortstellung'],
          explain:
            'The subject der Bus opens the sentence, so the conjugated verb fährt takes position 2 and the destination chunk zum Bahnhof closes it.',
        },
        {
          id: 'x.a1.l10.10',
          kind: 'order',
          tokens: ['gehen', 'Sie', 'bitte', 'geradeaus', 'und', 'dann', 'links'],
          answer: 'Gehen Sie bitte geradeaus und dann links.',
          accept: ['Bitte gehen Sie geradeaus und dann links.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['hoeflichkeit'],
          explain:
            'A request starts with the verb and keeps Sie right behind it. bitte may open the sentence instead, but it must never split the pair.',
        },
        {
          id: 'x.a1.l10.11',
          kind: 'order',
          tokens: ['um acht Uhr', 'fährt', 'der', 'Zug', 'nach Berlin'],
          answer: 'Um acht Uhr fährt der Zug nach Berlin.',
          accept: ['Der Zug fährt um acht Uhr nach Berlin.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          hint: 'Whatever opens the sentence counts as position 1.',
          explain:
            'The time phrase um acht Uhr fills position 1 all by itself, so fährt still has to be the second element — in front of the subject der Zug.',
        },
        {
          id: 'x.a1.l10.12',
          kind: 'order',
          tokens: ['am Bahnhof', 'steigen', 'wir', 'in', 'die', 'U-Bahn', 'um'],
          answer: 'Am Bahnhof steigen wir in die U-Bahn um.',
          accept: ['Wir steigen am Bahnhof in die U-Bahn um.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['trennbar'],
          hint: 'Two rules at once: position 2, and the prefix at the end.',
          explain:
            'The place phrase in position 1 pushes steigen into position 2, and the separable prefix um still has to close the sentence — the two rules never cancel each other out.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read',
      readingId: 'r.a1.l10.weg-zum-buero',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen',
      listeningId: 'h.a1.l10.wo-ist-der-bahnhof',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it',
      conversationId: 'c.a1.l10.zum-bahnhof',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l10.13',
          kind: 'blank',
          sentence: 'Entschuldigung, wo ___ die Haltestelle?',
          options: ['ist', 'sind', 'bist', 'bin'],
          answer: 'ist',
          skill: 'grammar',
          difficulty: 1,
          explain:
            'die Haltestelle is one single thing — a sie — so sein takes the er/sie/es form ist. sind would need a plural like die Haltestellen.',
        },
        {
          id: 'x.a1.l10.14',
          kind: 'blank',
          sentence: 'Ich habe kein Auto. Ich gehe ___ Fuß.',
          options: ['zu', 'mit', 'nach', 'in'],
          answer: 'zu',
          skill: 'prepositions',
          difficulty: 2,
          tags: ['praeposition'],
          explain:
            'zu Fuß is a fixed chunk and the one way of travelling that takes no mit — every vehicle takes mit dem or mit der, but your feet do not.',
        },
        {
          id: 'x.a1.l10.15',
          kind: 'listen',
          audio: 'Nehmen Sie die zweite Straße rechts. Der Bahnhof ist gegenüber.',
          question: 'Which street do you take?',
          options: ['The second on the right.', 'The first on the right.', 'The second on the left.'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          explain:
            'zweite is second and rechts is right. German puts the number in front of Straße and the direction word behind it, so you need both halves to get it right.',
        },
        {
          id: 'x.a1.l10.16',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Excuse me, how do I get to the station?',
          answer: 'Entschuldigung, wie komme ich zum Bahnhof?',
          skill: 'writing',
          difficulty: 2,
          tags: ['praeposition'],
          explain:
            'zu dem always shortens to zum, and after the question word wie the verb komme keeps position 2 — German never says "wie ich komme".',
        },
        {
          id: 'x.a1.l10.17',
          kind: 'correct',
          wrong: 'Wie komme ich nach dem Flughafen?',
          answer: 'Wie komme ich zum Flughafen?',
          skill: 'prepositions',
          difficulty: 3,
          tags: ['praeposition'],
          explain:
            'nach only works for cities and countries that have no article. A building like der Flughafen takes zu, and zu dem becomes zum.',
        },
        {
          id: 'x.a1.l10.18',
          kind: 'translate',
          direction: 'de-en',
          prompt: 'Fahren Sie mit der Bahn und steigen Sie am Bahnhof aus.',
          answer: 'Take the train and get off at the station.',
          accept: [
            'Go by train and get off at the station.',
            'Travel by train and get off at the station.',
          ],
          skill: 'writing',
          difficulty: 3,
          hint: 'Two requests joined by und — and one separable verb.',
          explain:
            'Each half is its own request, so each one starts with its verb; aussteigen is separable, which is why aus ends up as the last word.',
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
