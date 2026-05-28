import {
  ShieldCheck,
  KeyRound,
  Server,
  ScrollText,
  Bug,
  Info,
} from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CalloutCTA from '../components/CalloutCTA.jsx'
import { Section, SectionHeading, IconFeature, Card, Button, Reveal } from '../components/ui.jsx'
import { ROUTES, LEGAL } from '../config/site.js'

const pillars = [
  {
    icon: KeyRound,
    title: 'Role-based access, least privilege',
    body: 'Access follows your org chart. People are granted only what their role requires, and AI agents inherit the exact permissions of the user they act on behalf of — never more.',
  },
  {
    icon: Server,
    title: 'Self-hosted trust boundary',
    body: 'Curia runs in your own cloud. The workspace, its data, and its connections to model providers stay inside infrastructure you control, so you own the trust boundary instead of a vendor.',
  },
  {
    icon: ScrollText,
    title: 'Audit logs',
    body: 'Access is logged so you can answer the question that matters after the fact: what was read, by whom or which agent, and why. Visibility is part of the design, not an add-on.',
  },
]

export default function Security() {
  return (
    <>
      <PageHeader
        eyebrow="Security"
        title="Security you can read, not just trust"
        lead="Curia is open source and self-hosted, so its security posture comes from how it is built and where it runs. This page explains the access model, the trust boundary, and how to report a vulnerability — in plain language."
        actions={
          <>
            <Button to={ROUTES.access}>How access works</Button>
            <Button href={`mailto:${LEGAL.securityEmail}`} variant="outline" icon={false}>
              Report a vulnerability
            </Button>
          </>
        }
      />

      {/* Informational note */}
      <Section className="pt-2 md:pt-4">
        <Reveal>
          <Card className="border border-[#1b2a4e]/10">
            <div className="flex items-start gap-4">
              <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#f0f0f0] text-[#1b2a4e]">
                <Info className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
                  This page is informational
                </h2>
                <p className="mt-2 text-[#5E6470] text-base leading-relaxed">
                  Curia does not claim any formal security certification or
                  compliance attestation. Nothing here should be read as a
                  certification, audit result, or guarantee. It describes how the
                  software is designed and operated so you can evaluate it
                  yourself — and, because Curia is self-hosted, you are
                  responsible for securing the environment you run it in.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* Access model summary */}
      <Section>
        <SectionHeading
          eyebrow="Access model"
          title="Boundaries are enforced for people and agents alike"
          intro="Curia is built around role-based access control and least privilege. Every request — human or agent — is evaluated against the same policy, so an agent can never reach something the current user could not."
        />
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <IconFeature icon={p.icon} title={p.title}>
                {p.body}
              </IconFeature>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <div className="mt-6">
            <Button to={ROUTES.access} variant="outline">
              Read the full access model
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Self-hosted trust boundaries */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <SectionHeading
            eyebrow="Trust boundary"
            title="Your data runs in your cloud"
          />
          <div className="space-y-4 text-[#5E6470] text-base md:text-lg leading-relaxed">
            <p>
              Because Curia is self-hosted, the workspace and its data stores run
              inside infrastructure you own. Prompts, retrieved context, and
              conversations stay within the boundary you define — they are not
              routed through a service we operate.
            </p>
            <p>
              That also means you control the perimeter: network policy, secrets
              management, encryption settings, identity provider, and the model
              providers you connect. We provide the software and guidance; the
              security of the deployment is in your hands.
            </p>
            <p>
              Because the source is open, you can audit the access logic directly
              rather than relying on a written promise about how it behaves.
            </p>
          </div>
        </div>
      </Section>

      {/* Least privilege & audit logs detail */}
      <Section>
        <SectionHeading
          eyebrow="Least privilege & auditability"
          title="Grant little, log everything"
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <Reveal>
            <IconFeature icon={KeyRound} title="Scoped by default">
              Agents are bound to a team's role and policy. Their memory,
              retrieval, and tools are limited to what that team can access, so a
              scoped agent cannot surface content that was never inside its
              boundary.
            </IconFeature>
          </Reveal>
          <Reveal delay={0.05}>
            <IconFeature icon={ScrollText} title="Logged access">
              Access decisions are evaluated server-side and recorded, giving you
              an audit trail of what people and agents read. That makes after-the-fact
              review possible instead of guesswork.
            </IconFeature>
          </Reveal>
        </div>
      </Section>

      {/* Responsible disclosure */}
      <Section>
        <Reveal>
          <Card>
            <div className="flex items-start gap-4">
              <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#f0f0f0] text-[#1b2a4e]">
                <Bug className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-[#1b2a4e] text-xl md:text-2xl font-semibold tracking-tight">
                  Responsible disclosure
                </h2>
                <p className="mt-2 text-[#5E6470] text-base leading-relaxed max-w-3xl">
                  If you believe you have found a security vulnerability, please
                  report it privately to{' '}
                  <a
                    href={`mailto:${LEGAL.securityEmail}`}
                    className="text-[#1b2a4e] underline underline-offset-2 hover:no-underline"
                  >
                    {LEGAL.securityEmail}
                  </a>{' '}
                  rather than opening a public issue. Include enough detail to
                  reproduce the problem, and give us a reasonable amount of time
                  to investigate and respond before any public disclosure.
                </p>
                <p className="mt-3 text-[#5E6470] text-base leading-relaxed max-w-3xl">
                  We appreciate good-faith research. As an early-stage open-source
                  project, we cannot promise a formal bug-bounty program or fixed
                  response times, but we will acknowledge reports and work with
                  you in good faith.
                </p>
                <div className="mt-5">
                  <Button href={`mailto:${LEGAL.securityEmail}`} icon={false}>
                    <ShieldCheck className="w-4 h-4" />
                    Email the security team
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>

      <CalloutCTA />
    </>
  )
}
