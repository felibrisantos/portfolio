"use client";

import { domAnimation, LazyMotion } from "framer-motion";

/**
 * Loads only the motion features this site uses, once, for the whole document.
 *
 * Every animated element is an `m.*` component, which renders without the
 * full `motion.*` feature set. `strict` turns any remaining `motion.*` into a
 * render error instead of a silent gap in the bundle, so a stray import shows
 * up in development rather than shipping. `domAnimation` covers what the site
 * does: variants, `whileInView`, hover, tap and focus. Drag and layout
 * animations are not used anywhere, so they are not loaded.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
