# Content contract

Every file under `src/content/` is **plain data** — no imports from `src/engine`, `src/ui`, or
`src/pages`, no JSX, no functions. Content is validated by `npm run validate`.

Adding new content never requires touching UI code. Register new files in
`src/content/index.js` only.

---

## IDs

IDs are globally unique, lowercase, kebab/colon separated, and stable forever
(SRS scheduling and progress are keyed on them).

| Kind         | Pattern                        | Example                    |
| ------------ | ------------------------------ | -------------------------- |
| Level        | `a1` `a2` `b1`                 | `a1`                       |
| Module       | `<level>.<slug>`               | `a1.basics`                |
| Lesson       | `<level>.l<nn>`                | `a1.l01`                   |
| Vocab        | `v.<level>.l<nn>.<slug>`       | `v.a1.l08.tisch`           |
| Grammar      | `g.<level>.<slug>`             | `g.a1.sein`                |
| Exercise     | `x.<owner-id>.<n>`             | `x.a1.l01.3`               |
| Conversation | `c.<level>.<slug>`             | `c.a1.first-meeting`       |
| Reading      | `r.<level>.<slug>`             | `r.a1.anna`                |
| Listening    | `h.<level>.<slug>`             | `h.a1.at-the-bakery`       |

---

## Skills & tags

`skill` is one of — used for the weak-area radar and adaptive difficulty:

```
vocabulary | grammar | articles | verbs | wordorder | cases
prepositions | reading | listening | conversation | writing
```

`tags` are free-form grammar topic slugs used to recommend targeted practice, e.g.
`nominativ` `akkusativ` `dativ` `perfekt` `modalverben` `trennbar` `nebensatz`
`konjunktiv2` `passiv` `praeteritum` `adjektivendungen` `relativsatz` `w-fragen`
`negation` `possessiv` `reflexiv` `komparativ` `wechselpraepositionen` `imperativ`.

Use **ASCII slugs** for tags (`praeteritum`, not `präteritum`).

---

## Difficulty

`difficulty: 1 | 2 | 3` — 1 = introductory, 2 = standard, 3 = stretch.
The adaptive engine picks a band from the learner's rolling accuracy, so **every
lesson's exercise pool should contain a mix** (roughly 30% / 50% / 20%).

---

## Vocab

The vocab id carries the lesson that introduces the word, so two lessons authored
independently can never collide: `v.a1.l08.tisch`. A word is introduced by exactly
one lesson — later lessons reuse the existing id rather than defining it again.

```js
{
  id: 'v.a1.l08.tisch',
  de: 'Tisch',                 // bare word, NO article
  en: 'table',
  pos: 'noun',                 // noun | verb | adj | adv | phrase | prep | num | pron | conj
  article: 'der',              // nouns only: der | die | das
  plural: 'die Tische',        // nouns only, WITH 'die'; use null if uncountable/no plural
  example: 'Der Tisch ist groß.',
  exampleEn: 'The table is big.',
  level: 'A1',
  topic: 'home',               // see topic list below
  difficulty: 1,
  // optional
  note: 'Also: der Schreibtisch = desk.',
  forms: { ich: 'komme', du: 'kommst', ... },   // verbs: present tense, all 6 persons
  perfect: 'ist gekommen',                      // verbs: aux + participle
  praeteritum: 'kam',                           // verbs (A2/B1)
  separable: true,                              // verbs
}
```

Topics: `greetings personal numbers time family countries jobs food shopping home
routine hobbies weather transport directions restaurant work school health travel
housing money services social opinion technology environment society education
career relationships media nature body clothing city emotions`

## Grammar

```js
{
  id: 'g.a1.sein',
  level: 'A1',
  title: 'sein — to be',
  short: 'The most important verb in German. It is irregular — learn it by heart.',
  tags: ['verbs', 'praesens'],
  skill: 'verbs',
  difficulty: 1,
  explain: [Block, ...],       // 1-3 blocks. Keep it SHORT (see philosophy below)
  examples: [ { de, en, note? }, ... ],   // 2-4
  pitfalls: [ { wrong: 'Ich bin 25 Jahre alt haben.', right: 'Ich bin 25 Jahre alt.', why: '...' } ],
  exerciseIds: ['x.g.a1.sein.1', ...],    // resolved from the grammar file's own `exercises`
  exercises: [Exercise, ...],  // 4-8, mixed difficulty
}
```

### Block

```js
{ kind: 'text',  text: 'Plain sentence. Markdown-lite: **bold**, `code`, *italic*.' }
{ kind: 'tip',   text: 'A short memory hook.' }
{ kind: 'warn',  text: 'A common trap.' }
{ kind: 'examples', items: [ { de, en, note? } ] }
{ kind: 'table', head: ['Person', 'sein'], rows: [ ['ich', 'bin'], ['du', 'bist'] ] }
{ kind: 'list',  items: ['...', '...'] }
```

**Philosophy — keep `explain` under ~60 words.** One idea, then practice.

---

## Exercise (discriminated union on `kind`)

Shared fields on every exercise: `id`, `kind`, `skill`, `difficulty`, `explain`
(shown after answering — one or two sentences, always explain *why*), optional
`tags`, optional `hint`, optional `audio` (string spoken by TTS).

```js
// 1. Multiple choice
{ id, kind: 'mcq', prompt: 'Choose the correct sentence.', options: ['Ich habe ein Auto.', ...],
  answer: 0, skill: 'grammar', difficulty: 2, explain: '...' }

// 2. Fill in the blank — '___' marks the gap (exactly one)
{ id, kind: 'blank', sentence: 'Ich ___ aus Indien.', options: ['bin','komme','habe','gehe'],
  answer: 'komme', skill: 'verbs', difficulty: 1, explain: 'With kommen you use aus + country.' }
// options may be omitted -> free-text input (accepts `answer` or any of `accept`)

// 3. Article trainer
{ id, kind: 'article', noun: 'Tisch', answer: 'der', plural: 'die Tische', meaning: 'table',
  skill: 'articles', difficulty: 1, explain: 'Nouns ending in -isch are usually masculine.' }
// answer: 'der' | 'die' | 'das' | 'die (pl)'

// 4. Word order — user clicks tokens into place
{ id, kind: 'order', tokens: ['ich','fahre','morgen','nach Berlin'],
  answer: 'Ich fahre morgen nach Berlin.',
  accept: ['Morgen fahre ich nach Berlin.'],       // other valid orders
  skill: 'wordorder', difficulty: 2, explain: 'The conjugated verb is always in position 2.' }
// `tokens` are lowercase where they are not sentence-initial; the UI capitalises.

// 5. Translation
{ id, kind: 'translate', direction: 'en-de', prompt: 'I am going to the doctor tomorrow.',
  answer: 'Ich gehe morgen zum Arzt.', accept: ['Morgen gehe ich zum Arzt.'],
  skill: 'writing', difficulty: 2, explain: '...' }

// 6. Correct the sentence
{ id, kind: 'correct', wrong: 'Ich bin aus Indien komme.', answer: 'Ich komme aus Indien.',
  skill: 'wordorder', difficulty: 2, explain: 'Only one conjugated verb, in position 2.' }

// 7. Verb conjugation
{ id, kind: 'conjugate', verb: 'kommen', person: 'du', answer: 'kommst',
  skill: 'verbs', difficulty: 1, explain: 'Regular -en verbs take -st in the du form.' }

// 8. Matching pairs
{ id, kind: 'match', pairs: [['der Apfel','apple'], ['das Brot','bread']],
  skill: 'vocabulary', difficulty: 1, explain: '...' }

// 9. Complete the dialogue
{ id, kind: 'dialogue', lines: [ {who:'A', text:'Wie geht es dir?'}, {who:'B', text:'___'} ],
  options: ['Danke, gut!','Ich heiße Anna.','Aus Indien.'], answer: 0,
  skill: 'conversation', difficulty: 1, explain: '...' }

// 10. Listening comprehension (TTS speaks `audio`, question is about it)
{ id, kind: 'listen', audio: 'Ich komme um halb acht an.', question: 'What time does she arrive?',
  options: ['7:30','8:30','8:00'], answer: 0, skill: 'listening', difficulty: 2, explain: '...' }

// 11. Speak it (Web Speech recognition; graceful fallback to self-check)
{ id, kind: 'speak', prompt: 'Say: I come from India.', answer: 'Ich komme aus Indien.',
  skill: 'conversation', difficulty: 1, explain: '...' }
```

`accept` is always an **array of extra full-string answers**. Matching is
case-insensitive and ignores final punctuation and double spaces, so do not add
trivial variants.

---

## Lesson

```js
{
  id: 'a1.l01',
  moduleId: 'a1.basics',
  level: 'A1',
  order: 1,
  title: 'Greetings and introductions',
  titleDe: 'Begrüßung und Vorstellung',
  icon: '👋',
  summary: 'Say hello, ask someone their name, and introduce yourself.',
  minutes: 15,
  objectives: ['Greet someone at any time of day', 'Say your name and where you are from'],
  vocabIds: ['v.a1.hallo', ...],      // 8-14 — the words this lesson teaches
  grammarIds: ['g.a1.sein'],          // 1-2
  steps: [ Step, ... ],
}
```

### Steps — always in this order (`learn → practice → apply → review`)

```js
{ type: 'learn',        title: 'How it works', blocks: [Block, ...] }
{ type: 'vocab',        title: 'New words',    vocabIds: [...] }        // flashcard run
{ type: 'grammar',      title: 'sein',         grammarId: 'g.a1.sein' } // explain + its exercises
{ type: 'practice',     title: 'Practice',     exercises: [Exercise, ...] }   // 5-8
{ type: 'build',        title: 'Build the sentence', exercises: [order-kind Exercise, ...] } // 3-4
{ type: 'reading',      title: 'Read',         readingId: 'r.a1.anna' }
{ type: 'listening',    title: 'Listen',       listeningId: 'h.a1.cafe' }
{ type: 'conversation', title: 'Use it',       conversationId: 'c.a1.first-meeting' }
{ type: 'quiz',         title: 'Quiz',         exercises: [Exercise, ...] }   // 5
{ type: 'review',       title: 'Review',       count: 3 }   // engine pulls due SRS + past mistakes
```

A lesson **must** contain at least: `learn`, `vocab`, `practice`, `conversation`,
`quiz`, `review`. `reading`/`listening`/`build`/`grammar` are strongly encouraged.

---

## Conversation (scenario)

The conversation engine is deterministic and offline-first. Each turn declares
what the learner might plausibly say; matching is keyword/regex based and
forgiving. An optional AI adapter can take over, but content must stand alone.

```js
{
  id: 'c.a1.first-meeting',
  level: 'A1',
  title: 'Meeting a new colleague',
  icon: '🤝',
  setting: 'It is your first day. A colleague comes over to your desk.',
  goal: 'Introduce yourself and ask two questions back.',
  roleBot: 'Lena, your colleague',
  roleUser: 'You, the new team member',
  vocabIds: [...], grammarIds: [...],
  tags: ['greetings'],
  turns: [
    {
      bot: { de: 'Hallo! Ich bin Lena. Wie heißt du?', en: 'Hello! I am Lena. What is your name?' },
      // what we hope to hear; first matching branch wins
      accept: [
        { match: ['ich heiße', 'mein name ist', 'ich bin'],
          reply: { de: 'Freut mich, {name}! Woher kommst du?', en: 'Nice to meet you, {name}! Where are you from?' } },
      ],
      // shown when nothing matches (never a dead end)
      fallback: { de: 'Entschuldigung — wie heißt du?', en: 'Sorry — what is your name?' },
      hints: ['Ich heiße …', 'Mein Name ist …'],
      sample: 'Ich heiße Aashish.',
      // graded targets: engine checks these and gives a correction if missing
      requires: { any: ['ich heiße', 'mein name ist', 'ich bin'] },
      teaches: ['g.a1.sein'],
    },
  ],
  closing: { de: 'Super gemacht! Bis morgen!', en: 'Well done! See you tomorrow!' },
}
```

`match` entries are lowercase substrings, or `/regex/` written as a string
starting and ending with `/`. `{name}` is replaced with the learner's name.

---

## Reading

```js
{
  id: 'r.a1.anna', level: 'A1', title: 'Das bin ich', minutes: 3,
  intro: 'Anna introduces herself.',
  paragraphs: ['Hallo! Ich heiße Anna. Ich bin 25 Jahre alt.', '...'],
  glossary: [ { de: 'Jahre alt', en: 'years old' } ],   // click-a-word support
  questions: [Exercise, ...],   // 3-5, skill 'reading'
}
```

## Listening

```js
{
  id: 'h.a1.cafe', level: 'A1', title: 'Im Café', minutes: 3,
  intro: 'Order a coffee.',
  script: [ { who: 'Kellner', text: 'Guten Tag! Was möchten Sie?' },
            { who: 'Gast',    text: 'Einen Kaffee, bitte.' } ],
  transcriptHidden: true,        // hide until the learner asks
  questions: [Exercise, ...],    // 3-4, skill 'listening'
}
```

Audio is Web Speech API TTS with a `de-DE` voice — no audio files, no network.

---

## Module & Level

```js
// module
{ id: 'a1.basics', levelId: 'a1', title: 'First contact', icon: '👋',
  summary: 'Greet people, introduce yourself, exchange basic personal information.',
  lessonIds: ['a1.l01','a1.l02'] }

// level (src/content/levels.js)
{ id: 'a1', cefr: 'A1', title: 'Beginner', tagline: 'From zero to everyday basics.',
  description: '...', moduleIds: ['a1.basics', ...] }
```

---

## Writing style rules

1. **German must be correct.** Correct articles, cases, capitalisation of nouns, ß vs ss.
2. **Level-appropriate.** Never use B1 vocabulary in an A1 lesson. A1 sticks to
   present tense; A2 adds Perfekt/Dativ; B1 adds subordinate clauses, Konjunktiv II, passive.
3. **Explanations in English at A1/A2**, gradually more German at B1 (use the
   `de`/`en` pairs so the UI can dial this).
4. **Every `explain` says *why*,** not just "correct/wrong".
5. **Everyday and practical** — supermarket, office, doctor, flat-hunting. Not literary.
6. No placeholder text. No "coming soon".
