// Blog seed content. Add new posts here; the index (/blog) and post pages
// (/blog/:slug) render from this list automatically.

export const POSTS = [
  {
    slug: 'why-ai-agents-need-role-boundaries',
    title: 'Why AI agents need role boundaries',
    category: 'Access',
    date: '2026-05-12',
    readingTime: '6 min read',
    excerpt:
      'An AI agent with access to everything is not an assistant — it is a standing risk. Role boundaries make agents useful and safe at the same time.',
    body: [
      {
        paragraphs: [
          'When teams add AI to their workspace, the instinct is to give the model as much context as possible. More documents, more channels, more history — surely that makes the answers better. In practice, it creates an agent that behaves like a superuser: one prompt away from surfacing a salary band, an unannounced acquisition, or a security incident to someone who was never meant to see it.',
          'Human organizations solved this problem long ago with roles. A marketer does not get a key to the payments-engineering on-call channel. Curia applies that same expectation to AI.',
        ],
      },
      {
        heading: 'Least privilege is not a limitation — it is the product',
        paragraphs: [
          'Role-based access control (RBAC) restricts what someone can do based on their role, and least-privilege design means granting only the access a task actually requires. These are decades-old principles in security engineering. The shift with AI agents is that the agent now acts on behalf of a user, so it must inherit — and never exceed — that user’s permissions.',
          'When an agent is scoped to a team, its memory, its retrieval, and the tools it can call are all bounded by that team’s role and policy. The marketing agent literally cannot retrieve a payments-engineering incident, because that content was never inside its boundary.',
        ],
      },
      {
        heading: 'Boundaries make agents more trustworthy, not less capable',
        paragraphs: [
          'A scoped agent gives more confident answers, because everything it can reach is something the current user is allowed to act on. There is no second-guessing whether a summary accidentally pulled in a restricted document. And because every access is logged, you can answer the question that matters after the fact: what did the agent read, and why?',
          'The goal is simple. AI employees should behave like real employees with role-limited access — not like administrators with the keys to everything.',
        ],
      },
    ],
  },
  {
    slug: 'what-privacy-first-means-in-a-virtual-office',
    title: 'What privacy-first means in a virtual office',
    category: 'Privacy',
    date: '2026-05-06',
    readingTime: '5 min read',
    excerpt:
      'Privacy is more than encryption and self-hosting. It is making sure the right people — and the right agents — can reach the right knowledge, and nothing more.',
    body: [
      {
        paragraphs: [
          '“Privacy-first” is often reduced to a lock icon: data encrypted in transit, maybe at rest, and a promise not to train on your content. Those things matter, but they describe how data is stored, not who can reach it. In a workspace full of conversations, meetings, and AI agents, the harder question is access.',
        ],
      },
      {
        heading: 'Scoped by default',
        paragraphs: [
          'A privacy-first virtual office starts from the assumption that knowledge is partitioned. Teams have their own spaces, their own memory, and their own agents. Nothing is globally searchable just because it was written down somewhere. Retrieval, summaries, and workflows all respect the same boundaries the organization already defines.',
          'This is the difference between “we encrypt your data” and “the wrong person — or agent — can’t retrieve it in the first place.”',
        ],
      },
      {
        heading: 'Self-hosting closes the loop',
        paragraphs: [
          'Because Curia is open source and self-hosted, the workspace runs on infrastructure you control. You can read the access logic instead of trusting a description of it, bring your own model providers, and keep sensitive data inside your own cloud boundary.',
          'Privacy-first, then, is a property of the architecture: scoped retrieval, role-aware agents, auditability, and the ability to run the whole thing yourself.',
        ],
      },
    ],
  },
  {
    slug: 'self-hosting-curia-on-your-own-cloud',
    title: 'Self-hosting Curia on your own cloud',
    category: 'Deployment',
    date: '2026-04-28',
    readingTime: '7 min read',
    excerpt:
      'Curia is Kubernetes-first and runs on AWS, Azure, or GCP. Here is how the self-hosted model keeps data and AI inside your trust boundary.',
    body: [
      {
        paragraphs: [
          'Self-hosting is not a checkbox for Curia — it is the default operating model. The workspace, its data stores, and the connections to your model providers all run inside infrastructure you own, which is what makes the privacy and access guarantees real rather than contractual.',
        ],
      },
      {
        heading: 'Kubernetes-first, cloud-agnostic',
        paragraphs: [
          'Curia is designed to deploy on Kubernetes, so it runs the same way on Amazon EKS, Azure AKS, or Google GKE. For evaluation you can run it locally with Docker; for production you bring your own managed database, object storage, and ingress.',
          'Bring-your-own-models means inference can point at the providers or self-hosted models you already trust, keeping prompts and retrieved context within your boundary.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'The Deployment guide walks through local development, a Docker setup, Kubernetes manifests, and per-cloud notes for AWS, Azure, and GCP, along with the storage and service assumptions Curia makes. The Documentation covers configuring agents, model providers, and access policies once you are running.',
        ],
      },
    ],
  },
]

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug)
}
