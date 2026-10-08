/**
 * B1 · L21 — Conversation: a friend asks your advice about a job offer.
 *
 * Seven turns in the du register: react to the news, give advice
 * (An deiner Stelle würde ich …), say what you believe will work (Ich
 * glaube, dass …), name a disadvantage, say what you could imagine, agree
 * with a plan, and promise to visit. Every turn takes a plain opinion too —
 * the Konjunktiv II hints are the stretch, not the gate.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.b1.l21.jobangebot',
    level: 'B1',
    title: 'A friend asks for advice',
    titleDe: 'Ein Freund braucht einen Rat',
    icon: '🤔',
    setting:
      'Your friend Lukas lives in Cologne with his girlfriend. He has just been offered a better-paid job in Munich and cannot decide. He calls you in the evening to talk it through.',
    goal:
      'React to the news, give him advice, weigh pros and cons with him and help him decide what to ask his new boss.',
    roleBot: 'Lukas, your friend',
    roleUser: 'You, his friend',
    vocabIds: [
      'v.b1.l21.meinung',
      'v.b1.l21.vorteil',
      'v.b1.l21.nachteil',
      'v.b1.l21.kompromiss',
      'v.b1.l21.vorstellen',
      'v.b1.l21.zustimmen',
      'v.b1.l21.wahrscheinlich',
      'v.b1.l21.allerdings',
    ],
    grammarIds: ['g.b1.nebensatz', 'g.b1.konjunktiv2'],
    tags: ['konjunktiv2', 'nebensatz'],
    turns: [
      /* ── 1. React to the news ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Hey {name}! Ich muss dir was erzählen: Ich habe ein Jobangebot aus München bekommen. Was hältst du davon?',
          en: 'Hey {name}! I have to tell you something: I have had a job offer from Munich. What do you think?',
        },
        accept: [
          {
            match: ['glückwunsch', 'gratuliere', 'toll', 'super', 'chance', 'wow'],
            reply: {
              de: 'Danke! Ich freue mich auch, aber es ist kompliziert.',
              en: 'Thanks! I am pleased too, but it is complicated.',
            },
          },
          {
            match: ['ich finde', 'ich denke', 'ich glaube', 'meiner meinung', 'dass'],
            reply: {
              de: 'Danke für deine ehrliche Meinung. Es ist nur nicht so einfach.',
              en: 'Thanks for your honest opinion. It is just not that simple.',
            },
          },
          {
            match: ['schwierig', 'weit', 'schade', 'münchen'],
            reply: {
              de: 'Ja, genau das ist mein Problem. München ist weit weg.',
              en: 'Yes, that is exactly my problem. Munich is far away.',
            },
          },
        ],
        fallback: {
          de: 'Und, was sagst du? Ist das eine gute Nachricht?',
          en: 'So, what do you say? Is that good news?',
        },
        hints: [
          'Herzlichen Glückwunsch! Ich finde, dass das eine tolle Chance ist.',
          'Wow, das ist super!',
          'Das ist toll, aber München ist ziemlich weit.',
        ],
        sample: 'Herzlichen Glückwunsch! Ich finde, dass das eine tolle Chance ist.',
        requires: { any: ['glückwunsch', 'toll', 'super', 'ich finde', 'ich denke', 'chance', 'schwierig'] },
        teaches: ['g.b1.nebensatz'],
      },

      /* ── 2. Give advice ────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Das Gehalt ist viel besser, aber dann müsste ich umziehen, und meine Freundin bleibt in Köln. Was würdest du an meiner Stelle machen?',
          en: 'The salary is much better, but then I would have to move, and my girlfriend is staying in Cologne. What would you do in my place?',
        },
        accept: [
          {
            match: ['an deiner stelle', 'ich würde', 'würde ich'],
            reply: {
              de: 'Hm, das ist ein guter Rat. Das sollte ich wirklich machen.',
              en: 'Hm, that is good advice. I really should do that.',
            },
          },
          {
            match: ['freundin', 'sprechen', 'reden', 'fragen'],
            reply: {
              de: 'Ja, mit ihr muss ich auf jeden Fall noch einmal sprechen.',
              en: 'Yes, I definitely have to talk to her again.',
            },
          },
          {
            match: ['annehmen', 'nehmen', 'machen', 'gehen', 'absagen'],
            reply: {
              de: 'Du bist dir also ziemlich sicher. Ich bin es leider noch nicht.',
              en: 'So you are fairly sure. Unfortunately I am not yet.',
            },
          },
        ],
        fallback: {
          de: 'Sag ehrlich: Was würdest du tun?',
          en: 'Tell me honestly: what would you do?',
        },
        hints: [
          'An deiner Stelle würde ich zuerst mit deiner Freundin sprechen.',
          'Ich würde das Angebot annehmen.',
          'Ich würde absagen, weil deine Freundin in Köln bleibt.',
        ],
        sample: 'An deiner Stelle würde ich zuerst mit deiner Freundin sprechen.',
        requires: { any: ['würde', 'freundin', 'annehmen', 'absagen', 'sprechen'] },
        teaches: ['g.b1.konjunktiv2'],
      },

      /* ── 3. Can a long-distance relationship work? ─────────────────────── */
      {
        bot: {
          de: 'Einerseits hast du recht. Andererseits ist so ein Angebot selten. Glaubst du, dass eine Fernbeziehung funktionieren kann?',
          en: 'On the one hand you are right. On the other hand, an offer like this is rare. Do you think a long-distance relationship can work?',
        },
        accept: [
          {
            match: ['ich glaube schon', 'ich glaube', 'kann funktionieren', 'funktioniert', 'wenn ihr'],
            reply: {
              de: 'Das hoffe ich auch. Wir könnten uns jedes zweite Wochenende sehen.',
              en: 'I hope so too. We could see each other every other weekend.',
            },
          },
          {
            match: ['nein', 'glaube nicht', 'schwierig', 'schwer'],
            reply: {
              de: 'Ja, das ist meine Angst. Viele Paare schaffen das nicht.',
              en: 'Yes, that is my fear. Many couples do not manage it.',
            },
          },
          {
            match: ['weiß nicht', 'kommt darauf an', 'vielleicht'],
            reply: {
              de: 'Ja, das kommt wohl auf uns beide an.',
              en: 'Yes, that probably depends on both of us.',
            },
          },
        ],
        fallback: {
          de: 'Was meinst du — kann das klappen?',
          en: 'What do you think — can that work out?',
        },
        hints: [
          'Ich glaube schon, dass das funktionieren kann, wenn ihr euch oft seht.',
          'Ich glaube nicht, dass das einfach ist.',
          'Das kommt darauf an.',
        ],
        sample: 'Ich glaube schon, dass das funktionieren kann, wenn ihr euch oft seht.',
        requires: { any: ['ich glaube', 'dass', 'nein', 'kommt darauf an', 'funktioniert', 'schwierig'] },
        teaches: ['g.b1.nebensatz'],
      },

      /* ── 4. Name a disadvantage ────────────────────────────────────────── */
      {
        bot: {
          de: 'Ein Vorteil wäre: In München sind die Berge ganz nah. Ich könnte jedes Wochenende wandern. Was wären für dich die Nachteile?',
          en: 'One advantage would be: in Munich the mountains are really close. I could go hiking every weekend. What would the disadvantages be for you?',
        },
        accept: [
          {
            match: ['nachteil', 'teuer', 'miete', 'wohnung'],
            reply: {
              de: 'Stimmt, die Wohnungen in München sind wahnsinnig teuer.',
              en: 'True, the flats in Munich are incredibly expensive.',
            },
          },
          {
            match: ['allein', 'freunde', 'niemand', 'familie'],
            reply: {
              de: 'Ja, ich kenne dort fast niemanden. Das wäre am Anfang schwer.',
              en: 'Yes, I hardly know anyone there. That would be hard at first.',
            },
          },
          {
            match: ['keine', 'nur vorteile', 'eigentlich nichts'],
            reply: {
              de: 'Du bist ja optimistisch! Allerdings sind die Mieten dort wirklich hoch.',
              en: 'You really are optimistic! The rents there are really high, though.',
            },
          },
        ],
        fallback: {
          de: 'Und was spricht dagegen?',
          en: 'And what speaks against it?',
        },
        hints: [
          'Ein Nachteil wäre, dass die Mieten in München sehr teuer sind.',
          'Du wärst dort am Anfang ziemlich allein.',
          'Eigentlich sehe ich nur Vorteile.',
        ],
        sample: 'Ein Nachteil wäre, dass die Mieten in München sehr teuer sind.',
        requires: { any: ['nachteil', 'teuer', 'miete', 'allein', 'keine', 'vorteile'] },
        teaches: ['g.b1.konjunktiv2'],
      },

      /* ── 5. What you could imagine ─────────────────────────────────────── */
      {
        bot: {
          de: 'Ich müsste wahrscheinlich in einer WG wohnen, mit 32 Jahren! Könntest du dir das vorstellen?',
          en: 'I would probably have to live in a shared flat, at 32! Could you imagine that?',
        },
        accept: [
          {
            match: ['könnte mir', 'kann mir', 'gut vorstellen', 'warum nicht'],
            reply: {
              de: 'Okay, vielleicht ist das wirklich nicht so schlimm.',
              en: 'Okay, maybe that really is not so bad.',
            },
          },
          {
            match: ['nicht vorstellen', 'nein', 'auf keinen fall', 'nie'],
            reply: {
              de: 'Siehst du, ich auch nicht. Das ist wirklich ein Problem.',
              en: 'See, me neither. That really is a problem.',
            },
          },
          {
            match: ['wg', 'mitbewohner', 'lustig', 'spaß'],
            reply: {
              de: 'Stimmt, eine WG kann auch lustig sein.',
              en: 'True, a shared flat can be fun too.',
            },
          },
        ],
        fallback: {
          de: 'Ganz ehrlich: Würdest du mit 32 noch in einer WG wohnen?',
          en: 'Honestly: would you still live in a shared flat at 32?',
        },
        hints: [
          'Ich könnte mir das gut vorstellen.',
          'Nein, das könnte ich mir nicht vorstellen.',
          'Warum nicht? Eine WG kann lustig sein.',
        ],
        sample: 'Ja, ich könnte mir das gut vorstellen. Eine WG kann sogar Spaß machen.',
        requires: { any: ['vorstellen', 'nein', 'wg', 'warum nicht'] },
        teaches: ['g.b1.konjunktiv2'],
      },

      /* ── 6. Agree with the plan ────────────────────────────────────────── */
      {
        bot: {
          de: 'Ich habe noch eine Woche Zeit für die Entscheidung. Soll ich den neuen Chef fragen, ob ich zwei Tage pro Woche im Homeoffice arbeiten kann?',
          en: 'I still have a week to decide. Should I ask the new boss whether I can work from home two days a week?',
        },
        accept: [
          {
            match: ['würde ich', 'ich würde', 'auf jeden fall', 'unbedingt'],
            reply: {
              de: 'Gut, dann frage ich ihn morgen. Das wäre ein guter Kompromiss.',
              en: 'Good, then I will ask him tomorrow. That would be a good compromise.',
            },
          },
          {
            match: ['ja', 'gute idee', 'frag', 'stimme'],
            reply: {
              de: 'Super, dann schreibe ich ihm gleich eine E-Mail.',
              en: 'Great, then I will write him an e-mail right away.',
            },
          },
          {
            match: ['nein', 'nicht', 'lieber'],
            reply: {
              de: 'Hm, du hast vielleicht recht. Am Anfang sollte ich wohl im Büro sein.',
              en: 'Hm, maybe you are right. At first I should probably be in the office.',
            },
          },
        ],
        fallback: {
          de: 'Was meinst du — fragen oder nicht?',
          en: 'What do you think — ask or not?',
        },
        hints: [
          'Ja, das würde ich auf jeden Fall fragen.',
          'Gute Idee, da stimme ich dir zu.',
          'Ich würde am Anfang lieber nicht fragen.',
        ],
        sample: 'Ja, das würde ich auf jeden Fall fragen. Das wäre ein guter Kompromiss.',
        requires: { any: ['ja', 'würde', 'gute idee', 'nein', 'stimme'] },
        teaches: ['g.b1.konjunktiv2'],
      },

      /* ── 7. Promise to visit ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Danke, du hast mir echt geholfen! Kommst du mich besuchen, wenn ich nach München ziehe?',
          en: 'Thanks, you have really helped me! Will you come and visit me if I move to Munich?',
        },
        accept: [
          {
            match: ['klar', 'natürlich', 'gern', 'besuchen', 'sicher'],
            reply: {
              de: 'Super, dann gehen wir zusammen in die Berge!',
              en: 'Great, then we will go to the mountains together!',
            },
          },
          {
            match: ['ja', 'mal sehen', 'vielleicht'],
            reply: {
              de: 'Ich nehme dich beim Wort!',
              en: 'I will hold you to that!',
            },
          },
        ],
        fallback: {
          de: 'Also, kommst du mal vorbei?',
          en: 'So, will you come by sometime?',
        },
        hints: ['Klar, ich würde dich gern besuchen!', 'Natürlich komme ich!'],
        sample: 'Klar, ich würde dich sehr gern besuchen!',
        requires: { any: ['klar', 'gern', 'natürlich', 'ja', 'besuchen'] },
        teaches: ['g.b1.konjunktiv2'],
      },
    ],
    closing: {
      de: 'Danke, {name}. Ich melde mich, sobald ich mich entschieden habe!',
      en: 'Thanks, {name}. I will get in touch as soon as I have decided!',
    },
  },
]

export default conversations
