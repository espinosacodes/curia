import {
  GitBranch,
  Users,
  ScrollText,
  Compass,
  ShieldCheck,
  KeyRound,
  Eye,
  UserCheck,
} from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CalloutCTA from '../components/CalloutCTA.jsx'
import { Section, SectionHeading, IconFeature, Card, Button, Reveal } from '../components/ui.jsx'
import { ROUTES, REPO_URL } from '../config/site.js'

const principles = [
  {
    icon: ShieldCheck,
    title: 'Privacy by default',
    body: 'Knowledge is partitioned, not globally searchable. The default posture is to keep data scoped to the people and agents who are meant to reach it.',
  },
  {
    icon: KeyRound,
    title: 'Least privilege',
    body: 'People and agents get only the access a task actually requires. Permissions are explicit, and agents never exceed the user they act on behalf of.',
  },
  {
    icon: Eye,
    title: 'Transparency through open source',
    body: 'The access logic and policy layer are out in the open. You can read how decisions are made instead of trusting a description of them.',
  },
  {
    icon: UserCheck,
    title: 'User data ownership',
    body: 'When you self-host Curia, the workspace and its data run on infrastructure you control. Your instance is yours.',
  },
]

const practices = [
  {
    icon: GitBranch,
    title: 'Open-source direction',
    body: 'Curia is developed in the open. Source code, design discussions, and changes happen in the public repository so the community can follow, review, and shape the project.',
  },
  {
    icon: Users,
    title: 'Contribution expectations',
    body: 'Contributions are welcome. Open an issue to report a bug or propose a change, and submit pull requests with a clear description of the problem and the approach. Be respectful and assume good faith.',
  },
  {
    icon: ScrollText,
    title: 'Decision-making',
    body: 'Significant changes are discussed in the open before they land. Maintainers weigh community input, review pull requests, and steward the project toward its core principles.',
  },
  {
    icon: Compass,
    title: 'Roadmap posture',
    body: 'The roadmap is forward-looking and evolves with community needs. We share direction and priorities rather than committing to fixed dates, so plans stay honest as the project matures.',
  },
]

export default function Governance() {
  return (
    <>
      <PageHeader
        eyebrow="Governance"
        title="How Curia is built and decided in the open"
        lead="Curia is an open-source project, and its governance reflects that: development happens in public, decisions are made transparently, and contributions are welcome from anyone who shares the project's principles."
        actions={
          <>
            <Button href={REPO_URL} external>
              Open the repository
            </Button>
            <Button to={ROUTES.security} variant="outline">
              Security posture
            </Button>
          </>
        }
      />

      {/* How the project is managed */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="How it's managed"
          title="Open development, clear expectations"
          intro="The project is managed in the open so anyone can see how it works, raise concerns, and contribute. These are the practices that keep direction transparent and contributions productive."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {practices.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <IconFeature icon={p.icon} title={p.title}>
                {p.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contributing */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <SectionHeading
            eyebrow="Contributing"
            title="Issues and pull requests live on GitHub"
          />
          <div className="space-y-4 text-[#5E6470] text-base md:text-lg leading-relaxed">
            <p>
              The repository is the home for everything: code, issue tracking,
              feature discussions, and pull requests. If you have found a bug or
              have an idea, the best first step is to open an issue and start a
              conversation.
            </p>
            <p>
              Before submitting a pull request, it helps to discuss larger
              changes first so effort lines up with the project's direction.
              Smaller, well-scoped contributions with a clear description are the
              easiest to review and merge.
            </p>
            <div className="pt-1">
              <Button href={REPO_URL} external>
                Browse issues and PRs
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Project principles */}
      <Section>
        <SectionHeading
          eyebrow="Project principles"
          title="The commitments that guide every decision"
          intro="When there is a trade-off to make, these principles decide it. They apply to the codebase, the roadmap, and how the project treats the people who use it."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <IconFeature icon={p.icon} title={p.title}>
                {p.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Roadmap posture */}
      <Section>
        <Reveal>
          <Card>
            <h2 className="text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
              A roadmap that stays honest
            </h2>
            <p className="mt-3 text-[#5E6470] text-base md:text-lg leading-relaxed max-w-3xl">
              We publish direction rather than deadlines. Priorities shift as the
              community grows and as we learn what teams actually need, so you
              will find the current focus and upcoming work discussed in the
              open. What does not shift are the principles above — new features
              are evaluated against them before they ship.
            </p>
          </Card>
        </Reveal>
      </Section>

      <CalloutCTA />
    </>
  )
}
