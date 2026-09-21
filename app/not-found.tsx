import type { Metadata } from "next";
import { DocumentShell } from "@/components/document-shell";
import { NotFoundView } from "@/components/not-found-view";
import "./globals.css";

/**
 * The global 404, for any address that matches neither language root.
 *
 * It renders its own document rather than inheriting one: with a root layout
 * per language there is no shared layout above this, and without this file
 * the framework serves an unstyled fallback with no `lang` at all. It answers
 * in English because English is the root; `/pt` has its own.
 *
 * `robots` is not redundant with the noindex already emitted here — the
 * layouts set index: true, and that is what would otherwise be inherited.
 */
export const metadata: Metadata = {
  title: "404 — Felipe Brigagão",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <DocumentShell lang="en">
      <NotFoundView lang="en" />
    </DocumentShell>
  );
}
