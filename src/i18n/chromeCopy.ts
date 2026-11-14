import type { NoitisLanguage } from './LanguageContext'

// Shared header/footer copy. Every page uses the same navigation, so the
// labels live in one place instead of being repeated per page type.
export type ChromeCopy = {
  skip: string
  homeAria: string
  navAria: string
  menuOpen: string
  menuClose: string
  nav: { home: string; products: string; how: string; about: string; contact: string; privacy: string; terms: string; trademarks: string }
  switchToLight: string
  switchToDark: string
  languageLabel: string
  footerTagline: string
  footerExplore: string
  footerLegal: string
  rights: string
  email: string
  statusLive: string
  statusDevelopment: string
  openProduct: string
  learnMore: string
}

export const chromeCopy: Record<NoitisLanguage, ChromeCopy> = {
  en: {
    skip: 'Skip to main content',
    homeAria: 'Noitis home',
    navAria: 'Main navigation',
    menuOpen: 'Open navigation',
    menuClose: 'Close navigation',
    nav: { home: 'Home', products: 'Products', how: 'How we build', about: 'About', contact: 'Contact', privacy: 'Privacy', terms: 'Terms', trademarks: 'Trademarks' },
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    languageLabel: 'Language',
    footerTagline: 'Built in Greece. Designed for a wider world.',
    footerExplore: 'Explore',
    footerLegal: 'Legal',
    rights: 'All rights reserved.',
    email: 'Email Noitis',
    statusLive: 'Live now',
    statusDevelopment: 'In development',
    openProduct: 'Open {name}',
    learnMore: 'Learn more',
  },
  el: {
    skip: 'Μετάβαση στο κύριο περιεχόμενο',
    homeAria: 'Αρχική σελίδα Noitis',
    navAria: 'Κύρια πλοήγηση',
    menuOpen: 'Άνοιγμα μενού',
    menuClose: 'Κλείσιμο μενού',
    nav: { home: 'Αρχική', products: 'Προϊόντα', how: 'Πώς δημιουργούμε', about: 'Η Noitis', contact: 'Επικοινωνία', privacy: 'Απόρρητο', terms: 'Όροι χρήσης', trademarks: 'Εμπορικά σήματα' },
    switchToLight: 'Μετάβαση σε φωτεινό θέμα',
    switchToDark: 'Μετάβαση σε σκούρο θέμα',
    languageLabel: 'Γλώσσα',
    footerTagline: 'Χτίζεται στην Ελλάδα. Σχεδιάζεται για έναν ευρύτερο κόσμο.',
    footerExplore: 'Εξερευνήστε',
    footerLegal: 'Νομικά',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
    email: 'Στείλτε email στη Noitis',
    statusLive: 'Διαθέσιμο τώρα',
    statusDevelopment: 'Υπό ανάπτυξη',
    openProduct: 'Άνοιγμα {name}',
    learnMore: 'Μάθετε περισσότερα',
  },
}

export const CONTACT_EMAIL = 'chouliarasmatthaios@gmail.com'
