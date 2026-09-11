import { useEffect, useState } from 'react'
import { FiArrowRight, FiCheckCircle, FiCompass, FiExternalLink, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { BrandMark } from './BrandMark'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { useLanguage } from './i18n/LanguageContext'
import { replaceName, siteContent } from './i18n/siteContent'
import { greekSiteContent } from './i18n/siteContentGreek'
import { products } from './productCatalog'

import noitisLogoLight from '../media/Noitis Logo - Light.png'
import noitisLogoDark from '../media/Noitis Logo - Dark.png'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem('noitis-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language } = useLanguage()
  const copy = language === 'el' ? greekSiteContent : siteContent.en

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('noitis-theme', theme)
  }, [theme])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const heroLogo = theme === 'dark' ? noitisLogoDark : noitisLogoLight

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">{copy.skip}</a>

      <header className="site-header">
        <a className="brand-link" href="#top" aria-label={copy.homeAria} onClick={closeMenu}><BrandMark compact theme={theme} /></a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? copy.menuCloseAria : copy.menuOpenAria}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <nav id="site-navigation" className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label={copy.mainNavAria}>
          <a href="#products" onClick={closeMenu}>{copy.nav.products}</a>
          <a href="#principles" onClick={closeMenu}>{copy.nav.principles}</a>
          <a href="#about" onClick={closeMenu}>{copy.nav.about}</a>
          <a href="#contact" onClick={closeMenu}>{copy.nav.contact}</a>
          <a href="./privacy.html" onClick={closeMenu}>{copy.nav.privacy}</a>
          <LanguageSwitcher compact />
          <button
            className="theme-button"
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={theme === 'light' ? copy.theme.switchToDark : copy.theme.switchToLight}
          >
            {theme === 'light' ? copy.theme.dark : copy.theme.light}
          </button>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__company-logo">
              <img className="theme-logo" src={heroLogo} alt="" decoding="async" fetchPriority="high" />
            </div>
          </div>
          <div className="hero__copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1>{copy.hero.title}</h1>
            <p className="hero__lead">{copy.hero.lead}</p>
            <p className="hero__support">{copy.hero.support}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#products">{copy.hero.discover} <FiArrowRight aria-hidden="true" /></a>
              <a className="button button--secondary" href="#about">{copy.hero.meet}</a>
            </div>
          </div>
        </section>

        <section className="section section--statement" aria-labelledby="purpose-title">
          <p className="eyebrow">{copy.purpose.eyebrow}</p>
          <h2 id="purpose-title">{copy.purpose.title}</h2>
          <p className="section__lead">{copy.purpose.text}</p>
        </section>

        <section className="section" id="products" aria-labelledby="products-title">
          <div className="section-heading">
            <div><p className="eyebrow">{copy.products.eyebrow}</p><h2 id="products-title">{copy.products.title}</h2></div>
            <p>{copy.products.intro}</p>
          </div>
          <div className="product-grid">
            {products.map((product) => {
              const productLogo = theme === 'dark' ? product.logoDark : product.logoLight
              const productCopy = copy.productCopy[product.name] ?? product

              return (
                <article className="product-card" key={product.name}>
                  <div className="product-card__logo" role="img" aria-label={`${product.name} logo`}>
                    <img className="theme-logo" src={productLogo} alt="" loading="lazy" decoding="async" />
                  </div>
                  <p className="product-card__eyebrow">{productCopy.category}</p>
                  <h3>{product.name}</h3>
                  <p>{productCopy.description}</p>
                  <span className="product-card__status">{productCopy.status}</span>
                  <p style={{ fontSize: '.88rem', marginTop: '14px' }}>{productCopy.note}</p>
                  <div className="hero__actions" style={{ marginTop: '22px' }}>
                    {product.href ? (
                      <a className="button button--secondary" href={product.href} target="_blank" rel="noreferrer" aria-label={replaceName(copy.products.openAria, product.name)}>
                        {copy.products.open} <FiExternalLink aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="product-card__status">{copy.products.unavailable}</span>
                    )}
                    {product.pricingHref ? (
                      <a className="button button--secondary" href={product.pricingHref} target="_blank" rel="noreferrer" aria-label={replaceName(copy.products.pricingAria, product.name)}>
                        {copy.products.pricing} <FiExternalLink aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section" id="principles" aria-labelledby="principles-title">
          <div className="section-heading section-heading--stacked"><p className="eyebrow">{copy.principles.eyebrow}</p><h2 id="principles-title">{copy.principles.title}</h2></div>
          <div className="principle-grid">
            {copy.principles.items.map((principle, index) => (
              <article className="principle-card" key={principle.title}>
                <span className="principle-card__number">0{index + 1}</span><FiCheckCircle aria-hidden="true" /><h3>{principle.title}</h3><p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section origin" id="about" aria-labelledby="about-title">
          <div className="origin__intro"><p className="eyebrow">{copy.about.eyebrow}</p><h2 id="about-title">{copy.about.title}</h2></div>
          <div className="origin__copy">
            {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <div><p className="eyebrow">{copy.contact.eyebrow}</p><h2 id="contact-title">{copy.contact.title}</h2></div>
            <div>
              <p>{copy.contact.text}</p>
              <div className="hero__actions" style={{ marginTop: '22px' }}>
                <a className="button button--primary" href="mailto:chouliarasmatthaios@gmail.com">{copy.contact.email} <FiMail aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="future" aria-labelledby="future-title">
          <div className="future__icon" aria-hidden="true"><FiCompass /></div>
          <p className="eyebrow">{copy.future.eyebrow}</p>
          <h2 id="future-title">{copy.future.title}</h2>
          <p>{copy.future.text}</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand"><BrandMark theme={theme} /><p>{copy.footer.tagline}</p></div>
        <div className="site-footer__links">
          <a href="#products">{copy.nav.products}</a><a href="#principles">{copy.nav.principles}</a><a href="#about">{copy.nav.about}</a><a href="#contact">{copy.nav.contact}</a><a href="./privacy.html">{copy.nav.privacy}</a><a href="./terms.html">{copy.nav.terms}</a><a href="./trademark.html">{copy.nav.trademarks}</a>
        </div>
        <p className="site-footer__legal">© {new Date().getFullYear()} Noitis™. {copy.footer.rights}</p>
      </footer>
    </div>
  )
}
