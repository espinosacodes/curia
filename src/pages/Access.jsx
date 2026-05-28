import {
  Users,
  Search,
  KeyRound,
  ScrollText,
  Network,
  Eye,
  Check,
  X,
  Bot,
} from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CalloutCTA from '../components/CalloutCTA.jsx'
import { Section, SectionHeading, Card, IconFeature, Reveal, Button } from '../components/ui.jsx'
import { ROUTES } from '../config/site.js'

const controls = [
  {
    icon: Users,
    title: 'Team isolation',
    body: 'Every team gets its own boundary. Conversations, files, and memory created inside a team stay inside it unless a policy explicitly shares them.',
  },
  {
    icon: Search,
    title: 'Scoped retrieval',
    body: 'When a person or agent asks a question, retrieval only draws from sources the asker is allowed to see. Nothing outside that scope is searched or surfaced.',
  },
  {
    icon: KeyRound,
    title: 'Least privilege',
    body: 'Access starts closed. People and agents receive the minimum permissions their role requires, and you grant more deliberately rather than by default.',
  },
  {
    icon: ScrollText,
    title: 'Audit logs',
    body: 'Every access decision is recorded — who or which agent read what, when, and under which role — so you can review and explain access after the fact.',
  },
  {
    icon: Network,
    title: 'Role-based knowledge',
    body: 'Knowledge is organized around roles, not a single global index. What a person knows through Curia reflects where they sit in the organization.',
  },
  {
    icon: Eye,
    title: 'Governed executive visibility',
    body: 'Leadership can be granted approved, auditable visibility into rollups and summaries — explicit and logged, never an implicit master key.',
  },
]

const marketingCan = [
  'Campaign briefs, brand assets, and messaging docs',
  'Marketing channels, meetings, and shared memory',
  'Public product information and launch plans',
]
const marketingCannot = [
  'Payments-engineering incidents and postmortems',
  'Service credentials, runbooks, and on-call logs',
  'Source code and infrastructure for payment systems',
]

const paymentsCan = [
  'Payment service runbooks, incidents, and postmortems',
  'Engineering channels, meetings, and shared memory',
  'Source code and infrastructure they own',
]
const paymentsCannot = [
  'Campaign budgets and unreleased marketing plans',
  'Marketing channels and team conversations',
  'Brand and messaging work in progress',
]

const agentPrinciples = [
  'Agents are restricted by team, role, and workspace — the same boundaries that apply to people.',
  'Access follows least privilege: an agent can never reach knowledge its user could not reach.',
  'Sensitive data stays isolated across departments, so one team’s agent cannot read another’s.',
  'Audit trails show exactly what an agent accessed and why, for every answer and action.',
]

function AccessList({ items, allowed }) {
  const Icon = allowed ? Check : X
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon
            className={`mt-0.5 w-5 h-5 shrink-0 ${
              allowed ? 'text-[#1b2a4e]' : 'text-[#5E6470]/50'
            }`}
            aria-hidden="true"
          />
          <span
            className={`text-sm md:text-base leading-relaxed ${
              allowed ? 'text-[#1b2a4e]' : 'text-[#5E6470]'
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function TeamCard({ name, summary, canItems, cannotItems }) {
  return (
    <Card className="h-full">
      <h3 className="text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
        {name}
      </h3>
      <p className="mt-2 text-[#5E6470] text-sm md:text-base leading-relaxed">
        {summary}
      </p>
      <div className="mt-6">
        <p className="text-[#5E6470]/70 text-xs font-medium tracking-[0.14em] uppercase">
          Can access
        </p>
        <div className="mt-3">
          <AccessList items={canItems} allowed />
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-[rgba(30,50,90,0.1)]">
        <p className="text-[#5E6470]/70 text-xs font-medium tracking-[0.14em] uppercase">
          Cannot access
        </p>
        <div className="mt-3">
          <AccessList items={cannotItems} allowed={false} />
        </div>
      </div>
      <div className="mt-6 flex items-start gap-3 text-[#5E6470] text-sm leading-relaxed">
        <Bot className="mt-0.5 w-5 h-5 shrink-0 text-[#1b2a4e]" aria-hidden="true" />
        <span>
          This team’s AI agent follows the exact same lines — it answers only
          from what the team is allowed to see.
        </span>
      </div>
    </Card>
  )
}

export default function Access() {
  return (
    <>
      <PageHeader
        eyebrow="Access"
        title="Role-based AI for real organizations"
        lead="Privacy in Curia means scoped by default: the right people and the right agents reach the right knowledge, and nothing more. Access follows your org chart, and AI employees inherit the same boundaries as the humans they work alongside."
        actions={
          <>
            <Button to={ROUTES.deployment}>Deploy Curia</Button>
            <Button to={ROUTES.accessControl} variant="outline">
              Access control details
            </Button>
          </>
        }
      />

      {/* Overview */}
      <Section className="pt-2 md:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <SectionHeading
            eyebrow="Overview"
            title="Role-based access control, applied to people and AI"
          />
          <div className="space-y-4 text-[#5E6470] text-base md:text-lg leading-relaxed">
            <p>
              Curia uses role-based access control: permissions are attached to
              roles, and roles map to how your organization actually works.
              Instead of granting access document by document, you describe who
              belongs to which team and what each role is allowed to do.
            </p>
            <p>
              Access is governed by least privilege. Each person and each agent
              receives only the permissions their role requires — access starts
              closed and is widened deliberately, not opened up by default.
            </p>
            <p>
              Crucially, agents inherit a user’s permissions and never exceed
              them. An AI employee acting on someone’s behalf can read and act on
              exactly what that person can — no more — so adding AI never quietly
              widens the blast radius of who can see what.
            </p>
          </div>
        </div>
      </Section>

      {/* Controls grid */}
      <Section>
        <SectionHeading
          eyebrow="How access works"
          title="The controls that keep knowledge in its lane"
          intro="Each capability in Curia is bounded by the same set of access primitives. They apply uniformly to human members and to the agents working inside their teams."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {controls.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <IconFeature icon={c.icon} title={c.title}>
                {c.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Concrete example */}
      <Section>
        <SectionHeading
          eyebrow="A concrete example"
          title="Marketing and payments engineering, side by side"
          intro="Two teams sit in the same workspace, but their boundaries hold in both directions. Marketing cannot reach payments-engineering incidents, and payments engineering cannot reach unreleased marketing work — and each team’s agent is held to the same limits."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5">
          <Reveal>
            <TeamCard
              name="Marketing"
              summary="Plans campaigns, owns brand and messaging, and ships launches."
              canItems={marketingCan}
              cannotItems={marketingCannot}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <TeamCard
              name="Payments engineering"
              summary="Builds and operates the payment systems and responds to incidents."
              canItems={paymentsCan}
              cannotItems={paymentsCannot}
            />
          </Reveal>
        </div>
      </Section>

      {/* Agents as employees */}
      <Section>
        <SectionHeading
          eyebrow="Principle"
          title="AI agents should work like employees, not like superusers"
        />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <p className="text-[#5E6470] text-base md:text-lg leading-relaxed">
            A capable agent does not need unrestricted access — it needs the
            access of the role it serves. Treating agents as employees, bounded
            by team and policy, is what keeps automation safe to adopt across
            departments. The same rules that protect your organization from a
            misrouted message protect it from a misrouted query.
          </p>
          <Card>
            <ul className="space-y-4">
              {agentPrinciples.map((p) => (
                <li key={p} className="flex gap-3">
                  <Check
                    className="mt-0.5 w-5 h-5 shrink-0 text-[#1b2a4e]"
                    aria-hidden="true"
                  />
                  <span className="text-[#5E6470] text-sm md:text-base leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
