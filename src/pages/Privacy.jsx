import PageHeader from '../components/PageHeader.jsx'
import { Section, LongForm } from '../components/ui.jsx'
import { LEGAL } from '../config/site.js'

const sections = [
  {
    body: [
      'This Privacy Policy explains what information this website collects and how it is used. It is written in plain language and covers the marketing website only.',
      'This document is a template provided for transparency and is pending legal review. It does not constitute legal advice.',
    ],
  },
  {
    heading: 'Who we are',
    body: [
      `This website is operated by ${LEGAL.companyName}, based in ${LEGAL.jurisdiction}. Curia is a privacy-first, open-source project, and this policy reflects that we aim to collect as little as possible.`,
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'We keep data collection to a minimum. In practice, that means:',
    ],
    bullets: [
      'Basic, aggregate website analytics — such as page views and general usage patterns — used to understand how the site is used and to improve it.',
      'Contact information you choose to give us, such as your name, email address, and the contents of your message, if and when you email us or submit a contact form.',
    ],
  },
  {
    heading: 'How we use information',
    body: [
      'We use the information above only for the purposes it was provided:',
    ],
    bullets: [
      'To operate, maintain, and improve the website.',
      'To respond to your questions or requests when you contact us.',
      'To understand aggregate usage trends so we can make the site more useful.',
    ],
  },
  {
    heading: 'Cookies and analytics',
    body: [
      'We may use cookies or similar technologies to support basic, aggregate analytics. These help us understand overall site usage; they are not used to build advertising profiles. We do not run third-party ad networks on this site.',
      'You can usually control or disable cookies through your browser settings. Disabling them should not prevent you from reading the site.',
    ],
  },
  {
    heading: 'Self-hosted deployments',
    body: [
      'Curia is open source and designed to be self-hosted. When you deploy and run Curia in your own infrastructure, the data inside your instance — your conversations, documents, memory, and agent activity — stays in your environment. That data is yours and is not sent to us.',
      'This policy covers only this marketing website. It does not govern your own self-hosted Curia instance, which you operate and are responsible for.',
    ],
  },
  {
    heading: 'Data sharing',
    body: [
      'We do not sell your personal information. We do not share it with third parties for their own marketing.',
      'We may rely on standard service providers (for example, website hosting or analytics) that process limited data on our behalf to operate the site. Where required, we may also disclose information to comply with the law.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'Depending on where you live, you may have rights over your personal information — for example, to access, correct, or delete it, or to ask us to stop using it. To exercise any of these rights, contact us using the details below and we will respond as required by applicable law.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      `If you have questions about this policy or your information, email us at ${LEGAL.privacyEmail}.`,
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. When we do, we will revise the "last updated" date at the top of the page. Continued use of the website after changes take effect means you accept the updated policy.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        lead={`Last updated ${LEGAL.lastUpdated}`}
      />
      <Section className="pt-2 md:pt-4">
        <LongForm sections={sections} />
      </Section>
    </>
  )
}
