import { useMemo } from 'react'
import { useProgress } from '../store/progress.jsx'
import { href } from '../lib/router.js'
import { levels, vocab, CONTENT_STATS } from '../content/index.js'
import { overview } from '../engine/planner.js'
import { skillReport, weakTags, strongTags, recurringMistakes, ratingOf } from '../engine/adaptive.js'
import { summarize } from '../engine/srs.js'
import { lastNDays, todayKey } from '../lib/storage.js'
import { Card, Bar, LevelBar, Pill, Section } from '../ui/primitives.jsx'

export default function Progress() {
  const { state } = useProgress()
  const ov = overview(state)
  const skills = skillReport(state.skills).filter((s) => s.total > 0)
  const weak = weakTags(state.tagStats, { limit: 6 })
  const strong = strongTags(state.tagStats, { limit: 4 })
  const mistakes = recurringMistakes(state.mistakes, { limit: 5 })
  const vSum = summarize(state.srs, undefined, 'v')

  const totals = useMemo(() => {
    const days = Object.values(state.days || {})
    return {
      answers: days.reduce((n, d) => n + (d.answers || 0), 0),
      correct: days.reduce((n, d) => n + (d.correct || 0), 0),
      minutes: days.reduce((n, d) => n + (d.minutes || 0), 0),
      activeDays: days.filter((d) => (d.answers || 0) > 0 || (d.xp || 0) > 0).length,
    }
  }, [state.days])

  const overall = totals.answers ? totals.correct / totals.answers : null

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">📈 Progress</h1>
        <p className="page-sub">
          {totals.activeDays} active day{totals.activeDays === 1 ? '' : 's'} ·{' '}
          {totals.answers} question{totals.answers === 1 ? '' : 's'} answered
          {overall != null && ` · ${Math.round(overall * 100)}% correct overall`}
        </p>
      </header>

      <div className="grid grid-3">
        <StatCard n={state.xp} label="XP" icon="⚡" />
        <StatCard n={state.streak.count} label={`day streak · best ${state.streak.best}`} icon="🔥" />
        <StatCard n={`${ov.lessonsDone}/${ov.lessonsTotal}`} label="lessons" icon="📘" />
      </div>

      <Section title="Levels">
        <Card className="stack">
          {ov.levels.map((l) => (
            <LevelBar key={l.level} level={l.level} pct={l.pct} done={l.done} total={l.total} />
          ))}
          <hr />
          {levels.map((lv) => {
            const row = ov.levels.find((x) => x.level === lv.cefr)
            const statusText =
              row.pct >= 1 ? 'Completed' : row.done > 0 ? 'In progress' : 'Not started'
            return (
              <div key={lv.id} className="between small">
                <span className="row" style={{ gap: 8 }}>
                  <span>{lv.icon}</span>
                  <span className="bold">
                    {lv.cefr} — {lv.title}
                  </span>
                </span>
                <Pill tone={row.pct >= 1 ? 'ok' : row.done > 0 ? 'accent' : ''}>{statusText}</Pill>
              </div>
            )
          })}
        </Card>
      </Section>

      <Section title="Skills">
        {skills.length === 0 ? (
          <Card className="sunk flat">
            <p className="small muted">
              Answer a few questions and your skill breakdown appears here.
            </p>
          </Card>
        ) : (
          <Card className="stack-sm">
            {skills
              .sort((a, b) => (a.acc ?? 1) - (b.acc ?? 1))
              .map((s) => {
                const r = ratingOf(s.acc)
                return (
                  <div key={s.skill} className="meter-row">
                    <span className="meter-label">{s.label}</span>
                    <Bar
                      value={s.acc ?? 0}
                      size="sm"
                      tone={r.tone === 'ok' ? 'ok' : r.tone === 'warn' ? 'warn' : 'bad'}
                    />
                    <span className="meter-val">{Math.round((s.acc ?? 0) * 100)}%</span>
                  </div>
                )
              })}
            <p className="tiny dim" style={{ marginTop: 6 }}>
              Based on every question you have answered in that skill.
            </p>
          </Card>
        )}
      </Section>

      <Section title="Weak areas">
        {weak.length === 0 ? (
          <Card className="sunk flat">
            <p className="small muted">
              Nothing is clearly weak yet — or you are doing very well. Keep going and this list
              will sharpen up.
            </p>
          </Card>
        ) : (
          <div className="stack-sm">
            {weak.map((t) => (
              <a
                key={t.tag}
                href={href(`/drill/tag/${t.tag}`)}
                className="card card-link pad-sm"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="between">
                  <span className="row" style={{ gap: 8 }}>
                    <span>{t.acc < 0.65 ? '🔴' : '🟡'}</span>
                    <span className="bold small">{t.label}</span>
                  </span>
                  <span className="row" style={{ gap: 10 }}>
                    <span className="small bold">{Math.round(t.acc * 100)}%</span>
                    <span className="btn btn-sm btn-soft">Practise</span>
                  </span>
                </div>
                <div style={{ marginTop: 6 }}>
                  <Bar value={t.acc} size="sm" tone={t.acc < 0.65 ? 'bad' : 'warn'} />
                </div>
                <div className="tiny dim" style={{ marginTop: 4 }}>
                  {t.total} answered
                </div>
              </a>
            ))}
          </div>
        )}
      </Section>

      {strong.length > 0 && (
        <Section title="Solid ground">
          <Card className="row-wrap">
            {strong.map((t) => (
              <Pill key={t.tag} tone="ok">
                🟢 {t.label} · {Math.round(t.acc * 100)}%
              </Pill>
            ))}
          </Card>
        </Section>
      )}

      {mistakes.length > 0 && (
        <Section title="Mistakes you keep making">
          <Card className="stack">
            {mistakes.map((m) => (
              <div key={m.tag} className="stack-sm">
                <div className="between">
                  <span className="bold small">{m.label}</span>
                  <Pill tone="warn">{m.count}×</Pill>
                </div>
                {m.examples.slice(0, 2).map((ex, i) => (
                  <div key={i} className="correction small">
                    <div className="was">{ex.given}</div>
                    <div className="is">{ex.expected}</div>
                  </div>
                ))}
              </div>
            ))}
          </Card>
        </Section>
      )}

      <Section title="Vocabulary">
        <Card className="stack-sm">
          <div className="meter-row">
            <span className="meter-label">Known solidly</span>
            <Bar value={vocab.length ? vSum.mature / vocab.length : 0} tone="ok" size="sm" />
            <span className="meter-val">{vSum.mature}</span>
          </div>
          <div className="meter-row">
            <span className="meter-label">Learning</span>
            <Bar value={vocab.length ? (vSum.learning + vSum.young) / vocab.length : 0} size="sm" />
            <span className="meter-val">{vSum.learning + vSum.young}</span>
          </div>
          <div className="meter-row">
            <span className="meter-label">Untouched</span>
            <Bar value={vocab.length ? (vocab.length - vSum.total + vSum.neu) / vocab.length : 0} size="sm" />
            <span className="meter-val">{vocab.length - vSum.total + vSum.neu}</span>
          </div>
          <a className="btn btn-sm btn-soft" href={href('/vocab')} style={{ marginTop: 8 }}>
            Browse all {vocab.length} words →
          </a>
        </Card>
      </Section>

      <Section title="Last 14 days">
        <Card>
          <Heatmap days={state.days} />
        </Card>
      </Section>

      <Section title="What is installed">
        <Card className="stack-sm small">
          {[
            ['Lessons', CONTENT_STATS.lessons],
            ['Vocabulary', CONTENT_STATS.vocab],
            ['Grammar topics', CONTENT_STATS.grammar],
            ['Exercises', CONTENT_STATS.exercises],
            ['Conversations', CONTENT_STATS.conversations],
            ['Reading texts', CONTENT_STATS.readings],
            ['Listening scenes', CONTENT_STATS.listenings],
          ].map(([k, v]) => (
            <div key={k} className="between">
              <span className="dim">{k}</span>
              <strong>{v}</strong>
            </div>
          ))}
        </Card>
      </Section>
    </div>
  )
}

function StatCard({ n, label, icon }) {
  return (
    <Card className="pad-sm" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '1.2rem' }}>{icon}</div>
      <div style={{ fontSize: '1.4rem', fontWeight: 750, letterSpacing: '-0.02em' }}>{n}</div>
      <div className="tiny dim">{label}</div>
    </Card>
  )
}

function Heatmap({ days }) {
  const keys = lastNDays(14)
  const today = todayKey()
  const max = Math.max(1, ...keys.map((k) => days?.[k]?.xp || 0))
  return (
    <div className="row" style={{ gap: 4, alignItems: 'flex-end', height: 70 }}>
      {keys.map((k) => {
        const xp = days?.[k]?.xp || 0
        const h = xp ? Math.max(8, (xp / max) * 62) : 4
        return (
          <div key={k} className="grow" style={{ textAlign: 'center' }} title={`${k}: ${xp} XP`}>
            <div
              style={{
                height: h,
                borderRadius: 4,
                background: xp ? 'var(--accent)' : 'var(--surface-3)',
                border: k === today ? '1.5px solid var(--ok)' : 'none',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
