import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import CalloutCTA from '../components/CalloutCTA.jsx'
import { Section, LongForm } from '../components/ui.jsx'
import { getPost } from '../content/blog.js'
import { ROUTES } from '../config/site.js'

function formatDate(value) {
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return value
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <Section className="text-center">
        <h1 className="text-[#1b2a4e] text-3xl md:text-5xl font-semibold tracking-tight">
          Post not found
        </h1>
        <p className="mt-4 text-[#5E6470] text-base md:text-lg leading-relaxed">
          We couldn’t find the post you were looking for.
        </p>
        <Link
          to={ROUTES.blog}
          className="mt-6 inline-block text-[#1b2a4e] font-medium underline underline-offset-2 hover:no-underline"
        >
          Back to the blog
        </Link>
      </Section>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        lead={post.excerpt}
      />

      <Section className="pt-2 md:pt-4">
        <p className="text-[#5E6470]/70 text-sm">
          {formatDate(post.date)} · {post.readingTime}
        </p>

        <div className="mt-8 md:mt-10">
          <LongForm
            sections={post.body.map((s) => ({
              heading: s.heading,
              body: s.paragraphs,
            }))}
          />
        </div>

        <div className="mt-12">
          <Link
            to={ROUTES.blog}
            className="inline-block text-[#1b2a4e] font-medium underline underline-offset-2 hover:no-underline"
          >
            ← Back to the blog
          </Link>
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
