/**
 * The debug menu's framejs export.
 *
 * Two things are worth pinning down, and neither is "it made a request".
 *
 * The first is that it stays invisible. This is a developer's escape hatch that
 * uploads a page to a third-party service, and the promise made about it is that
 * an exported page never shows it - so the test that matters is the one where
 * the switch is off.
 *
 * The second is the composition. What is uploaded is the page's own script with
 * a preamble in front of it, and the preamble exists to hand that script the
 * three elements its bootstrap looks up. If either half drifts the frame opens
 * blank, which is a failure nothing else in this suite would notice.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import "../src/index.js";
import { framejsModule } from "../src/shared/framejs.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines } from "./helpers.js";

type DebugGlobal = { GUFE_VIZ_DEBUG?: unknown };

/** Long enough to pass for a bundle, and recognizable in what is uploaded. */
const FAKE_BUNDLE = `// pretend bundle\nconst marker = "gufe";\n${"// filler\n".repeat(1200)}`;

function mountNetwork(): HTMLElement {
  const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
  document.body.appendChild(node);
  node.payload = readExample("ligand_network_named.json");
  return node;
}

const hamburger = (node: HTMLElement): HTMLButtonElement =>
  node.querySelector<HTMLButtonElement>('button[aria-label="Search, filter and select ligands"]')!;

const framejsButton = (node: HTMLElement): HTMLButtonElement | undefined =>
  Array.from(node.querySelectorAll("button")).find((b) => b.textContent === "Open in framejs");

/** Put a script the size of a bundle in the page, as `to_html` does. */
function inlineBundle(): HTMLScriptElement {
  const script = document.createElement("script");
  script.type = "module";
  script.textContent = FAKE_BUNDLE;
  document.head.appendChild(script);
  return script;
}

describe("the framejs export", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    delete (globalThis as DebugGlobal).GUFE_VIZ_DEBUG;
    document.head.querySelectorAll("script[type=module]").forEach((s) => s.remove());
    document.body.replaceChildren();
    vi.restoreAllMocks();
  });

  it("is absent from an open menu when the debug switch is off", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    // The menu itself is open - this is the export, not the menu, that is gone.
    expect(node.querySelector('input[type="search"]')).toBeTruthy();
    expect(framejsButton(node)).toBeUndefined();
  });

  it("appears when the debug switch is on", async () => {
    (globalThis as DebugGlobal).GUFE_VIZ_DEBUG = true;
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    expect(framejsButton(node)).toBeTruthy();
  });

  it("falls back to the dev server when the page has no inlined bundle", async () => {
    // The vite pages import `src/**` rather than inlining anything, and they are
    // where this gets used most, so refusing there would be refusing in the one
    // place it is wanted.
    (globalThis as DebugGlobal).GUFE_VIZ_DEBUG = true;
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation((input) =>
      Promise.resolve(String(input).endsWith("/gufe-dev-bundle.js") ? new Response(FAKE_BUNDLE) : new Response(null)),
    );
    vi.spyOn(window, "open").mockReturnValue(null);

    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    framejsButton(node)!.click();
    await flush();

    expect(String(fetchSpy.mock.calls[0][0])).toBe("/gufe-dev-bundle.js");
    const posted = JSON.parse(String((fetchSpy.mock.calls[1][1] as RequestInit).body)) as { js: string };
    expect(posted.js).toContain(FAKE_BUNDLE);
    // A plain bundle ends at `export` and draws nothing on its own, so the
    // trailing line has to be what applies the payload.
    expect(posted.js).toContain("gufeView.payload = JSON.parse(gufePayload.textContent)");
    // And the frame is not passed off as showing the sources on screen.
    expect(node.textContent).toContain("pixi run build");
  });

  it("says so when neither the page nor the dev server has a bundle", async () => {
    (globalThis as DebugGlobal).GUFE_VIZ_DEBUG = true;
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response("not found", { status: 404 }));
    vi.spyOn(window, "open").mockReturnValue(null);
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    framejsButton(node)!.click();
    await flush();
    // The lookup happened; the upload did not.
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(node.textContent).toContain("No bundle to send");
  });

  it("uploads the page's own script, and opens the frame it just made", async () => {
    (globalThis as DebugGlobal).GUFE_VIZ_DEBUG = true;
    inlineBundle();
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null));
    const tab = { location: { href: "" }, close: () => {} };
    const openSpy = vi.spyOn(window, "open").mockReturnValue(tab as unknown as Window);

    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    framejsButton(node)!.click();
    await flush();

    // One call, not two: a page with its own bundle never asks the dev server.
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [url, init] = fetchSpy.mock.calls[0] as [string, RequestInit];
    const slug = url.match(/^https:\/\/framejs\.app\/j\/([0-9a-f]{32})\.json$/)?.[1];
    expect(slug).toBeTruthy();
    expect(init.method).toBe("POST");
    // `no-cors` with a plain-text body is what keeps this a CORS-simple request,
    // which is the only kind framejs.app will accept from a page: it serves no
    // preflight. Both halves matter, so both are asserted.
    expect(init.mode).toBe("no-cors");
    expect((init.headers as Record<string, string>)["Content-Type"]).toMatch(/^text\/plain/);

    const body = JSON.parse(String(init.body)) as { js: string };
    expect(body.js).toContain(FAKE_BUNDLE);
    expect(body.js.indexOf("gufe-payload")).toBeLessThan(body.js.indexOf(FAKE_BUNDLE));

    // The tab was opened blank during the click - a popup blocker judges a
    // window by the gesture that opened it - and pointed at the frame after.
    expect(openSpy).toHaveBeenCalledWith("", "_blank");
    expect(tab.location.href).toBe(`https://framejs.app/j/${slug}`);
  });

  it("hands the bootstrap a payload it can parse back", () => {
    // The payload is embedded as the text of a `<script type="application/json">`,
    // which is what the page's bootstrap reads and `JSON.parse`s. A name holding
    // a quote or a backslash is the case that breaks a naive embedding.
    const payload = { type: "SolventComponentViz", name: 'a "solvent" \\ named oddly' };
    const js = framejsModule(FAKE_BUNDLE, payload);
    const text = js.match(/gufePayload\.textContent = (".*");/)![1];
    expect(JSON.parse(JSON.parse(text) as string)).toEqual(payload);
  });
});
