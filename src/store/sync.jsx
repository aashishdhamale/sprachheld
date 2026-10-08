/**
 * Keeps this device and the learner's other devices in step.
 *
 * Every sync is pull → merge → push: fetch the copy in the gist, merge it
 * with this device's progress (engine/merge.js), apply the result here, and
 * upload it if the gist was behind. That runs when the app opens, when it
 * comes back to the foreground, shortly after the learner stops practising,
 * and when the app is put away.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useProgress } from './progress.jsx'
import { mergeStates, syncFingerprint } from '../engine/merge.js'
import { connect as ghConnect, pull, push, loadSyncConfig, saveSyncConfig, clearSyncConfig } from '../lib/sync.js'

const IDLE_MS = 15000

const Ctx = createContext(null)

export function SyncProvider({ children }) {
  const { state, dispatch } = useProgress()
  const [config, setConfig] = useState(() => loadSyncConfig())
  const [status, setStatus] = useState({ phase: config ? 'idle' : 'off', error: null })
  const stateRef = useRef(state)
  const configRef = useRef(config)
  const busy = useRef(false)
  const again = useRef(false)
  const synced = useRef(null) // fingerprint of what the gist holds
  stateRef.current = state
  configRef.current = config

  const syncNow = useCallback(
    async (cfgArg) => {
      const cfg = cfgArg || configRef.current
      if (!cfg?.token) return
      if (busy.current) {
        again.current = true
        return
      }
      busy.current = true
      setStatus({ phase: 'syncing', error: null })
      try {
        const { state: remote, missing } = await pull(cfg)
        const local = stateRef.current
        const merged = remote ? mergeStates(local, remote) : local
        const fpMerged = syncFingerprint(merged)
        if (fpMerged !== syncFingerprint(local)) dispatch({ type: 'replace', state: merged })

        let gistId = missing ? null : cfg.gistId
        if (!remote || fpMerged !== syncFingerprint(remote)) gistId = await push({ ...cfg, gistId }, merged)

        const next = { ...cfg, gistId, lastSyncAt: Date.now() }
        saveSyncConfig(next)
        setConfig(next)
        synced.current = fpMerged
        setStatus({ phase: 'ok', error: null })
      } catch (e) {
        setStatus({ phase: 'error', error: e.message || 'Sync failed.' })
      } finally {
        busy.current = false
        if (again.current) {
          again.current = false
          setTimeout(() => syncNow(), 500)
        }
      }
    },
    [dispatch],
  )

  // On open, and whenever the app comes back to the foreground.
  useEffect(() => {
    if (!config?.token) return
    syncNow()
    const onVis = () => {
      if (document.visibilityState === 'visible') syncNow()
      else if (synced.current !== syncFingerprint(stateRef.current)) syncNow()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.token])

  // Shortly after the learner stops changing things.
  useEffect(() => {
    if (!configRef.current?.token || synced.current == null) return
    const t = setTimeout(() => {
      if (synced.current !== syncFingerprint(stateRef.current)) syncNow()
    }, IDLE_MS)
    return () => clearTimeout(t)
  }, [state, syncNow])

  const connect = useCallback(
    async (token) => {
      setStatus({ phase: 'syncing', error: null })
      try {
        const cfg = await ghConnect(token)
        saveSyncConfig(cfg)
        setConfig(cfg)
        configRef.current = cfg
        await syncNow(cfg)
        return true
      } catch (e) {
        setStatus({ phase: 'error', error: e.message })
        return false
      }
    },
    [syncNow],
  )

  const disconnect = useCallback(() => {
    clearSyncConfig()
    setConfig(null)
    synced.current = null
    setStatus({ phase: 'off', error: null })
  }, [])

  const value = useMemo(() => ({ config, status, syncNow: () => syncNow(), connect, disconnect }), [config, status, syncNow, connect, disconnect])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useSync() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useSync must be used inside <SyncProvider>')
  return v
}
