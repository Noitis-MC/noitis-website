# Phase 6 — Official Noitis Website Launch

**Status:** Complete / accepted  
**Canonical public address:** https://noitis.gr/  
**Hosting:** GitHub Pages deployed from `main` through GitHub Actions

Phase 6 is the official public-launch milestone for the Noitis company website.

## Launch contract

- the reviewed release is deployed from `main`;
- the canonical public address is `https://noitis.gr/`;
- HTTPS is mandatory;
- the public website does not require a GitHub login;
- the default GitHub Pages project URL and `www` hostname are alternate entry points that must resolve to the canonical Noitis domain;
- canonical metadata, sitemap, robots, social preview, manifest/favicon, product-link safety, legal pages, language/theme behavior, and responsive layout remain release requirements;
- products without an approved operational production destination remain represented only through their company-site informational landing pages;
- CI, deployment health, scheduled publication checks, and the live release gate remain maintained repository assets.

## Verification

Repository-side release verification is owned by:

- `npm run check:production`
- `npm run check`
- `npm run check:release`
- `.github/workflows/deploy-pages.yml`
- `.github/workflows/site-health.yml`
- `.github/workflows/live-acceptance.yml`
- `docs/operations/PRODUCTION.md`

The deployment workflow builds and publishes the exact committed source. Production URL validation is locked to `https://noitis.gr/`; the live-health tooling checks HTTPS, canonical metadata, assets, sitemap/robots, internal links, and canonical redirects.

## Owner-only visitor analytics

The website can enable Cloudflare Web Analytics through the deployment variable `CLOUDFLARE_WEB_ANALYTICS_TOKEN`. The public website does not display a visitor counter. Analytics report access is controlled by the owner's Cloudflare account, and no dashboard/read credential is shipped to the browser.

Phase 6 remains complete while the canonical domain and maintained release gates continue to pass.
