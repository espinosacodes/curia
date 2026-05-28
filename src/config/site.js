// ---------------------------------------------------------------------------
// Central site configuration.
// Update copy, links, and the placeholder constants below in ONE place.
// ---------------------------------------------------------------------------

// Real repository URL (used by every "GitHub" link on the site).
export const REPO_URL = 'https://github.com/espinosacodes/curia'

// === PLACEHOLDERS — replace before launch / legal review ===================
// These render literally on the site (Privacy, Terms, Security, footer, etc.)
// so they are easy to spot. Search the codebase for "TODO" to find usages.
export const LEGAL = {
  companyName: '[[LEGAL COMPANY NAME — TODO]]',
  jurisdiction: '[[JURISDICTION / GOVERNING LAW — TODO]]',
  contactEmail: 'hello@getcuria.us', // TODO confirm
  privacyEmail: 'privacy@getcuria.us', // TODO confirm
  securityEmail: 'security@getcuria.us', // TODO confirm
  lastUpdated: 'May 2026',
}
// ===========================================================================

export const ROUTES = {
  home: '/',
  platform: '/platform',
  access: '/access',
  developers: '/developers',
  governance: '/governance',
  security: '/security',
  privacy: '/privacy',
  terms: '/terms',
  blog: '/blog',
  virtualOffice: '/product/virtual-office',
  roleBasedAgents: '/product/role-based-agents',
  accessControl: '/product/access-control',
  selfHosting: '/product/self-hosting',
  documentation: '/developers/documentation',
  apiReference: '/developers/api-reference',
  deployment: '/developers/deployment',
}

// Primary actions reused across the site.
export const DEPLOY_TO = ROUTES.deployment
export const DOCS_TO = ROUTES.documentation

// Top navigation.
export const NAV_LINKS = [
  { label: 'Platform', to: ROUTES.platform },
  { label: 'Access', to: ROUTES.access, chevron: true },
  { label: 'Developers', to: ROUTES.developers },
  { label: 'Governance', to: ROUTES.governance },
]

// Footer groups.
export const FOOTER_GROUPS = [
  {
    title: 'Product',
    links: [
      { label: 'Virtual Office', to: ROUTES.virtualOffice },
      { label: 'Role-Based Agents', to: ROUTES.roleBasedAgents },
      { label: 'Access Control', to: ROUTES.accessControl },
      { label: 'Self-Hosting', to: ROUTES.selfHosting },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', to: ROUTES.documentation },
      { label: 'GitHub', href: REPO_URL, external: true },
      { label: 'API Reference', to: ROUTES.apiReference },
      { label: 'Deployment', to: ROUTES.deployment },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Governance', to: ROUTES.governance },
      { label: 'Security', to: ROUTES.security },
      { label: 'Blog', to: ROUTES.blog },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: ROUTES.privacy },
      { label: 'Terms', to: ROUTES.terms },
    ],
  },
]
