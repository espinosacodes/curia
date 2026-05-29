import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ShieldCheck, GitBranch, KeyRound, Server } from 'lucide-react'
import Navbar from './Navbar.jsx'
import BackgroundVideo from './BackgroundVideo.jsx'
import { DOCS_TO } from '../config/site.js'

// Generated "pórtico de Curia" hero videos (in /public). Swap to compare:
//   /hero-v2-static-4k.mp4        — v2 scene, locked camera, only water moves, 4K (current)
//   /hero-v2-portico-surreal.mp4  — original v2 (camera drifts)
//   /hero-v1-portico-water.mp4    — colonnade + reflective water (palette)
//   /hero-v3-portico-minimal.mp4  — sparse, misty, max text legibility
const HERO_VIDEO = '/hero-v2-static-4k.mp4'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const CORNER_PATH = 'M56 56V0C56 30.9279 30.9279 56 0 56H56Z'

const PROOF_POINTS = [
  { icon: ShieldCheck, label: 'Privacy-first by design' },
  { icon: GitBranch, label: 'Open source architecture' },
  { icon: KeyRound, label: 'Scoped by role & policy' },
  { icon: Server, label: 'Self-hosted on your cloud' },
]

function BottomLeftCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 z-20 rounded-[1.25rem] md:rounded-[1.5rem] bg-white/30 backdrop-blur-xl border border-white/30 p-3 sm:p-4 md:p-5 shadow-lg w-[15rem] sm:w-auto sm:max-w-[18rem]"
    >
      <ul className="space-y-2 md:space-y-2.5">
        {PROOF_POINTS.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2.5">
            <Icon className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
            <span className="text-white text-xs md:text-sm font-medium">
              {label}
            </span>
          </li>
        ))}
      </ul>
      <Link
        to={DOCS_TO}
        className="mt-3 md:mt-4 flex items-center justify-center gap-2 rounded-full bg-white text-[#1b2a4e] text-sm font-medium px-4 py-2 hover:bg-white/90 transition-colors"
      >
        Read the docs
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}

function BottomRightCorner() {
  return (
    <div className="absolute bottom-0 right-0 z-20">
      <div className="relative bg-[#f0f0f0] rounded-tl-[2.5rem] md:rounded-tl-[3.5rem] rounded-br-[1.5rem] md:rounded-br-[3rem] p-5 pt-6 pl-12 md:p-6 md:pt-8 md:pl-14">
        {/* Inverted-corner fillers: blend the panel flush into the frame edges.
            Each filler overlaps 1px into the panel (translate) so Safari's
            sub-pixel rounding can't leave a see-through seam at the butt-joint. */}
        <svg
          className="absolute right-0 bottom-full translate-y-px w-10 h-10 md:w-14 md:h-14"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={CORNER_PATH} fill="#f0f0f0" />
        </svg>
        <svg
          className="absolute bottom-0 right-full translate-x-px w-10 h-10 md:w-14 md:h-14"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={CORNER_PATH} fill="#f0f0f0" />
        </svg>

        <Link to={DOCS_TO} className="flex items-center gap-3 group/doc">
          <span className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#1b2a4e]/15 transition-transform group-hover/doc:scale-110">
            <ArrowUpRight className="w-5 h-5 text-[#5E6470]" />
          </span>
          <div className="leading-tight">
            <p className="text-[#5E6470] text-sm font-medium">Documentation</p>
            <p className="text-[#5E6470]/60 text-xs">Library</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full min-w-0 h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group bg-gradient-to-br from-[#aeb8c9] to-[#7c8aa3]">
        {/* Background video */}
        <BackgroundVideo
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO}
        />
        {/* Subtle overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/30" />

        {/* Main content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <Navbar />
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col items-center text-center px-6 mt-12 sm:mt-16 md:mt-28"
          >
            <motion.h1
              variants={item}
              className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-full md:max-w-4xl [text-shadow:0_2px_20px_rgba(11,18,38,0.55)]"
            >
              The virtual office where AI knows its role
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-5 md:mt-6 text-white/90 text-sm sm:text-base md:text-lg max-w-md md:max-w-2xl [text-shadow:0_1px_14px_rgba(11,18,38,0.55)]"
            >
              A privacy-first, open-source workspace where every AI employee
              works inside team boundaries. Marketing never sees payments
              engineering. Leadership gets governed visibility — not a
              free-for-all.
            </motion.p>
          </motion.div>
        </div>

        <BottomLeftCard />
        <BottomRightCorner />
      </section>
    </div>
  )
}
