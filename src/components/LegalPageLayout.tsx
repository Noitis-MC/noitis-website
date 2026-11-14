import { useEffect } from 'react'
import type { LegalPageCopy } from '../i18n/legalContent'
import { useLanguage } from '../i18n/LanguageContext'
import { SiteLayout } from './SiteChrome'

type LegalPageKey = 'privacy' | 'terms' | 'trademarks'

const tocLabel = { en: 'On this page', el: 'Σε αυτή τη σελίδα' } as const

export function LegalPageLayout({ page, content }: { page: LegalPageKey; content: LegalPageCopy }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.title = `${content.title} — Noitis`
  }, [content.title])

  return (
    <SiteLayout current={page} className={`legal-shell legal-shell--${page}`} footerTagline={content.footerTagline}>
      {() => (
        <main id="main" className="page legal-page">
          <header className="page-hero">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="page-hero__lead">{content.lead}</p>
            <p className="legal-meta"><strong>{content.effectiveDateLabel}</strong> {content.effectiveDate}</p>
          </header>

          <div className="legal-layout">
            {content.sections.length > 3 ? (
              <nav className="legal-toc" aria-label={tocLabel[language]}>
                <p className="legal-toc__title">{tocLabel[language]}</p>
                <ol>
                  {content.sections.map((section, index) => (
                    <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading.replace(/^\d+\.\s*/, '')}</a></li>
                  ))}
                </ol>
              </nav>
            ) : null}
            <div className="legal-body">
              {content.sections.map((section, index) => (
                <section className="legal-section" id={`section-${index + 1}`} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body}
                </section>
              ))}
            </div>
          </div>
        </main>
      )}
    </SiteLayout>
  )
}
