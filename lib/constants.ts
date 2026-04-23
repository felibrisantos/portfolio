export const SITE_CONFIG = {
  name: "Brigagão",
  fullName: "Felipe Brigagão",
  role: "Arquiteto Fullstack & IA",
  email: "felipe@brigagao.tech",
  social: {
    linkedin: "https://linkedin.com/in/felibrisantos",
    github: "https://github.com/felibrisantos",
  },
};

export const HERO_CONTENT = {
  label: "Arquiteto Fullstack & IA",
  firstName: "Felipe",
  lastName: "Brigagão",
  description:
    "Combino uma base sólida em desenvolvimento web com conhecimentos avançados em Inteligência Artificial. Entrego produtos escaláveis para marcas globais como Heineken, Ambev e FEMSA, através da Abdou.",
  cta: {
    primary: { text: "Explorar trabalho", href: "#experiencia" },
    secondary: {
      text: "Entrar em contato",
      href: SITE_CONFIG.social.linkedin,
    },
  },
};

export const PROJECTS = [
  {
    id: "cyma-architect",
    number: "01",
    title: "CYMA Architect Agent",
    tag: "AI Orchestrator",
    description:
      "Orquestração multi-agente para arquitetura. Integra OpenAI (Cleaner) e Gemini 2.5 Flash (Designer) para redesign de ambientes em tempo real.",
    tech: ["React 19", "Zustand", "Vite", "GenAI"],
  },
  {
    id: "cymatrix",
    number: "02",
    title: "CYMATRIX",
    tag: "Next Gen UI",
    description:
      "Centro de controle digital. Interface dinâmica com React 19, animações avançadas e integração de dados em tempo real para operações de Dispositivos LED.",
    tech: ["React 19", "Radix", "TanStack"],
  },
  {
    id: "cymadisplay",
    number: "03",
    title: "CYMADISPLAY",
    tag: "Production Ready",
    description:
      "Plataforma robusta com Next.js e Prisma. Gerenciamento de conteúdo, SEO avançado e integração com Stripe/SendGrid.",
    tech: ["Next.js", "Prisma", "Stripe"],
  },
  {
    id: "portal-tm-hnk",
    number: "04",
    title: "Portal TM-HNK",
    tag: "Enterprise",
    description:
      "Central de operações de Projetos Tailor Made para a Heineken Brasil. Workflow complexo de aprovações e orquestração de assets.",
    tech: ["Django", "AWS S3", "Python"],
  },
];

export const AI_CONTENT = {
  label: "02 // Experiência de IA",
  title: "Arquiteto de Agentes",
  description:
    "Experiência prática na construção de motores de inteligência utilizando Claude e OpenAI. Foco em arquiteturas RAG e integração via Model Context Protocol (MCP).",
  protocols: [
    "MCP_PROTOCOL_IMPLEMENTED",
    "GOOGLE_GENAI_INTEGRATION",
    "MULTI_AGENT_REASONING",
  ],
};

export const TECH_STACK = [
  {
    category: "Frontend",
    items: [
      "React 19 / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    tags: ["TS", "Tailwind", "Radix UI"],
  },
  {
    category: "Backend",
    items: ["Node.js / Express", "PostgreSQL", "Prisma ORM", "Redis"],
    tags: ["Node", "SQL", "Auth.js"],
  },
  {
    category: "Inteligência",
    items: [
      "OpenAI / Anthropic SDK",
      "LangChain / Vercel AI",
      "Vector Databases",
      "Python / FastAPI",
    ],
    tags: ["LLM", "RAG", "MCP"],
  },
  {
    category: "Infraestrutura",
    items: ["Docker", "AWS / Vercel", "CI/CD (GitHub Actions)", "Terraform"],
    tags: ["Cloud", "DevOps", "Linux"],
  },
];
