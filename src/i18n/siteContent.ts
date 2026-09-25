import type { NoitisLanguage } from './LanguageContext'

type ProductCopy = {
  category: string
  description: string
  status: string
  note: string
}

type PrincipleCopy = {
  title: string
  text: string
}

export type SiteCopy = {
  skip: string
  homeAria: string
  menuOpenAria: string
  menuCloseAria: string
  mainNavAria: string
  nav: {
    products: string
    principles: string
    about: string
    contact: string
    privacy: string
    terms: string
    trademarks: string
  }
  theme: {
    light: string
    dark: string
    switchToLight: string
    switchToDark: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    support: string
    discover: string
    meet: string
  }
  purpose: {
    eyebrow: string
    title: string
    text: string
  }
  products: {
    eyebrow: string
    title: string
    intro: string
    open: string
    pricing: string
    all: string
    unavailable: string
    openAria: string
    pricingAria: string
  }
  productCopy: Record<string, ProductCopy>
  principles: {
    eyebrow: string
    title: string
    items: PrincipleCopy[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    email: string
  }
  future: {
    eyebrow: string
    title: string
    text: string
  }
  footer: {
    tagline: string
    rights: string
  }
}

const english: SiteCopy = {
  skip: 'Skip to main content',
  homeAria: 'Noitis home',
  menuOpenAria: 'Open navigation',
  menuCloseAria: 'Close navigation',
  mainNavAria: 'Main navigation',
  nav: {
    products: 'Products',
    principles: 'How we build',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    trademarks: 'Trademarks',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
  },
  hero: {
    eyebrow: 'From Greece, building for a wider world.',
    title: 'We build software for problems that should work better than they do.',
    lead: 'Noitis develops focused applications around real problems we come across in everyday life, business, and technology.',
    support: 'Usually they are not new problems. They are things people already deal with every day — fragmented information, too much manual coordination, unclear decisions, or work that is harder than it needs to be because the right tool does not exist yet.',
    discover: 'Explore our products',
    meet: 'About Noitis',
  },
  purpose: {
    eyebrow: 'Why we build',
    title: 'We start with the problem, not the technology.',
    text: 'We are interested in situations where something is harder, slower, or less reliable than it should be. Sometimes the cost is obvious. Sometimes it is the quieter cost of remembering too much, checking several systems before one decision, or never being completely sure the information in front of you is right. We look at that first, then decide whether software can genuinely make it simpler.',
  },
  products: {
    eyebrow: 'What we build',
    title: 'Different applications for different kinds of problems.',
    intro: 'We are not trying to build one platform that does everything. Each product has its own purpose and its own users. What connects them is the way we approach the problem.',
    open: 'Explore product',
    pricing: 'Pricing',
    all: 'See all products',
    unavailable: 'Public access not configured',
    openAria: 'Open {name}',
    pricingAria: 'Open {name} pricing',
  },
  productCopy: {
    AgentGate: {
      category: 'AI governance',
      description: 'Control over what AI agents are allowed to do — automatically, with approval, or not at all.',
      status: 'In development',
      note: 'AgentGate is under active development.',
    },
    AutoPaylot: {
      category: 'Financial obligations',
      description: 'A clearer way to organise recurring obligations before they all compete for the same money.',
      status: 'In development',
      note: 'AutoPaylot is under active development.',
    },
    'Business Resource Scheduler': {
      category: 'Operational scheduling',
      description: 'Scheduling based on the people, skills, equipment, space, and time the work actually requires.',
      status: 'In development',
      note: 'Business Resource Scheduler is under active development.',
    },
    EarnLogic: {
      category: 'Compensation intelligence',
      description: 'Connect performance, compensation rules, and calculation results so the number can be explained.',
      status: 'In development',
      note: 'EarnLogic is under active development.',
    },
    FamilyOS: {
      category: 'Family coordination',
      description: 'One shared place for the schedules, responsibilities, bookings, and information family life creates.',
      status: 'In development',
      note: 'FamilyOS is under active development.',
    },
    LegacyCI: {
      category: 'Database change intelligence',
      description: 'Understand database relationships and possible downstream impact before a change is deployed.',
      status: 'In development',
      note: 'LegacyCI is under active development.',
    },
  },
  principles: {
    eyebrow: 'How we work',
    title: 'We try to keep the product simple, even when the problem is not.',
    items: [
      { title: 'Understand the real workflow', text: 'We first try to understand how the work is actually done, including the inconvenient parts and the exceptions.' },
      { title: 'Make important information visible', text: 'Users should be able to understand what the system knows, what it decided, and — where it matters — why.' },
      { title: 'Keep meaningful control with people', text: 'Automation should remove repetitive work without making important decisions impossible to understand or control.' },
      { title: 'Design for difficult days too', text: 'People cancel, data is incomplete, equipment fails, connections stop working, and plans change. The product has to deal with that world too.' },
    ],
  },
  about: {
    eyebrow: 'Noitis',
    title: 'Built in Greece, with no reason to think only locally.',
    paragraphs: [
      'Noitis began from a simple idea: there are still many problems people have learned to work around instead of solving properly. We want to build software for those problems.',
      'Our name is inspired by the Greek ideas of nous and noesis — thought, understanding, and the formation of an idea. For us, that means understanding a problem clearly, imagining a better way for it to work, and then building it.',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Talk to Noitis',
    text: 'If you want to discuss a product, a use case, a pilot, a partnership, or simply what we are building, contact us directly.',
    email: 'Email Noitis',
  },
  future: {
    eyebrow: 'Where we are',
    title: 'We prefer to be clear about what exists and what we are still building.',
    text: 'Noitis and its products are still being developed. We show what already works, what is being worked on, and where we want each product to go without pretending unfinished work is finished.',
  },
  footer: {
    tagline: 'Built in Greece. Designed for a wider world.',
    rights: 'All rights reserved.',
  },
}

export const siteContent: Record<NoitisLanguage, SiteCopy> = {
  en: english,
  el: english,
}

export function replaceName(template: string, name: string) {
  return template.replace('{name}', name)
}
