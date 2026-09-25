import { useEffect, useState } from 'react'
import { FiArrowRight, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { BrandMark } from './BrandMark'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { useLanguage } from './i18n/LanguageContext'
import { companyPageContent, companyPageUi, directoryProductCopy, type CompanyPageSlug } from './companyPageContent'
import { products } from './productCatalog'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem('noitis-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function CompanyPage({ pageSlug }: { pageSlug: CompanyPageSlug }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language } = useLanguage()
  const ui = companyPageUi[language]
  const copy = companyPageContent[pageSlug][language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('noitis-theme', theme)
  }, [theme])

  useEffect(() => {
    document.title = `${copy.title} — Noitis`
  }, [copy.title])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`site-shell company-page-shell company-page-shell--${pageSlug}`}>
      <a className="skip-link" href="#main">{ui.skip}</a>
      <header className="site-header">
        <a className="brand-link" href="./index.html" aria-label="Noitis" onClick={closeMenu}><BrandMark compact theme={theme} /></a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <nav id="site-navigation" className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label={ui.navAria}>
          <a href="./products.html" onClick={closeMenu}>{ui.nav.products}</a>
          <a href="./how-we-build.html" onClick={closeMenu}>{ui.nav.how}</a>
          <a href="./about.html" onClick={closeMenu}>{ui.nav.about}</a>
          <a href="./contact.html" onClick={closeMenu}>{ui.nav.contact}</a>
          <a href="./privacy.html" onClick={closeMenu}>{ui.nav.privacy}</a>
          <LanguageSwitcher compact />
          <button className="theme-button" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? ui.switchToDark : ui.switchToLight}>
            {theme === 'light' ? ui.dark : ui.light}
          </button>
        </nav>
      </header>

      <main id="main" className={`company-page company-page--${pageSlug}`}>
        <section className="company-hero">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="company-hero__lead">{copy.intro}</p>
        </section>

        {pageSlug === 'products' ? (
          <section className="company-products" aria-label={copy.title}>
            {products.map((product) => {
              const productCopy = directoryProductCopy[product.slug][language]
              const logo = theme === 'dark' ? product.logoDark : product.logoLight
              return (
                <article className="company-product" key={product.slug}>
                  <div className="company-product__top">
                    <div className="company-product__logo"><img className="theme-logo" src={logo} alt="" loading="lazy" decoding="async" /></div>
                    <div><p className="product-card__eyebrow">{productCopy.category}</p><h2>{product.name}</h2></div>
                  </div>
                  <p className="company-product__intro">{productCopy.intro}</p>
                  <div className="company-product__problem">
                    <strong>{productCopy.problemLabel}</strong>
                    <p>{productCopy.problem}</p>
                  </div>
                  <a className="text-link" href={product.href}>{productCopy.cta} <FiArrowRight aria-hidden="true" /></a>
                </article>
              )
            })}
          </section>
        ) : pageSlug === 'contact' ? (
          <section className="company-contact-card">
            <p>{language === 'el' ? 'Δεν χρειάζεται επίσημη πρόταση για να ξεκινήσει μία χρήσιμη συζήτηση.' : 'You do not need a formal proposal to start a useful conversation.'}</p>
            <a className="button button--primary" href="mailto:chouliarasmatthaios@gmail.com">{ui.email} <FiMail aria-hidden="true" /></a>
          </section>
        ) : (
          <div className="company-section-list">
            {copy.sections.map((section, index) => (
              <section className="company-page-section" key={section.title}>
                <div className="company-page-section__index">0{index + 1}</div>
                <div>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.questions ? (
                    <ul className="company-question-list">
                      {section.questions.map((question) => <li key={question}>{question}</li>)}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand"><BrandMark theme={theme} /><p>{ui.footer}</p></div>
        <div className="site-footer__links">
          <a href="./products.html">{ui.nav.products}</a>
          <a href="./how-we-build.html">{ui.nav.how}</a>
          <a href="./about.html">{ui.nav.about}</a>
          <a href="./contact.html">{ui.nav.contact}</a>
          <a href="./privacy.html">{ui.nav.privacy}</a>
          <a href="./terms.html">{ui.nav.terms}</a>
          <a href="./trademark.html">{ui.nav.trademarks}</a>
        </div>
        <p className="site-footer__legal">© {new Date().getFullYear()} Noitis™. {ui.rights}</p>
      </footer>
    </div>
  )
}
