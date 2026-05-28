import { motion } from 'motion/react'
import { Eyebrow } from './ui.jsx'

// Standard header for content pages: eyebrow + h1 + lead + optional actions.
export default function PageHeader({ eyebrow, title, lead, actions }) {
  return (
    <header className="w-full max-w-[1536px] mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-6 md:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h1 className="text-[#1b2a4e] text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 md:mt-6 text-[#5E6470] text-base md:text-xl leading-relaxed">
            {lead}
          </p>
        )}
        {actions && (
          <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
        )}
      </motion.div>
    </header>
  )
}
