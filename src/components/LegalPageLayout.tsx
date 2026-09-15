import { BrandMark } from '../BrandMark'
import { LanguageSwitcher } from './LanguageSwitcher'
import { legalCommon } from '../i18n/legalContent'
import type { LegalPageCopy } from '../i18n/legalContent'
import { useLanguage } from '../i18n/LanguageContext'

type LegalPageKey = 'privacy' | 'terms' | 'trademark'

interface LegalPageLayoutProps {
  page: LegalPageKey
  mainId: string
  content: LegalPageCopy
}

export function LegalPageLayout({ page, mainId, content }: LegalPageLayoutProps) {
  const { language } = useLanguage()
  const common = legalCommon[language]

  const headerLinks = [
    { key: 'home', href: './index.html', label: common.home },
    { key: 'privacy', href: './privacy.html', label: common.privacy },
    { key: 'terms', href: './terms.html', label: common.terms },
    { key: 'trademark', href: './trademark.html', label: common.trademarks },
  ].filter((link) => link.key === 'home' || link.key !== page)

  return (
    <div className="site-shell">
      <a className="skip-link" href={`#${mainId}`}>{common.skip}</a>
      <header className="site-header">
        <a className="brand-link" href="./index.html" aria-label={common.returnHomeAria}><BrandMark compact /></a>
        <nav className="privacy-nav" aria-label={common.navAria}>
          {headerLinks.map((link) => <a href={link.href} key={link.key}>{link.label}</a>)}
          <LanguageSwitcher compact />
        </nav>
      </header>

      <main className="privacy-page" id={mainId}>
        <header className="privacy-hero">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="privacy-hero__lead">{content.lead}</p>
          <p className="privacy-meta"><strong>{content.effectiveDateLabel}</strong> {content.effectiveDate}</p>
        </header>

        {content.sections.map((section) => (
          <section className="privacy-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body}
          </section>
        ))}
      </main>

      <footer className="site-footer site-footer--privacy">
        <div className="site-footer__brand"><BrandMark /><p>{content.footerTagline}</p></div>
        <div className="site-footer__links">
          <a href="./index.html">{common.home}</a>
          <a href="./privacy.html">{common.privacy}</a>
          <a href="./terms.html">{common.terms}</a>
          <a href="./trademark.html">{common.trademarks}</a>
        </div>
        <p className="site-footer__legal">© {new Date().getFullYear()} Noitis™. {common.rights}</p>
      </footer>
    </div>
  )
}
