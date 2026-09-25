import { useEffect, useState } from 'react'
import { FiArrowLeft, FiCheckCircle, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { BrandMark } from './BrandMark'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { useLanguage } from './i18n/LanguageContext'
import { landingUiCopy, productLandingContent } from './productLandingContent'
import { products, type ProductSlug } from './productCatalog'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem('noitis-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ProductLandingPage({ slug }: { slug: ProductSlug }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language } = useLanguage()
  const ui = landingUiCopy[language]
  const content = productLandingContent[slug][language]
  const product = products.find((entry) => entry.slug === slug)

  if (!product) throw new Error(`Unknown product landing page: ${slug}`)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('noitis-theme', theme)
  }, [theme])

  useEffect(() => {
    document.title = `${product.name} — Noitis`
  }, [product.name, language])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const productLogo = theme === 'dark' ? product.logoDark : product.logoLight

  return (
    <div className="site-shell product-landing-shell">
      <a className="skip-link" href="#main">{language === 'el' ? 'Μετάβαση στο κύριο περιεχόμενο' : 'Skip to main content'}</a>

      <header className="site-header">
        <a className="brand-link" href="./index.html" aria-label="Noitis" onClick={closeMenu}><BrandMark compact theme={theme} /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? ui.menuCloseAria : ui.menuOpenAria} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <nav id="site-navigation" className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label={ui.mainNavAria}>
          <a href="./products.html" onClick={closeMenu}>{ui.products}</a>
          <a href="./how-we-build.html" onClick={closeMenu}>{ui.how}</a>
          <a href="./about.html" onClick={closeMenu}>{ui.about}</a>
          <a href="./contact.html" onClick={closeMenu}>{ui.contact}</a>
          <a href="./privacy.html" onClick={closeMenu}>{ui.privacy}</a>
          <LanguageSwitcher compact />
          <button className="theme-button" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? ui.switchToDark : ui.switchToLight}>
            {theme === 'light' ? ui.dark : ui.light}
          </button>
        </nav>
      </header>

      <main id="main">
        <section className="product-landing-hero">
          <div className="product-landing-hero__copy">
            <a className="product-landing__back" href="./products.html"><FiArrowLeft aria-hidden="true" /> {ui.back}</a>
            <p className="eyebrow">{content.category}</p>
            <h1>{product.name}</h1>
            <p className="product-landing-hero__headline">{content.headline}</p>
            <p className="product-landing-hero__intro">{content.intro}</p>
            <span className="product-landing__status">{ui.status}</span>
          </div>
          <div className="product-landing-hero__visual" role="img" aria-label={`${product.name} logo`}>
            <img className="theme-logo" src={productLogo} alt="" decoding="async" fetchPriority="high" />
          </div>
        </section>

        <section className="section product-landing-problem product-landing-problem--featured" aria-labelledby="problem-title">
          <div className="product-landing-section-heading">
            <p className="eyebrow">{ui.problemEyebrow}</p>
            <h2 id="problem-title">{ui.problemTitle}</h2>
          </div>
          <div className="product-landing-problem__copy">
            {content.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="section" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <div><p className="eyebrow">{ui.capabilityEyebrow}</p><h2 id="capabilities-title">{ui.capabilityTitle}</h2></div>
          </div>
          <div className="product-landing-capabilities swipe-track" role="region" aria-label={ui.capabilityTitle} tabIndex={0}>
            {content.capabilities.map((capability) => (
              <article className="product-landing-capability" key={capability.title}>
                <FiCheckCircle aria-hidden="true" />
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section product-landing-value" aria-labelledby="value-title">
          <p className="eyebrow">{ui.valueEyebrow}</p>
          <h2 id="value-title">{ui.valueTitle}</h2>
          <p>{content.value}</p>
        </section>

        <div className="product-landing-context-grid product-landing-context-grid--secondary">
          <section className="section product-landing-access" aria-labelledby="access-title">
            <div><p className="eyebrow">{ui.accessEyebrow}</p><h2 id="access-title">{ui.accessTitle}</h2></div>
            <p>{ui.accessText}</p>
          </section>
          <section className="section product-landing-boundary" aria-labelledby="boundary-title">
            <div><p className="eyebrow">{ui.boundaryEyebrow}</p><h2 id="boundary-title">{ui.boundaryTitle}</h2></div>
            <p>{content.boundary}</p>
          </section>
        </div>

        <section className="section product-landing-cta" aria-labelledby="contact-title">
          <p className="eyebrow">{ui.contactEyebrow}</p>
          <h2 id="contact-title">{ui.contactTitle}</h2>
          <p>{ui.valueText}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="mailto:chouliarasmatthaios@gmail.com">{ui.email} <FiMail aria-hidden="true" /></a>
            <a className="button button--secondary" href="./products.html">{ui.products}</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand"><BrandMark theme={theme} /><p>{ui.footerTagline}</p></div>
        <div className="site-footer__links">
          <a href="./products.html">{ui.products}</a>
          <a href="./how-we-build.html">{ui.how}</a>
          <a href="./about.html">{ui.about}</a>
          <a href="./contact.html">{ui.contact}</a>
          <a href="./privacy.html">{ui.privacy}</a>
          <a href="./terms.html">{language === 'el' ? 'Όροι χρήσης' : 'Terms'}</a>
          <a href="./trademark.html">{language === 'el' ? 'Εμπορικά σήματα' : 'Trademarks'}</a>
        </div>
        <p className="site-footer__legal">© {new Date().getFullYear()} Noitis™. {ui.rights}</p>
      </footer>
    </div>
  )
}
