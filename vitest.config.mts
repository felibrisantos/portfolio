import { defineConfig } from "vitest/config";

/* No DOM implementation and no component testing library on purpose. Both test
   seams in this repo assert over plain values and over the markup the build
   emits, so a browser environment would be weight with nothing to weigh. */
export default defineConfig({
  resolve: {
    alias: { "@": import.meta.dirname },
  },
  test: {
    environment: "node",
    include: ["**/*.test.ts", "**/*.test.tsx"],
    exclude: ["node_modules/**", ".next/**"],
  },
});
