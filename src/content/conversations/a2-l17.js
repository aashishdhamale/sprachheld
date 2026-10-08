/**
 * A2 · L17 — Conversation: Monday morning at the coffee machine.
 *
 * Seven turns that walk a real anecdote from "How was your holiday?" to the
 * point of the story. Markus asks the questions a German colleague really asks,
 * in the order they really come: how was it, where were you, did anything
 * happen, what did you do then, how did it end, did anyone help, would you go
 * again. Every turn branches three ways — a good holiday, a bad one and an
 * in-between — so the learner's own answer decides where the story goes.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a2.l17.urlaubsgeschichte',
    level: 'A2',
    title: 'The holiday story at the coffee machine',
    titleDe: 'Die Urlaubsgeschichte an der Kaffeemaschine',
    icon: '☕',
    setting:
      'Monday, ten past nine. You are back after two weeks off. Markus from the next desk is waiting for his coffee and wants the whole story.',
    goal: 'Tell the story of your holiday in the Perfekt: say what happened, what you did about it, and how it ended.',
    roleBot: 'Markus, your colleague',
    roleUser: 'You, back from two weeks off',
    vocabIds: [
      'v.a2.l17.erzaehlen',
      'v.a2.l17.passieren',
      'v.a2.l17.erleben',
      'v.a2.l17.verlieren',
      'v.a2.l17.vergessen',
      'v.a2.l17.treffen',
      'v.a2.l17.geschichte',
      'v.a2.l17.erlebnis',
      'v.a2.l17.ploetzlich',
      'v.a2.l17.zuerst',
      'v.a2.l17.danach',
      'v.a2.l17.schliesslich',
    ],
    grammarIds: ['g.a2.perfekt-unregelmaessig'],
    tags: ['perfekt'],
    turns: [
      /* ── 1. How was it? ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Morgen, {name}! Du warst zwei Wochen weg. Wie war dein Urlaub?',
          en: 'Good morning, {name}! You were away for two weeks. How was your holiday?',
        },
        accept: [
          {
            match: ['stress', 'chaos', 'anstrengend', 'katastrophe', 'schlecht'],
            reply: {
              de: 'Oje, das klingt nicht gut. Dann erzähl mal von Anfang an.',
              en: 'Oh dear, that does not sound good. Then tell me from the beginning.',
            },
          },
          {
            match: ['kurz', 'schnell vorbei', 'zu wenig'],
            reply: {
              de: 'Urlaub ist immer zu kurz, das stimmt. Ich will trotzdem alles hören.',
              en: 'A holiday is always too short, that is true. I still want to hear everything.',
            },
          },
          {
            match: ['super', 'toll', 'schön', 'gut', 'erholsam'],
            reply: {
              de: 'Das freut mich! Man sieht dir die Sonne wirklich an.',
              en: 'I am glad! You can really see the sun on you.',
            },
          },
        ],
        fallback: {
          de: 'Sag mal ganz kurz: War der Urlaub schön oder eher stressig?',
          en: 'Just say it briefly: was the holiday nice or rather stressful?',
        },
        hints: ['Der Urlaub war super.', 'Ehrlich gesagt war es ziemlich stressig.', 'Schön, aber viel zu kurz!'],
        sample: 'Der Urlaub war super, aber viel zu kurz.',
        requires: { any: ['super', 'toll', 'schön', 'gut', 'stress', 'chaos', 'kurz', 'anstrengend'] },
        teaches: ['g.a2.perfekt-unregelmaessig'],
      },

      /* ── 2. Where were you? ────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und wohin seid ihr gefahren?',
          en: 'And where did you go?',
        },
        accept: [
          {
            match: ['berge', 'österreich', 'schweiz', 'wandern'],
            reply: {
              de: 'In die Berge! Da hat man wenigstens seine Ruhe.',
              en: 'To the mountains! At least you get some peace there.',
            },
          },
          {
            match: ['zu hause', 'geblieben', 'nirgendwo', 'balkon'],
            reply: {
              de: 'Zu Hause geblieben — das ist auch mal richtig schön.',
              en: 'You stayed at home — that is really nice sometimes too.',
            },
          },
          {
            match: ['italien', 'spanien', 'meer', 'strand', 'indien', 'griechenland'],
            reply: {
              de: 'Ans Meer, sehr gut. Da fahre ich am liebsten auch hin.',
              en: 'To the sea, very good. That is where I like going most as well.',
            },
          },
        ],
        fallback: {
          de: 'Sag einfach ein Land oder eine Stadt: Wo warst du?',
          en: 'Just name a country or a city: where were you?',
        },
        hints: ['Wir sind nach Italien gefahren.', 'Ich war in den Bergen.', 'Ich bin zu Hause geblieben.'],
        sample: 'Wir sind nach Italien ans Meer gefahren.',
        requires: { any: ['italien', 'spanien', 'berge', 'zu hause', 'gefahren', 'geflogen', 'war in'] },
        teaches: ['g.a2.perfekt-unregelmaessig'],
      },

      /* ── 3. Did anything happen? ───────────────────────────────────────── */
      {
        bot: {
          de: 'Und? Ist unterwegs etwas passiert?',
          en: 'And? Did anything happen on the way?',
        },
        accept: [
          {
            match: ['koffer', 'gepäck', 'tasche', 'verloren'],
            reply: {
              de: 'Den Koffer verloren! Das ist mein größter Albtraum.',
              en: 'Lost your suitcase! That is my biggest nightmare.',
            },
          },
          {
            match: ['verspätung', 'zug', 'flug', 'gewartet'],
            reply: {
              de: 'Verspätung, natürlich. Bei mir ist das auch jedes Mal so.',
              en: 'A delay, of course. It is the same for me every time.',
            },
          },
          {
            match: ['krank', 'arzt', 'magen', 'unfall'],
            reply: {
              de: 'Krank im Urlaub — das ist wirklich Pech.',
              en: 'Ill on holiday — that really is bad luck.',
            },
          },
        ],
        fallback: {
          de: 'Hat alles gut geklappt oder ist etwas schiefgegangen?',
          en: 'Did everything work out, or did something go wrong?',
        },
        hints: [
          'Ja, ich habe meinen Koffer verloren.',
          'Unser Flug hatte vier Stunden Verspätung.',
          'Ich bin leider krank geworden.',
        ],
        sample: 'Ja, leider. Ich habe am Flughafen meinen Koffer verloren.',
        requires: { any: ['koffer', 'verloren', 'verspätung', 'krank', 'flug', 'zug', 'problem', 'nichts'] },
        teaches: ['g.a2.perfekt-unregelmaessig'],
      },

      /* ── 4. What did you do then? ──────────────────────────────────────── */
      {
        bot: {
          de: 'Oje. Und was hast du dann gemacht?',
          en: 'Oh dear. And what did you do then?',
        },
        accept: [
          {
            match: ['schalter', 'gemeldet', 'polizei', 'formular'],
            reply: {
              de: 'Gut reagiert. Ohne Meldung bekommt man gar nichts zurück.',
              en: 'Good reaction. Without a report you get nothing back at all.',
            },
          },
          {
            match: ['gekauft', 'zahnbürste', 't-shirt', 'sachen'],
            reply: {
              de: 'Kluge Idee. Ein T-Shirt und eine Zahnbürste retten den ersten Tag.',
              en: 'Clever idea. A T-shirt and a toothbrush save the first day.',
            },
          },
          {
            match: ['gewartet', 'gesucht', 'nichts', 'hotel'],
            reply: {
              de: 'Warten ist wirklich das Schlimmste an so einer Geschichte.',
              en: 'Waiting really is the worst part of a story like that.',
            },
          },
        ],
        fallback: {
          de: 'Was war dein erster Schritt — melden, warten oder einkaufen?',
          en: 'What was your first step — reporting it, waiting or shopping?',
        },
        hints: [
          'Ich habe alles am Schalter gemeldet.',
          'Ich habe zwei Stunden gewartet.',
          'Ich habe mir neue Sachen gekauft.',
        ],
        sample: 'Zuerst bin ich zum Schalter gegangen und habe alles gemeldet.',
        requires: { any: ['schalter', 'gemeldet', 'gewartet', 'gekauft', 'gesucht', 'polizei', 'hotel'] },
        teaches: ['g.a2.perfekt-unregelmaessig'],
      },

      /* ── 5. How did it end? ────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und wie ist die Geschichte ausgegangen?',
          en: 'And how did the story end?',
        },
        accept: [
          {
            match: ['nie', 'nichts', 'immer noch', 'weg'],
            reply: {
              de: 'Das ist bitter. So etwas vergisst man leider nie.',
              en: 'That is bitter. Unfortunately you never forget something like that.',
            },
          },
          {
            match: ['tage', 'später', 'am nächsten tag', 'nach zwei'],
            reply: {
              de: 'Also ein paar Tage ohne alles. Das kenne ich leider auch.',
              en: 'So a few days without anything. Unfortunately I know that too.',
            },
          },
          {
            match: ['wiederbekommen', 'zurückbekommen', 'zurück', 'gefunden', 'wieder da', 'gut'],
            reply: {
              de: 'Zum Glück! Dann hat die Geschichte doch noch ein gutes Ende.',
              en: 'Thank goodness! Then the story has a happy ending after all.',
            },
          },
        ],
        fallback: {
          de: 'Hast du deine Sachen am Ende wiederbekommen oder nicht?',
          en: 'Did you get your things back in the end or not?',
        },
        hints: [
          'Nach drei Tagen habe ich alles wiederbekommen.',
          'Leider habe ich nichts wiederbekommen.',
          'Schließlich war alles wieder da.',
        ],
        sample: 'Schließlich habe ich nach drei Tagen alles wiederbekommen.',
        requires: { any: ['wiederbekommen', 'zurückbekommen', 'gefunden', 'wieder da', 'nichts', 'nie', 'tage', 'ende'] },
        teaches: ['g.a2.perfekt-unregelmaessig'],
      },

      /* ── 6. Did anyone help? ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Hat euch dort eigentlich jemand geholfen?',
          en: 'Did anyone there actually help you?',
        },
        accept: [
          {
            match: ['nein', 'niemand', 'allein', 'selbst'],
            reply: {
              de: 'Ganz allein also. Da lernt man sehr schnell neue Wörter.',
              en: 'All on your own then. You learn new words very fast that way.',
            },
          },
          {
            match: ['freund', 'familie', 'kollege', 'nachbarin', 'kennengelernt'],
            reply: {
              de: 'Gut, wenn man jemanden kennt. Das macht vieles leichter.',
              en: 'It is good when you know someone. That makes a lot of things easier.',
            },
          },
          {
            match: ['ja', 'mitarbeiterin', 'frau', 'mann', 'personal', 'hotel'],
            reply: {
              de: 'Schön, dass es noch nette Leute gibt.',
              en: 'Nice that there are still friendly people around.',
            },
          },
        ],
        fallback: {
          de: 'Hat dir jemand geholfen — ja oder nein?',
          en: 'Did anyone help you — yes or no?',
        },
        hints: [
          'Ja, eine Mitarbeiterin hat mir sehr geholfen.',
          'Nein, niemand hat uns geholfen.',
          'Eine Nachbarin im Hotel hat für mich angerufen.',
        ],
        sample: 'Ja, eine Mitarbeiterin am Schalter hat mir sehr geholfen.',
        requires: { any: ['ja', 'nein', 'geholfen', 'niemand', 'allein', 'mitarbeiterin', 'hotel'] },
        teaches: ['g.a2.perfekt-unregelmaessig'],
      },

      /* ── 7. Again next year? ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Und, {name}? Fährst du nächstes Jahr wieder dorthin?',
          en: 'And, {name}? Are you going there again next year?',
        },
        accept: [
          {
            match: ['nein', 'nie wieder', 'woanders', 'anderes land'],
            reply: {
              de: 'Verstehe. Dann probierst du nächstes Jahr etwas Neues.',
              en: 'I understand. Then you will try something new next year.',
            },
          },
          {
            match: ['vielleicht', 'mal sehen', 'weiß nicht'],
            reply: {
              de: 'Mal sehen also. Entscheide dich einfach im Winter.',
              en: 'Wait and see, then. Just decide in the winter.',
            },
          },
          {
            match: ['ja', 'klar', 'auf jeden fall', 'gern', 'wieder'],
            reply: {
              de: 'Sehr gut. Ein schlechter Tag macht noch keinen schlechten Urlaub.',
              en: 'Very good. One bad day does not make a bad holiday.',
            },
          },
        ],
        fallback: {
          de: 'Also noch einmal dorthin — ja, nein oder vielleicht?',
          en: 'So, there again — yes, no or maybe?',
        },
        hints: ['Ja, auf jeden Fall!', 'Nein, nächstes Jahr fahre ich woanders hin.', 'Vielleicht — mal sehen.'],
        sample: 'Ja, auf jeden Fall! Das Problem war nur ein Tag.',
        requires: { any: ['ja', 'nein', 'vielleicht', 'wieder', 'woanders', 'mal sehen'] },
        teaches: ['g.a2.perfekt-unregelmaessig'],
      },
    ],
    closing: {
      de: 'Danke für die Geschichte, {name}! So etwas erlebt man zum Glück nicht jedes Jahr. Ich hole uns noch einen Kaffee.',
      en: 'Thanks for the story, {name}! Luckily you do not go through something like that every year. I will get us another coffee.',
    },
  },
]

export default conversations
