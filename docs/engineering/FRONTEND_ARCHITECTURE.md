# Frontend Architecture

## Current state

The Noitis website remains intentionally small. Current React ownership is:

- `components/SiteChrome.tsx` — the one shared header, footer, theme hook and page layout used by every page;
- `App.tsx` — homepage composition;
- `CompanyPage.tsx` — products directory, how-we-build, about and contact pages;
- `ProductLandingPage.tsx` — the six product landing pages;
- `components/LegalPageLayout.tsx` with `PrivacyPage.tsx`, `TermsPage.tsx`, `TrademarkPage.tsx` — legal pages;
- `productCatalog.ts` — product names, landing paths, logos and approved public app URLs;
- `i18n/chromeCopy.ts` — shared navigation/footer/status copy in English and Greek; page copy lives in `i18n/siteContent*.ts`, `companyPageContent.ts`, `productLandingContent.ts` and `i18n/legalContent.tsx`;
- `lib/storage.ts` — safe access to saved preferences (never throws when storage is blocked);
- entry files (`main.tsx`, `company.tsx`, `product.tsx`, `privacy.tsx`, `terms.tsx`, `trademark.tsx`);
- `styles.css` imports `styles/site.css` (design tokens, base, header/footer, shared components), `styles/pages.css` (page layouts) and `styles/quality.css` (reduced motion, forced colours, print).

Brand colours are defined once as tokens at the top of `styles/site.css`. Logos are optimized WebP files; their solid backgrounds are blended into the page surface with the `.blend-logo` class. Each HTML entry applies the saved theme in a tiny inline script before first paint.

Do not split every section into components merely to mirror larger Noitis applications.

## Product catalogue boundary

`productCatalog.ts` owns names, landing paths, logos, and approved public app URLs. A product is shown as live exactly when it has a `publicUrl`; localized categories and descriptions live in the content files. It does **not** become authoritative for product business behavior; product repositories remain the implementation authority.

Public URLs arrive through `VITE_*` variables. Development links are generated into ignored `.env.development.local`, so local convenience is isolated from production-mode configuration.

## State rules

Local browser state is appropriate for theme preference and mobile-menu state. Do not use browser state as the source of truth for protected product data, identity, billing, permissions, or operational state.

## Legal-page ownership

Legal content must remain explicit and reviewable. React legal pages and root Markdown legal files should communicate the same current operator/hosting/data-practice facts. Update both when material behavior changes.

## Publication metadata

Canonical/social metadata lives in the HTML entry points and is parameterized by the publication base URL in `vite.config.ts`. Sitemap/robots generation belongs to `scripts/generate-publication-files.mjs`, not React runtime code.

## Accessibility rules

Interactive controls must remain keyboard-operable and visibly focusable. Mobile navigation requires clear control semantics. Theme/logo variants should not duplicate meaningful alternative text. Browser/accessibility validation remains part of the release gate.

## Growth path

If the website later adds a CMS, forms, analytics, localization, authenticated areas, or a richer catalogue, evolve the architecture around that real capability. Do not pre-build service/data/backend layers for requirements that do not exist.
