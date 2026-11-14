import { LegalPageLayout } from './components/LegalPageLayout'
import { useLanguage } from './i18n/LanguageContext'
import { termsContent } from './i18n/legalContent'

export function TermsPage() {
  const { language } = useLanguage()
  return <LegalPageLayout page="terms" content={termsContent[language]} />
}
