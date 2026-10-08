/**
 * A1 · L07 — Shopping and money / Einkaufen und Geld
 *
 * The lesson that gets the learner through a German till. Asking for a thing
 * (ein/eine), asking for an amount of it (ein Kilo, eine Flasche, eine
 * Packung), asking what it costs, and saying what you do NOT want — which is
 * where kein and nicht finally earn their keep.
 *
 * Exercise ids run x.a1.l07.1 … x.a1.l07.18 here; the reading owns 19-22 and
 * the listening 23-26.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l07',
  moduleId: 'a1.living',
  level: 'A1',
  order: 7,
  title: 'Shopping and money',
  titleDe: 'Einkaufen und Geld',
  icon: '🛒',
  summary:
    'Shop at the bakery, the market and the supermarket: ask for what you want, ask what it costs, name an amount and pay at the till in cash or by card.',
  minutes: 16,
  objectives: [
    'Ask what something costs and understand the answer',
    'Say how much you want: ein Kilo, eine Flasche, eine Packung',
    'Pay at the till — bar oder mit Karte',
    'Say what you do not want or need, with kein and nicht',
  ],
  vocabIds: [
    'v.a1.l07.supermarkt',
    'v.a1.l07.baeckerei',
    'v.a1.l07.kasse',
    'v.a1.l07.geld',
    'v.a1.l07.preis',
    'v.a1.l07.euro',
    'v.a1.l07.kaufen',
    'v.a1.l07.kosten',
    'v.a1.l07.brauchen',
    'v.a1.l07.bezahlen',
    'v.a1.l07.teuer',
    'v.a1.l07.billig',
    'v.a1.l07.kilo',
    'v.a1.l07.flasche',
    'v.a1.l07.packung',
    'v.a1.l07.tuete',
  ],
  grammarIds: ['g.a1.ein', 'g.a1.negation'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Buying things in German',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can walk into a German shop and get out again with what you wanted: ask for a thing, ask an **amount** of it, ask the price, and pay at the **Kasse**.',
        },
        {
          kind: 'examples',
          items: [
            { de: 'Haben Sie Kaffee?', en: 'Do you have coffee?', note: 'The standard way to ask whether a shop stocks something — no article after it.' },
            { de: 'Wie viel kostet das Brot?', en: 'How much does the bread cost?' },
            { de: 'Was kosten die Tomaten?', en: 'How much are the tomatoes?', note: 'Several things → kosten. One thing → kostet.' },
            { de: 'Ich nehme zwei Flaschen Wasser.', en: 'I will take two bottles of water.' },
            { de: 'Ich bezahle mit Karte.', en: 'I am paying by card.' },
          ],
        },
        {
          kind: 'table',
          head: ['Menge', 'Deutsch', 'English'],
          rows: [
            ['1 kg', 'ein Kilo Tomaten', 'a kilo of tomatoes'],
            ['1 l', 'eine Flasche Wasser', 'a bottle of water'],
            ['1 Pck.', 'eine Packung Kaffee', 'a packet of coffee'],
            ['4,90 €', 'vier Euro neunzig', 'four euros ninety'],
          ],
        },
        {
          kind: 'tip',
          text: 'German puts no *of* between the amount and the thing. The two nouns simply stand side by side: **ein Kilo Tomaten**, **eine Flasche Wasser**, **eine Packung Kaffee**.',
        },
        {
          kind: 'warn',
          text: 'Two questions come at every till. **Bar oder mit Karte?** — answer *bar* or *mit Karte*, never *ja*. **Brauchen Sie eine Tüte?** — answer *ja, bitte* or *nein, danke*.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a1.l07.supermarkt',
        'v.a1.l07.baeckerei',
        'v.a1.l07.kasse',
        'v.a1.l07.geld',
        'v.a1.l07.preis',
        'v.a1.l07.euro',
        'v.a1.l07.kaufen',
        'v.a1.l07.kosten',
        'v.a1.l07.brauchen',
        'v.a1.l07.bezahlen',
        'v.a1.l07.teuer',
        'v.a1.l07.billig',
        'v.a1.l07.kilo',
        'v.a1.l07.flasche',
        'v.a1.l07.packung',
        'v.a1.l07.tuete',
      ],
    },

    /* ── 3. Grammar: ein / eine ─────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'ein and eine',
      grammarId: 'g.a1.ein',
    },

    /* ── 4. Grammar: nicht / kein ───────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'nicht and kein',
      grammarId: 'g.a1.negation',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l07.1',
          kind: 'article',
          noun: 'Kasse',
          answer: 'die',
          plural: 'die Kassen',
          meaning: 'till, checkout',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel'],
          explain: 'Nouns ending in an unstressed -e are feminine in the vast majority of cases: die Kasse, die Flasche, die Tüte.',
        },
        {
          id: 'x.a1.l07.2',
          kind: 'blank',
          sentence: 'Wie viel ___ das Brot?',
          options: ['kostet', 'kosten', 'kostest', 'koste'],
          answer: 'kostet',
          skill: 'verbs',
          difficulty: 1,
          tags: ['praesens'],
          explain: 'One thing is the subject (das Brot = es), so the verb takes -t: kostet. Several things would give kosten.',
        },
        {
          id: 'x.a1.l07.3',
          kind: 'match',
          pairs: [
            ['ein Kilo Tomaten', 'a kilo of tomatoes'],
            ['eine Flasche Wasser', 'a bottle of water'],
            ['eine Packung Kaffee', 'a packet of coffee'],
            ['eine Tüte', 'a carrier bag'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain: 'Amounts are built by putting two nouns next to each other — German needs no word for "of" between them.',
        },
        {
          id: 'x.a1.l07.4',
          kind: 'blank',
          sentence: 'Ich brauche ___ Tüte, bitte.',
          options: ['eine', 'ein', 'einen'],
          answer: 'eine',
          skill: 'articles',
          difficulty: 2,
          tags: ['artikel'],
          explain: 'die Tüte is feminine, and feminine nouns keep eine as the object too. Only masculine ein changes to einen.',
        },
        {
          id: 'x.a1.l07.5',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Ich habe kein Kleingeld.',
            'Ich habe nicht Kleingeld.',
            'Ich habe keine Kleingeld.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['negation'],
          explain: 'A noun with no article is negated with kein-, not nicht. das Kleingeld is neuter, so the form stays kein with no ending.',
        },
        {
          id: 'x.a1.l07.6',
          kind: 'dialogue',
          lines: [
            { who: 'Kassiererin', text: 'Das macht zwölf Euro fünfzig. Bar oder mit Karte?' },
            { who: 'Sie', text: '___' },
          ],
          options: ['Mit Karte, bitte.', 'Ja, bitte.', 'Ich nehme eine Karte.'],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          explain: 'Bar oder mit Karte? offers you two options, so ja answers nothing. The fixed phrases are bar bezahlen and mit Karte bezahlen.',
        },
        {
          id: 'x.a1.l07.7',
          kind: 'correct',
          wrong: 'Ich habe nicht Geld.',
          answer: 'Ich habe kein Geld.',
          skill: 'grammar',
          difficulty: 2,
          tags: ['negation'],
          explain: 'Geld stands without an article, and article-less nouns take kein-. nicht would only work on a verb, an adjective or a der/mein noun.',
        },
        {
          id: 'x.a1.l07.8',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'How much does a kilo of apples cost?',
          answer: 'Wie viel kostet ein Kilo Äpfel?',
          accept: ['Was kostet ein Kilo Äpfel?'],
          skill: 'writing',
          difficulty: 3,
          tags: ['w-fragen'],
          hint: 'The subject is ein Kilo — one thing.',
          explain: 'The subject is ein Kilo, not the apples, so the verb stays singular: kostet. And nothing stands between Kilo and Äpfel.',
        },
      ],
    },

    /* ── 6. Build the sentence ──────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l07.9',
          kind: 'order',
          tokens: ['ich', 'brauche', 'eine', 'Flasche', 'Wasser'],
          answer: 'Ich brauche eine Flasche Wasser.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['wortstellung'],
          explain: 'Subject first, conjugated verb second, then what you need. The amount (eine Flasche) comes before the product (Wasser).',
        },
        {
          id: 'x.a1.l07.10',
          kind: 'order',
          tokens: ['was', 'kostet', 'ein', 'Kilo', 'Tomaten'],
          answer: 'Was kostet ein Kilo Tomaten?',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['w-fragen', 'wortstellung'],
          explain: 'In a W-question the question word is first and the verb still sits in position 2 — the subject ein Kilo Tomaten follows it.',
        },
        {
          id: 'x.a1.l07.11',
          kind: 'order',
          tokens: ['heute', 'ist', 'das', 'Brot', 'sehr', 'billig'],
          answer: 'Heute ist das Brot sehr billig.',
          accept: ['Das Brot ist heute sehr billig.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          explain: 'Put heute in front and the subject das Brot has to move behind the verb — because ist keeps position 2 no matter what opens the sentence.',
        },
        {
          id: 'x.a1.l07.12',
          kind: 'order',
          tokens: ['am Samstag', 'kaufe', 'ich', 'im Supermarkt', 'eine', 'Packung', 'Kaffee'],
          answer: 'Am Samstag kaufe ich im Supermarkt eine Packung Kaffee.',
          accept: ['Ich kaufe am Samstag im Supermarkt eine Packung Kaffee.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['wortstellung'],
          hint: 'Time before place, and the verb never moves from position 2.',
          explain: 'Am Samstag counts as one single element, so kaufe is still the second one and ich drops behind it. Time (am Samstag) comes before place (im Supermarkt).',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read',
      readingId: 'r.a1.l07.einkaufsliste',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen',
      listeningId: 'h.a1.l07.im-supermarkt',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it',
      conversationId: 'c.a1.l07.einkaufen',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l07.13',
          kind: 'article',
          noun: 'Preis',
          answer: 'der',
          plural: 'die Preise',
          meaning: 'price',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel'],
          explain: 'Short one-syllable nouns like der Preis, der Markt and der Euro are usually masculine — and they take the -e plural: die Preise.',
        },
        {
          id: 'x.a1.l07.14',
          kind: 'blank',
          sentence: 'Der Kaffee ist zu teuer. Ich kaufe ___ Kaffee.',
          options: ['keinen', 'kein', 'keine', 'nicht'],
          answer: 'keinen',
          skill: 'grammar',
          difficulty: 2,
          tags: ['negation'],
          explain: 'kein copies the endings of ein, and der Kaffee is the object of kaufen — so masculine ein/kein becomes einen/keinen.',
        },
        {
          id: 'x.a1.l07.15',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: ['Haben Sie eine Tüte?', 'Haben Sie ein Tüte?', 'Haben Sie einen Tüte?'],
          answer: 0,
          skill: 'articles',
          difficulty: 2,
          tags: ['artikel'],
          explain: 'die Tüte is feminine, so it takes eine — and feminine never changes for the object, unlike masculine ein → einen.',
        },
        {
          id: 'x.a1.l07.16',
          kind: 'listen',
          audio: 'Ein Kilo Tomaten kostet zwei Euro fünfzig.',
          question: 'What does a kilo of tomatoes cost?',
          options: ['2,50 €', '2,15 €', '1,50 €'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          explain: 'German reads prices as euros first, then cents, with no word for the comma: zwei Euro fünfzig = 2,50 €.',
        },
        {
          id: 'x.a1.l07.17',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I do not need a bag. I pay in cash.',
          answer: 'Ich brauche keine Tüte. Ich bezahle bar.',
          accept: ['Ich brauche keine Tüte. Ich zahle bar.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['negation'],
          hint: 'Which word does the negation belong to — the verb or the noun?',
          explain: 'The negation hits the noun eine Tüte, so ein- turns into kein-: keine Tüte. And bar needs no preposition, unlike mit Karte.',
        },
        {
          id: 'x.a1.l07.18',
          kind: 'correct',
          wrong: 'Wie viel kostet die Äpfel?',
          answer: 'Wie viel kosten die Äpfel?',
          skill: 'verbs',
          difficulty: 3,
          tags: ['praesens'],
          explain: 'die Äpfel is plural, and a plural subject takes the -en form: kosten. Only a single item gets kostet.',
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
