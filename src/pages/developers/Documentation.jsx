import {
  Server,
  TerminalSquare,
  Bot,
  Cpu,
  KeyRound,
  Github,
  BookOpen,
  Map,
} from 'lucide-react'
import PageHeader from '../../components/PageHeader.jsx'
import CalloutCTA from '../../components/CalloutCTA.jsx'
import {
  Section,
  SectionHeading,
  LinkCard,
  Button,
  Reveal,
} from '../../components/ui.jsx'
import { ROUTES, REPO_URL } from '../../config/site.js'

const quickstart = [
  {
    icon: Server,
    title: 'Self-host Curia',
    to: ROUTES.deployment,
    body: 'Stand up the full workspace on infrastructure you control, from a single node to a clustered deployment.',
  },
  {
    icon: TerminalSquare,
    title: 'Run locally',
    to: ROUTES.deployment,
    body: 'Clone the repository, start the dependencies, and run the app in development mode in a few commands.',
  },
  {
    icon: Bot,
    title: 'Configure agents',
    to: ROUTES.roleBasedAgents,
    body: 'Scope AI employees to a team so their memory, retrieval, and tools stay inside that team’s role and policy.',
  },
  {
    icon: Cpu,
    title: 'Model providers',
    to: ROUTES.selfHosting,
    body: 'Bring your own models. Connect hosted or local providers and route each agent to the model you choose.',
  },
  {
    icon: KeyRound,
    title: 'Access policies',
    to: ROUTES.accessControl,
    body: 'Define the role-based boundaries that govern every read and action — for people and agents alike.',
  },
  {
    icon: Github,
    title: 'GitHub repository',
    href: REPO_URL,
    external: true,
    body: 'Read the source, file issues, and follow development. The repository is the source of truth.',
  },
]

const organization = [
  {
    icon: BookOpen,
    title: 'API Reference',
    to: ROUTES.apiReference,
    body: 'A high-level summary of the REST-style resources, authentication model, and example endpoints exposed by Curia.',
  },
  {
    icon: Map,
    title: 'Deployment',
    to: ROUTES.deployment,
    body: 'End-to-end guidance for local development, Docker, Kubernetes, and cloud-agnostic self-hosting.',
  },
]

export default function Documentation() {
  return (
    <>
      <PageHeader
        eyebrow="Documentation"
        title="Documentation"
        lead="Everything you need to self-host Curia and build on top of it. Start here, then dive into the API reference and deployment guides — all open source, all running on infrastructure you control."
        actions={
          <>
            <Button href={REPO_URL} external>
              View on GitHub
            </Button>
            <Button to={ROUTES.deployment} variant="outline">
              Deployment guide
            </Button>
          </>
        }
      />

      {/* Quickstart */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="Quickstart"
          title="Get from clone to running workspace"
          intro="Pick a path below. Each one links to the guide or reference you need to deploy Curia, scope your agents, and govern access."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {quickstart.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.05}>
              <LinkCard
                to={q.to}
                href={q.href}
                external={q.external}
                icon={q.icon}
                title={q.title}
              >
                {q.body}
              </LinkCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How the docs are organized */}
      <Section>
        <SectionHeading
          eyebrow="How the docs are organized"
          title="Two references to build against"
          intro="The documentation is intentionally small and high-signal. The API reference describes what you can call; the deployment guide describes how to run it."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {organization.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.05}>
              <LinkCard to={o.to} icon={o.icon} title={o.title}>
                {o.body}
              </LinkCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
