import agentGateLogoLight from '../media/AgentGate Light.png'
import agentGateLogoDark from '../media/AgentGate Dark.png'
import autoPaylotLogoLight from '../media/AutoPaylot Light.png'
import autoPaylotLogoDark from '../media/AutoPaylot Dark.png'
import brsLogoLight from '../media/BRS Light.png'
import brsLogoDark from '../media/BRS Dark.png'
import elogLogoLight from '../media/EarnLogic Light.png'
import elogLogoDark from '../media/EarnLogic Dark.png'
import fosLogoLight from '../media/FamilyOS Light.png'
import fosLogoDark from '../media/FamilyOS Dark.png'
import lciLogoLight from '../media/LegacyCI Light.png'
import lciLogoDark from '../media/LegacyCI Dark.png'

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
  category: string
  description: string
  status: 'In development' | 'Publicly available'
  publicUrl?: string
  note: string
  href: string
  pricingHref?: string
  logoLight: string
  logoDark: string
}

// Public URLs are approved destination links, not local development servers.
export const products: ProductCatalogEntry[] = [
  {
    slug: 'agentgate',
    name: 'AgentGate',
    category: 'AI governance',
    description: 'A governance gateway for AI agents that applies organization policy and routes sensitive actions through human approval when required.',
    status: 'In development',
    note: 'Application-level release hardening is complete; public production infrastructure and launch remain pending.',
    href: './agentgate.html',
    logoLight: agentGateLogoLight,
    logoDark: agentGateLogoDark,
  },
  {
    slug: 'autopaylot',
    name: 'AutoPaylot',
    category: 'Financial obligations',
    description: 'Financial-obligation control for organizing recurring commitments and deciding what is ready before money moves.',
    status: 'In development',
    note: 'Release-candidate engineering is implemented; real bank execution remains disabled while external acceptance and production launch work remain pending.',
    href: './autopaylot.html',
    logoLight: autoPaylotLogoLight,
    logoDark: autoPaylotLogoDark,
  },
  {
    slug: 'business-resource-scheduler',
    name: 'Business Resource Scheduler',
    category: 'Operational scheduling',
    description: 'Constraint-based scheduling for work that depends on people, skills, equipment, spaces, locations, availability, and business rules.',
    status: 'Publicly available',
    publicUrl: 'https://business-rs.gr/',
    note: 'The public Business Resource Scheduler website is available. Access to organization workspaces is managed by the application.',
    href: './business-resource-scheduler.html',
    logoLight: brsLogoLight,
    logoDark: brsLogoDark,
  },
  {
    slug: 'earnlogic',
    name: 'EarnLogic',
    category: 'Compensation intelligence',
    description: 'Commercial performance and incentive compensation connected by calculation lineage that explains monetary results.',
    status: 'In development',
    note: 'Commercial and enterprise engineering plus local acceptance are implemented; browser/device acceptance and production hardening remain pending.',
    href: './earnlogic.html',
    logoLight: elogLogoLight,
    logoDark: elogLogoDark,
  },
  {
    slug: 'familyos',
    name: 'FamilyOS',
    category: 'Family coordination',
    description: 'A parent-first, child-centred experience for discovery, bookings, schedules, saved items, and everyday family coordination.',
    status: 'Publicly available',
    publicUrl: 'https://family-os.gr/',
    note: 'The public FamilyOS website is available. Access to individual family workspaces is managed by the application.',
    href: './familyos.html',
    logoLight: fosLogoLight,
    logoDark: fosLogoDark,
  },
  {
    slug: 'legacyci',
    name: 'LegacyCI',
    category: 'Database change intelligence',
    description: 'Dependency, lineage, and pre-change impact analysis for complex database systems with explicit evidence and visible uncertainty.',
    status: 'In development',
    note: 'Enterprise workflow capabilities and local acceptance are complete; production hardening, infrastructure, and launch remain pending.',
    href: './legacyci.html',
    logoLight: lciLogoLight,
    logoDark: lciLogoDark,
  },
]
