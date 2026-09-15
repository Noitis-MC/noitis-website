import { LegalPageLayout } from './components/LegalPageLayout'
import { useLanguage } from './i18n/LanguageContext'
import { privacyContent } from './i18n/legalContent'

export function PrivacyPage() {
  const { language } = useLanguage()
  return <LegalPageLayout page="privacy" mainId="privacy-main" content={privacyContent[language]} />
}
