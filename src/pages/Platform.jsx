import {
  MessagesSquare,
  Video,
  Brain,
  Bot,
  ShieldCheck,
  Smartphone,
  Layers,
  Workflow,
} from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CalloutCTA from '../components/CalloutCTA.jsx'
import { Section, SectionHeading, IconFeature, Reveal, Button } from '../components/ui.jsx'
import { ROUTES } from '../config/site.js'

const capabilities = [
  {
    icon: MessagesSquare,
    title: 'Team chat',
    body: 'Channels and direct messages organized by team and project, with conversation history that stays scoped to the people allowed to see it.',
  },
  {
    icon: Video,
    title: 'Meetings',
    body: 'Run meetings inside the workspace and capture notes, decisions, and action items as structured, searchable records.',
  },
  {
    icon: Brain,
    title: 'Shared memory',
    body: 'Each team builds a living knowledge base. Curia remembers context so people and agents do not start from zero every time.',
  },
  {
    icon: Bot,
    title: 'AI employees',
    body: 'Agents that work inside a team: they answer questions, draft summaries, and run workflows using only what that team can access.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-based boundaries',
    body: 'Access follows your org chart. Marketing cannot read payments engineering; agents inherit the exact same limits.',
  },
  {
    icon: Smartphone,
    title: 'Cross-platform',
    body: 'Web, desktop, and mobile share one workspace, so context and permissions travel with you across every device.',
  },
]

const steps = [
  {
    title: 'Model your organization',
    body: 'Create teams and spaces that mirror how your company actually works — departments, squads, and leadership — and assign people to roles.',
  },
  {
    title: 'Give each team its agents',
    body: 'Spin up AI employees scoped to a team. Their memory, retrieval, and tools are bounded by that team’s role and policy.',
  },
  {
    title: 'Work in the open — within boundaries',
    body: 'People and agents collaborate in chat, meetings, and shared memory. Every answer and action stays inside the lines you defined.',
  },
  {
    title: 'Review and audit',
    body: 'Leadership gets governed visibility into rollups, and every agent access is logged so you can see what was read and why.',
  },
]

export default function Platform() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="The virtual office where AI knows its role"
        lead="Curia is a privacy-first, open-source workspace that brings chat, meetings, shared memory, and AI employees into one place — with role-based boundaries applied to people and agents alike."
        actions={
          <>
            <Button to={ROUTES.deployment}>Deploy Curia</Button>
            <Button to={ROUTES.access} variant="outline">
              How access works
            </Button>
          </>
        }
      />

      {/* Overview */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="Overview"
          title="One workspace for your team’s people and its AI"
          intro="Most tools bolt AI onto a flat workspace where anything indexed becomes searchable by anyone. Curia is built the other way around: teams, roles, and policy come first, and every capability — chat, meetings, memory, agents — operates inside those boundaries."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <IconFeature icon={c.icon} title={c.title}>
                {c.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="From org chart to operating system in four steps"
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1b2a4e] text-white text-sm font-semibold">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[#5E6470] text-sm md:text-base leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why Curia exists */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <SectionHeading
            eyebrow="Why Curia exists"
            title="AI shouldn’t flatten your organization"
          />
          <div className="space-y-4 text-[#5E6470] text-base md:text-lg leading-relaxed">
            <p>
              Once knowledge is indexed, the hard problem is no longer search —
              it’s controlling who, and what, can retrieve it. Most AI workspaces
              treat every document and conversation as globally available, which
              quietly erases the boundaries every organization depends on.
            </p>
            <p>
              Curia was built for teams that need those boundaries to hold.
              Marketing should not see payments-engineering incidents. Payments
              should not see hiring discussions. Leadership can have approved,
              governed visibility — not a free-for-all. AI employees follow the
              same rules as human ones.
            </p>
            <p>
              Because it’s open source and self-hosted, the workspace and its
              data run on infrastructure you control, with the policy layer in
              plain sight rather than behind a vendor’s closed doors.
            </p>
          </div>
        </div>
      </Section>

      {/* Cross-platform access */}
      <Section>
        <SectionHeading
          eyebrow="Cross-platform access"
          title="The same governed workspace, everywhere you work"
          intro="Web, desktop, and mobile clients share a single source of truth. Permissions and scoped context follow you across devices, so an agent never answers with something the current user — on any platform — isn’t allowed to see."
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {[
            { icon: Smartphone, title: 'Web, desktop & mobile', body: 'A consistent experience across clients, with no separate “lite” permission model on mobile.' },
            { icon: Layers, title: 'Unified context', body: 'Shared memory and history are the same wherever you sign in — scoped to your role on every device.' },
            { icon: Workflow, title: 'Consistent enforcement', body: 'Access decisions are evaluated server-side, so boundaries hold regardless of the client.' },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <IconFeature icon={c.icon} title={c.title}>
                {c.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
