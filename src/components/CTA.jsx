import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import GradientBg from './GradientBg.jsx'
import { DEPLOY_TO, DOCS_TO } from '../config/site.js'

export default function CTA() {
  return (
    <div className="w-full flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full min-h-[34rem] md:min-h-[40rem] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1b2a4e] to-[#243a6b]">
        {/* Animated shader-gradient background (shared, brand navy) */}
        <GradientBg />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-3xl [text-shadow:0_2px_24px_rgba(8,16,38,0.6)]">
            Give every team AI that knows its role.
          </h2>
          <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4">
            <Link
              to={DEPLOY_TO}
              className="group/launch inline-flex items-center gap-2 rounded-full bg-white text-[#1b2a4e] pl-5 pr-1.5 py-1.5 text-sm md:text-base font-medium hover:bg-white/90 transition-colors"
            >
              Deploy Curia
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1b2a4e] text-white transition-transform group-hover/launch:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to={DOCS_TO}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 text-sm md:text-base font-medium hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Read the docs
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
