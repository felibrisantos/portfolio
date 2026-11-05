import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { PALETTE } from "@/lib/palette";

/* PALETTE is a second copy of the colours the page paints, because the OG card
   is rasterised without Tailwind. Nothing else stops the two copies drifting,
   so this reads the `@theme` block itself and fails when they disagree. */
const css = readFileSync(join(import.meta.dirname, "..", "app", "globals.css"), "utf8");

function themeColour(token: string): string {
  const match = css.match(new RegExp(`--color-${token}:\\s*(#[0-9a-fA-F]{6})\\s*;`));
  if (!match) throw new Error(`--color-${token} is not declared in app/globals.css`);
  return match[1].toLowerCase();
}

const MAPPING: Record<Exclude<keyof typeof PALETTE, "surface">, string> = {
  background: "background",
  dot: "dot",
  ink: "ink",
  onSurfaceMuted: "on-surface-muted",
  primary: "primary",
};

describe("PALETTE agrees with the page's own theme", () => {
  for (const [key, token] of Object.entries(MAPPING)) {
    it(`${key} matches --color-${token}`, () => {
      expect(PALETTE[key as keyof typeof MAPPING].toLowerCase()).toBe(themeColour(token));
    });
  }
});
