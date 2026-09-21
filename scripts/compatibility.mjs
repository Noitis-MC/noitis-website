import { existsSync, mkdirSync } from 'node:fs'
import { spawn, spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import process from 'node:process'

const PUBLIC_URL = 'https://noitis-mc.github.io/noitis-website/'
const LOCAL_URL = 'http://127.0.0.1:5173/'
const argvUrl = process.argv.find((argument) => argument.startsWith('--url='))?.slice('--url='.length)
const requestedUrl = argvUrl || LOCAL_URL
const baseUrl = new URL(requestedUrl.endsWith('/') ? requestedUrl : `${requestedUrl}/`).toString()
const isLocalTarget = ['127.0.0.1', 'localhost'].includes(new URL(baseUrl).hostname)
const artifactRoot = 'artifacts/compatibility'
const viteCli = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url))

if (!existsSync('package.json')) throw new Error('Run compatibility checks from the repository root.')

let playwright
try {
  playwright = await import('playwright')
} catch {
  throw new Error('Playwright is not installed. Run: npm install --no-save --package-lock=false playwright@1.62.1')
}

const { chromium, firefox, webkit } = playwright
const hostOs = `${process.platform}/${process.arch}`
const startedAt = new Date().toISOString()
let devServer = null
let devServerErrors = ''

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

async function canReach(url) {
  try {
    const response = await fetch(url, { redirect: 'follow' })
    return response.ok
  } catch {
    return false
  }
}

async function waitForTarget(url, attempts = 60) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    if (await canReach(url)) return
    await new Promise((resolve) => setTimeout(resolve, 200))
  }
  throw new Error(`Compatibility target did not become reachable: ${url}${devServerErrors ? `\n${devServerErrors}` : ''}`)
}

async function startLocalTargetIfNeeded() {
  if (!isLocalTarget) return
  if (await canReach(baseUrl)) {
    console.log(`Using the existing local Noitis dev server at ${baseUrl}`)
    return
  }

  const localEnv = spawnSync(process.execPath, ['scripts/ensure-local-env.mjs'], {
    stdio: 'inherit',
    shell: false,
  })
  if (localEnv.status !== 0) throw new Error('Could not prepare the local Noitis development environment.')

  devServer = spawn(process.execPath, [viteCli, '--host', '127.0.0.1', '--port', '5173', '--strictPort'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: false,
  })
  devServer.stderr.on('data', (chunk) => { devServerErrors += chunk.toString() })
  await waitForTarget(baseUrl)
  console.log(`Started the local Noitis dev server at ${baseUrl}`)
}

function routeUrl(route = '') {
  return new URL(route, baseUrl).toString()
}

function createProfiles() {
  const desktop = [
    {
      name: 'desktop-chromium-1440x900',
      browserType: chromium,
      context: { viewport: { width: 1440, height: 900 }, locale: 'en-US', colorScheme: 'light', reducedMotion: 'reduce' },
    },
    {
      name: 'desktop-firefox-1366x768',
      browserType: firefox,
      context: { viewport: { width: 1366, height: 768 }, locale: 'en-US', colorScheme: 'light', reducedMotion: 'reduce' },
    },
    {
      name: 'desktop-webkit-1280x800',
      browserType: webkit,
      context: { viewport: { width: 1280, height: 800 }, locale: 'en-US', colorScheme: 'light', reducedMotion: 'reduce' },
    },
  ]

  const androidChrome = {
    name: 'android-chrome-pixel-portrait',
    browserType: chromium,
    context: {
      viewport: { width: 412, height: 915 },
      screen: { width: 412, height: 915 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 2.625,
      hasTouch: true,
      isMobile: true,
      userAgent: 'Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36',
    },
  }

  const androidLandscape = {
    name: 'android-chrome-pixel-landscape',
    browserType: chromium,
    context: {
      viewport: { width: 915, height: 412 },
      screen: { width: 915, height: 412 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 2.625,
      hasTouch: true,
      isMobile: true,
      userAgent: androidChrome.context.userAgent,
    },
  }

  const samsungInternet = {
    name: 'android-samsung-internet-galaxy',
    browserType: chromium,
    context: {
      viewport: { width: 384, height: 854 },
      screen: { width: 384, height: 854 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 3,
      hasTouch: true,
      isMobile: true,
      userAgent: 'Mozilla/5.0 (Linux; Android 15; SM-S938B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/28.0 Chrome/130.0.0.0 Mobile Safari/537.36',
    },
  }

  const harmonyOs = {
    name: 'harmonyos-standards-mobile-profile',
    browserType: chromium,
    context: {
      viewport: { width: 393, height: 873 },
      screen: { width: 393, height: 873 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 3,
      hasTouch: true,
      isMobile: true,
      userAgent: 'Mozilla/5.0 (Linux; HarmonyOS; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 HuaweiBrowser/16.0 Mobile Safari/537.36',
    },
  }

  const iphoneSafari = {
    name: 'ios-safari-iphone-portrait',
    browserType: webkit,
    context: {
      viewport: { width: 393, height: 852 },
      screen: { width: 393, height: 852 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 3,
      hasTouch: true,
      isMobile: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
    },
  }

  const iphoneLandscape = {
    name: 'ios-safari-iphone-landscape',
    browserType: webkit,
    context: {
      viewport: { width: 852, height: 393 },
      screen: { width: 852, height: 393 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 3,
      hasTouch: true,
      isMobile: true,
      userAgent: iphoneSafari.context.userAgent,
    },
  }

  const ipadSafari = {
    name: 'ipados-safari-tablet',
    browserType: webkit,
    context: {
      viewport: { width: 834, height: 1194 },
      screen: { width: 834, height: 1194 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 2,
      hasTouch: true,
      isMobile: true,
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
    },
  }

  const kaiOs = {
    name: 'kaios-feature-phone-layout-profile',
    browserType: firefox,
    context: {
      viewport: { width: 240, height: 320 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 1,
      hasTouch: false,
      userAgent: 'Mozilla/5.0 (Mobile; KaiOS/4.0; rv:123.0) Gecko/123.0 Firefox/123.0',
    },
  }

  const androidFirefox = {
    name: 'android-firefox-layout-profile',
    browserType: firefox,
    context: {
      viewport: { width: 412, height: 915 },
      locale: 'en-US',
      colorScheme: 'light',
      reducedMotion: 'reduce',
      deviceScaleFactor: 2.625,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (Android 15; Mobile; rv:142.0) Gecko/142.0 Firefox/142.0',
    },
  }

  return [...desktop, androidChrome, androidLandscape, samsungInternet, harmonyOs, iphoneSafari, iphoneLandscape, ipadSafari, androidFirefox, kaiOs]
}

async function collectVisualState(page) {
  return page.evaluate(() => {
    const doc = document.documentElement
    const visible = (element) => {
      const style = getComputedStyle(element)
      const rect = element.getBoundingClientRect()
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0
    }

    const insideIntentionalHorizontalScroller = (element) => {
      const scroller = element.closest('.swipe-track')
      if (!scroller) return false
      const style = getComputedStyle(scroller)
      return ['auto', 'scroll'].includes(style.overflowX)
    }

    const outsideViewport = [...document.querySelectorAll('a, button, select, .product-card, .site-header, .site-footer')]
      .filter(visible)
      .filter((element) => !insideIntentionalHorizontalScroller(element))
      .filter((element) => {
        const rect = element.getBoundingClientRect()
        return rect.left < -2 || rect.right > window.innerWidth + 2
      })
      .map((element) => `${element.tagName.toLowerCase()}.${String(element.className || '').replace(/\s+/g, '.')}`)

    const clippedText = [...document.querySelectorAll('a, button, select, h1, h2, h3, p')]
      .filter(visible)
      .filter((element) => {
        const style = getComputedStyle(element)
        const clipsHorizontally = ['hidden', 'clip'].includes(style.overflowX)
        return clipsHorizontally && element.scrollWidth > element.clientWidth + 1
      })
      .map((element) => `${element.tagName.toLowerCase()}.${String(element.className || '').replace(/\s+/g, '.')}`)

    const brokenImages = [...document.images]
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src)

    const productCards = [...document.querySelectorAll('.product-card h3')].map((element) => element.textContent?.trim() || '')

    return {
      lang: doc.lang,
      theme: doc.dataset.theme || null,
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      outsideViewport,
      clippedText,
      brokenImages,
      productCards,
      h1Count: document.querySelectorAll('h1').length,
      mainCount: document.querySelectorAll('main').length,
      footerCount: document.querySelectorAll('footer').length,
      viewportMeta: document.querySelector('meta[name="viewport"]')?.getAttribute('content') || null,
    }
  })
}

async function assertUiContract(page, label) {
  const state = await collectVisualState(page)
  assert(state.scrollWidth <= state.clientWidth + 1, `${label}: horizontal page overflow detected (${state.scrollWidth}px > ${state.clientWidth}px).`)
  assert(state.outsideViewport.length === 0, `${label}: visible controls/cards extend outside the viewport: ${state.outsideViewport.join(', ')}`)
  assert(state.clippedText.length === 0, `${label}: clipped text detected: ${state.clippedText.join(', ')}`)
  assert(state.brokenImages.length === 0, `${label}: broken images detected: ${state.brokenImages.join(', ')}`)
  assert(state.h1Count === 1 && state.mainCount === 1 && state.footerCount === 1, `${label}: semantic page structure is incomplete.`)
  assert(state.productCards.length === 6, `${label}: expected six Noitis product cards, found ${state.productCards.length}.`)
  assert(Boolean(state.viewportMeta?.includes('width=device-width')), `${label}: responsive viewport metadata is missing.`)
}

async function assertTouchTargets(page, label) {
  const undersized = await page.locator('button, .button, .brand-link, .language-switcher select').evaluateAll((elements) => elements
    .filter((element) => {
      const style = getComputedStyle(element)
      const rect = element.getBoundingClientRect()
      if (style.display === 'none' || style.visibility === 'hidden' || rect.width === 0 || rect.height === 0) return false
      return rect.width < 44 || rect.height < 44
    })
    .map((element) => `${element.tagName.toLowerCase()}.${String(element.className || '').replace(/\s+/g, '.')}:${Math.round(element.getBoundingClientRect().width)}x${Math.round(element.getBoundingClientRect().height)}`))

  assert(undersized.length === 0, `${label}: touch targets below 44x44 CSS pixels: ${undersized.join(', ')}`)
}

async function ensureHeaderControlsVisible(page, label, mobileLike) {
  if (!mobileLike) return

  const switcher = page.locator('.language-switcher select').first()
  const themeButton = page.locator('.theme-button').first()
  if (await switcher.isVisible() && await themeButton.isVisible()) return

  const menuButton = page.locator('.menu-button').first()
  assert(await menuButton.isVisible(), `${label}: mobile menu button is not visible while header controls are collapsed.`)
  await menuButton.click()
  await page.locator('#site-navigation').waitFor({ state: 'visible' })
  assert(await switcher.isVisible(), `${label}: language switcher did not become visible after opening mobile navigation.`)
  assert(await themeButton.isVisible(), `${label}: theme switcher did not become visible after opening mobile navigation.`)
}

async function verifyLanguagesAndThemes(page, label, mobileLike) {
  await ensureHeaderControlsVisible(page, label, mobileLike)

  const switcher = page.locator('.language-switcher select').first()
  assert(await switcher.count() === 1, `${label}: language switcher is missing.`)

  await switcher.selectOption('el')
  await page.waitForFunction(() => document.documentElement.lang === 'el')
  await assertUiContract(page, `${label}/el`)

  const greekPersisted = await page.evaluate(() => localStorage.getItem('noitis.language'))
  assert(greekPersisted === 'el', `${label}: Greek language choice was not persisted.`)

  const themeButton = page.locator('.theme-button').first()
  assert(await themeButton.count() === 1, `${label}: theme switcher is missing.`)
  await themeButton.click()
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark')
  await assertUiContract(page, `${label}/el/dark`)

  const darkPersisted = await page.evaluate(() => localStorage.getItem('noitis-theme'))
  assert(darkPersisted === 'dark', `${label}: dark theme choice was not persisted.`)

  await page.reload({ waitUntil: 'networkidle' })
  const persistedState = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    theme: document.documentElement.dataset.theme,
  }))
  assert(persistedState.lang === 'el' && persistedState.theme === 'dark', `${label}: language/theme preferences did not survive reload.`)

  await ensureHeaderControlsVisible(page, `${label}/after-reload`, mobileLike)
  await page.locator('.language-switcher select').first().selectOption('en')
  await page.waitForFunction(() => document.documentElement.lang === 'en')
  await page.locator('.theme-button').first().click()
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'light')
  await assertUiContract(page, `${label}/en/light-restored`)
}

async function verifyNavigation(page, label, mobileLike) {
  if (mobileLike) {
    const menuButton = page.locator('.menu-button').first()
    if (await menuButton.isVisible()) {
      await menuButton.click()
      assert(await page.locator('#site-navigation').isVisible(), `${label}: mobile navigation did not open.`)
      await page.keyboard.press('Escape')
      assert(!(await page.locator('#site-navigation').isVisible()), `${label}: Escape did not close mobile navigation.`)
      await menuButton.click()
      await page.locator('#site-navigation a[href="#products"]').click()
      assert((await page.evaluate(() => location.hash)) === '#products', `${label}: mobile navigation did not reach Products.`)
    }
  } else {
    for (const hash of ['#products', '#principles', '#about', '#contact']) {
      await page.locator(`#site-navigation a[href="${hash}"]`).click()
      assert((await page.evaluate(() => location.hash)) === hash, `${label}: desktop navigation did not reach ${hash}.`)
    }
  }
}

async function verifyLegalRoutes(page, label) {
  for (const route of ['privacy.html', 'terms.html', 'trademark.html']) {
    const response = await page.goto(routeUrl(route), { waitUntil: 'networkidle' })
    assert(response?.ok(), `${label}: ${route} did not load successfully.`)
    const state = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      h1Count: document.querySelectorAll('h1').length,
      mainCount: document.querySelectorAll('main').length,
      footerCount: document.querySelectorAll('footer').length,
      brokenImages: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).length,
    }))
    assert(state.scrollWidth <= state.clientWidth + 1, `${label}: horizontal overflow detected on ${route}.`)
    assert(state.h1Count === 1 && state.mainCount === 1 && state.footerCount === 1, `${label}: semantic structure is incomplete on ${route}.`)
    assert(state.brokenImages === 0, `${label}: broken image detected on ${route}.`)
  }
}

async function verifyProfile(profile) {
  const browser = await profile.browserType.launch({ headless: true })
  const context = await browser.newContext(profile.context)
  const page = await context.newPage()
  const label = `${hostOs}/${profile.name}`
  const browserErrors = []
  const failedResources = []

  page.on('pageerror', (error) => browserErrors.push(error.message))
  page.on('response', (response) => {
    if (response.status() >= 400 && ['document', 'script', 'stylesheet', 'image', 'font'].includes(response.request().resourceType())) {
      failedResources.push(`${response.status()} ${response.url()}`)
    }
  })

  try {
    const response = await page.goto(baseUrl, { waitUntil: 'networkidle' })
    assert(response?.ok(), `${label}: home page did not load successfully.`)
    await assertUiContract(page, `${label}/en/light`)

    const mobileLike = Boolean(profile.context.hasTouch) || profile.context.viewport.width < 900
    if (profile.context.hasTouch) await assertTouchTargets(page, label)
    await verifyNavigation(page, label, mobileLike)

    await page.goto(baseUrl, { waitUntil: 'networkidle' })
    await verifyLanguagesAndThemes(page, label, mobileLike)
    await verifyLegalRoutes(page, label)

    assert(browserErrors.length === 0, `${label}: browser page errors: ${browserErrors.join(' | ')}`)
    assert(failedResources.length === 0, `${label}: failed page resources: ${failedResources.join(' | ')}`)
    console.log(`PASS ${label}`)
  } catch (error) {
    mkdirSync(artifactRoot, { recursive: true })
    const screenshotPath = `${artifactRoot}/${slug(profile.name)}-${Date.now()}.png`
    try {
      await page.screenshot({ path: screenshotPath, fullPage: true })
      console.error(`Saved failure screenshot: ${screenshotPath}`)
    } catch {
      // Preserve the original failure when screenshot capture is unavailable.
    }
    throw error
  } finally {
    await context.close()
    await browser.close()
  }
}

try {
  await startLocalTargetIfNeeded()
  await waitForTarget(baseUrl, isLocalTarget ? 60 : 15)

  console.log('Noitis compatibility check')
  console.log(`Host OS: ${hostOs}`)
  console.log(`Target: ${baseUrl}`)
  console.log(`Started: ${startedAt}`)
  if (baseUrl === PUBLIC_URL) console.log('Mode: public GitHub Pages acceptance')
  else if (isLocalTarget) console.log('Mode: localhost:5173 development acceptance')
  else console.log('Mode: custom URL acceptance')

  for (const profile of createProfiles()) {
    await verifyProfile(profile)
  }

  console.log(`Verified cross-browser desktop UI plus Android, Samsung Internet, HarmonyOS standards-profile, iOS, iPadOS, mobile Firefox and KaiOS layout coverage on ${hostOs}.`)
  console.log('Important: mobile OS/browser profiles are automated compatibility emulations. Final acceptance still requires the documented real-device spot checks.')
} finally {
  if (devServer) devServer.kill('SIGTERM')
}
