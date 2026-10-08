/**
 * Runs one mock exam — the whole thing under exam conditions (timed, audio
 * play limits, no answers until a section is handed in), or one section as
 * untimed practice with instant checking and transcripts.
 */

import { useEffect, useRef, useState } from 'react'
import { examById } from '../content/index.js'
import { useProgress } from '../store/progress.jsx'
import { navigate, href } from '../lib/router.js'
import { stopSpeaking } from '../lib/speech.js'
import { FORMATS, gradePart, scoreSection, totalOf, verdict, isObjective, PASS_MARK, SECTION_POINTS } from '../engine/exam.js'
import { Bar, Empty, Modal, Pill, ScoreRing, StepDots } from '../ui/primitives.jsx'
import {
  ExamAudio, ExamText, McItem, TfItem, AbItem, MatchPart, FormPart, MessagePart,
  IntroPart, CardsPart, RequestsPart, MonologuePart, PlanPart,
} from '../ui/ExamParts.jsx'

const SKILL_OF = { hoeren: 'listening', lesen: 'reading', schreiben: 'writing' }
const NEXT_STEP = {
  hoeren: [{ to: '/listening', label: '🎧 Listening scenes' }, { to: '/numbers', label: '🔢 Numbers & time by ear' }],
  lesen: [{ to: '/reading', label: '📖 Reading texts' }, { to: '/vocab', label: '🗂 Vocabulary review' }],
  schreiben: [{ to: '/translate', label: '🔁 Translation practice' }, { to: '/builder', label: '🧩 Sentence builder' }],
  sprechen: [{ to: '/chat', label: '💬 Conversations' }, { to: '/freechat', label: '🤖 Free conversation' }],
}

export default function ExamRun({ id, query = {} }) {
  const exam = examById.get(id)
  if (!exam) {
    return (
      <div className="runner">
        <div className="runner-body">
          <div className="runner-body-inner">
            <Empty icon="🎓" title="Exam not found" action={<a className="btn btn-primary" href={href('/exam')}>All mock exams</a>} />
          </div>
        </div>
      </div>
    )
  }
  return <Runner key={`${id}-${query.mode}-${query.section}`} exam={exam} query={query} />
}

function Runner({ exam, query }) {
  const { state, dispatch } = useProgress()
  const fmt = FORMATS[exam.format]
  const mode = query.mode === 'exam' ? 'exam' : 'practice'
  const sectionIds = mode === 'exam' ? fmt.order : [fmt.sections[query.section] ? query.section : fmt.order[0]]

  const [sIdx, setSIdx] = useState(0)
  const [pIdx, setPIdx] = useState(0)
  const [phase, setPhase] = useState('intro') // intro | run | section | report
  const [answers, setAnswers] = useState({})
  const [plays, setPlays] = useState({})
  const [checked, setChecked] = useState({})
  const [results, setResults] = useState({})
  const [confirmExit, setConfirmExit] = useState(false)
  const attemptId = useRef(`${exam.id}:${Date.now()}`)
  const sectionStart = useRef(Date.now())
  const runStart = useRef(Date.now())

  useEffect(() => () => stopSpeaking(), [])

  const sid = sectionIds[sIdx]
  const sSpec = fmt.sections[sid]
  const sContent = exam.sections[sid]
  const pSpec = sSpec.parts[pIdx]
  const key = `${sid}.${pSpec.id}`
  const isLastPart = pIdx === sSpec.parts.length - 1
  const isLastSection = sIdx === sectionIds.length - 1

  const setPart = (k, v) => setAnswers((a) => ({ ...a, [k]: v }))

  const submitSection = () => {
    stopSpeaking()
    const parts = {}
    for (const p of sSpec.parts) parts[p.id] = gradePart(p, sContent[p.id], answers[`${sid}.${p.id}`] || {})
    const score = scoreSection(sSpec, parts)
    const nextResults = { ...results, [sid]: { ...score, parts } }
    setResults(nextResults)

    // Objective items feed the skill profile like any other practice.
    const skill = SKILL_OF[sid]
    if (skill) {
      for (const p of sSpec.parts) {
        for (const it of parts[p.id].items || []) {
          dispatch({ type: 'answer', skill, correct: it.correct, given: String(it.given ?? ''), expected: String(it.expected), xp: it.correct ? 1 : 0 })
        }
      }
    }

    const done = Object.keys(nextResults).length === sectionIds.length
    dispatch({
      type: 'examAttempt',
      minutes: Math.max(1, Math.round((Date.now() - sectionStart.current) / 60000)),
      attempt: {
        id: attemptId.current,
        examId: exam.id,
        level: exam.level,
        mode,
        at: Date.now(),
        complete: mode === 'exam' && done,
        sections: Object.fromEntries(Object.entries(nextResults).map(([k, v]) => [k, { raw: v.raw, max: v.max, points: v.points }])),
        total: mode === 'exam' && done ? totalOf(nextResults) : null,
      },
    })
    setPhase('section')
  }

  const startSection = () => {
    sectionStart.current = Date.now()
    setPIdx(0)
    setPhase('run')
  }

  const nextSection = () => {
    if (isLastSection) {
      if (mode === 'exam') setPhase('report')
      else navigate('/exam')
      return
    }
    setSIdx(sIdx + 1)
    setPIdx(0)
    setPhase('intro')
  }

  const exit = () => {
    stopSpeaking()
    navigate('/exam')
  }

  /* ── Screens ── */

  const top = (
    <div className="runner-top">
      <div className="runner-top-inner">
        <div className="between">
          <button className="btn btn-ghost btn-sm" onClick={() => (phase === 'run' ? setConfirmExit(true) : exit())}>
            ✕ Exit
          </button>
          <div style={{ textAlign: 'center', minWidth: 0 }}>
            <div className="tiny dim">
              {fmt.name} · {exam.title} · {mode === 'exam' ? 'Exam conditions' : 'Practice'}
            </div>
            <div className="bold small">
              {sSpec.icon} {sSpec.title}
              {phase === 'run' && ` · Teil ${pIdx + 1}`}
            </div>
          </div>
          {phase === 'run' && mode === 'exam' ? <Timer start={sectionStart.current} minutes={sSpec.minutes} /> : <span style={{ width: 48 }} />}
        </div>
        {phase === 'run' && <StepDots total={sSpec.parts.length} current={pIdx} />}
      </div>
    </div>
  )

  let body
  if (phase === 'intro') {
    body = (
      <div className="stack-lg">
        {sIdx === 0 && mode === 'exam' && (
          <div className="note tip small">
            Full mock exam: {sectionIds.map((s) => fmt.sections[s].title).join(' → ')}, about{' '}
            {sectionIds.reduce((m, s) => m + fmt.sections[s].minutes, 0)} minutes. Audio plays only as often as in the real
            exam, and you see your answers after each section. Each section is worth {SECTION_POINTS} points; {PASS_MARK} of 100 passes.
          </div>
        )}
        <header className="page-head">
          <h1 className="page-title">
            {sSpec.icon} {sSpec.title} <span className="dim" style={{ fontWeight: 500 }}>· {sSpec.en}</span>
          </h1>
          <p className="page-sub">
            {sSpec.parts.length} parts · {mode === 'exam' ? `${sSpec.minutes} minutes` : 'untimed — check each part as you go'}
          </p>
        </header>
        <div className="stack-sm">
          {sSpec.parts.map((p, i) => (
            <div key={p.id} className="card pad-sm stack-sm">
              <div className="bold small">Teil {i + 1}</div>
              <div className="small de">{p.de}</div>
              <div className="tiny dim">{p.en}</div>
            </div>
          ))}
        </div>
        {(sid === 'schreiben' || sid === 'sprechen') && (
          <div className="note small">
            {sid === 'schreiben'
              ? 'The form is marked automatically. For the messages you check your own text against the content points and a model answer — with optional AI feedback if you have a key set up.'
              : 'Speak your answers (Chrome/Edge) or type them. Compare with the model answer and rate yourself honestly — the real examiners mark task completion, pronunciation and range.'}
          </div>
        )}
        <button className="btn btn-primary btn-lg btn-block" onClick={startSection}>
          {mode === 'exam' ? `Start ${sSpec.title} · ${sSpec.minutes} min` : `Start ${sSpec.title}`}
        </button>
      </div>
    )
  } else if (phase === 'run') {
    const revealed = mode === 'practice' && checked[key]
    body = (
      <div className="stack-lg" key={key}>
        <div className="card sunk pad-sm stack-sm">
          <div className="small de bold">{pSpec.de}</div>
          <div className="tiny dim">{pSpec.en}</div>
        </div>
        <PartView
          sid={sid}
          spec={pSpec}
          content={sContent[pSpec.id]}
          value={answers[key]}
          onChange={(v) => setPart(key, v)}
          reveal={revealed}
          mode={mode}
          plays={plays}
          onPlay={(k) => setPlays((p) => ({ ...p, [k]: (p[k] || 0) + 1 }))}
          level={exam.level}
        />
        {mode === 'practice' && isObjective(pSpec.type) && !revealed && (
          <button className="btn btn-soft btn-block" onClick={() => setChecked((c) => ({ ...c, [key]: true }))}>
            Prüfen — check this part
          </button>
        )}
        {revealed && <PartScore spec={pSpec} content={sContent[pSpec.id]} value={answers[key]} />}
      </div>
    )
  } else if (phase === 'section') {
    const r = results[sid]
    body = (
      <SectionResult
        sid={sid}
        sSpec={sSpec}
        sContent={sContent}
        result={r}
        answers={answers}
        mode={mode}
        isLast={isLastSection}
        onNext={nextSection}
      />
    )
  } else {
    body = <Report fmt={fmt} exam={exam} results={results} minutes={Math.round((Date.now() - runStart.current) / 60000)} name={state.profile.name} />
  }

  return (
    <div className="runner">
      {top}
      <div className="runner-body">
        <div className="runner-body-inner">{body}</div>
      </div>
      {phase === 'run' && (
        <div className="runner-foot">
          <div className="runner-foot-inner">
            <button className="btn" disabled={pIdx === 0} onClick={() => setPIdx(pIdx - 1)}>
              ← Back
            </button>
            <div className="grow" />
            {!isLastPart ? (
              <button className="btn btn-primary" onClick={() => setPIdx(pIdx + 1)}>
                Teil {pIdx + 2} →
              </button>
            ) : (
              <button className="btn btn-primary" onClick={submitSection}>
                Abgeben — hand in {sSpec.title}
              </button>
            )}
          </div>
        </div>
      )}
      <Modal
        open={confirmExit}
        onClose={() => setConfirmExit(false)}
        title="Leave the exam?"
        footer={
          <>
            <button className="btn" onClick={() => setConfirmExit(false)}>
              Keep going
            </button>
            <button className="btn btn-danger" onClick={exit}>
              Leave
            </button>
          </>
        }
      >
        <p className="muted">
          {Object.keys(results).length
            ? 'Sections you already handed in are saved. This section’s answers will be lost.'
            : 'Your answers in this section will be lost.'}
        </p>
      </Modal>
    </div>
  )
}

/* ── One part ────────────────────────────────────────────────────────────── */

function PartView({ sid, spec, content, value, onChange, reveal, mode, plays, onPlay, level }) {
  const v = value || {}
  const limit = mode === 'exam' && spec.plays ? spec.plays : Infinity
  const setItem = (itemId, x) => onChange({ ...v, [itemId]: x })
  const audioFor = (lines, k) => (
    <ExamAudio lines={lines} limit={limit} used={plays[k] || 0} onPlay={() => onPlay(k)} transcript={reveal} />
  )

  switch (spec.type) {
    case 'mc':
    case 'tf':
    case 'yn':
    case 'ab':
      return (
        <div className="stack-lg">
          {content.audio && audioFor(content.audio, `${sid}.${spec.id}`)}
          {content.text && <ExamText text={content.text} />}
          {content.texts?.map((t, i) => <ExamText key={i} text={t} />)}
          {content.items.map((it, i) => (
            <div key={it.id} className="stack-sm">
              {it.audio && audioFor(it.audio, it.id)}
              {spec.type === 'mc' && <McItem n={i + 1} item={it} value={v[it.id]} onChange={(x) => setItem(it.id, x)} reveal={reveal} />}
              {(spec.type === 'tf' || spec.type === 'yn') && (
                <TfItem n={i + 1} item={it} value={v[it.id]} onChange={(x) => setItem(it.id, x)} reveal={reveal} yesNo={spec.type === 'yn'} />
              )}
              {spec.type === 'ab' && <AbItem n={i + 1} item={it} value={v[it.id]} onChange={(x) => setItem(it.id, x)} reveal={reveal} />}
            </div>
          ))}
        </div>
      )
    case 'match':
      return (
        <div className="stack-lg">
          {content.audio && audioFor(content.audio, `${sid}.${spec.id}`)}
          {content.prompt && <div className="small bold de">{content.prompt}</div>}
          <MatchPart part={content} value={v} onChange={onChange} reveal={reveal} allowX={sid === 'lesen'} />
        </div>
      )
    case 'form':
      return <FormPart content={content} value={v} onChange={onChange} reveal={reveal} />
    case 'message':
      return <MessagePart spec={spec} content={content} value={v} onChange={onChange} level={level} />
    case 'intro':
      return <IntroPart content={content} value={v} onChange={onChange} />
    case 'askcards':
      return <CardsPart content={content} value={v} onChange={onChange} topic={content.topic} />
    case 'requests':
      return <RequestsPart content={content} value={v} onChange={onChange} />
    case 'monologue':
      return <MonologuePart content={content} value={v} onChange={onChange} />
    case 'plan':
      return <PlanPart content={content} value={v} onChange={onChange} />
    default:
      return null
  }
}

function PartScore({ spec, content, value }) {
  const g = gradePart(spec, content, value || {})
  return (
    <div className={`feedback ${g.raw === g.max ? 'ok' : g.raw >= g.max * 0.6 ? 'ok' : 'bad'}`}>
      <div className="feedback-head">
        <span>{g.raw === g.max ? '🎉' : '📝'}</span>
        <span>
          {g.raw} / {g.max} richtig
        </span>
      </div>
      {content.audio || content.items?.some((i) => i.audio) ? (
        <div className="feedback-body small">The transcripts are shown under each recording now.</div>
      ) : null}
    </div>
  )
}

/* ── After a section ─────────────────────────────────────────────────────── */

function SectionResult({ sid, sSpec, sContent, result, answers, mode, isLast, onNext }) {
  const [review, setReview] = useState(false)
  return (
    <div className="stack-lg">
      <div className="celebrate stack">
        <ScoreRing value={result.points / SECTION_POINTS} sub={`${result.points} / ${SECTION_POINTS}`} />
        <h2 style={{ marginTop: 'var(--s4)' }}>
          {sSpec.title}: {result.points >= SECTION_POINTS * 0.6 ? 'auf Kurs zum Bestehen ✓' : 'noch nicht ganz'}
        </h2>
        <p className="small dim">
          60% ({(SECTION_POINTS * 0.6).toFixed(0)} points) is the level you need on average to pass.
        </p>
      </div>

      <div className="card stack-sm">
        {sSpec.parts.map((p, i) => {
          const r = result.parts[p.id]
          return (
            <div key={p.id} className="stack-sm">
              <div className="between small">
                <span className="bold">Teil {i + 1}</span>
                <span>
                  {Math.round(r.raw * 10) / 10} / {r.max}
                </span>
              </div>
              <Bar value={r.max ? r.raw / r.max : 0} size="sm" tone={r.raw / r.max >= 0.6 ? 'ok' : 'warn'} />
            </div>
          )
        })}
      </div>

      {sSpec.parts.some((p) => isObjective(p.type)) && (
        <button className="btn btn-block" onClick={() => setReview(!review)}>
          {review ? 'Hide answers' : '🔍 Review answers and transcripts'}
        </button>
      )}

      {review && (
        <div className="stack-lg">
          {sSpec.parts
            .filter((p) => isObjective(p.type))
            .map((p, i) => (
              <div key={p.id} className="stack">
                <div className="sec-title">Teil {sSpec.parts.indexOf(p) + 1}</div>
                <PartView
                  sid={sid}
                  spec={p}
                  content={sContent[p.id]}
                  value={answers[`${sid}.${p.id}`]}
                  onChange={() => {}}
                  reveal
                  mode="practice"
                  plays={{}}
                  onPlay={() => {}}
                />
              </div>
            ))}
        </div>
      )}

      {NEXT_STEP[sid] && result.points < SECTION_POINTS * 0.8 && (
        <div className="card sunk stack-sm">
          <div className="sec-title">To improve {sSpec.title}</div>
          <div className="row-wrap">
            {NEXT_STEP[sid].map((x) => (
              <a key={x.to} className="chip" href={href(x.to)}>
                {x.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <button className="btn btn-primary btn-lg btn-block" onClick={onNext}>
        {isLast ? (mode === 'exam' ? 'See the full result' : 'Done') : 'Next section →'}
      </button>
    </div>
  )
}

/* ── Final report ────────────────────────────────────────────────────────── */

function Report({ fmt, exam, results, minutes }) {
  const total = totalOf(results)
  const v = verdict(total)
  const weakest = fmt.order.reduce((w, s) => (!w || (results[s]?.points ?? 0) < (results[w]?.points ?? 0) ? s : w), null)
  return (
    <div className="stack-lg">
      <div className="celebrate stack">
        <ScoreRing value={total / 100} sub={`${total} / 100`} />
        <h2 style={{ marginTop: 'var(--s4)' }}>{total >= PASS_MARK ? 'Bestanden! 🎉' : 'Noch nicht bestanden'}</h2>
        <p className="small dim">
          {fmt.name} · {exam.title} · {minutes} min · <span style={{ color: `var(--${v.tone})` }}>{v.label}</span> ({v.en})
        </p>
      </div>

      <div className="card stack">
        {fmt.order.map((s) => {
          const r = results[s]
          const sp = fmt.sections[s]
          return (
            <div key={s} className="stack-sm">
              <div className="between small">
                <span className="bold">
                  {sp.icon} {sp.title}
                </span>
                <span>
                  {r?.points ?? 0} / {SECTION_POINTS}
                </span>
              </div>
              <Bar value={(r?.points ?? 0) / SECTION_POINTS} tone={(r?.points ?? 0) >= SECTION_POINTS * 0.6 ? 'ok' : 'warn'} />
            </div>
          )
        })}
        <div className="tiny dim">Pass mark: {PASS_MARK} of 100. Writing and speaking scores are your own assessment.</div>
      </div>

      {weakest && NEXT_STEP[weakest] && (
        <div className="card sunk stack-sm">
          <div className="sec-title">Focus next on {fmt.sections[weakest].title}</div>
          <div className="row-wrap">
            {NEXT_STEP[weakest].map((x) => (
              <a key={x.to} className="chip" href={href(x.to)}>
                {x.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <a className="btn btn-primary btn-lg btn-block" href={href('/exam')}>
        Back to mock exams
      </a>
    </div>
  )
}

/* ── Timer ───────────────────────────────────────────────────────────────── */

function Timer({ start, minutes }) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const left = Math.round(minutes * 60 - (now - start) / 1000)
  const over = left < 0
  const a = Math.abs(left)
  const mm = String(Math.floor(a / 60)).padStart(2, '0')
  const ss = String(a % 60).padStart(2, '0')
  return (
    <Pill tone={over ? 'bad' : left < 120 ? 'warn' : ''} title={over ? 'Time is up — in the real exam you would stop here' : 'Time left'}>
      ⏱ {over ? '+' : ''}
      {mm}:{ss}
    </Pill>
  )
}
