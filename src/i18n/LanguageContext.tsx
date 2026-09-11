import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type NoitisLanguage = 'en' | 'el'

const STORAGE_KEY = 'noitis.language'

interface LanguageContextValue {
  language: NoitisLanguage
  setLanguage: (language: NoitisLanguage) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function initialLanguage(): NoitisLanguage {
  if (typeof window === 'undefined') return 'en'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'el') return saved

  return window.navigator.language.toLowerCase().startsWith('el') ? 'el' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<NoitisLanguage>(initialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
