/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

// biome-ignore lint/style/noDefaultExport: it's ok
export default defineConfig({
  test: {
    include: ["tests/**/*.spec.ts"],
    benchmark: {
      include: ["benches/**/*.bench.ts"],
      outputJson: ".vitest-reports/bench.json",
    },
    watch: false,
  },
  resolve: {
    alias: {
      sse: "/src",
    },
  },
});
