const Kr = {
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
function Ai() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const O = Ai() ? Kr.dark : Kr.light, Z = {
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
}, Ge = {
  bold: "700"
}, ce = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, gt = {
  sm: "3px",
  md: "6px",
  xl: "10px"
}, je = {
  title: O.titleColor,
  primary: O.textPrimary,
  muted: O.textMuted,
  faint: O.textMuted2,
  error: O.errorFg
}, xt = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: O.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: O.canvas2DBg
}, ve = {
  base: `background:${O.btnBg};color:${O.btnFg};border:1px solid ${O.btnBorder};padding:${ce.sm} 9px;font-size:${Z.small};font-weight:${Ge.bold};border-radius:${gt.sm};cursor:pointer;font-family:inherit;`,
  bg: O.btnBg,
  bgHover: O.btnBgHover,
  bgActive: O.btnBgActive
}, Ri = `background:${O.selectBg};color:${O.textPrimary};border:1px solid ${O.selectBorder};border-radius:${gt.md};padding:${ce.sm} ${ce.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, Mi = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${ce.xxl};flex-shrink:0;background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};`, Sr = {
  top: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;font-size:${Z.body};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};`
}, Pt = `flex-shrink:0;padding:${ce.sm} ${ce.xl};font-size:${Z.heading};font-weight:${Ge.bold};color:${O.labelFg};background:${O.labelBg};`, Ni = `display:flex;flex-direction:column;gap:${ce.xs};padding:${ce.xxl} 18px;border-radius:${gt.xl};background:${O.cardBg};border:1px solid ${O.cardBorder};`, Gs = `position:absolute;bottom:${ce.xl};right:${ce.xl};display:flex;gap:${ce.sm};padding:${ce.sm};border-radius:${gt.md};z-index:10;background:${O.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Hr = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${O.textMuted};`, Gr = `font-size:${Z.small};font-weight:${Ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`, Fi = `font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`, Oi = ["debug", "gufe-debug"], Ti = "debug", ji = "GUFE_VIZ_DEBUG";
function Ii() {
  return !!globalThis[ji];
}
function zi() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Oi.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Ws(e) {
  return e?.hasAttribute?.(Ti) ? !0 : Ii() || zi();
}
function Di(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ge(t)}>`;
  }
}
function qi(e, t, n) {
  if (!Ws(n)) return;
  const r = Di(t), s = t?.type, o = `[gufe-viz] ${e}${typeof s == "string" ? ` ${s}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), i && console.groupEnd?.();
}
const Js = "GUFE_VIZ_VIEW_STATE";
function Vi(e) {
  const t = globalThis[Js];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Li = 150;
class Re extends HTMLElement {
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
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Li);
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
    } catch (s) {
      this.#l(t, n, s);
      return;
    }
    r instanceof Promise ? r.then(
      (s) => this.#c(s, n),
      (s) => this.#l(t, n, s)
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
    n === this.#s && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(de(`Failed to render: ${ge(r)}`, !0)));
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
const ke = "gufe-viz:", He = /* @__PURE__ */ new Map();
let Nt = null;
function Bi() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Rt() {
  if (Nt === !1) return null;
  const e = Bi();
  if (!e)
    return Nt = !1, null;
  try {
    const t = `${ke}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Nt = !0, e;
  } catch {
    return Nt = !1, null;
  }
}
function Ui(e) {
  const t = Rt();
  if (!t) return He.get(ke + e) ?? null;
  try {
    return t.getItem(ke + e);
  } catch {
    return null;
  }
}
function Ki(e, t) {
  const n = Rt();
  if (!n) {
    He.set(ke + e, t);
    return;
  }
  try {
    n.setItem(ke + e, t);
  } catch {
    He.set(ke + e, t);
  }
}
function In(e, t, n) {
  return {
    key: e,
    get() {
      const r = Ui(e);
      if (r === null) return t;
      try {
        const s = JSON.parse(r);
        return n(s) ? s : t;
      } catch {
        return t;
      }
    },
    set(r) {
      try {
        Ki(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function ht(e, t, n) {
  return In(e, t, (r) => typeof r == "string" && n.includes(r));
}
function Ct(e, t) {
  return In(e, t, (n) => typeof n == "boolean");
}
function kr(e, t, n = -1 / 0, r = 1 / 0) {
  return In(
    e,
    t,
    (s) => typeof s == "number" && Number.isFinite(s) && s >= n && s <= r
  );
}
function Wr(e, t = "") {
  return In(e, t, (n) => typeof n == "string");
}
function Ys() {
  const e = {}, t = Rt(), n = t ? Array.from({ length: t.length }, (r, s) => t.key(s)).filter(
    (r) => typeof r == "string"
  ) : Array.from(He.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const s = t ? t.getItem(r) : He.get(r) ?? null;
    if (s !== null)
      try {
        e[r.slice(ke.length)] = JSON.parse(s);
      } catch {
        e[r.slice(ke.length)] = s;
      }
  }
  return e;
}
function Hi() {
  const e = {}, t = Rt(), n = t ? Array.from({ length: t.length }, (r, s) => t.key(s)).filter(
    (r) => typeof r == "string"
  ) : Array.from(He.keys());
  for (const r of n) {
    if (!r.startsWith(ke)) continue;
    const s = t ? t.getItem(r) : He.get(r) ?? null;
    s !== null && (e[r] = s);
  }
  return e;
}
function Gi() {
  const e = Rt();
  if (e)
    for (const t of Object.keys(Ys()))
      try {
        e.removeItem(ke + t);
      } catch {
      }
  He.clear();
}
const Xs = "https://framejs.app", Zs = 1e4;
function Wi(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Ji = "/gufe-dev-bundle.js";
function Yi() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Zs ? e : null;
}
async function Xi() {
  const e = Yi();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Ji);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Zs ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Zi() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Qi(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(ke)};`,
    `  const menuOpen = ${JSON.stringify(ri)};`,
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
    `globalThis[${JSON.stringify(Js)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function ea(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Qi(n),
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
function ta(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [s, o] of Object.entries(Hi()))
    s.endsWith(ri) || (r[s] = o);
  return { settings: r, views: t };
}
const na = (e) => `${Xs}/j/${e}`, ra = (e) => `${Xs}/j/${e}.json`;
async function oa(e, t, n) {
  await fetch(ra(e), {
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
function sa(e) {
  if (!Ws()) return;
  const t = j(
    "div",
    `display:flex;flex-direction:column;gap:${ce.md};padding-top:${ce.lg};border-top:1px dashed ${O.splitBorder};`
  );
  t.appendChild(
    j(
      "div",
      `font-size:${Z.tiny};font-weight:${Ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
      "debug"
    )
  );
  const n = j("button", `${ve.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = j("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const s = (i, a = !1) => {
    r.replaceChildren(i), r.style.color = a ? O.errorFg : O.textMuted2;
  }, o = (i, a) => {
    const l = j("a", `color:${O.textPrimary};`, i);
    l.href = i, l.target = "_blank", l.rel = "noreferrer", r.replaceChildren(l), a && r.appendChild(j("div", `padding-top:${ce.sm};`, a)), r.style.color = O.textMuted2;
  };
  n.onclick = () => {
    const i = Wi(e);
    if (!i || i.payload == null) {
      s("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, l = ta(i), f = window.open("", "_blank"), h = Zi(), v = a, $ = String(v.name || v.type || "gufe-viz"), _ = () => {
      n.disabled = !1;
    };
    n.disabled = !0, s("Uploading..."), Xi().then((S) => {
      if (!S) {
        f?.close(), _(), s(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return oa(h, ea(S.js, a, l), $).then(() => {
        _();
        const w = na(h);
        f && (f.location.href = w), o(w, S.note);
      });
    }).catch((S) => {
      _(), f?.close(), s(`Upload failed: ${S instanceof Error ? S.message : String(S)}`, !0);
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
function Ve(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ge(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const vt = (e) => e.toLocaleString("en-US"), ut = "-", At = ve.base, hr = Ri;
function zn(e, t, n, r) {
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (t = i);
  }
  const s = j("div", "display:flex;gap:4px;"), o = e.map((i) => {
    const a = j("button", At, i.label);
    return a.title = i.title || i.label, a.onmouseover = () => {
      a.style.background = ve.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === i.id ? ve.bgActive : ve.bg;
    }, a.onclick = () => {
      s.setActive(i.id), r?.set(i.id), n(i.id);
    }, s.appendChild(a), { id: i.id, btn: a };
  });
  return s.setActive = (i) => {
    t = i, o.forEach((a) => {
      a.btn.style.background = a.id === t ? ve.bgActive : ve.bg;
    });
  }, s.setActive(t), s;
}
function Cr(e, t, n, r) {
  const s = j("select", hr);
  for (const i of e) {
    const a = j("option", "", i.label);
    a.value = i.id, s.appendChild(a);
  }
  let o = t;
  if (r) {
    const i = r.get();
    e.some((a) => a.id === i) && (o = i);
  }
  return s.value = o, s.onchange = () => {
    r?.set(s.value), n(s.value);
  }, s;
}
function Qs(e, t, n, r = {}) {
  let s = r.remember ? r.remember.get() : t;
  const o = j("button", At, e);
  o.title = r.title || e, o.setAttribute("aria-pressed", String(s));
  const i = () => {
    o.style.background = s ? ve.bgActive : ve.bg, o.setAttribute("aria-pressed", String(s));
  };
  return o.onclick = () => {
    s = !s, i(), r.remember?.set(s), n(s);
  }, i(), o;
}
function fe(e, t, n) {
  const r = j("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    j("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const s = j("span");
  return s.innerHTML = `${Ve(e)} <b style="color:${je.primary};">${Ve(t)}</b>`, r.appendChild(s), r;
}
function Ze(e, t) {
  const n = j("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ce.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ce.md} ${ce.xxl};border-radius:${gt.md};font-size:${Z.body};background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};`, e.appendChild(n), n;
}
function de(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Z.heading};color:${t ? je.error : je.faint};`,
    e
  );
}
function We(e) {
  const t = j("div", Mi);
  return t.className = "gufe-header", t.titleEl = j(
    "span",
    `font-weight:${Ge.bold};font-size:${Z.title};color:${je.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Z.small};color:${je.muted};`
  ), t.toggleEl = j("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Te(e, t, n = !1) {
  const r = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:${Z.tiny};font-weight:${Ge.bold};letter-spacing:.08em;text-transform:uppercase;color:${je.faint};`,
      e
    )
  );
  const s = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${je.primary};` + (n ? `font-family:${Z.mono};font-size:${Z.small};` : `font-size:${Z.body};`),
    t
  );
  return s.title = t, r.appendChild(s), r;
}
function Dn(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:${gt.xl};font-size:${Z.tiny};font-weight:${Ge.bold};letter-spacing:.04em;white-space:nowrap;background:${O.badgeBg};color:${O.badgeFg};`,
    e
  );
}
function Fn() {
  return j("div", Ni);
}
function ei() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
function ti(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const Jr = { min: 0.2, max: 0.8 }, ia = 5;
function ni(e, t, n, r = {}) {
  const s = r.min ?? Jr.min, o = r.max ?? Jr.max, i = j(
    "div",
    `flex:0 0 ${ia}px;align-self:stretch;cursor:col-resize;touch-action:none;background:${O.splitBorder};`
  );
  i.setAttribute("role", "separator"), i.setAttribute("aria-orientation", "vertical"), i.setAttribute("aria-label", "Resize the panes");
  let a = Math.min(o, Math.max(s, r.remember?.get() ?? 0.5));
  const l = () => {
    t.style.flex = `1 1 ${(a * 100).toFixed(2)}%`, n.style.flex = `1 1 ${((1 - a) * 100).toFixed(2)}%`;
  };
  l();
  let f = !1;
  i.addEventListener("pointerdown", (v) => {
    f = !0, i.setPointerCapture(v.pointerId), v.preventDefault();
  }), i.addEventListener("pointermove", (v) => {
    if (!f) return;
    const $ = e.getBoundingClientRect();
    $.width <= 0 || (a = Math.min(o, Math.max(s, (v.clientX - $.left) / $.width)), l());
  });
  const h = (v) => {
    f && (f = !1, i.releasePointerCapture(v.pointerId), r.remember?.set(a), r.onResize?.(a));
  };
  return i.addEventListener("pointerup", h), i.addEventListener("pointercancel", h), i;
}
const aa = !1, ri = ".menuOpen";
function ca() {
  const e = j("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const la = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: ca
}, da = la.openFreeEnergy;
function ua(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? aa, s = !1;
  const o = j("div", "flex-shrink:0;"), i = j("button", `${ve.base}display:inline-flex;align-items:center;gap:${ce.md};padding:${ce.sm} ${ce.lg};`);
  i.appendChild(da()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !s && (s = !0, o.appendChild(t()), sa(o)), o.style.display = r ? "" : "none", i.style.background = r ? ve.bgActive : ve.bg, i.setAttribute("aria-expanded", String(r));
  }, l = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return i.onclick = () => l(!r), i.onmouseover = () => {
    i.style.background = r ? ve.bgActive : ve.bgHover;
  }, i.onmouseout = () => {
    i.style.background = r ? ve.bgActive : ve.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(i), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: l
  };
}
function fa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, Jn = {}, Ie = {}, Je = {}, Yn = {}, Xn = {}, Zn = {}, Yr;
function On() {
  return Yr || (Yr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(u) {
        if (super(), !e.IDENTIFIER.test(u))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = u;
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
      constructor(u) {
        super(), this._items = typeof u == "string" ? [u] : u;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const u = this._items[0];
        return u === "" || u === '""';
      }
      get str() {
        var u;
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((m, k) => `${m}${k}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((m, k) => (k instanceof n && (m[k.str] = (m[k.str] || 0) + 1), m), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function s(g, ...u) {
      const m = [g[0]];
      let k = 0;
      for (; k < u.length; )
        a(m, u[k]), m.push(g[++k]);
      return new r(m);
    }
    e._ = s;
    const o = new r("+");
    function i(g, ...u) {
      const m = [_(g[0])];
      let k = 0;
      for (; k < u.length; )
        m.push(o), a(m, u[k]), m.push(o, _(g[++k]));
      return l(m), new r(m);
    }
    e.str = i;
    function a(g, u) {
      u instanceof r ? g.push(...u._items) : u instanceof n ? g.push(u) : g.push(v(u));
    }
    e.addCodeArg = a;
    function l(g) {
      let u = 1;
      for (; u < g.length - 1; ) {
        if (g[u] === o) {
          const m = f(g[u - 1], g[u + 1]);
          if (m !== void 0) {
            g.splice(u - 1, 3, m);
            continue;
          }
          g[u++] = "+";
        }
        u++;
      }
    }
    function f(g, u) {
      if (u === '""')
        return g;
      if (g === '""')
        return u;
      if (typeof g == "string")
        return u instanceof n || g[g.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${g.slice(0, -1)}${u}"` : u[0] === '"' ? g.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(g instanceof n))
        return `"${g}${u.slice(1)}`;
    }
    function h(g, u) {
      return u.emptyStr() ? g : g.emptyStr() ? u : i`${g}${u}`;
    }
    e.strConcat = h;
    function v(g) {
      return typeof g == "number" || typeof g == "boolean" || g === null ? g : _(Array.isArray(g) ? g.join(",") : g);
    }
    function $(g) {
      return new r(_(g));
    }
    e.stringify = $;
    function _(g) {
      return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = _;
    function S(g) {
      return typeof g == "string" && e.IDENTIFIER.test(g) ? new r(`.${g}`) : s`[${g}]`;
    }
    e.getProperty = S;
    function w(g) {
      if (typeof g == "string" && e.IDENTIFIER.test(g))
        return new r(`${g}`);
      throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function p(g) {
      return new r(g.toString());
    }
    e.regexpCode = p;
  })(Zn)), Zn;
}
var Qn = {}, Xr;
function Zr() {
  return Xr || (Xr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ On();
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
    class s {
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
        var h, v;
        if (!((v = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || v === void 0) && v.has(f) || this._prefixes && !this._prefixes.has(f))
          throw new Error(`CodeGen: prefix "${f}" is not allowed in this scope`);
        return this._names[f] = { prefix: f, index: 0 };
      }
    }
    e.Scope = s;
    class o extends t.Name {
      constructor(f, h) {
        super(h), this.prefix = f;
      }
      setValue(f, { property: h, itemIndex: v }) {
        this.value = f, this.scopePath = (0, t._)`.${new t.Name(h)}[${v}]`;
      }
    }
    e.ValueScopeName = o;
    const i = (0, t._)`\n`;
    class a extends s {
      constructor(f) {
        super(f), this._values = {}, this._scope = f.scope, this.opts = { ...f, _n: f.lines ? i : t.nil };
      }
      get() {
        return this._scope;
      }
      name(f) {
        return new o(f, this._newName(f));
      }
      value(f, h) {
        var v;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(f), { prefix: _ } = $, S = (v = h.key) !== null && v !== void 0 ? v : h.ref;
        let w = this._values[_];
        if (w) {
          const u = w.get(S);
          if (u)
            return u;
        } else
          w = this._values[_] = /* @__PURE__ */ new Map();
        w.set(S, $);
        const p = this._scope[_] || (this._scope[_] = []), g = p.length;
        return p[g] = h.ref, $.setValue(h, { property: _, itemIndex: g }), $;
      }
      getValue(f, h) {
        const v = this._values[f];
        if (v)
          return v.get(h);
      }
      scopeRefs(f, h = this._values) {
        return this._reduceValues(h, (v) => {
          if (v.scopePath === void 0)
            throw new Error(`CodeGen: name "${v}" has no value`);
          return (0, t._)`${f}${v.scopePath}`;
        });
      }
      scopeCode(f = this._values, h, v) {
        return this._reduceValues(f, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, h, v);
      }
      _reduceValues(f, h, v = {}, $) {
        let _ = t.nil;
        for (const S in f) {
          const w = f[S];
          if (!w)
            continue;
          const p = v[S] = v[S] || /* @__PURE__ */ new Map();
          w.forEach((g) => {
            if (p.has(g))
              return;
            p.set(g, r.Started);
            let u = h(g);
            if (u) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              _ = (0, t._)`${_}${m} ${g} = ${u};${this.opts._n}`;
            } else if (u = $?.(g))
              _ = (0, t._)`${_}${u}${this.opts._n}`;
            else
              throw new n(g);
            p.set(g, r.Completed);
          });
        }
        return _;
      }
    }
    e.ValueScope = a;
  })(Qn)), Qn;
}
var Qr;
function ne() {
  return Qr || (Qr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ On(), n = /* @__PURE__ */ Zr();
    var r = /* @__PURE__ */ On();
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
    var s = /* @__PURE__ */ Zr();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return s.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return s.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return s.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return s.varKinds;
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
      optimizeNames(b, x) {
        return this;
      }
    }
    class i extends o {
      constructor(b, x, I) {
        super(), this.varKind = b, this.name = x, this.rhs = I;
      }
      render({ es5: b, _n: x }) {
        const I = b ? n.varKinds.var : this.varKind, H = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${H};` + x;
      }
      optimizeNames(b, x) {
        if (b[this.name.str])
          return this.rhs && (this.rhs = K(this.rhs, b, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(b, x, I) {
        super(), this.lhs = b, this.rhs = x, this.sideEffects = I;
      }
      render({ _n: b }) {
        return `${this.lhs} = ${this.rhs};` + b;
      }
      optimizeNames(b, x) {
        if (!(this.lhs instanceof t.Name && !b[this.lhs.str] && !this.sideEffects))
          return this.rhs = K(this.rhs, b, x), this;
      }
      get names() {
        const b = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return z(b, this.rhs);
      }
    }
    class l extends a {
      constructor(b, x, I, H) {
        super(b, I, H), this.op = x;
      }
      render({ _n: b }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + b;
      }
    }
    class f extends o {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `${this.label}:` + b;
      }
    }
    class h extends o {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `break${this.label ? ` ${this.label}` : ""};` + b;
      }
    }
    class v extends o {
      constructor(b) {
        super(), this.error = b;
      }
      render({ _n: b }) {
        return `throw ${this.error};` + b;
      }
      get names() {
        return this.error.names;
      }
    }
    class $ extends o {
      constructor(b) {
        super(), this.code = b;
      }
      render({ _n: b }) {
        return `${this.code};` + b;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(b, x) {
        return this.code = K(this.code, b, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class _ extends o {
      constructor(b = []) {
        super(), this.nodes = b;
      }
      render(b) {
        return this.nodes.reduce((x, I) => x + I.render(b), "");
      }
      optimizeNodes() {
        const { nodes: b } = this;
        let x = b.length;
        for (; x--; ) {
          const I = b[x].optimizeNodes();
          Array.isArray(I) ? b.splice(x, 1, ...I) : I ? b[x] = I : b.splice(x, 1);
        }
        return b.length > 0 ? this : void 0;
      }
      optimizeNames(b, x) {
        const { nodes: I } = this;
        let H = I.length;
        for (; H--; ) {
          const G = I[H];
          G.optimizeNames(b, x) || (Q(b, G.names), I.splice(H, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((b, x) => P(b, x.names), {});
      }
    }
    class S extends _ {
      render(b) {
        return "{" + b._n + super.render(b) + "}" + b._n;
      }
    }
    class w extends _ {
    }
    class p extends S {
    }
    p.kind = "else";
    class g extends S {
      constructor(b, x) {
        super(x), this.condition = b;
      }
      render(b) {
        let x = `if(${this.condition})` + super.render(b);
        return this.else && (x += "else " + this.else.render(b)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const b = this.condition;
        if (b === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const I = x.optimizeNodes();
          x = this.else = Array.isArray(I) ? new p(I) : I;
        }
        if (x)
          return b === !1 ? x instanceof g ? x : x.nodes : this.nodes.length ? this : new g(X(b), x instanceof g ? [x] : x.nodes);
        if (!(b === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(b, x) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(b, x), !!(super.optimizeNames(b, x) || this.else))
          return this.condition = K(this.condition, b, x), this;
      }
      get names() {
        const b = super.names;
        return z(b, this.condition), this.else && P(b, this.else.names), b;
      }
    }
    g.kind = "if";
    class u extends S {
    }
    u.kind = "for";
    class m extends u {
      constructor(b) {
        super(), this.iteration = b;
      }
      render(b) {
        return `for(${this.iteration})` + super.render(b);
      }
      optimizeNames(b, x) {
        if (super.optimizeNames(b, x))
          return this.iteration = K(this.iteration, b, x), this;
      }
      get names() {
        return P(super.names, this.iteration.names);
      }
    }
    class k extends u {
      constructor(b, x, I, H) {
        super(), this.varKind = b, this.name = x, this.from = I, this.to = H;
      }
      render(b) {
        const x = b.es5 ? n.varKinds.var : this.varKind, { name: I, from: H, to: G } = this;
        return `for(${x} ${I}=${H}; ${I}<${G}; ${I}++)` + super.render(b);
      }
      get names() {
        const b = z(super.names, this.from);
        return z(b, this.to);
      }
    }
    class c extends u {
      constructor(b, x, I, H) {
        super(), this.loop = b, this.varKind = x, this.name = I, this.iterable = H;
      }
      render(b) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(b);
      }
      optimizeNames(b, x) {
        if (super.optimizeNames(b, x))
          return this.iterable = K(this.iterable, b, x), this;
      }
      get names() {
        return P(super.names, this.iterable.names);
      }
    }
    class d extends S {
      constructor(b, x, I) {
        super(), this.name = b, this.args = x, this.async = I;
      }
      render(b) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(b);
      }
    }
    d.kind = "func";
    class y extends _ {
      render(b) {
        return "return " + super.render(b);
      }
    }
    y.kind = "return";
    class E extends S {
      render(b) {
        let x = "try" + super.render(b);
        return this.catch && (x += this.catch.render(b)), this.finally && (x += this.finally.render(b)), x;
      }
      optimizeNodes() {
        var b, x;
        return super.optimizeNodes(), (b = this.catch) === null || b === void 0 || b.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(b, x) {
        var I, H;
        return super.optimizeNames(b, x), (I = this.catch) === null || I === void 0 || I.optimizeNames(b, x), (H = this.finally) === null || H === void 0 || H.optimizeNames(b, x), this;
      }
      get names() {
        const b = super.names;
        return this.catch && P(b, this.catch.names), this.finally && P(b, this.finally.names), b;
      }
    }
    class C extends S {
      constructor(b) {
        super(), this.error = b;
      }
      render(b) {
        return `catch(${this.error})` + super.render(b);
      }
    }
    C.kind = "catch";
    class R extends S {
      render(b) {
        return "finally" + super.render(b);
      }
    }
    R.kind = "finally";
    class A {
      constructor(b, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
` : "" }, this._extScope = b, this._scope = new n.Scope({ parent: b }), this._nodes = [new w()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(b) {
        return this._scope.name(b);
      }
      // reserves unique name in the external scope
      scopeName(b) {
        return this._extScope.name(b);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(b, x) {
        const I = this._extScope.value(b, x);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue(b, x) {
        return this._extScope.getValue(b, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(b) {
        return this._extScope.scopeRefs(b, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(b, x, I, H) {
        const G = this._scope.toName(x);
        return I !== void 0 && H && (this._constants[G.str] = I), this._leafNode(new i(b, G, I)), G;
      }
      // `const` declaration (`var` in es5 mode)
      const(b, x, I) {
        return this._def(n.varKinds.const, b, x, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(b, x, I) {
        return this._def(n.varKinds.let, b, x, I);
      }
      // `var` declaration with optional assignment
      var(b, x, I) {
        return this._def(n.varKinds.var, b, x, I);
      }
      // assignment code
      assign(b, x, I) {
        return this._leafNode(new a(b, x, I));
      }
      // `+=` code
      add(b, x) {
        return this._leafNode(new l(b, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(b) {
        return typeof b == "function" ? b() : b !== t.nil && this._leafNode(new $(b)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...b) {
        const x = ["{"];
        for (const [I, H] of b)
          x.length > 1 && x.push(","), x.push(I), (I !== H || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, H));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(b, x, I) {
        if (this._blockNode(new g(b)), x && I)
          this.code(x).else().code(I).endIf();
        else if (x)
          this.code(x).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(b) {
        return this._elseNode(new g(b));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new p());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(g, p);
      }
      _for(b, x) {
        return this._blockNode(b), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(b, x) {
        return this._for(new m(b), x);
      }
      // `for` statement for a range of values
      forRange(b, x, I, H, G = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const W = this._scope.toName(b);
        return this._for(new k(G, W, x, I), () => H(W));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(b, x, I, H = n.varKinds.const) {
        const G = this._scope.toName(b);
        if (this.opts.es5) {
          const W = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${W}.length`, (Y) => {
            this.var(G, (0, t._)`${W}[${Y}]`), I(G);
          });
        }
        return this._for(new c("of", H, G, x), () => I(G));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(b, x, I, H = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(b, (0, t._)`Object.keys(${x})`, I);
        const G = this._scope.toName(b);
        return this._for(new c("in", H, G, x), () => I(G));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(b) {
        return this._leafNode(new f(b));
      }
      // `break` statement
      break(b) {
        return this._leafNode(new h(b));
      }
      // `return` statement
      return(b) {
        const x = new y();
        if (this._blockNode(x), this.code(b), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(y);
      }
      // `try` statement
      try(b, x, I) {
        if (!x && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const H = new E();
        if (this._blockNode(H), this.code(b), x) {
          const G = this.name("e");
          this._currNode = H.catch = new C(G), x(G);
        }
        return I && (this._currNode = H.finally = new R(), this.code(I)), this._endBlockNode(C, R);
      }
      // `throw` statement
      throw(b) {
        return this._leafNode(new v(b));
      }
      // start self-balancing block
      block(b, x) {
        return this._blockStarts.push(this._nodes.length), b && this.code(b).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock(b) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - x;
        if (I < 0 || b !== void 0 && I !== b)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${b} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(b, x = t.nil, I, H) {
        return this._blockNode(new d(b, x, I)), H && this.code(H).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(d);
      }
      optimize(b = 1) {
        for (; b-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(b) {
        return this._currNode.nodes.push(b), this;
      }
      _blockNode(b) {
        this._currNode.nodes.push(b), this._nodes.push(b);
      }
      _endBlockNode(b, x) {
        const I = this._currNode;
        if (I instanceof b || x && I instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${b.kind}/${x.kind}` : b.kind}"`);
      }
      _elseNode(b) {
        const x = this._currNode;
        if (!(x instanceof g))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = b, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const b = this._nodes;
        return b[b.length - 1];
      }
      set _currNode(b) {
        const x = this._nodes;
        x[x.length - 1] = b;
      }
    }
    e.CodeGen = A;
    function P(F, b) {
      for (const x in b)
        F[x] = (F[x] || 0) + (b[x] || 0);
      return F;
    }
    function z(F, b) {
      return b instanceof t._CodeOrName ? P(F, b.names) : F;
    }
    function K(F, b, x) {
      if (F instanceof t.Name)
        return I(F);
      if (!H(F))
        return F;
      return new t._Code(F._items.reduce((G, W) => (W instanceof t.Name && (W = I(W)), W instanceof t._Code ? G.push(...W._items) : G.push(W), G), []));
      function I(G) {
        const W = x[G.str];
        return W === void 0 || b[G.str] !== 1 ? G : (delete b[G.str], W);
      }
      function H(G) {
        return G instanceof t._Code && G._items.some((W) => W instanceof t.Name && b[W.str] === 1 && x[W.str] !== void 0);
      }
    }
    function Q(F, b) {
      for (const x in b)
        F[x] = (F[x] || 0) - (b[x] || 0);
    }
    function X(F) {
      return typeof F == "boolean" || typeof F == "number" || F === null ? !F : (0, t._)`!${D(F)}`;
    }
    e.not = X;
    const se = M(e.operators.AND);
    function B(...F) {
      return F.reduce(se);
    }
    e.and = B;
    const ee = M(e.operators.OR);
    function q(...F) {
      return F.reduce(ee);
    }
    e.or = q;
    function M(F) {
      return (b, x) => b === t.nil ? x : x === t.nil ? b : (0, t._)`${D(b)} ${F} ${D(x)}`;
    }
    function D(F) {
      return F instanceof t.Name ? F : (0, t._)`(${F})`;
    }
  })(Xn)), Xn;
}
var re = {}, eo;
function oe() {
  if (eo) return re;
  eo = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.checkStrictMode = re.getErrorPath = re.Type = re.useFunc = re.setEvaluated = re.evaluatedPropsToName = re.mergeEvaluated = re.eachItem = re.unescapeJsonPointer = re.escapeJsonPointer = re.escapeFragment = re.unescapeFragment = re.schemaRefOrVal = re.schemaHasRulesButRef = re.schemaHasRules = re.checkUnknownRules = re.alwaysValidSchema = re.toHash = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ On();
  function n(c) {
    const d = {};
    for (const y of c)
      d[y] = !0;
    return d;
  }
  re.toHash = n;
  function r(c, d) {
    return typeof d == "boolean" ? d : Object.keys(d).length === 0 ? !0 : (s(c, d), !o(d, c.self.RULES.all));
  }
  re.alwaysValidSchema = r;
  function s(c, d = c.schema) {
    const { opts: y, self: E } = c;
    if (!y.strictSchema || typeof d == "boolean")
      return;
    const C = E.RULES.keywords;
    for (const R in d)
      C[R] || k(c, `unknown keyword: "${R}"`);
  }
  re.checkUnknownRules = s;
  function o(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const y in c)
      if (d[y])
        return !0;
    return !1;
  }
  re.schemaHasRules = o;
  function i(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const y in c)
      if (y !== "$ref" && d.all[y])
        return !0;
    return !1;
  }
  re.schemaHasRulesButRef = i;
  function a({ topSchemaRef: c, schemaPath: d }, y, E, C) {
    if (!C) {
      if (typeof y == "number" || typeof y == "boolean")
        return y;
      if (typeof y == "string")
        return (0, e._)`${y}`;
    }
    return (0, e._)`${c}${d}${(0, e.getProperty)(E)}`;
  }
  re.schemaRefOrVal = a;
  function l(c) {
    return v(decodeURIComponent(c));
  }
  re.unescapeFragment = l;
  function f(c) {
    return encodeURIComponent(h(c));
  }
  re.escapeFragment = f;
  function h(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  re.escapeJsonPointer = h;
  function v(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  re.unescapeJsonPointer = v;
  function $(c, d) {
    if (Array.isArray(c))
      for (const y of c)
        d(y);
    else
      d(c);
  }
  re.eachItem = $;
  function _({ mergeNames: c, mergeToName: d, mergeValues: y, resultToName: E }) {
    return (C, R, A, P) => {
      const z = A === void 0 ? R : A instanceof e.Name ? (R instanceof e.Name ? c(C, R, A) : d(C, R, A), A) : R instanceof e.Name ? (d(C, A, R), R) : y(R, A);
      return P === e.Name && !(z instanceof e.Name) ? E(C, z) : z;
    };
  }
  re.mergeEvaluated = {
    props: _({
      mergeNames: (c, d, y) => c.if((0, e._)`${y} !== true && ${d} !== undefined`, () => {
        c.if((0, e._)`${d} === true`, () => c.assign(y, !0), () => c.assign(y, (0, e._)`${y} || {}`).code((0, e._)`Object.assign(${y}, ${d})`));
      }),
      mergeToName: (c, d, y) => c.if((0, e._)`${y} !== true`, () => {
        d === !0 ? c.assign(y, !0) : (c.assign(y, (0, e._)`${y} || {}`), w(c, y, d));
      }),
      mergeValues: (c, d) => c === !0 ? !0 : { ...c, ...d },
      resultToName: S
    }),
    items: _({
      mergeNames: (c, d, y) => c.if((0, e._)`${y} !== true && ${d} !== undefined`, () => c.assign(y, (0, e._)`${d} === true ? true : ${y} > ${d} ? ${y} : ${d}`)),
      mergeToName: (c, d, y) => c.if((0, e._)`${y} !== true`, () => c.assign(y, d === !0 ? !0 : (0, e._)`${y} > ${d} ? ${y} : ${d}`)),
      mergeValues: (c, d) => c === !0 ? !0 : Math.max(c, d),
      resultToName: (c, d) => c.var("items", d)
    })
  };
  function S(c, d) {
    if (d === !0)
      return c.var("props", !0);
    const y = c.var("props", (0, e._)`{}`);
    return d !== void 0 && w(c, y, d), y;
  }
  re.evaluatedPropsToName = S;
  function w(c, d, y) {
    Object.keys(y).forEach((E) => c.assign((0, e._)`${d}${(0, e.getProperty)(E)}`, !0));
  }
  re.setEvaluated = w;
  const p = {};
  function g(c, d) {
    return c.scopeValue("func", {
      ref: d,
      code: p[d.code] || (p[d.code] = new t._Code(d.code))
    });
  }
  re.useFunc = g;
  var u;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(u || (re.Type = u = {}));
  function m(c, d, y) {
    if (c instanceof e.Name) {
      const E = d === u.Num;
      return y ? E ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : E ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return y ? (0, e.getProperty)(c).toString() : "/" + h(c);
  }
  re.getErrorPath = m;
  function k(c, d, y = c.opts.strictSchema) {
    if (y) {
      if (d = `strict mode: ${d}`, y === !0)
        throw new Error(d);
      c.self.logger.warn(d);
    }
  }
  return re.checkStrictMode = k, re;
}
var Ot = {}, to;
function Ne() {
  if (to) return Ot;
  to = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
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
  return Ot.default = t, Ot;
}
var no;
function qn() {
  return no || (no = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Ne();
    e.keywordError = {
      message: ({ keyword: p }) => (0, t.str)`must pass "${p}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: p, schemaType: g }) => g ? (0, t.str)`"${p}" keyword must be ${g} ($data)` : (0, t.str)`"${p}" keyword is invalid ($data)`
    };
    function s(p, g = e.keywordError, u, m) {
      const { it: k } = p, { gen: c, compositeRule: d, allErrors: y } = k, E = v(p, g, u);
      m ?? (d || y) ? l(c, E) : f(k, (0, t._)`[${E}]`);
    }
    e.reportError = s;
    function o(p, g = e.keywordError, u) {
      const { it: m } = p, { gen: k, compositeRule: c, allErrors: d } = m, y = v(p, g, u);
      l(k, y), c || d || f(m, r.default.vErrors);
    }
    e.reportExtraError = o;
    function i(p, g) {
      p.assign(r.default.errors, g), p.if((0, t._)`${r.default.vErrors} !== null`, () => p.if(g, () => p.assign((0, t._)`${r.default.vErrors}.length`, g), () => p.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: p, keyword: g, schemaValue: u, data: m, errsCount: k, it: c }) {
      if (k === void 0)
        throw new Error("ajv implementation error");
      const d = p.name("err");
      p.forRange("i", k, r.default.errors, (y) => {
        p.const(d, (0, t._)`${r.default.vErrors}[${y}]`), p.if((0, t._)`${d}.instancePath === undefined`, () => p.assign((0, t._)`${d}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), p.assign((0, t._)`${d}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${g}`), c.opts.verbose && (p.assign((0, t._)`${d}.schema`, u), p.assign((0, t._)`${d}.data`, m));
      });
    }
    e.extendErrors = a;
    function l(p, g) {
      const u = p.const("err", g);
      p.if((0, t._)`${r.default.vErrors} === null`, () => p.assign(r.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${r.default.vErrors}.push(${u})`), p.code((0, t._)`${r.default.errors}++`);
    }
    function f(p, g) {
      const { gen: u, validateName: m, schemaEnv: k } = p;
      k.$async ? u.throw((0, t._)`new ${p.ValidationError}(${g})`) : (u.assign((0, t._)`${m}.errors`, g), u.return(!1));
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
    function v(p, g, u) {
      const { createErrors: m } = p.it;
      return m === !1 ? (0, t._)`{}` : $(p, g, u);
    }
    function $(p, g, u = {}) {
      const { gen: m, it: k } = p, c = [
        _(k, u),
        S(p, u)
      ];
      return w(p, g, c), m.object(...c);
    }
    function _({ errorPath: p }, { instancePath: g }) {
      const u = g ? (0, t.str)`${p}${(0, n.getErrorPath)(g, n.Type.Str)}` : p;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, u)];
    }
    function S({ keyword: p, it: { errSchemaPath: g } }, { schemaPath: u, parentSchema: m }) {
      let k = m ? g : (0, t.str)`${g}/${p}`;
      return u && (k = (0, t.str)`${k}${(0, n.getErrorPath)(u, n.Type.Str)}`), [h.schemaPath, k];
    }
    function w(p, { params: g, message: u }, m) {
      const { keyword: k, data: c, schemaValue: d, it: y } = p, { opts: E, propertyName: C, topSchemaRef: R, schemaPath: A } = y;
      m.push([h.keyword, k], [h.params, typeof g == "function" ? g(p) : g || (0, t._)`{}`]), E.messages && m.push([h.message, typeof u == "function" ? u(p) : u]), E.verbose && m.push([h.schema, d], [h.parentSchema, (0, t._)`${R}${A}`], [r.default.data, c]), C && m.push([h.propertyName, C]);
    }
  })(Yn)), Yn;
}
var ro;
function pa() {
  if (ro) return Je;
  ro = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.boolOrEmptySchema = Je.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ qn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = {
    message: "boolean schema is false"
  };
  function s(a) {
    const { gen: l, schema: f, validateName: h } = a;
    f === !1 ? i(a, !1) : typeof f == "object" && f.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${h}.errors`, null), l.return(!0));
  }
  Je.topBoolOrEmptySchema = s;
  function o(a, l) {
    const { gen: f, schema: h } = a;
    h === !1 ? (f.var(l, !1), i(a)) : f.var(l, !0);
  }
  Je.boolOrEmptySchema = o;
  function i(a, l) {
    const { gen: f, data: h } = a, v = {
      gen: f,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(v, r, void 0, l);
  }
  return Je;
}
var me = {}, Ye = {}, oo;
function oi() {
  if (oo) return Ye;
  oo = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.getRules = Ye.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(s) {
    return typeof s == "string" && t.has(s);
  }
  Ye.isJSONType = n;
  function r() {
    const s = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...s, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, s.number, s.string, s.array, s.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Ye.getRules = r, Ye;
}
var ze = {}, so;
function si() {
  if (so) return ze;
  so = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.shouldUseRule = ze.shouldUseGroup = ze.schemaHasRulesForType = void 0;
  function e({ schema: r, self: s }, o) {
    const i = s.RULES.types[o];
    return i && i !== !0 && t(r, i);
  }
  ze.schemaHasRulesForType = e;
  function t(r, s) {
    return s.rules.some((o) => n(r, o));
  }
  ze.shouldUseGroup = t;
  function n(r, s) {
    var o;
    return r[s.keyword] !== void 0 || ((o = s.definition.implements) === null || o === void 0 ? void 0 : o.some((i) => r[i] !== void 0));
  }
  return ze.shouldUseRule = n, ze;
}
var io;
function Tn() {
  if (io) return me;
  io = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.reportTypeError = me.checkDataTypes = me.checkDataType = me.coerceAndCheckDataType = me.getJSONTypes = me.getSchemaTypes = me.DataType = void 0;
  const e = /* @__PURE__ */ oi(), t = /* @__PURE__ */ si(), n = /* @__PURE__ */ qn(), r = /* @__PURE__ */ ne(), s = /* @__PURE__ */ oe();
  var o;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(o || (me.DataType = o = {}));
  function i(u) {
    const m = a(u.type);
    if (m.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && m.push("null");
    }
    return m;
  }
  me.getSchemaTypes = i;
  function a(u) {
    const m = Array.isArray(u) ? u : u ? [u] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  me.getJSONTypes = a;
  function l(u, m) {
    const { gen: k, data: c, opts: d } = u, y = h(m, d.coerceTypes), E = m.length > 0 && !(y.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(u, m[0]));
    if (E) {
      const C = S(m, c, d.strictNumbers, o.Wrong);
      k.if(C, () => {
        y.length ? v(u, m, y) : p(u);
      });
    }
    return E;
  }
  me.coerceAndCheckDataType = l;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(u, m) {
    return m ? u.filter((k) => f.has(k) || m === "array" && k === "array") : [];
  }
  function v(u, m, k) {
    const { gen: c, data: d, opts: y } = u, E = c.let("dataType", (0, r._)`typeof ${d}`), C = c.let("coerced", (0, r._)`undefined`);
    y.coerceTypes === "array" && c.if((0, r._)`${E} == 'object' && Array.isArray(${d}) && ${d}.length == 1`, () => c.assign(d, (0, r._)`${d}[0]`).assign(E, (0, r._)`typeof ${d}`).if(S(m, d, y.strictNumbers), () => c.assign(C, d))), c.if((0, r._)`${C} !== undefined`);
    for (const A of k)
      (f.has(A) || A === "array" && y.coerceTypes === "array") && R(A);
    c.else(), p(u), c.endIf(), c.if((0, r._)`${C} !== undefined`, () => {
      c.assign(d, C), $(u, C);
    });
    function R(A) {
      switch (A) {
        case "string":
          c.elseIf((0, r._)`${E} == "number" || ${E} == "boolean"`).assign(C, (0, r._)`"" + ${d}`).elseIf((0, r._)`${d} === null`).assign(C, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${E} == "boolean" || ${d} === null
              || (${E} == "string" && ${d} && ${d} == +${d})`).assign(C, (0, r._)`+${d}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${E} === "boolean" || ${d} === null
              || (${E} === "string" && ${d} && ${d} == +${d} && !(${d} % 1))`).assign(C, (0, r._)`+${d}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${d} === "false" || ${d} === 0 || ${d} === null`).assign(C, !1).elseIf((0, r._)`${d} === "true" || ${d} === 1`).assign(C, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${d} === "" || ${d} === 0 || ${d} === false`), c.assign(C, null);
          return;
        case "array":
          c.elseIf((0, r._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${d} === null`).assign(C, (0, r._)`[${d}]`);
      }
    }
  }
  function $({ gen: u, parentData: m, parentDataProperty: k }, c) {
    u.if((0, r._)`${m} !== undefined`, () => u.assign((0, r._)`${m}[${k}]`, c));
  }
  function _(u, m, k, c = o.Correct) {
    const d = c === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let y;
    switch (u) {
      case "null":
        return (0, r._)`${m} ${d} null`;
      case "array":
        y = (0, r._)`Array.isArray(${m})`;
        break;
      case "object":
        y = (0, r._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        y = E((0, r._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        y = E();
        break;
      default:
        return (0, r._)`typeof ${m} ${d} ${u}`;
    }
    return c === o.Correct ? y : (0, r.not)(y);
    function E(C = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, C, k ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  me.checkDataType = _;
  function S(u, m, k, c) {
    if (u.length === 1)
      return _(u[0], m, k, c);
    let d;
    const y = (0, s.toHash)(u);
    if (y.array && y.object) {
      const E = (0, r._)`typeof ${m} != "object"`;
      d = y.null ? E : (0, r._)`!${m} || ${E}`, delete y.null, delete y.array, delete y.object;
    } else
      d = r.nil;
    y.number && delete y.integer;
    for (const E in y)
      d = (0, r.and)(d, _(E, m, k, c));
    return d;
  }
  me.checkDataTypes = S;
  const w = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: m }) => typeof u == "string" ? (0, r._)`{type: ${u}}` : (0, r._)`{type: ${m}}`
  };
  function p(u) {
    const m = g(u);
    (0, n.reportError)(m, w);
  }
  me.reportTypeError = p;
  function g(u) {
    const { gen: m, data: k, schema: c } = u, d = (0, s.schemaRefOrVal)(u, c, "type");
    return {
      gen: m,
      keyword: "type",
      data: k,
      schema: c.type,
      schemaCode: d,
      schemaValue: d,
      parentSchema: c,
      params: {},
      it: u
    };
  }
  return me;
}
var $t = {}, ao;
function ha() {
  if (ao) return $t;
  ao = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.assignDefaults = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe();
  function n(s, o) {
    const { properties: i, items: a } = s.schema;
    if (o === "object" && i)
      for (const l in i)
        r(s, l, i[l].default);
    else o === "array" && Array.isArray(a) && a.forEach((l, f) => r(s, f, l.default));
  }
  $t.assignDefaults = n;
  function r(s, o, i) {
    const { gen: a, compositeRule: l, data: f, opts: h } = s;
    if (i === void 0)
      return;
    const v = (0, e._)`${f}${(0, e.getProperty)(o)}`;
    if (l) {
      (0, t.checkStrictMode)(s, `default is ignored for: ${v}`);
      return;
    }
    let $ = (0, e._)`${v} === undefined`;
    h.useDefaults === "empty" && ($ = (0, e._)`${$} || ${v} === null || ${v} === ""`), a.if($, (0, e._)`${v} = ${(0, e.stringify)(i)}`);
  }
  return $t;
}
var Ee = {}, ae = {}, co;
function Fe() {
  if (co) return ae;
  co = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ oe();
  function s(u, m) {
    const { gen: k, data: c, it: d } = u;
    k.if(h(k, c, m, d.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${m}` }, !0), u.error();
    });
  }
  ae.checkReportMissingProp = s;
  function o({ gen: u, data: m, it: { opts: k } }, c, d) {
    return (0, e.or)(...c.map((y) => (0, e.and)(h(u, m, y, k.ownProperties), (0, e._)`${d} = ${y}`)));
  }
  ae.checkMissingProp = o;
  function i(u, m) {
    u.setParams({ missingProperty: m }, !0), u.error();
  }
  ae.reportMissingProp = i;
  function a(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = a;
  function l(u, m, k) {
    return (0, e._)`${a(u)}.call(${m}, ${k})`;
  }
  ae.isOwnProperty = l;
  function f(u, m, k, c) {
    const d = (0, e._)`${m}${(0, e.getProperty)(k)} !== undefined`;
    return c ? (0, e._)`${d} && ${l(u, m, k)}` : d;
  }
  ae.propertyInData = f;
  function h(u, m, k, c) {
    const d = (0, e._)`${m}${(0, e.getProperty)(k)} === undefined`;
    return c ? (0, e.or)(d, (0, e.not)(l(u, m, k))) : d;
  }
  ae.noPropertyInData = h;
  function v(u) {
    return u ? Object.keys(u).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = v;
  function $(u, m) {
    return v(m).filter((k) => !(0, t.alwaysValidSchema)(u, m[k]));
  }
  ae.schemaProperties = $;
  function _({ schemaCode: u, data: m, it: { gen: k, topSchemaRef: c, schemaPath: d, errorPath: y }, it: E }, C, R, A) {
    const P = A ? (0, e._)`${u}, ${m}, ${c}${d}` : m, z = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, y)],
      [n.default.parentData, E.parentData],
      [n.default.parentDataProperty, E.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    E.opts.dynamicRef && z.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const K = (0, e._)`${P}, ${k.object(...z)}`;
    return R !== e.nil ? (0, e._)`${C}.call(${R}, ${K})` : (0, e._)`${C}(${K})`;
  }
  ae.callValidateCode = _;
  const S = (0, e._)`new RegExp`;
  function w({ gen: u, it: { opts: m } }, k) {
    const c = m.unicodeRegExp ? "u" : "", { regExp: d } = m.code, y = d(k, c);
    return u.scopeValue("pattern", {
      key: y.toString(),
      ref: y,
      code: (0, e._)`${d.code === "new RegExp" ? S : (0, r.useFunc)(u, d)}(${k}, ${c})`
    });
  }
  ae.usePattern = w;
  function p(u) {
    const { gen: m, data: k, keyword: c, it: d } = u, y = m.name("valid");
    if (d.allErrors) {
      const C = m.let("valid", !0);
      return E(() => m.assign(C, !1)), C;
    }
    return m.var(y, !0), E(() => m.break()), y;
    function E(C) {
      const R = m.const("len", (0, e._)`${k}.length`);
      m.forRange("i", 0, R, (A) => {
        u.subschema({
          keyword: c,
          dataProp: A,
          dataPropType: t.Type.Num
        }, y), m.if((0, e.not)(y), C);
      });
    }
  }
  ae.validateArray = p;
  function g(u) {
    const { gen: m, schema: k, keyword: c, it: d } = u;
    if (!Array.isArray(k))
      throw new Error("ajv implementation error");
    if (k.some((R) => (0, t.alwaysValidSchema)(d, R)) && !d.opts.unevaluated)
      return;
    const E = m.let("valid", !1), C = m.name("_valid");
    m.block(() => k.forEach((R, A) => {
      const P = u.subschema({
        keyword: c,
        schemaProp: A,
        compositeRule: !0
      }, C);
      m.assign(E, (0, e._)`${E} || ${C}`), u.mergeValidEvaluated(P, C) || m.if((0, e.not)(E));
    })), u.result(E, () => u.reset(), () => u.error(!0));
  }
  return ae.validateUnion = g, ae;
}
var lo;
function ma() {
  if (lo) return Ee;
  lo = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.validateKeywordUsage = Ee.validSchemaType = Ee.funcKeywordCode = Ee.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ qn();
  function s($, _) {
    const { gen: S, keyword: w, schema: p, parentSchema: g, it: u } = $, m = _.macro.call(u.self, p, g, u), k = f(S, w, m);
    u.opts.validateSchema !== !1 && u.self.validateSchema(m, !0);
    const c = S.name("valid");
    $.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${w}`,
      topSchemaRef: k,
      compositeRule: !0
    }, c), $.pass(c, () => $.error(!0));
  }
  Ee.macroKeywordCode = s;
  function o($, _) {
    var S;
    const { gen: w, keyword: p, schema: g, parentSchema: u, $data: m, it: k } = $;
    l(k, _);
    const c = !m && _.compile ? _.compile.call(k.self, g, u, k) : _.validate, d = f(w, p, c), y = w.let("valid");
    $.block$data(y, E), $.ok((S = _.valid) !== null && S !== void 0 ? S : y);
    function E() {
      if (_.errors === !1)
        A(), _.modifying && i($), P(() => $.error());
      else {
        const z = _.async ? C() : R();
        _.modifying && i($), P(() => a($, z));
      }
    }
    function C() {
      const z = w.let("ruleErrs", null);
      return w.try(() => A((0, e._)`await `), (K) => w.assign(y, !1).if((0, e._)`${K} instanceof ${k.ValidationError}`, () => w.assign(z, (0, e._)`${K}.errors`), () => w.throw(K))), z;
    }
    function R() {
      const z = (0, e._)`${d}.errors`;
      return w.assign(z, null), A(e.nil), z;
    }
    function A(z = _.async ? (0, e._)`await ` : e.nil) {
      const K = k.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in _ && !m || _.schema === !1);
      w.assign(y, (0, e._)`${z}${(0, n.callValidateCode)($, d, K, Q)}`, _.modifying);
    }
    function P(z) {
      var K;
      w.if((0, e.not)((K = _.valid) !== null && K !== void 0 ? K : y), z);
    }
  }
  Ee.funcKeywordCode = o;
  function i($) {
    const { gen: _, data: S, it: w } = $;
    _.if(w.parentData, () => _.assign(S, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a($, _) {
    const { gen: S } = $;
    S.if((0, e._)`Array.isArray(${_})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${_} : ${t.default.vErrors}.concat(${_})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)($);
    }, () => $.error());
  }
  function l({ schemaEnv: $ }, _) {
    if (_.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function f($, _, S) {
    if (S === void 0)
      throw new Error(`keyword "${_}" failed to compile`);
    return $.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function h($, _, S = !1) {
    return !_.length || _.some((w) => w === "array" ? Array.isArray($) : w === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == w || S && typeof $ > "u");
  }
  Ee.validSchemaType = h;
  function v({ schema: $, opts: _, self: S, errSchemaPath: w }, p, g) {
    if (Array.isArray(p.keyword) ? !p.keyword.includes(g) : p.keyword !== g)
      throw new Error("ajv implementation error");
    const u = p.dependencies;
    if (u?.some((m) => !Object.prototype.hasOwnProperty.call($, m)))
      throw new Error(`parent schema must have dependencies of ${g}: ${u.join(",")}`);
    if (p.validateSchema && !p.validateSchema($[g])) {
      const k = `keyword "${g}" value is invalid at path "${w}": ` + S.errorsText(p.validateSchema.errors);
      if (_.validateSchema === "log")
        S.logger.error(k);
      else
        throw new Error(k);
    }
  }
  return Ee.validateKeywordUsage = v, Ee;
}
var De = {}, uo;
function ga() {
  if (uo) return De;
  uo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.extendSubschemaMode = De.extendSubschemaData = De.getSubschema = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe();
  function n(o, { keyword: i, schemaProp: a, schema: l, schemaPath: f, errSchemaPath: h, topSchemaRef: v }) {
    if (i !== void 0 && l !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const $ = o.schema[i];
      return a === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${o.errSchemaPath}/${i}`
      } : {
        schema: $[a],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${i}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (l !== void 0) {
      if (f === void 0 || h === void 0 || v === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: f,
        topSchemaRef: v,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  De.getSubschema = n;
  function r(o, i, { dataProp: a, dataPropType: l, data: f, dataTypes: h, propertyName: v }) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = i;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: w, opts: p } = i, g = $.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      _(g), o.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, l, p.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...w, o.parentDataProperty];
    }
    if (f !== void 0) {
      const S = f instanceof e.Name ? f : $.let("data", f, !0);
      _(S), v !== void 0 && (o.propertyName = v);
    }
    h && (o.dataTypes = h);
    function _(S) {
      o.data = S, o.dataLevel = i.dataLevel + 1, o.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), o.parentData = i.data, o.dataNames = [...i.dataNames, S];
    }
  }
  De.extendSubschemaData = r;
  function s(o, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: l, createErrors: f, allErrors: h }) {
    l !== void 0 && (o.compositeRule = l), f !== void 0 && (o.createErrors = f), h !== void 0 && (o.allErrors = h), o.jtdDiscriminator = i, o.jtdMetadata = a;
  }
  return De.extendSubschemaMode = s, De;
}
var $e = {}, er, fo;
function ii() {
  return fo || (fo = 1, er = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, s, o;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (s = r; s-- !== 0; )
          if (!e(t[s], n[s])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
      for (s = r; s-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, o[s])) return !1;
      for (s = r; s-- !== 0; ) {
        var i = o[s];
        if (!e(t[i], n[i])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), er;
}
var tr = { exports: {} }, po;
function ya() {
  if (po) return tr.exports;
  po = 1;
  var e = tr.exports = function(r, s, o) {
    typeof s == "function" && (o = s, s = {}), o = s.cb || o;
    var i = typeof o == "function" ? o : o.pre || function() {
    }, a = o.post || function() {
    };
    t(s, i, a, r, "", r);
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
  function t(r, s, o, i, a, l, f, h, v, $) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      s(i, a, l, f, h, v, $);
      for (var _ in i) {
        var S = i[_];
        if (Array.isArray(S)) {
          if (_ in e.arrayKeywords)
            for (var w = 0; w < S.length; w++)
              t(r, s, o, S[w], a + "/" + _ + "/" + w, l, a, _, i, w);
        } else if (_ in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var p in S)
              t(r, s, o, S[p], a + "/" + _ + "/" + n(p), l, a, _, i, p);
        } else (_ in e.keywords || r.allKeys && !(_ in e.skipKeywords)) && t(r, s, o, S, a + "/" + _, l, a, _, i);
      }
      o(i, a, l, f, h, v, $);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return tr.exports;
}
var ho;
function Vn() {
  if (ho) return $e;
  ho = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.getSchemaRefs = $e.resolveUrl = $e.normalizeId = $e._getFullPath = $e.getFullPath = $e.inlineRef = void 0;
  const e = /* @__PURE__ */ oe(), t = ii(), n = ya(), r = /* @__PURE__ */ new Set([
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
  function s(w, p = !0) {
    return typeof w == "boolean" ? !0 : p === !0 ? !i(w) : p ? a(w) <= p : !1;
  }
  $e.inlineRef = s;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function i(w) {
    for (const p in w) {
      if (o.has(p))
        return !0;
      const g = w[p];
      if (Array.isArray(g) && g.some(i) || typeof g == "object" && i(g))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let p = 0;
    for (const g in w) {
      if (g === "$ref")
        return 1 / 0;
      if (p++, !r.has(g) && (typeof w[g] == "object" && (0, e.eachItem)(w[g], (u) => p += a(u)), p === 1 / 0))
        return 1 / 0;
    }
    return p;
  }
  function l(w, p = "", g) {
    g !== !1 && (p = v(p));
    const u = w.parse(p);
    return f(w, u);
  }
  $e.getFullPath = l;
  function f(w, p) {
    return w.serialize(p).split("#")[0] + "#";
  }
  $e._getFullPath = f;
  const h = /#\/?$/;
  function v(w) {
    return w ? w.replace(h, "") : "";
  }
  $e.normalizeId = v;
  function $(w, p, g) {
    return g = v(g), w.resolve(p, g);
  }
  $e.resolveUrl = $;
  const _ = /^[a-z_][-a-z0-9._]*$/i;
  function S(w, p) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: g, uriResolver: u } = this.opts, m = v(w[g] || p), k = { "": m }, c = l(u, m, !1), d = {}, y = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (R, A, P, z) => {
      if (z === void 0)
        return;
      const K = c + A;
      let Q = k[z];
      typeof R[g] == "string" && (Q = X.call(this, R[g])), se.call(this, R.$anchor), se.call(this, R.$dynamicAnchor), k[A] = Q;
      function X(B) {
        const ee = this.opts.uriResolver.resolve;
        if (B = v(Q ? ee(Q, B) : B), y.has(B))
          throw C(B);
        y.add(B);
        let q = this.refs[B];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? E(R, q.schema, B) : B !== v(K) && (B[0] === "#" ? (E(R, d[B], B), d[B] = R) : this.refs[B] = K), B;
      }
      function se(B) {
        if (typeof B == "string") {
          if (!_.test(B))
            throw new Error(`invalid anchor "${B}"`);
          X.call(this, `#${B}`);
        }
      }
    }), d;
    function E(R, A, P) {
      if (A !== void 0 && !t(R, A))
        throw C(P);
    }
    function C(R) {
      return new Error(`reference "${R}" resolves to more than one schema`);
    }
  }
  return $e.getSchemaRefs = S, $e;
}
var mo;
function Ln() {
  if (mo) return Ie;
  mo = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getData = Ie.KeywordCxt = Ie.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ pa(), t = /* @__PURE__ */ Tn(), n = /* @__PURE__ */ si(), r = /* @__PURE__ */ Tn(), s = /* @__PURE__ */ ha(), o = /* @__PURE__ */ ma(), i = /* @__PURE__ */ ga(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ Ne(), f = /* @__PURE__ */ Vn(), h = /* @__PURE__ */ oe(), v = /* @__PURE__ */ qn();
  function $(N) {
    if (c(N) && (y(N), k(N))) {
      p(N);
      return;
    }
    _(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  Ie.validateFunctionCode = $;
  function _({ gen: N, validateName: T, schema: L, schemaEnv: U, opts: J }, te) {
    J.code.es5 ? N.func(T, (0, a._)`${l.default.data}, ${l.default.valCxt}`, U.$async, () => {
      N.code((0, a._)`"use strict"; ${u(L, J)}`), w(N, J), N.code(te);
    }) : N.func(T, (0, a._)`${l.default.data}, ${S(J)}`, U.$async, () => N.code(u(L, J)).code(te));
  }
  function S(N) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${N.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(N, T) {
    N.if(l.default.valCxt, () => {
      N.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), N.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), N.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), N.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), T.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      N.var(l.default.instancePath, (0, a._)`""`), N.var(l.default.parentData, (0, a._)`undefined`), N.var(l.default.parentDataProperty, (0, a._)`undefined`), N.var(l.default.rootData, l.default.data), T.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function p(N) {
    const { schema: T, opts: L, gen: U } = N;
    _(N, () => {
      L.$comment && T.$comment && z(N), R(N), U.let(l.default.vErrors, null), U.let(l.default.errors, 0), L.unevaluated && g(N), E(N), K(N);
    });
  }
  function g(N) {
    const { gen: T, validateName: L } = N;
    N.evaluated = T.const("evaluated", (0, a._)`${L}.evaluated`), T.if((0, a._)`${N.evaluated}.dynamicProps`, () => T.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), T.if((0, a._)`${N.evaluated}.dynamicItems`, () => T.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function u(N, T) {
    const L = typeof N == "object" && N[T.schemaId];
    return L && (T.code.source || T.code.process) ? (0, a._)`/*# sourceURL=${L} */` : a.nil;
  }
  function m(N, T) {
    if (c(N) && (y(N), k(N))) {
      d(N, T);
      return;
    }
    (0, e.boolOrEmptySchema)(N, T);
  }
  function k({ schema: N, self: T }) {
    if (typeof N == "boolean")
      return !N;
    for (const L in N)
      if (T.RULES.all[L])
        return !0;
    return !1;
  }
  function c(N) {
    return typeof N.schema != "boolean";
  }
  function d(N, T) {
    const { schema: L, gen: U, opts: J } = N;
    J.$comment && L.$comment && z(N), A(N), P(N);
    const te = U.const("_errs", l.default.errors);
    E(N, te), U.var(T, (0, a._)`${te} === ${l.default.errors}`);
  }
  function y(N) {
    (0, h.checkUnknownRules)(N), C(N);
  }
  function E(N, T) {
    if (N.opts.jtd)
      return X(N, [], !1, T);
    const L = (0, t.getSchemaTypes)(N.schema), U = (0, t.coerceAndCheckDataType)(N, L);
    X(N, L, !U, T);
  }
  function C(N) {
    const { schema: T, errSchemaPath: L, opts: U, self: J } = N;
    T.$ref && U.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(T, J.RULES) && J.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function R(N) {
    const { schema: T, opts: L } = N;
    T.default !== void 0 && L.useDefaults && L.strictSchema && (0, h.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function A(N) {
    const T = N.schema[N.opts.schemaId];
    T && (N.baseId = (0, f.resolveUrl)(N.opts.uriResolver, N.baseId, T));
  }
  function P(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function z({ gen: N, schemaEnv: T, schema: L, errSchemaPath: U, opts: J }) {
    const te = L.$comment;
    if (J.$comment === !0)
      N.code((0, a._)`${l.default.self}.logger.log(${te})`);
    else if (typeof J.$comment == "function") {
      const ue = (0, a.str)`${U}/$comment`, ye = N.scopeValue("root", { ref: T.root });
      N.code((0, a._)`${l.default.self}.opts.$comment(${te}, ${ue}, ${ye}.schema)`);
    }
  }
  function K(N) {
    const { gen: T, schemaEnv: L, validateName: U, ValidationError: J, opts: te } = N;
    L.$async ? T.if((0, a._)`${l.default.errors} === 0`, () => T.return(l.default.data), () => T.throw((0, a._)`new ${J}(${l.default.vErrors})`)) : (T.assign((0, a._)`${U}.errors`, l.default.vErrors), te.unevaluated && Q(N), T.return((0, a._)`${l.default.errors} === 0`));
  }
  function Q({ gen: N, evaluated: T, props: L, items: U }) {
    L instanceof a.Name && N.assign((0, a._)`${T}.props`, L), U instanceof a.Name && N.assign((0, a._)`${T}.items`, U);
  }
  function X(N, T, L, U) {
    const { gen: J, schema: te, data: ue, allErrors: ye, opts: pe, self: he } = N, { RULES: le } = he;
    if (te.$ref && (pe.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(te, le))) {
      J.block(() => H(N, "$ref", le.all.$ref.definition));
      return;
    }
    pe.jtd || B(N, T), J.block(() => {
      for (const be of le.rules)
        _e(be);
      _e(le.post);
    });
    function _e(be) {
      (0, n.shouldUseGroup)(te, be) && (be.type ? (J.if((0, r.checkDataType)(be.type, ue, pe.strictNumbers)), se(N, be), T.length === 1 && T[0] === be.type && L && (J.else(), (0, r.reportTypeError)(N)), J.endIf()) : se(N, be), ye || J.if((0, a._)`${l.default.errors} === ${U || 0}`));
    }
  }
  function se(N, T) {
    const { gen: L, schema: U, opts: { useDefaults: J } } = N;
    J && (0, s.assignDefaults)(N, T.type), L.block(() => {
      for (const te of T.rules)
        (0, n.shouldUseRule)(U, te) && H(N, te.keyword, te.definition, T.type);
    });
  }
  function B(N, T) {
    N.schemaEnv.meta || !N.opts.strictTypes || (ee(N, T), N.opts.allowUnionTypes || q(N, T), M(N, N.dataTypes));
  }
  function ee(N, T) {
    if (T.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = T;
        return;
      }
      T.forEach((L) => {
        F(N.dataTypes, L) || x(N, `type "${L}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), b(N, T);
    }
  }
  function q(N, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && x(N, "use allowUnionTypes to allow union type keyword");
  }
  function M(N, T) {
    const L = N.self.RULES.all;
    for (const U in L) {
      const J = L[U];
      if (typeof J == "object" && (0, n.shouldUseRule)(N.schema, J)) {
        const { type: te } = J.definition;
        te.length && !te.some((ue) => D(T, ue)) && x(N, `missing type "${te.join(",")}" for keyword "${U}"`);
      }
    }
  }
  function D(N, T) {
    return N.includes(T) || T === "number" && N.includes("integer");
  }
  function F(N, T) {
    return N.includes(T) || T === "integer" && N.includes("number");
  }
  function b(N, T) {
    const L = [];
    for (const U of N.dataTypes)
      F(T, U) ? L.push(U) : T.includes("integer") && U === "number" && L.push("integer");
    N.dataTypes = L;
  }
  function x(N, T) {
    const L = N.schemaEnv.baseId + N.errSchemaPath;
    T += ` at "${L}" (strictTypes)`, (0, h.checkStrictMode)(N, T, N.opts.strictTypes);
  }
  class I {
    constructor(T, L, U) {
      if ((0, o.validateKeywordUsage)(T, L, U), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = U, this.data = T.data, this.schema = T.schema[U], this.$data = L.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(T, this.schema, U, this.$data), this.schemaType = L.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = L, this.$data)
        this.schemaCode = T.gen.const("vSchema", Y(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${U} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = T.gen.const("_errs", l.default.errors));
    }
    result(T, L, U) {
      this.failResult((0, a.not)(T), L, U);
    }
    failResult(T, L, U) {
      this.gen.if(T), U ? U() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(T, L) {
      this.failResult((0, a.not)(T), void 0, L);
    }
    fail(T) {
      if (T === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(T), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(T) {
      if (!this.$data)
        return this.fail(T);
      const { schemaCode: L } = this;
      this.fail((0, a._)`${L} !== undefined && (${(0, a.or)(this.invalid$data(), T)})`);
    }
    error(T, L, U) {
      if (L) {
        this.setParams(L), this._error(T, U), this.setParams({});
        return;
      }
      this._error(T, U);
    }
    _error(T, L) {
      (T ? v.reportExtraError : v.reportError)(this, this.def.error, L);
    }
    $dataError() {
      (0, v.reportError)(this, this.def.$dataError || v.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, v.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(T) {
      this.allErrors || this.gen.if(T);
    }
    setParams(T, L) {
      L ? Object.assign(this.params, T) : this.params = T;
    }
    block$data(T, L, U = a.nil) {
      this.gen.block(() => {
        this.check$data(T, U), L();
      });
    }
    check$data(T = a.nil, L = a.nil) {
      if (!this.$data)
        return;
      const { gen: U, schemaCode: J, schemaType: te, def: ue } = this;
      U.if((0, a.or)((0, a._)`${J} === undefined`, L)), T !== a.nil && U.assign(T, !0), (te.length || ue.validateSchema) && (U.elseIf(this.invalid$data()), this.$dataError(), T !== a.nil && U.assign(T, !1)), U.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: L, schemaType: U, def: J, it: te } = this;
      return (0, a.or)(ue(), ye());
      function ue() {
        if (U.length) {
          if (!(L instanceof a.Name))
            throw new Error("ajv implementation error");
          const pe = Array.isArray(U) ? U : [U];
          return (0, a._)`${(0, r.checkDataTypes)(pe, L, te.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ye() {
        if (J.validateSchema) {
          const pe = T.scopeValue("validate$data", { ref: J.validateSchema });
          return (0, a._)`!${pe}(${L})`;
        }
        return a.nil;
      }
    }
    subschema(T, L) {
      const U = (0, i.getSubschema)(this.it, T);
      (0, i.extendSubschemaData)(U, this.it, T), (0, i.extendSubschemaMode)(U, T);
      const J = { ...this.it, ...U, items: void 0, props: void 0 };
      return m(J, L), J;
    }
    mergeEvaluated(T, L) {
      const { it: U, gen: J } = this;
      U.opts.unevaluated && (U.props !== !0 && T.props !== void 0 && (U.props = h.mergeEvaluated.props(J, T.props, U.props, L)), U.items !== !0 && T.items !== void 0 && (U.items = h.mergeEvaluated.items(J, T.items, U.items, L)));
    }
    mergeValidEvaluated(T, L) {
      const { it: U, gen: J } = this;
      if (U.opts.unevaluated && (U.props !== !0 || U.items !== !0))
        return J.if(L, () => this.mergeEvaluated(T, a.Name)), !0;
    }
  }
  Ie.KeywordCxt = I;
  function H(N, T, L, U) {
    const J = new I(N, L, T);
    "code" in L ? L.code(J, U) : J.$data && L.validate ? (0, o.funcKeywordCode)(J, L) : "macro" in L ? (0, o.macroKeywordCode)(J, L) : (L.compile || L.validate) && (0, o.funcKeywordCode)(J, L);
  }
  const G = /^\/(?:[^~]|~0|~1)*$/, W = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Y(N, { dataLevel: T, dataNames: L, dataPathArr: U }) {
    let J, te;
    if (N === "")
      return l.default.rootData;
    if (N[0] === "/") {
      if (!G.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      J = N, te = l.default.rootData;
    } else {
      const he = W.exec(N);
      if (!he)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const le = +he[1];
      if (J = he[2], J === "#") {
        if (le >= T)
          throw new Error(pe("property/index", le));
        return U[T - le];
      }
      if (le > T)
        throw new Error(pe("data", le));
      if (te = L[T - le], !J)
        return te;
    }
    let ue = te;
    const ye = J.split("/");
    for (const he of ye)
      he && (te = (0, a._)`${te}${(0, a.getProperty)((0, h.unescapeJsonPointer)(he))}`, ue = (0, a._)`${ue} && ${te}`);
    return ue;
    function pe(he, le) {
      return `Cannot access ${he} ${le} levels up, current level is ${T}`;
    }
  }
  return Ie.getData = Y, Ie;
}
var Tt = {}, go;
function Er() {
  if (go) return Tt;
  go = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Tt.default = e, Tt;
}
var jt = {}, yo;
function Bn() {
  if (yo) return jt;
  yo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vn();
  class t extends Error {
    constructor(r, s, o, i) {
      super(i || `can't resolve reference ${o} from id ${s}`), this.missingRef = (0, e.resolveUrl)(r, s, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return jt.default = t, jt;
}
var we = {}, vo;
function Un() {
  if (vo) return we;
  vo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Er(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ Vn(), s = /* @__PURE__ */ oe(), o = /* @__PURE__ */ Ln();
  class i {
    constructor(g) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof g.schema == "object" && (m = g.schema), this.schema = g.schema, this.schemaId = g.schemaId, this.root = g.root || this, this.baseId = (u = g.baseId) !== null && u !== void 0 ? u : (0, r.normalizeId)(m?.[g.schemaId || "$id"]), this.schemaPath = g.schemaPath, this.localRefs = g.localRefs, this.meta = g.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = i;
  function a(p) {
    const g = h.call(this, p);
    if (g)
      return g;
    const u = (0, r.getFullPath)(this.opts.uriResolver, p.root.baseId), { es5: m, lines: k } = this.opts.code, { ownProperties: c } = this.opts, d = new e.CodeGen(this.scope, { es5: m, lines: k, ownProperties: c });
    let y;
    p.$async && (y = d.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const E = d.scopeName("validate");
    p.validateName = E;
    const C = {
      gen: d,
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
      topSchemaRef: d.scopeValue("schema", this.opts.code.source === !0 ? { ref: p.schema, code: (0, e.stringify)(p.schema) } : { ref: p.schema }),
      validateName: E,
      ValidationError: y,
      schema: p.schema,
      schemaEnv: p,
      rootId: u,
      baseId: p.baseId || u,
      schemaPath: e.nil,
      errSchemaPath: p.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let R;
    try {
      this._compilations.add(p), (0, o.validateFunctionCode)(C), d.optimize(this.opts.code.optimize);
      const A = d.toString();
      R = `${d.scopeRefs(n.default.scope)}return ${A}`, this.opts.code.process && (R = this.opts.code.process(R, p));
      const z = new Function(`${n.default.self}`, `${n.default.scope}`, R)(this, this.scope.get());
      if (this.scope.value(E, { ref: z }), z.errors = null, z.schema = p.schema, z.schemaEnv = p, p.$async && (z.$async = !0), this.opts.code.source === !0 && (z.source = { validateName: E, validateCode: A, scopeValues: d._values }), this.opts.unevaluated) {
        const { props: K, items: Q } = C;
        z.evaluated = {
          props: K instanceof e.Name ? void 0 : K,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: K instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, z.source && (z.source.evaluated = (0, e.stringify)(z.evaluated));
      }
      return p.validate = z, p;
    } catch (A) {
      throw delete p.validate, delete p.validateName, R && this.logger.error("Error compiling schema, function code:", R), A;
    } finally {
      this._compilations.delete(p);
    }
  }
  we.compileSchema = a;
  function l(p, g, u) {
    var m;
    u = (0, r.resolveUrl)(this.opts.uriResolver, g, u);
    const k = p.refs[u];
    if (k)
      return k;
    let c = $.call(this, p, u);
    if (c === void 0) {
      const d = (m = p.localRefs) === null || m === void 0 ? void 0 : m[u], { schemaId: y } = this.opts;
      d && (c = new i({ schema: d, schemaId: y, root: p, baseId: g }));
    }
    if (c !== void 0)
      return p.refs[u] = f.call(this, c);
  }
  we.resolveRef = l;
  function f(p) {
    return (0, r.inlineRef)(p.schema, this.opts.inlineRefs) ? p.schema : p.validate ? p : a.call(this, p);
  }
  function h(p) {
    for (const g of this._compilations)
      if (v(g, p))
        return g;
  }
  we.getCompilingSchema = h;
  function v(p, g) {
    return p.schema === g.schema && p.root === g.root && p.baseId === g.baseId;
  }
  function $(p, g) {
    let u;
    for (; typeof (u = this.refs[g]) == "string"; )
      g = u;
    return u || this.schemas[g] || _.call(this, p, g);
  }
  function _(p, g) {
    const u = this.opts.uriResolver.parse(g), m = (0, r._getFullPath)(this.opts.uriResolver, u);
    let k = (0, r.getFullPath)(this.opts.uriResolver, p.baseId, void 0);
    if (Object.keys(p.schema).length > 0 && m === k)
      return w.call(this, u, p);
    const c = (0, r.normalizeId)(m), d = this.refs[c] || this.schemas[c];
    if (typeof d == "string") {
      const y = _.call(this, p, d);
      return typeof y?.schema != "object" ? void 0 : w.call(this, u, y);
    }
    if (typeof d?.schema == "object") {
      if (d.validate || a.call(this, d), c === (0, r.normalizeId)(g)) {
        const { schema: y } = d, { schemaId: E } = this.opts, C = y[E];
        return C && (k = (0, r.resolveUrl)(this.opts.uriResolver, k, C)), new i({ schema: y, schemaId: E, root: p, baseId: k });
      }
      return w.call(this, u, d);
    }
  }
  we.resolveSchema = _;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(p, { baseId: g, schema: u, root: m }) {
    var k;
    if (((k = p.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/")
      return;
    for (const y of p.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const E = u[(0, s.unescapeFragment)(y)];
      if (E === void 0)
        return;
      u = E;
      const C = typeof u == "object" && u[this.opts.schemaId];
      !S.has(y) && C && (g = (0, r.resolveUrl)(this.opts.uriResolver, g, C));
    }
    let c;
    if (typeof u != "boolean" && u.$ref && !(0, s.schemaHasRulesButRef)(u, this.RULES)) {
      const y = (0, r.resolveUrl)(this.opts.uriResolver, g, u.$ref);
      c = _.call(this, m, y);
    }
    const { schemaId: d } = this.opts;
    if (c = c || new i({ schema: u, schemaId: d, root: m, baseId: g }), c.schema !== c.root.schema)
      return c;
  }
  return we;
}
const va = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", $a = "Meta-schema for $data reference (JSON AnySchema extension proposal)", ba = "object", wa = ["$data"], _a = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Sa = !1, ka = {
  $id: va,
  description: $a,
  type: ba,
  required: wa,
  properties: _a,
  additionalProperties: Sa
};
var It = {}, bt = { exports: {} }, nr, $o;
function ai() {
  if ($o) return nr;
  $o = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), s = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(c) {
    let d = "", y = 0, E = 0;
    for (E = 0; E < c.length; E++)
      if (y = c[E].charCodeAt(0), y !== 48) {
        if (!(y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102))
          return "";
        d += c[E];
        break;
      }
    for (E += 1; E < c.length; E++) {
      if (y = c[E].charCodeAt(0), !(y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102))
        return "";
      d += c[E];
    }
    return d;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, d, y) {
    if (c.length) {
      const E = o(c);
      if (E !== "")
        d.push(E);
      else
        return y.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function f(c) {
    let d = 0;
    const y = { error: !1, address: "", zone: "" }, E = [], C = [];
    let R = !1, A = !1, P = l;
    for (let z = 0; z < c.length; z++) {
      const K = c[z];
      if (!(K === "[" || K === "]"))
        if (K === ":") {
          if (R === !0 && (A = !0), !P(C, E, y))
            break;
          if (++d > 7) {
            y.error = !0;
            break;
          }
          z > 0 && c[z - 1] === ":" && (R = !0), E.push(":");
          continue;
        } else if (K === "%") {
          if (!P(C, E, y))
            break;
          P = a;
        } else {
          C.push(K);
          continue;
        }
    }
    return C.length && (P === a ? y.zone = C.join("") : A ? E.push(C.join("")) : E.push(o(C))), y.address = E.join(""), y;
  }
  function h(c) {
    if (v(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const d = f(c);
    if (d.error)
      return { host: c, isIPV6: !1 };
    {
      let y = d.address, E = d.address;
      return d.zone && (y += "%" + d.zone, E += "%25" + d.zone), { host: y, isIPV6: !0, escapedHost: E };
    }
  }
  function v(c, d) {
    let y = 0;
    for (let E = 0; E < c.length; E++)
      c[E] === d && y++;
    return y;
  }
  function $(c) {
    let d = c;
    const y = [];
    let E = -1, C = 0;
    for (; C = d.length; ) {
      if (C === 1) {
        if (d === ".")
          break;
        if (d === "/") {
          y.push("/");
          break;
        } else {
          y.push(d);
          break;
        }
      } else if (C === 2) {
        if (d[0] === ".") {
          if (d[1] === ".")
            break;
          if (d[1] === "/") {
            d = d.slice(2);
            continue;
          }
        } else if (d[0] === "/" && (d[1] === "." || d[1] === "/")) {
          y.push("/");
          break;
        }
      } else if (C === 3 && d === "/..") {
        y.length !== 0 && y.pop(), y.push("/");
        break;
      }
      if (d[0] === ".") {
        if (d[1] === ".") {
          if (d[2] === "/") {
            d = d.slice(3);
            continue;
          }
        } else if (d[1] === "/") {
          d = d.slice(2);
          continue;
        }
      } else if (d[0] === "/" && d[1] === ".") {
        if (d[2] === "/") {
          d = d.slice(2);
          continue;
        } else if (d[2] === "." && d[3] === "/") {
          d = d.slice(3), y.length !== 0 && y.pop();
          continue;
        }
      }
      if ((E = d.indexOf("/", 1)) === -1) {
        y.push(d);
        break;
      } else
        y.push(d.slice(0, E)), d = d.slice(E);
    }
    return y.join("");
  }
  const _ = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, w = /[@/?#]/g;
  function p(c, d) {
    const y = d ? w : S;
    return y.lastIndex = 0, c.replace(y, (E) => _[E]);
  }
  function g(c, d = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let y = "";
    for (let E = 0; E < c.length; E++) {
      if (c[E] === "%" && E + 2 < c.length) {
        const C = c.slice(E + 1, E + 3);
        if (n(C)) {
          const R = C.toUpperCase(), A = String.fromCharCode(parseInt(R, 16));
          d && r(A) ? y += A : y += "%" + R, E += 2;
          continue;
        }
      }
      y += c[E];
    }
    return y;
  }
  function u(c) {
    let d = "";
    for (let y = 0; y < c.length; y++) {
      if (c[y] === "%" && y + 2 < c.length) {
        const E = c.slice(y + 1, y + 3);
        if (n(E)) {
          const C = E.toUpperCase(), R = String.fromCharCode(parseInt(C, 16));
          R !== "." && r(R) ? d += R : d += "%" + C, y += 2;
          continue;
        }
      }
      s(c[y]) ? d += c[y] : d += escape(c[y]);
    }
    return d;
  }
  function m(c) {
    let d = "";
    for (let y = 0; y < c.length; y++) {
      if (c[y] === "%" && y + 2 < c.length) {
        const E = c.slice(y + 1, y + 3);
        if (n(E)) {
          d += "%" + E.toUpperCase(), y += 2;
          continue;
        }
      }
      d += escape(c[y]);
    }
    return d;
  }
  function k(c) {
    const d = [];
    if (c.userinfo !== void 0 && (d.push(c.userinfo), d.push("@")), c.host !== void 0) {
      let y = unescape(c.host);
      if (!t(y)) {
        const E = h(y);
        E.isIPV6 === !0 ? y = `[${E.escapedHost}]` : y = p(y, !1);
      }
      d.push(y);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (d.push(":"), d.push(String(c.port))), d.length ? d.join("") : void 0;
  }
  return nr = {
    nonSimpleDomain: i,
    recomposeAuthority: k,
    reescapeHostDelimiters: p,
    normalizePercentEncoding: g,
    normalizePathEncoding: u,
    escapePreservingEscapes: m,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: o
  }, nr;
}
var rr, bo;
function Ca() {
  if (bo) return rr;
  bo = 1;
  const { isUUID: e } = ai(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function s(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function o(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function i(c) {
    const d = String(c.scheme).toLowerCase() === "https";
    return (c.port === (d ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = s(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function l(c) {
    if ((c.port === (s(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [d, y] = c.resourceName.split("?");
      c.path = d && d !== "/" ? d : void 0, c.query = y, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function f(c, d) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const y = c.path.match(t);
    if (y) {
      const E = d.scheme || c.scheme || "urn";
      c.nid = y[1].toLowerCase(), c.nss = y[2];
      const C = `${E}:${d.nid || c.nid}`, R = k(C);
      c.path = void 0, R && (c = R.parse(c, d));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function h(c, d) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const y = d.scheme || c.scheme || "urn", E = c.nid.toLowerCase(), C = `${y}:${d.nid || E}`, R = k(C);
    R && (c = R.serialize(c, d));
    const A = c, P = c.nss;
    return A.path = `${E || d.nid}:${P}`, d.skipEscape = !0, A;
  }
  function v(c, d) {
    const y = c;
    return y.uuid = y.nss, y.nss = void 0, !d.tolerant && (!y.uuid || !e(y.uuid)) && (y.error = y.error || "UUID is not valid."), y;
  }
  function $(c) {
    const d = c;
    return d.nss = (c.uuid || "").toLowerCase(), d;
  }
  const _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: i
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: _.domainHost,
      parse: o,
      serialize: i
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: l
    }
  ), p = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: _,
      https: S,
      ws: w,
      wss: p,
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
          parse: v,
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
  return rr = {
    wsIsSecure: s,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: k
  }, rr;
}
var wo;
function Ea() {
  if (wo) return bt.exports;
  wo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: s, escapePreservingEscapes: o, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: l } = ai(), { SCHEMES: f, getSchemeHandler: h } = Ca();
  function v(C, R) {
    return typeof C == "string" ? C = /** @type {T} */
    c(C, R) : typeof C == "object" && (C = /** @type {T} */
    k(w(C, R), R)), C;
  }
  function $(C, R, A) {
    const P = A ? Object.assign({ scheme: "null" }, A) : { scheme: "null" }, z = _(k(C, P), k(R, P), P, !0);
    return P.skipEscape = !0, w(z, P);
  }
  function _(C, R, A, P) {
    const z = {};
    return P || (C = k(w(C, A), A), R = k(w(R, A), A)), A = A || {}, !A.tolerant && R.scheme ? (z.scheme = R.scheme, z.userinfo = R.userinfo, z.host = R.host, z.port = R.port, z.path = t(R.path || ""), z.query = R.query) : (R.userinfo !== void 0 || R.host !== void 0 || R.port !== void 0 ? (z.userinfo = R.userinfo, z.host = R.host, z.port = R.port, z.path = t(R.path || ""), z.query = R.query) : (R.path ? (R.path[0] === "/" ? z.path = t(R.path) : ((C.userinfo !== void 0 || C.host !== void 0 || C.port !== void 0) && !C.path ? z.path = "/" + R.path : C.path ? z.path = C.path.slice(0, C.path.lastIndexOf("/") + 1) + R.path : z.path = R.path, z.path = t(z.path)), z.query = R.query) : (z.path = C.path, R.query !== void 0 ? z.query = R.query : z.query = C.query), z.userinfo = C.userinfo, z.host = C.host, z.port = C.port), z.scheme = C.scheme), z.fragment = R.fragment, z;
  }
  function S(C, R, A) {
    const P = y(C, A), z = y(R, A);
    return P !== void 0 && z !== void 0 && P.toLowerCase() === z.toLowerCase();
  }
  function w(C, R) {
    const A = {
      host: C.host,
      scheme: C.scheme,
      userinfo: C.userinfo,
      port: C.port,
      path: C.path,
      query: C.query,
      nid: C.nid,
      nss: C.nss,
      uuid: C.uuid,
      fragment: C.fragment,
      reference: C.reference,
      resourceName: C.resourceName,
      secure: C.secure,
      error: ""
    }, P = Object.assign({}, R), z = [], K = h(P.scheme || A.scheme);
    K && K.serialize && K.serialize(A, P), A.path !== void 0 && (P.skipEscape ? A.path = r(A.path) : (A.path = o(A.path), A.scheme !== void 0 && (A.path = A.path.split("%3A").join(":")))), P.reference !== "suffix" && A.scheme && z.push(A.scheme, ":");
    const Q = n(A);
    if (Q !== void 0 && (P.reference !== "suffix" && z.push("//"), z.push(Q), A.path && A.path[0] !== "/" && z.push("/")), A.path !== void 0) {
      let X = A.path;
      !P.absolutePath && (!K || !K.absolutePath) && (X = t(X)), Q === void 0 && X[0] === "/" && X[1] === "/" && (X = "/%2F" + X.slice(2)), z.push(X);
    }
    return A.query !== void 0 && z.push("?", A.query), A.fragment !== void 0 && z.push("#", A.fragment), z.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, g = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(C, R) {
    if (R[2] !== void 0 && C.path && C.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof C.port == "number" && (C.port < 0 || C.port > 65535))
      return "URI port is malformed.";
  }
  function m(C, R) {
    const A = Object.assign({}, R), P = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let z = !1, K = !1;
    A.reference === "suffix" && (A.scheme ? C = A.scheme + ":" + C : C = "//" + C);
    const Q = C.match(g);
    Q !== null && Q[1].indexOf("\\") !== -1 && (P.error = "URI authority must not contain a literal backslash.", z = !0);
    const X = C.match(p);
    if (X) {
      P.scheme = X[1], P.userinfo = X[3], P.host = X[4], P.port = parseInt(X[5], 10), P.path = X[6] || "", P.query = X[7], P.fragment = X[8], isNaN(P.port) && (P.port = X[5]);
      const se = u(P, X);
      if (se !== void 0 && (P.error = P.error || se, z = !0), P.host)
        if (a(P.host) === !1) {
          const q = e(P.host);
          P.host = q.host.toLowerCase(), K = q.isIPV6;
        } else
          K = !0;
      P.scheme === void 0 && P.userinfo === void 0 && P.host === void 0 && P.port === void 0 && P.query === void 0 && !P.path ? P.reference = "same-document" : P.scheme === void 0 ? P.reference = "relative" : P.fragment === void 0 ? P.reference = "absolute" : P.reference = "uri", A.reference && A.reference !== "suffix" && A.reference !== P.reference && (P.error = P.error || "URI is not a " + A.reference + " reference.");
      const B = h(A.scheme || P.scheme);
      if (!A.unicodeSupport && (!B || !B.unicodeSupport) && P.host && (A.domainHost || B && B.domainHost) && K === !1 && l(P.host))
        try {
          P.host = new URL("http://" + P.host).hostname;
        } catch (ee) {
          P.error = P.error || "Host's domain name can not be converted to ASCII: " + ee;
        }
      if ((!B || B && !B.skipNormalize) && (C.indexOf("%") !== -1 && (P.scheme !== void 0 && (P.scheme = unescape(P.scheme)), P.host !== void 0 && (P.host = i(unescape(P.host), K))), P.path && (P.path = s(P.path)), P.fragment))
        try {
          P.fragment = encodeURI(decodeURIComponent(P.fragment));
        } catch {
          P.error = P.error || "URI malformed";
        }
      B && B.parse && B.parse(P, A);
    } else
      P.error = P.error || "URI can not be parsed.";
    return { parsed: P, malformedAuthorityOrPort: z };
  }
  function k(C, R) {
    return m(C, R).parsed;
  }
  function c(C, R) {
    return d(C, R).normalized;
  }
  function d(C, R) {
    const { parsed: A, malformedAuthorityOrPort: P } = m(C, R);
    return {
      normalized: P ? C : w(A, R),
      malformedAuthorityOrPort: P
    };
  }
  function y(C, R) {
    if (typeof C == "string") {
      const { normalized: A, malformedAuthorityOrPort: P } = d(C, R);
      return P ? void 0 : A;
    }
    if (typeof C == "object")
      return w(C, R);
  }
  const E = {
    SCHEMES: f,
    normalize: v,
    resolve: $,
    resolveComponent: _,
    equal: S,
    serialize: w,
    parse: k
  };
  return bt.exports = E, bt.exports.default = E, bt.exports.fastUri = E, bt.exports;
}
var _o;
function xa() {
  if (_o) return It;
  _o = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = Ea();
  return e.code = 'require("ajv/dist/runtime/uri").default', It.default = e, It;
}
var So;
function Pa() {
  return So || (So = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Ln();
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
    const r = /* @__PURE__ */ Er(), s = /* @__PURE__ */ Bn(), o = /* @__PURE__ */ oi(), i = /* @__PURE__ */ Un(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ Vn(), f = /* @__PURE__ */ Tn(), h = /* @__PURE__ */ oe(), v = ka, $ = /* @__PURE__ */ xa(), _ = (q, M) => new RegExp(q, M);
    _.code = "new RegExp";
    const S = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
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
    }, g = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function m(q) {
      var M, D, F, b, x, I, H, G, W, Y, N, T, L, U, J, te, ue, ye, pe, he, le, _e, be, Hn, Gn;
      const yt = q.strict, Wn = (M = q.code) === null || M === void 0 ? void 0 : M.optimize, Br = Wn === !0 || Wn === void 0 ? 1 : Wn || 0, Ur = (F = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && F !== void 0 ? F : _, Pi = (b = q.uriResolver) !== null && b !== void 0 ? b : $.default;
      return {
        strictSchema: (I = (x = q.strictSchema) !== null && x !== void 0 ? x : yt) !== null && I !== void 0 ? I : !0,
        strictNumbers: (G = (H = q.strictNumbers) !== null && H !== void 0 ? H : yt) !== null && G !== void 0 ? G : !0,
        strictTypes: (Y = (W = q.strictTypes) !== null && W !== void 0 ? W : yt) !== null && Y !== void 0 ? Y : "log",
        strictTuples: (T = (N = q.strictTuples) !== null && N !== void 0 ? N : yt) !== null && T !== void 0 ? T : "log",
        strictRequired: (U = (L = q.strictRequired) !== null && L !== void 0 ? L : yt) !== null && U !== void 0 ? U : !1,
        code: q.code ? { ...q.code, optimize: Br, regExp: Ur } : { optimize: Br, regExp: Ur },
        loopRequired: (J = q.loopRequired) !== null && J !== void 0 ? J : u,
        loopEnum: (te = q.loopEnum) !== null && te !== void 0 ? te : u,
        meta: (ue = q.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (ye = q.messages) !== null && ye !== void 0 ? ye : !0,
        inlineRefs: (pe = q.inlineRefs) !== null && pe !== void 0 ? pe : !0,
        schemaId: (he = q.schemaId) !== null && he !== void 0 ? he : "$id",
        addUsedSchema: (le = q.addUsedSchema) !== null && le !== void 0 ? le : !0,
        validateSchema: (_e = q.validateSchema) !== null && _e !== void 0 ? _e : !0,
        validateFormats: (be = q.validateFormats) !== null && be !== void 0 ? be : !0,
        unicodeRegExp: (Hn = q.unicodeRegExp) !== null && Hn !== void 0 ? Hn : !0,
        int32range: (Gn = q.int32range) !== null && Gn !== void 0 ? Gn : !0,
        uriResolver: Pi
      };
    }
    class k {
      constructor(M = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), M = this.opts = { ...M, ...m(M) };
        const { es5: D, lines: F } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: D, lines: F }), this.logger = P(M.logger);
        const b = M.validateFormats;
        M.validateFormats = !1, this.RULES = (0, o.getRules)(), c.call(this, p, M, "NOT SUPPORTED"), c.call(this, g, M, "DEPRECATED", "warn"), this._metaOpts = R.call(this), M.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords && C.call(this, M.keywords), typeof M.meta == "object" && this.addMetaSchema(M.meta), y.call(this), M.validateFormats = b;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: M, meta: D, schemaId: F } = this.opts;
        let b = v;
        F === "id" && (b = { ...v }, b.id = b.$id, delete b.$id), D && M && this.addMetaSchema(b, b[F], !1);
      }
      defaultMeta() {
        const { meta: M, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof M == "object" ? M[D] || M : void 0;
      }
      validate(M, D) {
        let F;
        if (typeof M == "string") {
          if (F = this.getSchema(M), !F)
            throw new Error(`no schema with key or ref "${M}"`);
        } else
          F = this.compile(M);
        const b = F(D);
        return "$async" in F || (this.errors = F.errors), b;
      }
      compile(M, D) {
        const F = this._addSchema(M, D);
        return F.validate || this._compileSchemaEnv(F);
      }
      compileAsync(M, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: F } = this.opts;
        return b.call(this, M, D);
        async function b(Y, N) {
          await x.call(this, Y.$schema);
          const T = this._addSchema(Y, N);
          return T.validate || I.call(this, T);
        }
        async function x(Y) {
          Y && !this.getSchema(Y) && await b.call(this, { $ref: Y }, !0);
        }
        async function I(Y) {
          try {
            return this._compileSchemaEnv(Y);
          } catch (N) {
            if (!(N instanceof s.default))
              throw N;
            return H.call(this, N), await G.call(this, N.missingSchema), I.call(this, Y);
          }
        }
        function H({ missingSchema: Y, missingRef: N }) {
          if (this.refs[Y])
            throw new Error(`AnySchema ${Y} is loaded but ${N} cannot be resolved`);
        }
        async function G(Y) {
          const N = await W.call(this, Y);
          this.refs[Y] || await x.call(this, N.$schema), this.refs[Y] || this.addSchema(N, Y, D);
        }
        async function W(Y) {
          const N = this._loading[Y];
          if (N)
            return N;
          try {
            return await (this._loading[Y] = F(Y));
          } finally {
            delete this._loading[Y];
          }
        }
      }
      // Adds schema to the instance
      addSchema(M, D, F, b = this.opts.validateSchema) {
        if (Array.isArray(M)) {
          for (const I of M)
            this.addSchema(I, void 0, F, b);
          return this;
        }
        let x;
        if (typeof M == "object") {
          const { schemaId: I } = this.opts;
          if (x = M[I], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return D = (0, l.normalizeId)(D || x), this._checkUnique(D), this.schemas[D] = this._addSchema(M, F, D, b, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(M, D, F = this.opts.validateSchema) {
        return this.addSchema(M, D, !0, F), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(M, D) {
        if (typeof M == "boolean")
          return !0;
        let F;
        if (F = M.$schema, F !== void 0 && typeof F != "string")
          throw new Error("$schema must be a string");
        if (F = F || this.opts.defaultMeta || this.defaultMeta(), !F)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const b = this.validate(F, M);
        if (!b && D) {
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
        }
        return b;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(M) {
        let D;
        for (; typeof (D = d.call(this, M)) == "string"; )
          M = D;
        if (D === void 0) {
          const { schemaId: F } = this.opts, b = new i.SchemaEnv({ schema: {}, schemaId: F });
          if (D = i.resolveSchema.call(this, b, M), !D)
            return;
          this.refs[M] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(M) {
        if (M instanceof RegExp)
          return this._removeAllSchemas(this.schemas, M), this._removeAllSchemas(this.refs, M), this;
        switch (typeof M) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const D = d.call(this, M);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[M], delete this.refs[M], this;
          }
          case "object": {
            const D = M;
            this._cache.delete(D);
            let F = M[this.opts.schemaId];
            return F && (F = (0, l.normalizeId)(F), delete this.schemas[F], delete this.refs[F]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(M) {
        for (const D of M)
          this.addKeyword(D);
        return this;
      }
      addKeyword(M, D) {
        let F;
        if (typeof M == "string")
          F = M, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = F);
        else if (typeof M == "object" && D === void 0) {
          if (D = M, F = D.keyword, Array.isArray(F) && !F.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (K.call(this, F, D), !D)
          return (0, h.eachItem)(F, (x) => Q.call(this, x)), this;
        se.call(this, D);
        const b = {
          ...D,
          type: (0, f.getJSONTypes)(D.type),
          schemaType: (0, f.getJSONTypes)(D.schemaType)
        };
        return (0, h.eachItem)(F, b.type.length === 0 ? (x) => Q.call(this, x, b) : (x) => b.type.forEach((I) => Q.call(this, x, b, I))), this;
      }
      getKeyword(M) {
        const D = this.RULES.all[M];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(M) {
        const { RULES: D } = this;
        delete D.keywords[M], delete D.all[M];
        for (const F of D.rules) {
          const b = F.rules.findIndex((x) => x.keyword === M);
          b >= 0 && F.rules.splice(b, 1);
        }
        return this;
      }
      // Add format
      addFormat(M, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[M] = D, this;
      }
      errorsText(M = this.errors, { separator: D = ", ", dataVar: F = "data" } = {}) {
        return !M || M.length === 0 ? "No errors" : M.map((b) => `${F}${b.instancePath} ${b.message}`).reduce((b, x) => b + D + x);
      }
      $dataMetaSchema(M, D) {
        const F = this.RULES.all;
        M = JSON.parse(JSON.stringify(M));
        for (const b of D) {
          const x = b.split("/").slice(1);
          let I = M;
          for (const H of x)
            I = I[H];
          for (const H in F) {
            const G = F[H];
            if (typeof G != "object")
              continue;
            const { $data: W } = G.definition, Y = I[H];
            W && Y && (I[H] = ee(Y));
          }
        }
        return M;
      }
      _removeAllSchemas(M, D) {
        for (const F in M) {
          const b = M[F];
          (!D || D.test(F)) && (typeof b == "string" ? delete M[F] : b && !b.meta && (this._cache.delete(b.schema), delete M[F]));
        }
      }
      _addSchema(M, D, F, b = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let I;
        const { schemaId: H } = this.opts;
        if (typeof M == "object")
          I = M[H];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof M != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let G = this._cache.get(M);
        if (G !== void 0)
          return G;
        F = (0, l.normalizeId)(I || F);
        const W = l.getSchemaRefs.call(this, M, F);
        return G = new i.SchemaEnv({ schema: M, schemaId: H, meta: D, baseId: F, localRefs: W }), this._cache.set(G.schema, G), x && !F.startsWith("#") && (F && this._checkUnique(F), this.refs[F] = G), b && this.validateSchema(M, !0), G;
      }
      _checkUnique(M) {
        if (this.schemas[M] || this.refs[M])
          throw new Error(`schema with key or id "${M}" already exists`);
      }
      _compileSchemaEnv(M) {
        if (M.meta ? this._compileMetaSchema(M) : i.compileSchema.call(this, M), !M.validate)
          throw new Error("ajv implementation error");
        return M.validate;
      }
      _compileMetaSchema(M) {
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, M);
        } finally {
          this.opts = D;
        }
      }
    }
    k.ValidationError = r.default, k.MissingRefError = s.default, e.default = k;
    function c(q, M, D, F = "error") {
      for (const b in q) {
        const x = b;
        x in M && this.logger[F](`${D}: option ${b}. ${q[x]}`);
      }
    }
    function d(q) {
      return q = (0, l.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function y() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const M in q)
            this.addSchema(q[M], M);
    }
    function E() {
      for (const q in this.opts.formats) {
        const M = this.opts.formats[q];
        M && this.addFormat(q, M);
      }
    }
    function C(q) {
      if (Array.isArray(q)) {
        this.addVocabulary(q);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const M in q) {
        const D = q[M];
        D.keyword || (D.keyword = M), this.addKeyword(D);
      }
    }
    function R() {
      const q = { ...this.opts };
      for (const M of S)
        delete q[M];
      return q;
    }
    const A = { log() {
    }, warn() {
    }, error() {
    } };
    function P(q) {
      if (q === !1)
        return A;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const z = /^[a-z_$][a-z0-9_$:-]*$/i;
    function K(q, M) {
      const { RULES: D } = this;
      if ((0, h.eachItem)(q, (F) => {
        if (D.keywords[F])
          throw new Error(`Keyword ${F} is already defined`);
        if (!z.test(F))
          throw new Error(`Keyword ${F} has invalid name`);
      }), !!M && M.$data && !("code" in M || "validate" in M))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(q, M, D) {
      var F;
      const b = M?.post;
      if (D && b)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let I = b ? x.post : x.rules.find(({ type: G }) => G === D);
      if (I || (I = { type: D, rules: [] }, x.rules.push(I)), x.keywords[q] = !0, !M)
        return;
      const H = {
        keyword: q,
        definition: {
          ...M,
          type: (0, f.getJSONTypes)(M.type),
          schemaType: (0, f.getJSONTypes)(M.schemaType)
        }
      };
      M.before ? X.call(this, I, H, M.before) : I.rules.push(H), x.all[q] = H, (F = M.implements) === null || F === void 0 || F.forEach((G) => this.addKeyword(G));
    }
    function X(q, M, D) {
      const F = q.rules.findIndex((b) => b.keyword === D);
      F >= 0 ? q.rules.splice(F, 0, M) : (q.rules.push(M), this.logger.warn(`rule ${D} is not defined`));
    }
    function se(q) {
      let { metaSchema: M } = q;
      M !== void 0 && (q.$data && this.opts.$data && (M = ee(M)), q.validateSchema = this.compile(M, !0));
    }
    const B = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ee(q) {
      return { anyOf: [q, B] };
    }
  })(Jn)), Jn;
}
var zt = {}, Dt = {}, qt = {}, ko;
function Aa() {
  if (ko) return qt;
  ko = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return qt.default = e, qt;
}
var Be = {}, Co;
function xr() {
  if (Co) return Be;
  Co = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.callRef = Be.getValidate = void 0;
  const e = /* @__PURE__ */ Bn(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ ne(), r = /* @__PURE__ */ Ne(), s = /* @__PURE__ */ Un(), o = /* @__PURE__ */ oe(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(f) {
      const { gen: h, schema: v, it: $ } = f, { baseId: _, schemaEnv: S, validateName: w, opts: p, self: g } = $, { root: u } = S;
      if ((v === "#" || v === "#/") && _ === u.baseId)
        return k();
      const m = s.resolveRef.call(g, u, _, v);
      if (m === void 0)
        throw new e.default($.opts.uriResolver, _, v);
      if (m instanceof s.SchemaEnv)
        return c(m);
      return d(m);
      function k() {
        if (S === u)
          return l(f, w, S, S.$async);
        const y = h.scopeValue("root", { ref: u });
        return l(f, (0, n._)`${y}.validate`, u, u.$async);
      }
      function c(y) {
        const E = a(f, y);
        l(f, E, y, y.$async);
      }
      function d(y) {
        const E = h.scopeValue("schema", p.code.source === !0 ? { ref: y, code: (0, n.stringify)(y) } : { ref: y }), C = h.name("valid"), R = f.subschema({
          schema: y,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: E,
          errSchemaPath: v
        }, C);
        f.mergeEvaluated(R), f.ok(C);
      }
    }
  };
  function a(f, h) {
    const { gen: v } = f;
    return h.validate ? v.scopeValue("validate", { ref: h.validate }) : (0, n._)`${v.scopeValue("wrapper", { ref: h })}.validate`;
  }
  Be.getValidate = a;
  function l(f, h, v, $) {
    const { gen: _, it: S } = f, { allErrors: w, schemaEnv: p, opts: g } = S, u = g.passContext ? r.default.this : n.nil;
    $ ? m() : k();
    function m() {
      if (!p.$async)
        throw new Error("async schema referenced by sync schema");
      const y = _.let("valid");
      _.try(() => {
        _.code((0, n._)`await ${(0, t.callValidateCode)(f, h, u)}`), d(h), w || _.assign(y, !0);
      }, (E) => {
        _.if((0, n._)`!(${E} instanceof ${S.ValidationError})`, () => _.throw(E)), c(E), w || _.assign(y, !1);
      }), f.ok(y);
    }
    function k() {
      f.result((0, t.callValidateCode)(f, h, u), () => d(h), () => c(h));
    }
    function c(y) {
      const E = (0, n._)`${y}.errors`;
      _.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${E} : ${r.default.vErrors}.concat(${E})`), _.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function d(y) {
      var E;
      if (!S.opts.unevaluated)
        return;
      const C = (E = v?.validate) === null || E === void 0 ? void 0 : E.evaluated;
      if (S.props !== !0)
        if (C && !C.dynamicProps)
          C.props !== void 0 && (S.props = o.mergeEvaluated.props(_, C.props, S.props));
        else {
          const R = _.var("props", (0, n._)`${y}.evaluated.props`);
          S.props = o.mergeEvaluated.props(_, R, S.props, n.Name);
        }
      if (S.items !== !0)
        if (C && !C.dynamicItems)
          C.items !== void 0 && (S.items = o.mergeEvaluated.items(_, C.items, S.items));
        else {
          const R = _.var("items", (0, n._)`${y}.evaluated.items`);
          S.items = o.mergeEvaluated.items(_, R, S.items, n.Name);
        }
    }
  }
  return Be.callRef = l, Be.default = i, Be;
}
var Eo;
function Ra() {
  if (Eo) return Dt;
  Eo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Aa(), t = /* @__PURE__ */ xr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Dt.default = n, Dt;
}
var Vt = {}, Lt = {}, xo;
function Ma() {
  if (xo) return Lt;
  xo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: o, schemaCode: i }) => (0, e.str)`must be ${n[o].okStr} ${i}`,
    params: ({ keyword: o, schemaCode: i }) => (0, e._)`{comparison: ${n[o].okStr}, limit: ${i}}`
  }, s = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(o) {
      const { keyword: i, data: a, schemaCode: l } = o;
      o.fail$data((0, e._)`${a} ${n[i].fail} ${l} || isNaN(${a})`);
    }
  };
  return Lt.default = s, Lt;
}
var Bt = {}, Po;
function Na() {
  if (Po) return Bt;
  Po = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
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
      const { gen: s, data: o, schemaCode: i, it: a } = r, l = a.opts.multipleOfPrecision, f = s.let("res"), h = l ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${l}` : (0, e._)`${f} !== parseInt(${f})`;
      r.fail$data((0, e._)`(${i} === 0 || (${f} = ${o}/${i}, ${h}))`);
    }
  };
  return Bt.default = n, Bt;
}
var Ut = {}, Kt = {}, Ao;
function Fa() {
  if (Ao) return Kt;
  Ao = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, s = 0, o;
    for (; s < n; )
      r++, o = t.charCodeAt(s++), o >= 55296 && o <= 56319 && s < n && (o = t.charCodeAt(s), (o & 64512) === 56320 && s++);
    return r;
  }
  return Kt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Kt;
}
var Ro;
function Oa() {
  if (Ro) return Ut;
  Ro = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Fa(), s = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: i }) {
        const a = o === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${i} characters`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: i, data: a, schemaCode: l, it: f } = o, h = i === "maxLength" ? e.operators.GT : e.operators.LT, v = f.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${v} ${h} ${l}`);
    }
  };
  return Ut.default = s, Ut;
}
var Ht = {}, Mo;
function Ta() {
  if (Mo) return Ht;
  Mo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ne(), s = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: i, data: a, $data: l, schema: f, schemaCode: h, it: v } = o, $ = v.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: _ } = v.opts.code, S = _.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, _), w = i.let("valid");
        i.try(() => i.assign(w, (0, n._)`${S}(${h}, ${$}).test(${a})`), () => i.assign(w, !1)), o.fail$data((0, n._)`!${w}`);
      } else {
        const _ = (0, e.usePattern)(o, f);
        o.fail$data((0, n._)`!${_}.test(${a})`);
      }
    }
  };
  return Ht.default = s, Ht;
}
var Gt = {}, No;
function ja() {
  if (No) return Gt;
  No = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: s }) {
        const o = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${s} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: s, data: o, schemaCode: i } = r, a = s === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${o}).length ${a} ${i}`);
    }
  };
  return Gt.default = n, Gt;
}
var Wt = {}, Fo;
function Ia() {
  if (Fo) return Wt;
  Fo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), s = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: i, schema: a, schemaCode: l, data: f, $data: h, it: v } = o, { opts: $ } = v;
      if (!h && a.length === 0)
        return;
      const _ = a.length >= $.loopRequired;
      if (v.allErrors ? S() : w(), $.strictRequired) {
        const u = o.parentSchema.properties, { definedProperties: m } = o.it;
        for (const k of a)
          if (u?.[k] === void 0 && !m.has(k)) {
            const c = v.schemaEnv.baseId + v.errSchemaPath, d = `required property "${k}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(v, d, v.opts.strictRequired);
          }
      }
      function S() {
        if (_ || h)
          o.block$data(t.nil, p);
        else
          for (const u of a)
            (0, e.checkReportMissingProp)(o, u);
      }
      function w() {
        const u = i.let("missing");
        if (_ || h) {
          const m = i.let("valid", !0);
          o.block$data(m, () => g(u, m)), o.ok(m);
        } else
          i.if((0, e.checkMissingProp)(o, a, u)), (0, e.reportMissingProp)(o, u), i.else();
      }
      function p() {
        i.forOf("prop", l, (u) => {
          o.setParams({ missingProperty: u }), i.if((0, e.noPropertyInData)(i, f, u, $.ownProperties), () => o.error());
        });
      }
      function g(u, m) {
        o.setParams({ missingProperty: u }), i.forOf(u, l, () => {
          i.assign(m, (0, e.propertyInData)(i, f, u, $.ownProperties)), i.if((0, t.not)(m), () => {
            o.error(), i.break();
          });
        }, t.nil);
      }
    }
  };
  return Wt.default = s, Wt;
}
var Jt = {}, Oo;
function za() {
  if (Oo) return Jt;
  Oo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: s }) {
        const o = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${s} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: s, data: o, schemaCode: i } = r, a = s === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${o}.length ${a} ${i}`);
    }
  };
  return Jt.default = n, Jt;
}
var Yt = {}, Xt = {}, To;
function Pr() {
  if (To) return Xt;
  To = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = ii();
  return e.code = 'require("ajv/dist/runtime/equal").default', Xt.default = e, Xt;
}
var jo;
function Da() {
  if (jo) return Yt;
  jo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Pr(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: l, $data: f, schema: h, parentSchema: v, schemaCode: $, it: _ } = i;
      if (!f && !h)
        return;
      const S = a.let("valid"), w = v.items ? (0, e.getSchemaTypes)(v.items) : [];
      i.block$data(S, p, (0, t._)`${$} === false`), i.ok(S);
      function p() {
        const k = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        i.setParams({ i: k, j: c }), a.assign(S, !0), a.if((0, t._)`${k} > 1`, () => (g() ? u : m)(k, c));
      }
      function g() {
        return w.length > 0 && !w.some((k) => k === "object" || k === "array");
      }
      function u(k, c) {
        const d = a.name("item"), y = (0, e.checkDataTypes)(w, d, _.opts.strictNumbers, e.DataType.Wrong), E = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${k}--;`, () => {
          a.let(d, (0, t._)`${l}[${k}]`), a.if(y, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${d} == "string"`, (0, t._)`${d} += "_"`), a.if((0, t._)`typeof ${E}[${d}] == "number"`, () => {
            a.assign(c, (0, t._)`${E}[${d}]`), i.error(), a.assign(S, !1).break();
          }).code((0, t._)`${E}[${d}] = ${k}`);
        });
      }
      function m(k, c) {
        const d = (0, n.useFunc)(a, r.default), y = a.name("outer");
        a.label(y).for((0, t._)`;${k}--;`, () => a.for((0, t._)`${c} = ${k}; ${c}--;`, () => a.if((0, t._)`${d}(${l}[${k}], ${l}[${c}])`, () => {
          i.error(), a.assign(S, !1).break(y);
        })));
      }
    }
  };
  return Yt.default = o, Yt;
}
var Zt = {}, Io;
function qa() {
  if (Io) return Zt;
  Io = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Pr(), s = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: i, data: a, $data: l, schemaCode: f, schema: h } = o;
      l || h && typeof h == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${a}, ${f})`) : o.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return Zt.default = s, Zt;
}
var Qt = {}, zo;
function Va() {
  if (zo) return Qt;
  zo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Pr(), s = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: i, data: a, $data: l, schema: f, schemaCode: h, it: v } = o;
      if (!l && f.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = f.length >= v.opts.loopEnum;
      let _;
      const S = () => _ ?? (_ = (0, t.useFunc)(i, n.default));
      let w;
      if ($ || l)
        w = i.let("valid"), o.block$data(w, p);
      else {
        if (!Array.isArray(f))
          throw new Error("ajv implementation error");
        const u = i.const("vSchema", h);
        w = (0, e.or)(...f.map((m, k) => g(u, k)));
      }
      o.pass(w);
      function p() {
        i.assign(w, !1), i.forOf("v", h, (u) => i.if((0, e._)`${S()}(${a}, ${u})`, () => i.assign(w, !0).break()));
      }
      function g(u, m) {
        const k = f[m];
        return typeof k == "object" && k !== null ? (0, e._)`${S()}(${a}, ${u}[${m}])` : (0, e._)`${a} === ${k}`;
      }
    }
  };
  return Qt.default = s, Qt;
}
var Do;
function La() {
  if (Do) return Vt;
  Do = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ma(), t = /* @__PURE__ */ Na(), n = /* @__PURE__ */ Oa(), r = /* @__PURE__ */ Ta(), s = /* @__PURE__ */ ja(), o = /* @__PURE__ */ Ia(), i = /* @__PURE__ */ za(), a = /* @__PURE__ */ Da(), l = /* @__PURE__ */ qa(), f = /* @__PURE__ */ Va(), h = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    s.default,
    o.default,
    // array
    i.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    l.default,
    f.default
  ];
  return Vt.default = h, Vt;
}
var en = {}, nt = {}, qo;
function ci() {
  if (qo) return nt;
  qo = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: i, it: a } = o, { items: l } = i;
      if (!Array.isArray(l)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      s(o, l);
    }
  };
  function s(o, i) {
    const { gen: a, schema: l, data: f, keyword: h, it: v } = o;
    v.items = !0;
    const $ = a.const("len", (0, e._)`${f}.length`);
    if (l === !1)
      o.setParams({ len: i.length }), o.pass((0, e._)`${$} <= ${i.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(v, l)) {
      const S = a.var("valid", (0, e._)`${$} <= ${i.length}`);
      a.if((0, e.not)(S), () => _(S)), o.ok(S);
    }
    function _(S) {
      a.forRange("i", i.length, $, (w) => {
        o.subschema({ keyword: h, dataProp: w, dataPropType: t.Type.Num }, S), v.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return nt.validateAdditionalItems = s, nt.default = r, nt;
}
var tn = {}, rt = {}, Vo;
function li() {
  if (Vo) return rt;
  Vo = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.validateTuple = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Fe(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(o) {
      const { schema: i, it: a } = o;
      if (Array.isArray(i))
        return s(o, "additionalItems", i);
      a.items = !0, !(0, t.alwaysValidSchema)(a, i) && o.ok((0, n.validateArray)(o));
    }
  };
  function s(o, i, a = o.schema) {
    const { gen: l, parentSchema: f, data: h, keyword: v, it: $ } = o;
    w(f), $.opts.unevaluated && a.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(l, a.length, $.items));
    const _ = l.name("valid"), S = l.const("len", (0, e._)`${h}.length`);
    a.forEach((p, g) => {
      (0, t.alwaysValidSchema)($, p) || (l.if((0, e._)`${S} > ${g}`, () => o.subschema({
        keyword: v,
        schemaProp: g,
        dataProp: g
      }, _)), o.ok(_));
    });
    function w(p) {
      const { opts: g, errSchemaPath: u } = $, m = a.length, k = m === p.minItems && (m === p.maxItems || p[i] === !1);
      if (g.strictTuples && !k) {
        const c = `"${v}" is ${m}-tuple, but minItems or maxItems/${i} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, c, g.strictTuples);
      }
    }
  }
  return rt.validateTuple = s, rt.default = r, rt;
}
var Lo;
function Ba() {
  if (Lo) return tn;
  Lo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ li(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return tn.default = t, tn;
}
var nn = {}, Bo;
function Ua() {
  if (Bo) return nn;
  Bo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Fe(), r = /* @__PURE__ */ ci(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { schema: a, parentSchema: l, it: f } = i, { prefixItems: h } = l;
      f.items = !0, !(0, t.alwaysValidSchema)(f, a) && (h ? (0, r.validateAdditionalItems)(i, h) : i.ok((0, n.validateArray)(i)));
    }
  };
  return nn.default = o, nn;
}
var rn = {}, Uo;
function Ka() {
  if (Uo) return rn;
  Uo = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: s, max: o } }) => o === void 0 ? (0, e.str)`must contain at least ${s} valid item(s)` : (0, e.str)`must contain at least ${s} and no more than ${o} valid item(s)`,
      params: ({ params: { min: s, max: o } }) => o === void 0 ? (0, e._)`{minContains: ${s}}` : (0, e._)`{minContains: ${s}, maxContains: ${o}}`
    },
    code(s) {
      const { gen: o, schema: i, parentSchema: a, data: l, it: f } = s;
      let h, v;
      const { minContains: $, maxContains: _ } = a;
      f.opts.next ? (h = $ === void 0 ? 1 : $, v = _) : h = 1;
      const S = o.const("len", (0, e._)`${l}.length`);
      if (s.setParams({ min: h, max: v }), v === void 0 && h === 0) {
        (0, t.checkStrictMode)(f, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (v !== void 0 && h > v) {
        (0, t.checkStrictMode)(f, '"minContains" > "maxContains" is always invalid'), s.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(f, i)) {
        let m = (0, e._)`${S} >= ${h}`;
        v !== void 0 && (m = (0, e._)`${m} && ${S} <= ${v}`), s.pass(m);
        return;
      }
      f.items = !0;
      const w = o.name("valid");
      v === void 0 && h === 1 ? g(w, () => o.if(w, () => o.break())) : h === 0 ? (o.let(w, !0), v !== void 0 && o.if((0, e._)`${l}.length > 0`, p)) : (o.let(w, !1), p()), s.result(w, () => s.reset());
      function p() {
        const m = o.name("_valid"), k = o.let("count", 0);
        g(m, () => o.if(m, () => u(k)));
      }
      function g(m, k) {
        o.forRange("i", 0, S, (c) => {
          s.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), k();
        });
      }
      function u(m) {
        o.code((0, e._)`${m}++`), v === void 0 ? o.if((0, e._)`${m} >= ${h}`, () => o.assign(w, !0).break()) : (o.if((0, e._)`${m} > ${v}`, () => o.assign(w, !1).break()), h === 1 ? o.assign(w, !0) : o.if((0, e._)`${m} >= ${h}`, () => o.assign(w, !0)));
      }
    }
  };
  return rn.default = r, rn;
}
var or = {}, Ko;
function Ar() {
  return Ko || (Ko = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Fe();
    e.error = {
      message: ({ params: { property: l, depsCount: f, deps: h } }) => {
        const v = f === 1 ? "property" : "properties";
        return (0, t.str)`must have ${v} ${h} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: f, deps: h, missingProperty: v } }) => (0, t._)`{property: ${l},
    missingProperty: ${v},
    depsCount: ${f},
    deps: ${h}}`
      // TODO change to reference
    };
    const s = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [f, h] = o(l);
        i(l, f), a(l, h);
      }
    };
    function o({ schema: l }) {
      const f = {}, h = {};
      for (const v in l) {
        if (v === "__proto__")
          continue;
        const $ = Array.isArray(l[v]) ? f : h;
        $[v] = l[v];
      }
      return [f, h];
    }
    function i(l, f = l.schema) {
      const { gen: h, data: v, it: $ } = l;
      if (Object.keys(f).length === 0)
        return;
      const _ = h.let("missing");
      for (const S in f) {
        const w = f[S];
        if (w.length === 0)
          continue;
        const p = (0, r.propertyInData)(h, v, S, $.opts.ownProperties);
        l.setParams({
          property: S,
          depsCount: w.length,
          deps: w.join(", ")
        }), $.allErrors ? h.if(p, () => {
          for (const g of w)
            (0, r.checkReportMissingProp)(l, g);
        }) : (h.if((0, t._)`${p} && (${(0, r.checkMissingProp)(l, w, _)})`), (0, r.reportMissingProp)(l, _), h.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(l, f = l.schema) {
      const { gen: h, data: v, keyword: $, it: _ } = l, S = h.name("valid");
      for (const w in f)
        (0, n.alwaysValidSchema)(_, f[w]) || (h.if(
          (0, r.propertyInData)(h, v, w, _.opts.ownProperties),
          () => {
            const p = l.subschema({ keyword: $, schemaProp: w }, S);
            l.mergeValidEvaluated(p, S);
          },
          () => h.var(S, !0)
          // TODO var
        ), l.ok(S));
    }
    e.validateSchemaDeps = a, e.default = s;
  })(or)), or;
}
var on = {}, Ho;
function Ha() {
  if (Ho) return on;
  Ho = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: s }) => (0, e._)`{propertyName: ${s.propertyName}}`
    },
    code(s) {
      const { gen: o, schema: i, data: a, it: l } = s;
      if ((0, t.alwaysValidSchema)(l, i))
        return;
      const f = o.name("valid");
      o.forIn("key", a, (h) => {
        s.setParams({ propertyName: h }), s.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, f), o.if((0, e.not)(f), () => {
          s.error(!0), l.allErrors || o.break();
        });
      }), s.ok(f);
    }
  };
  return on.default = r, on;
}
var sn = {}, Go;
function di() {
  if (Go) return sn;
  Go = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ oe(), o = {
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
      const { gen: a, schema: l, parentSchema: f, data: h, errsCount: v, it: $ } = i;
      if (!v)
        throw new Error("ajv implementation error");
      const { allErrors: _, opts: S } = $;
      if ($.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)($, l))
        return;
      const w = (0, e.allSchemaProperties)(f.properties), p = (0, e.allSchemaProperties)(f.patternProperties);
      g(), i.ok((0, t._)`${v} === ${n.default.errors}`);
      function g() {
        a.forIn("key", h, (d) => {
          !w.length && !p.length ? k(d) : a.if(u(d), () => k(d));
        });
      }
      function u(d) {
        let y;
        if (w.length > 8) {
          const E = (0, r.schemaRefOrVal)($, f.properties, "properties");
          y = (0, e.isOwnProperty)(a, E, d);
        } else w.length ? y = (0, t.or)(...w.map((E) => (0, t._)`${d} === ${E}`)) : y = t.nil;
        return p.length && (y = (0, t.or)(y, ...p.map((E) => (0, t._)`${(0, e.usePattern)(i, E)}.test(${d})`))), (0, t.not)(y);
      }
      function m(d) {
        a.code((0, t._)`delete ${h}[${d}]`);
      }
      function k(d) {
        if (S.removeAdditional === "all" || S.removeAdditional && l === !1) {
          m(d);
          return;
        }
        if (l === !1) {
          i.setParams({ additionalProperty: d }), i.error(), _ || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)($, l)) {
          const y = a.name("valid");
          S.removeAdditional === "failing" ? (c(d, y, !1), a.if((0, t.not)(y), () => {
            i.reset(), m(d);
          })) : (c(d, y), _ || a.if((0, t.not)(y), () => a.break()));
        }
      }
      function c(d, y, E) {
        const C = {
          keyword: "additionalProperties",
          dataProp: d,
          dataPropType: r.Type.Str
        };
        E === !1 && Object.assign(C, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), i.subschema(C, y);
      }
    }
  };
  return sn.default = o, sn;
}
var an = {}, Wo;
function Ga() {
  if (Wo) return an;
  Wo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ln(), t = /* @__PURE__ */ Fe(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ di(), s = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: i, schema: a, parentSchema: l, data: f, it: h } = o;
      h.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(h, r.default, "additionalProperties"));
      const v = (0, t.allSchemaProperties)(a);
      for (const p of v)
        h.definedProperties.add(p);
      h.opts.unevaluated && v.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(i, (0, n.toHash)(v), h.props));
      const $ = v.filter((p) => !(0, n.alwaysValidSchema)(h, a[p]));
      if ($.length === 0)
        return;
      const _ = i.name("valid");
      for (const p of $)
        S(p) ? w(p) : (i.if((0, t.propertyInData)(i, f, p, h.opts.ownProperties)), w(p), h.allErrors || i.else().var(_, !0), i.endIf()), o.it.definedProperties.add(p), o.ok(_);
      function S(p) {
        return h.opts.useDefaults && !h.compositeRule && a[p].default !== void 0;
      }
      function w(p) {
        o.subschema({
          keyword: "properties",
          schemaProp: p,
          dataProp: p
        }, _);
      }
    }
  };
  return an.default = s, an;
}
var cn = {}, Jo;
function Wa() {
  if (Jo) return cn;
  Jo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fe(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ oe(), s = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: i, schema: a, data: l, parentSchema: f, it: h } = o, { opts: v } = h, $ = (0, e.allSchemaProperties)(a), _ = $.filter((k) => (0, n.alwaysValidSchema)(h, a[k]));
      if ($.length === 0 || _.length === $.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const S = v.strictSchema && !v.allowMatchingProperties && f.properties, w = i.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(i, h.props));
      const { props: p } = h;
      g();
      function g() {
        for (const k of $)
          S && u(k), h.allErrors ? m(k) : (i.var(w, !0), m(k), i.if(w));
      }
      function u(k) {
        for (const c in S)
          new RegExp(k).test(c) && (0, n.checkStrictMode)(h, `property ${c} matches pattern ${k} (use allowMatchingProperties)`);
      }
      function m(k) {
        i.forIn("key", l, (c) => {
          i.if((0, t._)`${(0, e.usePattern)(o, k)}.test(${c})`, () => {
            const d = _.includes(k);
            d || o.subschema({
              keyword: "patternProperties",
              schemaProp: k,
              dataProp: c,
              dataPropType: r.Type.Str
            }, w), h.opts.unevaluated && p !== !0 ? i.assign((0, t._)`${p}[${c}]`, !0) : !d && !h.allErrors && i.if((0, t.not)(w), () => i.break());
          });
        });
      }
    }
  };
  return cn.default = s, cn;
}
var ln = {}, Yo;
function Ja() {
  if (Yo) return ln;
  Yo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: s, it: o } = n;
      if ((0, e.alwaysValidSchema)(o, s)) {
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
  return ln.default = t, ln;
}
var dn = {}, Xo;
function Ya() {
  if (Xo) return dn;
  Xo = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Fe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return dn.default = t, dn;
}
var un = {}, Zo;
function Xa() {
  if (Zo) return un;
  Zo = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: s }) => (0, e._)`{passingSchemas: ${s.passing}}`
    },
    code(s) {
      const { gen: o, schema: i, parentSchema: a, it: l } = s;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      if (l.opts.discriminator && a.discriminator)
        return;
      const f = i, h = o.let("valid", !1), v = o.let("passing", null), $ = o.name("_valid");
      s.setParams({ passing: v }), o.block(_), s.result(h, () => s.reset(), () => s.error(!0));
      function _() {
        f.forEach((S, w) => {
          let p;
          (0, t.alwaysValidSchema)(l, S) ? o.var($, !0) : p = s.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, $), w > 0 && o.if((0, e._)`${$} && ${h}`).assign(h, !1).assign(v, (0, e._)`[${v}, ${w}]`).else(), o.if($, () => {
            o.assign(h, !0), o.assign(v, w), p && s.mergeEvaluated(p, e.Name);
          });
        });
      }
    }
  };
  return un.default = r, un;
}
var fn = {}, Qo;
function Za() {
  if (Qo) return fn;
  Qo = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: s, it: o } = n;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      const i = r.name("valid");
      s.forEach((a, l) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const f = n.subschema({ keyword: "allOf", schemaProp: l }, i);
        n.ok(i), n.mergeEvaluated(f);
      });
    }
  };
  return fn.default = t, fn;
}
var pn = {}, es;
function Qa() {
  if (es) return pn;
  es = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: i, parentSchema: a, it: l } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
      const f = s(l, "then"), h = s(l, "else");
      if (!f && !h)
        return;
      const v = i.let("valid", !0), $ = i.name("_valid");
      if (_(), o.reset(), f && h) {
        const w = i.let("ifClause");
        o.setParams({ ifClause: w }), i.if($, S("then", w), S("else", w));
      } else f ? i.if($, S("then")) : i.if((0, e.not)($), S("else"));
      o.pass(v, () => o.error(!0));
      function _() {
        const w = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        o.mergeEvaluated(w);
      }
      function S(w, p) {
        return () => {
          const g = o.subschema({ keyword: w }, $);
          i.assign(v, $), o.mergeValidEvaluated(g, v), p ? i.assign(p, (0, e._)`${w}`) : o.setParams({ ifClause: w });
        };
      }
    }
  };
  function s(o, i) {
    const a = o.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return pn.default = r, pn;
}
var hn = {}, ts;
function ec() {
  if (ts) return hn;
  ts = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: s }) {
      r.if === void 0 && (0, e.checkStrictMode)(s, `"${n}" without "if" is ignored`);
    }
  };
  return hn.default = t, hn;
}
var ns;
function tc() {
  if (ns) return en;
  ns = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ci(), t = /* @__PURE__ */ Ba(), n = /* @__PURE__ */ li(), r = /* @__PURE__ */ Ua(), s = /* @__PURE__ */ Ka(), o = /* @__PURE__ */ Ar(), i = /* @__PURE__ */ Ha(), a = /* @__PURE__ */ di(), l = /* @__PURE__ */ Ga(), f = /* @__PURE__ */ Wa(), h = /* @__PURE__ */ Ja(), v = /* @__PURE__ */ Ya(), $ = /* @__PURE__ */ Xa(), _ = /* @__PURE__ */ Za(), S = /* @__PURE__ */ Qa(), w = /* @__PURE__ */ ec();
  function p(g = !1) {
    const u = [
      // any
      h.default,
      v.default,
      $.default,
      _.default,
      S.default,
      w.default,
      // object
      i.default,
      a.default,
      o.default,
      l.default,
      f.default
    ];
    return g ? u.push(t.default, r.default) : u.push(e.default, n.default), u.push(s.default), u;
  }
  return en.default = p, en;
}
var mn = {}, ot = {}, rs;
function ui() {
  if (rs) return ot;
  rs = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Un(), r = /* @__PURE__ */ xr(), s = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, l) {
    const { gen: f, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[l] = !0;
    const v = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, $ = h.errSchemaPath === "#" ? h.validateName : i(a);
    f.if((0, e._)`!${v}`, () => f.assign(v, $));
  }
  ot.dynamicAnchor = o;
  function i(a) {
    const { schemaEnv: l, schema: f, self: h } = a.it, { root: v, baseId: $, localRefs: _, meta: S } = l.root, { schemaId: w } = h.opts, p = new n.SchemaEnv({ schema: f, schemaId: w, root: v, baseId: $, localRefs: _, meta: S });
    return n.compileSchema.call(h, p), (0, r.getValidate)(a, p);
  }
  return ot.default = s, ot;
}
var st = {}, os;
function fi() {
  if (os) return st;
  os = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.dynamicRef = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ xr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => s(o, o.schema)
  };
  function s(o, i) {
    const { gen: a, keyword: l, it: f } = o;
    if (i[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const h = i.slice(1);
    if (f.allErrors)
      v();
    else {
      const _ = a.let("valid", !1);
      v(_), o.ok(_);
    }
    function v(_) {
      if (f.schemaEnv.root.dynamicAnchors[h]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        a.if(S, $(S, _), $(f.validateName, _));
      } else
        $(f.validateName, _)();
    }
    function $(_, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(o, _), a.let(S, !0);
      }) : () => (0, n.callRef)(o, _);
    }
  }
  return st.dynamicRef = s, st.default = r, st;
}
var gn = {}, ss;
function nc() {
  if (ss) return gn;
  ss = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ui(), t = /* @__PURE__ */ oe(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return gn.default = n, gn;
}
var yn = {}, is;
function rc() {
  if (is) return yn;
  is = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fi(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return yn.default = t, yn;
}
var as;
function oc() {
  if (as) return mn;
  as = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ui(), t = /* @__PURE__ */ fi(), n = /* @__PURE__ */ nc(), r = /* @__PURE__ */ rc(), s = [e.default, t.default, n.default, r.default];
  return mn.default = s, mn;
}
var vn = {}, $n = {}, cs;
function sc() {
  if (cs) return $n;
  cs = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ar(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return $n.default = t, $n;
}
var bn = {}, ls;
function ic() {
  if (ls) return bn;
  ls = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ar(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return bn.default = t, bn;
}
var wn = {}, ds;
function ac() {
  if (ds) return wn;
  ds = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: s }) {
      r.contains === void 0 && (0, e.checkStrictMode)(s, `"${n}" without "contains" is ignored`);
    }
  };
  return wn.default = t, wn;
}
var us;
function cc() {
  if (us) return vn;
  us = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sc(), t = /* @__PURE__ */ ic(), n = /* @__PURE__ */ ac(), r = [e.default, t.default, n.default];
  return vn.default = r, vn;
}
var _n = {}, Sn = {}, fs;
function lc() {
  if (fs) return Sn;
  fs = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ne(), s = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: i, schema: a, data: l, errsCount: f, it: h } = o;
      if (!f)
        throw new Error("ajv implementation error");
      const { allErrors: v, props: $ } = h;
      $ instanceof e.Name ? i.if((0, e._)`${$} !== true`, () => i.forIn("key", l, (p) => i.if(S($, p), () => _(p)))) : $ !== !0 && i.forIn("key", l, (p) => $ === void 0 ? _(p) : i.if(w($, p), () => _(p))), h.props = !0, o.ok((0, e._)`${f} === ${n.default.errors}`);
      function _(p) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: p }), o.error(), v || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, a)) {
          const g = i.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: p,
            dataPropType: t.Type.Str
          }, g), v || i.if((0, e.not)(g), () => i.break());
        }
      }
      function S(p, g) {
        return (0, e._)`!${p} || !${p}[${g}]`;
      }
      function w(p, g) {
        const u = [];
        for (const m in p)
          p[m] === !0 && u.push((0, e._)`${g} !== ${m}`);
        return (0, e.and)(...u);
      }
    }
  };
  return Sn.default = s, Sn;
}
var kn = {}, ps;
function dc() {
  if (ps) return kn;
  ps = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { gen: o, schema: i, data: a, it: l } = s, f = l.items || 0;
      if (f === !0)
        return;
      const h = o.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        s.setParams({ len: f }), s.fail((0, e._)`${h} > ${f}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(l, i)) {
        const $ = o.var("valid", (0, e._)`${h} <= ${f}`);
        o.if((0, e.not)($), () => v($, f)), s.ok($);
      }
      l.items = !0;
      function v($, _) {
        o.forRange("i", _, h, (S) => {
          s.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, $), l.allErrors || o.if((0, e.not)($), () => o.break());
        });
      }
    }
  };
  return kn.default = r, kn;
}
var hs;
function uc() {
  if (hs) return _n;
  hs = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lc(), t = /* @__PURE__ */ dc(), n = [e.default, t.default];
  return _n.default = n, _n;
}
var Cn = {}, En = {}, ms;
function fc() {
  if (ms) return En;
  ms = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, s) {
      const { gen: o, data: i, $data: a, schema: l, schemaCode: f, it: h } = r, { opts: v, errSchemaPath: $, schemaEnv: _, self: S } = h;
      if (!v.validateFormats)
        return;
      a ? w() : p();
      function w() {
        const g = o.scopeValue("formats", {
          ref: S.formats,
          code: v.code.formats
        }), u = o.const("fDef", (0, e._)`${g}[${f}]`), m = o.let("fType"), k = o.let("format");
        o.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => o.assign(m, (0, e._)`${u}.type || "string"`).assign(k, (0, e._)`${u}.validate`), () => o.assign(m, (0, e._)`"string"`).assign(k, u)), r.fail$data((0, e.or)(c(), d()));
        function c() {
          return v.strictSchema === !1 ? e.nil : (0, e._)`${f} && !${k}`;
        }
        function d() {
          const y = _.$async ? (0, e._)`(${u}.async ? await ${k}(${i}) : ${k}(${i}))` : (0, e._)`${k}(${i})`, E = (0, e._)`(typeof ${k} == "function" ? ${y} : ${k}.test(${i}))`;
          return (0, e._)`${k} && ${k} !== true && ${m} === ${s} && !${E}`;
        }
      }
      function p() {
        const g = S.formats[l];
        if (!g) {
          c();
          return;
        }
        if (g === !0)
          return;
        const [u, m, k] = d(g);
        u === s && r.pass(y());
        function c() {
          if (v.strictSchema === !1) {
            S.logger.warn(E());
            return;
          }
          throw new Error(E());
          function E() {
            return `unknown format "${l}" ignored in schema at path "${$}"`;
          }
        }
        function d(E) {
          const C = E instanceof RegExp ? (0, e.regexpCode)(E) : v.code.formats ? (0, e._)`${v.code.formats}${(0, e.getProperty)(l)}` : void 0, R = o.scopeValue("formats", { key: l, ref: E, code: C });
          return typeof E == "object" && !(E instanceof RegExp) ? [E.type || "string", E.validate, (0, e._)`${R}.validate`] : ["string", E, R];
        }
        function y() {
          if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
            if (!_.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${k}(${i})`;
          }
          return typeof m == "function" ? (0, e._)`${k}(${i})` : (0, e._)`${k}.test(${i})`;
        }
      }
    }
  };
  return En.default = n, En;
}
var gs;
function pc() {
  if (gs) return Cn;
  gs = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ fc()).default];
  return Cn.default = t, Cn;
}
var Xe = {}, ys;
function hc() {
  return ys || (ys = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.contentVocabulary = Xe.metadataVocabulary = void 0, Xe.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Xe.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Xe;
}
var vs;
function mc() {
  if (vs) return zt;
  vs = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ra(), t = /* @__PURE__ */ La(), n = /* @__PURE__ */ tc(), r = /* @__PURE__ */ oc(), s = /* @__PURE__ */ cc(), o = /* @__PURE__ */ uc(), i = /* @__PURE__ */ pc(), a = /* @__PURE__ */ hc(), l = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    i.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    s.default,
    o.default
  ];
  return zt.default = l, zt;
}
var xn = {}, wt = {}, $s;
function gc() {
  if ($s) return wt;
  $s = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (wt.DiscrError = e = {})), wt;
}
var bs;
function yc() {
  if (bs) return xn;
  bs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ gc(), n = /* @__PURE__ */ Un(), r = /* @__PURE__ */ Bn(), s = /* @__PURE__ */ oe(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: f } }) => (0, e._)`{error: ${a}, tag: ${f}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: f, schema: h, parentSchema: v, it: $ } = a, { oneOf: _ } = v;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = h.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!_)
        throw new Error("discriminator: requires oneOf keyword");
      const w = l.let("valid", !1), p = l.const("tag", (0, e._)`${f}${(0, e.getProperty)(S)}`);
      l.if((0, e._)`typeof ${p} == "string"`, () => g(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: p, tagName: S })), a.ok(w);
      function g() {
        const k = m();
        l.if(!1);
        for (const c in k)
          l.elseIf((0, e._)`${p} === ${c}`), l.assign(w, u(k[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: p, tagName: S }), l.endIf();
      }
      function u(k) {
        const c = l.name("valid"), d = a.subschema({ keyword: "oneOf", schemaProp: k }, c);
        return a.mergeEvaluated(d, e.Name), c;
      }
      function m() {
        var k;
        const c = {}, d = E(v);
        let y = !0;
        for (let A = 0; A < _.length; A++) {
          let P = _[A];
          if (P?.$ref && !(0, s.schemaHasRulesButRef)(P, $.self.RULES)) {
            const K = P.$ref;
            if (P = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, K), P instanceof n.SchemaEnv && (P = P.schema), P === void 0)
              throw new r.default($.opts.uriResolver, $.baseId, K);
          }
          const z = (k = P?.properties) === null || k === void 0 ? void 0 : k[S];
          if (typeof z != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          y = y && (d || E(P)), C(z, A);
        }
        if (!y)
          throw new Error(`discriminator: "${S}" must be required`);
        return c;
        function E({ required: A }) {
          return Array.isArray(A) && A.includes(S);
        }
        function C(A, P) {
          if (A.const)
            R(A.const, P);
          else if (A.enum)
            for (const z of A.enum)
              R(z, P);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function R(A, P) {
          if (typeof A != "string" || A in c)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          c[A] = P;
        }
      }
    }
  };
  return xn.default = i, xn;
}
var Pn = {};
const vc = "https://json-schema.org/draft/2020-12/schema", $c = "https://json-schema.org/draft/2020-12/schema", bc = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, wc = "meta", _c = "Core and Validation specifications meta-schema", Sc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], kc = ["object", "boolean"], Cc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Ec = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, xc = {
  $schema: vc,
  $id: $c,
  $vocabulary: bc,
  $dynamicAnchor: wc,
  title: _c,
  allOf: Sc,
  type: kc,
  $comment: Cc,
  properties: Ec
}, Pc = "https://json-schema.org/draft/2020-12/schema", Ac = "https://json-schema.org/draft/2020-12/meta/applicator", Rc = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Mc = "meta", Nc = "Applicator vocabulary meta-schema", Fc = ["object", "boolean"], Oc = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Tc = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, jc = {
  $schema: Pc,
  $id: Ac,
  $vocabulary: Rc,
  $dynamicAnchor: Mc,
  title: Nc,
  type: Fc,
  properties: Oc,
  $defs: Tc
}, Ic = "https://json-schema.org/draft/2020-12/schema", zc = "https://json-schema.org/draft/2020-12/meta/unevaluated", Dc = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, qc = "meta", Vc = "Unevaluated applicator vocabulary meta-schema", Lc = ["object", "boolean"], Bc = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Uc = {
  $schema: Ic,
  $id: zc,
  $vocabulary: Dc,
  $dynamicAnchor: qc,
  title: Vc,
  type: Lc,
  properties: Bc
}, Kc = "https://json-schema.org/draft/2020-12/schema", Hc = "https://json-schema.org/draft/2020-12/meta/content", Gc = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Wc = "meta", Jc = "Content vocabulary meta-schema", Yc = ["object", "boolean"], Xc = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Zc = {
  $schema: Kc,
  $id: Hc,
  $vocabulary: Gc,
  $dynamicAnchor: Wc,
  title: Jc,
  type: Yc,
  properties: Xc
}, Qc = "https://json-schema.org/draft/2020-12/schema", el = "https://json-schema.org/draft/2020-12/meta/core", tl = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, nl = "meta", rl = "Core vocabulary meta-schema", ol = ["object", "boolean"], sl = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, il = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, al = {
  $schema: Qc,
  $id: el,
  $vocabulary: tl,
  $dynamicAnchor: nl,
  title: rl,
  type: ol,
  properties: sl,
  $defs: il
}, cl = "https://json-schema.org/draft/2020-12/schema", ll = "https://json-schema.org/draft/2020-12/meta/format-annotation", dl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ul = "meta", fl = "Format vocabulary meta-schema for annotation results", pl = ["object", "boolean"], hl = { format: { type: "string" } }, ml = {
  $schema: cl,
  $id: ll,
  $vocabulary: dl,
  $dynamicAnchor: ul,
  title: fl,
  type: pl,
  properties: hl
}, gl = "https://json-schema.org/draft/2020-12/schema", yl = "https://json-schema.org/draft/2020-12/meta/meta-data", vl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, $l = "meta", bl = "Meta-data vocabulary meta-schema", wl = ["object", "boolean"], _l = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Sl = {
  $schema: gl,
  $id: yl,
  $vocabulary: vl,
  $dynamicAnchor: $l,
  title: bl,
  type: wl,
  properties: _l
}, kl = "https://json-schema.org/draft/2020-12/schema", Cl = "https://json-schema.org/draft/2020-12/meta/validation", El = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, xl = "meta", Pl = "Validation vocabulary meta-schema", Al = ["object", "boolean"], Rl = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ml = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Nl = {
  $schema: kl,
  $id: Cl,
  $vocabulary: El,
  $dynamicAnchor: xl,
  title: Pl,
  type: Al,
  properties: Rl,
  $defs: Ml
};
var ws;
function Fl() {
  if (ws) return Pn;
  ws = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = xc, t = jc, n = Uc, r = Zc, s = al, o = ml, i = Sl, a = Nl, l = ["/properties"];
  function f(h) {
    return [
      e,
      t,
      n,
      r,
      s,
      v(this, o),
      i,
      v(this, a)
    ].forEach(($) => this.addMetaSchema($, void 0, !1)), this;
    function v($, _) {
      return h ? $.$dataMetaSchema(_, l) : _;
    }
  }
  return Pn.default = f, Pn;
}
var _s;
function Ol() {
  return _s || (_s = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Pa(), r = /* @__PURE__ */ mc(), s = /* @__PURE__ */ yc(), o = /* @__PURE__ */ Fl(), i = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(_ = {}) {
        super({
          ..._,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((_) => this.addVocabulary(_)), this.opts.discriminator && this.addKeyword(s.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: _, meta: S } = this.opts;
        S && (o.default.call(this, _), this.refs["http://json-schema.org/schema"] = i);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ Ln();
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
    var h = /* @__PURE__ */ Er();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var v = /* @__PURE__ */ Bn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return v.default;
    } });
  })(Ft, Ft.exports)), Ft.exports;
}
var Tl = /* @__PURE__ */ Ol();
const jl = /* @__PURE__ */ fa(Tl), Il = "https://json-schema.org/draft/2020-12/schema", zl = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Dl = "gufe-viz payload", ql = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Vl = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Ll = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Rr = {
  $schema: Il,
  $id: zl,
  title: Dl,
  description: ql,
  oneOf: Vl,
  $defs: Ll
}, Tf = [
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
], Mr = Rr.$id, Nr = new jl({ allErrors: !0, strict: !1 });
Nr.addSchema(Rr, Mr);
const Ss = Nr.getSchema(Mr), pi = Object.entries(Rr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), jf = pi, Fr = /* @__PURE__ */ new Map();
for (const e of pi) {
  const t = Nr.getSchema(`${Mr}#/$defs/${e}`);
  t && Fr.set(e, t);
}
const mr = { valid: !0, issues: [] };
function gr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Bl(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Fr.get(t) : void 0;
  return n ? n(e) ? mr : { valid: !1, issues: gr(n.errors) } : Ss(e) ? mr : { valid: !1, issues: gr(Ss.errors) };
}
function If(e, t) {
  const n = Fr.get(e);
  return n ? n(t) ? mr : { valid: !1, issues: gr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function Ul(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Or = {
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
function hi(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Or[t]) return Kl(t);
  const { valid: n, issues: r } = Bl(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: Ul(r)
  };
}
function Kl(e) {
  const t = Object.keys(Or).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function zf(e) {
  return hi(e)?.message ?? null;
}
class Hl extends Re {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    qi("payload", n, this);
    const r = hi(n);
    if (r)
      return t.appendChild(Gl(r, n)), {};
    const s = n.type, o = Or[s], i = document.createElement(o);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function Gl(e, t) {
  const n = j(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(de(e.message));
  const r = (o, i) => j(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};` : `background:${O.panelBg};color:${O.textMuted2};border:1px solid ${O.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const s = Wl(t);
  return s && n.appendChild(r(s, !1)), n;
}
function Wl(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ve(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ve(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Me("gufe-view", Hl);
const sr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, Tr = {
  threeDmol: `https://unpkg.com/3dmol@${sr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${sr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${sr.d3}/+esm`
};
function jr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function mi(e, t) {
  return new Promise((n, r) => {
    const s = document.createElement("script");
    s.src = e, s.onload = () => n(), s.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(s);
  });
}
let Qe = null, it = null;
function Ir() {
  if (it) return it;
  const e = jr("threeDmol");
  return e ? (it = e.then((t) => Qe = t || window.$3Dmol), it) : (it = (async () => {
    if (window.$3Dmol) return Qe = window.$3Dmol;
    if (await mi(Tr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Qe = window.$3Dmol;
  })(), it);
}
let at = null;
function zr() {
  if (at) return at;
  const e = jr("rdkit");
  return e ? (at = e.then((t) => window.RDKit = t), at) : (at = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await mi(Tr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), at);
}
let ir = null;
function gi() {
  if (!ir) {
    const e = Tr.d3;
    ir = jr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return ir;
}
function yi(e, t) {
  let n = !1, r = !1;
  const s = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, i = (a) => {
    a.stopPropagation();
    const l = a.ctrlKey || a.metaKey;
    if (n || l) {
      (t.onZoom(a) !== !1 || l) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, Yl(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", s), e.addEventListener("pointerenter", s), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", s), e.removeEventListener("pointerenter", s), e.removeEventListener("pointerleave", o);
    }
  };
}
const Jl = 1600;
function Yl(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Jl);
}
const Xl = { min: 0.25, max: 12 }, Zl = 150;
function ks(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Zl) - t;
}
function Ql(e, t = Xl) {
  const n = ks(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let s = 1;
  const o = () => {
    if (!r) return s;
    const i = ks(e);
    return Number.isFinite(i) && i > 0 ? n / i : s;
  };
  return {
    zoomBy(i) {
      const a = o(), l = Math.min(t.max, Math.max(t.min, a * i)), f = l / a;
      return !Number.isFinite(f) || Math.abs(f - 1) < 1e-9 ? !1 : (s = l, e.zoom(f), e.render(), !0);
    },
    reset() {
      s = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const ed = 2e-3;
function td(e) {
  return Math.exp(-e.deltaY * ed);
}
function Dr(e, t, n = {}) {
  const r = Ql(t, n.bounds), s = yi(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(td(o))
  });
  return { ...r, cleanup: s.cleanup };
}
function qr(e, t = "Reset view") {
  const n = j("button", At, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const ar = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, nd = [
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
], Df = "hsv", V = [0, 0, 0], rd = {
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
}, od = "rdkit", sd = !0, id = !0, ad = !0, cd = !0, ld = "rdkit", dd = "filled", ud = 0.42, fd = 1.5, pd = !0, hd = "show", md = "mono", gd = 0.51, yd = 0.74, vd = 1.6, $d = 1.7, bd = 5, wd = 0.3, _d = "#d62828", Sd = "#d62828", kd = "#015ab5", Cd = !1, Ed = "", xd = "#7c3aed", Pd = {
  layout: od,
  alignPair: sd,
  atomNumbers: id,
  createdDestroyed: ad,
  modified: cd,
  style: ld,
  circles: dd,
  circleRadius: ud,
  circleStroke: fd,
  boundary: pd,
  hydrogens: hd,
  elementColors: md,
  numScale: gd,
  labelScale: yd,
  bondWidth: vd,
  markWidth: $d,
  haloWidth: bd,
  haloOpacity: wd,
  destroyedColor: _d,
  createdColor: Sd,
  modifiedColor: kd,
  stereo: Cd,
  customSpec: Ed,
  customColor: xd
}, Ad = {
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
}, Rd = ["rdkit", "coordgen", "conformer"], Md = ["rdkit", "recolor", "halo"], Nd = ["outline", "filled", "off"], Fd = ["show", "dim", "hide"], Od = ["cpk", "mono"], Td = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, jd = /^#[0-9a-fA-F]{6}$/;
function _t(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ue(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Td[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const ct = (e, t) => typeof e == "boolean" ? e : t, An = (e, t) => typeof e == "string" && jd.test(e) ? e : t;
function Id(e) {
  const t = e && typeof e == "object" ? e : {}, n = Ad;
  return {
    version: 1,
    layout: _t(t.layout, Rd, n.layout),
    alignPair: ct(t.alignPair, n.alignPair),
    style: _t(t.style, Md, n.style),
    createdDestroyed: ct(t.createdDestroyed, n.createdDestroyed),
    modified: ct(t.modified, n.modified),
    destroyedColor: An(t.destroyedColor, n.destroyedColor),
    createdColor: An(t.createdColor, n.createdColor),
    modifiedColor: An(t.modifiedColor, n.modifiedColor),
    boundary: ct(t.boundary, n.boundary),
    circles: _t(t.circles, Nd, n.circles),
    circleRadius: Ue(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ue(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: _t(t.hydrogens, Fd, n.hydrogens),
    elementColors: _t(t.elementColors, Od, n.elementColors),
    atomNumbers: ct(t.atomNumbers, n.atomNumbers),
    stereo: ct(t.stereo, n.stereo),
    numScale: Ue(t.numScale, "numScale", n.numScale),
    labelScale: Ue(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ue(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ue(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ue(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ue(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: An(t.customColor, n.customColor)
  };
}
const ft = Id(Pd);
function zd(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const s of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(s), i = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : s, l = (h) => {
      i !== "right" && t.add(h), i !== "left" && n.add(h);
    }, f = /^(\d+)-(\d+)$/.exec(a);
    if (f) {
      const h = Math.min(+f[1], +f[2]), v = Math.min(Math.max(+f[1], +f[2]), h + r - 1);
      for (let $ = h; $ <= v; $++) l($);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function cr(e, t, n) {
  const r = [];
  for (let s = 0; s < e.bonds.length; s++) {
    const [o, i] = e.bonds[s], a = t.has(o), l = t.has(i);
    (n ? a || l : a && l) && r.push(s);
  }
  return r;
}
function yr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Dd(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function qd(e, t, n) {
  const r = new Set(t.atoms), s = new Set(cr(e, r, !0));
  return {
    deletions: cr(e, r, n),
    changes: cr(e, new Set(t.elements), n).filter((o) => !s.has(o))
  };
}
function Vd(e, t, n, r) {
  const s = qd(t, n, e.boundary), o = [];
  return e.createdDestroyed && n.atoms.length && o.push({
    atoms: new Set(n.atoms),
    bonds: s.deletions,
    color: r === "left" ? e.destroyedColor : e.createdColor,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && n.elements.length && o.push({
    atoms: new Set(n.elements),
    bonds: s.changes,
    color: e.modifiedColor,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), o;
}
let lt = null;
function Ld(e) {
  if (lt !== null) return lt;
  lt = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (lt = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return lt || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), lt;
}
function Bd(e, t) {
  return e.style === "rdkit" ? "rdkit" : Ld(t) ? e.style : "rdkit";
}
function Ud(e, t, n, r, s, o) {
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
  e.elementColors === "mono" && (i.atomColourPalette = rd), s === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, l = {}, f = {};
  for (const _ of n) {
    const S = yr(_.color);
    if (s === "rdkit") for (const p of _.bonds) f[p] = S;
    if (s === "recolor" && e.circles === "off") continue;
    const w = s === "recolor" && e.circles === "filled" ? Dd(S, 0.7) : S;
    for (const p of _.atoms)
      a[p] = w, l[p] = e.circleRadius;
  }
  const h = yr(e.customColor);
  for (const _ of r)
    _ < o && (a[_] = h, l[_] = e.circleRadius);
  const v = Object.keys(a).map(Number);
  v.length && (i.atoms = v, i.highlightAtomColors = a, i.highlightAtomRadii = l);
  const $ = Object.keys(f).map(Number);
  return $.length && (i.bonds = $, i.highlightBondColors = f), i;
}
function Kd(e, t, n, r) {
  let s = null;
  try {
    return s = e.get_mol(t, JSON.stringify({ removeHs: !1 })), s ? s.get_svg_with_highlights ? s.get_svg_with_highlights(JSON.stringify(r)) || null : s.get_svg(n, n) || null : null;
  } catch (o) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", ge(o)), null;
  } finally {
    if (s)
      try {
        s.delete();
      } catch {
      }
  }
}
const Hd = "http://www.w3.org/2000/svg";
function vi(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Vr(e, t, n) {
  const r = [];
  for (const s of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(s.getAttribute("class") || "")) continue;
    const o = s.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(s);
  }
  return r;
}
function $i(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function Cs(e, t, n, r, s, o) {
  for (const i of r)
    for (const a of vi(e, i)) {
      const l = a.style;
      $i(a) ? l.fill = s : (l.stroke = s, l.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const i of n)
      for (const a of Vr(e, i, !1)) a.style.fill = o;
}
function Gd(e, t, n, r) {
  const s = e.ownerDocument;
  if (!s) return;
  const o = s.createElementNS(Hd, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of vi(e, a)) {
      if ($i(l)) continue;
      const f = l.cloneNode(!0);
      f.removeAttribute("class"), f.style.fill = "none", f.style.stroke = r, f.style.strokeWidth = `${t.haloWidth}px`, f.style.strokeLinecap = "round", f.style.strokeLinejoin = "round", f.style.strokeOpacity = "1", o.appendChild(f);
    }
  if (!o.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(o, i.nextSibling) : i ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function Wd(e, t, n, r, s) {
  for (const o of n)
    if (!r.has(o))
      for (const i of Vr(e, o, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = s, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Jd(e, t, n, r, s) {
  for (const o of n)
    if (!r.has(o))
      for (const i of Vr(e, o, !0)) {
        const a = i.style;
        a.stroke = s, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Yd(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const s of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = s.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Xd(e, t, n, r, s, o) {
  if (o !== "rdkit")
    for (const i of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        Cs(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? Wd(e, n, i.atoms, s, i.color) : a && i.edgeOnFill && Jd(e, n, i.atoms, s, i.color);
      } else
        Gd(e, n, i.bonds, i.color), Cs(e, n, i.atoms, i.bonds, i.color, null);
  Yd(e, t, n);
}
const Kn = `
`, vr = "$$$$";
function $r(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Kn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const s = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(s) || s <= 0) throw new Error(`bad counts line: ${r}`);
  const i = [], a = [];
  for (let h = 0; h < s; h++) {
    const v = n[4 + h];
    if (v == null) throw new Error("truncated atom block");
    i.push([
      parseFloat(v.substring(0, 10)) || 0,
      parseFloat(v.substring(10, 20)) || 0,
      parseFloat(v.substring(20, 30)) || 0
    ]), a.push(v.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let h = 0; h < (isFinite(o) ? o : 0); h++) {
    const v = n[4 + s + h];
    if (v == null) break;
    const $ = parseInt(v.substring(0, 3), 10), _ = parseInt(v.substring(3, 6), 10), S = parseInt(v.substring(6, 9), 10);
    !isFinite($) || !isFinite(_) || l.push([$ - 1, _ - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: i };
}
function Zd(e) {
  const t = e.symbols.length, n = e.bonds.length, r = [
    e.name || "",
    "  Generated",
    "",
    `${String(t).padStart(3)}${String(n).padStart(3)}  0  0  0  0  0  0  0  0999 V2000`
  ];
  for (let s = 0; s < t; s++) {
    const o = e.coords[s];
    r.push(
      o[0].toFixed(4).padStart(10) + o[1].toFixed(4).padStart(10) + o[2].toFixed(4).padStart(10) + ` ${e.symbols[s].padEnd(3)} 0  0  0  0  0  0  0  0  0  0  0  0`
    );
  }
  for (let s = 0; s < n; s++) {
    const o = e.bonds[s], i = o[2] === 12 ? 4 : o[2];
    r.push(
      String(o[0] + 1).padStart(3) + String(o[1] + 1).padStart(3) + String(i).padStart(3) + "  0  0  0  0"
    );
  }
  return r.push("M  END"), r.join(Kn);
}
const Qd = (e) => `${Zd(e)}${Kn}${vr}`, eu = (e) => e.indexOf(vr) >= 0 ? e : `${e}${Kn}${vr}`;
function bi(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function wi(e, t, n, r, s) {
  let o = null;
  try {
    if (o = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !o) return null;
    if (r !== "conformer")
      try {
        o.set_new_coords(r === "coordgen");
      } catch {
      }
    if (s?.atoms.length && o.get_svg_with_highlights) {
      const i = {}, a = {};
      for (const f of s.atoms)
        i[f] = s.color, a[f] = s.radius;
      const l = {
        width: n,
        height: n,
        atoms: [...s.atoms],
        highlightAtomColors: i,
        highlightAtomRadii: a
      };
      return o.get_svg_with_highlights(JSON.stringify(l)) || null;
    }
    return o.get_svg(n, n) || null;
  } catch (i) {
    return console.warn("[gufe-viz] depictSVG threw -", ge(i)), null;
  } finally {
    if (o)
      try {
        o.delete();
      } catch {
      }
  }
}
function _i(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Es = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], xs = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, Ps = 400;
class tu extends Re {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, s = n.name ?? "", o = n.smiles, i = n.total_charge;
    t.appendChild(We(s || "Unnamed molecule"));
    const a = j("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const l = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), f = j("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(l), a.appendChild(j("div", `width:1px;flex-shrink:0;background:${O.splitBorder};`)), a.appendChild(f);
    const h = (C) => j("div", Pt, C);
    l.appendChild(h("2D"));
    const v = j(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${xt.canvas2D};`
    );
    l.appendChild(v), f.appendChild(h("3D"));
    const $ = ei();
    f.appendChild($.wrap);
    const _ = j(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:${Z.body};background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};color:${O.textPrimary};`
    );
    t.appendChild(_);
    const S = r ? bi(r) : null, w = [
      ["Name", s || ut, !1],
      ["SMILES", o || ut, !0],
      ["Charge", i == null ? ut : String(i), !1],
      ["Atoms", S ? String(S.atoms) : ut, !1],
      ["Bonds", S ? String(S.bonds) : ut, !1]
    ];
    for (const [C, R, A] of w) {
      const P = j("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      P.appendChild(
        j(
          "span",
          `font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${O.textMuted2};`,
          C
        )
      );
      const z = j(
        "span",
        `user-select:text;cursor:text;color:${O.textPrimary}` + (A ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Z.small};overflow-wrap:anywhere;` : ""),
        R
      );
      z.title = R, P.appendChild(z), _.appendChild(P);
    }
    if (!r || !r.trim())
      return v.appendChild(de("No molecule provided")), $.container.appendChild(de("No molecule provided")), {};
    v.appendChild(de("Loading 2D depiction...")), zr().then((C) => {
      const R = wi(C, r, Ps, ft.layout);
      R ? _i(v, R, Ps) : v.replaceChildren(de("Failed to parse molecule", !0));
    }).catch((C) => {
      v.replaceChildren(de(`RDKit failed to load: ${ge(C)}`, !0));
    });
    let p = null, g = null;
    const u = ht(
      "small-molecule.style",
      "stick",
      Es.map((C) => C.id)
    ), m = Ct("small-molecule.spin", !1);
    let k = u.get(), c = m.get();
    const d = j(
      "div",
      Gs
    );
    d.appendChild(
      zn(
        Es,
        k,
        (C) => {
          k = C, p && (p.setStyle({}, xs[C]), p.render());
        },
        u
      )
    );
    const y = Qs(
      "Spin",
      c,
      (C) => {
        c = C;
        try {
          p?.spin(C ? "y" : !1);
        } catch {
        }
      },
      { title: "Toggle continuous rotation", remember: m }
    );
    y.style.marginLeft = "4px", d.appendChild(y);
    const E = qr(() => g?.reset());
    return E.style.marginLeft = "4px", d.appendChild(E), f.appendChild(d), $.container.appendChild(de("Loading 3D viewer...")), Ir().then(() => {
      $.container.replaceChildren(), p = Qe.createViewer($.container, { backgroundColor: xt.viewer }), p.addModel(eu(r), "sdf"), p.setStyle({}, xs[k]), p.zoomTo(), p.render(), g = Dr($.container, p);
    }).catch((C) => {
      $.container.replaceChildren(de(`3D render failed: ${ge(C)}`, !0));
    }), {
      onResize() {
        p && (p.resize(), p.render());
      },
      cleanup() {
        if (g?.cleanup(), g = null, !!p) {
          try {
            p.spin(!1);
          } catch {
          }
          try {
            p.clear();
          } catch {
          }
          p = null;
        }
      }
    };
  }
}
Me("gufe-small-molecule", tu);
const Si = ["HOH", "WAT", "SOL", "TIP3"], As = { hetflag: !1 }, nu = { hetflag: !0 }, ru = { resn: Si }, Ke = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function ou(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, s = 0, o = 0, i = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const f = l.slice(0, 6);
    if (f === "ENDMDL") break;
    if (f !== "ATOM  " && f !== "HETATM") continue;
    r++, f === "HETATM" && s++;
    const h = l.slice(17, 20).trim(), v = l.slice(21, 22).trim() || "_", $ = l.slice(22, 26).trim(), _ = l.slice(26, 27).trim();
    Si.indexOf(h) !== -1 && o++, t.add(v), n.add(`${v}|${$}${_}|${h}`);
    const S = parseInt($, 10);
    isNaN(S) || (S < i && (i = S), S > a && (a = S));
  }
  return {
    chains: t.size,
    residues: n.size,
    atoms: r,
    hetatms: s,
    waters: o,
    heteroNonWater: s - o,
    resiMin: i === 1 / 0 ? 0 : i,
    resiMax: a === -1 / 0 ? 0 : a
  };
}
function su(e) {
  return `${vt(e.chains)} chains · ${vt(e.residues)} residues · ${vt(e.atoms)} atoms · ${vt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${vt(e.waters)} water)` : "");
}
function iu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Rs(e, t, n, r) {
  const s = r || (() => {
  }), o = iu(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    As,
    t.rep === "stick" ? { stick: { radius: Ke.stick.radius, ...o } } : t.rep === "sphere" ? { sphere: { scale: Ke.sphere.scale, ...o } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...o } }
    )
  ), e.setStyle(
    nu,
    t.hetero ? {
      stick: { radius: Ke.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ke.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    ru,
    t.waters ? {
      stick: { radius: Ke.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ke.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    s(null), e.render();
    return;
  }
  s(
    n && n.atoms > Ke.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Qe.SurfaceType.VDW, { opacity: Ke.surfaceOpacity, ...o }, As)
      ).then(() => {
        s(null), e.render();
      }).catch((i) => s(`Surface failed: ${ge(i)}`, "error"));
    } catch (i) {
      s(`Surface failed: ${ge(i)}`, "error");
    }
  }, 30);
}
const Ms = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Ns = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class au extends Re {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, s = n.name ?? "", o = n.type !== "ProteinComponentViz", i = ht(
      "protein.representation",
      "cartoon",
      Ms.map((E) => E.id)
    ), a = ht(
      "protein.color",
      "chain",
      Ns.map((E) => E.id)
    ), l = Ct("protein.waters", o), f = Ct("protein.hetero", !0), h = Ct("protein.spin", !1), v = {
      rep: i.get(),
      color: a.get(),
      waters: l.get(),
      hetero: f.get(),
      spin: h.get()
    };
    let $ = null, _ = null, S = null;
    const w = j(
      "div",
      Sr.top
    );
    t.appendChild(w), w.appendChild(
      j("span", `font-weight:700;font-size:${Z.heading};letter-spacing:.02em;color:${O.titleColor};`, s || "Protein")
    );
    const p = (E) => j("span", `font-size:${Z.small};color:${O.textMuted};`, E);
    w.appendChild(p("Style:")), w.appendChild(
      zn(
        Ms,
        v.rep,
        (E) => {
          v.rep = E, y();
        },
        i
      )
    ), w.appendChild(p("Color:")), w.appendChild(
      Cr(
        Ns,
        v.color,
        (E) => {
          v.color = E, y();
        },
        a
      )
    );
    const g = j("div", "display:flex;gap:4px;");
    w.appendChild(g);
    const u = [
      ["waters", "Waters", "Show water molecules", l, () => y()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", f, () => y()],
      ["spin", "Spin", "Rotate the view continuously", h, () => $?.spin(v.spin ? "y" : !1)]
    ];
    for (const [E, C, R, A, P] of u)
      g.appendChild(
        Qs(
          C,
          v[E],
          (z) => {
            v[E] = z, P();
          },
          { title: R, remember: A }
        )
      );
    g.appendChild(qr(() => _?.reset()));
    const m = j("span", `margin-left:auto;font-size:${Z.small};white-space:nowrap;color:${O.textMuted2};`);
    w.appendChild(m);
    const k = ei();
    t.appendChild(k.wrap);
    const c = j(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${Z.body};z-index:20;display:none;pointer-events:none;`
    );
    k.wrap.appendChild(c);
    const d = (E, C) => {
      if (E == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = E, c.style.display = "block";
      const R = C === "error";
      c.style.background = R ? O.warnBg : O.toolbarBg, c.style.color = R ? O.warnFg : O.textMuted, c.style.border = `1px solid ${R ? O.warnBorder : O.toolbarBorder}`;
    };
    function y() {
      $ && Rs($, v, S, d);
    }
    if (!r || !r.trim())
      return d("No protein data - waiting for a PDB payload."), {};
    try {
      S = ou(r), m.textContent = su(S);
    } catch (E) {
      d(`⚠ PDB parse error: ${ge(E)}`, "error");
    }
    return d("Loading 3D viewer..."), Ir().then(() => {
      $ = Qe.createViewer(k.container, { backgroundColor: xt.viewer }), $.addModel(r, "pdb"), Rs($, v, S, d), $.zoomTo(), $.spin(v.spin ? "y" : !1), $.render(), _ = Dr(k.container, $);
    }).catch((E) => {
      d(`⚠ Failed to render structure: ${ge(E)}`, "error");
    }), {
      onResize() {
        $ && ($.resize(), $.render());
      },
      cleanup() {
        if (_?.cleanup(), _ = null, !!$) {
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
Me("gufe-protein", au);
const ki = "http://www.w3.org/2000/svg";
function ie(e, t = {}) {
  const n = document.createElementNS(ki, e);
  for (const [r, s] of Object.entries(t)) n.setAttribute(r, String(s));
  return n;
}
function jn(e, t) {
  const n = document.createElementNS(ki, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const cu = 8, lu = 64, du = () => new Promise((e) => setTimeout(e, 0));
function br(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function uu(e, t, n, r) {
  let s = null;
  try {
    if (s = e.get_mol(n, JSON.stringify({ removeHs: r })), !s || !s.get_substruct_matches) return null;
    const o = s.get_substruct_matches(t), i = JSON.parse(o || "[]");
    if (!Array.isArray(i)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const l of i) {
      const f = l.atoms;
      if (Array.isArray(f))
        for (const h of f) typeof h == "number" && a.add(h);
    }
    return [...a].sort((l, f) => l - f);
  } catch (o) {
    return console.warn("[gufe-viz] SMARTS match threw -", ge(o)), null;
  } finally {
    br(s);
  }
}
function fu(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let s = 0;
  return { run: async (i) => {
    const a = i.trim(), l = ++s;
    if (!a) return { status: "cleared" };
    const f = r.get(a);
    if (f) return { status: "ok", matched: f, unreadable: 0 };
    const h = await e();
    if (l !== s) return { status: "superseded" };
    if (!h) return { status: "unsupported" };
    if (!h.get_qmol) return { status: "unsupported" };
    let v = null;
    try {
      v = h.get_qmol(a);
    } catch {
      v = null;
    }
    if (!v) return { status: "invalid" };
    if (!v.get_substruct_matches)
      return br(v), { status: "unsupported" };
    const $ = /* @__PURE__ */ new Map();
    let _ = 0;
    try {
      let S = performance.now(), w = 0;
      for (let p = 0; p < t.length; p++) {
        const g = t[p] ? uu(h, v, t[p], n) : null;
        if (g ? g.length && $.set(p, g) : _++, !(++w < lu && performance.now() - S < cu)) {
          if (await du(), l !== s) return { status: "superseded" };
          w = 0, S = performance.now();
        }
      }
    } finally {
      br(v);
    }
    return r.set(a, $), { status: "ok", matched: $, unreadable: _ };
  }, cancel: () => void ++s };
}
function Mt(e) {
  const t = /* @__PURE__ */ new Map();
  return wr(e, t, /* @__PURE__ */ new Set()), t;
}
function wr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const s of e) wr(s, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const s of r) {
      const o = s["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, s);
    }
  for (const s of Object.values(e)) wr(s, t, n);
}
function et(e, t) {
  return t ? e.get(t) : void 0;
}
function Ce(e, t, n) {
  const r = et(e, t);
  return r?.type === n ? r : void 0;
}
function Lr(e, t) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const s of t) {
    if (!s || r.has(s)) continue;
    const o = e.get(s);
    o && (r.add(s), n.push(o));
  }
  return n;
}
function mt(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Rn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let s = 0; s < 3; s++)
      n[r * 3 + s] = e[r * 3] * t[s] + e[r * 3 + 1] * t[3 + s] + e[r * 3 + 2] * t[6 + s];
  return n;
}
function Fs(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function pu(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Os(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = o[i][0], l = o[i][1], f = t[a * 3 + l];
      if (Math.abs(f) < 1e-14) continue;
      const h = t[a * 3 + a], v = t[l * 3 + l], $ = (v - h) / (2 * f);
      let _;
      Math.abs($) > 1e10 ? _ = 1 / (2 * $) : _ = ($ >= 0 ? 1 : -1) / (Math.abs($) + Math.sqrt($ * $ + 1));
      const S = 1 / Math.sqrt(1 + _ * _), w = _ * S;
      t[a * 3 + a] = h - _ * f, t[l * 3 + l] = v + _ * f, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let p = 0; p < 3; p++)
        if (p !== a && p !== l) {
          const g = t[p * 3 + a], u = t[p * 3 + l];
          t[p * 3 + a] = S * g - w * u, t[a * 3 + p] = t[p * 3 + a], t[p * 3 + l] = w * g + S * u, t[l * 3 + p] = t[p * 3 + l];
        }
      for (let p = 0; p < 3; p++) {
        const g = n[p * 3 + a], u = n[p * 3 + l];
        n[p * 3 + a] = S * g - w * u, n[p * 3 + l] = w * g + S * u;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function hu(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], s = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], s[0] += t[m][0], s[1] += t[m][1], s[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, s[0] /= n, s[1] /= n, s[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - s[0], r[1] - s[1], r[2] - s[2]] };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const k = e[m][0] - r[0], c = e[m][1] - r[1], d = e[m][2] - r[2], y = t[m][0] - s[0], E = t[m][1] - s[1], C = t[m][2] - s[2];
    o[0] += k * y, o[1] += k * E, o[2] += k * C, o[3] += c * y, o[4] += c * E, o[5] += c * C, o[6] += d * y, o[7] += d * E, o[8] += d * C;
  }
  const i = Fs(o), a = Rn(i, o), l = Rn(o, i);
  let f = Os(a), h = Os(l);
  function v(m) {
    const k = [0, 1, 2].sort((d, y) => m.values[y] - m.values[d]), c = new Array(9);
    for (let d = 0; d < 3; d++) {
      const y = k[d];
      c[d] = m.vectors[y], c[3 + d] = m.vectors[3 + y], c[6 + d] = m.vectors[6 + y];
    }
    return {
      values: [m.values[k[0]], m.values[k[1]], m.values[k[2]]],
      vectors: c
    };
  }
  f = v(f), h = v(h);
  const $ = f.vectors, _ = h.vectors;
  for (let m = 0; m < 3; m++) {
    const k = $[m], c = $[3 + m], d = $[6 + m], y = o[0] * k + o[1] * c + o[2] * d, E = o[3] * k + o[4] * c + o[5] * d, C = o[6] * k + o[7] * c + o[8] * d, R = _[m], A = _[3 + m], P = _[6 + m];
    y * R + E * A + C * P < 0 && (_[m] = -R, _[3 + m] = -A, _[6 + m] = -P);
  }
  const S = Fs($);
  let w = Rn(_, S);
  pu(w) < 0 && (_[2] = -_[2], _[5] = -_[5], _[8] = -_[8], w = Rn(_, S));
  const p = w[0] * s[0] + w[1] * s[1] + w[2] * s[2], g = w[3] * s[0] + w[4] * s[1] + w[5] * s[2], u = w[6] * s[0] + w[7] * s[1] + w[8] * s[2];
  return { R: w, t: [r[0] - p, r[1] - g, r[2] - u] };
}
function mu(e, t, n) {
  const r = e[0], s = e[1], o = e[2];
  return [
    t[0] * r + t[1] * s + t[2] * o + n[0],
    t[3] * r + t[4] * s + t[5] * o + n[1],
    t[6] * r + t[7] * s + t[8] * o + n[2]
  ];
}
const Ts = `
`, lr = 4;
function js(e, t, n) {
  if (n === "conformer") return t;
  let r = null;
  try {
    return r = e.get_mol(t, JSON.stringify({ removeHs: !1 })), !r || !r.get_molblock ? t : (r.set_new_coords(n === "coordgen"), r.get_molblock() || t);
  } catch (s) {
    return console.warn("[gufe-viz] could not lay out a molecule in 2D -", ge(s)), t;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function gu(e, t, n) {
  const r = [], s = [];
  for (const [h, v] of n) {
    const $ = e[v], _ = t[h];
    !$ || !_ || (r.push($), s.push(_));
  }
  if (r.length < 2) return null;
  const o = (h) => {
    let v = 0, $ = 0;
    for (const _ of h)
      v += _[0], $ += _[1];
    return [v / h.length, $ / h.length];
  }, i = o(r), a = o(s);
  let l = null, f = -1 / 0;
  for (const h of [!1, !0]) {
    let v = 0, $ = 0;
    for (let u = 0; u < r.length; u++) {
      const m = (h ? -1 : 1) * (r[u][0] - i[0]), k = r[u][1] - i[1], c = s[u][0] - a[0], d = s[u][1] - a[1];
      v += m * d - k * c, $ += m * c + k * d;
    }
    const _ = Math.hypot(v, $);
    if (_ <= f) continue;
    f = _;
    const S = Math.atan2(v, $), w = Math.cos(S), p = Math.sin(S), g = (h ? -1 : 1) * i[0];
    l = {
      cos: w,
      sin: p,
      mirror: h,
      tx: a[0] - (w * g - p * i[1]),
      ty: a[1] - (p * g + w * i[1])
    };
  }
  return l;
}
function yu(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function vu(e, t, n) {
  const r = bi(e);
  if (!r) return e;
  const s = e.replace(/\r/g, "").split(Ts);
  if (s[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const i = s[lr + o], a = t[o];
    if (i == null || !a) return e;
    s[lr + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = lr + r.atoms + a, f = s[l];
      if (f == null) break;
      const h = parseInt(f.substring(9, 12), 10);
      h !== 1 && h !== 6 || (s[l] = f.substring(0, 9) + String(h === 1 ? 6 : 1).padStart(3) + f.substring(12));
    }
  return s.join(Ts);
}
function $u(e, t, n) {
  try {
    const r = (i) => $r(i).coords.map((a) => [a[0], a[1]]), s = r(t), o = gu(s, r(e), n);
    return o ? vu(
      t,
      s.map((i) => yu(o, i)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", ge(r)), t;
  }
}
function bu(e, t, n, r, s) {
  const o = js(e, t, r), i = js(e, n, r);
  return !s || r === "conformer" ? { left: o, right: i } : { left: o, right: $u(o, i, s) };
}
const wu = {
  core: "0xaaaaaa",
  uniqueA: "0xff4d4d",
  uniqueB: "0x4dff88",
  pairA: "0xff8888",
  pairB: "0x88ffaa",
  pairLine: "0xffee55"
}, _u = {
  core: "0x888888",
  uniqueA: "0xd62828",
  uniqueB: "0x2a9d4a",
  pairA: "0xd62828",
  pairB: "0x2a9d4a",
  pairLine: "0xd9a300"
};
function Su() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const qe = Su() ? wu : _u, Is = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], dr = 420, xe = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, ur = { gap: 2.5, minLiftFraction: 0.6 }, ku = 24, Et = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function zs(e, t, n) {
  const r = [], s = [], o = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? r.push(i) : t[i] !== n[a] ? s.push(i) : o.push(i);
  }
  return { atoms: r, elements: s, mapped: o };
}
function Cu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Ci(e, t) {
  const n = Ce(t, e.componentA, "SmallMoleculeComponentViz"), r = Ce(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Lr(t, [e.componentA, e.componentB]) };
}
function Ds(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let s = 0; s < 3; s++)
      r[s] < t[s] && (t[s] = r[s]), r[s] > n[s] && (n[s] = r[s]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Eu(e, t) {
  const n = Ds(e), r = Ds(t);
  let s = 0;
  n.span[1] < n.span[s] && (s = 1), n.span[2] < n.span[s] && (s = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[s] - r.min[s] + ur.gap, a = ur.minLiftFraction * o + ur.gap;
  return { axis: s, lift: Math.max(i, a) };
}
function xu(e, t) {
  let n = 0;
  for (const s of [e, t]) {
    let o = 1 / 0;
    for (const i of s)
      i[0] < o && (o = i[0]), i[0] - o > n && (n = i[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Et.minSpread ? r : Et.minSpread) * Et.spreadFactor;
}
function Pu(e, t) {
  const n = nd, s = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(s), i = Math.min(o + 1, n.length - 1), a = s - o;
  let l = "0x";
  for (let f = 0; f < 3; f++) {
    const h = ($) => parseInt($.slice(1 + f * 2, 3 + f * 2), 16), v = Math.round(h(n[o]) + (h(n[i]) - h(n[o])) * a);
    l += v.toString(16).padStart(2, "0");
  }
  return l;
}
class Au extends Re {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Mt(n), s = Ce(r, n.componentA, "SmallMoleculeComponentViz"), o = Ce(r, n.componentB, "SmallMoleculeComponentViz");
    if (!s || !o)
      return t.appendChild(
        de("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = mt(s), a = mt(o), l = Cu(n);
    let f, h;
    try {
      f = $r(s.sdf, i), h = $r(o.sdf, a);
    } catch (B) {
      return t.appendChild(de(`Could not read a molecule: ${ge(B)}`, !0)), {};
    }
    const v = /* @__PURE__ */ new Map();
    for (const [B, ee] of l) v.set(ee, B);
    const $ = zs(l, f.symbols, h.symbols), _ = zs(v, h.symbols, f.symbols), S = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(S);
    const w = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    S.appendChild(w);
    const p = ht("atom-mapping.mode", "plain", Is.map((B) => B.id));
    let g = p.get();
    const u = j(
      "div",
      Gs
    );
    u.appendChild(
      zn(
        Is,
        g,
        (B) => {
          g = B, se();
        },
        p
      )
    ), S.appendChild(u);
    let m = [], k = 0, c = !0;
    const d = () => {
      k && cancelAnimationFrame(k), k = 0;
      for (const B of m) {
        B.interaction?.cleanup();
        try {
          B.viewer?.clear();
        } catch {
        }
      }
      m = [], w.replaceChildren();
    }, y = (B) => {
      const ee = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      ee.appendChild(
        j(
          "div",
          Pt,
          B
        )
      );
      const q = j("div", "flex:1;position:relative;min-height:0;");
      q.dataset.gufeViewer = "", ee.appendChild(q), w.appendChild(ee);
      const M = { container: q, viewer: null, interaction: null };
      return m.push(M), M;
    }, E = () => {
      if (m.length < 2) return;
      const B = m.map(() => "");
      let ee = !1;
      const q = () => {
        if (c) {
          if (!ee)
            for (let M = 0; M < m.length; M++) {
              const D = m[M].viewer;
              if (!D) continue;
              const F = JSON.stringify(D.getView());
              if (F !== B[M]) {
                ee = !0;
                for (let b = 0; b < m.length; b++)
                  b !== M && m[b].viewer && (m[b].viewer.setView(D.getView()), m[b].viewer.render()), B[b] = F;
                ee = !1;
                break;
              }
            }
          k = requestAnimationFrame(q);
        }
      };
      k = requestAnimationFrame(q);
    }, C = (B, ee) => {
      const q = Qe.createViewer(B.container, { backgroundColor: xt.viewer });
      for (const { mol: M } of ee) q.addModel(Qd(M), "sdf");
      return B.viewer = q, q;
    }, R = (B) => {
      B.viewer && (B.interaction = Dr(B.container, B.viewer));
    }, A = () => {
      for (const B of [f, h]) {
        const ee = y(B.name), q = C(ee, [{ mol: B }]);
        q.setStyle(
          {},
          { stick: { radius: xe.stick, colorscheme: "Jmol" }, sphere: { scale: xe.sphere, colorscheme: "Jmol" } }
        ), q.zoomTo(), q.render(), R(ee);
      }
      E();
    }, P = () => {
      const B = [
        { mol: f, uniques: $, colour: qe.uniqueA },
        { mol: h, uniques: _, colour: qe.uniqueB }
      ];
      for (const ee of B) {
        const q = y(ee.mol.name), M = C(q, [{ mol: ee.mol }]);
        M.setStyle(
          {},
          { stick: { radius: xe.stick, color: qe.core }, sphere: { scale: xe.sphere, color: qe.core } }
        );
        for (const D of ee.uniques.atoms)
          M.addStyle(
            { serial: D + 1 },
            {
              stick: { radius: xe.uniqueStick, color: ee.colour },
              sphere: { scale: xe.uniqueSphere, color: ee.colour }
            }
          );
        M.zoomTo(), M.render(), R(q);
      }
      E();
    }, z = () => {
      const B = y(`${i} (left), both overlaid (middle), ${a} (right)`), ee = xu(f.coords, h.coords), q = (G, W) => ({
        ...G,
        coords: G.coords.map(([Y, N, T]) => [Y + W, N, T])
      }), M = q(f, -ee), D = q(h, ee), F = C(B, [{ mol: M }, { mol: D }, { mol: f }, { mol: h }]);
      F.setStyle({}, { stick: {} });
      const b = Array.from(l);
      b.forEach(([G, W], Y) => {
        const N = M.coords[G], T = D.coords[W];
        if (!N || !T) return;
        const L = Pu(Y, b.length);
        for (const [U, J, te] of [N, T])
          F.addSphere({
            center: { x: U, y: J, z: te },
            radius: Et.sphereRadius,
            color: L,
            alpha: Et.sphereAlpha
          });
      }), F.zoomTo();
      const { clientWidth: x, clientHeight: I } = B.container, H = x - 2 * ku;
      H > 0 && H < I && F.zoom(H / I), F.render(), R(B);
    }, K = () => {
      const B = y(`${i} to ${a}  (${l.size} mapped pairs)`), ee = [], q = [];
      for (const [H, G] of l) {
        const W = f.coords[H], Y = h.coords[G];
        W && Y && (ee.push(W), q.push(Y));
      }
      const M = hu(ee, q), D = h.coords.map((H) => M ? mu(H, M.R, M.t) : [...H]), { axis: F, lift: b } = Eu(f.coords, D), x = {
        ...h,
        coords: D.map((H) => {
          const G = [H[0], H[1], H[2]];
          return G[F] += b, G;
        })
      }, I = C(B, [{ mol: f }, { mol: x }]);
      I.setStyle(
        { model: 0 },
        { stick: { radius: xe.stick, color: qe.pairA }, sphere: { scale: xe.pairSphere, color: qe.pairA } }
      ), I.setStyle(
        { model: 1 },
        { stick: { radius: xe.stick, color: qe.pairB }, sphere: { scale: xe.pairSphere, color: qe.pairB } }
      );
      for (const [H, G] of l) {
        const W = f.coords[H], Y = x.coords[G];
        !W || !Y || I.addCylinder({
          start: { x: W[0], y: W[1], z: W[2] },
          end: { x: Y[0], y: Y[1], z: Y[2] },
          radius: xe.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: qe.pairLine
        });
      }
      I.zoomTo(), F === 2 ? I.rotate(90, "x") : F === 0 && I.rotate(-90, "z"), I.render(), R(B);
    }, Q = () => {
      const B = ft, ee = zd(B.customSpec), M = [
        { mol: f, uniques: $, side: "left", custom: ee.left },
        { mol: h, uniques: _, side: "right", custom: ee.right }
      ].map((D) => {
        const F = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        F.appendChild(
          j(
            "div",
            Pt,
            D.mol.name
          )
        );
        const b = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${xt.canvas2D};`
        );
        return b.appendChild(de("Loading 2D depiction...")), F.appendChild(b), w.appendChild(F), { box: b, side: D };
      });
      zr().then((D) => {
        const F = Bd(B, D), b = bu(D, s.sdf, o.sdf, B.layout, B.alignPair ? l : null);
        for (const { box: x, side: I } of M) {
          const H = Vd(B, I.mol, I.uniques, I.side), G = Ud(
            B,
            dr,
            H,
            I.custom,
            F,
            I.mol.symbols.length
          ), W = Kd(D, I.side === "left" ? b.left : b.right, dr, G);
          if (x.replaceChildren(), !W) {
            x.appendChild(de("Failed to parse molecule", !0));
            continue;
          }
          _i(x, W, dr);
          const Y = x.querySelector("svg");
          Y && Xd(Y, I.mol, B, H, I.custom, F);
        }
      }).catch((D) => {
        for (const { box: F } of M)
          F.replaceChildren(de(`RDKit failed to load: ${ge(D)}`, !0));
      });
    }, X = () => {
      const B = j("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      w.appendChild(B);
      const ee = j("div", "display:flex;flex-direction:column;gap:2px;");
      ee.appendChild(
        j(
          "div",
          `font-size:${Z.title};font-weight:${Ge.bold};color:${je.title};`,
          n.name || `${i} to ${a}`
        )
      ), ee.appendChild(j("div", `font-size:${Z.body};color:${je.faint};`, "LigandAtomMapping")), B.appendChild(ee);
      const q = j("div", `display:flex;flex-wrap:wrap;gap:${ce.lg} 16px;font-size:${Z.small};`);
      q.appendChild(fe("mapped atoms", String(l.size))), q.appendChild(
        fe("element changes", String($.elements.length), ft.modifiedColor)
      ), q.appendChild(fe(`unique to ${i}`, String($.atoms.length), ft.destroyedColor)), q.appendChild(fe(`unique to ${a}`, String(_.atoms.length), ft.createdColor)), q.appendChild(fe(`atoms in ${i}`, String(f.symbols.length))), q.appendChild(fe(`atoms in ${a}`, String(h.symbols.length))), q.appendChild(fe("score", n.score == null ? ut : n.score.toFixed(3))), B.appendChild(q);
      const M = j("div", Gr, "Correspondence");
      B.appendChild(M);
      const D = j("div", Hr);
      D.textContent = l.size ? Array.from(l, ([b, x]) => `${b} -> ${x}`).join("   ") : "This mapping relates no atoms at all.", B.appendChild(D);
      const F = Object.entries(n.annotations ?? {}).filter(([b]) => b !== "score");
      if (F.length) {
        B.appendChild(j("div", Gr, "Annotations"));
        const b = j("div", `${Hr}color:${je.faint};`);
        for (const [x, I] of F)
          b.appendChild(j("div", "", `${x}: ${String(I)}`));
        B.appendChild(b);
      }
      B.appendChild(
        j(
          "div",
          `${Fi}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, se = () => {
      if (d(), g === "info") {
        X();
        return;
      }
      if (g === "2d") {
        Q();
        return;
      }
      w.appendChild(de("Loading 3D viewer...")), Ir().then(() => {
        c && (w.replaceChildren(), g === "colored" ? P() : g === "openfe" ? z() : g === "lines" ? K() : A());
      }).catch((B) => {
        w.replaceChildren(de(`3D render failed: ${ge(B)}`, !0));
      });
    };
    return se(), {
      onResize() {
        for (const B of m)
          B.viewer && (B.viewer.resize(), B.viewer.render());
      },
      cleanup() {
        c = !1, d();
      }
    };
  }
}
Me("gufe-atom-mapping", Au);
const qs = ["Force-directed", "Circular", "Radial"], Ru = "ligand-network", Vs = "Cmd/Ctrl-click to select several.", Ls = (e) => Math.round(e * 100) / 100;
function Mu(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (o) => typeof o == "number" && Number.isFinite(o);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((o) => Array.isArray(o) && o.length === 2 && o.every(r))) return null;
  const s = r(n.selected) ? Math.trunc(n.selected) : -1;
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: s };
}
function Nu(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const St = { initial: 0.58, min: 0.25, max: 0.8 }, tt = 38, Mn = 200, Ei = 4, Fu = 14, Ou = 18, Ae = {
  fontSize: 11,
  below: tt - Ei + 12,
  minFontSize: 7,
  insideWidth: (tt - 6) * 2
}, Bs = 1.5, Tu = 6.5, ju = 0.9, Iu = 14, fr = { size: 8, clearance: 8 }, zu = { fontSize: 10 }, xi = { debounceMs: 250, atomRadius: 0.4 }, Du = yr(O.netMatchAtom), qu = { padding: 4 }, pt = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Vu = (e) => pt.find((t) => e >= t.from) ?? pt[pt.length - 1], Lu = (e) => pt[Math.min(pt.indexOf(e) + 1, pt.length - 1)], Nn = 200, Bu = 24, pr = { node: 0.12, edge: 0.06 }, Uu = 1.8, Se = {
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
function Ku(e) {
  const t = j(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${Z.small};line-height:1.5;max-width:260px;background:${O.tooltipBg};border:1px solid ${O.tooltipBorder};color:${O.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
  );
  return e.appendChild(t), {
    show(n, r, s) {
      t.innerHTML = n, t.style.left = `${r + 14}px`, t.style.top = `${s - 10}px`, t.style.opacity = "1";
    },
    hide() {
      t.style.opacity = "0";
    },
    remove() {
      t.remove();
    }
  };
}
function Hu(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const s = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, s);
    const o = ie("marker", {
      id: s,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: tt + fr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: fr.size,
      markerHeight: fr.size,
      orient: "auto"
    });
    return o.appendChild(ie("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), s;
  };
}
function Gu(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Wu(e) {
  const [t, n] = O.netEdgeRamp.map(Gu), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, i) => Math.round(o + (n[i] - o) * r)).join(",")})`;
}
const Oe = mt, Ju = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Yu(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], s = (v) => (e.matched().get(v) ?? []).join(","), o = (v, $) => {
    if (t.has($) || n.has($)) return;
    const _ = e.nodes[$], S = e.matched().get($), w = _.sdf && wi(
      v,
      _.sdf,
      Mn,
      ft.layout,
      S && { atoms: S, color: Du, radius: xi.atomRadius }
    );
    if (!w) {
      n.add($);
      return;
    }
    const p = new DOMParser().parseFromString(w, "image/svg+xml").documentElement;
    if (!p || p.nodeName.toLowerCase() === "parsererror") {
      n.add($);
      return;
    }
    const g = (tt - Ei) * 2 / Mn, u = e.depictionGroups[$];
    u.setAttribute(
      "transform",
      `translate(${-g * Mn / 2},${-g * Mn / 2}) scale(${g})`
    );
    let m = 0;
    for (const k of Array.from(p.childNodes)) {
      if (k.nodeType !== 1) continue;
      const c = k.nodeName.toLowerCase();
      if (!(c === "defs" || c === "metadata" || c === "title")) {
        if (c === "rect") {
          const d = (k.getAttribute("fill") ?? "").toLowerCase();
          if (d === "#ffffff" || d === "white" || d === "rgb(255,255,255)") continue;
        }
        u.appendChild(document.importNode(k, !0)), m++;
      }
    }
    m ? (t.add($), r[$] = s($)) : n.add($);
  }, i = () => {
    for (const v of [...t])
      r[v] !== s(v) && (e.depictionGroups[v].replaceChildren(), t.delete(v));
  }, a = [], l = (v, $) => {
    if (a[v]) return a[v];
    $.setAttribute("font-size", String(Ae.fontSize));
    let _ = 0;
    try {
      _ = $.getBBox().width;
    } catch {
      return Ae.fontSize;
    }
    if (!_) return Ae.fontSize;
    const S = Ae.fontSize * Ae.insideWidth / _;
    return a[v] = Math.max(Ae.minFontSize, Math.min(Ae.fontSize, S)), a[v];
  }, f = (v, $) => {
    const _ = $.structure && !t.has(v) ? Lu($) : $;
    e.depictionGroups[v].setAttribute("display", _.structure ? "inline" : "none");
    const S = e.matched().has(v), w = e.circles[v];
    w.setAttribute("fill", _.disc ? S ? O.netMatchFill : O.netNodeFill : "none"), w.setAttribute("stroke", _.disc ? S ? O.netMatchStroke : O.netNodeStroke : "none"), e.initials[v].setAttribute("display", _.initials ? "inline" : "none");
    const p = e.captions[v];
    if (p.setAttribute("fill", S ? O.netMatchStroke : O.netNodeCaption), p.setAttribute("display", _.name === "none" ? "none" : "inline"), _.name === "none") return;
    const g = _.name === "inside";
    p.setAttribute("y", g ? "0" : String(Ae.below)), p.setAttribute("dominant-baseline", g ? "middle" : "auto"), p.setAttribute("font-size", String(g ? l(v, p) : Ae.fontSize));
  };
  return { apply: (v, $, _) => {
    const S = Vu(v);
    e.stage.setAttribute("data-detail", S.id), e.edgeLabels.setAttribute("display", S.edgeScores ? "inline" : "none");
    for (let u = 0; u < e.nodes.length; u++) f(u, S);
    if (!S.structure) return;
    const { width: w, height: p } = e.viewport(), g = [];
    e.nodes.forEach((u, m) => {
      if (t.has(m) || n.has(m)) return;
      const k = u.x * v + $, c = u.y * v + _;
      k < -Nn || c < -Nn || k > w + Nn || c > p + Nn || g.push(m);
    }), g.length && e.rdkit().then((u) => {
      if (u)
        for (const m of g)
          o(u, m), f(m, S);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: i };
}
function Xu(e, t, n, r, s) {
  const o = (i) => s === "keys" ? i["gufe-key"] : Oe(i);
  return r === "ligands" ? e.filter((i) => n.has(i["gufe-key"])).map(o).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${o(i.from)}, ${o(i.to)}`).join(`
`);
}
function Zu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Us(e, t)), navigator.clipboard || Us(e, t);
}
function Us(e, t) {
  const n = j("textarea", `width:100%;height:80px;font-size:${Z.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Qu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = j("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function ef(e) {
  const t = Wr("ligand-network.query"), n = Wr("ligand-network.smarts"), r = kr("ligand-network.minScore", 0, 0, 1), s = ht("ligand-network.exportAs", "names", ["names", "keys"]), o = j(
    "div",
    `display:flex;flex-direction:column;gap:8px;min-width:236px;max-width:340px;box-sizing:border-box;padding:10px;min-height:0;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`
  ), i = j("input", `${hr}width:100%;box-sizing:border-box;`);
  i.type = "search", i.placeholder = "Search ligands", i.value = t.get(), e.query.text = i.value, i.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), o.appendChild(i);
  const a = j("input", `${hr}width:100%;box-sizing:border-box;`);
  a.type = "text", a.placeholder = "Colour by SMARTS", a.value = n.get(), a.spellcheck = !1, a.setAttribute("aria-label", "Colour the ligands matching this SMARTS pattern"), o.appendChild(a);
  const l = j(
    "div",
    // One line held open whether or not there is anything to say, so this reads
    // as a line that changes rather than as the ligand list twitching up and
    // down under it every time a pattern is typed, matched or refused. Every
    // message fits one line at this panel width; a longer one would want the
    // wording shortened rather than the space here grown.
    `font-size:${Z.tiny};line-height:1.5;min-height:1.5em;color:${O.textMuted2};`
  );
  o.appendChild(l);
  const f = (A) => {
    switch (A.status) {
      case "ok": {
        const P = A.unreadable ? `, ${A.unreadable} could not be read` : "";
        return `${A.matched.size} of ${e.nodes.length} ligands match${P}`;
      }
      case "invalid":
        return "RDKit does not accept that as a SMARTS pattern.";
      case "unsupported":
        return "This RDKit build cannot match SMARTS.";
      default:
        return "";
    }
  }, h = (A) => {
    l.textContent = A.trim() ? "Matching..." : "", e.match(A).then(
      (P) => {
        P.status !== "superseded" && (l.textContent = f(P));
      },
      () => {
        l.textContent = "Matching failed.";
      }
    );
  };
  let v = 0;
  a.oninput = () => {
    n.set(a.value), window.clearTimeout(v), v = window.setTimeout(() => h(a.value), xi.debounceMs);
  };
  const $ = j("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${O.textMuted};`), _ = j("span", `min-width:28px;color:${O.textPrimary};`, "0.00"), S = j("input", "flex:1;");
  S.type = "range", S.min = "0", S.max = "1", S.step = "0.01", S.value = String(r.get()), e.filter.minScore = Number(S.value), S.setAttribute("aria-label", "Hide mappings scoring below this"), $.appendChild(j("span", "", "score >=")), $.appendChild(S), $.appendChild(_), o.appendChild($);
  const w = j("div", `font-size:${Z.small};color:${O.textMuted2};`);
  o.appendChild(w);
  const p = j("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  o.appendChild(p), o.appendChild(j("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`, Vs));
  const g = j("div", "display:flex;flex-direction:column;gap:6px;"), u = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
  u.appendChild(j("span", "", "copy as"));
  const m = Cr(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    s.get(),
    () => {
    },
    s
  );
  m.style.flex = "1", u.appendChild(m), g.appendChild(u);
  const k = j("div", `font-size:${Z.tiny};line-height:1.5;color:${O.textMuted2};`), c = (A) => {
    k.textContent = A;
  }, d = j("div", "display:flex;gap:4px;"), y = [
    ["Ligands", "ligands", "Copy the selected ligand names, one per line"],
    ["Edges", "edges", "Copy the edges between the selected ligands, one pair per line"]
  ];
  for (const [A, P, z] of y) {
    const K = j("button", `${At}flex:1;`, A);
    K.title = z, K.onclick = (Q) => {
      const X = m.value, se = Xu(e.nodes, e.edges, e.selected, P, X);
      if (!se) {
        c(
          e.selected.size === 0 ? "Nothing selected. Click a ligand above." : P === "edges" ? `No mappings between the ${e.selected.size} selected ligands. ${Vs}` : "Nothing to copy."
        );
        return;
      }
      const B = se.split(`
`).length;
      Q.shiftKey ? (Qu(se, `selected-${P}.txt`), c(`Saved ${B} ${P === "edges" ? "edges" : "ligands"} to a file.`)) : (Zu(se, g), c(P === "edges" ? `Copied ${B} edges.` : `Copied ${e.selected.size} ligands.`));
    }, d.appendChild(K);
  }
  g.appendChild(d), g.appendChild(k), g.appendChild(
    j("div", `font-size:${Z.tiny};color:${O.textMuted2};`, "Shift-click to save as a file instead.")
  ), o.appendChild(g);
  const E = j("button", `${At}width:100%;`, "Clear selection");
  E.onclick = () => {
    e.selected.clear(), R(), e.refresh();
  }, o.appendChild(E);
  const C = (A) => {
    const P = e.query.text.trim().toLowerCase();
    return P ? Oe(A).toLowerCase().includes(P) || (A.smiles ?? "").toLowerCase().includes(P) || A["gufe-key"].toLowerCase().includes(P) : !0;
  }, R = () => {
    c(""), p.replaceChildren();
    const A = e.nodes.map((P, z) => ({ node: P, index: z })).filter(({ node: P }) => C(P));
    w.textContent = `${A.length} of ${e.nodes.length} ligands`;
    for (const { node: P, index: z } of A) {
      const K = P["gufe-key"], Q = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Z.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(K) ? O.cardBorderActive : O.cardBorder};background:${e.selected.has(K) ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), X = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Oe(P));
      X.title = `${Oe(P)}
${P.smiles ?? ""}`, Q.appendChild(X), Q.onclick = (se) => {
        se.shiftKey || se.metaKey || se.ctrlKey ? e.selected.has(K) ? e.selected.delete(K) : e.selected.add(K) : (e.selected.clear(), e.selected.add(K), e.focus(z)), R(), e.refresh();
      }, p.appendChild(Q);
    }
    A.length || p.appendChild(j("div", `font-size:${Z.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return i.oninput = () => {
    e.query.text = i.value, t.set(i.value), R(), e.refresh();
  }, S.oninput = () => {
    e.filter.minScore = Number(S.value), _.textContent = e.filter.minScore.toFixed(2), r.set(e.filter.minScore), e.refresh();
  }, R(), a.value.trim() && h(a.value), o;
}
class tf extends Re {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Mt(n), s = [];
    let o = 0;
    for (const W of n.nodes ?? []) {
      const Y = Ce(r, W, "SmallMoleculeComponentViz");
      if (!Y) {
        o++;
        continue;
      }
      s.push({ ...Y, x: 0, y: 0 });
    }
    const i = new Map(s.map((W) => [W["gufe-key"], W])), a = [];
    let l = 0;
    for (const W of n.edges ?? []) {
      const Y = i.get(W.componentA), N = i.get(W.componentB);
      if (!Y || !N) {
        l++;
        continue;
      }
      a.push({ ...W, index: a.length, from: Y, to: N });
    }
    const f = We(n.name || "Ligand network");
    f.statsEl.appendChild(fe("ligands", String(s.length))), f.statsEl.appendChild(fe("mappings", String(a.length))), t.appendChild(f);
    const h = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const v = /* @__PURE__ */ new Set(), $ = { minScore: 0 }, _ = { text: "" };
    let S = () => {
    }, w = null;
    const p = () => w ??= zr().catch((W) => (console.warn("[gufe-viz] RDKit failed to load:", ge(W)), null)), g = fu(
      p,
      s.map((W) => W.sdf ?? "")
    );
    let u = /* @__PURE__ */ new Map(), m = () => {
    };
    const k = async (W) => {
      const Y = await g.run(W);
      return Y.status === "superseded" || (u = Y.status === "ok" ? Y.matched : /* @__PURE__ */ new Map(), m()), Y;
    }, c = ua(
      f,
      () => ef({
        nodes: s,
        edges: a,
        selected: v,
        filter: $,
        query: _,
        refresh: () => S(),
        focus: (W) => Q(W),
        match: (W) => k(W)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => G(),
        remember: Ct("ligand-network.menuOpen", !1)
      }
    );
    h.appendChild(c.panel);
    let d = () => {
    };
    const y = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), E = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.appBg};`);
    h.appendChild(y), h.appendChild(
      ni(h, y, E, {
        min: St.min,
        max: St.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: kr("ligand-network.canvasShare", St.initial, St.min, St.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => d()
      })
    ), h.appendChild(E);
    const C = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${O.netCanvasBg};`);
    y.appendChild(C);
    const R = ht("ligand-network.layout", "Force-directed", qs), A = this.#t(
      (W) => G(W),
      () => I(),
      R
    );
    y.appendChild(A.bar);
    const P = this.#e(E, r);
    if (!s.length)
      return C.appendChild(
        de(
          o ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), P.message("Nothing to show."), {};
    o && Ze(
      C,
      `${o} ligand${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Ze(C, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const z = p(), K = Ku(C);
    let Q = () => {
    };
    const X = Mu(Vi(Ru), s.length);
    let se = X && { scale: X.scale, tx: X.tx, ty: X.ty }, B = X && X.selected < a.length ? X.selected : a.length ? 0 : -1, ee = () => ({ scale: 1, tx: 0, ty: 0 }), q = !1, M = null, D = R.get(), F = !1, b = !0, x = () => {
    }, I = () => {
    };
    const H = (W) => {
      B = W, P.show(a[W] ?? null), x();
    }, G = (W = D) => {
      const Y = q && W === D ? ee() : null;
      D = W, M?.(), M = null, C.querySelector("svg")?.remove();
      const N = C.clientWidth || 800, T = C.clientHeight || 600;
      nf(s, N, T, D, a), X && Nu(s, X.nodes);
      const L = () => {
        if (!b) return;
        const U = this.#n(C, s, a, N, T, H, z, K);
        x = () => U.setSelected(B), I = U.reset, M = U.cleanup, Q = (te) => U.focusOn(te), ee = U.transform, S = () => {
          const te = _.text.trim().toLowerCase(), ue = v.size > 0 || te.length > 0, ye = /* @__PURE__ */ new Set();
          for (const le of s) {
            const _e = le["gufe-key"], be = v.has(_e) || te.length > 0 && (Oe(le).toLowerCase().includes(te) || (le.smiles ?? "").toLowerCase().includes(te) || _e.toLowerCase().includes(te));
            (!ue || be) && ye.add(_e);
          }
          const pe = /* @__PURE__ */ new Set();
          a.forEach((le, _e) => {
            (le.score ?? 0) < $.minScore || !ye.has(le.from["gufe-key"]) || !ye.has(le.to["gufe-key"]) || pe.add(_e);
          });
          const he = ue || $.minScore > 0;
          U.setEmphasis(he ? ye : null, he ? pe : null);
        }, m = () => U.setMatches(u), x(), S(), m();
        const J = se ?? Y;
        J ? (U.setTransform(J.scale, J.tx, J.ty), se = null) : U.fit(), q = !0;
      };
      if (D !== "Force-directed" || F || X) {
        L();
        return;
      }
      rf(s, a, N, T).then((U) => {
        if (b) {
          if (U) {
            L();
            return;
          }
          F = !0, A.picker.value = "Circular", Ze(C, "d3 could not be loaded - showing the circular layout instead"), G("Circular");
        }
      }, L);
    };
    return d = () => G(), G(), P.show(a[B] ?? null), {
      onResize: () => G(),
      cleanup: () => {
        b = !1, g.cancel(), K.remove(), M?.();
      },
      viewState: () => ({
        nodes: s.map((W) => [Ls(W.x), Ls(W.y)]),
        ...ee(),
        selected: B
      })
    };
  }
  #t(t, n, r) {
    const s = j(
      "div",
      Sr.bottom
    ), o = j("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
    o.appendChild(j("span", "", "score")), o.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${O.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(j("span", "", "0 -> 1")), s.appendChild(o), s.appendChild(j("label", `font-size:${Z.body};margin-left:auto;color:${O.textMuted};`, "Layout"));
    const i = Cr(
      qs.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return s.appendChild(i), s.appendChild(qr(n, "Reset pan and zoom")), { bar: s, picker: i };
  }
  /**
   * The right-hand pane: the selected mapping, drawn by the mapping view.
   *
   * Deliberately nothing but that element. It carries its own header, names both
   * ligands on its own box labels, and keeps the counts and annotations behind
   * its Info mode - so a pane title, a heading repeating the two names, and an
   * annotation list underneath were all saying a second time what the picture
   * below them already said.
   */
  #e(t, n) {
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const s = (i) => r.replaceChildren(de(i));
    return { show: (i) => {
      if (!i) {
        s("Click an edge to see its mapping.");
        return;
      }
      const a = document.createElement("gufe-atom-mapping");
      a.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", a.payload = Ci(i, n), r.replaceChildren(a);
    }, message: s };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #n(t, n, r, s, o, i, a, l) {
    const f = ie("svg", {
      class: "gufe-graph",
      width: s,
      height: o,
      style: "display:block;touch-action:none;"
    }), h = ie("g");
    f.appendChild(h), t.appendChild(f);
    const v = ie("defs"), $ = Hu(v);
    f.appendChild(v);
    const _ = [], S = ie("g"), w = ie("g"), p = ie("g", { "pointer-events": "none" }), g = ie("g");
    h.append(S, w, p, g);
    for (const A of r) {
      const P = Wu(A.score), z = Bs + (A.score ?? 0.5) * (Tu - Bs), K = ie("line", {
        stroke: O.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": z + qu.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), Q = ie("line", {
        stroke: P,
        "stroke-width": z,
        "stroke-opacity": ju,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${$(P)})`,
        "pointer-events": "none"
      }), X = ie("line", { stroke: "transparent", "stroke-width": Iu, style: "cursor:pointer;" });
      X.addEventListener("click", (ee) => {
        ee.stopPropagation(), i(A.index);
      }), X.addEventListener("mousemove", (ee) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Ve(Oe(A.from))} -&gt; ${Ve(Oe(A.to))}</div>` + (A.score == null ? `<div style="color:${O.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${O.textMuted2};">Click to see the mapping</div>`,
          ee.offsetX,
          ee.offsetY
        );
      }), X.addEventListener("mouseleave", () => l.hide()), _.push(K), S.append(K, Q), w.appendChild(X);
      const se = ie("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": zu.fontSize,
        "font-weight": 600,
        fill: O.netEdgeLabel
      });
      se.textContent = A.score == null ? "" : A.score.toFixed(2);
      const B = ie("g", { class: "gufe-edge-label" });
      B.appendChild(se), p.appendChild(B);
    }
    const u = [], m = [], k = [], c = [], d = n.map((A) => {
      const P = ie("g", { class: "gufe-node", style: "cursor:grab;" });
      P.addEventListener("mousemove", (se) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Ve(Oe(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ve(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${O.textMuted2};overflow-wrap:anywhere;">${Ve(A["gufe-key"])}</div>`,
          se.offsetX,
          se.offsetY
        );
      }), P.addEventListener("mouseleave", () => l.hide());
      const z = ie("circle", {
        r: tt,
        fill: O.netNodeFill,
        stroke: O.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      P.appendChild(z), m.push(z);
      const K = ie("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      P.appendChild(K), u.push(K);
      const Q = ie("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ou,
        "font-weight": 700,
        fill: O.netInitials,
        "pointer-events": "none"
      });
      Q.textContent = Oe(A).slice(0, 2).toUpperCase(), P.appendChild(Q), k.push(Q);
      const X = ie("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Ae.below,
        "font-size": Ae.fontSize,
        "font-weight": 600,
        fill: O.netNodeCaption,
        "pointer-events": "none"
      });
      return X.textContent = Ju(Oe(A), Fu), X.setAttribute("display", "none"), c.push(X), P.appendChild(X), g.appendChild(P), P;
    }), y = () => {
      r.forEach((A, P) => {
        for (const K of [_[P], S.children[P * 2 + 1], w.children[P]]) {
          const Q = K;
          Q.setAttribute("x1", String(A.from.x)), Q.setAttribute("y1", String(A.from.y)), Q.setAttribute("x2", String(A.to.x)), Q.setAttribute("y2", String(A.to.y));
        }
        p.children[P].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, P) => d[P].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    y();
    let E = /* @__PURE__ */ new Map();
    const C = Yu({
      nodes: n,
      circles: m,
      matched: () => E,
      captions: c,
      initials: k,
      depictionGroups: u,
      edgeLabels: p,
      stage: f,
      rdkit: () => a,
      viewport: () => ({ width: s, height: o })
    }), R = this.#r(f, h, n, d, y, C.apply);
    return {
      setSelected(A) {
        _.forEach((P, z) => P.setAttribute("opacity", z === A ? "0.95" : "0"));
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
        E = A, C.forget();
        const { scale: P, tx: z, ty: K } = R.transform();
        C.apply(P, z, K);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, P) {
        d.forEach((z, K) => {
          const Q = !A || A.has(n[K]["gufe-key"]);
          z.setAttribute("opacity", Q ? "1" : String(pr.node));
        }), r.forEach((z, K) => {
          const Q = !P || P.has(K), X = Q ? "0.9" : String(pr.edge);
          S.children[K * 2 + 1].setAttribute("stroke-opacity", X), p.children[K].setAttribute("opacity", Q ? "1" : String(pr.edge));
        });
      },
      focusOn(A) {
        const P = n[A];
        P && R.centreOn(P.x, P.y);
      },
      setDetail: C.apply,
      depictionsDrawn: () => C.drawn(),
      fit: R.fit,
      reset: R.reset,
      transform: R.transform,
      setTransform: R.setTransform,
      cleanup: R.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #r(t, n, r, s, o, i) {
    let a = 1, l = 0, f = 0;
    const h = () => {
      n.setAttribute("transform", `translate(${l},${f}) scale(${a})`), i(a, l, f);
    }, v = () => {
      const m = t.getBoundingClientRect();
      return {
        width: m.width || Number(t.getAttribute("width")) || t.clientWidth || 800,
        height: m.height || Number(t.getAttribute("height")) || t.clientHeight || 600
      };
    }, $ = () => {
      let m = 1 / 0, k = 1 / 0, c = -1 / 0, d = -1 / 0;
      for (const R of r)
        m = Math.min(m, R.x), k = Math.min(k, R.y), c = Math.max(c, R.x), d = Math.max(d, R.y);
      if (a = 1, l = 0, f = 0, !Number.isFinite(m)) {
        h();
        return;
      }
      const y = tt + Bu, { width: E, height: C } = v();
      a = Math.min(1, E / (c - m + y * 2), C / (d - k + y * 2)), l = E / 2 - (m + c) / 2 * a, f = C / 2 - (k + d) / 2 * a, h();
    }, S = yi(t, {
      onZoom: (m) => {
        const k = t.getBoundingClientRect(), c = m.clientX - k.left, d = m.clientY - k.top, y = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-m.deltaY * 2e-3)));
        return l = c - (c - l) * y, f = d - (d - f) * y, a *= y, h(), y !== 1;
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let w = null;
    const p = (m) => {
      w = { x: m.clientX - l, y: m.clientY - f };
    }, g = (m) => {
      w && (l = m.clientX - w.x, f = m.clientY - w.y, h());
    }, u = () => {
      w = null;
    };
    return t.addEventListener("pointerdown", p), t.addEventListener("pointermove", g), t.addEventListener("pointerup", u), t.addEventListener("pointercancel", u), t.addEventListener("pointerleave", u), s.forEach((m, k) => {
      let c = null;
      m.addEventListener("pointerdown", (y) => {
        y.stopPropagation(), c = { x: y.clientX - r[k].x * a, y: y.clientY - r[k].y * a }, m.setPointerCapture(y.pointerId);
      }), m.addEventListener("pointermove", (y) => {
        c && (r[k].x = r[k].fx = (y.clientX - c.x) / a, r[k].y = r[k].fy = (y.clientY - c.y) / a, o());
      });
      const d = () => {
        c = null;
      };
      m.addEventListener("pointerup", d), m.addEventListener("pointercancel", d);
    }), {
      fit: $,
      // Back to the view it opened on, which is the framed one. An identity
      // transform would be "reset" only in the sense that a blank canvas is.
      reset: $,
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(m, k) {
        const { width: c, height: d } = v();
        a = Math.max(a, Uu), l = c / 2 - m * a, f = d / 2 - k * a, h();
      },
      transform: () => ({ scale: a, tx: l, ty: f }),
      // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
      // camera being put back exactly where it was, and a limit applied here
      // would quietly move it.
      setTransform(m, k, c) {
        a = m, l = k, f = c, h();
      },
      cleanup() {
        S.cleanup(), t.removeEventListener("pointerdown", p), t.removeEventListener("pointermove", g), t.removeEventListener("pointerup", u), t.removeEventListener("pointercancel", u), t.removeEventListener("pointerleave", u);
      }
    };
  }
}
function nf(e, t, n, r, s) {
  const o = t / 2, i = n / 2, a = (l, f) => {
    l.forEach((h, v) => {
      const $ = 2 * Math.PI * v / Math.max(1, l.length) - Math.PI / 2;
      h.x = o + f * Math.cos($), h.y = i + f * Math.sin($), h.fx = r === "Force-directed" ? void 0 : h.x, h.fy = r === "Force-directed" ? void 0 : h.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((w) => [w["gufe-key"], []]));
    for (const w of s)
      l.get(w.from["gufe-key"]).push(w.to["gufe-key"]), l.get(w.to["gufe-key"]).push(w.from["gufe-key"]);
    const f = new Map(e.map((w) => [w["gufe-key"], w])), h = e.reduce(
      (w, p) => l.get(p["gufe-key"]).length > l.get(w["gufe-key"]).length ? p : w
    ), v = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let $ = [h["gufe-key"]], _ = 0;
    const S = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      a(
        $.map((p) => f.get(p)),
        _ === 0 ? 0 : _ * S + 40
      );
      const w = [];
      for (const p of $)
        for (const g of l.get(p))
          v.has(g) || (v.add(g), w.push(g));
      $ = w, _++;
    }
    a(e.filter((w) => !v.has(w["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function rf(e, t, n, r) {
  let s;
  try {
    if (s = await gi(), typeof s?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), i = s.forceSimulation(e).force(
    "link",
    s.forceLink(o).id((l) => l["gufe-key"]).distance((l) => Se.linkBaseDistance + (1 - (l.score ?? 0.5)) * Se.linkScoreBonus).strength(Se.linkStrength)
  ).force(
    "charge",
    s.forceManyBody().strength(Se.chargeStrength).distanceMin(Se.chargeDistanceMin).distanceMax(Se.chargeDistanceMax)
  ).force("center", s.forceCenter(n / 2, r / 2).strength(Se.centerStrength)).force("collision", s.forceCollide(tt + Se.collisionPadding).iterations(Se.collisionIterations)).force("x", s.forceX(n / 2).strength(Se.drift)).force("y", s.forceY(r / 2).strength(Se.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * Se.tickMultiplier; l++) i.tick();
  return !0;
}
Me("gufe-ligand-network", tf);
const of = 520;
function sf(e, t) {
  return { ...e, registry: Lr(t, Object.values(e.components ?? {})) };
}
function af(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function cf(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class lf extends Re {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Mt(n), s = [], o = [];
    for (const [p, g] of Object.entries(n.components ?? {})) {
      const u = et(r, g);
      u ? s.push([p, u]) : o.push(p);
    }
    const i = We(n.name || "Chemical system");
    if (i.statsEl.appendChild(fe("components", String(s.length))), t.appendChild(i), !s.length)
      return t.appendChild(
        de(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = j("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), o.length && Ze(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const l = j("div", `min-width:0;overflow:auto;display:flex;gap:6px;padding:10px;background:${O.panelBg};`);
    a.appendChild(l);
    const f = j("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(f);
    const h = j("div", "flex:1;min-height:0;display:flex;");
    f.appendChild(h);
    const v = document.createElement("gufe-view");
    v.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(v);
    const $ = [], _ = (p) => {
      $.forEach((g, u) => {
        const m = u === p;
        g.style.background = m ? O.cardBgActive : O.cardBg, g.style.borderColor = m ? O.cardBorderActive : O.cardBorder;
      }), v.payload = s[p][1];
    };
    s.forEach(([p, g], u) => {
      const m = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${O.cardBorder};border-radius:8px;background:${O.cardBg};cursor:pointer;font-family:inherit;font-size:${Z.body};flex-shrink:0;`
      );
      m.appendChild(j("span", `font-weight:700;color:${O.textPrimary};`, p)), m.appendChild(j("span", `font-size:${Z.small};color:${O.textMuted};`, af(g))), m.appendChild(Dn(cf(g))), m.onclick = () => _(u), $.push(m), l.appendChild(m);
    });
    let S = null;
    const w = ti(t, (p) => {
      const g = p > 0 && p < of;
      if (g !== S) {
        S = g, a.style.flexDirection = g ? "column" : "row", l.style.flex = g ? "0 0 auto" : "0 0 220px", l.style.flexDirection = g ? "row" : "column", l.style.borderRight = g ? "none" : `1px solid ${O.splitBorder}`, l.style.borderBottom = g ? `1px solid ${O.splitBorder}` : "none";
        for (const u of $) u.style.width = g ? "auto" : "100%";
        v.resize?.();
      }
    });
    return _(0), {
      onResize: () => v.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => {
        w(), v.remove();
      }
    };
  }
}
Me("gufe-chemical-system", lf);
const df = 460;
function uf(e, t) {
  const n = Ce(t, e.stateA, "ChemicalSystemViz"), r = Ce(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const s = [e.stateA, e.stateB, e.protocol];
  for (const o of [n, r]) s.push(...Object.values(o.components ?? {}));
  for (const o of e.mappings ?? []) s.push(o.componentA, o.componentB);
  return { ...e, registry: Lr(t, s) };
}
const _r = {
  unchanged: O.diffUnchanged,
  changed: O.diffChanged,
  added: O.diffAdded,
  removed: O.diffRemoved
};
function ff(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function pf(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function hf(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function mf(e, t, n) {
  const r = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${O.cardBg};border:1px solid ${O.cardBorder};`
  ), s = j(
    "span",
    `display:none;font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;color:${O.textMuted2};`,
    n
  );
  r.appendChild(s);
  const o = hf(e);
  return o ? (r.style.borderColor = t === "unchanged" ? O.cardBorder : _r[t], r.appendChild(j("span", `font-size:${Z.body};font-weight:600;color:${O.textPrimary};`, o.name)), r.appendChild(Dn(o.type)), { cell: r, sideMark: s }) : (r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(j("span", `font-size:${Z.body};color:${O.textMuted2};`, "absent")), { cell: r, sideMark: s });
}
function gf(e, t) {
  const n = et(t, e.componentA), r = et(t, e.componentB);
  return `${n ? mt(n) : "A"} to ${r ? mt(r) : "B"}`;
}
class yf extends Re {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Mt(n), s = Ce(r, n.stateA, "ChemicalSystemViz"), o = Ce(r, n.stateB, "ChemicalSystemViz"), i = Ce(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = We(n.name || "Transformation");
    if (l.statsEl.appendChild(fe("protocol", i?.gufe_type || i?.name || "-")), l.statsEl.appendChild(fe("mappings", String(a.length))), t.appendChild(l), !s || !o)
      return t.appendChild(
        de("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const f = pf(s, o), h = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const v = j("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [c, d] of [
      ["State A", s],
      ["State B", o]
    ])
      v.appendChild(
        j(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${Z.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${O.textMuted2};`,
          `${c}${d.name ? ` - ${d.name}` : ""}`
        )
      );
    h.appendChild(v);
    const $ = [], _ = [], S = [];
    for (const c of f) {
      const d = s.components?.[c], y = o.components?.[c], E = ff(d, y), C = et(r, d), R = et(r, y), A = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), P = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      P.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${_r[E]};`)
      );
      const z = j("span", `font-size:${Z.body};font-weight:700;color:${O.textPrimary};overflow-wrap:anywhere;`, c);
      z.title = E, P.appendChild(z), A.appendChild(P);
      for (const [K, Q] of [
        [C, "A"],
        [R, "B"]
      ]) {
        const X = mf(K, E, Q);
        A.appendChild(X.cell), S.push(X.sideMark);
      }
      $.push(A), _.push(P), h.appendChild(A);
    }
    let w = null;
    const p = ti(t, (c) => {
      const d = c > 0 && c < df;
      if (d !== w) {
        w = d, v.style.display = d ? "none" : "flex";
        for (const y of $) y.style.flexDirection = d ? "column" : "row";
        for (const y of _) y.style.flex = d ? "0 0 auto" : "0 0 110px";
        for (const y of S) y.style.display = d ? "block" : "none";
      }
    }), g = j(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${Z.small};color:${O.textMuted};`
    );
    for (const c of ["unchanged", "changed", "added", "removed"])
      g.appendChild(fe(c, "", _r[c]));
    h.appendChild(g);
    const u = j(
      "div",
      Pt,
      "Atom mapping"
    );
    if (t.appendChild(u), !a.length)
      return t.appendChild(
        de(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: p };
    const m = document.createElement("gufe-atom-mapping");
    m.style.cssText = "flex:1;min-height:0;min-width:0;";
    const k = (c) => {
      m.payload = Ci(a[c], r);
    };
    if (k(0), a.length > 1) {
      const c = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Z.small};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textMuted};`
      );
      c.appendChild(
        zn(
          a.map((d, y) => ({
            id: String(y),
            label: d.name || gf(d, r)
          })),
          "0",
          (d) => k(Number(d))
        )
      ), t.appendChild(c);
    }
    return t.appendChild(m), {
      onResize: () => m.resize?.(),
      cleanup: () => {
        p(), m.remove();
      }
    };
  }
}
Me("gufe-transformation", yf);
const Le = { width: 148, height: 46, radius: 10 }, dt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, kt = { initial: 0.56, min: 0.25, max: 0.78 }, Ks = 24, Hs = mt;
function vf(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function $f(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of Object.values(e.components ?? {})) {
    const s = et(t, r);
    if (!s) {
      n.add("missing");
      continue;
    }
    n.add(
      s.type === "UnknownComponentViz" ? s.gufe_type : s.type.replace(/(?:Component)?Viz$/, "")
    );
  }
  return [...n].sort().join(" + ");
}
function bf(e, t) {
  const n = { fill: O.cardBg, stroke: O.cardBorder }, r = e.map((i) => $f(i, t)), s = [...new Set(r)];
  if (s.length < 2 || s.length > O.netGroupFill.length)
    return { colorOf: () => n, legend: [] };
  const o = new Map(
    s.map((i, a) => [i, { fill: O.netGroupFill[a], stroke: O.netGroupStroke[a] }])
  );
  return {
    colorOf: (i) => o.get(r[i]) ?? n,
    legend: s.map((i) => [i, o.get(i)])
  };
}
function wf(e, t, n) {
  const r = e.map(($) => $.x), s = e.map(($) => $.y), o = Math.min(...r) - Le.width / 2, i = Math.max(...r) + Le.width / 2, a = Math.min(...s) - Le.height / 2, l = Math.max(...s) + Le.height / 2, f = Math.min(
    1,
    (t - 2 * Ks) / Math.max(1, i - o),
    (n - 2 * Ks) / Math.max(1, l - a)
  ), h = (t - (i - o) * f) / 2 - o * f, v = (n - (l - a) * f) / 2 - a * f;
  return `translate(${h.toFixed(2)},${v.toFixed(2)}) scale(${f.toFixed(4)})`;
}
function _f(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((s, o) => {
    const i = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    s.x = t / 2 + r * Math.cos(i), s.y = n / 2 + r * Math.sin(i);
  });
}
async function Sf(e, t, n, r) {
  let s;
  try {
    if (s = await gi(), typeof s?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), i = s.forceSimulation(e).force(
    "link",
    s.forceLink(o).id((l) => l["gufe-key"]).distance(dt.linkDistance).strength(dt.linkStrength)
  ).force("charge", s.forceManyBody().strength(dt.chargeStrength)).force("center", s.forceCenter(n / 2, r / 2)).force("collision", s.forceCollide(dt.collisionRadius).iterations(dt.collisionIterations)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * dt.tickMultiplier; l++) i.tick();
  return !0;
}
class kf extends Re {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Mt(n), s = [];
    let o = 0;
    for (const C of n.nodes ?? []) {
      const R = Ce(r, C, "ChemicalSystemViz");
      if (!R) {
        o++;
        continue;
      }
      s.push({ ...R, x: 0, y: 0 });
    }
    const i = new Map(s.map((C) => [C["gufe-key"], C])), a = [];
    let l = 0;
    for (const C of n.edges ?? []) {
      const R = i.get(C.stateA), A = i.get(C.stateB);
      if (!R || !A) {
        l++;
        continue;
      }
      a.push({ ...C, index: a.length, from: R, to: A });
    }
    const f = (C) => {
      const R = Ce(r, C.protocol, "ProtocolViz");
      return R?.gufe_type || R?.name || "";
    }, h = new Set(a.map(f).filter(Boolean)), v = We(n.name || "Alchemical network");
    v.statsEl.appendChild(fe("systems", String(s.length))), v.statsEl.appendChild(fe("transformations", String(a.length))), h.size && v.statsEl.appendChild(fe("protocol", [...h].join(", "))), t.appendChild(v);
    const $ = bf(s, r), _ = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(_);
    let S = () => {
    };
    const w = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), p = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.appBg};`), g = j("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${O.netCanvasBg};`);
    w.appendChild(g), $.legend.length && w.appendChild(this.#t($.legend)), _.appendChild(w), _.appendChild(
      ni(_, w, p, {
        min: kt.min,
        max: kt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: kr("alchemical-network.canvasShare", kt.initial, kt.min, kt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => S()
      })
    ), _.appendChild(p);
    const u = this.#e(p, r);
    if (!s.length)
      return g.appendChild(
        de(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), u.message("Nothing to show."), { cleanup: () => u.cleanup() };
    o && Ze(
      g,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Ze(
      g,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let m = !0, k = !1, c = null, d = () => {
    };
    const y = (C, R) => {
      c = { kind: C, index: R }, u.show(C === "node" ? s[R] : a[R], C), d();
    }, E = () => {
      g.querySelector("svg")?.remove();
      const C = g.clientWidth || 800, R = g.clientHeight || 600;
      _f(s, C, R);
      const A = () => {
        if (!m) return;
        const P = this.#n(g, s, a, C, R, $.colorOf, y);
        d = () => P.setSelected(c), d();
      };
      if (k) {
        A();
        return;
      }
      Sf(s, a, C, R).then((P) => {
        m && (P || (k = !0, Ze(g, "d3 could not be loaded - showing the circular layout instead")), A());
      }, A);
    };
    return S = E, E(), y("node", 0), {
      onResize: () => E(),
      cleanup: () => {
        m = !1, u.cleanup();
      }
    };
  }
  /** What each node colour means, under the canvas. */
  #t(t) {
    const n = j("div", Sr.bottom);
    n.appendChild(j("span", `font-size:${Z.small};color:${O.textMuted};`, "systems made of"));
    for (const [r, s] of t) {
      const o = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      o.appendChild(
        j(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${s.fill};border:2px solid ${s.stroke};`
        )
      ), o.appendChild(
        j("span", `font-size:${Z.small};color:${O.textPrimary};overflow-wrap:anywhere;`, r)
      ), n.appendChild(o);
    }
    return n;
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
    t.appendChild(j("div", Pt, "Selected"));
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const s = document.createElement("gufe-view");
    s.style.cssText = "flex:1;min-width:0;min-height:0;";
    const o = (a) => r.replaceChildren(de(a));
    return { show: (a, l) => {
      let f;
      if (l === "node") {
        const { x: h, y: v, ...$ } = a;
        f = sf($, n);
      } else {
        const { index: h, from: v, to: $, ..._ } = a;
        f = uf(_, n);
      }
      if (!f) {
        o("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      s.payload = f, s.parentNode !== r && r.replaceChildren(s);
    }, message: o, cleanup: () => s.remove() };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #n(t, n, r, s, o, i, a) {
    const l = ie("svg", { class: "gufe-graph", width: s, height: o, style: "display:block;" });
    t.appendChild(l);
    const f = ie("g", { transform: wf(n, s, o) });
    l.appendChild(f);
    const h = ie("g"), v = ie("g");
    f.append(h, v);
    const $ = [];
    r.forEach((w, p) => {
      const g = ie("line", {
        x1: w.from.x,
        y1: w.from.y,
        x2: w.to.x,
        y2: w.to.y,
        stroke: O.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      jn(g, w.name || "transformation"), g.addEventListener("click", () => a("edge", p)), h.appendChild(g), $.push(g);
      const u = ie("line", {
        x1: w.from.x,
        y1: w.from.y,
        x2: w.to.x,
        y2: w.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      u.addEventListener("click", () => a("edge", p)), h.appendChild(u);
    });
    const _ = [], S = [];
    return n.forEach((w, p) => {
      const g = i(p), u = ie("g", { style: "cursor:pointer;" }), m = ie("rect", {
        x: w.x - Le.width / 2,
        y: w.y - Le.height / 2,
        width: Le.width,
        height: Le.height,
        rx: Le.radius,
        fill: g.fill,
        stroke: g.stroke,
        "stroke-width": 2
      });
      u.appendChild(m), _.push(m), S.push(g.stroke);
      const k = ie("text", {
        x: w.x,
        y: w.y - 2,
        "text-anchor": "middle",
        fill: O.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      k.textContent = vf(Hs(w), 20), u.appendChild(k);
      const c = Object.keys(w.components ?? {}).length, d = ie("text", {
        x: w.x,
        y: w.y + 14,
        "text-anchor": "middle",
        fill: O.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      d.textContent = `${c} component${c === 1 ? "" : "s"}`, u.appendChild(d), jn(u, Hs(w)), u.addEventListener("click", () => a("node", p)), v.appendChild(u);
    }), {
      setSelected(w) {
        _.forEach((p, g) => {
          const u = w?.kind === "node" && w.index === g;
          p.setAttribute("stroke", u ? O.cardBorderActive : S[g]), p.setAttribute("stroke-width", u ? "3" : "2");
        }), $.forEach((p, g) => {
          const u = w?.kind === "edge" && w.index === g;
          p.setAttribute("stroke", u ? O.netHaloColor : O.netEdgeLine), p.setAttribute("stroke-width", u ? "4" : "2");
        });
      }
    };
  }
}
Me("gufe-alchemical-network", kf);
class Cf extends Re {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = We(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Dn(n.gufe_type)), t.appendChild(r);
    const s = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(s);
    const o = Fn();
    return o.style.maxWidth = "460px", o.appendChild(Te("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Te("Name", n.name)), o.appendChild(Te("gufe key", n["gufe-key"], !0)), o.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), s.appendChild(o), {};
  }
}
Me("gufe-protocol", Cf);
const Pe = { width: 340, height: 260, padding: 14, radius: 12 }, Ef = 150, xf = 40, Pf = 24;
function Af(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function Rf(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function Mf(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(Pf, Math.round(e * xf)));
}
function Nf(e) {
  const t = ie("svg", {
    viewBox: `0 0 ${Pe.width} ${Pe.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  jn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    ie("rect", {
      x: 1,
      y: 1,
      width: Pe.width - 2,
      height: Pe.height - 2,
      rx: Pe.radius,
      fill: O.boxFill,
      stroke: O.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = Af(1597463007), r = () => ({
    x: Pe.padding + n() * (Pe.width - 2 * Pe.padding),
    y: Pe.padding + n() * (Pe.height - 2 * Pe.padding)
  });
  for (let i = 0; i < Ef; i++) {
    const { x: a, y: l } = r();
    t.appendChild(ie("circle", { cx: a, cy: l, r: 2.4, fill: O.textMuted2, "fill-opacity": 0.45 }));
  }
  const s = Mf(Rf(e.ion_concentration)), o = [
    [e.positive_ion, O.diffAdded],
    [e.negative_ion, O.diffRemoved]
  ];
  for (const [i, a] of o)
    for (let l = 0; l < s; l++) {
      const { x: f, y: h } = r(), v = ie("circle", { cx: f, cy: h, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(jn(v, i));
    }
  return t;
}
class Ff extends Re {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = We(n.name || "Solvent");
    r.statsEl.appendChild(fe("neutralized", n.neutralize ? "yes" : "no")), r.statsEl.appendChild(fe(n.positive_ion, "", O.diffAdded)), r.statsEl.appendChild(fe(n.negative_ion, "", O.diffRemoved)), t.appendChild(r);
    const s = j(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(s);
    const o = Fn();
    o.style.flex = "1 1 320px", o.appendChild(Te("SMILES", n.smiles, !0)), o.appendChild(Te("Positive ion", n.positive_ion)), o.appendChild(Te("Negative ion", n.negative_ion)), o.appendChild(Te("Ion concentration", n.ion_concentration)), o.appendChild(Te("Neutralize", n.neutralize ? "yes" : "no")), s.appendChild(o);
    const i = Fn();
    return i.style.flex = "1 1 340px", i.style.alignItems = "center", i.appendChild(Nf(n)), i.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${Z.small};text-align:center;color:${O.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), s.appendChild(i), {};
  }
}
Me("gufe-solvent", Ff);
class Of extends Re {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = We(n.name || "Unnamed component");
    r.statsEl.appendChild(Dn(n.gufe_type)), t.appendChild(r);
    const s = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(s);
    const o = Fn();
    return o.style.maxWidth = "460px", o.appendChild(
      j(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${O.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      j(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${O.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Te("Name", n.name || "(unnamed)")), o.appendChild(Te("gufe class", n.gufe_type, !0)), s.appendChild(o), {};
  }
}
Me("gufe-unknown-component", Of);
function qf(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Ys, reset: Gi });
export {
  aa as CHROME_OPEN_BY_DEFAULT,
  Ti as DEBUG_ATTRIBUTE,
  ji as DEBUG_GLOBAL,
  Ad as DEFAULT_DEPICT_STYLE,
  Xl as DEFAULT_ZOOM_BOUNDS,
  ft as DEPICT_STYLE,
  Td as DEPICT_STYLE_RANGES,
  kf as GufeAlchemicalNetwork,
  Au as GufeAtomMapping,
  lf as GufeChemicalSystem,
  Re as GufeElement,
  tf as GufeLigandNetwork,
  au as GufeProtein,
  Cf as GufeProtocol,
  tu as GufeSmallMolecule,
  Ff as GufeSolvent,
  yf as GufeTransformation,
  Of as GufeUnknownComponent,
  Hl as GufeView,
  ar as MAPPING_COLORS,
  nd as MAPPING_RAMP_3D,
  Df as MAPPING_RAMP_NAME,
  Tf as PAYLOAD_TYPES,
  jf as SCHEMA_TYPES,
  Or as VIEW_TAGS,
  gu as align2D,
  $u as alignedToPartner,
  mu as applyRT,
  yu as applyTurn,
  Ql as boundedZoom,
  Mt as buildRegistry,
  ht as choice,
  ua as chromeMenu,
  Ws as debugEnabled,
  Me as defineElement,
  hi as describeProblem,
  ff as diffStatus,
  zf as dispatchProblem,
  Lr as entriesFor,
  mt as entryLabel,
  Ct as flag,
  Ul as formatIssues,
  yi as guardWheel,
  hu as kabsch,
  js as laidOut,
  bu as layoutPair,
  Eu as liftFor,
  qi as logPayload,
  et as lookup,
  Ce as lookupOfType,
  Ci as mappingPayloadFor,
  Vd as markGroups,
  cr as markedBonds,
  qf as mount,
  Id as normaliseDepictStyle,
  kr as num,
  ti as onWidth,
  xu as openfeShift,
  Pu as pairColour,
  zd as parseAtomSpec,
  Rf as parseConcentration,
  Di as payloadJson,
  qr as resetControl,
  Gi as resetSettings,
  Xu as selectionText,
  In as setting,
  Ys as settings,
  ni as splitter,
  sf as systemPayloadFor,
  Wr as textSetting,
  uf as transformationPayloadFor,
  zs as uniqueAtoms,
  qd as uniqueBonds,
  If as validateAs,
  Bl as validatePayload,
  Dr as viewerInteraction,
  td as wheelFactor,
  vu as withCoords
};
