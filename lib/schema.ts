/* One graph, not two script tags. Language-independent: it describes the
   person and the paper, neither of which changes with the route. */
const personSchema = {
  "@type": "Person",
  "@id": "https://brigagao.dev/#felipe",
  name: "Felipe Brigagão",
  url: "https://brigagao.dev",
  image: "https://brigagao.dev/foto-felipe.jpg",
  jobTitle: "Desenvolvedor fullstack",
  email: "mailto:felibrisantos@gmail.com",
  worksFor: { "@type": "Organization", name: "Abdou" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jacareí",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "IFSP Jacareí" },
  knowsAbout: ["React", "Next.js", "Django", "PostgreSQL", "Redes neurais", "RAG"],
  sameAs: [
    "https://github.com/felibrisantos",
    "https://linkedin.com/in/felibrisantos",
    "https://doi.org/10.54033/icmrv5n3-043",
  ],
};

/* The paper is the one credential that lives outside this domain, so it gets a
   node of its own rather than only a `sameAs` on the person: the DOI, both
   authors and the issue are facts a crawler can reconcile against the
   publisher's own record. The journal is named by the acronym the page itself
   shows, since that is what is verifiable from here. */
const articleSchema = {
  "@type": "ScholarlyArticle",
  "@id": "https://doi.org/10.54033/icmrv5n3-043",
  headline:
    "O impacto dos indicadores econômicos no consumo: uma abordagem com redes neurais",
  url: "https://doi.org/10.54033/icmrv5n3-043",
  inLanguage: "pt-BR",
  datePublished: "2024-12",
  author: [
    { "@id": "https://brigagao.dev/#felipe" },
    { "@type": "Person", name: "Tardelli Ronan Coelho Stekel" },
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "DOI",
    value: "10.54033/icmrv5n3-043",
  },
  isPartOf: {
    "@type": "PublicationIssue",
    issueNumber: "3",
    isPartOf: {
      "@type": "PublicationVolume",
      volumeNumber: "5",
      isPartOf: { "@type": "Periodical", name: "ICMR" },
    },
  },
  funder: { "@type": "Organization", name: "FAPESP", identifier: "2023/14073-1" },
  about: ["Redes neurais", "Índices econômicos setoriais", "Consumo"],
};

/* One graph, not two script tags: the `@id` on the person is what lets the
   article name him as an author instead of minting a second, unrelated Person. */
export const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, articleSchema],
};
