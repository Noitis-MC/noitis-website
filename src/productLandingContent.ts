import type { NoitisLanguage } from './i18n/LanguageContext'
import type { ProductSlug } from './productCatalog'

export type ProductLandingContent = {
  category: string
  headline: string
  intro: string
  problem: string[]
  capabilities: Array<{ title: string; text: string }>
  boundary: string
  value: string
}

export type ProductLandingUiCopy = {
  back: string
  products: string
  how: string
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
  contactEyebrow: string
  contactTitle: string
  valueText: string
  email: string
  footerTagline: string
  rights: string
}

export const landingUiCopy: Record<NoitisLanguage, ProductLandingUiCopy> = {
  en: {
    back: 'Back to Noitis products',
    products: 'Products',
    how: 'How we build',
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
    accessEyebrow: 'Current availability',
    accessTitle: 'The application is not public yet',
    accessText: 'The product is under active development. This page explains the problem, the current product direction, and the public boundary without exposing operational customer data.',
    problemEyebrow: 'The problem',
    problemTitle: 'Why we are building it',
    capabilityEyebrow: 'What it does',
    capabilityTitle: 'The product, in practical terms',
    boundaryEyebrow: 'Public boundary',
    boundaryTitle: 'What this website does not expose',
    valueEyebrow: 'Why it matters',
    valueTitle: 'What we want the product to change',
    contactEyebrow: 'Interested?',
    contactTitle: 'Talk to Noitis about the product',
    valueText: 'For a use case, pilot, partnership, or product discussion, contact Noitis directly.',
    email: 'Email Noitis',
    footerTagline: 'Built in Greece. Designed for a wider world.',
    rights: 'All rights reserved.',
  },
  el: {
    back: 'Πίσω στα προϊόντα της Noitis',
    products: 'Προϊόντα',
    how: 'Πώς δημιουργούμε',
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
    accessEyebrow: 'Σημερινή διαθεσιμότητα',
    accessTitle: 'Η εφαρμογή δεν είναι ακόμη δημόσια',
    accessText: 'Το προϊόν βρίσκεται σε ενεργή ανάπτυξη. Η σελίδα εξηγεί το πρόβλημα, την κατεύθυνση του προϊόντος και το δημόσιο όριο χωρίς να εκθέτει λειτουργικά δεδομένα πελατών.',
    problemEyebrow: 'Το πρόβλημα',
    problemTitle: 'Γιατί το δημιουργούμε',
    capabilityEyebrow: 'Τι κάνει',
    capabilityTitle: 'Το προϊόν, στην πράξη',
    boundaryEyebrow: 'Δημόσιο όριο',
    boundaryTitle: 'Τι δεν εκθέτει αυτή η ιστοσελίδα',
    valueEyebrow: 'Γιατί έχει σημασία',
    valueTitle: 'Τι θέλουμε να αλλάξει το προϊόν',
    contactEyebrow: 'Σας ενδιαφέρει;',
    contactTitle: 'Μιλήστε με τη Noitis για το προϊόν',
    valueText: 'Για use case, πιλοτική εφαρμογή, συνεργασία ή συζήτηση γύρω από το προϊόν, επικοινωνήστε απευθείας με τη Noitis.',
    email: 'Email στη Noitis',
    footerTagline: 'Χτίζεται στην Ελλάδα. Σχεδιάζεται για έναν ευρύτερο κόσμο.',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
  },
}

export const productLandingContent: Record<ProductSlug, Record<NoitisLanguage, ProductLandingContent>> = {
  agentgate: {
    en: {
      category: 'AI governance',
      headline: 'AI agents should be able to work without having unlimited authority.',
      intro: 'AgentGate is a governance layer for actions performed by AI agents. It gives organisations a structured way to decide what can happen automatically, what needs human approval, and what should be rejected.',
      problem: [
        'The more useful an AI agent becomes, the more access it usually needs. That creates a real operational problem.',
        'If the agent cannot perform meaningful actions, much of the value of automation disappears. If it can perform every action freely, the organisation may lose control over decisions that should remain governed.',
        'Putting a person in front of every action is not a good solution either. It turns automation into another manual queue. AgentGate is being built for the space between those extremes.',
      ],
      capabilities: [
        { title: 'Policy-based decisions', text: 'Rules can determine what an agent may do according to the organisation, environment, type of action, and other relevant conditions.' },
        { title: 'Human approval', text: 'Actions that should not happen automatically can be sent to the appropriate person for review.' },
        { title: 'Identity and permissions', text: 'Human users, AI agents, and services can be treated as different identities with different levels of authority.' },
        { title: 'Decision history', text: 'Important actions and approvals keep a record so the organisation can understand what happened afterwards.' },
      ],
      value: 'The purpose is not to put unnecessary friction in front of AI. It is to make it possible to give AI more useful responsibilities without removing the controls that an organisation still needs.',
      boundary: 'This public page does not expose AgentGate workspaces, credentials, policy data, approval queues, provider secrets, integrations, or operational activity.',
    },
    el: {
      category: 'Διακυβέρνηση AI',
      headline: 'Οι AI agents πρέπει να μπορούν να δουλεύουν χωρίς να αποκτούν απεριόριστη εξουσιοδότηση.',
      intro: 'Το AgentGate είναι ένα επίπεδο διακυβέρνησης για ενέργειες που πραγματοποιούν AI agents. Δίνει στους οργανισμούς έναν οργανωμένο τρόπο να αποφασίζουν ποιες ενέργειες μπορούν να γίνουν αυτόματα, ποιες χρειάζονται ανθρώπινη έγκριση και ποιες πρέπει να απορριφθούν.',
      problem: [
        'Όσο πιο χρήσιμος γίνεται ένας AI agent, τόσο περισσότερη πρόσβαση χρειάζεται συνήθως. Εκεί δημιουργείται ένα πραγματικό επιχειρησιακό πρόβλημα.',
        'Αν ο agent δεν μπορεί να κάνει ουσιαστικές ενέργειες, μεγάλο μέρος της αξίας του automation χάνεται. Αν μπορεί να κάνει τα πάντα ελεύθερα, ο οργανισμός μπορεί να χάσει τον έλεγχο αποφάσεων που πρέπει να παραμένουν ελεγχόμενες.',
        'Το να εγκρίνει άνθρωπος κάθε ενέργεια δεν είναι επίσης καλή λύση. Μετατρέπει το automation σε άλλη μία χειροκίνητη ουρά εργασίας. Το AgentGate δημιουργείται για τον χώρο ανάμεσα σε αυτά τα δύο άκρα.',
      ],
      capabilities: [
        { title: 'Αποφάσεις βάσει πολιτικών', text: 'Οι κανόνες μπορούν να καθορίζουν τι επιτρέπεται να κάνει ένας agent ανάλογα με τον οργανισμό, το περιβάλλον, το είδος της ενέργειας και άλλες σχετικές συνθήκες.' },
        { title: 'Ανθρώπινη έγκριση', text: 'Ενέργειες που δεν πρέπει να γίνονται αυτόματα μπορούν να στέλνονται στον κατάλληλο άνθρωπο για έλεγχο.' },
        { title: 'Ταυτότητα και δικαιώματα', text: 'Άνθρωποι, AI agents και services μπορούν να αντιμετωπίζονται ως διαφορετικές ταυτότητες με διαφορετικά επίπεδα εξουσιοδότησης.' },
        { title: 'Ιστορικό αποφάσεων', text: 'Οι σημαντικές ενέργειες και εγκρίσεις κρατούν ιστορικό ώστε ο οργανισμός να μπορεί να καταλάβει τι συνέβη αργότερα.' },
      ],
      value: 'Ο σκοπός δεν είναι να βάλουμε περιττά εμπόδια μπροστά στο AI. Είναι να γίνει εφικτό να του δοθούν περισσότερες χρήσιμες ευθύνες χωρίς να χαθούν οι έλεγχοι που ένας οργανισμός εξακολουθεί να χρειάζεται.',
      boundary: 'Η δημόσια σελίδα δεν εκθέτει AgentGate workspaces, credentials, πολιτικές, ουρές εγκρίσεων, provider secrets, integrations ή λειτουργική δραστηριότητα.',
    },
  },
  autopaylot: {
    en: {
      category: 'Financial obligations',
      headline: 'Paying a bill is easy. Coordinating all of them is the difficult part.',
      intro: 'AutoPaylot is designed to organise recurring financial obligations and help decide what should be paid before money moves.',
      problem: [
        'Most financial obligations are simple by themselves. A bill has an amount and a due date. The difficulty appears when all the obligations are viewed together.',
        'Electricity, rent, subscriptions, loan payments, savings, and everyday expenses may all be valid and all be due, but they still compete for the same money.',
        'When that information is spread across bank applications, emails, reminders, and memory, managing it becomes another recurring task. That can lead to late payments, poorly timed payments, and unnecessary stress.',
      ],
      capabilities: [
        { title: 'Obligations in one place', text: 'Recurring commitments, amounts, due dates, and status can be viewed together.' },
        { title: 'Payment planning', text: 'Upcoming obligations can be considered against available money and other priorities before payment.' },
        { title: 'Financial visibility', text: 'Account information can build a clearer picture without making read access equivalent to permission to move money.' },
        { title: 'Controlled payment flow', text: 'Consent, readiness, provider results, and failures remain visible parts of the process.' },
      ],
      value: 'The objective is not to automate money blindly. It is to reduce the amount of recurring financial administration people have to carry in their heads.',
      boundary: 'No real bank money movement is available from this website. It does not collect banking credentials, expose financial profiles, or provide access to operational customer workspaces.',
    },
    el: {
      category: 'Οικονομικές υποχρεώσεις',
      headline: 'Το να πληρώσουμε έναν λογαριασμό είναι εύκολο. Το να συντονίσουμε όλους μαζί είναι το δύσκολο μέρος.',
      intro: 'Το AutoPaylot έχει σχεδιαστεί για να οργανώνει επαναλαμβανόμενες οικονομικές υποχρεώσεις και να βοηθά στην απόφαση του τι πρέπει να πληρωθεί πριν μετακινηθούν χρήματα.',
      problem: [
        'Οι περισσότερες οικονομικές υποχρεώσεις είναι απλές από μόνες τους. Ένας λογαριασμός έχει ποσό και ημερομηνία λήξης. Η δυσκολία εμφανίζεται όταν δούμε όλες τις υποχρεώσεις μαζί.',
        'Ρεύμα, ενοίκιο, συνδρομές, δόσεις, αποταμίευση και καθημερινά έξοδα μπορεί όλα να είναι σωστά και να πρέπει να πληρωθούν, αλλά εξακολουθούν να διεκδικούν τα ίδια χρήματα.',
        'Όταν αυτές οι πληροφορίες βρίσκονται σκορπισμένες σε τραπεζικές εφαρμογές, emails, reminders και στη μνήμη μας, η διαχείρισή τους γίνεται ακόμη μία επαναλαμβανόμενη δουλειά. Αυτό μπορεί να οδηγήσει σε καθυστερημένες πληρωμές, κακό χρονισμό και περιττό άγχος.',
      ],
      capabilities: [
        { title: 'Υποχρεώσεις σε ένα σημείο', text: 'Επαναλαμβανόμενες δεσμεύσεις, ποσά, ημερομηνίες λήξης και κατάσταση μπορούν να εμφανίζονται μαζί.' },
        { title: 'Προγραμματισμός πληρωμών', text: 'Οι επερχόμενες υποχρεώσεις μπορούν να εξετάζονται μαζί με τα διαθέσιμα χρήματα και τις υπόλοιπες προτεραιότητες πριν γίνει πληρωμή.' },
        { title: 'Οικονομική εικόνα', text: 'Τα δεδομένα λογαριασμών μπορούν να δίνουν καθαρότερη εικόνα χωρίς η πρόσβαση για ανάγνωση να σημαίνει αυτόματα και δικαίωμα μετακίνησης χρημάτων.' },
        { title: 'Ελεγχόμενη διαδικασία πληρωμής', text: 'Η συναίνεση, η ετοιμότητα, το αποτέλεσμα του provider και οι αποτυχίες παραμένουν ορατά μέρη της διαδικασίας.' },
      ],
      value: 'Ο στόχος δεν είναι να αυτοματοποιήσουμε τα χρήματα χωρίς σκέψη. Είναι να μειώσουμε το κομμάτι της οικονομικής διαχείρισης που οι άνθρωποι αναγκάζονται σήμερα να κουβαλούν μέσα στο κεφάλι τους.',
      boundary: 'Από αυτή την ιστοσελίδα δεν είναι διαθέσιμη πραγματική τραπεζική κίνηση χρημάτων. Δεν συλλέγονται τραπεζικά credentials και δεν εκτίθενται οικονομικά προφίλ ή λειτουργικά customer workspaces.',
    },
  },
  'business-resource-scheduler': {
    en: {
      category: 'Operational scheduling',
      headline: 'Scheduling work is not the same as finding an empty hour.',
      intro: 'Business Resource Scheduler plans work around the resources that are actually required to perform it.',
      problem: [
        'Traditional calendars mostly understand time. Businesses operate with more constraints than that.',
        'A booking may require a particular employee, skill, room, chair or station, machine, location, preparation time, or several of those at once.',
        'The calendar can therefore say “available” while the business is not actually able to deliver the service. That is where delays, conflicts, and unnecessary rescheduling begin.',
      ],
      capabilities: [
        { title: 'Multi-resource scheduling', text: 'A booking can depend on several resources rather than time alone.' },
        { title: 'Feasibility checks', text: 'The system can check whether the required conditions are actually available before accepting the booking.' },
        { title: 'Recurring schedules and changes', text: 'Repeated work can be planned while individual exceptions are handled when reality changes.' },
        { title: 'Operational visibility', text: 'Teams can see upcoming work, conflicts, and capacity more clearly.' },
      ],
      value: 'Poor scheduling wastes two valuable things at the same time: the customer’s time and the business’s capacity. BRS is designed to reduce both.',
      boundary: 'This page does not expose customer calendars, bookings, staff rosters, resource inventories, scheduling APIs, or operational records.',
    },
    el: {
      category: 'Επιχειρησιακός προγραμματισμός',
      headline: 'Ο προγραμματισμός εργασίας δεν είναι το ίδιο πράγμα με την εύρεση μιας κενής ώρας.',
      intro: 'Το Business Resource Scheduler οργανώνει την εργασία γύρω από τους πόρους που απαιτούνται πραγματικά για να πραγματοποιηθεί.',
      problem: [
        'Τα παραδοσιακά ημερολόγια καταλαβαίνουν κυρίως τον χρόνο. Οι επιχειρήσεις έχουν περισσότερους περιορισμούς.',
        'Μία κράτηση μπορεί να απαιτεί συγκεκριμένο εργαζόμενο, δεξιότητα, χώρο, καρέκλα ή station, μηχάνημα, τοποθεσία, χρόνο προετοιμασίας ή αρκετά από αυτά μαζί.',
        'Το ημερολόγιο μπορεί λοιπόν να δείχνει «διαθέσιμο» ενώ η επιχείρηση στην πραγματικότητα δεν μπορεί να εκτελέσει την υπηρεσία. Εκεί ξεκινούν οι καθυστερήσεις, οι συγκρούσεις και οι συνεχείς αλλαγές.',
      ],
      capabilities: [
        { title: 'Scheduling πολλαπλών πόρων', text: 'Μία κράτηση μπορεί να εξαρτάται από περισσότερους πόρους και όχι μόνο από την ώρα.' },
        { title: 'Έλεγχος εφικτότητας', text: 'Το σύστημα μπορεί να ελέγχει αν υπάρχουν πραγματικά οι απαραίτητες προϋποθέσεις πριν δεχτεί την κράτηση.' },
        { title: 'Επαναλαμβανόμενα προγράμματα και αλλαγές', text: 'Η επαναλαμβανόμενη εργασία μπορεί να προγραμματίζεται, ενώ μεμονωμένες εξαιρέσεις αντιμετωπίζονται όταν αλλάζουν οι πραγματικές συνθήκες.' },
        { title: 'Επιχειρησιακή εικόνα', text: 'Οι ομάδες μπορούν να βλέπουν πιο καθαρά την επερχόμενη εργασία, τις συγκρούσεις και τη διαθέσιμη δυναμικότητα.' },
      ],
      value: 'Ο κακός προγραμματισμός σπαταλά ταυτόχρονα δύο πολύτιμα πράγματα: τον χρόνο του πελάτη και τη δυναμικότητα της επιχείρησης. Το BRS δημιουργείται για να μειώσει και τα δύο.',
      boundary: 'Η δημόσια σελίδα δεν εκθέτει ημερολόγια πελατών, bookings, βάρδιες προσωπικού, inventories πόρων, scheduling APIs ή λειτουργικά records.',
    },
  },
  earnlogic: {
    en: {
      category: 'Compensation intelligence',
      headline: 'Compensation should be understandable by the people who calculate it and the people who receive it.',
      intro: 'EarnLogic connects commercial activity, compensation rules, and calculation results in one controlled process.',
      problem: [
        'Variable compensation often grows around spreadsheets. That may work at first. Then plans change, exceptions appear, manual corrections are added, data comes from several systems, and more people become involved.',
        'Eventually a simple question becomes difficult: “Why is this the amount?”',
        'Finding the answer may require several files, several versions, and somebody who remembers how the calculation originally worked. That costs time and creates mistrust.',
      ],
      capabilities: [
        { title: 'Controlled calculation rules', text: 'Compensation can be calculated against defined plan and configuration versions.' },
        { title: 'Calculation lineage', text: 'A result can be connected back to the data, rules, and adjustments that created it.' },
        { title: 'Statements and history', text: 'People can see their results while the organisation keeps the underlying calculation history.' },
        { title: 'Planning', text: 'Future scenarios can be analysed without rewriting finalised historical results.' },
      ],
      value: 'When money is involved, an unexplained number is rarely good enough. EarnLogic is designed so the calculation can be followed rather than simply accepted.',
      boundary: 'This page exposes no employee or payee data, compensation records, customer integrations, statements, exports, provider credentials, or tenant workspaces.',
    },
    el: {
      category: 'Αμοιβές και κίνητρα',
      headline: 'Οι αμοιβές πρέπει να είναι κατανοητές τόσο σε αυτούς που τις υπολογίζουν όσο και σε αυτούς που τις λαμβάνουν.',
      intro: 'Το EarnLogic συνδέει την εμπορική δραστηριότητα, τους κανόνες αμοιβών και τα αποτελέσματα των υπολογισμών σε μία ελεγχόμενη διαδικασία.',
      problem: [
        'Οι μεταβλητές αμοιβές συχνά ξεκινούν μέσα από spreadsheets. Στην αρχή αυτό μπορεί να λειτουργεί. Μετά αλλάζουν τα plans, εμφανίζονται εξαιρέσεις, προστίθενται χειροκίνητες διορθώσεις, τα δεδομένα έρχονται από διαφορετικά συστήματα και εμπλέκονται περισσότεροι άνθρωποι.',
        'Και τελικά μία απλή ερώτηση γίνεται δύσκολη: «Γιατί είναι αυτό το ποσό;»',
        'Η απάντηση μπορεί να απαιτεί διαφορετικά αρχεία, διαφορετικές εκδόσεις και κάποιον που θυμάται πώς λειτουργούσε αρχικά ο υπολογισμός. Αυτό κοστίζει χρόνο και δημιουργεί δυσπιστία.',
      ],
      capabilities: [
        { title: 'Ελεγχόμενοι κανόνες υπολογισμού', text: 'Οι αμοιβές μπορούν να υπολογίζονται με βάση συγκεκριμένες εκδόσεις plan και configuration.' },
        { title: 'Διαδρομή υπολογισμού', text: 'Ένα αποτέλεσμα μπορεί να συνδέεται πίσω στα δεδομένα, στους κανόνες και στις διορθώσεις που το δημιούργησαν.' },
        { title: 'Καταστάσεις και ιστορικό', text: 'Οι άνθρωποι μπορούν να βλέπουν το αποτέλεσμα, ενώ ο οργανισμός διατηρεί το ιστορικό του υπολογισμού.' },
        { title: 'Σχεδιασμός', text: 'Μπορούν να εξετάζονται μελλοντικά σενάρια χωρίς να αλλάζουν οριστικοποιημένα ιστορικά αποτελέσματα.' },
      ],
      value: 'Όταν μιλάμε για χρήματα, ένας ανεξήγητος αριθμός σπάνια είναι αρκετός. Το EarnLogic σχεδιάζεται ώστε ο υπολογισμός να μπορεί να ακολουθηθεί, όχι απλώς να γίνει αποδεκτός.',
      boundary: 'Η δημόσια σελίδα δεν εκθέτει δεδομένα εργαζομένων ή payees, compensation records, customer integrations, statements, exports, provider credentials ή tenant workspaces.',
    },
  },
  familyos: {
    en: {
      category: 'Family coordination',
      headline: 'Family organisation should not depend on one person remembering everything.',
      intro: 'FamilyOS brings family schedules, responsibilities, bookings, places, and useful information into one shared environment.',
      problem: [
        'Family information rarely lives in one place. One appointment is in a calendar. Another arrives by message. A useful provider is saved somewhere. School information is in another system. Someone remembers a deadline. Someone else assumes it has already been handled.',
        'Individually, none of these things is difficult. Together, they create a constant coordination workload.',
        'The cost is time and attention. People repeatedly search for information, repeat conversations, and remember things the software around them should probably be helping with.',
      ],
      capabilities: [
        { title: 'Shared family context', text: 'Members, schedules, responsibilities, and useful information can exist in the same household view.' },
        { title: 'Discovery and bookings', text: 'Useful places and services can be connected with the family’s actual schedule.' },
        { title: 'Calendar and history', text: 'Upcoming events and past activity can remain connected rather than disappearing after they happen.' },
        { title: 'Parent-first control', text: 'Family permissions and child-related functionality stay under clear parent-controlled boundaries.' },
      ],
      value: 'We do not want FamilyOS to make family life feel like business administration. The aim is the opposite: less administration around the family.',
      boundary: 'This page exposes no family profiles, child or teen data, private schedules, provider accounts, bookings, saved locations, payment information, documents, or household activity.',
    },
    el: {
      category: 'Οικογενειακός συντονισμός',
      headline: 'Η οργάνωση μιας οικογένειας δεν θα έπρεπε να βασίζεται σε έναν άνθρωπο που θυμάται τα πάντα.',
      intro: 'Το FamilyOS συγκεντρώνει προγράμματα, υποχρεώσεις, κρατήσεις, μέρη και χρήσιμες πληροφορίες της οικογένειας σε ένα κοινό περιβάλλον.',
      problem: [
        'Οι πληροφορίες μιας οικογένειας σπάνια βρίσκονται σε ένα σημείο. Ένα ραντεβού βρίσκεται στο ημερολόγιο. Ένα άλλο ήρθε σε μήνυμα. Ένας χρήσιμος επαγγελματίας έχει αποθηκευτεί κάπου. Μία σχολική πληροφορία βρίσκεται σε διαφορετικό σύστημα. Κάποιος θυμάται μία προθεσμία και κάποιος άλλος θεωρεί ότι την έχει ήδη αναλάβει άλλος.',
        'Καθένα από αυτά από μόνο του δεν είναι δύσκολο. Όλα μαζί δημιουργούν συνεχή ανάγκη συντονισμού.',
        'Το κόστος είναι χρόνος και προσοχή. Ψάχνουμε ξανά πληροφορίες, επαναλαμβάνουμε συζητήσεις και προσπαθούμε να θυμόμαστε πράγματα στα οποία το λογισμικό θα μπορούσε να μας βοηθά περισσότερο.',
      ],
      capabilities: [
        { title: 'Κοινό οικογενειακό πλαίσιο', text: 'Μέλη, προγράμματα, υποχρεώσεις και χρήσιμες πληροφορίες μπορούν να υπάρχουν στην ίδια εικόνα του νοικοκυριού.' },
        { title: 'Αναζήτηση και κρατήσεις', text: 'Χρήσιμα μέρη και υπηρεσίες μπορούν να συνδέονται με το πραγματικό πρόγραμμα της οικογένειας.' },
        { title: 'Ημερολόγιο και ιστορικό', text: 'Τα επόμενα γεγονότα και όσα έχουν ήδη συμβεί μπορούν να παραμένουν συνδεδεμένα αντί να εξαφανίζονται μετά την ολοκλήρωσή τους.' },
        { title: 'Έλεγχος με προτεραιότητα στον γονέα', text: 'Τα δικαιώματα και οι λειτουργίες που σχετίζονται με παιδιά παραμένουν μέσα σε ξεκάθαρα γονεϊκά ελεγχόμενα όρια.' },
      ],
      value: 'Δεν θέλουμε το FamilyOS να κάνει την οικογένεια να αισθάνεται σαν επιχείρηση. Το αντίθετο: θέλουμε λιγότερη διαχείριση γύρω από την οικογένεια.',
      boundary: 'Η δημόσια σελίδα δεν εκθέτει οικογενειακά προφίλ, δεδομένα παιδιών ή εφήβων, ιδιωτικά schedules, provider accounts, bookings, αποθηκευμένες τοποθεσίες, στοιχεία πληρωμών, έγγραφα ή household activity.',
    },
  },
  legacyci: {
    en: {
      category: 'Database change intelligence',
      headline: 'Database changes are easy to write. Their consequences are harder to see.',
      intro: 'LegacyCI helps engineering teams understand database dependencies and possible downstream impact before a change is deployed.',
      problem: [
        'Databases become complicated gradually. Tables are created. Views are added. Procedures depend on them. Applications use them. Reports appear.',
        'Years later, some of the original engineers are gone and parts of the dependency structure are no longer obvious. Then somebody needs to change a column, table, or object.',
        'The SQL may be simple. The difficult question is: “What else depends on this?” If the answer is incomplete, the result may be failed deployments, broken reports, application errors, or production incidents.',
      ],
      capabilities: [
        { title: 'Read-only analysis', text: 'LegacyCI analyses metadata without needing permission to alter the production source.' },
        { title: 'Dependency and lineage analysis', text: 'Supported relationships between database objects can be mapped and explored.' },
        { title: 'Pre-change impact analysis', text: 'A proposed structural change can be analysed before it is executed against the source database.' },
        { title: 'Evidence and uncertainty', text: 'The system can show what it has evidence for and where the dependency picture is incomplete.' },
      ],
      value: 'LegacyCI is not intended to replace engineering judgement. It is intended to give engineers a better picture before they have to use that judgement.',
      boundary: 'This page exposes no database connections, credentials, metadata snapshots, SQL proposals, impact reports, customer schemas, private agents, enterprise configuration, or source-system data.',
    },
    el: {
      category: 'Ανάλυση αλλαγών βάσεων δεδομένων',
      headline: 'Οι αλλαγές σε μία βάση δεδομένων γράφονται εύκολα. Οι συνέπειές τους φαίνονται πολύ πιο δύσκολα.',
      intro: 'Το LegacyCI βοηθά engineering ομάδες να καταλαβαίνουν τις εξαρτήσεις και τις πιθανές downstream επιπτώσεις μιας αλλαγής πριν αυτή γίνει deployment.',
      problem: [
        'Οι βάσεις δεδομένων γίνονται σύνθετες σταδιακά. Δημιουργούνται πίνακες. Προστίθενται views. Procedures εξαρτώνται από αυτά. Applications τα χρησιμοποιούν. Εμφανίζονται reports.',
        'Χρόνια αργότερα, κάποιοι από τους αρχικούς engineers έχουν φύγει και μέρος της δομής εξαρτήσεων δεν είναι πλέον προφανές. Και τότε κάποιος πρέπει να αλλάξει μία στήλη, έναν πίνακα ή κάποιο άλλο object.',
        'Το SQL μπορεί να είναι απλό. Η δύσκολη ερώτηση είναι: «Τι άλλο εξαρτάται από αυτό;» Αν η απάντηση είναι ελλιπής, το αποτέλεσμα μπορεί να είναι αποτυχημένα deployments, χαλασμένα reports, application errors ή production incidents.',
      ],
      capabilities: [
        { title: 'Read-only ανάλυση', text: 'Το LegacyCI αναλύει metadata χωρίς να χρειάζεται δικαιώματα αλλαγής στο production source.' },
        { title: 'Ανάλυση dependencies και lineage', text: 'Οι υποστηριζόμενες σχέσεις ανάμεσα σε database objects μπορούν να χαρτογραφούνται και να εξετάζονται.' },
        { title: 'Ανάλυση πριν από την αλλαγή', text: 'Μία προτεινόμενη δομική αλλαγή μπορεί να αναλυθεί πριν εκτελεστεί στην πηγή.' },
        { title: 'Τεκμήρια και αβεβαιότητα', text: 'Το σύστημα μπορεί να δείχνει τι γνωρίζει με επαρκή τεκμηρίωση και σε ποια σημεία η εικόνα των εξαρτήσεων παραμένει ελλιπής.' },
      ],
      value: 'Το LegacyCI δεν δημιουργείται για να αντικαταστήσει την κρίση των engineers. Δημιουργείται για να τους δίνει καλύτερη εικόνα πριν χρειαστεί να χρησιμοποιήσουν αυτή την κρίση.',
      boundary: 'Η δημόσια σελίδα δεν εκθέτει database connections, credentials, metadata snapshots, SQL proposals, impact reports, customer schemas, private agents, enterprise configuration ή source-system data.',
    },
  },
}
