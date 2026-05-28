import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b2a4e]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f0f0]'

// --- Button -----------------------------------------------------------------
// variant: 'primary' (navy pill + arrow), 'outline', 'light' (white on dark),
// 'glass' (translucent on dark). Renders a router Link (`to`), external anchor
// (`href`), or <button>.
export function Button({
  to,
  href,
  external,
  variant = 'primary',
  icon = true,
  children,
  className = '',
  ...rest
}) {
  const base = `group/btn inline-flex items-center justify-center gap-2 rounded-full text-sm md:text-base font-medium transition-colors ${focusRing}`
  const styles = {
    primary: 'bg-[#1b2a4e] hover:bg-[#243a6b] text-white pl-4 pr-1.5 py-1.5',
    outline:
      'border border-[#1b2a4e]/20 text-[#1b2a4e] hover:bg-[#1b2a4e] hover:text-white px-5 py-2.5',
    light:
      'bg-white hover:bg-white/90 text-[#1b2a4e] pl-5 pr-1.5 py-1.5',
    glass:
      'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-5 py-3',
  }
  const cls = `${base} ${styles[variant]} ${className}`

  const arrow =
    variant === 'primary' ? (
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 transition-transform group-hover/btn:rotate-45">
        <ArrowUpRight className="w-4 h-4" />
      </span>
    ) : variant === 'light' ? (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1b2a4e] text-white transition-transform group-hover/btn:rotate-45">
        <ArrowUpRight className="w-4 h-4" />
      </span>
    ) : (
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:rotate-45" />
    )

  const content = (
    <>
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>
      {icon && arrow}
    </>
  )

  if (href)
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={cls}
        {...rest}
      >
        {content}
      </a>
    )
  if (to)
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    )
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  )
}

// --- Layout helpers ---------------------------------------------------------
export function Section({ children, className = '', ...rest }) {
  return (
    <section
      className={`w-full max-w-[1536px] mx-auto px-6 md:px-10 py-10 md:py-16 ${className}`}
      {...rest}
    >
      {children}
    </section>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`text-[#5E6470]/70 text-xs md:text-sm font-medium tracking-[0.14em] uppercase ${className}`}
    >
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, intro, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="text-[#1b2a4e] text-2xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          {title}
        </h2>
      )}
      {intro && (
        <p className="mt-4 text-[#5E6470] text-base md:text-lg leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  )
}

// --- Cards ------------------------------------------------------------------
export function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  )
}

export function IconFeature({ icon: Icon, title, children, className = '' }) {
  return (
    <Card className={`h-full ${className}`}>
      {Icon && <Icon className="w-7 h-7 text-[#1b2a4e] mb-4" aria-hidden="true" />}
      <h3 className="text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <div className="mt-2 text-[#5E6470] text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </Card>
  )
}

// Clickable card with an arrow affordance (internal or external).
export function LinkCard({ to, href, external, icon: Icon, title, children }) {
  const inner = (
    <div className="group relative bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 h-full transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          {Icon && (
            <Icon className="w-7 h-7 text-[#1b2a4e] mb-4" aria-hidden="true" />
          )}
          <h3 className="text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-[#5E6470] text-sm md:text-base leading-relaxed">
            {children}
          </p>
        </div>
        <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#f0f0f0] text-[#1b2a4e] transition-transform group-hover:scale-110">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>
    </div>
  )
  const wrapCls = `block h-full rounded-[1.5rem] md:rounded-[2rem] ${focusRing}`
  if (href)
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={wrapCls}
      >
        {inner}
      </a>
    )
  return (
    <Link to={to} className={wrapCls}>
      {inner}
    </Link>
  )
}

// --- Animation --------------------------------------------------------------
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </M>
  )
}

// --- Long-form / legal content ---------------------------------------------
// sections: [{ heading, body: [string], bullets: [string] }]
export function LongForm({ sections }) {
  return (
    <div className="max-w-3xl">
      {sections.map((s, i) => (
        <div key={i} className="mt-10 first:mt-0">
          {s.heading && (
            <h2 className="text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
              {s.heading}
            </h2>
          )}
          {s.body?.map((p, j) => (
            <p
              key={j}
              className="mt-3 text-[#5E6470] text-base leading-relaxed"
            >
              {p}
            </p>
          ))}
          {s.bullets && (
            <ul className="mt-4 space-y-2">
              {s.bullets.map((b, k) => (
                <li
                  key={k}
                  className="flex gap-3 text-[#5E6470] text-base leading-relaxed"
                >
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1b2a4e]/40" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
