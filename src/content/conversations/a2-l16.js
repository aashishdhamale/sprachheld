/**
 * A2 · L16 — Conversation: Nina invites you to her birthday.
 *
 * Seven turns that follow a real invitation from the first "Hast du Zeit?" to
 * the firm yes: two possible plans get compared (Lokal vs Kneipe), the price
 * and the time are negotiated, and only then does the learner commit. Every
 * turn has three genuinely different branches, so saying yes, saying maybe and
 * asking a question all lead somewhere else.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a2.l16.geburtstagseinladung',
    level: 'A2',
    title: 'An invitation to a birthday party',
    titleDe: 'Die Einladung zum Geburtstag',
    icon: '🎉',
    setting:
      'Wednesday lunchtime. Nina, a friend from your German course, sits down next to you with her coffee and starts planning her birthday out loud.',
    goal: 'Accept the invitation, compare the two plans she offers, agree on a time and commit clearly.',
    roleBot: 'Nina, a friend from your German course',
    roleUser: 'You, the invited guest',
    vocabIds: [
      'v.a2.l16.einladung',
      'v.a2.l16.einladen',
      'v.a2.l16.feier',
      'v.a2.l16.geburtstag',
      'v.a2.l16.zusagen',
      'v.a2.l16.lust-haben',
      'v.a2.l16.vorschlag',
      'v.a2.l16.kneipe',
      'v.a2.l16.lokal',
      'v.a2.l16.runde',
      'v.a2.l16.am-besten',
      'v.a2.l16.am-liebsten',
    ],
    grammarIds: ['g.a2.komparativ'],
    tags: ['komparativ'],
    turns: [
      /* ── 1. The invitation ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Hallo {name}! Am Samstag feiere ich meinen Geburtstag. Hast du Zeit?',
          en: 'Hi {name}! I am celebrating my birthday on Saturday. Do you have time?',
        },
        accept: [
          {
            match: ['vielleicht', 'weiß nicht', 'mal sehen'],
            reply: {
              de: 'Kein Stress. Sag mir einfach bis Freitag Bescheid, dann weiß ich Bescheid.',
              en: 'No stress. Just let me know by Friday, then I will know.',
            },
          },
          {
            match: ['wann', 'wie spät', 'um wie viel uhr'],
            reply: {
              de: 'Wir fangen um sieben Uhr an. Kommst du?',
              en: 'We are starting at seven. Are you coming?',
            },
          },
          {
            match: ['ja', 'gern', 'klar', 'natürlich'],
            reply: {
              de: 'Super, das freut mich sehr! Dann plane ich fest mit dir.',
              en: 'Great, I am really pleased! Then I will definitely count on you.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, das habe ich nicht verstanden. Hast du am Samstag Zeit?',
          en: 'Sorry, I did not understand that. Do you have time on Saturday?',
        },
        hints: ['Ja, sehr gern!', 'Wann fängt die Feier an?', 'Vielleicht — ich sage dir am Freitag Bescheid.'],
        sample: 'Ja, sehr gern!',
        requires: { any: ['ja', 'gern', 'klar', 'natürlich', 'vielleicht', 'wann'] },
        teaches: ['g.a2.komparativ'],
      },

      /* ── 2. Two plans on the table ─────────────────────────────────────── */
      {
        bot: {
          de: 'Ich habe zwei Ideen: ein Abendessen im Lokal oder eine Runde in der Kneipe am Park. Was ist dein Vorschlag?',
          en: 'I have two ideas: dinner at the restaurant or a round at the pub by the park. What do you suggest?',
        },
        accept: [
          {
            match: ['beides', 'zuerst', 'erst', 'danach'],
            reply: {
              de: 'Beides! Das gefällt mir am besten. Wir essen zuerst und gehen danach weiter.',
              en: 'Both! I like that best. We eat first and move on afterwards.',
            },
          },
          {
            match: ['lokal', 'essen', 'restaurant'],
            reply: {
              de: 'Gute Idee. Im Lokal ist es ruhiger, da können wir besser reden.',
              en: 'Good idea. It is quieter at the restaurant, so we can talk better there.',
            },
          },
          {
            match: ['kneipe', 'park', 'bier'],
            reply: {
              de: 'Die Kneipe ist gemütlicher, das stimmt. Und die Getränke sind dort billiger.',
              en: 'The pub is cosier, that is true. And the drinks are cheaper there.',
            },
          },
        ],
        fallback: {
          de: 'Sag mal ganz konkret: lieber ins Lokal oder lieber in die Kneipe?',
          en: 'Tell me quite concretely: the restaurant or the pub?',
        },
        hints: [
          'Ich gehe lieber ins Lokal.',
          'Die Kneipe ist gemütlicher.',
          'Am besten zuerst essen und danach weiter.',
        ],
        sample: 'Ich gehe lieber ins Lokal.',
        requires: { any: ['lokal', 'kneipe', 'beides', 'zuerst', 'lieber'] },
        teaches: ['g.a2.komparativ'],
      },

      /* ── 3. The price argument ─────────────────────────────────────────── */
      {
        bot: {
          de: 'Das Lokal ist aber teurer als die Kneipe. Wie findest du das?',
          en: 'But the restaurant is more expensive than the pub. How do you feel about that?',
        },
        accept: [
          {
            match: ['kein problem', 'egal', 'passt', 'okay'],
            reply: {
              de: 'Gut, dann ist das Geld kein Thema. Ich reserviere einen Tisch.',
              en: 'Good, then money is not an issue. I will book a table.',
            },
          },
          {
            match: ['billiger', 'günstiger', 'zu teuer'],
            reply: {
              de: 'Du hast recht, billiger ist für alle besser. Dann nehmen wir die Kneipe.',
              en: 'You are right, cheaper is better for everyone. Then we will take the pub.',
            },
          },
          {
            match: ['essen', 'wichtiger', 'besser'],
            reply: {
              de: 'Stimmt, gutes Essen ist wichtiger als ein paar Euro.',
              en: 'True, good food is more important than a few euros.',
            },
          },
        ],
        fallback: {
          de: 'Ist der Preis für dich ein Problem oder nicht?',
          en: 'Is the price a problem for you or not?',
        },
        hints: [
          'Das ist kein Problem für mich.',
          'Die Kneipe ist billiger — das finde ich schöner.',
          'Gutes Essen ist mir wichtiger als der Preis.',
        ],
        sample: 'Das ist kein Problem für mich.',
        requires: { any: ['problem', 'egal', 'billiger', 'teuer', 'wichtiger', 'besser', 'passt'] },
        teaches: ['g.a2.komparativ'],
      },

      /* ── 4. What time? ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Wir können um sieben Uhr oder um halb neun anfangen. Was passt dir besser?',
          en: 'We can start at seven or at half past eight. Which suits you better?',
        },
        accept: [
          {
            match: ['sieben'],
            reply: {
              de: 'Sieben Uhr ist gut. Dann haben wir mehr Zeit zum Essen.',
              en: 'Seven is good. Then we have more time to eat.',
            },
          },
          {
            match: ['halb neun', 'später', 'acht'],
            reply: {
              de: 'Okay, halb neun. Später ist für mich auch entspannter.',
              en: 'OK, half past eight. Later is more relaxed for me too.',
            },
          },
          {
            match: ['egal', 'beides', 'ganz egal'],
            reply: {
              de: 'Schön flexibel! Dann machen wir sieben Uhr.',
              en: 'Nicely flexible! Then we will make it seven.',
            },
          },
        ],
        fallback: {
          de: 'Also: sieben Uhr oder halb neun — was ist dir lieber?',
          en: 'So: seven or half past eight — which do you prefer?',
        },
        hints: ['Um sieben Uhr ist besser für mich.', 'Halb neun passt mir besser.', 'Das ist mir egal.'],
        sample: 'Um sieben Uhr ist besser für mich.',
        requires: { any: ['sieben', 'halb neun', 'acht', 'später', 'egal'] },
        teaches: ['g.a2.komparativ'],
      },

      /* ── 5. One more guest ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Eine Frage noch: Soll ich meine Kollegin Sara auch einladen?',
          en: 'One more question: should I invite my colleague Sara as well?',
        },
        accept: [
          {
            match: ['nein', 'lieber nicht', 'kenne sie nicht'],
            reply: {
              de: 'Alles klar, dann bleiben wir eine kleine Runde.',
              en: 'All right, then we will stay a small group.',
            },
          },
          {
            match: ['wer ist', 'kenne ich', 'wer'],
            reply: {
              de: 'Sara arbeitet mit mir im Büro. Sie ist sehr nett und lacht viel.',
              en: 'Sara works with me in the office. She is very nice and laughs a lot.',
            },
          },
          {
            match: ['ja', 'gern', 'klar', 'natürlich'],
            reply: {
              de: 'Schön! Dann lade ich sie heute noch ein.',
              en: 'Lovely! Then I will invite her today.',
            },
          },
        ],
        fallback: {
          de: 'Soll Sara mitkommen — ja oder nein?',
          en: 'Should Sara come along — yes or no?',
        },
        hints: ['Ja, lade sie gern ein!', 'Nein, lieber nicht.', 'Wer ist Sara?'],
        sample: 'Ja, lade sie gern ein!',
        requires: { any: ['ja', 'nein', 'gern', 'wer', 'lieber nicht'] },
        teaches: ['g.a2.komparativ'],
      },

      /* ── 6. Commit ─────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Dann steht der Plan. Sagst du mir fest zu?',
          en: 'Then the plan is settled. Are you giving me a firm yes?',
        },
        accept: [
          {
            match: ['leider', 'kann nicht', 'sage ab', 'absagen'],
            reply: {
              de: 'Schade! Dann verabreden wir uns nächste Woche, okay?',
              en: 'What a pity! Then let us arrange something for next week, OK?',
            },
          },
          {
            match: ['melde mich', 'muss noch', 'bescheid'],
            reply: {
              de: 'Okay, sag mir bitte bis Freitag Bescheid.',
              en: 'OK, please let me know by Friday.',
            },
          },
          {
            match: ['sage zu', 'ja', 'komme', 'klar'],
            reply: {
              de: 'Perfekt, ich freue mich! Ich schicke dir gleich die Adresse.',
              en: 'Perfect, I am looking forward to it! I will send you the address in a moment.',
            },
          },
        ],
        fallback: {
          de: 'Also — kommst du am Samstag oder nicht?',
          en: 'So — are you coming on Saturday or not?',
        },
        hints: ['Ja, ich sage fest zu!', 'Ich melde mich bis Freitag.', 'Leider kann ich doch nicht.'],
        sample: 'Ja, ich sage fest zu!',
        requires: { any: ['ja', 'sage zu', 'komme', 'melde mich', 'leider', 'bescheid'] },
        teaches: ['g.a2.komparativ'],
      },

      /* ── 7. What to bring ──────────────────────────────────────────────── */
      {
        bot: {
          de: 'Ein Geschenk brauche ich nicht. Bring einfach etwas zu trinken mit. Was bringst du am liebsten mit?',
          en: 'I do not need a present. Just bring something to drink. What do you like bringing best?',
        },
        accept: [
          {
            match: ['wein'],
            reply: {
              de: 'Wein ist immer gut. Ich stelle ihn dann kalt.',
              en: 'Wine is always good. I will put it in the fridge.',
            },
          },
          {
            match: ['bier'],
            reply: {
              de: 'Bier passt super. Eine Kiste steht schon im Keller.',
              en: 'Beer fits perfectly. There is already a crate in the cellar.',
            },
          },
          {
            match: ['saft', 'wasser', 'nichts', 'alkoholfrei'],
            reply: {
              de: 'Gute Idee, ich kaufe auch noch etwas ohne Alkohol ein.',
              en: 'Good idea, I will buy something without alcohol as well.',
            },
          },
        ],
        fallback: {
          de: 'Sag einfach ein Getränk: Wein, Bier oder Saft?',
          en: 'Just name a drink: wine, beer or juice?',
        },
        hints: ['Ich bringe am liebsten Wein mit.', 'Ich bringe lieber Bier mit.', 'Ich trinke am liebsten Saft.'],
        sample: 'Ich bringe am liebsten Wein mit.',
        requires: { any: ['wein', 'bier', 'saft', 'wasser', 'nichts'] },
        teaches: ['g.a2.komparativ'],
      },
    ],
    closing: {
      de: 'Danke, {name}! Wir sehen uns am Samstag um sieben vor dem Lokal. Bis dann!',
      en: 'Thanks, {name}! See you on Saturday at seven in front of the restaurant. See you then!',
    },
  },
]

export default conversations
