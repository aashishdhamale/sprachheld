/**
 * A1 — Articles and plurals.
 *
 *   g.a1.artikel  der, die, das      (lesson a1.l06)
 *   g.a1.ein      ein and eine       (lesson a1.l07)
 *   g.a1.plural   Making plurals     (lesson a1.l08)
 *
 * Plain data only — see SCHEMA.md.
 */

export const grammar = [
  /* ─────────────────────────────────────────────────────────────────────────
     1. der, die, das
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'g.a1.artikel',
    level: 'A1',
    title: 'der, die, das',
    titleDe: 'Der bestimmte Artikel',
    short: 'Every German noun carries a gender — learn the article together with the word.',
    tags: ['artikel', 'nominativ'],
    skill: 'articles',
    difficulty: 1,
    explain: [
      {
        kind: 'text',
        text: 'German nouns are **der**, **die** or **das**. The gender belongs to the word, not to its meaning, so learn `der Schlüssel` — never just `Schlüssel`.',
      },
      {
        kind: 'table',
        head: ['Gender', 'Article', 'Everyday examples'],
        rows: [
          ['masculine', 'der', 'der Schlüssel, der Termin, der Bahnhof'],
          ['feminine', 'die', 'die Rechnung, die Wohnung, die Kollegin'],
          ['neuter', 'das', 'das Handy, das Büro, das Zimmer'],
          ['plural (all genders)', 'die', 'die Schlüssel, die Rechnungen, die Büros'],
        ],
      },
      {
        kind: 'tip',
        text: 'Word endings help: **-ung, -heit, -keit, -ion, -in** are always *die*; **-chen, -lein** are always *das*.',
      },
      {
        kind: 'warn',
        text: 'One article covers the whole plural: **die**, whatever the singular gender was.',
      },
    ],
    examples: [
      { de: 'Der Kaffee ist noch heiß.', en: 'The coffee is still hot.' },
      {
        de: 'Die Rechnung kommt per E-Mail.',
        en: 'The bill comes by email.',
        note: 'Rechnung ends in -ung, so it is feminine.',
      },
      { de: 'Das Büro ist heute geschlossen.', en: 'The office is closed today.' },
      {
        de: 'Die Kollegen sind schon da.',
        en: 'The colleagues are already here.',
        note: 'Plural — always die.',
      },
    ],
    pitfalls: [
      {
        wrong: 'Das Rechnung ist falsch.',
        right: 'Die Rechnung ist falsch.',
        why: 'Nouns ending in -ung are feminine without exception, so they take die.',
      },
      {
        wrong: 'Die Mädchen ist nett.',
        right: 'Das Mädchen ist nett.',
        why: 'The ending -chen makes a noun neuter, even when it means a female person. Grammatical gender is not biological gender.',
      },
      {
        wrong: 'Wo ist Bahnhof?',
        right: 'Wo ist der Bahnhof?',
        why: 'German almost never drops the article in front of a singular countable noun.',
      },
    ],
    exerciseIds: [
      'x.g.a1.artikel.1',
      'x.g.a1.artikel.2',
      'x.g.a1.artikel.3',
      'x.g.a1.artikel.4',
      'x.g.a1.artikel.5',
      'x.g.a1.artikel.6',
      'x.g.a1.artikel.7',
      'x.g.a1.artikel.8',
      'x.g.a1.artikel.9',
    ],
    exercises: [
      {
        id: 'x.g.a1.artikel.1',
        kind: 'article',
        noun: 'Schlüssel',
        answer: 'der',
        plural: 'die Schlüssel',
        meaning: 'key',
        skill: 'articles',
        difficulty: 1,
        tags: ['artikel'],
        explain:
          'Nouns ending in -el are usually masculine, and -el/-er/-en nouns keep the same form in the plural — only the article changes to die.',
      },
      {
        id: 'x.g.a1.artikel.2',
        kind: 'article',
        noun: 'Rechnung',
        answer: 'die',
        plural: 'die Rechnungen',
        meaning: 'bill, invoice',
        skill: 'articles',
        difficulty: 1,
        tags: ['artikel'],
        explain: 'Every noun ending in -ung is feminine, and they all build the plural with -en.',
      },
      {
        id: 'x.g.a1.artikel.3',
        kind: 'blank',
        sentence: 'Entschuldigung, wo ist ___ Bahnhof?',
        options: ['der', 'die', 'das'],
        answer: 'der',
        skill: 'articles',
        difficulty: 2,
        tags: ['artikel', 'nominativ'],
        hint: 'Bahnhof, Supermarkt, Termin — all masculine.',
        explain:
          'Bahnhof is masculine, and after "wo ist" the noun is the subject of the sentence, so it stays in the nominative: der Bahnhof.',
      },
      {
        id: 'x.g.a1.artikel.4',
        kind: 'mcq',
        prompt: 'Choose the correct sentence.',
        options: ['Das Wohnung ist klein.', 'Die Wohnung ist klein.', 'Der Wohnung ist klein.'],
        answer: 1,
        skill: 'articles',
        difficulty: 2,
        tags: ['artikel'],
        explain: 'Wohnung ends in -ung, and -ung nouns are always feminine: die Wohnung.',
      },
      {
        id: 'x.g.a1.artikel.5',
        kind: 'match',
        pairs: [
          ['der Löffel', 'spoon'],
          ['die Gabel', 'fork'],
          ['das Messer', 'knife'],
          ['die Tasse', 'cup'],
        ],
        skill: 'articles',
        difficulty: 2,
        tags: ['artikel'],
        explain:
          'Things on the same table can have three different genders — there is no rule you can hear, so store the article with the word from day one.',
      },
      {
        id: 'x.g.a1.artikel.6',
        kind: 'order',
        tokens: ['der', 'Arzt', 'kommt', 'gleich'],
        answer: 'Der Arzt kommt gleich.',
        accept: ['Gleich kommt der Arzt.'],
        skill: 'wordorder',
        difficulty: 2,
        tags: ['artikel', 'wortstellung'],
        explain:
          'The article stands directly in front of its noun, and the conjugated verb keeps position 2 — so "der Arzt" moves as one block.',
      },
      {
        id: 'x.g.a1.artikel.7',
        kind: 'correct',
        wrong: 'Das Kollegin heißt Sabine.',
        answer: 'Die Kollegin heißt Sabine.',
        skill: 'articles',
        difficulty: 2,
        tags: ['artikel'],
        explain:
          'The ending -in makes a job title feminine (der Kollege → die Kollegin), and feminine nouns take die.',
      },
      {
        id: 'x.g.a1.artikel.8',
        kind: 'mcq',
        prompt: 'All three nouns end in -ung. Which line has the right articles?',
        options: [
          'der Zeitung – die Wohnung – das Rechnung',
          'die Zeitung – die Wohnung – die Rechnung',
          'das Zeitung – der Wohnung – die Rechnung',
        ],
        answer: 1,
        skill: 'articles',
        difficulty: 3,
        tags: ['artikel'],
        explain:
          'The ending decides, not the meaning: -ung is feminine every single time, so all three nouns take die.',
      },
      {
        id: 'x.g.a1.artikel.9',
        kind: 'article',
        noun: 'Handy',
        answer: 'das',
        plural: 'die Handys',
        meaning: 'mobile phone',
        skill: 'articles',
        difficulty: 3,
        tags: ['artikel'],
        explain:
          'Loan words ending in -y are neuter in German: das Handy, das Baby, das Hobby — and they take the -s plural.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     2. ein and eine
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'g.a1.ein',
    level: 'A1',
    title: 'ein and eine',
    titleDe: 'Der unbestimmte Artikel',
    short: 'Use ein or eine when you name something for the first time — a coffee, an appointment, a flat.',
    tags: ['artikel'],
    skill: 'articles',
    difficulty: 1,
    explain: [
      {
        kind: 'text',
        text: 'There are only two forms to learn: **eine** for die-words, **ein** for der-words and das-words.',
      },
      {
        kind: 'table',
        head: ['', 'definite', 'indefinite'],
        rows: [
          ['der Termin', 'der Termin', 'ein Termin'],
          ['das Zimmer', 'das Zimmer', 'ein Zimmer'],
          ['die Frage', 'die Frage', 'eine Frage'],
          ['plural', 'die Fragen', 'Fragen (no article)'],
        ],
      },
      {
        kind: 'text',
        text: 'As the object of a verb like `haben`, `brauchen`, `suchen` or `möchten`, only the masculine changes: ein → **einen**.',
      },
      {
        kind: 'warn',
        text: 'ein/eine has no plural. *Ich habe eine Frage* → *Ich habe Fragen.*',
      },
    ],
    examples: [
      {
        de: 'Ich brauche einen Termin.',
        en: 'I need an appointment.',
        note: 'der Termin → einen after brauchen.',
      },
      { de: 'Wir suchen eine Wohnung in Köln.', en: 'We are looking for a flat in Cologne.' },
      { de: 'Hier ist ein Formular für Sie.', en: 'Here is a form for you.' },
      { de: 'Möchten Sie einen Kaffee oder einen Tee?', en: 'Would you like a coffee or a tea?' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe ein Termin.',
        right: 'Ich habe einen Termin.',
        why: 'haben takes an object, and masculine ein becomes einen there. Only the masculine changes — die- and das-words stay eine and ein.',
      },
      {
        wrong: 'Ich suche eine Zimmer.',
        right: 'Ich suche ein Zimmer.',
        why: 'Zimmer is a das-word, and das-words take ein. eine belongs to die-words only.',
      },
      {
        wrong: 'Ich habe eine Fragen.',
        right: 'Ich habe Fragen.',
        why: 'There is no plural of ein/eine — in the plural the noun simply stands alone.',
      },
    ],
    exerciseIds: [
      'x.g.a1.ein.1',
      'x.g.a1.ein.2',
      'x.g.a1.ein.3',
      'x.g.a1.ein.4',
      'x.g.a1.ein.5',
      'x.g.a1.ein.6',
      'x.g.a1.ein.7',
      'x.g.a1.ein.8',
      'x.g.a1.ein.9',
    ],
    exercises: [
      {
        id: 'x.g.a1.ein.1',
        kind: 'blank',
        sentence: 'Ich möchte ___ Wasser, bitte.',
        options: ['ein', 'eine', 'einen'],
        answer: 'ein',
        skill: 'articles',
        difficulty: 1,
        tags: ['artikel'],
        explain: 'Wasser is a das-word, and das-words take ein — as subject and as object.',
      },
      {
        id: 'x.g.a1.ein.2',
        kind: 'blank',
        sentence: 'Haben Sie ___ Frage?',
        options: ['eine', 'ein', 'einen'],
        answer: 'eine',
        skill: 'articles',
        difficulty: 1,
        tags: ['artikel'],
        explain: 'die Frage is feminine, and the feminine form eine never changes after a verb.',
      },
      {
        id: 'x.g.a1.ein.3',
        kind: 'blank',
        sentence: 'Ich brauche ___ Termin am Montag.',
        options: ['einen', 'ein', 'eine'],
        answer: 'einen',
        skill: 'articles',
        difficulty: 2,
        tags: ['artikel'],
        hint: 'The Termin is what you need — it is the object of brauchen.',
        explain:
          'der Termin is masculine, and as the object of brauchen the masculine ein becomes einen.',
      },
      {
        id: 'x.g.a1.ein.4',
        kind: 'mcq',
        prompt: 'Choose the correct sentence.',
        options: [
          'Wir suchen eine Wohnung.',
          'Wir suchen ein Wohnung.',
          'Wir suchen einen Wohnung.',
        ],
        answer: 0,
        skill: 'articles',
        difficulty: 2,
        tags: ['artikel'],
        explain:
          'die Wohnung is feminine, and eine stays eine as an object — the -n ending exists only for masculine nouns.',
      },
      {
        id: 'x.g.a1.ein.5',
        kind: 'correct',
        wrong: 'Das ist eine Handy.',
        answer: 'Das ist ein Handy.',
        skill: 'articles',
        difficulty: 2,
        tags: ['artikel'],
        explain: 'das Handy is neuter, so it takes ein. eine goes only with die-words.',
      },
      {
        id: 'x.g.a1.ein.6',
        kind: 'order',
        tokens: ['ich', 'habe', 'einen', 'Termin', 'um', 'zehn'],
        answer: 'Ich habe einen Termin um zehn.',
        accept: ['Um zehn habe ich einen Termin.'],
        skill: 'wordorder',
        difficulty: 2,
        tags: ['artikel', 'wortstellung'],
        explain:
          'einen belongs in front of Termin as one block, and the verb habe stays in position 2 even if the time phrase comes first.',
      },
      {
        id: 'x.g.a1.ein.7',
        kind: 'dialogue',
        lines: [
          { who: 'Kellner', text: 'Guten Tag! Was möchten Sie?' },
          { who: 'Gast', text: '___' },
        ],
        options: ['Einen Kaffee, bitte.', 'Ein Kaffee, bitte.', 'Eine Kaffee, bitte.'],
        answer: 0,
        skill: 'conversation',
        difficulty: 2,
        tags: ['artikel'],
        explain:
          'You are ordering the coffee, so it is the object: der Kaffee becomes einen Kaffee. This is why waiters hear "einen Kaffee, bitte" all day.',
      },
      {
        id: 'x.g.a1.ein.8',
        kind: 'translate',
        direction: 'en-de',
        prompt: 'I am looking for a supermarket.',
        answer: 'Ich suche einen Supermarkt.',
        skill: 'writing',
        difficulty: 3,
        tags: ['artikel'],
        explain:
          'German uses the simple present for "I am looking": ich suche. The supermarket is the object, so masculine der Supermarkt becomes einen Supermarkt.',
      },
      {
        id: 'x.g.a1.ein.9',
        kind: 'mcq',
        prompt: 'How do you say "We have questions."?',
        options: ['Wir haben Fragen.', 'Wir haben eine Fragen.', 'Wir haben einen Fragen.'],
        answer: 0,
        skill: 'articles',
        difficulty: 3,
        tags: ['artikel', 'plural'],
        explain:
          'ein/eine has no plural form, so a plural noun stands with no article at all — where English says "some", German says nothing.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     3. Making plurals
     ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'g.a1.plural',
    level: 'A1',
    title: 'Making plurals',
    titleDe: 'Der Plural',
    short: 'Five endings cover almost every German plural — and every plural takes die.',
    tags: ['plural'],
    skill: 'vocabulary',
    difficulty: 2,
    explain: [
      {
        kind: 'text',
        text: 'German plurals are not predictable from the singular, so learn both forms together: `das Kind, die Kinder`. Five endings cover almost everything.',
      },
      {
        kind: 'table',
        head: ['Ending', 'Singular', 'Plural'],
        rows: [
          ['-e (often + Umlaut)', 'der Stuhl', 'die Stühle'],
          ['-(e)n', 'die Frage', 'die Fragen'],
          ['-er (often + Umlaut)', 'das Kind', 'die Kinder'],
          ['-s (loan words)', 'das Handy', 'die Handys'],
          ['no ending', 'das Zimmer', 'die Zimmer'],
        ],
      },
      {
        kind: 'tip',
        text: 'Feminine nouns are the reliable ones: they nearly always add **-n** or **-en**.',
      },
      {
        kind: 'warn',
        text: 'The plural article is **die** for every gender — der Stuhl but die Stühle.',
      },
    ],
    examples: [
      { de: 'Wir brauchen zwei Stühle für das Büro.', en: 'We need two chairs for the office.' },
      { de: 'Ich habe nur zwei Fragen.', en: 'I only have two questions.' },
      {
        de: 'Die Äpfel kosten heute einen Euro.',
        en: 'The apples cost one euro today.',
        note: 'der Apfel → die Äpfel: Umlaut only, no ending.',
      },
      {
        de: 'Die Zimmer sind klein, aber hell.',
        en: 'The rooms are small but bright.',
        note: 'das Zimmer → die Zimmer: nothing changes except the article.',
      },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe zwei Kind.',
        right: 'Ich habe zwei Kinder.',
        why: 'German marks the plural on the noun itself, even when a number already tells you how many.',
      },
      {
        wrong: 'Der Äpfel sind teuer.',
        right: 'Die Äpfel sind teuer.',
        why: 'In the plural every noun takes die, whatever gender it has in the singular.',
      },
      {
        wrong: 'Die Zimmers sind frei.',
        right: 'Die Zimmer sind frei.',
        why: 'The -s plural is only for loan words like Handys and Autos. Nouns in -er, -el and -en normally add nothing.',
      },
    ],
    exerciseIds: [
      'x.g.a1.plural.1',
      'x.g.a1.plural.2',
      'x.g.a1.plural.3',
      'x.g.a1.plural.4',
      'x.g.a1.plural.5',
      'x.g.a1.plural.6',
      'x.g.a1.plural.7',
      'x.g.a1.plural.8',
      'x.g.a1.plural.9',
    ],
    exercises: [
      {
        id: 'x.g.a1.plural.1',
        kind: 'blank',
        sentence: 'Ein Kind, zwei ___.',
        options: ['Kinder', 'Kinds', 'Kinde'],
        answer: 'Kinder',
        skill: 'vocabulary',
        difficulty: 1,
        tags: ['plural'],
        explain: 'das Kind takes the -er plural: die Kinder. A number never replaces the ending.',
      },
      {
        id: 'x.g.a1.plural.2',
        kind: 'blank',
        sentence: 'Ein Handy, zwei ___.',
        options: ['Handys', 'Handyen', 'Handye'],
        answer: 'Handys',
        skill: 'vocabulary',
        difficulty: 1,
        tags: ['plural'],
        explain:
          'Loan words from English take the -s plural: die Handys, die Autos, die Babys, die Jobs.',
      },
      {
        id: 'x.g.a1.plural.3',
        kind: 'article',
        noun: 'Zimmer',
        answer: 'das',
        plural: 'die Zimmer',
        meaning: 'room',
        skill: 'vocabulary',
        difficulty: 2,
        tags: ['plural', 'artikel'],
        explain:
          'Nouns ending in -er, -el or -en usually stay identical in the plural, so only the article tells you it is more than one: das Zimmer → die Zimmer.',
      },
      {
        id: 'x.g.a1.plural.4',
        kind: 'mcq',
        prompt: 'Which plural of "die Rechnung" is correct?',
        options: ['die Rechnungen', 'die Rechnunge', 'die Rechnungs'],
        answer: 0,
        skill: 'vocabulary',
        difficulty: 2,
        tags: ['plural'],
        explain: 'Feminine nouns, and -ung nouns in particular, build the plural with -en.',
      },
      {
        id: 'x.g.a1.plural.5',
        kind: 'match',
        pairs: [
          ['der Stuhl', 'die Stühle'],
          ['das Kind', 'die Kinder'],
          ['die Frage', 'die Fragen'],
          ['das Auto', 'die Autos'],
        ],
        skill: 'vocabulary',
        difficulty: 2,
        tags: ['plural'],
        explain:
          'Four nouns, four different plural endings — this is why the plural is part of the word, not something you can work out later.',
      },
      {
        id: 'x.g.a1.plural.6',
        kind: 'correct',
        wrong: 'Der Äpfel sind sehr teuer.',
        answer: 'Die Äpfel sind sehr teuer.',
        skill: 'vocabulary',
        difficulty: 2,
        tags: ['plural', 'artikel'],
        explain:
          'The singular is der Apfel, but every plural noun takes die — the singular gender disappears.',
      },
      {
        id: 'x.g.a1.plural.7',
        kind: 'order',
        tokens: ['die', 'Tomaten', 'kosten', 'zwei', 'Euro'],
        answer: 'Die Tomaten kosten zwei Euro.',
        skill: 'wordorder',
        difficulty: 2,
        tags: ['plural', 'wortstellung'],
        explain:
          'A plural subject needs the plural verb form: die Tomaten kosten, not kostet. Euro stays singular after a number when you talk about money.',
      },
      {
        id: 'x.g.a1.plural.8',
        kind: 'translate',
        direction: 'en-de',
        prompt: 'We need three chairs.',
        answer: 'Wir brauchen drei Stühle.',
        skill: 'writing',
        difficulty: 3,
        tags: ['plural'],
        explain:
          'der Stuhl adds -e and an Umlaut: die Stühle. The noun still needs its plural ending after the number drei.',
      },
      {
        id: 'x.g.a1.plural.9',
        kind: 'article',
        noun: 'Apfel',
        answer: 'der',
        plural: 'die Äpfel',
        meaning: 'apple',
        skill: 'vocabulary',
        difficulty: 3,
        tags: ['plural', 'artikel'],
        explain:
          'Many masculine nouns build the plural with an Umlaut and no ending at all: der Apfel → die Äpfel, der Vater → die Väter.',
      },
    ],
  },
]

export default grammar
