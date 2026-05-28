# Curia

The website for **Curia** — the privacy-first, open-source, role-based AI virtual office.
*The virtual office where AI knows its role.*

Built with React + Vite, Tailwind CSS v4, Framer Motion (`motion/react`), Lucide
React, and React Router. Deployed as a static SPA to Cloudflare Workers.

## Develop

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  main.jsx              # app entry (BrowserRouter)
  App.jsx               # all routes (home is standalone; rest use SiteLayout)
  index.css             # Tailwind import, Helvetica @font-face, theme tokens
  config/site.js        # ← edit links, routes, and placeholder constants here
  content/blog.js       # ← blog posts live here
  components/            # reusable, design-system components
    Navbar, Footer, SiteLayout, PageHeader, CalloutCTA, ScrollToTop,
    ui.jsx (Button, Card, LinkCard, Section, SectionHeading, IconFeature,
            Eyebrow, Reveal, LongForm),
    Hero, Metrics, Features, CTA, BackgroundVideo   # homepage pieces
  pages/                 # one file per route
    Home, Platform, Access, Developers, Governance, Security, Privacy,
    Terms, Blog, BlogPost, NotFound
    product/{VirtualOffice,RoleBasedAgents,AccessControl,SelfHosting}
    developers/{Documentation,ApiReference,Deployment}
.claude/skills/defi-landing-design/SKILL.md   # the design system (source of truth)
```

The design language (colors, type, spacing, radii, animations) is documented in
`.claude/skills/defi-landing-design/SKILL.md`. Follow it when adding pages.

## Updating site content

- **Navigation & footer links, routes:** edit `src/config/site.js`
  (`NAV_LINKS`, `FOOTER_GROUPS`, `ROUTES`). Pages reference routes via the
  `ROUTES` object, so paths stay consistent everywhere.
- **A page's copy:** edit the matching file in `src/pages/`.
- **Blog posts:** add an entry to the `POSTS` array in `src/content/blog.js`.
  The index (`/blog`) and post pages (`/blog/:slug`) render automatically.
- **New page:** create `src/pages/MyPage.jsx` (default export, start with
  `<PageHeader />`, end with `<CalloutCTA />`), add a key to `ROUTES`, and add a
  `<Route>` inside the `SiteLayout` group in `src/App.jsx`. Reuse the components
  in `src/components/ui.jsx`.

## Placeholders to fill in before launch

All collected in **`src/config/site.js`**. The legal ones render literally on the
site (e.g. `[[LEGAL COMPANY NAME — TODO]]`) so they're easy to spot.

| Constant | Current value | Action |
| --- | --- | --- |
| `REPO_URL` | `https://github.com/espinosacodes/curia` | set — used by every "GitHub" link |
| `LEGAL.companyName` | `[[LEGAL COMPANY NAME — TODO]]` | Replace with the legal entity name |
| `LEGAL.jurisdiction` | `[[JURISDICTION / GOVERNING LAW — TODO]]` | Replace with governing-law jurisdiction |
| `LEGAL.contactEmail` | `hello@getcuria.us` | Confirm / replace |
| `LEGAL.privacyEmail` | `privacy@getcuria.us` | Confirm / replace |
| `LEGAL.securityEmail` | `security@getcuria.us` | Confirm / replace (responsible disclosure) |
| `LEGAL.lastUpdated` | `May 2026` | Update when Privacy/Terms change |

> The Privacy and Terms pages are plain-language templates and include a note
> that they are **pending legal review**. Have counsel review before relying on them.
> The Security page is informational and intentionally makes **no** certification
> or compliance claims.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
deploys to Cloudflare Workers (`wrangler.jsonc`). The Worker is configured with
`not_found_handling: "single-page-application"`, so client-side routes resolve
on the static host. Custom domain: `getcuria.us`.
