/**
 * A2 · L14 — Housing and renting / Wohnen und mieten
 *
 * The lesson where the two-way prepositions finally have something concrete to
 * describe: a flat you move into (Akkusativ) and live in (Dativ). Around that
 * sits the paperwork every tenant in Germany meets — Mietvertrag, Kaution,
 * Nebenkosten, Warmmiete — and the four verbs of a tenancy: einziehen,
 * ausziehen, kündigen, reparieren.
 *
 * Exercise ids run x.a2.l14.1 … x.a2.l14.13 here; the reading owns 14-18,
 * the listening 19-22 and the quiz 23-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a2.l14',
  moduleId: 'a2.worklife',
  level: 'A2',
  order: 14,
  title: 'Housing and renting',
  titleDe: 'Wohnen und mieten',
  icon: '🔑',
  summary:
    'Read a German flat advert, ask a landlord about rent, extra costs and the deposit, report a fault to the caretaker — and keep the case straight between where you are going and where you are.',
  minutes: 18,
  objectives: [
    'Read a flat advert and work out what the flat really costs each month',
    'Ask a landlord about the Miete, the Nebenkosten, the Kaution and the moving-in date',
    'Report damage and agree a repair appointment with the caretaker',
    'Say where something is (Dativ) and where you are putting it (Akkusativ)',
  ],
  vocabIds: [
    'v.a2.l14.vermieter',
    'v.a2.l14.mieter',
    'v.a2.l14.hausmeister',
    'v.a2.l14.mietvertrag',
    'v.a2.l14.kaution',
    'v.a2.l14.nebenkosten',
    'v.a2.l14.warmmiete',
    'v.a2.l14.quadratmeter',
    'v.a2.l14.stock',
    'v.a2.l14.aufzug',
    'v.a2.l14.heizung',
    'v.a2.l14.besichtigung',
    'v.a2.l14.schaden',
    'v.a2.l14.moebliert',
    'v.a2.l14.einziehen',
    'v.a2.l14.ausziehen',
    'v.a2.l14.kuendigen',
    'v.a2.l14.reparieren',
  ],
  grammarIds: ['g.a2.wechselpraepositionen', 'g.a2.akk-dat'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Flat-hunting in German',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can read a German flat advert, ask a landlord the four questions that decide everything — **Miete, Nebenkosten, Kaution, Einzugstermin** — and tell the caretaker what is broken and where it is.',
        },
        {
          kind: 'table',
          head: ['Im Inserat', 'Was es heißt', 'Beispiel'],
          rows: [
            ['Kaltmiete', 'the rent on its own', '690 Euro'],
            ['Nebenkosten', 'heating, water, rubbish, caretaker', '180 Euro'],
            ['Warmmiete', 'Kaltmiete + Nebenkosten — the real cost', '870 Euro'],
            ['Kaution', 'deposit, paid once, given back later', '2 Kaltmieten'],
            ['möbliert / 3. Stock / Aufzug', 'furnished / third floor / lift', 'frei ab März'],
          ],
        },
        {
          kind: 'text',
          text: 'The flat is also where the **two-way prepositions** stop being abstract. Ask **Wohin?** (movement) → Akkusativ. Ask **Wo?** (position) → Dativ. Same preposition, two cases.',
        },
        {
          kind: 'table',
          head: ['Frage', 'Kasus', 'In der Wohnung'],
          rows: [
            ['Wohin? — Bewegung', 'Akkusativ', 'Wir ziehen in die Wohnung ein.'],
            ['Wo? — Position', 'Dativ', 'Wir wohnen in der Wohnung.'],
            ['Wohin? — Bewegung', 'Akkusativ', 'Ich hänge die Lampe über den Tisch.'],
            ['Wo? — Position', 'Dativ', 'Die Lampe hängt über dem Tisch.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Die Kaution beträgt zwei Kaltmieten.',
              en: 'The deposit is two months of basic rent.',
              note: 'betragen = to come to. Landlords and adverts use it for every amount.',
            },
            {
              de: 'Ich möchte am ersten März in die Wohnung einziehen.',
              en: 'I would like to move into the flat on the first of March.',
              note: 'Moving in is movement, so in takes the accusative: in die Wohnung.',
            },
            {
              de: 'Wir wohnen im dritten Stock, aber es gibt einen Aufzug.',
              en: 'We live on the third floor, but there is a lift.',
              note: 'im = in dem — a position, so dative.',
            },
            {
              de: 'Ich habe den Schaden gestern dem Hausmeister gemeldet.',
              en: 'I reported the damage to the caretaker yesterday.',
              note: 'Two objects: the thing is accusative, the person who gets the news is dative.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Two questions settle almost every case in this lesson. **Wohin?** → Akkusativ (*in die Wohnung ziehen*). **Wo?** → Dativ (*in der Wohnung wohnen*). And with *geben, zeigen, melden, schicken*: the **thing** is accusative, the **person** is dative.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a2.l14.vermieter',
        'v.a2.l14.mieter',
        'v.a2.l14.hausmeister',
        'v.a2.l14.mietvertrag',
        'v.a2.l14.kaution',
        'v.a2.l14.nebenkosten',
        'v.a2.l14.warmmiete',
        'v.a2.l14.quadratmeter',
        'v.a2.l14.stock',
        'v.a2.l14.aufzug',
        'v.a2.l14.heizung',
        'v.a2.l14.besichtigung',
        'v.a2.l14.schaden',
        'v.a2.l14.moebliert',
        'v.a2.l14.einziehen',
        'v.a2.l14.ausziehen',
        'v.a2.l14.kuendigen',
        'v.a2.l14.reparieren',
      ],
    },

    /* ── 3. Grammar: two-way prepositions ───────────────────────────────── */
    {
      type: 'grammar',
      title: 'Wohin? or Wo? — the two-way prepositions',
      grammarId: 'g.a2.wechselpraepositionen',
    },

    /* ── 4. Grammar: accusative vs dative ───────────────────────────────── */
    {
      type: 'grammar',
      title: 'The thing and the person — Akkusativ or Dativ',
      grammarId: 'g.a2.akk-dat',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a2.l14.1',
          kind: 'article',
          noun: 'Kaution',
          answer: 'die',
          plural: 'die Kautionen',
          meaning: 'deposit',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Nouns ending in -ion are always feminine and always build the plural with -en: die Kaution → die Kautionen. The same endings do the same job in die Region, die Information, die Wohnsituation.',
        },
        {
          id: 'x.a2.l14.2',
          kind: 'match',
          pairs: [
            ['der Vermieter', 'the landlord'],
            ['der Mieter', 'the tenant'],
            ['der Hausmeister', 'the caretaker'],
            ['die Kaution', 'the deposit'],
            ['die Nebenkosten', 'the extra costs'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'Vermieter and Mieter differ by one prefix: ver- gives the flat away, so the Vermieter is the owner and the Mieter pays him. All three people are masculine -er nouns and never change in the plural.',
        },
        {
          id: 'x.a2.l14.3',
          kind: 'blank',
          sentence: 'Der Hausmeister repariert morgen ___ Heizung.',
          options: ['die', 'der', 'dem', 'den'],
          answer: 'die',
          skill: 'cases',
          difficulty: 1,
          tags: ['akkusativ'],
          explain:
            'reparieren takes a straightforward accusative object, and feminine nouns look identical in nominative and accusative: die Heizung stays die Heizung.',
        },
        {
          id: 'x.a2.l14.4',
          kind: 'blank',
          sentence: 'Wir ziehen am ersten Juli in ___ Wohnung ein.',
          options: ['die', 'der', 'dem', 'das'],
          answer: 'die',
          skill: 'prepositions',
          difficulty: 2,
          tags: ['wechselpraepositionen', 'akkusativ'],
          hint: 'Wohin ziehen wir?',
          explain:
            'einziehen is a movement — it answers Wohin? — so in takes the accusative. Compare the position: Wir wohnen in der Wohnung.',
        },
        {
          id: 'x.a2.l14.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Der Mietvertrag liegt auf dem Tisch.',
            'Der Mietvertrag liegt auf den Tisch.',
            'Der Mietvertrag liegt auf der Tisch.',
          ],
          answer: 0,
          skill: 'prepositions',
          difficulty: 2,
          tags: ['wechselpraepositionen', 'dativ'],
          explain:
            'liegen describes where something already is — Wo? — so auf takes the dative: der Tisch → dem Tisch. You would only need auf den Tisch with legen, which moves it there.',
        },
        {
          id: 'x.a2.l14.6',
          kind: 'correct',
          wrong: 'Bitte melden Sie den Schaden den Hausmeister.',
          answer: 'Bitte melden Sie den Schaden dem Hausmeister.',
          skill: 'cases',
          difficulty: 2,
          tags: ['dativ', 'akkusativ'],
          explain:
            'melden has two objects: the damage is the thing you report (accusative, den Schaden) and the caretaker is the person who receives the news (dative, dem Hausmeister).',
        },
        {
          id: 'x.a2.l14.7',
          kind: 'conjugate',
          verb: 'ausziehen',
          person: 'du',
          answer: 'ziehst aus',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar'],
          hint: 'Two pieces: the conjugated verb, then the prefix.',
          explain:
            'ausziehen is separable, so only ziehen is conjugated (du ziehst) and the prefix aus breaks off to the end of the sentence: Du ziehst im Juni aus.',
        },
        {
          id: 'x.a2.l14.8',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'How much is the deposit?',
          answer: 'Wie hoch ist die Kaution?',
          accept: ['Wie viel beträgt die Kaution?'],
          skill: 'writing',
          difficulty: 3,
          tags: ['akkusativ'],
          explain:
            'German asks about sums with wie hoch, literally "how high" — the same question works for die Miete, die Nebenkosten and das Gehalt. wie hoch ist takes a singular noun, so die Kaution keeps ist.',
        },
        {
          id: 'x.a2.l14.9',
          kind: 'listen',
          audio: 'Die Warmmiete beträgt 870 Euro im Monat. Die Nebenkosten sind schon dabei.',
          question: 'What do you actually pay each month?',
          options: ['870 euros', '690 euros', '1050 euros'],
          answer: 0,
          skill: 'listening',
          difficulty: 3,
          explain:
            'Warmmiete already contains the Nebenkosten, so nothing is added on top. Only the Kaltmiete would leave you with a second bill each month.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a2.l14.10',
          kind: 'order',
          tokens: ['die', 'Heizung', 'ist', 'seit', 'Montag', 'kaputt'],
          answer: 'Die Heizung ist seit Montag kaputt.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['dativ'],
          explain:
            'seit always takes the dative, and with bare days of the week you see no ending at all — which is exactly why the phrase is worth learning as a chunk: seit Montag, seit Samstag.',
        },
        {
          id: 'x.a2.l14.11',
          kind: 'order',
          tokens: ['wir', 'ziehen', 'am', 'ersten', 'April', 'in', 'die', 'Wohnung', 'ein'],
          answer: 'Wir ziehen am ersten April in die Wohnung ein.',
          accept: ['Am ersten April ziehen wir in die Wohnung ein.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['trennbar', 'wechselpraepositionen', 'akkusativ'],
          explain:
            'Two frames at once: the prefix ein closes the sentence, and because moving in is a movement, in takes the accusative die Wohnung.',
        },
        {
          id: 'x.a2.l14.12',
          kind: 'order',
          tokens: ['ich', 'habe', 'dem', 'Vermieter', 'den', 'Mietvertrag', 'geschickt'],
          answer: 'Ich habe dem Vermieter den Mietvertrag geschickt.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['dativ', 'akkusativ', 'perfekt'],
          explain:
            'When both objects are nouns, the receiver comes first: dative dem Vermieter, then accusative den Mietvertrag — and the participle geschickt closes the Perfekt frame.',
        },
        {
          id: 'x.a2.l14.13',
          kind: 'order',
          tokens: ['die', 'Waschmaschine', 'steht', 'im', 'Keller', 'neben', 'der', 'Heizung'],
          answer: 'Die Waschmaschine steht im Keller neben der Heizung.',
          skill: 'wordorder',
          difficulty: 3,
          tags: ['wechselpraepositionen', 'dativ'],
          hint: 'Nothing is moving here — so both prepositions point the same way.',
          explain:
            'stehen describes a position, so both prepositions answer Wo? and take the dative: in dem → im Keller, and neben der Heizung. With stellen it would flip to in den Keller, neben die Heizung.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: the advert and the viewing',
      readingId: 'r.a2.l14.wohnungsanzeige',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: the heating is cold',
      listeningId: 'h.a2.l14.heizung-kaputt',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: viewing a flat',
      conversationId: 'c.a2.l14.besichtigung',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a2.l14.23',
          kind: 'article',
          noun: 'Mietvertrag',
          answer: 'der',
          plural: 'die Mietverträge',
          meaning: 'rental contract',
          skill: 'articles',
          difficulty: 1,
          explain:
            'A compound noun always takes the gender of its last part: der Vertrag → der Mietvertrag. The plural follows the same last part: Verträge → Mietverträge.',
        },
        {
          id: 'x.a2.l14.24',
          kind: 'speak',
          prompt: 'Ask the landlord: How much are the extra costs?',
          answer: 'Wie hoch sind die Nebenkosten?',
          accept: ['Wie hoch sind denn die Nebenkosten?'],
          skill: 'conversation',
          difficulty: 1,
          tags: ['akkusativ'],
          explain:
            'Nebenkosten exists only in the plural, so the verb has to be sind, never ist — and German asks about amounts with wie hoch.',
        },
        {
          id: 'x.a2.l14.25',
          kind: 'blank',
          sentence: 'Der Schlüssel hängt neben ___ Tür.',
          options: ['der', 'die', 'dem', 'den'],
          answer: 'der',
          skill: 'prepositions',
          difficulty: 2,
          tags: ['wechselpraepositionen', 'dativ'],
          explain:
            'hängen without an object says where something already hangs — Wo? — so neben takes the dative, and feminine die Tür becomes der Tür.',
        },
        {
          id: 'x.a2.l14.26',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich gebe dem Hausmeister den Schlüssel.',
            'Ich gebe den Hausmeister den Schlüssel.',
            'Ich gebe dem Hausmeister dem Schlüssel.',
          ],
          answer: 0,
          skill: 'cases',
          difficulty: 2,
          tags: ['dativ', 'akkusativ'],
          explain:
            'geben needs one of each: the person who receives is dative (dem Hausmeister) and the thing handed over is accusative (den Schlüssel). Two datives or two accusatives are always wrong.',
        },
        {
          id: 'x.a2.l14.27',
          kind: 'dialogue',
          lines: [
            { who: 'Mieterin', text: 'Wohin soll ich die Möbel stellen?' },
            { who: 'Hausmeister', text: 'Stellen Sie sie bitte ___.' },
          ],
          options: ['in den Keller', 'in dem Keller', 'in der Keller'],
          answer: 0,
          skill: 'prepositions',
          difficulty: 2,
          tags: ['wechselpraepositionen', 'akkusativ'],
          explain:
            'The question already says Wohin?, so the answer must be a movement: in takes the accusative and der Keller becomes den Keller. in dem Keller would answer Wo? instead.',
        },
        {
          id: 'x.a2.l14.28',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I have to give notice on the contract three months in advance.',
          answer: 'Ich muss den Vertrag drei Monate vorher kündigen.',
          accept: ['Ich muss den Mietvertrag drei Monate vorher kündigen.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['modalverben', 'akkusativ'],
          hint: 'A modal verb sends the second verb to the very end.',
          explain:
            'With muss the main verb stays an infinitive and closes the sentence, so kündigen comes last — and its object den Vertrag is accusative, because that is the thing you terminate.',
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
