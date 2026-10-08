import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'
import './styles/layout.css'

import App from './App.jsx'
import { ProgressProvider } from './store/progress.jsx'
import { SyncProvider } from './store/sync.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProgressProvider>
      <SyncProvider>
        <App />
      </SyncProvider>
    </ProgressProvider>
  </StrictMode>,
)
