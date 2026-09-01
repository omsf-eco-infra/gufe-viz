const eo = {
  dark: {
    appBg: "#2b2b40",
    panelBg: "#33334d",
    cardBg: "#33334d",
    cardBgActive: "#1f3a63",
    cardBorder: "#45455e",
    cardBorderActive: "#4182e4",
    splitBorder: "#45455e",
    toolbarBg: "#33334d",
    toolbarBorder: "#45455e",
    tooltipBg: "#33334d",
    tooltipBorder: "#45455e",
    titleColor: "#51cbee",
    textPrimary: "#f2f3f7",
    textMuted: "#b9bccb",
    textMuted2: "#8f93a6",
    selectBg: "#2b2b40",
    selectBorder: "#45455e",
    labelBg: "#33334d",
    labelFg: "#51cbee",
    badgeBg: "#1f3a63",
    badgeFg: "#51cbee",
    switcherBg: "rgba(43,43,64,0.94)",
    btnBg: "#33334d",
    btnBgHover: "#3d3d5c",
    btnBgActive: "#4182e4",
    btnFg: "#f2f3f7",
    btnBorder: "#45455e",
    warnBg: "#3b1d1d",
    warnFg: "#ffb4b4",
    warnBorder: "#7f2a2a",
    errorFg: "#ff8080",
    viewerBg: "0x2b2b40",
    canvas2DBg: "#ffffff",
    diffUnchanged: "#64748b",
    diffChanged: "#d9a300",
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",
    netCanvasBg: "#2b2b40",
    netNodeFill: "#33334d",
    netNodeStroke: "#45455e",
    netNodeLabel: "#f2f3f7",
    netNodeCaption: "#b9bccb",
    netInitials: "#51cbee",
    netMatchFill: "#4a3c22",
    netMatchStroke: "#e69f00",
    netMatchAtom: "#e69f00",
    netEdgeRamp: ["#45455e", "#51cbee"],
    netEdgeLine: "#8f93a6",
    netEdgeLabel: "#f2f3f7",
    netHaloColor: "#51cbee",
    netGroupFill: ["#1f3a63", "#12403c", "#3a1f37", "#4a3c22", "#243a5e"],
    netGroupStroke: ["#4182e4", "#00bdaa", "#c060b8", "#e69f00", "#8f93a6"]
  },
  light: {
    appBg: "#ffffff",
    panelBg: "#f7f8fa",
    cardBg: "#ffffff",
    cardBgActive: "#e6effc",
    cardBorder: "#eeeeee",
    cardBorderActive: "#4182e4",
    splitBorder: "#eeeeee",
    toolbarBg: "#f7f8fa",
    toolbarBorder: "#eeeeee",
    tooltipBg: "#ffffff",
    tooltipBorder: "#cccccc",
    titleColor: "#4182e4",
    textPrimary: "#333333",
    textMuted: "#666666",
    textMuted2: "#999999",
    selectBg: "#ffffff",
    selectBorder: "#cccccc",
    labelBg: "#f7f8fa",
    labelFg: "#4182e4",
    badgeBg: "#e6effc",
    badgeFg: "#4182e4",
    switcherBg: "rgba(255,255,255,0.94)",
    btnBg: "#ffffff",
    btnBgHover: "#f0f4fb",
    btnBgActive: "#4182e4",
    btnFg: "#333333",
    btnBorder: "#cccccc",
    warnBg: "#fee2e2",
    warnFg: "#991b1b",
    warnBorder: "#fecaca",
    errorFg: "#c33",
    viewerBg: "0xffffff",
    canvas2DBg: "#ffffff",
    diffUnchanged: "#94a3b8",
    diffChanged: "#b45309",
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",
    netCanvasBg: "#ffffff",
    netNodeFill: "#ffffff",
    netNodeStroke: "#cccccc",
    netNodeLabel: "#333333",
    netNodeCaption: "#666666",
    netInitials: "#4182e4",
    netMatchFill: "#fdf1d8",
    netMatchStroke: "#e69f00",
    netMatchAtom: "#c07d00",
    netEdgeRamp: ["#e8eaef", "#4182e4"],
    netEdgeLine: "#999999",
    netEdgeLabel: "#333333",
    netHaloColor: "#51cbee",
    netGroupFill: ["#e6effc", "#d9f5f2", "#f6e7f4", "#fdf1d8", "#eef0f4"],
    netGroupStroke: ["#4182e4", "#009e8f", "#8a2283", "#c07d00", "#666666"]
  }
};
function Zi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const O = Zi() ? eo.dark : eo.light, Z = {
  mono: "ui-monospace,SFMono-Regular,Menlo,monospace",
  /** Label captions and dense readouts. */
  tiny: "10px",
  /** The default for chrome: chips, legends, list rows. */
  small: "11px",
  /** Body text, toolbars, form controls. */
  body: "12px",
  /** Pane labels and anything heading a section of a view. */
  heading: "13px",
  /** A view's title. */
  title: "15px"
}, Ue = {
  bold: "700"
}, re = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Ke = {
  sm: "3px",
  md: "6px",
  xl: "10px",
  pill: "999px"
}, Pe = {
  title: O.titleColor,
  primary: O.textPrimary,
  muted: O.textMuted,
  faint: O.textMuted2,
  error: O.errorFg
}, $t = {
  card: O.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: O.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: O.canvas2DBg
}, ye = {
  base: `background:${O.btnBg};color:${O.btnFg};border:1px solid ${O.btnBorder};padding:${re.sm} 9px;font-size:${Z.small};font-weight:${Ue.bold};border-radius:${Ke.sm};cursor:pointer;font-family:inherit;`,
  bg: O.btnBg,
  bgHover: O.btnBgHover,
  bgActive: O.btnBgActive
}, Qi = `background:${O.selectBg};color:${O.textPrimary};border:1px solid ${O.selectBorder};border-radius:${Ke.md};padding:${re.sm} ${re.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, ea = `display:flex;align-items:center;gap:12px;padding:9px ${re.xxl};flex-shrink:0;background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};`, zn = { min: "236px", max: "340px" }, Je = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, oi = `display:flex;flex-direction:column;gap:${re.lg};flex:1;min-width:var(${Je.min},${zn.min});max-width:var(${Je.max},${zn.max});box-sizing:border-box;padding:${re.xl};min-height:0;overflow-y:auto;background:${O.panelBg};border:0 solid ${O.splitBorder};border-right-width:var(${Je.ruleX},1px);border-bottom-width:var(${Je.ruleY},0);`, ta = "45%", si = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Mr = {
  top: `display:flex;align-items:center;gap:${re.xl};flex-wrap:wrap;padding:${re.lg} ${re.xxl};flex-shrink:0;font-size:${Z.body};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${re.xl};flex-wrap:wrap;padding:${re.lg} ${re.xxl};flex-shrink:0;background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};`
}, ii = `flex-shrink:0;padding:${re.sm} ${re.xl};font-size:${Z.heading};font-weight:${Ue.bold};color:${O.labelFg};background:${O.labelBg};`, _r = `position:absolute;top:${re.md};left:${re.md};z-index:10;pointer-events:none;max-width:calc(100% - ${re.xxl} - ${re.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${re.xs} ${re.lg};border-radius:${Ke.md};font-size:${Z.heading};font-weight:${Ue.bold};color:${O.labelFg};background:${O.labelBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, na = `display:flex;flex-direction:column;gap:${re.xs};padding:${re.xxl} 18px;border-radius:${Ke.xl};background:${O.cardBg};border:1px solid ${O.cardBorder};`, ai = `position:absolute;bottom:${re.xl};right:${re.xl};display:flex;gap:${re.sm};padding:${re.sm};border-radius:${Ke.md};z-index:10;background:${O.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, ra = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${O.textMuted};`, to = `font-size:${Z.small};font-weight:${Ue.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`, et = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${re.xs} ${re.sm};font-size:${Z.small};`,
  plain: `display:inline-flex;align-items:center;padding:${re.xs} ${re.md};border:1px solid transparent;border-radius:${Ke.pill};font-family:inherit;font-size:${Z.small};color:${O.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${O.btnBorder};`,
  active: `cursor:pointer;background:${O.cardBgActive};border-color:${O.btnBorder};color:${O.textPrimary};`
}, er = `font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`, oa = ["debug", "gufe-debug"], sa = "debug", ia = "GUFE_VIZ_DEBUG";
function aa() {
  return !!globalThis[ia];
}
function ca() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return oa.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function ci(e) {
  return e?.hasAttribute?.(sa) ? !0 : aa() || ca();
}
function la(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function da(e, t, n) {
  if (!ci(n)) return;
  const r = la(t), o = t?.type, s = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(s) : console.log(s), console.log(r), console.log(t), i && console.groupEnd?.();
}
const li = "GUFE_VIZ_VIEW_STATE";
function ua(e) {
  const t = globalThis[li];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const fa = 150, no = "data-gufe-shell";
class Re extends HTMLElement {
  #n = null;
  #e = null;
  #t = null;
  #r = null;
  #o = null;
  /**
   * Bumped by every teardown. A render captures it and refuses to adopt its
   * handle if it has moved on - which is what stops a slow view (3Dmol behind a
   * CDN fetch) from installing itself into an element that has since been given
   * a different payload, or removed from the document entirely.
   */
  #s = 0;
  /** The message shown before any payload arrives. */
  placeholder() {
    return "Waiting for data...";
  }
  set payload(t) {
    this.#n = t, this.isConnected && this.#a();
  }
  get payload() {
    return this.#n;
  }
  connectedCallback() {
    this.style.display = "flex", this.style.flexDirection = "column", this.style.width = this.style.width || "100%";
    const t = this.style.height;
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${no}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = O.appBg, this.style.color = O.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), fa);
    }), this.#r.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#i(), this.#r?.disconnect(), this.#r = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #i() {
    if (this.#s++, this.#o && (clearTimeout(this.#o), this.#o = null), this.#e?.cleanup)
      try {
        this.#e.cleanup();
      } catch (t) {
        console.warn("[gufe-viz] cleanup failed:", t);
      }
    this.#e = null, this.replaceChildren(), this.#t = null;
  }
  /**
   * Whether nothing has given this element a `max-height` already - inline, or
   * in a stylesheet, which is how a page raises the ceiling above.
   */
  #d() {
    if (typeof getComputedStyle != "function") return !0;
    const t = getComputedStyle(this).maxHeight;
    return !t || t === "none";
  }
  /** Tear the mounted view down and hand back a fresh, empty shell. */
  #u() {
    return this.#i(), this.#t = j(
      "div",
      // `flex:1;min-height:0` and not height alone: inside a host clamped by the
      // ceiling above, the shell has to be shrinkable or it overflows it.
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${O.appBg};`
    ), this.#t.setAttribute(no, ""), this.appendChild(this.#t), this.#t;
  }
  /**
   * Build the view for the current payload.
   *
   * Deliberately *not* an `async` method. A synchronous `renderView` - which is
   * what the current views are - must install its handle before this returns,
   * or two `payload` assignments in a row would tear down nothing the first
   * time and leak the first view's viewer. An `await` here would defer that
   * assignment by a microtask and do exactly that.
   */
  #a() {
    const t = this.#u(), n = this.#s;
    if (this.#n == null) {
      t.appendChild(fe(this.placeholder()));
      return;
    }
    let r;
    try {
      r = this.renderView(t, this.#n);
    } catch (o) {
      this.#l(t, n, o);
      return;
    }
    r instanceof Promise ? r.then(
      (o) => this.#c(o, n),
      (o) => this.#l(t, n, o)
    ) : this.#c(r, n);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, n) {
    if (n !== this.#s || !this.isConnected) {
      try {
        t?.cleanup?.();
      } catch (r) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", r);
      }
      return;
    }
    this.#e = t || null;
  }
  #l(t, n, r) {
    n === this.#s && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(fe(`Failed to render: ${he(r)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
  /**
   * What the mounted view would need to be restored as it is now, or null when
   * it has nothing to say. See `ViewHandle.viewState`.
   */
  viewState() {
    return this.#e?.viewState?.() ?? null;
  }
}
function Ne(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const ke = "gufe-viz:", Ye = /* @__PURE__ */ new Map();
let jt = null;
function pa() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Tt() {
  if (jt === !1) return null;
  const e = pa();
  if (!e)
    return jt = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), jt = !0, e;
  } catch {
    return jt = !1, null;
  }
}
function ha(e) {
  const t = Tt();
  if (!t) return Ye.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function ma(e, t) {
  const n = Tt();
  if (!n) {
    Ye.set(ke + e, t);
    return;
  }
  try {
    n.setItem(ke + e, t);
  } catch {
    Ye.set(ke + e, t);
  }
}
function Ln(e, t, n) {
  return {
    key: e,
    get() {
      const r = ha(e);
      if (r === null) return t;
      try {
        const o = JSON.parse(r);
        return n(o) ? o : t;
      } catch {
        return t;
      }
    },
    set(r) {
      try {
        ma(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function wt(e, t, n) {
  return Ln(e, t, (r) => typeof r == "string" && n.includes(r));
}
function vt(e, t) {
  return Ln(e, t, (n) => typeof n == "boolean");
}
function Or(e, t, n = -1 / 0, r = 1 / 0) {
  return Ln(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Mt(e, t = "") {
  return Ln(e, t, (n) => typeof n == "string");
}
function di() {
  const e = {}, t = Tt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ye.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Ye.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(ke.length)] = JSON.parse(o);
      } catch {
        e[r.slice(ke.length)] = o;
      }
  }
  return e;
}
function ga() {
  const e = {}, t = Tt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ye.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Ye.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function ya() {
  const e = Tt();
  if (e)
    for (const t of Object.keys(di()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  Ye.clear();
}
const ui = "https://framejs.app", fi = 1e4;
function $a(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const va = "/gufe-dev-bundle.js";
function ba() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= fi ? e : null;
}
async function wa() {
  const e = ba();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(va);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < fi ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function _a() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Sa(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(vi)};`,
    "  for (const key of Object.keys(localStorage)) {",
    "    if (key.startsWith(prefix) && key.endsWith(menuOpen)) localStorage.removeItem(key);",
    "  }",
    "} catch (e) {",
    '  console.warn("[gufe-viz] could not clear menu state:", e);',
    "}"
  ), Object.keys(e.settings).length && t.push(
    "// The settings the page had, written where `settings.ts` looks for them.",
    "try {",
    `  const stored = ${JSON.stringify(e.settings)};`,
    "  for (const key of Object.keys(stored)) localStorage.setItem(key, stored[key]);",
    "} catch (e) {",
    '  console.warn("[gufe-viz] could not restore settings:", e);',
    "}"
  ), Object.keys(e.views).length && t.push(
    "// Where the camera was, what was selected, where the layout settled.",
    `globalThis[${JSON.stringify(li)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function ka(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Sa(n),
    "// Built by gufe-viz's debug menu from a generated page. The bundle below is",
    "// that page's own script, unchanged; everything above it exists so the",
    "// bootstrap at the end of it finds the three elements it looks up.",
    'root.innerHTML = "";',
    'const gufeError = document.createElement("div");',
    'gufeError.id = "gufe-error";',
    'gufeError.style.cssText = "display:none;padding:12px 16px;white-space:pre-wrap;font-family:ui-monospace,monospace;color:#991b1b;background:#fee2e2;";',
    "root.appendChild(gufeError);",
    'const gufePayload = document.createElement("script");',
    'gufePayload.type = "application/json";',
    'gufePayload.id = "gufe-payload";',
    `gufePayload.textContent = ${r};`,
    "root.appendChild(gufePayload);",
    'const gufeView = document.createElement("gufe-view");',
    'gufeView.style.cssText = "display:block;width:100%;height:100%;";',
    "root.appendChild(gufeView);",
    "",
    e,
    "",
    "// A generated page's bootstrap has drawn the payload by now. A bundle on its",
    "// own ends at `export` and has not, so this is what draws it there. Reading",
    "// the property rather than tracking which case we are in keeps the two from",
    "// having to agree about anything.",
    "if (gufeView.payload == null) {",
    "  gufeView.payload = JSON.parse(gufePayload.textContent);",
    "}"
  ].join(`
`);
}
function Ca(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, s] of Object.entries(ga()))
    o.endsWith(vi) || (r[o] = s);
  return { settings: r, views: t };
}
const Ea = (e) => `${ui}/j/${e}`, xa = (e) => `${ui}/j/${e}.json`;
async function Pa(e, t, n) {
  await fetch(xa(e), {
    method: "POST",
    mode: "no-cors",
    // Not `application/json`: that would make the request preflighted, and
    // framejs.app serves no OPTIONS. `text/plain` is CORS-simple and the server
    // parses the body regardless.
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify({
      js: t,
      og: { title: n, description: "Exported from gufe-viz's debug menu." }
    })
  });
}
function Aa(e) {
  if (!ci()) return;
  const t = j(
    "div",
    `display:flex;flex-direction:column;gap:${re.md};padding-top:${re.lg};border-top:1px dashed ${O.splitBorder};`
  );
  t.appendChild(
    j(
      "div",
      `font-size:${Z.tiny};font-weight:${Ue.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
      "debug"
    )
  );
  const n = j("button", `${ye.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = j("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? O.errorFg : O.textMuted2;
  }, s = (i, a) => {
    const c = j("a", `color:${O.textPrimary};`, i);
    c.href = i, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(j("div", `padding-top:${re.sm};`, a)), r.style.color = O.textMuted2;
  };
  n.onclick = () => {
    const i = $a(e);
    if (!i || i.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, c = Ca(i), u = window.open("", "_blank"), h = _a(), g = a, m = String(g.name || g.type || "gufe-viz"), y = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), wa().then((S) => {
      if (!S) {
        u?.close(), y(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Pa(h, ka(S.js, a, c), m).then(() => {
        y();
        const _ = Ea(h);
        u && (u.location.href = _), s(_, S.note);
      });
    }).catch((S) => {
      y(), u?.close(), o(`Upload failed: ${S instanceof Error ? S.message : String(S)}`, !0);
    });
  }, t.appendChild(
    j(
      "div",
      `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function j(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Be(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const kt = (e) => e.toLocaleString("en-US"), ot = "-", _t = ye.base, Vn = Qi;
function Bn(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const o = j("div", "display:flex;gap:4px;"), s = e.map((i) => {
    const a = j("button", _t, i.label);
    return a.title = i.title || i.label, a.onmouseover = () => {
      a.style.background = ye.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === i.id ? ye.bgActive : ye.bg;
    }, a.onclick = () => {
      o.setActive(i.id), r?.set(i.id), n(i.id);
    }, o.appendChild(a), { id: i.id, btn: a };
  });
  return o.setActive = (i) => {
    t = i, s.forEach((a) => {
      a.btn.style.background = a.id === t ? ye.bgActive : ye.bg;
    });
  }, o.setActive(t), o;
}
function Un(e, t, n, r) {
  const o = j("select", Vn);
  for (const i of e) {
    const a = j("option", "", i.label);
    a.value = i.id, o.appendChild(a);
  }
  let s = t;
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (s = i);
  }
  return o.value = s, o.onchange = () => {
    r?.set(o.value), n(o.value);
  }, o;
}
function pi(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const s = j("button", _t, e);
  s.title = r.title || e, s.setAttribute("aria-pressed", String(o));
  const i = () => {
    s.style.background = o ? ye.bgActive : ye.bg, s.setAttribute("aria-pressed", String(o));
  };
  return s.onclick = () => {
    o = !o, i(), r.remember?.set(o), n(o);
  }, i(), s;
}
function Ae(e, t, n) {
  const r = j("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    j("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = j("span");
  return o.innerHTML = `${Be(e)} <b style="color:${Pe.primary};">${Be(t)}</b>`, r.appendChild(o), r;
}
function it(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${re.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${re.md} ${re.xxl};border-radius:${Ke.md};font-size:${Z.body};background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};`, e.appendChild(n), n;
}
function fe(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Z.heading};color:${t ? Pe.error : Pe.faint};`,
    e
  );
}
function St(e) {
  const t = j("div", ea);
  return t.className = "gufe-header", t.titleEl = j(
    "span",
    `font-weight:${Ue.bold};font-size:${Z.title};color:${Pe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Z.small};color:${Pe.muted};`
  ), t.textEl = j("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = j("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Se(e, t, n = !1) {
  const r = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:${Z.tiny};font-weight:${Ue.bold};letter-spacing:.08em;text-transform:uppercase;color:${Pe.faint};`,
      e
    )
  );
  const o = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Pe.primary};` + (n ? `font-family:${Z.mono};font-size:${Z.small};` : `font-size:${Z.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Kn(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:${Ke.xl};font-size:${Z.tiny};font-weight:${Ue.bold};letter-spacing:.04em;white-space:nowrap;background:${O.badgeBg};color:${O.badgeFg};`,
    e
  );
}
function Tr() {
  return j("div", na);
}
function hi() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const mi = "data-gufe-hide-name";
function gi(e) {
  return !e.closest(`[${mi}]`);
}
function Ra(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const ro = { min: 0.2, max: 0.8 }, Na = 5;
function yi(e, t, n, r = {}) {
  const o = r.min ?? ro.min, s = r.max ?? ro.max, i = j(
    "div",
    `flex:0 0 ${Na}px;align-self:stretch;touch-action:none;background:${O.splitBorder};`
  );
  i.setAttribute("role", "separator"), i.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const c = (S) => {
    a = S, e.style.flexDirection = a ? "column" : "row", i.style.cursor = a ? "row-resize" : "col-resize", i.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, u = () => {
    const S = e.getBoundingClientRect();
    return S.height > S.width;
  };
  let h = Math.min(s, Math.max(o, r.remember?.get() ?? 0.5));
  const g = () => {
    t.style.flex = `1 1 ${(h * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - h) * 100).toFixed(2)}%`;
  };
  g(), c(u()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const _ = u();
    _ !== a && (c(_), r.onResize?.(h));
  }).observe(e);
  let m = !1;
  i.addEventListener("pointerdown", (S) => {
    m = !0, i.setPointerCapture(S.pointerId), S.preventDefault();
  }), i.addEventListener("pointermove", (S) => {
    if (!m) return;
    const _ = e.getBoundingClientRect(), p = a ? _.height : _.width;
    if (p <= 0) return;
    const $ = a ? S.clientY - _.top : S.clientX - _.left;
    h = Math.min(s, Math.max(o, $ / p)), g();
  });
  const y = (S) => {
    m && (m = !1, i.releasePointerCapture(S.pointerId), r.remember?.set(h), r.onResize?.(h));
  };
  return i.addEventListener("pointerup", y), i.addEventListener("pointercancel", y), i;
}
function $i(e, t) {
  e.style.setProperty(Je.min, t ? "0" : zn.min), e.style.setProperty(Je.max, t ? "none" : zn.max), e.style.setProperty(Je.ruleX, t ? "0" : "1px"), e.style.setProperty(Je.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? ta : "";
}
const Ma = !1, vi = ".menuOpen";
function Oa() {
  const e = j("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Ta = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Oa
}, Fa = Ta.openFreeEnergy;
function bi(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Ma, o = !1;
  const s = j("div", "flex-shrink:0;"), i = j("button", `${ye.base}display:inline-flex;align-items:center;gap:${re.md};padding:${re.sm} ${re.lg};`);
  i.appendChild(Fa()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, s.appendChild(t()), Aa(s)), s.style.display = r ? "" : "none", i.style.background = r ? ye.bgActive : ye.bg, i.setAttribute("aria-expanded", String(r));
  }, c = (u) => {
    u !== r && (r = u, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return i.onclick = () => c(!r), i.onmouseover = () => {
    i.style.background = r ? ye.bgActive : ye.bgHover;
  }, i.onmouseout = () => {
    i.style.background = r ? ye.bgActive : ye.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(i), a(), {
    panel: s,
    isOpen: () => r,
    setOpen: c
  };
}
function ja(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zt = { exports: {} }, tr = {}, Ie = {}, tt = {}, nr = {}, rr = {}, or = {}, oo;
function In() {
  return oo || (oo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(d) {
        if (super(), !e.IDENTIFIER.test(d))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = d;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = n;
    class r extends t {
      constructor(d) {
        super(), this._items = typeof d == "string" ? [d] : d;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const d = this._items[0];
        return d === "" || d === '""';
      }
      get str() {
        var d;
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((k, b) => `${k}${b}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((k, b) => (b instanceof n && (k[b.str] = (k[b.str] || 0) + 1), k), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o($, ...d) {
      const k = [$[0]];
      let b = 0;
      for (; b < d.length; )
        a(k, d[b]), k.push($[++b]);
      return new r(k);
    }
    e._ = o;
    const s = new r("+");
    function i($, ...d) {
      const k = [y($[0])];
      let b = 0;
      for (; b < d.length; )
        k.push(s), a(k, d[b]), k.push(s, y($[++b]));
      return c(k), new r(k);
    }
    e.str = i;
    function a($, d) {
      d instanceof r ? $.push(...d._items) : d instanceof n ? $.push(d) : $.push(g(d));
    }
    e.addCodeArg = a;
    function c($) {
      let d = 1;
      for (; d < $.length - 1; ) {
        if ($[d] === s) {
          const k = u($[d - 1], $[d + 1]);
          if (k !== void 0) {
            $.splice(d - 1, 3, k);
            continue;
          }
          $[d++] = "+";
        }
        d++;
      }
    }
    function u($, d) {
      if (d === '""')
        return $;
      if ($ === '""')
        return d;
      if (typeof $ == "string")
        return d instanceof n || $[$.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${$.slice(0, -1)}${d}"` : d[0] === '"' ? $.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !($ instanceof n))
        return `"${$}${d.slice(1)}`;
    }
    function h($, d) {
      return d.emptyStr() ? $ : $.emptyStr() ? d : i`${$}${d}`;
    }
    e.strConcat = h;
    function g($) {
      return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : y(Array.isArray($) ? $.join(",") : $);
    }
    function m($) {
      return new r(y($));
    }
    e.stringify = m;
    function y($) {
      return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function S($) {
      return typeof $ == "string" && e.IDENTIFIER.test($) ? new r(`.${$}`) : o`[${$}]`;
    }
    e.getProperty = S;
    function _($) {
      if (typeof $ == "string" && e.IDENTIFIER.test($))
        return new r(`${$}`);
      throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function p($) {
      return new r($.toString());
    }
    e.regexpCode = p;
  })(or)), or;
}
var sr = {}, so;
function io() {
  return so || (so = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ In();
    class n extends Error {
      constructor(u) {
        super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
      }
    }
    var r;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(r || (e.UsedValueState = r = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class o {
      constructor({ prefixes: u, parent: h } = {}) {
        this._names = {}, this._prefixes = u, this._parent = h;
      }
      toName(u) {
        return u instanceof t.Name ? u : this.name(u);
      }
      name(u) {
        return new t.Name(this._newName(u));
      }
      _newName(u) {
        const h = this._names[u] || this._nameGroup(u);
        return `${u}${h.index++}`;
      }
      _nameGroup(u) {
        var h, g;
        if (!((g = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || g === void 0) && g.has(u) || this._prefixes && !this._prefixes.has(u))
          throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
        return this._names[u] = { prefix: u, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(u, h) {
        super(h), this.prefix = u;
      }
      setValue(u, { property: h, itemIndex: g }) {
        this.value = u, this.scopePath = (0, t._)`.${new t.Name(h)}[${g}]`;
      }
    }
    e.ValueScopeName = s;
    const i = (0, t._)`\n`;
    class a extends o {
      constructor(u) {
        super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(u) {
        return new s(u, this._newName(u));
      }
      value(u, h) {
        var g;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const m = this.toName(u), { prefix: y } = m, S = (g = h.key) !== null && g !== void 0 ? g : h.ref;
        let _ = this._values[y];
        if (_) {
          const d = _.get(S);
          if (d)
            return d;
        } else
          _ = this._values[y] = /* @__PURE__ */ new Map();
        _.set(S, m);
        const p = this._scope[y] || (this._scope[y] = []), $ = p.length;
        return p[$] = h.ref, m.setValue(h, { property: y, itemIndex: $ }), m;
      }
      getValue(u, h) {
        const g = this._values[u];
        if (g)
          return g.get(h);
      }
      scopeRefs(u, h = this._values) {
        return this._reduceValues(h, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${u}${g.scopePath}`;
        });
      }
      scopeCode(u = this._values, h, g) {
        return this._reduceValues(u, (m) => {
          if (m.value === void 0)
            throw new Error(`CodeGen: name "${m}" has no value`);
          return m.value.code;
        }, h, g);
      }
      _reduceValues(u, h, g = {}, m) {
        let y = t.nil;
        for (const S in u) {
          const _ = u[S];
          if (!_)
            continue;
          const p = g[S] = g[S] || /* @__PURE__ */ new Map();
          _.forEach(($) => {
            if (p.has($))
              return;
            p.set($, r.Started);
            let d = h($);
            if (d) {
              const k = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${k} ${$} = ${d};${this.opts._n}`;
            } else if (d = m?.($))
              y = (0, t._)`${y}${d}${this.opts._n}`;
            else
              throw new n($);
            p.set($, r.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = a;
  })(sr)), sr;
}
var ao;
function se() {
  return ao || (ao = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ In(), n = /* @__PURE__ */ io();
    var r = /* @__PURE__ */ In();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return r._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return r.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return r.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return r.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return r.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return r.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return r.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return r.Name;
    } });
    var o = /* @__PURE__ */ io();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return o.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return o.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return o.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return o.varKinds;
    } }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    class s {
      optimizeNodes() {
        return this;
      }
      optimizeNames(w, C) {
        return this;
      }
    }
    class i extends s {
      constructor(w, C, I) {
        super(), this.varKind = w, this.name = C, this.rhs = I;
      }
      render({ es5: w, _n: C }) {
        const I = w ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${V};` + C;
      }
      optimizeNames(w, C) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = D(this.rhs, w, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends s {
      constructor(w, C, I) {
        super(), this.lhs = w, this.rhs = C, this.sideEffects = I;
      }
      render({ _n: w }) {
        return `${this.lhs} = ${this.rhs};` + w;
      }
      optimizeNames(w, C) {
        if (!(this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects))
          return this.rhs = D(this.rhs, w, C), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return z(w, this.rhs);
      }
    }
    class c extends a {
      constructor(w, C, I, V) {
        super(w, I, V), this.op = C;
      }
      render({ _n: w }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + w;
      }
    }
    class u extends s {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `${this.label}:` + w;
      }
    }
    class h extends s {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `break${this.label ? ` ${this.label}` : ""};` + w;
      }
    }
    class g extends s {
      constructor(w) {
        super(), this.error = w;
      }
      render({ _n: w }) {
        return `throw ${this.error};` + w;
      }
      get names() {
        return this.error.names;
      }
    }
    class m extends s {
      constructor(w) {
        super(), this.code = w;
      }
      render({ _n: w }) {
        return `${this.code};` + w;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(w, C) {
        return this.code = D(this.code, w, C), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class y extends s {
      constructor(w = []) {
        super(), this.nodes = w;
      }
      render(w) {
        return this.nodes.reduce((C, I) => C + I.render(w), "");
      }
      optimizeNodes() {
        const { nodes: w } = this;
        let C = w.length;
        for (; C--; ) {
          const I = w[C].optimizeNodes();
          Array.isArray(I) ? w.splice(C, 1, ...I) : I ? w[C] = I : w.splice(C, 1);
        }
        return w.length > 0 ? this : void 0;
      }
      optimizeNames(w, C) {
        const { nodes: I } = this;
        let V = I.length;
        for (; V--; ) {
          const H = I[V];
          H.optimizeNames(w, C) || (Y(w, H.names), I.splice(V, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((w, C) => A(w, C.names), {});
      }
    }
    class S extends y {
      render(w) {
        return "{" + w._n + super.render(w) + "}" + w._n;
      }
    }
    class _ extends y {
    }
    class p extends S {
    }
    p.kind = "else";
    class $ extends S {
      constructor(w, C) {
        super(C), this.condition = w;
      }
      render(w) {
        let C = `if(${this.condition})` + super.render(w);
        return this.else && (C += "else " + this.else.render(w)), C;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const w = this.condition;
        if (w === !0)
          return this.nodes;
        let C = this.else;
        if (C) {
          const I = C.optimizeNodes();
          C = this.else = Array.isArray(I) ? new p(I) : I;
        }
        if (C)
          return w === !1 ? C instanceof $ ? C : C.nodes : this.nodes.length ? this : new $(G(w), C instanceof $ ? [C] : C.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, C) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(w, C), !!(super.optimizeNames(w, C) || this.else))
          return this.condition = D(this.condition, w, C), this;
      }
      get names() {
        const w = super.names;
        return z(w, this.condition), this.else && A(w, this.else.names), w;
      }
    }
    $.kind = "if";
    class d extends S {
    }
    d.kind = "for";
    class k extends d {
      constructor(w) {
        super(), this.iteration = w;
      }
      render(w) {
        return `for(${this.iteration})` + super.render(w);
      }
      optimizeNames(w, C) {
        if (super.optimizeNames(w, C))
          return this.iteration = D(this.iteration, w, C), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class b extends d {
      constructor(w, C, I, V) {
        super(), this.varKind = w, this.name = C, this.from = I, this.to = V;
      }
      render(w) {
        const C = w.es5 ? n.varKinds.var : this.varKind, { name: I, from: V, to: H } = this;
        return `for(${C} ${I}=${V}; ${I}<${H}; ${I}++)` + super.render(w);
      }
      get names() {
        const w = z(super.names, this.from);
        return z(w, this.to);
      }
    }
    class l extends d {
      constructor(w, C, I, V) {
        super(), this.loop = w, this.varKind = C, this.name = I, this.iterable = V;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, C) {
        if (super.optimizeNames(w, C))
          return this.iterable = D(this.iterable, w, C), this;
      }
      get names() {
        return A(super.names, this.iterable.names);
      }
    }
    class f extends S {
      constructor(w, C, I) {
        super(), this.name = w, this.args = C, this.async = I;
      }
      render(w) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
      }
    }
    f.kind = "func";
    class v extends y {
      render(w) {
        return "return " + super.render(w);
      }
    }
    v.kind = "return";
    class E extends S {
      render(w) {
        let C = "try" + super.render(w);
        return this.catch && (C += this.catch.render(w)), this.finally && (C += this.finally.render(w)), C;
      }
      optimizeNodes() {
        var w, C;
        return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames(w, C) {
        var I, V;
        return super.optimizeNames(w, C), (I = this.catch) === null || I === void 0 || I.optimizeNames(w, C), (V = this.finally) === null || V === void 0 || V.optimizeNames(w, C), this;
      }
      get names() {
        const w = super.names;
        return this.catch && A(w, this.catch.names), this.finally && A(w, this.finally.names), w;
      }
    }
    class P extends S {
      constructor(w) {
        super(), this.error = w;
      }
      render(w) {
        return `catch(${this.error})` + super.render(w);
      }
    }
    P.kind = "catch";
    class T extends S {
      render(w) {
        return "finally" + super.render(w);
      }
    }
    T.kind = "finally";
    class F {
      constructor(w, C = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...C, _n: C.lines ? `
` : "" }, this._extScope = w, this._scope = new n.Scope({ parent: w }), this._nodes = [new _()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(w) {
        return this._scope.name(w);
      }
      // reserves unique name in the external scope
      scopeName(w) {
        return this._extScope.name(w);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(w, C) {
        const I = this._extScope.value(w, C);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(w, C) {
        return this._extScope.getValue(w, C);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(w) {
        return this._extScope.scopeRefs(w, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(w, C, I, V) {
        const H = this._scope.toName(C);
        return I !== void 0 && V && (this._constants[H.str] = I), this._leafNode(new i(w, H, I)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(w, C, I) {
        return this._def(n.varKinds.const, w, C, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(w, C, I) {
        return this._def(n.varKinds.let, w, C, I);
      }
      // `var` declaration with optional assignment
      var(w, C, I) {
        return this._def(n.varKinds.var, w, C, I);
      }
      // assignment code
      assign(w, C, I) {
        return this._leafNode(new a(w, C, I));
      }
      // `+=` code
      add(w, C) {
        return this._leafNode(new c(w, e.operators.ADD, C));
      }
      // appends passed SafeExpr to code or executes Block
      code(w) {
        return typeof w == "function" ? w() : w !== t.nil && this._leafNode(new m(w)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...w) {
        const C = ["{"];
        for (const [I, V] of w)
          C.length > 1 && C.push(","), C.push(I), (I !== V || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, V));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(w, C, I) {
        if (this._blockNode(new $(w)), C && I)
          this.code(C).else().code(I).endIf();
        else if (C)
          this.code(C).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(w) {
        return this._elseNode(new $(w));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new p());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode($, p);
      }
      _for(w, C) {
        return this._blockNode(w), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, C) {
        return this._for(new k(w), C);
      }
      // `for` statement for a range of values
      forRange(w, C, I, V, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ne = this._scope.toName(w);
        return this._for(new b(H, ne, C, I), () => V(ne));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, C, I, V = n.varKinds.const) {
        const H = this._scope.toName(w);
        if (this.opts.es5) {
          const ne = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${ne}.length`, (ee) => {
            this.var(H, (0, t._)`${ne}[${ee}]`), I(H);
          });
        }
        return this._for(new l("of", V, H, C), () => I(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, C, I, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${C})`, I);
        const H = this._scope.toName(w);
        return this._for(new l("in", V, H, C), () => I(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(d);
      }
      // `label` statement
      label(w) {
        return this._leafNode(new u(w));
      }
      // `break` statement
      break(w) {
        return this._leafNode(new h(w));
      }
      // `return` statement
      return(w) {
        const C = new v();
        if (this._blockNode(C), this.code(w), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(v);
      }
      // `try` statement
      try(w, C, I) {
        if (!C && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new E();
        if (this._blockNode(V), this.code(w), C) {
          const H = this.name("e");
          this._currNode = V.catch = new P(H), C(H);
        }
        return I && (this._currNode = V.finally = new T(), this.code(I)), this._endBlockNode(P, T);
      }
      // `throw` statement
      throw(w) {
        return this._leafNode(new g(w));
      }
      // start self-balancing block
      block(w, C) {
        return this._blockStarts.push(this._nodes.length), w && this.code(w).endBlock(C), this;
      }
      // end the current self-balancing block
      endBlock(w) {
        const C = this._blockStarts.pop();
        if (C === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - C;
        if (I < 0 || w !== void 0 && I !== w)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${w} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(w, C = t.nil, I, V) {
        return this._blockNode(new f(w, C, I)), V && this.code(V).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(f);
      }
      optimize(w = 1) {
        for (; w-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(w) {
        return this._currNode.nodes.push(w), this;
      }
      _blockNode(w) {
        this._currNode.nodes.push(w), this._nodes.push(w);
      }
      _endBlockNode(w, C) {
        const I = this._currNode;
        if (I instanceof w || C && I instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${w.kind}/${C.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        const C = this._currNode;
        if (!(C instanceof $))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = C.else = w, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const w = this._nodes;
        return w[w.length - 1];
      }
      set _currNode(w) {
        const C = this._nodes;
        C[C.length - 1] = w;
      }
    }
    e.CodeGen = F;
    function A(N, w) {
      for (const C in w)
        N[C] = (N[C] || 0) + (w[C] || 0);
      return N;
    }
    function z(N, w) {
      return w instanceof t._CodeOrName ? A(N, w.names) : N;
    }
    function D(N, w, C) {
      if (N instanceof t.Name)
        return I(N);
      if (!V(N))
        return N;
      return new t._Code(N._items.reduce((H, ne) => (ne instanceof t.Name && (ne = I(ne)), ne instanceof t._Code ? H.push(...ne._items) : H.push(ne), H), []));
      function I(H) {
        const ne = C[H.str];
        return ne === void 0 || w[H.str] !== 1 ? H : (delete w[H.str], ne);
      }
      function V(H) {
        return H instanceof t._Code && H._items.some((ne) => ne instanceof t.Name && w[ne.str] === 1 && C[ne.str] !== void 0);
      }
    }
    function Y(N, w) {
      for (const C in w)
        N[C] = (N[C] || 0) - (w[C] || 0);
    }
    function G(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${q(N)}`;
    }
    e.not = G;
    const oe = R(e.operators.AND);
    function X(...N) {
      return N.reduce(oe);
    }
    e.and = X;
    const J = R(e.operators.OR);
    function L(...N) {
      return N.reduce(J);
    }
    e.or = L;
    function R(N) {
      return (w, C) => w === t.nil ? C : C === t.nil ? w : (0, t._)`${q(w)} ${N} ${q(C)}`;
    }
    function q(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(rr)), rr;
}
var ie = {}, co;
function ae() {
  if (co) return ie;
  co = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.checkStrictMode = ie.getErrorPath = ie.Type = ie.useFunc = ie.setEvaluated = ie.evaluatedPropsToName = ie.mergeEvaluated = ie.eachItem = ie.unescapeJsonPointer = ie.escapeJsonPointer = ie.escapeFragment = ie.unescapeFragment = ie.schemaRefOrVal = ie.schemaHasRulesButRef = ie.schemaHasRules = ie.checkUnknownRules = ie.alwaysValidSchema = ie.toHash = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ In();
  function n(l) {
    const f = {};
    for (const v of l)
      f[v] = !0;
    return f;
  }
  ie.toHash = n;
  function r(l, f) {
    return typeof f == "boolean" ? f : Object.keys(f).length === 0 ? !0 : (o(l, f), !s(f, l.self.RULES.all));
  }
  ie.alwaysValidSchema = r;
  function o(l, f = l.schema) {
    const { opts: v, self: E } = l;
    if (!v.strictSchema || typeof f == "boolean")
      return;
    const P = E.RULES.keywords;
    for (const T in f)
      P[T] || b(l, `unknown keyword: "${T}"`);
  }
  ie.checkUnknownRules = o;
  function s(l, f) {
    if (typeof l == "boolean")
      return !l;
    for (const v in l)
      if (f[v])
        return !0;
    return !1;
  }
  ie.schemaHasRules = s;
  function i(l, f) {
    if (typeof l == "boolean")
      return !l;
    for (const v in l)
      if (v !== "$ref" && f.all[v])
        return !0;
    return !1;
  }
  ie.schemaHasRulesButRef = i;
  function a({ topSchemaRef: l, schemaPath: f }, v, E, P) {
    if (!P) {
      if (typeof v == "number" || typeof v == "boolean")
        return v;
      if (typeof v == "string")
        return (0, e._)`${v}`;
    }
    return (0, e._)`${l}${f}${(0, e.getProperty)(E)}`;
  }
  ie.schemaRefOrVal = a;
  function c(l) {
    return g(decodeURIComponent(l));
  }
  ie.unescapeFragment = c;
  function u(l) {
    return encodeURIComponent(h(l));
  }
  ie.escapeFragment = u;
  function h(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ie.escapeJsonPointer = h;
  function g(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ie.unescapeJsonPointer = g;
  function m(l, f) {
    if (Array.isArray(l))
      for (const v of l)
        f(v);
    else
      f(l);
  }
  ie.eachItem = m;
  function y({ mergeNames: l, mergeToName: f, mergeValues: v, resultToName: E }) {
    return (P, T, F, A) => {
      const z = F === void 0 ? T : F instanceof e.Name ? (T instanceof e.Name ? l(P, T, F) : f(P, T, F), F) : T instanceof e.Name ? (f(P, F, T), T) : v(T, F);
      return A === e.Name && !(z instanceof e.Name) ? E(P, z) : z;
    };
  }
  ie.mergeEvaluated = {
    props: y({
      mergeNames: (l, f, v) => l.if((0, e._)`${v} !== true && ${f} !== undefined`, () => {
        l.if((0, e._)`${f} === true`, () => l.assign(v, !0), () => l.assign(v, (0, e._)`${v} || {}`).code((0, e._)`Object.assign(${v}, ${f})`));
      }),
      mergeToName: (l, f, v) => l.if((0, e._)`${v} !== true`, () => {
        f === !0 ? l.assign(v, !0) : (l.assign(v, (0, e._)`${v} || {}`), _(l, v, f));
      }),
      mergeValues: (l, f) => l === !0 ? !0 : { ...l, ...f },
      resultToName: S
    }),
    items: y({
      mergeNames: (l, f, v) => l.if((0, e._)`${v} !== true && ${f} !== undefined`, () => l.assign(v, (0, e._)`${f} === true ? true : ${v} > ${f} ? ${v} : ${f}`)),
      mergeToName: (l, f, v) => l.if((0, e._)`${v} !== true`, () => l.assign(v, f === !0 ? !0 : (0, e._)`${v} > ${f} ? ${v} : ${f}`)),
      mergeValues: (l, f) => l === !0 ? !0 : Math.max(l, f),
      resultToName: (l, f) => l.var("items", f)
    })
  };
  function S(l, f) {
    if (f === !0)
      return l.var("props", !0);
    const v = l.var("props", (0, e._)`{}`);
    return f !== void 0 && _(l, v, f), v;
  }
  ie.evaluatedPropsToName = S;
  function _(l, f, v) {
    Object.keys(v).forEach((E) => l.assign((0, e._)`${f}${(0, e.getProperty)(E)}`, !0));
  }
  ie.setEvaluated = _;
  const p = {};
  function $(l, f) {
    return l.scopeValue("func", {
      ref: f,
      code: p[f.code] || (p[f.code] = new t._Code(f.code))
    });
  }
  ie.useFunc = $;
  var d;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(d || (ie.Type = d = {}));
  function k(l, f, v) {
    if (l instanceof e.Name) {
      const E = f === d.Num;
      return v ? E ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : E ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return v ? (0, e.getProperty)(l).toString() : "/" + h(l);
  }
  ie.getErrorPath = k;
  function b(l, f, v = l.opts.strictSchema) {
    if (v) {
      if (f = `strict mode: ${f}`, v === !0)
        throw new Error(f);
      l.self.logger.warn(f);
    }
  }
  return ie.checkStrictMode = b, ie;
}
var It = {}, lo;
function Me() {
  if (lo) return It;
  lo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = {
    // validation function arguments
    data: new e.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new e.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new e.Name("instancePath"),
    parentData: new e.Name("parentData"),
    parentDataProperty: new e.Name("parentDataProperty"),
    rootData: new e.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new e.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new e.Name("vErrors"),
    // null or array of validation errors
    errors: new e.Name("errors"),
    // counter of validation errors
    this: new e.Name("this"),
    // "globals"
    self: new e.Name("self"),
    scope: new e.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new e.Name("json"),
    jsonPos: new e.Name("jsonPos"),
    jsonLen: new e.Name("jsonLen"),
    jsonPart: new e.Name("jsonPart")
  };
  return It.default = t, It;
}
var uo;
function Hn() {
  return uo || (uo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Me();
    e.keywordError = {
      message: ({ keyword: p }) => (0, t.str)`must pass "${p}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: p, schemaType: $ }) => $ ? (0, t.str)`"${p}" keyword must be ${$} ($data)` : (0, t.str)`"${p}" keyword is invalid ($data)`
    };
    function o(p, $ = e.keywordError, d, k) {
      const { it: b } = p, { gen: l, compositeRule: f, allErrors: v } = b, E = g(p, $, d);
      k ?? (f || v) ? c(l, E) : u(b, (0, t._)`[${E}]`);
    }
    e.reportError = o;
    function s(p, $ = e.keywordError, d) {
      const { it: k } = p, { gen: b, compositeRule: l, allErrors: f } = k, v = g(p, $, d);
      c(b, v), l || f || u(k, r.default.vErrors);
    }
    e.reportExtraError = s;
    function i(p, $) {
      p.assign(r.default.errors, $), p.if((0, t._)`${r.default.vErrors} !== null`, () => p.if($, () => p.assign((0, t._)`${r.default.vErrors}.length`, $), () => p.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: p, keyword: $, schemaValue: d, data: k, errsCount: b, it: l }) {
      if (b === void 0)
        throw new Error("ajv implementation error");
      const f = p.name("err");
      p.forRange("i", b, r.default.errors, (v) => {
        p.const(f, (0, t._)`${r.default.vErrors}[${v}]`), p.if((0, t._)`${f}.instancePath === undefined`, () => p.assign((0, t._)`${f}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), p.assign((0, t._)`${f}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${$}`), l.opts.verbose && (p.assign((0, t._)`${f}.schema`, d), p.assign((0, t._)`${f}.data`, k));
      });
    }
    e.extendErrors = a;
    function c(p, $) {
      const d = p.const("err", $);
      p.if((0, t._)`${r.default.vErrors} === null`, () => p.assign(r.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${r.default.vErrors}.push(${d})`), p.code((0, t._)`${r.default.errors}++`);
    }
    function u(p, $) {
      const { gen: d, validateName: k, schemaEnv: b } = p;
      b.$async ? d.throw((0, t._)`new ${p.ValidationError}(${$})`) : (d.assign((0, t._)`${k}.errors`, $), d.return(!1));
    }
    const h = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function g(p, $, d) {
      const { createErrors: k } = p.it;
      return k === !1 ? (0, t._)`{}` : m(p, $, d);
    }
    function m(p, $, d = {}) {
      const { gen: k, it: b } = p, l = [
        y(b, d),
        S(p, d)
      ];
      return _(p, $, l), k.object(...l);
    }
    function y({ errorPath: p }, { instancePath: $ }) {
      const d = $ ? (0, t.str)`${p}${(0, n.getErrorPath)($, n.Type.Str)}` : p;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, d)];
    }
    function S({ keyword: p, it: { errSchemaPath: $ } }, { schemaPath: d, parentSchema: k }) {
      let b = k ? $ : (0, t.str)`${$}/${p}`;
      return d && (b = (0, t.str)`${b}${(0, n.getErrorPath)(d, n.Type.Str)}`), [h.schemaPath, b];
    }
    function _(p, { params: $, message: d }, k) {
      const { keyword: b, data: l, schemaValue: f, it: v } = p, { opts: E, propertyName: P, topSchemaRef: T, schemaPath: F } = v;
      k.push([h.keyword, b], [h.params, typeof $ == "function" ? $(p) : $ || (0, t._)`{}`]), E.messages && k.push([h.message, typeof d == "function" ? d(p) : d]), E.verbose && k.push([h.schema, f], [h.parentSchema, (0, t._)`${T}${F}`], [r.default.data, l]), P && k.push([h.propertyName, P]);
    }
  })(nr)), nr;
}
var fo;
function za() {
  if (fo) return tt;
  fo = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.boolOrEmptySchema = tt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Me(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: u, validateName: h } = a;
    u === !1 ? i(a, !1) : typeof u == "object" && u.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${h}.errors`, null), c.return(!0));
  }
  tt.topBoolOrEmptySchema = o;
  function s(a, c) {
    const { gen: u, schema: h } = a;
    h === !1 ? (u.var(c, !1), i(a)) : u.var(c, !0);
  }
  tt.boolOrEmptySchema = s;
  function i(a, c) {
    const { gen: u, data: h } = a, g = {
      gen: u,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(g, r, void 0, c);
  }
  return tt;
}
var ge = {}, nt = {}, po;
function wi() {
  if (po) return nt;
  po = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.getRules = nt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  nt.isJSONType = n;
  function r() {
    const o = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...o, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, o.number, o.string, o.array, o.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return nt.getRules = r, nt;
}
var De = {}, ho;
function _i() {
  if (ho) return De;
  ho = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.shouldUseRule = De.shouldUseGroup = De.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, s) {
    const i = o.RULES.types[s];
    return i && i !== !0 && t(r, i);
  }
  De.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((s) => n(r, s));
  }
  De.shouldUseGroup = t;
  function n(r, o) {
    var s;
    return r[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((i) => r[i] !== void 0));
  }
  return De.shouldUseRule = n, De;
}
var mo;
function Dn() {
  if (mo) return ge;
  mo = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ wi(), t = /* @__PURE__ */ _i(), n = /* @__PURE__ */ Hn(), r = /* @__PURE__ */ se(), o = /* @__PURE__ */ ae();
  var s;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(s || (ge.DataType = s = {}));
  function i(d) {
    const k = a(d.type);
    if (k.includes("null")) {
      if (d.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!k.length && d.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      d.nullable === !0 && k.push("null");
    }
    return k;
  }
  ge.getSchemaTypes = i;
  function a(d) {
    const k = Array.isArray(d) ? d : d ? [d] : [];
    if (k.every(e.isJSONType))
      return k;
    throw new Error("type must be JSONType or JSONType[]: " + k.join(","));
  }
  ge.getJSONTypes = a;
  function c(d, k) {
    const { gen: b, data: l, opts: f } = d, v = h(k, f.coerceTypes), E = k.length > 0 && !(v.length === 0 && k.length === 1 && (0, t.schemaHasRulesForType)(d, k[0]));
    if (E) {
      const P = S(k, l, f.strictNumbers, s.Wrong);
      b.if(P, () => {
        v.length ? g(d, k, v) : p(d);
      });
    }
    return E;
  }
  ge.coerceAndCheckDataType = c;
  const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(d, k) {
    return k ? d.filter((b) => u.has(b) || k === "array" && b === "array") : [];
  }
  function g(d, k, b) {
    const { gen: l, data: f, opts: v } = d, E = l.let("dataType", (0, r._)`typeof ${f}`), P = l.let("coerced", (0, r._)`undefined`);
    v.coerceTypes === "array" && l.if((0, r._)`${E} == 'object' && Array.isArray(${f}) && ${f}.length == 1`, () => l.assign(f, (0, r._)`${f}[0]`).assign(E, (0, r._)`typeof ${f}`).if(S(k, f, v.strictNumbers), () => l.assign(P, f))), l.if((0, r._)`${P} !== undefined`);
    for (const F of b)
      (u.has(F) || F === "array" && v.coerceTypes === "array") && T(F);
    l.else(), p(d), l.endIf(), l.if((0, r._)`${P} !== undefined`, () => {
      l.assign(f, P), m(d, P);
    });
    function T(F) {
      switch (F) {
        case "string":
          l.elseIf((0, r._)`${E} == "number" || ${E} == "boolean"`).assign(P, (0, r._)`"" + ${f}`).elseIf((0, r._)`${f} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${E} == "boolean" || ${f} === null
              || (${E} == "string" && ${f} && ${f} == +${f})`).assign(P, (0, r._)`+${f}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${E} === "boolean" || ${f} === null
              || (${E} === "string" && ${f} && ${f} == +${f} && !(${f} % 1))`).assign(P, (0, r._)`+${f}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${f} === "false" || ${f} === 0 || ${f} === null`).assign(P, !1).elseIf((0, r._)`${f} === "true" || ${f} === 1`).assign(P, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${f} === "" || ${f} === 0 || ${f} === false`), l.assign(P, null);
          return;
        case "array":
          l.elseIf((0, r._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${f} === null`).assign(P, (0, r._)`[${f}]`);
      }
    }
  }
  function m({ gen: d, parentData: k, parentDataProperty: b }, l) {
    d.if((0, r._)`${k} !== undefined`, () => d.assign((0, r._)`${k}[${b}]`, l));
  }
  function y(d, k, b, l = s.Correct) {
    const f = l === s.Correct ? r.operators.EQ : r.operators.NEQ;
    let v;
    switch (d) {
      case "null":
        return (0, r._)`${k} ${f} null`;
      case "array":
        v = (0, r._)`Array.isArray(${k})`;
        break;
      case "object":
        v = (0, r._)`${k} && typeof ${k} == "object" && !Array.isArray(${k})`;
        break;
      case "integer":
        v = E((0, r._)`!(${k} % 1) && !isNaN(${k})`);
        break;
      case "number":
        v = E();
        break;
      default:
        return (0, r._)`typeof ${k} ${f} ${d}`;
    }
    return l === s.Correct ? v : (0, r.not)(v);
    function E(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${k} == "number"`, P, b ? (0, r._)`isFinite(${k})` : r.nil);
    }
  }
  ge.checkDataType = y;
  function S(d, k, b, l) {
    if (d.length === 1)
      return y(d[0], k, b, l);
    let f;
    const v = (0, o.toHash)(d);
    if (v.array && v.object) {
      const E = (0, r._)`typeof ${k} != "object"`;
      f = v.null ? E : (0, r._)`!${k} || ${E}`, delete v.null, delete v.array, delete v.object;
    } else
      f = r.nil;
    v.number && delete v.integer;
    for (const E in v)
      f = (0, r.and)(f, y(E, k, b, l));
    return f;
  }
  ge.checkDataTypes = S;
  const _ = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: k }) => typeof d == "string" ? (0, r._)`{type: ${d}}` : (0, r._)`{type: ${k}}`
  };
  function p(d) {
    const k = $(d);
    (0, n.reportError)(k, _);
  }
  ge.reportTypeError = p;
  function $(d) {
    const { gen: k, data: b, schema: l } = d, f = (0, o.schemaRefOrVal)(d, l, "type");
    return {
      gen: k,
      keyword: "type",
      data: b,
      schema: l.type,
      schemaCode: f,
      schemaValue: f,
      parentSchema: l,
      params: {},
      it: d
    };
  }
  return ge;
}
var Ct = {}, go;
function Ia() {
  if (go) return Ct;
  go = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.assignDefaults = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae();
  function n(o, s) {
    const { properties: i, items: a } = o.schema;
    if (s === "object" && i)
      for (const c in i)
        r(o, c, i[c].default);
    else s === "array" && Array.isArray(a) && a.forEach((c, u) => r(o, u, c.default));
  }
  Ct.assignDefaults = n;
  function r(o, s, i) {
    const { gen: a, compositeRule: c, data: u, opts: h } = o;
    if (i === void 0)
      return;
    const g = (0, e._)`${u}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let m = (0, e._)`${g} === undefined`;
    h.useDefaults === "empty" && (m = (0, e._)`${m} || ${g} === null || ${g} === ""`), a.if(m, (0, e._)`${g} = ${(0, e.stringify)(i)}`);
  }
  return Ct;
}
var Ee = {}, de = {}, yo;
function Oe() {
  if (yo) return de;
  yo = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ ae();
  function o(d, k) {
    const { gen: b, data: l, it: f } = d;
    b.if(h(b, l, k, f.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${k}` }, !0), d.error();
    });
  }
  de.checkReportMissingProp = o;
  function s({ gen: d, data: k, it: { opts: b } }, l, f) {
    return (0, e.or)(...l.map((v) => (0, e.and)(h(d, k, v, b.ownProperties), (0, e._)`${f} = ${v}`)));
  }
  de.checkMissingProp = s;
  function i(d, k) {
    d.setParams({ missingProperty: k }, !0), d.error();
  }
  de.reportMissingProp = i;
  function a(d) {
    return d.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  de.hasPropFunc = a;
  function c(d, k, b) {
    return (0, e._)`${a(d)}.call(${k}, ${b})`;
  }
  de.isOwnProperty = c;
  function u(d, k, b, l) {
    const f = (0, e._)`${k}${(0, e.getProperty)(b)} !== undefined`;
    return l ? (0, e._)`${f} && ${c(d, k, b)}` : f;
  }
  de.propertyInData = u;
  function h(d, k, b, l) {
    const f = (0, e._)`${k}${(0, e.getProperty)(b)} === undefined`;
    return l ? (0, e.or)(f, (0, e.not)(c(d, k, b))) : f;
  }
  de.noPropertyInData = h;
  function g(d) {
    return d ? Object.keys(d).filter((k) => k !== "__proto__") : [];
  }
  de.allSchemaProperties = g;
  function m(d, k) {
    return g(k).filter((b) => !(0, t.alwaysValidSchema)(d, k[b]));
  }
  de.schemaProperties = m;
  function y({ schemaCode: d, data: k, it: { gen: b, topSchemaRef: l, schemaPath: f, errorPath: v }, it: E }, P, T, F) {
    const A = F ? (0, e._)`${d}, ${k}, ${l}${f}` : k, z = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, v)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && z.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const D = (0, e._)`${A}, ${b.object(...z)}`;
    return T !== e.nil ? (0, e._)`${P}.call(${T}, ${D})` : (0, e._)`${P}(${D})`;
  }
  de.callValidateCode = y;
  const S = (0, e._)`new RegExp`;
  function _({ gen: d, it: { opts: k } }, b) {
    const l = k.unicodeRegExp ? "u" : "", { regExp: f } = k.code, v = f(b, l);
    return d.scopeValue("pattern", {
      key: v.toString(),
      ref: v,
      code: (0, e._)`${f.code === "new RegExp" ? S : (0, r.useFunc)(d, f)}(${b}, ${l})`
    });
  }
  de.usePattern = _;
  function p(d) {
    const { gen: k, data: b, keyword: l, it: f } = d, v = k.name("valid");
    if (f.allErrors) {
      const P = k.let("valid", !0);
      return E(() => k.assign(P, !1)), P;
    }
    return k.var(v, !0), E(() => k.break()), v;
    function E(P) {
      const T = k.const("len", (0, e._)`${b}.length`);
      k.forRange("i", 0, T, (F) => {
        d.subschema({
          keyword: l,
          dataProp: F,
          dataPropType: t.Type.Num
        }, v), k.if((0, e.not)(v), P);
      });
    }
  }
  de.validateArray = p;
  function $(d) {
    const { gen: k, schema: b, keyword: l, it: f } = d;
    if (!Array.isArray(b))
      throw new Error("ajv implementation error");
    if (b.some((T) => (0, t.alwaysValidSchema)(f, T)) && !f.opts.unevaluated)
      return;
    const E = k.let("valid", !1), P = k.name("_valid");
    k.block(() => b.forEach((T, F) => {
      const A = d.subschema({
        keyword: l,
        schemaProp: F,
        compositeRule: !0
      }, P);
      k.assign(E, (0, e._)`${E} || ${P}`), d.mergeValidEvaluated(A, P) || k.if((0, e.not)(E));
    })), d.result(E, () => d.reset(), () => d.error(!0));
  }
  return de.validateUnion = $, de;
}
var $o;
function Da() {
  if ($o) return Ee;
  $o = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.validateKeywordUsage = Ee.validSchemaType = Ee.funcKeywordCode = Ee.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Hn();
  function o(m, y) {
    const { gen: S, keyword: _, schema: p, parentSchema: $, it: d } = m, k = y.macro.call(d.self, p, $, d), b = u(S, _, k);
    d.opts.validateSchema !== !1 && d.self.validateSchema(k, !0);
    const l = S.name("valid");
    m.subschema({
      schema: k,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${_}`,
      topSchemaRef: b,
      compositeRule: !0
    }, l), m.pass(l, () => m.error(!0));
  }
  Ee.macroKeywordCode = o;
  function s(m, y) {
    var S;
    const { gen: _, keyword: p, schema: $, parentSchema: d, $data: k, it: b } = m;
    c(b, y);
    const l = !k && y.compile ? y.compile.call(b.self, $, d, b) : y.validate, f = u(_, p, l), v = _.let("valid");
    m.block$data(v, E), m.ok((S = y.valid) !== null && S !== void 0 ? S : v);
    function E() {
      if (y.errors === !1)
        F(), y.modifying && i(m), A(() => m.error());
      else {
        const z = y.async ? P() : T();
        y.modifying && i(m), A(() => a(m, z));
      }
    }
    function P() {
      const z = _.let("ruleErrs", null);
      return _.try(() => F((0, e._)`await `), (D) => _.assign(v, !1).if((0, e._)`${D} instanceof ${b.ValidationError}`, () => _.assign(z, (0, e._)`${D}.errors`), () => _.throw(D))), z;
    }
    function T() {
      const z = (0, e._)`${f}.errors`;
      return _.assign(z, null), F(e.nil), z;
    }
    function F(z = y.async ? (0, e._)`await ` : e.nil) {
      const D = b.opts.passContext ? t.default.this : t.default.self, Y = !("compile" in y && !k || y.schema === !1);
      _.assign(v, (0, e._)`${z}${(0, n.callValidateCode)(m, f, D, Y)}`, y.modifying);
    }
    function A(z) {
      var D;
      _.if((0, e.not)((D = y.valid) !== null && D !== void 0 ? D : v), z);
    }
  }
  Ee.funcKeywordCode = s;
  function i(m) {
    const { gen: y, data: S, it: _ } = m;
    y.if(_.parentData, () => y.assign(S, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a(m, y) {
    const { gen: S } = m;
    S.if((0, e._)`Array.isArray(${y})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(m);
    }, () => m.error());
  }
  function c({ schemaEnv: m }, y) {
    if (y.async && !m.$async)
      throw new Error("async keyword in sync schema");
  }
  function u(m, y, S) {
    if (S === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return m.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function h(m, y, S = !1) {
    return !y.length || y.some((_) => _ === "array" ? Array.isArray(m) : _ === "object" ? m && typeof m == "object" && !Array.isArray(m) : typeof m == _ || S && typeof m > "u");
  }
  Ee.validSchemaType = h;
  function g({ schema: m, opts: y, self: S, errSchemaPath: _ }, p, $) {
    if (Array.isArray(p.keyword) ? !p.keyword.includes($) : p.keyword !== $)
      throw new Error("ajv implementation error");
    const d = p.dependencies;
    if (d?.some((k) => !Object.prototype.hasOwnProperty.call(m, k)))
      throw new Error(`parent schema must have dependencies of ${$}: ${d.join(",")}`);
    if (p.validateSchema && !p.validateSchema(m[$])) {
      const b = `keyword "${$}" value is invalid at path "${_}": ` + S.errorsText(p.validateSchema.errors);
      if (y.validateSchema === "log")
        S.logger.error(b);
      else
        throw new Error(b);
    }
  }
  return Ee.validateKeywordUsage = g, Ee;
}
var qe = {}, vo;
function qa() {
  if (vo) return qe;
  vo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.extendSubschemaMode = qe.extendSubschemaData = qe.getSubschema = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae();
  function n(s, { keyword: i, schemaProp: a, schema: c, schemaPath: u, errSchemaPath: h, topSchemaRef: g }) {
    if (i !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const m = s.schema[i];
      return a === void 0 ? {
        schema: m,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}`
      } : {
        schema: m[a],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (u === void 0 || h === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: u,
        topSchemaRef: g,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  qe.getSubschema = n;
  function r(s, i, { dataProp: a, dataPropType: c, data: u, dataTypes: h, propertyName: g }) {
    if (u !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: m } = i;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: _, opts: p } = i, $ = m.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      y($), s.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, c, p.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${a}`, s.dataPathArr = [..._, s.parentDataProperty];
    }
    if (u !== void 0) {
      const S = u instanceof e.Name ? u : m.let("data", u, !0);
      y(S), g !== void 0 && (s.propertyName = g);
    }
    h && (s.dataTypes = h);
    function y(S) {
      s.data = S, s.dataLevel = i.dataLevel + 1, s.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), s.parentData = i.data, s.dataNames = [...i.dataNames, S];
    }
  }
  qe.extendSubschemaData = r;
  function o(s, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: c, createErrors: u, allErrors: h }) {
    c !== void 0 && (s.compositeRule = c), u !== void 0 && (s.createErrors = u), h !== void 0 && (s.allErrors = h), s.jtdDiscriminator = i, s.jtdMetadata = a;
  }
  return qe.extendSubschemaMode = o, qe;
}
var ve = {}, ir, bo;
function Si() {
  return bo || (bo = 1, ir = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, o, s;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (o = r; o-- !== 0; )
          if (!e(t[o], n[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (s = Object.keys(t), r = s.length, r !== Object.keys(n).length) return !1;
      for (o = r; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, s[o])) return !1;
      for (o = r; o-- !== 0; ) {
        var i = s[o];
        if (!e(t[i], n[i])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), ir;
}
var ar = { exports: {} }, wo;
function La() {
  if (wo) return ar.exports;
  wo = 1;
  var e = ar.exports = function(r, o, s) {
    typeof o == "function" && (s = o, o = {}), s = o.cb || s;
    var i = typeof s == "function" ? s : s.pre || function() {
    }, a = s.post || function() {
    };
    t(o, i, a, r, "", r);
  };
  e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, e.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function t(r, o, s, i, a, c, u, h, g, m) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      o(i, a, c, u, h, g, m);
      for (var y in i) {
        var S = i[y];
        if (Array.isArray(S)) {
          if (y in e.arrayKeywords)
            for (var _ = 0; _ < S.length; _++)
              t(r, o, s, S[_], a + "/" + y + "/" + _, c, a, y, i, _);
        } else if (y in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var p in S)
              t(r, o, s, S[p], a + "/" + y + "/" + n(p), c, a, y, i, p);
        } else (y in e.keywords || r.allKeys && !(y in e.skipKeywords)) && t(r, o, s, S, a + "/" + y, c, a, y, i);
      }
      s(i, a, c, u, h, g, m);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ar.exports;
}
var _o;
function Gn() {
  if (_o) return ve;
  _o = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.getSchemaRefs = ve.resolveUrl = ve.normalizeId = ve._getFullPath = ve.getFullPath = ve.inlineRef = void 0;
  const e = /* @__PURE__ */ ae(), t = Si(), n = La(), r = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function o(_, p = !0) {
    return typeof _ == "boolean" ? !0 : p === !0 ? !i(_) : p ? a(_) <= p : !1;
  }
  ve.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(_) {
    for (const p in _) {
      if (s.has(p))
        return !0;
      const $ = _[p];
      if (Array.isArray($) && $.some(i) || typeof $ == "object" && i($))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let p = 0;
    for (const $ in _) {
      if ($ === "$ref")
        return 1 / 0;
      if (p++, !r.has($) && (typeof _[$] == "object" && (0, e.eachItem)(_[$], (d) => p += a(d)), p === 1 / 0))
        return 1 / 0;
    }
    return p;
  }
  function c(_, p = "", $) {
    $ !== !1 && (p = g(p));
    const d = _.parse(p);
    return u(_, d);
  }
  ve.getFullPath = c;
  function u(_, p) {
    return _.serialize(p).split("#")[0] + "#";
  }
  ve._getFullPath = u;
  const h = /#\/?$/;
  function g(_) {
    return _ ? _.replace(h, "") : "";
  }
  ve.normalizeId = g;
  function m(_, p, $) {
    return $ = g($), _.resolve(p, $);
  }
  ve.resolveUrl = m;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function S(_, p) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: $, uriResolver: d } = this.opts, k = g(_[$] || p), b = { "": k }, l = c(d, k, !1), f = {}, v = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (T, F, A, z) => {
      if (z === void 0)
        return;
      const D = l + F;
      let Y = b[z];
      typeof T[$] == "string" && (Y = G.call(this, T[$])), oe.call(this, T.$anchor), oe.call(this, T.$dynamicAnchor), b[F] = Y;
      function G(X) {
        const J = this.opts.uriResolver.resolve;
        if (X = g(Y ? J(Y, X) : X), v.has(X))
          throw P(X);
        v.add(X);
        let L = this.refs[X];
        return typeof L == "string" && (L = this.refs[L]), typeof L == "object" ? E(T, L.schema, X) : X !== g(D) && (X[0] === "#" ? (E(T, f[X], X), f[X] = T) : this.refs[X] = D), X;
      }
      function oe(X) {
        if (typeof X == "string") {
          if (!y.test(X))
            throw new Error(`invalid anchor "${X}"`);
          G.call(this, `#${X}`);
        }
      }
    }), f;
    function E(T, F, A) {
      if (F !== void 0 && !t(T, F))
        throw P(A);
    }
    function P(T) {
      return new Error(`reference "${T}" resolves to more than one schema`);
    }
  }
  return ve.getSchemaRefs = S, ve;
}
var So;
function Wn() {
  if (So) return Ie;
  So = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getData = Ie.KeywordCxt = Ie.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ za(), t = /* @__PURE__ */ Dn(), n = /* @__PURE__ */ _i(), r = /* @__PURE__ */ Dn(), o = /* @__PURE__ */ Ia(), s = /* @__PURE__ */ Da(), i = /* @__PURE__ */ qa(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ Me(), u = /* @__PURE__ */ Gn(), h = /* @__PURE__ */ ae(), g = /* @__PURE__ */ Hn();
  function m(x) {
    if (l(x) && (v(x), b(x))) {
      p(x);
      return;
    }
    y(x, () => (0, e.topBoolOrEmptySchema)(x));
  }
  Ie.validateFunctionCode = m;
  function y({ gen: x, validateName: M, schema: B, schemaEnv: W, opts: K }, Q) {
    K.code.es5 ? x.func(M, (0, a._)`${c.default.data}, ${c.default.valCxt}`, W.$async, () => {
      x.code((0, a._)`"use strict"; ${d(B, K)}`), _(x, K), x.code(Q);
    }) : x.func(M, (0, a._)`${c.default.data}, ${S(K)}`, W.$async, () => x.code(d(B, K)).code(Q));
  }
  function S(x) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${x.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(x, M) {
    x.if(c.default.valCxt, () => {
      x.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), x.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), x.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), x.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), M.dynamicRef && x.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      x.var(c.default.instancePath, (0, a._)`""`), x.var(c.default.parentData, (0, a._)`undefined`), x.var(c.default.parentDataProperty, (0, a._)`undefined`), x.var(c.default.rootData, c.default.data), M.dynamicRef && x.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function p(x) {
    const { schema: M, opts: B, gen: W } = x;
    y(x, () => {
      B.$comment && M.$comment && z(x), T(x), W.let(c.default.vErrors, null), W.let(c.default.errors, 0), B.unevaluated && $(x), E(x), D(x);
    });
  }
  function $(x) {
    const { gen: M, validateName: B } = x;
    x.evaluated = M.const("evaluated", (0, a._)`${B}.evaluated`), M.if((0, a._)`${x.evaluated}.dynamicProps`, () => M.assign((0, a._)`${x.evaluated}.props`, (0, a._)`undefined`)), M.if((0, a._)`${x.evaluated}.dynamicItems`, () => M.assign((0, a._)`${x.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(x, M) {
    const B = typeof x == "object" && x[M.schemaId];
    return B && (M.code.source || M.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function k(x, M) {
    if (l(x) && (v(x), b(x))) {
      f(x, M);
      return;
    }
    (0, e.boolOrEmptySchema)(x, M);
  }
  function b({ schema: x, self: M }) {
    if (typeof x == "boolean")
      return !x;
    for (const B in x)
      if (M.RULES.all[B])
        return !0;
    return !1;
  }
  function l(x) {
    return typeof x.schema != "boolean";
  }
  function f(x, M) {
    const { schema: B, gen: W, opts: K } = x;
    K.$comment && B.$comment && z(x), F(x), A(x);
    const Q = W.const("_errs", c.default.errors);
    E(x, Q), W.var(M, (0, a._)`${Q} === ${c.default.errors}`);
  }
  function v(x) {
    (0, h.checkUnknownRules)(x), P(x);
  }
  function E(x, M) {
    if (x.opts.jtd)
      return G(x, [], !1, M);
    const B = (0, t.getSchemaTypes)(x.schema), W = (0, t.coerceAndCheckDataType)(x, B);
    G(x, B, !W, M);
  }
  function P(x) {
    const { schema: M, errSchemaPath: B, opts: W, self: K } = x;
    M.$ref && W.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(M, K.RULES) && K.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function T(x) {
    const { schema: M, opts: B } = x;
    M.default !== void 0 && B.useDefaults && B.strictSchema && (0, h.checkStrictMode)(x, "default is ignored in the schema root");
  }
  function F(x) {
    const M = x.schema[x.opts.schemaId];
    M && (x.baseId = (0, u.resolveUrl)(x.opts.uriResolver, x.baseId, M));
  }
  function A(x) {
    if (x.schema.$async && !x.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function z({ gen: x, schemaEnv: M, schema: B, errSchemaPath: W, opts: K }) {
    const Q = B.$comment;
    if (K.$comment === !0)
      x.code((0, a._)`${c.default.self}.logger.log(${Q})`);
    else if (typeof K.$comment == "function") {
      const te = (0, a.str)`${W}/$comment`, ue = x.scopeValue("root", { ref: M.root });
      x.code((0, a._)`${c.default.self}.opts.$comment(${Q}, ${te}, ${ue}.schema)`);
    }
  }
  function D(x) {
    const { gen: M, schemaEnv: B, validateName: W, ValidationError: K, opts: Q } = x;
    B.$async ? M.if((0, a._)`${c.default.errors} === 0`, () => M.return(c.default.data), () => M.throw((0, a._)`new ${K}(${c.default.vErrors})`)) : (M.assign((0, a._)`${W}.errors`, c.default.vErrors), Q.unevaluated && Y(x), M.return((0, a._)`${c.default.errors} === 0`));
  }
  function Y({ gen: x, evaluated: M, props: B, items: W }) {
    B instanceof a.Name && x.assign((0, a._)`${M}.props`, B), W instanceof a.Name && x.assign((0, a._)`${M}.items`, W);
  }
  function G(x, M, B, W) {
    const { gen: K, schema: Q, data: te, allErrors: ue, opts: ce, self: me } = x, { RULES: pe } = me;
    if (Q.$ref && (ce.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(Q, pe))) {
      K.block(() => V(x, "$ref", pe.all.$ref.definition));
      return;
    }
    ce.jtd || X(x, M), K.block(() => {
      for (const $e of pe.rules)
        je($e);
      je(pe.post);
    });
    function je($e) {
      (0, n.shouldUseGroup)(Q, $e) && ($e.type ? (K.if((0, r.checkDataType)($e.type, te, ce.strictNumbers)), oe(x, $e), M.length === 1 && M[0] === $e.type && B && (K.else(), (0, r.reportTypeError)(x)), K.endIf()) : oe(x, $e), ue || K.if((0, a._)`${c.default.errors} === ${W || 0}`));
    }
  }
  function oe(x, M) {
    const { gen: B, schema: W, opts: { useDefaults: K } } = x;
    K && (0, o.assignDefaults)(x, M.type), B.block(() => {
      for (const Q of M.rules)
        (0, n.shouldUseRule)(W, Q) && V(x, Q.keyword, Q.definition, M.type);
    });
  }
  function X(x, M) {
    x.schemaEnv.meta || !x.opts.strictTypes || (J(x, M), x.opts.allowUnionTypes || L(x, M), R(x, x.dataTypes));
  }
  function J(x, M) {
    if (M.length) {
      if (!x.dataTypes.length) {
        x.dataTypes = M;
        return;
      }
      M.forEach((B) => {
        N(x.dataTypes, B) || C(x, `type "${B}" not allowed by context "${x.dataTypes.join(",")}"`);
      }), w(x, M);
    }
  }
  function L(x, M) {
    M.length > 1 && !(M.length === 2 && M.includes("null")) && C(x, "use allowUnionTypes to allow union type keyword");
  }
  function R(x, M) {
    const B = x.self.RULES.all;
    for (const W in B) {
      const K = B[W];
      if (typeof K == "object" && (0, n.shouldUseRule)(x.schema, K)) {
        const { type: Q } = K.definition;
        Q.length && !Q.some((te) => q(M, te)) && C(x, `missing type "${Q.join(",")}" for keyword "${W}"`);
      }
    }
  }
  function q(x, M) {
    return x.includes(M) || M === "number" && x.includes("integer");
  }
  function N(x, M) {
    return x.includes(M) || M === "integer" && x.includes("number");
  }
  function w(x, M) {
    const B = [];
    for (const W of x.dataTypes)
      N(M, W) ? B.push(W) : M.includes("integer") && W === "number" && B.push("integer");
    x.dataTypes = B;
  }
  function C(x, M) {
    const B = x.schemaEnv.baseId + x.errSchemaPath;
    M += ` at "${B}" (strictTypes)`, (0, h.checkStrictMode)(x, M, x.opts.strictTypes);
  }
  class I {
    constructor(M, B, W) {
      if ((0, s.validateKeywordUsage)(M, B, W), this.gen = M.gen, this.allErrors = M.allErrors, this.keyword = W, this.data = M.data, this.schema = M.schema[W], this.$data = B.$data && M.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(M, this.schema, W, this.$data), this.schemaType = B.schemaType, this.parentSchema = M.schema, this.params = {}, this.it = M, this.def = B, this.$data)
        this.schemaCode = M.gen.const("vSchema", ee(this.$data, M));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${W} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = M.gen.const("_errs", c.default.errors));
    }
    result(M, B, W) {
      this.failResult((0, a.not)(M), B, W);
    }
    failResult(M, B, W) {
      this.gen.if(M), W ? W() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(M, B) {
      this.failResult((0, a.not)(M), void 0, B);
    }
    fail(M) {
      if (M === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(M), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(M) {
      if (!this.$data)
        return this.fail(M);
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), M)})`);
    }
    error(M, B, W) {
      if (B) {
        this.setParams(B), this._error(M, W), this.setParams({});
        return;
      }
      this._error(M, W);
    }
    _error(M, B) {
      (M ? g.reportExtraError : g.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(M) {
      this.allErrors || this.gen.if(M);
    }
    setParams(M, B) {
      B ? Object.assign(this.params, M) : this.params = M;
    }
    block$data(M, B, W = a.nil) {
      this.gen.block(() => {
        this.check$data(M, W), B();
      });
    }
    check$data(M = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: W, schemaCode: K, schemaType: Q, def: te } = this;
      W.if((0, a.or)((0, a._)`${K} === undefined`, B)), M !== a.nil && W.assign(M, !0), (Q.length || te.validateSchema) && (W.elseIf(this.invalid$data()), this.$dataError(), M !== a.nil && W.assign(M, !1)), W.else();
    }
    invalid$data() {
      const { gen: M, schemaCode: B, schemaType: W, def: K, it: Q } = this;
      return (0, a.or)(te(), ue());
      function te() {
        if (W.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const ce = Array.isArray(W) ? W : [W];
          return (0, a._)`${(0, r.checkDataTypes)(ce, B, Q.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ue() {
        if (K.validateSchema) {
          const ce = M.scopeValue("validate$data", { ref: K.validateSchema });
          return (0, a._)`!${ce}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(M, B) {
      const W = (0, i.getSubschema)(this.it, M);
      (0, i.extendSubschemaData)(W, this.it, M), (0, i.extendSubschemaMode)(W, M);
      const K = { ...this.it, ...W, items: void 0, props: void 0 };
      return k(K, B), K;
    }
    mergeEvaluated(M, B) {
      const { it: W, gen: K } = this;
      W.opts.unevaluated && (W.props !== !0 && M.props !== void 0 && (W.props = h.mergeEvaluated.props(K, M.props, W.props, B)), W.items !== !0 && M.items !== void 0 && (W.items = h.mergeEvaluated.items(K, M.items, W.items, B)));
    }
    mergeValidEvaluated(M, B) {
      const { it: W, gen: K } = this;
      if (W.opts.unevaluated && (W.props !== !0 || W.items !== !0))
        return K.if(B, () => this.mergeEvaluated(M, a.Name)), !0;
    }
  }
  Ie.KeywordCxt = I;
  function V(x, M, B, W) {
    const K = new I(x, B, M);
    "code" in B ? B.code(K, W) : K.$data && B.validate ? (0, s.funcKeywordCode)(K, B) : "macro" in B ? (0, s.macroKeywordCode)(K, B) : (B.compile || B.validate) && (0, s.funcKeywordCode)(K, B);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ne = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(x, { dataLevel: M, dataNames: B, dataPathArr: W }) {
    let K, Q;
    if (x === "")
      return c.default.rootData;
    if (x[0] === "/") {
      if (!H.test(x))
        throw new Error(`Invalid JSON-pointer: ${x}`);
      K = x, Q = c.default.rootData;
    } else {
      const me = ne.exec(x);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${x}`);
      const pe = +me[1];
      if (K = me[2], K === "#") {
        if (pe >= M)
          throw new Error(ce("property/index", pe));
        return W[M - pe];
      }
      if (pe > M)
        throw new Error(ce("data", pe));
      if (Q = B[M - pe], !K)
        return Q;
    }
    let te = Q;
    const ue = K.split("/");
    for (const me of ue)
      me && (Q = (0, a._)`${Q}${(0, a.getProperty)((0, h.unescapeJsonPointer)(me))}`, te = (0, a._)`${te} && ${Q}`);
    return te;
    function ce(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${M}`;
    }
  }
  return Ie.getData = ee, Ie;
}
var Dt = {}, ko;
function Fr() {
  if (ko) return Dt;
  ko = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Dt.default = e, Dt;
}
var qt = {}, Co;
function Jn() {
  if (Co) return qt;
  Co = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gn();
  class t extends Error {
    constructor(r, o, s, i) {
      super(i || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return qt.default = t, qt;
}
var be = {}, Eo;
function Yn() {
  if (Eo) return be;
  Eo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.resolveSchema = be.getCompilingSchema = be.resolveRef = be.compileSchema = be.SchemaEnv = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Fr(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ Gn(), o = /* @__PURE__ */ ae(), s = /* @__PURE__ */ Wn();
  class i {
    constructor($) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let k;
      typeof $.schema == "object" && (k = $.schema), this.schema = $.schema, this.schemaId = $.schemaId, this.root = $.root || this, this.baseId = (d = $.baseId) !== null && d !== void 0 ? d : (0, r.normalizeId)(k?.[$.schemaId || "$id"]), this.schemaPath = $.schemaPath, this.localRefs = $.localRefs, this.meta = $.meta, this.$async = k?.$async, this.refs = {};
    }
  }
  be.SchemaEnv = i;
  function a(p) {
    const $ = h.call(this, p);
    if ($)
      return $;
    const d = (0, r.getFullPath)(this.opts.uriResolver, p.root.baseId), { es5: k, lines: b } = this.opts.code, { ownProperties: l } = this.opts, f = new e.CodeGen(this.scope, { es5: k, lines: b, ownProperties: l });
    let v;
    p.$async && (v = f.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const E = f.scopeName("validate");
    p.validateName = E;
    const P = {
      gen: f,
      allErrors: this.opts.allErrors,
      data: n.default.data,
      parentData: n.default.parentData,
      parentDataProperty: n.default.parentDataProperty,
      dataNames: [n.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? { ref: p.schema, code: (0, e.stringify)(p.schema) } : { ref: p.schema }),
      validateName: E,
      ValidationError: v,
      schema: p.schema,
      schemaEnv: p,
      rootId: d,
      baseId: p.baseId || d,
      schemaPath: e.nil,
      errSchemaPath: p.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let T;
    try {
      this._compilations.add(p), (0, s.validateFunctionCode)(P), f.optimize(this.opts.code.optimize);
      const F = f.toString();
      T = `${f.scopeRefs(n.default.scope)}return ${F}`, this.opts.code.process && (T = this.opts.code.process(T, p));
      const z = new Function(`${n.default.self}`, `${n.default.scope}`, T)(this, this.scope.get());
      if (this.scope.value(E, { ref: z }), z.errors = null, z.schema = p.schema, z.schemaEnv = p, p.$async && (z.$async = !0), this.opts.code.source === !0 && (z.source = { validateName: E, validateCode: F, scopeValues: f._values }), this.opts.unevaluated) {
        const { props: D, items: Y } = P;
        z.evaluated = {
          props: D instanceof e.Name ? void 0 : D,
          items: Y instanceof e.Name ? void 0 : Y,
          dynamicProps: D instanceof e.Name,
          dynamicItems: Y instanceof e.Name
        }, z.source && (z.source.evaluated = (0, e.stringify)(z.evaluated));
      }
      return p.validate = z, p;
    } catch (F) {
      throw delete p.validate, delete p.validateName, T && this.logger.error("Error compiling schema, function code:", T), F;
    } finally {
      this._compilations.delete(p);
    }
  }
  be.compileSchema = a;
  function c(p, $, d) {
    var k;
    d = (0, r.resolveUrl)(this.opts.uriResolver, $, d);
    const b = p.refs[d];
    if (b)
      return b;
    let l = m.call(this, p, d);
    if (l === void 0) {
      const f = (k = p.localRefs) === null || k === void 0 ? void 0 : k[d], { schemaId: v } = this.opts;
      f && (l = new i({ schema: f, schemaId: v, root: p, baseId: $ }));
    }
    if (l !== void 0)
      return p.refs[d] = u.call(this, l);
  }
  be.resolveRef = c;
  function u(p) {
    return (0, r.inlineRef)(p.schema, this.opts.inlineRefs) ? p.schema : p.validate ? p : a.call(this, p);
  }
  function h(p) {
    for (const $ of this._compilations)
      if (g($, p))
        return $;
  }
  be.getCompilingSchema = h;
  function g(p, $) {
    return p.schema === $.schema && p.root === $.root && p.baseId === $.baseId;
  }
  function m(p, $) {
    let d;
    for (; typeof (d = this.refs[$]) == "string"; )
      $ = d;
    return d || this.schemas[$] || y.call(this, p, $);
  }
  function y(p, $) {
    const d = this.opts.uriResolver.parse($), k = (0, r._getFullPath)(this.opts.uriResolver, d);
    let b = (0, r.getFullPath)(this.opts.uriResolver, p.baseId, void 0);
    if (Object.keys(p.schema).length > 0 && k === b)
      return _.call(this, d, p);
    const l = (0, r.normalizeId)(k), f = this.refs[l] || this.schemas[l];
    if (typeof f == "string") {
      const v = y.call(this, p, f);
      return typeof v?.schema != "object" ? void 0 : _.call(this, d, v);
    }
    if (typeof f?.schema == "object") {
      if (f.validate || a.call(this, f), l === (0, r.normalizeId)($)) {
        const { schema: v } = f, { schemaId: E } = this.opts, P = v[E];
        return P && (b = (0, r.resolveUrl)(this.opts.uriResolver, b, P)), new i({ schema: v, schemaId: E, root: p, baseId: b });
      }
      return _.call(this, d, f);
    }
  }
  be.resolveSchema = y;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(p, { baseId: $, schema: d, root: k }) {
    var b;
    if (((b = p.fragment) === null || b === void 0 ? void 0 : b[0]) !== "/")
      return;
    for (const v of p.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const E = d[(0, o.unescapeFragment)(v)];
      if (E === void 0)
        return;
      d = E;
      const P = typeof d == "object" && d[this.opts.schemaId];
      !S.has(v) && P && ($ = (0, r.resolveUrl)(this.opts.uriResolver, $, P));
    }
    let l;
    if (typeof d != "boolean" && d.$ref && !(0, o.schemaHasRulesButRef)(d, this.RULES)) {
      const v = (0, r.resolveUrl)(this.opts.uriResolver, $, d.$ref);
      l = y.call(this, k, v);
    }
    const { schemaId: f } = this.opts;
    if (l = l || new i({ schema: d, schemaId: f, root: k, baseId: $ }), l.schema !== l.root.schema)
      return l;
  }
  return be;
}
const Va = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ba = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ua = "object", Ka = ["$data"], Ha = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Ga = !1, Wa = {
  $id: Va,
  description: Ba,
  type: Ua,
  required: Ka,
  properties: Ha,
  additionalProperties: Ga
};
var Lt = {}, Et = { exports: {} }, cr, xo;
function ki() {
  if (xo) return cr;
  xo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function s(l) {
    let f = "", v = 0, E = 0;
    for (E = 0; E < l.length; E++)
      if (v = l[E].charCodeAt(0), v !== 48) {
        if (!(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
          return "";
        f += l[E];
        break;
      }
    for (E += 1; E < l.length; E++) {
      if (v = l[E].charCodeAt(0), !(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
        return "";
      f += l[E];
    }
    return f;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, f, v) {
    if (l.length) {
      const E = s(l);
      if (E !== "")
        f.push(E);
      else
        return v.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function u(l) {
    let f = 0;
    const v = { error: !1, address: "", zone: "" }, E = [], P = [];
    let T = !1, F = !1, A = c;
    for (let z = 0; z < l.length; z++) {
      const D = l[z];
      if (!(D === "[" || D === "]"))
        if (D === ":") {
          if (T === !0 && (F = !0), !A(P, E, v))
            break;
          if (++f > 7) {
            v.error = !0;
            break;
          }
          z > 0 && l[z - 1] === ":" && (T = !0), E.push(":");
          continue;
        } else if (D === "%") {
          if (!A(P, E, v))
            break;
          A = a;
        } else {
          P.push(D);
          continue;
        }
    }
    return P.length && (A === a ? v.zone = P.join("") : F ? E.push(P.join("")) : E.push(s(P))), v.address = E.join(""), v;
  }
  function h(l) {
    if (g(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const f = u(l);
    if (f.error)
      return { host: l, isIPV6: !1 };
    {
      let v = f.address, E = f.address;
      return f.zone && (v += "%" + f.zone, E += "%25" + f.zone), { host: v, isIPV6: !0, escapedHost: E };
    }
  }
  function g(l, f) {
    let v = 0;
    for (let E = 0; E < l.length; E++)
      l[E] === f && v++;
    return v;
  }
  function m(l) {
    let f = l;
    const v = [];
    let E = -1, P = 0;
    for (; P = f.length; ) {
      if (P === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          v.push("/");
          break;
        } else {
          v.push(f);
          break;
        }
      } else if (P === 2) {
        if (f[0] === ".") {
          if (f[1] === ".")
            break;
          if (f[1] === "/") {
            f = f.slice(2);
            continue;
          }
        } else if (f[0] === "/" && (f[1] === "." || f[1] === "/")) {
          v.push("/");
          break;
        }
      } else if (P === 3 && f === "/..") {
        v.length !== 0 && v.pop(), v.push("/");
        break;
      }
      if (f[0] === ".") {
        if (f[1] === ".") {
          if (f[2] === "/") {
            f = f.slice(3);
            continue;
          }
        } else if (f[1] === "/") {
          f = f.slice(2);
          continue;
        }
      } else if (f[0] === "/" && f[1] === ".") {
        if (f[2] === "/") {
          f = f.slice(2);
          continue;
        } else if (f[2] === "." && f[3] === "/") {
          f = f.slice(3), v.length !== 0 && v.pop();
          continue;
        }
      }
      if ((E = f.indexOf("/", 1)) === -1) {
        v.push(f);
        break;
      } else
        v.push(f.slice(0, E)), f = f.slice(E);
    }
    return v.join("");
  }
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, _ = /[@/?#]/g;
  function p(l, f) {
    const v = f ? _ : S;
    return v.lastIndex = 0, l.replace(v, (E) => y[E]);
  }
  function $(l, f = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let v = "";
    for (let E = 0; E < l.length; E++) {
      if (l[E] === "%" && E + 2 < l.length) {
        const P = l.slice(E + 1, E + 3);
        if (n(P)) {
          const T = P.toUpperCase(), F = String.fromCharCode(parseInt(T, 16));
          f && r(F) ? v += F : v += "%" + T, E += 2;
          continue;
        }
      }
      v += l[E];
    }
    return v;
  }
  function d(l) {
    let f = "";
    for (let v = 0; v < l.length; v++) {
      if (l[v] === "%" && v + 2 < l.length) {
        const E = l.slice(v + 1, v + 3);
        if (n(E)) {
          const P = E.toUpperCase(), T = String.fromCharCode(parseInt(P, 16));
          T !== "." && r(T) ? f += T : f += "%" + P, v += 2;
          continue;
        }
      }
      o(l[v]) ? f += l[v] : f += escape(l[v]);
    }
    return f;
  }
  function k(l) {
    let f = "";
    for (let v = 0; v < l.length; v++) {
      if (l[v] === "%" && v + 2 < l.length) {
        const E = l.slice(v + 1, v + 3);
        if (n(E)) {
          f += "%" + E.toUpperCase(), v += 2;
          continue;
        }
      }
      f += escape(l[v]);
    }
    return f;
  }
  function b(l) {
    const f = [];
    if (l.userinfo !== void 0 && (f.push(l.userinfo), f.push("@")), l.host !== void 0) {
      let v = unescape(l.host);
      if (!t(v)) {
        const E = h(v);
        E.isIPV6 === !0 ? v = `[${E.escapedHost}]` : v = p(v, !1);
      }
      f.push(v);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (f.push(":"), f.push(String(l.port))), f.length ? f.join("") : void 0;
  }
  return cr = {
    nonSimpleDomain: i,
    recomposeAuthority: b,
    reescapeHostDelimiters: p,
    normalizePercentEncoding: $,
    normalizePathEncoding: d,
    escapePreservingEscapes: k,
    removeDotSegments: m,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: s
  }, cr;
}
var lr, Po;
function Ja() {
  if (Po) return lr;
  Po = 1;
  const { isUUID: e } = ki(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
    /** @type {const} */
    [
      "http",
      "https",
      "ws",
      "wss",
      "urn",
      "urn:uuid"
    ]
  );
  function r(l) {
    return n.indexOf(
      /** @type {*} */
      l
    ) !== -1;
  }
  function o(l) {
    return l.secure === !0 ? !0 : l.secure === !1 ? !1 : l.scheme ? l.scheme.length === 3 && (l.scheme[0] === "w" || l.scheme[0] === "W") && (l.scheme[1] === "s" || l.scheme[1] === "S") && (l.scheme[2] === "s" || l.scheme[2] === "S") : !1;
  }
  function s(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function i(l) {
    const f = String(l.scheme).toLowerCase() === "https";
    return (l.port === (f ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function a(l) {
    return l.secure = o(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function c(l) {
    if ((l.port === (o(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [f, v] = l.resourceName.split("?");
      l.path = f && f !== "/" ? f : void 0, l.query = v, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function u(l, f) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const v = l.path.match(t);
    if (v) {
      const E = f.scheme || l.scheme || "urn";
      l.nid = v[1].toLowerCase(), l.nss = v[2];
      const P = `${E}:${f.nid || l.nid}`, T = b(P);
      l.path = void 0, T && (l = T.parse(l, f));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function h(l, f) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const v = f.scheme || l.scheme || "urn", E = l.nid.toLowerCase(), P = `${v}:${f.nid || E}`, T = b(P);
    T && (l = T.serialize(l, f));
    const F = l, A = l.nss;
    return F.path = `${E || f.nid}:${A}`, f.skipEscape = !0, F;
  }
  function g(l, f) {
    const v = l;
    return v.uuid = v.nss, v.nss = void 0, !f.tolerant && (!v.uuid || !e(v.uuid)) && (v.error = v.error || "UUID is not valid."), v;
  }
  function m(l) {
    const f = l;
    return f.nss = (l.uuid || "").toLowerCase(), f;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: s,
      serialize: i
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: y.domainHost,
      parse: s,
      serialize: i
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: c
    }
  ), p = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: _.domainHost,
      parse: _.parse,
      serialize: _.serialize
    }
  ), k = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: y,
      https: S,
      ws: _,
      wss: p,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: u,
          serialize: h,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: g,
          serialize: m,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(k, null);
  function b(l) {
    return l && (k[
      /** @type {SchemeName} */
      l
    ] || k[
      /** @type {SchemeName} */
      l.toLowerCase()
    ]) || void 0;
  }
  return lr = {
    wsIsSecure: o,
    SCHEMES: k,
    isValidSchemeName: r,
    getSchemeHandler: b
  }, lr;
}
var Ao;
function Ya() {
  if (Ao) return Et.exports;
  Ao = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: s, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: c } = ki(), { SCHEMES: u, getSchemeHandler: h } = Ja();
  function g(P, T) {
    return typeof P == "string" ? P = /** @type {T} */
    l(P, T) : typeof P == "object" && (P = /** @type {T} */
    b(_(P, T), T)), P;
  }
  function m(P, T, F) {
    const A = F ? Object.assign({ scheme: "null" }, F) : { scheme: "null" }, z = y(b(P, A), b(T, A), A, !0);
    return A.skipEscape = !0, _(z, A);
  }
  function y(P, T, F, A) {
    const z = {};
    return A || (P = b(_(P, F), F), T = b(_(T, F), F)), F = F || {}, !F.tolerant && T.scheme ? (z.scheme = T.scheme, z.userinfo = T.userinfo, z.host = T.host, z.port = T.port, z.path = t(T.path || ""), z.query = T.query) : (T.userinfo !== void 0 || T.host !== void 0 || T.port !== void 0 ? (z.userinfo = T.userinfo, z.host = T.host, z.port = T.port, z.path = t(T.path || ""), z.query = T.query) : (T.path ? (T.path[0] === "/" ? z.path = t(T.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? z.path = "/" + T.path : P.path ? z.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + T.path : z.path = T.path, z.path = t(z.path)), z.query = T.query) : (z.path = P.path, T.query !== void 0 ? z.query = T.query : z.query = P.query), z.userinfo = P.userinfo, z.host = P.host, z.port = P.port), z.scheme = P.scheme), z.fragment = T.fragment, z;
  }
  function S(P, T, F) {
    const A = v(P, F), z = v(T, F);
    return A !== void 0 && z !== void 0 && A.toLowerCase() === z.toLowerCase();
  }
  function _(P, T) {
    const F = {
      host: P.host,
      scheme: P.scheme,
      userinfo: P.userinfo,
      port: P.port,
      path: P.path,
      query: P.query,
      nid: P.nid,
      nss: P.nss,
      uuid: P.uuid,
      fragment: P.fragment,
      reference: P.reference,
      resourceName: P.resourceName,
      secure: P.secure,
      error: ""
    }, A = Object.assign({}, T), z = [], D = h(A.scheme || F.scheme);
    D && D.serialize && D.serialize(F, A), F.path !== void 0 && (A.skipEscape ? F.path = r(F.path) : (F.path = s(F.path), F.scheme !== void 0 && (F.path = F.path.split("%3A").join(":")))), A.reference !== "suffix" && F.scheme && z.push(F.scheme, ":");
    const Y = n(F);
    if (Y !== void 0 && (A.reference !== "suffix" && z.push("//"), z.push(Y), F.path && F.path[0] !== "/" && z.push("/")), F.path !== void 0) {
      let G = F.path;
      !A.absolutePath && (!D || !D.absolutePath) && (G = t(G)), Y === void 0 && G[0] === "/" && G[1] === "/" && (G = "/%2F" + G.slice(2)), z.push(G);
    }
    return F.query !== void 0 && z.push("?", F.query), F.fragment !== void 0 && z.push("#", F.fragment), z.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, $ = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function d(P, T) {
    if (T[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function k(P, T) {
    const F = Object.assign({}, T), A = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let z = !1, D = !1;
    F.reference === "suffix" && (F.scheme ? P = F.scheme + ":" + P : P = "//" + P);
    const Y = P.match($);
    Y !== null && Y[1].indexOf("\\") !== -1 && (A.error = "URI authority must not contain a literal backslash.", z = !0);
    const G = P.match(p);
    if (G) {
      A.scheme = G[1], A.userinfo = G[3], A.host = G[4], A.port = parseInt(G[5], 10), A.path = G[6] || "", A.query = G[7], A.fragment = G[8], isNaN(A.port) && (A.port = G[5]);
      const oe = d(A, G);
      if (oe !== void 0 && (A.error = A.error || oe, z = !0), A.host)
        if (a(A.host) === !1) {
          const L = e(A.host);
          A.host = L.host.toLowerCase(), D = L.isIPV6;
        } else
          D = !0;
      A.scheme === void 0 && A.userinfo === void 0 && A.host === void 0 && A.port === void 0 && A.query === void 0 && !A.path ? A.reference = "same-document" : A.scheme === void 0 ? A.reference = "relative" : A.fragment === void 0 ? A.reference = "absolute" : A.reference = "uri", F.reference && F.reference !== "suffix" && F.reference !== A.reference && (A.error = A.error || "URI is not a " + F.reference + " reference.");
      const X = h(F.scheme || A.scheme);
      if (!F.unicodeSupport && (!X || !X.unicodeSupport) && A.host && (F.domainHost || X && X.domainHost) && D === !1 && c(A.host))
        try {
          A.host = new URL("http://" + A.host).hostname;
        } catch (J) {
          A.error = A.error || "Host's domain name can not be converted to ASCII: " + J;
        }
      if ((!X || X && !X.skipNormalize) && (P.indexOf("%") !== -1 && (A.scheme !== void 0 && (A.scheme = unescape(A.scheme)), A.host !== void 0 && (A.host = i(unescape(A.host), D))), A.path && (A.path = o(A.path)), A.fragment))
        try {
          A.fragment = encodeURI(decodeURIComponent(A.fragment));
        } catch {
          A.error = A.error || "URI malformed";
        }
      X && X.parse && X.parse(A, F);
    } else
      A.error = A.error || "URI can not be parsed.";
    return { parsed: A, malformedAuthorityOrPort: z };
  }
  function b(P, T) {
    return k(P, T).parsed;
  }
  function l(P, T) {
    return f(P, T).normalized;
  }
  function f(P, T) {
    const { parsed: F, malformedAuthorityOrPort: A } = k(P, T);
    return {
      normalized: A ? P : _(F, T),
      malformedAuthorityOrPort: A
    };
  }
  function v(P, T) {
    if (typeof P == "string") {
      const { normalized: F, malformedAuthorityOrPort: A } = f(P, T);
      return A ? void 0 : F;
    }
    if (typeof P == "object")
      return _(P, T);
  }
  const E = {
    SCHEMES: u,
    normalize: g,
    resolve: m,
    resolveComponent: y,
    equal: S,
    serialize: _,
    parse: b
  };
  return Et.exports = E, Et.exports.default = E, Et.exports.fastUri = E, Et.exports;
}
var Ro;
function Xa() {
  if (Ro) return Lt;
  Ro = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = Ya();
  return e.code = 'require("ajv/dist/runtime/uri").default', Lt.default = e, Lt;
}
var No;
function Za() {
  return No || (No = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Wn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ se();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return n._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return n.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return n.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return n.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return n.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return n.CodeGen;
    } });
    const r = /* @__PURE__ */ Fr(), o = /* @__PURE__ */ Jn(), s = /* @__PURE__ */ wi(), i = /* @__PURE__ */ Yn(), a = /* @__PURE__ */ se(), c = /* @__PURE__ */ Gn(), u = /* @__PURE__ */ Dn(), h = /* @__PURE__ */ ae(), g = Wa, m = /* @__PURE__ */ Xa(), y = (L, R) => new RegExp(L, R);
    y.code = "new RegExp";
    const S = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), p = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, $ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, d = 200;
    function k(L) {
      var R, q, N, w, C, I, V, H, ne, ee, x, M, B, W, K, Q, te, ue, ce, me, pe, je, $e, Ce, ze;
      const Qe = L.strict, Qn = (R = L.code) === null || R === void 0 ? void 0 : R.optimize, Zr = Qn === !0 || Qn === void 0 ? 1 : Qn || 0, Qr = (N = (q = L.code) === null || q === void 0 ? void 0 : q.regExp) !== null && N !== void 0 ? N : y, Xi = (w = L.uriResolver) !== null && w !== void 0 ? w : m.default;
      return {
        strictSchema: (I = (C = L.strictSchema) !== null && C !== void 0 ? C : Qe) !== null && I !== void 0 ? I : !0,
        strictNumbers: (H = (V = L.strictNumbers) !== null && V !== void 0 ? V : Qe) !== null && H !== void 0 ? H : !0,
        strictTypes: (ee = (ne = L.strictTypes) !== null && ne !== void 0 ? ne : Qe) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (M = (x = L.strictTuples) !== null && x !== void 0 ? x : Qe) !== null && M !== void 0 ? M : "log",
        strictRequired: (W = (B = L.strictRequired) !== null && B !== void 0 ? B : Qe) !== null && W !== void 0 ? W : !1,
        code: L.code ? { ...L.code, optimize: Zr, regExp: Qr } : { optimize: Zr, regExp: Qr },
        loopRequired: (K = L.loopRequired) !== null && K !== void 0 ? K : d,
        loopEnum: (Q = L.loopEnum) !== null && Q !== void 0 ? Q : d,
        meta: (te = L.meta) !== null && te !== void 0 ? te : !0,
        messages: (ue = L.messages) !== null && ue !== void 0 ? ue : !0,
        inlineRefs: (ce = L.inlineRefs) !== null && ce !== void 0 ? ce : !0,
        schemaId: (me = L.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = L.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (je = L.validateSchema) !== null && je !== void 0 ? je : !0,
        validateFormats: ($e = L.validateFormats) !== null && $e !== void 0 ? $e : !0,
        unicodeRegExp: (Ce = L.unicodeRegExp) !== null && Ce !== void 0 ? Ce : !0,
        int32range: (ze = L.int32range) !== null && ze !== void 0 ? ze : !0,
        uriResolver: Xi
      };
    }
    class b {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...k(R) };
        const { es5: q, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: q, lines: N }), this.logger = A(R.logger);
        const w = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, s.getRules)(), l.call(this, p, R, "NOT SUPPORTED"), l.call(this, $, R, "DEPRECATED", "warn"), this._metaOpts = T.call(this), R.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && P.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), v.call(this), R.validateFormats = w;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: q, schemaId: N } = this.opts;
        let w = g;
        N === "id" && (w = { ...g }, w.id = w.$id, delete w.$id), q && R && this.addMetaSchema(w, w[N], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[q] || R : void 0;
      }
      validate(R, q) {
        let N;
        if (typeof R == "string") {
          if (N = this.getSchema(R), !N)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          N = this.compile(R);
        const w = N(q);
        return "$async" in N || (this.errors = N.errors), w;
      }
      compile(R, q) {
        const N = this._addSchema(R, q);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(R, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return w.call(this, R, q);
        async function w(ee, x) {
          await C.call(this, ee.$schema);
          const M = this._addSchema(ee, x);
          return M.validate || I.call(this, M);
        }
        async function C(ee) {
          ee && !this.getSchema(ee) && await w.call(this, { $ref: ee }, !0);
        }
        async function I(ee) {
          try {
            return this._compileSchemaEnv(ee);
          } catch (x) {
            if (!(x instanceof o.default))
              throw x;
            return V.call(this, x), await H.call(this, x.missingSchema), I.call(this, ee);
          }
        }
        function V({ missingSchema: ee, missingRef: x }) {
          if (this.refs[ee])
            throw new Error(`AnySchema ${ee} is loaded but ${x} cannot be resolved`);
        }
        async function H(ee) {
          const x = await ne.call(this, ee);
          this.refs[ee] || await C.call(this, x.$schema), this.refs[ee] || this.addSchema(x, ee, q);
        }
        async function ne(ee) {
          const x = this._loading[ee];
          if (x)
            return x;
          try {
            return await (this._loading[ee] = N(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, q, N, w = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const I of R)
            this.addSchema(I, void 0, N, w);
          return this;
        }
        let C;
        if (typeof R == "object") {
          const { schemaId: I } = this.opts;
          if (C = R[I], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return q = (0, c.normalizeId)(q || C), this._checkUnique(q), this.schemas[q] = this._addSchema(R, N, q, w, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, q, N = this.opts.validateSchema) {
        return this.addSchema(R, q, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, q) {
        if (typeof R == "boolean")
          return !0;
        let N;
        if (N = R.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const w = this.validate(N, R);
        if (!w && q) {
          const C = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(C);
          else
            throw new Error(C);
        }
        return w;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let q;
        for (; typeof (q = f.call(this, R)) == "string"; )
          R = q;
        if (q === void 0) {
          const { schemaId: N } = this.opts, w = new i.SchemaEnv({ schema: {}, schemaId: N });
          if (q = i.resolveSchema.call(this, w, R), !q)
            return;
          this.refs[R] = q;
        }
        return q.validate || this._compileSchemaEnv(q);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(R) {
        if (R instanceof RegExp)
          return this._removeAllSchemas(this.schemas, R), this._removeAllSchemas(this.refs, R), this;
        switch (typeof R) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const q = f.call(this, R);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const q = R;
            this._cache.delete(q);
            let N = R[this.opts.schemaId];
            return N && (N = (0, c.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const q of R)
          this.addKeyword(q);
        return this;
      }
      addKeyword(R, q) {
        let N;
        if (typeof R == "string")
          N = R, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = N);
        else if (typeof R == "object" && q === void 0) {
          if (q = R, N = q.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (D.call(this, N, q), !q)
          return (0, h.eachItem)(N, (C) => Y.call(this, C)), this;
        oe.call(this, q);
        const w = {
          ...q,
          type: (0, u.getJSONTypes)(q.type),
          schemaType: (0, u.getJSONTypes)(q.schemaType)
        };
        return (0, h.eachItem)(N, w.type.length === 0 ? (C) => Y.call(this, C, w) : (C) => w.type.forEach((I) => Y.call(this, C, w, I))), this;
      }
      getKeyword(R) {
        const q = this.RULES.all[R];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: q } = this;
        delete q.keywords[R], delete q.all[R];
        for (const N of q.rules) {
          const w = N.rules.findIndex((C) => C.keyword === R);
          w >= 0 && N.rules.splice(w, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[R] = q, this;
      }
      errorsText(R = this.errors, { separator: q = ", ", dataVar: N = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((w) => `${N}${w.instancePath} ${w.message}`).reduce((w, C) => w + q + C);
      }
      $dataMetaSchema(R, q) {
        const N = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const w of q) {
          const C = w.split("/").slice(1);
          let I = R;
          for (const V of C)
            I = I[V];
          for (const V in N) {
            const H = N[V];
            if (typeof H != "object")
              continue;
            const { $data: ne } = H.definition, ee = I[V];
            ne && ee && (I[V] = J(ee));
          }
        }
        return R;
      }
      _removeAllSchemas(R, q) {
        for (const N in R) {
          const w = R[N];
          (!q || q.test(N)) && (typeof w == "string" ? delete R[N] : w && !w.meta && (this._cache.delete(w.schema), delete R[N]));
        }
      }
      _addSchema(R, q, N, w = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let I;
        const { schemaId: V } = this.opts;
        if (typeof R == "object")
          I = R[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(R);
        if (H !== void 0)
          return H;
        N = (0, c.normalizeId)(I || N);
        const ne = c.getSchemaRefs.call(this, R, N);
        return H = new i.SchemaEnv({ schema: R, schemaId: V, meta: q, baseId: N, localRefs: ne }), this._cache.set(H.schema, H), C && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = H), w && this.validateSchema(R, !0), H;
      }
      _checkUnique(R) {
        if (this.schemas[R] || this.refs[R])
          throw new Error(`schema with key or id "${R}" already exists`);
      }
      _compileSchemaEnv(R) {
        if (R.meta ? this._compileMetaSchema(R) : i.compileSchema.call(this, R), !R.validate)
          throw new Error("ajv implementation error");
        return R.validate;
      }
      _compileMetaSchema(R) {
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, R);
        } finally {
          this.opts = q;
        }
      }
    }
    b.ValidationError = r.default, b.MissingRefError = o.default, e.default = b;
    function l(L, R, q, N = "error") {
      for (const w in L) {
        const C = w;
        C in R && this.logger[N](`${q}: option ${w}. ${L[C]}`);
      }
    }
    function f(L) {
      return L = (0, c.normalizeId)(L), this.schemas[L] || this.refs[L];
    }
    function v() {
      const L = this.opts.schemas;
      if (L)
        if (Array.isArray(L))
          this.addSchema(L);
        else
          for (const R in L)
            this.addSchema(L[R], R);
    }
    function E() {
      for (const L in this.opts.formats) {
        const R = this.opts.formats[L];
        R && this.addFormat(L, R);
      }
    }
    function P(L) {
      if (Array.isArray(L)) {
        this.addVocabulary(L);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in L) {
        const q = L[R];
        q.keyword || (q.keyword = R), this.addKeyword(q);
      }
    }
    function T() {
      const L = { ...this.opts };
      for (const R of S)
        delete L[R];
      return L;
    }
    const F = { log() {
    }, warn() {
    }, error() {
    } };
    function A(L) {
      if (L === !1)
        return F;
      if (L === void 0)
        return console;
      if (L.log && L.warn && L.error)
        return L;
      throw new Error("logger must implement log, warn and error methods");
    }
    const z = /^[a-z_$][a-z0-9_$:-]*$/i;
    function D(L, R) {
      const { RULES: q } = this;
      if ((0, h.eachItem)(L, (N) => {
        if (q.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!z.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Y(L, R, q) {
      var N;
      const w = R?.post;
      if (q && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let I = w ? C.post : C.rules.find(({ type: H }) => H === q);
      if (I || (I = { type: q, rules: [] }, C.rules.push(I)), C.keywords[L] = !0, !R)
        return;
      const V = {
        keyword: L,
        definition: {
          ...R,
          type: (0, u.getJSONTypes)(R.type),
          schemaType: (0, u.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? G.call(this, I, V, R.before) : I.rules.push(V), C.all[L] = V, (N = R.implements) === null || N === void 0 || N.forEach((H) => this.addKeyword(H));
    }
    function G(L, R, q) {
      const N = L.rules.findIndex((w) => w.keyword === q);
      N >= 0 ? L.rules.splice(N, 0, R) : (L.rules.push(R), this.logger.warn(`rule ${q} is not defined`));
    }
    function oe(L) {
      let { metaSchema: R } = L;
      R !== void 0 && (L.$data && this.opts.$data && (R = J(R)), L.validateSchema = this.compile(R, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function J(L) {
      return { anyOf: [L, X] };
    }
  })(tr)), tr;
}
var Vt = {}, Bt = {}, Ut = {}, Mo;
function Qa() {
  if (Mo) return Ut;
  Mo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ut.default = e, Ut;
}
var He = {}, Oo;
function jr() {
  if (Oo) return He;
  Oo = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.callRef = He.getValidate = void 0;
  const e = /* @__PURE__ */ Jn(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ se(), r = /* @__PURE__ */ Me(), o = /* @__PURE__ */ Yn(), s = /* @__PURE__ */ ae(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(u) {
      const { gen: h, schema: g, it: m } = u, { baseId: y, schemaEnv: S, validateName: _, opts: p, self: $ } = m, { root: d } = S;
      if ((g === "#" || g === "#/") && y === d.baseId)
        return b();
      const k = o.resolveRef.call($, d, y, g);
      if (k === void 0)
        throw new e.default(m.opts.uriResolver, y, g);
      if (k instanceof o.SchemaEnv)
        return l(k);
      return f(k);
      function b() {
        if (S === d)
          return c(u, _, S, S.$async);
        const v = h.scopeValue("root", { ref: d });
        return c(u, (0, n._)`${v}.validate`, d, d.$async);
      }
      function l(v) {
        const E = a(u, v);
        c(u, E, v, v.$async);
      }
      function f(v) {
        const E = h.scopeValue("schema", p.code.source === !0 ? { ref: v, code: (0, n.stringify)(v) } : { ref: v }), P = h.name("valid"), T = u.subschema({
          schema: v,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: g
        }, P);
        u.mergeEvaluated(T), u.ok(P);
      }
    }
  };
  function a(u, h) {
    const { gen: g } = u;
    return h.validate ? g.scopeValue("validate", { ref: h.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: h })}.validate`;
  }
  He.getValidate = a;
  function c(u, h, g, m) {
    const { gen: y, it: S } = u, { allErrors: _, schemaEnv: p, opts: $ } = S, d = $.passContext ? r.default.this : n.nil;
    m ? k() : b();
    function k() {
      if (!p.$async)
        throw new Error("async schema referenced by sync schema");
      const v = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(u, h, d)}`), f(h), _ || y.assign(v, !0);
      }, (E) => {
        y.if((0, n._)`!(${E} instanceof ${S.ValidationError})`, () => y.throw(E)), l(E), _ || y.assign(v, !1);
      }), u.ok(v);
    }
    function b() {
      u.result((0, t.callValidateCode)(u, h, d), () => f(h), () => l(h));
    }
    function l(v) {
      const E = (0, n._)`${v}.errors`;
      y.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${E} : ${r.default.vErrors}.concat(${E})`), y.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function f(v) {
      var E;
      if (!S.opts.unevaluated)
        return;
      const P = (E = g?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (S.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (S.props = s.mergeEvaluated.props(y, P.props, S.props));
        else {
          const T = y.var("props", (0, n._)`${v}.evaluated.props`);
          S.props = s.mergeEvaluated.props(y, T, S.props, n.Name);
        }
      if (S.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (S.items = s.mergeEvaluated.items(y, P.items, S.items));
        else {
          const T = y.var("items", (0, n._)`${v}.evaluated.items`);
          S.items = s.mergeEvaluated.items(y, T, S.items, n.Name);
        }
    }
  }
  return He.callRef = c, He.default = i, He;
}
var To;
function ec() {
  if (To) return Bt;
  To = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qa(), t = /* @__PURE__ */ jr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Bt.default = n, Bt;
}
var Kt = {}, Ht = {}, Fo;
function tc() {
  if (Fo) return Ht;
  Fo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: s, schemaCode: i }) => (0, e.str)`must be ${n[s].okStr} ${i}`,
    params: ({ keyword: s, schemaCode: i }) => (0, e._)`{comparison: ${n[s].okStr}, limit: ${i}}`
  }, o = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(s) {
      const { keyword: i, data: a, schemaCode: c } = s;
      s.fail$data((0, e._)`${a} ${n[i].fail} ${c} || isNaN(${a})`);
    }
  };
  return Ht.default = o, Ht;
}
var Gt = {}, jo;
function nc() {
  if (jo) return Gt;
  jo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: o, data: s, schemaCode: i, it: a } = r, c = a.opts.multipleOfPrecision, u = o.let("res"), h = c ? (0, e._)`Math.abs(Math.round(${u}) - ${u}) > 1e-${c}` : (0, e._)`${u} !== parseInt(${u})`;
      r.fail$data((0, e._)`(${i} === 0 || (${u} = ${s}/${i}, ${h}))`);
    }
  };
  return Gt.default = n, Gt;
}
var Wt = {}, Jt = {}, zo;
function rc() {
  if (zo) return Jt;
  zo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, s;
    for (; o < n; )
      r++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < n && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return r;
  }
  return Jt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Jt;
}
var Io;
function oc() {
  if (Io) return Wt;
  Io = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ rc(), o = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: s, schemaCode: i }) {
        const a = s === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${i} characters`;
      },
      params: ({ schemaCode: s }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { keyword: i, data: a, schemaCode: c, it: u } = s, h = i === "maxLength" ? e.operators.GT : e.operators.LT, g = u.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(s.gen, n.default)}(${a})`;
      s.fail$data((0, e._)`${g} ${h} ${c}`);
    }
  };
  return Wt.default = o, Wt;
}
var Yt = {}, Do;
function sc() {
  if (Do) return Yt;
  Do = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ se(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, n.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, n._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: c, schema: u, schemaCode: h, it: g } = s, m = g.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: y } = g.opts.code, S = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, y), _ = i.let("valid");
        i.try(() => i.assign(_, (0, n._)`${S}(${h}, ${m}).test(${a})`), () => i.assign(_, !1)), s.fail$data((0, n._)`!${_}`);
      } else {
        const y = (0, e.usePattern)(s, u);
        s.fail$data((0, n._)`!${y}.test(${a})`);
      }
    }
  };
  return Yt.default = o, Yt;
}
var Xt = {}, qo;
function ic() {
  if (qo) return Xt;
  qo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const s = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: s, schemaCode: i } = r, a = o === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${s}).length ${a} ${i}`);
    }
  };
  return Xt.default = n, Xt;
}
var Zt = {}, Lo;
function ac() {
  if (Lo) return Zt;
  Lo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: i, schema: a, schemaCode: c, data: u, $data: h, it: g } = s, { opts: m } = g;
      if (!h && a.length === 0)
        return;
      const y = a.length >= m.loopRequired;
      if (g.allErrors ? S() : _(), m.strictRequired) {
        const d = s.parentSchema.properties, { definedProperties: k } = s.it;
        for (const b of a)
          if (d?.[b] === void 0 && !k.has(b)) {
            const l = g.schemaEnv.baseId + g.errSchemaPath, f = `required property "${b}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(g, f, g.opts.strictRequired);
          }
      }
      function S() {
        if (y || h)
          s.block$data(t.nil, p);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(s, d);
      }
      function _() {
        const d = i.let("missing");
        if (y || h) {
          const k = i.let("valid", !0);
          s.block$data(k, () => $(d, k)), s.ok(k);
        } else
          i.if((0, e.checkMissingProp)(s, a, d)), (0, e.reportMissingProp)(s, d), i.else();
      }
      function p() {
        i.forOf("prop", c, (d) => {
          s.setParams({ missingProperty: d }), i.if((0, e.noPropertyInData)(i, u, d, m.ownProperties), () => s.error());
        });
      }
      function $(d, k) {
        s.setParams({ missingProperty: d }), i.forOf(d, c, () => {
          i.assign(k, (0, e.propertyInData)(i, u, d, m.ownProperties)), i.if((0, t.not)(k), () => {
            s.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return Zt.default = o, Zt;
}
var Qt = {}, Vo;
function cc() {
  if (Vo) return Qt;
  Vo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const s = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: s, schemaCode: i } = r, a = o === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${s}.length ${a} ${i}`);
    }
  };
  return Qt.default = n, Qt;
}
var en = {}, tn = {}, Bo;
function zr() {
  if (Bo) return tn;
  Bo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = Si();
  return e.code = 'require("ajv/dist/runtime/equal").default', tn.default = e, tn;
}
var Uo;
function lc() {
  if (Uo) return en;
  Uo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ zr(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: c, $data: u, schema: h, parentSchema: g, schemaCode: m, it: y } = i;
      if (!u && !h)
        return;
      const S = a.let("valid"), _ = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      i.block$data(S, p, (0, t._)`${m} === false`), i.ok(S);
      function p() {
        const b = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        i.setParams({ i: b, j: l }), a.assign(S, !0), a.if((0, t._)`${b} > 1`, () => ($() ? d : k)(b, l));
      }
      function $() {
        return _.length > 0 && !_.some((b) => b === "object" || b === "array");
      }
      function d(b, l) {
        const f = a.name("item"), v = (0, e.checkDataTypes)(_, f, y.opts.strictNumbers, e.DataType.Wrong), E = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${b}--;`, () => {
          a.let(f, (0, t._)`${c}[${b}]`), a.if(v, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${f} == "string"`, (0, t._)`${f} += "_"`), a.if((0, t._)`typeof ${E}[${f}] == "number"`, () => {
            a.assign(l, (0, t._)`${E}[${f}]`), i.error(), a.assign(S, !1).break();
          }).code((0, t._)`${E}[${f}] = ${b}`);
        });
      }
      function k(b, l) {
        const f = (0, n.useFunc)(a, r.default), v = a.name("outer");
        a.label(v).for((0, t._)`;${b}--;`, () => a.for((0, t._)`${l} = ${b}; ${l}--;`, () => a.if((0, t._)`${f}(${c}[${b}], ${c}[${l}])`, () => {
          i.error(), a.assign(S, !1).break(v);
        })));
      }
    }
  };
  return en.default = s, en;
}
var nn = {}, Ko;
function dc() {
  if (Ko) return nn;
  Ko = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ zr(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: c, schemaCode: u, schema: h } = s;
      c || h && typeof h == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${a}, ${u})`) : s.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return nn.default = o, nn;
}
var rn = {}, Ho;
function uc() {
  if (Ho) return rn;
  Ho = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ zr(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: c, schema: u, schemaCode: h, it: g } = s;
      if (!c && u.length === 0)
        throw new Error("enum must have non-empty array");
      const m = u.length >= g.opts.loopEnum;
      let y;
      const S = () => y ?? (y = (0, t.useFunc)(i, n.default));
      let _;
      if (m || c)
        _ = i.let("valid"), s.block$data(_, p);
      else {
        if (!Array.isArray(u))
          throw new Error("ajv implementation error");
        const d = i.const("vSchema", h);
        _ = (0, e.or)(...u.map((k, b) => $(d, b)));
      }
      s.pass(_);
      function p() {
        i.assign(_, !1), i.forOf("v", h, (d) => i.if((0, e._)`${S()}(${a}, ${d})`, () => i.assign(_, !0).break()));
      }
      function $(d, k) {
        const b = u[k];
        return typeof b == "object" && b !== null ? (0, e._)`${S()}(${a}, ${d}[${k}])` : (0, e._)`${a} === ${b}`;
      }
    }
  };
  return rn.default = o, rn;
}
var Go;
function fc() {
  if (Go) return Kt;
  Go = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tc(), t = /* @__PURE__ */ nc(), n = /* @__PURE__ */ oc(), r = /* @__PURE__ */ sc(), o = /* @__PURE__ */ ic(), s = /* @__PURE__ */ ac(), i = /* @__PURE__ */ cc(), a = /* @__PURE__ */ lc(), c = /* @__PURE__ */ dc(), u = /* @__PURE__ */ uc(), h = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    o.default,
    s.default,
    // array
    i.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    u.default
  ];
  return Kt.default = h, Kt;
}
var on = {}, ct = {}, Wo;
function Ci() {
  if (Wo) return ct;
  Wo = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { parentSchema: i, it: a } = s, { items: c } = i;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(s, c);
    }
  };
  function o(s, i) {
    const { gen: a, schema: c, data: u, keyword: h, it: g } = s;
    g.items = !0;
    const m = a.const("len", (0, e._)`${u}.length`);
    if (c === !1)
      s.setParams({ len: i.length }), s.pass((0, e._)`${m} <= ${i.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(g, c)) {
      const S = a.var("valid", (0, e._)`${m} <= ${i.length}`);
      a.if((0, e.not)(S), () => y(S)), s.ok(S);
    }
    function y(S) {
      a.forRange("i", i.length, m, (_) => {
        s.subschema({ keyword: h, dataProp: _, dataPropType: t.Type.Num }, S), g.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return ct.validateAdditionalItems = o, ct.default = r, ct;
}
var sn = {}, lt = {}, Jo;
function Ei() {
  if (Jo) return lt;
  Jo = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.validateTuple = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(s) {
      const { schema: i, it: a } = s;
      if (Array.isArray(i))
        return o(s, "additionalItems", i);
      a.items = !0, !(0, t.alwaysValidSchema)(a, i) && s.ok((0, n.validateArray)(s));
    }
  };
  function o(s, i, a = s.schema) {
    const { gen: c, parentSchema: u, data: h, keyword: g, it: m } = s;
    _(u), m.opts.unevaluated && a.length && m.items !== !0 && (m.items = t.mergeEvaluated.items(c, a.length, m.items));
    const y = c.name("valid"), S = c.const("len", (0, e._)`${h}.length`);
    a.forEach((p, $) => {
      (0, t.alwaysValidSchema)(m, p) || (c.if((0, e._)`${S} > ${$}`, () => s.subschema({
        keyword: g,
        schemaProp: $,
        dataProp: $
      }, y)), s.ok(y));
    });
    function _(p) {
      const { opts: $, errSchemaPath: d } = m, k = a.length, b = k === p.minItems && (k === p.maxItems || p[i] === !1);
      if ($.strictTuples && !b) {
        const l = `"${g}" is ${k}-tuple, but minItems or maxItems/${i} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)(m, l, $.strictTuples);
      }
    }
  }
  return lt.validateTuple = o, lt.default = r, lt;
}
var Yo;
function pc() {
  if (Yo) return sn;
  Yo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ei(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return sn.default = t, sn;
}
var an = {}, Xo;
function hc() {
  if (Xo) return an;
  Xo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Ci(), s = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: a, parentSchema: c, it: u } = i, { prefixItems: h } = c;
      u.items = !0, !(0, t.alwaysValidSchema)(u, a) && (h ? (0, r.validateAdditionalItems)(i, h) : i.ok((0, n.validateArray)(i)));
    }
  };
  return an.default = s, an;
}
var cn = {}, Zo;
function mc() {
  if (Zo) return cn;
  Zo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: o, max: s } }) => s === void 0 ? (0, e.str)`must contain at least ${o} valid item(s)` : (0, e.str)`must contain at least ${o} and no more than ${s} valid item(s)`,
      params: ({ params: { min: o, max: s } }) => s === void 0 ? (0, e._)`{minContains: ${o}}` : (0, e._)`{minContains: ${o}, maxContains: ${s}}`
    },
    code(o) {
      const { gen: s, schema: i, parentSchema: a, data: c, it: u } = o;
      let h, g;
      const { minContains: m, maxContains: y } = a;
      u.opts.next ? (h = m === void 0 ? 1 : m, g = y) : h = 1;
      const S = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: h, max: g }), g === void 0 && h === 0) {
        (0, t.checkStrictMode)(u, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && h > g) {
        (0, t.checkStrictMode)(u, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(u, i)) {
        let k = (0, e._)`${S} >= ${h}`;
        g !== void 0 && (k = (0, e._)`${k} && ${S} <= ${g}`), o.pass(k);
        return;
      }
      u.items = !0;
      const _ = s.name("valid");
      g === void 0 && h === 1 ? $(_, () => s.if(_, () => s.break())) : h === 0 ? (s.let(_, !0), g !== void 0 && s.if((0, e._)`${c}.length > 0`, p)) : (s.let(_, !1), p()), o.result(_, () => o.reset());
      function p() {
        const k = s.name("_valid"), b = s.let("count", 0);
        $(k, () => s.if(k, () => d(b)));
      }
      function $(k, b) {
        s.forRange("i", 0, S, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, k), b();
        });
      }
      function d(k) {
        s.code((0, e._)`${k}++`), g === void 0 ? s.if((0, e._)`${k} >= ${h}`, () => s.assign(_, !0).break()) : (s.if((0, e._)`${k} > ${g}`, () => s.assign(_, !1).break()), h === 1 ? s.assign(_, !0) : s.if((0, e._)`${k} >= ${h}`, () => s.assign(_, !0)));
      }
    }
  };
  return cn.default = r, cn;
}
var dr = {}, Qo;
function Ir() {
  return Qo || (Qo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Oe();
    e.error = {
      message: ({ params: { property: c, depsCount: u, deps: h } }) => {
        const g = u === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${h} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: u, deps: h, missingProperty: g } }) => (0, t._)`{property: ${c},
    missingProperty: ${g},
    depsCount: ${u},
    deps: ${h}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [u, h] = s(c);
        i(c, u), a(c, h);
      }
    };
    function s({ schema: c }) {
      const u = {}, h = {};
      for (const g in c) {
        if (g === "__proto__")
          continue;
        const m = Array.isArray(c[g]) ? u : h;
        m[g] = c[g];
      }
      return [u, h];
    }
    function i(c, u = c.schema) {
      const { gen: h, data: g, it: m } = c;
      if (Object.keys(u).length === 0)
        return;
      const y = h.let("missing");
      for (const S in u) {
        const _ = u[S];
        if (_.length === 0)
          continue;
        const p = (0, r.propertyInData)(h, g, S, m.opts.ownProperties);
        c.setParams({
          property: S,
          depsCount: _.length,
          deps: _.join(", ")
        }), m.allErrors ? h.if(p, () => {
          for (const $ of _)
            (0, r.checkReportMissingProp)(c, $);
        }) : (h.if((0, t._)`${p} && (${(0, r.checkMissingProp)(c, _, y)})`), (0, r.reportMissingProp)(c, y), h.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(c, u = c.schema) {
      const { gen: h, data: g, keyword: m, it: y } = c, S = h.name("valid");
      for (const _ in u)
        (0, n.alwaysValidSchema)(y, u[_]) || (h.if(
          (0, r.propertyInData)(h, g, _, y.opts.ownProperties),
          () => {
            const p = c.subschema({ keyword: m, schemaProp: _ }, S);
            c.mergeValidEvaluated(p, S);
          },
          () => h.var(S, !0)
          // TODO var
        ), c.ok(S));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(dr)), dr;
}
var ln = {}, es;
function gc() {
  if (es) return ln;
  es = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: s, schema: i, data: a, it: c } = o;
      if ((0, t.alwaysValidSchema)(c, i))
        return;
      const u = s.name("valid");
      s.forIn("key", a, (h) => {
        o.setParams({ propertyName: h }), o.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, u), s.if((0, e.not)(u), () => {
          o.error(!0), c.allErrors || s.break();
        });
      }), o.ok(u);
    }
  };
  return ln.default = r, ln;
}
var dn = {}, ts;
function xi() {
  if (ts) return dn;
  ts = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ ae(), s = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: i }) => (0, t._)`{additionalProperty: ${i.additionalProperty}}`
    },
    code(i) {
      const { gen: a, schema: c, parentSchema: u, data: h, errsCount: g, it: m } = i;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: S } = m;
      if (m.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)(m, c))
        return;
      const _ = (0, e.allSchemaProperties)(u.properties), p = (0, e.allSchemaProperties)(u.patternProperties);
      $(), i.ok((0, t._)`${g} === ${n.default.errors}`);
      function $() {
        a.forIn("key", h, (f) => {
          !_.length && !p.length ? b(f) : a.if(d(f), () => b(f));
        });
      }
      function d(f) {
        let v;
        if (_.length > 8) {
          const E = (0, r.schemaRefOrVal)(m, u.properties, "properties");
          v = (0, e.isOwnProperty)(a, E, f);
        } else _.length ? v = (0, t.or)(..._.map((E) => (0, t._)`${f} === ${E}`)) : v = t.nil;
        return p.length && (v = (0, t.or)(v, ...p.map((E) => (0, t._)`${(0, e.usePattern)(i, E)}.test(${f})`))), (0, t.not)(v);
      }
      function k(f) {
        a.code((0, t._)`delete ${h}[${f}]`);
      }
      function b(f) {
        if (S.removeAdditional === "all" || S.removeAdditional && c === !1) {
          k(f);
          return;
        }
        if (c === !1) {
          i.setParams({ additionalProperty: f }), i.error(), y || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(m, c)) {
          const v = a.name("valid");
          S.removeAdditional === "failing" ? (l(f, v, !1), a.if((0, t.not)(v), () => {
            i.reset(), k(f);
          })) : (l(f, v), y || a.if((0, t.not)(v), () => a.break()));
        }
      }
      function l(f, v, E) {
        const P = {
          keyword: "additionalProperties",
          dataProp: f,
          dataPropType: r.Type.Str
        };
        E === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(P, v);
      }
    }
  };
  return dn.default = s, dn;
}
var un = {}, ns;
function yc() {
  if (ns) return un;
  ns = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wn(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ xi(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, parentSchema: c, data: u, it: h } = s;
      h.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(h, r.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const p of g)
        h.definedProperties.add(p);
      h.opts.unevaluated && g.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(i, (0, n.toHash)(g), h.props));
      const m = g.filter((p) => !(0, n.alwaysValidSchema)(h, a[p]));
      if (m.length === 0)
        return;
      const y = i.name("valid");
      for (const p of m)
        S(p) ? _(p) : (i.if((0, t.propertyInData)(i, u, p, h.opts.ownProperties)), _(p), h.allErrors || i.else().var(y, !0), i.endIf()), s.it.definedProperties.add(p), s.ok(y);
      function S(p) {
        return h.opts.useDefaults && !h.compositeRule && a[p].default !== void 0;
      }
      function _(p) {
        s.subschema({
          keyword: "properties",
          schemaProp: p,
          dataProp: p
        }, y);
      }
    }
  };
  return un.default = o, un;
}
var fn = {}, rs;
function $c() {
  if (rs) return fn;
  rs = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, data: c, parentSchema: u, it: h } = s, { opts: g } = h, m = (0, e.allSchemaProperties)(a), y = m.filter((b) => (0, n.alwaysValidSchema)(h, a[b]));
      if (m.length === 0 || y.length === m.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const S = g.strictSchema && !g.allowMatchingProperties && u.properties, _ = i.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(i, h.props));
      const { props: p } = h;
      $();
      function $() {
        for (const b of m)
          S && d(b), h.allErrors ? k(b) : (i.var(_, !0), k(b), i.if(_));
      }
      function d(b) {
        for (const l in S)
          new RegExp(b).test(l) && (0, n.checkStrictMode)(h, `property ${l} matches pattern ${b} (use allowMatchingProperties)`);
      }
      function k(b) {
        i.forIn("key", c, (l) => {
          i.if((0, t._)`${(0, e.usePattern)(s, b)}.test(${l})`, () => {
            const f = y.includes(b);
            f || s.subschema({
              keyword: "patternProperties",
              schemaProp: b,
              dataProp: l,
              dataPropType: r.Type.Str
            }, _), h.opts.unevaluated && p !== !0 ? i.assign((0, t._)`${p}[${l}]`, !0) : !f && !h.allErrors && i.if((0, t.not)(_), () => i.break());
          });
        });
      }
    }
  };
  return fn.default = o, fn;
}
var pn = {}, os;
function vc() {
  if (os) return pn;
  os = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: o, it: s } = n;
      if ((0, e.alwaysValidSchema)(s, o)) {
        n.fail();
        return;
      }
      const i = r.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, i), n.failResult(i, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return pn.default = t, pn;
}
var hn = {}, ss;
function bc() {
  if (ss) return hn;
  ss = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Oe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return hn.default = t, hn;
}
var mn = {}, is;
function wc() {
  if (is) return mn;
  is = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: s, schema: i, parentSchema: a, it: c } = o;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const u = i, h = s.let("valid", !1), g = s.let("passing", null), m = s.name("_valid");
      o.setParams({ passing: g }), s.block(y), o.result(h, () => o.reset(), () => o.error(!0));
      function y() {
        u.forEach((S, _) => {
          let p;
          (0, t.alwaysValidSchema)(c, S) ? s.var(m, !0) : p = o.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, m), _ > 0 && s.if((0, e._)`${m} && ${h}`).assign(h, !1).assign(g, (0, e._)`[${g}, ${_}]`).else(), s.if(m, () => {
            s.assign(h, !0), s.assign(g, _), p && o.mergeEvaluated(p, e.Name);
          });
        });
      }
    }
  };
  return mn.default = r, mn;
}
var gn = {}, as;
function _c() {
  if (as) return gn;
  as = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: o, it: s } = n;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const i = r.name("valid");
      o.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(s, a))
          return;
        const u = n.subschema({ keyword: "allOf", schemaProp: c }, i);
        n.ok(i), n.mergeEvaluated(u);
      });
    }
  };
  return gn.default = t, gn;
}
var yn = {}, cs;
function Sc() {
  if (cs) return yn;
  cs = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: s }) => (0, e.str)`must match "${s.ifClause}" schema`,
      params: ({ params: s }) => (0, e._)`{failingKeyword: ${s.ifClause}}`
    },
    code(s) {
      const { gen: i, parentSchema: a, it: c } = s;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const u = o(c, "then"), h = o(c, "else");
      if (!u && !h)
        return;
      const g = i.let("valid", !0), m = i.name("_valid");
      if (y(), s.reset(), u && h) {
        const _ = i.let("ifClause");
        s.setParams({ ifClause: _ }), i.if(m, S("then", _), S("else", _));
      } else u ? i.if(m, S("then")) : i.if((0, e.not)(m), S("else"));
      s.pass(g, () => s.error(!0));
      function y() {
        const _ = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, m);
        s.mergeEvaluated(_);
      }
      function S(_, p) {
        return () => {
          const $ = s.subschema({ keyword: _ }, m);
          i.assign(g, m), s.mergeValidEvaluated($, g), p ? i.assign(p, (0, e._)`${_}`) : s.setParams({ ifClause: _ });
        };
      }
    }
  };
  function o(s, i) {
    const a = s.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(s, a);
  }
  return yn.default = r, yn;
}
var $n = {}, ls;
function kc() {
  if (ls) return $n;
  ls = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return $n.default = t, $n;
}
var ds;
function Cc() {
  if (ds) return on;
  ds = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ci(), t = /* @__PURE__ */ pc(), n = /* @__PURE__ */ Ei(), r = /* @__PURE__ */ hc(), o = /* @__PURE__ */ mc(), s = /* @__PURE__ */ Ir(), i = /* @__PURE__ */ gc(), a = /* @__PURE__ */ xi(), c = /* @__PURE__ */ yc(), u = /* @__PURE__ */ $c(), h = /* @__PURE__ */ vc(), g = /* @__PURE__ */ bc(), m = /* @__PURE__ */ wc(), y = /* @__PURE__ */ _c(), S = /* @__PURE__ */ Sc(), _ = /* @__PURE__ */ kc();
  function p($ = !1) {
    const d = [
      // any
      h.default,
      g.default,
      m.default,
      y.default,
      S.default,
      _.default,
      // object
      i.default,
      a.default,
      s.default,
      c.default,
      u.default
    ];
    return $ ? d.push(t.default, r.default) : d.push(e.default, n.default), d.push(o.default), d;
  }
  return on.default = p, on;
}
var vn = {}, dt = {}, us;
function Pi() {
  if (us) return dt;
  us = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ Yn(), r = /* @__PURE__ */ jr(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => s(a, a.schema)
  };
  function s(a, c) {
    const { gen: u, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[c] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, m = h.errSchemaPath === "#" ? h.validateName : i(a);
    u.if((0, e._)`!${g}`, () => u.assign(g, m));
  }
  dt.dynamicAnchor = s;
  function i(a) {
    const { schemaEnv: c, schema: u, self: h } = a.it, { root: g, baseId: m, localRefs: y, meta: S } = c.root, { schemaId: _ } = h.opts, p = new n.SchemaEnv({ schema: u, schemaId: _, root: g, baseId: m, localRefs: y, meta: S });
    return n.compileSchema.call(h, p), (0, r.getValidate)(a, p);
  }
  return dt.default = o, dt;
}
var ut = {}, fs;
function Ai() {
  if (fs) return ut;
  fs = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.dynamicRef = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ jr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (s) => o(s, s.schema)
  };
  function o(s, i) {
    const { gen: a, keyword: c, it: u } = s;
    if (i[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const h = i.slice(1);
    if (u.allErrors)
      g();
    else {
      const y = a.let("valid", !1);
      g(y), s.ok(y);
    }
    function g(y) {
      if (u.schemaEnv.root.dynamicAnchors[h]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        a.if(S, m(S, y), m(u.validateName, y));
      } else
        m(u.validateName, y)();
    }
    function m(y, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(s, y), a.let(S, !0);
      }) : () => (0, n.callRef)(s, y);
    }
  }
  return ut.dynamicRef = o, ut.default = r, ut;
}
var bn = {}, ps;
function Ec() {
  if (ps) return bn;
  ps = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pi(), t = /* @__PURE__ */ ae(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return bn.default = n, bn;
}
var wn = {}, hs;
function xc() {
  if (hs) return wn;
  hs = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ai(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return wn.default = t, wn;
}
var ms;
function Pc() {
  if (ms) return vn;
  ms = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pi(), t = /* @__PURE__ */ Ai(), n = /* @__PURE__ */ Ec(), r = /* @__PURE__ */ xc(), o = [e.default, t.default, n.default, r.default];
  return vn.default = o, vn;
}
var _n = {}, Sn = {}, gs;
function Ac() {
  if (gs) return Sn;
  gs = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ir(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Sn.default = t, Sn;
}
var kn = {}, ys;
function Rc() {
  if (ys) return kn;
  ys = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ir(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return kn.default = t, kn;
}
var Cn = {}, $s;
function Nc() {
  if ($s) return Cn;
  $s = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Cn.default = t, Cn;
}
var vs;
function Mc() {
  if (vs) return _n;
  vs = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ac(), t = /* @__PURE__ */ Rc(), n = /* @__PURE__ */ Nc(), r = [e.default, t.default, n.default];
  return _n.default = r, _n;
}
var En = {}, xn = {}, bs;
function Oc() {
  if (bs) return xn;
  bs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Me(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: s }) => (0, e._)`{unevaluatedProperty: ${s.unevaluatedProperty}}`
    },
    code(s) {
      const { gen: i, schema: a, data: c, errsCount: u, it: h } = s;
      if (!u)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: m } = h;
      m instanceof e.Name ? i.if((0, e._)`${m} !== true`, () => i.forIn("key", c, (p) => i.if(S(m, p), () => y(p)))) : m !== !0 && i.forIn("key", c, (p) => m === void 0 ? y(p) : i.if(_(m, p), () => y(p))), h.props = !0, s.ok((0, e._)`${u} === ${n.default.errors}`);
      function y(p) {
        if (a === !1) {
          s.setParams({ unevaluatedProperty: p }), s.error(), g || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, a)) {
          const $ = i.name("valid");
          s.subschema({
            keyword: "unevaluatedProperties",
            dataProp: p,
            dataPropType: t.Type.Str
          }, $), g || i.if((0, e.not)($), () => i.break());
        }
      }
      function S(p, $) {
        return (0, e._)`!${p} || !${p}[${$}]`;
      }
      function _(p, $) {
        const d = [];
        for (const k in p)
          p[k] === !0 && d.push((0, e._)`${$} !== ${k}`);
        return (0, e.and)(...d);
      }
    }
  };
  return xn.default = o, xn;
}
var Pn = {}, ws;
function Tc() {
  if (ws) return Pn;
  ws = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: s, schema: i, data: a, it: c } = o, u = c.items || 0;
      if (u === !0)
        return;
      const h = s.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        o.setParams({ len: u }), o.fail((0, e._)`${h} > ${u}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(c, i)) {
        const m = s.var("valid", (0, e._)`${h} <= ${u}`);
        s.if((0, e.not)(m), () => g(m, u)), o.ok(m);
      }
      c.items = !0;
      function g(m, y) {
        s.forRange("i", y, h, (S) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, m), c.allErrors || s.if((0, e.not)(m), () => s.break());
        });
      }
    }
  };
  return Pn.default = r, Pn;
}
var _s;
function Fc() {
  if (_s) return En;
  _s = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oc(), t = /* @__PURE__ */ Tc(), n = [e.default, t.default];
  return En.default = n, En;
}
var An = {}, Rn = {}, Ss;
function jc() {
  if (Ss) return Rn;
  Ss = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, o) {
      const { gen: s, data: i, $data: a, schema: c, schemaCode: u, it: h } = r, { opts: g, errSchemaPath: m, schemaEnv: y, self: S } = h;
      if (!g.validateFormats)
        return;
      a ? _() : p();
      function _() {
        const $ = s.scopeValue("formats", {
          ref: S.formats,
          code: g.code.formats
        }), d = s.const("fDef", (0, e._)`${$}[${u}]`), k = s.let("fType"), b = s.let("format");
        s.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => s.assign(k, (0, e._)`${d}.type || "string"`).assign(b, (0, e._)`${d}.validate`), () => s.assign(k, (0, e._)`"string"`).assign(b, d)), r.fail$data((0, e.or)(l(), f()));
        function l() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${u} && !${b}`;
        }
        function f() {
          const v = y.$async ? (0, e._)`(${d}.async ? await ${b}(${i}) : ${b}(${i}))` : (0, e._)`${b}(${i})`, E = (0, e._)`(typeof ${b} == "function" ? ${v} : ${b}.test(${i}))`;
          return (0, e._)`${b} && ${b} !== true && ${k} === ${o} && !${E}`;
        }
      }
      function p() {
        const $ = S.formats[c];
        if (!$) {
          l();
          return;
        }
        if ($ === !0)
          return;
        const [d, k, b] = f($);
        d === o && r.pass(v());
        function l() {
          if (g.strictSchema === !1) {
            S.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${c}" ignored in schema at path "${m}"`;
          }
        }
        function f(E) {
          const P = E instanceof RegExp ? (0, e.regexpCode)(E) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(c)}` : void 0, T = s.scopeValue("formats", { key: c, ref: E, code: P });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${T}.validate`] : ["string", E, T];
        }
        function v() {
          if (typeof $ == "object" && !($ instanceof RegExp) && $.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${b}(${i})`;
          }
          return typeof k == "function" ? (0, e._)`${b}(${i})` : (0, e._)`${b}.test(${i})`;
        }
      }
    }
  };
  return Rn.default = n, Rn;
}
var ks;
function zc() {
  if (ks) return An;
  ks = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ jc()).default];
  return An.default = t, An;
}
var rt = {}, Cs;
function Ic() {
  return Cs || (Cs = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.contentVocabulary = rt.metadataVocabulary = void 0, rt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], rt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), rt;
}
var Es;
function Dc() {
  if (Es) return Vt;
  Es = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ec(), t = /* @__PURE__ */ fc(), n = /* @__PURE__ */ Cc(), r = /* @__PURE__ */ Pc(), o = /* @__PURE__ */ Mc(), s = /* @__PURE__ */ Fc(), i = /* @__PURE__ */ zc(), a = /* @__PURE__ */ Ic(), c = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    i.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    o.default,
    s.default
  ];
  return Vt.default = c, Vt;
}
var Nn = {}, xt = {}, xs;
function qc() {
  if (xs) return xt;
  xs = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (xt.DiscrError = e = {})), xt;
}
var Ps;
function Lc() {
  if (Ps) return Nn;
  Ps = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ qc(), n = /* @__PURE__ */ Yn(), r = /* @__PURE__ */ Jn(), o = /* @__PURE__ */ ae(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: u } }) => (0, e._)`{error: ${a}, tag: ${u}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: u, schema: h, parentSchema: g, it: m } = a, { oneOf: y } = g;
      if (!m.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = h.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = c.let("valid", !1), p = c.const("tag", (0, e._)`${u}${(0, e.getProperty)(S)}`);
      c.if((0, e._)`typeof ${p} == "string"`, () => $(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: p, tagName: S })), a.ok(_);
      function $() {
        const b = k();
        c.if(!1);
        for (const l in b)
          c.elseIf((0, e._)`${p} === ${l}`), c.assign(_, d(b[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: p, tagName: S }), c.endIf();
      }
      function d(b) {
        const l = c.name("valid"), f = a.subschema({ keyword: "oneOf", schemaProp: b }, l);
        return a.mergeEvaluated(f, e.Name), l;
      }
      function k() {
        var b;
        const l = {}, f = E(g);
        let v = !0;
        for (let F = 0; F < y.length; F++) {
          let A = y[F];
          if (A?.$ref && !(0, o.schemaHasRulesButRef)(A, m.self.RULES)) {
            const D = A.$ref;
            if (A = n.resolveRef.call(m.self, m.schemaEnv.root, m.baseId, D), A instanceof n.SchemaEnv && (A = A.schema), A === void 0)
              throw new r.default(m.opts.uriResolver, m.baseId, D);
          }
          const z = (b = A?.properties) === null || b === void 0 ? void 0 : b[S];
          if (typeof z != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          v = v && (f || E(A)), P(z, F);
        }
        if (!v)
          throw new Error(`discriminator: "${S}" must be required`);
        return l;
        function E({ required: F }) {
          return Array.isArray(F) && F.includes(S);
        }
        function P(F, A) {
          if (F.const)
            T(F.const, A);
          else if (F.enum)
            for (const z of F.enum)
              T(z, A);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function T(F, A) {
          if (typeof F != "string" || F in l)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          l[F] = A;
        }
      }
    }
  };
  return Nn.default = i, Nn;
}
var Mn = {};
const Vc = "https://json-schema.org/draft/2020-12/schema", Bc = "https://json-schema.org/draft/2020-12/schema", Uc = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Kc = "meta", Hc = "Core and Validation specifications meta-schema", Gc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Wc = ["object", "boolean"], Jc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Yc = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Xc = {
  $schema: Vc,
  $id: Bc,
  $vocabulary: Uc,
  $dynamicAnchor: Kc,
  title: Hc,
  allOf: Gc,
  type: Wc,
  $comment: Jc,
  properties: Yc
}, Zc = "https://json-schema.org/draft/2020-12/schema", Qc = "https://json-schema.org/draft/2020-12/meta/applicator", el = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, tl = "meta", nl = "Applicator vocabulary meta-schema", rl = ["object", "boolean"], ol = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, sl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, il = {
  $schema: Zc,
  $id: Qc,
  $vocabulary: el,
  $dynamicAnchor: tl,
  title: nl,
  type: rl,
  properties: ol,
  $defs: sl
}, al = "https://json-schema.org/draft/2020-12/schema", cl = "https://json-schema.org/draft/2020-12/meta/unevaluated", ll = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, dl = "meta", ul = "Unevaluated applicator vocabulary meta-schema", fl = ["object", "boolean"], pl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, hl = {
  $schema: al,
  $id: cl,
  $vocabulary: ll,
  $dynamicAnchor: dl,
  title: ul,
  type: fl,
  properties: pl
}, ml = "https://json-schema.org/draft/2020-12/schema", gl = "https://json-schema.org/draft/2020-12/meta/content", yl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, $l = "meta", vl = "Content vocabulary meta-schema", bl = ["object", "boolean"], wl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, _l = {
  $schema: ml,
  $id: gl,
  $vocabulary: yl,
  $dynamicAnchor: $l,
  title: vl,
  type: bl,
  properties: wl
}, Sl = "https://json-schema.org/draft/2020-12/schema", kl = "https://json-schema.org/draft/2020-12/meta/core", Cl = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, El = "meta", xl = "Core vocabulary meta-schema", Pl = ["object", "boolean"], Al = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Rl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Nl = {
  $schema: Sl,
  $id: kl,
  $vocabulary: Cl,
  $dynamicAnchor: El,
  title: xl,
  type: Pl,
  properties: Al,
  $defs: Rl
}, Ml = "https://json-schema.org/draft/2020-12/schema", Ol = "https://json-schema.org/draft/2020-12/meta/format-annotation", Tl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Fl = "meta", jl = "Format vocabulary meta-schema for annotation results", zl = ["object", "boolean"], Il = { format: { type: "string" } }, Dl = {
  $schema: Ml,
  $id: Ol,
  $vocabulary: Tl,
  $dynamicAnchor: Fl,
  title: jl,
  type: zl,
  properties: Il
}, ql = "https://json-schema.org/draft/2020-12/schema", Ll = "https://json-schema.org/draft/2020-12/meta/meta-data", Vl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Bl = "meta", Ul = "Meta-data vocabulary meta-schema", Kl = ["object", "boolean"], Hl = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Gl = {
  $schema: ql,
  $id: Ll,
  $vocabulary: Vl,
  $dynamicAnchor: Bl,
  title: Ul,
  type: Kl,
  properties: Hl
}, Wl = "https://json-schema.org/draft/2020-12/schema", Jl = "https://json-schema.org/draft/2020-12/meta/validation", Yl = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Xl = "meta", Zl = "Validation vocabulary meta-schema", Ql = ["object", "boolean"], ed = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, td = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, nd = {
  $schema: Wl,
  $id: Jl,
  $vocabulary: Yl,
  $dynamicAnchor: Xl,
  title: Zl,
  type: Ql,
  properties: ed,
  $defs: td
};
var As;
function rd() {
  if (As) return Mn;
  As = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = Xc, t = il, n = hl, r = _l, o = Nl, s = Dl, i = Gl, a = nd, c = ["/properties"];
  function u(h) {
    return [
      e,
      t,
      n,
      r,
      o,
      g(this, s),
      i,
      g(this, a)
    ].forEach((m) => this.addMetaSchema(m, void 0, !1)), this;
    function g(m, y) {
      return h ? m.$dataMetaSchema(y, c) : y;
    }
  }
  return Mn.default = u, Mn;
}
var Rs;
function od() {
  return Rs || (Rs = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Za(), r = /* @__PURE__ */ Dc(), o = /* @__PURE__ */ Lc(), s = /* @__PURE__ */ rd(), i = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(y = {}) {
        super({
          ...y,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((y) => this.addVocabulary(y)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: y, meta: S } = this.opts;
        S && (s.default.call(this, y), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ Wn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var u = /* @__PURE__ */ se();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return u._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return u.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return u.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return u.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return u.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return u.CodeGen;
    } });
    var h = /* @__PURE__ */ Fr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var g = /* @__PURE__ */ Jn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(zt, zt.exports)), zt.exports;
}
var sd = /* @__PURE__ */ od();
const id = /* @__PURE__ */ ja(sd), ad = "https://json-schema.org/draft/2020-12/schema", cd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", ld = "gufe-viz payload", dd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", ud = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], fd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Dr = {
  $schema: ad,
  $id: cd,
  title: ld,
  description: dd,
  oneOf: ud,
  $defs: fd
}, fp = [
  "AlchemicalNetworkViz",
  "ChemicalSystemViz",
  "LigandAtomMappingViz",
  "LigandNetworkViz",
  "ProteinComponentViz",
  "ProteinMembraneComponentViz",
  "ProtocolViz",
  "SmallMoleculeComponentViz",
  "SolvatedPDBComponentViz",
  "SolventComponentViz",
  "TransformationViz",
  "UnknownComponentViz"
], qr = Dr.$id, Lr = new id({ allErrors: !0, strict: !1 });
Lr.addSchema(Dr, qr);
const Ns = Lr.getSchema(qr), Ri = Object.entries(Dr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), pp = Ri, Vr = /* @__PURE__ */ new Map();
for (const e of Ri) {
  const t = Lr.getSchema(`${qr}#/$defs/${e}`);
  t && Vr.set(e, t);
}
const Sr = { valid: !0, issues: [] };
function kr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function pd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Vr.get(t) : void 0;
  return n ? n(e) ? Sr : { valid: !1, issues: kr(n.errors) } : Ns(e) ? Sr : { valid: !1, issues: kr(Ns.errors) };
}
function hp(e, t) {
  const n = Vr.get(e);
  return n ? n(t) ? Sr : { valid: !1, issues: kr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function hd(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Br = {
  AlchemicalNetworkViz: "gufe-alchemical-network",
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  ProteinMembraneComponentViz: "gufe-protein",
  ProtocolViz: "gufe-protocol",
  SolvatedPDBComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network",
  ChemicalSystemViz: "gufe-chemical-system",
  LigandAtomMappingViz: "gufe-atom-mapping",
  TransformationViz: "gufe-transformation",
  SolventComponentViz: "gufe-solvent",
  UnknownComponentViz: "gufe-unknown-component"
};
function Ni(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Br[t]) return md(t);
  const { valid: n, issues: r } = pd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: hd(r)
  };
}
function md(e) {
  const t = Object.keys(Br).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function mp(e) {
  return Ni(e)?.message ?? null;
}
class gd extends Re {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    da("payload", n, this);
    const r = Ni(n);
    if (r)
      return t.appendChild(yd(r, n)), {};
    const o = n.type, s = Br[o], i = document.createElement(s);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function yd(e, t) {
  const n = j(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(fe(e.message));
  const r = (s, i) => j(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};` : `background:${O.panelBg};color:${O.textMuted2};border:1px solid ${O.cardBorder};`),
    s
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = $d(t);
  return o && n.appendChild(r(o, !1)), n;
}
function $d(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Be(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Be(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ne("gufe-view", gd);
const ur = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, Ur = {
  threeDmol: `https://unpkg.com/3dmol@${ur.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${ur.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${ur.d3}/+esm`
};
function Kr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Mi(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let at = null, ft = null;
function Hr() {
  if (ft) return ft;
  const e = Kr("threeDmol");
  return e ? (ft = e.then((t) => at = t || window.$3Dmol), ft) : (ft = (async () => {
    if (window.$3Dmol) return at = window.$3Dmol;
    if (await Mi(Ur.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return at = window.$3Dmol;
  })(), ft);
}
let pt = null;
function Xn() {
  if (pt) return pt;
  const e = Kr("rdkit");
  return e ? (pt = e.then((t) => window.RDKit = t), pt) : (pt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Mi(Ur.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), pt);
}
let fr = null;
function Oi() {
  if (!fr) {
    const e = Ur.d3;
    fr = Kr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return fr;
}
function Ti(e, t) {
  let n = !1, r = !1;
  const o = () => {
    n = !0;
  }, s = () => {
    n = !1;
  }, i = (a) => {
    a.stopPropagation();
    const c = a.ctrlKey || a.metaKey;
    if (n || c) {
      (t.onZoom(a) !== !1 || c) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, wd(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", s), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", s);
    }
  };
}
function vd(e) {
  const t = (o) => o.preventDefault(), n = (o) => {
    o.touches?.length > 1 && o.preventDefault();
  }, r = ["gesturestart", "gesturechange", "gestureend"];
  for (const o of r) e.addEventListener(o, t, { passive: !1 });
  return e.addEventListener("touchmove", n, { passive: !1 }), {
    cleanup() {
      for (const o of r) e.removeEventListener(o, t);
      e.removeEventListener("touchmove", n);
    }
  };
}
const bd = 1600;
function wd(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, bd);
}
const _d = { min: 0.25, max: 12 }, Sd = 150;
function Ms(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Sd) - t;
}
function kd(e, t = _d) {
  const n = Ms(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const s = () => {
    if (!r) return o;
    const i = Ms(e);
    return Number.isFinite(i) && i > 0 ? n / i : o;
  };
  return {
    zoomBy(i) {
      const a = s(), c = Math.min(t.max, Math.max(t.min, a * i)), u = c / a;
      return !Number.isFinite(u) || Math.abs(u - 1) < 1e-9 ? !1 : (o = c, e.zoom(u), e.render(), !0);
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: s
  };
}
const Cd = 2e-3;
function Fi(e) {
  return Math.exp(-e.deltaY * Cd);
}
function Gr(e, t, n = {}) {
  const r = kd(t, n.bounds), o = Ti(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (s) => r.zoomBy(Fi(s))
  });
  return { ...r, cleanup: o.cleanup };
}
function Wr(e, t = "Reset view") {
  const n = j("button", _t, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const pr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Ed = [
  "#FF0000",
  "#FF0C00",
  "#FF1800",
  "#FF2300",
  "#FF2F00",
  "#FF3B00",
  "#FF4700",
  "#FF5300",
  "#FF5F00",
  "#FF6A00",
  "#FF7600",
  "#FF8200",
  "#FF8E00",
  "#FF9A00",
  "#FFA500",
  "#FFB100",
  "#FFBD00",
  "#FFC900",
  "#FFD500",
  "#FFE000",
  "#FFEC00",
  "#FCF500",
  "#F8FD00",
  "#EEFF00",
  "#E2FF00",
  "#D7FF00",
  "#CBFF00",
  "#BFFF00",
  "#B3FF00",
  "#A7FF00",
  "#9CFF00",
  "#90FF00",
  "#84FF00",
  "#78FF00",
  "#6CFF00",
  "#61FF00",
  "#55FF00",
  "#49FF00",
  "#3DFF00",
  "#31FF00",
  "#25FF00",
  "#1AFF00",
  "#0EFF00",
  "#06FF04",
  "#02FF0C",
  "#00FF16",
  "#00FF21",
  "#00FF2D",
  "#00FF39",
  "#00FF45",
  "#00FF51",
  "#00FF5C",
  "#00FF68",
  "#00FF74",
  "#00FF80",
  "#00FF8C",
  "#00FF97",
  "#00FFA3",
  "#00FFAF",
  "#00FFBB",
  "#00FFC7",
  "#00FFD3",
  "#00FFDE",
  "#00FFEA",
  "#00FFFC",
  "#00F6FF",
  "#00EAFF",
  "#00DFFF",
  "#00D3FF",
  "#00C7FF",
  "#00BBFF",
  "#00AFFF",
  "#00A4FF",
  "#0098FF",
  "#008CFF",
  "#0080FF",
  "#0074FF",
  "#0069FF",
  "#005DFF",
  "#0051FF",
  "#0045FF",
  "#0039FF",
  "#002DFF",
  "#0022FF",
  "#0016FF",
  "#020CFF",
  "#0604FF",
  "#0E00FF",
  "#1900FF",
  "#2500FF",
  "#3100FF",
  "#3D00FF",
  "#4900FF",
  "#5400FF",
  "#6000FF",
  "#6C00FF",
  "#7800FF",
  "#8400FF",
  "#9000FF",
  "#9B00FF",
  "#A700FF",
  "#B300FF",
  "#BF00FF",
  "#CB00FF",
  "#D600FF",
  "#E200FF",
  "#EE00FF",
  "#F800FD",
  "#FC00F5",
  "#FF00ED",
  "#FF00E1",
  "#FF00D5",
  "#FF00C9",
  "#FF00BD",
  "#FF00B1",
  "#FF00A6",
  "#FF009A",
  "#FF008E",
  "#FF0082",
  "#FF0076",
  "#FF006B",
  "#FF005F",
  "#FF0053",
  "#FF0047",
  "#FF003B",
  "#FF0030",
  "#FF0024",
  "#FF0018"
], gp = "hsv", U = [0, 0, 0], xd = {
  0: U,
  1: U,
  2: U,
  3: U,
  4: U,
  5: U,
  6: U,
  7: U,
  8: U,
  9: U,
  10: U,
  11: U,
  12: U,
  13: U,
  14: U,
  15: U,
  16: U,
  17: U,
  18: U,
  19: U,
  20: U,
  21: U,
  22: U,
  23: U,
  24: U,
  25: U,
  26: U,
  27: U,
  28: U,
  29: U,
  30: U,
  31: U,
  32: U,
  33: U,
  34: U,
  35: U,
  36: U,
  37: U,
  38: U,
  39: U,
  40: U,
  41: U,
  42: U,
  43: U,
  44: U,
  45: U,
  46: U,
  47: U,
  48: U,
  49: U,
  50: U,
  51: U,
  52: U,
  53: U,
  54: U,
  55: U,
  56: U,
  57: U,
  58: U,
  59: U,
  60: U,
  61: U,
  62: U,
  63: U,
  64: U,
  65: U,
  66: U,
  67: U,
  68: U,
  69: U,
  70: U,
  71: U,
  72: U,
  73: U,
  74: U,
  75: U,
  76: U,
  77: U,
  78: U,
  79: U,
  80: U,
  81: U,
  82: U,
  83: U,
  84: U,
  85: U,
  86: U,
  87: U,
  88: U,
  89: U,
  90: U,
  91: U,
  92: U,
  93: U,
  94: U,
  95: U,
  96: U,
  97: U,
  98: U,
  99: U,
  100: U,
  101: U,
  102: U,
  103: U,
  104: U,
  105: U,
  106: U,
  107: U,
  108: U,
  109: U,
  110: U,
  111: U,
  112: U,
  113: U,
  114: U,
  115: U,
  116: U,
  117: U,
  118: U
}, Pd = "rdkit", Ad = !0, Rd = !0, Nd = !0, Md = !0, Od = "rdkit", Td = "filled", Fd = 0.42, jd = 1.5, zd = !0, Id = "show", Dd = "mono", qd = 0.51, Ld = 0.74, Vd = 1.6, Bd = 1.7, Ud = 5, Kd = 0.3, Hd = "#d62828", Gd = "#d62828", Wd = "#015ab5", Jd = !1, Yd = "", Xd = "#7c3aed", Zd = {
  layout: Pd,
  alignPair: Ad,
  atomNumbers: Rd,
  createdDestroyed: Nd,
  modified: Md,
  style: Od,
  circles: Td,
  circleRadius: Fd,
  circleStroke: jd,
  boundary: zd,
  hydrogens: Id,
  elementColors: Dd,
  numScale: qd,
  labelScale: Ld,
  bondWidth: Vd,
  markWidth: Bd,
  haloWidth: Ud,
  haloOpacity: Kd,
  destroyedColor: Hd,
  createdColor: Gd,
  modifiedColor: Wd,
  stereo: Jd,
  customSpec: Yd,
  customColor: Xd
}, Qd = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: pr.uniqueAtom,
  createdColor: pr.uniqueAtom,
  modifiedColor: pr.elementChange,
  boundary: !0,
  circles: "outline",
  circleRadius: 0.3,
  circleStroke: 1.2,
  hydrogens: "show",
  elementColors: "mono",
  atomNumbers: !0,
  stereo: !1,
  numScale: 0.5,
  labelScale: 0.6,
  bondWidth: 2,
  markWidth: 2,
  haloWidth: 10,
  haloOpacity: 0.35,
  customSpec: "",
  customColor: "#7C3AED"
}, eu = ["rdkit", "coordgen", "conformer"], tu = ["rdkit", "recolor", "halo"], nu = ["outline", "filled", "off"], ru = ["show", "dim", "hide"], ou = ["cpk", "mono"], su = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, iu = /^#[0-9a-fA-F]{6}$/;
function Pt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ge(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = su[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const ht = (e, t) => typeof e == "boolean" ? e : t, On = (e, t) => typeof e == "string" && iu.test(e) ? e : t;
function au(e) {
  const t = e && typeof e == "object" ? e : {}, n = Qd;
  return {
    version: 1,
    layout: Pt(t.layout, eu, n.layout),
    alignPair: ht(t.alignPair, n.alignPair),
    style: Pt(t.style, tu, n.style),
    createdDestroyed: ht(t.createdDestroyed, n.createdDestroyed),
    modified: ht(t.modified, n.modified),
    destroyedColor: On(t.destroyedColor, n.destroyedColor),
    createdColor: On(t.createdColor, n.createdColor),
    modifiedColor: On(t.modifiedColor, n.modifiedColor),
    boundary: ht(t.boundary, n.boundary),
    circles: Pt(t.circles, nu, n.circles),
    circleRadius: Ge(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ge(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Pt(t.hydrogens, ru, n.hydrogens),
    elementColors: Pt(t.elementColors, ou, n.elementColors),
    atomNumbers: ht(t.atomNumbers, n.atomNumbers),
    stereo: ht(t.stereo, n.stereo),
    numScale: Ge(t.numScale, "numScale", n.numScale),
    labelScale: Ge(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ge(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ge(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ge(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ge(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: On(t.customColor, n.customColor)
  };
}
const Te = au(Zd);
function Os(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const s = /^([LlRr])[:=](.*)$/.exec(o), i = s ? s[1].toLowerCase() === "l" ? "left" : "right" : "both", a = s ? s[2] : o, c = (h) => {
      i !== "right" && t.add(h), i !== "left" && n.add(h);
    }, u = /^(\d+)-(\d+)$/.exec(a);
    if (u) {
      const h = Math.min(+u[1], +u[2]), g = Math.min(Math.max(+u[1], +u[2]), h + r - 1);
      for (let m = h; m <= g; m++) c(m);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function hr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [s, i] = e.bonds[o], a = t.has(s), c = t.has(i);
    (n ? a || c : a && c) && r.push(o);
  }
  return r;
}
function Ts(e) {
  return `0x${e.replace("#", "")}`;
}
function Cr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function cu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function lu(e, t, n) {
  const r = new Set(t.atoms), o = new Set(hr(e, r, !0));
  return {
    deletions: hr(e, r, n),
    changes: hr(e, new Set(t.elements), n).filter((s) => !o.has(s))
  };
}
function Fs(e, t, n, r) {
  const o = lu(t, n, e.boundary), s = [];
  return e.createdDestroyed && n.atoms.length && s.push({
    atoms: new Set(n.atoms),
    bonds: o.deletions,
    color: r === "left" ? e.destroyedColor : e.createdColor,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && n.elements.length && s.push({
    atoms: new Set(n.elements),
    bonds: o.changes,
    color: e.modifiedColor,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), s;
}
let mt = null;
function du(e) {
  if (mt !== null) return mt;
  mt = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (mt = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return mt || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), mt;
}
function uu(e, t) {
  return e.style === "rdkit" ? "rdkit" : du(t) ? e.style : "rdkit";
}
function fu(e, t, n, r, o, s) {
  const i = {
    width: t,
    height: t,
    addAtomIndices: e.atomNumbers,
    addStereoAnnotation: e.stereo,
    annotationFontScale: e.numScale,
    baseFontSize: e.labelScale,
    bondLineWidth: e.bondWidth,
    scaleBondWidth: !1
  };
  e.elementColors === "mono" && (i.atomColourPalette = xd), o === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, c = {}, u = {};
  for (const y of n) {
    const S = Cr(y.color);
    if (o === "rdkit") for (const p of y.bonds) u[p] = S;
    if (o === "recolor" && e.circles === "off") continue;
    const _ = o === "recolor" && e.circles === "filled" ? cu(S, 0.7) : S;
    for (const p of y.atoms)
      a[p] = _, c[p] = e.circleRadius;
  }
  const h = Cr(e.customColor);
  for (const y of r)
    y < s && (a[y] = h, c[y] = e.circleRadius);
  const g = Object.keys(a).map(Number);
  g.length && (i.atoms = g, i.highlightAtomColors = a, i.highlightAtomRadii = c);
  const m = Object.keys(u).map(Number);
  return m.length && (i.bonds = m, i.highlightBondColors = u), i;
}
function pu(e, t, n, r) {
  let o = null;
  try {
    return o = e.get_mol(t, JSON.stringify({ removeHs: !1 })), o ? o.get_svg_with_highlights ? o.get_svg_with_highlights(JSON.stringify(r)) || null : o.get_svg(n, n) || null : null;
  } catch (s) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", he(s)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
const hu = "http://www.w3.org/2000/svg";
function ji(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Jr(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const s = o.tagName.toLowerCase();
    (s === "ellipse" || s === "circle" || s === "rect") === n && r.push(o);
  }
  return r;
}
function zi(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function js(e, t, n, r, o, s) {
  for (const i of r)
    for (const a of ji(e, i)) {
      const c = a.style;
      zi(a) ? c.fill = o : (c.stroke = o, c.strokeWidth = `${t.markWidth}px`);
    }
  if (s)
    for (const i of n)
      for (const a of Jr(e, i, !1)) a.style.fill = s;
}
function mu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const s = o.createElementNS(hu, "g");
  s.setAttribute("data-gufe-halo", "1"), s.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of ji(e, a)) {
      if (zi(c)) continue;
      const u = c.cloneNode(!0);
      u.removeAttribute("class"), u.style.fill = "none", u.style.stroke = r, u.style.strokeWidth = `${t.haloWidth}px`, u.style.strokeLinecap = "round", u.style.strokeLinejoin = "round", u.style.strokeOpacity = "1", s.appendChild(u);
    }
  if (!s.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(s, i.nextSibling) : i ? e.appendChild(s) : e.insertBefore(s, e.firstChild);
}
function gu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Jr(e, s, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function yu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Jr(e, s, !0)) {
        const a = i.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function $u(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const s = o.style;
          n.hydrogens === "hide" ? s.display = "none" : s.opacity = "0.22";
        }
  }
}
function vu(e, t, n, r, o, s) {
  if (s !== "rdkit")
    for (const i of r)
      if (s === "recolor") {
        const a = n.circles === "filled";
        js(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? gu(e, n, i.atoms, o, i.color) : a && i.edgeOnFill && yu(e, n, i.atoms, o, i.color);
      } else
        mu(e, n, i.bonds, i.color), js(e, n, i.atoms, i.bonds, i.color, null);
  $u(e, t, n);
}
const Zn = `
`, Er = "$$$$";
function xr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Zn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), s = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const i = [], a = [];
  for (let h = 0; h < o; h++) {
    const g = n[4 + h];
    if (g == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(g.substring(0, 10)) || 0,
      parseFloat(g.substring(10, 20)) || 0,
      parseFloat(g.substring(20, 30)) || 0
    ]), a.push(g.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let h = 0; h < (isFinite(s) ? s : 0); h++) {
    const g = n[4 + o + h];
    if (g == null) break;
    const m = parseInt(g.substring(0, 3), 10), y = parseInt(g.substring(3, 6), 10), S = parseInt(g.substring(6, 9), 10);
    !isFinite(m) || !isFinite(y) || c.push([m - 1, y - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: i };
}
function bu(e) {
  const t = e.symbols.length, n = e.bonds.length, r = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let o = 0; o < t; o++) {
    const s = e.coords[o];
    r.push(
      s[0].toFixed(4).padStart(10) + s[1].toFixed(4).padStart(10) + s[2].toFixed(4).padStart(10) + ` ${e.symbols[o].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let o = 0; o < n; o++) {
    const s = e.bonds[o], i = s[2] === 12 ? 4 : s[2];
    r.push(
      String(s[0] + 1).padStart(3) + String(s[1] + 1).padStart(3) + String(i).padStart(3) + "  0  0  0  0"
    );
  }
  return r.push("M  END"), r.join(Zn);
}
const wu = (e) => `${bu(e)}${Zn}${Er}`, _u = (e) => e.indexOf(Er) >= 0 ? e : `${e}${Zn}${Er}`;
function Ii(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Di(e, t, n, r, o) {
  let s = null;
  try {
    if (s = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !s) return null;
    if (r !== "conformer")
      try {
        s.set_new_coords(r === "coordgen");
      } catch {
      }
    if (o?.atoms.length && s.get_svg_with_highlights) {
      const i = {}, a = {};
      for (const u of o.atoms)
        i[u] = o.color, a[u] = o.radius;
      const c = {
        width: n,
        height: n,
        atoms: [...o.atoms],
        highlightAtomColors: i,
        highlightAtomRadii: a
      };
      return s.get_svg_with_highlights(JSON.stringify(c)) || null;
    }
    return s.get_svg(n, n) || null;
  } catch (i) {
    return console.warn("[gufe-viz] depictSVG threw -", he(i)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
function qi(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const zs = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Pr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, gt = (e) => e in Pr, Is = 400, mr = "position:absolute;inset:0;min-width:0;min-height:0;";
class Su extends Re {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", s = n.smiles, i = n.total_charge, a = j("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = j(
      "div",
      `${mr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${$t.canvas2D};`
    );
    a.appendChild(c);
    const u = hi();
    u.wrap.style.cssText = mr, a.appendChild(u.wrap);
    const h = j(
      "div",
      `${mr}overflow:auto;padding:16px 20px;background:${O.panelBg};color:${O.textPrimary};font-size:${Z.body};`
    );
    a.appendChild(h);
    const g = r ? Ii(r) : null, m = [
      ["Name", o || ot, !1],
      ["SMILES", s || ot, !0],
      ["Charge", i == null ? ot : String(i), !1],
      ["Atoms", g ? String(g.atoms) : ot, !1],
      ["Bonds", g ? String(g.bonds) : ot, !1]
    ], y = j("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${re.xl} 20px;align-items:baseline;`);
    h.appendChild(y);
    for (const [F, A, z] of m) {
      y.appendChild(
        j(
          "div",
          `font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${O.textMuted2};`,
          F
        )
      );
      const D = j(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${O.textPrimary}` + (z ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Z.small};` : ""),
        A
      );
      D.title = A, y.appendChild(D);
    }
    const S = gi(t), _ = j("div", _r, o || "Unnamed molecule");
    S && a.appendChild(_);
    const p = wt(
      "small-molecule.mode",
      "2d",
      zs.map((F) => F.id)
    ), $ = vt("small-molecule.spin", !1);
    let d = p.get(), k = $.get(), b = null, l = null;
    const f = () => {
      try {
        b?.spin(k && gt(d) ? "y" : !1);
      } catch {
      }
    }, v = (F) => {
      d = F, c.style.visibility = d === "2d" ? "visible" : "hidden", u.wrap.style.visibility = gt(d) ? "visible" : "hidden", h.style.visibility = d === "info" ? "visible" : "hidden", _.style.display = d === "info" || !S ? "none" : "block", T.disabled = !gt(d), T.style.opacity = gt(d) ? "1" : "0.5", gt(d) && b && (b.setStyle({}, Pr[d]), b.resize(), b.render()), f();
    }, E = j("div", ai), P = Bn(zs, d, (F) => v(F), p), T = pi(
      "Spin",
      k,
      (F) => {
        k = F, f();
      },
      { title: "Toggle continuous rotation", remember: $ }
    );
    return P.insertBefore(T, P.lastElementChild), E.appendChild(P), a.appendChild(E), v(d), !r || !r.trim() ? (c.appendChild(fe("No molecule provided")), u.container.appendChild(fe("No molecule provided")), {}) : (c.appendChild(fe("Loading 2D depiction...")), Xn().then((F) => {
      const A = Di(F, r, Is, Te.layout);
      A ? qi(c, A, Is) : c.replaceChildren(fe("Failed to parse molecule", !0));
    }).catch((F) => {
      c.replaceChildren(fe(`RDKit failed to load: ${he(F)}`, !0));
    }), u.container.appendChild(fe("Loading 3D viewer...")), Hr().then(() => {
      u.container.replaceChildren(), b = at.createViewer(u.container, { backgroundColor: $t.viewer }), b.addModel(_u(r), "sdf"), b.setStyle({}, Pr[gt(d) ? d : "stick"]), b.zoomTo(), b.render(), l = Gr(u.container, b), f();
    }).catch((F) => {
      u.container.replaceChildren(fe(`3D render failed: ${he(F)}`, !0));
    }), {
      onResize() {
        b && (b.resize(), b.render());
      },
      cleanup() {
        if (l?.cleanup(), l = null, !!b) {
          try {
            b.spin(!1);
          } catch {
          }
          try {
            b.clear();
          } catch {
          }
          b = null;
        }
      }
    });
  }
}
Ne("gufe-small-molecule", Su);
const Li = ["HOH", "WAT", "SOL", "TIP3"], Ds = { hetflag: !1 }, ku = { hetflag: !0 }, Cu = { resn: Li }, We = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Eu(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, s = 0, i = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const u = c.slice(0, 6);
    if (u === "ENDMDL") break;
    if (u !== "ATOM  " && u !== "HETATM") continue;
    r++, u === "HETATM" && o++;
    const h = c.slice(17, 20).trim(), g = c.slice(21, 22).trim() || "_", m = c.slice(22, 26).trim(), y = c.slice(26, 27).trim();
    Li.indexOf(h) !== -1 && s++, t.add(g), n.add(`${g}|${m}${y}|${h}`);
    const S = parseInt(m, 10);
    isNaN(S) || (S < i && (i = S), S > a && (a = S));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: o,
    waters: s,
    heteroNonWater: o - s,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function xu(e) {
  return `${kt(e.chains)} chains · ${kt(e.residues)} residues · ${kt(e.atoms)} atoms · ${kt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${kt(e.waters)} water)` : "");
}
function Pu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function qs(e, t, n, r) {
  const o = r || (() => {
  }), s = Pu(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Ds,
    t.rep === "stick" ? { stick: { radius: We.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: We.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    ku,
    t.hetero ? {
      stick: { radius: We.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: We.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Cu,
    t.waters ? {
      stick: { radius: We.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: We.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    o(null), e.render();
    return;
  }
  o(
    n && n.atoms > We.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(at.SurfaceType.VDW, { opacity: We.surfaceOpacity, ...s }, Ds)
      ).then(() => {
        o(null), e.render();
      }).catch((i) => o(`Surface failed: ${he(i)}`, "error"));
    } catch (i) {
      o(`Surface failed: ${he(i)}`, "error");
    }
  }, 30);
}
const Ls = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Vs = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Au extends Re {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, o = n.name ?? "", s = n.type !== "ProteinComponentViz", i = wt(
      "protein.representation",
      "cartoon",
      Ls.map((E) => E.id)
    ), a = wt(
      "protein.color",
      "chain",
      Vs.map((E) => E.id)
    ), c = vt("protein.waters", s), u = vt("protein.hetero", !0), h = vt("protein.spin", !1), g = {
      rep: i.get(),
      color: a.get(),
      waters: c.get(),
      hetero: u.get(),
      spin: h.get()
    };
    let m = null, y = null, S = null;
    const _ = j(
      "div",
      Mr.top
    );
    t.appendChild(_), _.appendChild(
      j("span", `font-weight:700;font-size:${Z.heading};letter-spacing:.02em;color:${O.titleColor};`, o || "Protein")
    );
    const p = (E) => j("span", `font-size:${Z.small};color:${O.textMuted};`, E);
    _.appendChild(p("Style:")), _.appendChild(
      Bn(
        Ls,
        g.rep,
        (E) => {
          g.rep = E, v();
        },
        i
      )
    ), _.appendChild(p("Color:")), _.appendChild(
      Un(
        Vs,
        g.color,
        (E) => {
          g.color = E, v();
        },
        a
      )
    );
    const $ = j("div", "display:flex;gap:4px;");
    _.appendChild($);
    const d = [
      ["waters", "Waters", "Show water molecules", c, () => v()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", u, () => v()],
      ["spin", "Spin", "Rotate the view continuously", h, () => m?.spin(g.spin ? "y" : !1)]
    ];
    for (const [E, P, T, F, A] of d)
      $.appendChild(
        pi(
          P,
          g[E],
          (z) => {
            g[E] = z, A();
          },
          { title: T, remember: F }
        )
      );
    $.appendChild(Wr(() => y?.reset()));
    const k = j("span", `margin-left:auto;font-size:${Z.small};white-space:nowrap;color:${O.textMuted2};`);
    _.appendChild(k);
    const b = hi();
    t.appendChild(b.wrap);
    const l = j(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Z.body};z-index:20;display:none;pointer-events:none;`
    );
    b.wrap.appendChild(l);
    const f = (E, P) => {
      if (E == null) {
        l.style.display = "none";
        return;
      }
      l.textContent = E, l.style.display = "block";
      const T = P === "error";
      l.style.background = T ? O.warnBg : O.toolbarBg, l.style.color = T ? O.warnFg : O.textMuted, l.style.border = `1px solid ${T ? O.warnBorder : O.toolbarBorder}`;
    };
    function v() {
      m && qs(m, g, S, f);
    }
    if (!r || !r.trim())
      return f("No protein data - waiting for a PDB payload."), {};
    try {
      S = Eu(r), k.textContent = xu(S);
    } catch (E) {
      f(`⚠ PDB parse error: ${he(E)}`, "error");
    }
    return f("Loading 3D viewer..."), Hr().then(() => {
      m = at.createViewer(b.container, { backgroundColor: $t.viewer }), m.addModel(r, "pdb"), qs(m, g, S, f), m.zoomTo(), m.spin(g.spin ? "y" : !1), m.render(), y = Gr(b.container, m);
    }).catch((E) => {
      f(`⚠ Failed to render structure: ${he(E)}`, "error");
    }), {
      onResize() {
        m && (m.resize(), m.render());
      },
      cleanup() {
        if (y?.cleanup(), y = null, !!m) {
          try {
            m.spin(!1);
          } catch {
          }
          try {
            m.clear();
          } catch {
          }
          m = null;
        }
      }
    };
  }
}
Ne("gufe-protein", Au);
function Ft(e) {
  const t = /* @__PURE__ */ new Map();
  return Ar(e, t, /* @__PURE__ */ new Set()), t;
}
function Ar(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Ar(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const s = o["gufe-key"];
      typeof s == "string" && s && !t.has(s) && t.set(s, o);
    }
  for (const o of Object.values(e)) Ar(o, t, n);
}
function Xe(e, t) {
  return t ? e.get(t) : void 0;
}
function we(e, t, n) {
  const r = Xe(e, t);
  return r?.type === n ? r : void 0;
}
function Yr(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const s = e.get(o);
    s && (r.add(o), n.push(s));
  }
  return n;
}
function Ze(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const Xr = "Cmd/Ctrl-click to select several.";
function Ru(e, t, n, r, o) {
  const s = (i) => o === "keys" ? i["gufe-key"] : Ze(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(s).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${s(i.from)}, ${s(i.to)}`).join(`
`);
}
function Nu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Bs(e, t)), navigator.clipboard || Bs(e, t);
}
function Bs(e, t) {
  const n = j("textarea", `width:100%;height:80px;font-size:${Z.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Mu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = j("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Vi(e) {
  const { words: t } = e, n = wt(e.setting, "names", ["names", "keys"]), r = j("div", "display:flex;flex-direction:column;gap:6px;"), o = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
  o.appendChild(j("span", "", "copy as"));
  const s = Un(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    n.get(),
    () => {
    },
    n
  );
  s.style.flex = "1", o.appendChild(s), r.appendChild(o);
  const i = j("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`), a = (h) => {
    i.textContent = h;
  }, c = j("div", "display:flex;gap:4px;"), u = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [h, g, m] of u) {
    const y = j("button", `${_t}flex:1;`, g.button);
    y.title = m, y.onclick = (S) => {
      const _ = s.value, p = Ru(e.nodes, e.edges, e.selected, h, _);
      if (!p) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : h === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Xr}` : "Nothing to copy."
        );
        return;
      }
      const $ = p.split(`
`).length;
      S.shiftKey ? (Mu(p, `selected-${g.plural}.txt`), a(`Saved ${$} ${g.plural} to a file.`)) : (Nu(p, r), a(
        h === "edges" ? `Copied ${$} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, c.appendChild(y);
  }
  return r.appendChild(c), r.appendChild(i), r.appendChild(j("div", `font-size:${Z.tiny};color:${O.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Bi = "http://www.w3.org/2000/svg";
function le(e, t = {}) {
  const n = document.createElementNS(Bi, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function Us(e, t) {
  const n = document.createElementNS(Bi, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Ou = 3;
function Ui(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), s = Math.max(s, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: s + t, maxY: i + n };
}
const Tu = { min: 0.15, max: 5 }, Fu = 1e-9;
function Ki(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? Tu;
  let s = 1, i = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${s})`), n.onTransform?.(s, i, a);
  }, u = () => {
    const D = e.getBoundingClientRect();
    return {
      width: D.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: D.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, h = (D, Y, G) => Math.min(1, Y / (D.maxX - D.minX + r * 2), G / (D.maxY - D.minY + r * 2)), g = () => {
    const D = n.bounds();
    if (!D) return o.min;
    const { width: Y, height: G } = u();
    return Math.min(o.min, h(D, Y, G));
  }, m = (D) => Math.min(o.max, Math.max(g(), s * D)), y = () => {
    s = 1, i = 0, a = 0;
    const D = n.bounds();
    if (!D) {
      c();
      return;
    }
    const { width: Y, height: G } = u();
    s = h(D, Y, G), i = Y / 2 - (D.minX + D.maxX) / 2 * s, a = G / 2 - (D.minY + D.maxY) / 2 * s, c();
  }, _ = Ti(e, {
    onZoom: (D) => {
      const Y = e.getBoundingClientRect(), G = D.clientX - Y.left, oe = D.clientY - Y.top, X = m(Fi(D)), J = X / s;
      return i = G - (G - i) * J, a = oe - (oe - a) * J, s = X, c(), Math.abs(J - 1) > Fu;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), p = /* @__PURE__ */ new Map();
  let $ = null, d = null, k = !1, b = null;
  const l = (D) => ({
    x: D.clientX - i,
    y: D.clientY - a,
    from: { x: D.clientX, y: D.clientY }
  }), f = (D) => {
    D.pointerType === "touch" && p.size > 1 || (d = l(D), k = !1);
  }, v = (D) => {
    $ || (b && D.pointerType === "touch" && (d = { x: b.x - i, y: b.y - a, from: b }, b = null), d && (Math.hypot(D.clientX - d.from.x, D.clientY - d.from.y) > Ou && (k = !0), i = D.clientX - d.x, a = D.clientY - d.y, c()));
  }, E = () => {
    d = null;
  };
  e.addEventListener("pointerdown", f), e.addEventListener("pointermove", v), e.addEventListener("pointerup", E), e.addEventListener("pointercancel", E), e.addEventListener("pointerleave", E);
  const P = () => {
    const [D, Y] = [...p.values()];
    return { cx: (D.x + Y.x) / 2, cy: (D.y + Y.y) / 2, span: Math.max(1, Math.hypot(D.x - Y.x, D.y - Y.y)) };
  }, T = (D) => {
    if (D.pointerType === "touch") {
      if (p.set(D.pointerId, { x: D.clientX, y: D.clientY }), p.size !== 2) {
        $ = null;
        return;
      }
      $ = P(), d = null, k = !0;
    }
  }, F = (D) => {
    if (D.pointerType !== "touch" || !p.has(D.pointerId) || (p.set(D.pointerId, { x: D.clientX, y: D.clientY }), !$ || p.size !== 2)) return;
    D.preventDefault(), D.stopPropagation();
    const Y = P(), G = e.getBoundingClientRect(), oe = m(Y.span / $.span), X = oe / s;
    i = Y.cx - G.left - ($.cx - G.left - i) * X, a = Y.cy - G.top - ($.cy - G.top - a) * X, s = oe, $ = Y, c();
  }, A = (D) => {
    if (D.pointerType !== "touch") return;
    if (p.delete(D.pointerId), p.size === 2) {
      $ = P();
      return;
    }
    $ = null;
    const [Y] = [...p.values()];
    b = p.size === 1 && Y ? { ...Y } : null;
  };
  e.addEventListener("pointerdown", T, !0), e.addEventListener("pointermove", F, { capture: !0, passive: !1 }), e.addEventListener("pointerup", A, !0), e.addEventListener("pointercancel", A, !0);
  const z = vd(e);
  return {
    fit: y,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: y,
    centreOn(D, Y, G = 1) {
      const { width: oe, height: X } = u();
      s = Math.max(s, G), i = oe / 2 - D * s, a = X / 2 - Y * s, c();
    },
    transform: () => ({ scale: s, tx: i, ty: a }),
    wasPan: () => k,
    gesturing: () => p.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(D, Y, G) {
      s = D, i = Y, a = G, c();
    },
    cleanup() {
      _.cleanup(), z.cleanup(), e.removeEventListener("pointerdown", f), e.removeEventListener("pointermove", v), e.removeEventListener("pointerup", E), e.removeEventListener("pointercancel", E), e.removeEventListener("pointerleave", E), e.removeEventListener("pointerdown", T, !0), e.removeEventListener("pointermove", F, { capture: !0 }), e.removeEventListener("pointerup", A, !0), e.removeEventListener("pointercancel", A, !0);
    }
  };
}
const ju = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Hi(e) {
  const t = { ...e };
  for (const n of ju) delete t[n];
  return t;
}
const zu = 8, Iu = 64, Du = () => new Promise((e) => setTimeout(e, 0));
function Rr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function qu(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const s = o.get_substruct_matches(t), i = JSON.parse(s || "[]");
    if (!Array.isArray(i)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of i) {
      const u = c.atoms;
      if (Array.isArray(u))
        for (const h of u) typeof h == "number" && a.add(h);
    }
    return [...a].sort((c, u) => c - u);
  } catch (s) {
    return console.warn("[gufe-viz] SMARTS match threw -", he(s)), null;
  } finally {
    Rr(o);
  }
}
function Gi(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (i) => {
    const a = i.trim(), c = ++o;
    if (!a) return { status: "cleared" };
    const u = r.get(a);
    if (u) return { status: "ok", matched: u, unreadable: 0 };
    const h = await e();
    if (c !== o) return { status: "superseded" };
    if (!h) return { status: "unsupported" };
    if (!h.get_qmol) return { status: "unsupported" };
    let g = null;
    try {
      g = h.get_qmol(a);
    } catch {
      g = null;
    }
    if (!g) return { status: "invalid" };
    if (!g.get_substruct_matches)
      return Rr(g), { status: "unsupported" };
    const m = /* @__PURE__ */ new Map();
    let y = 0;
    try {
      let S = performance.now(), _ = 0;
      for (let p = 0; p < t.length; p++) {
        const $ = t[p] ? qu(h, g, t[p], n) : null;
        if ($ ? $.length && m.set(p, $) : y++, !(++_ < Iu && performance.now() - S < zu)) {
          if (await Du(), c !== o) return { status: "superseded" };
          _ = 0, S = performance.now();
        }
      }
    } finally {
      Rr(g);
    }
    return r.set(a, m), { status: "ok", matched: m, unreadable: y };
  }, cancel: () => void ++o };
}
const Lu = 250;
function Wi(e) {
  const t = j("div", "display:flex;flex-direction:column;gap:8px;"), n = j("input", `${Vn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = j("div", `font-size:${Z.tiny};line-height:1.5;min-height:1.5em;color:${O.textMuted2};`);
  t.appendChild(r);
  const o = (a) => {
    switch (a.status) {
      case "ok":
        return e.describe(a);
      case "invalid":
        return "RDKit does not accept that as a SMARTS pattern.";
      case "unsupported":
        return "This RDKit build cannot match SMARTS.";
      default:
        return "";
    }
  }, s = (a) => {
    r.textContent = a.trim() ? "Matching..." : "", e.run(a).then(
      (c) => {
        c.status !== "superseded" && (r.textContent = o(c));
      },
      () => {
        r.textContent = "Matching failed.";
      }
    );
  };
  let i = 0;
  return n.oninput = () => {
    e.remember.set(n.value), window.clearTimeout(i), i = window.setTimeout(() => s(n.value), Lu);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && s(n.value);
    }
  };
}
const Vu = 1e-6;
function Tn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function Ks(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Bu(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Hs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const s = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = s[i][0], c = s[i][1], u = t[a * 3 + c];
      if (Math.abs(u) < 1e-14) continue;
      const h = t[a * 3 + a], g = t[c * 3 + c], m = (g - h) / (2 * u);
      let y;
      Math.abs(m) > 1e10 ? y = 1 / (2 * m) : y = (m >= 0 ? 1 : -1) / (Math.abs(m) + Math.sqrt(m * m + 1));
      const S = 1 / Math.sqrt(1 + y * y), _ = y * S;
      t[a * 3 + a] = h - y * u, t[c * 3 + c] = g + y * u, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let p = 0; p < 3; p++)
        if (p !== a && p !== c) {
          const $ = t[p * 3 + a], d = t[p * 3 + c];
          t[p * 3 + a] = S * $ - _ * d, t[a * 3 + p] = t[p * 3 + a], t[p * 3 + c] = _ * $ + S * d, t[c * 3 + p] = t[p * 3 + c];
        }
      for (let p = 0; p < 3; p++) {
        const $ = n[p * 3 + a], d = n[p * 3 + c];
        n[p * 3 + a] = S * $ - _ * d, n[p * 3 + c] = _ * $ + S * d;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Uu(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let b = 0; b < n; b++)
    r[0] += e[b][0], r[1] += e[b][1], r[2] += e[b][2], o[0] += t[b][0], o[1] += t[b][1], o[2] += t[b][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const s = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let b = 0; b < n; b++) {
    const l = e[b][0] - r[0], f = e[b][1] - r[1], v = e[b][2] - r[2], E = t[b][0] - o[0], P = t[b][1] - o[1], T = t[b][2] - o[2];
    s[0] += l * E, s[1] += l * P, s[2] += l * T, s[3] += f * E, s[4] += f * P, s[5] += f * T, s[6] += v * E, s[7] += v * P, s[8] += v * T;
  }
  const i = Ks(s), a = Tn(i, s), c = Tn(s, i);
  let u = Hs(a), h = Hs(c);
  function g(b) {
    const l = [0, 1, 2].sort((v, E) => b.values[E] - b.values[v]), f = new Array(9);
    for (let v = 0; v < 3; v++) {
      const E = l[v];
      f[v] = b.vectors[E], f[3 + v] = b.vectors[3 + E], f[6 + v] = b.vectors[6 + E];
    }
    return {
      values: [b.values[l[0]], b.values[l[1]], b.values[l[2]]],
      vectors: f
    };
  }
  u = g(u), h = g(h);
  const m = u.vectors, y = h.vectors;
  for (let b = 0; b < 3; b++) {
    const l = m[b], f = m[3 + b], v = m[6 + b], E = s[0] * l + s[1] * f + s[2] * v, P = s[3] * l + s[4] * f + s[5] * v, T = s[6] * l + s[7] * f + s[8] * v, F = y[b], A = y[3 + b], z = y[6 + b];
    E * F + P * A + T * z < 0 && (y[b] = -F, y[3 + b] = -A, y[6 + b] = -z);
  }
  const S = Ks(m);
  let _ = Tn(y, S);
  Bu(_) < 0 && (y[2] = -y[2], y[5] = -y[5], y[8] = -y[8], _ = Tn(y, S));
  const p = _[0] * o[0] + _[1] * o[1] + _[2] * o[2], $ = _[3] * o[0] + _[4] * o[1] + _[5] * o[2], d = _[6] * o[0] + _[7] * o[1] + _[8] * o[2], k = u.values[1] > Vu * u.values[0];
  return { R: _, t: [r[0] - p, r[1] - $, r[2] - d], determined: k };
}
function Ku(e, t, n) {
  const r = e[0], o = e[1], s = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * s + n[0],
    t[3] * r + t[4] * o + t[5] * s + n[1],
    t[6] * r + t[7] * o + t[8] * s + n[2]
  ];
}
const Gs = `
`, gr = 4;
function Ws(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (o) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", he(o)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Hu(e, t, n) {
  const r = [], o = [];
  for (const [h, g] of n) {
    const m = e[g], y = t[h];
    !m || !y || (r.push(m), o.push(y));
  }
  if (r.length < 2) return null;
  const s = (h) => {
    let g = 0, m = 0;
    for (const y of h)
      g += y[0], m += y[1];
    return [g / h.length, m / h.length];
  }, i = s(r), a = s(o);
  let c = null, u = -1 / 0;
  for (const h of [!1, !0]) {
    let g = 0, m = 0;
    for (let d = 0; d < r.length; d++) {
      const k = (h ? -1 : 1) * (r[d][0] - i[0]), b = r[d][1] - i[1], l = o[d][0] - a[0], f = o[d][1] - a[1];
      g += k * f - b * l, m += k * l + b * f;
    }
    const y = Math.hypot(g, m);
    if (y <= u) continue;
    u = y;
    const S = Math.atan2(g, m), _ = Math.cos(S), p = Math.sin(S), $ = (h ? -1 : 1) * i[0];
    c = {
      cos: _,
      sin: p,
      mirror: h,
      tx: a[0] - (_ * $ - p * i[1]),
      ty: a[1] - (p * $ + _ * i[1])
    };
  }
  return c;
}
function Gu(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Wu(e, t, n) {
  const r = Ii(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(Gs);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let s = 0; s < r.atoms; s++) {
    const i = o[gr + s], a = t[s];
    if (i == null || !a) return e;
    o[gr + s] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = gr + r.atoms + a, u = o[c];
      if (u == null) break;
      const h = parseInt(u.substring(9, 12), 10);
      h !== 1 && h !== 6 || (o[c] = u.substring(0, 9) + String(h === 1 ? 6 : 1).padStart(3) + u.substring(12));
    }
  return o.join(Gs);
}
function Ju(e, t, n) {
  try {
    const r = (i) => xr(i).coords.map((a) => [a[0], a[1]]), o = r(t), s = Hu(o, r(e), n);
    return s ? Wu(
      t,
      o.map((i) => Gu(s, i)),
      s.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function Yu(e, t, n, r, o) {
  const s = Ws(e, t, r), i = Ws(e, n, r);
  return !o || r === "conformer" ? { left: s, right: i } : { left: s, right: Ju(s, i, o) };
}
const Xu = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Zu = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Qu() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const yr = Qu() ? Xu : Zu, Js = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], $r = 420, ef = {
  mapped: null,
  element: Te.modifiedColor,
  uniqueA: Te.destroyedColor,
  uniqueB: Te.createdColor
}, tf = 132, Le = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, vr = { gap: 2.5, minLiftFraction: 0.6 }, nf = 24, Ot = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Ys(e, t, n) {
  const r = [], o = [], s = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? r.push(i) : t[i] !== n[a] ? o.push(i) : s.push(i);
  }
  return { atoms: r, elements: o, mapped: s };
}
function rf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function of(e, t, n) {
  const r = [];
  for (let s = 0; s < t.length; s++) {
    const i = t[s] ?? "", a = e.get(s);
    if (a === void 0) {
      r.push({ kind: "uniqueA", a: s, b: null, symbolA: i, symbolB: "" });
      continue;
    }
    const c = n[a] ?? "";
    r.push({ kind: i === c ? "mapped" : "element", a: s, b: a, symbolA: i, symbolB: c });
  }
  const o = new Set(e.values());
  for (let s = 0; s < n.length; s++)
    o.has(s) || r.push({ kind: "uniqueB", a: null, b: s, symbolA: "", symbolB: n[s] ?? "" });
  return r;
}
function Ji(e, t) {
  const n = we(t, e.componentA, "SmallMoleculeComponentViz"), r = we(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Yr(t, [e.componentA, e.componentB]) };
}
function sf(e, t, n) {
  const r = [], o = [];
  for (const [i, a] of n) {
    const c = e.coords[i], u = t.coords[a];
    c && u && (r.push(c), o.push(u));
  }
  const s = Uu(r, o);
  return s?.determined ? { ...t, coords: t.coords.map((i) => Ku(i, s.R, s.t)) } : t;
}
function Xs(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function af(e, t) {
  const n = Xs(e), r = Xs(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const s = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[o] - r.min[o] + vr.gap, a = vr.minLiftFraction * s + vr.gap;
  return { axis: o, lift: Math.max(i, a) };
}
function cf(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let s = 1 / 0;
    for (const i of o)
      i[0] < s && (s = i[0]), i[0] - s > n && (n = i[0] - s);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Ot.minSpread ? r : Ot.minSpread) * Ot.spreadFactor;
}
function lf(e, t) {
  const n = Ed, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), s = Math.floor(o), i = Math.min(s + 1, n.length - 1), a = o - s;
  let c = "0x";
  for (let u = 0; u < 3; u++) {
    const h = (m) => parseInt(m.slice(1 + u * 2, 3 + u * 2), 16), g = Math.round(h(n[s]) + (h(n[i]) - h(n[s])) * a);
    c += g.toString(16).padStart(2, "0");
  }
  return c;
}
class df extends Re {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = we(r, n.componentA, "SmallMoleculeComponentViz"), s = we(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !s)
      return t.appendChild(
        fe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = Ze(o), a = Ze(s), c = rf(n);
    let u, h;
    try {
      u = xr(o.sdf, i), h = xr(s.sdf, a);
    } catch (J) {
      return t.appendChild(fe(`Could not read a molecule: ${he(J)}`, !0)), {};
    }
    h = sf(u, h, c);
    const g = /* @__PURE__ */ new Map();
    for (const [J, L] of c) g.set(L, J);
    const m = Ys(c, u.symbols, h.symbols), y = Ys(g, h.symbols, u.symbols), S = gi(t), _ = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(_);
    const p = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    _.appendChild(p);
    const $ = wt("atom-mapping.mode", "plain", Js.map((J) => J.id));
    let d = $.get();
    const k = j(
      "div",
      ai
    );
    k.appendChild(
      Bn(
        Js,
        d,
        (J) => {
          d = J, X();
        },
        $
      )
    ), _.appendChild(k);
    let b = [], l = 0, f = !0;
    const v = () => {
      l && cancelAnimationFrame(l), l = 0;
      for (const J of b) {
        J.interaction?.cleanup();
        try {
          J.viewer?.clear();
        } catch {
        }
      }
      b = [], p.replaceChildren();
    }, E = (J) => {
      const L = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), R = j("div", "flex:1;position:relative;min-height:0;");
      R.dataset.gufeViewer = "", L.appendChild(R), S && L.appendChild(j("div", _r, J)), p.appendChild(L);
      const q = { container: R, viewer: null, interaction: null };
      return b.push(q), q;
    }, P = () => {
      if (b.length < 2) return;
      const J = b.map(() => "");
      let L = !1;
      const R = () => {
        if (f) {
          if (!L)
            for (let q = 0; q < b.length; q++) {
              const N = b[q].viewer;
              if (!N) continue;
              const w = JSON.stringify(N.getView());
              if (w !== J[q]) {
                L = !0;
                for (let C = 0; C < b.length; C++)
                  C !== q && b[C].viewer && (b[C].viewer.setView(N.getView()), b[C].viewer.render()), J[C] = w;
                L = !1;
                break;
              }
            }
          l = requestAnimationFrame(R);
        }
      };
      l = requestAnimationFrame(R);
    }, T = (J, L) => {
      const R = at.createViewer(J.container, { backgroundColor: $t.viewer });
      for (const { mol: q } of L) R.addModel(wu(q), "sdf");
      return J.viewer = R, R;
    }, F = (J) => {
      J.viewer && (J.interaction = Gr(J.container, J.viewer));
    }, A = () => {
      for (const J of [u, h]) {
        const L = E(J.name), R = T(L, [{ mol: J }]);
        R.setStyle(
          {},
          { stick: { radius: Le.stick, colorscheme: "Jmol" }, sphere: { scale: Le.sphere, colorscheme: "Jmol" } }
        ), R.zoomTo(), R.render(), F(L);
      }
      P();
    }, z = () => {
      const J = Te, L = Os(J.customSpec), R = [
        { mol: u, uniques: m, side: "left", custom: L.left },
        { mol: h, uniques: y, side: "right", custom: L.right }
      ];
      for (const q of R) {
        const N = E(q.mol.name), w = T(N, [{ mol: q.mol }]);
        w.setStyle(
          {},
          { stick: { radius: Le.stick, color: yr.core }, sphere: { scale: Le.sphere, color: yr.core } }
        );
        const C = (I, V) => {
          w.addStyle(
            { serial: I },
            {
              stick: { radius: Le.markStick, color: Ts(V) },
              sphere: { scale: Le.markSphere, color: Ts(V) }
            }
          );
        };
        for (const I of Fs(J, q.mol, q.uniques, q.side))
          for (const V of I.atoms) C(V, I.color);
        for (const I of q.custom)
          I < q.mol.symbols.length && C(I, J.customColor);
        w.zoomTo(), w.render(), F(N);
      }
      P();
    }, D = () => {
      const J = E(`${i} (left), both overlaid (middle), ${a} (right)`), L = cf(u.coords, h.coords), R = (ne, ee) => ({
        ...ne,
        coords: ne.coords.map(([x, M, B]) => [x + ee, M, B])
      }), q = R(u, -L), N = R(h, L), w = T(J, [{ mol: q }, { mol: N }, { mol: u }, { mol: h }]);
      w.setStyle({}, { stick: {} });
      const C = Array.from(c);
      C.forEach(([ne, ee], x) => {
        const M = q.coords[ne], B = N.coords[ee];
        if (!M || !B) return;
        const W = lf(x, C.length);
        for (const [K, Q, te] of [M, B])
          w.addSphere({
            center: { x: K, y: Q, z: te },
            radius: Ot.sphereRadius,
            color: W,
            alpha: Ot.sphereAlpha
          });
      }), w.zoomTo();
      const { clientWidth: I, clientHeight: V } = J.container, H = I - 2 * nf;
      H > 0 && H < V && w.zoom(H / V), w.render(), F(J);
    }, Y = () => {
      const J = E(`${i} to ${a}  (${c.size} mapped pairs)`), { axis: L, lift: R } = af(u.coords, h.coords), q = {
        ...h,
        coords: h.coords.map((C) => {
          const I = [C[0], C[1], C[2]];
          return I[L] += R, I;
        })
      }, N = T(J, [{ mol: u }, { mol: q }]), w = {
        stick: { radius: Le.stick, colorscheme: "Jmol" },
        sphere: { scale: Le.pairSphere, colorscheme: "Jmol" }
      };
      N.setStyle({ model: 0 }, w), N.setStyle({ model: 1 }, w);
      for (const [C, I] of c) {
        const V = u.coords[C], H = q.coords[I];
        !V || !H || N.addCylinder({
          start: { x: V[0], y: V[1], z: V[2] },
          end: { x: H[0], y: H[1], z: H[2] },
          radius: Le.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: yr.pairLine
        });
      }
      N.zoomTo(), L === 2 ? N.rotate(90, "x") : L === 0 && N.rotate(-90, "z"), N.render(), F(J);
    }, G = () => {
      const J = Te, L = Os(J.customSpec), q = [
        { mol: u, uniques: m, side: "left", custom: L.left },
        { mol: h, uniques: y, side: "right", custom: L.right }
      ].map((N) => {
        const w = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), C = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${$t.canvas2D};`
        );
        return C.appendChild(fe("Loading 2D depiction...")), w.appendChild(C), S && w.appendChild(j("div", _r, N.mol.name)), p.appendChild(w), { box: C, side: N };
      });
      Xn().then((N) => {
        const w = uu(J, N), C = Yu(N, o.sdf, s.sdf, J.layout, J.alignPair ? c : null);
        for (const { box: I, side: V } of q) {
          const H = Fs(J, V.mol, V.uniques, V.side), ne = fu(
            J,
            $r,
            H,
            V.custom,
            w,
            V.mol.symbols.length
          ), ee = pu(N, V.side === "left" ? C.left : C.right, $r, ne);
          if (I.replaceChildren(), !ee) {
            I.appendChild(fe("Failed to parse molecule", !0));
            continue;
          }
          qi(I, ee, $r);
          const x = I.querySelector("svg");
          x && vu(x, V.mol, J, H, V.custom, w);
        }
      }).catch((N) => {
        for (const { box: w } of q)
          w.replaceChildren(fe(`RDKit failed to load: ${he(N)}`, !0));
      });
    }, oe = () => {
      const J = j(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      p.appendChild(J);
      const L = j("div", "display:flex;flex-direction:column;gap:2px;");
      L.appendChild(
        j(
          "div",
          `font-size:${Z.title};font-weight:${Ue.bold};color:${Pe.title};`,
          n.name || `${i} to ${a}`
        )
      ), L.appendChild(j("div", `font-size:${Z.body};color:${Pe.faint};`, "LigandAtomMapping")), J.appendChild(L);
      const R = of(c, u.symbols, h.symbols), q = j("div", et.row), N = [];
      let w = null;
      const C = (K, Q, te, ue) => {
        const ce = j("button", `${et.plain}${et.button}`);
        ce.type = "button", ce.appendChild(Ae(K, String(Q), ue)), ce.onclick = () => {
          w = w === te ? null : te, B();
        }, N.push({ button: ce, kinds: te }), q.appendChild(ce);
      }, I = (K, Q) => {
        const te = j("span", et.plain);
        te.appendChild(Ae(K, Q)), q.appendChild(te);
      };
      C("mapped atoms", c.size, ["mapped", "element"]), C("element changes", m.elements.length, ["element"], Te.modifiedColor), C(`unique to ${i}`, m.atoms.length, ["uniqueA"], Te.destroyedColor), C(`unique to ${a}`, y.atoms.length, ["uniqueB"], Te.createdColor), I(`atoms in ${i}`, String(u.symbols.length)), I(`atoms in ${a}`, String(h.symbols.length)), I("score", n.score == null ? ot : n.score.toFixed(3)), J.appendChild(q), J.appendChild(j("div", to, "Correspondence"));
      const V = j("div", er);
      J.appendChild(V);
      const H = j(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${tf}px,1fr));gap:${re.xs} ${re.md};font-family:${Z.mono};font-size:${Z.small};color:${Pe.primary};`
      );
      J.appendChild(H);
      const ne = String(Math.max(u.symbols.length, h.symbols.length, 1) - 1).length, ee = (K, Q) => `${(K == null ? ot : String(K)).padStart(ne)} ${Q.padEnd(2)}`, x = (K) => {
        if (K.kind === "uniqueA") return `${i} atom ${K.a} ${K.symbolA} maps to nothing`;
        if (K.kind === "uniqueB") return `${a} atom ${K.b} ${K.symbolB} maps to nothing`;
        const Q = K.kind === "element" ? ", an element change" : "";
        return `${i} atom ${K.a} ${K.symbolA} maps to ${a} atom ${K.b} ${K.symbolB}${Q}`;
      }, M = (K) => {
        const Q = j(
          "div",
          `white-space:pre;padding:${re.xs} ${re.md};border-radius:${Ke.sm};background:${$t.card};border-left:3px solid ${ef[K.kind] ?? "transparent"};`,
          `${ee(K.a, K.symbolA)} -> ${ee(K.b, K.symbolB)}`
        );
        return Q.title = x(K), Q.dataset.gufeRelation = K.kind, Q;
      }, B = () => {
        const K = w, Q = K ? R.filter((te) => K.includes(te.kind)) : R;
        H.replaceChildren(...Q.map(M)), Q.length || H.appendChild(
          j("div", `${er}grid-column:1/-1;`, w ? "No atoms of that kind." : "This mapping has no atoms.")
        ), V.textContent = (c.size ? "" : "This mapping relates no atoms at all. ") + `${i} -> ${a}, by atom index and element` + (w ? "; click the chip again for all of them" : "");
        for (const te of N) {
          const ue = te.kinds === w;
          te.button.style.cssText = `${et.plain}${ue ? et.active : et.button}`, te.button.setAttribute("aria-pressed", String(ue)), te.button.title = ue ? "Show every atom" : "Show only these atoms";
        }
      };
      B();
      const W = Object.entries(n.annotations ?? {}).filter(([K]) => K !== "score");
      if (W.length) {
        J.appendChild(j("div", to, "Annotations"));
        const K = j("div", `${ra}color:${Pe.faint};`);
        for (const [Q, te] of W)
          K.appendChild(j("div", "", `${Q}: ${String(te)}`));
        J.appendChild(K);
      }
      J.appendChild(
        j(
          "div",
          `${er}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, X = () => {
      if (v(), d === "info") {
        oe();
        return;
      }
      if (d === "2d") {
        G();
        return;
      }
      p.appendChild(fe("Loading 3D viewer...")), Hr().then(() => {
        f && (p.replaceChildren(), d === "colored" ? z() : d === "openfe" ? D() : d === "lines" ? Y() : A());
      }).catch((J) => {
        p.replaceChildren(fe(`3D render failed: ${he(J)}`, !0));
      });
    };
    return X(), {
      onResize() {
        for (const J of b)
          J.viewer && (J.viewer.resize(), J.viewer.render());
      },
      cleanup() {
        f = !1, v();
      }
    };
  }
}
Ne("gufe-atom-mapping", df);
const Zs = ["Force-directed", "Circular", "Radial"], uf = "ligand-network", ff = "Click a ligand or an edge to see it.";
function pf(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function hf(e) {
  return Hi(e);
}
const Qs = (e) => Math.round(e * 100) / 100;
function mf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (i) => typeof i == "number" && Number.isFinite(i);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((i) => Array.isArray(i) && i.length === 2 && i.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, s = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: s };
}
function gf(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const At = { initial: 0.58, min: 0.25, max: 0.8 }, Fe = 38, Fn = 200, Yi = 4, yf = 14, $f = 18, xe = {
  fontSize: 11,
  below: Fe - Yi + 12,
  minFontSize: 7,
  insideWidth: (Fe - 6) * 2
}, ei = 1.5, vf = 6.5, bf = 0.9, wf = 14, br = { size: 8, clearance: 8 }, _f = { fontSize: 10 }, Sf = 0.4, kf = Cr(O.netMatchAtom), Rt = { padding: 4, opacity: 0.95 }, Cf = 3, bt = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Ef = (e) => bt.find((t) => e >= t.from) ?? bt[bt.length - 1], xf = (e) => bt[Math.min(bt.indexOf(e) + 1, bt.length - 1)], jn = 200, Pf = 24, wr = { node: 0.12, edge: 0.06 }, Af = 1.8, ti = 2 * Fe + 68, _e = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: ti,
  linkScoreBonus: 90,
  linkStrength: 0.45,
  // Repulsion is local rather than the width of the graph. Reaching further
  // does not move neighbours apart - collision already decides that - it only
  // inflates the whole layout, and a graph spread over thousands of units is
  // one that is both too small to read as a whole and too crowded to read up
  // close.
  chargeStrength: -900,
  chargeDistanceMin: 20,
  chargeDistanceMax: 900,
  centerStrength: 0.08,
  /** Holds a pair exactly `NODE_SPACING` apart, so links settle at their distance rather than against this. */
  collisionPadding: ti / 2 - Fe,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Rf(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Z.small};line-height:1.5;max-width:260px;background:${O.tooltipBg};border:1px solid ${O.tooltipBorder};color:${O.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
  return e.appendChild(t), {
    show(n, r, o) {
      t.innerHTML = n, t.style.left = `${r + 14}px`, t.style.top = `${o - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function Nf(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const o = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, o);
    const s = le("marker", {
      id: o,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Fe + br.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: br.size,
      markerHeight: br.size,
      orient: "auto"
    });
    return s.appendChild(le("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(s), o;
  };
}
function Mf(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Of(e) {
  const [t, n] = O.netEdgeRamp.map(Mf), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((s, i) => Math.round(s + (n[i] - s) * r)).join(",")})`;
}
const Ve = Ze, Tf = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Ff(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (g) => (e.matched().get(g) ?? []).join(","), s = (g, m) => {
    if (t.has(m) || n.has(m)) return;
    const y = e.nodes[m], S = e.matched().get(m), _ = y.sdf && Di(
      g,
      y.sdf,
      Fn,
      Te.layout,
      S && { atoms: S, color: kf, radius: Sf }
    );
    if (!_) {
      n.add(m);
      return;
    }
    const p = new DOMParser().parseFromString(_, "image/svg+xml").documentElement;
    if (!p || p.nodeName.toLowerCase() === "parsererror") {
      n.add(m);
      return;
    }
    const $ = (Fe - Yi) * 2 / Fn, d = e.depictionGroups[m];
    d.setAttribute(
      "transform",
      `translate(${-$ * Fn / 2},${-$ * Fn / 2}) scale(${$})`
    );
    let k = 0;
    for (const b of Array.from(p.childNodes)) {
      if (b.nodeType !== 1) continue;
      const l = b.nodeName.toLowerCase();
      if (!(l === "defs" || l === "metadata" || l === "title")) {
        if (l === "rect") {
          const f = (b.getAttribute("fill") ?? "").toLowerCase();
          if (f === "#ffffff" || f === "white" || f === "rgb(255,255,255)") continue;
        }
        d.appendChild(document.importNode(b, !0)), k++;
      }
    }
    k ? (t.add(m), r[m] = o(m)) : n.add(m);
  }, i = () => {
    for (const g of [...t])
      r[g] !== o(g) && (e.depictionGroups[g].replaceChildren(), t.delete(g));
  }, a = [], c = (g, m) => {
    if (a[g]) return a[g];
    m.setAttribute("font-size", String(xe.fontSize));
    let y = 0;
    try {
      y = m.getBBox().width;
    } catch {
      return xe.fontSize;
    }
    if (!y) return xe.fontSize;
    const S = xe.fontSize * xe.insideWidth / y;
    return a[g] = Math.max(xe.minFontSize, Math.min(xe.fontSize, S)), a[g];
  }, u = (g, m) => {
    const y = m.structure && !t.has(g) ? xf(m) : m;
    e.depictionGroups[g].setAttribute("display", y.structure ? "inline" : "none");
    const S = e.matched().has(g), _ = e.circles[g];
    _.setAttribute("fill", y.disc ? S ? O.netMatchFill : O.netNodeFill : "none"), _.setAttribute("stroke", y.disc ? S ? O.netMatchStroke : O.netNodeStroke : "none"), e.initials[g].setAttribute("display", y.initials ? "inline" : "none");
    const p = e.captions[g];
    if (p.setAttribute("fill", S ? O.netMatchStroke : O.netNodeCaption), p.setAttribute("display", y.name === "none" ? "none" : "inline"), y.name === "none") return;
    const $ = y.name === "inside";
    p.setAttribute("y", $ ? "0" : String(xe.below)), p.setAttribute("dominant-baseline", $ ? "middle" : "auto"), p.setAttribute("font-size", String($ ? c(g, p) : xe.fontSize));
  };
  return { apply: (g, m, y) => {
    const S = Ef(g);
    e.stage.setAttribute("data-detail", S.id), e.edgeLabels.setAttribute("display", S.edgeScores ? "inline" : "none");
    for (let d = 0; d < e.nodes.length; d++) u(d, S);
    if (!S.structure) return;
    const { width: _, height: p } = e.viewport(), $ = [];
    e.nodes.forEach((d, k) => {
      if (t.has(k) || n.has(k)) return;
      const b = d.x * g + m, l = d.y * g + y;
      b < -jn || l < -jn || b > _ + jn || l > p + jn || $.push(k);
    }), $.length && e.rdkit().then((d) => {
      if (d)
        for (const k of $)
          s(d, k), u(k, S);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: i };
}
function jf(e) {
  const t = Mt("ligand-network.query"), n = Or("ligand-network.minScore", 0, 0, 1), r = j("div", oi), o = j("input", `${Vn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const s = Wi({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: Mt("ligand-network.smarts"),
    run: (_) => e.match(_),
    describe: (_) => {
      const p = _.unreadable ? `, ${_.unreadable} could not be read` : "";
      return `${_.matched.size} of ${e.nodes.length} ligands match${p}`;
    }
  });
  r.appendChild(s.element);
  const i = j("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${O.textMuted};`), a = j("span", `min-width:28px;color:${O.textPrimary};`, "0.00"), c = j("input", "flex:1;");
  c.type = "range", c.min = "0", c.max = "1", c.step = "0.01", c.value = String(n.get()), e.filter.minScore = Number(c.value), c.setAttribute("aria-label", "Hide mappings scoring below this"), i.appendChild(j("span", "", "score >=")), i.appendChild(c), i.appendChild(a), r.appendChild(i);
  const u = j("div", `font-size:${Z.small};color:${O.textMuted2};`);
  r.appendChild(u);
  const h = j("div", si);
  r.appendChild(h), r.appendChild(j("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`, Xr));
  const g = Vi({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    setting: "ligand-network.exportAs"
  });
  r.appendChild(g.box);
  const m = j("button", `${_t}width:100%;`, "Clear selection");
  m.onclick = () => {
    e.selected.clear(), S(), e.refresh();
  }, r.appendChild(m);
  const y = (_) => {
    const p = e.query.text.trim().toLowerCase();
    return p ? Ve(_).toLowerCase().includes(p) || (_.smiles ?? "").toLowerCase().includes(p) || _["gufe-key"].toLowerCase().includes(p) : !0;
  }, S = () => {
    g.clearNote(), h.replaceChildren();
    const _ = e.nodes.map((p, $) => ({ node: p, index: $ })).filter(({ node: p }) => y(p));
    u.textContent = `${_.length} of ${e.nodes.length} ligands`;
    for (const { node: p, index: $ } of _) {
      const d = p["gufe-key"], k = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? O.cardBorderActive : O.cardBorder};background:${e.selected.has(d) ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), b = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ve(p));
      b.title = `${Ve(p)}
${p.smiles ?? ""}`, k.appendChild(b), k.onclick = (l) => {
        l.shiftKey || l.metaKey || l.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus($)), S(), e.refresh();
      }, h.appendChild(k);
    }
    _.length || h.appendChild(j("div", `font-size:${Z.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), S(), e.refresh();
  }, c.oninput = () => {
    e.filter.minScore = Number(c.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, S(), s.apply(), r;
}
class zf extends Re {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = [];
    let s = 0;
    for (const x of n.nodes ?? []) {
      const M = we(r, x, "SmallMoleculeComponentViz");
      if (!M) {
        s++;
        continue;
      }
      o.push({ ...M, x: 0, y: 0 });
    }
    const i = new Map(o.map((x) => [x["gufe-key"], x])), a = [];
    let c = 0;
    for (const x of n.edges ?? []) {
      const M = i.get(x.componentA), B = i.get(x.componentB);
      if (!M || !B) {
        c++;
        continue;
      }
      a.push({ ...x, index: a.length, from: M, to: B });
    }
    const u = St(n.name || "Ligand network");
    u.statsEl.appendChild(Ae("ligands", String(o.length))), u.statsEl.appendChild(Ae("mappings", String(a.length))), t.appendChild(u);
    const h = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const g = /* @__PURE__ */ new Set(), m = { minScore: 0 }, y = { text: "" };
    let S = () => {
    }, _ = null;
    const p = () => _ ??= Xn().catch((x) => (console.warn("[gufe-viz] RDKit failed to load:", he(x)), null)), $ = Gi(
      p,
      o.map((x) => x.sdf ?? "")
    );
    let d = /* @__PURE__ */ new Map(), k = () => {
    };
    const b = async (x) => {
      const M = await $.run(x);
      return M.status === "superseded" || (d = M.status === "ok" ? M.matched : /* @__PURE__ */ new Map(), k()), M;
    }, l = bi(
      u,
      () => jf({
        nodes: o,
        edges: a,
        selected: g,
        filter: m,
        query: y,
        refresh: () => S(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (x) => {
          Y(x), ne({ kind: "ligand", index: x });
        },
        match: (x) => b(x)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => ee(),
        remember: vt("ligand-network.menuOpen", !1)
      }
    );
    l.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", h.appendChild(l.panel);
    let f = () => {
    };
    const v = j("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), E = j("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.appBg};`);
    h.appendChild(v), h.appendChild(
      yi(h, v, E, {
        min: At.min,
        max: At.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Or("ligand-network.canvasShare", At.initial, At.min, At.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => f(),
        onOrient: (x) => $i(l.panel, x)
      })
    ), h.appendChild(E);
    const P = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${O.netCanvasBg};`);
    v.appendChild(P);
    const T = wt("ligand-network.layout", "Force-directed", Zs), F = this.#n(
      (x) => ee(x),
      () => I(),
      T
    );
    v.appendChild(F.bar);
    const A = this.#e(E, r);
    if (!o.length)
      return P.appendChild(
        fe(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), A.message("Nothing to show."), {};
    s && it(
      P,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && it(P, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const z = p(), D = Rf(P);
    let Y = () => {
    };
    const G = mf(ua(uf), o.length);
    let oe = G && { scale: G.scale, tx: G.tx, ty: G.ty }, X = a.length ? { kind: "edge", index: 0 } : null;
    if (G && G.selected >= 0) {
      const x = G.selectedKind ?? "edge";
      G.selected < (x === "ligand" ? o.length : a.length) && (X = { kind: x, index: G.selected });
    }
    let J = () => ({ scale: 1, tx: 0, ty: 0 }), L = !1, R = null, q = T.get(), N = !1, w = !0, C = () => {
    }, I = () => {
    }, V = 0;
    const H = () => {
      if (!X) {
        A.message(a.length ? ff : "Click a ligand to see it.");
        return;
      }
      X.kind === "edge" ? A.showMapping(a[X.index]) : A.showLigand(o[X.index]);
    }, ne = (x) => {
      X = x, H(), C();
    }, ee = (x = q) => {
      const M = L && x === q ? J() : null, B = ++V;
      q = x, R?.(), R = null, P.querySelectorAll("svg").forEach((te) => te.remove());
      const W = P.clientWidth || 800, K = P.clientHeight || 600;
      If(o, W, K, q, a), G && gf(o, G.nodes);
      const Q = () => {
        if (!w || B !== V) return;
        const te = this.#t(P, o, a, W, K, ne, z, D);
        C = () => te.setSelected(X), I = te.reset, R = te.cleanup, Y = (ce) => te.focusOn(ce), J = te.transform, S = () => {
          const ce = y.text.trim().toLowerCase(), me = g.size > 0 || ce.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Ce of o) {
            const ze = Ce["gufe-key"], Qe = g.has(ze) || ce.length > 0 && (Ve(Ce).toLowerCase().includes(ce) || (Ce.smiles ?? "").toLowerCase().includes(ce) || ze.toLowerCase().includes(ce));
            (!me || Qe) && pe.add(ze);
          }
          const je = /* @__PURE__ */ new Set();
          a.forEach((Ce, ze) => {
            (Ce.score ?? 0) < m.minScore || !pe.has(Ce.from["gufe-key"]) || !pe.has(Ce.to["gufe-key"]) || je.add(ze);
          });
          const $e = me || m.minScore > 0;
          te.setEmphasis($e ? pe : null, $e ? je : null);
        }, k = () => te.setMatches(d), C(), S(), k();
        const ue = oe ?? M;
        ue ? (te.setTransform(ue.scale, ue.tx, ue.ty), oe = null) : te.fit(), L = !0;
      };
      if (q !== "Force-directed" || N || G) {
        Q();
        return;
      }
      Df(o, a, W, K).then((te) => {
        if (!(!w || B !== V)) {
          if (te) {
            Q();
            return;
          }
          N = !0, F.picker.value = "Circular", it(P, "d3 could not be loaded - showing the circular layout instead"), ee("Circular");
        }
      }, Q);
    };
    return f = () => ee(), ee(), H(), {
      onResize: () => ee(),
      cleanup: () => {
        w = !1, $.cancel(), D.remove(), R?.();
      },
      viewState: () => ({
        nodes: o.map((x) => [Qs(x.x), Qs(x.y)]),
        ...J(),
        selected: X ? X.index : -1,
        selectedKind: X ? X.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = j(
      "div",
      Mr.bottom
    ), s = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
    s.appendChild(j("span", "", "score")), s.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${O.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(j("span", "", "0 -> 1")), o.appendChild(s), o.appendChild(j("label", `font-size:${Z.body};margin-left:auto;color:${O.textMuted};`, "Layout"));
    const i = Un(
      Zs.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(i), o.appendChild(Wr(n, "Reset pan and zoom")), { bar: o, picker: i };
  }
  /**
   * The right-hand pane: whatever is open, drawn by the view that owns it.
   *
   * An edge is a mapping, so it is `<gufe-atom-mapping>`; a node is one ligand,
   * so it is `<gufe-small-molecule>` - the same two elements a payload of either
   * kind renders through on its own. Neither picture is drawn twice, so the
   * in-context one and the standalone one cannot drift apart, and clicking
   * either half of the graph puts the reader in front of a view they have
   * already met.
   *
   * Deliberately nothing but that element, either way. Each carries its own
   * header and its own labels, so a pane title, a heading repeating the names
   * and a list of properties underneath were all saying a second time what the
   * picture below them already said.
   */
  #e(t, n) {
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = (i) => r.replaceChildren(fe(i)), s = (i, a) => {
      const c = document.createElement(i);
      c.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", c.payload = a, r.replaceChildren(c);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (i) => s("gufe-atom-mapping", Ji(pf(i), n)),
      showLigand: (i) => s("gufe-small-molecule", hf(i)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, s, i, a, c) {
    const u = le("svg", {
      class: "gufe-graph",
      width: o,
      height: s,
      style: "display:block;touch-action:none;"
    }), h = le("g");
    u.appendChild(h), t.appendChild(u);
    const g = le("defs"), m = Nf(g);
    u.appendChild(g);
    const y = [], S = le("g"), _ = le("g"), p = le("g", { "pointer-events": "none" }), $ = le("g");
    h.append(S, _, p, $);
    for (const A of r) {
      const z = Of(A.score), D = ei + (A.score ?? 0.5) * (vf - ei), Y = le("line", {
        stroke: O.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": D + Rt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), G = le("line", {
        stroke: z,
        "stroke-width": D,
        "stroke-opacity": bf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${m(z)})`,
        "pointer-events": "none"
      }), oe = le("line", { stroke: "transparent", "stroke-width": wf, style: "cursor:pointer;" });
      oe.addEventListener("click", (L) => {
        L.stopPropagation(), i({ kind: "edge", index: A.index });
      }), oe.addEventListener("mousemove", (L) => {
        c.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Be(Ve(A.from))} -&gt; ${Be(Ve(A.to))}</div>` + (A.score == null ? `<div style="color:${O.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${O.textMuted2};">Click to see the mapping</div>`,
          L.offsetX,
          L.offsetY
        );
      }), oe.addEventListener("mouseleave", () => c.hide()), y.push(Y), S.append(Y, G), _.appendChild(oe);
      const X = le("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": _f.fontSize,
        "font-weight": 600,
        fill: O.netEdgeLabel
      });
      X.textContent = A.score == null ? "" : A.score.toFixed(2);
      const J = le("g", { class: "gufe-edge-label" });
      J.appendChild(X), p.appendChild(J);
    }
    const d = [], k = [], b = [], l = [], f = [], v = n.map((A) => {
      const z = le("g", { class: "gufe-node", style: "cursor:grab;" });
      z.addEventListener("mousemove", (J) => {
        c.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Be(Ve(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Be(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${O.textMuted2};overflow-wrap:anywhere;">${Be(A["gufe-key"])}</div><div style="margin-top:4px;font-size:${Z.tiny};color:${O.textMuted2};">Click to see the ligand</div>`,
          J.offsetX,
          J.offsetY
        );
      }), z.addEventListener("mouseleave", () => c.hide());
      const D = le("circle", {
        class: "gufe-node-halo",
        r: Fe + Rt.padding,
        fill: "none",
        stroke: O.netHaloColor,
        "stroke-width": Rt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      z.appendChild(D), b.push(D);
      const Y = le("circle", {
        class: "gufe-node-disc",
        r: Fe,
        fill: O.netNodeFill,
        stroke: O.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      z.appendChild(Y), k.push(Y);
      const G = le("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      z.appendChild(G), d.push(G);
      const oe = le("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": $f,
        "font-weight": 700,
        fill: O.netInitials,
        "pointer-events": "none"
      });
      oe.textContent = Ve(A).slice(0, 2).toUpperCase(), z.appendChild(oe), l.push(oe);
      const X = le("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: xe.below,
        "font-size": xe.fontSize,
        "font-weight": 600,
        fill: O.netNodeCaption,
        "pointer-events": "none"
      });
      return X.textContent = Tf(Ve(A), yf), X.setAttribute("display", "none"), f.push(X), z.appendChild(X), $.appendChild(z), z;
    }), E = () => {
      r.forEach((A, z) => {
        for (const Y of [y[z], S.children[z * 2 + 1], _.children[z]]) {
          const G = Y;
          G.setAttribute("x1", String(A.from.x)), G.setAttribute("y1", String(A.from.y)), G.setAttribute("x2", String(A.to.x)), G.setAttribute("y2", String(A.to.y));
        }
        p.children[z].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, z) => v[z].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    E();
    let P = /* @__PURE__ */ new Map();
    const T = Ff({
      nodes: n,
      circles: k,
      matched: () => P,
      captions: f,
      initials: l,
      depictionGroups: d,
      edgeLabels: p,
      stage: u,
      rdkit: () => a,
      viewport: () => ({ width: o, height: s })
    }), F = this.#r(
      u,
      h,
      n,
      v,
      E,
      T.apply,
      (A) => i({ kind: "ligand", index: A })
    );
    return {
      setSelected(A) {
        const z = A?.kind === "edge" ? A.index : -1, D = A?.kind === "ligand" ? A.index : -1;
        y.forEach((Y, G) => Y.setAttribute("opacity", G === z ? String(Rt.opacity) : "0")), b.forEach((Y, G) => Y.setAttribute("opacity", G === D ? String(Rt.opacity) : "0"));
      },
      /**
       * Colour the ligands a SMARTS pattern matched.
       *
       * Colour rather than filter, and deliberately a different channel from
       * `setEmphasis`: dimming answers "which ones did I ask for", colouring
       * answers "which ones contain this" - and the whole point of the second
       * question is seeing the ones that do not. So the two compose, and
       * neither hides anything.
       */
      setMatches(A) {
        P = A, T.forget();
        const { scale: z, tx: D, ty: Y } = F.transform();
        T.apply(z, D, Y);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, z) {
        v.forEach((D, Y) => {
          const G = !A || A.has(n[Y]["gufe-key"]);
          D.setAttribute("opacity", G ? "1" : String(wr.node));
        }), r.forEach((D, Y) => {
          const G = !z || z.has(Y), oe = G ? "0.9" : String(wr.edge);
          S.children[Y * 2 + 1].setAttribute("stroke-opacity", oe), p.children[Y].setAttribute("opacity", G ? "1" : String(wr.edge));
        });
      },
      focusOn(A) {
        const z = n[A];
        z && F.centreOn(z.x, z.y);
      },
      setDetail: T.apply,
      depictionsDrawn: () => T.drawn(),
      fit: F.fit,
      reset: F.reset,
      transform: F.transform,
      setTransform: F.setTransform,
      cleanup: F.cleanup
    };
  }
  /**
   * Node drag and node click, over the shared camera.
   *
   * The camera - wheel zoom, background pan, framing - is `sceneCamera`, which
   * the alchemical network uses too. What stays here is what is about a ligand
   * rather than about a canvas: dragging one to a new position, and telling a
   * drag from a click. The click is here rather than with the rest of a node
   * because only this knows whether the pointer was dragging.
   */
  #r(t, n, r, o, s, i, a) {
    const c = Ki(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Ui(r, Fe),
      margin: Pf,
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((u, h) => {
      let g = null, m = !1;
      u.addEventListener("pointerdown", (S) => {
        S.stopPropagation();
        const { scale: _ } = c.transform();
        g = { x: S.clientX - r[h].x * _, y: S.clientY - r[h].y * _ }, m = !1, u.setPointerCapture(S.pointerId);
      }), u.addEventListener("pointermove", (S) => {
        if (!g) return;
        if (c.gesturing()) {
          g = null, m = !0;
          return;
        }
        const { scale: _ } = c.transform(), p = (S.clientX - g.x) / _, $ = (S.clientY - g.y) / _;
        Math.hypot(p - r[h].x, $ - r[h].y) * _ > Cf && (m = !0), r[h].x = r[h].fx = p, r[h].y = r[h].fy = $, s();
      });
      const y = () => {
        g = null;
      };
      u.addEventListener("pointerup", y), u.addEventListener("pointercancel", y), u.addEventListener("click", (S) => {
        S.stopPropagation(), m || a(h);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (u, h) => c.centreOn(u, h, Af)
    };
  }
}
function If(e, t, n, r, o) {
  const s = t / 2, i = n / 2, a = (c, u) => {
    c.forEach((h, g) => {
      const m = 2 * Math.PI * g / Math.max(1, c.length) - Math.PI / 2;
      h.x = s + u * Math.cos(m), h.y = i + u * Math.sin(m), h.fx = r === "Force-directed" ? void 0 : h.x, h.fy = r === "Force-directed" ? void 0 : h.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of o)
      c.get(_.from["gufe-key"]).push(_.to["gufe-key"]), c.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const u = new Map(e.map((_) => [_["gufe-key"], _])), h = e.reduce(
      (_, p) => c.get(p["gufe-key"]).length > c.get(_["gufe-key"]).length ? p : _
    ), g = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let m = [h["gufe-key"]], y = 0;
    const S = Math.min(t, n) * 0.18;
    for (; m.length; ) {
      a(
        m.map((p) => u.get(p)),
        y === 0 ? 0 : y * S + 40
      );
      const _ = [];
      for (const p of m)
        for (const $ of c.get(p))
          g.has($) || (g.add($), _.push($));
      m = _, y++;
    }
    a(e.filter((_) => !g.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Df(e, t, n, r) {
  let o;
  try {
    if (o = await Oi(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((c) => c["gufe-key"]).distance((c) => _e.linkBaseDistance + (1 - (c.score ?? 0.5)) * _e.linkScoreBonus).strength(_e.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(_e.chargeStrength).distanceMin(_e.chargeDistanceMin).distanceMax(_e.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(_e.centerStrength)).force("collision", o.forceCollide(Fe + _e.collisionPadding).iterations(_e.collisionIterations)).force("x", o.forceX(n / 2).strength(_e.drift)).force("y", o.forceY(r / 2).strength(_e.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let c = 0; c < a * _e.tickMultiplier; c++) i.tick();
  return !0;
}
Ne("gufe-ligand-network", zf);
function qf(e, t) {
  return { ...e, registry: Yr(t, Object.values(e.components ?? {})) };
}
function Lf(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Vf(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Bf extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = [], s = [];
    for (const [S, _] of Object.entries(n.components ?? {})) {
      const p = Xe(r, _);
      p ? o.push([S, p]) : s.push(S);
    }
    const i = St(n.name || "Chemical system");
    if (i.statsEl.appendChild(Ae("components", String(o.length))), t.appendChild(i), !o.length)
      return t.appendChild(
        fe(
          s.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = j("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:column;");
    t.appendChild(a), s.length && it(
      a,
      `${s.length} component${s.length === 1 ? "" : "s"} named by this system (${s.join(", ")}) are not in its registry`
    );
    const c = j(
      "div",
      `flex:0 0 auto;min-width:0;overflow-x:auto;display:flex;flex-direction:row;gap:6px;padding:10px;background:${O.panelBg};border-bottom:1px solid ${O.splitBorder};`
    );
    a.appendChild(c);
    const u = j("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(u);
    const h = j("div", "flex:1;min-height:0;display:flex;");
    u.appendChild(h);
    const g = document.createElement("gufe-view");
    g.style.cssText = "flex:1;min-width:0;min-height:0;", g.setAttribute(mi, ""), h.appendChild(g);
    const m = [], y = (S) => {
      m.forEach((_, p) => {
        const $ = p === S;
        _.style.background = $ ? O.cardBgActive : O.cardBg, _.style.borderColor = $ ? O.cardBorderActive : O.cardBorder;
      }), g.payload = o[S][1];
    };
    return o.forEach(([S, _], p) => {
      const $ = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${O.cardBorder};border-radius:8px;background:${O.cardBg};cursor:pointer;font-family:inherit;font-size:${Z.body};flex-shrink:0;width:auto;`
      );
      $.appendChild(j("span", `font-weight:700;color:${O.textPrimary};`, S)), $.appendChild(j("span", `font-size:${Z.small};color:${O.textMuted};`, Lf(_))), $.appendChild(Kn(Vf(_))), $.onclick = () => y(p), m.push($), c.appendChild($);
    }), y(0), {
      onResize: () => g.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => g.remove()
    };
  }
}
Ne("gufe-chemical-system", Bf);
const Uf = 460;
function Kf(e, t) {
  const n = we(t, e.stateA, "ChemicalSystemViz"), r = we(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const s of [n, r]) o.push(...Object.values(s.components ?? {}));
  for (const s of e.mappings ?? []) o.push(s.componentA, s.componentB);
  return { ...e, registry: Yr(t, o) };
}
const Nr = {
  unchanged: O.diffUnchanged,
  changed: O.diffChanged,
  added: O.diffAdded,
  removed: O.diffRemoved
};
function Hf(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Gf(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Wf(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Jf(e, t, n) {
  const r = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${O.cardBg};border:1px solid ${O.cardBorder};`
  ), o = j(
    "span",
    `display:none;font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;color:${O.textMuted2};`,
    n
  );
  r.appendChild(o);
  const s = Wf(e);
  return s ? (r.style.borderColor = t === "unchanged" ? O.cardBorder : Nr[t], r.appendChild(j("span", `font-size:${Z.body};font-weight:600;color:${O.textPrimary};`, s.name)), r.appendChild(Kn(s.type)), { cell: r, sideMark: o }) : (r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(j("span", `font-size:${Z.body};color:${O.textMuted2};`, "absent")), { cell: r, sideMark: o });
}
function Yf(e, t) {
  const n = Xe(t, e.componentA), r = Xe(t, e.componentB);
  return `${n ? Ze(n) : "A"} to ${r ? Ze(r) : "B"}`;
}
class Xf extends Re {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = we(r, n.stateA, "ChemicalSystemViz"), s = we(r, n.stateB, "ChemicalSystemViz"), i = we(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = St(n.name || "Transformation");
    if (c.statsEl.appendChild(Ae("protocol", i?.gufe_type || i?.name || "-")), c.statsEl.appendChild(Ae("mappings", String(a.length))), t.appendChild(c), !o || !s)
      return t.appendChild(
        fe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const u = Gf(o, s), h = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const g = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [l, f] of [
      ["State A", o],
      ["State B", s]
    ])
      g.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${Z.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${O.textMuted2};`,
          `${l}${f.name ? ` - ${f.name}` : ""}`
        )
      );
    h.appendChild(g);
    const m = [], y = [], S = [];
    for (const l of u) {
      const f = o.components?.[l], v = s.components?.[l], E = Hf(f, v), P = Xe(r, f), T = Xe(r, v), F = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), A = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      A.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Nr[E]};`)
      );
      const z = j("span", `font-size:${Z.body};font-weight:700;color:${O.textPrimary};overflow-wrap:anywhere;`, l);
      z.title = E, A.appendChild(z), F.appendChild(A);
      for (const [D, Y] of [
        [P, "A"],
        [T, "B"]
      ]) {
        const G = Jf(D, E, Y);
        F.appendChild(G.cell), S.push(G.sideMark);
      }
      m.push(F), y.push(A), h.appendChild(F);
    }
    let _ = null;
    const p = Ra(t, (l) => {
      const f = l > 0 && l < Uf;
      if (f !== _) {
        _ = f, g.style.display = f ? "none" : "flex";
        for (const v of m) v.style.flexDirection = f ? "column" : "row";
        for (const v of y) v.style.flex = f ? "0 0 auto" : "0 0 110px";
        for (const v of S) v.style.display = f ? "block" : "none";
      }
    }), $ = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${Z.small};color:${O.textMuted};`
    );
    for (const l of ["unchanged", "changed", "added", "removed"])
      $.appendChild(Ae(l, "", Nr[l]));
    h.appendChild($);
    const d = j(
      "div",
      ii,
      "Atom mapping"
    );
    if (t.appendChild(d), !a.length)
      return t.appendChild(
        fe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: p };
    const k = document.createElement("gufe-atom-mapping");
    k.style.cssText = "flex:1;min-height:0;min-width:0;";
    const b = (l) => {
      k.payload = Ji(a[l], r);
    };
    if (b(0), a.length > 1) {
      const l = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Z.small};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textMuted};`
      );
      l.appendChild(
        Bn(
          a.map((f, v) => ({
            id: String(v),
            label: f.name || Yf(f, r)
          })),
          "0",
          (f) => b(Number(f))
        )
      ), t.appendChild(l);
    }
    return t.appendChild(k), {
      onResize: () => k.resize?.(),
      cleanup: () => {
        p(), k.remove();
      }
    };
  }
}
Ne("gufe-transformation", Xf);
const st = { width: 148, height: 46, radius: 10 }, yt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Nt = { initial: 0.56, min: 0.25, max: 0.78 }, Zf = 24, ni = { x: st.width / 2, y: st.height / 2 }, ri = { node: 0.12, edge: 0.06 }, Qf = 1.4, qn = Ze;
function ep(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function tp(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = Xe(t, r);
    if (!o) {
      n.add("missing");
      continue;
    }
    n.add(
      o.type === "UnknownComponentViz" ? o.gufe_type : o.type.replace(/(?:Component)?Viz$/, "")
    );
  }
  return [...n].sort().join(" + ");
}
function np(e, t) {
  const n = { fill: O.cardBg, stroke: O.cardBorder }, r = e.map((i) => tp(i, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > O.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const s = new Map(
    o.map((i, a) => [i, { fill: O.netGroupFill[a], stroke: O.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (i) => s.get(r[i]) ?? n,
    legend: o.map((i) => [i, s.get(i)])
  };
}
function rp(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const s = Xe(t, o);
    if (!s) continue;
    n.push(Ze(s), s["gufe-key"]);
    const i = s.smiles;
    i && n.push(i);
  }
  return n.join(" ").toLowerCase();
}
function op(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((s) => {
    const i = [];
    for (const a of Object.values(s.components ?? {})) {
      const c = we(t, a, "SmallMoleculeComponentViz");
      if (!c) continue;
      let u = r.get(a);
      u === void 0 && (u = n.length, r.set(a, u), n.push(c.sdf ?? "")), i.push(u);
    }
    return i;
  });
  return { sources: n, perNode: o };
}
function sp(e) {
  const t = Mt("alchemical-network.query"), n = Mt("alchemical-network.composition"), r = j("div", oi), o = j("input", `${Vn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const s = Wi({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: Mt("alchemical-network.smarts"),
    run: (m) => e.match(m),
    describe: (m) => {
      const y = m.unreadable ? `, ${m.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${y}`;
    }
  });
  if (r.appendChild(s.element), e.compositions.length > 1) {
    const m = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
    m.appendChild(j("span", "flex-shrink:0;", "made of"));
    const y = Un(
      [{ id: "", label: "anything" }, ...e.compositions.map((S) => ({ id: S, label: S }))],
      "",
      (S) => {
        e.filter.composition = S, g(), e.refresh();
      },
      n
    );
    y.style.cssText += "flex:1;min-width:0;", e.filter.composition = y.value, m.appendChild(y), r.appendChild(m);
  }
  const i = j("div", `font-size:${Z.small};color:${O.textMuted2};`);
  r.appendChild(i);
  const a = j("div", si);
  r.appendChild(a), r.appendChild(j("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`, Xr));
  const c = Vi({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Systems", plural: "systems" },
      edges: { button: "Transformations", plural: "transformations" }
    },
    setting: "alchemical-network.exportAs"
  });
  r.appendChild(c.box);
  const u = j("button", `${_t}width:100%;`, "Clear selection");
  u.onclick = () => {
    e.selected.clear(), g(), e.refresh();
  }, r.appendChild(u);
  const h = (m) => {
    const y = e.query.text.trim().toLowerCase();
    if (y && !e.haystacks[m].includes(y) || e.filter.composition && e.signatures[m] !== e.filter.composition) return !1;
    const S = e.matched();
    return !(S && !S.has(m));
  }, g = () => {
    c.clearNote(), a.replaceChildren();
    const m = e.nodes.map((y, S) => ({ node: y, index: S })).filter(({ index: y }) => h(y));
    i.textContent = `${m.length} of ${e.nodes.length} systems`;
    for (const { node: y, index: S } of m) {
      const _ = y["gufe-key"], p = e.selected.has(_), $ = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${p ? O.cardBorderActive : O.cardBorder};background:${p ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), d = e.colorOf(S);
      $.appendChild(
        j(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${d.fill};border:1px solid ${d.stroke};`
        )
      );
      const k = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", qn(y));
      k.title = `${qn(y)}
${e.signatures[S]}`, $.appendChild(k), $.onclick = (b) => {
        b.shiftKey || b.metaKey || b.ctrlKey ? e.selected.has(_) ? e.selected.delete(_) : e.selected.add(_) : (e.selected.clear(), e.selected.add(_), e.focus(S)), g(), e.refresh();
      }, a.appendChild($);
    }
    m.length || a.appendChild(j("div", `font-size:${Z.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), g(), e.refresh();
  }, g(), e.mounted(g), s.apply(), r;
}
function ip(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((o, s) => {
    const i = 2 * Math.PI * s / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(i), o.y = n / 2 + r * Math.sin(i);
  });
}
async function ap(e, t, n, r) {
  let o;
  try {
    if (o = await Oi(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"] })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((c) => c["gufe-key"]).distance(yt.linkDistance).strength(yt.linkStrength)
  ).force("charge", o.forceManyBody().strength(yt.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(yt.collisionRadius).iterations(yt.collisionIterations)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let c = 0; c < a * yt.tickMultiplier; c++) i.tick();
  return !0;
}
class cp extends Re {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Ft(n), o = [];
    let s = 0;
    for (const V of n.nodes ?? []) {
      const H = we(r, V, "ChemicalSystemViz");
      if (!H) {
        s++;
        continue;
      }
      o.push({ ...H, x: 0, y: 0 });
    }
    const i = new Map(o.map((V) => [V["gufe-key"], V])), a = [];
    let c = 0;
    for (const V of n.edges ?? []) {
      const H = i.get(V.stateA), ne = i.get(V.stateB);
      if (!H || !ne) {
        c++;
        continue;
      }
      a.push({ ...V, index: a.length, from: H, to: ne });
    }
    const u = (V) => {
      const H = we(r, V.protocol, "ProtocolViz");
      return H?.gufe_type || H?.name || "";
    }, h = new Set(a.map(u).filter(Boolean)), g = St(n.name || "Alchemical network");
    g.statsEl.appendChild(Ae("systems", String(o.length))), g.statsEl.appendChild(Ae("transformations", String(a.length))), h.size && g.statsEl.appendChild(Ae("protocol", [...h].join(", "))), t.appendChild(g);
    const m = np(o, r), y = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    let S = () => {
    };
    const _ = /* @__PURE__ */ new Set(), p = { composition: "" }, $ = { text: "" };
    let d = () => {
    }, k = () => {
    }, b = () => {
    };
    const l = o.map((V) => rp(V, r));
    let f = null;
    const v = () => f ??= Xn().catch((V) => (console.warn("[gufe-viz] RDKit failed to load:", he(V)), null)), E = op(o, r), P = Gi(v, E.sources);
    let T = null, F = () => {
    };
    const A = async (V) => {
      const H = await P.run(V);
      return H.status === "superseded" || (T = H.status === "ok" ? new Set(o.flatMap((ne, ee) => E.perNode[ee].some((x) => H.matched.has(x)) ? [ee] : [])) : null, F(), d()), H;
    }, z = bi(
      g,
      () => sp({
        nodes: o,
        edges: a,
        haystacks: l,
        signatures: m.signatures,
        colorOf: m.colorOf,
        compositions: m.compositions,
        selected: _,
        filter: p,
        query: $,
        refresh: () => d(),
        matched: () => T,
        match: (V) => A(V),
        mounted: (V) => {
          F = V;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (V) => {
          k(V), b(V);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => S(),
        remember: vt("alchemical-network.menuOpen", !1)
      }
    );
    z.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", y.appendChild(z.panel);
    const D = j("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), Y = j("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${O.appBg};`), G = j("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${O.netCanvasBg};`);
    D.appendChild(G), y.appendChild(D), y.appendChild(
      yi(y, D, Y, {
        min: Nt.min,
        max: Nt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Or("alchemical-network.canvasShare", Nt.initial, Nt.min, Nt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => S(),
        onOrient: (V) => $i(z.panel, V)
      })
    ), y.appendChild(Y);
    const oe = this.#e(Y, r);
    if (!o.length)
      return G.appendChild(
        fe(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), oe.message("Nothing to show."), { cleanup: () => oe.cleanup() };
    s && it(
      G,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && it(
      G,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let X = !0, J = !1, L = null, R = () => {
    }, q = () => {
    }, N = () => {
    }, w = 0;
    D.appendChild(this.#n(m.legend, () => q()));
    const C = (V, H) => {
      L = { kind: V, index: H }, oe.show(V === "node" ? o[H] : a[H], V), R();
    };
    b = (V) => C("node", V);
    const I = () => {
      const V = ++w, H = G.clientWidth || 800, ne = G.clientHeight || 600;
      ip(o, H, ne);
      const ee = () => {
        if (!X || V !== w) return;
        N(), G.querySelectorAll("svg").forEach((M) => M.remove());
        const x = this.#t(G, o, a, H, ne, m.colorOf, C);
        N = x.cleanup, q = x.reset, k = (M) => x.focusOn(M), R = () => x.setSelected(L), R(), d = () => {
          const M = $.text.trim().toLowerCase();
          if (!(_.size > 0 || M.length > 0 || p.composition !== "" || T !== null)) {
            x.setEmphasis(null, null);
            return;
          }
          const W = M.length > 0 || p.composition !== "" || T !== null, K = /* @__PURE__ */ new Set();
          o.forEach((te, ue) => {
            const ce = W && (!M || l[ue].includes(M)) && (!p.composition || m.signatures[ue] === p.composition) && (!T || T.has(ue));
            (_.has(te["gufe-key"]) || ce) && K.add(te["gufe-key"]);
          });
          const Q = /* @__PURE__ */ new Set();
          a.forEach((te, ue) => {
            K.has(te.from["gufe-key"]) && K.has(te.to["gufe-key"]) && Q.add(ue);
          }), x.setEmphasis(K, Q);
        }, d();
      };
      if (J) {
        ee();
        return;
      }
      ap(o, a, H, ne).then((x) => {
        !X || V !== w || (x || (J = !0, it(G, "d3 could not be loaded - showing the circular layout instead")), ee());
      }, ee);
    };
    return S = I, I(), C("node", 0), {
      onResize: () => I(),
      cleanup: () => {
        X = !1, N(), oe.cleanup();
      }
    };
  }
  /**
   * The strip under the canvas: how to get back, and what the colours mean.
   *
   * The reset is always there and the legend is not. Zoom and pan have no
   * bottom, so a network the reader has flung off the edge needs one control
   * that is always in the same place; a network of one composition has nothing
   * to explain and a legend saying so is noise.
   */
  #n(t, n) {
    const r = j("div", Mr.bottom);
    if (r.appendChild(Wr(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(j("span", `font-size:${Z.small};color:${O.textMuted};`, "systems made of"));
    for (const [o, s] of t) {
      const i = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      i.appendChild(
        j(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), i.appendChild(
        j("span", `font-size:${Z.small};color:${O.textPrimary};overflow-wrap:anywhere;`, o)
      ), r.appendChild(i);
    }
    return r;
  }
  /**
   * The right-hand pane: the selected system or transformation, drawn by the
   * view that already draws it.
   *
   * One `<gufe-view>`, re-pointed rather than rebuilt, which is the same
   * create/update/destroy contract the top level uses: the payload setter tears
   * the outgoing view down, so a protein's 3Dmol context is released before the
   * next selection asks for another one.
   */
  #e(t, n) {
    t.appendChild(j("div", ii, "Selected"));
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const s = (a) => r.replaceChildren(fe(a));
    return { show: (a, c) => {
      let u;
      if (c === "node")
        u = qf(Hi(a), n);
      else {
        const { index: h, from: g, to: m, ...y } = a;
        u = Kf(y, n);
      }
      if (!u) {
        s("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      o.payload = u, o.parentNode !== r && r.replaceChildren(o);
    }, message: s, cleanup: () => o.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #t(t, n, r, o, s, i, a) {
    const c = le("svg", { class: "gufe-graph", width: o, height: s, style: "display:block;touch-action:none;" });
    t.appendChild(c);
    const u = le("g");
    c.appendChild(u);
    const h = le("g"), g = le("g");
    u.append(h, g);
    const m = Ki(c, u, {
      bounds: () => Ui(n, ni.x, ni.y),
      margin: Zf,
      hint: "Click the graph or hold Ctrl to zoom"
    }), y = (d, k) => {
      m.wasPan() || a(d, k);
    }, S = [];
    r.forEach((d, k) => {
      const b = le("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: O.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Us(b, d.name || "transformation"), b.addEventListener("click", () => y("edge", k)), h.appendChild(b), S.push(b);
      const l = le("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      l.addEventListener("click", () => y("edge", k)), h.appendChild(l);
    });
    const _ = [], p = [], $ = [];
    return n.forEach((d, k) => {
      const b = i(k), l = le("g", { style: "cursor:pointer;" });
      $.push(l);
      const f = le("rect", {
        x: d.x - st.width / 2,
        y: d.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: b.fill,
        stroke: b.stroke,
        "stroke-width": 2
      });
      l.appendChild(f), _.push(f), p.push(b.stroke);
      const v = le("text", {
        x: d.x,
        y: d.y - 2,
        "text-anchor": "middle",
        fill: O.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      v.textContent = ep(qn(d), 20), l.appendChild(v);
      const E = Object.keys(d.components ?? {}).length, P = le("text", {
        x: d.x,
        y: d.y + 14,
        "text-anchor": "middle",
        fill: O.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      P.textContent = `${E} component${E === 1 ? "" : "s"}`, l.appendChild(P), Us(l, qn(d)), l.addEventListener("click", () => y("node", k)), g.appendChild(l);
    }), m.fit(), {
      setSelected(d) {
        _.forEach((k, b) => {
          const l = d?.kind === "node" && d.index === b;
          k.setAttribute("stroke", l ? O.cardBorderActive : p[b]), k.setAttribute("stroke-width", l ? "3" : "2");
        }), S.forEach((k, b) => {
          const l = d?.kind === "edge" && d.index === b;
          k.setAttribute("stroke", l ? O.netHaloColor : O.netEdgeLine), k.setAttribute("stroke-width", l ? "4" : "2");
        });
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(d, k) {
        $.forEach((b, l) => {
          const f = !d || d.has(n[l]["gufe-key"]);
          b.setAttribute("opacity", f ? "1" : String(ri.node));
        }), S.forEach((b, l) => {
          const f = !k || k.has(l);
          b.setAttribute("opacity", f ? "1" : String(ri.edge));
        });
      },
      focusOn(d) {
        const k = n[d];
        k && m.centreOn(k.x, k.y, Qf);
      },
      reset: m.reset,
      cleanup: m.cleanup
    };
  }
}
Ne("gufe-alchemical-network", cp);
class lp extends Re {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = St(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Kn(n.gufe_type)), t.appendChild(r);
    const o = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const s = Tr();
    return s.style.maxWidth = "460px", s.appendChild(Se("gufe class", n.gufe_type, !0)), n.name && s.appendChild(Se("Name", n.name)), s.appendChild(Se("gufe key", n["gufe-key"], !0)), s.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(s), {};
  }
}
Ne("gufe-protocol", lp);
class dp extends Re {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Tr();
    return o.style.maxWidth = "560px", o.style.width = "100%", o.appendChild(Se("Name", n.name || "(unnamed)")), o.appendChild(Se("SMILES", n.smiles, !0)), o.appendChild(Se("Positive ion", n.positive_ion)), o.appendChild(Se("Negative ion", n.negative_ion)), o.appendChild(Se("Ion concentration", n.ion_concentration)), o.appendChild(Se("Neutralize", n.neutralize ? "yes" : "no")), o.appendChild(Se("gufe key", n["gufe-key"], !0)), r.appendChild(o), {};
  }
}
Ne("gufe-solvent", dp);
class up extends Re {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = St(n.name || "Unnamed component");
    r.statsEl.appendChild(Kn(n.gufe_type)), t.appendChild(r);
    const o = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const s = Tr();
    return s.style.maxWidth = "460px", s.appendChild(
      j(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${O.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), s.appendChild(
      j(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${O.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), s.appendChild(Se("Name", n.name || "(unnamed)")), s.appendChild(Se("gufe class", n.gufe_type, !0)), o.appendChild(s), {};
  }
}
Ne("gufe-unknown-component", up);
function yp(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: di, reset: ya });
export {
  Ma as CHROME_OPEN_BY_DEFAULT,
  sa as DEBUG_ATTRIBUTE,
  ia as DEBUG_GLOBAL,
  Qd as DEFAULT_DEPICT_STYLE,
  _d as DEFAULT_ZOOM_BOUNDS,
  Te as DEPICT_STYLE,
  su as DEPICT_STYLE_RANGES,
  cp as GufeAlchemicalNetwork,
  df as GufeAtomMapping,
  Bf as GufeChemicalSystem,
  Re as GufeElement,
  zf as GufeLigandNetwork,
  Au as GufeProtein,
  lp as GufeProtocol,
  Su as GufeSmallMolecule,
  dp as GufeSolvent,
  Xf as GufeTransformation,
  up as GufeUnknownComponent,
  gd as GufeView,
  mi as HIDE_NAME_ATTRIBUTE,
  pr as MAPPING_COLORS,
  Ed as MAPPING_RAMP_3D,
  gp as MAPPING_RAMP_NAME,
  Xr as MULTI_SELECT_HINT,
  fp as PAYLOAD_TYPES,
  pp as SCHEMA_TYPES,
  Br as VIEW_TAGS,
  Hu as align2D,
  Ju as alignedToPartner,
  Ku as applyRT,
  Gu as applyTurn,
  kd as boundedZoom,
  Ft as buildRegistry,
  wt as choice,
  bi as chromeMenu,
  vd as claimGestures,
  ci as debugEnabled,
  Ne as defineElement,
  Ni as describeProblem,
  Hf as diffStatus,
  mp as dispatchProblem,
  Yr as entriesFor,
  Ze as entryLabel,
  Vi as exportBlock,
  Ui as extentOf,
  vt as flag,
  hd as formatIssues,
  Ti as guardWheel,
  sf as inFrameOf,
  Uu as kabsch,
  Ws as laidOut,
  Yu as layoutPair,
  af as liftFor,
  da as logPayload,
  Xe as lookup,
  we as lookupOfType,
  Ji as mappingPayloadFor,
  Fs as markGroups,
  hr as markedBonds,
  yp as mount,
  gi as nameWanted,
  au as normaliseDepictStyle,
  Or as num,
  Ra as onWidth,
  cf as openfeShift,
  $i as orientMenuPanel,
  lf as pairColour,
  Os as parseAtomSpec,
  la as payloadJson,
  Wr as resetControl,
  ya as resetSettings,
  Ki as sceneCamera,
  Ru as selectionText,
  Ln as setting,
  di as settings,
  yi as splitter,
  qf as systemPayloadFor,
  Mt as textSetting,
  Kf as transformationPayloadFor,
  Ys as uniqueAtoms,
  lu as uniqueBonds,
  hp as validateAs,
  pd as validatePayload,
  Gr as viewerInteraction,
  Fi as wheelFactor,
  Wu as withCoords
};
