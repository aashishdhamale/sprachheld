/**
 * B1 · L21 — Opinions and discussion / Meinungen und Diskussionen
 *
 * From "Ich finde das gut" to a real discussion: give an opinion with a
 * reason, weigh pros and cons, agree and disagree politely, and talk about
 * what would or could be — An deiner Stelle würde ich …, Wenn ich mehr Zeit
 * hätte, …
 *
 * Grammar: g.b1.nebensatz (dass, ob, weil, wenn — and the inverted main
 * clause after a fronted Nebensatz) and g.b1.konjunktiv2 (würde, hätte,
 * wäre, könnte for advice, wishes and politeness).
 *
 * Exercise ids run x.b1.l21.1 … x.b1.l21.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'b1.l21',
  moduleId: 'b1.debate',
  level: 'B1',
  order: 21,
  title: 'Opinions and discussion',
  titleDe: 'Meinungen und Diskussionen',
  icon: '💬',
  summary:
    'Say what you think and why, weigh pros and cons, agree and disagree without offending — and give advice the German way: An deiner Stelle würde ich …',
  minutes: 20,
  objectives: [
    'Give an opinion with a reason using dass, weil and Meiner Meinung nach',
    'Weigh an idea with Vorteil, Nachteil, allerdings and außerdem',
    'Agree and disagree politely: zustimmen, widersprechen, Das sehe ich anders',
    'Give advice and talk about wishes with würde, hätte, wäre and könnte',
  ],
  vocabIds: [
    'v.b1.l21.meinung',
    'v.b1.l21.grund',
    'v.b1.l21.argument',
    'v.b1.l21.vorteil',
    'v.b1.l21.nachteil',
    'v.b1.l21.kompromiss',
    'v.b1.l21.diskussion',
    'v.b1.l21.meinen',
    'v.b1.l21.zustimmen',
    'v.b1.l21.widersprechen',
    'v.b1.l21.ueberzeugen',
    'v.b1.l21.behaupten',
    'v.b1.l21.vorstellen',
    'v.b1.l21.vermuten',
    'v.b1.l21.wahrscheinlich',
    'v.b1.l21.eigentlich',
    'v.b1.l21.allerdings',
    'v.b1.l21.ausserdem',
  ],
  grammarIds: ['g.b1.nebensatz', 'g.b1.konjunktiv2'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'How Germans argue',
      blocks: [
        {
          kind: 'text',
          text: 'A German discussion is direct but structured: **opinion, reason, example**. Politeness does not come from vague words — it comes from the **Konjunktiv II**: *Ich würde sagen …*, *Wäre es nicht besser, …?*, *Könnten wir …?* It turns a demand into a suggestion.',
        },
        {
          kind: 'table',
          head: ['Sie wollen …', 'Sie sagen …'],
          rows: [
            ['eine Meinung sagen', 'Ich finde / glaube / meine, dass … · Meiner Meinung nach …'],
            ['zustimmen', 'Da stimme ich Ihnen zu. · Das sehe ich genauso.'],
            ['widersprechen', 'Das sehe ich etwas anders. · Da muss ich widersprechen.'],
            ['abwägen', 'Ein Vorteil ist … Allerdings … · Außerdem …'],
            ['einen Rat geben', 'An deiner Stelle würde ich … · Du solltest …'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Meiner Meinung nach ist das Homeoffice ein großer Vorteil.',
              en: 'In my opinion working from home is a big advantage.',
              note: 'Meiner Meinung nach takes position 1, so ist follows at once.',
            },
            {
              de: 'Ich bin der Meinung, dass wir mehr Pausen brauchen.',
              en: 'I am of the opinion that we need more breaks.',
            },
            {
              de: 'Wenn ich mehr Zeit hätte, würde ich öfter Sport machen.',
              en: 'If I had more time, I would do sport more often.',
              note: 'hätte in the wenn-clause, würde … machen in the main clause — and the main clause starts with its verb.',
            },
            {
              de: 'An deiner Stelle würde ich das Angebot annehmen.',
              en: 'If I were you, I would accept the offer.',
            },
          ],
        },
        {
          kind: 'warn',
          text: '*Ich habe recht* means "I am right" — **recht haben**, not "recht sein". And to agree with a person you need the dative: *Ich stimme **dir** zu*, *Ich widerspreche **Ihnen***.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.b1.l21.meinung',
        'v.b1.l21.grund',
        'v.b1.l21.argument',
        'v.b1.l21.vorteil',
        'v.b1.l21.nachteil',
        'v.b1.l21.kompromiss',
        'v.b1.l21.diskussion',
        'v.b1.l21.meinen',
        'v.b1.l21.zustimmen',
        'v.b1.l21.widersprechen',
        'v.b1.l21.ueberzeugen',
        'v.b1.l21.behaupten',
        'v.b1.l21.vorstellen',
        'v.b1.l21.vermuten',
        'v.b1.l21.wahrscheinlich',
        'v.b1.l21.eigentlich',
        'v.b1.l21.allerdings',
        'v.b1.l21.ausserdem',
      ],
    },

    /* ── 3. Grammar: subordinate clauses ────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Subordinate clauses in depth',
      grammarId: 'g.b1.nebensatz',
    },

    /* ── 4. Grammar: Konjunktiv II ──────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Konjunktiv II',
      grammarId: 'g.b1.konjunktiv2',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.b1.l21.1',
          kind: 'blank',
          sentence: 'Ich bin der Meinung, ___ wir mehr Homeoffice brauchen.',
          options: ['dass', 'ob', 'weil', 'wenn'],
          answer: 'dass',
          skill: 'grammar',
          difficulty: 1,
          tags: ['nebensatz'],
          explain:
            'Ich bin der Meinung is followed by the CONTENT of the opinion, and content is introduced by dass. ob is for open yes/no questions, weil for reasons, wenn for conditions.',
        },
        {
          id: 'x.b1.l21.2',
          kind: 'article',
          noun: 'Vorteil',
          answer: 'der',
          plural: 'die Vorteile',
          meaning: 'advantage',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Vorteil is vor + Teil, and der Teil is masculine — the last part of a compound always decides. The same goes for der Nachteil.',
        },
        {
          id: 'x.b1.l21.3',
          kind: 'blank',
          sentence: 'Wenn ich mehr Zeit ___, würde ich öfter Sport machen.',
          options: ['hätte', 'habe', 'hatte', 'hätten'],
          answer: 'hätte',
          skill: 'verbs',
          difficulty: 2,
          tags: ['konjunktiv2', 'nebensatz'],
          explain:
            'An unreal condition needs Konjunktiv II on both sides: hätte in the wenn-clause, würde … machen in the main clause. hatte is plain past and talks about a real situation; hätten is the wir/sie form.',
        },
        {
          id: 'x.b1.l21.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich weiß nicht, ob das eine gute Idee ist.',
            'Ich weiß nicht, ob ist das eine gute Idee.',
            'Ich weiß nicht, ob das ist eine gute Idee.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz'],
          explain:
            'ob introduces an indirect yes/no question, and like every subordinating conjunction it sends the conjugated verb — ist — to the very end.',
        },
        {
          id: 'x.b1.l21.5',
          kind: 'conjugate',
          verb: 'widersprechen',
          person: 'er',
          answer: 'widerspricht',
          skill: 'verbs',
          difficulty: 2,
          explain:
            'sprechen changes e to i in the du and er forms, and wider- is inseparable here, so it simply stays at the front: er widerspricht.',
        },
        {
          id: 'x.b1.l21.6',
          kind: 'match',
          pairs: [
            ['der Vorteil', 'advantage'],
            ['der Nachteil', 'disadvantage'],
            ['der Grund', 'reason'],
            ['das Argument', 'point (in a discussion)'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'The four building blocks of any argument. Note das Argument is always a point you make — a quarrel is der Streit.',
        },
        {
          id: 'x.b1.l21.7',
          kind: 'correct',
          wrong: 'An deiner Stelle ich würde das nicht machen.',
          answer: 'An deiner Stelle würde ich das nicht machen.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['konjunktiv2', 'wortstellung'],
          explain:
            'An deiner Stelle is a phrase in position 1, so würde must come next and ich slips behind it. The infinitive machen stays at the end.',
        },
        {
          id: 'x.b1.l21.8',
          kind: 'blank',
          sentence: 'Das ist ein gutes Argument. Da stimme ich dir ___.',
          answer: 'zu',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar'],
          hint: 'zustimmen',
          explain:
            'zustimmen is separable: stimme in position 2, zu at the end. The person you agree with is in the dative — dir, not dich.',
        },
        {
          id: 'x.b1.l21.9',
          kind: 'listen',
          audio: 'Ich würde gern mitkommen, aber ich muss leider arbeiten.',
          question: 'Is the speaker coming along?',
          options: ['No — they have to work.', 'Yes — they are coming.', 'Maybe — they will decide later.'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['konjunktiv2'],
          explain:
            'würde gern is a wish, not a plan — it describes something that is NOT going to happen. The aber-clause gives the real situation: muss leider arbeiten.',
        },
        {
          id: 'x.b1.l21.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'If I were you, I would accept the offer.',
          answer: 'An deiner Stelle würde ich das Angebot annehmen.',
          accept: [
            'Wenn ich du wäre, würde ich das Angebot annehmen.',
            'Ich an deiner Stelle würde das Angebot annehmen.',
            'An Ihrer Stelle würde ich das Angebot annehmen.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['konjunktiv2'],
          hint: 'German usually says "in your place": an deiner Stelle.',
          explain:
            'German prefers An deiner Stelle … to a literal "if I were you". würde in position 2, annehmen — to accept — whole at the end.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.b1.l21.11',
          kind: 'order',
          tokens: ['ich', 'finde', 'dass', 'wir', 'mehr Pausen', 'brauchen'],
          answer: 'Ich finde, dass wir mehr Pausen brauchen.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['nebensatz'],
          explain:
            'Main clause first — Ich finde — then dass opens the subordinate clause, and its verb brauchen goes last.',
        },
        {
          id: 'x.b1.l21.12',
          kind: 'order',
          tokens: ['wenn', 'ich', 'du', 'wäre', 'würde', 'ich', 'früher', 'anfangen'],
          answer: 'Wenn ich du wäre, würde ich früher anfangen.',
          accept: ['Ich würde früher anfangen, wenn ich du wäre.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['konjunktiv2', 'nebensatz'],
          explain:
            'wäre ends the wenn-clause; the whole clause is then position 1, so the main clause opens with würde. Verb, comma, verb — the German hinge.',
        },
        {
          id: 'x.b1.l21.13',
          kind: 'order',
          tokens: ['weil', 'das Argument', 'mich', 'überzeugt hat', 'habe', 'ich', 'zugestimmt'],
          answer: 'Weil mich das Argument überzeugt hat, habe ich zugestimmt.',
          accept: [
            'Weil das Argument mich überzeugt hat, habe ich zugestimmt.',
            'Ich habe zugestimmt, weil mich das Argument überzeugt hat.',
            'Ich habe zugestimmt, weil das Argument mich überzeugt hat.',
          ],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['nebensatz', 'perfekt'],
          explain:
            'In the weil-clause the Perfekt keeps both parts at the end, auxiliary last: überzeugt hat. The main clause then starts with its own auxiliary, habe. A short pronoun like mich usually comes early in the clause.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: three views on working from home',
      readingId: 'r.b1.l21.homeoffice-meinungen',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: a four-day week?',
      listeningId: 'h.b1.l21.vier-tage-woche',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: a friend asks for advice',
      conversationId: 'c.b1.l21.jobangebot',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.b1.l21.14',
          kind: 'blank',
          sentence: 'Könnten Sie mir bitte ___, wie Sie das meinen?',
          options: ['erklären', 'erklärt', 'zu erklären', 'erklärst'],
          answer: 'erklären',
          skill: 'verbs',
          difficulty: 1,
          tags: ['konjunktiv2'],
          explain:
            'könnten is a modal verb in Konjunktiv II, and modals take a bare infinitive — no zu. The polite question asks someone to clarify what they mean.',
        },
        {
          id: 'x.b1.l21.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Obwohl ich anderer Meinung bin, verstehe ich dein Argument.',
            'Obwohl ich anderer Meinung bin, ich verstehe dein Argument.',
            'Obwohl ich bin anderer Meinung, verstehe ich dein Argument.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz', 'konnektoren'],
          explain:
            'bin goes to the end of the obwohl-clause, and the clause then counts as position 1 — so verstehe comes straight after the comma.',
        },
        {
          id: 'x.b1.l21.16',
          kind: 'dialogue',
          lines: [
            { who: 'Kollege', text: 'Sollen wir die Besprechung auf Freitag verschieben?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Das wäre eine gute Idee, dann hätten wir mehr Zeit.',
            'Das wird eine gute Idee, dann haben wir mehr Zeit gehabt.',
            'Das wäre eine gute Idee, dann hätten wir mehr Zeit gehabt haben.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['konjunktiv2'],
          explain:
            'A suggestion about something that has not happened yet: wäre and hätten, the two most common Konjunktiv II forms, each used on its own — no extra participles.',
        },
        {
          id: 'x.b1.l21.17',
          kind: 'correct',
          wrong: 'Ich weiß nicht, ob kommt er morgen.',
          answer: 'Ich weiß nicht, ob er morgen kommt.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz'],
          explain:
            'An indirect question with ob is a subordinate clause: subject first, verb last — ob er morgen kommt. Only a direct question starts with the verb: Kommt er morgen?',
        },
        {
          id: 'x.b1.l21.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I can imagine that many people work from home.',
          answer: 'Ich kann mir vorstellen, dass viele Leute von zu Hause arbeiten.',
          accept: [
            'Ich kann mir vorstellen, dass viele Menschen von zu Hause arbeiten.',
            'Ich kann mir vorstellen, dass viele Leute im Homeoffice arbeiten.',
            'Ich kann mir vorstellen, dass viele Menschen im Homeoffice arbeiten.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['nebensatz'],
          hint: 'to imagine = sich (Dativ) vorstellen',
          explain:
            'For "imagine" the reflexive pronoun is dative — mir, not mich. vorstellen stays whole at the end after kann, and the dass-clause sends arbeiten last.',
        },
        {
          id: 'x.b1.l21.19',
          kind: 'speak',
          prompt: 'Say in German: In my opinion, that is a good compromise.',
          answer: 'Meiner Meinung nach ist das ein guter Kompromiss.',
          accept: ['Ich finde, das ist ein guter Kompromiss.', 'Meiner Meinung nach ist das ein sehr guter Kompromiss.'],
          skill: 'conversation',
          difficulty: 2,
          tags: ['wortstellung'],
          explain:
            'Meiner Meinung nach fills position 1, so the verb ist comes next. der Kompromiss is masculine, so ein guter Kompromiss.',
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
