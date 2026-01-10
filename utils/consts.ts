const data = {
  basic: {
    name: "Pedro Santo",
    full_name: "Pedro Filipe Duarte do Espirito Santo",
    title: "Freelance Full-Stack Developer",
    email: "pedro.esanto@pedroesanto.com",
    descrition:
      "End-to-end web development with Angular/Next.js frontends and NestJS backends. Available for freelance projects.",
  },
  contacts: {
    github: "https://github.com/pedrosanto90",
    linkedin: "https://linkedin.com/in/pedrosanto90",
    email: "pedro.esanto@pedroesanto.com",
  },
  about: {
    first_line:
      "I'm a freelance full-stack developer focused on building modern web applications that ship quickly and scale reliably.",
    second_line:
      "I work closely with teams to turn ideas into production-ready software with clean architecture and measurable outcomes.",
  },
  skills: [
    {
      id: "frontend",
      label: "Frontend",
      summary: "Interfaces modernas, acessiveis e rapidas.",
      items: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
      ],
    },
    {
      id: "backend",
      label: "Backend",
      summary: "APIs, arquitetura limpa e servicos escalaveis.",
      items: ["Node.js", "NestJS", "REST APIs"],
    },
    {
      id: "data",
      label: "Data",
      summary: "Modelacao e performance para dados consistentes.",
      items: ["PostgreSQL"],
    },
    {
      id: "tooling",
      label: "Tooling",
      summary: "Ferramentas de equipa e workflows estaveis.",
      items: ["Git"],
    },
  ],
  blog: {
    title: "Blog",
    sub_title: "Pedro Espirito Santo",
    description:
      "Welcome to the blog page! Here you'll find articles and updates.",
  },
};
export default data;
