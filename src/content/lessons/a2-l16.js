/**
 * A2 · L16 — Invitations and social life / Einladungen und Freizeit
 *
 * The lesson where the learner stops only accepting and starts arguing for a
 * plan. Everything needed for a German Saturday evening: the invitation
 * (Einladung, einladen, Feier, Geburtstag, Geschenk), yes and no (zusagen,
 * absagen, Lust haben), the negotiation (Vorschlag, am besten, am liebsten)
 * and the places (Kneipe, Lokal, Runde) — all held together by the
 * comparative, which is what an opinion is actually made of.
 *
 * Exercise ids: the lesson owns x.a2.l16.1 … x.a2.l16.19, the reading owns
 * 20-24 and the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a2.l16',
  moduleId: 'a2.social',
  level: 'A2',
  order: 16,
  title: 'Invitations and social life',
  titleDe: 'Einladungen und Freizeit',
  icon: '🎉',
  summary:
    'Invite someone, accept or turn an invitation down politely, and argue for the evening you actually want — with the comparative and superlative that every German opinion is built on.',
  minutes: 18,
  objectives: [
    'Invite someone and accept or turn down an invitation politely',
    'Compare two plans out loud: Die Kneipe ist gemütlicher als das Lokal.',
    'Say what you like doing best with lieber and am liebsten',
    'Make a suggestion and agree on a time and a place with a friend',
  ],
  vocabIds: [
    'v.a2.l16.einladung',
    'v.a2.l16.einladen',
    'v.a2.l16.feier',
    'v.a2.l16.geburtstag',
    'v.a2.l16.geschenk',
    'v.a2.l16.zusagen',
    'v.a2.l16.sich-verabreden',
    'v.a2.l16.lust-haben',
    'v.a2.l16.vorschlag',
    'v.a2.l16.am-besten',
    'v.a2.l16.am-liebsten',
    'v.a2.l16.kneipe',
    'v.a2.l16.lokal',
    'v.a2.l16.runde',
    'v.a2.l16.langweilig',
    'v.a2.l16.spannend',
  ],
  grammarIds: ['g.a2.komparativ'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Saying yes, saying no, saying why',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can invite somebody, accept or turn an invitation down without sounding rude, and defend the plan you prefer. The tool for defending a plan is the **comparative**: German adds **-er** to the adjective, and whatever you compare with follows **als**.',
        },
        {
          kind: 'table',
          head: ['Adjektiv', 'Komparativ', 'Superlativ'],
          rows: [
            ['gemütlich', 'gemütlicher', 'am gemütlichsten'],
            ['langweilig', 'langweiliger', 'am langweiligsten'],
            ['spannend', 'spannender', 'am spannendsten'],
            ['teuer', 'teurer', 'am teuersten'],
            ['gut', 'besser', 'am besten'],
            ['gern', 'lieber', 'am liebsten'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Vielen Dank für die Einladung! Ich sage gern zu.',
              en: 'Many thanks for the invitation! I am happy to accept.',
              note: 'zusagen is separable — the prefix zu closes the sentence.',
            },
            {
              de: 'Die Kneipe ist gemütlicher als das Lokal.',
              en: 'The pub is cosier than the restaurant.',
              note: 'A comparative is always followed by als, never by wie.',
            },
            {
              de: 'Hast du am Samstag Lust auf eine Feier?',
              en: 'Do you feel like a party on Saturday?',
              note: 'Lust auf takes the accusative.',
            },
            {
              de: 'Am besten treffen wir uns um sieben Uhr vor dem Lokal.',
              en: 'It is best if we meet at seven in front of the restaurant.',
              note: 'am besten at the front of a sentence is a soft, friendly way to suggest something.',
            },
          ],
        },
        {
          kind: 'list',
          items: [
            'eine Einladung bekommen — to get an invitation',
            'zusagen — to accept · absagen — to turn down',
            'sich mit jemandem verabreden — to arrange to meet someone',
            'einen Vorschlag machen — to make a suggestion',
          ],
        },
        {
          kind: 'tip',
          text: 'Turning something down has a fixed shape in German: **Leider kann ich nicht, ich habe schon etwas vor.** Name a reason and offer another date — a bare *nein* sounds much colder in German than in English.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a2.l16.einladung',
        'v.a2.l16.einladen',
        'v.a2.l16.feier',
        'v.a2.l16.geburtstag',
        'v.a2.l16.geschenk',
        'v.a2.l16.zusagen',
        'v.a2.l16.sich-verabreden',
        'v.a2.l16.lust-haben',
        'v.a2.l16.vorschlag',
        'v.a2.l16.am-besten',
        'v.a2.l16.am-liebsten',
        'v.a2.l16.kneipe',
        'v.a2.l16.lokal',
        'v.a2.l16.runde',
        'v.a2.l16.langweilig',
        'v.a2.l16.spannend',
      ],
    },

    /* ── 3. Grammar ─────────────────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Comparative and superlative',
      grammarId: 'g.a2.komparativ',
    },

    /* ── 4. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a2.l16.1',
          kind: 'blank',
          sentence: 'Das Geschenk war teuer, aber die Feier war noch ___.',
          options: ['teurer', 'teuerer', 'am teuersten', 'teuer'],
          answer: 'teurer',
          skill: 'grammar',
          difficulty: 1,
          tags: ['komparativ'],
          explain:
            'Adjectives ending in -er drop that -e- before the comparative ending: teuer → teurer. "teuerer" with three e in a row does not exist, and am teuersten would need at least three things to compare.',
        },
        {
          id: 'x.a2.l16.2',
          kind: 'article',
          noun: 'Einladung',
          answer: 'die',
          plural: 'die Einladungen',
          meaning: 'invitation',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Every noun ending in -ung is feminine without exception, and they all form the plural with -en: die Einladung → die Einladungen.',
        },
        {
          id: 'x.a2.l16.3',
          kind: 'match',
          pairs: [
            ['die Einladung', 'the invitation'],
            ['das Geschenk', 'the present'],
            ['der Vorschlag', 'the suggestion'],
            ['die Kneipe', 'the pub'],
            ['die Feier', 'the party'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'Learn each of these with its article from day one — der Vorschlag and das Geschenk look similar but behave differently in every case you will meet later.',
        },
        {
          id: 'x.a2.l16.4',
          kind: 'blank',
          sentence: 'Die Kneipe ist gemütlicher ___ das Restaurant.',
          options: ['als', 'wie', 'wenn', 'dass'],
          answer: 'als',
          skill: 'grammar',
          difficulty: 2,
          tags: ['komparativ'],
          explain:
            'After a comparative German always uses als. wie belongs to so … wie, which says two things are equally good — a completely different statement.',
        },
        {
          id: 'x.a2.l16.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich habe heute keine Lust auf eine Feier.',
            'Ich habe heute keine Lust auf einer Feier.',
            'Ich habe heute keine Lust für eine Feier.',
          ],
          answer: 0,
          skill: 'cases',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'Lust auf is a fixed combination and auf here points at something you want, not at a place — so it takes the accusative: eine Feier. für never works with Lust.',
        },
        {
          id: 'x.a2.l16.6',
          kind: 'correct',
          wrong: 'Der Film war mehr spannend als das Buch.',
          answer: 'Der Film war spannender als das Buch.',
          skill: 'grammar',
          difficulty: 2,
          tags: ['komparativ'],
          explain:
            'German has no "more + adjective" pattern. However long the adjective is, the ending -er does the whole job: spannend → spannender.',
        },
        {
          id: 'x.a2.l16.7',
          kind: 'conjugate',
          verb: 'einladen',
          person: 'du',
          answer: 'lädst ein',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar', 'konjugation'],
          hint: 'Two things happen at once: the stem changes and the prefix breaks off.',
          explain:
            'einladen is separable and stem-changing: laden takes a → ä in du and er, giving du lädst, and the prefix ein detaches and waits at the end of the sentence.',
        },
        {
          id: 'x.a2.l16.8',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I would rather go to the pub, because it is cosier there.',
          answer: 'Ich gehe lieber in die Kneipe, weil es dort gemütlicher ist.',
          accept: ['Ich gehe lieber in die Kneipe, weil es da gemütlicher ist.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['komparativ', 'nebensatz'],
          hint: 'English "would rather" is simply lieber plus the ordinary present tense.',
          explain:
            'German does not need a conditional for "would rather" — lieber next to the verb says it all. And after weil the conjugated verb ist drops to the very end of the clause.',
        },
        {
          id: 'x.a2.l16.9',
          kind: 'listen',
          audio: 'Das Lokal am Markt ist teurer, aber die Kneipe ist viel lauter.',
          question: 'Which place is more expensive?',
          options: ['Das Lokal am Markt.', 'Die Kneipe.', 'Both cost the same.'],
          answer: 0,
          skill: 'listening',
          difficulty: 3,
          explain:
            'teurer belongs to the first half of the sentence and therefore to das Lokal. After aber the topic changes from price to noise, so the Kneipe is never described as expensive at all.',
        },
      ],
    },

    /* ── 5. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a2.l16.10',
          kind: 'order',
          tokens: ['die', 'Kneipe', 'ist', 'gemütlicher', 'als', 'das', 'Restaurant'],
          answer: 'Die Kneipe ist gemütlicher als das Restaurant.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['komparativ'],
          explain:
            'The basic comparison frame never changes: subject – verb – comparative – als – the thing you compare with.',
        },
        {
          id: 'x.a2.l16.11',
          kind: 'order',
          tokens: ['ich', 'gehe', 'am liebsten', 'in', 'ein', 'kleines', 'Lokal'],
          answer: 'Ich gehe am liebsten in ein kleines Lokal.',
          accept: ['Am liebsten gehe ich in ein kleines Lokal.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['komparativ', 'wortstellung'],
          explain:
            'am liebsten can sit after the verb or open the sentence. If it opens it, the subject ich has to move behind gehe, because the verb stays in position 2.',
        },
        {
          id: 'x.a2.l16.12',
          kind: 'order',
          tokens: ['am besten', 'treffen', 'wir', 'uns', 'um', 'sieben', 'Uhr', 'vor', 'dem', 'Kino'],
          answer: 'Am besten treffen wir uns um sieben Uhr vor dem Kino.',
          accept: ['Wir treffen uns am besten um sieben Uhr vor dem Kino.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['komparativ', 'wortstellung'],
          hint: 'Time before place: um sieben Uhr comes before vor dem Kino.',
          explain:
            'Am besten opens the sentence as a single element, so treffen follows immediately and wir uns comes after it. German then orders the rest as time before place.',
        },
        {
          id: 'x.a2.l16.13',
          kind: 'order',
          tokens: ['ich', 'sage', 'ab', 'weil', 'ich', 'am', 'Samstag', 'keine', 'Zeit', 'habe'],
          answer: 'Ich sage ab, weil ich am Samstag keine Zeit habe.',
          accept: ['Weil ich am Samstag keine Zeit habe, sage ich ab.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['komparativ', 'nebensatz', 'trennbar'],
          hint: 'Two frames in one sentence: the separable verb in the main clause, and weil sending its verb to the end.',
          explain:
            'The prefix ab closes the main clause, and habe closes the weil-clause. Put the weil-clause first and it fills position 1, so the main clause then starts with sage.',
        },
      ],
    },

    /* ── 6. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: the group chat decides',
      readingId: 'r.a2.l16.gruppenchat',
    },

    /* ── 7. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: two restaurants, one evening',
      listeningId: 'h.a2.l16.zwei-lokale',
    },

    /* ── 8. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: Nina invites you to her birthday',
      conversationId: 'c.a2.l16.geburtstagseinladung',
    },

    /* ── 9. Quiz ────────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a2.l16.14',
          kind: 'blank',
          sentence: 'Ich gehe ___ in die Kneipe als ins Kino.',
          options: ['lieber', 'gern', 'am liebsten', 'besser'],
          answer: 'lieber',
          skill: 'grammar',
          difficulty: 1,
          tags: ['komparativ'],
          explain:
            'als always demands a comparative, and gern has no -er form: its comparative is the irregular lieber. am liebsten is the superlative and cannot stand with als.',
        },
        {
          id: 'x.a2.l16.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Sein Vorschlag war besser als mein Vorschlag.',
            'Sein Vorschlag war guter als mein Vorschlag.',
            'Sein Vorschlag war mehr gut als mein Vorschlag.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['komparativ'],
          explain:
            'gut is one of the three irregular ones: gut – besser – am besten. The regular ending is simply not available here, so neither "guter" nor "mehr gut" exists.',
        },
        {
          id: 'x.a2.l16.16',
          kind: 'dialogue',
          lines: [
            { who: 'Nina', text: 'Wir feiern am Samstag meinen Geburtstag. Hast du Lust?' },
            { who: 'Du', text: '___' },
          ],
          options: [
            'Ja, sehr gern! Ich sage zu.',
            'Ja, sehr gern! Ich zusage.',
            'Ja, sehr gern! Ich sage zusammen.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['trennbar'],
          explain:
            'zusagen is separable, so the prefix zu breaks off and closes the sentence: Ich sage zu. The unsplit form "ich zusage" never occurs in a main clause.',
        },
        {
          id: 'x.a2.l16.17',
          kind: 'correct',
          wrong: 'Diese Kneipe ist mehr gemütlich wie das Lokal.',
          answer: 'Diese Kneipe ist gemütlicher als das Lokal.',
          skill: 'grammar',
          difficulty: 3,
          tags: ['komparativ'],
          explain:
            'Two separate mistakes sit in one sentence: German builds the comparative with the ending -er and never with mehr, and what you compare with follows als, not wie.',
        },
        {
          id: 'x.a2.l16.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Most of all I like going to the pub with friends.',
          answer: 'Am liebsten gehe ich mit Freunden in die Kneipe.',
          accept: ['Ich gehe am liebsten mit Freunden in die Kneipe.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['komparativ', 'wortstellung'],
          hint: '"Most of all I like doing X" is am liebsten plus the plain present tense.',
          explain:
            'am liebsten is the superlative of gern, so no extra verb like "to like" is needed. When it opens the sentence it fills position 1 and the subject ich moves behind gehe.',
        },
        {
          id: 'x.a2.l16.19',
          kind: 'speak',
          prompt: 'Say in German: Many thanks for the invitation — I am very happy to come.',
          answer: 'Vielen Dank für die Einladung. Ich komme sehr gern.',
          accept: ['Danke für die Einladung. Ich komme sehr gern.'],
          skill: 'conversation',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'für always takes the accusative, and for a feminine noun that changes nothing: die Einladung stays die Einladung. gern after the verb is how German says "I would love to".',
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
