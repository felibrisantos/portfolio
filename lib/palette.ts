/**
 * The brand palette as plain values.
 *
 * `app/globals.css` is the source of truth for anything the browser paints:
 * its `@theme` block generates the utilities the components use. The Open
 * Graph card cannot read it — it is rasterised on the server by satori, which
 * sees neither Tailwind nor custom properties — so it needs the same colours
 * as literals. Keep the two in step; there is no third place.
 */
export const PALETTE = {
  background: "#f8fafc",
  surface: "#ffffff",
  dot: "#cbd5e1",
  ink: "#0d0f14",
  onSurfaceMuted: "#475569",
  primary: "#0038FF",
} as const;
