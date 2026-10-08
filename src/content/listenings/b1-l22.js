/**
 * B1 · L22 — Listening: the evening news on the radio.
 *
 * Four short items read by one newsreader — the format of Goethe B1 Hören
 * Teil 1. Almost every sentence is passive or carries a relative clause,
 * which is exactly why news German sounds hard; the questions ask for one
 * fact per item.
 *
 * Exercise ids: x.b1.l22.25 … x.b1.l22.28.
 *
 * Plain data only. See ../SCHEMA.md.
 */

export const listening = {
  id: 'h.b1.l22.abendnachrichten',
  level: 'B1',
  title: 'Die Abendnachrichten',
  titleEn: 'The evening news',
  minutes: 4,
  intro:
    'Four short news items: a new app, a data theft, a football match and the weather. Listen for what the app does, what customers should do, why the match was called off and when the weather improves.',
  transcriptHidden: true,
  script: [
    { who: 'Sprecherin', text: 'Guten Abend, hier sind die Nachrichten.' },
    { who: 'Sprecherin', text: 'In Hamburg wurde heute eine neue App vorgestellt, mit der man Bus- und Bahntickets direkt auf dem Handy kaufen kann.' },
    { who: 'Sprecherin', text: 'Die App, die von einer Firma aus Berlin entwickelt wurde, kann man ab Montag kostenlos herunterladen.' },
    { who: 'Sprecherin', text: 'Bei dem Online-Händler Shopnet wurden gestern Daten von über einer Million Kunden gestohlen.' },
    { who: 'Sprecherin', text: 'Die Firma rät allen Kunden, ihr Passwort sofort zu ändern.' },
    { who: 'Sprecherin', text: 'Außerdem sollten Kunden keine E-Mails öffnen, in denen nach ihren Bankdaten gefragt wird.' },
    { who: 'Sprecherin', text: 'Und nun zum Sport: Das Fußballspiel zwischen Köln und Bremen wurde wegen des Sturms abgesagt.' },
    { who: 'Sprecherin', text: 'Es soll am nächsten Mittwoch nachgeholt werden.' },
    { who: 'Sprecherin', text: 'Das Wetter: Morgen bleibt es stürmisch und regnerisch, bei Temperaturen um zehn Grad.' },
    { who: 'Sprecherin', text: 'Erst am Wochenende wird es wieder freundlicher.' },
  ],
  questions: [
    {
      id: 'x.b1.l22.25',
      kind: 'mcq',
      prompt: 'Was kann man mit der neuen App machen?',
      options: ['Bus- und Bahntickets kaufen.', 'Fußballkarten kaufen.', 'Das Wetter sehen.'],
      answer: 0,
      skill: 'listening',
      difficulty: 1,
      tags: ['relativsatz'],
      explain:
        'The relative clause tells you: eine neue App, mit der man Bus- und Bahntickets … kaufen kann. mit der = "with which".',
    },
    {
      id: 'x.b1.l22.26',
      kind: 'mcq',
      prompt: 'Was sollen die Kunden von Shopnet tun?',
      options: ['Ihr Passwort sofort ändern.', 'Die neue App herunterladen.', 'Die Firma anrufen.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      tags: ['infinitiv'],
      explain:
        'Die Firma rät allen Kunden, ihr Passwort sofort zu ändern — raten is followed by zu + infinitive, so the advice comes last: zu ändern.',
    },
    {
      id: 'x.b1.l22.27',
      kind: 'mcq',
      prompt: 'Warum wurde das Fußballspiel abgesagt?',
      options: ['Wegen des Sturms.', 'Wegen eines Unfalls.', 'Weil ein Spieler krank war.'],
      answer: 0,
      skill: 'listening',
      difficulty: 2,
      tags: ['passiv'],
      explain:
        'wurde … abgesagt is the past passive of absagen, and wegen des Sturms gives the reason. The weather report afterwards confirms it: stürmisch.',
    },
    {
      id: 'x.b1.l22.28',
      kind: 'mcq',
      prompt: 'Wann wird das Wetter besser?',
      options: ['Am Wochenende.', 'Morgen.', 'Am Mittwoch.'],
      answer: 0,
      skill: 'listening',
      difficulty: 3,
      explain:
        'Morgen bleibt es stürmisch — tomorrow stays stormy. Erst am Wochenende means "not until the weekend". Wednesday is when the match will be replayed, not a weather date.',
    },
  ],
}

export default listening
