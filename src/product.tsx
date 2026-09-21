import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductLandingPage } from './ProductLandingPage'
import { LanguageProvider } from './i18n/LanguageContext'
import type { ProductSlug } from './productCatalog'
import './styles.css'

const slug = document.body.dataset.product as ProductSlug | undefined
if (!slug) throw new Error('Product landing page is missing its product identifier.')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ProductLandingPage slug={slug} />
    </LanguageProvider>
  </StrictMode>,
)
