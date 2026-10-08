/**
 * A1 · L05 — Daily routine / Der Tagesablauf
 *
 * The lesson where German verbs start breaking in half. Everything the learner
 * needs to narrate an ordinary day: separable verbs (aufstehen, anfangen,
 * einkaufen, fernsehen, ankommen, mitkommen), the stem-changing verbs that keep
 * turning up in a routine (schlafen, lesen, essen, fahren, sehen, sprechen),
 * and the time words that hold it together.
 *
 * Exercise ids run x.a1.l05.1 … x.a1.l05.19 here; the reading owns 20-23 and
 * the listening 24-27.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l05',
  moduleId: 'a1.everyday',
  level: 'A1',
  order: 5,
  title: 'Daily routine',
  titleDe: 'Der Tagesablauf',
  icon: '⏰',
  summary:
    'Walk through an ordinary day in German — getting up, starting work, coming home, watching TV — with separable verbs and the time words that go with them.',
  minutes: 16,
  objectives: [
    'Describe your day from the alarm clock to going to bed',
    'Split separable verbs correctly: Ich stehe um sechs Uhr auf.',
    'Say at what time something starts, arrives or finishes',
    'Say how often you do something: jeden Tag, oft, manchmal, nie',
  ],
  vocabIds: [
    'v.a1.l05.aufstehen',
    'v.a1.l05.duschen',
    'v.a1.l05.fruehstuecken',
    'v.a1.l05.anfangen',
    'v.a1.l05.einkaufen',
    'v.a1.l05.fernsehen',
    'v.a1.l05.ankommen',
    'v.a1.l05.mitkommen',
    'v.a1.l05.schlafen',
    'v.a1.l05.wecker',
    'v.a1.l05.morgens',
    'v.a1.l05.mittags',
    'v.a1.l05.abends',
    'v.a1.l05.jeden-tag',
    'v.a1.l05.oft',
    'v.a1.l05.nie',
  ],
  grammarIds: ['g.a1.trennbar', 'g.a1.unregelmaessig'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'A day in German',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can tell a colleague what your day looks like: when you get up, when work starts, when you get home. Most of these verbs are **separable** — a small prefix breaks off the verb and waits at the **end** of the sentence.',
        },
        {
          kind: 'table',
          head: ['Verb', 'Meaning', 'Im Satz'],
          rows: [
            ['aufstehen', 'to get up', 'Ich stehe um sechs Uhr auf.'],
            ['anfangen', 'to start', 'Die Arbeit fängt um acht Uhr an.'],
            ['ankommen', 'to arrive', 'Ich komme um halb neun an.'],
            ['einkaufen', 'to do the shopping', 'Am Samstag kaufe ich ein.'],
            ['fernsehen', 'to watch TV', 'Abends sehe ich fern.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Morgens dusche ich und frühstücke schnell.',
              en: 'In the morning I have a shower and eat breakfast quickly.',
            },
            {
              de: 'Wann fängt deine Arbeit an?',
              en: 'When does your work start?',
              note: 'anfangen is separable and stem-changing: du fängst an, er fängt an.',
            },
            {
              de: 'Jeden Tag fahre ich um sieben Uhr zur Arbeit.',
              en: 'Every day I go to work at seven.',
            },
            {
              de: 'Abends sehe ich oft fern, aber ich lese nie.',
              en: 'In the evening I often watch TV, but I never read.',
            },
          ],
        },
        {
          kind: 'list',
          items: [
            'morgens — in the morning · mittags — at midday · abends — in the evening',
            'jeden Tag — every day',
            'oft — often · manchmal — sometimes · nie — never',
            'um sieben Uhr — at seven · um halb acht — at 7:30 (German counts towards the next hour)',
          ],
        },
        {
          kind: 'tip',
          text: 'Start with the time if you like — *Um sieben Uhr stehe ich auf* — the conjugated verb still has to be the **second** element, and the prefix still closes the sentence.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a1.l05.aufstehen',
        'v.a1.l05.duschen',
        'v.a1.l05.fruehstuecken',
        'v.a1.l05.anfangen',
        'v.a1.l05.einkaufen',
        'v.a1.l05.fernsehen',
        'v.a1.l05.ankommen',
        'v.a1.l05.mitkommen',
        'v.a1.l05.schlafen',
        'v.a1.l05.wecker',
        'v.a1.l05.morgens',
        'v.a1.l05.mittags',
        'v.a1.l05.abends',
        'v.a1.l05.jeden-tag',
        'v.a1.l05.oft',
        'v.a1.l05.nie',
      ],
    },

    /* ── 3. Grammar: separable verbs ────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Separable verbs',
      grammarId: 'g.a1.trennbar',
    },

    /* ── 4. Grammar: stem-changing verbs ────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Verbs that change their vowel',
      grammarId: 'g.a1.unregelmaessig',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l05.1',
          kind: 'blank',
          sentence: 'Ich ___ jeden Tag um sechs Uhr auf.',
          options: ['stehe', 'stehst', 'steht', 'stehen'],
          answer: 'stehe',
          skill: 'verbs',
          difficulty: 1,
          tags: ['trennbar'],
          explain:
            'Only the stehen part is conjugated, and ich always takes -e. The prefix auf is already parked at the end, so the gap needs a finite verb.',
        },
        {
          id: 'x.a1.l05.2',
          kind: 'conjugate',
          verb: 'einkaufen',
          person: 'du',
          answer: 'kaufst ein',
          skill: 'verbs',
          difficulty: 1,
          tags: ['trennbar'],
          hint: 'Two pieces: the conjugated verb, then the prefix.',
          explain:
            'A separable verb is conjugated on its second half: kaufen → du kaufst. The prefix ein detaches and follows as a separate word.',
        },
        {
          id: 'x.a1.l05.3',
          kind: 'article',
          noun: 'Wecker',
          answer: 'der',
          plural: 'die Wecker',
          meaning: 'alarm clock',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Nouns for devices that end in -er are masculine, and that -er ending already carries the plural: der Wecker → die Wecker.',
        },
        {
          id: 'x.a1.l05.4',
          kind: 'blank',
          sentence: 'Meine Arbeit ___ um acht Uhr an.',
          options: ['fängt', 'fangen', 'fängst', 'fange'],
          answer: 'fängt',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar', 'konjugation'],
          explain:
            'Meine Arbeit is a sie, so anfangen takes the changed stem fäng- plus -t. The -st ending would belong to du.',
        },
        {
          id: 'x.a1.l05.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: ['Ich sehe abends fern.', 'Ich fernsehe abends.', 'Ich sehe fern abends.'],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['trennbar'],
          explain:
            'The prefix fern is always the last word of the sentence, so everything else — here abends — has to squeeze in before it.',
        },
        {
          id: 'x.a1.l05.6',
          kind: 'match',
          pairs: [
            ['morgens', 'in the morning'],
            ['mittags', 'at midday'],
            ['abends', 'in the evening'],
            ['jeden Tag', 'every day'],
          ],
          skill: 'vocabulary',
          difficulty: 2,
          explain:
            'The -s ending turns a time of day into a habit: der Morgen is one morning, morgens means every morning.',
        },
        {
          id: 'x.a1.l05.7',
          kind: 'correct',
          wrong: 'Du schlafst bis neun Uhr.',
          answer: 'Du schläfst bis neun Uhr.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['konjugation'],
          explain:
            'schlafen changes a → ä in the du and er/sie/es forms: du schläfst, er schläft. wir and ihr keep the plain a.',
        },
        {
          id: 'x.a1.l05.8',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I never watch TV in the morning.',
          answer: 'Ich sehe morgens nie fern.',
          accept: ['Morgens sehe ich nie fern.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['trennbar'],
          hint: 'Three pieces have to find a place: the verb, the time word and the prefix.',
          explain:
            'nie is already a negation, so no nicht is needed — and it still has to stand before the prefix, because fern closes the sentence.',
        },
        {
          id: 'x.a1.l05.9',
          kind: 'listen',
          audio: 'Ich stehe um halb sieben auf und dusche.',
          question: 'What time does the speaker get up?',
          options: ['6:30', '7:30', '7:00'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          explain:
            'halb sieben means half an hour before seven, not after it — German counts towards the coming hour, so it is 6:30.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l05.10',
          kind: 'order',
          tokens: ['ich', 'stehe', 'um sieben Uhr', 'auf'],
          answer: 'Ich stehe um sieben Uhr auf.',
          accept: ['Um sieben Uhr stehe ich auf.'],
          skill: 'wordorder',
          difficulty: 1,
          tags: ['trennbar'],
          explain:
            'Verb second, prefix last — that frame holds the sentence together, and the time phrase sits inside it.',
        },
        {
          id: 'x.a1.l05.11',
          kind: 'order',
          tokens: ['meine', 'Arbeit', 'fängt', 'um', 'acht', 'Uhr', 'an'],
          answer: 'Meine Arbeit fängt um acht Uhr an.',
          accept: ['Um acht Uhr fängt meine Arbeit an.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['trennbar', 'wortstellung'],
          explain:
            'Meine Arbeit is one single element, so fängt is still the second element. The prefix an waits at the very end either way.',
        },
        {
          id: 'x.a1.l05.12',
          kind: 'order',
          tokens: ['abends', 'sehe', 'ich', 'oft', 'fern'],
          answer: 'Abends sehe ich oft fern.',
          accept: ['Ich sehe abends oft fern.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['trennbar', 'wortstellung'],
          explain:
            'When the time word opens the sentence, the subject ich has to move behind the verb — German swaps them so that sehe keeps position 2.',
        },
        {
          id: 'x.a1.l05.13',
          kind: 'order',
          tokens: ['um', 'Viertel', 'nach', 'acht', 'fängt', 'der', 'Deutschkurs', 'an'],
          answer: 'Um Viertel nach acht fängt der Deutschkurs an.',
          accept: ['Der Deutschkurs fängt um Viertel nach acht an.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['trennbar', 'wortstellung'],
          hint: 'Um Viertel nach acht is one long time phrase — count it as a single element.',
          explain:
            'A four-word time phrase is still only one element, so fängt follows immediately in position 2 and the prefix an closes the frame.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: a day on the early shift',
      readingId: 'r.a1.l05.schichtdienst',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: Tobias in the morning',
      listeningId: 'h.a1.l05.mein-morgen',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: tell a colleague about your day',
      conversationId: 'c.a1.l05.arbeitstag',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l05.14',
          kind: 'blank',
          sentence: 'Wann ___ du morgens auf?',
          options: ['stehst', 'stehe', 'steht', 'stehen'],
          answer: 'stehst',
          skill: 'verbs',
          difficulty: 1,
          tags: ['trennbar'],
          explain:
            'A question word opens the sentence, the verb follows in position 2 and matches du → stehst. The prefix auf still ends the question.',
        },
        {
          id: 'x.a1.l05.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: ['Er schläft bis neun Uhr.', 'Er schlaft bis neun Uhr.', 'Er schläfst bis neun Uhr.'],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['konjugation'],
          explain:
            'er/sie/es needs both things at once: the changed vowel ä and the ending -t. The -st ending belongs to du only.',
        },
        {
          id: 'x.a1.l05.16',
          kind: 'dialogue',
          lines: [
            { who: 'Jonas', text: 'Wir kaufen am Samstag ein. Kommst du mit?' },
            { who: 'Du', text: '___' },
          ],
          options: ['Ja, gern! Ich komme mit.', 'Ja, gern! Ich mitkomme.', 'Ja, gern! Ich komme mit ein.'],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['trennbar'],
          explain:
            'You answer with the same verb, split the same way: komme in position 2, the prefix mit at the end. The whole word mitkomme never exists.',
        },
        {
          id: 'x.a1.l05.17',
          kind: 'correct',
          wrong: 'Morgens ich frühstücke nie.',
          answer: 'Morgens frühstücke ich nie.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          explain:
            'Morgens already fills position 1, so the verb must come next and the subject ich moves behind it — German allows only one element before the verb.',
        },
        {
          id: 'x.a1.l05.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I get up at six every day and have breakfast at half past six.',
          answer: 'Ich stehe jeden Tag um sechs Uhr auf und frühstücke um halb sieben.',
          accept: ['Jeden Tag stehe ich um sechs Uhr auf und frühstücke um halb sieben.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['trennbar'],
          hint: 'Half past six is counted towards seven in German.',
          explain:
            'The prefix auf closes the first half of the sentence before und starts the second; and halb sieben means 6:30, because German names the hour it is heading for.',
        },
        {
          id: 'x.a1.l05.19',
          kind: 'speak',
          prompt: 'Say in German: In the evening I often watch TV.',
          answer: 'Abends sehe ich oft fern.',
          accept: ['Ich sehe abends oft fern.'],
          skill: 'conversation',
          difficulty: 1,
          tags: ['trennbar'],
          explain:
            'Say the prefix last and give it a small pause — fern is the word that tells your listener which verb you actually meant.',
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
