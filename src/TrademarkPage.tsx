import { LegalPageLayout } from './components/LegalPageLayout'
import { useLanguage } from './i18n/LanguageContext'
import { trademarkContent } from './i18n/legalContent'

export function TrademarkPage() {
  const { language } = useLanguage()
  return <LegalPageLayout page="trademark" mainId="trademark-main" content={trademarkContent[language]} />
}
