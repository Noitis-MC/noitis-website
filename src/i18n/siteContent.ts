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
    eyebrow: 'From Greece. Built for the world.',
    title: 'Technology people can trust.',
    lead: 'Noitis builds focused software for difficult operational problems where clarity, control, and trustworthy decisions matter.',
    support: 'Our products are in active development. We describe current capability conservatively and keep future work separate from what is available today.',
    discover: 'Discover our products',
    meet: 'Meet Noitis™',
  },
  purpose: {
    eyebrow: 'Our purpose',
    title: 'Make advanced technology feel dependable.',
    text: 'We look for places where people lose time, control, or confidence because important work is fragmented across tools and manual processes. Then we engineer a clearer system around the real decision.',
  },
  products: {
    eyebrow: 'What we build',
    title: 'A family of focused products.',
    intro: 'Each product solves a different problem, but all of them share the same standard: intelligence should be understandable, controlled, and useful in the real workflow.',
    open: 'Open product',
    pricing: 'Pricing',
    unavailable: 'Public access not configured',
    openAria: 'Open {name}',
    pricingAria: 'Open {name} pricing',
  },
  productCopy: {
    AgentGate: {
      category: 'AI governance',
      description: 'A governance gateway for AI agents that applies organization policy and routes sensitive actions through human approval when required.',
      status: 'In development',
      note: 'The governance control plane and localhost developer-connectivity contracts are implemented; production integration adapters and approval delivery remain in development.',
    },
    AutoPaylot: {
      category: 'Financial obligations',
      description: 'Financial-obligation control for organizing recurring commitments and deciding what is ready before money moves.',
      status: 'In development',
      note: 'Read-only sandbox bank connectivity and simulated payment controls are implemented; real payment execution remains disabled.',
    },
    'Business Resource Scheduler': {
      category: 'Operational scheduling',
      description: 'Constraint-based scheduling for work that depends on people, skills, equipment, spaces, locations, availability, and business rules.',
      status: 'In development',
      note: 'Operational scheduling and adaptive planning are implemented; external calendar, API, webhook, and recurring synchronization capabilities remain in development.',
    },
    EarnLogic: {
      category: 'Compensation intelligence',
      description: 'Commercial performance and incentive compensation connected by calculation lineage that explains monetary results.',
      status: 'In development',
      note: 'Governed compensation calculations, statements, audit evidence, and the canonical ingestion foundation are implemented; productized CRM, ERP, HRIS, payroll, and public API integrations remain in development.',
    },
    FamilyOS: {
      category: 'Family coordination',
      description: 'A parent-first, child-centred experience for discovery, bookings, schedules, saved items, and everyday family coordination.',
      status: 'In development',
      note: 'Family coordination, booking/calendar workflows, and privacy-aware OpenStreetMap discovery are implemented; the provider platform, authoritative availability, and real payments remain in development.',
    },
    LegacyCI: {
      category: 'Database change intelligence',
      description: 'Dependency, lineage, and pre-change impact analysis for complex database systems with explicit evidence and visible uncertainty.',
      status: 'In development',
      note: 'Certified read-only PostgreSQL 16–18 metadata connectivity is implemented; production semantic lineage parsing and change-impact semantics remain in development.',
    },
  },
  principles: {
    eyebrow: 'How we build',
    title: 'Simple on the surface. Serious underneath.',
    items: [
      { title: 'Trust first', text: 'Security, transparency, reliability, and user control are part of the product—not finishing touches.' },
      { title: 'Useful intelligence', text: 'Advanced technology should remove real work and uncertainty, not create complexity for its own sake.' },
      { title: 'Human control', text: 'Automation should expand capability while keeping important decisions understandable and accountable.' },
      { title: 'Built for real people', text: 'Readable, predictable interfaces should work for people of different ages and technical experience.' },
    ],
  },
  about: {
    eyebrow: 'Our roots',
    title: 'Greek foundations. Global ambition.',
    paragraphs: [
      'Noitis is a technology brand being built in Greece with an international horizon. Our name is inspired by the Greek intellectual tradition around nous and noesis: mind, thought, understanding, and the conception of an idea.',
      'For us, Noitis is the one who sees what could exist before it exists—and engineers it into reality. That becomes a practical standard: technology should help people understand better, decide with confidence, and act with greater control.',
      "Noitis began with a builder's question: where are people and businesses still accepting friction, uncertainty, or unnecessary manual work simply because a better system has not been built yet?",
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Talk to Noitis.',
    text: 'For company, product, privacy, legal, or brand enquiries, use the contact address below. The public website does not use a contact form or marketing tracker.',
    email: 'Email Noitis',
  },
  future: {
    eyebrow: 'Where we are going',
    title: 'Between human intention and machine capability.',
    text: 'As software becomes more capable of reasoning, coordinating, and acting, trust will matter more—not less. Noitis is building toward systems that make that capability understandable, useful, and safe to rely on.',
  },
  footer: {
    tagline: 'Built in Greece. Designed for a global future.',
    rights: 'All rights reserved.',
  },
}

const greek: SiteCopy = {
  skip: 'Μετάβαση στο κύριο περιεχόμενο',
  homeAria: 'Αρχική Noitis',
  menuOpenAria: 'Άνοιγμα πλοήγησης',
  menuCloseAria: 'Κλείσιμο πλοήγησης',
  mainNavAria: 'Κύρια πλοήγηση',
  nav: {
    products: 'Προϊόντα',
    principles: 'Πώς δημιουργούμε',
    about: 'Σχετικά',
    contact: 'Επικοινωνία',
    privacy: 'Απόρρητο',
    terms: 'Όροι',
    trademarks: 'Εμπορικά σήματα',
  },
  theme: {
    light: 'Φωτεινό',
    dark: 'Σκοτεινό',
    switchToLight: 'Μετάβαση σε φωτεινό θέμα',
    switchToDark: 'Μετάβαση σε σκοτεινό θέμα',
  },
  hero: {
    eyebrow: 'Από την Ελλάδα. Για όλο τον κόσμο.',
    title: 'Τεχνολογία που οι άνθρωποι μπορούν να εμπιστευτούν.',
    lead: 'Η Noitis δημιουργεί στοχευμένο λογισμικό για δύσκολα επιχειρησιακά προβλήματα, όπου η σαφήνεια, ο έλεγχος και οι αξιόπιστες αποφάσεις έχουν σημασία.',
    support: 'Τα προϊόντα μας βρίσκονται σε ενεργή ανάπτυξη. Περιγράφουμε συντηρητικά τις σημερινές δυνατότητες και ξεχωρίζουμε καθαρά τη μελλοντική εργασία από ό,τι είναι διαθέσιμο σήμερα.',
    discover: 'Ανακαλύψτε τα προϊόντα μας',
    meet: 'Γνωρίστε τη Noitis™',
  },
  purpose: {
    eyebrow: 'Ο σκοπός μας',
    title: 'Να κάνουμε την προηγμένη τεχνολογία να εμπνέει σιγουριά.',
    text: 'Αναζητούμε σημεία όπου άνθρωποι και επιχειρήσεις χάνουν χρόνο, έλεγχο ή εμπιστοσύνη επειδή σημαντική εργασία είναι κατακερματισμένη σε εργαλεία και χειροκίνητες διαδικασίες. Έπειτα σχεδιάζουμε ένα καθαρότερο σύστημα γύρω από την πραγματική απόφαση.',
  },
  products: {
    eyebrow: 'Τι δημιουργούμε',
    title: 'Μια οικογένεια στοχευμένων προϊόντων.',
    intro: 'Κάθε προϊόν λύνει διαφορετικό πρόβλημα, αλλά όλα μοιράζονται το ίδιο πρότυπο: η ευφυΐα πρέπει να είναι κατανοητή, ελεγχόμενη και χρήσιμη στην πραγματική ροή εργασίας.',
    open: 'Άνοιγμα προϊόντος',
    pricing: 'Τιμολόγηση',
    unavailable: 'Η δημόσια πρόσβαση δεν έχει ρυθμιστεί',
    openAria: 'Άνοιγμα {name}',
    pricingAria: 'Άνοιγμα τιμολόγησης {name}',
  },
  productCopy: {
    AgentGate: {
      category: 'Διακυβέρνηση AI',
      description: 'Μια πύλη διακυβέρνησης για AI agents που εφαρμόζει τις πολιτικές του οργανισμού και δρομολογεί ευαίσθητες ενέργειες για ανθρώπινη έγκριση όταν απαιτείται.',
      status: 'Υπό ανάπτυξη',
      note: 'Το governance control plane και τα συμβόλαια διασύνδεσης για localhost έχουν υλοποιηθεί· οι production integration adapters και η παράδοση εγκρίσεων παραμένουν υπό ανάπτυξη.',
    },
    AutoPaylot: {
      category: 'Οικονομικές υποχρεώσεις',
      description: 'Έλεγχος οικονομικών υποχρεώσεων για την οργάνωση επαναλαμβανόμενων δεσμεύσεων και την απόφαση του τι είναι έτοιμο πριν κινηθούν χρήματα.',
      status: 'Υπό ανάπτυξη',
      note: 'Η read-only σύνδεση με sandbox τράπεζας και οι έλεγχοι προσομοιωμένων πληρωμών έχουν υλοποιηθεί· η πραγματική εκτέλεση πληρωμών παραμένει απενεργοποιημένη.',
    },
    'Business Resource Scheduler': {
      category: 'Επιχειρησιακός προγραμματισμός',
      description: 'Προγραμματισμός βάσει περιορισμών για εργασία που εξαρτάται από ανθρώπους, δεξιότητες, εξοπλισμό, χώρους, τοποθεσίες, διαθεσιμότητα και επιχειρησιακούς κανόνες.',
      status: 'Υπό ανάπτυξη',
      note: 'Ο επιχειρησιακός προγραμματισμός και ο προσαρμοστικός σχεδιασμός έχουν υλοποιηθεί· οι δυνατότητες εξωτερικού ημερολογίου, API, webhook και επαναλαμβανόμενου συγχρονισμού παραμένουν υπό ανάπτυξη.',
    },
    EarnLogic: {
      category: 'Ευφυΐα αποδοχών',
      description: 'Εμπορική απόδοση και μεταβλητές αμοιβές συνδεδεμένες με γραμμή υπολογισμού που εξηγεί τα χρηματικά αποτελέσματα.',
      status: 'Υπό ανάπτυξη',
      note: 'Οι ελεγχόμενοι υπολογισμοί αποδοχών, οι καταστάσεις, τα audit evidence και η κανονική βάση ingestion έχουν υλοποιηθεί· οι productized διασυνδέσεις CRM, ERP, HRIS, payroll και public API παραμένουν υπό ανάπτυξη.',
    },
    FamilyOS: {
      category: 'Οικογενειακός συντονισμός',
      description: 'Μια εμπειρία με προτεραιότητα στον γονέα και επίκεντρο το παιδί για ανακάλυψη, κρατήσεις, προγράμματα, αποθηκευμένα στοιχεία και καθημερινό οικογενειακό συντονισμό.',
      status: 'Υπό ανάπτυξη',
      note: 'Ο οικογενειακός συντονισμός, οι ροές booking/calendar και η ανακάλυψη μέσω OpenStreetMap με σεβασμό στην ιδιωτικότητα έχουν υλοποιηθεί· η πλατφόρμα παρόχων, η authoritative διαθεσιμότητα και οι πραγματικές πληρωμές παραμένουν υπό ανάπτυξη.',
    },
    LegacyCI: {
      category: 'Ευφυΐα αλλαγών βάσεων δεδομένων',
      description: 'Ανάλυση εξαρτήσεων, lineage και επιπτώσεων πριν από αλλαγές σε σύνθετα συστήματα βάσεων δεδομένων, με σαφή τεκμήρια και ορατή αβεβαιότητα.',
      status: 'Υπό ανάπτυξη',
      note: 'Η πιστοποιημένη read-only σύνδεση μεταδεδομένων PostgreSQL 16–18 έχει υλοποιηθεί· το production semantic lineage parsing και τα semantics επιπτώσεων αλλαγών παραμένουν υπό ανάπτυξη.',
    },
  },
  principles: {
    eyebrow: 'Πώς δημιουργούμε',
    title: 'Απλό στην επιφάνεια. Σοβαρό από κάτω.',
    items: [
      { title: 'Πρώτα η εμπιστοσύνη', text: 'Η ασφάλεια, η διαφάνεια, η αξιοπιστία και ο έλεγχος από τον χρήστη είναι μέρος του προϊόντος — όχι τελευταίες πινελιές.' },
      { title: 'Χρήσιμη ευφυΐα', text: 'Η προηγμένη τεχνολογία πρέπει να αφαιρεί πραγματική δουλειά και αβεβαιότητα, όχι να δημιουργεί πολυπλοκότητα για χάρη της πολυπλοκότητας.' },
      { title: 'Ανθρώπινος έλεγχος', text: 'Η αυτοματοποίηση πρέπει να διευρύνει τις δυνατότητες, διατηρώντας τις σημαντικές αποφάσεις κατανοητές και υπόλογες.' },
      { title: 'Για πραγματικούς ανθρώπους', text: 'Ευανάγνωστες και προβλέψιμες διεπαφές πρέπει να λειτουργούν για ανθρώπους διαφορετικών ηλικιών και τεχνικής εμπειρίας.' },
    ],
  },
  about: {
    eyebrow: 'Οι ρίζες μας',
    title: 'Ελληνικές βάσεις. Παγκόσμια φιλοδοξία.',
    paragraphs: [
      'Η Noitis είναι ένα τεχνολογικό brand που χτίζεται στην Ελλάδα με διεθνή ορίζοντα. Το όνομά μας αντλεί έμπνευση από την ελληνική πνευματική παράδοση γύρω από τον νου και τη νόηση: σκέψη, κατανόηση και σύλληψη μιας ιδέας.',
      'Για εμάς, Noitis είναι εκείνος που βλέπει τι θα μπορούσε να υπάρξει πριν υπάρξει — και το μετατρέπει με μηχανική σε πραγματικότητα. Αυτό γίνεται πρακτικό πρότυπο: η τεχνολογία πρέπει να βοηθά τους ανθρώπους να κατανοούν καλύτερα, να αποφασίζουν με σιγουριά και να ενεργούν με περισσότερο έλεγχο.',
      'Η Noitis ξεκίνησε από ένα ερώτημα δημιουργού: πού εξακολουθούν άνθρωποι και επιχειρήσεις να αποδέχονται τριβή, αβεβαιότητα ή περιττή χειροκίνητη εργασία απλώς επειδή δεν έχει ακόμη δημιουργηθεί ένα καλύτερο σύστημα;',
    ],
  },
  contact: {
    eyebrow: 'Επικοινωνία',
    title: 'Μιλήστε με τη Noitis.',
    text: 'Για θέματα εταιρείας, προϊόντων, απορρήτου, νομικά ζητήματα ή θέματα brand, χρησιμοποιήστε την παρακάτω διεύθυνση επικοινωνίας. Ο δημόσιος ιστότοπος δεν χρησιμοποιεί φόρμα επικοινωνίας ή marketing tracker.',
    email: 'Email στη Noitis',
  },
  future: {
    eyebrow: 'Πού κατευθυνόμαστε',
    title: 'Ανάμεσα στην ανθρώπινη πρόθεση και τη δυνατότητα της μηχανής.',
    text: 'Καθώς το λογισμικό αποκτά μεγαλύτερη ικανότητα συλλογισμού, συντονισμού και δράσης, η εμπιστοσύνη θα έχει περισσότερη — όχι λιγότερη — σημασία. Η Noitis χτίζει συστήματα που κάνουν αυτή τη δυνατότητα κατανοητή, χρήσιμη και ασφαλή για να μπορεί κανείς να βασίζεται σε αυτή.',
  },
  footer: {
    tagline: 'Δημιουργείται στην Ελλάδα. Σχεδιάζεται για ένα παγκόσμιο μέλλον.',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
  },
}

export const siteContent: Record<NoitisLanguage, SiteCopy> = {
  en: english,
  el: greek,
}

export function replaceName(template: string, name: string) {
  return template.replace('{name}', name)
}
