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
    "Desenvolvedor fullstack na Abdou, em Jacareí. Sistemas em produção para Heineken, Ambev e FEMSA. Artigo indexado sobre redes neurais aplicadas a índices econômicos brasileiros.",
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
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Felipe Brigagão",
  url: "https://brigagao.dev",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-grid-pattern font-body text-[#0f172a] antialiased selection:bg-[#0038FF] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
      </body>
    </html>
  );
}
