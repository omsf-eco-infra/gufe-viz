import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
// vitest's re-export of Vite's defineConfig, so the `test` block below is typed.
// `Plugin` comes from the same place on purpose: vitest carries its own copy of
// Vite, and a `Plugin` imported straight from `vite` is a different type to the
// one this config's `plugins` field expects.
import { defineConfig, type Plugin } from "vitest/config";

/**
 * Hand the debug menu's framejs export a single-file bundle.
 *
 * The pages below carry a two-line module that imports `src/**`, so there is no
 * inlined bundle for that export to lift the way a `to_html` page has one. This
 * serves the last `pixi run build` output instead, which is the only single-file
 * form of this project that exists while developing. Stale until rebuilt, which
 * the button says.
 *
 * Dev server only, and paired with `DEV_BUNDLE_URL` in `ts/src/shared/framejs.ts`.
 * Both go together when that export does.
 */
function devBundle(): Plugin {
  const bundle = resolve(import.meta.dirname, "python/gufe_viz/_assets/gufe-viz.js");
  return {
    name: "gufe-dev-bundle",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/gufe-dev-bundle.js", (_req, res) => {
        if (!existsSync(bundle)) {
          res.statusCode = 404;
          res.end("no bundle built yet - run `pixi run build`");
          return;
        }
        res.setHeader("Content-Type", "text/javascript");
        res.end(readFileSync(bundle));
      });
    },
  };
}

/**
 * The dev app. Two pages, both served from `ts/`:
 *
 *   index.html    drop a payload JSON anywhere on the page and it renders
 *   gallery.html  every component, every example payload, one scrolling page
 *   parity.html   our atom mapping beside gufe's own drawing of the same one
 *
 * `examples/` is exposed as an extra fs root so the gallery can fetch the same
 * fixture files pytest and vitest use.
 */
export default defineConfig({
  root: resolve(import.meta.dirname, "ts"),
  publicDir: false,
  plugins: [devBundle()],
  server: {
    fs: { allow: [resolve(import.meta.dirname)] },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, "ts/index.html"),
        gallery: resolve(import.meta.dirname, "ts/gallery.html"),
        parity: resolve(import.meta.dirname, "ts/parity.html"),
      },
    },
  },
  test: {
    root: resolve(import.meta.dirname),
    environment: "jsdom",
    include: ["ts/tests/**/*.test.ts"],
    // Views persist their settings, so each test starts from a clean store.
    setupFiles: [resolve(import.meta.dirname, "ts/tests/setup.ts")],
    globals: true,
  },
});
