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
import { CHROME_OPEN_BY_DEFAULT, chromeMenu, headerStrip } from "../src/shared/dom.js";

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
    // The strip aligns on `baseline`, and the button holds an icon with no text,
    // so its baseline is its bottom edge and it hangs low against the title.
    // jsdom has no layout engine, so this checks the rule is set rather than the
    // pixels it produces - the pixels are what the gallery is for.
    expect(header.style.alignItems).toBe("baseline");
    expect(header.toggleEl.style.alignSelf).toBe("center");
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
