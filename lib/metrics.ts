/**
 * Counts every number inside `value` up from zero, keeping whatever sits
 * between them. Works for "0,82-0,96", "5 de 8" and "3.8-9.2%" alike, and
 * keeps the decimal separator the string arrived with.
 *
 * Pure and outside the component on purpose: it is the one function here
 * where a subtle bug would quietly misreport a published research number.
 */
export function scaleNumbers(value: string, progress: number): string {
  return value.replace(/\d+(?:[.,]\d+)?/g, (raw) => {
    const separator = raw.includes(",") ? "," : ".";
    const decimals = raw.includes(separator) ? raw.split(separator)[1].length : 0;
    const scaled = parseFloat(raw.replace(",", ".")) * progress;
    return scaled.toFixed(decimals).replace(".", separator);
  });
}
