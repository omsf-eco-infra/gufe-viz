/**
 * The create / update / destroy cycle.
 *
 * These are the tests that make the notebook widget possible later: if an
 * element reliably releases its viewers, observers and timers when it is
 * removed, a widget can create and drop one per cell without leaking.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { defineElement, GufeElement, type ViewHandle } from "../src/shared/element.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";

// A minimal element that records every beat of its own lifecycle.
const log: string[] = [];

class ProbeElement extends GufeElement<{ id: string }> {
  protected renderView(host: HTMLDivElement, payload: { id: string }): ViewHandle {
    log.push(`create:${payload.id}`);
    host.appendChild(document.createElement("span")).textContent = payload.id;
    return {
      onResize: () => log.push(`resize:${payload.id}`),
      cleanup: () => log.push(`destroy:${payload.id}`),
    };
  }
}
defineElement("probe-element", ProbeElement);

describe("GufeElement lifecycle", () => {
  beforeEach(() => {
    log.length = 0;
  });
  afterEach(() => document.body.replaceChildren());

  it("does not render until it is connected", () => {
    const probe = document.createElement("probe-element") as ProbeElement;
    probe.payload = { id: "a" };
    expect(log).toEqual([]);

    document.body.appendChild(probe);
    expect(log).toEqual(["create:a"]);
  });

  it("destroys the previous view before creating the next", () => {
    const probe = document.createElement("probe-element") as ProbeElement;
    document.body.appendChild(probe);
    probe.payload = { id: "a" };
    probe.payload = { id: "b" };

    expect(log).toEqual(["create:a", "destroy:a", "create:b"]);
    expect(probe.textContent).toBe("b");
  });

  it("destroys on disconnect", () => {
    const probe = document.createElement("probe-element") as ProbeElement;
    document.body.appendChild(probe);
    probe.payload = { id: "a" };
    probe.remove();

    expect(log).toEqual(["create:a", "destroy:a"]);
    expect(probe.childNodes.length).toBe(0);
  });

  it("shows a placeholder for a null payload rather than an empty box", () => {
    const probe = document.createElement("probe-element") as ProbeElement;
    document.body.appendChild(probe);
    expect(probe.textContent).toContain("Waiting for data");
  });

  it("keeps the payload readable back off the element", () => {
    const probe = document.createElement("probe-element") as ProbeElement;
    document.body.appendChild(probe);
    probe.payload = { id: "a" };
    expect(probe.payload).toEqual({ id: "a" });
  });
});

describe("view teardown releases its engine handles", () => {
  let engines: SeededEnginesResult;

  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("<gufe-small-molecule> stops spinning and clears its viewer", async () => {
    const mol = document.createElement("gufe-small-molecule") as HTMLElement & { payload: unknown };
    document.body.appendChild(mol);
    mol.payload = readExample("small_molecule.json");
    await flush();

    expect(engines.viewers).toHaveLength(1);
    expect(engines.viewers[0].cleared).toBe(false);

    mol.remove();
    expect(engines.viewers[0].cleared).toBe(true);
    expect(engines.viewers[0].calls).toContain("spin(false)");
  });

  it("<gufe-protein> clears its viewer", async () => {
    const protein = document.createElement("gufe-protein") as HTMLElement & { payload: unknown };
    document.body.appendChild(protein);
    protein.payload = readExample("protein.json");
    await flush();

    expect(engines.viewers).toHaveLength(1);
    protein.remove();
    expect(engines.viewers[0].cleared).toBe(true);
  });

  it("<gufe-view> tears the child element down when the payload changes kind", async () => {
    const view = document.createElement("gufe-view") as HTMLElement & { payload: unknown };
    document.body.appendChild(view);

    view.payload = readExample("small_molecule.json");
    await flush();
    const molViewer = engines.viewers[0];

    view.payload = readExample("protein.json");
    await flush();

    expect(molViewer.cleared, "the small-molecule viewer outlived its element").toBe(true);
    expect(engines.viewers).toHaveLength(2);
  });
});

describe("how tall a view makes itself", () => {
  afterEach(() => document.body.replaceChildren());

  it("fills its parent, and stops at the viewport when the parent never says", () => {
    // The page that does not size its container is the common one - a bare
    // `<div>` in a notebook cell - and there `height:100%` is the content's own
    // height. Without a ceiling a menu listing two hundred ligands grows the
    // view instead of scrolling inside it, taking its own buttons off screen.
    const probe = document.createElement("probe-element") as ProbeElement;
    document.body.appendChild(probe);

    expect(probe.style.height).toBe("100%");
    expect(probe.style.maxHeight).toBe("100vh");
  });

  it("leaves the height a page set itself alone", () => {
    const probe = document.createElement("probe-element") as ProbeElement;
    probe.style.height = "1200px";
    document.body.appendChild(probe);

    expect(probe.style.height).toBe("1200px");
    expect(probe.style.maxHeight, "a page that sized the view got a ceiling anyway").toBe("");
  });

  it("does not cap a view nested in another one", () => {
    // The inner element's parent is the outer one's shell, which has a height
    // already. Capping it again would leave the bottom of a view taller than
    // the viewport empty.
    const outer = document.createElement("probe-element") as ProbeElement;
    document.body.appendChild(outer);
    outer.payload = { id: "outer" };

    const inner = document.createElement("probe-element") as ProbeElement;
    outer.firstElementChild!.appendChild(inner);

    expect(inner.style.maxHeight).toBe("");
  });
});
