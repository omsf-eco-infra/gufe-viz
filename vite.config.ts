import { resolve } from "node:path";
// vitest's re-export of Vite's defineConfig, so the `test` block below is typed.
import { defineConfig } from "vitest/config";

/**
 * The dev app. Two pages, both served from `ts/`:
 *
 *   index.html    drop a payload JSON anywhere on the page and it renders
 *   gallery.html  every component, every example payload, one scrolling page
 *
 * `examples/` is exposed as an extra fs root so the gallery can fetch the same
 * fixture files pytest and vitest use.
 */
export default defineConfig({
  root: resolve(import.meta.dirname, "ts"),
  publicDir: false,
  server: {
    fs: { allow: [resolve(import.meta.dirname)] },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, "ts/index.html"),
        gallery: resolve(import.meta.dirname, "ts/gallery.html"),
      },
    },
  },
  test: {
    root: resolve(import.meta.dirname),
    environment: "jsdom",
    include: ["ts/tests/**/*.test.ts"],
    globals: true,
  },
});
