# Noitis Website Roadmap

This roadmap is the implementation sequence for the public Noitis company website. The site remains static-first unless a real website requirement justifies additional infrastructure. Phase 6 is the accepted official public launch; Phase 7 hardens that launched site for cross-platform compatibility, publication resilience, and release-candidate operations. A branded custom domain may be added later without reopening an accepted milestone.

## Implementation audit — 2026-09-17

- **Phases 1–6 are complete and accepted.** The website has the static-first React/TypeScript/Vite foundation, reviewed publication content, product catalogue, legal/publication controls, accessibility/SEO/quality checks, cross-browser smoke coverage, production operations contract, and accepted GitHub Pages launch.
- **The Noitis PNG logo remains the approved browser-tab and Apple Home Screen product mark.** The accepted site uses `media/Noitis Logo - Light.png` for the public-page favicon and Safari/iOS Home Screen presentation; the lightweight manifest SVG remains a supporting installable-web-app asset rather than replacing the approved PNG identity.
- **Phase 6 remains complete and owner-accepted for the current GitHub Pages public launch.** The approved release is deployed from `main` through GitHub Actions and is publicly reachable at `https://noitis-mc.github.io/noitis-website/` without requiring a GitHub login. GitHub Pages uses HTTPS for the current default Pages address.
- **Phase 7 is complete and accepted for the current static-site scope.** The repository owns a permanent compatibility runner covering desktop Chromium/Firefox/WebKit and representative mobile/tablet profiles, English/Greek and theme persistence, overflow/touch/layout checks, production/public verification, and the static-site attack-resilience boundary. Windows-host compatibility acceptance was completed on 2026-09-15; additional real-host/device spot checks remain useful ongoing evidence rather than a closure gate for this static GitHub Pages site.
- **The repository was intentionally made public to enable GitHub Pages on the current GitHub plan.** This publication decision applies only to the Noitis company website repository; it does not change the visibility or release policy of the product application repositories.
- **The current launch uses the GitHub Pages default production URL by deliberate owner decision.** Purchasing, verifying, and activating a branded Noitis custom domain is deferred until the owner is ready. When a custom domain is introduced, the existing DNS/domain/TLS/canonical checks and live-release gate must be rerun against that address.
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
- [x] Review analytics need/legal basis and intentionally keep analytics disabled while no justified requirement exists
- [x] Define live website monitoring, broken-link checks, dependency updates, and content/operations ownership
- [x] Document DNS/canonical policy, normal rollback, emergency unpublish, and emergency content/legal update procedures
- [x] Provide a deterministic production live-health gate for publication verification

**Phase 4 evidence:** `scripts/verify-production-config.mjs` provides `npm run check:production`; `scripts/verify-publication-health.mjs` provides `npm run check:live`; `.github/workflows/deploy-pages.yml` fails closed on missing/unsafe production configuration and uses the current Pages Actions artifact path; `.github/workflows/site-health.yml` runs daily when Pages is enabled; `.github/dependabot.yml` defines weekly npm/Actions review; `.github/CODEOWNERS` defines ownership; and `docs/operations/PRODUCTION.md` is the production runbook.

## Phase 5 — Launch candidate — Complete / accepted
- [x] Freeze launch copy and product links for final review
- [x] Run `npm run check` from a clean checkout
- [x] Run `npm run check:browser` with the pinned Playwright browser toolchain
- [x] Validate all navigation, product links, legal links, theme behavior, and responsive states in production preview
- [x] Complete the final launch-candidate accessibility, SEO, hosting/security-readiness, and legal review
- [x] Verify that the publication validation/live-health tooling covers canonical metadata/sitemap/robots/social-preview acceptance
- [x] Confirm that every currently configured product destination is intentional and publicly safe; products without an approved public HTTPS destination remain intentionally unconfigured
- [x] Complete the Phase-5 go/no-go review with no unresolved repository-side critical issues

**Phase 5 evidence:** `docs/PHASE-5-LAUNCH-CANDIDATE.md` defines the release-candidate contract. `src/productCatalog.ts` and `docs/content/PRODUCT_CATALOG.md` were re-audited and frozen for the accepted launch candidate. The accepted branch keeps the approved PNG favicon, verifies navigation/product-link/legal/theme/responsive behavior, verifies the live social preview, manifest, favicon, canonical/sitemap/robots output, and exposes hosting/security headers.

## Phase 6 — Official Noitis website launch — Complete / accepted
- [x] Prepare deterministic Phase-6 launch acceptance tooling and runbook on top of the exact accepted Phase-5 baseline
- [x] Deploy the approved release from `main` through the maintained GitHub Actions Pages workflow
- [x] Enable GitHub Pages with GitHub Actions as the source and configure the current publication variables
- [x] Publish the Noitis company website at `https://noitis-mc.github.io/noitis-website/`
- [x] Use HTTPS on the current GitHub Pages production address
- [x] Confirm that the public website is reachable without requiring a GitHub login
- [x] Preserve the accepted legal pages, product-link safety, canonical metadata, sitemap/robots, manifest/favicon, and social-preview publication contract
- [x] Preserve desktop/mobile responsive behavior, theme behavior, navigation, and the accepted Noitis visual presentation
- [x] Keep products without an approved public HTTPS destination intentionally marked as not publicly configured rather than exposing localhost/development links
- [x] Enable deployment/build health visibility, daily website health monitoring, and maintained publication verification tooling
- [x] Accept the GitHub Pages URL as the current official public launch address
- [x] Mark the Noitis company website publicly launched for the current scope

**Phase 6 acceptance evidence:** The accepted Phase-6 branch provides `scripts/phase6-live-smoke.mjs`, strengthened `scripts/verify-publication-health.mjs`, `npm run check:phase6`, `.github/workflows/phase6-live-acceptance.yml`, and `docs/PHASE-6-LAUNCH.md`. The final accepted tree was aligned into `main`; the GitHub Pages deployment for the aligned `main` state completed successfully; the owner confirmed the public site is reachable and accepted the temporary GitHub Pages address as the current launch URL. The website remains available independently of the owner's local development machine.

**Deferred post-launch custom-domain upgrade — not a Phase-6 closure gate:** When the owner chooses to purchase a Noitis domain, verify the domain with GitHub, configure the Pages custom domain and DNS, wait for certificate provisioning, enforce HTTPS, configure canonical/apex-or-www redirects as appropriate, update `NOITIS_SITE_URL` / `NOITIS_CUSTOM_DOMAIN`, and rerun the full live acceptance gate. This future domain migration must not change the accepted Noitis visual identity or product-publication safety rules.

## Phase 7 — Production hardening and release candidate — Complete / accepted
- [x] Check Windows/Linux/other-OS UI risks through repository-owned Chromium, Firefox, and WebKit compatibility coverage plus responsive device profiles
- [x] Validate desktop, tablet, portrait-phone, landscape-phone, ultra-narrow, iOS Safari-family, Android Chrome/Firefox, Samsung Internet, HarmonyOS, iPadOS, and KaiOS layout profiles
- [x] Validate English/Greek switching and persistence, light/dark themes, navigation, legal pages, images, overflow/clipping, touch targets, and browser/resource errors
- [x] Correct compatibility defects found by the hardening work, including Greek landscape navigation overflow and ultra-narrow feature-phone overflow
- [x] Keep permanent local/public compatibility commands and a complete release verification gate owned by the repository
- [x] Preserve the accepted GitHub Pages production URL, HTTPS/public availability, canonical metadata, sitemap, robots, social preview, favicon, and product-link safety
- [x] Review the attack-resilience boundary for the current static GitHub Pages architecture and avoid claiming application-server controls that do not exist
- [x] Keep secrets, localhost/private product destinations, and unpublished configuration out of production output
- [x] Preserve accessibility, responsive layout, theme behavior, and the approved Noitis visual identity across local and public builds
- [x] Add Safari/iOS Home Screen metadata while preserving the approved Noitis PNG mark as the install icon
- [x] Complete the Phase-7 go/no-go review for the current static-site scope with no unresolved repository-side critical issue

### Phase 7 acceptance evidence

- `scripts/compatibility.mjs` provides the permanent cross-browser/mobile compatibility runner.
- `npm run check:compat` runs the local compatibility matrix; `npm run check:public` runs it against the public GitHub Pages site; `npm run check:all` combines repository/browser/compatibility checks; and `npm run check:release` is the complete public release gate.
- The accepted Windows-host run on 2026-09-15 covered desktop Chromium, Firefox, and WebKit plus representative Android/iOS/tablet/feature-phone profiles and found/fixed real responsive defects.
- `docs/COMPATIBILITY.md` records the compatibility contract and the distinction between automated browser/device-profile emulation and optional future physical-device evidence.
- The current architecture is static-only: no trusted application API, authentication/session store, tenant database, billing endpoint, webhook handler, or payment execution surface exists on the company website. Application-layer rate limiting and transactional attack controls therefore belong to future dynamic infrastructure if such infrastructure is introduced.
- GitHub Pages/network-edge DDoS protection remains a hosting responsibility; repository checks cover what the static application itself can truthfully control.
- Safari/iOS Home Screen support uses the approved PNG Noitis mark, standalone-capable manifest metadata, theme/status-bar metadata, and the existing public installable-web-app contract.

### Ongoing post-acceptance checks

Real Linux/macOS host runs and physical Android/iPhone/iPad/HarmonyOS/KaiOS spot checks remain useful additional operational evidence when those systems are available. They are not represented as completed real-device observations unless actually performed, and they do not reopen the accepted Phase-7 static-site milestone unless they reveal a release-blocking defect.
