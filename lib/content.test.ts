import { describe, expect, it } from "vitest";
import { hrefLabel, STACK, stackLabel } from "@/lib/content";

/* The label a project card shows in place of a raw URL: a reader recognises a
   bare domain, and it needs no translation. */
describe("hrefLabel", () => {
  it("drops the scheme", () => {
    expect(hrefLabel("https://cymadisplay.com")).toBe("cymadisplay.com");
    expect(hrefLabel("http://cymadisplay.com")).toBe("cymadisplay.com");
  });

  it("drops a www prefix", () => {
    expect(hrefLabel("https://www.cymadisplay.com")).toBe("cymadisplay.com");
  });

  it("drops a trailing slash", () => {
    expect(hrefLabel("https://www.cymadisplay.com/")).toBe("cymadisplay.com");
  });

  it("keeps a path, because the path is part of what the reader recognises", () => {
    expect(hrefLabel("https://doi.org/10.54033/icmrv5n3-043")).toBe(
      "doi.org/10.54033/icmrv5n3-043",
    );
  });

  it("leaves a bare domain alone", () => {
    expect(hrefLabel("cymadisplay.com")).toBe("cymadisplay.com");
  });
});

/* A stack item is a plain string when it is a product name, and a per-language
   pair when it reads differently in each language. */
describe("stackLabel", () => {
  it("returns a product name unchanged in either language", () => {
    expect(stackLabel("React / Next.js", "pt")).toBe("React / Next.js");
    expect(stackLabel("React / Next.js", "en")).toBe("React / Next.js");
  });

  it("resolves a per-language pair to the language asked for", () => {
    const pair = { pt: "Prompts versionados", en: "Versioned prompts" };
    expect(stackLabel(pair, "pt")).toBe("Prompts versionados");
    expect(stackLabel(pair, "en")).toBe("Versioned prompts");
  });

  it("resolves every published stack item in both languages", () => {
    for (const group of STACK) {
      for (const item of group.items) {
        expect(stackLabel(item, "pt")).toBeTruthy();
        expect(stackLabel(item, "en")).toBeTruthy();
      }
    }
  });
});
