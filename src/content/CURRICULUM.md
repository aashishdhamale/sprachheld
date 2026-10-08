# Curriculum map

The fixed skeleton every content file attaches to. **IDs here are contractual** —
lessons reference these grammar ids, so they must match exactly.

## Lessons

| Lesson    | Module        | Title                              | Grammar                                      |
| --------- | ------------- | ---------------------------------- | -------------------------------------------- |
| `a1.l01`  | a1.basics     | Greetings and introductions        | `g.a1.pronomen`, `g.a1.sein`                 |
| `a1.l02`  | a1.basics     | Personal information               | `g.a1.wfragen`, `g.a1.praesens`              |
| `a1.l03`  | a1.everyday   | Numbers, time and dates            | `g.a1.janein`, `g.a1.satzbau`                |
| `a1.l04`  | a1.everyday   | Family and people                  | `g.a1.haben`, `g.a1.possessiv`               |
| `a1.l05`  | a1.everyday   | Daily routine                      | `g.a1.trennbar`, `g.a1.unregelmaessig`       |
| `a1.l06`  | a1.living     | Food, drinks and the restaurant    | `g.a1.akkusativ`, `g.a1.artikel`             |
| `a1.l07`  | a1.living     | Shopping and money                 | `g.a1.ein`, `g.a1.negation`                  |
| `a1.l08`  | a1.living     | Home and furniture                 | `g.a1.plural`, `g.a1.nominativ`              |
| `a1.l09`  | a1.out        | Hobbies and the weather            | `g.a1.modalverben`                           |
| `a1.l10`  | a1.out        | Transport and directions           | `g.a1.imperativ-basis`, `g.a1.praepositionen`|
| `a2.l11`  | a2.moving     | Travel and booking                 | `g.a2.perfekt`, `g.a2.dativ`                 |
| `a2.l12`  | a2.moving     | Appointments and the doctor        | `g.a2.reflexiv`, `g.a2.modalverben`          |
| `a2.l13`  | a2.worklife   | Work and the office                | `g.a2.nebensatz`, `g.a2.weil-dass-wenn`      |
| `a2.l14`  | a2.worklife   | Housing and renting                | `g.a2.wechselpraepositionen`, `g.a2.akk-dat` |
| `a2.l15`  | a2.admin      | Banking, offices and phone calls   | `g.a2.imperativ`, `g.a2.konjunktionen`       |
| `a2.l16`  | a2.social     | Invitations and social life        | `g.a2.komparativ`                            |
| `a2.l17`  | a2.social     | Telling stories about the past     | `g.a2.perfekt-unregelmaessig`                |
| `a2.l18`  | a2.social     | Plans, problems and solutions      | `g.a2.trennbar`, `g.a2.satzbau`              |
| `b1.l19`  | b1.work       | Meetings and workplace talk        | `g.b1.satzbau`, `g.b1.konnektoren`           |
| `b1.l20`  | b1.work       | Emails, formal and informal        | `g.b1.formell`, `g.b1.infinitiv`             |
| `b1.l21`  | b1.debate     | Opinions and discussion            | `g.b1.nebensatz`, `g.b1.konjunktiv2`         |
| `b1.l22`  | b1.debate     | Technology, media and news         | `g.b1.passiv`, `g.b1.relativsatz`            |
| `b1.l23`  | b1.debate     | Environment and society            | `g.b1.adjektivendungen`, `g.b1.praepositionen`|
| `b1.l24`  | b1.life       | Education, career and interviews   | `g.b1.praeteritum`, `g.b1.futur`             |
| `b1.l25`  | b1.life       | Health and relationships           | `g.b1.plusquamperfekt`                       |
| `b1.l26`  | b1.life       | Travel experiences and the future  | *(revision — reuse earlier grammar)*         |

## Grammar topics — contractual ids

### A1 — `src/content/grammar/a1-*.js`

| id                       | Title                                       | skill        | tags                       |
| ------------------------ | ------------------------------------------- | ------------ | -------------------------- |
| `g.a1.pronomen`          | Personal pronouns                           | grammar      | `pronomen`, `nominativ`    |
| `g.a1.sein`              | sein — to be                                | verbs        | `verbs`, `praesens`        |
| `g.a1.haben`             | haben — to have                             | verbs        | `verbs`, `praesens`        |
| `g.a1.praesens`          | Regular verbs in the present tense          | verbs        | `verbs`, `praesens`, `konjugation` |
| `g.a1.unregelmaessig`    | Stem-changing verbs (fahren, essen, sehen)  | verbs        | `verbs`, `konjugation`     |
| `g.a1.artikel`           | der, die, das                               | articles     | `artikel`, `nominativ`     |
| `g.a1.ein`               | ein and eine                                | articles     | `artikel`                  |
| `g.a1.plural`            | Making plurals                              | vocabulary   | `plural`                   |
| `g.a1.nominativ`         | The nominative case                         | cases        | `nominativ`                |
| `g.a1.akkusativ`         | The accusative case                         | cases        | `akkusativ`                |
| `g.a1.negation`          | nicht and kein                              | grammar      | `negation`                 |
| `g.a1.possessiv`         | mein, dein, sein — possessive articles      | grammar      | `possessiv`                |
| `g.a1.wfragen`           | Question words (W-Fragen)                   | grammar      | `w-fragen`                 |
| `g.a1.janein`            | Yes/no questions                            | wordorder    | `w-fragen`, `wortstellung` |
| `g.a1.satzbau`           | Verb in position 2                          | wordorder    | `wortstellung`             |
| `g.a1.modalverben`       | Modal verbs: können, möchten, müssen        | verbs        | `modalverben`              |
| `g.a1.trennbar`          | Separable verbs                             | verbs        | `trennbar`                 |
| `g.a1.praepositionen`    | Everyday prepositions (in, nach, zu, mit)   | prepositions | `praeposition`             |
| `g.a1.imperativ-basis`   | Simple commands and polite requests         | grammar      | `imperativ`                |

### A2 — `src/content/grammar/a2-*.js`

| id                            | Title                                  | skill        | tags                           |
| ----------------------------- | -------------------------------------- | ------------ | ------------------------------ |
| `g.a2.dativ`                  | The dative case                        | cases        | `dativ`                        |
| `g.a2.akk-dat`                | Accusative vs dative                   | cases        | `dativ`, `akkusativ`           |
| `g.a2.wechselpraepositionen`  | Two-way prepositions                   | prepositions | `wechselpraepositionen`, `dativ`, `akkusativ` |
| `g.a2.modalverben`            | Modal verbs in full                    | verbs        | `modalverben`                  |
| `g.a2.perfekt`                | The perfect tense                      | verbs        | `perfekt`                      |
| `g.a2.perfekt-unregelmaessig` | Irregular past participles             | verbs        | `perfekt`                      |
| `g.a2.reflexiv`               | Reflexive verbs                        | verbs        | `reflexiv`                     |
| `g.a2.trennbar`               | Separable and inseparable verbs        | verbs        | `trennbar`                     |
| `g.a2.komparativ`             | Comparative and superlative            | grammar      | `komparativ`                   |
| `g.a2.nebensatz`              | Subordinate clauses                    | wordorder    | `nebensatz`                    |
| `g.a2.weil-dass-wenn`         | weil, dass, wenn                       | wordorder    | `nebensatz`                    |
| `g.a2.konjunktionen`          | Connecting sentences                   | grammar      | `konnektoren`                  |
| `g.a2.imperativ`              | The imperative                         | grammar      | `imperativ`                    |
| `g.a2.satzbau`                | Time – Manner – Place                  | wordorder    | `wortstellung`                 |

### B1 — `src/content/grammar/b1-*.js`

| id                      | Title                                    | skill        | tags                        |
| ----------------------- | ---------------------------------------- | ------------ | --------------------------- |
| `g.b1.satzbau`          | Advanced sentence structure              | wordorder    | `wortstellung`              |
| `g.b1.nebensatz`        | Subordinate clauses in depth             | wordorder    | `nebensatz`                 |
| `g.b1.relativsatz`      | Relative clauses                         | wordorder    | `relativsatz`               |
| `g.b1.konjunktiv2`      | Konjunktiv II                            | grammar      | `konjunktiv2`               |
| `g.b1.passiv`           | The passive voice                        | grammar      | `passiv`                    |
| `g.b1.praeteritum`      | Präteritum of common verbs               | verbs        | `praeteritum`               |
| `g.b1.plusquamperfekt`  | Plusquamperfekt                          | verbs        | `plusquamperfekt`           |
| `g.b1.infinitiv`        | zu + Infinitiv, um … zu                  | grammar      | `infinitiv`                 |
| `g.b1.praepositionen`   | Verbs with fixed prepositions            | prepositions | `praeposition`              |
| `g.b1.adjektivendungen` | Adjective endings                        | grammar      | `adjektivendungen`          |
| `g.b1.konnektoren`      | Advanced connectors                      | grammar      | `konnektoren`               |
| `g.b1.formell`          | Formal vs informal German                | writing      | `formell`                   |
| `g.b1.futur`            | Futur I and talking about plans          | verbs        | `futur`                     |

## Level rules the validator enforces

- `dativ`, `perfekt`, `nebensatz`, `reflexiv`, `komparativ`,
  `wechselpraepositionen`, `imperativ` → not before **A2**
- `konjunktiv2`, `passiv`, `plusquamperfekt`, `relativsatz`,
  `adjektivendungen`, `praeteritum` → not before **B1**

`g.a1.imperativ-basis` teaches fixed polite phrases only (*Nehmen Sie…*,
*Gehen Sie…*) and must **not** carry the `imperativ` tag — use `hoeflichkeit`.

## File ownership

Each lesson owns exactly these files, so nothing collides:

```
src/content/vocab/<level>-l<nn>.js          the lesson's new words
src/content/lessons/<level>-l<nn>.js        the lesson itself
src/content/conversations/<level>-l<nn>.js  its scenario(s)
src/content/readings/<level>-l<nn>.js       its reading text (A1 L01+ onward)
src/content/listenings/<level>-l<nn>.js     its listening
```
