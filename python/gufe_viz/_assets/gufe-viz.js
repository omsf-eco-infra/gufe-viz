const Jr = {
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
    netGroupStroke: ["#4182e4", "#00bdaa", "#c060b8", "#e69f00", "#8f93a6"],
    boxFill: "#1f3a63",
    boxStroke: "#45455e"
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
    netGroupStroke: ["#4182e4", "#009e8f", "#8a2283", "#c07d00", "#666666"],
    boxFill: "#e6effc",
    boxStroke: "#cccccc"
  }
};
function Ds() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const T = Ds() ? Jr.dark : Jr.light, X = {
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
}, se = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, ot = {
  sm: "3px",
  md: "6px",
  xl: "10px"
}, Te = {
  title: T.titleColor,
  primary: T.textPrimary,
  muted: T.textMuted,
  faint: T.textMuted2,
  error: T.errorFg
}, Rt = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: T.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: T.canvas2DBg
}, ve = {
  base: `background:${T.btnBg};color:${T.btnFg};border:1px solid ${T.btnBorder};padding:${se.sm} 9px;font-size:${X.small};font-weight:${Be.bold};border-radius:${ot.sm};cursor:pointer;font-family:inherit;`,
  bg: T.btnBg,
  bgHover: T.btnBgHover,
  bgActive: T.btnBgActive
}, qs = `background:${T.selectBg};color:${T.textPrimary};border:1px solid ${T.selectBorder};border-radius:${ot.md};padding:${se.sm} ${se.lg};font-size:${X.body};cursor:pointer;font-family:inherit;`, Vs = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${se.xxl};flex-shrink:0;background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};`, xr = {
  top: `display:flex;align-items:center;gap:${se.xl};flex-wrap:wrap;padding:${se.lg} ${se.xxl};flex-shrink:0;font-size:${X.body};background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${se.xl};flex-wrap:wrap;padding:${se.lg} ${se.xxl};flex-shrink:0;background:${T.toolbarBg};border-top:1px solid ${T.toolbarBorder};`
}, Qi = `flex-shrink:0;padding:${se.sm} ${se.xl};font-size:${X.heading};font-weight:${Be.bold};color:${T.labelFg};background:${T.labelBg};`, gr = `position:absolute;top:${se.md};left:${se.md};z-index:10;pointer-events:none;max-width:calc(100% - ${se.xxl} - ${se.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${se.xs} ${se.lg};border-radius:${ot.md};font-size:${X.heading};font-weight:${Be.bold};color:${T.labelFg};background:${T.labelBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Ls = `display:flex;flex-direction:column;gap:${se.xs};padding:${se.xxl} 18px;border-radius:${ot.xl};background:${T.cardBg};border:1px solid ${T.cardBorder};`, es = `position:absolute;bottom:${se.xl};right:${se.xl};display:flex;gap:${se.sm};padding:${se.sm};border-radius:${ot.md};z-index:10;background:${T.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Yr = `font-family:${X.mono};font-size:${X.small};line-height:1.7;color:${T.textMuted};`, Xr = `font-size:${X.small};font-weight:${Be.bold};letter-spacing:.08em;text-transform:uppercase;color:${T.textMuted2};`, Bs = `font-size:${X.small};line-height:1.6;color:${T.textMuted2};`, Us = ["debug", "gufe-debug"], Ks = "debug", Hs = "GUFE_VIZ_DEBUG";
function Gs() {
  return !!globalThis[Hs];
}
function Ws() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Us.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function ts(e) {
  return e?.hasAttribute?.(Ks) ? !0 : Gs() || Ws();
}
function Js(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ge(t)}>`;
  }
}
function Ys(e, t, n) {
  if (!ts(n)) return;
  const r = Js(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const ns = "GUFE_VIZ_VIEW_STATE";
function Xs(e) {
  const t = globalThis[ns];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Zs = 150;
class Ae extends HTMLElement {
  #t = null;
  #e = null;
  #n = null;
  #r = null;
  #o = null;
  /**
   * Bumped by every teardown. A render captures it and refuses to adopt its
   * handle if it has moved on - which is what stops a slow view (3Dmol behind a
   * CDN fetch) from installing itself into an element that has since been given
   * a different payload, or removed from the document entirely.
   */
  #i = 0;
  /** The message shown before any payload arrives. */
  placeholder() {
    return "Waiting for data...";
  }
  set payload(t) {
    this.#t = t, this.isConnected && this.#a();
  }
  get payload() {
    return this.#t;
  }
  connectedCallback() {
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = T.appBg, this.style.color = T.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Zs);
    }), this.#r.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#s(), this.#r?.disconnect(), this.#r = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #s() {
    if (this.#i++, this.#o && (clearTimeout(this.#o), this.#o = null), this.#e?.cleanup)
      try {
        this.#e.cleanup();
      } catch (t) {
        console.warn("[gufe-viz] cleanup failed:", t);
      }
    this.#e = null, this.replaceChildren(), this.#n = null;
  }
  /** Tear the mounted view down and hand back a fresh, empty shell. */
  #d() {
    return this.#s(), this.#n = I(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${T.appBg};`
    ), this.appendChild(this.#n), this.#n;
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
    const t = this.#d(), n = this.#i;
    if (this.#t == null) {
      t.appendChild(de(this.placeholder()));
      return;
    }
    let r;
    try {
      r = this.renderView(t, this.#t);
    } catch (i) {
      this.#l(t, n, i);
      return;
    }
    r instanceof Promise ? r.then(
      (i) => this.#c(i, n),
      (i) => this.#l(t, n, i)
    ) : this.#c(r, n);
  }
  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #c(t, n) {
    if (n !== this.#i || !this.isConnected) {
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(de(`Failed to render: ${ge(r)}`, !0)));
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
function Re(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
const Se = "gufe-viz:", We = /* @__PURE__ */ new Map();
let Ot = null;
function Qs() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Mt() {
  if (Ot === !1) return null;
  const e = Qs();
  if (!e)
    return Ot = !1, null;
  try {
    const t = `${Se}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Ot = !0, e;
  } catch {
    return Ot = !1, null;
  }
}
function ea(e) {
  const t = Mt();
  if (!t) return We.get(Se + e) ?? null;
  try {
    return t.getItem(Se + e);
  } catch {
    return null;
  }
}
function ta(e, t) {
  const n = Mt();
  if (!n) {
    We.set(Se + e, t);
    return;
  }
  try {
    n.setItem(Se + e, t);
  } catch {
    We.set(Se + e, t);
  }
}
function Dn(e, t, n) {
  return {
    key: e,
    get() {
      const r = ea(e);
      if (r === null) return t;
      try {
        const i = JSON.parse(r);
        return n(i) ? i : t;
      } catch {
        return t;
      }
    },
    set(r) {
      try {
        ta(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function vt(e, t, n) {
  return Dn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function Pt(e, t) {
  return Dn(e, t, (n) => typeof n == "boolean");
}
function Pr(e, t, n = -1 / 0, r = 1 / 0) {
  return Dn(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function Zr(e, t = "") {
  return Dn(e, t, (n) => typeof n == "string");
}
function rs() {
  const e = {}, t = Mt(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(We.keys());
  for (const r of n) {
    if (!r.startsWith(Se)) continue;
    const i = t ? t.getItem(r) : We.get(r) ?? null;
    if (i !== null)
      try {
        e[r.slice(Se.length)] = JSON.parse(i);
      } catch {
        e[r.slice(Se.length)] = i;
      }
  }
  return e;
}
function na() {
  const e = {}, t = Mt(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(We.keys());
  for (const r of n) {
    if (!r.startsWith(Se)) continue;
    const i = t ? t.getItem(r) : We.get(r) ?? null;
    i !== null && (e[r] = i);
  }
  return e;
}
function ra() {
  const e = Mt();
  if (e)
    for (const t of Object.keys(rs()))
      try {
        e.removeItem(Se + t);
      } catch {
      }
  We.clear();
}
const os = "https://framejs.app", is = 1e4;
function oa(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const ia = "/gufe-dev-bundle.js";
function sa() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= is ? e : null;
}
async function aa() {
  const e = sa();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(ia);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < is ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function ca() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function la(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Se)};`,
    `  const menuOpen = ${JSON.stringify(ds)};`,
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
    `globalThis[${JSON.stringify(ns)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function da(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...la(n),
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
function ua(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [i, o] of Object.entries(na()))
    i.endsWith(ds) || (r[i] = o);
  return { settings: r, views: t };
}
const fa = (e) => `${os}/j/${e}`, pa = (e) => `${os}/j/${e}.json`;
async function ha(e, t, n) {
  await fetch(pa(e), {
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
function ma(e) {
  if (!ts()) return;
  const t = I(
    "div",
    `display:flex;flex-direction:column;gap:${se.md};padding-top:${se.lg};border-top:1px dashed ${T.splitBorder};`
  );
  t.appendChild(
    I(
      "div",
      `font-size:${X.tiny};font-weight:${Be.bold};letter-spacing:.08em;text-transform:uppercase;color:${T.textMuted2};`,
      "debug"
    )
  );
  const n = I("button", `${ve.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = I("div", `font-size:${X.tiny};line-height:1.5;color:${T.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const i = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? T.errorFg : T.textMuted2;
  }, o = (s, a) => {
    const c = I("a", `color:${T.textPrimary};`, s);
    c.href = s, c.target = "_blank", c.rel = "noreferrer", r.replaceChildren(c), a && r.appendChild(I("div", `padding-top:${se.sm};`, a)), r.style.color = T.textMuted2;
  };
  n.onclick = () => {
    const s = oa(e);
    if (!s || s.payload == null) {
      i("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, c = ua(s), f = window.open("", "_blank"), h = ca(), y = a, $ = String(y.name || y.type || "gufe-viz"), b = () => {
      n.disabled = !1;
    };
    n.disabled = !0, i("Uploading..."), aa().then((S) => {
      if (!S) {
        f?.close(), b(), i(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return ha(h, da(S.js, a, c), $).then(() => {
        b();
        const _ = fa(h);
        f && (f.location.href = _), o(_, S.note);
      });
    }).catch((S) => {
      b(), f?.close(), i(`Upload failed: ${S instanceof Error ? S.message : String(S)}`, !0);
    });
  }, t.appendChild(
    I(
      "div",
      `font-size:${X.tiny};line-height:1.5;color:${T.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function I(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function Le(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ge(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const bt = (e) => e.toLocaleString("en-US"), gt = "-", Nt = ve.base, yr = qs;
function qn(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const i = I("div", "display:flex;gap:4px;"), o = e.map((s) => {
    const a = I("button", Nt, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = ve.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? ve.bgActive : ve.bg;
    }, a.onclick = () => {
      i.setActive(s.id), r?.set(s.id), n(s.id);
    }, i.appendChild(a), { id: s.id, btn: a };
  });
  return i.setActive = (s) => {
    t = s, o.forEach((a) => {
      a.btn.style.background = a.id === t ? ve.bgActive : ve.bg;
    });
  }, i.setActive(t), i;
}
function Ar(e, t, n, r) {
  const i = I("select", yr);
  for (const s of e) {
    const a = I("option", "", s.label);
    a.value = s.id, i.appendChild(a);
  }
  let o = t;
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (o = s);
  }
  return i.value = o, i.onchange = () => {
    r?.set(i.value), n(i.value);
  }, i;
}
function ss(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = I("button", Nt, e);
  o.title = r.title || e, o.setAttribute("aria-pressed", String(i));
  const s = () => {
    o.style.background = i ? ve.bgActive : ve.bg, o.setAttribute("aria-pressed", String(i));
  };
  return o.onclick = () => {
    i = !i, s(), r.remember?.set(i), n(i);
  }, s(), o;
}
function pe(e, t, n) {
  const r = I("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    I("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = I("span");
  return i.innerHTML = `${Le(e)} <b style="color:${Te.primary};">${Le(t)}</b>`, r.appendChild(i), r;
}
function tt(e, t) {
  const n = I("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${se.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${se.md} ${se.xxl};border-radius:${ot.md};font-size:${X.body};background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`, e.appendChild(n), n;
}
function de(e, t = !1) {
  return I(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${X.heading};color:${t ? Te.error : Te.faint};`,
    e
  );
}
function it(e) {
  const t = I("div", Vs);
  return t.className = "gufe-header", t.titleEl = I(
    "span",
    `font-weight:${Be.bold};font-size:${X.title};color:${Te.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = I(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${X.small};color:${Te.muted};`
  ), t.toggleEl = I("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Oe(e, t, n = !1) {
  const r = I("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    I(
      "span",
      `flex:0 0 128px;font-size:${X.tiny};font-weight:${Be.bold};letter-spacing:.08em;text-transform:uppercase;color:${Te.faint};`,
      e
    )
  );
  const i = I(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Te.primary};` + (n ? `font-family:${X.mono};font-size:${X.small};` : `font-size:${X.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function Vn(e) {
  return I(
    "span",
    `padding:1px 7px;border-radius:${ot.xl};font-size:${X.tiny};font-weight:${Be.bold};letter-spacing:.04em;white-space:nowrap;background:${T.badgeBg};color:${T.badgeFg};`,
    e
  );
}
function Tn() {
  return I("div", Ls);
}
function as() {
  const e = I("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = I("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
function cs(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const Qr = { min: 0.2, max: 0.8 }, ga = 5;
function ls(e, t, n, r = {}) {
  const i = r.min ?? Qr.min, o = r.max ?? Qr.max, s = I(
    "div",
    `flex:0 0 ${ga}px;align-self:stretch;cursor:col-resize;touch-action:none;background:${T.splitBorder};`
  );
  s.setAttribute("role", "separator"), s.setAttribute("aria-orientation", "vertical"), s.setAttribute("aria-label", "Resize the panes");
  let a = Math.min(o, Math.max(i, r.remember?.get() ?? 0.5));
  const c = () => {
    t.style.flex = `1 1 ${(a * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - a) * 100).toFixed(2)}%`;
  };
  c();
  let f = !1;
  s.addEventListener("pointerdown", (y) => {
    f = !0, s.setPointerCapture(y.pointerId), y.preventDefault();
  }), s.addEventListener("pointermove", (y) => {
    if (!f) return;
    const $ = e.getBoundingClientRect();
    $.width <= 0 || (a = Math.min(o, Math.max(i, (y.clientX - $.left) / $.width)), c());
  });
  const h = (y) => {
    f && (f = !1, s.releasePointerCapture(y.pointerId), r.remember?.set(a), r.onResize?.(a));
  };
  return s.addEventListener("pointerup", h), s.addEventListener("pointercancel", h), s;
}
const ya = !1, ds = ".menuOpen";
function va() {
  const e = I("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const $a = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: va
}, ba = $a.openFreeEnergy;
function wa(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? ya, i = !1;
  const o = I("div", "flex-shrink:0;"), s = I("button", `${ve.base}display:inline-flex;align-items:center;gap:${se.md};padding:${se.sm} ${se.lg};`);
  s.appendChild(ba()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t()), ma(o)), o.style.display = r ? "" : "none", s.style.background = r ? ve.bgActive : ve.bg, s.setAttribute("aria-expanded", String(r));
  }, c = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return s.onclick = () => c(!r), s.onmouseover = () => {
    s.style.background = r ? ve.bgActive : ve.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ve.bgActive : ve.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: c
  };
}
function _a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tt = { exports: {} }, Jn = {}, Ie = {}, Ye = {}, Yn = {}, Xn = {}, Zn = {}, eo;
function jn() {
  return eo || (eo = 1, (function(e) {
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
    function i(p, ...d) {
      const m = [p[0]];
      let k = 0;
      for (; k < d.length; )
        a(m, d[k]), m.push(p[++k]);
      return new r(m);
    }
    e._ = i;
    const o = new r("+");
    function s(p, ...d) {
      const m = [b(p[0])];
      let k = 0;
      for (; k < d.length; )
        m.push(o), a(m, d[k]), m.push(o, b(p[++k]));
      return c(m), new r(m);
    }
    e.str = s;
    function a(p, d) {
      d instanceof r ? p.push(...d._items) : d instanceof n ? p.push(d) : p.push(y(d));
    }
    e.addCodeArg = a;
    function c(p) {
      let d = 1;
      for (; d < p.length - 1; ) {
        if (p[d] === o) {
          const m = f(p[d - 1], p[d + 1]);
          if (m !== void 0) {
            p.splice(d - 1, 3, m);
            continue;
          }
          p[d++] = "+";
        }
        d++;
      }
    }
    function f(p, d) {
      if (d === '""')
        return p;
      if (p === '""')
        return d;
      if (typeof p == "string")
        return d instanceof n || p[p.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${p.slice(0, -1)}${d}"` : d[0] === '"' ? p.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !(p instanceof n))
        return `"${p}${d.slice(1)}`;
    }
    function h(p, d) {
      return d.emptyStr() ? p : p.emptyStr() ? d : s`${p}${d}`;
    }
    e.strConcat = h;
    function y(p) {
      return typeof p == "number" || typeof p == "boolean" || p === null ? p : b(Array.isArray(p) ? p.join(",") : p);
    }
    function $(p) {
      return new r(b(p));
    }
    e.stringify = $;
    function b(p) {
      return JSON.stringify(p).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = b;
    function S(p) {
      return typeof p == "string" && e.IDENTIFIER.test(p) ? new r(`.${p}`) : i`[${p}]`;
    }
    e.getProperty = S;
    function _(p) {
      if (typeof p == "string" && e.IDENTIFIER.test(p))
        return new r(`${p}`);
      throw new Error(`CodeGen: invalid export name: ${p}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function g(p) {
      return new r(p.toString());
    }
    e.regexpCode = g;
  })(Zn)), Zn;
}
var Qn = {}, to;
function no() {
  return to || (to = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ jn();
    class n extends Error {
      constructor(f) {
        super(`CodeGen: "code" for ${f} not defined`), this.value = f.value;
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
    class i {
      constructor({ prefixes: f, parent: h } = {}) {
        this._names = {}, this._prefixes = f, this._parent = h;
      }
      toName(f) {
        return f instanceof t.Name ? f : this.name(f);
      }
      name(f) {
        return new t.Name(this._newName(f));
      }
      _newName(f) {
        const h = this._names[f] || this._nameGroup(f);
        return `${f}${h.index++}`;
      }
      _nameGroup(f) {
        var h, y;
        if (!((y = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || y === void 0) && y.has(f) || this._prefixes && !this._prefixes.has(f))
          throw new Error(`CodeGen: prefix "${f}" is not allowed in this scope`);
        return this._names[f] = { prefix: f, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(f, h) {
        super(h), this.prefix = f;
      }
      setValue(f, { property: h, itemIndex: y }) {
        this.value = f, this.scopePath = (0, t._)`.${new t.Name(h)}[${y}]`;
      }
    }
    e.ValueScopeName = o;
    const s = (0, t._)`\n`;
    class a extends i {
      constructor(f) {
        super(f), this._values = {}, this._scope = f.scope, this.opts = { ...f, _n: f.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(f) {
        return new o(f, this._newName(f));
      }
      value(f, h) {
        var y;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(f), { prefix: b } = $, S = (y = h.key) !== null && y !== void 0 ? y : h.ref;
        let _ = this._values[b];
        if (_) {
          const d = _.get(S);
          if (d)
            return d;
        } else
          _ = this._values[b] = /* @__PURE__ */ new Map();
        _.set(S, $);
        const g = this._scope[b] || (this._scope[b] = []), p = g.length;
        return g[p] = h.ref, $.setValue(h, { property: b, itemIndex: p }), $;
      }
      getValue(f, h) {
        const y = this._values[f];
        if (y)
          return y.get(h);
      }
      scopeRefs(f, h = this._values) {
        return this._reduceValues(h, (y) => {
          if (y.scopePath === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return (0, t._)`${f}${y.scopePath}`;
        });
      }
      scopeCode(f = this._values, h, y) {
        return this._reduceValues(f, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, h, y);
      }
      _reduceValues(f, h, y = {}, $) {
        let b = t.nil;
        for (const S in f) {
          const _ = f[S];
          if (!_)
            continue;
          const g = y[S] = y[S] || /* @__PURE__ */ new Map();
          _.forEach((p) => {
            if (g.has(p))
              return;
            g.set(p, r.Started);
            let d = h(p);
            if (d) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              b = (0, t._)`${b}${m} ${p} = ${d};${this.opts._n}`;
            } else if (d = $?.(p))
              b = (0, t._)`${b}${d}${this.opts._n}`;
            else
              throw new n(p);
            g.set(p, r.Completed);
          });
        }
        return b;
      }
    }
    e.ValueScope = a;
  })(Qn)), Qn;
}
var ro;
function ne() {
  return ro || (ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ jn(), n = /* @__PURE__ */ no();
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
    var i = /* @__PURE__ */ no();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return i.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return i.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return i.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return i.varKinds;
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
    class o {
      optimizeNodes() {
        return this;
      }
      optimizeNames(w, x) {
        return this;
      }
    }
    class s extends o {
      constructor(w, x, z) {
        super(), this.varKind = w, this.name = x, this.rhs = z;
      }
      render({ es5: w, _n: x }) {
        const z = w ? n.varKinds.var : this.varKind, W = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${z} ${this.name}${W};` + x;
      }
      optimizeNames(w, x) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = U(this.rhs, w, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(w, x, z) {
        super(), this.lhs = w, this.rhs = x, this.sideEffects = z;
      }
      render({ _n: w }) {
        return `${this.lhs} = ${this.rhs};` + w;
      }
      optimizeNames(w, x) {
        if (!(this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects))
          return this.rhs = U(this.rhs, w, x), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return j(w, this.rhs);
      }
    }
    class c extends a {
      constructor(w, x, z, W) {
        super(w, z, W), this.op = x;
      }
      render({ _n: w }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + w;
      }
    }
    class f extends o {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `${this.label}:` + w;
      }
    }
    class h extends o {
      constructor(w) {
        super(), this.label = w, this.names = {};
      }
      render({ _n: w }) {
        return `break${this.label ? ` ${this.label}` : ""};` + w;
      }
    }
    class y extends o {
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
    class $ extends o {
      constructor(w) {
        super(), this.code = w;
      }
      render({ _n: w }) {
        return `${this.code};` + w;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(w, x) {
        return this.code = U(this.code, w, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class b extends o {
      constructor(w = []) {
        super(), this.nodes = w;
      }
      render(w) {
        return this.nodes.reduce((x, z) => x + z.render(w), "");
      }
      optimizeNodes() {
        const { nodes: w } = this;
        let x = w.length;
        for (; x--; ) {
          const z = w[x].optimizeNodes();
          Array.isArray(z) ? w.splice(x, 1, ...z) : z ? w[x] = z : w.splice(x, 1);
        }
        return w.length > 0 ? this : void 0;
      }
      optimizeNames(w, x) {
        const { nodes: z } = this;
        let W = z.length;
        for (; W--; ) {
          const G = z[W];
          G.optimizeNames(w, x) || (Y(w, G.names), z.splice(W, 1));
        }
        return z.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((w, x) => C(w, x.names), {});
      }
    }
    class S extends b {
      render(w) {
        return "{" + w._n + super.render(w) + "}" + w._n;
      }
    }
    class _ extends b {
    }
    class g extends S {
    }
    g.kind = "else";
    class p extends S {
      constructor(w, x) {
        super(x), this.condition = w;
      }
      render(w) {
        let x = `if(${this.condition})` + super.render(w);
        return this.else && (x += "else " + this.else.render(w)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const w = this.condition;
        if (w === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const z = x.optimizeNodes();
          x = this.else = Array.isArray(z) ? new g(z) : z;
        }
        if (x)
          return w === !1 ? x instanceof p ? x : x.nodes : this.nodes.length ? this : new p(H(w), x instanceof p ? [x] : x.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, x) {
        var z;
        if (this.else = (z = this.else) === null || z === void 0 ? void 0 : z.optimizeNames(w, x), !!(super.optimizeNames(w, x) || this.else))
          return this.condition = U(this.condition, w, x), this;
      }
      get names() {
        const w = super.names;
        return j(w, this.condition), this.else && C(w, this.else.names), w;
      }
    }
    p.kind = "if";
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
      optimizeNames(w, x) {
        if (super.optimizeNames(w, x))
          return this.iteration = U(this.iteration, w, x), this;
      }
      get names() {
        return C(super.names, this.iteration.names);
      }
    }
    class k extends d {
      constructor(w, x, z, W) {
        super(), this.varKind = w, this.name = x, this.from = z, this.to = W;
      }
      render(w) {
        const x = w.es5 ? n.varKinds.var : this.varKind, { name: z, from: W, to: G } = this;
        return `for(${x} ${z}=${W}; ${z}<${G}; ${z}++)` + super.render(w);
      }
      get names() {
        const w = j(super.names, this.from);
        return j(w, this.to);
      }
    }
    class l extends d {
      constructor(w, x, z, W) {
        super(), this.loop = w, this.varKind = x, this.name = z, this.iterable = W;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, x) {
        if (super.optimizeNames(w, x))
          return this.iterable = U(this.iterable, w, x), this;
      }
      get names() {
        return C(super.names, this.iterable.names);
      }
    }
    class u extends S {
      constructor(w, x, z) {
        super(), this.name = w, this.args = x, this.async = z;
      }
      render(w) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
      }
    }
    u.kind = "func";
    class v extends b {
      render(w) {
        return "return " + super.render(w);
      }
    }
    v.kind = "return";
    class E extends S {
      render(w) {
        let x = "try" + super.render(w);
        return this.catch && (x += this.catch.render(w)), this.finally && (x += this.finally.render(w)), x;
      }
      optimizeNodes() {
        var w, x;
        return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(w, x) {
        var z, W;
        return super.optimizeNames(w, x), (z = this.catch) === null || z === void 0 || z.optimizeNames(w, x), (W = this.finally) === null || W === void 0 || W.optimizeNames(w, x), this;
      }
      get names() {
        const w = super.names;
        return this.catch && C(w, this.catch.names), this.finally && C(w, this.finally.names), w;
      }
    }
    class A extends S {
      constructor(w) {
        super(), this.error = w;
      }
      render(w) {
        return `catch(${this.error})` + super.render(w);
      }
    }
    A.kind = "catch";
    class N extends S {
      render(w) {
        return "finally" + super.render(w);
      }
    }
    N.kind = "finally";
    class F {
      constructor(w, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
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
      scopeValue(w, x) {
        const z = this._extScope.value(w, x);
        return (this._values[z.prefix] || (this._values[z.prefix] = /* @__PURE__ */ new Set())).add(z), z;
      }
      getScopeValue(w, x) {
        return this._extScope.getValue(w, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(w) {
        return this._extScope.scopeRefs(w, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(w, x, z, W) {
        const G = this._scope.toName(x);
        return z !== void 0 && W && (this._constants[G.str] = z), this._leafNode(new s(w, G, z)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const(w, x, z) {
        return this._def(n.varKinds.const, w, x, z);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(w, x, z) {
        return this._def(n.varKinds.let, w, x, z);
      }
      // `var` declaration with optional assignment
      var(w, x, z) {
        return this._def(n.varKinds.var, w, x, z);
      }
      // assignment code
      assign(w, x, z) {
        return this._leafNode(new a(w, x, z));
      }
      // `+=` code
      add(w, x) {
        return this._leafNode(new c(w, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(w) {
        return typeof w == "function" ? w() : w !== t.nil && this._leafNode(new $(w)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...w) {
        const x = ["{"];
        for (const [z, W] of w)
          x.length > 1 && x.push(","), x.push(z), (z !== W || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, W));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(w, x, z) {
        if (this._blockNode(new p(w)), x && z)
          this.code(x).else().code(z).endIf();
        else if (x)
          this.code(x).endIf();
        else if (z)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(w) {
        return this._elseNode(new p(w));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new g());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(p, g);
      }
      _for(w, x) {
        return this._blockNode(w), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, x) {
        return this._for(new m(w), x);
      }
      // `for` statement for a range of values
      forRange(w, x, z, W, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ee = this._scope.toName(w);
        return this._for(new k(G, ee, x, z), () => W(ee));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, x, z, W = n.varKinds.const) {
        const G = this._scope.toName(w);
        if (this.opts.es5) {
          const ee = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${ee}.length`, (Z) => {
            this.var(G, (0, t._)`${ee}[${Z}]`), z(G);
          });
        }
        return this._for(new l("of", W, G, x), () => z(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, x, z, W = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${x})`, z);
        const G = this._scope.toName(w);
        return this._for(new l("in", W, G, x), () => z(G));
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
        return this._leafNode(new h(w));
      }
      // `return` statement
      return(w) {
        const x = new v();
        if (this._blockNode(x), this.code(w), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(v);
      }
      // `try` statement
      try(w, x, z) {
        if (!x && !z)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const W = new E();
        if (this._blockNode(W), this.code(w), x) {
          const G = this.name("e");
          this._currNode = W.catch = new A(G), x(G);
        }
        return z && (this._currNode = W.finally = new N(), this.code(z)), this._endBlockNode(A, N);
      }
      // `throw` statement
      throw(w) {
        return this._leafNode(new y(w));
      }
      // start self-balancing block
      block(w, x) {
        return this._blockStarts.push(this._nodes.length), w && this.code(w).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock(w) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const z = this._nodes.length - x;
        if (z < 0 || w !== void 0 && z !== w)
          throw new Error(`CodeGen: wrong number of nodes: ${z} vs ${w} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(w, x = t.nil, z, W) {
        return this._blockNode(new u(w, x, z)), W && this.code(W).endFunc(), this;
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
      _endBlockNode(w, x) {
        const z = this._currNode;
        if (z instanceof w || x && z instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${w.kind}/${x.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        const x = this._currNode;
        if (!(x instanceof p))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = w, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const w = this._nodes;
        return w[w.length - 1];
      }
      set _currNode(w) {
        const x = this._nodes;
        x[x.length - 1] = w;
      }
    }
    e.CodeGen = F;
    function C(M, w) {
      for (const x in w)
        M[x] = (M[x] || 0) + (w[x] || 0);
      return M;
    }
    function j(M, w) {
      return w instanceof t._CodeOrName ? C(M, w.names) : M;
    }
    function U(M, w, x) {
      if (M instanceof t.Name)
        return z(M);
      if (!W(M))
        return M;
      return new t._Code(M._items.reduce((G, ee) => (ee instanceof t.Name && (ee = z(ee)), ee instanceof t._Code ? G.push(...ee._items) : G.push(ee), G), []));
      function z(G) {
        const ee = x[G.str];
        return ee === void 0 || w[G.str] !== 1 ? G : (delete w[G.str], ee);
      }
      function W(G) {
        return G instanceof t._Code && G._items.some((ee) => ee instanceof t.Name && w[ee.str] === 1 && x[ee.str] !== void 0);
      }
    }
    function Y(M, w) {
      for (const x in w)
        M[x] = (M[x] || 0) - (w[x] || 0);
    }
    function H(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${D(M)}`;
    }
    e.not = H;
    const re = R(e.operators.AND);
    function V(...M) {
      return M.reduce(re);
    }
    e.and = V;
    const Q = R(e.operators.OR);
    function q(...M) {
      return M.reduce(Q);
    }
    e.or = q;
    function R(M) {
      return (w, x) => w === t.nil ? x : x === t.nil ? w : (0, t._)`${D(w)} ${M} ${D(x)}`;
    }
    function D(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(Xn)), Xn;
}
var oe = {}, oo;
function ie() {
  if (oo) return oe;
  oo = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.checkStrictMode = oe.getErrorPath = oe.Type = oe.useFunc = oe.setEvaluated = oe.evaluatedPropsToName = oe.mergeEvaluated = oe.eachItem = oe.unescapeJsonPointer = oe.escapeJsonPointer = oe.escapeFragment = oe.unescapeFragment = oe.schemaRefOrVal = oe.schemaHasRulesButRef = oe.schemaHasRules = oe.checkUnknownRules = oe.alwaysValidSchema = oe.toHash = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ jn();
  function n(l) {
    const u = {};
    for (const v of l)
      u[v] = !0;
    return u;
  }
  oe.toHash = n;
  function r(l, u) {
    return typeof u == "boolean" ? u : Object.keys(u).length === 0 ? !0 : (i(l, u), !o(u, l.self.RULES.all));
  }
  oe.alwaysValidSchema = r;
  function i(l, u = l.schema) {
    const { opts: v, self: E } = l;
    if (!v.strictSchema || typeof u == "boolean")
      return;
    const A = E.RULES.keywords;
    for (const N in u)
      A[N] || k(l, `unknown keyword: "${N}"`);
  }
  oe.checkUnknownRules = i;
  function o(l, u) {
    if (typeof l == "boolean")
      return !l;
    for (const v in l)
      if (u[v])
        return !0;
    return !1;
  }
  oe.schemaHasRules = o;
  function s(l, u) {
    if (typeof l == "boolean")
      return !l;
    for (const v in l)
      if (v !== "$ref" && u.all[v])
        return !0;
    return !1;
  }
  oe.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: u }, v, E, A) {
    if (!A) {
      if (typeof v == "number" || typeof v == "boolean")
        return v;
      if (typeof v == "string")
        return (0, e._)`${v}`;
    }
    return (0, e._)`${l}${u}${(0, e.getProperty)(E)}`;
  }
  oe.schemaRefOrVal = a;
  function c(l) {
    return y(decodeURIComponent(l));
  }
  oe.unescapeFragment = c;
  function f(l) {
    return encodeURIComponent(h(l));
  }
  oe.escapeFragment = f;
  function h(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  oe.escapeJsonPointer = h;
  function y(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  oe.unescapeJsonPointer = y;
  function $(l, u) {
    if (Array.isArray(l))
      for (const v of l)
        u(v);
    else
      u(l);
  }
  oe.eachItem = $;
  function b({ mergeNames: l, mergeToName: u, mergeValues: v, resultToName: E }) {
    return (A, N, F, C) => {
      const j = F === void 0 ? N : F instanceof e.Name ? (N instanceof e.Name ? l(A, N, F) : u(A, N, F), F) : N instanceof e.Name ? (u(A, F, N), N) : v(N, F);
      return C === e.Name && !(j instanceof e.Name) ? E(A, j) : j;
    };
  }
  oe.mergeEvaluated = {
    props: b({
      mergeNames: (l, u, v) => l.if((0, e._)`${v} !== true && ${u} !== undefined`, () => {
        l.if((0, e._)`${u} === true`, () => l.assign(v, !0), () => l.assign(v, (0, e._)`${v} || {}`).code((0, e._)`Object.assign(${v}, ${u})`));
      }),
      mergeToName: (l, u, v) => l.if((0, e._)`${v} !== true`, () => {
        u === !0 ? l.assign(v, !0) : (l.assign(v, (0, e._)`${v} || {}`), _(l, v, u));
      }),
      mergeValues: (l, u) => l === !0 ? !0 : { ...l, ...u },
      resultToName: S
    }),
    items: b({
      mergeNames: (l, u, v) => l.if((0, e._)`${v} !== true && ${u} !== undefined`, () => l.assign(v, (0, e._)`${u} === true ? true : ${v} > ${u} ? ${v} : ${u}`)),
      mergeToName: (l, u, v) => l.if((0, e._)`${v} !== true`, () => l.assign(v, u === !0 ? !0 : (0, e._)`${v} > ${u} ? ${v} : ${u}`)),
      mergeValues: (l, u) => l === !0 ? !0 : Math.max(l, u),
      resultToName: (l, u) => l.var("items", u)
    })
  };
  function S(l, u) {
    if (u === !0)
      return l.var("props", !0);
    const v = l.var("props", (0, e._)`{}`);
    return u !== void 0 && _(l, v, u), v;
  }
  oe.evaluatedPropsToName = S;
  function _(l, u, v) {
    Object.keys(v).forEach((E) => l.assign((0, e._)`${u}${(0, e.getProperty)(E)}`, !0));
  }
  oe.setEvaluated = _;
  const g = {};
  function p(l, u) {
    return l.scopeValue("func", {
      ref: u,
      code: g[u.code] || (g[u.code] = new t._Code(u.code))
    });
  }
  oe.useFunc = p;
  var d;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(d || (oe.Type = d = {}));
  function m(l, u, v) {
    if (l instanceof e.Name) {
      const E = u === d.Num;
      return v ? E ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : E ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return v ? (0, e.getProperty)(l).toString() : "/" + h(l);
  }
  oe.getErrorPath = m;
  function k(l, u, v = l.opts.strictSchema) {
    if (v) {
      if (u = `strict mode: ${u}`, v === !0)
        throw new Error(u);
      l.self.logger.warn(u);
    }
  }
  return oe.checkStrictMode = k, oe;
}
var jt = {}, io;
function Ne() {
  if (io) return jt;
  io = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
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
  return jt.default = t, jt;
}
var so;
function Ln() {
  return so || (so = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Ne();
    e.keywordError = {
      message: ({ keyword: g }) => (0, t.str)`must pass "${g}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: g, schemaType: p }) => p ? (0, t.str)`"${g}" keyword must be ${p} ($data)` : (0, t.str)`"${g}" keyword is invalid ($data)`
    };
    function i(g, p = e.keywordError, d, m) {
      const { it: k } = g, { gen: l, compositeRule: u, allErrors: v } = k, E = y(g, p, d);
      m ?? (u || v) ? c(l, E) : f(k, (0, t._)`[${E}]`);
    }
    e.reportError = i;
    function o(g, p = e.keywordError, d) {
      const { it: m } = g, { gen: k, compositeRule: l, allErrors: u } = m, v = y(g, p, d);
      c(k, v), l || u || f(m, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(g, p) {
      g.assign(r.default.errors, p), g.if((0, t._)`${r.default.vErrors} !== null`, () => g.if(p, () => g.assign((0, t._)`${r.default.vErrors}.length`, p), () => g.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: g, keyword: p, schemaValue: d, data: m, errsCount: k, it: l }) {
      if (k === void 0)
        throw new Error("ajv implementation error");
      const u = g.name("err");
      g.forRange("i", k, r.default.errors, (v) => {
        g.const(u, (0, t._)`${r.default.vErrors}[${v}]`), g.if((0, t._)`${u}.instancePath === undefined`, () => g.assign((0, t._)`${u}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), g.assign((0, t._)`${u}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${p}`), l.opts.verbose && (g.assign((0, t._)`${u}.schema`, d), g.assign((0, t._)`${u}.data`, m));
      });
    }
    e.extendErrors = a;
    function c(g, p) {
      const d = g.const("err", p);
      g.if((0, t._)`${r.default.vErrors} === null`, () => g.assign(r.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${r.default.vErrors}.push(${d})`), g.code((0, t._)`${r.default.errors}++`);
    }
    function f(g, p) {
      const { gen: d, validateName: m, schemaEnv: k } = g;
      k.$async ? d.throw((0, t._)`new ${g.ValidationError}(${p})`) : (d.assign((0, t._)`${m}.errors`, p), d.return(!1));
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
    function y(g, p, d) {
      const { createErrors: m } = g.it;
      return m === !1 ? (0, t._)`{}` : $(g, p, d);
    }
    function $(g, p, d = {}) {
      const { gen: m, it: k } = g, l = [
        b(k, d),
        S(g, d)
      ];
      return _(g, p, l), m.object(...l);
    }
    function b({ errorPath: g }, { instancePath: p }) {
      const d = p ? (0, t.str)`${g}${(0, n.getErrorPath)(p, n.Type.Str)}` : g;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, d)];
    }
    function S({ keyword: g, it: { errSchemaPath: p } }, { schemaPath: d, parentSchema: m }) {
      let k = m ? p : (0, t.str)`${p}/${g}`;
      return d && (k = (0, t.str)`${k}${(0, n.getErrorPath)(d, n.Type.Str)}`), [h.schemaPath, k];
    }
    function _(g, { params: p, message: d }, m) {
      const { keyword: k, data: l, schemaValue: u, it: v } = g, { opts: E, propertyName: A, topSchemaRef: N, schemaPath: F } = v;
      m.push([h.keyword, k], [h.params, typeof p == "function" ? p(g) : p || (0, t._)`{}`]), E.messages && m.push([h.message, typeof d == "function" ? d(g) : d]), E.verbose && m.push([h.schema, u], [h.parentSchema, (0, t._)`${N}${F}`], [r.default.data, l]), A && m.push([h.propertyName, A]);
    }
  })(Yn)), Yn;
}
var ao;
function Sa() {
  if (ao) return Ye;
  ao = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.boolOrEmptySchema = Ye.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Ln(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: c, schema: f, validateName: h } = a;
    f === !1 ? s(a, !1) : typeof f == "object" && f.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${h}.errors`, null), c.return(!0));
  }
  Ye.topBoolOrEmptySchema = i;
  function o(a, c) {
    const { gen: f, schema: h } = a;
    h === !1 ? (f.var(c, !1), s(a)) : f.var(c, !0);
  }
  Ye.boolOrEmptySchema = o;
  function s(a, c) {
    const { gen: f, data: h } = a, y = {
      gen: f,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(y, r, void 0, c);
  }
  return Ye;
}
var me = {}, Xe = {}, co;
function us() {
  if (co) return Xe;
  co = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.getRules = Xe.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  Xe.isJSONType = n;
  function r() {
    const i = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...i, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, i.number, i.string, i.array, i.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Xe.getRules = r, Xe;
}
var De = {}, lo;
function fs() {
  if (lo) return De;
  lo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.shouldUseRule = De.shouldUseGroup = De.schemaHasRulesForType = void 0;
  function e({ schema: r, self: i }, o) {
    const s = i.RULES.types[o];
    return s && s !== !0 && t(r, s);
  }
  De.schemaHasRulesForType = e;
  function t(r, i) {
    return i.rules.some((o) => n(r, o));
  }
  De.shouldUseGroup = t;
  function n(r, i) {
    var o;
    return r[i.keyword] !== void 0 || ((o = i.definition.implements) === null || o === void 0 ? void 0 : o.some((s) => r[s] !== void 0));
  }
  return De.shouldUseRule = n, De;
}
var uo;
function zn() {
  if (uo) return me;
  uo = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.reportTypeError = me.checkDataTypes = me.checkDataType = me.coerceAndCheckDataType = me.getJSONTypes = me.getSchemaTypes = me.DataType = void 0;
  const e = /* @__PURE__ */ us(), t = /* @__PURE__ */ fs(), n = /* @__PURE__ */ Ln(), r = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ie();
  var o;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(o || (me.DataType = o = {}));
  function s(d) {
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
  me.getSchemaTypes = s;
  function a(d) {
    const m = Array.isArray(d) ? d : d ? [d] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  me.getJSONTypes = a;
  function c(d, m) {
    const { gen: k, data: l, opts: u } = d, v = h(m, u.coerceTypes), E = m.length > 0 && !(v.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(d, m[0]));
    if (E) {
      const A = S(m, l, u.strictNumbers, o.Wrong);
      k.if(A, () => {
        v.length ? y(d, m, v) : g(d);
      });
    }
    return E;
  }
  me.coerceAndCheckDataType = c;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(d, m) {
    return m ? d.filter((k) => f.has(k) || m === "array" && k === "array") : [];
  }
  function y(d, m, k) {
    const { gen: l, data: u, opts: v } = d, E = l.let("dataType", (0, r._)`typeof ${u}`), A = l.let("coerced", (0, r._)`undefined`);
    v.coerceTypes === "array" && l.if((0, r._)`${E} == 'object' && Array.isArray(${u}) && ${u}.length == 1`, () => l.assign(u, (0, r._)`${u}[0]`).assign(E, (0, r._)`typeof ${u}`).if(S(m, u, v.strictNumbers), () => l.assign(A, u))), l.if((0, r._)`${A} !== undefined`);
    for (const F of k)
      (f.has(F) || F === "array" && v.coerceTypes === "array") && N(F);
    l.else(), g(d), l.endIf(), l.if((0, r._)`${A} !== undefined`, () => {
      l.assign(u, A), $(d, A);
    });
    function N(F) {
      switch (F) {
        case "string":
          l.elseIf((0, r._)`${E} == "number" || ${E} == "boolean"`).assign(A, (0, r._)`"" + ${u}`).elseIf((0, r._)`${u} === null`).assign(A, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${E} == "boolean" || ${u} === null
              || (${E} == "string" && ${u} && ${u} == +${u})`).assign(A, (0, r._)`+${u}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${E} === "boolean" || ${u} === null
              || (${E} === "string" && ${u} && ${u} == +${u} && !(${u} % 1))`).assign(A, (0, r._)`+${u}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${u} === "false" || ${u} === 0 || ${u} === null`).assign(A, !1).elseIf((0, r._)`${u} === "true" || ${u} === 1`).assign(A, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${u} === "" || ${u} === 0 || ${u} === false`), l.assign(A, null);
          return;
        case "array":
          l.elseIf((0, r._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${u} === null`).assign(A, (0, r._)`[${u}]`);
      }
    }
  }
  function $({ gen: d, parentData: m, parentDataProperty: k }, l) {
    d.if((0, r._)`${m} !== undefined`, () => d.assign((0, r._)`${m}[${k}]`, l));
  }
  function b(d, m, k, l = o.Correct) {
    const u = l === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let v;
    switch (d) {
      case "null":
        return (0, r._)`${m} ${u} null`;
      case "array":
        v = (0, r._)`Array.isArray(${m})`;
        break;
      case "object":
        v = (0, r._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        v = E((0, r._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        v = E();
        break;
      default:
        return (0, r._)`typeof ${m} ${u} ${d}`;
    }
    return l === o.Correct ? v : (0, r.not)(v);
    function E(A = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, A, k ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  me.checkDataType = b;
  function S(d, m, k, l) {
    if (d.length === 1)
      return b(d[0], m, k, l);
    let u;
    const v = (0, i.toHash)(d);
    if (v.array && v.object) {
      const E = (0, r._)`typeof ${m} != "object"`;
      u = v.null ? E : (0, r._)`!${m} || ${E}`, delete v.null, delete v.array, delete v.object;
    } else
      u = r.nil;
    v.number && delete v.integer;
    for (const E in v)
      u = (0, r.and)(u, b(E, m, k, l));
    return u;
  }
  me.checkDataTypes = S;
  const _ = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: m }) => typeof d == "string" ? (0, r._)`{type: ${d}}` : (0, r._)`{type: ${m}}`
  };
  function g(d) {
    const m = p(d);
    (0, n.reportError)(m, _);
  }
  me.reportTypeError = g;
  function p(d) {
    const { gen: m, data: k, schema: l } = d, u = (0, i.schemaRefOrVal)(d, l, "type");
    return {
      gen: m,
      keyword: "type",
      data: k,
      schema: l.type,
      schemaCode: u,
      schemaValue: u,
      parentSchema: l,
      params: {},
      it: d
    };
  }
  return me;
}
var wt = {}, fo;
function ka() {
  if (fo) return wt;
  fo = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const c in s)
        r(i, c, s[c].default);
    else o === "array" && Array.isArray(a) && a.forEach((c, f) => r(i, f, c.default));
  }
  wt.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: c, data: f, opts: h } = i;
    if (s === void 0)
      return;
    const y = (0, e._)`${f}${(0, e.getProperty)(o)}`;
    if (c) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${y}`);
      return;
    }
    let $ = (0, e._)`${y} === undefined`;
    h.useDefaults === "empty" && ($ = (0, e._)`${$} || ${y} === null || ${y} === ""`), a.if($, (0, e._)`${y} = ${(0, e.stringify)(s)}`);
  }
  return wt;
}
var Ee = {}, le = {}, po;
function Me() {
  if (po) return le;
  po = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.validateUnion = le.validateArray = le.usePattern = le.callValidateCode = le.schemaProperties = le.allSchemaProperties = le.noPropertyInData = le.propertyInData = le.isOwnProperty = le.hasPropFunc = le.reportMissingProp = le.checkMissingProp = le.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ ie();
  function i(d, m) {
    const { gen: k, data: l, it: u } = d;
    k.if(h(k, l, m, u.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${m}` }, !0), d.error();
    });
  }
  le.checkReportMissingProp = i;
  function o({ gen: d, data: m, it: { opts: k } }, l, u) {
    return (0, e.or)(...l.map((v) => (0, e.and)(h(d, m, v, k.ownProperties), (0, e._)`${u} = ${v}`)));
  }
  le.checkMissingProp = o;
  function s(d, m) {
    d.setParams({ missingProperty: m }, !0), d.error();
  }
  le.reportMissingProp = s;
  function a(d) {
    return d.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  le.hasPropFunc = a;
  function c(d, m, k) {
    return (0, e._)`${a(d)}.call(${m}, ${k})`;
  }
  le.isOwnProperty = c;
  function f(d, m, k, l) {
    const u = (0, e._)`${m}${(0, e.getProperty)(k)} !== undefined`;
    return l ? (0, e._)`${u} && ${c(d, m, k)}` : u;
  }
  le.propertyInData = f;
  function h(d, m, k, l) {
    const u = (0, e._)`${m}${(0, e.getProperty)(k)} === undefined`;
    return l ? (0, e.or)(u, (0, e.not)(c(d, m, k))) : u;
  }
  le.noPropertyInData = h;
  function y(d) {
    return d ? Object.keys(d).filter((m) => m !== "__proto__") : [];
  }
  le.allSchemaProperties = y;
  function $(d, m) {
    return y(m).filter((k) => !(0, t.alwaysValidSchema)(d, m[k]));
  }
  le.schemaProperties = $;
  function b({ schemaCode: d, data: m, it: { gen: k, topSchemaRef: l, schemaPath: u, errorPath: v }, it: E }, A, N, F) {
    const C = F ? (0, e._)`${d}, ${m}, ${l}${u}` : m, j = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, v)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && j.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const U = (0, e._)`${C}, ${k.object(...j)}`;
    return N !== e.nil ? (0, e._)`${A}.call(${N}, ${U})` : (0, e._)`${A}(${U})`;
  }
  le.callValidateCode = b;
  const S = (0, e._)`new RegExp`;
  function _({ gen: d, it: { opts: m } }, k) {
    const l = m.unicodeRegExp ? "u" : "", { regExp: u } = m.code, v = u(k, l);
    return d.scopeValue("pattern", {
      key: v.toString(),
      ref: v,
      code: (0, e._)`${u.code === "new RegExp" ? S : (0, r.useFunc)(d, u)}(${k}, ${l})`
    });
  }
  le.usePattern = _;
  function g(d) {
    const { gen: m, data: k, keyword: l, it: u } = d, v = m.name("valid");
    if (u.allErrors) {
      const A = m.let("valid", !0);
      return E(() => m.assign(A, !1)), A;
    }
    return m.var(v, !0), E(() => m.break()), v;
    function E(A) {
      const N = m.const("len", (0, e._)`${k}.length`);
      m.forRange("i", 0, N, (F) => {
        d.subschema({
          keyword: l,
          dataProp: F,
          dataPropType: t.Type.Num
        }, v), m.if((0, e.not)(v), A);
      });
    }
  }
  le.validateArray = g;
  function p(d) {
    const { gen: m, schema: k, keyword: l, it: u } = d;
    if (!Array.isArray(k))
      throw new Error("ajv implementation error");
    if (k.some((N) => (0, t.alwaysValidSchema)(u, N)) && !u.opts.unevaluated)
      return;
    const E = m.let("valid", !1), A = m.name("_valid");
    m.block(() => k.forEach((N, F) => {
      const C = d.subschema({
        keyword: l,
        schemaProp: F,
        compositeRule: !0
      }, A);
      m.assign(E, (0, e._)`${E} || ${A}`), d.mergeValidEvaluated(C, A) || m.if((0, e.not)(E));
    })), d.result(E, () => d.reset(), () => d.error(!0));
  }
  return le.validateUnion = p, le;
}
var ho;
function Ca() {
  if (ho) return Ee;
  ho = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.validateKeywordUsage = Ee.validSchemaType = Ee.funcKeywordCode = Ee.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ Ln();
  function i($, b) {
    const { gen: S, keyword: _, schema: g, parentSchema: p, it: d } = $, m = b.macro.call(d.self, g, p, d), k = f(S, _, m);
    d.opts.validateSchema !== !1 && d.self.validateSchema(m, !0);
    const l = S.name("valid");
    $.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${_}`,
      topSchemaRef: k,
      compositeRule: !0
    }, l), $.pass(l, () => $.error(!0));
  }
  Ee.macroKeywordCode = i;
  function o($, b) {
    var S;
    const { gen: _, keyword: g, schema: p, parentSchema: d, $data: m, it: k } = $;
    c(k, b);
    const l = !m && b.compile ? b.compile.call(k.self, p, d, k) : b.validate, u = f(_, g, l), v = _.let("valid");
    $.block$data(v, E), $.ok((S = b.valid) !== null && S !== void 0 ? S : v);
    function E() {
      if (b.errors === !1)
        F(), b.modifying && s($), C(() => $.error());
      else {
        const j = b.async ? A() : N();
        b.modifying && s($), C(() => a($, j));
      }
    }
    function A() {
      const j = _.let("ruleErrs", null);
      return _.try(() => F((0, e._)`await `), (U) => _.assign(v, !1).if((0, e._)`${U} instanceof ${k.ValidationError}`, () => _.assign(j, (0, e._)`${U}.errors`), () => _.throw(U))), j;
    }
    function N() {
      const j = (0, e._)`${u}.errors`;
      return _.assign(j, null), F(e.nil), j;
    }
    function F(j = b.async ? (0, e._)`await ` : e.nil) {
      const U = k.opts.passContext ? t.default.this : t.default.self, Y = !("compile" in b && !m || b.schema === !1);
      _.assign(v, (0, e._)`${j}${(0, n.callValidateCode)($, u, U, Y)}`, b.modifying);
    }
    function C(j) {
      var U;
      _.if((0, e.not)((U = b.valid) !== null && U !== void 0 ? U : v), j);
    }
  }
  Ee.funcKeywordCode = o;
  function s($) {
    const { gen: b, data: S, it: _ } = $;
    b.if(_.parentData, () => b.assign(S, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a($, b) {
    const { gen: S } = $;
    S.if((0, e._)`Array.isArray(${b})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${b} : ${t.default.vErrors}.concat(${b})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)($);
    }, () => $.error());
  }
  function c({ schemaEnv: $ }, b) {
    if (b.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function f($, b, S) {
    if (S === void 0)
      throw new Error(`keyword "${b}" failed to compile`);
    return $.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function h($, b, S = !1) {
    return !b.length || b.some((_) => _ === "array" ? Array.isArray($) : _ === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == _ || S && typeof $ > "u");
  }
  Ee.validSchemaType = h;
  function y({ schema: $, opts: b, self: S, errSchemaPath: _ }, g, p) {
    if (Array.isArray(g.keyword) ? !g.keyword.includes(p) : g.keyword !== p)
      throw new Error("ajv implementation error");
    const d = g.dependencies;
    if (d?.some((m) => !Object.prototype.hasOwnProperty.call($, m)))
      throw new Error(`parent schema must have dependencies of ${p}: ${d.join(",")}`);
    if (g.validateSchema && !g.validateSchema($[p])) {
      const k = `keyword "${p}" value is invalid at path "${_}": ` + S.errorsText(g.validateSchema.errors);
      if (b.validateSchema === "log")
        S.logger.error(k);
      else
        throw new Error(k);
    }
  }
  return Ee.validateKeywordUsage = y, Ee;
}
var qe = {}, mo;
function Ea() {
  if (mo) return qe;
  mo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.extendSubschemaMode = qe.extendSubschemaData = qe.getSubschema = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie();
  function n(o, { keyword: s, schemaProp: a, schema: c, schemaPath: f, errSchemaPath: h, topSchemaRef: y }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const $ = o.schema[s];
      return a === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}`
      } : {
        schema: $[a],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (f === void 0 || h === void 0 || y === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: f,
        topSchemaRef: y,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  qe.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: c, data: f, dataTypes: h, propertyName: y }) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = s;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: _, opts: g } = s, p = $.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      b(p), o.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, c, g.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [..._, o.parentDataProperty];
    }
    if (f !== void 0) {
      const S = f instanceof e.Name ? f : $.let("data", f, !0);
      b(S), y !== void 0 && (o.propertyName = y);
    }
    h && (o.dataTypes = h);
    function b(S) {
      o.data = S, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, S];
    }
  }
  qe.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: f, allErrors: h }) {
    c !== void 0 && (o.compositeRule = c), f !== void 0 && (o.createErrors = f), h !== void 0 && (o.allErrors = h), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return qe.extendSubschemaMode = i, qe;
}
var be = {}, er, go;
function ps() {
  return go || (go = 1, er = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, i, o;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (i = r; i-- !== 0; )
          if (!e(t[i], n[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
      for (i = r; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
      for (i = r; i-- !== 0; ) {
        var s = o[i];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), er;
}
var tr = { exports: {} }, yo;
function xa() {
  if (yo) return tr.exports;
  yo = 1;
  var e = tr.exports = function(r, i, o) {
    typeof i == "function" && (o = i, i = {}), o = i.cb || o;
    var s = typeof o == "function" ? o : o.pre || function() {
    }, a = o.post || function() {
    };
    t(i, s, a, r, "", r);
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
  function t(r, i, o, s, a, c, f, h, y, $) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, c, f, h, y, $);
      for (var b in s) {
        var S = s[b];
        if (Array.isArray(S)) {
          if (b in e.arrayKeywords)
            for (var _ = 0; _ < S.length; _++)
              t(r, i, o, S[_], a + "/" + b + "/" + _, c, a, b, s, _);
        } else if (b in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var g in S)
              t(r, i, o, S[g], a + "/" + b + "/" + n(g), c, a, b, s, g);
        } else (b in e.keywords || r.allKeys && !(b in e.skipKeywords)) && t(r, i, o, S, a + "/" + b, c, a, b, s);
      }
      o(s, a, c, f, h, y, $);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return tr.exports;
}
var vo;
function Bn() {
  if (vo) return be;
  vo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = ps(), n = xa(), r = /* @__PURE__ */ new Set([
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
  function i(_, g = !0) {
    return typeof _ == "boolean" ? !0 : g === !0 ? !s(_) : g ? a(_) <= g : !1;
  }
  be.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(_) {
    for (const g in _) {
      if (o.has(g))
        return !0;
      const p = _[g];
      if (Array.isArray(p) && p.some(s) || typeof p == "object" && s(p))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let g = 0;
    for (const p in _) {
      if (p === "$ref")
        return 1 / 0;
      if (g++, !r.has(p) && (typeof _[p] == "object" && (0, e.eachItem)(_[p], (d) => g += a(d)), g === 1 / 0))
        return 1 / 0;
    }
    return g;
  }
  function c(_, g = "", p) {
    p !== !1 && (g = y(g));
    const d = _.parse(g);
    return f(_, d);
  }
  be.getFullPath = c;
  function f(_, g) {
    return _.serialize(g).split("#")[0] + "#";
  }
  be._getFullPath = f;
  const h = /#\/?$/;
  function y(_) {
    return _ ? _.replace(h, "") : "";
  }
  be.normalizeId = y;
  function $(_, g, p) {
    return p = y(p), _.resolve(g, p);
  }
  be.resolveUrl = $;
  const b = /^[a-z_][-a-z0-9._]*$/i;
  function S(_, g) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: p, uriResolver: d } = this.opts, m = y(_[p] || g), k = { "": m }, l = c(d, m, !1), u = {}, v = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (N, F, C, j) => {
      if (j === void 0)
        return;
      const U = l + F;
      let Y = k[j];
      typeof N[p] == "string" && (Y = H.call(this, N[p])), re.call(this, N.$anchor), re.call(this, N.$dynamicAnchor), k[F] = Y;
      function H(V) {
        const Q = this.opts.uriResolver.resolve;
        if (V = y(Y ? Q(Y, V) : V), v.has(V))
          throw A(V);
        v.add(V);
        let q = this.refs[V];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? E(N, q.schema, V) : V !== y(U) && (V[0] === "#" ? (E(N, u[V], V), u[V] = N) : this.refs[V] = U), V;
      }
      function re(V) {
        if (typeof V == "string") {
          if (!b.test(V))
            throw new Error(`invalid anchor "${V}"`);
          H.call(this, `#${V}`);
        }
      }
    }), u;
    function E(N, F, C) {
      if (F !== void 0 && !t(N, F))
        throw A(C);
    }
    function A(N) {
      return new Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = S, be;
}
var $o;
function Un() {
  if ($o) return Ie;
  $o = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getData = Ie.KeywordCxt = Ie.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Sa(), t = /* @__PURE__ */ zn(), n = /* @__PURE__ */ fs(), r = /* @__PURE__ */ zn(), i = /* @__PURE__ */ ka(), o = /* @__PURE__ */ Ca(), s = /* @__PURE__ */ Ea(), a = /* @__PURE__ */ ne(), c = /* @__PURE__ */ Ne(), f = /* @__PURE__ */ Bn(), h = /* @__PURE__ */ ie(), y = /* @__PURE__ */ Ln();
  function $(P) {
    if (l(P) && (v(P), k(P))) {
      g(P);
      return;
    }
    b(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  Ie.validateFunctionCode = $;
  function b({ gen: P, validateName: O, schema: B, schemaEnv: K, opts: J }, te) {
    J.code.es5 ? P.func(O, (0, a._)`${c.default.data}, ${c.default.valCxt}`, K.$async, () => {
      P.code((0, a._)`"use strict"; ${d(B, J)}`), _(P, J), P.code(te);
    }) : P.func(O, (0, a._)`${c.default.data}, ${S(J)}`, K.$async, () => P.code(d(B, J)).code(te));
  }
  function S(P) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(P, O) {
    P.if(c.default.valCxt, () => {
      P.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), P.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), P.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), P.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), O.dynamicRef && P.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      P.var(c.default.instancePath, (0, a._)`""`), P.var(c.default.parentData, (0, a._)`undefined`), P.var(c.default.parentDataProperty, (0, a._)`undefined`), P.var(c.default.rootData, c.default.data), O.dynamicRef && P.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function g(P) {
    const { schema: O, opts: B, gen: K } = P;
    b(P, () => {
      B.$comment && O.$comment && j(P), N(P), K.let(c.default.vErrors, null), K.let(c.default.errors, 0), B.unevaluated && p(P), E(P), U(P);
    });
  }
  function p(P) {
    const { gen: O, validateName: B } = P;
    P.evaluated = O.const("evaluated", (0, a._)`${B}.evaluated`), O.if((0, a._)`${P.evaluated}.dynamicProps`, () => O.assign((0, a._)`${P.evaluated}.props`, (0, a._)`undefined`)), O.if((0, a._)`${P.evaluated}.dynamicItems`, () => O.assign((0, a._)`${P.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(P, O) {
    const B = typeof P == "object" && P[O.schemaId];
    return B && (O.code.source || O.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function m(P, O) {
    if (l(P) && (v(P), k(P))) {
      u(P, O);
      return;
    }
    (0, e.boolOrEmptySchema)(P, O);
  }
  function k({ schema: P, self: O }) {
    if (typeof P == "boolean")
      return !P;
    for (const B in P)
      if (O.RULES.all[B])
        return !0;
    return !1;
  }
  function l(P) {
    return typeof P.schema != "boolean";
  }
  function u(P, O) {
    const { schema: B, gen: K, opts: J } = P;
    J.$comment && B.$comment && j(P), F(P), C(P);
    const te = K.const("_errs", c.default.errors);
    E(P, te), K.var(O, (0, a._)`${te} === ${c.default.errors}`);
  }
  function v(P) {
    (0, h.checkUnknownRules)(P), A(P);
  }
  function E(P, O) {
    if (P.opts.jtd)
      return H(P, [], !1, O);
    const B = (0, t.getSchemaTypes)(P.schema), K = (0, t.coerceAndCheckDataType)(P, B);
    H(P, B, !K, O);
  }
  function A(P) {
    const { schema: O, errSchemaPath: B, opts: K, self: J } = P;
    O.$ref && K.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(O, J.RULES) && J.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function N(P) {
    const { schema: O, opts: B } = P;
    O.default !== void 0 && B.useDefaults && B.strictSchema && (0, h.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function F(P) {
    const O = P.schema[P.opts.schemaId];
    O && (P.baseId = (0, f.resolveUrl)(P.opts.uriResolver, P.baseId, O));
  }
  function C(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function j({ gen: P, schemaEnv: O, schema: B, errSchemaPath: K, opts: J }) {
    const te = B.$comment;
    if (J.$comment === !0)
      P.code((0, a._)`${c.default.self}.logger.log(${te})`);
    else if (typeof J.$comment == "function") {
      const ce = (0, a.str)`${K}/$comment`, ye = P.scopeValue("root", { ref: O.root });
      P.code((0, a._)`${c.default.self}.opts.$comment(${te}, ${ce}, ${ye}.schema)`);
    }
  }
  function U(P) {
    const { gen: O, schemaEnv: B, validateName: K, ValidationError: J, opts: te } = P;
    B.$async ? O.if((0, a._)`${c.default.errors} === 0`, () => O.return(c.default.data), () => O.throw((0, a._)`new ${J}(${c.default.vErrors})`)) : (O.assign((0, a._)`${K}.errors`, c.default.vErrors), te.unevaluated && Y(P), O.return((0, a._)`${c.default.errors} === 0`));
  }
  function Y({ gen: P, evaluated: O, props: B, items: K }) {
    B instanceof a.Name && P.assign((0, a._)`${O}.props`, B), K instanceof a.Name && P.assign((0, a._)`${O}.items`, K);
  }
  function H(P, O, B, K) {
    const { gen: J, schema: te, data: ce, allErrors: ye, opts: ue, self: he } = P, { RULES: fe } = he;
    if (te.$ref && (ue.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(te, fe))) {
      J.block(() => W(P, "$ref", fe.all.$ref.definition));
      return;
    }
    ue.jtd || V(P, O), J.block(() => {
      for (const $e of fe.rules)
        je($e);
      je(fe.post);
    });
    function je($e) {
      (0, n.shouldUseGroup)(te, $e) && ($e.type ? (J.if((0, r.checkDataType)($e.type, ce, ue.strictNumbers)), re(P, $e), O.length === 1 && O[0] === $e.type && B && (J.else(), (0, r.reportTypeError)(P)), J.endIf()) : re(P, $e), ye || J.if((0, a._)`${c.default.errors} === ${K || 0}`));
    }
  }
  function re(P, O) {
    const { gen: B, schema: K, opts: { useDefaults: J } } = P;
    J && (0, i.assignDefaults)(P, O.type), B.block(() => {
      for (const te of O.rules)
        (0, n.shouldUseRule)(K, te) && W(P, te.keyword, te.definition, O.type);
    });
  }
  function V(P, O) {
    P.schemaEnv.meta || !P.opts.strictTypes || (Q(P, O), P.opts.allowUnionTypes || q(P, O), R(P, P.dataTypes));
  }
  function Q(P, O) {
    if (O.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = O;
        return;
      }
      O.forEach((B) => {
        M(P.dataTypes, B) || x(P, `type "${B}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), w(P, O);
    }
  }
  function q(P, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && x(P, "use allowUnionTypes to allow union type keyword");
  }
  function R(P, O) {
    const B = P.self.RULES.all;
    for (const K in B) {
      const J = B[K];
      if (typeof J == "object" && (0, n.shouldUseRule)(P.schema, J)) {
        const { type: te } = J.definition;
        te.length && !te.some((ce) => D(O, ce)) && x(P, `missing type "${te.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function D(P, O) {
    return P.includes(O) || O === "number" && P.includes("integer");
  }
  function M(P, O) {
    return P.includes(O) || O === "integer" && P.includes("number");
  }
  function w(P, O) {
    const B = [];
    for (const K of P.dataTypes)
      M(O, K) ? B.push(K) : O.includes("integer") && K === "number" && B.push("integer");
    P.dataTypes = B;
  }
  function x(P, O) {
    const B = P.schemaEnv.baseId + P.errSchemaPath;
    O += ` at "${B}" (strictTypes)`, (0, h.checkStrictMode)(P, O, P.opts.strictTypes);
  }
  class z {
    constructor(O, B, K) {
      if ((0, o.validateKeywordUsage)(O, B, K), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = K, this.data = O.data, this.schema = O.schema[K], this.$data = B.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(O, this.schema, K, this.$data), this.schemaType = B.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = B, this.$data)
        this.schemaCode = O.gen.const("vSchema", Z(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = O.gen.const("_errs", c.default.errors));
    }
    result(O, B, K) {
      this.failResult((0, a.not)(O), B, K);
    }
    failResult(O, B, K) {
      this.gen.if(O), K ? K() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(O, B) {
      this.failResult((0, a.not)(O), void 0, B);
    }
    fail(O) {
      if (O === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(O), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(O) {
      if (!this.$data)
        return this.fail(O);
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), O)})`);
    }
    error(O, B, K) {
      if (B) {
        this.setParams(B), this._error(O, K), this.setParams({});
        return;
      }
      this._error(O, K);
    }
    _error(O, B) {
      (O ? y.reportExtraError : y.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, y.reportError)(this, this.def.$dataError || y.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, y.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(O) {
      this.allErrors || this.gen.if(O);
    }
    setParams(O, B) {
      B ? Object.assign(this.params, O) : this.params = O;
    }
    block$data(O, B, K = a.nil) {
      this.gen.block(() => {
        this.check$data(O, K), B();
      });
    }
    check$data(O = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: J, schemaType: te, def: ce } = this;
      K.if((0, a.or)((0, a._)`${J} === undefined`, B)), O !== a.nil && K.assign(O, !0), (te.length || ce.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), O !== a.nil && K.assign(O, !1)), K.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: B, schemaType: K, def: J, it: te } = this;
      return (0, a.or)(ce(), ye());
      function ce() {
        if (K.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const ue = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, r.checkDataTypes)(ue, B, te.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ye() {
        if (J.validateSchema) {
          const ue = O.scopeValue("validate$data", { ref: J.validateSchema });
          return (0, a._)`!${ue}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(O, B) {
      const K = (0, s.getSubschema)(this.it, O);
      (0, s.extendSubschemaData)(K, this.it, O), (0, s.extendSubschemaMode)(K, O);
      const J = { ...this.it, ...K, items: void 0, props: void 0 };
      return m(J, B), J;
    }
    mergeEvaluated(O, B) {
      const { it: K, gen: J } = this;
      K.opts.unevaluated && (K.props !== !0 && O.props !== void 0 && (K.props = h.mergeEvaluated.props(J, O.props, K.props, B)), K.items !== !0 && O.items !== void 0 && (K.items = h.mergeEvaluated.items(J, O.items, K.items, B)));
    }
    mergeValidEvaluated(O, B) {
      const { it: K, gen: J } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return J.if(B, () => this.mergeEvaluated(O, a.Name)), !0;
    }
  }
  Ie.KeywordCxt = z;
  function W(P, O, B, K) {
    const J = new z(P, B, O);
    "code" in B ? B.code(J, K) : J.$data && B.validate ? (0, o.funcKeywordCode)(J, B) : "macro" in B ? (0, o.macroKeywordCode)(J, B) : (B.compile || B.validate) && (0, o.funcKeywordCode)(J, B);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, ee = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(P, { dataLevel: O, dataNames: B, dataPathArr: K }) {
    let J, te;
    if (P === "")
      return c.default.rootData;
    if (P[0] === "/") {
      if (!G.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      J = P, te = c.default.rootData;
    } else {
      const he = ee.exec(P);
      if (!he)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const fe = +he[1];
      if (J = he[2], J === "#") {
        if (fe >= O)
          throw new Error(ue("property/index", fe));
        return K[O - fe];
      }
      if (fe > O)
        throw new Error(ue("data", fe));
      if (te = B[O - fe], !J)
        return te;
    }
    let ce = te;
    const ye = J.split("/");
    for (const he of ye)
      he && (te = (0, a._)`${te}${(0, a.getProperty)((0, h.unescapeJsonPointer)(he))}`, ce = (0, a._)`${ce} && ${te}`);
    return ce;
    function ue(he, fe) {
      return `Cannot access ${he} ${fe} levels up, current level is ${O}`;
    }
  }
  return Ie.getData = Z, Ie;
}
var zt = {}, bo;
function Rr() {
  if (bo) return zt;
  bo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return zt.default = e, zt;
}
var It = {}, wo;
function Kn() {
  if (wo) return It;
  wo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return It.default = t, It;
}
var we = {}, _o;
function Hn() {
  if (_o) return we;
  _o = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Rr(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ Bn(), i = /* @__PURE__ */ ie(), o = /* @__PURE__ */ Un();
  class s {
    constructor(p) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof p.schema == "object" && (m = p.schema), this.schema = p.schema, this.schemaId = p.schemaId, this.root = p.root || this, this.baseId = (d = p.baseId) !== null && d !== void 0 ? d : (0, r.normalizeId)(m?.[p.schemaId || "$id"]), this.schemaPath = p.schemaPath, this.localRefs = p.localRefs, this.meta = p.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = s;
  function a(g) {
    const p = h.call(this, g);
    if (p)
      return p;
    const d = (0, r.getFullPath)(this.opts.uriResolver, g.root.baseId), { es5: m, lines: k } = this.opts.code, { ownProperties: l } = this.opts, u = new e.CodeGen(this.scope, { es5: m, lines: k, ownProperties: l });
    let v;
    g.$async && (v = u.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const E = u.scopeName("validate");
    g.validateName = E;
    const A = {
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
      topSchemaRef: u.scopeValue("schema", this.opts.code.source === !0 ? { ref: g.schema, code: (0, e.stringify)(g.schema) } : { ref: g.schema }),
      validateName: E,
      ValidationError: v,
      schema: g.schema,
      schemaEnv: g,
      rootId: d,
      baseId: g.baseId || d,
      schemaPath: e.nil,
      errSchemaPath: g.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let N;
    try {
      this._compilations.add(g), (0, o.validateFunctionCode)(A), u.optimize(this.opts.code.optimize);
      const F = u.toString();
      N = `${u.scopeRefs(n.default.scope)}return ${F}`, this.opts.code.process && (N = this.opts.code.process(N, g));
      const j = new Function(`${n.default.self}`, `${n.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value(E, { ref: j }), j.errors = null, j.schema = g.schema, j.schemaEnv = g, g.$async && (j.$async = !0), this.opts.code.source === !0 && (j.source = { validateName: E, validateCode: F, scopeValues: u._values }), this.opts.unevaluated) {
        const { props: U, items: Y } = A;
        j.evaluated = {
          props: U instanceof e.Name ? void 0 : U,
          items: Y instanceof e.Name ? void 0 : Y,
          dynamicProps: U instanceof e.Name,
          dynamicItems: Y instanceof e.Name
        }, j.source && (j.source.evaluated = (0, e.stringify)(j.evaluated));
      }
      return g.validate = j, g;
    } catch (F) {
      throw delete g.validate, delete g.validateName, N && this.logger.error("Error compiling schema, function code:", N), F;
    } finally {
      this._compilations.delete(g);
    }
  }
  we.compileSchema = a;
  function c(g, p, d) {
    var m;
    d = (0, r.resolveUrl)(this.opts.uriResolver, p, d);
    const k = g.refs[d];
    if (k)
      return k;
    let l = $.call(this, g, d);
    if (l === void 0) {
      const u = (m = g.localRefs) === null || m === void 0 ? void 0 : m[d], { schemaId: v } = this.opts;
      u && (l = new s({ schema: u, schemaId: v, root: g, baseId: p }));
    }
    if (l !== void 0)
      return g.refs[d] = f.call(this, l);
  }
  we.resolveRef = c;
  function f(g) {
    return (0, r.inlineRef)(g.schema, this.opts.inlineRefs) ? g.schema : g.validate ? g : a.call(this, g);
  }
  function h(g) {
    for (const p of this._compilations)
      if (y(p, g))
        return p;
  }
  we.getCompilingSchema = h;
  function y(g, p) {
    return g.schema === p.schema && g.root === p.root && g.baseId === p.baseId;
  }
  function $(g, p) {
    let d;
    for (; typeof (d = this.refs[p]) == "string"; )
      p = d;
    return d || this.schemas[p] || b.call(this, g, p);
  }
  function b(g, p) {
    const d = this.opts.uriResolver.parse(p), m = (0, r._getFullPath)(this.opts.uriResolver, d);
    let k = (0, r.getFullPath)(this.opts.uriResolver, g.baseId, void 0);
    if (Object.keys(g.schema).length > 0 && m === k)
      return _.call(this, d, g);
    const l = (0, r.normalizeId)(m), u = this.refs[l] || this.schemas[l];
    if (typeof u == "string") {
      const v = b.call(this, g, u);
      return typeof v?.schema != "object" ? void 0 : _.call(this, d, v);
    }
    if (typeof u?.schema == "object") {
      if (u.validate || a.call(this, u), l === (0, r.normalizeId)(p)) {
        const { schema: v } = u, { schemaId: E } = this.opts, A = v[E];
        return A && (k = (0, r.resolveUrl)(this.opts.uriResolver, k, A)), new s({ schema: v, schemaId: E, root: g, baseId: k });
      }
      return _.call(this, d, u);
    }
  }
  we.resolveSchema = b;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(g, { baseId: p, schema: d, root: m }) {
    var k;
    if (((k = g.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/")
      return;
    for (const v of g.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const E = d[(0, i.unescapeFragment)(v)];
      if (E === void 0)
        return;
      d = E;
      const A = typeof d == "object" && d[this.opts.schemaId];
      !S.has(v) && A && (p = (0, r.resolveUrl)(this.opts.uriResolver, p, A));
    }
    let l;
    if (typeof d != "boolean" && d.$ref && !(0, i.schemaHasRulesButRef)(d, this.RULES)) {
      const v = (0, r.resolveUrl)(this.opts.uriResolver, p, d.$ref);
      l = b.call(this, m, v);
    }
    const { schemaId: u } = this.opts;
    if (l = l || new s({ schema: d, schemaId: u, root: m, baseId: p }), l.schema !== l.root.schema)
      return l;
  }
  return we;
}
const Pa = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Aa = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ra = "object", Na = ["$data"], Ma = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Fa = !1, Oa = {
  $id: Pa,
  description: Aa,
  type: Ra,
  required: Na,
  properties: Ma,
  additionalProperties: Fa
};
var Dt = {}, _t = { exports: {} }, nr, So;
function hs() {
  if (So) return nr;
  So = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(l) {
    let u = "", v = 0, E = 0;
    for (E = 0; E < l.length; E++)
      if (v = l[E].charCodeAt(0), v !== 48) {
        if (!(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
          return "";
        u += l[E];
        break;
      }
    for (E += 1; E < l.length; E++) {
      if (v = l[E].charCodeAt(0), !(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
        return "";
      u += l[E];
    }
    return u;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(l) {
    return l.length = 0, !0;
  }
  function c(l, u, v) {
    if (l.length) {
      const E = o(l);
      if (E !== "")
        u.push(E);
      else
        return v.error = !0, !1;
      l.length = 0;
    }
    return !0;
  }
  function f(l) {
    let u = 0;
    const v = { error: !1, address: "", zone: "" }, E = [], A = [];
    let N = !1, F = !1, C = c;
    for (let j = 0; j < l.length; j++) {
      const U = l[j];
      if (!(U === "[" || U === "]"))
        if (U === ":") {
          if (N === !0 && (F = !0), !C(A, E, v))
            break;
          if (++u > 7) {
            v.error = !0;
            break;
          }
          j > 0 && l[j - 1] === ":" && (N = !0), E.push(":");
          continue;
        } else if (U === "%") {
          if (!C(A, E, v))
            break;
          C = a;
        } else {
          A.push(U);
          continue;
        }
    }
    return A.length && (C === a ? v.zone = A.join("") : F ? E.push(A.join("")) : E.push(o(A))), v.address = E.join(""), v;
  }
  function h(l) {
    if (y(l, ":") < 2)
      return { host: l, isIPV6: !1 };
    const u = f(l);
    if (u.error)
      return { host: l, isIPV6: !1 };
    {
      let v = u.address, E = u.address;
      return u.zone && (v += "%" + u.zone, E += "%25" + u.zone), { host: v, isIPV6: !0, escapedHost: E };
    }
  }
  function y(l, u) {
    let v = 0;
    for (let E = 0; E < l.length; E++)
      l[E] === u && v++;
    return v;
  }
  function $(l) {
    let u = l;
    const v = [];
    let E = -1, A = 0;
    for (; A = u.length; ) {
      if (A === 1) {
        if (u === ".")
          break;
        if (u === "/") {
          v.push("/");
          break;
        } else {
          v.push(u);
          break;
        }
      } else if (A === 2) {
        if (u[0] === ".") {
          if (u[1] === ".")
            break;
          if (u[1] === "/") {
            u = u.slice(2);
            continue;
          }
        } else if (u[0] === "/" && (u[1] === "." || u[1] === "/")) {
          v.push("/");
          break;
        }
      } else if (A === 3 && u === "/..") {
        v.length !== 0 && v.pop(), v.push("/");
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
          u = u.slice(3), v.length !== 0 && v.pop();
          continue;
        }
      }
      if ((E = u.indexOf("/", 1)) === -1) {
        v.push(u);
        break;
      } else
        v.push(u.slice(0, E)), u = u.slice(E);
    }
    return v.join("");
  }
  const b = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, _ = /[@/?#]/g;
  function g(l, u) {
    const v = u ? _ : S;
    return v.lastIndex = 0, l.replace(v, (E) => b[E]);
  }
  function p(l, u = !1) {
    if (l.indexOf("%") === -1)
      return l;
    let v = "";
    for (let E = 0; E < l.length; E++) {
      if (l[E] === "%" && E + 2 < l.length) {
        const A = l.slice(E + 1, E + 3);
        if (n(A)) {
          const N = A.toUpperCase(), F = String.fromCharCode(parseInt(N, 16));
          u && r(F) ? v += F : v += "%" + N, E += 2;
          continue;
        }
      }
      v += l[E];
    }
    return v;
  }
  function d(l) {
    let u = "";
    for (let v = 0; v < l.length; v++) {
      if (l[v] === "%" && v + 2 < l.length) {
        const E = l.slice(v + 1, v + 3);
        if (n(E)) {
          const A = E.toUpperCase(), N = String.fromCharCode(parseInt(A, 16));
          N !== "." && r(N) ? u += N : u += "%" + A, v += 2;
          continue;
        }
      }
      i(l[v]) ? u += l[v] : u += escape(l[v]);
    }
    return u;
  }
  function m(l) {
    let u = "";
    for (let v = 0; v < l.length; v++) {
      if (l[v] === "%" && v + 2 < l.length) {
        const E = l.slice(v + 1, v + 3);
        if (n(E)) {
          u += "%" + E.toUpperCase(), v += 2;
          continue;
        }
      }
      u += escape(l[v]);
    }
    return u;
  }
  function k(l) {
    const u = [];
    if (l.userinfo !== void 0 && (u.push(l.userinfo), u.push("@")), l.host !== void 0) {
      let v = unescape(l.host);
      if (!t(v)) {
        const E = h(v);
        E.isIPV6 === !0 ? v = `[${E.escapedHost}]` : v = g(v, !1);
      }
      u.push(v);
    }
    return (typeof l.port == "number" || typeof l.port == "string") && (u.push(":"), u.push(String(l.port))), u.length ? u.join("") : void 0;
  }
  return nr = {
    nonSimpleDomain: s,
    recomposeAuthority: k,
    reescapeHostDelimiters: g,
    normalizePercentEncoding: p,
    normalizePathEncoding: d,
    escapePreservingEscapes: m,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: o
  }, nr;
}
var rr, ko;
function Ta() {
  if (ko) return rr;
  ko = 1;
  const { isUUID: e } = hs(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(l) {
    return l.secure === !0 ? !0 : l.secure === !1 ? !1 : l.scheme ? l.scheme.length === 3 && (l.scheme[0] === "w" || l.scheme[0] === "W") && (l.scheme[1] === "s" || l.scheme[1] === "S") && (l.scheme[2] === "s" || l.scheme[2] === "S") : !1;
  }
  function o(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function s(l) {
    const u = String(l.scheme).toLowerCase() === "https";
    return (l.port === (u ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function a(l) {
    return l.secure = i(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function c(l) {
    if ((l.port === (i(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [u, v] = l.resourceName.split("?");
      l.path = u && u !== "/" ? u : void 0, l.query = v, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function f(l, u) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const v = l.path.match(t);
    if (v) {
      const E = u.scheme || l.scheme || "urn";
      l.nid = v[1].toLowerCase(), l.nss = v[2];
      const A = `${E}:${u.nid || l.nid}`, N = k(A);
      l.path = void 0, N && (l = N.parse(l, u));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function h(l, u) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const v = u.scheme || l.scheme || "urn", E = l.nid.toLowerCase(), A = `${v}:${u.nid || E}`, N = k(A);
    N && (l = N.serialize(l, u));
    const F = l, C = l.nss;
    return F.path = `${E || u.nid}:${C}`, u.skipEscape = !0, F;
  }
  function y(l, u) {
    const v = l;
    return v.uuid = v.nss, v.nss = void 0, !u.tolerant && (!v.uuid || !e(v.uuid)) && (v.error = v.error || "UUID is not valid."), v;
  }
  function $(l) {
    const u = l;
    return u.nss = (l.uuid || "").toLowerCase(), u;
  }
  const b = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: s
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: b.domainHost,
      parse: o,
      serialize: s
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: c
    }
  ), g = (
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
      http: b,
      https: S,
      ws: _,
      wss: g,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: f,
          serialize: h,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: y,
          serialize: $,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(m, null);
  function k(l) {
    return l && (m[
      /** @type {SchemeName} */
      l
    ] || m[
      /** @type {SchemeName} */
      l.toLowerCase()
    ]) || void 0;
  }
  return rr = {
    wsIsSecure: i,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: k
  }, rr;
}
var Co;
function ja() {
  if (Co) return _t.exports;
  Co = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: c } = hs(), { SCHEMES: f, getSchemeHandler: h } = Ta();
  function y(A, N) {
    return typeof A == "string" ? A = /** @type {T} */
    l(A, N) : typeof A == "object" && (A = /** @type {T} */
    k(_(A, N), N)), A;
  }
  function $(A, N, F) {
    const C = F ? Object.assign({ scheme: "null" }, F) : { scheme: "null" }, j = b(k(A, C), k(N, C), C, !0);
    return C.skipEscape = !0, _(j, C);
  }
  function b(A, N, F, C) {
    const j = {};
    return C || (A = k(_(A, F), F), N = k(_(N, F), F)), F = F || {}, !F.tolerant && N.scheme ? (j.scheme = N.scheme, j.userinfo = N.userinfo, j.host = N.host, j.port = N.port, j.path = t(N.path || ""), j.query = N.query) : (N.userinfo !== void 0 || N.host !== void 0 || N.port !== void 0 ? (j.userinfo = N.userinfo, j.host = N.host, j.port = N.port, j.path = t(N.path || ""), j.query = N.query) : (N.path ? (N.path[0] === "/" ? j.path = t(N.path) : ((A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0) && !A.path ? j.path = "/" + N.path : A.path ? j.path = A.path.slice(0, A.path.lastIndexOf("/") + 1) + N.path : j.path = N.path, j.path = t(j.path)), j.query = N.query) : (j.path = A.path, N.query !== void 0 ? j.query = N.query : j.query = A.query), j.userinfo = A.userinfo, j.host = A.host, j.port = A.port), j.scheme = A.scheme), j.fragment = N.fragment, j;
  }
  function S(A, N, F) {
    const C = v(A, F), j = v(N, F);
    return C !== void 0 && j !== void 0 && C.toLowerCase() === j.toLowerCase();
  }
  function _(A, N) {
    const F = {
      host: A.host,
      scheme: A.scheme,
      userinfo: A.userinfo,
      port: A.port,
      path: A.path,
      query: A.query,
      nid: A.nid,
      nss: A.nss,
      uuid: A.uuid,
      fragment: A.fragment,
      reference: A.reference,
      resourceName: A.resourceName,
      secure: A.secure,
      error: ""
    }, C = Object.assign({}, N), j = [], U = h(C.scheme || F.scheme);
    U && U.serialize && U.serialize(F, C), F.path !== void 0 && (C.skipEscape ? F.path = r(F.path) : (F.path = o(F.path), F.scheme !== void 0 && (F.path = F.path.split("%3A").join(":")))), C.reference !== "suffix" && F.scheme && j.push(F.scheme, ":");
    const Y = n(F);
    if (Y !== void 0 && (C.reference !== "suffix" && j.push("//"), j.push(Y), F.path && F.path[0] !== "/" && j.push("/")), F.path !== void 0) {
      let H = F.path;
      !C.absolutePath && (!U || !U.absolutePath) && (H = t(H)), Y === void 0 && H[0] === "/" && H[1] === "/" && (H = "/%2F" + H.slice(2)), j.push(H);
    }
    return F.query !== void 0 && j.push("?", F.query), F.fragment !== void 0 && j.push("#", F.fragment), j.join("");
  }
  const g = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, p = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function d(A, N) {
    if (N[2] !== void 0 && A.path && A.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof A.port == "number" && (A.port < 0 || A.port > 65535))
      return "URI port is malformed.";
  }
  function m(A, N) {
    const F = Object.assign({}, N), C = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let j = !1, U = !1;
    F.reference === "suffix" && (F.scheme ? A = F.scheme + ":" + A : A = "//" + A);
    const Y = A.match(p);
    Y !== null && Y[1].indexOf("\\") !== -1 && (C.error = "URI authority must not contain a literal backslash.", j = !0);
    const H = A.match(g);
    if (H) {
      C.scheme = H[1], C.userinfo = H[3], C.host = H[4], C.port = parseInt(H[5], 10), C.path = H[6] || "", C.query = H[7], C.fragment = H[8], isNaN(C.port) && (C.port = H[5]);
      const re = d(C, H);
      if (re !== void 0 && (C.error = C.error || re, j = !0), C.host)
        if (a(C.host) === !1) {
          const q = e(C.host);
          C.host = q.host.toLowerCase(), U = q.isIPV6;
        } else
          U = !0;
      C.scheme === void 0 && C.userinfo === void 0 && C.host === void 0 && C.port === void 0 && C.query === void 0 && !C.path ? C.reference = "same-document" : C.scheme === void 0 ? C.reference = "relative" : C.fragment === void 0 ? C.reference = "absolute" : C.reference = "uri", F.reference && F.reference !== "suffix" && F.reference !== C.reference && (C.error = C.error || "URI is not a " + F.reference + " reference.");
      const V = h(F.scheme || C.scheme);
      if (!F.unicodeSupport && (!V || !V.unicodeSupport) && C.host && (F.domainHost || V && V.domainHost) && U === !1 && c(C.host))
        try {
          C.host = new URL("http://" + C.host).hostname;
        } catch (Q) {
          C.error = C.error || "Host's domain name can not be converted to ASCII: " + Q;
        }
      if ((!V || V && !V.skipNormalize) && (A.indexOf("%") !== -1 && (C.scheme !== void 0 && (C.scheme = unescape(C.scheme)), C.host !== void 0 && (C.host = s(unescape(C.host), U))), C.path && (C.path = i(C.path)), C.fragment))
        try {
          C.fragment = encodeURI(decodeURIComponent(C.fragment));
        } catch {
          C.error = C.error || "URI malformed";
        }
      V && V.parse && V.parse(C, F);
    } else
      C.error = C.error || "URI can not be parsed.";
    return { parsed: C, malformedAuthorityOrPort: j };
  }
  function k(A, N) {
    return m(A, N).parsed;
  }
  function l(A, N) {
    return u(A, N).normalized;
  }
  function u(A, N) {
    const { parsed: F, malformedAuthorityOrPort: C } = m(A, N);
    return {
      normalized: C ? A : _(F, N),
      malformedAuthorityOrPort: C
    };
  }
  function v(A, N) {
    if (typeof A == "string") {
      const { normalized: F, malformedAuthorityOrPort: C } = u(A, N);
      return C ? void 0 : F;
    }
    if (typeof A == "object")
      return _(A, N);
  }
  const E = {
    SCHEMES: f,
    normalize: y,
    resolve: $,
    resolveComponent: b,
    equal: S,
    serialize: _,
    parse: k
  };
  return _t.exports = E, _t.exports.default = E, _t.exports.fastUri = E, _t.exports;
}
var Eo;
function za() {
  if (Eo) return Dt;
  Eo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = ja();
  return e.code = 'require("ajv/dist/runtime/uri").default', Dt.default = e, Dt;
}
var xo;
function Ia() {
  return xo || (xo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Un();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ ne();
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
    const r = /* @__PURE__ */ Rr(), i = /* @__PURE__ */ Kn(), o = /* @__PURE__ */ us(), s = /* @__PURE__ */ Hn(), a = /* @__PURE__ */ ne(), c = /* @__PURE__ */ Bn(), f = /* @__PURE__ */ zn(), h = /* @__PURE__ */ ie(), y = Oa, $ = /* @__PURE__ */ za(), b = (q, R) => new RegExp(q, R);
    b.code = "new RegExp";
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
    ]), g = {
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
    }, p = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, d = 200;
    function m(q) {
      var R, D, M, w, x, z, W, G, ee, Z, P, O, B, K, J, te, ce, ye, ue, he, fe, je, $e, Ce, ze;
      const Je = q.strict, Wn = (R = q.code) === null || R === void 0 ? void 0 : R.optimize, Gr = Wn === !0 || Wn === void 0 ? 1 : Wn || 0, Wr = (M = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && M !== void 0 ? M : b, Is = (w = q.uriResolver) !== null && w !== void 0 ? w : $.default;
      return {
        strictSchema: (z = (x = q.strictSchema) !== null && x !== void 0 ? x : Je) !== null && z !== void 0 ? z : !0,
        strictNumbers: (G = (W = q.strictNumbers) !== null && W !== void 0 ? W : Je) !== null && G !== void 0 ? G : !0,
        strictTypes: (Z = (ee = q.strictTypes) !== null && ee !== void 0 ? ee : Je) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (O = (P = q.strictTuples) !== null && P !== void 0 ? P : Je) !== null && O !== void 0 ? O : "log",
        strictRequired: (K = (B = q.strictRequired) !== null && B !== void 0 ? B : Je) !== null && K !== void 0 ? K : !1,
        code: q.code ? { ...q.code, optimize: Gr, regExp: Wr } : { optimize: Gr, regExp: Wr },
        loopRequired: (J = q.loopRequired) !== null && J !== void 0 ? J : d,
        loopEnum: (te = q.loopEnum) !== null && te !== void 0 ? te : d,
        meta: (ce = q.meta) !== null && ce !== void 0 ? ce : !0,
        messages: (ye = q.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (ue = q.inlineRefs) !== null && ue !== void 0 ? ue : !0,
        schemaId: (he = q.schemaId) !== null && he !== void 0 ? he : "$id",
        addUsedSchema: (fe = q.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (je = q.validateSchema) !== null && je !== void 0 ? je : !0,
        validateFormats: ($e = q.validateFormats) !== null && $e !== void 0 ? $e : !0,
        unicodeRegExp: (Ce = q.unicodeRegExp) !== null && Ce !== void 0 ? Ce : !0,
        int32range: (ze = q.int32range) !== null && ze !== void 0 ? ze : !0,
        uriResolver: Is
      };
    }
    class k {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...m(R) };
        const { es5: D, lines: M } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: D, lines: M }), this.logger = C(R.logger);
        const w = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, o.getRules)(), l.call(this, g, R, "NOT SUPPORTED"), l.call(this, p, R, "DEPRECATED", "warn"), this._metaOpts = N.call(this), R.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && A.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), v.call(this), R.validateFormats = w;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: D, schemaId: M } = this.opts;
        let w = y;
        M === "id" && (w = { ...y }, w.id = w.$id, delete w.$id), D && R && this.addMetaSchema(w, w[M], !1);
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
        async function w(Z, P) {
          await x.call(this, Z.$schema);
          const O = this._addSchema(Z, P);
          return O.validate || z.call(this, O);
        }
        async function x(Z) {
          Z && !this.getSchema(Z) && await w.call(this, { $ref: Z }, !0);
        }
        async function z(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (P) {
            if (!(P instanceof i.default))
              throw P;
            return W.call(this, P), await G.call(this, P.missingSchema), z.call(this, Z);
          }
        }
        function W({ missingSchema: Z, missingRef: P }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${P} cannot be resolved`);
        }
        async function G(Z) {
          const P = await ee.call(this, Z);
          this.refs[Z] || await x.call(this, P.$schema), this.refs[Z] || this.addSchema(P, Z, D);
        }
        async function ee(Z) {
          const P = this._loading[Z];
          if (P)
            return P;
          try {
            return await (this._loading[Z] = M(Z));
          } finally {
            delete this._loading[Z];
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
        let x;
        if (typeof R == "object") {
          const { schemaId: z } = this.opts;
          if (x = R[z], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${z} must be string`);
        }
        return D = (0, c.normalizeId)(D || x), this._checkUnique(D), this.schemas[D] = this._addSchema(R, M, D, w, !0), this;
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
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
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
          const { schemaId: M } = this.opts, w = new s.SchemaEnv({ schema: {}, schemaId: M });
          if (D = s.resolveSchema.call(this, w, R), !D)
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
            return M && (M = (0, c.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
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
        if (U.call(this, M, D), !D)
          return (0, h.eachItem)(M, (x) => Y.call(this, x)), this;
        re.call(this, D);
        const w = {
          ...D,
          type: (0, f.getJSONTypes)(D.type),
          schemaType: (0, f.getJSONTypes)(D.schemaType)
        };
        return (0, h.eachItem)(M, w.type.length === 0 ? (x) => Y.call(this, x, w) : (x) => w.type.forEach((z) => Y.call(this, x, w, z))), this;
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
          const w = M.rules.findIndex((x) => x.keyword === R);
          w >= 0 && M.rules.splice(w, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[R] = D, this;
      }
      errorsText(R = this.errors, { separator: D = ", ", dataVar: M = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((w) => `${M}${w.instancePath} ${w.message}`).reduce((w, x) => w + D + x);
      }
      $dataMetaSchema(R, D) {
        const M = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const w of D) {
          const x = w.split("/").slice(1);
          let z = R;
          for (const W of x)
            z = z[W];
          for (const W in M) {
            const G = M[W];
            if (typeof G != "object")
              continue;
            const { $data: ee } = G.definition, Z = z[W];
            ee && Z && (z[W] = Q(Z));
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
      _addSchema(R, D, M, w = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let z;
        const { schemaId: W } = this.opts;
        if (typeof R == "object")
          z = R[W];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let G = this._cache.get(R);
        if (G !== void 0)
          return G;
        M = (0, c.normalizeId)(z || M);
        const ee = c.getSchemaRefs.call(this, R, M);
        return G = new s.SchemaEnv({ schema: R, schemaId: W, meta: D, baseId: M, localRefs: ee }), this._cache.set(G.schema, G), x && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = G), w && this.validateSchema(R, !0), G;
      }
      _checkUnique(R) {
        if (this.schemas[R] || this.refs[R])
          throw new Error(`schema with key or id "${R}" already exists`);
      }
      _compileSchemaEnv(R) {
        if (R.meta ? this._compileMetaSchema(R) : s.compileSchema.call(this, R), !R.validate)
          throw new Error("ajv implementation error");
        return R.validate;
      }
      _compileMetaSchema(R) {
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, R);
        } finally {
          this.opts = D;
        }
      }
    }
    k.ValidationError = r.default, k.MissingRefError = i.default, e.default = k;
    function l(q, R, D, M = "error") {
      for (const w in q) {
        const x = w;
        x in R && this.logger[M](`${D}: option ${w}. ${q[x]}`);
      }
    }
    function u(q) {
      return q = (0, c.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function v() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const R in q)
            this.addSchema(q[R], R);
    }
    function E() {
      for (const q in this.opts.formats) {
        const R = this.opts.formats[q];
        R && this.addFormat(q, R);
      }
    }
    function A(q) {
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
    function N() {
      const q = { ...this.opts };
      for (const R of S)
        delete q[R];
      return q;
    }
    const F = { log() {
    }, warn() {
    }, error() {
    } };
    function C(q) {
      if (q === !1)
        return F;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const j = /^[a-z_$][a-z0-9_$:-]*$/i;
    function U(q, R) {
      const { RULES: D } = this;
      if ((0, h.eachItem)(q, (M) => {
        if (D.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!j.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Y(q, R, D) {
      var M;
      const w = R?.post;
      if (D && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let z = w ? x.post : x.rules.find(({ type: G }) => G === D);
      if (z || (z = { type: D, rules: [] }, x.rules.push(z)), x.keywords[q] = !0, !R)
        return;
      const W = {
        keyword: q,
        definition: {
          ...R,
          type: (0, f.getJSONTypes)(R.type),
          schemaType: (0, f.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? H.call(this, z, W, R.before) : z.rules.push(W), x.all[q] = W, (M = R.implements) === null || M === void 0 || M.forEach((G) => this.addKeyword(G));
    }
    function H(q, R, D) {
      const M = q.rules.findIndex((w) => w.keyword === D);
      M >= 0 ? q.rules.splice(M, 0, R) : (q.rules.push(R), this.logger.warn(`rule ${D} is not defined`));
    }
    function re(q) {
      let { metaSchema: R } = q;
      R !== void 0 && (q.$data && this.opts.$data && (R = Q(R)), q.validateSchema = this.compile(R, !0));
    }
    const V = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Q(q) {
      return { anyOf: [q, V] };
    }
  })(Jn)), Jn;
}
var qt = {}, Vt = {}, Lt = {}, Po;
function Da() {
  if (Po) return Lt;
  Po = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Lt.default = e, Lt;
}
var Ue = {}, Ao;
function Nr() {
  if (Ao) return Ue;
  Ao = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.callRef = Ue.getValidate = void 0;
  const e = /* @__PURE__ */ Kn(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ ne(), r = /* @__PURE__ */ Ne(), i = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ ie(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(f) {
      const { gen: h, schema: y, it: $ } = f, { baseId: b, schemaEnv: S, validateName: _, opts: g, self: p } = $, { root: d } = S;
      if ((y === "#" || y === "#/") && b === d.baseId)
        return k();
      const m = i.resolveRef.call(p, d, b, y);
      if (m === void 0)
        throw new e.default($.opts.uriResolver, b, y);
      if (m instanceof i.SchemaEnv)
        return l(m);
      return u(m);
      function k() {
        if (S === d)
          return c(f, _, S, S.$async);
        const v = h.scopeValue("root", { ref: d });
        return c(f, (0, n._)`${v}.validate`, d, d.$async);
      }
      function l(v) {
        const E = a(f, v);
        c(f, E, v, v.$async);
      }
      function u(v) {
        const E = h.scopeValue("schema", g.code.source === !0 ? { ref: v, code: (0, n.stringify)(v) } : { ref: v }), A = h.name("valid"), N = f.subschema({
          schema: v,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: y
        }, A);
        f.mergeEvaluated(N), f.ok(A);
      }
    }
  };
  function a(f, h) {
    const { gen: y } = f;
    return h.validate ? y.scopeValue("validate", { ref: h.validate }) : (0, n._)`${y.scopeValue("wrapper", { ref: h })}.validate`;
  }
  Ue.getValidate = a;
  function c(f, h, y, $) {
    const { gen: b, it: S } = f, { allErrors: _, schemaEnv: g, opts: p } = S, d = p.passContext ? r.default.this : n.nil;
    $ ? m() : k();
    function m() {
      if (!g.$async)
        throw new Error("async schema referenced by sync schema");
      const v = b.let("valid");
      b.try(() => {
        b.code((0, n._)`await ${(0, t.callValidateCode)(f, h, d)}`), u(h), _ || b.assign(v, !0);
      }, (E) => {
        b.if((0, n._)`!(${E} instanceof ${S.ValidationError})`, () => b.throw(E)), l(E), _ || b.assign(v, !1);
      }), f.ok(v);
    }
    function k() {
      f.result((0, t.callValidateCode)(f, h, d), () => u(h), () => l(h));
    }
    function l(v) {
      const E = (0, n._)`${v}.errors`;
      b.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${E} : ${r.default.vErrors}.concat(${E})`), b.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function u(v) {
      var E;
      if (!S.opts.unevaluated)
        return;
      const A = (E = y?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (S.props !== !0)
        if (A && !A.dynamicProps)
          A.props !== void 0 && (S.props = o.mergeEvaluated.props(b, A.props, S.props));
        else {
          const N = b.var("props", (0, n._)`${v}.evaluated.props`);
          S.props = o.mergeEvaluated.props(b, N, S.props, n.Name);
        }
      if (S.items !== !0)
        if (A && !A.dynamicItems)
          A.items !== void 0 && (S.items = o.mergeEvaluated.items(b, A.items, S.items));
        else {
          const N = b.var("items", (0, n._)`${v}.evaluated.items`);
          S.items = o.mergeEvaluated.items(b, N, S.items, n.Name);
        }
    }
  }
  return Ue.callRef = c, Ue.default = s, Ue;
}
var Ro;
function qa() {
  if (Ro) return Vt;
  Ro = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Da(), t = /* @__PURE__ */ Nr(), n = [
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
var Bt = {}, Ut = {}, No;
function Va() {
  if (No) return Ut;
  No = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: o, schemaCode: s }) => (0, e.str)`must be ${n[o].okStr} ${s}`,
    params: ({ keyword: o, schemaCode: s }) => (0, e._)`{comparison: ${n[o].okStr}, limit: ${s}}`
  }, i = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(o) {
      const { keyword: s, data: a, schemaCode: c } = o;
      o.fail$data((0, e._)`${a} ${n[s].fail} ${c} || isNaN(${a})`);
    }
  };
  return Ut.default = i, Ut;
}
var Kt = {}, Mo;
function La() {
  if (Mo) return Kt;
  Mo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: i, data: o, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, f = i.let("res"), h = c ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${c}` : (0, e._)`${f} !== parseInt(${f})`;
      r.fail$data((0, e._)`(${s} === 0 || (${f} = ${o}/${s}, ${h}))`);
    }
  };
  return Kt.default = n, Kt;
}
var Ht = {}, Gt = {}, Fo;
function Ba() {
  if (Fo) return Gt;
  Fo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return Gt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Gt;
}
var Oo;
function Ua() {
  if (Oo) return Ht;
  Oo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ba(), i = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: s }) {
        const a = o === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${s} characters`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: s, data: a, schemaCode: c, it: f } = o, h = s === "maxLength" ? e.operators.GT : e.operators.LT, y = f.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${y} ${h} ${c}`);
    }
  };
  return Ht.default = i, Ht;
}
var Wt = {}, To;
function Ka() {
  if (To) return Wt;
  To = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ne(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schema: f, schemaCode: h, it: y } = o, $ = y.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: b } = y.opts.code, S = b.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, b), _ = s.let("valid");
        s.try(() => s.assign(_, (0, n._)`${S}(${h}, ${$}).test(${a})`), () => s.assign(_, !1)), o.fail$data((0, n._)`!${_}`);
      } else {
        const b = (0, e.usePattern)(o, f);
        o.fail$data((0, n._)`!${b}.test(${a})`);
      }
    }
  };
  return Wt.default = i, Wt;
}
var Jt = {}, jo;
function Ha() {
  if (jo) return Jt;
  jo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const o = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${i} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: o, schemaCode: s } = r, a = i === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${o}).length ${a} ${s}`);
    }
  };
  return Jt.default = n, Jt;
}
var Yt = {}, zo;
function Ga() {
  if (zo) return Yt;
  zo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: c, data: f, $data: h, it: y } = o, { opts: $ } = y;
      if (!h && a.length === 0)
        return;
      const b = a.length >= $.loopRequired;
      if (y.allErrors ? S() : _(), $.strictRequired) {
        const d = o.parentSchema.properties, { definedProperties: m } = o.it;
        for (const k of a)
          if (d?.[k] === void 0 && !m.has(k)) {
            const l = y.schemaEnv.baseId + y.errSchemaPath, u = `required property "${k}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(y, u, y.opts.strictRequired);
          }
      }
      function S() {
        if (b || h)
          o.block$data(t.nil, g);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(o, d);
      }
      function _() {
        const d = s.let("missing");
        if (b || h) {
          const m = s.let("valid", !0);
          o.block$data(m, () => p(d, m)), o.ok(m);
        } else
          s.if((0, e.checkMissingProp)(o, a, d)), (0, e.reportMissingProp)(o, d), s.else();
      }
      function g() {
        s.forOf("prop", c, (d) => {
          o.setParams({ missingProperty: d }), s.if((0, e.noPropertyInData)(s, f, d, $.ownProperties), () => o.error());
        });
      }
      function p(d, m) {
        o.setParams({ missingProperty: d }), s.forOf(d, c, () => {
          s.assign(m, (0, e.propertyInData)(s, f, d, $.ownProperties)), s.if((0, t.not)(m), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Yt.default = i, Yt;
}
var Xt = {}, Io;
function Wa() {
  if (Io) return Xt;
  Io = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: i }) {
        const o = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${i} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: i, data: o, schemaCode: s } = r, a = i === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${o}.length ${a} ${s}`);
    }
  };
  return Xt.default = n, Xt;
}
var Zt = {}, Qt = {}, Do;
function Mr() {
  if (Do) return Qt;
  Do = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = ps();
  return e.code = 'require("ajv/dist/runtime/equal").default', Qt.default = e, Qt;
}
var qo;
function Ja() {
  if (qo) return Zt;
  qo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Mr(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: f, schema: h, parentSchema: y, schemaCode: $, it: b } = s;
      if (!f && !h)
        return;
      const S = a.let("valid"), _ = y.items ? (0, e.getSchemaTypes)(y.items) : [];
      s.block$data(S, g, (0, t._)`${$} === false`), s.ok(S);
      function g() {
        const k = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: k, j: l }), a.assign(S, !0), a.if((0, t._)`${k} > 1`, () => (p() ? d : m)(k, l));
      }
      function p() {
        return _.length > 0 && !_.some((k) => k === "object" || k === "array");
      }
      function d(k, l) {
        const u = a.name("item"), v = (0, e.checkDataTypes)(_, u, b.opts.strictNumbers, e.DataType.Wrong), E = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${k}--;`, () => {
          a.let(u, (0, t._)`${c}[${k}]`), a.if(v, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${u} == "string"`, (0, t._)`${u} += "_"`), a.if((0, t._)`typeof ${E}[${u}] == "number"`, () => {
            a.assign(l, (0, t._)`${E}[${u}]`), s.error(), a.assign(S, !1).break();
          }).code((0, t._)`${E}[${u}] = ${k}`);
        });
      }
      function m(k, l) {
        const u = (0, n.useFunc)(a, r.default), v = a.name("outer");
        a.label(v).for((0, t._)`;${k}--;`, () => a.for((0, t._)`${l} = ${k}; ${l}--;`, () => a.if((0, t._)`${u}(${c}[${k}], ${c}[${l}])`, () => {
          s.error(), a.assign(S, !1).break(v);
        })));
      }
    }
  };
  return Zt.default = o, Zt;
}
var en = {}, Vo;
function Ya() {
  if (Vo) return en;
  Vo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Mr(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schemaCode: f, schema: h } = o;
      c || h && typeof h == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${f})`) : o.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return en.default = i, en;
}
var tn = {}, Lo;
function Xa() {
  if (Lo) return tn;
  Lo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Mr(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: c, schema: f, schemaCode: h, it: y } = o;
      if (!c && f.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = f.length >= y.opts.loopEnum;
      let b;
      const S = () => b ?? (b = (0, t.useFunc)(s, n.default));
      let _;
      if ($ || c)
        _ = s.let("valid"), o.block$data(_, g);
      else {
        if (!Array.isArray(f))
          throw new Error("ajv implementation error");
        const d = s.const("vSchema", h);
        _ = (0, e.or)(...f.map((m, k) => p(d, k)));
      }
      o.pass(_);
      function g() {
        s.assign(_, !1), s.forOf("v", h, (d) => s.if((0, e._)`${S()}(${a}, ${d})`, () => s.assign(_, !0).break()));
      }
      function p(d, m) {
        const k = f[m];
        return typeof k == "object" && k !== null ? (0, e._)`${S()}(${a}, ${d}[${m}])` : (0, e._)`${a} === ${k}`;
      }
    }
  };
  return tn.default = i, tn;
}
var Bo;
function Za() {
  if (Bo) return Bt;
  Bo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Va(), t = /* @__PURE__ */ La(), n = /* @__PURE__ */ Ua(), r = /* @__PURE__ */ Ka(), i = /* @__PURE__ */ Ha(), o = /* @__PURE__ */ Ga(), s = /* @__PURE__ */ Wa(), a = /* @__PURE__ */ Ja(), c = /* @__PURE__ */ Ya(), f = /* @__PURE__ */ Xa(), h = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    i.default,
    o.default,
    // array
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    f.default
  ];
  return Bt.default = h, Bt;
}
var nn = {}, st = {}, Uo;
function ms() {
  if (Uo) return st;
  Uo = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: s, it: a } = o, { items: c } = s;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      i(o, c);
    }
  };
  function i(o, s) {
    const { gen: a, schema: c, data: f, keyword: h, it: y } = o;
    y.items = !0;
    const $ = a.const("len", (0, e._)`${f}.length`);
    if (c === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${$} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(y, c)) {
      const S = a.var("valid", (0, e._)`${$} <= ${s.length}`);
      a.if((0, e.not)(S), () => b(S)), o.ok(S);
    }
    function b(S) {
      a.forRange("i", s.length, $, (_) => {
        o.subschema({ keyword: h, dataProp: _, dataPropType: t.Type.Num }, S), y.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return st.validateAdditionalItems = i, st.default = r, st;
}
var rn = {}, at = {}, Ko;
function gs() {
  if (Ko) return at;
  Ko = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.validateTuple = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Me(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(o) {
      const { schema: s, it: a } = o;
      if (Array.isArray(s))
        return i(o, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && o.ok((0, n.validateArray)(o));
    }
  };
  function i(o, s, a = o.schema) {
    const { gen: c, parentSchema: f, data: h, keyword: y, it: $ } = o;
    _(f), $.opts.unevaluated && a.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(c, a.length, $.items));
    const b = c.name("valid"), S = c.const("len", (0, e._)`${h}.length`);
    a.forEach((g, p) => {
      (0, t.alwaysValidSchema)($, g) || (c.if((0, e._)`${S} > ${p}`, () => o.subschema({
        keyword: y,
        schemaProp: p,
        dataProp: p
      }, b)), o.ok(b));
    });
    function _(g) {
      const { opts: p, errSchemaPath: d } = $, m = a.length, k = m === g.minItems && (m === g.maxItems || g[s] === !1);
      if (p.strictTuples && !k) {
        const l = `"${y}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)($, l, p.strictTuples);
      }
    }
  }
  return at.validateTuple = i, at.default = r, at;
}
var Ho;
function Qa() {
  if (Ho) return rn;
  Ho = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ gs(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return rn.default = t, rn;
}
var on = {}, Go;
function ec() {
  if (Go) return on;
  Go = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ ms(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: f } = s, { prefixItems: h } = c;
      f.items = !0, !(0, t.alwaysValidSchema)(f, a) && (h ? (0, r.validateAdditionalItems)(s, h) : s.ok((0, n.validateArray)(s)));
    }
  };
  return on.default = o, on;
}
var sn = {}, Wo;
function tc() {
  if (Wo) return sn;
  Wo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: i, max: o } }) => o === void 0 ? (0, e.str)`must contain at least ${i} valid item(s)` : (0, e.str)`must contain at least ${i} and no more than ${o} valid item(s)`,
      params: ({ params: { min: i, max: o } }) => o === void 0 ? (0, e._)`{minContains: ${i}}` : (0, e._)`{minContains: ${i}, maxContains: ${o}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, data: c, it: f } = i;
      let h, y;
      const { minContains: $, maxContains: b } = a;
      f.opts.next ? (h = $ === void 0 ? 1 : $, y = b) : h = 1;
      const S = o.const("len", (0, e._)`${c}.length`);
      if (i.setParams({ min: h, max: y }), y === void 0 && h === 0) {
        (0, t.checkStrictMode)(f, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (y !== void 0 && h > y) {
        (0, t.checkStrictMode)(f, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(f, s)) {
        let m = (0, e._)`${S} >= ${h}`;
        y !== void 0 && (m = (0, e._)`${m} && ${S} <= ${y}`), i.pass(m);
        return;
      }
      f.items = !0;
      const _ = o.name("valid");
      y === void 0 && h === 1 ? p(_, () => o.if(_, () => o.break())) : h === 0 ? (o.let(_, !0), y !== void 0 && o.if((0, e._)`${c}.length > 0`, g)) : (o.let(_, !1), g()), i.result(_, () => i.reset());
      function g() {
        const m = o.name("_valid"), k = o.let("count", 0);
        p(m, () => o.if(m, () => d(k)));
      }
      function p(m, k) {
        o.forRange("i", 0, S, (l) => {
          i.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), k();
        });
      }
      function d(m) {
        o.code((0, e._)`${m}++`), y === void 0 ? o.if((0, e._)`${m} >= ${h}`, () => o.assign(_, !0).break()) : (o.if((0, e._)`${m} > ${y}`, () => o.assign(_, !1).break()), h === 1 ? o.assign(_, !0) : o.if((0, e._)`${m} >= ${h}`, () => o.assign(_, !0)));
      }
    }
  };
  return sn.default = r, sn;
}
var or = {}, Jo;
function Fr() {
  return Jo || (Jo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Me();
    e.error = {
      message: ({ params: { property: c, depsCount: f, deps: h } }) => {
        const y = f === 1 ? "property" : "properties";
        return (0, t.str)`must have ${y} ${h} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: f, deps: h, missingProperty: y } }) => (0, t._)`{property: ${c},
    missingProperty: ${y},
    depsCount: ${f},
    deps: ${h}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [f, h] = o(c);
        s(c, f), a(c, h);
      }
    };
    function o({ schema: c }) {
      const f = {}, h = {};
      for (const y in c) {
        if (y === "__proto__")
          continue;
        const $ = Array.isArray(c[y]) ? f : h;
        $[y] = c[y];
      }
      return [f, h];
    }
    function s(c, f = c.schema) {
      const { gen: h, data: y, it: $ } = c;
      if (Object.keys(f).length === 0)
        return;
      const b = h.let("missing");
      for (const S in f) {
        const _ = f[S];
        if (_.length === 0)
          continue;
        const g = (0, r.propertyInData)(h, y, S, $.opts.ownProperties);
        c.setParams({
          property: S,
          depsCount: _.length,
          deps: _.join(", ")
        }), $.allErrors ? h.if(g, () => {
          for (const p of _)
            (0, r.checkReportMissingProp)(c, p);
        }) : (h.if((0, t._)`${g} && (${(0, r.checkMissingProp)(c, _, b)})`), (0, r.reportMissingProp)(c, b), h.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, f = c.schema) {
      const { gen: h, data: y, keyword: $, it: b } = c, S = h.name("valid");
      for (const _ in f)
        (0, n.alwaysValidSchema)(b, f[_]) || (h.if(
          (0, r.propertyInData)(h, y, _, b.opts.ownProperties),
          () => {
            const g = c.subschema({ keyword: $, schemaProp: _ }, S);
            c.mergeValidEvaluated(g, S);
          },
          () => h.var(S, !0)
          // TODO var
        ), c.ok(S));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(or)), or;
}
var an = {}, Yo;
function nc() {
  if (Yo) return an;
  Yo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: c } = i;
      if ((0, t.alwaysValidSchema)(c, s))
        return;
      const f = o.name("valid");
      o.forIn("key", a, (h) => {
        i.setParams({ propertyName: h }), i.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, f), o.if((0, e.not)(f), () => {
          i.error(!0), c.allErrors || o.break();
        });
      }), i.ok(f);
    }
  };
  return an.default = r, an;
}
var cn = {}, Xo;
function ys() {
  if (Xo) return cn;
  Xo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ ie(), o = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: s }) => (0, t._)`{additionalProperty: ${s.additionalProperty}}`
    },
    code(s) {
      const { gen: a, schema: c, parentSchema: f, data: h, errsCount: y, it: $ } = s;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: b, opts: S } = $;
      if ($.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)($, c))
        return;
      const _ = (0, e.allSchemaProperties)(f.properties), g = (0, e.allSchemaProperties)(f.patternProperties);
      p(), s.ok((0, t._)`${y} === ${n.default.errors}`);
      function p() {
        a.forIn("key", h, (u) => {
          !_.length && !g.length ? k(u) : a.if(d(u), () => k(u));
        });
      }
      function d(u) {
        let v;
        if (_.length > 8) {
          const E = (0, r.schemaRefOrVal)($, f.properties, "properties");
          v = (0, e.isOwnProperty)(a, E, u);
        } else _.length ? v = (0, t.or)(..._.map((E) => (0, t._)`${u} === ${E}`)) : v = t.nil;
        return g.length && (v = (0, t.or)(v, ...g.map((E) => (0, t._)`${(0, e.usePattern)(s, E)}.test(${u})`))), (0, t.not)(v);
      }
      function m(u) {
        a.code((0, t._)`delete ${h}[${u}]`);
      }
      function k(u) {
        if (S.removeAdditional === "all" || S.removeAdditional && c === !1) {
          m(u);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: u }), s.error(), b || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)($, c)) {
          const v = a.name("valid");
          S.removeAdditional === "failing" ? (l(u, v, !1), a.if((0, t.not)(v), () => {
            s.reset(), m(u);
          })) : (l(u, v), b || a.if((0, t.not)(v), () => a.break()));
        }
      }
      function l(u, v, E) {
        const A = {
          keyword: "additionalProperties",
          dataProp: u,
          dataPropType: r.Type.Str
        };
        E === !1 && Object.assign(A, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(A, v);
      }
    }
  };
  return cn.default = o, cn;
}
var ln = {}, Zo;
function rc() {
  if (Zo) return ln;
  Zo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Un(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ys(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: c, data: f, it: h } = o;
      h.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(h, r.default, "additionalProperties"));
      const y = (0, t.allSchemaProperties)(a);
      for (const g of y)
        h.definedProperties.add(g);
      h.opts.unevaluated && y.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(s, (0, n.toHash)(y), h.props));
      const $ = y.filter((g) => !(0, n.alwaysValidSchema)(h, a[g]));
      if ($.length === 0)
        return;
      const b = s.name("valid");
      for (const g of $)
        S(g) ? _(g) : (s.if((0, t.propertyInData)(s, f, g, h.opts.ownProperties)), _(g), h.allErrors || s.else().var(b, !0), s.endIf()), o.it.definedProperties.add(g), o.ok(b);
      function S(g) {
        return h.opts.useDefaults && !h.compositeRule && a[g].default !== void 0;
      }
      function _(g) {
        o.subschema({
          keyword: "properties",
          schemaProp: g,
          dataProp: g
        }, b);
      }
    }
  };
  return ln.default = i, ln;
}
var dn = {}, Qo;
function oc() {
  if (Qo) return dn;
  Qo = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ie(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: c, parentSchema: f, it: h } = o, { opts: y } = h, $ = (0, e.allSchemaProperties)(a), b = $.filter((k) => (0, n.alwaysValidSchema)(h, a[k]));
      if ($.length === 0 || b.length === $.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const S = y.strictSchema && !y.allowMatchingProperties && f.properties, _ = s.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(s, h.props));
      const { props: g } = h;
      p();
      function p() {
        for (const k of $)
          S && d(k), h.allErrors ? m(k) : (s.var(_, !0), m(k), s.if(_));
      }
      function d(k) {
        for (const l in S)
          new RegExp(k).test(l) && (0, n.checkStrictMode)(h, `property ${l} matches pattern ${k} (use allowMatchingProperties)`);
      }
      function m(k) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(o, k)}.test(${l})`, () => {
            const u = b.includes(k);
            u || o.subschema({
              keyword: "patternProperties",
              schemaProp: k,
              dataProp: l,
              dataPropType: r.Type.Str
            }, _), h.opts.unevaluated && g !== !0 ? s.assign((0, t._)`${g}[${l}]`, !0) : !u && !h.allErrors && s.if((0, t.not)(_), () => s.break());
          });
        });
      }
    }
  };
  return dn.default = i, dn;
}
var un = {}, ei;
function ic() {
  if (ei) return un;
  ei = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if ((0, e.alwaysValidSchema)(o, i)) {
        n.fail();
        return;
      }
      const s = r.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, s), n.failResult(s, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return un.default = t, un;
}
var fn = {}, ti;
function sc() {
  if (ti) return fn;
  ti = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Me()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return fn.default = t, fn;
}
var pn = {}, ni;
function ac() {
  if (ni) return pn;
  ni = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, it: c } = i;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const f = s, h = o.let("valid", !1), y = o.let("passing", null), $ = o.name("_valid");
      i.setParams({ passing: y }), o.block(b), i.result(h, () => i.reset(), () => i.error(!0));
      function b() {
        f.forEach((S, _) => {
          let g;
          (0, t.alwaysValidSchema)(c, S) ? o.var($, !0) : g = i.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, $), _ > 0 && o.if((0, e._)`${$} && ${h}`).assign(h, !1).assign(y, (0, e._)`[${y}, ${_}]`).else(), o.if($, () => {
            o.assign(h, !0), o.assign(y, _), g && i.mergeEvaluated(g, e.Name);
          });
        });
      }
    }
  };
  return pn.default = r, pn;
}
var hn = {}, ri;
function cc() {
  if (ri) return hn;
  ri = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      i.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const f = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(f);
      });
    }
  };
  return hn.default = t, hn;
}
var mn = {}, oi;
function lc() {
  if (oi) return mn;
  oi = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: s, parentSchema: a, it: c } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const f = i(c, "then"), h = i(c, "else");
      if (!f && !h)
        return;
      const y = s.let("valid", !0), $ = s.name("_valid");
      if (b(), o.reset(), f && h) {
        const _ = s.let("ifClause");
        o.setParams({ ifClause: _ }), s.if($, S("then", _), S("else", _));
      } else f ? s.if($, S("then")) : s.if((0, e.not)($), S("else"));
      o.pass(y, () => o.error(!0));
      function b() {
        const _ = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        o.mergeEvaluated(_);
      }
      function S(_, g) {
        return () => {
          const p = o.subschema({ keyword: _ }, $);
          s.assign(y, $), o.mergeValidEvaluated(p, y), g ? s.assign(g, (0, e._)`${_}`) : o.setParams({ ifClause: _ });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return mn.default = r, mn;
}
var gn = {}, ii;
function dc() {
  if (ii) return gn;
  ii = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return gn.default = t, gn;
}
var si;
function uc() {
  if (si) return nn;
  si = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ms(), t = /* @__PURE__ */ Qa(), n = /* @__PURE__ */ gs(), r = /* @__PURE__ */ ec(), i = /* @__PURE__ */ tc(), o = /* @__PURE__ */ Fr(), s = /* @__PURE__ */ nc(), a = /* @__PURE__ */ ys(), c = /* @__PURE__ */ rc(), f = /* @__PURE__ */ oc(), h = /* @__PURE__ */ ic(), y = /* @__PURE__ */ sc(), $ = /* @__PURE__ */ ac(), b = /* @__PURE__ */ cc(), S = /* @__PURE__ */ lc(), _ = /* @__PURE__ */ dc();
  function g(p = !1) {
    const d = [
      // any
      h.default,
      y.default,
      $.default,
      b.default,
      S.default,
      _.default,
      // object
      s.default,
      a.default,
      o.default,
      c.default,
      f.default
    ];
    return p ? d.push(t.default, r.default) : d.push(e.default, n.default), d.push(i.default), d;
  }
  return nn.default = g, nn;
}
var yn = {}, ct = {}, ai;
function vs() {
  if (ai) return ct;
  ai = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Hn(), r = /* @__PURE__ */ Nr(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, c) {
    const { gen: f, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[c] = !0;
    const y = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, $ = h.errSchemaPath === "#" ? h.validateName : s(a);
    f.if((0, e._)`!${y}`, () => f.assign(y, $));
  }
  ct.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: c, schema: f, self: h } = a.it, { root: y, baseId: $, localRefs: b, meta: S } = c.root, { schemaId: _ } = h.opts, g = new n.SchemaEnv({ schema: f, schemaId: _, root: y, baseId: $, localRefs: b, meta: S });
    return n.compileSchema.call(h, g), (0, r.getValidate)(a, g);
  }
  return ct.default = i, ct;
}
var lt = {}, ci;
function $s() {
  if (ci) return lt;
  ci = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Nr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: c, it: f } = o;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const h = s.slice(1);
    if (f.allErrors)
      y();
    else {
      const b = a.let("valid", !1);
      y(b), o.ok(b);
    }
    function y(b) {
      if (f.schemaEnv.root.dynamicAnchors[h]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        a.if(S, $(S, b), $(f.validateName, b));
      } else
        $(f.validateName, b)();
    }
    function $(b, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(o, b), a.let(S, !0);
      }) : () => (0, n.callRef)(o, b);
    }
  }
  return lt.dynamicRef = i, lt.default = r, lt;
}
var vn = {}, li;
function fc() {
  if (li) return vn;
  li = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vs(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return vn.default = n, vn;
}
var $n = {}, di;
function pc() {
  if (di) return $n;
  di = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $s(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return $n.default = t, $n;
}
var ui;
function hc() {
  if (ui) return yn;
  ui = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vs(), t = /* @__PURE__ */ $s(), n = /* @__PURE__ */ fc(), r = /* @__PURE__ */ pc(), i = [e.default, t.default, n.default, r.default];
  return yn.default = i, yn;
}
var bn = {}, wn = {}, fi;
function mc() {
  if (fi) return wn;
  fi = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return wn.default = t, wn;
}
var _n = {}, pi;
function gc() {
  if (pi) return _n;
  pi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return _n.default = t, _n;
}
var Sn = {}, hi;
function yc() {
  if (hi) return Sn;
  hi = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return Sn.default = t, Sn;
}
var mi;
function vc() {
  if (mi) return bn;
  mi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ mc(), t = /* @__PURE__ */ gc(), n = /* @__PURE__ */ yc(), r = [e.default, t.default, n.default];
  return bn.default = r, bn;
}
var kn = {}, Cn = {}, gi;
function $c() {
  if (gi) return Cn;
  gi = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ne(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: c, errsCount: f, it: h } = o;
      if (!f)
        throw new Error("ajv implementation error");
      const { allErrors: y, props: $ } = h;
      $ instanceof e.Name ? s.if((0, e._)`${$} !== true`, () => s.forIn("key", c, (g) => s.if(S($, g), () => b(g)))) : $ !== !0 && s.forIn("key", c, (g) => $ === void 0 ? b(g) : s.if(_($, g), () => b(g))), h.props = !0, o.ok((0, e._)`${f} === ${n.default.errors}`);
      function b(g) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: g }), o.error(), y || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, a)) {
          const p = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: g,
            dataPropType: t.Type.Str
          }, p), y || s.if((0, e.not)(p), () => s.break());
        }
      }
      function S(g, p) {
        return (0, e._)`!${g} || !${g}[${p}]`;
      }
      function _(g, p) {
        const d = [];
        for (const m in g)
          g[m] === !0 && d.push((0, e._)`${p} !== ${m}`);
        return (0, e.and)(...d);
      }
    }
  };
  return Cn.default = i, Cn;
}
var En = {}, yi;
function bc() {
  if (yi) return En;
  yi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: c } = i, f = c.items || 0;
      if (f === !0)
        return;
      const h = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: f }), i.fail((0, e._)`${h} > ${f}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const $ = o.var("valid", (0, e._)`${h} <= ${f}`);
        o.if((0, e.not)($), () => y($, f)), i.ok($);
      }
      c.items = !0;
      function y($, b) {
        o.forRange("i", b, h, (S) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, $), c.allErrors || o.if((0, e.not)($), () => o.break());
        });
      }
    }
  };
  return En.default = r, En;
}
var vi;
function wc() {
  if (vi) return kn;
  vi = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $c(), t = /* @__PURE__ */ bc(), n = [e.default, t.default];
  return kn.default = n, kn;
}
var xn = {}, Pn = {}, $i;
function _c() {
  if ($i) return Pn;
  $i = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, i) {
      const { gen: o, data: s, $data: a, schema: c, schemaCode: f, it: h } = r, { opts: y, errSchemaPath: $, schemaEnv: b, self: S } = h;
      if (!y.validateFormats)
        return;
      a ? _() : g();
      function _() {
        const p = o.scopeValue("formats", {
          ref: S.formats,
          code: y.code.formats
        }), d = o.const("fDef", (0, e._)`${p}[${f}]`), m = o.let("fType"), k = o.let("format");
        o.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => o.assign(m, (0, e._)`${d}.type || "string"`).assign(k, (0, e._)`${d}.validate`), () => o.assign(m, (0, e._)`"string"`).assign(k, d)), r.fail$data((0, e.or)(l(), u()));
        function l() {
          return y.strictSchema === !1 ? e.nil : (0, e._)`${f} && !${k}`;
        }
        function u() {
          const v = b.$async ? (0, e._)`(${d}.async ? await ${k}(${s}) : ${k}(${s}))` : (0, e._)`${k}(${s})`, E = (0, e._)`(typeof ${k} == "function" ? ${v} : ${k}.test(${s}))`;
          return (0, e._)`${k} && ${k} !== true && ${m} === ${i} && !${E}`;
        }
      }
      function g() {
        const p = S.formats[c];
        if (!p) {
          l();
          return;
        }
        if (p === !0)
          return;
        const [d, m, k] = u(p);
        d === i && r.pass(v());
        function l() {
          if (y.strictSchema === !1) {
            S.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${c}" ignored in schema at path "${$}"`;
          }
        }
        function u(E) {
          const A = E instanceof RegExp ? (0, e.regexpCode)(E) : y.code.formats ? (0, e._)`${y.code.formats}${(0, e.getProperty)(c)}` : void 0, N = o.scopeValue("formats", { key: c, ref: E, code: A });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${N}.validate`] : ["string", E, N];
        }
        function v() {
          if (typeof p == "object" && !(p instanceof RegExp) && p.async) {
            if (!b.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${k}(${s})`;
          }
          return typeof m == "function" ? (0, e._)`${k}(${s})` : (0, e._)`${k}.test(${s})`;
        }
      }
    }
  };
  return Pn.default = n, Pn;
}
var bi;
function Sc() {
  if (bi) return xn;
  bi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ _c()).default];
  return xn.default = t, xn;
}
var Ze = {}, wi;
function kc() {
  return wi || (wi = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.contentVocabulary = Ze.metadataVocabulary = void 0, Ze.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ze.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ze;
}
var _i;
function Cc() {
  if (_i) return qt;
  _i = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qa(), t = /* @__PURE__ */ Za(), n = /* @__PURE__ */ uc(), r = /* @__PURE__ */ hc(), i = /* @__PURE__ */ vc(), o = /* @__PURE__ */ wc(), s = /* @__PURE__ */ Sc(), a = /* @__PURE__ */ kc(), c = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    i.default,
    o.default
  ];
  return qt.default = c, qt;
}
var An = {}, St = {}, Si;
function Ec() {
  if (Si) return St;
  Si = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (St.DiscrError = e = {})), St;
}
var ki;
function xc() {
  if (ki) return An;
  ki = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ec(), n = /* @__PURE__ */ Hn(), r = /* @__PURE__ */ Kn(), i = /* @__PURE__ */ ie(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: f } }) => (0, e._)`{error: ${a}, tag: ${f}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: f, schema: h, parentSchema: y, it: $ } = a, { oneOf: b } = y;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = h.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!b)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = c.let("valid", !1), g = c.const("tag", (0, e._)`${f}${(0, e.getProperty)(S)}`);
      c.if((0, e._)`typeof ${g} == "string"`, () => p(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: g, tagName: S })), a.ok(_);
      function p() {
        const k = m();
        c.if(!1);
        for (const l in k)
          c.elseIf((0, e._)`${g} === ${l}`), c.assign(_, d(k[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: g, tagName: S }), c.endIf();
      }
      function d(k) {
        const l = c.name("valid"), u = a.subschema({ keyword: "oneOf", schemaProp: k }, l);
        return a.mergeEvaluated(u, e.Name), l;
      }
      function m() {
        var k;
        const l = {}, u = E(y);
        let v = !0;
        for (let F = 0; F < b.length; F++) {
          let C = b[F];
          if (C?.$ref && !(0, i.schemaHasRulesButRef)(C, $.self.RULES)) {
            const U = C.$ref;
            if (C = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, U), C instanceof n.SchemaEnv && (C = C.schema), C === void 0)
              throw new r.default($.opts.uriResolver, $.baseId, U);
          }
          const j = (k = C?.properties) === null || k === void 0 ? void 0 : k[S];
          if (typeof j != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          v = v && (u || E(C)), A(j, F);
        }
        if (!v)
          throw new Error(`discriminator: "${S}" must be required`);
        return l;
        function E({ required: F }) {
          return Array.isArray(F) && F.includes(S);
        }
        function A(F, C) {
          if (F.const)
            N(F.const, C);
          else if (F.enum)
            for (const j of F.enum)
              N(j, C);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function N(F, C) {
          if (typeof F != "string" || F in l)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          l[F] = C;
        }
      }
    }
  };
  return An.default = s, An;
}
var Rn = {};
const Pc = "https://json-schema.org/draft/2020-12/schema", Ac = "https://json-schema.org/draft/2020-12/schema", Rc = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Nc = "meta", Mc = "Core and Validation specifications meta-schema", Fc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Oc = ["object", "boolean"], Tc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", jc = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, zc = {
  $schema: Pc,
  $id: Ac,
  $vocabulary: Rc,
  $dynamicAnchor: Nc,
  title: Mc,
  allOf: Fc,
  type: Oc,
  $comment: Tc,
  properties: jc
}, Ic = "https://json-schema.org/draft/2020-12/schema", Dc = "https://json-schema.org/draft/2020-12/meta/applicator", qc = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Vc = "meta", Lc = "Applicator vocabulary meta-schema", Bc = ["object", "boolean"], Uc = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Kc = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Hc = {
  $schema: Ic,
  $id: Dc,
  $vocabulary: qc,
  $dynamicAnchor: Vc,
  title: Lc,
  type: Bc,
  properties: Uc,
  $defs: Kc
}, Gc = "https://json-schema.org/draft/2020-12/schema", Wc = "https://json-schema.org/draft/2020-12/meta/unevaluated", Jc = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Yc = "meta", Xc = "Unevaluated applicator vocabulary meta-schema", Zc = ["object", "boolean"], Qc = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, el = {
  $schema: Gc,
  $id: Wc,
  $vocabulary: Jc,
  $dynamicAnchor: Yc,
  title: Xc,
  type: Zc,
  properties: Qc
}, tl = "https://json-schema.org/draft/2020-12/schema", nl = "https://json-schema.org/draft/2020-12/meta/content", rl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, ol = "meta", il = "Content vocabulary meta-schema", sl = ["object", "boolean"], al = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, cl = {
  $schema: tl,
  $id: nl,
  $vocabulary: rl,
  $dynamicAnchor: ol,
  title: il,
  type: sl,
  properties: al
}, ll = "https://json-schema.org/draft/2020-12/schema", dl = "https://json-schema.org/draft/2020-12/meta/core", ul = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, fl = "meta", pl = "Core vocabulary meta-schema", hl = ["object", "boolean"], ml = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, gl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, yl = {
  $schema: ll,
  $id: dl,
  $vocabulary: ul,
  $dynamicAnchor: fl,
  title: pl,
  type: hl,
  properties: ml,
  $defs: gl
}, vl = "https://json-schema.org/draft/2020-12/schema", $l = "https://json-schema.org/draft/2020-12/meta/format-annotation", bl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, wl = "meta", _l = "Format vocabulary meta-schema for annotation results", Sl = ["object", "boolean"], kl = { format: { type: "string" } }, Cl = {
  $schema: vl,
  $id: $l,
  $vocabulary: bl,
  $dynamicAnchor: wl,
  title: _l,
  type: Sl,
  properties: kl
}, El = "https://json-schema.org/draft/2020-12/schema", xl = "https://json-schema.org/draft/2020-12/meta/meta-data", Pl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Al = "meta", Rl = "Meta-data vocabulary meta-schema", Nl = ["object", "boolean"], Ml = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Fl = {
  $schema: El,
  $id: xl,
  $vocabulary: Pl,
  $dynamicAnchor: Al,
  title: Rl,
  type: Nl,
  properties: Ml
}, Ol = "https://json-schema.org/draft/2020-12/schema", Tl = "https://json-schema.org/draft/2020-12/meta/validation", jl = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, zl = "meta", Il = "Validation vocabulary meta-schema", Dl = ["object", "boolean"], ql = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Vl = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ll = {
  $schema: Ol,
  $id: Tl,
  $vocabulary: jl,
  $dynamicAnchor: zl,
  title: Il,
  type: Dl,
  properties: ql,
  $defs: Vl
};
var Ci;
function Bl() {
  if (Ci) return Rn;
  Ci = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = zc, t = Hc, n = el, r = cl, i = yl, o = Cl, s = Fl, a = Ll, c = ["/properties"];
  function f(h) {
    return [
      e,
      t,
      n,
      r,
      i,
      y(this, o),
      s,
      y(this, a)
    ].forEach(($) => this.addMetaSchema($, void 0, !1)), this;
    function y($, b) {
      return h ? $.$dataMetaSchema(b, c) : b;
    }
  }
  return Rn.default = f, Rn;
}
var Ei;
function Ul() {
  return Ei || (Ei = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ia(), r = /* @__PURE__ */ Cc(), i = /* @__PURE__ */ xc(), o = /* @__PURE__ */ Bl(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(b = {}) {
        super({
          ...b,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: b, meta: S } = this.opts;
        S && (o.default.call(this, b), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ Un();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var f = /* @__PURE__ */ ne();
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
    var h = /* @__PURE__ */ Rr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var y = /* @__PURE__ */ Kn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return y.default;
    } });
  })(Tt, Tt.exports)), Tt.exports;
}
var Kl = /* @__PURE__ */ Ul();
const Hl = /* @__PURE__ */ _a(Kl), Gl = "https://json-schema.org/draft/2020-12/schema", Wl = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Jl = "gufe-viz payload", Yl = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Xl = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Zl = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Or = {
  $schema: Gl,
  $id: Wl,
  title: Jl,
  description: Yl,
  oneOf: Xl,
  $defs: Zl
}, Hf = [
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
], Tr = Or.$id, jr = new Hl({ allErrors: !0, strict: !1 });
jr.addSchema(Or, Tr);
const xi = jr.getSchema(Tr), bs = Object.entries(Or.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Gf = bs, zr = /* @__PURE__ */ new Map();
for (const e of bs) {
  const t = jr.getSchema(`${Tr}#/$defs/${e}`);
  t && zr.set(e, t);
}
const vr = { valid: !0, issues: [] };
function $r(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Ql(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? zr.get(t) : void 0;
  return n ? n(e) ? vr : { valid: !1, issues: $r(n.errors) } : xi(e) ? vr : { valid: !1, issues: $r(xi.errors) };
}
function Wf(e, t) {
  const n = zr.get(e);
  return n ? n(t) ? vr : { valid: !1, issues: $r(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function ed(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Ir = {
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
function ws(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Ir[t]) return td(t);
  const { valid: n, issues: r } = Ql(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: ed(r)
  };
}
function td(e) {
  const t = Object.keys(Ir).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Jf(e) {
  return ws(e)?.message ?? null;
}
class nd extends Ae {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ys("payload", n, this);
    const r = ws(n);
    if (r)
      return t.appendChild(rd(r, n)), {};
    const i = n.type, o = Ir[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function rd(e, t) {
  const n = I(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(de(e.message));
  const r = (o, s) => I(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};` : `background:${T.panelBg};color:${T.textMuted2};border:1px solid ${T.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = od(t);
  return i && n.appendChild(r(i, !1)), n;
}
function od(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Le(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Le(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Re("gufe-view", nd);
const ir = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, Dr = {
  threeDmol: `https://unpkg.com/3dmol@${ir.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${ir.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${ir.d3}/+esm`
};
function qr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function _s(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let nt = null, dt = null;
function Vr() {
  if (dt) return dt;
  const e = qr("threeDmol");
  return e ? (dt = e.then((t) => nt = t || window.$3Dmol), dt) : (dt = (async () => {
    if (window.$3Dmol) return nt = window.$3Dmol;
    if (await _s(Dr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return nt = window.$3Dmol;
  })(), dt);
}
let ut = null;
function Lr() {
  if (ut) return ut;
  const e = qr("rdkit");
  return e ? (ut = e.then((t) => window.RDKit = t), ut) : (ut = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await _s(Dr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), ut);
}
let sr = null;
function Ss() {
  if (!sr) {
    const e = Dr.d3;
    sr = qr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return sr;
}
function ks(e, t) {
  let n = !1, r = !1;
  const i = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, s = (a) => {
    a.stopPropagation();
    const c = a.ctrlKey || a.metaKey;
    if (n || c) {
      (t.onZoom(a) !== !1 || c) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, sd(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
const id = 1600;
function sd(e, t) {
  const n = I(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, id);
}
const ad = { min: 0.25, max: 12 }, cd = 150;
function Pi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? cd) - t;
}
function ld(e, t = ad) {
  const n = Pi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = Pi(e);
    return Number.isFinite(s) && s > 0 ? n / s : i;
  };
  return {
    zoomBy(s) {
      const a = o(), c = Math.min(t.max, Math.max(t.min, a * s)), f = c / a;
      return !Number.isFinite(f) || Math.abs(f - 1) < 1e-9 ? !1 : (i = c, e.zoom(f), e.render(), !0);
    },
    reset() {
      i = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const dd = 2e-3;
function Cs(e) {
  return Math.exp(-e.deltaY * dd);
}
function Br(e, t, n = {}) {
  const r = ld(t, n.bounds), i = ks(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Cs(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function Ur(e, t = "Reset view") {
  const n = I("button", Nt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const ar = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, ud = [
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
], Yf = "hsv", L = [0, 0, 0], fd = {
  0: L,
  1: L,
  2: L,
  3: L,
  4: L,
  5: L,
  6: L,
  7: L,
  8: L,
  9: L,
  10: L,
  11: L,
  12: L,
  13: L,
  14: L,
  15: L,
  16: L,
  17: L,
  18: L,
  19: L,
  20: L,
  21: L,
  22: L,
  23: L,
  24: L,
  25: L,
  26: L,
  27: L,
  28: L,
  29: L,
  30: L,
  31: L,
  32: L,
  33: L,
  34: L,
  35: L,
  36: L,
  37: L,
  38: L,
  39: L,
  40: L,
  41: L,
  42: L,
  43: L,
  44: L,
  45: L,
  46: L,
  47: L,
  48: L,
  49: L,
  50: L,
  51: L,
  52: L,
  53: L,
  54: L,
  55: L,
  56: L,
  57: L,
  58: L,
  59: L,
  60: L,
  61: L,
  62: L,
  63: L,
  64: L,
  65: L,
  66: L,
  67: L,
  68: L,
  69: L,
  70: L,
  71: L,
  72: L,
  73: L,
  74: L,
  75: L,
  76: L,
  77: L,
  78: L,
  79: L,
  80: L,
  81: L,
  82: L,
  83: L,
  84: L,
  85: L,
  86: L,
  87: L,
  88: L,
  89: L,
  90: L,
  91: L,
  92: L,
  93: L,
  94: L,
  95: L,
  96: L,
  97: L,
  98: L,
  99: L,
  100: L,
  101: L,
  102: L,
  103: L,
  104: L,
  105: L,
  106: L,
  107: L,
  108: L,
  109: L,
  110: L,
  111: L,
  112: L,
  113: L,
  114: L,
  115: L,
  116: L,
  117: L,
  118: L
}, pd = "rdkit", hd = !0, md = !0, gd = !0, yd = !0, vd = "rdkit", $d = "filled", bd = 0.42, wd = 1.5, _d = !0, Sd = "show", kd = "mono", Cd = 0.51, Ed = 0.74, xd = 1.6, Pd = 1.7, Ad = 5, Rd = 0.3, Nd = "#d62828", Md = "#d62828", Fd = "#015ab5", Od = !1, Td = "", jd = "#7c3aed", zd = {
  layout: pd,
  alignPair: hd,
  atomNumbers: md,
  createdDestroyed: gd,
  modified: yd,
  style: vd,
  circles: $d,
  circleRadius: bd,
  circleStroke: wd,
  boundary: _d,
  hydrogens: Sd,
  elementColors: kd,
  numScale: Cd,
  labelScale: Ed,
  bondWidth: xd,
  markWidth: Pd,
  haloWidth: Ad,
  haloOpacity: Rd,
  destroyedColor: Nd,
  createdColor: Md,
  modifiedColor: Fd,
  stereo: Od,
  customSpec: Td,
  customColor: jd
}, Id = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: ar.uniqueAtom,
  createdColor: ar.uniqueAtom,
  modifiedColor: ar.elementChange,
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
}, Dd = ["rdkit", "coordgen", "conformer"], qd = ["rdkit", "recolor", "halo"], Vd = ["outline", "filled", "off"], Ld = ["show", "dim", "hide"], Bd = ["cpk", "mono"], Ud = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Kd = /^#[0-9a-fA-F]{6}$/;
function kt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ke(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Ud[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const ft = (e, t) => typeof e == "boolean" ? e : t, Nn = (e, t) => typeof e == "string" && Kd.test(e) ? e : t;
function Hd(e) {
  const t = e && typeof e == "object" ? e : {}, n = Id;
  return {
    version: 1,
    layout: kt(t.layout, Dd, n.layout),
    alignPair: ft(t.alignPair, n.alignPair),
    style: kt(t.style, qd, n.style),
    createdDestroyed: ft(t.createdDestroyed, n.createdDestroyed),
    modified: ft(t.modified, n.modified),
    destroyedColor: Nn(t.destroyedColor, n.destroyedColor),
    createdColor: Nn(t.createdColor, n.createdColor),
    modifiedColor: Nn(t.modifiedColor, n.modifiedColor),
    boundary: ft(t.boundary, n.boundary),
    circles: kt(t.circles, Vd, n.circles),
    circleRadius: Ke(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ke(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: kt(t.hydrogens, Ld, n.hydrogens),
    elementColors: kt(t.elementColors, Bd, n.elementColors),
    atomNumbers: ft(t.atomNumbers, n.atomNumbers),
    stereo: ft(t.stereo, n.stereo),
    numScale: Ke(t.numScale, "numScale", n.numScale),
    labelScale: Ke(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ke(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ke(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ke(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ke(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Nn(t.customColor, n.customColor)
  };
}
const Qe = Hd(zd);
function Ai(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, c = (h) => {
      s !== "right" && t.add(h), s !== "left" && n.add(h);
    }, f = /^(\d+)-(\d+)$/.exec(a);
    if (f) {
      const h = Math.min(+f[1], +f[2]), y = Math.min(Math.max(+f[1], +f[2]), h + r - 1);
      for (let $ = h; $ <= y; $++) c($);
    } else /^\d+$/.test(a) && c(+a);
  }
  return { left: t, right: n };
}
function cr(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), c = t.has(s);
    (n ? a || c : a && c) && r.push(i);
  }
  return r;
}
function Ri(e) {
  return `0x${e.replace("#", "")}`;
}
function br(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Gd(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Wd(e, t, n) {
  const r = new Set(t.atoms), i = new Set(cr(e, r, !0));
  return {
    deletions: cr(e, r, n),
    changes: cr(e, new Set(t.elements), n).filter((o) => !i.has(o))
  };
}
function Ni(e, t, n, r) {
  const i = Wd(t, n, e.boundary), o = [];
  return e.createdDestroyed && n.atoms.length && o.push({
    atoms: new Set(n.atoms),
    bonds: i.deletions,
    color: r === "left" ? e.destroyedColor : e.createdColor,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && n.elements.length && o.push({
    atoms: new Set(n.elements),
    bonds: i.changes,
    color: e.modifiedColor,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), o;
}
let pt = null;
function Jd(e) {
  if (pt !== null) return pt;
  pt = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (pt = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return pt || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), pt;
}
function Yd(e, t) {
  return e.style === "rdkit" ? "rdkit" : Jd(t) ? e.style : "rdkit";
}
function Xd(e, t, n, r, i, o) {
  const s = {
    width: t,
    height: t,
    addAtomIndices: e.atomNumbers,
    addStereoAnnotation: e.stereo,
    annotationFontScale: e.numScale,
    baseFontSize: e.labelScale,
    bondLineWidth: e.bondWidth,
    scaleBondWidth: !1
  };
  e.elementColors === "mono" && (s.atomColourPalette = fd), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, c = {}, f = {};
  for (const b of n) {
    const S = br(b.color);
    if (i === "rdkit") for (const g of b.bonds) f[g] = S;
    if (i === "recolor" && e.circles === "off") continue;
    const _ = i === "recolor" && e.circles === "filled" ? Gd(S, 0.7) : S;
    for (const g of b.atoms)
      a[g] = _, c[g] = e.circleRadius;
  }
  const h = br(e.customColor);
  for (const b of r)
    b < o && (a[b] = h, c[b] = e.circleRadius);
  const y = Object.keys(a).map(Number);
  y.length && (s.atoms = y, s.highlightAtomColors = a, s.highlightAtomRadii = c);
  const $ = Object.keys(f).map(Number);
  return $.length && (s.bonds = $, s.highlightBondColors = f), s;
}
function Zd(e, t, n, r) {
  let i = null;
  try {
    return i = e.get_mol(t, JSON.stringify({ removeHs: !1 })), i ? i.get_svg_with_highlights ? i.get_svg_with_highlights(JSON.stringify(r)) || null : i.get_svg(n, n) || null : null;
  } catch (o) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", ge(o)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
const Qd = "http://www.w3.org/2000/svg";
function Es(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Kr(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function xs(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function Mi(e, t, n, r, i, o) {
  for (const s of r)
    for (const a of Es(e, s)) {
      const c = a.style;
      xs(a) ? c.fill = i : (c.stroke = i, c.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const s of n)
      for (const a of Kr(e, s, !1)) a.style.fill = o;
}
function eu(e, t, n, r) {
  const i = e.ownerDocument;
  if (!i) return;
  const o = i.createElementNS(Qd, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const c of Es(e, a)) {
      if (xs(c)) continue;
      const f = c.cloneNode(!0);
      f.removeAttribute("class"), f.style.fill = "none", f.style.stroke = r, f.style.strokeWidth = `${t.haloWidth}px`, f.style.strokeLinecap = "round", f.style.strokeLinejoin = "round", f.style.strokeOpacity = "1", o.appendChild(f);
    }
  if (!o.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(o, s.nextSibling) : s ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function tu(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Kr(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function nu(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Kr(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function ru(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function ou(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        Mi(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? tu(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && nu(e, n, s.atoms, i, s.color);
      } else
        eu(e, n, s.bonds, s.color), Mi(e, n, s.atoms, s.bonds, s.color, null);
  ru(e, t, n);
}
const Gn = `
`, wr = "$$$$";
function _r(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Gn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let h = 0; h < i; h++) {
    const y = n[4 + h];
    if (y == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(y.substring(0, 10)) || 0,
      parseFloat(y.substring(10, 20)) || 0,
      parseFloat(y.substring(20, 30)) || 0
    ]), a.push(y.substring(31, 34).trim() || "X");
  }
  const c = [];
  for (let h = 0; h < (isFinite(o) ? o : 0); h++) {
    const y = n[4 + i + h];
    if (y == null) break;
    const $ = parseInt(y.substring(0, 3), 10), b = parseInt(y.substring(3, 6), 10), S = parseInt(y.substring(6, 9), 10);
    !isFinite($) || !isFinite(b) || c.push([$ - 1, b - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: c, coords: s };
}
function iu(e) {
  const t = e.symbols.length, n = e.bonds.length, r = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let i = 0; i < t; i++) {
    const o = e.coords[i];
    r.push(
      o[0].toFixed(4).padStart(10) + o[1].toFixed(4).padStart(10) + o[2].toFixed(4).padStart(10) + ` ${e.symbols[i].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let i = 0; i < n; i++) {
    const o = e.bonds[i], s = o[2] === 12 ? 4 : o[2];
    r.push(
      String(o[0] + 1).padStart(3) + String(o[1] + 1).padStart(3) + String(s).padStart(3) + "  0  0  0  0"
    );
  }
  return r.push("M  END"), r.join(Gn);
}
const su = (e) => `${iu(e)}${Gn}${wr}`, au = (e) => e.indexOf(wr) >= 0 ? e : `${e}${Gn}${wr}`;
function Ps(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function As(e, t, n, r, i) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    if (r !== "conformer")
      try {
        o.set_new_coords(r === "coordgen");
      } catch {
      }
    if (i?.atoms.length && o.get_svg_with_highlights) {
      const s = {}, a = {};
      for (const f of i.atoms)
        s[f] = i.color, a[f] = i.radius;
      const c = {
        width: n,
        height: n,
        atoms: [...i.atoms],
        highlightAtomColors: s,
        highlightAtomRadii: a
      };
      return o.get_svg_with_highlights(JSON.stringify(c)) || null;
    }
    return o.get_svg(n, n) || null;
  } catch (s) {
    return console.warn("[gufe-viz] depictSVG threw -", ge(s)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function Rs(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Fi = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Sr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, ht = (e) => e in Sr, Oi = 400, lr = "position:absolute;inset:0;min-width:0;min-height:0;";
class cu extends Ae {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge, a = I("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const c = I(
      "div",
      `${lr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${Rt.canvas2D};`
    );
    a.appendChild(c);
    const f = as();
    f.wrap.style.cssText = lr, a.appendChild(f.wrap);
    const h = I(
      "div",
      `${lr}overflow:auto;padding:16px 20px;background:${T.panelBg};color:${T.textPrimary};font-size:${X.body};`
    );
    a.appendChild(h);
    const y = r ? Ps(r) : null, $ = [
      ["Name", i || gt, !1],
      ["SMILES", o || gt, !0],
      ["Charge", s == null ? gt : String(s), !1],
      ["Atoms", y ? String(y.atoms) : gt, !1],
      ["Bonds", y ? String(y.bonds) : gt, !1]
    ], b = I("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${se.xl} 20px;align-items:baseline;`);
    h.appendChild(b);
    for (const [N, F, C] of $) {
      b.appendChild(
        I(
          "div",
          `font-size:${X.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${T.textMuted2};`,
          N
        )
      );
      const j = I(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${T.textPrimary}` + (C ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${X.small};` : ""),
        F
      );
      j.title = F, b.appendChild(j);
    }
    const S = I("div", gr, i || "Unnamed molecule");
    a.appendChild(S);
    const _ = vt(
      "small-molecule.mode",
      "2d",
      Fi.map((N) => N.id)
    ), g = Pt("small-molecule.spin", !1);
    let p = _.get(), d = g.get(), m = null, k = null;
    const l = () => {
      try {
        m?.spin(d && ht(p) ? "y" : !1);
      } catch {
      }
    }, u = (N) => {
      p = N, c.style.visibility = p === "2d" ? "visible" : "hidden", f.wrap.style.visibility = ht(p) ? "visible" : "hidden", h.style.visibility = p === "info" ? "visible" : "hidden", S.style.display = p === "info" ? "none" : "block", A.disabled = !ht(p), A.style.opacity = ht(p) ? "1" : "0.5", ht(p) && m && (m.setStyle({}, Sr[p]), m.resize(), m.render()), l();
    }, v = I("div", es), E = qn(Fi, p, (N) => u(N), _), A = ss(
      "Spin",
      d,
      (N) => {
        d = N, l();
      },
      { title: "Toggle continuous rotation", remember: g }
    );
    return E.insertBefore(A, E.lastElementChild), v.appendChild(E), a.appendChild(v), u(p), !r || !r.trim() ? (c.appendChild(de("No molecule provided")), f.container.appendChild(de("No molecule provided")), {}) : (c.appendChild(de("Loading 2D depiction...")), Lr().then((N) => {
      const F = As(N, r, Oi, Qe.layout);
      F ? Rs(c, F, Oi) : c.replaceChildren(de("Failed to parse molecule", !0));
    }).catch((N) => {
      c.replaceChildren(de(`RDKit failed to load: ${ge(N)}`, !0));
    }), f.container.appendChild(de("Loading 3D viewer...")), Vr().then(() => {
      f.container.replaceChildren(), m = nt.createViewer(f.container, { backgroundColor: Rt.viewer }), m.addModel(au(r), "sdf"), m.setStyle({}, Sr[ht(p) ? p : "stick"]), m.zoomTo(), m.render(), k = Br(f.container, m), l();
    }).catch((N) => {
      f.container.replaceChildren(de(`3D render failed: ${ge(N)}`, !0));
    }), {
      onResize() {
        m && (m.resize(), m.render());
      },
      cleanup() {
        if (k?.cleanup(), k = null, !!m) {
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
    });
  }
}
Re("gufe-small-molecule", cu);
const Ns = ["HOH", "WAT", "SOL", "TIP3"], Ti = { hetflag: !1 }, lu = { hetflag: !0 }, du = { resn: Ns }, He = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function uu(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const c of e.split(/\r?\n/)) {
    const f = c.slice(0, 6);
    if (f === "ENDMDL") break;
    if (f !== "ATOM  " && f !== "HETATM") continue;
    r++, f === "HETATM" && i++;
    const h = c.slice(17, 20).trim(), y = c.slice(21, 22).trim() || "_", $ = c.slice(22, 26).trim(), b = c.slice(26, 27).trim();
    Ns.indexOf(h) !== -1 && o++, t.add(y), n.add(`${y}|${$}${b}|${h}`);
    const S = parseInt($, 10);
    isNaN(S) || (S < s && (s = S), S > a && (a = S));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: i,
    waters: o,
    heteroNonWater: i - o,
    resiMin: s === 1 / 0 ? 0 : s,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function fu(e) {
  return `${bt(e.chains)} chains · ${bt(e.residues)} residues · ${bt(e.atoms)} atoms · ${bt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${bt(e.waters)} water)` : "");
}
function pu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function ji(e, t, n, r) {
  const i = r || (() => {
  }), o = pu(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Ti,
    t.rep === "stick" ? { stick: { radius: He.stick.radius, ...o } } : t.rep === "sphere" ? { sphere: { scale: He.sphere.scale, ...o } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...o } }
    )
  ), e.setStyle(
    lu,
    t.hetero ? {
      stick: { radius: He.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: He.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    du,
    t.waters ? {
      stick: { radius: He.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: He.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > He.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(nt.SurfaceType.VDW, { opacity: He.surfaceOpacity, ...o }, Ti)
      ).then(() => {
        i(null), e.render();
      }).catch((s) => i(`Surface failed: ${ge(s)}`, "error"));
    } catch (s) {
      i(`Surface failed: ${ge(s)}`, "error");
    }
  }, 30);
}
const zi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Ii = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class hu extends Ae {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, i = n.name ?? "", o = n.type !== "ProteinComponentViz", s = vt(
      "protein.representation",
      "cartoon",
      zi.map((E) => E.id)
    ), a = vt(
      "protein.color",
      "chain",
      Ii.map((E) => E.id)
    ), c = Pt("protein.waters", o), f = Pt("protein.hetero", !0), h = Pt("protein.spin", !1), y = {
      rep: s.get(),
      color: a.get(),
      waters: c.get(),
      hetero: f.get(),
      spin: h.get()
    };
    let $ = null, b = null, S = null;
    const _ = I(
      "div",
      xr.top
    );
    t.appendChild(_), _.appendChild(
      I("span", `font-weight:700;font-size:${X.heading};letter-spacing:.02em;color:${T.titleColor};`, i || "Protein")
    );
    const g = (E) => I("span", `font-size:${X.small};color:${T.textMuted};`, E);
    _.appendChild(g("Style:")), _.appendChild(
      qn(
        zi,
        y.rep,
        (E) => {
          y.rep = E, v();
        },
        s
      )
    ), _.appendChild(g("Color:")), _.appendChild(
      Ar(
        Ii,
        y.color,
        (E) => {
          y.color = E, v();
        },
        a
      )
    );
    const p = I("div", "display:flex;gap:4px;");
    _.appendChild(p);
    const d = [
      ["waters", "Waters", "Show water molecules", c, () => v()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", f, () => v()],
      ["spin", "Spin", "Rotate the view continuously", h, () => $?.spin(y.spin ? "y" : !1)]
    ];
    for (const [E, A, N, F, C] of d)
      p.appendChild(
        ss(
          A,
          y[E],
          (j) => {
            y[E] = j, C();
          },
          { title: N, remember: F }
        )
      );
    p.appendChild(Ur(() => b?.reset()));
    const m = I("span", `margin-left:auto;font-size:${X.small};white-space:nowrap;color:${T.textMuted2};`);
    _.appendChild(m);
    const k = as();
    t.appendChild(k.wrap);
    const l = I(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${X.body};z-index:20;display:none;pointer-events:none;`
    );
    k.wrap.appendChild(l);
    const u = (E, A) => {
      if (E == null) {
        l.style.display = "none";
        return;
      }
      l.textContent = E, l.style.display = "block";
      const N = A === "error";
      l.style.background = N ? T.warnBg : T.toolbarBg, l.style.color = N ? T.warnFg : T.textMuted, l.style.border = `1px solid ${N ? T.warnBorder : T.toolbarBorder}`;
    };
    function v() {
      $ && ji($, y, S, u);
    }
    if (!r || !r.trim())
      return u("No protein data - waiting for a PDB payload."), {};
    try {
      S = uu(r), m.textContent = fu(S);
    } catch (E) {
      u(`⚠ PDB parse error: ${ge(E)}`, "error");
    }
    return u("Loading 3D viewer..."), Vr().then(() => {
      $ = nt.createViewer(k.container, { backgroundColor: Rt.viewer }), $.addModel(r, "pdb"), ji($, y, S, u), $.zoomTo(), $.spin(y.spin ? "y" : !1), $.render(), b = Br(k.container, $);
    }).catch((E) => {
      u(`⚠ Failed to render structure: ${ge(E)}`, "error");
    }), {
      onResize() {
        $ && ($.resize(), $.render());
      },
      cleanup() {
        if (b?.cleanup(), b = null, !!$) {
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
Re("gufe-protein", hu);
const Ms = "http://www.w3.org/2000/svg";
function ae(e, t = {}) {
  const n = document.createElementNS(Ms, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function In(e, t) {
  const n = document.createElementNS(Ms, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const mu = 3;
function Fs(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, i = 1 / 0, o = -1 / 0, s = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), i = Math.min(i, a.y), o = Math.max(o, a.x), s = Math.max(s, a.y);
  return !Number.isFinite(r) || !Number.isFinite(i) ? null : { minX: r - t, minY: i - n, maxX: o + t, maxY: s + n };
}
const gu = { min: 0.15, max: 5 };
function Os(e, t, n) {
  const r = n.margin ?? 0, i = n.zoom ?? gu;
  let o = 1, s = 0, a = 0;
  const c = () => {
    t.setAttribute("transform", `translate(${s},${a}) scale(${o})`), n.onTransform?.(o, s, a);
  }, f = () => {
    const d = e.getBoundingClientRect();
    return {
      width: d.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: d.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, h = () => {
    o = 1, s = 0, a = 0;
    const d = n.bounds();
    if (!d) {
      c();
      return;
    }
    const { width: m, height: k } = f();
    o = Math.min(1, m / (d.maxX - d.minX + r * 2), k / (d.maxY - d.minY + r * 2)), s = m / 2 - (d.minX + d.maxX) / 2 * o, a = k / 2 - (d.minY + d.maxY) / 2 * o, c();
  }, $ = ks(e, {
    onZoom: (d) => {
      const m = e.getBoundingClientRect(), k = d.clientX - m.left, l = d.clientY - m.top, u = Math.min(i.max / o, Math.max(i.min / o, Cs(d)));
      return s = k - (k - s) * u, a = l - (l - a) * u, o *= u, c(), u !== 1;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  });
  let b = null, S = !1;
  const _ = (d) => {
    b = { x: d.clientX - s, y: d.clientY - a, from: { x: d.clientX, y: d.clientY } }, S = !1;
  }, g = (d) => {
    b && (Math.hypot(d.clientX - b.from.x, d.clientY - b.from.y) > mu && (S = !0), s = d.clientX - b.x, a = d.clientY - b.y, c());
  }, p = () => {
    b = null;
  };
  return e.addEventListener("pointerdown", _), e.addEventListener("pointermove", g), e.addEventListener("pointerup", p), e.addEventListener("pointercancel", p), e.addEventListener("pointerleave", p), {
    fit: h,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: h,
    centreOn(d, m, k = 1) {
      const { width: l, height: u } = f();
      o = Math.max(o, k), s = l / 2 - d * o, a = u / 2 - m * o, c();
    },
    transform: () => ({ scale: o, tx: s, ty: a }),
    wasPan: () => S,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(d, m, k) {
      o = d, s = m, a = k, c();
    },
    cleanup() {
      $.cleanup(), e.removeEventListener("pointerdown", _), e.removeEventListener("pointermove", g), e.removeEventListener("pointerup", p), e.removeEventListener("pointercancel", p), e.removeEventListener("pointerleave", p);
    }
  };
}
const yu = 8, vu = 64, $u = () => new Promise((e) => setTimeout(e, 0));
function kr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function bu(e, t, n, r) {
  let i = null;
  try {
    if (i = e.get_mol(n, JSON.stringify({ removeHs: r })), !i || !i.get_substruct_matches) return null;
    const o = i.get_substruct_matches(t), s = JSON.parse(o || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const c of s) {
      const f = c.atoms;
      if (Array.isArray(f))
        for (const h of f) typeof h == "number" && a.add(h);
    }
    return [...a].sort((c, f) => c - f);
  } catch (o) {
    return console.warn("[gufe-viz] SMARTS match threw -", ge(o)), null;
  } finally {
    kr(i);
  }
}
function wu(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let i = 0;
  return { run: async (s) => {
    const a = s.trim(), c = ++i;
    if (!a) return { status: "cleared" };
    const f = r.get(a);
    if (f) return { status: "ok", matched: f, unreadable: 0 };
    const h = await e();
    if (c !== i) return { status: "superseded" };
    if (!h) return { status: "unsupported" };
    if (!h.get_qmol) return { status: "unsupported" };
    let y = null;
    try {
      y = h.get_qmol(a);
    } catch {
      y = null;
    }
    if (!y) return { status: "invalid" };
    if (!y.get_substruct_matches)
      return kr(y), { status: "unsupported" };
    const $ = /* @__PURE__ */ new Map();
    let b = 0;
    try {
      let S = performance.now(), _ = 0;
      for (let g = 0; g < t.length; g++) {
        const p = t[g] ? bu(h, y, t[g], n) : null;
        if (p ? p.length && $.set(g, p) : b++, !(++_ < vu && performance.now() - S < yu)) {
          if (await $u(), c !== i) return { status: "superseded" };
          _ = 0, S = performance.now();
        }
      }
    } finally {
      kr(y);
    }
    return r.set(a, $), { status: "ok", matched: $, unreadable: b };
  }, cancel: () => void ++i };
}
function Ft(e) {
  const t = /* @__PURE__ */ new Map();
  return Cr(e, t, /* @__PURE__ */ new Set()), t;
}
function Cr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) Cr(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) Cr(i, t, n);
}
function rt(e, t) {
  return t ? e.get(t) : void 0;
}
function ke(e, t, n) {
  const r = rt(e, t);
  return r?.type === n ? r : void 0;
}
function Hr(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const i of t) {
    if (!i || r.has(i)) continue;
    const o = e.get(i);
    o && (r.add(i), n.push(o));
  }
  return n;
}
function $t(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Mn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function Di(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function _u(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function qi(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], c = o[s][1], f = t[a * 3 + c];
      if (Math.abs(f) < 1e-14) continue;
      const h = t[a * 3 + a], y = t[c * 3 + c], $ = (y - h) / (2 * f);
      let b;
      Math.abs($) > 1e10 ? b = 1 / (2 * $) : b = ($ >= 0 ? 1 : -1) / (Math.abs($) + Math.sqrt($ * $ + 1));
      const S = 1 / Math.sqrt(1 + b * b), _ = b * S;
      t[a * 3 + a] = h - b * f, t[c * 3 + c] = y + b * f, t[a * 3 + c] = 0, t[c * 3 + a] = 0;
      for (let g = 0; g < 3; g++)
        if (g !== a && g !== c) {
          const p = t[g * 3 + a], d = t[g * 3 + c];
          t[g * 3 + a] = S * p - _ * d, t[a * 3 + g] = t[g * 3 + a], t[g * 3 + c] = _ * p + S * d, t[c * 3 + g] = t[g * 3 + c];
        }
      for (let g = 0; g < 3; g++) {
        const p = n[g * 3 + a], d = n[g * 3 + c];
        n[g * 3 + a] = S * p - _ * d, n[g * 3 + c] = _ * p + S * d;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Su(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], i[0] += t[m][0], i[1] += t[m][1], i[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]] };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const k = e[m][0] - r[0], l = e[m][1] - r[1], u = e[m][2] - r[2], v = t[m][0] - i[0], E = t[m][1] - i[1], A = t[m][2] - i[2];
    o[0] += k * v, o[1] += k * E, o[2] += k * A, o[3] += l * v, o[4] += l * E, o[5] += l * A, o[6] += u * v, o[7] += u * E, o[8] += u * A;
  }
  const s = Di(o), a = Mn(s, o), c = Mn(o, s);
  let f = qi(a), h = qi(c);
  function y(m) {
    const k = [0, 1, 2].sort((u, v) => m.values[v] - m.values[u]), l = new Array(9);
    for (let u = 0; u < 3; u++) {
      const v = k[u];
      l[u] = m.vectors[v], l[3 + u] = m.vectors[3 + v], l[6 + u] = m.vectors[6 + v];
    }
    return {
      values: [m.values[k[0]], m.values[k[1]], m.values[k[2]]],
      vectors: l
    };
  }
  f = y(f), h = y(h);
  const $ = f.vectors, b = h.vectors;
  for (let m = 0; m < 3; m++) {
    const k = $[m], l = $[3 + m], u = $[6 + m], v = o[0] * k + o[1] * l + o[2] * u, E = o[3] * k + o[4] * l + o[5] * u, A = o[6] * k + o[7] * l + o[8] * u, N = b[m], F = b[3 + m], C = b[6 + m];
    v * N + E * F + A * C < 0 && (b[m] = -N, b[3 + m] = -F, b[6 + m] = -C);
  }
  const S = Di($);
  let _ = Mn(b, S);
  _u(_) < 0 && (b[2] = -b[2], b[5] = -b[5], b[8] = -b[8], _ = Mn(b, S));
  const g = _[0] * i[0] + _[1] * i[1] + _[2] * i[2], p = _[3] * i[0] + _[4] * i[1] + _[5] * i[2], d = _[6] * i[0] + _[7] * i[1] + _[8] * i[2];
  return { R: _, t: [r[0] - g, r[1] - p, r[2] - d] };
}
function ku(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
const Vi = `
`, dr = 4;
function Li(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (i) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", ge(i)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Cu(e, t, n) {
  const r = [], i = [];
  for (const [h, y] of n) {
    const $ = e[y], b = t[h];
    !$ || !b || (r.push($), i.push(b));
  }
  if (r.length < 2) return null;
  const o = (h) => {
    let y = 0, $ = 0;
    for (const b of h)
      y += b[0], $ += b[1];
    return [y / h.length, $ / h.length];
  }, s = o(r), a = o(i);
  let c = null, f = -1 / 0;
  for (const h of [!1, !0]) {
    let y = 0, $ = 0;
    for (let d = 0; d < r.length; d++) {
      const m = (h ? -1 : 1) * (r[d][0] - s[0]), k = r[d][1] - s[1], l = i[d][0] - a[0], u = i[d][1] - a[1];
      y += m * u - k * l, $ += m * l + k * u;
    }
    const b = Math.hypot(y, $);
    if (b <= f) continue;
    f = b;
    const S = Math.atan2(y, $), _ = Math.cos(S), g = Math.sin(S), p = (h ? -1 : 1) * s[0];
    c = {
      cos: _,
      sin: g,
      mirror: h,
      tx: a[0] - (_ * p - g * s[1]),
      ty: a[1] - (g * p + _ * s[1])
    };
  }
  return c;
}
function Eu(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function xu(e, t, n) {
  const r = Ps(e);
  if (!r) return e;
  const i = e.replace(/\r/g, "").split(Vi);
  if (i[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const s = i[dr + o], a = t[o];
    if (s == null || !a) return e;
    i[dr + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const c = dr + r.atoms + a, f = i[c];
      if (f == null) break;
      const h = parseInt(f.substring(9, 12), 10);
      h !== 1 && h !== 6 || (i[c] = f.substring(0, 9) + String(h === 1 ? 6 : 1).padStart(3) + f.substring(12));
    }
  return i.join(Vi);
}
function Pu(e, t, n) {
  try {
    const r = (s) => _r(s).coords.map((a) => [a[0], a[1]]), i = r(t), o = Cu(i, r(e), n);
    return o ? xu(
      t,
      i.map((s) => Eu(o, s)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", ge(r)), t;
  }
}
function Au(e, t, n, r, i) {
  const o = Li(e, t, r), s = Li(e, n, r);
  return !i || r === "conformer" ? { left: o, right: s } : { left: o, right: Pu(o, s, i) };
}
const Ru = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Nu = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Mu() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const ur = Mu() ? Ru : Nu, Bi = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], fr = 420, Ve = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, pr = { gap: 2.5, minLiftFraction: 0.6 }, Fu = 24, At = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Ui(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function Ou(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Ts(e, t) {
  const n = ke(t, e.componentA, "SmallMoleculeComponentViz"), r = ke(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Hr(t, [e.componentA, e.componentB]) };
}
function Ki(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Tu(e, t) {
  const n = Ki(e), r = Ki(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + pr.gap, a = pr.minLiftFraction * o + pr.gap;
  return { axis: i, lift: Math.max(s, a) };
}
function ju(e, t) {
  let n = 0;
  for (const i of [e, t]) {
    let o = 1 / 0;
    for (const s of i)
      s[0] < o && (o = s[0]), s[0] - o > n && (n = s[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > At.minSpread ? r : At.minSpread) * At.spreadFactor;
}
function zu(e, t) {
  const n = ud, i = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(i), s = Math.min(o + 1, n.length - 1), a = i - o;
  let c = "0x";
  for (let f = 0; f < 3; f++) {
    const h = ($) => parseInt($.slice(1 + f * 2, 3 + f * 2), 16), y = Math.round(h(n[o]) + (h(n[s]) - h(n[o])) * a);
    c += y.toString(16).padStart(2, "0");
  }
  return c;
}
class Iu extends Ae {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Ft(n), i = ke(r, n.componentA, "SmallMoleculeComponentViz"), o = ke(r, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !o)
      return t.appendChild(
        de("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = $t(i), a = $t(o), c = Ou(n);
    let f, h;
    try {
      f = _r(i.sdf, s), h = _r(o.sdf, a);
    } catch (V) {
      return t.appendChild(de(`Could not read a molecule: ${ge(V)}`, !0)), {};
    }
    const y = /* @__PURE__ */ new Map();
    for (const [V, Q] of c) y.set(Q, V);
    const $ = Ui(c, f.symbols, h.symbols), b = Ui(y, h.symbols, f.symbols), S = I("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(S);
    const _ = I("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    S.appendChild(_);
    const g = vt("atom-mapping.mode", "plain", Bi.map((V) => V.id));
    let p = g.get();
    const d = I(
      "div",
      es
    );
    d.appendChild(
      qn(
        Bi,
        p,
        (V) => {
          p = V, re();
        },
        g
      )
    ), S.appendChild(d);
    let m = [], k = 0, l = !0;
    const u = () => {
      k && cancelAnimationFrame(k), k = 0;
      for (const V of m) {
        V.interaction?.cleanup();
        try {
          V.viewer?.clear();
        } catch {
        }
      }
      m = [], _.replaceChildren();
    }, v = (V) => {
      const Q = I("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), q = I("div", "flex:1;position:relative;min-height:0;");
      q.dataset.gufeViewer = "", Q.appendChild(q), Q.appendChild(I("div", gr, V)), _.appendChild(Q);
      const R = { container: q, viewer: null, interaction: null };
      return m.push(R), R;
    }, E = () => {
      if (m.length < 2) return;
      const V = m.map(() => "");
      let Q = !1;
      const q = () => {
        if (l) {
          if (!Q)
            for (let R = 0; R < m.length; R++) {
              const D = m[R].viewer;
              if (!D) continue;
              const M = JSON.stringify(D.getView());
              if (M !== V[R]) {
                Q = !0;
                for (let w = 0; w < m.length; w++)
                  w !== R && m[w].viewer && (m[w].viewer.setView(D.getView()), m[w].viewer.render()), V[w] = M;
                Q = !1;
                break;
              }
            }
          k = requestAnimationFrame(q);
        }
      };
      k = requestAnimationFrame(q);
    }, A = (V, Q) => {
      const q = nt.createViewer(V.container, { backgroundColor: Rt.viewer });
      for (const { mol: R } of Q) q.addModel(su(R), "sdf");
      return V.viewer = q, q;
    }, N = (V) => {
      V.viewer && (V.interaction = Br(V.container, V.viewer));
    }, F = () => {
      for (const V of [f, h]) {
        const Q = v(V.name), q = A(Q, [{ mol: V }]);
        q.setStyle(
          {},
          { stick: { radius: Ve.stick, colorscheme: "Jmol" }, sphere: { scale: Ve.sphere, colorscheme: "Jmol" } }
        ), q.zoomTo(), q.render(), N(Q);
      }
      E();
    }, C = () => {
      const V = Qe, Q = Ai(V.customSpec), q = [
        { mol: f, uniques: $, side: "left", custom: Q.left },
        { mol: h, uniques: b, side: "right", custom: Q.right }
      ];
      for (const R of q) {
        const D = v(R.mol.name), M = A(D, [{ mol: R.mol }]);
        M.setStyle(
          {},
          { stick: { radius: Ve.stick, color: ur.core }, sphere: { scale: Ve.sphere, color: ur.core } }
        );
        const w = (x, z) => {
          M.addStyle(
            { serial: x + 1 },
            {
              stick: { radius: Ve.markStick, color: Ri(z) },
              sphere: { scale: Ve.markSphere, color: Ri(z) }
            }
          );
        };
        for (const x of Ni(V, R.mol, R.uniques, R.side))
          for (const z of x.atoms) w(z, x.color);
        for (const x of R.custom)
          x < R.mol.symbols.length && w(x, V.customColor);
        M.zoomTo(), M.render(), N(D);
      }
      E();
    }, j = () => {
      const V = v(`${s} (left), both overlaid (middle), ${a} (right)`), Q = ju(f.coords, h.coords), q = (G, ee) => ({
        ...G,
        coords: G.coords.map(([Z, P, O]) => [Z + ee, P, O])
      }), R = q(f, -Q), D = q(h, Q), M = A(V, [{ mol: R }, { mol: D }, { mol: f }, { mol: h }]);
      M.setStyle({}, { stick: {} });
      const w = Array.from(c);
      w.forEach(([G, ee], Z) => {
        const P = R.coords[G], O = D.coords[ee];
        if (!P || !O) return;
        const B = zu(Z, w.length);
        for (const [K, J, te] of [P, O])
          M.addSphere({
            center: { x: K, y: J, z: te },
            radius: At.sphereRadius,
            color: B,
            alpha: At.sphereAlpha
          });
      }), M.zoomTo();
      const { clientWidth: x, clientHeight: z } = V.container, W = x - 2 * Fu;
      W > 0 && W < z && M.zoom(W / z), M.render(), N(V);
    }, U = () => {
      const V = v(`${s} to ${a}  (${c.size} mapped pairs)`), Q = [], q = [];
      for (const [G, ee] of c) {
        const Z = f.coords[G], P = h.coords[ee];
        Z && P && (Q.push(Z), q.push(P));
      }
      const R = Su(Q, q), D = h.coords.map((G) => R ? ku(G, R.R, R.t) : [...G]), { axis: M, lift: w } = Tu(f.coords, D), x = {
        ...h,
        coords: D.map((G) => {
          const ee = [G[0], G[1], G[2]];
          return ee[M] += w, ee;
        })
      }, z = A(V, [{ mol: f }, { mol: x }]), W = {
        stick: { radius: Ve.stick, colorscheme: "Jmol" },
        sphere: { scale: Ve.pairSphere, colorscheme: "Jmol" }
      };
      z.setStyle({ model: 0 }, W), z.setStyle({ model: 1 }, W);
      for (const [G, ee] of c) {
        const Z = f.coords[G], P = x.coords[ee];
        !Z || !P || z.addCylinder({
          start: { x: Z[0], y: Z[1], z: Z[2] },
          end: { x: P[0], y: P[1], z: P[2] },
          radius: Ve.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: ur.pairLine
        });
      }
      z.zoomTo(), M === 2 ? z.rotate(90, "x") : M === 0 && z.rotate(-90, "z"), z.render(), N(V);
    }, Y = () => {
      const V = Qe, Q = Ai(V.customSpec), R = [
        { mol: f, uniques: $, side: "left", custom: Q.left },
        { mol: h, uniques: b, side: "right", custom: Q.right }
      ].map((D) => {
        const M = I("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), w = I(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${Rt.canvas2D};`
        );
        return w.appendChild(de("Loading 2D depiction...")), M.appendChild(w), M.appendChild(I("div", gr, D.mol.name)), _.appendChild(M), { box: w, side: D };
      });
      Lr().then((D) => {
        const M = Yd(V, D), w = Au(D, i.sdf, o.sdf, V.layout, V.alignPair ? c : null);
        for (const { box: x, side: z } of R) {
          const W = Ni(V, z.mol, z.uniques, z.side), G = Xd(
            V,
            fr,
            W,
            z.custom,
            M,
            z.mol.symbols.length
          ), ee = Zd(D, z.side === "left" ? w.left : w.right, fr, G);
          if (x.replaceChildren(), !ee) {
            x.appendChild(de("Failed to parse molecule", !0));
            continue;
          }
          Rs(x, ee, fr);
          const Z = x.querySelector("svg");
          Z && ou(Z, z.mol, V, W, z.custom, M);
        }
      }).catch((D) => {
        for (const { box: M } of R)
          M.replaceChildren(de(`RDKit failed to load: ${ge(D)}`, !0));
      });
    }, H = () => {
      const V = I("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      _.appendChild(V);
      const Q = I("div", "display:flex;flex-direction:column;gap:2px;");
      Q.appendChild(
        I(
          "div",
          `font-size:${X.title};font-weight:${Be.bold};color:${Te.title};`,
          n.name || `${s} to ${a}`
        )
      ), Q.appendChild(I("div", `font-size:${X.body};color:${Te.faint};`, "LigandAtomMapping")), V.appendChild(Q);
      const q = I("div", `display:flex;flex-wrap:wrap;gap:${se.lg} 16px;font-size:${X.small};`);
      q.appendChild(pe("mapped atoms", String(c.size))), q.appendChild(
        pe("element changes", String($.elements.length), Qe.modifiedColor)
      ), q.appendChild(pe(`unique to ${s}`, String($.atoms.length), Qe.destroyedColor)), q.appendChild(pe(`unique to ${a}`, String(b.atoms.length), Qe.createdColor)), q.appendChild(pe(`atoms in ${s}`, String(f.symbols.length))), q.appendChild(pe(`atoms in ${a}`, String(h.symbols.length))), q.appendChild(pe("score", n.score == null ? gt : n.score.toFixed(3))), V.appendChild(q);
      const R = I("div", Xr, "Correspondence");
      V.appendChild(R);
      const D = I("div", Yr);
      D.textContent = c.size ? Array.from(c, ([w, x]) => `${w} -> ${x}`).join("   ") : "This mapping relates no atoms at all.", V.appendChild(D);
      const M = Object.entries(n.annotations ?? {}).filter(([w]) => w !== "score");
      if (M.length) {
        V.appendChild(I("div", Xr, "Annotations"));
        const w = I("div", `${Yr}color:${Te.faint};`);
        for (const [x, z] of M)
          w.appendChild(I("div", "", `${x}: ${String(z)}`));
        V.appendChild(w);
      }
      V.appendChild(
        I(
          "div",
          `${Bs}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, re = () => {
      if (u(), p === "info") {
        H();
        return;
      }
      if (p === "2d") {
        Y();
        return;
      }
      _.appendChild(de("Loading 3D viewer...")), Vr().then(() => {
        l && (_.replaceChildren(), p === "colored" ? C() : p === "openfe" ? j() : p === "lines" ? U() : F());
      }).catch((V) => {
        _.replaceChildren(de(`3D render failed: ${ge(V)}`, !0));
      });
    };
    return re(), {
      onResize() {
        for (const V of m)
          V.viewer && (V.viewer.resize(), V.viewer.render());
      },
      cleanup() {
        l = !1, u();
      }
    };
  }
}
Re("gufe-atom-mapping", Iu);
const Hi = ["Force-directed", "Circular", "Radial"], Du = "ligand-network", Gi = "Cmd/Ctrl-click to select several.", qu = "Click a ligand or an edge to see it.";
function Vu(e) {
  const { x: t, y: n, fx: r, fy: i, ...o } = e;
  return o;
}
const Wi = (e) => Math.round(e * 100) / 100;
function Lu(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (s) => typeof s == "number" && Number.isFinite(s);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((s) => Array.isArray(s) && s.length === 2 && s.every(r))) return null;
  const i = r(n.selected) ? Math.trunc(n.selected) : -1, o = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: i, selectedKind: o };
}
function Bu(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Ct = { initial: 0.58, min: 0.25, max: 0.8 }, Ge = 38, Fn = 200, js = 4, Uu = 14, Ku = 18, Pe = {
  fontSize: 11,
  below: Ge - js + 12,
  minFontSize: 7,
  insideWidth: (Ge - 6) * 2
}, Ji = 1.5, Hu = 6.5, Gu = 0.9, Wu = 14, hr = { size: 8, clearance: 8 }, Ju = { fontSize: 10 }, zs = { debounceMs: 250, atomRadius: 0.4 }, Yu = br(T.netMatchAtom), Et = { padding: 4, opacity: 0.95 }, Xu = 3, yt = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Zu = (e) => yt.find((t) => e >= t.from) ?? yt[yt.length - 1], Qu = (e) => yt[Math.min(yt.indexOf(e) + 1, yt.length - 1)], On = 200, ef = 24, mr = { node: 0.12, edge: 0.06 }, tf = 1.8, _e = {
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
function nf(e) {
  const t = I(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${X.small};line-height:1.5;max-width:260px;background:${T.tooltipBg};border:1px solid ${T.tooltipBorder};color:${T.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
  return e.appendChild(t), {
    show(n, r, i) {
      t.innerHTML = n, t.style.left = `${r + 14}px`, t.style.top = `${i - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function rf(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const i = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, i);
    const o = ae("marker", {
      id: i,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: Ge + hr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: hr.size,
      markerHeight: hr.size,
      orient: "auto"
    });
    return o.appendChild(ae("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function of(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function sf(e) {
  const [t, n] = T.netEdgeRamp.map(of), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Fe = $t, af = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function cf(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], i = (y) => (e.matched().get(y) ?? []).join(","), o = (y, $) => {
    if (t.has($) || n.has($)) return;
    const b = e.nodes[$], S = e.matched().get($), _ = b.sdf && As(
      y,
      b.sdf,
      Fn,
      Qe.layout,
      S && { atoms: S, color: Yu, radius: zs.atomRadius }
    );
    if (!_) {
      n.add($);
      return;
    }
    const g = new DOMParser().parseFromString(_, "image/svg+xml").documentElement;
    if (!g || g.nodeName.toLowerCase() === "parsererror") {
      n.add($);
      return;
    }
    const p = (Ge - js) * 2 / Fn, d = e.depictionGroups[$];
    d.setAttribute(
      "transform",
      `translate(${-p * Fn / 2},${-p * Fn / 2}) scale(${p})`
    );
    let m = 0;
    for (const k of Array.from(g.childNodes)) {
      if (k.nodeType !== 1) continue;
      const l = k.nodeName.toLowerCase();
      if (!(l === "defs" || l === "metadata" || l === "title")) {
        if (l === "rect") {
          const u = (k.getAttribute("fill") ?? "").toLowerCase();
          if (u === "#ffffff" || u === "white" || u === "rgb(255,255,255)") continue;
        }
        d.appendChild(document.importNode(k, !0)), m++;
      }
    }
    m ? (t.add($), r[$] = i($)) : n.add($);
  }, s = () => {
    for (const y of [...t])
      r[y] !== i(y) && (e.depictionGroups[y].replaceChildren(), t.delete(y));
  }, a = [], c = (y, $) => {
    if (a[y]) return a[y];
    $.setAttribute("font-size", String(Pe.fontSize));
    let b = 0;
    try {
      b = $.getBBox().width;
    } catch {
      return Pe.fontSize;
    }
    if (!b) return Pe.fontSize;
    const S = Pe.fontSize * Pe.insideWidth / b;
    return a[y] = Math.max(Pe.minFontSize, Math.min(Pe.fontSize, S)), a[y];
  }, f = (y, $) => {
    const b = $.structure && !t.has(y) ? Qu($) : $;
    e.depictionGroups[y].setAttribute("display", b.structure ? "inline" : "none");
    const S = e.matched().has(y), _ = e.circles[y];
    _.setAttribute("fill", b.disc ? S ? T.netMatchFill : T.netNodeFill : "none"), _.setAttribute("stroke", b.disc ? S ? T.netMatchStroke : T.netNodeStroke : "none"), e.initials[y].setAttribute("display", b.initials ? "inline" : "none");
    const g = e.captions[y];
    if (g.setAttribute("fill", S ? T.netMatchStroke : T.netNodeCaption), g.setAttribute("display", b.name === "none" ? "none" : "inline"), b.name === "none") return;
    const p = b.name === "inside";
    g.setAttribute("y", p ? "0" : String(Pe.below)), g.setAttribute("dominant-baseline", p ? "middle" : "auto"), g.setAttribute("font-size", String(p ? c(y, g) : Pe.fontSize));
  };
  return { apply: (y, $, b) => {
    const S = Zu(y);
    e.stage.setAttribute("data-detail", S.id), e.edgeLabels.setAttribute("display", S.edgeScores ? "inline" : "none");
    for (let d = 0; d < e.nodes.length; d++) f(d, S);
    if (!S.structure) return;
    const { width: _, height: g } = e.viewport(), p = [];
    e.nodes.forEach((d, m) => {
      if (t.has(m) || n.has(m)) return;
      const k = d.x * y + $, l = d.y * y + b;
      k < -On || l < -On || k > _ + On || l > g + On || p.push(m);
    }), p.length && e.rdkit().then((d) => {
      if (d)
        for (const m of p)
          o(d, m), f(m, S);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: s };
}
function lf(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : Fe(s);
  return r === "ligands" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function df(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Yi(e, t)), navigator.clipboard || Yi(e, t);
}
function Yi(e, t) {
  const n = I("textarea", `width:100%;height:80px;font-size:${X.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function uf(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = I("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function ff(e) {
  const t = Zr("ligand-network.query"), n = Zr("ligand-network.smarts"), r = Pr("ligand-network.minScore", 0, 0, 1), i = vt("ligand-network.exportAs", "names", ["names", "keys"]), o = I(
    "div",
    `display:flex;flex-direction:column;gap:8px;min-width:236px;max-width:340px;box-sizing:border-box;padding:10px;min-height:0;background:${T.panelBg};border-right:1px solid ${T.splitBorder};`
  ), s = I("input", `${yr}width:100%;box-sizing:border-box;`);
  s.type = "search", s.placeholder = "Search ligands", s.value = t.get(), e.query.text = s.value, s.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), o.appendChild(s);
  const a = I("input", `${yr}width:100%;box-sizing:border-box;`);
  a.type = "text", a.placeholder = "Colour by SMARTS", a.value = n.get(), a.spellcheck = !1, a.setAttribute("aria-label", "Colour the ligands matching this SMARTS pattern"), o.appendChild(a);
  const c = I(
    "div",
    // One line held open whether or not there is anything to say, so this reads
    // as a line that changes rather than as the ligand list twitching up and
    // down under it every time a pattern is typed, matched or refused. Every
    // message fits one line at this panel width; a longer one would want the
    // wording shortened rather than the space here grown.
    `font-size:${X.tiny};line-height:1.5;min-height:1.5em;color:${T.textMuted2};`
  );
  o.appendChild(c);
  const f = (F) => {
    switch (F.status) {
      case "ok": {
        const C = F.unreadable ? `, ${F.unreadable} could not be read` : "";
        return `${F.matched.size} of ${e.nodes.length} ligands match${C}`;
      }
      case "invalid":
        return "RDKit does not accept that as a SMARTS pattern.";
      case "unsupported":
        return "This RDKit build cannot match SMARTS.";
      default:
        return "";
    }
  }, h = (F) => {
    c.textContent = F.trim() ? "Matching..." : "", e.match(F).then(
      (C) => {
        C.status !== "superseded" && (c.textContent = f(C));
      },
      () => {
        c.textContent = "Matching failed.";
      }
    );
  };
  let y = 0;
  a.oninput = () => {
    n.set(a.value), window.clearTimeout(y), y = window.setTimeout(() => h(a.value), zs.debounceMs);
  };
  const $ = I("div", `display:flex;align-items:center;gap:8px;font-size:${X.small};color:${T.textMuted};`), b = I("span", `min-width:28px;color:${T.textPrimary};`, "0.00"), S = I("input", "flex:1;");
  S.type = "range", S.min = "0", S.max = "1", S.step = "0.01", S.value = String(r.get()), e.filter.minScore = Number(S.value), S.setAttribute("aria-label", "Hide mappings scoring below this"), $.appendChild(I("span", "", "score >=")), $.appendChild(S), $.appendChild(b), o.appendChild($);
  const _ = I("div", `font-size:${X.small};color:${T.textMuted2};`);
  o.appendChild(_);
  const g = I("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  o.appendChild(g), o.appendChild(I("div", `font-size:${X.tiny};line-height:1.5;color:${T.textMuted2};`, Gi));
  const p = I("div", "display:flex;flex-direction:column;gap:6px;"), d = I("div", `display:flex;align-items:center;gap:6px;font-size:${X.small};color:${T.textMuted};`);
  d.appendChild(I("span", "", "copy as"));
  const m = Ar(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    i.get(),
    () => {
    },
    i
  );
  m.style.flex = "1", d.appendChild(m), p.appendChild(d);
  const k = I("div", `font-size:${X.tiny};line-height:1.5;color:${T.textMuted2};`), l = (F) => {
    k.textContent = F;
  }, u = I("div", "display:flex;gap:4px;"), v = [
    ["Ligands", "ligands", "Copy the selected ligand names, one per line"],
    ["Edges", "edges", "Copy the edges between the selected ligands, one pair per line"]
  ];
  for (const [F, C, j] of v) {
    const U = I("button", `${Nt}flex:1;`, F);
    U.title = j, U.onclick = (Y) => {
      const H = m.value, re = lf(e.nodes, e.edges, e.selected, C, H);
      if (!re) {
        l(
          e.selected.size === 0 ? "Nothing selected. Click a ligand above." : C === "edges" ? `No mappings between the ${e.selected.size} selected ligands. ${Gi}` : "Nothing to copy."
        );
        return;
      }
      const V = re.split(`
`).length;
      Y.shiftKey ? (uf(re, `selected-${C}.txt`), l(`Saved ${V} ${C === "edges" ? "edges" : "ligands"} to a file.`)) : (df(re, p), l(C === "edges" ? `Copied ${V} edges.` : `Copied ${e.selected.size} ligands.`));
    }, u.appendChild(U);
  }
  p.appendChild(u), p.appendChild(k), p.appendChild(
    I("div", `font-size:${X.tiny};color:${T.textMuted2};`, "Shift-click to save as a file instead.")
  ), o.appendChild(p);
  const E = I("button", `${Nt}width:100%;`, "Clear selection");
  E.onclick = () => {
    e.selected.clear(), N(), e.refresh();
  }, o.appendChild(E);
  const A = (F) => {
    const C = e.query.text.trim().toLowerCase();
    return C ? Fe(F).toLowerCase().includes(C) || (F.smiles ?? "").toLowerCase().includes(C) || F["gufe-key"].toLowerCase().includes(C) : !0;
  }, N = () => {
    l(""), g.replaceChildren();
    const F = e.nodes.map((C, j) => ({ node: C, index: j })).filter(({ node: C }) => A(C));
    _.textContent = `${F.length} of ${e.nodes.length} ligands`;
    for (const { node: C, index: j } of F) {
      const U = C["gufe-key"], Y = I(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${X.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(U) ? T.cardBorderActive : T.cardBorder};background:${e.selected.has(U) ? T.cardBgActive : T.cardBg};color:${T.textPrimary};`
      ), H = I("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Fe(C));
      H.title = `${Fe(C)}
${C.smiles ?? ""}`, Y.appendChild(H), Y.onclick = (re) => {
        re.shiftKey || re.metaKey || re.ctrlKey ? e.selected.has(U) ? e.selected.delete(U) : e.selected.add(U) : (e.selected.clear(), e.selected.add(U), e.focus(j)), N(), e.refresh();
      }, g.appendChild(Y);
    }
    F.length || g.appendChild(I("div", `font-size:${X.small};padding:8px;color:${T.textMuted2};`, "Nothing matches."));
  };
  return s.oninput = () => {
    e.query.text = s.value, t.set(s.value), N(), e.refresh();
  }, S.oninput = () => {
    e.filter.minScore = Number(S.value), b.textContent = e.filter.minScore.toFixed(2), r.set(e.filter.minScore), e.refresh();
  }, N(), a.value.trim() && h(a.value), o;
}
class pf extends Ae {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Ft(n), i = [];
    let o = 0;
    for (const P of n.nodes ?? []) {
      const O = ke(r, P, "SmallMoleculeComponentViz");
      if (!O) {
        o++;
        continue;
      }
      i.push({ ...O, x: 0, y: 0 });
    }
    const s = new Map(i.map((P) => [P["gufe-key"], P])), a = [];
    let c = 0;
    for (const P of n.edges ?? []) {
      const O = s.get(P.componentA), B = s.get(P.componentB);
      if (!O || !B) {
        c++;
        continue;
      }
      a.push({ ...P, index: a.length, from: O, to: B });
    }
    const f = it(n.name || "Ligand network");
    f.statsEl.appendChild(pe("ligands", String(i.length))), f.statsEl.appendChild(pe("mappings", String(a.length))), t.appendChild(f);
    const h = I("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const y = /* @__PURE__ */ new Set(), $ = { minScore: 0 }, b = { text: "" };
    let S = () => {
    }, _ = null;
    const g = () => _ ??= Lr().catch((P) => (console.warn("[gufe-viz] RDKit failed to load:", ge(P)), null)), p = wu(
      g,
      i.map((P) => P.sdf ?? "")
    );
    let d = /* @__PURE__ */ new Map(), m = () => {
    };
    const k = async (P) => {
      const O = await p.run(P);
      return O.status === "superseded" || (d = O.status === "ok" ? O.matched : /* @__PURE__ */ new Map(), m()), O;
    }, l = wa(
      f,
      () => ff({
        nodes: i,
        edges: a,
        selected: y,
        filter: $,
        query: b,
        refresh: () => S(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (P) => {
          Y(P), ee({ kind: "ligand", index: P });
        },
        match: (P) => k(P)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => Z(),
        remember: Pt("ligand-network.menuOpen", !1)
      }
    );
    h.appendChild(l.panel);
    let u = () => {
    };
    const v = I("div", `min-width:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`), E = I("div", `min-width:0;display:flex;flex-direction:column;background:${T.appBg};`);
    h.appendChild(v), h.appendChild(
      ls(h, v, E, {
        min: Ct.min,
        max: Ct.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Pr("ligand-network.canvasShare", Ct.initial, Ct.min, Ct.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => u()
      })
    ), h.appendChild(E);
    const A = I("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${T.netCanvasBg};`);
    v.appendChild(A);
    const N = vt("ligand-network.layout", "Force-directed", Hi), F = this.#t(
      (P) => Z(P),
      () => z(),
      N
    );
    v.appendChild(F.bar);
    const C = this.#e(E, r);
    if (!i.length)
      return A.appendChild(
        de(
          o ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), C.message("Nothing to show."), {};
    o && tt(
      A,
      `${o} ligand${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && tt(A, `${c} mapping${c === 1 ? "" : "s"} name a ligand this network does not contain`);
    const j = g(), U = nf(A);
    let Y = () => {
    };
    const H = Lu(Xs(Du), i.length);
    let re = H && { scale: H.scale, tx: H.tx, ty: H.ty }, V = a.length ? { kind: "edge", index: 0 } : null;
    if (H && H.selected >= 0) {
      const P = H.selectedKind ?? "edge";
      H.selected < (P === "ligand" ? i.length : a.length) && (V = { kind: P, index: H.selected });
    }
    let Q = () => ({ scale: 1, tx: 0, ty: 0 }), q = !1, R = null, D = N.get(), M = !1, w = !0, x = () => {
    }, z = () => {
    }, W = 0;
    const G = () => {
      if (!V) {
        C.message(a.length ? qu : "Click a ligand to see it.");
        return;
      }
      V.kind === "edge" ? C.showMapping(a[V.index]) : C.showLigand(i[V.index]);
    }, ee = (P) => {
      V = P, G(), x();
    }, Z = (P = D) => {
      const O = q && P === D ? Q() : null, B = ++W;
      D = P, R?.(), R = null, A.querySelectorAll("svg").forEach((ce) => ce.remove());
      const K = A.clientWidth || 800, J = A.clientHeight || 600;
      hf(i, K, J, D, a), H && Bu(i, H.nodes);
      const te = () => {
        if (!w || B !== W) return;
        const ce = this.#n(A, i, a, K, J, ee, j, U);
        x = () => ce.setSelected(V), z = ce.reset, R = ce.cleanup, Y = (ue) => ce.focusOn(ue), Q = ce.transform, S = () => {
          const ue = b.text.trim().toLowerCase(), he = y.size > 0 || ue.length > 0, fe = /* @__PURE__ */ new Set();
          for (const Ce of i) {
            const ze = Ce["gufe-key"], Je = y.has(ze) || ue.length > 0 && (Fe(Ce).toLowerCase().includes(ue) || (Ce.smiles ?? "").toLowerCase().includes(ue) || ze.toLowerCase().includes(ue));
            (!he || Je) && fe.add(ze);
          }
          const je = /* @__PURE__ */ new Set();
          a.forEach((Ce, ze) => {
            (Ce.score ?? 0) < $.minScore || !fe.has(Ce.from["gufe-key"]) || !fe.has(Ce.to["gufe-key"]) || je.add(ze);
          });
          const $e = he || $.minScore > 0;
          ce.setEmphasis($e ? fe : null, $e ? je : null);
        }, m = () => ce.setMatches(d), x(), S(), m();
        const ye = re ?? O;
        ye ? (ce.setTransform(ye.scale, ye.tx, ye.ty), re = null) : ce.fit(), q = !0;
      };
      if (D !== "Force-directed" || M || H) {
        te();
        return;
      }
      mf(i, a, K, J).then((ce) => {
        if (!(!w || B !== W)) {
          if (ce) {
            te();
            return;
          }
          M = !0, F.picker.value = "Circular", tt(A, "d3 could not be loaded - showing the circular layout instead"), Z("Circular");
        }
      }, te);
    };
    return u = () => Z(), Z(), G(), {
      onResize: () => Z(),
      cleanup: () => {
        w = !1, p.cancel(), U.remove(), R?.();
      },
      viewState: () => ({
        nodes: i.map((P) => [Wi(P.x), Wi(P.y)]),
        ...Q(),
        selected: V ? V.index : -1,
        selectedKind: V ? V.kind : "edge"
      })
    };
  }
  #t(t, n, r) {
    const i = I(
      "div",
      xr.bottom
    ), o = I("div", `display:flex;align-items:center;gap:6px;font-size:${X.small};color:${T.textMuted};`);
    o.appendChild(I("span", "", "score")), o.appendChild(
      I(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${T.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(I("span", "", "0 -> 1")), i.appendChild(o), i.appendChild(I("label", `font-size:${X.body};margin-left:auto;color:${T.textMuted};`, "Layout"));
    const s = Ar(
      Hi.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return i.appendChild(s), i.appendChild(Ur(n, "Reset pan and zoom")), { bar: i, picker: s };
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
    const r = I("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const i = (s) => r.replaceChildren(de(s)), o = (s, a) => {
      const c = document.createElement(s);
      c.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", c.payload = a, r.replaceChildren(c);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network.
      showMapping: (s) => o("gufe-atom-mapping", Ts(s, n)),
      showLigand: (s) => o("gufe-small-molecule", Vu(s)),
      message: i
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, n, r, i, o, s, a, c) {
    const f = ae("svg", {
      class: "gufe-graph",
      width: i,
      height: o,
      style: "display:block;touch-action:none;"
    }), h = ae("g");
    f.appendChild(h), t.appendChild(f);
    const y = ae("defs"), $ = rf(y);
    f.appendChild(y);
    const b = [], S = ae("g"), _ = ae("g"), g = ae("g", { "pointer-events": "none" }), p = ae("g");
    h.append(S, _, g, p);
    for (const C of r) {
      const j = sf(C.score), U = Ji + (C.score ?? 0.5) * (Hu - Ji), Y = ae("line", {
        stroke: T.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": U + Et.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), H = ae("line", {
        stroke: j,
        "stroke-width": U,
        "stroke-opacity": Gu,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${$(j)})`,
        "pointer-events": "none"
      }), re = ae("line", { stroke: "transparent", "stroke-width": Wu, style: "cursor:pointer;" });
      re.addEventListener("click", (q) => {
        q.stopPropagation(), s({ kind: "edge", index: C.index });
      }), re.addEventListener("mousemove", (q) => {
        c.show(
          `<div style="font-weight:700;color:${T.titleColor};">${Le(Fe(C.from))} -&gt; ${Le(Fe(C.to))}</div>` + (C.score == null ? `<div style="color:${T.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${C.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${X.tiny};color:${T.textMuted2};">Click to see the mapping</div>`,
          q.offsetX,
          q.offsetY
        );
      }), re.addEventListener("mouseleave", () => c.hide()), b.push(Y), S.append(Y, H), _.appendChild(re);
      const V = ae("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ju.fontSize,
        "font-weight": 600,
        fill: T.netEdgeLabel
      });
      V.textContent = C.score == null ? "" : C.score.toFixed(2);
      const Q = ae("g", { class: "gufe-edge-label" });
      Q.appendChild(V), g.appendChild(Q);
    }
    const d = [], m = [], k = [], l = [], u = [], v = n.map((C) => {
      const j = ae("g", { class: "gufe-node", style: "cursor:grab;" });
      j.addEventListener("mousemove", (Q) => {
        c.show(
          `<div style="font-weight:700;color:${T.titleColor};">${Le(Fe(C))}</div>` + (C.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Le(C.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${X.tiny};color:${T.textMuted2};overflow-wrap:anywhere;">${Le(C["gufe-key"])}</div><div style="margin-top:4px;font-size:${X.tiny};color:${T.textMuted2};">Click to see the ligand</div>`,
          Q.offsetX,
          Q.offsetY
        );
      }), j.addEventListener("mouseleave", () => c.hide());
      const U = ae("circle", {
        class: "gufe-node-halo",
        r: Ge + Et.padding,
        fill: "none",
        stroke: T.netHaloColor,
        "stroke-width": Et.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      j.appendChild(U), k.push(U);
      const Y = ae("circle", {
        class: "gufe-node-disc",
        r: Ge,
        fill: T.netNodeFill,
        stroke: T.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      j.appendChild(Y), m.push(Y);
      const H = ae("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      j.appendChild(H), d.push(H);
      const re = ae("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ku,
        "font-weight": 700,
        fill: T.netInitials,
        "pointer-events": "none"
      });
      re.textContent = Fe(C).slice(0, 2).toUpperCase(), j.appendChild(re), l.push(re);
      const V = ae("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Pe.below,
        "font-size": Pe.fontSize,
        "font-weight": 600,
        fill: T.netNodeCaption,
        "pointer-events": "none"
      });
      return V.textContent = af(Fe(C), Uu), V.setAttribute("display", "none"), u.push(V), j.appendChild(V), p.appendChild(j), j;
    }), E = () => {
      r.forEach((C, j) => {
        for (const Y of [b[j], S.children[j * 2 + 1], _.children[j]]) {
          const H = Y;
          H.setAttribute("x1", String(C.from.x)), H.setAttribute("y1", String(C.from.y)), H.setAttribute("x2", String(C.to.x)), H.setAttribute("y2", String(C.to.y));
        }
        g.children[j].setAttribute(
          "transform",
          `translate(${(C.from.x + C.to.x) / 2},${(C.from.y + C.to.y) / 2 - 8})`
        );
      }), n.forEach((C, j) => v[j].setAttribute("transform", `translate(${C.x},${C.y})`));
    };
    E();
    let A = /* @__PURE__ */ new Map();
    const N = cf({
      nodes: n,
      circles: m,
      matched: () => A,
      captions: u,
      initials: l,
      depictionGroups: d,
      edgeLabels: g,
      stage: f,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), F = this.#r(
      f,
      h,
      n,
      v,
      E,
      N.apply,
      (C) => s({ kind: "ligand", index: C })
    );
    return {
      setSelected(C) {
        const j = C?.kind === "edge" ? C.index : -1, U = C?.kind === "ligand" ? C.index : -1;
        b.forEach((Y, H) => Y.setAttribute("opacity", H === j ? String(Et.opacity) : "0")), k.forEach((Y, H) => Y.setAttribute("opacity", H === U ? String(Et.opacity) : "0"));
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
      setMatches(C) {
        A = C, N.forget();
        const { scale: j, tx: U, ty: Y } = F.transform();
        N.apply(j, U, Y);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(C, j) {
        v.forEach((U, Y) => {
          const H = !C || C.has(n[Y]["gufe-key"]);
          U.setAttribute("opacity", H ? "1" : String(mr.node));
        }), r.forEach((U, Y) => {
          const H = !j || j.has(Y), re = H ? "0.9" : String(mr.edge);
          S.children[Y * 2 + 1].setAttribute("stroke-opacity", re), g.children[Y].setAttribute("opacity", H ? "1" : String(mr.edge));
        });
      },
      focusOn(C) {
        const j = n[C];
        j && F.centreOn(j.x, j.y);
      },
      setDetail: N.apply,
      depictionsDrawn: () => N.drawn(),
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
  #r(t, n, r, i, o, s, a) {
    const c = Os(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Fs(r, Ge),
      margin: ef,
      onTransform: s,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return i.forEach((f, h) => {
      let y = null, $ = !1;
      f.addEventListener("pointerdown", (S) => {
        S.stopPropagation();
        const { scale: _ } = c.transform();
        y = { x: S.clientX - r[h].x * _, y: S.clientY - r[h].y * _ }, $ = !1, f.setPointerCapture(S.pointerId);
      }), f.addEventListener("pointermove", (S) => {
        if (!y) return;
        const { scale: _ } = c.transform(), g = (S.clientX - y.x) / _, p = (S.clientY - y.y) / _;
        Math.hypot(g - r[h].x, p - r[h].y) * _ > Xu && ($ = !0), r[h].x = r[h].fx = g, r[h].y = r[h].fy = p, o();
      });
      const b = () => {
        y = null;
      };
      f.addEventListener("pointerup", b), f.addEventListener("pointercancel", b), f.addEventListener("click", (S) => {
        S.stopPropagation(), $ || a(h);
      });
    }), {
      ...c,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (f, h) => c.centreOn(f, h, tf)
    };
  }
}
function hf(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (c, f) => {
    c.forEach((h, y) => {
      const $ = 2 * Math.PI * y / Math.max(1, c.length) - Math.PI / 2;
      h.x = o + f * Math.cos($), h.y = s + f * Math.sin($), h.fx = r === "Force-directed" ? void 0 : h.x, h.fy = r === "Force-directed" ? void 0 : h.y;
    });
  };
  if (r === "Radial" && e.length) {
    const c = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of i)
      c.get(_.from["gufe-key"]).push(_.to["gufe-key"]), c.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const f = new Map(e.map((_) => [_["gufe-key"], _])), h = e.reduce(
      (_, g) => c.get(g["gufe-key"]).length > c.get(_["gufe-key"]).length ? g : _
    ), y = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let $ = [h["gufe-key"]], b = 0;
    const S = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      a(
        $.map((g) => f.get(g)),
        b === 0 ? 0 : b * S + 40
      );
      const _ = [];
      for (const g of $)
        for (const p of c.get(g))
          y.has(p) || (y.add(p), _.push(p));
      $ = _, b++;
    }
    a(e.filter((_) => !y.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function mf(e, t, n, r) {
  let i;
  try {
    if (i = await Ss(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"], score: c.score })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((c) => c["gufe-key"]).distance((c) => _e.linkBaseDistance + (1 - (c.score ?? 0.5)) * _e.linkScoreBonus).strength(_e.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength(_e.chargeStrength).distanceMin(_e.chargeDistanceMin).distanceMax(_e.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, r / 2).strength(_e.centerStrength)).force("collision", i.forceCollide(Ge + _e.collisionPadding).iterations(_e.collisionIterations)).force("x", i.forceX(n / 2).strength(_e.drift)).force("y", i.forceY(r / 2).strength(_e.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * _e.tickMultiplier; c++) s.tick();
  return !0;
}
Re("gufe-ligand-network", pf);
const gf = 520;
function yf(e, t) {
  return { ...e, registry: Hr(t, Object.values(e.components ?? {})) };
}
function vf(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function $f(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class bf extends Ae {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Ft(n), i = [], o = [];
    for (const [g, p] of Object.entries(n.components ?? {})) {
      const d = rt(r, p);
      d ? i.push([g, d]) : o.push(g);
    }
    const s = it(n.name || "Chemical system");
    if (s.statsEl.appendChild(pe("components", String(i.length))), t.appendChild(s), !i.length)
      return t.appendChild(
        de(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = I("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), o.length && tt(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const c = I("div", `min-width:0;overflow:auto;display:flex;gap:6px;padding:10px;background:${T.panelBg};`);
    a.appendChild(c);
    const f = I("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(f);
    const h = I("div", "flex:1;min-height:0;display:flex;");
    f.appendChild(h);
    const y = document.createElement("gufe-view");
    y.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(y);
    const $ = [], b = (g) => {
      $.forEach((p, d) => {
        const m = d === g;
        p.style.background = m ? T.cardBgActive : T.cardBg, p.style.borderColor = m ? T.cardBorderActive : T.cardBorder;
      }), y.payload = i[g][1];
    };
    i.forEach(([g, p], d) => {
      const m = I(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${T.cardBorder};border-radius:8px;background:${T.cardBg};cursor:pointer;font-family:inherit;font-size:${X.body};flex-shrink:0;`
      );
      m.appendChild(I("span", `font-weight:700;color:${T.textPrimary};`, g)), m.appendChild(I("span", `font-size:${X.small};color:${T.textMuted};`, vf(p))), m.appendChild(Vn($f(p))), m.onclick = () => b(d), $.push(m), c.appendChild(m);
    });
    let S = null;
    const _ = cs(t, (g) => {
      const p = g > 0 && g < gf;
      if (p !== S) {
        S = p, a.style.flexDirection = p ? "column" : "row", c.style.flex = p ? "0 0 auto" : "0 0 220px", c.style.flexDirection = p ? "row" : "column", c.style.borderRight = p ? "none" : `1px solid ${T.splitBorder}`, c.style.borderBottom = p ? `1px solid ${T.splitBorder}` : "none";
        for (const d of $) d.style.width = p ? "auto" : "100%";
        y.resize?.();
      }
    });
    return b(0), {
      onResize: () => y.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => {
        _(), y.remove();
      }
    };
  }
}
Re("gufe-chemical-system", bf);
const wf = 460;
function _f(e, t) {
  const n = ke(t, e.stateA, "ChemicalSystemViz"), r = ke(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const i = [e.stateA, e.stateB, e.protocol];
  for (const o of [n, r]) i.push(...Object.values(o.components ?? {}));
  for (const o of e.mappings ?? []) i.push(o.componentA, o.componentB);
  return { ...e, registry: Hr(t, i) };
}
const Er = {
  unchanged: T.diffUnchanged,
  changed: T.diffChanged,
  added: T.diffAdded,
  removed: T.diffRemoved
};
function Sf(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function kf(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Cf(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Ef(e, t, n) {
  const r = I(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${T.cardBg};border:1px solid ${T.cardBorder};`
  ), i = I(
    "span",
    `display:none;font-size:${X.tiny};font-weight:700;letter-spacing:.08em;color:${T.textMuted2};`,
    n
  );
  r.appendChild(i);
  const o = Cf(e);
  return o ? (r.style.borderColor = t === "unchanged" ? T.cardBorder : Er[t], r.appendChild(I("span", `font-size:${X.body};font-weight:600;color:${T.textPrimary};`, o.name)), r.appendChild(Vn(o.type)), { cell: r, sideMark: i }) : (r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(I("span", `font-size:${X.body};color:${T.textMuted2};`, "absent")), { cell: r, sideMark: i });
}
function xf(e, t) {
  const n = rt(t, e.componentA), r = rt(t, e.componentB);
  return `${n ? $t(n) : "A"} to ${r ? $t(r) : "B"}`;
}
class Pf extends Ae {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Ft(n), i = ke(r, n.stateA, "ChemicalSystemViz"), o = ke(r, n.stateB, "ChemicalSystemViz"), s = ke(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], c = it(n.name || "Transformation");
    if (c.statsEl.appendChild(pe("protocol", s?.gufe_type || s?.name || "-")), c.statsEl.appendChild(pe("mappings", String(a.length))), t.appendChild(c), !i || !o)
      return t.appendChild(
        de("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const f = kf(i, o), h = I("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const y = I("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [l, u] of [
      ["State A", i],
      ["State B", o]
    ])
      y.appendChild(
        I(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${X.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${T.textMuted2};`,
          `${l}${u.name ? ` - ${u.name}` : ""}`
        )
      );
    h.appendChild(y);
    const $ = [], b = [], S = [];
    for (const l of f) {
      const u = i.components?.[l], v = o.components?.[l], E = Sf(u, v), A = rt(r, u), N = rt(r, v), F = I("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), C = I("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      C.appendChild(
        I("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Er[E]};`)
      );
      const j = I("span", `font-size:${X.body};font-weight:700;color:${T.textPrimary};overflow-wrap:anywhere;`, l);
      j.title = E, C.appendChild(j), F.appendChild(C);
      for (const [U, Y] of [
        [A, "A"],
        [N, "B"]
      ]) {
        const H = Ef(U, E, Y);
        F.appendChild(H.cell), S.push(H.sideMark);
      }
      $.push(F), b.push(C), h.appendChild(F);
    }
    let _ = null;
    const g = cs(t, (l) => {
      const u = l > 0 && l < wf;
      if (u !== _) {
        _ = u, y.style.display = u ? "none" : "flex";
        for (const v of $) v.style.flexDirection = u ? "column" : "row";
        for (const v of b) v.style.flex = u ? "0 0 auto" : "0 0 110px";
        for (const v of S) v.style.display = u ? "block" : "none";
      }
    }), p = I(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${X.small};color:${T.textMuted};`
    );
    for (const l of ["unchanged", "changed", "added", "removed"])
      p.appendChild(pe(l, "", Er[l]));
    h.appendChild(p);
    const d = I(
      "div",
      Qi,
      "Atom mapping"
    );
    if (t.appendChild(d), !a.length)
      return t.appendChild(
        de(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: g };
    const m = document.createElement("gufe-atom-mapping");
    m.style.cssText = "flex:1;min-height:0;min-width:0;";
    const k = (l) => {
      m.payload = Ts(a[l], r);
    };
    if (k(0), a.length > 1) {
      const l = I(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${X.small};background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textMuted};`
      );
      l.appendChild(
        qn(
          a.map((u, v) => ({
            id: String(v),
            label: u.name || xf(u, r)
          })),
          "0",
          (u) => k(Number(u))
        )
      ), t.appendChild(l);
    }
    return t.appendChild(m), {
      onResize: () => m.resize?.(),
      cleanup: () => {
        g(), m.remove();
      }
    };
  }
}
Re("gufe-transformation", Pf);
const et = { width: 148, height: 46, radius: 10 }, mt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, xt = { initial: 0.56, min: 0.25, max: 0.78 }, Af = 24, Xi = { x: et.width / 2, y: et.height / 2 }, Zi = $t;
function Rf(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Nf(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const i = rt(t, r);
    if (!i) {
      n.add("missing");
      continue;
    }
    n.add(
      i.type === "UnknownComponentViz" ? i.gufe_type : i.type.replace(/(?:Component)?Viz$/, "")
    );
  }
  return [...n].sort().join(" + ");
}
function Mf(e, t) {
  const n = { fill: T.cardBg, stroke: T.cardBorder }, r = e.map((s) => Nf(s, t)), i = [...new Set(r)];
  if (i.length < 2 || i.length > T.netGroupFill.length)
    return { colorOf: () => n, legend: [] };
  const o = new Map(
    i.map((s, a) => [s, { fill: T.netGroupFill[a], stroke: T.netGroupStroke[a] }])
  );
  return {
    colorOf: (s) => o.get(r[s]) ?? n,
    legend: i.map((s) => [s, o.get(s)])
  };
}
function Ff(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
async function Of(e, t, n, r) {
  let i;
  try {
    if (i = await Ss(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((c) => ({ source: c.from["gufe-key"], target: c.to["gufe-key"] })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((c) => c["gufe-key"]).distance(mt.linkDistance).strength(mt.linkStrength)
  ).force("charge", i.forceManyBody().strength(mt.chargeStrength)).force("center", i.forceCenter(n / 2, r / 2)).force("collision", i.forceCollide(mt.collisionRadius).iterations(mt.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let c = 0; c < a * mt.tickMultiplier; c++) s.tick();
  return !0;
}
class Tf extends Ae {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Ft(n), i = [];
    let o = 0;
    for (const C of n.nodes ?? []) {
      const j = ke(r, C, "ChemicalSystemViz");
      if (!j) {
        o++;
        continue;
      }
      i.push({ ...j, x: 0, y: 0 });
    }
    const s = new Map(i.map((C) => [C["gufe-key"], C])), a = [];
    let c = 0;
    for (const C of n.edges ?? []) {
      const j = s.get(C.stateA), U = s.get(C.stateB);
      if (!j || !U) {
        c++;
        continue;
      }
      a.push({ ...C, index: a.length, from: j, to: U });
    }
    const f = (C) => {
      const j = ke(r, C.protocol, "ProtocolViz");
      return j?.gufe_type || j?.name || "";
    }, h = new Set(a.map(f).filter(Boolean)), y = it(n.name || "Alchemical network");
    y.statsEl.appendChild(pe("systems", String(i.length))), y.statsEl.appendChild(pe("transformations", String(a.length))), h.size && y.statsEl.appendChild(pe("protocol", [...h].join(", "))), t.appendChild(y);
    const $ = Mf(i, r), b = I("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(b);
    let S = () => {
    };
    const _ = I("div", `min-width:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`), g = I("div", `min-width:0;display:flex;flex-direction:column;background:${T.appBg};`), p = I("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${T.netCanvasBg};`);
    _.appendChild(p), b.appendChild(_), b.appendChild(
      ls(b, _, g, {
        min: xt.min,
        max: xt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Pr("alchemical-network.canvasShare", xt.initial, xt.min, xt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => S()
      })
    ), b.appendChild(g);
    const d = this.#e(g, r);
    if (!i.length)
      return p.appendChild(
        de(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), d.message("Nothing to show."), { cleanup: () => d.cleanup() };
    o && tt(
      p,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), c && tt(
      p,
      `${c} transformation${c === 1 ? "" : "s"} name a system this network does not contain`
    );
    let m = !0, k = !1, l = null, u = () => {
    }, v = () => {
    }, E = () => {
    }, A = 0;
    _.appendChild(this.#t($.legend, () => v()));
    const N = (C, j) => {
      l = { kind: C, index: j }, d.show(C === "node" ? i[j] : a[j], C), u();
    }, F = () => {
      const C = ++A, j = p.clientWidth || 800, U = p.clientHeight || 600;
      Ff(i, j, U);
      const Y = () => {
        if (!m || C !== A) return;
        E(), p.querySelectorAll("svg").forEach((re) => re.remove());
        const H = this.#n(p, i, a, j, U, $.colorOf, N);
        E = H.cleanup, v = H.reset, u = () => H.setSelected(l), u();
      };
      if (k) {
        Y();
        return;
      }
      Of(i, a, j, U).then((H) => {
        !m || C !== A || (H || (k = !0, tt(p, "d3 could not be loaded - showing the circular layout instead")), Y());
      }, Y);
    };
    return S = F, F(), N("node", 0), {
      onResize: () => F(),
      cleanup: () => {
        m = !1, E(), d.cleanup();
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
  #t(t, n) {
    const r = I("div", xr.bottom);
    if (r.appendChild(Ur(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(I("span", `font-size:${X.small};color:${T.textMuted};`, "systems made of"));
    for (const [i, o] of t) {
      const s = I("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      s.appendChild(
        I(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${o.fill};border:2px solid ${o.stroke};`
        )
      ), s.appendChild(
        I("span", `font-size:${X.small};color:${T.textPrimary};overflow-wrap:anywhere;`, i)
      ), r.appendChild(s);
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
    t.appendChild(I("div", Qi, "Selected"));
    const r = I("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const i = document.createElement("gufe-view");
    i.style.cssText = "flex:1;min-width:0;min-height:0;";
    const o = (a) => r.replaceChildren(de(a));
    return { show: (a, c) => {
      let f;
      if (c === "node") {
        const { x: h, y, ...$ } = a;
        f = yf($, n);
      } else {
        const { index: h, from: y, to: $, ...b } = a;
        f = _f(b, n);
      }
      if (!f) {
        o("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      i.payload = f, i.parentNode !== r && r.replaceChildren(i);
    }, message: o, cleanup: () => i.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #n(t, n, r, i, o, s, a) {
    const c = ae("svg", { class: "gufe-graph", width: i, height: o, style: "display:block;touch-action:none;" });
    t.appendChild(c);
    const f = ae("g");
    c.appendChild(f);
    const h = ae("g"), y = ae("g");
    f.append(h, y);
    const $ = Os(c, f, {
      bounds: () => Fs(n, Xi.x, Xi.y),
      margin: Af,
      hint: "Click the graph or hold Ctrl to zoom"
    }), b = (p, d) => {
      $.wasPan() || a(p, d);
    }, S = [];
    r.forEach((p, d) => {
      const m = ae("line", {
        x1: p.from.x,
        y1: p.from.y,
        x2: p.to.x,
        y2: p.to.y,
        stroke: T.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      In(m, p.name || "transformation"), m.addEventListener("click", () => b("edge", d)), h.appendChild(m), S.push(m);
      const k = ae("line", {
        x1: p.from.x,
        y1: p.from.y,
        x2: p.to.x,
        y2: p.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      k.addEventListener("click", () => b("edge", d)), h.appendChild(k);
    });
    const _ = [], g = [];
    return n.forEach((p, d) => {
      const m = s(d), k = ae("g", { style: "cursor:pointer;" }), l = ae("rect", {
        x: p.x - et.width / 2,
        y: p.y - et.height / 2,
        width: et.width,
        height: et.height,
        rx: et.radius,
        fill: m.fill,
        stroke: m.stroke,
        "stroke-width": 2
      });
      k.appendChild(l), _.push(l), g.push(m.stroke);
      const u = ae("text", {
        x: p.x,
        y: p.y - 2,
        "text-anchor": "middle",
        fill: T.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = Rf(Zi(p), 20), k.appendChild(u);
      const v = Object.keys(p.components ?? {}).length, E = ae("text", {
        x: p.x,
        y: p.y + 14,
        "text-anchor": "middle",
        fill: T.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      E.textContent = `${v} component${v === 1 ? "" : "s"}`, k.appendChild(E), In(k, Zi(p)), k.addEventListener("click", () => b("node", d)), y.appendChild(k);
    }), $.fit(), {
      setSelected(p) {
        _.forEach((d, m) => {
          const k = p?.kind === "node" && p.index === m;
          d.setAttribute("stroke", k ? T.cardBorderActive : g[m]), d.setAttribute("stroke-width", k ? "3" : "2");
        }), S.forEach((d, m) => {
          const k = p?.kind === "edge" && p.index === m;
          d.setAttribute("stroke", k ? T.netHaloColor : T.netEdgeLine), d.setAttribute("stroke-width", k ? "4" : "2");
        });
      },
      reset: $.reset,
      cleanup: $.cleanup
    };
  }
}
Re("gufe-alchemical-network", Tf);
class jf extends Ae {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = it(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Vn(n.gufe_type)), t.appendChild(r);
    const i = I(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = Tn();
    return o.style.maxWidth = "460px", o.appendChild(Oe("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Oe("Name", n.name)), o.appendChild(Oe("gufe key", n["gufe-key"], !0)), o.appendChild(
      I(
        "div",
        `padding-top:10px;font-size:${X.small};line-height:1.6;color:${T.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Re("gufe-protocol", jf);
const xe = { width: 340, height: 260, padding: 14, radius: 12 }, zf = 150, If = 40, Df = 24;
function qf(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Vf(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function Lf(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(Df, Math.round(e * If)));
}
function Bf(e) {
  const t = ae("svg", {
    viewBox: `0 0 ${xe.width} ${xe.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  In(t, `${e.smiles || "solvent"} box`), t.appendChild(
    ae("rect", {
      x: 1,
      y: 1,
      width: xe.width - 2,
      height: xe.height - 2,
      rx: xe.radius,
      fill: T.boxFill,
      stroke: T.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = qf(1597463007), r = () => ({
    x: xe.padding + n() * (xe.width - 2 * xe.padding),
    y: xe.padding + n() * (xe.height - 2 * xe.padding)
  });
  for (let s = 0; s < zf; s++) {
    const { x: a, y: c } = r();
    t.appendChild(ae("circle", { cx: a, cy: c, r: 2.4, fill: T.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = Lf(Vf(e.ion_concentration)), o = [
    [e.positive_ion, T.diffAdded],
    [e.negative_ion, T.diffRemoved]
  ];
  for (const [s, a] of o)
    for (let c = 0; c < i; c++) {
      const { x: f, y: h } = r(), y = ae("circle", { cx: f, cy: h, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(In(y, s));
    }
  return t;
}
class Uf extends Ae {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = it(n.name || "Solvent");
    r.statsEl.appendChild(pe("neutralized", n.neutralize ? "yes" : "no")), r.statsEl.appendChild(pe(n.positive_ion, "", T.diffAdded)), r.statsEl.appendChild(pe(n.negative_ion, "", T.diffRemoved)), t.appendChild(r);
    const i = I(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(i);
    const o = Tn();
    o.style.flex = "1 1 320px", o.appendChild(Oe("SMILES", n.smiles, !0)), o.appendChild(Oe("Positive ion", n.positive_ion)), o.appendChild(Oe("Negative ion", n.negative_ion)), o.appendChild(Oe("Ion concentration", n.ion_concentration)), o.appendChild(Oe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(o);
    const s = Tn();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(Bf(n)), s.appendChild(
      I(
        "div",
        `padding-top:10px;font-size:${X.small};text-align:center;color:${T.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(s), {};
  }
}
Re("gufe-solvent", Uf);
class Kf extends Ae {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = it(n.name || "Unnamed component");
    r.statsEl.appendChild(Vn(n.gufe_type)), t.appendChild(r);
    const i = I("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = Tn();
    return o.style.maxWidth = "460px", o.appendChild(
      I(
        "div",
        `font-size:${X.heading};font-weight:600;padding-bottom:6px;color:${T.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      I(
        "div",
        `font-size:${X.body};line-height:1.6;padding-bottom:10px;color:${T.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Oe("Name", n.name || "(unnamed)")), o.appendChild(Oe("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
Re("gufe-unknown-component", Kf);
function Xf(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: rs, reset: ra });
export {
  ya as CHROME_OPEN_BY_DEFAULT,
  Ks as DEBUG_ATTRIBUTE,
  Hs as DEBUG_GLOBAL,
  Id as DEFAULT_DEPICT_STYLE,
  ad as DEFAULT_ZOOM_BOUNDS,
  Qe as DEPICT_STYLE,
  Ud as DEPICT_STYLE_RANGES,
  Tf as GufeAlchemicalNetwork,
  Iu as GufeAtomMapping,
  bf as GufeChemicalSystem,
  Ae as GufeElement,
  pf as GufeLigandNetwork,
  hu as GufeProtein,
  jf as GufeProtocol,
  cu as GufeSmallMolecule,
  Uf as GufeSolvent,
  Pf as GufeTransformation,
  Kf as GufeUnknownComponent,
  nd as GufeView,
  ar as MAPPING_COLORS,
  ud as MAPPING_RAMP_3D,
  Yf as MAPPING_RAMP_NAME,
  Hf as PAYLOAD_TYPES,
  Gf as SCHEMA_TYPES,
  Ir as VIEW_TAGS,
  Cu as align2D,
  Pu as alignedToPartner,
  ku as applyRT,
  Eu as applyTurn,
  ld as boundedZoom,
  Ft as buildRegistry,
  vt as choice,
  wa as chromeMenu,
  ts as debugEnabled,
  Re as defineElement,
  ws as describeProblem,
  Sf as diffStatus,
  Jf as dispatchProblem,
  Hr as entriesFor,
  $t as entryLabel,
  Fs as extentOf,
  Pt as flag,
  ed as formatIssues,
  ks as guardWheel,
  Su as kabsch,
  Li as laidOut,
  Au as layoutPair,
  Tu as liftFor,
  Ys as logPayload,
  rt as lookup,
  ke as lookupOfType,
  Ts as mappingPayloadFor,
  Ni as markGroups,
  cr as markedBonds,
  Xf as mount,
  Hd as normaliseDepictStyle,
  Pr as num,
  cs as onWidth,
  ju as openfeShift,
  zu as pairColour,
  Ai as parseAtomSpec,
  Vf as parseConcentration,
  Js as payloadJson,
  Ur as resetControl,
  ra as resetSettings,
  Os as sceneCamera,
  lf as selectionText,
  Dn as setting,
  rs as settings,
  ls as splitter,
  yf as systemPayloadFor,
  Zr as textSetting,
  _f as transformationPayloadFor,
  Ui as uniqueAtoms,
  Wd as uniqueBonds,
  Wf as validateAs,
  Ql as validatePayload,
  Br as viewerInteraction,
  Cs as wheelFactor,
  xu as withCoords
};
