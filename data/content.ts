const siteContent = {
  meta: {
    title:
      "Pedro e Santo - Freelance Full-Stack Developer (Angular, NestJS, Next.js)",
    description:
      "End-to-end web development: Angular/Next.js frontends and NestJS backends. MVPs, dashboards, APIs, and long-term support.",
    ogTitle:
      "Pedro e Santo - Freelance Full-Stack Developer (Angular, NestJS, Next.js)",
    ogDescription:
      "End-to-end web development: Angular/Next.js frontends and NestJS backends. MVPs, dashboards, APIs, and long-term support.",
  },
  nav: {
    ariaLabel: "Primary",
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Contact me",
  },
  hero: {
    headline: "End-to-end web development for teams that need to move fast.",
    subheadline:
      "React / Next.js / Angular • Node.js / NestJS • PostgreSQL • APIs • Cloud-ready",
    differentiator:
      "Direct communication, iterative delivery, and engineering focused on outcomes.",
  },
  ctaButtons: {
    primaryLabel: "Contact me",
    secondaryLabel: "Request a quote",
  },
  ctaSections: {
    afterServices: {
      title: "Ready to scope your project?",
      description:
        "Share your goals and timeline to get a clear plan and next steps.",
    },
    beforeFooter: {
      title: "Let's build something that launches and scales",
      description:
        "Book a quick call or request a quote and I'll follow up with a plan.",
    },
  },
  services: {
    title: "Services",
    subtitle:
      "Practical, product-focused engineering to move fast without sacrificing quality.",
    cardCtaLabel: "Talk to me about this",
  },
  process: {
    title: "How I work",
    stepLabel: "Step",
  },
  caseStudies: {
    title: "Case Studies",
    subtitle: "Recent work (anonymous) with NDA-friendly details.",
  },
  faq: {
    title: "FAQ",
    subtitle: "Answers to common questions before we get started.",
  },
  about: {
    title: "About me",
  },
  skills: {
    title: "Skills & Technologies",
  },
  projects: {
    title: "Featured Projects",
  },
  contact: {
    title: "Let's talk about your project",
    subtitle: "I usually reply within 24-48 business hours.",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Goals, timeline, budget range, preferred stack...",
      submitLabel: "Send inquiry",
      sendingLabel: "Sending...",
      successMessage: "Email Sent.",
      errorMessage: "Please check your details and try again.",
      invalidMessage: "Please check your details and try again.",
      trustNote: "Response within 24-48 business hours.",
      directEmailLabel: "Prefer email?",
      validation: {
        name: "Please add your name (min 2 characters).",
        email: "Please enter a valid email address.",
        message: "Please add a short project message (min 10 characters).",
      },
      honeypotLabel: "Company website",
    },
    quickLinks: {
      prefix: "Prefer a quick link? Email me at",
      middle: "or connect on",
      and: "or",
      linkedInLabel: "LinkedIn",
      githubLabel: "GitHub",
      suffix: ".",
    },
    mail: {
      subject: "Project inquiry - web development",
      bodyLines: [
        "Hi Pedro,",
        "",
        "Name: ",
        "Email: ",
        "Message: ",
        "",
        "Goals: ...",
        "Timeline: ...",
        "Budget range: ...",
        "Preferred stack: ...",
      ],
    },
    apiMessages: {
      invalidPayload: "Invalid request payload.",
      invalidDetails: "Please check your details and try again.",
      rateLimited: "Too many requests. Please try again later.",
      unavailable: "Contact form is temporarily unavailable.",
      serverError: "Something went wrong. Please try again later.",
    },
  },
  footer: {
    rights: "Pedro Santo. All rights reserved.",
  },
  blog: {
    readMoreLabel: "Read more",
    notFoundTitle: "Post not found",
  },
};

export default siteContent;
