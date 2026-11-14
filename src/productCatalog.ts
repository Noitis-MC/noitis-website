import agentGateLogoLight from '../media/AgentGate Light.webp'
import agentGateLogoDark from '../media/AgentGate Dark.webp'
import autoPaylotLogoLight from '../media/AutoPaylot Light.webp'
import autoPaylotLogoDark from '../media/AutoPaylot Dark.webp'
import brsLogoLight from '../media/BRS Light.webp'
import brsLogoDark from '../media/BRS Dark.webp'
import elogLogoLight from '../media/EarnLogic Light.webp'
import elogLogoDark from '../media/EarnLogic Dark.webp'
import fosLogoLight from '../media/FamilyOS Light.webp'
import fosLogoDark from '../media/FamilyOS Dark.webp'
import lciLogoLight from '../media/LegacyCI Light.webp'
import lciLogoDark from '../media/LegacyCI Dark.webp'

export type ProductSlug =
  | 'agentgate'
  | 'autopaylot'
  | 'business-resource-scheduler'
  | 'earnlogic'
  | 'familyos'
  | 'legacyci'

export type ProductCatalogEntry = {
  slug: ProductSlug
  name: string
  /** Set only when the product is live; its presence is what marks a product as publicly available. */
  publicUrl?: string
  href: string
  logoLight: string
  logoDark: string
}

// Category and description copy lives in the localized content files.
// Public URLs are approved destination links, not local development servers.
export const products: ProductCatalogEntry[] = [
  {
    slug: 'agentgate',
    name: 'AgentGate',
    href: './agentgate.html',
    logoLight: agentGateLogoLight,
    logoDark: agentGateLogoDark,
  },
  {
    slug: 'autopaylot',
    name: 'AutoPaylot',
    href: './autopaylot.html',
    logoLight: autoPaylotLogoLight,
    logoDark: autoPaylotLogoDark,
  },
  {
    slug: 'business-resource-scheduler',
    name: 'Business Resource Scheduler',
    publicUrl: 'https://business-rs.gr/',
    href: './business-resource-scheduler.html',
    logoLight: brsLogoLight,
    logoDark: brsLogoDark,
  },
  {
    slug: 'earnlogic',
    name: 'EarnLogic',
    href: './earnlogic.html',
    logoLight: elogLogoLight,
    logoDark: elogLogoDark,
  },
  {
    slug: 'familyos',
    name: 'FamilyOS',
    publicUrl: 'https://family-os.gr/',
    href: './familyos.html',
    logoLight: fosLogoLight,
    logoDark: fosLogoDark,
  },
  {
    slug: 'legacyci',
    name: 'LegacyCI',
    href: './legacyci.html',
    logoLight: lciLogoLight,
    logoDark: lciLogoDark,
  },
]
