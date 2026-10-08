/**
 * A1 · L02 — Listening: a phone call to a language school.
 *
 * Audio is browser TTS (de-DE), so every line stays short and speakable.
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.a1.l02.anmeldung-am-telefon',
  level: 'A1',
  title: 'Anmeldung am Telefon',
  minutes: 4,
  intro: 'A man calls a language school. The secretary fills in his form: name, country, city and job. Listen for the four details.',
  script: [
    { who: 'Sekretärin', text: 'Sprachschule Leipzig, guten Tag.' },
    { who: 'Herr Silva', text: 'Guten Tag. Ich möchte einen Deutschkurs machen.' },
    { who: 'Sekretärin', text: 'Sehr gern. Wie heißen Sie?' },
    { who: 'Herr Silva', text: 'Mein Name ist Daniel Silva.' },
    { who: 'Sekretärin', text: 'Bitte buchstabieren Sie Ihren Familiennamen.' },
    { who: 'Herr Silva', text: 'Gern: S wie Samuel, I, L, V, A.' },
    { who: 'Sekretärin', text: 'Danke. Woher kommen Sie, Herr Silva?' },
    { who: 'Herr Silva', text: 'Ich komme aus Brasilien, aber ich wohne jetzt in Leipzig.' },
    { who: 'Sekretärin', text: 'Und was sind Sie von Beruf?' },
    { who: 'Herr Silva', text: 'Ich bin Ingenieur. Ich spreche Englisch und ein bisschen Deutsch.' },
  ],
  transcriptHidden: true,
  questions: [
    {
      id: 'x.a1.l02.18',
      kind: 'mcq',
      prompt: 'Wie heißt der Mann?',
      options: ['Daniel Silva', 'David Salva', 'Daniel Silber'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['w-fragen'],
      explain: 'He gives the name once ("Mein Name ist Daniel Silva") and then spells the surname S-I-L-V-A, which is exactly why people spell names on the phone.',
    },
    {
      id: 'x.a1.l02.19',
      kind: 'mcq',
      prompt: 'Was möchte Herr Silva machen?',
      options: ['Einen Deutschkurs machen.', 'Einen Termin beim Arzt machen.', 'Eine Wohnung suchen.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      tags: ['praesens'],
      explain: 'The reason for a call normally comes in the very first sentence of the caller — here "Ich möchte einen Deutschkurs machen."',
    },
    {
      id: 'x.a1.l02.20',
      kind: 'blank',
      sentence: 'Herr Silva ist von Beruf ___.',
      options: ['Ingenieur', 'Lehrer', 'Student', 'Arzt'],
      answer: 'Ingenieur',
      skill: 'listening',
      difficulty: 2,
      tags: ['praesens'],
      explain: 'The question "Was sind Sie von Beruf?" is answered with sein plus the bare job: "Ich bin Ingenieur" — no article, so the job word is easy to catch.',
    },
    {
      id: 'x.a1.l02.21',
      kind: 'mcq',
      prompt: 'Herr Silva kommt aus Brasilien. Wo wohnt er jetzt?',
      options: ['In Leipzig.', 'In Brasilien.', 'In Berlin.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      tags: ['praeposition'],
      explain: 'kommen aus and wohnen in answer two different questions. He says both in one sentence: aus Brasilien is his origin, in Leipzig is his home today.',
    },
  ],
}

export default listening
