/**
 * B1 · L25 — Reading: a friendship that nearly ended over a misunderstanding.
 *
 * A magazine column told in the written past with the second layer the
 * lesson is about: the narration in the Präteritum (kam, verletzte, dachte,
 * traf, erfuhr), everything that had already happened in the
 * Plusquamperfekt (hatte versprochen, war kaputtgegangen, vergessen hatte).
 *
 * Exercise ids: x.b1.l25.20 … x.b1.l25.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.b1.l25.freundschaft',
  level: 'B1',
  title: 'Zwei Jahre Funkstille',
  titleEn: 'Two years of silence',
  minutes: 6,
  intro:
    'Two best friends stopped talking for two years — because of one day that went wrong. Read what happened, what each of them thought, and how they found each other again.',
  paragraphs: [
    'Lena und Sophie kannten sich seit dem Kindergarten. Sie waren zusammen zur Schule gegangen, hatten gemeinsam studiert und wohnten jahrelang in einer WG. Niemand konnte sich vorstellen, dass diese Freundschaft einmal zu Ende gehen würde.',
    'Dann kam Sophies Hochzeit. Lena hatte versprochen, eine Rede zu halten, aber am Morgen der Hochzeit hatte sie einen Unfall mit dem Fahrrad. Sie verletzte sich am Arm und musste ins Krankenhaus. Weil ihr Handy bei dem Unfall kaputtgegangen war, konnte sie Sophie nicht erreichen.',
    'Sophie dachte, dass Lena die Hochzeit einfach vergessen hatte. Sie war so enttäuscht, dass sie nicht mehr mit ihr sprach. Zwei Jahre lang hatten die beiden keinen Kontakt.',
    'Erst als Sophie zufällig Lenas Mutter im Supermarkt traf, erfuhr sie die Wahrheit. Noch am selben Abend rief sie Lena an. „Wir haben beide am Telefon geweint“, erzählt Sophie. Heute sind die beiden wieder beste Freundinnen. „Ich habe gelernt, dass man miteinander reden sollte, bevor man etwas glaubt.“',
  ],
  glossary: [
    { de: 'die Funkstille', en: 'radio silence, no contact' },
    { de: 'die WG (Wohngemeinschaft)', en: 'shared flat' },
    { de: 'eine Rede halten', en: 'to give a speech' },
    { de: 'kaputtgehen', en: 'to break' },
    { de: 'enttäuscht', en: 'disappointed' },
    { de: 'zufällig', en: 'by chance' },
    { de: 'erfahren (erfuhr)', en: 'to find out, to learn' },
    { de: 'weinen', en: 'to cry' },
  ],
  questions: [
    {
      id: 'x.b1.l25.20',
      kind: 'mcq',
      prompt: 'Seit wann kannten sich Lena und Sophie?',
      options: ['Seit dem Kindergarten.', 'Seit dem Studium.', 'Seit der Hochzeit.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The first sentence: kannten sich seit dem Kindergarten. School, university and the shared flat all came later — told in the Plusquamperfekt because they lie before the story.',
    },
    {
      id: 'x.b1.l25.21',
      kind: 'mcq',
      prompt: 'Warum kam Lena nicht zur Hochzeit?',
      options: ['Sie hatte einen Unfall mit dem Fahrrad.', 'Sie hatte die Hochzeit vergessen.', 'Sie war im Urlaub.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Forgetting is only what Sophie THOUGHT (Sophie dachte, dass …). The facts are in paragraph two: an accident on the bike and a trip to hospital.',
    },
    {
      id: 'x.b1.l25.22',
      kind: 'mcq',
      prompt: 'Warum konnte Lena Sophie nicht anrufen?',
      options: ['Ihr Handy war bei dem Unfall kaputtgegangen.', 'Sie hatte Sophies Nummer nicht.', 'Sie war zu müde.'],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['plusquamperfekt'],
      explain:
        'kaputtgegangen war — Plusquamperfekt with sein, because kaputtgehen is a change of state. It happened before she tried to call.',
    },
    {
      id: 'x.b1.l25.23',
      kind: 'blank',
      sentence: 'Sophie dachte, dass Lena die Hochzeit vergessen ___.',
      options: ['hatte', 'war', 'hat', 'wurde'],
      answer: 'hatte',
      skill: 'reading',
      difficulty: 2,
      tags: ['plusquamperfekt', 'nebensatz'],
      explain:
        'The forgetting would have happened before Sophie’s thinking (dachte), so Plusquamperfekt — and vergessen takes haben: vergessen hatte, at the end of the dass-clause.',
    },
    {
      id: 'x.b1.l25.24',
      kind: 'mcq',
      prompt: 'Wie erfuhr Sophie die Wahrheit?',
      options: ['Sie traf zufällig Lenas Mutter.', 'Lena schrieb ihr einen Brief.', 'Eine Freundin erzählte es ihr.'],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      tags: ['praeteritum'],
      explain:
        'Erst als … — "only when": Sophie met Lena’s mother by chance in the supermarket. traf and erfuhr are the irregular Präteritum forms of treffen and erfahren.',
    },
  ],
}

export default reading
