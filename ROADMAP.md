# Noitis Website Roadmap

The Noitis company website is **publicly launched and accepted** for its current scope. The current production address is `https://noitis-mc.github.io/noitis-website/` and the local development address remains `http://localhost:5173/`.

## Current status — Complete / accepted

- [x] Public Noitis company website available through GitHub Pages
- [x] Deployment from `main` through GitHub Actions
- [x] HTTPS and public access without a GitHub login
- [x] Noitis brand identity and approved PNG favicon/logo presentation
- [x] English and Greek website languages with persistence across public pages
- [x] Light and dark themes
- [x] Responsive navigation and product-family presentation
- [x] Privacy, Terms, and Trademark pages
- [x] Production-safe product-link configuration that rejects local/private destinations
- [x] Canonical metadata, sitemap, robots, manifest, favicon, and social-preview publication controls
- [x] Accessibility, responsive-layout, metadata, link, asset, and browser verification
- [x] Deployment health visibility and scheduled live-site monitoring
- [x] Cross-browser/mobile compatibility runner owned by the repository
- [x] Windows-host compatibility acceptance completed on 2026-09-15
- [x] Approved small product-logo presentation preserved across local and public builds
- [x] Permanent runtime verification command names with no numbered internal milestone labels
- [x] Static-site security and availability boundary documented for hostile-traffic resilience

## Cross-platform hardening

The permanent compatibility runner is `scripts/compatibility.mjs` and is exposed through:

- `npm run check:compat` — local desktop/mobile compatibility matrix
- `npm run check:public` — compatibility matrix against the public GitHub Pages site
- `npm run check:all` — normal repository checks plus browser and compatibility coverage
- `npm run check:release` — complete production/public release gate

The accepted Windows run passed desktop Chromium, Firefox, and WebKit plus Android Chrome portrait/landscape, Samsung Internet, HarmonyOS, iOS Safari-family portrait/landscape, iPadOS Safari-family, Android Firefox, and KaiOS layout profiles. English/Greek switching, light/dark themes, navigation, legal pages, overflow, clipping, touch targets, images, and browser/resource errors are covered by automation.

The compatibility work found and corrected real issues including Greek landscape-navigation overflow and ultra-narrow feature-phone overflow. The approved Noitis mark is used in the future-direction section and the public product-card icon treatment remains aligned with the accepted company website.

Automated mobile profiles are emulations. Real Linux/macOS host runs and physical mobile-device spot checks remain useful additional evidence when those systems/devices are available; they must not be claimed as completed until actually performed.

See `docs/COMPATIBILITY.md` for the permanent compatibility runbook and evidence boundary.

## Security and attack-resilience boundary

The current Noitis website is a **static public GitHub Pages site**. It has no trusted application API, customer authentication/session store, payment execution, tenant database, or server-side governance surface to which the AgentGate application-layer attack suite can be meaningfully applied.

For the current static scope:

- production builds must not leak localhost/private product destinations, secrets, or unpublished configuration;
- public pages, legal pages, assets, language/theme behavior, metadata, and product links remain covered by release checks;
- availability and volumetric DDoS resistance are primarily properties of the GitHub Pages hosting/network edge rather than repository application code;
- the repository must not claim a measured application RPS/DDoS capacity that a static localhost build cannot prove.

If the Noitis website later adds forms, authentication, APIs, server-side persistence, billing, webhooks, or other dynamic endpoints, the corresponding release phase must adopt the same hardening principles proven in AgentGate: traffic-class isolation, rate/concurrency limits, bounded bodies/headers/connection time, Host/Origin/CORS protections, safe request correlation, Slowloris resistance, malformed/request-smuggling probes, authentication abuse testing, post-attack recovery checks, and a localhost/synthetic application-layer resilience gate.

Network-edge WAF/CDN/load-balancer/DDoS controls remain a hosting/infrastructure responsibility and must be reviewed whenever hosting moves away from or materially changes beyond GitHub Pages.

## Ongoing roadmap

- Run the complete verification set on additional real desktop operating systems when available.
- Perform physical-device spot checks on Android, iPhone, iPad, HarmonyOS, or KaiOS devices when practical.
- Add a branded Noitis custom domain when ownership is intentionally purchased and activated.
- Re-run DNS, TLS, canonical-host, redirect, and live-site acceptance checks when a custom domain is introduced.
- Add public product and pricing destinations only after those destinations are real, HTTPS, intentionally public, and reviewed as safe.
- Keep product descriptions synchronized with material changes in the product repositories without presenting planned work as current capability.
- Keep privacy, legal, trademark, and operator information synchronized with actual website behavior and company status.
- Continue dependency review, build validation, browser coverage, compatibility coverage, and live availability monitoring.
- Reconsider analytics, forms, CMS capability, APIs, or other dynamic infrastructure only when a concrete business requirement justifies the added privacy, security, and operational complexity.

## Publication principles

The website remains static-first. Public content is treated as production data. Noitis product claims must be factual and conservative, and local/private product addresses must never leak into the production build.

A future custom-domain migration is a hosting upgrade, not a reopening of the accepted public launch. The current GitHub Pages address remains the official public Noitis website until Noitis intentionally replaces it.
