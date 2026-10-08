/**
 * A2 · L18 — Plans, problems and solutions / Pläne, Probleme und Lösungen
 *
 * The lesson for the day the plan falls apart: saying what you have planned
 * (vorhaben, vorschlagen, sich vorbereiten), naming what went wrong (kaputt,
 * funktionieren, schiefgehen, klappen) and fixing it at a service desk
 * (umtauschen, zurückgeben, Quittung, Garantie, sich beschweren,
 * sich entschuldigen, versprechen, absagen).
 *
 * Grammar: g.a2.trennbar (which prefixes fly to the end and which never move)
 * and g.a2.satzbau (Time – Manner – Place for everything in between).
 *
 * Exercise ids run x.a2.l18.1 … x.a2.l18.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a2.l18',
  moduleId: 'a2.social',
  level: 'A2',
  order: 18,
  title: 'Plans, problems and solutions',
  titleDe: 'Pläne, Probleme und Lösungen',
  icon: '🧭',
  summary:
    'Say what you are planning, explain what has gone wrong and agree a solution — at the service desk, on the phone or with a colleague whose meeting you have to cancel.',
  minutes: 18,
  objectives: [
    'Say what you have planned and suggest a new date when something falls through',
    'Explain clearly what is broken and what you would like the shop to do about it',
    'Split separable verbs correctly and leave inseparable ones in one piece',
    'Line up the extra details in the German order: time, manner, place',
  ],
  vocabIds: [
    'v.a2.l18.plan',
    'v.a2.l18.vorhaben',
    'v.a2.l18.vorbereiten',
    'v.a2.l18.vorschlagen',
    'v.a2.l18.absagen',
    'v.a2.l18.versprechen',
    'v.a2.l18.problem',
    'v.a2.l18.loesung',
    'v.a2.l18.kaputt',
    'v.a2.l18.funktionieren',
    'v.a2.l18.klappen',
    'v.a2.l18.schiefgehen',
    'v.a2.l18.quittung',
    'v.a2.l18.garantie',
    'v.a2.l18.umtauschen',
    'v.a2.l18.zurueckgeben',
    'v.a2.l18.beschweren',
    'v.a2.l18.entschuldigen',
  ],
  grammarIds: ['g.a2.trennbar', 'g.a2.satzbau'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'When the plan does not work',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can say what you **have planned**, explain what **went wrong**, and agree a **solution** — in a shop, on the phone or with a colleague. Two things hold these sentences together: separable verbs, whose prefix waits at the end, and the order **Time – Manner – Place** for everything in between.',
        },
        {
          kind: 'table',
          head: ['Verb', 'Im Satz', 'Perfekt'],
          rows: [
            ['vorhaben', 'Was hast du am Freitag vor?', 'hat vorgehabt'],
            ['umtauschen', 'Ich tausche das Gerät um.', 'hat umgetauscht'],
            ['absagen', 'Wir sagen den Termin ab.', 'hat abgesagt'],
            ['sich beschweren', 'Ich beschwere mich über den Lärm.', 'hat sich beschwert'],
            ['versprechen', 'Ich verspreche Ihnen eine Lösung.', 'hat versprochen'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Ich bringe das Gerät morgen mit der Quittung ins Geschäft.',
              en: 'I am taking the device to the shop with the receipt tomorrow.',
              note: 'Time (morgen) – Manner (mit der Quittung) – Place (ins Geschäft).',
            },
            {
              de: 'Leider funktioniert der Wasserkocher seit Montag nicht mehr.',
              en: 'Unfortunately the kettle has not worked since Monday.',
            },
            {
              de: 'Was schlagen Sie vor?',
              en: 'What do you suggest?',
              note: 'vorschlagen splits: schlagen in position 2, vor at the very end.',
            },
            {
              de: 'Es tut mir leid, da ist etwas schiefgegangen.',
              en: 'I am sorry, something went wrong there.',
              note: 'schiefgehen builds the Perfekt with sein, like gehen itself.',
            },
          ],
        },
        {
          kind: 'list',
          items: [
            'Das Gerät ist kaputt. — The device is broken.',
            'Es funktioniert leider nicht mehr. — Unfortunately it does not work any more.',
            'Kann ich das umtauschen oder zurückgeben? — Can I exchange or return this?',
            'Hier ist die Quittung, ich habe noch Garantie. — Here is the receipt, I still have a warranty.',
            'Kein Problem, wir finden eine Lösung. — No problem, we will find a solution.',
          ],
        },
        {
          kind: 'tip',
          text: 'Machines **funktionieren**, plans **klappen**. *Der Drucker funktioniert nicht* — but *Der Termin klappt bei mir*. Swapping the two is the classic learner giveaway.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a2.l18.plan',
        'v.a2.l18.vorhaben',
        'v.a2.l18.vorbereiten',
        'v.a2.l18.vorschlagen',
        'v.a2.l18.absagen',
        'v.a2.l18.versprechen',
        'v.a2.l18.problem',
        'v.a2.l18.loesung',
        'v.a2.l18.kaputt',
        'v.a2.l18.funktionieren',
        'v.a2.l18.klappen',
        'v.a2.l18.schiefgehen',
        'v.a2.l18.quittung',
        'v.a2.l18.garantie',
        'v.a2.l18.umtauschen',
        'v.a2.l18.zurueckgeben',
        'v.a2.l18.beschweren',
        'v.a2.l18.entschuldigen',
      ],
    },

    /* ── 3. Grammar: separable and inseparable verbs ─────────────────────── */
    {
      type: 'grammar',
      title: 'Separable and inseparable verbs',
      grammarId: 'g.a2.trennbar',
    },

    /* ── 4. Grammar: Time – Manner – Place ──────────────────────────────── */
    {
      type: 'grammar',
      title: 'Time – Manner – Place',
      grammarId: 'g.a2.satzbau',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a2.l18.1',
          kind: 'blank',
          sentence: 'Ich ___ den Wasserkocher morgen im Geschäft um.',
          options: ['tausche', 'umtausche', 'tauschen', 'tauscht'],
          answer: 'tausche',
          skill: 'verbs',
          difficulty: 1,
          tags: ['trennbar'],
          explain:
            'Only the verb half is conjugated and goes to position 2; the prefix um is already parked at the end, so it must not appear twice.',
        },
        {
          id: 'x.a2.l18.2',
          kind: 'article',
          noun: 'Quittung',
          answer: 'die',
          plural: 'die Quittungen',
          meaning: 'receipt',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Every noun ending in -ung is feminine and makes its plural with -en: die Quittung → die Quittungen, die Lösung → die Lösungen.',
        },
        {
          id: 'x.a2.l18.3',
          kind: 'blank',
          sentence: 'Leider ___ mein Drucker seit gestern nicht mehr.',
          options: ['funktioniert', 'klappt', 'repariert', 'verspricht'],
          answer: 'funktioniert',
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'A machine either funktioniert or it does not. klappen is for plans and appointments, and reparieren is what a person does to the machine, not what the machine does.',
        },
        {
          id: 'x.a2.l18.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich habe mich gestern über den Service beschwert.',
            'Ich habe mich gestern über den Service gebeschwert.',
            'Ich habe mich gestern über den Service beschweren.',
          ],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar', 'perfekt'],
          explain:
            'be- is unstressed and inseparable, and such verbs never take ge-: beschwert, bezahlt, besucht. The Perfekt also needs a participle, never the infinitive.',
        },
        {
          id: 'x.a2.l18.5',
          kind: 'blank',
          sentence: 'Der Verkäufer hat sich für den Fehler ___.',
          answer: 'entschuldigt',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar', 'perfekt'],
          hint: 'sich entschuldigen',
          explain:
            'ent- is inseparable like be- and ver-, so the participle is simply entschuldigt — never "geentschuldigt". The reason follows with für + accusative.',
        },
        {
          id: 'x.a2.l18.6',
          kind: 'match',
          pairs: [
            ['umtauschen', 'to exchange an item'],
            ['zurückgeben', 'to give something back'],
            ['absagen', 'to cancel'],
            ['vorschlagen', 'to suggest'],
          ],
          skill: 'vocabulary',
          difficulty: 2,
          tags: ['trennbar'],
          explain:
            'All four carry a stressed prefix, so all four split in a main clause: Ich tausche … um, Ich gebe … zurück, Ich sage … ab, Ich schlage … vor.',
        },
        {
          id: 'x.a2.l18.7',
          kind: 'correct',
          wrong: 'Ich gehe ins Geschäft morgen mit der Quittung.',
          answer: 'Ich gehe morgen mit der Quittung ins Geschäft.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          explain:
            'German lines the details up as Time – Manner – Place: morgen, then mit der Quittung, then ins Geschäft. English does the opposite and puts the place first.',
        },
        {
          id: 'x.a2.l18.8',
          kind: 'conjugate',
          verb: 'vorhaben',
          person: 'du',
          answer: 'hast vor',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar'],
          hint: 'Two pieces: the conjugated verb, then the prefix.',
          explain:
            'vorhaben is built on haben, so it keeps that irregular du hast — and because vor- is stressed, the prefix breaks off and follows as its own word.',
        },
        {
          id: 'x.a2.l18.9',
          kind: 'listen',
          audio: 'Bringen Sie das Gerät bitte am Dienstag mit der Quittung zu uns.',
          question: 'On which day should the customer bring the device?',
          options: ['On Tuesday', 'On Thursday', 'On Monday'],
          answer: 0,
          skill: 'listening',
          difficulty: 3,
          explain:
            'Dienstag and Donnerstag both start with D and both have three syllables — the difference is the vowel: ie in Dienstag, o in Donnerstag.',
        },
        {
          id: 'x.a2.l18.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Unfortunately something went wrong with the delivery.',
          answer: 'Leider ist bei der Lieferung etwas schiefgegangen.',
          accept: ['Bei der Lieferung ist leider etwas schiefgegangen.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['trennbar', 'perfekt'],
          hint: 'schiefgehen behaves like gehen in the Perfekt.',
          explain:
            'schiefgehen is a gehen verb, so the auxiliary is sein, and in the participle the parts come back together with ge- in the middle: schief-ge-gangen.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a2.l18.11',
          kind: 'order',
          tokens: ['ich', 'tausche', 'die Kaffeemaschine', 'um'],
          answer: 'Ich tausche die Kaffeemaschine um.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['trennbar'],
          explain:
            'The two halves of umtauschen form a bracket: tausche in position 2, um in last place, and the object sits inside.',
        },
        {
          id: 'x.a2.l18.12',
          kind: 'order',
          tokens: ['ich', 'gehe', 'morgen', 'mit der Quittung', 'ins Geschäft'],
          answer: 'Ich gehe morgen mit der Quittung ins Geschäft.',
          accept: ['Morgen gehe ich mit der Quittung ins Geschäft.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          explain:
            'Time – Manner – Place: morgen, mit der Quittung, ins Geschäft. If you move morgen to the front, gehe still has to be the second element, so ich slips behind it.',
        },
        {
          id: 'x.a2.l18.13',
          kind: 'order',
          tokens: ['wir', 'schicken', 'das Handy', 'am Montag', 'mit der Post', 'zur Reparatur'],
          answer: 'Wir schicken das Handy am Montag mit der Post zur Reparatur.',
          accept: ['Am Montag schicken wir das Handy mit der Post zur Reparatur.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['wortstellung'],
          hint: 'The definite object das Handy comes before the time phrase.',
          explain:
            'A short definite object stays next to the verb; after it the details follow in the usual order — am Montag (time), mit der Post (manner), zur Reparatur (place).',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: a complaint and the shop’s reply',
      readingId: 'r.a2.l18.beschwerde-mail',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: a faulty phone',
      listeningId: 'h.a2.l18.handy-reparatur',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: take the machine back',
      conversationId: 'c.a2.l18.umtausch',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a2.l18.14',
          kind: 'blank',
          sentence: 'Was ___ du am Wochenende vor?',
          options: ['hast', 'habst', 'hat', 'haben'],
          answer: 'hast',
          skill: 'verbs',
          difficulty: 1,
          tags: ['trennbar'],
          explain:
            'vorhaben is haben with a prefix, so it keeps the irregular du hast. The prefix vor closes the question — that is what tells you the verb is not plain haben.',
        },
        {
          id: 'x.a2.l18.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Wir haben den Termin leider abgesagt.',
            'Wir haben den Termin leider absagt.',
            'Wir haben den Termin leider gesagt ab.',
          ],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar', 'perfekt'],
          explain:
            'In the Perfekt a separable verb becomes one word again and ge- slips into the middle: ab + ge + sagt. The prefix never leaves the participle.',
        },
        {
          id: 'x.a2.l18.16',
          kind: 'dialogue',
          lines: [
            { who: 'Verkäufer', text: 'Haben Sie die Quittung dabei?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Ja, hier ist sie. Ich möchte das Gerät bitte umtauschen.',
            'Ja, hier ist sie. Ich möchte das Gerät bitte umtausche.',
            'Ja, hier ist sie. Ich umtauschen möchte das Gerät bitte.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 3,
          tags: ['trennbar'],
          explain:
            'möchte is the conjugated verb in position 2, so umtauschen goes to the end as a whole infinitive — after a modal a separable verb never splits.',
        },
        {
          id: 'x.a2.l18.17',
          kind: 'correct',
          wrong: 'Meine Kollegin hat sich über den Lärm gebeschwert.',
          answer: 'Meine Kollegin hat sich über den Lärm beschwert.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar', 'perfekt'],
          explain:
            'You can hear it: be- is never stressed, and German puts ge- only in front of a stressed syllable. So beschwert, bezahlt and verstanden all stay bare.',
        },
        {
          id: 'x.a2.l18.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I would like to return the trousers because they are too small.',
          answer: 'Ich möchte die Hose zurückgeben, weil sie zu klein ist.',
          accept: ['Ich möchte die Hose gern zurückgeben, weil sie zu klein ist.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['trennbar', 'nebensatz'],
          hint: 'die Hose is singular in German, so the weil-clause needs sie … ist.',
          explain:
            'Two end positions in one sentence: after möchte the infinitive zurückgeben closes the main clause, and weil pushes the conjugated ist to the very end of its own clause.',
        },
        {
          id: 'x.a2.l18.19',
          kind: 'speak',
          prompt: 'Say in German: The device is broken and unfortunately does not work any more.',
          answer: 'Das Gerät ist kaputt und funktioniert leider nicht mehr.',
          accept: ['Das Gerät ist kaputt und es funktioniert leider nicht mehr.'],
          skill: 'conversation',
          difficulty: 2,
          explain:
            'kaputt goes with sein, never with haben, and nicht mehr is the set phrase for something that used to work — one single nicht would only mean it never worked.',
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
