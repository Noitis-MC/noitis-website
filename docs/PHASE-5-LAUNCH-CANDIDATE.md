# Phase 5 — Launch Candidate Acceptance

**Status:** Complete / accepted

Phase 5 is the release-candidate contract for the Noitis company website. It freezes public copy and product links, requires a clean deterministic build, validates browser/accessibility/SEO/legal behavior, and rejects local/private destinations from production output.

## Acceptance gates

- `npm ci`
- `npm run check`
- install the pinned Playwright toolchain when browser review is required
- `npm run check:browser`
- review production preview navigation, product pages, legal pages, English/Greek behavior, light/dark themes, responsive layouts, metadata, sitemap, robots, favicon, manifest, and social preview
- confirm every public product destination is intentional and HTTPS-safe

## Current accepted baseline

The company website is static-first React + TypeScript + Vite. Public product cards lead to Noitis-owned informational product pages. Operational product applications remain separate from the company-site release boundary until their own production deployments are approved.

The accepted production-domain contract is `https://noitis.gr/`. Build and publication checks generate and validate canonical metadata, sitemap/robots output, public-safe links, bundle/asset quality, and browser behavior against that contract.

Phase 5 remains complete as long as later production changes preserve these gates.
