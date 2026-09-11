import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrivacyPage } from './PrivacyPage'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <PrivacyPage />
    </LanguageProvider>
  </StrictMode>,
)
