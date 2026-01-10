export type FaqItem = {
  question: string;
  answer: string;
};

const faq: FaqItem[] = [
  {
    question: "How do you estimate timeline and cost?",
    answer:
      "After discovery, I break the scope into milestones and provide a transparent estimate with trade-offs.",
  },
  {
    question: "Do you work with NDAs and contracts?",
    answer:
      "Yes. I am happy to sign NDAs and use your preferred agreement templates.",
  },
  {
    question: "Can you join an existing team or codebase?",
    answer:
      "Absolutely. I can onboard quickly and collaborate with your team or take ownership of a codebase.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. I offer maintenance, performance improvements, and new feature delivery after launch.",
  },
  {
    question: "What types of projects are a good fit?",
    answer:
      "MVPs, internal tools, dashboards, and API-driven platforms that need clean architecture and fast delivery.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "We set a primary channel (Slack or email) and share regular updates with demos and progress summaries.",
  },
  {
    question: "When do you recommend Angular vs React/Next.js?",
    answer:
      "Angular works well for large teams and structured frontends, while React/Next.js shines for fast iteration and SEO.",
  },
  {
    question: "What is your backend approach with NestJS?",
    answer:
      "I focus on modular architecture, clear boundaries, and tested integrations for reliable APIs.",
  },
];

export default faq;
