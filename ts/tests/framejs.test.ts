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
import { framejsModule, type UiState } from "../src/shared/framejs.js";
import { settings } from "../src/shared/settings.js";
import type { NetworkViewState } from "../src/views/ligand-network.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines } from "./helpers.js";

type DebugGlobal = { GUFE_VIZ_DEBUG?: unknown };

/** A frame carrying no state: the view opens as a new reader would find it. */
const EMPTY_STATE: UiState = { settings: {}, views: {} };

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

/**
 * A `localStorage` the generated code can be run against.
 *
 * Keys are own enumerable properties, because the generated loop reaches for
 * them with `Object.keys` the way it would in a browser; the methods are not, so
 * they are not mistaken for stored values.
 */
function fakeStorage(initial: Record<string, string>): Storage {
  const store: Record<string, unknown> = {};
  const put = (key: string, value: string) =>
    Object.defineProperty(store, key, { value, enumerable: true, configurable: true, writable: true });
  const method = (name: string, fn: unknown) => Object.defineProperty(store, name, { value: fn, enumerable: false });

  for (const [key, value] of Object.entries(initial)) put(key, value);
  method("getItem", (key: string) => (typeof store[key] === "string" ? store[key] : null));
  method("setItem", (key: string, value: string) => put(key, String(value)));
  method("removeItem", (key: string) => {
    delete store[key];
  });
  return store as unknown as Storage;
}

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
    const js = framejsModule(FAKE_BUNDLE, payload, EMPTY_STATE);
    const text = js.match(/gufePayload\.textContent = (".*");/)![1];
    expect(JSON.parse(JSON.parse(text) as string)).toEqual(payload);
  });

  it("puts the page's settings and view state back before the bundle runs", () => {
    // Order is the whole point: a view reads both while it is building itself,
    // and the bundle draws as soon as it has a payload. Restoring afterwards
    // would restore nothing.
    const js = framejsModule(FAKE_BUNDLE, { type: "LigandNetworkViz" }, {
      settings: { "gufe-viz:ligand-network.layout": '"Circular"' },
      views: { "ligand-network": { scale: 0.5, tx: 10, ty: 20, selected: 3, nodes: [] } },
    });
    expect(js.indexOf("localStorage.setItem")).toBeLessThan(js.indexOf(FAKE_BUNDLE));
    expect(js.indexOf("GUFE_VIZ_VIEW_STATE")).toBeLessThan(js.indexOf(FAKE_BUNDLE));
    expect(js).toContain('"gufe-viz:ligand-network.layout"');
    expect(js).toContain('"selected":3');
  });

  it("carries the network's camera, layout and selection off the live view", async () => {
    (globalThis as DebugGlobal).GUFE_VIZ_DEBUG = true;
    inlineBundle();
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null));
    vi.spyOn(window, "open").mockReturnValue(null);

    const node = mountNetwork();
    await flush();
    // Move the camera and open a different edge, so what is asserted below is
    // this view's state rather than any view's opening state.
    const network = node as HTMLElement & { viewState(): NetworkViewState };
    const before = network.viewState();
    node.querySelectorAll<SVGLineElement>("line[stroke=transparent]")[1]?.dispatchEvent(
      new MouseEvent("click", { bubbles: true }),
    );
    await flush();

    hamburger(node).click();
    await flush();
    framejsButton(node)!.click();
    await flush();

    const posted = JSON.parse(String((fetchSpy.mock.calls[0][1] as RequestInit).body)) as { js: string };
    const seeded = JSON.parse(
      posted.js.match(/globalThis\["GUFE_VIZ_VIEW_STATE"\] = (\{.*?\});/)![1],
    ) as Record<string, NetworkViewState>;

    const state = seeded["ligand-network"];
    expect(state.nodes).toHaveLength(before.nodes.length);
    expect(state.scale).toBe(before.scale);
    expect(state.selected).toBe(1);
  });

  it("leaves the menu behind, and closes one an earlier frame left open", async () => {
    // Opening the menu is what writes `menuOpen`, and opening it is also the
    // only way to reach this button - so without this the export could only ever
    // produce a frame with its menu open.
    (globalThis as DebugGlobal).GUFE_VIZ_DEBUG = true;
    inlineBundle();
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null));
    vi.spyOn(window, "open").mockReturnValue(null);

    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    // The menu is open, and the store now says so.
    expect(settings()["ligand-network.menuOpen"]).toBe(true);

    framejsButton(node)!.click();
    await flush();

    const posted = JSON.parse(String((fetchSpy.mock.calls[0][1] as RequestInit).body)) as { js: string };
    const written = posted.js.match(/const stored = (\{.*?\});/)?.[1] ?? "{}";
    expect(written).not.toContain("menuOpen");
  });

  it("closes a menu an earlier frame left open on the same origin", () => {
    // Every frame is served from framejs.app, so one browser's storage there is
    // shared by every frame ever exported into it. Omitting the key is therefore
    // not enough on its own: a `true` written by a previous frame would still be
    // sitting there. So run the generated lines and look at what they did.
    //
    // Against a storage passed in rather than the environment's own, which in
    // this one is an object with no methods on it - the case `settings.ts` falls
    // back to memory for. The generated code reads `localStorage` as a free
    // name, so a parameter of that name is what it sees.
    const store = fakeStorage({
      "gufe-viz:ligand-network.menuOpen": "true",
      "gufe-viz:some-later-view.menuOpen": "true",
      "gufe-viz:atom-mapping.mode": '"3d"',
      "unrelated:menuOpen": "true",
    });

    const js = framejsModule(FAKE_BUNDLE, { type: "LigandNetworkViz" }, {
      settings: { "gufe-viz:atom-mapping.mode": '"2d"' },
      views: {},
    });
    // Everything the frame runs before it builds any DOM.
    new Function("localStorage", js.slice(0, js.indexOf('root.innerHTML = "";')))(store);

    expect(store.getItem("gufe-viz:ligand-network.menuOpen")).toBeNull();
    expect(store.getItem("gufe-viz:some-later-view.menuOpen")).toBeNull();
    // A real preference is restored, not cleared, and a key that is not ours is
    // not ours to remove.
    expect(store.getItem("gufe-viz:atom-mapping.mode")).toBe('"2d"');
    expect(store.getItem("unrelated:menuOpen")).toBe("true");
  });
});
