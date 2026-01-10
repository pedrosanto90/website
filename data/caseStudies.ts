export type CaseStudy = {
  title: string;
  summary: string;
  stack: string;
  outcome: string;
  note: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Internal operations portal",
    summary:
      "Consolidated workflows and role-based access for multiple teams.",
    stack: "Angular • NestJS • PostgreSQL",
    outcome: "Outcome: reduced manual work and improved traceability.",
    note: "More details available on request (NDA-friendly).",
  },
  {
    title: "Marketing KPI dashboard",
    summary:
      "Unified reporting across channels with permissions and exports.",
    stack: "Angular • NestJS • PostgreSQL",
    outcome: "Outcome: faster decision-making with a single source of truth.",
    note: "More details available on request (NDA-friendly).",
  },
  {
    title: "Integration API layer",
    summary:
      "Built a reliable API layer to connect legacy systems and modern services.",
    stack: "NestJS • REST • PostgreSQL",
    outcome: "Outcome: simplified integrations and improved reliability.",
    note: "More details available on request (NDA-friendly).",
  },
  {
    title: "Client onboarding hub",
    summary:
      "Automated account setup, document collection, and internal approvals.",
    stack: "Next.js • NestJS • PostgreSQL",
    outcome: "Outcome: smoother onboarding and fewer handoffs.",
    note: "More details available on request (NDA-friendly).",
  },
];

export default caseStudies;
