/**
 * B1 · L25 — Health and relationships / Gesundheit und Beziehungen
 *
 * How people tell each other what happened to them — the accident, the
 * illness, the argument and the reconciliation. Stories like these need two
 * layers of the past: what happened, and what had already happened before
 * that (Nachdem ich mich verletzt hatte, …). Most of the verbs are
 * reflexive, so the A2 reflexive step comes back as revision.
 *
 * Grammar: g.b1.plusquamperfekt, revising g.a2.reflexiv.
 *
 * Exercise ids run x.b1.l25.1 … x.b1.l25.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'b1.l25',
  moduleId: 'b1.life',
  level: 'B1',
  order: 25,
  title: 'Health and relationships',
  titleDe: 'Gesundheit und Beziehungen',
  icon: '❤️‍🩹',
  summary:
    'Tell what happened — an accident, a quarrel, a reconciliation — with the Plusquamperfekt for what had happened before, and talk about health and the people close to you.',
  minutes: 20,
  objectives: [
    'Tell a story in two layers of the past: Präteritum for the story, Plusquamperfekt for what came before',
    'Use nachdem correctly — always one tense further back than the main clause',
    'Talk about injuries, illness, rest and diet with the right reflexive verbs',
    'Talk about friendship, love, arguments and making up',
  ],
  vocabIds: [
    'v.b1.l25.gesundheit',
    'v.b1.l25.gesund',
    'v.b1.l25.krankheit',
    'v.b1.l25.krankenhaus',
    'v.b1.l25.unfall',
    'v.b1.l25.verletzung',
    'v.b1.l25.verletzen',
    'v.b1.l25.erholen',
    'v.b1.l25.entspannen',
    'v.b1.l25.ernaehrung',
    'v.b1.l25.beziehung',
    'v.b1.l25.freundschaft',
    'v.b1.l25.hochzeit',
    'v.b1.l25.verlieben',
    'v.b1.l25.heiraten',
    'v.b1.l25.streiten',
    'v.b1.l25.versoehnen',
    'v.b1.l25.vertrauen',
  ],
  grammarIds: ['g.b1.plusquamperfekt', 'g.a2.reflexiv'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'What had happened before',
      blocks: [
        {
          kind: 'text',
          text: 'When you tell a story, some things happened **before** the story itself. German marks that earlier layer with the **Plusquamperfekt**: *hatte* or *war* + Partizip II — the Perfekt with its auxiliary moved into the past. Its natural home is the **nachdem**-clause.',
        },
        {
          kind: 'table',
          head: ['Hauptsatz', 'nachdem-Satz'],
          rows: [
            ['Präsens: Ich gehe spazieren,', 'nachdem ich gegessen habe.'],
            ['Präteritum: Ich ging spazieren,', 'nachdem ich gegessen hatte.'],
            ['Perfekt: Ich bin spazieren gegangen,', 'nachdem ich gegessen hatte.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Nachdem sie sich verletzt hatte, fuhr sie ins Krankenhaus.',
              en: 'After she had hurt herself, she went to hospital.',
              note: 'hatte … verletzt happened first; fuhr is the story itself.',
            },
            {
              de: 'Als ich ankam, war der Zug schon abgefahren.',
              en: 'When I arrived, the train had already left.',
              note: 'abfahren takes sein in the Perfekt — so war in the Plusquamperfekt.',
            },
            {
              de: 'Wir hatten uns gestritten, aber am Abend haben wir uns wieder versöhnt.',
              en: 'We had argued, but in the evening we made up again.',
            },
          ],
        },
        {
          kind: 'warn',
          text: 'The auxiliary follows the same rule as in the Perfekt: verbs of movement and change take **sein** (*war gegangen*, *war eingeschlafen*), everything else — including every reflexive verb — takes **haben** (*hatte sich verletzt*).',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.b1.l25.gesundheit',
        'v.b1.l25.gesund',
        'v.b1.l25.krankheit',
        'v.b1.l25.krankenhaus',
        'v.b1.l25.unfall',
        'v.b1.l25.verletzung',
        'v.b1.l25.verletzen',
        'v.b1.l25.erholen',
        'v.b1.l25.entspannen',
        'v.b1.l25.ernaehrung',
        'v.b1.l25.beziehung',
        'v.b1.l25.freundschaft',
        'v.b1.l25.hochzeit',
        'v.b1.l25.verlieben',
        'v.b1.l25.heiraten',
        'v.b1.l25.streiten',
        'v.b1.l25.versoehnen',
        'v.b1.l25.vertrauen',
      ],
    },

    /* ── 3. Grammar: Plusquamperfekt ────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Plusquamperfekt',
      grammarId: 'g.b1.plusquamperfekt',
    },

    /* ── 4. Grammar revision: reflexive verbs ───────────────────────────── */
    {
      type: 'grammar',
      title: 'Revision: reflexive verbs',
      grammarId: 'g.a2.reflexiv',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.b1.l25.1',
          kind: 'blank',
          sentence: 'Nachdem ich gegessen ___, ging ich spazieren.',
          options: ['hatte', 'habe', 'war', 'bin'],
          answer: 'hatte',
          skill: 'verbs',
          difficulty: 1,
          tags: ['plusquamperfekt', 'nebensatz'],
          explain:
            'The main clause is in the Präteritum (ging), so the nachdem-clause goes one step further back: Plusquamperfekt. essen takes haben in the Perfekt, so here: hatte gegessen.',
        },
        {
          id: 'x.b1.l25.2',
          kind: 'article',
          noun: 'Krankenhaus',
          answer: 'das',
          plural: 'die Krankenhäuser',
          meaning: 'hospital',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Kranken + Haus, and das Haus decides: das Krankenhaus. The plural follows Haus too: die Krankenhäuser.',
        },
        {
          id: 'x.b1.l25.3',
          kind: 'blank',
          sentence: 'Als der Arzt kam, ___ der Patient schon eingeschlafen.',
          options: ['war', 'hatte', 'ist', 'wurde'],
          answer: 'war',
          skill: 'verbs',
          difficulty: 2,
          tags: ['plusquamperfekt'],
          explain:
            'einschlafen is a change of state, so it takes sein: ist eingeschlafen. Moved into the past for the Plusquamperfekt: war eingeschlafen.',
        },
        {
          id: 'x.b1.l25.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Nachdem sie sich verletzt hatte, fuhr sie ins Krankenhaus.',
            'Nachdem sie sich verletzt hatte, sie fuhr ins Krankenhaus.',
            'Nachdem sie hatte sich verletzt, fuhr sie ins Krankenhaus.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['plusquamperfekt', 'nebensatz'],
          explain:
            'nachdem sends hatte to the end of its clause, and the clause then counts as position 1: fuhr sie, verb first. Reflexive verbs always take haben.',
        },
        {
          id: 'x.b1.l25.5',
          kind: 'conjugate',
          verb: 'sich streiten',
          person: 'wir',
          answer: 'streiten uns',
          skill: 'verbs',
          difficulty: 2,
          tags: ['reflexiv'],
          explain:
            'The wir-form of the verb is the infinitive, and the reflexive pronoun for wir is uns: wir streiten uns.',
        },
        {
          id: 'x.b1.l25.6',
          kind: 'match',
          pairs: [
            ['die Beziehung', 'relationship'],
            ['die Freundschaft', 'friendship'],
            ['die Hochzeit', 'wedding'],
            ['die Verletzung', 'injury'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'All four are feminine — the endings -ung, -schaft and -zeit (from die Zeit) always are.',
        },
        {
          id: 'x.b1.l25.7',
          kind: 'correct',
          wrong: 'Ich verliebte mich in sie, nachdem ich sie kennengelernt habe.',
          answer: 'Ich verliebte mich in sie, nachdem ich sie kennengelernt hatte.',
          skill: 'verbs',
          difficulty: 3,
          tags: ['plusquamperfekt', 'nebensatz'],
          explain:
            'With a past main clause (verliebte), the nachdem-clause must go back one more step: kennengelernt hatte. Perfekt in the nachdem-clause only works with a present main clause.',
        },
        {
          id: 'x.b1.l25.8',
          kind: 'blank',
          sentence: 'Er hat seiner Frau nicht mehr ___ — das war das Problem.',
          answer: 'vertraut',
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt', 'dativ'],
          hint: 'vertrauen + Dativ',
          explain:
            'ver- is inseparable, so the participle has no ge-: vertraut. And vertrauen takes the dative — seiner Frau, not seine Frau.',
        },
        {
          id: 'x.b1.l25.9',
          kind: 'listen',
          audio: 'Ich konnte nicht zur Arbeit gehen, weil ich mir am Wochenende den Fuß verletzt hatte.',
          question: 'Why could the person not go to work?',
          options: ['They had hurt their foot at the weekend.', 'They had a cold.', 'They had an accident at work.'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['plusquamperfekt'],
          explain:
            'The weil-clause holds the reason, and it ends with the Plusquamperfekt verletzt hatte: the injury happened first, at the weekend, and then kept them from work.',
        },
        {
          id: 'x.b1.l25.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'After we had argued, we made up again.',
          answer: 'Nachdem wir uns gestritten hatten, versöhnten wir uns wieder.',
          accept: [
            'Nachdem wir uns gestritten hatten, haben wir uns wieder versöhnt.',
            'Wir versöhnten uns wieder, nachdem wir uns gestritten hatten.',
            'Wir haben uns wieder versöhnt, nachdem wir uns gestritten hatten.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['plusquamperfekt', 'reflexiv'],
          hint: 'to argue = sich streiten, to make up = sich versöhnen',
          explain:
            'Both verbs are reflexive and take haben. The earlier event goes in the Plusquamperfekt (gestritten hatten); the later one in the Präteritum or Perfekt.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.b1.l25.11',
          kind: 'order',
          tokens: ['ich', 'möchte', 'mich', 'am Wochenende', 'gut', 'erholen'],
          answer: 'Ich möchte mich am Wochenende gut erholen.',
          accept: ['Am Wochenende möchte ich mich gut erholen.'],
          skill: 'wordorder',
          difficulty: 1,
          tags: ['reflexiv', 'modalverben'],
          explain:
            'The reflexive pronoun sticks close to the conjugated verb: möchte mich. The infinitive erholen closes the sentence.',
        },
        {
          id: 'x.b1.l25.12',
          kind: 'order',
          tokens: ['nachdem', 'er', 'die Tablette', 'genommen hatte', 'ging es', 'ihm', 'besser'],
          answer: 'Nachdem er die Tablette genommen hatte, ging es ihm besser.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['plusquamperfekt', 'nebensatz'],
          explain:
            'The nachdem-clause ends with hatte; then the main clause opens with its verb: ging es ihm besser. Es geht mir / ihm besser takes the dative.',
        },
        {
          id: 'x.b1.l25.13',
          kind: 'order',
          tokens: ['sie', 'hatten', 'sich', 'schon', 'getrennt', 'als', 'ich', 'sie', 'kennenlernte'],
          answer: 'Sie hatten sich schon getrennt, als ich sie kennenlernte.',
          accept: ['Als ich sie kennenlernte, hatten sie sich schon getrennt.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['plusquamperfekt', 'nebensatz'],
          explain:
            'Two layers: the separation (hatten sich getrennt) came before the meeting (kennenlernte). schon underlines that it was already over.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: a friendship that nearly ended',
      readingId: 'r.b1.l25.freundschaft',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: back pain after a move',
      listeningId: 'h.b1.l25.rueckenschmerzen',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: a friend needs to talk',
      conversationId: 'c.b1.l25.streit',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.b1.l25.14',
          kind: 'blank',
          sentence: 'Sie hat sich in einen Kollegen ___.',
          options: ['verliebt', 'verlieben', 'verliebte', 'geverliebt'],
          answer: 'verliebt',
          skill: 'verbs',
          difficulty: 1,
          tags: ['perfekt', 'reflexiv'],
          explain:
            'hat … needs a participle, and ver- verbs take no ge-: verliebt. You fall in love in + accusative: in einen Kollegen.',
        },
        {
          id: 'x.b1.l25.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich vertraue meinem besten Freund.',
            'Ich vertraue meinen besten Freund.',
            'Ich vertraue mein bester Freund.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['dativ'],
          explain:
            'vertrauen takes the dative, like helfen and danken: meinem besten Freund. The adjective after a possessive in the dative ends in -en.',
        },
        {
          id: 'x.b1.l25.16',
          kind: 'dialogue',
          lines: [
            { who: 'Freundin', text: 'Warum warst du gestern nicht beim Training?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Ich hatte mich am Morgen am Knie verletzt.',
            'Ich war mich am Morgen am Knie verletzt.',
            'Ich hatte mich am Morgen am Knie verletzen.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['plusquamperfekt', 'reflexiv'],
          explain:
            'The injury came before the missed training, so Plusquamperfekt — and reflexive verbs always take haben: hatte mich verletzt, with the participle, not the infinitive.',
        },
        {
          id: 'x.b1.l25.17',
          kind: 'correct',
          wrong: 'Nachdem ich angekommen hatte, rief ich meine Mutter an.',
          answer: 'Nachdem ich angekommen war, rief ich meine Mutter an.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['plusquamperfekt'],
          explain:
            'ankommen is movement to a place, so it takes sein: ist angekommen → war angekommen. The Plusquamperfekt keeps the Perfekt’s auxiliary.',
        },
        {
          id: 'x.b1.l25.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I have to relax more.',
          answer: 'Ich muss mich mehr entspannen.',
          accept: ['Ich muss mich öfter entspannen.'],
          skill: 'writing',
          difficulty: 2,
          tags: ['reflexiv', 'modalverben'],
          explain:
            'entspannen is reflexive in German — you relax yourself: mich. After the modal muss, the infinitive goes last.',
        },
        {
          id: 'x.b1.l25.19',
          kind: 'speak',
          prompt: 'Say in German: My grandparents got married fifty years ago.',
          answer: 'Meine Großeltern haben vor fünfzig Jahren geheiratet.',
          skill: 'conversation',
          difficulty: 2,
          tags: ['perfekt'],
          explain:
            'heiraten is not reflexive in German — no sich. "ago" is vor + dative, and the dative plural adds -n: vor fünfzig Jahren.',
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
