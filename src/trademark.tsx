import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TrademarkPage } from './TrademarkPage'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <TrademarkPage />
    </LanguageProvider>
  </StrictMode>,
)
