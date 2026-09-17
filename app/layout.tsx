import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/cursor";

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
  title: "Felipe Brigagão — Fullstack & AI Engineer",
  description:
    "Felipe Brigagão — fullstack & AI engineer. São Paulo. Work for Heineken, FEMSA and others through Abdou.",
  openGraph: {
    title: "Felipe Brigagão — Fullstack & AI Engineer",
    description:
      "Fullstack & AI engineer. São Paulo. Work for Heineken, FEMSA and others through Abdou.",
    url: "https://brigagao.dev",
    siteName: "Felipe Brigagão",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="bg-grid-pattern font-body text-[#0f172a] antialiased selection:bg-[#0038FF] selection:text-white">
        <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.035] mix-blend-difference">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        {children}
        <Cursor />
      </body>
    </html>
  );
}
