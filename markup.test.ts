import { existsSync, readFileSync } from "node:fs";
import { beforeAll, describe, expect, it } from "vitest";

/**
 * Seam 1: what the build actually emits.
 *
 * These assertions cannot be made in a browser after hydration, because by
 * then the very thing being guarded has already been fixed up by the script
 * that may never have arrived. Reading the prerendered file is the only way
 * to see what a reader on a slow connection, or a crawler, or anyone whose
 * bundle failed, actually receives.
 *
 * Requires a build. The pipeline runs `build` before `test` for this reason.
 */
const PAGE = ".next/server/app/index.html";

let html = "";

beforeAll(() => {
  if (!existsSync(PAGE)) {
    throw new Error(`${PAGE} not found. Run \`npm run build\` before \`npm test\`.`);
  }
  html = readFileSync(PAGE, "utf8");
});

describe("the served page", () => {
  it("is not blank before the script runs", () => {
    /* The regression this exists for: every section and the main element were
       emitted at zero opacity and revealed only on hydration, so a bundle that
       was slow, blocked or broken cost the reader the entire page. */
    expect(html).not.toMatch(/opacity:\s*0[^.]/);
  });

  it("does not hide the main landmark", () => {
    const main = html.match(/<main[^>]*>/)?.[0] ?? "";
    expect(main).toBeTruthy();
    expect(main).not.toContain("opacity");
  });

  it("does not hide any section", () => {
    const sections = html.match(/<section[^>]*>/g) ?? [];
    expect(sections.length).toBeGreaterThanOrEqual(6);
    for (const section of sections) expect(section).not.toContain("opacity");
  });

  it("carries the headline in the markup, not only after hydration", () => {
    expect(html).toContain("FELIPE");
    expect(html).toContain("BRIGAGÃO");
  });

  it("names only clients that can be named", () => {
    /* The rule is in CONTEXT.md: a client can be worked for without being
       nameable. This guards the description, which is what a reader sees
       before the page opens. */
    const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
    expect(description).toBeTruthy();
    expect(description).toContain("Heineken");
    expect(description).not.toMatch(/Ambev/i);
    expect(html).not.toMatch(/Ambev/i);
  });

  it("offers a bypass before anything else focusable", () => {
    /* With two fixed headers and a bottom dock, the first tab stop without
       this was the wordmark, seven stops from a word of content. */
    const body = html.slice(html.indexOf("<body"));
    const firstAnchor = body.indexOf("<a ");
    expect(firstAnchor).toBeGreaterThan(-1);
    const skip = body.slice(firstAnchor, firstAnchor + 400);
    expect(skip).toContain('href="#top"');
    expect(skip).toContain("sr-only");
    expect(skip).toContain("focus:not-sr-only");
  });

  it("names every landmark region", () => {
    const sections = html.match(/<section[^>]*>/g) ?? [];
    for (const section of sections) {
      expect(section).toMatch(/aria-label(ledby)?="/);
    }
    for (const nav of html.match(/<nav[^>]*>/g) ?? []) {
      expect(nav).toMatch(/aria-label="/);
    }
  });

  it("declares a document language", () => {
    expect(html).toMatch(/<html[^>]+lang="[a-z-]+"/i);
  });
});
