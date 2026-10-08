/**
 * B1 · L25 — Conversation: a friend needs to talk after an argument.
 *
 * Seven turns with a friend who has quarrelled with his girlfriend: show
 * sympathy, react to what had happened, give an honest opinion, give advice
 * in Konjunktiv II, suggest what to do if she will not talk, back his plan,
 * close warmly. du throughout; his account uses the Plusquamperfekt, and the
 * learner reacts to it.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.b1.l25.streit',
    level: 'B1',
    title: 'A friend needs to talk',
    titleDe: 'Ein Freund braucht jemanden zum Reden',
    icon: '🫂',
    setting:
      'You meet your friend Max for a coffee. He looks tired and unhappy. Yesterday he had a big argument with his girlfriend Jana, and he wants your advice.',
    goal:
      'Listen, ask what happened, give an honest opinion and good advice, and support his plan to make up with Jana.',
    roleBot: 'Max, your friend',
    roleUser: 'You, his friend',
    vocabIds: [
      'v.b1.l25.streiten',
      'v.b1.l25.versoehnen',
      'v.b1.l25.beziehung',
      'v.b1.l25.vertrauen',
      'v.b1.l25.freundschaft',
      'v.b1.l25.entspannen',
    ],
    grammarIds: ['g.b1.plusquamperfekt', 'g.a2.reflexiv'],
    tags: ['plusquamperfekt', 'reflexiv'],
    turns: [
      /* ── 1. Sympathy ───────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Hi {name}. Ach, mir geht es nicht so gut. Ich habe mich gestern total mit Jana gestritten.',
          en: 'Hi {name}. Oh, I am not doing so well. I had a huge argument with Jana yesterday.',
        },
        accept: [
          {
            match: ['was ist passiert', 'was war', 'warum', 'worüber'],
            reply: {
              de: 'Es ist eigentlich eine dumme Geschichte.',
              en: 'It is actually a stupid story.',
            },
          },
          {
            match: ['tut mir leid', 'oh nein', 'schade', 'arme'],
            reply: {
              de: 'Danke. Ich muss dir erzählen, was passiert ist.',
              en: 'Thanks. I have to tell you what happened.',
            },
          },
        ],
        fallback: {
          de: 'Willst du hören, was passiert ist?',
          en: 'Do you want to hear what happened?',
        },
        hints: [
          'Oh nein, das tut mir leid. Was ist passiert?',
          'Warum habt ihr euch gestritten?',
          'Worüber habt ihr euch gestritten?',
        ],
        sample: 'Oh nein, das tut mir leid. Was ist passiert?',
        requires: { any: ['passiert', 'warum', 'worüber', 'tut mir leid', 'oh nein'] },
        teaches: ['g.a2.reflexiv'],
      },

      /* ── 2. What had happened ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Wir wollten zusammen essen gehen. Aber ich hatte den Termin total vergessen und war noch im Fitnessstudio. Sie hat eine Stunde im Restaurant gewartet.',
          en: 'We wanted to go out for dinner together. But I had completely forgotten the date and was still at the gym. She waited in the restaurant for an hour.',
        },
        accept: [
          {
            match: ['eine stunde', 'gewartet', 'ärgerlich', 'verstehe', 'kann ich verstehen'],
            reply: {
              de: 'Ja, ich weiß. Ich verstehe sie ja auch.',
              en: 'Yes, I know. I understand her too.',
            },
          },
          {
            match: ['kann passieren', 'passiert', 'nicht so schlimm', 'nicht schlimm'],
            reply: {
              de: 'Das habe ich auch gesagt. Aber sie war trotzdem richtig wütend.',
              en: 'That is what I said too. But she was still really angry.',
            },
          },
          {
            match: ['entschuldigt', 'entschuldigen', 'angerufen', 'geschrieben'],
            reply: {
              de: 'Ich habe mich sofort entschuldigt, aber sie wollte nicht mit mir sprechen.',
              en: 'I apologised straight away, but she did not want to talk to me.',
            },
          },
        ],
        fallback: {
          de: 'Was sagst du dazu?',
          en: 'What do you say to that?',
        },
        hints: [
          'Eine Stunde! Das kann ich verstehen, dass sie sauer war.',
          'Das ist ärgerlich, aber so etwas kann passieren.',
          'Hast du dich entschuldigt?',
        ],
        sample: 'Eine Stunde! Ich kann verstehen, dass sie sauer war. Hast du dich entschuldigt?',
        requires: { any: ['stunde', 'verstehe', 'verstehen', 'passieren', 'entschuldigt', 'ärgerlich'] },
        teaches: ['g.b1.plusquamperfekt'],
      },

      /* ── 3. An honest opinion ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Sie sagt, dass ich nie Zeit für sie habe. Glaubst du, sie hat recht?',
          en: 'She says that I never have time for her. Do you think she is right?',
        },
        accept: [
          {
            match: ['ein bisschen', 'vielleicht', 'manchmal', 'ehrlich'],
            reply: {
              de: 'Hm. Wahrscheinlich hast du recht. Ich arbeite wirklich zu viel.',
              en: 'Hm. You are probably right. I really do work too much.',
            },
          },
          {
            match: ['ja', 'recht', 'stimmt'],
            reply: {
              de: 'Autsch. Aber ehrlich gesagt — du hast recht.',
              en: 'Ouch. But to be honest — you are right.',
            },
          },
          {
            match: ['nein', 'glaube nicht', 'nicht fair', 'übertreibt'],
            reply: {
              de: 'Danke, das tut gut zu hören. Aber ein bisschen hat sie schon recht.',
              en: 'Thanks, that is good to hear. But she is a little bit right.',
            },
          },
        ],
        fallback: {
          de: 'Sag ehrlich: Hat sie recht?',
          en: 'Tell me honestly: is she right?',
        },
        hints: [
          'Vielleicht ein bisschen. Du arbeitest wirklich sehr viel.',
          'Ehrlich gesagt: Ja, sie hat recht.',
          'Nein, ich glaube nicht. Das ist nicht fair.',
        ],
        sample: 'Vielleicht ein bisschen. Du arbeitest wirklich sehr viel.',
        requires: { any: ['vielleicht', 'ja', 'nein', 'recht', 'bisschen', 'ehrlich'] },
        teaches: ['g.a2.reflexiv'],
      },

      /* ── 4. Advice ─────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Was würdest du an meiner Stelle machen?',
          en: 'What would you do in my place?',
        },
        accept: [
          {
            match: ['würde', 'an deiner stelle', 'ich würde', 'solltest', 'mehr zeit'],
            reply: {
              de: 'Ja, das sollte ich wirklich tun.',
              en: 'Yes, I really should do that.',
            },
          },
          {
            match: ['entschuldigen', 'sprechen', 'reden', 'in ruhe'],
            reply: {
              de: 'In Ruhe reden — ja, das ist wahrscheinlich das Wichtigste.',
              en: 'Talk calmly — yes, that is probably the most important thing.',
            },
          },
          {
            match: ['blumen', 'geschenk', 'einladen', 'überraschung'],
            reply: {
              de: 'Eine kleine Überraschung — gute Idee! Sie liebt Tulpen.',
              en: 'A little surprise — good idea! She loves tulips.',
            },
          },
        ],
        fallback: {
          de: 'Sag mir bitte, was ich machen soll.',
          en: 'Please tell me what I should do.',
        },
        hints: [
          'An deiner Stelle würde ich mich noch einmal entschuldigen und in Ruhe mit ihr reden.',
          'Ich würde ihr Blumen schenken.',
          'Du solltest mehr Zeit mit ihr verbringen.',
        ],
        sample: 'An deiner Stelle würde ich mich noch einmal entschuldigen und in Ruhe mit ihr reden.',
        requires: { any: ['würde', 'solltest', 'entschuldigen', 'reden', 'blumen', 'sprechen'] },
        teaches: ['g.a2.reflexiv'],
      },

      /* ── 5. If she will not talk ───────────────────────────────────────── */
      {
        bot: {
          de: 'Und wenn sie nicht mit mir reden will?',
          en: 'And if she does not want to talk to me?',
        },
        accept: [
          {
            match: ['zeit', 'warte', 'warten', 'geduld'],
            reply: {
              de: 'Stimmt, vielleicht braucht sie einfach ein paar Tage.',
              en: 'True, maybe she just needs a few days.',
            },
          },
          {
            match: ['schreib', 'brief', 'nachricht', 'karte'],
            reply: {
              de: 'Ein Brief — das ist altmodisch, aber eigentlich sehr schön.',
              en: 'A letter — that is old-fashioned, but actually very nice.',
            },
          },
          {
            match: ['freundin', 'schwester', 'fragen'],
            reply: {
              de: 'Ich könnte ihre Schwester fragen, wie es ihr geht. Gute Idee.',
              en: 'I could ask her sister how she is doing. Good idea.',
            },
          },
        ],
        fallback: {
          de: 'Was mache ich dann?',
          en: 'What do I do then?',
        },
        hints: [
          'Dann gib ihr ein bisschen Zeit.',
          'Schreib ihr einen Brief.',
          'Frag doch ihre Schwester, wie es ihr geht.',
        ],
        sample: 'Dann gib ihr ein bisschen Zeit und schreib ihr eine nette Nachricht.',
        requires: { any: ['zeit', 'warte', 'schreib', 'brief', 'nachricht', 'frag'] },
        teaches: ['g.a2.reflexiv'],
      },

      /* ── 6. His plan ───────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Okay. Ich glaube, ich lade sie am Samstag in unser Lieblingsrestaurant ein — und diesmal bin ich pünktlich! Findest du das gut?',
          en: 'Okay. I think I will invite her to our favourite restaurant on Saturday — and this time I will be on time! Do you think that is a good idea?',
        },
        accept: [
          {
            match: ['gute idee', 'schöne idee', 'super', 'toll', 'perfekt'],
            reply: {
              de: 'Danke! Dann reserviere ich gleich einen Tisch.',
              en: 'Thanks! Then I will reserve a table right away.',
            },
          },
          {
            match: ['ja', 'gut', 'sicher'],
            reply: {
              de: 'Gut. Und ich stelle mir drei Wecker!',
              en: 'Good. And I will set three alarms!',
            },
          },
          {
            match: ['nein', 'lieber', 'zu früh'],
            reply: {
              de: 'Hm, vielleicht hast du recht. Ich frage sie zuerst, ob sie überhaupt Lust hat.',
              en: 'Hm, maybe you are right. I will ask her first whether she even feels like it.',
            },
          },
        ],
        fallback: {
          de: 'Was hältst du von meinem Plan?',
          en: 'What do you think of my plan?',
        },
        hints: [
          'Ja, das ist eine schöne Idee!',
          'Super, aber sei wirklich pünktlich!',
          'Ich würde sie lieber zuerst fragen.',
        ],
        sample: 'Ja, das ist eine schöne Idee! Aber sei diesmal wirklich pünktlich.',
        requires: { any: ['ja', 'idee', 'super', 'gut', 'nein', 'lieber'] },
        teaches: ['g.b1.plusquamperfekt'],
      },

      /* ── 7. Close warmly ───────────────────────────────────────────────── */
      {
        bot: {
          de: 'Danke, dass du mir zugehört hast. Du bist ein echter Freund.',
          en: 'Thank you for listening to me. You are a real friend.',
        },
        accept: [
          {
            match: ['gern', 'dafür', 'freunde', 'kein problem', 'immer'],
            reply: {
              de: 'Ich melde mich am Sonntag und erzähle dir, wie es war!',
              en: 'I will get in touch on Sunday and tell you how it went!',
            },
          },
          {
            match: ['viel glück', 'glück', 'daumen'],
            reply: {
              de: 'Danke, das kann ich brauchen!',
              en: 'Thanks, I can use that!',
            },
          },
        ],
        fallback: {
          de: 'Wirklich, danke.',
          en: 'Really, thanks.',
        },
        hints: ['Gern, dafür sind Freunde da. Viel Glück!', 'Kein Problem. Ich drücke dir die Daumen!'],
        sample: 'Gern, dafür sind Freunde da. Viel Glück am Samstag!',
        requires: { any: ['gern', 'freunde', 'glück', 'daumen', 'kein problem'] },
        teaches: ['g.a2.reflexiv'],
      },
    ],
    closing: {
      de: 'Danke, {name}. Ich erzähle dir dann, ob wir uns versöhnt haben!',
      en: 'Thanks, {name}. I will let you know whether we made up!',
    },
  },
]

export default conversations
