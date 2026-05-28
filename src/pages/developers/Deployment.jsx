import { Database, HardDrive, Network, Zap, Cpu } from 'lucide-react'
import { AwsLogo, AzureLogo, GcpLogo } from '../../components/BrandIcons.jsx'
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
    title: 'AWS EKS',
    body: 'Run on a managed EKS cluster. Pair with RDS for PostgreSQL, S3 for object storage, ElastiCache for caching, and an ALB ingress with ACM-issued TLS.',
  },
  {
    icon: AzureLogo,
    title: 'Azure AKS',
    body: 'Deploy to AKS. Use Azure Database for PostgreSQL, Blob Storage for objects, Azure Cache for Redis, and the application gateway ingress controller for TLS.',
  },
  {
    icon: GcpLogo,
    title: 'GCP GKE',
    body: 'Deploy to GKE. Use Cloud SQL for PostgreSQL, Cloud Storage for objects, Memorystore for caching, and a GKE ingress with managed certificates.',
  },
]

const assumptions = [
  {
    icon: Database,
    title: 'Relational database',
    body: 'A managed PostgreSQL-style database holds organizations, teams, spaces, policies, and audit logs.',
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

export default function Deployment() {
  return (
    <>
      <PageHeader
        eyebrow="Deployment"
        title="Deployment"
        lead="Curia is Kubernetes-first and cloud-agnostic. Self-host it on your own infrastructure — from a laptop in development to a clustered production deployment — with no dependency on a single vendor."
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
          eyebrow="Cloud notes"
          title="Cloud-agnostic by design"
          intro="Curia runs the same on any managed Kubernetes service. The notes below map its dependencies to common managed offerings on each provider."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {cloudNotes.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <IconFeature icon={c.icon} title={c.title}>
                {c.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
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
