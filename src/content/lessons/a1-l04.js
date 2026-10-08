/**
 * A1 · L04 — Family and people (Familie und Leute)
 *
 * Grammar: g.a1.haben + g.a1.possessiv.
 * Exercise ids run x.a1.l04.1 … x.a1.l04.19 in this file; the reading and the
 * listening continue the same series with 20-23 and 24-27.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l04',
  moduleId: 'a1.everyday',
  level: 'A1',
  order: 4,
  title: 'Family and people',
  titleDe: 'Familie und Leute',
  icon: '👨‍👩‍👧',
  summary:
    'Name the people in your family, say how many brothers and sisters you have, and describe someone in one short sentence.',
  minutes: 16,
  objectives: [
    'Name every close family member and give the right article',
    'Say what you have with haben — einen Bruder, eine Schwester, zwei Kinder',
    'Use mein, dein, sein and ihr to say whose family member you mean',
    'Describe a person: jung, alt, nett, verheiratet, ledig',
  ],
  vocabIds: [
    'v.a1.l04.familie',
    'v.a1.l04.vater',
    'v.a1.l04.mutter',
    'v.a1.l04.eltern',
    'v.a1.l04.bruder',
    'v.a1.l04.schwester',
    'v.a1.l04.geschwister',
    'v.a1.l04.sohn',
    'v.a1.l04.tochter',
    'v.a1.l04.kind',
    'v.a1.l04.grosseltern',
    'v.a1.l04.mann',
    'v.a1.l04.verheiratet',
    'v.a1.l04.ledig',
    'v.a1.l04.nett',
  ],
  grammarIds: ['g.a1.haben', 'g.a1.possessiv'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Talking about your family',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can show a photo and say who everyone is. You only need two building blocks: **haben** for what you have, and **mein / dein / sein / ihr** for whose it is.',
        },
        {
          kind: 'examples',
          items: [
            { de: 'Ich habe einen Bruder und zwei Schwestern.', en: 'I have one brother and two sisters.' },
            {
              de: 'Das ist meine Mutter. Sie heißt Petra.',
              en: 'This is my mother. Her name is Petra.',
              note: 'Das ist … works for a person, a photo or a thing.',
            },
            { de: 'Mein Vater ist zweiundsechzig Jahre alt.', en: 'My father is sixty-two years old.' },
            { de: 'Meine Schwester ist verheiratet. Ihr Mann heißt Jonas.', en: 'My sister is married. Her husband is called Jonas.' },
          ],
        },
        {
          kind: 'table',
          head: ['Männlich', 'Weiblich', 'Zusammen'],
          rows: [
            ['der Vater', 'die Mutter', 'die Eltern'],
            ['der Bruder', 'die Schwester', 'die Geschwister'],
            ['der Sohn', 'die Tochter', 'die Kinder'],
            ['der Großvater', 'die Großmutter', 'die Großeltern'],
          ],
        },
        {
          kind: 'tip',
          text: 'Family words follow the person: male → **der**, female → **die**. The one exception is **das Kind** — a child is neuter in German.',
        },
        {
          kind: 'warn',
          text: 'What you *have* stands in the accusative, and only the masculine changes there: *Ich habe **einen** Bruder* but *Ich habe **eine** Schwester*.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a1.l04.familie',
        'v.a1.l04.vater',
        'v.a1.l04.mutter',
        'v.a1.l04.eltern',
        'v.a1.l04.bruder',
        'v.a1.l04.schwester',
        'v.a1.l04.geschwister',
        'v.a1.l04.sohn',
        'v.a1.l04.tochter',
        'v.a1.l04.kind',
        'v.a1.l04.grosseltern',
        'v.a1.l04.mann',
        'v.a1.l04.verheiratet',
        'v.a1.l04.ledig',
        'v.a1.l04.nett',
      ],
    },

    /* ── 3-4. Grammar ───────────────────────────────────────────────────── */
    { type: 'grammar', title: 'haben — to have', grammarId: 'g.a1.haben' },
    { type: 'grammar', title: 'mein, dein, sein, ihr', grammarId: 'g.a1.possessiv' },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l04.1',
          kind: 'article',
          noun: 'Schwester',
          answer: 'die',
          plural: 'die Schwestern',
          meaning: 'sister',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel'],
          explain:
            'Family words take the gender of the person: die Schwester, die Mutter, die Tochter are all die, while der Bruder, der Vater and der Sohn are all der.',
        },
        {
          id: 'x.a1.l04.2',
          kind: 'article',
          noun: 'Kind',
          answer: 'das',
          plural: 'die Kinder',
          meaning: 'child',
          skill: 'articles',
          difficulty: 2,
          tags: ['artikel'],
          hint: 'This is the one family word that breaks the male/female rule.',
          explain:
            'das Kind is neuter because German marks the word, not the person — a Kind can be a boy or a girl. Its plural die Kinder is one of the most common words in the language.',
        },
        {
          id: 'x.a1.l04.3',
          kind: 'blank',
          sentence: 'Ich ___ zwei Geschwister.',
          options: ['habe', 'hast', 'hat', 'haben'],
          answer: 'habe',
          skill: 'verbs',
          difficulty: 1,
          tags: ['praesens'],
          explain:
            'ich always takes the ending -e: ich habe. The endings -st and -t belong to du and er/sie/es, whatever the rest of the sentence looks like.',
        },
        {
          id: 'x.a1.l04.4',
          kind: 'blank',
          sentence: 'Das ist ___ Bruder. Er heißt Jonas.',
          options: ['mein', 'meine', 'meinen', 'meiner'],
          answer: 'mein',
          skill: 'grammar',
          difficulty: 1,
          tags: ['possessiv'],
          explain:
            'Possessives copy ein exactly, and der Bruder is masculine nominative — ein Bruder, so mein Bruder, with no ending at all.',
        },
        {
          id: 'x.a1.l04.5',
          kind: 'mcq',
          prompt: 'Frau Neumann has a daughter. Which sentence is correct?',
          options: [
            'Ihre Tochter ist zehn Jahre alt.',
            'Seine Tochter ist zehn Jahre alt.',
            'Ihr Tochter ist zehn Jahre alt.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['possessiv'],
          explain:
            'Two decisions, both needed: the owner is a woman, so the word is ihr, and die Tochter is feminine, so it adds -e — ihre Tochter.',
        },
        {
          id: 'x.a1.l04.6',
          kind: 'match',
          pairs: [
            ['die Eltern', 'parents'],
            ['die Geschwister', 'brothers and sisters'],
            ['die Großeltern', 'grandparents'],
            ['die Kinder', 'children'],
          ],
          skill: 'vocabulary',
          difficulty: 2,
          explain:
            'These four words are plural in German, so they take die and a plural verb: Meine Eltern wohnen in Bonn, not "wohnt".',
        },
        {
          id: 'x.a1.l04.7',
          kind: 'correct',
          wrong: 'Ich habe ein Bruder.',
          answer: 'Ich habe einen Bruder.',
          skill: 'cases',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'haben takes the accusative, and masculine is the only gender that changes shape there: ein → einen. Feminine and neuter stay as they are.',
        },
        {
          id: 'x.a1.l04.8',
          kind: 'conjugate',
          verb: 'haben',
          person: 'ihr',
          answer: 'habt',
          skill: 'verbs',
          difficulty: 2,
          tags: ['praesens'],
          explain:
            'ihr keeps the full stem and adds -t: ihr habt. Only du (hast) and er/sie/es (hat) drop the -b-.',
        },
        {
          id: 'x.a1.l04.9',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'My parents live in Hamburg and my sister is married.',
          answer: 'Meine Eltern wohnen in Hamburg und meine Schwester ist verheiratet.',
          skill: 'writing',
          difficulty: 3,
          tags: ['possessiv'],
          hint: 'Plural and feminine share one ending.',
          explain:
            'Eltern is plural and Schwester is feminine, and both take meine — plural and feminine always look identical with possessive articles.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l04.10',
          kind: 'order',
          tokens: ['ich', 'habe', 'zwei', 'Schwestern'],
          answer: 'Ich habe zwei Schwestern.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['wortstellung'],
          explain:
            'A plain statement starts with the subject and puts the conjugated verb straight after it: Ich habe … Everything else follows.',
        },
        {
          id: 'x.a1.l04.11',
          kind: 'order',
          tokens: ['meine', 'Schwester', 'ist', 'achtzehn', 'Jahre', 'alt'],
          answer: 'Meine Schwester ist achtzehn Jahre alt.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['possessiv', 'wortstellung'],
          explain:
            'Meine Schwester is one single subject, so the verb ist comes right after the whole phrase — an age always ends in the fixed order: Zahl + Jahre + alt.',
        },
        {
          id: 'x.a1.l04.12',
          kind: 'order',
          tokens: ['heute', 'haben', 'meine', 'Eltern', 'Zeit'],
          answer: 'Heute haben meine Eltern Zeit.',
          accept: ['Meine Eltern haben heute Zeit.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          explain:
            'Put the time word first and the subject has to move behind the verb: haben stays the second element of the sentence either way.',
        },
        {
          id: 'x.a1.l04.13',
          kind: 'order',
          tokens: ['am Samstag', 'haben', 'meine', 'Geschwister', 'und', 'ich', 'Zeit'],
          answer: 'Am Samstag haben meine Geschwister und ich Zeit.',
          accept: ['Meine Geschwister und ich haben am Samstag Zeit.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['wortstellung'],
          hint: '"Meine Geschwister und ich" is one subject — which person is that?',
          explain:
            '"… und ich" makes the subject a wir, so the verb is haben; and however long the subject is, the time phrase in front still leaves haben in position 2.',
        },
      ],
    },

    /* ── 7-9. Apply ─────────────────────────────────────────────────────── */
    { type: 'reading', title: 'Read: Meine Familie', readingId: 'r.a1.l04.meine-familie' },
    { type: 'listening', title: 'Listen: Hast du Geschwister?', listeningId: 'h.a1.l04.geschwister' },
    { type: 'conversation', title: 'Use it: the family photo', conversationId: 'c.a1.l04.familienfoto' },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l04.14',
          kind: 'blank',
          sentence: 'Meine Eltern ___ in Dresden.',
          options: ['wohnen', 'wohnt', 'wohne', 'wohnst'],
          answer: 'wohnen',
          skill: 'verbs',
          difficulty: 1,
          tags: ['praesens'],
          explain:
            'Eltern only exists in the plural, so it behaves like sie (they) and the verb takes -en: meine Eltern wohnen.',
        },
        {
          id: 'x.a1.l04.15',
          kind: 'article',
          noun: 'Bruder',
          answer: 'der',
          plural: 'die Brüder',
          meaning: 'brother',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel', 'plural'],
          explain:
            'Male family members are masculine: der Bruder, der Vater, der Sohn. Bruder, Vater and Mutter all build the plural with an umlaut and no extra ending: die Brüder, die Väter, die Mütter.',
        },
        {
          id: 'x.a1.l04.16',
          kind: 'mcq',
          prompt: 'Choose the correct sentence.',
          options: [
            'Mein Vater hat zwei Brüder.',
            'Mein Vater habt zwei Brüder.',
            'Meine Vater hat zwei Brüder.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['possessiv', 'praesens'],
          explain:
            'der Vater is masculine, so mein has no ending, and Vater counts as er, so the verb is hat. habt belongs to ihr only.',
        },
        {
          id: 'x.a1.l04.17',
          kind: 'dialogue',
          lines: [
            { who: 'Lena', text: 'Hast du Geschwister?' },
            { who: 'Du', text: '___' },
          ],
          options: [
            'Ja, ich habe einen Bruder.',
            'Ja, ich habe ein Bruder.',
            'Ja, ich bin einen Bruder.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'Answer a haben question with haben, and put what you have in the accusative — der Bruder becomes einen Bruder.',
        },
        {
          id: 'x.a1.l04.18',
          kind: 'listen',
          audio: 'Meine Schwester ist dreißig Jahre alt und hat zwei Kinder.',
          question: 'How old is the sister, and how many children does she have?',
          options: ['30 years old, two children', '13 years old, two children', '30 years old, three children'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['praesens'],
          explain:
            'dreißig (30) and dreizehn (13) differ only in the ending — the tens always end in -zig, the teens in -zehn.',
        },
        {
          id: 'x.a1.l04.19',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'His wife is very nice and they have three children.',
          answer: 'Seine Frau ist sehr nett und sie haben drei Kinder.',
          skill: 'writing',
          difficulty: 3,
          tags: ['possessiv', 'praesens'],
          hint: 'The owner picks the word, the noun picks the ending.',
          explain:
            'The owner is male, so the word is sein, and die Frau is feminine, so it adds -e: seine Frau. sie (they) takes haben, exactly like wir.',
        },
      ],
    },

    /* ── 11. Review ─────────────────────────────────────────────────────── */
    { type: 'review', title: 'Review', count: 3 },
  ],
}

export default lesson
