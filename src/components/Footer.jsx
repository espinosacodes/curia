import { Link } from 'react-router-dom'
import { FOOTER_GROUPS, ROUTES } from '../config/site.js'

const linkCls =
  'text-[#5E6470]/70 hover:text-[#1b2a4e] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b2a4e]/40 rounded'

function FooterLink({ link }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={linkCls}>
        {link.label}
      </a>
    )
  }
  return (
    <Link to={link.to} className={linkCls}>
      {link.label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="w-full max-w-[1536px] mx-auto px-6 md:px-10 py-12 md:py-16 border-t border-[rgba(30,50,90,0.1)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        {/* Brand */}
        <div className="lg:col-span-4 max-w-sm">
          <Link
            to={ROUTES.home}
            className="text-[#1b2a4e] text-2xl font-semibold tracking-tight"
          >
            Curia
          </Link>
          <p className="mt-4 text-[#5E6470] text-sm leading-relaxed">
            The privacy-first, open-source role-based AI virtual office. Every
            team gets its own AI employees, with knowledge separated by role,
            team, and policy.
          </p>
        </div>

        {/* Link groups */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {FOOTER_GROUPS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[#1b2a4e] text-sm font-semibold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[rgba(30,50,90,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#5E6470]/60 text-xs">
          © 2026 Curia. Open source. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            to={ROUTES.privacy}
            className="text-[#5E6470]/60 hover:text-[#1b2a4e] text-xs transition-colors"
          >
            Privacy
          </Link>
          <Link
            to={ROUTES.terms}
            className="text-[#5E6470]/60 hover:text-[#1b2a4e] text-xs transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
