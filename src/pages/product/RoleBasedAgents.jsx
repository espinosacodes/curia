import {
  Bot,
  Brain,
  Users,
  Eye,
  SlidersHorizontal,
  ShieldCheck,
} from 'lucide-react'
import PageHeader from '../../components/PageHeader.jsx'
import CalloutCTA from '../../components/CalloutCTA.jsx'
import { Section, SectionHeading, IconFeature, LinkCard, Button, Reveal } from '../../components/ui.jsx'
import { ROUTES } from '../../config/site.js'

const agents = [
  {
    icon: Bot,
    title: 'Scoped agents',
    body: 'Every agent runs inside a defined boundary. Its retrieval, tools, and context are limited to a team and role rather than the whole organization, so an answer can only draw on what the agent is cleared to reach.',
  },
  {
    icon: Brain,
    title: 'Role-aware memory',
    body: 'Agents build memory from the conversations and documents they are permitted to see. Memory is partitioned by role, so what an agent learns in one context never bleeds into another.',
  },
  {
    icon: Users,
    title: 'Per-team agents',
    body: 'Spin up agents that belong to a single team and operate inside its space. They answer questions, draft summaries, and run workflows using only that team’s knowledge.',
  },
  {
    icon: Eye,
    title: 'Executive agents',
    body: 'Leadership can run agents with broader, governed visibility into rollups across teams. The wider scope is granted by policy and logged — never an implicit free-for-all.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Workflow tuning',
    body: 'Shape how an agent works: the tasks it handles, the tools it can call, and the workflows it follows. Tuning changes behavior within the boundary, not the boundary itself.',
  },
  {
    icon: ShieldCheck,
    title: 'Policy-bound by default',
    body: 'Agents inherit the same team, role, and policy limits as the people they work alongside. There is no path for an agent to exceed the access of the context it lives in.',
  },
]

const inheritance = [
  {
    title: 'Team limits the reach',
    body: 'An agent attached to a team can only retrieve from that team’s spaces, history, and memory. Crossing into another team’s data is not configurable — it simply is not available.',
  },
  {
    title: 'Role limits the depth',
    body: 'Within a team, the agent operates at the role it is assigned. It cannot surface anything a member of that role would be unable to read for themselves.',
  },
  {
    title: 'Policy limits the rest',
    body: 'Org-level policy governs the exceptions — like an executive agent’s broader visibility — explicitly and auditably, so wider scope is always a deliberate, recorded decision.',
  },
]

export default function RoleBasedAgents() {
  return (
    <>
      <PageHeader
        eyebrow="Role-Based Agents"
        title="AI employees that know exactly what they can see"
        lead="Curia agents are scoped to a team and a role. They build memory from what they are permitted to read, run workflows you tune, and inherit the same team, role, and policy limits as the people they work with."
        actions={
          <>
            <Button to={ROUTES.access}>How access works</Button>
            <Button to={ROUTES.accessControl} variant="outline">
              Access control
            </Button>
          </>
        }
      />

      {/* What they are */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="What they are"
          title="Agents that operate inside their boundaries"
          intro="An AI employee in Curia is not a single model with access to everything. It is an agent placed inside a team and a role, with memory, retrieval, and tools that stay within that scope."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {agents.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <IconFeature icon={a.icon} title={a.title}>
                {a.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Agents inherit limits */}
      <Section>
        <SectionHeading
          eyebrow="Inheritance"
          title="Agents inherit team, role, and policy limits"
          intro="An agent never has more reach than the context it lives in. Three layers — team, role, and policy — define the boundary, and the agent is bound by all three."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {inheritance.map((s, i) => (
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

      {/* Go deeper */}
      <Section>
        <SectionHeading
          eyebrow="Go deeper"
          title="The model behind the boundaries"
          intro="Agent behavior follows the access model. To understand what an agent can and cannot retrieve, start with how Curia defines and enforces access."
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <Reveal>
            <LinkCard to={ROUTES.access} icon={ShieldCheck} title="How access works">
              The deeper walkthrough of teams, roles, and governed visibility — and how every request is evaluated before anything is returned.
            </LinkCard>
          </Reveal>
          <Reveal delay={0.05}>
            <LinkCard to={ROUTES.accessControl} icon={Eye} title="Access control">
              The RBAC model, policy boundaries, and retrieval limits that decide what an agent is allowed to fetch.
            </LinkCard>
          </Reveal>
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
