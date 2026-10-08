/**
 * A2 · L18 — Conversation: taking a broken coffee machine back to the shop.
 *
 * Seven turns along the real shape of a German Umtausch: say what is wrong,
 * describe the fault, produce the receipt, say what you want instead, agree a
 * date, take the apology, confirm the arrangement. Sie throughout, as in any
 * German shop.
 *
 * Separable verbs do the work (umtauschen, zurückgeben, anrufen, angehen,
 * vorbeikommen, mitbringen) next to the inseparable pair the lesson contrasts
 * them with (sich entschuldigen, versprechen). No passive, no relative
 * clauses; the only past forms are Perfekt.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a2.l18.umtausch',
    level: 'A2',
    title: 'Taking a broken machine back',
    titleDe: 'Ein kaputtes Gerät umtauschen',
    icon: '🧾',
    setting:
      'Two weeks ago you bought a coffee machine at Elektro Wagner for 89 euros. Since Saturday it does not switch on at all. It is Monday afternoon and you are standing at the service desk with the machine in a bag and the receipt in your pocket.',
    goal:
      'Explain what is broken, show the receipt, say whether you want an exchange or your money back, and agree when you come again.',
    roleBot: 'Herr Brandt at the Elektro Wagner service desk',
    roleUser: 'You, the customer',
    vocabIds: [
      'v.a2.l18.kaputt',
      'v.a2.l18.funktionieren',
      'v.a2.l18.problem',
      'v.a2.l18.loesung',
      'v.a2.l18.quittung',
      'v.a2.l18.garantie',
      'v.a2.l18.umtauschen',
      'v.a2.l18.zurueckgeben',
      'v.a2.l18.entschuldigen',
      'v.a2.l18.klappen',
      'v.a2.l18.vorschlagen',
    ],
    grammarIds: ['g.a2.trennbar', 'g.a2.satzbau'],
    tags: ['trennbar', 'wortstellung'],
    turns: [
      /* ── 1. Say why you are there ──────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Tag! Elektro Wagner, was kann ich für Sie tun?',
          en: 'Hello! Elektro Wagner, what can I do for you?',
        },
        accept: [
          {
            match: ['kaputt', 'funktioniert nicht', 'geht nicht', 'funktioniert nicht mehr'],
            reply: {
              de: 'Oh, das tut mir leid. Was genau ist denn kaputt?',
              en: 'Oh, I am sorry about that. What exactly is broken?',
            },
          },
          {
            match: ['kaffeemaschine', 'maschine', 'gerät', 'geraet'],
            reply: {
              de: 'Eine Kaffeemaschine — verstehe. Und was ist das Problem damit?',
              en: 'A coffee machine — I see. And what is the problem with it?',
            },
          },
          {
            match: ['umtauschen', 'zurückgeben', 'zurueckgeben', 'guten tag', 'hallo'],
            reply: {
              de: 'Guten Tag, {name}. Erzählen Sie mir bitte kurz, worum es geht.',
              en: 'Hello, {name}. Please tell me briefly what this is about.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, ich habe Sie nicht ganz verstanden. Was kann ich für Sie tun?',
          en: 'Sorry, I did not quite understand you. What can I do for you?',
        },
        hints: [
          'Meine Kaffeemaschine ist leider kaputt.',
          'Guten Tag, das Gerät funktioniert nicht mehr.',
          'Ich möchte die Kaffeemaschine gern umtauschen.',
        ],
        sample: 'Guten Tag! Meine Kaffeemaschine ist leider kaputt.',
        requires: {
          any: [
            'kaputt',
            'funktioniert nicht',
            'geht nicht',
            'kaffeemaschine',
            'maschine',
            'gerät',
            'umtauschen',
          ],
        },
        teaches: ['g.a2.trennbar'],
      },

      /* ── 2. Describe the fault ─────────────────────────────────────────── */
      {
        bot: {
          de: 'Verstehe. Beschreiben Sie das Problem bitte genau: Was passiert, wenn Sie die Maschine anmachen?',
          en: 'I see. Please describe the problem exactly: what happens when you switch the machine on?',
        },
        accept: [
          {
            match: ['geht nicht an', 'nicht mehr an', 'nichts', 'kein licht'],
            reply: {
              de: 'Sie geht also gar nicht mehr an. Haben Sie es schon an einer anderen Steckdose probiert?',
              en: 'So it does not switch on at all any more. Have you already tried another socket?',
            },
          },
          {
            match: ['wasser', 'läuft aus', 'laeuft aus', 'tropft'],
            reply: {
              de: 'Unten läuft Wasser heraus — das ist ein klarer Schaden. Bitte benutzen Sie die Maschine nicht weiter.',
              en: 'Water is running out underneath — that is a clear defect. Please stop using the machine.',
            },
          },
          {
            match: ['geräusch', 'geraeusch', 'laut', 'riecht', 'stinkt'],
            reply: {
              de: 'Das klingt wirklich nicht gut. So ein Gerät gehört sofort zu uns zurück.',
              en: 'That really does not sound good. A device like that belongs back with us straight away.',
            },
          },
        ],
        fallback: {
          de: 'Sagen Sie es bitte noch einmal anders: Was macht die Maschine — oder was macht sie nicht?',
          en: 'Please say it a different way: what does the machine do — or what does it not do?',
        },
        hints: [
          'Sie geht einfach nicht mehr an.',
          'Es passiert gar nichts, wenn ich sie anmache.',
          'Unten läuft Wasser aus.',
        ],
        sample: 'Sie geht seit Samstag nicht mehr an. Es passiert gar nichts.',
        requires: {
          any: ['geht nicht', 'nicht mehr an', 'nichts', 'wasser', 'geräusch', 'laut', 'riecht'],
        },
        teaches: ['g.a2.trennbar'],
      },

      /* ── 3. Date of purchase and receipt ───────────────────────────────── */
      {
        bot: {
          de: 'Gut. Wann haben Sie die Maschine bei uns gekauft? Und haben Sie die Quittung dabei?',
          en: 'Good. When did you buy the machine from us? And do you have the receipt with you?',
        },
        accept: [
          {
            match: ['hier ist die quittung', 'quittung', 'bon', 'beleg'],
            reply: {
              de: 'Danke. Der Kauf war vor zwei Wochen, Sie haben also noch zwei Jahre Garantie.',
              en: 'Thank you. The purchase was two weeks ago, so you still have two years of warranty.',
            },
          },
          {
            match: ['vor zwei wochen', 'vor 2 wochen', 'letzte woche', 'vor einer woche'],
            reply: {
              de: 'Vor zwei Wochen, sehr gut. Dann brauche ich nur noch kurz Ihre Quittung.',
              en: 'Two weeks ago, very good. Then I just need your receipt briefly.',
            },
          },
          {
            match: ['keine quittung', 'nicht dabei', 'verloren', 'habe ich nicht'],
            reply: {
              de: 'Ohne Quittung wird es schwierig. Haben Sie vielleicht den Kontoauszug oder die Karte, mit der Sie bezahlt haben?',
              en: 'Without a receipt it gets difficult. Do you perhaps have the bank statement or the card you paid with?',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung — wann war der Kauf, und haben Sie einen Beleg dabei?',
          en: 'Sorry — when was the purchase, and do you have proof of purchase with you?',
        },
        hints: [
          'Ich habe sie vor zwei Wochen gekauft.',
          'Ja, hier ist die Quittung.',
          'Die Quittung habe ich leider nicht dabei.',
        ],
        sample: 'Ich habe sie vor zwei Wochen gekauft. Hier ist die Quittung.',
        requires: { any: ['quittung', 'bon', 'beleg', 'vor zwei wochen', 'gekauft'] },
        teaches: ['g.a2.satzbau'],
      },

      /* ── 4. Exchange, refund or repair ─────────────────────────────────── */
      {
        bot: {
          de: 'Danke, {name}. Und was möchten Sie: die Maschine umtauschen oder das Geld zurückbekommen?',
          en: 'Thank you, {name}. And what would you like: to exchange the machine or to get your money back?',
        },
        accept: [
          {
            match: ['umtauschen', 'tauschen', 'neue maschine', 'neues gerät'],
            reply: {
              de: 'Umtauschen geht natürlich. Das gleiche Modell bekommen wir aber erst am Donnerstag wieder herein.',
              en: 'Exchanging is of course possible. But we only get the same model back in on Thursday.',
            },
          },
          {
            match: ['geld', 'zurückgeben', 'zurueckgeben', 'zurück', 'zurueck'],
            reply: {
              de: 'Das Geld zurück ist auch möglich. Dann brauche ich die Karte, mit der Sie bezahlt haben.',
              en: 'Money back is also possible. In that case I need the card you paid with.',
            },
          },
          {
            match: ['reparieren', 'reparatur'],
            reply: {
              de: 'Reparieren können wir sie auch. Das dauert allerdings ungefähr zwei Wochen.',
              en: 'We can also repair it. However, that takes about two weeks.',
            },
          },
        ],
        fallback: {
          de: 'Sagen Sie mir bitte, was Sie möchten: ein neues Gerät oder Ihr Geld zurück?',
          en: 'Please tell me what you would like: a new device or your money back?',
        },
        hints: [
          'Ich möchte die Maschine gern umtauschen.',
          'Ich hätte gern mein Geld zurück.',
          'Können Sie das Gerät reparieren?',
        ],
        sample: 'Ich möchte die Maschine gern umtauschen.',
        requires: {
          any: ['umtauschen', 'tauschen', 'geld', 'zurück', 'zurueck', 'reparieren', 'reparatur'],
        },
        teaches: ['g.a2.trennbar'],
      },

      /* ── 5. Agree a date ───────────────────────────────────────────────── */
      {
        bot: {
          de: 'Am Donnerstag ist das neue Gerät da. Klappt das bei Ihnen, oder soll ich Sie anrufen, wenn es ankommt?',
          en: 'The new device will be here on Thursday. Does that work for you, or shall I call you when it arrives?',
        },
        accept: [
          {
            match: ['donnerstag', 'klappt', 'passt', 'kein problem'],
            reply: {
              de: 'Sehr gut, dann sehen wir uns am Donnerstag. Bringen Sie die alte Maschine bitte mit.',
              en: 'Very good, then we will see each other on Thursday. Please bring the old machine along.',
            },
          },
          {
            match: ['anrufen', 'rufen sie', 'nummer', 'telefon'],
            reply: {
              de: 'Gern, ich rufe Sie an. Wie ist Ihre Telefonnummer?',
              en: 'Gladly, I will call you. What is your phone number?',
            },
          },
          {
            match: ['keine zeit', 'arbeite', 'samstag', 'später', 'spaeter'],
            reply: {
              de: 'Kein Problem, wir legen das Gerät für Sie zur Seite. Sie können es bis Samstag abholen.',
              en: 'No problem, we will put the device aside for you. You can pick it up until Saturday.',
            },
          },
        ],
        fallback: {
          de: 'Also: Kommen Sie am Donnerstag ins Geschäft, oder soll ich Sie vorher anrufen?',
          en: 'So: will you come to the shop on Thursday, or shall I call you beforehand?',
        },
        hints: [
          'Ja, am Donnerstag klappt das gut.',
          'Rufen Sie mich bitte an.',
          'Am Donnerstag habe ich leider keine Zeit.',
        ],
        sample: 'Ja, am Donnerstag klappt das gut. Ich komme nach der Arbeit vorbei.',
        requires: {
          any: ['donnerstag', 'klappt', 'passt', 'anrufen', 'keine zeit', 'samstag'],
        },
        teaches: ['g.a2.satzbau'],
      },

      /* ── 6. Take the apology ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Es tut mir wirklich leid, dass die Maschine so schnell kaputtgegangen ist. Wir entschuldigen uns für das Problem.',
          en: 'I am really sorry that the machine broke so quickly. We apologise for the problem.',
        },
        accept: [
          {
            match: ['kein problem', 'nicht schlimm', 'macht nichts', 'alles gut'],
            reply: {
              de: 'Das ist nett von Ihnen. Zum Glück geht bei uns selten etwas schief.',
              en: 'That is kind of you. Luckily, something rarely goes wrong here.',
            },
          },
          {
            match: ['danke', 'vielen dank', 'nett', 'hilfe'],
            reply: {
              de: 'Sehr gern. Wir kümmern uns darum, das verspreche ich Ihnen.',
              en: 'You are very welcome. We will take care of it, I promise you that.',
            },
          },
          {
            match: ['ärgerlich', 'aergerlich', 'schade', 'beschweren', 'nicht gut'],
            reply: {
              de: 'Das verstehe ich gut. Deshalb schreibe ich Ihnen zehn Euro auf einen Gutschein.',
              en: 'I understand that well. That is why I am putting ten euros on a voucher for you.',
            },
          },
        ],
        fallback: {
          de: 'Ist das so in Ordnung für Sie?',
          en: 'Is that all right for you like this?',
        },
        hints: [
          'Kein Problem, das kann passieren.',
          'Danke für Ihre Hilfe!',
          'Das ist wirklich ärgerlich.',
        ],
        sample: 'Kein Problem, das kann passieren. Danke für Ihre Hilfe!',
        requires: {
          any: ['kein problem', 'danke', 'nicht schlimm', 'ärgerlich', 'in ordnung', 'macht nichts'],
        },
        teaches: ['g.a2.trennbar'],
      },

      /* ── 7. Confirm the arrangement ────────────────────────────────────── */
      {
        bot: {
          de: 'Dann halten wir fest: Sie kommen am Donnerstag mit der alten Maschine und der Quittung vorbei. Stimmt das so?',
          en: 'Then let us note it down: you will come by on Thursday with the old machine and the receipt. Is that right?',
        },
        accept: [
          {
            match: ['ja', 'genau', 'richtig', 'stimmt'],
            reply: {
              de: 'Perfekt. Ich schreibe eine Notiz dazu, dann geht es am Donnerstag schnell.',
              en: 'Perfect. I will write a note about it, then it will be quick on Thursday.',
            },
          },
          {
            match: ['quittung', 'mitbringen', 'muss ich', 'brauche ich'],
            reply: {
              de: 'Ja, bringen Sie die Quittung bitte mit — ohne Beleg darf ich nichts umtauschen.',
              en: 'Yes, please bring the receipt along — without proof of purchase I am not allowed to exchange anything.',
            },
          },
          {
            match: ['wann', 'uhr', 'wie lange', 'geöffnet', 'geoeffnet'],
            reply: {
              de: 'Wir haben von neun bis zwanzig Uhr geöffnet. Kommen Sie einfach, wann es Ihnen passt.',
              en: 'We are open from nine until eight in the evening. Just come whenever it suits you.',
            },
          },
        ],
        fallback: {
          de: 'Also noch einmal: Donnerstag, die alte Maschine und die Quittung — passt das so?',
          en: 'So once again: Thursday, the old machine and the receipt — does that fit?',
        },
        hints: [
          'Ja, genau. Am Donnerstag bin ich da.',
          'Muss ich die Quittung wieder mitbringen?',
          'Bis wann haben Sie am Donnerstag geöffnet?',
        ],
        sample: 'Ja, genau. Am Donnerstag bringe ich die Maschine und die Quittung mit.',
        requires: { any: ['ja', 'genau', 'richtig', 'stimmt', 'quittung', 'donnerstag'] },
        teaches: ['g.a2.satzbau'],
      },
    ],
    closing: {
      de: 'Vielen Dank für Ihre Geduld, {name}. Bis Donnerstag!',
      en: 'Thank you for your patience, {name}. See you on Thursday!',
    },
  },
]

export default conversations
