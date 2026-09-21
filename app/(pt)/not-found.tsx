import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";

/* Server shell, so the 404 carries its own title instead of inheriting the
   layout's, which would announce a missing page as the portfolio home.
   `robots` is not redundant with the noindex the framework already emits:
   the layout sets index: true and that is what would be inherited. */
export const metadata: Metadata = {
  title: "404 — Felipe Brigagão",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView lang="pt" />;
}
