import { resolve } from "node:path";
import { defineConfig } from "vite";

/**
 * The library build: many TypeScript sources in, one artifact out.
 *
 * The output lands directly in `python/gufe_viz/_assets/` and is **committed**,
 * so `pip install .` and install-from-git need no Node toolchain. CI's
 * `check-generated` task rebuilds it and diffs, so the committed copy cannot go
 * stale.
 *
 * One ES-module file, no code splitting: `to_html` inlines this verbatim into a
 * single `<script type="module">`, which is only possible if it is one file.
 */
export default defineConfig({
  build: {
    outDir: resolve(import.meta.dirname, "python/gufe_viz/_assets"),
    emptyOutDir: false,
    target: "es2022",
    minify: "esbuild",
    sourcemap: false,
    lib: {
      entry: resolve(import.meta.dirname, "ts/src/index.ts"),
      formats: ["es"],
      fileName: () => "gufe-viz.js",
    },
    rollupOptions: {
      // The engine loaders `import()` absolute CDN URLs, which must survive the
      // bundle as-is rather than being resolved at build time.
      external: (id) => /^https?:\/\//.test(id),
      output: { inlineDynamicImports: true },
    },
  },
});
