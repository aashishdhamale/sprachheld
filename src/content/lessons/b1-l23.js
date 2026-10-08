/**
 * B1 · L23 — Environment and society / Umwelt und Gesellschaft
 *
 * Talk about how we live — rubbish, energy, transport, the neighbourhood —
 * and what we feel about it. Two B1 grammar topics that make sentences
 * sound native: the endings on adjectives (ein großes Problem, mit
 * öffentlichen Verkehrsmitteln) and verbs that come glued to one preposition
 * (sich interessieren für, sich ärgern über, denken an, warten auf).
 *
 * Grammar: g.b1.adjektivendungen and g.b1.praepositionen.
 *
 * Exercise ids run x.b1.l23.1 … x.b1.l23.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'b1.l23',
  moduleId: 'b1.debate',
  level: 'B1',
  order: 23,
  title: 'Environment and society',
  titleDe: 'Umwelt und Gesellschaft',
  icon: '🌱',
  summary:
    'Talk about rubbish, energy and transport, your neighbourhood and the future — with the right adjective endings and the preposition each verb insists on.',
  minutes: 22,
  objectives: [
    'Talk about everyday environmental habits: Müll trennen, Energie sparen, öffentliche Verkehrsmittel',
    'Put the right ending on an adjective after der, ein or no article at all',
    'Use verbs with fixed prepositions: sich interessieren für, sich ärgern über, denken an, warten auf',
    'Say what worries you and what you would like to get involved in',
  ],
  vocabIds: [
    'v.b1.l23.umwelt',
    'v.b1.l23.klimawandel',
    'v.b1.l23.muell',
    'v.b1.l23.energie',
    'v.b1.l23.gesellschaft',
    'v.b1.l23.zukunft',
    'v.b1.l23.verantwortung',
    'v.b1.l23.verkehrsmittel',
    'v.b1.l23.schuetzen',
    'v.b1.l23.sparen',
    'v.b1.l23.trennen',
    'v.b1.l23.verbrauchen',
    'v.b1.l23.engagieren',
    'v.b1.l23.sorgen-machen',
    'v.b1.l23.aergern',
    'v.b1.l23.nachhaltig',
    'v.b1.l23.umweltfreundlich',
    'v.b1.l23.oeffentlich',
  ],
  grammarIds: ['g.b1.adjektivendungen', 'g.b1.praepositionen'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'How we live together',
      blocks: [
        {
          kind: 'text',
          text: 'Germans take rubbish, energy and the neighbourhood seriously — expect to discuss them with colleagues and neighbours. To do it well you need two things that native speakers never think about: the **ending on every adjective** in front of a noun, and the **one preposition** each verb insists on.',
        },
        {
          kind: 'table',
          head: ['Verb', 'Präposition + Kasus', 'Beispiel'],
          rows: [
            ['sich interessieren', 'für + Akk', 'Ich interessiere mich für Umweltschutz.'],
            ['sich ärgern', 'über + Akk', 'Wir ärgern uns über den Müll im Park.'],
            ['sich Sorgen machen', 'um + Akk', 'Sie macht sich Sorgen um die Zukunft.'],
            ['sich engagieren', 'für + Akk', 'Er engagiert sich für die Umwelt.'],
            ['denken', 'an + Akk', 'Denk bitte an den Müll!'],
            ['warten', 'auf + Akk', 'Wir warten auf den Bus.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Das ist ein großes Problem für unsere Gesellschaft.',
              en: 'That is a big problem for our society.',
              note: 'ein does not show that Problem is neuter — so the adjective has to: großes.',
            },
            {
              de: 'Wir fahren mit öffentlichen Verkehrsmitteln zur Arbeit.',
              en: 'We travel to work by public transport.',
              note: 'Dative plural: adjective -en, and the noun adds -n where it can.',
            },
            {
              de: 'Worüber ärgerst du dich? — Über den vielen Verkehr.',
              en: 'What are you annoyed about? — About all the traffic.',
              note: 'Questions about things use wo(r) + preposition: worüber, wofür, woran, worauf.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'The adjective rule in one line: **the ending shows what the article does not.** After *der/die/das* the article has done the work, so the adjective rests on -e or -en. After *ein* or no article at all, the adjective takes the strong ending itself: *ein großer Garten*, *frisches Obst*.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.b1.l23.umwelt',
        'v.b1.l23.klimawandel',
        'v.b1.l23.muell',
        'v.b1.l23.energie',
        'v.b1.l23.gesellschaft',
        'v.b1.l23.zukunft',
        'v.b1.l23.verantwortung',
        'v.b1.l23.verkehrsmittel',
        'v.b1.l23.schuetzen',
        'v.b1.l23.sparen',
        'v.b1.l23.trennen',
        'v.b1.l23.verbrauchen',
        'v.b1.l23.engagieren',
        'v.b1.l23.sorgen-machen',
        'v.b1.l23.aergern',
        'v.b1.l23.nachhaltig',
        'v.b1.l23.umweltfreundlich',
        'v.b1.l23.oeffentlich',
      ],
    },

    /* ── 3. Grammar: adjective endings ──────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Adjective endings',
      grammarId: 'g.b1.adjektivendungen',
    },

    /* ── 4. Grammar: verbs with prepositions ────────────────────────────── */
    {
      type: 'grammar',
      title: 'Verbs with fixed prepositions',
      grammarId: 'g.b1.praepositionen',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.b1.l23.1',
          kind: 'blank',
          sentence: 'Ich interessiere mich sehr ___ Umweltschutz.',
          options: ['für', 'an', 'auf', 'über'],
          answer: 'für',
          skill: 'prepositions',
          difficulty: 1,
          tags: ['praeposition'],
          explain:
            'sich interessieren always takes für + accusative. The preposition has no logic you can work out — learn verb and preposition as one block.',
        },
        {
          id: 'x.b1.l23.2',
          kind: 'article',
          noun: 'Umwelt',
          answer: 'die',
          meaning: 'environment',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Um + Welt, and in a compound the last part decides: die Welt, so die Umwelt. It has no plural.',
        },
        {
          id: 'x.b1.l23.3',
          kind: 'blank',
          sentence: 'Ich kaufe nur ___ Obst aus der Region.',
          options: ['frisches', 'frischer', 'frische', 'frischen'],
          answer: 'frisches',
          skill: 'grammar',
          difficulty: 2,
          tags: ['adjektivendungen'],
          explain:
            'No article at all, so the adjective must carry the gender itself. das Obst is neuter and here an accusative object: frisches, exactly like the article das would end.',
        },
        {
          id: 'x.b1.l23.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Wir fahren mit öffentlichen Verkehrsmitteln zur Arbeit.',
            'Wir fahren mit öffentliche Verkehrsmittel zur Arbeit.',
            'Wir fahren mit öffentlichen Verkehrsmittel zur Arbeit.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['adjektivendungen', 'dativ'],
          explain:
            'mit takes the dative, and in the dative plural everything ends in -n: the adjective öffentlichen and the noun Verkehrsmitteln. Forgetting the noun’s -n is the commonest slip.',
        },
        {
          id: 'x.b1.l23.5',
          kind: 'conjugate',
          verb: 'sich engagieren',
          person: 'er',
          answer: 'engagiert sich',
          skill: 'verbs',
          difficulty: 2,
          tags: ['reflexiv'],
          explain:
            'A regular -ieren verb with the reflexive pronoun after it: er engagiert sich. For er, sie and es the reflexive pronoun is always sich.',
        },
        {
          id: 'x.b1.l23.6',
          kind: 'match',
          pairs: [
            ['der Müll', 'rubbish'],
            ['die Umwelt', 'environment'],
            ['die Zukunft', 'future'],
            ['die Gesellschaft', 'society'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'The four big nouns of any discussion about how we live. Three of them have no real plural — der Müll, die Umwelt, die Zukunft.',
        },
        {
          id: 'x.b1.l23.7',
          kind: 'correct',
          wrong: 'Ich ärgere mich auf den Lärm.',
          answer: 'Ich ärgere mich über den Lärm.',
          skill: 'prepositions',
          difficulty: 2,
          tags: ['praeposition'],
          explain:
            'sich ärgern goes with über + accusative. auf belongs to warten (warten auf), and learners mix the two because both look like they should mean "at".',
        },
        {
          id: 'x.b1.l23.8',
          kind: 'blank',
          sentence: 'Woran denkst du gerade? — Ich denke ___ meinen Urlaub.',
          answer: 'an',
          skill: 'prepositions',
          difficulty: 2,
          tags: ['praeposition'],
          hint: 'The question word gives it away.',
          explain:
            'denken an + accusative — and the question woran contains the same an. Wo(r) + preposition always mirrors the verb’s preposition.',
        },
        {
          id: 'x.b1.l23.9',
          kind: 'listen',
          audio: 'Bitte werfen Sie Glas nicht in den gelben Sack, sondern in den Glascontainer.',
          question: 'Where does glass go?',
          options: ['In the glass container.', 'In the yellow bag.', 'In the normal bin.'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['adjektivendungen'],
          explain:
            'nicht … sondern replaces the first place with the second. The yellow bag (den gelben Sack — accusative after in, because you throw something INTO it) is for plastic packaging.',
        },
        {
          id: 'x.b1.l23.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I am worried about the future of our planet.',
          answer: 'Ich mache mir Sorgen um die Zukunft unseres Planeten.',
          accept: [
            'Ich mache mir Sorgen um die Zukunft von unserem Planeten.',
            'Ich mache mir große Sorgen um die Zukunft unseres Planeten.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['praeposition'],
          hint: 'to worry = sich (Dativ) Sorgen machen um',
          explain:
            'German worries with a phrase: sich Sorgen machen um + accusative. The reflexive is dative (mir), because Sorgen is already the object. "Of our planet" is the genitive unseres Planeten — or, in speech, von unserem Planeten.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.b1.l23.11',
          kind: 'order',
          tokens: ['wir', 'müssen', 'mehr Energie', 'sparen'],
          answer: 'Wir müssen mehr Energie sparen.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['modalverben'],
          explain:
            'The modal müssen in position 2, the infinitive sparen at the end, and what you save in between.',
        },
        {
          id: 'x.b1.l23.12',
          kind: 'order',
          tokens: ['sie', 'engagiert', 'sich', 'seit Jahren', 'für den Umweltschutz'],
          answer: 'Sie engagiert sich seit Jahren für den Umweltschutz.',
          accept: ['Seit Jahren engagiert sie sich für den Umweltschutz.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['praeposition', 'reflexiv'],
          explain:
            'The reflexive sich stays right after the verb, and the prepositional phrase für den Umweltschutz comes at the end, as the most important information.',
        },
        {
          id: 'x.b1.l23.13',
          kind: 'order',
          tokens: ['der neue', 'Bahnhof', 'ist', 'ein', 'modernes', 'und', 'umweltfreundliches', 'Gebäude'],
          answer: 'Der neue Bahnhof ist ein modernes und umweltfreundliches Gebäude.',
          accept: ['Der neue Bahnhof ist ein umweltfreundliches und modernes Gebäude.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['adjektivendungen'],
          explain:
            'After der the adjective rests on -e (der neue Bahnhof). After ein, both adjectives carry the neuter -es of das Gebäude: ein modernes und umweltfreundliches Gebäude.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: a town without rubbish?',
      readingId: 'r.b1.l23.stadt-ohne-muell',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: sorting the rubbish',
      listeningId: 'h.b1.l23.muelltrennung',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: the neighbourhood initiative',
      conversationId: 'c.b1.l23.gruenes-viertel',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.b1.l23.14',
          kind: 'blank',
          sentence: 'Das ist ein ___ Problem für unsere Gesellschaft.',
          options: ['großes', 'großer', 'große', 'großen'],
          answer: 'großes',
          skill: 'grammar',
          difficulty: 2,
          tags: ['adjektivendungen'],
          explain:
            'das Problem is neuter, and ein looks the same for masculine and neuter — so the adjective has to show it: ein großes Problem.',
        },
        {
          id: 'x.b1.l23.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich warte schon lange auf eine Antwort.',
            'Ich warte schon lange für eine Antwort.',
            'Ich warte schon lange an eine Antwort.',
          ],
          answer: 0,
          skill: 'prepositions',
          difficulty: 1,
          tags: ['praeposition'],
          explain:
            'warten auf + accusative. English "wait for" pulls learners towards für — the most frequent preposition mistake in German.',
        },
        {
          id: 'x.b1.l23.16',
          kind: 'dialogue',
          lines: [
            { who: 'Nachbar', text: 'Warum fährst du jetzt immer mit dem Fahrrad?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Weil ich mich für die Umwelt engagiere.',
            'Weil ich engagiere mich für die Umwelt.',
            'Weil ich mich engagiere an die Umwelt.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['praeposition', 'nebensatz'],
          explain:
            'Two rules together: weil sends the verb engagiere to the end, and sich engagieren takes für — never an.',
        },
        {
          id: 'x.b1.l23.17',
          kind: 'correct',
          wrong: 'Wir wohnen in einem kleinen Dorf mit viele alte Häuser.',
          answer: 'Wir wohnen in einem kleinen Dorf mit vielen alten Häusern.',
          skill: 'grammar',
          difficulty: 3,
          tags: ['adjektivendungen', 'dativ'],
          explain:
            'mit takes the dative, and dative plural means -n everywhere: vielen, alten, Häusern. The noun gets its own -n on top of the plural -er.',
        },
        {
          id: 'x.b1.l23.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'We sort our rubbish.',
          answer: 'Wir trennen unseren Müll.',
          skill: 'writing',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'trennen is the German verb for sorting rubbish. der Müll is masculine and the object, so unser takes the accusative -en: unseren Müll.',
        },
        {
          id: 'x.b1.l23.19',
          kind: 'speak',
          prompt: 'Say in German: I take the bus because it is more environmentally friendly.',
          answer: 'Ich fahre mit dem Bus, weil das umweltfreundlicher ist.',
          accept: [
            'Ich nehme den Bus, weil das umweltfreundlicher ist.',
            'Ich fahre mit dem Bus, weil es umweltfreundlicher ist.',
            'Ich nehme den Bus, weil es umweltfreundlicher ist.',
          ],
          skill: 'conversation',
          difficulty: 3,
          tags: ['komparativ', 'nebensatz'],
          explain:
            'Comparative: umweltfreundlich + er. In the weil-clause the verb ist goes last — and an adjective after sein never takes an ending.',
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
