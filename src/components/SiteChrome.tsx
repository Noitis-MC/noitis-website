import { useEffect, useState, type ReactNode } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { BrandMark } from '../BrandMark'
import { chromeCopy } from '../i18n/chromeCopy'
import { useLanguage } from '../i18n/LanguageContext'
import { readPreference, writePreference } from '../lib/storage'
import { LanguageSwitcher } from './LanguageSwitcher'

export type Theme = 'light' | 'dark'
export type PageKey = 'home' | 'products' | 'how' | 'about' | 'contact' | 'privacy' | 'terms' | 'trademarks' | 'product'

const THEME_KEY = 'noitis-theme'

function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  // The inline script in each HTML page has already applied the saved theme
  // before first paint; read it back so React starts in the same state.
  const applied = document.documentElement.dataset.theme
  if (applied === 'light' || applied === 'dark') return applied
  const saved = readPreference(THEME_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0B1020' : '#F8FBFF')
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light'
      writePreference(THEME_KEY, next)
      return next
    })
  }

  return { theme, toggleTheme }
}

const primaryLinks: { key: PageKey; href: string }[] = [
  { key: 'products', href: './products.html' },
  { key: 'how', href: './how-we-build.html' },
  { key: 'about', href: './about.html' },
  { key: 'contact', href: './contact.html' },
]

const legalLinks: { key: PageKey; href: string }[] = [
  { key: 'privacy', href: './privacy.html' },
  { key: 'terms', href: './terms.html' },
  { key: 'trademarks', href: './trademark.html' },
]

function navLabel(key: PageKey, nav: (typeof chromeCopy)['en']['nav']) {
  return key === 'product' ? nav.products : nav[key]
}

export function SiteHeader({ current, theme, onToggleTheme }: { current: PageKey; theme: Theme; onToggleTheme: () => void }) {
  const { language } = useLanguage()
  const copy = chromeCopy[language]
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const activeKey = current === 'product' ? 'products' : current

  return (
    <>
      <a className="skip-link" href="#main">{copy.skip}</a>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand-link" href="./index.html" aria-label={copy.homeAria} aria-current={current === 'home' ? 'page' : undefined}>
            <BrandMark compact theme={theme} />
          </a>

          <nav id="site-navigation" className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label={copy.navAria}>
            {primaryLinks.map((link) => (
              <a key={link.key} href={link.href} aria-current={activeKey === link.key ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
                {navLabel(link.key, copy.nav)}
              </a>
            ))}
          </nav>

          <div className="site-header__tools">
            <LanguageSwitcher />
            <button
              className="icon-button theme-toggle"
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'light' ? copy.switchToDark : copy.switchToLight}
              title={theme === 'light' ? copy.switchToDark : copy.switchToLight}
            >
              {theme === 'light' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
            </button>
            <button
              className="icon-button menu-button"
              type="button"
              aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export function SiteFooter({ tagline }: { tagline?: string }) {
  const { language } = useLanguage()
  const copy = chromeCopy[language]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          {/* The footer is always midnight, whatever the page theme. */}
          <BrandMark theme="dark" />
          <p>{tagline ?? copy.footerTagline}</p>
        </div>
        <nav className="site-footer__column" aria-label={copy.footerExplore}>
          <p className="site-footer__heading">{copy.footerExplore}</p>
          <a href="./index.html">{copy.nav.home}</a>
          {primaryLinks.map((link) => <a key={link.key} href={link.href}>{navLabel(link.key, copy.nav)}</a>)}
        </nav>
        <nav className="site-footer__column" aria-label={copy.footerLegal}>
          <p className="site-footer__heading">{copy.footerLegal}</p>
          {legalLinks.map((link) => <a key={link.key} href={link.href}>{navLabel(link.key, copy.nav)}</a>)}
        </nav>
      </div>
      <p className="site-footer__legal">© {new Date().getFullYear()} Noitis™. {copy.rights}</p>
    </footer>
  )
}

export function SiteLayout({ current, className, footerTagline, children }: { current: PageKey; className?: string; footerTagline?: string; children: (theme: Theme) => ReactNode }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={['site-shell', className].filter(Boolean).join(' ')}>
      <SiteHeader current={current} theme={theme} onToggleTheme={toggleTheme} />
      {children(theme)}
      <SiteFooter tagline={footerTagline} />
    </div>
  )
}
