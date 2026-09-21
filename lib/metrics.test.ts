import { describe, expect, it } from "vitest";
import { COPY } from "@/lib/content";
import { scaleNumbers } from "@/lib/metrics";

/* The three formats below are the ones actually published in the research
   block. A change here misreports a number in a paper, so the test pins the
   real strings rather than convenient ones. */
describe("scaleNumbers", () => {
  it("returns the value unchanged at full progress", () => {
    expect(scaleNumbers("0,82-0,96", 1)).toBe("0,82-0,96");
    expect(scaleNumbers("5 de 8", 1)).toBe("5 de 8");
    expect(scaleNumbers("3.8-9.2%", 1)).toBe("3.8-9.2%");
  });

  it("keeps the decimal separator the string arrived with", () => {
    expect(scaleNumbers("0,82", 0.5)).toBe("0,41");
    expect(scaleNumbers("3.8", 0.5)).toBe("1.9");
  });

  it("keeps the decimal places the string arrived with", () => {
    expect(scaleNumbers("0,82", 0)).toBe("0,00");
    expect(scaleNumbers("5 de 8", 0)).toBe("0 de 0");
  });

  it("keeps everything that is not a number", () => {
    expect(scaleNumbers("3.8-9.2%", 0)).toBe("0.0-0.0%");
    expect(scaleNumbers("5 de 8", 0.5)).toBe("3 de 4");
  });

  it("scales every published metric without losing its shape", () => {
    for (const lang of ["pt", "en"] as const) {
      for (const metric of COPY[lang].paperMetrics) {
        const halfway = scaleNumbers(metric.value, 0.5);
        expect(halfway).toHaveLength(metric.value.length);
        expect(halfway.replace(/[\d]/g, "")).toBe(metric.value.replace(/[\d]/g, ""));
      }
    }
  });
});
