/**
 * A1 · L02 — Personal information / Persönliche Angaben
 *
 * Countries, languages, jobs, where you live — plus W-Fragen and the
 * regular present tense.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const lesson = {
  id: 'a1.l02',
  moduleId: 'a1.basics',
  level: 'A1',
  order: 2,
  title: 'Personal information',
  titleDe: 'Persönliche Angaben',
  icon: '🪪',
  summary:
    'Say where you come from, where you live and what you do — and ask someone else the same, on the phone or at a counter.',
  minutes: 16,
  objectives: [
    'Say which country you come from and which city you live in',
    'Name your job and the languages you speak',
    'Ask someone for their origin, job, phone number and e-mail address',
    'Spell your surname out loud, letter by letter',
  ],
  vocabIds: [
    'v.a1.l02.land',
    'v.a1.l02.kommen',
    'v.a1.l02.inder',
    'v.a1.l02.deutsch',
    'v.a1.l02.sprache',
    'v.a1.l02.sprechen',
    'v.a1.l02.wohnen',
    'v.a1.l02.arbeiten',
    'v.a1.l02.beruf',
    'v.a1.l02.ingenieur',
    'v.a1.l02.lehrerin',
    'v.a1.l02.student',
    'v.a1.l02.aerztin',
    'v.a1.l02.buchstabieren',
    'v.a1.l02.telefonnummer',
    'v.a1.l02.email-adresse',
  ],
  grammarIds: ['g.a1.wfragen', 'g.a1.praesens'],

  steps: [
    /* ── 1. Learn ──────────────────────────────────────────────────────── */
    {
      type: 'learn',
      title: 'Four questions about you',
      blocks: [
        {
          kind: 'text',
          text: 'Every form, every counter and every first phone call in Germany asks the same four things: **where you come from**, **where you live**, **what you do** and **which languages you speak**. Learn the four answers and you can fill in almost any Anmeldung.',
        },
        {
          kind: 'examples',
          items: [
            {
              de: 'Woher kommen Sie? – Ich komme aus Indien.',
              en: 'Where are you from? – I come from India.',
            },
            {
              de: 'Wo wohnen Sie? – Ich wohne in Berlin.',
              en: 'Where do you live? – I live in Berlin.',
            },
            {
              de: 'Was sind Sie von Beruf? – Ich bin Ingenieur.',
              en: 'What is your job? – I am an engineer.',
              note: 'No ein after sein — a job stands completely bare.',
            },
            {
              de: 'Welche Sprachen sprechen Sie? – Ich spreche Englisch und ein bisschen Deutsch.',
              en: 'Which languages do you speak? – I speak English and a little German.',
            },
          ],
        },
        {
          kind: 'table',
          head: ['Frage', 'Antwort', 'Struktur'],
          rows: [
            ['Woher …?', 'Ich komme aus Indien.', 'kommen + aus + Land'],
            ['Wo …?', 'Ich wohne in Berlin.', 'wohnen + in + Stadt'],
            ['Was … von Beruf?', 'Ich arbeite als Lehrerin.', 'arbeiten + als + Beruf'],
            ['Wie alt …?', 'Ich bin 30 Jahre alt.', 'sein + Zahl + Jahre alt'],
          ],
        },
        {
          kind: 'tip',
          text: 'Three tiny words carry this whole lesson: **aus** for your country, **in** for your town, **als** for your job.',
        },
        {
          kind: 'warn',
          text: 'Jobs and nationalities take **no article** after *sein*: *Ich bin Ärztin*, *Er ist Inder* — never *eine Ärztin*, *ein Inder*.',
        },
      ],
    },

    /* ── 2. Vocab ──────────────────────────────────────────────────────── */
    {
      type: 'vocab',
      title: 'New words',
      vocabIds: [
        'v.a1.l02.land',
        'v.a1.l02.kommen',
        'v.a1.l02.inder',
        'v.a1.l02.deutsch',
        'v.a1.l02.sprache',
        'v.a1.l02.sprechen',
        'v.a1.l02.wohnen',
        'v.a1.l02.arbeiten',
        'v.a1.l02.beruf',
        'v.a1.l02.ingenieur',
        'v.a1.l02.lehrerin',
        'v.a1.l02.student',
        'v.a1.l02.aerztin',
        'v.a1.l02.buchstabieren',
        'v.a1.l02.telefonnummer',
        'v.a1.l02.email-adresse',
      ],
    },

    /* ── 3. Grammar: W-Fragen ──────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Question words (W-Fragen)',
      grammarId: 'g.a1.wfragen',
    },

    /* ── 4. Grammar: Präsens ───────────────────────────────────────────── */
    {
      type: 'grammar',
      title: 'Regular verbs in the present tense',
      grammarId: 'g.a1.praesens',
    },

    /* ── 5. Practice ───────────────────────────────────────────────────── */
    {
      type: 'practice',
      title: 'Practice',
      exercises: [
        {
          id: 'x.a1.l02.1',
          kind: 'blank',
          sentence: 'Woher ___ Sie?',
          options: ['kommen', 'kommt', 'komme', 'kommst'],
          answer: 'kommen',
          skill: 'verbs',
          difficulty: 1,
          tags: ['w-fragen', 'konjugation'],
          explain: 'Polite Sie takes the -en ending, exactly like wir and sie (they). The W-word woher fills position 1, so the verb comes straight after it.',
        },
        {
          id: 'x.a1.l02.2',
          kind: 'match',
          pairs: [
            ['Woher kommen Sie?', 'Where are you from?'],
            ['Wo wohnen Sie?', 'Where do you live?'],
            ['Was sind Sie von Beruf?', 'What is your job?'],
            ['Wie ist Ihre Telefonnummer?', 'What is your phone number?'],
          ],
          skill: 'vocabulary',
          difficulty: 1,
          tags: ['w-fragen'],
          explain: 'Notice which W-word does what: places use wo/woher, but a name, a number or an address is always asked for with wie, never with was.',
        },
        {
          id: 'x.a1.l02.3',
          kind: 'article',
          noun: 'Beruf',
          answer: 'der',
          plural: 'die Berufe',
          meaning: 'job, profession',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel'],
          explain: 'Short nouns built straight from a verb stem are nearly always masculine: der Beruf, der Besuch, der Beginn. Their plural adds -e.',
        },
        {
          id: 'x.a1.l02.4',
          kind: 'conjugate',
          verb: 'arbeiten',
          person: 'er',
          answer: 'arbeitet',
          skill: 'verbs',
          difficulty: 2,
          tags: ['konjugation'],
          hint: 'What sound does the stem end in?',
          explain: 'The stem arbeit- already ends in -t, so an extra -e- is slipped in before the ending — otherwise "arbeitt" would be unpronounceable.',
        },
        {
          id: 'x.a1.l02.5',
          kind: 'blank',
          sentence: 'Frau Berg arbeitet ___ Ärztin in Köln.',
          options: ['als', 'aus', 'wie', 'in'],
          answer: 'als',
          skill: 'grammar',
          difficulty: 2,
          tags: ['praeposition'],
          explain: 'A job after arbeiten is introduced by als and keeps no article: Ich arbeite als Lehrerin. wie would mean "like a doctor", not "as a doctor".',
        },
        {
          id: 'x.a1.l02.6',
          kind: 'mcq',
          prompt: 'Which sentence is correct?',
          options: ['Er ist Inder.', 'Er ist ein Inder.', 'Er ist Indien.'],
          answer: 0,
          skill: 'grammar',
          difficulty: 2,
          tags: ['artikel'],
          explain: 'Nationalities behave like jobs after sein — no article at all. And Indien is the country; the person from it is der Inder.',
        },
        {
          id: 'x.a1.l02.7',
          kind: 'correct',
          wrong: 'Du sprechst sehr gut Deutsch.',
          answer: 'Du sprichst sehr gut Deutsch.',
          skill: 'verbs',
          difficulty: 2,
          tags: ['konjugation'],
          explain: 'sprechen swaps e → i in the du and er forms: du sprichst, er spricht. The endings themselves stay completely normal.',
        },
        {
          id: 'x.a1.l02.8',
          kind: 'dialogue',
          lines: [
            { who: 'Empfang', text: 'Wie ist Ihre E-Mail-Adresse?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Meine E-Mail-Adresse ist priya.sharma@mail.de.',
            'Ich heiße Priya Sharma.',
            'Ich wohne in Frankfurt.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 2,
          tags: ['w-fragen'],
          explain: 'A W-question demands exactly the information it asks for: wie ist Ihre E-Mail-Adresse wants the address, not your name or your city.',
        },
        {
          id: 'x.a1.l02.9',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'I come from India and live in Munich.',
          answer: 'Ich komme aus Indien und wohne in München.',
          accept: ['Ich komme aus Indien und ich wohne in München.'],
          skill: 'writing',
          difficulty: 3,
          tags: ['praesens'],
          hint: 'Two different prepositions — one for the country, one for the town.',
          explain: 'kommen takes aus for the country you are from, wohnen takes in for the town you are in; both verbs belong to ich, so both end in -e.',
        },
      ],
    },

    /* ── 6. Build ──────────────────────────────────────────────────────── */
    {
      type: 'build',
      title: 'Build the sentence',
      exercises: [
        {
          id: 'x.a1.l02.10',
          kind: 'order',
          tokens: ['ich', 'komme', 'aus', 'Indien'],
          answer: 'Ich komme aus Indien.',
          skill: 'wordorder',
          difficulty: 1,
          tags: ['wortstellung'],
          explain: 'Subject, then the conjugated verb in position 2, then the rest. aus Indien is the country of origin and never moves in front of the verb here.',
        },
        {
          id: 'x.a1.l02.11',
          kind: 'order',
          tokens: ['woher', 'kommt', 'Frau', 'Yilmaz'],
          answer: 'Woher kommt Frau Yilmaz?',
          skill: 'wordorder',
          difficulty: 2,
          tags: ['w-fragen', 'wortstellung'],
          explain: 'The W-word itself is position 1, so the verb has to follow immediately and the subject waits behind it — never "Woher Frau Yilmaz kommt?".',
        },
        {
          id: 'x.a1.l02.12',
          kind: 'order',
          tokens: ['am Montag', 'arbeite', 'ich', 'in Wien'],
          answer: 'Am Montag arbeite ich in Wien.',
          accept: ['Ich arbeite am Montag in Wien.'],
          skill: 'wordorder',
          difficulty: 2,
          tags: ['wortstellung'],
          explain: 'A time phrase may open the sentence, but it does not create an extra slot: arbeite stays the second element, so ich hops behind the verb.',
        },
        {
          id: 'x.a1.l02.13',
          kind: 'order',
          tokens: ['jeden Tag', 'spreche', 'ich', 'im Büro', 'Deutsch'],
          answer: 'Jeden Tag spreche ich im Büro Deutsch.',
          accept: ['Ich spreche jeden Tag im Büro Deutsch.'],
          skill: 'wordorder',
          difficulty: 3,
          tags: ['wortstellung'],
          explain: 'Only one element may stand before the verb; the rest queue up behind the subject with time (jeden Tag) before place (im Büro).',
        },
      ],
    },

    /* ── 7. Reading ────────────────────────────────────────────────────── */
    {
      type: 'reading',
      title: 'Read',
      readingId: 'r.a1.l02.drei-profile',
    },

    /* ── 8. Listening ──────────────────────────────────────────────────── */
    {
      type: 'listening',
      title: 'Listen',
      listeningId: 'h.a1.l02.anmeldung-am-telefon',
    },

    /* ── 9. Conversation ───────────────────────────────────────────────── */
    {
      type: 'conversation',
      title: 'Use it',
      conversationId: 'c.a1.l02.sprachschule',
    },

    /* ── 10. Quiz ──────────────────────────────────────────────────────── */
    {
      type: 'quiz',
      title: 'Quiz',
      exercises: [
        {
          id: 'x.a1.l02.22',
          kind: 'blank',
          sentence: 'Wie ___ Ihre Telefonnummer?',
          options: ['ist', 'sind', 'hat', 'heißt'],
          answer: 'ist',
          skill: 'grammar',
          difficulty: 1,
          tags: ['w-fragen'],
          explain: 'German asks for a number, an address or a name with wie + sein, and the subject is the singular Telefonnummer, so the verb is ist.',
        },
        {
          id: 'x.a1.l02.23',
          kind: 'article',
          noun: 'Sprache',
          answer: 'die',
          plural: 'die Sprachen',
          meaning: 'language',
          skill: 'articles',
          difficulty: 1,
          tags: ['artikel'],
          explain: 'Nouns ending in -e are feminine in the great majority of cases, and they form their plural with -n: die Sprache → die Sprachen.',
        },
        {
          id: 'x.a1.l02.24',
          kind: 'conjugate',
          verb: 'buchstabieren',
          person: 'du',
          answer: 'buchstabierst',
          skill: 'verbs',
          difficulty: 2,
          tags: ['konjugation'],
          explain: 'Verbs ending in -ieren are perfectly regular: cut off -en and add the ending. The stem ends in -r, so no extra -e- is needed.',
        },
        {
          id: 'x.a1.l02.25',
          kind: 'correct',
          wrong: 'Sie ist eine Ärztin und arbeitet in Köln.',
          answer: 'Sie ist Ärztin und arbeitet in Köln.',
          skill: 'grammar',
          difficulty: 2,
          tags: ['artikel'],
          explain: 'After sein a profession stands bare, with no article: Sie ist Ärztin, Er ist Student. English needs "a", German deletes it.',
        },
        {
          id: 'x.a1.l02.26',
          kind: 'translate',
          direction: 'en-de',
          prompt: 'Where do you live and what is your job? (formal)',
          answer: 'Wo wohnen Sie und was sind Sie von Beruf?',
          accept: ['Wo wohnen Sie und was machen Sie beruflich?'],
          skill: 'writing',
          difficulty: 3,
          tags: ['w-fragen'],
          hint: 'Two questions joined by und — each one keeps its own W-word.',
          explain: 'und joins two complete questions, so each half starts with its own W-word and puts the verb second; polite Sie always takes the -en ending.',
        },
        {
          id: 'x.a1.l02.27',
          kind: 'dialogue',
          lines: [
            { who: 'Empfang', text: 'Und was sind Sie von Beruf?' },
            { who: 'Sie', text: '___' },
          ],
          options: [
            'Ich arbeite als Lehrerin.',
            'Ich arbeite als eine Lehrerin.',
            'Ich arbeite wie Lehrerin.',
          ],
          answer: 0,
          skill: 'conversation',
          difficulty: 3,
          tags: ['praeposition'],
          explain: 'als takes the bare job name — adding eine is wrong, and wie would say you only resemble a teacher instead of being one.',
        },
      ],
    },

    /* ── 11. Review ────────────────────────────────────────────────────── */
    {
      type: 'review',
      title: 'Review',
      count: 3,
    },
  ],
}

export default lesson
