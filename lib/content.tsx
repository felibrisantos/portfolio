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
  /** Desktop hero. Full positioning. */
  positioning: string;
  /** Mobile hero. Stays under 20 words so the CTA survives the first fold. */
  positioningShort: string;
  nav: { work: string; research: string; about: string; stack: string; contact: string };
  /** One label per intent: every contact CTA uses cta.contact, every work CTA uses cta.work. */
  cta: { contact: string; work: string };
  availability: string;
  sections: { featured: string; about: string; stack: string; contact: string };
  researchHeading: string;
  aboutP1: string;
  aboutP2: string;
  stackHeading: string;
  paperTitle: React.ReactNode;
  paperAbstract: string;
  paperMetrics: { value: string; label: string }[];
  paperCredits: string;
  paperKind: string;
}> = {
  pt: {
    role: "Desenvolvedor fullstack",
    positioning:
      "Construo sistemas que rodam em produção para marcas de CPG: Heineken, Ambev, FEMSA. Cheguei ao código pela modelagem estatística, com artigo indexado sobre redes neurais aplicadas a índices econômicos brasileiros.",
    positioningShort:
      "Sistemas em produção para Heineken, Ambev e FEMSA. Cheguei ao código pela modelagem estatística.",
    nav: { work: "Trabalho", research: "Pesquisa", about: "Sobre", stack: "Stack", contact: "Contato" },
    cta: { contact: "Falar comigo", work: "Ver projetos" },
    availability:
      "Aberto a posições fullstack e a projetos de IA em produção. Me escreva.",
    sections: { featured: "Trabalho", about: "Sobre", stack: "Stack", contact: "Contato" },
    researchHeading: "Pesquisa",
    aboutP1:
      "Estudei Análise e Desenvolvimento de Sistemas no IFSP Jacareí, de 2022 a 2025. O que mais me formou ali foi o artigo: montar a rede, escolher as entradas, medir em conjunto de teste e relatar a faixa que saiu — não a melhor rodada.",
    aboutP2:
      "Hoje sou desenvolvedor fullstack na Abdou, em Jacareí. Escrevo front em React e Next.js, back em Django e Express sobre PostgreSQL, e coloco IA em produção com OpenAI e Gemini, com os prompts versionados em arquivo e um gate de avaliação antes de trocar a versão ativa. Pouco tempo de carreira, e código rodando com gente usando todo dia.",
    stackHeading: "Stack",
    paperTitle: (
      <>O impacto dos indicadores econômicos <em>no consumo</em>: uma abordagem com redes neurais.</>
    ),
    paperAbstract:
      "Modelei oito índices econômicos setoriais brasileiros com uma rede neural densa: duas camadas de 64 neurônios com ReLU, saída de regressão, TensorFlow/Keras, RMSprop e Early Stopping sobre conjunto de validação. As entradas vêm de IBGE, FGV, Bacen, FecomercioSP, CNC, B3, MDIC e Fipe.",
    paperMetrics: [
      { value: "0,82-0,96", label: "R² em conjunto de teste" },
      { value: "5 de 8", label: "índices com R² acima de 0,90" },
      { value: "3,8-9,2%", label: "RMAE em conjunto de teste" },
    ],
    paperCredits:
      "Escrito com Tardelli Ronan Coelho Stekel (IFSP). Pesquisa financiada em parte pela FAPESP, processo #2023/14073-1.",
    paperKind: "Artigo científico",
  },
  en: {
    role: "Fullstack developer",
    positioning:
      "I build systems that run in production for CPG brands: Heineken, Ambev, FEMSA. I came to code through statistical modelling, with an indexed paper on neural networks applied to Brazilian economic indices.",
    positioningShort:
      "Systems in production for Heineken, Ambev and FEMSA. I came to code through statistical modelling.",
    nav: { work: "Work", research: "Research", about: "About", stack: "Stack", contact: "Contact" },
    cta: { contact: "Get in touch", work: "See the work" },
    availability:
      "Open to fullstack roles and AI-in-production projects. Write to me.",
    sections: { featured: "Work", about: "About", stack: "Stack", contact: "Contact" },
    researchHeading: "Research",
    aboutP1:
      "I studied Systems Analysis and Development at IFSP Jacareí, from 2022 to 2025. What taught me most there was the paper: build the network, pick the inputs, measure on a test set and report the range that came out — not the best run.",
    aboutP2:
      "Today I am a fullstack developer at Abdou, in Jacareí. I write front end in React and Next.js, back end in Django and Express over PostgreSQL, and put AI into production with OpenAI and Gemini, with prompts versioned as files and an evaluation gate before the active version changes. Early in my career, and code running with people using it every day.",
    stackHeading: "Stack",
    paperTitle: (
      <>The impact of economic indicators <em>on consumption</em>: a neural network approach.</>
    ),
    paperAbstract:
      "I modelled eight Brazilian sectoral economic indices with a dense neural network: two 64-neuron ReLU layers, a regression output, TensorFlow/Keras, RMSprop and early stopping on a validation set. Inputs come from IBGE, FGV, Bacen, FecomercioSP, CNC, B3, MDIC and Fipe.",
    paperMetrics: [
      { value: "0.82-0.96", label: "R² on the test set" },
      { value: "5 of 8", label: "indices with R² above 0.90" },
      { value: "3.8-9.2%", label: "RMAE on the test set" },
    ],
    paperCredits:
      "Written with Tardelli Ronan Coelho Stekel (IFSP). Research partly funded by FAPESP, grant #2023/14073-1.",
    paperKind: "Scientific article",
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

/** First entry renders as the featured card (full grid width). */
export const PROJECTS: Project[] = [
  {
    id: "portal-tm-hnk",
    year: "2025-2026",
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
      pt: "Central única em Django e PostgreSQL: o fluxo de aprovação virou estado explícito, com assets no S3 e integração com os sistemas internos. O resumo de histórico gerado por IA só afirma o que consegue ancorar numa etapa registrada.",
      en: "A single hub in Django and PostgreSQL: the approval flow became explicit state, with assets on S3 and integration with the internal systems. The AI history summary only states what it can anchor to a recorded step.",
    },
    outcome: {
      pt: "Uso diário em projetos OPP, Especiais, Key Account e Spin, por BAs e gerentes regionais da Heineken.",
      en: "Daily use across OPP, Especiais, Key Account and Spin projects, by Heineken BAs and regional managers.",
    },
    stack: ["Django", "DRF", "PostgreSQL", "AWS S3", "React 18", "TanStack Query"],
  },
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
      pt: "Separei em dois agentes — um limpa a entrada, outro gera a proposta — com orquestração que mantém o estado da conversa entre iterações. Os prompts ficam versionados em arquivo e passam por um gate de avaliação antes de virar a versão ativa.",
      en: "I split it into two agents — one cleans the input, the other generates the proposal — with orchestration that keeps conversation state across iterations. Prompts are versioned as files and pass an evaluation gate before becoming the active version.",
    },
    outcome: {
      pt: "Em produção, em uso por Heineken, FEMSA e arquitetos parceiros.",
      en: "In production, used by Heineken, FEMSA and partner architects.",
    },
    stack: ["React 19", "Zustand", "Express", "OpenAI", "Gemini"],
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
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "SendGrid"],
  },
  {
    id: "cymatrix",
    year: "2026",
    client: { pt: "Na Abdou, para CYMA Digital", en: "At Abdou, for CYMA Digital" },
    title: { pt: "CYMATRIX", en: "CYMATRIX" },
    tag: { pt: "Operações em tempo real", en: "Real-time operations" },
    role: { pt: "Fullstack", en: "Fullstack" },
    problem: {
      pt: "Quem opera uma frota de painéis LED precisa do estado de cada painel agora, não no relatório seguinte.",
      en: "Whoever runs a fleet of LED panels needs the state of each panel now, not in the next report.",
    },
    decision: {
      pt: "Dashboards com estado ao vivo por WebSocket, agendamento e diagnóstico na mesma tela do operador. A frota aparece no mapa, e um painel pode ser alvo de agendamento sozinho ou dentro de um grupo.",
      en: "Live-state dashboards over WebSocket, with scheduling and diagnostics on the same screen the operator already uses. The fleet shows on a map, and a panel can be a scheduling target on its own or inside a group.",
    },
    stack: ["React 19", "Express 5", "Prisma", "WebSockets", "Leaflet"],
  },
];

/** Product names stay as plain strings; anything that reads differently per language is a `Bi`. */
export type StackItem = string | Bi;

export function stackLabel(item: StackItem, lang: Lang): string {
  return typeof item === "string" ? item : item[lang];
}

export const STACK: { category: Bi; items: StackItem[] }[] = [
  {
    category: { pt: "No produto", en: "In the product" },
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Radix / shadcn/ui", "TanStack Query"],
  },
  {
    category: { pt: "No servidor", en: "On the server" },
    items: ["Django / DRF", "Express / Node", "PostgreSQL", "Prisma", "AWS S3"],
  },
  {
    category: { pt: "IA em produção", en: "AI in production" },
    items: [
      "OpenAI gpt-image-1",
      "Gemini 2.5 Flash Image",
      { pt: "Prompts versionados", en: "Versioned prompts" },
      { pt: "Gate de avaliação", en: "Evaluation gate" },
    ],
  },
];
