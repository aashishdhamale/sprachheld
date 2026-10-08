import { useState } from 'react'
import { useProgress } from '../store/progress.jsx'
import { MODELS, testKey, aiReady } from '../engine/ai.js'
import { hasGermanVoice, germanVoiceName, ttsSupported, speak, sttSupported } from '../lib/speech.js'
import { Card, Section, ToggleRow, Modal, Pill } from '../ui/primitives.jsx'

export default function Settings() {
  const { state, dispatch } = useProgress()
  const s = state.settings
  const set = (patch) => dispatch({ type: 'settings', patch })

  const [keyDraft, setKeyDraft] = useState(s.aiKey || '')
  const [testing, setTesting] = useState(null)
  const [confirmReset, setConfirmReset] = useState(false)
  const [importError, setImportError] = useState(null)
  const [importedAt, setImportedAt] = useState(null)

  const doTest = async () => {
    setTesting('running')
    try {
      await testKey({ ...s, aiKey: keyDraft, aiEnabled: true })
      setTesting('ok')
    } catch (e) {
      setTesting(e.message)
    }
  }

  const exportData = async () => {
    // Never write the API key into a file the user might share or sync.
    const { aiKey, ...safeSettings } = state.settings
    const payload = { ...state, settings: { ...safeSettings, aiKey: '' } }
    const json = JSON.stringify(payload, null, 2)
    const filename = `sprachheld-progress-${new Date().toISOString().slice(0, 10)}.json`

    // A plain <a download> link is inert inside a published Artifact — offer
    // the file through the platform's downloads capability there instead.
    // Outside an artifact (running locally, or hosted normally) window.claude
    // simply does not exist, so this falls straight through to the browser
    // download below.
    if (typeof window.claude?.use === 'function') {
      try {
        const downloads = await window.claude.use('downloads')
        if (downloads) {
          await downloads.save({ filename, data: json })
          return
        }
      } catch {
        // Declined, rate-limited, or unavailable — fall back to a normal
        // browser download rather than leaving the click silently dead.
      }
    }

    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const importData = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImportError(null)
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result))
        dispatch({ type: 'import', state: data })
        setImportedAt(Date.now())
      } catch {
        setImportError('That file could not be read as a Sprachheld backup.')
      }
    }
    reader.onerror = () => setImportError('That file could not be read.')
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div className="stack-lg">
      <header className="page-head">
        <h1 className="page-title">⚙ Settings</h1>
        <p className="page-sub">
          Everything is stored in this browser only. No account, no server, nothing leaves this
          device — unless you switch on the AI tutor below.
        </p>
      </header>

      <Section title="You">
        <Card className="stack">
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="input"
              value={state.profile.name}
              onChange={(e) => dispatch({ type: 'profile', patch: { name: e.target.value } })}
              placeholder="Your first name"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="goal">
              Daily goal
            </label>
            <select
              id="goal"
              className="select"
              value={state.profile.dailyGoalMin}
              onChange={(e) =>
                dispatch({ type: 'profile', patch: { dailyGoalMin: Number(e.target.value) } })
              }
            >
              {[5, 10, 15, 20, 25, 30, 45].map((m) => (
                <option key={m} value={m}>
                  {m} minutes a day
                </option>
              ))}
            </select>
          </div>
        </Card>
      </Section>

      <Section title="Appearance">
        <Card className="stack">
          <div className="field">
            <span className="label">Theme</span>
            <div className="row-wrap">
              {[
                { k: 'auto', l: 'Auto' },
                { k: 'light', l: 'Light' },
                { k: 'dark', l: 'Dark' },
              ].map((t) => (
                <button
                  key={t.k}
                  className={`chip ${s.theme === t.k ? 'on' : ''}`}
                  aria-pressed={s.theme === t.k}
                  onClick={() => set({ theme: t.k })}
                >
                  {t.l}
                </button>
              ))}
            </div>
          </div>
          <ToggleRow
            label="Show English translations"
            hint="Turn this off once German alone starts to make sense — it speeds up learning a lot."
            value={s.showTranslation}
            onChange={(v) => set({ showTranslation: v })}
          />
        </Card>
      </Section>

      <Section title="Audio">
        <Card className="stack">
          {!ttsSupported() ? (
            <div className="note warn small">
              This browser has no speech synthesis, so audio is unavailable.
            </div>
          ) : !hasGermanVoice() ? (
            <div className="note warn small">
              No German voice is installed. Playback will use your default voice and sound wrong.
              On Windows, add <strong>Deutsch</strong> under Settings → Time &amp; Language, including
              the speech pack, then reload this page.
            </div>
          ) : (
            <div className="note tip small">
              Using <strong>{germanVoiceName()}</strong>.{' '}
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => speak('Guten Tag! Ich spreche Deutsch.', { rate: s.rate })}
              >
                ▶ Test
              </button>
            </div>
          )}

          <ToggleRow
            label="Speak automatically"
            hint="Read new German out loud without being asked."
            value={s.autoSpeak}
            onChange={(v) => set({ autoSpeak: v })}
          />

          <div className="field">
            <label className="label" htmlFor="rate">
              Normal speed — {s.rate.toFixed(2)}×
            </label>
            <input
              id="rate"
              type="range"
              min="0.5"
              max="1.3"
              step="0.05"
              value={s.rate}
              onChange={(e) => set({ rate: Number(e.target.value) })}
              style={{ width: '100%' }}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="slow">
              Slow speed — {s.slowRate.toFixed(2)}×
            </label>
            <input
              id="slow"
              type="range"
              min="0.3"
              max="0.9"
              step="0.05"
              value={s.slowRate}
              onChange={(e) => set({ slowRate: Number(e.target.value) })}
              style={{ width: '100%' }}
            />
          </div>

          <div className="tiny dim">
            Speech recognition for the speaking exercises: {sttSupported() ? 'available' : 'not available in this browser'}.
          </div>
        </Card>
      </Section>

      <Section title="AI tutor (optional)">
        <Card className="stack">
          <p className="small muted">
            The whole app works without this. Switching it on replaces the built-in conversation
            engine with a live tutor and unlocks free conversation.
          </p>

          <div className="note warn small">
            Your key is stored in this browser's local storage and sent directly to
            api.anthropic.com from this page. That is fine for a personal tool on your own
            machine — do not do it on a shared or public computer.
          </div>

          <ToggleRow
            label="Use the AI tutor"
            hint={aiReady(s) ? 'Active in conversations' : 'Needs a valid key below'}
            value={s.aiEnabled}
            onChange={(v) => set({ aiEnabled: v })}
          />

          <div className="field">
            <label className="label" htmlFor="key">
              Anthropic API key
            </label>
            <input
              id="key"
              className="input"
              type="password"
              value={keyDraft}
              onChange={(e) => {
                setKeyDraft(e.target.value)
                setTesting(null)
              }}
              placeholder="sk-ant-…"
              autoComplete="off"
            />
            <div className="row" style={{ marginTop: 8 }}>
              <button
                className="btn btn-sm"
                onClick={() => {
                  set({ aiKey: keyDraft })
                  setTesting(null)
                }}
                disabled={keyDraft === s.aiKey}
              >
                Save key
              </button>
              <button
                className="btn btn-sm btn-soft"
                onClick={doTest}
                disabled={!keyDraft.startsWith('sk-') || testing === 'running'}
              >
                {testing === 'running' ? 'Testing…' : 'Test'}
              </button>
              {testing === 'ok' && <Pill tone="ok">✓ works</Pill>}
              {testing && testing !== 'ok' && testing !== 'running' && (
                <span className="tiny" style={{ color: 'var(--bad)' }}>
                  {testing}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="model">
              Model
            </label>
            <select
              id="model"
              className="select"
              value={s.aiModel}
              onChange={(e) => set({ aiModel: e.target.value })}
            >
              {MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
        </Card>
      </Section>

      <Section title="Your data">
        <Card className="stack">
          <div className="row-wrap">
            <button className="btn btn-sm" onClick={exportData}>
              ⬇ Export progress
            </button>
            <label className="btn btn-sm" style={{ cursor: 'pointer' }}>
              ⬆ Import
              <input type="file" accept="application/json" onChange={importData} style={{ display: 'none' }} />
            </label>
            <button className="btn btn-sm btn-danger" onClick={() => setConfirmReset(true)}>
              Reset everything
            </button>
            {importedAt && <Pill tone="ok">✓ imported</Pill>}
          </div>
          {importError && <div className="note warn small">{importError}</div>}
          <p className="tiny dim">
            Export gives you a JSON file with all your progress, streaks and scheduling — useful
            before clearing browser data or moving to another machine. Your API key is left out
            of the file, so you can share or sync it safely.
          </p>
        </Card>
      </Section>

      <Modal
        open={confirmReset}
        onClose={() => setConfirmReset(false)}
        title="Reset everything?"
        footer={
          <>
            <button className="btn" onClick={() => setConfirmReset(false)}>
              Cancel
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch({ type: 'reset' })
                setConfirmReset(false)
                window.location.hash = '#/'
              }}
            >
              Yes, delete it all
            </button>
          </>
        }
      >
        <p className="muted">
          This deletes your streak, XP, every lesson score and the whole spaced-repetition
          schedule. It cannot be undone. Export first if you are not sure.
        </p>
      </Modal>
    </div>
  )
}
