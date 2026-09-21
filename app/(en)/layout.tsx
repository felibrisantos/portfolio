import type { Metadata } from "next";
import { DocumentShell } from "@/components/document-shell";
import { COPY, SITE } from "@/lib/content";
import { alternatesFor, langUrl, SITE_URL } from "@/lib/lang";
import "../globals.css";

/* English is the root: the primary reader is hiring for a remote role from
   outside Brazil, and a link shared with them has to open in a language they
   read. See docs/adr/0001-english-at-the-root.md. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: alternatesFor("en"),
  title: COPY.en.meta.title,
  description: COPY.en.meta.description,
  openGraph: {
    title: COPY.en.meta.title,
    description: COPY.en.meta.description,
    url: langUrl("en"),
    siteName: SITE.name,
    locale: "en",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <DocumentShell lang="en">{children}</DocumentShell>;
}
