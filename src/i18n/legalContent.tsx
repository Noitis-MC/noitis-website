import type { ReactNode } from 'react'
import type { NoitisLanguage } from './LanguageContext'

export type LegalSection = {
  heading: string
  body: ReactNode
}

export type LegalPageCopy = {
  eyebrow: string
  title: string
  lead: string
  effectiveDateLabel: string
  effectiveDate: string
  sections: LegalSection[]
  footerTagline: string
}

export type LegalCommonCopy = {
  skip: string
  returnHomeAria: string
  navAria: string
  home: string
  privacy: string
  terms: string
  trademarks: string
  rights: string
}

export const legalCommon: Record<NoitisLanguage, LegalCommonCopy> = {
  en: {
    skip: 'Skip to main content',
    returnHomeAria: 'Return to Noitis home',
    navAria: 'Legal navigation',
    home: 'Home',
    privacy: 'Privacy',
    terms: 'Terms',
    trademarks: 'Trademarks',
    rights: 'All rights reserved.',
  },
  el: {
    skip: 'Μετάβαση στο κύριο περιεχόμενο',
    returnHomeAria: 'Επιστροφή στην αρχική Noitis',
    navAria: 'Νομική πλοήγηση',
    home: 'Αρχική',
    privacy: 'Απόρρητο',
    terms: 'Όροι',
    trademarks: 'Εμπορικά σήματα',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
  },
}

const privacyEnglish: LegalPageCopy = {
  eyebrow: 'Noitis™ privacy notice',
  title: 'Privacy should be understandable.',
  lead: 'This notice describes the current privacy behavior of the public Noitis company website. Individual Noitis products may use separate notices when their own services process personal data.',
  effectiveDateLabel: 'Effective date:',
  effectiveDate: '25 August 2026',
  footerTagline: 'Privacy should be understandable.',
  sections: [
    {
      heading: '1. Who operates this website?',
      body: <>
        <p>This website is operated under the <strong>Noitis™</strong> brand from Greece. The current notice does not represent that a separate registered Noitis legal entity has been formed.</p>
        <dl className="privacy-details"><div><dt>Privacy contact</dt><dd>chouliarasmatthaios@gmail.com</dd></div></dl>
        <p>If the legal identity responsible for Noitis changes, or a registered entity becomes the controller for this website, this notice will be updated accordingly.</p>
      </>,
    },
    {
      heading: '2. What the current website collects',
      body: <>
        <p>The Noitis company website is static-first. Its frontend does not intentionally include account creation, contact forms, advertising trackers, marketing analytics, payment collection, or a Noitis-operated backend database.</p>
        <p>The website stores two browser preferences locally:</p>
        <ul>
          <li><code>noitis-theme</code> — remembers whether the visitor selected the light or dark theme.</li>
          <li><code>noitis.language</code> — remembers whether the visitor selected English or Greek.</li>
        </ul>
        <p>These preferences are stored in the visitor&apos;s browser and are not transmitted to a Noitis application server by the current website code.</p>
      </>,
    },
    {
      heading: '3. Hosting and technical connection data',
      body: <>
        <p>The website is designed for static hosting through GitHub Pages. GitHub Pages activation, the final production domain, DNS, and HTTPS configuration are deployment settings and may change as the website moves toward launch.</p>
        <p>When the website is served by a hosting provider, that provider may process technical connection information needed to deliver and secure the site, such as IP addresses, request information, device/browser information, and security logs under its own applicable terms and policies.</p>
        <p>The current Noitis frontend does not intentionally copy hosting data into a separate Noitis analytics or customer database.</p>
      </>,
    },
    {
      heading: '4. Why information may be processed',
      body: <>
        <ul>
          <li>To deliver the website and static assets.</li>
          <li>To remember the selected theme and language locally in the browser.</li>
          <li>To maintain security, reliability, and availability through the hosting platform.</li>
          <li>To comply with applicable legal obligations.</li>
        </ul>
        <p>If Noitis later adds forms, accounts, analytics, newsletters, support tools, cookies, or other data-processing features, this notice must be updated to reflect the real behavior before those features are treated as production-ready.</p>
      </>,
    },
    {
      heading: '5. Cookies and local storage',
      body: <p>The current website does not intentionally set advertising or analytics cookies. Visitors can remove the <code>noitis-theme</code> and <code>noitis.language</code> values by clearing site data; removing them only resets the saved theme and language choices.</p>,
    },
    {
      heading: '6. Links to Noitis products and third-party services',
      body: <p>The website may link to a Noitis product only when a public destination is explicitly configured. Linked products and third-party destinations may have separate terms, privacy notices, authentication, infrastructure, and data flows. This notice does not automatically govern those separate services.</p>,
    },
    {
      heading: '7. Retention',
      body: <p>The <code>noitis-theme</code> and <code>noitis.language</code> preferences remain in the visitor&apos;s browser until the visitor clears them or browser/site storage is otherwise removed. Hosting-provider technical data is retained according to the provider&apos;s applicable policies; Noitis does not currently maintain a separate website analytics database.</p>,
    },
    {
      heading: '8. International processing',
      body: <p>Internet infrastructure and hosting providers may process information in more than one country. Where applicable law requires safeguards for international transfers, the relevant service provider and controller are responsible for appropriate legal mechanisms.</p>,
    },
    {
      heading: '9. Your rights',
      body: <>
        <p>Depending on applicable law and the circumstances, individuals may have rights concerning personal data, including access, correction, deletion, restriction, portability, objection, and withdrawal of consent where consent is the applicable legal basis.</p>
        <p>Because the current website has no user accounts or Noitis-operated personal-data database, Noitis may have little or no website-specific personal data with which to identify a visitor. Questions or rights requests may nevertheless be sent to the contact address above.</p>
        <p>Individuals may also have the right to complain to a competent supervisory authority. In Greece, this may include the Hellenic Data Protection Authority.</p>
      </>,
    },
    {
      heading: '10. Children',
      body: <p>The public company website is not designed to collect personal information from children and does not intentionally provide forms or account registration through which a child could submit personal data to Noitis.</p>,
    },
    {
      heading: '11. Security',
      body: <p>Noitis aims to keep the website limited in scope and avoid collecting data it does not need. No internet service can guarantee absolute security, and hosting/provider security remains subject to the relevant platform&apos;s controls and terms.</p>,
    },
    {
      heading: '12. Changes to this notice',
      body: <p>This notice may change when the website, Noitis organization, hosting model, legal requirements, or actual data practices change. The effective date will be updated for material revisions.</p>,
    },
  ],
}

const privacyGreek: LegalPageCopy = {
  eyebrow: 'Δήλωση απορρήτου Noitis™',
  title: 'Το απόρρητο πρέπει να είναι κατανοητό.',
  lead: 'Η παρούσα δήλωση περιγράφει την τρέχουσα συμπεριφορά απορρήτου του δημόσιου εταιρικού ιστότοπου Noitis. Επιμέρους προϊόντα Noitis μπορεί να χρησιμοποιούν ξεχωριστές δηλώσεις όταν οι δικές τους υπηρεσίες επεξεργάζονται προσωπικά δεδομένα.',
  effectiveDateLabel: 'Ημερομηνία ισχύος:',
  effectiveDate: '25 Αυγούστου 2026',
  footerTagline: 'Το απόρρητο πρέπει να είναι κατανοητό.',
  sections: [
    {
      heading: '1. Ποιος λειτουργεί αυτόν τον ιστότοπο;',
      body: <>
        <p>Ο ιστότοπος λειτουργεί υπό το brand <strong>Noitis™</strong> από την Ελλάδα. Η παρούσα δήλωση δεν υποδηλώνει ότι έχει συσταθεί ξεχωριστή καταχωρισμένη νομική οντότητα Noitis.</p>
        <dl className="privacy-details"><div><dt>Επικοινωνία για θέματα απορρήτου</dt><dd>chouliarasmatthaios@gmail.com</dd></div></dl>
        <p>Αν αλλάξει η νομική ταυτότητα που είναι υπεύθυνη για τη Noitis ή αν μια καταχωρισμένη οντότητα γίνει υπεύθυνος επεξεργασίας για αυτόν τον ιστότοπο, η δήλωση θα ενημερωθεί αναλόγως.</p>
      </>,
    },
    {
      heading: '2. Τι συλλέγει ο σημερινός ιστότοπος',
      body: <>
        <p>Ο εταιρικός ιστότοπος Noitis είναι static-first. Το frontend του δεν περιλαμβάνει σκόπιμα δημιουργία λογαριασμού, φόρμες επικοινωνίας, διαφημιστικούς trackers, marketing analytics, συλλογή πληρωμών ή backend βάση δεδομένων που λειτουργεί η Noitis.</p>
        <p>Ο ιστότοπος αποθηκεύει τοπικά δύο προτιμήσεις του browser:</p>
        <ul>
          <li><code>noitis-theme</code> — θυμάται αν ο επισκέπτης επέλεξε φωτεινό ή σκοτεινό θέμα.</li>
          <li><code>noitis.language</code> — θυμάται αν ο επισκέπτης επέλεξε Αγγλικά ή Ελληνικά.</li>
        </ul>
        <p>Οι προτιμήσεις αυτές αποθηκεύονται στον browser του επισκέπτη και δεν μεταδίδονται σε application server της Noitis από τον τρέχοντα κώδικα του ιστότοπου.</p>
      </>,
    },
    {
      heading: '3. Φιλοξενία και τεχνικά δεδομένα σύνδεσης',
      body: <>
        <p>Ο ιστότοπος έχει σχεδιαστεί για στατική φιλοξενία μέσω GitHub Pages. Η ενεργοποίηση GitHub Pages, το τελικό production domain, το DNS και η ρύθμιση HTTPS είναι ρυθμίσεις deployment και μπορεί να αλλάξουν καθώς ο ιστότοπος προχωρά προς το launch.</p>
        <p>Όταν ο ιστότοπος εξυπηρετείται από πάροχο φιλοξενίας, ο πάροχος μπορεί να επεξεργάζεται τεχνικές πληροφορίες σύνδεσης που απαιτούνται για την παράδοση και την ασφάλεια του site, όπως IP addresses, πληροφορίες requests, στοιχεία συσκευής/browser και security logs, σύμφωνα με τους δικούς του εφαρμοστέους όρους και πολιτικές.</p>
        <p>Το τρέχον frontend της Noitis δεν αντιγράφει σκόπιμα δεδομένα φιλοξενίας σε ξεχωριστή βάση analytics ή πελατών της Noitis.</p>
      </>,
    },
    {
      heading: '4. Γιατί μπορεί να γίνεται επεξεργασία πληροφοριών',
      body: <>
        <ul>
          <li>Για την παράδοση του ιστότοπου και των static assets.</li>
          <li>Για να απομνημονεύεται το επιλεγμένο θέμα και η γλώσσα τοπικά στον browser.</li>
          <li>Για τη διατήρηση ασφάλειας, αξιοπιστίας και διαθεσιμότητας μέσω της πλατφόρμας φιλοξενίας.</li>
          <li>Για συμμόρφωση με εφαρμοστέες νομικές υποχρεώσεις.</li>
        </ul>
        <p>Αν η Noitis προσθέσει αργότερα φόρμες, λογαριασμούς, analytics, newsletters, εργαλεία υποστήριξης, cookies ή άλλες λειτουργίες επεξεργασίας δεδομένων, η παρούσα δήλωση πρέπει να ενημερωθεί ώστε να αντικατοπτρίζει την πραγματική συμπεριφορά πριν οι λειτουργίες αυτές θεωρηθούν production-ready.</p>
      </>,
    },
    {
      heading: '5. Cookies και τοπική αποθήκευση',
      body: <p>Ο τρέχων ιστότοπος δεν ορίζει σκόπιμα διαφημιστικά ή analytics cookies. Οι επισκέπτες μπορούν να αφαιρέσουν τις τιμές <code>noitis-theme</code> και <code>noitis.language</code> καθαρίζοντας τα δεδομένα του site· η αφαίρεσή τους επαναφέρει μόνο τις αποθηκευμένες επιλογές θέματος και γλώσσας.</p>,
    },
    {
      heading: '6. Σύνδεσμοι προς προϊόντα Noitis και υπηρεσίες τρίτων',
      body: <p>Ο ιστότοπος μπορεί να συνδέεται με προϊόν Noitis μόνο όταν έχει ρυθμιστεί ρητά δημόσιος προορισμός. Τα συνδεδεμένα προϊόντα και οι προορισμοί τρίτων μπορεί να έχουν ξεχωριστούς όρους, δηλώσεις απορρήτου, authentication, υποδομή και ροές δεδομένων. Η παρούσα δήλωση δεν διέπει αυτόματα αυτές τις ξεχωριστές υπηρεσίες.</p>,
    },
    {
      heading: '7. Διατήρηση',
      body: <p>Οι προτιμήσεις <code>noitis-theme</code> και <code>noitis.language</code> παραμένουν στον browser του επισκέπτη μέχρι να τις διαγράψει ή να αφαιρεθούν με άλλο τρόπο τα δεδομένα browser/site. Τα τεχνικά δεδομένα του παρόχου φιλοξενίας διατηρούνται σύμφωνα με τις εφαρμοστέες πολιτικές του· η Noitis δεν διατηρεί σήμερα ξεχωριστή βάση website analytics.</p>,
    },
    {
      heading: '8. Διεθνής επεξεργασία',
      body: <p>Η διαδικτυακή υποδομή και οι πάροχοι φιλοξενίας μπορεί να επεξεργάζονται πληροφορίες σε περισσότερες από μία χώρες. Όπου η εφαρμοστέα νομοθεσία απαιτεί εγγυήσεις για διεθνείς διαβιβάσεις, ο σχετικός πάροχος υπηρεσίας και ο υπεύθυνος επεξεργασίας είναι υπεύθυνοι για τους κατάλληλους νομικούς μηχανισμούς.</p>,
    },
    {
      heading: '9. Τα δικαιώματά σας',
      body: <>
        <p>Ανάλογα με την εφαρμοστέα νομοθεσία και τις περιστάσεις, τα άτομα μπορεί να έχουν δικαιώματα σχετικά με προσωπικά δεδομένα, μεταξύ άλλων πρόσβαση, διόρθωση, διαγραφή, περιορισμό, φορητότητα, εναντίωση και ανάκληση συγκατάθεσης όταν η συγκατάθεση αποτελεί την εφαρμοστέα νομική βάση.</p>
        <p>Επειδή ο τρέχων ιστότοπος δεν διαθέτει λογαριασμούς χρηστών ή βάση προσωπικών δεδομένων που λειτουργεί η Noitis, η Noitis μπορεί να διαθέτει ελάχιστα ή καθόλου website-specific προσωπικά δεδομένα με τα οποία να μπορεί να ταυτοποιήσει έναν επισκέπτη. Ερωτήματα ή αιτήματα άσκησης δικαιωμάτων μπορούν παρ&apos; όλα αυτά να σταλούν στην παραπάνω διεύθυνση επικοινωνίας.</p>
        <p>Τα άτομα μπορεί επίσης να έχουν δικαίωμα υποβολής καταγγελίας σε αρμόδια εποπτική αρχή. Στην Ελλάδα, αυτό μπορεί να περιλαμβάνει την Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα.</p>
      </>,
    },
    {
      heading: '10. Παιδιά',
      body: <p>Ο δημόσιος εταιρικός ιστότοπος δεν έχει σχεδιαστεί για να συλλέγει προσωπικές πληροφορίες από παιδιά και δεν παρέχει σκόπιμα φόρμες ή εγγραφή λογαριασμού μέσω των οποίων ένα παιδί θα μπορούσε να υποβάλει προσωπικά δεδομένα στη Noitis.</p>,
    },
    {
      heading: '11. Ασφάλεια',
      body: <p>Η Noitis επιδιώκει να κρατά τον ιστότοπο περιορισμένο ως προς το εύρος και να αποφεύγει τη συλλογή δεδομένων που δεν χρειάζεται. Καμία διαδικτυακή υπηρεσία δεν μπορεί να εγγυηθεί απόλυτη ασφάλεια και η ασφάλεια hosting/provider παραμένει υπό τους ελέγχους και τους όρους της σχετικής πλατφόρμας.</p>,
    },
    {
      heading: '12. Αλλαγές στην παρούσα δήλωση',
      body: <p>Η δήλωση μπορεί να αλλάζει όταν αλλάζουν ο ιστότοπος, η οργάνωση της Noitis, το μοντέλο φιλοξενίας, οι νομικές απαιτήσεις ή οι πραγματικές πρακτικές δεδομένων. Η ημερομηνία ισχύος θα ενημερώνεται για ουσιώδεις αναθεωρήσεις.</p>,
    },
  ],
}

const termsEnglish: LegalPageCopy = {
  eyebrow: 'Noitis™ terms of use',
  title: 'Clear terms for a public website.',
  lead: 'These terms govern use of the public Noitis website and explain the boundaries around its content, product information, intellectual property, and permitted use.',
  effectiveDateLabel: 'Effective date:',
  effectiveDate: '25 August 2026',
  footerTagline: 'Intelligence, engineered.',
  sections: [
    { heading: '1. About the website', body: <><p>The Noitis website is an informational company and product-discovery surface operated under the Noitis™ brand from Greece. It is not itself a production product service, customer account system, payment service, or contractual offer.</p><p>No separate registered Noitis legal entity is represented by these terms at this stage. If the responsible legal identity changes, the terms will be updated.</p></> },
    { heading: '2. Product information', body: <><p>Noitis products shown on the website are currently identified as <strong>In development</strong>. Descriptions are intended to reflect the current product repositories conservatively. Planned capabilities, roadmap items, production integrations, prices, public destinations, and release dates may change.</p><p>A product or pricing link is shown only when a public destination is explicitly configured for the production website. The absence of a link does not imply that a product has been launched.</p></> },
    { heading: '3. Intellectual property', body: <><p>Except for third-party materials governed by their own terms, the website&apos;s source code, text, visual design, logos, graphics, product descriptions, documentation, layouts, and other materials are owned by Noitis or their applicable rights holders.</p><p>Public access to the website or repository does not place those materials in the public domain and does not grant an open-source or commercial-use license. Repository source/content are governed by the proprietary LICENSE; Noitis brand identifiers are governed by the Trademark Policy.</p></> },
    { heading: '4. Permitted and prohibited use', body: <><p>You may browse and use the website for its intended informational purpose and make lawful references to Noitis and its products.</p><ul><li>Do not impersonate Noitis or falsely suggest affiliation, sponsorship, endorsement, or certification.</li><li>Do not misuse Noitis names, logos, marks, visual identity, or product identities.</li><li>Do not unlawfully copy, redistribute, rebrand, sell, sublicense, or commercially exploit protected materials.</li><li>Do not interfere with, attack, or attempt unauthorized access to website or linked infrastructure.</li><li>Do not remove or alter legal, ownership, copyright, or trademark notices.</li></ul></> },
    { heading: '5. No commercial commitment', body: <p>Unless Noitis expressly agrees otherwise in a signed written agreement, website content does not create a warranty, service-level commitment, purchase obligation, investment representation, employment offer, partnership, or promise that a feature, product, release, price, or date will become available.</p> },
    { heading: '6. External and product links', body: <p>Configured product or third-party destinations may have separate terms, privacy notices, security controls, and availability. Noitis is not responsible for third-party content or practices merely because the website links to them.</p> },
    { heading: '7. Privacy', body: <p>The current website privacy practices are described on the <a href="./privacy.html">Privacy</a> page.</p> },
    { heading: '8. No warranty', body: <p>To the maximum extent permitted by applicable law, the website and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, except rights or warranties that cannot lawfully be excluded.</p> },
    { heading: '9. Limitation of liability', body: <p>To the maximum extent permitted by applicable law, Noitis and its applicable owners, contributors, affiliates, or authorized representatives shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from the website or its content. Nothing in these terms limits liability where applicable law does not permit that limitation.</p> },
    { heading: '10. Changes', body: <p>Noitis may update the website and these terms as products, infrastructure, organization, or legal requirements evolve. Material revisions will be reflected by an updated effective date.</p> },
    { heading: '11. Applicable law', body: <p>Where a choice of law is legally permitted and no different written agreement applies, these terms are governed by the laws of Greece, without limiting mandatory rights under another applicable legal regime.</p> },
    { heading: '12. Contact', body: <><p>Questions about these terms or requests for permission concerning website materials may be sent to:</p><p><strong>chouliarasmatthaios@gmail.com</strong></p></> },
  ],
}

const termsGreek: LegalPageCopy = {
  eyebrow: 'Όροι χρήσης Noitis™',
  title: 'Καθαροί όροι για έναν δημόσιο ιστότοπο.',
  lead: 'Οι παρόντες όροι διέπουν τη χρήση του δημόσιου ιστότοπου Noitis και εξηγούν τα όρια σχετικά με το περιεχόμενο, τις πληροφορίες προϊόντων, την πνευματική ιδιοκτησία και την επιτρεπόμενη χρήση.',
  effectiveDateLabel: 'Ημερομηνία ισχύος:',
  effectiveDate: '25 Αυγούστου 2026',
  footerTagline: 'Intelligence, engineered.',
  sections: [
    { heading: '1. Σχετικά με τον ιστότοπο', body: <><p>Ο ιστότοπος Noitis είναι ενημερωτική επιφάνεια εταιρικής παρουσίασης και ανακάλυψης προϊόντων που λειτουργεί υπό το brand Noitis™ από την Ελλάδα. Δεν αποτελεί ο ίδιος production υπηρεσία προϊόντος, σύστημα λογαριασμών πελατών, υπηρεσία πληρωμών ή συμβατική προσφορά.</p><p>Σε αυτό το στάδιο οι παρόντες όροι δεν εκπροσωπούν ξεχωριστή καταχωρισμένη νομική οντότητα Noitis. Αν αλλάξει η υπεύθυνη νομική ταυτότητα, οι όροι θα ενημερωθούν.</p></> },
    { heading: '2. Πληροφορίες προϊόντων', body: <><p>Τα προϊόντα Noitis που εμφανίζονται στον ιστότοπο χαρακτηρίζονται σήμερα ως <strong>Υπό ανάπτυξη</strong>. Οι περιγραφές αποσκοπούν να αντικατοπτρίζουν συντηρητικά τα τρέχοντα product repositories. Σχεδιαζόμενες δυνατότητες, roadmap items, production integrations, τιμές, δημόσιοι προορισμοί και ημερομηνίες κυκλοφορίας μπορεί να αλλάξουν.</p><p>Σύνδεσμος προϊόντος ή τιμολόγησης εμφανίζεται μόνο όταν έχει ρυθμιστεί ρητά δημόσιος προορισμός για τον production ιστότοπο. Η απουσία συνδέσμου δεν σημαίνει ότι ένα προϊόν έχει κυκλοφορήσει.</p></> },
    { heading: '3. Πνευματική ιδιοκτησία', body: <><p>Με εξαίρεση υλικά τρίτων που διέπονται από τους δικούς τους όρους, ο πηγαίος κώδικας, το κείμενο, ο οπτικός σχεδιασμός, τα λογότυπα, τα γραφικά, οι περιγραφές προϊόντων, η τεκμηρίωση, τα layouts και άλλα υλικά του ιστότοπου ανήκουν στη Noitis ή στους αντίστοιχους δικαιούχους τους.</p><p>Η δημόσια πρόσβαση στον ιστότοπο ή στο repository δεν τοποθετεί τα υλικά αυτά στο public domain και δεν παρέχει open-source ή commercial-use άδεια. Το source/content του repository διέπεται από το proprietary LICENSE· τα brand identifiers της Noitis διέπονται από την Πολιτική Εμπορικών Σημάτων.</p></> },
    { heading: '4. Επιτρεπόμενη και απαγορευμένη χρήση', body: <><p>Μπορείτε να περιηγείστε και να χρησιμοποιείτε τον ιστότοπο για τον προβλεπόμενο ενημερωτικό σκοπό του και να κάνετε νόμιμες αναφορές στη Noitis και τα προϊόντα της.</p><ul><li>Μην παριστάνετε τη Noitis και μην υπονοείτε ψευδώς σχέση, χορηγία, έγκριση ή πιστοποίηση.</li><li>Μην κάνετε κατάχρηση ονομάτων, λογοτύπων, σημάτων, οπτικής ταυτότητας ή product identities της Noitis.</li><li>Μην αντιγράφετε, αναδιανέμετε, επανατοποθετείτε ως άλλο brand, πωλείτε, υποαδειοδοτείτε ή εκμεταλλεύεστε εμπορικά προστατευμένο υλικό κατά παράνομο τρόπο.</li><li>Μην παρεμβαίνετε, επιτίθεστε ή επιχειρείτε μη εξουσιοδοτημένη πρόσβαση στον ιστότοπο ή σε συνδεδεμένη υποδομή.</li><li>Μην αφαιρείτε ή τροποποιείτε νομικές σημειώσεις ή σημειώσεις ιδιοκτησίας, copyright ή trademark.</li></ul></> },
    { heading: '5. Καμία εμπορική δέσμευση', body: <p>Εκτός αν η Noitis συμφωνήσει ρητά διαφορετικά σε υπογεγραμμένη γραπτή συμφωνία, το περιεχόμενο του ιστότοπου δεν δημιουργεί εγγύηση, δέσμευση επιπέδου υπηρεσίας, υποχρέωση αγοράς, επενδυτική δήλωση, προσφορά εργασίας, συνεργασία ή υπόσχεση ότι συγκεκριμένη λειτουργία, προϊόν, release, τιμή ή ημερομηνία θα γίνει διαθέσιμη.</p> },
    { heading: '6. Εξωτερικοί σύνδεσμοι και σύνδεσμοι προϊόντων', body: <p>Οι ρυθμισμένοι προορισμοί προϊόντων ή τρίτων μπορεί να έχουν ξεχωριστούς όρους, δηλώσεις απορρήτου, security controls και διαθεσιμότητα. Η Noitis δεν ευθύνεται για περιεχόμενο ή πρακτικές τρίτων μόνο και μόνο επειδή ο ιστότοπος συνδέεται με αυτά.</p> },
    { heading: '7. Απόρρητο', body: <p>Οι τρέχουσες πρακτικές απορρήτου του ιστότοπου περιγράφονται στη σελίδα <a href="./privacy.html">Απόρρητο</a>.</p> },
    { heading: '8. Καμία εγγύηση', body: <p>Στον μέγιστο βαθμό που επιτρέπεται από την εφαρμοστέα νομοθεσία, ο ιστότοπος και το περιεχόμενό του παρέχονται &quot;ως έχουν&quot; και &quot;όπως είναι διαθέσιμα&quot; χωρίς εγγυήσεις οποιουδήποτε είδους, με εξαίρεση δικαιώματα ή εγγυήσεις που δεν μπορούν νομίμως να αποκλειστούν.</p> },
    { heading: '9. Περιορισμός ευθύνης', body: <p>Στον μέγιστο βαθμό που επιτρέπεται από την εφαρμοστέα νομοθεσία, η Noitis και οι αντίστοιχοι ιδιοκτήτες, συντελεστές, affiliates ή εξουσιοδοτημένοι εκπρόσωποί της δεν ευθύνονται για έμμεσες, παρεπόμενες, ειδικές, επακόλουθες, παραδειγματικές ή τιμωρητικές ζημίες που προκύπτουν από τον ιστότοπο ή το περιεχόμενό του. Τίποτα στους παρόντες όρους δεν περιορίζει ευθύνη όπου η εφαρμοστέα νομοθεσία δεν επιτρέπει τέτοιο περιορισμό.</p> },
    { heading: '10. Αλλαγές', body: <p>Η Noitis μπορεί να ενημερώνει τον ιστότοπο και τους παρόντες όρους καθώς εξελίσσονται τα προϊόντα, η υποδομή, η οργάνωση ή οι νομικές απαιτήσεις. Ουσιώδεις αναθεωρήσεις θα αποτυπώνονται με ενημερωμένη ημερομηνία ισχύος.</p> },
    { heading: '11. Εφαρμοστέο δίκαιο', body: <p>Όπου η επιλογή δικαίου επιτρέπεται νομικά και δεν εφαρμόζεται διαφορετική γραπτή συμφωνία, οι παρόντες όροι διέπονται από το δίκαιο της Ελλάδας, χωρίς να περιορίζονται υποχρεωτικά δικαιώματα βάσει άλλου εφαρμοστέου νομικού καθεστώτος.</p> },
    { heading: '12. Επικοινωνία', body: <><p>Ερωτήσεις σχετικά με τους παρόντες όρους ή αιτήματα άδειας για υλικό του ιστότοπου μπορούν να σταλούν στο:</p><p><strong>chouliarasmatthaios@gmail.com</strong></p></> },
  ],
}

const trademarkEnglish: LegalPageCopy = {
  eyebrow: 'Noitis™ trademark policy',
  title: 'Our name and identity are part of what we build.',
  lead: 'This policy explains how the Noitis name, logos, slogan, product-family branding, and distinctive brand assets may be used.',
  effectiveDateLabel: 'Effective date:',
  effectiveDate: '25 August 2026',
  footerTagline: 'Intelligence, engineered.',
  sections: [
    { heading: '1. Noitis mark', body: <p><strong>Noitis™</strong> is used as a claimed trademark. The ™ symbol indicates a claim of trademark rights; it does not represent registration. The ® symbol must not be used unless registration has actually been granted in the relevant jurisdiction and its use is appropriate.</p> },
    { heading: '2. Protected brand identifiers', body: <><p>Access to this website or repository does not grant permission to use, reproduce, adapt, publish, distribute, register, or commercialize:</p><ul><li>the Noitis™ name;</li><li>Noitis logos, symbols, and marks;</li><li>the “Intelligence, engineered.” slogan;</li><li>Noitis product-family branding;</li><li>Noitis visual identity, distinctive layouts, or brand assets; or</li><li>confusingly similar names, marks, logos, domains, or branding intended to suggest affiliation with Noitis.</li></ul><p>Any permitted use must be expressly authorized by Noitis in writing unless applicable law independently permits the use.</p></> },
    { heading: '3. Product names', body: <><p>The website identifies AgentGate, AutoPaylot, Business Resource Scheduler, EarnLogic, FamilyOS, and LegacyCI as Noitis products. Their appearance here does not grant permission to use those names as brands, product identities, domains, or source identifiers.</p><p>This policy does not represent that each product name is registered. Any separate registration or formal trademark claim for an individual product mark should be documented only after appropriate clearance and legal review.</p></> },
    { heading: '4. Logos and visual assets', body: <p>Noitis logos and other brand assets may appear in source control so the official website can render them. Their technical availability does not grant a license to extract, reuse, modify, distribute, sell, register, or present them as another product, business, service, or organization&apos;s branding.</p> },
    { heading: '5. Referential use', body: <p>Nothing in this policy is intended to prohibit truthful reference to Noitis where applicable law allows nominative, descriptive, journalistic, review, commentary, interoperability, or other lawful use. Such use must not falsely imply sponsorship, endorsement, certification, partnership, or affiliation.</p> },
    { heading: '6. No implied endorsement', body: <p>Access to, contribution to, evaluation of, linking to, or reference to this repository or website does not create a partnership, sponsorship, endorsement, certification, or other affiliation with Noitis. Technical compatibility with a Noitis product or public interface likewise does not imply Noitis endorsement.</p> },
    { heading: '7. Software and content rights are separate', body: <p>Trademark rights and software/content copyright rights are distinct. The repository&apos;s code, documentation, design, and content are governed by the proprietary LICENSE file, while Noitis brand identifiers are governed by this trademark policy and applicable trademark law.</p> },
    { heading: '8. Questions and permissions', body: <><p>Requests concerning authorized brand use may be sent to:</p><p><strong>chouliarasmatthaios@gmail.com</strong></p></> },
  ],
}

const trademarkGreek: LegalPageCopy = {
  eyebrow: 'Πολιτική εμπορικών σημάτων Noitis™',
  title: 'Το όνομα και η ταυτότητά μας είναι μέρος αυτού που δημιουργούμε.',
  lead: 'Η παρούσα πολιτική εξηγεί πώς μπορούν να χρησιμοποιούνται το όνομα Noitis, τα λογότυπα, το slogan, το branding της οικογένειας προϊόντων και τα διακριτικά brand assets.',
  effectiveDateLabel: 'Ημερομηνία ισχύος:',
  effectiveDate: '25 Αυγούστου 2026',
  footerTagline: 'Intelligence, engineered.',
  sections: [
    { heading: '1. Το σήμα Noitis', body: <p>Το <strong>Noitis™</strong> χρησιμοποιείται ως δηλωμένο εμπορικό σήμα. Το σύμβολο ™ δηλώνει αξίωση δικαιωμάτων trademark· δεν δηλώνει καταχώριση. Το σύμβολο ® δεν πρέπει να χρησιμοποιείται εκτός αν έχει πράγματι χορηγηθεί καταχώριση στη σχετική δικαιοδοσία και η χρήση του είναι κατάλληλη.</p> },
    { heading: '2. Προστατευμένα στοιχεία brand', body: <><p>Η πρόσβαση σε αυτόν τον ιστότοπο ή repository δεν παρέχει άδεια χρήσης, αναπαραγωγής, προσαρμογής, δημοσίευσης, διανομής, καταχώρισης ή εμπορικής εκμετάλλευσης:</p><ul><li>του ονόματος Noitis™·</li><li>λογοτύπων, συμβόλων και σημάτων Noitis·</li><li>του slogan “Intelligence, engineered.”·</li><li>του branding της οικογένειας προϊόντων Noitis·</li><li>της οπτικής ταυτότητας, διακριτικών layouts ή brand assets της Noitis· ή</li><li>παραπλανητικά όμοιων ονομάτων, σημάτων, λογοτύπων, domains ή branding που αποσκοπούν να υπονοήσουν σχέση με τη Noitis.</li></ul><p>Κάθε επιτρεπόμενη χρήση πρέπει να εξουσιοδοτείται ρητά γραπτώς από τη Noitis, εκτός αν η εφαρμοστέα νομοθεσία επιτρέπει ανεξάρτητα τη συγκεκριμένη χρήση.</p></> },
    { heading: '3. Ονόματα προϊόντων', body: <><p>Ο ιστότοπος προσδιορίζει τα AgentGate, AutoPaylot, Business Resource Scheduler, EarnLogic, FamilyOS και LegacyCI ως προϊόντα Noitis. Η εμφάνισή τους εδώ δεν παρέχει άδεια χρήσης αυτών των ονομάτων ως brands, product identities, domains ή source identifiers.</p><p>Η παρούσα πολιτική δεν δηλώνει ότι κάθε όνομα προϊόντος είναι καταχωρισμένο. Οποιαδήποτε ξεχωριστή καταχώριση ή επίσημη αξίωση trademark για μεμονωμένο product mark πρέπει να τεκμηριώνεται μόνο μετά από κατάλληλο clearance και νομικό έλεγχο.</p></> },
    { heading: '4. Λογότυπα και οπτικά assets', body: <p>Λογότυπα Noitis και άλλα brand assets μπορεί να υπάρχουν στο source control ώστε ο επίσημος ιστότοπος να μπορεί να τα εμφανίζει. Η τεχνική διαθεσιμότητά τους δεν παρέχει άδεια εξαγωγής, επαναχρησιμοποίησης, τροποποίησης, διανομής, πώλησης, καταχώρισης ή παρουσίασής τους ως branding άλλου προϊόντος, επιχείρησης, υπηρεσίας ή οργανισμού.</p> },
    { heading: '5. Αναφορική χρήση', body: <p>Τίποτα στην παρούσα πολιτική δεν αποσκοπεί να απαγορεύσει αληθή αναφορά στη Noitis όπου η εφαρμοστέα νομοθεσία επιτρέπει nominative, descriptive, δημοσιογραφική, review, commentary, interoperability ή άλλη νόμιμη χρήση. Η χρήση αυτή δεν πρέπει να υπονοεί ψευδώς χορηγία, έγκριση, πιστοποίηση, συνεργασία ή σχέση.</p> },
    { heading: '6. Καμία σιωπηρή έγκριση', body: <p>Η πρόσβαση, συνεισφορά, αξιολόγηση, σύνδεση ή αναφορά σε αυτό το repository ή τον ιστότοπο δεν δημιουργεί συνεργασία, χορηγία, έγκριση, πιστοποίηση ή άλλη σχέση με τη Noitis. Η τεχνική συμβατότητα με προϊόν ή public interface της Noitis επίσης δεν υποδηλώνει έγκριση από τη Noitis.</p> },
    { heading: '7. Τα δικαιώματα λογισμικού και περιεχομένου είναι ξεχωριστά', body: <p>Τα δικαιώματα trademark και τα δικαιώματα copyright λογισμικού/περιεχομένου είναι διακριτά. Ο κώδικας, η τεκμηρίωση, ο σχεδιασμός και το περιεχόμενο του repository διέπονται από το proprietary αρχείο LICENSE, ενώ τα brand identifiers της Noitis διέπονται από την παρούσα πολιτική εμπορικών σημάτων και την εφαρμοστέα νομοθεσία trademark.</p> },
    { heading: '8. Ερωτήσεις και άδειες', body: <><p>Αιτήματα σχετικά με εξουσιοδοτημένη χρήση του brand μπορούν να σταλούν στο:</p><p><strong>chouliarasmatthaios@gmail.com</strong></p></> },
  ],
}

export const privacyContent: Record<NoitisLanguage, LegalPageCopy> = {
  en: privacyEnglish,
  el: privacyGreek,
}

export const termsContent: Record<NoitisLanguage, LegalPageCopy> = {
  en: termsEnglish,
  el: termsGreek,
}

export const trademarkContent: Record<NoitisLanguage, LegalPageCopy> = {
  en: trademarkEnglish,
  el: trademarkGreek,
}
