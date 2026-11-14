import { useEffect } from 'react'
import { FiArrowRight, FiArrowUpRight, FiMail } from 'react-icons/fi'
import { SiteLayout, type PageKey } from './components/SiteChrome'
import { companyPageContent, directoryProductCopy, type CompanyPageSlug } from './companyPageContent'
import { CONTACT_EMAIL, chromeCopy } from './i18n/chromeCopy'
import { replaceName } from './i18n/siteContent'
import { useLanguage } from './i18n/LanguageContext'
import { products } from './productCatalog'

const pageKeys: Record<CompanyPageSlug, PageKey> = {
  products: 'products',
  'how-we-build': 'how',
  about: 'about',
  contact: 'contact',
}

export function CompanyPage({ pageSlug }: { pageSlug: CompanyPageSlug }) {
  const { language } = useLanguage()
  const chrome = chromeCopy[language]
  const copy = companyPageContent[pageSlug][language]

  // Keep the tab title short and localized (the page headline can be a full sentence).
  const pageName = chrome.nav[pageKeys[pageSlug] as 'products' | 'how' | 'about' | 'contact']
  useEffect(() => {
    document.title = `${pageName} — Noitis`
  }, [pageName])

  return (
    <SiteLayout current={pageKeys[pageSlug]} className={`company-page-shell company-page-shell--${pageSlug}`}>
      {(theme) => (
        <main id="main" className="page">
          <header className="page-hero">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="page-hero__lead">{copy.intro}</p>
          </header>

          {pageSlug === 'products' ? (
            <ul className="directory">
              {products.map((product) => {
                const productCopy = directoryProductCopy[product.slug][language]
                const isLive = Boolean(product.publicUrl)
                return (
                  <li className="directory-item" key={product.slug}>
                    <span className="logo-tile logo-tile--large">
                      <img className="blend-logo" src={theme === 'dark' ? product.logoDark : product.logoLight} alt="" width="640" height="640" loading="lazy" decoding="async" />
                    </span>
                    <div className="directory-item__body">
                      <div className="directory-item__meta">
                        <span className="product-card__category">{productCopy.category}</span>
                        <span className={isLive ? 'status status--live' : 'status'}>{isLive ? chrome.statusLive : chrome.statusDevelopment}</span>
                      </div>
                      <h2>{product.name}</h2>
                      <p>{productCopy.intro}</p>
                      <div className="callout">
                        <strong>{productCopy.problemLabel}</strong>
                        <p>{productCopy.problem}</p>
                      </div>
                      <div className="actions">
                        <a className="button button--secondary" href={product.href}>{productCopy.cta} <FiArrowRight aria-hidden="true" /></a>
                        {product.publicUrl ? (
                          <a className="button button--ghost" href={product.publicUrl} target="_blank" rel="noopener noreferrer">
                            {replaceName(chrome.openProduct, product.name)} <FiArrowUpRight aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : pageSlug === 'contact' ? (
            <section className="contact-card" aria-label={chrome.nav.contact}>
              <span className="contact-card__icon" aria-hidden="true"><FiMail /></span>
              <div>
                {copy.note ? <p>{copy.note}</p> : null}
                <a className="contact-card__email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
              <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}>{chrome.email}</a>
            </section>
          ) : (
            <ol className="chapter-list">
              {copy.sections.map((section) => (
                <li className="chapter" key={section.title}>
                  <h2>{section.title}</h2>
                  <div className="prose">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.questions ? (
                      <ul className="question-list">
                        {section.questions.map((question) => <li key={question}>{question}</li>)}
                      </ul>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </main>
      )}
    </SiteLayout>
  )
}
