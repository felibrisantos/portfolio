import { existsSync, readFileSync } from "node:fs";
import { beforeAll, describe, expect, it } from "vitest";
import { CONTENT_UPDATED, COPY, RESUME } from "@/lib/content";
import { langUrl } from "@/lib/lang";

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
const ROUTES = [
  { lang: "en" as const, path: "/", file: ".next/server/app/index.html", htmlLang: "en" },
  { lang: "pt" as const, path: "/pt", file: ".next/server/app/pt.html", htmlLang: "pt-BR" },
];

const pages = new Map<string, string>();

beforeAll(() => {
  for (const route of ROUTES) {
    if (!existsSync(route.file)) {
      throw new Error(`${route.file} not found. Run \`npm run build\` before \`npm test\`.`);
    }
    pages.set(route.path, readFileSync(route.file, "utf8"));
  }
});

describe.each(ROUTES)("the page served at $path", ({ lang, path, htmlLang }) => {
  let html = "";
  beforeAll(() => {
    html = pages.get(path)!;
  });

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

  it("offers a CV that is actually served", () => {
    /* The two files sat at the repo root, where the framework does not serve
       them: as far as a browser was concerned they did not exist. */
    for (const href of Object.values(RESUME)) {
      expect(existsSync(`public${href}`)).toBe(true);
    }
    expect(html).toContain(RESUME[lang]);
  });

  it("declares its own language in the markup, before any script runs", () => {
    /* The language used to live in browser storage, so the server rendered
       Portuguese for everyone and a shared link arrived in the wrong one. */
    expect(html).toMatch(new RegExp(`<html[^>]+lang="${htmlLang}"`, "i"));
  });

  it("points a canonical at itself", () => {
    expect(html).toContain(`<link rel="canonical" href="${langUrl(lang)}"/>`);
  });

  it("declares both languages as alternates, and a default", () => {
    /* Reciprocal by construction: both routes emit the same map, so the two
       cannot drift apart into each claiming to be the only version. */
    expect(html).toMatch(new RegExp(`hreflang="en" href="${langUrl("en")}"`, "i"));
    expect(html).toMatch(new RegExp(`hreflang="pt-BR" href="${langUrl("pt")}"`, "i"));
    expect(html).toMatch(new RegExp(`hreflang="x-default" href="${langUrl("en")}"`, "i"));
  });

  it("carries three checkable facts on the first screen", () => {
    /* A reader who leaves after the hero used to leave with positioning
       prose and nothing to check it against. Each fact is stated again, in
       full, further down the page. */
    for (const fact of COPY[lang].evidence) {
      expect(html).toContain(fact.value);
      expect(html).toContain(fact.label);
    }
    expect(COPY[lang].evidence).toHaveLength(3);
  });

  it("emits an Apple touch icon", () => {
    /* `apple-icon.svg` produced no route at all: the framework only accepts
       png/jpg, or a generator, under that name. */
    expect(html).toMatch(/<link rel="apple-touch-icon"[^>]*type="image\/png"/);
  });

  it("points at its own preview card, in its own language", () => {
    const image = html.match(/<meta property="og:image" content="([^"]*)"/)?.[1] ?? "";
    expect(image).toContain("opengraph-image");
    if (lang === "pt") expect(image).toContain("/pt/");
    else expect(image).not.toContain("/pt/");
    const alt = html.match(/<meta property="og:image:alt" content="([^"]*)"/)?.[1] ?? "";
    expect(alt).toContain(COPY[lang].role);
  });

  it("offers the language control as a link to the other route", () => {
    const other = lang === "en" ? "/pt" : "/";
    expect(html).toMatch(new RegExp(`href="${other === "/" ? "/" : other}"[^>]*hreflang=`, "i"));
  });
});

describe("the sitemap", () => {
  const FILE = ".next/server/app/sitemap.xml.body";
  let xml = "";

  beforeAll(() => {
    if (!existsSync(FILE)) throw new Error(`${FILE} not found. Build before testing.`);
    xml = readFileSync(FILE, "utf8");
  });

  it("lists both languages", () => {
    expect(xml).toContain(`<loc>${langUrl("en")}</loc>`);
    expect(xml).toContain(`<loc>${langUrl("pt")}</loc>`);
  });

  it("gives every entry the same reciprocal alternates", () => {
    expect(xml.match(/hreflang="en"/g) ?? []).toHaveLength(2);
    expect(xml.match(/hreflang="pt-BR"/g) ?? []).toHaveLength(2);
  });

  it("dates entries by the content, not by the build", () => {
    /* `new Date()` here told crawlers every page changed on every deploy.
       Asserted as an exact equality on every entry rather than as "not
       today", which would be a test that only fails on some days. */
    const stamps = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
    expect(stamps).toHaveLength(2);
    for (const stamp of stamps) {
      expect(stamp).toBe(new Date(CONTENT_UPDATED).toISOString());
    }
  });
});
