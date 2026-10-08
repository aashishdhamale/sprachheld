/**
 * B1 · L20 — Emails, formal and informal / E-Mails, formell und informell
 *
 * Writing German that sounds right: picking the register (du or Sie) and
 * carrying it through greeting, verb forms and sign-off; the fixed lines of
 * a business e-mail (Im Anhang finden Sie …, Ich freue mich auf Ihre
 * Rückmeldung); and the infinitive constructions every e-mail needs —
 * Ich schreibe Ihnen, um … zu …, Ich habe vergessen, … zu …
 *
 * Grammar: g.b1.formell (du/Sie register) and g.b1.infinitiv
 * (zu + Infinitiv, um … zu, ohne … zu).
 *
 * Exercise ids run x.b1.l20.1 … x.b1.l20.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'b1.l20',
  moduleId: 'b1.work',
  level: 'B1',
  order: 20,
  title: 'Emails, formal and informal',
  titleDe: 'E-Mails, formell und informell',
  icon: '✉️',
  summary:
    'Write e-mails that sound right: choose du or Sie and stick to it, use the fixed phrases of business German, and say why you are writing with um … zu.',
  minutes: 20,
  objectives: [
    'Open and close an e-mail correctly for a stranger, a colleague and a friend',
    'Say why you are writing with um … zu and hang a second verb on with zu',
    'Use the standard phrases for enquiries, attachments, confirmations and replies',
    'Spot and fix a message that mixes du and Sie',
  ],
  vocabIds: [
    'v.b1.l20.nachricht',
    'v.b1.l20.betreff',
    'v.b1.l20.anrede',
    'v.b1.l20.anhang',
    'v.b1.l20.freundliche-gruesse',
    'v.b1.l20.anfrage',
    'v.b1.l20.absage',
    'v.b1.l20.bestaetigung',
    'v.b1.l20.rueckmeldung',
    'v.b1.l20.beantworten',
    'v.b1.l20.bestaetigen',
    'v.b1.l20.bedanken',
    'v.b1.l20.mitteilen',
    'v.b1.l20.weiterleiten',
    'v.b1.l20.erreichen',
    'v.b1.l20.wenden-an',
    'v.b1.l20.hoeflich',
    'v.b1.l20.persoenlich',
  ],
  grammarIds: ['g.b1.formell', 'g.b1.infinitiv'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Three e-mails, three registers',
      blocks: [
        {
          kind: 'text',
          text: 'Every German e-mail starts with one decision: **du or Sie**. Once you have made it, it fixes the greeting, the verb forms, the possessives and the sign-off. Mixing them — *Sehr geehrter Herr Braun, kannst du …* — is the mistake Germans notice first.',
        },
        {
          kind: 'table',
          head: ['', 'Formell (Sie)', 'Halbformell (Kollegen)', 'Informell (du)'],
          rows: [
            ['Anrede', 'Sehr geehrte Frau Weber,', 'Hallo Frau Weber,', 'Liebe Anna, / Hallo Tom,'],
            ['Bitte', 'Könnten Sie mir … schicken?', 'Können Sie mir … schicken?', 'Kannst du mir … schicken?'],
            ['Anhang', 'Im Anhang finden Sie …', 'Anbei schicke ich Ihnen …', 'Ich schicke dir … mit.'],
            ['Gruß', 'Mit freundlichen Grüßen', 'Viele Grüße', 'Liebe Grüße / Bis bald'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Ich schreibe Ihnen, um mich für das Gespräch zu bedanken.',
              en: 'I am writing to thank you for the conversation.',
              note: 'um … zu gives the purpose. The infinitive with zu closes the clause.',
            },
            {
              de: 'Leider habe ich vergessen, Ihnen den Anhang zu schicken.',
              en: 'Unfortunately I forgot to send you the attachment.',
            },
            {
              de: 'Bei Fragen wenden Sie sich bitte an Frau Wenzel.',
              en: 'If you have any questions, please contact Ms Wenzel.',
            },
            {
              de: 'Ich freue mich auf Ihre Rückmeldung.',
              en: 'I look forward to hearing from you.',
              note: 'The classic last line before the sign-off.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'After the comma following the greeting, German carries on in **lower case**: *Sehr geehrte Frau Weber, vielen Dank für …* The comma, not a full stop, is standard.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.b1.l20.nachricht',
        'v.b1.l20.betreff',
        'v.b1.l20.anrede',
        'v.b1.l20.anhang',
        'v.b1.l20.freundliche-gruesse',
        'v.b1.l20.anfrage',
        'v.b1.l20.absage',
        'v.b1.l20.bestaetigung',
        'v.b1.l20.rueckmeldung',
        'v.b1.l20.beantworten',
        'v.b1.l20.bestaetigen',
        'v.b1.l20.bedanken',
        'v.b1.l20.mitteilen',
        'v.b1.l20.weiterleiten',
        'v.b1.l20.erreichen',
        'v.b1.l20.wenden-an',
        'v.b1.l20.hoeflich',
        'v.b1.l20.persoenlich',
      ],
    },

    /* ── 3. Grammar: register ───────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Formal and informal German',
      grammarId: 'g.b1.formell',
    },

    /* ── 4. Grammar: infinitive constructions ───────────────────────────── */
    {
      type: 'grammar',
      title: 'zu + Infinitiv, um … zu',
      grammarId: 'g.b1.infinitiv',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.b1.l20.1',
          kind: 'blank',
          sentence: 'Ich schreibe Ihnen, ___ mich für den Termin zu bedanken.',
          options: ['um', 'ohne', 'damit', 'weil'],
          answer: 'um',
          skill: 'grammar',
          difficulty: 1,
          tags: ['infinitiv'],
          explain:
            'The clause ends in zu bedanken and has no subject of its own, so it needs um — "in order to". damit and weil would need a subject and a conjugated verb at the end.',
        },
        {
          id: 'x.b1.l20.2',
          kind: 'article',
          noun: 'Anhang',
          answer: 'der',
          plural: 'die Anhänge',
          meaning: 'attachment',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Nouns made from a verb stem with nothing added are mostly masculine: anhängen → der Anhang, anfangen → der Anfang, ausgehen → der Ausgang. The plural takes an Umlaut.',
        },
        {
          id: 'x.b1.l20.3',
          kind: 'blank',
          sentence: 'Vielen Dank für Ihre schnelle ___.',
          options: ['Rückmeldung', 'Anrede', 'Betreff', 'Absage'],
          answer: 'Rückmeldung',
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'You thank someone for their reply — die Rückmeldung. The Anrede is the greeting line, the Betreff the subject line, and you would hardly thank anyone for an Absage.',
        },
        {
          id: 'x.b1.l20.4',
          kind: 'mcq',
          prompt: 'You are writing to a company for the first time. Which sign-off fits?',
          options: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Bis bald und tschüss'],
          answer: 0,
          skill: 'writing',
          difficulty: 1,
          tags: ['formell'],
          explain:
            'Anyone you call Sie gets Mit freundlichen Grüßen. Liebe Grüße is for friends and family, and tschüss belongs in speech and chat messages.',
        },
        {
          id: 'x.b1.l20.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich habe vergessen, Ihnen den Anhang zu schicken.',
            'Ich habe vergessen, Ihnen den Anhang schicken.',
            'Ich habe vergessen, zu Ihnen den Anhang schicken.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['infinitiv'],
          explain:
            'vergessen is not a modal, so the second verb needs zu — and zu stands directly before the infinitive at the end of the clause, never in front of the objects.',
        },
        {
          id: 'x.b1.l20.6',
          kind: 'conjugate',
          verb: 'weiterleiten',
          person: 'ich',
          answer: 'leite weiter',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar'],
          hint: 'Two pieces: the conjugated verb, then the prefix.',
          explain:
            'weiter- carries the stress, so it splits off and goes to the end of the sentence: Ich leite die E-Mail weiter.',
        },
        {
          id: 'x.b1.l20.7',
          kind: 'correct',
          wrong: 'Sehr geehrter Herr Schneider, kannst du mir die Unterlagen schicken?',
          answer: 'Sehr geehrter Herr Schneider, können Sie mir die Unterlagen schicken?',
          accept: ['Sehr geehrter Herr Schneider, könnten Sie mir die Unterlagen schicken?'],
          skill: 'writing',
          difficulty: 2,
          tags: ['formell'],
          explain:
            'Sehr geehrter Herr … sets the Sie register, so the request must follow it: können Sie, not kannst du. Mixing the two sounds careless at best and rude at worst.',
        },
        {
          id: 'x.b1.l20.8',
          kind: 'blank',
          sentence: 'Bei Fragen wenden Sie sich bitte ___ Frau Weber.',
          answer: 'an',
          skill: 'prepositions',
          difficulty: 2,
          tags: ['praeposition'],
          hint: 'sich wenden …',
          explain:
            'sich wenden always comes with an + accusative: you turn TO someone. Learn the three words as one chunk — sich wenden an.',
        },
        {
          id: 'x.b1.l20.9',
          kind: 'listen',
          audio: 'Leider kann ich Ihnen erst nächste Woche antworten, weil ich bis Freitag im Urlaub bin.',
          question: 'Why can the person only reply next week?',
          options: ['They are on holiday until Friday.', 'They are ill until Friday.', 'They are at a conference until Friday.'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['nebensatz'],
          explain:
            'The reason sits in the weil-clause, and it ends with the key words: bis Freitag im Urlaub bin. This is the typical German out-of-office message.',
        },
        {
          id: 'x.b1.l20.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I am writing to you to confirm the appointment.',
          answer: 'Ich schreibe Ihnen, um den Termin zu bestätigen.',
          accept: ['Ich schreibe Ihnen, um Ihnen den Termin zu bestätigen.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['infinitiv', 'formell'],
          hint: 'to confirm = bestätigen; "to" of purpose = um … zu.',
          explain:
            'English "to" of purpose becomes um … zu. The infinitive bestätigen closes the clause with zu right in front of it, and Ihnen keeps the e-mail in the Sie register.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.b1.l20.11',
          kind: 'order',
          tokens: ['ich', 'schreibe', 'Ihnen', 'um', 'mich', 'zu bedanken'],
          answer: 'Ich schreibe Ihnen, um mich zu bedanken.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['infinitiv'],
          explain:
            'A normal main clause first, then the purpose: um opens it, the reflexive mich follows, and zu bedanken closes it.',
        },
        {
          id: 'x.b1.l20.12',
          kind: 'order',
          tokens: ['es', 'ist', 'wichtig', 'die E-Mail', 'heute noch', 'zu beantworten'],
          answer: 'Es ist wichtig, die E-Mail heute noch zu beantworten.',
          accept: ['Es ist wichtig, heute noch die E-Mail zu beantworten.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['infinitiv'],
          explain:
            'Es ist wichtig, … zu … is one of the commonest frames: the adjective sets it up, and everything you have to do comes after the comma, with zu + infinitive last.',
        },
        {
          id: 'x.b1.l20.13',
          kind: 'order',
          tokens: ['er', 'hat', 'die Nachricht', 'weitergeleitet', 'ohne', 'sie', 'zu lesen'],
          answer: 'Er hat die Nachricht weitergeleitet, ohne sie zu lesen.',
          skill: 'wordorder',
          difficulty: 3,
          tags: ['infinitiv', 'perfekt', 'trennbar'],
          explain:
            'ohne … zu means "without doing": the Perfekt main clause closes with weitergeleitet, then ohne sie zu lesen adds what he did not do. sie stands for die Nachricht.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: an enquiry, a reply and a note to a friend',
      readingId: 'r.b1.l20.anfrage-sprachkurs',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: help with a tricky e-mail',
      listeningId: 'h.b1.l20.mail-an-kunden',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: chase up an unanswered e-mail',
      conversationId: 'c.b1.l20.nachfragen',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.b1.l20.14',
          kind: 'blank',
          sentence: 'Ich freue mich darauf, Sie bald persönlich ___.',
          options: ['kennenzulernen', 'zu kennenlernen', 'kennenlernen', 'kennen zuzulernen'],
          answer: 'kennenzulernen',
          skill: 'grammar',
          difficulty: 2,
          tags: ['infinitiv', 'trennbar'],
          explain:
            'With a separable verb, zu slips in between prefix and verb and the whole thing is written as one word: kennen + zu + lernen. The same happens with anzurufen, mitzubringen, einzuladen.',
        },
        {
          id: 'x.b1.l20.15',
          kind: 'mcq',
          prompt: 'Your colleague Tom and you say du to each other. How do you start the e-mail?',
          options: ['Hallo Tom,', 'Sehr geehrter Herr Tom,', 'Sehr geehrte Damen und Herren,'],
          answer: 0,
          skill: 'writing',
          difficulty: 1,
          tags: ['formell'],
          explain:
            'du goes with the first name and Hallo or Lieber. Sehr geehrter only ever comes with Herr + surname — never with a first name — and Sehr geehrte Damen und Herren is for when you do not know a name at all.',
        },
        {
          id: 'x.b1.l20.16',
          kind: 'dialogue',
          lines: [
            { who: 'Kollegin', text: 'Hast du die E-Mail von Herrn Braun schon beantwortet?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Nein, ich hatte noch keine Zeit, sie zu lesen.',
            'Nein, ich hatte noch keine Zeit, sie lesen.',
            'Nein, ich hatte noch keine Zeit, zu sie lesen.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['infinitiv'],
          explain:
            'keine Zeit haben is followed by zu + infinitive. zu belongs right in front of lesen at the end; the pronoun sie (= die E-Mail) comes before it.',
        },
        {
          id: 'x.b1.l20.17',
          kind: 'correct',
          wrong: 'Ich rufe Sie an, um zu Ihnen den Termin bestätigen.',
          answer: 'Ich rufe Sie an, um Ihnen den Termin zu bestätigen.',
          skill: 'grammar',
          difficulty: 3,
          tags: ['infinitiv'],
          explain:
            'In um … zu, the zu never wanders: it stays glued to the infinitive at the very end. Ihnen is a plain dative here — "to you" — and needs no zu of its own.',
        },
        {
          id: 'x.b1.l20.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Thank you for your quick answer.',
          answer: 'Vielen Dank für Ihre schnelle Antwort.',
          accept: [
            'Danke für Ihre schnelle Antwort.',
            'Vielen Dank für Ihre schnelle Rückmeldung.',
            'Herzlichen Dank für Ihre schnelle Antwort.',
          ],
          skill: 'writing',
          difficulty: 2,
          tags: ['formell'],
          explain:
            'Thanks take für + accusative. die Antwort is feminine, so Ihre schnelle Antwort — and Ihre with a capital I keeps it in the Sie register.',
        },
        {
          id: 'x.b1.l20.19',
          kind: 'speak',
          prompt: 'Say in German: Please find the contract attached.',
          answer: 'Im Anhang finden Sie den Vertrag.',
          skill: 'conversation',
          difficulty: 2,
          tags: ['formell'],
          explain:
            'German has no word-for-word "please find attached": the fixed line is Im Anhang finden Sie … — "in the attachment you find …". Learn it as one block.',
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
