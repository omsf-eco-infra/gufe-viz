const to = {
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
    netDepictBg: "#ffffff",
    netNodeCaption: "#b9bccb",
    netDepictCaption: "#55555f",
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
    netDepictBg: "#ffffff",
    netNodeCaption: "#666666",
    netDepictCaption: "#666666",
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
const M = Zi() ? to.dark : to.light, Z = {
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
}, oe = {
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
  title: M.titleColor,
  primary: M.textPrimary,
  muted: M.textMuted,
  faint: M.textMuted2,
  error: M.errorFg
}, $t = {
  card: M.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: M.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: M.canvas2DBg
}, ye = {
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${oe.sm} 9px;font-size:${Z.small};font-weight:${Ue.bold};border-radius:${Ke.sm};cursor:pointer;font-family:inherit;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, Qi = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${Ke.md};padding:${oe.sm} ${oe.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, ea = `display:flex;align-items:center;gap:12px;padding:9px ${oe.xxl};flex-shrink:0;background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, In = { min: "236px", max: "340px" }, Je = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y"
}, si = `display:flex;flex-direction:column;gap:${oe.lg};flex:1;min-width:var(${Je.min},${In.min});max-width:var(${Je.max},${In.max});box-sizing:border-box;padding:${oe.xl};min-height:0;overflow-y:auto;background:${M.panelBg};border:0 solid ${M.splitBorder};border-right-width:var(${Je.ruleX},1px);border-bottom-width:var(${Je.ruleY},0);`, ta = "45%", ii = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Or = {
  top: `display:flex;align-items:center;gap:${oe.xl};flex-wrap:wrap;padding:${oe.lg} ${oe.xxl};flex-shrink:0;font-size:${Z.body};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${oe.xl};flex-wrap:wrap;padding:${oe.lg} ${oe.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, ai = `flex-shrink:0;padding:${oe.sm} ${oe.xl};font-size:${Z.heading};font-weight:${Ue.bold};color:${M.labelFg};background:${M.labelBg};`, Sr = `position:absolute;top:${oe.md};left:${oe.md};z-index:10;pointer-events:none;max-width:calc(100% - ${oe.xxl} - ${oe.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${oe.xs} ${oe.lg};border-radius:${Ke.md};font-size:${Z.heading};font-weight:${Ue.bold};color:${M.labelFg};background:${M.labelBg};`, na = `display:flex;flex-direction:column;gap:${oe.xs};padding:${oe.xxl} 18px;border-radius:${Ke.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, ci = `position:absolute;bottom:${oe.xl};right:${oe.xl};display:flex;gap:${oe.sm};padding:${oe.sm};border-radius:${Ke.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, ra = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${M.textMuted};`, no = `font-size:${Z.small};font-weight:${Ue.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, et = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${oe.xs} ${oe.sm};font-size:${Z.small};`,
  plain: `display:inline-flex;align-items:center;padding:${oe.xs} ${oe.md};border:1px solid transparent;border-radius:${Ke.pill};font-family:inherit;font-size:${Z.small};color:${M.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${M.btnBorder};`,
  active: `cursor:pointer;background:${M.cardBgActive};border-color:${M.btnBorder};color:${M.textPrimary};`
}, tr = `font-size:${Z.small};line-height:1.6;color:${M.textMuted2};`, oa = ["debug", "gufe-debug"], sa = "debug", ia = "GUFE_VIZ_DEBUG";
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
function li(e) {
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
  if (!li(n)) return;
  const r = la(t), o = t?.type, s = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(s) : console.log(s), console.log(r), console.log(t), i && console.groupEnd?.();
}
const di = "GUFE_VIZ_VIEW_STATE";
function ua(e) {
  const t = globalThis[di];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const fa = 150, ro = "data-gufe-shell";
class Ne extends HTMLElement {
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${ro}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = M.appBg, this.style.color = M.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
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
      `width:100%;height:100%;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:${M.appBg};`
    ), this.#t.setAttribute(ro, ""), this.appendChild(this.#t), this.#t;
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
function Me(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const Ce = "gufe-viz:", Ye = /* @__PURE__ */ new Map();
let zt = null;
function pa() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Ft() {
  if (zt === !1) return null;
  const e = pa();
  if (!e)
    return zt = !1, null;
  try {
    const t = `${Ce}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), zt = !0, e;
  } catch {
    return zt = !1, null;
  }
}
function ha(e) {
  const t = Ft();
  if (!t) return Ye.get(Ce + e) ?? null;
  try {
    return t.getItem(Ce + e);
  } catch {
    return null;
  }
}
function ma(e, t) {
  const n = Ft();
  if (!n) {
    Ye.set(Ce + e, t);
    return;
  }
  try {
    n.setItem(Ce + e, t);
  } catch {
    Ye.set(Ce + e, t);
  }
}
function Vn(e, t, n) {
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
  return Vn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function vt(e, t) {
  return Vn(e, t, (n) => typeof n == "boolean");
}
function Tr(e, t, n = -1 / 0, r = 1 / 0) {
  return Vn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Ot(e, t = "") {
  return Vn(e, t, (n) => typeof n == "string");
}
function ui() {
  const e = {}, t = Ft(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ye.keys());
  for (const r of n) {
    if (!r.startsWith(Ce)) continue;
    const o = t ? t.getItem(r) : Ye.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(Ce.length)] = JSON.parse(o);
      } catch {
        e[r.slice(Ce.length)] = o;
      }
  }
  return e;
}
function ga() {
  const e = {}, t = Ft(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ye.keys());
  for (const r of n) {
    if (!r.startsWith(Ce)) continue;
    const o = t ? t.getItem(r) : Ye.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function ya() {
  const e = Ft();
  if (e)
    for (const t of Object.keys(ui()))
      try {
        e.removeItem(Ce + t);
      } catch {
      }
  Ye.clear();
}
const fi = "https://framejs.app", pi = 1e4;
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
  return e.length >= pi ? e : null;
}
async function wa() {
  const e = ba();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(va);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < pi ? null : {
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
    `  const prefix = ${JSON.stringify(Ce)};`,
    `  const menuOpen = ${JSON.stringify(bi)};`,
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
    `globalThis[${JSON.stringify(di)}] = ${JSON.stringify(e.views)};`
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
    o.endsWith(bi) || (r[o] = s);
  return { settings: r, views: t };
}
const Ea = (e) => `${fi}/j/${e}`, xa = (e) => `${fi}/j/${e}.json`;
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
  if (!li()) return;
  const t = j(
    "div",
    `display:flex;flex-direction:column;gap:${oe.md};padding-top:${oe.lg};border-top:1px dashed ${M.splitBorder};`
  );
  t.appendChild(
    j(
      "div",
      `font-size:${Z.tiny};font-weight:${Ue.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
      "debug"
    )
  );
  const n = j("button", `${ye.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = j("div", `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? M.errorFg : M.textMuted2;
  }, s = (i, a) => {
    const l = j("a", `color:${M.textPrimary};`, i);
    l.href = i, l.target = "_blank", l.rel = "noreferrer", r.replaceChildren(l), a && r.appendChild(j("div", `padding-top:${oe.sm};`, a)), r.style.color = M.textMuted2;
  };
  n.onclick = () => {
    const i = $a(e);
    if (!i || i.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, l = Ca(i), p = window.open("", "_blank"), h = _a(), S = a, b = String(S.name || S.type || "gufe-viz"), w = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), wa().then(($) => {
      if (!$) {
        p?.close(), w(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Pa(h, ka($.js, a, l), b).then(() => {
        w();
        const m = Ea(h);
        p && (p.location.href = m), s(m, $.note);
      });
    }).catch(($) => {
      w(), p?.close(), o(`Upload failed: ${$ instanceof Error ? $.message : String($)}`, !0);
    });
  }, t.appendChild(
    j(
      "div",
      `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};`,
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
const kt = (e) => e.toLocaleString("en-US"), ot = "-", _t = ye.base, Bn = Qi;
function Un(e, t, n, r) {
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
function Kn(e, t, n, r) {
  const o = j("select", Bn);
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
function hi(e, t, n, r = {}) {
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
function Re(e, t, n) {
  const r = j("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    j("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = j("span");
  return o.innerHTML = `${Be(e)} <b style="color:${Pe.primary};">${Be(t)}</b>`, r.appendChild(o), r;
}
function it(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${oe.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${oe.md} ${oe.xxl};border-radius:${Ke.md};font-size:${Z.body};background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};`, e.appendChild(n), n;
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
function ke(e, t, n = !1) {
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
function Hn(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:${Ke.xl};font-size:${Z.tiny};font-weight:${Ue.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function Fr() {
  return j("div", na);
}
function mi() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const gi = "data-gufe-hide-name";
function yi(e) {
  return !e.closest(`[${gi}]`);
}
function Ra(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const oo = { min: 0.2, max: 0.8 }, Na = 5;
function $i(e, t, n, r = {}) {
  const o = r.min ?? oo.min, s = r.max ?? oo.max, i = j(
    "div",
    `flex:0 0 ${Na}px;align-self:stretch;touch-action:none;background:${M.splitBorder};`
  );
  i.setAttribute("role", "separator"), i.setAttribute("aria-label", "Resize the panes");
  let a = !1;
  const l = ($) => {
    a = $, e.style.flexDirection = a ? "column" : "row", i.style.cursor = a ? "row-resize" : "col-resize", i.setAttribute("aria-orientation", a ? "horizontal" : "vertical"), r.onOrient?.(a);
  }, p = () => {
    const $ = e.getBoundingClientRect();
    return $.height > $.width;
  };
  let h = Math.min(s, Math.max(o, r.remember?.get() ?? 0.5));
  const S = () => {
    t.style.flex = `1 1 ${(h * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - h) * 100).toFixed(2)}%`;
  };
  S(), l(p()), typeof ResizeObserver < "u" && new ResizeObserver(() => {
    const m = p();
    m !== a && (l(m), r.onResize?.(h));
  }).observe(e);
  let b = !1;
  i.addEventListener("pointerdown", ($) => {
    b = !0, i.setPointerCapture($.pointerId), $.preventDefault();
  }), i.addEventListener("pointermove", ($) => {
    if (!b) return;
    const m = e.getBoundingClientRect(), u = a ? m.height : m.width;
    if (u <= 0) return;
    const g = a ? $.clientY - m.top : $.clientX - m.left;
    h = Math.min(s, Math.max(o, g / u)), S();
  });
  const w = ($) => {
    b && (b = !1, i.releasePointerCapture($.pointerId), r.remember?.set(h), r.onResize?.(h));
  };
  return i.addEventListener("pointerup", w), i.addEventListener("pointercancel", w), i;
}
function vi(e, t) {
  e.style.setProperty(Je.min, t ? "0" : In.min), e.style.setProperty(Je.max, t ? "none" : In.max), e.style.setProperty(Je.ruleX, t ? "0" : "1px"), e.style.setProperty(Je.ruleY, t ? "1px" : "0"), e.style.maxHeight = t ? ta : "";
}
const Ma = !1, bi = ".menuOpen";
function Oa() {
  const e = j("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Ta = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Oa
}, Fa = Ta.openFreeEnergy;
function wi(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Ma, o = !1;
  const s = j("div", "flex-shrink:0;"), i = j("button", `${ye.base}display:inline-flex;align-items:center;gap:${oe.md};padding:${oe.sm} ${oe.lg};`);
  i.appendChild(Fa()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, s.appendChild(t()), Aa(s)), s.style.display = r ? "" : "none", i.style.background = r ? ye.bgActive : ye.bg, i.setAttribute("aria-expanded", String(r));
  }, l = (p) => {
    p !== r && (r = p, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return i.onclick = () => l(!r), i.onmouseover = () => {
    i.style.background = r ? ye.bgActive : ye.bgHover;
  }, i.onmouseout = () => {
    i.style.background = r ? ye.bgActive : ye.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(i), a(), {
    panel: s,
    isOpen: () => r,
    setOpen: l
  };
}
function ja(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var It = { exports: {} }, nr = {}, Ie = {}, tt = {}, rr = {}, or = {}, sr = {}, so;
function Dn() {
  return so || (so = 1, (function(e) {
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
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((k, v) => `${k}${v}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((k, v) => (v instanceof n && (k[v.str] = (k[v.str] || 0) + 1), k), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o(g, ...d) {
      const k = [g[0]];
      let v = 0;
      for (; v < d.length; )
        a(k, d[v]), k.push(g[++v]);
      return new r(k);
    }
    e._ = o;
    const s = new r("+");
    function i(g, ...d) {
      const k = [w(g[0])];
      let v = 0;
      for (; v < d.length; )
        k.push(s), a(k, d[v]), k.push(s, w(g[++v]));
      return l(k), new r(k);
    }
    e.str = i;
    function a(g, d) {
      d instanceof r ? g.push(...d._items) : d instanceof n ? g.push(d) : g.push(S(d));
    }
    e.addCodeArg = a;
    function l(g) {
      let d = 1;
      for (; d < g.length - 1; ) {
        if (g[d] === s) {
          const k = p(g[d - 1], g[d + 1]);
          if (k !== void 0) {
            g.splice(d - 1, 3, k);
            continue;
          }
          g[d++] = "+";
        }
        d++;
      }
    }
    function p(g, d) {
      if (d === '""')
        return g;
      if (g === '""')
        return d;
      if (typeof g == "string")
        return d instanceof n || g[g.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${g.slice(0, -1)}${d}"` : d[0] === '"' ? g.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !(g instanceof n))
        return `"${g}${d.slice(1)}`;
    }
    function h(g, d) {
      return d.emptyStr() ? g : g.emptyStr() ? d : i`${g}${d}`;
    }
    e.strConcat = h;
    function S(g) {
      return typeof g == "number" || typeof g == "boolean" || g === null ? g : w(Array.isArray(g) ? g.join(",") : g);
    }
    function b(g) {
      return new r(w(g));
    }
    e.stringify = b;
    function w(g) {
      return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = w;
    function $(g) {
      return typeof g == "string" && e.IDENTIFIER.test(g) ? new r(`.${g}`) : o`[${g}]`;
    }
    e.getProperty = $;
    function m(g) {
      if (typeof g == "string" && e.IDENTIFIER.test(g))
        return new r(`${g}`);
      throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
    }
    e.getEsmExportName = m;
    function u(g) {
      return new r(g.toString());
    }
    e.regexpCode = u;
  })(sr)), sr;
}
var ir = {}, io;
function ao() {
  return io || (io = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Dn();
    class n extends Error {
      constructor(p) {
        super(`CodeGen: "code" for ${p} not defined`), this.value = p.value;
      }
    }
    var r;
    (function(l) {
      l[l.Started = 0] = "Started", l[l.Completed = 1] = "Completed";
    })(r || (e.UsedValueState = r = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class o {
      constructor({ prefixes: p, parent: h } = {}) {
        this._names = {}, this._prefixes = p, this._parent = h;
      }
      toName(p) {
        return p instanceof t.Name ? p : this.name(p);
      }
      name(p) {
        return new t.Name(this._newName(p));
      }
      _newName(p) {
        const h = this._names[p] || this._nameGroup(p);
        return `${p}${h.index++}`;
      }
      _nameGroup(p) {
        var h, S;
        if (!((S = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || S === void 0) && S.has(p) || this._prefixes && !this._prefixes.has(p))
          throw new Error(`CodeGen: prefix "${p}" is not allowed in this scope`);
        return this._names[p] = { prefix: p, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(p, h) {
        super(h), this.prefix = p;
      }
      setValue(p, { property: h, itemIndex: S }) {
        this.value = p, this.scopePath = (0, t._)`.${new t.Name(h)}[${S}]`;
      }
    }
    e.ValueScopeName = s;
    const i = (0, t._)`\n`;
    class a extends o {
      constructor(p) {
        super(p), this._values = {}, this._scope = p.scope, this.opts = { ...p, _n: p.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(p) {
        return new s(p, this._newName(p));
      }
      value(p, h) {
        var S;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const b = this.toName(p), { prefix: w } = b, $ = (S = h.key) !== null && S !== void 0 ? S : h.ref;
        let m = this._values[w];
        if (m) {
          const d = m.get($);
          if (d)
            return d;
        } else
          m = this._values[w] = /* @__PURE__ */ new Map();
        m.set($, b);
        const u = this._scope[w] || (this._scope[w] = []), g = u.length;
        return u[g] = h.ref, b.setValue(h, { property: w, itemIndex: g }), b;
      }
      getValue(p, h) {
        const S = this._values[p];
        if (S)
          return S.get(h);
      }
      scopeRefs(p, h = this._values) {
        return this._reduceValues(h, (S) => {
          if (S.scopePath === void 0)
            throw new Error(`CodeGen: name "${S}" has no value`);
          return (0, t._)`${p}${S.scopePath}`;
        });
      }
      scopeCode(p = this._values, h, S) {
        return this._reduceValues(p, (b) => {
          if (b.value === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return b.value.code;
        }, h, S);
      }
      _reduceValues(p, h, S = {}, b) {
        let w = t.nil;
        for (const $ in p) {
          const m = p[$];
          if (!m)
            continue;
          const u = S[$] = S[$] || /* @__PURE__ */ new Map();
          m.forEach((g) => {
            if (u.has(g))
              return;
            u.set(g, r.Started);
            let d = h(g);
            if (d) {
              const k = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              w = (0, t._)`${w}${k} ${g} = ${d};${this.opts._n}`;
            } else if (d = b?.(g))
              w = (0, t._)`${w}${d}${this.opts._n}`;
            else
              throw new n(g);
            u.set(g, r.Completed);
          });
        }
        return w;
      }
    }
    e.ValueScope = a;
  })(ir)), ir;
}
var co;
function se() {
  return co || (co = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Dn(), n = /* @__PURE__ */ ao();
    var r = /* @__PURE__ */ Dn();
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
    var o = /* @__PURE__ */ ao();
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
      optimizeNames(_, E) {
        return this;
      }
    }
    class i extends s {
      constructor(_, E, I) {
        super(), this.varKind = _, this.name = E, this.rhs = I;
      }
      render({ es5: _, _n: E }) {
        const I = _ ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${V};` + E;
      }
      optimizeNames(_, E) {
        if (_[this.name.str])
          return this.rhs && (this.rhs = O(this.rhs, _, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends s {
      constructor(_, E, I) {
        super(), this.lhs = _, this.rhs = E, this.sideEffects = I;
      }
      render({ _n: _ }) {
        return `${this.lhs} = ${this.rhs};` + _;
      }
      optimizeNames(_, E) {
        if (!(this.lhs instanceof t.Name && !_[this.lhs.str] && !this.sideEffects))
          return this.rhs = O(this.rhs, _, E), this;
      }
      get names() {
        const _ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return q(_, this.rhs);
      }
    }
    class l extends a {
      constructor(_, E, I, V) {
        super(_, I, V), this.op = E;
      }
      render({ _n: _ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _;
      }
    }
    class p extends s {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `${this.label}:` + _;
      }
    }
    class h extends s {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + _;
      }
    }
    class S extends s {
      constructor(_) {
        super(), this.error = _;
      }
      render({ _n: _ }) {
        return `throw ${this.error};` + _;
      }
      get names() {
        return this.error.names;
      }
    }
    class b extends s {
      constructor(_) {
        super(), this.code = _;
      }
      render({ _n: _ }) {
        return `${this.code};` + _;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(_, E) {
        return this.code = O(this.code, _, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class w extends s {
      constructor(_ = []) {
        super(), this.nodes = _;
      }
      render(_) {
        return this.nodes.reduce((E, I) => E + I.render(_), "");
      }
      optimizeNodes() {
        const { nodes: _ } = this;
        let E = _.length;
        for (; E--; ) {
          const I = _[E].optimizeNodes();
          Array.isArray(I) ? _.splice(E, 1, ...I) : I ? _[E] = I : _.splice(E, 1);
        }
        return _.length > 0 ? this : void 0;
      }
      optimizeNames(_, E) {
        const { nodes: I } = this;
        let V = I.length;
        for (; V--; ) {
          const H = I[V];
          H.optimizeNames(_, E) || (G(_, H.names), I.splice(V, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((_, E) => F(_, E.names), {});
      }
    }
    class $ extends w {
      render(_) {
        return "{" + _._n + super.render(_) + "}" + _._n;
      }
    }
    class m extends w {
    }
    class u extends $ {
    }
    u.kind = "else";
    class g extends $ {
      constructor(_, E) {
        super(E), this.condition = _;
      }
      render(_) {
        let E = `if(${this.condition})` + super.render(_);
        return this.else && (E += "else " + this.else.render(_)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const _ = this.condition;
        if (_ === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const I = E.optimizeNodes();
          E = this.else = Array.isArray(I) ? new u(I) : I;
        }
        if (E)
          return _ === !1 ? E instanceof g ? E : E.nodes : this.nodes.length ? this : new g(Y(_), E instanceof g ? [E] : E.nodes);
        if (!(_ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(_, E) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(_, E), !!(super.optimizeNames(_, E) || this.else))
          return this.condition = O(this.condition, _, E), this;
      }
      get names() {
        const _ = super.names;
        return q(_, this.condition), this.else && F(_, this.else.names), _;
      }
    }
    g.kind = "if";
    class d extends $ {
    }
    d.kind = "for";
    class k extends d {
      constructor(_) {
        super(), this.iteration = _;
      }
      render(_) {
        return `for(${this.iteration})` + super.render(_);
      }
      optimizeNames(_, E) {
        if (super.optimizeNames(_, E))
          return this.iteration = O(this.iteration, _, E), this;
      }
      get names() {
        return F(super.names, this.iteration.names);
      }
    }
    class v extends d {
      constructor(_, E, I, V) {
        super(), this.varKind = _, this.name = E, this.from = I, this.to = V;
      }
      render(_) {
        const E = _.es5 ? n.varKinds.var : this.varKind, { name: I, from: V, to: H } = this;
        return `for(${E} ${I}=${V}; ${I}<${H}; ${I}++)` + super.render(_);
      }
      get names() {
        const _ = q(super.names, this.from);
        return q(_, this.to);
      }
    }
    class c extends d {
      constructor(_, E, I, V) {
        super(), this.loop = _, this.varKind = E, this.name = I, this.iterable = V;
      }
      render(_) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(_);
      }
      optimizeNames(_, E) {
        if (super.optimizeNames(_, E))
          return this.iterable = O(this.iterable, _, E), this;
      }
      get names() {
        return F(super.names, this.iterable.names);
      }
    }
    class f extends $ {
      constructor(_, E, I) {
        super(), this.name = _, this.args = E, this.async = I;
      }
      render(_) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(_);
      }
    }
    f.kind = "func";
    class y extends w {
      render(_) {
        return "return " + super.render(_);
      }
    }
    y.kind = "return";
    class C extends $ {
      render(_) {
        let E = "try" + super.render(_);
        return this.catch && (E += this.catch.render(_)), this.finally && (E += this.finally.render(_)), E;
      }
      optimizeNodes() {
        var _, E;
        return super.optimizeNodes(), (_ = this.catch) === null || _ === void 0 || _.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(_, E) {
        var I, V;
        return super.optimizeNames(_, E), (I = this.catch) === null || I === void 0 || I.optimizeNames(_, E), (V = this.finally) === null || V === void 0 || V.optimizeNames(_, E), this;
      }
      get names() {
        const _ = super.names;
        return this.catch && F(_, this.catch.names), this.finally && F(_, this.finally.names), _;
      }
    }
    class P extends $ {
      constructor(_) {
        super(), this.error = _;
      }
      render(_) {
        return `catch(${this.error})` + super.render(_);
      }
    }
    P.kind = "catch";
    class T extends $ {
      render(_) {
        return "finally" + super.render(_);
      }
    }
    T.kind = "finally";
    class z {
      constructor(_, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = _, this._scope = new n.Scope({ parent: _ }), this._nodes = [new m()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(_) {
        return this._scope.name(_);
      }
      // reserves unique name in the external scope
      scopeName(_) {
        return this._extScope.name(_);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(_, E) {
        const I = this._extScope.value(_, E);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(_, E) {
        return this._extScope.getValue(_, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(_) {
        return this._extScope.scopeRefs(_, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(_, E, I, V) {
        const H = this._scope.toName(E);
        return I !== void 0 && V && (this._constants[H.str] = I), this._leafNode(new i(_, H, I)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(_, E, I) {
        return this._def(n.varKinds.const, _, E, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(_, E, I) {
        return this._def(n.varKinds.let, _, E, I);
      }
      // `var` declaration with optional assignment
      var(_, E, I) {
        return this._def(n.varKinds.var, _, E, I);
      }
      // assignment code
      assign(_, E, I) {
        return this._leafNode(new a(_, E, I));
      }
      // `+=` code
      add(_, E) {
        return this._leafNode(new l(_, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(_) {
        return typeof _ == "function" ? _() : _ !== t.nil && this._leafNode(new b(_)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(..._) {
        const E = ["{"];
        for (const [I, V] of _)
          E.length > 1 && E.push(","), E.push(I), (I !== V || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, V));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(_, E, I) {
        if (this._blockNode(new g(_)), E && I)
          this.code(E).else().code(I).endIf();
        else if (E)
          this.code(E).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(_) {
        return this._elseNode(new g(_));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(g, u);
      }
      _for(_, E) {
        return this._blockNode(_), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(_, E) {
        return this._for(new k(_), E);
      }
      // `for` statement for a range of values
      forRange(_, E, I, V, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ne = this._scope.toName(_);
        return this._for(new v(H, ne, E, I), () => V(ne));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(_, E, I, V = n.varKinds.const) {
        const H = this._scope.toName(_);
        if (this.opts.es5) {
          const ne = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${ne}.length`, (ee) => {
            this.var(H, (0, t._)`${ne}[${ee}]`), I(H);
          });
        }
        return this._for(new c("of", V, H, E), () => I(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(_, E, I, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(_, (0, t._)`Object.keys(${E})`, I);
        const H = this._scope.toName(_);
        return this._for(new c("in", V, H, E), () => I(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(d);
      }
      // `label` statement
      label(_) {
        return this._leafNode(new p(_));
      }
      // `break` statement
      break(_) {
        return this._leafNode(new h(_));
      }
      // `return` statement
      return(_) {
        const E = new y();
        if (this._blockNode(E), this.code(_), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(y);
      }
      // `try` statement
      try(_, E, I) {
        if (!E && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new C();
        if (this._blockNode(V), this.code(_), E) {
          const H = this.name("e");
          this._currNode = V.catch = new P(H), E(H);
        }
        return I && (this._currNode = V.finally = new T(), this.code(I)), this._endBlockNode(P, T);
      }
      // `throw` statement
      throw(_) {
        return this._leafNode(new S(_));
      }
      // start self-balancing block
      block(_, E) {
        return this._blockStarts.push(this._nodes.length), _ && this.code(_).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(_) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - E;
        if (I < 0 || _ !== void 0 && I !== _)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${_} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(_, E = t.nil, I, V) {
        return this._blockNode(new f(_, E, I)), V && this.code(V).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(f);
      }
      optimize(_ = 1) {
        for (; _-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(_) {
        return this._currNode.nodes.push(_), this;
      }
      _blockNode(_) {
        this._currNode.nodes.push(_), this._nodes.push(_);
      }
      _endBlockNode(_, E) {
        const I = this._currNode;
        if (I instanceof _ || E && I instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${_.kind}/${E.kind}` : _.kind}"`);
      }
      _elseNode(_) {
        const E = this._currNode;
        if (!(E instanceof g))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = _, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const _ = this._nodes;
        return _[_.length - 1];
      }
      set _currNode(_) {
        const E = this._nodes;
        E[E.length - 1] = _;
      }
    }
    e.CodeGen = z;
    function F(R, _) {
      for (const E in _)
        R[E] = (R[E] || 0) + (_[E] || 0);
      return R;
    }
    function q(R, _) {
      return _ instanceof t._CodeOrName ? F(R, _.names) : R;
    }
    function O(R, _, E) {
      if (R instanceof t.Name)
        return I(R);
      if (!V(R))
        return R;
      return new t._Code(R._items.reduce((H, ne) => (ne instanceof t.Name && (ne = I(ne)), ne instanceof t._Code ? H.push(...ne._items) : H.push(ne), H), []));
      function I(H) {
        const ne = E[H.str];
        return ne === void 0 || _[H.str] !== 1 ? H : (delete _[H.str], ne);
      }
      function V(H) {
        return H instanceof t._Code && H._items.some((ne) => ne instanceof t.Name && _[ne.str] === 1 && E[ne.str] !== void 0);
      }
    }
    function G(R, _) {
      for (const E in _)
        R[E] = (R[E] || 0) - (_[E] || 0);
    }
    function Y(R) {
      return typeof R == "boolean" || typeof R == "number" || R === null ? !R : (0, t._)`!${D(R)}`;
    }
    e.not = Y;
    const re = A(e.operators.AND);
    function X(...R) {
      return R.reduce(re);
    }
    e.and = X;
    const W = A(e.operators.OR);
    function L(...R) {
      return R.reduce(W);
    }
    e.or = L;
    function A(R) {
      return (_, E) => _ === t.nil ? E : E === t.nil ? _ : (0, t._)`${D(_)} ${R} ${D(E)}`;
    }
    function D(R) {
      return R instanceof t.Name ? R : (0, t._)`(${R})`;
    }
  })(or)), or;
}
var ie = {}, lo;
function ae() {
  if (lo) return ie;
  lo = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.checkStrictMode = ie.getErrorPath = ie.Type = ie.useFunc = ie.setEvaluated = ie.evaluatedPropsToName = ie.mergeEvaluated = ie.eachItem = ie.unescapeJsonPointer = ie.escapeJsonPointer = ie.escapeFragment = ie.unescapeFragment = ie.schemaRefOrVal = ie.schemaHasRulesButRef = ie.schemaHasRules = ie.checkUnknownRules = ie.alwaysValidSchema = ie.toHash = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Dn();
  function n(c) {
    const f = {};
    for (const y of c)
      f[y] = !0;
    return f;
  }
  ie.toHash = n;
  function r(c, f) {
    return typeof f == "boolean" ? f : Object.keys(f).length === 0 ? !0 : (o(c, f), !s(f, c.self.RULES.all));
  }
  ie.alwaysValidSchema = r;
  function o(c, f = c.schema) {
    const { opts: y, self: C } = c;
    if (!y.strictSchema || typeof f == "boolean")
      return;
    const P = C.RULES.keywords;
    for (const T in f)
      P[T] || v(c, `unknown keyword: "${T}"`);
  }
  ie.checkUnknownRules = o;
  function s(c, f) {
    if (typeof c == "boolean")
      return !c;
    for (const y in c)
      if (f[y])
        return !0;
    return !1;
  }
  ie.schemaHasRules = s;
  function i(c, f) {
    if (typeof c == "boolean")
      return !c;
    for (const y in c)
      if (y !== "$ref" && f.all[y])
        return !0;
    return !1;
  }
  ie.schemaHasRulesButRef = i;
  function a({ topSchemaRef: c, schemaPath: f }, y, C, P) {
    if (!P) {
      if (typeof y == "number" || typeof y == "boolean")
        return y;
      if (typeof y == "string")
        return (0, e._)`${y}`;
    }
    return (0, e._)`${c}${f}${(0, e.getProperty)(C)}`;
  }
  ie.schemaRefOrVal = a;
  function l(c) {
    return S(decodeURIComponent(c));
  }
  ie.unescapeFragment = l;
  function p(c) {
    return encodeURIComponent(h(c));
  }
  ie.escapeFragment = p;
  function h(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ie.escapeJsonPointer = h;
  function S(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ie.unescapeJsonPointer = S;
  function b(c, f) {
    if (Array.isArray(c))
      for (const y of c)
        f(y);
    else
      f(c);
  }
  ie.eachItem = b;
  function w({ mergeNames: c, mergeToName: f, mergeValues: y, resultToName: C }) {
    return (P, T, z, F) => {
      const q = z === void 0 ? T : z instanceof e.Name ? (T instanceof e.Name ? c(P, T, z) : f(P, T, z), z) : T instanceof e.Name ? (f(P, z, T), T) : y(T, z);
      return F === e.Name && !(q instanceof e.Name) ? C(P, q) : q;
    };
  }
  ie.mergeEvaluated = {
    props: w({
      mergeNames: (c, f, y) => c.if((0, e._)`${y} !== true && ${f} !== undefined`, () => {
        c.if((0, e._)`${f} === true`, () => c.assign(y, !0), () => c.assign(y, (0, e._)`${y} || {}`).code((0, e._)`Object.assign(${y}, ${f})`));
      }),
      mergeToName: (c, f, y) => c.if((0, e._)`${y} !== true`, () => {
        f === !0 ? c.assign(y, !0) : (c.assign(y, (0, e._)`${y} || {}`), m(c, y, f));
      }),
      mergeValues: (c, f) => c === !0 ? !0 : { ...c, ...f },
      resultToName: $
    }),
    items: w({
      mergeNames: (c, f, y) => c.if((0, e._)`${y} !== true && ${f} !== undefined`, () => c.assign(y, (0, e._)`${f} === true ? true : ${y} > ${f} ? ${y} : ${f}`)),
      mergeToName: (c, f, y) => c.if((0, e._)`${y} !== true`, () => c.assign(y, f === !0 ? !0 : (0, e._)`${y} > ${f} ? ${y} : ${f}`)),
      mergeValues: (c, f) => c === !0 ? !0 : Math.max(c, f),
      resultToName: (c, f) => c.var("items", f)
    })
  };
  function $(c, f) {
    if (f === !0)
      return c.var("props", !0);
    const y = c.var("props", (0, e._)`{}`);
    return f !== void 0 && m(c, y, f), y;
  }
  ie.evaluatedPropsToName = $;
  function m(c, f, y) {
    Object.keys(y).forEach((C) => c.assign((0, e._)`${f}${(0, e.getProperty)(C)}`, !0));
  }
  ie.setEvaluated = m;
  const u = {};
  function g(c, f) {
    return c.scopeValue("func", {
      ref: f,
      code: u[f.code] || (u[f.code] = new t._Code(f.code))
    });
  }
  ie.useFunc = g;
  var d;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(d || (ie.Type = d = {}));
  function k(c, f, y) {
    if (c instanceof e.Name) {
      const C = f === d.Num;
      return y ? C ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : C ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return y ? (0, e.getProperty)(c).toString() : "/" + h(c);
  }
  ie.getErrorPath = k;
  function v(c, f, y = c.opts.strictSchema) {
    if (y) {
      if (f = `strict mode: ${f}`, y === !0)
        throw new Error(f);
      c.self.logger.warn(f);
    }
  }
  return ie.checkStrictMode = v, ie;
}
var Dt = {}, uo;
function Oe() {
  if (uo) return Dt;
  uo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
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
  return Dt.default = t, Dt;
}
var fo;
function Gn() {
  return fo || (fo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Oe();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: g }) => g ? (0, t.str)`"${u}" keyword must be ${g} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function o(u, g = e.keywordError, d, k) {
      const { it: v } = u, { gen: c, compositeRule: f, allErrors: y } = v, C = S(u, g, d);
      k ?? (f || y) ? l(c, C) : p(v, (0, t._)`[${C}]`);
    }
    e.reportError = o;
    function s(u, g = e.keywordError, d) {
      const { it: k } = u, { gen: v, compositeRule: c, allErrors: f } = k, y = S(u, g, d);
      l(v, y), c || f || p(k, r.default.vErrors);
    }
    e.reportExtraError = s;
    function i(u, g) {
      u.assign(r.default.errors, g), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(g, () => u.assign((0, t._)`${r.default.vErrors}.length`, g), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: u, keyword: g, schemaValue: d, data: k, errsCount: v, it: c }) {
      if (v === void 0)
        throw new Error("ajv implementation error");
      const f = u.name("err");
      u.forRange("i", v, r.default.errors, (y) => {
        u.const(f, (0, t._)`${r.default.vErrors}[${y}]`), u.if((0, t._)`${f}.instancePath === undefined`, () => u.assign((0, t._)`${f}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), u.assign((0, t._)`${f}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${g}`), c.opts.verbose && (u.assign((0, t._)`${f}.schema`, d), u.assign((0, t._)`${f}.data`, k));
      });
    }
    e.extendErrors = a;
    function l(u, g) {
      const d = u.const("err", g);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${r.default.vErrors}.push(${d})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function p(u, g) {
      const { gen: d, validateName: k, schemaEnv: v } = u;
      v.$async ? d.throw((0, t._)`new ${u.ValidationError}(${g})`) : (d.assign((0, t._)`${k}.errors`, g), d.return(!1));
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
    function S(u, g, d) {
      const { createErrors: k } = u.it;
      return k === !1 ? (0, t._)`{}` : b(u, g, d);
    }
    function b(u, g, d = {}) {
      const { gen: k, it: v } = u, c = [
        w(v, d),
        $(u, d)
      ];
      return m(u, g, c), k.object(...c);
    }
    function w({ errorPath: u }, { instancePath: g }) {
      const d = g ? (0, t.str)`${u}${(0, n.getErrorPath)(g, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, d)];
    }
    function $({ keyword: u, it: { errSchemaPath: g } }, { schemaPath: d, parentSchema: k }) {
      let v = k ? g : (0, t.str)`${g}/${u}`;
      return d && (v = (0, t.str)`${v}${(0, n.getErrorPath)(d, n.Type.Str)}`), [h.schemaPath, v];
    }
    function m(u, { params: g, message: d }, k) {
      const { keyword: v, data: c, schemaValue: f, it: y } = u, { opts: C, propertyName: P, topSchemaRef: T, schemaPath: z } = y;
      k.push([h.keyword, v], [h.params, typeof g == "function" ? g(u) : g || (0, t._)`{}`]), C.messages && k.push([h.message, typeof d == "function" ? d(u) : d]), C.verbose && k.push([h.schema, f], [h.parentSchema, (0, t._)`${T}${z}`], [r.default.data, c]), P && k.push([h.propertyName, P]);
    }
  })(rr)), rr;
}
var po;
function za() {
  if (po) return tt;
  po = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.boolOrEmptySchema = tt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Gn(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Oe(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: l, schema: p, validateName: h } = a;
    p === !1 ? i(a, !1) : typeof p == "object" && p.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${h}.errors`, null), l.return(!0));
  }
  tt.topBoolOrEmptySchema = o;
  function s(a, l) {
    const { gen: p, schema: h } = a;
    h === !1 ? (p.var(l, !1), i(a)) : p.var(l, !0);
  }
  tt.boolOrEmptySchema = s;
  function i(a, l) {
    const { gen: p, data: h } = a, S = {
      gen: p,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(S, r, void 0, l);
  }
  return tt;
}
var ge = {}, nt = {}, ho;
function _i() {
  if (ho) return nt;
  ho = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.getRules = nt.isJSONType = void 0;
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
var De = {}, mo;
function Si() {
  if (mo) return De;
  mo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.shouldUseRule = De.shouldUseGroup = De.schemaHasRulesForType = void 0;
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
var go;
function Ln() {
  if (go) return ge;
  go = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ _i(), t = /* @__PURE__ */ Si(), n = /* @__PURE__ */ Gn(), r = /* @__PURE__ */ se(), o = /* @__PURE__ */ ae();
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
  function l(d, k) {
    const { gen: v, data: c, opts: f } = d, y = h(k, f.coerceTypes), C = k.length > 0 && !(y.length === 0 && k.length === 1 && (0, t.schemaHasRulesForType)(d, k[0]));
    if (C) {
      const P = $(k, c, f.strictNumbers, s.Wrong);
      v.if(P, () => {
        y.length ? S(d, k, y) : u(d);
      });
    }
    return C;
  }
  ge.coerceAndCheckDataType = l;
  const p = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(d, k) {
    return k ? d.filter((v) => p.has(v) || k === "array" && v === "array") : [];
  }
  function S(d, k, v) {
    const { gen: c, data: f, opts: y } = d, C = c.let("dataType", (0, r._)`typeof ${f}`), P = c.let("coerced", (0, r._)`undefined`);
    y.coerceTypes === "array" && c.if((0, r._)`${C} == 'object' && Array.isArray(${f}) && ${f}.length == 1`, () => c.assign(f, (0, r._)`${f}[0]`).assign(C, (0, r._)`typeof ${f}`).if($(k, f, y.strictNumbers), () => c.assign(P, f))), c.if((0, r._)`${P} !== undefined`);
    for (const z of v)
      (p.has(z) || z === "array" && y.coerceTypes === "array") && T(z);
    c.else(), u(d), c.endIf(), c.if((0, r._)`${P} !== undefined`, () => {
      c.assign(f, P), b(d, P);
    });
    function T(z) {
      switch (z) {
        case "string":
          c.elseIf((0, r._)`${C} == "number" || ${C} == "boolean"`).assign(P, (0, r._)`"" + ${f}`).elseIf((0, r._)`${f} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${C} == "boolean" || ${f} === null
              || (${C} == "string" && ${f} && ${f} == +${f})`).assign(P, (0, r._)`+${f}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${C} === "boolean" || ${f} === null
              || (${C} === "string" && ${f} && ${f} == +${f} && !(${f} % 1))`).assign(P, (0, r._)`+${f}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${f} === "false" || ${f} === 0 || ${f} === null`).assign(P, !1).elseIf((0, r._)`${f} === "true" || ${f} === 1`).assign(P, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${f} === "" || ${f} === 0 || ${f} === false`), c.assign(P, null);
          return;
        case "array":
          c.elseIf((0, r._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${f} === null`).assign(P, (0, r._)`[${f}]`);
      }
    }
  }
  function b({ gen: d, parentData: k, parentDataProperty: v }, c) {
    d.if((0, r._)`${k} !== undefined`, () => d.assign((0, r._)`${k}[${v}]`, c));
  }
  function w(d, k, v, c = s.Correct) {
    const f = c === s.Correct ? r.operators.EQ : r.operators.NEQ;
    let y;
    switch (d) {
      case "null":
        return (0, r._)`${k} ${f} null`;
      case "array":
        y = (0, r._)`Array.isArray(${k})`;
        break;
      case "object":
        y = (0, r._)`${k} && typeof ${k} == "object" && !Array.isArray(${k})`;
        break;
      case "integer":
        y = C((0, r._)`!(${k} % 1) && !isNaN(${k})`);
        break;
      case "number":
        y = C();
        break;
      default:
        return (0, r._)`typeof ${k} ${f} ${d}`;
    }
    return c === s.Correct ? y : (0, r.not)(y);
    function C(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${k} == "number"`, P, v ? (0, r._)`isFinite(${k})` : r.nil);
    }
  }
  ge.checkDataType = w;
  function $(d, k, v, c) {
    if (d.length === 1)
      return w(d[0], k, v, c);
    let f;
    const y = (0, o.toHash)(d);
    if (y.array && y.object) {
      const C = (0, r._)`typeof ${k} != "object"`;
      f = y.null ? C : (0, r._)`!${k} || ${C}`, delete y.null, delete y.array, delete y.object;
    } else
      f = r.nil;
    y.number && delete y.integer;
    for (const C in y)
      f = (0, r.and)(f, w(C, k, v, c));
    return f;
  }
  ge.checkDataTypes = $;
  const m = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: k }) => typeof d == "string" ? (0, r._)`{type: ${d}}` : (0, r._)`{type: ${k}}`
  };
  function u(d) {
    const k = g(d);
    (0, n.reportError)(k, m);
  }
  ge.reportTypeError = u;
  function g(d) {
    const { gen: k, data: v, schema: c } = d, f = (0, o.schemaRefOrVal)(d, c, "type");
    return {
      gen: k,
      keyword: "type",
      data: v,
      schema: c.type,
      schemaCode: f,
      schemaValue: f,
      parentSchema: c,
      params: {},
      it: d
    };
  }
  return ge;
}
var Ct = {}, yo;
function Ia() {
  if (yo) return Ct;
  yo = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.assignDefaults = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae();
  function n(o, s) {
    const { properties: i, items: a } = o.schema;
    if (s === "object" && i)
      for (const l in i)
        r(o, l, i[l].default);
    else s === "array" && Array.isArray(a) && a.forEach((l, p) => r(o, p, l.default));
  }
  Ct.assignDefaults = n;
  function r(o, s, i) {
    const { gen: a, compositeRule: l, data: p, opts: h } = o;
    if (i === void 0)
      return;
    const S = (0, e._)`${p}${(0, e.getProperty)(s)}`;
    if (l) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${S}`);
      return;
    }
    let b = (0, e._)`${S} === undefined`;
    h.useDefaults === "empty" && (b = (0, e._)`${b} || ${S} === null || ${S} === ""`), a.if(b, (0, e._)`${S} = ${(0, e.stringify)(i)}`);
  }
  return Ct;
}
var xe = {}, de = {}, $o;
function Te() {
  if ($o) return de;
  $o = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ae();
  function o(d, k) {
    const { gen: v, data: c, it: f } = d;
    v.if(h(v, c, k, f.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${k}` }, !0), d.error();
    });
  }
  de.checkReportMissingProp = o;
  function s({ gen: d, data: k, it: { opts: v } }, c, f) {
    return (0, e.or)(...c.map((y) => (0, e.and)(h(d, k, y, v.ownProperties), (0, e._)`${f} = ${y}`)));
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
  function l(d, k, v) {
    return (0, e._)`${a(d)}.call(${k}, ${v})`;
  }
  de.isOwnProperty = l;
  function p(d, k, v, c) {
    const f = (0, e._)`${k}${(0, e.getProperty)(v)} !== undefined`;
    return c ? (0, e._)`${f} && ${l(d, k, v)}` : f;
  }
  de.propertyInData = p;
  function h(d, k, v, c) {
    const f = (0, e._)`${k}${(0, e.getProperty)(v)} === undefined`;
    return c ? (0, e.or)(f, (0, e.not)(l(d, k, v))) : f;
  }
  de.noPropertyInData = h;
  function S(d) {
    return d ? Object.keys(d).filter((k) => k !== "__proto__") : [];
  }
  de.allSchemaProperties = S;
  function b(d, k) {
    return S(k).filter((v) => !(0, t.alwaysValidSchema)(d, k[v]));
  }
  de.schemaProperties = b;
  function w({ schemaCode: d, data: k, it: { gen: v, topSchemaRef: c, schemaPath: f, errorPath: y }, it: C }, P, T, z) {
    const F = z ? (0, e._)`${d}, ${k}, ${c}${f}` : k, q = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, y)],
      [n.default.parentData, C.parentData],
      [n.default.parentDataProperty, C.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    C.opts.dynamicRef && q.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const O = (0, e._)`${F}, ${v.object(...q)}`;
    return T !== e.nil ? (0, e._)`${P}.call(${T}, ${O})` : (0, e._)`${P}(${O})`;
  }
  de.callValidateCode = w;
  const $ = (0, e._)`new RegExp`;
  function m({ gen: d, it: { opts: k } }, v) {
    const c = k.unicodeRegExp ? "u" : "", { regExp: f } = k.code, y = f(v, c);
    return d.scopeValue("pattern", {
      key: y.toString(),
      ref: y,
      code: (0, e._)`${f.code === "new RegExp" ? $ : (0, r.useFunc)(d, f)}(${v}, ${c})`
    });
  }
  de.usePattern = m;
  function u(d) {
    const { gen: k, data: v, keyword: c, it: f } = d, y = k.name("valid");
    if (f.allErrors) {
      const P = k.let("valid", !0);
      return C(() => k.assign(P, !1)), P;
    }
    return k.var(y, !0), C(() => k.break()), y;
    function C(P) {
      const T = k.const("len", (0, e._)`${v}.length`);
      k.forRange("i", 0, T, (z) => {
        d.subschema({
          keyword: c,
          dataProp: z,
          dataPropType: t.Type.Num
        }, y), k.if((0, e.not)(y), P);
      });
    }
  }
  de.validateArray = u;
  function g(d) {
    const { gen: k, schema: v, keyword: c, it: f } = d;
    if (!Array.isArray(v))
      throw new Error("ajv implementation error");
    if (v.some((T) => (0, t.alwaysValidSchema)(f, T)) && !f.opts.unevaluated)
      return;
    const C = k.let("valid", !1), P = k.name("_valid");
    k.block(() => v.forEach((T, z) => {
      const F = d.subschema({
        keyword: c,
        schemaProp: z,
        compositeRule: !0
      }, P);
      k.assign(C, (0, e._)`${C} || ${P}`), d.mergeValidEvaluated(F, P) || k.if((0, e.not)(C));
    })), d.result(C, () => d.reset(), () => d.error(!0));
  }
  return de.validateUnion = g, de;
}
var vo;
function Da() {
  if (vo) return xe;
  vo = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.validateKeywordUsage = xe.validSchemaType = xe.funcKeywordCode = xe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Te(), r = /* @__PURE__ */ Gn();
  function o(b, w) {
    const { gen: $, keyword: m, schema: u, parentSchema: g, it: d } = b, k = w.macro.call(d.self, u, g, d), v = p($, m, k);
    d.opts.validateSchema !== !1 && d.self.validateSchema(k, !0);
    const c = $.name("valid");
    b.subschema({
      schema: k,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${m}`,
      topSchemaRef: v,
      compositeRule: !0
    }, c), b.pass(c, () => b.error(!0));
  }
  xe.macroKeywordCode = o;
  function s(b, w) {
    var $;
    const { gen: m, keyword: u, schema: g, parentSchema: d, $data: k, it: v } = b;
    l(v, w);
    const c = !k && w.compile ? w.compile.call(v.self, g, d, v) : w.validate, f = p(m, u, c), y = m.let("valid");
    b.block$data(y, C), b.ok(($ = w.valid) !== null && $ !== void 0 ? $ : y);
    function C() {
      if (w.errors === !1)
        z(), w.modifying && i(b), F(() => b.error());
      else {
        const q = w.async ? P() : T();
        w.modifying && i(b), F(() => a(b, q));
      }
    }
    function P() {
      const q = m.let("ruleErrs", null);
      return m.try(() => z((0, e._)`await `), (O) => m.assign(y, !1).if((0, e._)`${O} instanceof ${v.ValidationError}`, () => m.assign(q, (0, e._)`${O}.errors`), () => m.throw(O))), q;
    }
    function T() {
      const q = (0, e._)`${f}.errors`;
      return m.assign(q, null), z(e.nil), q;
    }
    function z(q = w.async ? (0, e._)`await ` : e.nil) {
      const O = v.opts.passContext ? t.default.this : t.default.self, G = !("compile" in w && !k || w.schema === !1);
      m.assign(y, (0, e._)`${q}${(0, n.callValidateCode)(b, f, O, G)}`, w.modifying);
    }
    function F(q) {
      var O;
      m.if((0, e.not)((O = w.valid) !== null && O !== void 0 ? O : y), q);
    }
  }
  xe.funcKeywordCode = s;
  function i(b) {
    const { gen: w, data: $, it: m } = b;
    w.if(m.parentData, () => w.assign($, (0, e._)`${m.parentData}[${m.parentDataProperty}]`));
  }
  function a(b, w) {
    const { gen: $ } = b;
    $.if((0, e._)`Array.isArray(${w})`, () => {
      $.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${w} : ${t.default.vErrors}.concat(${w})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(b);
    }, () => b.error());
  }
  function l({ schemaEnv: b }, w) {
    if (w.async && !b.$async)
      throw new Error("async keyword in sync schema");
  }
  function p(b, w, $) {
    if ($ === void 0)
      throw new Error(`keyword "${w}" failed to compile`);
    return b.scopeValue("keyword", typeof $ == "function" ? { ref: $ } : { ref: $, code: (0, e.stringify)($) });
  }
  function h(b, w, $ = !1) {
    return !w.length || w.some((m) => m === "array" ? Array.isArray(b) : m === "object" ? b && typeof b == "object" && !Array.isArray(b) : typeof b == m || $ && typeof b > "u");
  }
  xe.validSchemaType = h;
  function S({ schema: b, opts: w, self: $, errSchemaPath: m }, u, g) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(g) : u.keyword !== g)
      throw new Error("ajv implementation error");
    const d = u.dependencies;
    if (d?.some((k) => !Object.prototype.hasOwnProperty.call(b, k)))
      throw new Error(`parent schema must have dependencies of ${g}: ${d.join(",")}`);
    if (u.validateSchema && !u.validateSchema(b[g])) {
      const v = `keyword "${g}" value is invalid at path "${m}": ` + $.errorsText(u.validateSchema.errors);
      if (w.validateSchema === "log")
        $.logger.error(v);
      else
        throw new Error(v);
    }
  }
  return xe.validateKeywordUsage = S, xe;
}
var Le = {}, bo;
function La() {
  if (bo) return Le;
  bo = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.extendSubschemaMode = Le.extendSubschemaData = Le.getSubschema = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae();
  function n(s, { keyword: i, schemaProp: a, schema: l, schemaPath: p, errSchemaPath: h, topSchemaRef: S }) {
    if (i !== void 0 && l !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const b = s.schema[i];
      return a === void 0 ? {
        schema: b,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}`
      } : {
        schema: b[a],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (l !== void 0) {
      if (p === void 0 || h === void 0 || S === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: p,
        topSchemaRef: S,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Le.getSubschema = n;
  function r(s, i, { dataProp: a, dataPropType: l, data: p, dataTypes: h, propertyName: S }) {
    if (p !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: b } = i;
    if (a !== void 0) {
      const { errorPath: $, dataPathArr: m, opts: u } = i, g = b.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      w(g), s.errorPath = (0, e.str)`${$}${(0, t.getErrorPath)(a, l, u.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${a}`, s.dataPathArr = [...m, s.parentDataProperty];
    }
    if (p !== void 0) {
      const $ = p instanceof e.Name ? p : b.let("data", p, !0);
      w($), S !== void 0 && (s.propertyName = S);
    }
    h && (s.dataTypes = h);
    function w($) {
      s.data = $, s.dataLevel = i.dataLevel + 1, s.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), s.parentData = i.data, s.dataNames = [...i.dataNames, $];
    }
  }
  Le.extendSubschemaData = r;
  function o(s, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: l, createErrors: p, allErrors: h }) {
    l !== void 0 && (s.compositeRule = l), p !== void 0 && (s.createErrors = p), h !== void 0 && (s.allErrors = h), s.jtdDiscriminator = i, s.jtdMetadata = a;
  }
  return Le.extendSubschemaMode = o, Le;
}
var ve = {}, ar, wo;
function ki() {
  return wo || (wo = 1, ar = function e(t, n) {
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
  }), ar;
}
var cr = { exports: {} }, _o;
function qa() {
  if (_o) return cr.exports;
  _o = 1;
  var e = cr.exports = function(r, o, s) {
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
  function t(r, o, s, i, a, l, p, h, S, b) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      o(i, a, l, p, h, S, b);
      for (var w in i) {
        var $ = i[w];
        if (Array.isArray($)) {
          if (w in e.arrayKeywords)
            for (var m = 0; m < $.length; m++)
              t(r, o, s, $[m], a + "/" + w + "/" + m, l, a, w, i, m);
        } else if (w in e.propsKeywords) {
          if ($ && typeof $ == "object")
            for (var u in $)
              t(r, o, s, $[u], a + "/" + w + "/" + n(u), l, a, w, i, u);
        } else (w in e.keywords || r.allKeys && !(w in e.skipKeywords)) && t(r, o, s, $, a + "/" + w, l, a, w, i);
      }
      s(i, a, l, p, h, S, b);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return cr.exports;
}
var So;
function Wn() {
  if (So) return ve;
  So = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.getSchemaRefs = ve.resolveUrl = ve.normalizeId = ve._getFullPath = ve.getFullPath = ve.inlineRef = void 0;
  const e = /* @__PURE__ */ ae(), t = ki(), n = qa(), r = /* @__PURE__ */ new Set([
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
  function o(m, u = !0) {
    return typeof m == "boolean" ? !0 : u === !0 ? !i(m) : u ? a(m) <= u : !1;
  }
  ve.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(m) {
    for (const u in m) {
      if (s.has(u))
        return !0;
      const g = m[u];
      if (Array.isArray(g) && g.some(i) || typeof g == "object" && i(g))
        return !0;
    }
    return !1;
  }
  function a(m) {
    let u = 0;
    for (const g in m) {
      if (g === "$ref")
        return 1 / 0;
      if (u++, !r.has(g) && (typeof m[g] == "object" && (0, e.eachItem)(m[g], (d) => u += a(d)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function l(m, u = "", g) {
    g !== !1 && (u = S(u));
    const d = m.parse(u);
    return p(m, d);
  }
  ve.getFullPath = l;
  function p(m, u) {
    return m.serialize(u).split("#")[0] + "#";
  }
  ve._getFullPath = p;
  const h = /#\/?$/;
  function S(m) {
    return m ? m.replace(h, "") : "";
  }
  ve.normalizeId = S;
  function b(m, u, g) {
    return g = S(g), m.resolve(u, g);
  }
  ve.resolveUrl = b;
  const w = /^[a-z_][-a-z0-9._]*$/i;
  function $(m, u) {
    if (typeof m == "boolean")
      return {};
    const { schemaId: g, uriResolver: d } = this.opts, k = S(m[g] || u), v = { "": k }, c = l(d, k, !1), f = {}, y = /* @__PURE__ */ new Set();
    return n(m, { allKeys: !0 }, (T, z, F, q) => {
      if (q === void 0)
        return;
      const O = c + z;
      let G = v[q];
      typeof T[g] == "string" && (G = Y.call(this, T[g])), re.call(this, T.$anchor), re.call(this, T.$dynamicAnchor), v[z] = G;
      function Y(X) {
        const W = this.opts.uriResolver.resolve;
        if (X = S(G ? W(G, X) : X), y.has(X))
          throw P(X);
        y.add(X);
        let L = this.refs[X];
        return typeof L == "string" && (L = this.refs[L]), typeof L == "object" ? C(T, L.schema, X) : X !== S(O) && (X[0] === "#" ? (C(T, f[X], X), f[X] = T) : this.refs[X] = O), X;
      }
      function re(X) {
        if (typeof X == "string") {
          if (!w.test(X))
            throw new Error(`invalid anchor "${X}"`);
          Y.call(this, `#${X}`);
        }
      }
    }), f;
    function C(T, z, F) {
      if (z !== void 0 && !t(T, z))
        throw P(F);
    }
    function P(T) {
      return new Error(`reference "${T}" resolves to more than one schema`);
    }
  }
  return ve.getSchemaRefs = $, ve;
}
var ko;
function Jn() {
  if (ko) return Ie;
  ko = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getData = Ie.KeywordCxt = Ie.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ za(), t = /* @__PURE__ */ Ln(), n = /* @__PURE__ */ Si(), r = /* @__PURE__ */ Ln(), o = /* @__PURE__ */ Ia(), s = /* @__PURE__ */ Da(), i = /* @__PURE__ */ La(), a = /* @__PURE__ */ se(), l = /* @__PURE__ */ Oe(), p = /* @__PURE__ */ Wn(), h = /* @__PURE__ */ ae(), S = /* @__PURE__ */ Gn();
  function b(x) {
    if (c(x) && (y(x), v(x))) {
      u(x);
      return;
    }
    w(x, () => (0, e.topBoolOrEmptySchema)(x));
  }
  Ie.validateFunctionCode = b;
  function w({ gen: x, validateName: N, schema: B, schemaEnv: J, opts: K }, Q) {
    K.code.es5 ? x.func(N, (0, a._)`${l.default.data}, ${l.default.valCxt}`, J.$async, () => {
      x.code((0, a._)`"use strict"; ${d(B, K)}`), m(x, K), x.code(Q);
    }) : x.func(N, (0, a._)`${l.default.data}, ${$(K)}`, J.$async, () => x.code(d(B, K)).code(Q));
  }
  function $(x) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${x.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function m(x, N) {
    x.if(l.default.valCxt, () => {
      x.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), x.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), x.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), x.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), N.dynamicRef && x.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      x.var(l.default.instancePath, (0, a._)`""`), x.var(l.default.parentData, (0, a._)`undefined`), x.var(l.default.parentDataProperty, (0, a._)`undefined`), x.var(l.default.rootData, l.default.data), N.dynamicRef && x.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(x) {
    const { schema: N, opts: B, gen: J } = x;
    w(x, () => {
      B.$comment && N.$comment && q(x), T(x), J.let(l.default.vErrors, null), J.let(l.default.errors, 0), B.unevaluated && g(x), C(x), O(x);
    });
  }
  function g(x) {
    const { gen: N, validateName: B } = x;
    x.evaluated = N.const("evaluated", (0, a._)`${B}.evaluated`), N.if((0, a._)`${x.evaluated}.dynamicProps`, () => N.assign((0, a._)`${x.evaluated}.props`, (0, a._)`undefined`)), N.if((0, a._)`${x.evaluated}.dynamicItems`, () => N.assign((0, a._)`${x.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(x, N) {
    const B = typeof x == "object" && x[N.schemaId];
    return B && (N.code.source || N.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function k(x, N) {
    if (c(x) && (y(x), v(x))) {
      f(x, N);
      return;
    }
    (0, e.boolOrEmptySchema)(x, N);
  }
  function v({ schema: x, self: N }) {
    if (typeof x == "boolean")
      return !x;
    for (const B in x)
      if (N.RULES.all[B])
        return !0;
    return !1;
  }
  function c(x) {
    return typeof x.schema != "boolean";
  }
  function f(x, N) {
    const { schema: B, gen: J, opts: K } = x;
    K.$comment && B.$comment && q(x), z(x), F(x);
    const Q = J.const("_errs", l.default.errors);
    C(x, Q), J.var(N, (0, a._)`${Q} === ${l.default.errors}`);
  }
  function y(x) {
    (0, h.checkUnknownRules)(x), P(x);
  }
  function C(x, N) {
    if (x.opts.jtd)
      return Y(x, [], !1, N);
    const B = (0, t.getSchemaTypes)(x.schema), J = (0, t.coerceAndCheckDataType)(x, B);
    Y(x, B, !J, N);
  }
  function P(x) {
    const { schema: N, errSchemaPath: B, opts: J, self: K } = x;
    N.$ref && J.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(N, K.RULES) && K.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function T(x) {
    const { schema: N, opts: B } = x;
    N.default !== void 0 && B.useDefaults && B.strictSchema && (0, h.checkStrictMode)(x, "default is ignored in the schema root");
  }
  function z(x) {
    const N = x.schema[x.opts.schemaId];
    N && (x.baseId = (0, p.resolveUrl)(x.opts.uriResolver, x.baseId, N));
  }
  function F(x) {
    if (x.schema.$async && !x.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function q({ gen: x, schemaEnv: N, schema: B, errSchemaPath: J, opts: K }) {
    const Q = B.$comment;
    if (K.$comment === !0)
      x.code((0, a._)`${l.default.self}.logger.log(${Q})`);
    else if (typeof K.$comment == "function") {
      const te = (0, a.str)`${J}/$comment`, ue = x.scopeValue("root", { ref: N.root });
      x.code((0, a._)`${l.default.self}.opts.$comment(${Q}, ${te}, ${ue}.schema)`);
    }
  }
  function O(x) {
    const { gen: N, schemaEnv: B, validateName: J, ValidationError: K, opts: Q } = x;
    B.$async ? N.if((0, a._)`${l.default.errors} === 0`, () => N.return(l.default.data), () => N.throw((0, a._)`new ${K}(${l.default.vErrors})`)) : (N.assign((0, a._)`${J}.errors`, l.default.vErrors), Q.unevaluated && G(x), N.return((0, a._)`${l.default.errors} === 0`));
  }
  function G({ gen: x, evaluated: N, props: B, items: J }) {
    B instanceof a.Name && x.assign((0, a._)`${N}.props`, B), J instanceof a.Name && x.assign((0, a._)`${N}.items`, J);
  }
  function Y(x, N, B, J) {
    const { gen: K, schema: Q, data: te, allErrors: ue, opts: le, self: me } = x, { RULES: pe } = me;
    if (Q.$ref && (le.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(Q, pe))) {
      K.block(() => V(x, "$ref", pe.all.$ref.definition));
      return;
    }
    le.jtd || X(x, N), K.block(() => {
      for (const $e of pe.rules)
        je($e);
      je(pe.post);
    });
    function je($e) {
      (0, n.shouldUseGroup)(Q, $e) && ($e.type ? (K.if((0, r.checkDataType)($e.type, te, le.strictNumbers)), re(x, $e), N.length === 1 && N[0] === $e.type && B && (K.else(), (0, r.reportTypeError)(x)), K.endIf()) : re(x, $e), ue || K.if((0, a._)`${l.default.errors} === ${J || 0}`));
    }
  }
  function re(x, N) {
    const { gen: B, schema: J, opts: { useDefaults: K } } = x;
    K && (0, o.assignDefaults)(x, N.type), B.block(() => {
      for (const Q of N.rules)
        (0, n.shouldUseRule)(J, Q) && V(x, Q.keyword, Q.definition, N.type);
    });
  }
  function X(x, N) {
    x.schemaEnv.meta || !x.opts.strictTypes || (W(x, N), x.opts.allowUnionTypes || L(x, N), A(x, x.dataTypes));
  }
  function W(x, N) {
    if (N.length) {
      if (!x.dataTypes.length) {
        x.dataTypes = N;
        return;
      }
      N.forEach((B) => {
        R(x.dataTypes, B) || E(x, `type "${B}" not allowed by context "${x.dataTypes.join(",")}"`);
      }), _(x, N);
    }
  }
  function L(x, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && E(x, "use allowUnionTypes to allow union type keyword");
  }
  function A(x, N) {
    const B = x.self.RULES.all;
    for (const J in B) {
      const K = B[J];
      if (typeof K == "object" && (0, n.shouldUseRule)(x.schema, K)) {
        const { type: Q } = K.definition;
        Q.length && !Q.some((te) => D(N, te)) && E(x, `missing type "${Q.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function D(x, N) {
    return x.includes(N) || N === "number" && x.includes("integer");
  }
  function R(x, N) {
    return x.includes(N) || N === "integer" && x.includes("number");
  }
  function _(x, N) {
    const B = [];
    for (const J of x.dataTypes)
      R(N, J) ? B.push(J) : N.includes("integer") && J === "number" && B.push("integer");
    x.dataTypes = B;
  }
  function E(x, N) {
    const B = x.schemaEnv.baseId + x.errSchemaPath;
    N += ` at "${B}" (strictTypes)`, (0, h.checkStrictMode)(x, N, x.opts.strictTypes);
  }
  class I {
    constructor(N, B, J) {
      if ((0, s.validateKeywordUsage)(N, B, J), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = J, this.data = N.data, this.schema = N.schema[J], this.$data = B.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(N, this.schema, J, this.$data), this.schemaType = B.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = B, this.$data)
        this.schemaCode = N.gen.const("vSchema", ee(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${J} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = N.gen.const("_errs", l.default.errors));
    }
    result(N, B, J) {
      this.failResult((0, a.not)(N), B, J);
    }
    failResult(N, B, J) {
      this.gen.if(N), J ? J() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, B) {
      this.failResult((0, a.not)(N), void 0, B);
    }
    fail(N) {
      if (N === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(N), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(N) {
      if (!this.$data)
        return this.fail(N);
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), N)})`);
    }
    error(N, B, J) {
      if (B) {
        this.setParams(B), this._error(N, J), this.setParams({});
        return;
      }
      this._error(N, J);
    }
    _error(N, B) {
      (N ? S.reportExtraError : S.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, S.reportError)(this, this.def.$dataError || S.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, S.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      this.allErrors || this.gen.if(N);
    }
    setParams(N, B) {
      B ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, B, J = a.nil) {
      this.gen.block(() => {
        this.check$data(N, J), B();
      });
    }
    check$data(N = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: J, schemaCode: K, schemaType: Q, def: te } = this;
      J.if((0, a.or)((0, a._)`${K} === undefined`, B)), N !== a.nil && J.assign(N, !0), (Q.length || te.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), N !== a.nil && J.assign(N, !1)), J.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: B, schemaType: J, def: K, it: Q } = this;
      return (0, a.or)(te(), ue());
      function te() {
        if (J.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const le = Array.isArray(J) ? J : [J];
          return (0, a._)`${(0, r.checkDataTypes)(le, B, Q.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ue() {
        if (K.validateSchema) {
          const le = N.scopeValue("validate$data", { ref: K.validateSchema });
          return (0, a._)`!${le}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(N, B) {
      const J = (0, i.getSubschema)(this.it, N);
      (0, i.extendSubschemaData)(J, this.it, N), (0, i.extendSubschemaMode)(J, N);
      const K = { ...this.it, ...J, items: void 0, props: void 0 };
      return k(K, B), K;
    }
    mergeEvaluated(N, B) {
      const { it: J, gen: K } = this;
      J.opts.unevaluated && (J.props !== !0 && N.props !== void 0 && (J.props = h.mergeEvaluated.props(K, N.props, J.props, B)), J.items !== !0 && N.items !== void 0 && (J.items = h.mergeEvaluated.items(K, N.items, J.items, B)));
    }
    mergeValidEvaluated(N, B) {
      const { it: J, gen: K } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return K.if(B, () => this.mergeEvaluated(N, a.Name)), !0;
    }
  }
  Ie.KeywordCxt = I;
  function V(x, N, B, J) {
    const K = new I(x, B, N);
    "code" in B ? B.code(K, J) : K.$data && B.validate ? (0, s.funcKeywordCode)(K, B) : "macro" in B ? (0, s.macroKeywordCode)(K, B) : (B.compile || B.validate) && (0, s.funcKeywordCode)(K, B);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ne = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ee(x, { dataLevel: N, dataNames: B, dataPathArr: J }) {
    let K, Q;
    if (x === "")
      return l.default.rootData;
    if (x[0] === "/") {
      if (!H.test(x))
        throw new Error(`Invalid JSON-pointer: ${x}`);
      K = x, Q = l.default.rootData;
    } else {
      const me = ne.exec(x);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${x}`);
      const pe = +me[1];
      if (K = me[2], K === "#") {
        if (pe >= N)
          throw new Error(le("property/index", pe));
        return J[N - pe];
      }
      if (pe > N)
        throw new Error(le("data", pe));
      if (Q = B[N - pe], !K)
        return Q;
    }
    let te = Q;
    const ue = K.split("/");
    for (const me of ue)
      me && (Q = (0, a._)`${Q}${(0, a.getProperty)((0, h.unescapeJsonPointer)(me))}`, te = (0, a._)`${te} && ${Q}`);
    return te;
    function le(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${N}`;
    }
  }
  return Ie.getData = ee, Ie;
}
var Lt = {}, Co;
function jr() {
  if (Co) return Lt;
  Co = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Lt.default = e, Lt;
}
var qt = {}, Eo;
function Yn() {
  if (Eo) return qt;
  Eo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wn();
  class t extends Error {
    constructor(r, o, s, i) {
      super(i || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return qt.default = t, qt;
}
var be = {}, xo;
function Xn() {
  if (xo) return be;
  xo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.resolveSchema = be.getCompilingSchema = be.resolveRef = be.compileSchema = be.SchemaEnv = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ jr(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Wn(), o = /* @__PURE__ */ ae(), s = /* @__PURE__ */ Jn();
  class i {
    constructor(g) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let k;
      typeof g.schema == "object" && (k = g.schema), this.schema = g.schema, this.schemaId = g.schemaId, this.root = g.root || this, this.baseId = (d = g.baseId) !== null && d !== void 0 ? d : (0, r.normalizeId)(k?.[g.schemaId || "$id"]), this.schemaPath = g.schemaPath, this.localRefs = g.localRefs, this.meta = g.meta, this.$async = k?.$async, this.refs = {};
    }
  }
  be.SchemaEnv = i;
  function a(u) {
    const g = h.call(this, u);
    if (g)
      return g;
    const d = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: k, lines: v } = this.opts.code, { ownProperties: c } = this.opts, f = new e.CodeGen(this.scope, { es5: k, lines: v, ownProperties: c });
    let y;
    u.$async && (y = f.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const C = f.scopeName("validate");
    u.validateName = C;
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
      topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: C,
      ValidationError: y,
      schema: u.schema,
      schemaEnv: u,
      rootId: d,
      baseId: u.baseId || d,
      schemaPath: e.nil,
      errSchemaPath: u.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let T;
    try {
      this._compilations.add(u), (0, s.validateFunctionCode)(P), f.optimize(this.opts.code.optimize);
      const z = f.toString();
      T = `${f.scopeRefs(n.default.scope)}return ${z}`, this.opts.code.process && (T = this.opts.code.process(T, u));
      const q = new Function(`${n.default.self}`, `${n.default.scope}`, T)(this, this.scope.get());
      if (this.scope.value(C, { ref: q }), q.errors = null, q.schema = u.schema, q.schemaEnv = u, u.$async && (q.$async = !0), this.opts.code.source === !0 && (q.source = { validateName: C, validateCode: z, scopeValues: f._values }), this.opts.unevaluated) {
        const { props: O, items: G } = P;
        q.evaluated = {
          props: O instanceof e.Name ? void 0 : O,
          items: G instanceof e.Name ? void 0 : G,
          dynamicProps: O instanceof e.Name,
          dynamicItems: G instanceof e.Name
        }, q.source && (q.source.evaluated = (0, e.stringify)(q.evaluated));
      }
      return u.validate = q, u;
    } catch (z) {
      throw delete u.validate, delete u.validateName, T && this.logger.error("Error compiling schema, function code:", T), z;
    } finally {
      this._compilations.delete(u);
    }
  }
  be.compileSchema = a;
  function l(u, g, d) {
    var k;
    d = (0, r.resolveUrl)(this.opts.uriResolver, g, d);
    const v = u.refs[d];
    if (v)
      return v;
    let c = b.call(this, u, d);
    if (c === void 0) {
      const f = (k = u.localRefs) === null || k === void 0 ? void 0 : k[d], { schemaId: y } = this.opts;
      f && (c = new i({ schema: f, schemaId: y, root: u, baseId: g }));
    }
    if (c !== void 0)
      return u.refs[d] = p.call(this, c);
  }
  be.resolveRef = l;
  function p(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function h(u) {
    for (const g of this._compilations)
      if (S(g, u))
        return g;
  }
  be.getCompilingSchema = h;
  function S(u, g) {
    return u.schema === g.schema && u.root === g.root && u.baseId === g.baseId;
  }
  function b(u, g) {
    let d;
    for (; typeof (d = this.refs[g]) == "string"; )
      g = d;
    return d || this.schemas[g] || w.call(this, u, g);
  }
  function w(u, g) {
    const d = this.opts.uriResolver.parse(g), k = (0, r._getFullPath)(this.opts.uriResolver, d);
    let v = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && k === v)
      return m.call(this, d, u);
    const c = (0, r.normalizeId)(k), f = this.refs[c] || this.schemas[c];
    if (typeof f == "string") {
      const y = w.call(this, u, f);
      return typeof y?.schema != "object" ? void 0 : m.call(this, d, y);
    }
    if (typeof f?.schema == "object") {
      if (f.validate || a.call(this, f), c === (0, r.normalizeId)(g)) {
        const { schema: y } = f, { schemaId: C } = this.opts, P = y[C];
        return P && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, P)), new i({ schema: y, schemaId: C, root: u, baseId: v });
      }
      return m.call(this, d, f);
    }
  }
  be.resolveSchema = w;
  const $ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function m(u, { baseId: g, schema: d, root: k }) {
    var v;
    if (((v = u.fragment) === null || v === void 0 ? void 0 : v[0]) !== "/")
      return;
    for (const y of u.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const C = d[(0, o.unescapeFragment)(y)];
      if (C === void 0)
        return;
      d = C;
      const P = typeof d == "object" && d[this.opts.schemaId];
      !$.has(y) && P && (g = (0, r.resolveUrl)(this.opts.uriResolver, g, P));
    }
    let c;
    if (typeof d != "boolean" && d.$ref && !(0, o.schemaHasRulesButRef)(d, this.RULES)) {
      const y = (0, r.resolveUrl)(this.opts.uriResolver, g, d.$ref);
      c = w.call(this, k, y);
    }
    const { schemaId: f } = this.opts;
    if (c = c || new i({ schema: d, schemaId: f, root: k, baseId: g }), c.schema !== c.root.schema)
      return c;
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
var Vt = {}, Et = { exports: {} }, lr, Po;
function Ci() {
  if (Po) return lr;
  Po = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function s(c) {
    let f = "", y = 0, C = 0;
    for (C = 0; C < c.length; C++)
      if (y = c[C].charCodeAt(0), y !== 48) {
        if (!(y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102))
          return "";
        f += c[C];
        break;
      }
    for (C += 1; C < c.length; C++) {
      if (y = c[C].charCodeAt(0), !(y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102))
        return "";
      f += c[C];
    }
    return f;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, f, y) {
    if (c.length) {
      const C = s(c);
      if (C !== "")
        f.push(C);
      else
        return y.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function p(c) {
    let f = 0;
    const y = { error: !1, address: "", zone: "" }, C = [], P = [];
    let T = !1, z = !1, F = l;
    for (let q = 0; q < c.length; q++) {
      const O = c[q];
      if (!(O === "[" || O === "]"))
        if (O === ":") {
          if (T === !0 && (z = !0), !F(P, C, y))
            break;
          if (++f > 7) {
            y.error = !0;
            break;
          }
          q > 0 && c[q - 1] === ":" && (T = !0), C.push(":");
          continue;
        } else if (O === "%") {
          if (!F(P, C, y))
            break;
          F = a;
        } else {
          P.push(O);
          continue;
        }
    }
    return P.length && (F === a ? y.zone = P.join("") : z ? C.push(P.join("")) : C.push(s(P))), y.address = C.join(""), y;
  }
  function h(c) {
    if (S(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const f = p(c);
    if (f.error)
      return { host: c, isIPV6: !1 };
    {
      let y = f.address, C = f.address;
      return f.zone && (y += "%" + f.zone, C += "%25" + f.zone), { host: y, isIPV6: !0, escapedHost: C };
    }
  }
  function S(c, f) {
    let y = 0;
    for (let C = 0; C < c.length; C++)
      c[C] === f && y++;
    return y;
  }
  function b(c) {
    let f = c;
    const y = [];
    let C = -1, P = 0;
    for (; P = f.length; ) {
      if (P === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          y.push("/");
          break;
        } else {
          y.push(f);
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
          y.push("/");
          break;
        }
      } else if (P === 3 && f === "/..") {
        y.length !== 0 && y.pop(), y.push("/");
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
          f = f.slice(3), y.length !== 0 && y.pop();
          continue;
        }
      }
      if ((C = f.indexOf("/", 1)) === -1) {
        y.push(f);
        break;
      } else
        y.push(f.slice(0, C)), f = f.slice(C);
    }
    return y.join("");
  }
  const w = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, $ = /[@/?#:]/g, m = /[@/?#]/g;
  function u(c, f) {
    const y = f ? m : $;
    return y.lastIndex = 0, c.replace(y, (C) => w[C]);
  }
  function g(c, f = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let y = "";
    for (let C = 0; C < c.length; C++) {
      if (c[C] === "%" && C + 2 < c.length) {
        const P = c.slice(C + 1, C + 3);
        if (n(P)) {
          const T = P.toUpperCase(), z = String.fromCharCode(parseInt(T, 16));
          f && r(z) ? y += z : y += "%" + T, C += 2;
          continue;
        }
      }
      y += c[C];
    }
    return y;
  }
  function d(c) {
    let f = "";
    for (let y = 0; y < c.length; y++) {
      if (c[y] === "%" && y + 2 < c.length) {
        const C = c.slice(y + 1, y + 3);
        if (n(C)) {
          const P = C.toUpperCase(), T = String.fromCharCode(parseInt(P, 16));
          T !== "." && r(T) ? f += T : f += "%" + P, y += 2;
          continue;
        }
      }
      o(c[y]) ? f += c[y] : f += escape(c[y]);
    }
    return f;
  }
  function k(c) {
    let f = "";
    for (let y = 0; y < c.length; y++) {
      if (c[y] === "%" && y + 2 < c.length) {
        const C = c.slice(y + 1, y + 3);
        if (n(C)) {
          f += "%" + C.toUpperCase(), y += 2;
          continue;
        }
      }
      f += escape(c[y]);
    }
    return f;
  }
  function v(c) {
    const f = [];
    if (c.userinfo !== void 0 && (f.push(c.userinfo), f.push("@")), c.host !== void 0) {
      let y = unescape(c.host);
      if (!t(y)) {
        const C = h(y);
        C.isIPV6 === !0 ? y = `[${C.escapedHost}]` : y = u(y, !1);
      }
      f.push(y);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (f.push(":"), f.push(String(c.port))), f.length ? f.join("") : void 0;
  }
  return lr = {
    nonSimpleDomain: i,
    recomposeAuthority: v,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: g,
    normalizePathEncoding: d,
    escapePreservingEscapes: k,
    removeDotSegments: b,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: s
  }, lr;
}
var dr, Ao;
function Ja() {
  if (Ao) return dr;
  Ao = 1;
  const { isUUID: e } = Ci(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function r(c) {
    return n.indexOf(
      /** @type {*} */
      c
    ) !== -1;
  }
  function o(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function s(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function i(c) {
    const f = String(c.scheme).toLowerCase() === "https";
    return (c.port === (f ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = o(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function l(c) {
    if ((c.port === (o(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [f, y] = c.resourceName.split("?");
      c.path = f && f !== "/" ? f : void 0, c.query = y, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function p(c, f) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const y = c.path.match(t);
    if (y) {
      const C = f.scheme || c.scheme || "urn";
      c.nid = y[1].toLowerCase(), c.nss = y[2];
      const P = `${C}:${f.nid || c.nid}`, T = v(P);
      c.path = void 0, T && (c = T.parse(c, f));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function h(c, f) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const y = f.scheme || c.scheme || "urn", C = c.nid.toLowerCase(), P = `${y}:${f.nid || C}`, T = v(P);
    T && (c = T.serialize(c, f));
    const z = c, F = c.nss;
    return z.path = `${C || f.nid}:${F}`, f.skipEscape = !0, z;
  }
  function S(c, f) {
    const y = c;
    return y.uuid = y.nss, y.nss = void 0, !f.tolerant && (!y.uuid || !e(y.uuid)) && (y.error = y.error || "UUID is not valid."), y;
  }
  function b(c) {
    const f = c;
    return f.nss = (c.uuid || "").toLowerCase(), f;
  }
  const w = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: s,
      serialize: i
    }
  ), $ = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: w.domainHost,
      parse: s,
      serialize: i
    }
  ), m = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: l
    }
  ), u = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: m.domainHost,
      parse: m.parse,
      serialize: m.serialize
    }
  ), k = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: w,
      https: $,
      ws: m,
      wss: u,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: p,
          serialize: h,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: S,
          serialize: b,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(k, null);
  function v(c) {
    return c && (k[
      /** @type {SchemeName} */
      c
    ] || k[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return dr = {
    wsIsSecure: o,
    SCHEMES: k,
    isValidSchemeName: r,
    getSchemeHandler: v
  }, dr;
}
var Ro;
function Ya() {
  if (Ro) return Et.exports;
  Ro = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: s, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: l } = Ci(), { SCHEMES: p, getSchemeHandler: h } = Ja();
  function S(P, T) {
    return typeof P == "string" ? P = /** @type {T} */
    c(P, T) : typeof P == "object" && (P = /** @type {T} */
    v(m(P, T), T)), P;
  }
  function b(P, T, z) {
    const F = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, q = w(v(P, F), v(T, F), F, !0);
    return F.skipEscape = !0, m(q, F);
  }
  function w(P, T, z, F) {
    const q = {};
    return F || (P = v(m(P, z), z), T = v(m(T, z), z)), z = z || {}, !z.tolerant && T.scheme ? (q.scheme = T.scheme, q.userinfo = T.userinfo, q.host = T.host, q.port = T.port, q.path = t(T.path || ""), q.query = T.query) : (T.userinfo !== void 0 || T.host !== void 0 || T.port !== void 0 ? (q.userinfo = T.userinfo, q.host = T.host, q.port = T.port, q.path = t(T.path || ""), q.query = T.query) : (T.path ? (T.path[0] === "/" ? q.path = t(T.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? q.path = "/" + T.path : P.path ? q.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + T.path : q.path = T.path, q.path = t(q.path)), q.query = T.query) : (q.path = P.path, T.query !== void 0 ? q.query = T.query : q.query = P.query), q.userinfo = P.userinfo, q.host = P.host, q.port = P.port), q.scheme = P.scheme), q.fragment = T.fragment, q;
  }
  function $(P, T, z) {
    const F = y(P, z), q = y(T, z);
    return F !== void 0 && q !== void 0 && F.toLowerCase() === q.toLowerCase();
  }
  function m(P, T) {
    const z = {
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
    }, F = Object.assign({}, T), q = [], O = h(F.scheme || z.scheme);
    O && O.serialize && O.serialize(z, F), z.path !== void 0 && (F.skipEscape ? z.path = r(z.path) : (z.path = s(z.path), z.scheme !== void 0 && (z.path = z.path.split("%3A").join(":")))), F.reference !== "suffix" && z.scheme && q.push(z.scheme, ":");
    const G = n(z);
    if (G !== void 0 && (F.reference !== "suffix" && q.push("//"), q.push(G), z.path && z.path[0] !== "/" && q.push("/")), z.path !== void 0) {
      let Y = z.path;
      !F.absolutePath && (!O || !O.absolutePath) && (Y = t(Y)), G === void 0 && Y[0] === "/" && Y[1] === "/" && (Y = "/%2F" + Y.slice(2)), q.push(Y);
    }
    return z.query !== void 0 && q.push("?", z.query), z.fragment !== void 0 && q.push("#", z.fragment), q.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, g = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function d(P, T) {
    if (T[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function k(P, T) {
    const z = Object.assign({}, T), F = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let q = !1, O = !1;
    z.reference === "suffix" && (z.scheme ? P = z.scheme + ":" + P : P = "//" + P);
    const G = P.match(g);
    G !== null && G[1].indexOf("\\") !== -1 && (F.error = "URI authority must not contain a literal backslash.", q = !0);
    const Y = P.match(u);
    if (Y) {
      F.scheme = Y[1], F.userinfo = Y[3], F.host = Y[4], F.port = parseInt(Y[5], 10), F.path = Y[6] || "", F.query = Y[7], F.fragment = Y[8], isNaN(F.port) && (F.port = Y[5]);
      const re = d(F, Y);
      if (re !== void 0 && (F.error = F.error || re, q = !0), F.host)
        if (a(F.host) === !1) {
          const L = e(F.host);
          F.host = L.host.toLowerCase(), O = L.isIPV6;
        } else
          O = !0;
      F.scheme === void 0 && F.userinfo === void 0 && F.host === void 0 && F.port === void 0 && F.query === void 0 && !F.path ? F.reference = "same-document" : F.scheme === void 0 ? F.reference = "relative" : F.fragment === void 0 ? F.reference = "absolute" : F.reference = "uri", z.reference && z.reference !== "suffix" && z.reference !== F.reference && (F.error = F.error || "URI is not a " + z.reference + " reference.");
      const X = h(z.scheme || F.scheme);
      if (!z.unicodeSupport && (!X || !X.unicodeSupport) && F.host && (z.domainHost || X && X.domainHost) && O === !1 && l(F.host))
        try {
          F.host = new URL("http://" + F.host).hostname;
        } catch (W) {
          F.error = F.error || "Host's domain name can not be converted to ASCII: " + W;
        }
      if ((!X || X && !X.skipNormalize) && (P.indexOf("%") !== -1 && (F.scheme !== void 0 && (F.scheme = unescape(F.scheme)), F.host !== void 0 && (F.host = i(unescape(F.host), O))), F.path && (F.path = o(F.path)), F.fragment))
        try {
          F.fragment = encodeURI(decodeURIComponent(F.fragment));
        } catch {
          F.error = F.error || "URI malformed";
        }
      X && X.parse && X.parse(F, z);
    } else
      F.error = F.error || "URI can not be parsed.";
    return { parsed: F, malformedAuthorityOrPort: q };
  }
  function v(P, T) {
    return k(P, T).parsed;
  }
  function c(P, T) {
    return f(P, T).normalized;
  }
  function f(P, T) {
    const { parsed: z, malformedAuthorityOrPort: F } = k(P, T);
    return {
      normalized: F ? P : m(z, T),
      malformedAuthorityOrPort: F
    };
  }
  function y(P, T) {
    if (typeof P == "string") {
      const { normalized: z, malformedAuthorityOrPort: F } = f(P, T);
      return F ? void 0 : z;
    }
    if (typeof P == "object")
      return m(P, T);
  }
  const C = {
    SCHEMES: p,
    normalize: S,
    resolve: b,
    resolveComponent: w,
    equal: $,
    serialize: m,
    parse: v
  };
  return Et.exports = C, Et.exports.default = C, Et.exports.fastUri = C, Et.exports;
}
var No;
function Xa() {
  if (No) return Vt;
  No = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = Ya();
  return e.code = 'require("ajv/dist/runtime/uri").default', Vt.default = e, Vt;
}
var Mo;
function Za() {
  return Mo || (Mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Jn();
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
    const r = /* @__PURE__ */ jr(), o = /* @__PURE__ */ Yn(), s = /* @__PURE__ */ _i(), i = /* @__PURE__ */ Xn(), a = /* @__PURE__ */ se(), l = /* @__PURE__ */ Wn(), p = /* @__PURE__ */ Ln(), h = /* @__PURE__ */ ae(), S = Wa, b = /* @__PURE__ */ Xa(), w = (L, A) => new RegExp(L, A);
    w.code = "new RegExp";
    const $ = ["removeAdditional", "useDefaults", "coerceTypes"], m = /* @__PURE__ */ new Set([
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
    ]), u = {
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
    }, g = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, d = 200;
    function k(L) {
      var A, D, R, _, E, I, V, H, ne, ee, x, N, B, J, K, Q, te, ue, le, me, pe, je, $e, Ee, ze;
      const Qe = L.strict, er = (A = L.code) === null || A === void 0 ? void 0 : A.optimize, Qr = er === !0 || er === void 0 ? 1 : er || 0, eo = (R = (D = L.code) === null || D === void 0 ? void 0 : D.regExp) !== null && R !== void 0 ? R : w, Xi = (_ = L.uriResolver) !== null && _ !== void 0 ? _ : b.default;
      return {
        strictSchema: (I = (E = L.strictSchema) !== null && E !== void 0 ? E : Qe) !== null && I !== void 0 ? I : !0,
        strictNumbers: (H = (V = L.strictNumbers) !== null && V !== void 0 ? V : Qe) !== null && H !== void 0 ? H : !0,
        strictTypes: (ee = (ne = L.strictTypes) !== null && ne !== void 0 ? ne : Qe) !== null && ee !== void 0 ? ee : "log",
        strictTuples: (N = (x = L.strictTuples) !== null && x !== void 0 ? x : Qe) !== null && N !== void 0 ? N : "log",
        strictRequired: (J = (B = L.strictRequired) !== null && B !== void 0 ? B : Qe) !== null && J !== void 0 ? J : !1,
        code: L.code ? { ...L.code, optimize: Qr, regExp: eo } : { optimize: Qr, regExp: eo },
        loopRequired: (K = L.loopRequired) !== null && K !== void 0 ? K : d,
        loopEnum: (Q = L.loopEnum) !== null && Q !== void 0 ? Q : d,
        meta: (te = L.meta) !== null && te !== void 0 ? te : !0,
        messages: (ue = L.messages) !== null && ue !== void 0 ? ue : !0,
        inlineRefs: (le = L.inlineRefs) !== null && le !== void 0 ? le : !0,
        schemaId: (me = L.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = L.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (je = L.validateSchema) !== null && je !== void 0 ? je : !0,
        validateFormats: ($e = L.validateFormats) !== null && $e !== void 0 ? $e : !0,
        unicodeRegExp: (Ee = L.unicodeRegExp) !== null && Ee !== void 0 ? Ee : !0,
        int32range: (ze = L.int32range) !== null && ze !== void 0 ? ze : !0,
        uriResolver: Xi
      };
    }
    class v {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...k(A) };
        const { es5: D, lines: R } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: m, es5: D, lines: R }), this.logger = F(A.logger);
        const _ = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, s.getRules)(), c.call(this, u, A, "NOT SUPPORTED"), c.call(this, g, A, "DEPRECATED", "warn"), this._metaOpts = T.call(this), A.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && P.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), y.call(this), A.validateFormats = _;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: D, schemaId: R } = this.opts;
        let _ = S;
        R === "id" && (_ = { ...S }, _.id = _.$id, delete _.$id), D && A && this.addMetaSchema(_, _[R], !1);
      }
      defaultMeta() {
        const { meta: A, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof A == "object" ? A[D] || A : void 0;
      }
      validate(A, D) {
        let R;
        if (typeof A == "string") {
          if (R = this.getSchema(A), !R)
            throw new Error(`no schema with key or ref "${A}"`);
        } else
          R = this.compile(A);
        const _ = R(D);
        return "$async" in R || (this.errors = R.errors), _;
      }
      compile(A, D) {
        const R = this._addSchema(A, D);
        return R.validate || this._compileSchemaEnv(R);
      }
      compileAsync(A, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: R } = this.opts;
        return _.call(this, A, D);
        async function _(ee, x) {
          await E.call(this, ee.$schema);
          const N = this._addSchema(ee, x);
          return N.validate || I.call(this, N);
        }
        async function E(ee) {
          ee && !this.getSchema(ee) && await _.call(this, { $ref: ee }, !0);
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
          this.refs[ee] || await E.call(this, x.$schema), this.refs[ee] || this.addSchema(x, ee, D);
        }
        async function ne(ee) {
          const x = this._loading[ee];
          if (x)
            return x;
          try {
            return await (this._loading[ee] = R(ee));
          } finally {
            delete this._loading[ee];
          }
        }
      }
      // Adds schema to the instance
      addSchema(A, D, R, _ = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const I of A)
            this.addSchema(I, void 0, R, _);
          return this;
        }
        let E;
        if (typeof A == "object") {
          const { schemaId: I } = this.opts;
          if (E = A[I], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return D = (0, l.normalizeId)(D || E), this._checkUnique(D), this.schemas[D] = this._addSchema(A, R, D, _, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(A, D, R = this.opts.validateSchema) {
        return this.addSchema(A, D, !0, R), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(A, D) {
        if (typeof A == "boolean")
          return !0;
        let R;
        if (R = A.$schema, R !== void 0 && typeof R != "string")
          throw new Error("$schema must be a string");
        if (R = R || this.opts.defaultMeta || this.defaultMeta(), !R)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const _ = this.validate(R, A);
        if (!_ && D) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return _;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(A) {
        let D;
        for (; typeof (D = f.call(this, A)) == "string"; )
          A = D;
        if (D === void 0) {
          const { schemaId: R } = this.opts, _ = new i.SchemaEnv({ schema: {}, schemaId: R });
          if (D = i.resolveSchema.call(this, _, A), !D)
            return;
          this.refs[A] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(A) {
        if (A instanceof RegExp)
          return this._removeAllSchemas(this.schemas, A), this._removeAllSchemas(this.refs, A), this;
        switch (typeof A) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const D = f.call(this, A);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[A], delete this.refs[A], this;
          }
          case "object": {
            const D = A;
            this._cache.delete(D);
            let R = A[this.opts.schemaId];
            return R && (R = (0, l.normalizeId)(R), delete this.schemas[R], delete this.refs[R]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(A) {
        for (const D of A)
          this.addKeyword(D);
        return this;
      }
      addKeyword(A, D) {
        let R;
        if (typeof A == "string")
          R = A, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = R);
        else if (typeof A == "object" && D === void 0) {
          if (D = A, R = D.keyword, Array.isArray(R) && !R.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (O.call(this, R, D), !D)
          return (0, h.eachItem)(R, (E) => G.call(this, E)), this;
        re.call(this, D);
        const _ = {
          ...D,
          type: (0, p.getJSONTypes)(D.type),
          schemaType: (0, p.getJSONTypes)(D.schemaType)
        };
        return (0, h.eachItem)(R, _.type.length === 0 ? (E) => G.call(this, E, _) : (E) => _.type.forEach((I) => G.call(this, E, _, I))), this;
      }
      getKeyword(A) {
        const D = this.RULES.all[A];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(A) {
        const { RULES: D } = this;
        delete D.keywords[A], delete D.all[A];
        for (const R of D.rules) {
          const _ = R.rules.findIndex((E) => E.keyword === A);
          _ >= 0 && R.rules.splice(_, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[A] = D, this;
      }
      errorsText(A = this.errors, { separator: D = ", ", dataVar: R = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map((_) => `${R}${_.instancePath} ${_.message}`).reduce((_, E) => _ + D + E);
      }
      $dataMetaSchema(A, D) {
        const R = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const _ of D) {
          const E = _.split("/").slice(1);
          let I = A;
          for (const V of E)
            I = I[V];
          for (const V in R) {
            const H = R[V];
            if (typeof H != "object")
              continue;
            const { $data: ne } = H.definition, ee = I[V];
            ne && ee && (I[V] = W(ee));
          }
        }
        return A;
      }
      _removeAllSchemas(A, D) {
        for (const R in A) {
          const _ = A[R];
          (!D || D.test(R)) && (typeof _ == "string" ? delete A[R] : _ && !_.meta && (this._cache.delete(_.schema), delete A[R]));
        }
      }
      _addSchema(A, D, R, _ = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let I;
        const { schemaId: V } = this.opts;
        if (typeof A == "object")
          I = A[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof A != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(A);
        if (H !== void 0)
          return H;
        R = (0, l.normalizeId)(I || R);
        const ne = l.getSchemaRefs.call(this, A, R);
        return H = new i.SchemaEnv({ schema: A, schemaId: V, meta: D, baseId: R, localRefs: ne }), this._cache.set(H.schema, H), E && !R.startsWith("#") && (R && this._checkUnique(R), this.refs[R] = H), _ && this.validateSchema(A, !0), H;
      }
      _checkUnique(A) {
        if (this.schemas[A] || this.refs[A])
          throw new Error(`schema with key or id "${A}" already exists`);
      }
      _compileSchemaEnv(A) {
        if (A.meta ? this._compileMetaSchema(A) : i.compileSchema.call(this, A), !A.validate)
          throw new Error("ajv implementation error");
        return A.validate;
      }
      _compileMetaSchema(A) {
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, A);
        } finally {
          this.opts = D;
        }
      }
    }
    v.ValidationError = r.default, v.MissingRefError = o.default, e.default = v;
    function c(L, A, D, R = "error") {
      for (const _ in L) {
        const E = _;
        E in A && this.logger[R](`${D}: option ${_}. ${L[E]}`);
      }
    }
    function f(L) {
      return L = (0, l.normalizeId)(L), this.schemas[L] || this.refs[L];
    }
    function y() {
      const L = this.opts.schemas;
      if (L)
        if (Array.isArray(L))
          this.addSchema(L);
        else
          for (const A in L)
            this.addSchema(L[A], A);
    }
    function C() {
      for (const L in this.opts.formats) {
        const A = this.opts.formats[L];
        A && this.addFormat(L, A);
      }
    }
    function P(L) {
      if (Array.isArray(L)) {
        this.addVocabulary(L);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const A in L) {
        const D = L[A];
        D.keyword || (D.keyword = A), this.addKeyword(D);
      }
    }
    function T() {
      const L = { ...this.opts };
      for (const A of $)
        delete L[A];
      return L;
    }
    const z = { log() {
    }, warn() {
    }, error() {
    } };
    function F(L) {
      if (L === !1)
        return z;
      if (L === void 0)
        return console;
      if (L.log && L.warn && L.error)
        return L;
      throw new Error("logger must implement log, warn and error methods");
    }
    const q = /^[a-z_$][a-z0-9_$:-]*$/i;
    function O(L, A) {
      const { RULES: D } = this;
      if ((0, h.eachItem)(L, (R) => {
        if (D.keywords[R])
          throw new Error(`Keyword ${R} is already defined`);
        if (!q.test(R))
          throw new Error(`Keyword ${R} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function G(L, A, D) {
      var R;
      const _ = A?.post;
      if (D && _)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let I = _ ? E.post : E.rules.find(({ type: H }) => H === D);
      if (I || (I = { type: D, rules: [] }, E.rules.push(I)), E.keywords[L] = !0, !A)
        return;
      const V = {
        keyword: L,
        definition: {
          ...A,
          type: (0, p.getJSONTypes)(A.type),
          schemaType: (0, p.getJSONTypes)(A.schemaType)
        }
      };
      A.before ? Y.call(this, I, V, A.before) : I.rules.push(V), E.all[L] = V, (R = A.implements) === null || R === void 0 || R.forEach((H) => this.addKeyword(H));
    }
    function Y(L, A, D) {
      const R = L.rules.findIndex((_) => _.keyword === D);
      R >= 0 ? L.rules.splice(R, 0, A) : (L.rules.push(A), this.logger.warn(`rule ${D} is not defined`));
    }
    function re(L) {
      let { metaSchema: A } = L;
      A !== void 0 && (L.$data && this.opts.$data && (A = W(A)), L.validateSchema = this.compile(A, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function W(L) {
      return { anyOf: [L, X] };
    }
  })(nr)), nr;
}
var Bt = {}, Ut = {}, Kt = {}, Oo;
function Qa() {
  if (Oo) return Kt;
  Oo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Kt.default = e, Kt;
}
var He = {}, To;
function zr() {
  if (To) return He;
  To = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.callRef = He.getValidate = void 0;
  const e = /* @__PURE__ */ Yn(), t = /* @__PURE__ */ Te(), n = /* @__PURE__ */ se(), r = /* @__PURE__ */ Oe(), o = /* @__PURE__ */ Xn(), s = /* @__PURE__ */ ae(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(p) {
      const { gen: h, schema: S, it: b } = p, { baseId: w, schemaEnv: $, validateName: m, opts: u, self: g } = b, { root: d } = $;
      if ((S === "#" || S === "#/") && w === d.baseId)
        return v();
      const k = o.resolveRef.call(g, d, w, S);
      if (k === void 0)
        throw new e.default(b.opts.uriResolver, w, S);
      if (k instanceof o.SchemaEnv)
        return c(k);
      return f(k);
      function v() {
        if ($ === d)
          return l(p, m, $, $.$async);
        const y = h.scopeValue("root", { ref: d });
        return l(p, (0, n._)`${y}.validate`, d, d.$async);
      }
      function c(y) {
        const C = a(p, y);
        l(p, C, y, y.$async);
      }
      function f(y) {
        const C = h.scopeValue("schema", u.code.source === !0 ? { ref: y, code: (0, n.stringify)(y) } : { ref: y }), P = h.name("valid"), T = p.subschema({
          schema: y,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: C,
          errSchemaPath: S
        }, P);
        p.mergeEvaluated(T), p.ok(P);
      }
    }
  };
  function a(p, h) {
    const { gen: S } = p;
    return h.validate ? S.scopeValue("validate", { ref: h.validate }) : (0, n._)`${S.scopeValue("wrapper", { ref: h })}.validate`;
  }
  He.getValidate = a;
  function l(p, h, S, b) {
    const { gen: w, it: $ } = p, { allErrors: m, schemaEnv: u, opts: g } = $, d = g.passContext ? r.default.this : n.nil;
    b ? k() : v();
    function k() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const y = w.let("valid");
      w.try(() => {
        w.code((0, n._)`await ${(0, t.callValidateCode)(p, h, d)}`), f(h), m || w.assign(y, !0);
      }, (C) => {
        w.if((0, n._)`!(${C} instanceof ${$.ValidationError})`, () => w.throw(C)), c(C), m || w.assign(y, !1);
      }), p.ok(y);
    }
    function v() {
      p.result((0, t.callValidateCode)(p, h, d), () => f(h), () => c(h));
    }
    function c(y) {
      const C = (0, n._)`${y}.errors`;
      w.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${C} : ${r.default.vErrors}.concat(${C})`), w.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function f(y) {
      var C;
      if (!$.opts.unevaluated)
        return;
      const P = (C = S?.validate) === null || C === void 0 ? void 0 : C.evaluated;
      if ($.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && ($.props = s.mergeEvaluated.props(w, P.props, $.props));
        else {
          const T = w.var("props", (0, n._)`${y}.evaluated.props`);
          $.props = s.mergeEvaluated.props(w, T, $.props, n.Name);
        }
      if ($.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && ($.items = s.mergeEvaluated.items(w, P.items, $.items));
        else {
          const T = w.var("items", (0, n._)`${y}.evaluated.items`);
          $.items = s.mergeEvaluated.items(w, T, $.items, n.Name);
        }
    }
  }
  return He.callRef = l, He.default = i, He;
}
var Fo;
function ec() {
  if (Fo) return Ut;
  Fo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qa(), t = /* @__PURE__ */ zr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Ut.default = n, Ut;
}
var Ht = {}, Gt = {}, jo;
function tc() {
  if (jo) return Gt;
  jo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
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
      const { keyword: i, data: a, schemaCode: l } = s;
      s.fail$data((0, e._)`${a} ${n[i].fail} ${l} || isNaN(${a})`);
    }
  };
  return Gt.default = o, Gt;
}
var Wt = {}, zo;
function nc() {
  if (zo) return Wt;
  zo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
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
      const { gen: o, data: s, schemaCode: i, it: a } = r, l = a.opts.multipleOfPrecision, p = o.let("res"), h = l ? (0, e._)`Math.abs(Math.round(${p}) - ${p}) > 1e-${l}` : (0, e._)`${p} !== parseInt(${p})`;
      r.fail$data((0, e._)`(${i} === 0 || (${p} = ${s}/${i}, ${h}))`);
    }
  };
  return Wt.default = n, Wt;
}
var Jt = {}, Yt = {}, Io;
function rc() {
  if (Io) return Yt;
  Io = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, s;
    for (; o < n; )
      r++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < n && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return r;
  }
  return Yt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Yt;
}
var Do;
function oc() {
  if (Do) return Jt;
  Do = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
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
      const { keyword: i, data: a, schemaCode: l, it: p } = s, h = i === "maxLength" ? e.operators.GT : e.operators.LT, S = p.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(s.gen, n.default)}(${a})`;
      s.fail$data((0, e._)`${S} ${h} ${l}`);
    }
  };
  return Jt.default = o, Jt;
}
var Xt = {}, Lo;
function sc() {
  if (Lo) return Xt;
  Lo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Te(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ se(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, n.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, n._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schema: p, schemaCode: h, it: S } = s, b = S.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: w } = S.opts.code, $ = w.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, w), m = i.let("valid");
        i.try(() => i.assign(m, (0, n._)`${$}(${h}, ${b}).test(${a})`), () => i.assign(m, !1)), s.fail$data((0, n._)`!${m}`);
      } else {
        const w = (0, e.usePattern)(s, p);
        s.fail$data((0, n._)`!${w}.test(${a})`);
      }
    }
  };
  return Xt.default = o, Xt;
}
var Zt = {}, qo;
function ic() {
  if (qo) return Zt;
  qo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
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
  return Zt.default = n, Zt;
}
var Qt = {}, Vo;
function ac() {
  if (Vo) return Qt;
  Vo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Te(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: i, schema: a, schemaCode: l, data: p, $data: h, it: S } = s, { opts: b } = S;
      if (!h && a.length === 0)
        return;
      const w = a.length >= b.loopRequired;
      if (S.allErrors ? $() : m(), b.strictRequired) {
        const d = s.parentSchema.properties, { definedProperties: k } = s.it;
        for (const v of a)
          if (d?.[v] === void 0 && !k.has(v)) {
            const c = S.schemaEnv.baseId + S.errSchemaPath, f = `required property "${v}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(S, f, S.opts.strictRequired);
          }
      }
      function $() {
        if (w || h)
          s.block$data(t.nil, u);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(s, d);
      }
      function m() {
        const d = i.let("missing");
        if (w || h) {
          const k = i.let("valid", !0);
          s.block$data(k, () => g(d, k)), s.ok(k);
        } else
          i.if((0, e.checkMissingProp)(s, a, d)), (0, e.reportMissingProp)(s, d), i.else();
      }
      function u() {
        i.forOf("prop", l, (d) => {
          s.setParams({ missingProperty: d }), i.if((0, e.noPropertyInData)(i, p, d, b.ownProperties), () => s.error());
        });
      }
      function g(d, k) {
        s.setParams({ missingProperty: d }), i.forOf(d, l, () => {
          i.assign(k, (0, e.propertyInData)(i, p, d, b.ownProperties)), i.if((0, t.not)(k), () => {
            s.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return Qt.default = o, Qt;
}
var en = {}, Bo;
function cc() {
  if (Bo) return en;
  Bo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
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
  return en.default = n, en;
}
var tn = {}, nn = {}, Uo;
function Ir() {
  if (Uo) return nn;
  Uo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = ki();
  return e.code = 'require("ajv/dist/runtime/equal").default', nn.default = e, nn;
}
var Ko;
function lc() {
  if (Ko) return tn;
  Ko = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ln(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Ir(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: l, $data: p, schema: h, parentSchema: S, schemaCode: b, it: w } = i;
      if (!p && !h)
        return;
      const $ = a.let("valid"), m = S.items ? (0, e.getSchemaTypes)(S.items) : [];
      i.block$data($, u, (0, t._)`${b} === false`), i.ok($);
      function u() {
        const v = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        i.setParams({ i: v, j: c }), a.assign($, !0), a.if((0, t._)`${v} > 1`, () => (g() ? d : k)(v, c));
      }
      function g() {
        return m.length > 0 && !m.some((v) => v === "object" || v === "array");
      }
      function d(v, c) {
        const f = a.name("item"), y = (0, e.checkDataTypes)(m, f, w.opts.strictNumbers, e.DataType.Wrong), C = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${v}--;`, () => {
          a.let(f, (0, t._)`${l}[${v}]`), a.if(y, (0, t._)`continue`), m.length > 1 && a.if((0, t._)`typeof ${f} == "string"`, (0, t._)`${f} += "_"`), a.if((0, t._)`typeof ${C}[${f}] == "number"`, () => {
            a.assign(c, (0, t._)`${C}[${f}]`), i.error(), a.assign($, !1).break();
          }).code((0, t._)`${C}[${f}] = ${v}`);
        });
      }
      function k(v, c) {
        const f = (0, n.useFunc)(a, r.default), y = a.name("outer");
        a.label(y).for((0, t._)`;${v}--;`, () => a.for((0, t._)`${c} = ${v}; ${c}--;`, () => a.if((0, t._)`${f}(${l}[${v}], ${l}[${c}])`, () => {
          i.error(), a.assign($, !1).break(y);
        })));
      }
    }
  };
  return tn.default = s, tn;
}
var rn = {}, Ho;
function dc() {
  if (Ho) return rn;
  Ho = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Ir(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schemaCode: p, schema: h } = s;
      l || h && typeof h == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${a}, ${p})`) : s.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return rn.default = o, rn;
}
var on = {}, Go;
function uc() {
  if (Go) return on;
  Go = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Ir(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schema: p, schemaCode: h, it: S } = s;
      if (!l && p.length === 0)
        throw new Error("enum must have non-empty array");
      const b = p.length >= S.opts.loopEnum;
      let w;
      const $ = () => w ?? (w = (0, t.useFunc)(i, n.default));
      let m;
      if (b || l)
        m = i.let("valid"), s.block$data(m, u);
      else {
        if (!Array.isArray(p))
          throw new Error("ajv implementation error");
        const d = i.const("vSchema", h);
        m = (0, e.or)(...p.map((k, v) => g(d, v)));
      }
      s.pass(m);
      function u() {
        i.assign(m, !1), i.forOf("v", h, (d) => i.if((0, e._)`${$()}(${a}, ${d})`, () => i.assign(m, !0).break()));
      }
      function g(d, k) {
        const v = p[k];
        return typeof v == "object" && v !== null ? (0, e._)`${$()}(${a}, ${d}[${k}])` : (0, e._)`${a} === ${v}`;
      }
    }
  };
  return on.default = o, on;
}
var Wo;
function fc() {
  if (Wo) return Ht;
  Wo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tc(), t = /* @__PURE__ */ nc(), n = /* @__PURE__ */ oc(), r = /* @__PURE__ */ sc(), o = /* @__PURE__ */ ic(), s = /* @__PURE__ */ ac(), i = /* @__PURE__ */ cc(), a = /* @__PURE__ */ lc(), l = /* @__PURE__ */ dc(), p = /* @__PURE__ */ uc(), h = [
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
    l.default,
    p.default
  ];
  return Ht.default = h, Ht;
}
var sn = {}, ct = {}, Jo;
function Ei() {
  if (Jo) return ct;
  Jo = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.validateAdditionalItems = void 0;
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
      const { parentSchema: i, it: a } = s, { items: l } = i;
      if (!Array.isArray(l)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(s, l);
    }
  };
  function o(s, i) {
    const { gen: a, schema: l, data: p, keyword: h, it: S } = s;
    S.items = !0;
    const b = a.const("len", (0, e._)`${p}.length`);
    if (l === !1)
      s.setParams({ len: i.length }), s.pass((0, e._)`${b} <= ${i.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(S, l)) {
      const $ = a.var("valid", (0, e._)`${b} <= ${i.length}`);
      a.if((0, e.not)($), () => w($)), s.ok($);
    }
    function w($) {
      a.forRange("i", i.length, b, (m) => {
        s.subschema({ keyword: h, dataProp: m, dataPropType: t.Type.Num }, $), S.allErrors || a.if((0, e.not)($), () => a.break());
      });
    }
  }
  return ct.validateAdditionalItems = o, ct.default = r, ct;
}
var an = {}, lt = {}, Yo;
function xi() {
  if (Yo) return lt;
  Yo = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.validateTuple = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Te(), r = {
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
    const { gen: l, parentSchema: p, data: h, keyword: S, it: b } = s;
    m(p), b.opts.unevaluated && a.length && b.items !== !0 && (b.items = t.mergeEvaluated.items(l, a.length, b.items));
    const w = l.name("valid"), $ = l.const("len", (0, e._)`${h}.length`);
    a.forEach((u, g) => {
      (0, t.alwaysValidSchema)(b, u) || (l.if((0, e._)`${$} > ${g}`, () => s.subschema({
        keyword: S,
        schemaProp: g,
        dataProp: g
      }, w)), s.ok(w));
    });
    function m(u) {
      const { opts: g, errSchemaPath: d } = b, k = a.length, v = k === u.minItems && (k === u.maxItems || u[i] === !1);
      if (g.strictTuples && !v) {
        const c = `"${S}" is ${k}-tuple, but minItems or maxItems/${i} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)(b, c, g.strictTuples);
      }
    }
  }
  return lt.validateTuple = o, lt.default = r, lt;
}
var Xo;
function pc() {
  if (Xo) return an;
  Xo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xi(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return an.default = t, an;
}
var cn = {}, Zo;
function hc() {
  if (Zo) return cn;
  Zo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Te(), r = /* @__PURE__ */ Ei(), s = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: a, parentSchema: l, it: p } = i, { prefixItems: h } = l;
      p.items = !0, !(0, t.alwaysValidSchema)(p, a) && (h ? (0, r.validateAdditionalItems)(i, h) : i.ok((0, n.validateArray)(i)));
    }
  };
  return cn.default = s, cn;
}
var ln = {}, Qo;
function mc() {
  if (Qo) return ln;
  Qo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
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
      const { gen: s, schema: i, parentSchema: a, data: l, it: p } = o;
      let h, S;
      const { minContains: b, maxContains: w } = a;
      p.opts.next ? (h = b === void 0 ? 1 : b, S = w) : h = 1;
      const $ = s.const("len", (0, e._)`${l}.length`);
      if (o.setParams({ min: h, max: S }), S === void 0 && h === 0) {
        (0, t.checkStrictMode)(p, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (S !== void 0 && h > S) {
        (0, t.checkStrictMode)(p, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(p, i)) {
        let k = (0, e._)`${$} >= ${h}`;
        S !== void 0 && (k = (0, e._)`${k} && ${$} <= ${S}`), o.pass(k);
        return;
      }
      p.items = !0;
      const m = s.name("valid");
      S === void 0 && h === 1 ? g(m, () => s.if(m, () => s.break())) : h === 0 ? (s.let(m, !0), S !== void 0 && s.if((0, e._)`${l}.length > 0`, u)) : (s.let(m, !1), u()), o.result(m, () => o.reset());
      function u() {
        const k = s.name("_valid"), v = s.let("count", 0);
        g(k, () => s.if(k, () => d(v)));
      }
      function g(k, v) {
        s.forRange("i", 0, $, (c) => {
          o.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, k), v();
        });
      }
      function d(k) {
        s.code((0, e._)`${k}++`), S === void 0 ? s.if((0, e._)`${k} >= ${h}`, () => s.assign(m, !0).break()) : (s.if((0, e._)`${k} > ${S}`, () => s.assign(m, !1).break()), h === 1 ? s.assign(m, !0) : s.if((0, e._)`${k} >= ${h}`, () => s.assign(m, !0)));
      }
    }
  };
  return ln.default = r, ln;
}
var ur = {}, es;
function Dr() {
  return es || (es = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Te();
    e.error = {
      message: ({ params: { property: l, depsCount: p, deps: h } }) => {
        const S = p === 1 ? "property" : "properties";
        return (0, t.str)`must have ${S} ${h} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: p, deps: h, missingProperty: S } }) => (0, t._)`{property: ${l},
    missingProperty: ${S},
    depsCount: ${p},
    deps: ${h}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [p, h] = s(l);
        i(l, p), a(l, h);
      }
    };
    function s({ schema: l }) {
      const p = {}, h = {};
      for (const S in l) {
        if (S === "__proto__")
          continue;
        const b = Array.isArray(l[S]) ? p : h;
        b[S] = l[S];
      }
      return [p, h];
    }
    function i(l, p = l.schema) {
      const { gen: h, data: S, it: b } = l;
      if (Object.keys(p).length === 0)
        return;
      const w = h.let("missing");
      for (const $ in p) {
        const m = p[$];
        if (m.length === 0)
          continue;
        const u = (0, r.propertyInData)(h, S, $, b.opts.ownProperties);
        l.setParams({
          property: $,
          depsCount: m.length,
          deps: m.join(", ")
        }), b.allErrors ? h.if(u, () => {
          for (const g of m)
            (0, r.checkReportMissingProp)(l, g);
        }) : (h.if((0, t._)`${u} && (${(0, r.checkMissingProp)(l, m, w)})`), (0, r.reportMissingProp)(l, w), h.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(l, p = l.schema) {
      const { gen: h, data: S, keyword: b, it: w } = l, $ = h.name("valid");
      for (const m in p)
        (0, n.alwaysValidSchema)(w, p[m]) || (h.if(
          (0, r.propertyInData)(h, S, m, w.opts.ownProperties),
          () => {
            const u = l.subschema({ keyword: b, schemaProp: m }, $);
            l.mergeValidEvaluated(u, $);
          },
          () => h.var($, !0)
          // TODO var
        ), l.ok($));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(ur)), ur;
}
var dn = {}, ts;
function gc() {
  if (ts) return dn;
  ts = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: s, schema: i, data: a, it: l } = o;
      if ((0, t.alwaysValidSchema)(l, i))
        return;
      const p = s.name("valid");
      s.forIn("key", a, (h) => {
        o.setParams({ propertyName: h }), o.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, p), s.if((0, e.not)(p), () => {
          o.error(!0), l.allErrors || s.break();
        });
      }), o.ok(p);
    }
  };
  return dn.default = r, dn;
}
var un = {}, ns;
function Pi() {
  if (ns) return un;
  ns = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Te(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ ae(), s = {
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
      const { gen: a, schema: l, parentSchema: p, data: h, errsCount: S, it: b } = i;
      if (!S)
        throw new Error("ajv implementation error");
      const { allErrors: w, opts: $ } = b;
      if (b.props = !0, $.removeAdditional !== "all" && (0, r.alwaysValidSchema)(b, l))
        return;
      const m = (0, e.allSchemaProperties)(p.properties), u = (0, e.allSchemaProperties)(p.patternProperties);
      g(), i.ok((0, t._)`${S} === ${n.default.errors}`);
      function g() {
        a.forIn("key", h, (f) => {
          !m.length && !u.length ? v(f) : a.if(d(f), () => v(f));
        });
      }
      function d(f) {
        let y;
        if (m.length > 8) {
          const C = (0, r.schemaRefOrVal)(b, p.properties, "properties");
          y = (0, e.isOwnProperty)(a, C, f);
        } else m.length ? y = (0, t.or)(...m.map((C) => (0, t._)`${f} === ${C}`)) : y = t.nil;
        return u.length && (y = (0, t.or)(y, ...u.map((C) => (0, t._)`${(0, e.usePattern)(i, C)}.test(${f})`))), (0, t.not)(y);
      }
      function k(f) {
        a.code((0, t._)`delete ${h}[${f}]`);
      }
      function v(f) {
        if ($.removeAdditional === "all" || $.removeAdditional && l === !1) {
          k(f);
          return;
        }
        if (l === !1) {
          i.setParams({ additionalProperty: f }), i.error(), w || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)(b, l)) {
          const y = a.name("valid");
          $.removeAdditional === "failing" ? (c(f, y, !1), a.if((0, t.not)(y), () => {
            i.reset(), k(f);
          })) : (c(f, y), w || a.if((0, t.not)(y), () => a.break()));
        }
      }
      function c(f, y, C) {
        const P = {
          keyword: "additionalProperties",
          dataProp: f,
          dataPropType: r.Type.Str
        };
        C === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(P, y);
      }
    }
  };
  return un.default = s, un;
}
var fn = {}, rs;
function yc() {
  if (rs) return fn;
  rs = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jn(), t = /* @__PURE__ */ Te(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Pi(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, parentSchema: l, data: p, it: h } = s;
      h.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(h, r.default, "additionalProperties"));
      const S = (0, t.allSchemaProperties)(a);
      for (const u of S)
        h.definedProperties.add(u);
      h.opts.unevaluated && S.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(i, (0, n.toHash)(S), h.props));
      const b = S.filter((u) => !(0, n.alwaysValidSchema)(h, a[u]));
      if (b.length === 0)
        return;
      const w = i.name("valid");
      for (const u of b)
        $(u) ? m(u) : (i.if((0, t.propertyInData)(i, p, u, h.opts.ownProperties)), m(u), h.allErrors || i.else().var(w, !0), i.endIf()), s.it.definedProperties.add(u), s.ok(w);
      function $(u) {
        return h.opts.useDefaults && !h.compositeRule && a[u].default !== void 0;
      }
      function m(u) {
        s.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, w);
      }
    }
  };
  return fn.default = o, fn;
}
var pn = {}, os;
function $c() {
  if (os) return pn;
  os = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Te(), t = /* @__PURE__ */ se(), n = /* @__PURE__ */ ae(), r = /* @__PURE__ */ ae(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, data: l, parentSchema: p, it: h } = s, { opts: S } = h, b = (0, e.allSchemaProperties)(a), w = b.filter((v) => (0, n.alwaysValidSchema)(h, a[v]));
      if (b.length === 0 || w.length === b.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const $ = S.strictSchema && !S.allowMatchingProperties && p.properties, m = i.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(i, h.props));
      const { props: u } = h;
      g();
      function g() {
        for (const v of b)
          $ && d(v), h.allErrors ? k(v) : (i.var(m, !0), k(v), i.if(m));
      }
      function d(v) {
        for (const c in $)
          new RegExp(v).test(c) && (0, n.checkStrictMode)(h, `property ${c} matches pattern ${v} (use allowMatchingProperties)`);
      }
      function k(v) {
        i.forIn("key", l, (c) => {
          i.if((0, t._)`${(0, e.usePattern)(s, v)}.test(${c})`, () => {
            const f = w.includes(v);
            f || s.subschema({
              keyword: "patternProperties",
              schemaProp: v,
              dataProp: c,
              dataPropType: r.Type.Str
            }, m), h.opts.unevaluated && u !== !0 ? i.assign((0, t._)`${u}[${c}]`, !0) : !f && !h.allErrors && i.if((0, t.not)(m), () => i.break());
          });
        });
      }
    }
  };
  return pn.default = o, pn;
}
var hn = {}, ss;
function vc() {
  if (ss) return hn;
  ss = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
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
  return hn.default = t, hn;
}
var mn = {}, is;
function bc() {
  if (is) return mn;
  is = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Te()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return mn.default = t, mn;
}
var gn = {}, as;
function wc() {
  if (as) return gn;
  as = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: s, schema: i, parentSchema: a, it: l } = o;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (l.opts.discriminator && a.discriminator)
        return;
      const p = i, h = s.let("valid", !1), S = s.let("passing", null), b = s.name("_valid");
      o.setParams({ passing: S }), s.block(w), o.result(h, () => o.reset(), () => o.error(!0));
      function w() {
        p.forEach(($, m) => {
          let u;
          (0, t.alwaysValidSchema)(l, $) ? s.var(b, !0) : u = o.subschema({
            keyword: "oneOf",
            schemaProp: m,
            compositeRule: !0
          }, b), m > 0 && s.if((0, e._)`${b} && ${h}`).assign(h, !1).assign(S, (0, e._)`[${S}, ${m}]`).else(), s.if(b, () => {
            s.assign(h, !0), s.assign(S, m), u && o.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return gn.default = r, gn;
}
var yn = {}, cs;
function _c() {
  if (cs) return yn;
  cs = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: o, it: s } = n;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const i = r.name("valid");
      o.forEach((a, l) => {
        if ((0, e.alwaysValidSchema)(s, a))
          return;
        const p = n.subschema({ keyword: "allOf", schemaProp: l }, i);
        n.ok(i), n.mergeEvaluated(p);
      });
    }
  };
  return yn.default = t, yn;
}
var $n = {}, ls;
function Sc() {
  if (ls) return $n;
  ls = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: s }) => (0, e.str)`must match "${s.ifClause}" schema`,
      params: ({ params: s }) => (0, e._)`{failingKeyword: ${s.ifClause}}`
    },
    code(s) {
      const { gen: i, parentSchema: a, it: l } = s;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
      const p = o(l, "then"), h = o(l, "else");
      if (!p && !h)
        return;
      const S = i.let("valid", !0), b = i.name("_valid");
      if (w(), s.reset(), p && h) {
        const m = i.let("ifClause");
        s.setParams({ ifClause: m }), i.if(b, $("then", m), $("else", m));
      } else p ? i.if(b, $("then")) : i.if((0, e.not)(b), $("else"));
      s.pass(S, () => s.error(!0));
      function w() {
        const m = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, b);
        s.mergeEvaluated(m);
      }
      function $(m, u) {
        return () => {
          const g = s.subschema({ keyword: m }, b);
          i.assign(S, b), s.mergeValidEvaluated(g, S), u ? i.assign(u, (0, e._)`${m}`) : s.setParams({ ifClause: m });
        };
      }
    }
  };
  function o(s, i) {
    const a = s.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(s, a);
  }
  return $n.default = r, $n;
}
var vn = {}, ds;
function kc() {
  if (ds) return vn;
  ds = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return vn.default = t, vn;
}
var us;
function Cc() {
  if (us) return sn;
  us = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ei(), t = /* @__PURE__ */ pc(), n = /* @__PURE__ */ xi(), r = /* @__PURE__ */ hc(), o = /* @__PURE__ */ mc(), s = /* @__PURE__ */ Dr(), i = /* @__PURE__ */ gc(), a = /* @__PURE__ */ Pi(), l = /* @__PURE__ */ yc(), p = /* @__PURE__ */ $c(), h = /* @__PURE__ */ vc(), S = /* @__PURE__ */ bc(), b = /* @__PURE__ */ wc(), w = /* @__PURE__ */ _c(), $ = /* @__PURE__ */ Sc(), m = /* @__PURE__ */ kc();
  function u(g = !1) {
    const d = [
      // any
      h.default,
      S.default,
      b.default,
      w.default,
      $.default,
      m.default,
      // object
      i.default,
      a.default,
      s.default,
      l.default,
      p.default
    ];
    return g ? d.push(t.default, r.default) : d.push(e.default, n.default), d.push(o.default), d;
  }
  return sn.default = u, sn;
}
var bn = {}, dt = {}, fs;
function Ai() {
  if (fs) return dt;
  fs = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ Xn(), r = /* @__PURE__ */ zr(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => s(a, a.schema)
  };
  function s(a, l) {
    const { gen: p, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[l] = !0;
    const S = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, b = h.errSchemaPath === "#" ? h.validateName : i(a);
    p.if((0, e._)`!${S}`, () => p.assign(S, b));
  }
  dt.dynamicAnchor = s;
  function i(a) {
    const { schemaEnv: l, schema: p, self: h } = a.it, { root: S, baseId: b, localRefs: w, meta: $ } = l.root, { schemaId: m } = h.opts, u = new n.SchemaEnv({ schema: p, schemaId: m, root: S, baseId: b, localRefs: w, meta: $ });
    return n.compileSchema.call(h, u), (0, r.getValidate)(a, u);
  }
  return dt.default = o, dt;
}
var ut = {}, ps;
function Ri() {
  if (ps) return ut;
  ps = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.dynamicRef = void 0;
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ zr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (s) => o(s, s.schema)
  };
  function o(s, i) {
    const { gen: a, keyword: l, it: p } = s;
    if (i[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const h = i.slice(1);
    if (p.allErrors)
      S();
    else {
      const w = a.let("valid", !1);
      S(w), s.ok(w);
    }
    function S(w) {
      if (p.schemaEnv.root.dynamicAnchors[h]) {
        const $ = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        a.if($, b($, w), b(p.validateName, w));
      } else
        b(p.validateName, w)();
    }
    function b(w, $) {
      return $ ? () => a.block(() => {
        (0, n.callRef)(s, w), a.let($, !0);
      }) : () => (0, n.callRef)(s, w);
    }
  }
  return ut.dynamicRef = o, ut.default = r, ut;
}
var wn = {}, hs;
function Ec() {
  if (hs) return wn;
  hs = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ai(), t = /* @__PURE__ */ ae(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return wn.default = n, wn;
}
var _n = {}, ms;
function xc() {
  if (ms) return _n;
  ms = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ri(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return _n.default = t, _n;
}
var gs;
function Pc() {
  if (gs) return bn;
  gs = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ai(), t = /* @__PURE__ */ Ri(), n = /* @__PURE__ */ Ec(), r = /* @__PURE__ */ xc(), o = [e.default, t.default, n.default, r.default];
  return bn.default = o, bn;
}
var Sn = {}, kn = {}, ys;
function Ac() {
  if (ys) return kn;
  ys = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return kn.default = t, kn;
}
var Cn = {}, $s;
function Rc() {
  if ($s) return Cn;
  $s = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Cn.default = t, Cn;
}
var En = {}, vs;
function Nc() {
  if (vs) return En;
  vs = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return En.default = t, En;
}
var bs;
function Mc() {
  if (bs) return Sn;
  bs = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ac(), t = /* @__PURE__ */ Rc(), n = /* @__PURE__ */ Nc(), r = [e.default, t.default, n.default];
  return Sn.default = r, Sn;
}
var xn = {}, Pn = {}, ws;
function Oc() {
  if (ws) return Pn;
  ws = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Oe(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: s }) => (0, e._)`{unevaluatedProperty: ${s.unevaluatedProperty}}`
    },
    code(s) {
      const { gen: i, schema: a, data: l, errsCount: p, it: h } = s;
      if (!p)
        throw new Error("ajv implementation error");
      const { allErrors: S, props: b } = h;
      b instanceof e.Name ? i.if((0, e._)`${b} !== true`, () => i.forIn("key", l, (u) => i.if($(b, u), () => w(u)))) : b !== !0 && i.forIn("key", l, (u) => b === void 0 ? w(u) : i.if(m(b, u), () => w(u))), h.props = !0, s.ok((0, e._)`${p} === ${n.default.errors}`);
      function w(u) {
        if (a === !1) {
          s.setParams({ unevaluatedProperty: u }), s.error(), S || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, a)) {
          const g = i.name("valid");
          s.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, g), S || i.if((0, e.not)(g), () => i.break());
        }
      }
      function $(u, g) {
        return (0, e._)`!${u} || !${u}[${g}]`;
      }
      function m(u, g) {
        const d = [];
        for (const k in u)
          u[k] === !0 && d.push((0, e._)`${g} !== ${k}`);
        return (0, e.and)(...d);
      }
    }
  };
  return Pn.default = o, Pn;
}
var An = {}, _s;
function Tc() {
  if (_s) return An;
  _s = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ ae(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: s, schema: i, data: a, it: l } = o, p = l.items || 0;
      if (p === !0)
        return;
      const h = s.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        o.setParams({ len: p }), o.fail((0, e._)`${h} > ${p}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(l, i)) {
        const b = s.var("valid", (0, e._)`${h} <= ${p}`);
        s.if((0, e.not)(b), () => S(b, p)), o.ok(b);
      }
      l.items = !0;
      function S(b, w) {
        s.forRange("i", w, h, ($) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: $, dataPropType: t.Type.Num }, b), l.allErrors || s.if((0, e.not)(b), () => s.break());
        });
      }
    }
  };
  return An.default = r, An;
}
var Ss;
function Fc() {
  if (Ss) return xn;
  Ss = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oc(), t = /* @__PURE__ */ Tc(), n = [e.default, t.default];
  return xn.default = n, xn;
}
var Rn = {}, Nn = {}, ks;
function jc() {
  if (ks) return Nn;
  ks = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
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
      const { gen: s, data: i, $data: a, schema: l, schemaCode: p, it: h } = r, { opts: S, errSchemaPath: b, schemaEnv: w, self: $ } = h;
      if (!S.validateFormats)
        return;
      a ? m() : u();
      function m() {
        const g = s.scopeValue("formats", {
          ref: $.formats,
          code: S.code.formats
        }), d = s.const("fDef", (0, e._)`${g}[${p}]`), k = s.let("fType"), v = s.let("format");
        s.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => s.assign(k, (0, e._)`${d}.type || "string"`).assign(v, (0, e._)`${d}.validate`), () => s.assign(k, (0, e._)`"string"`).assign(v, d)), r.fail$data((0, e.or)(c(), f()));
        function c() {
          return S.strictSchema === !1 ? e.nil : (0, e._)`${p} && !${v}`;
        }
        function f() {
          const y = w.$async ? (0, e._)`(${d}.async ? await ${v}(${i}) : ${v}(${i}))` : (0, e._)`${v}(${i})`, C = (0, e._)`(typeof ${v} == "function" ? ${y} : ${v}.test(${i}))`;
          return (0, e._)`${v} && ${v} !== true && ${k} === ${o} && !${C}`;
        }
      }
      function u() {
        const g = $.formats[l];
        if (!g) {
          c();
          return;
        }
        if (g === !0)
          return;
        const [d, k, v] = f(g);
        d === o && r.pass(y());
        function c() {
          if (S.strictSchema === !1) {
            $.logger.warn(C());
            return;
          }
          throw new Error(C());
          function C() {
            return `unknown format "${l}" ignored in schema at path "${b}"`;
          }
        }
        function f(C) {
          const P = C instanceof RegExp ? (0, e.regexpCode)(C) : S.code.formats ? (0, e._)`${S.code.formats}${(0, e.getProperty)(l)}` : void 0, T = s.scopeValue("formats", { key: l, ref: C, code: P });
          return typeof C == "object" && !(C instanceof RegExp) ? [C.type || "string", C.validate, (0, e._)`${T}.validate`] : ["string", C, T];
        }
        function y() {
          if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
            if (!w.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${v}(${i})`;
          }
          return typeof k == "function" ? (0, e._)`${v}(${i})` : (0, e._)`${v}.test(${i})`;
        }
      }
    }
  };
  return Nn.default = n, Nn;
}
var Cs;
function zc() {
  if (Cs) return Rn;
  Cs = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ jc()).default];
  return Rn.default = t, Rn;
}
var rt = {}, Es;
function Ic() {
  return Es || (Es = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.contentVocabulary = rt.metadataVocabulary = void 0, rt.metadataVocabulary = [
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
var xs;
function Dc() {
  if (xs) return Bt;
  xs = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ec(), t = /* @__PURE__ */ fc(), n = /* @__PURE__ */ Cc(), r = /* @__PURE__ */ Pc(), o = /* @__PURE__ */ Mc(), s = /* @__PURE__ */ Fc(), i = /* @__PURE__ */ zc(), a = /* @__PURE__ */ Ic(), l = [
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
  return Bt.default = l, Bt;
}
var Mn = {}, xt = {}, Ps;
function Lc() {
  if (Ps) return xt;
  Ps = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (xt.DiscrError = e = {})), xt;
}
var As;
function qc() {
  if (As) return Mn;
  As = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = /* @__PURE__ */ Lc(), n = /* @__PURE__ */ Xn(), r = /* @__PURE__ */ Yn(), o = /* @__PURE__ */ ae(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: p } }) => (0, e._)`{error: ${a}, tag: ${p}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: p, schema: h, parentSchema: S, it: b } = a, { oneOf: w } = S;
      if (!b.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const $ = h.propertyName;
      if (typeof $ != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!w)
        throw new Error("discriminator: requires oneOf keyword");
      const m = l.let("valid", !1), u = l.const("tag", (0, e._)`${p}${(0, e.getProperty)($)}`);
      l.if((0, e._)`typeof ${u} == "string"`, () => g(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: $ })), a.ok(m);
      function g() {
        const v = k();
        l.if(!1);
        for (const c in v)
          l.elseIf((0, e._)`${u} === ${c}`), l.assign(m, d(v[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: $ }), l.endIf();
      }
      function d(v) {
        const c = l.name("valid"), f = a.subschema({ keyword: "oneOf", schemaProp: v }, c);
        return a.mergeEvaluated(f, e.Name), c;
      }
      function k() {
        var v;
        const c = {}, f = C(S);
        let y = !0;
        for (let z = 0; z < w.length; z++) {
          let F = w[z];
          if (F?.$ref && !(0, o.schemaHasRulesButRef)(F, b.self.RULES)) {
            const O = F.$ref;
            if (F = n.resolveRef.call(b.self, b.schemaEnv.root, b.baseId, O), F instanceof n.SchemaEnv && (F = F.schema), F === void 0)
              throw new r.default(b.opts.uriResolver, b.baseId, O);
          }
          const q = (v = F?.properties) === null || v === void 0 ? void 0 : v[$];
          if (typeof q != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${$}"`);
          y = y && (f || C(F)), P(q, z);
        }
        if (!y)
          throw new Error(`discriminator: "${$}" must be required`);
        return c;
        function C({ required: z }) {
          return Array.isArray(z) && z.includes($);
        }
        function P(z, F) {
          if (z.const)
            T(z.const, F);
          else if (z.enum)
            for (const q of z.enum)
              T(q, F);
          else
            throw new Error(`discriminator: "properties/${$}" must have "const" or "enum"`);
        }
        function T(z, F) {
          if (typeof z != "string" || z in c)
            throw new Error(`discriminator: "${$}" values must be unique strings`);
          c[z] = F;
        }
      }
    }
  };
  return Mn.default = i, Mn;
}
var On = {};
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
}, Ll = "https://json-schema.org/draft/2020-12/schema", ql = "https://json-schema.org/draft/2020-12/meta/meta-data", Vl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Bl = "meta", Ul = "Meta-data vocabulary meta-schema", Kl = ["object", "boolean"], Hl = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Gl = {
  $schema: Ll,
  $id: ql,
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
var Rs;
function rd() {
  if (Rs) return On;
  Rs = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = Xc, t = il, n = hl, r = _l, o = Nl, s = Dl, i = Gl, a = nd, l = ["/properties"];
  function p(h) {
    return [
      e,
      t,
      n,
      r,
      o,
      S(this, s),
      i,
      S(this, a)
    ].forEach((b) => this.addMetaSchema(b, void 0, !1)), this;
    function S(b, w) {
      return h ? b.$dataMetaSchema(w, l) : w;
    }
  }
  return On.default = p, On;
}
var Ns;
function od() {
  return Ns || (Ns = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Za(), r = /* @__PURE__ */ Dc(), o = /* @__PURE__ */ qc(), s = /* @__PURE__ */ rd(), i = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(w = {}) {
        super({
          ...w,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: w, meta: $ } = this.opts;
        $ && (s.default.call(this, w), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ Jn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var p = /* @__PURE__ */ se();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return p._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return p.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return p.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return p.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return p.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return p.CodeGen;
    } });
    var h = /* @__PURE__ */ jr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var S = /* @__PURE__ */ Yn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return S.default;
    } });
  })(It, It.exports)), It.exports;
}
var sd = /* @__PURE__ */ od();
const id = /* @__PURE__ */ ja(sd), ad = "https://json-schema.org/draft/2020-12/schema", cd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", ld = "gufe-viz payload", dd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", ud = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], fd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Lr = {
  $schema: ad,
  $id: cd,
  title: ld,
  description: dd,
  oneOf: ud,
  $defs: fd
}, gp = [
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
], qr = Lr.$id, Vr = new id({ allErrors: !0, strict: !1 });
Vr.addSchema(Lr, qr);
const Ms = Vr.getSchema(qr), Ni = Object.entries(Lr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), yp = Ni, Br = /* @__PURE__ */ new Map();
for (const e of Ni) {
  const t = Vr.getSchema(`${qr}#/$defs/${e}`);
  t && Br.set(e, t);
}
const kr = { valid: !0, issues: [] };
function Cr(e) {
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
  const t = e.type, n = typeof t == "string" ? Br.get(t) : void 0;
  return n ? n(e) ? kr : { valid: !1, issues: Cr(n.errors) } : Ms(e) ? kr : { valid: !1, issues: Cr(Ms.errors) };
}
function $p(e, t) {
  const n = Br.get(e);
  return n ? n(t) ? kr : { valid: !1, issues: Cr(n.errors) } : {
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
const Ur = {
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
function Mi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Ur[t]) return md(t);
  const { valid: n, issues: r } = pd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: hd(r)
  };
}
function md(e) {
  const t = Object.keys(Ur).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function vp(e) {
  return Mi(e)?.message ?? null;
}
class gd extends Ne {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    da("payload", n, this);
    const r = Mi(n);
    if (r)
      return t.appendChild(yd(r, n)), {};
    const o = n.type, s = Ur[o], i = document.createElement(s);
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
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};` : `background:${M.panelBg};color:${M.textMuted2};border:1px solid ${M.cardBorder};`),
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
Me("gufe-view", gd);
const fr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, Kr = {
  threeDmol: `https://unpkg.com/3dmol@${fr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${fr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${fr.d3}/+esm`
};
function Hr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Oi(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let at = null, ft = null;
function Gr() {
  if (ft) return ft;
  const e = Hr("threeDmol");
  return e ? (ft = e.then((t) => at = t || window.$3Dmol), ft) : (ft = (async () => {
    if (window.$3Dmol) return at = window.$3Dmol;
    if (await Oi(Kr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return at = window.$3Dmol;
  })(), ft);
}
let pt = null;
function Zn() {
  if (pt) return pt;
  const e = Hr("rdkit");
  return e ? (pt = e.then((t) => window.RDKit = t), pt) : (pt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Oi(Kr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), pt);
}
let pr = null;
function Ti() {
  if (!pr) {
    const e = Kr.d3;
    pr = Hr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return pr;
}
function Fi(e, t) {
  let n = !1, r = !1;
  const o = () => {
    n = !0;
  }, s = () => {
    n = !1;
  }, i = (a) => {
    a.stopPropagation();
    const l = a.ctrlKey || a.metaKey;
    if (n || l) {
      (t.onZoom(a) !== !1 || l) && a.preventDefault();
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
function Os(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Sd) - t;
}
function kd(e, t = _d) {
  const n = Os(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const s = () => {
    if (!r) return o;
    const i = Os(e);
    return Number.isFinite(i) && i > 0 ? n / i : o;
  };
  return {
    zoomBy(i) {
      const a = s(), l = Math.min(t.max, Math.max(t.min, a * i)), p = l / a;
      return !Number.isFinite(p) || Math.abs(p - 1) < 1e-9 ? !1 : (o = l, e.zoom(p), e.render(), !0);
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: s
  };
}
const Cd = 2e-3;
function ji(e) {
  return Math.exp(-e.deltaY * Cd);
}
function Wr(e, t, n = {}) {
  const r = kd(t, n.bounds), o = Fi(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (s) => r.zoomBy(ji(s))
  });
  return { ...r, cleanup: o.cleanup };
}
function Jr(e, t = "Reset view") {
  const n = j("button", _t, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const hr = {
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
], bp = "hsv", U = [0, 0, 0], xd = {
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
}, Pd = "rdkit", Ad = !0, Rd = !0, Nd = !0, Md = !0, Od = "rdkit", Td = "filled", Fd = 0.42, jd = 1.5, zd = !0, Id = "show", Dd = "mono", Ld = 0.51, qd = 0.74, Vd = 1.6, Bd = 1.7, Ud = 5, Kd = 0.3, Hd = "#d62828", Gd = "#d62828", Wd = "#015ab5", Jd = !1, Yd = "", Xd = "#7c3aed", Zd = {
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
  numScale: Ld,
  labelScale: qd,
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
  destroyedColor: hr.uniqueAtom,
  createdColor: hr.uniqueAtom,
  modifiedColor: hr.elementChange,
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
const ht = (e, t) => typeof e == "boolean" ? e : t, Tn = (e, t) => typeof e == "string" && iu.test(e) ? e : t;
function au(e) {
  const t = e && typeof e == "object" ? e : {}, n = Qd;
  return {
    version: 1,
    layout: Pt(t.layout, eu, n.layout),
    alignPair: ht(t.alignPair, n.alignPair),
    style: Pt(t.style, tu, n.style),
    createdDestroyed: ht(t.createdDestroyed, n.createdDestroyed),
    modified: ht(t.modified, n.modified),
    destroyedColor: Tn(t.destroyedColor, n.destroyedColor),
    createdColor: Tn(t.createdColor, n.createdColor),
    modifiedColor: Tn(t.modifiedColor, n.modifiedColor),
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
    customColor: Tn(t.customColor, n.customColor)
  };
}
const Fe = au(Zd);
function Ts(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const s = /^([LlRr])[:=](.*)$/.exec(o), i = s ? s[1].toLowerCase() === "l" ? "left" : "right" : "both", a = s ? s[2] : o, l = (h) => {
      i !== "right" && t.add(h), i !== "left" && n.add(h);
    }, p = /^(\d+)-(\d+)$/.exec(a);
    if (p) {
      const h = Math.min(+p[1], +p[2]), S = Math.min(Math.max(+p[1], +p[2]), h + r - 1);
      for (let b = h; b <= S; b++) l(b);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function mr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [s, i] = e.bonds[o], a = t.has(s), l = t.has(i);
    (n ? a || l : a && l) && r.push(o);
  }
  return r;
}
function Fs(e) {
  return `0x${e.replace("#", "")}`;
}
function Er(e) {
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
  const r = new Set(t.atoms), o = new Set(mr(e, r, !0));
  return {
    deletions: mr(e, r, n),
    changes: mr(e, new Set(t.elements), n).filter((s) => !o.has(s))
  };
}
function js(e, t, n, r) {
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
  const a = {}, l = {}, p = {};
  for (const w of n) {
    const $ = Er(w.color);
    if (o === "rdkit") for (const u of w.bonds) p[u] = $;
    if (o === "recolor" && e.circles === "off") continue;
    const m = o === "recolor" && e.circles === "filled" ? cu($, 0.7) : $;
    for (const u of w.atoms)
      a[u] = m, l[u] = e.circleRadius;
  }
  const h = Er(e.customColor);
  for (const w of r)
    w < s && (a[w] = h, l[w] = e.circleRadius);
  const S = Object.keys(a).map(Number);
  S.length && (i.atoms = S, i.highlightAtomColors = a, i.highlightAtomRadii = l);
  const b = Object.keys(p).map(Number);
  return b.length && (i.bonds = b, i.highlightBondColors = p), i;
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
function zi(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Yr(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const s = o.tagName.toLowerCase();
    (s === "ellipse" || s === "circle" || s === "rect") === n && r.push(o);
  }
  return r;
}
function Ii(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function zs(e, t, n, r, o, s) {
  for (const i of r)
    for (const a of zi(e, i)) {
      const l = a.style;
      Ii(a) ? l.fill = o : (l.stroke = o, l.strokeWidth = `${t.markWidth}px`);
    }
  if (s)
    for (const i of n)
      for (const a of Yr(e, i, !1)) a.style.fill = s;
}
function mu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const s = o.createElementNS(hu, "g");
  s.setAttribute("data-gufe-halo", "1"), s.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of zi(e, a)) {
      if (Ii(l)) continue;
      const p = l.cloneNode(!0);
      p.removeAttribute("class"), p.style.fill = "none", p.style.stroke = r, p.style.strokeWidth = `${t.haloWidth}px`, p.style.strokeLinecap = "round", p.style.strokeLinejoin = "round", p.style.strokeOpacity = "1", s.appendChild(p);
    }
  if (!s.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(s, i.nextSibling) : i ? e.appendChild(s) : e.insertBefore(s, e.firstChild);
}
function gu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Yr(e, s, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function yu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Yr(e, s, !0)) {
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
        zs(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? gu(e, n, i.atoms, o, i.color) : a && i.edgeOnFill && yu(e, n, i.atoms, o, i.color);
      } else
        mu(e, n, i.bonds, i.color), zs(e, n, i.atoms, i.bonds, i.color, null);
  $u(e, t, n);
}
const Qn = `
`, xr = "$$$$";
function Pr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Qn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), s = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const i = [], a = [];
  for (let h = 0; h < o; h++) {
    const S = n[4 + h];
    if (S == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(S.substring(0, 10)) || 0,
      parseFloat(S.substring(10, 20)) || 0,
      parseFloat(S.substring(20, 30)) || 0
    ]), a.push(S.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let h = 0; h < (isFinite(s) ? s : 0); h++) {
    const S = n[4 + o + h];
    if (S == null) break;
    const b = parseInt(S.substring(0, 3), 10), w = parseInt(S.substring(3, 6), 10), $ = parseInt(S.substring(6, 9), 10);
    !isFinite(b) || !isFinite(w) || l.push([b - 1, w - 1, isFinite($) ? $ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: i };
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
  return r.push("M  END"), r.join(Qn);
}
const wu = (e) => `${bu(e)}${Qn}${xr}`, _u = (e) => e.indexOf(xr) >= 0 ? e : `${e}${Qn}${xr}`;
function Di(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Li(e, t, n, r, o) {
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
      for (const p of o.atoms)
        i[p] = o.color, a[p] = o.radius;
      const l = {
        width: n,
        height: n,
        atoms: [...o.atoms],
        highlightAtomColors: i,
        highlightAtomRadii: a
      };
      return s.get_svg_with_highlights(JSON.stringify(l)) || null;
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
const Is = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Ar = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, gt = (e) => e in Ar, Ds = 400, gr = "position:absolute;inset:0;min-width:0;min-height:0;";
class Su extends Ne {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", s = n.smiles, i = n.total_charge, a = j("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const l = j(
      "div",
      `${gr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${$t.canvas2D};`
    );
    a.appendChild(l);
    const p = mi();
    p.wrap.style.cssText = gr, a.appendChild(p.wrap);
    const h = j(
      "div",
      `${gr}overflow:auto;padding:16px 20px;background:${M.panelBg};color:${M.textPrimary};font-size:${Z.body};`
    );
    a.appendChild(h);
    const S = r ? Di(r) : null, b = [
      ["Name", o || ot, !1],
      ["SMILES", s || ot, !0],
      ["Charge", i == null ? ot : String(i), !1],
      ["Atoms", S ? String(S.atoms) : ot, !1],
      ["Bonds", S ? String(S.bonds) : ot, !1]
    ], w = j("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${oe.xl} 20px;align-items:baseline;`);
    h.appendChild(w);
    for (const [z, F, q] of b) {
      w.appendChild(
        j(
          "div",
          `font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${M.textMuted2};`,
          z
        )
      );
      const O = j(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${M.textPrimary}` + (q ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Z.small};` : ""),
        F
      );
      O.title = F, w.appendChild(O);
    }
    const $ = yi(t), m = j("div", Sr, o || "Unnamed molecule");
    $ && a.appendChild(m);
    const u = wt(
      "small-molecule.mode",
      "2d",
      Is.map((z) => z.id)
    ), g = vt("small-molecule.spin", !1);
    let d = u.get(), k = g.get(), v = null, c = null;
    const f = () => {
      try {
        v?.spin(k && gt(d) ? "y" : !1);
      } catch {
      }
    }, y = (z) => {
      d = z, l.style.visibility = d === "2d" ? "visible" : "hidden", p.wrap.style.visibility = gt(d) ? "visible" : "hidden", h.style.visibility = d === "info" ? "visible" : "hidden", m.style.display = d === "info" || !$ ? "none" : "block", T.disabled = !gt(d), T.style.opacity = gt(d) ? "1" : "0.5", gt(d) && v && (v.setStyle({}, Ar[d]), v.resize(), v.render()), f();
    }, C = j("div", ci), P = Un(Is, d, (z) => y(z), u), T = hi(
      "Spin",
      k,
      (z) => {
        k = z, f();
      },
      { title: "Toggle continuous rotation", remember: g }
    );
    return P.insertBefore(T, P.lastElementChild), C.appendChild(P), a.appendChild(C), y(d), !r || !r.trim() ? (l.appendChild(fe("No molecule provided")), p.container.appendChild(fe("No molecule provided")), {}) : (l.appendChild(fe("Loading 2D depiction...")), Zn().then((z) => {
      const F = Li(z, r, Ds, Fe.layout);
      F ? qi(l, F, Ds) : l.replaceChildren(fe("Failed to parse molecule", !0));
    }).catch((z) => {
      l.replaceChildren(fe(`RDKit failed to load: ${he(z)}`, !0));
    }), p.container.appendChild(fe("Loading 3D viewer...")), Gr().then(() => {
      p.container.replaceChildren(), v = at.createViewer(p.container, { backgroundColor: $t.viewer }), v.addModel(_u(r), "sdf"), v.setStyle({}, Ar[gt(d) ? d : "stick"]), v.zoomTo(), v.render(), c = Wr(p.container, v), f();
    }).catch((z) => {
      p.container.replaceChildren(fe(`3D render failed: ${he(z)}`, !0));
    }), {
      onResize() {
        v && (v.resize(), v.render());
      },
      cleanup() {
        if (c?.cleanup(), c = null, !!v) {
          try {
            v.spin(!1);
          } catch {
          }
          try {
            v.clear();
          } catch {
          }
          v = null;
        }
      }
    });
  }
}
Me("gufe-small-molecule", Su);
const Vi = ["HOH", "WAT", "SOL", "TIP3"], Ls = { hetflag: !1 }, ku = { hetflag: !0 }, Cu = { resn: Vi }, We = {
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
  for (const l of e.split(/\r?\n/)) {
    const p = l.slice(0, 6);
    if (p === "ENDMDL") break;
    if (p !== "ATOM  " && p !== "HETATM") continue;
    r++, p === "HETATM" && o++;
    const h = l.slice(17, 20).trim(), S = l.slice(21, 22).trim() || "_", b = l.slice(22, 26).trim(), w = l.slice(26, 27).trim();
    Vi.indexOf(h) !== -1 && s++, t.add(S), n.add(`${S}|${b}${w}|${h}`);
    const $ = parseInt(b, 10);
    isNaN($) || ($ < i && (i = $), $ > a && (a = $));
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
    Ls,
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
        e.addSurface(at.SurfaceType.VDW, { opacity: We.surfaceOpacity, ...s }, Ls)
      ).then(() => {
        o(null), e.render();
      }).catch((i) => o(`Surface failed: ${he(i)}`, "error"));
    } catch (i) {
      o(`Surface failed: ${he(i)}`, "error");
    }
  }, 30);
}
const Vs = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Bs = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Au extends Ne {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, o = n.name ?? "", s = n.type !== "ProteinComponentViz", i = wt(
      "protein.representation",
      "cartoon",
      Vs.map((C) => C.id)
    ), a = wt(
      "protein.color",
      "chain",
      Bs.map((C) => C.id)
    ), l = vt("protein.waters", s), p = vt("protein.hetero", !0), h = vt("protein.spin", !1), S = {
      rep: i.get(),
      color: a.get(),
      waters: l.get(),
      hetero: p.get(),
      spin: h.get()
    };
    let b = null, w = null, $ = null;
    const m = j(
      "div",
      Or.top
    );
    t.appendChild(m), m.appendChild(
      j("span", `font-weight:700;font-size:${Z.heading};letter-spacing:.02em;color:${M.titleColor};`, o || "Protein")
    );
    const u = (C) => j("span", `font-size:${Z.small};color:${M.textMuted};`, C);
    m.appendChild(u("Style:")), m.appendChild(
      Un(
        Vs,
        S.rep,
        (C) => {
          S.rep = C, y();
        },
        i
      )
    ), m.appendChild(u("Color:")), m.appendChild(
      Kn(
        Bs,
        S.color,
        (C) => {
          S.color = C, y();
        },
        a
      )
    );
    const g = j("div", "display:flex;gap:4px;");
    m.appendChild(g);
    const d = [
      ["waters", "Waters", "Show water molecules", l, () => y()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", p, () => y()],
      ["spin", "Spin", "Rotate the view continuously", h, () => b?.spin(S.spin ? "y" : !1)]
    ];
    for (const [C, P, T, z, F] of d)
      g.appendChild(
        hi(
          P,
          S[C],
          (q) => {
            S[C] = q, F();
          },
          { title: T, remember: z }
        )
      );
    g.appendChild(Jr(() => w?.reset()));
    const k = j("span", `margin-left:auto;font-size:${Z.small};white-space:nowrap;color:${M.textMuted2};`);
    m.appendChild(k);
    const v = mi();
    t.appendChild(v.wrap);
    const c = j(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Z.body};z-index:20;display:none;pointer-events:none;`
    );
    v.wrap.appendChild(c);
    const f = (C, P) => {
      if (C == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = C, c.style.display = "block";
      const T = P === "error";
      c.style.background = T ? M.warnBg : M.toolbarBg, c.style.color = T ? M.warnFg : M.textMuted, c.style.border = `1px solid ${T ? M.warnBorder : M.toolbarBorder}`;
    };
    function y() {
      b && qs(b, S, $, f);
    }
    if (!r || !r.trim())
      return f("No protein data - waiting for a PDB payload."), {};
    try {
      $ = Eu(r), k.textContent = xu($);
    } catch (C) {
      f(`⚠ PDB parse error: ${he(C)}`, "error");
    }
    return f("Loading 3D viewer..."), Gr().then(() => {
      b = at.createViewer(v.container, { backgroundColor: $t.viewer }), b.addModel(r, "pdb"), qs(b, S, $, f), b.zoomTo(), b.spin(S.spin ? "y" : !1), b.render(), w = Wr(v.container, b);
    }).catch((C) => {
      f(`⚠ Failed to render structure: ${he(C)}`, "error");
    }), {
      onResize() {
        b && (b.resize(), b.render());
      },
      cleanup() {
        if (w?.cleanup(), w = null, !!b) {
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
    };
  }
}
Me("gufe-protein", Au);
function jt(e) {
  const t = /* @__PURE__ */ new Map();
  return Rr(e, t, /* @__PURE__ */ new Set()), t;
}
function Rr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Rr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const s = o["gufe-key"];
      typeof s == "string" && s && !t.has(s) && t.set(s, o);
    }
  for (const o of Object.values(e)) Rr(o, t, n);
}
function Xe(e, t) {
  return t ? e.get(t) : void 0;
}
function _e(e, t, n) {
  const r = Xe(e, t);
  return r?.type === n ? r : void 0;
}
function Xr(e, t) {
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
const Zr = "Cmd/Ctrl-click to select several.";
function Ru(e, t, n, r, o) {
  const s = (i) => o === "keys" ? i["gufe-key"] : Ze(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(s).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${s(i.from)}, ${s(i.to)}`).join(`
`);
}
function Nu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Us(e, t)), navigator.clipboard || Us(e, t);
}
function Us(e, t) {
  const n = j("textarea", `width:100%;height:80px;font-size:${Z.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Mu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = j("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Bi(e) {
  const { words: t } = e, n = wt(e.setting, "names", ["names", "keys"]), r = j("div", "display:flex;flex-direction:column;gap:6px;"), o = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${M.textMuted};`);
  o.appendChild(j("span", "", "copy as"));
  const s = Kn(
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
  const i = j("div", `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};`), a = (h) => {
    i.textContent = h;
  }, l = j("div", "display:flex;gap:4px;"), p = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [h, S, b] of p) {
    const w = j("button", `${_t}flex:1;`, S.button);
    w.title = b, w.onclick = ($) => {
      const m = s.value, u = Ru(e.nodes, e.edges, e.selected, h, m);
      if (!u) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : h === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Zr}` : "Nothing to copy."
        );
        return;
      }
      const g = u.split(`
`).length;
      $.shiftKey ? (Mu(u, `selected-${S.plural}.txt`), a(`Saved ${g} ${S.plural} to a file.`)) : (Nu(u, r), a(
        h === "edges" ? `Copied ${g} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, l.appendChild(w);
  }
  return r.appendChild(l), r.appendChild(i), r.appendChild(j("div", `font-size:${Z.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Ui = "http://www.w3.org/2000/svg";
function ce(e, t = {}) {
  const n = document.createElementNS(Ui, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function Ks(e, t) {
  const n = document.createElementNS(Ui, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Ou = 3;
function Ki(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), s = Math.max(s, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: s + t, maxY: i + n };
}
const Tu = { min: 0.15, max: 5 }, Fu = 1e-9;
function Hi(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? Tu;
  let s = 1, i = 0, a = 0;
  const l = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${s})`), n.onTransform?.(s, i, a);
  }, p = () => {
    const O = e.getBoundingClientRect();
    return {
      width: O.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: O.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, h = (O, G, Y) => Math.min(1, G / (O.maxX - O.minX + r * 2), Y / (O.maxY - O.minY + r * 2)), S = () => {
    const O = n.bounds();
    if (!O) return o.min;
    const { width: G, height: Y } = p();
    return Math.min(o.min, h(O, G, Y));
  }, b = (O) => Math.min(o.max, Math.max(S(), s * O)), w = () => {
    s = 1, i = 0, a = 0;
    const O = n.bounds();
    if (!O) {
      l();
      return;
    }
    const { width: G, height: Y } = p();
    s = h(O, G, Y), i = G / 2 - (O.minX + O.maxX) / 2 * s, a = Y / 2 - (O.minY + O.maxY) / 2 * s, l();
  }, m = Fi(e, {
    onZoom: (O) => {
      const G = e.getBoundingClientRect(), Y = O.clientX - G.left, re = O.clientY - G.top, X = b(ji(O)), W = X / s;
      return i = Y - (Y - i) * W, a = re - (re - a) * W, s = X, l(), Math.abs(W - 1) > Fu;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  }), u = /* @__PURE__ */ new Map();
  let g = null, d = null, k = !1, v = null;
  const c = (O) => ({
    x: O.clientX - i,
    y: O.clientY - a,
    from: { x: O.clientX, y: O.clientY }
  }), f = (O) => {
    O.pointerType === "touch" && u.size > 1 || (d = c(O), k = !1);
  }, y = (O) => {
    g || (v && O.pointerType === "touch" && (d = { x: v.x - i, y: v.y - a, from: v }, v = null), d && (Math.hypot(O.clientX - d.from.x, O.clientY - d.from.y) > Ou && (k = !0), i = O.clientX - d.x, a = O.clientY - d.y, l()));
  }, C = () => {
    d = null;
  };
  e.addEventListener("pointerdown", f), e.addEventListener("pointermove", y), e.addEventListener("pointerup", C), e.addEventListener("pointercancel", C), e.addEventListener("pointerleave", C);
  const P = () => {
    const [O, G] = [...u.values()];
    return { cx: (O.x + G.x) / 2, cy: (O.y + G.y) / 2, span: Math.max(1, Math.hypot(O.x - G.x, O.y - G.y)) };
  }, T = (O) => {
    if (O.pointerType === "touch") {
      if (u.set(O.pointerId, { x: O.clientX, y: O.clientY }), u.size !== 2) {
        g = null;
        return;
      }
      g = P(), d = null, k = !0;
    }
  }, z = (O) => {
    if (O.pointerType !== "touch" || !u.has(O.pointerId) || (u.set(O.pointerId, { x: O.clientX, y: O.clientY }), !g || u.size !== 2)) return;
    O.preventDefault(), O.stopPropagation();
    const G = P(), Y = e.getBoundingClientRect(), re = b(G.span / g.span), X = re / s;
    i = G.cx - Y.left - (g.cx - Y.left - i) * X, a = G.cy - Y.top - (g.cy - Y.top - a) * X, s = re, g = G, l();
  }, F = (O) => {
    if (O.pointerType !== "touch") return;
    if (u.delete(O.pointerId), u.size === 2) {
      g = P();
      return;
    }
    g = null;
    const [G] = [...u.values()];
    v = u.size === 1 && G ? { ...G } : null;
  };
  e.addEventListener("pointerdown", T, !0), e.addEventListener("pointermove", z, { capture: !0, passive: !1 }), e.addEventListener("pointerup", F, !0), e.addEventListener("pointercancel", F, !0);
  const q = vd(e);
  return {
    fit: w,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: w,
    centreOn(O, G, Y = 1) {
      const { width: re, height: X } = p();
      s = Math.max(s, Y), i = re / 2 - O * s, a = X / 2 - G * s, l();
    },
    transform: () => ({ scale: s, tx: i, ty: a }),
    wasPan: () => k,
    gesturing: () => u.size > 1,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(O, G, Y) {
      s = O, i = G, a = Y, l();
    },
    cleanup() {
      m.cleanup(), q.cleanup(), e.removeEventListener("pointerdown", f), e.removeEventListener("pointermove", y), e.removeEventListener("pointerup", C), e.removeEventListener("pointercancel", C), e.removeEventListener("pointerleave", C), e.removeEventListener("pointerdown", T, !0), e.removeEventListener("pointermove", z, { capture: !0 }), e.removeEventListener("pointerup", F, !0), e.removeEventListener("pointercancel", F, !0);
    }
  };
}
const ju = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Gi(e) {
  const t = { ...e };
  for (const n of ju) delete t[n];
  return t;
}
const zu = 8, Iu = 64, Du = () => new Promise((e) => setTimeout(e, 0));
function Nr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Lu(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const s = o.get_substruct_matches(t), i = JSON.parse(s || "[]");
    if (!Array.isArray(i)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const l of i) {
      const p = l.atoms;
      if (Array.isArray(p))
        for (const h of p) typeof h == "number" && a.add(h);
    }
    return [...a].sort((l, p) => l - p);
  } catch (s) {
    return console.warn("[gufe-viz] SMARTS match threw -", he(s)), null;
  } finally {
    Nr(o);
  }
}
function Wi(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (i) => {
    const a = i.trim(), l = ++o;
    if (!a) return { status: "cleared" };
    const p = r.get(a);
    if (p) return { status: "ok", matched: p, unreadable: 0 };
    const h = await e();
    if (l !== o) return { status: "superseded" };
    if (!h) return { status: "unsupported" };
    if (!h.get_qmol) return { status: "unsupported" };
    let S = null;
    try {
      S = h.get_qmol(a);
    } catch {
      S = null;
    }
    if (!S) return { status: "invalid" };
    if (!S.get_substruct_matches)
      return Nr(S), { status: "unsupported" };
    const b = /* @__PURE__ */ new Map();
    let w = 0;
    try {
      let $ = performance.now(), m = 0;
      for (let u = 0; u < t.length; u++) {
        const g = t[u] ? Lu(h, S, t[u], n) : null;
        if (g ? g.length && b.set(u, g) : w++, !(++m < Iu && performance.now() - $ < zu)) {
          if (await Du(), l !== o) return { status: "superseded" };
          m = 0, $ = performance.now();
        }
      }
    } finally {
      Nr(S);
    }
    return r.set(a, b), { status: "ok", matched: b, unreadable: w };
  }, cancel: () => void ++o };
}
const qu = 250;
function Ji(e) {
  const t = j("div", "display:flex;flex-direction:column;gap:8px;"), n = j("input", `${Bn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = j("div", `font-size:${Z.tiny};line-height:1.5;min-height:1.5em;color:${M.textMuted2};`);
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
      (l) => {
        l.status !== "superseded" && (r.textContent = o(l));
      },
      () => {
        r.textContent = "Matching failed.";
      }
    );
  };
  let i = 0;
  return n.oninput = () => {
    e.remember.set(n.value), window.clearTimeout(i), i = window.setTimeout(() => s(n.value), qu);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && s(n.value);
    }
  };
}
const Vu = 1e-6;
function Fn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function Hs(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Bu(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Gs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const s = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = s[i][0], l = s[i][1], p = t[a * 3 + l];
      if (Math.abs(p) < 1e-14) continue;
      const h = t[a * 3 + a], S = t[l * 3 + l], b = (S - h) / (2 * p);
      let w;
      Math.abs(b) > 1e10 ? w = 1 / (2 * b) : w = (b >= 0 ? 1 : -1) / (Math.abs(b) + Math.sqrt(b * b + 1));
      const $ = 1 / Math.sqrt(1 + w * w), m = w * $;
      t[a * 3 + a] = h - w * p, t[l * 3 + l] = S + w * p, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== l) {
          const g = t[u * 3 + a], d = t[u * 3 + l];
          t[u * 3 + a] = $ * g - m * d, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + l] = m * g + $ * d, t[l * 3 + u] = t[u * 3 + l];
        }
      for (let u = 0; u < 3; u++) {
        const g = n[u * 3 + a], d = n[u * 3 + l];
        n[u * 3 + a] = $ * g - m * d, n[u * 3 + l] = m * g + $ * d;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Uu(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let v = 0; v < n; v++)
    r[0] += e[v][0], r[1] += e[v][1], r[2] += e[v][2], o[0] += t[v][0], o[1] += t[v][1], o[2] += t[v][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]], determined: !1 };
  const s = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let v = 0; v < n; v++) {
    const c = e[v][0] - r[0], f = e[v][1] - r[1], y = e[v][2] - r[2], C = t[v][0] - o[0], P = t[v][1] - o[1], T = t[v][2] - o[2];
    s[0] += c * C, s[1] += c * P, s[2] += c * T, s[3] += f * C, s[4] += f * P, s[5] += f * T, s[6] += y * C, s[7] += y * P, s[8] += y * T;
  }
  const i = Hs(s), a = Fn(i, s), l = Fn(s, i);
  let p = Gs(a), h = Gs(l);
  function S(v) {
    const c = [0, 1, 2].sort((y, C) => v.values[C] - v.values[y]), f = new Array(9);
    for (let y = 0; y < 3; y++) {
      const C = c[y];
      f[y] = v.vectors[C], f[3 + y] = v.vectors[3 + C], f[6 + y] = v.vectors[6 + C];
    }
    return {
      values: [v.values[c[0]], v.values[c[1]], v.values[c[2]]],
      vectors: f
    };
  }
  p = S(p), h = S(h);
  const b = p.vectors, w = h.vectors;
  for (let v = 0; v < 3; v++) {
    const c = b[v], f = b[3 + v], y = b[6 + v], C = s[0] * c + s[1] * f + s[2] * y, P = s[3] * c + s[4] * f + s[5] * y, T = s[6] * c + s[7] * f + s[8] * y, z = w[v], F = w[3 + v], q = w[6 + v];
    C * z + P * F + T * q < 0 && (w[v] = -z, w[3 + v] = -F, w[6 + v] = -q);
  }
  const $ = Hs(b);
  let m = Fn(w, $);
  Bu(m) < 0 && (w[2] = -w[2], w[5] = -w[5], w[8] = -w[8], m = Fn(w, $));
  const u = m[0] * o[0] + m[1] * o[1] + m[2] * o[2], g = m[3] * o[0] + m[4] * o[1] + m[5] * o[2], d = m[6] * o[0] + m[7] * o[1] + m[8] * o[2], k = p.values[1] > Vu * p.values[0];
  return { R: m, t: [r[0] - u, r[1] - g, r[2] - d], determined: k };
}
function Ku(e, t, n) {
  const r = e[0], o = e[1], s = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * s + n[0],
    t[3] * r + t[4] * o + t[5] * s + n[1],
    t[6] * r + t[7] * o + t[8] * s + n[2]
  ];
}
const Ws = `
`, yr = 4;
function Js(e, t, n) {
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
  for (const [h, S] of n) {
    const b = e[S], w = t[h];
    !b || !w || (r.push(b), o.push(w));
  }
  if (r.length < 2) return null;
  const s = (h) => {
    let S = 0, b = 0;
    for (const w of h)
      S += w[0], b += w[1];
    return [S / h.length, b / h.length];
  }, i = s(r), a = s(o);
  let l = null, p = -1 / 0;
  for (const h of [!1, !0]) {
    let S = 0, b = 0;
    for (let d = 0; d < r.length; d++) {
      const k = (h ? -1 : 1) * (r[d][0] - i[0]), v = r[d][1] - i[1], c = o[d][0] - a[0], f = o[d][1] - a[1];
      S += k * f - v * c, b += k * c + v * f;
    }
    const w = Math.hypot(S, b);
    if (w <= p) continue;
    p = w;
    const $ = Math.atan2(S, b), m = Math.cos($), u = Math.sin($), g = (h ? -1 : 1) * i[0];
    l = {
      cos: m,
      sin: u,
      mirror: h,
      tx: a[0] - (m * g - u * i[1]),
      ty: a[1] - (u * g + m * i[1])
    };
  }
  return l;
}
function Gu(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Wu(e, t, n) {
  const r = Di(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(Ws);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let s = 0; s < r.atoms; s++) {
    const i = o[yr + s], a = t[s];
    if (i == null || !a) return e;
    o[yr + s] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = yr + r.atoms + a, p = o[l];
      if (p == null) break;
      const h = parseInt(p.substring(9, 12), 10);
      h !== 1 && h !== 6 || (o[l] = p.substring(0, 9) + String(h === 1 ? 6 : 1).padStart(3) + p.substring(12));
    }
  return o.join(Ws);
}
function Ju(e, t, n) {
  try {
    const r = (i) => Pr(i).coords.map((a) => [a[0], a[1]]), o = r(t), s = Hu(o, r(e), n);
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
  const s = Js(e, t, r), i = Js(e, n, r);
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
const $r = Qu() ? Xu : Zu, Ys = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], vr = 420, ef = {
  mapped: null,
  element: Fe.modifiedColor,
  uniqueA: Fe.destroyedColor,
  uniqueB: Fe.createdColor
}, tf = 132, qe = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, br = { gap: 2.5, minLiftFraction: 0.6 }, nf = 24, Tt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Xs(e, t, n) {
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
    const l = n[a] ?? "";
    r.push({ kind: i === l ? "mapped" : "element", a: s, b: a, symbolA: i, symbolB: l });
  }
  const o = new Set(e.values());
  for (let s = 0; s < n.length; s++)
    o.has(s) || r.push({ kind: "uniqueB", a: null, b: s, symbolA: "", symbolB: n[s] ?? "" });
  return r;
}
function Yi(e, t) {
  const n = _e(t, e.componentA, "SmallMoleculeComponentViz"), r = _e(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Xr(t, [e.componentA, e.componentB]) };
}
function sf(e, t, n) {
  const r = [], o = [];
  for (const [i, a] of n) {
    const l = e.coords[i], p = t.coords[a];
    l && p && (r.push(l), o.push(p));
  }
  const s = Uu(r, o);
  return s?.determined ? { ...t, coords: t.coords.map((i) => Ku(i, s.R, s.t)) } : t;
}
function Zs(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function af(e, t) {
  const n = Zs(e), r = Zs(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const s = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[o] - r.min[o] + br.gap, a = br.minLiftFraction * s + br.gap;
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
  return (r > Tt.minSpread ? r : Tt.minSpread) * Tt.spreadFactor;
}
function lf(e, t) {
  const n = Ed, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), s = Math.floor(o), i = Math.min(s + 1, n.length - 1), a = o - s;
  let l = "0x";
  for (let p = 0; p < 3; p++) {
    const h = (b) => parseInt(b.slice(1 + p * 2, 3 + p * 2), 16), S = Math.round(h(n[s]) + (h(n[i]) - h(n[s])) * a);
    l += S.toString(16).padStart(2, "0");
  }
  return l;
}
class df extends Ne {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = jt(n), o = _e(r, n.componentA, "SmallMoleculeComponentViz"), s = _e(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !s)
      return t.appendChild(
        fe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = Ze(o), a = Ze(s), l = rf(n);
    let p, h;
    try {
      p = Pr(o.sdf, i), h = Pr(s.sdf, a);
    } catch (W) {
      return t.appendChild(fe(`Could not read a molecule: ${he(W)}`, !0)), {};
    }
    h = sf(p, h, l);
    const S = /* @__PURE__ */ new Map();
    for (const [W, L] of l) S.set(L, W);
    const b = Xs(l, p.symbols, h.symbols), w = Xs(S, h.symbols, p.symbols), $ = yi(t), m = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(m);
    const u = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    m.appendChild(u);
    const g = wt("atom-mapping.mode", "plain", Ys.map((W) => W.id));
    let d = g.get();
    const k = j(
      "div",
      ci
    );
    k.appendChild(
      Un(
        Ys,
        d,
        (W) => {
          d = W, X();
        },
        g
      )
    ), m.appendChild(k);
    let v = [], c = 0, f = !0;
    const y = () => {
      c && cancelAnimationFrame(c), c = 0;
      for (const W of v) {
        W.interaction?.cleanup();
        try {
          W.viewer?.clear();
        } catch {
        }
      }
      v = [], u.replaceChildren();
    }, C = (W) => {
      const L = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), A = j("div", "flex:1;position:relative;min-height:0;");
      A.dataset.gufeViewer = "", L.appendChild(A), $ && L.appendChild(j("div", Sr, W)), u.appendChild(L);
      const D = { container: A, viewer: null, interaction: null };
      return v.push(D), D;
    }, P = () => {
      if (v.length < 2) return;
      const W = v.map(() => "");
      let L = !1;
      const A = () => {
        if (f) {
          if (!L)
            for (let D = 0; D < v.length; D++) {
              const R = v[D].viewer;
              if (!R) continue;
              const _ = JSON.stringify(R.getView());
              if (_ !== W[D]) {
                L = !0;
                for (let E = 0; E < v.length; E++)
                  E !== D && v[E].viewer && (v[E].viewer.setView(R.getView()), v[E].viewer.render()), W[E] = _;
                L = !1;
                break;
              }
            }
          c = requestAnimationFrame(A);
        }
      };
      c = requestAnimationFrame(A);
    }, T = (W, L) => {
      const A = at.createViewer(W.container, { backgroundColor: $t.viewer });
      for (const { mol: D } of L) A.addModel(wu(D), "sdf");
      return W.viewer = A, A;
    }, z = (W) => {
      W.viewer && (W.interaction = Wr(W.container, W.viewer));
    }, F = () => {
      for (const W of [p, h]) {
        const L = C(W.name), A = T(L, [{ mol: W }]);
        A.setStyle(
          {},
          { stick: { radius: qe.stick, colorscheme: "Jmol" }, sphere: { scale: qe.sphere, colorscheme: "Jmol" } }
        ), A.zoomTo(), A.render(), z(L);
      }
      P();
    }, q = () => {
      const W = Fe, L = Ts(W.customSpec), A = [
        { mol: p, uniques: b, side: "left", custom: L.left },
        { mol: h, uniques: w, side: "right", custom: L.right }
      ];
      for (const D of A) {
        const R = C(D.mol.name), _ = T(R, [{ mol: D.mol }]);
        _.setStyle(
          {},
          { stick: { radius: qe.stick, color: $r.core }, sphere: { scale: qe.sphere, color: $r.core } }
        );
        const E = (I, V) => {
          _.addStyle(
            { serial: I },
            {
              stick: { radius: qe.markStick, color: Fs(V) },
              sphere: { scale: qe.markSphere, color: Fs(V) }
            }
          );
        };
        for (const I of js(W, D.mol, D.uniques, D.side))
          for (const V of I.atoms) E(V, I.color);
        for (const I of D.custom)
          I < D.mol.symbols.length && E(I, W.customColor);
        _.zoomTo(), _.render(), z(R);
      }
      P();
    }, O = () => {
      const W = C(`${i} (left), both overlaid (middle), ${a} (right)`), L = cf(p.coords, h.coords), A = (ne, ee) => ({
        ...ne,
        coords: ne.coords.map(([x, N, B]) => [x + ee, N, B])
      }), D = A(p, -L), R = A(h, L), _ = T(W, [{ mol: D }, { mol: R }, { mol: p }, { mol: h }]);
      _.setStyle({}, { stick: {} });
      const E = Array.from(l);
      E.forEach(([ne, ee], x) => {
        const N = D.coords[ne], B = R.coords[ee];
        if (!N || !B) return;
        const J = lf(x, E.length);
        for (const [K, Q, te] of [N, B])
          _.addSphere({
            center: { x: K, y: Q, z: te },
            radius: Tt.sphereRadius,
            color: J,
            alpha: Tt.sphereAlpha
          });
      }), _.zoomTo();
      const { clientWidth: I, clientHeight: V } = W.container, H = I - 2 * nf;
      H > 0 && H < V && _.zoom(H / V), _.render(), z(W);
    }, G = () => {
      const W = C(`${i} to ${a}  (${l.size} mapped pairs)`), { axis: L, lift: A } = af(p.coords, h.coords), D = {
        ...h,
        coords: h.coords.map((E) => {
          const I = [E[0], E[1], E[2]];
          return I[L] += A, I;
        })
      }, R = T(W, [{ mol: p }, { mol: D }]), _ = {
        stick: { radius: qe.stick, colorscheme: "Jmol" },
        sphere: { scale: qe.pairSphere, colorscheme: "Jmol" }
      };
      R.setStyle({ model: 0 }, _), R.setStyle({ model: 1 }, _);
      for (const [E, I] of l) {
        const V = p.coords[E], H = D.coords[I];
        !V || !H || R.addCylinder({
          start: { x: V[0], y: V[1], z: V[2] },
          end: { x: H[0], y: H[1], z: H[2] },
          radius: qe.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: $r.pairLine
        });
      }
      R.zoomTo(), L === 2 ? R.rotate(90, "x") : L === 0 && R.rotate(-90, "z"), R.render(), z(W);
    }, Y = () => {
      const W = Fe, L = Ts(W.customSpec), D = [
        { mol: p, uniques: b, side: "left", custom: L.left },
        { mol: h, uniques: w, side: "right", custom: L.right }
      ].map((R) => {
        const _ = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), E = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${$t.canvas2D};`
        );
        return E.appendChild(fe("Loading 2D depiction...")), _.appendChild(E), $ && _.appendChild(j("div", Sr, R.mol.name)), u.appendChild(_), { box: E, side: R };
      });
      Zn().then((R) => {
        const _ = uu(W, R), E = Yu(R, o.sdf, s.sdf, W.layout, W.alignPair ? l : null);
        for (const { box: I, side: V } of D) {
          const H = js(W, V.mol, V.uniques, V.side), ne = fu(
            W,
            vr,
            H,
            V.custom,
            _,
            V.mol.symbols.length
          ), ee = pu(R, V.side === "left" ? E.left : E.right, vr, ne);
          if (I.replaceChildren(), !ee) {
            I.appendChild(fe("Failed to parse molecule", !0));
            continue;
          }
          qi(I, ee, vr);
          const x = I.querySelector("svg");
          x && vu(x, V.mol, W, H, V.custom, _);
        }
      }).catch((R) => {
        for (const { box: _ } of D)
          _.replaceChildren(fe(`RDKit failed to load: ${he(R)}`, !0));
      });
    }, re = () => {
      const W = j(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      u.appendChild(W);
      const L = j("div", "display:flex;flex-direction:column;gap:2px;");
      L.appendChild(
        j(
          "div",
          `font-size:${Z.title};font-weight:${Ue.bold};color:${Pe.title};`,
          n.name || `${i} to ${a}`
        )
      ), L.appendChild(j("div", `font-size:${Z.body};color:${Pe.faint};`, "LigandAtomMapping")), W.appendChild(L);
      const A = of(l, p.symbols, h.symbols), D = j("div", et.row), R = [];
      let _ = null;
      const E = (K, Q, te, ue) => {
        const le = j("button", `${et.plain}${et.button}`);
        le.type = "button", le.appendChild(Re(K, String(Q), ue)), le.onclick = () => {
          _ = _ === te ? null : te, B();
        }, R.push({ button: le, kinds: te }), D.appendChild(le);
      }, I = (K, Q) => {
        const te = j("span", et.plain);
        te.appendChild(Re(K, Q)), D.appendChild(te);
      };
      E("mapped atoms", l.size, ["mapped", "element"]), E("element changes", b.elements.length, ["element"], Fe.modifiedColor), E(`unique to ${i}`, b.atoms.length, ["uniqueA"], Fe.destroyedColor), E(`unique to ${a}`, w.atoms.length, ["uniqueB"], Fe.createdColor), I(`atoms in ${i}`, String(p.symbols.length)), I(`atoms in ${a}`, String(h.symbols.length)), I("score", n.score == null ? ot : n.score.toFixed(3)), W.appendChild(D), W.appendChild(j("div", no, "Correspondence"));
      const V = j("div", tr);
      W.appendChild(V);
      const H = j(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${tf}px,1fr));gap:${oe.xs} ${oe.md};font-family:${Z.mono};font-size:${Z.small};color:${Pe.primary};`
      );
      W.appendChild(H);
      const ne = String(Math.max(p.symbols.length, h.symbols.length, 1) - 1).length, ee = (K, Q) => `${(K == null ? ot : String(K)).padStart(ne)} ${Q.padEnd(2)}`, x = (K) => {
        if (K.kind === "uniqueA") return `${i} atom ${K.a} ${K.symbolA} maps to nothing`;
        if (K.kind === "uniqueB") return `${a} atom ${K.b} ${K.symbolB} maps to nothing`;
        const Q = K.kind === "element" ? ", an element change" : "";
        return `${i} atom ${K.a} ${K.symbolA} maps to ${a} atom ${K.b} ${K.symbolB}${Q}`;
      }, N = (K) => {
        const Q = j(
          "div",
          `white-space:pre;padding:${oe.xs} ${oe.md};border-radius:${Ke.sm};background:${$t.card};border-left:3px solid ${ef[K.kind] ?? "transparent"};`,
          `${ee(K.a, K.symbolA)} -> ${ee(K.b, K.symbolB)}`
        );
        return Q.title = x(K), Q.dataset.gufeRelation = K.kind, Q;
      }, B = () => {
        const K = _, Q = K ? A.filter((te) => K.includes(te.kind)) : A;
        H.replaceChildren(...Q.map(N)), Q.length || H.appendChild(
          j("div", `${tr}grid-column:1/-1;`, _ ? "No atoms of that kind." : "This mapping has no atoms.")
        ), V.textContent = (l.size ? "" : "This mapping relates no atoms at all. ") + `${i} -> ${a}, by atom index and element` + (_ ? "; click the chip again for all of them" : "");
        for (const te of R) {
          const ue = te.kinds === _;
          te.button.style.cssText = `${et.plain}${ue ? et.active : et.button}`, te.button.setAttribute("aria-pressed", String(ue)), te.button.title = ue ? "Show every atom" : "Show only these atoms";
        }
      };
      B();
      const J = Object.entries(n.annotations ?? {}).filter(([K]) => K !== "score");
      if (J.length) {
        W.appendChild(j("div", no, "Annotations"));
        const K = j("div", `${ra}color:${Pe.faint};`);
        for (const [Q, te] of J)
          K.appendChild(j("div", "", `${Q}: ${String(te)}`));
        W.appendChild(K);
      }
      W.appendChild(
        j(
          "div",
          `${tr}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, X = () => {
      if (y(), d === "info") {
        re();
        return;
      }
      if (d === "2d") {
        Y();
        return;
      }
      u.appendChild(fe("Loading 3D viewer...")), Gr().then(() => {
        f && (u.replaceChildren(), d === "colored" ? q() : d === "openfe" ? O() : d === "lines" ? G() : F());
      }).catch((W) => {
        u.replaceChildren(fe(`3D render failed: ${he(W)}`, !0));
      });
    };
    return X(), {
      onResize() {
        for (const W of v)
          W.viewer && (W.viewer.resize(), W.viewer.render());
      },
      cleanup() {
        f = !1, y();
      }
    };
  }
}
Me("gufe-atom-mapping", df);
const Qs = ["Force-directed", "Circular", "Radial"], uf = "ligand-network", ff = "Click a ligand or an edge to see it.";
function pf(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function hf(e) {
  return Gi(e);
}
const ei = (e) => Math.round(e * 100) / 100;
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
const At = { initial: 0.58, min: 0.25, max: 0.8 }, Ae = 38, jn = 200, yf = 4, $f = 14, vf = 18, we = {
  fontSize: 11,
  below: Ae + 12,
  minFontSize: 7,
  insideWidth: (Ae - 6) * 2
}, Mt = { captionPadX: 4, captionPadY: 1, captionRadius: 3 }, ti = 1.5, bf = 6.5, wf = 0.9, _f = 14, wr = { size: 8, clearance: 8 }, Sf = { fontSize: 10 }, kf = 0.4, Cf = Er(M.netMatchAtom), Rt = { padding: 4, opacity: 0.95 }, Ef = 3, bt = [
  { id: "structures", from: 0.55, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.35, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], xf = (e) => bt.find((t) => e >= t.from) ?? bt[bt.length - 1], Pf = (e) => bt[Math.min(bt.indexOf(e) + 1, bt.length - 1)], zn = 200, Af = 24, _r = { node: 0.12, edge: 0.06 }, Rf = 1.8, ni = 2 * Ae + 68, Se = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: ni,
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
  collisionPadding: ni / 2 - Ae,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function Nf(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Z.small};line-height:1.5;max-width:260px;background:${M.tooltipBg};border:1px solid ${M.tooltipBorder};color:${M.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function Mf(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const o = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, o);
    const s = ce("marker", {
      id: o,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Ae + wr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: wr.size,
      markerHeight: wr.size,
      orient: "auto"
    });
    return s.appendChild(ce("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(s), o;
  };
}
function Of(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Tf(e) {
  const [t, n] = M.netEdgeRamp.map(Of), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((s, i) => Math.round(s + (n[i] - s) * r)).join(",")})`;
}
const Ve = Ze, Ff = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e, jf = (e) => (e.getAttribute("fill") ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(e.getAttribute("style") ?? "")?.[1] ?? "").toLowerCase().replace(/\s+/g, ""), zf = /* @__PURE__ */ new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]), If = (e) => zf.has(jf(e));
function Df(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = ($) => (e.matched().get($) ?? []).join(","), s = ($, m) => {
    if (t.has(m) || n.has(m)) return;
    const u = e.nodes[m], g = e.matched().get(m), d = u.sdf && Li(
      $,
      u.sdf,
      jn,
      Fe.layout,
      g && { atoms: g, color: Cf, radius: kf }
    );
    if (!d) {
      n.add(m);
      return;
    }
    const k = new DOMParser().parseFromString(d, "image/svg+xml").documentElement;
    if (!k || k.nodeName.toLowerCase() === "parsererror") {
      n.add(m);
      return;
    }
    const v = (Ae - yf) * 2 / jn, c = e.depictionGroups[m];
    c.setAttribute(
      "transform",
      `translate(${-v * jn / 2},${-v * jn / 2}) scale(${v})`
    );
    let f = 0;
    for (const y of Array.from(k.childNodes)) {
      if (y.nodeType !== 1) continue;
      const C = y.nodeName.toLowerCase();
      C === "defs" || C === "metadata" || C === "title" || C === "rect" && If(y) || (c.appendChild(document.importNode(y, !0)), f++);
    }
    f ? (t.add(m), r[m] = o(m)) : n.add(m);
  }, i = () => {
    for (const $ of [...t])
      r[$] !== o($) && (e.depictionGroups[$].replaceChildren(), t.delete($));
  }, a = [], l = ($, m) => {
    if (a[$]) return a[$];
    m.setAttribute("font-size", String(we.fontSize));
    let u = 0;
    try {
      u = m.getBBox().width;
    } catch {
      return we.fontSize;
    }
    if (!u) return we.fontSize;
    const g = we.fontSize * we.insideWidth / u;
    return a[$] = Math.max(we.minFontSize, Math.min(we.fontSize, g)), a[$];
  }, p = [], h = ($) => {
    const m = e.captionPlates[$];
    if (p[$] === we.below) {
      m.setAttribute("display", "inline");
      return;
    }
    let u = null;
    try {
      u = e.captions[$].getBBox();
    } catch {
      u = null;
    }
    if (!u?.width) {
      m.setAttribute("display", "none");
      return;
    }
    m.setAttribute("x", String(u.x - Mt.captionPadX)), m.setAttribute("y", String(u.y - Mt.captionPadY)), m.setAttribute("width", String(u.width + Mt.captionPadX * 2)), m.setAttribute("height", String(u.height + Mt.captionPadY * 2)), m.setAttribute("display", "inline"), p[$] = we.below;
  }, S = ($, m) => {
    const u = m.structure && !t.has($) ? Pf(m) : m;
    e.depictionGroups[$].setAttribute("display", u.structure ? "inline" : "none"), e.plates[$].setAttribute("display", u.structure ? "inline" : "none");
    const g = e.matched().has($), d = e.circles[$];
    d.setAttribute("fill", u.disc ? g ? M.netMatchFill : M.netNodeFill : "none"), d.setAttribute("stroke", u.disc ? g ? M.netMatchStroke : M.netNodeStroke : "none"), e.initials[$].setAttribute("display", u.initials ? "inline" : "none");
    const k = e.captions[$], v = u.name === "below";
    if (k.setAttribute("fill", g ? M.netMatchStroke : v ? M.netDepictCaption : M.netNodeCaption), k.setAttribute("display", u.name === "none" ? "none" : "inline"), v || e.captionPlates[$].setAttribute("display", "none"), u.name === "none") return;
    const c = u.name === "inside";
    k.setAttribute("y", c ? "0" : String(we.below)), k.setAttribute("dominant-baseline", c ? "middle" : "auto"), k.setAttribute("font-size", String(c ? l($, k) : we.fontSize)), v && h($);
  };
  let b = null;
  return { apply: ($, m, u) => {
    const g = xf($);
    b = g, e.stage.setAttribute("data-detail", g.id), e.edgeLabels.setAttribute("display", g.edgeScores ? "inline" : "none");
    for (let c = 0; c < e.nodes.length; c++) S(c, g);
    if (!g.structure) return;
    const { width: d, height: k } = e.viewport(), v = [];
    e.nodes.forEach((c, f) => {
      if (t.has(f) || n.has(f)) return;
      const y = c.x * $ + m, C = c.y * $ + u;
      y < -zn || C < -zn || y > d + zn || C > k + zn || v.push(f);
    }), v.length && e.rdkit().then((c) => {
      if (!(!c || b !== g))
        for (const f of v)
          s(c, f), S(f, g);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: i };
}
function Lf(e) {
  const t = Ot("ligand-network.query"), n = Tr("ligand-network.minScore", 0, 0, 1), r = j("div", si), o = j("input", `${Bn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const s = Ji({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: Ot("ligand-network.smarts"),
    run: (m) => e.match(m),
    describe: (m) => {
      const u = m.unreadable ? `, ${m.unreadable} could not be read` : "";
      return `${m.matched.size} of ${e.nodes.length} ligands match${u}`;
    }
  });
  r.appendChild(s.element);
  const i = j("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${M.textMuted};`), a = j("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), l = j("input", "flex:1;");
  l.type = "range", l.min = "0", l.max = "1", l.step = "0.01", l.value = String(n.get()), e.filter.minScore = Number(l.value), l.setAttribute("aria-label", "Hide mappings scoring below this"), i.appendChild(j("span", "", "score >=")), i.appendChild(l), i.appendChild(a), r.appendChild(i);
  const p = j("div", `font-size:${Z.small};color:${M.textMuted2};`);
  r.appendChild(p);
  const h = j("div", ii);
  r.appendChild(h), r.appendChild(j("div", `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};`, Zr));
  const S = Bi({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    setting: "ligand-network.exportAs"
  });
  r.appendChild(S.box);
  const b = j("button", `${_t}width:100%;`, "Clear selection");
  b.onclick = () => {
    e.selected.clear(), $(), e.refresh();
  }, r.appendChild(b);
  const w = (m) => {
    const u = e.query.text.trim().toLowerCase();
    return u ? Ve(m).toLowerCase().includes(u) || (m.smiles ?? "").toLowerCase().includes(u) || m["gufe-key"].toLowerCase().includes(u) : !0;
  }, $ = () => {
    S.clearNote(), h.replaceChildren();
    const m = e.nodes.map((u, g) => ({ node: u, index: g })).filter(({ node: u }) => w(u));
    p.textContent = `${m.length} of ${e.nodes.length} ligands`;
    for (const { node: u, index: g } of m) {
      const d = u["gufe-key"], k = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? M.cardBorderActive : M.cardBorder};background:${e.selected.has(d) ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), v = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ve(u));
      v.title = `${Ve(u)}
${u.smiles ?? ""}`, k.appendChild(v), k.onclick = (c) => {
        c.shiftKey || c.metaKey || c.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus(g)), $(), e.refresh();
      }, h.appendChild(k);
    }
    m.length || h.appendChild(j("div", `font-size:${Z.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), $(), e.refresh();
  }, l.oninput = () => {
    e.filter.minScore = Number(l.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, $(), s.apply(), r;
}
class qf extends Ne {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = jt(n), o = [];
    let s = 0;
    for (const x of n.nodes ?? []) {
      const N = _e(r, x, "SmallMoleculeComponentViz");
      if (!N) {
        s++;
        continue;
      }
      o.push({ ...N, x: 0, y: 0 });
    }
    const i = new Map(o.map((x) => [x["gufe-key"], x])), a = [];
    let l = 0;
    for (const x of n.edges ?? []) {
      const N = i.get(x.componentA), B = i.get(x.componentB);
      if (!N || !B) {
        l++;
        continue;
      }
      a.push({ ...x, index: a.length, from: N, to: B });
    }
    const p = St(n.name || "Ligand network");
    p.statsEl.appendChild(Re("ligands", String(o.length))), p.statsEl.appendChild(Re("mappings", String(a.length))), t.appendChild(p);
    const h = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const S = /* @__PURE__ */ new Set(), b = { minScore: 0 }, w = { text: "" };
    let $ = () => {
    }, m = null;
    const u = () => m ??= Zn().catch((x) => (console.warn("[gufe-viz] RDKit failed to load:", he(x)), null)), g = Wi(
      u,
      o.map((x) => x.sdf ?? "")
    );
    let d = /* @__PURE__ */ new Map(), k = () => {
    };
    const v = async (x) => {
      const N = await g.run(x);
      return N.status === "superseded" || (d = N.status === "ok" ? N.matched : /* @__PURE__ */ new Map(), k()), N;
    }, c = wi(
      p,
      () => Lf({
        nodes: o,
        edges: a,
        selected: S,
        filter: b,
        query: w,
        refresh: () => $(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (x) => {
          G(x), ne({ kind: "ligand", index: x });
        },
        match: (x) => v(x)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => ee(),
        remember: vt("ligand-network.menuOpen", !1)
      }
    );
    c.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", h.appendChild(c.panel);
    let f = () => {
    };
    const y = j("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), C = j("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`);
    h.appendChild(y), h.appendChild(
      $i(h, y, C, {
        min: At.min,
        max: At.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Tr("ligand-network.canvasShare", At.initial, At.min, At.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => f(),
        onOrient: (x) => vi(c.panel, x)
      })
    ), h.appendChild(C);
    const P = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    y.appendChild(P);
    const T = wt("ligand-network.layout", "Force-directed", Qs), z = this.#n(
      (x) => ee(x),
      () => I(),
      T
    );
    y.appendChild(z.bar);
    const F = this.#e(C, r);
    if (!o.length)
      return P.appendChild(
        fe(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), F.message("Nothing to show."), {};
    s && it(
      P,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && it(P, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const q = u(), O = Nf(P);
    let G = () => {
    };
    const Y = mf(ua(uf), o.length);
    let re = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, X = a.length ? { kind: "edge", index: 0 } : null;
    if (Y && Y.selected >= 0) {
      const x = Y.selectedKind ?? "edge";
      Y.selected < (x === "ligand" ? o.length : a.length) && (X = { kind: x, index: Y.selected });
    }
    let W = () => ({ scale: 1, tx: 0, ty: 0 }), L = !1, A = null, D = T.get(), R = !1, _ = !0, E = () => {
    }, I = () => {
    }, V = 0;
    const H = () => {
      if (!X) {
        F.message(a.length ? ff : "Click a ligand to see it.");
        return;
      }
      X.kind === "edge" ? F.showMapping(a[X.index]) : F.showLigand(o[X.index]);
    }, ne = (x) => {
      X = x, H(), E();
    }, ee = (x = D) => {
      const N = L && x === D ? W() : null, B = ++V;
      D = x, A?.(), A = null, P.querySelectorAll("svg").forEach((te) => te.remove());
      const J = P.clientWidth || 800, K = P.clientHeight || 600;
      Vf(o, J, K, D, a), Y && gf(o, Y.nodes);
      const Q = () => {
        if (!_ || B !== V) return;
        const te = this.#t(P, o, a, J, K, ne, q, O);
        E = () => te.setSelected(X), I = te.reset, A = te.cleanup, G = (le) => te.focusOn(le), W = te.transform, $ = () => {
          const le = w.text.trim().toLowerCase(), me = S.size > 0 || le.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Ee of o) {
            const ze = Ee["gufe-key"], Qe = S.has(ze) || le.length > 0 && (Ve(Ee).toLowerCase().includes(le) || (Ee.smiles ?? "").toLowerCase().includes(le) || ze.toLowerCase().includes(le));
            (!me || Qe) && pe.add(ze);
          }
          const je = /* @__PURE__ */ new Set();
          a.forEach((Ee, ze) => {
            (Ee.score ?? 0) < b.minScore || !pe.has(Ee.from["gufe-key"]) || !pe.has(Ee.to["gufe-key"]) || je.add(ze);
          });
          const $e = me || b.minScore > 0;
          te.setEmphasis($e ? pe : null, $e ? je : null);
        }, k = () => te.setMatches(d), E(), $(), k();
        const ue = re ?? N;
        ue ? (te.setTransform(ue.scale, ue.tx, ue.ty), re = null) : te.fit(), L = !0;
      };
      if (D !== "Force-directed" || R || Y) {
        Q();
        return;
      }
      Bf(o, a, J, K).then((te) => {
        if (!(!_ || B !== V)) {
          if (te) {
            Q();
            return;
          }
          R = !0, z.picker.value = "Circular", it(P, "d3 could not be loaded - showing the circular layout instead"), ee("Circular");
        }
      }, Q);
    };
    return f = () => ee(), ee(), H(), {
      onResize: () => ee(),
      cleanup: () => {
        _ = !1, g.cancel(), O.remove(), A?.();
      },
      viewState: () => ({
        nodes: o.map((x) => [ei(x.x), ei(x.y)]),
        ...W(),
        selected: X ? X.index : -1,
        selectedKind: X ? X.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = j(
      "div",
      Or.bottom
    ), s = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${M.textMuted};`);
    s.appendChild(j("span", "", "score")), s.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${M.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(j("span", "", "0 -> 1")), o.appendChild(s), o.appendChild(j("label", `font-size:${Z.body};margin-left:auto;color:${M.textMuted};`, "Layout"));
    const i = Kn(
      Qs.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(i), o.appendChild(Jr(n, "Reset pan and zoom")), { bar: o, picker: i };
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
      const l = document.createElement(i);
      l.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", l.payload = a, r.replaceChildren(l);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (i) => s("gufe-atom-mapping", Yi(pf(i), n)),
      showLigand: (i) => s("gufe-small-molecule", hf(i)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, s, i, a, l) {
    const p = ce("svg", {
      class: "gufe-graph",
      width: o,
      height: s,
      style: "display:block;touch-action:none;"
    }), h = ce("g");
    p.appendChild(h), t.appendChild(p);
    const S = ce("defs"), b = Mf(S);
    p.appendChild(S);
    const w = [], $ = ce("g"), m = ce("g"), u = ce("g", { "pointer-events": "none" }), g = ce("g");
    h.append($, m, u, g);
    for (const O of r) {
      const G = Tf(O.score), Y = ti + (O.score ?? 0.5) * (bf - ti), re = ce("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": Y + Rt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), X = ce("line", {
        stroke: G,
        "stroke-width": Y,
        "stroke-opacity": wf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${b(G)})`,
        "pointer-events": "none"
      }), W = ce("line", { stroke: "transparent", "stroke-width": _f, style: "cursor:pointer;" });
      W.addEventListener("click", (D) => {
        D.stopPropagation(), i({ kind: "edge", index: O.index });
      }), W.addEventListener("mousemove", (D) => {
        l.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Be(Ve(O.from))} -&gt; ${Be(Ve(O.to))}</div>` + (O.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${O.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          D.offsetX,
          D.offsetY
        );
      }), W.addEventListener("mouseleave", () => l.hide()), w.push(re), $.append(re, X), m.appendChild(W);
      const L = ce("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Sf.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      L.textContent = O.score == null ? "" : O.score.toFixed(2);
      const A = ce("g", { class: "gufe-edge-label" });
      A.appendChild(L), u.appendChild(A);
    }
    const d = [], k = [], v = [], c = [], f = [], y = [], C = [], P = n.map((O) => {
      const G = ce("g", { class: "gufe-node", style: "cursor:grab;" });
      G.addEventListener("mousemove", (R) => {
        l.show(
          `<div style="font-weight:700;color:${M.titleColor};">${Be(Ve(O))}</div>` + (O.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Be(O.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${Be(O["gufe-key"])}</div><div style="margin-top:4px;font-size:${Z.tiny};color:${M.textMuted2};">Click to see the ligand</div>`,
          R.offsetX,
          R.offsetY
        );
      }), G.addEventListener("mouseleave", () => l.hide());
      const Y = ce("circle", {
        class: "gufe-node-halo",
        r: Ae + Rt.padding,
        fill: "none",
        stroke: M.netHaloColor,
        "stroke-width": Rt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      G.appendChild(Y), f.push(Y);
      const re = ce("circle", {
        class: "gufe-node-disc",
        r: Ae,
        fill: M.netNodeFill,
        stroke: M.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      G.appendChild(re), k.push(re);
      const X = ce("circle", {
        class: "gufe-node-plate",
        r: Ae,
        fill: M.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      G.appendChild(X), v.push(X);
      const W = ce("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      G.appendChild(W), d.push(W);
      const L = ce("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": vf,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      L.textContent = Ve(O).slice(0, 2).toUpperCase(), G.appendChild(L), y.push(L);
      const A = ce("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: we.below,
        "font-size": we.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      A.textContent = Ff(Ve(O), $f), A.setAttribute("display", "none"), C.push(A);
      const D = ce("rect", {
        class: "gufe-node-caption-plate",
        rx: Mt.captionRadius,
        fill: M.netDepictBg,
        display: "none",
        "pointer-events": "none"
      });
      return c.push(D), G.appendChild(D), G.appendChild(A), g.appendChild(G), G;
    }), T = () => {
      r.forEach((O, G) => {
        for (const re of [w[G], $.children[G * 2 + 1], m.children[G]]) {
          const X = re;
          X.setAttribute("x1", String(O.from.x)), X.setAttribute("y1", String(O.from.y)), X.setAttribute("x2", String(O.to.x)), X.setAttribute("y2", String(O.to.y));
        }
        u.children[G].setAttribute(
          "transform",
          `translate(${(O.from.x + O.to.x) / 2},${(O.from.y + O.to.y) / 2 - 8})`
        );
      }), n.forEach((O, G) => P[G].setAttribute("transform", `translate(${O.x},${O.y})`));
    };
    T();
    let z = /* @__PURE__ */ new Map();
    const F = Df({
      nodes: n,
      circles: k,
      plates: v,
      captionPlates: c,
      matched: () => z,
      captions: C,
      initials: y,
      depictionGroups: d,
      edgeLabels: u,
      stage: p,
      rdkit: () => a,
      viewport: () => ({ width: o, height: s })
    }), q = this.#r(
      p,
      h,
      n,
      P,
      T,
      F.apply,
      (O) => i({ kind: "ligand", index: O })
    );
    return {
      setSelected(O) {
        const G = O?.kind === "edge" ? O.index : -1, Y = O?.kind === "ligand" ? O.index : -1;
        w.forEach((re, X) => re.setAttribute("opacity", X === G ? String(Rt.opacity) : "0")), f.forEach((re, X) => re.setAttribute("opacity", X === Y ? String(Rt.opacity) : "0"));
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
      setMatches(O) {
        z = O, F.forget();
        const { scale: G, tx: Y, ty: re } = q.transform();
        F.apply(G, Y, re);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(O, G) {
        P.forEach((Y, re) => {
          const X = !O || O.has(n[re]["gufe-key"]);
          Y.setAttribute("opacity", X ? "1" : String(_r.node));
        }), r.forEach((Y, re) => {
          const X = !G || G.has(re), W = X ? "0.9" : String(_r.edge);
          $.children[re * 2 + 1].setAttribute("stroke-opacity", W), u.children[re].setAttribute("opacity", X ? "1" : String(_r.edge));
        });
      },
      focusOn(O) {
        const G = n[O];
        G && q.centreOn(G.x, G.y);
      },
      setDetail: F.apply,
      depictionsDrawn: () => F.drawn(),
      fit: q.fit,
      reset: q.reset,
      transform: q.transform,
      setTransform: q.setTransform,
      cleanup: q.cleanup
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
    const l = Hi(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Ki(r, Ae),
      margin: Af,
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((p, h) => {
      let S = null, b = !1;
      p.addEventListener("pointerdown", ($) => {
        $.stopPropagation();
        const { scale: m } = l.transform();
        S = { x: $.clientX - r[h].x * m, y: $.clientY - r[h].y * m }, b = !1, p.setPointerCapture($.pointerId);
      }), p.addEventListener("pointermove", ($) => {
        if (!S) return;
        if (l.gesturing()) {
          S = null, b = !0;
          return;
        }
        const { scale: m } = l.transform(), u = ($.clientX - S.x) / m, g = ($.clientY - S.y) / m;
        Math.hypot(u - r[h].x, g - r[h].y) * m > Ef && (b = !0), r[h].x = r[h].fx = u, r[h].y = r[h].fy = g, s();
      });
      const w = () => {
        S = null;
      };
      p.addEventListener("pointerup", w), p.addEventListener("pointercancel", w), p.addEventListener("click", ($) => {
        $.stopPropagation(), b || a(h);
      });
    }), {
      ...l,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (p, h) => l.centreOn(p, h, Rf)
    };
  }
}
function Vf(e, t, n, r, o) {
  const s = t / 2, i = n / 2, a = (l, p) => {
    l.forEach((h, S) => {
      const b = 2 * Math.PI * S / Math.max(1, l.length) - Math.PI / 2;
      h.x = s + p * Math.cos(b), h.y = i + p * Math.sin(b), h.fx = r === "Force-directed" ? void 0 : h.x, h.fy = r === "Force-directed" ? void 0 : h.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((m) => [m["gufe-key"], []]));
    for (const m of o)
      l.get(m.from["gufe-key"]).push(m.to["gufe-key"]), l.get(m.to["gufe-key"]).push(m.from["gufe-key"]);
    const p = new Map(e.map((m) => [m["gufe-key"], m])), h = e.reduce(
      (m, u) => l.get(u["gufe-key"]).length > l.get(m["gufe-key"]).length ? u : m
    ), S = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let b = [h["gufe-key"]], w = 0;
    const $ = Math.min(t, n) * 0.18;
    for (; b.length; ) {
      a(
        b.map((u) => p.get(u)),
        w === 0 ? 0 : w * $ + 40
      );
      const m = [];
      for (const u of b)
        for (const g of l.get(u))
          S.has(g) || (S.add(g), m.push(g));
      b = m, w++;
    }
    a(e.filter((m) => !S.has(m["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Bf(e, t, n, r) {
  let o;
  try {
    if (o = await Ti(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((l) => l["gufe-key"]).distance((l) => Se.linkBaseDistance + (1 - (l.score ?? 0.5)) * Se.linkScoreBonus).strength(Se.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(Se.chargeStrength).distanceMin(Se.chargeDistanceMin).distanceMax(Se.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(Se.centerStrength)).force("collision", o.forceCollide(Ae + Se.collisionPadding).iterations(Se.collisionIterations)).force("x", o.forceX(n / 2).strength(Se.drift)).force("y", o.forceY(r / 2).strength(Se.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * Se.tickMultiplier; l++) i.tick();
  return !0;
}
Me("gufe-ligand-network", qf);
function Uf(e, t) {
  return { ...e, registry: Xr(t, Object.values(e.components ?? {})) };
}
function Kf(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Hf(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Gf extends Ne {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = jt(n), o = [], s = [];
    for (const [$, m] of Object.entries(n.components ?? {})) {
      const u = Xe(r, m);
      u ? o.push([$, u]) : s.push($);
    }
    const i = St(n.name || "Chemical system");
    if (i.statsEl.appendChild(Re("components", String(o.length))), t.appendChild(i), !o.length)
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
    const l = j(
      "div",
      `flex:0 0 auto;min-width:0;overflow-x:auto;display:flex;flex-direction:row;gap:6px;padding:10px;background:${M.panelBg};border-bottom:1px solid ${M.splitBorder};`
    );
    a.appendChild(l);
    const p = j("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(p);
    const h = j("div", "flex:1;min-height:0;display:flex;");
    p.appendChild(h);
    const S = document.createElement("gufe-view");
    S.style.cssText = "flex:1;min-width:0;min-height:0;", S.setAttribute(gi, ""), h.appendChild(S);
    const b = [], w = ($) => {
      b.forEach((m, u) => {
        const g = u === $;
        m.style.background = g ? M.cardBgActive : M.cardBg, m.style.borderColor = g ? M.cardBorderActive : M.cardBorder;
      }), S.payload = o[$][1];
    };
    return o.forEach(([$, m], u) => {
      const g = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${M.cardBorder};border-radius:8px;background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:${Z.body};flex-shrink:0;width:auto;`
      );
      g.appendChild(j("span", `font-weight:700;color:${M.textPrimary};`, $)), g.appendChild(j("span", `font-size:${Z.small};color:${M.textMuted};`, Kf(m))), g.appendChild(Hn(Hf(m))), g.onclick = () => w(u), b.push(g), l.appendChild(g);
    }), w(0), {
      onResize: () => S.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => S.remove()
    };
  }
}
Me("gufe-chemical-system", Gf);
const Wf = 460;
function Jf(e, t) {
  const n = _e(t, e.stateA, "ChemicalSystemViz"), r = _e(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const s of [n, r]) o.push(...Object.values(s.components ?? {}));
  for (const s of e.mappings ?? []) o.push(s.componentA, s.componentB);
  return { ...e, registry: Xr(t, o) };
}
const Mr = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function Yf(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Xf(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Zf(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Qf(e, t, n) {
  const r = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${M.cardBg};border:1px solid ${M.cardBorder};`
  ), o = j(
    "span",
    `display:none;font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;color:${M.textMuted2};`,
    n
  );
  r.appendChild(o);
  const s = Zf(e);
  return s ? (r.style.borderColor = t === "unchanged" ? M.cardBorder : Mr[t], r.appendChild(j("span", `font-size:${Z.body};font-weight:600;color:${M.textPrimary};`, s.name)), r.appendChild(Hn(s.type)), { cell: r, sideMark: o }) : (r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(j("span", `font-size:${Z.body};color:${M.textMuted2};`, "absent")), { cell: r, sideMark: o });
}
function ep(e, t) {
  const n = Xe(t, e.componentA), r = Xe(t, e.componentB);
  return `${n ? Ze(n) : "A"} to ${r ? Ze(r) : "B"}`;
}
class tp extends Ne {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = jt(n), o = _e(r, n.stateA, "ChemicalSystemViz"), s = _e(r, n.stateB, "ChemicalSystemViz"), i = _e(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = St(n.name || "Transformation");
    if (l.statsEl.appendChild(Re("protocol", i?.gufe_type || i?.name || "-")), l.statsEl.appendChild(Re("mappings", String(a.length))), t.appendChild(l), !o || !s)
      return t.appendChild(
        fe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const p = Xf(o, s), h = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const S = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [c, f] of [
      ["State A", o],
      ["State B", s]
    ])
      S.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${Z.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${M.textMuted2};`,
          `${c}${f.name ? ` - ${f.name}` : ""}`
        )
      );
    h.appendChild(S);
    const b = [], w = [], $ = [];
    for (const c of p) {
      const f = o.components?.[c], y = s.components?.[c], C = Yf(f, y), P = Xe(r, f), T = Xe(r, y), z = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), F = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      F.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Mr[C]};`)
      );
      const q = j("span", `font-size:${Z.body};font-weight:700;color:${M.textPrimary};overflow-wrap:anywhere;`, c);
      q.title = C, F.appendChild(q), z.appendChild(F);
      for (const [O, G] of [
        [P, "A"],
        [T, "B"]
      ]) {
        const Y = Qf(O, C, G);
        z.appendChild(Y.cell), $.push(Y.sideMark);
      }
      b.push(z), w.push(F), h.appendChild(z);
    }
    let m = null;
    const u = Ra(t, (c) => {
      const f = c > 0 && c < Wf;
      if (f !== m) {
        m = f, S.style.display = f ? "none" : "flex";
        for (const y of b) y.style.flexDirection = f ? "column" : "row";
        for (const y of w) y.style.flex = f ? "0 0 auto" : "0 0 110px";
        for (const y of $) y.style.display = f ? "block" : "none";
      }
    }), g = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${Z.small};color:${M.textMuted};`
    );
    for (const c of ["unchanged", "changed", "added", "removed"])
      g.appendChild(Re(c, "", Mr[c]));
    h.appendChild(g);
    const d = j(
      "div",
      ai,
      "Atom mapping"
    );
    if (t.appendChild(d), !a.length)
      return t.appendChild(
        fe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: u };
    const k = document.createElement("gufe-atom-mapping");
    k.style.cssText = "flex:1;min-height:0;min-width:0;";
    const v = (c) => {
      k.payload = Yi(a[c], r);
    };
    if (v(0), a.length > 1) {
      const c = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Z.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      c.appendChild(
        Un(
          a.map((f, y) => ({
            id: String(y),
            label: f.name || ep(f, r)
          })),
          "0",
          (f) => v(Number(f))
        )
      ), t.appendChild(c);
    }
    return t.appendChild(k), {
      onResize: () => k.resize?.(),
      cleanup: () => {
        u(), k.remove();
      }
    };
  }
}
Me("gufe-transformation", tp);
const st = { width: 148, height: 46, radius: 10 }, yt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Nt = { initial: 0.56, min: 0.25, max: 0.78 }, np = 24, ri = { x: st.width / 2, y: st.height / 2 }, oi = { node: 0.12, edge: 0.06 }, rp = 1.4, qn = Ze;
function op(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function sp(e, t) {
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
function ip(e, t) {
  const n = { fill: M.cardBg, stroke: M.cardBorder }, r = e.map((i) => sp(i, t)), o = [...new Set(r)];
  if (o.length < 2 || o.length > M.netGroupFill.length)
    return { signatures: r, compositions: o, colorOf: () => n, legend: [] };
  const s = new Map(
    o.map((i, a) => [i, { fill: M.netGroupFill[a], stroke: M.netGroupStroke[a] }])
  );
  return {
    signatures: r,
    compositions: o,
    colorOf: (i) => s.get(r[i]) ?? n,
    legend: o.map((i) => [i, s.get(i)])
  };
}
function ap(e, t) {
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
function cp(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((s) => {
    const i = [];
    for (const a of Object.values(s.components ?? {})) {
      const l = _e(t, a, "SmallMoleculeComponentViz");
      if (!l) continue;
      let p = r.get(a);
      p === void 0 && (p = n.length, r.set(a, p), n.push(l.sdf ?? "")), i.push(p);
    }
    return i;
  });
  return { sources: n, perNode: o };
}
function lp(e) {
  const t = Ot("alchemical-network.query"), n = Ot("alchemical-network.composition"), r = j("div", si), o = j("input", `${Bn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const s = Ji({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: Ot("alchemical-network.smarts"),
    run: (b) => e.match(b),
    describe: (b) => {
      const w = b.unreadable ? `, ${b.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${w}`;
    }
  });
  if (r.appendChild(s.element), e.compositions.length > 1) {
    const b = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${M.textMuted};`);
    b.appendChild(j("span", "flex-shrink:0;", "made of"));
    const w = Kn(
      [{ id: "", label: "anything" }, ...e.compositions.map(($) => ({ id: $, label: $ }))],
      "",
      ($) => {
        e.filter.composition = $, S(), e.refresh();
      },
      n
    );
    w.style.cssText += "flex:1;min-width:0;", e.filter.composition = w.value, b.appendChild(w), r.appendChild(b);
  }
  const i = j("div", `font-size:${Z.small};color:${M.textMuted2};`);
  r.appendChild(i);
  const a = j("div", ii);
  r.appendChild(a), r.appendChild(j("div", `font-size:${Z.tiny};line-height:1.5;color:${M.textMuted2};`, Zr));
  const l = Bi({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Systems", plural: "systems" },
      edges: { button: "Transformations", plural: "transformations" }
    },
    setting: "alchemical-network.exportAs"
  });
  r.appendChild(l.box);
  const p = j("button", `${_t}width:100%;`, "Clear selection");
  p.onclick = () => {
    e.selected.clear(), S(), e.refresh();
  }, r.appendChild(p);
  const h = (b) => {
    const w = e.query.text.trim().toLowerCase();
    if (w && !e.haystacks[b].includes(w) || e.filter.composition && e.signatures[b] !== e.filter.composition) return !1;
    const $ = e.matched();
    return !($ && !$.has(b));
  }, S = () => {
    l.clearNote(), a.replaceChildren();
    const b = e.nodes.map((w, $) => ({ node: w, index: $ })).filter(({ index: w }) => h(w));
    i.textContent = `${b.length} of ${e.nodes.length} systems`;
    for (const { node: w, index: $ } of b) {
      const m = w["gufe-key"], u = e.selected.has(m), g = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${u ? M.cardBorderActive : M.cardBorder};background:${u ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), d = e.colorOf($);
      g.appendChild(
        j(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${d.fill};border:1px solid ${d.stroke};`
        )
      );
      const k = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", qn(w));
      k.title = `${qn(w)}
${e.signatures[$]}`, g.appendChild(k), g.onclick = (v) => {
        v.shiftKey || v.metaKey || v.ctrlKey ? e.selected.has(m) ? e.selected.delete(m) : e.selected.add(m) : (e.selected.clear(), e.selected.add(m), e.focus($)), S(), e.refresh();
      }, a.appendChild(g);
    }
    b.length || a.appendChild(j("div", `font-size:${Z.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), S(), e.refresh();
  }, S(), e.mounted(S), s.apply(), r;
}
function dp(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((o, s) => {
    const i = 2 * Math.PI * s / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(i), o.y = n / 2 + r * Math.sin(i);
  });
}
async function up(e, t, n, r) {
  let o;
  try {
    if (o = await Ti(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((l) => l["gufe-key"]).distance(yt.linkDistance).strength(yt.linkStrength)
  ).force("charge", o.forceManyBody().strength(yt.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(yt.collisionRadius).iterations(yt.collisionIterations)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * yt.tickMultiplier; l++) i.tick();
  return !0;
}
class fp extends Ne {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = jt(n), o = [];
    let s = 0;
    for (const V of n.nodes ?? []) {
      const H = _e(r, V, "ChemicalSystemViz");
      if (!H) {
        s++;
        continue;
      }
      o.push({ ...H, x: 0, y: 0 });
    }
    const i = new Map(o.map((V) => [V["gufe-key"], V])), a = [];
    let l = 0;
    for (const V of n.edges ?? []) {
      const H = i.get(V.stateA), ne = i.get(V.stateB);
      if (!H || !ne) {
        l++;
        continue;
      }
      a.push({ ...V, index: a.length, from: H, to: ne });
    }
    const p = (V) => {
      const H = _e(r, V.protocol, "ProtocolViz");
      return H?.gufe_type || H?.name || "";
    }, h = new Set(a.map(p).filter(Boolean)), S = St(n.name || "Alchemical network");
    S.statsEl.appendChild(Re("systems", String(o.length))), S.statsEl.appendChild(Re("transformations", String(a.length))), h.size && S.statsEl.appendChild(Re("protocol", [...h].join(", "))), t.appendChild(S);
    const b = ip(o, r), w = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(w);
    let $ = () => {
    };
    const m = /* @__PURE__ */ new Set(), u = { composition: "" }, g = { text: "" };
    let d = () => {
    }, k = () => {
    }, v = () => {
    };
    const c = o.map((V) => ap(V, r));
    let f = null;
    const y = () => f ??= Zn().catch((V) => (console.warn("[gufe-viz] RDKit failed to load:", he(V)), null)), C = cp(o, r), P = Wi(y, C.sources);
    let T = null, z = () => {
    };
    const F = async (V) => {
      const H = await P.run(V);
      return H.status === "superseded" || (T = H.status === "ok" ? new Set(o.flatMap((ne, ee) => C.perNode[ee].some((x) => H.matched.has(x)) ? [ee] : [])) : null, z(), d()), H;
    }, q = wi(
      S,
      () => lp({
        nodes: o,
        edges: a,
        haystacks: c,
        signatures: b.signatures,
        colorOf: b.colorOf,
        compositions: b.compositions,
        selected: m,
        filter: u,
        query: g,
        refresh: () => d(),
        matched: () => T,
        match: (V) => F(V),
        mounted: (V) => {
          z = V;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (V) => {
          k(V), v(V);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => $(),
        remember: vt("alchemical-network.menuOpen", !1)
      }
    );
    q.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", w.appendChild(q.panel);
    const O = j("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), G = j("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${M.appBg};`), Y = j("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`);
    O.appendChild(Y), w.appendChild(O), w.appendChild(
      $i(w, O, G, {
        min: Nt.min,
        max: Nt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Tr("alchemical-network.canvasShare", Nt.initial, Nt.min, Nt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => $(),
        onOrient: (V) => vi(q.panel, V)
      })
    ), w.appendChild(G);
    const re = this.#e(G, r);
    if (!o.length)
      return Y.appendChild(
        fe(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), re.message("Nothing to show."), { cleanup: () => re.cleanup() };
    s && it(
      Y,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && it(
      Y,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let X = !0, W = !1, L = null, A = () => {
    }, D = () => {
    }, R = () => {
    }, _ = 0;
    O.appendChild(this.#n(b.legend, () => D()));
    const E = (V, H) => {
      L = { kind: V, index: H }, re.show(V === "node" ? o[H] : a[H], V), A();
    };
    v = (V) => E("node", V);
    const I = () => {
      const V = ++_, H = Y.clientWidth || 800, ne = Y.clientHeight || 600;
      dp(o, H, ne);
      const ee = () => {
        if (!X || V !== _) return;
        R(), Y.querySelectorAll("svg").forEach((N) => N.remove());
        const x = this.#t(Y, o, a, H, ne, b.colorOf, E);
        R = x.cleanup, D = x.reset, k = (N) => x.focusOn(N), A = () => x.setSelected(L), A(), d = () => {
          const N = g.text.trim().toLowerCase();
          if (!(m.size > 0 || N.length > 0 || u.composition !== "" || T !== null)) {
            x.setEmphasis(null, null);
            return;
          }
          const J = N.length > 0 || u.composition !== "" || T !== null, K = /* @__PURE__ */ new Set();
          o.forEach((te, ue) => {
            const le = J && (!N || c[ue].includes(N)) && (!u.composition || b.signatures[ue] === u.composition) && (!T || T.has(ue));
            (m.has(te["gufe-key"]) || le) && K.add(te["gufe-key"]);
          });
          const Q = /* @__PURE__ */ new Set();
          a.forEach((te, ue) => {
            K.has(te.from["gufe-key"]) && K.has(te.to["gufe-key"]) && Q.add(ue);
          }), x.setEmphasis(K, Q);
        }, d();
      };
      if (W) {
        ee();
        return;
      }
      up(o, a, H, ne).then((x) => {
        !X || V !== _ || (x || (W = !0, it(Y, "d3 could not be loaded - showing the circular layout instead")), ee());
      }, ee);
    };
    return $ = I, I(), E("node", 0), {
      onResize: () => I(),
      cleanup: () => {
        X = !1, R(), re.cleanup();
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
    const r = j("div", Or.bottom);
    if (r.appendChild(Jr(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(j("span", `font-size:${Z.small};color:${M.textMuted};`, "systems made of"));
    for (const [o, s] of t) {
      const i = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      i.appendChild(
        j(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), i.appendChild(
        j("span", `font-size:${Z.small};color:${M.textPrimary};overflow-wrap:anywhere;`, o)
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
    t.appendChild(j("div", ai, "Selected"));
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const s = (a) => r.replaceChildren(fe(a));
    return { show: (a, l) => {
      let p;
      if (l === "node")
        p = Uf(Gi(a), n);
      else {
        const { index: h, from: S, to: b, ...w } = a;
        p = Jf(w, n);
      }
      if (!p) {
        s("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      o.payload = p, o.parentNode !== r && r.replaceChildren(o);
    }, message: s, cleanup: () => o.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #t(t, n, r, o, s, i, a) {
    const l = ce("svg", { class: "gufe-graph", width: o, height: s, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const p = ce("g");
    l.appendChild(p);
    const h = ce("g"), S = ce("g");
    p.append(h, S);
    const b = Hi(l, p, {
      bounds: () => Ki(n, ri.x, ri.y),
      margin: np,
      hint: "Click the graph or hold Ctrl to zoom"
    }), w = (d, k) => {
      b.wasPan() || a(d, k);
    }, $ = [];
    r.forEach((d, k) => {
      const v = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Ks(v, d.name || "transformation"), v.addEventListener("click", () => w("edge", k)), h.appendChild(v), $.push(v);
      const c = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      c.addEventListener("click", () => w("edge", k)), h.appendChild(c);
    });
    const m = [], u = [], g = [];
    return n.forEach((d, k) => {
      const v = i(k), c = ce("g", { style: "cursor:pointer;" });
      g.push(c);
      const f = ce("rect", {
        x: d.x - st.width / 2,
        y: d.y - st.height / 2,
        width: st.width,
        height: st.height,
        rx: st.radius,
        fill: v.fill,
        stroke: v.stroke,
        "stroke-width": 2
      });
      c.appendChild(f), m.push(f), u.push(v.stroke);
      const y = ce("text", {
        x: d.x,
        y: d.y - 2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      y.textContent = op(qn(d), 20), c.appendChild(y);
      const C = Object.keys(d.components ?? {}).length, P = ce("text", {
        x: d.x,
        y: d.y + 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      P.textContent = `${C} component${C === 1 ? "" : "s"}`, c.appendChild(P), Ks(c, qn(d)), c.addEventListener("click", () => w("node", k)), S.appendChild(c);
    }), b.fit(), {
      setSelected(d) {
        m.forEach((k, v) => {
          const c = d?.kind === "node" && d.index === v;
          k.setAttribute("stroke", c ? M.cardBorderActive : u[v]), k.setAttribute("stroke-width", c ? "3" : "2");
        }), $.forEach((k, v) => {
          const c = d?.kind === "edge" && d.index === v;
          k.setAttribute("stroke", c ? M.netHaloColor : M.netEdgeLine), k.setAttribute("stroke-width", c ? "4" : "2");
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
        g.forEach((v, c) => {
          const f = !d || d.has(n[c]["gufe-key"]);
          v.setAttribute("opacity", f ? "1" : String(oi.node));
        }), $.forEach((v, c) => {
          const f = !k || k.has(c);
          v.setAttribute("opacity", f ? "1" : String(oi.edge));
        });
      },
      focusOn(d) {
        const k = n[d];
        k && b.centreOn(k.x, k.y, rp);
      },
      reset: b.reset,
      cleanup: b.cleanup
    };
  }
}
Me("gufe-alchemical-network", fp);
class pp extends Ne {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = St(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Hn(n.gufe_type)), t.appendChild(r);
    const o = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const s = Fr();
    return s.style.maxWidth = "460px", s.appendChild(ke("gufe class", n.gufe_type, !0)), n.name && s.appendChild(ke("Name", n.name)), s.appendChild(ke("gufe key", n["gufe-key"], !0)), s.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(s), {};
  }
}
Me("gufe-protocol", pp);
class hp extends Ne {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Fr();
    return o.style.maxWidth = "560px", o.style.width = "100%", o.appendChild(ke("Name", n.name || "(unnamed)")), o.appendChild(ke("SMILES", n.smiles, !0)), o.appendChild(ke("Positive ion", n.positive_ion)), o.appendChild(ke("Negative ion", n.negative_ion)), o.appendChild(ke("Ion concentration", n.ion_concentration)), o.appendChild(ke("Neutralize", n.neutralize ? "yes" : "no")), o.appendChild(ke("gufe key", n["gufe-key"], !0)), r.appendChild(o), {};
  }
}
Me("gufe-solvent", hp);
class mp extends Ne {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = St(n.name || "Unnamed component");
    r.statsEl.appendChild(Hn(n.gufe_type)), t.appendChild(r);
    const o = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const s = Fr();
    return s.style.maxWidth = "460px", s.appendChild(
      j(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${M.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), s.appendChild(
      j(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${M.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), s.appendChild(ke("Name", n.name || "(unnamed)")), s.appendChild(ke("gufe class", n.gufe_type, !0)), o.appendChild(s), {};
  }
}
Me("gufe-unknown-component", mp);
function wp(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: ui, reset: ya });
export {
  Ma as CHROME_OPEN_BY_DEFAULT,
  sa as DEBUG_ATTRIBUTE,
  ia as DEBUG_GLOBAL,
  Qd as DEFAULT_DEPICT_STYLE,
  _d as DEFAULT_ZOOM_BOUNDS,
  Fe as DEPICT_STYLE,
  su as DEPICT_STYLE_RANGES,
  fp as GufeAlchemicalNetwork,
  df as GufeAtomMapping,
  Gf as GufeChemicalSystem,
  Ne as GufeElement,
  qf as GufeLigandNetwork,
  Au as GufeProtein,
  pp as GufeProtocol,
  Su as GufeSmallMolecule,
  hp as GufeSolvent,
  tp as GufeTransformation,
  mp as GufeUnknownComponent,
  gd as GufeView,
  gi as HIDE_NAME_ATTRIBUTE,
  hr as MAPPING_COLORS,
  Ed as MAPPING_RAMP_3D,
  bp as MAPPING_RAMP_NAME,
  Zr as MULTI_SELECT_HINT,
  gp as PAYLOAD_TYPES,
  yp as SCHEMA_TYPES,
  Ur as VIEW_TAGS,
  Hu as align2D,
  Ju as alignedToPartner,
  Ku as applyRT,
  Gu as applyTurn,
  kd as boundedZoom,
  jt as buildRegistry,
  wt as choice,
  wi as chromeMenu,
  vd as claimGestures,
  li as debugEnabled,
  Me as defineElement,
  Mi as describeProblem,
  Yf as diffStatus,
  vp as dispatchProblem,
  Xr as entriesFor,
  Ze as entryLabel,
  Bi as exportBlock,
  Ki as extentOf,
  vt as flag,
  hd as formatIssues,
  Fi as guardWheel,
  sf as inFrameOf,
  Uu as kabsch,
  Js as laidOut,
  Yu as layoutPair,
  af as liftFor,
  da as logPayload,
  Xe as lookup,
  _e as lookupOfType,
  Yi as mappingPayloadFor,
  js as markGroups,
  mr as markedBonds,
  wp as mount,
  yi as nameWanted,
  au as normaliseDepictStyle,
  Tr as num,
  Ra as onWidth,
  cf as openfeShift,
  vi as orientMenuPanel,
  lf as pairColour,
  Ts as parseAtomSpec,
  la as payloadJson,
  Jr as resetControl,
  ya as resetSettings,
  Hi as sceneCamera,
  Ru as selectionText,
  Vn as setting,
  ui as settings,
  $i as splitter,
  Uf as systemPayloadFor,
  Ot as textSetting,
  Jf as transformationPayloadFor,
  Xs as uniqueAtoms,
  lu as uniqueBonds,
  $p as validateAs,
  pd as validatePayload,
  Wr as viewerInteraction,
  ji as wheelFactor,
  Wu as withCoords
};
