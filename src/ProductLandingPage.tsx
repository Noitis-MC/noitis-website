import { useEffect } from 'react'
import { FiArrowLeft, FiArrowUpRight, FiCheck, FiMail } from 'react-icons/fi'
import { SiteLayout } from './components/SiteChrome'
import { CONTACT_EMAIL, chromeCopy } from './i18n/chromeCopy'
import { replaceName } from './i18n/siteContent'
import { useLanguage } from './i18n/LanguageContext'
import { landingUiCopy, productLandingContent } from './productLandingContent'
import { products, type ProductSlug } from './productCatalog'

export function ProductLandingPage({ slug }: { slug: ProductSlug }) {
  const product = products.find((entry) => entry.slug === slug)
  if (!product) throw new Error(`Unknown product landing page: ${slug}`)
  return <ProductLanding product={product} />
}

function ProductLanding({ product }: { product: (typeof products)[number] }) {
  const { language } = useLanguage()
  const ui = landingUiCopy[language]
  const chrome = chromeCopy[language]
  const content = productLandingContent[product.slug][language]
  const isLive = Boolean(product.publicUrl)
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(product.name)}`

  useEffect(() => {
    document.title = `${product.name} — Noitis`
  }, [product.name])

  return (
    <SiteLayout current="product" className="product-landing-shell">
      {(theme) => (
        <main id="main" className="page">
          <a className="back-link" href="./products.html"><FiArrowLeft aria-hidden="true" /> {ui.back}</a>

          <section className="product-hero">
            <div className="product-hero__copy">
              <div className="directory-item__meta">
                <span className="product-card__category">{content.category}</span>
                <span className={isLive ? 'status status--live' : 'status'}>{isLive ? chrome.statusLive : chrome.statusDevelopment}</span>
              </div>
              <h1>{product.name}</h1>
              <p className="product-hero__headline">{content.headline}</p>
              <p className="page-hero__lead">{content.intro}</p>
              <div className="actions">
                {product.publicUrl ? (
                  <a className="button button--primary" href={product.publicUrl} target="_blank" rel="noopener noreferrer">
                    {replaceName(chrome.openProduct, product.name)} <FiArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <a className="button button--primary" href={mailto}><FiMail aria-hidden="true" /> {ui.earlyAccess}</a>
                )}
              </div>
            </div>
            <div className="product-hero__visual" aria-hidden="true">
              <img className="blend-logo" src={theme === 'dark' ? product.logoDark : product.logoLight} alt="" width="640" height="640" decoding="async" fetchPriority="high" />
            </div>
          </section>

          <section className="section split" aria-labelledby="problem-title">
            <div>
              <p className="eyebrow">{ui.problemEyebrow}</p>
              <h2 id="problem-title">{ui.problemTitle}</h2>
            </div>
            <div className="prose">
              {content.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className="section" aria-labelledby="capabilities-title">
            <div className="section-heading">
              <p className="eyebrow">{ui.capabilityEyebrow}</p>
              <h2 id="capabilities-title">{ui.capabilityTitle}</h2>
            </div>
            <ul className="feature-grid">
              {content.capabilities.map((capability) => (
                <li className="feature" key={capability.title}>
                  <span className="feature__icon" aria-hidden="true"><FiCheck /></span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="statement" aria-labelledby="value-title">
            <p className="eyebrow">{ui.valueEyebrow}</p>
            <h2 id="value-title">{ui.valueTitle}</h2>
            <p>{content.value}</p>
          </section>

          <div className="info-pair">
            <section className="info-card" aria-labelledby="access-title">
              <p className="eyebrow">{ui.accessEyebrow}</p>
              <h2 id="access-title">{isLive ? ui.liveAccessTitle : ui.accessTitle}</h2>
              <p>{isLive ? ui.liveAccessText : ui.accessText}</p>
            </section>
            <section className="info-card" aria-labelledby="boundary-title">
              <p className="eyebrow">{ui.boundaryEyebrow}</p>
              <h2 id="boundary-title">{ui.boundaryTitle}</h2>
              <p>{content.boundary}</p>
            </section>
          </div>

          <section className="cta-band" aria-labelledby="contact-title">
            <div>
              <p className="eyebrow">{ui.contactEyebrow}</p>
              <h2 id="contact-title">{ui.contactTitle}</h2>
              <p>{ui.valueText}</p>
            </div>
            <a className="button button--primary" href={mailto}><FiMail aria-hidden="true" /> {chrome.email}</a>
          </section>
        </main>
      )}
    </SiteLayout>
  )
}
