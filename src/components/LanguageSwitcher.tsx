import { chromeCopy } from '../i18n/chromeCopy'
import { useLanguage, type NoitisLanguage } from '../i18n/LanguageContext'

const options: { value: NoitisLanguage; short: string; name: string }[] = [
  { value: 'en', short: 'EN', name: 'English' },
  { value: 'el', short: 'ΕΛ', name: 'Ελληνικά' },
]

// Two visible choices are faster to use than a dropdown with two items.
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-switcher" role="group" aria-label={chromeCopy[language].languageLabel}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          lang={option.value}
          aria-pressed={language === option.value}
          aria-label={option.name}
          title={option.name}
          onClick={() => setLanguage(option.value)}
        >
          {option.short}
        </button>
      ))}
    </div>
  )
}
