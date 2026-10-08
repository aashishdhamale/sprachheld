/**
 * A2 · L15 — Conversation: phoning a company about a wrong invoice.
 *
 * Seven turns along the real shape of such a call: say what is wrong, give your
 * customer number, describe the mistake, get put through, agree on the refund,
 * choose how the corrected invoice arrives, and close. Two people answer the
 * phone — Frau Weber in the Kundenservice, Herr Sander in der Buchhaltung — so
 * the learner hears weiterverbinden actually happen.
 *
 * Sie throughout, as on any German service line. No passive, no relative
 * clauses; the only past forms are Perfekt plus wollte/konnte.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a2.l15.falsche-rechnung',
    level: 'A2',
    title: 'A wrong invoice',
    titleDe: 'Eine falsche Rechnung',
    icon: '📞',
    setting:
      'Your internet provider TeleMax has taken 49 euros from your account twice in February. It is Tuesday morning and you call the customer service number on the invoice.',
    goal: 'Explain the mistake, get put through to accounts, agree how the money comes back and how you get the new invoice.',
    roleBot: 'Frau Weber (customer service) and Herr Sander (accounts)',
    roleUser: 'You, the customer',
    vocabIds: [
      'v.a2.l15.kundenservice',
      'v.a2.l15.in-der-leitung',
      'v.a2.l15.weiterverbinden',
      'v.a2.l15.zurueckrufen',
      'v.a2.l15.konto',
      'v.a2.l15.ueberweisung',
      'v.a2.l15.ueberweisen',
      'v.a2.l15.ec-karte',
    ],
    grammarIds: ['g.a2.imperativ', 'g.a2.konjunktionen'],
    tags: ['imperativ', 'konnektoren'],
    turns: [
      /* ── 1. Say what the call is about ─────────────────────────────────── */
      {
        bot: {
          de: 'Kundenservice TeleMax, guten Tag. Mein Name ist Weber. Was kann ich für Sie tun?',
          en: 'TeleMax customer service, hello. My name is Weber. What can I do for you?',
        },
        accept: [
          {
            match: ['rechnung', 'stimmt nicht', 'falsch'],
            reply: {
              de: 'Eine falsche Rechnung — das tut mir leid. Sagen Sie mir bitte kurz, was nicht stimmt.',
              en: 'A wrong invoice — I am sorry about that. Please tell me briefly what is not right.',
            },
          },
          {
            match: ['zweimal', 'doppelt', 'zu viel', 'abgebucht'],
            reply: {
              de: 'Sie haben also zu viel bezahlt. Das prüfe ich gern sofort für Sie.',
              en: 'So you have paid too much. I will gladly check that for you right away.',
            },
          },
          {
            match: ['guten tag', 'guten morgen', 'hallo', 'mein name ist'],
            reply: {
              de: 'Guten Tag, {name}. Und worum geht es genau?',
              en: 'Hello, {name}. And what exactly is it about?',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, die Verbindung ist schlecht. Worum geht es bitte?',
          en: 'Sorry, the line is bad. What is it about, please?',
        },
        hints: [
          'Meine Rechnung für Februar ist leider falsch.',
          'Sie haben den Betrag zweimal abgebucht.',
          'Guten Tag, hier ist … — ich habe ein Problem mit meiner Rechnung.',
        ],
        sample: 'Guten Tag, meine Rechnung für Februar stimmt leider nicht.',
        requires: {
          any: ['rechnung', 'stimmt nicht', 'falsch', 'zweimal', 'doppelt', 'zu viel', 'abgebucht'],
        },
        teaches: ['g.a2.konjunktionen'],
      },

      /* ── 2. The customer number ────────────────────────────────────────── */
      {
        bot: {
          de: 'Kein Problem, das klären wir. Nennen Sie mir bitte Ihre Kundennummer. Sie steht oben rechts auf der Rechnung.',
          en: 'No problem, we will sort that out. Please tell me your customer number. It is at the top right of the invoice.',
        },
        accept: [
          {
            match: ['kundennummer', 'nummer ist', '/\\d{2,}/'],
            reply: {
              de: 'Danke, ich habe Ihren Vertrag gefunden, {name}. Sie sind seit Mai bei uns.',
              en: 'Thank you, I have found your contract, {name}. You have been with us since May.',
            },
          },
          {
            match: ['weiß ich nicht', 'habe ich nicht', 'nicht hier', 'keine ahnung'],
            reply: {
              de: 'Das ist kein Problem. Sagen Sie mir dann bitte Ihren Namen und Ihre Adresse.',
              en: 'That is no problem. Then please tell me your name and your address.',
            },
          },
          {
            match: ['moment', 'sekunde', 'ich schaue', 'ich suche'],
            reply: {
              de: 'Natürlich, lassen Sie sich Zeit. Ich bleibe so lange in der Leitung.',
              en: 'Of course, take your time. I will stay on the line meanwhile.',
            },
          },
        ],
        fallback: {
          de: 'Ich habe die Nummer leider nicht verstanden. Sagen Sie sie bitte noch einmal langsam.',
          en: 'I did not catch the number, sorry. Please say it again slowly.',
        },
        hints: ['Meine Kundennummer ist 45 82 17.', 'Einen Moment bitte, ich schaue kurz nach.', 'Die Nummer habe ich leider nicht hier.'],
        sample: 'Meine Kundennummer ist 45 82 17.',
        requires: {
          any: ['kundennummer', 'nummer', 'moment', 'sekunde', 'weiß ich nicht', 'nicht hier'],
        },
      },

      /* ── 3. What exactly is wrong ──────────────────────────────────────── */
      {
        bot: {
          de: 'Danke. Und was genau stimmt auf der Rechnung nicht?',
          en: 'Thank you. And what exactly is wrong on the invoice?',
        },
        accept: [
          {
            match: ['zweimal', 'doppelt'],
            reply: {
              de: 'Zweimal abgebucht — das sehe ich hier auch. Am dritten Februar zweimal neunundvierzig Euro.',
              en: 'Debited twice — I can see that here too. On the third of February twice forty-nine euros.',
            },
          },
          {
            match: ['zu hoch', 'zu viel', 'zu teuer', 'euro'],
            reply: {
              de: 'Der Betrag ist zu hoch, verstehe. Ihr Tarif kostet neunundvierzig Euro im Monat, nicht mehr.',
              en: 'The amount is too high, I see. Your tariff costs forty-nine euros a month, not more.',
            },
          },
          {
            match: ['nicht bestellt', 'kenne ich nicht', 'extra', 'position'],
            reply: {
              de: 'Eine Position, die Sie nicht kennen. Das kann ich hier leider nicht sehen.',
              en: 'An item you do not recognise. Unfortunately I cannot see that from here.',
            },
          },
        ],
        fallback: {
          de: 'Moment, ich komme nicht mit. Ist der Betrag zu hoch, oder haben wir zweimal abgebucht?',
          en: 'One moment, I am not following. Is the amount too high, or have we debited twice?',
        },
        hints: [
          'Sie haben im Februar zweimal abgebucht.',
          'Die Rechnung ist neunundvierzig Euro zu hoch.',
          'Eine Position auf der Rechnung kenne ich nicht.',
        ],
        sample: 'Sie haben den Betrag im Februar zweimal abgebucht.',
        requires: { any: ['zweimal', 'doppelt', 'zu hoch', 'zu viel', 'zu teuer', 'nicht bestellt', 'kenne ich nicht'] },
      },

      /* ── 4. Getting put through ────────────────────────────────────────── */
      {
        bot: {
          de: 'Alles klar. Da kann ich Ihnen leider nicht weiterhelfen, deshalb verbinde ich Sie mit der Buchhaltung weiter. Bleiben Sie bitte kurz in der Leitung.',
          en: 'All right. Unfortunately I cannot help you with that, so I will put you through to accounts. Please stay on the line for a moment.',
        },
        accept: [
          {
            match: ['ja', 'gern', 'in ordnung', 'okay', 'danke'],
            reply: {
              de: '… Buchhaltung, Sander, guten Tag. Frau Weber hat mir Ihren Fall schon geschickt.',
              en: '… Accounts, Sander speaking, hello. Ms Weber has already sent me your case.',
            },
          },
          {
            match: ['wie lange', 'dauert'],
            reply: {
              de: 'Höchstens zwei Minuten. … Buchhaltung, Sander, guten Tag. Ich habe Ihren Fall hier.',
              en: 'Two minutes at most. … Accounts, Sander speaking, hello. I have your case here.',
            },
          },
          {
            match: ['zurückrufen', 'rückruf', 'keine zeit', 'später'],
            reply: {
              de: 'Wir können Sie auch zurückrufen. Herr Sander ist aber gerade frei, deshalb verbinde ich Sie jetzt weiter.',
              en: 'We can also call you back. But Mr Sander is free right now, so I will put you through now.',
            },
          },
        ],
        fallback: {
          de: 'Soll ich Sie weiterverbinden, oder sollen wir Sie lieber zurückrufen?',
          en: 'Shall I put you through, or would you prefer us to call you back?',
        },
        hints: ['Ja, gern. Ich bleibe in der Leitung.', 'Wie lange dauert es ungefähr?', 'Können Sie mich bitte später zurückrufen?'],
        sample: 'Ja, gern. Ich bleibe in der Leitung.',
        requires: { any: ['ja', 'gern', 'in ordnung', 'okay', 'wie lange', 'zurückrufen', 'später'] },
        teaches: ['g.a2.konjunktionen'],
      },

      /* ── 5. The refund ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Sie haben recht: Wir haben den Betrag zweimal abgebucht. Entschuldigen Sie bitte den Fehler. Wir überweisen Ihnen die neunundvierzig Euro zurück. Ist das für Sie in Ordnung?',
          en: 'You are right: we debited the amount twice. Please excuse the mistake. We will transfer the forty-nine euros back to you. Is that all right for you?',
        },
        accept: [
          {
            match: ['ja', 'in ordnung', 'einverstanden', 'gut', 'danke'],
            reply: {
              de: 'Sehr gut. Das Geld ist in zwei bis drei Werktagen auf Ihrem Konto.',
              en: 'Very good. The money will be in your account within two to three working days.',
            },
          },
          {
            match: ['wann', 'wie lange', 'dauert'],
            reply: {
              de: 'Die Überweisung dauert zwei bis drei Werktage. Schneller geht es leider nicht.',
              en: 'The transfer takes two to three working days. Unfortunately it cannot be faster.',
            },
          },
          {
            match: ['welches konto', 'auf mein konto', 'kontonummer', 'ec-karte'],
            reply: {
              de: 'Wir überweisen auf Ihr Konto bei der Sparkasse. Die Kontonummer haben wir hier im System.',
              en: 'We will transfer it to your account at the Sparkasse. We have the account number here in the system.',
            },
          },
        ],
        fallback: {
          de: 'Einen Moment — ist die Rücküberweisung für Sie in Ordnung, ja oder nein?',
          en: 'One moment — is the refund all right for you, yes or no?',
        },
        hints: ['Ja, das ist in Ordnung.', 'Wann ist das Geld auf meinem Konto?', 'Auf welches Konto überweisen Sie?'],
        sample: 'Ja, das ist in Ordnung. Wann ist das Geld auf meinem Konto?',
        requires: { any: ['ja', 'in ordnung', 'einverstanden', 'wann', 'wie lange', 'konto'] },
      },

      /* ── 6. How the new invoice arrives ────────────────────────────────── */
      {
        bot: {
          de: 'Ich schicke Ihnen auch eine neue Rechnung. Möchten Sie die Rechnung per E-Mail oder lieber mit der Post?',
          en: 'I will also send you a new invoice. Would you like the invoice by email or rather by post?',
        },
        accept: [
          {
            match: ['e-mail', 'email', 'mail'],
            reply: {
              de: 'Per E-Mail, notiert. Sie bekommen die neue Rechnung heute noch.',
              en: 'By email, noted. You will get the new invoice later today.',
            },
          },
          {
            match: ['post', 'brief', 'schriftlich'],
            reply: {
              de: 'Mit der Post, gern. Dann dauert es zwei bis drei Tage.',
              en: 'By post, gladly. Then it takes two to three days.',
            },
          },
          {
            match: ['bestätigung', 'bescheinigung', 'beides'],
            reply: {
              de: 'Eine Bestätigung bekommen Sie natürlich auch. Ich schicke sie per E-Mail, und sie kostet nichts.',
              en: 'You will of course also get a confirmation. I will send it by email, and it costs nothing.',
            },
          },
        ],
        fallback: {
          de: 'Also noch einmal: per E-Mail oder mit der Post?',
          en: 'So once again: by email or by post?',
        },
        hints: ['Bitte per E-Mail.', 'Schicken Sie sie mit der Post.', 'Ich brauche auch eine Bestätigung.'],
        sample: 'Schicken Sie die Rechnung bitte per E-Mail.',
        requires: { any: ['e-mail', 'email', 'mail', 'post', 'brief', 'bestätigung'] },
        teaches: ['g.a2.imperativ'],
      },

      /* ── 7. Closing the call ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Alles notiert, {name}. Haben Sie noch eine Frage?',
          en: 'Everything noted, {name}. Do you have another question?',
        },
        accept: [
          {
            match: ['nein', 'das war alles', 'danke', 'alles klar'],
            reply: {
              de: 'Sehr gern. Und noch einmal Entschuldigung für den Fehler.',
              en: 'You are very welcome. And once again, sorry for the mistake.',
            },
          },
          {
            match: ['noch einmal', 'wieder', 'nächsten monat', 'problem'],
            reply: {
              de: 'Wenn das noch einmal passiert, rufen Sie uns bitte sofort an. Wir rufen Sie dann auch zurück.',
              en: 'If that happens again, please call us straight away. We will also call you back then.',
            },
          },
          {
            match: ['durchwahl', 'ihre nummer', 'direkt'],
            reply: {
              de: 'Meine Durchwahl ist die zweihundertvierzehn. Dann müssen Sie nicht noch einmal warten.',
              en: 'My extension is two-one-four. Then you will not have to wait again.',
            },
          },
        ],
        fallback: {
          de: 'Kann ich sonst noch etwas für Sie tun?',
          en: 'Can I do anything else for you?',
        },
        hints: ['Nein, danke. Das war alles.', 'Und wenn das noch einmal passiert?', 'Wie ist Ihre Durchwahl?'],
        sample: 'Nein, danke. Das war alles.',
        requires: { any: ['nein', 'danke', 'das war alles', 'noch einmal', 'durchwahl'] },
      },
    ],
    closing: {
      de: 'Danke für Ihren Anruf, {name}. Einen schönen Tag noch!',
      en: 'Thank you for your call, {name}. Have a nice day!',
    },
  },
]

export default conversations
