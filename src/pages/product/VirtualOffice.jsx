import {
  MessagesSquare,
  Video,
  Users,
  Brain,
  FileText,
  Smartphone,
} from 'lucide-react'
import PageHeader from '../../components/PageHeader.jsx'
import CalloutCTA from '../../components/CalloutCTA.jsx'
import { Section, SectionHeading, IconFeature, LinkCard, Button, Reveal } from '../../components/ui.jsx'
import { ROUTES } from '../../config/site.js'

const surfaces = [
  {
    icon: MessagesSquare,
    title: 'Messaging & chat',
    body: 'Channels and direct messages organized by team and project. Conversation history is scoped to the people in that space, so the thread you see is only ever the thread you are cleared to see.',
  },
  {
    icon: Video,
    title: 'Meetings',
    body: 'Hold meetings inside the workspace and turn them into structured records. Notes, decisions, and action items are captured and filed against the team that ran them.',
  },
  {
    icon: Users,
    title: 'Team spaces',
    body: 'Each team gets a workspace that mirrors how it actually operates. Membership defines the boundary, and that boundary is what everything else inherits.',
  },
  {
    icon: Brain,
    title: 'Shared memory',
    body: 'A living knowledge base per team. People and agents draw on the same context instead of starting from zero, and retrieval stays inside the team that owns it.',
  },
  {
    icon: FileText,
    title: 'Summaries',
    body: 'Threads, meetings, and documents condense into summaries on demand. Every summary is built only from sources the requesting member is already permitted to read.',
  },
  {
    icon: Smartphone,
    title: 'Web, desktop & mobile',
    body: 'One workspace across every client. Context and permissions travel with you, with no separate, looser permission model on any device.',
  },
]

const scope = [
  {
    title: 'Membership defines the boundary',
    body: 'Who belongs to a team determines what lives inside it. Messages, meetings, and memory created in a space stay attached to that space rather than leaking into a shared global index.',
  },
  {
    title: 'Capabilities inherit the same scope',
    body: 'Search, summaries, and shared memory never reach across team lines. A capability cannot return something the underlying team boundary would not allow.',
  },
  {
    title: 'People and agents follow one rule set',
    body: 'The agents working in a space are bound by the same scope as the people in it. Collaboration stays in the open without quietly widening what anyone — human or AI — can reach.',
  },
]

export default function VirtualOffice() {
  return (
    <>
      <PageHeader
        eyebrow="Virtual Office"
        title="The collaboration surface for your whole organization"
        lead="Curia brings messaging, meetings, team spaces, shared memory, and summaries into one workspace — available on web, desktop, and mobile. Every capability is scoped to the team it belongs to."
        actions={
          <>
            <Button to={ROUTES.roleBasedAgents}>Meet the agents</Button>
            <Button to={ROUTES.accessControl} variant="outline">
              How access works
            </Button>
          </>
        }
      />

      {/* Capabilities */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything a team needs to work together"
          intro="A single surface for the day-to-day: talking, meeting, remembering, and summarizing. Each capability operates inside the team that owns it rather than across a flat, shared workspace."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {surfaces.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <IconFeature icon={s.icon} title={s.title}>
                {s.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team-scoped by design */}
      <Section>
        <SectionHeading
          eyebrow="Team-scoped by design"
          title="Collaboration stays inside the lines"
          intro="The team is the unit of scope. Membership sets the boundary, and chat, meetings, memory, and summaries all operate within it."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {scope.map((s, i) => (
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

      {/* Everywhere you work */}
      <Section>
        <SectionHeading
          eyebrow="Everywhere you work"
          title="One governed workspace across every device"
          intro="Web, desktop, and mobile clients share a single source of truth. Sign in anywhere and your context, history, and permissions come with you — enforced server-side, so boundaries hold regardless of the client."
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <Reveal>
            <LinkCard to={ROUTES.roleBasedAgents} icon={Brain} title="Role-based agents">
              AI employees that live inside team spaces, drawing on shared memory bounded by the same scope as the people around them.
            </LinkCard>
          </Reveal>
          <Reveal delay={0.05}>
            <LinkCard to={ROUTES.accessControl} icon={Users} title="Access control">
              See exactly how team separation, roles, and policy define what every member and agent can reach.
            </LinkCard>
          </Reveal>
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
