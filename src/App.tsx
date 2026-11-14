import { FiArrowRight, FiArrowUpRight, FiMail } from 'react-icons/fi'
import { SiteLayout } from './components/SiteChrome'
import { CONTACT_EMAIL, chromeCopy } from './i18n/chromeCopy'
import { useLanguage } from './i18n/LanguageContext'
import { replaceName, siteContent } from './i18n/siteContent'
import { products } from './productCatalog'

import noitisLogoLight from '../media/Noitis Logo - Light.webp'
import noitisLogoDark from '../media/Noitis Logo - Dark.webp'

export function App() {
  const { language } = useLanguage()
  const copy = siteContent[language]
  const chrome = chromeCopy[language]
  const [firstPrinciple, ...principles] = copy.principles.items

  return (
    <SiteLayout current="home" className="home-shell">
      {(theme) => (
        <main id="main">
          <section className="hero" id="top">
            <div className="hero__copy">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1>{copy.hero.title}</h1>
              <p className="hero__lead">{copy.hero.lead}</p>
              <p className="hero__support">{copy.hero.support}</p>
              <div className="actions">
                <a className="button button--primary" href="./products.html">{copy.hero.discover} <FiArrowRight aria-hidden="true" /></a>
                <a className="button button--ghost" href="./about.html">{copy.hero.meet}</a>
              </div>
            </div>
            <div className="hero__visual" aria-hidden="true">
              <img className="blend-logo" src={theme === 'dark' ? noitisLogoDark : noitisLogoLight} alt="" width="640" height="640" decoding="async" fetchPriority="high" />
            </div>
          </section>

          <section className="statement" aria-labelledby="purpose-title">
            <p className="eyebrow">{copy.purpose.eyebrow}</p>
            <h2 id="purpose-title">{copy.purpose.title}</h2>
            <p>{copy.purpose.text}</p>
          </section>

          <section className="section" id="products" aria-labelledby="products-title">
            <div className="section-heading">
              <p className="eyebrow">{copy.products.eyebrow}</p>
              <h2 id="products-title">{copy.products.title}</h2>
              <p>{copy.products.intro}</p>
            </div>
            <ul className="product-grid">
              {products.map((product) => {
                const productCopy = copy.productCopy[product.name]
                const isLive = Boolean(product.publicUrl)
                return (
                  <li className="product-card" key={product.slug}>
                    <div className="product-card__top">
                      <span className="logo-tile">
                        <img className="blend-logo" src={theme === 'dark' ? product.logoDark : product.logoLight} alt="" width="640" height="640" loading="lazy" decoding="async" />
                      </span>
                      <span className={isLive ? 'status status--live' : 'status'}>{isLive ? chrome.statusLive : chrome.statusDevelopment}</span>
                    </div>
                    <p className="product-card__category">{productCopy.category}</p>
                    <h3><a className="card-link" href={product.href}>{product.name}</a></h3>
                    <p>{productCopy.description}</p>
                    <div className="product-card__footer">
                      <span className="text-link" aria-hidden="true">{chrome.learnMore} <FiArrowRight /></span>
                      {product.publicUrl ? (
                        <a className="text-link text-link--external" href={product.publicUrl} target="_blank" rel="noopener noreferrer">
                          {replaceName(chrome.openProduct, product.name)} <FiArrowUpRight aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </li>
                )
              })}
            </ul>
            <a className="text-link" href="./products.html">{copy.products.all} <FiArrowRight aria-hidden="true" /></a>
          </section>

          <section className="section section--tinted" id="principles" aria-labelledby="principles-title">
            <div className="section-heading">
              <p className="eyebrow">{copy.principles.eyebrow}</p>
              <h2 id="principles-title">{copy.principles.title}</h2>
              <p>{firstPrinciple.text}</p>
            </div>
            <ol className="principle-list">
              {principles.map((principle) => (
                <li key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </li>
              ))}
            </ol>
            <a className="text-link" href="./how-we-build.html">{chrome.nav.how} <FiArrowRight aria-hidden="true" /></a>
          </section>

          <section className="section split" id="about" aria-labelledby="about-title">
            <div>
              <p className="eyebrow">{copy.about.eyebrow}</p>
              <h2 id="about-title">{copy.about.title}</h2>
            </div>
            <div className="prose">
              {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="muted">{copy.future.text}</p>
              <a className="text-link" href="./about.html">{copy.hero.meet} <FiArrowRight aria-hidden="true" /></a>
            </div>
          </section>

          <section className="cta-band" id="contact" aria-labelledby="contact-title">
            <div>
              <h2 id="contact-title">{copy.contact.title}</h2>
              <p>{copy.contact.text}</p>
            </div>
            <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}><FiMail aria-hidden="true" /> {copy.contact.email}</a>
          </section>
        </main>
      )}
    </SiteLayout>
  )
}
