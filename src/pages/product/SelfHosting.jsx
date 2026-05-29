import {
  Server,
  Cloud,
  Boxes,
  GitBranch,
  Cpu,
  Lock,
} from 'lucide-react'
import PageHeader from '../../components/PageHeader.jsx'
import CalloutCTA from '../../components/CalloutCTA.jsx'
import { Section, SectionHeading, IconFeature, LinkCard, Button, Reveal } from '../../components/ui.jsx'
import { ROUTES, REPO_URL } from '../../config/site.js'

const ownership = [
  {
    icon: Server,
    title: 'Self-hosted',
    body: 'Run Curia on infrastructure you control. The workspace and its data live inside your environment rather than on a vendor’s servers, so ownership stays with you.',
  },
  {
    icon: Cloud,
    title: 'Deploy on AWS, Azure, or GCP',
    body: 'Bring Curia to the cloud you already use. Standard deployments target the major providers, fitting into the accounts, networking, and controls you have in place.',
  },
  {
    icon: Boxes,
    title: 'Native managed data',
    body: 'Runs on each cloud’s managed data services — DynamoDB on AWS, Cosmos DB on Azure, Bigtable on GCP — with OpenSearch or built-in vector search for retrieval. Prefer portability? Deploy on Kubernetes with PostgreSQL instead.',
  },
  {
    icon: GitBranch,
    title: 'Open source',
    body: 'The codebase is open. Read it, audit it, and adapt it — the access and policy layers are in plain sight rather than behind a closed vendor boundary.',
  },
  {
    icon: Cpu,
    title: 'Bring your own models',
    body: 'Connect the models you choose, including ones you host yourself. Agents run against your model endpoints, keeping inference within your control.',
  },
  {
    icon: Lock,
    title: 'Data stays in your boundary',
    body: 'Conversations, memory, and documents never leave the cloud boundary you deploy into. Self-hosting is what makes that guarantee real rather than a promise.',
  },
]

const reasons = [
  {
    title: 'Keep data where it belongs',
    body: 'For teams with residency, compliance, or sovereignty requirements, self-hosting keeps everything inside an environment you already govern — no third-party data path to reason about.',
  },
  {
    title: 'Audit what you run',
    body: 'Because the platform is open source and runs on your infrastructure, you can inspect how access and policy are enforced rather than trust a black box.',
  },
  {
    title: 'Control cost and models',
    body: 'Choose your providers, host your own models, and right-size your cluster. The economics and the inference stack are yours to decide.',
  },
]

export default function SelfHosting() {
  return (
    <>
      <PageHeader
        eyebrow="Self-Hosting"
        title="Your workspace, your cloud, your control"
        lead="Curia is open source and deploys into your own environment on AWS, Azure, or GCP. It runs on each cloud’s native managed data services — DynamoDB, Cosmos DB, or Bigtable — or on PostgreSQL and Kubernetes, works with the models you choose, and keeps data inside the cloud boundary you own."
        actions={
          <>
            <Button to={ROUTES.deployment}>Deployment guide</Button>
            <Button href={REPO_URL} external variant="outline">
              View on GitHub
            </Button>
          </>
        }
      />

      {/* Deployment & ownership */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="Deployment & ownership"
          title="Run Curia on infrastructure you own"
          intro="Self-hosting is the default, not an add-on. Deploy into your cloud, point agents at your models, and keep the workspace and its data inside a boundary you control."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {ownership.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.05}>
              <IconFeature icon={o.icon} title={o.title}>
                {o.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why self-host */}
      <Section>
        <SectionHeading
          eyebrow="Why self-host"
          title="Ownership you can verify"
          intro="Self-hosting is what turns privacy-first from a claim into something you can inspect, run, and govern yourself."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="h-full bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1b2a4e] text-white text-sm font-semibold">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-2 text-[#5E6470] text-sm md:text-base leading-relaxed">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Get started */}
      <Section>
        <SectionHeading
          eyebrow="Get started"
          title="From repository to running workspace"
          intro="Read the deployment guide for cluster requirements and step-by-step setup, or start from the source on GitHub."
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <Reveal>
            <LinkCard to={ROUTES.deployment} icon={Boxes} title="Deployment guide">
              Cluster requirements, provider notes, and the steps to stand up Curia in your own environment.
            </LinkCard>
          </Reveal>
          <Reveal delay={0.05}>
            <LinkCard href={REPO_URL} external icon={GitBranch} title="View on GitHub">
              Browse the source, review how access and policy are enforced, and track releases.
            </LinkCard>
          </Reveal>
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
