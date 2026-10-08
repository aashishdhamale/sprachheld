/**
 * B1 · L22 — Reading: a journalist spends a week without her smartphone.
 *
 * A newspaper report in the register the lesson trains for: the passive
 * where the doer does not matter (wird benutzt, wird angezeigt, werden
 * veröffentlicht), relative clauses that pack in detail, and the written
 * past — Präteritum for narration, Perfekt in the quotes.
 *
 * Exercise ids: x.b1.l22.20 … x.b1.l22.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.b1.l22.ohne-smartphone',
  level: 'B1',
  title: 'Eine Woche ohne Smartphone',
  titleEn: 'A week without a smartphone',
  minutes: 6,
  intro:
    'A journalist tried living without her phone for seven days and wrote about it in her newspaper. Read about the first difficult day, what changed, and what she recommends.',
  paragraphs: [
    'Im Durchschnitt wird das Smartphone in Deutschland mehr als zwei Stunden pro Tag benutzt. Viele Menschen, die ständig auf ihr Handy schauen, fühlen sich gestresst. Die Journalistin Clara Weiß hat deshalb einen Selbstversuch gemacht: eine Woche ohne Smartphone.',
    '„Der erste Tag war schrecklich“, erzählt sie. „Ich wusste nicht, wie spät es war, und meine Termine waren alle in einer App gespeichert.“ Am Bahnhof musste sie eine Fahrkarte am Automaten kaufen, weil ihr Ticket normalerweise auf dem Handy angezeigt wird.',
    'Nach drei Tagen wurde es leichter. Clara las wieder Bücher und eine richtige Zeitung, die jeden Morgen vor ihre Tür gelegt wurde. Sie traf ihre Freunde persönlich, statt ihnen Nachrichten zu schicken. „Ich habe besser geschlafen und konnte mich viel besser konzentrieren“, sagt sie.',
    'Ganz ohne Smartphone möchte sie aber nicht leben. „Es ist praktisch, und viele Informationen werden heute nur noch online veröffentlicht.“ Ihr Tipp: das Handy abends in ein anderes Zimmer legen und einmal pro Woche einen ganzen Tag offline sein.',
  ],
  glossary: [
    { de: 'im Durchschnitt', en: 'on average' },
    { de: 'ständig', en: 'constantly' },
    { de: 'der Selbstversuch', en: 'experiment on oneself' },
    { de: 'schrecklich', en: 'terrible' },
    { de: 'anzeigen', en: 'to display, to show' },
    { de: 'statt … zu', en: 'instead of …-ing' },
    { de: 'praktisch', en: 'practical, handy' },
  ],
  questions: [
    {
      id: 'x.b1.l22.20',
      kind: 'mcq',
      prompt: 'Wie lange wird das Smartphone in Deutschland im Durchschnitt pro Tag benutzt?',
      options: ['Mehr als zwei Stunden.', 'Weniger als eine Stunde.', 'Etwa fünf Stunden.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      tags: ['passiv'],
      explain:
        'The very first sentence, in the passive: wird … mehr als zwei Stunden pro Tag benutzt. The question repeats the same passive, so you can match it word for word.',
    },
    {
      id: 'x.b1.l22.21',
      kind: 'mcq',
      prompt: 'Warum war der erste Tag schwierig?',
      options: [
        'Sie wusste die Uhrzeit nicht, und ihre Termine waren in einer App.',
        'Sie hatte keine Zeitung.',
        'Ihre Freunde haben sie nicht besucht.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      tags: ['praeteritum'],
      explain:
        'In the quote: Ich wusste nicht, wie spät es war — and her appointments were in einer App gespeichert. wusste is the Präteritum of wissen, the form Germans use even in speech.',
    },
    {
      id: 'x.b1.l22.22',
      kind: 'mcq',
      prompt: 'Was hat Clara in der Woche ohne Handy gemacht?',
      options: ['Sie hat Bücher und eine Zeitung gelesen.', 'Sie hat mehr ferngesehen.', 'Sie hat mehr gearbeitet.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'Clara las wieder Bücher und eine richtige Zeitung — las is the Präteritum of lesen. She also met friends in person instead of messaging them.',
    },
    {
      id: 'x.b1.l22.23',
      kind: 'blank',
      sentence: 'Viele Informationen werden heute nur noch online ___.',
      options: ['veröffentlicht', 'veröffentlichen', 'veröffentlichte', 'geveröffentlicht'],
      answer: 'veröffentlicht',
      skill: 'reading',
      difficulty: 2,
      tags: ['passiv'],
      explain:
        'werden + Partizip II is the present passive. ver- is inseparable, so the participle has no ge-: veröffentlicht — never "geveröffentlicht".',
    },
    {
      id: 'x.b1.l22.24',
      kind: 'mcq',
      prompt: 'Was ist Claras Tipp?',
      options: [
        'Das Handy abends in ein anderes Zimmer legen.',
        'Kein Smartphone mehr benutzen.',
        'Nur noch am Wochenende online sein.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 3,
      explain:
        'She explicitly does not want to give the phone up (ganz ohne Smartphone möchte sie nicht leben), and the offline day is once a week — not the whole weekend.',
    },
  ],
}

export default reading
