/**
 * The published paper, once. The research block and the JSON-LD graph both
 * describe it, and they used to repeat the DOI and the issue by hand: a
 * correction to either would have left the other one wrong.
 *
 * Language-independent on purpose. The date's words are per language and live
 * in COPY; only the facts that do not translate are here.
 */
export const PAPER = {
  doi: "10.54033/icmrv5n3-043",
  get doiUrl() {
    return `https://doi.org/${this.doi}`;
  },
  journal: "ICMR",
  /* Numbers, as schema.org wants them. The page pads them to two digits. */
  volume: 5,
  issue: 3,
  /** ISO year-month, as schema.org expects for a publication date. */
  datePublished: "2024-12",
  funderName: "FAPESP",
  grant: "2023/14073-1",
} as const;
