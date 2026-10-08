/**
 * A2 · L12 — Conversation: ring the practice, get an appointment, then sit
 * down in front of the doctor and say what is wrong.
 *
 * Turns 1-4 are the phone call with the reception desk, turns 5-8 the
 * appointment itself. Every turn has three genuinely different branches, so
 * "Ja, das passt" and "Nein, da arbeite ich" do not end up in the same place.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const conversations = [
  {
    id: 'c.a2.l12.arzttermin',
    level: 'A2',
    title: 'Ein Termin beim Arzt',
    icon: '🩺',
    setting:
      'You have felt ill for a few days. You ring the practice of Dr. Berger to get an appointment — and two hours later you are sitting in front of the doctor.',
    goal: 'Ask for an appointment, give your name, describe your symptoms and ask for a sick note.',
    roleBot: 'Frau Klein at the reception desk, then Dr. Berger',
    roleUser: 'You, the patient',
    vocabIds: [
      'v.a2.l12.praxis',
      'v.a2.l12.sprechstunde',
      'v.a2.l12.beschwerde',
      'v.a2.l12.husten',
      'v.a2.l12.fieber',
      'v.a2.l12.sich-fuehlen',
      'v.a2.l12.wehtun',
      'v.a2.l12.krankschreiben',
      'v.a2.l12.krankmeldung',
      'v.a2.l12.rezept',
      'v.a2.l12.tablette',
      'v.a2.l12.verschieben',
      'v.a2.l12.dringend',
    ],
    grammarIds: ['g.a2.reflexiv', 'g.a2.modalverben'],
    tags: ['reflexiv', 'modalverben'],
    turns: [
      /* ── 1. The call opens ───────────────────────────────────────────── */
      {
        bot: {
          de: 'Praxis Doktor Berger, guten Tag. Was kann ich für Sie tun?',
          en: 'Doctor Berger’s practice, hello. What can I do for you?',
        },
        accept: [
          {
            match: ['termin'],
            reply: {
              de: 'Gern. Ist es dringend, oder können Sie bis nächste Woche warten?',
              en: 'Of course. Is it urgent, or can you wait until next week?',
            },
          },
          {
            match: ['sprechstunde', 'geöffnet', 'wann haben sie'],
            reply: {
              de: 'Unsere Sprechstunde ist von acht bis zwölf Uhr. Brauchen Sie einen Termin?',
              en: 'Our consultation hours are from eight to twelve. Do you need an appointment?',
            },
          },
          {
            match: ['krank', 'husten', 'fieber', 'schmerzen', 'erkält'],
            reply: {
              de: 'Das klingt nicht gut. Dann machen wir gleich einen Termin für Sie.',
              en: 'That does not sound good. Then we will make an appointment for you right away.',
            },
          },
        ],
        fallback: {
          de: 'Entschuldigung, ich habe Sie nicht verstanden. Möchten Sie einen Termin?',
          en: 'Sorry, I did not understand you. Would you like an appointment?',
        },
        hints: ['Ich hätte gern einen Termin.', 'Ich brauche dringend einen Termin.', 'Wann ist die Sprechstunde?'],
        sample: 'Guten Tag, ich hätte gern einen Termin.',
        requires: { any: ['termin', 'sprechstunde'] },
        teaches: ['g.a2.modalverben'],
      },

      /* ── 2. Name ─────────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Waren Sie schon einmal bei uns? Und wie ist Ihr Name, bitte?',
          en: 'Have you been to us before? And what is your name, please?',
        },
        accept: [
          {
            match: ['zum ersten mal', 'das erste mal', 'noch nie', 'neu'],
            reply: {
              de: 'Alles klar, Sie sind neu bei uns. Bitte bringen Sie Ihre Versichertenkarte mit.',
              en: 'All right, you are new with us. Please bring your health insurance card with you.',
            },
          },
          {
            match: ['ich heiße', 'mein name ist', 'ich bin'],
            reply: {
              de: 'Danke schön, {name}. Ich trage Sie ein.',
              en: 'Thank you, {name}. I am putting you down.',
            },
          },
          {
            match: ['ja', 'letztes jahr', 'schon oft'],
            reply: {
              de: 'Gut, dann haben wir Ihre Daten schon im Computer.',
              en: 'Good, then we already have your details on the computer.',
            },
          },
        ],
        fallback: {
          de: 'Sagen Sie mir bitte noch einmal Ihren Namen.',
          en: 'Please tell me your name once more.',
        },
        hints: ['Ich heiße …', 'Mein Name ist …', 'Ich bin zum ersten Mal bei Ihnen.'],
        sample: 'Mein Name ist Julia Sander, ich bin zum ersten Mal bei Ihnen.',
        requires: { any: ['ich heiße', 'mein name ist', 'ich bin'] },
      },

      /* ── 3. Symptoms on the phone ────────────────────────────────────── */
      {
        bot: {
          de: 'Und welche Beschwerden haben Sie?',
          en: 'And what symptoms do you have?',
        },
        accept: [
          {
            match: ['husten', 'erkält', 'halsschmerzen', 'hals'],
            reply: {
              de: 'Das klingt nach einer Erkältung. Haben Sie auch Fieber?',
              en: 'That sounds like a cold. Do you have a temperature as well?',
            },
          },
          {
            match: ['fieber'],
            reply: {
              de: 'Bei Fieber sehen wir Sie lieber heute noch. Wie hoch ist es denn?',
              en: 'With a fever we would rather see you today. How high is it?',
            },
          },
          {
            match: ['schmerzen', 'weh', 'tut'],
            reply: {
              de: 'Bei Schmerzen machen wir immer schnell einen Termin. Seit wann haben Sie die denn?',
              en: 'With pain we always make an appointment quickly. Since when have you had it?',
            },
          },
        ],
        fallback: {
          de: 'Können Sie mir sagen, was Ihnen wehtut?',
          en: 'Can you tell me what hurts?',
        },
        hints: ['Ich habe Husten und Fieber.', 'Mein Hals tut weh.', 'Ich bin seit drei Tagen erkältet.'],
        sample: 'Ich habe seit drei Tagen Husten und Halsschmerzen.',
        requires: { any: ['husten', 'fieber', 'schmerzen', 'erkält', 'weh'] },
        teaches: ['g.a2.reflexiv'],
      },

      /* ── 4. The slot ─────────────────────────────────────────────────── */
      {
        bot: {
          de: 'Morgen um zehn Uhr haben wir etwas frei. Passt Ihnen das?',
          en: 'We have something free tomorrow at ten. Does that suit you?',
        },
        accept: [
          {
            match: ['ja', 'passt', 'gern', 'perfekt'],
            reply: {
              de: 'Sehr gut, dann trage ich Sie für morgen um zehn Uhr ein.',
              en: 'Very good, then I will put you down for ten o’clock tomorrow.',
            },
          },
          {
            match: ['nein', 'kann nicht', 'arbeite', 'verschieben', 'nachmittag', 'später'],
            reply: {
              de: 'Kein Problem, dann verschieben wir den Termin auf vierzehn Uhr.',
              en: 'No problem, then we will move the appointment to two in the afternoon.',
            },
          },
          {
            match: ['dringend', 'heute', 'sofort'],
            reply: {
              de: 'Wenn es dringend ist, kommen Sie bitte heute um elf Uhr in die Sprechstunde.',
              en: 'If it is urgent, please come to the surgery today at eleven.',
            },
          },
        ],
        fallback: {
          de: 'Geht der Termin morgen um zehn Uhr, ja oder nein?',
          en: 'Does the appointment tomorrow at ten work, yes or no?',
        },
        hints: ['Ja, das passt gut.', 'Nein, da muss ich arbeiten.', 'Können wir den Termin auf den Nachmittag verschieben?'],
        sample: 'Ja, morgen um zehn Uhr passt mir gut.',
        requires: { any: ['ja', 'nein', 'passt', 'kann nicht', 'verschieben', 'dringend'] },
        teaches: ['g.a2.modalverben'],
      },

      /* ── 5. In the consulting room ───────────────────────────────────── */
      {
        bot: {
          de: 'Zwei Stunden später in der Praxis. Guten Tag, ich bin Doktor Berger. Wie fühlen Sie sich heute?',
          en: 'Two hours later at the practice. Hello, I am Doctor Berger. How are you feeling today?',
        },
        accept: [
          {
            match: ['nicht gut', 'schlecht', 'müde', 'schlimm'],
            reply: {
              de: 'Das tut mir leid. Seit wann geht es Ihnen so?',
              en: 'I am sorry to hear that. Since when have you been feeling like this?',
            },
          },
          {
            match: ['besser', 'geht so', 'ganz gut'],
            reply: {
              de: 'Das freut mich. Trotzdem sehe ich mir den Hals einmal an.',
              en: 'I am glad to hear it. All the same, I will take a look at your throat.',
            },
          },
          {
            match: ['fieber', 'husten', 'schmerzen', 'erkält'],
            reply: {
              de: 'Verstehe. Dann untersuche ich Sie jetzt kurz.',
              en: 'I see. Then I will examine you briefly now.',
            },
          },
        ],
        fallback: {
          de: 'Sagen Sie mir bitte: Wie fühlen Sie sich heute?',
          en: 'Please tell me: how are you feeling today?',
        },
        hints: ['Ich fühle mich nicht gut.', 'Ich fühle mich seit drei Tagen schlecht.', 'Mir geht es etwas besser.'],
        sample: 'Ich fühle mich seit drei Tagen nicht gut.',
        requires: { any: ['fühle mich', 'geht es mir', 'mir geht es'] },
        teaches: ['g.a2.reflexiv'],
      },

      /* ── 6. The examination ──────────────────────────────────────────── */
      {
        bot: {
          de: 'Ich untersuche Sie kurz. Tut Ihnen der Hals weh?',
          en: 'I will examine you briefly. Does your throat hurt?',
        },
        accept: [
          {
            match: ['ja', 'sehr weh', 'halsschmerzen'],
            reply: {
              de: 'Der Hals ist wirklich rot. Sie haben eine Erkältung.',
              en: 'Your throat really is red. You have a cold.',
            },
          },
          {
            match: ['nein', 'kopf', 'bauch', 'rücken', 'ohr'],
            reply: {
              de: 'Gut, der Hals ist frei. Dann ist es wohl nur eine leichte Erkältung.',
              en: 'Good, your throat is clear. Then it is probably only a slight cold.',
            },
          },
          {
            match: ['husten', 'fieber'],
            reply: {
              de: 'Husten und Fieber zusammen, das passt zu einer Erkältung.',
              en: 'A cough and a fever together, that fits a cold.',
            },
          },
        ],
        fallback: {
          de: 'Bitte antworten Sie kurz: Tut Ihnen der Hals weh oder nicht?',
          en: 'Please answer briefly: does your throat hurt or not?',
        },
        hints: ['Ja, mein Hals tut sehr weh.', 'Nein, aber ich habe Husten.', 'Mir tut auch der Kopf weh.'],
        sample: 'Ja, mein Hals tut seit Montag weh.',
        requires: { any: ['ja', 'nein', 'weh', 'husten', 'fieber'] },
      },

      /* ── 7. Prescription and sick note ───────────────────────────────── */
      {
        bot: {
          de: 'Sie bekommen Tabletten. Ich schreibe Ihnen ein Rezept für die Apotheke. Haben Sie noch eine Frage?',
          en: 'You will get tablets. I am writing you a prescription for the pharmacy. Do you have another question?',
        },
        accept: [
          {
            match: ['krankmeldung', 'krankschreiben', 'krank schreiben', 'chef', 'arbeit'],
            reply: {
              de: 'Natürlich. Ich schreibe Sie für drei Tage krank. Die Krankmeldung bekommen Sie am Empfang.',
              en: 'Of course. I am signing you off sick for three days. You will get the sick note at the reception desk.',
            },
          },
          {
            match: ['wie oft', 'wie viele', 'wann muss ich', 'tabletten'],
            reply: {
              de: 'Nehmen Sie bitte dreimal am Tag eine Tablette, immer nach dem Essen.',
              en: 'Please take one tablet three times a day, always after a meal.',
            },
          },
          {
            match: ['nein', 'danke', 'alles klar', 'das ist alles'],
            reply: {
              de: 'Sehr gut. Dann sind wir hier fertig.',
              en: 'Very good. Then we are finished here.',
            },
          },
        ],
        fallback: {
          de: 'Möchten Sie noch etwas wissen, zum Beispiel wegen der Krankmeldung?',
          en: 'Would you like to know anything else, for example about the sick note?',
        },
        hints: ['Können Sie mich bitte krankschreiben?', 'Wie oft muss ich die Tabletten nehmen?', 'Nein danke, das ist alles.'],
        sample: 'Können Sie mich bitte krankschreiben? Mein Chef braucht eine Krankmeldung.',
        requires: { any: ['krankmeldung', 'krankschreiben', 'wie oft', 'tablette', 'nein', 'danke'] },
        teaches: ['g.a2.modalverben'],
      },

      /* ── 8. The follow-up appointment ────────────────────────────────── */
      {
        bot: {
          de: 'Kommen Sie am Freitag noch einmal zur Kontrolle. Passt Ihnen Freitag um neun Uhr?',
          en: 'Come again on Friday for a check-up. Does Friday at nine suit you?',
        },
        accept: [
          {
            match: ['ja', 'passt', 'gern', 'perfekt'],
            reply: {
              de: 'Perfekt, dann sehen wir uns am Freitag um neun Uhr.',
              en: 'Perfect, then we will see each other on Friday at nine.',
            },
          },
          {
            match: ['verschieben', 'nachmittag', 'später', 'geht nicht', 'kann nicht', 'arbeite'],
            reply: {
              de: 'Kein Problem, wir verschieben den Termin auf sechzehn Uhr.',
              en: 'No problem, we will move the appointment to four in the afternoon.',
            },
          },
          {
            match: ['montag', 'nächste woche', 'dienstag'],
            reply: {
              de: 'Auch gut, dann kommen Sie nächste Woche in die Sprechstunde.',
              en: 'That is fine too, then come to the surgery next week.',
            },
          },
        ],
        fallback: {
          de: 'Sagen Sie mir bitte, ob Freitag um neun Uhr geht.',
          en: 'Please tell me whether Friday at nine works.',
        },
        hints: ['Ja, das passt mir gut.', 'Können wir den Termin auf den Nachmittag verschieben?', 'Geht es auch nächste Woche?'],
        sample: 'Können wir den Termin auf Freitagnachmittag verschieben?',
        requires: { any: ['ja', 'passt', 'verschieben', 'nachmittag', 'montag', 'nächste woche'] },
        teaches: ['g.a2.modalverben'],
      },
    ],
    closing: {
      de: 'Gute Besserung, {name}! Nehmen Sie die Tabletten regelmäßig und ruhen Sie sich aus.',
      en: 'Get well soon, {name}! Take the tablets regularly and get some rest.',
    },
  },
]

export default conversations
