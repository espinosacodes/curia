import { motion } from 'motion/react'
import { BookOpen } from 'lucide-react'
import { Button } from './ui.jsx'
import GradientBg from './GradientBg.jsx'
import { DEPLOY_TO, DOCS_TO } from '../config/site.js'

// Reusable closing CTA band for content pages. Shares the homepage CTA's
// animated shader-gradient background (navy).
export default function CalloutCTA({
  title = 'Give every team AI that knows its role.',
  primaryLabel = 'Deploy Curia',
  primaryTo = DEPLOY_TO,
  secondaryLabel = 'Read the docs',
  secondaryTo = DOCS_TO,
}) {
  return (
    <div className="w-full flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] min-h-[18rem] md:min-h-[24rem] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1b2a4e] to-[#243a6b] px-6 py-16">
        <GradientBg />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            {title}
          </h2>
          <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
            <Button to={primaryTo} variant="light">
              {primaryLabel}
            </Button>
            <Button to={secondaryTo} variant="glass" icon={false}>
              <BookOpen className="w-4 h-4" />
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
