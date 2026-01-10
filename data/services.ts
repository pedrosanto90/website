export type ServiceItem = {
  title: string;
  benefit: string;
  stack: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  summary: string;
  items: ServiceItem[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "product",
    label: "Product delivery",
    summary: "Launch-ready builds that unblock growth and validate demand.",
    items: [
      {
        title: "MVPs & Product Builds",
        benefit: "Build a reliable MVP fast, without cutting corners.",
        stack: "Next.js / Angular • NestJS • PostgreSQL",
      },
      {
        title: "Dashboards & Internal Tools",
        benefit: "Admin panels, reporting, workflows, and automation.",
        stack: "Angular / Next.js • NestJS",
      },
    ],
  },
  {
    id: "engineering",
    label: "Core engineering",
    summary: "Front-to-back systems that stay fast as teams and users grow.",
    items: [
      {
        title: "Frontend Engineering (React/Next.js/Angular)",
        benefit: "Accessible, performant UI that scales with your product.",
        stack: "React / Next.js / Angular",
      },
      {
        title: "Backends & APIs (Node.js/NestJS)",
        benefit: "Clean architecture, auth, integrations, and performance.",
        stack: "NestJS • REST • PostgreSQL",
      },
    ],
  },
  {
    id: "reliability",
    label: "Reliability & support",
    summary: "Stability upgrades that reduce bugs and speed up delivery.",
    items: [
      {
        title: "Refactors & Maintenance",
        benefit: "Improve performance, stability, and developer velocity.",
        stack: "Your stack + best practices",
      },
    ],
  },
];

export default serviceCategories;
