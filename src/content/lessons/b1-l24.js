/**
 * B1 · L24 — Education, career and interviews / Ausbildung, Beruf und Bewerbung
 *
 * Tell the story of your education and working life, apply for a job and
 * hold your own in the interview. Two tenses carry it: the Präteritum, the
 * natural tense of a written life story (Nach der Schule machte ich eine
 * Ausbildung …), and Futur I for plans and promises (In fünf Jahren werde
 * ich …).
 *
 * Grammar: g.b1.praeteritum and g.b1.futur.
 *
 * Exercise ids run x.b1.l24.1 … x.b1.l24.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'b1.l24',
  moduleId: 'b1.life',
  level: 'B1',
  order: 24,
  title: 'Education, career and interviews',
  titleDe: 'Ausbildung, Beruf und Bewerbung',
  icon: '🎓',
  summary:
    'Tell your educational and working life in the Präteritum, apply for a job, and answer the classic interview questions — strengths, weaknesses, plans for the next five years.',
  minutes: 22,
  objectives: [
    'Write and tell your life story in the Präteritum: machte, arbeitete, ging, war, hatte',
    'Talk about plans and promises with Futur I: Ich werde …',
    'Apply for a job and talk about your training, studies and experience',
    'Answer the standard interview questions about strengths, weaknesses and goals',
  ],
  vocabIds: [
    'v.b1.l24.ausbildung',
    'v.b1.l24.studium',
    'v.b1.l24.praktikum',
    'v.b1.l24.abschluss',
    'v.b1.l24.stelle',
    'v.b1.l24.arbeitgeber',
    'v.b1.l24.bewerbung',
    'v.b1.l24.bewerben',
    'v.b1.l24.lebenslauf',
    'v.b1.l24.vorstellungsgespraech',
    'v.b1.l24.einstellen',
    'v.b1.l24.verdienen',
    'v.b1.l24.erfahrung',
    'v.b1.l24.staerke',
    'v.b1.l24.schwaeche',
    'v.b1.l24.zuverlaessig',
    'v.b1.l24.selbststaendig',
    'v.b1.l24.erfolgreich',
  ],
  grammarIds: ['g.b1.praeteritum', 'g.b1.futur'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Your story, past and future',
      blocks: [
        {
          kind: 'text',
          text: 'In speech Germans tell the past with the Perfekt. But a **written** life story — a CV text, a cover letter, a newspaper portrait — uses the **Präteritum**: *Ich machte eine Ausbildung, danach arbeitete ich …* And for the future, the present tense usually does the job; **Futur I** (*werden* + infinitive) is for plans you want to sound firm about, promises and predictions.',
        },
        {
          kind: 'table',
          head: ['Infinitiv', 'Präteritum (ich / er)', 'Perfekt'],
          rows: [
            ['machen', 'machte', 'hat gemacht'],
            ['arbeiten', 'arbeitete', 'hat gearbeitet'],
            ['gehen', 'ging', 'ist gegangen'],
            ['kommen', 'kam', 'ist gekommen'],
            ['finden', 'fand', 'hat gefunden'],
            ['sein / haben', 'war / hatte', 'ist gewesen / hat gehabt'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Nach der Schule machte ich eine Ausbildung als Koch.',
              en: 'After school I trained as a cook.',
              note: 'Regular verbs: stem + -te. ich and er have the same form.',
            },
            {
              de: 'Als ich in Hamburg wohnte, arbeitete ich in einem Hotel.',
              en: 'When I lived in Hamburg, I worked in a hotel.',
              note: 'als for one period or event in the past — never wenn.',
            },
            {
              de: 'In fünf Jahren werde ich hoffentlich ein eigenes Team leiten.',
              en: 'In five years I will hopefully be leading my own team.',
            },
            {
              de: 'Ich bewerbe mich um die Stelle, weil ich gern mit Menschen arbeite.',
              en: 'I am applying for the position because I like working with people.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Interview German is modest but concrete: not *Ich bin perfekt*, but *Ich habe drei Jahre Erfahrung im Verkauf* and *Ich arbeite sehr zuverlässig*. Facts first, adjectives second.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.b1.l24.ausbildung',
        'v.b1.l24.studium',
        'v.b1.l24.praktikum',
        'v.b1.l24.abschluss',
        'v.b1.l24.stelle',
        'v.b1.l24.arbeitgeber',
        'v.b1.l24.bewerbung',
        'v.b1.l24.bewerben',
        'v.b1.l24.lebenslauf',
        'v.b1.l24.vorstellungsgespraech',
        'v.b1.l24.einstellen',
        'v.b1.l24.verdienen',
        'v.b1.l24.erfahrung',
        'v.b1.l24.staerke',
        'v.b1.l24.schwaeche',
        'v.b1.l24.zuverlaessig',
        'v.b1.l24.selbststaendig',
        'v.b1.l24.erfolgreich',
      ],
    },

    /* ── 3. Grammar: Präteritum ─────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Präteritum',
      grammarId: 'g.b1.praeteritum',
    },

    /* ── 4. Grammar: Futur I ────────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Futur I',
      grammarId: 'g.b1.futur',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.b1.l24.1',
          kind: 'blank',
          sentence: 'Nach der Schule ___ ich eine Ausbildung als Koch.',
          options: ['machte', 'mache', 'machten', 'gemacht'],
          answer: 'machte',
          skill: 'verbs',
          difficulty: 1,
          tags: ['praeteritum'],
          explain:
            'A life story in writing uses the Präteritum. machen is regular: stem mach + -te, and ich has no extra ending — ich machte, er machte.',
        },
        {
          id: 'x.b1.l24.2',
          kind: 'article',
          noun: 'Lebenslauf',
          answer: 'der',
          plural: 'die Lebensläufe',
          meaning: 'CV',
          skill: 'articles',
          difficulty: 1,
          explain:
            'das Leben + der Lauf: the last part decides, so der Lebenslauf. Lauf takes an Umlaut in the plural: die Lebensläufe.',
        },
        {
          id: 'x.b1.l24.3',
          kind: 'blank',
          sentence: 'In fünf Jahren ___ ich hoffentlich als Ärztin arbeiten.',
          options: ['werde', 'wurde', 'wird', 'worden'],
          answer: 'werde',
          skill: 'verbs',
          difficulty: 2,
          tags: ['futur'],
          explain:
            'Futur I = werden in the present + infinitive at the end. wurde is the past and would make no sense with In fünf Jahren; wird is the er-form.',
        },
        {
          id: 'x.b1.l24.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich bewerbe mich bei einer großen Firma.',
            'Ich bewerbe mich an einer großen Firma.',
            'Ich bewerbe mich zu einer großen Firma.',
          ],
          answer: 0,
          skill: 'prepositions',
          difficulty: 2,
          tags: ['praeposition'],
          explain:
            'You apply AT a company: sich bei + dative bewerben. The job itself takes um (or für): sich um eine Stelle bewerben.',
        },
        {
          id: 'x.b1.l24.5',
          kind: 'conjugate',
          verb: 'sich bewerben',
          person: 'du',
          answer: 'bewirbst dich',
          skill: 'verbs',
          difficulty: 2,
          tags: ['reflexiv'],
          explain:
            'werben changes e to i in the du and er forms (du bewirbst, er bewirbt), and the reflexive pronoun for du is dich.',
        },
        {
          id: 'x.b1.l24.6',
          kind: 'match',
          pairs: [
            ['der Lebenslauf', 'CV'],
            ['die Bewerbung', 'application'],
            ['das Praktikum', 'internship'],
            ['das Vorstellungsgespräch', 'job interview'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'The path to a job in four words: an internship for experience, then the application with your CV, then the interview.',
        },
        {
          id: 'x.b1.l24.7',
          kind: 'correct',
          wrong: 'Als ich ein Kind war, ich wollte Pilot werden.',
          answer: 'Als ich ein Kind war, wollte ich Pilot werden.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['praeteritum', 'nebensatz', 'wortstellung'],
          explain:
            'The als-clause fills position 1, so the main clause must open with its verb: wollte ich. Modal verbs, like sein and haben, are almost always used in the Präteritum, even in speech.',
        },
        {
          id: 'x.b1.l24.8',
          kind: 'blank',
          sentence: 'Früher ___ wir kein Auto.',
          answer: 'hatten',
          skill: 'verbs',
          difficulty: 2,
          tags: ['praeteritum'],
          hint: 'haben in the Präteritum',
          explain:
            'haben is irregular in the Präteritum: hatte, hattest, hatte, hatten. Germans use hatten rather than haben … gehabt even when they speak.',
        },
        {
          id: 'x.b1.l24.9',
          kind: 'listen',
          audio: 'Ich habe zuerst Informatik studiert und danach drei Jahre bei einer Bank gearbeitet.',
          question: 'What did the person do after their studies?',
          options: ['They worked at a bank for three years.', 'They studied for three more years.', 'They worked at a school.'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['perfekt'],
          explain:
            'zuerst … danach orders the two steps: first the computer science degree, then drei Jahre bei einer Bank. In speech the same story comes in the Perfekt.',
        },
        {
          id: 'x.b1.l24.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I will call you tomorrow, I promise.',
          answer: 'Ich werde Sie morgen anrufen, versprochen.',
          accept: [
            'Ich werde dich morgen anrufen, versprochen.',
            'Ich werde Sie morgen anrufen, das verspreche ich.',
            'Ich werde dich morgen anrufen, das verspreche ich.',
            'Ich rufe Sie morgen an, versprochen.',
            'Ich rufe dich morgen an, versprochen.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['futur'],
          hint: 'A promise is a classic job for werden + infinitive.',
          explain:
            'With werden the separable verb stays in one piece at the end: Ich werde Sie morgen anrufen. In the present tense it splits: Ich rufe Sie morgen an — both are right.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.b1.l24.11',
          kind: 'order',
          tokens: ['ich', 'werde', 'nächstes Jahr', 'eine Ausbildung', 'anfangen'],
          answer: 'Ich werde nächstes Jahr eine Ausbildung anfangen.',
          accept: ['Nächstes Jahr werde ich eine Ausbildung anfangen.'],
          skill: 'wordorder',
          difficulty: 1,
          tags: ['futur'],
          explain:
            'werde in position 2, the infinitive anfangen at the very end — the same bracket as with a modal verb.',
        },
        {
          id: 'x.b1.l24.12',
          kind: 'order',
          tokens: ['als', 'ich', 'in Berlin', 'wohnte', 'arbeitete', 'ich', 'in einem Hotel'],
          answer: 'Als ich in Berlin wohnte, arbeitete ich in einem Hotel.',
          accept: ['Ich arbeitete in einem Hotel, als ich in Berlin wohnte.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['praeteritum', 'nebensatz'],
          explain:
            'als sends wohnte to the end of its clause; the main clause then starts with arbeitete. Verb, comma, verb.',
        },
        {
          id: 'x.b1.l24.13',
          kind: 'order',
          tokens: ['meine größte Stärke', 'ist', 'dass', 'ich', 'sehr zuverlässig', 'bin'],
          answer: 'Meine größte Stärke ist, dass ich sehr zuverlässig bin.',
          skill: 'wordorder',
          difficulty: 3,
          tags: ['nebensatz'],
          explain:
            'The dass-clause is the content of the strength. Note the superlative ending: meine größte Stärke, feminine nominative after a possessive.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: from intern to head of department',
      readingId: 'r.b1.l24.aylin-demir',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: an interview at a hotel',
      listeningId: 'h.b1.l24.vorstellungsgespraech',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: your job interview',
      conversationId: 'c.b1.l24.bewerbungsgespraech',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.b1.l24.14',
          kind: 'blank',
          sentence: 'Gestern ___ ich ein Vorstellungsgespräch.',
          options: ['hatte', 'habe', 'hätte', 'hat'],
          answer: 'hatte',
          skill: 'verbs',
          difficulty: 1,
          tags: ['praeteritum'],
          explain:
            'Gestern needs a past tense, and haben is normally used in the Präteritum: ich hatte. hätte with an Umlaut is Konjunktiv II — "would have".',
        },
        {
          id: 'x.b1.l24.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Er ging jeden Tag zu Fuß zur Arbeit.',
            'Er gehte jeden Tag zu Fuß zur Arbeit.',
            'Er gang jeden Tag zu Fuß zur Arbeit.',
          ],
          answer: 0,
          skill: 'verbs',
          difficulty: 2,
          tags: ['praeteritum'],
          explain:
            'gehen is irregular: the Präteritum stem is ging — no -te. Irregular verbs change their vowel instead (gehen → ging, kommen → kam, finden → fand).',
        },
        {
          id: 'x.b1.l24.16',
          kind: 'dialogue',
          lines: [
            { who: 'Personalchefin', text: 'Was sind Ihre Ziele für die nächsten fünf Jahre?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Ich werde mich weiterbilden und mehr Verantwortung übernehmen.',
            'Ich wurde mich weiterbilden und mehr Verantwortung übernehmen.',
            'Ich werde mich weiterbilden und mehr Verantwortung übernommen.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['futur'],
          explain:
            'Goals for the future: werde + two infinitives at the end. wurde would be the past, and übernommen is a participle — the future needs the infinitive übernehmen.',
        },
        {
          id: 'x.b1.l24.17',
          kind: 'correct',
          wrong: 'Letztes Jahr ich habe mein Studium abgeschlossen.',
          answer: 'Letztes Jahr habe ich mein Studium abgeschlossen.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung', 'perfekt'],
          explain:
            'Letztes Jahr takes position 1, so habe comes second and ich moves behind it. The participle abgeschlossen stays at the end.',
        },
        {
          id: 'x.b1.l24.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'When I was a child, I wanted to become a doctor.',
          answer: 'Als ich ein Kind war, wollte ich Arzt werden.',
          accept: [
            'Als ich ein Kind war, wollte ich Ärztin werden.',
            'Als ich klein war, wollte ich Arzt werden.',
            'Als ich klein war, wollte ich Ärztin werden.',
            'Als Kind wollte ich Arzt werden.',
            'Als Kind wollte ich Ärztin werden.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['praeteritum', 'nebensatz'],
          hint: '"when" for a period in the past is als.',
          explain:
            'One period in the past = als, never wenn. war goes to the end of the als-clause, and the main clause starts with wollte. Jobs take no article: Arzt werden.',
        },
        {
          id: 'x.b1.l24.19',
          kind: 'speak',
          prompt: 'Say in German: I have two years of experience in sales.',
          answer: 'Ich habe zwei Jahre Erfahrung im Verkauf.',
          accept: ['Ich habe zwei Jahre Berufserfahrung im Verkauf.'],
          skill: 'conversation',
          difficulty: 2,
          explain:
            'German puts the amount straight before the noun with no "of": zwei Jahre Erfahrung. The area follows with im (in dem).',
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
