/**
 * A1 · L04 — Family and people
 *
 * c.a1.l04.familienfoto — showing a colleague a family photo and saying who
 * everyone is. Every turn is answerable with haben + a possessive article.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a1.l04.familienfoto',
    level: 'A1',
    title: 'Das Familienfoto',
    icon: '📷',
    setting:
      'Monday morning in the office kitchen. Your colleague Nina sees a photo on your phone and asks about it.',
    goal: 'Say who the people in the photo are, and answer Nina’s questions about your family.',
    roleBot: 'Nina, your colleague',
    roleUser: 'You, showing the photo',
    vocabIds: [
      'v.a1.l04.familie',
      'v.a1.l04.vater',
      'v.a1.l04.mutter',
      'v.a1.l04.eltern',
      'v.a1.l04.bruder',
      'v.a1.l04.schwester',
      'v.a1.l04.geschwister',
      'v.a1.l04.kind',
      'v.a1.l04.sohn',
      'v.a1.l04.tochter',
    ],
    grammarIds: ['g.a1.haben', 'g.a1.possessiv'],
    tags: ['family', 'possessiv'],
    turns: [
      {
        bot: {
          de: 'Oh, ein Foto! Ist das deine Familie, {name}?',
          en: 'Oh, a photo! Is that your family, {name}?',
        },
        accept: [
          {
            match: ['meine familie', 'das ist meine familie', 'meine eltern'],
            reply: {
              de: 'Wie schön! Ihr seid sehr viele.',
              en: 'How lovely! There are a lot of you.',
            },
          },
          {
            match: ['meine freunde', 'freunde', 'kollegen'],
            reply: {
              de: 'Ach so, deine Freunde! Das Foto ist trotzdem schön.',
              en: 'Oh I see, your friends! The photo is nice anyway.',
            },
          },
          {
            match: ['ja'],
            reply: {
              de: 'Super, ein Familienfoto! Ich sehe viele Personen.',
              en: 'Great, a family photo! I can see a lot of people.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, ich verstehe nicht ganz — ist das deine Familie?',
          en: 'Sorry, I do not quite understand — is that your family?',
        },
        hints: ['Ja, das ist meine Familie.', 'Nein, das sind meine Freunde.', 'Das ist meine Familie.'],
        sample: 'Ja, das ist meine Familie.',
        requires: { any: ['familie', 'freunde', 'ja', 'nein'] },
        teaches: ['g.a1.possessiv'],
      },
      {
        bot: {
          de: 'Und wer ist die Frau links? Ist das deine Mutter?',
          en: 'And who is the woman on the left? Is that your mother?',
        },
        accept: [
          {
            match: ['meine mutter', 'das ist meine mutter', 'ja, das ist meine mutter'],
            reply: {
              de: 'Deine Mutter! Sie ist bestimmt sehr nett.',
              en: 'Your mother! She is certainly very nice.',
            },
          },
          {
            match: ['meine schwester'],
            reply: {
              de: 'Ach so, deine Schwester! Sie ist noch sehr jung.',
              en: 'Oh I see, your sister! She is still very young.',
            },
          },
          {
            match: ['meine großmutter', 'meine grossmutter', 'meine oma'],
            reply: {
              de: 'Deine Großmutter! Meine Großmutter heißt auch Maria.',
              en: 'Your grandmother! My grandmother is called Maria too.',
            },
          },
        ],
        fallback: {
          de: 'Ich frage noch einmal: Wer ist die Frau links?',
          en: 'Let me ask again: who is the woman on the left?',
        },
        hints: ['Das ist meine Mutter.', 'Nein, das ist meine Schwester.', 'Das ist meine Großmutter.'],
        sample: 'Ja, das ist meine Mutter. Sie heißt Anita.',
        requires: { any: ['mutter', 'schwester', 'großmutter', 'grossmutter', 'oma'] },
        teaches: ['g.a1.possessiv'],
      },
      {
        bot: { de: 'Und hast du Geschwister?', en: 'And do you have brothers or sisters?' },
        accept: [
          {
            match: ['bruder', 'brüder', 'brueder'],
            reply: {
              de: 'Schön! Ich habe auch einen Bruder. Er wohnt in Leipzig.',
              en: 'Nice! I have a brother too. He lives in Leipzig.',
            },
          },
          {
            match: ['schwester', 'schwestern'],
            reply: {
              de: 'Eine Schwester ist toll! Ich habe leider keine Schwester.',
              en: 'A sister is great! Unfortunately I do not have a sister.',
            },
          },
          {
            match: ['keine geschwister', 'nein', 'einzelkind'],
            reply: {
              de: 'Keine Geschwister! Meine Kollegin Lisa ist auch Einzelkind.',
              en: 'No brothers or sisters! My colleague Lisa is an only child too.',
            },
          },
        ],
        fallback: {
          de: 'Sag mal, hast du Geschwister? Einen Bruder oder eine Schwester?',
          en: 'Tell me, do you have any siblings? A brother or a sister?',
        },
        hints: ['Ich habe einen Bruder.', 'Ich habe zwei Schwestern.', 'Nein, ich habe keine Geschwister.'],
        sample: 'Ja, ich habe einen Bruder und eine Schwester.',
        requires: { any: ['ich habe', 'keine geschwister', 'nein'] },
        teaches: ['g.a1.haben'],
      },
      {
        bot: {
          de: 'Und wer ist der Mann rechts? Er ist groß!',
          en: 'And who is the man on the right? He is tall!',
        },
        accept: [
          {
            match: ['mein vater', 'mein papa'],
            reply: {
              de: 'Dein Vater! Du bist auch sehr groß. Jetzt verstehe ich.',
              en: 'Your father! You are very tall too. Now I understand.',
            },
          },
          {
            match: ['mein bruder'],
            reply: {
              de: 'Ach, dein Bruder! Entschuldigung, ich denke immer zu schnell.',
              en: 'Oh, your brother! Sorry, I always think too fast.',
            },
          },
          {
            match: ['mein großvater', 'mein grossvater', 'mein opa'],
            reply: {
              de: 'Dein Großvater! Er ist sehr jung für einen Opa.',
              en: 'Your grandfather! He is very young for a grandpa.',
            },
          },
        ],
        fallback: {
          de: 'Wer ist der Mann rechts? Dein Vater oder dein Bruder?',
          en: 'Who is the man on the right? Your father or your brother?',
        },
        hints: ['Das ist mein Vater.', 'Das ist mein Bruder.', 'Das ist mein Großvater.'],
        sample: 'Das ist mein Vater. Er heißt Ravi.',
        requires: { any: ['mein vater', 'mein bruder', 'mein großvater', 'mein grossvater', 'mein opa'] },
        teaches: ['g.a1.possessiv'],
      },
      {
        bot: {
          de: 'Und die zwei Kinder vorne — sind das deine Kinder?',
          en: 'And the two children at the front — are those your children?',
        },
        accept: [
          {
            match: ['meine kinder', 'mein sohn', 'meine tochter'],
            reply: {
              de: 'Wie süß! Meine Tochter ist auch noch klein.',
              en: 'How sweet! My daughter is still little too.',
            },
          },
          {
            match: ['meine geschwister', 'mein bruder', 'meine schwester'],
            reply: {
              de: 'Ach so, deine Geschwister! Sie sind noch sehr jung.',
              en: 'Oh I see, your brothers and sisters! They are still very young.',
            },
          },
          {
            match: ['nein', 'keine kinder'],
            reply: {
              de: 'Alles klar. Ich habe auch keine Kinder.',
              en: 'All right. I do not have children either.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — sind das deine Kinder?',
          en: 'Sorry — are those your children?',
        },
        hints: ['Ja, das sind meine Kinder.', 'Nein, das sind meine Geschwister.', 'Das ist mein Sohn.'],
        sample: 'Nein, das sind meine Geschwister.',
        requires: { any: ['kinder', 'sohn', 'tochter', 'geschwister', 'nein'] },
        teaches: ['g.a1.possessiv'],
      },
      {
        bot: {
          de: 'Danke, {name}! Und wo wohnt deine Familie?',
          en: 'Thank you, {name}! And where does your family live?',
        },
        accept: [
          {
            match: ['in deutschland', 'in berlin', 'in münchen', 'in hamburg', 'hier'],
            reply: {
              de: 'Schön, dann ist deine Familie nicht weit weg.',
              en: 'Nice, then your family is not far away.',
            },
          },
          {
            match: ['in indien', 'in pune', 'weit weg', 'nicht hier'],
            reply: {
              de: 'Das ist weit weg. Meine Eltern wohnen auch nicht hier.',
              en: 'That is far away. My parents do not live here either.',
            },
          },
          {
            match: ['wohnt', 'wohnen', 'sind in', 'ist in'],
            reply: {
              de: 'Alles klar, danke für das Foto!',
              en: 'All right, thanks for the photo!',
            },
          },
        ],
        fallback: {
          de: 'Wo wohnt deine Familie? In Deutschland oder in einem anderen Land?',
          en: 'Where does your family live? In Germany or in another country?',
        },
        hints: ['Meine Familie wohnt in …', 'Meine Eltern wohnen in …'],
        sample: 'Meine Familie wohnt in Pune.',
        requires: { any: ['wohnt', 'wohnen', 'ist in', 'sind in'] },
        teaches: ['g.a1.possessiv'],
      },
    ],
    closing: {
      de: 'Danke für das Foto, {name}! Deine Familie ist super. Bis später!',
      en: 'Thanks for the photo, {name}! Your family is great. See you later!',
    },
  },
]

export default conversations
