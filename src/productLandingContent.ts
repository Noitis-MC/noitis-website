import type { NoitisLanguage } from './i18n/LanguageContext'
import type { ProductSlug } from './productCatalog'

export type ProductLandingContent = {
  headline: string
  intro: string
  problem: string
  capabilities: Array<{ title: string; text: string }>
  boundary: string
  value: string
}

export type ProductLandingUiCopy = {
  back: string
  products: string
  about: string
  contact: string
  privacy: string
  menuOpenAria: string
  menuCloseAria: string
  mainNavAria: string
  switchToLight: string
  switchToDark: string
  light: string
  dark: string
  status: string
  accessEyebrow: string
  accessTitle: string
  accessText: string
  problemEyebrow: string
  problemTitle: string
  capabilityEyebrow: string
  capabilityTitle: string
  boundaryEyebrow: string
  boundaryTitle: string
  valueEyebrow: string
  valueTitle: string
  valueText: string
  email: string
  footerTagline: string
  rights: string
}

export const landingUiCopy: Record<NoitisLanguage, ProductLandingUiCopy> = {
  en: {
    back: 'Back to Noitis products',
    products: 'Products',
    about: 'About Noitis',
    contact: 'Contact',
    privacy: 'Privacy',
    menuOpenAria: 'Open navigation',
    menuCloseAria: 'Close navigation',
    mainNavAria: 'Product navigation',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    light: 'Light',
    dark: 'Dark',
    status: 'In development',
    accessEyebrow: 'Public access',
    accessTitle: 'The application itself is not public yet',
    accessText: 'Noitis is keeping operational product access on hold while pre-production infrastructure is prepared. This page is an informational product landing page only.',
    problemEyebrow: 'Why it exists',
    problemTitle: 'Built around a real operational problem',
    capabilityEyebrow: 'What it does',
    capabilityTitle: 'Focused capabilities, designed as one system',
    boundaryEyebrow: 'Public boundary',
    boundaryTitle: 'Landing page outside. Operational data inside',
    valueEyebrow: 'Interested?',
    valueTitle: 'Talk to Noitis about the product',
    valueText: 'For product, pilot, partnership, or commercial enquiries, contact Noitis directly. Public application access will be introduced only when the corresponding environment is ready.',
    email: 'Email Noitis',
    footerTagline: 'Built in Greece. Designed for a global future.',
    rights: 'All rights reserved.',
  },
  el: {
    back: 'Πίσω στα προϊόντα της Noitis',
    products: 'Προϊόντα',
    about: 'Η Noitis',
    contact: 'Επικοινωνία',
    privacy: 'Απόρρητο',
    menuOpenAria: 'Άνοιγμα μενού',
    menuCloseAria: 'Κλείσιμο μενού',
    mainNavAria: 'Πλοήγηση προϊόντος',
    switchToLight: 'Μετάβαση σε φωτεινό θέμα',
    switchToDark: 'Μετάβαση σε σκούρο θέμα',
    light: 'Φωτεινό',
    dark: 'Σκούρο',
    status: 'Υπό ανάπτυξη',
    accessEyebrow: 'Δημόσια πρόσβαση',
    accessTitle: 'Η ίδια η εφαρμογή δεν είναι ακόμη δημόσια',
    accessText: 'Η Noitis διατηρεί την πρόσβαση στις λειτουργικές εφαρμογές σε αναμονή μέχρι να ολοκληρωθεί η υποδομή pre-production. Η συγκεκριμένη σελίδα είναι αποκλειστικά ενημερωτική παρουσίαση του προϊόντος.',
    problemEyebrow: 'Γιατί υπάρχει',
    problemTitle: 'Σχεδιασμένο γύρω από ένα πραγματικό λειτουργικό πρόβλημα',
    capabilityEyebrow: 'Τι κάνει',
    capabilityTitle: 'Στοχευμένες δυνατότητες, σχεδιασμένες ως ένα ενιαίο σύστημα',
    boundaryEyebrow: 'Δημόσιο όριο',
    boundaryTitle: 'Η παρουσίαση είναι δημόσια. Τα λειτουργικά δεδομένα παραμένουν ιδιωτικά',
    valueEyebrow: 'Ενδιαφέρεστε;',
    valueTitle: 'Μιλήστε με τη Noitis για το προϊόν',
    valueText: 'Για θέματα προϊόντος, πιλοτικής χρήσης, συνεργασίας ή εμπορικού ενδιαφέροντος, επικοινωνήστε απευθείας με τη Noitis. Η δημόσια πρόσβαση στην εφαρμογή θα ενεργοποιηθεί μόνο όταν το αντίστοιχο περιβάλλον είναι έτοιμο.',
    email: 'Στείλτε email στη Noitis',
    footerTagline: 'Χτίζεται στην Ελλάδα. Σχεδιάζεται για ένα παγκόσμιο μέλλον.',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
  },
}

export const productLandingContent: Record<ProductSlug, Record<NoitisLanguage, ProductLandingContent>> = {
  agentgate: {
    en: {
      headline: 'Human control for AI-agent actions',
      intro: 'AgentGate gives organizations a control plane between autonomous software and sensitive actions, so policy, approval, identity, and evidence can travel with the decision.',
      problem: 'AI agents can move faster than the governance processes around them. AgentGate is designed for the point where an action needs a clear answer: allow it, require a human decision, or block it.',
      capabilities: [
        { title: 'Policy decisioning', text: 'Apply organization, project, agent, environment, and risk-aware rules with deterministic decision precedence.' },
        { title: 'Human approvals', text: 'Route governed actions into review workflows with explicit approval, denial, escalation, delegation, expiry, and audit history.' },
        { title: 'Trusted identities', text: 'Separate human sessions from scoped agent/service credentials and keep authorization tied to trusted server-side context.' },
        { title: 'Operational evidence', text: 'Retain governed activity, integration outcomes, callbacks, and administrative evidence so important decisions remain explainable.' },
      ],
      boundary: 'This public page does not expose AgentGate workspaces, demo tenants, credentials, policy data, approval queues, provider secrets, integrations, or operational activity.',
      value: 'AgentGate is for teams that want capable automation without surrendering organizational control over sensitive actions.',
    },
    el: {
      headline: 'Ανθρώπινος έλεγχος στις ενέργειες AI agents',
      intro: 'Το AgentGate λειτουργεί ως επίπεδο ελέγχου ανάμεσα σε αυτόνομο λογισμικό και ευαίσθητες ενέργειες, ώστε πολιτικές, εγκρίσεις, ταυτότητα και τεκμήρια να ακολουθούν κάθε απόφαση.',
      problem: 'Οι AI agents μπορούν να κινούνται ταχύτερα από τις διαδικασίες διακυβέρνησης μιας εταιρείας. Το AgentGate εστιάζει στο κρίσιμο σημείο: επιτρέπεται η ενέργεια, χρειάζεται ανθρώπινη έγκριση ή πρέπει να αποκλειστεί;',
      capabilities: [
        { title: 'Αποφάσεις βάσει πολιτικής', text: 'Εφαρμόζει κανόνες οργανισμού, έργου, agent, περιβάλλοντος και κινδύνου με καθορισμένη σειρά προτεραιότητας.' },
        { title: 'Ανθρώπινες εγκρίσεις', text: 'Δρομολογεί ελεγχόμενες ενέργειες σε ροές έγκρισης, απόρριψης, κλιμάκωσης, ανάθεσης, λήξης και audit history.' },
        { title: 'Αξιόπιστες ταυτότητες', text: 'Διαχωρίζει τα ανθρώπινα sessions από scoped agent/service credentials και κρατά την εξουσιοδότηση στο έμπιστο server-side context.' },
        { title: 'Λειτουργικά τεκμήρια', text: 'Διατηρεί δραστηριότητα, αποτελέσματα integrations, callbacks και διοικητικό ιστορικό ώστε οι σημαντικές αποφάσεις να παραμένουν εξηγήσιμες.' },
      ],
      boundary: 'Η δημόσια σελίδα δεν εκθέτει workspaces, demo tenants, credentials, πολιτικές, ουρές εγκρίσεων, provider secrets, integrations ή λειτουργική δραστηριότητα του AgentGate.',
      value: 'Το AgentGate απευθύνεται σε ομάδες που θέλουν ισχυρό automation χωρίς να χάνουν τον οργανωτικό έλεγχο των ευαίσθητων ενεργειών.',
    },
  },
  autopaylot: {
    en: {
      headline: 'Know what should be paid before money moves',
      intro: 'AutoPaylot organizes recurring financial obligations, timing, account visibility, and payment-readiness decisions so household finances can be managed with clearer priorities and stronger control.',
      problem: 'Bills, subscriptions, debt payments, savings goals, and everyday spending compete for the same income. AutoPaylot is designed to turn that fragmented picture into an explicit plan before any payment is executed.',
      capabilities: [
        { title: 'Obligation control', text: 'Track recurring commitments, due dates, categories, amounts, status, and the history around what has or has not been handled.' },
        { title: 'Planning and readiness', text: 'Evaluate upcoming responsibilities against available money, priorities, savings rules, and supported safety constraints.' },
        { title: 'Financial visibility', text: 'Use controlled read-only connectivity patterns to understand accounts and balances without making visibility equivalent to payment authority.' },
        { title: 'Payment safety', text: 'Keep consent, eligibility, provider outcome, reconciliation, and failure handling explicit before any future production money movement is enabled.' },
      ],
      boundary: 'No real bank money movement is available from this website. It does not connect to customer bank accounts, collect banking credentials, expose financial profiles, or provide access to AutoPaylot operational workspaces.',
      value: 'AutoPaylot is designed for people who want recurring financial life to become deliberate and understandable instead of a sequence of disconnected due dates.',
    },
    el: {
      headline: 'Να ξέρεις τι πρέπει να πληρωθεί πριν κινηθούν χρήματα',
      intro: 'Το AutoPaylot οργανώνει επαναλαμβανόμενες οικονομικές υποχρεώσεις, χρονισμό, εικόνα λογαριασμών και αποφάσεις ετοιμότητας πληρωμής, ώστε τα οικονομικά ενός νοικοκυριού να διαχειρίζονται με καθαρότερες προτεραιότητες και περισσότερο έλεγχο.',
      problem: 'Λογαριασμοί, συνδρομές, δόσεις, στόχοι αποταμίευσης και καθημερινά έξοδα ανταγωνίζονται το ίδιο εισόδημα. Το AutoPaylot μετατρέπει αυτή την κατακερματισμένη εικόνα σε σαφές πλάνο πριν εκτελεστεί οποιαδήποτε πληρωμή.',
      capabilities: [
        { title: 'Έλεγχος υποχρεώσεων', text: 'Παρακολουθεί επαναλαμβανόμενες δεσμεύσεις, ημερομηνίες, κατηγορίες, ποσά, κατάσταση και ιστορικό διαχείρισης.' },
        { title: 'Σχεδιασμός και ετοιμότητα', text: 'Αξιολογεί επερχόμενες υποχρεώσεις σε σχέση με διαθέσιμα χρήματα, προτεραιότητες, κανόνες αποταμίευσης και υποστηριζόμενους περιορισμούς ασφαλείας.' },
        { title: 'Οικονομική ορατότητα', text: 'Χρησιμοποιεί ελεγχόμενα read-only πρότυπα σύνδεσης ώστε η εικόνα λογαριασμών και υπολοίπων να μην ισοδυναμεί με εξουσία πληρωμής.' },
        { title: 'Ασφάλεια πληρωμών', text: 'Κρατά ρητά τη συναίνεση, την επιλεξιμότητα, το αποτέλεσμα παρόχου, το reconciliation και τη διαχείριση αποτυχίας πριν ενεργοποιηθεί μελλοντική πραγματική κίνηση χρημάτων.' },
      ],
      boundary: 'Από αυτόν τον ιστότοπο δεν είναι διαθέσιμη πραγματική τραπεζική κίνηση χρημάτων. Δεν συνδέεται με τραπεζικούς λογαριασμούς πελατών, δεν συλλέγει τραπεζικά credentials και δεν εκθέτει οικονομικά προφίλ ή λειτουργικά workspaces του AutoPaylot.',
      value: 'Το AutoPaylot σχεδιάζεται για ανθρώπους που θέλουν η επαναλαμβανόμενη οικονομική καθημερινότητα να γίνει συνειδητή και κατανοητή αντί για μια σειρά ασύνδετων ημερομηνιών πληρωμής.',
    },
  },
  'business-resource-scheduler': {
    en: {
      headline: 'Schedule the work, resources, and constraints that make operations possible',
      intro: 'Business Resource Scheduler coordinates demand with the people, skills, equipment, spaces, locations, availability, and rules required to deliver real work.',
      problem: 'A free time slot is not enough when a booking also needs the right employee, skill, room, station, equipment, duration, sequence, and operating rule. BRS treats scheduling as an operational constraint problem rather than a simple calendar.',
      capabilities: [
        { title: 'Multi-resource scheduling', text: 'Model work that depends on several resource types at once instead of assuming time is the only constraint.' },
        { title: 'Feasibility rules', text: 'Protect skills, availability, operating hours, capacity, conflicts, and other supported rules before a booking becomes accepted work.' },
        { title: 'Adaptive planning', text: 'Re-evaluate schedules when real operations change, while keeping deterministic feasibility and controlled exception handling.' },
        { title: 'Operational visibility', text: 'Make active, completed, cancelled, constrained, and upcoming work understandable across the scheduling surface.' },
      ],
      boundary: 'This page does not expose customer calendars, bookings, staff rosters, resource inventories, demo tenants, scheduling APIs, or operational records from Business Resource Scheduler.',
      value: 'BRS is built for service and operational businesses where the cost of a bad schedule is measured in delays, idle capacity, conflicts, and disappointed customers.',
    },
    el: {
      headline: 'Προγραμματισμός εργασίας, πόρων και περιορισμών που κάνουν τη λειτουργία εφικτή',
      intro: 'Το Business Resource Scheduler συντονίζει τη ζήτηση με ανθρώπους, δεξιότητες, εξοπλισμό, χώρους, τοποθεσίες, διαθεσιμότητα και κανόνες που απαιτούνται για να εκτελεστεί πραγματική εργασία.',
      problem: 'Μία κενή ώρα δεν αρκεί όταν μια κράτηση απαιτεί ταυτόχρονα τον σωστό εργαζόμενο, δεξιότητα, χώρο, station, εξοπλισμό, διάρκεια, σειρά και επιχειρησιακό κανόνα. Το BRS αντιμετωπίζει το scheduling ως πρόβλημα λειτουργικών περιορισμών και όχι ως απλό ημερολόγιο.',
      capabilities: [
        { title: 'Scheduling πολλαπλών πόρων', text: 'Μοντελοποιεί εργασία που εξαρτάται ταυτόχρονα από διαφορετικούς τύπους πόρων, χωρίς να θεωρεί τον χρόνο μοναδικό περιορισμό.' },
        { title: 'Κανόνες εφικτότητας', text: 'Προστατεύει δεξιότητες, διαθεσιμότητα, ωράρια, capacity, conflicts και άλλους υποστηριζόμενους κανόνες πριν μία κράτηση γίνει αποδεκτή εργασία.' },
        { title: 'Προσαρμοστικός σχεδιασμός', text: 'Επαναξιολογεί τα προγράμματα όταν αλλάζουν οι πραγματικές συνθήκες, διατηρώντας deterministic feasibility και ελεγχόμενη διαχείριση εξαιρέσεων.' },
        { title: 'Λειτουργική εικόνα', text: 'Κάνει κατανοητή την ενεργή, ολοκληρωμένη, ακυρωμένη, περιορισμένη και επερχόμενη εργασία μέσα από το scheduling περιβάλλον.' },
      ],
      boundary: 'Η δημόσια σελίδα δεν εκθέτει ημερολόγια πελατών, bookings, βάρδιες προσωπικού, inventories πόρων, demo tenants, scheduling APIs ή λειτουργικά records του Business Resource Scheduler.',
      value: 'Το BRS απευθύνεται σε service και operational επιχειρήσεις όπου ένα κακό πρόγραμμα μεταφράζεται σε καθυστερήσεις, ανεκμετάλλευτη δυναμικότητα, conflicts και δυσαρεστημένους πελάτες.',
    },
  },
  earnlogic: {
    en: {
      headline: 'Explain how commercial performance becomes compensation',
      intro: 'EarnLogic connects source activity, governed rules, calculations, statements, and evidence so organizations can understand not only what someone earned, but how the result was produced.',
      problem: 'Variable compensation becomes difficult to trust when plans, source data, adjustments, calculations, and exports live in separate places. EarnLogic is designed to preserve a governed calculation story from input to result.',
      capabilities: [
        { title: 'Governed calculations', text: 'Run compensation logic against controlled plan and configuration versions with reproducible calculation behavior.' },
        { title: 'Lineage and explanation', text: 'Connect monetary outcomes to the source activity, rules, adjustments, and calculation evidence that produced them.' },
        { title: 'Statements and audit', text: 'Present payee-facing results while retaining controlled history, reconciliation, approvals, and immutable evidence where supported.' },
        { title: 'Planning intelligence', text: 'Support scenario and forecast analysis without allowing non-authoritative intelligence to silently rewrite finalized compensation history.' },
      ],
      boundary: 'This page exposes no employee or payee data, compensation records, customer integrations, calculation environments, statements, exports, provider credentials, or tenant workspaces.',
      value: 'EarnLogic is built for organizations that need compensation to be explainable, reproducible, governed, and connected to the commercial activity behind it.',
    },
    el: {
      headline: 'Εξηγεί πώς η εμπορική απόδοση μετατρέπεται σε αμοιβή',
      intro: 'Το EarnLogic συνδέει source activity, ελεγχόμενους κανόνες, υπολογισμούς, statements και τεκμήρια, ώστε ένας οργανισμός να κατανοεί όχι μόνο τι κέρδισε κάποιος αλλά και πώς προέκυψε το αποτέλεσμα.',
      problem: 'Οι μεταβλητές αμοιβές δυσκολεύονται να εμπνεύσουν εμπιστοσύνη όταν plans, source data, adjustments, calculations και exports βρίσκονται σε διαφορετικά σημεία. Το EarnLogic διατηρεί μια ελεγχόμενη ιστορία υπολογισμού από την είσοδο μέχρι το αποτέλεσμα.',
      capabilities: [
        { title: 'Ελεγχόμενοι υπολογισμοί', text: 'Εκτελεί compensation logic πάνω σε ελεγχόμενες εκδόσεις plans και configuration με αναπαραγώγιμη συμπεριφορά υπολογισμού.' },
        { title: 'Lineage και εξήγηση', text: 'Συνδέει τα χρηματικά αποτελέσματα με source activity, κανόνες, adjustments και calculation evidence που τα δημιούργησαν.' },
        { title: 'Statements και audit', text: 'Παρουσιάζει αποτελέσματα στους payees διατηρώντας ελεγχόμενο ιστορικό, reconciliation, approvals και immutable evidence όπου υποστηρίζεται.' },
        { title: 'Ευφυΐα σχεδιασμού', text: 'Υποστηρίζει scenarios και forecasts χωρίς η μη-authoritative ανάλυση να μπορεί να αλλάξει σιωπηρά οριστικοποιημένη ιστορία αμοιβών.' },
      ],
      boundary: 'Η δημόσια σελίδα δεν εκθέτει δεδομένα εργαζομένων ή payees, compensation records, customer integrations, calculation environments, statements, exports, provider credentials ή tenant workspaces.',
      value: 'Το EarnLogic απευθύνεται σε οργανισμούς που χρειάζονται οι αμοιβές να είναι εξηγήσιμες, αναπαραγώγιμες, ελεγχόμενες και συνδεδεμένες με την εμπορική δραστηριότητα που τις δημιούργησε.',
    },
  },
  familyos: {
    en: {
      headline: 'One place to coordinate the moving parts of family life',
      intro: 'FamilyOS brings discovery, bookings, schedules, saved items, family roles, and everyday coordination into a parent-first, child-centred operating experience.',
      problem: 'Family responsibilities are usually scattered across messages, calendars, provider pages, reminders, notes, and memory. FamilyOS is designed to give a household one clearer place to see what matters now and what is coming next.',
      capabilities: [
        { title: 'Shared coordination', text: 'Bring family members, responsibilities, saved items, reminders, and schedules into one understandable household context.' },
        { title: 'Discovery and bookings', text: 'Support privacy-aware discovery and booking flows while keeping authoritative provider availability and real transactions behind controlled service boundaries.' },
        { title: 'Calendar and continuity', text: 'Connect upcoming responsibilities with past activity so family organization becomes useful over time rather than only at the moment of booking.' },
        { title: 'Parent-first privacy', text: 'Keep child/teen experiences, permissions, location-sensitive behavior, and family access governed by the product’s parent-controlled model.' },
      ],
      boundary: 'This page exposes no family profiles, child or teen data, private schedules, provider accounts, bookings, saved locations, payment information, documents, or household activity.',
      value: 'FamilyOS is designed for families that want less coordination overhead and a more reliable shared view of everyday responsibilities.',
    },
    el: {
      headline: 'Ένα μέρος για να συντονίζονται όλα όσα κινούν την οικογενειακή καθημερινότητα',
      intro: 'Το FamilyOS συγκεντρώνει discovery, bookings, προγράμματα, αποθηκευμένα στοιχεία, οικογενειακούς ρόλους και καθημερινό συντονισμό σε μια parent-first, child-centred εμπειρία.',
      problem: 'Οι οικογενειακές υποχρεώσεις είναι συνήθως διασκορπισμένες σε μηνύματα, ημερολόγια, σελίδες παρόχων, reminders, σημειώσεις και μνήμη. Το FamilyOS δημιουργείται για να δίνει στο νοικοκυριό ένα καθαρότερο σημείο αναφοράς για το τι έχει σημασία τώρα και τι έρχεται μετά.',
      capabilities: [
        { title: 'Κοινός συντονισμός', text: 'Συνδέει μέλη οικογένειας, υποχρεώσεις, αποθηκευμένα στοιχεία, reminders και schedules μέσα σε ένα κατανοητό household context.' },
        { title: 'Discovery και bookings', text: 'Υποστηρίζει privacy-aware discovery και booking flows, κρατώντας την authoritative διαθεσιμότητα παρόχων και τις πραγματικές συναλλαγές πίσω από ελεγχόμενα service boundaries.' },
        { title: 'Ημερολόγιο και συνέχεια', text: 'Συνδέει τις επόμενες υποχρεώσεις με το ιστορικό ώστε η οικογενειακή οργάνωση να αποκτά αξία με τον χρόνο και όχι μόνο τη στιγμή μιας κράτησης.' },
        { title: 'Parent-first ιδιωτικότητα', text: 'Διατηρεί child/teen experiences, permissions, location-sensitive behavior και οικογενειακή πρόσβαση υπό το γονεϊκά ελεγχόμενο μοντέλο του προϊόντος.' },
      ],
      boundary: 'Η δημόσια σελίδα δεν εκθέτει οικογενειακά προφίλ, δεδομένα παιδιών ή εφήβων, ιδιωτικά schedules, provider accounts, bookings, αποθηκευμένες τοποθεσίες, στοιχεία πληρωμών, έγγραφα ή household activity.',
      value: 'Το FamilyOS σχεδιάζεται για οικογένειες που θέλουν λιγότερη επιβάρυνση συντονισμού και πιο αξιόπιστη κοινή εικόνα των καθημερινών υποχρεώσεων.',
    },
  },
  legacyci: {
    en: {
      headline: 'Understand database dependencies before a change becomes an incident',
      intro: 'LegacyCI builds an evidence-backed view of database structure, lineage, proposed changes, and downstream impact while keeping uncertainty visible and source systems read-only.',
      problem: 'In complex database estates, a DDL change can affect objects and consumers far beyond the edited statement. LegacyCI is designed to show the dependency path, the evidence behind it, and what remains unresolved before engineering teams deploy the change.',
      capabilities: [
        { title: 'Read-only metadata ingestion', text: 'Connect to certified PostgreSQL sources with least-privilege metadata access and preserve immutable snapshots for analysis.' },
        { title: 'Semantic lineage', text: 'Resolve supported object, column, expression, routine, trigger, and cross-object relationships when the available evidence supports them.' },
        { title: 'Pre-change impact', text: 'Parse proposed DDL without executing it against the source system, then trace downstream blast radius and compatibility findings.' },
        { title: 'Evidence and governance', text: 'Keep confidence, unresolved paths, reports, review decisions, policies, waivers, and enterprise workflow evidence attached to the analysis.' },
      ],
      boundary: 'This page exposes no database connections, credentials, metadata snapshots, SQL proposals, impact reports, customer schemas, private agents, enterprise configuration, or source-system data. LegacyCI does not execute proposed DDL against customer source databases.',
      value: 'LegacyCI is built for engineering teams that need to change complex database systems with more evidence, less guesswork, and a clearly visible read-only safety boundary.',
    },
    el: {
      headline: 'Κατανόηση των database dependencies πριν μία αλλαγή γίνει incident',
      intro: 'Το LegacyCI δημιουργεί evidence-backed εικόνα για database structure, lineage, προτεινόμενες αλλαγές και downstream impact, κρατώντας ορατή την αβεβαιότητα και τα source systems σε read-only όριο.',
      problem: 'Σε σύνθετα database estates, μία αλλαγή DDL μπορεί να επηρεάσει objects και consumers πολύ πέρα από το statement που τροποποιείται. Το LegacyCI δείχνει dependency paths, τα τεκμήρια πίσω από αυτά και τι παραμένει unresolved πριν η engineering ομάδα κάνει deployment.',
      capabilities: [
        { title: 'Read-only metadata ingestion', text: 'Συνδέεται με πιστοποιημένες PostgreSQL πηγές με least-privilege metadata access και διατηρεί immutable snapshots για ανάλυση.' },
        { title: 'Semantic lineage', text: 'Επιλύει υποστηριζόμενες σχέσεις object, column, expression, routine, trigger και cross-object όταν τα διαθέσιμα τεκμήρια το επιτρέπουν.' },
        { title: 'Pre-change impact', text: 'Αναλύει προτεινόμενο DDL χωρίς να το εκτελεί στο source system και στη συνέχεια χαρτογραφεί downstream blast radius και compatibility findings.' },
        { title: 'Evidence και governance', text: 'Διατηρεί confidence, unresolved paths, reports, review decisions, policies, waivers και enterprise workflow evidence συνδεδεμένα με την ανάλυση.' },
      ],
      boundary: 'Η δημόσια σελίδα δεν εκθέτει database connections, credentials, metadata snapshots, SQL proposals, impact reports, customer schemas, private agents, enterprise configuration ή source-system data. Το LegacyCI δεν εκτελεί προτεινόμενο DDL σε customer source databases.',
      value: 'Το LegacyCI απευθύνεται σε engineering ομάδες που χρειάζονται αλλαγές σε σύνθετες βάσεις δεδομένων με περισσότερα τεκμήρια, λιγότερες υποθέσεις και ένα ξεκάθαρα ορατό read-only όριο ασφαλείας.',
    },
  },
}
