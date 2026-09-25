import type { NoitisLanguage } from './i18n/LanguageContext'
import type { ProductSlug } from './productCatalog'

export type CompanyPageSlug = 'products' | 'how-we-build' | 'about' | 'contact'

export type CompanySection = {
  title: string
  paragraphs: string[]
  questions?: string[]
}

export type CompanyPageCopy = {
  eyebrow: string
  title: string
  intro: string
  sections: CompanySection[]
}

export type DirectoryProductCopy = {
  category: string
  intro: string
  problemLabel: string
  problem: string
  cta: string
}

export const companyPageUi: Record<NoitisLanguage, {
  nav: { products: string; how: string; about: string; contact: string; privacy: string; terms: string; trademarks: string }
  menuOpen: string
  menuClose: string
  navAria: string
  switchToLight: string
  switchToDark: string
  light: string
  dark: string
  skip: string
  email: string
  footer: string
  rights: string
}> = {
  en: {
    nav: { products: 'Products', how: 'How we build', about: 'About', contact: 'Contact', privacy: 'Privacy', terms: 'Terms', trademarks: 'Trademarks' },
    menuOpen: 'Open navigation',
    menuClose: 'Close navigation',
    navAria: 'Main navigation',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    light: 'Light',
    dark: 'Dark',
    skip: 'Skip to main content',
    email: 'Email Noitis',
    footer: 'Built in Greece. Designed for a wider world.',
    rights: 'All rights reserved.',
  },
  el: {
    nav: { products: 'Προϊόντα', how: 'Πώς δημιουργούμε', about: 'Η Noitis', contact: 'Επικοινωνία', privacy: 'Απόρρητο', terms: 'Όροι χρήσης', trademarks: 'Εμπορικά σήματα' },
    menuOpen: 'Άνοιγμα μενού',
    menuClose: 'Κλείσιμο μενού',
    navAria: 'Κύρια πλοήγηση',
    switchToLight: 'Μετάβαση σε φωτεινό θέμα',
    switchToDark: 'Μετάβαση σε σκούρο θέμα',
    light: 'Φωτεινό',
    dark: 'Σκούρο',
    skip: 'Μετάβαση στο κύριο περιεχόμενο',
    email: 'Email στη Noitis',
    footer: 'Χτίζεται στην Ελλάδα. Σχεδιάζεται για έναν ευρύτερο κόσμο.',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
  },
}

export const companyPageContent: Record<CompanyPageSlug, Record<NoitisLanguage, CompanyPageCopy>> = {
  products: {
    en: {
      eyebrow: 'Noitis products',
      title: 'Six products. Six different problems.',
      intro: 'Each Noitis product started from a different situation we believed could be handled better. Some are about business operations, some about money, some about software systems, and one about everyday family life. They do not need to become one product. They only need to solve their own problem well.',
      sections: [],
    },
    el: {
      eyebrow: 'Προϊόντα Noitis',
      title: 'Έξι προϊόντα. Έξι διαφορετικά προβλήματα.',
      intro: 'Κάθε προϊόν της Noitis ξεκίνησε από μία διαφορετική κατάσταση που πιστεύαμε ότι μπορούσε να αντιμετωπιστεί καλύτερα. Κάποια αφορούν την επιχειρησιακή λειτουργία, κάποια τα χρήματα, κάποια τα πληροφοριακά συστήματα και ένα την καθημερινή ζωή μιας οικογένειας. Δεν χρειάζεται να γίνουν όλα ένα προϊόν. Χρειάζεται το καθένα να λύνει καλά το δικό του πρόβλημα.',
      sections: [],
    },
  },
  'how-we-build': {
    en: {
      eyebrow: 'How we build',
      title: 'We do not want features to become more important than the problem they are supposed to solve.',
      intro: 'A product can have a long feature list and still make the user’s life more complicated. We try to work in the opposite direction: start with the situation we want to improve, then decide what the product genuinely needs.',
      sections: [
        {
          title: 'We understand the workflow first',
          paragraphs: ['Before deciding what the system should do, we try to understand what the person is already doing. These questions usually tell us more than a feature list.'],
          questions: ['What information do they need?', 'Where does it come from?', 'What happens when something goes wrong?', 'Which parts depend on memory?', 'Which parts are repeated manually?', 'Where does a mistake become expensive?'],
        },
        {
          title: 'We prefer understandable decisions',
          paragraphs: ['When a system produces an important result, we want the user to be able to understand it. The answer should exist inside the system, not only in the head of the person who built it.'],
          questions: ['Why was this booking rejected?', 'Why did this payment remain pending?', 'Why did this compensation amount change?', 'Why is this database object affected?', 'Why does this AI action require approval?'],
        },
        {
          title: 'We automate carefully',
          paragraphs: ['Automation is useful when it removes work people should not have to repeat. That does not mean every decision should disappear inside an automated process. When something needs human authority, the product should keep that boundary clear.'],
        },
        {
          title: 'We build for imperfect situations',
          paragraphs: ['Real systems do not operate with perfect inputs and perfect users. Plans change. Connections fail. People make mistakes. Records are incomplete. Resources become unavailable. We treat those cases as part of the product rather than something to think about afterwards.'],
        },
      ],
    },
    el: {
      eyebrow: 'Πώς δημιουργούμε',
      title: 'Δεν θέλουμε η λίστα των features να γίνει σημαντικότερη από το πρόβλημα που προσπαθούν να λύσουν.',
      intro: 'Ένα προϊόν μπορεί να έχει δεκάδες λειτουργίες και παρ’ όλα αυτά να κάνει τη ζωή του χρήστη πιο δύσκολη. Εμείς προσπαθούμε να κινηθούμε προς την αντίθετη κατεύθυνση: ξεκινάμε από την κατάσταση που θέλουμε να βελτιώσουμε και μετά αποφασίζουμε τι πραγματικά χρειάζεται το προϊόν.',
      sections: [
        {
          title: 'Καταλαβαίνουμε πρώτα τη ροή εργασίας',
          paragraphs: ['Πριν αποφασίσουμε τι πρέπει να κάνει το σύστημα, προσπαθούμε να καταλάβουμε τι κάνει ήδη ο άνθρωπος. Αυτές οι ερωτήσεις συνήθως μας λένε περισσότερα από μία λίστα features.'],
          questions: ['Ποια πληροφορία χρειάζεται;', 'Από πού έρχεται;', 'Τι γίνεται όταν κάτι πάει στραβά;', 'Ποια σημεία βασίζονται στη μνήμη;', 'Ποιες εργασίες επαναλαμβάνονται χειροκίνητα;', 'Πότε ένα λάθος γίνεται ακριβό;'],
        },
        {
          title: 'Προτιμούμε αποφάσεις που εξηγούνται',
          paragraphs: ['Όταν ένα σύστημα παράγει ένα σημαντικό αποτέλεσμα, θέλουμε ο χρήστης να μπορεί να το καταλάβει. Η απάντηση πρέπει να υπάρχει μέσα στο ίδιο το σύστημα και όχι μόνο στο μυαλό αυτού που το δημιούργησε.'],
          questions: ['Γιατί απορρίφθηκε αυτή η κράτηση;', 'Γιατί έμεινε σε εκκρεμότητα αυτή η πληρωμή;', 'Γιατί άλλαξε αυτό το ποσό αμοιβής;', 'Γιατί επηρεάζεται αυτό το database object;', 'Γιατί αυτή η ενέργεια AI χρειάζεται έγκριση;'],
        },
        {
          title: 'Αυτοματοποιούμε με μέτρο',
          paragraphs: ['Η αυτοματοποίηση είναι χρήσιμη όταν αφαιρεί δουλειά που δεν υπάρχει λόγος να επαναλαμβάνει ένας άνθρωπος. Αυτό δεν σημαίνει ότι κάθε απόφαση πρέπει να εξαφανιστεί μέσα σε μία αυτοματοποιημένη διαδικασία. Όταν κάτι χρειάζεται ανθρώπινη εξουσιοδότηση, το προϊόν πρέπει να κρατά αυτό το όριο ξεκάθαρο.'],
        },
        {
          title: 'Σχεδιάζουμε για μη ιδανικές καταστάσεις',
          paragraphs: ['Τα πραγματικά συστήματα δεν λειτουργούν με τέλεια δεδομένα και τέλειους χρήστες. Τα σχέδια αλλάζουν. Οι συνδέσεις αποτυγχάνουν. Οι άνθρωποι κάνουν λάθη. Οι εγγραφές είναι ελλιπείς. Οι πόροι παύουν να είναι διαθέσιμοι. Αντιμετωπίζουμε αυτές τις περιπτώσεις ως μέρος του προϊόντος και όχι ως κάτι που θα σκεφτούμε αργότερα.'],
        },
      ],
    },
  },
  about: {
    en: {
      eyebrow: 'About Noitis',
      title: 'We build things we believe should already exist.',
      intro: 'Noitis is a technology company being developed in Greece. The products are different, but the reason behind them is usually similar: we notice a problem people have learned to tolerate, try to understand why the existing tools do not solve it properly, and then build our own answer.',
      sections: [
        {
          title: 'The name',
          paragraphs: ['The name Noitis is inspired by the Greek ideas of nous and noesis: mind, thought, understanding, and the conception of an idea.', 'We liked the idea of a name connected with understanding something first and creating something from that understanding. That still describes the company well.'],
        },
        {
          title: 'What interests us',
          paragraphs: ['We are interested in problems where better information or better coordination can make a meaningful difference.', 'A schedule that understands resources instead of only time. A financial tool that understands obligations instead of only transactions. An AI system that understands organisational boundaries. A compensation system that can explain its numbers. A family tool that reduces what people have to remember. A database tool that helps engineers see consequences before making a change.', 'The industries are different. The underlying idea is not.'],
        },
        {
          title: 'From Greece',
          paragraphs: ['Noitis is being built in Greece, and that is an important part of our identity.', 'At the same time, the problems we are working on are not particularly Greek problems. Wherever the same problem exists, we want the product to make sense there too.'],
        },
      ],
    },
    el: {
      eyebrow: 'Η Noitis',
      title: 'Δημιουργούμε πράγματα που πιστεύουμε ότι θα έπρεπε ήδη να υπάρχουν.',
      intro: 'Η Noitis είναι μία εταιρεία τεχνολογίας που αναπτύσσεται στην Ελλάδα. Τα προϊόντα μας είναι διαφορετικά, αλλά ο λόγος πίσω από αυτά είναι συνήθως παρόμοιος: βλέπουμε ένα πρόβλημα που ο κόσμος έχει μάθει να ανέχεται, προσπαθούμε να καταλάβουμε γιατί τα υπάρχοντα εργαλεία δεν το λύνουν σωστά και μετά δημιουργούμε τη δική μας απάντηση.',
      sections: [
        {
          title: 'Το όνομα',
          paragraphs: ['Το όνομα Noitis αντλεί έμπνευση από τις ελληνικές έννοιες του νου και της νόησης: νους, σκέψη, κατανόηση και σύλληψη μιας ιδέας.', 'Μας άρεσε η ιδέα ενός ονόματος που συνδέεται με το να κατανοούμε πρώτα κάτι και μετά να δημιουργούμε κάτι μέσα από αυτή την κατανόηση. Αυτό εξακολουθεί να περιγράφει αρκετά καλά την εταιρεία.'],
        },
        {
          title: 'Τι μας ενδιαφέρει',
          paragraphs: ['Μας ενδιαφέρουν προβλήματα στα οποία καλύτερη πληροφορία ή καλύτερος συντονισμός μπορεί να κάνει ουσιαστική διαφορά.', 'Ένα πρόγραμμα που καταλαβαίνει τους πόρους και όχι μόνο τον χρόνο. Ένα οικονομικό εργαλείο που καταλαβαίνει τις υποχρεώσεις και όχι μόνο τις συναλλαγές. Ένα σύστημα AI που καταλαβαίνει τα οργανωτικά όρια. Ένα σύστημα αμοιβών που μπορεί να εξηγήσει τους αριθμούς του. Ένα οικογενειακό εργαλείο που μειώνει όσα πρέπει να θυμόμαστε. Ένα database εργαλείο που βοηθά τους engineers να δουν τις συνέπειες πριν κάνουν μία αλλαγή.', 'Οι τομείς είναι διαφορετικοί. Η βασική ιδέα όχι.'],
        },
        {
          title: 'Από την Ελλάδα',
          paragraphs: ['Η Noitis χτίζεται στην Ελλάδα και αυτό είναι σημαντικό κομμάτι της ταυτότητάς μας.', 'Ταυτόχρονα, τα προβλήματα πάνω στα οποία δουλεύουμε δεν είναι ελληνικά προβλήματα. Όπου υπάρχει το ίδιο πρόβλημα, θέλουμε το προϊόν να έχει νόημα και εκεί.'],
        },
      ],
    },
  },
  contact: {
    en: {
      eyebrow: 'Contact',
      title: 'Talk to Noitis.',
      intro: 'If you want to discuss one of our products, a possible use case, a pilot, a partnership, or simply what we are building, you can contact us directly. We prefer useful conversations over complicated forms.',
      sections: [],
    },
    el: {
      eyebrow: 'Επικοινωνία',
      title: 'Μιλήστε με τη Noitis.',
      intro: 'Αν θέλετε να συζητήσουμε για κάποιο από τα προϊόντα μας, ένα πιθανό use case, μία πιλοτική εφαρμογή, μία συνεργασία ή απλώς για αυτά που δημιουργούμε, μπορείτε να επικοινωνήσετε μαζί μας απευθείας. Προτιμούμε μία χρήσιμη συζήτηση από μία περίπλοκη φόρμα.',
      sections: [],
    },
  },
}

export const directoryProductCopy: Record<ProductSlug, Record<NoitisLanguage, DirectoryProductCopy>> = {
  agentgate: {
    en: { category: 'AI governance', intro: 'AI agents become useful when they are able to act. That is also where governance becomes important. AgentGate gives organisations a place to define which actions can happen automatically, which require human approval, and which should be blocked.', problemLabel: 'The problem it addresses', problem: 'Without a clear control layer, organisations often have to choose between giving AI too little authority to be useful or too much authority to be comfortable with. AgentGate is being built to create a practical middle ground.', cta: 'Explore AgentGate' },
    el: { category: 'Διακυβέρνηση AI', intro: 'Οι AI agents γίνονται χρήσιμοι όταν μπορούν να ενεργούν. Εκεί ακριβώς γίνεται σημαντικός και ο έλεγχος. Το AgentGate δίνει σε έναν οργανισμό έναν σαφή τρόπο να ορίζει ποιες ενέργειες γίνονται αυτόματα, ποιες χρειάζονται ανθρώπινη έγκριση και ποιες πρέπει να απορρίπτονται.', problemLabel: 'Το πρόβλημα που αντιμετωπίζει', problem: 'Χωρίς ένα ξεκάθαρο επίπεδο ελέγχου, οι οργανισμοί συχνά αναγκάζονται να επιλέξουν ανάμεσα σε πολύ λίγη εξουσιοδότηση ώστε το AI να μην είναι χρήσιμο ή υπερβολικά μεγάλη ώστε το ρίσκο να γίνεται δύσκολο να αποδεχθούν. Το AgentGate δημιουργείται για τον χώρο ανάμεσα στα δύο.', cta: 'Δείτε το AgentGate' },
  },
  autopaylot: {
    en: { category: 'Financial obligations', intro: 'Recurring payments are individually simple. Together, they are not. Rent, electricity, subscriptions, loan payments, savings, and everyday expenses may all compete for the same income. AutoPaylot brings those obligations into one view and helps organise them before money moves.', problemLabel: 'The problem it addresses', problem: 'The cost is not only late-payment fees. It is also the time and attention required every month to work out what has been paid, what is coming next, and whether paying something now creates a problem somewhere else.', cta: 'Explore AutoPaylot' },
    el: { category: 'Οικονομικές υποχρεώσεις', intro: 'Οι επαναλαμβανόμενες πληρωμές είναι απλές όταν τις βλέπουμε μία-μία. Όταν τις δούμε όλες μαζί, παύουν να είναι. Ενοίκιο, ρεύμα, συνδρομές, δόσεις, αποταμίευση και καθημερινά έξοδα μπορεί να διεκδικούν το ίδιο εισόδημα. Το AutoPaylot τα φέρνει σε μία εικόνα πριν μετακινηθούν χρήματα.', problemLabel: 'Το πρόβλημα που αντιμετωπίζει', problem: 'Το κόστος δεν είναι μόνο οι προσαυξήσεις από καθυστερημένες πληρωμές. Είναι και ο χρόνος και η προσοχή που χρειάζονται κάθε μήνα για να θυμόμαστε τι πληρώθηκε, τι έρχεται και αν μία πληρωμή σήμερα δημιουργεί πρόβλημα αλλού.', cta: 'Δείτε το AutoPaylot' },
  },
  'business-resource-scheduler': {
    en: { category: 'Operational scheduling', intro: 'A booking rarely depends on time alone. It may also require the right person, skill, room, equipment, location, or enough preparation time. Business Resource Scheduler treats those requirements as part of the schedule itself.', problemLabel: 'The problem it addresses', problem: 'A calendar may show availability even when the operation does not actually have the resources required to perform the work. That creates double bookings, delays, idle capacity, and avoidable rescheduling.', cta: 'Explore Business Resource Scheduler' },
    el: { category: 'Επιχειρησιακός προγραμματισμός', intro: 'Μία κράτηση σπάνια εξαρτάται μόνο από την ώρα. Μπορεί να χρειάζεται το σωστό άτομο, τη σωστή ειδικότητα, συγκεκριμένο χώρο, εξοπλισμό, τοποθεσία ή αρκετό χρόνο προετοιμασίας. Το Business Resource Scheduler αντιμετωπίζει όλα αυτά ως μέρος της ίδιας της κράτησης.', problemLabel: 'Το πρόβλημα που αντιμετωπίζει', problem: 'Ένα ημερολόγιο μπορεί να δείχνει διαθεσιμότητα ενώ στην πράξη η επιχείρηση δεν έχει τους πόρους που χρειάζονται για να εκτελέσει τη δουλειά. Από εκεί προκύπτουν διπλές κρατήσεις, καθυστερήσεις, χαμένη δυναμικότητα και συνεχείς αλλαγές προγράμματος.', cta: 'Δείτε το Business Resource Scheduler' },
  },
  earnlogic: {
    en: { category: 'Compensation intelligence', intro: 'Compensation becomes difficult to manage when sales data, targets, plans, exceptions, and calculations live in different places. EarnLogic connects those pieces.', problemLabel: 'The problem it addresses', problem: 'When somebody asks why a compensation result is what it is, finding the answer should not require several spreadsheets and the person who originally built them. The calculation should be reproducible and understandable.', cta: 'Explore EarnLogic' },
    el: { category: 'Αμοιβές και κίνητρα', intro: 'Οι μεταβλητές αμοιβές γίνονται δύσκολες όταν τα δεδομένα πωλήσεων, οι στόχοι, τα plans, οι εξαιρέσεις και οι υπολογισμοί βρίσκονται σε διαφορετικά σημεία. Το EarnLogic συνδέει αυτά τα κομμάτια.', problemLabel: 'Το πρόβλημα που αντιμετωπίζει', problem: 'Όταν κάποιος ρωτά γιατί η αμοιβή του είναι αυτό το ποσό, η απάντηση δεν θα έπρεπε να απαιτεί πολλά spreadsheets και τον άνθρωπο που τα έφτιαξε αρχικά. Ο υπολογισμός πρέπει να μπορεί να επαναληφθεί και να εξηγηθεί.', cta: 'Δείτε το EarnLogic' },
  },
  familyos: {
    en: { category: 'Family coordination', intro: 'Families already coordinate a surprising amount of information. Appointments, school activities, bookings, providers, household tasks, reminders, and shared decisions often live in different places. FamilyOS brings that information into one household context.', problemLabel: 'The problem it addresses', problem: 'Most of the cost is not financial. It is time, repetition, and mental load: searching again for information somebody already found, asking who is handling something, or realising too late that everyone assumed someone else remembered it.', cta: 'Explore FamilyOS' },
    el: { category: 'Οικογενειακός συντονισμός', intro: 'Μία οικογένεια συντονίζει καθημερινά πολύ περισσότερη πληροφορία απ’ όσο φαίνεται. Ραντεβού, σχολικές δραστηριότητες, κρατήσεις, επαγγελματίες, υποχρεώσεις σπιτιού, υπενθυμίσεις και κοινές αποφάσεις βρίσκονται συνήθως σε διαφορετικά σημεία. Το FamilyOS τα φέρνει στο ίδιο οικογενειακό πλαίσιο.', problemLabel: 'Το πρόβλημα που αντιμετωπίζει', problem: 'Το μεγαλύτερο κόστος δεν είναι οικονομικό. Είναι ο χρόνος, η επανάληψη και το mental load: να ψάχνουμε ξανά μία πληροφορία, να ρωτάμε ποιος έχει αναλάβει κάτι ή να καταλαβαίνουμε αργά ότι όλοι θεωρούσαν πως το θυμόταν κάποιος άλλος.', cta: 'Δείτε το FamilyOS' },
  },
  legacyci: {
    en: { category: 'Database change intelligence', intro: 'Mature database systems accumulate years of dependencies. A table may feed a view, that view may feed another object, an application may depend on it, and an old report may still use it. LegacyCI is designed to make those relationships easier to understand before something changes.', problemLabel: 'The problem it addresses', problem: 'The SQL change itself may take minutes. Understanding everything that could be affected may take much longer. When that understanding is incomplete, the cost can be failed deployments, broken applications, emergency fixes, and production incidents.', cta: 'Explore LegacyCI' },
    el: { category: 'Ανάλυση αλλαγών βάσεων δεδομένων', intro: 'Τα ώριμα database systems συσσωρεύουν χρόνια εξαρτήσεων. Ένας πίνακας μπορεί να τροφοδοτεί ένα view, το view άλλο object, μία εφαρμογή να βασίζεται σε αυτό και ένα παλιό report να εξακολουθεί να το χρησιμοποιεί. Το LegacyCI κάνει αυτές τις σχέσεις πιο ορατές πριν αλλάξει κάτι.', problemLabel: 'Το πρόβλημα που αντιμετωπίζει', problem: 'Το ίδιο το SQL μπορεί να αλλάξει μέσα σε λίγα λεπτά. Το να καταλάβουμε όμως όλα όσα μπορεί να επηρεαστούν είναι πολύ πιο δύσκολο. Όταν αυτή η εικόνα δεν είναι πλήρης, το κόστος μπορεί να είναι αποτυχημένα deployments, χαλασμένες εφαρμογές, επείγουσες διορθώσεις και production incidents.', cta: 'Δείτε το LegacyCI' },
  },
}
