import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/i18n.js'
import { MatrixBackground } from './components/MatrixBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <MatrixBackground />
      <App />
    </LanguageProvider>
  </StrictMode>,
)
