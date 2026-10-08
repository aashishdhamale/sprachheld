/**
 * A2 · L12 — Appointments and the doctor / Termine und beim Arzt
 *
 * The lesson that gets you through a German Hausarztpraxis: the phone call,
 * the reception desk, the consulting room and the two pieces of paper you
 * leave with. Grammatically it rests on the two verb patterns the whole topic
 * needs — reflexive verbs (sich fühlen, sich erkälten, sich ausruhen) and the
 * modal verbs in full (Ich muss zum Arzt, Können Sie mich krankschreiben?).
 *
 * Exercise ids: the lesson owns x.a2.l12.1 … x.a2.l12.20, the reading
 * 21-25 and the listening 26-29.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a2.l12',
  moduleId: 'a2.moving',
  level: 'A2',
  order: 12,
  title: 'Appointments and the doctor',
  titleDe: 'Termine und beim Arzt',
  icon: '🩺',
  summary:
    'Phone a German practice for an appointment, say what hurts and since when, and understand the prescription and the sick note you leave with.',
  minutes: 18,
  objectives: [
    'Ring a practice and ask for an appointment — or move one you cannot keep',
    'Describe your symptoms: Ich fühle mich schlecht, mir tut der Hals weh, ich habe Fieber',
    'Ask the doctor for a sick note and understand what to do with the prescription',
    'Use modal verbs to say what you must, can and are allowed to do',
  ],
  vocabIds: [
    'v.a2.l12.praxis',
    'v.a2.l12.sprechstunde',
    'v.a2.l12.versichertenkarte',
    'v.a2.l12.beschwerde',
    'v.a2.l12.schmerz',
    'v.a2.l12.husten',
    'v.a2.l12.fieber',
    'v.a2.l12.erkaeltung',
    'v.a2.l12.rezept',
    'v.a2.l12.apotheke',
    'v.a2.l12.tablette',
    'v.a2.l12.krankmeldung',
    'v.a2.l12.sich-fuehlen',
    'v.a2.l12.wehtun',
    'v.a2.l12.untersuchen',
    'v.a2.l12.krankschreiben',
    'v.a2.l12.verschieben',
    'v.a2.l12.dringend',
  ],
  grammarIds: ['g.a2.reflexiv', 'g.a2.modalverben'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'At the doctor in German',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can phone a practice, ask for a **Termin**, say what is wrong and understand what the doctor tells you. Two patterns carry almost the whole topic: **reflexive verbs** (*Ich fühle mich schlecht*) and **modal verbs** (*Ich muss zum Arzt*).',
        },
        {
          kind: 'table',
          head: ['Was Sie sagen', 'What it means'],
          rows: [
            ['Ich hätte gern einen Termin.', 'I would like an appointment.'],
            ['Ich fühle mich seit drei Tagen schlecht.', 'I have been feeling ill for three days.'],
            ['Mir tut der Hals weh.', 'My throat hurts.'],
            ['Können Sie mich bitte krankschreiben?', 'Could you sign me off sick, please?'],
            ['Können wir den Termin verschieben?', 'Can we move the appointment?'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Ich habe mich erkältet und brauche dringend einen Termin.',
              en: 'I have caught a cold and urgently need an appointment.',
              note: 'sich erkälten is reflexive — in the Perfekt the pronoun stands directly after habe.',
            },
            {
              de: 'Welche Beschwerden haben Sie denn?',
              en: 'So what symptoms do you have?',
              note: 'The standard question at the reception desk. denn adds nothing but friendliness.',
            },
            {
              de: 'Der Arzt untersucht mich und schreibt mir ein Rezept.',
              en: 'The doctor examines me and writes me a prescription.',
              note: 'mir is the dative person who receives the Rezept.',
            },
            {
              de: 'Ich muss die Tabletten dreimal am Tag nehmen.',
              en: 'I have to take the tablets three times a day.',
              note: 'muss sits in position 2, the infinitive nehmen waits at the very end.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'With **wehtun** the body part is the subject and the person goes into the dative: *__Mir__ tut der Kopf weh.* Literally: *the head hurts to me.*',
        },
        {
          kind: 'tip',
          text: 'Say **Ich habe Husten / Fieber / Halsschmerzen** with no article at all — and *Schmerzen* is almost always plural: *Ich habe Schmerzen im Rücken.*',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a2.l12.praxis',
        'v.a2.l12.sprechstunde',
        'v.a2.l12.versichertenkarte',
        'v.a2.l12.beschwerde',
        'v.a2.l12.schmerz',
        'v.a2.l12.husten',
        'v.a2.l12.fieber',
        'v.a2.l12.erkaeltung',
        'v.a2.l12.rezept',
        'v.a2.l12.apotheke',
        'v.a2.l12.tablette',
        'v.a2.l12.krankmeldung',
        'v.a2.l12.sich-fuehlen',
        'v.a2.l12.wehtun',
        'v.a2.l12.untersuchen',
        'v.a2.l12.krankschreiben',
        'v.a2.l12.verschieben',
        'v.a2.l12.dringend',
      ],
    },

    /* ── 3. Grammar: reflexive verbs ────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Reflexive verbs',
      grammarId: 'g.a2.reflexiv',
    },

    /* ── 4. Grammar: modal verbs in full ────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Modal verbs in full',
      grammarId: 'g.a2.modalverben',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a2.l12.1',
          kind: 'blank',
          sentence: 'Wie ___ Sie sich heute?',
          options: ['fühlen', 'fühlt', 'fühle', 'fühlst'],
          answer: 'fühlen',
          skill: 'verbs',
          difficulty: 1,
          tags: ['reflexiv'],
          explain:
            'Polite Sie always takes the full -en form, and the reflexive pronoun for Sie is sich. This is the first question every German doctor asks.',
        },
        {
          id: 'x.a2.l12.2',
          kind: 'article',
          noun: 'Apotheke',
          answer: 'die',
          plural: 'die Apotheken',
          meaning: 'pharmacy',
          skill: 'articles',
          difficulty: 1,
          explain:
            'German nouns ending in an unstressed -e are feminine in the vast majority of cases, and they build the plural with -n: die Apotheke → die Apotheken, die Tablette → die Tabletten.',
        },
        {
          id: 'x.a2.l12.3',
          kind: 'blank',
          sentence: 'Ich ___ morgen zum Arzt, ich habe seit Tagen Fieber.',
          options: ['muss', 'musst', 'müssen', 'müsst'],
          answer: 'muss',
          skill: 'verbs',
          difficulty: 2,
          tags: ['modalverben'],
          explain:
            'Modal verbs take no ending at all in the ich form: ich muss, ich kann, ich darf. With a clear destination like zum Arzt, German simply leaves gehen out.',
        },
        {
          id: 'x.a2.l12.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: ['Mir tut der Kopf weh.', 'Ich tue der Kopf weh.', 'Mich tut der Kopf weh.'],
          answer: 0,
          skill: 'cases',
          difficulty: 2,
          tags: ['dativ'],
          explain:
            'With wehtun the body part is the subject (der Kopf) and the person who feels it goes into the dative: mir, dir, ihm, ihr.',
        },
        {
          id: 'x.a2.l12.5',
          kind: 'match',
          pairs: [
            ['die Sprechstunde', 'consultation hours'],
            ['die Versichertenkarte', 'health insurance card'],
            ['die Krankmeldung', 'sick note'],
            ['die Apotheke', 'pharmacy'],
          ],
          skill: 'vocabulary',
          difficulty: 2,
          explain:
            'These four words map a whole visit: the hours on the door, the card you hand over at the desk, the note your employer wants and the shop where you cash in the prescription.',
        },
        {
          id: 'x.a2.l12.6',
          kind: 'correct',
          wrong: 'Ich habe erkältet und bleibe heute zu Hause.',
          answer: 'Ich habe mich erkältet und bleibe heute zu Hause.',
          skill: 'verbs',
          difficulty: 3,
          tags: ['reflexiv', 'perfekt'],
          explain:
            'sich erkälten never loses its pronoun — the dictionary lists the verb with sich. In the Perfekt that pronoun stands directly after the auxiliary: ich habe mich erkältet.',
        },
        {
          id: 'x.a2.l12.7',
          kind: 'conjugate',
          verb: 'sich fühlen',
          person: 'er',
          answer: 'fühlt sich',
          skill: 'verbs',
          difficulty: 2,
          tags: ['reflexiv'],
          hint: 'Two pieces: the conjugated verb, then the pronoun.',
          explain:
            'The verb takes the normal -t ending for er/sie/es, and the reflexive pronoun for the third person is always sich — never ihn or mich.',
        },
        {
          id: 'x.a2.l12.8',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Can we move the appointment to Thursday?',
          answer: 'Können wir den Termin auf Donnerstag verschieben?',
          skill: 'writing',
          difficulty: 3,
          tags: ['modalverben'],
          hint: 'A yes/no question opens with the conjugated verb.',
          explain:
            'In a yes/no question the modal können takes first place and pushes the infinitive verschieben to the very end; verschieben auf is followed by the accusative, hence auf Donnerstag.',
        },
        {
          id: 'x.a2.l12.9',
          kind: 'listen',
          audio: 'Die Sprechstunde ist heute nur von acht bis zwölf Uhr.',
          question: 'When does the surgery close today?',
          options: ['At 12:00', 'At 8:00', 'At 14:00'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          explain:
            'von … bis marks a span: von acht is where it starts, bis zwölf is where it ends. bis always names the end point, never the beginning.',
        },
        {
          id: 'x.a2.l12.10',
          kind: 'speak',
          prompt: 'Say in German: I would like an appointment, please.',
          answer: 'Ich hätte gern einen Termin, bitte.',
          accept: ['Ich hätte gern einen Termin.'],
          skill: 'conversation',
          difficulty: 1,
          explain:
            'Ich hätte gern is the fixed polite formula Germans use on the phone and at counters — much softer than Ich will, and the rest of the sentence stays completely normal.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a2.l12.11',
          kind: 'order',
          tokens: ['ich', 'habe', 'einen Termin', 'beim Arzt'],
          answer: 'Ich habe einen Termin beim Arzt.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['dativ'],
          explain:
            'beim is bei + dem. With a person or a practice you are visiting, German says beim Arzt — bei takes the dative, so der Arzt becomes dem Arzt.',
        },
        {
          id: 'x.a2.l12.12',
          kind: 'order',
          tokens: ['ich', 'fühle', 'mich', 'seit drei Tagen', 'nicht gut'],
          answer: 'Ich fühle mich seit drei Tagen nicht gut.',
          accept: ['Seit drei Tagen fühle ich mich nicht gut.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['reflexiv'],
          explain:
            'The reflexive pronoun mich follows the conjugated verb immediately — before the time phrase and before the negation. If you start with the time phrase, the subject moves behind the verb but mich still hugs it.',
        },
        {
          id: 'x.a2.l12.13',
          kind: 'order',
          tokens: ['können', 'Sie', 'mich', 'bitte', 'krankschreiben'],
          answer: 'Können Sie mich bitte krankschreiben?',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['modalverben'],
          explain:
            'A yes/no question puts the conjugated verb first, so können opens and the infinitive krankschreiben closes the sentence — the modal bracket is the same as in a statement, only shifted.',
        },
        {
          id: 'x.a2.l12.14',
          kind: 'order',
          tokens: ['ich', 'muss', 'den Termin', 'leider', 'absagen', 'weil', 'ich', 'krank', 'bin'],
          answer: 'Ich muss den Termin leider absagen, weil ich krank bin.',
          accept: ['Weil ich krank bin, muss ich den Termin leider absagen.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['nebensatz', 'modalverben'],
          hint: 'Two clauses, two different rules: one keeps the verb in position 2, the other sends it to the end.',
          explain:
            'weil sends its own verb to the very end of its clause (… weil ich krank bin), while the main clause keeps muss in position 2 and parks the infinitive absagen at its own end.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: the practice information sheet',
      readingId: 'r.a2.l12.praxis-info',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: at the reception desk',
      listeningId: 'h.a2.l12.am-empfang',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: get an appointment and see the doctor',
      conversationId: 'c.a2.l12.arzttermin',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a2.l12.15',
          kind: 'blank',
          sentence: 'Mein Sohn hat Fieber und ___ heute zu Hause bleiben.',
          options: ['muss', 'musst', 'müssen', 'müsst'],
          answer: 'muss',
          skill: 'verbs',
          difficulty: 1,
          tags: ['modalverben'],
          explain:
            'er/sie/es takes exactly the same modal form as ich — no ending at all: er muss, er kann, er darf. Only du and ihr add something.',
        },
        {
          id: 'x.a2.l12.16',
          kind: 'article',
          noun: 'Rezept',
          answer: 'das',
          plural: 'die Rezepte',
          meaning: 'prescription',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Short Latin borrowings ending in -pt are neuter: das Rezept, das Konzept, das Skript. They all form the plural with -e.',
        },
        {
          id: 'x.a2.l12.17',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: ['Ich habe mich erkältet.', 'Ich habe erkältet.', 'Ich bin mich erkältet.'],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['reflexiv', 'perfekt'],
          explain:
            'The pronoun belongs to the verb in every tense, and sich erkälten describes an activity rather than a movement, so the Perfekt is built with haben.',
        },
        {
          id: 'x.a2.l12.18',
          kind: 'dialogue',
          lines: [
            { who: 'Arzthelferin', text: 'Guten Tag. Haben Sie Ihre Versichertenkarte dabei?' },
            { who: 'Du', text: '___' },
          ],
          options: ['Ja, hier bitte.', 'Nein, ich habe Fieber.', 'Ja, dreimal am Tag.'],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          explain:
            'The question is about the card, not about your symptoms or your tablets. Ja, hier bitte is what Germans actually say while handing something over.',
        },
        {
          id: 'x.a2.l12.19',
          kind: 'correct',
          wrong: 'Der Arzt hat mich für drei Tage krankschreiben.',
          answer: 'Der Arzt hat mich für drei Tage krankgeschrieben.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt', 'trennbar'],
          explain:
            'In the Perfekt a separable verb comes back together as one word with ge- in the middle: krank + ge + schrieben. An infinitive would only be possible after a modal verb.',
        },
        {
          id: 'x.a2.l12.20',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I have had a cough and a fever since Monday and urgently need an appointment.',
          answer: 'Ich habe seit Montag Husten und Fieber und brauche dringend einen Termin.',
          accept: ['Seit Montag habe ich Husten und Fieber und brauche dringend einen Termin.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['dativ'],
          hint: 'German keeps the present tense with seit.',
          explain:
            'seit + dative marks something that started in the past and is still going on, and German uses the present tense for it — never the Perfekt. Husten and Fieber take no article.',
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
