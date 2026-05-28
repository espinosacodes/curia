import {
  KeyRound,
  ShieldCheck,
  ScrollText,
  Building2,
  Users,
  LayoutGrid,
  Bot,
  Video,
  FileText,
  Lock,
  History,
} from 'lucide-react'
import PageHeader from '../../components/PageHeader.jsx'
import CalloutCTA from '../../components/CalloutCTA.jsx'
import {
  Section,
  SectionHeading,
  Card,
  IconFeature,
  Button,
  Reveal,
} from '../../components/ui.jsx'
import { ROUTES, REPO_URL } from '../../config/site.js'

const overview = [
  {
    icon: KeyRound,
    title: 'Token authentication',
    body: 'Requests authenticate with API tokens scoped to a role. A token can never read or act beyond the permissions of the role it represents.',
  },
  {
    icon: ShieldCheck,
    title: 'Policy-checked access',
    body: 'Every endpoint evaluates access policy server-side. The same boundaries that govern the UI govern the API — for people and agents alike.',
  },
  {
    icon: ScrollText,
    title: 'Audited by default',
    body: 'Each call is subject to audit logging. Reads and writes record who acted, on what, and under which policy, so access is reviewable after the fact.',
  },
]

const resources = [
  {
    icon: Building2,
    title: 'Organizations',
    body: 'Top-level tenant boundary that owns teams, members, and policy.',
    endpoints: ['GET /v1/organizations', 'GET /v1/organizations/{id}'],
  },
  {
    icon: Users,
    title: 'Teams',
    body: 'Groups that mirror your org chart and define who shares context.',
    endpoints: ['GET /v1/teams', 'POST /v1/teams', 'GET /v1/teams/{id}/members'],
  },
  {
    icon: LayoutGrid,
    title: 'Spaces',
    body: 'Channels and project areas scoped to a team’s members and agents.',
    endpoints: ['GET /v1/spaces', 'POST /v1/spaces', 'GET /v1/spaces/{id}/messages'],
  },
  {
    icon: Bot,
    title: 'Agents',
    body: 'AI employees bound to a team’s role, memory, and tools.',
    endpoints: ['GET /v1/agents', 'POST /v1/agents', 'POST /v1/agents/{id}/runs'],
  },
  {
    icon: Video,
    title: 'Meetings',
    body: 'Workspace meetings with structured notes, decisions, and action items.',
    endpoints: ['GET /v1/meetings', 'POST /v1/meetings', 'GET /v1/meetings/{id}'],
  },
  {
    icon: FileText,
    title: 'Summaries',
    body: 'Generated rollups of conversations and meetings, scoped to the requester.',
    endpoints: ['GET /v1/summaries', 'GET /v1/summaries/{id}'],
  },
  {
    icon: Lock,
    title: 'Policies',
    body: 'Role-based access rules that govern every read and action in the workspace.',
    endpoints: ['GET /v1/policies', 'POST /v1/policies', 'GET /v1/policies/{id}'],
  },
  {
    icon: History,
    title: 'Audit Logs',
    body: 'Immutable record of access events for governance and review.',
    endpoints: ['GET /v1/audit-logs', 'GET /v1/audit-logs/{id}'],
  },
]

export default function ApiReference() {
  return (
    <>
      <PageHeader
        eyebrow="API Reference"
        title="API Reference"
        lead="A high-level summary of the resources and conventions exposed by Curia. For exact request and response shapes, the repository on GitHub is the source of truth."
        actions={
          <Button href={REPO_URL} external>
            View on GitHub
          </Button>
        }
      />

      {/* Overview */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="Overview"
          title="REST-style, role-scoped, and audited"
          intro="The API follows REST conventions over JSON. Authentication uses API tokens scoped to roles, every call is access-checked server-side, and each request is subject to audit logging."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {overview.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.05}>
              <IconFeature icon={o.icon} title={o.title}>
                {o.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Core resources */}
      <Section>
        <SectionHeading
          eyebrow="Core resources"
          title="The resource groups you’ll work with"
          intro="Each group is collection-oriented and consistent: list and create on the collection, retrieve and act on the item. Endpoint paths below are illustrative."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <Card className="h-full">
                <r.icon className="w-7 h-7 text-[#1b2a4e] mb-4" aria-hidden="true" />
                <h3 className="text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-2 text-[#5E6470] text-sm md:text-base leading-relaxed">
                  {r.body}
                </p>
                <p className="mt-4 text-[#5E6470]/70 text-xs md:text-sm font-medium tracking-[0.14em] uppercase">
                  Example endpoints
                </p>
                <pre className="mt-3 overflow-x-auto rounded-[1rem] bg-[#1b2a4e] text-[#e7ecf5] text-sm p-4 md:p-5 leading-relaxed">
                  <code>{r.endpoints.join('\n')}</code>
                </pre>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
