import type { Lang } from "./use-lang";

type Bi = { pt: string; en: string };

export const SITE = {
  name: "Felipe Brigagão",
  email: "felipe@brigagao.tech",
  location: "São Paulo, Brasil",
  social: {
    linkedin: "https://linkedin.com/in/felibrisantos",
    github: "https://github.com/felibrisantos",
  },
};

export const COPY: Record<Lang, {
  role: string;
  availability: string;
  positioning: string;
  nav: { work: string; research: string; stack: string; contact: string };
  sections: { featured: string; stack: string; contact: string };
  year: string;
  role_col: string;
  caseStudy: string;
  viewLive: string;
  footer: string;
  langToggle: string;
  contactLead: string;
  contactHeading: React.ReactNode;
  researchHeading: string;
  stackHeading: string;
  paperTitle: React.ReactNode;
  paperAbstract: string;
  paperKind: string;
  nextProjects: string;
}> = {
  pt: {
    role: "Engenheiro fullstack & IA",
    availability:
      "Aberto a conversas sobre produtos de IA sob medida e plataformas fullstack — segundo semestre de 2026",
    positioning:
      "Escrevo o código, faço o produto fazer sentido e garanto que a entrega não seja algo pelo qual pedir desculpas.",
    nav: { work: "Trabalho", research: "Pesquisa", stack: "Stack", contact: "Contato" },
    sections: { featured: "Trabalho em destaque", stack: "Stack", contact: "Contato" },
    year: "Ano",
    role_col: "Função",
    caseStudy: "Estudo de caso",
    viewLive: "Ver ao vivo",
    footer: "Composto à mão em São Paulo. Tipografia em Fraunces e Inter.",
    langToggle: "EN",
    contactLead:
      "Aberto a conversas sobre produtos de IA, plataformas fullstack e projetos sob medida.",
    contactHeading: (
      <>Vamos construir <em>algo</em>.</>
    ),
    researchHeading: "Pesquisa",
    stackHeading: "Stack",
    paperTitle: (
      <>O impacto dos indicadores econômicos <em>no consumo</em>: uma abordagem com redes neurais.</>
    ),
    paperAbstract:
      "Uma arquitetura de rede neural (duas camadas densas de 64 neurônios, TensorFlow + Keras) para modelar relações não-lineares entre variáveis econômicas e comportamento do consumidor. Os modelos atingiram R² > 0,90 para a maioria dos indicadores, superando limitações de modelos econométricos tradicionais como ARIMA.",
    paperKind: "Artigo científico",
    nextProjects: "projetos",
  },
  en: {
    role: "Fullstack & AI engineer",
    availability:
      "Open to conversations about bespoke AI products and fullstack platforms — H2 2026",
    positioning:
      "I write the code, make the product make sense, and make sure the delivery isn't something to apologize for.",
    nav: { work: "Work", research: "Research", stack: "Stack", contact: "Contact" },
    sections: { featured: "Featured work", stack: "Stack", contact: "Contact" },
    year: "Year",
    role_col: "Role",
    caseStudy: "Case study",
    viewLive: "View live",
    footer: "Hand-set in São Paulo. Typography in Fraunces and Inter.",
    langToggle: "PT",
    contactLead:
      "Open to conversations about AI products, fullstack platforms and bespoke work.",
    contactHeading: (
      <>Let&apos;s build <em>something</em>.</>
    ),
    researchHeading: "Research",
    stackHeading: "Stack",
    paperTitle: (
      <>The impact of economic indicators <em>on consumption</em>: a neural network approach.</>
    ),
    paperAbstract:
      "A neural-network architecture (two dense layers of 64 neurons, TensorFlow + Keras) for modelling nonlinear relationships between economic variables and consumer behaviour. The models achieve R² > 0.90 for most indicators, addressing limitations of traditional econometric approaches such as ARIMA.",
    paperKind: "Peer-reviewed article",
    nextProjects: "projects",
  },
};

export interface Project {
  id: string;
  year: string;
  client: Bi;
  title: Bi;
  tag: Bi;
  role: Bi;
  summary: Bi;
  outcome: Bi;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "cyma-architect",
    year: "2025-2026",
    client: { pt: "CYMA Digital", en: "CYMA Digital" },
    title: { pt: "CYMA Architect Agent", en: "CYMA Architect Agent" },
    tag: { pt: "Orquestração de agentes", en: "Agent orchestration" },
    role: { pt: "Arquitetura & implementação", en: "Architecture & implementation" },
    summary: {
      pt: "Sistema multi-agente para redesenho de ambientes em tempo real. Um agente limpa a imagem de entrada, outro gera a proposta; a orquestração mantém a conversa coerente entre iterações.",
      en: "Multi-agent system for real-time environment redesign. One agent cleans the input image, another generates the proposal; orchestration keeps the conversation coherent across iterations.",
    },
    outcome: {
      pt: "Em produção — em uso por Heineken, FEMSA e arquitetos parceiros.",
      en: "In production — used by Heineken, FEMSA and partner architects.",
    },
    stack: ["React 19", "Zustand", "Vite", "OpenAI", "Gemini"],
  },
  {
    id: "cymatrix",
    year: "2026",
    client: { pt: "CYMA Digital", en: "CYMA Digital" },
    title: { pt: "CYMATRIX", en: "CYMATRIX" },
    tag: { pt: "Operações em tempo real", en: "Real-time operations" },
    role: { pt: "Frontend & integração de dados", en: "Frontend & data integration" },
    summary: {
      pt: "Centro de controle para frota de painéis LED. Dashboards com estado ao vivo, fluxos de agendamento e ferramentas de diagnóstico usadas por operadores em campo.",
      en: "Control center for a fleet of LED panels. Live-state dashboards, scheduling flows and diagnostic tools used by field operators.",
    },
    outcome: {
      pt: "Lançamento interno e para clientes iniciais em 2026.",
      en: "Internal launch and early-access clients rolling out in 2026.",
    },
    stack: ["React 19", "Radix", "TanStack Query", "WebSockets"],
  },
  {
    id: "cymadisplay",
    year: "2025-2026",
    client: { pt: "CYMA Digital", en: "CYMA Digital" },
    title: { pt: "CYMADISPLAY", en: "CYMADISPLAY" },
    tag: { pt: "Plataforma comercial", en: "Commerce platform" },
    role: { pt: "Fullstack", en: "Fullstack" },
    summary: {
      pt: "Plataforma completa de catálogo, conteúdo e checkout para displays LED. SEO técnico, pagamentos com Stripe e pipeline de email transacional.",
      en: "Catalog, content and checkout platform for LED displays. Technical SEO, Stripe payments and a transactional email pipeline.",
    },
    outcome: {
      pt: "Produto ativo — displays instalados em todo o Brasil.",
      en: "Shipped product — displays installed across Brazil.",
    },
    stack: ["Next.js", "Prisma", "Stripe", "SendGrid"],
  },
  {
    id: "portal-tm-hnk",
    year: "2025–2026",
    client: {
      pt: "Desenvolvido na Abdou para Heineken Brasil",
      en: "Developed at Abdou for Heineken Brasil",
    },
    title: { pt: "Portal TM-HNK", en: "TM-HNK Portal" },
    tag: { pt: "Ferramenta interna", en: "Internal tool" },
    role: { pt: "Engenharia de produto", en: "Product engineering" },
    summary: {
      pt: "Central de operações para projetos Tailor Made. Fluxo de aprovações em múltiplos níveis, orquestração de assets e integração com sistemas internos.",
      en: "Operations hub for Tailor Made projects. Multi-level approval flow, asset orchestration and integration with internal systems.",
    },
    outcome: {
      pt: "Uso diário em projetos OPP, Especiais, Key Account e Spin — BAs e gerentes regionais da Heineken em todo o Brasil.",
      en: "Daily use across OPP, Especiais, Key Account and Spin projects — Heineken BAs and regional managers nationwide.",
    },
    stack: ["Django", "Python", "AWS S3", "PostgreSQL"],
  },
];

export const STACK: { category: Bi; items: string[] }[] = [
  { category: { pt: "Frontend", en: "Frontend" }, items: ["React 19 / Next.js", "TypeScript", "Tailwind CSS", "Motion (Framer)"] },
  { category: { pt: "Backend", en: "Backend" }, items: ["Node.js", "Python / Django / FastAPI", "PostgreSQL / Prisma", "Redis"] },
  { category: { pt: "Inteligência", en: "Intelligence" }, items: ["OpenAI, Anthropic, Gemini", "RAG, vector DBs", "MCP (Model Context Protocol)", "LangChain / Vercel AI SDK"] },
  { category: { pt: "Infra", en: "Infra" }, items: ["Docker", "AWS, Vercel", "GitHub Actions", "Terraform"] },
];
