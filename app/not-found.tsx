import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";

/* Server shell, so the 404 carries its own title instead of inheriting the
   layout's, which would announce a missing page as the portfolio home.
   `robots` is not redundant with the noindex Next already emits here: the root
   layout sets index: true, and that is what gets inherited, so without this
   override the page ships a second, contradictory `index, follow` tag.
   The view is a client component, because the copy is bilingual and the choice
   lives in localStorage. */
export const metadata: Metadata = {
  title: "404 — Felipe Brigagão",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView />;
}
