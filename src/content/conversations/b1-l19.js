/**
 * B1 · L19 — Conversation: the Monday team meeting.
 *
 * Seven turns that follow a real German Teambesprechung from the opening to
 * the minutes: summarise last week, report on the schedule, react to a
 * budget problem, weigh a colleague's objection, agree when the chair cuts
 * in, volunteer for the minutes, close.
 *
 * Sie throughout — the chair is the learner's manager. The lesson's
 * connectors (obwohl, trotzdem, einerseits … andererseits) are what the
 * hints model, and each turn accepts the simpler A2 answer too, so nobody is
 * stuck for lack of a connector.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.b1.l19.teambesprechung',
    level: 'B1',
    title: 'The Monday team meeting',
    titleDe: 'Die Teambesprechung am Montag',
    icon: '🗂️',
    setting:
      'Monday, nine o’clock, meeting room 3. Your team is building a new website for a client, and the launch is planned for Friday. Your team lead, Frau Keller, chairs the weekly meeting. You have been working on the presentation for the client.',
    goal:
      'Summarise last week, say whether Friday still works, suggest how to save money, give a balanced opinion, agree on the solution and take on the minutes.',
    roleBot: 'Frau Keller, your team lead',
    roleUser: 'You, a member of the project team',
    vocabIds: [
      'v.b1.l19.zusammenfassen',
      'v.b1.l19.zeitplan',
      'v.b1.l19.budget',
      'v.b1.l19.unterbrechen',
      'v.b1.l19.einigen',
      'v.b1.l19.einverstanden',
      'v.b1.l19.entscheidung',
      'v.b1.l19.protokoll',
      'v.b1.l19.tagesordnung',
      'v.b1.l19.obwohl',
      'v.b1.l19.trotzdem',
    ],
    grammarIds: ['g.b1.satzbau', 'g.b1.konnektoren'],
    tags: ['konnektoren', 'wortstellung'],
    turns: [
      /* ── 1. Summarise last week ────────────────────────────────────────── */
      {
        bot: {
          de: 'Guten Morgen zusammen, lassen Sie uns anfangen. {name}, können Sie kurz zusammenfassen, was letzte Woche passiert ist?',
          en: 'Good morning, everyone, let us get started. {name}, can you briefly summarise what happened last week?',
        },
        accept: [
          {
            match: ['zusammen', 'letzte woche', 'wir haben', 'haben wir'],
            reply: {
              de: 'Danke, das klingt gut. Dann sind wir mit der Präsentation fast fertig.',
              en: 'Thank you, that sounds good. Then we are almost finished with the presentation.',
            },
          },
          {
            match: ['präsentation', 'fertig', 'kunde', 'website'],
            reply: {
              de: 'Sehr gut. Die Präsentation war ja der wichtigste Punkt der letzten Woche.',
              en: 'Very good. The presentation was the most important item last week, after all.',
            },
          },
          {
            match: ['problem', 'nicht fertig', 'leider'],
            reply: {
              de: 'Verstehe. Darüber sprechen wir gleich beim Zeitplan.',
              en: 'I see. We will talk about that in a moment under the schedule.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, noch einmal: Was haben wir letzte Woche geschafft?',
          en: 'Sorry, once more: what did we get done last week?',
        },
        hints: [
          'Ich fasse kurz zusammen: Letzte Woche haben wir die Präsentation vorbereitet.',
          'Wir haben die Präsentation für den Kunden fast fertig.',
          'Leider ist die Präsentation noch nicht fertig.',
        ],
        sample: 'Ich fasse kurz zusammen: Letzte Woche haben wir die Präsentation für den Kunden vorbereitet.',
        requires: { any: ['zusammen', 'letzte woche', 'wir haben', 'präsentation', 'fertig'] },
        teaches: ['g.b1.satzbau'],
      },

      /* ── 2. The schedule ───────────────────────────────────────────────── */
      {
        bot: {
          de: 'Und wie sieht es mit dem Zeitplan aus? Schaffen wir den Start am Freitag?',
          en: 'And how is the schedule looking? Will we make the launch on Friday?',
        },
        accept: [
          {
            match: ['obwohl', 'trotzdem', 'knapp'],
            reply: {
              de: 'Gut, knapp, aber machbar. Das ist ehrlich, danke.',
              en: 'Good — tight, but doable. That is honest, thank you.',
            },
          },
          {
            match: ['ja', 'schaffen', 'freitag', 'kein problem'],
            reply: {
              de: 'Sehr schön, dann bleibt der Freitag.',
              en: 'Very nice, then Friday stays.',
            },
          },
          {
            match: ['nein', 'verschieben', 'später', 'montag', 'mehr zeit'],
            reply: {
              de: 'Hm. Dann müssen wir mit dem Kunden über einen neuen Termin sprechen.',
              en: 'Hm. Then we will have to talk to the client about a new date.',
            },
          },
        ],
        fallback: {
          de: 'Also: Klappt der Freitag, oder brauchen wir mehr Zeit?',
          en: 'So: does Friday work, or do we need more time?',
        },
        hints: [
          'Obwohl der Zeitplan knapp ist, schaffen wir es bis Freitag.',
          'Der Zeitplan ist knapp. Trotzdem schaffen wir es.',
          'Nein, wir müssen den Start verschieben.',
        ],
        sample: 'Obwohl der Zeitplan knapp ist, schaffen wir den Start am Freitag.',
        requires: { any: ['obwohl', 'trotzdem', 'schaffen', 'freitag', 'verschieben', 'knapp'] },
        teaches: ['g.b1.konnektoren'],
      },

      /* ── 3. The budget problem ─────────────────────────────────────────── */
      {
        bot: {
          de: 'Leider haben wir ein anderes Problem: Das Budget ist schon jetzt um zehn Prozent zu hoch. Was schlagen Sie vor?',
          en: 'Unfortunately we have another problem: the budget is already ten per cent too high. What do you suggest?',
        },
        accept: [
          {
            match: ['schlage vor', 'vorschlag', 'wir könnten', 'wir sollten', 'vielleicht'],
            reply: {
              de: 'Das ist ein guter Punkt. Herr Yilmaz meint jedoch, dass dann die Qualität leidet.',
              en: 'That is a good point. Mr Yilmaz thinks, however, that the quality will suffer then.',
            },
          },
          {
            match: ['weniger', 'sparen', 'billiger', 'günstiger'],
            reply: {
              de: 'Sparen wäre gut. Herr Yilmaz meint jedoch, dass dann die Qualität leidet.',
              en: 'Saving would be good. Mr Yilmaz thinks, however, that the quality will suffer then.',
            },
          },
          {
            match: ['kunde', 'mehr geld', 'fragen'],
            reply: {
              de: 'Den Kunden um mehr Geld bitten? Möglich. Herr Yilmaz fürchtet aber, dass wir den Auftrag verlieren.',
              en: 'Ask the client for more money? Possible. But Mr Yilmaz fears that we will lose the contract.',
            },
          },
        ],
        fallback: {
          de: 'Was können wir tun, damit das Budget reicht?',
          en: 'What can we do so that the budget is enough?',
        },
        hints: [
          'Ich schlage vor, dass wir weniger Material bestellen.',
          'Wir könnten bei den Fotos sparen.',
          'Vielleicht fragen wir den Kunden nach mehr Geld.',
        ],
        sample: 'Ich schlage vor, dass wir bei den Fotos sparen.',
        requires: { any: ['schlage vor', 'könnten', 'sollten', 'vielleicht', 'sparen', 'weniger', 'kunde'] },
        teaches: ['g.b1.satzbau'],
      },

      /* ── 4. Weigh the objection ────────────────────────────────────────── */
      {
        bot: {
          de: 'Was denken Sie darüber? Ist das Sparen wichtiger, oder die Qualität?',
          en: 'What do you think about that? Is saving more important, or the quality?',
        },
        accept: [
          {
            match: ['einerseits', 'andererseits'],
            reply: {
              de: 'Gut abgewogen. Es gibt also Argumente auf beiden Seiten.',
              en: 'Well weighed up. So there are arguments on both sides.',
            },
          },
          {
            match: ['qualität', 'wichtiger', 'ich finde', 'ich denke', 'meiner meinung'],
            reply: {
              de: 'Danke für Ihre Meinung. Das sehe ich ähnlich.',
              en: 'Thank you for your opinion. I see it similarly.',
            },
          },
          {
            match: ['anders', 'nicht sicher', 'weiß nicht'],
            reply: {
              de: 'Das ist in Ordnung — dafür diskutieren wir ja.',
              en: 'That is fine — that is what we are discussing it for.',
            },
          },
        ],
        fallback: {
          de: 'Mich interessiert Ihre Meinung: Geld oder Qualität?',
          en: 'I am interested in your opinion: money or quality?',
        },
        hints: [
          'Einerseits sparen wir Geld, andererseits ist die Qualität sehr wichtig.',
          'Ich finde die Qualität wichtiger.',
          'Das sehe ich etwas anders.',
        ],
        sample: 'Einerseits sparen wir Geld, andererseits ist die Qualität sehr wichtig.',
        requires: { any: ['einerseits', 'qualität', 'ich finde', 'ich denke', 'anders', 'wichtig'] },
        teaches: ['g.b1.konnektoren'],
      },

      /* ── 5. The chair cuts in ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Entschuldigung, darf ich kurz unterbrechen? Wir haben nur noch zehn Minuten. Können wir uns auf eine Lösung einigen: Wir sparen bei den Fotos, aber nicht beim Design?',
          en: 'Sorry, may I interrupt for a moment? We only have ten minutes left. Can we agree on a solution: we save on the photos, but not on the design?',
        },
        accept: [
          {
            match: ['einverstanden', 'einigen', 'gute idee', 'gute lösung'],
            reply: {
              de: 'Prima, dann ist das entschieden.',
              en: 'Great, then that is decided.',
            },
          },
          {
            match: ['ja', 'okay', 'gut', 'passt'],
            reply: {
              de: 'Gut, dann halten wir das so fest.',
              en: 'Good, then we will record it like that.',
            },
          },
          {
            match: ['nein', 'aber', 'nicht einverstanden'],
            reply: {
              de: 'Ich verstehe Ihre Bedenken. Trotzdem müssen wir heute entscheiden — wir probieren es so.',
              en: 'I understand your concerns. Nevertheless we have to decide today — we will try it this way.',
            },
          },
        ],
        fallback: {
          de: 'Kurz und knapp: Sind Sie mit der Lösung einverstanden?',
          en: 'Short and sweet: are you okay with the solution?',
        },
        hints: [
          'Ja, ich bin einverstanden.',
          'Das ist eine gute Lösung.',
          'Ich bin nicht ganz einverstanden, aber wir können es probieren.',
        ],
        sample: 'Ja, ich bin mit der Lösung einverstanden.',
        requires: { any: ['einverstanden', 'ja', 'okay', 'gut', 'lösung', 'nein'] },
        teaches: ['g.b1.satzbau'],
      },

      /* ── 6. Who takes the minutes ──────────────────────────────────────── */
      {
        bot: {
          de: 'Wunderbar. Und wer schreibt heute das Protokoll?',
          en: 'Wonderful. And who is taking the minutes today?',
        },
        accept: [
          {
            match: ['ich schreibe', 'ich mache', 'ich kann', 'ich übernehme', 'mache ich', 'schreibe ich'],
            reply: {
              de: 'Danke, {name}! Schicken Sie es bitte bis heute Abend an alle Teilnehmer.',
              en: 'Thank you, {name}! Please send it to all participants by this evening.',
            },
          },
          {
            match: ['protokoll', 'heute abend', 'morgen'],
            reply: {
              de: 'Wunderbar. Dann schickt {name} das Protokoll an alle.',
              en: 'Wonderful. Then {name} will send the minutes to everyone.',
            },
          },
          {
            match: ['keine zeit', 'leider nicht', 'herr yilmaz', 'jemand anders'],
            reply: {
              de: 'Kein Problem, dann übernimmt Herr Yilmaz das Protokoll.',
              en: 'No problem, then Mr Yilmaz will take the minutes.',
            },
          },
        ],
        fallback: {
          de: 'Wer möchte das Protokoll übernehmen?',
          en: 'Who would like to take on the minutes?',
        },
        hints: [
          'Ich schreibe das Protokoll und schicke es heute an alle.',
          'Das Protokoll mache ich.',
          'Heute habe ich leider keine Zeit.',
        ],
        sample: 'Ich schreibe das Protokoll und schicke es bis heute Abend an alle.',
        requires: { any: ['ich schreibe', 'ich mache', 'ich kann', 'protokoll', 'keine zeit'] },
        teaches: ['g.b1.satzbau'],
      },

      /* ── 7. Anything else? ─────────────────────────────────────────────── */
      {
        bot: {
          de: 'Danke! Gibt es noch etwas, das nicht auf der Tagesordnung steht?',
          en: 'Thank you! Is there anything else that is not on the agenda?',
        },
        accept: [
          {
            match: ['nein', 'alles klar', 'nichts', 'von meiner seite'],
            reply: {
              de: 'Gut, dann sind wir für heute fertig.',
              en: 'Good, then we are done for today.',
            },
          },
          {
            match: ['frage', 'noch etwas', 'urlaub', 'nächste woche'],
            reply: {
              de: 'Gute Frage — das besprechen wir am besten gleich nach dem Meeting zu zweit.',
              en: 'Good question — we had best discuss that one-to-one right after the meeting.',
            },
          },
        ],
        fallback: {
          de: 'Noch etwas, oder können wir die Besprechung schließen?',
          en: 'Anything else, or can we close the meeting?',
        },
        hints: ['Nein, von meiner Seite ist alles klar.', 'Ich habe noch eine Frage zum Urlaub nächste Woche.'],
        sample: 'Nein, von meiner Seite ist alles klar.',
        requires: { any: ['nein', 'alles klar', 'nichts', 'frage', 'noch etwas'] },
        teaches: ['g.b1.satzbau'],
      },
    ],
    closing: {
      de: 'Vielen Dank, {name}, gute Arbeit! Bis nächsten Montag.',
      en: 'Thank you very much, {name}, good work! See you next Monday.',
    },
  },
]

export default conversations
