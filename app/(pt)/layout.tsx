import type { Metadata } from "next";
import { DocumentShell } from "@/components/document-shell";
import { COPY, SITE } from "@/lib/content";
import "../globals.css";

/* The Portuguese route. English is the root; see docs/adr/0001. */
export const metadata: Metadata = {
  metadataBase: new URL("https://brigagao.dev"),
  title: COPY.pt.meta.title,
  description: COPY.pt.meta.description,
  openGraph: {
    title: COPY.pt.meta.title,
    description: COPY.pt.meta.description,
    url: "https://brigagao.dev/pt",
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <DocumentShell lang="pt">{children}</DocumentShell>;
}
