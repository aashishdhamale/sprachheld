/**
 * A2 — cases: the dative, accusative vs dative, and two-way prepositions.
 * Plain data only. See ../SCHEMA.md.
 */

export const grammar = [
  /* ─────────────────────────────────────────────────────────────────────────
   * g.a2.dativ — The dative case
   * ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'g.a2.dativ',
    level: 'A2',
    title: 'The dative case',
    titleDe: 'Der Dativ',
    short: 'The case of the person who receives — and of mit, nach, bei, seit, von, zu, aus.',
    tags: ['dativ'],
    skill: 'cases',
    difficulty: 2,

    explain: [
      {
        kind: 'text',
        text: 'The dative marks the person who **receives** something. It is also fixed after the prepositions **mit, nach, bei, seit, von, zu, aus** and after the verbs *helfen, danken, gehören, gefallen*.',
      },
      {
        kind: 'table',
        head: ['', 'Nominativ', 'Dativ'],
        rows: [
          ['masculine', 'der Bus', 'dem Bus'],
          ['feminine', 'die Kollegin', 'der Kollegin'],
          ['neuter', 'das Kind', 'dem Kind'],
          ['plural', 'die Kinder', 'den Kindern (+ -n)'],
          ['pronouns', 'ich / du / wir / Sie', 'mir / dir / uns / Ihnen'],
        ],
      },
      {
        kind: 'tip',
        text: 'Ask **Wem?** (to whom?). Learn the row by heart: **dem – der – dem – den**. Feminine is the trap: *die* becomes *der*.',
      },
    ],

    examples: [
      {
        de: 'Ich schenke meiner Mutter einen Kalender.',
        en: 'I am giving my mother a calendar.',
        note: 'meiner Mutter = the receiver (dative), einen Kalender = the thing (accusative).',
      },
      {
        de: 'Wir fahren mit dem Bus zur Arbeit.',
        en: 'We take the bus to work.',
        note: 'mit is always dative; zur is short for zu der.',
      },
      {
        de: 'Das Handy gehört meinem Bruder.',
        en: 'The phone belongs to my brother.',
        note: 'gehören never takes the accusative.',
      },
      {
        de: 'Wie geht es Ihnen?',
        en: 'How are you?',
        note: 'A dative you already use every day — Ihnen is the dative of Sie.',
      },
    ],

    pitfalls: [
      {
        wrong: 'Ich helfe meinen Bruder.',
        right: 'Ich helfe meinem Bruder.',
        why: 'helfen takes the dative. English "help someone" looks like a direct object, German treats it as the person you give help to.',
      },
      {
        wrong: 'Ich fahre mit der Zug.',
        right: 'Ich fahre mit dem Zug.',
        why: 'mit always forces the dative, so der Zug becomes dem Zug — no exceptions.',
      },
      {
        wrong: 'Ich gebe die Kinder einen Apfel.',
        right: 'Ich gebe den Kindern einen Apfel.',
        why: 'In the dative plural you change the article to den and add -n to the noun itself: Kinder → Kindern.',
      },
    ],

    exerciseIds: [
      'x.g.a2.dativ.1',
      'x.g.a2.dativ.2',
      'x.g.a2.dativ.3',
      'x.g.a2.dativ.4',
      'x.g.a2.dativ.5',
      'x.g.a2.dativ.6',
      'x.g.a2.dativ.7',
      'x.g.a2.dativ.8',
      'x.g.a2.dativ.9',
    ],

    exercises: [
      {
        id: 'x.g.a2.dativ.1',
        kind: 'blank',
        sentence: 'Ich fahre mit ___ Fahrrad zur Arbeit.',
        options: ['dem', 'den', 'das', 'der'],
        answer: 'dem',
        skill: 'cases',
        difficulty: 1,
        tags: ['dativ'],
        explain: 'mit is always followed by the dative, and das Fahrrad becomes dem Fahrrad.',
      },
      {
        id: 'x.g.a2.dativ.2',
        kind: 'mcq',
        prompt: 'Which sentence is correct?',
        options: ['Ich danke dem Arzt.', 'Ich danke den Arzt.', 'Ich danke der Arzt.'],
        answer: 0,
        skill: 'cases',
        difficulty: 1,
        tags: ['dativ'],
        explain: 'danken belongs to the small group of dative verbs, so der Arzt becomes dem Arzt — never den Arzt.',
      },
      {
        id: 'x.g.a2.dativ.3',
        kind: 'blank',
        sentence: 'Kannst du ___ bitte kurz helfen?',
        options: ['mir', 'mich', 'ich', 'mein'],
        answer: 'mir',
        skill: 'cases',
        difficulty: 2,
        tags: ['dativ'],
        hint: 'Wem hilfst du?',
        explain: 'helfen takes the dative, so ich becomes mir. mich would be the accusative and is used after verbs like sehen or fragen.',
      },
      {
        id: 'x.g.a2.dativ.4',
        kind: 'correct',
        wrong: 'Ich gebe meine Frau die Blumen.',
        answer: 'Ich gebe meiner Frau die Blumen.',
        skill: 'cases',
        difficulty: 2,
        tags: ['dativ'],
        explain: 'The person who receives goes into the dative, and feminine words take -er there: meine Frau → meiner Frau.',
      },
      {
        id: 'x.g.a2.dativ.5',
        kind: 'order',
        tokens: ['ich', 'zeige', 'dir', 'morgen', 'die', 'Wohnung'],
        answer: 'Ich zeige dir morgen die Wohnung.',
        accept: ['Morgen zeige ich dir die Wohnung.'],
        skill: 'wordorder',
        difficulty: 2,
        tags: ['dativ'],
        explain: 'A dative pronoun (dir) comes straight after the verb, before the accusative noun (die Wohnung).',
      },
      {
        id: 'x.g.a2.dativ.6',
        kind: 'translate',
        direction: 'en-de',
        prompt: 'Can you give me the key, please?',
        answer: 'Kannst du mir bitte den Schlüssel geben?',
        accept: ['Können Sie mir bitte den Schlüssel geben?'],
        skill: 'writing',
        difficulty: 2,
        tags: ['dativ', 'akkusativ'],
        explain: 'I am the receiver, so "me" is the dative mir; the key is the thing handed over, so it stays accusative (den Schlüssel).',
      },
      {
        id: 'x.g.a2.dativ.7',
        kind: 'dialogue',
        lines: [
          { who: 'Sie', text: 'Entschuldigung, wie komme ich zum Hauptbahnhof?' },
          { who: 'Passantin', text: '___' },
        ],
        options: ['Fahren Sie mit der U-Bahn.', 'Fahren Sie mit die U-Bahn.', 'Fahren Sie mit den U-Bahn.'],
        answer: 0,
        skill: 'cases',
        difficulty: 2,
        tags: ['dativ'],
        explain: 'mit takes the dative, and in the dative feminine die becomes der: die U-Bahn → mit der U-Bahn.',
      },
      {
        id: 'x.g.a2.dativ.8',
        kind: 'blank',
        sentence: 'Ich zeige ___ die Fotos aus dem Urlaub.',
        options: ['den Kindern', 'die Kinder', 'den Kinder', 'der Kinder'],
        answer: 'den Kindern',
        skill: 'cases',
        difficulty: 3,
        tags: ['dativ'],
        explain: 'The dative plural is den + noun with an extra -n on the noun itself: die Kinder → den Kindern.',
      },
      {
        id: 'x.g.a2.dativ.9',
        kind: 'order',
        tokens: ['nach', 'der', 'Arbeit', 'gehe', 'ich', 'zum', 'Arzt'],
        answer: 'Nach der Arbeit gehe ich zum Arzt.',
        accept: ['Ich gehe nach der Arbeit zum Arzt.'],
        skill: 'wordorder',
        difficulty: 3,
        tags: ['dativ'],
        explain: 'nach and zu always take the dative (zum = zu dem), and whatever starts the sentence, the verb stays in position 2.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * g.a2.akk-dat — Accusative vs dative
   * ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'g.a2.akk-dat',
    level: 'A2',
    title: 'Accusative vs dative',
    titleDe: 'Akkusativ oder Dativ?',
    short: 'The thing is accusative, the person who gets it is dative — and pronouns move to the front.',
    tags: ['dativ', 'akkusativ'],
    skill: 'cases',
    difficulty: 2,

    explain: [
      {
        kind: 'text',
        text: 'Many everyday verbs take two objects: *geben, schicken, zeigen, kaufen, bringen, erklären*. The **thing** is accusative (**Wen? Was?**), the **person who gets it** is dative (**Wem?**).',
      },
      {
        kind: 'table',
        head: ['Satz', 'Dativ — Wem?', 'Akkusativ — Was?'],
        rows: [
          ['Ich gebe dem Chef den Bericht.', 'dem Chef', 'den Bericht'],
          ['Sie schickt mir eine E-Mail.', 'mir', 'eine E-Mail'],
          ['Ich schicke sie dir.', 'dir', 'sie'],
        ],
      },
      {
        kind: 'tip',
        text: 'Word order: two nouns → dative first. A pronoun always jumps in front of a noun. Two pronouns → accusative first.',
      },
    ],

    examples: [
      {
        de: 'Ich kaufe meinem Sohn ein Eis.',
        en: 'I am buying my son an ice cream.',
        note: 'Two nouns: receiver (dative) first, thing (accusative) second.',
      },
      {
        de: 'Kannst du mir den Vertrag schicken?',
        en: 'Can you send me the contract?',
        note: 'The pronoun mir comes before the noun den Vertrag.',
      },
      {
        de: 'Ich schicke ihn dir morgen.',
        en: "I'll send it to you tomorrow.",
        note: 'Two pronouns: accusative ihn (= den Vertrag) before dative dir.',
      },
      {
        de: 'Der Kellner bringt uns die Rechnung.',
        en: 'The waiter is bringing us the bill.',
      },
    ],

    pitfalls: [
      {
        wrong: 'Er schenkt mich einen Ring.',
        right: 'Er schenkt mir einen Ring.',
        why: 'Only the thing that is given is accusative. The person who gets it is always dative: mir, dir, ihm, ihr, uns, euch, ihnen.',
      },
      {
        wrong: 'Ich gebe dem Chef ihn.',
        right: 'Ich gebe ihn dem Chef.',
        why: 'A pronoun object never stands after a noun object — it moves in front of it, whatever its case.',
      },
      {
        wrong: 'Ich gebe dir es.',
        right: 'Ich gebe es dir.',
        why: 'When both objects are pronouns the accusative comes first: es dir, ihn ihr, sie uns.',
      },
    ],

    exerciseIds: [
      'x.g.a2.akk-dat.1',
      'x.g.a2.akk-dat.2',
      'x.g.a2.akk-dat.3',
      'x.g.a2.akk-dat.4',
      'x.g.a2.akk-dat.5',
      'x.g.a2.akk-dat.6',
      'x.g.a2.akk-dat.7',
      'x.g.a2.akk-dat.8',
      'x.g.a2.akk-dat.9',
    ],

    exercises: [
      {
        id: 'x.g.a2.akk-dat.1',
        kind: 'match',
        pairs: [
          ['Ich frage den Chef.', 'I ask the boss — accusative'],
          ['Ich antworte dem Chef.', 'I answer the boss — dative'],
          ['Ich sehe die Kollegin.', 'I see the colleague — accusative'],
          ['Ich helfe der Kollegin.', 'I help the colleague — dative'],
        ],
        skill: 'cases',
        difficulty: 1,
        tags: ['dativ', 'akkusativ'],
        explain: 'The verb decides the case. fragen and sehen take the accusative; antworten and helfen take the dative, even though English uses the same pattern for all four.',
      },
      {
        id: 'x.g.a2.akk-dat.2',
        kind: 'blank',
        sentence: 'Der Kellner bringt ___ die Speisekarte.',
        options: ['uns', 'wir', 'unser', 'unsere'],
        answer: 'uns',
        skill: 'cases',
        difficulty: 1,
        tags: ['dativ'],
        explain: 'We receive the menu, so wir becomes the dative uns. The menu itself is the accusative object.',
      },
      {
        id: 'x.g.a2.akk-dat.3',
        kind: 'mcq',
        prompt: 'Which sentence is correct?',
        options: ['Ich zeige dir das Foto.', 'Ich zeige dich das Foto.', 'Ich zeige du das Foto.'],
        answer: 0,
        skill: 'cases',
        difficulty: 2,
        tags: ['dativ', 'akkusativ'],
        explain: 'das Foto is the thing shown (accusative), so the person seeing it must be dative: dir, not dich.',
      },
      {
        id: 'x.g.a2.akk-dat.4',
        kind: 'blank',
        sentence: 'Ich habe ___ gestern eine E-Mail geschrieben.',
        options: ['dem Chef', 'den Chef', 'der Chef'],
        answer: 'dem Chef',
        skill: 'cases',
        difficulty: 2,
        tags: ['dativ'],
        explain: 'The e-mail is the accusative object, so the boss is the receiver and goes into the dative: der Chef → dem Chef.',
      },
      {
        id: 'x.g.a2.akk-dat.5',
        kind: 'order',
        tokens: ['ich', 'kaufe', 'meiner', 'Tochter', 'ein', 'Fahrrad'],
        answer: 'Ich kaufe meiner Tochter ein Fahrrad.',
        skill: 'wordorder',
        difficulty: 2,
        tags: ['dativ', 'akkusativ'],
        explain: 'When both objects are nouns, the dative (the receiver) comes before the accusative (the thing).',
      },
      {
        id: 'x.g.a2.akk-dat.6',
        kind: 'correct',
        wrong: 'Er gibt den Schlüssel mir.',
        answer: 'Er gibt mir den Schlüssel.',
        skill: 'wordorder',
        difficulty: 2,
        tags: ['dativ', 'akkusativ'],
        explain: 'A pronoun object always comes before a noun object, so mir has to move in front of den Schlüssel.',
      },
      {
        id: 'x.g.a2.akk-dat.7',
        kind: 'translate',
        direction: 'en-de',
        prompt: 'I am sending my mother a postcard.',
        answer: 'Ich schicke meiner Mutter eine Postkarte.',
        accept: ['Ich sende meiner Mutter eine Postkarte.'],
        skill: 'writing',
        difficulty: 2,
        tags: ['dativ', 'akkusativ'],
        explain: 'The mother receives, so she is dative (meiner Mutter); the postcard is the thing sent, so it stays accusative (eine Postkarte).',
      },
      {
        id: 'x.g.a2.akk-dat.8',
        kind: 'order',
        tokens: ['ich', 'bringe', 'es', 'dir', 'morgen'],
        answer: 'Ich bringe es dir morgen.',
        accept: ['Morgen bringe ich es dir.'],
        skill: 'wordorder',
        difficulty: 3,
        tags: ['dativ', 'akkusativ'],
        explain: 'With two pronouns the order flips: accusative (es) first, dative (dir) second.',
      },
      {
        id: 'x.g.a2.akk-dat.9',
        kind: 'dialogue',
        lines: [
          { who: 'Tom', text: 'Hast du Anna schon den neuen Termin gesagt?' },
          { who: 'Lena', text: 'Nein, ich sage ___ morgen.' },
        ],
        options: ['ihn ihr', 'ihr ihn', 'sie ihm'],
        answer: 0,
        skill: 'cases',
        difficulty: 3,
        tags: ['dativ', 'akkusativ'],
        explain: 'Two pronouns, so the accusative comes first: ihn stands for den Termin, ihr stands for Anna.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * g.a2.wechselpraepositionen — Two-way prepositions
   * ───────────────────────────────────────────────────────────────────────── */
  {
    id: 'g.a2.wechselpraepositionen',
    level: 'A2',
    title: 'Two-way prepositions (Wechselpräpositionen)',
    titleDe: 'Wechselpräpositionen',
    short: 'Nine prepositions take two cases: Wohin? → accusative, Wo? → dative.',
    tags: ['wechselpraepositionen', 'dativ', 'akkusativ'],
    skill: 'prepositions',
    difficulty: 3,

    explain: [
      {
        kind: 'text',
        text: 'Nine prepositions can take **either** case: **in, an, auf, über, unter, vor, hinter, neben, zwischen**. Ask **Wohin?** (where to — movement) or **Wo?** (where — position).',
      },
      {
        kind: 'table',
        head: ['Frage', 'Kasus', 'Beispiel'],
        rows: [
          ['Wohin? — movement', 'Akkusativ', 'Ich hänge das Bild an die Wand.'],
          ['Wo? — position', 'Dativ', 'Das Bild hängt an der Wand.'],
          ['Wohin? — movement', 'Akkusativ', 'Ich stelle die Milch in den Kühlschrank.'],
          ['Wo? — position', 'Dativ', 'Die Milch steht im Kühlschrank.'],
        ],
      },
      {
        kind: 'tip',
        text: 'The verb gives it away: *legen, stellen, hängen, gehen, fahren* move something → accusative. *liegen, stehen, hängen, sein, bleiben* describe a place → dative. Short forms: in dem = **im**, in das = **ins**, an dem = **am**, an das = **ans**.',
      },
    ],

    examples: [
      {
        de: 'Ich gehe in die Küche.',
        en: 'I am going into the kitchen.',
        note: 'Wohin? → accusative.',
      },
      {
        de: 'Ich bin in der Küche.',
        en: 'I am in the kitchen.',
        note: 'Wo? → dative. Same preposition, different case.',
      },
      {
        de: 'Leg das Handy bitte auf den Tisch.',
        en: 'Please put the phone on the table.',
        note: 'legen moves it there → accusative.',
      },
      {
        de: 'Das Handy liegt auf dem Tisch.',
        en: 'The phone is lying on the table.',
        note: 'liegen says where it already is → dative.',
      },
    ],

    pitfalls: [
      {
        wrong: 'Ich gehe in der Supermarkt.',
        right: 'Ich gehe in den Supermarkt.',
        why: 'Going into a place is movement, so in takes the accusative here: der Supermarkt → den Supermarkt.',
      },
      {
        wrong: 'Das Auto steht vor das Haus.',
        right: 'Das Auto steht vor dem Haus.',
        why: 'stehen describes a position, not a movement — the answer to Wo?, so vor takes the dative.',
      },
      {
        wrong: 'Ich hänge die Jacke in dem Schrank.',
        right: 'Ich hänge die Jacke in den Schrank.',
        why: 'hängen with a direct object means putting something somewhere. That is movement, so you need the accusative.',
      },
    ],

    exerciseIds: [
      'x.g.a2.wechselpraepositionen.1',
      'x.g.a2.wechselpraepositionen.2',
      'x.g.a2.wechselpraepositionen.3',
      'x.g.a2.wechselpraepositionen.4',
      'x.g.a2.wechselpraepositionen.5',
      'x.g.a2.wechselpraepositionen.6',
      'x.g.a2.wechselpraepositionen.7',
      'x.g.a2.wechselpraepositionen.8',
      'x.g.a2.wechselpraepositionen.9',
    ],

    exercises: [
      {
        id: 'x.g.a2.wechselpraepositionen.1',
        kind: 'blank',
        sentence: 'Der Schlüssel liegt auf ___ Tisch.',
        options: ['dem', 'den', 'der', 'das'],
        answer: 'dem',
        skill: 'prepositions',
        difficulty: 1,
        tags: ['wechselpraepositionen', 'dativ'],
        explain: 'liegen answers Wo? — nothing moves — so auf takes the dative: der Tisch → dem Tisch.',
      },
      {
        id: 'x.g.a2.wechselpraepositionen.2',
        kind: 'blank',
        sentence: 'Ich gehe heute Abend in ___ Kino.',
        options: ['das', 'dem', 'der', 'den'],
        answer: 'das',
        skill: 'prepositions',
        difficulty: 1,
        tags: ['wechselpraepositionen', 'akkusativ'],
        explain: 'gehen answers Wohin? — movement — so in takes the accusative. In speech you would shorten in das to ins.',
      },
      {
        id: 'x.g.a2.wechselpraepositionen.3',
        kind: 'mcq',
        prompt: 'Wo ist die Milch?',
        options: ['Die Milch ist im Kühlschrank.', 'Die Milch ist in den Kühlschrank.', 'Die Milch ist ins Kühlschrank.'],
        answer: 0,
        skill: 'prepositions',
        difficulty: 2,
        tags: ['wechselpraepositionen', 'dativ'],
        explain: 'The question Wo? asks for a position, so in takes the dative — and in dem is always shortened to im.',
      },
      {
        id: 'x.g.a2.wechselpraepositionen.4',
        kind: 'correct',
        wrong: 'Ich stelle die Gläser in dem Schrank.',
        answer: 'Ich stelle die Gläser in den Schrank.',
        skill: 'prepositions',
        difficulty: 2,
        tags: ['wechselpraepositionen', 'akkusativ'],
        explain: 'stellen puts something somewhere, so the sentence answers Wohin? and in needs the accusative den Schrank.',
      },
      {
        id: 'x.g.a2.wechselpraepositionen.5',
        kind: 'order',
        tokens: ['das', 'Sofa', 'steht', 'zwischen', 'dem', 'Fenster', 'und', 'der', 'Tür'],
        answer: 'Das Sofa steht zwischen dem Fenster und der Tür.',
        skill: 'wordorder',
        difficulty: 2,
        tags: ['wechselpraepositionen', 'dativ'],
        explain: 'stehen describes a position, so zwischen takes the dative — for both nouns: dem Fenster and der Tür.',
      },
      {
        id: 'x.g.a2.wechselpraepositionen.6',
        kind: 'translate',
        direction: 'en-de',
        prompt: 'The bus stops in front of the station.',
        answer: 'Der Bus hält vor dem Bahnhof.',
        accept: ['Der Bus hält vor dem Bahnhof an.'],
        skill: 'writing',
        difficulty: 2,
        tags: ['wechselpraepositionen', 'dativ'],
        explain: 'The bus is at that spot rather than moving into it, so vor answers Wo? and takes the dative.',
      },
      {
        id: 'x.g.a2.wechselpraepositionen.7',
        kind: 'dialogue',
        lines: [
          { who: 'Gast', text: 'Wohin soll ich den Koffer stellen?' },
          { who: 'Gastgeberin', text: 'Stell ihn bitte ___.' },
        ],
        options: ['neben die Tür', 'neben der Tür', 'neben den Tür'],
        answer: 0,
        skill: 'prepositions',
        difficulty: 2,
        tags: ['wechselpraepositionen', 'akkusativ'],
        explain: 'The question already says Wohin?, so neben takes the accusative — and feminine die Tür keeps die there.',
      },
      {
        id: 'x.g.a2.wechselpraepositionen.8',
        kind: 'blank',
        sentence: 'Wir treffen uns um acht ___ Bahnhof.',
        options: ['am', 'ans', 'an die', 'an den'],
        answer: 'am',
        skill: 'prepositions',
        difficulty: 3,
        tags: ['wechselpraepositionen', 'dativ'],
        explain: 'A meeting point is a position, not a movement: Wo? → an dem Bahnhof, always shortened to am.',
      },
      {
        id: 'x.g.a2.wechselpraepositionen.9',
        kind: 'order',
        tokens: ['ich', 'hänge', 'das', 'Bild', 'über', 'das', 'Sofa'],
        answer: 'Ich hänge das Bild über das Sofa.',
        skill: 'wordorder',
        difficulty: 3,
        tags: ['wechselpraepositionen', 'akkusativ'],
        explain: 'hängen with an object means moving it there, so über takes the accusative — compare: Das Bild hängt über dem Sofa.',
      },
    ],
  },
]

export default grammar
