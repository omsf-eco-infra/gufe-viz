/**
 * The chrome menu: the one control every view shares.
 *
 * These assert the three properties a user would notice breaking, rather than
 * restating the helper's implementation:
 *
 *   - the menu starts closed, so a view is never wearing its controls open;
 *   - opening it does not rebuild anything, because a rebuild would take the
 *     3D camera, the graph layout and the selection with it;
 *   - the contents are not built until they are first wanted.
 */

import { beforeEach, describe, expect, it, vi } from "vitest";
import { CHROME_OPEN_BY_DEFAULT, chromeMenu, el, headerStrip, splitter } from "../src/shared/dom.js";
import { num } from "../src/shared/settings.js";

describe("chromeMenu", () => {
  let header: ReturnType<typeof headerStrip>;

  beforeEach(() => {
    document.body.replaceChildren();
    header = headerStrip("A view");
    document.body.appendChild(header);
  });

  const button = (): HTMLButtonElement => header.toggleEl.querySelector("button")!;

  it("starts closed", () => {
    const menu = chromeMenu(header, () => document.createElement("div"));
    expect(CHROME_OPEN_BY_DEFAULT).toBe(false);
    expect(menu.isOpen()).toBe(false);
    expect(menu.panel.style.display).toBe("none");
  });

  it("does not build its contents until first opened", () => {
    const build = vi.fn(() => document.createElement("div"));
    const menu = chromeMenu(header, build);
    expect(build).not.toHaveBeenCalled();

    menu.setOpen(true);
    expect(build).toHaveBeenCalledTimes(1);
    expect(menu.panel.childElementCount).toBe(1);
  });

  it("builds its contents exactly once across many toggles", () => {
    const build = vi.fn(() => document.createElement("div"));
    const menu = chromeMenu(header, build);
    for (const open of [true, false, true, false, true]) menu.setOpen(open);
    expect(build).toHaveBeenCalledTimes(1);
  });

  it("keeps the same contents across a close and reopen", () => {
    // The point of the whole design: a view holds references into what it built,
    // so closing must not discard it.
    const menu = chromeMenu(header, () => {
      const marker = document.createElement("div");
      marker.id = "built-once";
      return marker;
    });
    menu.setOpen(true);
    const first = menu.panel.firstElementChild;
    menu.setOpen(false);
    menu.setOpen(true);
    expect(menu.panel.firstElementChild).toBe(first);
    expect(menu.panel.childElementCount).toBe(1);
  });

  it("reports the change so a view can re-lay-out", () => {
    const onToggle = vi.fn();
    const menu = chromeMenu(header, () => document.createElement("div"), { onToggle });
    menu.setOpen(true);
    menu.setOpen(false);
    expect(onToggle.mock.calls.map(([open]) => open)).toEqual([true, false]);
  });

  it("does not report a set that changes nothing", () => {
    const onToggle = vi.fn();
    const menu = chromeMenu(header, () => document.createElement("div"), { onToggle });
    menu.setOpen(false);
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("puts its button at the top left, before the title", () => {
    chromeMenu(header, () => document.createElement("div"));
    // Placement is the helper's job, not each view's, so it is asserted here:
    // the slot is the strip's first child, and the button is in it.
    expect(header.firstElementChild).toBe(header.toggleEl);
    expect(header.toggleEl.contains(button())).toBe(true);
    expect(header.toggleEl.compareDocumentPosition(header.titleEl) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("centres the button against the header text", () => {
    // The button is taller than a line of title text, and a baseline-aligned
    // strip puts its baseline group flush to the top, which left the title
    // riding above the button. So the strip centres, and the text keeps its
    // shared baseline in a row of its own. jsdom has no layout engine, so this
    // checks the rules are set rather than the pixels they produce - the pixels
    // are what the gallery is for.
    expect(header.style.alignItems).toBe("center");
    expect(header.textEl.style.alignItems).toBe("baseline");
    expect(header.textEl.contains(header.titleEl)).toBe(true);
    expect(header.textEl.contains(header.statsEl)).toBe(true);
  });

  it("takes no room in a header with no menu", () => {
    // Every view builds a header strip; most have no menu, and an empty slot
    // must not indent their titles.
    expect(header.firstElementChild).toBe(header.toggleEl);
    expect(header.toggleEl.childElementCount).toBe(0);
    expect(header.toggleEl.style.marginRight).toBe("");
  });

  it("puts its button in the header's toggle slot", () => {
    chromeMenu(header, () => document.createElement("div"), { label: "Network options" });
    expect(button()).toBeTruthy();
    expect(button().getAttribute("aria-label")).toBe("Network options");
    expect(button().getAttribute("aria-expanded")).toBe("false");
  });

  it("toggles from the button, and says so to a screen reader", () => {
    const menu = chromeMenu(header, () => document.createElement("div"));
    button().click();
    expect(menu.isOpen()).toBe(true);
    expect(button().getAttribute("aria-expanded")).toBe("true");
    button().click();
    expect(menu.isOpen()).toBe(false);
    expect(button().getAttribute("aria-expanded")).toBe("false");
  });

  it("can be opened from the start when a caller asks", () => {
    const build = vi.fn(() => document.createElement("div"));
    const menu = chromeMenu(header, build, { open: true });
    expect(menu.isOpen()).toBe(true);
    expect(build).toHaveBeenCalledTimes(1);
    expect(menu.panel.style.display).toBe("");
  });

});

/**
 * The divider between a graph and its detail pane.
 *
 * Both panes are driven from one fraction, which is what makes a remembered
 * position restore as the same picture at a different window size. The drag
 * itself is asserted through synthesized pointer events, because what a reader
 * would notice breaking is the divider not moving.
 */
describe("splitter", () => {
  const row = (): { row: HTMLDivElement; before: HTMLDivElement; after: HTMLDivElement } => {
    const wrap = el("div", "display:flex;") as HTMLDivElement;
    const before = el("div") as HTMLDivElement;
    const after = el("div") as HTMLDivElement;
    wrap.append(before, after);
    document.body.replaceChildren(wrap);
    return { row: wrap, before, after };
  };

  /** jsdom lays nothing out and captures no pointers, so both are supplied. */
  const draggable = (handle: HTMLElement, host: HTMLElement, width: number): void => {
    handle.setPointerCapture = () => {};
    handle.releasePointerCapture = () => {};
    host.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width, height: 100, right: width, bottom: 100, x: 0, y: 0, toJSON: () => ({}) }) as DOMRect;
  };

  /** The percentage a pane was given, however the host chose to serialize it. */
  const share = (pane: HTMLElement): number => Number(/([\d.]+)%/.exec(pane.style.flex)![1]);

  const pointer = (type: string, clientX: number): MouseEvent => {
    const event = new MouseEvent(type, { bubbles: true, clientX });
    Object.defineProperty(event, "pointerId", { value: 1 });
    return event;
  };

  it("sizes both panes from one fraction", () => {
    const { row: host, before, after } = row();
    host.appendChild(splitter(host, before, after, { remember: undefined }));
    // The two shares are complements, so the divider is never showing one thing
    // while the panes do another.
    expect(share(before)).toBeCloseTo(50, 5);
    expect(share(after)).toBeCloseTo(50, 5);
  });

  it("opens where it was left", () => {
    const remember = num("test.splitter.remembered", 0.5, 0.2, 0.8);
    remember.set(0.7);
    const { row: host, before, after } = row();
    host.appendChild(splitter(host, before, after, { remember }));
    expect(share(before)).toBeCloseTo(70, 5);
    expect(share(after)).toBeCloseTo(30, 5);
  });

  it("moves on a drag, remembers where it stopped, and redraws once", () => {
    const remember = num("test.splitter.dragged", 0.5, 0.2, 0.8);
    const onResize = vi.fn();
    const { row: host, before, after } = row();
    const handle = splitter(host, before, after, { remember, onResize });
    host.appendChild(handle);
    draggable(handle, host, 1000);

    handle.dispatchEvent(pointer("pointerdown", 500));
    handle.dispatchEvent(pointer("pointermove", 300));
    // Mid-drag the panes have moved, and nothing has been asked to redraw yet:
    // on the far side of that callback is a force simulation.
    expect(share(before)).toBeCloseTo(30, 5);
    expect(share(after)).toBeCloseTo(70, 5);
    expect(onResize).not.toHaveBeenCalled();

    handle.dispatchEvent(pointer("pointerup", 300));
    expect(onResize).toHaveBeenCalledTimes(1);
    expect(remember.get()).toBeCloseTo(0.3, 5);
  });

  it("stays inside its bounds however far the pointer goes", () => {
    const { row: host, before } = row();
    const after = host.lastElementChild as HTMLDivElement;
    const handle = splitter(host, before, after, { min: 0.3, max: 0.6 });
    host.appendChild(handle);
    draggable(handle, host, 1000);

    handle.dispatchEvent(pointer("pointerdown", 500));
    handle.dispatchEvent(pointer("pointermove", -400));
    expect(share(before)).toBeCloseTo(30, 5);
    handle.dispatchEvent(pointer("pointermove", 4000));
    expect(share(before)).toBeCloseTo(60, 5);
  });

  it("ignores a pointer that never went down on it", () => {
    const { row: host, before, after } = row();
    const handle = splitter(host, before, after);
    host.appendChild(handle);
    draggable(handle, host, 1000);

    handle.dispatchEvent(pointer("pointermove", 100));
    expect(share(before)).toBeCloseTo(50, 5);
  });
});
