const Vr = {
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
    boxFill: "#e6effc",
    boxStroke: "#cccccc"
  }
};
function _s() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const M = _s() ? Vr.dark : Vr.light, J = {
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
}, He = {
  bold: "700"
}, ce = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, mt = {
  sm: "3px",
  md: "6px",
  xl: "10px"
}, Te = {
  title: M.titleColor,
  primary: M.textPrimary,
  muted: M.textMuted,
  faint: M.textMuted2,
  error: M.errorFg
}, Et = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: M.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: M.canvas2DBg
}, ye = {
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${ce.sm} 9px;font-size:${J.small};font-weight:${He.bold};border-radius:${mt.sm};cursor:pointer;font-family:inherit;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, Ss = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${mt.md};padding:${ce.sm} ${ce.lg};font-size:${J.body};cursor:pointer;font-family:inherit;`, Cs = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${ce.xxl};flex-shrink:0;background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, Vi = {
  top: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;font-size:${J.body};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, xt = `flex-shrink:0;padding:${ce.sm} ${ce.xl};font-size:${J.heading};font-weight:${He.bold};color:${M.labelFg};background:${M.labelBg};`, ks = `display:flex;flex-direction:column;gap:${ce.xs};padding:${ce.xxl} 18px;border-radius:${mt.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, Li = `position:absolute;bottom:${ce.xl};right:${ce.xl};display:flex;gap:${ce.sm};padding:${ce.sm};border-radius:${mt.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Lr = `font-family:${J.mono};font-size:${J.small};line-height:1.7;color:${M.textMuted};`, Br = `font-size:${J.small};font-weight:${He.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, Es = `font-size:${J.small};line-height:1.6;color:${M.textMuted2};`, xs = ["debug", "gufe-debug"], Ps = "debug", As = "GUFE_VIZ_DEBUG";
function Rs() {
  return !!globalThis[As];
}
function Ns() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return xs.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Bi(e) {
  return e?.hasAttribute?.(Ps) ? !0 : Rs() || Ns();
}
function Ms(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ge(t)}>`;
  }
}
function Fs(e, t, n) {
  if (!Bi(n)) return;
  const r = Ms(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Ui = "GUFE_VIZ_VIEW_STATE";
function Os(e) {
  const t = globalThis[Ui];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Ts = 150;
class Ae extends HTMLElement {
  #t = null;
  #e = null;
  #r = null;
  #n = null;
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = M.appBg, this.style.color = M.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#n && (this.#n = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Ts);
    }), this.#n.observe(this)), this.#a();
  }
  disconnectedCallback() {
    this.#s(), this.#n?.disconnect(), this.#n = null;
  }
  /** Release whatever the mounted view owns and empty the element. */
  #s() {
    if (this.#i++, this.#o && (clearTimeout(this.#o), this.#o = null), this.#e?.cleanup)
      try {
        this.#e.cleanup();
      } catch (t) {
        console.warn("[gufe-viz] cleanup failed:", t);
      }
    this.#e = null, this.replaceChildren(), this.#r = null;
  }
  /** Tear the mounted view down and hand back a fresh, empty shell. */
  #d() {
    return this.#s(), this.#r = T(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${M.appBg};`
    ), this.appendChild(this.#r), this.#r;
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
      t.appendChild(le(this.placeholder()));
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(le(`Failed to render: ${ge(r)}`, !0)));
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
const Ce = "gufe-viz:", Ke = /* @__PURE__ */ new Map();
let Mt = null;
function js() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function At() {
  if (Mt === !1) return null;
  const e = js();
  if (!e)
    return Mt = !1, null;
  try {
    const t = `${Ce}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Mt = !0, e;
  } catch {
    return Mt = !1, null;
  }
}
function zs(e) {
  const t = At();
  if (!t) return Ke.get(Ce + e) ?? null;
  try {
    return t.getItem(Ce + e);
  } catch {
    return null;
  }
}
function Is(e, t) {
  const n = At();
  if (!n) {
    Ke.set(Ce + e, t);
    return;
  }
  try {
    n.setItem(Ce + e, t);
  } catch {
    Ke.set(Ce + e, t);
  }
}
function zn(e, t, n) {
  return {
    key: e,
    get() {
      const r = zs(e);
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
        Is(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function pt(e, t, n) {
  return zn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function Ct(e, t) {
  return zn(e, t, (n) => typeof n == "boolean");
}
function Ds(e, t, n = -1 / 0, r = 1 / 0) {
  return zn(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function Ur(e, t = "") {
  return zn(e, t, (n) => typeof n == "string");
}
function Ki() {
  const e = {}, t = At(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ke.keys());
  for (const r of n) {
    if (!r.startsWith(Ce)) continue;
    const i = t ? t.getItem(r) : Ke.get(r) ?? null;
    if (i !== null)
      try {
        e[r.slice(Ce.length)] = JSON.parse(i);
      } catch {
        e[r.slice(Ce.length)] = i;
      }
  }
  return e;
}
function qs() {
  const e = {}, t = At(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ke.keys());
  for (const r of n) {
    if (!r.startsWith(Ce)) continue;
    const i = t ? t.getItem(r) : Ke.get(r) ?? null;
    i !== null && (e[r] = i);
  }
  return e;
}
function Vs() {
  const e = At();
  if (e)
    for (const t of Object.keys(Ki()))
      try {
        e.removeItem(Ce + t);
      } catch {
      }
  Ke.clear();
}
const Hi = "https://framejs.app", Gi = 1e4;
function Ls(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Bs = "/gufe-dev-bundle.js";
function Us() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Gi ? e : null;
}
async function Ks() {
  const e = Us();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Bs);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Gi ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Hs() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Gs(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Ce)};`,
    `  const menuOpen = ${JSON.stringify(Yi)};`,
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
    `globalThis[${JSON.stringify(Ui)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Ws(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Gs(n),
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
function Js(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [i, o] of Object.entries(qs()))
    i.endsWith(Yi) || (r[i] = o);
  return { settings: r, views: t };
}
const Ys = (e) => `${Hi}/j/${e}`, Xs = (e) => `${Hi}/j/${e}.json`;
async function Zs(e, t, n) {
  await fetch(Xs(e), {
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
function Qs(e) {
  if (!Bi()) return;
  const t = T(
    "div",
    `display:flex;flex-direction:column;gap:${ce.md};padding-top:${ce.lg};border-top:1px dashed ${M.splitBorder};`
  );
  t.appendChild(
    T(
      "div",
      `font-size:${J.tiny};font-weight:${He.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
      "debug"
    )
  );
  const n = T("button", `${ye.base}width:100%;`, "Open in framejs");
  n.title = "Upload this view as a framejs app and open it in a new tab", t.appendChild(n);
  const r = T("div", `font-size:${J.tiny};line-height:1.5;color:${M.textMuted2};overflow-wrap:anywhere;`);
  t.appendChild(r);
  const i = (s, a = !1) => {
    r.replaceChildren(s), r.style.color = a ? M.errorFg : M.textMuted2;
  }, o = (s, a) => {
    const l = T("a", `color:${M.textPrimary};`, s);
    l.href = s, l.target = "_blank", l.rel = "noreferrer", r.replaceChildren(l), a && r.appendChild(T("div", `padding-top:${ce.sm};`, a)), r.style.color = M.textMuted2;
  };
  n.onclick = () => {
    const s = Ls(e);
    if (!s || s.payload == null) {
      i("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, l = Js(s), f = window.open("", "_blank"), h = Hs(), b = a, y = String(b.name || b.type || "gufe-viz"), $ = () => {
      n.disabled = !1;
    };
    n.disabled = !0, i("Uploading..."), Ks().then((_) => {
      if (!_) {
        f?.close(), $(), i(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Zs(h, Ws(_.js, a, l), y).then(() => {
        $();
        const S = Ys(h);
        f && (f.location.href = S), o(S, _.note);
      });
    }).catch((_) => {
      $(), f?.close(), i(`Upload failed: ${_ instanceof Error ? _.message : String(_)}`, !0);
    });
  }, t.appendChild(
    T(
      "div",
      `font-size:${J.tiny};line-height:1.5;color:${M.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire."
    )
  ), e.appendChild(t);
}
function T(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function qe(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ge(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const yt = (e) => e.toLocaleString("en-US"), dt = "-", Pt = ye.base, pr = Ss;
function In(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const i = T("div", "display:flex;gap:4px;"), o = e.map((s) => {
    const a = T("button", Pt, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = ye.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? ye.bgActive : ye.bg;
    }, a.onclick = () => {
      i.setActive(s.id), r?.set(s.id), n(s.id);
    }, i.appendChild(a), { id: s.id, btn: a };
  });
  return i.setActive = (s) => {
    t = s, o.forEach((a) => {
      a.btn.style.background = a.id === t ? ye.bgActive : ye.bg;
    });
  }, i.setActive(t), i;
}
function _r(e, t, n, r) {
  const i = T("select", pr);
  for (const s of e) {
    const a = T("option", "", s.label);
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
function Wi(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = T("button", Pt, e);
  o.title = r.title || e, o.setAttribute("aria-pressed", String(i));
  const s = () => {
    o.style.background = i ? ye.bgActive : ye.bg, o.setAttribute("aria-pressed", String(i));
  };
  return o.onclick = () => {
    i = !i, s(), r.remember?.set(i), n(i);
  }, s(), o;
}
function pe(e, t, n) {
  const r = T("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = T("span");
  return i.innerHTML = `${qe(e)} <b style="color:${Te.primary};">${qe(t)}</b>`, r.appendChild(i), r;
}
function Xe(e, t) {
  const n = T("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ce.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ce.md} ${ce.xxl};border-radius:${mt.md};font-size:${J.body};background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};`, e.appendChild(n), n;
}
function le(e, t = !1) {
  return T(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${J.heading};color:${t ? Te.error : Te.faint};`,
    e
  );
}
function Ge(e) {
  const t = T("div", Cs);
  return t.className = "gufe-header", t.titleEl = T(
    "span",
    `font-weight:${He.bold};font-size:${J.title};color:${Te.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = T(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${J.small};color:${Te.muted};`
  ), t.toggleEl = T("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Oe(e, t, n = !1) {
  const r = T("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    T(
      "span",
      `flex:0 0 128px;font-size:${J.tiny};font-weight:${He.bold};letter-spacing:.08em;text-transform:uppercase;color:${Te.faint};`,
      e
    )
  );
  const i = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Te.primary};` + (n ? `font-family:${J.mono};font-size:${J.small};` : `font-size:${J.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function Rt(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${mt.xl};font-size:${J.tiny};font-weight:${He.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function Fn() {
  return T("div", ks);
}
function Ji() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const ea = !1, Yi = ".menuOpen";
function ta() {
  const e = T("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const na = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: ta
}, ra = na.openFreeEnergy;
function oa(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? ea, i = !1;
  const o = T("div", "flex-shrink:0;"), s = T("button", `${ye.base}display:inline-flex;align-items:center;gap:${ce.md};padding:${ce.sm} ${ce.lg};`);
  s.appendChild(ra()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t()), Qs(o)), o.style.display = r ? "" : "none", s.style.background = r ? ye.bgActive : ye.bg, s.setAttribute("aria-expanded", String(r));
  }, l = (f) => {
    f !== r && (r = f, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return s.onclick = () => l(!r), s.onmouseover = () => {
    s.style.background = r ? ye.bgActive : ye.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ye.bgActive : ye.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: l
  };
}
function ia(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, Wn = {}, ze = {}, We = {}, Jn = {}, Yn = {}, Xn = {}, Kr;
function On() {
  return Kr || (Kr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(p) {
        if (super(), !e.IDENTIFIER.test(p))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = p;
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
      constructor(p) {
        super(), this._items = typeof p == "string" ? [p] : p;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const p = this._items[0];
        return p === "" || p === '""';
      }
      get str() {
        var p;
        return (p = this._str) !== null && p !== void 0 ? p : this._str = this._items.reduce((m, C) => `${m}${C}`, "");
      }
      get names() {
        var p;
        return (p = this._names) !== null && p !== void 0 ? p : this._names = this._items.reduce((m, C) => (C instanceof n && (m[C.str] = (m[C.str] || 0) + 1), m), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function i(v, ...p) {
      const m = [v[0]];
      let C = 0;
      for (; C < p.length; )
        a(m, p[C]), m.push(v[++C]);
      return new r(m);
    }
    e._ = i;
    const o = new r("+");
    function s(v, ...p) {
      const m = [$(v[0])];
      let C = 0;
      for (; C < p.length; )
        m.push(o), a(m, p[C]), m.push(o, $(v[++C]));
      return l(m), new r(m);
    }
    e.str = s;
    function a(v, p) {
      p instanceof r ? v.push(...p._items) : p instanceof n ? v.push(p) : v.push(b(p));
    }
    e.addCodeArg = a;
    function l(v) {
      let p = 1;
      for (; p < v.length - 1; ) {
        if (v[p] === o) {
          const m = f(v[p - 1], v[p + 1]);
          if (m !== void 0) {
            v.splice(p - 1, 3, m);
            continue;
          }
          v[p++] = "+";
        }
        p++;
      }
    }
    function f(v, p) {
      if (p === '""')
        return v;
      if (v === '""')
        return p;
      if (typeof v == "string")
        return p instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof p != "string" ? `${v.slice(0, -1)}${p}"` : p[0] === '"' ? v.slice(0, -1) + p.slice(1) : void 0;
      if (typeof p == "string" && p[0] === '"' && !(v instanceof n))
        return `"${v}${p.slice(1)}`;
    }
    function h(v, p) {
      return p.emptyStr() ? v : v.emptyStr() ? p : s`${v}${p}`;
    }
    e.strConcat = h;
    function b(v) {
      return typeof v == "number" || typeof v == "boolean" || v === null ? v : $(Array.isArray(v) ? v.join(",") : v);
    }
    function y(v) {
      return new r($(v));
    }
    e.stringify = y;
    function $(v) {
      return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = $;
    function _(v) {
      return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : i`[${v}]`;
    }
    e.getProperty = _;
    function S(v) {
      if (typeof v == "string" && e.IDENTIFIER.test(v))
        return new r(`${v}`);
      throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function u(v) {
      return new r(v.toString());
    }
    e.regexpCode = u;
  })(Xn)), Xn;
}
var Zn = {}, Hr;
function Gr() {
  return Hr || (Hr = 1, (function(e) {
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
        var h, b;
        if (!((b = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || b === void 0) && b.has(f) || this._prefixes && !this._prefixes.has(f))
          throw new Error(`CodeGen: prefix "${f}" is not allowed in this scope`);
        return this._names[f] = { prefix: f, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(f, h) {
        super(h), this.prefix = f;
      }
      setValue(f, { property: h, itemIndex: b }) {
        this.value = f, this.scopePath = (0, t._)`.${new t.Name(h)}[${b}]`;
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
        var b;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const y = this.toName(f), { prefix: $ } = y, _ = (b = h.key) !== null && b !== void 0 ? b : h.ref;
        let S = this._values[$];
        if (S) {
          const p = S.get(_);
          if (p)
            return p;
        } else
          S = this._values[$] = /* @__PURE__ */ new Map();
        S.set(_, y);
        const u = this._scope[$] || (this._scope[$] = []), v = u.length;
        return u[v] = h.ref, y.setValue(h, { property: $, itemIndex: v }), y;
      }
      getValue(f, h) {
        const b = this._values[f];
        if (b)
          return b.get(h);
      }
      scopeRefs(f, h = this._values) {
        return this._reduceValues(h, (b) => {
          if (b.scopePath === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return (0, t._)`${f}${b.scopePath}`;
        });
      }
      scopeCode(f = this._values, h, b) {
        return this._reduceValues(f, (y) => {
          if (y.value === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return y.value.code;
        }, h, b);
      }
      _reduceValues(f, h, b = {}, y) {
        let $ = t.nil;
        for (const _ in f) {
          const S = f[_];
          if (!S)
            continue;
          const u = b[_] = b[_] || /* @__PURE__ */ new Map();
          S.forEach((v) => {
            if (u.has(v))
              return;
            u.set(v, r.Started);
            let p = h(v);
            if (p) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              $ = (0, t._)`${$}${m} ${v} = ${p};${this.opts._n}`;
            } else if (p = y?.(v))
              $ = (0, t._)`${$}${p}${this.opts._n}`;
            else
              throw new n(v);
            u.set(v, r.Completed);
          });
        }
        return $;
      }
    }
    e.ValueScope = a;
  })(Zn)), Zn;
}
var Wr;
function ne() {
  return Wr || (Wr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ On(), n = /* @__PURE__ */ Gr();
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
    var i = /* @__PURE__ */ Gr();
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
        const z = w ? n.varKinds.var : this.varKind, H = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${z} ${this.name}${H};` + x;
      }
      optimizeNames(w, x) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = G(this.rhs, w, x)), this;
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
          return this.rhs = G(this.rhs, w, x), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return I(w, this.rhs);
      }
    }
    class l extends a {
      constructor(w, x, z, H) {
        super(w, z, H), this.op = x;
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
    class b extends o {
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
    class y extends o {
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
        return this.code = G(this.code, w, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class $ extends o {
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
        let H = z.length;
        for (; H--; ) {
          const U = z[H];
          U.optimizeNames(w, x) || (Y(w, U.names), z.splice(H, 1));
        }
        return z.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((w, x) => P(w, x.names), {});
      }
    }
    class _ extends $ {
      render(w) {
        return "{" + w._n + super.render(w) + "}" + w._n;
      }
    }
    class S extends $ {
    }
    class u extends _ {
    }
    u.kind = "else";
    class v extends _ {
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
          x = this.else = Array.isArray(z) ? new u(z) : z;
        }
        if (x)
          return w === !1 ? x instanceof v ? x : x.nodes : this.nodes.length ? this : new v(ee(w), x instanceof v ? [x] : x.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, x) {
        var z;
        if (this.else = (z = this.else) === null || z === void 0 ? void 0 : z.optimizeNames(w, x), !!(super.optimizeNames(w, x) || this.else))
          return this.condition = G(this.condition, w, x), this;
      }
      get names() {
        const w = super.names;
        return I(w, this.condition), this.else && P(w, this.else.names), w;
      }
    }
    v.kind = "if";
    class p extends _ {
    }
    p.kind = "for";
    class m extends p {
      constructor(w) {
        super(), this.iteration = w;
      }
      render(w) {
        return `for(${this.iteration})` + super.render(w);
      }
      optimizeNames(w, x) {
        if (super.optimizeNames(w, x))
          return this.iteration = G(this.iteration, w, x), this;
      }
      get names() {
        return P(super.names, this.iteration.names);
      }
    }
    class C extends p {
      constructor(w, x, z, H) {
        super(), this.varKind = w, this.name = x, this.from = z, this.to = H;
      }
      render(w) {
        const x = w.es5 ? n.varKinds.var : this.varKind, { name: z, from: H, to: U } = this;
        return `for(${x} ${z}=${H}; ${z}<${U}; ${z}++)` + super.render(w);
      }
      get names() {
        const w = I(super.names, this.from);
        return I(w, this.to);
      }
    }
    class c extends p {
      constructor(w, x, z, H) {
        super(), this.loop = w, this.varKind = x, this.name = z, this.iterable = H;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, x) {
        if (super.optimizeNames(w, x))
          return this.iterable = G(this.iterable, w, x), this;
      }
      get names() {
        return P(super.names, this.iterable.names);
      }
    }
    class d extends _ {
      constructor(w, x, z) {
        super(), this.name = w, this.args = x, this.async = z;
      }
      render(w) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
      }
    }
    d.kind = "func";
    class g extends $ {
      render(w) {
        return "return " + super.render(w);
      }
    }
    g.kind = "return";
    class k extends _ {
      render(w) {
        let x = "try" + super.render(w);
        return this.catch && (x += this.catch.render(w)), this.finally && (x += this.finally.render(w)), x;
      }
      optimizeNodes() {
        var w, x;
        return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(w, x) {
        var z, H;
        return super.optimizeNames(w, x), (z = this.catch) === null || z === void 0 || z.optimizeNames(w, x), (H = this.finally) === null || H === void 0 || H.optimizeNames(w, x), this;
      }
      get names() {
        const w = super.names;
        return this.catch && P(w, this.catch.names), this.finally && P(w, this.finally.names), w;
      }
    }
    class E extends _ {
      constructor(w) {
        super(), this.error = w;
      }
      render(w) {
        return `catch(${this.error})` + super.render(w);
      }
    }
    E.kind = "catch";
    class O extends _ {
      render(w) {
        return "finally" + super.render(w);
      }
    }
    O.kind = "finally";
    class A {
      constructor(w, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
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
      _def(w, x, z, H) {
        const U = this._scope.toName(x);
        return z !== void 0 && H && (this._constants[U.str] = z), this._leafNode(new s(w, U, z)), U;
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
        return this._leafNode(new l(w, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(w) {
        return typeof w == "function" ? w() : w !== t.nil && this._leafNode(new y(w)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...w) {
        const x = ["{"];
        for (const [z, H] of w)
          x.length > 1 && x.push(","), x.push(z), (z !== H || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, H));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(w, x, z) {
        if (this._blockNode(new v(w)), x && z)
          this.code(x).else().code(z).endIf();
        else if (x)
          this.code(x).endIf();
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
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, u);
      }
      _for(w, x) {
        return this._blockNode(w), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, x) {
        return this._for(new m(w), x);
      }
      // `for` statement for a range of values
      forRange(w, x, z, H, U = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const X = this._scope.toName(w);
        return this._for(new C(U, X, x, z), () => H(X));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, x, z, H = n.varKinds.const) {
        const U = this._scope.toName(w);
        if (this.opts.es5) {
          const X = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${X}.length`, (Z) => {
            this.var(U, (0, t._)`${X}[${Z}]`), z(U);
          });
        }
        return this._for(new c("of", H, U, x), () => z(U));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, x, z, H = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${x})`, z);
        const U = this._scope.toName(w);
        return this._for(new c("in", H, U, x), () => z(U));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(p);
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
        const x = new g();
        if (this._blockNode(x), this.code(w), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(g);
      }
      // `try` statement
      try(w, x, z) {
        if (!x && !z)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const H = new k();
        if (this._blockNode(H), this.code(w), x) {
          const U = this.name("e");
          this._currNode = H.catch = new E(U), x(U);
        }
        return z && (this._currNode = H.finally = new O(), this.code(z)), this._endBlockNode(E, O);
      }
      // `throw` statement
      throw(w) {
        return this._leafNode(new b(w));
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
      func(w, x = t.nil, z, H) {
        return this._blockNode(new d(w, x, z)), H && this.code(H).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(d);
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
        if (!(x instanceof v))
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
    e.CodeGen = A;
    function P(F, w) {
      for (const x in w)
        F[x] = (F[x] || 0) + (w[x] || 0);
      return F;
    }
    function I(F, w) {
      return w instanceof t._CodeOrName ? P(F, w.names) : F;
    }
    function G(F, w, x) {
      if (F instanceof t.Name)
        return z(F);
      if (!H(F))
        return F;
      return new t._Code(F._items.reduce((U, X) => (X instanceof t.Name && (X = z(X)), X instanceof t._Code ? U.push(...X._items) : U.push(X), U), []));
      function z(U) {
        const X = x[U.str];
        return X === void 0 || w[U.str] !== 1 ? U : (delete w[U.str], X);
      }
      function H(U) {
        return U instanceof t._Code && U._items.some((X) => X instanceof t.Name && w[X.str] === 1 && x[X.str] !== void 0);
      }
    }
    function Y(F, w) {
      for (const x in w)
        F[x] = (F[x] || 0) - (w[x] || 0);
    }
    function ee(F) {
      return typeof F == "boolean" || typeof F == "number" || F === null ? !F : (0, t._)`!${q(F)}`;
    }
    e.not = ee;
    const ie = R(e.operators.AND);
    function B(...F) {
      return F.reduce(ie);
    }
    e.and = B;
    const Q = R(e.operators.OR);
    function D(...F) {
      return F.reduce(Q);
    }
    e.or = D;
    function R(F) {
      return (w, x) => w === t.nil ? x : x === t.nil ? w : (0, t._)`${q(w)} ${F} ${q(x)}`;
    }
    function q(F) {
      return F instanceof t.Name ? F : (0, t._)`(${F})`;
    }
  })(Yn)), Yn;
}
var re = {}, Jr;
function oe() {
  if (Jr) return re;
  Jr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.checkStrictMode = re.getErrorPath = re.Type = re.useFunc = re.setEvaluated = re.evaluatedPropsToName = re.mergeEvaluated = re.eachItem = re.unescapeJsonPointer = re.escapeJsonPointer = re.escapeFragment = re.unescapeFragment = re.schemaRefOrVal = re.schemaHasRulesButRef = re.schemaHasRules = re.checkUnknownRules = re.alwaysValidSchema = re.toHash = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ On();
  function n(c) {
    const d = {};
    for (const g of c)
      d[g] = !0;
    return d;
  }
  re.toHash = n;
  function r(c, d) {
    return typeof d == "boolean" ? d : Object.keys(d).length === 0 ? !0 : (i(c, d), !o(d, c.self.RULES.all));
  }
  re.alwaysValidSchema = r;
  function i(c, d = c.schema) {
    const { opts: g, self: k } = c;
    if (!g.strictSchema || typeof d == "boolean")
      return;
    const E = k.RULES.keywords;
    for (const O in d)
      E[O] || C(c, `unknown keyword: "${O}"`);
  }
  re.checkUnknownRules = i;
  function o(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const g in c)
      if (d[g])
        return !0;
    return !1;
  }
  re.schemaHasRules = o;
  function s(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const g in c)
      if (g !== "$ref" && d.all[g])
        return !0;
    return !1;
  }
  re.schemaHasRulesButRef = s;
  function a({ topSchemaRef: c, schemaPath: d }, g, k, E) {
    if (!E) {
      if (typeof g == "number" || typeof g == "boolean")
        return g;
      if (typeof g == "string")
        return (0, e._)`${g}`;
    }
    return (0, e._)`${c}${d}${(0, e.getProperty)(k)}`;
  }
  re.schemaRefOrVal = a;
  function l(c) {
    return b(decodeURIComponent(c));
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
  function b(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  re.unescapeJsonPointer = b;
  function y(c, d) {
    if (Array.isArray(c))
      for (const g of c)
        d(g);
    else
      d(c);
  }
  re.eachItem = y;
  function $({ mergeNames: c, mergeToName: d, mergeValues: g, resultToName: k }) {
    return (E, O, A, P) => {
      const I = A === void 0 ? O : A instanceof e.Name ? (O instanceof e.Name ? c(E, O, A) : d(E, O, A), A) : O instanceof e.Name ? (d(E, A, O), O) : g(O, A);
      return P === e.Name && !(I instanceof e.Name) ? k(E, I) : I;
    };
  }
  re.mergeEvaluated = {
    props: $({
      mergeNames: (c, d, g) => c.if((0, e._)`${g} !== true && ${d} !== undefined`, () => {
        c.if((0, e._)`${d} === true`, () => c.assign(g, !0), () => c.assign(g, (0, e._)`${g} || {}`).code((0, e._)`Object.assign(${g}, ${d})`));
      }),
      mergeToName: (c, d, g) => c.if((0, e._)`${g} !== true`, () => {
        d === !0 ? c.assign(g, !0) : (c.assign(g, (0, e._)`${g} || {}`), S(c, g, d));
      }),
      mergeValues: (c, d) => c === !0 ? !0 : { ...c, ...d },
      resultToName: _
    }),
    items: $({
      mergeNames: (c, d, g) => c.if((0, e._)`${g} !== true && ${d} !== undefined`, () => c.assign(g, (0, e._)`${d} === true ? true : ${g} > ${d} ? ${g} : ${d}`)),
      mergeToName: (c, d, g) => c.if((0, e._)`${g} !== true`, () => c.assign(g, d === !0 ? !0 : (0, e._)`${g} > ${d} ? ${g} : ${d}`)),
      mergeValues: (c, d) => c === !0 ? !0 : Math.max(c, d),
      resultToName: (c, d) => c.var("items", d)
    })
  };
  function _(c, d) {
    if (d === !0)
      return c.var("props", !0);
    const g = c.var("props", (0, e._)`{}`);
    return d !== void 0 && S(c, g, d), g;
  }
  re.evaluatedPropsToName = _;
  function S(c, d, g) {
    Object.keys(g).forEach((k) => c.assign((0, e._)`${d}${(0, e.getProperty)(k)}`, !0));
  }
  re.setEvaluated = S;
  const u = {};
  function v(c, d) {
    return c.scopeValue("func", {
      ref: d,
      code: u[d.code] || (u[d.code] = new t._Code(d.code))
    });
  }
  re.useFunc = v;
  var p;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(p || (re.Type = p = {}));
  function m(c, d, g) {
    if (c instanceof e.Name) {
      const k = d === p.Num;
      return g ? k ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : k ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return g ? (0, e.getProperty)(c).toString() : "/" + h(c);
  }
  re.getErrorPath = m;
  function C(c, d, g = c.opts.strictSchema) {
    if (g) {
      if (d = `strict mode: ${d}`, g === !0)
        throw new Error(d);
      c.self.logger.warn(d);
    }
  }
  return re.checkStrictMode = C, re;
}
var Ot = {}, Yr;
function Ne() {
  if (Yr) return Ot;
  Yr = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
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
var Xr;
function Dn() {
  return Xr || (Xr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Ne();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: v }) => v ? (0, t.str)`"${u}" keyword must be ${v} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function i(u, v = e.keywordError, p, m) {
      const { it: C } = u, { gen: c, compositeRule: d, allErrors: g } = C, k = b(u, v, p);
      m ?? (d || g) ? l(c, k) : f(C, (0, t._)`[${k}]`);
    }
    e.reportError = i;
    function o(u, v = e.keywordError, p) {
      const { it: m } = u, { gen: C, compositeRule: c, allErrors: d } = m, g = b(u, v, p);
      l(C, g), c || d || f(m, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(u, v) {
      u.assign(r.default.errors, v), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(v, () => u.assign((0, t._)`${r.default.vErrors}.length`, v), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: v, schemaValue: p, data: m, errsCount: C, it: c }) {
      if (C === void 0)
        throw new Error("ajv implementation error");
      const d = u.name("err");
      u.forRange("i", C, r.default.errors, (g) => {
        u.const(d, (0, t._)`${r.default.vErrors}[${g}]`), u.if((0, t._)`${d}.instancePath === undefined`, () => u.assign((0, t._)`${d}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), u.assign((0, t._)`${d}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${v}`), c.opts.verbose && (u.assign((0, t._)`${d}.schema`, p), u.assign((0, t._)`${d}.data`, m));
      });
    }
    e.extendErrors = a;
    function l(u, v) {
      const p = u.const("err", v);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${r.default.vErrors}.push(${p})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function f(u, v) {
      const { gen: p, validateName: m, schemaEnv: C } = u;
      C.$async ? p.throw((0, t._)`new ${u.ValidationError}(${v})`) : (p.assign((0, t._)`${m}.errors`, v), p.return(!1));
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
    function b(u, v, p) {
      const { createErrors: m } = u.it;
      return m === !1 ? (0, t._)`{}` : y(u, v, p);
    }
    function y(u, v, p = {}) {
      const { gen: m, it: C } = u, c = [
        $(C, p),
        _(u, p)
      ];
      return S(u, v, c), m.object(...c);
    }
    function $({ errorPath: u }, { instancePath: v }) {
      const p = v ? (0, t.str)`${u}${(0, n.getErrorPath)(v, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, p)];
    }
    function _({ keyword: u, it: { errSchemaPath: v } }, { schemaPath: p, parentSchema: m }) {
      let C = m ? v : (0, t.str)`${v}/${u}`;
      return p && (C = (0, t.str)`${C}${(0, n.getErrorPath)(p, n.Type.Str)}`), [h.schemaPath, C];
    }
    function S(u, { params: v, message: p }, m) {
      const { keyword: C, data: c, schemaValue: d, it: g } = u, { opts: k, propertyName: E, topSchemaRef: O, schemaPath: A } = g;
      m.push([h.keyword, C], [h.params, typeof v == "function" ? v(u) : v || (0, t._)`{}`]), k.messages && m.push([h.message, typeof p == "function" ? p(u) : p]), k.verbose && m.push([h.schema, d], [h.parentSchema, (0, t._)`${O}${A}`], [r.default.data, c]), E && m.push([h.propertyName, E]);
    }
  })(Jn)), Jn;
}
var Zr;
function sa() {
  if (Zr) return We;
  Zr = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.boolOrEmptySchema = We.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Dn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: l, schema: f, validateName: h } = a;
    f === !1 ? s(a, !1) : typeof f == "object" && f.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${h}.errors`, null), l.return(!0));
  }
  We.topBoolOrEmptySchema = i;
  function o(a, l) {
    const { gen: f, schema: h } = a;
    h === !1 ? (f.var(l, !1), s(a)) : f.var(l, !0);
  }
  We.boolOrEmptySchema = o;
  function s(a, l) {
    const { gen: f, data: h } = a, b = {
      gen: f,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(b, r, void 0, l);
  }
  return We;
}
var me = {}, Je = {}, Qr;
function Xi() {
  if (Qr) return Je;
  Qr = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.getRules = Je.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  Je.isJSONType = n;
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
  return Je.getRules = r, Je;
}
var Ie = {}, eo;
function Zi() {
  if (eo) return Ie;
  eo = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.shouldUseRule = Ie.shouldUseGroup = Ie.schemaHasRulesForType = void 0;
  function e({ schema: r, self: i }, o) {
    const s = i.RULES.types[o];
    return s && s !== !0 && t(r, s);
  }
  Ie.schemaHasRulesForType = e;
  function t(r, i) {
    return i.rules.some((o) => n(r, o));
  }
  Ie.shouldUseGroup = t;
  function n(r, i) {
    var o;
    return r[i.keyword] !== void 0 || ((o = i.definition.implements) === null || o === void 0 ? void 0 : o.some((s) => r[s] !== void 0));
  }
  return Ie.shouldUseRule = n, Ie;
}
var to;
function Tn() {
  if (to) return me;
  to = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.reportTypeError = me.checkDataTypes = me.checkDataType = me.coerceAndCheckDataType = me.getJSONTypes = me.getSchemaTypes = me.DataType = void 0;
  const e = /* @__PURE__ */ Xi(), t = /* @__PURE__ */ Zi(), n = /* @__PURE__ */ Dn(), r = /* @__PURE__ */ ne(), i = /* @__PURE__ */ oe();
  var o;
  (function(p) {
    p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
  })(o || (me.DataType = o = {}));
  function s(p) {
    const m = a(p.type);
    if (m.includes("null")) {
      if (p.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && p.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      p.nullable === !0 && m.push("null");
    }
    return m;
  }
  me.getSchemaTypes = s;
  function a(p) {
    const m = Array.isArray(p) ? p : p ? [p] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  me.getJSONTypes = a;
  function l(p, m) {
    const { gen: C, data: c, opts: d } = p, g = h(m, d.coerceTypes), k = m.length > 0 && !(g.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(p, m[0]));
    if (k) {
      const E = _(m, c, d.strictNumbers, o.Wrong);
      C.if(E, () => {
        g.length ? b(p, m, g) : u(p);
      });
    }
    return k;
  }
  me.coerceAndCheckDataType = l;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(p, m) {
    return m ? p.filter((C) => f.has(C) || m === "array" && C === "array") : [];
  }
  function b(p, m, C) {
    const { gen: c, data: d, opts: g } = p, k = c.let("dataType", (0, r._)`typeof ${d}`), E = c.let("coerced", (0, r._)`undefined`);
    g.coerceTypes === "array" && c.if((0, r._)`${k} == 'object' && Array.isArray(${d}) && ${d}.length == 1`, () => c.assign(d, (0, r._)`${d}[0]`).assign(k, (0, r._)`typeof ${d}`).if(_(m, d, g.strictNumbers), () => c.assign(E, d))), c.if((0, r._)`${E} !== undefined`);
    for (const A of C)
      (f.has(A) || A === "array" && g.coerceTypes === "array") && O(A);
    c.else(), u(p), c.endIf(), c.if((0, r._)`${E} !== undefined`, () => {
      c.assign(d, E), y(p, E);
    });
    function O(A) {
      switch (A) {
        case "string":
          c.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(E, (0, r._)`"" + ${d}`).elseIf((0, r._)`${d} === null`).assign(E, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${k} == "boolean" || ${d} === null
              || (${k} == "string" && ${d} && ${d} == +${d})`).assign(E, (0, r._)`+${d}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${k} === "boolean" || ${d} === null
              || (${k} === "string" && ${d} && ${d} == +${d} && !(${d} % 1))`).assign(E, (0, r._)`+${d}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${d} === "false" || ${d} === 0 || ${d} === null`).assign(E, !1).elseIf((0, r._)`${d} === "true" || ${d} === 1`).assign(E, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${d} === "" || ${d} === 0 || ${d} === false`), c.assign(E, null);
          return;
        case "array":
          c.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${d} === null`).assign(E, (0, r._)`[${d}]`);
      }
    }
  }
  function y({ gen: p, parentData: m, parentDataProperty: C }, c) {
    p.if((0, r._)`${m} !== undefined`, () => p.assign((0, r._)`${m}[${C}]`, c));
  }
  function $(p, m, C, c = o.Correct) {
    const d = c === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let g;
    switch (p) {
      case "null":
        return (0, r._)`${m} ${d} null`;
      case "array":
        g = (0, r._)`Array.isArray(${m})`;
        break;
      case "object":
        g = (0, r._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        g = k((0, r._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        g = k();
        break;
      default:
        return (0, r._)`typeof ${m} ${d} ${p}`;
    }
    return c === o.Correct ? g : (0, r.not)(g);
    function k(E = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, E, C ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  me.checkDataType = $;
  function _(p, m, C, c) {
    if (p.length === 1)
      return $(p[0], m, C, c);
    let d;
    const g = (0, i.toHash)(p);
    if (g.array && g.object) {
      const k = (0, r._)`typeof ${m} != "object"`;
      d = g.null ? k : (0, r._)`!${m} || ${k}`, delete g.null, delete g.array, delete g.object;
    } else
      d = r.nil;
    g.number && delete g.integer;
    for (const k in g)
      d = (0, r.and)(d, $(k, m, C, c));
    return d;
  }
  me.checkDataTypes = _;
  const S = {
    message: ({ schema: p }) => `must be ${p}`,
    params: ({ schema: p, schemaValue: m }) => typeof p == "string" ? (0, r._)`{type: ${p}}` : (0, r._)`{type: ${m}}`
  };
  function u(p) {
    const m = v(p);
    (0, n.reportError)(m, S);
  }
  me.reportTypeError = u;
  function v(p) {
    const { gen: m, data: C, schema: c } = p, d = (0, i.schemaRefOrVal)(p, c, "type");
    return {
      gen: m,
      keyword: "type",
      data: C,
      schema: c.type,
      schemaCode: d,
      schemaValue: d,
      parentSchema: c,
      params: {},
      it: p
    };
  }
  return me;
}
var vt = {}, no;
function aa() {
  if (no) return vt;
  no = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const l in s)
        r(i, l, s[l].default);
    else o === "array" && Array.isArray(a) && a.forEach((l, f) => r(i, f, l.default));
  }
  vt.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: l, data: f, opts: h } = i;
    if (s === void 0)
      return;
    const b = (0, e._)`${f}${(0, e.getProperty)(o)}`;
    if (l) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${b}`);
      return;
    }
    let y = (0, e._)`${b} === undefined`;
    h.useDefaults === "empty" && (y = (0, e._)`${y} || ${b} === null || ${b} === ""`), a.if(y, (0, e._)`${b} = ${(0, e.stringify)(s)}`);
  }
  return vt;
}
var ke = {}, ae = {}, ro;
function Me() {
  if (ro) return ae;
  ro = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ oe();
  function i(p, m) {
    const { gen: C, data: c, it: d } = p;
    C.if(h(C, c, m, d.opts.ownProperties), () => {
      p.setParams({ missingProperty: (0, e._)`${m}` }, !0), p.error();
    });
  }
  ae.checkReportMissingProp = i;
  function o({ gen: p, data: m, it: { opts: C } }, c, d) {
    return (0, e.or)(...c.map((g) => (0, e.and)(h(p, m, g, C.ownProperties), (0, e._)`${d} = ${g}`)));
  }
  ae.checkMissingProp = o;
  function s(p, m) {
    p.setParams({ missingProperty: m }, !0), p.error();
  }
  ae.reportMissingProp = s;
  function a(p) {
    return p.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = a;
  function l(p, m, C) {
    return (0, e._)`${a(p)}.call(${m}, ${C})`;
  }
  ae.isOwnProperty = l;
  function f(p, m, C, c) {
    const d = (0, e._)`${m}${(0, e.getProperty)(C)} !== undefined`;
    return c ? (0, e._)`${d} && ${l(p, m, C)}` : d;
  }
  ae.propertyInData = f;
  function h(p, m, C, c) {
    const d = (0, e._)`${m}${(0, e.getProperty)(C)} === undefined`;
    return c ? (0, e.or)(d, (0, e.not)(l(p, m, C))) : d;
  }
  ae.noPropertyInData = h;
  function b(p) {
    return p ? Object.keys(p).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = b;
  function y(p, m) {
    return b(m).filter((C) => !(0, t.alwaysValidSchema)(p, m[C]));
  }
  ae.schemaProperties = y;
  function $({ schemaCode: p, data: m, it: { gen: C, topSchemaRef: c, schemaPath: d, errorPath: g }, it: k }, E, O, A) {
    const P = A ? (0, e._)`${p}, ${m}, ${c}${d}` : m, I = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, g)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && I.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const G = (0, e._)`${P}, ${C.object(...I)}`;
    return O !== e.nil ? (0, e._)`${E}.call(${O}, ${G})` : (0, e._)`${E}(${G})`;
  }
  ae.callValidateCode = $;
  const _ = (0, e._)`new RegExp`;
  function S({ gen: p, it: { opts: m } }, C) {
    const c = m.unicodeRegExp ? "u" : "", { regExp: d } = m.code, g = d(C, c);
    return p.scopeValue("pattern", {
      key: g.toString(),
      ref: g,
      code: (0, e._)`${d.code === "new RegExp" ? _ : (0, r.useFunc)(p, d)}(${C}, ${c})`
    });
  }
  ae.usePattern = S;
  function u(p) {
    const { gen: m, data: C, keyword: c, it: d } = p, g = m.name("valid");
    if (d.allErrors) {
      const E = m.let("valid", !0);
      return k(() => m.assign(E, !1)), E;
    }
    return m.var(g, !0), k(() => m.break()), g;
    function k(E) {
      const O = m.const("len", (0, e._)`${C}.length`);
      m.forRange("i", 0, O, (A) => {
        p.subschema({
          keyword: c,
          dataProp: A,
          dataPropType: t.Type.Num
        }, g), m.if((0, e.not)(g), E);
      });
    }
  }
  ae.validateArray = u;
  function v(p) {
    const { gen: m, schema: C, keyword: c, it: d } = p;
    if (!Array.isArray(C))
      throw new Error("ajv implementation error");
    if (C.some((O) => (0, t.alwaysValidSchema)(d, O)) && !d.opts.unevaluated)
      return;
    const k = m.let("valid", !1), E = m.name("_valid");
    m.block(() => C.forEach((O, A) => {
      const P = p.subschema({
        keyword: c,
        schemaProp: A,
        compositeRule: !0
      }, E);
      m.assign(k, (0, e._)`${k} || ${E}`), p.mergeValidEvaluated(P, E) || m.if((0, e.not)(k));
    })), p.result(k, () => p.reset(), () => p.error(!0));
  }
  return ae.validateUnion = v, ae;
}
var oo;
function ca() {
  if (oo) return ke;
  oo = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.validateKeywordUsage = ke.validSchemaType = ke.funcKeywordCode = ke.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ Dn();
  function i(y, $) {
    const { gen: _, keyword: S, schema: u, parentSchema: v, it: p } = y, m = $.macro.call(p.self, u, v, p), C = f(_, S, m);
    p.opts.validateSchema !== !1 && p.self.validateSchema(m, !0);
    const c = _.name("valid");
    y.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${p.errSchemaPath}/${S}`,
      topSchemaRef: C,
      compositeRule: !0
    }, c), y.pass(c, () => y.error(!0));
  }
  ke.macroKeywordCode = i;
  function o(y, $) {
    var _;
    const { gen: S, keyword: u, schema: v, parentSchema: p, $data: m, it: C } = y;
    l(C, $);
    const c = !m && $.compile ? $.compile.call(C.self, v, p, C) : $.validate, d = f(S, u, c), g = S.let("valid");
    y.block$data(g, k), y.ok((_ = $.valid) !== null && _ !== void 0 ? _ : g);
    function k() {
      if ($.errors === !1)
        A(), $.modifying && s(y), P(() => y.error());
      else {
        const I = $.async ? E() : O();
        $.modifying && s(y), P(() => a(y, I));
      }
    }
    function E() {
      const I = S.let("ruleErrs", null);
      return S.try(() => A((0, e._)`await `), (G) => S.assign(g, !1).if((0, e._)`${G} instanceof ${C.ValidationError}`, () => S.assign(I, (0, e._)`${G}.errors`), () => S.throw(G))), I;
    }
    function O() {
      const I = (0, e._)`${d}.errors`;
      return S.assign(I, null), A(e.nil), I;
    }
    function A(I = $.async ? (0, e._)`await ` : e.nil) {
      const G = C.opts.passContext ? t.default.this : t.default.self, Y = !("compile" in $ && !m || $.schema === !1);
      S.assign(g, (0, e._)`${I}${(0, n.callValidateCode)(y, d, G, Y)}`, $.modifying);
    }
    function P(I) {
      var G;
      S.if((0, e.not)((G = $.valid) !== null && G !== void 0 ? G : g), I);
    }
  }
  ke.funcKeywordCode = o;
  function s(y) {
    const { gen: $, data: _, it: S } = y;
    $.if(S.parentData, () => $.assign(_, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function a(y, $) {
    const { gen: _ } = y;
    _.if((0, e._)`Array.isArray(${$})`, () => {
      _.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${$} : ${t.default.vErrors}.concat(${$})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(y);
    }, () => y.error());
  }
  function l({ schemaEnv: y }, $) {
    if ($.async && !y.$async)
      throw new Error("async keyword in sync schema");
  }
  function f(y, $, _) {
    if (_ === void 0)
      throw new Error(`keyword "${$}" failed to compile`);
    return y.scopeValue("keyword", typeof _ == "function" ? { ref: _ } : { ref: _, code: (0, e.stringify)(_) });
  }
  function h(y, $, _ = !1) {
    return !$.length || $.some((S) => S === "array" ? Array.isArray(y) : S === "object" ? y && typeof y == "object" && !Array.isArray(y) : typeof y == S || _ && typeof y > "u");
  }
  ke.validSchemaType = h;
  function b({ schema: y, opts: $, self: _, errSchemaPath: S }, u, v) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(v) : u.keyword !== v)
      throw new Error("ajv implementation error");
    const p = u.dependencies;
    if (p?.some((m) => !Object.prototype.hasOwnProperty.call(y, m)))
      throw new Error(`parent schema must have dependencies of ${v}: ${p.join(",")}`);
    if (u.validateSchema && !u.validateSchema(y[v])) {
      const C = `keyword "${v}" value is invalid at path "${S}": ` + _.errorsText(u.validateSchema.errors);
      if ($.validateSchema === "log")
        _.logger.error(C);
      else
        throw new Error(C);
    }
  }
  return ke.validateKeywordUsage = b, ke;
}
var De = {}, io;
function la() {
  if (io) return De;
  io = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.extendSubschemaMode = De.extendSubschemaData = De.getSubschema = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe();
  function n(o, { keyword: s, schemaProp: a, schema: l, schemaPath: f, errSchemaPath: h, topSchemaRef: b }) {
    if (s !== void 0 && l !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const y = o.schema[s];
      return a === void 0 ? {
        schema: y,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}`
      } : {
        schema: y[a],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (l !== void 0) {
      if (f === void 0 || h === void 0 || b === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: f,
        topSchemaRef: b,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  De.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: l, data: f, dataTypes: h, propertyName: b }) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: y } = s;
    if (a !== void 0) {
      const { errorPath: _, dataPathArr: S, opts: u } = s, v = y.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      $(v), o.errorPath = (0, e.str)`${_}${(0, t.getErrorPath)(a, l, u.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [...S, o.parentDataProperty];
    }
    if (f !== void 0) {
      const _ = f instanceof e.Name ? f : y.let("data", f, !0);
      $(_), b !== void 0 && (o.propertyName = b);
    }
    h && (o.dataTypes = h);
    function $(_) {
      o.data = _, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, _];
    }
  }
  De.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: l, createErrors: f, allErrors: h }) {
    l !== void 0 && (o.compositeRule = l), f !== void 0 && (o.createErrors = f), h !== void 0 && (o.allErrors = h), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return De.extendSubschemaMode = i, De;
}
var ve = {}, Qn, so;
function Qi() {
  return so || (so = 1, Qn = function e(t, n) {
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
  }), Qn;
}
var er = { exports: {} }, ao;
function da() {
  if (ao) return er.exports;
  ao = 1;
  var e = er.exports = function(r, i, o) {
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
  function t(r, i, o, s, a, l, f, h, b, y) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, l, f, h, b, y);
      for (var $ in s) {
        var _ = s[$];
        if (Array.isArray(_)) {
          if ($ in e.arrayKeywords)
            for (var S = 0; S < _.length; S++)
              t(r, i, o, _[S], a + "/" + $ + "/" + S, l, a, $, s, S);
        } else if ($ in e.propsKeywords) {
          if (_ && typeof _ == "object")
            for (var u in _)
              t(r, i, o, _[u], a + "/" + $ + "/" + n(u), l, a, $, s, u);
        } else ($ in e.keywords || r.allKeys && !($ in e.skipKeywords)) && t(r, i, o, _, a + "/" + $, l, a, $, s);
      }
      o(s, a, l, f, h, b, y);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return er.exports;
}
var co;
function qn() {
  if (co) return ve;
  co = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.getSchemaRefs = ve.resolveUrl = ve.normalizeId = ve._getFullPath = ve.getFullPath = ve.inlineRef = void 0;
  const e = /* @__PURE__ */ oe(), t = Qi(), n = da(), r = /* @__PURE__ */ new Set([
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
  function i(S, u = !0) {
    return typeof S == "boolean" ? !0 : u === !0 ? !s(S) : u ? a(S) <= u : !1;
  }
  ve.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(S) {
    for (const u in S) {
      if (o.has(u))
        return !0;
      const v = S[u];
      if (Array.isArray(v) && v.some(s) || typeof v == "object" && s(v))
        return !0;
    }
    return !1;
  }
  function a(S) {
    let u = 0;
    for (const v in S) {
      if (v === "$ref")
        return 1 / 0;
      if (u++, !r.has(v) && (typeof S[v] == "object" && (0, e.eachItem)(S[v], (p) => u += a(p)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function l(S, u = "", v) {
    v !== !1 && (u = b(u));
    const p = S.parse(u);
    return f(S, p);
  }
  ve.getFullPath = l;
  function f(S, u) {
    return S.serialize(u).split("#")[0] + "#";
  }
  ve._getFullPath = f;
  const h = /#\/?$/;
  function b(S) {
    return S ? S.replace(h, "") : "";
  }
  ve.normalizeId = b;
  function y(S, u, v) {
    return v = b(v), S.resolve(u, v);
  }
  ve.resolveUrl = y;
  const $ = /^[a-z_][-a-z0-9._]*$/i;
  function _(S, u) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: v, uriResolver: p } = this.opts, m = b(S[v] || u), C = { "": m }, c = l(p, m, !1), d = {}, g = /* @__PURE__ */ new Set();
    return n(S, { allKeys: !0 }, (O, A, P, I) => {
      if (I === void 0)
        return;
      const G = c + A;
      let Y = C[I];
      typeof O[v] == "string" && (Y = ee.call(this, O[v])), ie.call(this, O.$anchor), ie.call(this, O.$dynamicAnchor), C[A] = Y;
      function ee(B) {
        const Q = this.opts.uriResolver.resolve;
        if (B = b(Y ? Q(Y, B) : B), g.has(B))
          throw E(B);
        g.add(B);
        let D = this.refs[B];
        return typeof D == "string" && (D = this.refs[D]), typeof D == "object" ? k(O, D.schema, B) : B !== b(G) && (B[0] === "#" ? (k(O, d[B], B), d[B] = O) : this.refs[B] = G), B;
      }
      function ie(B) {
        if (typeof B == "string") {
          if (!$.test(B))
            throw new Error(`invalid anchor "${B}"`);
          ee.call(this, `#${B}`);
        }
      }
    }), d;
    function k(O, A, P) {
      if (A !== void 0 && !t(O, A))
        throw E(P);
    }
    function E(O) {
      return new Error(`reference "${O}" resolves to more than one schema`);
    }
  }
  return ve.getSchemaRefs = _, ve;
}
var lo;
function Vn() {
  if (lo) return ze;
  lo = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.getData = ze.KeywordCxt = ze.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ sa(), t = /* @__PURE__ */ Tn(), n = /* @__PURE__ */ Zi(), r = /* @__PURE__ */ Tn(), i = /* @__PURE__ */ aa(), o = /* @__PURE__ */ ca(), s = /* @__PURE__ */ la(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ Ne(), f = /* @__PURE__ */ qn(), h = /* @__PURE__ */ oe(), b = /* @__PURE__ */ Dn();
  function y(N) {
    if (c(N) && (g(N), C(N))) {
      u(N);
      return;
    }
    $(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  ze.validateFunctionCode = y;
  function $({ gen: N, validateName: j, schema: L, schemaEnv: K, opts: W }, te) {
    W.code.es5 ? N.func(j, (0, a._)`${l.default.data}, ${l.default.valCxt}`, K.$async, () => {
      N.code((0, a._)`"use strict"; ${p(L, W)}`), S(N, W), N.code(te);
    }) : N.func(j, (0, a._)`${l.default.data}, ${_(W)}`, K.$async, () => N.code(p(L, W)).code(te));
  }
  function _(N) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${N.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function S(N, j) {
    N.if(l.default.valCxt, () => {
      N.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), N.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), N.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), N.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), j.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      N.var(l.default.instancePath, (0, a._)`""`), N.var(l.default.parentData, (0, a._)`undefined`), N.var(l.default.parentDataProperty, (0, a._)`undefined`), N.var(l.default.rootData, l.default.data), j.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(N) {
    const { schema: j, opts: L, gen: K } = N;
    $(N, () => {
      L.$comment && j.$comment && I(N), O(N), K.let(l.default.vErrors, null), K.let(l.default.errors, 0), L.unevaluated && v(N), k(N), G(N);
    });
  }
  function v(N) {
    const { gen: j, validateName: L } = N;
    N.evaluated = j.const("evaluated", (0, a._)`${L}.evaluated`), j.if((0, a._)`${N.evaluated}.dynamicProps`, () => j.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), j.if((0, a._)`${N.evaluated}.dynamicItems`, () => j.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function p(N, j) {
    const L = typeof N == "object" && N[j.schemaId];
    return L && (j.code.source || j.code.process) ? (0, a._)`/*# sourceURL=${L} */` : a.nil;
  }
  function m(N, j) {
    if (c(N) && (g(N), C(N))) {
      d(N, j);
      return;
    }
    (0, e.boolOrEmptySchema)(N, j);
  }
  function C({ schema: N, self: j }) {
    if (typeof N == "boolean")
      return !N;
    for (const L in N)
      if (j.RULES.all[L])
        return !0;
    return !1;
  }
  function c(N) {
    return typeof N.schema != "boolean";
  }
  function d(N, j) {
    const { schema: L, gen: K, opts: W } = N;
    W.$comment && L.$comment && I(N), A(N), P(N);
    const te = K.const("_errs", l.default.errors);
    k(N, te), K.var(j, (0, a._)`${te} === ${l.default.errors}`);
  }
  function g(N) {
    (0, h.checkUnknownRules)(N), E(N);
  }
  function k(N, j) {
    if (N.opts.jtd)
      return ee(N, [], !1, j);
    const L = (0, t.getSchemaTypes)(N.schema), K = (0, t.coerceAndCheckDataType)(N, L);
    ee(N, L, !K, j);
  }
  function E(N) {
    const { schema: j, errSchemaPath: L, opts: K, self: W } = N;
    j.$ref && K.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(j, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function O(N) {
    const { schema: j, opts: L } = N;
    j.default !== void 0 && L.useDefaults && L.strictSchema && (0, h.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function A(N) {
    const j = N.schema[N.opts.schemaId];
    j && (N.baseId = (0, f.resolveUrl)(N.opts.uriResolver, N.baseId, j));
  }
  function P(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function I({ gen: N, schemaEnv: j, schema: L, errSchemaPath: K, opts: W }) {
    const te = L.$comment;
    if (W.$comment === !0)
      N.code((0, a._)`${l.default.self}.logger.log(${te})`);
    else if (typeof W.$comment == "function") {
      const ue = (0, a.str)`${K}/$comment`, be = N.scopeValue("root", { ref: j.root });
      N.code((0, a._)`${l.default.self}.opts.$comment(${te}, ${ue}, ${be}.schema)`);
    }
  }
  function G(N) {
    const { gen: j, schemaEnv: L, validateName: K, ValidationError: W, opts: te } = N;
    L.$async ? j.if((0, a._)`${l.default.errors} === 0`, () => j.return(l.default.data), () => j.throw((0, a._)`new ${W}(${l.default.vErrors})`)) : (j.assign((0, a._)`${K}.errors`, l.default.vErrors), te.unevaluated && Y(N), j.return((0, a._)`${l.default.errors} === 0`));
  }
  function Y({ gen: N, evaluated: j, props: L, items: K }) {
    L instanceof a.Name && N.assign((0, a._)`${j}.props`, L), K instanceof a.Name && N.assign((0, a._)`${j}.items`, K);
  }
  function ee(N, j, L, K) {
    const { gen: W, schema: te, data: ue, allErrors: be, opts: he, self: fe } = N, { RULES: de } = fe;
    if (te.$ref && (he.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(te, de))) {
      W.block(() => H(N, "$ref", de.all.$ref.definition));
      return;
    }
    he.jtd || B(N, j), W.block(() => {
      for (const _e of de.rules)
        Ve(_e);
      Ve(de.post);
    });
    function Ve(_e) {
      (0, n.shouldUseGroup)(te, _e) && (_e.type ? (W.if((0, r.checkDataType)(_e.type, ue, he.strictNumbers)), ie(N, _e), j.length === 1 && j[0] === _e.type && L && (W.else(), (0, r.reportTypeError)(N)), W.endIf()) : ie(N, _e), be || W.if((0, a._)`${l.default.errors} === ${K || 0}`));
    }
  }
  function ie(N, j) {
    const { gen: L, schema: K, opts: { useDefaults: W } } = N;
    W && (0, i.assignDefaults)(N, j.type), L.block(() => {
      for (const te of j.rules)
        (0, n.shouldUseRule)(K, te) && H(N, te.keyword, te.definition, j.type);
    });
  }
  function B(N, j) {
    N.schemaEnv.meta || !N.opts.strictTypes || (Q(N, j), N.opts.allowUnionTypes || D(N, j), R(N, N.dataTypes));
  }
  function Q(N, j) {
    if (j.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = j;
        return;
      }
      j.forEach((L) => {
        F(N.dataTypes, L) || x(N, `type "${L}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), w(N, j);
    }
  }
  function D(N, j) {
    j.length > 1 && !(j.length === 2 && j.includes("null")) && x(N, "use allowUnionTypes to allow union type keyword");
  }
  function R(N, j) {
    const L = N.self.RULES.all;
    for (const K in L) {
      const W = L[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(N.schema, W)) {
        const { type: te } = W.definition;
        te.length && !te.some((ue) => q(j, ue)) && x(N, `missing type "${te.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function q(N, j) {
    return N.includes(j) || j === "number" && N.includes("integer");
  }
  function F(N, j) {
    return N.includes(j) || j === "integer" && N.includes("number");
  }
  function w(N, j) {
    const L = [];
    for (const K of N.dataTypes)
      F(j, K) ? L.push(K) : j.includes("integer") && K === "number" && L.push("integer");
    N.dataTypes = L;
  }
  function x(N, j) {
    const L = N.schemaEnv.baseId + N.errSchemaPath;
    j += ` at "${L}" (strictTypes)`, (0, h.checkStrictMode)(N, j, N.opts.strictTypes);
  }
  class z {
    constructor(j, L, K) {
      if ((0, o.validateKeywordUsage)(j, L, K), this.gen = j.gen, this.allErrors = j.allErrors, this.keyword = K, this.data = j.data, this.schema = j.schema[K], this.$data = L.$data && j.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(j, this.schema, K, this.$data), this.schemaType = L.schemaType, this.parentSchema = j.schema, this.params = {}, this.it = j, this.def = L, this.$data)
        this.schemaCode = j.gen.const("vSchema", Z(this.$data, j));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = j.gen.const("_errs", l.default.errors));
    }
    result(j, L, K) {
      this.failResult((0, a.not)(j), L, K);
    }
    failResult(j, L, K) {
      this.gen.if(j), K ? K() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(j, L) {
      this.failResult((0, a.not)(j), void 0, L);
    }
    fail(j) {
      if (j === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(j), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(j) {
      if (!this.$data)
        return this.fail(j);
      const { schemaCode: L } = this;
      this.fail((0, a._)`${L} !== undefined && (${(0, a.or)(this.invalid$data(), j)})`);
    }
    error(j, L, K) {
      if (L) {
        this.setParams(L), this._error(j, K), this.setParams({});
        return;
      }
      this._error(j, K);
    }
    _error(j, L) {
      (j ? b.reportExtraError : b.reportError)(this, this.def.error, L);
    }
    $dataError() {
      (0, b.reportError)(this, this.def.$dataError || b.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, b.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(j) {
      this.allErrors || this.gen.if(j);
    }
    setParams(j, L) {
      L ? Object.assign(this.params, j) : this.params = j;
    }
    block$data(j, L, K = a.nil) {
      this.gen.block(() => {
        this.check$data(j, K), L();
      });
    }
    check$data(j = a.nil, L = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: W, schemaType: te, def: ue } = this;
      K.if((0, a.or)((0, a._)`${W} === undefined`, L)), j !== a.nil && K.assign(j, !0), (te.length || ue.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), j !== a.nil && K.assign(j, !1)), K.else();
    }
    invalid$data() {
      const { gen: j, schemaCode: L, schemaType: K, def: W, it: te } = this;
      return (0, a.or)(ue(), be());
      function ue() {
        if (K.length) {
          if (!(L instanceof a.Name))
            throw new Error("ajv implementation error");
          const he = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, r.checkDataTypes)(he, L, te.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function be() {
        if (W.validateSchema) {
          const he = j.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, a._)`!${he}(${L})`;
        }
        return a.nil;
      }
    }
    subschema(j, L) {
      const K = (0, s.getSubschema)(this.it, j);
      (0, s.extendSubschemaData)(K, this.it, j), (0, s.extendSubschemaMode)(K, j);
      const W = { ...this.it, ...K, items: void 0, props: void 0 };
      return m(W, L), W;
    }
    mergeEvaluated(j, L) {
      const { it: K, gen: W } = this;
      K.opts.unevaluated && (K.props !== !0 && j.props !== void 0 && (K.props = h.mergeEvaluated.props(W, j.props, K.props, L)), K.items !== !0 && j.items !== void 0 && (K.items = h.mergeEvaluated.items(W, j.items, K.items, L)));
    }
    mergeValidEvaluated(j, L) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(L, () => this.mergeEvaluated(j, a.Name)), !0;
    }
  }
  ze.KeywordCxt = z;
  function H(N, j, L, K) {
    const W = new z(N, L, j);
    "code" in L ? L.code(W, K) : W.$data && L.validate ? (0, o.funcKeywordCode)(W, L) : "macro" in L ? (0, o.macroKeywordCode)(W, L) : (L.compile || L.validate) && (0, o.funcKeywordCode)(W, L);
  }
  const U = /^\/(?:[^~]|~0|~1)*$/, X = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(N, { dataLevel: j, dataNames: L, dataPathArr: K }) {
    let W, te;
    if (N === "")
      return l.default.rootData;
    if (N[0] === "/") {
      if (!U.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      W = N, te = l.default.rootData;
    } else {
      const fe = X.exec(N);
      if (!fe)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const de = +fe[1];
      if (W = fe[2], W === "#") {
        if (de >= j)
          throw new Error(he("property/index", de));
        return K[j - de];
      }
      if (de > j)
        throw new Error(he("data", de));
      if (te = L[j - de], !W)
        return te;
    }
    let ue = te;
    const be = W.split("/");
    for (const fe of be)
      fe && (te = (0, a._)`${te}${(0, a.getProperty)((0, h.unescapeJsonPointer)(fe))}`, ue = (0, a._)`${ue} && ${te}`);
    return ue;
    function he(fe, de) {
      return `Cannot access ${fe} ${de} levels up, current level is ${j}`;
    }
  }
  return ze.getData = Z, ze;
}
var Tt = {}, uo;
function Sr() {
  if (uo) return Tt;
  uo = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Tt.default = e, Tt;
}
var jt = {}, fo;
function Ln() {
  if (fo) return jt;
  fo = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return jt.default = t, jt;
}
var we = {}, po;
function Bn() {
  if (po) return we;
  po = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Sr(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ qn(), i = /* @__PURE__ */ oe(), o = /* @__PURE__ */ Vn();
  class s {
    constructor(v) {
      var p;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof v.schema == "object" && (m = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (p = v.baseId) !== null && p !== void 0 ? p : (0, r.normalizeId)(m?.[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = s;
  function a(u) {
    const v = h.call(this, u);
    if (v)
      return v;
    const p = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: m, lines: C } = this.opts.code, { ownProperties: c } = this.opts, d = new e.CodeGen(this.scope, { es5: m, lines: C, ownProperties: c });
    let g;
    u.$async && (g = d.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = d.scopeName("validate");
    u.validateName = k;
    const E = {
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
      topSchemaRef: d.scopeValue("schema", this.opts.code.source === !0 ? { ref: u.schema, code: (0, e.stringify)(u.schema) } : { ref: u.schema }),
      validateName: k,
      ValidationError: g,
      schema: u.schema,
      schemaEnv: u,
      rootId: p,
      baseId: u.baseId || p,
      schemaPath: e.nil,
      errSchemaPath: u.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let O;
    try {
      this._compilations.add(u), (0, o.validateFunctionCode)(E), d.optimize(this.opts.code.optimize);
      const A = d.toString();
      O = `${d.scopeRefs(n.default.scope)}return ${A}`, this.opts.code.process && (O = this.opts.code.process(O, u));
      const I = new Function(`${n.default.self}`, `${n.default.scope}`, O)(this, this.scope.get());
      if (this.scope.value(k, { ref: I }), I.errors = null, I.schema = u.schema, I.schemaEnv = u, u.$async && (I.$async = !0), this.opts.code.source === !0 && (I.source = { validateName: k, validateCode: A, scopeValues: d._values }), this.opts.unevaluated) {
        const { props: G, items: Y } = E;
        I.evaluated = {
          props: G instanceof e.Name ? void 0 : G,
          items: Y instanceof e.Name ? void 0 : Y,
          dynamicProps: G instanceof e.Name,
          dynamicItems: Y instanceof e.Name
        }, I.source && (I.source.evaluated = (0, e.stringify)(I.evaluated));
      }
      return u.validate = I, u;
    } catch (A) {
      throw delete u.validate, delete u.validateName, O && this.logger.error("Error compiling schema, function code:", O), A;
    } finally {
      this._compilations.delete(u);
    }
  }
  we.compileSchema = a;
  function l(u, v, p) {
    var m;
    p = (0, r.resolveUrl)(this.opts.uriResolver, v, p);
    const C = u.refs[p];
    if (C)
      return C;
    let c = y.call(this, u, p);
    if (c === void 0) {
      const d = (m = u.localRefs) === null || m === void 0 ? void 0 : m[p], { schemaId: g } = this.opts;
      d && (c = new s({ schema: d, schemaId: g, root: u, baseId: v }));
    }
    if (c !== void 0)
      return u.refs[p] = f.call(this, c);
  }
  we.resolveRef = l;
  function f(u) {
    return (0, r.inlineRef)(u.schema, this.opts.inlineRefs) ? u.schema : u.validate ? u : a.call(this, u);
  }
  function h(u) {
    for (const v of this._compilations)
      if (b(v, u))
        return v;
  }
  we.getCompilingSchema = h;
  function b(u, v) {
    return u.schema === v.schema && u.root === v.root && u.baseId === v.baseId;
  }
  function y(u, v) {
    let p;
    for (; typeof (p = this.refs[v]) == "string"; )
      v = p;
    return p || this.schemas[v] || $.call(this, u, v);
  }
  function $(u, v) {
    const p = this.opts.uriResolver.parse(v), m = (0, r._getFullPath)(this.opts.uriResolver, p);
    let C = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && m === C)
      return S.call(this, p, u);
    const c = (0, r.normalizeId)(m), d = this.refs[c] || this.schemas[c];
    if (typeof d == "string") {
      const g = $.call(this, u, d);
      return typeof g?.schema != "object" ? void 0 : S.call(this, p, g);
    }
    if (typeof d?.schema == "object") {
      if (d.validate || a.call(this, d), c === (0, r.normalizeId)(v)) {
        const { schema: g } = d, { schemaId: k } = this.opts, E = g[k];
        return E && (C = (0, r.resolveUrl)(this.opts.uriResolver, C, E)), new s({ schema: g, schemaId: k, root: u, baseId: C });
      }
      return S.call(this, p, d);
    }
  }
  we.resolveSchema = $;
  const _ = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function S(u, { baseId: v, schema: p, root: m }) {
    var C;
    if (((C = u.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/")
      return;
    for (const g of u.fragment.slice(1).split("/")) {
      if (typeof p == "boolean")
        return;
      const k = p[(0, i.unescapeFragment)(g)];
      if (k === void 0)
        return;
      p = k;
      const E = typeof p == "object" && p[this.opts.schemaId];
      !_.has(g) && E && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, E));
    }
    let c;
    if (typeof p != "boolean" && p.$ref && !(0, i.schemaHasRulesButRef)(p, this.RULES)) {
      const g = (0, r.resolveUrl)(this.opts.uriResolver, v, p.$ref);
      c = $.call(this, m, g);
    }
    const { schemaId: d } = this.opts;
    if (c = c || new s({ schema: p, schemaId: d, root: m, baseId: v }), c.schema !== c.root.schema)
      return c;
  }
  return we;
}
const ua = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", fa = "Meta-schema for $data reference (JSON AnySchema extension proposal)", pa = "object", ha = ["$data"], ma = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ga = !1, ya = {
  $id: ua,
  description: fa,
  type: pa,
  required: ha,
  properties: ma,
  additionalProperties: ga
};
var zt = {}, $t = { exports: {} }, tr, ho;
function es() {
  if (ho) return tr;
  ho = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(c) {
    let d = "", g = 0, k = 0;
    for (k = 0; k < c.length; k++)
      if (g = c[k].charCodeAt(0), g !== 48) {
        if (!(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
          return "";
        d += c[k];
        break;
      }
    for (k += 1; k < c.length; k++) {
      if (g = c[k].charCodeAt(0), !(g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102))
        return "";
      d += c[k];
    }
    return d;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, d, g) {
    if (c.length) {
      const k = o(c);
      if (k !== "")
        d.push(k);
      else
        return g.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function f(c) {
    let d = 0;
    const g = { error: !1, address: "", zone: "" }, k = [], E = [];
    let O = !1, A = !1, P = l;
    for (let I = 0; I < c.length; I++) {
      const G = c[I];
      if (!(G === "[" || G === "]"))
        if (G === ":") {
          if (O === !0 && (A = !0), !P(E, k, g))
            break;
          if (++d > 7) {
            g.error = !0;
            break;
          }
          I > 0 && c[I - 1] === ":" && (O = !0), k.push(":");
          continue;
        } else if (G === "%") {
          if (!P(E, k, g))
            break;
          P = a;
        } else {
          E.push(G);
          continue;
        }
    }
    return E.length && (P === a ? g.zone = E.join("") : A ? k.push(E.join("")) : k.push(o(E))), g.address = k.join(""), g;
  }
  function h(c) {
    if (b(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const d = f(c);
    if (d.error)
      return { host: c, isIPV6: !1 };
    {
      let g = d.address, k = d.address;
      return d.zone && (g += "%" + d.zone, k += "%25" + d.zone), { host: g, isIPV6: !0, escapedHost: k };
    }
  }
  function b(c, d) {
    let g = 0;
    for (let k = 0; k < c.length; k++)
      c[k] === d && g++;
    return g;
  }
  function y(c) {
    let d = c;
    const g = [];
    let k = -1, E = 0;
    for (; E = d.length; ) {
      if (E === 1) {
        if (d === ".")
          break;
        if (d === "/") {
          g.push("/");
          break;
        } else {
          g.push(d);
          break;
        }
      } else if (E === 2) {
        if (d[0] === ".") {
          if (d[1] === ".")
            break;
          if (d[1] === "/") {
            d = d.slice(2);
            continue;
          }
        } else if (d[0] === "/" && (d[1] === "." || d[1] === "/")) {
          g.push("/");
          break;
        }
      } else if (E === 3 && d === "/..") {
        g.length !== 0 && g.pop(), g.push("/");
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
          d = d.slice(3), g.length !== 0 && g.pop();
          continue;
        }
      }
      if ((k = d.indexOf("/", 1)) === -1) {
        g.push(d);
        break;
      } else
        g.push(d.slice(0, k)), d = d.slice(k);
    }
    return g.join("");
  }
  const $ = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, S = /[@/?#]/g;
  function u(c, d) {
    const g = d ? S : _;
    return g.lastIndex = 0, c.replace(g, (k) => $[k]);
  }
  function v(c, d = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let g = "";
    for (let k = 0; k < c.length; k++) {
      if (c[k] === "%" && k + 2 < c.length) {
        const E = c.slice(k + 1, k + 3);
        if (n(E)) {
          const O = E.toUpperCase(), A = String.fromCharCode(parseInt(O, 16));
          d && r(A) ? g += A : g += "%" + O, k += 2;
          continue;
        }
      }
      g += c[k];
    }
    return g;
  }
  function p(c) {
    let d = "";
    for (let g = 0; g < c.length; g++) {
      if (c[g] === "%" && g + 2 < c.length) {
        const k = c.slice(g + 1, g + 3);
        if (n(k)) {
          const E = k.toUpperCase(), O = String.fromCharCode(parseInt(E, 16));
          O !== "." && r(O) ? d += O : d += "%" + E, g += 2;
          continue;
        }
      }
      i(c[g]) ? d += c[g] : d += escape(c[g]);
    }
    return d;
  }
  function m(c) {
    let d = "";
    for (let g = 0; g < c.length; g++) {
      if (c[g] === "%" && g + 2 < c.length) {
        const k = c.slice(g + 1, g + 3);
        if (n(k)) {
          d += "%" + k.toUpperCase(), g += 2;
          continue;
        }
      }
      d += escape(c[g]);
    }
    return d;
  }
  function C(c) {
    const d = [];
    if (c.userinfo !== void 0 && (d.push(c.userinfo), d.push("@")), c.host !== void 0) {
      let g = unescape(c.host);
      if (!t(g)) {
        const k = h(g);
        k.isIPV6 === !0 ? g = `[${k.escapedHost}]` : g = u(g, !1);
      }
      d.push(g);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (d.push(":"), d.push(String(c.port))), d.length ? d.join("") : void 0;
  }
  return tr = {
    nonSimpleDomain: s,
    recomposeAuthority: C,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: v,
    normalizePathEncoding: p,
    escapePreservingEscapes: m,
    removeDotSegments: y,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: o
  }, tr;
}
var nr, mo;
function va() {
  if (mo) return nr;
  mo = 1;
  const { isUUID: e } = es(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function o(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function s(c) {
    const d = String(c.scheme).toLowerCase() === "https";
    return (c.port === (d ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = i(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function l(c) {
    if ((c.port === (i(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [d, g] = c.resourceName.split("?");
      c.path = d && d !== "/" ? d : void 0, c.query = g, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function f(c, d) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const g = c.path.match(t);
    if (g) {
      const k = d.scheme || c.scheme || "urn";
      c.nid = g[1].toLowerCase(), c.nss = g[2];
      const E = `${k}:${d.nid || c.nid}`, O = C(E);
      c.path = void 0, O && (c = O.parse(c, d));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function h(c, d) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const g = d.scheme || c.scheme || "urn", k = c.nid.toLowerCase(), E = `${g}:${d.nid || k}`, O = C(E);
    O && (c = O.serialize(c, d));
    const A = c, P = c.nss;
    return A.path = `${k || d.nid}:${P}`, d.skipEscape = !0, A;
  }
  function b(c, d) {
    const g = c;
    return g.uuid = g.nss, g.nss = void 0, !d.tolerant && (!g.uuid || !e(g.uuid)) && (g.error = g.error || "UUID is not valid."), g;
  }
  function y(c) {
    const d = c;
    return d.nss = (c.uuid || "").toLowerCase(), d;
  }
  const $ = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: s
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: $.domainHost,
      parse: o,
      serialize: s
    }
  ), S = (
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
      domainHost: S.domainHost,
      parse: S.parse,
      serialize: S.serialize
    }
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: $,
      https: _,
      ws: S,
      wss: u,
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
          parse: b,
          serialize: y,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(m, null);
  function C(c) {
    return c && (m[
      /** @type {SchemeName} */
      c
    ] || m[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return nr = {
    wsIsSecure: i,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: C
  }, nr;
}
var go;
function $a() {
  if (go) return $t.exports;
  go = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: l } = es(), { SCHEMES: f, getSchemeHandler: h } = va();
  function b(E, O) {
    return typeof E == "string" ? E = /** @type {T} */
    c(E, O) : typeof E == "object" && (E = /** @type {T} */
    C(S(E, O), O)), E;
  }
  function y(E, O, A) {
    const P = A ? Object.assign({ scheme: "null" }, A) : { scheme: "null" }, I = $(C(E, P), C(O, P), P, !0);
    return P.skipEscape = !0, S(I, P);
  }
  function $(E, O, A, P) {
    const I = {};
    return P || (E = C(S(E, A), A), O = C(S(O, A), A)), A = A || {}, !A.tolerant && O.scheme ? (I.scheme = O.scheme, I.userinfo = O.userinfo, I.host = O.host, I.port = O.port, I.path = t(O.path || ""), I.query = O.query) : (O.userinfo !== void 0 || O.host !== void 0 || O.port !== void 0 ? (I.userinfo = O.userinfo, I.host = O.host, I.port = O.port, I.path = t(O.path || ""), I.query = O.query) : (O.path ? (O.path[0] === "/" ? I.path = t(O.path) : ((E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0) && !E.path ? I.path = "/" + O.path : E.path ? I.path = E.path.slice(0, E.path.lastIndexOf("/") + 1) + O.path : I.path = O.path, I.path = t(I.path)), I.query = O.query) : (I.path = E.path, O.query !== void 0 ? I.query = O.query : I.query = E.query), I.userinfo = E.userinfo, I.host = E.host, I.port = E.port), I.scheme = E.scheme), I.fragment = O.fragment, I;
  }
  function _(E, O, A) {
    const P = g(E, A), I = g(O, A);
    return P !== void 0 && I !== void 0 && P.toLowerCase() === I.toLowerCase();
  }
  function S(E, O) {
    const A = {
      host: E.host,
      scheme: E.scheme,
      userinfo: E.userinfo,
      port: E.port,
      path: E.path,
      query: E.query,
      nid: E.nid,
      nss: E.nss,
      uuid: E.uuid,
      fragment: E.fragment,
      reference: E.reference,
      resourceName: E.resourceName,
      secure: E.secure,
      error: ""
    }, P = Object.assign({}, O), I = [], G = h(P.scheme || A.scheme);
    G && G.serialize && G.serialize(A, P), A.path !== void 0 && (P.skipEscape ? A.path = r(A.path) : (A.path = o(A.path), A.scheme !== void 0 && (A.path = A.path.split("%3A").join(":")))), P.reference !== "suffix" && A.scheme && I.push(A.scheme, ":");
    const Y = n(A);
    if (Y !== void 0 && (P.reference !== "suffix" && I.push("//"), I.push(Y), A.path && A.path[0] !== "/" && I.push("/")), A.path !== void 0) {
      let ee = A.path;
      !P.absolutePath && (!G || !G.absolutePath) && (ee = t(ee)), Y === void 0 && ee[0] === "/" && ee[1] === "/" && (ee = "/%2F" + ee.slice(2)), I.push(ee);
    }
    return A.query !== void 0 && I.push("?", A.query), A.fragment !== void 0 && I.push("#", A.fragment), I.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, v = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function p(E, O) {
    if (O[2] !== void 0 && E.path && E.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof E.port == "number" && (E.port < 0 || E.port > 65535))
      return "URI port is malformed.";
  }
  function m(E, O) {
    const A = Object.assign({}, O), P = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let I = !1, G = !1;
    A.reference === "suffix" && (A.scheme ? E = A.scheme + ":" + E : E = "//" + E);
    const Y = E.match(v);
    Y !== null && Y[1].indexOf("\\") !== -1 && (P.error = "URI authority must not contain a literal backslash.", I = !0);
    const ee = E.match(u);
    if (ee) {
      P.scheme = ee[1], P.userinfo = ee[3], P.host = ee[4], P.port = parseInt(ee[5], 10), P.path = ee[6] || "", P.query = ee[7], P.fragment = ee[8], isNaN(P.port) && (P.port = ee[5]);
      const ie = p(P, ee);
      if (ie !== void 0 && (P.error = P.error || ie, I = !0), P.host)
        if (a(P.host) === !1) {
          const D = e(P.host);
          P.host = D.host.toLowerCase(), G = D.isIPV6;
        } else
          G = !0;
      P.scheme === void 0 && P.userinfo === void 0 && P.host === void 0 && P.port === void 0 && P.query === void 0 && !P.path ? P.reference = "same-document" : P.scheme === void 0 ? P.reference = "relative" : P.fragment === void 0 ? P.reference = "absolute" : P.reference = "uri", A.reference && A.reference !== "suffix" && A.reference !== P.reference && (P.error = P.error || "URI is not a " + A.reference + " reference.");
      const B = h(A.scheme || P.scheme);
      if (!A.unicodeSupport && (!B || !B.unicodeSupport) && P.host && (A.domainHost || B && B.domainHost) && G === !1 && l(P.host))
        try {
          P.host = new URL("http://" + P.host).hostname;
        } catch (Q) {
          P.error = P.error || "Host's domain name can not be converted to ASCII: " + Q;
        }
      if ((!B || B && !B.skipNormalize) && (E.indexOf("%") !== -1 && (P.scheme !== void 0 && (P.scheme = unescape(P.scheme)), P.host !== void 0 && (P.host = s(unescape(P.host), G))), P.path && (P.path = i(P.path)), P.fragment))
        try {
          P.fragment = encodeURI(decodeURIComponent(P.fragment));
        } catch {
          P.error = P.error || "URI malformed";
        }
      B && B.parse && B.parse(P, A);
    } else
      P.error = P.error || "URI can not be parsed.";
    return { parsed: P, malformedAuthorityOrPort: I };
  }
  function C(E, O) {
    return m(E, O).parsed;
  }
  function c(E, O) {
    return d(E, O).normalized;
  }
  function d(E, O) {
    const { parsed: A, malformedAuthorityOrPort: P } = m(E, O);
    return {
      normalized: P ? E : S(A, O),
      malformedAuthorityOrPort: P
    };
  }
  function g(E, O) {
    if (typeof E == "string") {
      const { normalized: A, malformedAuthorityOrPort: P } = d(E, O);
      return P ? void 0 : A;
    }
    if (typeof E == "object")
      return S(E, O);
  }
  const k = {
    SCHEMES: f,
    normalize: b,
    resolve: y,
    resolveComponent: $,
    equal: _,
    serialize: S,
    parse: C
  };
  return $t.exports = k, $t.exports.default = k, $t.exports.fastUri = k, $t.exports;
}
var yo;
function ba() {
  if (yo) return zt;
  yo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = $a();
  return e.code = 'require("ajv/dist/runtime/uri").default', zt.default = e, zt;
}
var vo;
function wa() {
  return vo || (vo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Vn();
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
    const r = /* @__PURE__ */ Sr(), i = /* @__PURE__ */ Ln(), o = /* @__PURE__ */ Xi(), s = /* @__PURE__ */ Bn(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ qn(), f = /* @__PURE__ */ Tn(), h = /* @__PURE__ */ oe(), b = ya, y = /* @__PURE__ */ ba(), $ = (D, R) => new RegExp(D, R);
    $.code = "new RegExp";
    const _ = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    }, v = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, p = 200;
    function m(D) {
      var R, q, F, w, x, z, H, U, X, Z, N, j, L, K, W, te, ue, be, he, fe, de, Ve, _e, Kn, Hn;
      const gt = D.strict, Gn = (R = D.code) === null || R === void 0 ? void 0 : R.optimize, Dr = Gn === !0 || Gn === void 0 ? 1 : Gn || 0, qr = (F = (q = D.code) === null || q === void 0 ? void 0 : q.regExp) !== null && F !== void 0 ? F : $, ws = (w = D.uriResolver) !== null && w !== void 0 ? w : y.default;
      return {
        strictSchema: (z = (x = D.strictSchema) !== null && x !== void 0 ? x : gt) !== null && z !== void 0 ? z : !0,
        strictNumbers: (U = (H = D.strictNumbers) !== null && H !== void 0 ? H : gt) !== null && U !== void 0 ? U : !0,
        strictTypes: (Z = (X = D.strictTypes) !== null && X !== void 0 ? X : gt) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (j = (N = D.strictTuples) !== null && N !== void 0 ? N : gt) !== null && j !== void 0 ? j : "log",
        strictRequired: (K = (L = D.strictRequired) !== null && L !== void 0 ? L : gt) !== null && K !== void 0 ? K : !1,
        code: D.code ? { ...D.code, optimize: Dr, regExp: qr } : { optimize: Dr, regExp: qr },
        loopRequired: (W = D.loopRequired) !== null && W !== void 0 ? W : p,
        loopEnum: (te = D.loopEnum) !== null && te !== void 0 ? te : p,
        meta: (ue = D.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (be = D.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (he = D.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (fe = D.schemaId) !== null && fe !== void 0 ? fe : "$id",
        addUsedSchema: (de = D.addUsedSchema) !== null && de !== void 0 ? de : !0,
        validateSchema: (Ve = D.validateSchema) !== null && Ve !== void 0 ? Ve : !0,
        validateFormats: (_e = D.validateFormats) !== null && _e !== void 0 ? _e : !0,
        unicodeRegExp: (Kn = D.unicodeRegExp) !== null && Kn !== void 0 ? Kn : !0,
        int32range: (Hn = D.int32range) !== null && Hn !== void 0 ? Hn : !0,
        uriResolver: ws
      };
    }
    class C {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...m(R) };
        const { es5: q, lines: F } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: S, es5: q, lines: F }), this.logger = P(R.logger);
        const w = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, o.getRules)(), c.call(this, u, R, "NOT SUPPORTED"), c.call(this, v, R, "DEPRECATED", "warn"), this._metaOpts = O.call(this), R.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && E.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), g.call(this), R.validateFormats = w;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: q, schemaId: F } = this.opts;
        let w = b;
        F === "id" && (w = { ...b }, w.id = w.$id, delete w.$id), q && R && this.addMetaSchema(w, w[F], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[q] || R : void 0;
      }
      validate(R, q) {
        let F;
        if (typeof R == "string") {
          if (F = this.getSchema(R), !F)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          F = this.compile(R);
        const w = F(q);
        return "$async" in F || (this.errors = F.errors), w;
      }
      compile(R, q) {
        const F = this._addSchema(R, q);
        return F.validate || this._compileSchemaEnv(F);
      }
      compileAsync(R, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: F } = this.opts;
        return w.call(this, R, q);
        async function w(Z, N) {
          await x.call(this, Z.$schema);
          const j = this._addSchema(Z, N);
          return j.validate || z.call(this, j);
        }
        async function x(Z) {
          Z && !this.getSchema(Z) && await w.call(this, { $ref: Z }, !0);
        }
        async function z(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (N) {
            if (!(N instanceof i.default))
              throw N;
            return H.call(this, N), await U.call(this, N.missingSchema), z.call(this, Z);
          }
        }
        function H({ missingSchema: Z, missingRef: N }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${N} cannot be resolved`);
        }
        async function U(Z) {
          const N = await X.call(this, Z);
          this.refs[Z] || await x.call(this, N.$schema), this.refs[Z] || this.addSchema(N, Z, q);
        }
        async function X(Z) {
          const N = this._loading[Z];
          if (N)
            return N;
          try {
            return await (this._loading[Z] = F(Z));
          } finally {
            delete this._loading[Z];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, q, F, w = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const z of R)
            this.addSchema(z, void 0, F, w);
          return this;
        }
        let x;
        if (typeof R == "object") {
          const { schemaId: z } = this.opts;
          if (x = R[z], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${z} must be string`);
        }
        return q = (0, l.normalizeId)(q || x), this._checkUnique(q), this.schemas[q] = this._addSchema(R, F, q, w, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, q, F = this.opts.validateSchema) {
        return this.addSchema(R, q, !0, F), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, q) {
        if (typeof R == "boolean")
          return !0;
        let F;
        if (F = R.$schema, F !== void 0 && typeof F != "string")
          throw new Error("$schema must be a string");
        if (F = F || this.opts.defaultMeta || this.defaultMeta(), !F)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const w = this.validate(F, R);
        if (!w && q) {
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
        let q;
        for (; typeof (q = d.call(this, R)) == "string"; )
          R = q;
        if (q === void 0) {
          const { schemaId: F } = this.opts, w = new s.SchemaEnv({ schema: {}, schemaId: F });
          if (q = s.resolveSchema.call(this, w, R), !q)
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
            const q = d.call(this, R);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const q = R;
            this._cache.delete(q);
            let F = R[this.opts.schemaId];
            return F && (F = (0, l.normalizeId)(F), delete this.schemas[F], delete this.refs[F]), this;
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
        let F;
        if (typeof R == "string")
          F = R, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = F);
        else if (typeof R == "object" && q === void 0) {
          if (q = R, F = q.keyword, Array.isArray(F) && !F.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (G.call(this, F, q), !q)
          return (0, h.eachItem)(F, (x) => Y.call(this, x)), this;
        ie.call(this, q);
        const w = {
          ...q,
          type: (0, f.getJSONTypes)(q.type),
          schemaType: (0, f.getJSONTypes)(q.schemaType)
        };
        return (0, h.eachItem)(F, w.type.length === 0 ? (x) => Y.call(this, x, w) : (x) => w.type.forEach((z) => Y.call(this, x, w, z))), this;
      }
      getKeyword(R) {
        const q = this.RULES.all[R];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: q } = this;
        delete q.keywords[R], delete q.all[R];
        for (const F of q.rules) {
          const w = F.rules.findIndex((x) => x.keyword === R);
          w >= 0 && F.rules.splice(w, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[R] = q, this;
      }
      errorsText(R = this.errors, { separator: q = ", ", dataVar: F = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((w) => `${F}${w.instancePath} ${w.message}`).reduce((w, x) => w + q + x);
      }
      $dataMetaSchema(R, q) {
        const F = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const w of q) {
          const x = w.split("/").slice(1);
          let z = R;
          for (const H of x)
            z = z[H];
          for (const H in F) {
            const U = F[H];
            if (typeof U != "object")
              continue;
            const { $data: X } = U.definition, Z = z[H];
            X && Z && (z[H] = Q(Z));
          }
        }
        return R;
      }
      _removeAllSchemas(R, q) {
        for (const F in R) {
          const w = R[F];
          (!q || q.test(F)) && (typeof w == "string" ? delete R[F] : w && !w.meta && (this._cache.delete(w.schema), delete R[F]));
        }
      }
      _addSchema(R, q, F, w = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let z;
        const { schemaId: H } = this.opts;
        if (typeof R == "object")
          z = R[H];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let U = this._cache.get(R);
        if (U !== void 0)
          return U;
        F = (0, l.normalizeId)(z || F);
        const X = l.getSchemaRefs.call(this, R, F);
        return U = new s.SchemaEnv({ schema: R, schemaId: H, meta: q, baseId: F, localRefs: X }), this._cache.set(U.schema, U), x && !F.startsWith("#") && (F && this._checkUnique(F), this.refs[F] = U), w && this.validateSchema(R, !0), U;
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
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, R);
        } finally {
          this.opts = q;
        }
      }
    }
    C.ValidationError = r.default, C.MissingRefError = i.default, e.default = C;
    function c(D, R, q, F = "error") {
      for (const w in D) {
        const x = w;
        x in R && this.logger[F](`${q}: option ${w}. ${D[x]}`);
      }
    }
    function d(D) {
      return D = (0, l.normalizeId)(D), this.schemas[D] || this.refs[D];
    }
    function g() {
      const D = this.opts.schemas;
      if (D)
        if (Array.isArray(D))
          this.addSchema(D);
        else
          for (const R in D)
            this.addSchema(D[R], R);
    }
    function k() {
      for (const D in this.opts.formats) {
        const R = this.opts.formats[D];
        R && this.addFormat(D, R);
      }
    }
    function E(D) {
      if (Array.isArray(D)) {
        this.addVocabulary(D);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in D) {
        const q = D[R];
        q.keyword || (q.keyword = R), this.addKeyword(q);
      }
    }
    function O() {
      const D = { ...this.opts };
      for (const R of _)
        delete D[R];
      return D;
    }
    const A = { log() {
    }, warn() {
    }, error() {
    } };
    function P(D) {
      if (D === !1)
        return A;
      if (D === void 0)
        return console;
      if (D.log && D.warn && D.error)
        return D;
      throw new Error("logger must implement log, warn and error methods");
    }
    const I = /^[a-z_$][a-z0-9_$:-]*$/i;
    function G(D, R) {
      const { RULES: q } = this;
      if ((0, h.eachItem)(D, (F) => {
        if (q.keywords[F])
          throw new Error(`Keyword ${F} is already defined`);
        if (!I.test(F))
          throw new Error(`Keyword ${F} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Y(D, R, q) {
      var F;
      const w = R?.post;
      if (q && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let z = w ? x.post : x.rules.find(({ type: U }) => U === q);
      if (z || (z = { type: q, rules: [] }, x.rules.push(z)), x.keywords[D] = !0, !R)
        return;
      const H = {
        keyword: D,
        definition: {
          ...R,
          type: (0, f.getJSONTypes)(R.type),
          schemaType: (0, f.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? ee.call(this, z, H, R.before) : z.rules.push(H), x.all[D] = H, (F = R.implements) === null || F === void 0 || F.forEach((U) => this.addKeyword(U));
    }
    function ee(D, R, q) {
      const F = D.rules.findIndex((w) => w.keyword === q);
      F >= 0 ? D.rules.splice(F, 0, R) : (D.rules.push(R), this.logger.warn(`rule ${q} is not defined`));
    }
    function ie(D) {
      let { metaSchema: R } = D;
      R !== void 0 && (D.$data && this.opts.$data && (R = Q(R)), D.validateSchema = this.compile(R, !0));
    }
    const B = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Q(D) {
      return { anyOf: [D, B] };
    }
  })(Wn)), Wn;
}
var It = {}, Dt = {}, qt = {}, $o;
function _a() {
  if ($o) return qt;
  $o = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return qt.default = e, qt;
}
var Le = {}, bo;
function Cr() {
  if (bo) return Le;
  bo = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.callRef = Le.getValidate = void 0;
  const e = /* @__PURE__ */ Ln(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ ne(), r = /* @__PURE__ */ Ne(), i = /* @__PURE__ */ Bn(), o = /* @__PURE__ */ oe(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(f) {
      const { gen: h, schema: b, it: y } = f, { baseId: $, schemaEnv: _, validateName: S, opts: u, self: v } = y, { root: p } = _;
      if ((b === "#" || b === "#/") && $ === p.baseId)
        return C();
      const m = i.resolveRef.call(v, p, $, b);
      if (m === void 0)
        throw new e.default(y.opts.uriResolver, $, b);
      if (m instanceof i.SchemaEnv)
        return c(m);
      return d(m);
      function C() {
        if (_ === p)
          return l(f, S, _, _.$async);
        const g = h.scopeValue("root", { ref: p });
        return l(f, (0, n._)`${g}.validate`, p, p.$async);
      }
      function c(g) {
        const k = a(f, g);
        l(f, k, g, g.$async);
      }
      function d(g) {
        const k = h.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, n.stringify)(g) } : { ref: g }), E = h.name("valid"), O = f.subschema({
          schema: g,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: b
        }, E);
        f.mergeEvaluated(O), f.ok(E);
      }
    }
  };
  function a(f, h) {
    const { gen: b } = f;
    return h.validate ? b.scopeValue("validate", { ref: h.validate }) : (0, n._)`${b.scopeValue("wrapper", { ref: h })}.validate`;
  }
  Le.getValidate = a;
  function l(f, h, b, y) {
    const { gen: $, it: _ } = f, { allErrors: S, schemaEnv: u, opts: v } = _, p = v.passContext ? r.default.this : n.nil;
    y ? m() : C();
    function m() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const g = $.let("valid");
      $.try(() => {
        $.code((0, n._)`await ${(0, t.callValidateCode)(f, h, p)}`), d(h), S || $.assign(g, !0);
      }, (k) => {
        $.if((0, n._)`!(${k} instanceof ${_.ValidationError})`, () => $.throw(k)), c(k), S || $.assign(g, !1);
      }), f.ok(g);
    }
    function C() {
      f.result((0, t.callValidateCode)(f, h, p), () => d(h), () => c(h));
    }
    function c(g) {
      const k = (0, n._)`${g}.errors`;
      $.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), $.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function d(g) {
      var k;
      if (!_.opts.unevaluated)
        return;
      const E = (k = b?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (_.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && (_.props = o.mergeEvaluated.props($, E.props, _.props));
        else {
          const O = $.var("props", (0, n._)`${g}.evaluated.props`);
          _.props = o.mergeEvaluated.props($, O, _.props, n.Name);
        }
      if (_.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && (_.items = o.mergeEvaluated.items($, E.items, _.items));
        else {
          const O = $.var("items", (0, n._)`${g}.evaluated.items`);
          _.items = o.mergeEvaluated.items($, O, _.items, n.Name);
        }
    }
  }
  return Le.callRef = l, Le.default = s, Le;
}
var wo;
function Sa() {
  if (wo) return Dt;
  wo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _a(), t = /* @__PURE__ */ Cr(), n = [
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
var Vt = {}, Lt = {}, _o;
function Ca() {
  if (_o) return Lt;
  _o = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
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
      const { keyword: s, data: a, schemaCode: l } = o;
      o.fail$data((0, e._)`${a} ${n[s].fail} ${l} || isNaN(${a})`);
    }
  };
  return Lt.default = i, Lt;
}
var Bt = {}, So;
function ka() {
  if (So) return Bt;
  So = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
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
      const { gen: i, data: o, schemaCode: s, it: a } = r, l = a.opts.multipleOfPrecision, f = i.let("res"), h = l ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${l}` : (0, e._)`${f} !== parseInt(${f})`;
      r.fail$data((0, e._)`(${s} === 0 || (${f} = ${o}/${s}, ${h}))`);
    }
  };
  return Bt.default = n, Bt;
}
var Ut = {}, Kt = {}, Co;
function Ea() {
  if (Co) return Kt;
  Co = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return Kt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Kt;
}
var ko;
function xa() {
  if (ko) return Ut;
  ko = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ea(), i = {
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
      const { keyword: s, data: a, schemaCode: l, it: f } = o, h = s === "maxLength" ? e.operators.GT : e.operators.LT, b = f.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${b} ${h} ${l}`);
    }
  };
  return Ut.default = i, Ut;
}
var Ht = {}, Eo;
function Pa() {
  if (Eo) return Ht;
  Eo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ne(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: f, schemaCode: h, it: b } = o, y = b.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: $ } = b.opts.code, _ = $.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, $), S = s.let("valid");
        s.try(() => s.assign(S, (0, n._)`${_}(${h}, ${y}).test(${a})`), () => s.assign(S, !1)), o.fail$data((0, n._)`!${S}`);
      } else {
        const $ = (0, e.usePattern)(o, f);
        o.fail$data((0, n._)`!${$}.test(${a})`);
      }
    }
  };
  return Ht.default = i, Ht;
}
var Gt = {}, xo;
function Aa() {
  if (xo) return Gt;
  xo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
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
  return Gt.default = n, Gt;
}
var Wt = {}, Po;
function Ra() {
  if (Po) return Wt;
  Po = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: l, data: f, $data: h, it: b } = o, { opts: y } = b;
      if (!h && a.length === 0)
        return;
      const $ = a.length >= y.loopRequired;
      if (b.allErrors ? _() : S(), y.strictRequired) {
        const p = o.parentSchema.properties, { definedProperties: m } = o.it;
        for (const C of a)
          if (p?.[C] === void 0 && !m.has(C)) {
            const c = b.schemaEnv.baseId + b.errSchemaPath, d = `required property "${C}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(b, d, b.opts.strictRequired);
          }
      }
      function _() {
        if ($ || h)
          o.block$data(t.nil, u);
        else
          for (const p of a)
            (0, e.checkReportMissingProp)(o, p);
      }
      function S() {
        const p = s.let("missing");
        if ($ || h) {
          const m = s.let("valid", !0);
          o.block$data(m, () => v(p, m)), o.ok(m);
        } else
          s.if((0, e.checkMissingProp)(o, a, p)), (0, e.reportMissingProp)(o, p), s.else();
      }
      function u() {
        s.forOf("prop", l, (p) => {
          o.setParams({ missingProperty: p }), s.if((0, e.noPropertyInData)(s, f, p, y.ownProperties), () => o.error());
        });
      }
      function v(p, m) {
        o.setParams({ missingProperty: p }), s.forOf(p, l, () => {
          s.assign(m, (0, e.propertyInData)(s, f, p, y.ownProperties)), s.if((0, t.not)(m), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Wt.default = i, Wt;
}
var Jt = {}, Ao;
function Na() {
  if (Ao) return Jt;
  Ao = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
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
  return Jt.default = n, Jt;
}
var Yt = {}, Xt = {}, Ro;
function kr() {
  if (Ro) return Xt;
  Ro = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = Qi();
  return e.code = 'require("ajv/dist/runtime/equal").default', Xt.default = e, Xt;
}
var No;
function Ma() {
  if (No) return Yt;
  No = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ kr(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: l, $data: f, schema: h, parentSchema: b, schemaCode: y, it: $ } = s;
      if (!f && !h)
        return;
      const _ = a.let("valid"), S = b.items ? (0, e.getSchemaTypes)(b.items) : [];
      s.block$data(_, u, (0, t._)`${y} === false`), s.ok(_);
      function u() {
        const C = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        s.setParams({ i: C, j: c }), a.assign(_, !0), a.if((0, t._)`${C} > 1`, () => (v() ? p : m)(C, c));
      }
      function v() {
        return S.length > 0 && !S.some((C) => C === "object" || C === "array");
      }
      function p(C, c) {
        const d = a.name("item"), g = (0, e.checkDataTypes)(S, d, $.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${C}--;`, () => {
          a.let(d, (0, t._)`${l}[${C}]`), a.if(g, (0, t._)`continue`), S.length > 1 && a.if((0, t._)`typeof ${d} == "string"`, (0, t._)`${d} += "_"`), a.if((0, t._)`typeof ${k}[${d}] == "number"`, () => {
            a.assign(c, (0, t._)`${k}[${d}]`), s.error(), a.assign(_, !1).break();
          }).code((0, t._)`${k}[${d}] = ${C}`);
        });
      }
      function m(C, c) {
        const d = (0, n.useFunc)(a, r.default), g = a.name("outer");
        a.label(g).for((0, t._)`;${C}--;`, () => a.for((0, t._)`${c} = ${C}; ${c}--;`, () => a.if((0, t._)`${d}(${l}[${C}], ${l}[${c}])`, () => {
          s.error(), a.assign(_, !1).break(g);
        })));
      }
    }
  };
  return Yt.default = o, Yt;
}
var Zt = {}, Mo;
function Fa() {
  if (Mo) return Zt;
  Mo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ kr(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schemaCode: f, schema: h } = o;
      l || h && typeof h == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${f})`) : o.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return Zt.default = i, Zt;
}
var Qt = {}, Fo;
function Oa() {
  if (Fo) return Qt;
  Fo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ kr(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: f, schemaCode: h, it: b } = o;
      if (!l && f.length === 0)
        throw new Error("enum must have non-empty array");
      const y = f.length >= b.opts.loopEnum;
      let $;
      const _ = () => $ ?? ($ = (0, t.useFunc)(s, n.default));
      let S;
      if (y || l)
        S = s.let("valid"), o.block$data(S, u);
      else {
        if (!Array.isArray(f))
          throw new Error("ajv implementation error");
        const p = s.const("vSchema", h);
        S = (0, e.or)(...f.map((m, C) => v(p, C)));
      }
      o.pass(S);
      function u() {
        s.assign(S, !1), s.forOf("v", h, (p) => s.if((0, e._)`${_()}(${a}, ${p})`, () => s.assign(S, !0).break()));
      }
      function v(p, m) {
        const C = f[m];
        return typeof C == "object" && C !== null ? (0, e._)`${_()}(${a}, ${p}[${m}])` : (0, e._)`${a} === ${C}`;
      }
    }
  };
  return Qt.default = i, Qt;
}
var Oo;
function Ta() {
  if (Oo) return Vt;
  Oo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ca(), t = /* @__PURE__ */ ka(), n = /* @__PURE__ */ xa(), r = /* @__PURE__ */ Pa(), i = /* @__PURE__ */ Aa(), o = /* @__PURE__ */ Ra(), s = /* @__PURE__ */ Na(), a = /* @__PURE__ */ Ma(), l = /* @__PURE__ */ Fa(), f = /* @__PURE__ */ Oa(), h = [
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
    l.default,
    f.default
  ];
  return Vt.default = h, Vt;
}
var en = {}, tt = {}, To;
function ts() {
  if (To) return tt;
  To = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.validateAdditionalItems = void 0;
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
      const { parentSchema: s, it: a } = o, { items: l } = s;
      if (!Array.isArray(l)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      i(o, l);
    }
  };
  function i(o, s) {
    const { gen: a, schema: l, data: f, keyword: h, it: b } = o;
    b.items = !0;
    const y = a.const("len", (0, e._)`${f}.length`);
    if (l === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${y} <= ${s.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(b, l)) {
      const _ = a.var("valid", (0, e._)`${y} <= ${s.length}`);
      a.if((0, e.not)(_), () => $(_)), o.ok(_);
    }
    function $(_) {
      a.forRange("i", s.length, y, (S) => {
        o.subschema({ keyword: h, dataProp: S, dataPropType: t.Type.Num }, _), b.allErrors || a.if((0, e.not)(_), () => a.break());
      });
    }
  }
  return tt.validateAdditionalItems = i, tt.default = r, tt;
}
var tn = {}, nt = {}, jo;
function ns() {
  if (jo) return nt;
  jo = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.validateTuple = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Me(), r = {
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
    const { gen: l, parentSchema: f, data: h, keyword: b, it: y } = o;
    S(f), y.opts.unevaluated && a.length && y.items !== !0 && (y.items = t.mergeEvaluated.items(l, a.length, y.items));
    const $ = l.name("valid"), _ = l.const("len", (0, e._)`${h}.length`);
    a.forEach((u, v) => {
      (0, t.alwaysValidSchema)(y, u) || (l.if((0, e._)`${_} > ${v}`, () => o.subschema({
        keyword: b,
        schemaProp: v,
        dataProp: v
      }, $)), o.ok($));
    });
    function S(u) {
      const { opts: v, errSchemaPath: p } = y, m = a.length, C = m === u.minItems && (m === u.maxItems || u[s] === !1);
      if (v.strictTuples && !C) {
        const c = `"${b}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${p}"`;
        (0, t.checkStrictMode)(y, c, v.strictTuples);
      }
    }
  }
  return nt.validateTuple = i, nt.default = r, nt;
}
var zo;
function ja() {
  if (zo) return tn;
  zo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ns(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return tn.default = t, tn;
}
var nn = {}, Io;
function za() {
  if (Io) return nn;
  Io = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ ts(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: l, it: f } = s, { prefixItems: h } = l;
      f.items = !0, !(0, t.alwaysValidSchema)(f, a) && (h ? (0, r.validateAdditionalItems)(s, h) : s.ok((0, n.validateArray)(s)));
    }
  };
  return nn.default = o, nn;
}
var rn = {}, Do;
function Ia() {
  if (Do) return rn;
  Do = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
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
      const { gen: o, schema: s, parentSchema: a, data: l, it: f } = i;
      let h, b;
      const { minContains: y, maxContains: $ } = a;
      f.opts.next ? (h = y === void 0 ? 1 : y, b = $) : h = 1;
      const _ = o.const("len", (0, e._)`${l}.length`);
      if (i.setParams({ min: h, max: b }), b === void 0 && h === 0) {
        (0, t.checkStrictMode)(f, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (b !== void 0 && h > b) {
        (0, t.checkStrictMode)(f, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(f, s)) {
        let m = (0, e._)`${_} >= ${h}`;
        b !== void 0 && (m = (0, e._)`${m} && ${_} <= ${b}`), i.pass(m);
        return;
      }
      f.items = !0;
      const S = o.name("valid");
      b === void 0 && h === 1 ? v(S, () => o.if(S, () => o.break())) : h === 0 ? (o.let(S, !0), b !== void 0 && o.if((0, e._)`${l}.length > 0`, u)) : (o.let(S, !1), u()), i.result(S, () => i.reset());
      function u() {
        const m = o.name("_valid"), C = o.let("count", 0);
        v(m, () => o.if(m, () => p(C)));
      }
      function v(m, C) {
        o.forRange("i", 0, _, (c) => {
          i.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), C();
        });
      }
      function p(m) {
        o.code((0, e._)`${m}++`), b === void 0 ? o.if((0, e._)`${m} >= ${h}`, () => o.assign(S, !0).break()) : (o.if((0, e._)`${m} > ${b}`, () => o.assign(S, !1).break()), h === 1 ? o.assign(S, !0) : o.if((0, e._)`${m} >= ${h}`, () => o.assign(S, !0)));
      }
    }
  };
  return rn.default = r, rn;
}
var rr = {}, qo;
function Er() {
  return qo || (qo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Me();
    e.error = {
      message: ({ params: { property: l, depsCount: f, deps: h } }) => {
        const b = f === 1 ? "property" : "properties";
        return (0, t.str)`must have ${b} ${h} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: f, deps: h, missingProperty: b } }) => (0, t._)`{property: ${l},
    missingProperty: ${b},
    depsCount: ${f},
    deps: ${h}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [f, h] = o(l);
        s(l, f), a(l, h);
      }
    };
    function o({ schema: l }) {
      const f = {}, h = {};
      for (const b in l) {
        if (b === "__proto__")
          continue;
        const y = Array.isArray(l[b]) ? f : h;
        y[b] = l[b];
      }
      return [f, h];
    }
    function s(l, f = l.schema) {
      const { gen: h, data: b, it: y } = l;
      if (Object.keys(f).length === 0)
        return;
      const $ = h.let("missing");
      for (const _ in f) {
        const S = f[_];
        if (S.length === 0)
          continue;
        const u = (0, r.propertyInData)(h, b, _, y.opts.ownProperties);
        l.setParams({
          property: _,
          depsCount: S.length,
          deps: S.join(", ")
        }), y.allErrors ? h.if(u, () => {
          for (const v of S)
            (0, r.checkReportMissingProp)(l, v);
        }) : (h.if((0, t._)`${u} && (${(0, r.checkMissingProp)(l, S, $)})`), (0, r.reportMissingProp)(l, $), h.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(l, f = l.schema) {
      const { gen: h, data: b, keyword: y, it: $ } = l, _ = h.name("valid");
      for (const S in f)
        (0, n.alwaysValidSchema)($, f[S]) || (h.if(
          (0, r.propertyInData)(h, b, S, $.opts.ownProperties),
          () => {
            const u = l.subschema({ keyword: y, schemaProp: S }, _);
            l.mergeValidEvaluated(u, _);
          },
          () => h.var(_, !0)
          // TODO var
        ), l.ok(_));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(rr)), rr;
}
var on = {}, Vo;
function Da() {
  if (Vo) return on;
  Vo = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: i }) => (0, e._)`{propertyName: ${i.propertyName}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: l } = i;
      if ((0, t.alwaysValidSchema)(l, s))
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
          i.error(!0), l.allErrors || o.break();
        });
      }), i.ok(f);
    }
  };
  return on.default = r, on;
}
var sn = {}, Lo;
function rs() {
  if (Lo) return sn;
  Lo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ oe(), o = {
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
      const { gen: a, schema: l, parentSchema: f, data: h, errsCount: b, it: y } = s;
      if (!b)
        throw new Error("ajv implementation error");
      const { allErrors: $, opts: _ } = y;
      if (y.props = !0, _.removeAdditional !== "all" && (0, r.alwaysValidSchema)(y, l))
        return;
      const S = (0, e.allSchemaProperties)(f.properties), u = (0, e.allSchemaProperties)(f.patternProperties);
      v(), s.ok((0, t._)`${b} === ${n.default.errors}`);
      function v() {
        a.forIn("key", h, (d) => {
          !S.length && !u.length ? C(d) : a.if(p(d), () => C(d));
        });
      }
      function p(d) {
        let g;
        if (S.length > 8) {
          const k = (0, r.schemaRefOrVal)(y, f.properties, "properties");
          g = (0, e.isOwnProperty)(a, k, d);
        } else S.length ? g = (0, t.or)(...S.map((k) => (0, t._)`${d} === ${k}`)) : g = t.nil;
        return u.length && (g = (0, t.or)(g, ...u.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${d})`))), (0, t.not)(g);
      }
      function m(d) {
        a.code((0, t._)`delete ${h}[${d}]`);
      }
      function C(d) {
        if (_.removeAdditional === "all" || _.removeAdditional && l === !1) {
          m(d);
          return;
        }
        if (l === !1) {
          s.setParams({ additionalProperty: d }), s.error(), $ || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)(y, l)) {
          const g = a.name("valid");
          _.removeAdditional === "failing" ? (c(d, g, !1), a.if((0, t.not)(g), () => {
            s.reset(), m(d);
          })) : (c(d, g), $ || a.if((0, t.not)(g), () => a.break()));
        }
      }
      function c(d, g, k) {
        const E = {
          keyword: "additionalProperties",
          dataProp: d,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(E, g);
      }
    }
  };
  return sn.default = o, sn;
}
var an = {}, Bo;
function qa() {
  if (Bo) return an;
  Bo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vn(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ rs(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: l, data: f, it: h } = o;
      h.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(h, r.default, "additionalProperties"));
      const b = (0, t.allSchemaProperties)(a);
      for (const u of b)
        h.definedProperties.add(u);
      h.opts.unevaluated && b.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(s, (0, n.toHash)(b), h.props));
      const y = b.filter((u) => !(0, n.alwaysValidSchema)(h, a[u]));
      if (y.length === 0)
        return;
      const $ = s.name("valid");
      for (const u of y)
        _(u) ? S(u) : (s.if((0, t.propertyInData)(s, f, u, h.opts.ownProperties)), S(u), h.allErrors || s.else().var($, !0), s.endIf()), o.it.definedProperties.add(u), o.ok($);
      function _(u) {
        return h.opts.useDefaults && !h.compositeRule && a[u].default !== void 0;
      }
      function S(u) {
        o.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, $);
      }
    }
  };
  return an.default = i, an;
}
var cn = {}, Uo;
function Va() {
  if (Uo) return cn;
  Uo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ oe(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: l, parentSchema: f, it: h } = o, { opts: b } = h, y = (0, e.allSchemaProperties)(a), $ = y.filter((C) => (0, n.alwaysValidSchema)(h, a[C]));
      if (y.length === 0 || $.length === y.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const _ = b.strictSchema && !b.allowMatchingProperties && f.properties, S = s.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(s, h.props));
      const { props: u } = h;
      v();
      function v() {
        for (const C of y)
          _ && p(C), h.allErrors ? m(C) : (s.var(S, !0), m(C), s.if(S));
      }
      function p(C) {
        for (const c in _)
          new RegExp(C).test(c) && (0, n.checkStrictMode)(h, `property ${c} matches pattern ${C} (use allowMatchingProperties)`);
      }
      function m(C) {
        s.forIn("key", l, (c) => {
          s.if((0, t._)`${(0, e.usePattern)(o, C)}.test(${c})`, () => {
            const d = $.includes(C);
            d || o.subschema({
              keyword: "patternProperties",
              schemaProp: C,
              dataProp: c,
              dataPropType: r.Type.Str
            }, S), h.opts.unevaluated && u !== !0 ? s.assign((0, t._)`${u}[${c}]`, !0) : !d && !h.allErrors && s.if((0, t.not)(S), () => s.break());
          });
        });
      }
    }
  };
  return cn.default = i, cn;
}
var ln = {}, Ko;
function La() {
  if (Ko) return ln;
  Ko = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
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
  return ln.default = t, ln;
}
var dn = {}, Ho;
function Ba() {
  if (Ho) return dn;
  Ho = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Me()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return dn.default = t, dn;
}
var un = {}, Go;
function Ua() {
  if (Go) return un;
  Go = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: i }) => (0, e._)`{passingSchemas: ${i.passing}}`
    },
    code(i) {
      const { gen: o, schema: s, parentSchema: a, it: l } = i;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (l.opts.discriminator && a.discriminator)
        return;
      const f = s, h = o.let("valid", !1), b = o.let("passing", null), y = o.name("_valid");
      i.setParams({ passing: b }), o.block($), i.result(h, () => i.reset(), () => i.error(!0));
      function $() {
        f.forEach((_, S) => {
          let u;
          (0, t.alwaysValidSchema)(l, _) ? o.var(y, !0) : u = i.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, y), S > 0 && o.if((0, e._)`${y} && ${h}`).assign(h, !1).assign(b, (0, e._)`[${b}, ${S}]`).else(), o.if(y, () => {
            o.assign(h, !0), o.assign(b, S), u && i.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return un.default = r, un;
}
var fn = {}, Wo;
function Ka() {
  if (Wo) return fn;
  Wo = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: i, it: o } = n;
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      i.forEach((a, l) => {
        if ((0, e.alwaysValidSchema)(o, a))
          return;
        const f = n.subschema({ keyword: "allOf", schemaProp: l }, s);
        n.ok(s), n.mergeEvaluated(f);
      });
    }
  };
  return fn.default = t, fn;
}
var pn = {}, Jo;
function Ha() {
  if (Jo) return pn;
  Jo = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: s, parentSchema: a, it: l } = o;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
      const f = i(l, "then"), h = i(l, "else");
      if (!f && !h)
        return;
      const b = s.let("valid", !0), y = s.name("_valid");
      if ($(), o.reset(), f && h) {
        const S = s.let("ifClause");
        o.setParams({ ifClause: S }), s.if(y, _("then", S), _("else", S));
      } else f ? s.if(y, _("then")) : s.if((0, e.not)(y), _("else"));
      o.pass(b, () => o.error(!0));
      function $() {
        const S = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, y);
        o.mergeEvaluated(S);
      }
      function _(S, u) {
        return () => {
          const v = o.subschema({ keyword: S }, y);
          s.assign(b, y), o.mergeValidEvaluated(v, b), u ? s.assign(u, (0, e._)`${S}`) : o.setParams({ ifClause: S });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return pn.default = r, pn;
}
var hn = {}, Yo;
function Ga() {
  if (Yo) return hn;
  Yo = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return hn.default = t, hn;
}
var Xo;
function Wa() {
  if (Xo) return en;
  Xo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ts(), t = /* @__PURE__ */ ja(), n = /* @__PURE__ */ ns(), r = /* @__PURE__ */ za(), i = /* @__PURE__ */ Ia(), o = /* @__PURE__ */ Er(), s = /* @__PURE__ */ Da(), a = /* @__PURE__ */ rs(), l = /* @__PURE__ */ qa(), f = /* @__PURE__ */ Va(), h = /* @__PURE__ */ La(), b = /* @__PURE__ */ Ba(), y = /* @__PURE__ */ Ua(), $ = /* @__PURE__ */ Ka(), _ = /* @__PURE__ */ Ha(), S = /* @__PURE__ */ Ga();
  function u(v = !1) {
    const p = [
      // any
      h.default,
      b.default,
      y.default,
      $.default,
      _.default,
      S.default,
      // object
      s.default,
      a.default,
      o.default,
      l.default,
      f.default
    ];
    return v ? p.push(t.default, r.default) : p.push(e.default, n.default), p.push(i.default), p;
  }
  return en.default = u, en;
}
var mn = {}, rt = {}, Zo;
function os() {
  if (Zo) return rt;
  Zo = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Bn(), r = /* @__PURE__ */ Cr(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, l) {
    const { gen: f, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[l] = !0;
    const b = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, y = h.errSchemaPath === "#" ? h.validateName : s(a);
    f.if((0, e._)`!${b}`, () => f.assign(b, y));
  }
  rt.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: l, schema: f, self: h } = a.it, { root: b, baseId: y, localRefs: $, meta: _ } = l.root, { schemaId: S } = h.opts, u = new n.SchemaEnv({ schema: f, schemaId: S, root: b, baseId: y, localRefs: $, meta: _ });
    return n.compileSchema.call(h, u), (0, r.getValidate)(a, u);
  }
  return rt.default = i, rt;
}
var ot = {}, Qo;
function is() {
  if (Qo) return ot;
  Qo = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.dynamicRef = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Cr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: l, it: f } = o;
    if (s[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const h = s.slice(1);
    if (f.allErrors)
      b();
    else {
      const $ = a.let("valid", !1);
      b($), o.ok($);
    }
    function b($) {
      if (f.schemaEnv.root.dynamicAnchors[h]) {
        const _ = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        a.if(_, y(_, $), y(f.validateName, $));
      } else
        y(f.validateName, $)();
    }
    function y($, _) {
      return _ ? () => a.block(() => {
        (0, n.callRef)(o, $), a.let(_, !0);
      }) : () => (0, n.callRef)(o, $);
    }
  }
  return ot.dynamicRef = i, ot.default = r, ot;
}
var gn = {}, ei;
function Ja() {
  if (ei) return gn;
  ei = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ os(), t = /* @__PURE__ */ oe(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return gn.default = n, gn;
}
var yn = {}, ti;
function Ya() {
  if (ti) return yn;
  ti = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ is(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return yn.default = t, yn;
}
var ni;
function Xa() {
  if (ni) return mn;
  ni = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ os(), t = /* @__PURE__ */ is(), n = /* @__PURE__ */ Ja(), r = /* @__PURE__ */ Ya(), i = [e.default, t.default, n.default, r.default];
  return mn.default = i, mn;
}
var vn = {}, $n = {}, ri;
function Za() {
  if (ri) return $n;
  ri = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Er(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return $n.default = t, $n;
}
var bn = {}, oi;
function Qa() {
  if (oi) return bn;
  oi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Er(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return bn.default = t, bn;
}
var wn = {}, ii;
function ec() {
  if (ii) return wn;
  ii = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return wn.default = t, wn;
}
var si;
function tc() {
  if (si) return vn;
  si = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Za(), t = /* @__PURE__ */ Qa(), n = /* @__PURE__ */ ec(), r = [e.default, t.default, n.default];
  return vn.default = r, vn;
}
var _n = {}, Sn = {}, ai;
function nc() {
  if (ai) return Sn;
  ai = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ne(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: l, errsCount: f, it: h } = o;
      if (!f)
        throw new Error("ajv implementation error");
      const { allErrors: b, props: y } = h;
      y instanceof e.Name ? s.if((0, e._)`${y} !== true`, () => s.forIn("key", l, (u) => s.if(_(y, u), () => $(u)))) : y !== !0 && s.forIn("key", l, (u) => y === void 0 ? $(u) : s.if(S(y, u), () => $(u))), h.props = !0, o.ok((0, e._)`${f} === ${n.default.errors}`);
      function $(u) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: u }), o.error(), b || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, a)) {
          const v = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: u,
            dataPropType: t.Type.Str
          }, v), b || s.if((0, e.not)(v), () => s.break());
        }
      }
      function _(u, v) {
        return (0, e._)`!${u} || !${u}[${v}]`;
      }
      function S(u, v) {
        const p = [];
        for (const m in u)
          u[m] === !0 && p.push((0, e._)`${v} !== ${m}`);
        return (0, e.and)(...p);
      }
    }
  };
  return Sn.default = i, Sn;
}
var Cn = {}, ci;
function rc() {
  if (ci) return Cn;
  ci = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ oe(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: l } = i, f = l.items || 0;
      if (f === !0)
        return;
      const h = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: f }), i.fail((0, e._)`${h} > ${f}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(l, s)) {
        const y = o.var("valid", (0, e._)`${h} <= ${f}`);
        o.if((0, e.not)(y), () => b(y, f)), i.ok(y);
      }
      l.items = !0;
      function b(y, $) {
        o.forRange("i", $, h, (_) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: _, dataPropType: t.Type.Num }, y), l.allErrors || o.if((0, e.not)(y), () => o.break());
        });
      }
    }
  };
  return Cn.default = r, Cn;
}
var li;
function oc() {
  if (li) return _n;
  li = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nc(), t = /* @__PURE__ */ rc(), n = [e.default, t.default];
  return _n.default = n, _n;
}
var kn = {}, En = {}, di;
function ic() {
  if (di) return En;
  di = 1, Object.defineProperty(En, "__esModule", { value: !0 });
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
      const { gen: o, data: s, $data: a, schema: l, schemaCode: f, it: h } = r, { opts: b, errSchemaPath: y, schemaEnv: $, self: _ } = h;
      if (!b.validateFormats)
        return;
      a ? S() : u();
      function S() {
        const v = o.scopeValue("formats", {
          ref: _.formats,
          code: b.code.formats
        }), p = o.const("fDef", (0, e._)`${v}[${f}]`), m = o.let("fType"), C = o.let("format");
        o.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => o.assign(m, (0, e._)`${p}.type || "string"`).assign(C, (0, e._)`${p}.validate`), () => o.assign(m, (0, e._)`"string"`).assign(C, p)), r.fail$data((0, e.or)(c(), d()));
        function c() {
          return b.strictSchema === !1 ? e.nil : (0, e._)`${f} && !${C}`;
        }
        function d() {
          const g = $.$async ? (0, e._)`(${p}.async ? await ${C}(${s}) : ${C}(${s}))` : (0, e._)`${C}(${s})`, k = (0, e._)`(typeof ${C} == "function" ? ${g} : ${C}.test(${s}))`;
          return (0, e._)`${C} && ${C} !== true && ${m} === ${i} && !${k}`;
        }
      }
      function u() {
        const v = _.formats[l];
        if (!v) {
          c();
          return;
        }
        if (v === !0)
          return;
        const [p, m, C] = d(v);
        p === i && r.pass(g());
        function c() {
          if (b.strictSchema === !1) {
            _.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${l}" ignored in schema at path "${y}"`;
          }
        }
        function d(k) {
          const E = k instanceof RegExp ? (0, e.regexpCode)(k) : b.code.formats ? (0, e._)`${b.code.formats}${(0, e.getProperty)(l)}` : void 0, O = o.scopeValue("formats", { key: l, ref: k, code: E });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${O}.validate`] : ["string", k, O];
        }
        function g() {
          if (typeof v == "object" && !(v instanceof RegExp) && v.async) {
            if (!$.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${C}(${s})`;
          }
          return typeof m == "function" ? (0, e._)`${C}(${s})` : (0, e._)`${C}.test(${s})`;
        }
      }
    }
  };
  return En.default = n, En;
}
var ui;
function sc() {
  if (ui) return kn;
  ui = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ ic()).default];
  return kn.default = t, kn;
}
var Ye = {}, fi;
function ac() {
  return fi || (fi = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.contentVocabulary = Ye.metadataVocabulary = void 0, Ye.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ye.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ye;
}
var pi;
function cc() {
  if (pi) return It;
  pi = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sa(), t = /* @__PURE__ */ Ta(), n = /* @__PURE__ */ Wa(), r = /* @__PURE__ */ Xa(), i = /* @__PURE__ */ tc(), o = /* @__PURE__ */ oc(), s = /* @__PURE__ */ sc(), a = /* @__PURE__ */ ac(), l = [
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
  return It.default = l, It;
}
var xn = {}, bt = {}, hi;
function lc() {
  if (hi) return bt;
  hi = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (bt.DiscrError = e = {})), bt;
}
var mi;
function dc() {
  if (mi) return xn;
  mi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ lc(), n = /* @__PURE__ */ Bn(), r = /* @__PURE__ */ Ln(), i = /* @__PURE__ */ oe(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: f } }) => (0, e._)`{error: ${a}, tag: ${f}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: f, schema: h, parentSchema: b, it: y } = a, { oneOf: $ } = b;
      if (!y.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const _ = h.propertyName;
      if (typeof _ != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!$)
        throw new Error("discriminator: requires oneOf keyword");
      const S = l.let("valid", !1), u = l.const("tag", (0, e._)`${f}${(0, e.getProperty)(_)}`);
      l.if((0, e._)`typeof ${u} == "string"`, () => v(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: _ })), a.ok(S);
      function v() {
        const C = m();
        l.if(!1);
        for (const c in C)
          l.elseIf((0, e._)`${u} === ${c}`), l.assign(S, p(C[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: _ }), l.endIf();
      }
      function p(C) {
        const c = l.name("valid"), d = a.subschema({ keyword: "oneOf", schemaProp: C }, c);
        return a.mergeEvaluated(d, e.Name), c;
      }
      function m() {
        var C;
        const c = {}, d = k(b);
        let g = !0;
        for (let A = 0; A < $.length; A++) {
          let P = $[A];
          if (P?.$ref && !(0, i.schemaHasRulesButRef)(P, y.self.RULES)) {
            const G = P.$ref;
            if (P = n.resolveRef.call(y.self, y.schemaEnv.root, y.baseId, G), P instanceof n.SchemaEnv && (P = P.schema), P === void 0)
              throw new r.default(y.opts.uriResolver, y.baseId, G);
          }
          const I = (C = P?.properties) === null || C === void 0 ? void 0 : C[_];
          if (typeof I != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${_}"`);
          g = g && (d || k(P)), E(I, A);
        }
        if (!g)
          throw new Error(`discriminator: "${_}" must be required`);
        return c;
        function k({ required: A }) {
          return Array.isArray(A) && A.includes(_);
        }
        function E(A, P) {
          if (A.const)
            O(A.const, P);
          else if (A.enum)
            for (const I of A.enum)
              O(I, P);
          else
            throw new Error(`discriminator: "properties/${_}" must have "const" or "enum"`);
        }
        function O(A, P) {
          if (typeof A != "string" || A in c)
            throw new Error(`discriminator: "${_}" values must be unique strings`);
          c[A] = P;
        }
      }
    }
  };
  return xn.default = s, xn;
}
var Pn = {};
const uc = "https://json-schema.org/draft/2020-12/schema", fc = "https://json-schema.org/draft/2020-12/schema", pc = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, hc = "meta", mc = "Core and Validation specifications meta-schema", gc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], yc = ["object", "boolean"], vc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", $c = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, bc = {
  $schema: uc,
  $id: fc,
  $vocabulary: pc,
  $dynamicAnchor: hc,
  title: mc,
  allOf: gc,
  type: yc,
  $comment: vc,
  properties: $c
}, wc = "https://json-schema.org/draft/2020-12/schema", _c = "https://json-schema.org/draft/2020-12/meta/applicator", Sc = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Cc = "meta", kc = "Applicator vocabulary meta-schema", Ec = ["object", "boolean"], xc = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Pc = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ac = {
  $schema: wc,
  $id: _c,
  $vocabulary: Sc,
  $dynamicAnchor: Cc,
  title: kc,
  type: Ec,
  properties: xc,
  $defs: Pc
}, Rc = "https://json-schema.org/draft/2020-12/schema", Nc = "https://json-schema.org/draft/2020-12/meta/unevaluated", Mc = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Fc = "meta", Oc = "Unevaluated applicator vocabulary meta-schema", Tc = ["object", "boolean"], jc = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, zc = {
  $schema: Rc,
  $id: Nc,
  $vocabulary: Mc,
  $dynamicAnchor: Fc,
  title: Oc,
  type: Tc,
  properties: jc
}, Ic = "https://json-schema.org/draft/2020-12/schema", Dc = "https://json-schema.org/draft/2020-12/meta/content", qc = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Vc = "meta", Lc = "Content vocabulary meta-schema", Bc = ["object", "boolean"], Uc = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Kc = {
  $schema: Ic,
  $id: Dc,
  $vocabulary: qc,
  $dynamicAnchor: Vc,
  title: Lc,
  type: Bc,
  properties: Uc
}, Hc = "https://json-schema.org/draft/2020-12/schema", Gc = "https://json-schema.org/draft/2020-12/meta/core", Wc = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Jc = "meta", Yc = "Core vocabulary meta-schema", Xc = ["object", "boolean"], Zc = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Qc = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, el = {
  $schema: Hc,
  $id: Gc,
  $vocabulary: Wc,
  $dynamicAnchor: Jc,
  title: Yc,
  type: Xc,
  properties: Zc,
  $defs: Qc
}, tl = "https://json-schema.org/draft/2020-12/schema", nl = "https://json-schema.org/draft/2020-12/meta/format-annotation", rl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ol = "meta", il = "Format vocabulary meta-schema for annotation results", sl = ["object", "boolean"], al = { format: { type: "string" } }, cl = {
  $schema: tl,
  $id: nl,
  $vocabulary: rl,
  $dynamicAnchor: ol,
  title: il,
  type: sl,
  properties: al
}, ll = "https://json-schema.org/draft/2020-12/schema", dl = "https://json-schema.org/draft/2020-12/meta/meta-data", ul = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, fl = "meta", pl = "Meta-data vocabulary meta-schema", hl = ["object", "boolean"], ml = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, gl = {
  $schema: ll,
  $id: dl,
  $vocabulary: ul,
  $dynamicAnchor: fl,
  title: pl,
  type: hl,
  properties: ml
}, yl = "https://json-schema.org/draft/2020-12/schema", vl = "https://json-schema.org/draft/2020-12/meta/validation", $l = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, bl = "meta", wl = "Validation vocabulary meta-schema", _l = ["object", "boolean"], Sl = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Cl = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, kl = {
  $schema: yl,
  $id: vl,
  $vocabulary: $l,
  $dynamicAnchor: bl,
  title: wl,
  type: _l,
  properties: Sl,
  $defs: Cl
};
var gi;
function El() {
  if (gi) return Pn;
  gi = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = bc, t = Ac, n = zc, r = Kc, i = el, o = cl, s = gl, a = kl, l = ["/properties"];
  function f(h) {
    return [
      e,
      t,
      n,
      r,
      i,
      b(this, o),
      s,
      b(this, a)
    ].forEach((y) => this.addMetaSchema(y, void 0, !1)), this;
    function b(y, $) {
      return h ? y.$dataMetaSchema($, l) : $;
    }
  }
  return Pn.default = f, Pn;
}
var yi;
function xl() {
  return yi || (yi = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ wa(), r = /* @__PURE__ */ cc(), i = /* @__PURE__ */ dc(), o = /* @__PURE__ */ El(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor($ = {}) {
        super({
          ...$,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach(($) => this.addVocabulary($)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: $, meta: _ } = this.opts;
        _ && (o.default.call(this, $), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ Vn();
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
    var h = /* @__PURE__ */ Sr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var b = /* @__PURE__ */ Ln();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return b.default;
    } });
  })(Ft, Ft.exports)), Ft.exports;
}
var Pl = /* @__PURE__ */ xl();
const Al = /* @__PURE__ */ ia(Pl), Rl = "https://json-schema.org/draft/2020-12/schema", Nl = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Ml = "gufe-viz payload", Fl = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Ol = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Tl = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), xr = {
  $schema: Rl,
  $id: Nl,
  title: Ml,
  description: Fl,
  oneOf: Ol,
  $defs: Tl
}, $f = [
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
], Pr = xr.$id, Ar = new Al({ allErrors: !0, strict: !1 });
Ar.addSchema(xr, Pr);
const vi = Ar.getSchema(Pr), ss = Object.entries(xr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), bf = ss, Rr = /* @__PURE__ */ new Map();
for (const e of ss) {
  const t = Ar.getSchema(`${Pr}#/$defs/${e}`);
  t && Rr.set(e, t);
}
const hr = { valid: !0, issues: [] };
function mr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function jl(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Rr.get(t) : void 0;
  return n ? n(e) ? hr : { valid: !1, issues: mr(n.errors) } : vi(e) ? hr : { valid: !1, issues: mr(vi.errors) };
}
function wf(e, t) {
  const n = Rr.get(e);
  return n ? n(t) ? hr : { valid: !1, issues: mr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function zl(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Nr = {
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
function as(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Nr[t]) return Il(t);
  const { valid: n, issues: r } = jl(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: zl(r)
  };
}
function Il(e) {
  const t = Object.keys(Nr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function _f(e) {
  return as(e)?.message ?? null;
}
class Dl extends Ae {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Fs("payload", n, this);
    const r = as(n);
    if (r)
      return t.appendChild(ql(r, n)), {};
    const i = n.type, o = Nr[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function ql(e, t) {
  const n = T(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(le(e.message));
  const r = (o, s) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${M.warnBg};color:${M.warnFg};border:1px solid ${M.warnBorder};` : `background:${M.panelBg};color:${M.textMuted2};border:1px solid ${M.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = Vl(t);
  return i && n.appendChild(r(i, !1)), n;
}
function Vl(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${qe(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${qe(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Re("gufe-view", Dl);
const or = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, Mr = {
  threeDmol: `https://unpkg.com/3dmol@${or.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${or.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${or.d3}/+esm`
};
function Fr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function cs(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Ze = null, it = null;
function Or() {
  if (it) return it;
  const e = Fr("threeDmol");
  return e ? (it = e.then((t) => Ze = t || window.$3Dmol), it) : (it = (async () => {
    if (window.$3Dmol) return Ze = window.$3Dmol;
    if (await cs(Mr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ze = window.$3Dmol;
  })(), it);
}
let st = null;
function Tr() {
  if (st) return st;
  const e = Fr("rdkit");
  return e ? (st = e.then((t) => window.RDKit = t), st) : (st = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await cs(Mr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), st);
}
let ir = null;
function ls() {
  if (!ir) {
    const e = Mr.d3;
    ir = Fr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return ir;
}
function jr(e, t) {
  let n = !1, r = !1;
  const i = () => {
    n = !0;
  }, o = () => {
    n = !1;
  }, s = (a) => {
    a.stopPropagation();
    const l = a.ctrlKey || a.metaKey;
    if (n || l) {
      (t.onZoom(a) !== !1 || l) && a.preventDefault();
      return;
    }
    t.hint && !r && (r = !0, Bl(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
const Ll = 1600;
function Bl(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Ll);
}
const Ul = { min: 0.25, max: 12 }, Kl = 150;
function $i(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Kl) - t;
}
function Hl(e, t = Ul) {
  const n = $i(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = $i(e);
    return Number.isFinite(s) && s > 0 ? n / s : i;
  };
  return {
    zoomBy(s) {
      const a = o(), l = Math.min(t.max, Math.max(t.min, a * s)), f = l / a;
      return !Number.isFinite(f) || Math.abs(f - 1) < 1e-9 ? !1 : (i = l, e.zoom(f), e.render(), !0);
    },
    reset() {
      i = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const Gl = 2e-3;
function Wl(e) {
  return Math.exp(-e.deltaY * Gl);
}
function ds(e, t, n = {}) {
  const r = Hl(t, n.bounds), i = jr(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Wl(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function zr(e, t = "Reset view") {
  const n = T("button", Pt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const sr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Jl = [
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
], Sf = "hsv", V = [0, 0, 0], Yl = {
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
}, Xl = "rdkit", Zl = !0, Ql = !0, ed = !0, td = !0, nd = "rdkit", rd = "filled", od = 0.42, id = 1.5, sd = !0, ad = "show", cd = "mono", ld = 0.51, dd = 0.74, ud = 1.6, fd = 1.7, pd = 5, hd = 0.3, md = "#d62828", gd = "#d62828", yd = "#015ab5", vd = !1, $d = "", bd = "#7c3aed", wd = {
  layout: Xl,
  alignPair: Zl,
  atomNumbers: Ql,
  createdDestroyed: ed,
  modified: td,
  style: nd,
  circles: rd,
  circleRadius: od,
  circleStroke: id,
  boundary: sd,
  hydrogens: ad,
  elementColors: cd,
  numScale: ld,
  labelScale: dd,
  bondWidth: ud,
  markWidth: fd,
  haloWidth: pd,
  haloOpacity: hd,
  destroyedColor: md,
  createdColor: gd,
  modifiedColor: yd,
  stereo: vd,
  customSpec: $d,
  customColor: bd
}, _d = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: sr.uniqueAtom,
  createdColor: sr.uniqueAtom,
  modifiedColor: sr.elementChange,
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
}, Sd = ["rdkit", "coordgen", "conformer"], Cd = ["rdkit", "recolor", "halo"], kd = ["outline", "filled", "off"], Ed = ["show", "dim", "hide"], xd = ["cpk", "mono"], Pd = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Ad = /^#[0-9a-fA-F]{6}$/;
function wt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Be(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Pd[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const at = (e, t) => typeof e == "boolean" ? e : t, An = (e, t) => typeof e == "string" && Ad.test(e) ? e : t;
function Rd(e) {
  const t = e && typeof e == "object" ? e : {}, n = _d;
  return {
    version: 1,
    layout: wt(t.layout, Sd, n.layout),
    alignPair: at(t.alignPair, n.alignPair),
    style: wt(t.style, Cd, n.style),
    createdDestroyed: at(t.createdDestroyed, n.createdDestroyed),
    modified: at(t.modified, n.modified),
    destroyedColor: An(t.destroyedColor, n.destroyedColor),
    createdColor: An(t.createdColor, n.createdColor),
    modifiedColor: An(t.modifiedColor, n.modifiedColor),
    boundary: at(t.boundary, n.boundary),
    circles: wt(t.circles, kd, n.circles),
    circleRadius: Be(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Be(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: wt(t.hydrogens, Ed, n.hydrogens),
    elementColors: wt(t.elementColors, xd, n.elementColors),
    atomNumbers: at(t.atomNumbers, n.atomNumbers),
    stereo: at(t.stereo, n.stereo),
    numScale: Be(t.numScale, "numScale", n.numScale),
    labelScale: Be(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Be(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Be(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Be(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Be(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: An(t.customColor, n.customColor)
  };
}
const ut = Rd(wd);
function Nd(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, l = (h) => {
      s !== "right" && t.add(h), s !== "left" && n.add(h);
    }, f = /^(\d+)-(\d+)$/.exec(a);
    if (f) {
      const h = Math.min(+f[1], +f[2]), b = Math.min(Math.max(+f[1], +f[2]), h + r - 1);
      for (let y = h; y <= b; y++) l(y);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function ar(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), l = t.has(s);
    (n ? a || l : a && l) && r.push(i);
  }
  return r;
}
function gr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Md(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Fd(e, t, n) {
  const r = new Set(t.atoms), i = new Set(ar(e, r, !0));
  return {
    deletions: ar(e, r, n),
    changes: ar(e, new Set(t.elements), n).filter((o) => !i.has(o))
  };
}
function Od(e, t, n, r) {
  const i = Fd(t, n, e.boundary), o = [];
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
let ct = null;
function Td(e) {
  if (ct !== null) return ct;
  ct = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (ct = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return ct || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), ct;
}
function jd(e, t) {
  return e.style === "rdkit" ? "rdkit" : Td(t) ? e.style : "rdkit";
}
function zd(e, t, n, r, i, o) {
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
  e.elementColors === "mono" && (s.atomColourPalette = Yl), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, l = {}, f = {};
  for (const $ of n) {
    const _ = gr($.color);
    if (i === "rdkit") for (const u of $.bonds) f[u] = _;
    if (i === "recolor" && e.circles === "off") continue;
    const S = i === "recolor" && e.circles === "filled" ? Md(_, 0.7) : _;
    for (const u of $.atoms)
      a[u] = S, l[u] = e.circleRadius;
  }
  const h = gr(e.customColor);
  for (const $ of r)
    $ < o && (a[$] = h, l[$] = e.circleRadius);
  const b = Object.keys(a).map(Number);
  b.length && (s.atoms = b, s.highlightAtomColors = a, s.highlightAtomRadii = l);
  const y = Object.keys(f).map(Number);
  return y.length && (s.bonds = y, s.highlightBondColors = f), s;
}
function Id(e, t, n, r) {
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
const Dd = "http://www.w3.org/2000/svg";
function us(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Ir(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function fs(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function bi(e, t, n, r, i, o) {
  for (const s of r)
    for (const a of us(e, s)) {
      const l = a.style;
      fs(a) ? l.fill = i : (l.stroke = i, l.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const s of n)
      for (const a of Ir(e, s, !1)) a.style.fill = o;
}
function qd(e, t, n, r) {
  const i = e.ownerDocument;
  if (!i) return;
  const o = i.createElementNS(Dd, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of us(e, a)) {
      if (fs(l)) continue;
      const f = l.cloneNode(!0);
      f.removeAttribute("class"), f.style.fill = "none", f.style.stroke = r, f.style.strokeWidth = `${t.haloWidth}px`, f.style.strokeLinecap = "round", f.style.strokeLinejoin = "round", f.style.strokeOpacity = "1", o.appendChild(f);
    }
  if (!o.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(o, s.nextSibling) : s ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function Vd(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Ir(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Ld(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Ir(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Bd(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Ud(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        bi(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? Vd(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && Ld(e, n, s.atoms, i, s.color);
      } else
        qd(e, n, s.bonds, s.color), bi(e, n, s.atoms, s.bonds, s.color, null);
  Bd(e, t, n);
}
const Un = `
`, yr = "$$$$";
function vr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Un);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let h = 0; h < i; h++) {
    const b = n[4 + h];
    if (b == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(b.substring(0, 10)) || 0,
      parseFloat(b.substring(10, 20)) || 0,
      parseFloat(b.substring(20, 30)) || 0
    ]), a.push(b.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let h = 0; h < (isFinite(o) ? o : 0); h++) {
    const b = n[4 + i + h];
    if (b == null) break;
    const y = parseInt(b.substring(0, 3), 10), $ = parseInt(b.substring(3, 6), 10), _ = parseInt(b.substring(6, 9), 10);
    !isFinite(y) || !isFinite($) || l.push([y - 1, $ - 1, isFinite(_) ? _ : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: s };
}
function Kd(e) {
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
  return r.push("M  END"), r.join(Un);
}
const Hd = (e) => `${Kd(e)}${Un}${yr}`, Gd = (e) => e.indexOf(yr) >= 0 ? e : `${e}${Un}${yr}`;
function ps(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function hs(e, t, n, r, i) {
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
      const l = {
        width: n,
        height: n,
        atoms: [...i.atoms],
        highlightAtomColors: s,
        highlightAtomRadii: a
      };
      return o.get_svg_with_highlights(JSON.stringify(l)) || null;
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
function ms(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const wi = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], _i = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, Si = 400;
class Wd extends Ae {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge;
    t.appendChild(Ge(i || "Unnamed molecule"));
    const a = T("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const l = T("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), f = T("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(l), a.appendChild(T("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`)), a.appendChild(f);
    const h = (E) => T("div", xt, E);
    l.appendChild(h("2D"));
    const b = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${Et.canvas2D};`
    );
    l.appendChild(b), f.appendChild(h("3D"));
    const y = Ji();
    f.appendChild(y.wrap);
    const $ = T(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:${J.body};background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};color:${M.textPrimary};`
    );
    t.appendChild($);
    const _ = r ? ps(r) : null, S = [
      ["Name", i || dt, !1],
      ["SMILES", o || dt, !0],
      ["Charge", s == null ? dt : String(s), !1],
      ["Atoms", _ ? String(_.atoms) : dt, !1],
      ["Bonds", _ ? String(_.bonds) : dt, !1]
    ];
    for (const [E, O, A] of S) {
      const P = T("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      P.appendChild(
        T(
          "span",
          `font-size:${J.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${M.textMuted2};`,
          E
        )
      );
      const I = T(
        "span",
        `user-select:text;cursor:text;color:${M.textPrimary}` + (A ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${J.small};overflow-wrap:anywhere;` : ""),
        O
      );
      I.title = O, P.appendChild(I), $.appendChild(P);
    }
    if (!r || !r.trim())
      return b.appendChild(le("No molecule provided")), y.container.appendChild(le("No molecule provided")), {};
    b.appendChild(le("Loading 2D depiction...")), Tr().then((E) => {
      const O = hs(E, r, Si, ut.layout);
      O ? ms(b, O, Si) : b.replaceChildren(le("Failed to parse molecule", !0));
    }).catch((E) => {
      b.replaceChildren(le(`RDKit failed to load: ${ge(E)}`, !0));
    });
    let u = null, v = null;
    const p = pt(
      "small-molecule.style",
      "stick",
      wi.map((E) => E.id)
    ), m = Ct("small-molecule.spin", !1);
    let C = p.get(), c = m.get();
    const d = T(
      "div",
      Li
    );
    d.appendChild(
      In(
        wi,
        C,
        (E) => {
          C = E, u && (u.setStyle({}, _i[E]), u.render());
        },
        p
      )
    );
    const g = Wi(
      "Spin",
      c,
      (E) => {
        c = E;
        try {
          u?.spin(E ? "y" : !1);
        } catch {
        }
      },
      { title: "Toggle continuous rotation", remember: m }
    );
    g.style.marginLeft = "4px", d.appendChild(g);
    const k = zr(() => v?.reset());
    return k.style.marginLeft = "4px", d.appendChild(k), f.appendChild(d), y.container.appendChild(le("Loading 3D viewer...")), Or().then(() => {
      y.container.replaceChildren(), u = Ze.createViewer(y.container, { backgroundColor: Et.viewer }), u.addModel(Gd(r), "sdf"), u.setStyle({}, _i[C]), u.zoomTo(), u.render(), v = ds(y.container, u);
    }).catch((E) => {
      y.container.replaceChildren(le(`3D render failed: ${ge(E)}`, !0));
    }), {
      onResize() {
        u && (u.resize(), u.render());
      },
      cleanup() {
        if (v?.cleanup(), v = null, !!u) {
          try {
            u.spin(!1);
          } catch {
          }
          try {
            u.clear();
          } catch {
          }
          u = null;
        }
      }
    };
  }
}
Re("gufe-small-molecule", Wd);
const gs = ["HOH", "WAT", "SOL", "TIP3"], Ci = { hetflag: !1 }, Jd = { hetflag: !0 }, Yd = { resn: gs }, Ue = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Xd(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const f = l.slice(0, 6);
    if (f === "ENDMDL") break;
    if (f !== "ATOM  " && f !== "HETATM") continue;
    r++, f === "HETATM" && i++;
    const h = l.slice(17, 20).trim(), b = l.slice(21, 22).trim() || "_", y = l.slice(22, 26).trim(), $ = l.slice(26, 27).trim();
    gs.indexOf(h) !== -1 && o++, t.add(b), n.add(`${b}|${y}${$}|${h}`);
    const _ = parseInt(y, 10);
    isNaN(_) || (_ < s && (s = _), _ > a && (a = _));
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
function Zd(e) {
  return `${yt(e.chains)} chains · ${yt(e.residues)} residues · ${yt(e.atoms)} atoms · ${yt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${yt(e.waters)} water)` : "");
}
function Qd(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function ki(e, t, n, r) {
  const i = r || (() => {
  }), o = Qd(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Ci,
    t.rep === "stick" ? { stick: { radius: Ue.stick.radius, ...o } } : t.rep === "sphere" ? { sphere: { scale: Ue.sphere.scale, ...o } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...o } }
    )
  ), e.setStyle(
    Jd,
    t.hetero ? {
      stick: { radius: Ue.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ue.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Yd,
    t.waters ? {
      stick: { radius: Ue.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ue.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > Ue.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(Ze.SurfaceType.VDW, { opacity: Ue.surfaceOpacity, ...o }, Ci)
      ).then(() => {
        i(null), e.render();
      }).catch((s) => i(`Surface failed: ${ge(s)}`, "error"));
    } catch (s) {
      i(`Surface failed: ${ge(s)}`, "error");
    }
  }, 30);
}
const Ei = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], xi = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class eu extends Ae {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, i = n.name ?? "", o = n.type !== "ProteinComponentViz", s = pt(
      "protein.representation",
      "cartoon",
      Ei.map((k) => k.id)
    ), a = pt(
      "protein.color",
      "chain",
      xi.map((k) => k.id)
    ), l = Ct("protein.waters", o), f = Ct("protein.hetero", !0), h = Ct("protein.spin", !1), b = {
      rep: s.get(),
      color: a.get(),
      waters: l.get(),
      hetero: f.get(),
      spin: h.get()
    };
    let y = null, $ = null, _ = null;
    const S = T(
      "div",
      Vi.top
    );
    t.appendChild(S), S.appendChild(
      T("span", `font-weight:700;font-size:${J.heading};letter-spacing:.02em;color:${M.titleColor};`, i || "Protein")
    );
    const u = (k) => T("span", `font-size:${J.small};color:${M.textMuted};`, k);
    S.appendChild(u("Style:")), S.appendChild(
      In(
        Ei,
        b.rep,
        (k) => {
          b.rep = k, g();
        },
        s
      )
    ), S.appendChild(u("Color:")), S.appendChild(
      _r(
        xi,
        b.color,
        (k) => {
          b.color = k, g();
        },
        a
      )
    );
    const v = T("div", "display:flex;gap:4px;");
    S.appendChild(v);
    const p = [
      ["waters", "Waters", "Show water molecules", l, () => g()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", f, () => g()],
      ["spin", "Spin", "Rotate the view continuously", h, () => y?.spin(b.spin ? "y" : !1)]
    ];
    for (const [k, E, O, A, P] of p)
      v.appendChild(
        Wi(
          E,
          b[k],
          (I) => {
            b[k] = I, P();
          },
          { title: O, remember: A }
        )
      );
    v.appendChild(zr(() => $?.reset()));
    const m = T("span", `margin-left:auto;font-size:${J.small};white-space:nowrap;color:${M.textMuted2};`);
    S.appendChild(m);
    const C = Ji();
    t.appendChild(C.wrap);
    const c = T(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${J.body};z-index:20;display:none;pointer-events:none;`
    );
    C.wrap.appendChild(c);
    const d = (k, E) => {
      if (k == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = k, c.style.display = "block";
      const O = E === "error";
      c.style.background = O ? M.warnBg : M.toolbarBg, c.style.color = O ? M.warnFg : M.textMuted, c.style.border = `1px solid ${O ? M.warnBorder : M.toolbarBorder}`;
    };
    function g() {
      y && ki(y, b, _, d);
    }
    if (!r || !r.trim())
      return d("No protein data - waiting for a PDB payload."), {};
    try {
      _ = Xd(r), m.textContent = Zd(_);
    } catch (k) {
      d(`⚠ PDB parse error: ${ge(k)}`, "error");
    }
    return d("Loading 3D viewer..."), Or().then(() => {
      y = Ze.createViewer(C.container, { backgroundColor: Et.viewer }), y.addModel(r, "pdb"), ki(y, b, _, d), y.zoomTo(), y.spin(b.spin ? "y" : !1), y.render(), $ = ds(C.container, y);
    }).catch((k) => {
      d(`⚠ Failed to render structure: ${ge(k)}`, "error");
    }), {
      onResize() {
        y && (y.resize(), y.render());
      },
      cleanup() {
        if ($?.cleanup(), $ = null, !!y) {
          try {
            y.spin(!1);
          } catch {
          }
          try {
            y.clear();
          } catch {
          }
          y = null;
        }
      }
    };
  }
}
Re("gufe-protein", eu);
const ys = "http://www.w3.org/2000/svg";
function se(e, t = {}) {
  const n = document.createElementNS(ys, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function jn(e, t) {
  const n = document.createElementNS(ys, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const tu = 8, nu = 64, ru = () => new Promise((e) => setTimeout(e, 0));
function $r(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function ou(e, t, n, r) {
  let i = null;
  try {
    if (i = e.get_mol(n, JSON.stringify({ removeHs: r })), !i || !i.get_substruct_matches) return null;
    const o = i.get_substruct_matches(t), s = JSON.parse(o || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const l of s) {
      const f = l.atoms;
      if (Array.isArray(f))
        for (const h of f) typeof h == "number" && a.add(h);
    }
    return [...a].sort((l, f) => l - f);
  } catch (o) {
    return console.warn("[gufe-viz] SMARTS match threw -", ge(o)), null;
  } finally {
    $r(i);
  }
}
function iu(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let i = 0;
  return { run: async (s) => {
    const a = s.trim(), l = ++i;
    if (!a) return { status: "cleared" };
    const f = r.get(a);
    if (f) return { status: "ok", matched: f, unreadable: 0 };
    const h = await e();
    if (l !== i) return { status: "superseded" };
    if (!h) return { status: "unsupported" };
    if (!h.get_qmol) return { status: "unsupported" };
    let b = null;
    try {
      b = h.get_qmol(a);
    } catch {
      b = null;
    }
    if (!b) return { status: "invalid" };
    if (!b.get_substruct_matches)
      return $r(b), { status: "unsupported" };
    const y = /* @__PURE__ */ new Map();
    let $ = 0;
    try {
      let _ = performance.now(), S = 0;
      for (let u = 0; u < t.length; u++) {
        const v = t[u] ? ou(h, b, t[u], n) : null;
        if (v ? v.length && y.set(u, v) : $++, !(++S < nu && performance.now() - _ < tu)) {
          if (await ru(), l !== i) return { status: "superseded" };
          S = 0, _ = performance.now();
        }
      }
    } finally {
      $r(b);
    }
    return r.set(a, y), { status: "ok", matched: y, unreadable: $ };
  }, cancel: () => void ++i };
}
function Nt(e) {
  const t = /* @__PURE__ */ new Map();
  return br(e, t, /* @__PURE__ */ new Set()), t;
}
function br(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) br(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) br(i, t, n);
}
function Qe(e, t) {
  return t ? e.get(t) : void 0;
}
function je(e, t, n) {
  const r = Qe(e, t);
  return r?.type === n ? r : void 0;
}
function ht(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Rn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function Pi(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function su(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Ai(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], l = o[s][1], f = t[a * 3 + l];
      if (Math.abs(f) < 1e-14) continue;
      const h = t[a * 3 + a], b = t[l * 3 + l], y = (b - h) / (2 * f);
      let $;
      Math.abs(y) > 1e10 ? $ = 1 / (2 * y) : $ = (y >= 0 ? 1 : -1) / (Math.abs(y) + Math.sqrt(y * y + 1));
      const _ = 1 / Math.sqrt(1 + $ * $), S = $ * _;
      t[a * 3 + a] = h - $ * f, t[l * 3 + l] = b + $ * f, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== l) {
          const v = t[u * 3 + a], p = t[u * 3 + l];
          t[u * 3 + a] = _ * v - S * p, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + l] = S * v + _ * p, t[l * 3 + u] = t[u * 3 + l];
        }
      for (let u = 0; u < 3; u++) {
        const v = n[u * 3 + a], p = n[u * 3 + l];
        n[u * 3 + a] = _ * v - S * p, n[u * 3 + l] = S * v + _ * p;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function au(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], i[0] += t[m][0], i[1] += t[m][1], i[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]] };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const C = e[m][0] - r[0], c = e[m][1] - r[1], d = e[m][2] - r[2], g = t[m][0] - i[0], k = t[m][1] - i[1], E = t[m][2] - i[2];
    o[0] += C * g, o[1] += C * k, o[2] += C * E, o[3] += c * g, o[4] += c * k, o[5] += c * E, o[6] += d * g, o[7] += d * k, o[8] += d * E;
  }
  const s = Pi(o), a = Rn(s, o), l = Rn(o, s);
  let f = Ai(a), h = Ai(l);
  function b(m) {
    const C = [0, 1, 2].sort((d, g) => m.values[g] - m.values[d]), c = new Array(9);
    for (let d = 0; d < 3; d++) {
      const g = C[d];
      c[d] = m.vectors[g], c[3 + d] = m.vectors[3 + g], c[6 + d] = m.vectors[6 + g];
    }
    return {
      values: [m.values[C[0]], m.values[C[1]], m.values[C[2]]],
      vectors: c
    };
  }
  f = b(f), h = b(h);
  const y = f.vectors, $ = h.vectors;
  for (let m = 0; m < 3; m++) {
    const C = y[m], c = y[3 + m], d = y[6 + m], g = o[0] * C + o[1] * c + o[2] * d, k = o[3] * C + o[4] * c + o[5] * d, E = o[6] * C + o[7] * c + o[8] * d, O = $[m], A = $[3 + m], P = $[6 + m];
    g * O + k * A + E * P < 0 && ($[m] = -O, $[3 + m] = -A, $[6 + m] = -P);
  }
  const _ = Pi(y);
  let S = Rn($, _);
  su(S) < 0 && ($[2] = -$[2], $[5] = -$[5], $[8] = -$[8], S = Rn($, _));
  const u = S[0] * i[0] + S[1] * i[1] + S[2] * i[2], v = S[3] * i[0] + S[4] * i[1] + S[5] * i[2], p = S[6] * i[0] + S[7] * i[1] + S[8] * i[2];
  return { R: S, t: [r[0] - u, r[1] - v, r[2] - p] };
}
function cu(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
const Ri = `
`, cr = 4;
function Ni(e, t, n) {
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
function lu(e, t, n) {
  const r = [], i = [];
  for (const [h, b] of n) {
    const y = e[b], $ = t[h];
    !y || !$ || (r.push(y), i.push($));
  }
  if (r.length < 2) return null;
  const o = (h) => {
    let b = 0, y = 0;
    for (const $ of h)
      b += $[0], y += $[1];
    return [b / h.length, y / h.length];
  }, s = o(r), a = o(i);
  let l = null, f = -1 / 0;
  for (const h of [!1, !0]) {
    let b = 0, y = 0;
    for (let p = 0; p < r.length; p++) {
      const m = (h ? -1 : 1) * (r[p][0] - s[0]), C = r[p][1] - s[1], c = i[p][0] - a[0], d = i[p][1] - a[1];
      b += m * d - C * c, y += m * c + C * d;
    }
    const $ = Math.hypot(b, y);
    if ($ <= f) continue;
    f = $;
    const _ = Math.atan2(b, y), S = Math.cos(_), u = Math.sin(_), v = (h ? -1 : 1) * s[0];
    l = {
      cos: S,
      sin: u,
      mirror: h,
      tx: a[0] - (S * v - u * s[1]),
      ty: a[1] - (u * v + S * s[1])
    };
  }
  return l;
}
function du(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function uu(e, t, n) {
  const r = ps(e);
  if (!r) return e;
  const i = e.replace(/\r/g, "").split(Ri);
  if (i[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const s = i[cr + o], a = t[o];
    if (s == null || !a) return e;
    i[cr + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = cr + r.atoms + a, f = i[l];
      if (f == null) break;
      const h = parseInt(f.substring(9, 12), 10);
      h !== 1 && h !== 6 || (i[l] = f.substring(0, 9) + String(h === 1 ? 6 : 1).padStart(3) + f.substring(12));
    }
  return i.join(Ri);
}
function fu(e, t, n) {
  try {
    const r = (s) => vr(s).coords.map((a) => [a[0], a[1]]), i = r(t), o = lu(i, r(e), n);
    return o ? uu(
      t,
      i.map((s) => du(o, s)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", ge(r)), t;
  }
}
function pu(e, t, n, r, i) {
  const o = Ni(e, t, r), s = Ni(e, n, r);
  return !i || r === "conformer" ? { left: o, right: s } : { left: o, right: fu(o, s, i) };
}
const hu = {
  core: "0xaaaaaa",
  uniqueA: "0xff4d4d",
  uniqueB: "0x4dff88",
  pairA: "0xff8888",
  pairB: "0x88ffaa",
  pairLine: "0xffee55",
  overlayA: "0xff6666",
  overlayB: "0x66ff99"
}, mu = {
  core: "0x888888",
  uniqueA: "0xd62828",
  uniqueB: "0x2a9d4a",
  pairA: "0xd62828",
  pairB: "0x2a9d4a",
  pairLine: "0xd9a300",
  overlayA: "0xd62828",
  overlayB: "0x2a9d4a"
};
function gu() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Ee = gu() ? hu : mu, Mi = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "openfe", label: "3D Color", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], lr = 420, $e = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04
}, dr = { gap: 2.5, minLiftFraction: 0.6 }, kt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Fi(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function yu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function vs(e, t) {
  const n = je(t, e.componentA, "SmallMoleculeComponentViz"), r = je(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: n["gufe-key"] === r["gufe-key"] ? [n] : [n, r] };
}
function Oi(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function vu(e, t) {
  const n = Oi(e), r = Oi(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + dr.gap, a = dr.minLiftFraction * o + dr.gap;
  return { axis: i, lift: Math.max(s, a) };
}
function $u(e, t) {
  let n = 0;
  for (const i of [e, t]) {
    let o = 1 / 0;
    for (const s of i)
      s[0] < o && (o = s[0]), s[0] - o > n && (n = s[0] - o);
  }
  const r = Math.round(n * 10) / 10;
  return (r > kt.minSpread ? r : kt.minSpread) * kt.spreadFactor;
}
function bu(e, t) {
  const n = Jl, i = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), o = Math.floor(i), s = Math.min(o + 1, n.length - 1), a = i - o;
  let l = "0x";
  for (let f = 0; f < 3; f++) {
    const h = (y) => parseInt(y.slice(1 + f * 2, 3 + f * 2), 16), b = Math.round(h(n[o]) + (h(n[s]) - h(n[o])) * a);
    l += b.toString(16).padStart(2, "0");
  }
  return l;
}
class wu extends Ae {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Nt(n), i = je(r, n.componentA, "SmallMoleculeComponentViz"), o = je(r, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !o)
      return t.appendChild(
        le("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = ht(i), a = ht(o), l = yu(n);
    let f, h;
    try {
      f = vr(i.sdf, s), h = vr(o.sdf, a);
    } catch (B) {
      return t.appendChild(le(`Could not read a molecule: ${ge(B)}`, !0)), {};
    }
    const b = /* @__PURE__ */ new Map();
    for (const [B, Q] of l) b.set(Q, B);
    const y = Fi(l, f.symbols, h.symbols), $ = Fi(b, h.symbols, f.symbols), _ = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(_);
    const S = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    _.appendChild(S);
    const u = pt("atom-mapping.mode", "plain", Mi.map((B) => B.id));
    let v = u.get();
    const p = T(
      "div",
      Li
    );
    p.appendChild(
      In(
        Mi,
        v,
        (B) => {
          v = B, ie();
        },
        u
      )
    ), _.appendChild(p);
    let m = [], C = 0, c = !0;
    const d = () => {
      C && cancelAnimationFrame(C), C = 0;
      for (const B of m) {
        B.guard?.cleanup();
        try {
          B.viewer?.clear();
        } catch {
        }
      }
      m = [], S.replaceChildren();
    }, g = (B) => {
      const Q = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      Q.appendChild(
        T(
          "div",
          xt,
          B
        )
      );
      const D = T("div", "flex:1;position:relative;min-height:0;");
      D.dataset.gufeViewer = "", Q.appendChild(D), S.appendChild(Q);
      const R = { container: D, viewer: null, guard: null };
      return m.push(R), R;
    }, k = () => {
      if (m.length < 2) return;
      const B = m.map(() => "");
      let Q = !1;
      const D = () => {
        if (c) {
          if (!Q)
            for (let R = 0; R < m.length; R++) {
              const q = m[R].viewer;
              if (!q) continue;
              const F = JSON.stringify(q.getView());
              if (F !== B[R]) {
                Q = !0;
                for (let w = 0; w < m.length; w++)
                  w !== R && m[w].viewer && (m[w].viewer.setView(q.getView()), m[w].viewer.render()), B[w] = F;
                Q = !1;
                break;
              }
            }
          C = requestAnimationFrame(D);
        }
      };
      C = requestAnimationFrame(D);
    }, E = (B, Q) => {
      const D = Ze.createViewer(B.container, { backgroundColor: Et.viewer });
      for (const { mol: R } of Q) D.addModel(Hd(R), "sdf");
      return B.viewer = D, B.guard = jr(B.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => {
        }
      }), D;
    }, O = () => {
      for (const B of [f, h]) {
        const Q = g(B.name), D = E(Q, [{ mol: B }]);
        D.setStyle(
          {},
          { stick: { radius: $e.stick, colorscheme: "Jmol" }, sphere: { scale: $e.sphere, colorscheme: "Jmol" } }
        ), D.zoomTo(), D.render();
      }
      k();
    }, A = () => {
      const B = [
        { mol: f, uniques: y, colour: Ee.uniqueA },
        { mol: h, uniques: $, colour: Ee.uniqueB }
      ];
      for (const Q of B) {
        const D = g(Q.mol.name), R = E(D, [{ mol: Q.mol }]);
        R.setStyle(
          {},
          { stick: { radius: $e.stick, color: Ee.core }, sphere: { scale: $e.sphere, color: Ee.core } }
        );
        for (const q of Q.uniques.atoms)
          R.addStyle(
            { serial: q + 1 },
            {
              stick: { radius: $e.uniqueStick, color: Q.colour },
              sphere: { scale: $e.uniqueSphere, color: Q.colour }
            }
          );
        R.zoomTo(), R.render();
      }
      k();
    }, P = () => {
      const B = g(`${s} (left), both overlaid (middle), ${a} (right)`), Q = $u(f.coords, h.coords), D = (H, U) => ({
        ...H,
        coords: H.coords.map(([X, Z, N]) => [X + U, Z, N])
      }), R = D(f, -Q), q = D(h, Q), F = E(B, [{ mol: R }, { mol: q }, { mol: f }, { mol: h }]);
      F.setStyle({}, { stick: {} });
      const w = Array.from(l);
      w.forEach(([H, U], X) => {
        const Z = R.coords[H], N = q.coords[U];
        if (!Z || !N) return;
        const j = bu(X, w.length);
        for (const [L, K, W] of [Z, N])
          F.addSphere({
            center: { x: L, y: K, z: W },
            radius: kt.sphereRadius,
            color: j,
            alpha: kt.sphereAlpha
          });
      }), F.zoomTo();
      const { clientWidth: x, clientHeight: z } = B.container;
      x > 0 && x < z && F.zoom(x / z), F.render();
    }, I = () => {
      const B = g(`${s} to ${a}  (${l.size} mapped pairs)`), Q = [], D = [];
      for (const [H, U] of l) {
        const X = f.coords[H], Z = h.coords[U];
        X && Z && (Q.push(X), D.push(Z));
      }
      const R = au(Q, D), q = h.coords.map((H) => R ? cu(H, R.R, R.t) : [...H]), { axis: F, lift: w } = vu(f.coords, q), x = {
        ...h,
        coords: q.map((H) => {
          const U = [H[0], H[1], H[2]];
          return U[F] += w, U;
        })
      }, z = E(B, [{ mol: f }, { mol: x }]);
      z.setStyle(
        { model: 0 },
        { stick: { radius: $e.stick, color: Ee.pairA }, sphere: { scale: $e.pairSphere, color: Ee.pairA } }
      ), z.setStyle(
        { model: 1 },
        { stick: { radius: $e.stick, color: Ee.pairB }, sphere: { scale: $e.pairSphere, color: Ee.pairB } }
      );
      for (const [H, U] of l) {
        const X = f.coords[H], Z = x.coords[U];
        !X || !Z || z.addCylinder({
          start: { x: X[0], y: X[1], z: X[2] },
          end: { x: Z[0], y: Z[1], z: Z[2] },
          radius: $e.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: Ee.pairLine
        });
      }
      z.zoomTo(), F === 2 ? z.rotate(90, "x") : F === 0 && z.rotate(-90, "z"), z.render();
    }, G = () => {
      const B = g(`${s} + ${a}  (overlay)`), Q = E(B, [{ mol: f }, { mol: h }]);
      for (const [D, R] of [
        [0, Ee.overlayA],
        [1, Ee.overlayB]
      ])
        Q.setStyle(
          { model: D },
          {
            stick: { radius: $e.stick, color: R, opacity: $e.overlayOpacity },
            sphere: { scale: $e.pairSphere, color: R, opacity: $e.overlayOpacity }
          }
        );
      Q.zoomTo(), Q.render();
    }, Y = () => {
      const B = ut, Q = Nd(B.customSpec), R = [
        { mol: f, uniques: y, side: "left", custom: Q.left },
        { mol: h, uniques: $, side: "right", custom: Q.right }
      ].map((q) => {
        const F = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        F.appendChild(
          T(
            "div",
            xt,
            q.mol.name
          )
        );
        const w = T(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${Et.canvas2D};`
        );
        return w.appendChild(le("Loading 2D depiction...")), F.appendChild(w), S.appendChild(F), { box: w, side: q };
      });
      Tr().then((q) => {
        const F = jd(B, q), w = pu(q, i.sdf, o.sdf, B.layout, B.alignPair ? l : null);
        for (const { box: x, side: z } of R) {
          const H = Od(B, z.mol, z.uniques, z.side), U = zd(
            B,
            lr,
            H,
            z.custom,
            F,
            z.mol.symbols.length
          ), X = Id(q, z.side === "left" ? w.left : w.right, lr, U);
          if (x.replaceChildren(), !X) {
            x.appendChild(le("Failed to parse molecule", !0));
            continue;
          }
          ms(x, X, lr);
          const Z = x.querySelector("svg");
          Z && Ud(Z, z.mol, B, H, z.custom, F);
        }
      }).catch((q) => {
        for (const { box: F } of R)
          F.replaceChildren(le(`RDKit failed to load: ${ge(q)}`, !0));
      });
    }, ee = () => {
      const B = T("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      S.appendChild(B);
      const Q = T("div", "display:flex;flex-direction:column;gap:2px;");
      Q.appendChild(
        T(
          "div",
          `font-size:${J.title};font-weight:${He.bold};color:${Te.title};`,
          n.name || `${s} to ${a}`
        )
      ), Q.appendChild(T("div", `font-size:${J.body};color:${Te.faint};`, "LigandAtomMapping")), B.appendChild(Q);
      const D = T("div", `display:flex;flex-wrap:wrap;gap:${ce.lg} 16px;font-size:${J.small};`);
      D.appendChild(pe("mapped atoms", String(l.size))), D.appendChild(
        pe("element changes", String(y.elements.length), ut.modifiedColor)
      ), D.appendChild(pe(`unique to ${s}`, String(y.atoms.length), ut.destroyedColor)), D.appendChild(pe(`unique to ${a}`, String($.atoms.length), ut.createdColor)), D.appendChild(pe(`atoms in ${s}`, String(f.symbols.length))), D.appendChild(pe(`atoms in ${a}`, String(h.symbols.length))), D.appendChild(pe("score", n.score == null ? dt : n.score.toFixed(3))), B.appendChild(D);
      const R = T("div", Br, "Correspondence");
      B.appendChild(R);
      const q = T("div", Lr);
      q.textContent = l.size ? Array.from(l, ([w, x]) => `${w} -> ${x}`).join("   ") : "This mapping relates no atoms at all.", B.appendChild(q);
      const F = Object.entries(n.annotations ?? {}).filter(([w]) => w !== "score");
      if (F.length) {
        B.appendChild(T("div", Br, "Annotations"));
        const w = T("div", `${Lr}color:${Te.faint};`);
        for (const [x, z] of F)
          w.appendChild(T("div", "", `${x}: ${String(z)}`));
        B.appendChild(w);
      }
      B.appendChild(
        T(
          "div",
          `${Es}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, ie = () => {
      if (d(), v === "info") {
        ee();
        return;
      }
      if (v === "2d") {
        Y();
        return;
      }
      S.appendChild(le("Loading 3D viewer...")), Or().then(() => {
        c && (S.replaceChildren(), v === "colored" ? A() : v === "openfe" ? P() : v === "lines" ? I() : v === "overlay" ? G() : O());
      }).catch((B) => {
        S.replaceChildren(le(`3D render failed: ${ge(B)}`, !0));
      });
    };
    return ie(), {
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
Re("gufe-atom-mapping", wu);
const Ti = ["Force-directed", "Circular", "Radial"], _u = "ligand-network", ji = "Cmd/Ctrl-click to select several.", zi = (e) => Math.round(e * 100) / 100;
function Su(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (o) => typeof o == "number" && Number.isFinite(o);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((o) => Array.isArray(o) && o.length === 2 && o.every(r))) return null;
  const i = r(n.selected) ? Math.trunc(n.selected) : -1;
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: i };
}
function Cu(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const et = 38, Nn = 200, $s = 4, ku = 14, Eu = 18, Pe = {
  fontSize: 11,
  below: et - $s + 12,
  minFontSize: 7,
  insideWidth: (et - 6) * 2
}, Ii = 1.5, xu = 6.5, Pu = 0.9, Au = 14, ur = { size: 8, clearance: 8 }, Ru = { fontSize: 10 }, bs = { debounceMs: 250, atomRadius: 0.4 }, Nu = gr(M.netMatchAtom), Mu = { padding: 4 }, ft = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Fu = (e) => ft.find((t) => e >= t.from) ?? ft[ft.length - 1], Ou = (e) => ft[Math.min(ft.indexOf(e) + 1, ft.length - 1)], Mn = 200, Tu = 24, fr = { node: 0.12, edge: 0.06 }, ju = 1.8, Se = {
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
function zu(e) {
  const t = T(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:${J.small};line-height:1.5;max-width:260px;background:${M.tooltipBg};border:1px solid ${M.tooltipBorder};color:${M.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function Iu(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    const r = t.get(n);
    if (r) return r;
    const i = `arrow-${n.replace(/[^a-zA-Z0-9]/g, "")}`;
    t.set(n, i);
    const o = se("marker", {
      id: i,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: et + ur.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: ur.size,
      markerHeight: ur.size,
      orient: "auto"
    });
    return o.appendChild(se("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function Du(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function qu(e) {
  const [t, n] = M.netEdgeRamp.map(Du), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Fe = ht, Vu = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Lu(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], i = (b) => (e.matched().get(b) ?? []).join(","), o = (b, y) => {
    if (t.has(y) || n.has(y)) return;
    const $ = e.nodes[y], _ = e.matched().get(y), S = $.sdf && hs(
      b,
      $.sdf,
      Nn,
      ut.layout,
      _ && { atoms: _, color: Nu, radius: bs.atomRadius }
    );
    if (!S) {
      n.add(y);
      return;
    }
    const u = new DOMParser().parseFromString(S, "image/svg+xml").documentElement;
    if (!u || u.nodeName.toLowerCase() === "parsererror") {
      n.add(y);
      return;
    }
    const v = (et - $s) * 2 / Nn, p = e.depictionGroups[y];
    p.setAttribute(
      "transform",
      `translate(${-v * Nn / 2},${-v * Nn / 2}) scale(${v})`
    );
    let m = 0;
    for (const C of Array.from(u.childNodes)) {
      if (C.nodeType !== 1) continue;
      const c = C.nodeName.toLowerCase();
      if (!(c === "defs" || c === "metadata" || c === "title")) {
        if (c === "rect") {
          const d = (C.getAttribute("fill") ?? "").toLowerCase();
          if (d === "#ffffff" || d === "white" || d === "rgb(255,255,255)") continue;
        }
        p.appendChild(document.importNode(C, !0)), m++;
      }
    }
    m ? (t.add(y), r[y] = i(y)) : n.add(y);
  }, s = () => {
    for (const b of [...t])
      r[b] !== i(b) && (e.depictionGroups[b].replaceChildren(), t.delete(b));
  }, a = [], l = (b, y) => {
    if (a[b]) return a[b];
    y.setAttribute("font-size", String(Pe.fontSize));
    let $ = 0;
    try {
      $ = y.getBBox().width;
    } catch {
      return Pe.fontSize;
    }
    if (!$) return Pe.fontSize;
    const _ = Pe.fontSize * Pe.insideWidth / $;
    return a[b] = Math.max(Pe.minFontSize, Math.min(Pe.fontSize, _)), a[b];
  }, f = (b, y) => {
    const $ = y.structure && !t.has(b) ? Ou(y) : y;
    e.depictionGroups[b].setAttribute("display", $.structure ? "inline" : "none");
    const _ = e.matched().has(b), S = e.circles[b];
    S.setAttribute("fill", $.disc ? _ ? M.netMatchFill : M.netNodeFill : "none"), S.setAttribute("stroke", $.disc ? _ ? M.netMatchStroke : M.netNodeStroke : "none"), e.initials[b].setAttribute("display", $.initials ? "inline" : "none");
    const u = e.captions[b];
    if (u.setAttribute("fill", _ ? M.netMatchStroke : M.netNodeCaption), u.setAttribute("display", $.name === "none" ? "none" : "inline"), $.name === "none") return;
    const v = $.name === "inside";
    u.setAttribute("y", v ? "0" : String(Pe.below)), u.setAttribute("dominant-baseline", v ? "middle" : "auto"), u.setAttribute("font-size", String(v ? l(b, u) : Pe.fontSize));
  };
  return { apply: (b, y, $) => {
    const _ = Fu(b);
    e.stage.setAttribute("data-detail", _.id), e.edgeLabels.setAttribute("display", _.edgeScores ? "inline" : "none");
    for (let p = 0; p < e.nodes.length; p++) f(p, _);
    if (!_.structure) return;
    const { width: S, height: u } = e.viewport(), v = [];
    e.nodes.forEach((p, m) => {
      if (t.has(m) || n.has(m)) return;
      const C = p.x * b + y, c = p.y * b + $;
      C < -Mn || c < -Mn || C > S + Mn || c > u + Mn || v.push(m);
    }), v.length && e.rdkit().then((p) => {
      if (p)
        for (const m of v)
          o(p, m), f(m, _);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: s };
}
function Bu(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : Fe(s);
  return r === "ligands" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function Uu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Di(e, t)), navigator.clipboard || Di(e, t);
}
function Di(e, t) {
  const n = T("textarea", `width:100%;height:80px;font-size:${J.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Ku(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Hu(e) {
  const t = Ur("ligand-network.query"), n = Ur("ligand-network.smarts"), r = Ds("ligand-network.minScore", 0, 0, 1), i = pt("ligand-network.exportAs", "names", ["names", "keys"]), o = T(
    "div",
    `display:flex;flex-direction:column;gap:8px;min-width:236px;max-width:340px;box-sizing:border-box;padding:10px;min-height:0;background:${M.panelBg};border-right:1px solid ${M.splitBorder};`
  ), s = T("input", `${pr}width:100%;box-sizing:border-box;`);
  s.type = "search", s.placeholder = "Search ligands", s.value = t.get(), e.query.text = s.value, s.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), o.appendChild(s);
  const a = T("input", `${pr}width:100%;box-sizing:border-box;`);
  a.type = "text", a.placeholder = "Colour by SMARTS", a.value = n.get(), a.spellcheck = !1, a.setAttribute("aria-label", "Colour the ligands matching this SMARTS pattern"), o.appendChild(a);
  const l = T(
    "div",
    // One line held open whether or not there is anything to say, so this reads
    // as a line that changes rather than as the ligand list twitching up and
    // down under it every time a pattern is typed, matched or refused. Every
    // message fits one line at this panel width; a longer one would want the
    // wording shortened rather than the space here grown.
    `font-size:${J.tiny};line-height:1.5;min-height:1.5em;color:${M.textMuted2};`
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
  let b = 0;
  a.oninput = () => {
    n.set(a.value), window.clearTimeout(b), b = window.setTimeout(() => h(a.value), bs.debounceMs);
  };
  const y = T("div", `display:flex;align-items:center;gap:8px;font-size:${J.small};color:${M.textMuted};`), $ = T("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), _ = T("input", "flex:1;");
  _.type = "range", _.min = "0", _.max = "1", _.step = "0.01", _.value = String(r.get()), e.filter.minScore = Number(_.value), _.setAttribute("aria-label", "Hide mappings scoring below this"), y.appendChild(T("span", "", "score >=")), y.appendChild(_), y.appendChild($), o.appendChild(y);
  const S = T("div", `font-size:${J.small};color:${M.textMuted2};`);
  o.appendChild(S);
  const u = T("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  o.appendChild(u), o.appendChild(T("div", `font-size:${J.tiny};line-height:1.5;color:${M.textMuted2};`, ji));
  const v = T("div", "display:flex;flex-direction:column;gap:6px;"), p = T("div", `display:flex;align-items:center;gap:6px;font-size:${J.small};color:${M.textMuted};`);
  p.appendChild(T("span", "", "copy as"));
  const m = _r(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    i.get(),
    () => {
    },
    i
  );
  m.style.flex = "1", p.appendChild(m), v.appendChild(p);
  const C = T("div", `font-size:${J.tiny};line-height:1.5;color:${M.textMuted2};`), c = (A) => {
    C.textContent = A;
  }, d = T("div", "display:flex;gap:4px;"), g = [
    ["Ligands", "ligands", "Copy the selected ligand names, one per line"],
    ["Edges", "edges", "Copy the edges between the selected ligands, one pair per line"]
  ];
  for (const [A, P, I] of g) {
    const G = T("button", `${Pt}flex:1;`, A);
    G.title = I, G.onclick = (Y) => {
      const ee = m.value, ie = Bu(e.nodes, e.edges, e.selected, P, ee);
      if (!ie) {
        c(
          e.selected.size === 0 ? "Nothing selected. Click a ligand above." : P === "edges" ? `No mappings between the ${e.selected.size} selected ligands. ${ji}` : "Nothing to copy."
        );
        return;
      }
      const B = ie.split(`
`).length;
      Y.shiftKey ? (Ku(ie, `selected-${P}.txt`), c(`Saved ${B} ${P === "edges" ? "edges" : "ligands"} to a file.`)) : (Uu(ie, v), c(P === "edges" ? `Copied ${B} edges.` : `Copied ${e.selected.size} ligands.`));
    }, d.appendChild(G);
  }
  v.appendChild(d), v.appendChild(C), v.appendChild(
    T("div", `font-size:${J.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")
  ), o.appendChild(v);
  const k = T("button", `${Pt}width:100%;`, "Clear selection");
  k.onclick = () => {
    e.selected.clear(), O(), e.refresh();
  }, o.appendChild(k);
  const E = (A) => {
    const P = e.query.text.trim().toLowerCase();
    return P ? Fe(A).toLowerCase().includes(P) || (A.smiles ?? "").toLowerCase().includes(P) || A["gufe-key"].toLowerCase().includes(P) : !0;
  }, O = () => {
    c(""), u.replaceChildren();
    const A = e.nodes.map((P, I) => ({ node: P, index: I })).filter(({ node: P }) => E(P));
    S.textContent = `${A.length} of ${e.nodes.length} ligands`;
    for (const { node: P, index: I } of A) {
      const G = P["gufe-key"], Y = T(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${J.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(G) ? M.cardBorderActive : M.cardBorder};background:${e.selected.has(G) ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), ee = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Fe(P));
      ee.title = `${Fe(P)}
${P.smiles ?? ""}`, Y.appendChild(ee), Y.onclick = (ie) => {
        ie.shiftKey || ie.metaKey || ie.ctrlKey ? e.selected.has(G) ? e.selected.delete(G) : e.selected.add(G) : (e.selected.clear(), e.selected.add(G), e.focus(I)), O(), e.refresh();
      }, u.appendChild(Y);
    }
    A.length || u.appendChild(T("div", `font-size:${J.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return s.oninput = () => {
    e.query.text = s.value, t.set(s.value), O(), e.refresh();
  }, _.oninput = () => {
    e.filter.minScore = Number(_.value), $.textContent = e.filter.minScore.toFixed(2), r.set(e.filter.minScore), e.refresh();
  }, O(), a.value.trim() && h(a.value), o;
}
class Gu extends Ae {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Nt(n), i = [];
    let o = 0;
    for (const U of n.nodes ?? []) {
      const X = je(r, U, "SmallMoleculeComponentViz");
      if (!X) {
        o++;
        continue;
      }
      i.push({ ...X, x: 0, y: 0 });
    }
    const s = new Map(i.map((U) => [U["gufe-key"], U])), a = [];
    let l = 0;
    for (const U of n.edges ?? []) {
      const X = s.get(U.componentA), Z = s.get(U.componentB);
      if (!X || !Z) {
        l++;
        continue;
      }
      a.push({ ...U, index: a.length, from: X, to: Z });
    }
    const f = Ge(n.name || "Ligand network");
    f.statsEl.appendChild(pe("ligands", String(i.length))), f.statsEl.appendChild(pe("mappings", String(a.length))), t.appendChild(f);
    const h = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const b = /* @__PURE__ */ new Set(), y = { minScore: 0 }, $ = { text: "" };
    let _ = () => {
    }, S = null;
    const u = () => S ??= Tr().catch((U) => (console.warn("[gufe-viz] RDKit failed to load:", ge(U)), null)), v = iu(
      u,
      i.map((U) => U.sdf ?? "")
    );
    let p = /* @__PURE__ */ new Map(), m = () => {
    };
    const C = async (U) => {
      const X = await v.run(U);
      return X.status === "superseded" || (p = X.status === "ok" ? X.matched : /* @__PURE__ */ new Map(), m()), X;
    }, c = oa(
      f,
      () => Hu({
        nodes: i,
        edges: a,
        selected: b,
        filter: y,
        query: $,
        refresh: () => _(),
        focus: (U) => G(U),
        match: (U) => C(U)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => H(),
        remember: Ct("ligand-network.menuOpen", !1)
      }
    );
    h.appendChild(c.panel);
    const d = T("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), g = T("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${M.appBg};`);
    h.appendChild(d), h.appendChild(T("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`)), h.appendChild(g);
    const k = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    d.appendChild(k);
    const E = pt("ligand-network.layout", "Force-directed", Ti), O = this.#t(
      (U) => H(U),
      () => x(),
      E
    );
    d.appendChild(O.bar);
    const A = this.#e(g, r);
    if (!i.length)
      return k.appendChild(
        le(
          o ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), A.message("Nothing to show."), {};
    o && Xe(
      k,
      `${o} ligand${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Xe(k, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const P = u(), I = zu(k);
    let G = () => {
    };
    const Y = Su(Os(_u), i.length);
    let ee = Y && { scale: Y.scale, tx: Y.tx, ty: Y.ty }, ie = Y && Y.selected < a.length ? Y.selected : a.length ? 0 : -1, B = () => ({ scale: 1, tx: 0, ty: 0 }), Q = !1, D = null, R = E.get(), q = !1, F = !0, w = () => {
    }, x = () => {
    };
    const z = (U) => {
      ie = U, A.show(a[U] ?? null), w();
    }, H = (U = R) => {
      const X = Q && U === R ? B() : null;
      R = U, D?.(), D = null, k.querySelector("svg")?.remove();
      const Z = k.clientWidth || 800, N = k.clientHeight || 600;
      Wu(i, Z, N, R, a), Y && Cu(i, Y.nodes);
      const j = () => {
        if (!F) return;
        const L = this.#r(k, i, a, Z, N, z, P, I);
        w = () => L.setSelected(ie), x = L.reset, D = L.cleanup, G = (W) => L.focusOn(W), B = L.transform, _ = () => {
          const W = $.text.trim().toLowerCase(), te = b.size > 0 || W.length > 0, ue = /* @__PURE__ */ new Set();
          for (const fe of i) {
            const de = fe["gufe-key"], Ve = b.has(de) || W.length > 0 && (Fe(fe).toLowerCase().includes(W) || (fe.smiles ?? "").toLowerCase().includes(W) || de.toLowerCase().includes(W));
            (!te || Ve) && ue.add(de);
          }
          const be = /* @__PURE__ */ new Set();
          a.forEach((fe, de) => {
            (fe.score ?? 0) < y.minScore || !ue.has(fe.from["gufe-key"]) || !ue.has(fe.to["gufe-key"]) || be.add(de);
          });
          const he = te || y.minScore > 0;
          L.setEmphasis(he ? ue : null, he ? be : null);
        }, m = () => L.setMatches(p), w(), _(), m();
        const K = ee ?? X;
        K ? (L.setTransform(K.scale, K.tx, K.ty), ee = null) : L.fit(), Q = !0;
      };
      if (R !== "Force-directed" || q || Y) {
        j();
        return;
      }
      Ju(i, a, Z, N).then((L) => {
        if (F) {
          if (L) {
            j();
            return;
          }
          q = !0, O.picker.value = "Circular", Xe(k, "d3 could not be loaded - showing the circular layout instead"), H("Circular");
        }
      }, j);
    };
    return H(), A.show(a[ie] ?? null), {
      onResize: () => H(),
      cleanup: () => {
        F = !1, v.cancel(), I.remove(), D?.();
      },
      viewState: () => ({
        nodes: i.map((U) => [zi(U.x), zi(U.y)]),
        ...B(),
        selected: ie
      })
    };
  }
  #t(t, n, r) {
    const i = T(
      "div",
      Vi.bottom
    ), o = T("div", `display:flex;align-items:center;gap:6px;font-size:${J.small};color:${M.textMuted};`);
    o.appendChild(T("span", "", "score")), o.appendChild(
      T(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${M.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(T("span", "", "0 -> 1")), i.appendChild(o), i.appendChild(T("label", `font-size:${J.body};margin-left:auto;color:${M.textMuted};`, "Layout"));
    const s = _r(
      Ti.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return i.appendChild(s), i.appendChild(zr(n, "Reset pan and zoom")), { bar: i, picker: s };
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
    const r = T("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const i = (s) => r.replaceChildren(le(s));
    return { show: (s) => {
      if (!s) {
        i("Click an edge to see its mapping.");
        return;
      }
      const a = document.createElement("gufe-atom-mapping");
      a.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", a.payload = vs(s, n), r.replaceChildren(a);
    }, message: i };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, r, i, o, s, a, l) {
    const f = se("svg", {
      class: "gufe-graph",
      width: i,
      height: o,
      style: "display:block;touch-action:none;"
    }), h = se("g");
    f.appendChild(h), t.appendChild(f);
    const b = se("defs"), y = Iu(b);
    f.appendChild(b);
    const $ = [], _ = se("g"), S = se("g"), u = se("g", { "pointer-events": "none" }), v = se("g");
    h.append(_, S, u, v);
    for (const A of r) {
      const P = qu(A.score), I = Ii + (A.score ?? 0.5) * (xu - Ii), G = se("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": I + Mu.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), Y = se("line", {
        stroke: P,
        "stroke-width": I,
        "stroke-opacity": Pu,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${y(P)})`,
        "pointer-events": "none"
      }), ee = se("line", { stroke: "transparent", "stroke-width": Au, style: "cursor:pointer;" });
      ee.addEventListener("click", (Q) => {
        Q.stopPropagation(), s(A.index);
      }), ee.addEventListener("mousemove", (Q) => {
        l.show(
          `<div style="font-weight:700;color:${M.titleColor};">${qe(Fe(A.from))} -&gt; ${qe(Fe(A.to))}</div>` + (A.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${J.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          Q.offsetX,
          Q.offsetY
        );
      }), ee.addEventListener("mouseleave", () => l.hide()), $.push(G), _.append(G, Y), S.appendChild(ee);
      const ie = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Ru.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      ie.textContent = A.score == null ? "" : A.score.toFixed(2);
      const B = se("g", { class: "gufe-edge-label" });
      B.appendChild(ie), u.appendChild(B);
    }
    const p = [], m = [], C = [], c = [], d = n.map((A) => {
      const P = se("g", { class: "gufe-node", style: "cursor:grab;" });
      P.addEventListener("mousemove", (ie) => {
        l.show(
          `<div style="font-weight:700;color:${M.titleColor};">${qe(Fe(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${qe(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${J.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${qe(A["gufe-key"])}</div>`,
          ie.offsetX,
          ie.offsetY
        );
      }), P.addEventListener("mouseleave", () => l.hide());
      const I = se("circle", {
        r: et,
        fill: M.netNodeFill,
        stroke: M.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all"
      });
      P.appendChild(I), m.push(I);
      const G = se("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      P.appendChild(G), p.push(G);
      const Y = se("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Eu,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      Y.textContent = Fe(A).slice(0, 2).toUpperCase(), P.appendChild(Y), C.push(Y);
      const ee = se("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Pe.below,
        "font-size": Pe.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      return ee.textContent = Vu(Fe(A), ku), ee.setAttribute("display", "none"), c.push(ee), P.appendChild(ee), v.appendChild(P), P;
    }), g = () => {
      r.forEach((A, P) => {
        for (const G of [$[P], _.children[P * 2 + 1], S.children[P]]) {
          const Y = G;
          Y.setAttribute("x1", String(A.from.x)), Y.setAttribute("y1", String(A.from.y)), Y.setAttribute("x2", String(A.to.x)), Y.setAttribute("y2", String(A.to.y));
        }
        u.children[P].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, P) => d[P].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    g();
    let k = /* @__PURE__ */ new Map();
    const E = Lu({
      nodes: n,
      circles: m,
      matched: () => k,
      captions: c,
      initials: C,
      depictionGroups: p,
      edgeLabels: u,
      stage: f,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), O = this.#n(f, h, n, d, g, E.apply);
    return {
      setSelected(A) {
        $.forEach((P, I) => P.setAttribute("opacity", I === A ? "0.95" : "0"));
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
        k = A, E.forget();
        const { scale: P, tx: I, ty: G } = O.transform();
        E.apply(P, I, G);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, P) {
        d.forEach((I, G) => {
          const Y = !A || A.has(n[G]["gufe-key"]);
          I.setAttribute("opacity", Y ? "1" : String(fr.node));
        }), r.forEach((I, G) => {
          const Y = !P || P.has(G), ee = Y ? "0.9" : String(fr.edge);
          _.children[G * 2 + 1].setAttribute("stroke-opacity", ee), u.children[G].setAttribute("opacity", Y ? "1" : String(fr.edge));
        });
      },
      focusOn(A) {
        const P = n[A];
        P && O.centreOn(P.x, P.y);
      },
      setDetail: E.apply,
      depictionsDrawn: () => E.drawn(),
      fit: O.fit,
      reset: O.reset,
      transform: O.transform,
      setTransform: O.setTransform,
      cleanup: O.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, r, i, o, s) {
    let a = 1, l = 0, f = 0;
    const h = () => {
      n.setAttribute("transform", `translate(${l},${f}) scale(${a})`), s(a, l, f);
    }, b = () => {
      const m = t.getBoundingClientRect();
      return {
        width: m.width || Number(t.getAttribute("width")) || t.clientWidth || 800,
        height: m.height || Number(t.getAttribute("height")) || t.clientHeight || 600
      };
    }, y = () => {
      let m = 1 / 0, C = 1 / 0, c = -1 / 0, d = -1 / 0;
      for (const O of r)
        m = Math.min(m, O.x), C = Math.min(C, O.y), c = Math.max(c, O.x), d = Math.max(d, O.y);
      if (a = 1, l = 0, f = 0, !Number.isFinite(m)) {
        h();
        return;
      }
      const g = et + Tu, { width: k, height: E } = b();
      a = Math.min(1, k / (c - m + g * 2), E / (d - C + g * 2)), l = k / 2 - (m + c) / 2 * a, f = E / 2 - (C + d) / 2 * a, h();
    }, _ = jr(t, {
      onZoom: (m) => {
        const C = t.getBoundingClientRect(), c = m.clientX - C.left, d = m.clientY - C.top, g = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-m.deltaY * 2e-3)));
        return l = c - (c - l) * g, f = d - (d - f) * g, a *= g, h(), g !== 1;
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let S = null;
    const u = (m) => {
      S = { x: m.clientX - l, y: m.clientY - f };
    }, v = (m) => {
      S && (l = m.clientX - S.x, f = m.clientY - S.y, h());
    }, p = () => {
      S = null;
    };
    return t.addEventListener("pointerdown", u), t.addEventListener("pointermove", v), t.addEventListener("pointerup", p), t.addEventListener("pointercancel", p), t.addEventListener("pointerleave", p), i.forEach((m, C) => {
      let c = null;
      m.addEventListener("pointerdown", (g) => {
        g.stopPropagation(), c = { x: g.clientX - r[C].x * a, y: g.clientY - r[C].y * a }, m.setPointerCapture(g.pointerId);
      }), m.addEventListener("pointermove", (g) => {
        c && (r[C].x = r[C].fx = (g.clientX - c.x) / a, r[C].y = r[C].fy = (g.clientY - c.y) / a, o());
      });
      const d = () => {
        c = null;
      };
      m.addEventListener("pointerup", d), m.addEventListener("pointercancel", d);
    }), {
      fit: y,
      // Back to the view it opened on, which is the framed one. An identity
      // transform would be "reset" only in the sense that a blank canvas is.
      reset: y,
      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(m, C) {
        const { width: c, height: d } = b();
        a = Math.max(a, ju), l = c / 2 - m * a, f = d / 2 - C * a, h();
      },
      transform: () => ({ scale: a, tx: l, ty: f }),
      // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
      // camera being put back exactly where it was, and a limit applied here
      // would quietly move it.
      setTransform(m, C, c) {
        a = m, l = C, f = c, h();
      },
      cleanup() {
        _.cleanup(), t.removeEventListener("pointerdown", u), t.removeEventListener("pointermove", v), t.removeEventListener("pointerup", p), t.removeEventListener("pointercancel", p), t.removeEventListener("pointerleave", p);
      }
    };
  }
}
function Wu(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (l, f) => {
    l.forEach((h, b) => {
      const y = 2 * Math.PI * b / Math.max(1, l.length) - Math.PI / 2;
      h.x = o + f * Math.cos(y), h.y = s + f * Math.sin(y), h.fx = r === "Force-directed" ? void 0 : h.x, h.fy = r === "Force-directed" ? void 0 : h.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((S) => [S["gufe-key"], []]));
    for (const S of i)
      l.get(S.from["gufe-key"]).push(S.to["gufe-key"]), l.get(S.to["gufe-key"]).push(S.from["gufe-key"]);
    const f = new Map(e.map((S) => [S["gufe-key"], S])), h = e.reduce(
      (S, u) => l.get(u["gufe-key"]).length > l.get(S["gufe-key"]).length ? u : S
    ), b = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let y = [h["gufe-key"]], $ = 0;
    const _ = Math.min(t, n) * 0.18;
    for (; y.length; ) {
      a(
        y.map((u) => f.get(u)),
        $ === 0 ? 0 : $ * _ + 40
      );
      const S = [];
      for (const u of y)
        for (const v of l.get(u))
          b.has(v) || (b.add(v), S.push(v));
      y = S, $++;
    }
    a(e.filter((S) => !b.has(S["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Ju(e, t, n, r) {
  let i;
  try {
    if (i = await ls(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((l) => l["gufe-key"]).distance((l) => Se.linkBaseDistance + (1 - (l.score ?? 0.5)) * Se.linkScoreBonus).strength(Se.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength(Se.chargeStrength).distanceMin(Se.chargeDistanceMin).distanceMax(Se.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, r / 2).strength(Se.centerStrength)).force("collision", i.forceCollide(et + Se.collisionPadding).iterations(Se.collisionIterations)).force("x", i.forceX(n / 2).strength(Se.drift)).force("y", i.forceY(r / 2).strength(Se.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * Se.tickMultiplier; l++) s.tick();
  return !0;
}
Re("gufe-ligand-network", Gu);
const _t = { width: 148, height: 46, radius: 10 }, lt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, St = ht;
function Yu(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Xu(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
async function Zu(e, t, n, r) {
  let i;
  try {
    if (i = await ls(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((l) => l["gufe-key"]).distance(lt.linkDistance).strength(lt.linkStrength)
  ).force("charge", i.forceManyBody().strength(lt.chargeStrength)).force("center", i.forceCenter(n / 2, r / 2)).force("collision", i.forceCollide(lt.collisionRadius).iterations(lt.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * lt.tickMultiplier; l++) s.tick();
  return !0;
}
class Qu extends Ae {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Nt(n), i = [];
    let o = 0;
    for (const d of n.nodes ?? []) {
      const g = je(r, d, "ChemicalSystemViz");
      if (!g) {
        o++;
        continue;
      }
      i.push({ ...g, x: 0, y: 0 });
    }
    const s = new Map(i.map((d) => [d["gufe-key"], d])), a = [];
    let l = 0;
    for (const d of n.edges ?? []) {
      const g = s.get(d.stateA), k = s.get(d.stateB);
      if (!g || !k) {
        l++;
        continue;
      }
      a.push({ ...d, index: a.length, from: g, to: k });
    }
    const f = (d) => {
      const g = je(r, d.protocol, "ProtocolViz");
      return g?.gufe_type || g?.name || "";
    }, h = new Set(a.map(f).filter(Boolean)), b = Ge(n.name || "Alchemical network");
    b.statsEl.appendChild(pe("systems", String(i.length))), b.statsEl.appendChild(pe("transformations", String(a.length))), h.size && b.statsEl.appendChild(pe("protocol", [...h].join(", "))), t.appendChild(b);
    const y = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    const $ = T("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`);
    y.appendChild($), y.appendChild(T("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`));
    const _ = T("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${M.appBg};`);
    y.appendChild(_);
    const S = this.#t(_, r, f);
    if (!i.length)
      return $.appendChild(
        le(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), S.message("Nothing to show."), {};
    o && Xe(
      $,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Xe(
      $,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let u = !0, v = !1, p = null, m = () => {
    };
    const C = (d, g) => {
      p = { kind: d, index: g }, S.show(d === "node" ? i[g] : a[g], d), m();
    }, c = () => {
      $.querySelector("svg")?.remove();
      const d = $.clientWidth || 800, g = $.clientHeight || 600;
      Xu(i, d, g);
      const k = () => {
        if (!u) return;
        const E = this.#e($, i, a, d, g, C);
        m = () => E.setSelected(p), m();
      };
      if (v) {
        k();
        return;
      }
      Zu(i, a, d, g).then((E) => {
        u && (E || (v = !0, Xe($, "d3 could not be loaded - showing the circular layout instead")), k());
      }, k);
    };
    return c(), C("node", 0), {
      onResize: () => c(),
      cleanup: () => {
        u = !1;
      }
    };
  }
  /** The right-hand pane: what the selected system or transformation is. */
  #t(t, n, r) {
    t.appendChild(
      T(
        "div",
        xt,
        "Selected"
      )
    );
    const i = T("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(i);
    const o = (l) => i.replaceChildren(le(l)), s = (l, f) => {
      const h = T(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${M.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return h.appendChild(T("div", `font-size:${J.heading};font-weight:600;color:${M.textPrimary};`, l)), h.appendChild(T("div", `font-size:${J.small};color:${M.textMuted2};`, f)), h;
    };
    return { show: (l, f) => {
      if (i.replaceChildren(), f === "node") {
        const y = l;
        i.appendChild(s(St(y), "ChemicalSystem"));
        const $ = T("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), _ = Object.entries(y.components ?? {});
        for (const [S, u] of _) {
          const v = Qe(n, u), p = T(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${M.cardBg};border:1px solid ${M.cardBorder};`
          );
          p.appendChild(T("span", `font-size:${J.body};font-weight:700;color:${M.textPrimary};`, S)), p.appendChild(
            T(
              "span",
              `font-size:${J.small};color:${M.textMuted};overflow-wrap:anywhere;min-width:0;`,
              v ? v.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const m = Rt(
            v ? v.type === "UnknownComponentViz" ? v.gufe_type : v.type.replace(/Viz$/, "") : "missing"
          );
          m.style.marginLeft = "auto", p.appendChild(m), $.appendChild(p);
        }
        _.length || $.appendChild(T("div", `font-size:${J.body};color:${M.textMuted2};`, "This system lists no components.")), i.appendChild($), i.appendChild(
          T(
            "div",
            `padding:0 14px 12px;font-size:${J.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${M.textMuted2};overflow-wrap:anywhere;`,
            y["gufe-key"]
          )
        );
        return;
      }
      const h = l;
      i.appendChild(s(h.name || "Unnamed transformation", "Transformation"));
      const b = T("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [y, $] of [
        ["State A", St(h.from)],
        ["State B", St(h.to)],
        ["Protocol", r(h) || "-"]
      ]) {
        const _ = T("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        _.appendChild(
          T(
            "span",
            `flex:0 0 76px;font-size:${J.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
            y
          )
        ), _.appendChild(T("span", `flex:1;min-width:0;font-size:${J.body};color:${M.textPrimary};overflow-wrap:anywhere;`, $)), b.appendChild(_);
      }
      i.appendChild(b), i.appendChild(
        T(
          "div",
          `padding:0 14px 12px;font-size:${J.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${M.textMuted2};overflow-wrap:anywhere;`,
          h["gufe-key"]
        )
      );
    }, message: o };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, r, i, o, s) {
    const a = se("svg", { width: i, height: o, style: "display:block;" });
    t.appendChild(a);
    const l = se("g"), f = se("g");
    a.append(l, f);
    const h = [];
    r.forEach((y, $) => {
      const _ = se("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      jn(_, y.name || "transformation"), _.addEventListener("click", () => s("edge", $)), l.appendChild(_), h.push(_);
      const S = se("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      S.addEventListener("click", () => s("edge", $)), l.appendChild(S);
    });
    const b = [];
    return n.forEach((y, $) => {
      const _ = se("g", { style: "cursor:pointer;" }), S = se("rect", {
        x: y.x - _t.width / 2,
        y: y.y - _t.height / 2,
        width: _t.width,
        height: _t.height,
        rx: _t.radius,
        fill: M.cardBg,
        stroke: M.cardBorder,
        "stroke-width": 2
      });
      _.appendChild(S), b.push(S);
      const u = se("text", {
        x: y.x,
        y: y.y - 2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = Yu(St(y), 20), _.appendChild(u);
      const v = Object.keys(y.components ?? {}).length, p = se("text", {
        x: y.x,
        y: y.y + 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      p.textContent = `${v} component${v === 1 ? "" : "s"}`, _.appendChild(p), jn(_, St(y)), _.addEventListener("click", () => s("node", $)), f.appendChild(_);
    }), {
      setSelected(y) {
        b.forEach(($, _) => {
          const S = y?.kind === "node" && y.index === _;
          $.setAttribute("stroke", S ? M.cardBorderActive : M.cardBorder), $.setAttribute("stroke-width", S ? "3" : "2");
        }), h.forEach(($, _) => {
          const S = y?.kind === "edge" && y.index === _;
          $.setAttribute("stroke", S ? M.netHaloColor : M.netEdgeLine), $.setAttribute("stroke-width", S ? "4" : "2");
        });
      }
    };
  }
}
Re("gufe-alchemical-network", Qu);
function ef(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function tf(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class nf extends Ae {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Nt(n), i = [], o = [];
    for (const [_, S] of Object.entries(n.components ?? {})) {
      const u = Qe(r, S);
      u ? i.push([_, u]) : o.push(_);
    }
    const s = Ge(n.name || "Chemical system");
    if (s.statsEl.appendChild(pe("components", String(i.length))), t.appendChild(s), !i.length)
      return t.appendChild(
        le(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), o.length && Xe(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const l = T(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${M.panelBg};border-right:1px solid ${M.splitBorder};`
    );
    a.appendChild(l);
    const f = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(f);
    const h = T("div", "flex:1;min-height:0;display:flex;");
    f.appendChild(h);
    const b = document.createElement("gufe-view");
    b.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(b);
    const y = [], $ = (_) => {
      y.forEach((S, u) => {
        const v = u === _;
        S.style.background = v ? M.cardBgActive : M.cardBg, S.style.borderColor = v ? M.cardBorderActive : M.cardBorder;
      }), b.payload = i[_][1];
    };
    return i.forEach(([_, S], u) => {
      const v = T(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${M.cardBorder};border-radius:8px;background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:${J.body};width:100%;`
      );
      v.appendChild(T("span", `font-weight:700;color:${M.textPrimary};`, _)), v.appendChild(T("span", `font-size:${J.small};color:${M.textMuted};`, ef(S))), v.appendChild(Rt(tf(S))), v.onclick = () => $(u), y.push(v), l.appendChild(v);
    }), $(0), {
      onResize: () => b.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => b.remove()
    };
  }
}
Re("gufe-chemical-system", nf);
class rf extends Ae {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Ge(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Rt(n.gufe_type)), t.appendChild(r);
    const i = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = Fn();
    return o.style.maxWidth = "460px", o.appendChild(Oe("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Oe("Name", n.name)), o.appendChild(Oe("gufe key", n["gufe-key"], !0)), o.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${J.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Re("gufe-protocol", rf);
const xe = { width: 340, height: 260, padding: 14, radius: 12 }, of = 150, sf = 40, af = 24;
function cf(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function lf(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function df(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(af, Math.round(e * sf)));
}
function uf(e) {
  const t = se("svg", {
    viewBox: `0 0 ${xe.width} ${xe.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  jn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    se("rect", {
      x: 1,
      y: 1,
      width: xe.width - 2,
      height: xe.height - 2,
      rx: xe.radius,
      fill: M.boxFill,
      stroke: M.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = cf(1597463007), r = () => ({
    x: xe.padding + n() * (xe.width - 2 * xe.padding),
    y: xe.padding + n() * (xe.height - 2 * xe.padding)
  });
  for (let s = 0; s < of; s++) {
    const { x: a, y: l } = r();
    t.appendChild(se("circle", { cx: a, cy: l, r: 2.4, fill: M.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = df(lf(e.ion_concentration)), o = [
    [e.positive_ion, M.diffAdded],
    [e.negative_ion, M.diffRemoved]
  ];
  for (const [s, a] of o)
    for (let l = 0; l < i; l++) {
      const { x: f, y: h } = r(), b = se("circle", { cx: f, cy: h, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(jn(b, s));
    }
  return t;
}
class ff extends Ae {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = Ge(n.name || "Solvent");
    r.statsEl.appendChild(pe("neutralized", n.neutralize ? "yes" : "no")), r.statsEl.appendChild(pe(n.positive_ion, "", M.diffAdded)), r.statsEl.appendChild(pe(n.negative_ion, "", M.diffRemoved)), t.appendChild(r);
    const i = T(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(i);
    const o = Fn();
    o.style.flex = "1 1 320px", o.appendChild(Oe("SMILES", n.smiles, !0)), o.appendChild(Oe("Positive ion", n.positive_ion)), o.appendChild(Oe("Negative ion", n.negative_ion)), o.appendChild(Oe("Ion concentration", n.ion_concentration)), o.appendChild(Oe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(o);
    const s = Fn();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(uf(n)), s.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${J.small};text-align:center;color:${M.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(s), {};
  }
}
Re("gufe-solvent", ff);
const wr = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function pf(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function hf(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function mf(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function qi(e, t) {
  const n = T(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${M.cardBg};border:1px solid ${M.cardBorder};`
  ), r = mf(e);
  return r ? (n.style.borderColor = t === "unchanged" ? M.cardBorder : wr[t], n.appendChild(T("span", `font-size:${J.body};font-weight:600;color:${M.textPrimary};`, r.name)), n.appendChild(Rt(r.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(T("span", `font-size:${J.body};color:${M.textMuted2};`, "absent")), n);
}
function gf(e, t) {
  const n = Qe(t, e.componentA), r = Qe(t, e.componentB);
  return `${n ? ht(n) : "A"} to ${r ? ht(r) : "B"}`;
}
class yf extends Ae {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Nt(n), i = je(r, n.stateA, "ChemicalSystemViz"), o = je(r, n.stateB, "ChemicalSystemViz"), s = je(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = Ge(n.name || "Transformation");
    if (l.statsEl.appendChild(pe("protocol", s?.gufe_type || s?.name || "-")), l.statsEl.appendChild(pe("mappings", String(a.length))), t.appendChild(l), !i || !o)
      return t.appendChild(
        le("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const f = hf(i, o), h = T("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const b = T("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [u, v] of [
      ["State A", i],
      ["State B", o]
    ])
      b.appendChild(
        T(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${J.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${M.textMuted2};`,
          `${u}${v.name ? ` - ${v.name}` : ""}`
        )
      );
    h.appendChild(b);
    for (const u of f) {
      const v = i.components?.[u], p = o.components?.[u], m = pf(v, p), C = Qe(r, v), c = Qe(r, p), d = T("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), g = T("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      g.appendChild(
        T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${wr[m]};`)
      );
      const k = T("span", `font-size:${J.body};font-weight:700;color:${M.textPrimary};overflow-wrap:anywhere;`, u);
      k.title = m, g.appendChild(k), d.appendChild(g), d.appendChild(qi(C, m)), d.appendChild(qi(c, m)), h.appendChild(d);
    }
    const y = T(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${J.small};color:${M.textMuted};`
    );
    for (const u of ["unchanged", "changed", "added", "removed"])
      y.appendChild(pe(u, "", wr[u]));
    h.appendChild(y);
    const $ = T(
      "div",
      xt,
      "Atom mapping"
    );
    if (t.appendChild($), !a.length)
      return t.appendChild(
        le(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const _ = document.createElement("gufe-atom-mapping");
    _.style.cssText = "flex:1;min-height:0;min-width:0;";
    const S = (u) => {
      _.payload = vs(a[u], r);
    };
    if (S(0), a.length > 1) {
      const u = T(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${J.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      u.appendChild(
        In(
          a.map((v, p) => ({
            id: String(p),
            label: v.name || gf(v, r)
          })),
          "0",
          (v) => S(Number(v))
        )
      ), t.appendChild(u);
    }
    return t.appendChild(_), {
      onResize: () => _.resize?.(),
      cleanup: () => _.remove()
    };
  }
}
Re("gufe-transformation", yf);
class vf extends Ae {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Ge(n.name || "Unnamed component");
    r.statsEl.appendChild(Rt(n.gufe_type)), t.appendChild(r);
    const i = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = Fn();
    return o.style.maxWidth = "460px", o.appendChild(
      T(
        "div",
        `font-size:${J.heading};font-weight:600;padding-bottom:6px;color:${M.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      T(
        "div",
        `font-size:${J.body};line-height:1.6;padding-bottom:10px;color:${M.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Oe("Name", n.name || "(unnamed)")), o.appendChild(Oe("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
Re("gufe-unknown-component", vf);
function Cf(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Ki, reset: Vs });
export {
  ea as CHROME_OPEN_BY_DEFAULT,
  Ps as DEBUG_ATTRIBUTE,
  As as DEBUG_GLOBAL,
  _d as DEFAULT_DEPICT_STYLE,
  Ul as DEFAULT_ZOOM_BOUNDS,
  ut as DEPICT_STYLE,
  Pd as DEPICT_STYLE_RANGES,
  Qu as GufeAlchemicalNetwork,
  wu as GufeAtomMapping,
  nf as GufeChemicalSystem,
  Ae as GufeElement,
  Gu as GufeLigandNetwork,
  eu as GufeProtein,
  rf as GufeProtocol,
  Wd as GufeSmallMolecule,
  ff as GufeSolvent,
  yf as GufeTransformation,
  vf as GufeUnknownComponent,
  Dl as GufeView,
  sr as MAPPING_COLORS,
  Jl as MAPPING_RAMP_3D,
  Sf as MAPPING_RAMP_NAME,
  $f as PAYLOAD_TYPES,
  bf as SCHEMA_TYPES,
  Nr as VIEW_TAGS,
  lu as align2D,
  fu as alignedToPartner,
  cu as applyRT,
  du as applyTurn,
  Hl as boundedZoom,
  Nt as buildRegistry,
  pt as choice,
  oa as chromeMenu,
  Bi as debugEnabled,
  Re as defineElement,
  as as describeProblem,
  pf as diffStatus,
  _f as dispatchProblem,
  ht as entryLabel,
  Ct as flag,
  zl as formatIssues,
  jr as guardWheel,
  au as kabsch,
  Ni as laidOut,
  pu as layoutPair,
  vu as liftFor,
  Fs as logPayload,
  Qe as lookup,
  je as lookupOfType,
  vs as mappingPayloadFor,
  Od as markGroups,
  ar as markedBonds,
  Cf as mount,
  Rd as normaliseDepictStyle,
  Ds as num,
  $u as openfeShift,
  bu as pairColour,
  Nd as parseAtomSpec,
  lf as parseConcentration,
  Ms as payloadJson,
  zr as resetControl,
  Vs as resetSettings,
  Bu as selectionText,
  zn as setting,
  Ki as settings,
  Ur as textSetting,
  Fi as uniqueAtoms,
  Fd as uniqueBonds,
  wf as validateAs,
  jl as validatePayload,
  ds as viewerInteraction,
  Wl as wheelFactor,
  uu as withCoords
};
