# Phase 7 — Cross-OS and Mobile UI Compatibility

Phase 7 hardens the Noitis company website for desktop and mobile operating-system/browser differences without making GitHub Actions a requirement for acceptance.

The Phase 7 implementation must remain safe for both supported website surfaces:

- local development: `http://localhost:5173/`
- public production: `https://noitis-mc.github.io/noitis-website/`

The public GitHub Pages site is still deployed from `main`. Phase 7 work is developed and accepted on `phase-7` first, then merged later only after owner approval.

## Acceptance principle

The repository owns the checks. GitHub Actions may run them later, but Phase 7 does not depend on GitHub Actions.

The same `npm run check:phase7` command is portable across Windows, Linux, and macOS. A run proves compatibility on the **real host OS that executed it**. Browser/device emulation does not count as proof that a different host OS was tested.

## Automated coverage

`scripts/phase7-compatibility.mjs` validates the website on the current host OS using Playwright browser engines and deliberate device profiles.

Desktop engine coverage:

- Chromium
- Firefox
- WebKit / Safari-family rendering

Mobile/tablet layout and interaction profiles:

- Android Chrome phone, portrait and landscape
- Samsung Internet / Galaxy-style Android profile
- Android Firefox layout profile
- HarmonyOS standards-based mobile profile
- iPhone / iOS Safari-family profile, portrait and landscape
- iPad / iPadOS Safari-family profile
- KaiOS feature-phone narrow-screen profile

These profiles are compatibility emulations. They validate responsive layout, browser-engine behavior, touch-sized controls, user-agent-sensitive behavior where relevant, language/theme persistence, and navigation. They are not a substitute for every physical device/browser combination.

Other current or niche mobile operating systems and Android-derived systems — for example GrapheneOS, Sailfish OS, Ubuntu Touch, Plasma Mobile, PureOS/postmarketOS and similar standards-based browsers — are covered by the same standards-oriented responsive/browser-engine rules where possible, but a real-device claim requires an actual device/browser run.

## What the Phase 7 compatibility gate checks

For each automated profile the gate verifies, where applicable:

- home page loads successfully;
- no horizontal page overflow;
- visible controls and product cards do not extend outside the viewport;
- text is not clipped by hidden horizontal overflow;
- images load successfully;
- semantic page structure remains present;
- all six Noitis product cards are present;
- responsive viewport metadata exists;
- touch targets meet the 44x44 CSS-pixel target used by the project;
- desktop navigation works;
- mobile navigation opens, closes with Escape, and navigates correctly;
- English and Greek switching works and persists;
- light/dark theme switching works and persists;
- the combined Greek + dark-theme layout remains valid;
- privacy, terms, and trademark pages load without horizontal overflow;
- important page resources do not return HTTP errors;
- uncaught browser page errors fail the check.

On failure, the script writes a full-page screenshot under `artifacts/phase7/` when possible.

## Local Phase 7 check

From the repository root:

```powershell
npm ci
npm install --no-save --package-lock=false playwright@1.62.1
npx playwright install chromium firefox webkit
npm run check:phase7
```

On Linux, if the Playwright system dependencies are not already installed, use:

```bash
npx playwright install --with-deps chromium firefox webkit
npm run check:phase7
```

`npm run check:phase7` performs the normal production-safe build/content/link/quality checks, the existing cross-browser production-preview smoke check, and then the new Phase 7 compatibility suite against the real local development surface on port 5173.

If `http://127.0.0.1:5173/` is already running, the Phase 7 script reuses it. Otherwise it creates the standard local development environment if needed and starts Vite itself on port 5173 with strict-port behavior.

## Real desktop OS acceptance

Before Phase 7 is declared complete, run `npm run check:phase7` on:

- Windows
- Linux
- macOS

Record the date, OS/version, architecture, Node version, and result in the acceptance record below.

A Windows run does not count as a Linux or macOS run. A Linux run does not count as Windows or macOS. WebKit running on Windows/Linux is useful Safari-family compatibility coverage but is not the same as native Safari on macOS.

## Real mobile-device acceptance

Before final Phase 7 acceptance, open the production candidate/public site on at least:

- one real Android phone using Chrome;
- one real Android phone using Samsung Internet or Firefox where available;
- one real iPhone using Safari;
- one real iPad using Safari where available;
- one real HarmonyOS device/browser where available;
- one KaiOS device/browser where practical if feature-phone support is intended to be claimed.

For every real device, verify:

1. the header and Noitis logo render correctly;
2. the language selector works in English and Greek;
3. the navigation can be opened/closed and all sections are reachable;
4. the hero text and buttons fit without clipping;
5. all product cards fit without horizontal scrolling;
6. light/dark switching works;
7. privacy, terms, and trademark pages are readable;
8. portrait/landscape rotation does not break layout where the device supports it;
9. there are no obviously broken images, overlapping controls, or unreadable text;
10. the public HTTPS URL remains usable without any local development dependency.

A device that is not available is recorded as **not physically verified**, not silently marked as passed.

## Public GitHub Pages acceptance

After the accepted Phase 7 tree is merged to `main` and GitHub Pages has deployed it, run:

```powershell
npm run check:phase7:release
```

This preserves the complete Phase 6 publication/live-health acceptance and adds the Phase 7 desktop/mobile compatibility suite directly against:

`https://noitis-mc.github.io/noitis-website/`

The public command is intentionally separate from the normal branch-development gate because `phase-7` does not itself replace the live `main` deployment.

## Acceptance record

| Surface | Required | Status | Evidence |
| --- | --- | --- | --- |
| `phase-7` equals accepted Phase 6 starting point | Yes | Complete | Branch created directly from Phase 6 commit `952e12700dae99fb07e77b33a08453335c6d3d18` |
| Windows local Phase 7 gate | Yes | Pending run | `npm run check:phase7` |
| Linux local Phase 7 gate | Yes | Pending run | `npm run check:phase7` |
| macOS local Phase 7 gate | Yes | Pending run | `npm run check:phase7` |
| Android real-device spot check | Yes | Pending | Manual checklist |
| iPhone real-device spot check | Yes | Pending | Manual checklist |
| iPad real-device spot check | Where available | Pending | Manual checklist |
| HarmonyOS real-device spot check | Where available | Pending | Manual checklist |
| KaiOS real-device spot check | If support is claimed | Pending | Manual checklist |
| Post-merge GitHub Pages Phase 7 release gate | Yes | Pending merge/deploy | `npm run check:phase7:release` |

## Completion rule

Phase 7 is complete only when repository automation, actual host-OS runs, required real-device checks, and the post-merge public GitHub Pages verification tell the same story.

Do not mark an emulated mobile profile as a physical-device pass, and do not modify the approved Noitis logo/favicon or publication identity merely to satisfy a compatibility test.
