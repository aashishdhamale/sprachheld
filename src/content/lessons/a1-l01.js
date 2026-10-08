/**
 * A1 · L01 — Greetings and introductions.
 *
 * Grammar: g.a1.pronomen (personal pronouns) + g.a1.sein (to be).
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l01',
  moduleId: 'a1.basics',
  level: 'A1',
  order: 1,
  title: 'Greetings and introductions',
  titleDe: 'Begrüßung und Vorstellung',
  icon: '👋',
  summary:
    'Say hello and goodbye at any time of day, give your name, ask how someone is — and know when to say du and when to say Sie.',
  minutes: 16,
  objectives: [
    'Greet someone correctly at any time of day and say goodbye to match',
    'Ask for a name and give your own with heißen',
    'Ask how someone is and answer politely',
    'Choose between du and Sie without sounding rude',
  ],
  vocabIds: [
    'v.a1.l01.hallo',
    'v.a1.l01.guten-morgen',
    'v.a1.l01.guten-tag',
    'v.a1.l01.guten-abend',
    'v.a1.l01.tschuess',
    'v.a1.l01.auf-wiedersehen',
    'v.a1.l01.heissen',
    'v.a1.l01.wie-geht-es-dir',
    'v.a1.l01.danke',
    'v.a1.l01.bitte',
    'v.a1.l01.freut-mich',
    'v.a1.l01.willkommen',
    'v.a1.l01.name',
    'v.a1.l01.herr',
    'v.a1.l01.frau',
    'v.a1.l01.gut',
  ],
  grammarIds: ['g.a1.pronomen', 'g.a1.sein'],

  steps: [
    /* ── 1. Learn ─────────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'How it works',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can walk into a German office, greet everybody, say your name, ask how someone is and leave again — all in German.',
        },
        {
          kind: 'table',
          head: ['When', 'Greeting', 'English'],
          rows: [
            ['until about 11:00', 'Guten Morgen', 'Good morning'],
            ['all day, polite', 'Guten Tag', 'Hello / Good day'],
            ['from about 18:00', 'Guten Abend', 'Good evening'],
            ['any time, informal', 'Hallo', 'Hi'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Wie heißt du? — Ich heiße Anna.',
              en: 'What is your name? — My name is Anna.',
              note: 'du: friends, family, people your own age, colleagues on your team.',
            },
            {
              de: 'Wie heißen Sie? — Ich heiße Anna Bergmann.',
              en: 'What is your name? — My name is Anna Bergmann.',
              note: 'Sie: strangers, officials, your boss. With Sie you normally add the surname.',
            },
            {
              de: 'Wie geht es dir? — Danke, gut. Und dir?',
              en: 'How are you? — Fine, thanks. And you?',
            },
            {
              de: 'Wie geht es Ihnen? — Danke, sehr gut. Und Ihnen?',
              en: 'How are you? — Very well, thanks. And you?',
              note: 'The polite partner of dir is Ihnen, always with a capital I.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Leave the way you arrived: casual **Hallo** pairs with **Tschüss**, polite **Guten Tag** pairs with **Auf Wiedersehen**.',
        },
        {
          kind: 'text',
          text: '**Freut mich** (*nice to meet you*) works in both worlds — say it to your new boss and to a new classmate.',
        },
      ],
    },

    /* ── 2. Vocab ─────────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a1.l01.hallo',
        'v.a1.l01.guten-morgen',
        'v.a1.l01.guten-tag',
        'v.a1.l01.guten-abend',
        'v.a1.l01.tschuess',
        'v.a1.l01.auf-wiedersehen',
        'v.a1.l01.heissen',
        'v.a1.l01.wie-geht-es-dir',
        'v.a1.l01.danke',
        'v.a1.l01.bitte',
        'v.a1.l01.freut-mich',
        'v.a1.l01.willkommen',
        'v.a1.l01.name',
        'v.a1.l01.herr',
        'v.a1.l01.frau',
        'v.a1.l01.gut',
      ],
    },

    /* ── 3. Grammar: pronouns ─────────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Personal pronouns',
      grammarId: 'g.a1.pronomen',
    },

    /* ── 4. Grammar: sein ─────────────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'sein — to be',
      grammarId: 'g.a1.sein',
    },

    /* ── 5. Practice ──────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l01.1',
          kind: 'match',
          pairs: [
            ['Guten Morgen', 'Good morning'],
            ['Guten Abend', 'Good evening'],
            ['Auf Wiedersehen', 'Goodbye (formal)'],
            ['Freut mich', 'Nice to meet you'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          tags: ['begruessung'],
          explain: 'German picks the greeting by the clock, so Morgen and Abend are not interchangeable — and Auf Wiedersehen is the goodbye that matches a formal hello.',
        },
        {
          id: 'x.a1.l01.2',
          kind: 'blank',
          sentence: 'Guten Tag! Ich ___ Anna Bergmann.',
          options: ['heiße', 'heißt', 'heißen', 'heißst'],
          answer: 'heiße',
          skill: 'verbs',
          difficulty: 1,
          tags: ['praesens'],
          explain: 'ich always takes the ending -e, so heißen becomes heiße. The form heißst does not exist at all.',
        },
        {
          id: 'x.a1.l01.3',
          kind: 'dialogue',
          lines: [
            { who: 'Lena', text: 'Hallo! Wie heißt du?' },
            { who: 'Du', text: '___' },
          ],
          options: ['Ich heiße Sofia.', 'Ich bin heiße Sofia.', 'Ich heißen Sofia.'],
          answer: 0,
          skill: 'conversation',
          difficulty: 1,
          tags: ['praesens'],
          explain: 'A German sentence carries exactly one conjugated verb, and with ich that verb is heiße — no extra bin, no -en ending.',
        },
        {
          id: 'x.a1.l01.4',
          kind: 'article',
          noun: 'Name',
          answer: 'der',
          plural: 'die Namen',
          meaning: 'name',
          skill: 'articles',
          difficulty: 2,
          tags: ['artikel'],
          explain: 'Name is masculine — der Name — and it is one of the few nouns whose plural simply adds -n: die Namen.',
        },
        {
          id: 'x.a1.l01.5',
          kind: 'mcq',
          prompt: 'You meet your new manager, Frau Bergmann, for the first time. What do you say?',
          options: [
            'Guten Tag, Frau Bergmann. Wie geht es Ihnen?',
            'Hallo Bergmann! Wie geht es dir?',
            'Guten Tag, Frau Bergmann. Wie geht es du?',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['pronomen', 'hoeflichkeit'],
          explain: 'Frau plus a surname puts you in the Sie world, and the polite partner of dir is Ihnen — du can never follow "wie geht es".',
        },
        {
          id: 'x.a1.l01.6',
          kind: 'correct',
          wrong: 'Wie heißt Sie, Frau Klein?',
          answer: 'Wie heißen Sie, Frau Klein?',
          skill: 'grammar',
          difficulty: 2,
          tags: ['pronomen'],
          explain: 'Polite Sie always takes the -en form, exactly like wir and sie (they). The ending -t here belongs to du and er.',
        },
        {
          id: 'x.a1.l01.7',
          kind: 'conjugate',
          verb: 'sein',
          person: 'ihr',
          answer: 'seid',
          skill: 'verbs',
          difficulty: 2,
          tags: ['praesens'],
          hint: 'It ends in -d, not in -t.',
          explain: 'sein is irregular, so the ihr form is seid — spelled with -d. The word seit with -t is not a verb; it means "since".',
        },
        {
          id: 'x.a1.l01.8',
          kind: 'listen',
          audio: 'Guten Abend, Herr Klein. Wie geht es Ihnen?',
          question: 'What time of day is it, and how is the speaker addressing Herr Klein?',
          options: [
            'Evening — formally, with Sie',
            'Morning — informally, with du',
            'Evening — informally, with du',
          ],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['hoeflichkeit'],
          explain: 'Guten Abend fixes the time of day, and Ihnen is the polite counterpart of dir — two words tell you the whole social situation.',
        },
        {
          id: 'x.a1.l01.9',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Good evening. My name is Paul. Nice to meet you.',
          answer: 'Guten Abend. Ich heiße Paul. Freut mich.',
          accept: ['Guten Abend. Mein Name ist Paul. Freut mich.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['praesens'],
          hint: 'Two ways to give your name: with heißen, or with Name + ist.',
          explain: 'German gives a name with the verb heißen (Ich heiße Paul) or with the noun (Mein Name ist Paul) — but never with "Ich bin genannt".',
        },
      ],
    },

    /* ── 6. Build ─────────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l01.10',
          kind: 'order',
          tokens: ['ich', 'heiße', 'Anna', 'Bergmann'],
          answer: 'Ich heiße Anna Bergmann.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['wortstellung'],
          explain: 'The basic German sentence is subject, then verb: the conjugated verb heiße sits in position 2 and everything else follows.',
        },
        {
          id: 'x.a1.l01.11',
          kind: 'order',
          tokens: ['wie', 'geht', 'es', 'dir'],
          answer: 'Wie geht es dir?',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung', 'w-fragen'],
          explain: 'In a question with a question word, that word takes position 1 and the verb still takes position 2 — geht comes straight after wie.',
        },
        {
          id: 'x.a1.l01.12',
          kind: 'order',
          tokens: ['guten', 'Morgen', 'ich', 'bin', 'neu', 'hier'],
          answer: 'Guten Morgen! Ich bin neu hier.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          explain: 'A greeting stands on its own and does not count as position 1 — the real sentence starts again with Ich, and bin follows in position 2.',
        },
        {
          id: 'x.a1.l01.13',
          kind: 'order',
          tokens: ['heute', 'ist', 'Frau', 'Bergmann', 'im', 'Büro'],
          answer: 'Heute ist Frau Bergmann im Büro.',
          accept: ['Frau Bergmann ist heute im Büro.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['wortstellung'],
          hint: 'Put heute first and watch what has to happen to the subject.',
          explain: 'When a time word opens the sentence, the verb ist keeps position 2, so the subject Frau Bergmann is pushed behind it — German never allows two elements before the verb.',
        },
      ],
    },

    /* ── 7. Reading ───────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read',
      readingId: 'r.a1.l01.anna',
    },

    /* ── 8. Listening ─────────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen',
      listeningId: 'h.a1.l01.sprachschule',
    },

    /* ── 9. Conversation ──────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it',
      conversationId: 'c.a1.l01.erster-arbeitstag',
    },

    /* ── 10. Quiz ─────────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l01.22',
          kind: 'mcq',
          prompt: 'It is eight in the evening and you meet your neighbour Frau Klein in the hallway. What do you say?',
          options: ['Guten Abend, Frau Klein!', 'Guten Morgen, Frau Klein!', 'Gute Nacht, Frau Klein!'],
          answer: 0,
          skill: 'conversation',
          difficulty: 1,
          tags: ['begruessung'],
          explain: 'Guten Abend is the greeting from about six in the evening. Gute Nacht is not a greeting at all — it is what you say when someone goes to bed.',
        },
        {
          id: 'x.a1.l01.23',
          kind: 'blank',
          sentence: 'Wie geht es ___, Herr Fischer?',
          options: ['Ihnen', 'dir', 'du', 'Sie'],
          answer: 'Ihnen',
          skill: 'grammar',
          difficulty: 2,
          tags: ['pronomen', 'hoeflichkeit'],
          explain: 'Herr plus a surname means Sie, and after "wie geht es" the polite form is Ihnen — dir is its informal partner.',
        },
        {
          id: 'x.a1.l01.24',
          kind: 'conjugate',
          verb: 'heißen',
          person: 'du',
          answer: 'heißt',
          skill: 'verbs',
          difficulty: 2,
          tags: ['praesens'],
          hint: 'The stem already ends in an s-sound.',
          explain: 'When a stem ends in ß, s or z, the du ending loses its s: heißen gives du heißt, which looks exactly like the er form.',
        },
        {
          id: 'x.a1.l01.25',
          kind: 'correct',
          wrong: 'Hallo! Ich heißen Tom.',
          answer: 'Hallo! Ich heiße Tom.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['praesens'],
          explain: 'The -en form belongs to wir, sie and Sie. ich always takes -e, so it is ich heiße.',
        },
        {
          id: 'x.a1.l01.26',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Hello, I am Lena. What is your name? (speaking to a friend)',
          answer: 'Hallo, ich bin Lena. Wie heißt du?',
          accept: ['Hallo, ich heiße Lena. Wie heißt du?'],
          skill: 'writing',
          difficulty: 3,
          tags: ['praesens', 'pronomen'],
          hint: 'A friend means du — and du changes the verb ending.',
          explain: 'sein gives ich bin for yourself, and the question to a friend uses du with heißt — pick the pronoun first, then the verb form follows automatically.',
        },
        {
          id: 'x.a1.l01.27',
          kind: 'dialogue',
          lines: [
            { who: 'Herr Roth', text: 'Guten Tag! Wie geht es Ihnen?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Danke, sehr gut. Und Ihnen?',
            'Danke, sehr gut. Und dir?',
            'Danke, sehr gut. Wie geht es du?',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['pronomen', 'hoeflichkeit'],
          explain: 'Answer in the same register you were asked in: he used Ihnen, so you give the question back as Und Ihnen? Switching to dir would suddenly make you too familiar.',
        },
      ],
    },

    /* ── 11. Review ───────────────────────────────────────────────────────── */
    {
      type: 'review',
      title: 'Review',
      count: 3,
    },
  ],
}

export default lesson
