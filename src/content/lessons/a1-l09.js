/**
 * A1 · L09 — Hobbies and the weather / Hobbys und Wetter
 *
 * The lesson where the learner finally gets to say what they *want* to do.
 * Free-time verbs (schwimmen, wandern, kochen, tanzen, fotografieren) meet
 * gern / lieber / am liebsten, the weather vocabulary with its empty subject
 * es, and the three A1 modal verbs können, möchten and müssen — which push
 * their infinitive to the end of the sentence.
 *
 * Exercise ids x.a1.l09.1 … x.a1.l09.19 live here; the reading owns 20-23 and
 * the listening 24-27.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l09',
  moduleId: 'a1.out',
  level: 'A1',
  order: 9,
  title: 'Hobbies and the weather',
  titleDe: 'Hobbys und Wetter',
  icon: '⚽',
  summary:
    'Talk about your free time, say what you like and what you prefer, describe the weather — and use können, möchten and müssen to turn all of that into a plan.',
  minutes: 16,
  objectives: [
    'Say what you do in your free time: Ich koche gern, mein Hobby ist Fußball',
    'Say what you prefer with gern, lieber and am liebsten',
    'Describe the weather and the temperature: Es ist sonnig, wir haben zwanzig Grad',
    'Make plans with können, möchten and müssen, with the infinitive at the end',
  ],
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
    'v.a1.l09.schnee',
    'v.a1.l09.regnen',
    'v.a1.l09.grad',
  ],
  grammarIds: ['g.a1.modalverben'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Free time and the sky',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can say what you do in your free time, say which of two things you prefer, and describe the weather. Three verbs carry the whole conversation: **können** (can), **möchten** (would like) and **müssen** (have to).',
        },
        {
          kind: 'table',
          head: ['Wort', 'Bedeutung', 'Beispiel'],
          rows: [
            ['gern', 'you like doing it', 'Ich koche gern.'],
            ['lieber', 'you prefer doing it', 'Ich tanze lieber.'],
            ['am liebsten', 'you like it most of all', 'Am liebsten schwimme ich.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Wie ist das Wetter heute?',
              en: 'What is the weather like today?',
              note: 'German asks with wie (how), never with was.',
            },
            { de: 'Es ist sonnig und warm.', en: 'It is sunny and warm.' },
            {
              de: 'Es regnet. Wir haben nur zehn Grad.',
              en: 'It is raining. We only have ten degrees.',
              note: 'Temperature takes haben: wir haben zehn Grad.',
            },
            {
              de: 'Am Samstag möchte ich wandern.',
              en: 'On Saturday I would like to go hiking.',
              note: 'möchte is the second element, wandern is the last word.',
            },
          ],
        },
        {
          kind: 'list',
          items: [
            'die Sonne — sun · der Regen — rain · der Schnee — snow · der Wind — wind',
            'sonnig — sunny · warm — warm · kalt — cold · grau — grey',
            'Es regnet. — It is raining. · Es schneit. — It is snowing.',
            'Wir haben zwanzig Grad. — It is twenty degrees.',
          ],
        },
        {
          kind: 'tip',
          text: 'Every weather sentence needs the little subject **es**, even when nobody is doing anything: *Es regnet*, *Es ist kalt*. A German sentence is not allowed to have no subject at all.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
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
        'v.a1.l09.schnee',
        'v.a1.l09.regnen',
        'v.a1.l09.grad',
      ],
    },

    /* ── 3. Grammar: modal verbs ────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'können, möchten, müssen',
      grammarId: 'g.a1.modalverben',
    },

    /* ── 4. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l09.1',
          kind: 'article',
          noun: 'Hobby',
          answer: 'das',
          plural: 'die Hobbys',
          meaning: 'hobby',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Words borrowed from English are usually neuter in German, and they keep an English-looking plural: das Hobby → die Hobbys.',
        },
        {
          id: 'x.a1.l09.2',
          kind: 'blank',
          sentence: 'Ich ___ gut schwimmen.',
          options: ['kann', 'kannst', 'können', 'könnt'],
          answer: 'kann',
          skill: 'verbs',
          difficulty: 1,
          tags: ['modalverben'],
          explain:
            'Modal verbs take no ending for ich: ich kann, ich muss, ich möchte. The real verb schwimmen stays an infinitive and closes the sentence.',
        },
        {
          id: 'x.a1.l09.3',
          kind: 'match',
          pairs: [
            ['Es regnet.', 'It is raining.'],
            ['Es schneit.', 'It is snowing.'],
            ['Es ist sonnig.', 'It is sunny.'],
            ['Es ist kalt.', 'It is cold.'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'Every one of these starts with es. That es does not point at anything — German simply refuses to build a sentence without a subject.',
        },
        {
          id: 'x.a1.l09.4',
          kind: 'dialogue',
          lines: [
            { who: 'Jonas', text: 'Wie ist das Wetter in Hamburg?' },
            { who: 'Du', text: '___' },
          ],
          options: [
            'Es regnet und es ist kalt.',
            'Er regnet und es ist kalt.',
            'Das Wetter regnet und ist kalt.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 1,
          explain:
            'The weather always takes es — never er, even though der Regen is masculine, and never das Wetter as the subject of regnen.',
        },
        {
          id: 'x.a1.l09.5',
          kind: 'blank',
          sentence: 'Ich spiele ___ Fußball, aber ich schwimme lieber.',
          options: ['gern', 'lieber', 'am liebsten', 'nicht'],
          answer: 'gern',
          skill: 'vocabulary',
          difficulty: 2,
          hint: 'The second half of the sentence already tells you which step is higher.',
          explain:
            'gern says you like something, lieber says you prefer it. The second half is already the lieber half, so the first one has to be the plain gern.',
        },
        {
          id: 'x.a1.l09.6',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Am Samstag möchte ich lange wandern.',
            'Am Samstag ich möchte lange wandern.',
            'Am Samstag möchte ich wandern lange.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['modalverben', 'wortstellung'],
          explain:
            'Only one element may stand before the verb, so möchte follows Am Samstag directly and ich moves behind it — and the infinitive wandern must be the very last word.',
        },
        {
          id: 'x.a1.l09.7',
          kind: 'conjugate',
          verb: 'müssen',
          person: 'du',
          answer: 'musst',
          skill: 'verbs',
          difficulty: 2,
          tags: ['modalverben'],
          explain:
            'Modal verbs drop their umlaut in the singular: muss-. On top of that du adds the normal -st, giving du musst. Only wir, ihr and sie keep the ü.',
        },
        {
          id: 'x.a1.l09.8',
          kind: 'correct',
          wrong: 'Ich kann nicht kommen heute.',
          answer: 'Ich kann heute nicht kommen.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['modalverben', 'wortstellung'],
          explain:
            'After a modal verb the infinitive is the last word of the sentence, so heute and nicht both have to squeeze in front of kommen.',
        },
        {
          id: 'x.a1.l09.9',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I would like to cook today, but I have to work.',
          answer: 'Ich möchte heute kochen, aber ich muss arbeiten.',
          accept: ['Heute möchte ich kochen, aber ich muss arbeiten.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['modalverben'],
          hint: 'Two halves, two modal verbs, two infinitives at the end of their own half.',
          explain:
            'aber simply joins two main sentences and changes nothing: each half keeps its own modal verb in position 2 and its own infinitive at the end.',
        },
      ],
    },

    /* ── 5. Build the sentence ──────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l09.10',
          kind: 'order',
          tokens: ['ich', 'spiele', 'gern', 'Fußball'],
          answer: 'Ich spiele gern Fußball.',
          accept: ['Fußball spiele ich gern.'],
          skill: 'wordorder',
          difficulty: 1,
          explain:
            'gern is not a verb — it is a small word that clips onto the sentence right after the conjugated verb, in front of the thing you like doing.',
        },
        {
          id: 'x.a1.l09.11',
          kind: 'order',
          tokens: ['wir', 'können', 'heute', 'nicht', 'wandern'],
          answer: 'Wir können heute nicht wandern.',
          accept: ['Heute können wir nicht wandern.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['modalverben'],
          explain:
            'The modal können holds position 2 and the infinitive wandern closes the sentence; nicht goes as late as it can, directly in front of that infinitive.',
        },
        {
          id: 'x.a1.l09.12',
          kind: 'order',
          tokens: ['am Sonntag', 'möchte', 'ich', 'im Park', 'fotografieren'],
          answer: 'Am Sonntag möchte ich im Park fotografieren.',
          accept: ['Ich möchte am Sonntag im Park fotografieren.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['modalverben', 'wortstellung'],
          hint: 'Am Sonntag counts as one single element.',
          explain:
            'Am Sonntag fills position 1 on its own, so möchte comes next and the subject ich slides behind it — meanwhile fotografieren never leaves the end.',
        },
        {
          id: 'x.a1.l09.13',
          kind: 'order',
          tokens: ['bei Regen', 'müssen', 'wir', 'zu Hause', 'bleiben'],
          answer: 'Bei Regen müssen wir zu Hause bleiben.',
          accept: ['Wir müssen bei Regen zu Hause bleiben.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['modalverben', 'wortstellung'],
          hint: 'bei Regen is one block, zu Hause is another.',
          explain:
            'A three-word frame holds the sentence together: one element in front, müssen second, bleiben last. Everything else — even zu Hause — lives in the middle.',
        },
      ],
    },

    /* ── 6. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read',
      readingId: 'r.a1.l09.wochenende',
    },

    /* ── 7. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen',
      listeningId: 'h.a1.l09.wetterbericht',
    },

    /* ── 8. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it',
      conversationId: 'c.a1.l09.wochenendplan',
    },

    /* ── 9. Quiz ────────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l09.14',
          kind: 'article',
          noun: 'Wetter',
          answer: 'das',
          meaning: 'weather',
          skill: 'articles',
          difficulty: 1,
          explain:
            'das Wetter is neuter and has no plural — there is only ever one weather at a time, so you never meet die Wetter.',
        },
        {
          id: 'x.a1.l09.15',
          kind: 'blank',
          sentence: 'Heute ___ es den ganzen Tag.',
          options: ['regnet', 'regne', 'regnest', 'regnen'],
          answer: 'regnet',
          skill: 'verbs',
          difficulty: 2,
          explain:
            'Weather verbs only exist in the es form, so regnen always shows up as regnet. There is no ich regne — nobody can personally rain.',
        },
        {
          id: 'x.a1.l09.16',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich möchte am Samstag Fußball spielen.',
            'Ich möchte am Samstag spielen Fußball.',
            'Ich möchte am Samstag Fußball zu spielen.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['modalverben'],
          explain:
            'After a modal verb the second verb is a bare infinitive — never with zu — and it stands behind its own object, at the very end of the sentence.',
        },
        {
          id: 'x.a1.l09.17',
          kind: 'conjugate',
          verb: 'tanzen',
          person: 'du',
          answer: 'tanzt',
          skill: 'verbs',
          difficulty: 2,
          tags: ['konjugation'],
          hint: 'Say tanz-st out loud — one sound is doing double duty.',
          explain:
            'When a stem already ends in -z, the -s of the du ending disappears: du tanzt. That makes the du form look exactly like er tanzt.',
        },
        {
          id: 'x.a1.l09.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'What is the weather like in Berlin? It is sunny and warm.',
          answer: 'Wie ist das Wetter in Berlin? Es ist sonnig und warm.',
          accept: ['Wie ist das Wetter in Berlin? Es ist warm und sonnig.'],
          skill: 'writing',
          difficulty: 3,
          hint: 'German asks with "how", not with "what".',
          explain:
            'The fixed question is Wie ist das Wetter? — wie, not was — and the answer still needs the empty subject es in front of ist.',
        },
        {
          id: 'x.a1.l09.19',
          kind: 'speak',
          prompt: 'Say in German: I would like to go hiking on Sunday.',
          answer: 'Ich möchte am Sonntag wandern.',
          accept: ['Am Sonntag möchte ich wandern.'],
          skill: 'conversation',
          difficulty: 1,
          tags: ['modalverben'],
          explain:
            'Say möchte second and save wandern for the very end — that final infinitive is the signal that tells a German listener your sentence is finished.',
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
