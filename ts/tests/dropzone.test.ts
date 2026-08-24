/**
 * The dropzone's message banner.
 *
 * It sits over the visualization it is describing, so how it goes away matters
 * as much as what it says. Three rules, and they pull against each other:
 * a message about something that worked should not linger, an error should not
 * vanish before it is read, and an empty page must keep its instructions.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import "../src/index.js";
import { BANNER_MS, installDropzone } from "../src/dev/dropzone.js";
import { clearFakeEngines, readExample, seedFakeEngines } from "./helpers.js";

const banner = (): HTMLDivElement =>
  Array.from(document.body.querySelectorAll("div")).find((d) => d.style.borderRadius === "999px")!;

/**
 * A drop, which jsdom will not build for us.
 *
 * Two things it cannot do: put a `dataTransfer` on an event, and give a `File` a
 * `text()` method. So the file is the smallest object the dropzone actually
 * uses, and settling is done by draining microtasks rather than with a timer -
 * these tests run under fake timers, and a `setTimeout` flush would deadlock
 * against them.
 */
async function drop(contents: string): Promise<void> {
  const file = { name: "payload.json", text: () => Promise.resolve(contents) };
  const event = new Event("drop", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "dataTransfer", { value: { files: [file] } });
  window.dispatchEvent(event);
  for (let i = 0; i < 8; i++) await Promise.resolve();
}

describe("the dropzone banner", () => {
  beforeEach(() => {
    seedFakeEngines();
    document.body.replaceChildren();
    const host = document.createElement("div");
    document.body.appendChild(host);
    installDropzone(host);
  });

  afterEach(() => {
    clearFakeEngines();
    vi.useRealTimers();
    document.body.replaceChildren();
  });

  it("can be clicked away", () => {
    // It used to be pointer-events:none, so it could not be clicked at all.
    expect(banner().style.pointerEvents).not.toBe("none");
    banner().click();
    expect(banner().style.opacity).toBe("0");
    expect(banner().style.pointerEvents).toBe("none");
  });

  it("keeps its instructions up while the page is empty", () => {
    vi.useFakeTimers();
    vi.advanceTimersByTime(BANNER_MS * 3);
    // A blank page with no instruction on it is not a page anyone can use.
    expect(banner().textContent).toContain("Drop a payload JSON");
    expect(banner().style.opacity).not.toBe("0");
  });

  it("goes away on its own once something has loaded", async () => {
    vi.useFakeTimers();
    await drop(JSON.stringify(readExample("small_molecule.json")));

    expect(banner().textContent).toContain("drop another to replace it");
    expect(banner().style.opacity).toBe("1");

    vi.advanceTimersByTime(BANNER_MS);
    expect(banner().style.opacity).toBe("0");
  });

  it("leaves an error up, because one that vanishes unread is worse", async () => {
    vi.useFakeTimers();
    await drop("this is not json");

    expect(banner().textContent).toContain("not valid JSON");
    vi.advanceTimersByTime(BANNER_MS * 5);
    expect(banner().style.opacity).toBe("1");
  });

  it("lets an error be clicked away too", async () => {
    await drop("this is not json");
    expect(banner().textContent).toContain("not valid JSON");
    banner().click();
    expect(banner().style.opacity).toBe("0");
  });

  it("comes back for the next message after being dismissed", async () => {
    banner().click();
    expect(banner().style.opacity).toBe("0");

    await drop(JSON.stringify(readExample("small_molecule.json")));
    expect(banner().style.opacity).toBe("1");
    expect(banner().style.pointerEvents).toBe("auto");
  });
});
