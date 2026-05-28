import { motion } from 'motion/react'
import { Layers, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react'

const cardBase =
  'group relative bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Features() {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12 px-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#1b2a4e] text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl"
        >
          Most AI tools flatten your organization. Curia doesn&apos;t.
        </motion.h2>
        <a
          href="#"
          className="group/btn shrink-0 inline-flex items-center gap-2 rounded-full border border-[#1b2a4e]/20 px-5 py-2.5 text-[#1b2a4e] text-sm font-medium hover:bg-[#1b2a4e] hover:text-white transition-colors"
        >
          See how access works
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:rotate-45" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-5">
        {/* Card 1 — Tall Left */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${cardBase} md:row-span-2 md:min-h-[28rem] p-8 flex flex-col justify-between gap-10`}
        >
          <div className="pointer-events-none absolute -bottom-12 -right-12 transition-transform duration-700 group-hover:scale-110">
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Layers className="w-80 h-80 text-[#1b2a4e] opacity-[0.06]" />
            </motion.div>
          </div>
          <h3 className="relative z-10 text-[#1b2a4e] text-3xl md:text-4xl font-semibold tracking-tight max-w-sm">
            Every team gets its own AI employees
          </h3>
          <p className="relative z-10 text-[#5E6470] text-base max-w-sm">
            Scoped agents, memory, and retrieval per team. Marketing can&apos;t
            ask Curia about a payments incident it was never allowed to access.
          </p>
        </motion.div>

        {/* Card 2 — Wide Top Right */}
        <motion.div
          custom={1}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${cardBase} md:col-span-2 min-h-[13rem] p-8 flex flex-col justify-between`}
        >
          <div className="pointer-events-none absolute bottom-0 right-0 translate-x-8 translate-y-8 transition-transform duration-700 group-hover:scale-110">
            <motion.div
              animate={{ y: [0, 12, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Activity className="w-64 h-64 text-[#1b2a4e] opacity-[0.06]" />
            </motion.div>
          </div>
          <h3 className="relative z-10 text-[#1b2a4e] text-2xl md:text-3xl font-semibold tracking-tight">
            Your org chart is the AI boundary
          </h3>
          <p className="relative z-10 text-[#5E6470] text-base max-w-md">
            Access follows roles and policy, not broad workspace membership.
            Leadership gets governed rollups; teams keep their context private.
          </p>
        </motion.div>

        {/* Card 3 — Bottom Right 1 */}
        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${cardBase} p-8 flex flex-col justify-between gap-6`}
        >
          <div>
            <ShieldCheck className="w-8 h-8 text-[#1b2a4e] mb-4" />
            <h3 className="text-[#1b2a4e] text-2xl font-semibold tracking-tight">
              Least privilege, fully audited
            </h3>
            <p className="mt-2 text-[#5E6470] text-sm">
              Agents act with scoped memory and approved tools only. Every
              access is logged — what an agent read, and why.
            </p>
          </div>
          <a
            href="#"
            className="self-start inline-flex items-center gap-2 rounded-full border border-[#1b2a4e]/20 px-4 py-2 text-[#1b2a4e] text-sm font-medium hover:bg-[#1b2a4e] hover:text-white transition-colors"
          >
            View audit logs
          </a>
        </motion.div>

        {/* Card 4 — Bottom Right 2 */}
        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${cardBase} p-8 flex flex-col justify-between`}
        >
          <h3 className="text-[#1b2a4e] text-2xl font-semibold tracking-tight">
            Open source & self-hosted
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-[#5E6470] text-sm max-w-[10rem]">
              Run Curia on your own infrastructure.
            </p>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f0f0f0] text-[#1b2a4e] transition-transform duration-300 group-hover:scale-110">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
