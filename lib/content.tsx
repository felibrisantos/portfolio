import type { Lang } from "./use-lang";

type Bi = { pt: string; en: string };

export const SITE = {
  name: "Felipe Brigagão",
  email: "felibrisantos@gmail.com",
  location: "Jacareí, SP",
  social: {
    linkedin: "https://linkedin.com/in/felibrisantos",
    github: "https://github.com/felibrisantos",
  },
};

export const COPY: Record<Lang, {
  role: string;
  positioning: string;
  nav: { work: string; research: string; about: string; stack: string; contact: string };
  contactLead: string;
  sections: { featured: string; about: string; stack: string; contact: string };
  contactHeading: React.ReactNode;
  researchHeading: string;
  stackHeading: string;
  paperTitle: React.ReactNode;
  paperAbstract: string;
  paperCredits: string;
  paperKind: string;
}> = {
  pt: {
    role: "Desenvolvedor fullstack",
    positioning:
      "Construo sistemas que rodam em produção para marcas de CPG — Heineken, Ambev, FEMSA. Cheguei ao código pela modelagem estatística, com artigo indexado sobre redes neurais aplicadas a índices econômicos brasileiros.",
    nav: { work: "Trabalho", research: "Pesquisa", about: "Sobre", stack: "Stack", contact: "Contato" },
    sections: { featured: "Trabalho", about: "Sobre", stack: "Stack", contact: "Contato" },
    contactLead: "Se quiser falar sobre um projeto, me escreva.",
    contactHeading: (
      <>Vamos construir <em>algo</em>.</>
    ),
    researchHeading: "Pesquisa",
    stackHeading: "Stack",
    paperTitle: (
      <>O impacto dos indicadores econômicos <em>no consumo</em>: uma abordagem com redes neurais.</>
    ),
    paperAbstract:
      "Modelei oito índices econômicos setoriais brasileiros com uma rede neural densa: duas camadas de 64 neurônios com ReLU, saída de regressão, TensorFlow/Keras, RMSprop e Early Stopping sobre conjunto de validação. As entradas vêm de IBGE, FGV, Bacen, FecomercioSP, CNC, B3, MDIC e Fipe. Em teste, o R² ficou entre 0,82 e 0,96 — acima de 0,90 em cinco dos oito índices. O RMAE ficou entre 3,8% e 9,2%.",
    paperCredits:
      "Escrito com Tardelli Ronan Coelho Stekel (IFSP). Pesquisa financiada em parte pela FAPESP, processo #2023/14073-1.",
    paperKind: "Artigo científico",
  },
  en: {
    role: "Fullstack developer",
    positioning:
      "I build systems that run in production for CPG brands — Heineken, Ambev, FEMSA. I came to code through statistical modelling, with an indexed paper on neural networks applied to Brazilian economic indices.",
    nav: { work: "Work", research: "Research", about: "About", stack: "Stack", contact: "Contact" },
    sections: { featured: "Work", about: "About", stack: "Stack", contact: "Contact" },
    contactLead: "If you want to talk about a project, write to me.",
    contactHeading: (
      <>Let&apos;s build <em>something</em>.</>
    ),
    researchHeading: "Research",
    stackHeading: "Stack",
    paperTitle: (
      <>The impact of economic indicators <em>on consumption</em>: a neural network approach.</>
    ),
    paperAbstract:
      "I modelled eight Brazilian sectoral economic indices with a dense neural network: two 64-neuron ReLU layers, a regression output, TensorFlow/Keras, RMSprop and early stopping on a validation set. Inputs come from IBGE, FGV, Bacen, FecomercioSP, CNC, B3, MDIC and Fipe. On the test set, R² landed between 0.82 and 0.96 — above 0.90 for five of the eight indices. RMAE landed between 3.8% and 9.2%.",
    paperCredits:
      "Written with Tardelli Ronan Coelho Stekel (IFSP). Research partly funded by FAPESP, grant #2023/14073-1.",
    paperKind: "Peer-reviewed article",
  },
};

export interface Project {
  id: string;
  year: string;
  client: Bi;
  title: Bi;
  tag: Bi;
  role: Bi;
  problem: Bi;
  decision: Bi;
  /** Omitted when there is nothing measured to report. */
  outcome?: Bi;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "cyma-architect",
    year: "2025-2026",
    client: { pt: "Na Abdou, para CYMA Digital", en: "At Abdou, for CYMA Digital" },
    title: { pt: "CYMA Architect Agent", en: "CYMA Architect Agent" },
    tag: { pt: "Orquestração de agentes", en: "Agent orchestration" },
    role: { pt: "Arquitetura & implementação", en: "Architecture & implementation" },
    problem: {
      pt: "Uma proposta de redesenho precisa partir da imagem do ambiente sem o que já está lá dentro.",
      en: "A redesign proposal has to start from an image of the room without what is already in it.",
    },
    decision: {
      pt: "Separei em dois agentes — um limpa a entrada, outro gera a proposta — com orquestração que mantém o estado da conversa entre iterações.",
      en: "I split it into two agents — one cleans the input, the other generates the proposal — with orchestration that keeps conversation state across iterations.",
    },
    outcome: {
      pt: "Em produção, em uso por Heineken, FEMSA e arquitetos parceiros.",
      en: "In production, used by Heineken, FEMSA and partner architects.",
    },
    stack: ["React 19", "Zustand", "Vite", "OpenAI", "Gemini"],
  },
  {
    id: "cymatrix",
    year: "2026",
    client: { pt: "Na Abdou, para CYMA Digital", en: "At Abdou, for CYMA Digital" },
    title: { pt: "CYMATRIX", en: "CYMATRIX" },
    tag: { pt: "Operações em tempo real", en: "Real-time operations" },
    role: { pt: "Frontend & integração de dados", en: "Frontend & data integration" },
    problem: {
      pt: "Quem opera uma frota de painéis LED precisa do estado de cada painel agora, não no relatório seguinte.",
      en: "Whoever runs a fleet of LED panels needs each panel's state now, not in the next report.",
    },
    decision: {
      pt: "Dashboards com estado ao vivo por WebSocket, agendamento e diagnóstico na mesma tela do operador.",
      en: "Live-state dashboards over WebSocket, with scheduling and diagnostics on the same screen the operator already uses.",
    },
    stack: ["React 19", "Radix", "TanStack Query", "WebSockets"],
  },
  {
    id: "cymadisplay",
    year: "2025-2026",
    client: { pt: "Na Abdou, para CYMA Digital", en: "At Abdou, for CYMA Digital" },
    title: { pt: "CYMADISPLAY", en: "CYMADISPLAY" },
    tag: { pt: "Plataforma comercial", en: "Commerce platform" },
    role: { pt: "Fullstack", en: "Fullstack" },
    problem: {
      pt: "Vender digital signage exigia catálogo, conteúdo e checkout no mesmo lugar.",
      en: "Selling digital signage meant catalog, content and checkout in one place.",
    },
    decision: {
      pt: "Next.js com Prisma, pagamento via Stripe, pipeline de e-mail transacional e SEO técnico tratado na estrutura, não depois.",
      en: "Next.js with Prisma, Stripe payments, a transactional email pipeline and technical SEO handled in the structure, not after it.",
    },
    outcome: {
      pt: "Produto ativo, com telas instaladas em todo o Brasil.",
      en: "Shipped product, with screens installed across Brazil.",
    },
    stack: ["Next.js", "Prisma", "Stripe", "SendGrid"],
  },
  {
    id: "portal-tm-hnk",
    year: "2025–2026",
    client: {
      pt: "Na Abdou, para Heineken Brasil",
      en: "At Abdou, for Heineken Brasil",
    },
    title: { pt: "Portal TM-HNK", en: "TM-HNK Portal" },
    tag: { pt: "Ferramenta interna", en: "Internal tool" },
    role: { pt: "Engenharia de produto", en: "Product engineering" },
    problem: {
      pt: "Projeto Tailor Made passa por aprovação em vários níveis, com assets e sistemas internos em lugares separados.",
      en: "A Tailor Made project goes through several approval levels, with assets and internal systems living apart.",
    },
    decision: {
      pt: "Central única em Django e PostgreSQL: o fluxo de aprovação virou estado explícito, com assets no S3 e integração com os sistemas internos.",
      en: "A single hub in Django and PostgreSQL: the approval flow became explicit state, with assets on S3 and integration with the internal systems.",
    },
    outcome: {
      pt: "Uso diário em projetos OPP, Especiais, Key Account e Spin, por BAs e gerentes regionais da Heineken.",
      en: "Daily use across OPP, Especiais, Key Account and Spin projects, by Heineken BAs and regional managers.",
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
