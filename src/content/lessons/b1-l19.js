/**
 * B1 · L19 — Meetings and workplace talk / Besprechungen und Arbeitsalltag
 *
 * The first B1 lesson moves from "I can get through the day at work" to "I
 * can hold my own in a meeting": summarise what happened, say whether the
 * schedule holds, disagree politely, interrupt, agree on a solution and
 * volunteer for the minutes.
 *
 * Grammar: g.b1.satzbau (the sentence bracket — one verb in position 2,
 * everything else at the end) and g.b1.konnektoren (obwohl, trotzdem,
 * während, einerseits … andererseits — same idea, different word order).
 *
 * Exercise ids run x.b1.l19.1 … x.b1.l19.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'b1.l19',
  moduleId: 'b1.work',
  level: 'B1',
  order: 19,
  title: 'Meetings and workplace talk',
  titleDe: 'Besprechungen und Arbeitsalltag',
  icon: '🗂️',
  summary:
    'Take part in a team meeting the way colleagues do: summarise, report on the schedule, weigh pros and cons, interrupt politely and agree on a decision.',
  minutes: 20,
  objectives: [
    'Summarise what has happened and say whether the schedule still holds',
    'Contrast two ideas with obwohl, trotzdem, während and einerseits … andererseits — each with its own word order',
    'Keep the sentence bracket: one verb in position 2, the rest at the very end',
    'Interrupt, agree and volunteer for a task in a meeting',
  ],
  vocabIds: [
    'v.b1.l19.tagesordnung',
    'v.b1.l19.zeitplan',
    'v.b1.l19.budget',
    'v.b1.l19.ziel',
    'v.b1.l19.teilnehmer',
    'v.b1.l19.teilnehmen',
    'v.b1.l19.leiten',
    'v.b1.l19.unterbrechen',
    'v.b1.l19.zusammenfassen',
    'v.b1.l19.einigen',
    'v.b1.l19.einverstanden',
    'v.b1.l19.entscheiden',
    'v.b1.l19.entscheidung',
    'v.b1.l19.vereinbaren',
    'v.b1.l19.ergebnis',
    'v.b1.l19.protokoll',
    'v.b1.l19.obwohl',
    'v.b1.l19.trotzdem',
  ],
  grammarIds: ['g.b1.satzbau', 'g.b1.konnektoren'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'The language of meetings',
      blocks: [
        {
          kind: 'text',
          text: 'At B1 you stop only answering questions and start **steering** a conversation: you summarise, weigh pros and cons and push towards a decision. German meetings follow a fixed rhythm — **Tagesordnung, Diskussion, Entscheidung, Protokoll** — and a handful of phrases carry you through every stage.',
        },
        {
          kind: 'table',
          head: ['Phase', 'Typischer Satz', 'English'],
          rows: [
            ['Anfangen', 'Lassen Sie uns anfangen.', 'Let us get started.'],
            ['Zusammenfassen', 'Ich fasse kurz zusammen: …', 'Let me briefly summarise: …'],
            ['Unterbrechen', 'Darf ich kurz unterbrechen?', 'May I interrupt for a moment?'],
            ['Widersprechen', 'Das sehe ich etwas anders.', 'I see that a little differently.'],
            ['Entscheiden', 'Können wir uns darauf einigen?', 'Can we agree on that?'],
            ['Abschließen', 'Wer schreibt das Protokoll?', 'Who is taking the minutes?'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Obwohl der Zeitplan knapp ist, schaffen wir das Projekt bis Freitag.',
              en: 'Although the schedule is tight, we will manage the project by Friday.',
              note: 'obwohl sends ist to the end — and the whole clause counts as position 1, so schaffen comes straight after it.',
            },
            {
              de: 'Der Zeitplan ist knapp. Trotzdem schaffen wir das Projekt bis Freitag.',
              en: 'The schedule is tight. We will still manage the project by Friday.',
              note: 'Same idea, but trotzdem is an adverb in a main clause: the verb stays in position 2.',
            },
            {
              de: 'Einerseits sparen wir Geld, andererseits verlieren wir Zeit.',
              en: 'On the one hand we save money, on the other hand we lose time.',
            },
            {
              de: 'Ich kann morgen leider nicht an der Besprechung teilnehmen.',
              en: 'Unfortunately I cannot attend the meeting tomorrow.',
              note: 'The bracket: kann in position 2, teilnehmen closes the sentence, everything else sits inside.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'To disagree without sounding rude, Germans soften rather than flatter: **Das sehe ich etwas anders**, **Ich bin nicht ganz sicher, ob …**, **Haben wir auch an … gedacht?** Direct, but never personal.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.b1.l19.tagesordnung',
        'v.b1.l19.zeitplan',
        'v.b1.l19.budget',
        'v.b1.l19.ziel',
        'v.b1.l19.teilnehmer',
        'v.b1.l19.teilnehmen',
        'v.b1.l19.leiten',
        'v.b1.l19.unterbrechen',
        'v.b1.l19.zusammenfassen',
        'v.b1.l19.einigen',
        'v.b1.l19.einverstanden',
        'v.b1.l19.entscheiden',
        'v.b1.l19.entscheidung',
        'v.b1.l19.vereinbaren',
        'v.b1.l19.ergebnis',
        'v.b1.l19.protokoll',
        'v.b1.l19.obwohl',
        'v.b1.l19.trotzdem',
      ],
    },

    /* ── 3. Grammar: the sentence bracket ───────────────────────────────── */
    {
      type: 'grammar',
      title: 'The sentence bracket',
      grammarId: 'g.b1.satzbau',
    },

    /* ── 4. Grammar: connectors ─────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Connectors and their word order',
      grammarId: 'g.b1.konnektoren',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.b1.l19.1',
          kind: 'blank',
          sentence: 'Wir fangen pünktlich an, ___ noch nicht alle da sind.',
          options: ['obwohl', 'trotzdem', 'deshalb', 'weil'],
          answer: 'obwohl',
          skill: 'grammar',
          difficulty: 1,
          tags: ['konnektoren', 'nebensatz'],
          explain:
            'The verb sind stands at the end, so the gap needs a subordinating conjunction — and the meaning is a contrast. obwohl does both; weil gives a reason, and trotzdem and deshalb would need the verb straight after them.',
        },
        {
          id: 'x.b1.l19.2',
          kind: 'article',
          noun: 'Tagesordnung',
          answer: 'die',
          plural: 'die Tagesordnungen',
          meaning: 'agenda',
          skill: 'articles',
          difficulty: 1,
          explain:
            'In a compound the LAST part decides the gender: Tages + Ordnung, and every noun in -ung is feminine. So die Tagesordnung, plural die Tagesordnungen.',
        },
        {
          id: 'x.b1.l19.3',
          kind: 'blank',
          sentence: 'Die Kollegin war krank. ___ hat sie an der Besprechung teilgenommen.',
          options: ['Trotzdem', 'Obwohl', 'Während', 'Weil'],
          answer: 'Trotzdem',
          skill: 'grammar',
          difficulty: 2,
          tags: ['konnektoren', 'wortstellung'],
          explain:
            'The verb hat comes directly after the gap, so the gap is position 1 of a main clause — that is the slot for the adverb trotzdem. obwohl, während and weil would all push hat to the end.',
        },
        {
          id: 'x.b1.l19.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich kann morgen leider nicht an der Besprechung teilnehmen.',
            'Ich kann morgen leider nicht an der Besprechung teilnehme.',
            'Ich kann teilnehmen morgen leider nicht an der Besprechung.',
          ],
          answer: 0,
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung', 'modalverben'],
          explain:
            'The modal kann is the conjugated verb in position 2; teilnehmen closes the bracket as one unsplit infinitive. Everything else — morgen, leider nicht, an der Besprechung — sits between the two.',
        },
        {
          id: 'x.b1.l19.5',
          kind: 'conjugate',
          verb: 'unterbrechen',
          person: 'du',
          answer: 'unterbrichst',
          skill: 'verbs',
          difficulty: 2,
          explain:
            'brechen changes e to i in the du and er forms, like sprechen. And because the stress is on -bre-, unter- is inseparable here: it stays glued to the verb.',
        },
        {
          id: 'x.b1.l19.6',
          kind: 'match',
          pairs: [
            ['die Tagesordnung', 'agenda'],
            ['das Protokoll', 'minutes'],
            ['das Ergebnis', 'result'],
            ['der Zeitplan', 'schedule'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'The four documents of every meeting, in order: the agenda before, the schedule during, the result at the end and the minutes afterwards.',
        },
        {
          id: 'x.b1.l19.7',
          kind: 'correct',
          wrong: 'Obwohl das Budget ist knapp, wir schaffen das Projekt.',
          answer: 'Obwohl das Budget knapp ist, schaffen wir das Projekt.',
          skill: 'wordorder',
          difficulty: 3,
          tags: ['konnektoren', 'nebensatz', 'wortstellung'],
          explain:
            'Two rules at once. Inside the obwohl-clause the verb ist goes to the end. And the whole clause then fills position 1, so the main clause must start with its verb: schaffen wir, not wir schaffen.',
        },
        {
          id: 'x.b1.l19.8',
          kind: 'blank',
          sentence: 'Können wir uns auf einen neuen Termin ___?',
          answer: 'einigen',
          skill: 'verbs',
          difficulty: 2,
          tags: ['wortstellung'],
          hint: 'sich einigen auf',
          explain:
            'After the modal können the second verb waits at the end as a bare infinitive: einigen. The reflexive uns stays near the front, and what you agree on follows auf + accusative.',
        },
        {
          id: 'x.b1.l19.9',
          kind: 'listen',
          audio: 'Die Besprechung beginnt heute nicht um neun, sondern erst um halb elf.',
          question: 'When does the meeting start today?',
          options: ['At 10:30', 'At 9:00', 'At 11:30'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          explain:
            'nicht … sondern replaces the first time with the second, so nine is ruled out. And halb elf is half TO eleven — 10:30, not 11:30.',
        },
        {
          id: 'x.b1.l19.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Although we had little time, we finished the presentation.',
          answer: 'Obwohl wir wenig Zeit hatten, haben wir die Präsentation beendet.',
          accept: [
            'Wir haben die Präsentation beendet, obwohl wir wenig Zeit hatten.',
            'Obwohl wir wenig Zeit hatten, haben wir die Präsentation fertig gemacht.',
            'Wir haben die Präsentation fertig gemacht, obwohl wir wenig Zeit hatten.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['konnektoren', 'nebensatz', 'praeteritum'],
          hint: 'to finish = beenden. haben in the past is usually hatten.',
          explain:
            'hatten sits at the end of the obwohl-clause, and because that clause opens the sentence the main clause starts with its verb: haben wir … beendet. For haben itself, spoken German prefers the Präteritum hatten to hat … gehabt.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.b1.l19.11',
          kind: 'order',
          tokens: ['wir', 'müssen', 'heute noch', 'den Zeitplan', 'besprechen'],
          answer: 'Wir müssen heute noch den Zeitplan besprechen.',
          accept: ['Wir müssen den Zeitplan heute noch besprechen.', 'Heute noch müssen wir den Zeitplan besprechen.'],
          skill: 'wordorder',
          difficulty: 1,
          tags: ['wortstellung', 'modalverben'],
          explain:
            'müssen in position 2, besprechen at the very end — that is the bracket. The details in between can swap, but the two verbs never move.',
        },
        {
          id: 'x.b1.l19.12',
          kind: 'order',
          tokens: ['der Kunde', 'hat', 'nicht unterschrieben', 'obwohl', 'die Präsentation', 'gut war'],
          answer: 'Der Kunde hat nicht unterschrieben, obwohl die Präsentation gut war.',
          accept: ['Obwohl die Präsentation gut war, hat der Kunde nicht unterschrieben.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['konnektoren', 'nebensatz'],
          explain:
            'In the obwohl-clause war goes last. Put the clause first and it becomes position 1 — so hat moves right behind the comma: Obwohl …, hat der Kunde …',
        },
        {
          id: 'x.b1.l19.13',
          kind: 'order',
          tokens: ['einerseits', 'ist', 'das Projekt', 'teuer', 'andererseits', 'ist', 'es', 'sehr wichtig'],
          answer: 'Einerseits ist das Projekt teuer, andererseits ist es sehr wichtig.',
          accept: ['Das Projekt ist einerseits teuer, andererseits ist es sehr wichtig.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['konnektoren', 'wortstellung'],
          explain:
            'einerseits and andererseits are adverbs, not conjunctions: each one takes position 1 of its own main clause, so each is followed directly by the verb — ist, then ist again.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: five rules for better meetings',
      readingId: 'r.b1.l19.besprechungs-regeln',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: the meeting moves',
      listeningId: 'h.b1.l19.termin-verschieben',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: the Monday team meeting',
      conversationId: 'c.b1.l19.teambesprechung',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.b1.l19.14',
          kind: 'blank',
          sentence: 'Frau Keller leitet die Besprechung, ___ Herr Yilmaz das Protokoll schreibt.',
          options: ['während', 'trotzdem', 'dennoch', 'deshalb'],
          answer: 'während',
          skill: 'grammar',
          difficulty: 1,
          tags: ['konnektoren', 'nebensatz'],
          explain:
            'schreibt stands at the end, so only a subordinating conjunction fits — and während means "while": two things happening at the same time. trotzdem, dennoch and deshalb are adverbs that keep the verb in position 2.',
        },
        {
          id: 'x.b1.l19.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Wir haben uns auf einen Kompromiss geeinigt.',
            'Wir haben uns auf einen Kompromiss geeinigen.',
            'Wir haben uns an einen Kompromiss geeinigt.',
          ],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt', 'praeposition'],
          explain:
            'sich einigen always goes with auf + accusative, never an. Its participle is regular — ge + einig + t — and the Perfekt needs that participle, not the infinitive.',
        },
        {
          id: 'x.b1.l19.16',
          kind: 'dialogue',
          lines: [
            { who: 'Teamleiterin', text: 'Sind alle mit dem neuen Zeitplan einverstanden?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Ja, ich bin einverstanden, obwohl es knapp wird.',
            'Ja, ich bin einverstanden, obwohl es wird knapp.',
            'Ja, ich einverstanden bin, obwohl es knapp wird.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['konnektoren', 'nebensatz'],
          explain:
            'The main clause keeps bin in position 2; only inside the obwohl-clause does the verb wird move to the end. Each clause follows its own rule.',
        },
        {
          id: 'x.b1.l19.17',
          kind: 'correct',
          wrong: 'Ich habe gestern an der Besprechung teilgenehmt.',
          answer: 'Ich habe gestern an der Besprechung teilgenommen.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['perfekt', 'trennbar'],
          explain:
            'teilnehmen is built on nehmen, which is irregular: genommen, not "genehmt". The separable prefix teil- stays in front of the ge-: teil-ge-nommen.',
        },
        {
          id: 'x.b1.l19.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Could you briefly summarise the results?',
          answer: 'Könnten Sie die Ergebnisse kurz zusammenfassen?',
          accept: [
            'Können Sie die Ergebnisse kurz zusammenfassen?',
            'Könnten Sie bitte die Ergebnisse kurz zusammenfassen?',
            'Könnten Sie die Ergebnisse bitte kurz zusammenfassen?',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['konjunktiv2', 'wortstellung'],
          hint: '"Could you" is the polite könnten.',
          explain:
            'könnten is the polite Konjunktiv II of können, standard for requests in a meeting. After it, zusammenfassen closes the question in one piece — a separable verb never splits behind a modal.',
        },
        {
          id: 'x.b1.l19.19',
          kind: 'speak',
          prompt: 'Say in German: I agree, although the schedule is tight.',
          answer: 'Ich bin einverstanden, obwohl der Zeitplan knapp ist.',
          accept: ['Ich bin einverstanden, obwohl der Zeitplan sehr knapp ist.'],
          skill: 'conversation',
          difficulty: 2,
          tags: ['konnektoren', 'nebensatz'],
          explain:
            'einverstanden goes with sein, never haben. In the obwohl-clause the verb ist comes last — you can hear the clause close when the verb arrives.',
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
