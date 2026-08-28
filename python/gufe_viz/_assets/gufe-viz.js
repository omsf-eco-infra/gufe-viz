const Zr = {
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
function Wi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const O = Wi() ? Zr.dark : Zr.light, Y = {
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
}, Be = {
  bold: "700"
}, re = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, Ue = {
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
}, yt = {
  card: O.cardBg,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: O.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: O.canvas2DBg
}, ye = {
  base: `background:${O.btnBg};color:${O.btnFg};border:1px solid ${O.btnBorder};padding:${re.sm} 9px;font-size:${Y.small};font-weight:${Be.bold};border-radius:${Ue.sm};cursor:pointer;font-family:inherit;`,
  bg: O.btnBg,
  bgHover: O.btnBgHover,
  bgActive: O.btnBgActive
}, Ji = `background:${O.selectBg};color:${O.textPrimary};border:1px solid ${O.selectBorder};border-radius:${Ue.md};padding:${re.sm} ${re.lg};font-size:${Y.body};cursor:pointer;font-family:inherit;`, Yi = `display:flex;align-items:center;gap:12px;padding:9px ${re.xxl};flex-shrink:0;background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};`, ti = `display:flex;flex-direction:column;gap:${re.lg};flex:1;min-width:236px;max-width:340px;box-sizing:border-box;padding:${re.xl};min-height:0;overflow-y:auto;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`, ni = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Rr = {
  top: `display:flex;align-items:center;gap:${re.xl};flex-wrap:wrap;padding:${re.lg} ${re.xxl};flex-shrink:0;font-size:${Y.body};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${re.xl};flex-wrap:wrap;padding:${re.lg} ${re.xxl};flex-shrink:0;background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};`
}, ri = `flex-shrink:0;padding:${re.sm} ${re.xl};font-size:${Y.heading};font-weight:${Be.bold};color:${O.labelFg};background:${O.labelBg};`, br = `position:absolute;top:${re.md};left:${re.md};z-index:10;pointer-events:none;max-width:calc(100% - ${re.xxl} - ${re.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${re.xs} ${re.lg};border-radius:${Ue.md};font-size:${Y.heading};font-weight:${Be.bold};color:${O.labelFg};background:${O.labelBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Xi = `display:flex;flex-direction:column;gap:${re.xs};padding:${re.xxl} 18px;border-radius:${Ue.xl};background:${O.cardBg};border:1px solid ${O.cardBorder};`, oi = `position:absolute;bottom:${re.xl};right:${re.xl};display:flex;gap:${re.sm};padding:${re.sm};border-radius:${Ue.md};z-index:10;background:${O.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Zi = `font-family:${Y.mono};font-size:${Y.small};line-height:1.7;color:${O.textMuted};`, Qr = `font-size:${Y.small};font-weight:${Be.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`, Qe = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${re.xs} ${re.sm};font-size:${Y.small};`,
  plain: `display:inline-flex;align-items:center;padding:${re.xs} ${re.md};border:1px solid transparent;border-radius:${Ue.pill};font-family:inherit;font-size:${Y.small};color:${O.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${O.btnBorder};`,
  active: `cursor:pointer;background:${O.cardBgActive};border-color:${O.btnBorder};color:${O.textPrimary};`
}, Zn = `font-size:${Y.small};line-height:1.6;color:${O.textMuted2};`, Qi = ["debug", "gufe-debug"], ea = "debug", ta = "GUFE_VIZ_DEBUG";
function na() {
  return !!globalThis[ta];
}
function ra() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Qi.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function si(e) {
  return e?.hasAttribute?.(ea) ? !0 : na() || ra();
}
function oa(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function sa(e, t, n) {
  if (!si(n)) return;
  const r = oa(t), o = t?.type, s = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(s) : console.log(s), console.log(r), console.log(t), i && console.groupEnd?.();
}
const ii = "GUFE_VIZ_VIEW_STATE";
function ia(e) {
  const t = globalThis[ii];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const aa = 150, eo = "data-gufe-shell";
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${eo}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = O.appBg, this.style.color = O.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), aa);
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
    ), this.#t.setAttribute(eo, ""), this.appendChild(this.#t), this.#t;
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
const ke = "gufe-viz:", Je = /* @__PURE__ */ new Map();
let Ft = null;
function ca() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Ot() {
  if (Ft === !1) return null;
  const e = ca();
  if (!e)
    return Ft = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Ft = !0, e;
  } catch {
    return Ft = !1, null;
  }
}
function la(e) {
  const t = Ot();
  if (!t) return Je.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function da(e, t) {
  const n = Ot();
  if (!n) {
    Je.set(ke + e, t);
    return;
  }
  try {
    n.setItem(ke + e, t);
  } catch {
    Je.set(ke + e, t);
  }
}
function Dn(e, t, n) {
  return {
    key: e,
    get() {
      const r = la(e);
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
        da(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function bt(e, t, n) {
  return Dn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function $t(e, t) {
  return Dn(e, t, (n) => typeof n == "boolean");
}
function Nr(e, t, n = -1 / 0, r = 1 / 0) {
  return Dn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Nt(e, t = "") {
  return Dn(e, t, (n) => typeof n == "string");
}
function ai() {
  const e = {}, t = Ot(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Je.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Je.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(ke.length)] = JSON.parse(o);
      } catch {
        e[r.slice(ke.length)] = o;
      }
  }
  return e;
}
function ua() {
  const e = {}, t = Ot(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Je.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Je.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function fa() {
  const e = Ot();
  if (e)
    for (const t of Object.keys(ai()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  Je.clear();
}
const ci = "https://framejs.app", li = 1e4;
function pa(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const ha = "/gufe-dev-bundle.js";
function ma() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= li ? e : null;
}
async function ga() {
  const e = ma();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(ha);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < li ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function ya() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function $a(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(mi)};`,
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
    `globalThis[${JSON.stringify(ii)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function va(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...$a(n),
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
function ba(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, s] of Object.entries(ua()))
    o.endsWith(mi) || (r[o] = s);
  return { settings: r, views: t };
}
const wa = (e) => `${ci}/j/${e}`, _a = (e) => `${ci}/j/${e}.json`;
async function Sa(e, t, n) {
  await fetch(_a(e), {
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
function ka(e) {
  if (!si()) return;
  const t = j(
    "div",
    `display:flex;flex-direction:column;gap:${re.md};padding-top:${re.lg};border-top:1px dashed ${O.splitBorder};`
  );
  t.appendChild(
    j(
      "div",
      `font-size:${Y.tiny};font-weight:${Be.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
      "debug"
    )
  );
  const n = j("button", `${ye.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = j("div", `font-size:${Y.tiny};line-height:1.5;color:${O.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? O.errorFg : O.textMuted2;
  }, s = (i, a) => {
    const l = j("a", `color:${O.textPrimary};`, i);
    l.href = i, l.target = "_blank", l.rel = "noreferrer", r.replaceChildren(l), a && r.appendChild(j("div", `padding-top:${re.sm};`, a)), r.style.color = O.textMuted2;
  };
  n.onclick = () => {
    const i = pa(e);
    if (!i || i.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, l = ba(i), f = window.open("", "_blank"), p = ya(), g = a, $ = String(g.name || g.type || "gufe-viz"), y = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), ga().then((S) => {
      if (!S) {
        f?.close(), y(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Sa(p, va(S.js, a, l), $).then(() => {
        y();
        const _ = wa(p);
        f && (f.location.href = _), s(_, S.note);
      });
    }).catch((S) => {
      y(), f?.close(), o(`Upload failed: ${S instanceof Error ? S.message : String(S)}`, !0);
    });
  }, t.appendChild(
    j(
      "div",
      `font-size:${Y.tiny};line-height:1.5;color:${O.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function j(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Ve(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function he(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const St = (e) => e.toLocaleString("en-US"), rt = "-", wt = ye.base, qn = Ji;
function Ln(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const o = j("div", "display:flex;gap:4px;"), s = e.map((i) => {
    const a = j("button", wt, i.label);
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
function Vn(e, t, n, r) {
  const o = j("select", qn);
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
function di(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const s = j("button", wt, e);
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
  return o.innerHTML = `${Ve(e)} <b style="color:${Pe.primary};">${Ve(t)}</b>`, r.appendChild(o), r;
}
function st(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${re.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${re.md} ${re.xxl};border-radius:${Ue.md};font-size:${Y.body};background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};`, e.appendChild(n), n;
}
function fe(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Y.heading};color:${t ? Pe.error : Pe.faint};`,
    e
  );
}
function _t(e) {
  const t = j("div", Yi);
  return t.className = "gufe-header", t.titleEl = j(
    "span",
    `font-weight:${Be.bold};font-size:${Y.title};color:${Pe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Y.small};color:${Pe.muted};`
  ), t.textEl = j("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = j("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function Se(e, t, n = !1) {
  const r = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:${Y.tiny};font-weight:${Be.bold};letter-spacing:.08em;text-transform:uppercase;color:${Pe.faint};`,
      e
    )
  );
  const o = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Pe.primary};` + (n ? `font-family:${Y.mono};font-size:${Y.small};` : `font-size:${Y.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Bn(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:${Ue.xl};font-size:${Y.tiny};font-weight:${Be.bold};letter-spacing:.04em;white-space:nowrap;background:${O.badgeBg};color:${O.badgeFg};`,
    e
  );
}
function Mr() {
  return j("div", Xi);
}
function ui() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const fi = "data-gufe-hide-name";
function pi(e) {
  return !e.closest(`[${fi}]`);
}
function Ca(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const to = { min: 0.2, max: 0.8 }, Ea = 5;
function hi(e, t, n, r = {}) {
  const o = r.min ?? to.min, s = r.max ?? to.max, i = j(
    "div",
    `flex:0 0 ${Ea}px;align-self:stretch;cursor:col-resize;touch-action:none;background:${O.splitBorder};`
  );
  i.setAttribute("role", "separator"), i.setAttribute("aria-orientation", "vertical"), i.setAttribute("aria-label", "Resize the panes");
  let a = Math.min(s, Math.max(o, r.remember?.get() ?? 0.5));
  const l = () => {
    t.style.flex = `1 1 ${(a * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - a) * 100).toFixed(2)}%`;
  };
  l();
  let f = !1;
  i.addEventListener("pointerdown", (g) => {
    f = !0, i.setPointerCapture(g.pointerId), g.preventDefault();
  }), i.addEventListener("pointermove", (g) => {
    if (!f) return;
    const $ = e.getBoundingClientRect();
    $.width <= 0 || (a = Math.min(s, Math.max(o, (g.clientX - $.left) / $.width)), l());
  });
  const p = (g) => {
    f && (f = !1, i.releasePointerCapture(g.pointerId), r.remember?.set(a), r.onResize?.(a));
  };
  return i.addEventListener("pointerup", p), i.addEventListener("pointercancel", p), i;
}
const xa = !1, mi = ".menuOpen";
function Pa() {
  const e = j("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Aa = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Pa
}, Ra = Aa.openFreeEnergy;
function gi(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? xa, o = !1;
  const s = j("div", "flex-shrink:0;"), i = j("button", `${ye.base}display:inline-flex;align-items:center;gap:${re.md};padding:${re.sm} ${re.lg};`);
  i.appendChild(Ra()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, s.appendChild(t()), ka(s)), s.style.display = r ? "" : "none", i.style.background = r ? ye.bgActive : ye.bg, i.setAttribute("aria-expanded", String(r));
  }, l = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
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
function Na(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jt = { exports: {} }, Qn = {}, ze = {}, et = {}, er = {}, tr = {}, nr = {}, no;
function jn() {
  return no || (no = 1, (function(e) {
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
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((m, k) => `${m}${k}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((m, k) => (k instanceof n && (m[k.str] = (m[k.str] || 0) + 1), m), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o(v, ...d) {
      const m = [v[0]];
      let k = 0;
      for (; k < d.length; )
        a(m, d[k]), m.push(v[++k]);
      return new r(m);
    }
    e._ = o;
    const s = new r("+");
    function i(v, ...d) {
      const m = [y(v[0])];
      let k = 0;
      for (; k < d.length; )
        m.push(s), a(m, d[k]), m.push(s, y(v[++k]));
      return l(m), new r(m);
    }
    e.str = i;
    function a(v, d) {
      d instanceof r ? v.push(...d._items) : d instanceof n ? v.push(d) : v.push(g(d));
    }
    e.addCodeArg = a;
    function l(v) {
      let d = 1;
      for (; d < v.length - 1; ) {
        if (v[d] === s) {
          const m = f(v[d - 1], v[d + 1]);
          if (m !== void 0) {
            v.splice(d - 1, 3, m);
            continue;
          }
          v[d++] = "+";
        }
        d++;
      }
    }
    function f(v, d) {
      if (d === '""')
        return v;
      if (v === '""')
        return d;
      if (typeof v == "string")
        return d instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${v.slice(0, -1)}${d}"` : d[0] === '"' ? v.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !(v instanceof n))
        return `"${v}${d.slice(1)}`;
    }
    function p(v, d) {
      return d.emptyStr() ? v : v.emptyStr() ? d : i`${v}${d}`;
    }
    e.strConcat = p;
    function g(v) {
      return typeof v == "number" || typeof v == "boolean" || v === null ? v : y(Array.isArray(v) ? v.join(",") : v);
    }
    function $(v) {
      return new r(y(v));
    }
    e.stringify = $;
    function y(v) {
      return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function S(v) {
      return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : o`[${v}]`;
    }
    e.getProperty = S;
    function _(v) {
      if (typeof v == "string" && e.IDENTIFIER.test(v))
        return new r(`${v}`);
      throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function h(v) {
      return new r(v.toString());
    }
    e.regexpCode = h;
  })(nr)), nr;
}
var rr = {}, ro;
function oo() {
  return ro || (ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ jn();
    class n extends Error {
      constructor(f) {
        super(`CodeGen: "code" for ${f} not defined`), this.value = f.value;
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
      constructor({ prefixes: f, parent: p } = {}) {
        this._names = {}, this._prefixes = f, this._parent = p;
      }
      toName(f) {
        return f instanceof t.Name ? f : this.name(f);
      }
      name(f) {
        return new t.Name(this._newName(f));
      }
      _newName(f) {
        const p = this._names[f] || this._nameGroup(f);
        return `${f}${p.index++}`;
      }
      _nameGroup(f) {
        var p, g;
        if (!((g = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || g === void 0) && g.has(f) || this._prefixes && !this._prefixes.has(f))
          throw new Error(`CodeGen: prefix "${f}" is not allowed in this scope`);
        return this._names[f] = { prefix: f, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(f, p) {
        super(p), this.prefix = f;
      }
      setValue(f, { property: p, itemIndex: g }) {
        this.value = f, this.scopePath = (0, t._)`.${new t.Name(p)}[${g}]`;
      }
    }
    e.ValueScopeName = s;
    const i = (0, t._)`\n`;
    class a extends o {
      constructor(f) {
        super(f), this._values = {}, this._scope = f.scope, this.opts = { ...f, _n: f.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(f) {
        return new s(f, this._newName(f));
      }
      value(f, p) {
        var g;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(f), { prefix: y } = $, S = (g = p.key) !== null && g !== void 0 ? g : p.ref;
        let _ = this._values[y];
        if (_) {
          const d = _.get(S);
          if (d)
            return d;
        } else
          _ = this._values[y] = /* @__PURE__ */ new Map();
        _.set(S, $);
        const h = this._scope[y] || (this._scope[y] = []), v = h.length;
        return h[v] = p.ref, $.setValue(p, { property: y, itemIndex: v }), $;
      }
      getValue(f, p) {
        const g = this._values[f];
        if (g)
          return g.get(p);
      }
      scopeRefs(f, p = this._values) {
        return this._reduceValues(p, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${f}${g.scopePath}`;
        });
      }
      scopeCode(f = this._values, p, g) {
        return this._reduceValues(f, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, p, g);
      }
      _reduceValues(f, p, g = {}, $) {
        let y = t.nil;
        for (const S in f) {
          const _ = f[S];
          if (!_)
            continue;
          const h = g[S] = g[S] || /* @__PURE__ */ new Map();
          _.forEach((v) => {
            if (h.has(v))
              return;
            h.set(v, r.Started);
            let d = p(v);
            if (d) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${m} ${v} = ${d};${this.opts._n}`;
            } else if (d = $?.(v))
              y = (0, t._)`${y}${d}${this.opts._n}`;
            else
              throw new n(v);
            h.set(v, r.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = a;
  })(rr)), rr;
}
var so;
function oe() {
  return so || (so = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ jn(), n = /* @__PURE__ */ oo();
    var r = /* @__PURE__ */ jn();
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
    var o = /* @__PURE__ */ oo();
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
      constructor(w, C, z) {
        super(), this.varKind = w, this.name = C, this.rhs = z;
      }
      render({ es5: w, _n: C }) {
        const z = w ? n.varKinds.var : this.varKind, L = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${z} ${this.name}${L};` + C;
      }
      optimizeNames(w, C) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = W(this.rhs, w, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends s {
      constructor(w, C, z) {
        super(), this.lhs = w, this.rhs = C, this.sideEffects = z;
      }
      render({ _n: w }) {
        return `${this.lhs} = ${this.rhs};` + w;
      }
      optimizeNames(w, C) {
        if (!(this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects))
          return this.rhs = W(this.rhs, w, C), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return I(w, this.rhs);
      }
    }
    class l extends a {
      constructor(w, C, z, L) {
        super(w, z, L), this.op = C;
      }
      render({ _n: w }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + w;
      }
    }
    class f extends s {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `${this.label}:` + w;
      }
    }
    class p extends s {
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
    class $ extends s {
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
        return this.code = W(this.code, w, C), this;
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
        return this.nodes.reduce((C, z) => C + z.render(w), "");
      }
      optimizeNodes() {
        const { nodes: w } = this;
        let C = w.length;
        for (; C--; ) {
          const z = w[C].optimizeNodes();
          Array.isArray(z) ? w.splice(C, 1, ...z) : z ? w[C] = z : w.splice(C, 1);
        }
        return w.length > 0 ? this : void 0;
      }
      optimizeNames(w, C) {
        const { nodes: z } = this;
        let L = z.length;
        for (; L--; ) {
          const K = z[L];
          K.optimizeNames(w, C) || (te(w, K.names), z.splice(L, 1));
        }
        return z.length > 0 ? this : void 0;
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
    class h extends S {
    }
    h.kind = "else";
    class v extends S {
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
          const z = C.optimizeNodes();
          C = this.else = Array.isArray(z) ? new h(z) : z;
        }
        if (C)
          return w === !1 ? C instanceof v ? C : C.nodes : this.nodes.length ? this : new v(J(w), C instanceof v ? [C] : C.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, C) {
        var z;
        if (this.else = (z = this.else) === null || z === void 0 ? void 0 : z.optimizeNames(w, C), !!(super.optimizeNames(w, C) || this.else))
          return this.condition = W(this.condition, w, C), this;
      }
      get names() {
        const w = super.names;
        return I(w, this.condition), this.else && A(w, this.else.names), w;
      }
    }
    v.kind = "if";
    class d extends S {
    }
    d.kind = "for";
    class m extends d {
      constructor(w) {
        super(), this.iteration = w;
      }
      render(w) {
        return `for(${this.iteration})` + super.render(w);
      }
      optimizeNames(w, C) {
        if (super.optimizeNames(w, C))
          return this.iteration = W(this.iteration, w, C), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class k extends d {
      constructor(w, C, z, L) {
        super(), this.varKind = w, this.name = C, this.from = z, this.to = L;
      }
      render(w) {
        const C = w.es5 ? n.varKinds.var : this.varKind, { name: z, from: L, to: K } = this;
        return `for(${C} ${z}=${L}; ${z}<${K}; ${z}++)` + super.render(w);
      }
      get names() {
        const w = I(super.names, this.from);
        return I(w, this.to);
      }
    }
    class c extends d {
      constructor(w, C, z, L) {
        super(), this.loop = w, this.varKind = C, this.name = z, this.iterable = L;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, C) {
        if (super.optimizeNames(w, C))
          return this.iterable = W(this.iterable, w, C), this;
      }
      get names() {
        return A(super.names, this.iterable.names);
      }
    }
    class u extends S {
      constructor(w, C, z) {
        super(), this.name = w, this.args = C, this.async = z;
      }
      render(w) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
      }
    }
    u.kind = "func";
    class b extends y {
      render(w) {
        return "return " + super.render(w);
      }
    }
    b.kind = "return";
    class x extends S {
      render(w) {
        let C = "try" + super.render(w);
        return this.catch && (C += this.catch.render(w)), this.finally && (C += this.finally.render(w)), C;
      }
      optimizeNodes() {
        var w, C;
        return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames(w, C) {
        var z, L;
        return super.optimizeNames(w, C), (z = this.catch) === null || z === void 0 || z.optimizeNames(w, C), (L = this.finally) === null || L === void 0 || L.optimizeNames(w, C), this;
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
        const z = this._extScope.value(w, C);
        return (this._values[z.prefix] || (this._values[z.prefix] = /* @__PURE__ */ new Set())).add(z), z;
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
      _def(w, C, z, L) {
        const K = this._scope.toName(C);
        return z !== void 0 && L && (this._constants[K.str] = z), this._leafNode(new i(w, K, z)), K;
      }
      // `const` declaration (`var` in es5 mode)
      const(w, C, z) {
        return this._def(n.varKinds.const, w, C, z);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(w, C, z) {
        return this._def(n.varKinds.let, w, C, z);
      }
      // `var` declaration with optional assignment
      var(w, C, z) {
        return this._def(n.varKinds.var, w, C, z);
      }
      // assignment code
      assign(w, C, z) {
        return this._leafNode(new a(w, C, z));
      }
      // `+=` code
      add(w, C) {
        return this._leafNode(new l(w, e.operators.ADD, C));
      }
      // appends passed SafeExpr to code or executes Block
      code(w) {
        return typeof w == "function" ? w() : w !== t.nil && this._leafNode(new $(w)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...w) {
        const C = ["{"];
        for (const [z, L] of w)
          C.length > 1 && C.push(","), C.push(z), (z !== L || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, L));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(w, C, z) {
        if (this._blockNode(new v(w)), C && z)
          this.code(C).else().code(z).endIf();
        else if (C)
          this.code(C).endIf();
        else if (z)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(w) {
        return this._elseNode(new v(w));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, h);
      }
      _for(w, C) {
        return this._blockNode(w), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, C) {
        return this._for(new m(w), C);
      }
      // `for` statement for a range of values
      forRange(w, C, z, L, K = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ee = this._scope.toName(w);
        return this._for(new k(K, ee, C, z), () => L(ee));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, C, z, L = n.varKinds.const) {
        const K = this._scope.toName(w);
        if (this.opts.es5) {
          const ee = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${ee}.length`, (X) => {
            this.var(K, (0, t._)`${ee}[${X}]`), z(K);
          });
        }
        return this._for(new c("of", L, K, C), () => z(K));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, C, z, L = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${C})`, z);
        const K = this._scope.toName(w);
        return this._for(new c("in", L, K, C), () => z(K));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(d);
      }
      // `label` statement
      label(w) {
        return this._leafNode(new f(w));
      }
      // `break` statement
      break(w) {
        return this._leafNode(new p(w));
      }
      // `return` statement
      return(w) {
        const C = new b();
        if (this._blockNode(C), this.code(w), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(b);
      }
      // `try` statement
      try(w, C, z) {
        if (!C && !z)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const L = new x();
        if (this._blockNode(L), this.code(w), C) {
          const K = this.name("e");
          this._currNode = L.catch = new P(K), C(K);
        }
        return z && (this._currNode = L.finally = new T(), this.code(z)), this._endBlockNode(P, T);
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
        const z = this._nodes.length - C;
        if (z < 0 || w !== void 0 && z !== w)
          throw new Error(`CodeGen: wrong number of nodes: ${z} vs ${w} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(w, C = t.nil, z, L) {
        return this._blockNode(new u(w, C, z)), L && this.code(L).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(u);
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
        const z = this._currNode;
        if (z instanceof w || C && z instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${w.kind}/${C.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        const C = this._currNode;
        if (!(C instanceof v))
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
    function A(M, w) {
      for (const C in w)
        M[C] = (M[C] || 0) + (w[C] || 0);
      return M;
    }
    function I(M, w) {
      return w instanceof t._CodeOrName ? A(M, w.names) : M;
    }
    function W(M, w, C) {
      if (M instanceof t.Name)
        return z(M);
      if (!L(M))
        return M;
      return new t._Code(M._items.reduce((K, ee) => (ee instanceof t.Name && (ee = z(ee)), ee instanceof t._Code ? K.push(...ee._items) : K.push(ee), K), []));
      function z(K) {
        const ee = C[K.str];
        return ee === void 0 || w[K.str] !== 1 ? K : (delete w[K.str], ee);
      }
      function L(K) {
        return K instanceof t._Code && K._items.some((ee) => ee instanceof t.Name && w[ee.str] === 1 && C[ee.str] !== void 0);
      }
    }
    function te(M, w) {
      for (const C in w)
        M[C] = (M[C] || 0) - (w[C] || 0);
    }
    function J(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${D(M)}`;
    }
    e.not = J;
    const ae = R(e.operators.AND);
    function Z(...M) {
      return M.reduce(ae);
    }
    e.and = Z;
    const G = R(e.operators.OR);
    function q(...M) {
      return M.reduce(G);
    }
    e.or = q;
    function R(M) {
      return (w, C) => w === t.nil ? C : C === t.nil ? w : (0, t._)`${D(w)} ${M} ${D(C)}`;
    }
    function D(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(tr)), tr;
}
var se = {}, io;
function ie() {
  if (io) return se;
  io = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ jn();
  function n(c) {
    const u = {};
    for (const b of c)
      u[b] = !0;
    return u;
  }
  se.toHash = n;
  function r(c, u) {
    return typeof u == "boolean" ? u : Object.keys(u).length === 0 ? !0 : (o(c, u), !s(u, c.self.RULES.all));
  }
  se.alwaysValidSchema = r;
  function o(c, u = c.schema) {
    const { opts: b, self: x } = c;
    if (!b.strictSchema || typeof u == "boolean")
      return;
    const P = x.RULES.keywords;
    for (const T in u)
      P[T] || k(c, `unknown keyword: "${T}"`);
  }
  se.checkUnknownRules = o;
  function s(c, u) {
    if (typeof c == "boolean")
      return !c;
    for (const b in c)
      if (u[b])
        return !0;
    return !1;
  }
  se.schemaHasRules = s;
  function i(c, u) {
    if (typeof c == "boolean")
      return !c;
    for (const b in c)
      if (b !== "$ref" && u.all[b])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = i;
  function a({ topSchemaRef: c, schemaPath: u }, b, x, P) {
    if (!P) {
      if (typeof b == "number" || typeof b == "boolean")
        return b;
      if (typeof b == "string")
        return (0, e._)`${b}`;
    }
    return (0, e._)`${c}${u}${(0, e.getProperty)(x)}`;
  }
  se.schemaRefOrVal = a;
  function l(c) {
    return g(decodeURIComponent(c));
  }
  se.unescapeFragment = l;
  function f(c) {
    return encodeURIComponent(p(c));
  }
  se.escapeFragment = f;
  function p(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  se.escapeJsonPointer = p;
  function g(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = g;
  function $(c, u) {
    if (Array.isArray(c))
      for (const b of c)
        u(b);
    else
      u(c);
  }
  se.eachItem = $;
  function y({ mergeNames: c, mergeToName: u, mergeValues: b, resultToName: x }) {
    return (P, T, F, A) => {
      const I = F === void 0 ? T : F instanceof e.Name ? (T instanceof e.Name ? c(P, T, F) : u(P, T, F), F) : T instanceof e.Name ? (u(P, F, T), T) : b(T, F);
      return A === e.Name && !(I instanceof e.Name) ? x(P, I) : I;
    };
  }
  se.mergeEvaluated = {
    props: y({
      mergeNames: (c, u, b) => c.if((0, e._)`${b} !== true && ${u} !== undefined`, () => {
        c.if((0, e._)`${u} === true`, () => c.assign(b, !0), () => c.assign(b, (0, e._)`${b} || {}`).code((0, e._)`Object.assign(${b}, ${u})`));
      }),
      mergeToName: (c, u, b) => c.if((0, e._)`${b} !== true`, () => {
        u === !0 ? c.assign(b, !0) : (c.assign(b, (0, e._)`${b} || {}`), _(c, b, u));
      }),
      mergeValues: (c, u) => c === !0 ? !0 : { ...c, ...u },
      resultToName: S
    }),
    items: y({
      mergeNames: (c, u, b) => c.if((0, e._)`${b} !== true && ${u} !== undefined`, () => c.assign(b, (0, e._)`${u} === true ? true : ${b} > ${u} ? ${b} : ${u}`)),
      mergeToName: (c, u, b) => c.if((0, e._)`${b} !== true`, () => c.assign(b, u === !0 ? !0 : (0, e._)`${b} > ${u} ? ${b} : ${u}`)),
      mergeValues: (c, u) => c === !0 ? !0 : Math.max(c, u),
      resultToName: (c, u) => c.var("items", u)
    })
  };
  function S(c, u) {
    if (u === !0)
      return c.var("props", !0);
    const b = c.var("props", (0, e._)`{}`);
    return u !== void 0 && _(c, b, u), b;
  }
  se.evaluatedPropsToName = S;
  function _(c, u, b) {
    Object.keys(b).forEach((x) => c.assign((0, e._)`${u}${(0, e.getProperty)(x)}`, !0));
  }
  se.setEvaluated = _;
  const h = {};
  function v(c, u) {
    return c.scopeValue("func", {
      ref: u,
      code: h[u.code] || (h[u.code] = new t._Code(u.code))
    });
  }
  se.useFunc = v;
  var d;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(d || (se.Type = d = {}));
  function m(c, u, b) {
    if (c instanceof e.Name) {
      const x = u === d.Num;
      return b ? x ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : x ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return b ? (0, e.getProperty)(c).toString() : "/" + p(c);
  }
  se.getErrorPath = m;
  function k(c, u, b = c.opts.strictSchema) {
    if (b) {
      if (u = `strict mode: ${u}`, b === !0)
        throw new Error(u);
      c.self.logger.warn(u);
    }
  }
  return se.checkStrictMode = k, se;
}
var zt = {}, ao;
function Me() {
  if (ao) return zt;
  ao = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
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
  return zt.default = t, zt;
}
var co;
function Un() {
  return co || (co = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Me();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: v }) => v ? (0, t.str)`"${h}" keyword must be ${v} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function o(h, v = e.keywordError, d, m) {
      const { it: k } = h, { gen: c, compositeRule: u, allErrors: b } = k, x = g(h, v, d);
      m ?? (u || b) ? l(c, x) : f(k, (0, t._)`[${x}]`);
    }
    e.reportError = o;
    function s(h, v = e.keywordError, d) {
      const { it: m } = h, { gen: k, compositeRule: c, allErrors: u } = m, b = g(h, v, d);
      l(k, b), c || u || f(m, r.default.vErrors);
    }
    e.reportExtraError = s;
    function i(h, v) {
      h.assign(r.default.errors, v), h.if((0, t._)`${r.default.vErrors} !== null`, () => h.if(v, () => h.assign((0, t._)`${r.default.vErrors}.length`, v), () => h.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: h, keyword: v, schemaValue: d, data: m, errsCount: k, it: c }) {
      if (k === void 0)
        throw new Error("ajv implementation error");
      const u = h.name("err");
      h.forRange("i", k, r.default.errors, (b) => {
        h.const(u, (0, t._)`${r.default.vErrors}[${b}]`), h.if((0, t._)`${u}.instancePath === undefined`, () => h.assign((0, t._)`${u}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), h.assign((0, t._)`${u}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${v}`), c.opts.verbose && (h.assign((0, t._)`${u}.schema`, d), h.assign((0, t._)`${u}.data`, m));
      });
    }
    e.extendErrors = a;
    function l(h, v) {
      const d = h.const("err", v);
      h.if((0, t._)`${r.default.vErrors} === null`, () => h.assign(r.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${r.default.vErrors}.push(${d})`), h.code((0, t._)`${r.default.errors}++`);
    }
    function f(h, v) {
      const { gen: d, validateName: m, schemaEnv: k } = h;
      k.$async ? d.throw((0, t._)`new ${h.ValidationError}(${v})`) : (d.assign((0, t._)`${m}.errors`, v), d.return(!1));
    }
    const p = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function g(h, v, d) {
      const { createErrors: m } = h.it;
      return m === !1 ? (0, t._)`{}` : $(h, v, d);
    }
    function $(h, v, d = {}) {
      const { gen: m, it: k } = h, c = [
        y(k, d),
        S(h, d)
      ];
      return _(h, v, c), m.object(...c);
    }
    function y({ errorPath: h }, { instancePath: v }) {
      const d = v ? (0, t.str)`${h}${(0, n.getErrorPath)(v, n.Type.Str)}` : h;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, d)];
    }
    function S({ keyword: h, it: { errSchemaPath: v } }, { schemaPath: d, parentSchema: m }) {
      let k = m ? v : (0, t.str)`${v}/${h}`;
      return d && (k = (0, t.str)`${k}${(0, n.getErrorPath)(d, n.Type.Str)}`), [p.schemaPath, k];
    }
    function _(h, { params: v, message: d }, m) {
      const { keyword: k, data: c, schemaValue: u, it: b } = h, { opts: x, propertyName: P, topSchemaRef: T, schemaPath: F } = b;
      m.push([p.keyword, k], [p.params, typeof v == "function" ? v(h) : v || (0, t._)`{}`]), x.messages && m.push([p.message, typeof d == "function" ? d(h) : d]), x.verbose && m.push([p.schema, u], [p.parentSchema, (0, t._)`${T}${F}`], [r.default.data, c]), P && m.push([p.propertyName, P]);
    }
  })(er)), er;
}
var lo;
function Ma() {
  if (lo) return et;
  lo = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.boolOrEmptySchema = et.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Un(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Me(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: l, schema: f, validateName: p } = a;
    f === !1 ? i(a, !1) : typeof f == "object" && f.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${p}.errors`, null), l.return(!0));
  }
  et.topBoolOrEmptySchema = o;
  function s(a, l) {
    const { gen: f, schema: p } = a;
    p === !1 ? (f.var(l, !1), i(a)) : f.var(l, !0);
  }
  et.boolOrEmptySchema = s;
  function i(a, l) {
    const { gen: f, data: p } = a, g = {
      gen: f,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(g, r, void 0, l);
  }
  return et;
}
var ge = {}, tt = {}, uo;
function yi() {
  if (uo) return tt;
  uo = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.getRules = tt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  tt.isJSONType = n;
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
  return tt.getRules = r, tt;
}
var Ie = {}, fo;
function $i() {
  if (fo) return Ie;
  fo = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.shouldUseRule = Ie.shouldUseGroup = Ie.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, s) {
    const i = o.RULES.types[s];
    return i && i !== !0 && t(r, i);
  }
  Ie.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((s) => n(r, s));
  }
  Ie.shouldUseGroup = t;
  function n(r, o) {
    var s;
    return r[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((i) => r[i] !== void 0));
  }
  return Ie.shouldUseRule = n, Ie;
}
var po;
function zn() {
  if (po) return ge;
  po = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ yi(), t = /* @__PURE__ */ $i(), n = /* @__PURE__ */ Un(), r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ ie();
  var s;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(s || (ge.DataType = s = {}));
  function i(d) {
    const m = a(d.type);
    if (m.includes("null")) {
      if (d.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && d.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      d.nullable === !0 && m.push("null");
    }
    return m;
  }
  ge.getSchemaTypes = i;
  function a(d) {
    const m = Array.isArray(d) ? d : d ? [d] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  ge.getJSONTypes = a;
  function l(d, m) {
    const { gen: k, data: c, opts: u } = d, b = p(m, u.coerceTypes), x = m.length > 0 && !(b.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(d, m[0]));
    if (x) {
      const P = S(m, c, u.strictNumbers, s.Wrong);
      k.if(P, () => {
        b.length ? g(d, m, b) : h(d);
      });
    }
    return x;
  }
  ge.coerceAndCheckDataType = l;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(d, m) {
    return m ? d.filter((k) => f.has(k) || m === "array" && k === "array") : [];
  }
  function g(d, m, k) {
    const { gen: c, data: u, opts: b } = d, x = c.let("dataType", (0, r._)`typeof ${u}`), P = c.let("coerced", (0, r._)`undefined`);
    b.coerceTypes === "array" && c.if((0, r._)`${x} == 'object' && Array.isArray(${u}) && ${u}.length == 1`, () => c.assign(u, (0, r._)`${u}[0]`).assign(x, (0, r._)`typeof ${u}`).if(S(m, u, b.strictNumbers), () => c.assign(P, u))), c.if((0, r._)`${P} !== undefined`);
    for (const F of k)
      (f.has(F) || F === "array" && b.coerceTypes === "array") && T(F);
    c.else(), h(d), c.endIf(), c.if((0, r._)`${P} !== undefined`, () => {
      c.assign(u, P), $(d, P);
    });
    function T(F) {
      switch (F) {
        case "string":
          c.elseIf((0, r._)`${x} == "number" || ${x} == "boolean"`).assign(P, (0, r._)`"" + ${u}`).elseIf((0, r._)`${u} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${x} == "boolean" || ${u} === null
              || (${x} == "string" && ${u} && ${u} == +${u})`).assign(P, (0, r._)`+${u}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${x} === "boolean" || ${u} === null
              || (${x} === "string" && ${u} && ${u} == +${u} && !(${u} % 1))`).assign(P, (0, r._)`+${u}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${u} === "false" || ${u} === 0 || ${u} === null`).assign(P, !1).elseIf((0, r._)`${u} === "true" || ${u} === 1`).assign(P, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${u} === "" || ${u} === 0 || ${u} === false`), c.assign(P, null);
          return;
        case "array":
          c.elseIf((0, r._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${u} === null`).assign(P, (0, r._)`[${u}]`);
      }
    }
  }
  function $({ gen: d, parentData: m, parentDataProperty: k }, c) {
    d.if((0, r._)`${m} !== undefined`, () => d.assign((0, r._)`${m}[${k}]`, c));
  }
  function y(d, m, k, c = s.Correct) {
    const u = c === s.Correct ? r.operators.EQ : r.operators.NEQ;
    let b;
    switch (d) {
      case "null":
        return (0, r._)`${m} ${u} null`;
      case "array":
        b = (0, r._)`Array.isArray(${m})`;
        break;
      case "object":
        b = (0, r._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        b = x((0, r._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        b = x();
        break;
      default:
        return (0, r._)`typeof ${m} ${u} ${d}`;
    }
    return c === s.Correct ? b : (0, r.not)(b);
    function x(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, P, k ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  ge.checkDataType = y;
  function S(d, m, k, c) {
    if (d.length === 1)
      return y(d[0], m, k, c);
    let u;
    const b = (0, o.toHash)(d);
    if (b.array && b.object) {
      const x = (0, r._)`typeof ${m} != "object"`;
      u = b.null ? x : (0, r._)`!${m} || ${x}`, delete b.null, delete b.array, delete b.object;
    } else
      u = r.nil;
    b.number && delete b.integer;
    for (const x in b)
      u = (0, r.and)(u, y(x, m, k, c));
    return u;
  }
  ge.checkDataTypes = S;
  const _ = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: m }) => typeof d == "string" ? (0, r._)`{type: ${d}}` : (0, r._)`{type: ${m}}`
  };
  function h(d) {
    const m = v(d);
    (0, n.reportError)(m, _);
  }
  ge.reportTypeError = h;
  function v(d) {
    const { gen: m, data: k, schema: c } = d, u = (0, o.schemaRefOrVal)(d, c, "type");
    return {
      gen: m,
      keyword: "type",
      data: k,
      schema: c.type,
      schemaCode: u,
      schemaValue: u,
      parentSchema: c,
      params: {},
      it: d
    };
  }
  return ge;
}
var kt = {}, ho;
function Oa() {
  if (ho) return kt;
  ho = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.assignDefaults = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie();
  function n(o, s) {
    const { properties: i, items: a } = o.schema;
    if (s === "object" && i)
      for (const l in i)
        r(o, l, i[l].default);
    else s === "array" && Array.isArray(a) && a.forEach((l, f) => r(o, f, l.default));
  }
  kt.assignDefaults = n;
  function r(o, s, i) {
    const { gen: a, compositeRule: l, data: f, opts: p } = o;
    if (i === void 0)
      return;
    const g = (0, e._)`${f}${(0, e.getProperty)(s)}`;
    if (l) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let $ = (0, e._)`${g} === undefined`;
    p.useDefaults === "empty" && ($ = (0, e._)`${$} || ${g} === null || ${g} === ""`), a.if($, (0, e._)`${g} = ${(0, e.stringify)(i)}`);
  }
  return kt;
}
var Ee = {}, de = {}, mo;
function Oe() {
  if (mo) return de;
  mo = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ ie();
  function o(d, m) {
    const { gen: k, data: c, it: u } = d;
    k.if(p(k, c, m, u.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${m}` }, !0), d.error();
    });
  }
  de.checkReportMissingProp = o;
  function s({ gen: d, data: m, it: { opts: k } }, c, u) {
    return (0, e.or)(...c.map((b) => (0, e.and)(p(d, m, b, k.ownProperties), (0, e._)`${u} = ${b}`)));
  }
  de.checkMissingProp = s;
  function i(d, m) {
    d.setParams({ missingProperty: m }, !0), d.error();
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
  function l(d, m, k) {
    return (0, e._)`${a(d)}.call(${m}, ${k})`;
  }
  de.isOwnProperty = l;
  function f(d, m, k, c) {
    const u = (0, e._)`${m}${(0, e.getProperty)(k)} !== undefined`;
    return c ? (0, e._)`${u} && ${l(d, m, k)}` : u;
  }
  de.propertyInData = f;
  function p(d, m, k, c) {
    const u = (0, e._)`${m}${(0, e.getProperty)(k)} === undefined`;
    return c ? (0, e.or)(u, (0, e.not)(l(d, m, k))) : u;
  }
  de.noPropertyInData = p;
  function g(d) {
    return d ? Object.keys(d).filter((m) => m !== "__proto__") : [];
  }
  de.allSchemaProperties = g;
  function $(d, m) {
    return g(m).filter((k) => !(0, t.alwaysValidSchema)(d, m[k]));
  }
  de.schemaProperties = $;
  function y({ schemaCode: d, data: m, it: { gen: k, topSchemaRef: c, schemaPath: u, errorPath: b }, it: x }, P, T, F) {
    const A = F ? (0, e._)`${d}, ${m}, ${c}${u}` : m, I = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, b)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && I.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const W = (0, e._)`${A}, ${k.object(...I)}`;
    return T !== e.nil ? (0, e._)`${P}.call(${T}, ${W})` : (0, e._)`${P}(${W})`;
  }
  de.callValidateCode = y;
  const S = (0, e._)`new RegExp`;
  function _({ gen: d, it: { opts: m } }, k) {
    const c = m.unicodeRegExp ? "u" : "", { regExp: u } = m.code, b = u(k, c);
    return d.scopeValue("pattern", {
      key: b.toString(),
      ref: b,
      code: (0, e._)`${u.code === "new RegExp" ? S : (0, r.useFunc)(d, u)}(${k}, ${c})`
    });
  }
  de.usePattern = _;
  function h(d) {
    const { gen: m, data: k, keyword: c, it: u } = d, b = m.name("valid");
    if (u.allErrors) {
      const P = m.let("valid", !0);
      return x(() => m.assign(P, !1)), P;
    }
    return m.var(b, !0), x(() => m.break()), b;
    function x(P) {
      const T = m.const("len", (0, e._)`${k}.length`);
      m.forRange("i", 0, T, (F) => {
        d.subschema({
          keyword: c,
          dataProp: F,
          dataPropType: t.Type.Num
        }, b), m.if((0, e.not)(b), P);
      });
    }
  }
  de.validateArray = h;
  function v(d) {
    const { gen: m, schema: k, keyword: c, it: u } = d;
    if (!Array.isArray(k))
      throw new Error("ajv implementation error");
    if (k.some((T) => (0, t.alwaysValidSchema)(u, T)) && !u.opts.unevaluated)
      return;
    const x = m.let("valid", !1), P = m.name("_valid");
    m.block(() => k.forEach((T, F) => {
      const A = d.subschema({
        keyword: c,
        schemaProp: F,
        compositeRule: !0
      }, P);
      m.assign(x, (0, e._)`${x} || ${P}`), d.mergeValidEvaluated(A, P) || m.if((0, e.not)(x));
    })), d.result(x, () => d.reset(), () => d.error(!0));
  }
  return de.validateUnion = v, de;
}
var go;
function Ta() {
  if (go) return Ee;
  go = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.validateKeywordUsage = Ee.validSchemaType = Ee.funcKeywordCode = Ee.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ Un();
  function o($, y) {
    const { gen: S, keyword: _, schema: h, parentSchema: v, it: d } = $, m = y.macro.call(d.self, h, v, d), k = f(S, _, m);
    d.opts.validateSchema !== !1 && d.self.validateSchema(m, !0);
    const c = S.name("valid");
    $.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${_}`,
      topSchemaRef: k,
      compositeRule: !0
    }, c), $.pass(c, () => $.error(!0));
  }
  Ee.macroKeywordCode = o;
  function s($, y) {
    var S;
    const { gen: _, keyword: h, schema: v, parentSchema: d, $data: m, it: k } = $;
    l(k, y);
    const c = !m && y.compile ? y.compile.call(k.self, v, d, k) : y.validate, u = f(_, h, c), b = _.let("valid");
    $.block$data(b, x), $.ok((S = y.valid) !== null && S !== void 0 ? S : b);
    function x() {
      if (y.errors === !1)
        F(), y.modifying && i($), A(() => $.error());
      else {
        const I = y.async ? P() : T();
        y.modifying && i($), A(() => a($, I));
      }
    }
    function P() {
      const I = _.let("ruleErrs", null);
      return _.try(() => F((0, e._)`await `), (W) => _.assign(b, !1).if((0, e._)`${W} instanceof ${k.ValidationError}`, () => _.assign(I, (0, e._)`${W}.errors`), () => _.throw(W))), I;
    }
    function T() {
      const I = (0, e._)`${u}.errors`;
      return _.assign(I, null), F(e.nil), I;
    }
    function F(I = y.async ? (0, e._)`await ` : e.nil) {
      const W = k.opts.passContext ? t.default.this : t.default.self, te = !("compile" in y && !m || y.schema === !1);
      _.assign(b, (0, e._)`${I}${(0, n.callValidateCode)($, u, W, te)}`, y.modifying);
    }
    function A(I) {
      var W;
      _.if((0, e.not)((W = y.valid) !== null && W !== void 0 ? W : b), I);
    }
  }
  Ee.funcKeywordCode = s;
  function i($) {
    const { gen: y, data: S, it: _ } = $;
    y.if(_.parentData, () => y.assign(S, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a($, y) {
    const { gen: S } = $;
    S.if((0, e._)`Array.isArray(${y})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)($);
    }, () => $.error());
  }
  function l({ schemaEnv: $ }, y) {
    if (y.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function f($, y, S) {
    if (S === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return $.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function p($, y, S = !1) {
    return !y.length || y.some((_) => _ === "array" ? Array.isArray($) : _ === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == _ || S && typeof $ > "u");
  }
  Ee.validSchemaType = p;
  function g({ schema: $, opts: y, self: S, errSchemaPath: _ }, h, v) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(v) : h.keyword !== v)
      throw new Error("ajv implementation error");
    const d = h.dependencies;
    if (d?.some((m) => !Object.prototype.hasOwnProperty.call($, m)))
      throw new Error(`parent schema must have dependencies of ${v}: ${d.join(",")}`);
    if (h.validateSchema && !h.validateSchema($[v])) {
      const k = `keyword "${v}" value is invalid at path "${_}": ` + S.errorsText(h.validateSchema.errors);
      if (y.validateSchema === "log")
        S.logger.error(k);
      else
        throw new Error(k);
    }
  }
  return Ee.validateKeywordUsage = g, Ee;
}
var De = {}, yo;
function Fa() {
  if (yo) return De;
  yo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.extendSubschemaMode = De.extendSubschemaData = De.getSubschema = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie();
  function n(s, { keyword: i, schemaProp: a, schema: l, schemaPath: f, errSchemaPath: p, topSchemaRef: g }) {
    if (i !== void 0 && l !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const $ = s.schema[i];
      return a === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}`
      } : {
        schema: $[a],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (l !== void 0) {
      if (f === void 0 || p === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: f,
        topSchemaRef: g,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  De.getSubschema = n;
  function r(s, i, { dataProp: a, dataPropType: l, data: f, dataTypes: p, propertyName: g }) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = i;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: _, opts: h } = i, v = $.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      y(v), s.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, l, h.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${a}`, s.dataPathArr = [..._, s.parentDataProperty];
    }
    if (f !== void 0) {
      const S = f instanceof e.Name ? f : $.let("data", f, !0);
      y(S), g !== void 0 && (s.propertyName = g);
    }
    p && (s.dataTypes = p);
    function y(S) {
      s.data = S, s.dataLevel = i.dataLevel + 1, s.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), s.parentData = i.data, s.dataNames = [...i.dataNames, S];
    }
  }
  De.extendSubschemaData = r;
  function o(s, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: l, createErrors: f, allErrors: p }) {
    l !== void 0 && (s.compositeRule = l), f !== void 0 && (s.createErrors = f), p !== void 0 && (s.allErrors = p), s.jtdDiscriminator = i, s.jtdMetadata = a;
  }
  return De.extendSubschemaMode = o, De;
}
var ve = {}, or, $o;
function vi() {
  return $o || ($o = 1, or = function e(t, n) {
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
  }), or;
}
var sr = { exports: {} }, vo;
function ja() {
  if (vo) return sr.exports;
  vo = 1;
  var e = sr.exports = function(r, o, s) {
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
  function t(r, o, s, i, a, l, f, p, g, $) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      o(i, a, l, f, p, g, $);
      for (var y in i) {
        var S = i[y];
        if (Array.isArray(S)) {
          if (y in e.arrayKeywords)
            for (var _ = 0; _ < S.length; _++)
              t(r, o, s, S[_], a + "/" + y + "/" + _, l, a, y, i, _);
        } else if (y in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var h in S)
              t(r, o, s, S[h], a + "/" + y + "/" + n(h), l, a, y, i, h);
        } else (y in e.keywords || r.allKeys && !(y in e.skipKeywords)) && t(r, o, s, S, a + "/" + y, l, a, y, i);
      }
      s(i, a, l, f, p, g, $);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return sr.exports;
}
var bo;
function Kn() {
  if (bo) return ve;
  bo = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.getSchemaRefs = ve.resolveUrl = ve.normalizeId = ve._getFullPath = ve.getFullPath = ve.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = vi(), n = ja(), r = /* @__PURE__ */ new Set([
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
  function o(_, h = !0) {
    return typeof _ == "boolean" ? !0 : h === !0 ? !i(_) : h ? a(_) <= h : !1;
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
    for (const h in _) {
      if (s.has(h))
        return !0;
      const v = _[h];
      if (Array.isArray(v) && v.some(i) || typeof v == "object" && i(v))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let h = 0;
    for (const v in _) {
      if (v === "$ref")
        return 1 / 0;
      if (h++, !r.has(v) && (typeof _[v] == "object" && (0, e.eachItem)(_[v], (d) => h += a(d)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function l(_, h = "", v) {
    v !== !1 && (h = g(h));
    const d = _.parse(h);
    return f(_, d);
  }
  ve.getFullPath = l;
  function f(_, h) {
    return _.serialize(h).split("#")[0] + "#";
  }
  ve._getFullPath = f;
  const p = /#\/?$/;
  function g(_) {
    return _ ? _.replace(p, "") : "";
  }
  ve.normalizeId = g;
  function $(_, h, v) {
    return v = g(v), _.resolve(h, v);
  }
  ve.resolveUrl = $;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function S(_, h) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: v, uriResolver: d } = this.opts, m = g(_[v] || h), k = { "": m }, c = l(d, m, !1), u = {}, b = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (T, F, A, I) => {
      if (I === void 0)
        return;
      const W = c + F;
      let te = k[I];
      typeof T[v] == "string" && (te = J.call(this, T[v])), ae.call(this, T.$anchor), ae.call(this, T.$dynamicAnchor), k[F] = te;
      function J(Z) {
        const G = this.opts.uriResolver.resolve;
        if (Z = g(te ? G(te, Z) : Z), b.has(Z))
          throw P(Z);
        b.add(Z);
        let q = this.refs[Z];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? x(T, q.schema, Z) : Z !== g(W) && (Z[0] === "#" ? (x(T, u[Z], Z), u[Z] = T) : this.refs[Z] = W), Z;
      }
      function ae(Z) {
        if (typeof Z == "string") {
          if (!y.test(Z))
            throw new Error(`invalid anchor "${Z}"`);
          J.call(this, `#${Z}`);
        }
      }
    }), u;
    function x(T, F, A) {
      if (F !== void 0 && !t(T, F))
        throw P(A);
    }
    function P(T) {
      return new Error(`reference "${T}" resolves to more than one schema`);
    }
  }
  return ve.getSchemaRefs = S, ve;
}
var wo;
function Hn() {
  if (wo) return ze;
  wo = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.getData = ze.KeywordCxt = ze.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ma(), t = /* @__PURE__ */ zn(), n = /* @__PURE__ */ $i(), r = /* @__PURE__ */ zn(), o = /* @__PURE__ */ Oa(), s = /* @__PURE__ */ Ta(), i = /* @__PURE__ */ Fa(), a = /* @__PURE__ */ oe(), l = /* @__PURE__ */ Me(), f = /* @__PURE__ */ Kn(), p = /* @__PURE__ */ ie(), g = /* @__PURE__ */ Un();
  function $(E) {
    if (c(E) && (b(E), k(E))) {
      h(E);
      return;
    }
    y(E, () => (0, e.topBoolOrEmptySchema)(E));
  }
  ze.validateFunctionCode = $;
  function y({ gen: E, validateName: N, schema: V, schemaEnv: H, opts: U }, Q) {
    U.code.es5 ? E.func(N, (0, a._)`${l.default.data}, ${l.default.valCxt}`, H.$async, () => {
      E.code((0, a._)`"use strict"; ${d(V, U)}`), _(E, U), E.code(Q);
    }) : E.func(N, (0, a._)`${l.default.data}, ${S(U)}`, H.$async, () => E.code(d(V, U)).code(Q));
  }
  function S(E) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${E.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(E, N) {
    E.if(l.default.valCxt, () => {
      E.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), E.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), E.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), E.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), N.dynamicRef && E.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      E.var(l.default.instancePath, (0, a._)`""`), E.var(l.default.parentData, (0, a._)`undefined`), E.var(l.default.parentDataProperty, (0, a._)`undefined`), E.var(l.default.rootData, l.default.data), N.dynamicRef && E.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function h(E) {
    const { schema: N, opts: V, gen: H } = E;
    y(E, () => {
      V.$comment && N.$comment && I(E), T(E), H.let(l.default.vErrors, null), H.let(l.default.errors, 0), V.unevaluated && v(E), x(E), W(E);
    });
  }
  function v(E) {
    const { gen: N, validateName: V } = E;
    E.evaluated = N.const("evaluated", (0, a._)`${V}.evaluated`), N.if((0, a._)`${E.evaluated}.dynamicProps`, () => N.assign((0, a._)`${E.evaluated}.props`, (0, a._)`undefined`)), N.if((0, a._)`${E.evaluated}.dynamicItems`, () => N.assign((0, a._)`${E.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(E, N) {
    const V = typeof E == "object" && E[N.schemaId];
    return V && (N.code.source || N.code.process) ? (0, a._)`/*# sourceURL=${V} */` : a.nil;
  }
  function m(E, N) {
    if (c(E) && (b(E), k(E))) {
      u(E, N);
      return;
    }
    (0, e.boolOrEmptySchema)(E, N);
  }
  function k({ schema: E, self: N }) {
    if (typeof E == "boolean")
      return !E;
    for (const V in E)
      if (N.RULES.all[V])
        return !0;
    return !1;
  }
  function c(E) {
    return typeof E.schema != "boolean";
  }
  function u(E, N) {
    const { schema: V, gen: H, opts: U } = E;
    U.$comment && V.$comment && I(E), F(E), A(E);
    const Q = H.const("_errs", l.default.errors);
    x(E, Q), H.var(N, (0, a._)`${Q} === ${l.default.errors}`);
  }
  function b(E) {
    (0, p.checkUnknownRules)(E), P(E);
  }
  function x(E, N) {
    if (E.opts.jtd)
      return J(E, [], !1, N);
    const V = (0, t.getSchemaTypes)(E.schema), H = (0, t.coerceAndCheckDataType)(E, V);
    J(E, V, !H, N);
  }
  function P(E) {
    const { schema: N, errSchemaPath: V, opts: H, self: U } = E;
    N.$ref && H.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(N, U.RULES) && U.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function T(E) {
    const { schema: N, opts: V } = E;
    N.default !== void 0 && V.useDefaults && V.strictSchema && (0, p.checkStrictMode)(E, "default is ignored in the schema root");
  }
  function F(E) {
    const N = E.schema[E.opts.schemaId];
    N && (E.baseId = (0, f.resolveUrl)(E.opts.uriResolver, E.baseId, N));
  }
  function A(E) {
    if (E.schema.$async && !E.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function I({ gen: E, schemaEnv: N, schema: V, errSchemaPath: H, opts: U }) {
    const Q = V.$comment;
    if (U.$comment === !0)
      E.code((0, a._)`${l.default.self}.logger.log(${Q})`);
    else if (typeof U.$comment == "function") {
      const ne = (0, a.str)`${H}/$comment`, ue = E.scopeValue("root", { ref: N.root });
      E.code((0, a._)`${l.default.self}.opts.$comment(${Q}, ${ne}, ${ue}.schema)`);
    }
  }
  function W(E) {
    const { gen: N, schemaEnv: V, validateName: H, ValidationError: U, opts: Q } = E;
    V.$async ? N.if((0, a._)`${l.default.errors} === 0`, () => N.return(l.default.data), () => N.throw((0, a._)`new ${U}(${l.default.vErrors})`)) : (N.assign((0, a._)`${H}.errors`, l.default.vErrors), Q.unevaluated && te(E), N.return((0, a._)`${l.default.errors} === 0`));
  }
  function te({ gen: E, evaluated: N, props: V, items: H }) {
    V instanceof a.Name && E.assign((0, a._)`${N}.props`, V), H instanceof a.Name && E.assign((0, a._)`${N}.items`, H);
  }
  function J(E, N, V, H) {
    const { gen: U, schema: Q, data: ne, allErrors: ue, opts: ce, self: me } = E, { RULES: pe } = me;
    if (Q.$ref && (ce.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(Q, pe))) {
      U.block(() => L(E, "$ref", pe.all.$ref.definition));
      return;
    }
    ce.jtd || Z(E, N), U.block(() => {
      for (const $e of pe.rules)
        Fe($e);
      Fe(pe.post);
    });
    function Fe($e) {
      (0, n.shouldUseGroup)(Q, $e) && ($e.type ? (U.if((0, r.checkDataType)($e.type, ne, ce.strictNumbers)), ae(E, $e), N.length === 1 && N[0] === $e.type && V && (U.else(), (0, r.reportTypeError)(E)), U.endIf()) : ae(E, $e), ue || U.if((0, a._)`${l.default.errors} === ${H || 0}`));
    }
  }
  function ae(E, N) {
    const { gen: V, schema: H, opts: { useDefaults: U } } = E;
    U && (0, o.assignDefaults)(E, N.type), V.block(() => {
      for (const Q of N.rules)
        (0, n.shouldUseRule)(H, Q) && L(E, Q.keyword, Q.definition, N.type);
    });
  }
  function Z(E, N) {
    E.schemaEnv.meta || !E.opts.strictTypes || (G(E, N), E.opts.allowUnionTypes || q(E, N), R(E, E.dataTypes));
  }
  function G(E, N) {
    if (N.length) {
      if (!E.dataTypes.length) {
        E.dataTypes = N;
        return;
      }
      N.forEach((V) => {
        M(E.dataTypes, V) || C(E, `type "${V}" not allowed by context "${E.dataTypes.join(",")}"`);
      }), w(E, N);
    }
  }
  function q(E, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && C(E, "use allowUnionTypes to allow union type keyword");
  }
  function R(E, N) {
    const V = E.self.RULES.all;
    for (const H in V) {
      const U = V[H];
      if (typeof U == "object" && (0, n.shouldUseRule)(E.schema, U)) {
        const { type: Q } = U.definition;
        Q.length && !Q.some((ne) => D(N, ne)) && C(E, `missing type "${Q.join(",")}" for keyword "${H}"`);
      }
    }
  }
  function D(E, N) {
    return E.includes(N) || N === "number" && E.includes("integer");
  }
  function M(E, N) {
    return E.includes(N) || N === "integer" && E.includes("number");
  }
  function w(E, N) {
    const V = [];
    for (const H of E.dataTypes)
      M(N, H) ? V.push(H) : N.includes("integer") && H === "number" && V.push("integer");
    E.dataTypes = V;
  }
  function C(E, N) {
    const V = E.schemaEnv.baseId + E.errSchemaPath;
    N += ` at "${V}" (strictTypes)`, (0, p.checkStrictMode)(E, N, E.opts.strictTypes);
  }
  class z {
    constructor(N, V, H) {
      if ((0, s.validateKeywordUsage)(N, V, H), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = H, this.data = N.data, this.schema = N.schema[H], this.$data = V.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(N, this.schema, H, this.$data), this.schemaType = V.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = V, this.$data)
        this.schemaCode = N.gen.const("vSchema", X(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, V.schemaType, V.allowUndefined))
        throw new Error(`${H} value must be ${JSON.stringify(V.schemaType)}`);
      ("code" in V ? V.trackErrors : V.errors !== !1) && (this.errsCount = N.gen.const("_errs", l.default.errors));
    }
    result(N, V, H) {
      this.failResult((0, a.not)(N), V, H);
    }
    failResult(N, V, H) {
      this.gen.if(N), H ? H() : this.error(), V ? (this.gen.else(), V(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, V) {
      this.failResult((0, a.not)(N), void 0, V);
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
      const { schemaCode: V } = this;
      this.fail((0, a._)`${V} !== undefined && (${(0, a.or)(this.invalid$data(), N)})`);
    }
    error(N, V, H) {
      if (V) {
        this.setParams(V), this._error(N, H), this.setParams({});
        return;
      }
      this._error(N, H);
    }
    _error(N, V) {
      (N ? g.reportExtraError : g.reportError)(this, this.def.error, V);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      this.allErrors || this.gen.if(N);
    }
    setParams(N, V) {
      V ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, V, H = a.nil) {
      this.gen.block(() => {
        this.check$data(N, H), V();
      });
    }
    check$data(N = a.nil, V = a.nil) {
      if (!this.$data)
        return;
      const { gen: H, schemaCode: U, schemaType: Q, def: ne } = this;
      H.if((0, a.or)((0, a._)`${U} === undefined`, V)), N !== a.nil && H.assign(N, !0), (Q.length || ne.validateSchema) && (H.elseIf(this.invalid$data()), this.$dataError(), N !== a.nil && H.assign(N, !1)), H.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: V, schemaType: H, def: U, it: Q } = this;
      return (0, a.or)(ne(), ue());
      function ne() {
        if (H.length) {
          if (!(V instanceof a.Name))
            throw new Error("ajv implementation error");
          const ce = Array.isArray(H) ? H : [H];
          return (0, a._)`${(0, r.checkDataTypes)(ce, V, Q.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ue() {
        if (U.validateSchema) {
          const ce = N.scopeValue("validate$data", { ref: U.validateSchema });
          return (0, a._)`!${ce}(${V})`;
        }
        return a.nil;
      }
    }
    subschema(N, V) {
      const H = (0, i.getSubschema)(this.it, N);
      (0, i.extendSubschemaData)(H, this.it, N), (0, i.extendSubschemaMode)(H, N);
      const U = { ...this.it, ...H, items: void 0, props: void 0 };
      return m(U, V), U;
    }
    mergeEvaluated(N, V) {
      const { it: H, gen: U } = this;
      H.opts.unevaluated && (H.props !== !0 && N.props !== void 0 && (H.props = p.mergeEvaluated.props(U, N.props, H.props, V)), H.items !== !0 && N.items !== void 0 && (H.items = p.mergeEvaluated.items(U, N.items, H.items, V)));
    }
    mergeValidEvaluated(N, V) {
      const { it: H, gen: U } = this;
      if (H.opts.unevaluated && (H.props !== !0 || H.items !== !0))
        return U.if(V, () => this.mergeEvaluated(N, a.Name)), !0;
    }
  }
  ze.KeywordCxt = z;
  function L(E, N, V, H) {
    const U = new z(E, V, N);
    "code" in V ? V.code(U, H) : U.$data && V.validate ? (0, s.funcKeywordCode)(U, V) : "macro" in V ? (0, s.macroKeywordCode)(U, V) : (V.compile || V.validate) && (0, s.funcKeywordCode)(U, V);
  }
  const K = /^\/(?:[^~]|~0|~1)*$/, ee = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function X(E, { dataLevel: N, dataNames: V, dataPathArr: H }) {
    let U, Q;
    if (E === "")
      return l.default.rootData;
    if (E[0] === "/") {
      if (!K.test(E))
        throw new Error(`Invalid JSON-pointer: ${E}`);
      U = E, Q = l.default.rootData;
    } else {
      const me = ee.exec(E);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${E}`);
      const pe = +me[1];
      if (U = me[2], U === "#") {
        if (pe >= N)
          throw new Error(ce("property/index", pe));
        return H[N - pe];
      }
      if (pe > N)
        throw new Error(ce("data", pe));
      if (Q = V[N - pe], !U)
        return Q;
    }
    let ne = Q;
    const ue = U.split("/");
    for (const me of ue)
      me && (Q = (0, a._)`${Q}${(0, a.getProperty)((0, p.unescapeJsonPointer)(me))}`, ne = (0, a._)`${ne} && ${Q}`);
    return ne;
    function ce(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${N}`;
    }
  }
  return ze.getData = X, ze;
}
var It = {}, _o;
function Or() {
  if (_o) return It;
  _o = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return It.default = e, It;
}
var Dt = {}, So;
function Gn() {
  if (So) return Dt;
  So = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kn();
  class t extends Error {
    constructor(r, o, s, i) {
      super(i || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Dt.default = t, Dt;
}
var be = {}, ko;
function Wn() {
  if (ko) return be;
  ko = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.resolveSchema = be.getCompilingSchema = be.resolveRef = be.compileSchema = be.SchemaEnv = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ Or(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ Kn(), o = /* @__PURE__ */ ie(), s = /* @__PURE__ */ Hn();
  class i {
    constructor(v) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof v.schema == "object" && (m = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (d = v.baseId) !== null && d !== void 0 ? d : (0, r.normalizeId)(m?.[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  be.SchemaEnv = i;
  function a(h) {
    const v = p.call(this, h);
    if (v)
      return v;
    const d = (0, r.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: m, lines: k } = this.opts.code, { ownProperties: c } = this.opts, u = new e.CodeGen(this.scope, { es5: m, lines: k, ownProperties: c });
    let b;
    h.$async && (b = u.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = u.scopeName("validate");
    h.validateName = x;
    const P = {
      gen: u,
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
      topSchemaRef: u.scopeValue("schema", this.opts.code.source === !0 ? { ref: h.schema, code: (0, e.stringify)(h.schema) } : { ref: h.schema }),
      validateName: x,
      ValidationError: b,
      schema: h.schema,
      schemaEnv: h,
      rootId: d,
      baseId: h.baseId || d,
      schemaPath: e.nil,
      errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let T;
    try {
      this._compilations.add(h), (0, s.validateFunctionCode)(P), u.optimize(this.opts.code.optimize);
      const F = u.toString();
      T = `${u.scopeRefs(n.default.scope)}return ${F}`, this.opts.code.process && (T = this.opts.code.process(T, h));
      const I = new Function(`${n.default.self}`, `${n.default.scope}`, T)(this, this.scope.get());
      if (this.scope.value(x, { ref: I }), I.errors = null, I.schema = h.schema, I.schemaEnv = h, h.$async && (I.$async = !0), this.opts.code.source === !0 && (I.source = { validateName: x, validateCode: F, scopeValues: u._values }), this.opts.unevaluated) {
        const { props: W, items: te } = P;
        I.evaluated = {
          props: W instanceof e.Name ? void 0 : W,
          items: te instanceof e.Name ? void 0 : te,
          dynamicProps: W instanceof e.Name,
          dynamicItems: te instanceof e.Name
        }, I.source && (I.source.evaluated = (0, e.stringify)(I.evaluated));
      }
      return h.validate = I, h;
    } catch (F) {
      throw delete h.validate, delete h.validateName, T && this.logger.error("Error compiling schema, function code:", T), F;
    } finally {
      this._compilations.delete(h);
    }
  }
  be.compileSchema = a;
  function l(h, v, d) {
    var m;
    d = (0, r.resolveUrl)(this.opts.uriResolver, v, d);
    const k = h.refs[d];
    if (k)
      return k;
    let c = $.call(this, h, d);
    if (c === void 0) {
      const u = (m = h.localRefs) === null || m === void 0 ? void 0 : m[d], { schemaId: b } = this.opts;
      u && (c = new i({ schema: u, schemaId: b, root: h, baseId: v }));
    }
    if (c !== void 0)
      return h.refs[d] = f.call(this, c);
  }
  be.resolveRef = l;
  function f(h) {
    return (0, r.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : a.call(this, h);
  }
  function p(h) {
    for (const v of this._compilations)
      if (g(v, h))
        return v;
  }
  be.getCompilingSchema = p;
  function g(h, v) {
    return h.schema === v.schema && h.root === v.root && h.baseId === v.baseId;
  }
  function $(h, v) {
    let d;
    for (; typeof (d = this.refs[v]) == "string"; )
      v = d;
    return d || this.schemas[v] || y.call(this, h, v);
  }
  function y(h, v) {
    const d = this.opts.uriResolver.parse(v), m = (0, r._getFullPath)(this.opts.uriResolver, d);
    let k = (0, r.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && m === k)
      return _.call(this, d, h);
    const c = (0, r.normalizeId)(m), u = this.refs[c] || this.schemas[c];
    if (typeof u == "string") {
      const b = y.call(this, h, u);
      return typeof b?.schema != "object" ? void 0 : _.call(this, d, b);
    }
    if (typeof u?.schema == "object") {
      if (u.validate || a.call(this, u), c === (0, r.normalizeId)(v)) {
        const { schema: b } = u, { schemaId: x } = this.opts, P = b[x];
        return P && (k = (0, r.resolveUrl)(this.opts.uriResolver, k, P)), new i({ schema: b, schemaId: x, root: h, baseId: k });
      }
      return _.call(this, d, u);
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
  function _(h, { baseId: v, schema: d, root: m }) {
    var k;
    if (((k = h.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/")
      return;
    for (const b of h.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const x = d[(0, o.unescapeFragment)(b)];
      if (x === void 0)
        return;
      d = x;
      const P = typeof d == "object" && d[this.opts.schemaId];
      !S.has(b) && P && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, P));
    }
    let c;
    if (typeof d != "boolean" && d.$ref && !(0, o.schemaHasRulesButRef)(d, this.RULES)) {
      const b = (0, r.resolveUrl)(this.opts.uriResolver, v, d.$ref);
      c = y.call(this, m, b);
    }
    const { schemaId: u } = this.opts;
    if (c = c || new i({ schema: d, schemaId: u, root: m, baseId: v }), c.schema !== c.root.schema)
      return c;
  }
  return be;
}
const za = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ia = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Da = "object", qa = ["$data"], La = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Va = !1, Ba = {
  $id: za,
  description: Ia,
  type: Da,
  required: qa,
  properties: La,
  additionalProperties: Va
};
var qt = {}, Ct = { exports: {} }, ir, Co;
function bi() {
  if (Co) return ir;
  Co = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function s(c) {
    let u = "", b = 0, x = 0;
    for (x = 0; x < c.length; x++)
      if (b = c[x].charCodeAt(0), b !== 48) {
        if (!(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
          return "";
        u += c[x];
        break;
      }
    for (x += 1; x < c.length; x++) {
      if (b = c[x].charCodeAt(0), !(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
        return "";
      u += c[x];
    }
    return u;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, u, b) {
    if (c.length) {
      const x = s(c);
      if (x !== "")
        u.push(x);
      else
        return b.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function f(c) {
    let u = 0;
    const b = { error: !1, address: "", zone: "" }, x = [], P = [];
    let T = !1, F = !1, A = l;
    for (let I = 0; I < c.length; I++) {
      const W = c[I];
      if (!(W === "[" || W === "]"))
        if (W === ":") {
          if (T === !0 && (F = !0), !A(P, x, b))
            break;
          if (++u > 7) {
            b.error = !0;
            break;
          }
          I > 0 && c[I - 1] === ":" && (T = !0), x.push(":");
          continue;
        } else if (W === "%") {
          if (!A(P, x, b))
            break;
          A = a;
        } else {
          P.push(W);
          continue;
        }
    }
    return P.length && (A === a ? b.zone = P.join("") : F ? x.push(P.join("")) : x.push(s(P))), b.address = x.join(""), b;
  }
  function p(c) {
    if (g(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const u = f(c);
    if (u.error)
      return { host: c, isIPV6: !1 };
    {
      let b = u.address, x = u.address;
      return u.zone && (b += "%" + u.zone, x += "%25" + u.zone), { host: b, isIPV6: !0, escapedHost: x };
    }
  }
  function g(c, u) {
    let b = 0;
    for (let x = 0; x < c.length; x++)
      c[x] === u && b++;
    return b;
  }
  function $(c) {
    let u = c;
    const b = [];
    let x = -1, P = 0;
    for (; P = u.length; ) {
      if (P === 1) {
        if (u === ".")
          break;
        if (u === "/") {
          b.push("/");
          break;
        } else {
          b.push(u);
          break;
        }
      } else if (P === 2) {
        if (u[0] === ".") {
          if (u[1] === ".")
            break;
          if (u[1] === "/") {
            u = u.slice(2);
            continue;
          }
        } else if (u[0] === "/" && (u[1] === "." || u[1] === "/")) {
          b.push("/");
          break;
        }
      } else if (P === 3 && u === "/..") {
        b.length !== 0 && b.pop(), b.push("/");
        break;
      }
      if (u[0] === ".") {
        if (u[1] === ".") {
          if (u[2] === "/") {
            u = u.slice(3);
            continue;
          }
        } else if (u[1] === "/") {
          u = u.slice(2);
          continue;
        }
      } else if (u[0] === "/" && u[1] === ".") {
        if (u[2] === "/") {
          u = u.slice(2);
          continue;
        } else if (u[2] === "." && u[3] === "/") {
          u = u.slice(3), b.length !== 0 && b.pop();
          continue;
        }
      }
      if ((x = u.indexOf("/", 1)) === -1) {
        b.push(u);
        break;
      } else
        b.push(u.slice(0, x)), u = u.slice(x);
    }
    return b.join("");
  }
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, _ = /[@/?#]/g;
  function h(c, u) {
    const b = u ? _ : S;
    return b.lastIndex = 0, c.replace(b, (x) => y[x]);
  }
  function v(c, u = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let b = "";
    for (let x = 0; x < c.length; x++) {
      if (c[x] === "%" && x + 2 < c.length) {
        const P = c.slice(x + 1, x + 3);
        if (n(P)) {
          const T = P.toUpperCase(), F = String.fromCharCode(parseInt(T, 16));
          u && r(F) ? b += F : b += "%" + T, x += 2;
          continue;
        }
      }
      b += c[x];
    }
    return b;
  }
  function d(c) {
    let u = "";
    for (let b = 0; b < c.length; b++) {
      if (c[b] === "%" && b + 2 < c.length) {
        const x = c.slice(b + 1, b + 3);
        if (n(x)) {
          const P = x.toUpperCase(), T = String.fromCharCode(parseInt(P, 16));
          T !== "." && r(T) ? u += T : u += "%" + P, b += 2;
          continue;
        }
      }
      o(c[b]) ? u += c[b] : u += escape(c[b]);
    }
    return u;
  }
  function m(c) {
    let u = "";
    for (let b = 0; b < c.length; b++) {
      if (c[b] === "%" && b + 2 < c.length) {
        const x = c.slice(b + 1, b + 3);
        if (n(x)) {
          u += "%" + x.toUpperCase(), b += 2;
          continue;
        }
      }
      u += escape(c[b]);
    }
    return u;
  }
  function k(c) {
    const u = [];
    if (c.userinfo !== void 0 && (u.push(c.userinfo), u.push("@")), c.host !== void 0) {
      let b = unescape(c.host);
      if (!t(b)) {
        const x = p(b);
        x.isIPV6 === !0 ? b = `[${x.escapedHost}]` : b = h(b, !1);
      }
      u.push(b);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (u.push(":"), u.push(String(c.port))), u.length ? u.join("") : void 0;
  }
  return ir = {
    nonSimpleDomain: i,
    recomposeAuthority: k,
    reescapeHostDelimiters: h,
    normalizePercentEncoding: v,
    normalizePathEncoding: d,
    escapePreservingEscapes: m,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: p,
    stringArrayToHexStripped: s
  }, ir;
}
var ar, Eo;
function Ua() {
  if (Eo) return ar;
  Eo = 1;
  const { isUUID: e } = bi(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
    const u = String(c.scheme).toLowerCase() === "https";
    return (c.port === (u ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = o(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function l(c) {
    if ((c.port === (o(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [u, b] = c.resourceName.split("?");
      c.path = u && u !== "/" ? u : void 0, c.query = b, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function f(c, u) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const b = c.path.match(t);
    if (b) {
      const x = u.scheme || c.scheme || "urn";
      c.nid = b[1].toLowerCase(), c.nss = b[2];
      const P = `${x}:${u.nid || c.nid}`, T = k(P);
      c.path = void 0, T && (c = T.parse(c, u));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function p(c, u) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const b = u.scheme || c.scheme || "urn", x = c.nid.toLowerCase(), P = `${b}:${u.nid || x}`, T = k(P);
    T && (c = T.serialize(c, u));
    const F = c, A = c.nss;
    return F.path = `${x || u.nid}:${A}`, u.skipEscape = !0, F;
  }
  function g(c, u) {
    const b = c;
    return b.uuid = b.nss, b.nss = void 0, !u.tolerant && (!b.uuid || !e(b.uuid)) && (b.error = b.error || "UUID is not valid."), b;
  }
  function $(c) {
    const u = c;
    return u.nss = (c.uuid || "").toLowerCase(), u;
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
      serialize: l
    }
  ), h = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: _.domainHost,
      parse: _.parse,
      serialize: _.serialize
    }
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: y,
      https: S,
      ws: _,
      wss: h,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: f,
          serialize: p,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: g,
          serialize: $,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(m, null);
  function k(c) {
    return c && (m[
      /** @type {SchemeName} */
      c
    ] || m[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return ar = {
    wsIsSecure: o,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: k
  }, ar;
}
var xo;
function Ka() {
  if (xo) return Ct.exports;
  xo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: s, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: l } = bi(), { SCHEMES: f, getSchemeHandler: p } = Ua();
  function g(P, T) {
    return typeof P == "string" ? P = /** @type {T} */
    c(P, T) : typeof P == "object" && (P = /** @type {T} */
    k(_(P, T), T)), P;
  }
  function $(P, T, F) {
    const A = F ? Object.assign({ scheme: "null" }, F) : { scheme: "null" }, I = y(k(P, A), k(T, A), A, !0);
    return A.skipEscape = !0, _(I, A);
  }
  function y(P, T, F, A) {
    const I = {};
    return A || (P = k(_(P, F), F), T = k(_(T, F), F)), F = F || {}, !F.tolerant && T.scheme ? (I.scheme = T.scheme, I.userinfo = T.userinfo, I.host = T.host, I.port = T.port, I.path = t(T.path || ""), I.query = T.query) : (T.userinfo !== void 0 || T.host !== void 0 || T.port !== void 0 ? (I.userinfo = T.userinfo, I.host = T.host, I.port = T.port, I.path = t(T.path || ""), I.query = T.query) : (T.path ? (T.path[0] === "/" ? I.path = t(T.path) : ((P.userinfo !== void 0 || P.host !== void 0 || P.port !== void 0) && !P.path ? I.path = "/" + T.path : P.path ? I.path = P.path.slice(0, P.path.lastIndexOf("/") + 1) + T.path : I.path = T.path, I.path = t(I.path)), I.query = T.query) : (I.path = P.path, T.query !== void 0 ? I.query = T.query : I.query = P.query), I.userinfo = P.userinfo, I.host = P.host, I.port = P.port), I.scheme = P.scheme), I.fragment = T.fragment, I;
  }
  function S(P, T, F) {
    const A = b(P, F), I = b(T, F);
    return A !== void 0 && I !== void 0 && A.toLowerCase() === I.toLowerCase();
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
    }, A = Object.assign({}, T), I = [], W = p(A.scheme || F.scheme);
    W && W.serialize && W.serialize(F, A), F.path !== void 0 && (A.skipEscape ? F.path = r(F.path) : (F.path = s(F.path), F.scheme !== void 0 && (F.path = F.path.split("%3A").join(":")))), A.reference !== "suffix" && F.scheme && I.push(F.scheme, ":");
    const te = n(F);
    if (te !== void 0 && (A.reference !== "suffix" && I.push("//"), I.push(te), F.path && F.path[0] !== "/" && I.push("/")), F.path !== void 0) {
      let J = F.path;
      !A.absolutePath && (!W || !W.absolutePath) && (J = t(J)), te === void 0 && J[0] === "/" && J[1] === "/" && (J = "/%2F" + J.slice(2)), I.push(J);
    }
    return F.query !== void 0 && I.push("?", F.query), F.fragment !== void 0 && I.push("#", F.fragment), I.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, v = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function d(P, T) {
    if (T[2] !== void 0 && P.path && P.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof P.port == "number" && (P.port < 0 || P.port > 65535))
      return "URI port is malformed.";
  }
  function m(P, T) {
    const F = Object.assign({}, T), A = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let I = !1, W = !1;
    F.reference === "suffix" && (F.scheme ? P = F.scheme + ":" + P : P = "//" + P);
    const te = P.match(v);
    te !== null && te[1].indexOf("\\") !== -1 && (A.error = "URI authority must not contain a literal backslash.", I = !0);
    const J = P.match(h);
    if (J) {
      A.scheme = J[1], A.userinfo = J[3], A.host = J[4], A.port = parseInt(J[5], 10), A.path = J[6] || "", A.query = J[7], A.fragment = J[8], isNaN(A.port) && (A.port = J[5]);
      const ae = d(A, J);
      if (ae !== void 0 && (A.error = A.error || ae, I = !0), A.host)
        if (a(A.host) === !1) {
          const q = e(A.host);
          A.host = q.host.toLowerCase(), W = q.isIPV6;
        } else
          W = !0;
      A.scheme === void 0 && A.userinfo === void 0 && A.host === void 0 && A.port === void 0 && A.query === void 0 && !A.path ? A.reference = "same-document" : A.scheme === void 0 ? A.reference = "relative" : A.fragment === void 0 ? A.reference = "absolute" : A.reference = "uri", F.reference && F.reference !== "suffix" && F.reference !== A.reference && (A.error = A.error || "URI is not a " + F.reference + " reference.");
      const Z = p(F.scheme || A.scheme);
      if (!F.unicodeSupport && (!Z || !Z.unicodeSupport) && A.host && (F.domainHost || Z && Z.domainHost) && W === !1 && l(A.host))
        try {
          A.host = new URL("http://" + A.host).hostname;
        } catch (G) {
          A.error = A.error || "Host's domain name can not be converted to ASCII: " + G;
        }
      if ((!Z || Z && !Z.skipNormalize) && (P.indexOf("%") !== -1 && (A.scheme !== void 0 && (A.scheme = unescape(A.scheme)), A.host !== void 0 && (A.host = i(unescape(A.host), W))), A.path && (A.path = o(A.path)), A.fragment))
        try {
          A.fragment = encodeURI(decodeURIComponent(A.fragment));
        } catch {
          A.error = A.error || "URI malformed";
        }
      Z && Z.parse && Z.parse(A, F);
    } else
      A.error = A.error || "URI can not be parsed.";
    return { parsed: A, malformedAuthorityOrPort: I };
  }
  function k(P, T) {
    return m(P, T).parsed;
  }
  function c(P, T) {
    return u(P, T).normalized;
  }
  function u(P, T) {
    const { parsed: F, malformedAuthorityOrPort: A } = m(P, T);
    return {
      normalized: A ? P : _(F, T),
      malformedAuthorityOrPort: A
    };
  }
  function b(P, T) {
    if (typeof P == "string") {
      const { normalized: F, malformedAuthorityOrPort: A } = u(P, T);
      return A ? void 0 : F;
    }
    if (typeof P == "object")
      return _(P, T);
  }
  const x = {
    SCHEMES: f,
    normalize: g,
    resolve: $,
    resolveComponent: y,
    equal: S,
    serialize: _,
    parse: k
  };
  return Ct.exports = x, Ct.exports.default = x, Ct.exports.fastUri = x, Ct.exports;
}
var Po;
function Ha() {
  if (Po) return qt;
  Po = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = Ka();
  return e.code = 'require("ajv/dist/runtime/uri").default', qt.default = e, qt;
}
var Ao;
function Ga() {
  return Ao || (Ao = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Hn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ oe();
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
    const r = /* @__PURE__ */ Or(), o = /* @__PURE__ */ Gn(), s = /* @__PURE__ */ yi(), i = /* @__PURE__ */ Wn(), a = /* @__PURE__ */ oe(), l = /* @__PURE__ */ Kn(), f = /* @__PURE__ */ zn(), p = /* @__PURE__ */ ie(), g = Ba, $ = /* @__PURE__ */ Ha(), y = (q, R) => new RegExp(q, R);
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
    ]), h = {
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
    }, v = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, d = 200;
    function m(q) {
      var R, D, M, w, C, z, L, K, ee, X, E, N, V, H, U, Q, ne, ue, ce, me, pe, Fe, $e, Ce, je;
      const Ze = q.strict, Xn = (R = q.code) === null || R === void 0 ? void 0 : R.optimize, Yr = Xn === !0 || Xn === void 0 ? 1 : Xn || 0, Xr = (M = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && M !== void 0 ? M : y, Gi = (w = q.uriResolver) !== null && w !== void 0 ? w : $.default;
      return {
        strictSchema: (z = (C = q.strictSchema) !== null && C !== void 0 ? C : Ze) !== null && z !== void 0 ? z : !0,
        strictNumbers: (K = (L = q.strictNumbers) !== null && L !== void 0 ? L : Ze) !== null && K !== void 0 ? K : !0,
        strictTypes: (X = (ee = q.strictTypes) !== null && ee !== void 0 ? ee : Ze) !== null && X !== void 0 ? X : "log",
        strictTuples: (N = (E = q.strictTuples) !== null && E !== void 0 ? E : Ze) !== null && N !== void 0 ? N : "log",
        strictRequired: (H = (V = q.strictRequired) !== null && V !== void 0 ? V : Ze) !== null && H !== void 0 ? H : !1,
        code: q.code ? { ...q.code, optimize: Yr, regExp: Xr } : { optimize: Yr, regExp: Xr },
        loopRequired: (U = q.loopRequired) !== null && U !== void 0 ? U : d,
        loopEnum: (Q = q.loopEnum) !== null && Q !== void 0 ? Q : d,
        meta: (ne = q.meta) !== null && ne !== void 0 ? ne : !0,
        messages: (ue = q.messages) !== null && ue !== void 0 ? ue : !0,
        inlineRefs: (ce = q.inlineRefs) !== null && ce !== void 0 ? ce : !0,
        schemaId: (me = q.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = q.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (Fe = q.validateSchema) !== null && Fe !== void 0 ? Fe : !0,
        validateFormats: ($e = q.validateFormats) !== null && $e !== void 0 ? $e : !0,
        unicodeRegExp: (Ce = q.unicodeRegExp) !== null && Ce !== void 0 ? Ce : !0,
        int32range: (je = q.int32range) !== null && je !== void 0 ? je : !0,
        uriResolver: Gi
      };
    }
    class k {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...m(R) };
        const { es5: D, lines: M } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: D, lines: M }), this.logger = A(R.logger);
        const w = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, s.getRules)(), c.call(this, h, R, "NOT SUPPORTED"), c.call(this, v, R, "DEPRECATED", "warn"), this._metaOpts = T.call(this), R.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && P.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), b.call(this), R.validateFormats = w;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: D, schemaId: M } = this.opts;
        let w = g;
        M === "id" && (w = { ...g }, w.id = w.$id, delete w.$id), D && R && this.addMetaSchema(w, w[M], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[D] || R : void 0;
      }
      validate(R, D) {
        let M;
        if (typeof R == "string") {
          if (M = this.getSchema(R), !M)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          M = this.compile(R);
        const w = M(D);
        return "$async" in M || (this.errors = M.errors), w;
      }
      compile(R, D) {
        const M = this._addSchema(R, D);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(R, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return w.call(this, R, D);
        async function w(X, E) {
          await C.call(this, X.$schema);
          const N = this._addSchema(X, E);
          return N.validate || z.call(this, N);
        }
        async function C(X) {
          X && !this.getSchema(X) && await w.call(this, { $ref: X }, !0);
        }
        async function z(X) {
          try {
            return this._compileSchemaEnv(X);
          } catch (E) {
            if (!(E instanceof o.default))
              throw E;
            return L.call(this, E), await K.call(this, E.missingSchema), z.call(this, X);
          }
        }
        function L({ missingSchema: X, missingRef: E }) {
          if (this.refs[X])
            throw new Error(`AnySchema ${X} is loaded but ${E} cannot be resolved`);
        }
        async function K(X) {
          const E = await ee.call(this, X);
          this.refs[X] || await C.call(this, E.$schema), this.refs[X] || this.addSchema(E, X, D);
        }
        async function ee(X) {
          const E = this._loading[X];
          if (E)
            return E;
          try {
            return await (this._loading[X] = M(X));
          } finally {
            delete this._loading[X];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, D, M, w = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const z of R)
            this.addSchema(z, void 0, M, w);
          return this;
        }
        let C;
        if (typeof R == "object") {
          const { schemaId: z } = this.opts;
          if (C = R[z], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${z} must be string`);
        }
        return D = (0, l.normalizeId)(D || C), this._checkUnique(D), this.schemas[D] = this._addSchema(R, M, D, w, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, D, M = this.opts.validateSchema) {
        return this.addSchema(R, D, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, D) {
        if (typeof R == "boolean")
          return !0;
        let M;
        if (M = R.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const w = this.validate(M, R);
        if (!w && D) {
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
        let D;
        for (; typeof (D = u.call(this, R)) == "string"; )
          R = D;
        if (D === void 0) {
          const { schemaId: M } = this.opts, w = new i.SchemaEnv({ schema: {}, schemaId: M });
          if (D = i.resolveSchema.call(this, w, R), !D)
            return;
          this.refs[R] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
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
            const D = u.call(this, R);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const D = R;
            this._cache.delete(D);
            let M = R[this.opts.schemaId];
            return M && (M = (0, l.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const D of R)
          this.addKeyword(D);
        return this;
      }
      addKeyword(R, D) {
        let M;
        if (typeof R == "string")
          M = R, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = M);
        else if (typeof R == "object" && D === void 0) {
          if (D = R, M = D.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (W.call(this, M, D), !D)
          return (0, p.eachItem)(M, (C) => te.call(this, C)), this;
        ae.call(this, D);
        const w = {
          ...D,
          type: (0, f.getJSONTypes)(D.type),
          schemaType: (0, f.getJSONTypes)(D.schemaType)
        };
        return (0, p.eachItem)(M, w.type.length === 0 ? (C) => te.call(this, C, w) : (C) => w.type.forEach((z) => te.call(this, C, w, z))), this;
      }
      getKeyword(R) {
        const D = this.RULES.all[R];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: D } = this;
        delete D.keywords[R], delete D.all[R];
        for (const M of D.rules) {
          const w = M.rules.findIndex((C) => C.keyword === R);
          w >= 0 && M.rules.splice(w, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[R] = D, this;
      }
      errorsText(R = this.errors, { separator: D = ", ", dataVar: M = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((w) => `${M}${w.instancePath} ${w.message}`).reduce((w, C) => w + D + C);
      }
      $dataMetaSchema(R, D) {
        const M = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const w of D) {
          const C = w.split("/").slice(1);
          let z = R;
          for (const L of C)
            z = z[L];
          for (const L in M) {
            const K = M[L];
            if (typeof K != "object")
              continue;
            const { $data: ee } = K.definition, X = z[L];
            ee && X && (z[L] = G(X));
          }
        }
        return R;
      }
      _removeAllSchemas(R, D) {
        for (const M in R) {
          const w = R[M];
          (!D || D.test(M)) && (typeof w == "string" ? delete R[M] : w && !w.meta && (this._cache.delete(w.schema), delete R[M]));
        }
      }
      _addSchema(R, D, M, w = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let z;
        const { schemaId: L } = this.opts;
        if (typeof R == "object")
          z = R[L];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let K = this._cache.get(R);
        if (K !== void 0)
          return K;
        M = (0, l.normalizeId)(z || M);
        const ee = l.getSchemaRefs.call(this, R, M);
        return K = new i.SchemaEnv({ schema: R, schemaId: L, meta: D, baseId: M, localRefs: ee }), this._cache.set(K.schema, K), C && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = K), w && this.validateSchema(R, !0), K;
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
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, R);
        } finally {
          this.opts = D;
        }
      }
    }
    k.ValidationError = r.default, k.MissingRefError = o.default, e.default = k;
    function c(q, R, D, M = "error") {
      for (const w in q) {
        const C = w;
        C in R && this.logger[M](`${D}: option ${w}. ${q[C]}`);
      }
    }
    function u(q) {
      return q = (0, l.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function b() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const R in q)
            this.addSchema(q[R], R);
    }
    function x() {
      for (const q in this.opts.formats) {
        const R = this.opts.formats[q];
        R && this.addFormat(q, R);
      }
    }
    function P(q) {
      if (Array.isArray(q)) {
        this.addVocabulary(q);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in q) {
        const D = q[R];
        D.keyword || (D.keyword = R), this.addKeyword(D);
      }
    }
    function T() {
      const q = { ...this.opts };
      for (const R of S)
        delete q[R];
      return q;
    }
    const F = { log() {
    }, warn() {
    }, error() {
    } };
    function A(q) {
      if (q === !1)
        return F;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const I = /^[a-z_$][a-z0-9_$:-]*$/i;
    function W(q, R) {
      const { RULES: D } = this;
      if ((0, p.eachItem)(q, (M) => {
        if (D.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!I.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(q, R, D) {
      var M;
      const w = R?.post;
      if (D && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let z = w ? C.post : C.rules.find(({ type: K }) => K === D);
      if (z || (z = { type: D, rules: [] }, C.rules.push(z)), C.keywords[q] = !0, !R)
        return;
      const L = {
        keyword: q,
        definition: {
          ...R,
          type: (0, f.getJSONTypes)(R.type),
          schemaType: (0, f.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? J.call(this, z, L, R.before) : z.rules.push(L), C.all[q] = L, (M = R.implements) === null || M === void 0 || M.forEach((K) => this.addKeyword(K));
    }
    function J(q, R, D) {
      const M = q.rules.findIndex((w) => w.keyword === D);
      M >= 0 ? q.rules.splice(M, 0, R) : (q.rules.push(R), this.logger.warn(`rule ${D} is not defined`));
    }
    function ae(q) {
      let { metaSchema: R } = q;
      R !== void 0 && (q.$data && this.opts.$data && (R = G(R)), q.validateSchema = this.compile(R, !0));
    }
    const Z = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function G(q) {
      return { anyOf: [q, Z] };
    }
  })(Qn)), Qn;
}
var Lt = {}, Vt = {}, Bt = {}, Ro;
function Wa() {
  if (Ro) return Bt;
  Ro = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Bt.default = e, Bt;
}
var Ke = {}, No;
function Tr() {
  if (No) return Ke;
  No = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.callRef = Ke.getValidate = void 0;
  const e = /* @__PURE__ */ Gn(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Me(), o = /* @__PURE__ */ Wn(), s = /* @__PURE__ */ ie(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(f) {
      const { gen: p, schema: g, it: $ } = f, { baseId: y, schemaEnv: S, validateName: _, opts: h, self: v } = $, { root: d } = S;
      if ((g === "#" || g === "#/") && y === d.baseId)
        return k();
      const m = o.resolveRef.call(v, d, y, g);
      if (m === void 0)
        throw new e.default($.opts.uriResolver, y, g);
      if (m instanceof o.SchemaEnv)
        return c(m);
      return u(m);
      function k() {
        if (S === d)
          return l(f, _, S, S.$async);
        const b = p.scopeValue("root", { ref: d });
        return l(f, (0, n._)`${b}.validate`, d, d.$async);
      }
      function c(b) {
        const x = a(f, b);
        l(f, x, b, b.$async);
      }
      function u(b) {
        const x = p.scopeValue("schema", h.code.source === !0 ? { ref: b, code: (0, n.stringify)(b) } : { ref: b }), P = p.name("valid"), T = f.subschema({
          schema: b,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: x,
          errSchemaPath: g
        }, P);
        f.mergeEvaluated(T), f.ok(P);
      }
    }
  };
  function a(f, p) {
    const { gen: g } = f;
    return p.validate ? g.scopeValue("validate", { ref: p.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: p })}.validate`;
  }
  Ke.getValidate = a;
  function l(f, p, g, $) {
    const { gen: y, it: S } = f, { allErrors: _, schemaEnv: h, opts: v } = S, d = v.passContext ? r.default.this : n.nil;
    $ ? m() : k();
    function m() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const b = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(f, p, d)}`), u(p), _ || y.assign(b, !0);
      }, (x) => {
        y.if((0, n._)`!(${x} instanceof ${S.ValidationError})`, () => y.throw(x)), c(x), _ || y.assign(b, !1);
      }), f.ok(b);
    }
    function k() {
      f.result((0, t.callValidateCode)(f, p, d), () => u(p), () => c(p));
    }
    function c(b) {
      const x = (0, n._)`${b}.errors`;
      y.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${x} : ${r.default.vErrors}.concat(${x})`), y.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function u(b) {
      var x;
      if (!S.opts.unevaluated)
        return;
      const P = (x = g?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (S.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (S.props = s.mergeEvaluated.props(y, P.props, S.props));
        else {
          const T = y.var("props", (0, n._)`${b}.evaluated.props`);
          S.props = s.mergeEvaluated.props(y, T, S.props, n.Name);
        }
      if (S.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (S.items = s.mergeEvaluated.items(y, P.items, S.items));
        else {
          const T = y.var("items", (0, n._)`${b}.evaluated.items`);
          S.items = s.mergeEvaluated.items(y, T, S.items, n.Name);
        }
    }
  }
  return Ke.callRef = l, Ke.default = i, Ke;
}
var Mo;
function Ja() {
  if (Mo) return Vt;
  Mo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wa(), t = /* @__PURE__ */ Tr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Vt.default = n, Vt;
}
var Ut = {}, Kt = {}, Oo;
function Ya() {
  if (Oo) return Kt;
  Oo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = e.operators, n = {
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
  return Kt.default = o, Kt;
}
var Ht = {}, To;
function Xa() {
  if (To) return Ht;
  To = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: o, data: s, schemaCode: i, it: a } = r, l = a.opts.multipleOfPrecision, f = o.let("res"), p = l ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${l}` : (0, e._)`${f} !== parseInt(${f})`;
      r.fail$data((0, e._)`(${i} === 0 || (${f} = ${s}/${i}, ${p}))`);
    }
  };
  return Ht.default = n, Ht;
}
var Gt = {}, Wt = {}, Fo;
function Za() {
  if (Fo) return Wt;
  Fo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, s;
    for (; o < n; )
      r++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < n && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return r;
  }
  return Wt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Wt;
}
var jo;
function Qa() {
  if (jo) return Gt;
  jo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Za(), o = {
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
      const { keyword: i, data: a, schemaCode: l, it: f } = s, p = i === "maxLength" ? e.operators.GT : e.operators.LT, g = f.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(s.gen, n.default)}(${a})`;
      s.fail$data((0, e._)`${g} ${p} ${l}`);
    }
  };
  return Gt.default = o, Gt;
}
var Jt = {}, zo;
function ec() {
  if (zo) return Jt;
  zo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ oe(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, n.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, n._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schema: f, schemaCode: p, it: g } = s, $ = g.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: y } = g.opts.code, S = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, y), _ = i.let("valid");
        i.try(() => i.assign(_, (0, n._)`${S}(${p}, ${$}).test(${a})`), () => i.assign(_, !1)), s.fail$data((0, n._)`!${_}`);
      } else {
        const y = (0, e.usePattern)(s, f);
        s.fail$data((0, n._)`!${y}.test(${a})`);
      }
    }
  };
  return Jt.default = o, Jt;
}
var Yt = {}, Io;
function tc() {
  if (Io) return Yt;
  Io = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), n = {
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
  return Yt.default = n, Yt;
}
var Xt = {}, Do;
function nc() {
  if (Do) return Xt;
  Do = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ie(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: i, schema: a, schemaCode: l, data: f, $data: p, it: g } = s, { opts: $ } = g;
      if (!p && a.length === 0)
        return;
      const y = a.length >= $.loopRequired;
      if (g.allErrors ? S() : _(), $.strictRequired) {
        const d = s.parentSchema.properties, { definedProperties: m } = s.it;
        for (const k of a)
          if (d?.[k] === void 0 && !m.has(k)) {
            const c = g.schemaEnv.baseId + g.errSchemaPath, u = `required property "${k}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(g, u, g.opts.strictRequired);
          }
      }
      function S() {
        if (y || p)
          s.block$data(t.nil, h);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(s, d);
      }
      function _() {
        const d = i.let("missing");
        if (y || p) {
          const m = i.let("valid", !0);
          s.block$data(m, () => v(d, m)), s.ok(m);
        } else
          i.if((0, e.checkMissingProp)(s, a, d)), (0, e.reportMissingProp)(s, d), i.else();
      }
      function h() {
        i.forOf("prop", l, (d) => {
          s.setParams({ missingProperty: d }), i.if((0, e.noPropertyInData)(i, f, d, $.ownProperties), () => s.error());
        });
      }
      function v(d, m) {
        s.setParams({ missingProperty: d }), i.forOf(d, l, () => {
          i.assign(m, (0, e.propertyInData)(i, f, d, $.ownProperties)), i.if((0, t.not)(m), () => {
            s.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return Xt.default = o, Xt;
}
var Zt = {}, qo;
function rc() {
  if (qo) return Zt;
  qo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), n = {
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
  return Zt.default = n, Zt;
}
var Qt = {}, en = {}, Lo;
function Fr() {
  if (Lo) return en;
  Lo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = vi();
  return e.code = 'require("ajv/dist/runtime/equal").default', en.default = e, en;
}
var Vo;
function oc() {
  if (Vo) return Qt;
  Vo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zn(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Fr(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: l, $data: f, schema: p, parentSchema: g, schemaCode: $, it: y } = i;
      if (!f && !p)
        return;
      const S = a.let("valid"), _ = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      i.block$data(S, h, (0, t._)`${$} === false`), i.ok(S);
      function h() {
        const k = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        i.setParams({ i: k, j: c }), a.assign(S, !0), a.if((0, t._)`${k} > 1`, () => (v() ? d : m)(k, c));
      }
      function v() {
        return _.length > 0 && !_.some((k) => k === "object" || k === "array");
      }
      function d(k, c) {
        const u = a.name("item"), b = (0, e.checkDataTypes)(_, u, y.opts.strictNumbers, e.DataType.Wrong), x = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${k}--;`, () => {
          a.let(u, (0, t._)`${l}[${k}]`), a.if(b, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${u} == "string"`, (0, t._)`${u} += "_"`), a.if((0, t._)`typeof ${x}[${u}] == "number"`, () => {
            a.assign(c, (0, t._)`${x}[${u}]`), i.error(), a.assign(S, !1).break();
          }).code((0, t._)`${x}[${u}] = ${k}`);
        });
      }
      function m(k, c) {
        const u = (0, n.useFunc)(a, r.default), b = a.name("outer");
        a.label(b).for((0, t._)`;${k}--;`, () => a.for((0, t._)`${c} = ${k}; ${c}--;`, () => a.if((0, t._)`${u}(${l}[${k}], ${l}[${c}])`, () => {
          i.error(), a.assign(S, !1).break(b);
        })));
      }
    }
  };
  return Qt.default = s, Qt;
}
var tn = {}, Bo;
function sc() {
  if (Bo) return tn;
  Bo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Fr(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schemaCode: f, schema: p } = s;
      l || p && typeof p == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${a}, ${f})`) : s.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return tn.default = o, tn;
}
var nn = {}, Uo;
function ic() {
  if (Uo) return nn;
  Uo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Fr(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schema: f, schemaCode: p, it: g } = s;
      if (!l && f.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = f.length >= g.opts.loopEnum;
      let y;
      const S = () => y ?? (y = (0, t.useFunc)(i, n.default));
      let _;
      if ($ || l)
        _ = i.let("valid"), s.block$data(_, h);
      else {
        if (!Array.isArray(f))
          throw new Error("ajv implementation error");
        const d = i.const("vSchema", p);
        _ = (0, e.or)(...f.map((m, k) => v(d, k)));
      }
      s.pass(_);
      function h() {
        i.assign(_, !1), i.forOf("v", p, (d) => i.if((0, e._)`${S()}(${a}, ${d})`, () => i.assign(_, !0).break()));
      }
      function v(d, m) {
        const k = f[m];
        return typeof k == "object" && k !== null ? (0, e._)`${S()}(${a}, ${d}[${m}])` : (0, e._)`${a} === ${k}`;
      }
    }
  };
  return nn.default = o, nn;
}
var Ko;
function ac() {
  if (Ko) return Ut;
  Ko = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ya(), t = /* @__PURE__ */ Xa(), n = /* @__PURE__ */ Qa(), r = /* @__PURE__ */ ec(), o = /* @__PURE__ */ tc(), s = /* @__PURE__ */ nc(), i = /* @__PURE__ */ rc(), a = /* @__PURE__ */ oc(), l = /* @__PURE__ */ sc(), f = /* @__PURE__ */ ic(), p = [
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
    f.default
  ];
  return Ut.default = p, Ut;
}
var rn = {}, at = {}, Ho;
function wi() {
  if (Ho) return at;
  Ho = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), r = {
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
    const { gen: a, schema: l, data: f, keyword: p, it: g } = s;
    g.items = !0;
    const $ = a.const("len", (0, e._)`${f}.length`);
    if (l === !1)
      s.setParams({ len: i.length }), s.pass((0, e._)`${$} <= ${i.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(g, l)) {
      const S = a.var("valid", (0, e._)`${$} <= ${i.length}`);
      a.if((0, e.not)(S), () => y(S)), s.ok(S);
    }
    function y(S) {
      a.forRange("i", i.length, $, (_) => {
        s.subschema({ keyword: p, dataProp: _, dataPropType: t.Type.Num }, S), g.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return at.validateAdditionalItems = o, at.default = r, at;
}
var on = {}, ct = {}, Go;
function _i() {
  if (Go) return ct;
  Go = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.validateTuple = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = {
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
    const { gen: l, parentSchema: f, data: p, keyword: g, it: $ } = s;
    _(f), $.opts.unevaluated && a.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(l, a.length, $.items));
    const y = l.name("valid"), S = l.const("len", (0, e._)`${p}.length`);
    a.forEach((h, v) => {
      (0, t.alwaysValidSchema)($, h) || (l.if((0, e._)`${S} > ${v}`, () => s.subschema({
        keyword: g,
        schemaProp: v,
        dataProp: v
      }, y)), s.ok(y));
    });
    function _(h) {
      const { opts: v, errSchemaPath: d } = $, m = a.length, k = m === h.minItems && (m === h.maxItems || h[i] === !1);
      if (v.strictTuples && !k) {
        const c = `"${g}" is ${m}-tuple, but minItems or maxItems/${i} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)($, c, v.strictTuples);
      }
    }
  }
  return ct.validateTuple = o, ct.default = r, ct;
}
var Wo;
function cc() {
  if (Wo) return on;
  Wo = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _i(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return on.default = t, on;
}
var sn = {}, Jo;
function lc() {
  if (Jo) return sn;
  Jo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Oe(), r = /* @__PURE__ */ wi(), s = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: a, parentSchema: l, it: f } = i, { prefixItems: p } = l;
      f.items = !0, !(0, t.alwaysValidSchema)(f, a) && (p ? (0, r.validateAdditionalItems)(i, p) : i.ok((0, n.validateArray)(i)));
    }
  };
  return sn.default = s, sn;
}
var an = {}, Yo;
function dc() {
  if (Yo) return an;
  Yo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), r = {
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
      const { gen: s, schema: i, parentSchema: a, data: l, it: f } = o;
      let p, g;
      const { minContains: $, maxContains: y } = a;
      f.opts.next ? (p = $ === void 0 ? 1 : $, g = y) : p = 1;
      const S = s.const("len", (0, e._)`${l}.length`);
      if (o.setParams({ min: p, max: g }), g === void 0 && p === 0) {
        (0, t.checkStrictMode)(f, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && p > g) {
        (0, t.checkStrictMode)(f, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(f, i)) {
        let m = (0, e._)`${S} >= ${p}`;
        g !== void 0 && (m = (0, e._)`${m} && ${S} <= ${g}`), o.pass(m);
        return;
      }
      f.items = !0;
      const _ = s.name("valid");
      g === void 0 && p === 1 ? v(_, () => s.if(_, () => s.break())) : p === 0 ? (s.let(_, !0), g !== void 0 && s.if((0, e._)`${l}.length > 0`, h)) : (s.let(_, !1), h()), o.result(_, () => o.reset());
      function h() {
        const m = s.name("_valid"), k = s.let("count", 0);
        v(m, () => s.if(m, () => d(k)));
      }
      function v(m, k) {
        s.forRange("i", 0, S, (c) => {
          o.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), k();
        });
      }
      function d(m) {
        s.code((0, e._)`${m}++`), g === void 0 ? s.if((0, e._)`${m} >= ${p}`, () => s.assign(_, !0).break()) : (s.if((0, e._)`${m} > ${g}`, () => s.assign(_, !1).break()), p === 1 ? s.assign(_, !0) : s.if((0, e._)`${m} >= ${p}`, () => s.assign(_, !0)));
      }
    }
  };
  return an.default = r, an;
}
var cr = {}, Xo;
function jr() {
  return Xo || (Xo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Oe();
    e.error = {
      message: ({ params: { property: l, depsCount: f, deps: p } }) => {
        const g = f === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${p} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: f, deps: p, missingProperty: g } }) => (0, t._)`{property: ${l},
    missingProperty: ${g},
    depsCount: ${f},
    deps: ${p}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [f, p] = s(l);
        i(l, f), a(l, p);
      }
    };
    function s({ schema: l }) {
      const f = {}, p = {};
      for (const g in l) {
        if (g === "__proto__")
          continue;
        const $ = Array.isArray(l[g]) ? f : p;
        $[g] = l[g];
      }
      return [f, p];
    }
    function i(l, f = l.schema) {
      const { gen: p, data: g, it: $ } = l;
      if (Object.keys(f).length === 0)
        return;
      const y = p.let("missing");
      for (const S in f) {
        const _ = f[S];
        if (_.length === 0)
          continue;
        const h = (0, r.propertyInData)(p, g, S, $.opts.ownProperties);
        l.setParams({
          property: S,
          depsCount: _.length,
          deps: _.join(", ")
        }), $.allErrors ? p.if(h, () => {
          for (const v of _)
            (0, r.checkReportMissingProp)(l, v);
        }) : (p.if((0, t._)`${h} && (${(0, r.checkMissingProp)(l, _, y)})`), (0, r.reportMissingProp)(l, y), p.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(l, f = l.schema) {
      const { gen: p, data: g, keyword: $, it: y } = l, S = p.name("valid");
      for (const _ in f)
        (0, n.alwaysValidSchema)(y, f[_]) || (p.if(
          (0, r.propertyInData)(p, g, _, y.opts.ownProperties),
          () => {
            const h = l.subschema({ keyword: $, schemaProp: _ }, S);
            l.mergeValidEvaluated(h, S);
          },
          () => p.var(S, !0)
          // TODO var
        ), l.ok(S));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(cr)), cr;
}
var cn = {}, Zo;
function uc() {
  if (Zo) return cn;
  Zo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), r = {
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
      const f = s.name("valid");
      s.forIn("key", a, (p) => {
        o.setParams({ propertyName: p }), o.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, f), s.if((0, e.not)(f), () => {
          o.error(!0), l.allErrors || s.break();
        });
      }), o.ok(f);
    }
  };
  return cn.default = r, cn;
}
var ln = {}, Qo;
function Si() {
  if (Qo) return ln;
  Qo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ ie(), s = {
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
      const { gen: a, schema: l, parentSchema: f, data: p, errsCount: g, it: $ } = i;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: S } = $;
      if ($.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)($, l))
        return;
      const _ = (0, e.allSchemaProperties)(f.properties), h = (0, e.allSchemaProperties)(f.patternProperties);
      v(), i.ok((0, t._)`${g} === ${n.default.errors}`);
      function v() {
        a.forIn("key", p, (u) => {
          !_.length && !h.length ? k(u) : a.if(d(u), () => k(u));
        });
      }
      function d(u) {
        let b;
        if (_.length > 8) {
          const x = (0, r.schemaRefOrVal)($, f.properties, "properties");
          b = (0, e.isOwnProperty)(a, x, u);
        } else _.length ? b = (0, t.or)(..._.map((x) => (0, t._)`${u} === ${x}`)) : b = t.nil;
        return h.length && (b = (0, t.or)(b, ...h.map((x) => (0, t._)`${(0, e.usePattern)(i, x)}.test(${u})`))), (0, t.not)(b);
      }
      function m(u) {
        a.code((0, t._)`delete ${p}[${u}]`);
      }
      function k(u) {
        if (S.removeAdditional === "all" || S.removeAdditional && l === !1) {
          m(u);
          return;
        }
        if (l === !1) {
          i.setParams({ additionalProperty: u }), i.error(), y || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)($, l)) {
          const b = a.name("valid");
          S.removeAdditional === "failing" ? (c(u, b, !1), a.if((0, t.not)(b), () => {
            i.reset(), m(u);
          })) : (c(u, b), y || a.if((0, t.not)(b), () => a.break()));
        }
      }
      function c(u, b, x) {
        const P = {
          keyword: "additionalProperties",
          dataProp: u,
          dataPropType: r.Type.Str
        };
        x === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(P, b);
      }
    }
  };
  return ln.default = s, ln;
}
var dn = {}, es;
function fc() {
  if (es) return dn;
  es = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ Oe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Si(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, parentSchema: l, data: f, it: p } = s;
      p.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(p, r.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const h of g)
        p.definedProperties.add(h);
      p.opts.unevaluated && g.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(i, (0, n.toHash)(g), p.props));
      const $ = g.filter((h) => !(0, n.alwaysValidSchema)(p, a[h]));
      if ($.length === 0)
        return;
      const y = i.name("valid");
      for (const h of $)
        S(h) ? _(h) : (i.if((0, t.propertyInData)(i, f, h, p.opts.ownProperties)), _(h), p.allErrors || i.else().var(y, !0), i.endIf()), s.it.definedProperties.add(h), s.ok(y);
      function S(h) {
        return p.opts.useDefaults && !p.compositeRule && a[h].default !== void 0;
      }
      function _(h) {
        s.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, y);
      }
    }
  };
  return dn.default = o, dn;
}
var un = {}, ts;
function pc() {
  if (ts) return un;
  ts = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Oe(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ie(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, data: l, parentSchema: f, it: p } = s, { opts: g } = p, $ = (0, e.allSchemaProperties)(a), y = $.filter((k) => (0, n.alwaysValidSchema)(p, a[k]));
      if ($.length === 0 || y.length === $.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const S = g.strictSchema && !g.allowMatchingProperties && f.properties, _ = i.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(i, p.props));
      const { props: h } = p;
      v();
      function v() {
        for (const k of $)
          S && d(k), p.allErrors ? m(k) : (i.var(_, !0), m(k), i.if(_));
      }
      function d(k) {
        for (const c in S)
          new RegExp(k).test(c) && (0, n.checkStrictMode)(p, `property ${c} matches pattern ${k} (use allowMatchingProperties)`);
      }
      function m(k) {
        i.forIn("key", l, (c) => {
          i.if((0, t._)`${(0, e.usePattern)(s, k)}.test(${c})`, () => {
            const u = y.includes(k);
            u || s.subschema({
              keyword: "patternProperties",
              schemaProp: k,
              dataProp: c,
              dataPropType: r.Type.Str
            }, _), p.opts.unevaluated && h !== !0 ? i.assign((0, t._)`${h}[${c}]`, !0) : !u && !p.allErrors && i.if((0, t.not)(_), () => i.break());
          });
        });
      }
    }
  };
  return un.default = o, un;
}
var fn = {}, ns;
function hc() {
  if (ns) return fn;
  ns = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
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
  return fn.default = t, fn;
}
var pn = {}, rs;
function mc() {
  if (rs) return pn;
  rs = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Oe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return pn.default = t, pn;
}
var hn = {}, os;
function gc() {
  if (os) return hn;
  os = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), r = {
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
      const f = i, p = s.let("valid", !1), g = s.let("passing", null), $ = s.name("_valid");
      o.setParams({ passing: g }), s.block(y), o.result(p, () => o.reset(), () => o.error(!0));
      function y() {
        f.forEach((S, _) => {
          let h;
          (0, t.alwaysValidSchema)(l, S) ? s.var($, !0) : h = o.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, $), _ > 0 && s.if((0, e._)`${$} && ${p}`).assign(p, !1).assign(g, (0, e._)`[${g}, ${_}]`).else(), s.if($, () => {
            s.assign(p, !0), s.assign(g, _), h && o.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return hn.default = r, hn;
}
var mn = {}, ss;
function yc() {
  if (ss) return mn;
  ss = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
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
        const f = n.subschema({ keyword: "allOf", schemaProp: l }, i);
        n.ok(i), n.mergeEvaluated(f);
      });
    }
  };
  return mn.default = t, mn;
}
var gn = {}, is;
function $c() {
  if (is) return gn;
  is = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), r = {
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
      const f = o(l, "then"), p = o(l, "else");
      if (!f && !p)
        return;
      const g = i.let("valid", !0), $ = i.name("_valid");
      if (y(), s.reset(), f && p) {
        const _ = i.let("ifClause");
        s.setParams({ ifClause: _ }), i.if($, S("then", _), S("else", _));
      } else f ? i.if($, S("then")) : i.if((0, e.not)($), S("else"));
      s.pass(g, () => s.error(!0));
      function y() {
        const _ = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        s.mergeEvaluated(_);
      }
      function S(_, h) {
        return () => {
          const v = s.subschema({ keyword: _ }, $);
          i.assign(g, $), s.mergeValidEvaluated(v, g), h ? i.assign(h, (0, e._)`${_}`) : s.setParams({ ifClause: _ });
        };
      }
    }
  };
  function o(s, i) {
    const a = s.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(s, a);
  }
  return gn.default = r, gn;
}
var yn = {}, as;
function vc() {
  if (as) return yn;
  as = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return yn.default = t, yn;
}
var cs;
function bc() {
  if (cs) return rn;
  cs = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wi(), t = /* @__PURE__ */ cc(), n = /* @__PURE__ */ _i(), r = /* @__PURE__ */ lc(), o = /* @__PURE__ */ dc(), s = /* @__PURE__ */ jr(), i = /* @__PURE__ */ uc(), a = /* @__PURE__ */ Si(), l = /* @__PURE__ */ fc(), f = /* @__PURE__ */ pc(), p = /* @__PURE__ */ hc(), g = /* @__PURE__ */ mc(), $ = /* @__PURE__ */ gc(), y = /* @__PURE__ */ yc(), S = /* @__PURE__ */ $c(), _ = /* @__PURE__ */ vc();
  function h(v = !1) {
    const d = [
      // any
      p.default,
      g.default,
      $.default,
      y.default,
      S.default,
      _.default,
      // object
      i.default,
      a.default,
      s.default,
      l.default,
      f.default
    ];
    return v ? d.push(t.default, r.default) : d.push(e.default, n.default), d.push(o.default), d;
  }
  return rn.default = h, rn;
}
var $n = {}, lt = {}, ls;
function ki() {
  if (ls) return lt;
  ls = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ Wn(), r = /* @__PURE__ */ Tr(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => s(a, a.schema)
  };
  function s(a, l) {
    const { gen: f, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[l] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, $ = p.errSchemaPath === "#" ? p.validateName : i(a);
    f.if((0, e._)`!${g}`, () => f.assign(g, $));
  }
  lt.dynamicAnchor = s;
  function i(a) {
    const { schemaEnv: l, schema: f, self: p } = a.it, { root: g, baseId: $, localRefs: y, meta: S } = l.root, { schemaId: _ } = p.opts, h = new n.SchemaEnv({ schema: f, schemaId: _, root: g, baseId: $, localRefs: y, meta: S });
    return n.compileSchema.call(p, h), (0, r.getValidate)(a, h);
  }
  return lt.default = o, lt;
}
var dt = {}, ds;
function Ci() {
  if (ds) return dt;
  ds = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.dynamicRef = void 0;
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ Tr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (s) => o(s, s.schema)
  };
  function o(s, i) {
    const { gen: a, keyword: l, it: f } = s;
    if (i[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const p = i.slice(1);
    if (f.allErrors)
      g();
    else {
      const y = a.let("valid", !1);
      g(y), s.ok(y);
    }
    function g(y) {
      if (f.schemaEnv.root.dynamicAnchors[p]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(S, $(S, y), $(f.validateName, y));
      } else
        $(f.validateName, y)();
    }
    function $(y, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(s, y), a.let(S, !0);
      }) : () => (0, n.callRef)(s, y);
    }
  }
  return dt.dynamicRef = o, dt.default = r, dt;
}
var vn = {}, us;
function wc() {
  if (us) return vn;
  us = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ki(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return vn.default = n, vn;
}
var bn = {}, fs;
function _c() {
  if (fs) return bn;
  fs = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ci(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return bn.default = t, bn;
}
var ps;
function Sc() {
  if (ps) return $n;
  ps = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ki(), t = /* @__PURE__ */ Ci(), n = /* @__PURE__ */ wc(), r = /* @__PURE__ */ _c(), o = [e.default, t.default, n.default, r.default];
  return $n.default = o, $n;
}
var wn = {}, _n = {}, hs;
function kc() {
  if (hs) return _n;
  hs = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return _n.default = t, _n;
}
var Sn = {}, ms;
function Cc() {
  if (ms) return Sn;
  ms = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Sn.default = t, Sn;
}
var kn = {}, gs;
function Ec() {
  if (gs) return kn;
  gs = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return kn.default = t, kn;
}
var ys;
function xc() {
  if (ys) return wn;
  ys = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kc(), t = /* @__PURE__ */ Cc(), n = /* @__PURE__ */ Ec(), r = [e.default, t.default, n.default];
  return wn.default = r, wn;
}
var Cn = {}, En = {}, $s;
function Pc() {
  if ($s) return En;
  $s = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Me(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: s }) => (0, e._)`{unevaluatedProperty: ${s.unevaluatedProperty}}`
    },
    code(s) {
      const { gen: i, schema: a, data: l, errsCount: f, it: p } = s;
      if (!f)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: $ } = p;
      $ instanceof e.Name ? i.if((0, e._)`${$} !== true`, () => i.forIn("key", l, (h) => i.if(S($, h), () => y(h)))) : $ !== !0 && i.forIn("key", l, (h) => $ === void 0 ? y(h) : i.if(_($, h), () => y(h))), p.props = !0, s.ok((0, e._)`${f} === ${n.default.errors}`);
      function y(h) {
        if (a === !1) {
          s.setParams({ unevaluatedProperty: h }), s.error(), g || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const v = i.name("valid");
          s.subschema({
            keyword: "unevaluatedProperties",
            dataProp: h,
            dataPropType: t.Type.Str
          }, v), g || i.if((0, e.not)(v), () => i.break());
        }
      }
      function S(h, v) {
        return (0, e._)`!${h} || !${h}[${v}]`;
      }
      function _(h, v) {
        const d = [];
        for (const m in h)
          h[m] === !0 && d.push((0, e._)`${v} !== ${m}`);
        return (0, e.and)(...d);
      }
    }
  };
  return En.default = o, En;
}
var xn = {}, vs;
function Ac() {
  if (vs) return xn;
  vs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ ie(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: s, schema: i, data: a, it: l } = o, f = l.items || 0;
      if (f === !0)
        return;
      const p = s.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        o.setParams({ len: f }), o.fail((0, e._)`${p} > ${f}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(l, i)) {
        const $ = s.var("valid", (0, e._)`${p} <= ${f}`);
        s.if((0, e.not)($), () => g($, f)), o.ok($);
      }
      l.items = !0;
      function g($, y) {
        s.forRange("i", y, p, (S) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, $), l.allErrors || s.if((0, e.not)($), () => s.break());
        });
      }
    }
  };
  return xn.default = r, xn;
}
var bs;
function Rc() {
  if (bs) return Cn;
  bs = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Pc(), t = /* @__PURE__ */ Ac(), n = [e.default, t.default];
  return Cn.default = n, Cn;
}
var Pn = {}, An = {}, ws;
function Nc() {
  if (ws) return An;
  ws = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, o) {
      const { gen: s, data: i, $data: a, schema: l, schemaCode: f, it: p } = r, { opts: g, errSchemaPath: $, schemaEnv: y, self: S } = p;
      if (!g.validateFormats)
        return;
      a ? _() : h();
      function _() {
        const v = s.scopeValue("formats", {
          ref: S.formats,
          code: g.code.formats
        }), d = s.const("fDef", (0, e._)`${v}[${f}]`), m = s.let("fType"), k = s.let("format");
        s.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => s.assign(m, (0, e._)`${d}.type || "string"`).assign(k, (0, e._)`${d}.validate`), () => s.assign(m, (0, e._)`"string"`).assign(k, d)), r.fail$data((0, e.or)(c(), u()));
        function c() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${f} && !${k}`;
        }
        function u() {
          const b = y.$async ? (0, e._)`(${d}.async ? await ${k}(${i}) : ${k}(${i}))` : (0, e._)`${k}(${i})`, x = (0, e._)`(typeof ${k} == "function" ? ${b} : ${k}.test(${i}))`;
          return (0, e._)`${k} && ${k} !== true && ${m} === ${o} && !${x}`;
        }
      }
      function h() {
        const v = S.formats[l];
        if (!v) {
          c();
          return;
        }
        if (v === !0)
          return;
        const [d, m, k] = u(v);
        d === o && r.pass(b());
        function c() {
          if (g.strictSchema === !1) {
            S.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${l}" ignored in schema at path "${$}"`;
          }
        }
        function u(x) {
          const P = x instanceof RegExp ? (0, e.regexpCode)(x) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(l)}` : void 0, T = s.scopeValue("formats", { key: l, ref: x, code: P });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${T}.validate`] : ["string", x, T];
        }
        function b() {
          if (typeof v == "object" && !(v instanceof RegExp) && v.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${k}(${i})`;
          }
          return typeof m == "function" ? (0, e._)`${k}(${i})` : (0, e._)`${k}.test(${i})`;
        }
      }
    }
  };
  return An.default = n, An;
}
var _s;
function Mc() {
  if (_s) return Pn;
  _s = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Nc()).default];
  return Pn.default = t, Pn;
}
var nt = {}, Ss;
function Oc() {
  return Ss || (Ss = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.contentVocabulary = nt.metadataVocabulary = void 0, nt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], nt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), nt;
}
var ks;
function Tc() {
  if (ks) return Lt;
  ks = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ja(), t = /* @__PURE__ */ ac(), n = /* @__PURE__ */ bc(), r = /* @__PURE__ */ Sc(), o = /* @__PURE__ */ xc(), s = /* @__PURE__ */ Rc(), i = /* @__PURE__ */ Mc(), a = /* @__PURE__ */ Oc(), l = [
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
  return Lt.default = l, Lt;
}
var Rn = {}, Et = {}, Cs;
function Fc() {
  if (Cs) return Et;
  Cs = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Et.DiscrError = e = {})), Et;
}
var Es;
function jc() {
  if (Es) return Rn;
  Es = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = /* @__PURE__ */ Fc(), n = /* @__PURE__ */ Wn(), r = /* @__PURE__ */ Gn(), o = /* @__PURE__ */ ie(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: f } }) => (0, e._)`{error: ${a}, tag: ${f}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: f, schema: p, parentSchema: g, it: $ } = a, { oneOf: y } = g;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = p.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = l.let("valid", !1), h = l.const("tag", (0, e._)`${f}${(0, e.getProperty)(S)}`);
      l.if((0, e._)`typeof ${h} == "string"`, () => v(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: S })), a.ok(_);
      function v() {
        const k = m();
        l.if(!1);
        for (const c in k)
          l.elseIf((0, e._)`${h} === ${c}`), l.assign(_, d(k[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: S }), l.endIf();
      }
      function d(k) {
        const c = l.name("valid"), u = a.subschema({ keyword: "oneOf", schemaProp: k }, c);
        return a.mergeEvaluated(u, e.Name), c;
      }
      function m() {
        var k;
        const c = {}, u = x(g);
        let b = !0;
        for (let F = 0; F < y.length; F++) {
          let A = y[F];
          if (A?.$ref && !(0, o.schemaHasRulesButRef)(A, $.self.RULES)) {
            const W = A.$ref;
            if (A = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, W), A instanceof n.SchemaEnv && (A = A.schema), A === void 0)
              throw new r.default($.opts.uriResolver, $.baseId, W);
          }
          const I = (k = A?.properties) === null || k === void 0 ? void 0 : k[S];
          if (typeof I != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          b = b && (u || x(A)), P(I, F);
        }
        if (!b)
          throw new Error(`discriminator: "${S}" must be required`);
        return c;
        function x({ required: F }) {
          return Array.isArray(F) && F.includes(S);
        }
        function P(F, A) {
          if (F.const)
            T(F.const, A);
          else if (F.enum)
            for (const I of F.enum)
              T(I, A);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function T(F, A) {
          if (typeof F != "string" || F in c)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          c[F] = A;
        }
      }
    }
  };
  return Rn.default = i, Rn;
}
var Nn = {};
const zc = "https://json-schema.org/draft/2020-12/schema", Ic = "https://json-schema.org/draft/2020-12/schema", Dc = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, qc = "meta", Lc = "Core and Validation specifications meta-schema", Vc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Bc = ["object", "boolean"], Uc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Kc = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Hc = {
  $schema: zc,
  $id: Ic,
  $vocabulary: Dc,
  $dynamicAnchor: qc,
  title: Lc,
  allOf: Vc,
  type: Bc,
  $comment: Uc,
  properties: Kc
}, Gc = "https://json-schema.org/draft/2020-12/schema", Wc = "https://json-schema.org/draft/2020-12/meta/applicator", Jc = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Yc = "meta", Xc = "Applicator vocabulary meta-schema", Zc = ["object", "boolean"], Qc = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, el = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, tl = {
  $schema: Gc,
  $id: Wc,
  $vocabulary: Jc,
  $dynamicAnchor: Yc,
  title: Xc,
  type: Zc,
  properties: Qc,
  $defs: el
}, nl = "https://json-schema.org/draft/2020-12/schema", rl = "https://json-schema.org/draft/2020-12/meta/unevaluated", ol = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, sl = "meta", il = "Unevaluated applicator vocabulary meta-schema", al = ["object", "boolean"], cl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ll = {
  $schema: nl,
  $id: rl,
  $vocabulary: ol,
  $dynamicAnchor: sl,
  title: il,
  type: al,
  properties: cl
}, dl = "https://json-schema.org/draft/2020-12/schema", ul = "https://json-schema.org/draft/2020-12/meta/content", fl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, pl = "meta", hl = "Content vocabulary meta-schema", ml = ["object", "boolean"], gl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, yl = {
  $schema: dl,
  $id: ul,
  $vocabulary: fl,
  $dynamicAnchor: pl,
  title: hl,
  type: ml,
  properties: gl
}, $l = "https://json-schema.org/draft/2020-12/schema", vl = "https://json-schema.org/draft/2020-12/meta/core", bl = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, wl = "meta", _l = "Core vocabulary meta-schema", Sl = ["object", "boolean"], kl = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Cl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, El = {
  $schema: $l,
  $id: vl,
  $vocabulary: bl,
  $dynamicAnchor: wl,
  title: _l,
  type: Sl,
  properties: kl,
  $defs: Cl
}, xl = "https://json-schema.org/draft/2020-12/schema", Pl = "https://json-schema.org/draft/2020-12/meta/format-annotation", Al = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Rl = "meta", Nl = "Format vocabulary meta-schema for annotation results", Ml = ["object", "boolean"], Ol = { format: { type: "string" } }, Tl = {
  $schema: xl,
  $id: Pl,
  $vocabulary: Al,
  $dynamicAnchor: Rl,
  title: Nl,
  type: Ml,
  properties: Ol
}, Fl = "https://json-schema.org/draft/2020-12/schema", jl = "https://json-schema.org/draft/2020-12/meta/meta-data", zl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Il = "meta", Dl = "Meta-data vocabulary meta-schema", ql = ["object", "boolean"], Ll = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Vl = {
  $schema: Fl,
  $id: jl,
  $vocabulary: zl,
  $dynamicAnchor: Il,
  title: Dl,
  type: ql,
  properties: Ll
}, Bl = "https://json-schema.org/draft/2020-12/schema", Ul = "https://json-schema.org/draft/2020-12/meta/validation", Kl = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Hl = "meta", Gl = "Validation vocabulary meta-schema", Wl = ["object", "boolean"], Jl = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Yl = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Xl = {
  $schema: Bl,
  $id: Ul,
  $vocabulary: Kl,
  $dynamicAnchor: Hl,
  title: Gl,
  type: Wl,
  properties: Jl,
  $defs: Yl
};
var xs;
function Zl() {
  if (xs) return Nn;
  xs = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = Hc, t = tl, n = ll, r = yl, o = El, s = Tl, i = Vl, a = Xl, l = ["/properties"];
  function f(p) {
    return [
      e,
      t,
      n,
      r,
      o,
      g(this, s),
      i,
      g(this, a)
    ].forEach(($) => this.addMetaSchema($, void 0, !1)), this;
    function g($, y) {
      return p ? $.$dataMetaSchema(y, l) : y;
    }
  }
  return Nn.default = f, Nn;
}
var Ps;
function Ql() {
  return Ps || (Ps = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ga(), r = /* @__PURE__ */ Tc(), o = /* @__PURE__ */ jc(), s = /* @__PURE__ */ Zl(), i = "https://json-schema.org/draft/2020-12/schema";
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
    var l = /* @__PURE__ */ Hn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var f = /* @__PURE__ */ oe();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return f._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return f.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return f.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return f.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return f.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return f.CodeGen;
    } });
    var p = /* @__PURE__ */ Or();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var g = /* @__PURE__ */ Gn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(jt, jt.exports)), jt.exports;
}
var ed = /* @__PURE__ */ Ql();
const td = /* @__PURE__ */ Na(ed), nd = "https://json-schema.org/draft/2020-12/schema", rd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", od = "gufe-viz payload", sd = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", id = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], ad = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), zr = {
  $schema: nd,
  $id: rd,
  title: od,
  description: sd,
  oneOf: id,
  $defs: ad
}, rp = [
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
], Ir = zr.$id, Dr = new td({ allErrors: !0, strict: !1 });
Dr.addSchema(zr, Ir);
const As = Dr.getSchema(Ir), Ei = Object.entries(zr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), op = Ei, qr = /* @__PURE__ */ new Map();
for (const e of Ei) {
  const t = Dr.getSchema(`${Ir}#/$defs/${e}`);
  t && qr.set(e, t);
}
const wr = { valid: !0, issues: [] };
function _r(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function cd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? qr.get(t) : void 0;
  return n ? n(e) ? wr : { valid: !1, issues: _r(n.errors) } : As(e) ? wr : { valid: !1, issues: _r(As.errors) };
}
function sp(e, t) {
  const n = qr.get(e);
  return n ? n(t) ? wr : { valid: !1, issues: _r(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function ld(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Lr = {
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
function xi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Lr[t]) return dd(t);
  const { valid: n, issues: r } = cd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: ld(r)
  };
}
function dd(e) {
  const t = Object.keys(Lr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function ip(e) {
  return xi(e)?.message ?? null;
}
class ud extends Re {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    sa("payload", n, this);
    const r = xi(n);
    if (r)
      return t.appendChild(fd(r, n)), {};
    const o = n.type, s = Lr[o], i = document.createElement(s);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function fd(e, t) {
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
  const o = pd(t);
  return o && n.appendChild(r(o, !1)), n;
}
function pd(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ve(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ve(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Ne("gufe-view", ud);
const lr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, Vr = {
  threeDmol: `https://unpkg.com/3dmol@${lr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${lr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${lr.d3}/+esm`
};
function Br(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Pi(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let it = null, ut = null;
function Ur() {
  if (ut) return ut;
  const e = Br("threeDmol");
  return e ? (ut = e.then((t) => it = t || window.$3Dmol), ut) : (ut = (async () => {
    if (window.$3Dmol) return it = window.$3Dmol;
    if (await Pi(Vr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return it = window.$3Dmol;
  })(), ut);
}
let ft = null;
function Jn() {
  if (ft) return ft;
  const e = Br("rdkit");
  return e ? (ft = e.then((t) => window.RDKit = t), ft) : (ft = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Pi(Vr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), ft);
}
let dr = null;
function Ai() {
  if (!dr) {
    const e = Vr.d3;
    dr = Br("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return dr;
}
function Ri(e, t) {
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
    t.hint && !r && (r = !0, md(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", s), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", s);
    }
  };
}
const hd = 1600;
function md(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, hd);
}
const gd = { min: 0.25, max: 12 }, yd = 150;
function Rs(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? yd) - t;
}
function $d(e, t = gd) {
  const n = Rs(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const s = () => {
    if (!r) return o;
    const i = Rs(e);
    return Number.isFinite(i) && i > 0 ? n / i : o;
  };
  return {
    zoomBy(i) {
      const a = s(), l = Math.min(t.max, Math.max(t.min, a * i)), f = l / a;
      return !Number.isFinite(f) || Math.abs(f - 1) < 1e-9 ? !1 : (o = l, e.zoom(f), e.render(), !0);
    },
    reset() {
      o = 1, e.zoomTo(), e.render();
    },
    level: s
  };
}
const vd = 2e-3;
function Ni(e) {
  return Math.exp(-e.deltaY * vd);
}
function Kr(e, t, n = {}) {
  const r = $d(t, n.bounds), o = Ri(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (s) => r.zoomBy(Ni(s))
  });
  return { ...r, cleanup: o.cleanup };
}
function Hr(e, t = "Reset view") {
  const n = j("button", wt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const ur = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, bd = [
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
], ap = "hsv", B = [0, 0, 0], wd = {
  0: B,
  1: B,
  2: B,
  3: B,
  4: B,
  5: B,
  6: B,
  7: B,
  8: B,
  9: B,
  10: B,
  11: B,
  12: B,
  13: B,
  14: B,
  15: B,
  16: B,
  17: B,
  18: B,
  19: B,
  20: B,
  21: B,
  22: B,
  23: B,
  24: B,
  25: B,
  26: B,
  27: B,
  28: B,
  29: B,
  30: B,
  31: B,
  32: B,
  33: B,
  34: B,
  35: B,
  36: B,
  37: B,
  38: B,
  39: B,
  40: B,
  41: B,
  42: B,
  43: B,
  44: B,
  45: B,
  46: B,
  47: B,
  48: B,
  49: B,
  50: B,
  51: B,
  52: B,
  53: B,
  54: B,
  55: B,
  56: B,
  57: B,
  58: B,
  59: B,
  60: B,
  61: B,
  62: B,
  63: B,
  64: B,
  65: B,
  66: B,
  67: B,
  68: B,
  69: B,
  70: B,
  71: B,
  72: B,
  73: B,
  74: B,
  75: B,
  76: B,
  77: B,
  78: B,
  79: B,
  80: B,
  81: B,
  82: B,
  83: B,
  84: B,
  85: B,
  86: B,
  87: B,
  88: B,
  89: B,
  90: B,
  91: B,
  92: B,
  93: B,
  94: B,
  95: B,
  96: B,
  97: B,
  98: B,
  99: B,
  100: B,
  101: B,
  102: B,
  103: B,
  104: B,
  105: B,
  106: B,
  107: B,
  108: B,
  109: B,
  110: B,
  111: B,
  112: B,
  113: B,
  114: B,
  115: B,
  116: B,
  117: B,
  118: B
}, _d = "rdkit", Sd = !0, kd = !0, Cd = !0, Ed = !0, xd = "rdkit", Pd = "filled", Ad = 0.42, Rd = 1.5, Nd = !0, Md = "show", Od = "mono", Td = 0.51, Fd = 0.74, jd = 1.6, zd = 1.7, Id = 5, Dd = 0.3, qd = "#d62828", Ld = "#d62828", Vd = "#015ab5", Bd = !1, Ud = "", Kd = "#7c3aed", Hd = {
  layout: _d,
  alignPair: Sd,
  atomNumbers: kd,
  createdDestroyed: Cd,
  modified: Ed,
  style: xd,
  circles: Pd,
  circleRadius: Ad,
  circleStroke: Rd,
  boundary: Nd,
  hydrogens: Md,
  elementColors: Od,
  numScale: Td,
  labelScale: Fd,
  bondWidth: jd,
  markWidth: zd,
  haloWidth: Id,
  haloOpacity: Dd,
  destroyedColor: qd,
  createdColor: Ld,
  modifiedColor: Vd,
  stereo: Bd,
  customSpec: Ud,
  customColor: Kd
}, Gd = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: ur.uniqueAtom,
  createdColor: ur.uniqueAtom,
  modifiedColor: ur.elementChange,
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
}, Wd = ["rdkit", "coordgen", "conformer"], Jd = ["rdkit", "recolor", "halo"], Yd = ["outline", "filled", "off"], Xd = ["show", "dim", "hide"], Zd = ["cpk", "mono"], Qd = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, eu = /^#[0-9a-fA-F]{6}$/;
function xt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function He(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Qd[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const pt = (e, t) => typeof e == "boolean" ? e : t, Mn = (e, t) => typeof e == "string" && eu.test(e) ? e : t;
function tu(e) {
  const t = e && typeof e == "object" ? e : {}, n = Gd;
  return {
    version: 1,
    layout: xt(t.layout, Wd, n.layout),
    alignPair: pt(t.alignPair, n.alignPair),
    style: xt(t.style, Jd, n.style),
    createdDestroyed: pt(t.createdDestroyed, n.createdDestroyed),
    modified: pt(t.modified, n.modified),
    destroyedColor: Mn(t.destroyedColor, n.destroyedColor),
    createdColor: Mn(t.createdColor, n.createdColor),
    modifiedColor: Mn(t.modifiedColor, n.modifiedColor),
    boundary: pt(t.boundary, n.boundary),
    circles: xt(t.circles, Yd, n.circles),
    circleRadius: He(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: He(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: xt(t.hydrogens, Xd, n.hydrogens),
    elementColors: xt(t.elementColors, Zd, n.elementColors),
    atomNumbers: pt(t.atomNumbers, n.atomNumbers),
    stereo: pt(t.stereo, n.stereo),
    numScale: He(t.numScale, "numScale", n.numScale),
    labelScale: He(t.labelScale, "labelScale", n.labelScale),
    bondWidth: He(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: He(t.markWidth, "markWidth", n.markWidth),
    haloWidth: He(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: He(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Mn(t.customColor, n.customColor)
  };
}
const Te = tu(Hd);
function Ns(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const s = /^([LlRr])[:=](.*)$/.exec(o), i = s ? s[1].toLowerCase() === "l" ? "left" : "right" : "both", a = s ? s[2] : o, l = (p) => {
      i !== "right" && t.add(p), i !== "left" && n.add(p);
    }, f = /^(\d+)-(\d+)$/.exec(a);
    if (f) {
      const p = Math.min(+f[1], +f[2]), g = Math.min(Math.max(+f[1], +f[2]), p + r - 1);
      for (let $ = p; $ <= g; $++) l($);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function fr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [s, i] = e.bonds[o], a = t.has(s), l = t.has(i);
    (n ? a || l : a && l) && r.push(o);
  }
  return r;
}
function Ms(e) {
  return `0x${e.replace("#", "")}`;
}
function Sr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function nu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function ru(e, t, n) {
  const r = new Set(t.atoms), o = new Set(fr(e, r, !0));
  return {
    deletions: fr(e, r, n),
    changes: fr(e, new Set(t.elements), n).filter((s) => !o.has(s))
  };
}
function Os(e, t, n, r) {
  const o = ru(t, n, e.boundary), s = [];
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
let ht = null;
function ou(e) {
  if (ht !== null) return ht;
  ht = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (ht = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return ht || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), ht;
}
function su(e, t) {
  return e.style === "rdkit" ? "rdkit" : ou(t) ? e.style : "rdkit";
}
function iu(e, t, n, r, o, s) {
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
  e.elementColors === "mono" && (i.atomColourPalette = wd), o === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, l = {}, f = {};
  for (const y of n) {
    const S = Sr(y.color);
    if (o === "rdkit") for (const h of y.bonds) f[h] = S;
    if (o === "recolor" && e.circles === "off") continue;
    const _ = o === "recolor" && e.circles === "filled" ? nu(S, 0.7) : S;
    for (const h of y.atoms)
      a[h] = _, l[h] = e.circleRadius;
  }
  const p = Sr(e.customColor);
  for (const y of r)
    y < s && (a[y] = p, l[y] = e.circleRadius);
  const g = Object.keys(a).map(Number);
  g.length && (i.atoms = g, i.highlightAtomColors = a, i.highlightAtomRadii = l);
  const $ = Object.keys(f).map(Number);
  return $.length && (i.bonds = $, i.highlightBondColors = f), i;
}
function au(e, t, n, r) {
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
const cu = "http://www.w3.org/2000/svg";
function Mi(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Gr(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const s = o.tagName.toLowerCase();
    (s === "ellipse" || s === "circle" || s === "rect") === n && r.push(o);
  }
  return r;
}
function Oi(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function Ts(e, t, n, r, o, s) {
  for (const i of r)
    for (const a of Mi(e, i)) {
      const l = a.style;
      Oi(a) ? l.fill = o : (l.stroke = o, l.strokeWidth = `${t.markWidth}px`);
    }
  if (s)
    for (const i of n)
      for (const a of Gr(e, i, !1)) a.style.fill = s;
}
function lu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const s = o.createElementNS(cu, "g");
  s.setAttribute("data-gufe-halo", "1"), s.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of Mi(e, a)) {
      if (Oi(l)) continue;
      const f = l.cloneNode(!0);
      f.removeAttribute("class"), f.style.fill = "none", f.style.stroke = r, f.style.strokeWidth = `${t.haloWidth}px`, f.style.strokeLinecap = "round", f.style.strokeLinejoin = "round", f.style.strokeOpacity = "1", s.appendChild(f);
    }
  if (!s.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(s, i.nextSibling) : i ? e.appendChild(s) : e.insertBefore(s, e.firstChild);
}
function du(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Gr(e, s, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function uu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Gr(e, s, !0)) {
        const a = i.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function fu(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const s = o.style;
          n.hydrogens === "hide" ? s.display = "none" : s.opacity = "0.22";
        }
  }
}
function pu(e, t, n, r, o, s) {
  if (s !== "rdkit")
    for (const i of r)
      if (s === "recolor") {
        const a = n.circles === "filled";
        Ts(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? du(e, n, i.atoms, o, i.color) : a && i.edgeOnFill && uu(e, n, i.atoms, o, i.color);
      } else
        lu(e, n, i.bonds, i.color), Ts(e, n, i.atoms, i.bonds, i.color, null);
  fu(e, t, n);
}
const Yn = `
`, kr = "$$$$";
function Cr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Yn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const o = parseInt(r.substring(0, 3), 10), s = parseInt(r.substring(3, 6), 10);
  if (!isFinite(o) || o <= 0) throw new Error(`bad counts line: ${r}`);
  const i = [], a = [];
  for (let p = 0; p < o; p++) {
    const g = n[4 + p];
    if (g == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(g.substring(0, 10)) || 0,
      parseFloat(g.substring(10, 20)) || 0,
      parseFloat(g.substring(20, 30)) || 0
    ]), a.push(g.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let p = 0; p < (isFinite(s) ? s : 0); p++) {
    const g = n[4 + o + p];
    if (g == null) break;
    const $ = parseInt(g.substring(0, 3), 10), y = parseInt(g.substring(3, 6), 10), S = parseInt(g.substring(6, 9), 10);
    !isFinite($) || !isFinite(y) || l.push([$ - 1, y - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: i };
}
function hu(e) {
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
  return r.push("M  END"), r.join(Yn);
}
const mu = (e) => `${hu(e)}${Yn}${kr}`, gu = (e) => e.indexOf(kr) >= 0 ? e : `${e}${Yn}${kr}`;
function Ti(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Fi(e, t, n, r, o) {
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
      for (const f of o.atoms)
        i[f] = o.color, a[f] = o.radius;
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
function ji(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Fs = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Er = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, mt = (e) => e in Er, js = 400, pr = "position:absolute;inset:0;min-width:0;min-height:0;";
class yu extends Re {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", s = n.smiles, i = n.total_charge, a = j("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const l = j(
      "div",
      `${pr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${yt.canvas2D};`
    );
    a.appendChild(l);
    const f = ui();
    f.wrap.style.cssText = pr, a.appendChild(f.wrap);
    const p = j(
      "div",
      `${pr}overflow:auto;padding:16px 20px;background:${O.panelBg};color:${O.textPrimary};font-size:${Y.body};`
    );
    a.appendChild(p);
    const g = r ? Ti(r) : null, $ = [
      ["Name", o || rt, !1],
      ["SMILES", s || rt, !0],
      ["Charge", i == null ? rt : String(i), !1],
      ["Atoms", g ? String(g.atoms) : rt, !1],
      ["Bonds", g ? String(g.bonds) : rt, !1]
    ], y = j("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${re.xl} 20px;align-items:baseline;`);
    p.appendChild(y);
    for (const [F, A, I] of $) {
      y.appendChild(
        j(
          "div",
          `font-size:${Y.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${O.textMuted2};`,
          F
        )
      );
      const W = j(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${O.textPrimary}` + (I ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Y.small};` : ""),
        A
      );
      W.title = A, y.appendChild(W);
    }
    const S = pi(t), _ = j("div", br, o || "Unnamed molecule");
    S && a.appendChild(_);
    const h = bt(
      "small-molecule.mode",
      "2d",
      Fs.map((F) => F.id)
    ), v = $t("small-molecule.spin", !1);
    let d = h.get(), m = v.get(), k = null, c = null;
    const u = () => {
      try {
        k?.spin(m && mt(d) ? "y" : !1);
      } catch {
      }
    }, b = (F) => {
      d = F, l.style.visibility = d === "2d" ? "visible" : "hidden", f.wrap.style.visibility = mt(d) ? "visible" : "hidden", p.style.visibility = d === "info" ? "visible" : "hidden", _.style.display = d === "info" || !S ? "none" : "block", T.disabled = !mt(d), T.style.opacity = mt(d) ? "1" : "0.5", mt(d) && k && (k.setStyle({}, Er[d]), k.resize(), k.render()), u();
    }, x = j("div", oi), P = Ln(Fs, d, (F) => b(F), h), T = di(
      "Spin",
      m,
      (F) => {
        m = F, u();
      },
      { title: "Toggle continuous rotation", remember: v }
    );
    return P.insertBefore(T, P.lastElementChild), x.appendChild(P), a.appendChild(x), b(d), !r || !r.trim() ? (l.appendChild(fe("No molecule provided")), f.container.appendChild(fe("No molecule provided")), {}) : (l.appendChild(fe("Loading 2D depiction...")), Jn().then((F) => {
      const A = Fi(F, r, js, Te.layout);
      A ? ji(l, A, js) : l.replaceChildren(fe("Failed to parse molecule", !0));
    }).catch((F) => {
      l.replaceChildren(fe(`RDKit failed to load: ${he(F)}`, !0));
    }), f.container.appendChild(fe("Loading 3D viewer...")), Ur().then(() => {
      f.container.replaceChildren(), k = it.createViewer(f.container, { backgroundColor: yt.viewer }), k.addModel(gu(r), "sdf"), k.setStyle({}, Er[mt(d) ? d : "stick"]), k.zoomTo(), k.render(), c = Kr(f.container, k), u();
    }).catch((F) => {
      f.container.replaceChildren(fe(`3D render failed: ${he(F)}`, !0));
    }), {
      onResize() {
        k && (k.resize(), k.render());
      },
      cleanup() {
        if (c?.cleanup(), c = null, !!k) {
          try {
            k.spin(!1);
          } catch {
          }
          try {
            k.clear();
          } catch {
          }
          k = null;
        }
      }
    });
  }
}
Ne("gufe-small-molecule", yu);
const zi = ["HOH", "WAT", "SOL", "TIP3"], zs = { hetflag: !1 }, $u = { hetflag: !0 }, vu = { resn: zi }, Ge = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function bu(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, s = 0, i = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const f = l.slice(0, 6);
    if (f === "ENDMDL") break;
    if (f !== "ATOM  " && f !== "HETATM") continue;
    r++, f === "HETATM" && o++;
    const p = l.slice(17, 20).trim(), g = l.slice(21, 22).trim() || "_", $ = l.slice(22, 26).trim(), y = l.slice(26, 27).trim();
    zi.indexOf(p) !== -1 && s++, t.add(g), n.add(`${g}|${$}${y}|${p}`);
    const S = parseInt($, 10);
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
function wu(e) {
  return `${St(e.chains)} chains · ${St(e.residues)} residues · ${St(e.atoms)} atoms · ${St(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${St(e.waters)} water)` : "");
}
function _u(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Is(e, t, n, r) {
  const o = r || (() => {
  }), s = _u(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    zs,
    t.rep === "stick" ? { stick: { radius: Ge.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: Ge.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    $u,
    t.hetero ? {
      stick: { radius: Ge.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ge.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    vu,
    t.waters ? {
      stick: { radius: Ge.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ge.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    o(null), e.render();
    return;
  }
  o(
    n && n.atoms > Ge.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(it.SurfaceType.VDW, { opacity: Ge.surfaceOpacity, ...s }, zs)
      ).then(() => {
        o(null), e.render();
      }).catch((i) => o(`Surface failed: ${he(i)}`, "error"));
    } catch (i) {
      o(`Surface failed: ${he(i)}`, "error");
    }
  }, 30);
}
const Ds = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], qs = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Su extends Re {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, o = n.name ?? "", s = n.type !== "ProteinComponentViz", i = bt(
      "protein.representation",
      "cartoon",
      Ds.map((x) => x.id)
    ), a = bt(
      "protein.color",
      "chain",
      qs.map((x) => x.id)
    ), l = $t("protein.waters", s), f = $t("protein.hetero", !0), p = $t("protein.spin", !1), g = {
      rep: i.get(),
      color: a.get(),
      waters: l.get(),
      hetero: f.get(),
      spin: p.get()
    };
    let $ = null, y = null, S = null;
    const _ = j(
      "div",
      Rr.top
    );
    t.appendChild(_), _.appendChild(
      j("span", `font-weight:700;font-size:${Y.heading};letter-spacing:.02em;color:${O.titleColor};`, o || "Protein")
    );
    const h = (x) => j("span", `font-size:${Y.small};color:${O.textMuted};`, x);
    _.appendChild(h("Style:")), _.appendChild(
      Ln(
        Ds,
        g.rep,
        (x) => {
          g.rep = x, b();
        },
        i
      )
    ), _.appendChild(h("Color:")), _.appendChild(
      Vn(
        qs,
        g.color,
        (x) => {
          g.color = x, b();
        },
        a
      )
    );
    const v = j("div", "display:flex;gap:4px;");
    _.appendChild(v);
    const d = [
      ["waters", "Waters", "Show water molecules", l, () => b()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", f, () => b()],
      ["spin", "Spin", "Rotate the view continuously", p, () => $?.spin(g.spin ? "y" : !1)]
    ];
    for (const [x, P, T, F, A] of d)
      v.appendChild(
        di(
          P,
          g[x],
          (I) => {
            g[x] = I, A();
          },
          { title: T, remember: F }
        )
      );
    v.appendChild(Hr(() => y?.reset()));
    const m = j("span", `margin-left:auto;font-size:${Y.small};white-space:nowrap;color:${O.textMuted2};`);
    _.appendChild(m);
    const k = ui();
    t.appendChild(k.wrap);
    const c = j(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Y.body};z-index:20;display:none;pointer-events:none;`
    );
    k.wrap.appendChild(c);
    const u = (x, P) => {
      if (x == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = x, c.style.display = "block";
      const T = P === "error";
      c.style.background = T ? O.warnBg : O.toolbarBg, c.style.color = T ? O.warnFg : O.textMuted, c.style.border = `1px solid ${T ? O.warnBorder : O.toolbarBorder}`;
    };
    function b() {
      $ && Is($, g, S, u);
    }
    if (!r || !r.trim())
      return u("No protein data - waiting for a PDB payload."), {};
    try {
      S = bu(r), m.textContent = wu(S);
    } catch (x) {
      u(`⚠ PDB parse error: ${he(x)}`, "error");
    }
    return u("Loading 3D viewer..."), Ur().then(() => {
      $ = it.createViewer(k.container, { backgroundColor: yt.viewer }), $.addModel(r, "pdb"), Is($, g, S, u), $.zoomTo(), $.spin(g.spin ? "y" : !1), $.render(), y = Kr(k.container, $);
    }).catch((x) => {
      u(`⚠ Failed to render structure: ${he(x)}`, "error");
    }), {
      onResize() {
        $ && ($.resize(), $.render());
      },
      cleanup() {
        if (y?.cleanup(), y = null, !!$) {
          try {
            $.spin(!1);
          } catch {
          }
          try {
            $.clear();
          } catch {
          }
          $ = null;
        }
      }
    };
  }
}
Ne("gufe-protein", Su);
function Tt(e) {
  const t = /* @__PURE__ */ new Map();
  return xr(e, t, /* @__PURE__ */ new Set()), t;
}
function xr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) xr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const s = o["gufe-key"];
      typeof s == "string" && s && !t.has(s) && t.set(s, o);
    }
  for (const o of Object.values(e)) xr(o, t, n);
}
function Ye(e, t) {
  return t ? e.get(t) : void 0;
}
function we(e, t, n) {
  const r = Ye(e, t);
  return r?.type === n ? r : void 0;
}
function Wr(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const s = e.get(o);
    s && (r.add(o), n.push(s));
  }
  return n;
}
function Xe(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const Jr = "Cmd/Ctrl-click to select several.";
function ku(e, t, n, r, o) {
  const s = (i) => o === "keys" ? i["gufe-key"] : Xe(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(s).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${s(i.from)}, ${s(i.to)}`).join(`
`);
}
function Cu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Ls(e, t)), navigator.clipboard || Ls(e, t);
}
function Ls(e, t) {
  const n = j("textarea", `width:100%;height:80px;font-size:${Y.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Eu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = j("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Ii(e) {
  const { words: t } = e, n = bt(e.setting, "names", ["names", "keys"]), r = j("div", "display:flex;flex-direction:column;gap:6px;"), o = j("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${O.textMuted};`);
  o.appendChild(j("span", "", "copy as"));
  const s = Vn(
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
  const i = j("div", `font-size:${Y.tiny};line-height:1.5;color:${O.textMuted2};`), a = (p) => {
    i.textContent = p;
  }, l = j("div", "display:flex;gap:4px;"), f = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [p, g, $] of f) {
    const y = j("button", `${wt}flex:1;`, g.button);
    y.title = $, y.onclick = (S) => {
      const _ = s.value, h = ku(e.nodes, e.edges, e.selected, p, _);
      if (!h) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : p === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Jr}` : "Nothing to copy."
        );
        return;
      }
      const v = h.split(`
`).length;
      S.shiftKey ? (Eu(h, `selected-${g.plural}.txt`), a(`Saved ${v} ${g.plural} to a file.`)) : (Cu(h, r), a(
        p === "edges" ? `Copied ${v} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, l.appendChild(y);
  }
  return r.appendChild(l), r.appendChild(i), r.appendChild(j("div", `font-size:${Y.tiny};color:${O.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Di = "http://www.w3.org/2000/svg";
function le(e, t = {}) {
  const n = document.createElementNS(Di, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function Vs(e, t) {
  const n = document.createElementNS(Di, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const xu = 3;
function qi(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), s = Math.max(s, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: s + t, maxY: i + n };
}
const Pu = { min: 0.15, max: 5 };
function Li(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? Pu;
  let s = 1, i = 0, a = 0;
  const l = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${s})`), n.onTransform?.(s, i, a);
  }, f = () => {
    const d = e.getBoundingClientRect();
    return {
      width: d.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: d.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, p = () => {
    s = 1, i = 0, a = 0;
    const d = n.bounds();
    if (!d) {
      l();
      return;
    }
    const { width: m, height: k } = f();
    s = Math.min(1, m / (d.maxX - d.minX + r * 2), k / (d.maxY - d.minY + r * 2)), i = m / 2 - (d.minX + d.maxX) / 2 * s, a = k / 2 - (d.minY + d.maxY) / 2 * s, l();
  }, $ = Ri(e, {
    onZoom: (d) => {
      const m = e.getBoundingClientRect(), k = d.clientX - m.left, c = d.clientY - m.top, u = Math.min(o.max / s, Math.max(o.min / s, Ni(d)));
      return i = k - (k - i) * u, a = c - (c - a) * u, s *= u, l(), u !== 1;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  });
  let y = null, S = !1;
  const _ = (d) => {
    y = { x: d.clientX - i, y: d.clientY - a, from: { x: d.clientX, y: d.clientY } }, S = !1;
  }, h = (d) => {
    y && (Math.hypot(d.clientX - y.from.x, d.clientY - y.from.y) > xu && (S = !0), i = d.clientX - y.x, a = d.clientY - y.y, l());
  }, v = () => {
    y = null;
  };
  return e.addEventListener("pointerdown", _), e.addEventListener("pointermove", h), e.addEventListener("pointerup", v), e.addEventListener("pointercancel", v), e.addEventListener("pointerleave", v), {
    fit: p,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: p,
    centreOn(d, m, k = 1) {
      const { width: c, height: u } = f();
      s = Math.max(s, k), i = c / 2 - d * s, a = u / 2 - m * s, l();
    },
    transform: () => ({ scale: s, tx: i, ty: a }),
    wasPan: () => S,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(d, m, k) {
      s = d, i = m, a = k, l();
    },
    cleanup() {
      $.cleanup(), e.removeEventListener("pointerdown", _), e.removeEventListener("pointermove", h), e.removeEventListener("pointerup", v), e.removeEventListener("pointercancel", v), e.removeEventListener("pointerleave", v);
    }
  };
}
const Au = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Vi(e) {
  const t = { ...e };
  for (const n of Au) delete t[n];
  return t;
}
const Ru = 8, Nu = 64, Mu = () => new Promise((e) => setTimeout(e, 0));
function Pr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Ou(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const s = o.get_substruct_matches(t), i = JSON.parse(s || "[]");
    if (!Array.isArray(i)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const l of i) {
      const f = l.atoms;
      if (Array.isArray(f))
        for (const p of f) typeof p == "number" && a.add(p);
    }
    return [...a].sort((l, f) => l - f);
  } catch (s) {
    return console.warn("[gufe-viz] SMARTS match threw -", he(s)), null;
  } finally {
    Pr(o);
  }
}
function Bi(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (i) => {
    const a = i.trim(), l = ++o;
    if (!a) return { status: "cleared" };
    const f = r.get(a);
    if (f) return { status: "ok", matched: f, unreadable: 0 };
    const p = await e();
    if (l !== o) return { status: "superseded" };
    if (!p) return { status: "unsupported" };
    if (!p.get_qmol) return { status: "unsupported" };
    let g = null;
    try {
      g = p.get_qmol(a);
    } catch {
      g = null;
    }
    if (!g) return { status: "invalid" };
    if (!g.get_substruct_matches)
      return Pr(g), { status: "unsupported" };
    const $ = /* @__PURE__ */ new Map();
    let y = 0;
    try {
      let S = performance.now(), _ = 0;
      for (let h = 0; h < t.length; h++) {
        const v = t[h] ? Ou(p, g, t[h], n) : null;
        if (v ? v.length && $.set(h, v) : y++, !(++_ < Nu && performance.now() - S < Ru)) {
          if (await Mu(), l !== o) return { status: "superseded" };
          _ = 0, S = performance.now();
        }
      }
    } finally {
      Pr(g);
    }
    return r.set(a, $), { status: "ok", matched: $, unreadable: y };
  }, cancel: () => void ++o };
}
const Tu = 250;
function Ui(e) {
  const t = j("div", "display:flex;flex-direction:column;gap:8px;"), n = j("input", `${qn}width:100%;box-sizing:border-box;`);
  n.type = "text", n.placeholder = e.placeholder, n.value = e.remember.get(), n.spellcheck = !1, n.setAttribute("aria-label", e.label), t.appendChild(n);
  const r = j("div", `font-size:${Y.tiny};line-height:1.5;min-height:1.5em;color:${O.textMuted2};`);
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
    e.remember.set(n.value), window.clearTimeout(i), i = window.setTimeout(() => s(n.value), Tu);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && s(n.value);
    }
  };
}
function On(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function Bs(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Fu(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Us(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const s = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = s[i][0], l = s[i][1], f = t[a * 3 + l];
      if (Math.abs(f) < 1e-14) continue;
      const p = t[a * 3 + a], g = t[l * 3 + l], $ = (g - p) / (2 * f);
      let y;
      Math.abs($) > 1e10 ? y = 1 / (2 * $) : y = ($ >= 0 ? 1 : -1) / (Math.abs($) + Math.sqrt($ * $ + 1));
      const S = 1 / Math.sqrt(1 + y * y), _ = y * S;
      t[a * 3 + a] = p - y * f, t[l * 3 + l] = g + y * f, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let h = 0; h < 3; h++)
        if (h !== a && h !== l) {
          const v = t[h * 3 + a], d = t[h * 3 + l];
          t[h * 3 + a] = S * v - _ * d, t[a * 3 + h] = t[h * 3 + a], t[h * 3 + l] = _ * v + S * d, t[l * 3 + h] = t[h * 3 + l];
        }
      for (let h = 0; h < 3; h++) {
        const v = n[h * 3 + a], d = n[h * 3 + l];
        n[h * 3 + a] = S * v - _ * d, n[h * 3 + l] = _ * v + S * d;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function ju(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], o[0] += t[m][0], o[1] += t[m][1], o[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]] };
  const s = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const k = e[m][0] - r[0], c = e[m][1] - r[1], u = e[m][2] - r[2], b = t[m][0] - o[0], x = t[m][1] - o[1], P = t[m][2] - o[2];
    s[0] += k * b, s[1] += k * x, s[2] += k * P, s[3] += c * b, s[4] += c * x, s[5] += c * P, s[6] += u * b, s[7] += u * x, s[8] += u * P;
  }
  const i = Bs(s), a = On(i, s), l = On(s, i);
  let f = Us(a), p = Us(l);
  function g(m) {
    const k = [0, 1, 2].sort((u, b) => m.values[b] - m.values[u]), c = new Array(9);
    for (let u = 0; u < 3; u++) {
      const b = k[u];
      c[u] = m.vectors[b], c[3 + u] = m.vectors[3 + b], c[6 + u] = m.vectors[6 + b];
    }
    return {
      values: [m.values[k[0]], m.values[k[1]], m.values[k[2]]],
      vectors: c
    };
  }
  f = g(f), p = g(p);
  const $ = f.vectors, y = p.vectors;
  for (let m = 0; m < 3; m++) {
    const k = $[m], c = $[3 + m], u = $[6 + m], b = s[0] * k + s[1] * c + s[2] * u, x = s[3] * k + s[4] * c + s[5] * u, P = s[6] * k + s[7] * c + s[8] * u, T = y[m], F = y[3 + m], A = y[6 + m];
    b * T + x * F + P * A < 0 && (y[m] = -T, y[3 + m] = -F, y[6 + m] = -A);
  }
  const S = Bs($);
  let _ = On(y, S);
  Fu(_) < 0 && (y[2] = -y[2], y[5] = -y[5], y[8] = -y[8], _ = On(y, S));
  const h = _[0] * o[0] + _[1] * o[1] + _[2] * o[2], v = _[3] * o[0] + _[4] * o[1] + _[5] * o[2], d = _[6] * o[0] + _[7] * o[1] + _[8] * o[2];
  return { R: _, t: [r[0] - h, r[1] - v, r[2] - d] };
}
function zu(e, t, n) {
  const r = e[0], o = e[1], s = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * s + n[0],
    t[3] * r + t[4] * o + t[5] * s + n[1],
    t[6] * r + t[7] * o + t[8] * s + n[2]
  ];
}
const Ks = `
`, hr = 4;
function Hs(e, t, n) {
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
function Iu(e, t, n) {
  const r = [], o = [];
  for (const [p, g] of n) {
    const $ = e[g], y = t[p];
    !$ || !y || (r.push($), o.push(y));
  }
  if (r.length < 2) return null;
  const s = (p) => {
    let g = 0, $ = 0;
    for (const y of p)
      g += y[0], $ += y[1];
    return [g / p.length, $ / p.length];
  }, i = s(r), a = s(o);
  let l = null, f = -1 / 0;
  for (const p of [!1, !0]) {
    let g = 0, $ = 0;
    for (let d = 0; d < r.length; d++) {
      const m = (p ? -1 : 1) * (r[d][0] - i[0]), k = r[d][1] - i[1], c = o[d][0] - a[0], u = o[d][1] - a[1];
      g += m * u - k * c, $ += m * c + k * u;
    }
    const y = Math.hypot(g, $);
    if (y <= f) continue;
    f = y;
    const S = Math.atan2(g, $), _ = Math.cos(S), h = Math.sin(S), v = (p ? -1 : 1) * i[0];
    l = {
      cos: _,
      sin: h,
      mirror: p,
      tx: a[0] - (_ * v - h * i[1]),
      ty: a[1] - (h * v + _ * i[1])
    };
  }
  return l;
}
function Du(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function qu(e, t, n) {
  const r = Ti(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(Ks);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let s = 0; s < r.atoms; s++) {
    const i = o[hr + s], a = t[s];
    if (i == null || !a) return e;
    o[hr + s] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = hr + r.atoms + a, f = o[l];
      if (f == null) break;
      const p = parseInt(f.substring(9, 12), 10);
      p !== 1 && p !== 6 || (o[l] = f.substring(0, 9) + String(p === 1 ? 6 : 1).padStart(3) + f.substring(12));
    }
  return o.join(Ks);
}
function Lu(e, t, n) {
  try {
    const r = (i) => Cr(i).coords.map((a) => [a[0], a[1]]), o = r(t), s = Iu(o, r(e), n);
    return s ? qu(
      t,
      o.map((i) => Du(s, i)),
      s.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function Vu(e, t, n, r, o) {
  const s = Hs(e, t, r), i = Hs(e, n, r);
  return !o || r === "conformer" ? { left: s, right: i } : { left: s, right: Lu(s, i, o) };
}
const Bu = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Uu = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Ku() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const mr = Ku() ? Bu : Uu, Gs = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], gr = 420, Hu = {
  mapped: null,
  element: Te.modifiedColor,
  uniqueA: Te.destroyedColor,
  uniqueB: Te.createdColor
}, Gu = 132, qe = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, yr = { gap: 2.5, minLiftFraction: 0.6 }, Wu = 24, Mt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Ws(e, t, n) {
  const r = [], o = [], s = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? r.push(i) : t[i] !== n[a] ? o.push(i) : s.push(i);
  }
  return { atoms: r, elements: o, mapped: s };
}
function Ju(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Yu(e, t, n) {
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
function Ki(e, t) {
  const n = we(t, e.componentA, "SmallMoleculeComponentViz"), r = we(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Wr(t, [e.componentA, e.componentB]) };
}
function Js(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Xu(e, t) {
  const n = Js(e), r = Js(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const s = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[o] - r.min[o] + yr.gap, a = yr.minLiftFraction * s + yr.gap;
  return { axis: o, lift: Math.max(i, a) };
}
function Zu(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let s = 1 / 0;
    for (const i of o)
      i[0] < s && (s = i[0]), i[0] - s > n && (n = i[0] - s);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Mt.minSpread ? r : Mt.minSpread) * Mt.spreadFactor;
}
function Qu(e, t) {
  const n = bd, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), s = Math.floor(o), i = Math.min(s + 1, n.length - 1), a = o - s;
  let l = "0x";
  for (let f = 0; f < 3; f++) {
    const p = ($) => parseInt($.slice(1 + f * 2, 3 + f * 2), 16), g = Math.round(p(n[s]) + (p(n[i]) - p(n[s])) * a);
    l += g.toString(16).padStart(2, "0");
  }
  return l;
}
class ef extends Re {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Tt(n), o = we(r, n.componentA, "SmallMoleculeComponentViz"), s = we(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !s)
      return t.appendChild(
        fe("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = Xe(o), a = Xe(s), l = Ju(n);
    let f, p;
    try {
      f = Cr(o.sdf, i), p = Cr(s.sdf, a);
    } catch (G) {
      return t.appendChild(fe(`Could not read a molecule: ${he(G)}`, !0)), {};
    }
    const g = /* @__PURE__ */ new Map();
    for (const [G, q] of l) g.set(q, G);
    const $ = Ws(l, f.symbols, p.symbols), y = Ws(g, p.symbols, f.symbols), S = pi(t), _ = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(_);
    const h = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    _.appendChild(h);
    const v = bt("atom-mapping.mode", "plain", Gs.map((G) => G.id));
    let d = v.get();
    const m = j(
      "div",
      oi
    );
    m.appendChild(
      Ln(
        Gs,
        d,
        (G) => {
          d = G, Z();
        },
        v
      )
    ), _.appendChild(m);
    let k = [], c = 0, u = !0;
    const b = () => {
      c && cancelAnimationFrame(c), c = 0;
      for (const G of k) {
        G.interaction?.cleanup();
        try {
          G.viewer?.clear();
        } catch {
        }
      }
      k = [], h.replaceChildren();
    }, x = (G) => {
      const q = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), R = j("div", "flex:1;position:relative;min-height:0;");
      R.dataset.gufeViewer = "", q.appendChild(R), S && q.appendChild(j("div", br, G)), h.appendChild(q);
      const D = { container: R, viewer: null, interaction: null };
      return k.push(D), D;
    }, P = () => {
      if (k.length < 2) return;
      const G = k.map(() => "");
      let q = !1;
      const R = () => {
        if (u) {
          if (!q)
            for (let D = 0; D < k.length; D++) {
              const M = k[D].viewer;
              if (!M) continue;
              const w = JSON.stringify(M.getView());
              if (w !== G[D]) {
                q = !0;
                for (let C = 0; C < k.length; C++)
                  C !== D && k[C].viewer && (k[C].viewer.setView(M.getView()), k[C].viewer.render()), G[C] = w;
                q = !1;
                break;
              }
            }
          c = requestAnimationFrame(R);
        }
      };
      c = requestAnimationFrame(R);
    }, T = (G, q) => {
      const R = it.createViewer(G.container, { backgroundColor: yt.viewer });
      for (const { mol: D } of q) R.addModel(mu(D), "sdf");
      return G.viewer = R, R;
    }, F = (G) => {
      G.viewer && (G.interaction = Kr(G.container, G.viewer));
    }, A = () => {
      for (const G of [f, p]) {
        const q = x(G.name), R = T(q, [{ mol: G }]);
        R.setStyle(
          {},
          { stick: { radius: qe.stick, colorscheme: "Jmol" }, sphere: { scale: qe.sphere, colorscheme: "Jmol" } }
        ), R.zoomTo(), R.render(), F(q);
      }
      P();
    }, I = () => {
      const G = Te, q = Ns(G.customSpec), R = [
        { mol: f, uniques: $, side: "left", custom: q.left },
        { mol: p, uniques: y, side: "right", custom: q.right }
      ];
      for (const D of R) {
        const M = x(D.mol.name), w = T(M, [{ mol: D.mol }]);
        w.setStyle(
          {},
          { stick: { radius: qe.stick, color: mr.core }, sphere: { scale: qe.sphere, color: mr.core } }
        );
        const C = (z, L) => {
          w.addStyle(
            { serial: z },
            {
              stick: { radius: qe.markStick, color: Ms(L) },
              sphere: { scale: qe.markSphere, color: Ms(L) }
            }
          );
        };
        for (const z of Os(G, D.mol, D.uniques, D.side))
          for (const L of z.atoms) C(L, z.color);
        for (const z of D.custom)
          z < D.mol.symbols.length && C(z, G.customColor);
        w.zoomTo(), w.render(), F(M);
      }
      P();
    }, W = () => {
      const G = x(`${i} (left), both overlaid (middle), ${a} (right)`), q = Zu(f.coords, p.coords), R = (ee, X) => ({
        ...ee,
        coords: ee.coords.map(([E, N, V]) => [E + X, N, V])
      }), D = R(f, -q), M = R(p, q), w = T(G, [{ mol: D }, { mol: M }, { mol: f }, { mol: p }]);
      w.setStyle({}, { stick: {} });
      const C = Array.from(l);
      C.forEach(([ee, X], E) => {
        const N = D.coords[ee], V = M.coords[X];
        if (!N || !V) return;
        const H = Qu(E, C.length);
        for (const [U, Q, ne] of [N, V])
          w.addSphere({
            center: { x: U, y: Q, z: ne },
            radius: Mt.sphereRadius,
            color: H,
            alpha: Mt.sphereAlpha
          });
      }), w.zoomTo();
      const { clientWidth: z, clientHeight: L } = G.container, K = z - 2 * Wu;
      K > 0 && K < L && w.zoom(K / L), w.render(), F(G);
    }, te = () => {
      const G = x(`${i} to ${a}  (${l.size} mapped pairs)`), q = [], R = [];
      for (const [ee, X] of l) {
        const E = f.coords[ee], N = p.coords[X];
        E && N && (q.push(E), R.push(N));
      }
      const D = ju(q, R), M = p.coords.map((ee) => D ? zu(ee, D.R, D.t) : [...ee]), { axis: w, lift: C } = Xu(f.coords, M), z = {
        ...p,
        coords: M.map((ee) => {
          const X = [ee[0], ee[1], ee[2]];
          return X[w] += C, X;
        })
      }, L = T(G, [{ mol: f }, { mol: z }]), K = {
        stick: { radius: qe.stick, colorscheme: "Jmol" },
        sphere: { scale: qe.pairSphere, colorscheme: "Jmol" }
      };
      L.setStyle({ model: 0 }, K), L.setStyle({ model: 1 }, K);
      for (const [ee, X] of l) {
        const E = f.coords[ee], N = z.coords[X];
        !E || !N || L.addCylinder({
          start: { x: E[0], y: E[1], z: E[2] },
          end: { x: N[0], y: N[1], z: N[2] },
          radius: qe.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: mr.pairLine
        });
      }
      L.zoomTo(), w === 2 ? L.rotate(90, "x") : w === 0 && L.rotate(-90, "z"), L.render(), F(G);
    }, J = () => {
      const G = Te, q = Ns(G.customSpec), D = [
        { mol: f, uniques: $, side: "left", custom: q.left },
        { mol: p, uniques: y, side: "right", custom: q.right }
      ].map((M) => {
        const w = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), C = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${yt.canvas2D};`
        );
        return C.appendChild(fe("Loading 2D depiction...")), w.appendChild(C), S && w.appendChild(j("div", br, M.mol.name)), h.appendChild(w), { box: C, side: M };
      });
      Jn().then((M) => {
        const w = su(G, M), C = Vu(M, o.sdf, s.sdf, G.layout, G.alignPair ? l : null);
        for (const { box: z, side: L } of D) {
          const K = Os(G, L.mol, L.uniques, L.side), ee = iu(
            G,
            gr,
            K,
            L.custom,
            w,
            L.mol.symbols.length
          ), X = au(M, L.side === "left" ? C.left : C.right, gr, ee);
          if (z.replaceChildren(), !X) {
            z.appendChild(fe("Failed to parse molecule", !0));
            continue;
          }
          ji(z, X, gr);
          const E = z.querySelector("svg");
          E && pu(E, L.mol, G, K, L.custom, w);
        }
      }).catch((M) => {
        for (const { box: w } of D)
          w.replaceChildren(fe(`RDKit failed to load: ${he(M)}`, !0));
      });
    }, ae = () => {
      const G = j(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;"
      );
      h.appendChild(G);
      const q = j("div", "display:flex;flex-direction:column;gap:2px;");
      q.appendChild(
        j(
          "div",
          `font-size:${Y.title};font-weight:${Be.bold};color:${Pe.title};`,
          n.name || `${i} to ${a}`
        )
      ), q.appendChild(j("div", `font-size:${Y.body};color:${Pe.faint};`, "LigandAtomMapping")), G.appendChild(q);
      const R = Yu(l, f.symbols, p.symbols), D = j("div", Qe.row), M = [];
      let w = null;
      const C = (U, Q, ne, ue) => {
        const ce = j("button", `${Qe.plain}${Qe.button}`);
        ce.type = "button", ce.appendChild(Ae(U, String(Q), ue)), ce.onclick = () => {
          w = w === ne ? null : ne, V();
        }, M.push({ button: ce, kinds: ne }), D.appendChild(ce);
      }, z = (U, Q) => {
        const ne = j("span", Qe.plain);
        ne.appendChild(Ae(U, Q)), D.appendChild(ne);
      };
      C("mapped atoms", l.size, ["mapped", "element"]), C("element changes", $.elements.length, ["element"], Te.modifiedColor), C(`unique to ${i}`, $.atoms.length, ["uniqueA"], Te.destroyedColor), C(`unique to ${a}`, y.atoms.length, ["uniqueB"], Te.createdColor), z(`atoms in ${i}`, String(f.symbols.length)), z(`atoms in ${a}`, String(p.symbols.length)), z("score", n.score == null ? rt : n.score.toFixed(3)), G.appendChild(D), G.appendChild(j("div", Qr, "Correspondence"));
      const L = j("div", Zn);
      G.appendChild(L);
      const K = j(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${Gu}px,1fr));gap:${re.xs} ${re.md};font-family:${Y.mono};font-size:${Y.small};color:${Pe.primary};`
      );
      G.appendChild(K);
      const ee = String(Math.max(f.symbols.length, p.symbols.length, 1) - 1).length, X = (U, Q) => `${(U == null ? rt : String(U)).padStart(ee)} ${Q.padEnd(2)}`, E = (U) => {
        if (U.kind === "uniqueA") return `${i} atom ${U.a} ${U.symbolA} maps to nothing`;
        if (U.kind === "uniqueB") return `${a} atom ${U.b} ${U.symbolB} maps to nothing`;
        const Q = U.kind === "element" ? ", an element change" : "";
        return `${i} atom ${U.a} ${U.symbolA} maps to ${a} atom ${U.b} ${U.symbolB}${Q}`;
      }, N = (U) => {
        const Q = j(
          "div",
          `white-space:pre;padding:${re.xs} ${re.md};border-radius:${Ue.sm};background:${yt.card};border-left:3px solid ${Hu[U.kind] ?? "transparent"};`,
          `${X(U.a, U.symbolA)} -> ${X(U.b, U.symbolB)}`
        );
        return Q.title = E(U), Q.dataset.gufeRelation = U.kind, Q;
      }, V = () => {
        const U = w, Q = U ? R.filter((ne) => U.includes(ne.kind)) : R;
        K.replaceChildren(...Q.map(N)), Q.length || K.appendChild(
          j("div", `${Zn}grid-column:1/-1;`, w ? "No atoms of that kind." : "This mapping has no atoms.")
        ), L.textContent = (l.size ? "" : "This mapping relates no atoms at all. ") + `${i} -> ${a}, by atom index and element` + (w ? "; click the chip again for all of them" : "");
        for (const ne of M) {
          const ue = ne.kinds === w;
          ne.button.style.cssText = `${Qe.plain}${ue ? Qe.active : Qe.button}`, ne.button.setAttribute("aria-pressed", String(ue)), ne.button.title = ue ? "Show every atom" : "Show only these atoms";
        }
      };
      V();
      const H = Object.entries(n.annotations ?? {}).filter(([U]) => U !== "score");
      if (H.length) {
        G.appendChild(j("div", Qr, "Annotations"));
        const U = j("div", `${Zi}color:${Pe.faint};`);
        for (const [Q, ne] of H)
          U.appendChild(j("div", "", `${Q}: ${String(ne)}`));
        G.appendChild(U);
      }
      G.appendChild(
        j(
          "div",
          `${Zn}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, Z = () => {
      if (b(), d === "info") {
        ae();
        return;
      }
      if (d === "2d") {
        J();
        return;
      }
      h.appendChild(fe("Loading 3D viewer...")), Ur().then(() => {
        u && (h.replaceChildren(), d === "colored" ? I() : d === "openfe" ? W() : d === "lines" ? te() : A());
      }).catch((G) => {
        h.replaceChildren(fe(`3D render failed: ${he(G)}`, !0));
      });
    };
    return Z(), {
      onResize() {
        for (const G of k)
          G.viewer && (G.viewer.resize(), G.viewer.render());
      },
      cleanup() {
        u = !1, b();
      }
    };
  }
}
Ne("gufe-atom-mapping", ef);
const Ys = ["Force-directed", "Circular", "Radial"], tf = "ligand-network", nf = "Click a ligand or an edge to see it.";
function rf(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function of(e) {
  return Vi(e);
}
const Xs = (e) => Math.round(e * 100) / 100;
function sf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (i) => typeof i == "number" && Number.isFinite(i);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((i) => Array.isArray(i) && i.length === 2 && i.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, s = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: s };
}
function af(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Pt = { initial: 0.58, min: 0.25, max: 0.8 }, We = 38, Tn = 200, Hi = 4, cf = 14, lf = 18, xe = {
  fontSize: 11,
  below: We - Hi + 12,
  minFontSize: 7,
  insideWidth: (We - 6) * 2
}, Zs = 1.5, df = 6.5, uf = 0.9, ff = 14, $r = { size: 8, clearance: 8 }, pf = { fontSize: 10 }, hf = 0.4, mf = Sr(O.netMatchAtom), At = { padding: 4, opacity: 0.95 }, gf = 3, vt = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], yf = (e) => vt.find((t) => e >= t.from) ?? vt[vt.length - 1], $f = (e) => vt[Math.min(vt.indexOf(e) + 1, vt.length - 1)], Fn = 200, vf = 24, vr = { node: 0.12, edge: 0.06 }, bf = 1.8, _e = {
  linkBaseDistance: 18,
  linkScoreBonus: 10,
  linkStrength: 0.5,
  chargeStrength: -2500,
  chargeDistanceMin: 20,
  chargeDistanceMax: 5e3,
  centerStrength: 0.08,
  collisionPadding: 12,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2
};
function wf(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Y.small};line-height:1.5;max-width:260px;background:${O.tooltipBg};border:1px solid ${O.tooltipBorder};color:${O.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function _f(e) {
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
      refX: We + $r.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: $r.size,
      markerHeight: $r.size,
      orient: "auto"
    });
    return s.appendChild(le("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(s), o;
  };
}
function Sf(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function kf(e) {
  const [t, n] = O.netEdgeRamp.map(Sf), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((s, i) => Math.round(s + (n[i] - s) * r)).join(",")})`;
}
const Le = Xe, Cf = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Ef(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (g) => (e.matched().get(g) ?? []).join(","), s = (g, $) => {
    if (t.has($) || n.has($)) return;
    const y = e.nodes[$], S = e.matched().get($), _ = y.sdf && Fi(
      g,
      y.sdf,
      Tn,
      Te.layout,
      S && { atoms: S, color: mf, radius: hf }
    );
    if (!_) {
      n.add($);
      return;
    }
    const h = new DOMParser().parseFromString(_, "image/svg+xml").documentElement;
    if (!h || h.nodeName.toLowerCase() === "parsererror") {
      n.add($);
      return;
    }
    const v = (We - Hi) * 2 / Tn, d = e.depictionGroups[$];
    d.setAttribute(
      "transform",
      `translate(${-v * Tn / 2},${-v * Tn / 2}) scale(${v})`
    );
    let m = 0;
    for (const k of Array.from(h.childNodes)) {
      if (k.nodeType !== 1) continue;
      const c = k.nodeName.toLowerCase();
      if (!(c === "defs" || c === "metadata" || c === "title")) {
        if (c === "rect") {
          const u = (k.getAttribute("fill") ?? "").toLowerCase();
          if (u === "#ffffff" || u === "white" || u === "rgb(255,255,255)") continue;
        }
        d.appendChild(document.importNode(k, !0)), m++;
      }
    }
    m ? (t.add($), r[$] = o($)) : n.add($);
  }, i = () => {
    for (const g of [...t])
      r[g] !== o(g) && (e.depictionGroups[g].replaceChildren(), t.delete(g));
  }, a = [], l = (g, $) => {
    if (a[g]) return a[g];
    $.setAttribute("font-size", String(xe.fontSize));
    let y = 0;
    try {
      y = $.getBBox().width;
    } catch {
      return xe.fontSize;
    }
    if (!y) return xe.fontSize;
    const S = xe.fontSize * xe.insideWidth / y;
    return a[g] = Math.max(xe.minFontSize, Math.min(xe.fontSize, S)), a[g];
  }, f = (g, $) => {
    const y = $.structure && !t.has(g) ? $f($) : $;
    e.depictionGroups[g].setAttribute("display", y.structure ? "inline" : "none");
    const S = e.matched().has(g), _ = e.circles[g];
    _.setAttribute("fill", y.disc ? S ? O.netMatchFill : O.netNodeFill : "none"), _.setAttribute("stroke", y.disc ? S ? O.netMatchStroke : O.netNodeStroke : "none"), e.initials[g].setAttribute("display", y.initials ? "inline" : "none");
    const h = e.captions[g];
    if (h.setAttribute("fill", S ? O.netMatchStroke : O.netNodeCaption), h.setAttribute("display", y.name === "none" ? "none" : "inline"), y.name === "none") return;
    const v = y.name === "inside";
    h.setAttribute("y", v ? "0" : String(xe.below)), h.setAttribute("dominant-baseline", v ? "middle" : "auto"), h.setAttribute("font-size", String(v ? l(g, h) : xe.fontSize));
  };
  return { apply: (g, $, y) => {
    const S = yf(g);
    e.stage.setAttribute("data-detail", S.id), e.edgeLabels.setAttribute("display", S.edgeScores ? "inline" : "none");
    for (let d = 0; d < e.nodes.length; d++) f(d, S);
    if (!S.structure) return;
    const { width: _, height: h } = e.viewport(), v = [];
    e.nodes.forEach((d, m) => {
      if (t.has(m) || n.has(m)) return;
      const k = d.x * g + $, c = d.y * g + y;
      k < -Fn || c < -Fn || k > _ + Fn || c > h + Fn || v.push(m);
    }), v.length && e.rdkit().then((d) => {
      if (d)
        for (const m of v)
          s(d, m), f(m, S);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: i };
}
function xf(e) {
  const t = Nt("ligand-network.query"), n = Nr("ligand-network.minScore", 0, 0, 1), r = j("div", ti), o = j("input", `${qn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const s = Ui({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: Nt("ligand-network.smarts"),
    run: (_) => e.match(_),
    describe: (_) => {
      const h = _.unreadable ? `, ${_.unreadable} could not be read` : "";
      return `${_.matched.size} of ${e.nodes.length} ligands match${h}`;
    }
  });
  r.appendChild(s.element);
  const i = j("div", `display:flex;align-items:center;gap:8px;font-size:${Y.small};color:${O.textMuted};`), a = j("span", `min-width:28px;color:${O.textPrimary};`, "0.00"), l = j("input", "flex:1;");
  l.type = "range", l.min = "0", l.max = "1", l.step = "0.01", l.value = String(n.get()), e.filter.minScore = Number(l.value), l.setAttribute("aria-label", "Hide mappings scoring below this"), i.appendChild(j("span", "", "score >=")), i.appendChild(l), i.appendChild(a), r.appendChild(i);
  const f = j("div", `font-size:${Y.small};color:${O.textMuted2};`);
  r.appendChild(f);
  const p = j("div", ni);
  r.appendChild(p), r.appendChild(j("div", `font-size:${Y.tiny};line-height:1.5;color:${O.textMuted2};`, Jr));
  const g = Ii({
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
  const $ = j("button", `${wt}width:100%;`, "Clear selection");
  $.onclick = () => {
    e.selected.clear(), S(), e.refresh();
  }, r.appendChild($);
  const y = (_) => {
    const h = e.query.text.trim().toLowerCase();
    return h ? Le(_).toLowerCase().includes(h) || (_.smiles ?? "").toLowerCase().includes(h) || _["gufe-key"].toLowerCase().includes(h) : !0;
  }, S = () => {
    g.clearNote(), p.replaceChildren();
    const _ = e.nodes.map((h, v) => ({ node: h, index: v })).filter(({ node: h }) => y(h));
    f.textContent = `${_.length} of ${e.nodes.length} ligands`;
    for (const { node: h, index: v } of _) {
      const d = h["gufe-key"], m = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Y.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? O.cardBorderActive : O.cardBorder};background:${e.selected.has(d) ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), k = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Le(h));
      k.title = `${Le(h)}
${h.smiles ?? ""}`, m.appendChild(k), m.onclick = (c) => {
        c.shiftKey || c.metaKey || c.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus(v)), S(), e.refresh();
      }, p.appendChild(m);
    }
    _.length || p.appendChild(j("div", `font-size:${Y.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), S(), e.refresh();
  }, l.oninput = () => {
    e.filter.minScore = Number(l.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, S(), s.apply(), r;
}
class Pf extends Re {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Tt(n), o = [];
    let s = 0;
    for (const E of n.nodes ?? []) {
      const N = we(r, E, "SmallMoleculeComponentViz");
      if (!N) {
        s++;
        continue;
      }
      o.push({ ...N, x: 0, y: 0 });
    }
    const i = new Map(o.map((E) => [E["gufe-key"], E])), a = [];
    let l = 0;
    for (const E of n.edges ?? []) {
      const N = i.get(E.componentA), V = i.get(E.componentB);
      if (!N || !V) {
        l++;
        continue;
      }
      a.push({ ...E, index: a.length, from: N, to: V });
    }
    const f = _t(n.name || "Ligand network");
    f.statsEl.appendChild(Ae("ligands", String(o.length))), f.statsEl.appendChild(Ae("mappings", String(a.length))), t.appendChild(f);
    const p = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(p);
    const g = /* @__PURE__ */ new Set(), $ = { minScore: 0 }, y = { text: "" };
    let S = () => {
    }, _ = null;
    const h = () => _ ??= Jn().catch((E) => (console.warn("[gufe-viz] RDKit failed to load:", he(E)), null)), v = Bi(
      h,
      o.map((E) => E.sdf ?? "")
    );
    let d = /* @__PURE__ */ new Map(), m = () => {
    };
    const k = async (E) => {
      const N = await v.run(E);
      return N.status === "superseded" || (d = N.status === "ok" ? N.matched : /* @__PURE__ */ new Map(), m()), N;
    }, c = gi(
      f,
      () => xf({
        nodes: o,
        edges: a,
        selected: g,
        filter: $,
        query: y,
        refresh: () => S(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (E) => {
          te(E), ee({ kind: "ligand", index: E });
        },
        match: (E) => k(E)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => X(),
        remember: $t("ligand-network.menuOpen", !1)
      }
    );
    c.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", p.appendChild(c.panel);
    let u = () => {
    };
    const b = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), x = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.appBg};`);
    p.appendChild(b), p.appendChild(
      hi(p, b, x, {
        min: Pt.min,
        max: Pt.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Nr("ligand-network.canvasShare", Pt.initial, Pt.min, Pt.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => u()
      })
    ), p.appendChild(x);
    const P = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${O.netCanvasBg};`);
    b.appendChild(P);
    const T = bt("ligand-network.layout", "Force-directed", Ys), F = this.#n(
      (E) => X(E),
      () => z(),
      T
    );
    b.appendChild(F.bar);
    const A = this.#e(x, r);
    if (!o.length)
      return P.appendChild(
        fe(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), A.message("Nothing to show."), {};
    s && st(
      P,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && st(P, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const I = h(), W = wf(P);
    let te = () => {
    };
    const J = sf(ia(tf), o.length);
    let ae = J && { scale: J.scale, tx: J.tx, ty: J.ty }, Z = a.length ? { kind: "edge", index: 0 } : null;
    if (J && J.selected >= 0) {
      const E = J.selectedKind ?? "edge";
      J.selected < (E === "ligand" ? o.length : a.length) && (Z = { kind: E, index: J.selected });
    }
    let G = () => ({ scale: 1, tx: 0, ty: 0 }), q = !1, R = null, D = T.get(), M = !1, w = !0, C = () => {
    }, z = () => {
    }, L = 0;
    const K = () => {
      if (!Z) {
        A.message(a.length ? nf : "Click a ligand to see it.");
        return;
      }
      Z.kind === "edge" ? A.showMapping(a[Z.index]) : A.showLigand(o[Z.index]);
    }, ee = (E) => {
      Z = E, K(), C();
    }, X = (E = D) => {
      const N = q && E === D ? G() : null, V = ++L;
      D = E, R?.(), R = null, P.querySelectorAll("svg").forEach((ne) => ne.remove());
      const H = P.clientWidth || 800, U = P.clientHeight || 600;
      Af(o, H, U, D, a), J && af(o, J.nodes);
      const Q = () => {
        if (!w || V !== L) return;
        const ne = this.#t(P, o, a, H, U, ee, I, W);
        C = () => ne.setSelected(Z), z = ne.reset, R = ne.cleanup, te = (ce) => ne.focusOn(ce), G = ne.transform, S = () => {
          const ce = y.text.trim().toLowerCase(), me = g.size > 0 || ce.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Ce of o) {
            const je = Ce["gufe-key"], Ze = g.has(je) || ce.length > 0 && (Le(Ce).toLowerCase().includes(ce) || (Ce.smiles ?? "").toLowerCase().includes(ce) || je.toLowerCase().includes(ce));
            (!me || Ze) && pe.add(je);
          }
          const Fe = /* @__PURE__ */ new Set();
          a.forEach((Ce, je) => {
            (Ce.score ?? 0) < $.minScore || !pe.has(Ce.from["gufe-key"]) || !pe.has(Ce.to["gufe-key"]) || Fe.add(je);
          });
          const $e = me || $.minScore > 0;
          ne.setEmphasis($e ? pe : null, $e ? Fe : null);
        }, m = () => ne.setMatches(d), C(), S(), m();
        const ue = ae ?? N;
        ue ? (ne.setTransform(ue.scale, ue.tx, ue.ty), ae = null) : ne.fit(), q = !0;
      };
      if (D !== "Force-directed" || M || J) {
        Q();
        return;
      }
      Rf(o, a, H, U).then((ne) => {
        if (!(!w || V !== L)) {
          if (ne) {
            Q();
            return;
          }
          M = !0, F.picker.value = "Circular", st(P, "d3 could not be loaded - showing the circular layout instead"), X("Circular");
        }
      }, Q);
    };
    return u = () => X(), X(), K(), {
      onResize: () => X(),
      cleanup: () => {
        w = !1, v.cancel(), W.remove(), R?.();
      },
      viewState: () => ({
        nodes: o.map((E) => [Xs(E.x), Xs(E.y)]),
        ...G(),
        selected: Z ? Z.index : -1,
        selectedKind: Z ? Z.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = j(
      "div",
      Rr.bottom
    ), s = j("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${O.textMuted};`);
    s.appendChild(j("span", "", "score")), s.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${O.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(j("span", "", "0 -> 1")), o.appendChild(s), o.appendChild(j("label", `font-size:${Y.body};margin-left:auto;color:${O.textMuted};`, "Layout"));
    const i = Vn(
      Ys.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(i), o.appendChild(Hr(n, "Reset pan and zoom")), { bar: o, picker: i };
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
      showMapping: (i) => s("gufe-atom-mapping", Ki(rf(i), n)),
      showLigand: (i) => s("gufe-small-molecule", of(i)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, s, i, a, l) {
    const f = le("svg", {
      class: "gufe-graph",
      width: o,
      height: s,
      style: "display:block;touch-action:none;"
    }), p = le("g");
    f.appendChild(p), t.appendChild(f);
    const g = le("defs"), $ = _f(g);
    f.appendChild(g);
    const y = [], S = le("g"), _ = le("g"), h = le("g", { "pointer-events": "none" }), v = le("g");
    p.append(S, _, h, v);
    for (const A of r) {
      const I = kf(A.score), W = Zs + (A.score ?? 0.5) * (df - Zs), te = le("line", {
        stroke: O.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": W + At.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), J = le("line", {
        stroke: I,
        "stroke-width": W,
        "stroke-opacity": uf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${$(I)})`,
        "pointer-events": "none"
      }), ae = le("line", { stroke: "transparent", "stroke-width": ff, style: "cursor:pointer;" });
      ae.addEventListener("click", (q) => {
        q.stopPropagation(), i({ kind: "edge", index: A.index });
      }), ae.addEventListener("mousemove", (q) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Ve(Le(A.from))} -&gt; ${Ve(Le(A.to))}</div>` + (A.score == null ? `<div style="color:${O.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Y.tiny};color:${O.textMuted2};">Click to see the mapping</div>`,
          q.offsetX,
          q.offsetY
        );
      }), ae.addEventListener("mouseleave", () => l.hide()), y.push(te), S.append(te, J), _.appendChild(ae);
      const Z = le("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": pf.fontSize,
        "font-weight": 600,
        fill: O.netEdgeLabel
      });
      Z.textContent = A.score == null ? "" : A.score.toFixed(2);
      const G = le("g", { class: "gufe-edge-label" });
      G.appendChild(Z), h.appendChild(G);
    }
    const d = [], m = [], k = [], c = [], u = [], b = n.map((A) => {
      const I = le("g", { class: "gufe-node", style: "cursor:grab;" });
      I.addEventListener("mousemove", (G) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Ve(Le(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ve(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Y.tiny};color:${O.textMuted2};overflow-wrap:anywhere;">${Ve(A["gufe-key"])}</div><div style="margin-top:4px;font-size:${Y.tiny};color:${O.textMuted2};">Click to see the ligand</div>`,
          G.offsetX,
          G.offsetY
        );
      }), I.addEventListener("mouseleave", () => l.hide());
      const W = le("circle", {
        class: "gufe-node-halo",
        r: We + At.padding,
        fill: "none",
        stroke: O.netHaloColor,
        "stroke-width": At.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      I.appendChild(W), k.push(W);
      const te = le("circle", {
        class: "gufe-node-disc",
        r: We,
        fill: O.netNodeFill,
        stroke: O.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      I.appendChild(te), m.push(te);
      const J = le("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      I.appendChild(J), d.push(J);
      const ae = le("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": lf,
        "font-weight": 700,
        fill: O.netInitials,
        "pointer-events": "none"
      });
      ae.textContent = Le(A).slice(0, 2).toUpperCase(), I.appendChild(ae), c.push(ae);
      const Z = le("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: xe.below,
        "font-size": xe.fontSize,
        "font-weight": 600,
        fill: O.netNodeCaption,
        "pointer-events": "none"
      });
      return Z.textContent = Cf(Le(A), cf), Z.setAttribute("display", "none"), u.push(Z), I.appendChild(Z), v.appendChild(I), I;
    }), x = () => {
      r.forEach((A, I) => {
        for (const te of [y[I], S.children[I * 2 + 1], _.children[I]]) {
          const J = te;
          J.setAttribute("x1", String(A.from.x)), J.setAttribute("y1", String(A.from.y)), J.setAttribute("x2", String(A.to.x)), J.setAttribute("y2", String(A.to.y));
        }
        h.children[I].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, I) => b[I].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    x();
    let P = /* @__PURE__ */ new Map();
    const T = Ef({
      nodes: n,
      circles: m,
      matched: () => P,
      captions: u,
      initials: c,
      depictionGroups: d,
      edgeLabels: h,
      stage: f,
      rdkit: () => a,
      viewport: () => ({ width: o, height: s })
    }), F = this.#r(
      f,
      p,
      n,
      b,
      x,
      T.apply,
      (A) => i({ kind: "ligand", index: A })
    );
    return {
      setSelected(A) {
        const I = A?.kind === "edge" ? A.index : -1, W = A?.kind === "ligand" ? A.index : -1;
        y.forEach((te, J) => te.setAttribute("opacity", J === I ? String(At.opacity) : "0")), k.forEach((te, J) => te.setAttribute("opacity", J === W ? String(At.opacity) : "0"));
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
        const { scale: I, tx: W, ty: te } = F.transform();
        T.apply(I, W, te);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, I) {
        b.forEach((W, te) => {
          const J = !A || A.has(n[te]["gufe-key"]);
          W.setAttribute("opacity", J ? "1" : String(vr.node));
        }), r.forEach((W, te) => {
          const J = !I || I.has(te), ae = J ? "0.9" : String(vr.edge);
          S.children[te * 2 + 1].setAttribute("stroke-opacity", ae), h.children[te].setAttribute("opacity", J ? "1" : String(vr.edge));
        });
      },
      focusOn(A) {
        const I = n[A];
        I && F.centreOn(I.x, I.y);
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
    const l = Li(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => qi(r, We),
      margin: vf,
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((f, p) => {
      let g = null, $ = !1;
      f.addEventListener("pointerdown", (S) => {
        S.stopPropagation();
        const { scale: _ } = l.transform();
        g = { x: S.clientX - r[p].x * _, y: S.clientY - r[p].y * _ }, $ = !1, f.setPointerCapture(S.pointerId);
      }), f.addEventListener("pointermove", (S) => {
        if (!g) return;
        const { scale: _ } = l.transform(), h = (S.clientX - g.x) / _, v = (S.clientY - g.y) / _;
        Math.hypot(h - r[p].x, v - r[p].y) * _ > gf && ($ = !0), r[p].x = r[p].fx = h, r[p].y = r[p].fy = v, s();
      });
      const y = () => {
        g = null;
      };
      f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("click", (S) => {
        S.stopPropagation(), $ || a(p);
      });
    }), {
      ...l,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (f, p) => l.centreOn(f, p, bf)
    };
  }
}
function Af(e, t, n, r, o) {
  const s = t / 2, i = n / 2, a = (l, f) => {
    l.forEach((p, g) => {
      const $ = 2 * Math.PI * g / Math.max(1, l.length) - Math.PI / 2;
      p.x = s + f * Math.cos($), p.y = i + f * Math.sin($), p.fx = r === "Force-directed" ? void 0 : p.x, p.fy = r === "Force-directed" ? void 0 : p.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of o)
      l.get(_.from["gufe-key"]).push(_.to["gufe-key"]), l.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const f = new Map(e.map((_) => [_["gufe-key"], _])), p = e.reduce(
      (_, h) => l.get(h["gufe-key"]).length > l.get(_["gufe-key"]).length ? h : _
    ), g = /* @__PURE__ */ new Set([p["gufe-key"]]);
    let $ = [p["gufe-key"]], y = 0;
    const S = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      a(
        $.map((h) => f.get(h)),
        y === 0 ? 0 : y * S + 40
      );
      const _ = [];
      for (const h of $)
        for (const v of l.get(h))
          g.has(v) || (g.add(v), _.push(v));
      $ = _, y++;
    }
    a(e.filter((_) => !g.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Rf(e, t, n, r) {
  let o;
  try {
    if (o = await Ai(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((l) => l["gufe-key"]).distance((l) => _e.linkBaseDistance + (1 - (l.score ?? 0.5)) * _e.linkScoreBonus).strength(_e.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(_e.chargeStrength).distanceMin(_e.chargeDistanceMin).distanceMax(_e.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(_e.centerStrength)).force("collision", o.forceCollide(We + _e.collisionPadding).iterations(_e.collisionIterations)).force("x", o.forceX(n / 2).strength(_e.drift)).force("y", o.forceY(r / 2).strength(_e.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * _e.tickMultiplier; l++) i.tick();
  return !0;
}
Ne("gufe-ligand-network", Pf);
function Nf(e, t) {
  return { ...e, registry: Wr(t, Object.values(e.components ?? {})) };
}
function Mf(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Of(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Tf extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Tt(n), o = [], s = [];
    for (const [S, _] of Object.entries(n.components ?? {})) {
      const h = Ye(r, _);
      h ? o.push([S, h]) : s.push(S);
    }
    const i = _t(n.name || "Chemical system");
    if (i.statsEl.appendChild(Ae("components", String(o.length))), t.appendChild(i), !o.length)
      return t.appendChild(
        fe(
          s.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = j("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:column;");
    t.appendChild(a), s.length && st(
      a,
      `${s.length} component${s.length === 1 ? "" : "s"} named by this system (${s.join(", ")}) are not in its registry`
    );
    const l = j(
      "div",
      `flex:0 0 auto;min-width:0;overflow-x:auto;display:flex;flex-direction:row;gap:6px;padding:10px;background:${O.panelBg};border-bottom:1px solid ${O.splitBorder};`
    );
    a.appendChild(l);
    const f = j("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(f);
    const p = j("div", "flex:1;min-height:0;display:flex;");
    f.appendChild(p);
    const g = document.createElement("gufe-view");
    g.style.cssText = "flex:1;min-width:0;min-height:0;", g.setAttribute(fi, ""), p.appendChild(g);
    const $ = [], y = (S) => {
      $.forEach((_, h) => {
        const v = h === S;
        _.style.background = v ? O.cardBgActive : O.cardBg, _.style.borderColor = v ? O.cardBorderActive : O.cardBorder;
      }), g.payload = o[S][1];
    };
    return o.forEach(([S, _], h) => {
      const v = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${O.cardBorder};border-radius:8px;background:${O.cardBg};cursor:pointer;font-family:inherit;font-size:${Y.body};flex-shrink:0;width:auto;`
      );
      v.appendChild(j("span", `font-weight:700;color:${O.textPrimary};`, S)), v.appendChild(j("span", `font-size:${Y.small};color:${O.textMuted};`, Mf(_))), v.appendChild(Bn(Of(_))), v.onclick = () => y(h), $.push(v), l.appendChild(v);
    }), y(0), {
      onResize: () => g.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => g.remove()
    };
  }
}
Ne("gufe-chemical-system", Tf);
const Ff = 460;
function jf(e, t) {
  const n = we(t, e.stateA, "ChemicalSystemViz"), r = we(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const s of [n, r]) o.push(...Object.values(s.components ?? {}));
  for (const s of e.mappings ?? []) o.push(s.componentA, s.componentB);
  return { ...e, registry: Wr(t, o) };
}
const Ar = {
  unchanged: O.diffUnchanged,
  changed: O.diffChanged,
  added: O.diffAdded,
  removed: O.diffRemoved
};
function zf(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function If(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Df(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function qf(e, t, n) {
  const r = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${O.cardBg};border:1px solid ${O.cardBorder};`
  ), o = j(
    "span",
    `display:none;font-size:${Y.tiny};font-weight:700;letter-spacing:.08em;color:${O.textMuted2};`,
    n
  );
  r.appendChild(o);
  const s = Df(e);
  return s ? (r.style.borderColor = t === "unchanged" ? O.cardBorder : Ar[t], r.appendChild(j("span", `font-size:${Y.body};font-weight:600;color:${O.textPrimary};`, s.name)), r.appendChild(Bn(s.type)), { cell: r, sideMark: o }) : (r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(j("span", `font-size:${Y.body};color:${O.textMuted2};`, "absent")), { cell: r, sideMark: o });
}
function Lf(e, t) {
  const n = Ye(t, e.componentA), r = Ye(t, e.componentB);
  return `${n ? Xe(n) : "A"} to ${r ? Xe(r) : "B"}`;
}
class Vf extends Re {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Tt(n), o = we(r, n.stateA, "ChemicalSystemViz"), s = we(r, n.stateB, "ChemicalSystemViz"), i = we(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = _t(n.name || "Transformation");
    if (l.statsEl.appendChild(Ae("protocol", i?.gufe_type || i?.name || "-")), l.statsEl.appendChild(Ae("mappings", String(a.length))), t.appendChild(l), !o || !s)
      return t.appendChild(
        fe("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const f = If(o, s), p = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(p);
    const g = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [c, u] of [
      ["State A", o],
      ["State B", s]
    ])
      g.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${Y.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${O.textMuted2};`,
          `${c}${u.name ? ` - ${u.name}` : ""}`
        )
      );
    p.appendChild(g);
    const $ = [], y = [], S = [];
    for (const c of f) {
      const u = o.components?.[c], b = s.components?.[c], x = zf(u, b), P = Ye(r, u), T = Ye(r, b), F = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), A = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      A.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Ar[x]};`)
      );
      const I = j("span", `font-size:${Y.body};font-weight:700;color:${O.textPrimary};overflow-wrap:anywhere;`, c);
      I.title = x, A.appendChild(I), F.appendChild(A);
      for (const [W, te] of [
        [P, "A"],
        [T, "B"]
      ]) {
        const J = qf(W, x, te);
        F.appendChild(J.cell), S.push(J.sideMark);
      }
      $.push(F), y.push(A), p.appendChild(F);
    }
    let _ = null;
    const h = Ca(t, (c) => {
      const u = c > 0 && c < Ff;
      if (u !== _) {
        _ = u, g.style.display = u ? "none" : "flex";
        for (const b of $) b.style.flexDirection = u ? "column" : "row";
        for (const b of y) b.style.flex = u ? "0 0 auto" : "0 0 110px";
        for (const b of S) b.style.display = u ? "block" : "none";
      }
    }), v = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${Y.small};color:${O.textMuted};`
    );
    for (const c of ["unchanged", "changed", "added", "removed"])
      v.appendChild(Ae(c, "", Ar[c]));
    p.appendChild(v);
    const d = j(
      "div",
      ri,
      "Atom mapping"
    );
    if (t.appendChild(d), !a.length)
      return t.appendChild(
        fe(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: h };
    const m = document.createElement("gufe-atom-mapping");
    m.style.cssText = "flex:1;min-height:0;min-width:0;";
    const k = (c) => {
      m.payload = Ki(a[c], r);
    };
    if (k(0), a.length > 1) {
      const c = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Y.small};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textMuted};`
      );
      c.appendChild(
        Ln(
          a.map((u, b) => ({
            id: String(b),
            label: u.name || Lf(u, r)
          })),
          "0",
          (u) => k(Number(u))
        )
      ), t.appendChild(c);
    }
    return t.appendChild(m), {
      onResize: () => m.resize?.(),
      cleanup: () => {
        h(), m.remove();
      }
    };
  }
}
Ne("gufe-transformation", Vf);
const ot = { width: 148, height: 46, radius: 10 }, gt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Rt = { initial: 0.56, min: 0.25, max: 0.78 }, Bf = 24, Qs = { x: ot.width / 2, y: ot.height / 2 }, ei = { node: 0.12, edge: 0.06 }, Uf = 1.4, In = Xe;
function Kf(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Hf(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = Ye(t, r);
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
function Gf(e, t) {
  const n = { fill: O.cardBg, stroke: O.cardBorder }, r = e.map((i) => Hf(i, t)), o = [...new Set(r)];
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
function Wf(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const s = Ye(t, o);
    if (!s) continue;
    n.push(Xe(s), s["gufe-key"]);
    const i = s.smiles;
    i && n.push(i);
  }
  return n.join(" ").toLowerCase();
}
function Jf(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((s) => {
    const i = [];
    for (const a of Object.values(s.components ?? {})) {
      const l = we(t, a, "SmallMoleculeComponentViz");
      if (!l) continue;
      let f = r.get(a);
      f === void 0 && (f = n.length, r.set(a, f), n.push(l.sdf ?? "")), i.push(f);
    }
    return i;
  });
  return { sources: n, perNode: o };
}
function Yf(e) {
  const t = Nt("alchemical-network.query"), n = Nt("alchemical-network.composition"), r = j("div", ti), o = j("input", `${qn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const s = Ui({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: Nt("alchemical-network.smarts"),
    run: ($) => e.match($),
    describe: ($) => {
      const y = $.unreadable ? `, ${$.unreadable} could not be read` : "";
      return `${e.matched()?.size ?? e.nodes.length} of ${e.nodes.length} systems contain it${y}`;
    }
  });
  if (r.appendChild(s.element), e.compositions.length > 1) {
    const $ = j("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${O.textMuted};`);
    $.appendChild(j("span", "flex-shrink:0;", "made of"));
    const y = Vn(
      [{ id: "", label: "anything" }, ...e.compositions.map((S) => ({ id: S, label: S }))],
      "",
      (S) => {
        e.filter.composition = S, g(), e.refresh();
      },
      n
    );
    y.style.cssText += "flex:1;min-width:0;", e.filter.composition = y.value, $.appendChild(y), r.appendChild($);
  }
  const i = j("div", `font-size:${Y.small};color:${O.textMuted2};`);
  r.appendChild(i);
  const a = j("div", ni);
  r.appendChild(a), r.appendChild(j("div", `font-size:${Y.tiny};line-height:1.5;color:${O.textMuted2};`, Jr));
  const l = Ii({
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
  const f = j("button", `${wt}width:100%;`, "Clear selection");
  f.onclick = () => {
    e.selected.clear(), g(), e.refresh();
  }, r.appendChild(f);
  const p = ($) => {
    const y = e.query.text.trim().toLowerCase();
    if (y && !e.haystacks[$].includes(y) || e.filter.composition && e.signatures[$] !== e.filter.composition) return !1;
    const S = e.matched();
    return !(S && !S.has($));
  }, g = () => {
    l.clearNote(), a.replaceChildren();
    const $ = e.nodes.map((y, S) => ({ node: y, index: S })).filter(({ index: y }) => p(y));
    i.textContent = `${$.length} of ${e.nodes.length} systems`;
    for (const { node: y, index: S } of $) {
      const _ = y["gufe-key"], h = e.selected.has(_), v = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Y.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${h ? O.cardBorderActive : O.cardBorder};background:${h ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), d = e.colorOf(S);
      v.appendChild(
        j(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${d.fill};border:1px solid ${d.stroke};`
        )
      );
      const m = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", In(y));
      m.title = `${In(y)}
${e.signatures[S]}`, v.appendChild(m), v.onclick = (k) => {
        k.shiftKey || k.metaKey || k.ctrlKey ? e.selected.has(_) ? e.selected.delete(_) : e.selected.add(_) : (e.selected.clear(), e.selected.add(_), e.focus(S)), g(), e.refresh();
      }, a.appendChild(v);
    }
    $.length || a.appendChild(j("div", `font-size:${Y.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), g(), e.refresh();
  }, g(), e.mounted(g), s.apply(), r;
}
function Xf(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((o, s) => {
    const i = 2 * Math.PI * s / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(i), o.y = n / 2 + r * Math.sin(i);
  });
}
async function Zf(e, t, n, r) {
  let o;
  try {
    if (o = await Ai(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((l) => l["gufe-key"]).distance(gt.linkDistance).strength(gt.linkStrength)
  ).force("charge", o.forceManyBody().strength(gt.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(gt.collisionRadius).iterations(gt.collisionIterations)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * gt.tickMultiplier; l++) i.tick();
  return !0;
}
class Qf extends Re {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Tt(n), o = [];
    let s = 0;
    for (const L of n.nodes ?? []) {
      const K = we(r, L, "ChemicalSystemViz");
      if (!K) {
        s++;
        continue;
      }
      o.push({ ...K, x: 0, y: 0 });
    }
    const i = new Map(o.map((L) => [L["gufe-key"], L])), a = [];
    let l = 0;
    for (const L of n.edges ?? []) {
      const K = i.get(L.stateA), ee = i.get(L.stateB);
      if (!K || !ee) {
        l++;
        continue;
      }
      a.push({ ...L, index: a.length, from: K, to: ee });
    }
    const f = (L) => {
      const K = we(r, L.protocol, "ProtocolViz");
      return K?.gufe_type || K?.name || "";
    }, p = new Set(a.map(f).filter(Boolean)), g = _t(n.name || "Alchemical network");
    g.statsEl.appendChild(Ae("systems", String(o.length))), g.statsEl.appendChild(Ae("transformations", String(a.length))), p.size && g.statsEl.appendChild(Ae("protocol", [...p].join(", "))), t.appendChild(g);
    const $ = Gf(o, r), y = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    let S = () => {
    };
    const _ = /* @__PURE__ */ new Set(), h = { composition: "" }, v = { text: "" };
    let d = () => {
    }, m = () => {
    }, k = () => {
    };
    const c = o.map((L) => Wf(L, r));
    let u = null;
    const b = () => u ??= Jn().catch((L) => (console.warn("[gufe-viz] RDKit failed to load:", he(L)), null)), x = Jf(o, r), P = Bi(b, x.sources);
    let T = null, F = () => {
    };
    const A = async (L) => {
      const K = await P.run(L);
      return K.status === "superseded" || (T = K.status === "ok" ? new Set(o.flatMap((ee, X) => x.perNode[X].some((E) => K.matched.has(E)) ? [X] : [])) : null, F(), d()), K;
    }, I = gi(
      g,
      () => Yf({
        nodes: o,
        edges: a,
        haystacks: c,
        signatures: $.signatures,
        colorOf: $.colorOf,
        compositions: $.compositions,
        selected: _,
        filter: h,
        query: v,
        refresh: () => d(),
        matched: () => T,
        match: (L) => A(L),
        mounted: (L) => {
          F = L;
        },
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (L) => {
          m(L), k(L);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => S(),
        remember: $t("alchemical-network.menuOpen", !1)
      }
    );
    I.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", y.appendChild(I.panel);
    const W = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), te = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.appBg};`), J = j("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${O.netCanvasBg};`);
    W.appendChild(J), y.appendChild(W), y.appendChild(
      hi(y, W, te, {
        min: Rt.min,
        max: Rt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Nr("alchemical-network.canvasShare", Rt.initial, Rt.min, Rt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => S()
      })
    ), y.appendChild(te);
    const ae = this.#e(te, r);
    if (!o.length)
      return J.appendChild(
        fe(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), ae.message("Nothing to show."), { cleanup: () => ae.cleanup() };
    s && st(
      J,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && st(
      J,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let Z = !0, G = !1, q = null, R = () => {
    }, D = () => {
    }, M = () => {
    }, w = 0;
    W.appendChild(this.#n($.legend, () => D()));
    const C = (L, K) => {
      q = { kind: L, index: K }, ae.show(L === "node" ? o[K] : a[K], L), R();
    };
    k = (L) => C("node", L);
    const z = () => {
      const L = ++w, K = J.clientWidth || 800, ee = J.clientHeight || 600;
      Xf(o, K, ee);
      const X = () => {
        if (!Z || L !== w) return;
        M(), J.querySelectorAll("svg").forEach((N) => N.remove());
        const E = this.#t(J, o, a, K, ee, $.colorOf, C);
        M = E.cleanup, D = E.reset, m = (N) => E.focusOn(N), R = () => E.setSelected(q), R(), d = () => {
          const N = v.text.trim().toLowerCase();
          if (!(_.size > 0 || N.length > 0 || h.composition !== "" || T !== null)) {
            E.setEmphasis(null, null);
            return;
          }
          const H = N.length > 0 || h.composition !== "" || T !== null, U = /* @__PURE__ */ new Set();
          o.forEach((ne, ue) => {
            const ce = H && (!N || c[ue].includes(N)) && (!h.composition || $.signatures[ue] === h.composition) && (!T || T.has(ue));
            (_.has(ne["gufe-key"]) || ce) && U.add(ne["gufe-key"]);
          });
          const Q = /* @__PURE__ */ new Set();
          a.forEach((ne, ue) => {
            U.has(ne.from["gufe-key"]) && U.has(ne.to["gufe-key"]) && Q.add(ue);
          }), E.setEmphasis(U, Q);
        }, d();
      };
      if (G) {
        X();
        return;
      }
      Zf(o, a, K, ee).then((E) => {
        !Z || L !== w || (E || (G = !0, st(J, "d3 could not be loaded - showing the circular layout instead")), X());
      }, X);
    };
    return S = z, z(), C("node", 0), {
      onResize: () => z(),
      cleanup: () => {
        Z = !1, M(), ae.cleanup();
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
    const r = j("div", Rr.bottom);
    if (r.appendChild(Hr(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(j("span", `font-size:${Y.small};color:${O.textMuted};`, "systems made of"));
    for (const [o, s] of t) {
      const i = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      i.appendChild(
        j(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), i.appendChild(
        j("span", `font-size:${Y.small};color:${O.textPrimary};overflow-wrap:anywhere;`, o)
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
    t.appendChild(j("div", ri, "Selected"));
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const s = (a) => r.replaceChildren(fe(a));
    return { show: (a, l) => {
      let f;
      if (l === "node")
        f = Nf(Vi(a), n);
      else {
        const { index: p, from: g, to: $, ...y } = a;
        f = jf(y, n);
      }
      if (!f) {
        s("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      o.payload = f, o.parentNode !== r && r.replaceChildren(o);
    }, message: s, cleanup: () => o.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #t(t, n, r, o, s, i, a) {
    const l = le("svg", { class: "gufe-graph", width: o, height: s, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const f = le("g");
    l.appendChild(f);
    const p = le("g"), g = le("g");
    f.append(p, g);
    const $ = Li(l, f, {
      bounds: () => qi(n, Qs.x, Qs.y),
      margin: Bf,
      hint: "Click the graph or hold Ctrl to zoom"
    }), y = (d, m) => {
      $.wasPan() || a(d, m);
    }, S = [];
    r.forEach((d, m) => {
      const k = le("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: O.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Vs(k, d.name || "transformation"), k.addEventListener("click", () => y("edge", m)), p.appendChild(k), S.push(k);
      const c = le("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      c.addEventListener("click", () => y("edge", m)), p.appendChild(c);
    });
    const _ = [], h = [], v = [];
    return n.forEach((d, m) => {
      const k = i(m), c = le("g", { style: "cursor:pointer;" });
      v.push(c);
      const u = le("rect", {
        x: d.x - ot.width / 2,
        y: d.y - ot.height / 2,
        width: ot.width,
        height: ot.height,
        rx: ot.radius,
        fill: k.fill,
        stroke: k.stroke,
        "stroke-width": 2
      });
      c.appendChild(u), _.push(u), h.push(k.stroke);
      const b = le("text", {
        x: d.x,
        y: d.y - 2,
        "text-anchor": "middle",
        fill: O.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      b.textContent = Kf(In(d), 20), c.appendChild(b);
      const x = Object.keys(d.components ?? {}).length, P = le("text", {
        x: d.x,
        y: d.y + 14,
        "text-anchor": "middle",
        fill: O.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      P.textContent = `${x} component${x === 1 ? "" : "s"}`, c.appendChild(P), Vs(c, In(d)), c.addEventListener("click", () => y("node", m)), g.appendChild(c);
    }), $.fit(), {
      setSelected(d) {
        _.forEach((m, k) => {
          const c = d?.kind === "node" && d.index === k;
          m.setAttribute("stroke", c ? O.cardBorderActive : h[k]), m.setAttribute("stroke-width", c ? "3" : "2");
        }), S.forEach((m, k) => {
          const c = d?.kind === "edge" && d.index === k;
          m.setAttribute("stroke", c ? O.netHaloColor : O.netEdgeLine), m.setAttribute("stroke-width", c ? "4" : "2");
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
      setEmphasis(d, m) {
        v.forEach((k, c) => {
          const u = !d || d.has(n[c]["gufe-key"]);
          k.setAttribute("opacity", u ? "1" : String(ei.node));
        }), S.forEach((k, c) => {
          const u = !m || m.has(c);
          k.setAttribute("opacity", u ? "1" : String(ei.edge));
        });
      },
      focusOn(d) {
        const m = n[d];
        m && $.centreOn(m.x, m.y, Uf);
      },
      reset: $.reset,
      cleanup: $.cleanup
    };
  }
}
Ne("gufe-alchemical-network", Qf);
class ep extends Re {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = _t(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Bn(n.gufe_type)), t.appendChild(r);
    const o = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const s = Mr();
    return s.style.maxWidth = "460px", s.appendChild(Se("gufe class", n.gufe_type, !0)), n.name && s.appendChild(Se("Name", n.name)), s.appendChild(Se("gufe key", n["gufe-key"], !0)), s.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${Y.small};line-height:1.6;color:${O.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(s), {};
  }
}
Ne("gufe-protocol", ep);
class tp extends Re {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Mr();
    return o.style.maxWidth = "560px", o.style.width = "100%", o.appendChild(Se("Name", n.name || "(unnamed)")), o.appendChild(Se("SMILES", n.smiles, !0)), o.appendChild(Se("Positive ion", n.positive_ion)), o.appendChild(Se("Negative ion", n.negative_ion)), o.appendChild(Se("Ion concentration", n.ion_concentration)), o.appendChild(Se("Neutralize", n.neutralize ? "yes" : "no")), o.appendChild(Se("gufe key", n["gufe-key"], !0)), r.appendChild(o), {};
  }
}
Ne("gufe-solvent", tp);
class np extends Re {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = _t(n.name || "Unnamed component");
    r.statsEl.appendChild(Bn(n.gufe_type)), t.appendChild(r);
    const o = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const s = Mr();
    return s.style.maxWidth = "460px", s.appendChild(
      j(
        "div",
        `font-size:${Y.heading};font-weight:600;padding-bottom:6px;color:${O.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), s.appendChild(
      j(
        "div",
        `font-size:${Y.body};line-height:1.6;padding-bottom:10px;color:${O.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), s.appendChild(Se("Name", n.name || "(unnamed)")), s.appendChild(Se("gufe class", n.gufe_type, !0)), o.appendChild(s), {};
  }
}
Ne("gufe-unknown-component", np);
function cp(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: ai, reset: fa });
export {
  xa as CHROME_OPEN_BY_DEFAULT,
  ea as DEBUG_ATTRIBUTE,
  ta as DEBUG_GLOBAL,
  Gd as DEFAULT_DEPICT_STYLE,
  gd as DEFAULT_ZOOM_BOUNDS,
  Te as DEPICT_STYLE,
  Qd as DEPICT_STYLE_RANGES,
  Qf as GufeAlchemicalNetwork,
  ef as GufeAtomMapping,
  Tf as GufeChemicalSystem,
  Re as GufeElement,
  Pf as GufeLigandNetwork,
  Su as GufeProtein,
  ep as GufeProtocol,
  yu as GufeSmallMolecule,
  tp as GufeSolvent,
  Vf as GufeTransformation,
  np as GufeUnknownComponent,
  ud as GufeView,
  fi as HIDE_NAME_ATTRIBUTE,
  ur as MAPPING_COLORS,
  bd as MAPPING_RAMP_3D,
  ap as MAPPING_RAMP_NAME,
  Jr as MULTI_SELECT_HINT,
  rp as PAYLOAD_TYPES,
  op as SCHEMA_TYPES,
  Lr as VIEW_TAGS,
  Iu as align2D,
  Lu as alignedToPartner,
  zu as applyRT,
  Du as applyTurn,
  $d as boundedZoom,
  Tt as buildRegistry,
  bt as choice,
  gi as chromeMenu,
  si as debugEnabled,
  Ne as defineElement,
  xi as describeProblem,
  zf as diffStatus,
  ip as dispatchProblem,
  Wr as entriesFor,
  Xe as entryLabel,
  Ii as exportBlock,
  qi as extentOf,
  $t as flag,
  ld as formatIssues,
  Ri as guardWheel,
  ju as kabsch,
  Hs as laidOut,
  Vu as layoutPair,
  Xu as liftFor,
  sa as logPayload,
  Ye as lookup,
  we as lookupOfType,
  Ki as mappingPayloadFor,
  Os as markGroups,
  fr as markedBonds,
  cp as mount,
  pi as nameWanted,
  tu as normaliseDepictStyle,
  Nr as num,
  Ca as onWidth,
  Zu as openfeShift,
  Qu as pairColour,
  Ns as parseAtomSpec,
  oa as payloadJson,
  Hr as resetControl,
  fa as resetSettings,
  Li as sceneCamera,
  ku as selectionText,
  Dn as setting,
  ai as settings,
  hi as splitter,
  Nf as systemPayloadFor,
  Nt as textSetting,
  jf as transformationPayloadFor,
  Ws as uniqueAtoms,
  ru as uniqueBonds,
  sp as validateAs,
  cd as validatePayload,
  Kr as viewerInteraction,
  Ni as wheelFactor,
  qu as withCoords
};
