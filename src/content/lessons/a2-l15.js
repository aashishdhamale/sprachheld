/**
 * A2 · L15 — Banking, offices and phone calls / Bank, Amt und Telefon
 *
 * The German bureaucracy lesson. Three places where you have to open your
 * mouth: the bank counter (Konto, Überweisung, EC-Karte, abheben, überweisen),
 * the Bürgeramt (Formular, Antrag, Ausweis, Anmeldung, Wartenummer, ausfüllen,
 * unterschreiben) and the telephone (Kundenservice, in der Leitung,
 * weiterverbinden, zurückrufen).
 *
 * The grammar is the language these places are actually spoken in: the
 * imperative — every instruction at a counter is one — and the connectors that
 * let you tie a problem to its consequence (deshalb, denn, aber, sondern).
 *
 * Exercise ids run x.a2.l15.1 … x.a2.l15.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a2.l15',
  moduleId: 'a2.admin',
  level: 'A2',
  order: 15,
  title: 'Banking, offices and phone calls',
  titleDe: 'Bank, Amt und Telefon',
  icon: '🏦',
  summary:
    'Transfer money, withdraw cash, fill in a form at the Bürgeramt and survive a phone call to customer service — with the imperative every counter speaks and the connectors that hold your explanation together.',
  minutes: 18,
  objectives: [
    'Do a bank errand: transfer money, withdraw cash, ask about your account',
    'Understand and give counter instructions: Füllen Sie das Formular bitte aus.',
    'Say what you need at the Bürgeramt and what you have brought with you',
    'Get through a service call: explain a problem, ask to be put through, arrange a callback',
  ],
  vocabIds: [
    'v.a2.l15.konto',
    'v.a2.l15.ueberweisung',
    'v.a2.l15.ec-karte',
    'v.a2.l15.kontoauszug',
    'v.a2.l15.abheben',
    'v.a2.l15.ueberweisen',
    'v.a2.l15.formular',
    'v.a2.l15.antrag',
    'v.a2.l15.ausweis',
    'v.a2.l15.anmeldung',
    'v.a2.l15.buergeramt',
    'v.a2.l15.wartenummer',
    'v.a2.l15.ausfuellen',
    'v.a2.l15.unterschreiben',
    'v.a2.l15.kundenservice',
    'v.a2.l15.in-der-leitung',
    'v.a2.l15.weiterverbinden',
    'v.a2.l15.zurueckrufen',
  ],
  grammarIds: ['g.a2.imperativ', 'g.a2.konjunktionen'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Counters, forms and the telephone',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can open your mouth in the three places nobody warns you about: **die Bank**, **das Bürgeramt** and **der Kundenservice am Telefon**. Officials speak to you almost entirely in **imperatives** — and they are being polite, not rude, because German puts *bitte* into the command instead of wrapping it in a question.',
        },
        {
          kind: 'table',
          head: ['Ort', 'Was Sie hören', 'Was es heißt'],
          rows: [
            ['Bank', 'Stecken Sie bitte Ihre EC-Karte ein.', 'Please insert your debit card.'],
            ['Bank', 'Unterschreiben Sie hier unten.', 'Sign at the bottom here.'],
            ['Bürgeramt', 'Ziehen Sie am Eingang eine Wartenummer.', 'Take a queue number at the entrance.'],
            ['Bürgeramt', 'Füllen Sie das Formular bitte zu Hause aus.', 'Please fill in the form at home.'],
            ['Telefon', 'Bleiben Sie bitte in der Leitung.', 'Please stay on the line.'],
            ['Telefon', 'Rufen Sie uns morgen noch einmal an.', 'Call us again tomorrow.'],
          ],
        },
        {
          kind: 'text',
          text: 'The second half of the lesson is the glue: **denn** and **deshalb** tie a problem to its consequence, **aber** contrasts, and **sondern** corrects a *no*. That is how you explain what went wrong instead of listing bare facts.',
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Ich möchte zweihundert Euro abheben, aber der Automat ist kaputt.',
              en: 'I would like to withdraw two hundred euros, but the machine is broken.',
            },
            {
              de: 'Mein Konto ist leer, deshalb überweise ich die Miete erst am Freitag.',
              en: 'My account is empty, so I will not transfer the rent until Friday.',
              note: 'deshalb takes position 1, so the verb überweise follows it immediately.',
            },
            {
              de: 'Ich brauche keinen neuen Ausweis, sondern nur eine Bescheinigung.',
              en: 'I do not need a new ID card, only a certificate.',
              note: 'sondern always follows a negation — after kein or nicht.',
            },
            {
              de: 'Herr Sander ist gerade nicht da. Rufen Sie ihn bitte nach vierzehn Uhr zurück.',
              en: 'Mr Sander is not here at the moment. Please call him back after two p.m.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'At a counter, three fixed sentences carry you a long way: *Ich möchte einen Antrag stellen.* · *Können Sie mir bitte helfen?* · *Entschuldigung, das habe ich nicht verstanden.*',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a2.l15.konto',
        'v.a2.l15.ueberweisung',
        'v.a2.l15.ec-karte',
        'v.a2.l15.kontoauszug',
        'v.a2.l15.abheben',
        'v.a2.l15.ueberweisen',
        'v.a2.l15.formular',
        'v.a2.l15.antrag',
        'v.a2.l15.ausweis',
        'v.a2.l15.anmeldung',
        'v.a2.l15.buergeramt',
        'v.a2.l15.wartenummer',
        'v.a2.l15.ausfuellen',
        'v.a2.l15.unterschreiben',
        'v.a2.l15.kundenservice',
        'v.a2.l15.in-der-leitung',
        'v.a2.l15.weiterverbinden',
        'v.a2.l15.zurueckrufen',
      ],
    },

    /* ── 3. Grammar: the imperative ─────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'The imperative',
      grammarId: 'g.a2.imperativ',
    },

    /* ── 4. Grammar: connecting sentences ───────────────────────────────── */
    {
      type: 'grammar',
      title: 'Connecting sentences',
      grammarId: 'g.a2.konjunktionen',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a2.l15.1',
          kind: 'blank',
          sentence: 'Bitte ___ Sie das Formular hier unten rechts.',
          options: ['unterschreiben', 'unterschreibt', 'unterschreibst', 'unterschrieben'],
          answer: 'unterschreiben',
          skill: 'grammar',
          difficulty: 1,
          tags: ['imperativ'],
          explain:
            'The Sie imperative uses the infinitive form with Sie directly after it. Nothing is added and nothing is cut — that is why it is the easiest of the three imperatives to produce under pressure.',
        },
        {
          id: 'x.a2.l15.2',
          kind: 'article',
          noun: 'Konto',
          answer: 'das',
          plural: 'die Konten',
          meaning: 'bank account',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Loan words ending in -o are neuter in German: das Konto, das Büro, das Auto. The plural is die Konten — the Italian ending survives, so "die Kontos" is wrong.',
        },
        {
          id: 'x.a2.l15.3',
          kind: 'conjugate',
          verb: 'abheben',
          person: 'ich',
          answer: 'hebe ab',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar'],
          hint: 'Two pieces: the conjugated verb, then the prefix.',
          explain:
            'abheben is separable, so only heben is conjugated and the prefix ab moves to the end of the sentence: Ich hebe hundert Euro ab.',
        },
        {
          id: 'x.a2.l15.4',
          kind: 'mcq',
          prompt: 'You tell a friend (du) to call customer service. Which is correct?',
          options: [
            'Ruf bitte den Kundenservice an!',
            'Rufst bitte den Kundenservice an!',
            'Du ruf bitte den Kundenservice an!',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['imperativ', 'trennbar'],
          explain:
            'The du imperative is the bare stem — no -st ending and no pronoun — and the separable prefix an still closes the sentence.',
        },
        {
          id: 'x.a2.l15.5',
          kind: 'blank',
          sentence: 'Mein Konto ist leer, ___ kann ich die Rechnung noch nicht bezahlen.',
          options: ['deshalb', 'trotzdem', 'sondern', 'oder'],
          answer: 'deshalb',
          skill: 'grammar',
          difficulty: 2,
          tags: ['konnektoren'],
          explain:
            'The empty account is the reason and not paying is the result, so you need deshalb (therefore). trotzdem would say the opposite — that you pay anyway. Note that after deshalb the verb kann comes straight away.',
        },
        {
          id: 'x.a2.l15.6',
          kind: 'match',
          pairs: [
            ['in der Leitung bleiben', 'to hold the line'],
            ['weiterverbinden', 'to put a call through'],
            ['zurückrufen', 'to call back'],
            ['einen Antrag stellen', 'to put in an application'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'German fixes each of these to one particular verb: a line is held with bleiben, an application is "put" with stellen — not gemacht. Learn the noun and its verb as one unit.',
        },
        {
          id: 'x.a2.l15.7',
          kind: 'correct',
          wrong: 'Du rufst mich bitte morgen zurück!',
          answer: 'Ruf mich bitte morgen zurück!',
          skill: 'grammar',
          difficulty: 3,
          tags: ['imperativ', 'trennbar'],
          explain:
            'A command to one person drops both the pronoun du and the -st ending, leaving the bare stem ruf. The prefix zurück stays where it was, at the end.',
        },
        {
          id: 'x.a2.l15.8',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Please transfer the money to my account.',
          answer: 'Überweisen Sie das Geld bitte auf mein Konto.',
          accept: ['Bitte überweisen Sie das Geld auf mein Konto.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['imperativ'],
          hint: 'Money goes "onto" an account in German, and the direction makes it accusative.',
          explain:
            'überweisen takes auf + accusative because the money moves somewhere: auf mein Konto, not auf meinem Konto. bitte may stand after the verb phrase or open the whole sentence.',
        },
        {
          id: 'x.a2.l15.9',
          kind: 'listen',
          audio: 'Ziehen Sie bitte eine Wartenummer und warten Sie vor Schalter drei.',
          question: 'Where should you wait?',
          options: ['At counter 3', 'At counter 13', 'At the entrance'],
          answer: 0,
          skill: 'listening',
          difficulty: 3,
          explain:
            'Two Sie imperatives in a row give you two jobs: ziehen (take a number) and warten (wait). The place is the second one — vor Schalter drei. drei and dreizehn differ only in the ending, so listen to the end of the word.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a2.l15.10',
          kind: 'order',
          tokens: ['füllen', 'Sie', 'bitte', 'das', 'Formular', 'aus'],
          answer: 'Füllen Sie bitte das Formular aus.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['imperativ', 'trennbar'],
          explain:
            'In the Sie imperative the verb comes first and Sie right after it — nothing may squeeze between them. The separable prefix aus closes the sentence, as always.',
        },
        {
          id: 'x.a2.l15.11',
          kind: 'order',
          tokens: ['ruf', 'mich', 'bitte', 'morgen', 'Vormittag', 'zurück'],
          answer: 'Ruf mich bitte morgen Vormittag zurück.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['imperativ', 'trennbar'],
          explain:
            'The du imperative opens with the bare stem ruf, the pronoun mich follows immediately, and only then comes the time. The prefix zurück is the last word of the sentence.',
        },
        {
          id: 'x.a2.l15.12',
          kind: 'order',
          tokens: ['ich', 'habe', 'keine', 'EC-Karte', 'sondern', 'nur', 'Bargeld'],
          answer: 'Ich habe keine EC-Karte, sondern nur Bargeld.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['konnektoren'],
          explain:
            'sondern corrects the negation that came before it, so keine has to stand in the first half. After sondern you only repeat what is different — the verb habe is not said again.',
        },
        {
          id: 'x.a2.l15.13',
          kind: 'order',
          tokens: ['der', 'Automat', 'ist', 'kaputt', 'deshalb', 'gehe', 'ich', 'zum', 'Schalter'],
          answer: 'Der Automat ist kaputt, deshalb gehe ich zum Schalter.',
          skill: 'wordorder',
          difficulty: 3,
          tags: ['konnektoren', 'wortstellung'],
          hint: 'deshalb is not a comma-word like und — it occupies a slot in the sentence.',
          explain:
            'deshalb fills position 1 of the second clause, so the verb gehe must come next and the subject ich moves behind it. "deshalb ich gehe" is the single most common mistake with this word.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: a letter from the Bürgeramt',
      readingId: 'r.a2.l15.anmeldung',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: the bank hotline',
      listeningId: 'h.a2.l15.karte-gesperrt',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: call about a wrong invoice',
      conversationId: 'c.a2.l15.falsche-rechnung',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a2.l15.14',
          kind: 'blank',
          sentence: 'Einen Moment bitte, ___ Sie kurz in der Leitung.',
          options: ['bleiben', 'bleibt', 'bleibst', 'geblieben'],
          answer: 'bleiben',
          skill: 'grammar',
          difficulty: 1,
          tags: ['imperativ'],
          explain:
            'Every telephone agent in Germany says this sentence: the Sie imperative is the infinitive plus Sie. bleibt would be the command to a group of friends, bleibst is never an imperative at all.',
        },
        {
          id: 'x.a2.l15.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Der Automat ist kaputt, deshalb hebe ich am Schalter Geld ab.',
            'Der Automat ist kaputt, deshalb ich hebe am Schalter Geld ab.',
            'Der Automat ist kaputt, deshalb ich am Schalter Geld abhebe.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['konnektoren', 'trennbar'],
          explain:
            'After deshalb the conjugated verb comes immediately, so hebe stands second and ich third. The prefix ab still waits at the very end — deshalb does not create a subordinate clause.',
        },
        {
          id: 'x.a2.l15.16',
          kind: 'dialogue',
          lines: [
            { who: 'Kundenservice', text: 'Guten Tag, Kundenservice Nordbank. Was kann ich für Sie tun?' },
            { who: 'Du', text: '___' },
          ],
          options: [
            'Verbinden Sie mich bitte mit der Buchhaltung.',
            'Sie verbinden mich bitte mit der Buchhaltung.',
            'Verbinden bitte mich Sie mit der Buchhaltung.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['imperativ'],
          explain:
            'A polite request on the phone is a Sie imperative: verb first, Sie straight after it, bitte next. The statement form Sie verbinden… sounds like you are telling them what they are doing.',
        },
        {
          id: 'x.a2.l15.17',
          kind: 'correct',
          wrong: 'Ich möchte kein Bargeld, aber eine Überweisung.',
          answer: 'Ich möchte kein Bargeld, sondern eine Überweisung.',
          skill: 'grammar',
          difficulty: 2,
          tags: ['konnektoren'],
          explain:
            'After a negation the correction takes sondern, not aber. aber contrasts two things that are both true; sondern replaces the thing you just rejected.',
        },
        {
          id: 'x.a2.l15.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Please fill in the form at home and sign it at the counter.',
          answer: 'Füllen Sie das Formular bitte zu Hause aus und unterschreiben Sie es am Schalter.',
          accept: ['Bitte füllen Sie das Formular zu Hause aus und unterschreiben Sie es am Schalter.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['imperativ', 'trennbar'],
          hint: 'und joins two commands — and each one needs its own verb + Sie.',
          explain:
            'und changes nothing, so the second half repeats the full imperative: unterschreiben Sie. The prefix aus has to close the first half before und starts the second, and unterschreiben is inseparable, so it stays in one piece.',
        },
        {
          id: 'x.a2.l15.19',
          kind: 'speak',
          prompt: 'Say in German: Please call me back tomorrow.',
          answer: 'Rufen Sie mich bitte morgen zurück.',
          accept: ['Ruf mich bitte morgen zurück.'],
          skill: 'conversation',
          difficulty: 1,
          tags: ['imperativ', 'trennbar'],
          explain:
            'Give the last word zurück a small push — it is the piece that tells your listener you want a call back and not just any call.',
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
