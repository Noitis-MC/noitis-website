import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const DEFAULT_SITE_URL = 'https://noitis.gr/'

function normalizeSiteUrl(value: string | undefined) {
  const url = new URL(value?.trim() || DEFAULT_SITE_URL)
  if (!url.pathname.endsWith('/')) url.pathname += '/'
  return url.toString()
}

function analyticsBeacon(token: string) {
  if (!/^[A-Za-z0-9_-]{16,128}$/.test(token)) {
    throw new Error('VITE_CLOUDFLARE_WEB_ANALYTICS_TOKEN has an invalid format.')
  }

  return `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"${token}"}'></script>`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || process.env.VITE_SITE_URL)
  const analyticsToken = (env.VITE_CLOUDFLARE_WEB_ANALYTICS_TOKEN || process.env.VITE_CLOUDFLARE_WEB_ANALYTICS_TOKEN || '').trim()

  return {
    // Relative asset paths keep one artifact portable between the GitHub Pages
    // project URL and a future custom Noitis domain.
    base: './',
    plugins: [
      react(),
      {
        name: 'noitis-publication-metadata',
        transformIndexHtml(html) {
          let transformed = html.replaceAll('%NOITIS_SITE_URL%', siteUrl)
          if (mode === 'production' && analyticsToken) {
            transformed = transformed.replace('</body>', `  ${analyticsBeacon(analyticsToken)}\n  </body>`)
          }
          return transformed
        },
      },
    ],
    server: {
      port: 5173,
      strictPort: true,
    },
    build: {
      rollupOptions: {
        input: {
          main: fileURLToPath(new URL('./index.html', import.meta.url)),
          agentgate: fileURLToPath(new URL('./agentgate.html', import.meta.url)),
          autopaylot: fileURLToPath(new URL('./autopaylot.html', import.meta.url)),
          businessResourceScheduler: fileURLToPath(new URL('./business-resource-scheduler.html', import.meta.url)),
          earnlogic: fileURLToPath(new URL('./earnlogic.html', import.meta.url)),
          familyos: fileURLToPath(new URL('./familyos.html', import.meta.url)),
          legacyci: fileURLToPath(new URL('./legacyci.html', import.meta.url)),
          privacy: fileURLToPath(new URL('./privacy.html', import.meta.url)),
          terms: fileURLToPath(new URL('./terms.html', import.meta.url)),
          trademark: fileURLToPath(new URL('./trademark.html', import.meta.url)),
        },
      },
    },
  }
})
