/**
 * A2 · L11 — Travel and booking / Reisen und buchen
 *
 * The first A2 lesson: booking a room, reading a confirmation, and telling
 * someone about a trip that is already over. Two grammar pillars carry it —
 * the Perfekt (haben/sein in position 2, participle at the end) and the
 * dative after mit, nach, bei, von, zu, aus.
 *
 * Exercise ids: the lesson owns x.a2.l11.1 … x.a2.l11.19, the reading 20-24
 * and the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a2.l11',
  moduleId: 'a2.moving',
  level: 'A2',
  order: 11,
  title: 'Travel and booking',
  titleDe: 'Reisen und buchen',
  icon: '✈️',
  summary:
    'Book a room on the phone, read a hotel confirmation, and tell a colleague about the trip you took — with the Perfekt for the journey and the dative after mit, nach, von and zu.',
  minutes: 18,
  objectives: [
    'Book and confirm a hotel room: dates, room type, price and breakfast',
    'Talk about a trip you have already made using the Perfekt',
    'Say how you travelled with mit + Dativ: mit dem Zug, mit der Straßenbahn',
    'Understand a booking confirmation and a check-in at reception',
  ],
  vocabIds: [
    'v.a2.l11.reise',
    'v.a2.l11.urlaub',
    'v.a2.l11.hotel',
    'v.a2.l11.unterkunft',
    'v.a2.l11.aufenthalt',
    'v.a2.l11.buchen',
    'v.a2.l11.reservieren',
    'v.a2.l11.buchung',
    'v.a2.l11.einzelzimmer',
    'v.a2.l11.doppelzimmer',
    'v.a2.l11.uebernachtung',
    'v.a2.l11.flug',
    'v.a2.l11.rueckfahrt',
    'v.a2.l11.abfahren',
    'v.a2.l11.koffer',
    'v.a2.l11.packen',
    'v.a2.l11.sich-freuen-auf',
  ],
  grammarIds: ['g.a2.perfekt', 'g.a2.dativ'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Booking it, and talking about it afterwards',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can reserve a room on the phone, read the confirmation email that follows, and tell a colleague about a trip you have **already made**. Two things carry everything: the **Perfekt** for the journey, and the **Dativ** after *mit, nach, bei, von, zu, aus*.',
        },
        {
          kind: 'table',
          head: ['Infinitiv', 'Perfekt', 'Im Satz'],
          rows: [
            ['buchen', 'hat gebucht', 'Ich habe das Hotel online gebucht.'],
            ['reservieren', 'hat reserviert', 'Wir haben ein Doppelzimmer reserviert.'],
            ['packen', 'hat gepackt', 'Ich habe den Koffer gestern gepackt.'],
            ['abfahren', 'ist abgefahren', 'Der Zug ist um acht Uhr abgefahren.'],
            ['ankommen', 'ist angekommen', 'Wir sind am Abend angekommen.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Wir sind mit dem Zug nach Hamburg gefahren.',
              en: 'We went to Hamburg by train.',
              note: 'mit forces the dative (dem Zug), and fahren is movement, so the auxiliary is sein.',
            },
            {
              de: 'Ich habe zwei Übernachtungen im Hotel am Bahnhof gebucht.',
              en: 'I booked two nights at the hotel by the station.',
            },
            {
              de: 'Nach dem Frühstück haben wir die Koffer gepackt.',
              en: 'After breakfast we packed the suitcases.',
              note: 'nach is always dative: nach dem Frühstück, nach der Reise.',
            },
            {
              de: 'Meine Frau freut sich schon auf den Urlaub.',
              en: 'My wife is already looking forward to the holiday.',
              note: 'sich freuen auf points forward and takes the accusative: auf den Urlaub.',
            },
          ],
        },
        {
          kind: 'list',
          items: [
            'mit + Dativ — mit dem Zug, mit dem Auto, mit der Straßenbahn',
            'nach + Dativ — nach dem Frühstück, nach der Reise',
            'bei + Dativ — bei der Buchung, beim Check-in',
            'zu + Dativ — zum Bahnhof (zu dem), zur Rezeption (zu der)',
            'aus + Dativ — aus dem Hotel, aus der Schweiz',
          ],
        },
        {
          kind: 'tip',
          text: 'On a German timetable **ab** means departure and **an** means arrival: *ab München 8.14 – an Hamburg 13.52*. The verbs behind them are *abfahren* and *ankommen*, and both build the Perfekt with **sein**.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a2.l11.reise',
        'v.a2.l11.urlaub',
        'v.a2.l11.hotel',
        'v.a2.l11.unterkunft',
        'v.a2.l11.aufenthalt',
        'v.a2.l11.buchen',
        'v.a2.l11.reservieren',
        'v.a2.l11.buchung',
        'v.a2.l11.einzelzimmer',
        'v.a2.l11.doppelzimmer',
        'v.a2.l11.uebernachtung',
        'v.a2.l11.flug',
        'v.a2.l11.rueckfahrt',
        'v.a2.l11.abfahren',
        'v.a2.l11.koffer',
        'v.a2.l11.packen',
        'v.a2.l11.sich-freuen-auf',
      ],
    },

    /* ── 3. Grammar: the perfect tense ──────────────────────────────────── */
    {
      type: 'grammar',
      title: 'The perfect tense',
      grammarId: 'g.a2.perfekt',
    },

    /* ── 4. Grammar: the dative case ────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'The dative case',
      grammarId: 'g.a2.dativ',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a2.l11.1',
          kind: 'article',
          noun: 'Koffer',
          answer: 'der',
          plural: 'die Koffer',
          meaning: 'suitcase',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Nouns for objects ending in -er are almost always masculine, and that -er is already the plural form: der Koffer → die Koffer. Only the article changes.',
        },
        {
          id: 'x.a2.l11.2',
          kind: 'blank',
          sentence: 'Ich ___ das Hotel schon online gebucht.',
          options: ['habe', 'bin', 'hat', 'ist'],
          answer: 'habe',
          skill: 'verbs',
          difficulty: 1,
          tags: ['perfekt'],
          explain:
            'buchen is an activity, not a movement from A to B, so the Perfekt takes haben — and the auxiliary has to match ich: habe.',
        },
        {
          id: 'x.a2.l11.3',
          kind: 'blank',
          sentence: 'Wir sind mit ___ Zug nach Wien gefahren.',
          options: ['dem', 'den', 'der', 'das'],
          answer: 'dem',
          skill: 'cases',
          difficulty: 2,
          tags: ['dativ'],
          hint: 'Womit seid ihr gefahren?',
          explain:
            'mit always forces the dative, and masculine der becomes dem. This is the fixed way German names transport: mit dem Zug, mit dem Auto, mit der Bahn.',
        },
        {
          id: 'x.a2.l11.4',
          kind: 'match',
          pairs: [
            ['die Buchung', 'the booking'],
            ['die Unterkunft', 'the accommodation'],
            ['die Übernachtung', 'the overnight stay'],
            ['die Rückfahrt', 'the return journey'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'All four are feminine, and you can see why: every noun ending in -ung is feminine, and a compound keeps the gender of its last part — die Fahrt → die Rückfahrt.',
        },
        {
          id: 'x.a2.l11.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich habe ein Einzelzimmer für drei Nächte reserviert.',
            'Ich habe ein Einzelzimmer für drei Nächte gereserviert.',
            'Ich bin ein Einzelzimmer für drei Nächte reserviert.',
          ],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt'],
          explain:
            'Verbs ending in -ieren build the participle without ge-, because the stress sits on -iert: reserviert, telefoniert, funktioniert. And reserving is an activity, so the auxiliary is haben.',
        },
        {
          id: 'x.a2.l11.6',
          kind: 'correct',
          wrong: 'Der Zug ist um acht Uhr abfahren.',
          answer: 'Der Zug ist um acht Uhr abgefahren.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt', 'trennbar'],
          explain:
            'A separable verb hides the ge- inside the word: ab + ge + fahren = abgefahren. The Perfekt never uses the bare infinitive.',
        },
        {
          id: 'x.a2.l11.7',
          kind: 'blank',
          sentence: 'Das Hotel hat ___ sehr gut gefallen.',
          options: ['uns', 'wir', 'unser', 'unsere'],
          answer: 'uns',
          skill: 'cases',
          difficulty: 3,
          tags: ['dativ'],
          hint: 'Wem hat das Hotel gefallen?',
          explain:
            'gefallen turns the English sentence around: the thing you like is the subject (das Hotel), and the person who likes it stands in the dative — wir becomes uns.',
        },
        {
          id: 'x.a2.l11.8',
          kind: 'listen',
          audio: 'Der Zug fährt um zehn nach acht ab und kommt um Viertel vor zwölf an.',
          question: 'What time does the train depart?',
          options: ['8:10', '8:45', '11:45'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['trennbar'],
          explain:
            'zehn nach acht is ten minutes past eight. Viertel vor zwölf (11:45) belongs to kommt … an — the arrival, not the departure.',
        },
        {
          id: 'x.a2.l11.9',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I booked a double room with breakfast for two nights.',
          answer: 'Ich habe ein Doppelzimmer mit Frühstück für zwei Nächte gebucht.',
          accept: ['Ich habe für zwei Nächte ein Doppelzimmer mit Frühstück gebucht.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['perfekt'],
          hint: 'Start with the auxiliary and save the participle for the very end.',
          explain:
            'habe holds position 2 and gebucht the last position. Everything you booked — the room, the breakfast, the length of stay — has to fit inside that bracket.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a2.l11.10',
          kind: 'order',
          tokens: ['ich', 'habe', 'das Hotel', 'online', 'gebucht'],
          answer: 'Ich habe das Hotel online gebucht.',
          accept: ['Online habe ich das Hotel gebucht.'],
          skill: 'wordorder',
          difficulty: 1,
          tags: ['perfekt', 'wortstellung'],
          explain:
            'habe is the second element and the participle gebucht the last word. That bracket is the whole shape of the Perfekt — everything else lives inside it.',
        },
        {
          id: 'x.a2.l11.11',
          kind: 'order',
          tokens: ['wir', 'sind', 'mit dem Zug', 'nach Hamburg', 'gefahren'],
          answer: 'Wir sind mit dem Zug nach Hamburg gefahren.',
          accept: ['Mit dem Zug sind wir nach Hamburg gefahren.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['perfekt', 'dativ'],
          explain:
            'fahren moves you from one place to another, so the auxiliary is sind, not haben. mit forces the dative dem Zug, and gefahren still closes the sentence.',
        },
        {
          id: 'x.a2.l11.12',
          kind: 'order',
          tokens: ['nach dem Frühstück', 'haben', 'wir', 'die Koffer', 'gepackt'],
          answer: 'Nach dem Frühstück haben wir die Koffer gepackt.',
          accept: ['Wir haben nach dem Frühstück die Koffer gepackt.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['perfekt', 'dativ'],
          explain:
            'nach always takes the dative, so it is nach dem Frühstück. When that phrase opens the sentence it fills position 1, so haben comes next and the subject wir moves behind it.',
        },
        {
          id: 'x.a2.l11.13',
          kind: 'order',
          tokens: ['am Freitag', 'ist', 'der Bus', 'um halb sechs', 'vom Bahnhof', 'abgefahren'],
          answer: 'Am Freitag ist der Bus um halb sechs vom Bahnhof abgefahren.',
          accept: ['Der Bus ist am Freitag um halb sechs vom Bahnhof abgefahren.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['perfekt', 'dativ'],
          hint: 'vom is the short form of von dem — and von is a dative preposition.',
          explain:
            'Three things hold at once: ist sits in position 2, the separable participle abgefahren closes the sentence, and von dem contracts to vom because von always takes the dative.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: the confirmation email',
      readingId: 'r.a2.l11.buchungsbestaetigung',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: checking in at the hotel',
      listeningId: 'h.a2.l11.an-der-rezeption',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: book a room by phone',
      conversationId: 'c.a2.l11.zimmer-buchen',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a2.l11.14',
          kind: 'blank',
          sentence: 'Wir ___ am Samstag nach Italien geflogen.',
          options: ['sind', 'haben', 'seid', 'ist'],
          answer: 'sind',
          skill: 'verbs',
          difficulty: 1,
          tags: ['perfekt'],
          explain:
            'fliegen carries you from one place to another, so the Perfekt uses sein — and the auxiliary still has to agree with wir: sind.',
        },
        {
          id: 'x.a2.l11.15',
          kind: 'article',
          noun: 'Unterkunft',
          answer: 'die',
          plural: 'die Unterkünfte',
          meaning: 'accommodation, place to stay',
          skill: 'articles',
          difficulty: 2,
          explain:
            'Every noun ending in -kunft is feminine: die Ankunft, die Auskunft, die Unterkunft. The plural adds an umlaut plus -e: die Unterkünfte.',
        },
        {
          id: 'x.a2.l11.16',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Wir haben dem Hotel eine E-Mail geschrieben.',
            'Wir haben das Hotel eine E-Mail geschrieben.',
            'Wir haben den Hotel eine E-Mail geschrieben.',
          ],
          answer: 0,
          skill: 'cases',
          difficulty: 2,
          tags: ['dativ'],
          explain:
            'schreiben gives something to somebody: the receiver goes into the dative, so das Hotel becomes dem Hotel, while the thing written (eine E-Mail) stays accusative.',
        },
        {
          id: 'x.a2.l11.17',
          kind: 'dialogue',
          lines: [
            { who: 'Rezeption', text: 'Guten Tag! Was kann ich für Sie tun?' },
            { who: 'Du', text: '___' },
          ],
          options: [
            'Ich habe ein Doppelzimmer für zwei Nächte reserviert.',
            'Ich habe ein Doppelzimmer für zwei Nächte reservieren.',
            'Ich bin ein Doppelzimmer für zwei Nächte reserviert.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['perfekt'],
          explain:
            'At check-in you report a booking that already exists, so you need the Perfekt: haben plus the participle reserviert — no ge-, because of the -ieren ending, and never the infinitive.',
        },
        {
          id: 'x.a2.l11.18',
          kind: 'correct',
          wrong: 'Ich habe mit der Zug nach Köln gefahren.',
          answer: 'Ich bin mit dem Zug nach Köln gefahren.',
          skill: 'grammar',
          difficulty: 3,
          tags: ['perfekt', 'dativ'],
          hint: 'Two separate mistakes hide in this sentence.',
          explain:
            'Two fixes at once: fahren is a movement verb and builds the Perfekt with sein, and mit always takes the dative, so der Zug becomes dem Zug.',
        },
        {
          id: 'x.a2.l11.19',
          kind: 'speak',
          prompt: 'Say in German: I am looking forward to the holiday.',
          answer: 'Ich freue mich auf den Urlaub.',
          accept: ['Ich freue mich schon auf den Urlaub.'],
          skill: 'conversation',
          difficulty: 2,
          tags: ['reflexiv'],
          explain:
            'sich freuen keeps its reflexive pronoun right after the verb (freue mich), and the auf here points forward in time, which makes it accusative: auf den Urlaub.',
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
