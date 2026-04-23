import type { Metadata } from "next";
import { Bodoni_Moda, Sora, Syne, Fira_Code } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
  description: `Portfólio de ${SITE_CONFIG.fullName}, ${SITE_CONFIG.role}. Sinergia Web & IA.`,
  openGraph: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
    description: `Portfólio de ${SITE_CONFIG.fullName}, ${SITE_CONFIG.role}.`,
    url: "https://brigagao.dev",
    siteName: `${SITE_CONFIG.name} Portfolio`,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
    description: `Portfólio de ${SITE_CONFIG.fullName}, ${SITE_CONFIG.role}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${sora.variable} ${syne.variable} ${firaCode.variable} antialiased`}
    >
      <body className="bg-paper text-ink selection:bg-accent selection:text-paper min-h-screen">
        {children}
      </body>
    </html>
  );
}
