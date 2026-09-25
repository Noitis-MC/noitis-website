import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CompanyPage } from './CompanyPage'
import { LanguageProvider } from './i18n/LanguageContext'
import type { CompanyPageSlug } from './companyPageContent'
import './styles.css'

const pageSlug = document.body.dataset.companyPage as CompanyPageSlug | undefined
if (!pageSlug) throw new Error('Company page is missing its page identifier.')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <CompanyPage pageSlug={pageSlug} />
    </LanguageProvider>
  </StrictMode>,
)
