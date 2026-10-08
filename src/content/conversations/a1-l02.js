/**
 * A1 · L02 — Conversation: registering at a language school.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l02.sprachschule',
    level: 'A1',
    title: 'Anmeldung in der Sprachschule',
    icon: '🪪',
    setting:
      'You walk into a language school in Berlin to sign up for a German course. Frau Vogel at the reception desk has a registration form in front of her.',
    goal: 'Give your name, your country, your job and your city — and spell your surname.',
    roleBot: 'Frau Vogel, the receptionist',
    roleUser: 'You, a new course participant',
    vocabIds: [
      'v.a1.l02.kommen',
      'v.a1.l02.wohnen',
      'v.a1.l02.arbeiten',
      'v.a1.l02.sprechen',
      'v.a1.l02.buchstabieren',
      'v.a1.l02.beruf',
      'v.a1.l02.land',
    ],
    grammarIds: ['g.a1.wfragen', 'g.a1.praesens'],
    tags: ['personal', 'w-fragen'],
    turns: [
      /* ── 1. Name ───────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Tag! Willkommen in der Sprachschule. Wie heißen Sie?',
          en: 'Hello! Welcome to the language school. What is your name?',
        },
        accept: [
          {
            match: ['ich heiße', 'ich heisse'],
            reply: {
              de: 'Freut mich, {name}! Das schreibe ich gleich in das Formular.',
              en: 'Nice to meet you, {name}! I will write that on the form right away.',
            },
          },
          {
            match: ['mein name ist'],
            reply: {
              de: 'Danke schön, {name}. Sehr höflich — so sagt man das am Telefon auch.',
              en: 'Thank you, {name}. Very polite — that is how people say it on the phone too.',
            },
          },
          {
            match: ['ich bin'],
            reply: {
              de: 'Alles klar, {name}. Willkommen bei uns!',
              en: 'Got it, {name}. Welcome!',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — wie heißen Sie, bitte?',
          en: 'Sorry — what is your name, please?',
        },
        hints: ['Ich heiße …', 'Mein Name ist …', 'Ich bin …'],
        sample: 'Ich heiße Priya Sharma.',
        requires: { any: ['ich heiße', 'ich heisse', 'mein name ist', 'ich bin'] },
        teaches: ['g.a1.wfragen'],
      },

      /* ── 2. Country ────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und woher kommen Sie, {name}?',
          en: 'And where are you from, {name}?',
        },
        accept: [
          {
            match: ['indien'],
            reply: {
              de: 'Aus Indien! Im Kurs sind auch zwei Studenten aus Delhi.',
              en: 'From India! There are two students from Delhi in the course as well.',
            },
          },
          {
            match: ['ich komme aus'],
            reply: {
              de: 'Perfekt — genau so sagt man das: kommen plus aus. Ich schreibe das Land in das Formular.',
              en: 'Perfect — that is exactly how you say it: kommen plus aus. I will write the country on the form.',
            },
          },
          {
            match: ['aus'],
            reply: {
              de: 'Danke! Ihr Land steht jetzt im Formular.',
              en: 'Thank you! Your country is on the form now.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — woher kommen Sie? Zum Beispiel: Ich komme aus Indien.',
          en: 'Sorry — where are you from? For example: I come from India.',
        },
        hints: ['Ich komme aus …', 'Woher? → aus + Land', 'aus Indien, aus Österreich, aus Brasilien'],
        sample: 'Ich komme aus Indien.',
        requires: { any: ['ich komme aus', 'aus'] },
        teaches: ['g.a1.wfragen', 'g.a1.praesens'],
      },

      /* ── 3. Job ────────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und was sind Sie von Beruf?',
          en: 'And what is your job?',
        },
        accept: [
          {
            match: ['ingenieur'],
            reply: {
              de: 'Ingenieur — sehr gut. Viele Ingenieure lernen hier Deutsch für die Arbeit.',
              en: 'Engineer — very good. Many engineers learn German here for work.',
            },
          },
          {
            match: ['student', 'studentin'],
            reply: {
              de: 'Student also. Dann ist der Abendkurs praktisch für Sie.',
              en: 'A student then. In that case the evening course is practical for you.',
            },
          },
          {
            match: ['ich arbeite als', 'ich bin', 'arbeite'],
            reply: {
              de: 'Danke! Ihr Beruf steht jetzt auch im Formular.',
              en: 'Thank you! Your job is on the form now too.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — was sind Sie von Beruf? Zum Beispiel: Ich bin Ingenieur.',
          en: 'Sorry — what is your job? For example: I am an engineer.',
        },
        hints: [
          'Ich bin Ärztin. (kein Artikel nach sein!)',
          'Ich arbeite als Lehrerin.',
          'Berufe: Student, Ingenieur, Ärztin, Lehrerin',
        ],
        sample: 'Ich bin Ärztin. Ich arbeite als Ärztin in Berlin.',
        requires: { any: ['ich bin', 'ich arbeite als', 'arbeite'] },
        teaches: ['g.a1.praesens'],
      },

      /* ── 4. City ───────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Wo wohnen Sie hier in Deutschland?',
          en: 'Where do you live here in Germany?',
        },
        accept: [
          {
            match: ['berlin'],
            reply: {
              de: 'In Berlin — sehr praktisch, die Schule ist auch in Berlin.',
              en: 'In Berlin — very practical, the school is in Berlin too.',
            },
          },
          {
            match: ['ich wohne in'],
            reply: {
              de: 'Danke! wohnen und in gehören zusammen — das machen Sie schon richtig.',
              en: 'Thank you! wohnen and in belong together — you are already doing that correctly.',
            },
          },
          {
            match: ['wohne'],
            reply: {
              de: 'Alles klar. Ich notiere Ihren Wohnort.',
              en: 'All right. I am noting down where you live.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — wo wohnen Sie? Zum Beispiel: Ich wohne in Berlin.',
          en: 'Sorry — where do you live? For example: I live in Berlin.',
        },
        hints: ['Ich wohne in …', 'Ich wohne in Hamburg.', 'in Berlin, in Wien, in Leipzig'],
        sample: 'Ich wohne in Berlin.',
        requires: { any: ['ich wohne', 'wohne'] },
        teaches: ['g.a1.praesens'],
      },

      /* ── 5. Spelling the surname ───────────────────────────────────────── */
      {
        bot: {
          de: 'Danke! Und wie ist Ihr Familienname? Bitte buchstabieren Sie.',
          en: 'Thank you! And what is your surname? Please spell it.',
        },
        accept: [
          {
            match: ['-'],
            reply: {
              de: 'Danke, Buchstabe für Buchstabe — jetzt habe ich den Namen richtig.',
              en: 'Thank you, letter by letter — now I have the name right.',
            },
          },
          {
            match: ['wie'],
            reply: {
              de: 'Perfekt, mit dem Buchstabieralphabet! „S wie Samuel" hört man am Telefon sehr gut.',
              en: 'Perfect, with the spelling alphabet! "S wie Samuel" is very clear on the phone.',
            },
          },
          {
            match: ['familienname', 'mein name ist', 'ich heiße'],
            reply: {
              de: 'Danke! Und jetzt bitte noch einmal langsam, Buchstabe für Buchstabe.',
              en: 'Thank you! And now once more slowly please, letter by letter.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — bitte buchstabieren Sie Ihren Familiennamen: zum Beispiel S-I-L-V-A.',
          en: 'Sorry — please spell your surname: for example S-I-L-V-A.',
        },
        hints: [
          'Mein Familienname ist … Ich buchstabiere: …',
          'Buchstabe für Buchstabe: S – H – A – R – M – A',
          '„A wie Anna, B wie Berta, S wie Samuel …"',
        ],
        sample: 'Mein Familienname ist Sharma. Ich buchstabiere: S-H-A-R-M-A.',
        requires: { any: ['-', 'wie', 'buchstab'] },
        teaches: ['g.a1.praesens'],
      },

      /* ── 6. Languages ──────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Vielen Dank! Sprechen Sie schon ein bisschen Deutsch?',
          en: 'Thank you very much! Do you already speak a little German?',
        },
        accept: [
          {
            match: ['ein bisschen', 'etwas'],
            reply: {
              de: 'Ein bisschen ist schon viel! Dann passt der Kurs A1.2 gut.',
              en: 'A little is already a lot! Then course A1.2 is a good fit.',
            },
          },
          {
            match: ['ja'],
            reply: {
              de: 'Sehr gut! Dann machen wir am Montag einen kurzen Test.',
              en: 'Very good! Then we will do a short test on Monday.',
            },
          },
          {
            match: ['nein', 'nicht'],
            reply: {
              de: 'Kein Problem — der Kurs A1.1 beginnt ganz am Anfang.',
              en: 'No problem — course A1.1 starts right at the beginning.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — sprechen Sie Deutsch? Ja oder nein?',
          en: 'Sorry — do you speak German? Yes or no?',
        },
        hints: ['Ja, ein bisschen.', 'Nein, noch nicht.', 'Ich spreche Englisch und ein bisschen Deutsch.'],
        sample: 'Ja, ich spreche ein bisschen Deutsch.',
        requires: { any: ['ja', 'nein', 'bisschen', 'spreche'] },
        teaches: ['g.a1.praesens'],
      },
    ],
    closing: {
      de: 'Perfekt, {name}! Ihr Formular ist fertig. Der Kurs beginnt am Montag um neun Uhr. Bis dann!',
      en: 'Perfect, {name}! Your form is complete. The course starts on Monday at nine. See you then!',
    },
  },
]

export default conversations
