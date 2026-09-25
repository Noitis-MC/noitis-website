# Noitis Website — Production Operations

The Noitis company website is static-first and deployed through GitHub Actions to GitHub Pages. No application database is required for this website.

## Production authority

- Repository: `Noitis-MC/noitis-website`
- Deployment source: `main` through `.github/workflows/deploy-pages.yml`
- Hosting: GitHub Pages
- Canonical public URL: `https://noitis.gr/`
- Alternate/fallback URLs checked for canonical redirect: `https://www.noitis.gr/` and `https://noitis-mc.github.io/noitis-website/`
- Publication URL authority: repository Actions variable `NOITIS_SITE_URL`
- Optional custom-domain variable: `NOITIS_CUSTOM_DOMAIN`
- Deployment gate: `NOITIS_PAGES_ENABLED=true`
- Website/content owner: repository `CODEOWNERS`

## Required repository variables

Configure these under **Settings → Secrets and variables → Actions → Variables**:

| Variable | Required | Purpose |
|---|---:|---|
| `NOITIS_PAGES_ENABLED` | Yes | Set to `true` while Pages is intentionally enabled. |
| `NOITIS_SITE_URL` | Yes | Canonical HTTPS publication base URL, including trailing `/`. |
| `NOITIS_CUSTOM_DOMAIN` | Recommended | Set to `noitis.gr`; must match `NOITIS_SITE_URL`. |
| `CLOUDFLARE_WEB_ANALYTICS_TOKEN` | For private visitor analytics | Cloudflare Web Analytics site token injected into production HTML. It is a public beacon identifier, not a dashboard/read credential. |
| `<PRODUCT>_PUBLIC_URL` | When a product is public | Approved HTTPS product destination. |
| `<PRODUCT>_PRICING_URL` | Optional | Approved HTTPS pricing destination. |

Production URL variables must be HTTPS and must never target localhost or private development endpoints.

## Validation

Local/static validation:

```powershell
npm ci
$env:VITE_SITE_URL = "https://noitis.gr/"
npm run check:production
npm run check
```

After publication:

```powershell
$env:SITE_URL = "https://noitis.gr/"
$env:VITE_SITE_URL = "https://noitis.gr/"
$env:NOITIS_CUSTOM_DOMAIN = "noitis.gr"
$env:PAGES_DEFAULT_URL = "https://noitis-mc.github.io/noitis-website/"
$env:ALTERNATE_SITE_URL = "https://www.noitis.gr/"
npm run check:live
```

For the full live acceptance gate, install Playwright Chromium and run `npm run check:release`.

## GitHub Pages

Pages uses **GitHub Actions** as its source. The deployment workflow refuses publication when the configured site URL is absent, non-HTTPS, local, or inconsistent with an optional custom domain.

The GitHub Pages project remains the hosting/deployment platform, but `https://noitis.gr/` is the authoritative public address. The default Pages project URL and `www` hostname are redirect/fallback surfaces, not canonical publication addresses.

## Custom-domain production contract

The Noitis domain migration is now the production baseline:

1. GitHub Pages custom domain is `noitis.gr`;
2. DNS points the apex domain to GitHub Pages and `www` follows the documented GitHub Pages custom-domain pattern;
3. HTTPS is enforced after certificate provisioning;
4. `NOITIS_SITE_URL=https://noitis.gr/` and `NOITIS_CUSTOM_DOMAIN=noitis.gr`;
5. the default Pages project URL and `www` hostname must resolve to the canonical `https://noitis.gr/` origin;
6. `npm run check:release` is the release gate for the canonical domain.

Do not implement JavaScript or meta-refresh redirects for canonical-host changes.

## Monitoring and broken-link ownership

`.github/workflows/site-health.yml` runs scheduled live publication health checks while Pages is enabled and `NOITIS_SITE_URL` is configured. A failed health run is an operations signal and should be investigated promptly.

The owner named in `CODEOWNERS` owns deployment failures, availability failures, broken internal links, canonical/sitemap/robots drift, dependency-update review, and legal/content corrections.

## Dependency updates

Dependabot is configured for weekly npm and GitHub Actions update pull requests. Dependency updates must pass the normal repository checks and should not be merged merely because they are automated.

## Private visitor analytics

The website supports Cloudflare Web Analytics as the minimal owner-only traffic counter/performance layer. It does not render a public visitor count, and dashboard access remains controlled by the Cloudflare account.

To activate it:

1. create a Cloudflare Web Analytics site for `noitis.gr`;
2. copy its site token;
3. add that value as the GitHub Actions repository variable `CLOUDFLARE_WEB_ANALYTICS_TOKEN`;
4. push or manually run the Pages deployment;
5. verify the beacon appears only in production output and that the Cloudflare dashboard begins receiving aggregate visits.

Do not store Cloudflare API tokens, dashboard credentials, or other read/admin secrets in `VITE_*` variables. If the analytics provider or data behavior changes, update the public Privacy notice before treating the change as production-ready.

## Normal rollback

GitHub Pages deployments are generated from `main`.

Preferred rollback:

1. identify the last known-good commit on `main`;
2. create a normal revert commit for the bad release/change;
3. push the revert to `main`;
4. allow the Pages workflow to redeploy;
5. run `npm run check:live` against the production URL;
6. record the incident/reason in repository history.

## Emergency unpublish

If published content creates a material legal, privacy, security, or brand risk and a normal revert is not fast or safe enough, an authorized repository administrator may unpublish the GitHub Pages site from Pages settings. Redeploy only after the corrective change passes the release gates.

## Emergency legal/content update

For a legal or public-content correction, make the smallest accurate change, preserve public-safe product-claim rules, run repository checks, deploy through the reviewed path, verify the public page, and review the Markdown and HTML legal surfaces whenever the factual operating model changes.
