/**
 * A2 · L17 — Telling stories about the past / Von früher erzählen
 *
 * The lesson that turns single Perfekt sentences into a story. The learner gets
 * the irregular participles that everyday anecdotes actually need (verloren,
 * gefunden, vergessen, getroffen, umgezogen, passiert), the two auxiliaries
 * that go with them, and the little chain of adverbs — zuerst, dann, danach,
 * schließlich — that holds the events together.
 *
 * Exercise ids run x.a2.l17.1 … x.a2.l17.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a2.l17',
  moduleId: 'a2.social',
  level: 'A2',
  order: 17,
  title: 'Telling stories about the past',
  titleDe: 'Von früher erzählen',
  icon: '📖',
  summary:
    'Tell the story of something that happened to you — what you did first, what suddenly went wrong and how it ended — with the irregular past participles that everyday anecdotes need.',
  minutes: 18,
  objectives: [
    'Tell a short story from zuerst to schließlich so a listener can follow it',
    'Use the irregular participles verloren, gefunden, vergessen, getroffen, umgezogen',
    'Choose haben or sein correctly: ist passiert, ist umgezogen, hat verloren',
    'Say when something happened: damals, früher, letztes Jahr, vor zwei Wochen',
  ],
  vocabIds: [
    'v.a2.l17.erzaehlen',
    'v.a2.l17.passieren',
    'v.a2.l17.erleben',
    'v.a2.l17.sich-erinnern',
    'v.a2.l17.verlieren',
    'v.a2.l17.vergessen',
    'v.a2.l17.treffen',
    'v.a2.l17.umziehen',
    'v.a2.l17.kennenlernen',
    'v.a2.l17.erlebnis',
    'v.a2.l17.erinnerung',
    'v.a2.l17.geschichte',
    'v.a2.l17.damals',
    'v.a2.l17.frueher',
    'v.a2.l17.ploetzlich',
    'v.a2.l17.zuerst',
    'v.a2.l17.danach',
    'v.a2.l17.schliesslich',
  ],
  grammarIds: ['g.a2.perfekt-unregelmaessig'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'How a German story is built',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can tell a colleague what happened to you: what you did **zuerst**, what went wrong **plötzlich**, and how it ended **schließlich**. The frame stays the same in every sentence — *haben* or *sein* in position 2, the participle as the last word.',
        },
        {
          kind: 'table',
          head: ['Infinitiv', 'Perfekt', 'English'],
          rows: [
            ['verlieren', 'hat verloren', 'to lose'],
            ['finden', 'hat gefunden', 'to find'],
            ['vergessen', 'hat vergessen', 'to forget'],
            ['treffen', 'hat getroffen', 'to meet, to run into'],
            ['umziehen', 'ist umgezogen', 'to move house'],
            ['passieren', 'ist passiert', 'to happen'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Vor zwei Wochen habe ich meinen Geldbeutel im Bus verloren.',
              en: 'Two weeks ago I lost my wallet on the bus.',
              note: 'The time phrase opens the sentence, so habe follows immediately and verloren still closes it.',
            },
            {
              de: 'Zum Glück hat ihn eine Frau gefunden und zur Polizei gebracht.',
              en: 'Luckily a woman found it and took it to the police.',
              note: 'ihn stands for den Geldbeutel. A short pronoun likes to come early — right after the verb, before the subject.',
            },
            {
              de: 'Damals hatte ich noch kein Handy.',
              en: 'Back then I did not have a mobile phone yet.',
              note: 'hatte and war are the two past forms Germans really use instead of the Perfekt.',
            },
            {
              de: 'Schließlich habe ich alles wiederbekommen.',
              en: 'In the end I got everything back.',
            },
          ],
        },
        {
          kind: 'list',
          items: [
            'The chain of a story: zuerst — dann — danach — schließlich',
            'How long ago: damals / früher (a long time ago) · letztes Jahr · vor zwei Wochen',
            'The turn of the story: plötzlich — suddenly',
            'How you feel about it: zum Glück — luckily · leider — unfortunately',
          ],
        },
        {
          kind: 'tip',
          text: 'Learn every strong verb together with its auxiliary — *hat verloren*, *ist umgezogen*. The **haben** or **sein** is part of the word in your memory, not something you work out again each time.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a2.l17.erzaehlen',
        'v.a2.l17.passieren',
        'v.a2.l17.erleben',
        'v.a2.l17.sich-erinnern',
        'v.a2.l17.verlieren',
        'v.a2.l17.vergessen',
        'v.a2.l17.treffen',
        'v.a2.l17.umziehen',
        'v.a2.l17.kennenlernen',
        'v.a2.l17.erlebnis',
        'v.a2.l17.erinnerung',
        'v.a2.l17.geschichte',
        'v.a2.l17.damals',
        'v.a2.l17.frueher',
        'v.a2.l17.ploetzlich',
        'v.a2.l17.zuerst',
        'v.a2.l17.danach',
        'v.a2.l17.schliesslich',
      ],
    },

    /* ── 3. Grammar: irregular participles ──────────────────────────────── */
    {
      type: 'grammar',
      title: 'Irregular past participles',
      grammarId: 'g.a2.perfekt-unregelmaessig',
    },

    /* ── 4. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a2.l17.1',
          kind: 'blank',
          sentence: 'Wir ___ letztes Jahr nach Hamburg umgezogen.',
          options: ['sind', 'haben', 'seid', 'ist'],
          answer: 'sind',
          skill: 'verbs',
          difficulty: 1,
          tags: ['perfekt'],
          explain:
            'umziehen moves you from one address to another, and every verb of movement or change of place builds the Perfekt with sein — which then has to match wir: sind.',
        },
        {
          id: 'x.a2.l17.2',
          kind: 'conjugate',
          verb: 'verlieren',
          person: 'Partizip II',
          answer: 'verloren',
          skill: 'verbs',
          difficulty: 1,
          tags: ['perfekt'],
          hint: 'Two things happen at once: the prefix blocks something, and the vowel changes.',
          explain:
            'ver- is an inseparable prefix, so there is no ge-, and verlieren is strong, so the vowel ie becomes o and the ending stays -en: verloren.',
        },
        {
          id: 'x.a2.l17.3',
          kind: 'article',
          noun: 'Erlebnis',
          answer: 'das',
          plural: 'die Erlebnisse',
          meaning: 'experience, something you lived through',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Nouns ending in -nis are neuter, and they double the s before the plural ending: das Erlebnis → die Erlebnisse. das Ergebnis and das Verhältnis work the same way.',
        },
        {
          id: 'x.a2.l17.4',
          kind: 'blank',
          sentence: 'Was ist denn gestern am Bahnhof ___?',
          options: ['passiert', 'gepassiert', 'passieren', 'passierte'],
          answer: 'passiert',
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt'],
          explain:
            'Verbs ending in -ieren never take ge-, because the stress sits on -ie-. And passieren takes sein although nobody moves — ist passiert is a fixed pair.',
        },
        {
          id: 'x.a2.l17.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich habe meinen Schlüssel im Zug verloren.',
            'Ich bin meinen Schlüssel im Zug verloren.',
            'Ich habe meinen Schlüssel im Zug verliert.',
          ],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt'],
          explain:
            'verlieren has an accusative object (meinen Schlüssel), and a verb with an object always takes haben. Its participle is strong, so it ends in -en, never in -t.',
        },
        {
          id: 'x.a2.l17.6',
          kind: 'match',
          pairs: [
            ['treffen', 'hat getroffen'],
            ['finden', 'hat gefunden'],
            ['umziehen', 'ist umgezogen'],
            ['passieren', 'ist passiert'],
          ],
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt'],
          explain:
            'Store each verb as a single unit with its auxiliary. The two on the sein side are exactly the ones about changing place or about something simply occurring.',
        },
        {
          id: 'x.a2.l17.7',
          kind: 'correct',
          wrong: 'Wir haben uns im Deutschkurs kennengelernen.',
          answer: 'Wir haben uns im Deutschkurs kennengelernt.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt', 'trennbar'],
          explain:
            'The second half of kennenlernen is lernen, and lernen is a regular verb — so the participle ends in -t. The ge- slips in between the two parts: kennen-ge-lernt.',
        },
        {
          id: 'x.a2.l17.8',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Suddenly I forgot her name.',
          answer: 'Plötzlich habe ich ihren Namen vergessen.',
          accept: ['Ich habe plötzlich ihren Namen vergessen.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['perfekt'],
          hint: 'vergessen already starts with an inseparable prefix.',
          explain:
            'ver- blocks the ge-, so the participle looks exactly like the infinitive: vergessen. And der Name adds an -n in the accusative: ihren Namen.',
        },
        {
          id: 'x.a2.l17.9',
          kind: 'listen',
          audio: 'Vor zwei Wochen habe ich meinen Geldbeutel im Bus verloren.',
          question: 'Where did the speaker lose the wallet?',
          options: ['On the bus', 'At the station', 'In the office'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['perfekt'],
          explain:
            'The place phrase im Bus sits just before the participle. In a Perfekt sentence the last word tells you the action and the word before it usually tells you where.',
        },
      ],
    },

    /* ── 5. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a2.l17.10',
          kind: 'order',
          tokens: ['ich', 'habe', 'meinen Schlüssel', 'verloren'],
          answer: 'Ich habe meinen Schlüssel verloren.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['perfekt'],
          explain:
            'This is the bare Perfekt frame: habe in position 2, verloren at the very end, and the object squeezed in between. Everything else you add later goes inside that bracket.',
        },
        {
          id: 'x.a2.l17.11',
          kind: 'order',
          tokens: ['zuerst', 'sind', 'wir', 'ins Hotel', 'gefahren'],
          answer: 'Zuerst sind wir ins Hotel gefahren.',
          accept: ['Wir sind zuerst ins Hotel gefahren.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['perfekt', 'wortstellung'],
          explain:
            'zuerst may open the sentence, but then the subject wir has to move behind sind — only one element is allowed in front of the conjugated verb.',
        },
        {
          id: 'x.a2.l17.12',
          kind: 'order',
          tokens: ['vor zwei Wochen', 'habe', 'ich', 'meine Nachbarin', 'im Supermarkt', 'getroffen'],
          answer: 'Vor zwei Wochen habe ich meine Nachbarin im Supermarkt getroffen.',
          accept: ['Ich habe vor zwei Wochen meine Nachbarin im Supermarkt getroffen.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['perfekt', 'wortstellung'],
          hint: 'Vor zwei Wochen is one time phrase — count it as a single element.',
          explain:
            'Inside the bracket German runs time before place: vor zwei Wochen … im Supermarkt. The participle getroffen closes the sentence whichever element you start with.',
        },
        {
          id: 'x.a2.l17.13',
          kind: 'order',
          tokens: ['ich', 'bin', 'zu Hause', 'geblieben', 'weil', 'ich', 'krank', 'war'],
          answer: 'Ich bin zu Hause geblieben, weil ich krank war.',
          accept: ['Weil ich krank war, bin ich zu Hause geblieben.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['perfekt', 'nebensatz'],
          hint: 'The weil part is a clause of its own — its verb goes right to the end of it.',
          explain:
            'bleiben takes sein even though nobody moves, and weil pushes its own verb war to the end of its clause. If the weil clause comes first, it fills position 1 and bin follows at once.',
        },
      ],
    },

    /* ── 6. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: the day I moved to Hamburg',
      readingId: 'r.a2.l17.umzugstag',
    },

    /* ── 7. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: the suitcase that stayed behind',
      listeningId: 'h.a2.l17.koffer-weg',
    },

    /* ── 8. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: tell a colleague about your holiday',
      conversationId: 'c.a2.l17.urlaubsgeschichte',
    },

    /* ── 9. Quiz ────────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a2.l17.14',
          kind: 'blank',
          sentence: 'Früher ___ ich in Delhi gewohnt.',
          options: ['habe', 'bin', 'hat', 'war'],
          answer: 'habe',
          skill: 'verbs',
          difficulty: 1,
          tags: ['perfekt'],
          explain:
            'wohnen is a state, not a movement, so the auxiliary is haben. German has no separate form for "used to" — früher plus the Perfekt does that job on its own.',
        },
        {
          id: 'x.a2.l17.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Wo habt ihr euch eigentlich kennengelernt?',
            'Wo seid ihr euch eigentlich kennengelernt?',
            'Wo habt ihr euch eigentlich kennenlernt?',
          ],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt', 'reflexiv'],
          explain:
            'A reflexive verb always takes haben, never sein — the little euch is an object, and objects call for haben. The participle keeps its ge- inside: kennengelernt.',
        },
        {
          id: 'x.a2.l17.16',
          kind: 'blank',
          sentence: 'Ich erinnere mich gern ___ meine Schulzeit.',
          options: ['an', 'auf', 'für', 'über'],
          answer: 'an',
          skill: 'prepositions',
          difficulty: 2,
          tags: ['reflexiv'],
          explain:
            'sich erinnern comes with a fixed preposition: an + accusative. Learn the whole package sich erinnern an as one word, because no rule predicts which preposition a verb picks.',
        },
        {
          id: 'x.a2.l17.17',
          kind: 'correct',
          wrong: 'Wir sind letztes Jahr nach Köln umziehen.',
          answer: 'Wir sind letztes Jahr nach Köln umgezogen.',
          skill: 'verbs',
          difficulty: 3,
          tags: ['perfekt', 'trennbar'],
          explain:
            'The Perfekt needs a participle, not an infinitive. In a separable verb the ge- moves inside, between prefix and stem: um-ge-zogen — and ziehen is strong, hence the o.',
        },
        {
          id: 'x.a2.l17.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'First we looked for the hotel, and in the end we found it.',
          answer: 'Zuerst haben wir das Hotel gesucht, und schließlich haben wir es gefunden.',
          accept: ['Zuerst haben wir das Hotel gesucht und am Ende haben wir es gefunden.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['perfekt', 'wortstellung'],
          hint: 'Both halves start with a time word, so both subjects move behind their verb.',
          explain:
            'suchen is regular (gesucht) but finden is strong (gefunden) — the pair shows why you cannot guess a participle from its meaning. After und a new main clause starts, so the verb-second rule applies again.',
        },
        {
          id: 'x.a2.l17.19',
          kind: 'speak',
          prompt: 'Say in German: What happened?',
          answer: 'Was ist passiert?',
          accept: ['Was ist denn passiert?'],
          skill: 'conversation',
          difficulty: 1,
          tags: ['perfekt'],
          explain:
            'This is the question that opens every story in German. It uses sein, not haben, and the little denn makes it sound interested rather than like an interrogation.',
        },
      ],
    },

    /* ── 10. Review ─────────────────────────────────────────────────────── */
    {
      type: 'review',
      title: 'Review',
      count: 3,
    },
  ],
}

export default lesson
