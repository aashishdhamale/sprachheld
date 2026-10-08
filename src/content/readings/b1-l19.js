/**
 * B1 · L19 — Reading: five meeting rules from a company newsletter.
 *
 * The register of an internal newsletter: present tense, numbered points,
 * wer-clauses (Wer zu spät kommt, …), one relative clause and the lesson's
 * connectors in their natural habitat — obwohl, trotzdem, deshalb,
 * einerseits … andererseits.
 *
 * Exercise ids: x.b1.l19.20 … x.b1.l19.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.b1.l19.besprechungs-regeln',
  level: 'B1',
  title: 'Fünf Regeln für bessere Besprechungen',
  titleEn: 'Five rules for better meetings',
  minutes: 6,
  intro:
    'From the staff newsletter of a mid-sized company: the HR department introduces new rules for meetings. Read it the way you would at work — first for the five rules, then for the details.',
  paragraphs: [
    'Viele Angestellte verbringen jede Woche mehrere Stunden in Besprechungen. Obwohl Meetings wichtig sind, finden die meisten sie zu lang und zu wenig produktiv. Die Personalabteilung hat deshalb fünf einfache Regeln gesammelt, die ab Juni in der ganzen Firma gelten.',
    'Erstens: Jede Besprechung braucht eine Tagesordnung. Wer ein Meeting plant, schickt sie spätestens einen Tag vorher an alle Teilnehmer. So kann sich jeder gut vorbereiten. Zweitens: Wir beginnen pünktlich, auch wenn noch nicht alle da sind. Wer zu spät kommt, liest später das Protokoll.',
    'Drittens: Eine Person leitet das Gespräch und achtet auf die Zeit. Sie darf andere unterbrechen, wenn die Diskussion zu lang wird. Viertens: Am Ende fasst die Leiterin oder der Leiter die Ergebnisse kurz zusammen. Jede Entscheidung bekommt eine verantwortliche Person und einen Termin.',
    'Fünftens: Nicht jede Frage braucht ein Meeting. Einerseits ist ein persönliches Gespräch oft schneller als zehn E-Mails, andererseits kann man kleine Probleme auch am Telefon klären. Trotzdem gilt: Wenn Sie ein Thema wirklich gemeinsam entscheiden müssen, laden Sie zu einer kurzen Besprechung ein.',
  ],
  glossary: [
    { de: 'die Angestellten', en: 'employees' },
    { de: 'verbringen', en: 'to spend (time)' },
    { de: 'die Personalabteilung', en: 'HR department' },
    { de: 'gelten', en: 'to apply, to be in force' },
    { de: 'spätestens', en: 'at the latest' },
    { de: 'achten auf', en: 'to pay attention to' },
    { de: 'verantwortlich', en: 'responsible' },
    { de: 'klären', en: 'to clear up, to sort out' },
    { de: 'gemeinsam', en: 'together, jointly' },
  ],
  questions: [
    {
      id: 'x.b1.l19.20',
      kind: 'mcq',
      prompt: 'Was denken viele Angestellte über Besprechungen?',
      options: ['Sie finden sie oft zu lang.', 'Sie finden sie unwichtig.', 'Sie möchten mehr Besprechungen.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['konnektoren'],
      explain:
        'The obwohl-clause concedes that meetings are important — so "unwichtig" is ruled out — and the main clause gives the complaint: zu lang und zu wenig produktiv.',
    },
    {
      id: 'x.b1.l19.21',
      kind: 'mcq',
      prompt: 'Wann sollen die Teilnehmer die Tagesordnung bekommen?',
      options: ['Spätestens einen Tag vor dem Meeting.', 'Am Anfang des Meetings.', 'Eine Woche vorher.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'spätestens einen Tag vorher — "at the latest one day before". spätestens sets a deadline; frühestens would set the earliest possible point.',
    },
    {
      id: 'x.b1.l19.22',
      kind: 'mcq',
      prompt: 'Was passiert, wenn jemand zu spät kommt?',
      options: [
        'Die Besprechung beginnt trotzdem pünktlich.',
        'Alle warten auf diese Person.',
        'Die Besprechung wird verschoben.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'Rule two: "Wir beginnen pünktlich, auch wenn noch nicht alle da sind." auch wenn means "even if" — the start time does not depend on who is missing. Latecomers read the minutes afterwards.',
    },
    {
      id: 'x.b1.l19.23',
      kind: 'blank',
      sentence: 'Am Ende ___ die Leiterin die Ergebnisse kurz zusammen.',
      options: ['fasst', 'fassen', 'zusammenfasst', 'gefasst'],
      answer: 'fasst',
      skill: 'reading',
      difficulty: 2,
      tags: ['trennbar', 'wortstellung'],
      explain:
        'zusammen is already waiting at the end of the sentence, so the gap needs only the conjugated half of zusammenfassen for die Leiterin: fasst. The full word zusammenfasst only appears when a conjunction pushes the verb to the end.',
    },
    {
      id: 'x.b1.l19.24',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Wer zu spät kommt, liest später das Protokoll.',
      answer: 'Whoever comes late reads the minutes later.',
      accept: [
        'Anyone who comes late reads the minutes later.',
        'Whoever arrives late reads the minutes later.',
        'Anyone who arrives late reads the minutes later.',
        'Whoever is late reads the minutes later.',
      ],
      skill: 'reading',
      difficulty: 3,
      hint: 'Wer at the start of a statement is not a question — it means "whoever".',
      explain:
        'A Wer-clause in a statement means "whoever / anyone who". It fills position 1 like any other clause, which is why liest comes directly after the comma.',
    },
  ],
}

export default reading
