# Noitis Website Roadmap

This roadmap is the implementation sequence for the public Noitis company website. The site remains static-first unless a real website requirement justifies additional infrastructure. Phase 6 is the accepted official public launch at `https://noitis.gr/`; Phase 7 hardens that launched site for cross-platform compatibility, publication resilience, and release-candidate operations.

## Implementation audit — 2026-09-25

- **Phases 1–6 are complete and accepted.** The website has the static-first React/TypeScript/Vite foundation, reviewed publication content, product catalogue, legal/publication controls, accessibility/SEO/quality checks, cross-browser smoke coverage, production operations contract, and accepted GitHub Pages launch.
- **The Noitis PNG logo remains the approved browser-tab and Apple Home Screen product mark.** The accepted site uses `media/Noitis Logo - Light.png` for the public-page favicon and Safari/iOS Home Screen presentation; the lightweight manifest SVG remains a supporting installable-web-app asset rather than replacing the approved PNG identity.
- **Phase 6 remains complete and owner-accepted for the current Noitis public launch.** The approved release is deployed from `main` through GitHub Actions to GitHub Pages and the canonical public address is `https://noitis.gr/`, over HTTPS and without requiring a GitHub login.
- **Phase 7 is complete and accepted for the current static-site scope.** The repository owns a permanent compatibility runner covering desktop Chromium/Firefox/WebKit and representative mobile/tablet profiles, English/Greek and theme persistence, overflow/touch/layout checks, production/public verification against `https://noitis.gr/`, and the static-site attack-resilience boundary. Windows-host compatibility acceptance was completed on 2026-09-15; additional real-host/device spot checks remain useful ongoing evidence rather than a closure gate.
- **The repository was intentionally made public to enable GitHub Pages on the current GitHub plan.** This publication decision applies only to the Noitis company website repository; it does not change the visibility or release policy of the product application repositories.
- **The branded Noitis domain is now the production authority.** `https://noitis.gr/` is canonical; the GitHub Pages project URL and `https://www.noitis.gr/` are alternate entry points whose redirect behavior is covered by the live publication checks. Production configuration validation is locked to the apex Noitis domain.
- Production builds continue to enforce public-safe product destinations and publication metadata. Permanent local product links remain a development concern rather than leaking into production output.
- Phase branches are milestone branches. Once a phase is accepted and merged, its branch is kept at that completed phase and is not advanced with later-phase implementation unless the owner explicitly aligns it with `main`.

## Phase 1 — Company website foundation — Complete
- [x] React/TypeScript/Vite static-first website
- [x] Noitis brand identity, product presentation, and responsive navigation
- [x] Light and dark themes
- [x] Privacy, Terms, and Trademark public pages
- [x] Proprietary repository/license and trademark documentation
- [x] GitHub Actions CI and Pages deployment workflow
- [x] Product links and public company positioning

## Phase 2 — Content and product readiness — Complete
- [x] Review every company/product claim against the current product state
- [x] Keep product descriptions, optional pricing links, and launch status synchronized through the reviewed product catalogue and deployment configuration
- [x] Complete company/about/contact content required for the current launch path
- [x] Add social-preview metadata and a committed share image
- [x] Add sitemap and robots generation for the current public address and future production-domain transition
- [x] Review legal pages for the current Noitis operator identity, hosting model, and actual data practices
- [x] Keep permanent local development product links aligned to the Noitis application ports without leaking them into production builds
- [x] Remove placeholder/development-only destinations from production builds and enforce that boundary in `npm run check`

**Phase 2 evidence:** `src/productCatalog.ts` is the reviewed public product catalogue; `.env.example` documents publication/product URL configuration; `scripts/generate-publication-files.mjs` creates sitemap/robots output; `scripts/verify-content.mjs` rejects leaked local destinations and missing publication metadata; the public legal pages and Markdown remain the accepted publication baseline.

## Phase 3 — Accessibility, SEO, and quality — Complete / accepted
- [x] Complete keyboard-only and screen-reader-oriented semantic review
- [x] Validate contrast, focus, reduced motion, headings, landmarks, and target sizes
- [x] Test responsive behavior across supported mobile, tablet, and desktop sizes
- [x] Validate metadata, canonical URLs, structured data where appropriate, and indexability
- [x] Optimize images, font policy, bundle size, and Core Web Vitals-oriented loading behavior
- [x] Add automated publication, content, local-link, asset, bundle-budget, and link/build checks
- [x] Add Chromium, Firefox, and WebKit browser smoke coverage across mobile, tablet, and desktop
- [x] Preserve accepted product/icon presentation while completing the quality milestone

**Phase 3 evidence:** `npm run check` performs the production build plus publication/content, local-link, accessibility/quality-policy, image/asset, and bundle-budget verification. `npm run check:browser` uses `scripts/browser-smoke.mjs` for Chromium/Firefox/WebKit coverage at mobile/tablet/desktop sizes and exercises semantic landmarks, keyboard skip navigation, mobile navigation/Escape behavior, reduced motion, target sizing, responsive overflow, accessible control labels, and theme persistence.

## Phase 4 — Production domain and operations — Complete / accepted
- [x] Define and validate the production publication configuration contract
- [x] Provide a GitHub Pages workflow that can be enabled with GitHub Actions and repository publication variables
- [x] Define the optional custom-domain, DNS, ownership-verification, certificate, and HTTPS activation procedure
- [x] Implement production URL/custom-domain validation and a single canonical publication configuration source
- [x] Define canonical/default-domain/apex-or-www redirect verification for a future custom-domain launch
- [x] Review analytics need/legal basis and support privacy-first owner-only aggregate visitor analytics without rendering a public counter
- [x] Define live website monitoring, broken-link checks, dependency updates, and content/operations ownership
- [x] Document DNS/canonical policy, normal rollback, emergency unpublish, and emergency content/legal update procedures
- [x] Provide a deterministic production live-health gate for publication verification

**Phase 4 evidence:** `scripts/verify-production-config.mjs` provides `npm run check:production` and locks production publication to `https://noitis.gr/`; `scripts/verify-publication-health.mjs` provides `npm run check:live` and checks canonical redirects; `.github/workflows/deploy-pages.yml` fails closed on missing/unsafe production configuration and can inject the owner-only Cloudflare Web Analytics beacon; `.github/workflows/site-health.yml` runs daily when Pages is enabled; `.github/dependabot.yml` defines weekly npm/Actions review; `.github/CODEOWNERS` defines ownership; and `docs/operations/PRODUCTION.md` is the production runbook.

## Phase 5 — Launch candidate — Complete / accepted
- [x] Freeze launch copy and product links for final review
- [x] Run `npm run check` from a clean checkout
- [x] Run `npm run check:browser` with the pinned Playwright browser toolchain
- [x] Validate all navigation, product links, legal links, theme behavior, and responsive states in production preview
- [x] Complete the final launch-candidate accessibility, SEO, hosting/security-readiness, and legal review
- [x] Verify that the publication validation/live-health tooling covers canonical metadata/sitemap/robots/social-preview acceptance
- [x] Confirm that every currently configured product destination is intentional and publicly safe; products without an approved public HTTPS destination remain intentionally unconfigured
- [x] Complete the Phase-5 go/no-go review with no unresolved repository-side critical issues

**Phase 5 evidence:** This roadmap is the authoritative lifecycle record. `src/productCatalog.ts` and `docs/content/PRODUCT_CATALOG.md` were re-audited and frozen for the accepted launch candidate. The maintained repository checks preserve the approved PNG favicon and verify navigation, product links, legal/theme/responsive behavior, social preview, manifest, canonical metadata, sitemap/robots output, and hosting/security observations.

## Phase 6 — Official Noitis website launch — Complete / accepted
- [x] Prepare deterministic Phase-6 launch acceptance tooling and runbook on top of the exact accepted Phase-5 baseline
- [x] Deploy the approved release from `main` through the maintained GitHub Actions Pages workflow
- [x] Enable GitHub Pages with GitHub Actions as the source and configure the current publication variables
- [x] Publish the Noitis company website at the canonical address `https://noitis.gr/`
- [x] Use HTTPS on the canonical `https://noitis.gr/` production address
- [x] Confirm that the public website is reachable without requiring a GitHub login
- [x] Preserve the accepted legal pages, product-link safety, canonical metadata, sitemap/robots, manifest/favicon, and social-preview publication contract
- [x] Preserve desktop/mobile responsive behavior, theme behavior, navigation, and the accepted Noitis visual presentation
- [x] Keep products without an approved public HTTPS destination intentionally marked as not publicly configured rather than exposing localhost/development links
- [x] Enable deployment/build health visibility, daily website health monitoring, and maintained publication verification tooling
- [x] Accept `https://noitis.gr/` as the official public launch address and keep the GitHub Pages project URL as a redirect/fallback surface
- [x] Mark the Noitis company website publicly launched for the current scope

**Phase 6 acceptance evidence:** This roadmap records the launch contract; `scripts/verify-publication-health.mjs`, `scripts/live-smoke.mjs`, `npm run check:release`, `.github/workflows/live-acceptance.yml`, `.github/workflows/deploy-pages.yml`, and `docs/operations/PRODUCTION.md` provide the maintained repository-side release gates and operations evidence. The GitHub Pages deployment is generated from `main`, and production configuration/canonical metadata target `https://noitis.gr/`. The website remains available independently of the owner's local development machine.

**Custom-domain closure:** The previously deferred branded-domain step is now part of the accepted production baseline. `https://noitis.gr/` is canonical; production validation, sitemap/robots generation, compatibility checks, and live redirect verification are aligned to that address. GitHub's default Pages URL remains hosting infrastructure, not the public canonical identity.

## Phase 7 — Production hardening and release candidate — Complete / accepted
- [x] Check Windows/Linux/other-OS UI risks through repository-owned Chromium, Firefox, and WebKit compatibility coverage plus responsive device profiles
- [x] Validate desktop, tablet, portrait-phone, landscape-phone, ultra-narrow, iOS Safari-family, Android Chrome/Firefox, Samsung Internet, HarmonyOS, iPadOS, and KaiOS layout profiles
- [x] Validate English/Greek switching and persistence, light/dark themes, navigation, legal pages, images, overflow/clipping, touch targets, and browser/resource errors
- [x] Correct compatibility defects found by the hardening work, including Greek landscape navigation overflow and ultra-narrow feature-phone overflow
- [x] Keep permanent local/public compatibility commands and a complete release verification gate owned by the repository
- [x] Preserve the accepted `https://noitis.gr/` production URL, HTTPS/public availability, canonical metadata, sitemap, robots, social preview, favicon, canonical redirects, and product-link safety
- [x] Review the attack-resilience boundary for the current static GitHub Pages architecture and avoid claiming application-server controls that do not exist
- [x] Keep secrets, localhost/private product destinations, and unpublished configuration out of production output
- [x] Preserve accessibility, responsive layout, theme behavior, and the approved Noitis visual identity across local and public builds
- [x] Add Safari/iOS Home Screen metadata while preserving the approved Noitis PNG mark as the install icon
- [x] Complete the Phase-7 go/no-go review for the current static-site scope with no unresolved repository-side critical issue

### Phase 7 acceptance evidence

- `scripts/compatibility.mjs` provides the permanent cross-browser/mobile compatibility runner.
- `npm run check:compat` runs the local compatibility matrix; `npm run check:public` runs it against `https://noitis.gr/`; `npm run check:all` combines repository/browser/compatibility checks; and `npm run check:release` is the complete public release gate.
- The accepted Windows-host run on 2026-09-15 covered desktop Chromium, Firefox, and WebKit plus representative Android/iOS/tablet/feature-phone profiles and found/fixed real responsive defects.
- `docs/COMPATIBILITY.md` records the compatibility contract and the distinction between automated browser/device-profile emulation and optional future physical-device evidence.
- The current application architecture remains static-only: no trusted application API, authentication/session store, tenant database, billing endpoint, webhook handler, or payment execution surface exists on the company website. The optional Cloudflare Web Analytics beacon is external aggregate measurement rather than a Noitis application backend. Application-layer rate limiting and transactional attack controls therefore belong to future dynamic infrastructure if such infrastructure is introduced.
- GitHub Pages/network-edge DDoS protection remains a hosting responsibility; repository checks cover what the static application itself can truthfully control.
- Safari/iOS Home Screen support uses the approved PNG Noitis mark, standalone-capable manifest metadata, theme/status-bar metadata, and the existing public installable-web-app contract.

### Ongoing post-acceptance checks

Real Linux/macOS host runs and physical Android/iPhone/iPad/HarmonyOS/KaiOS spot checks remain useful additional operational evidence when those systems are available. They are not represented as completed real-device observations unless actually performed, and they do not reopen the accepted Phase-7 static-site milestone unless they reveal a release-blocking defect.
