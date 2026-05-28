import PageHeader from '../components/PageHeader.jsx'
import { Section, LongForm } from '../components/ui.jsx'
import { LEGAL, REPO_URL } from '../config/site.js'

const sections = [
  {
    body: [
      'These Terms of Service govern your use of this marketing website and explain how the Curia open-source software is made available.',
      'This document is a template provided for transparency and is pending legal review. It does not constitute legal advice.',
    ],
  },
  {
    heading: 'Acceptance of these terms',
    body: [
      'By accessing or using this website, you agree to these terms. If you do not agree, please do not use the website.',
    ],
  },
  {
    heading: 'The website vs. the software',
    body: [
      'There is an important distinction between two things:',
    ],
    bullets: [
      'The website — these informational pages — is operated by us and is covered by these terms.',
      'The software — the Curia application — is an open-source project distributed through its public repository, and your use of it is governed by its open-source license, not by this website.',
    ],
  },
  {
    heading: 'Open-source license',
    body: [
      `The Curia software is provided under the open-source license included in its public repository at ${REPO_URL}. That license, not these website terms, sets out your rights and obligations when you use, modify, or distribute the software. If there is any conflict between these terms and the software license regarding the software, the software license controls.`,
    ],
  },
  {
    heading: 'Acceptable use',
    body: [
      'When using this website, you agree not to:',
    ],
    bullets: [
      'Use it for any unlawful purpose or in violation of applicable laws.',
      'Attempt to gain unauthorized access to, disrupt, or interfere with the site or its infrastructure.',
      'Misrepresent your affiliation with the project or impersonate others.',
    ],
  },
  {
    heading: 'No warranty',
    body: [
      'The website and the software are provided "as is" and "as available," without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website or software will be uninterrupted, error-free, or secure.',
    ],
  },
  {
    heading: 'Limitation of liability',
    body: [
      'To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, use, or profits, arising out of or related to your use of the website or the software, even if we have been advised of the possibility of such damages.',
    ],
  },
  {
    heading: 'Changes to these terms',
    body: [
      'We may update these terms from time to time. When we do, we will revise the "last updated" date at the top of the page. Continued use of the website after changes take effect means you accept the updated terms.',
    ],
  },
  {
    heading: 'Governing law',
    body: [
      `These terms are governed by the laws of ${LEGAL.jurisdiction}, without regard to its conflict-of-laws rules.`,
    ],
  },
  {
    heading: 'Contact',
    body: [
      `If you have questions about these terms, email us at ${LEGAL.contactEmail}.`,
    ],
  },
]

export default function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        lead={`Last updated ${LEGAL.lastUpdated}`}
      />
      <Section className="pt-2 md:pt-4">
        <LongForm sections={sections} />
      </Section>
    </>
  )
}
