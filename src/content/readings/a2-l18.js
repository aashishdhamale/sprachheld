/**
 * A2 · L18 — Reading: a complaint e-mail and the shop's answer.
 *
 * Two real letter shapes next to each other: the customer who states the
 * problem and names what he wants, and the service desk that apologises,
 * proposes a solution and promises a date. Present tense plus Perfekt, one
 * wenn-clause and two dass-clauses — no relative clauses, no passive.
 *
 * Exercise ids: x.a2.l18.20 … x.a2.l18.24.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const reading = {
  id: 'r.a2.l18.beschwerde-mail',
  level: 'A2',
  title: 'Die Beschwerde und die Antwort',
  titleEn: 'The complaint and the reply',
  minutes: 5,
  intro:
    'Tobias Lenz bought a kettle three weeks ago and it has stopped working. Read his e-mail to the shop first, then the answer from the customer service desk.',
  paragraphs: [
    'Sehr geehrte Damen und Herren, am dritten März habe ich bei Ihnen einen Wasserkocher gekauft. Leider funktioniert das Gerät seit Montag nicht mehr. Ich habe es zweimal ausprobiert, aber es geht einfach nicht an. Die Quittung und die Garantie habe ich noch. Ich möchte den Wasserkocher gern umtauschen oder das Geld zurückbekommen. Können Sie mir bitte sagen, wie das geht? Mit freundlichen Grüßen, Tobias Lenz',
    'Sehr geehrter Herr Lenz, vielen Dank für Ihre Nachricht. Es tut uns sehr leid, dass Ihr Wasserkocher kaputt ist. Wir entschuldigen uns für das Problem. Bringen Sie das Gerät bitte mit der Quittung in unser Geschäft in der Bahnhofstraße. Wenn Sie keine Zeit haben, schicken Sie es uns einfach mit der Post. Wir schlagen vor: Sie tauschen den Wasserkocher direkt bei uns um. Das Gerät hat noch zwei Jahre Garantie, deshalb kostet der Umtausch nichts. Wir versprechen Ihnen, dass alles bis Freitag klappt. Mit freundlichen Grüßen, Kundenservice Elektro Wagner',
  ],
  glossary: [
    { de: 'Sehr geehrte Damen und Herren', en: 'Dear Sir or Madam (formal opening to a company)' },
    { de: 'der Wasserkocher', en: 'kettle' },
    { de: 'das Gerät', en: 'device, appliance' },
    { de: 'ausprobieren', en: 'to try out' },
    { de: 'zurückbekommen', en: 'to get back' },
    { de: 'die Nachricht', en: 'message' },
    { de: 'Es tut uns leid', en: 'we are sorry' },
    { de: 'der Umtausch', en: 'exchange (of a bought item)' },
    { de: 'der Kundenservice', en: 'customer service' },
  ],
  questions: [
    {
      id: 'x.a2.l18.20',
      kind: 'mcq',
      prompt: 'Was ist das Problem?',
      options: [
        'Der Wasserkocher funktioniert seit Montag nicht mehr.',
        'Der Wasserkocher war zu teuer.',
        'Herr Lenz hat die Quittung verloren.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'The second sentence names the fault: "Leider funktioniert das Gerät seit Montag nicht mehr." seit + dative gives you the starting point of a problem that is still going on.',
    },
    {
      id: 'x.a2.l18.21',
      kind: 'mcq',
      prompt: 'Was hat Herr Lenz noch?',
      options: ['Die Quittung und die Garantie.', 'Nur die Garantie.', 'Nur die Verpackung.'],
      answer: 0,
      skill: 'reading',
      difficulty: 1,
      explain:
        'He says it in one short sentence: "Die Quittung und die Garantie habe ich noch." The object stands first here for emphasis, so habe is still the second element.',
    },
    {
      id: 'x.a2.l18.22',
      kind: 'mcq',
      prompt: 'Was soll Herr Lenz mit dem Wasserkocher machen?',
      options: [
        'Er soll ihn mit der Quittung ins Geschäft bringen oder mit der Post schicken.',
        'Er soll ihn zu Hause reparieren.',
        'Er soll noch zwei Jahre warten.',
      ],
      answer: 0,
      skill: 'reading',
      difficulty: 2,
      explain:
        'The shop gives two ways, not one: first the imperative "Bringen Sie das Gerät … in unser Geschäft", then the alternative after wenn — "schicken Sie es uns einfach mit der Post".',
    },
    {
      id: 'x.a2.l18.23',
      kind: 'blank',
      sentence: 'Der Umtausch kostet nichts, weil das Gerät noch zwei Jahre ___ hat.',
      options: ['Garantie', 'Quittung', 'Zeit', 'Post'],
      answer: 'Garantie',
      skill: 'reading',
      difficulty: 2,
      tags: ['nebensatz'],
      explain:
        'The text says it with deshalb ("Das Gerät hat noch zwei Jahre Garantie, deshalb kostet der Umtausch nichts"). Garantie is the reason, and weil simply turns that reason round.',
    },
    {
      id: 'x.a2.l18.24',
      kind: 'translate',
      direction: 'de-en',
      prompt: 'Wir versprechen Ihnen, dass alles bis Freitag klappt.',
      answer: 'We promise you that everything will work out by Friday.',
      accept: [
        'We promise you that everything works out by Friday.',
        'We promise you that everything will be fine by Friday.',
        'We promise you that it will all work out by Friday.',
      ],
      skill: 'reading',
      difficulty: 3,
      hint: 'klappen is not about machines — it is about things going according to plan.',
      explain:
        'The person you promise something to stands in the dative (Ihnen), and dass pushes klappt to the very end. German uses the present tense for a promise about Friday where English needs "will".',
    },
  ],
}

export default reading
