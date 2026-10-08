/**
 * A2 · L13 — Work and the office / Arbeit und Büro
 *
 * The lesson where the learner stops listing facts and starts giving reasons.
 * Everything you need to survive a German working day — Kollegen, Abteilungen,
 * Besprechungen, Fristen, Überstunden — plus the three conjunctions that carry
 * every office explanation: weil (a reason), dass (what someone said), wenn
 * (a condition). All three send the conjugated verb to the very end.
 *
 * Exercise ids run x.a2.l13.1 … x.a2.l13.20 here; the reading owns 21-25 and
 * the listening 26-29.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a2.l13',
  moduleId: 'a2.worklife',
  level: 'A2',
  order: 13,
  title: 'Work and the office',
  titleDe: 'Arbeit und Büro',
  icon: '🏢',
  summary:
    'Talk about your job the way German colleagues do: who is in which department, who is responsible for what, and — with weil, dass and wenn — why a task is late and when it will really be done.',
  minutes: 18,
  objectives: [
    'Say what you are working on and who is responsible for what',
    'Explain with weil why something is late, and report with dass what someone said',
    'Agree a new deadline and promise to get in touch: Ich sage dir Bescheid, wenn …',
    'Understand a short internal email and a colleague call about a delay',
  ],
  vocabIds: [
    'v.a2.l13.kollege',
    'v.a2.l13.kollegin',
    'v.a2.l13.abteilung',
    'v.a2.l13.besprechung',
    'v.a2.l13.homeoffice',
    'v.a2.l13.aufgabe',
    'v.a2.l13.auftrag',
    'v.a2.l13.frist',
    'v.a2.l13.feierabend',
    'v.a2.l13.ueberstunden',
    'v.a2.l13.vertrag',
    'v.a2.l13.gehalt',
    'v.a2.l13.urlaubsantrag',
    'v.a2.l13.sich-melden',
    'v.a2.l13.erledigen',
    'v.a2.l13.sich-kuemmern',
    'v.a2.l13.bescheid-sagen',
    'v.a2.l13.zustaendig',
  ],
  grammarIds: ['g.a2.nebensatz', 'g.a2.weil-dass-wenn'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'German at work',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can hold your ground in a German office: say what you are working on, explain **why** something is not finished, and agree a new date. Three small words do most of that work — **weil**, **dass** and **wenn** — and each of them pushes the conjugated verb to the **end** of its own clause.',
        },
        {
          kind: 'table',
          head: ['Wort', 'Bedeutung', 'Im Satz'],
          rows: [
            ['die Frist', 'deadline', 'Die Frist für den Bericht ist am Freitag.'],
            ['die Besprechung', 'meeting', 'Die Besprechung dauert nur eine halbe Stunde.'],
            ['erledigen', 'to get done', 'Ich erledige das noch vor dem Feierabend.'],
            ['sich kümmern um', 'to take care of', 'Ich kümmere mich um den Auftrag.'],
            ['Bescheid sagen', 'to let someone know', 'Ich sage dir morgen Bescheid.'],
            ['zuständig sein für', 'to be in charge of', 'Wer ist für die Verträge zuständig?'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Ich schaffe den Bericht nicht, weil die Zahlen noch fehlen.',
              en: 'I will not manage the report because the figures are still missing.',
              note: 'weil gives the reason, and fehlen closes the clause.',
            },
            {
              de: 'Meine Chefin sagt, dass wir die Frist verschieben können.',
              en: 'My boss says that we can move the deadline.',
              note: 'With a modal the modal itself goes last: … verschieben können.',
            },
            {
              de: 'Wenn ich Feierabend habe, melde ich mich bei dir.',
              en: 'When I finish work, I will get in touch with you.',
              note: 'The wenn-clause fills position 1, so melde comes straight after the comma.',
            },
            {
              de: 'Für die neuen Aufträge ist meine Kollegin zuständig.',
              en: 'My colleague is in charge of the new orders.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Office German runs on fixed chunks: *eine Frist einhalten*, *einen Termin verschieben*, *Bescheid sagen*, *sich um etwas kümmern*. Learn the whole chunk — the single word on its own is almost useless.',
        },
        {
          kind: 'warn',
          text: 'The preposition belongs to the verb and never changes: *sich kümmern **um*** + Accusative, *zuständig sein **für*** + Accusative, *sich melden **bei*** + Dative. There is no *kümmern für*.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a2.l13.kollege',
        'v.a2.l13.kollegin',
        'v.a2.l13.abteilung',
        'v.a2.l13.besprechung',
        'v.a2.l13.homeoffice',
        'v.a2.l13.aufgabe',
        'v.a2.l13.auftrag',
        'v.a2.l13.frist',
        'v.a2.l13.feierabend',
        'v.a2.l13.ueberstunden',
        'v.a2.l13.vertrag',
        'v.a2.l13.gehalt',
        'v.a2.l13.urlaubsantrag',
        'v.a2.l13.sich-melden',
        'v.a2.l13.erledigen',
        'v.a2.l13.sich-kuemmern',
        'v.a2.l13.bescheid-sagen',
        'v.a2.l13.zustaendig',
      ],
    },

    /* ── 3. Grammar: the Nebensatz ──────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Subordinate clauses',
      grammarId: 'g.a2.nebensatz',
    },

    /* ── 4. Grammar: weil, dass, wenn ───────────────────────────────────── */
    {
      type: 'grammar',
      title: 'weil, dass, wenn',
      grammarId: 'g.a2.weil-dass-wenn',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a2.l13.1',
          kind: 'blank',
          sentence: 'Ich komme heute später ins Büro, ___ mein Zug Verspätung hat.',
          options: ['weil', 'denn', 'dass', 'wenn'],
          answer: 'weil',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['nebensatz'],
          explain:
            'The verb hat is already sitting at the end of the clause, and only a subordinating conjunction does that. denn would need normal order: denn mein Zug hat Verspätung.',
        },
        {
          id: 'x.a2.l13.2',
          kind: 'article',
          noun: 'Abteilung',
          answer: 'die',
          plural: 'die Abteilungen',
          meaning: 'department',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Every noun ending in -ung is feminine and forms its plural with -en: die Abteilung → die Abteilungen. The same rule gives you die Besprechung and die Rechnung.',
        },
        {
          id: 'x.a2.l13.3',
          kind: 'match',
          pairs: [
            ['die Frist', 'deadline'],
            ['die Besprechung', 'meeting'],
            ['der Auftrag', 'order from a customer'],
            ['der Feierabend', 'end of the working day'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'These four words appear in almost every German office message — a Frist is the date, a Besprechung is the meeting about it, an Auftrag is the paid job behind it, and Feierabend is when it all stops.',
        },
        {
          id: 'x.a2.l13.4',
          kind: 'blank',
          sentence: 'Meine Chefin sagt, ___ die Besprechung um zehn Uhr beginnt.',
          options: ['dass', 'das', 'weil', 'ob'],
          answer: 'dass',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz'],
          explain:
            'After sagen, glauben and hoffen you report the content with dass (two s). das with one s is an article or a pronoun and can never open a clause like this.',
        },
        {
          id: 'x.a2.l13.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich mache heute Überstunden, weil wir die Frist einhalten müssen.',
            'Ich mache heute Überstunden, weil wir müssen die Frist einhalten.',
            'Ich mache heute Überstunden, weil müssen wir die Frist einhalten.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz', 'modalverben'],
          explain:
            'In a weil-clause the conjugated verb goes last of all — and with a modal that is the modal itself, so it lands behind the infinitive: … einhalten müssen.',
        },
        {
          id: 'x.a2.l13.6',
          kind: 'conjugate',
          verb: 'sich kümmern',
          person: 'du',
          answer: 'kümmerst dich',
          skill: 'verbs',
          difficulty: 2,
          tags: ['reflexiv'],
          hint: 'Two pieces: the verb and its reflexive pronoun.',
          explain:
            'Reflexive verbs carry a pronoun that changes with the person: ich kümmere mich, du kümmerst dich, er kümmert sich. Drop the pronoun and the sentence is simply wrong.',
        },
        {
          id: 'x.a2.l13.7',
          kind: 'correct',
          wrong: 'Ich kann die Aufgabe heute nicht erledigen, weil ich bin krank.',
          answer: 'Ich kann die Aufgabe heute nicht erledigen, weil ich krank bin.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz'],
          explain:
            'weil is subordinating, so the clause keeps its normal word order but the conjugated verb bin slides right to the end, behind krank.',
        },
        {
          id: 'x.a2.l13.8',
          kind: 'listen',
          audio: 'Ich sage dir Bescheid, wenn der Auftrag fertig ist.',
          question: 'When will the speaker let you know?',
          options: [
            'When the order is finished.',
            'When the meeting starts.',
            'When the deadline has passed.',
          ],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['nebensatz'],
          explain:
            'wenn sets the condition, and the verb ist closes it: wenn der Auftrag fertig ist. Bescheid sagen always takes a Dative person — dir.',
        },
        {
          id: 'x.a2.l13.9',
          kind: 'dialogue',
          lines: [
            { who: 'Kollege', text: 'Wer ist bei euch für die Verträge zuständig?' },
            { who: 'Du', text: '___' },
          ],
          options: [
            'Frau Krüger. Ich sage ihr Bescheid, wenn du eine Frage hast.',
            'Frau Krüger. Ich sage ihr Bescheid, wenn du hast eine Frage.',
            'Frau Krüger. Ich sage ihr Bescheid, wann du eine Frage hast.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 3,
          tags: ['nebensatz'],
          explain:
            'A condition takes wenn, never wann — and after wenn the verb hast has to close the clause instead of standing in second position.',
        },
        {
          id: 'x.a2.l13.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I am working from home today because my child is ill.',
          answer: 'Ich arbeite heute im Homeoffice, weil mein Kind krank ist.',
          accept: ['Heute arbeite ich im Homeoffice, weil mein Kind krank ist.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['nebensatz'],
          hint: 'Working from home is one fixed phrase in German — im Homeoffice.',
          explain:
            'German says im Homeoffice arbeiten, with no article change, and the weil-clause pushes ist to the very end, behind the adjective krank.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a2.l13.11',
          kind: 'order',
          tokens: ['ich', 'melde', 'mich', 'wenn', 'ich', 'mehr', 'weiß'],
          answer: 'Ich melde mich, wenn ich mehr weiß.',
          accept: ['Wenn ich mehr weiß, melde ich mich.'],
          skill: 'wordorder',
          difficulty: 1,
          tags: ['nebensatz', 'reflexiv'],
          explain:
            'The wenn-clause always ends with weiß. If you put it first it becomes position 1, so the main clause has to open with its verb: melde ich mich.',
        },
        {
          id: 'x.a2.l13.12',
          kind: 'order',
          tokens: ['ich', 'schaffe', 'den', 'Bericht', 'nicht', 'weil', 'ich', 'zu', 'viele', 'Aufgaben', 'habe'],
          answer: 'Ich schaffe den Bericht nicht, weil ich zu viele Aufgaben habe.',
          accept: ['Weil ich zu viele Aufgaben habe, schaffe ich den Bericht nicht.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz'],
          explain:
            'Whichever half comes first, each keeps its own rule: habe closes the weil-clause, and schaffe stays the second element of the main clause.',
        },
        {
          id: 'x.a2.l13.13',
          kind: 'order',
          tokens: ['sagen', 'Sie', 'mir', 'bitte', 'Bescheid', 'wenn', 'der', 'Auftrag', 'fertig', 'ist'],
          answer: 'Sagen Sie mir bitte Bescheid, wenn der Auftrag fertig ist.',
          accept: ['Wenn der Auftrag fertig ist, sagen Sie mir bitte Bescheid.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz', 'imperativ'],
          explain:
            'In the Sie imperative the verb comes first and Sie right after it; the wenn-clause hangs on behind, with ist at its end.',
        },
        {
          id: 'x.a2.l13.14',
          kind: 'order',
          tokens: ['ich', 'möchte', 'mit', 'Ihnen', 'sprechen', 'weil', 'ich', 'die', 'Frist', 'nicht', 'einhalten', 'kann'],
          answer: 'Ich möchte mit Ihnen sprechen, weil ich die Frist nicht einhalten kann.',
          accept: ['Weil ich die Frist nicht einhalten kann, möchte ich mit Ihnen sprechen.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['nebensatz', 'modalverben'],
          hint: 'Two modal verbs, two different jobs — möchte stays in the main clause, kann closes the weil-clause.',
          explain:
            'The main clause keeps möchte in position 2 with sprechen at its end; inside the weil-clause the modal kann is the conjugated verb, so it comes after the infinitive einhalten.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: an email about a delay',
      readingId: 'r.a2.l13.projekt-verzoegerung',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: who does what before Thursday',
      listeningId: 'h.a2.l13.wer-macht-was',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: ask for a new deadline',
      conversationId: 'c.a2.l13.frist-verschieben',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a2.l13.15',
          kind: 'article',
          noun: 'Gehalt',
          answer: 'das',
          plural: 'die Gehälter',
          meaning: 'salary',
          skill: 'articles',
          difficulty: 1,
          explain:
            'das Gehalt is neuter and takes an umlaut plus -er in the plural: die Gehälter — the same pattern as das Haus → die Häuser.',
        },
        {
          id: 'x.a2.l13.16',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Wenn ich Feierabend habe, rufe ich dich an.',
            'Wenn ich Feierabend habe, ich rufe dich an.',
            'Wenn habe ich Feierabend, rufe ich dich an.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz'],
          explain:
            'The whole wenn-clause counts as position 1, so the main clause must start with its conjugated verb: rufe ich. And inside the clause habe still comes last.',
        },
        {
          id: 'x.a2.l13.17',
          kind: 'blank',
          sentence: 'Für die neuen Verträge ___ meine Kollegin zuständig.',
          options: ['ist', 'hat', 'wird', 'sind'],
          answer: 'ist',
          skill: 'grammar',
          difficulty: 2,
          explain:
            'zuständig is an adjective, so it needs sein, not haben — and the subject is meine Kollegin (singular), which gives ist.',
        },
        {
          id: 'x.a2.l13.18',
          kind: 'correct',
          wrong: 'Ich glaube, dass er kann heute nicht zur Besprechung kommen.',
          answer: 'Ich glaube, dass er heute nicht zur Besprechung kommen kann.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['nebensatz', 'modalverben'],
          explain:
            'dass is subordinating, so the modal kann may not sit in second position — it is the conjugated verb and therefore closes the clause, behind the infinitive kommen.',
        },
        {
          id: 'x.a2.l13.19',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'My colleague says that she is taking care of the order.',
          answer: 'Meine Kollegin sagt, dass sie sich um den Auftrag kümmert.',
          skill: 'writing',
          difficulty: 3,
          tags: ['nebensatz', 'reflexiv'],
          hint: 'The reflexive pronoun stays near the front of the clause; only the verb moves.',
          explain:
            'dass sends kümmert to the end, but the reflexive sich stays right behind the subject — German moves the verb, never its pronoun.',
        },
        {
          id: 'x.a2.l13.20',
          kind: 'speak',
          prompt: 'Say in German: I am doing overtime today because we have a deadline on Friday.',
          answer: 'Ich mache heute Überstunden, weil wir am Freitag eine Frist haben.',
          accept: ['Heute mache ich Überstunden, weil wir am Freitag eine Frist haben.'],
          skill: 'conversation',
          difficulty: 3,
          tags: ['nebensatz'],
          explain:
            'Germans say Überstunden machen, and the weil-clause needs a small pause before it — the listener hears the reason coming and waits for haben at the end.',
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
