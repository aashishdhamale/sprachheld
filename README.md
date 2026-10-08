# Sprachheld

An interactive German tutor — by making you *use* German, not read about it.

**A1 and A2 are complete** (18 lessons). B1 grammar is written and available in the
Grammar tab; B1 lessons are planned but not built — see [Levels](#levels).

No account, no server, no tracking. Everything lives in your browser.

**Live:** https://aashishdhamale.github.io/sprachheld/ — every push to `main` runs
`npm run check` and, if it passes, redeploys (see `.github/workflows/deploy.yml`).

To run it locally:

```bash
npm install
npm run dev      # http://localhost:5173
```

---

## What it does

| | |
| --- | --- |
| **Dashboard** | One question answered every morning: *what should I do today?* Daily plan, streak, weak areas, what's due for review. |
| **Lessons** | 18 lessons across A1 and A2, each one `Learn → Practice → Apply → Review`. |
| **Conversations** | Branching German dialogues that correct your mistakes as you type, and explain why. |
| **Article trainer** | `der / die / das`, weighted so the nouns you keep missing come back most often. |
| **Sentence builder** | Tap words into order until German word order is muscle memory. |
| **Vocabulary** | Flashcards with audio, plurals, examples, and a spaced-repetition schedule. |
| **Grammar** | 46 short topics — a brief explanation, then immediate practice. |
| **Reading / Listening** | Level-appropriate texts (tap any word for its meaning) and audio scenes with adjustable speed. |
| **Progress** | Per-skill accuracy, weak grammar topics, recurring mistakes, memory strength. |

### The teaching model

The app tracks a rolling accuracy per skill and per grammar topic. That drives three things:

- **Adaptive difficulty** — three right in a row raises the difficulty band; two wrong lowers it and adds scaffolding.
- **Weak-area routing** — the dashboard recommends a targeted drill for whatever you are worst at.
- **Spaced repetition** — every wrong answer becomes a card scheduled to come back; every word you meet enters the same queue.

Anything you get wrong inside a lesson is re-queued before the lesson ends, so you never leave having only failed at something.

---

## Audio

Speech uses the **Web Speech API** — no audio files, no network, works offline.

For proper pronunciation you need a German voice installed. On Windows:
*Settings → Time & Language → Language & region → Add a language → Deutsch*,
including the speech pack. Then reload. Settings shows which voice is in use.

Speaking exercises use speech **recognition**, available in Chrome and Edge. Where
it isn't, they fall back to type-and-check.

---

## The AI tutor (optional)

Everything above works with no key and no network. If you add your own Anthropic
API key in **Settings**, two extras unlock:

- conversations driven by a live tutor instead of the scripted engine
- **Free conversation** — open-ended chat about anything

The tutor is locked to your CEFR level, your current lesson, the vocabulary you
have actually met and your known weak areas, so it can't drift into B2 vocabulary
during an A1 lesson. Structured content is never AI-generated.

> The key is stored in this browser's `localStorage` and sent directly to
> `api.anthropic.com` from the page. Fine for a personal tool on your own machine;
> don't do it on a shared computer.

---

## Architecture

```
src/
  content/        pure data — no logic, no JSX
    levels.js       A1 / A2 / B1
    modules.js      lesson grouping
    vocab/          one file per lesson
    grammar/        46 topics
    lessons/        the lessons themselves
    conversations/  branching scenarios
    readings/  listenings/
    SCHEMA.md       the contract every content file follows
    CURRICULUM.md   the fixed id registry
  engine/         the teaching brain (framework-free, testable)
    srs.js          spaced repetition (SM-2 variant)
    adaptive.js     difficulty bands, weak-area detection
    grader.js       grades all 11 exercise kinds
    checker.js      rule-based German error checker
    conversation.js branching dialogue engine
    planner.js      "what should I do today?"
    ai.js           optional Anthropic adapter
  ui/             reusable components (Exercise, Chat, VocabCard, …)
  pages/          one file per route
  lib/            router, storage, speech, text comparison
  store/          one reducer, one localStorage key
```

**Content is completely separate from logic.** Files in `src/content/` are picked
up automatically by `import.meta.glob` — adding a lesson means dropping in five
files and listing its id in `modules.js`. No UI code changes.

Dependencies: React and Vite. That's the entire list.

---

## Adding content

1. Read `src/content/SCHEMA.md` — it defines every shape and all 11 exercise kinds.
2. Create the five files for your lesson:
   ```
   src/content/vocab/a2-l27.js
   src/content/lessons/a2-l27.js
   src/content/conversations/a2-l27.js
   src/content/readings/a2-l27.js
   src/content/listenings/a2-l27.js
   ```
3. Add the lesson id to the right module in `src/content/modules.js`.
4. Run the checks.

Ids are namespaced per lesson (`v.a2.l27.miete`) so two people can write lessons
in parallel without colliding.

---

## Checks

```bash
npm run validate   # content against SCHEMA.md — ids, references, shapes, level gates
npm test           # the three checks below
npm run check      # validate + test + build
```

| Script | What it protects |
| --- | --- |
| `test-engine.mjs` | The error checker catches the classic mistakes and stays silent on correct German; grading is forgiving about case, punctuation and umlaut spelling; SRS intervals behave; a conversation can always be driven to its end. |
| `check-answerable.mjs` | **Every** exercise accepts its own model answer. Catches an `order` exercise whose tokens can't spell the answer, or a `blank` whose answer isn't among its options — bugs where a learner answers perfectly and is told they're wrong. |
| `check-false-positives.mjs` | Runs the error checker over every German sentence in the content. All of it is correct German, so anything flagged is a false positive. Budget: 1%. |

The last one matters most. A tutor that marks correct German as wrong destroys
trust faster than one that misses a mistake, so the checker is written to
under-report: it only fires on errors it can identify with high confidence.

---

## Levels

**A1 — 10 lessons.** Greetings, personal information, numbers and time, family,
daily routine, food and restaurants, shopping, home, hobbies and weather,
transport and directions. Present tense, articles, accusative, negation, modals,
separable verbs.

**A2 — 8 lessons.** Travel and booking, appointments and the doctor, work and the
office, housing and renting, banking and public offices, invitations, telling
stories about the past, problems and solutions. Dative, Perfekt, reflexives,
subordinate clauses, comparatives, imperative.

**B1 — grammar only, for now.** All 13 B1 grammar topics are written and usable in
the **Grammar** tab — relative clauses, Konjunktiv II, passive, Präteritum,
Plusquamperfekt, adjective endings, advanced connectors, formal register. The B1
*lessons* are not built yet; `src/content/modules.js` holds their planned shape
with empty `lessonIds`, and `src/content/CURRICULUM.md` has the full plan. Drop
lesson files in and list their ids to light the level up — no code changes.

A level unlocks when the previous one is 80% complete.

---

## Your data

Everything is one `localStorage` key. **Settings → Export progress** gives you a
JSON backup of your streak, scores and the entire spaced-repetition schedule;
**Import** restores it on another machine.
