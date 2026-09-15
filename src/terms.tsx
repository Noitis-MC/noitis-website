import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TermsPage } from './TermsPage'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <TermsPage />
    </LanguageProvider>
  </StrictMode>,
)
