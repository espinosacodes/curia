import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import CalloutCTA from '../components/CalloutCTA.jsx'
import { Section, Reveal } from '../components/ui.jsx'
import { POSTS } from '../content/blog.js'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b2a4e]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f0f0]'

function formatDate(value) {
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return value
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Blog"
        lead="Writing on role-based access, privacy-first design, and running AI inside your own boundaries."
      />

      <Section className="pt-2 md:pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                to={`/blog/${post.slug}`}
                className={`block h-full rounded-[1.5rem] md:rounded-[2rem] ${focusRing}`}
              >
                <article className="flex h-full flex-col bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <p className="text-[#5E6470]/70 text-xs md:text-sm font-medium">
                    {post.category} · {post.readingTime}
                  </p>
                  <h2 className="mt-3 text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[#5E6470] text-sm md:text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 pt-4 text-[#5E6470]/70 text-xs md:text-sm">
                    {formatDate(post.date)}
                  </p>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
