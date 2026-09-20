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

/* Email is not in here: it is not a link. A mailto opens whatever desktop mail
   client happens to be registered, which is usually not the one the reader
   uses, so the address gets its own card with copy and compose as separate
   explicit actions. */
export const SOCIAL_LINKS = [
  { label: "LinkedIn", value: "/in/felibrisantos", href: SITE.social.linkedin },
  { label: "GitHub", value: "@felibrisantos", href: SITE.social.github },
];

export const COPY: Record<Lang, {
  role: string;
  /** Desktop hero. Full positioning. */
  positioning: string;
  /** Mobile hero. Stays under 20 words so the CTA survives the first fold. */
  positioningShort: string;
  nav: { work: string; research: string; about: string; stack: string; contact: string };
  /** One label per intent: every contact CTA uses cta.contact, every work CTA uses cta.work. */
  cta: { contact: string; work: string };
  /** Hint under the hero that the page continues below the fold. */
  scrollCue: string;
  /** 404. The numeral itself is not copy, so it is not in here. */
  notFound: { title: string; body: string; home: string };
  /** Footer slot on a project with no public URL. Phrased as access, not as
      kind: "internal tool" is already a `tag` on one of these cards. */
  projectAccess: string;
  /** Labels for the two explicit actions on the email card. */
  contactActions: { copy: string; copied: string; compose: string };
  availability: string;
  sections: { featured: string; about: string; stack: string; contact: string };
  researchHeading: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  /** Alt text for the about portrait. */
  portraitAlt: string;
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
      "Construo sistemas que rodam em produção para marcas de CPG. Cheguei ao código pela modelagem estatística, com artigo indexado sobre redes neurais.",
    positioningShort:
      "Sistemas em produção para Heineken e FEMSA. Cheguei ao código pela modelagem estatística.",
    nav: { work: "Trabalho", research: "Pesquisa", about: "Sobre", stack: "Stack", contact: "Contato" },
    cta: { contact: "Falar comigo", work: "Ver projetos" },
    scrollCue: "Role",
    notFound: {
      title: "Página não encontrada",
      body: "O endereço que você abriu não existe aqui. Ou foi removido, ou o link veio quebrado.",
      home: "Voltar ao início",
    },
    projectAccess: "Acesso restrito",
    contactActions: { copy: "Copiar", copied: "Copiado", compose: "Escrever" },
    availability:
      "Aberto a posições fullstack e a projetos de IA em produção.",
    sections: { featured: "Trabalho", about: "Sobre", stack: "Stack", contact: "Contato" },
    researchHeading: "Pesquisa",
    aboutP1:
      "Fiz Análise e Desenvolvimento de Sistemas no IFSP Jacareí, de 2022 a 2025. O que mais me formou ali foi escrever um artigo aplicando redes neurais a índices econômicos setoriais. Ele me obrigou a defender um número de verdade: escolher as entradas com critério, medir em conjunto de teste e relatar a faixa que saiu, não a rodada mais bonita.",
    aboutP2:
      "Hoje sou desenvolvedor fullstack na Abdou, em Jacareí. Trabalho nas duas pontas, e a parte de IA foi a que me cobrou esse mesmo rigor: cada prompt é um arquivo versionado, e nenhuma versão nova substitui a ativa sem passar por um gate de avaliação. Sem medir, o que sobra é impressão de que melhorou.",
    aboutP3:
      "Tenho pouco tempo de carreira. O que escrevi já está em produção, com gente usando todo dia.",
    portraitAlt: "Retrato em preto e branco de Felipe Brigagão.",
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
      "I build systems that run in production for CPG brands. I came to code through statistical modelling, with an indexed paper on neural networks.",
    positioningShort:
      "Systems in production for Heineken and FEMSA. I came to code through statistical modelling.",
    nav: { work: "Work", research: "Research", about: "About", stack: "Stack", contact: "Contact" },
    cta: { contact: "Get in touch", work: "See the work" },
    scrollCue: "Scroll",
    notFound: {
      title: "Page not found",
      body: "The address you opened does not exist here. It was either removed, or the link arrived broken.",
      home: "Back to the start",
    },
    projectAccess: "Restricted access",
    contactActions: { copy: "Copy", copied: "Copied", compose: "Compose" },
    availability:
      "Open to fullstack roles and AI-in-production projects.",
    sections: { featured: "Work", about: "About", stack: "Stack", contact: "Contact" },
    researchHeading: "Research",
    aboutP1:
      "I studied Systems Analysis and Development at IFSP Jacareí, from 2022 to 2025. What taught me most there was writing a paper applying neural networks to sectoral economic indices. It forced me to defend a real number: pick the inputs with a reason, measure on a test set, and report the range that came out, not the best-looking run.",
    aboutP2:
      "Today I am a fullstack developer at Abdou, in Jacareí. I work on both ends, and the AI side is the one that demanded that same rigour: every prompt is a versioned file, and no new version replaces the active one without passing an evaluation gate. Without measuring, all you have is the impression that it got better.",
    aboutP3:
      "I am early in my career. What I wrote is already in production, with people using it every day.",
    portraitAlt: "Black and white portrait of Felipe Brigagão.",
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
  /** Public URL, when the work is reachable at all. Omitted means the card
      renders `COPY.projectAccess` in its place: the slot answers the same
      question on every card, and leaving it empty reads as nothing to show. */
  href?: string;
  stack: string[];
}

/** Bare domain, for a project link. A URL the reader can recognise is stronger
    proof than a generic "see it live", and it needs no translation. */
export function hrefLabel(href: string): string {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
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
      pt: "Separei em dois agentes (um limpa a entrada, outro gera a proposta) com orquestração que mantém o estado da conversa entre iterações. Os prompts ficam versionados em arquivo e passam por um gate de avaliação antes de virar a versão ativa.",
      en: "I split it into two agents (one cleans the input, the other generates the proposal) with orchestration that keeps conversation state across iterations. Prompts are versioned as files and pass an evaluation gate before becoming the active version.",
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
    href: "https://www.cymadisplay.com/",
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
      en: "Anyone running a fleet of LED panels needs the state of each panel now, not in the next report.",
    },
    decision: {
      pt: "Dashboards com estado ao vivo por WebSocket, agendamento e diagnóstico na mesma tela do operador. A frota aparece no mapa, e um painel pode ser alvo de agendamento sozinho ou dentro de um grupo.",
      en: "Live-state dashboards over WebSocket, with scheduling and diagnostics on the same screen the operator already uses. The fleet shows on a map, and a panel can be a scheduling target on its own or inside a group.",
    },
    stack: ["React 19", "Express 5", "Prisma", "WebSockets", "Leaflet"],
  },
  {
    id: "iot-metrics",
    year: "2026",
    client: { pt: "Na Abdou, para CYMA Digital", en: "At Abdou, for CYMA Digital" },
    title: { pt: "IoT Metrics", en: "IoT Metrics" },
    tag: { pt: "Telemetria e chamados", en: "Telemetry and tickets" },
    /* Narrow on purpose. This is a long-running team platform and the slice
       below is the part that is mine. */
    role: { pt: "Ocorrências & sessão", en: "Occurrences & session" },
    problem: {
      pt: "A telemetria de um aparelho em campo diz que algo caiu. Não diz o que já foi feito a respeito.",
      en: "Telemetry from a device in the field says something went down. It does not say what has already been done about it.",
    },
    decision: {
      pt: "Cada ocorrência virou registro com comentário e histórico, em página própria e na tela do aparelho. A sessão sobrevive ao token expirado por um refresh que dedupe as chamadas concorrentes.",
      en: "Every occurrence became a record with comments and history, on its own page and on the device screen. The session survives an expired token through a refresh that dedupes concurrent calls.",
    },
    stack: ["React", "TanStack Query", "Recharts", "Leaflet", "Django", "DRF"],
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
  /* Kept separate from the column above on purpose: these run in personal
     projects that are not published yet, so they cannot claim production. */
  {
    category: { pt: "Em projetos pessoais", en: "In personal projects" },
    items: [
      "Claude API",
      "LangChain",
      { pt: "RAG com pgvector", en: "RAG over pgvector" },
      "MCP",
    ],
  },
];
