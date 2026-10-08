/**
 * B1 · L22 — Technology, media and news / Technik, Medien und Nachrichten
 *
 * The lesson for reading the news and dealing with devices: understand
 * what happened when nobody says who did it (Die App wurde entwickelt, Hier
 * wird nicht geraucht), and pack extra information into one sentence with a
 * relative clause (die App, die ich jeden Tag benutze).
 *
 * Grammar: g.b1.passiv (werden + Partizip II, wurde + Partizip II, modal +
 * Partizip II + werden) and g.b1.relativsatz (gender from the noun outside,
 * case from the job inside, verb at the end).
 *
 * Exercise ids run x.b1.l22.1 … x.b1.l22.19 here; the reading owns 20-24 and
 * the listening 25-28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'b1.l22',
  moduleId: 'b1.debate',
  level: 'B1',
  order: 22,
  title: 'Technology, media and news',
  titleDe: 'Technik, Medien und Nachrichten',
  icon: '📱',
  summary:
    'Follow the news and talk about devices and apps: the passive for what is done (Die App wurde entwickelt) and relative clauses for what you want to add (die App, die ich jeden Tag benutze).',
  minutes: 20,
  objectives: [
    'Understand and form the passive in the present, the past and with modal verbs',
    'Choose the right relative pronoun: gender from the noun, case from its job in the clause',
    'Talk about apps, files and passwords: herunterladen, speichern, löschen',
    'Follow short news items on the radio and in the paper',
  ],
  vocabIds: [
    'v.b1.l22.zeitung',
    'v.b1.l22.zeitschrift',
    'v.b1.l22.artikel',
    'v.b1.l22.sendung',
    'v.b1.l22.werbung',
    'v.b1.l22.berichten',
    'v.b1.l22.veroeffentlichen',
    'v.b1.l22.aktuell',
    'v.b1.l22.technik',
    'v.b1.l22.bildschirm',
    'v.b1.l22.passwort',
    'v.b1.l22.herunterladen',
    'v.b1.l22.speichern',
    'v.b1.l22.loeschen',
    'v.b1.l22.entwickeln',
    'v.b1.l22.erfinden',
    'v.b1.l22.entwicklung',
    'v.b1.l22.digital',
  ],
  grammarIds: ['g.b1.passiv', 'g.b1.relativsatz'],

  steps: [
    /* ── 1. Learn ───────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'The language of the news',
      blocks: [
        {
          kind: 'text',
          text: 'News German has two favourite tools. The **passive** puts the action first when the doer does not matter — *Das Spiel wurde abgesagt*. And the **relative clause** adds a detail without starting a new sentence — *die App, die von einer Firma aus Berlin entwickelt wurde*. Once you can hear both, the radio news opens up.',
        },
        {
          kind: 'table',
          head: ['', 'Aktiv', 'Passiv'],
          rows: [
            ['Präsens', 'Die Firma entwickelt die App.', 'Die App wird entwickelt.'],
            ['Präteritum', 'Bell erfand das Telefon.', 'Das Telefon wurde erfunden.'],
            ['mit Modalverb', 'Man muss die Datei speichern.', 'Die Datei muss gespeichert werden.'],
            ['ohne Subjekt', 'Man raucht hier nicht.', 'Hier wird nicht geraucht.'],
          ],
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Das ist die App, die ich jeden Tag benutze.',
              en: 'This is the app (that) I use every day.',
              note: 'die App is feminine; in its clause it is the object — accusative feminine is die.',
            },
            {
              de: 'Der Kollege, der die App entwickelt hat, kommt aus Wien.',
              en: 'The colleague who developed the app comes from Vienna.',
              note: 'The relative clause sits right behind its noun, between commas, with the verb at the end.',
            },
            {
              de: 'Die Ergebnisse werden morgen veröffentlicht.',
              en: 'The results will be published tomorrow.',
            },
            {
              de: 'Die neue Version wurde von einem kleinen Team entwickelt.',
              en: 'The new version was developed by a small team.',
              note: 'The doer, if you name it, follows von + dative.',
            },
          ],
        },
        {
          kind: 'tip',
          text: '**werden** has three jobs — keep them apart by what follows: werden + adjective = become (*Es wird kalt*), werden + infinitive = future (*Es wird regnen*), werden + Partizip II = passive (*Es wird gebaut*).',
        },
      ],
    },

    /* ── 2. Vocab ───────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.b1.l22.zeitung',
        'v.b1.l22.zeitschrift',
        'v.b1.l22.artikel',
        'v.b1.l22.sendung',
        'v.b1.l22.werbung',
        'v.b1.l22.berichten',
        'v.b1.l22.veroeffentlichen',
        'v.b1.l22.aktuell',
        'v.b1.l22.technik',
        'v.b1.l22.bildschirm',
        'v.b1.l22.passwort',
        'v.b1.l22.herunterladen',
        'v.b1.l22.speichern',
        'v.b1.l22.loeschen',
        'v.b1.l22.entwickeln',
        'v.b1.l22.erfinden',
        'v.b1.l22.entwicklung',
        'v.b1.l22.digital',
      ],
    },

    /* ── 3. Grammar: passive ────────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'The passive voice',
      grammarId: 'g.b1.passiv',
    },

    /* ── 4. Grammar: relative clauses ───────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Relative clauses',
      grammarId: 'g.b1.relativsatz',
    },

    /* ── 5. Practice ────────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.b1.l22.1',
          kind: 'blank',
          sentence: 'Die Zeitung ___ jeden Morgen um sechs Uhr gebracht.',
          options: ['wird', 'ist', 'hat', 'werden'],
          answer: 'wird',
          skill: 'grammar',
          difficulty: 1,
          tags: ['passiv'],
          explain:
            'gebracht at the end is a Partizip II, and the newspaper does not bring anything — it is brought. Present passive = wird + Partizip II, singular because die Zeitung is singular.',
        },
        {
          id: 'x.b1.l22.2',
          kind: 'article',
          noun: 'Bildschirm',
          answer: 'der',
          plural: 'die Bildschirme',
          meaning: 'screen',
          skill: 'articles',
          difficulty: 1,
          explain:
            'Bild + Schirm, and the last part rules: der Schirm (umbrella, shield) is masculine, so der Bildschirm — even though das Bild is neuter.',
        },
        {
          id: 'x.b1.l22.3',
          kind: 'blank',
          sentence: 'Das ist die App, ___ ich jeden Tag benutze.',
          options: ['die', 'der', 'das', 'den'],
          answer: 'die',
          skill: 'grammar',
          difficulty: 2,
          tags: ['relativsatz'],
          explain:
            'Gender comes from the noun outside: die App, feminine. Case comes from the job inside: ich benutze sie — the app is the object, accusative. Feminine accusative is die.',
        },
        {
          id: 'x.b1.l22.4',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: [
            'Das Telefon wurde im 19. Jahrhundert erfunden.',
            'Das Telefon wurde im 19. Jahrhundert erfindet.',
            'Das Telefon hat im 19. Jahrhundert erfunden.',
          ],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['passiv', 'praeteritum'],
          explain:
            'Past passive = wurde + Partizip II, and erfinden is irregular: erfunden. With hat the sentence would claim the telephone invented something itself.',
        },
        {
          id: 'x.b1.l22.5',
          kind: 'conjugate',
          verb: 'herunterladen',
          person: 'du',
          answer: 'lädst herunter',
          skill: 'verbs',
          difficulty: 2,
          tags: ['trennbar'],
          hint: 'Two pieces — and laden changes its vowel.',
          explain:
            'laden takes an Umlaut in the du and er forms like fahren: du lädst. herunter- is stressed, so it splits off and goes to the end.',
        },
        {
          id: 'x.b1.l22.6',
          kind: 'match',
          pairs: [
            ['herunterladen', 'to download'],
            ['speichern', 'to save'],
            ['löschen', 'to delete'],
            ['veröffentlichen', 'to publish'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          explain:
            'The life of a file: you download it, save it, publish it — or delete it. All four are common in the passive: wird gespeichert, wurde gelöscht.',
        },
        {
          id: 'x.b1.l22.7',
          kind: 'correct',
          wrong: 'Der Artikel, den ich habe gelesen, war sehr interessant.',
          answer: 'Der Artikel, den ich gelesen habe, war sehr interessant.',
          skill: 'wordorder',
          difficulty: 3,
          tags: ['relativsatz', 'perfekt'],
          explain:
            'A relative clause is a subordinate clause: the conjugated verb goes to the very end, so gelesen habe — participle first, auxiliary last. Then the main clause continues with war.',
        },
        {
          id: 'x.b1.l22.8',
          kind: 'blank',
          sentence: 'Die Daten müssen jeden Tag gespeichert ___.',
          answer: 'werden',
          skill: 'grammar',
          difficulty: 2,
          tags: ['passiv', 'modalverben'],
          hint: 'Modalverb … Partizip II + ?',
          explain:
            'Passive with a modal: the modal is conjugated in position 2, and the end of the sentence is Partizip II + werden — gespeichert werden.',
        },
        {
          id: 'x.b1.l22.9',
          kind: 'listen',
          audio: 'In den Nachrichten wurde berichtet, dass der Flughafen wegen Nebel geschlossen ist.',
          question: 'What was reported on the news?',
          options: ['The airport is closed because of fog.', 'The airport is closed because of a strike.', 'The airport is open again.'],
          answer: 0,
          skill: 'listening',
          difficulty: 2,
          tags: ['passiv'],
          explain:
            'wegen Nebel gives the reason, and geschlossen ist the state: closed. es wurde berichtet is how the news reports without naming the reporter.',
        },
        {
          id: 'x.b1.l22.10',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'The new app is used by many students.',
          answer: 'Die neue App wird von vielen Studenten benutzt.',
          accept: [
            'Die neue App wird von vielen Studierenden benutzt.',
            'Die neue App wird von vielen Studenten genutzt.',
            'Die neue App wird von vielen Studierenden genutzt.',
          ],
          skill: 'writing',
          difficulty: 3,
          tags: ['passiv'],
          hint: '"by" in the passive = von + Dativ',
          explain:
            'is used = wird + Partizip II. The doer follows von, which takes the dative: von vielen Studenten — the plural dative adds -n where it can.',
        },
      ],
    },

    /* ── 6. Build ───────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.b1.l22.11',
          kind: 'order',
          tokens: ['das Passwort', 'wird', 'jeden Monat', 'geändert'],
          answer: 'Das Passwort wird jeden Monat geändert.',
          accept: ['Jeden Monat wird das Passwort geändert.'],
          skill: 'wordorder',
          difficulty: 1,
          tags: ['passiv'],
          explain:
            'The passive forms a bracket like the Perfekt: wird in position 2, the participle geändert at the very end.',
        },
        {
          id: 'x.b1.l22.12',
          kind: 'order',
          tokens: ['das ist', 'der Kollege', 'der', 'die App', 'entwickelt hat'],
          answer: 'Das ist der Kollege, der die App entwickelt hat.',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['relativsatz'],
          explain:
            'der Kollege is masculine and does the developing — subject, nominative: der. The relative clause follows its noun directly, and hat closes it.',
        },
        {
          id: 'x.b1.l22.13',
          kind: 'order',
          tokens: ['die Sendung', 'die', 'gestern', 'gezeigt wurde', 'war', 'sehr spannend'],
          answer: 'Die Sendung, die gestern gezeigt wurde, war sehr spannend.',
          skill: 'wordorder',
          difficulty: 3,
          tags: ['relativsatz', 'passiv'],
          explain:
            'The relative clause sits inside the main clause, right after die Sendung. Its own verb is a passive — gezeigt wurde — and only after the second comma does the main clause go on with war.',
        },
      ],
    },

    /* ── 7. Reading ─────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read: a week without a smartphone',
      readingId: 'r.b1.l22.ohne-smartphone',
    },

    /* ── 8. Listening ───────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen: the evening news',
      listeningId: 'h.b1.l22.abendnachrichten',
    },

    /* ── 9. Conversation ────────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it: help your neighbour with her new phone',
      conversationId: 'c.b1.l22.neues-handy',
    },

    /* ── 10. Quiz ───────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.b1.l22.14',
          kind: 'blank',
          sentence: 'Kennst du die Frau, mit ___ ich gerade gesprochen habe?',
          options: ['der', 'die', 'dem', 'den'],
          answer: 'der',
          skill: 'grammar',
          difficulty: 2,
          tags: ['relativsatz', 'dativ'],
          explain:
            'The preposition mit decides the case — always dative — and die Frau decides the gender. Feminine dative is der: mit der ich gesprochen habe.',
        },
        {
          id: 'x.b1.l22.15',
          kind: 'mcq',
          prompt: 'Which sign is correct?',
          options: ['Hier wird nicht geraucht.', 'Hier wird nicht rauchen.', 'Hier ist nicht geraucht.'],
          answer: 0,
          skill: 'grammar',
          difficulty: 1,
          tags: ['passiv'],
          explain:
            'A passive without any subject — the typical form for rules and signs. It is still wird + Partizip II; ist + Partizip would describe a state, and rauchen after wird would be the future.',
        },
        {
          id: 'x.b1.l22.16',
          kind: 'dialogue',
          lines: [
            { who: 'Kollegin', text: 'Weißt du, wann die neue Version veröffentlicht wird?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Ich glaube, sie wird nächste Woche veröffentlicht.',
            'Ich glaube, sie wird nächste Woche veröffentlichen.',
            'Ich glaube, sie hat nächste Woche veröffentlicht.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['passiv'],
          explain:
            'The version does not publish anything — it is published. Keep the passive of the question: wird … veröffentlicht. With the infinitive veröffentlichen, wird would turn into a future with the version as the publisher.',
        },
        {
          id: 'x.b1.l22.17',
          kind: 'correct',
          wrong: 'Das ist das Handy, der ich gestern gekauft habe.',
          answer: 'Das ist das Handy, das ich gestern gekauft habe.',
          skill: 'grammar',
          difficulty: 2,
          tags: ['relativsatz'],
          explain:
            'das Handy is neuter, and in the clause it is the object. Neuter accusative is das — the relative pronoun copies the gender of the noun it refers to.',
        },
        {
          id: 'x.b1.l22.18',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'This is the article I told you about.',
          answer: 'Das ist der Artikel, von dem ich dir erzählt habe.',
          accept: ['Das ist der Artikel, über den ich dir erzählt habe.', 'Das ist der Artikel, von dem ich Ihnen erzählt habe.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['relativsatz', 'perfekt'],
          hint: 'erzählen von + Dativ — and German never leaves the relative pronoun out.',
          explain:
            'English can drop "that" and leave "about" hanging at the end; German cannot. The preposition moves to the front of the clause with the pronoun: von dem (dative, masculine) — and the verb goes last.',
        },
        {
          id: 'x.b1.l22.19',
          kind: 'speak',
          prompt: 'Say in German: The file was deleted.',
          answer: 'Die Datei wurde gelöscht.',
          skill: 'conversation',
          difficulty: 2,
          tags: ['passiv', 'praeteritum'],
          explain:
            'Past passive: wurde + Partizip II. löschen is regular, so gelöscht. die Datei is the file on your computer.',
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
