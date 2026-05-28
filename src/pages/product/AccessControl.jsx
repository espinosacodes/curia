import {
  KeyRound,
  ShieldCheck,
  Network,
  ScrollText,
  Search,
  Lock,
} from 'lucide-react'
import PageHeader from '../../components/PageHeader.jsx'
import CalloutCTA from '../../components/CalloutCTA.jsx'
import { Section, SectionHeading, IconFeature, LinkCard, Button, Reveal } from '../../components/ui.jsx'
import { ROUTES } from '../../config/site.js'

const model = [
  {
    icon: KeyRound,
    title: 'Role-based access control',
    body: 'Permissions follow roles, not individuals. Assign people and agents to roles that mirror your org chart, and access flows from the role rather than ad-hoc grants that drift over time.',
  },
  {
    icon: ShieldCheck,
    title: 'Policy boundaries',
    body: 'Policy defines what each role and team can do, and where exceptions apply. It is the single place that decides reach, evaluated on every request before any data is returned.',
  },
  {
    icon: Network,
    title: 'Team separation',
    body: 'Each team is an isolated boundary. Spaces, history, and memory stay attached to the team that owns them, so one team’s knowledge does not become another team’s search result.',
  },
  {
    icon: ScrollText,
    title: 'Auditability',
    body: 'Every access decision is logged — who or what requested, what was retrieved, and under which policy. The record is there to review, not reconstruct after the fact.',
  },
  {
    icon: Search,
    title: 'Retrieval boundaries',
    body: 'Search and agent retrieval are bounded by the requester’s scope. A query can only surface sources the requester is already permitted to read, with no path around the boundary.',
  },
  {
    icon: Lock,
    title: 'Enforced server-side',
    body: 'Access is evaluated on the server for every request, so the same rules hold across web, desktop, mobile, and agents. There is no looser client to work around.',
  },
]

const flow = [
  {
    title: 'A request is made',
    body: 'A person or an agent asks a question, runs a search, or requests a summary inside a team space.',
  },
  {
    title: 'Scope is resolved',
    body: 'Curia resolves the requester’s team, role, and applicable policy to determine the exact set of sources in reach.',
  },
  {
    title: 'Retrieval stays in bounds',
    body: 'Only sources within that scope are eligible. Anything outside the boundary is never a candidate for retrieval.',
  },
  {
    title: 'The decision is logged',
    body: 'What was requested and what was returned is recorded, giving you a reviewable trail for every access.',
  },
]

export default function AccessControl() {
  return (
    <>
      <PageHeader
        eyebrow="Access Control"
        title="The access model that holds for people and agents"
        lead="Role-based access, policy boundaries, and team separation define what anyone — human or AI — can reach. Retrieval stays inside those bounds, and every decision is auditable."
        actions={
          <>
            <Button to={ROUTES.access}>How access works</Button>
            <Button to={ROUTES.security} variant="outline">
              Security
            </Button>
          </>
        }
      />

      {/* The access model */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="The access model"
          title="Boundaries that are defined once and enforced everywhere"
          intro="Access in Curia is not a feature bolted onto search — it is the layer everything else runs on. Roles, policy, and team separation decide reach, and the same rules apply to people and agents alike."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {model.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.05}>
              <IconFeature icon={m.icon} title={m.title}>
                {m.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How a request is evaluated */}
      <Section>
        <SectionHeading
          eyebrow="How a request is evaluated"
          title="Every request passes through the same gate"
          intro="From the first question to the logged result, access is evaluated on the server. Nothing is returned before scope is resolved and the boundary is applied."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {flow.map((s, i) => (
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

      {/* Related */}
      <Section>
        <SectionHeading
          eyebrow="Related"
          title="See the model in context"
          intro="Access control is the foundation. Read how it is applied across the workspace and how it fits the broader security posture."
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <Reveal>
            <LinkCard to={ROUTES.access} icon={KeyRound} title="How access works">
              A deeper walkthrough of teams, roles, and governed visibility, with examples of what each boundary allows.
            </LinkCard>
          </Reveal>
          <Reveal delay={0.05}>
            <LinkCard to={ROUTES.security} icon={Lock} title="Security">
              How Curia protects the workspace and its data, from enforcement to the controls that keep boundaries intact.
            </LinkCard>
          </Reveal>
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
