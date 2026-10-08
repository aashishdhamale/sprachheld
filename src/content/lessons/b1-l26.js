/**
 * B1 · L26 — Travel experiences and the future / Reiseerfahrungen und Zukunftspläne
 *
 * The last B1 lesson, and a revision lesson: tell a travel story (Perfekt in
 * speech, Präteritum in writing, Plusquamperfekt for what came before),
 * describe it (adjective endings, relative clauses), and dream about the
 * next trip (Konjunktiv II, Futur I). Every exercise reuses grammar from
 * L19–L25 in a new context.
 *
 * Grammar steps revise g.b1.konjunktiv2 and g.b1.praeteritum.
 *
 * Exercise ids run x.b1.l26.1 … x.b1.l26.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'b1.l26',
  moduleId: 'b1.life',
  level: 'B1',
  order: 26,
  title: 'Travel experiences and the future',
  titleDe: 'Reiseerfahrungen und Zukunftspläne',
  icon: '🧳',
  summary:
    'Bring all of B1 together: tell the story of a trip, describe the people and places you met, and talk about where you would go next — and what you will do.',
  minutes: 22,
  objectives: [
    'Tell a travel story with Perfekt, Präteritum and Plusquamperfekt in the right places',
    'Describe places and people with adjective endings and relative clauses',
    'Talk about dreams with Konjunktiv II and firm plans with Futur I',
    'Use the B1 connectors — als, obwohl, trotzdem, nachdem — in your own story',
  ],
  vocabIds: [
    'v.b1.l26.ausland',
    'v.b1.l26.abenteuer',
    'v.b1.l26.sehenswuerdigkeit',
    'v.b1.l26.landschaft',
    'v.b1.l26.kultur',
    'v.b1.l26.rundreise',
    'v.b1.l26.rucksack',
    'v.b1.l26.traum',
    'v.b1.l26.traeumen',
    'v.b1.l26.entdecken',
    'v.b1.l26.verstaendigen',
    'v.b1.l26.gewoehnen',
    'v.b1.l26.vermissen',
    'v.b1.l26.fremd',
    'v.b1.l26.beeindruckend',
    'v.b1.l26.unvergesslich',
    'v.b1.l26.spontan',
  ],
  grammarIds: ['g.b1.konjunktiv2', 'g.b1.praeteritum'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Past trips, future dreams',
      blocks: [
        {
          kind: 'text',
          text: 'A good travel story uses everything B1 has given you. The **past** in three layers, **descriptions** that pack in detail, and the **future** in two moods — what you *will* do and what you *would* do if you could.',
        },
        {
          kind: 'table',
          head: ['Sie wollen …', 'B1-Werkzeug', 'Beispiel'],
          rows: [
            ['erzählen (mündlich)', 'Perfekt', 'Wir sind durch Portugal gereist.'],
            ['erzählen (schriftlich)', 'Präteritum', 'Wir reisten drei Wochen durch Portugal.'],
            ['was vorher war', 'Plusquamperfekt', 'Wir hatten nichts gebucht.'],
            ['beschreiben', 'Relativsatz', 'das Hotel, in dem wir übernachtet haben'],
            ['träumen', 'Konjunktiv II', 'Ich würde gern einmal nach Japan fliegen.'],
            ['planen', 'Futur I', 'Nächstes Jahr werde ich nach Kanada fliegen.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Als wir in Lissabon ankamen, regnete es — trotzdem war die Stadt wunderschön.',
              en: 'When we arrived in Lisbon it was raining — the city was beautiful all the same.',
            },
            {
              de: 'Am Anfang war alles fremd, aber ich habe mich schnell daran gewöhnt.',
              en: 'At first everything was strange, but I quickly got used to it.',
              note: 'sich gewöhnen an + accusative; daran points back to "everything".',
            },
            {
              de: 'Wenn ich mehr Zeit hätte, würde ich ein Jahr im Ausland leben.',
              en: 'If I had more time, I would live abroad for a year.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Germans love to share travel tips — *Das musst du unbedingt sehen!* — and to ask *Und, wie war’s?* after every holiday. Have a two-minute story ready: where, how, the best moment, one thing that went wrong.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.b1.l26.ausland',
        'v.b1.l26.abenteuer',
        'v.b1.l26.sehenswuerdigkeit',
        'v.b1.l26.landschaft',
        'v.b1.l26.kultur',
        'v.b1.l26.rundreise',
        'v.b1.l26.rucksack',
        'v.b1.l26.traum',
        'v.b1.l26.traeumen',
        'v.b1.l26.entdecken',
        'v.b1.l26.verstaendigen',
        'v.b1.l26.gewoehnen',
        'v.b1.l26.vermissen',
        'v.b1.l26.fremd',
        'v.b1.l26.beeindruckend',
        'v.b1.l26.unvergesslich',
        'v.b1.l26.spontan',
      ],
    },

    /* ── 3. Revision: Konjunktiv II ─────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Revision: Konjunktiv II',
      grammarId: 'g.b1.konjunktiv2',
    },

    /* ── 4. Revision: Präteritum ────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Revision: Präteritum',
      grammarId: 'g.b1.praeteritum',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.b1.l26.1',
          kind: 'blank',
          sentence: 'Wenn ich genug Geld ___, würde ich eine Weltreise machen.',
          options: ['hätte', 'habe', 'hatte', 'würde'],
          answer: 'hätte',
          skill: 'verbs',
          difficulty: 1,
          tags: ['konjunktiv2', 'nebensatz'],
          explain:
            'A dream, not a fact: Konjunktiv II in both halves — hätte in the wenn-clause, würde … machen in the main clause. hatte without the Umlaut is just the past.',
        },
        {
          id: 'x.b1.l26.2',
          kind: 'article',
          noun: 'Sehenswürdigkeit',
          answer: 'die',
          plural: 'die Sehenswürdigkeiten',
          meaning: 'sight, tourist attraction',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Every noun in -keit (and -heit) is feminine, however long it is: die Sehenswürdigkeit, die Möglichkeit, die Gesundheit.',
        },
        {
          id: 'x.b1.l26.3',
          kind: 'blank',
          sentence: 'Im Urlaub ___ wir eine kleine Insel, die nicht im Reiseführer stand.',
          options: ['entdeckten', 'entdecken', 'entdeckt', 'entdeckte'],
          answer: 'entdeckten',
          skill: 'verbs',
          difficulty: 2,
          tags: ['praeteritum', 'relativsatz'],
          explain:
            'The relative clause is in the past (stand), so the story is told in the Präteritum: entdeck + te + n for wir. entdeckte would be ich or er.',
        },
        {
          id: 'x.b1.l26.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich träume von einer Reise nach Japan.',
            'Ich träume an einer Reise nach Japan.',
            'Ich träume über eine Reise nach Japan.',
          ],
          answer: 0,
          skill: 'prepositions',
          difficulty: 1,
          tags: ['praeposition'],
          explain:
            'träumen goes with von + dative, just like erzählen von. "Dream about" pulls English speakers towards über — a classic slip.',
        },
        {
          id: 'x.b1.l26.5',
          kind: 'conjugate',
          verb: 'sich gewöhnen',
          person: 'du',
          answer: 'gewöhnst dich',
          skill: 'verbs',
          difficulty: 2,
          tags: ['reflexiv'],
          explain:
            'A regular verb with the du-ending -st, and the du-reflexive dich: du gewöhnst dich (an + accusative).',
        },
        {
          id: 'x.b1.l26.6',
          kind: 'match',
          pairs: [
            ['das Ausland', 'abroad'],
            ['die Landschaft', 'scenery'],
            ['der Rucksack', 'backpack'],
            ['die Sehenswürdigkeit', 'tourist attraction'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'Four travel words with four different gender clues: Land is neuter, -schaft feminine, Sack masculine, -keit feminine.',
        },
        {
          id: 'x.b1.l26.7',
          kind: 'correct',
          wrong: 'Ich habe mich schnell an das Essen gewöhnen.',
          answer: 'Ich habe mich schnell an das Essen gewöhnt.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt', 'reflexiv'],
          explain:
            'habe … needs a participle at the end: gewöhnt. The infinitive gewöhnen only goes there after a modal or werden.',
        },
        {
          id: 'x.b1.l26.8',
          kind: 'blank',
          sentence: 'Ich vermisste meine Familie sehr, ___ ich jeden Tag mit ihr telefonierte.',
          answer: 'obwohl',
          skill: 'grammar',
          difficulty: 3,
          tags: ['konnektoren', 'nebensatz'],
          hint: 'although',
          explain:
            'The verb telefonierte is at the end, so a subordinating conjunction is needed — and the meaning is a contrast: she called every day and still missed them. That is obwohl.',
        },
        {
          id: 'x.b1.l26.9',
          kind: 'listen',
          audio: 'Das schönste Erlebnis war die Wanderung in den Bergen, obwohl es den ganzen Tag geregnet hat.',
          question: 'What was the best experience?',
          options: ['The hike in the mountains.', 'A day at the beach.', 'A city tour.'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['konnektoren', 'adjektivendungen'],
          explain:
            'das schönste Erlebnis — the superlative — is die Wanderung in den Bergen. The obwohl-clause only adds the rain; it does not change the answer.',
        },
        {
          id: 'x.b1.l26.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I would like to see the Northern Lights one day.',
          answer: 'Ich würde gern einmal das Nordlicht sehen.',
          accept: [
            'Ich möchte einmal das Nordlicht sehen.',
            'Ich würde gern eines Tages das Nordlicht sehen.',
            'Ich möchte eines Tages das Nordlicht sehen.',
            'Ich würde gern einmal die Polarlichter sehen.',
            'Ich würde gern einmal Polarlichter sehen.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['konjunktiv2'],
          hint: 'Northern Lights = das Nordlicht (or die Polarlichter)',
          explain:
            'A wish: würde gern or möchte, with the infinitive sehen at the end. "One day" in a wish is einmal or eines Tages.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.b1.l26.11',
          kind: 'order',
          tokens: ['letztes Jahr', 'sind', 'wir', 'mit dem Rucksack', 'durch Portugal', 'gereist'],
          answer: 'Letztes Jahr sind wir mit dem Rucksack durch Portugal gereist.',
          accept: ['Wir sind letztes Jahr mit dem Rucksack durch Portugal gereist.'],
          skill: 'wordorder',
          difficulty: 1,
          tags: ['perfekt', 'wortstellung'],
          explain:
            'reisen takes sein in the Perfekt. Time – manner – place: letztes Jahr, mit dem Rucksack, durch Portugal — and the participle closes the sentence.',
        },
        {
          id: 'x.b1.l26.12',
          kind: 'order',
          tokens: ['das ist', 'das Hotel', 'in dem', 'wir', 'übernachtet haben'],
          answer: 'Das ist das Hotel, in dem wir übernachtet haben.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['relativsatz'],
          explain:
            'in + dative (where?) and das Hotel is neuter: in dem. The relative clause sends haben to the very end.',
        },
        {
          id: 'x.b1.l26.13',
          kind: 'order',
          tokens: ['wenn', 'ich', 'mehr Zeit', 'hätte', 'würde', 'ich', 'ein Jahr', 'im Ausland', 'leben'],
          answer: 'Wenn ich mehr Zeit hätte, würde ich ein Jahr im Ausland leben.',
          accept: ['Ich würde ein Jahr im Ausland leben, wenn ich mehr Zeit hätte.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['konjunktiv2', 'nebensatz'],
          explain:
            'hätte closes the wenn-clause; würde opens the main clause and leben closes it. Verb, comma, verb — the B1 hinge one last time.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: six months in New Zealand',
      readingId: 'r.b1.l26.neuseeland',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: back from Morocco',
      listeningId: 'h.b1.l26.marokko',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: travel talk at lunch',
      conversationId: 'c.b1.l26.reisegeschichten',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.b1.l26.14',
          kind: 'blank',
          sentence: 'Die Reise war ein ___ Erlebnis.',
          options: ['unvergessliches', 'unvergesslicher', 'unvergessliche', 'unvergesslichen'],
          answer: 'unvergessliches',
          skill: 'grammar',
          difficulty: 2,
          tags: ['adjektivendungen'],
          explain:
            'das Erlebnis is neuter, and ein cannot show that — so the adjective does: ein unvergessliches Erlebnis.',
        },
        {
          id: 'x.b1.l26.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Als wir in Lissabon ankamen, regnete es.',
            'Wenn wir in Lissabon ankamen, regnete es.',
            'Als wir in Lissabon ankamen, es regnete.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz', 'praeteritum'],
          explain:
            'One arrival in the past = als (wenn would mean "every time"). The als-clause is position 1, so regnete comes straight after the comma.',
        },
        {
          id: 'x.b1.l26.16',
          kind: 'dialogue',
          lines: [
            { who: 'Kollege', text: 'Und, wie war dein Urlaub in Vietnam?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Super! Das Essen, das wir dort gegessen haben, war fantastisch.',
            'Super! Das Essen, das wir dort haben gegessen, war fantastisch.',
            'Super! Das Essen, der wir dort gegessen haben, war fantastisch.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['relativsatz'],
          explain:
            'das Essen is neuter, so the relative pronoun is das; inside the clause the verbs go to the end, auxiliary last: gegessen haben.',
        },
        {
          id: 'x.b1.l26.17',
          kind: 'correct',
          wrong: 'Nächstes Jahr ich werde nach Kanada fliegen.',
          answer: 'Nächstes Jahr werde ich nach Kanada fliegen.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['futur', 'wortstellung'],
          explain:
            'Nächstes Jahr is position 1, so werde must be next and ich follows. fliegen waits at the end.',
        },
        {
          id: 'x.b1.l26.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'At first everything was strange, but I got used to it quickly.',
          answer: 'Am Anfang war alles fremd, aber ich habe mich schnell daran gewöhnt.',
          accept: [
            'Am Anfang war alles fremd, aber ich gewöhnte mich schnell daran.',
            'Zuerst war alles fremd, aber ich habe mich schnell daran gewöhnt.',
            'Zuerst war alles fremd, aber ich gewöhnte mich schnell daran.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['reflexiv', 'praeposition'],
          hint: 'to get used to it = sich daran gewöhnen',
          explain:
            'sich gewöhnen an + accusative; "to it" becomes daran. aber does not change the word order, so the second clause keeps habe in position 2.',
        },
        {
          id: 'x.b1.l26.19',
          kind: 'speak',
          prompt: 'Say in German: In ten years I will live by the sea.',
          answer: 'In zehn Jahren werde ich am Meer wohnen.',
          accept: ['In zehn Jahren werde ich am Meer leben.'],
          skill: 'conversation',
          difficulty: 2,
          tags: ['futur'],
          explain:
            'A firm prediction about yourself: Futur I. In zehn Jahren is position 1, then werde, then ich; am Meer (an + dem) means by the sea.',
        },
      ],
    },

    /* ── 11. Review ─────────────────────────────────────────────────────── */
    {
      type: 'review',
      title: 'Review',
      count: 4,
    },
  ],
}

export default lesson
