import { motion } from 'motion/react'

const metrics = [
  { value: '$2.4B', label: 'Total Value Locked' },
  { value: '8.5%', label: 'Average Realized Yield' },
  { value: '140K+', label: 'Active Participants' },
  { value: '< 2s', label: 'Finality Engine' },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Metrics() {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12">
      <div className="bg-[rgba(30,50,90,0.02)] border border-[rgba(30,50,90,0.05)] rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[rgba(30,50,90,0.1)]">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-2 px-6 py-8 md:px-10"
            >
              <span className="text-[#1b2a4e] text-4xl md:text-6xl font-semibold tracking-tight">
                {m.value}
              </span>
              <span className="text-[#5E6470] text-sm md:text-base">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
