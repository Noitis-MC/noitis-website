import { existsSync, writeFileSync } from 'node:fs'

const target = '.env.development.local'
if (existsSync(target) || existsSync('.env.development')) {
  process.exit(0)
}

const localEnvironment = `VITE_SITE_URL=http://localhost:5173/
`

writeFileSync(target, localEnvironment, 'utf8')
console.log(`Created ${target} for the local Noitis website.`)
