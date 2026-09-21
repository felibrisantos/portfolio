import { describe, expect, it } from "vitest";
import { hrefLabel } from "@/lib/content";

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
