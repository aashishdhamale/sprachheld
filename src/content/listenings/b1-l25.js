/**
 * B1 · L25 — Listening: a patient with back pain after helping with a move.
 *
 * Twelve lines at the GP's. The patient explains what had happened with a
 * nachdem-clause in the Plusquamperfekt; the doctor examines, reassures
 * and gives advice that goes against the patient's expectation (move, do
 * not stay in bed) — the detail the questions check.
 *
 * Exercise ids: x.b1.l25.25 … x.b1.l25.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.b1.l25.rueckenschmerzen',
  level: 'B1',
  title: 'Rückenschmerzen nach dem Umzug',
  titleEn: 'Back pain after the move',
  minutes: 4,
  intro:
    'Herr Lindqvist sees his GP because of back pain. Listen for what caused it, what the doctor finds, what she tells him to do, and how long he is signed off work.',
  transcriptHidden: true,
  script: [
    { who: 'Ärztin', text: 'Guten Tag, Herr Lindqvist. Was führt Sie zu mir?' },
    { who: 'Herr Lindqvist', text: 'Ich habe seit drei Tagen starke Rückenschmerzen.' },
    { who: 'Ärztin', text: 'Ist etwas passiert?' },
    { who: 'Herr Lindqvist', text: 'Ja, am Samstag habe ich meiner Schwester beim Umzug geholfen. Nachdem wir das Sofa in den vierten Stock getragen hatten, konnte ich mich kaum noch bewegen.' },
    { who: 'Ärztin', text: 'Haben Sie schon etwas dagegen genommen?' },
    { who: 'Herr Lindqvist', text: 'Ich habe zwei Schmerztabletten genommen, aber die haben nicht viel geholfen.' },
    { who: 'Ärztin', text: 'Ich untersuche Sie jetzt kurz. So, das ist zum Glück nichts Schlimmes. Der Muskel ist nur verspannt.' },
    { who: 'Herr Lindqvist', text: 'Muss ich mich jetzt ins Bett legen?' },
    { who: 'Ärztin', text: 'Nein, im Gegenteil. Bewegen Sie sich, aber vorsichtig. Gehen Sie spazieren und machen Sie jeden Tag diese drei Übungen.' },
    { who: 'Herr Lindqvist', text: 'Und die Arbeit? Ich sitze den ganzen Tag am Computer.' },
    { who: 'Ärztin', text: 'Ich schreibe Sie bis Freitag krank. Nächste Woche kommen Sie dann noch einmal zur Kontrolle.' },
    { who: 'Herr Lindqvist', text: 'Vielen Dank, Frau Doktor.' },
  ],
  questions: [
    {
      id: 'x.b1.l25.25',
      kind: 'mcq',
      prompt: 'Warum hat Herr Lindqvist Rückenschmerzen?',
      options: [
        'Er hatte beim Umzug ein Sofa getragen.',
        'Er hatte zu lange am Computer gesessen.',
        'Er hatte einen Unfall mit dem Auto.',
      ],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['plusquamperfekt'],
      explain:
        'Nachdem wir das Sofa in den vierten Stock getragen hatten — the Plusquamperfekt marks the cause that came first. The computer comes up later, about his work.',
    },
    {
      id: 'x.b1.l25.26',
      kind: 'mcq',
      prompt: 'Was sagt die Ärztin zu den Schmerzen?',
      options: ['Es ist nichts Schlimmes, der Muskel ist verspannt.', 'Er muss sofort ins Krankenhaus.', 'Er braucht eine Operation.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      explain:
        'zum Glück nichts Schlimmes — luckily nothing serious. verspannt means tense or knotted, the everyday diagnosis for a stiff back.',
    },
    {
      id: 'x.b1.l25.27',
      kind: 'mcq',
      prompt: 'Was soll er tun?',
      options: ['Sich vorsichtig bewegen und Übungen machen.', 'Eine Woche im Bett bleiben.', 'Mehr Schmerztabletten nehmen.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      tags: ['reflexiv'],
      explain:
        'He asks about bed rest and she answers Nein, im Gegenteil — on the contrary: Bewegen Sie sich, aber vorsichtig, plus walks and three exercises a day.',
    },
    {
      id: 'x.b1.l25.28',
      kind: 'mcq',
      prompt: 'Wie lange ist er krankgeschrieben?',
      options: ['Bis Freitag.', 'Bis nächste Woche.', 'Drei Tage.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'Ich schreibe Sie bis Freitag krank. Next week is the check-up (zur Kontrolle), and three days is how long the pain has lasted so far.',
    },
  ],
}

export default listening
