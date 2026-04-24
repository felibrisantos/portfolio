import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
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
    <html lang="pt-BR" className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
