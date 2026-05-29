import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import { NAV_LINKS, DEPLOY_TO, ROUTES } from '../config/site.js'

// variant: 'overlay' (white text over the hero video) | 'solid' (dark text on #f0f0f0)
export default function Navbar({ variant = 'overlay' }) {
  const solid = variant === 'solid'

  const logoColor = solid ? 'text-[#1b2a4e]' : 'text-white'
  const linkColor = solid
    ? 'text-[#5E6470] hover:text-[#1b2a4e]'
    : 'text-white/80 hover:text-white'
  const wrapper = solid
    ? 'w-full max-w-[1536px] mx-auto px-6 md:px-10 py-5 md:py-6'
    : 'w-full px-4 md:px-10 py-5 md:py-6'
  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 rounded'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex items-center justify-between gap-3 ${wrapper}`}
    >
      {/* Logo / home link — animated mark + wordmark, shown on every breakpoint. */}
      <Link
        to={ROUTES.home}
        className={`${logoColor} ${focusRing} flex items-center gap-2 text-2xl font-semibold tracking-tight`}
      >
        <img
          src={solid ? '/curia-mark-navy.png' : '/curia-mark.gif'}
          alt=""
          aria-hidden="true"
          className="h-7 w-7 shrink-0 object-contain"
        />
        Curia
      </Link>

      {/* Desktop centered links */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={`group/link flex items-center gap-1 ${linkColor} ${focusRing} text-sm font-medium transition-colors`}
          >
            {link.label}
            {link.chevron && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
            )}
          </Link>
        ))}
      </div>

      {/* Primary CTA */}
      <Link
        to={DEPLOY_TO}
        className={`group/demo flex shrink-0 items-center gap-2 rounded-full bg-[#1b2a4e] hover:bg-[#243a6b] pl-3.5 md:pl-4 pr-1.5 py-1.5 text-white text-sm font-medium transition-colors ${focusRing}`}
      >
        <span className="whitespace-nowrap">Deploy Curia</span>
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 transition-transform group-hover/demo:rotate-45">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.nav>
  )
}
