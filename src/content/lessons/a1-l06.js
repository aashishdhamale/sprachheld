/**
 * A1 · L06 — Food, drinks and the restaurant / Essen, Trinken und im Restaurant
 *
 * The lesson where the accusative finally has a job to do. Everything a guest
 * needs in a German restaurant — asking for the menu, ordering a drink and a
 * main course, saying the food is good, asking for the bill — and all of it
 * runs through one small change: der becomes den.
 *
 * Exercise ids run x.a1.l06.1 … x.a1.l06.19 here; the reading owns 20-23 and
 * the listening 24-27.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l06',
  moduleId: 'a1.living',
  level: 'A1',
  order: 6,
  title: 'Food, drinks and the restaurant',
  titleDe: 'Essen, Trinken und im Restaurant',
  icon: '🍽️',
  summary:
    'Order lunch in German from start to finish: ask for the menu, choose a drink and a main course, say how it tastes and ask for the bill — practising the accusative on every plate.',
  minutes: 16,
  objectives: [
    'Order food and drinks politely with möchte and nehmen',
    'Use the accusative after bestellen, nehmen, möchten and essen',
    'Say whether something tastes good: Das schmeckt sehr lecker.',
    'Ask for the menu and the bill in a restaurant',
  ],
  vocabIds: [
    'v.a1.l06.brot',
    'v.a1.l06.broetchen',
    'v.a1.l06.apfel',
    'v.a1.l06.suppe',
    'v.a1.l06.salat',
    'v.a1.l06.mittagessen',
    'v.a1.l06.kaffee',
    'v.a1.l06.wasser',
    'v.a1.l06.saft',
    'v.a1.l06.speisekarte',
    'v.a1.l06.rechnung',
    'v.a1.l06.kellner',
    'v.a1.l06.bestellen',
    'v.a1.l06.moechten',
    'v.a1.l06.schmecken',
    'v.a1.l06.lecker',
  ],
  grammarIds: ['g.a1.akkusativ', 'g.a1.artikel'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'A whole lunch in German',
      blocks: [
        {
          kind: 'text',
          text: 'After this lesson you can walk into a German restaurant alone: ask for **die Speisekarte**, order a drink and a main course, say the food is good and ask for **die Rechnung**. Almost every one of those sentences has an **object** — and objects stand in the accusative.',
        },
        {
          kind: 'table',
          head: ['Situation', 'Deutsch', 'English'],
          rows: [
            ['Asking for the menu', 'Die Speisekarte, bitte.', 'The menu, please.'],
            ['Ordering a drink', 'Ich möchte einen Kaffee.', 'I would like a coffee.'],
            ['Ordering food', 'Ich nehme den Salat.', 'I will take the salad.'],
            ['Saying it is good', 'Das schmeckt sehr lecker.', 'That tastes delicious.'],
            ['Asking to pay', 'Die Rechnung, bitte.', 'The bill, please.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Ich möchte einen Kaffee und ein Wasser.',
              en: 'I would like a coffee and a water.',
              note: 'der Kaffee → einen Kaffee, but das Wasser stays ein Wasser.',
            },
            {
              de: 'Wir bestellen die Suppe und den Salat.',
              en: 'We are ordering the soup and the salad.',
              note: 'Only the masculine changes: die Suppe stays die, der Salat becomes den.',
            },
            {
              de: 'Der Kellner bringt die Rechnung.',
              en: 'The waiter brings the bill.',
            },
            {
              de: 'Das Brot schmeckt heute wirklich lecker.',
              en: 'The bread really tastes delicious today.',
              note: 'The food is the subject of schmecken — never "ich schmecke".',
            },
          ],
        },
        {
          kind: 'tip',
          text: '**möchte** is the polite word for everything you want. It has no *-t* in the *ich* and *er* forms: *ich möchte*, *du möchtest*, *er möchte*.',
        },
        {
          kind: 'warn',
          text: 'Only **der → den** changes. *die* and *das* look exactly the same as objects, so never say *einen Suppe* or *den Brot*.',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a1.l06.brot',
        'v.a1.l06.broetchen',
        'v.a1.l06.apfel',
        'v.a1.l06.suppe',
        'v.a1.l06.salat',
        'v.a1.l06.mittagessen',
        'v.a1.l06.kaffee',
        'v.a1.l06.wasser',
        'v.a1.l06.saft',
        'v.a1.l06.speisekarte',
        'v.a1.l06.rechnung',
        'v.a1.l06.kellner',
        'v.a1.l06.bestellen',
        'v.a1.l06.moechten',
        'v.a1.l06.schmecken',
        'v.a1.l06.lecker',
      ],
    },

    /* ── 3. Grammar: the accusative ─────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'The accusative case',
      grammarId: 'g.a1.akkusativ',
    },

    /* ── 4. Grammar: der, die, das ──────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'der, die, das',
      grammarId: 'g.a1.artikel',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l06.1',
          kind: 'article',
          noun: 'Speisekarte',
          answer: 'die',
          plural: 'die Speisekarten',
          meaning: 'menu',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel'],
          explain:
            'A compound noun takes the gender of its last part: die Karte → die Speisekarte. Nouns ending in -e are feminine and add -n in the plural.',
        },
        {
          id: 'x.a1.l06.2',
          kind: 'blank',
          sentence: 'Ich möchte ___ Suppe, bitte.',
          options: ['die', 'den', 'das', 'dem'],
          answer: 'die',
          skill: 'cases',
          difficulty: 1,
          tags: ['akkusativ'],
          explain:
            'The soup is what you want, so it is the object — but feminine nouns look identical in the accusative, so die Suppe stays die Suppe.',
        },
        {
          id: 'x.a1.l06.3',
          kind: 'match',
          pairs: [
            ['das Brot', 'bread'],
            ['der Apfel', 'apple'],
            ['die Rechnung', 'the bill'],
            ['der Kellner', 'the waiter'],
            ['die Speisekarte', 'the menu'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          tags: ['artikel'],
          explain:
            'Learn every noun together with its article — the gender is part of the word, and you cannot guess it from the English meaning.',
        },
        {
          id: 'x.a1.l06.4',
          kind: 'blank',
          sentence: 'Der Kellner bringt ___ Salat.',
          options: ['den', 'der', 'das', 'dem'],
          answer: 'den',
          skill: 'cases',
          difficulty: 2,
          tags: ['akkusativ'],
          hint: 'Ask: wen oder was bringt der Kellner?',
          explain:
            'The salad is what gets brought, so it is the object, and masculine der is the one article that becomes den.',
        },
        {
          id: 'x.a1.l06.5',
          kind: 'mcq',
          prompt: 'Choose the correct sentence.',
          options: ['Ich bestelle den Saft.', 'Ich bestelle der Saft.', 'Ich bestelle dem Saft.'],
          answer: 0,
          skill: 'cases',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'bestellen always takes an accusative object, and der Saft is masculine, so it turns into den Saft. dem would be dative, which you do not need yet.',
        },
        {
          id: 'x.a1.l06.6',
          kind: 'correct',
          wrong: 'Der Kellner bringt der Kaffee.',
          answer: 'Der Kellner bringt den Kaffee.',
          skill: 'cases',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'There are two nouns here: der Kellner does the bringing (nominative) and der Kaffee gets brought (accusative) — so only the second one changes to den.',
        },
        {
          id: 'x.a1.l06.7',
          kind: 'conjugate',
          verb: 'möchten',
          person: 'du',
          answer: 'möchtest',
          skill: 'verbs',
          difficulty: 2,
          tags: ['modalverben'],
          explain:
            'möchten keeps the normal endings for du and ihr (möchtest, möchtet), but ich and er share one bare form: möchte.',
        },
        {
          id: 'x.a1.l06.8',
          kind: 'dialogue',
          lines: [
            { who: 'Kellner', text: 'Und was möchten Sie essen?' },
            { who: 'Gast', text: '___' },
          ],
          options: [
            'Ich nehme den Salat und eine Suppe.',
            'Ich nehme der Salat und eine Suppe.',
            'Ich nehme dem Salat und eine Suppe.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 3,
          tags: ['akkusativ'],
          explain:
            'Both nouns are objects of nehmen, but only the masculine reacts: der Salat → den Salat, while feminine eine Suppe stays as it is.',
        },
        {
          id: 'x.a1.l06.9',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I am ordering the salad and a coffee.',
          answer: 'Ich bestelle den Salat und einen Kaffee.',
          skill: 'writing',
          difficulty: 3,
          tags: ['akkusativ'],
          hint: 'Two masculine words in a row — one with der, one with ein.',
          explain:
            'Both articles carry the same accusative -n: der → den and ein → einen. German has only one present tense, so "I am ordering" is simply ich bestelle.',
        },
      ],
    },

    /* ── 6. Build the sentence ──────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l06.10',
          kind: 'order',
          tokens: ['ich', 'möchte', 'einen', 'Kaffee'],
          answer: 'Ich möchte einen Kaffee.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['akkusativ'],
          explain:
            'The basic order is subject – verb – object. möchte sits in position 2, and the object follows it in the accusative.',
        },
        {
          id: 'x.a1.l06.11',
          kind: 'order',
          tokens: ['der', 'Kellner', 'bringt', 'die', 'Speisekarte'],
          answer: 'Der Kellner bringt die Speisekarte.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'Position tells you the role: whoever stands before the verb is the subject, and what follows it is the object — so der Kellner cannot swap places with die Speisekarte.',
        },
        {
          id: 'x.a1.l06.12',
          kind: 'order',
          tokens: ['am Mittag', 'esse', 'ich', 'immer', 'eine', 'Suppe'],
          answer: 'Am Mittag esse ich immer eine Suppe.',
          accept: ['Ich esse am Mittag immer eine Suppe.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['akkusativ', 'wortstellung'],
          hint: 'If the time phrase opens the sentence, what has to come next?',
          explain:
            'A time phrase may take first place, but the conjugated verb esse still has to be the second element — so the subject ich jumps behind it.',
        },
        {
          id: 'x.a1.l06.13',
          kind: 'order',
          tokens: ['zum Frühstück', 'trinke', 'ich', 'einen', 'Kaffee', 'und', 'esse', 'ein', 'Brötchen'],
          answer: 'Zum Frühstück trinke ich einen Kaffee und esse ein Brötchen.',
          accept: ['Ich trinke zum Frühstück einen Kaffee und esse ein Brötchen.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['akkusativ', 'wortstellung'],
          hint: 'und joins two halves; the subject ich is only said once.',
          explain:
            'Verb in position 2 again, and the two objects show the contrast: masculine einen Kaffee takes -en, neuter ein Brötchen does not change at all.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read',
      readingId: 'r.a1.l06.mittagskarte',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen',
      listeningId: 'h.a1.l06.im-cafe',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it',
      conversationId: 'c.a1.l06.mittagessen',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l06.14',
          kind: 'article',
          noun: 'Apfel',
          answer: 'der',
          plural: 'die Äpfel',
          meaning: 'apple',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel'],
          explain:
            'Apfel is masculine, which is why it becomes einen Apfel as an object. Many short masculine words take an umlaut in the plural: Apfel → Äpfel.',
        },
        {
          id: 'x.a1.l06.15',
          kind: 'blank',
          sentence: 'Wir bestellen ___ Brot und einen Salat.',
          options: ['das', 'den', 'der', 'dem'],
          answer: 'das',
          skill: 'cases',
          difficulty: 2,
          tags: ['akkusativ'],
          explain:
            'das Brot is neuter, and neuter is identical in the accusative. The einen next to it proves the point — only the masculine Salat had to change.',
        },
        {
          id: 'x.a1.l06.16',
          kind: 'mcq',
          prompt: 'Choose the correct sentence.',
          options: [
            'Ich möchte die Rechnung, bitte.',
            'Ich möchte den Rechnung, bitte.',
            'Ich möchte dem Rechnung, bitte.',
          ],
          answer: 0,
          skill: 'cases',
          difficulty: 2,
          tags: ['akkusativ', 'artikel'],
          explain:
            'Nouns in -ung are always feminine, and feminine never changes in the accusative — so do not spread the -n of den around.',
        },
        {
          id: 'x.a1.l06.17',
          kind: 'blank',
          sentence: 'Der Kaffee ___ heute sehr gut.',
          answer: 'schmeckt',
          skill: 'verbs',
          difficulty: 2,
          tags: ['praesens'],
          hint: 'schmecken',
          explain:
            'The coffee is the subject, so schmecken takes the er/sie/es ending -t. In German the food does the tasting, not the person.',
        },
        {
          id: 'x.a1.l06.18',
          kind: 'correct',
          wrong: 'Ich möchte ein Apfel, bitte.',
          answer: 'Ich möchte einen Apfel, bitte.',
          skill: 'cases',
          difficulty: 3,
          tags: ['akkusativ'],
          explain:
            'möchten takes an accusative object and Apfel is masculine, so ein has to gain the -en: einen Apfel.',
        },
        {
          id: 'x.a1.l06.19',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Excuse me, where is the menu? I would like to order.',
          answer: 'Entschuldigung, wo ist die Speisekarte? Ich möchte bestellen.',
          accept: ['Entschuldigung, wo ist die Speisekarte? Ich möchte gern bestellen.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['akkusativ'],
          hint: 'After möchte the second verb stays in the infinitive and goes to the end.',
          explain:
            'die Speisekarte is the subject of ist, so it stays nominative; and möchte sends its partner verb bestellen to the end of the sentence unchanged.',
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
