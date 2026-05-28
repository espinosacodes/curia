import { motion } from 'motion/react'
import { ChevronRight, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Platform', chevron: false },
  { label: 'Access', chevron: true },
  { label: 'Developers', chevron: false },
  { label: 'Governance', chevron: false },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full flex items-center justify-between gap-3 px-4 md:px-10 py-5 md:py-6"
    >
      {/* Mobile logo */}
      <span className="md:hidden text-white text-2xl font-semibold tracking-tight">
        Curia
      </span>

      {/* Desktop centered links */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href="#"
            className="group/link flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            {link.label}
            {link.chevron && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
            )}
          </a>
        ))}
      </div>

      {/* Book Demo button */}
      <a
        href="#"
        className="group/demo flex shrink-0 items-center gap-2 rounded-full bg-[#1b2a4e] hover:bg-[#243a6b] pl-3.5 md:pl-4 pr-1.5 py-1.5 text-white text-sm font-medium transition-colors"
      >
        <span className="whitespace-nowrap">Deploy Curia</span>
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 transition-transform group-hover/demo:rotate-45">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </a>
    </motion.nav>
  )
}
