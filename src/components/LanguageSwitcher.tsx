import { useLanguage } from '../i18n/LanguageContext'

interface LanguageSwitcherProps {
  compact?: boolean
  className?: string
}

export function LanguageSwitcher({ compact = false, className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()
  const label = language === 'el' ? 'Γλώσσα' : 'Language'

  return (
    <label className={`language-switcher ${compact ? 'language-switcher--compact' : ''} ${className}`.trim()}>
      {!compact && <span>{label}</span>}
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as 'en' | 'el')}
        aria-label={label}
      >
        <option value="en">EN · English</option>
        <option value="el">EL · Ελληνικά</option>
      </select>
    </label>
  )
}
