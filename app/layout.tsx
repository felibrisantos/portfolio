import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brigagao.dev"),
  title: "Felipe Brigagão — Desenvolvedor fullstack",
  description:
    "Desenvolvedor fullstack na Abdou, em Jacareí. Sistemas em produção para Heineken e FEMSA. Artigo indexado sobre redes neurais aplicadas a índices econômicos brasileiros.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Felipe Brigagão — Desenvolvedor fullstack",
    description:
      "Sistemas em produção para marcas de CPG. Artigo indexado sobre redes neurais aplicadas a índices econômicos brasileiros.",
    url: "https://brigagao.dev",
    siteName: "Felipe Brigagão",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

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
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, articleSchema],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-grid-pattern font-body text-on-surface antialiased selection:bg-primary selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.035] mix-blend-difference">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        {children}
        {/* Page views per route. Once the two languages are two routes, the
           route split is the language split, which is the one question this
           is here to answer. No cookie, no consent banner, ~1KB. */}
        <Analytics />
      </body>
    </html>
  );
}
