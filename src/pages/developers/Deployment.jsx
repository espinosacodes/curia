import { Database, HardDrive, Network, Zap, Cpu, Search } from 'lucide-react'
import { AwsLogo, AzureLogo, GcpLogo, KubernetesLogo } from '../../components/BrandIcons.jsx'
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

const localCommands = `# Clone the repository
git clone ${REPO_URL}.git
cd curia

# Install dependencies
npm install

# Start backing services (database, cache, object storage)
docker compose up -d

# Run the app in development mode
npm run dev`

const dockerCommands = `# Build the container image (example registry path)
docker build -t ghcr.io/your-org/curia:latest .

# Run it, passing configuration via the environment
docker run --rm -p 8080:8080 \\
  --env-file ./.env \\
  ghcr.io/your-org/curia:latest`

const k8sCommands = `# Apply the manifests in your cluster
kubectl create namespace curia
kubectl apply -n curia -f deploy/kubernetes/

# Or install with Helm (example chart values)
helm install curia ./deploy/helm/curia \\
  --namespace curia --create-namespace \\
  --set image.repository=ghcr.io/your-org/curia \\
  --set image.tag=latest`

const cloudNotes = [
  {
    icon: AwsLogo,
    title: 'AWS',
    body: 'Use DynamoDB as the core store and OpenSearch for retrieval and RAG, with DynamoDB Streams or Zero-ETL keeping them in sync. S3 for object storage, ElastiCache for caching, and an ALB ingress with ACM-issued TLS. Run the compute on EKS or any container runtime.',
  },
  {
    icon: AzureLogo,
    title: 'Microsoft Azure',
    body: 'Use Azure Cosmos DB as the core store — its built-in NoSQL vector index handles retrieval and RAG with no separate search service to sync. Blob Storage for objects, Azure Cache for Redis, and the application gateway ingress controller for TLS. True-serverless, pay-per-request pricing throughout.',
  },
  {
    icon: GcpLogo,
    title: 'Google Cloud',
    body: 'Use Cloud Bigtable as the core store and BigQuery Vector Search for retrieval via direct federated queries — no sync infrastructure to operate. Cloud Storage for objects, Memorystore for caching, and a GKE ingress with managed certificates.',
  },
  {
    icon: KubernetesLogo,
    title: 'Kubernetes + PostgreSQL',
    body: 'Prefer to run it yourself? Deploy on any Kubernetes cluster with PostgreSQL as the core store and pgvector for retrieval — one engine, no data sync, and no dependency on a managed cloud service. The fully portable path for on-prem, air-gapped, or multi-cloud.',
  },
]

const dbPatterns = {
  capabilities: [
    { key: 'core', label: 'Primary core DB' },
    { key: 'search', label: 'Search / AI add-on' },
    { key: 'sync', label: 'Data sync overhead' },
    { key: 'pricing', label: 'Pricing nature' },
  ],
  clouds: [
    {
      logo: AwsLogo,
      name: 'AWS',
      values: {
        core: 'DynamoDB',
        search: 'OpenSearch',
        sync: 'DynamoDB Streams / Zero-ETL',
        pricing: 'Fixed instance cost for OpenSearch',
      },
    },
    {
      logo: AzureLogo,
      name: 'Microsoft Azure',
      values: {
        core: 'Azure Cosmos DB',
        search: 'Built-in NoSQL vector index',
        sync: 'Native turnkey sync (zero infrastructure)',
        pricing: 'True serverless (pay per request / GB)',
      },
    },
    {
      logo: GcpLogo,
      name: 'Google Cloud',
      values: {
        core: 'Cloud Bigtable',
        search: 'BigQuery Vector Search',
        sync: 'Direct federated queries (zero infrastructure)',
        pricing: 'Serverless analytics (pay per TB scanned)',
      },
    },
    {
      logo: KubernetesLogo,
      name: 'Kubernetes',
      values: {
        core: 'PostgreSQL',
        search: 'pgvector',
        sync: 'Single engine — no sync',
        pricing: 'Fixed cluster cost (self-managed)',
      },
    },
  ],
}

const assumptions = [
  {
    icon: Database,
    title: 'Core data store',
    body: 'Holds organizations, teams, spaces, policies, and audit logs. Use a managed NoSQL store — DynamoDB, Cosmos DB, or Bigtable — or PostgreSQL where you want a relational, fully portable option.',
  },
  {
    icon: Search,
    title: 'Retrieval & vector search',
    body: 'Powers RAG over your workspace knowledge: OpenSearch on AWS, the built-in Cosmos DB vector index on Azure, BigQuery Vector Search on GCP — or any pgvector / vector store you already run.',
  },
  {
    icon: HardDrive,
    title: 'Object storage',
    body: 'An S3-compatible bucket stores attachments, exports, and larger artifacts outside the database.',
  },
  {
    icon: Network,
    title: 'Ingress & TLS',
    body: 'An ingress controller terminates TLS and routes traffic to the workspace and API services.',
  },
  {
    icon: Zap,
    title: 'Cache',
    body: 'A Redis-compatible cache backs sessions, rate limiting, and short-lived coordination state.',
  },
  {
    icon: Cpu,
    title: 'Model providers',
    body: 'Bring your own models. Curia connects to the hosted or local providers you configure; no models are bundled.',
  },
]

function ComparisonTable() {
  return (
    <div className="mt-8 md:mt-10 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white">
      {/* md+ : real comparison table */}
      <table className="hidden md:table w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="p-5 lg:p-6 align-bottom text-[#5E6470]/70 text-xs font-medium tracking-[0.14em] uppercase">
              Capability
            </th>
            {dbPatterns.clouds.map((c) => (
              <th
                key={c.name}
                className="p-5 lg:p-6 align-bottom border-l border-[#1b2a4e]/10"
              >
                <span className="flex items-center gap-2.5">
                  <c.logo className="w-6 h-6 shrink-0" aria-hidden="true" />
                  <span className="text-[#1b2a4e] text-base font-semibold tracking-tight">
                    {c.name}
                  </span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dbPatterns.capabilities.map((cap) => (
            <tr key={cap.key} className="border-t border-[#1b2a4e]/10">
              <th
                scope="row"
                className="p-5 lg:p-6 align-top text-[#1b2a4e] text-sm font-semibold"
              >
                {cap.label}
              </th>
              {dbPatterns.clouds.map((c) => (
                <td
                  key={c.name}
                  className="p-5 lg:p-6 align-top border-l border-[#1b2a4e]/10 text-[#5E6470] text-sm leading-relaxed"
                >
                  {c.values[cap.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* mobile : stacked per-cloud cards */}
      <div className="md:hidden divide-y divide-[#1b2a4e]/10">
        {dbPatterns.clouds.map((c) => (
          <div key={c.name} className="p-6">
            <div className="flex items-center gap-2.5">
              <c.logo className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span className="text-[#1b2a4e] text-lg font-semibold tracking-tight">
                {c.name}
              </span>
            </div>
            <dl className="mt-4 space-y-3">
              {dbPatterns.capabilities.map((cap) => (
                <div key={cap.key}>
                  <dt className="text-[#5E6470]/70 text-xs font-medium tracking-[0.14em] uppercase">
                    {cap.label}
                  </dt>
                  <dd className="mt-0.5 text-[#5E6470] text-sm leading-relaxed">
                    {c.values[cap.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Deployment() {
  return (
    <>
      <PageHeader
        eyebrow="Deployment"
        title="Deployment"
        lead="Curia is cloud-agnostic and runs on each provider's native managed data services — DynamoDB, Cosmos DB, or Bigtable — or on PostgreSQL and Kubernetes where you want a fully portable, self-managed stack. Self-host it on your own infrastructure, from a laptop in development to a clustered production deployment, with no dependency on a single vendor."
        actions={
          <Button href={REPO_URL} external>
            View on GitHub
          </Button>
        }
      />

      {/* Local development */}
      <Section className="pt-2 md:pt-4">
        <SectionHeading
          eyebrow="Local development"
          title="Run Curia on your machine"
          intro="Clone the repository, start the backing services with Docker Compose, and run the app in development mode."
        />
        <Reveal>
          <Card className="mt-8 md:mt-10">
            <p className="text-[#5E6470]/70 text-xs md:text-sm font-medium tracking-[0.14em] uppercase">
              Shell
            </p>
            <pre className="mt-4 overflow-x-auto rounded-[1rem] bg-[#1b2a4e] text-[#e7ecf5] text-sm p-4 md:p-5 leading-relaxed">
              <code>{localCommands}</code>
            </pre>
          </Card>
        </Reveal>
      </Section>

      {/* Docker */}
      <Section>
        <SectionHeading
          eyebrow="Docker"
          title="Build and run a container"
          intro="Build an image and run it anywhere a container runtime is available. The registry path below is an example — substitute your own."
        />
        <Reveal>
          <Card className="mt-8 md:mt-10">
            <p className="text-[#5E6470]/70 text-xs md:text-sm font-medium tracking-[0.14em] uppercase">
              Shell
            </p>
            <pre className="mt-4 overflow-x-auto rounded-[1rem] bg-[#1b2a4e] text-[#e7ecf5] text-sm p-4 md:p-5 leading-relaxed">
              <code>{dockerCommands}</code>
            </pre>
          </Card>
        </Reveal>
      </Section>

      {/* Kubernetes */}
      <Section>
        <SectionHeading
          eyebrow="Kubernetes"
          title="Deploy to a cluster"
          intro="Apply the provided manifests directly, or install with Helm if you prefer templated values. Paths and chart values shown here are examples."
        />
        <Reveal>
          <Card className="mt-8 md:mt-10">
            <p className="text-[#5E6470]/70 text-xs md:text-sm font-medium tracking-[0.14em] uppercase">
              Shell
            </p>
            <pre className="mt-4 overflow-x-auto rounded-[1rem] bg-[#1b2a4e] text-[#e7ecf5] text-sm p-4 md:p-5 leading-relaxed">
              <code>{k8sCommands}</code>
            </pre>
          </Card>
        </Reveal>
      </Section>

      {/* Cloud notes */}
      <Section>
        <SectionHeading
          eyebrow="Cloud patterns"
          title="Native managed data on every cloud"
          intro="Curia maps onto each provider's serverless data services rather than locking you to one engine. Pick the managed pattern that fits the cloud you already run — or bring PostgreSQL and Kubernetes for a fully portable stack."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {cloudNotes.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <IconFeature icon={c.icon} title={c.title}>
                {c.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Reference data patterns */}
      <Section>
        <SectionHeading
          eyebrow="Reference patterns"
          title="Core database and retrieval, by deployment target"
          intro="The recommended data tier for each target, including a self-managed Kubernetes + PostgreSQL path for full portability. These are defaults, not requirements — mix and match the engines and search stores that fit your environment."
        />
        <Reveal>
          <ComparisonTable />
        </Reveal>
      </Section>

      {/* Storage & services assumptions */}
      <Section>
        <SectionHeading
          eyebrow="Storage & services assumptions"
          title="What Curia expects to find"
          intro="A deployment relies on a handful of standard, swappable building blocks. Use managed services or self-managed equivalents — Curia does not require any single vendor."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {assumptions.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <IconFeature icon={a.icon} title={a.title}>
                {a.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
      </Section>

      <CalloutCTA />
    </>
  )
}
