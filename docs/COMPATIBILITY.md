# Cross-OS and Mobile UI Compatibility

The Noitis company website keeps compatibility verification inside the repository so it can be run locally without depending on GitHub Actions.

Supported website surfaces:

- local development: `http://localhost:5173/`
- public production: `https://noitis-mc.github.io/noitis-website/`

## Commands

Install Playwright locally when needed:

```powershell
npm install --no-save --package-lock=false playwright@1.62.1
npx playwright install chromium firefox webkit
```

Run the local compatibility matrix:

```powershell
npm run check:compat
```

Run the complete local verification set:

```powershell
npm run check:all
```

Run the compatibility matrix directly against the public GitHub Pages site:

```powershell
npm run check:public
```

Run the complete release gate:

```powershell
npm run check:release
```

## Automated coverage

`scripts/compatibility.mjs` validates the current host with Chromium, Firefox, and WebKit plus deliberate device/browser profiles for:

- desktop Chromium
- desktop Firefox
- desktop WebKit / Safari-family rendering
- Android Chrome, portrait and landscape
- Samsung Internet / Galaxy-style Android
- Android Firefox
- HarmonyOS standards-oriented mobile behavior
- iPhone / iOS Safari-family, portrait and landscape
- iPad / iPadOS Safari-family
- KaiOS feature-phone narrow layout

The checker verifies responsive overflow, clipped content, broken images, semantic page structure, touch-target sizing, desktop/mobile navigation, English/Greek switching, light/dark themes, preference persistence, legal pages, failed resources, and browser errors. Failure screenshots are written under `artifacts/compatibility/`.

## Windows acceptance evidence

On 2026-09-15 the owner ran the local compatibility matrix on `win32/x64` and confirmed all profiles passed after the discovered layout defects were fixed.

The accepted Windows run covered:

- desktop Chromium, Firefox, and WebKit
- Android Chrome portrait and landscape
- Samsung Internet profile
- HarmonyOS profile
- iOS Safari-family portrait and landscape
- iPadOS Safari-family
- Android Firefox
- KaiOS narrow-screen layout
- English and Greek
- light and dark themes

The hardening work also fixed Greek landscape navigation overflow, ultra-narrow feature-phone overflow, and preserved the approved Noitis/product-logo presentation.

## Evidence boundaries

A run proves compatibility on the real host OS that executed it. Browser/device profiles are emulations and do not count as physical-device evidence.

Additional confidence can be obtained by running `npm run check:all` on real Linux and macOS hosts and by visually checking the public site on real Android, iPhone, iPad, HarmonyOS, or KaiOS devices when those devices are available.

Do not claim physical-device or host-OS coverage that was not actually performed.
