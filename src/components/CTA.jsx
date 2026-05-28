import { motion } from 'motion/react'
import { ArrowUpRight, BookOpen } from 'lucide-react'

const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4'

export default function CTA() {
  return (
    <div className="w-full flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] min-h-[34rem] md:min-h-[40rem] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={CTA_VIDEO}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-3xl">
            Melt rigid assets into fluid yield.
          </h2>
          <div className="mt-10 flex flex-row items-center gap-4">
            <a
              href="#"
              className="group/launch inline-flex items-center gap-2 rounded-full bg-white text-[#1b2a4e] pl-5 pr-1.5 py-1.5 text-sm md:text-base font-medium hover:bg-white/90 transition-colors"
            >
              Launch App
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1b2a4e] text-white transition-transform group-hover/launch:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 text-sm md:text-base font-medium hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Read Docs
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
