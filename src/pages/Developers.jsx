import {
  BookOpen,
  Braces,
  Server,
  Github,
  Boxes,
  Bot,
  ShieldCheck,
  Search,
  Database,
  Cpu,
  Fingerprint,
  ScrollText,
  Plug,
} from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CalloutCTA from '../components/CalloutCTA.jsx'
import { Section, SectionHeading, Card, IconFeature, LinkCard, Reveal, Button } from '../components/ui.jsx'
import { ROUTES, REPO_URL } from '../config/site.js'

const resources = [
  {
    to: ROUTES.documentation,
    icon: BookOpen,
    title: 'Documentation',
    body: 'Guides and references for setting up workspaces, roles, agents, and policy.',
  },
  {
    to: ROUTES.apiReference,
    icon: Braces,
    title: 'API Reference',
    body: 'The endpoints and schemas for building on top of Curia programmatically.',
  },
  {
    to: ROUTES.deployment,
    icon: Server,
    title: 'Deployment',
    body: 'How to run Curia on your own infrastructure, from local to production.',
  },
  {
    href: REPO_URL,
    external: true,
    icon: Github,
    title: 'GitHub',
    body: 'Read the source, file issues, and contribute. Curia is open source.',
  },
]

const architecture = [
  {
    icon: Boxes,
    title: 'Workspace',
    body: 'Teams and spaces that mirror your org chart. The workspace defines who belongs where and is the boundary every other layer respects.',
  },
  {
    icon: Bot,
    title: 'AI employees',
    body: 'Agents scoped to a team. They answer questions, draft summaries, and run workflows using only the knowledge and tools their team can reach.',
  },
  {
    icon: ShieldCheck,
    title: 'Policy & access layer',
    body: 'The role-based access control engine. Every read and action — by a person or an agent — is evaluated here against role and team before it proceeds.',
  },
  {
    icon: Search,
    title: 'Scoped retrieval & memory',
    body: 'Retrieval and shared memory are filtered by the asker’s permissions, so results never include sources outside their scope.',
  },
  {
    icon: Database,
    title: 'Storage',
    body: 'Messages, files, and memory persist in storage you control, with access mediated by the same policy layer rather than exposed directly.',
  },
]

const integrations = [
  {
    icon: Cpu,
    title: 'Model providers',
    body: 'Bring your own models. Connect hosted providers or run open models locally — Curia treats the model as a pluggable dependency, not a lock-in.',
  },
  {
    icon: Fingerprint,
    title: 'Identity & roles',
    body: 'Map your existing identity source and org structure onto Curia roles, so access in the workspace tracks the same teams your company already uses.',
  },
  {
    icon: Braces,
    title: 'APIs',
    body: 'Build custom clients, automations, and internal tools against the workspace, with access governed by the same policy layer as the UI.',
  },
  {
    icon: ScrollText,
    title: 'Audit log export',
    body: 'Stream access and activity logs out to your own monitoring and retention systems for review, alerting, and long-term records.',
  },
]

export default function Developers() {
  return (
    <>
      <PageHeader
        eyebrow="Developers"
        title="Open source, and built to be extended"
        lead="Curia is an open-source virtual office you can read, run, and shape. Self-host it on your own infrastructure, bring your own models, and integrate it with the identity and tooling your organization already relies on."
        actions={
          <>
            <Button href={REPO_URL} external>
              View on GitHub
            </Button>
            <Button to={ROUTES.documentation} variant="outline">
              Read the docs
            </Button>
          </>
        }
      />

      {/* Resources */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="Start here"
          title="Everything you need to build on Curia"
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <LinkCard
                to={r.to}
                href={r.href}
                external={r.external}
                icon={r.icon}
                title={r.title}
              >
                {r.body}
              </LinkCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Architecture overview */}
      <Section>
        <SectionHeading
          eyebrow="Architecture overview"
          title="The main pieces, in plain terms"
          intro="Curia is organized into a few cooperating layers. Each one respects the boundaries defined by the layer above it, which is how role-based access stays consistent across the whole system."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {architecture.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <IconFeature icon={a.icon} title={a.title}>
                {a.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Local development */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <SectionHeading
            eyebrow="Local development"
            title="Run the whole workspace on your machine"
          />
          <div className="space-y-4 text-[#5E6470] text-base md:text-lg leading-relaxed">
            <p>
              Getting started is meant to be unremarkable: clone the repository,
              install dependencies, and bring up the supporting services with
              Docker so you have a working workspace locally. Roles, agents, and
              the policy layer all run the same way they do in production.
            </p>
            <p>
              From there you can iterate on configuration, build against the API,
              or contribute changes back. The{' '}
              <Button to={ROUTES.deployment} variant="outline" icon={false} className="px-3 py-1">
                deployment guide
              </Button>{' '}
              covers exact commands, environment variables, and prerequisites.
            </p>
          </div>
        </div>
      </Section>

      {/* Self-hosting model */}
      <Section>
        <SectionHeading
          eyebrow="Self-hosting model"
          title="Cloud-native and cloud-agnostic"
          intro="Curia is designed to run on infrastructure you control. There is no required vendor and no hidden hosted dependency in the core path."
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          <Reveal>
            <IconFeature icon={Boxes} title="Native managed data">
              Runs on each cloud’s managed data services — DynamoDB, Cosmos DB,
              or Bigtable, with OpenSearch or built-in vector search for
              retrieval — or on Kubernetes with PostgreSQL for full portability.
            </IconFeature>
          </Reveal>
          <Reveal delay={0.05}>
            <IconFeature icon={Server} title="Cloud-agnostic">
              Run it on any major cloud or on-premises. Curia avoids
              provider-specific lock-in so the deployment target stays your call.
            </IconFeature>
          </Reveal>
          <Reveal delay={0.1}>
            <IconFeature icon={Cpu} title="Bring your own models">
              Point Curia at the model providers you trust, or self-host open
              models — the workspace does not assume a single vendor.
            </IconFeature>
          </Reveal>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button to={ROUTES.selfHosting}>Self-hosting overview</Button>
          <Button to={ROUTES.deployment} variant="outline">
            Deployment guide
          </Button>
        </div>
      </Section>

      {/* Integration points */}
      <Section>
        <SectionHeading
          eyebrow="Integration points"
          title="Where Curia connects to your stack"
          intro="Curia is built to slot into systems you already run rather than replace them. These are the seams designed for extension."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {integrations.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <IconFeature icon={it.icon} title={it.title}>
                {it.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button to={ROUTES.apiReference}>Explore the API reference</Button>
          <Button href={REPO_URL} external variant="outline">
            <Plug className="w-4 h-4" />
            Contribute on GitHub
          </Button>
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
