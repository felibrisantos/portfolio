import { describe, expect, it } from "vitest";
import { COPY, PROJECTS, STACK } from "@/lib/content";

/**
 * Parity between the two languages is a real invariant of this site, and
 * until now nothing but discipline held it. It matters more once the two
 * languages are two routes: a missing English string stops being an oddity
 * someone finds after clicking a toggle and becomes a hole in the page the
 * primary reader sees first.
 */

const isElement = (v: unknown) =>
  typeof v === "object" && v !== null && "$$typeof" in (v as object);

/** Every object whose keys are exactly `pt` and `en`, wherever it is nested. */
function collectPairs(node: unknown, path: string, found: [string, unknown][] = []) {
  if (Array.isArray(node)) {
    node.forEach((child, i) => collectPairs(child, `${path}[${i}]`, found));
    return found;
  }
  if (typeof node !== "object" || node === null || isElement(node)) return found;

  const keys = Object.keys(node).sort();
  if (keys.length === 2 && keys[0] === "en" && keys[1] === "pt") {
    found.push([path, node]);
    return found;
  }
  for (const [key, child] of Object.entries(node)) {
    collectPairs(child, path ? `${path}.${key}` : key, found);
  }
  return found;
}

/** Key-by-key walk of the two COPY trees, reporting every divergence at once. */
function compare(pt: unknown, en: unknown, path: string, gaps: string[]) {
  if (isElement(pt) || isElement(en)) {
    if (!isElement(pt)) gaps.push(`${path}: missing in pt`);
    if (!isElement(en)) gaps.push(`${path}: missing in en`);
    return;
  }
  if (typeof pt === "string" || typeof en === "string") {
    if (typeof pt !== "string" || pt.trim() === "") gaps.push(`${path}: empty or missing in pt`);
    if (typeof en !== "string" || en.trim() === "") gaps.push(`${path}: empty or missing in en`);
    return;
  }
  if (Array.isArray(pt) || Array.isArray(en)) {
    if (!Array.isArray(pt) || !Array.isArray(en)) return gaps.push(`${path}: shape differs`);
    if (pt.length !== en.length) {
      return gaps.push(`${path}: ${pt.length} entries in pt, ${en.length} in en`);
    }
    pt.forEach((item, i) => compare(item, en[i], `${path}[${i}]`, gaps));
    return;
  }
  if (typeof pt === "object" && pt !== null && typeof en === "object" && en !== null) {
    const ptKeys = Object.keys(pt).sort();
    const enKeys = Object.keys(en).sort();
    for (const key of ptKeys) if (!enKeys.includes(key)) gaps.push(`${path}.${key}: missing in en`);
    for (const key of enKeys) if (!ptKeys.includes(key)) gaps.push(`${path}.${key}: missing in pt`);
    for (const key of ptKeys.filter((k) => enKeys.includes(k))) {
      compare((pt as never)[key], (en as never)[key], path ? `${path}.${key}` : key, gaps);
    }
    return;
  }
  gaps.push(`${path}: shape differs`);
}

describe("content model parity", () => {
  it("has the same copy, key for key, in both languages", () => {
    const gaps: string[] = [];
    compare(COPY.pt, COPY.en, "COPY", gaps);
    expect(gaps).toEqual([]);
    /* Same guard: the walk has to have actually reached the leaves. */
    expect(Object.keys(COPY.pt).length).toBeGreaterThan(15);
  });

  it("translates every project field into both languages", () => {
    const gaps: string[] = [];
    const pairs = collectPairs(PROJECTS, "PROJECTS");
    /* A parity test that finds nothing passes for the wrong reason. */
    expect(pairs.length).toBeGreaterThanOrEqual(PROJECTS.length * 6);
    for (const [path, pair] of pairs) {
      const { pt, en } = pair as { pt: unknown; en: unknown };
      if (typeof pt !== "string" || pt.trim() === "") gaps.push(`${path}: empty in pt`);
      if (typeof en !== "string" || en.trim() === "") gaps.push(`${path}: empty in en`);
    }
    expect(gaps).toEqual([]);
  });

  it("translates every stack entry that is a pair into both languages", () => {
    const gaps: string[] = [];
    const pairs = collectPairs(STACK, "STACK");
    expect(pairs.length).toBeGreaterThanOrEqual(STACK.length);
    for (const [path, pair] of pairs) {
      const { pt, en } = pair as { pt: unknown; en: unknown };
      if (typeof pt !== "string" || pt.trim() === "") gaps.push(`${path}: empty in pt`);
      if (typeof en !== "string" || en.trim() === "") gaps.push(`${path}: empty in en`);
    }
    expect(gaps).toEqual([]);
  });

  it("fails, naming the key, when a string is added to one language only", () => {
    const gaps: string[] = [];
    compare({ a: "há", nested: { b: "" } }, { a: "has", nested: { b: "present" } }, "COPY", gaps);
    expect(gaps).toEqual(["COPY.nested.b: empty or missing in pt"]);
  });

  it("fails when a key exists in one language only", () => {
    const gaps: string[] = [];
    compare({ a: "há", extra: "só pt" }, { a: "has" }, "COPY", gaps);
    expect(gaps).toEqual(["COPY.extra: missing in en"]);
  });
});
