import { SITE } from "./content";
import { PAPER } from "./paper";
import { SITE_URL } from "./lang";

/* One graph, not two script tags. Language-independent: it describes the
   person and the paper, neither of which changes with the route. Every
   address and identifier comes from the modules that own it, so a change
   there reaches the structured data too. */
const personId = `${SITE_URL}/#felipe`;

const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: SITE.name,
  url: SITE_URL,
  image: `${SITE_URL}/foto-felipe.jpg`,
  jobTitle: "Desenvolvedor fullstack",
  /* schema.org's `email` is the bare address, not a mailto: URL. */
  email: SITE.email,
  worksFor: { "@type": "Organization", name: "Abdou" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jacareí",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "IFSP Jacareí" },
  knowsAbout: ["React", "Next.js", "Django", "PostgreSQL", "Redes neurais", "RAG"],
  sameAs: [SITE.social.github, SITE.social.linkedin, PAPER.doiUrl],
};

/* The paper is the one credential that lives outside this domain, so it gets a
   node of its own rather than only a `sameAs` on the person: the DOI, both
   authors and the issue are facts a crawler can reconcile against the
   publisher's own record. The journal is named by the acronym the page itself
   shows, since that is what is verifiable from here. */
const articleSchema = {
  "@type": "ScholarlyArticle",
  "@id": PAPER.doiUrl,
  headline:
    "O impacto dos indicadores econômicos no consumo: uma abordagem com redes neurais",
  url: PAPER.doiUrl,
  inLanguage: "pt-BR",
  datePublished: PAPER.datePublished,
  author: [
    { "@id": personId },
    { "@type": "Person", name: "Tardelli Ronan Coelho Stekel" },
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "DOI",
    value: PAPER.doi,
  },
  isPartOf: {
    "@type": "PublicationIssue",
    issueNumber: String(PAPER.issue),
    isPartOf: {
      "@type": "PublicationVolume",
      volumeNumber: String(PAPER.volume),
      isPartOf: { "@type": "Periodical", name: PAPER.journal },
    },
  },
  funder: { "@type": "Organization", name: PAPER.funderName, identifier: PAPER.grant },
  about: ["Redes neurais", "Índices econômicos setoriais", "Consumo"],
};

/* One graph, not two script tags: the `@id` on the person is what lets the
   article name him as an author instead of minting a second, unrelated Person. */
export const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, articleSchema],
};
