const Yr = {
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
function Bi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const O = Bi() ? Yr.dark : Yr.light, J = {
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
}, Le = {
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
}, Oe = {
  title: O.titleColor,
  primary: O.textPrimary,
  muted: O.textMuted,
  faint: O.textMuted2,
  error: O.errorFg
}, Rt = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: O.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: O.canvas2DBg
}, ye = {
  base: `background:${O.btnBg};color:${O.btnFg};border:1px solid ${O.btnBorder};padding:${se.sm} 9px;font-size:${J.small};font-weight:${Le.bold};border-radius:${ot.sm};cursor:pointer;font-family:inherit;`,
  bg: O.btnBg,
  bgHover: O.btnBgHover,
  bgActive: O.btnBgActive
}, Ui = `background:${O.selectBg};color:${O.textPrimary};border:1px solid ${O.selectBorder};border-radius:${ot.md};padding:${se.sm} ${se.lg};font-size:${J.body};cursor:pointer;font-family:inherit;`, Ki = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${se.xxl};flex-shrink:0;background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};`, xr = {
  top: `display:flex;align-items:center;gap:${se.xl};flex-wrap:wrap;padding:${se.lg} ${se.xxl};flex-shrink:0;font-size:${J.body};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${se.xl};flex-wrap:wrap;padding:${se.lg} ${se.xxl};flex-shrink:0;background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};`
}, Qs = `flex-shrink:0;padding:${se.sm} ${se.xl};font-size:${J.heading};font-weight:${Le.bold};color:${O.labelFg};background:${O.labelBg};`, yr = `position:absolute;top:${se.md};left:${se.md};z-index:10;pointer-events:none;max-width:calc(100% - ${se.xxl} - ${se.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${se.xs} ${se.lg};border-radius:${ot.md};font-size:${J.heading};font-weight:${Le.bold};color:${O.labelFg};background:${O.labelBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Hi = `display:flex;flex-direction:column;gap:${se.xs};padding:${se.xxl} 18px;border-radius:${ot.xl};background:${O.cardBg};border:1px solid ${O.cardBorder};`, ei = `position:absolute;bottom:${se.xl};right:${se.xl};display:flex;gap:${se.sm};padding:${se.sm};border-radius:${ot.md};z-index:10;background:${O.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Xr = `font-family:${J.mono};font-size:${J.small};line-height:1.7;color:${O.textMuted};`, Zr = `font-size:${J.small};font-weight:${Le.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`, Gi = `font-size:${J.small};line-height:1.6;color:${O.textMuted2};`, Wi = ["debug", "gufe-debug"], Ji = "debug", Yi = "GUFE_VIZ_DEBUG";
function Xi() {
  return !!globalThis[Yi];
}
function Zi() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Wi.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function ti(e) {
  return e?.hasAttribute?.(Ji) ? !0 : Xi() || Zi();
}
function Qi(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${me(t)}>`;
  }
}
function ea(e, t, n) {
  if (!ti(n)) return;
  const r = Qi(t), o = t?.type, s = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(s) : console.log(s), console.log(r), console.log(t), i && console.groupEnd?.();
}
const ni = "GUFE_VIZ_VIEW_STATE";
function ta(e) {
  const t = globalThis[ni];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const na = 150;
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
  #s = 0;
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = O.appBg, this.style.color = O.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), na);
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
    this.#e = null, this.replaceChildren(), this.#n = null;
  }
  /** Tear the mounted view down and hand back a fresh, empty shell. */
  #d() {
    return this.#i(), this.#n = j(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${O.appBg};`
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
    const t = this.#d(), n = this.#s;
    if (this.#t == null) {
      t.appendChild(de(this.placeholder()));
      return;
    }
    let r;
    try {
      r = this.renderView(t, this.#t);
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
    n === this.#s && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(de(`Failed to render: ${me(r)}`, !0)));
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
const ke = "gufe-viz:", Ge = /* @__PURE__ */ new Map();
let Ot = null;
function ra() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Nt() {
  if (Ot === !1) return null;
  const e = ra();
  if (!e)
    return Ot = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Ot = !0, e;
  } catch {
    return Ot = !1, null;
  }
}
function oa(e) {
  const t = Nt();
  if (!t) return Ge.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function sa(e, t) {
  const n = Nt();
  if (!n) {
    Ge.set(ke + e, t);
    return;
  }
  try {
    n.setItem(ke + e, t);
  } catch {
    Ge.set(ke + e, t);
  }
}
function Dn(e, t, n) {
  return {
    key: e,
    get() {
      const r = oa(e);
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
        sa(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function $t(e, t, n) {
  return Dn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function gt(e, t) {
  return Dn(e, t, (n) => typeof n == "boolean");
}
function Pr(e, t, n = -1 / 0, r = 1 / 0) {
  return Dn(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function Fn(e, t = "") {
  return Dn(e, t, (n) => typeof n == "string");
}
function ri() {
  const e = {}, t = Nt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ge.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Ge.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(ke.length)] = JSON.parse(o);
      } catch {
        e[r.slice(ke.length)] = o;
      }
  }
  return e;
}
function ia() {
  const e = {}, t = Nt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ge.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const o = t ? t.getItem(r) : Ge.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function aa() {
  const e = Nt();
  if (e)
    for (const t of Object.keys(ri()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  Ge.clear();
}
const oi = "https://framejs.app", si = 1e4;
function ca(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const la = "/gufe-dev-bundle.js";
function da() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= si ? e : null;
}
async function ua() {
  const e = da();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(la);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < si ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function fa() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function pa(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(ui)};`,
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
    `globalThis[${JSON.stringify(ni)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function ha(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...pa(n),
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
function ma(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, s] of Object.entries(ia()))
    o.endsWith(ui) || (r[o] = s);
  return { settings: r, views: t };
}
const ga = (e) => `${oi}/j/${e}`, ya = (e) => `${oi}/j/${e}.json`;
async function $a(e, t, n) {
  await fetch(ya(e), {
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
function va(e) {
  if (!ti()) return;
  const t = j(
    "div",
    `display:flex;flex-direction:column;gap:${se.md};padding-top:${se.lg};border-top:1px dashed ${O.splitBorder};`
  );
  t.appendChild(
    j(
      "div",
      `font-size:${J.tiny};font-weight:${Le.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
      "debug"
    )
  );
  const n = j("button", `${ye.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = j("div", `font-size:${J.tiny};line-height:1.5;color:${O.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const o = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? O.errorFg : O.textMuted2;
  }, s = (i, a) => {
    const l = j("a", `color:${O.textPrimary};`, i);
    l.href = i, l.target = "_blank", l.rel = "noreferrer", r.replaceChildren(l), a && r.appendChild(j("div", `padding-top:${se.sm};`, a)), r.style.color = O.textMuted2;
  };
  n.onclick = () => {
    const i = ca(e);
    if (!i || i.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, l = ma(i), f = window.open("", "_blank"), p = fa(), g = a, $ = String(g.name || g.type || "gufe-viz"), y = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), ua().then((k) => {
      if (!k) {
        f?.close(), y(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return $a(p, ha(k.js, a, l), $).then(() => {
        y();
        const S = ga(p);
        f && (f.location.href = S), s(S, k.note);
      });
    }).catch((k) => {
      y(), f?.close(), o(`Upload failed: ${k instanceof Error ? k.message : String(k)}`, !0);
    });
  }, t.appendChild(
    j(
      "div",
      `font-size:${J.tiny};line-height:1.5;color:${O.textMuted2};`,
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
function me(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const wt = (e) => e.toLocaleString("en-US"), mt = "-", vt = ye.base, Tn = Ui;
function qn(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const o = j("div", "display:flex;gap:4px;"), s = e.map((i) => {
    const a = j("button", vt, i.label);
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
  const o = j("select", Tn);
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
function ii(e, t, n, r = {}) {
  let o = r.remember ? r.remember.get() : t;
  const s = j("button", vt, e);
  s.title = r.title || e, s.setAttribute("aria-pressed", String(o));
  const i = () => {
    s.style.background = o ? ye.bgActive : ye.bg, s.setAttribute("aria-pressed", String(o));
  };
  return s.onclick = () => {
    o = !o, i(), r.remember?.set(o), n(o);
  }, i(), s;
}
function $e(e, t, n) {
  const r = j("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    j("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const o = j("span");
  return o.innerHTML = `${Ve(e)} <b style="color:${Oe.primary};">${Ve(t)}</b>`, r.appendChild(o), r;
}
function nt(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${se.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${se.md} ${se.xxl};border-radius:${ot.md};font-size:${J.body};background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};`, e.appendChild(n), n;
}
function de(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${J.heading};color:${t ? Oe.error : Oe.faint};`,
    e
  );
}
function bt(e) {
  const t = j("div", Ki);
  return t.className = "gufe-header", t.titleEl = j(
    "span",
    `font-weight:${Le.bold};font-size:${J.title};color:${Oe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${J.small};color:${Oe.muted};`
  ), t.toggleEl = j("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Se(e, t, n = !1) {
  const r = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:${J.tiny};font-weight:${Le.bold};letter-spacing:.08em;text-transform:uppercase;color:${Oe.faint};`,
      e
    )
  );
  const o = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Oe.primary};` + (n ? `font-family:${J.mono};font-size:${J.small};` : `font-size:${J.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Ln(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:${ot.xl};font-size:${J.tiny};font-weight:${Le.bold};letter-spacing:.04em;white-space:nowrap;background:${O.badgeBg};color:${O.badgeFg};`,
    e
  );
}
function Ar() {
  return j("div", Hi);
}
function ai() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const ci = "data-gufe-hide-name";
function li(e) {
  return !e.closest(`[${ci}]`);
}
function ba(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const Qr = { min: 0.2, max: 0.8 }, wa = 5;
function di(e, t, n, r = {}) {
  const o = r.min ?? Qr.min, s = r.max ?? Qr.max, i = j(
    "div",
    `flex:0 0 ${wa}px;align-self:stretch;cursor:col-resize;touch-action:none;background:${O.splitBorder};`
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
const _a = !1, ui = ".menuOpen";
function Sa() {
  const e = j("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const ka = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: Sa
}, Ca = ka.openFreeEnergy;
function fi(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? _a, o = !1;
  const s = j("div", "flex-shrink:0;"), i = j("button", `${ye.base}display:inline-flex;align-items:center;gap:${se.md};padding:${se.sm} ${se.lg};`);
  i.appendChild(Ca()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, s.appendChild(t()), va(s)), s.style.display = r ? "" : "none", i.style.background = r ? ye.bgActive : ye.bg, i.setAttribute("aria-expanded", String(r));
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
function Ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, Yn = {}, je = {}, Xe = {}, Xn = {}, Zn = {}, Qn = {}, eo;
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
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((m, _) => `${m}${_}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((m, _) => (_ instanceof n && (m[_.str] = (m[_.str] || 0) + 1), m), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o(b, ...d) {
      const m = [b[0]];
      let _ = 0;
      for (; _ < d.length; )
        a(m, d[_]), m.push(b[++_]);
      return new r(m);
    }
    e._ = o;
    const s = new r("+");
    function i(b, ...d) {
      const m = [y(b[0])];
      let _ = 0;
      for (; _ < d.length; )
        m.push(s), a(m, d[_]), m.push(s, y(b[++_]));
      return l(m), new r(m);
    }
    e.str = i;
    function a(b, d) {
      d instanceof r ? b.push(...d._items) : d instanceof n ? b.push(d) : b.push(g(d));
    }
    e.addCodeArg = a;
    function l(b) {
      let d = 1;
      for (; d < b.length - 1; ) {
        if (b[d] === s) {
          const m = f(b[d - 1], b[d + 1]);
          if (m !== void 0) {
            b.splice(d - 1, 3, m);
            continue;
          }
          b[d++] = "+";
        }
        d++;
      }
    }
    function f(b, d) {
      if (d === '""')
        return b;
      if (b === '""')
        return d;
      if (typeof b == "string")
        return d instanceof n || b[b.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${b.slice(0, -1)}${d}"` : d[0] === '"' ? b.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !(b instanceof n))
        return `"${b}${d.slice(1)}`;
    }
    function p(b, d) {
      return d.emptyStr() ? b : b.emptyStr() ? d : i`${b}${d}`;
    }
    e.strConcat = p;
    function g(b) {
      return typeof b == "number" || typeof b == "boolean" || b === null ? b : y(Array.isArray(b) ? b.join(",") : b);
    }
    function $(b) {
      return new r(y(b));
    }
    e.stringify = $;
    function y(b) {
      return JSON.stringify(b).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function k(b) {
      return typeof b == "string" && e.IDENTIFIER.test(b) ? new r(`.${b}`) : o`[${b}]`;
    }
    e.getProperty = k;
    function S(b) {
      if (typeof b == "string" && e.IDENTIFIER.test(b))
        return new r(`${b}`);
      throw new Error(`CodeGen: invalid export name: ${b}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function h(b) {
      return new r(b.toString());
    }
    e.regexpCode = h;
  })(Qn)), Qn;
}
var er = {}, to;
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
        const $ = this.toName(f), { prefix: y } = $, k = (g = p.key) !== null && g !== void 0 ? g : p.ref;
        let S = this._values[y];
        if (S) {
          const d = S.get(k);
          if (d)
            return d;
        } else
          S = this._values[y] = /* @__PURE__ */ new Map();
        S.set(k, $);
        const h = this._scope[y] || (this._scope[y] = []), b = h.length;
        return h[b] = p.ref, $.setValue(p, { property: y, itemIndex: b }), $;
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
        for (const k in f) {
          const S = f[k];
          if (!S)
            continue;
          const h = g[k] = g[k] || /* @__PURE__ */ new Map();
          S.forEach((b) => {
            if (h.has(b))
              return;
            h.set(b, r.Started);
            let d = p(b);
            if (d) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${m} ${b} = ${d};${this.opts._n}`;
            } else if (d = $?.(b))
              y = (0, t._)`${y}${d}${this.opts._n}`;
            else
              throw new n(b);
            h.set(b, r.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = a;
  })(er)), er;
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
    var o = /* @__PURE__ */ no();
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
      constructor(w, C, D) {
        super(), this.varKind = w, this.name = C, this.rhs = D;
      }
      render({ es5: w, _n: C }) {
        const D = w ? n.varKinds.var : this.varKind, B = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${D} ${this.name}${B};` + C;
      }
      optimizeNames(w, C) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = H(this.rhs, w, C)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends s {
      constructor(w, C, D) {
        super(), this.lhs = w, this.rhs = C, this.sideEffects = D;
      }
      render({ _n: w }) {
        return `${this.lhs} = ${this.rhs};` + w;
      }
      optimizeNames(w, C) {
        if (!(this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects))
          return this.rhs = H(this.rhs, w, C), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return I(w, this.rhs);
      }
    }
    class l extends a {
      constructor(w, C, D, B) {
        super(w, D, B), this.op = C;
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
        return this.code = H(this.code, w, C), this;
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
        return this.nodes.reduce((C, D) => C + D.render(w), "");
      }
      optimizeNodes() {
        const { nodes: w } = this;
        let C = w.length;
        for (; C--; ) {
          const D = w[C].optimizeNodes();
          Array.isArray(D) ? w.splice(C, 1, ...D) : D ? w[C] = D : w.splice(C, 1);
        }
        return w.length > 0 ? this : void 0;
      }
      optimizeNames(w, C) {
        const { nodes: D } = this;
        let B = D.length;
        for (; B--; ) {
          const G = D[B];
          G.optimizeNames(w, C) || (ee(w, G.names), D.splice(B, 1));
        }
        return D.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((w, C) => R(w, C.names), {});
      }
    }
    class k extends y {
      render(w) {
        return "{" + w._n + super.render(w) + "}" + w._n;
      }
    }
    class S extends y {
    }
    class h extends k {
    }
    h.kind = "else";
    class b extends k {
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
          const D = C.optimizeNodes();
          C = this.else = Array.isArray(D) ? new h(D) : D;
        }
        if (C)
          return w === !1 ? C instanceof b ? C : C.nodes : this.nodes.length ? this : new b(W(w), C instanceof b ? [C] : C.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, C) {
        var D;
        if (this.else = (D = this.else) === null || D === void 0 ? void 0 : D.optimizeNames(w, C), !!(super.optimizeNames(w, C) || this.else))
          return this.condition = H(this.condition, w, C), this;
      }
      get names() {
        const w = super.names;
        return I(w, this.condition), this.else && R(w, this.else.names), w;
      }
    }
    b.kind = "if";
    class d extends k {
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
          return this.iteration = H(this.iteration, w, C), this;
      }
      get names() {
        return R(super.names, this.iteration.names);
      }
    }
    class _ extends d {
      constructor(w, C, D, B) {
        super(), this.varKind = w, this.name = C, this.from = D, this.to = B;
      }
      render(w) {
        const C = w.es5 ? n.varKinds.var : this.varKind, { name: D, from: B, to: G } = this;
        return `for(${C} ${D}=${B}; ${D}<${G}; ${D}++)` + super.render(w);
      }
      get names() {
        const w = I(super.names, this.from);
        return I(w, this.to);
      }
    }
    class c extends d {
      constructor(w, C, D, B) {
        super(), this.loop = w, this.varKind = C, this.name = D, this.iterable = B;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, C) {
        if (super.optimizeNames(w, C))
          return this.iterable = H(this.iterable, w, C), this;
      }
      get names() {
        return R(super.names, this.iterable.names);
      }
    }
    class u extends k {
      constructor(w, C, D) {
        super(), this.name = w, this.args = C, this.async = D;
      }
      render(w) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
      }
    }
    u.kind = "func";
    class v extends y {
      render(w) {
        return "return " + super.render(w);
      }
    }
    v.kind = "return";
    class E extends k {
      render(w) {
        let C = "try" + super.render(w);
        return this.catch && (C += this.catch.render(w)), this.finally && (C += this.finally.render(w)), C;
      }
      optimizeNodes() {
        var w, C;
        return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (C = this.finally) === null || C === void 0 || C.optimizeNodes(), this;
      }
      optimizeNames(w, C) {
        var D, B;
        return super.optimizeNames(w, C), (D = this.catch) === null || D === void 0 || D.optimizeNames(w, C), (B = this.finally) === null || B === void 0 || B.optimizeNames(w, C), this;
      }
      get names() {
        const w = super.names;
        return this.catch && R(w, this.catch.names), this.finally && R(w, this.finally.names), w;
      }
    }
    class x extends k {
      constructor(w) {
        super(), this.error = w;
      }
      render(w) {
        return `catch(${this.error})` + super.render(w);
      }
    }
    x.kind = "catch";
    class F extends k {
      render(w) {
        return "finally" + super.render(w);
      }
    }
    F.kind = "finally";
    class T {
      constructor(w, C = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...C, _n: C.lines ? `
` : "" }, this._extScope = w, this._scope = new n.Scope({ parent: w }), this._nodes = [new S()];
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
        const D = this._extScope.value(w, C);
        return (this._values[D.prefix] || (this._values[D.prefix] = /* @__PURE__ */ new Set())).add(D), D;
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
      _def(w, C, D, B) {
        const G = this._scope.toName(C);
        return D !== void 0 && B && (this._constants[G.str] = D), this._leafNode(new i(w, G, D)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const(w, C, D) {
        return this._def(n.varKinds.const, w, C, D);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(w, C, D) {
        return this._def(n.varKinds.let, w, C, D);
      }
      // `var` declaration with optional assignment
      var(w, C, D) {
        return this._def(n.varKinds.var, w, C, D);
      }
      // assignment code
      assign(w, C, D) {
        return this._leafNode(new a(w, C, D));
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
        for (const [D, B] of w)
          C.length > 1 && C.push(","), C.push(D), (D !== B || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, B));
        return C.push("}"), new t._Code(C);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(w, C, D) {
        if (this._blockNode(new b(w)), C && D)
          this.code(C).else().code(D).endIf();
        else if (C)
          this.code(C).endIf();
        else if (D)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(w) {
        return this._elseNode(new b(w));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(b, h);
      }
      _for(w, C) {
        return this._blockNode(w), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, C) {
        return this._for(new m(w), C);
      }
      // `for` statement for a range of values
      forRange(w, C, D, B, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(w);
        return this._for(new _(G, Q, C, D), () => B(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, C, D, B = n.varKinds.const) {
        const G = this._scope.toName(w);
        if (this.opts.es5) {
          const Q = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (Z) => {
            this.var(G, (0, t._)`${Q}[${Z}]`), D(G);
          });
        }
        return this._for(new c("of", B, G, C), () => D(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, C, D, B = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${C})`, D);
        const G = this._scope.toName(w);
        return this._for(new c("in", B, G, C), () => D(G));
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
        const C = new v();
        if (this._blockNode(C), this.code(w), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(v);
      }
      // `try` statement
      try(w, C, D) {
        if (!C && !D)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const B = new E();
        if (this._blockNode(B), this.code(w), C) {
          const G = this.name("e");
          this._currNode = B.catch = new x(G), C(G);
        }
        return D && (this._currNode = B.finally = new F(), this.code(D)), this._endBlockNode(x, F);
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
        const D = this._nodes.length - C;
        if (D < 0 || w !== void 0 && D !== w)
          throw new Error(`CodeGen: wrong number of nodes: ${D} vs ${w} expected`);
        return this._nodes.length = C, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(w, C = t.nil, D, B) {
        return this._blockNode(new u(w, C, D)), B && this.code(B).endFunc(), this;
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
        const D = this._currNode;
        if (D instanceof w || C && D instanceof C)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${C ? `${w.kind}/${C.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        const C = this._currNode;
        if (!(C instanceof b))
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
    e.CodeGen = T;
    function R(M, w) {
      for (const C in w)
        M[C] = (M[C] || 0) + (w[C] || 0);
      return M;
    }
    function I(M, w) {
      return w instanceof t._CodeOrName ? R(M, w.names) : M;
    }
    function H(M, w, C) {
      if (M instanceof t.Name)
        return D(M);
      if (!B(M))
        return M;
      return new t._Code(M._items.reduce((G, Q) => (Q instanceof t.Name && (Q = D(Q)), Q instanceof t._Code ? G.push(...Q._items) : G.push(Q), G), []));
      function D(G) {
        const Q = C[G.str];
        return Q === void 0 || w[G.str] !== 1 ? G : (delete w[G.str], Q);
      }
      function B(G) {
        return G instanceof t._Code && G._items.some((Q) => Q instanceof t.Name && w[Q.str] === 1 && C[Q.str] !== void 0);
      }
    }
    function ee(M, w) {
      for (const C in w)
        M[C] = (M[C] || 0) - (w[C] || 0);
    }
    function W(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${q(M)}`;
    }
    e.not = W;
    const ae = A(e.operators.AND);
    function Y(...M) {
      return M.reduce(ae);
    }
    e.and = Y;
    const K = A(e.operators.OR);
    function z(...M) {
      return M.reduce(K);
    }
    e.or = z;
    function A(M) {
      return (w, C) => w === t.nil ? C : C === t.nil ? w : (0, t._)`${q(w)} ${M} ${q(C)}`;
    }
    function q(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(Zn)), Zn;
}
var re = {}, oo;
function oe() {
  if (oo) return re;
  oo = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.checkStrictMode = re.getErrorPath = re.Type = re.useFunc = re.setEvaluated = re.evaluatedPropsToName = re.mergeEvaluated = re.eachItem = re.unescapeJsonPointer = re.escapeJsonPointer = re.escapeFragment = re.unescapeFragment = re.schemaRefOrVal = re.schemaHasRulesButRef = re.schemaHasRules = re.checkUnknownRules = re.alwaysValidSchema = re.toHash = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ jn();
  function n(c) {
    const u = {};
    for (const v of c)
      u[v] = !0;
    return u;
  }
  re.toHash = n;
  function r(c, u) {
    return typeof u == "boolean" ? u : Object.keys(u).length === 0 ? !0 : (o(c, u), !s(u, c.self.RULES.all));
  }
  re.alwaysValidSchema = r;
  function o(c, u = c.schema) {
    const { opts: v, self: E } = c;
    if (!v.strictSchema || typeof u == "boolean")
      return;
    const x = E.RULES.keywords;
    for (const F in u)
      x[F] || _(c, `unknown keyword: "${F}"`);
  }
  re.checkUnknownRules = o;
  function s(c, u) {
    if (typeof c == "boolean")
      return !c;
    for (const v in c)
      if (u[v])
        return !0;
    return !1;
  }
  re.schemaHasRules = s;
  function i(c, u) {
    if (typeof c == "boolean")
      return !c;
    for (const v in c)
      if (v !== "$ref" && u.all[v])
        return !0;
    return !1;
  }
  re.schemaHasRulesButRef = i;
  function a({ topSchemaRef: c, schemaPath: u }, v, E, x) {
    if (!x) {
      if (typeof v == "number" || typeof v == "boolean")
        return v;
      if (typeof v == "string")
        return (0, e._)`${v}`;
    }
    return (0, e._)`${c}${u}${(0, e.getProperty)(E)}`;
  }
  re.schemaRefOrVal = a;
  function l(c) {
    return g(decodeURIComponent(c));
  }
  re.unescapeFragment = l;
  function f(c) {
    return encodeURIComponent(p(c));
  }
  re.escapeFragment = f;
  function p(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  re.escapeJsonPointer = p;
  function g(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  re.unescapeJsonPointer = g;
  function $(c, u) {
    if (Array.isArray(c))
      for (const v of c)
        u(v);
    else
      u(c);
  }
  re.eachItem = $;
  function y({ mergeNames: c, mergeToName: u, mergeValues: v, resultToName: E }) {
    return (x, F, T, R) => {
      const I = T === void 0 ? F : T instanceof e.Name ? (F instanceof e.Name ? c(x, F, T) : u(x, F, T), T) : F instanceof e.Name ? (u(x, T, F), F) : v(F, T);
      return R === e.Name && !(I instanceof e.Name) ? E(x, I) : I;
    };
  }
  re.mergeEvaluated = {
    props: y({
      mergeNames: (c, u, v) => c.if((0, e._)`${v} !== true && ${u} !== undefined`, () => {
        c.if((0, e._)`${u} === true`, () => c.assign(v, !0), () => c.assign(v, (0, e._)`${v} || {}`).code((0, e._)`Object.assign(${v}, ${u})`));
      }),
      mergeToName: (c, u, v) => c.if((0, e._)`${v} !== true`, () => {
        u === !0 ? c.assign(v, !0) : (c.assign(v, (0, e._)`${v} || {}`), S(c, v, u));
      }),
      mergeValues: (c, u) => c === !0 ? !0 : { ...c, ...u },
      resultToName: k
    }),
    items: y({
      mergeNames: (c, u, v) => c.if((0, e._)`${v} !== true && ${u} !== undefined`, () => c.assign(v, (0, e._)`${u} === true ? true : ${v} > ${u} ? ${v} : ${u}`)),
      mergeToName: (c, u, v) => c.if((0, e._)`${v} !== true`, () => c.assign(v, u === !0 ? !0 : (0, e._)`${v} > ${u} ? ${v} : ${u}`)),
      mergeValues: (c, u) => c === !0 ? !0 : Math.max(c, u),
      resultToName: (c, u) => c.var("items", u)
    })
  };
  function k(c, u) {
    if (u === !0)
      return c.var("props", !0);
    const v = c.var("props", (0, e._)`{}`);
    return u !== void 0 && S(c, v, u), v;
  }
  re.evaluatedPropsToName = k;
  function S(c, u, v) {
    Object.keys(v).forEach((E) => c.assign((0, e._)`${u}${(0, e.getProperty)(E)}`, !0));
  }
  re.setEvaluated = S;
  const h = {};
  function b(c, u) {
    return c.scopeValue("func", {
      ref: u,
      code: h[u.code] || (h[u.code] = new t._Code(u.code))
    });
  }
  re.useFunc = b;
  var d;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(d || (re.Type = d = {}));
  function m(c, u, v) {
    if (c instanceof e.Name) {
      const E = u === d.Num;
      return v ? E ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : E ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return v ? (0, e.getProperty)(c).toString() : "/" + p(c);
  }
  re.getErrorPath = m;
  function _(c, u, v = c.opts.strictSchema) {
    if (v) {
      if (u = `strict mode: ${u}`, v === !0)
        throw new Error(u);
      c.self.logger.warn(u);
    }
  }
  return re.checkStrictMode = _, re;
}
var Tt = {}, so;
function Ne() {
  if (so) return Tt;
  so = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
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
  return Tt.default = t, Tt;
}
var io;
function Bn() {
  return io || (io = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Ne();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: b }) => b ? (0, t.str)`"${h}" keyword must be ${b} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function o(h, b = e.keywordError, d, m) {
      const { it: _ } = h, { gen: c, compositeRule: u, allErrors: v } = _, E = g(h, b, d);
      m ?? (u || v) ? l(c, E) : f(_, (0, t._)`[${E}]`);
    }
    e.reportError = o;
    function s(h, b = e.keywordError, d) {
      const { it: m } = h, { gen: _, compositeRule: c, allErrors: u } = m, v = g(h, b, d);
      l(_, v), c || u || f(m, r.default.vErrors);
    }
    e.reportExtraError = s;
    function i(h, b) {
      h.assign(r.default.errors, b), h.if((0, t._)`${r.default.vErrors} !== null`, () => h.if(b, () => h.assign((0, t._)`${r.default.vErrors}.length`, b), () => h.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: h, keyword: b, schemaValue: d, data: m, errsCount: _, it: c }) {
      if (_ === void 0)
        throw new Error("ajv implementation error");
      const u = h.name("err");
      h.forRange("i", _, r.default.errors, (v) => {
        h.const(u, (0, t._)`${r.default.vErrors}[${v}]`), h.if((0, t._)`${u}.instancePath === undefined`, () => h.assign((0, t._)`${u}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), h.assign((0, t._)`${u}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${b}`), c.opts.verbose && (h.assign((0, t._)`${u}.schema`, d), h.assign((0, t._)`${u}.data`, m));
      });
    }
    e.extendErrors = a;
    function l(h, b) {
      const d = h.const("err", b);
      h.if((0, t._)`${r.default.vErrors} === null`, () => h.assign(r.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${r.default.vErrors}.push(${d})`), h.code((0, t._)`${r.default.errors}++`);
    }
    function f(h, b) {
      const { gen: d, validateName: m, schemaEnv: _ } = h;
      _.$async ? d.throw((0, t._)`new ${h.ValidationError}(${b})`) : (d.assign((0, t._)`${m}.errors`, b), d.return(!1));
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
    function g(h, b, d) {
      const { createErrors: m } = h.it;
      return m === !1 ? (0, t._)`{}` : $(h, b, d);
    }
    function $(h, b, d = {}) {
      const { gen: m, it: _ } = h, c = [
        y(_, d),
        k(h, d)
      ];
      return S(h, b, c), m.object(...c);
    }
    function y({ errorPath: h }, { instancePath: b }) {
      const d = b ? (0, t.str)`${h}${(0, n.getErrorPath)(b, n.Type.Str)}` : h;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, d)];
    }
    function k({ keyword: h, it: { errSchemaPath: b } }, { schemaPath: d, parentSchema: m }) {
      let _ = m ? b : (0, t.str)`${b}/${h}`;
      return d && (_ = (0, t.str)`${_}${(0, n.getErrorPath)(d, n.Type.Str)}`), [p.schemaPath, _];
    }
    function S(h, { params: b, message: d }, m) {
      const { keyword: _, data: c, schemaValue: u, it: v } = h, { opts: E, propertyName: x, topSchemaRef: F, schemaPath: T } = v;
      m.push([p.keyword, _], [p.params, typeof b == "function" ? b(h) : b || (0, t._)`{}`]), E.messages && m.push([p.message, typeof d == "function" ? d(h) : d]), E.verbose && m.push([p.schema, u], [p.parentSchema, (0, t._)`${F}${T}`], [r.default.data, c]), x && m.push([p.propertyName, x]);
    }
  })(Xn)), Xn;
}
var ao;
function xa() {
  if (ao) return Xe;
  ao = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.boolOrEmptySchema = Xe.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Bn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: l, schema: f, validateName: p } = a;
    f === !1 ? i(a, !1) : typeof f == "object" && f.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${p}.errors`, null), l.return(!0));
  }
  Xe.topBoolOrEmptySchema = o;
  function s(a, l) {
    const { gen: f, schema: p } = a;
    p === !1 ? (f.var(l, !1), i(a)) : f.var(l, !0);
  }
  Xe.boolOrEmptySchema = s;
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
  return Xe;
}
var he = {}, Ze = {}, co;
function pi() {
  if (co) return Ze;
  co = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.getRules = Ze.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  Ze.isJSONType = n;
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
  return Ze.getRules = r, Ze;
}
var ze = {}, lo;
function hi() {
  if (lo) return ze;
  lo = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.shouldUseRule = ze.shouldUseGroup = ze.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, s) {
    const i = o.RULES.types[s];
    return i && i !== !0 && t(r, i);
  }
  ze.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((s) => n(r, s));
  }
  ze.shouldUseGroup = t;
  function n(r, o) {
    var s;
    return r[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((i) => r[i] !== void 0));
  }
  return ze.shouldUseRule = n, ze;
}
var uo;
function zn() {
  if (uo) return he;
  uo = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.reportTypeError = he.checkDataTypes = he.checkDataType = he.coerceAndCheckDataType = he.getJSONTypes = he.getSchemaTypes = he.DataType = void 0;
  const e = /* @__PURE__ */ pi(), t = /* @__PURE__ */ hi(), n = /* @__PURE__ */ Bn(), r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ oe();
  var s;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(s || (he.DataType = s = {}));
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
  he.getSchemaTypes = i;
  function a(d) {
    const m = Array.isArray(d) ? d : d ? [d] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  he.getJSONTypes = a;
  function l(d, m) {
    const { gen: _, data: c, opts: u } = d, v = p(m, u.coerceTypes), E = m.length > 0 && !(v.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(d, m[0]));
    if (E) {
      const x = k(m, c, u.strictNumbers, s.Wrong);
      _.if(x, () => {
        v.length ? g(d, m, v) : h(d);
      });
    }
    return E;
  }
  he.coerceAndCheckDataType = l;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(d, m) {
    return m ? d.filter((_) => f.has(_) || m === "array" && _ === "array") : [];
  }
  function g(d, m, _) {
    const { gen: c, data: u, opts: v } = d, E = c.let("dataType", (0, r._)`typeof ${u}`), x = c.let("coerced", (0, r._)`undefined`);
    v.coerceTypes === "array" && c.if((0, r._)`${E} == 'object' && Array.isArray(${u}) && ${u}.length == 1`, () => c.assign(u, (0, r._)`${u}[0]`).assign(E, (0, r._)`typeof ${u}`).if(k(m, u, v.strictNumbers), () => c.assign(x, u))), c.if((0, r._)`${x} !== undefined`);
    for (const T of _)
      (f.has(T) || T === "array" && v.coerceTypes === "array") && F(T);
    c.else(), h(d), c.endIf(), c.if((0, r._)`${x} !== undefined`, () => {
      c.assign(u, x), $(d, x);
    });
    function F(T) {
      switch (T) {
        case "string":
          c.elseIf((0, r._)`${E} == "number" || ${E} == "boolean"`).assign(x, (0, r._)`"" + ${u}`).elseIf((0, r._)`${u} === null`).assign(x, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${E} == "boolean" || ${u} === null
              || (${E} == "string" && ${u} && ${u} == +${u})`).assign(x, (0, r._)`+${u}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${E} === "boolean" || ${u} === null
              || (${E} === "string" && ${u} && ${u} == +${u} && !(${u} % 1))`).assign(x, (0, r._)`+${u}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${u} === "false" || ${u} === 0 || ${u} === null`).assign(x, !1).elseIf((0, r._)`${u} === "true" || ${u} === 1`).assign(x, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${u} === "" || ${u} === 0 || ${u} === false`), c.assign(x, null);
          return;
        case "array":
          c.elseIf((0, r._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${u} === null`).assign(x, (0, r._)`[${u}]`);
      }
    }
  }
  function $({ gen: d, parentData: m, parentDataProperty: _ }, c) {
    d.if((0, r._)`${m} !== undefined`, () => d.assign((0, r._)`${m}[${_}]`, c));
  }
  function y(d, m, _, c = s.Correct) {
    const u = c === s.Correct ? r.operators.EQ : r.operators.NEQ;
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
    return c === s.Correct ? v : (0, r.not)(v);
    function E(x = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, x, _ ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  he.checkDataType = y;
  function k(d, m, _, c) {
    if (d.length === 1)
      return y(d[0], m, _, c);
    let u;
    const v = (0, o.toHash)(d);
    if (v.array && v.object) {
      const E = (0, r._)`typeof ${m} != "object"`;
      u = v.null ? E : (0, r._)`!${m} || ${E}`, delete v.null, delete v.array, delete v.object;
    } else
      u = r.nil;
    v.number && delete v.integer;
    for (const E in v)
      u = (0, r.and)(u, y(E, m, _, c));
    return u;
  }
  he.checkDataTypes = k;
  const S = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: m }) => typeof d == "string" ? (0, r._)`{type: ${d}}` : (0, r._)`{type: ${m}}`
  };
  function h(d) {
    const m = b(d);
    (0, n.reportError)(m, S);
  }
  he.reportTypeError = h;
  function b(d) {
    const { gen: m, data: _, schema: c } = d, u = (0, o.schemaRefOrVal)(d, c, "type");
    return {
      gen: m,
      keyword: "type",
      data: _,
      schema: c.type,
      schemaCode: u,
      schemaValue: u,
      parentSchema: c,
      params: {},
      it: d
    };
  }
  return he;
}
var _t = {}, fo;
function Pa() {
  if (fo) return _t;
  fo = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.assignDefaults = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe();
  function n(o, s) {
    const { properties: i, items: a } = o.schema;
    if (s === "object" && i)
      for (const l in i)
        r(o, l, i[l].default);
    else s === "array" && Array.isArray(a) && a.forEach((l, f) => r(o, f, l.default));
  }
  _t.assignDefaults = n;
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
  return _t;
}
var xe = {}, le = {}, po;
function Me() {
  if (po) return le;
  po = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.validateUnion = le.validateArray = le.usePattern = le.callValidateCode = le.schemaProperties = le.allSchemaProperties = le.noPropertyInData = le.propertyInData = le.isOwnProperty = le.hasPropFunc = le.reportMissingProp = le.checkMissingProp = le.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ oe();
  function o(d, m) {
    const { gen: _, data: c, it: u } = d;
    _.if(p(_, c, m, u.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${m}` }, !0), d.error();
    });
  }
  le.checkReportMissingProp = o;
  function s({ gen: d, data: m, it: { opts: _ } }, c, u) {
    return (0, e.or)(...c.map((v) => (0, e.and)(p(d, m, v, _.ownProperties), (0, e._)`${u} = ${v}`)));
  }
  le.checkMissingProp = s;
  function i(d, m) {
    d.setParams({ missingProperty: m }, !0), d.error();
  }
  le.reportMissingProp = i;
  function a(d) {
    return d.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  le.hasPropFunc = a;
  function l(d, m, _) {
    return (0, e._)`${a(d)}.call(${m}, ${_})`;
  }
  le.isOwnProperty = l;
  function f(d, m, _, c) {
    const u = (0, e._)`${m}${(0, e.getProperty)(_)} !== undefined`;
    return c ? (0, e._)`${u} && ${l(d, m, _)}` : u;
  }
  le.propertyInData = f;
  function p(d, m, _, c) {
    const u = (0, e._)`${m}${(0, e.getProperty)(_)} === undefined`;
    return c ? (0, e.or)(u, (0, e.not)(l(d, m, _))) : u;
  }
  le.noPropertyInData = p;
  function g(d) {
    return d ? Object.keys(d).filter((m) => m !== "__proto__") : [];
  }
  le.allSchemaProperties = g;
  function $(d, m) {
    return g(m).filter((_) => !(0, t.alwaysValidSchema)(d, m[_]));
  }
  le.schemaProperties = $;
  function y({ schemaCode: d, data: m, it: { gen: _, topSchemaRef: c, schemaPath: u, errorPath: v }, it: E }, x, F, T) {
    const R = T ? (0, e._)`${d}, ${m}, ${c}${u}` : m, I = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, v)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && I.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const H = (0, e._)`${R}, ${_.object(...I)}`;
    return F !== e.nil ? (0, e._)`${x}.call(${F}, ${H})` : (0, e._)`${x}(${H})`;
  }
  le.callValidateCode = y;
  const k = (0, e._)`new RegExp`;
  function S({ gen: d, it: { opts: m } }, _) {
    const c = m.unicodeRegExp ? "u" : "", { regExp: u } = m.code, v = u(_, c);
    return d.scopeValue("pattern", {
      key: v.toString(),
      ref: v,
      code: (0, e._)`${u.code === "new RegExp" ? k : (0, r.useFunc)(d, u)}(${_}, ${c})`
    });
  }
  le.usePattern = S;
  function h(d) {
    const { gen: m, data: _, keyword: c, it: u } = d, v = m.name("valid");
    if (u.allErrors) {
      const x = m.let("valid", !0);
      return E(() => m.assign(x, !1)), x;
    }
    return m.var(v, !0), E(() => m.break()), v;
    function E(x) {
      const F = m.const("len", (0, e._)`${_}.length`);
      m.forRange("i", 0, F, (T) => {
        d.subschema({
          keyword: c,
          dataProp: T,
          dataPropType: t.Type.Num
        }, v), m.if((0, e.not)(v), x);
      });
    }
  }
  le.validateArray = h;
  function b(d) {
    const { gen: m, schema: _, keyword: c, it: u } = d;
    if (!Array.isArray(_))
      throw new Error("ajv implementation error");
    if (_.some((F) => (0, t.alwaysValidSchema)(u, F)) && !u.opts.unevaluated)
      return;
    const E = m.let("valid", !1), x = m.name("_valid");
    m.block(() => _.forEach((F, T) => {
      const R = d.subschema({
        keyword: c,
        schemaProp: T,
        compositeRule: !0
      }, x);
      m.assign(E, (0, e._)`${E} || ${x}`), d.mergeValidEvaluated(R, x) || m.if((0, e.not)(E));
    })), d.result(E, () => d.reset(), () => d.error(!0));
  }
  return le.validateUnion = b, le;
}
var ho;
function Aa() {
  if (ho) return xe;
  ho = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.validateKeywordUsage = xe.validSchemaType = xe.funcKeywordCode = xe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ Bn();
  function o($, y) {
    const { gen: k, keyword: S, schema: h, parentSchema: b, it: d } = $, m = y.macro.call(d.self, h, b, d), _ = f(k, S, m);
    d.opts.validateSchema !== !1 && d.self.validateSchema(m, !0);
    const c = k.name("valid");
    $.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${S}`,
      topSchemaRef: _,
      compositeRule: !0
    }, c), $.pass(c, () => $.error(!0));
  }
  xe.macroKeywordCode = o;
  function s($, y) {
    var k;
    const { gen: S, keyword: h, schema: b, parentSchema: d, $data: m, it: _ } = $;
    l(_, y);
    const c = !m && y.compile ? y.compile.call(_.self, b, d, _) : y.validate, u = f(S, h, c), v = S.let("valid");
    $.block$data(v, E), $.ok((k = y.valid) !== null && k !== void 0 ? k : v);
    function E() {
      if (y.errors === !1)
        T(), y.modifying && i($), R(() => $.error());
      else {
        const I = y.async ? x() : F();
        y.modifying && i($), R(() => a($, I));
      }
    }
    function x() {
      const I = S.let("ruleErrs", null);
      return S.try(() => T((0, e._)`await `), (H) => S.assign(v, !1).if((0, e._)`${H} instanceof ${_.ValidationError}`, () => S.assign(I, (0, e._)`${H}.errors`), () => S.throw(H))), I;
    }
    function F() {
      const I = (0, e._)`${u}.errors`;
      return S.assign(I, null), T(e.nil), I;
    }
    function T(I = y.async ? (0, e._)`await ` : e.nil) {
      const H = _.opts.passContext ? t.default.this : t.default.self, ee = !("compile" in y && !m || y.schema === !1);
      S.assign(v, (0, e._)`${I}${(0, n.callValidateCode)($, u, H, ee)}`, y.modifying);
    }
    function R(I) {
      var H;
      S.if((0, e.not)((H = y.valid) !== null && H !== void 0 ? H : v), I);
    }
  }
  xe.funcKeywordCode = s;
  function i($) {
    const { gen: y, data: k, it: S } = $;
    y.if(S.parentData, () => y.assign(k, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function a($, y) {
    const { gen: k } = $;
    k.if((0, e._)`Array.isArray(${y})`, () => {
      k.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)($);
    }, () => $.error());
  }
  function l({ schemaEnv: $ }, y) {
    if (y.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function f($, y, k) {
    if (k === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return $.scopeValue("keyword", typeof k == "function" ? { ref: k } : { ref: k, code: (0, e.stringify)(k) });
  }
  function p($, y, k = !1) {
    return !y.length || y.some((S) => S === "array" ? Array.isArray($) : S === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == S || k && typeof $ > "u");
  }
  xe.validSchemaType = p;
  function g({ schema: $, opts: y, self: k, errSchemaPath: S }, h, b) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(b) : h.keyword !== b)
      throw new Error("ajv implementation error");
    const d = h.dependencies;
    if (d?.some((m) => !Object.prototype.hasOwnProperty.call($, m)))
      throw new Error(`parent schema must have dependencies of ${b}: ${d.join(",")}`);
    if (h.validateSchema && !h.validateSchema($[b])) {
      const _ = `keyword "${b}" value is invalid at path "${S}": ` + k.errorsText(h.validateSchema.errors);
      if (y.validateSchema === "log")
        k.logger.error(_);
      else
        throw new Error(_);
    }
  }
  return xe.validateKeywordUsage = g, xe;
}
var Ie = {}, mo;
function Ra() {
  if (mo) return Ie;
  mo = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.extendSubschemaMode = Ie.extendSubschemaData = Ie.getSubschema = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe();
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
  Ie.getSubschema = n;
  function r(s, i, { dataProp: a, dataPropType: l, data: f, dataTypes: p, propertyName: g }) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = i;
    if (a !== void 0) {
      const { errorPath: k, dataPathArr: S, opts: h } = i, b = $.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      y(b), s.errorPath = (0, e.str)`${k}${(0, t.getErrorPath)(a, l, h.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${a}`, s.dataPathArr = [...S, s.parentDataProperty];
    }
    if (f !== void 0) {
      const k = f instanceof e.Name ? f : $.let("data", f, !0);
      y(k), g !== void 0 && (s.propertyName = g);
    }
    p && (s.dataTypes = p);
    function y(k) {
      s.data = k, s.dataLevel = i.dataLevel + 1, s.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), s.parentData = i.data, s.dataNames = [...i.dataNames, k];
    }
  }
  Ie.extendSubschemaData = r;
  function o(s, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: l, createErrors: f, allErrors: p }) {
    l !== void 0 && (s.compositeRule = l), f !== void 0 && (s.createErrors = f), p !== void 0 && (s.allErrors = p), s.jtdDiscriminator = i, s.jtdMetadata = a;
  }
  return Ie.extendSubschemaMode = o, Ie;
}
var be = {}, tr, go;
function mi() {
  return go || (go = 1, tr = function e(t, n) {
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
  }), tr;
}
var nr = { exports: {} }, yo;
function Na() {
  if (yo) return nr.exports;
  yo = 1;
  var e = nr.exports = function(r, o, s) {
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
        var k = i[y];
        if (Array.isArray(k)) {
          if (y in e.arrayKeywords)
            for (var S = 0; S < k.length; S++)
              t(r, o, s, k[S], a + "/" + y + "/" + S, l, a, y, i, S);
        } else if (y in e.propsKeywords) {
          if (k && typeof k == "object")
            for (var h in k)
              t(r, o, s, k[h], a + "/" + y + "/" + n(h), l, a, y, i, h);
        } else (y in e.keywords || r.allKeys && !(y in e.skipKeywords)) && t(r, o, s, k, a + "/" + y, l, a, y, i);
      }
      s(i, a, l, f, p, g, $);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return nr.exports;
}
var $o;
function Un() {
  if ($o) return be;
  $o = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ oe(), t = mi(), n = Na(), r = /* @__PURE__ */ new Set([
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
  function o(S, h = !0) {
    return typeof S == "boolean" ? !0 : h === !0 ? !i(S) : h ? a(S) <= h : !1;
  }
  be.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(S) {
    for (const h in S) {
      if (s.has(h))
        return !0;
      const b = S[h];
      if (Array.isArray(b) && b.some(i) || typeof b == "object" && i(b))
        return !0;
    }
    return !1;
  }
  function a(S) {
    let h = 0;
    for (const b in S) {
      if (b === "$ref")
        return 1 / 0;
      if (h++, !r.has(b) && (typeof S[b] == "object" && (0, e.eachItem)(S[b], (d) => h += a(d)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function l(S, h = "", b) {
    b !== !1 && (h = g(h));
    const d = S.parse(h);
    return f(S, d);
  }
  be.getFullPath = l;
  function f(S, h) {
    return S.serialize(h).split("#")[0] + "#";
  }
  be._getFullPath = f;
  const p = /#\/?$/;
  function g(S) {
    return S ? S.replace(p, "") : "";
  }
  be.normalizeId = g;
  function $(S, h, b) {
    return b = g(b), S.resolve(h, b);
  }
  be.resolveUrl = $;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function k(S, h) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: b, uriResolver: d } = this.opts, m = g(S[b] || h), _ = { "": m }, c = l(d, m, !1), u = {}, v = /* @__PURE__ */ new Set();
    return n(S, { allKeys: !0 }, (F, T, R, I) => {
      if (I === void 0)
        return;
      const H = c + T;
      let ee = _[I];
      typeof F[b] == "string" && (ee = W.call(this, F[b])), ae.call(this, F.$anchor), ae.call(this, F.$dynamicAnchor), _[T] = ee;
      function W(Y) {
        const K = this.opts.uriResolver.resolve;
        if (Y = g(ee ? K(ee, Y) : Y), v.has(Y))
          throw x(Y);
        v.add(Y);
        let z = this.refs[Y];
        return typeof z == "string" && (z = this.refs[z]), typeof z == "object" ? E(F, z.schema, Y) : Y !== g(H) && (Y[0] === "#" ? (E(F, u[Y], Y), u[Y] = F) : this.refs[Y] = H), Y;
      }
      function ae(Y) {
        if (typeof Y == "string") {
          if (!y.test(Y))
            throw new Error(`invalid anchor "${Y}"`);
          W.call(this, `#${Y}`);
        }
      }
    }), u;
    function E(F, T, R) {
      if (T !== void 0 && !t(F, T))
        throw x(R);
    }
    function x(F) {
      return new Error(`reference "${F}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = k, be;
}
var vo;
function Kn() {
  if (vo) return je;
  vo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getData = je.KeywordCxt = je.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ xa(), t = /* @__PURE__ */ zn(), n = /* @__PURE__ */ hi(), r = /* @__PURE__ */ zn(), o = /* @__PURE__ */ Pa(), s = /* @__PURE__ */ Aa(), i = /* @__PURE__ */ Ra(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ Ne(), f = /* @__PURE__ */ Un(), p = /* @__PURE__ */ oe(), g = /* @__PURE__ */ Bn();
  function $(P) {
    if (c(P) && (v(P), _(P))) {
      h(P);
      return;
    }
    y(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  je.validateFunctionCode = $;
  function y({ gen: P, validateName: N, schema: L, schemaEnv: U, opts: X }, te) {
    X.code.es5 ? P.func(N, (0, a._)`${l.default.data}, ${l.default.valCxt}`, U.$async, () => {
      P.code((0, a._)`"use strict"; ${d(L, X)}`), S(P, X), P.code(te);
    }) : P.func(N, (0, a._)`${l.default.data}, ${k(X)}`, U.$async, () => P.code(d(L, X)).code(te));
  }
  function k(P) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${P.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function S(P, N) {
    P.if(l.default.valCxt, () => {
      P.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), P.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), P.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), P.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), N.dynamicRef && P.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      P.var(l.default.instancePath, (0, a._)`""`), P.var(l.default.parentData, (0, a._)`undefined`), P.var(l.default.parentDataProperty, (0, a._)`undefined`), P.var(l.default.rootData, l.default.data), N.dynamicRef && P.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function h(P) {
    const { schema: N, opts: L, gen: U } = P;
    y(P, () => {
      L.$comment && N.$comment && I(P), F(P), U.let(l.default.vErrors, null), U.let(l.default.errors, 0), L.unevaluated && b(P), E(P), H(P);
    });
  }
  function b(P) {
    const { gen: N, validateName: L } = P;
    P.evaluated = N.const("evaluated", (0, a._)`${L}.evaluated`), N.if((0, a._)`${P.evaluated}.dynamicProps`, () => N.assign((0, a._)`${P.evaluated}.props`, (0, a._)`undefined`)), N.if((0, a._)`${P.evaluated}.dynamicItems`, () => N.assign((0, a._)`${P.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(P, N) {
    const L = typeof P == "object" && P[N.schemaId];
    return L && (N.code.source || N.code.process) ? (0, a._)`/*# sourceURL=${L} */` : a.nil;
  }
  function m(P, N) {
    if (c(P) && (v(P), _(P))) {
      u(P, N);
      return;
    }
    (0, e.boolOrEmptySchema)(P, N);
  }
  function _({ schema: P, self: N }) {
    if (typeof P == "boolean")
      return !P;
    for (const L in P)
      if (N.RULES.all[L])
        return !0;
    return !1;
  }
  function c(P) {
    return typeof P.schema != "boolean";
  }
  function u(P, N) {
    const { schema: L, gen: U, opts: X } = P;
    X.$comment && L.$comment && I(P), T(P), R(P);
    const te = U.const("_errs", l.default.errors);
    E(P, te), U.var(N, (0, a._)`${te} === ${l.default.errors}`);
  }
  function v(P) {
    (0, p.checkUnknownRules)(P), x(P);
  }
  function E(P, N) {
    if (P.opts.jtd)
      return W(P, [], !1, N);
    const L = (0, t.getSchemaTypes)(P.schema), U = (0, t.coerceAndCheckDataType)(P, L);
    W(P, L, !U, N);
  }
  function x(P) {
    const { schema: N, errSchemaPath: L, opts: U, self: X } = P;
    N.$ref && U.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(N, X.RULES) && X.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function F(P) {
    const { schema: N, opts: L } = P;
    N.default !== void 0 && L.useDefaults && L.strictSchema && (0, p.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function T(P) {
    const N = P.schema[P.opts.schemaId];
    N && (P.baseId = (0, f.resolveUrl)(P.opts.uriResolver, P.baseId, N));
  }
  function R(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function I({ gen: P, schemaEnv: N, schema: L, errSchemaPath: U, opts: X }) {
    const te = L.$comment;
    if (X.$comment === !0)
      P.code((0, a._)`${l.default.self}.logger.log(${te})`);
    else if (typeof X.$comment == "function") {
      const ie = (0, a.str)`${U}/$comment`, ge = P.scopeValue("root", { ref: N.root });
      P.code((0, a._)`${l.default.self}.opts.$comment(${te}, ${ie}, ${ge}.schema)`);
    }
  }
  function H(P) {
    const { gen: N, schemaEnv: L, validateName: U, ValidationError: X, opts: te } = P;
    L.$async ? N.if((0, a._)`${l.default.errors} === 0`, () => N.return(l.default.data), () => N.throw((0, a._)`new ${X}(${l.default.vErrors})`)) : (N.assign((0, a._)`${U}.errors`, l.default.vErrors), te.unevaluated && ee(P), N.return((0, a._)`${l.default.errors} === 0`));
  }
  function ee({ gen: P, evaluated: N, props: L, items: U }) {
    L instanceof a.Name && P.assign((0, a._)`${N}.props`, L), U instanceof a.Name && P.assign((0, a._)`${N}.items`, U);
  }
  function W(P, N, L, U) {
    const { gen: X, schema: te, data: ie, allErrors: ge, opts: ue, self: pe } = P, { RULES: fe } = pe;
    if (te.$ref && (ue.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(te, fe))) {
      X.block(() => B(P, "$ref", fe.all.$ref.definition));
      return;
    }
    ue.jtd || Y(P, N), X.block(() => {
      for (const ve of fe.rules)
        Fe(ve);
      Fe(fe.post);
    });
    function Fe(ve) {
      (0, n.shouldUseGroup)(te, ve) && (ve.type ? (X.if((0, r.checkDataType)(ve.type, ie, ue.strictNumbers)), ae(P, ve), N.length === 1 && N[0] === ve.type && L && (X.else(), (0, r.reportTypeError)(P)), X.endIf()) : ae(P, ve), ge || X.if((0, a._)`${l.default.errors} === ${U || 0}`));
    }
  }
  function ae(P, N) {
    const { gen: L, schema: U, opts: { useDefaults: X } } = P;
    X && (0, o.assignDefaults)(P, N.type), L.block(() => {
      for (const te of N.rules)
        (0, n.shouldUseRule)(U, te) && B(P, te.keyword, te.definition, N.type);
    });
  }
  function Y(P, N) {
    P.schemaEnv.meta || !P.opts.strictTypes || (K(P, N), P.opts.allowUnionTypes || z(P, N), A(P, P.dataTypes));
  }
  function K(P, N) {
    if (N.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = N;
        return;
      }
      N.forEach((L) => {
        M(P.dataTypes, L) || C(P, `type "${L}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), w(P, N);
    }
  }
  function z(P, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && C(P, "use allowUnionTypes to allow union type keyword");
  }
  function A(P, N) {
    const L = P.self.RULES.all;
    for (const U in L) {
      const X = L[U];
      if (typeof X == "object" && (0, n.shouldUseRule)(P.schema, X)) {
        const { type: te } = X.definition;
        te.length && !te.some((ie) => q(N, ie)) && C(P, `missing type "${te.join(",")}" for keyword "${U}"`);
      }
    }
  }
  function q(P, N) {
    return P.includes(N) || N === "number" && P.includes("integer");
  }
  function M(P, N) {
    return P.includes(N) || N === "integer" && P.includes("number");
  }
  function w(P, N) {
    const L = [];
    for (const U of P.dataTypes)
      M(N, U) ? L.push(U) : N.includes("integer") && U === "number" && L.push("integer");
    P.dataTypes = L;
  }
  function C(P, N) {
    const L = P.schemaEnv.baseId + P.errSchemaPath;
    N += ` at "${L}" (strictTypes)`, (0, p.checkStrictMode)(P, N, P.opts.strictTypes);
  }
  class D {
    constructor(N, L, U) {
      if ((0, s.validateKeywordUsage)(N, L, U), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = U, this.data = N.data, this.schema = N.schema[U], this.$data = L.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(N, this.schema, U, this.$data), this.schemaType = L.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = L, this.$data)
        this.schemaCode = N.gen.const("vSchema", Z(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${U} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = N.gen.const("_errs", l.default.errors));
    }
    result(N, L, U) {
      this.failResult((0, a.not)(N), L, U);
    }
    failResult(N, L, U) {
      this.gen.if(N), U ? U() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, L) {
      this.failResult((0, a.not)(N), void 0, L);
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
      const { schemaCode: L } = this;
      this.fail((0, a._)`${L} !== undefined && (${(0, a.or)(this.invalid$data(), N)})`);
    }
    error(N, L, U) {
      if (L) {
        this.setParams(L), this._error(N, U), this.setParams({});
        return;
      }
      this._error(N, U);
    }
    _error(N, L) {
      (N ? g.reportExtraError : g.reportError)(this, this.def.error, L);
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
    setParams(N, L) {
      L ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, L, U = a.nil) {
      this.gen.block(() => {
        this.check$data(N, U), L();
      });
    }
    check$data(N = a.nil, L = a.nil) {
      if (!this.$data)
        return;
      const { gen: U, schemaCode: X, schemaType: te, def: ie } = this;
      U.if((0, a.or)((0, a._)`${X} === undefined`, L)), N !== a.nil && U.assign(N, !0), (te.length || ie.validateSchema) && (U.elseIf(this.invalid$data()), this.$dataError(), N !== a.nil && U.assign(N, !1)), U.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: L, schemaType: U, def: X, it: te } = this;
      return (0, a.or)(ie(), ge());
      function ie() {
        if (U.length) {
          if (!(L instanceof a.Name))
            throw new Error("ajv implementation error");
          const ue = Array.isArray(U) ? U : [U];
          return (0, a._)`${(0, r.checkDataTypes)(ue, L, te.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ge() {
        if (X.validateSchema) {
          const ue = N.scopeValue("validate$data", { ref: X.validateSchema });
          return (0, a._)`!${ue}(${L})`;
        }
        return a.nil;
      }
    }
    subschema(N, L) {
      const U = (0, i.getSubschema)(this.it, N);
      (0, i.extendSubschemaData)(U, this.it, N), (0, i.extendSubschemaMode)(U, N);
      const X = { ...this.it, ...U, items: void 0, props: void 0 };
      return m(X, L), X;
    }
    mergeEvaluated(N, L) {
      const { it: U, gen: X } = this;
      U.opts.unevaluated && (U.props !== !0 && N.props !== void 0 && (U.props = p.mergeEvaluated.props(X, N.props, U.props, L)), U.items !== !0 && N.items !== void 0 && (U.items = p.mergeEvaluated.items(X, N.items, U.items, L)));
    }
    mergeValidEvaluated(N, L) {
      const { it: U, gen: X } = this;
      if (U.opts.unevaluated && (U.props !== !0 || U.items !== !0))
        return X.if(L, () => this.mergeEvaluated(N, a.Name)), !0;
    }
  }
  je.KeywordCxt = D;
  function B(P, N, L, U) {
    const X = new D(P, L, N);
    "code" in L ? L.code(X, U) : X.$data && L.validate ? (0, s.funcKeywordCode)(X, L) : "macro" in L ? (0, s.macroKeywordCode)(X, L) : (L.compile || L.validate) && (0, s.funcKeywordCode)(X, L);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(P, { dataLevel: N, dataNames: L, dataPathArr: U }) {
    let X, te;
    if (P === "")
      return l.default.rootData;
    if (P[0] === "/") {
      if (!G.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      X = P, te = l.default.rootData;
    } else {
      const pe = Q.exec(P);
      if (!pe)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const fe = +pe[1];
      if (X = pe[2], X === "#") {
        if (fe >= N)
          throw new Error(ue("property/index", fe));
        return U[N - fe];
      }
      if (fe > N)
        throw new Error(ue("data", fe));
      if (te = L[N - fe], !X)
        return te;
    }
    let ie = te;
    const ge = X.split("/");
    for (const pe of ge)
      pe && (te = (0, a._)`${te}${(0, a.getProperty)((0, p.unescapeJsonPointer)(pe))}`, ie = (0, a._)`${ie} && ${te}`);
    return ie;
    function ue(pe, fe) {
      return `Cannot access ${pe} ${fe} levels up, current level is ${N}`;
    }
  }
  return je.getData = Z, je;
}
var jt = {}, bo;
function Rr() {
  if (bo) return jt;
  bo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return jt.default = e, jt;
}
var zt = {}, wo;
function Hn() {
  if (wo) return zt;
  wo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Un();
  class t extends Error {
    constructor(r, o, s, i) {
      super(i || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return zt.default = t, zt;
}
var we = {}, _o;
function Gn() {
  if (_o) return we;
  _o = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Rr(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ Un(), o = /* @__PURE__ */ oe(), s = /* @__PURE__ */ Kn();
  class i {
    constructor(b) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof b.schema == "object" && (m = b.schema), this.schema = b.schema, this.schemaId = b.schemaId, this.root = b.root || this, this.baseId = (d = b.baseId) !== null && d !== void 0 ? d : (0, r.normalizeId)(m?.[b.schemaId || "$id"]), this.schemaPath = b.schemaPath, this.localRefs = b.localRefs, this.meta = b.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = i;
  function a(h) {
    const b = p.call(this, h);
    if (b)
      return b;
    const d = (0, r.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: m, lines: _ } = this.opts.code, { ownProperties: c } = this.opts, u = new e.CodeGen(this.scope, { es5: m, lines: _, ownProperties: c });
    let v;
    h.$async && (v = u.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const E = u.scopeName("validate");
    h.validateName = E;
    const x = {
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
      validateName: E,
      ValidationError: v,
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
    let F;
    try {
      this._compilations.add(h), (0, s.validateFunctionCode)(x), u.optimize(this.opts.code.optimize);
      const T = u.toString();
      F = `${u.scopeRefs(n.default.scope)}return ${T}`, this.opts.code.process && (F = this.opts.code.process(F, h));
      const I = new Function(`${n.default.self}`, `${n.default.scope}`, F)(this, this.scope.get());
      if (this.scope.value(E, { ref: I }), I.errors = null, I.schema = h.schema, I.schemaEnv = h, h.$async && (I.$async = !0), this.opts.code.source === !0 && (I.source = { validateName: E, validateCode: T, scopeValues: u._values }), this.opts.unevaluated) {
        const { props: H, items: ee } = x;
        I.evaluated = {
          props: H instanceof e.Name ? void 0 : H,
          items: ee instanceof e.Name ? void 0 : ee,
          dynamicProps: H instanceof e.Name,
          dynamicItems: ee instanceof e.Name
        }, I.source && (I.source.evaluated = (0, e.stringify)(I.evaluated));
      }
      return h.validate = I, h;
    } catch (T) {
      throw delete h.validate, delete h.validateName, F && this.logger.error("Error compiling schema, function code:", F), T;
    } finally {
      this._compilations.delete(h);
    }
  }
  we.compileSchema = a;
  function l(h, b, d) {
    var m;
    d = (0, r.resolveUrl)(this.opts.uriResolver, b, d);
    const _ = h.refs[d];
    if (_)
      return _;
    let c = $.call(this, h, d);
    if (c === void 0) {
      const u = (m = h.localRefs) === null || m === void 0 ? void 0 : m[d], { schemaId: v } = this.opts;
      u && (c = new i({ schema: u, schemaId: v, root: h, baseId: b }));
    }
    if (c !== void 0)
      return h.refs[d] = f.call(this, c);
  }
  we.resolveRef = l;
  function f(h) {
    return (0, r.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : a.call(this, h);
  }
  function p(h) {
    for (const b of this._compilations)
      if (g(b, h))
        return b;
  }
  we.getCompilingSchema = p;
  function g(h, b) {
    return h.schema === b.schema && h.root === b.root && h.baseId === b.baseId;
  }
  function $(h, b) {
    let d;
    for (; typeof (d = this.refs[b]) == "string"; )
      b = d;
    return d || this.schemas[b] || y.call(this, h, b);
  }
  function y(h, b) {
    const d = this.opts.uriResolver.parse(b), m = (0, r._getFullPath)(this.opts.uriResolver, d);
    let _ = (0, r.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && m === _)
      return S.call(this, d, h);
    const c = (0, r.normalizeId)(m), u = this.refs[c] || this.schemas[c];
    if (typeof u == "string") {
      const v = y.call(this, h, u);
      return typeof v?.schema != "object" ? void 0 : S.call(this, d, v);
    }
    if (typeof u?.schema == "object") {
      if (u.validate || a.call(this, u), c === (0, r.normalizeId)(b)) {
        const { schema: v } = u, { schemaId: E } = this.opts, x = v[E];
        return x && (_ = (0, r.resolveUrl)(this.opts.uriResolver, _, x)), new i({ schema: v, schemaId: E, root: h, baseId: _ });
      }
      return S.call(this, d, u);
    }
  }
  we.resolveSchema = y;
  const k = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function S(h, { baseId: b, schema: d, root: m }) {
    var _;
    if (((_ = h.fragment) === null || _ === void 0 ? void 0 : _[0]) !== "/")
      return;
    for (const v of h.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const E = d[(0, o.unescapeFragment)(v)];
      if (E === void 0)
        return;
      d = E;
      const x = typeof d == "object" && d[this.opts.schemaId];
      !k.has(v) && x && (b = (0, r.resolveUrl)(this.opts.uriResolver, b, x));
    }
    let c;
    if (typeof d != "boolean" && d.$ref && !(0, o.schemaHasRulesButRef)(d, this.RULES)) {
      const v = (0, r.resolveUrl)(this.opts.uriResolver, b, d.$ref);
      c = y.call(this, m, v);
    }
    const { schemaId: u } = this.opts;
    if (c = c || new i({ schema: d, schemaId: u, root: m, baseId: b }), c.schema !== c.root.schema)
      return c;
  }
  return we;
}
const Ma = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Oa = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Fa = "object", Ta = ["$data"], ja = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, za = !1, Ia = {
  $id: Ma,
  description: Oa,
  type: Fa,
  required: Ta,
  properties: ja,
  additionalProperties: za
};
var It = {}, St = { exports: {} }, rr, So;
function gi() {
  if (So) return rr;
  So = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function s(c) {
    let u = "", v = 0, E = 0;
    for (E = 0; E < c.length; E++)
      if (v = c[E].charCodeAt(0), v !== 48) {
        if (!(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
          return "";
        u += c[E];
        break;
      }
    for (E += 1; E < c.length; E++) {
      if (v = c[E].charCodeAt(0), !(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
        return "";
      u += c[E];
    }
    return u;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, u, v) {
    if (c.length) {
      const E = s(c);
      if (E !== "")
        u.push(E);
      else
        return v.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function f(c) {
    let u = 0;
    const v = { error: !1, address: "", zone: "" }, E = [], x = [];
    let F = !1, T = !1, R = l;
    for (let I = 0; I < c.length; I++) {
      const H = c[I];
      if (!(H === "[" || H === "]"))
        if (H === ":") {
          if (F === !0 && (T = !0), !R(x, E, v))
            break;
          if (++u > 7) {
            v.error = !0;
            break;
          }
          I > 0 && c[I - 1] === ":" && (F = !0), E.push(":");
          continue;
        } else if (H === "%") {
          if (!R(x, E, v))
            break;
          R = a;
        } else {
          x.push(H);
          continue;
        }
    }
    return x.length && (R === a ? v.zone = x.join("") : T ? E.push(x.join("")) : E.push(s(x))), v.address = E.join(""), v;
  }
  function p(c) {
    if (g(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const u = f(c);
    if (u.error)
      return { host: c, isIPV6: !1 };
    {
      let v = u.address, E = u.address;
      return u.zone && (v += "%" + u.zone, E += "%25" + u.zone), { host: v, isIPV6: !0, escapedHost: E };
    }
  }
  function g(c, u) {
    let v = 0;
    for (let E = 0; E < c.length; E++)
      c[E] === u && v++;
    return v;
  }
  function $(c) {
    let u = c;
    const v = [];
    let E = -1, x = 0;
    for (; x = u.length; ) {
      if (x === 1) {
        if (u === ".")
          break;
        if (u === "/") {
          v.push("/");
          break;
        } else {
          v.push(u);
          break;
        }
      } else if (x === 2) {
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
      } else if (x === 3 && u === "/..") {
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
  const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, k = /[@/?#:]/g, S = /[@/?#]/g;
  function h(c, u) {
    const v = u ? S : k;
    return v.lastIndex = 0, c.replace(v, (E) => y[E]);
  }
  function b(c, u = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let v = "";
    for (let E = 0; E < c.length; E++) {
      if (c[E] === "%" && E + 2 < c.length) {
        const x = c.slice(E + 1, E + 3);
        if (n(x)) {
          const F = x.toUpperCase(), T = String.fromCharCode(parseInt(F, 16));
          u && r(T) ? v += T : v += "%" + F, E += 2;
          continue;
        }
      }
      v += c[E];
    }
    return v;
  }
  function d(c) {
    let u = "";
    for (let v = 0; v < c.length; v++) {
      if (c[v] === "%" && v + 2 < c.length) {
        const E = c.slice(v + 1, v + 3);
        if (n(E)) {
          const x = E.toUpperCase(), F = String.fromCharCode(parseInt(x, 16));
          F !== "." && r(F) ? u += F : u += "%" + x, v += 2;
          continue;
        }
      }
      o(c[v]) ? u += c[v] : u += escape(c[v]);
    }
    return u;
  }
  function m(c) {
    let u = "";
    for (let v = 0; v < c.length; v++) {
      if (c[v] === "%" && v + 2 < c.length) {
        const E = c.slice(v + 1, v + 3);
        if (n(E)) {
          u += "%" + E.toUpperCase(), v += 2;
          continue;
        }
      }
      u += escape(c[v]);
    }
    return u;
  }
  function _(c) {
    const u = [];
    if (c.userinfo !== void 0 && (u.push(c.userinfo), u.push("@")), c.host !== void 0) {
      let v = unescape(c.host);
      if (!t(v)) {
        const E = p(v);
        E.isIPV6 === !0 ? v = `[${E.escapedHost}]` : v = h(v, !1);
      }
      u.push(v);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (u.push(":"), u.push(String(c.port))), u.length ? u.join("") : void 0;
  }
  return rr = {
    nonSimpleDomain: i,
    recomposeAuthority: _,
    reescapeHostDelimiters: h,
    normalizePercentEncoding: b,
    normalizePathEncoding: d,
    escapePreservingEscapes: m,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: p,
    stringArrayToHexStripped: s
  }, rr;
}
var or, ko;
function Da() {
  if (ko) return or;
  ko = 1;
  const { isUUID: e } = gi(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
      const [u, v] = c.resourceName.split("?");
      c.path = u && u !== "/" ? u : void 0, c.query = v, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function f(c, u) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const v = c.path.match(t);
    if (v) {
      const E = u.scheme || c.scheme || "urn";
      c.nid = v[1].toLowerCase(), c.nss = v[2];
      const x = `${E}:${u.nid || c.nid}`, F = _(x);
      c.path = void 0, F && (c = F.parse(c, u));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function p(c, u) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const v = u.scheme || c.scheme || "urn", E = c.nid.toLowerCase(), x = `${v}:${u.nid || E}`, F = _(x);
    F && (c = F.serialize(c, u));
    const T = c, R = c.nss;
    return T.path = `${E || u.nid}:${R}`, u.skipEscape = !0, T;
  }
  function g(c, u) {
    const v = c;
    return v.uuid = v.nss, v.nss = void 0, !u.tolerant && (!v.uuid || !e(v.uuid)) && (v.error = v.error || "UUID is not valid."), v;
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
  ), k = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: y.domainHost,
      parse: s,
      serialize: i
    }
  ), S = (
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
      domainHost: S.domainHost,
      parse: S.parse,
      serialize: S.serialize
    }
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: y,
      https: k,
      ws: S,
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
  function _(c) {
    return c && (m[
      /** @type {SchemeName} */
      c
    ] || m[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return or = {
    wsIsSecure: o,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: _
  }, or;
}
var Co;
function qa() {
  if (Co) return St.exports;
  Co = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: s, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: l } = gi(), { SCHEMES: f, getSchemeHandler: p } = Da();
  function g(x, F) {
    return typeof x == "string" ? x = /** @type {T} */
    c(x, F) : typeof x == "object" && (x = /** @type {T} */
    _(S(x, F), F)), x;
  }
  function $(x, F, T) {
    const R = T ? Object.assign({ scheme: "null" }, T) : { scheme: "null" }, I = y(_(x, R), _(F, R), R, !0);
    return R.skipEscape = !0, S(I, R);
  }
  function y(x, F, T, R) {
    const I = {};
    return R || (x = _(S(x, T), T), F = _(S(F, T), T)), T = T || {}, !T.tolerant && F.scheme ? (I.scheme = F.scheme, I.userinfo = F.userinfo, I.host = F.host, I.port = F.port, I.path = t(F.path || ""), I.query = F.query) : (F.userinfo !== void 0 || F.host !== void 0 || F.port !== void 0 ? (I.userinfo = F.userinfo, I.host = F.host, I.port = F.port, I.path = t(F.path || ""), I.query = F.query) : (F.path ? (F.path[0] === "/" ? I.path = t(F.path) : ((x.userinfo !== void 0 || x.host !== void 0 || x.port !== void 0) && !x.path ? I.path = "/" + F.path : x.path ? I.path = x.path.slice(0, x.path.lastIndexOf("/") + 1) + F.path : I.path = F.path, I.path = t(I.path)), I.query = F.query) : (I.path = x.path, F.query !== void 0 ? I.query = F.query : I.query = x.query), I.userinfo = x.userinfo, I.host = x.host, I.port = x.port), I.scheme = x.scheme), I.fragment = F.fragment, I;
  }
  function k(x, F, T) {
    const R = v(x, T), I = v(F, T);
    return R !== void 0 && I !== void 0 && R.toLowerCase() === I.toLowerCase();
  }
  function S(x, F) {
    const T = {
      host: x.host,
      scheme: x.scheme,
      userinfo: x.userinfo,
      port: x.port,
      path: x.path,
      query: x.query,
      nid: x.nid,
      nss: x.nss,
      uuid: x.uuid,
      fragment: x.fragment,
      reference: x.reference,
      resourceName: x.resourceName,
      secure: x.secure,
      error: ""
    }, R = Object.assign({}, F), I = [], H = p(R.scheme || T.scheme);
    H && H.serialize && H.serialize(T, R), T.path !== void 0 && (R.skipEscape ? T.path = r(T.path) : (T.path = s(T.path), T.scheme !== void 0 && (T.path = T.path.split("%3A").join(":")))), R.reference !== "suffix" && T.scheme && I.push(T.scheme, ":");
    const ee = n(T);
    if (ee !== void 0 && (R.reference !== "suffix" && I.push("//"), I.push(ee), T.path && T.path[0] !== "/" && I.push("/")), T.path !== void 0) {
      let W = T.path;
      !R.absolutePath && (!H || !H.absolutePath) && (W = t(W)), ee === void 0 && W[0] === "/" && W[1] === "/" && (W = "/%2F" + W.slice(2)), I.push(W);
    }
    return T.query !== void 0 && I.push("?", T.query), T.fragment !== void 0 && I.push("#", T.fragment), I.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, b = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function d(x, F) {
    if (F[2] !== void 0 && x.path && x.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof x.port == "number" && (x.port < 0 || x.port > 65535))
      return "URI port is malformed.";
  }
  function m(x, F) {
    const T = Object.assign({}, F), R = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let I = !1, H = !1;
    T.reference === "suffix" && (T.scheme ? x = T.scheme + ":" + x : x = "//" + x);
    const ee = x.match(b);
    ee !== null && ee[1].indexOf("\\") !== -1 && (R.error = "URI authority must not contain a literal backslash.", I = !0);
    const W = x.match(h);
    if (W) {
      R.scheme = W[1], R.userinfo = W[3], R.host = W[4], R.port = parseInt(W[5], 10), R.path = W[6] || "", R.query = W[7], R.fragment = W[8], isNaN(R.port) && (R.port = W[5]);
      const ae = d(R, W);
      if (ae !== void 0 && (R.error = R.error || ae, I = !0), R.host)
        if (a(R.host) === !1) {
          const z = e(R.host);
          R.host = z.host.toLowerCase(), H = z.isIPV6;
        } else
          H = !0;
      R.scheme === void 0 && R.userinfo === void 0 && R.host === void 0 && R.port === void 0 && R.query === void 0 && !R.path ? R.reference = "same-document" : R.scheme === void 0 ? R.reference = "relative" : R.fragment === void 0 ? R.reference = "absolute" : R.reference = "uri", T.reference && T.reference !== "suffix" && T.reference !== R.reference && (R.error = R.error || "URI is not a " + T.reference + " reference.");
      const Y = p(T.scheme || R.scheme);
      if (!T.unicodeSupport && (!Y || !Y.unicodeSupport) && R.host && (T.domainHost || Y && Y.domainHost) && H === !1 && l(R.host))
        try {
          R.host = new URL("http://" + R.host).hostname;
        } catch (K) {
          R.error = R.error || "Host's domain name can not be converted to ASCII: " + K;
        }
      if ((!Y || Y && !Y.skipNormalize) && (x.indexOf("%") !== -1 && (R.scheme !== void 0 && (R.scheme = unescape(R.scheme)), R.host !== void 0 && (R.host = i(unescape(R.host), H))), R.path && (R.path = o(R.path)), R.fragment))
        try {
          R.fragment = encodeURI(decodeURIComponent(R.fragment));
        } catch {
          R.error = R.error || "URI malformed";
        }
      Y && Y.parse && Y.parse(R, T);
    } else
      R.error = R.error || "URI can not be parsed.";
    return { parsed: R, malformedAuthorityOrPort: I };
  }
  function _(x, F) {
    return m(x, F).parsed;
  }
  function c(x, F) {
    return u(x, F).normalized;
  }
  function u(x, F) {
    const { parsed: T, malformedAuthorityOrPort: R } = m(x, F);
    return {
      normalized: R ? x : S(T, F),
      malformedAuthorityOrPort: R
    };
  }
  function v(x, F) {
    if (typeof x == "string") {
      const { normalized: T, malformedAuthorityOrPort: R } = u(x, F);
      return R ? void 0 : T;
    }
    if (typeof x == "object")
      return S(x, F);
  }
  const E = {
    SCHEMES: f,
    normalize: g,
    resolve: $,
    resolveComponent: y,
    equal: k,
    serialize: S,
    parse: _
  };
  return St.exports = E, St.exports.default = E, St.exports.fastUri = E, St.exports;
}
var Eo;
function Va() {
  if (Eo) return It;
  Eo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = qa();
  return e.code = 'require("ajv/dist/runtime/uri").default', It.default = e, It;
}
var xo;
function La() {
  return xo || (xo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Kn();
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
    const r = /* @__PURE__ */ Rr(), o = /* @__PURE__ */ Hn(), s = /* @__PURE__ */ pi(), i = /* @__PURE__ */ Gn(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ Un(), f = /* @__PURE__ */ zn(), p = /* @__PURE__ */ oe(), g = Ia, $ = /* @__PURE__ */ Va(), y = (z, A) => new RegExp(z, A);
    y.code = "new RegExp";
    const k = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    }, b = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, d = 200;
    function m(z) {
      var A, q, M, w, C, D, B, G, Q, Z, P, N, L, U, X, te, ie, ge, ue, pe, fe, Fe, ve, Ee, Te;
      const Ye = z.strict, Jn = (A = z.code) === null || A === void 0 ? void 0 : A.optimize, Wr = Jn === !0 || Jn === void 0 ? 1 : Jn || 0, Jr = (M = (q = z.code) === null || q === void 0 ? void 0 : q.regExp) !== null && M !== void 0 ? M : y, Li = (w = z.uriResolver) !== null && w !== void 0 ? w : $.default;
      return {
        strictSchema: (D = (C = z.strictSchema) !== null && C !== void 0 ? C : Ye) !== null && D !== void 0 ? D : !0,
        strictNumbers: (G = (B = z.strictNumbers) !== null && B !== void 0 ? B : Ye) !== null && G !== void 0 ? G : !0,
        strictTypes: (Z = (Q = z.strictTypes) !== null && Q !== void 0 ? Q : Ye) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (N = (P = z.strictTuples) !== null && P !== void 0 ? P : Ye) !== null && N !== void 0 ? N : "log",
        strictRequired: (U = (L = z.strictRequired) !== null && L !== void 0 ? L : Ye) !== null && U !== void 0 ? U : !1,
        code: z.code ? { ...z.code, optimize: Wr, regExp: Jr } : { optimize: Wr, regExp: Jr },
        loopRequired: (X = z.loopRequired) !== null && X !== void 0 ? X : d,
        loopEnum: (te = z.loopEnum) !== null && te !== void 0 ? te : d,
        meta: (ie = z.meta) !== null && ie !== void 0 ? ie : !0,
        messages: (ge = z.messages) !== null && ge !== void 0 ? ge : !0,
        inlineRefs: (ue = z.inlineRefs) !== null && ue !== void 0 ? ue : !0,
        schemaId: (pe = z.schemaId) !== null && pe !== void 0 ? pe : "$id",
        addUsedSchema: (fe = z.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (Fe = z.validateSchema) !== null && Fe !== void 0 ? Fe : !0,
        validateFormats: (ve = z.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (Ee = z.unicodeRegExp) !== null && Ee !== void 0 ? Ee : !0,
        int32range: (Te = z.int32range) !== null && Te !== void 0 ? Te : !0,
        uriResolver: Li
      };
    }
    class _ {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...m(A) };
        const { es5: q, lines: M } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: S, es5: q, lines: M }), this.logger = R(A.logger);
        const w = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, s.getRules)(), c.call(this, h, A, "NOT SUPPORTED"), c.call(this, b, A, "DEPRECATED", "warn"), this._metaOpts = F.call(this), A.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && x.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), v.call(this), A.validateFormats = w;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: q, schemaId: M } = this.opts;
        let w = g;
        M === "id" && (w = { ...g }, w.id = w.$id, delete w.$id), q && A && this.addMetaSchema(w, w[M], !1);
      }
      defaultMeta() {
        const { meta: A, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof A == "object" ? A[q] || A : void 0;
      }
      validate(A, q) {
        let M;
        if (typeof A == "string") {
          if (M = this.getSchema(A), !M)
            throw new Error(`no schema with key or ref "${A}"`);
        } else
          M = this.compile(A);
        const w = M(q);
        return "$async" in M || (this.errors = M.errors), w;
      }
      compile(A, q) {
        const M = this._addSchema(A, q);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(A, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return w.call(this, A, q);
        async function w(Z, P) {
          await C.call(this, Z.$schema);
          const N = this._addSchema(Z, P);
          return N.validate || D.call(this, N);
        }
        async function C(Z) {
          Z && !this.getSchema(Z) && await w.call(this, { $ref: Z }, !0);
        }
        async function D(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (P) {
            if (!(P instanceof o.default))
              throw P;
            return B.call(this, P), await G.call(this, P.missingSchema), D.call(this, Z);
          }
        }
        function B({ missingSchema: Z, missingRef: P }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${P} cannot be resolved`);
        }
        async function G(Z) {
          const P = await Q.call(this, Z);
          this.refs[Z] || await C.call(this, P.$schema), this.refs[Z] || this.addSchema(P, Z, q);
        }
        async function Q(Z) {
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
      addSchema(A, q, M, w = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const D of A)
            this.addSchema(D, void 0, M, w);
          return this;
        }
        let C;
        if (typeof A == "object") {
          const { schemaId: D } = this.opts;
          if (C = A[D], C !== void 0 && typeof C != "string")
            throw new Error(`schema ${D} must be string`);
        }
        return q = (0, l.normalizeId)(q || C), this._checkUnique(q), this.schemas[q] = this._addSchema(A, M, q, w, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(A, q, M = this.opts.validateSchema) {
        return this.addSchema(A, q, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(A, q) {
        if (typeof A == "boolean")
          return !0;
        let M;
        if (M = A.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const w = this.validate(M, A);
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
      getSchema(A) {
        let q;
        for (; typeof (q = u.call(this, A)) == "string"; )
          A = q;
        if (q === void 0) {
          const { schemaId: M } = this.opts, w = new i.SchemaEnv({ schema: {}, schemaId: M });
          if (q = i.resolveSchema.call(this, w, A), !q)
            return;
          this.refs[A] = q;
        }
        return q.validate || this._compileSchemaEnv(q);
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
            const q = u.call(this, A);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[A], delete this.refs[A], this;
          }
          case "object": {
            const q = A;
            this._cache.delete(q);
            let M = A[this.opts.schemaId];
            return M && (M = (0, l.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(A) {
        for (const q of A)
          this.addKeyword(q);
        return this;
      }
      addKeyword(A, q) {
        let M;
        if (typeof A == "string")
          M = A, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = M);
        else if (typeof A == "object" && q === void 0) {
          if (q = A, M = q.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (H.call(this, M, q), !q)
          return (0, p.eachItem)(M, (C) => ee.call(this, C)), this;
        ae.call(this, q);
        const w = {
          ...q,
          type: (0, f.getJSONTypes)(q.type),
          schemaType: (0, f.getJSONTypes)(q.schemaType)
        };
        return (0, p.eachItem)(M, w.type.length === 0 ? (C) => ee.call(this, C, w) : (C) => w.type.forEach((D) => ee.call(this, C, w, D))), this;
      }
      getKeyword(A) {
        const q = this.RULES.all[A];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(A) {
        const { RULES: q } = this;
        delete q.keywords[A], delete q.all[A];
        for (const M of q.rules) {
          const w = M.rules.findIndex((C) => C.keyword === A);
          w >= 0 && M.rules.splice(w, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[A] = q, this;
      }
      errorsText(A = this.errors, { separator: q = ", ", dataVar: M = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map((w) => `${M}${w.instancePath} ${w.message}`).reduce((w, C) => w + q + C);
      }
      $dataMetaSchema(A, q) {
        const M = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const w of q) {
          const C = w.split("/").slice(1);
          let D = A;
          for (const B of C)
            D = D[B];
          for (const B in M) {
            const G = M[B];
            if (typeof G != "object")
              continue;
            const { $data: Q } = G.definition, Z = D[B];
            Q && Z && (D[B] = K(Z));
          }
        }
        return A;
      }
      _removeAllSchemas(A, q) {
        for (const M in A) {
          const w = A[M];
          (!q || q.test(M)) && (typeof w == "string" ? delete A[M] : w && !w.meta && (this._cache.delete(w.schema), delete A[M]));
        }
      }
      _addSchema(A, q, M, w = this.opts.validateSchema, C = this.opts.addUsedSchema) {
        let D;
        const { schemaId: B } = this.opts;
        if (typeof A == "object")
          D = A[B];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof A != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let G = this._cache.get(A);
        if (G !== void 0)
          return G;
        M = (0, l.normalizeId)(D || M);
        const Q = l.getSchemaRefs.call(this, A, M);
        return G = new i.SchemaEnv({ schema: A, schemaId: B, meta: q, baseId: M, localRefs: Q }), this._cache.set(G.schema, G), C && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = G), w && this.validateSchema(A, !0), G;
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
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, A);
        } finally {
          this.opts = q;
        }
      }
    }
    _.ValidationError = r.default, _.MissingRefError = o.default, e.default = _;
    function c(z, A, q, M = "error") {
      for (const w in z) {
        const C = w;
        C in A && this.logger[M](`${q}: option ${w}. ${z[C]}`);
      }
    }
    function u(z) {
      return z = (0, l.normalizeId)(z), this.schemas[z] || this.refs[z];
    }
    function v() {
      const z = this.opts.schemas;
      if (z)
        if (Array.isArray(z))
          this.addSchema(z);
        else
          for (const A in z)
            this.addSchema(z[A], A);
    }
    function E() {
      for (const z in this.opts.formats) {
        const A = this.opts.formats[z];
        A && this.addFormat(z, A);
      }
    }
    function x(z) {
      if (Array.isArray(z)) {
        this.addVocabulary(z);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const A in z) {
        const q = z[A];
        q.keyword || (q.keyword = A), this.addKeyword(q);
      }
    }
    function F() {
      const z = { ...this.opts };
      for (const A of k)
        delete z[A];
      return z;
    }
    const T = { log() {
    }, warn() {
    }, error() {
    } };
    function R(z) {
      if (z === !1)
        return T;
      if (z === void 0)
        return console;
      if (z.log && z.warn && z.error)
        return z;
      throw new Error("logger must implement log, warn and error methods");
    }
    const I = /^[a-z_$][a-z0-9_$:-]*$/i;
    function H(z, A) {
      const { RULES: q } = this;
      if ((0, p.eachItem)(z, (M) => {
        if (q.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!I.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function ee(z, A, q) {
      var M;
      const w = A?.post;
      if (q && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let D = w ? C.post : C.rules.find(({ type: G }) => G === q);
      if (D || (D = { type: q, rules: [] }, C.rules.push(D)), C.keywords[z] = !0, !A)
        return;
      const B = {
        keyword: z,
        definition: {
          ...A,
          type: (0, f.getJSONTypes)(A.type),
          schemaType: (0, f.getJSONTypes)(A.schemaType)
        }
      };
      A.before ? W.call(this, D, B, A.before) : D.rules.push(B), C.all[z] = B, (M = A.implements) === null || M === void 0 || M.forEach((G) => this.addKeyword(G));
    }
    function W(z, A, q) {
      const M = z.rules.findIndex((w) => w.keyword === q);
      M >= 0 ? z.rules.splice(M, 0, A) : (z.rules.push(A), this.logger.warn(`rule ${q} is not defined`));
    }
    function ae(z) {
      let { metaSchema: A } = z;
      A !== void 0 && (z.$data && this.opts.$data && (A = K(A)), z.validateSchema = this.compile(A, !0));
    }
    const Y = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function K(z) {
      return { anyOf: [z, Y] };
    }
  })(Yn)), Yn;
}
var Dt = {}, qt = {}, Vt = {}, Po;
function Ba() {
  if (Po) return Vt;
  Po = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Vt.default = e, Vt;
}
var Be = {}, Ao;
function Nr() {
  if (Ao) return Be;
  Ao = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.callRef = Be.getValidate = void 0;
  const e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ ne(), r = /* @__PURE__ */ Ne(), o = /* @__PURE__ */ Gn(), s = /* @__PURE__ */ oe(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(f) {
      const { gen: p, schema: g, it: $ } = f, { baseId: y, schemaEnv: k, validateName: S, opts: h, self: b } = $, { root: d } = k;
      if ((g === "#" || g === "#/") && y === d.baseId)
        return _();
      const m = o.resolveRef.call(b, d, y, g);
      if (m === void 0)
        throw new e.default($.opts.uriResolver, y, g);
      if (m instanceof o.SchemaEnv)
        return c(m);
      return u(m);
      function _() {
        if (k === d)
          return l(f, S, k, k.$async);
        const v = p.scopeValue("root", { ref: d });
        return l(f, (0, n._)`${v}.validate`, d, d.$async);
      }
      function c(v) {
        const E = a(f, v);
        l(f, E, v, v.$async);
      }
      function u(v) {
        const E = p.scopeValue("schema", h.code.source === !0 ? { ref: v, code: (0, n.stringify)(v) } : { ref: v }), x = p.name("valid"), F = f.subschema({
          schema: v,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: g
        }, x);
        f.mergeEvaluated(F), f.ok(x);
      }
    }
  };
  function a(f, p) {
    const { gen: g } = f;
    return p.validate ? g.scopeValue("validate", { ref: p.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: p })}.validate`;
  }
  Be.getValidate = a;
  function l(f, p, g, $) {
    const { gen: y, it: k } = f, { allErrors: S, schemaEnv: h, opts: b } = k, d = b.passContext ? r.default.this : n.nil;
    $ ? m() : _();
    function m() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const v = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(f, p, d)}`), u(p), S || y.assign(v, !0);
      }, (E) => {
        y.if((0, n._)`!(${E} instanceof ${k.ValidationError})`, () => y.throw(E)), c(E), S || y.assign(v, !1);
      }), f.ok(v);
    }
    function _() {
      f.result((0, t.callValidateCode)(f, p, d), () => u(p), () => c(p));
    }
    function c(v) {
      const E = (0, n._)`${v}.errors`;
      y.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${E} : ${r.default.vErrors}.concat(${E})`), y.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function u(v) {
      var E;
      if (!k.opts.unevaluated)
        return;
      const x = (E = g?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (k.props !== !0)
        if (x && !x.dynamicProps)
          x.props !== void 0 && (k.props = s.mergeEvaluated.props(y, x.props, k.props));
        else {
          const F = y.var("props", (0, n._)`${v}.evaluated.props`);
          k.props = s.mergeEvaluated.props(y, F, k.props, n.Name);
        }
      if (k.items !== !0)
        if (x && !x.dynamicItems)
          x.items !== void 0 && (k.items = s.mergeEvaluated.items(y, x.items, k.items));
        else {
          const F = y.var("items", (0, n._)`${v}.evaluated.items`);
          k.items = s.mergeEvaluated.items(y, F, k.items, n.Name);
        }
    }
  }
  return Be.callRef = l, Be.default = i, Be;
}
var Ro;
function Ua() {
  if (Ro) return qt;
  Ro = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ba(), t = /* @__PURE__ */ Nr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return qt.default = n, qt;
}
var Lt = {}, Bt = {}, No;
function Ka() {
  if (No) return Bt;
  No = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = e.operators, n = {
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
  return Bt.default = o, Bt;
}
var Ut = {}, Mo;
function Ha() {
  if (Mo) return Ut;
  Mo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
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
      const { gen: o, data: s, schemaCode: i, it: a } = r, l = a.opts.multipleOfPrecision, f = o.let("res"), p = l ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${l}` : (0, e._)`${f} !== parseInt(${f})`;
      r.fail$data((0, e._)`(${i} === 0 || (${f} = ${s}/${i}, ${p}))`);
    }
  };
  return Ut.default = n, Ut;
}
var Kt = {}, Ht = {}, Oo;
function Ga() {
  if (Oo) return Ht;
  Oo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, s;
    for (; o < n; )
      r++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < n && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return r;
  }
  return Ht.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Ht;
}
var Fo;
function Wa() {
  if (Fo) return Kt;
  Fo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ga(), o = {
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
  return Kt.default = o, Kt;
}
var Gt = {}, To;
function Ja() {
  if (To) return Gt;
  To = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ne(), o = {
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
        const { regExp: y } = g.opts.code, k = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, y), S = i.let("valid");
        i.try(() => i.assign(S, (0, n._)`${k}(${p}, ${$}).test(${a})`), () => i.assign(S, !1)), s.fail$data((0, n._)`!${S}`);
      } else {
        const y = (0, e.usePattern)(s, f);
        s.fail$data((0, n._)`!${y}.test(${a})`);
      }
    }
  };
  return Gt.default = o, Gt;
}
var Wt = {}, jo;
function Ya() {
  if (jo) return Wt;
  jo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
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
  return Wt.default = n, Wt;
}
var Jt = {}, zo;
function Xa() {
  if (zo) return Jt;
  zo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), o = {
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
      if (g.allErrors ? k() : S(), $.strictRequired) {
        const d = s.parentSchema.properties, { definedProperties: m } = s.it;
        for (const _ of a)
          if (d?.[_] === void 0 && !m.has(_)) {
            const c = g.schemaEnv.baseId + g.errSchemaPath, u = `required property "${_}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(g, u, g.opts.strictRequired);
          }
      }
      function k() {
        if (y || p)
          s.block$data(t.nil, h);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(s, d);
      }
      function S() {
        const d = i.let("missing");
        if (y || p) {
          const m = i.let("valid", !0);
          s.block$data(m, () => b(d, m)), s.ok(m);
        } else
          i.if((0, e.checkMissingProp)(s, a, d)), (0, e.reportMissingProp)(s, d), i.else();
      }
      function h() {
        i.forOf("prop", l, (d) => {
          s.setParams({ missingProperty: d }), i.if((0, e.noPropertyInData)(i, f, d, $.ownProperties), () => s.error());
        });
      }
      function b(d, m) {
        s.setParams({ missingProperty: d }), i.forOf(d, l, () => {
          i.assign(m, (0, e.propertyInData)(i, f, d, $.ownProperties)), i.if((0, t.not)(m), () => {
            s.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return Jt.default = o, Jt;
}
var Yt = {}, Io;
function Za() {
  if (Io) return Yt;
  Io = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
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
  return Yt.default = n, Yt;
}
var Xt = {}, Zt = {}, Do;
function Mr() {
  if (Do) return Zt;
  Do = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = mi();
  return e.code = 'require("ajv/dist/runtime/equal").default', Zt.default = e, Zt;
}
var qo;
function Qa() {
  if (qo) return Xt;
  qo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Mr(), s = {
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
      const k = a.let("valid"), S = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      i.block$data(k, h, (0, t._)`${$} === false`), i.ok(k);
      function h() {
        const _ = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        i.setParams({ i: _, j: c }), a.assign(k, !0), a.if((0, t._)`${_} > 1`, () => (b() ? d : m)(_, c));
      }
      function b() {
        return S.length > 0 && !S.some((_) => _ === "object" || _ === "array");
      }
      function d(_, c) {
        const u = a.name("item"), v = (0, e.checkDataTypes)(S, u, y.opts.strictNumbers, e.DataType.Wrong), E = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${_}--;`, () => {
          a.let(u, (0, t._)`${l}[${_}]`), a.if(v, (0, t._)`continue`), S.length > 1 && a.if((0, t._)`typeof ${u} == "string"`, (0, t._)`${u} += "_"`), a.if((0, t._)`typeof ${E}[${u}] == "number"`, () => {
            a.assign(c, (0, t._)`${E}[${u}]`), i.error(), a.assign(k, !1).break();
          }).code((0, t._)`${E}[${u}] = ${_}`);
        });
      }
      function m(_, c) {
        const u = (0, n.useFunc)(a, r.default), v = a.name("outer");
        a.label(v).for((0, t._)`;${_}--;`, () => a.for((0, t._)`${c} = ${_}; ${c}--;`, () => a.if((0, t._)`${u}(${l}[${_}], ${l}[${c}])`, () => {
          i.error(), a.assign(k, !1).break(v);
        })));
      }
    }
  };
  return Xt.default = s, Xt;
}
var Qt = {}, Vo;
function ec() {
  if (Vo) return Qt;
  Vo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Mr(), o = {
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
  return Qt.default = o, Qt;
}
var en = {}, Lo;
function tc() {
  if (Lo) return en;
  Lo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Mr(), o = {
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
      const k = () => y ?? (y = (0, t.useFunc)(i, n.default));
      let S;
      if ($ || l)
        S = i.let("valid"), s.block$data(S, h);
      else {
        if (!Array.isArray(f))
          throw new Error("ajv implementation error");
        const d = i.const("vSchema", p);
        S = (0, e.or)(...f.map((m, _) => b(d, _)));
      }
      s.pass(S);
      function h() {
        i.assign(S, !1), i.forOf("v", p, (d) => i.if((0, e._)`${k()}(${a}, ${d})`, () => i.assign(S, !0).break()));
      }
      function b(d, m) {
        const _ = f[m];
        return typeof _ == "object" && _ !== null ? (0, e._)`${k()}(${a}, ${d}[${m}])` : (0, e._)`${a} === ${_}`;
      }
    }
  };
  return en.default = o, en;
}
var Bo;
function nc() {
  if (Bo) return Lt;
  Bo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ka(), t = /* @__PURE__ */ Ha(), n = /* @__PURE__ */ Wa(), r = /* @__PURE__ */ Ja(), o = /* @__PURE__ */ Ya(), s = /* @__PURE__ */ Xa(), i = /* @__PURE__ */ Za(), a = /* @__PURE__ */ Qa(), l = /* @__PURE__ */ ec(), f = /* @__PURE__ */ tc(), p = [
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
  return Lt.default = p, Lt;
}
var tn = {}, st = {}, Uo;
function yi() {
  if (Uo) return st;
  Uo = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
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
      const k = a.var("valid", (0, e._)`${$} <= ${i.length}`);
      a.if((0, e.not)(k), () => y(k)), s.ok(k);
    }
    function y(k) {
      a.forRange("i", i.length, $, (S) => {
        s.subschema({ keyword: p, dataProp: S, dataPropType: t.Type.Num }, k), g.allErrors || a.if((0, e.not)(k), () => a.break());
      });
    }
  }
  return st.validateAdditionalItems = o, st.default = r, st;
}
var nn = {}, it = {}, Ko;
function $i() {
  if (Ko) return it;
  Ko = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.validateTuple = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Me(), r = {
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
    S(f), $.opts.unevaluated && a.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(l, a.length, $.items));
    const y = l.name("valid"), k = l.const("len", (0, e._)`${p}.length`);
    a.forEach((h, b) => {
      (0, t.alwaysValidSchema)($, h) || (l.if((0, e._)`${k} > ${b}`, () => s.subschema({
        keyword: g,
        schemaProp: b,
        dataProp: b
      }, y)), s.ok(y));
    });
    function S(h) {
      const { opts: b, errSchemaPath: d } = $, m = a.length, _ = m === h.minItems && (m === h.maxItems || h[i] === !1);
      if (b.strictTuples && !_) {
        const c = `"${g}" is ${m}-tuple, but minItems or maxItems/${i} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)($, c, b.strictTuples);
      }
    }
  }
  return it.validateTuple = o, it.default = r, it;
}
var Ho;
function rc() {
  if (Ho) return nn;
  Ho = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $i(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return nn.default = t, nn;
}
var rn = {}, Go;
function oc() {
  if (Go) return rn;
  Go = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ yi(), s = {
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
  return rn.default = s, rn;
}
var on = {}, Wo;
function sc() {
  if (Wo) return on;
  Wo = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
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
      const k = s.const("len", (0, e._)`${l}.length`);
      if (o.setParams({ min: p, max: g }), g === void 0 && p === 0) {
        (0, t.checkStrictMode)(f, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && p > g) {
        (0, t.checkStrictMode)(f, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(f, i)) {
        let m = (0, e._)`${k} >= ${p}`;
        g !== void 0 && (m = (0, e._)`${m} && ${k} <= ${g}`), o.pass(m);
        return;
      }
      f.items = !0;
      const S = s.name("valid");
      g === void 0 && p === 1 ? b(S, () => s.if(S, () => s.break())) : p === 0 ? (s.let(S, !0), g !== void 0 && s.if((0, e._)`${l}.length > 0`, h)) : (s.let(S, !1), h()), o.result(S, () => o.reset());
      function h() {
        const m = s.name("_valid"), _ = s.let("count", 0);
        b(m, () => s.if(m, () => d(_)));
      }
      function b(m, _) {
        s.forRange("i", 0, k, (c) => {
          o.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), _();
        });
      }
      function d(m) {
        s.code((0, e._)`${m}++`), g === void 0 ? s.if((0, e._)`${m} >= ${p}`, () => s.assign(S, !0).break()) : (s.if((0, e._)`${m} > ${g}`, () => s.assign(S, !1).break()), p === 1 ? s.assign(S, !0) : s.if((0, e._)`${m} >= ${p}`, () => s.assign(S, !0)));
      }
    }
  };
  return on.default = r, on;
}
var sr = {}, Jo;
function Or() {
  return Jo || (Jo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Me();
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
      for (const k in f) {
        const S = f[k];
        if (S.length === 0)
          continue;
        const h = (0, r.propertyInData)(p, g, k, $.opts.ownProperties);
        l.setParams({
          property: k,
          depsCount: S.length,
          deps: S.join(", ")
        }), $.allErrors ? p.if(h, () => {
          for (const b of S)
            (0, r.checkReportMissingProp)(l, b);
        }) : (p.if((0, t._)`${h} && (${(0, r.checkMissingProp)(l, S, y)})`), (0, r.reportMissingProp)(l, y), p.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(l, f = l.schema) {
      const { gen: p, data: g, keyword: $, it: y } = l, k = p.name("valid");
      for (const S in f)
        (0, n.alwaysValidSchema)(y, f[S]) || (p.if(
          (0, r.propertyInData)(p, g, S, y.opts.ownProperties),
          () => {
            const h = l.subschema({ keyword: $, schemaProp: S }, k);
            l.mergeValidEvaluated(h, k);
          },
          () => p.var(k, !0)
          // TODO var
        ), l.ok(k));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(sr)), sr;
}
var sn = {}, Yo;
function ic() {
  if (Yo) return sn;
  Yo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
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
  return sn.default = r, sn;
}
var an = {}, Xo;
function vi() {
  if (Xo) return an;
  Xo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ oe(), s = {
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
      const { allErrors: y, opts: k } = $;
      if ($.props = !0, k.removeAdditional !== "all" && (0, r.alwaysValidSchema)($, l))
        return;
      const S = (0, e.allSchemaProperties)(f.properties), h = (0, e.allSchemaProperties)(f.patternProperties);
      b(), i.ok((0, t._)`${g} === ${n.default.errors}`);
      function b() {
        a.forIn("key", p, (u) => {
          !S.length && !h.length ? _(u) : a.if(d(u), () => _(u));
        });
      }
      function d(u) {
        let v;
        if (S.length > 8) {
          const E = (0, r.schemaRefOrVal)($, f.properties, "properties");
          v = (0, e.isOwnProperty)(a, E, u);
        } else S.length ? v = (0, t.or)(...S.map((E) => (0, t._)`${u} === ${E}`)) : v = t.nil;
        return h.length && (v = (0, t.or)(v, ...h.map((E) => (0, t._)`${(0, e.usePattern)(i, E)}.test(${u})`))), (0, t.not)(v);
      }
      function m(u) {
        a.code((0, t._)`delete ${p}[${u}]`);
      }
      function _(u) {
        if (k.removeAdditional === "all" || k.removeAdditional && l === !1) {
          m(u);
          return;
        }
        if (l === !1) {
          i.setParams({ additionalProperty: u }), i.error(), y || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)($, l)) {
          const v = a.name("valid");
          k.removeAdditional === "failing" ? (c(u, v, !1), a.if((0, t.not)(v), () => {
            i.reset(), m(u);
          })) : (c(u, v), y || a.if((0, t.not)(v), () => a.break()));
        }
      }
      function c(u, v, E) {
        const x = {
          keyword: "additionalProperties",
          dataProp: u,
          dataPropType: r.Type.Str
        };
        E === !1 && Object.assign(x, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(x, v);
      }
    }
  };
  return an.default = s, an;
}
var cn = {}, Zo;
function ac() {
  if (Zo) return cn;
  Zo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kn(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ vi(), o = {
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
        k(h) ? S(h) : (i.if((0, t.propertyInData)(i, f, h, p.opts.ownProperties)), S(h), p.allErrors || i.else().var(y, !0), i.endIf()), s.it.definedProperties.add(h), s.ok(y);
      function k(h) {
        return p.opts.useDefaults && !p.compositeRule && a[h].default !== void 0;
      }
      function S(h) {
        s.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, y);
      }
    }
  };
  return cn.default = o, cn;
}
var ln = {}, Qo;
function cc() {
  if (Qo) return ln;
  Qo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ oe(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, data: l, parentSchema: f, it: p } = s, { opts: g } = p, $ = (0, e.allSchemaProperties)(a), y = $.filter((_) => (0, n.alwaysValidSchema)(p, a[_]));
      if ($.length === 0 || y.length === $.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const k = g.strictSchema && !g.allowMatchingProperties && f.properties, S = i.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(i, p.props));
      const { props: h } = p;
      b();
      function b() {
        for (const _ of $)
          k && d(_), p.allErrors ? m(_) : (i.var(S, !0), m(_), i.if(S));
      }
      function d(_) {
        for (const c in k)
          new RegExp(_).test(c) && (0, n.checkStrictMode)(p, `property ${c} matches pattern ${_} (use allowMatchingProperties)`);
      }
      function m(_) {
        i.forIn("key", l, (c) => {
          i.if((0, t._)`${(0, e.usePattern)(s, _)}.test(${c})`, () => {
            const u = y.includes(_);
            u || s.subschema({
              keyword: "patternProperties",
              schemaProp: _,
              dataProp: c,
              dataPropType: r.Type.Str
            }, S), p.opts.unevaluated && h !== !0 ? i.assign((0, t._)`${h}[${c}]`, !0) : !u && !p.allErrors && i.if((0, t.not)(S), () => i.break());
          });
        });
      }
    }
  };
  return ln.default = o, ln;
}
var dn = {}, es;
function lc() {
  if (es) return dn;
  es = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
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
  return dn.default = t, dn;
}
var un = {}, ts;
function dc() {
  if (ts) return un;
  ts = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Me()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return un.default = t, un;
}
var fn = {}, ns;
function uc() {
  if (ns) return fn;
  ns = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
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
        f.forEach((k, S) => {
          let h;
          (0, t.alwaysValidSchema)(l, k) ? s.var($, !0) : h = o.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, $), S > 0 && s.if((0, e._)`${$} && ${p}`).assign(p, !1).assign(g, (0, e._)`[${g}, ${S}]`).else(), s.if($, () => {
            s.assign(p, !0), s.assign(g, S), h && o.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return fn.default = r, fn;
}
var pn = {}, rs;
function fc() {
  if (rs) return pn;
  rs = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
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
  return pn.default = t, pn;
}
var hn = {}, os;
function pc() {
  if (os) return hn;
  os = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
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
        const S = i.let("ifClause");
        s.setParams({ ifClause: S }), i.if($, k("then", S), k("else", S));
      } else f ? i.if($, k("then")) : i.if((0, e.not)($), k("else"));
      s.pass(g, () => s.error(!0));
      function y() {
        const S = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        s.mergeEvaluated(S);
      }
      function k(S, h) {
        return () => {
          const b = s.subschema({ keyword: S }, $);
          i.assign(g, $), s.mergeValidEvaluated(b, g), h ? i.assign(h, (0, e._)`${S}`) : s.setParams({ ifClause: S });
        };
      }
    }
  };
  function o(s, i) {
    const a = s.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(s, a);
  }
  return hn.default = r, hn;
}
var mn = {}, ss;
function hc() {
  if (ss) return mn;
  ss = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return mn.default = t, mn;
}
var is;
function mc() {
  if (is) return tn;
  is = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yi(), t = /* @__PURE__ */ rc(), n = /* @__PURE__ */ $i(), r = /* @__PURE__ */ oc(), o = /* @__PURE__ */ sc(), s = /* @__PURE__ */ Or(), i = /* @__PURE__ */ ic(), a = /* @__PURE__ */ vi(), l = /* @__PURE__ */ ac(), f = /* @__PURE__ */ cc(), p = /* @__PURE__ */ lc(), g = /* @__PURE__ */ dc(), $ = /* @__PURE__ */ uc(), y = /* @__PURE__ */ fc(), k = /* @__PURE__ */ pc(), S = /* @__PURE__ */ hc();
  function h(b = !1) {
    const d = [
      // any
      p.default,
      g.default,
      $.default,
      y.default,
      k.default,
      S.default,
      // object
      i.default,
      a.default,
      s.default,
      l.default,
      f.default
    ];
    return b ? d.push(t.default, r.default) : d.push(e.default, n.default), d.push(o.default), d;
  }
  return tn.default = h, tn;
}
var gn = {}, at = {}, as;
function bi() {
  if (as) return at;
  as = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Gn(), r = /* @__PURE__ */ Nr(), o = {
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
  at.dynamicAnchor = s;
  function i(a) {
    const { schemaEnv: l, schema: f, self: p } = a.it, { root: g, baseId: $, localRefs: y, meta: k } = l.root, { schemaId: S } = p.opts, h = new n.SchemaEnv({ schema: f, schemaId: S, root: g, baseId: $, localRefs: y, meta: k });
    return n.compileSchema.call(p, h), (0, r.getValidate)(a, h);
  }
  return at.default = o, at;
}
var ct = {}, cs;
function wi() {
  if (cs) return ct;
  cs = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.dynamicRef = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Nr(), r = {
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
        const k = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(k, $(k, y), $(f.validateName, y));
      } else
        $(f.validateName, y)();
    }
    function $(y, k) {
      return k ? () => a.block(() => {
        (0, n.callRef)(s, y), a.let(k, !0);
      }) : () => (0, n.callRef)(s, y);
    }
  }
  return ct.dynamicRef = o, ct.default = r, ct;
}
var yn = {}, ls;
function gc() {
  if (ls) return yn;
  ls = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bi(), t = /* @__PURE__ */ oe(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return yn.default = n, yn;
}
var $n = {}, ds;
function yc() {
  if (ds) return $n;
  ds = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wi(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return $n.default = t, $n;
}
var us;
function $c() {
  if (us) return gn;
  us = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bi(), t = /* @__PURE__ */ wi(), n = /* @__PURE__ */ gc(), r = /* @__PURE__ */ yc(), o = [e.default, t.default, n.default, r.default];
  return gn.default = o, gn;
}
var vn = {}, bn = {}, fs;
function vc() {
  if (fs) return bn;
  fs = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Or(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return bn.default = t, bn;
}
var wn = {}, ps;
function bc() {
  if (ps) return wn;
  ps = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Or(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return wn.default = t, wn;
}
var _n = {}, hs;
function wc() {
  if (hs) return _n;
  hs = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return _n.default = t, _n;
}
var ms;
function _c() {
  if (ms) return vn;
  ms = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vc(), t = /* @__PURE__ */ bc(), n = /* @__PURE__ */ wc(), r = [e.default, t.default, n.default];
  return vn.default = r, vn;
}
var Sn = {}, kn = {}, gs;
function Sc() {
  if (gs) return kn;
  gs = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ne(), o = {
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
      $ instanceof e.Name ? i.if((0, e._)`${$} !== true`, () => i.forIn("key", l, (h) => i.if(k($, h), () => y(h)))) : $ !== !0 && i.forIn("key", l, (h) => $ === void 0 ? y(h) : i.if(S($, h), () => y(h))), p.props = !0, s.ok((0, e._)`${f} === ${n.default.errors}`);
      function y(h) {
        if (a === !1) {
          s.setParams({ unevaluatedProperty: h }), s.error(), g || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const b = i.name("valid");
          s.subschema({
            keyword: "unevaluatedProperties",
            dataProp: h,
            dataPropType: t.Type.Str
          }, b), g || i.if((0, e.not)(b), () => i.break());
        }
      }
      function k(h, b) {
        return (0, e._)`!${h} || !${h}[${b}]`;
      }
      function S(h, b) {
        const d = [];
        for (const m in h)
          h[m] === !0 && d.push((0, e._)`${b} !== ${m}`);
        return (0, e.and)(...d);
      }
    }
  };
  return kn.default = o, kn;
}
var Cn = {}, ys;
function kc() {
  if (ys) return Cn;
  ys = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
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
        s.forRange("i", y, p, (k) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: k, dataPropType: t.Type.Num }, $), l.allErrors || s.if((0, e.not)($), () => s.break());
        });
      }
    }
  };
  return Cn.default = r, Cn;
}
var $s;
function Cc() {
  if ($s) return Sn;
  $s = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sc(), t = /* @__PURE__ */ kc(), n = [e.default, t.default];
  return Sn.default = n, Sn;
}
var En = {}, xn = {}, vs;
function Ec() {
  if (vs) return xn;
  vs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, o) {
      const { gen: s, data: i, $data: a, schema: l, schemaCode: f, it: p } = r, { opts: g, errSchemaPath: $, schemaEnv: y, self: k } = p;
      if (!g.validateFormats)
        return;
      a ? S() : h();
      function S() {
        const b = s.scopeValue("formats", {
          ref: k.formats,
          code: g.code.formats
        }), d = s.const("fDef", (0, e._)`${b}[${f}]`), m = s.let("fType"), _ = s.let("format");
        s.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => s.assign(m, (0, e._)`${d}.type || "string"`).assign(_, (0, e._)`${d}.validate`), () => s.assign(m, (0, e._)`"string"`).assign(_, d)), r.fail$data((0, e.or)(c(), u()));
        function c() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${f} && !${_}`;
        }
        function u() {
          const v = y.$async ? (0, e._)`(${d}.async ? await ${_}(${i}) : ${_}(${i}))` : (0, e._)`${_}(${i})`, E = (0, e._)`(typeof ${_} == "function" ? ${v} : ${_}.test(${i}))`;
          return (0, e._)`${_} && ${_} !== true && ${m} === ${o} && !${E}`;
        }
      }
      function h() {
        const b = k.formats[l];
        if (!b) {
          c();
          return;
        }
        if (b === !0)
          return;
        const [d, m, _] = u(b);
        d === o && r.pass(v());
        function c() {
          if (g.strictSchema === !1) {
            k.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${l}" ignored in schema at path "${$}"`;
          }
        }
        function u(E) {
          const x = E instanceof RegExp ? (0, e.regexpCode)(E) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(l)}` : void 0, F = s.scopeValue("formats", { key: l, ref: E, code: x });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${F}.validate`] : ["string", E, F];
        }
        function v() {
          if (typeof b == "object" && !(b instanceof RegExp) && b.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${_}(${i})`;
          }
          return typeof m == "function" ? (0, e._)`${_}(${i})` : (0, e._)`${_}.test(${i})`;
        }
      }
    }
  };
  return xn.default = n, xn;
}
var bs;
function xc() {
  if (bs) return En;
  bs = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Ec()).default];
  return En.default = t, En;
}
var Qe = {}, ws;
function Pc() {
  return ws || (ws = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.contentVocabulary = Qe.metadataVocabulary = void 0, Qe.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Qe.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Qe;
}
var _s;
function Ac() {
  if (_s) return Dt;
  _s = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ua(), t = /* @__PURE__ */ nc(), n = /* @__PURE__ */ mc(), r = /* @__PURE__ */ $c(), o = /* @__PURE__ */ _c(), s = /* @__PURE__ */ Cc(), i = /* @__PURE__ */ xc(), a = /* @__PURE__ */ Pc(), l = [
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
  return Dt.default = l, Dt;
}
var Pn = {}, kt = {}, Ss;
function Rc() {
  if (Ss) return kt;
  Ss = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (kt.DiscrError = e = {})), kt;
}
var ks;
function Nc() {
  if (ks) return Pn;
  ks = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Rc(), n = /* @__PURE__ */ Gn(), r = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ oe(), i = {
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
      const k = p.propertyName;
      if (typeof k != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const S = l.let("valid", !1), h = l.const("tag", (0, e._)`${f}${(0, e.getProperty)(k)}`);
      l.if((0, e._)`typeof ${h} == "string"`, () => b(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: k })), a.ok(S);
      function b() {
        const _ = m();
        l.if(!1);
        for (const c in _)
          l.elseIf((0, e._)`${h} === ${c}`), l.assign(S, d(_[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: k }), l.endIf();
      }
      function d(_) {
        const c = l.name("valid"), u = a.subschema({ keyword: "oneOf", schemaProp: _ }, c);
        return a.mergeEvaluated(u, e.Name), c;
      }
      function m() {
        var _;
        const c = {}, u = E(g);
        let v = !0;
        for (let T = 0; T < y.length; T++) {
          let R = y[T];
          if (R?.$ref && !(0, o.schemaHasRulesButRef)(R, $.self.RULES)) {
            const H = R.$ref;
            if (R = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, H), R instanceof n.SchemaEnv && (R = R.schema), R === void 0)
              throw new r.default($.opts.uriResolver, $.baseId, H);
          }
          const I = (_ = R?.properties) === null || _ === void 0 ? void 0 : _[k];
          if (typeof I != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${k}"`);
          v = v && (u || E(R)), x(I, T);
        }
        if (!v)
          throw new Error(`discriminator: "${k}" must be required`);
        return c;
        function E({ required: T }) {
          return Array.isArray(T) && T.includes(k);
        }
        function x(T, R) {
          if (T.const)
            F(T.const, R);
          else if (T.enum)
            for (const I of T.enum)
              F(I, R);
          else
            throw new Error(`discriminator: "properties/${k}" must have "const" or "enum"`);
        }
        function F(T, R) {
          if (typeof T != "string" || T in c)
            throw new Error(`discriminator: "${k}" values must be unique strings`);
          c[T] = R;
        }
      }
    }
  };
  return Pn.default = i, Pn;
}
var An = {};
const Mc = "https://json-schema.org/draft/2020-12/schema", Oc = "https://json-schema.org/draft/2020-12/schema", Fc = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Tc = "meta", jc = "Core and Validation specifications meta-schema", zc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ic = ["object", "boolean"], Dc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", qc = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Vc = {
  $schema: Mc,
  $id: Oc,
  $vocabulary: Fc,
  $dynamicAnchor: Tc,
  title: jc,
  allOf: zc,
  type: Ic,
  $comment: Dc,
  properties: qc
}, Lc = "https://json-schema.org/draft/2020-12/schema", Bc = "https://json-schema.org/draft/2020-12/meta/applicator", Uc = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Kc = "meta", Hc = "Applicator vocabulary meta-schema", Gc = ["object", "boolean"], Wc = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Jc = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Yc = {
  $schema: Lc,
  $id: Bc,
  $vocabulary: Uc,
  $dynamicAnchor: Kc,
  title: Hc,
  type: Gc,
  properties: Wc,
  $defs: Jc
}, Xc = "https://json-schema.org/draft/2020-12/schema", Zc = "https://json-schema.org/draft/2020-12/meta/unevaluated", Qc = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, el = "meta", tl = "Unevaluated applicator vocabulary meta-schema", nl = ["object", "boolean"], rl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ol = {
  $schema: Xc,
  $id: Zc,
  $vocabulary: Qc,
  $dynamicAnchor: el,
  title: tl,
  type: nl,
  properties: rl
}, sl = "https://json-schema.org/draft/2020-12/schema", il = "https://json-schema.org/draft/2020-12/meta/content", al = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, cl = "meta", ll = "Content vocabulary meta-schema", dl = ["object", "boolean"], ul = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, fl = {
  $schema: sl,
  $id: il,
  $vocabulary: al,
  $dynamicAnchor: cl,
  title: ll,
  type: dl,
  properties: ul
}, pl = "https://json-schema.org/draft/2020-12/schema", hl = "https://json-schema.org/draft/2020-12/meta/core", ml = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, gl = "meta", yl = "Core vocabulary meta-schema", $l = ["object", "boolean"], vl = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, bl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, wl = {
  $schema: pl,
  $id: hl,
  $vocabulary: ml,
  $dynamicAnchor: gl,
  title: yl,
  type: $l,
  properties: vl,
  $defs: bl
}, _l = "https://json-schema.org/draft/2020-12/schema", Sl = "https://json-schema.org/draft/2020-12/meta/format-annotation", kl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Cl = "meta", El = "Format vocabulary meta-schema for annotation results", xl = ["object", "boolean"], Pl = { format: { type: "string" } }, Al = {
  $schema: _l,
  $id: Sl,
  $vocabulary: kl,
  $dynamicAnchor: Cl,
  title: El,
  type: xl,
  properties: Pl
}, Rl = "https://json-schema.org/draft/2020-12/schema", Nl = "https://json-schema.org/draft/2020-12/meta/meta-data", Ml = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ol = "meta", Fl = "Meta-data vocabulary meta-schema", Tl = ["object", "boolean"], jl = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, zl = {
  $schema: Rl,
  $id: Nl,
  $vocabulary: Ml,
  $dynamicAnchor: Ol,
  title: Fl,
  type: Tl,
  properties: jl
}, Il = "https://json-schema.org/draft/2020-12/schema", Dl = "https://json-schema.org/draft/2020-12/meta/validation", ql = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Vl = "meta", Ll = "Validation vocabulary meta-schema", Bl = ["object", "boolean"], Ul = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Kl = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Hl = {
  $schema: Il,
  $id: Dl,
  $vocabulary: ql,
  $dynamicAnchor: Vl,
  title: Ll,
  type: Bl,
  properties: Ul,
  $defs: Kl
};
var Cs;
function Gl() {
  if (Cs) return An;
  Cs = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = Vc, t = Yc, n = ol, r = fl, o = wl, s = Al, i = zl, a = Hl, l = ["/properties"];
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
  return An.default = f, An;
}
var Es;
function Wl() {
  return Es || (Es = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ La(), r = /* @__PURE__ */ Ac(), o = /* @__PURE__ */ Nc(), s = /* @__PURE__ */ Gl(), i = "https://json-schema.org/draft/2020-12/schema";
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
        const { $data: y, meta: k } = this.opts;
        k && (s.default.call(this, y), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ Kn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
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
    var p = /* @__PURE__ */ Rr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var g = /* @__PURE__ */ Hn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(Ft, Ft.exports)), Ft.exports;
}
var Jl = /* @__PURE__ */ Wl();
const Yl = /* @__PURE__ */ Ea(Jl), Xl = "https://json-schema.org/draft/2020-12/schema", Zl = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Ql = "gufe-viz payload", ed = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", td = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], nd = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Fr = {
  $schema: Xl,
  $id: Zl,
  title: Ql,
  description: ed,
  oneOf: td,
  $defs: nd
}, Gf = [
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
], Tr = Fr.$id, jr = new Yl({ allErrors: !0, strict: !1 });
jr.addSchema(Fr, Tr);
const xs = jr.getSchema(Tr), _i = Object.entries(Fr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), Wf = _i, zr = /* @__PURE__ */ new Map();
for (const e of _i) {
  const t = jr.getSchema(`${Tr}#/$defs/${e}`);
  t && zr.set(e, t);
}
const $r = { valid: !0, issues: [] };
function vr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function rd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? zr.get(t) : void 0;
  return n ? n(e) ? $r : { valid: !1, issues: vr(n.errors) } : xs(e) ? $r : { valid: !1, issues: vr(xs.errors) };
}
function Jf(e, t) {
  const n = zr.get(e);
  return n ? n(t) ? $r : { valid: !1, issues: vr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function od(e, t = 8) {
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
function Si(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Ir[t]) return sd(t);
  const { valid: n, issues: r } = rd(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: od(r)
  };
}
function sd(e) {
  const t = Object.keys(Ir).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function Yf(e) {
  return Si(e)?.message ?? null;
}
class id extends Ae {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    ea("payload", n, this);
    const r = Si(n);
    if (r)
      return t.appendChild(ad(r, n)), {};
    const o = n.type, s = Ir[o], i = document.createElement(s);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function ad(e, t) {
  const n = j(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(de(e.message));
  const r = (s, i) => j(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};` : `background:${O.panelBg};color:${O.textMuted2};border:1px solid ${O.cardBorder};`),
    s
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = cd(t);
  return o && n.appendChild(r(o, !1)), n;
}
function cd(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ve(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ve(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Re("gufe-view", id);
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
function ki(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let rt = null, lt = null;
function Vr() {
  if (lt) return lt;
  const e = qr("threeDmol");
  return e ? (lt = e.then((t) => rt = t || window.$3Dmol), lt) : (lt = (async () => {
    if (window.$3Dmol) return rt = window.$3Dmol;
    if (await ki(Dr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return rt = window.$3Dmol;
  })(), lt);
}
let dt = null;
function Lr() {
  if (dt) return dt;
  const e = qr("rdkit");
  return e ? (dt = e.then((t) => window.RDKit = t), dt) : (dt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await ki(Dr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), dt);
}
let ar = null;
function Ci() {
  if (!ar) {
    const e = Dr.d3;
    ar = qr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return ar;
}
function Ei(e, t) {
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
    t.hint && !r && (r = !0, dd(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", s), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", s);
    }
  };
}
const ld = 1600;
function dd(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, ld);
}
const ud = { min: 0.25, max: 12 }, fd = 150;
function Ps(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? fd) - t;
}
function pd(e, t = ud) {
  const n = Ps(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const s = () => {
    if (!r) return o;
    const i = Ps(e);
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
const hd = 2e-3;
function xi(e) {
  return Math.exp(-e.deltaY * hd);
}
function Br(e, t, n = {}) {
  const r = pd(t, n.bounds), o = Ei(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (s) => r.zoomBy(xi(s))
  });
  return { ...r, cleanup: o.cleanup };
}
function Ur(e, t = "Reset view") {
  const n = j("button", vt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const cr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, md = [
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
], Xf = "hsv", V = [0, 0, 0], gd = {
  0: V,
  1: V,
  2: V,
  3: V,
  4: V,
  5: V,
  6: V,
  7: V,
  8: V,
  9: V,
  10: V,
  11: V,
  12: V,
  13: V,
  14: V,
  15: V,
  16: V,
  17: V,
  18: V,
  19: V,
  20: V,
  21: V,
  22: V,
  23: V,
  24: V,
  25: V,
  26: V,
  27: V,
  28: V,
  29: V,
  30: V,
  31: V,
  32: V,
  33: V,
  34: V,
  35: V,
  36: V,
  37: V,
  38: V,
  39: V,
  40: V,
  41: V,
  42: V,
  43: V,
  44: V,
  45: V,
  46: V,
  47: V,
  48: V,
  49: V,
  50: V,
  51: V,
  52: V,
  53: V,
  54: V,
  55: V,
  56: V,
  57: V,
  58: V,
  59: V,
  60: V,
  61: V,
  62: V,
  63: V,
  64: V,
  65: V,
  66: V,
  67: V,
  68: V,
  69: V,
  70: V,
  71: V,
  72: V,
  73: V,
  74: V,
  75: V,
  76: V,
  77: V,
  78: V,
  79: V,
  80: V,
  81: V,
  82: V,
  83: V,
  84: V,
  85: V,
  86: V,
  87: V,
  88: V,
  89: V,
  90: V,
  91: V,
  92: V,
  93: V,
  94: V,
  95: V,
  96: V,
  97: V,
  98: V,
  99: V,
  100: V,
  101: V,
  102: V,
  103: V,
  104: V,
  105: V,
  106: V,
  107: V,
  108: V,
  109: V,
  110: V,
  111: V,
  112: V,
  113: V,
  114: V,
  115: V,
  116: V,
  117: V,
  118: V
}, yd = "rdkit", $d = !0, vd = !0, bd = !0, wd = !0, _d = "rdkit", Sd = "filled", kd = 0.42, Cd = 1.5, Ed = !0, xd = "show", Pd = "mono", Ad = 0.51, Rd = 0.74, Nd = 1.6, Md = 1.7, Od = 5, Fd = 0.3, Td = "#d62828", jd = "#d62828", zd = "#015ab5", Id = !1, Dd = "", qd = "#7c3aed", Vd = {
  layout: yd,
  alignPair: $d,
  atomNumbers: vd,
  createdDestroyed: bd,
  modified: wd,
  style: _d,
  circles: Sd,
  circleRadius: kd,
  circleStroke: Cd,
  boundary: Ed,
  hydrogens: xd,
  elementColors: Pd,
  numScale: Ad,
  labelScale: Rd,
  bondWidth: Nd,
  markWidth: Md,
  haloWidth: Od,
  haloOpacity: Fd,
  destroyedColor: Td,
  createdColor: jd,
  modifiedColor: zd,
  stereo: Id,
  customSpec: Dd,
  customColor: qd
}, Ld = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: cr.uniqueAtom,
  createdColor: cr.uniqueAtom,
  modifiedColor: cr.elementChange,
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
}, Bd = ["rdkit", "coordgen", "conformer"], Ud = ["rdkit", "recolor", "halo"], Kd = ["outline", "filled", "off"], Hd = ["show", "dim", "hide"], Gd = ["cpk", "mono"], Wd = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Jd = /^#[0-9a-fA-F]{6}$/;
function Ct(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ue(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Wd[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const ut = (e, t) => typeof e == "boolean" ? e : t, Rn = (e, t) => typeof e == "string" && Jd.test(e) ? e : t;
function Yd(e) {
  const t = e && typeof e == "object" ? e : {}, n = Ld;
  return {
    version: 1,
    layout: Ct(t.layout, Bd, n.layout),
    alignPair: ut(t.alignPair, n.alignPair),
    style: Ct(t.style, Ud, n.style),
    createdDestroyed: ut(t.createdDestroyed, n.createdDestroyed),
    modified: ut(t.modified, n.modified),
    destroyedColor: Rn(t.destroyedColor, n.destroyedColor),
    createdColor: Rn(t.createdColor, n.createdColor),
    modifiedColor: Rn(t.modifiedColor, n.modifiedColor),
    boundary: ut(t.boundary, n.boundary),
    circles: Ct(t.circles, Kd, n.circles),
    circleRadius: Ue(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ue(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Ct(t.hydrogens, Hd, n.hydrogens),
    elementColors: Ct(t.elementColors, Gd, n.elementColors),
    atomNumbers: ut(t.atomNumbers, n.atomNumbers),
    stereo: ut(t.stereo, n.stereo),
    numScale: Ue(t.numScale, "numScale", n.numScale),
    labelScale: Ue(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ue(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ue(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ue(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ue(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Rn(t.customColor, n.customColor)
  };
}
const et = Yd(Vd);
function As(e) {
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
function lr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [s, i] = e.bonds[o], a = t.has(s), l = t.has(i);
    (n ? a || l : a && l) && r.push(o);
  }
  return r;
}
function Rs(e) {
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
function Xd(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Zd(e, t, n) {
  const r = new Set(t.atoms), o = new Set(lr(e, r, !0));
  return {
    deletions: lr(e, r, n),
    changes: lr(e, new Set(t.elements), n).filter((s) => !o.has(s))
  };
}
function Ns(e, t, n, r) {
  const o = Zd(t, n, e.boundary), s = [];
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
let ft = null;
function Qd(e) {
  if (ft !== null) return ft;
  ft = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (ft = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return ft || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), ft;
}
function eu(e, t) {
  return e.style === "rdkit" ? "rdkit" : Qd(t) ? e.style : "rdkit";
}
function tu(e, t, n, r, o, s) {
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
  e.elementColors === "mono" && (i.atomColourPalette = gd), o === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, l = {}, f = {};
  for (const y of n) {
    const k = br(y.color);
    if (o === "rdkit") for (const h of y.bonds) f[h] = k;
    if (o === "recolor" && e.circles === "off") continue;
    const S = o === "recolor" && e.circles === "filled" ? Xd(k, 0.7) : k;
    for (const h of y.atoms)
      a[h] = S, l[h] = e.circleRadius;
  }
  const p = br(e.customColor);
  for (const y of r)
    y < s && (a[y] = p, l[y] = e.circleRadius);
  const g = Object.keys(a).map(Number);
  g.length && (i.atoms = g, i.highlightAtomColors = a, i.highlightAtomRadii = l);
  const $ = Object.keys(f).map(Number);
  return $.length && (i.bonds = $, i.highlightBondColors = f), i;
}
function nu(e, t, n, r) {
  let o = null;
  try {
    return o = e.get_mol(t, JSON.stringify({ removeHs: !1 })), o ? o.get_svg_with_highlights ? o.get_svg_with_highlights(JSON.stringify(r)) || null : o.get_svg(n, n) || null : null;
  } catch (s) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", me(s)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
const ru = "http://www.w3.org/2000/svg";
function Pi(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Kr(e, t, n) {
  const r = [];
  for (const o of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(o.getAttribute("class") || "")) continue;
    const s = o.tagName.toLowerCase();
    (s === "ellipse" || s === "circle" || s === "rect") === n && r.push(o);
  }
  return r;
}
function Ai(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function Ms(e, t, n, r, o, s) {
  for (const i of r)
    for (const a of Pi(e, i)) {
      const l = a.style;
      Ai(a) ? l.fill = o : (l.stroke = o, l.strokeWidth = `${t.markWidth}px`);
    }
  if (s)
    for (const i of n)
      for (const a of Kr(e, i, !1)) a.style.fill = s;
}
function ou(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const s = o.createElementNS(ru, "g");
  s.setAttribute("data-gufe-halo", "1"), s.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of Pi(e, a)) {
      if (Ai(l)) continue;
      const f = l.cloneNode(!0);
      f.removeAttribute("class"), f.style.fill = "none", f.style.stroke = r, f.style.strokeWidth = `${t.haloWidth}px`, f.style.strokeLinecap = "round", f.style.strokeLinejoin = "round", f.style.strokeOpacity = "1", s.appendChild(f);
    }
  if (!s.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(s, i.nextSibling) : i ? e.appendChild(s) : e.insertBefore(s, e.firstChild);
}
function su(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Kr(e, s, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function iu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Kr(e, s, !0)) {
        const a = i.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function au(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const s = o.style;
          n.hydrogens === "hide" ? s.display = "none" : s.opacity = "0.22";
        }
  }
}
function cu(e, t, n, r, o, s) {
  if (s !== "rdkit")
    for (const i of r)
      if (s === "recolor") {
        const a = n.circles === "filled";
        Ms(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? su(e, n, i.atoms, o, i.color) : a && i.edgeOnFill && iu(e, n, i.atoms, o, i.color);
      } else
        ou(e, n, i.bonds, i.color), Ms(e, n, i.atoms, i.bonds, i.color, null);
  au(e, t, n);
}
const Wn = `
`, wr = "$$$$";
function _r(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Wn);
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
    const $ = parseInt(g.substring(0, 3), 10), y = parseInt(g.substring(3, 6), 10), k = parseInt(g.substring(6, 9), 10);
    !isFinite($) || !isFinite(y) || l.push([$ - 1, y - 1, isFinite(k) ? k : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: i };
}
function lu(e) {
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
  return r.push("M  END"), r.join(Wn);
}
const du = (e) => `${lu(e)}${Wn}${wr}`, uu = (e) => e.indexOf(wr) >= 0 ? e : `${e}${Wn}${wr}`;
function Ri(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Ni(e, t, n, r, o) {
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
    return console.warn("[gufe-viz] depictSVG threw -", me(i)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
function Mi(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Os = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], Sr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, pt = (e) => e in Sr, Fs = 400, dr = "position:absolute;inset:0;min-width:0;min-height:0;";
class fu extends Ae {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", s = n.smiles, i = n.total_charge, a = j("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const l = j(
      "div",
      `${dr}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${Rt.canvas2D};`
    );
    a.appendChild(l);
    const f = ai();
    f.wrap.style.cssText = dr, a.appendChild(f.wrap);
    const p = j(
      "div",
      `${dr}overflow:auto;padding:16px 20px;background:${O.panelBg};color:${O.textPrimary};font-size:${J.body};`
    );
    a.appendChild(p);
    const g = r ? Ri(r) : null, $ = [
      ["Name", o || mt, !1],
      ["SMILES", s || mt, !0],
      ["Charge", i == null ? mt : String(i), !1],
      ["Atoms", g ? String(g.atoms) : mt, !1],
      ["Bonds", g ? String(g.bonds) : mt, !1]
    ], y = j("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${se.xl} 20px;align-items:baseline;`);
    p.appendChild(y);
    for (const [T, R, I] of $) {
      y.appendChild(
        j(
          "div",
          `font-size:${J.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${O.textMuted2};`,
          T
        )
      );
      const H = j(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${O.textPrimary}` + (I ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${J.small};` : ""),
        R
      );
      H.title = R, y.appendChild(H);
    }
    const k = li(t), S = j("div", yr, o || "Unnamed molecule");
    k && a.appendChild(S);
    const h = $t(
      "small-molecule.mode",
      "2d",
      Os.map((T) => T.id)
    ), b = gt("small-molecule.spin", !1);
    let d = h.get(), m = b.get(), _ = null, c = null;
    const u = () => {
      try {
        _?.spin(m && pt(d) ? "y" : !1);
      } catch {
      }
    }, v = (T) => {
      d = T, l.style.visibility = d === "2d" ? "visible" : "hidden", f.wrap.style.visibility = pt(d) ? "visible" : "hidden", p.style.visibility = d === "info" ? "visible" : "hidden", S.style.display = d === "info" || !k ? "none" : "block", F.disabled = !pt(d), F.style.opacity = pt(d) ? "1" : "0.5", pt(d) && _ && (_.setStyle({}, Sr[d]), _.resize(), _.render()), u();
    }, E = j("div", ei), x = qn(Os, d, (T) => v(T), h), F = ii(
      "Spin",
      m,
      (T) => {
        m = T, u();
      },
      { title: "Toggle continuous rotation", remember: b }
    );
    return x.insertBefore(F, x.lastElementChild), E.appendChild(x), a.appendChild(E), v(d), !r || !r.trim() ? (l.appendChild(de("No molecule provided")), f.container.appendChild(de("No molecule provided")), {}) : (l.appendChild(de("Loading 2D depiction...")), Lr().then((T) => {
      const R = Ni(T, r, Fs, et.layout);
      R ? Mi(l, R, Fs) : l.replaceChildren(de("Failed to parse molecule", !0));
    }).catch((T) => {
      l.replaceChildren(de(`RDKit failed to load: ${me(T)}`, !0));
    }), f.container.appendChild(de("Loading 3D viewer...")), Vr().then(() => {
      f.container.replaceChildren(), _ = rt.createViewer(f.container, { backgroundColor: Rt.viewer }), _.addModel(uu(r), "sdf"), _.setStyle({}, Sr[pt(d) ? d : "stick"]), _.zoomTo(), _.render(), c = Br(f.container, _), u();
    }).catch((T) => {
      f.container.replaceChildren(de(`3D render failed: ${me(T)}`, !0));
    }), {
      onResize() {
        _ && (_.resize(), _.render());
      },
      cleanup() {
        if (c?.cleanup(), c = null, !!_) {
          try {
            _.spin(!1);
          } catch {
          }
          try {
            _.clear();
          } catch {
          }
          _ = null;
        }
      }
    });
  }
}
Re("gufe-small-molecule", fu);
const Oi = ["HOH", "WAT", "SOL", "TIP3"], Ts = { hetflag: !1 }, pu = { hetflag: !0 }, hu = { resn: Oi }, Ke = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function mu(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, s = 0, i = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const f = l.slice(0, 6);
    if (f === "ENDMDL") break;
    if (f !== "ATOM  " && f !== "HETATM") continue;
    r++, f === "HETATM" && o++;
    const p = l.slice(17, 20).trim(), g = l.slice(21, 22).trim() || "_", $ = l.slice(22, 26).trim(), y = l.slice(26, 27).trim();
    Oi.indexOf(p) !== -1 && s++, t.add(g), n.add(`${g}|${$}${y}|${p}`);
    const k = parseInt($, 10);
    isNaN(k) || (k < i && (i = k), k > a && (a = k));
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
function gu(e) {
  return `${wt(e.chains)} chains · ${wt(e.residues)} residues · ${wt(e.atoms)} atoms · ${wt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${wt(e.waters)} water)` : "");
}
function yu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function js(e, t, n, r) {
  const o = r || (() => {
  }), s = yu(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Ts,
    t.rep === "stick" ? { stick: { radius: Ke.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: Ke.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    pu,
    t.hetero ? {
      stick: { radius: Ke.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ke.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    hu,
    t.waters ? {
      stick: { radius: Ke.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ke.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    o(null), e.render();
    return;
  }
  o(
    n && n.atoms > Ke.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(rt.SurfaceType.VDW, { opacity: Ke.surfaceOpacity, ...s }, Ts)
      ).then(() => {
        o(null), e.render();
      }).catch((i) => o(`Surface failed: ${me(i)}`, "error"));
    } catch (i) {
      o(`Surface failed: ${me(i)}`, "error");
    }
  }, 30);
}
const zs = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Is = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class $u extends Ae {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, o = n.name ?? "", s = n.type !== "ProteinComponentViz", i = $t(
      "protein.representation",
      "cartoon",
      zs.map((E) => E.id)
    ), a = $t(
      "protein.color",
      "chain",
      Is.map((E) => E.id)
    ), l = gt("protein.waters", s), f = gt("protein.hetero", !0), p = gt("protein.spin", !1), g = {
      rep: i.get(),
      color: a.get(),
      waters: l.get(),
      hetero: f.get(),
      spin: p.get()
    };
    let $ = null, y = null, k = null;
    const S = j(
      "div",
      xr.top
    );
    t.appendChild(S), S.appendChild(
      j("span", `font-weight:700;font-size:${J.heading};letter-spacing:.02em;color:${O.titleColor};`, o || "Protein")
    );
    const h = (E) => j("span", `font-size:${J.small};color:${O.textMuted};`, E);
    S.appendChild(h("Style:")), S.appendChild(
      qn(
        zs,
        g.rep,
        (E) => {
          g.rep = E, v();
        },
        i
      )
    ), S.appendChild(h("Color:")), S.appendChild(
      Vn(
        Is,
        g.color,
        (E) => {
          g.color = E, v();
        },
        a
      )
    );
    const b = j("div", "display:flex;gap:4px;");
    S.appendChild(b);
    const d = [
      ["waters", "Waters", "Show water molecules", l, () => v()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", f, () => v()],
      ["spin", "Spin", "Rotate the view continuously", p, () => $?.spin(g.spin ? "y" : !1)]
    ];
    for (const [E, x, F, T, R] of d)
      b.appendChild(
        ii(
          x,
          g[E],
          (I) => {
            g[E] = I, R();
          },
          { title: F, remember: T }
        )
      );
    b.appendChild(Ur(() => y?.reset()));
    const m = j("span", `margin-left:auto;font-size:${J.small};white-space:nowrap;color:${O.textMuted2};`);
    S.appendChild(m);
    const _ = ai();
    t.appendChild(_.wrap);
    const c = j(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${J.body};z-index:20;display:none;pointer-events:none;`
    );
    _.wrap.appendChild(c);
    const u = (E, x) => {
      if (E == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = E, c.style.display = "block";
      const F = x === "error";
      c.style.background = F ? O.warnBg : O.toolbarBg, c.style.color = F ? O.warnFg : O.textMuted, c.style.border = `1px solid ${F ? O.warnBorder : O.toolbarBorder}`;
    };
    function v() {
      $ && js($, g, k, u);
    }
    if (!r || !r.trim())
      return u("No protein data - waiting for a PDB payload."), {};
    try {
      k = mu(r), m.textContent = gu(k);
    } catch (E) {
      u(`⚠ PDB parse error: ${me(E)}`, "error");
    }
    return u("Loading 3D viewer..."), Vr().then(() => {
      $ = rt.createViewer(_.container, { backgroundColor: Rt.viewer }), $.addModel(r, "pdb"), js($, g, k, u), $.zoomTo(), $.spin(g.spin ? "y" : !1), $.render(), y = Br(_.container, $);
    }).catch((E) => {
      u(`⚠ Failed to render structure: ${me(E)}`, "error");
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
Re("gufe-protein", $u);
function Mt(e) {
  const t = /* @__PURE__ */ new Map();
  return kr(e, t, /* @__PURE__ */ new Set()), t;
}
function kr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) kr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const s = o["gufe-key"];
      typeof s == "string" && s && !t.has(s) && t.set(s, o);
    }
  for (const o of Object.values(e)) kr(o, t, n);
}
function We(e, t) {
  return t ? e.get(t) : void 0;
}
function Ce(e, t, n) {
  const r = We(e, t);
  return r?.type === n ? r : void 0;
}
function Hr(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || r.has(o)) continue;
    const s = e.get(o);
    s && (r.add(o), n.push(s));
  }
  return n;
}
function Je(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
const Gr = "Cmd/Ctrl-click to select several.";
function vu(e, t, n, r, o) {
  const s = (i) => o === "keys" ? i["gufe-key"] : Je(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(s).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${s(i.from)}, ${s(i.to)}`).join(`
`);
}
function bu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Ds(e, t)), navigator.clipboard || Ds(e, t);
}
function Ds(e, t) {
  const n = j("textarea", `width:100%;height:80px;font-size:${J.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function wu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = j("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Fi(e) {
  const { words: t } = e, n = $t(e.setting, "names", ["names", "keys"]), r = j("div", "display:flex;flex-direction:column;gap:6px;"), o = j("div", `display:flex;align-items:center;gap:6px;font-size:${J.small};color:${O.textMuted};`);
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
  const i = j("div", `font-size:${J.tiny};line-height:1.5;color:${O.textMuted2};`), a = (p) => {
    i.textContent = p;
  }, l = j("div", "display:flex;gap:4px;"), f = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [p, g, $] of f) {
    const y = j("button", `${vt}flex:1;`, g.button);
    y.title = $, y.onclick = (k) => {
      const S = s.value, h = vu(e.nodes, e.edges, e.selected, p, S);
      if (!h) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : p === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Gr}` : "Nothing to copy."
        );
        return;
      }
      const b = h.split(`
`).length;
      k.shiftKey ? (wu(h, `selected-${g.plural}.txt`), a(`Saved ${b} ${g.plural} to a file.`)) : (bu(h, r), a(
        p === "edges" ? `Copied ${b} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, l.appendChild(y);
  }
  return r.appendChild(l), r.appendChild(i), r.appendChild(j("div", `font-size:${J.tiny};color:${O.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Ti = "http://www.w3.org/2000/svg";
function ce(e, t = {}) {
  const n = document.createElementNS(Ti, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function qs(e, t) {
  const n = document.createElementNS(Ti, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const _u = 3;
function ji(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), s = Math.max(s, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: s + t, maxY: i + n };
}
const Su = { min: 0.15, max: 5 };
function zi(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? Su;
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
    const { width: m, height: _ } = f();
    s = Math.min(1, m / (d.maxX - d.minX + r * 2), _ / (d.maxY - d.minY + r * 2)), i = m / 2 - (d.minX + d.maxX) / 2 * s, a = _ / 2 - (d.minY + d.maxY) / 2 * s, l();
  }, $ = Ei(e, {
    onZoom: (d) => {
      const m = e.getBoundingClientRect(), _ = d.clientX - m.left, c = d.clientY - m.top, u = Math.min(o.max / s, Math.max(o.min / s, xi(d)));
      return i = _ - (_ - i) * u, a = c - (c - a) * u, s *= u, l(), u !== 1;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  });
  let y = null, k = !1;
  const S = (d) => {
    y = { x: d.clientX - i, y: d.clientY - a, from: { x: d.clientX, y: d.clientY } }, k = !1;
  }, h = (d) => {
    y && (Math.hypot(d.clientX - y.from.x, d.clientY - y.from.y) > _u && (k = !0), i = d.clientX - y.x, a = d.clientY - y.y, l());
  }, b = () => {
    y = null;
  };
  return e.addEventListener("pointerdown", S), e.addEventListener("pointermove", h), e.addEventListener("pointerup", b), e.addEventListener("pointercancel", b), e.addEventListener("pointerleave", b), {
    fit: p,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: p,
    centreOn(d, m, _ = 1) {
      const { width: c, height: u } = f();
      s = Math.max(s, _), i = c / 2 - d * s, a = u / 2 - m * s, l();
    },
    transform: () => ({ scale: s, tx: i, ty: a }),
    wasPan: () => k,
    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(d, m, _) {
      s = d, i = m, a = _, l();
    },
    cleanup() {
      $.cleanup(), e.removeEventListener("pointerdown", S), e.removeEventListener("pointermove", h), e.removeEventListener("pointerup", b), e.removeEventListener("pointercancel", b), e.removeEventListener("pointerleave", b);
    }
  };
}
const ku = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Ii(e) {
  const t = { ...e };
  for (const n of ku) delete t[n];
  return t;
}
const Cu = 8, Eu = 64, xu = () => new Promise((e) => setTimeout(e, 0));
function Cr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Pu(e, t, n, r) {
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
    return console.warn("[gufe-viz] SMARTS match threw -", me(s)), null;
  } finally {
    Cr(o);
  }
}
function Au(e, t, n = !0) {
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
      return Cr(g), { status: "unsupported" };
    const $ = /* @__PURE__ */ new Map();
    let y = 0;
    try {
      let k = performance.now(), S = 0;
      for (let h = 0; h < t.length; h++) {
        const b = t[h] ? Pu(p, g, t[h], n) : null;
        if (b ? b.length && $.set(h, b) : y++, !(++S < Eu && performance.now() - k < Cu)) {
          if (await xu(), l !== o) return { status: "superseded" };
          S = 0, k = performance.now();
        }
      }
    } finally {
      Cr(g);
    }
    return r.set(a, $), { status: "ok", matched: $, unreadable: y };
  }, cancel: () => void ++o };
}
function Nn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function Vs(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Ru(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Ls(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const s = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = s[i][0], l = s[i][1], f = t[a * 3 + l];
      if (Math.abs(f) < 1e-14) continue;
      const p = t[a * 3 + a], g = t[l * 3 + l], $ = (g - p) / (2 * f);
      let y;
      Math.abs($) > 1e10 ? y = 1 / (2 * $) : y = ($ >= 0 ? 1 : -1) / (Math.abs($) + Math.sqrt($ * $ + 1));
      const k = 1 / Math.sqrt(1 + y * y), S = y * k;
      t[a * 3 + a] = p - y * f, t[l * 3 + l] = g + y * f, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let h = 0; h < 3; h++)
        if (h !== a && h !== l) {
          const b = t[h * 3 + a], d = t[h * 3 + l];
          t[h * 3 + a] = k * b - S * d, t[a * 3 + h] = t[h * 3 + a], t[h * 3 + l] = S * b + k * d, t[l * 3 + h] = t[h * 3 + l];
        }
      for (let h = 0; h < 3; h++) {
        const b = n[h * 3 + a], d = n[h * 3 + l];
        n[h * 3 + a] = k * b - S * d, n[h * 3 + l] = S * b + k * d;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Nu(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], o = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], o[0] += t[m][0], o[1] += t[m][1], o[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, o[0] /= n, o[1] /= n, o[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - o[0], r[1] - o[1], r[2] - o[2]] };
  const s = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const _ = e[m][0] - r[0], c = e[m][1] - r[1], u = e[m][2] - r[2], v = t[m][0] - o[0], E = t[m][1] - o[1], x = t[m][2] - o[2];
    s[0] += _ * v, s[1] += _ * E, s[2] += _ * x, s[3] += c * v, s[4] += c * E, s[5] += c * x, s[6] += u * v, s[7] += u * E, s[8] += u * x;
  }
  const i = Vs(s), a = Nn(i, s), l = Nn(s, i);
  let f = Ls(a), p = Ls(l);
  function g(m) {
    const _ = [0, 1, 2].sort((u, v) => m.values[v] - m.values[u]), c = new Array(9);
    for (let u = 0; u < 3; u++) {
      const v = _[u];
      c[u] = m.vectors[v], c[3 + u] = m.vectors[3 + v], c[6 + u] = m.vectors[6 + v];
    }
    return {
      values: [m.values[_[0]], m.values[_[1]], m.values[_[2]]],
      vectors: c
    };
  }
  f = g(f), p = g(p);
  const $ = f.vectors, y = p.vectors;
  for (let m = 0; m < 3; m++) {
    const _ = $[m], c = $[3 + m], u = $[6 + m], v = s[0] * _ + s[1] * c + s[2] * u, E = s[3] * _ + s[4] * c + s[5] * u, x = s[6] * _ + s[7] * c + s[8] * u, F = y[m], T = y[3 + m], R = y[6 + m];
    v * F + E * T + x * R < 0 && (y[m] = -F, y[3 + m] = -T, y[6 + m] = -R);
  }
  const k = Vs($);
  let S = Nn(y, k);
  Ru(S) < 0 && (y[2] = -y[2], y[5] = -y[5], y[8] = -y[8], S = Nn(y, k));
  const h = S[0] * o[0] + S[1] * o[1] + S[2] * o[2], b = S[3] * o[0] + S[4] * o[1] + S[5] * o[2], d = S[6] * o[0] + S[7] * o[1] + S[8] * o[2];
  return { R: S, t: [r[0] - h, r[1] - b, r[2] - d] };
}
function Mu(e, t, n) {
  const r = e[0], o = e[1], s = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * s + n[0],
    t[3] * r + t[4] * o + t[5] * s + n[1],
    t[6] * r + t[7] * o + t[8] * s + n[2]
  ];
}
const Bs = `
`, ur = 4;
function Us(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (o) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", me(o)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Ou(e, t, n) {
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
      const m = (p ? -1 : 1) * (r[d][0] - i[0]), _ = r[d][1] - i[1], c = o[d][0] - a[0], u = o[d][1] - a[1];
      g += m * u - _ * c, $ += m * c + _ * u;
    }
    const y = Math.hypot(g, $);
    if (y <= f) continue;
    f = y;
    const k = Math.atan2(g, $), S = Math.cos(k), h = Math.sin(k), b = (p ? -1 : 1) * i[0];
    l = {
      cos: S,
      sin: h,
      mirror: p,
      tx: a[0] - (S * b - h * i[1]),
      ty: a[1] - (h * b + S * i[1])
    };
  }
  return l;
}
function Fu(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Tu(e, t, n) {
  const r = Ri(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(Bs);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let s = 0; s < r.atoms; s++) {
    const i = o[ur + s], a = t[s];
    if (i == null || !a) return e;
    o[ur + s] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = ur + r.atoms + a, f = o[l];
      if (f == null) break;
      const p = parseInt(f.substring(9, 12), 10);
      p !== 1 && p !== 6 || (o[l] = f.substring(0, 9) + String(p === 1 ? 6 : 1).padStart(3) + f.substring(12));
    }
  return o.join(Bs);
}
function ju(e, t, n) {
  try {
    const r = (i) => _r(i).coords.map((a) => [a[0], a[1]]), o = r(t), s = Ou(o, r(e), n);
    return s ? Tu(
      t,
      o.map((i) => Fu(s, i)),
      s.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", me(r)), t;
  }
}
function zu(e, t, n, r, o) {
  const s = Us(e, t, r), i = Us(e, n, r);
  return !o || r === "conformer" ? { left: s, right: i } : { left: s, right: ju(s, i, o) };
}
const Iu = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Du = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function qu() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const fr = qu() ? Iu : Du, Ks = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], pr = 420, De = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, hr = { gap: 2.5, minLiftFraction: 0.6 }, Vu = 24, At = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Hs(e, t, n) {
  const r = [], o = [], s = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? r.push(i) : t[i] !== n[a] ? o.push(i) : s.push(i);
  }
  return { atoms: r, elements: o, mapped: s };
}
function Lu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Di(e, t) {
  const n = Ce(t, e.componentA, "SmallMoleculeComponentViz"), r = Ce(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Hr(t, [e.componentA, e.componentB]) };
}
function Gs(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Bu(e, t) {
  const n = Gs(e), r = Gs(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const s = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[o] - r.min[o] + hr.gap, a = hr.minLiftFraction * s + hr.gap;
  return { axis: o, lift: Math.max(i, a) };
}
function Uu(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let s = 1 / 0;
    for (const i of o)
      i[0] < s && (s = i[0]), i[0] - s > n && (n = i[0] - s);
  }
  const r = Math.round(n * 10) / 10;
  return (r > At.minSpread ? r : At.minSpread) * At.spreadFactor;
}
function Ku(e, t) {
  const n = md, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), s = Math.floor(o), i = Math.min(s + 1, n.length - 1), a = o - s;
  let l = "0x";
  for (let f = 0; f < 3; f++) {
    const p = ($) => parseInt($.slice(1 + f * 2, 3 + f * 2), 16), g = Math.round(p(n[s]) + (p(n[i]) - p(n[s])) * a);
    l += g.toString(16).padStart(2, "0");
  }
  return l;
}
class Hu extends Ae {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Mt(n), o = Ce(r, n.componentA, "SmallMoleculeComponentViz"), s = Ce(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !s)
      return t.appendChild(
        de("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = Je(o), a = Je(s), l = Lu(n);
    let f, p;
    try {
      f = _r(o.sdf, i), p = _r(s.sdf, a);
    } catch (K) {
      return t.appendChild(de(`Could not read a molecule: ${me(K)}`, !0)), {};
    }
    const g = /* @__PURE__ */ new Map();
    for (const [K, z] of l) g.set(z, K);
    const $ = Hs(l, f.symbols, p.symbols), y = Hs(g, p.symbols, f.symbols), k = li(t), S = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(S);
    const h = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    S.appendChild(h);
    const b = $t("atom-mapping.mode", "plain", Ks.map((K) => K.id));
    let d = b.get();
    const m = j(
      "div",
      ei
    );
    m.appendChild(
      qn(
        Ks,
        d,
        (K) => {
          d = K, Y();
        },
        b
      )
    ), S.appendChild(m);
    let _ = [], c = 0, u = !0;
    const v = () => {
      c && cancelAnimationFrame(c), c = 0;
      for (const K of _) {
        K.interaction?.cleanup();
        try {
          K.viewer?.clear();
        } catch {
        }
      }
      _ = [], h.replaceChildren();
    }, E = (K) => {
      const z = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), A = j("div", "flex:1;position:relative;min-height:0;");
      A.dataset.gufeViewer = "", z.appendChild(A), k && z.appendChild(j("div", yr, K)), h.appendChild(z);
      const q = { container: A, viewer: null, interaction: null };
      return _.push(q), q;
    }, x = () => {
      if (_.length < 2) return;
      const K = _.map(() => "");
      let z = !1;
      const A = () => {
        if (u) {
          if (!z)
            for (let q = 0; q < _.length; q++) {
              const M = _[q].viewer;
              if (!M) continue;
              const w = JSON.stringify(M.getView());
              if (w !== K[q]) {
                z = !0;
                for (let C = 0; C < _.length; C++)
                  C !== q && _[C].viewer && (_[C].viewer.setView(M.getView()), _[C].viewer.render()), K[C] = w;
                z = !1;
                break;
              }
            }
          c = requestAnimationFrame(A);
        }
      };
      c = requestAnimationFrame(A);
    }, F = (K, z) => {
      const A = rt.createViewer(K.container, { backgroundColor: Rt.viewer });
      for (const { mol: q } of z) A.addModel(du(q), "sdf");
      return K.viewer = A, A;
    }, T = (K) => {
      K.viewer && (K.interaction = Br(K.container, K.viewer));
    }, R = () => {
      for (const K of [f, p]) {
        const z = E(K.name), A = F(z, [{ mol: K }]);
        A.setStyle(
          {},
          { stick: { radius: De.stick, colorscheme: "Jmol" }, sphere: { scale: De.sphere, colorscheme: "Jmol" } }
        ), A.zoomTo(), A.render(), T(z);
      }
      x();
    }, I = () => {
      const K = et, z = As(K.customSpec), A = [
        { mol: f, uniques: $, side: "left", custom: z.left },
        { mol: p, uniques: y, side: "right", custom: z.right }
      ];
      for (const q of A) {
        const M = E(q.mol.name), w = F(M, [{ mol: q.mol }]);
        w.setStyle(
          {},
          { stick: { radius: De.stick, color: fr.core }, sphere: { scale: De.sphere, color: fr.core } }
        );
        const C = (D, B) => {
          w.addStyle(
            { serial: D + 1 },
            {
              stick: { radius: De.markStick, color: Rs(B) },
              sphere: { scale: De.markSphere, color: Rs(B) }
            }
          );
        };
        for (const D of Ns(K, q.mol, q.uniques, q.side))
          for (const B of D.atoms) C(B, D.color);
        for (const D of q.custom)
          D < q.mol.symbols.length && C(D, K.customColor);
        w.zoomTo(), w.render(), T(M);
      }
      x();
    }, H = () => {
      const K = E(`${i} (left), both overlaid (middle), ${a} (right)`), z = Uu(f.coords, p.coords), A = (Q, Z) => ({
        ...Q,
        coords: Q.coords.map(([P, N, L]) => [P + Z, N, L])
      }), q = A(f, -z), M = A(p, z), w = F(K, [{ mol: q }, { mol: M }, { mol: f }, { mol: p }]);
      w.setStyle({}, { stick: {} });
      const C = Array.from(l);
      C.forEach(([Q, Z], P) => {
        const N = q.coords[Q], L = M.coords[Z];
        if (!N || !L) return;
        const U = Ku(P, C.length);
        for (const [X, te, ie] of [N, L])
          w.addSphere({
            center: { x: X, y: te, z: ie },
            radius: At.sphereRadius,
            color: U,
            alpha: At.sphereAlpha
          });
      }), w.zoomTo();
      const { clientWidth: D, clientHeight: B } = K.container, G = D - 2 * Vu;
      G > 0 && G < B && w.zoom(G / B), w.render(), T(K);
    }, ee = () => {
      const K = E(`${i} to ${a}  (${l.size} mapped pairs)`), z = [], A = [];
      for (const [Q, Z] of l) {
        const P = f.coords[Q], N = p.coords[Z];
        P && N && (z.push(P), A.push(N));
      }
      const q = Nu(z, A), M = p.coords.map((Q) => q ? Mu(Q, q.R, q.t) : [...Q]), { axis: w, lift: C } = Bu(f.coords, M), D = {
        ...p,
        coords: M.map((Q) => {
          const Z = [Q[0], Q[1], Q[2]];
          return Z[w] += C, Z;
        })
      }, B = F(K, [{ mol: f }, { mol: D }]), G = {
        stick: { radius: De.stick, colorscheme: "Jmol" },
        sphere: { scale: De.pairSphere, colorscheme: "Jmol" }
      };
      B.setStyle({ model: 0 }, G), B.setStyle({ model: 1 }, G);
      for (const [Q, Z] of l) {
        const P = f.coords[Q], N = D.coords[Z];
        !P || !N || B.addCylinder({
          start: { x: P[0], y: P[1], z: P[2] },
          end: { x: N[0], y: N[1], z: N[2] },
          radius: De.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: fr.pairLine
        });
      }
      B.zoomTo(), w === 2 ? B.rotate(90, "x") : w === 0 && B.rotate(-90, "z"), B.render(), T(K);
    }, W = () => {
      const K = et, z = As(K.customSpec), q = [
        { mol: f, uniques: $, side: "left", custom: z.left },
        { mol: p, uniques: y, side: "right", custom: z.right }
      ].map((M) => {
        const w = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), C = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${Rt.canvas2D};`
        );
        return C.appendChild(de("Loading 2D depiction...")), w.appendChild(C), k && w.appendChild(j("div", yr, M.mol.name)), h.appendChild(w), { box: C, side: M };
      });
      Lr().then((M) => {
        const w = eu(K, M), C = zu(M, o.sdf, s.sdf, K.layout, K.alignPair ? l : null);
        for (const { box: D, side: B } of q) {
          const G = Ns(K, B.mol, B.uniques, B.side), Q = tu(
            K,
            pr,
            G,
            B.custom,
            w,
            B.mol.symbols.length
          ), Z = nu(M, B.side === "left" ? C.left : C.right, pr, Q);
          if (D.replaceChildren(), !Z) {
            D.appendChild(de("Failed to parse molecule", !0));
            continue;
          }
          Mi(D, Z, pr);
          const P = D.querySelector("svg");
          P && cu(P, B.mol, K, G, B.custom, w);
        }
      }).catch((M) => {
        for (const { box: w } of q)
          w.replaceChildren(de(`RDKit failed to load: ${me(M)}`, !0));
      });
    }, ae = () => {
      const K = j("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      h.appendChild(K);
      const z = j("div", "display:flex;flex-direction:column;gap:2px;");
      z.appendChild(
        j(
          "div",
          `font-size:${J.title};font-weight:${Le.bold};color:${Oe.title};`,
          n.name || `${i} to ${a}`
        )
      ), z.appendChild(j("div", `font-size:${J.body};color:${Oe.faint};`, "LigandAtomMapping")), K.appendChild(z);
      const A = j("div", `display:flex;flex-wrap:wrap;gap:${se.lg} 16px;font-size:${J.small};`);
      A.appendChild($e("mapped atoms", String(l.size))), A.appendChild(
        $e("element changes", String($.elements.length), et.modifiedColor)
      ), A.appendChild($e(`unique to ${i}`, String($.atoms.length), et.destroyedColor)), A.appendChild($e(`unique to ${a}`, String(y.atoms.length), et.createdColor)), A.appendChild($e(`atoms in ${i}`, String(f.symbols.length))), A.appendChild($e(`atoms in ${a}`, String(p.symbols.length))), A.appendChild($e("score", n.score == null ? mt : n.score.toFixed(3))), K.appendChild(A);
      const q = j("div", Zr, "Correspondence");
      K.appendChild(q);
      const M = j("div", Xr);
      M.textContent = l.size ? Array.from(l, ([C, D]) => `${C} -> ${D}`).join("   ") : "This mapping relates no atoms at all.", K.appendChild(M);
      const w = Object.entries(n.annotations ?? {}).filter(([C]) => C !== "score");
      if (w.length) {
        K.appendChild(j("div", Zr, "Annotations"));
        const C = j("div", `${Xr}color:${Oe.faint};`);
        for (const [D, B] of w)
          C.appendChild(j("div", "", `${D}: ${String(B)}`));
        K.appendChild(C);
      }
      K.appendChild(
        j(
          "div",
          `${Gi}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, Y = () => {
      if (v(), d === "info") {
        ae();
        return;
      }
      if (d === "2d") {
        W();
        return;
      }
      h.appendChild(de("Loading 3D viewer...")), Vr().then(() => {
        u && (h.replaceChildren(), d === "colored" ? I() : d === "openfe" ? H() : d === "lines" ? ee() : R());
      }).catch((K) => {
        h.replaceChildren(de(`3D render failed: ${me(K)}`, !0));
      });
    };
    return Y(), {
      onResize() {
        for (const K of _)
          K.viewer && (K.viewer.resize(), K.viewer.render());
      },
      cleanup() {
        u = !1, v();
      }
    };
  }
}
Re("gufe-atom-mapping", Hu);
const Ws = ["Force-directed", "Circular", "Radial"], Gu = "ligand-network", Wu = "Click a ligand or an edge to see it.";
function Ju(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function Yu(e) {
  return Ii(e);
}
const Js = (e) => Math.round(e * 100) / 100;
function Xu(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (i) => typeof i == "number" && Number.isFinite(i);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((i) => Array.isArray(i) && i.length === 2 && i.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, s = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: s };
}
function Zu(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Et = { initial: 0.58, min: 0.25, max: 0.8 }, He = 38, Mn = 200, qi = 4, Qu = 14, ef = 18, Pe = {
  fontSize: 11,
  below: He - qi + 12,
  minFontSize: 7,
  insideWidth: (He - 6) * 2
}, Ys = 1.5, tf = 6.5, nf = 0.9, rf = 14, mr = { size: 8, clearance: 8 }, of = { fontSize: 10 }, Vi = { debounceMs: 250, atomRadius: 0.4 }, sf = br(O.netMatchAtom), xt = { padding: 4, opacity: 0.95 }, af = 3, yt = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], cf = (e) => yt.find((t) => e >= t.from) ?? yt[yt.length - 1], lf = (e) => yt[Math.min(yt.indexOf(e) + 1, yt.length - 1)], On = 200, df = 24, gr = { node: 0.12, edge: 0.06 }, uf = 1.8, _e = {
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
function ff(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${J.small};line-height:1.5;max-width:260px;background:${O.tooltipBg};border:1px solid ${O.tooltipBorder};color:${O.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function pf(e) {
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
      refX: He + mr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: mr.size,
      markerHeight: mr.size,
      orient: "auto"
    });
    return s.appendChild(ce("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(s), o;
  };
}
function hf(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function mf(e) {
  const [t, n] = O.netEdgeRamp.map(hf), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((s, i) => Math.round(s + (n[i] - s) * r)).join(",")})`;
}
const qe = Je, gf = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function yf(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (g) => (e.matched().get(g) ?? []).join(","), s = (g, $) => {
    if (t.has($) || n.has($)) return;
    const y = e.nodes[$], k = e.matched().get($), S = y.sdf && Ni(
      g,
      y.sdf,
      Mn,
      et.layout,
      k && { atoms: k, color: sf, radius: Vi.atomRadius }
    );
    if (!S) {
      n.add($);
      return;
    }
    const h = new DOMParser().parseFromString(S, "image/svg+xml").documentElement;
    if (!h || h.nodeName.toLowerCase() === "parsererror") {
      n.add($);
      return;
    }
    const b = (He - qi) * 2 / Mn, d = e.depictionGroups[$];
    d.setAttribute(
      "transform",
      `translate(${-b * Mn / 2},${-b * Mn / 2}) scale(${b})`
    );
    let m = 0;
    for (const _ of Array.from(h.childNodes)) {
      if (_.nodeType !== 1) continue;
      const c = _.nodeName.toLowerCase();
      if (!(c === "defs" || c === "metadata" || c === "title")) {
        if (c === "rect") {
          const u = (_.getAttribute("fill") ?? "").toLowerCase();
          if (u === "#ffffff" || u === "white" || u === "rgb(255,255,255)") continue;
        }
        d.appendChild(document.importNode(_, !0)), m++;
      }
    }
    m ? (t.add($), r[$] = o($)) : n.add($);
  }, i = () => {
    for (const g of [...t])
      r[g] !== o(g) && (e.depictionGroups[g].replaceChildren(), t.delete(g));
  }, a = [], l = (g, $) => {
    if (a[g]) return a[g];
    $.setAttribute("font-size", String(Pe.fontSize));
    let y = 0;
    try {
      y = $.getBBox().width;
    } catch {
      return Pe.fontSize;
    }
    if (!y) return Pe.fontSize;
    const k = Pe.fontSize * Pe.insideWidth / y;
    return a[g] = Math.max(Pe.minFontSize, Math.min(Pe.fontSize, k)), a[g];
  }, f = (g, $) => {
    const y = $.structure && !t.has(g) ? lf($) : $;
    e.depictionGroups[g].setAttribute("display", y.structure ? "inline" : "none");
    const k = e.matched().has(g), S = e.circles[g];
    S.setAttribute("fill", y.disc ? k ? O.netMatchFill : O.netNodeFill : "none"), S.setAttribute("stroke", y.disc ? k ? O.netMatchStroke : O.netNodeStroke : "none"), e.initials[g].setAttribute("display", y.initials ? "inline" : "none");
    const h = e.captions[g];
    if (h.setAttribute("fill", k ? O.netMatchStroke : O.netNodeCaption), h.setAttribute("display", y.name === "none" ? "none" : "inline"), y.name === "none") return;
    const b = y.name === "inside";
    h.setAttribute("y", b ? "0" : String(Pe.below)), h.setAttribute("dominant-baseline", b ? "middle" : "auto"), h.setAttribute("font-size", String(b ? l(g, h) : Pe.fontSize));
  };
  return { apply: (g, $, y) => {
    const k = cf(g);
    e.stage.setAttribute("data-detail", k.id), e.edgeLabels.setAttribute("display", k.edgeScores ? "inline" : "none");
    for (let d = 0; d < e.nodes.length; d++) f(d, k);
    if (!k.structure) return;
    const { width: S, height: h } = e.viewport(), b = [];
    e.nodes.forEach((d, m) => {
      if (t.has(m) || n.has(m)) return;
      const _ = d.x * g + $, c = d.y * g + y;
      _ < -On || c < -On || _ > S + On || c > h + On || b.push(m);
    }), b.length && e.rdkit().then((d) => {
      if (d)
        for (const m of b)
          s(d, m), f(m, k);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: i };
}
function $f(e) {
  const t = Fn("ligand-network.query"), n = Fn("ligand-network.smarts"), r = Pr("ligand-network.minScore", 0, 0, 1), o = j(
    "div",
    `display:flex;flex-direction:column;gap:8px;flex:1;min-width:236px;max-width:340px;box-sizing:border-box;padding:10px;min-height:0;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`
  ), s = j("input", `${Tn}width:100%;box-sizing:border-box;`);
  s.type = "search", s.placeholder = "Search ligands", s.value = t.get(), e.query.text = s.value, s.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), o.appendChild(s);
  const i = j("input", `${Tn}width:100%;box-sizing:border-box;`);
  i.type = "text", i.placeholder = "Colour by SMARTS", i.value = n.get(), i.spellcheck = !1, i.setAttribute("aria-label", "Colour the ligands matching this SMARTS pattern"), o.appendChild(i);
  const a = j(
    "div",
    // One line held open whether or not there is anything to say, so this reads
    // as a line that changes rather than as the ligand list twitching up and
    // down under it every time a pattern is typed, matched or refused. Every
    // message fits one line at this panel width; a longer one would want the
    // wording shortened rather than the space here grown.
    `font-size:${J.tiny};line-height:1.5;min-height:1.5em;color:${O.textMuted2};`
  );
  o.appendChild(a);
  const l = (_) => {
    switch (_.status) {
      case "ok": {
        const c = _.unreadable ? `, ${_.unreadable} could not be read` : "";
        return `${_.matched.size} of ${e.nodes.length} ligands match${c}`;
      }
      case "invalid":
        return "RDKit does not accept that as a SMARTS pattern.";
      case "unsupported":
        return "This RDKit build cannot match SMARTS.";
      default:
        return "";
    }
  }, f = (_) => {
    a.textContent = _.trim() ? "Matching..." : "", e.match(_).then(
      (c) => {
        c.status !== "superseded" && (a.textContent = l(c));
      },
      () => {
        a.textContent = "Matching failed.";
      }
    );
  };
  let p = 0;
  i.oninput = () => {
    n.set(i.value), window.clearTimeout(p), p = window.setTimeout(() => f(i.value), Vi.debounceMs);
  };
  const g = j("div", `display:flex;align-items:center;gap:8px;font-size:${J.small};color:${O.textMuted};`), $ = j("span", `min-width:28px;color:${O.textPrimary};`, "0.00"), y = j("input", "flex:1;");
  y.type = "range", y.min = "0", y.max = "1", y.step = "0.01", y.value = String(r.get()), e.filter.minScore = Number(y.value), y.setAttribute("aria-label", "Hide mappings scoring below this"), g.appendChild(j("span", "", "score >=")), g.appendChild(y), g.appendChild($), o.appendChild(g);
  const k = j("div", `font-size:${J.small};color:${O.textMuted2};`);
  o.appendChild(k);
  const S = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  o.appendChild(S), o.appendChild(j("div", `font-size:${J.tiny};line-height:1.5;color:${O.textMuted2};`, Gr));
  const h = Fi({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" }
    },
    setting: "ligand-network.exportAs"
  });
  o.appendChild(h.box);
  const b = j("button", `${vt}width:100%;`, "Clear selection");
  b.onclick = () => {
    e.selected.clear(), m(), e.refresh();
  }, o.appendChild(b);
  const d = (_) => {
    const c = e.query.text.trim().toLowerCase();
    return c ? qe(_).toLowerCase().includes(c) || (_.smiles ?? "").toLowerCase().includes(c) || _["gufe-key"].toLowerCase().includes(c) : !0;
  }, m = () => {
    h.clearNote(), S.replaceChildren();
    const _ = e.nodes.map((c, u) => ({ node: c, index: u })).filter(({ node: c }) => d(c));
    k.textContent = `${_.length} of ${e.nodes.length} ligands`;
    for (const { node: c, index: u } of _) {
      const v = c["gufe-key"], E = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${J.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(v) ? O.cardBorderActive : O.cardBorder};background:${e.selected.has(v) ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), x = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", qe(c));
      x.title = `${qe(c)}
${c.smiles ?? ""}`, E.appendChild(x), E.onclick = (F) => {
        F.shiftKey || F.metaKey || F.ctrlKey ? e.selected.has(v) ? e.selected.delete(v) : e.selected.add(v) : (e.selected.clear(), e.selected.add(v), e.focus(u)), m(), e.refresh();
      }, S.appendChild(E);
    }
    _.length || S.appendChild(j("div", `font-size:${J.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return s.oninput = () => {
    e.query.text = s.value, t.set(s.value), m(), e.refresh();
  }, y.oninput = () => {
    e.filter.minScore = Number(y.value), $.textContent = e.filter.minScore.toFixed(2), r.set(e.filter.minScore), e.refresh();
  }, m(), i.value.trim() && f(i.value), o;
}
class vf extends Ae {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Mt(n), o = [];
    let s = 0;
    for (const P of n.nodes ?? []) {
      const N = Ce(r, P, "SmallMoleculeComponentViz");
      if (!N) {
        s++;
        continue;
      }
      o.push({ ...N, x: 0, y: 0 });
    }
    const i = new Map(o.map((P) => [P["gufe-key"], P])), a = [];
    let l = 0;
    for (const P of n.edges ?? []) {
      const N = i.get(P.componentA), L = i.get(P.componentB);
      if (!N || !L) {
        l++;
        continue;
      }
      a.push({ ...P, index: a.length, from: N, to: L });
    }
    const f = bt(n.name || "Ligand network");
    f.statsEl.appendChild($e("ligands", String(o.length))), f.statsEl.appendChild($e("mappings", String(a.length))), t.appendChild(f);
    const p = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(p);
    const g = /* @__PURE__ */ new Set(), $ = { minScore: 0 }, y = { text: "" };
    let k = () => {
    }, S = null;
    const h = () => S ??= Lr().catch((P) => (console.warn("[gufe-viz] RDKit failed to load:", me(P)), null)), b = Au(
      h,
      o.map((P) => P.sdf ?? "")
    );
    let d = /* @__PURE__ */ new Map(), m = () => {
    };
    const _ = async (P) => {
      const N = await b.run(P);
      return N.status === "superseded" || (d = N.status === "ok" ? N.matched : /* @__PURE__ */ new Map(), m()), N;
    }, c = fi(
      f,
      () => $f({
        nodes: o,
        edges: a,
        selected: g,
        filter: $,
        query: y,
        refresh: () => k(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (P) => {
          ee(P), Q({ kind: "ligand", index: P });
        },
        match: (P) => _(P)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => Z(),
        remember: gt("ligand-network.menuOpen", !1)
      }
    );
    c.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", p.appendChild(c.panel);
    let u = () => {
    };
    const v = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), E = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.appBg};`);
    p.appendChild(v), p.appendChild(
      di(p, v, E, {
        min: Et.min,
        max: Et.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Pr("ligand-network.canvasShare", Et.initial, Et.min, Et.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => u()
      })
    ), p.appendChild(E);
    const x = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${O.netCanvasBg};`);
    v.appendChild(x);
    const F = $t("ligand-network.layout", "Force-directed", Ws), T = this.#t(
      (P) => Z(P),
      () => D(),
      F
    );
    v.appendChild(T.bar);
    const R = this.#e(E, r);
    if (!o.length)
      return x.appendChild(
        de(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), R.message("Nothing to show."), {};
    s && nt(
      x,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && nt(x, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const I = h(), H = ff(x);
    let ee = () => {
    };
    const W = Xu(ta(Gu), o.length);
    let ae = W && { scale: W.scale, tx: W.tx, ty: W.ty }, Y = a.length ? { kind: "edge", index: 0 } : null;
    if (W && W.selected >= 0) {
      const P = W.selectedKind ?? "edge";
      W.selected < (P === "ligand" ? o.length : a.length) && (Y = { kind: P, index: W.selected });
    }
    let K = () => ({ scale: 1, tx: 0, ty: 0 }), z = !1, A = null, q = F.get(), M = !1, w = !0, C = () => {
    }, D = () => {
    }, B = 0;
    const G = () => {
      if (!Y) {
        R.message(a.length ? Wu : "Click a ligand to see it.");
        return;
      }
      Y.kind === "edge" ? R.showMapping(a[Y.index]) : R.showLigand(o[Y.index]);
    }, Q = (P) => {
      Y = P, G(), C();
    }, Z = (P = q) => {
      const N = z && P === q ? K() : null, L = ++B;
      q = P, A?.(), A = null, x.querySelectorAll("svg").forEach((ie) => ie.remove());
      const U = x.clientWidth || 800, X = x.clientHeight || 600;
      bf(o, U, X, q, a), W && Zu(o, W.nodes);
      const te = () => {
        if (!w || L !== B) return;
        const ie = this.#n(x, o, a, U, X, Q, I, H);
        C = () => ie.setSelected(Y), D = ie.reset, A = ie.cleanup, ee = (ue) => ie.focusOn(ue), K = ie.transform, k = () => {
          const ue = y.text.trim().toLowerCase(), pe = g.size > 0 || ue.length > 0, fe = /* @__PURE__ */ new Set();
          for (const Ee of o) {
            const Te = Ee["gufe-key"], Ye = g.has(Te) || ue.length > 0 && (qe(Ee).toLowerCase().includes(ue) || (Ee.smiles ?? "").toLowerCase().includes(ue) || Te.toLowerCase().includes(ue));
            (!pe || Ye) && fe.add(Te);
          }
          const Fe = /* @__PURE__ */ new Set();
          a.forEach((Ee, Te) => {
            (Ee.score ?? 0) < $.minScore || !fe.has(Ee.from["gufe-key"]) || !fe.has(Ee.to["gufe-key"]) || Fe.add(Te);
          });
          const ve = pe || $.minScore > 0;
          ie.setEmphasis(ve ? fe : null, ve ? Fe : null);
        }, m = () => ie.setMatches(d), C(), k(), m();
        const ge = ae ?? N;
        ge ? (ie.setTransform(ge.scale, ge.tx, ge.ty), ae = null) : ie.fit(), z = !0;
      };
      if (q !== "Force-directed" || M || W) {
        te();
        return;
      }
      wf(o, a, U, X).then((ie) => {
        if (!(!w || L !== B)) {
          if (ie) {
            te();
            return;
          }
          M = !0, T.picker.value = "Circular", nt(x, "d3 could not be loaded - showing the circular layout instead"), Z("Circular");
        }
      }, te);
    };
    return u = () => Z(), Z(), G(), {
      onResize: () => Z(),
      cleanup: () => {
        w = !1, b.cancel(), H.remove(), A?.();
      },
      viewState: () => ({
        nodes: o.map((P) => [Js(P.x), Js(P.y)]),
        ...K(),
        selected: Y ? Y.index : -1,
        selectedKind: Y ? Y.kind : "edge"
      })
    };
  }
  #t(t, n, r) {
    const o = j(
      "div",
      xr.bottom
    ), s = j("div", `display:flex;align-items:center;gap:6px;font-size:${J.small};color:${O.textMuted};`);
    s.appendChild(j("span", "", "score")), s.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${O.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(j("span", "", "0 -> 1")), o.appendChild(s), o.appendChild(j("label", `font-size:${J.body};margin-left:auto;color:${O.textMuted};`, "Layout"));
    const i = Vn(
      Ws.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return o.appendChild(i), o.appendChild(Ur(n, "Reset pan and zoom")), { bar: o, picker: i };
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
    const o = (i) => r.replaceChildren(de(i)), s = (i, a) => {
      const l = document.createElement(i);
      l.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", l.payload = a, r.replaceChildren(l);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (i) => s("gufe-atom-mapping", Di(Ju(i), n)),
      showLigand: (i) => s("gufe-small-molecule", Yu(i)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, n, r, o, s, i, a, l) {
    const f = ce("svg", {
      class: "gufe-graph",
      width: o,
      height: s,
      style: "display:block;touch-action:none;"
    }), p = ce("g");
    f.appendChild(p), t.appendChild(f);
    const g = ce("defs"), $ = pf(g);
    f.appendChild(g);
    const y = [], k = ce("g"), S = ce("g"), h = ce("g", { "pointer-events": "none" }), b = ce("g");
    p.append(k, S, h, b);
    for (const R of r) {
      const I = mf(R.score), H = Ys + (R.score ?? 0.5) * (tf - Ys), ee = ce("line", {
        stroke: O.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": H + xt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), W = ce("line", {
        stroke: I,
        "stroke-width": H,
        "stroke-opacity": nf,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${$(I)})`,
        "pointer-events": "none"
      }), ae = ce("line", { stroke: "transparent", "stroke-width": rf, style: "cursor:pointer;" });
      ae.addEventListener("click", (z) => {
        z.stopPropagation(), i({ kind: "edge", index: R.index });
      }), ae.addEventListener("mousemove", (z) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Ve(qe(R.from))} -&gt; ${Ve(qe(R.to))}</div>` + (R.score == null ? `<div style="color:${O.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${R.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${J.tiny};color:${O.textMuted2};">Click to see the mapping</div>`,
          z.offsetX,
          z.offsetY
        );
      }), ae.addEventListener("mouseleave", () => l.hide()), y.push(ee), k.append(ee, W), S.appendChild(ae);
      const Y = ce("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": of.fontSize,
        "font-weight": 600,
        fill: O.netEdgeLabel
      });
      Y.textContent = R.score == null ? "" : R.score.toFixed(2);
      const K = ce("g", { class: "gufe-edge-label" });
      K.appendChild(Y), h.appendChild(K);
    }
    const d = [], m = [], _ = [], c = [], u = [], v = n.map((R) => {
      const I = ce("g", { class: "gufe-node", style: "cursor:grab;" });
      I.addEventListener("mousemove", (K) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Ve(qe(R))}</div>` + (R.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ve(R.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${J.tiny};color:${O.textMuted2};overflow-wrap:anywhere;">${Ve(R["gufe-key"])}</div><div style="margin-top:4px;font-size:${J.tiny};color:${O.textMuted2};">Click to see the ligand</div>`,
          K.offsetX,
          K.offsetY
        );
      }), I.addEventListener("mouseleave", () => l.hide());
      const H = ce("circle", {
        class: "gufe-node-halo",
        r: He + xt.padding,
        fill: "none",
        stroke: O.netHaloColor,
        "stroke-width": xt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      I.appendChild(H), _.push(H);
      const ee = ce("circle", {
        class: "gufe-node-disc",
        r: He,
        fill: O.netNodeFill,
        stroke: O.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      I.appendChild(ee), m.push(ee);
      const W = ce("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      I.appendChild(W), d.push(W);
      const ae = ce("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": ef,
        "font-weight": 700,
        fill: O.netInitials,
        "pointer-events": "none"
      });
      ae.textContent = qe(R).slice(0, 2).toUpperCase(), I.appendChild(ae), c.push(ae);
      const Y = ce("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Pe.below,
        "font-size": Pe.fontSize,
        "font-weight": 600,
        fill: O.netNodeCaption,
        "pointer-events": "none"
      });
      return Y.textContent = gf(qe(R), Qu), Y.setAttribute("display", "none"), u.push(Y), I.appendChild(Y), b.appendChild(I), I;
    }), E = () => {
      r.forEach((R, I) => {
        for (const ee of [y[I], k.children[I * 2 + 1], S.children[I]]) {
          const W = ee;
          W.setAttribute("x1", String(R.from.x)), W.setAttribute("y1", String(R.from.y)), W.setAttribute("x2", String(R.to.x)), W.setAttribute("y2", String(R.to.y));
        }
        h.children[I].setAttribute(
          "transform",
          `translate(${(R.from.x + R.to.x) / 2},${(R.from.y + R.to.y) / 2 - 8})`
        );
      }), n.forEach((R, I) => v[I].setAttribute("transform", `translate(${R.x},${R.y})`));
    };
    E();
    let x = /* @__PURE__ */ new Map();
    const F = yf({
      nodes: n,
      circles: m,
      matched: () => x,
      captions: u,
      initials: c,
      depictionGroups: d,
      edgeLabels: h,
      stage: f,
      rdkit: () => a,
      viewport: () => ({ width: o, height: s })
    }), T = this.#r(
      f,
      p,
      n,
      v,
      E,
      F.apply,
      (R) => i({ kind: "ligand", index: R })
    );
    return {
      setSelected(R) {
        const I = R?.kind === "edge" ? R.index : -1, H = R?.kind === "ligand" ? R.index : -1;
        y.forEach((ee, W) => ee.setAttribute("opacity", W === I ? String(xt.opacity) : "0")), _.forEach((ee, W) => ee.setAttribute("opacity", W === H ? String(xt.opacity) : "0"));
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
      setMatches(R) {
        x = R, F.forget();
        const { scale: I, tx: H, ty: ee } = T.transform();
        F.apply(I, H, ee);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(R, I) {
        v.forEach((H, ee) => {
          const W = !R || R.has(n[ee]["gufe-key"]);
          H.setAttribute("opacity", W ? "1" : String(gr.node));
        }), r.forEach((H, ee) => {
          const W = !I || I.has(ee), ae = W ? "0.9" : String(gr.edge);
          k.children[ee * 2 + 1].setAttribute("stroke-opacity", ae), h.children[ee].setAttribute("opacity", W ? "1" : String(gr.edge));
        });
      },
      focusOn(R) {
        const I = n[R];
        I && T.centreOn(I.x, I.y);
      },
      setDetail: F.apply,
      depictionsDrawn: () => F.drawn(),
      fit: T.fit,
      reset: T.reset,
      transform: T.transform,
      setTransform: T.setTransform,
      cleanup: T.cleanup
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
    const l = zi(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => ji(r, He),
      margin: df,
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((f, p) => {
      let g = null, $ = !1;
      f.addEventListener("pointerdown", (k) => {
        k.stopPropagation();
        const { scale: S } = l.transform();
        g = { x: k.clientX - r[p].x * S, y: k.clientY - r[p].y * S }, $ = !1, f.setPointerCapture(k.pointerId);
      }), f.addEventListener("pointermove", (k) => {
        if (!g) return;
        const { scale: S } = l.transform(), h = (k.clientX - g.x) / S, b = (k.clientY - g.y) / S;
        Math.hypot(h - r[p].x, b - r[p].y) * S > af && ($ = !0), r[p].x = r[p].fx = h, r[p].y = r[p].fy = b, s();
      });
      const y = () => {
        g = null;
      };
      f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("click", (k) => {
        k.stopPropagation(), $ || a(p);
      });
    }), {
      ...l,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (f, p) => l.centreOn(f, p, uf)
    };
  }
}
function bf(e, t, n, r, o) {
  const s = t / 2, i = n / 2, a = (l, f) => {
    l.forEach((p, g) => {
      const $ = 2 * Math.PI * g / Math.max(1, l.length) - Math.PI / 2;
      p.x = s + f * Math.cos($), p.y = i + f * Math.sin($), p.fx = r === "Force-directed" ? void 0 : p.x, p.fy = r === "Force-directed" ? void 0 : p.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of o)
      l.get(S.from["gufe-key"]).push(S.to["gufe-key"]), l.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const f = new Map(e.map((S) => [S["gufe-key"], S])), p = e.reduce(
      (S, h) => l.get(h["gufe-key"]).length > l.get(S["gufe-key"]).length ? h : S
    ), g = /* @__PURE__ */ new Set([p["gufe-key"]]);
    let $ = [p["gufe-key"]], y = 0;
    const k = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      a(
        $.map((h) => f.get(h)),
        y === 0 ? 0 : y * k + 40
      );
      const S = [];
      for (const h of $)
        for (const b of l.get(h))
          g.has(b) || (g.add(b), S.push(b));
      $ = S, y++;
    }
    a(e.filter((S) => !g.has(S["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function wf(e, t, n, r) {
  let o;
  try {
    if (o = await Ci(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((l) => l["gufe-key"]).distance((l) => _e.linkBaseDistance + (1 - (l.score ?? 0.5)) * _e.linkScoreBonus).strength(_e.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(_e.chargeStrength).distanceMin(_e.chargeDistanceMin).distanceMax(_e.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(_e.centerStrength)).force("collision", o.forceCollide(He + _e.collisionPadding).iterations(_e.collisionIterations)).force("x", o.forceX(n / 2).strength(_e.drift)).force("y", o.forceY(r / 2).strength(_e.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * _e.tickMultiplier; l++) i.tick();
  return !0;
}
Re("gufe-ligand-network", vf);
function _f(e, t) {
  return { ...e, registry: Hr(t, Object.values(e.components ?? {})) };
}
function Sf(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function kf(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Cf extends Ae {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Mt(n), o = [], s = [];
    for (const [k, S] of Object.entries(n.components ?? {})) {
      const h = We(r, S);
      h ? o.push([k, h]) : s.push(k);
    }
    const i = bt(n.name || "Chemical system");
    if (i.statsEl.appendChild($e("components", String(o.length))), t.appendChild(i), !o.length)
      return t.appendChild(
        de(
          s.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = j("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:column;");
    t.appendChild(a), s.length && nt(
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
    g.style.cssText = "flex:1;min-width:0;min-height:0;", g.setAttribute(ci, ""), p.appendChild(g);
    const $ = [], y = (k) => {
      $.forEach((S, h) => {
        const b = h === k;
        S.style.background = b ? O.cardBgActive : O.cardBg, S.style.borderColor = b ? O.cardBorderActive : O.cardBorder;
      }), g.payload = o[k][1];
    };
    return o.forEach(([k, S], h) => {
      const b = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${O.cardBorder};border-radius:8px;background:${O.cardBg};cursor:pointer;font-family:inherit;font-size:${J.body};flex-shrink:0;width:auto;`
      );
      b.appendChild(j("span", `font-weight:700;color:${O.textPrimary};`, k)), b.appendChild(j("span", `font-size:${J.small};color:${O.textMuted};`, Sf(S))), b.appendChild(Ln(kf(S))), b.onclick = () => y(h), $.push(b), l.appendChild(b);
    }), y(0), {
      onResize: () => g.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => g.remove()
    };
  }
}
Re("gufe-chemical-system", Cf);
const Ef = 460;
function xf(e, t) {
  const n = Ce(t, e.stateA, "ChemicalSystemViz"), r = Ce(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const s of [n, r]) o.push(...Object.values(s.components ?? {}));
  for (const s of e.mappings ?? []) o.push(s.componentA, s.componentB);
  return { ...e, registry: Hr(t, o) };
}
const Er = {
  unchanged: O.diffUnchanged,
  changed: O.diffChanged,
  added: O.diffAdded,
  removed: O.diffRemoved
};
function Pf(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Af(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Rf(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Nf(e, t, n) {
  const r = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${O.cardBg};border:1px solid ${O.cardBorder};`
  ), o = j(
    "span",
    `display:none;font-size:${J.tiny};font-weight:700;letter-spacing:.08em;color:${O.textMuted2};`,
    n
  );
  r.appendChild(o);
  const s = Rf(e);
  return s ? (r.style.borderColor = t === "unchanged" ? O.cardBorder : Er[t], r.appendChild(j("span", `font-size:${J.body};font-weight:600;color:${O.textPrimary};`, s.name)), r.appendChild(Ln(s.type)), { cell: r, sideMark: o }) : (r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(j("span", `font-size:${J.body};color:${O.textMuted2};`, "absent")), { cell: r, sideMark: o });
}
function Mf(e, t) {
  const n = We(t, e.componentA), r = We(t, e.componentB);
  return `${n ? Je(n) : "A"} to ${r ? Je(r) : "B"}`;
}
class Of extends Ae {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Mt(n), o = Ce(r, n.stateA, "ChemicalSystemViz"), s = Ce(r, n.stateB, "ChemicalSystemViz"), i = Ce(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = bt(n.name || "Transformation");
    if (l.statsEl.appendChild($e("protocol", i?.gufe_type || i?.name || "-")), l.statsEl.appendChild($e("mappings", String(a.length))), t.appendChild(l), !o || !s)
      return t.appendChild(
        de("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const f = Af(o, s), p = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(p);
    const g = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [c, u] of [
      ["State A", o],
      ["State B", s]
    ])
      g.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${J.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${O.textMuted2};`,
          `${c}${u.name ? ` - ${u.name}` : ""}`
        )
      );
    p.appendChild(g);
    const $ = [], y = [], k = [];
    for (const c of f) {
      const u = o.components?.[c], v = s.components?.[c], E = Pf(u, v), x = We(r, u), F = We(r, v), T = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), R = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      R.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${Er[E]};`)
      );
      const I = j("span", `font-size:${J.body};font-weight:700;color:${O.textPrimary};overflow-wrap:anywhere;`, c);
      I.title = E, R.appendChild(I), T.appendChild(R);
      for (const [H, ee] of [
        [x, "A"],
        [F, "B"]
      ]) {
        const W = Nf(H, E, ee);
        T.appendChild(W.cell), k.push(W.sideMark);
      }
      $.push(T), y.push(R), p.appendChild(T);
    }
    let S = null;
    const h = ba(t, (c) => {
      const u = c > 0 && c < Ef;
      if (u !== S) {
        S = u, g.style.display = u ? "none" : "flex";
        for (const v of $) v.style.flexDirection = u ? "column" : "row";
        for (const v of y) v.style.flex = u ? "0 0 auto" : "0 0 110px";
        for (const v of k) v.style.display = u ? "block" : "none";
      }
    }), b = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${J.small};color:${O.textMuted};`
    );
    for (const c of ["unchanged", "changed", "added", "removed"])
      b.appendChild($e(c, "", Er[c]));
    p.appendChild(b);
    const d = j(
      "div",
      Qs,
      "Atom mapping"
    );
    if (t.appendChild(d), !a.length)
      return t.appendChild(
        de(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: h };
    const m = document.createElement("gufe-atom-mapping");
    m.style.cssText = "flex:1;min-height:0;min-width:0;";
    const _ = (c) => {
      m.payload = Di(a[c], r);
    };
    if (_(0), a.length > 1) {
      const c = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${J.small};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textMuted};`
      );
      c.appendChild(
        qn(
          a.map((u, v) => ({
            id: String(v),
            label: u.name || Mf(u, r)
          })),
          "0",
          (u) => _(Number(u))
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
Re("gufe-transformation", Of);
const tt = { width: 148, height: 46, radius: 10 }, ht = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Pt = { initial: 0.56, min: 0.25, max: 0.78 }, Ff = 24, Xs = { x: tt.width / 2, y: tt.height / 2 }, Zs = { node: 0.12, edge: 0.06 }, Tf = 1.4, In = Je;
function jf(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function zf(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const o = We(t, r);
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
function If(e, t) {
  const n = { fill: O.cardBg, stroke: O.cardBorder }, r = e.map((i) => zf(i, t)), o = [...new Set(r)];
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
function Df(e, t) {
  const n = [e.name ?? "", e["gufe-key"]];
  for (const [r, o] of Object.entries(e.components ?? {})) {
    n.push(r);
    const s = We(t, o);
    if (!s) continue;
    n.push(Je(s), s["gufe-key"]);
    const i = s.smiles;
    i && n.push(i);
  }
  return n.join(" ").toLowerCase();
}
function qf(e) {
  const t = Fn("alchemical-network.query"), n = Fn("alchemical-network.composition"), r = j(
    "div",
    `display:flex;flex-direction:column;gap:8px;flex:1;min-width:236px;max-width:340px;box-sizing:border-box;padding:10px;min-height:0;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`
  ), o = j("input", `${Tn}width:100%;box-sizing:border-box;`);
  if (o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o), e.compositions.length > 1) {
    const g = j("div", `display:flex;align-items:center;gap:6px;font-size:${J.small};color:${O.textMuted};`);
    g.appendChild(j("span", "flex-shrink:0;", "made of"));
    const $ = Vn(
      [{ id: "", label: "anything" }, ...e.compositions.map((y) => ({ id: y, label: y }))],
      "",
      (y) => {
        e.filter.composition = y, p(), e.refresh();
      },
      n
    );
    $.style.cssText += "flex:1;min-width:0;", e.filter.composition = $.value, g.appendChild($), r.appendChild(g);
  }
  const s = j("div", `font-size:${J.small};color:${O.textMuted2};`);
  r.appendChild(s);
  const i = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  r.appendChild(i), r.appendChild(j("div", `font-size:${J.tiny};line-height:1.5;color:${O.textMuted2};`, Gr));
  const a = Fi({
    nodes: e.nodes,
    edges: e.edges,
    selected: e.selected,
    words: {
      nodes: { button: "Systems", plural: "systems" },
      edges: { button: "Transformations", plural: "transformations" }
    },
    setting: "alchemical-network.exportAs"
  });
  r.appendChild(a.box);
  const l = j("button", `${vt}width:100%;`, "Clear selection");
  l.onclick = () => {
    e.selected.clear(), p(), e.refresh();
  }, r.appendChild(l);
  const f = (g) => {
    const $ = e.query.text.trim().toLowerCase();
    return !($ && !e.haystacks[g].includes($) || e.filter.composition && e.signatures[g] !== e.filter.composition);
  }, p = () => {
    a.clearNote(), i.replaceChildren();
    const g = e.nodes.map(($, y) => ({ node: $, index: y })).filter(({ index: $ }) => f($));
    s.textContent = `${g.length} of ${e.nodes.length} systems`;
    for (const { node: $, index: y } of g) {
      const k = $["gufe-key"], S = e.selected.has(k), h = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${J.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${S ? O.cardBorderActive : O.cardBorder};background:${S ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), b = e.colorOf(y);
      h.appendChild(
        j(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${b.fill};border:1px solid ${b.stroke};`
        )
      );
      const d = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", In($));
      d.title = `${In($)}
${e.signatures[y]}`, h.appendChild(d), h.onclick = (m) => {
        m.shiftKey || m.metaKey || m.ctrlKey ? e.selected.has(k) ? e.selected.delete(k) : e.selected.add(k) : (e.selected.clear(), e.selected.add(k), e.focus(y)), p(), e.refresh();
      }, i.appendChild(h);
    }
    g.length || i.appendChild(j("div", `font-size:${J.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), p(), e.refresh();
  }, p(), r;
}
function Vf(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((o, s) => {
    const i = 2 * Math.PI * s / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(i), o.y = n / 2 + r * Math.sin(i);
  });
}
async function Lf(e, t, n, r) {
  let o;
  try {
    if (o = await Ci(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((l) => l["gufe-key"]).distance(ht.linkDistance).strength(ht.linkStrength)
  ).force("charge", o.forceManyBody().strength(ht.chargeStrength)).force("center", o.forceCenter(n / 2, r / 2)).force("collision", o.forceCollide(ht.collisionRadius).iterations(ht.collisionIterations)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * ht.tickMultiplier; l++) i.tick();
  return !0;
}
class Bf extends Ae {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Mt(n), o = [];
    let s = 0;
    for (const z of n.nodes ?? []) {
      const A = Ce(r, z, "ChemicalSystemViz");
      if (!A) {
        s++;
        continue;
      }
      o.push({ ...A, x: 0, y: 0 });
    }
    const i = new Map(o.map((z) => [z["gufe-key"], z])), a = [];
    let l = 0;
    for (const z of n.edges ?? []) {
      const A = i.get(z.stateA), q = i.get(z.stateB);
      if (!A || !q) {
        l++;
        continue;
      }
      a.push({ ...z, index: a.length, from: A, to: q });
    }
    const f = (z) => {
      const A = Ce(r, z.protocol, "ProtocolViz");
      return A?.gufe_type || A?.name || "";
    }, p = new Set(a.map(f).filter(Boolean)), g = bt(n.name || "Alchemical network");
    g.statsEl.appendChild($e("systems", String(o.length))), g.statsEl.appendChild($e("transformations", String(a.length))), p.size && g.statsEl.appendChild($e("protocol", [...p].join(", "))), t.appendChild(g);
    const $ = If(o, r), y = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    let k = () => {
    };
    const S = /* @__PURE__ */ new Set(), h = { composition: "" }, b = { text: "" };
    let d = () => {
    }, m = () => {
    }, _ = () => {
    };
    const c = o.map((z) => Df(z, r)), u = fi(
      g,
      () => qf({
        nodes: o,
        edges: a,
        haystacks: c,
        signatures: $.signatures,
        colorOf: $.colorOf,
        compositions: $.compositions,
        selected: S,
        filter: h,
        query: b,
        refresh: () => d(),
        // Finding a system in the list and opening it are one action: the
        // list is how you reach one you cannot see on the canvas, and
        // reaching it is not the point.
        focus: (z) => {
          m(z), _(z);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => k(),
        remember: gt("alchemical-network.menuOpen", !1)
      }
    );
    u.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", y.appendChild(u.panel);
    const v = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), E = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.appBg};`), x = j("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${O.netCanvasBg};`);
    v.appendChild(x), y.appendChild(v), y.appendChild(
      di(y, v, E, {
        min: Pt.min,
        max: Pt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Pr("alchemical-network.canvasShare", Pt.initial, Pt.min, Pt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => k()
      })
    ), y.appendChild(E);
    const F = this.#e(E, r);
    if (!o.length)
      return x.appendChild(
        de(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), F.message("Nothing to show."), { cleanup: () => F.cleanup() };
    s && nt(
      x,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && nt(
      x,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let T = !0, R = !1, I = null, H = () => {
    }, ee = () => {
    }, W = () => {
    }, ae = 0;
    v.appendChild(this.#t($.legend, () => ee()));
    const Y = (z, A) => {
      I = { kind: z, index: A }, F.show(z === "node" ? o[A] : a[A], z), H();
    };
    _ = (z) => Y("node", z);
    const K = () => {
      const z = ++ae, A = x.clientWidth || 800, q = x.clientHeight || 600;
      Vf(o, A, q);
      const M = () => {
        if (!T || z !== ae) return;
        W(), x.querySelectorAll("svg").forEach((C) => C.remove());
        const w = this.#n(x, o, a, A, q, $.colorOf, Y);
        W = w.cleanup, ee = w.reset, m = (C) => w.focusOn(C), H = () => w.setSelected(I), H(), d = () => {
          const C = b.text.trim().toLowerCase();
          if (!(S.size > 0 || C.length > 0 || h.composition !== "")) {
            w.setEmphasis(null, null);
            return;
          }
          const B = /* @__PURE__ */ new Set();
          o.forEach((Q, Z) => {
            const P = (!C || c[Z].includes(C)) && (!h.composition || $.signatures[Z] === h.composition);
            (S.has(Q["gufe-key"]) || P) && B.add(Q["gufe-key"]);
          });
          const G = /* @__PURE__ */ new Set();
          a.forEach((Q, Z) => {
            B.has(Q.from["gufe-key"]) && B.has(Q.to["gufe-key"]) && G.add(Z);
          }), w.setEmphasis(B, G);
        }, d();
      };
      if (R) {
        M();
        return;
      }
      Lf(o, a, A, q).then((w) => {
        !T || z !== ae || (w || (R = !0, nt(x, "d3 could not be loaded - showing the circular layout instead")), M());
      }, M);
    };
    return k = K, K(), Y("node", 0), {
      onResize: () => K(),
      cleanup: () => {
        T = !1, W(), F.cleanup();
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
    const r = j("div", xr.bottom);
    if (r.appendChild(Ur(n, "Reset pan and zoom")), !t.length) return r;
    r.appendChild(j("span", `font-size:${J.small};color:${O.textMuted};`, "systems made of"));
    for (const [o, s] of t) {
      const i = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      i.appendChild(
        j(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), i.appendChild(
        j("span", `font-size:${J.small};color:${O.textPrimary};overflow-wrap:anywhere;`, o)
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
    t.appendChild(j("div", Qs, "Selected"));
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const s = (a) => r.replaceChildren(de(a));
    return { show: (a, l) => {
      let f;
      if (l === "node")
        f = _f(Ii(a), n);
      else {
        const { index: p, from: g, to: $, ...y } = a;
        f = xf(y, n);
      }
      if (!f) {
        s("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      o.payload = f, o.parentNode !== r && r.replaceChildren(o);
    }, message: s, cleanup: () => o.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #n(t, n, r, o, s, i, a) {
    const l = ce("svg", { class: "gufe-graph", width: o, height: s, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const f = ce("g");
    l.appendChild(f);
    const p = ce("g"), g = ce("g");
    f.append(p, g);
    const $ = zi(l, f, {
      bounds: () => ji(n, Xs.x, Xs.y),
      margin: Ff,
      hint: "Click the graph or hold Ctrl to zoom"
    }), y = (d, m) => {
      $.wasPan() || a(d, m);
    }, k = [];
    r.forEach((d, m) => {
      const _ = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: O.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      qs(_, d.name || "transformation"), _.addEventListener("click", () => y("edge", m)), p.appendChild(_), k.push(_);
      const c = ce("line", {
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
    const S = [], h = [], b = [];
    return n.forEach((d, m) => {
      const _ = i(m), c = ce("g", { style: "cursor:pointer;" });
      b.push(c);
      const u = ce("rect", {
        x: d.x - tt.width / 2,
        y: d.y - tt.height / 2,
        width: tt.width,
        height: tt.height,
        rx: tt.radius,
        fill: _.fill,
        stroke: _.stroke,
        "stroke-width": 2
      });
      c.appendChild(u), S.push(u), h.push(_.stroke);
      const v = ce("text", {
        x: d.x,
        y: d.y - 2,
        "text-anchor": "middle",
        fill: O.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      v.textContent = jf(In(d), 20), c.appendChild(v);
      const E = Object.keys(d.components ?? {}).length, x = ce("text", {
        x: d.x,
        y: d.y + 14,
        "text-anchor": "middle",
        fill: O.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      x.textContent = `${E} component${E === 1 ? "" : "s"}`, c.appendChild(x), qs(c, In(d)), c.addEventListener("click", () => y("node", m)), g.appendChild(c);
    }), $.fit(), {
      setSelected(d) {
        S.forEach((m, _) => {
          const c = d?.kind === "node" && d.index === _;
          m.setAttribute("stroke", c ? O.cardBorderActive : h[_]), m.setAttribute("stroke-width", c ? "3" : "2");
        }), k.forEach((m, _) => {
          const c = d?.kind === "edge" && d.index === _;
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
        b.forEach((_, c) => {
          const u = !d || d.has(n[c]["gufe-key"]);
          _.setAttribute("opacity", u ? "1" : String(Zs.node));
        }), k.forEach((_, c) => {
          const u = !m || m.has(c);
          _.setAttribute("opacity", u ? "1" : String(Zs.edge));
        });
      },
      focusOn(d) {
        const m = n[d];
        m && $.centreOn(m.x, m.y, Tf);
      },
      reset: $.reset,
      cleanup: $.cleanup
    };
  }
}
Re("gufe-alchemical-network", Bf);
class Uf extends Ae {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = bt(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Ln(n.gufe_type)), t.appendChild(r);
    const o = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(o);
    const s = Ar();
    return s.style.maxWidth = "460px", s.appendChild(Se("gufe class", n.gufe_type, !0)), n.name && s.appendChild(Se("Name", n.name)), s.appendChild(Se("gufe key", n["gufe-key"], !0)), s.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${J.small};line-height:1.6;color:${O.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(s), {};
  }
}
Re("gufe-protocol", Uf);
class Kf extends Ae {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Ar();
    return o.style.maxWidth = "560px", o.style.width = "100%", o.appendChild(Se("Name", n.name || "(unnamed)")), o.appendChild(Se("SMILES", n.smiles, !0)), o.appendChild(Se("Positive ion", n.positive_ion)), o.appendChild(Se("Negative ion", n.negative_ion)), o.appendChild(Se("Ion concentration", n.ion_concentration)), o.appendChild(Se("Neutralize", n.neutralize ? "yes" : "no")), o.appendChild(Se("gufe key", n["gufe-key"], !0)), r.appendChild(o), {};
  }
}
Re("gufe-solvent", Kf);
class Hf extends Ae {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = bt(n.name || "Unnamed component");
    r.statsEl.appendChild(Ln(n.gufe_type)), t.appendChild(r);
    const o = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const s = Ar();
    return s.style.maxWidth = "460px", s.appendChild(
      j(
        "div",
        `font-size:${J.heading};font-weight:600;padding-bottom:6px;color:${O.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), s.appendChild(
      j(
        "div",
        `font-size:${J.body};line-height:1.6;padding-bottom:10px;color:${O.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), s.appendChild(Se("Name", n.name || "(unnamed)")), s.appendChild(Se("gufe class", n.gufe_type, !0)), o.appendChild(s), {};
  }
}
Re("gufe-unknown-component", Hf);
function Zf(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: ri, reset: aa });
export {
  _a as CHROME_OPEN_BY_DEFAULT,
  Ji as DEBUG_ATTRIBUTE,
  Yi as DEBUG_GLOBAL,
  Ld as DEFAULT_DEPICT_STYLE,
  ud as DEFAULT_ZOOM_BOUNDS,
  et as DEPICT_STYLE,
  Wd as DEPICT_STYLE_RANGES,
  Bf as GufeAlchemicalNetwork,
  Hu as GufeAtomMapping,
  Cf as GufeChemicalSystem,
  Ae as GufeElement,
  vf as GufeLigandNetwork,
  $u as GufeProtein,
  Uf as GufeProtocol,
  fu as GufeSmallMolecule,
  Kf as GufeSolvent,
  Of as GufeTransformation,
  Hf as GufeUnknownComponent,
  id as GufeView,
  ci as HIDE_NAME_ATTRIBUTE,
  cr as MAPPING_COLORS,
  md as MAPPING_RAMP_3D,
  Xf as MAPPING_RAMP_NAME,
  Gr as MULTI_SELECT_HINT,
  Gf as PAYLOAD_TYPES,
  Wf as SCHEMA_TYPES,
  Ir as VIEW_TAGS,
  Ou as align2D,
  ju as alignedToPartner,
  Mu as applyRT,
  Fu as applyTurn,
  pd as boundedZoom,
  Mt as buildRegistry,
  $t as choice,
  fi as chromeMenu,
  ti as debugEnabled,
  Re as defineElement,
  Si as describeProblem,
  Pf as diffStatus,
  Yf as dispatchProblem,
  Hr as entriesFor,
  Je as entryLabel,
  Fi as exportBlock,
  ji as extentOf,
  gt as flag,
  od as formatIssues,
  Ei as guardWheel,
  Nu as kabsch,
  Us as laidOut,
  zu as layoutPair,
  Bu as liftFor,
  ea as logPayload,
  We as lookup,
  Ce as lookupOfType,
  Di as mappingPayloadFor,
  Ns as markGroups,
  lr as markedBonds,
  Zf as mount,
  li as nameWanted,
  Yd as normaliseDepictStyle,
  Pr as num,
  ba as onWidth,
  Uu as openfeShift,
  Ku as pairColour,
  As as parseAtomSpec,
  Qi as payloadJson,
  Ur as resetControl,
  aa as resetSettings,
  zi as sceneCamera,
  vu as selectionText,
  Dn as setting,
  ri as settings,
  di as splitter,
  _f as systemPayloadFor,
  Fn as textSetting,
  xf as transformationPayloadFor,
  Hs as uniqueAtoms,
  Zd as uniqueBonds,
  Jf as validateAs,
  rd as validatePayload,
  Br as viewerInteraction,
  xi as wheelFactor,
  Tu as withCoords
};
