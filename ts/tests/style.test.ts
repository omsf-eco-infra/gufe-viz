/**
 * That the interface stays centralized.
 *
 * `style.ts` is only worth having if a view cannot quietly go around it. These
 * read the source rather than the DOM, because what is being checked is where a
 * value is written, not what it renders to.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BUTTON, FONT, MENU_LIST, MENU_PANEL, SELECT } from "../src/shared/style.js";

const SRC = join(import.meta.dirname, "..", "src");

const sources = (dir: string): { name: string; text: string }[] =>
  readdirSync(join(SRC, dir))
    .filter((f) => f.endsWith(".ts"))
    .map((name) => ({ name: `${dir}/${name}`, text: readFileSync(join(SRC, dir, name), "utf-8") }));

const VIEWS = sources("views");

describe("the views", () => {
  it("do not set their own font sizes", () => {
    // A view that writes `font-size:11px` is making a typography decision on its
    // own, and the next view will make a slightly different one.
    for (const { name, text } of VIEWS) {
      const literals = text.match(/font-size:\s*\d+px/g) ?? [];
      expect(literals, `${name} sets a font size directly`).toEqual([]);
    }
  });

  it("do not style their own buttons or dropdowns", () => {
    for (const { name, text } of VIEWS) {
      expect(text, `${name} styles a button itself`).not.toMatch(/border-radius:3px;cursor:pointer/);
      expect(text, `${name} styles a dropdown itself`).not.toMatch(/T\.selectBg/);
    }
  });

  it("do not reach past style.ts for interface colours", () => {
    // `theme.ts` is the palette; `style.ts` is the front door. A view reading a
    // button or panel colour straight from the palette is going around it.
    const chrome = ["btnBg", "btnFg", "btnBorder", "btnBgHover", "btnBgActive", "selectBg", "labelFg", "labelBg"];
    for (const { name, text } of VIEWS) {
      for (const key of chrome) {
        expect(text, `${name} reads T.${key} instead of using style.ts`).not.toContain(`T.${key}`);
      }
    }
  });
});

describe("style.ts", () => {
  it("describes no atom", () => {
    // Chemical colours mean something and are mirrored from elsewhere. If one
    // ends up here it becomes restylable, and a picture starts claiming
    // something different from the picture gufe draws.
    const text = readFileSync(join(SRC, "shared", "style.ts"), "utf-8");
    const code = text.replace(/\/\*[\s\S]*?\*\//g, "");
    for (const word of ["atom", "element", "molecule", "mapping", "core", "unique"]) {
      expect(code.toLowerCase(), `style.ts mentions "${word}"`).not.toContain(word);
    }
  });

  it("hands out the values the views build from", () => {
    expect(BUTTON.base).toContain("cursor:pointer");
    expect(SELECT).toContain("cursor:pointer");
    expect(FONT.small).toBe("11px");
  });

  it("makes the menu's list the part that scrolls", () => {
    // The list is the one thing in a menu that grows with the payload. It has
    // to scroll inside the panel, or a network of two hundred nodes pushes the
    // hint, the export block and the clear button off the bottom of the view.
    expect(MENU_LIST).toContain("overflow:auto");
    expect(MENU_LIST).toContain("flex:1");
    // And it keeps a few rows in a menu too short for the list and the controls
    // both - past that the panel scrolls rather than the list disappearing.
    expect(MENU_LIST).toMatch(/min-height:\d+px/);
    expect(MENU_PANEL).toContain("overflow-y:auto");
  });
});

describe("the network menus", () => {
  it("both build their panel and list from style.ts", () => {
    // Two menus that lay themselves out separately drift, and the drift shows
    // up as one of them scrolling on a long list and the other not.
    for (const name of ["ligand-network.ts", "alchemical-network.ts"]) {
      const text = readFileSync(join(SRC, "views", name), "utf-8");
      expect(text, `${name} does not use MENU_PANEL`).toContain("MENU_PANEL");
      expect(text, `${name} does not use MENU_LIST`).toContain("MENU_LIST");
      expect(text, `${name} styles its own scrolling list`).not.toMatch(/min-height:0;overflow:auto/);
    }
  });
});

describe("theme.ts", () => {
  it("holds no chemical colour", () => {
    const text = readFileSync(join(SRC, "shared", "theme.ts"), "utf-8");
    for (const key of ["colorCore", "colorUnique", "linesMol", "overlayMol", "linesDash"]) {
      expect(text, `theme.ts still holds ${key}`).not.toContain(key);
    }
  });
});
