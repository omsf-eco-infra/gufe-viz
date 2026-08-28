const qr = {
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
function ws() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const M = ws() ? qr.dark : qr.light, J = {
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
}, kt = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: M.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: M.canvas2DBg
}, ye = {
  base: `background:${M.btnBg};color:${M.btnFg};border:1px solid ${M.btnBorder};padding:${ce.sm} 9px;font-size:${J.small};font-weight:${He.bold};border-radius:${mt.sm};cursor:pointer;font-family:inherit;`,
  bg: M.btnBg,
  bgHover: M.btnBgHover,
  bgActive: M.btnBgActive
}, _s = `background:${M.selectBg};color:${M.textPrimary};border:1px solid ${M.selectBorder};border-radius:${mt.md};padding:${ce.sm} ${ce.lg};font-size:${J.body};cursor:pointer;font-family:inherit;`, Ss = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${ce.xxl};flex-shrink:0;background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};`, qi = {
  top: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;font-size:${J.body};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};`
}, Et = `flex-shrink:0;padding:${ce.sm} ${ce.xl};font-size:${J.heading};font-weight:${He.bold};color:${M.labelFg};background:${M.labelBg};`, Cs = `display:flex;flex-direction:column;gap:${ce.xs};padding:${ce.xxl} 18px;border-radius:${mt.xl};background:${M.cardBg};border:1px solid ${M.cardBorder};`, Vi = `position:absolute;bottom:${ce.xl};right:${ce.xl};display:flex;gap:${ce.sm};padding:${ce.sm};border-radius:${mt.md};z-index:10;background:${M.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Vr = `font-family:${J.mono};font-size:${J.small};line-height:1.7;color:${M.textMuted};`, Lr = `font-size:${J.small};font-weight:${He.bold};letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`, ks = `font-size:${J.small};line-height:1.6;color:${M.textMuted2};`, Es = ["debug", "gufe-debug"], xs = "debug", Ps = "GUFE_VIZ_DEBUG";
function As() {
  return !!globalThis[Ps];
}
function Rs() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Es.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function Li(e) {
  return e?.hasAttribute?.(xs) ? !0 : As() || Rs();
}
function Ns(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ge(t)}>`;
  }
}
function Ms(e, t, n) {
  if (!Li(n)) return;
  const r = Ns(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const Bi = "GUFE_VIZ_VIEW_STATE";
function Fs(e) {
  const t = globalThis[Bi];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const Os = 150;
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
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), Os);
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
let Nt = null;
function Ts() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Pt() {
  if (Nt === !1) return null;
  const e = Ts();
  if (!e)
    return Nt = !1, null;
  try {
    const t = `${Ce}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Nt = !0, e;
  } catch {
    return Nt = !1, null;
  }
}
function js(e) {
  const t = Pt();
  if (!t) return Ke.get(Ce + e) ?? null;
  try {
    return t.getItem(Ce + e);
  } catch {
    return null;
  }
}
function zs(e, t) {
  const n = Pt();
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
function jn(e, t, n) {
  return {
    key: e,
    get() {
      const r = js(e);
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
        zs(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function pt(e, t, n) {
  return jn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function Ct(e, t) {
  return jn(e, t, (n) => typeof n == "boolean");
}
function Is(e, t, n = -1 / 0, r = 1 / 0) {
  return jn(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function Br(e, t = "") {
  return jn(e, t, (n) => typeof n == "string");
}
function Ui() {
  const e = {}, t = Pt(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
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
function Ds() {
  const e = {}, t = Pt(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ke.keys());
  for (const r of n) {
    if (!r.startsWith(Ce)) continue;
    const i = t ? t.getItem(r) : Ke.get(r) ?? null;
    i !== null && (e[r] = i);
  }
  return e;
}
function qs() {
  const e = Pt();
  if (e)
    for (const t of Object.keys(Ui()))
      try {
        e.removeItem(Ce + t);
      } catch {
      }
  Ke.clear();
}
const Ki = "https://framejs.app", Hi = 1e4;
function Vs(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const Ls = "/gufe-dev-bundle.js";
function Bs() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= Hi ? e : null;
}
async function Us() {
  const e = Bs();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(Ls);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < Hi ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function Ks() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Hs(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Ce)};`,
    `  const menuOpen = ${JSON.stringify(Ji)};`,
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
    `globalThis[${JSON.stringify(Bi)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function Gs(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...Hs(n),
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
function Ws(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [i, o] of Object.entries(Ds()))
    i.endsWith(Ji) || (r[i] = o);
  return { settings: r, views: t };
}
const Js = (e) => `${Ki}/j/${e}`, Ys = (e) => `${Ki}/j/${e}.json`;
async function Xs(e, t, n) {
  await fetch(Ys(e), {
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
function Zs(e) {
  if (!Li()) return;
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
    const s = Vs(e);
    if (!s || s.payload == null) {
      i("Could not find the payload for this view.", !0);
      return;
    }
    const a = s.payload, l = Ws(s), p = window.open("", "_blank"), h = Ks(), b = a, y = String(b.name || b.type || "gufe-viz"), $ = () => {
      n.disabled = !1;
    };
    n.disabled = !0, i("Uploading..."), Us().then((w) => {
      if (!w) {
        p?.close(), $(), i(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return Xs(h, Gs(w.js, a, l), y).then(() => {
        $();
        const _ = Js(h);
        p && (p.location.href = _), o(_, w.note);
      });
    }).catch((w) => {
      $(), p?.close(), i(`Upload failed: ${w instanceof Error ? w.message : String(w)}`, !0);
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
const yt = (e) => e.toLocaleString("en-US"), dt = "-", xt = ye.base, fr = _s;
function zn(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const i = T("div", "display:flex;gap:4px;"), o = e.map((s) => {
    const a = T("button", xt, s.label);
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
function wr(e, t, n, r) {
  const i = T("select", fr);
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
function Gi(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = T("button", xt, e);
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
  const t = T("div", Ss);
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
function At(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${mt.xl};font-size:${J.tiny};font-weight:${He.bold};letter-spacing:.04em;white-space:nowrap;background:${M.badgeBg};color:${M.badgeFg};`,
    e
  );
}
function Mn() {
  return T("div", Cs);
}
function Wi() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const Qs = !1, Ji = ".menuOpen";
function ea() {
  const e = T("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const ta = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: ea
}, na = ta.openFreeEnergy;
function ra(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Qs, i = !1;
  const o = T("div", "flex-shrink:0;"), s = T("button", `${ye.base}display:inline-flex;align-items:center;gap:${ce.md};padding:${ce.sm} ${ce.lg};`);
  s.appendChild(na()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t()), Zs(o)), o.style.display = r ? "" : "none", s.style.background = r ? ye.bgActive : ye.bg, s.setAttribute("aria-expanded", String(r));
  }, l = (p) => {
    p !== r && (r = p, a(), n.remember?.set(r), n.onToggle?.(r));
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
function oa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mt = { exports: {} }, Gn = {}, ze = {}, We = {}, Wn = {}, Jn = {}, Yn = {}, Ur;
function Fn() {
  return Ur || (Ur = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(f) {
        if (super(), !e.IDENTIFIER.test(f))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = f;
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
      constructor(f) {
        super(), this._items = typeof f == "string" ? [f] : f;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const f = this._items[0];
        return f === "" || f === '""';
      }
      get str() {
        var f;
        return (f = this._str) !== null && f !== void 0 ? f : this._str = this._items.reduce((m, C) => `${m}${C}`, "");
      }
      get names() {
        var f;
        return (f = this._names) !== null && f !== void 0 ? f : this._names = this._items.reduce((m, C) => (C instanceof n && (m[C.str] = (m[C.str] || 0) + 1), m), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function i(v, ...f) {
      const m = [v[0]];
      let C = 0;
      for (; C < f.length; )
        a(m, f[C]), m.push(v[++C]);
      return new r(m);
    }
    e._ = i;
    const o = new r("+");
    function s(v, ...f) {
      const m = [$(v[0])];
      let C = 0;
      for (; C < f.length; )
        m.push(o), a(m, f[C]), m.push(o, $(v[++C]));
      return l(m), new r(m);
    }
    e.str = s;
    function a(v, f) {
      f instanceof r ? v.push(...f._items) : f instanceof n ? v.push(f) : v.push(b(f));
    }
    e.addCodeArg = a;
    function l(v) {
      let f = 1;
      for (; f < v.length - 1; ) {
        if (v[f] === o) {
          const m = p(v[f - 1], v[f + 1]);
          if (m !== void 0) {
            v.splice(f - 1, 3, m);
            continue;
          }
          v[f++] = "+";
        }
        f++;
      }
    }
    function p(v, f) {
      if (f === '""')
        return v;
      if (v === '""')
        return f;
      if (typeof v == "string")
        return f instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof f != "string" ? `${v.slice(0, -1)}${f}"` : f[0] === '"' ? v.slice(0, -1) + f.slice(1) : void 0;
      if (typeof f == "string" && f[0] === '"' && !(v instanceof n))
        return `"${v}${f.slice(1)}`;
    }
    function h(v, f) {
      return f.emptyStr() ? v : v.emptyStr() ? f : s`${v}${f}`;
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
    function w(v) {
      return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : i`[${v}]`;
    }
    e.getProperty = w;
    function _(v) {
      if (typeof v == "string" && e.IDENTIFIER.test(v))
        return new r(`${v}`);
      throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function u(v) {
      return new r(v.toString());
    }
    e.regexpCode = u;
  })(Yn)), Yn;
}
var Xn = {}, Kr;
function Hr() {
  return Kr || (Kr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Fn();
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
    class i {
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
        var h, b;
        if (!((b = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || b === void 0) && b.has(p) || this._prefixes && !this._prefixes.has(p))
          throw new Error(`CodeGen: prefix "${p}" is not allowed in this scope`);
        return this._names[p] = { prefix: p, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(p, h) {
        super(h), this.prefix = p;
      }
      setValue(p, { property: h, itemIndex: b }) {
        this.value = p, this.scopePath = (0, t._)`.${new t.Name(h)}[${b}]`;
      }
    }
    e.ValueScopeName = o;
    const s = (0, t._)`\n`;
    class a extends i {
      constructor(p) {
        super(p), this._values = {}, this._scope = p.scope, this.opts = { ...p, _n: p.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(p) {
        return new o(p, this._newName(p));
      }
      value(p, h) {
        var b;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const y = this.toName(p), { prefix: $ } = y, w = (b = h.key) !== null && b !== void 0 ? b : h.ref;
        let _ = this._values[$];
        if (_) {
          const f = _.get(w);
          if (f)
            return f;
        } else
          _ = this._values[$] = /* @__PURE__ */ new Map();
        _.set(w, y);
        const u = this._scope[$] || (this._scope[$] = []), v = u.length;
        return u[v] = h.ref, y.setValue(h, { property: $, itemIndex: v }), y;
      }
      getValue(p, h) {
        const b = this._values[p];
        if (b)
          return b.get(h);
      }
      scopeRefs(p, h = this._values) {
        return this._reduceValues(h, (b) => {
          if (b.scopePath === void 0)
            throw new Error(`CodeGen: name "${b}" has no value`);
          return (0, t._)`${p}${b.scopePath}`;
        });
      }
      scopeCode(p = this._values, h, b) {
        return this._reduceValues(p, (y) => {
          if (y.value === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return y.value.code;
        }, h, b);
      }
      _reduceValues(p, h, b = {}, y) {
        let $ = t.nil;
        for (const w in p) {
          const _ = p[w];
          if (!_)
            continue;
          const u = b[w] = b[w] || /* @__PURE__ */ new Map();
          _.forEach((v) => {
            if (u.has(v))
              return;
            u.set(v, r.Started);
            let f = h(v);
            if (f) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              $ = (0, t._)`${$}${m} ${v} = ${f};${this.opts._n}`;
            } else if (f = y?.(v))
              $ = (0, t._)`${$}${f}${this.opts._n}`;
            else
              throw new n(v);
            u.set(v, r.Completed);
          });
        }
        return $;
      }
    }
    e.ValueScope = a;
  })(Xn)), Xn;
}
var Gr;
function re() {
  return Gr || (Gr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Fn(), n = /* @__PURE__ */ Hr();
    var r = /* @__PURE__ */ Fn();
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
    var i = /* @__PURE__ */ Hr();
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
      optimizeNames(S, E) {
        return this;
      }
    }
    class s extends o {
      constructor(S, E, z) {
        super(), this.varKind = S, this.name = E, this.rhs = z;
      }
      render({ es5: S, _n: E }) {
        const z = S ? n.varKinds.var : this.varKind, W = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${z} ${this.name}${W};` + E;
      }
      optimizeNames(S, E) {
        if (S[this.name.str])
          return this.rhs && (this.rhs = H(this.rhs, S, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends o {
      constructor(S, E, z) {
        super(), this.lhs = S, this.rhs = E, this.sideEffects = z;
      }
      render({ _n: S }) {
        return `${this.lhs} = ${this.rhs};` + S;
      }
      optimizeNames(S, E) {
        if (!(this.lhs instanceof t.Name && !S[this.lhs.str] && !this.sideEffects))
          return this.rhs = H(this.rhs, S, E), this;
      }
      get names() {
        const S = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return I(S, this.rhs);
      }
    }
    class l extends a {
      constructor(S, E, z, W) {
        super(S, z, W), this.op = E;
      }
      render({ _n: S }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + S;
      }
    }
    class p extends o {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `${this.label}:` + S;
      }
    }
    class h extends o {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `break${this.label ? ` ${this.label}` : ""};` + S;
      }
    }
    class b extends o {
      constructor(S) {
        super(), this.error = S;
      }
      render({ _n: S }) {
        return `throw ${this.error};` + S;
      }
      get names() {
        return this.error.names;
      }
    }
    class y extends o {
      constructor(S) {
        super(), this.code = S;
      }
      render({ _n: S }) {
        return `${this.code};` + S;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(S, E) {
        return this.code = H(this.code, S, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class $ extends o {
      constructor(S = []) {
        super(), this.nodes = S;
      }
      render(S) {
        return this.nodes.reduce((E, z) => E + z.render(S), "");
      }
      optimizeNodes() {
        const { nodes: S } = this;
        let E = S.length;
        for (; E--; ) {
          const z = S[E].optimizeNodes();
          Array.isArray(z) ? S.splice(E, 1, ...z) : z ? S[E] = z : S.splice(E, 1);
        }
        return S.length > 0 ? this : void 0;
      }
      optimizeNames(S, E) {
        const { nodes: z } = this;
        let W = z.length;
        for (; W--; ) {
          const B = z[W];
          B.optimizeNames(S, E) || (X(S, B.names), z.splice(W, 1));
        }
        return z.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((S, E) => P(S, E.names), {});
      }
    }
    class w extends $ {
      render(S) {
        return "{" + S._n + super.render(S) + "}" + S._n;
      }
    }
    class _ extends $ {
    }
    class u extends w {
    }
    u.kind = "else";
    class v extends w {
      constructor(S, E) {
        super(E), this.condition = S;
      }
      render(S) {
        let E = `if(${this.condition})` + super.render(S);
        return this.else && (E += "else " + this.else.render(S)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const S = this.condition;
        if (S === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const z = E.optimizeNodes();
          E = this.else = Array.isArray(z) ? new u(z) : z;
        }
        if (E)
          return S === !1 ? E instanceof v ? E : E.nodes : this.nodes.length ? this : new v(Q(S), E instanceof v ? [E] : E.nodes);
        if (!(S === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(S, E) {
        var z;
        if (this.else = (z = this.else) === null || z === void 0 ? void 0 : z.optimizeNames(S, E), !!(super.optimizeNames(S, E) || this.else))
          return this.condition = H(this.condition, S, E), this;
      }
      get names() {
        const S = super.names;
        return I(S, this.condition), this.else && P(S, this.else.names), S;
      }
    }
    v.kind = "if";
    class f extends w {
    }
    f.kind = "for";
    class m extends f {
      constructor(S) {
        super(), this.iteration = S;
      }
      render(S) {
        return `for(${this.iteration})` + super.render(S);
      }
      optimizeNames(S, E) {
        if (super.optimizeNames(S, E))
          return this.iteration = H(this.iteration, S, E), this;
      }
      get names() {
        return P(super.names, this.iteration.names);
      }
    }
    class C extends f {
      constructor(S, E, z, W) {
        super(), this.varKind = S, this.name = E, this.from = z, this.to = W;
      }
      render(S) {
        const E = S.es5 ? n.varKinds.var : this.varKind, { name: z, from: W, to: B } = this;
        return `for(${E} ${z}=${W}; ${z}<${B}; ${z}++)` + super.render(S);
      }
      get names() {
        const S = I(super.names, this.from);
        return I(S, this.to);
      }
    }
    class c extends f {
      constructor(S, E, z, W) {
        super(), this.loop = S, this.varKind = E, this.name = z, this.iterable = W;
      }
      render(S) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(S);
      }
      optimizeNames(S, E) {
        if (super.optimizeNames(S, E))
          return this.iterable = H(this.iterable, S, E), this;
      }
      get names() {
        return P(super.names, this.iterable.names);
      }
    }
    class d extends w {
      constructor(S, E, z) {
        super(), this.name = S, this.args = E, this.async = z;
      }
      render(S) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(S);
      }
    }
    d.kind = "func";
    class g extends $ {
      render(S) {
        return "return " + super.render(S);
      }
    }
    g.kind = "return";
    class k extends w {
      render(S) {
        let E = "try" + super.render(S);
        return this.catch && (E += this.catch.render(S)), this.finally && (E += this.finally.render(S)), E;
      }
      optimizeNodes() {
        var S, E;
        return super.optimizeNodes(), (S = this.catch) === null || S === void 0 || S.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(S, E) {
        var z, W;
        return super.optimizeNames(S, E), (z = this.catch) === null || z === void 0 || z.optimizeNames(S, E), (W = this.finally) === null || W === void 0 || W.optimizeNames(S, E), this;
      }
      get names() {
        const S = super.names;
        return this.catch && P(S, this.catch.names), this.finally && P(S, this.finally.names), S;
      }
    }
    class x extends w {
      constructor(S) {
        super(), this.error = S;
      }
      render(S) {
        return `catch(${this.error})` + super.render(S);
      }
    }
    x.kind = "catch";
    class O extends w {
      render(S) {
        return "finally" + super.render(S);
      }
    }
    O.kind = "finally";
    class A {
      constructor(S, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = S, this._scope = new n.Scope({ parent: S }), this._nodes = [new _()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(S) {
        return this._scope.name(S);
      }
      // reserves unique name in the external scope
      scopeName(S) {
        return this._extScope.name(S);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(S, E) {
        const z = this._extScope.value(S, E);
        return (this._values[z.prefix] || (this._values[z.prefix] = /* @__PURE__ */ new Set())).add(z), z;
      }
      getScopeValue(S, E) {
        return this._extScope.getValue(S, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(S) {
        return this._extScope.scopeRefs(S, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(S, E, z, W) {
        const B = this._scope.toName(E);
        return z !== void 0 && W && (this._constants[B.str] = z), this._leafNode(new s(S, B, z)), B;
      }
      // `const` declaration (`var` in es5 mode)
      const(S, E, z) {
        return this._def(n.varKinds.const, S, E, z);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(S, E, z) {
        return this._def(n.varKinds.let, S, E, z);
      }
      // `var` declaration with optional assignment
      var(S, E, z) {
        return this._def(n.varKinds.var, S, E, z);
      }
      // assignment code
      assign(S, E, z) {
        return this._leafNode(new a(S, E, z));
      }
      // `+=` code
      add(S, E) {
        return this._leafNode(new l(S, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(S) {
        return typeof S == "function" ? S() : S !== t.nil && this._leafNode(new y(S)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...S) {
        const E = ["{"];
        for (const [z, W] of S)
          E.length > 1 && E.push(","), E.push(z), (z !== W || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, W));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(S, E, z) {
        if (this._blockNode(new v(S)), E && z)
          this.code(E).else().code(z).endIf();
        else if (E)
          this.code(E).endIf();
        else if (z)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(S) {
        return this._elseNode(new v(S));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new u());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, u);
      }
      _for(S, E) {
        return this._blockNode(S), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(S, E) {
        return this._for(new m(S), E);
      }
      // `for` statement for a range of values
      forRange(S, E, z, W, B = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Z = this._scope.toName(S);
        return this._for(new C(B, Z, E, z), () => W(Z));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(S, E, z, W = n.varKinds.const) {
        const B = this._scope.toName(S);
        if (this.opts.es5) {
          const Z = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${Z}.length`, (te) => {
            this.var(B, (0, t._)`${Z}[${te}]`), z(B);
          });
        }
        return this._for(new c("of", W, B, E), () => z(B));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(S, E, z, W = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(S, (0, t._)`Object.keys(${E})`, z);
        const B = this._scope.toName(S);
        return this._for(new c("in", W, B, E), () => z(B));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(f);
      }
      // `label` statement
      label(S) {
        return this._leafNode(new p(S));
      }
      // `break` statement
      break(S) {
        return this._leafNode(new h(S));
      }
      // `return` statement
      return(S) {
        const E = new g();
        if (this._blockNode(E), this.code(S), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(g);
      }
      // `try` statement
      try(S, E, z) {
        if (!E && !z)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const W = new k();
        if (this._blockNode(W), this.code(S), E) {
          const B = this.name("e");
          this._currNode = W.catch = new x(B), E(B);
        }
        return z && (this._currNode = W.finally = new O(), this.code(z)), this._endBlockNode(x, O);
      }
      // `throw` statement
      throw(S) {
        return this._leafNode(new b(S));
      }
      // start self-balancing block
      block(S, E) {
        return this._blockStarts.push(this._nodes.length), S && this.code(S).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(S) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const z = this._nodes.length - E;
        if (z < 0 || S !== void 0 && z !== S)
          throw new Error(`CodeGen: wrong number of nodes: ${z} vs ${S} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(S, E = t.nil, z, W) {
        return this._blockNode(new d(S, E, z)), W && this.code(W).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(d);
      }
      optimize(S = 1) {
        for (; S-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(S) {
        return this._currNode.nodes.push(S), this;
      }
      _blockNode(S) {
        this._currNode.nodes.push(S), this._nodes.push(S);
      }
      _endBlockNode(S, E) {
        const z = this._currNode;
        if (z instanceof S || E && z instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${S.kind}/${E.kind}` : S.kind}"`);
      }
      _elseNode(S) {
        const E = this._currNode;
        if (!(E instanceof v))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = S, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const S = this._nodes;
        return S[S.length - 1];
      }
      set _currNode(S) {
        const E = this._nodes;
        E[E.length - 1] = S;
      }
    }
    e.CodeGen = A;
    function P(F, S) {
      for (const E in S)
        F[E] = (F[E] || 0) + (S[E] || 0);
      return F;
    }
    function I(F, S) {
      return S instanceof t._CodeOrName ? P(F, S.names) : F;
    }
    function H(F, S, E) {
      if (F instanceof t.Name)
        return z(F);
      if (!W(F))
        return F;
      return new t._Code(F._items.reduce((B, Z) => (Z instanceof t.Name && (Z = z(Z)), Z instanceof t._Code ? B.push(...Z._items) : B.push(Z), B), []));
      function z(B) {
        const Z = E[B.str];
        return Z === void 0 || S[B.str] !== 1 ? B : (delete S[B.str], Z);
      }
      function W(B) {
        return B instanceof t._Code && B._items.some((Z) => Z instanceof t.Name && S[Z.str] === 1 && E[Z.str] !== void 0);
      }
    }
    function X(F, S) {
      for (const E in S)
        F[E] = (F[E] || 0) - (S[E] || 0);
    }
    function Q(F) {
      return typeof F == "boolean" || typeof F == "number" || F === null ? !F : (0, t._)`!${D(F)}`;
    }
    e.not = Q;
    const K = R(e.operators.AND);
    function G(...F) {
      return F.reduce(K);
    }
    e.and = G;
    const ee = R(e.operators.OR);
    function q(...F) {
      return F.reduce(ee);
    }
    e.or = q;
    function R(F) {
      return (S, E) => S === t.nil ? E : E === t.nil ? S : (0, t._)`${D(S)} ${F} ${D(E)}`;
    }
    function D(F) {
      return F instanceof t.Name ? F : (0, t._)`(${F})`;
    }
  })(Jn)), Jn;
}
var oe = {}, Wr;
function ie() {
  if (Wr) return oe;
  Wr = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.checkStrictMode = oe.getErrorPath = oe.Type = oe.useFunc = oe.setEvaluated = oe.evaluatedPropsToName = oe.mergeEvaluated = oe.eachItem = oe.unescapeJsonPointer = oe.escapeJsonPointer = oe.escapeFragment = oe.unescapeFragment = oe.schemaRefOrVal = oe.schemaHasRulesButRef = oe.schemaHasRules = oe.checkUnknownRules = oe.alwaysValidSchema = oe.toHash = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ Fn();
  function n(c) {
    const d = {};
    for (const g of c)
      d[g] = !0;
    return d;
  }
  oe.toHash = n;
  function r(c, d) {
    return typeof d == "boolean" ? d : Object.keys(d).length === 0 ? !0 : (i(c, d), !o(d, c.self.RULES.all));
  }
  oe.alwaysValidSchema = r;
  function i(c, d = c.schema) {
    const { opts: g, self: k } = c;
    if (!g.strictSchema || typeof d == "boolean")
      return;
    const x = k.RULES.keywords;
    for (const O in d)
      x[O] || C(c, `unknown keyword: "${O}"`);
  }
  oe.checkUnknownRules = i;
  function o(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const g in c)
      if (d[g])
        return !0;
    return !1;
  }
  oe.schemaHasRules = o;
  function s(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const g in c)
      if (g !== "$ref" && d.all[g])
        return !0;
    return !1;
  }
  oe.schemaHasRulesButRef = s;
  function a({ topSchemaRef: c, schemaPath: d }, g, k, x) {
    if (!x) {
      if (typeof g == "number" || typeof g == "boolean")
        return g;
      if (typeof g == "string")
        return (0, e._)`${g}`;
    }
    return (0, e._)`${c}${d}${(0, e.getProperty)(k)}`;
  }
  oe.schemaRefOrVal = a;
  function l(c) {
    return b(decodeURIComponent(c));
  }
  oe.unescapeFragment = l;
  function p(c) {
    return encodeURIComponent(h(c));
  }
  oe.escapeFragment = p;
  function h(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  oe.escapeJsonPointer = h;
  function b(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  oe.unescapeJsonPointer = b;
  function y(c, d) {
    if (Array.isArray(c))
      for (const g of c)
        d(g);
    else
      d(c);
  }
  oe.eachItem = y;
  function $({ mergeNames: c, mergeToName: d, mergeValues: g, resultToName: k }) {
    return (x, O, A, P) => {
      const I = A === void 0 ? O : A instanceof e.Name ? (O instanceof e.Name ? c(x, O, A) : d(x, O, A), A) : O instanceof e.Name ? (d(x, A, O), O) : g(O, A);
      return P === e.Name && !(I instanceof e.Name) ? k(x, I) : I;
    };
  }
  oe.mergeEvaluated = {
    props: $({
      mergeNames: (c, d, g) => c.if((0, e._)`${g} !== true && ${d} !== undefined`, () => {
        c.if((0, e._)`${d} === true`, () => c.assign(g, !0), () => c.assign(g, (0, e._)`${g} || {}`).code((0, e._)`Object.assign(${g}, ${d})`));
      }),
      mergeToName: (c, d, g) => c.if((0, e._)`${g} !== true`, () => {
        d === !0 ? c.assign(g, !0) : (c.assign(g, (0, e._)`${g} || {}`), _(c, g, d));
      }),
      mergeValues: (c, d) => c === !0 ? !0 : { ...c, ...d },
      resultToName: w
    }),
    items: $({
      mergeNames: (c, d, g) => c.if((0, e._)`${g} !== true && ${d} !== undefined`, () => c.assign(g, (0, e._)`${d} === true ? true : ${g} > ${d} ? ${g} : ${d}`)),
      mergeToName: (c, d, g) => c.if((0, e._)`${g} !== true`, () => c.assign(g, d === !0 ? !0 : (0, e._)`${g} > ${d} ? ${g} : ${d}`)),
      mergeValues: (c, d) => c === !0 ? !0 : Math.max(c, d),
      resultToName: (c, d) => c.var("items", d)
    })
  };
  function w(c, d) {
    if (d === !0)
      return c.var("props", !0);
    const g = c.var("props", (0, e._)`{}`);
    return d !== void 0 && _(c, g, d), g;
  }
  oe.evaluatedPropsToName = w;
  function _(c, d, g) {
    Object.keys(g).forEach((k) => c.assign((0, e._)`${d}${(0, e.getProperty)(k)}`, !0));
  }
  oe.setEvaluated = _;
  const u = {};
  function v(c, d) {
    return c.scopeValue("func", {
      ref: d,
      code: u[d.code] || (u[d.code] = new t._Code(d.code))
    });
  }
  oe.useFunc = v;
  var f;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(f || (oe.Type = f = {}));
  function m(c, d, g) {
    if (c instanceof e.Name) {
      const k = d === f.Num;
      return g ? k ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : k ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return g ? (0, e.getProperty)(c).toString() : "/" + h(c);
  }
  oe.getErrorPath = m;
  function C(c, d, g = c.opts.strictSchema) {
    if (g) {
      if (d = `strict mode: ${d}`, g === !0)
        throw new Error(d);
      c.self.logger.warn(d);
    }
  }
  return oe.checkStrictMode = C, oe;
}
var Ft = {}, Jr;
function Ne() {
  if (Jr) return Ft;
  Jr = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
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
  return Ft.default = t, Ft;
}
var Yr;
function In() {
  return Yr || (Yr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ re(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Ne();
    e.keywordError = {
      message: ({ keyword: u }) => (0, t.str)`must pass "${u}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: u, schemaType: v }) => v ? (0, t.str)`"${u}" keyword must be ${v} ($data)` : (0, t.str)`"${u}" keyword is invalid ($data)`
    };
    function i(u, v = e.keywordError, f, m) {
      const { it: C } = u, { gen: c, compositeRule: d, allErrors: g } = C, k = b(u, v, f);
      m ?? (d || g) ? l(c, k) : p(C, (0, t._)`[${k}]`);
    }
    e.reportError = i;
    function o(u, v = e.keywordError, f) {
      const { it: m } = u, { gen: C, compositeRule: c, allErrors: d } = m, g = b(u, v, f);
      l(C, g), c || d || p(m, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(u, v) {
      u.assign(r.default.errors, v), u.if((0, t._)`${r.default.vErrors} !== null`, () => u.if(v, () => u.assign((0, t._)`${r.default.vErrors}.length`, v), () => u.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: u, keyword: v, schemaValue: f, data: m, errsCount: C, it: c }) {
      if (C === void 0)
        throw new Error("ajv implementation error");
      const d = u.name("err");
      u.forRange("i", C, r.default.errors, (g) => {
        u.const(d, (0, t._)`${r.default.vErrors}[${g}]`), u.if((0, t._)`${d}.instancePath === undefined`, () => u.assign((0, t._)`${d}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), u.assign((0, t._)`${d}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${v}`), c.opts.verbose && (u.assign((0, t._)`${d}.schema`, f), u.assign((0, t._)`${d}.data`, m));
      });
    }
    e.extendErrors = a;
    function l(u, v) {
      const f = u.const("err", v);
      u.if((0, t._)`${r.default.vErrors} === null`, () => u.assign(r.default.vErrors, (0, t._)`[${f}]`), (0, t._)`${r.default.vErrors}.push(${f})`), u.code((0, t._)`${r.default.errors}++`);
    }
    function p(u, v) {
      const { gen: f, validateName: m, schemaEnv: C } = u;
      C.$async ? f.throw((0, t._)`new ${u.ValidationError}(${v})`) : (f.assign((0, t._)`${m}.errors`, v), f.return(!1));
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
    function b(u, v, f) {
      const { createErrors: m } = u.it;
      return m === !1 ? (0, t._)`{}` : y(u, v, f);
    }
    function y(u, v, f = {}) {
      const { gen: m, it: C } = u, c = [
        $(C, f),
        w(u, f)
      ];
      return _(u, v, c), m.object(...c);
    }
    function $({ errorPath: u }, { instancePath: v }) {
      const f = v ? (0, t.str)`${u}${(0, n.getErrorPath)(v, n.Type.Str)}` : u;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, f)];
    }
    function w({ keyword: u, it: { errSchemaPath: v } }, { schemaPath: f, parentSchema: m }) {
      let C = m ? v : (0, t.str)`${v}/${u}`;
      return f && (C = (0, t.str)`${C}${(0, n.getErrorPath)(f, n.Type.Str)}`), [h.schemaPath, C];
    }
    function _(u, { params: v, message: f }, m) {
      const { keyword: C, data: c, schemaValue: d, it: g } = u, { opts: k, propertyName: x, topSchemaRef: O, schemaPath: A } = g;
      m.push([h.keyword, C], [h.params, typeof v == "function" ? v(u) : v || (0, t._)`{}`]), k.messages && m.push([h.message, typeof f == "function" ? f(u) : f]), k.verbose && m.push([h.schema, d], [h.parentSchema, (0, t._)`${O}${A}`], [r.default.data, c]), x && m.push([h.propertyName, x]);
    }
  })(Wn)), Wn;
}
var Xr;
function ia() {
  if (Xr) return We;
  Xr = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.boolOrEmptySchema = We.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ In(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Ne(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: l, schema: p, validateName: h } = a;
    p === !1 ? s(a, !1) : typeof p == "object" && p.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${h}.errors`, null), l.return(!0));
  }
  We.topBoolOrEmptySchema = i;
  function o(a, l) {
    const { gen: p, schema: h } = a;
    h === !1 ? (p.var(l, !1), s(a)) : p.var(l, !0);
  }
  We.boolOrEmptySchema = o;
  function s(a, l) {
    const { gen: p, data: h } = a, b = {
      gen: p,
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
var me = {}, Je = {}, Zr;
function Yi() {
  if (Zr) return Je;
  Zr = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.getRules = Je.isJSONType = void 0;
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
var Ie = {}, Qr;
function Xi() {
  if (Qr) return Ie;
  Qr = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.shouldUseRule = Ie.shouldUseGroup = Ie.schemaHasRulesForType = void 0;
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
var eo;
function On() {
  if (eo) return me;
  eo = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.reportTypeError = me.checkDataTypes = me.checkDataType = me.coerceAndCheckDataType = me.getJSONTypes = me.getSchemaTypes = me.DataType = void 0;
  const e = /* @__PURE__ */ Yi(), t = /* @__PURE__ */ Xi(), n = /* @__PURE__ */ In(), r = /* @__PURE__ */ re(), i = /* @__PURE__ */ ie();
  var o;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(o || (me.DataType = o = {}));
  function s(f) {
    const m = a(f.type);
    if (m.includes("null")) {
      if (f.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && f.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      f.nullable === !0 && m.push("null");
    }
    return m;
  }
  me.getSchemaTypes = s;
  function a(f) {
    const m = Array.isArray(f) ? f : f ? [f] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  me.getJSONTypes = a;
  function l(f, m) {
    const { gen: C, data: c, opts: d } = f, g = h(m, d.coerceTypes), k = m.length > 0 && !(g.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(f, m[0]));
    if (k) {
      const x = w(m, c, d.strictNumbers, o.Wrong);
      C.if(x, () => {
        g.length ? b(f, m, g) : u(f);
      });
    }
    return k;
  }
  me.coerceAndCheckDataType = l;
  const p = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(f, m) {
    return m ? f.filter((C) => p.has(C) || m === "array" && C === "array") : [];
  }
  function b(f, m, C) {
    const { gen: c, data: d, opts: g } = f, k = c.let("dataType", (0, r._)`typeof ${d}`), x = c.let("coerced", (0, r._)`undefined`);
    g.coerceTypes === "array" && c.if((0, r._)`${k} == 'object' && Array.isArray(${d}) && ${d}.length == 1`, () => c.assign(d, (0, r._)`${d}[0]`).assign(k, (0, r._)`typeof ${d}`).if(w(m, d, g.strictNumbers), () => c.assign(x, d))), c.if((0, r._)`${x} !== undefined`);
    for (const A of C)
      (p.has(A) || A === "array" && g.coerceTypes === "array") && O(A);
    c.else(), u(f), c.endIf(), c.if((0, r._)`${x} !== undefined`, () => {
      c.assign(d, x), y(f, x);
    });
    function O(A) {
      switch (A) {
        case "string":
          c.elseIf((0, r._)`${k} == "number" || ${k} == "boolean"`).assign(x, (0, r._)`"" + ${d}`).elseIf((0, r._)`${d} === null`).assign(x, (0, r._)`""`);
          return;
        case "number":
          c.elseIf((0, r._)`${k} == "boolean" || ${d} === null
              || (${k} == "string" && ${d} && ${d} == +${d})`).assign(x, (0, r._)`+${d}`);
          return;
        case "integer":
          c.elseIf((0, r._)`${k} === "boolean" || ${d} === null
              || (${k} === "string" && ${d} && ${d} == +${d} && !(${d} % 1))`).assign(x, (0, r._)`+${d}`);
          return;
        case "boolean":
          c.elseIf((0, r._)`${d} === "false" || ${d} === 0 || ${d} === null`).assign(x, !1).elseIf((0, r._)`${d} === "true" || ${d} === 1`).assign(x, !0);
          return;
        case "null":
          c.elseIf((0, r._)`${d} === "" || ${d} === 0 || ${d} === false`), c.assign(x, null);
          return;
        case "array":
          c.elseIf((0, r._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${d} === null`).assign(x, (0, r._)`[${d}]`);
      }
    }
  }
  function y({ gen: f, parentData: m, parentDataProperty: C }, c) {
    f.if((0, r._)`${m} !== undefined`, () => f.assign((0, r._)`${m}[${C}]`, c));
  }
  function $(f, m, C, c = o.Correct) {
    const d = c === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let g;
    switch (f) {
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
        return (0, r._)`typeof ${m} ${d} ${f}`;
    }
    return c === o.Correct ? g : (0, r.not)(g);
    function k(x = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, x, C ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  me.checkDataType = $;
  function w(f, m, C, c) {
    if (f.length === 1)
      return $(f[0], m, C, c);
    let d;
    const g = (0, i.toHash)(f);
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
  me.checkDataTypes = w;
  const _ = {
    message: ({ schema: f }) => `must be ${f}`,
    params: ({ schema: f, schemaValue: m }) => typeof f == "string" ? (0, r._)`{type: ${f}}` : (0, r._)`{type: ${m}}`
  };
  function u(f) {
    const m = v(f);
    (0, n.reportError)(m, _);
  }
  me.reportTypeError = u;
  function v(f) {
    const { gen: m, data: C, schema: c } = f, d = (0, i.schemaRefOrVal)(f, c, "type");
    return {
      gen: m,
      keyword: "type",
      data: C,
      schema: c.type,
      schemaCode: d,
      schemaValue: d,
      parentSchema: c,
      params: {},
      it: f
    };
  }
  return me;
}
var vt = {}, to;
function sa() {
  if (to) return vt;
  to = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.assignDefaults = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const l in s)
        r(i, l, s[l].default);
    else o === "array" && Array.isArray(a) && a.forEach((l, p) => r(i, p, l.default));
  }
  vt.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: l, data: p, opts: h } = i;
    if (s === void 0)
      return;
    const b = (0, e._)`${p}${(0, e.getProperty)(o)}`;
    if (l) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${b}`);
      return;
    }
    let y = (0, e._)`${b} === undefined`;
    h.useDefaults === "empty" && (y = (0, e._)`${y} || ${b} === null || ${b} === ""`), a.if(y, (0, e._)`${b} = ${(0, e.stringify)(s)}`);
  }
  return vt;
}
var ke = {}, ae = {}, no;
function Me() {
  if (no) return ae;
  no = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ ie();
  function i(f, m) {
    const { gen: C, data: c, it: d } = f;
    C.if(h(C, c, m, d.opts.ownProperties), () => {
      f.setParams({ missingProperty: (0, e._)`${m}` }, !0), f.error();
    });
  }
  ae.checkReportMissingProp = i;
  function o({ gen: f, data: m, it: { opts: C } }, c, d) {
    return (0, e.or)(...c.map((g) => (0, e.and)(h(f, m, g, C.ownProperties), (0, e._)`${d} = ${g}`)));
  }
  ae.checkMissingProp = o;
  function s(f, m) {
    f.setParams({ missingProperty: m }, !0), f.error();
  }
  ae.reportMissingProp = s;
  function a(f) {
    return f.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = a;
  function l(f, m, C) {
    return (0, e._)`${a(f)}.call(${m}, ${C})`;
  }
  ae.isOwnProperty = l;
  function p(f, m, C, c) {
    const d = (0, e._)`${m}${(0, e.getProperty)(C)} !== undefined`;
    return c ? (0, e._)`${d} && ${l(f, m, C)}` : d;
  }
  ae.propertyInData = p;
  function h(f, m, C, c) {
    const d = (0, e._)`${m}${(0, e.getProperty)(C)} === undefined`;
    return c ? (0, e.or)(d, (0, e.not)(l(f, m, C))) : d;
  }
  ae.noPropertyInData = h;
  function b(f) {
    return f ? Object.keys(f).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = b;
  function y(f, m) {
    return b(m).filter((C) => !(0, t.alwaysValidSchema)(f, m[C]));
  }
  ae.schemaProperties = y;
  function $({ schemaCode: f, data: m, it: { gen: C, topSchemaRef: c, schemaPath: d, errorPath: g }, it: k }, x, O, A) {
    const P = A ? (0, e._)`${f}, ${m}, ${c}${d}` : m, I = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, g)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && I.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const H = (0, e._)`${P}, ${C.object(...I)}`;
    return O !== e.nil ? (0, e._)`${x}.call(${O}, ${H})` : (0, e._)`${x}(${H})`;
  }
  ae.callValidateCode = $;
  const w = (0, e._)`new RegExp`;
  function _({ gen: f, it: { opts: m } }, C) {
    const c = m.unicodeRegExp ? "u" : "", { regExp: d } = m.code, g = d(C, c);
    return f.scopeValue("pattern", {
      key: g.toString(),
      ref: g,
      code: (0, e._)`${d.code === "new RegExp" ? w : (0, r.useFunc)(f, d)}(${C}, ${c})`
    });
  }
  ae.usePattern = _;
  function u(f) {
    const { gen: m, data: C, keyword: c, it: d } = f, g = m.name("valid");
    if (d.allErrors) {
      const x = m.let("valid", !0);
      return k(() => m.assign(x, !1)), x;
    }
    return m.var(g, !0), k(() => m.break()), g;
    function k(x) {
      const O = m.const("len", (0, e._)`${C}.length`);
      m.forRange("i", 0, O, (A) => {
        f.subschema({
          keyword: c,
          dataProp: A,
          dataPropType: t.Type.Num
        }, g), m.if((0, e.not)(g), x);
      });
    }
  }
  ae.validateArray = u;
  function v(f) {
    const { gen: m, schema: C, keyword: c, it: d } = f;
    if (!Array.isArray(C))
      throw new Error("ajv implementation error");
    if (C.some((O) => (0, t.alwaysValidSchema)(d, O)) && !d.opts.unevaluated)
      return;
    const k = m.let("valid", !1), x = m.name("_valid");
    m.block(() => C.forEach((O, A) => {
      const P = f.subschema({
        keyword: c,
        schemaProp: A,
        compositeRule: !0
      }, x);
      m.assign(k, (0, e._)`${k} || ${x}`), f.mergeValidEvaluated(P, x) || m.if((0, e.not)(k));
    })), f.result(k, () => f.reset(), () => f.error(!0));
  }
  return ae.validateUnion = v, ae;
}
var ro;
function aa() {
  if (ro) return ke;
  ro = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.validateKeywordUsage = ke.validSchemaType = ke.funcKeywordCode = ke.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ In();
  function i(y, $) {
    const { gen: w, keyword: _, schema: u, parentSchema: v, it: f } = y, m = $.macro.call(f.self, u, v, f), C = p(w, _, m);
    f.opts.validateSchema !== !1 && f.self.validateSchema(m, !0);
    const c = w.name("valid");
    y.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${f.errSchemaPath}/${_}`,
      topSchemaRef: C,
      compositeRule: !0
    }, c), y.pass(c, () => y.error(!0));
  }
  ke.macroKeywordCode = i;
  function o(y, $) {
    var w;
    const { gen: _, keyword: u, schema: v, parentSchema: f, $data: m, it: C } = y;
    l(C, $);
    const c = !m && $.compile ? $.compile.call(C.self, v, f, C) : $.validate, d = p(_, u, c), g = _.let("valid");
    y.block$data(g, k), y.ok((w = $.valid) !== null && w !== void 0 ? w : g);
    function k() {
      if ($.errors === !1)
        A(), $.modifying && s(y), P(() => y.error());
      else {
        const I = $.async ? x() : O();
        $.modifying && s(y), P(() => a(y, I));
      }
    }
    function x() {
      const I = _.let("ruleErrs", null);
      return _.try(() => A((0, e._)`await `), (H) => _.assign(g, !1).if((0, e._)`${H} instanceof ${C.ValidationError}`, () => _.assign(I, (0, e._)`${H}.errors`), () => _.throw(H))), I;
    }
    function O() {
      const I = (0, e._)`${d}.errors`;
      return _.assign(I, null), A(e.nil), I;
    }
    function A(I = $.async ? (0, e._)`await ` : e.nil) {
      const H = C.opts.passContext ? t.default.this : t.default.self, X = !("compile" in $ && !m || $.schema === !1);
      _.assign(g, (0, e._)`${I}${(0, n.callValidateCode)(y, d, H, X)}`, $.modifying);
    }
    function P(I) {
      var H;
      _.if((0, e.not)((H = $.valid) !== null && H !== void 0 ? H : g), I);
    }
  }
  ke.funcKeywordCode = o;
  function s(y) {
    const { gen: $, data: w, it: _ } = y;
    $.if(_.parentData, () => $.assign(w, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a(y, $) {
    const { gen: w } = y;
    w.if((0, e._)`Array.isArray(${$})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${$} : ${t.default.vErrors}.concat(${$})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(y);
    }, () => y.error());
  }
  function l({ schemaEnv: y }, $) {
    if ($.async && !y.$async)
      throw new Error("async keyword in sync schema");
  }
  function p(y, $, w) {
    if (w === void 0)
      throw new Error(`keyword "${$}" failed to compile`);
    return y.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function h(y, $, w = !1) {
    return !$.length || $.some((_) => _ === "array" ? Array.isArray(y) : _ === "object" ? y && typeof y == "object" && !Array.isArray(y) : typeof y == _ || w && typeof y > "u");
  }
  ke.validSchemaType = h;
  function b({ schema: y, opts: $, self: w, errSchemaPath: _ }, u, v) {
    if (Array.isArray(u.keyword) ? !u.keyword.includes(v) : u.keyword !== v)
      throw new Error("ajv implementation error");
    const f = u.dependencies;
    if (f?.some((m) => !Object.prototype.hasOwnProperty.call(y, m)))
      throw new Error(`parent schema must have dependencies of ${v}: ${f.join(",")}`);
    if (u.validateSchema && !u.validateSchema(y[v])) {
      const C = `keyword "${v}" value is invalid at path "${_}": ` + w.errorsText(u.validateSchema.errors);
      if ($.validateSchema === "log")
        w.logger.error(C);
      else
        throw new Error(C);
    }
  }
  return ke.validateKeywordUsage = b, ke;
}
var De = {}, oo;
function ca() {
  if (oo) return De;
  oo = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.extendSubschemaMode = De.extendSubschemaData = De.getSubschema = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie();
  function n(o, { keyword: s, schemaProp: a, schema: l, schemaPath: p, errSchemaPath: h, topSchemaRef: b }) {
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
      if (p === void 0 || h === void 0 || b === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: p,
        topSchemaRef: b,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  De.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: l, data: p, dataTypes: h, propertyName: b }) {
    if (p !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: y } = s;
    if (a !== void 0) {
      const { errorPath: w, dataPathArr: _, opts: u } = s, v = y.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      $(v), o.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(a, l, u.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [..._, o.parentDataProperty];
    }
    if (p !== void 0) {
      const w = p instanceof e.Name ? p : y.let("data", p, !0);
      $(w), b !== void 0 && (o.propertyName = b);
    }
    h && (o.dataTypes = h);
    function $(w) {
      o.data = w, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, w];
    }
  }
  De.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: l, createErrors: p, allErrors: h }) {
    l !== void 0 && (o.compositeRule = l), p !== void 0 && (o.createErrors = p), h !== void 0 && (o.allErrors = h), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return De.extendSubschemaMode = i, De;
}
var ve = {}, Zn, io;
function Zi() {
  return io || (io = 1, Zn = function e(t, n) {
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
  }), Zn;
}
var Qn = { exports: {} }, so;
function la() {
  if (so) return Qn.exports;
  so = 1;
  var e = Qn.exports = function(r, i, o) {
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
  function t(r, i, o, s, a, l, p, h, b, y) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, l, p, h, b, y);
      for (var $ in s) {
        var w = s[$];
        if (Array.isArray(w)) {
          if ($ in e.arrayKeywords)
            for (var _ = 0; _ < w.length; _++)
              t(r, i, o, w[_], a + "/" + $ + "/" + _, l, a, $, s, _);
        } else if ($ in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var u in w)
              t(r, i, o, w[u], a + "/" + $ + "/" + n(u), l, a, $, s, u);
        } else ($ in e.keywords || r.allKeys && !($ in e.skipKeywords)) && t(r, i, o, w, a + "/" + $, l, a, $, s);
      }
      o(s, a, l, p, h, b, y);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Qn.exports;
}
var ao;
function Dn() {
  if (ao) return ve;
  ao = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.getSchemaRefs = ve.resolveUrl = ve.normalizeId = ve._getFullPath = ve.getFullPath = ve.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = Zi(), n = la(), r = /* @__PURE__ */ new Set([
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
  function i(_, u = !0) {
    return typeof _ == "boolean" ? !0 : u === !0 ? !s(_) : u ? a(_) <= u : !1;
  }
  ve.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(_) {
    for (const u in _) {
      if (o.has(u))
        return !0;
      const v = _[u];
      if (Array.isArray(v) && v.some(s) || typeof v == "object" && s(v))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let u = 0;
    for (const v in _) {
      if (v === "$ref")
        return 1 / 0;
      if (u++, !r.has(v) && (typeof _[v] == "object" && (0, e.eachItem)(_[v], (f) => u += a(f)), u === 1 / 0))
        return 1 / 0;
    }
    return u;
  }
  function l(_, u = "", v) {
    v !== !1 && (u = b(u));
    const f = _.parse(u);
    return p(_, f);
  }
  ve.getFullPath = l;
  function p(_, u) {
    return _.serialize(u).split("#")[0] + "#";
  }
  ve._getFullPath = p;
  const h = /#\/?$/;
  function b(_) {
    return _ ? _.replace(h, "") : "";
  }
  ve.normalizeId = b;
  function y(_, u, v) {
    return v = b(v), _.resolve(u, v);
  }
  ve.resolveUrl = y;
  const $ = /^[a-z_][-a-z0-9._]*$/i;
  function w(_, u) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: v, uriResolver: f } = this.opts, m = b(_[v] || u), C = { "": m }, c = l(f, m, !1), d = {}, g = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (O, A, P, I) => {
      if (I === void 0)
        return;
      const H = c + A;
      let X = C[I];
      typeof O[v] == "string" && (X = Q.call(this, O[v])), K.call(this, O.$anchor), K.call(this, O.$dynamicAnchor), C[A] = X;
      function Q(G) {
        const ee = this.opts.uriResolver.resolve;
        if (G = b(X ? ee(X, G) : G), g.has(G))
          throw x(G);
        g.add(G);
        let q = this.refs[G];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? k(O, q.schema, G) : G !== b(H) && (G[0] === "#" ? (k(O, d[G], G), d[G] = O) : this.refs[G] = H), G;
      }
      function K(G) {
        if (typeof G == "string") {
          if (!$.test(G))
            throw new Error(`invalid anchor "${G}"`);
          Q.call(this, `#${G}`);
        }
      }
    }), d;
    function k(O, A, P) {
      if (A !== void 0 && !t(O, A))
        throw x(P);
    }
    function x(O) {
      return new Error(`reference "${O}" resolves to more than one schema`);
    }
  }
  return ve.getSchemaRefs = w, ve;
}
var co;
function qn() {
  if (co) return ze;
  co = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.getData = ze.KeywordCxt = ze.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ ia(), t = /* @__PURE__ */ On(), n = /* @__PURE__ */ Xi(), r = /* @__PURE__ */ On(), i = /* @__PURE__ */ sa(), o = /* @__PURE__ */ aa(), s = /* @__PURE__ */ ca(), a = /* @__PURE__ */ re(), l = /* @__PURE__ */ Ne(), p = /* @__PURE__ */ Dn(), h = /* @__PURE__ */ ie(), b = /* @__PURE__ */ In();
  function y(N) {
    if (c(N) && (g(N), C(N))) {
      u(N);
      return;
    }
    $(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  ze.validateFunctionCode = y;
  function $({ gen: N, validateName: j, schema: L, schemaEnv: U, opts: Y }, ne) {
    Y.code.es5 ? N.func(j, (0, a._)`${l.default.data}, ${l.default.valCxt}`, U.$async, () => {
      N.code((0, a._)`"use strict"; ${f(L, Y)}`), _(N, Y), N.code(ne);
    }) : N.func(j, (0, a._)`${l.default.data}, ${w(Y)}`, U.$async, () => N.code(f(L, Y)).code(ne));
  }
  function w(N) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${N.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(N, j) {
    N.if(l.default.valCxt, () => {
      N.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), N.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), N.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), N.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), j.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      N.var(l.default.instancePath, (0, a._)`""`), N.var(l.default.parentData, (0, a._)`undefined`), N.var(l.default.parentDataProperty, (0, a._)`undefined`), N.var(l.default.rootData, l.default.data), j.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function u(N) {
    const { schema: j, opts: L, gen: U } = N;
    $(N, () => {
      L.$comment && j.$comment && I(N), O(N), U.let(l.default.vErrors, null), U.let(l.default.errors, 0), L.unevaluated && v(N), k(N), H(N);
    });
  }
  function v(N) {
    const { gen: j, validateName: L } = N;
    N.evaluated = j.const("evaluated", (0, a._)`${L}.evaluated`), j.if((0, a._)`${N.evaluated}.dynamicProps`, () => j.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), j.if((0, a._)`${N.evaluated}.dynamicItems`, () => j.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function f(N, j) {
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
    const { schema: L, gen: U, opts: Y } = N;
    Y.$comment && L.$comment && I(N), A(N), P(N);
    const ne = U.const("_errs", l.default.errors);
    k(N, ne), U.var(j, (0, a._)`${ne} === ${l.default.errors}`);
  }
  function g(N) {
    (0, h.checkUnknownRules)(N), x(N);
  }
  function k(N, j) {
    if (N.opts.jtd)
      return Q(N, [], !1, j);
    const L = (0, t.getSchemaTypes)(N.schema), U = (0, t.coerceAndCheckDataType)(N, L);
    Q(N, L, !U, j);
  }
  function x(N) {
    const { schema: j, errSchemaPath: L, opts: U, self: Y } = N;
    j.$ref && U.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(j, Y.RULES) && Y.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function O(N) {
    const { schema: j, opts: L } = N;
    j.default !== void 0 && L.useDefaults && L.strictSchema && (0, h.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function A(N) {
    const j = N.schema[N.opts.schemaId];
    j && (N.baseId = (0, p.resolveUrl)(N.opts.uriResolver, N.baseId, j));
  }
  function P(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function I({ gen: N, schemaEnv: j, schema: L, errSchemaPath: U, opts: Y }) {
    const ne = L.$comment;
    if (Y.$comment === !0)
      N.code((0, a._)`${l.default.self}.logger.log(${ne})`);
    else if (typeof Y.$comment == "function") {
      const ue = (0, a.str)`${U}/$comment`, be = N.scopeValue("root", { ref: j.root });
      N.code((0, a._)`${l.default.self}.opts.$comment(${ne}, ${ue}, ${be}.schema)`);
    }
  }
  function H(N) {
    const { gen: j, schemaEnv: L, validateName: U, ValidationError: Y, opts: ne } = N;
    L.$async ? j.if((0, a._)`${l.default.errors} === 0`, () => j.return(l.default.data), () => j.throw((0, a._)`new ${Y}(${l.default.vErrors})`)) : (j.assign((0, a._)`${U}.errors`, l.default.vErrors), ne.unevaluated && X(N), j.return((0, a._)`${l.default.errors} === 0`));
  }
  function X({ gen: N, evaluated: j, props: L, items: U }) {
    L instanceof a.Name && N.assign((0, a._)`${j}.props`, L), U instanceof a.Name && N.assign((0, a._)`${j}.items`, U);
  }
  function Q(N, j, L, U) {
    const { gen: Y, schema: ne, data: ue, allErrors: be, opts: he, self: fe } = N, { RULES: de } = fe;
    if (ne.$ref && (he.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(ne, de))) {
      Y.block(() => W(N, "$ref", de.all.$ref.definition));
      return;
    }
    he.jtd || G(N, j), Y.block(() => {
      for (const _e of de.rules)
        Ve(_e);
      Ve(de.post);
    });
    function Ve(_e) {
      (0, n.shouldUseGroup)(ne, _e) && (_e.type ? (Y.if((0, r.checkDataType)(_e.type, ue, he.strictNumbers)), K(N, _e), j.length === 1 && j[0] === _e.type && L && (Y.else(), (0, r.reportTypeError)(N)), Y.endIf()) : K(N, _e), be || Y.if((0, a._)`${l.default.errors} === ${U || 0}`));
    }
  }
  function K(N, j) {
    const { gen: L, schema: U, opts: { useDefaults: Y } } = N;
    Y && (0, i.assignDefaults)(N, j.type), L.block(() => {
      for (const ne of j.rules)
        (0, n.shouldUseRule)(U, ne) && W(N, ne.keyword, ne.definition, j.type);
    });
  }
  function G(N, j) {
    N.schemaEnv.meta || !N.opts.strictTypes || (ee(N, j), N.opts.allowUnionTypes || q(N, j), R(N, N.dataTypes));
  }
  function ee(N, j) {
    if (j.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = j;
        return;
      }
      j.forEach((L) => {
        F(N.dataTypes, L) || E(N, `type "${L}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), S(N, j);
    }
  }
  function q(N, j) {
    j.length > 1 && !(j.length === 2 && j.includes("null")) && E(N, "use allowUnionTypes to allow union type keyword");
  }
  function R(N, j) {
    const L = N.self.RULES.all;
    for (const U in L) {
      const Y = L[U];
      if (typeof Y == "object" && (0, n.shouldUseRule)(N.schema, Y)) {
        const { type: ne } = Y.definition;
        ne.length && !ne.some((ue) => D(j, ue)) && E(N, `missing type "${ne.join(",")}" for keyword "${U}"`);
      }
    }
  }
  function D(N, j) {
    return N.includes(j) || j === "number" && N.includes("integer");
  }
  function F(N, j) {
    return N.includes(j) || j === "integer" && N.includes("number");
  }
  function S(N, j) {
    const L = [];
    for (const U of N.dataTypes)
      F(j, U) ? L.push(U) : j.includes("integer") && U === "number" && L.push("integer");
    N.dataTypes = L;
  }
  function E(N, j) {
    const L = N.schemaEnv.baseId + N.errSchemaPath;
    j += ` at "${L}" (strictTypes)`, (0, h.checkStrictMode)(N, j, N.opts.strictTypes);
  }
  class z {
    constructor(j, L, U) {
      if ((0, o.validateKeywordUsage)(j, L, U), this.gen = j.gen, this.allErrors = j.allErrors, this.keyword = U, this.data = j.data, this.schema = j.schema[U], this.$data = L.$data && j.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(j, this.schema, U, this.$data), this.schemaType = L.schemaType, this.parentSchema = j.schema, this.params = {}, this.it = j, this.def = L, this.$data)
        this.schemaCode = j.gen.const("vSchema", te(this.$data, j));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${U} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = j.gen.const("_errs", l.default.errors));
    }
    result(j, L, U) {
      this.failResult((0, a.not)(j), L, U);
    }
    failResult(j, L, U) {
      this.gen.if(j), U ? U() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
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
    error(j, L, U) {
      if (L) {
        this.setParams(L), this._error(j, U), this.setParams({});
        return;
      }
      this._error(j, U);
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
    block$data(j, L, U = a.nil) {
      this.gen.block(() => {
        this.check$data(j, U), L();
      });
    }
    check$data(j = a.nil, L = a.nil) {
      if (!this.$data)
        return;
      const { gen: U, schemaCode: Y, schemaType: ne, def: ue } = this;
      U.if((0, a.or)((0, a._)`${Y} === undefined`, L)), j !== a.nil && U.assign(j, !0), (ne.length || ue.validateSchema) && (U.elseIf(this.invalid$data()), this.$dataError(), j !== a.nil && U.assign(j, !1)), U.else();
    }
    invalid$data() {
      const { gen: j, schemaCode: L, schemaType: U, def: Y, it: ne } = this;
      return (0, a.or)(ue(), be());
      function ue() {
        if (U.length) {
          if (!(L instanceof a.Name))
            throw new Error("ajv implementation error");
          const he = Array.isArray(U) ? U : [U];
          return (0, a._)`${(0, r.checkDataTypes)(he, L, ne.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function be() {
        if (Y.validateSchema) {
          const he = j.scopeValue("validate$data", { ref: Y.validateSchema });
          return (0, a._)`!${he}(${L})`;
        }
        return a.nil;
      }
    }
    subschema(j, L) {
      const U = (0, s.getSubschema)(this.it, j);
      (0, s.extendSubschemaData)(U, this.it, j), (0, s.extendSubschemaMode)(U, j);
      const Y = { ...this.it, ...U, items: void 0, props: void 0 };
      return m(Y, L), Y;
    }
    mergeEvaluated(j, L) {
      const { it: U, gen: Y } = this;
      U.opts.unevaluated && (U.props !== !0 && j.props !== void 0 && (U.props = h.mergeEvaluated.props(Y, j.props, U.props, L)), U.items !== !0 && j.items !== void 0 && (U.items = h.mergeEvaluated.items(Y, j.items, U.items, L)));
    }
    mergeValidEvaluated(j, L) {
      const { it: U, gen: Y } = this;
      if (U.opts.unevaluated && (U.props !== !0 || U.items !== !0))
        return Y.if(L, () => this.mergeEvaluated(j, a.Name)), !0;
    }
  }
  ze.KeywordCxt = z;
  function W(N, j, L, U) {
    const Y = new z(N, L, j);
    "code" in L ? L.code(Y, U) : Y.$data && L.validate ? (0, o.funcKeywordCode)(Y, L) : "macro" in L ? (0, o.macroKeywordCode)(Y, L) : (L.compile || L.validate) && (0, o.funcKeywordCode)(Y, L);
  }
  const B = /^\/(?:[^~]|~0|~1)*$/, Z = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function te(N, { dataLevel: j, dataNames: L, dataPathArr: U }) {
    let Y, ne;
    if (N === "")
      return l.default.rootData;
    if (N[0] === "/") {
      if (!B.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      Y = N, ne = l.default.rootData;
    } else {
      const fe = Z.exec(N);
      if (!fe)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const de = +fe[1];
      if (Y = fe[2], Y === "#") {
        if (de >= j)
          throw new Error(he("property/index", de));
        return U[j - de];
      }
      if (de > j)
        throw new Error(he("data", de));
      if (ne = L[j - de], !Y)
        return ne;
    }
    let ue = ne;
    const be = Y.split("/");
    for (const fe of be)
      fe && (ne = (0, a._)`${ne}${(0, a.getProperty)((0, h.unescapeJsonPointer)(fe))}`, ue = (0, a._)`${ue} && ${ne}`);
    return ue;
    function he(fe, de) {
      return `Cannot access ${fe} ${de} levels up, current level is ${j}`;
    }
  }
  return ze.getData = te, ze;
}
var Ot = {}, lo;
function _r() {
  if (lo) return Ot;
  lo = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Ot.default = e, Ot;
}
var Tt = {}, uo;
function Vn() {
  if (uo) return Tt;
  uo = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Tt.default = t, Tt;
}
var we = {}, fo;
function Ln() {
  if (fo) return we;
  fo = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ _r(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ Dn(), i = /* @__PURE__ */ ie(), o = /* @__PURE__ */ qn();
  class s {
    constructor(v) {
      var f;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof v.schema == "object" && (m = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (f = v.baseId) !== null && f !== void 0 ? f : (0, r.normalizeId)(m?.[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = s;
  function a(u) {
    const v = h.call(this, u);
    if (v)
      return v;
    const f = (0, r.getFullPath)(this.opts.uriResolver, u.root.baseId), { es5: m, lines: C } = this.opts.code, { ownProperties: c } = this.opts, d = new e.CodeGen(this.scope, { es5: m, lines: C, ownProperties: c });
    let g;
    u.$async && (g = d.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = d.scopeName("validate");
    u.validateName = k;
    const x = {
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
      rootId: f,
      baseId: u.baseId || f,
      schemaPath: e.nil,
      errSchemaPath: u.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let O;
    try {
      this._compilations.add(u), (0, o.validateFunctionCode)(x), d.optimize(this.opts.code.optimize);
      const A = d.toString();
      O = `${d.scopeRefs(n.default.scope)}return ${A}`, this.opts.code.process && (O = this.opts.code.process(O, u));
      const I = new Function(`${n.default.self}`, `${n.default.scope}`, O)(this, this.scope.get());
      if (this.scope.value(k, { ref: I }), I.errors = null, I.schema = u.schema, I.schemaEnv = u, u.$async && (I.$async = !0), this.opts.code.source === !0 && (I.source = { validateName: k, validateCode: A, scopeValues: d._values }), this.opts.unevaluated) {
        const { props: H, items: X } = x;
        I.evaluated = {
          props: H instanceof e.Name ? void 0 : H,
          items: X instanceof e.Name ? void 0 : X,
          dynamicProps: H instanceof e.Name,
          dynamicItems: X instanceof e.Name
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
  function l(u, v, f) {
    var m;
    f = (0, r.resolveUrl)(this.opts.uriResolver, v, f);
    const C = u.refs[f];
    if (C)
      return C;
    let c = y.call(this, u, f);
    if (c === void 0) {
      const d = (m = u.localRefs) === null || m === void 0 ? void 0 : m[f], { schemaId: g } = this.opts;
      d && (c = new s({ schema: d, schemaId: g, root: u, baseId: v }));
    }
    if (c !== void 0)
      return u.refs[f] = p.call(this, c);
  }
  we.resolveRef = l;
  function p(u) {
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
    let f;
    for (; typeof (f = this.refs[v]) == "string"; )
      v = f;
    return f || this.schemas[v] || $.call(this, u, v);
  }
  function $(u, v) {
    const f = this.opts.uriResolver.parse(v), m = (0, r._getFullPath)(this.opts.uriResolver, f);
    let C = (0, r.getFullPath)(this.opts.uriResolver, u.baseId, void 0);
    if (Object.keys(u.schema).length > 0 && m === C)
      return _.call(this, f, u);
    const c = (0, r.normalizeId)(m), d = this.refs[c] || this.schemas[c];
    if (typeof d == "string") {
      const g = $.call(this, u, d);
      return typeof g?.schema != "object" ? void 0 : _.call(this, f, g);
    }
    if (typeof d?.schema == "object") {
      if (d.validate || a.call(this, d), c === (0, r.normalizeId)(v)) {
        const { schema: g } = d, { schemaId: k } = this.opts, x = g[k];
        return x && (C = (0, r.resolveUrl)(this.opts.uriResolver, C, x)), new s({ schema: g, schemaId: k, root: u, baseId: C });
      }
      return _.call(this, f, d);
    }
  }
  we.resolveSchema = $;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(u, { baseId: v, schema: f, root: m }) {
    var C;
    if (((C = u.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/")
      return;
    for (const g of u.fragment.slice(1).split("/")) {
      if (typeof f == "boolean")
        return;
      const k = f[(0, i.unescapeFragment)(g)];
      if (k === void 0)
        return;
      f = k;
      const x = typeof f == "object" && f[this.opts.schemaId];
      !w.has(g) && x && (v = (0, r.resolveUrl)(this.opts.uriResolver, v, x));
    }
    let c;
    if (typeof f != "boolean" && f.$ref && !(0, i.schemaHasRulesButRef)(f, this.RULES)) {
      const g = (0, r.resolveUrl)(this.opts.uriResolver, v, f.$ref);
      c = $.call(this, m, g);
    }
    const { schemaId: d } = this.opts;
    if (c = c || new s({ schema: f, schemaId: d, root: m, baseId: v }), c.schema !== c.root.schema)
      return c;
  }
  return we;
}
const da = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", ua = "Meta-schema for $data reference (JSON AnySchema extension proposal)", fa = "object", pa = ["$data"], ha = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ma = !1, ga = {
  $id: da,
  description: ua,
  type: fa,
  required: pa,
  properties: ha,
  additionalProperties: ma
};
var jt = {}, $t = { exports: {} }, er, po;
function Qi() {
  if (po) return er;
  po = 1;
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
  function p(c) {
    let d = 0;
    const g = { error: !1, address: "", zone: "" }, k = [], x = [];
    let O = !1, A = !1, P = l;
    for (let I = 0; I < c.length; I++) {
      const H = c[I];
      if (!(H === "[" || H === "]"))
        if (H === ":") {
          if (O === !0 && (A = !0), !P(x, k, g))
            break;
          if (++d > 7) {
            g.error = !0;
            break;
          }
          I > 0 && c[I - 1] === ":" && (O = !0), k.push(":");
          continue;
        } else if (H === "%") {
          if (!P(x, k, g))
            break;
          P = a;
        } else {
          x.push(H);
          continue;
        }
    }
    return x.length && (P === a ? g.zone = x.join("") : A ? k.push(x.join("")) : k.push(o(x))), g.address = k.join(""), g;
  }
  function h(c) {
    if (b(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const d = p(c);
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
    let k = -1, x = 0;
    for (; x = d.length; ) {
      if (x === 1) {
        if (d === ".")
          break;
        if (d === "/") {
          g.push("/");
          break;
        } else {
          g.push(d);
          break;
        }
      } else if (x === 2) {
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
      } else if (x === 3 && d === "/..") {
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
  const $ = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, w = /[@/?#:]/g, _ = /[@/?#]/g;
  function u(c, d) {
    const g = d ? _ : w;
    return g.lastIndex = 0, c.replace(g, (k) => $[k]);
  }
  function v(c, d = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let g = "";
    for (let k = 0; k < c.length; k++) {
      if (c[k] === "%" && k + 2 < c.length) {
        const x = c.slice(k + 1, k + 3);
        if (n(x)) {
          const O = x.toUpperCase(), A = String.fromCharCode(parseInt(O, 16));
          d && r(A) ? g += A : g += "%" + O, k += 2;
          continue;
        }
      }
      g += c[k];
    }
    return g;
  }
  function f(c) {
    let d = "";
    for (let g = 0; g < c.length; g++) {
      if (c[g] === "%" && g + 2 < c.length) {
        const k = c.slice(g + 1, g + 3);
        if (n(k)) {
          const x = k.toUpperCase(), O = String.fromCharCode(parseInt(x, 16));
          O !== "." && r(O) ? d += O : d += "%" + x, g += 2;
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
  return er = {
    nonSimpleDomain: s,
    recomposeAuthority: C,
    reescapeHostDelimiters: u,
    normalizePercentEncoding: v,
    normalizePathEncoding: f,
    escapePreservingEscapes: m,
    removeDotSegments: y,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: o
  }, er;
}
var tr, ho;
function ya() {
  if (ho) return tr;
  ho = 1;
  const { isUUID: e } = Qi(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function p(c, d) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const g = c.path.match(t);
    if (g) {
      const k = d.scheme || c.scheme || "urn";
      c.nid = g[1].toLowerCase(), c.nss = g[2];
      const x = `${k}:${d.nid || c.nid}`, O = C(x);
      c.path = void 0, O && (c = O.parse(c, d));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function h(c, d) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const g = d.scheme || c.scheme || "urn", k = c.nid.toLowerCase(), x = `${g}:${d.nid || k}`, O = C(x);
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
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: $.domainHost,
      parse: o,
      serialize: s
    }
  ), _ = (
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
      domainHost: _.domainHost,
      parse: _.parse,
      serialize: _.serialize
    }
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: $,
      https: w,
      ws: _,
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
  return tr = {
    wsIsSecure: i,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: C
  }, tr;
}
var mo;
function va() {
  if (mo) return $t.exports;
  mo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: l } = Qi(), { SCHEMES: p, getSchemeHandler: h } = ya();
  function b(x, O) {
    return typeof x == "string" ? x = /** @type {T} */
    c(x, O) : typeof x == "object" && (x = /** @type {T} */
    C(_(x, O), O)), x;
  }
  function y(x, O, A) {
    const P = A ? Object.assign({ scheme: "null" }, A) : { scheme: "null" }, I = $(C(x, P), C(O, P), P, !0);
    return P.skipEscape = !0, _(I, P);
  }
  function $(x, O, A, P) {
    const I = {};
    return P || (x = C(_(x, A), A), O = C(_(O, A), A)), A = A || {}, !A.tolerant && O.scheme ? (I.scheme = O.scheme, I.userinfo = O.userinfo, I.host = O.host, I.port = O.port, I.path = t(O.path || ""), I.query = O.query) : (O.userinfo !== void 0 || O.host !== void 0 || O.port !== void 0 ? (I.userinfo = O.userinfo, I.host = O.host, I.port = O.port, I.path = t(O.path || ""), I.query = O.query) : (O.path ? (O.path[0] === "/" ? I.path = t(O.path) : ((x.userinfo !== void 0 || x.host !== void 0 || x.port !== void 0) && !x.path ? I.path = "/" + O.path : x.path ? I.path = x.path.slice(0, x.path.lastIndexOf("/") + 1) + O.path : I.path = O.path, I.path = t(I.path)), I.query = O.query) : (I.path = x.path, O.query !== void 0 ? I.query = O.query : I.query = x.query), I.userinfo = x.userinfo, I.host = x.host, I.port = x.port), I.scheme = x.scheme), I.fragment = O.fragment, I;
  }
  function w(x, O, A) {
    const P = g(x, A), I = g(O, A);
    return P !== void 0 && I !== void 0 && P.toLowerCase() === I.toLowerCase();
  }
  function _(x, O) {
    const A = {
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
    }, P = Object.assign({}, O), I = [], H = h(P.scheme || A.scheme);
    H && H.serialize && H.serialize(A, P), A.path !== void 0 && (P.skipEscape ? A.path = r(A.path) : (A.path = o(A.path), A.scheme !== void 0 && (A.path = A.path.split("%3A").join(":")))), P.reference !== "suffix" && A.scheme && I.push(A.scheme, ":");
    const X = n(A);
    if (X !== void 0 && (P.reference !== "suffix" && I.push("//"), I.push(X), A.path && A.path[0] !== "/" && I.push("/")), A.path !== void 0) {
      let Q = A.path;
      !P.absolutePath && (!H || !H.absolutePath) && (Q = t(Q)), X === void 0 && Q[0] === "/" && Q[1] === "/" && (Q = "/%2F" + Q.slice(2)), I.push(Q);
    }
    return A.query !== void 0 && I.push("?", A.query), A.fragment !== void 0 && I.push("#", A.fragment), I.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, v = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function f(x, O) {
    if (O[2] !== void 0 && x.path && x.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof x.port == "number" && (x.port < 0 || x.port > 65535))
      return "URI port is malformed.";
  }
  function m(x, O) {
    const A = Object.assign({}, O), P = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let I = !1, H = !1;
    A.reference === "suffix" && (A.scheme ? x = A.scheme + ":" + x : x = "//" + x);
    const X = x.match(v);
    X !== null && X[1].indexOf("\\") !== -1 && (P.error = "URI authority must not contain a literal backslash.", I = !0);
    const Q = x.match(u);
    if (Q) {
      P.scheme = Q[1], P.userinfo = Q[3], P.host = Q[4], P.port = parseInt(Q[5], 10), P.path = Q[6] || "", P.query = Q[7], P.fragment = Q[8], isNaN(P.port) && (P.port = Q[5]);
      const K = f(P, Q);
      if (K !== void 0 && (P.error = P.error || K, I = !0), P.host)
        if (a(P.host) === !1) {
          const q = e(P.host);
          P.host = q.host.toLowerCase(), H = q.isIPV6;
        } else
          H = !0;
      P.scheme === void 0 && P.userinfo === void 0 && P.host === void 0 && P.port === void 0 && P.query === void 0 && !P.path ? P.reference = "same-document" : P.scheme === void 0 ? P.reference = "relative" : P.fragment === void 0 ? P.reference = "absolute" : P.reference = "uri", A.reference && A.reference !== "suffix" && A.reference !== P.reference && (P.error = P.error || "URI is not a " + A.reference + " reference.");
      const G = h(A.scheme || P.scheme);
      if (!A.unicodeSupport && (!G || !G.unicodeSupport) && P.host && (A.domainHost || G && G.domainHost) && H === !1 && l(P.host))
        try {
          P.host = new URL("http://" + P.host).hostname;
        } catch (ee) {
          P.error = P.error || "Host's domain name can not be converted to ASCII: " + ee;
        }
      if ((!G || G && !G.skipNormalize) && (x.indexOf("%") !== -1 && (P.scheme !== void 0 && (P.scheme = unescape(P.scheme)), P.host !== void 0 && (P.host = s(unescape(P.host), H))), P.path && (P.path = i(P.path)), P.fragment))
        try {
          P.fragment = encodeURI(decodeURIComponent(P.fragment));
        } catch {
          P.error = P.error || "URI malformed";
        }
      G && G.parse && G.parse(P, A);
    } else
      P.error = P.error || "URI can not be parsed.";
    return { parsed: P, malformedAuthorityOrPort: I };
  }
  function C(x, O) {
    return m(x, O).parsed;
  }
  function c(x, O) {
    return d(x, O).normalized;
  }
  function d(x, O) {
    const { parsed: A, malformedAuthorityOrPort: P } = m(x, O);
    return {
      normalized: P ? x : _(A, O),
      malformedAuthorityOrPort: P
    };
  }
  function g(x, O) {
    if (typeof x == "string") {
      const { normalized: A, malformedAuthorityOrPort: P } = d(x, O);
      return P ? void 0 : A;
    }
    if (typeof x == "object")
      return _(x, O);
  }
  const k = {
    SCHEMES: p,
    normalize: b,
    resolve: y,
    resolveComponent: $,
    equal: w,
    serialize: _,
    parse: C
  };
  return $t.exports = k, $t.exports.default = k, $t.exports.fastUri = k, $t.exports;
}
var go;
function $a() {
  if (go) return jt;
  go = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = va();
  return e.code = 'require("ajv/dist/runtime/uri").default', jt.default = e, jt;
}
var yo;
function ba() {
  return yo || (yo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ qn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ re();
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
    const r = /* @__PURE__ */ _r(), i = /* @__PURE__ */ Vn(), o = /* @__PURE__ */ Yi(), s = /* @__PURE__ */ Ln(), a = /* @__PURE__ */ re(), l = /* @__PURE__ */ Dn(), p = /* @__PURE__ */ On(), h = /* @__PURE__ */ ie(), b = ga, y = /* @__PURE__ */ $a(), $ = (q, R) => new RegExp(q, R);
    $.code = "new RegExp";
    const w = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
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
    }, f = 200;
    function m(q) {
      var R, D, F, S, E, z, W, B, Z, te, N, j, L, U, Y, ne, ue, be, he, fe, de, Ve, _e, Un, Kn;
      const gt = q.strict, Hn = (R = q.code) === null || R === void 0 ? void 0 : R.optimize, Ir = Hn === !0 || Hn === void 0 ? 1 : Hn || 0, Dr = (F = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && F !== void 0 ? F : $, bs = (S = q.uriResolver) !== null && S !== void 0 ? S : y.default;
      return {
        strictSchema: (z = (E = q.strictSchema) !== null && E !== void 0 ? E : gt) !== null && z !== void 0 ? z : !0,
        strictNumbers: (B = (W = q.strictNumbers) !== null && W !== void 0 ? W : gt) !== null && B !== void 0 ? B : !0,
        strictTypes: (te = (Z = q.strictTypes) !== null && Z !== void 0 ? Z : gt) !== null && te !== void 0 ? te : "log",
        strictTuples: (j = (N = q.strictTuples) !== null && N !== void 0 ? N : gt) !== null && j !== void 0 ? j : "log",
        strictRequired: (U = (L = q.strictRequired) !== null && L !== void 0 ? L : gt) !== null && U !== void 0 ? U : !1,
        code: q.code ? { ...q.code, optimize: Ir, regExp: Dr } : { optimize: Ir, regExp: Dr },
        loopRequired: (Y = q.loopRequired) !== null && Y !== void 0 ? Y : f,
        loopEnum: (ne = q.loopEnum) !== null && ne !== void 0 ? ne : f,
        meta: (ue = q.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (be = q.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (he = q.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (fe = q.schemaId) !== null && fe !== void 0 ? fe : "$id",
        addUsedSchema: (de = q.addUsedSchema) !== null && de !== void 0 ? de : !0,
        validateSchema: (Ve = q.validateSchema) !== null && Ve !== void 0 ? Ve : !0,
        validateFormats: (_e = q.validateFormats) !== null && _e !== void 0 ? _e : !0,
        unicodeRegExp: (Un = q.unicodeRegExp) !== null && Un !== void 0 ? Un : !0,
        int32range: (Kn = q.int32range) !== null && Kn !== void 0 ? Kn : !0,
        uriResolver: bs
      };
    }
    class C {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...m(R) };
        const { es5: D, lines: F } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: D, lines: F }), this.logger = P(R.logger);
        const S = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, o.getRules)(), c.call(this, u, R, "NOT SUPPORTED"), c.call(this, v, R, "DEPRECATED", "warn"), this._metaOpts = O.call(this), R.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && x.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), g.call(this), R.validateFormats = S;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: D, schemaId: F } = this.opts;
        let S = b;
        F === "id" && (S = { ...b }, S.id = S.$id, delete S.$id), D && R && this.addMetaSchema(S, S[F], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: D } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[D] || R : void 0;
      }
      validate(R, D) {
        let F;
        if (typeof R == "string") {
          if (F = this.getSchema(R), !F)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          F = this.compile(R);
        const S = F(D);
        return "$async" in F || (this.errors = F.errors), S;
      }
      compile(R, D) {
        const F = this._addSchema(R, D);
        return F.validate || this._compileSchemaEnv(F);
      }
      compileAsync(R, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: F } = this.opts;
        return S.call(this, R, D);
        async function S(te, N) {
          await E.call(this, te.$schema);
          const j = this._addSchema(te, N);
          return j.validate || z.call(this, j);
        }
        async function E(te) {
          te && !this.getSchema(te) && await S.call(this, { $ref: te }, !0);
        }
        async function z(te) {
          try {
            return this._compileSchemaEnv(te);
          } catch (N) {
            if (!(N instanceof i.default))
              throw N;
            return W.call(this, N), await B.call(this, N.missingSchema), z.call(this, te);
          }
        }
        function W({ missingSchema: te, missingRef: N }) {
          if (this.refs[te])
            throw new Error(`AnySchema ${te} is loaded but ${N} cannot be resolved`);
        }
        async function B(te) {
          const N = await Z.call(this, te);
          this.refs[te] || await E.call(this, N.$schema), this.refs[te] || this.addSchema(N, te, D);
        }
        async function Z(te) {
          const N = this._loading[te];
          if (N)
            return N;
          try {
            return await (this._loading[te] = F(te));
          } finally {
            delete this._loading[te];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, D, F, S = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const z of R)
            this.addSchema(z, void 0, F, S);
          return this;
        }
        let E;
        if (typeof R == "object") {
          const { schemaId: z } = this.opts;
          if (E = R[z], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${z} must be string`);
        }
        return D = (0, l.normalizeId)(D || E), this._checkUnique(D), this.schemas[D] = this._addSchema(R, F, D, S, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, D, F = this.opts.validateSchema) {
        return this.addSchema(R, D, !0, F), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, D) {
        if (typeof R == "boolean")
          return !0;
        let F;
        if (F = R.$schema, F !== void 0 && typeof F != "string")
          throw new Error("$schema must be a string");
        if (F = F || this.opts.defaultMeta || this.defaultMeta(), !F)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const S = this.validate(F, R);
        if (!S && D) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return S;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let D;
        for (; typeof (D = d.call(this, R)) == "string"; )
          R = D;
        if (D === void 0) {
          const { schemaId: F } = this.opts, S = new s.SchemaEnv({ schema: {}, schemaId: F });
          if (D = s.resolveSchema.call(this, S, R), !D)
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
            const D = d.call(this, R);
            return typeof D == "object" && this._cache.delete(D.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const D = R;
            this._cache.delete(D);
            let F = R[this.opts.schemaId];
            return F && (F = (0, l.normalizeId)(F), delete this.schemas[F], delete this.refs[F]), this;
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
        let F;
        if (typeof R == "string")
          F = R, typeof D == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = F);
        else if (typeof R == "object" && D === void 0) {
          if (D = R, F = D.keyword, Array.isArray(F) && !F.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (H.call(this, F, D), !D)
          return (0, h.eachItem)(F, (E) => X.call(this, E)), this;
        K.call(this, D);
        const S = {
          ...D,
          type: (0, p.getJSONTypes)(D.type),
          schemaType: (0, p.getJSONTypes)(D.schemaType)
        };
        return (0, h.eachItem)(F, S.type.length === 0 ? (E) => X.call(this, E, S) : (E) => S.type.forEach((z) => X.call(this, E, S, z))), this;
      }
      getKeyword(R) {
        const D = this.RULES.all[R];
        return typeof D == "object" ? D.definition : !!D;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: D } = this;
        delete D.keywords[R], delete D.all[R];
        for (const F of D.rules) {
          const S = F.rules.findIndex((E) => E.keyword === R);
          S >= 0 && F.rules.splice(S, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[R] = D, this;
      }
      errorsText(R = this.errors, { separator: D = ", ", dataVar: F = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((S) => `${F}${S.instancePath} ${S.message}`).reduce((S, E) => S + D + E);
      }
      $dataMetaSchema(R, D) {
        const F = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const S of D) {
          const E = S.split("/").slice(1);
          let z = R;
          for (const W of E)
            z = z[W];
          for (const W in F) {
            const B = F[W];
            if (typeof B != "object")
              continue;
            const { $data: Z } = B.definition, te = z[W];
            Z && te && (z[W] = ee(te));
          }
        }
        return R;
      }
      _removeAllSchemas(R, D) {
        for (const F in R) {
          const S = R[F];
          (!D || D.test(F)) && (typeof S == "string" ? delete R[F] : S && !S.meta && (this._cache.delete(S.schema), delete R[F]));
        }
      }
      _addSchema(R, D, F, S = this.opts.validateSchema, E = this.opts.addUsedSchema) {
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
        let B = this._cache.get(R);
        if (B !== void 0)
          return B;
        F = (0, l.normalizeId)(z || F);
        const Z = l.getSchemaRefs.call(this, R, F);
        return B = new s.SchemaEnv({ schema: R, schemaId: W, meta: D, baseId: F, localRefs: Z }), this._cache.set(B.schema, B), E && !F.startsWith("#") && (F && this._checkUnique(F), this.refs[F] = B), S && this.validateSchema(R, !0), B;
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
    C.ValidationError = r.default, C.MissingRefError = i.default, e.default = C;
    function c(q, R, D, F = "error") {
      for (const S in q) {
        const E = S;
        E in R && this.logger[F](`${D}: option ${S}. ${q[E]}`);
      }
    }
    function d(q) {
      return q = (0, l.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function g() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const R in q)
            this.addSchema(q[R], R);
    }
    function k() {
      for (const q in this.opts.formats) {
        const R = this.opts.formats[q];
        R && this.addFormat(q, R);
      }
    }
    function x(q) {
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
    function O() {
      const q = { ...this.opts };
      for (const R of w)
        delete q[R];
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
    const I = /^[a-z_$][a-z0-9_$:-]*$/i;
    function H(q, R) {
      const { RULES: D } = this;
      if ((0, h.eachItem)(q, (F) => {
        if (D.keywords[F])
          throw new Error(`Keyword ${F} is already defined`);
        if (!I.test(F))
          throw new Error(`Keyword ${F} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function X(q, R, D) {
      var F;
      const S = R?.post;
      if (D && S)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let z = S ? E.post : E.rules.find(({ type: B }) => B === D);
      if (z || (z = { type: D, rules: [] }, E.rules.push(z)), E.keywords[q] = !0, !R)
        return;
      const W = {
        keyword: q,
        definition: {
          ...R,
          type: (0, p.getJSONTypes)(R.type),
          schemaType: (0, p.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? Q.call(this, z, W, R.before) : z.rules.push(W), E.all[q] = W, (F = R.implements) === null || F === void 0 || F.forEach((B) => this.addKeyword(B));
    }
    function Q(q, R, D) {
      const F = q.rules.findIndex((S) => S.keyword === D);
      F >= 0 ? q.rules.splice(F, 0, R) : (q.rules.push(R), this.logger.warn(`rule ${D} is not defined`));
    }
    function K(q) {
      let { metaSchema: R } = q;
      R !== void 0 && (q.$data && this.opts.$data && (R = ee(R)), q.validateSchema = this.compile(R, !0));
    }
    const G = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ee(q) {
      return { anyOf: [q, G] };
    }
  })(Gn)), Gn;
}
var zt = {}, It = {}, Dt = {}, vo;
function wa() {
  if (vo) return Dt;
  vo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Dt.default = e, Dt;
}
var Le = {}, $o;
function Sr() {
  if ($o) return Le;
  $o = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.callRef = Le.getValidate = void 0;
  const e = /* @__PURE__ */ Vn(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ Ne(), i = /* @__PURE__ */ Ln(), o = /* @__PURE__ */ ie(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(p) {
      const { gen: h, schema: b, it: y } = p, { baseId: $, schemaEnv: w, validateName: _, opts: u, self: v } = y, { root: f } = w;
      if ((b === "#" || b === "#/") && $ === f.baseId)
        return C();
      const m = i.resolveRef.call(v, f, $, b);
      if (m === void 0)
        throw new e.default(y.opts.uriResolver, $, b);
      if (m instanceof i.SchemaEnv)
        return c(m);
      return d(m);
      function C() {
        if (w === f)
          return l(p, _, w, w.$async);
        const g = h.scopeValue("root", { ref: f });
        return l(p, (0, n._)`${g}.validate`, f, f.$async);
      }
      function c(g) {
        const k = a(p, g);
        l(p, k, g, g.$async);
      }
      function d(g) {
        const k = h.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, n.stringify)(g) } : { ref: g }), x = h.name("valid"), O = p.subschema({
          schema: g,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: b
        }, x);
        p.mergeEvaluated(O), p.ok(x);
      }
    }
  };
  function a(p, h) {
    const { gen: b } = p;
    return h.validate ? b.scopeValue("validate", { ref: h.validate }) : (0, n._)`${b.scopeValue("wrapper", { ref: h })}.validate`;
  }
  Le.getValidate = a;
  function l(p, h, b, y) {
    const { gen: $, it: w } = p, { allErrors: _, schemaEnv: u, opts: v } = w, f = v.passContext ? r.default.this : n.nil;
    y ? m() : C();
    function m() {
      if (!u.$async)
        throw new Error("async schema referenced by sync schema");
      const g = $.let("valid");
      $.try(() => {
        $.code((0, n._)`await ${(0, t.callValidateCode)(p, h, f)}`), d(h), _ || $.assign(g, !0);
      }, (k) => {
        $.if((0, n._)`!(${k} instanceof ${w.ValidationError})`, () => $.throw(k)), c(k), _ || $.assign(g, !1);
      }), p.ok(g);
    }
    function C() {
      p.result((0, t.callValidateCode)(p, h, f), () => d(h), () => c(h));
    }
    function c(g) {
      const k = (0, n._)`${g}.errors`;
      $.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), $.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function d(g) {
      var k;
      if (!w.opts.unevaluated)
        return;
      const x = (k = b?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (w.props !== !0)
        if (x && !x.dynamicProps)
          x.props !== void 0 && (w.props = o.mergeEvaluated.props($, x.props, w.props));
        else {
          const O = $.var("props", (0, n._)`${g}.evaluated.props`);
          w.props = o.mergeEvaluated.props($, O, w.props, n.Name);
        }
      if (w.items !== !0)
        if (x && !x.dynamicItems)
          x.items !== void 0 && (w.items = o.mergeEvaluated.items($, x.items, w.items));
        else {
          const O = $.var("items", (0, n._)`${g}.evaluated.items`);
          w.items = o.mergeEvaluated.items($, O, w.items, n.Name);
        }
    }
  }
  return Le.callRef = l, Le.default = s, Le;
}
var bo;
function _a() {
  if (bo) return It;
  bo = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wa(), t = /* @__PURE__ */ Sr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return It.default = n, It;
}
var qt = {}, Vt = {}, wo;
function Sa() {
  if (wo) return Vt;
  wo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = e.operators, n = {
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
  return Vt.default = i, Vt;
}
var Lt = {}, _o;
function Ca() {
  if (_o) return Lt;
  _o = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: i, data: o, schemaCode: s, it: a } = r, l = a.opts.multipleOfPrecision, p = i.let("res"), h = l ? (0, e._)`Math.abs(Math.round(${p}) - ${p}) > 1e-${l}` : (0, e._)`${p} !== parseInt(${p})`;
      r.fail$data((0, e._)`(${s} === 0 || (${p} = ${o}/${s}, ${h}))`);
    }
  };
  return Lt.default = n, Lt;
}
var Bt = {}, Ut = {}, So;
function ka() {
  if (So) return Ut;
  So = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return Ut.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Ut;
}
var Co;
function Ea() {
  if (Co) return Bt;
  Co = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ka(), i = {
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
      const { keyword: s, data: a, schemaCode: l, it: p } = o, h = s === "maxLength" ? e.operators.GT : e.operators.LT, b = p.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${b} ${h} ${l}`);
    }
  };
  return Bt.default = i, Bt;
}
var Kt = {}, ko;
function xa() {
  if (ko) return Kt;
  ko = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ re(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: p, schemaCode: h, it: b } = o, y = b.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: $ } = b.opts.code, w = $.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, $), _ = s.let("valid");
        s.try(() => s.assign(_, (0, n._)`${w}(${h}, ${y}).test(${a})`), () => s.assign(_, !1)), o.fail$data((0, n._)`!${_}`);
      } else {
        const $ = (0, e.usePattern)(o, p);
        o.fail$data((0, n._)`!${$}.test(${a})`);
      }
    }
  };
  return Kt.default = i, Kt;
}
var Ht = {}, Eo;
function Pa() {
  if (Eo) return Ht;
  Eo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), n = {
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
  return Ht.default = n, Ht;
}
var Gt = {}, xo;
function Aa() {
  if (xo) return Gt;
  xo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ ie(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: l, data: p, $data: h, it: b } = o, { opts: y } = b;
      if (!h && a.length === 0)
        return;
      const $ = a.length >= y.loopRequired;
      if (b.allErrors ? w() : _(), y.strictRequired) {
        const f = o.parentSchema.properties, { definedProperties: m } = o.it;
        for (const C of a)
          if (f?.[C] === void 0 && !m.has(C)) {
            const c = b.schemaEnv.baseId + b.errSchemaPath, d = `required property "${C}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(b, d, b.opts.strictRequired);
          }
      }
      function w() {
        if ($ || h)
          o.block$data(t.nil, u);
        else
          for (const f of a)
            (0, e.checkReportMissingProp)(o, f);
      }
      function _() {
        const f = s.let("missing");
        if ($ || h) {
          const m = s.let("valid", !0);
          o.block$data(m, () => v(f, m)), o.ok(m);
        } else
          s.if((0, e.checkMissingProp)(o, a, f)), (0, e.reportMissingProp)(o, f), s.else();
      }
      function u() {
        s.forOf("prop", l, (f) => {
          o.setParams({ missingProperty: f }), s.if((0, e.noPropertyInData)(s, p, f, y.ownProperties), () => o.error());
        });
      }
      function v(f, m) {
        o.setParams({ missingProperty: f }), s.forOf(f, l, () => {
          s.assign(m, (0, e.propertyInData)(s, p, f, y.ownProperties)), s.if((0, t.not)(m), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Gt.default = i, Gt;
}
var Wt = {}, Po;
function Ra() {
  if (Po) return Wt;
  Po = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), n = {
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
  return Wt.default = n, Wt;
}
var Jt = {}, Yt = {}, Ao;
function Cr() {
  if (Ao) return Yt;
  Ao = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = Zi();
  return e.code = 'require("ajv/dist/runtime/equal").default', Yt.default = e, Yt;
}
var Ro;
function Na() {
  if (Ro) return Jt;
  Ro = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ On(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Cr(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: l, $data: p, schema: h, parentSchema: b, schemaCode: y, it: $ } = s;
      if (!p && !h)
        return;
      const w = a.let("valid"), _ = b.items ? (0, e.getSchemaTypes)(b.items) : [];
      s.block$data(w, u, (0, t._)`${y} === false`), s.ok(w);
      function u() {
        const C = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        s.setParams({ i: C, j: c }), a.assign(w, !0), a.if((0, t._)`${C} > 1`, () => (v() ? f : m)(C, c));
      }
      function v() {
        return _.length > 0 && !_.some((C) => C === "object" || C === "array");
      }
      function f(C, c) {
        const d = a.name("item"), g = (0, e.checkDataTypes)(_, d, $.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${C}--;`, () => {
          a.let(d, (0, t._)`${l}[${C}]`), a.if(g, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${d} == "string"`, (0, t._)`${d} += "_"`), a.if((0, t._)`typeof ${k}[${d}] == "number"`, () => {
            a.assign(c, (0, t._)`${k}[${d}]`), s.error(), a.assign(w, !1).break();
          }).code((0, t._)`${k}[${d}] = ${C}`);
        });
      }
      function m(C, c) {
        const d = (0, n.useFunc)(a, r.default), g = a.name("outer");
        a.label(g).for((0, t._)`;${C}--;`, () => a.for((0, t._)`${c} = ${C}; ${c}--;`, () => a.if((0, t._)`${d}(${l}[${C}], ${l}[${c}])`, () => {
          s.error(), a.assign(w, !1).break(g);
        })));
      }
    }
  };
  return Jt.default = o, Jt;
}
var Xt = {}, No;
function Ma() {
  if (No) return Xt;
  No = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Cr(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schemaCode: p, schema: h } = o;
      l || h && typeof h == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${p})`) : o.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return Xt.default = i, Xt;
}
var Zt = {}, Mo;
function Fa() {
  if (Mo) return Zt;
  Mo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Cr(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: p, schemaCode: h, it: b } = o;
      if (!l && p.length === 0)
        throw new Error("enum must have non-empty array");
      const y = p.length >= b.opts.loopEnum;
      let $;
      const w = () => $ ?? ($ = (0, t.useFunc)(s, n.default));
      let _;
      if (y || l)
        _ = s.let("valid"), o.block$data(_, u);
      else {
        if (!Array.isArray(p))
          throw new Error("ajv implementation error");
        const f = s.const("vSchema", h);
        _ = (0, e.or)(...p.map((m, C) => v(f, C)));
      }
      o.pass(_);
      function u() {
        s.assign(_, !1), s.forOf("v", h, (f) => s.if((0, e._)`${w()}(${a}, ${f})`, () => s.assign(_, !0).break()));
      }
      function v(f, m) {
        const C = p[m];
        return typeof C == "object" && C !== null ? (0, e._)`${w()}(${a}, ${f}[${m}])` : (0, e._)`${a} === ${C}`;
      }
    }
  };
  return Zt.default = i, Zt;
}
var Fo;
function Oa() {
  if (Fo) return qt;
  Fo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sa(), t = /* @__PURE__ */ Ca(), n = /* @__PURE__ */ Ea(), r = /* @__PURE__ */ xa(), i = /* @__PURE__ */ Pa(), o = /* @__PURE__ */ Aa(), s = /* @__PURE__ */ Ra(), a = /* @__PURE__ */ Na(), l = /* @__PURE__ */ Ma(), p = /* @__PURE__ */ Fa(), h = [
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
    p.default
  ];
  return qt.default = h, qt;
}
var Qt = {}, tt = {}, Oo;
function es() {
  if (Oo) return tt;
  Oo = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), r = {
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
    const { gen: a, schema: l, data: p, keyword: h, it: b } = o;
    b.items = !0;
    const y = a.const("len", (0, e._)`${p}.length`);
    if (l === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${y} <= ${s.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(b, l)) {
      const w = a.var("valid", (0, e._)`${y} <= ${s.length}`);
      a.if((0, e.not)(w), () => $(w)), o.ok(w);
    }
    function $(w) {
      a.forRange("i", s.length, y, (_) => {
        o.subschema({ keyword: h, dataProp: _, dataPropType: t.Type.Num }, w), b.allErrors || a.if((0, e.not)(w), () => a.break());
      });
    }
  }
  return tt.validateAdditionalItems = i, tt.default = r, tt;
}
var en = {}, nt = {}, To;
function ts() {
  if (To) return nt;
  To = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.validateTuple = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Me(), r = {
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
    const { gen: l, parentSchema: p, data: h, keyword: b, it: y } = o;
    _(p), y.opts.unevaluated && a.length && y.items !== !0 && (y.items = t.mergeEvaluated.items(l, a.length, y.items));
    const $ = l.name("valid"), w = l.const("len", (0, e._)`${h}.length`);
    a.forEach((u, v) => {
      (0, t.alwaysValidSchema)(y, u) || (l.if((0, e._)`${w} > ${v}`, () => o.subschema({
        keyword: b,
        schemaProp: v,
        dataProp: v
      }, $)), o.ok($));
    });
    function _(u) {
      const { opts: v, errSchemaPath: f } = y, m = a.length, C = m === u.minItems && (m === u.maxItems || u[s] === !1);
      if (v.strictTuples && !C) {
        const c = `"${b}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${f}"`;
        (0, t.checkStrictMode)(y, c, v.strictTuples);
      }
    }
  }
  return nt.validateTuple = i, nt.default = r, nt;
}
var jo;
function Ta() {
  if (jo) return en;
  jo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ts(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return en.default = t, en;
}
var tn = {}, zo;
function ja() {
  if (zo) return tn;
  zo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ es(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: l, it: p } = s, { prefixItems: h } = l;
      p.items = !0, !(0, t.alwaysValidSchema)(p, a) && (h ? (0, r.validateAdditionalItems)(s, h) : s.ok((0, n.validateArray)(s)));
    }
  };
  return tn.default = o, tn;
}
var nn = {}, Io;
function za() {
  if (Io) return nn;
  Io = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), r = {
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
      const { gen: o, schema: s, parentSchema: a, data: l, it: p } = i;
      let h, b;
      const { minContains: y, maxContains: $ } = a;
      p.opts.next ? (h = y === void 0 ? 1 : y, b = $) : h = 1;
      const w = o.const("len", (0, e._)`${l}.length`);
      if (i.setParams({ min: h, max: b }), b === void 0 && h === 0) {
        (0, t.checkStrictMode)(p, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (b !== void 0 && h > b) {
        (0, t.checkStrictMode)(p, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(p, s)) {
        let m = (0, e._)`${w} >= ${h}`;
        b !== void 0 && (m = (0, e._)`${m} && ${w} <= ${b}`), i.pass(m);
        return;
      }
      p.items = !0;
      const _ = o.name("valid");
      b === void 0 && h === 1 ? v(_, () => o.if(_, () => o.break())) : h === 0 ? (o.let(_, !0), b !== void 0 && o.if((0, e._)`${l}.length > 0`, u)) : (o.let(_, !1), u()), i.result(_, () => i.reset());
      function u() {
        const m = o.name("_valid"), C = o.let("count", 0);
        v(m, () => o.if(m, () => f(C)));
      }
      function v(m, C) {
        o.forRange("i", 0, w, (c) => {
          i.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), C();
        });
      }
      function f(m) {
        o.code((0, e._)`${m}++`), b === void 0 ? o.if((0, e._)`${m} >= ${h}`, () => o.assign(_, !0).break()) : (o.if((0, e._)`${m} > ${b}`, () => o.assign(_, !1).break()), h === 1 ? o.assign(_, !0) : o.if((0, e._)`${m} >= ${h}`, () => o.assign(_, !0)));
      }
    }
  };
  return nn.default = r, nn;
}
var nr = {}, Do;
function kr() {
  return Do || (Do = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ re(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Me();
    e.error = {
      message: ({ params: { property: l, depsCount: p, deps: h } }) => {
        const b = p === 1 ? "property" : "properties";
        return (0, t.str)`must have ${b} ${h} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: p, deps: h, missingProperty: b } }) => (0, t._)`{property: ${l},
    missingProperty: ${b},
    depsCount: ${p},
    deps: ${h}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [p, h] = o(l);
        s(l, p), a(l, h);
      }
    };
    function o({ schema: l }) {
      const p = {}, h = {};
      for (const b in l) {
        if (b === "__proto__")
          continue;
        const y = Array.isArray(l[b]) ? p : h;
        y[b] = l[b];
      }
      return [p, h];
    }
    function s(l, p = l.schema) {
      const { gen: h, data: b, it: y } = l;
      if (Object.keys(p).length === 0)
        return;
      const $ = h.let("missing");
      for (const w in p) {
        const _ = p[w];
        if (_.length === 0)
          continue;
        const u = (0, r.propertyInData)(h, b, w, y.opts.ownProperties);
        l.setParams({
          property: w,
          depsCount: _.length,
          deps: _.join(", ")
        }), y.allErrors ? h.if(u, () => {
          for (const v of _)
            (0, r.checkReportMissingProp)(l, v);
        }) : (h.if((0, t._)`${u} && (${(0, r.checkMissingProp)(l, _, $)})`), (0, r.reportMissingProp)(l, $), h.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(l, p = l.schema) {
      const { gen: h, data: b, keyword: y, it: $ } = l, w = h.name("valid");
      for (const _ in p)
        (0, n.alwaysValidSchema)($, p[_]) || (h.if(
          (0, r.propertyInData)(h, b, _, $.opts.ownProperties),
          () => {
            const u = l.subschema({ keyword: y, schemaProp: _ }, w);
            l.mergeValidEvaluated(u, w);
          },
          () => h.var(w, !0)
          // TODO var
        ), l.ok(w));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(nr)), nr;
}
var rn = {}, qo;
function Ia() {
  if (qo) return rn;
  qo = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), r = {
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
      const p = o.name("valid");
      o.forIn("key", a, (h) => {
        i.setParams({ propertyName: h }), i.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, p), o.if((0, e.not)(p), () => {
          i.error(!0), l.allErrors || o.break();
        });
      }), i.ok(p);
    }
  };
  return rn.default = r, rn;
}
var on = {}, Vo;
function ns() {
  if (Vo) return on;
  Vo = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ ie(), o = {
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
      const { gen: a, schema: l, parentSchema: p, data: h, errsCount: b, it: y } = s;
      if (!b)
        throw new Error("ajv implementation error");
      const { allErrors: $, opts: w } = y;
      if (y.props = !0, w.removeAdditional !== "all" && (0, r.alwaysValidSchema)(y, l))
        return;
      const _ = (0, e.allSchemaProperties)(p.properties), u = (0, e.allSchemaProperties)(p.patternProperties);
      v(), s.ok((0, t._)`${b} === ${n.default.errors}`);
      function v() {
        a.forIn("key", h, (d) => {
          !_.length && !u.length ? C(d) : a.if(f(d), () => C(d));
        });
      }
      function f(d) {
        let g;
        if (_.length > 8) {
          const k = (0, r.schemaRefOrVal)(y, p.properties, "properties");
          g = (0, e.isOwnProperty)(a, k, d);
        } else _.length ? g = (0, t.or)(..._.map((k) => (0, t._)`${d} === ${k}`)) : g = t.nil;
        return u.length && (g = (0, t.or)(g, ...u.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${d})`))), (0, t.not)(g);
      }
      function m(d) {
        a.code((0, t._)`delete ${h}[${d}]`);
      }
      function C(d) {
        if (w.removeAdditional === "all" || w.removeAdditional && l === !1) {
          m(d);
          return;
        }
        if (l === !1) {
          s.setParams({ additionalProperty: d }), s.error(), $ || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)(y, l)) {
          const g = a.name("valid");
          w.removeAdditional === "failing" ? (c(d, g, !1), a.if((0, t.not)(g), () => {
            s.reset(), m(d);
          })) : (c(d, g), $ || a.if((0, t.not)(g), () => a.break()));
        }
      }
      function c(d, g, k) {
        const x = {
          keyword: "additionalProperties",
          dataProp: d,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(x, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(x, g);
      }
    }
  };
  return on.default = o, on;
}
var sn = {}, Lo;
function Da() {
  if (Lo) return sn;
  Lo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qn(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ns(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: l, data: p, it: h } = o;
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
        w(u) ? _(u) : (s.if((0, t.propertyInData)(s, p, u, h.opts.ownProperties)), _(u), h.allErrors || s.else().var($, !0), s.endIf()), o.it.definedProperties.add(u), o.ok($);
      function w(u) {
        return h.opts.useDefaults && !h.compositeRule && a[u].default !== void 0;
      }
      function _(u) {
        o.subschema({
          keyword: "properties",
          schemaProp: u,
          dataProp: u
        }, $);
      }
    }
  };
  return sn.default = i, sn;
}
var an = {}, Bo;
function qa() {
  if (Bo) return an;
  Bo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ie(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: l, parentSchema: p, it: h } = o, { opts: b } = h, y = (0, e.allSchemaProperties)(a), $ = y.filter((C) => (0, n.alwaysValidSchema)(h, a[C]));
      if (y.length === 0 || $.length === y.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const w = b.strictSchema && !b.allowMatchingProperties && p.properties, _ = s.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(s, h.props));
      const { props: u } = h;
      v();
      function v() {
        for (const C of y)
          w && f(C), h.allErrors ? m(C) : (s.var(_, !0), m(C), s.if(_));
      }
      function f(C) {
        for (const c in w)
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
            }, _), h.opts.unevaluated && u !== !0 ? s.assign((0, t._)`${u}[${c}]`, !0) : !d && !h.allErrors && s.if((0, t.not)(_), () => s.break());
          });
        });
      }
    }
  };
  return an.default = i, an;
}
var cn = {}, Uo;
function Va() {
  if (Uo) return cn;
  Uo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
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
  return cn.default = t, cn;
}
var ln = {}, Ko;
function La() {
  if (Ko) return ln;
  Ko = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Me()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return ln.default = t, ln;
}
var dn = {}, Ho;
function Ba() {
  if (Ho) return dn;
  Ho = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), r = {
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
      const p = s, h = o.let("valid", !1), b = o.let("passing", null), y = o.name("_valid");
      i.setParams({ passing: b }), o.block($), i.result(h, () => i.reset(), () => i.error(!0));
      function $() {
        p.forEach((w, _) => {
          let u;
          (0, t.alwaysValidSchema)(l, w) ? o.var(y, !0) : u = i.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, y), _ > 0 && o.if((0, e._)`${y} && ${h}`).assign(h, !1).assign(b, (0, e._)`[${b}, ${_}]`).else(), o.if(y, () => {
            o.assign(h, !0), o.assign(b, _), u && i.mergeEvaluated(u, e.Name);
          });
        });
      }
    }
  };
  return dn.default = r, dn;
}
var un = {}, Go;
function Ua() {
  if (Go) return un;
  Go = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
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
        const p = n.subschema({ keyword: "allOf", schemaProp: l }, s);
        n.ok(s), n.mergeEvaluated(p);
      });
    }
  };
  return un.default = t, un;
}
var fn = {}, Wo;
function Ka() {
  if (Wo) return fn;
  Wo = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), r = {
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
      const p = i(l, "then"), h = i(l, "else");
      if (!p && !h)
        return;
      const b = s.let("valid", !0), y = s.name("_valid");
      if ($(), o.reset(), p && h) {
        const _ = s.let("ifClause");
        o.setParams({ ifClause: _ }), s.if(y, w("then", _), w("else", _));
      } else p ? s.if(y, w("then")) : s.if((0, e.not)(y), w("else"));
      o.pass(b, () => o.error(!0));
      function $() {
        const _ = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, y);
        o.mergeEvaluated(_);
      }
      function w(_, u) {
        return () => {
          const v = o.subschema({ keyword: _ }, y);
          s.assign(b, y), o.mergeValidEvaluated(v, b), u ? s.assign(u, (0, e._)`${_}`) : o.setParams({ ifClause: _ });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return fn.default = r, fn;
}
var pn = {}, Jo;
function Ha() {
  if (Jo) return pn;
  Jo = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return pn.default = t, pn;
}
var Yo;
function Ga() {
  if (Yo) return Qt;
  Yo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ es(), t = /* @__PURE__ */ Ta(), n = /* @__PURE__ */ ts(), r = /* @__PURE__ */ ja(), i = /* @__PURE__ */ za(), o = /* @__PURE__ */ kr(), s = /* @__PURE__ */ Ia(), a = /* @__PURE__ */ ns(), l = /* @__PURE__ */ Da(), p = /* @__PURE__ */ qa(), h = /* @__PURE__ */ Va(), b = /* @__PURE__ */ La(), y = /* @__PURE__ */ Ba(), $ = /* @__PURE__ */ Ua(), w = /* @__PURE__ */ Ka(), _ = /* @__PURE__ */ Ha();
  function u(v = !1) {
    const f = [
      // any
      h.default,
      b.default,
      y.default,
      $.default,
      w.default,
      _.default,
      // object
      s.default,
      a.default,
      o.default,
      l.default,
      p.default
    ];
    return v ? f.push(t.default, r.default) : f.push(e.default, n.default), f.push(i.default), f;
  }
  return Qt.default = u, Qt;
}
var hn = {}, rt = {}, Xo;
function rs() {
  if (Xo) return rt;
  Xo = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Ln(), r = /* @__PURE__ */ Sr(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, l) {
    const { gen: p, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[l] = !0;
    const b = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, y = h.errSchemaPath === "#" ? h.validateName : s(a);
    p.if((0, e._)`!${b}`, () => p.assign(b, y));
  }
  rt.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: l, schema: p, self: h } = a.it, { root: b, baseId: y, localRefs: $, meta: w } = l.root, { schemaId: _ } = h.opts, u = new n.SchemaEnv({ schema: p, schemaId: _, root: b, baseId: y, localRefs: $, meta: w });
    return n.compileSchema.call(h, u), (0, r.getValidate)(a, u);
  }
  return rt.default = i, rt;
}
var ot = {}, Zo;
function os() {
  if (Zo) return ot;
  Zo = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.dynamicRef = void 0;
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Sr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: l, it: p } = o;
    if (s[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const h = s.slice(1);
    if (p.allErrors)
      b();
    else {
      const $ = a.let("valid", !1);
      b($), o.ok($);
    }
    function b($) {
      if (p.schemaEnv.root.dynamicAnchors[h]) {
        const w = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        a.if(w, y(w, $), y(p.validateName, $));
      } else
        y(p.validateName, $)();
    }
    function y($, w) {
      return w ? () => a.block(() => {
        (0, n.callRef)(o, $), a.let(w, !0);
      }) : () => (0, n.callRef)(o, $);
    }
  }
  return ot.dynamicRef = i, ot.default = r, ot;
}
var mn = {}, Qo;
function Wa() {
  if (Qo) return mn;
  Qo = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rs(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return mn.default = n, mn;
}
var gn = {}, ei;
function Ja() {
  if (ei) return gn;
  ei = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ os(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return gn.default = t, gn;
}
var ti;
function Ya() {
  if (ti) return hn;
  ti = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rs(), t = /* @__PURE__ */ os(), n = /* @__PURE__ */ Wa(), r = /* @__PURE__ */ Ja(), i = [e.default, t.default, n.default, r.default];
  return hn.default = i, hn;
}
var yn = {}, vn = {}, ni;
function Xa() {
  if (ni) return vn;
  ni = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return vn.default = t, vn;
}
var $n = {}, ri;
function Za() {
  if (ri) return $n;
  ri = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return $n.default = t, $n;
}
var bn = {}, oi;
function Qa() {
  if (oi) return bn;
  oi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return bn.default = t, bn;
}
var ii;
function ec() {
  if (ii) return yn;
  ii = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xa(), t = /* @__PURE__ */ Za(), n = /* @__PURE__ */ Qa(), r = [e.default, t.default, n.default];
  return yn.default = r, yn;
}
var wn = {}, _n = {}, si;
function tc() {
  if (si) return _n;
  si = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ne(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: l, errsCount: p, it: h } = o;
      if (!p)
        throw new Error("ajv implementation error");
      const { allErrors: b, props: y } = h;
      y instanceof e.Name ? s.if((0, e._)`${y} !== true`, () => s.forIn("key", l, (u) => s.if(w(y, u), () => $(u)))) : y !== !0 && s.forIn("key", l, (u) => y === void 0 ? $(u) : s.if(_(y, u), () => $(u))), h.props = !0, o.ok((0, e._)`${p} === ${n.default.errors}`);
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
      function w(u, v) {
        return (0, e._)`!${u} || !${u}[${v}]`;
      }
      function _(u, v) {
        const f = [];
        for (const m in u)
          u[m] === !0 && f.push((0, e._)`${v} !== ${m}`);
        return (0, e.and)(...f);
      }
    }
  };
  return _n.default = i, _n;
}
var Sn = {}, ai;
function nc() {
  if (ai) return Sn;
  ai = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ ie(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: l } = i, p = l.items || 0;
      if (p === !0)
        return;
      const h = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: p }), i.fail((0, e._)`${h} > ${p}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(l, s)) {
        const y = o.var("valid", (0, e._)`${h} <= ${p}`);
        o.if((0, e.not)(y), () => b(y, p)), i.ok(y);
      }
      l.items = !0;
      function b(y, $) {
        o.forRange("i", $, h, (w) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, y), l.allErrors || o.if((0, e.not)(y), () => o.break());
        });
      }
    }
  };
  return Sn.default = r, Sn;
}
var ci;
function rc() {
  if (ci) return wn;
  ci = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tc(), t = /* @__PURE__ */ nc(), n = [e.default, t.default];
  return wn.default = n, wn;
}
var Cn = {}, kn = {}, li;
function oc() {
  if (li) return kn;
  li = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, i) {
      const { gen: o, data: s, $data: a, schema: l, schemaCode: p, it: h } = r, { opts: b, errSchemaPath: y, schemaEnv: $, self: w } = h;
      if (!b.validateFormats)
        return;
      a ? _() : u();
      function _() {
        const v = o.scopeValue("formats", {
          ref: w.formats,
          code: b.code.formats
        }), f = o.const("fDef", (0, e._)`${v}[${p}]`), m = o.let("fType"), C = o.let("format");
        o.if((0, e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`, () => o.assign(m, (0, e._)`${f}.type || "string"`).assign(C, (0, e._)`${f}.validate`), () => o.assign(m, (0, e._)`"string"`).assign(C, f)), r.fail$data((0, e.or)(c(), d()));
        function c() {
          return b.strictSchema === !1 ? e.nil : (0, e._)`${p} && !${C}`;
        }
        function d() {
          const g = $.$async ? (0, e._)`(${f}.async ? await ${C}(${s}) : ${C}(${s}))` : (0, e._)`${C}(${s})`, k = (0, e._)`(typeof ${C} == "function" ? ${g} : ${C}.test(${s}))`;
          return (0, e._)`${C} && ${C} !== true && ${m} === ${i} && !${k}`;
        }
      }
      function u() {
        const v = w.formats[l];
        if (!v) {
          c();
          return;
        }
        if (v === !0)
          return;
        const [f, m, C] = d(v);
        f === i && r.pass(g());
        function c() {
          if (b.strictSchema === !1) {
            w.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${l}" ignored in schema at path "${y}"`;
          }
        }
        function d(k) {
          const x = k instanceof RegExp ? (0, e.regexpCode)(k) : b.code.formats ? (0, e._)`${b.code.formats}${(0, e.getProperty)(l)}` : void 0, O = o.scopeValue("formats", { key: l, ref: k, code: x });
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
  return kn.default = n, kn;
}
var di;
function ic() {
  if (di) return Cn;
  di = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ oc()).default];
  return Cn.default = t, Cn;
}
var Ye = {}, ui;
function sc() {
  return ui || (ui = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.contentVocabulary = Ye.metadataVocabulary = void 0, Ye.metadataVocabulary = [
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
var fi;
function ac() {
  if (fi) return zt;
  fi = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ _a(), t = /* @__PURE__ */ Oa(), n = /* @__PURE__ */ Ga(), r = /* @__PURE__ */ Ya(), i = /* @__PURE__ */ ec(), o = /* @__PURE__ */ rc(), s = /* @__PURE__ */ ic(), a = /* @__PURE__ */ sc(), l = [
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
  return zt.default = l, zt;
}
var En = {}, bt = {}, pi;
function cc() {
  if (pi) return bt;
  pi = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (bt.DiscrError = e = {})), bt;
}
var hi;
function lc() {
  if (hi) return En;
  hi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = /* @__PURE__ */ cc(), n = /* @__PURE__ */ Ln(), r = /* @__PURE__ */ Vn(), i = /* @__PURE__ */ ie(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: p } }) => (0, e._)`{error: ${a}, tag: ${p}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: p, schema: h, parentSchema: b, it: y } = a, { oneOf: $ } = b;
      if (!y.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = h.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!$)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = l.let("valid", !1), u = l.const("tag", (0, e._)`${p}${(0, e.getProperty)(w)}`);
      l.if((0, e._)`typeof ${u} == "string"`, () => v(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: u, tagName: w })), a.ok(_);
      function v() {
        const C = m();
        l.if(!1);
        for (const c in C)
          l.elseIf((0, e._)`${u} === ${c}`), l.assign(_, f(C[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: u, tagName: w }), l.endIf();
      }
      function f(C) {
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
            const H = P.$ref;
            if (P = n.resolveRef.call(y.self, y.schemaEnv.root, y.baseId, H), P instanceof n.SchemaEnv && (P = P.schema), P === void 0)
              throw new r.default(y.opts.uriResolver, y.baseId, H);
          }
          const I = (C = P?.properties) === null || C === void 0 ? void 0 : C[w];
          if (typeof I != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          g = g && (d || k(P)), x(I, A);
        }
        if (!g)
          throw new Error(`discriminator: "${w}" must be required`);
        return c;
        function k({ required: A }) {
          return Array.isArray(A) && A.includes(w);
        }
        function x(A, P) {
          if (A.const)
            O(A.const, P);
          else if (A.enum)
            for (const I of A.enum)
              O(I, P);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function O(A, P) {
          if (typeof A != "string" || A in c)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          c[A] = P;
        }
      }
    }
  };
  return En.default = s, En;
}
var xn = {};
const dc = "https://json-schema.org/draft/2020-12/schema", uc = "https://json-schema.org/draft/2020-12/schema", fc = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, pc = "meta", hc = "Core and Validation specifications meta-schema", mc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], gc = ["object", "boolean"], yc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", vc = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, $c = {
  $schema: dc,
  $id: uc,
  $vocabulary: fc,
  $dynamicAnchor: pc,
  title: hc,
  allOf: mc,
  type: gc,
  $comment: yc,
  properties: vc
}, bc = "https://json-schema.org/draft/2020-12/schema", wc = "https://json-schema.org/draft/2020-12/meta/applicator", _c = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Sc = "meta", Cc = "Applicator vocabulary meta-schema", kc = ["object", "boolean"], Ec = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, xc = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Pc = {
  $schema: bc,
  $id: wc,
  $vocabulary: _c,
  $dynamicAnchor: Sc,
  title: Cc,
  type: kc,
  properties: Ec,
  $defs: xc
}, Ac = "https://json-schema.org/draft/2020-12/schema", Rc = "https://json-schema.org/draft/2020-12/meta/unevaluated", Nc = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Mc = "meta", Fc = "Unevaluated applicator vocabulary meta-schema", Oc = ["object", "boolean"], Tc = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, jc = {
  $schema: Ac,
  $id: Rc,
  $vocabulary: Nc,
  $dynamicAnchor: Mc,
  title: Fc,
  type: Oc,
  properties: Tc
}, zc = "https://json-schema.org/draft/2020-12/schema", Ic = "https://json-schema.org/draft/2020-12/meta/content", Dc = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, qc = "meta", Vc = "Content vocabulary meta-schema", Lc = ["object", "boolean"], Bc = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Uc = {
  $schema: zc,
  $id: Ic,
  $vocabulary: Dc,
  $dynamicAnchor: qc,
  title: Vc,
  type: Lc,
  properties: Bc
}, Kc = "https://json-schema.org/draft/2020-12/schema", Hc = "https://json-schema.org/draft/2020-12/meta/core", Gc = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Wc = "meta", Jc = "Core vocabulary meta-schema", Yc = ["object", "boolean"], Xc = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Zc = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Qc = {
  $schema: Kc,
  $id: Hc,
  $vocabulary: Gc,
  $dynamicAnchor: Wc,
  title: Jc,
  type: Yc,
  properties: Xc,
  $defs: Zc
}, el = "https://json-schema.org/draft/2020-12/schema", tl = "https://json-schema.org/draft/2020-12/meta/format-annotation", nl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, rl = "meta", ol = "Format vocabulary meta-schema for annotation results", il = ["object", "boolean"], sl = { format: { type: "string" } }, al = {
  $schema: el,
  $id: tl,
  $vocabulary: nl,
  $dynamicAnchor: rl,
  title: ol,
  type: il,
  properties: sl
}, cl = "https://json-schema.org/draft/2020-12/schema", ll = "https://json-schema.org/draft/2020-12/meta/meta-data", dl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, ul = "meta", fl = "Meta-data vocabulary meta-schema", pl = ["object", "boolean"], hl = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, ml = {
  $schema: cl,
  $id: ll,
  $vocabulary: dl,
  $dynamicAnchor: ul,
  title: fl,
  type: pl,
  properties: hl
}, gl = "https://json-schema.org/draft/2020-12/schema", yl = "https://json-schema.org/draft/2020-12/meta/validation", vl = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, $l = "meta", bl = "Validation vocabulary meta-schema", wl = ["object", "boolean"], _l = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Sl = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Cl = {
  $schema: gl,
  $id: yl,
  $vocabulary: vl,
  $dynamicAnchor: $l,
  title: bl,
  type: wl,
  properties: _l,
  $defs: Sl
};
var mi;
function kl() {
  if (mi) return xn;
  mi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = $c, t = Pc, n = jc, r = Uc, i = Qc, o = al, s = ml, a = Cl, l = ["/properties"];
  function p(h) {
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
  return xn.default = p, xn;
}
var gi;
function El() {
  return gi || (gi = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ ba(), r = /* @__PURE__ */ ac(), i = /* @__PURE__ */ lc(), o = /* @__PURE__ */ kl(), s = "https://json-schema.org/draft/2020-12/schema";
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
        const { $data: $, meta: w } = this.opts;
        w && (o.default.call(this, $), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ qn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var p = /* @__PURE__ */ re();
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
    var h = /* @__PURE__ */ _r();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var b = /* @__PURE__ */ Vn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return b.default;
    } });
  })(Mt, Mt.exports)), Mt.exports;
}
var xl = /* @__PURE__ */ El();
const Pl = /* @__PURE__ */ oa(xl), Al = "https://json-schema.org/draft/2020-12/schema", Rl = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Nl = "gufe-viz payload", Ml = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Fl = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Ol = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Er = {
  $schema: Al,
  $id: Rl,
  title: Nl,
  description: Ml,
  oneOf: Fl,
  $defs: Ol
}, mf = [
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
], xr = Er.$id, Pr = new Pl({ allErrors: !0, strict: !1 });
Pr.addSchema(Er, xr);
const yi = Pr.getSchema(xr), is = Object.entries(Er.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), gf = is, Ar = /* @__PURE__ */ new Map();
for (const e of is) {
  const t = Pr.getSchema(`${xr}#/$defs/${e}`);
  t && Ar.set(e, t);
}
const pr = { valid: !0, issues: [] };
function hr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Tl(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Ar.get(t) : void 0;
  return n ? n(e) ? pr : { valid: !1, issues: hr(n.errors) } : yi(e) ? pr : { valid: !1, issues: hr(yi.errors) };
}
function yf(e, t) {
  const n = Ar.get(e);
  return n ? n(t) ? pr : { valid: !1, issues: hr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function jl(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Rr = {
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
function ss(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Rr[t]) return zl(t);
  const { valid: n, issues: r } = Tl(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: jl(r)
  };
}
function zl(e) {
  const t = Object.keys(Rr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function vf(e) {
  return ss(e)?.message ?? null;
}
class Il extends Ae {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    Ms("payload", n, this);
    const r = ss(n);
    if (r)
      return t.appendChild(Dl(r, n)), {};
    const i = n.type, o = Rr[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function Dl(e, t) {
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
  const i = ql(t);
  return i && n.appendChild(r(i, !1)), n;
}
function ql(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${qe(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${qe(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Re("gufe-view", Il);
const rr = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, Nr = {
  threeDmol: `https://unpkg.com/3dmol@${rr.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${rr.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${rr.d3}/+esm`
};
function Mr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function as(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let Ze = null, it = null;
function Fr() {
  if (it) return it;
  const e = Mr("threeDmol");
  return e ? (it = e.then((t) => Ze = t || window.$3Dmol), it) : (it = (async () => {
    if (window.$3Dmol) return Ze = window.$3Dmol;
    if (await as(Nr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return Ze = window.$3Dmol;
  })(), it);
}
let st = null;
function Or() {
  if (st) return st;
  const e = Mr("rdkit");
  return e ? (st = e.then((t) => window.RDKit = t), st) : (st = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await as(Nr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), st);
}
let or = null;
function cs() {
  if (!or) {
    const e = Nr.d3;
    or = Mr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return or;
}
function Tr(e, t) {
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
    t.hint && !r && (r = !0, Ll(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
const Vl = 1600;
function Ll(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, Vl);
}
const Bl = { min: 0.25, max: 12 }, Ul = 150;
function vi(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? Ul) - t;
}
function Kl(e, t = Bl) {
  const n = vi(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = vi(e);
    return Number.isFinite(s) && s > 0 ? n / s : i;
  };
  return {
    zoomBy(s) {
      const a = o(), l = Math.min(t.max, Math.max(t.min, a * s)), p = l / a;
      return !Number.isFinite(p) || Math.abs(p - 1) < 1e-9 ? !1 : (i = l, e.zoom(p), e.render(), !0);
    },
    reset() {
      i = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const Hl = 2e-3;
function Gl(e) {
  return Math.exp(-e.deltaY * Hl);
}
function ls(e, t, n = {}) {
  const r = Kl(t, n.bounds), i = Tr(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(Gl(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function jr(e, t = "Reset view") {
  const n = T("button", xt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const ir = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, $f = [
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
], bf = "hsv", V = [0, 0, 0], Wl = {
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
}, Jl = "rdkit", Yl = !0, Xl = !0, Zl = !0, Ql = !0, ed = "rdkit", td = "filled", nd = 0.42, rd = 1.5, od = !0, id = "show", sd = "mono", ad = 0.51, cd = 0.74, ld = 1.6, dd = 1.7, ud = 5, fd = 0.3, pd = "#d62828", hd = "#d62828", md = "#015ab5", gd = !1, yd = "", vd = "#7c3aed", $d = {
  layout: Jl,
  alignPair: Yl,
  atomNumbers: Xl,
  createdDestroyed: Zl,
  modified: Ql,
  style: ed,
  circles: td,
  circleRadius: nd,
  circleStroke: rd,
  boundary: od,
  hydrogens: id,
  elementColors: sd,
  numScale: ad,
  labelScale: cd,
  bondWidth: ld,
  markWidth: dd,
  haloWidth: ud,
  haloOpacity: fd,
  destroyedColor: pd,
  createdColor: hd,
  modifiedColor: md,
  stereo: gd,
  customSpec: yd,
  customColor: vd
}, bd = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: ir.uniqueAtom,
  createdColor: ir.uniqueAtom,
  modifiedColor: ir.elementChange,
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
}, wd = ["rdkit", "coordgen", "conformer"], _d = ["rdkit", "recolor", "halo"], Sd = ["outline", "filled", "off"], Cd = ["show", "dim", "hide"], kd = ["cpk", "mono"], Ed = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, xd = /^#[0-9a-fA-F]{6}$/;
function wt(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Be(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Ed[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const at = (e, t) => typeof e == "boolean" ? e : t, Pn = (e, t) => typeof e == "string" && xd.test(e) ? e : t;
function Pd(e) {
  const t = e && typeof e == "object" ? e : {}, n = bd;
  return {
    version: 1,
    layout: wt(t.layout, wd, n.layout),
    alignPair: at(t.alignPair, n.alignPair),
    style: wt(t.style, _d, n.style),
    createdDestroyed: at(t.createdDestroyed, n.createdDestroyed),
    modified: at(t.modified, n.modified),
    destroyedColor: Pn(t.destroyedColor, n.destroyedColor),
    createdColor: Pn(t.createdColor, n.createdColor),
    modifiedColor: Pn(t.modifiedColor, n.modifiedColor),
    boundary: at(t.boundary, n.boundary),
    circles: wt(t.circles, Sd, n.circles),
    circleRadius: Be(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Be(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: wt(t.hydrogens, Cd, n.hydrogens),
    elementColors: wt(t.elementColors, kd, n.elementColors),
    atomNumbers: at(t.atomNumbers, n.atomNumbers),
    stereo: at(t.stereo, n.stereo),
    numScale: Be(t.numScale, "numScale", n.numScale),
    labelScale: Be(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Be(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Be(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Be(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Be(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Pn(t.customColor, n.customColor)
  };
}
const ut = Pd($d);
function Ad(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, l = (h) => {
      s !== "right" && t.add(h), s !== "left" && n.add(h);
    }, p = /^(\d+)-(\d+)$/.exec(a);
    if (p) {
      const h = Math.min(+p[1], +p[2]), b = Math.min(Math.max(+p[1], +p[2]), h + r - 1);
      for (let y = h; y <= b; y++) l(y);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function sr(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), l = t.has(s);
    (n ? a || l : a && l) && r.push(i);
  }
  return r;
}
function mr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function Rd(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function Nd(e, t, n) {
  const r = new Set(t.atoms), i = new Set(sr(e, r, !0));
  return {
    deletions: sr(e, r, n),
    changes: sr(e, new Set(t.elements), n).filter((o) => !i.has(o))
  };
}
function Md(e, t, n, r) {
  const i = Nd(t, n, e.boundary), o = [];
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
function Fd(e) {
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
function Od(e, t) {
  return e.style === "rdkit" ? "rdkit" : Fd(t) ? e.style : "rdkit";
}
function Td(e, t, n, r, i, o) {
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
  e.elementColors === "mono" && (s.atomColourPalette = Wl), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, l = {}, p = {};
  for (const $ of n) {
    const w = mr($.color);
    if (i === "rdkit") for (const u of $.bonds) p[u] = w;
    if (i === "recolor" && e.circles === "off") continue;
    const _ = i === "recolor" && e.circles === "filled" ? Rd(w, 0.7) : w;
    for (const u of $.atoms)
      a[u] = _, l[u] = e.circleRadius;
  }
  const h = mr(e.customColor);
  for (const $ of r)
    $ < o && (a[$] = h, l[$] = e.circleRadius);
  const b = Object.keys(a).map(Number);
  b.length && (s.atoms = b, s.highlightAtomColors = a, s.highlightAtomRadii = l);
  const y = Object.keys(p).map(Number);
  return y.length && (s.bonds = y, s.highlightBondColors = p), s;
}
function jd(e, t, n, r) {
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
const zd = "http://www.w3.org/2000/svg";
function ds(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function zr(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function us(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function $i(e, t, n, r, i, o) {
  for (const s of r)
    for (const a of ds(e, s)) {
      const l = a.style;
      us(a) ? l.fill = i : (l.stroke = i, l.strokeWidth = `${t.markWidth}px`);
    }
  if (o)
    for (const s of n)
      for (const a of zr(e, s, !1)) a.style.fill = o;
}
function Id(e, t, n, r) {
  const i = e.ownerDocument;
  if (!i) return;
  const o = i.createElementNS(zd, "g");
  o.setAttribute("data-gufe-halo", "1"), o.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of ds(e, a)) {
      if (us(l)) continue;
      const p = l.cloneNode(!0);
      p.removeAttribute("class"), p.style.fill = "none", p.style.stroke = r, p.style.strokeWidth = `${t.haloWidth}px`, p.style.strokeLinecap = "round", p.style.strokeLinejoin = "round", p.style.strokeOpacity = "1", o.appendChild(p);
    }
  if (!o.childNodes.length) return;
  const s = e.querySelector("rect");
  s?.nextSibling ? e.insertBefore(o, s.nextSibling) : s ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
}
function Dd(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of zr(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function qd(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of zr(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function Vd(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function Ld(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        $i(
          e,
          n,
          s.atoms,
          s.bonds,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color
        ), n.circles === "outline" ? Dd(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && qd(e, n, s.atoms, i, s.color);
      } else
        Id(e, n, s.bonds, s.color), $i(e, n, s.atoms, s.bonds, s.color, null);
  Vd(e, t, n);
}
const Bn = `
`, gr = "$$$$";
function yr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Bn);
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
    const y = parseInt(b.substring(0, 3), 10), $ = parseInt(b.substring(3, 6), 10), w = parseInt(b.substring(6, 9), 10);
    !isFinite(y) || !isFinite($) || l.push([y - 1, $ - 1, isFinite(w) ? w : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: s };
}
function Bd(e) {
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
  return r.push("M  END"), r.join(Bn);
}
const Ud = (e) => `${Bd(e)}${Bn}${gr}`, Kd = (e) => e.indexOf(gr) >= 0 ? e : `${e}${Bn}${gr}`;
function fs(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function ps(e, t, n, r, i) {
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
      for (const p of i.atoms)
        s[p] = i.color, a[p] = i.radius;
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
function hs(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const bi = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], wi = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, _i = 400;
class Hd extends Ae {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge;
    t.appendChild(Ge(i || "Unnamed molecule"));
    const a = T("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const l = T("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), p = T("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(l), a.appendChild(T("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`)), a.appendChild(p);
    const h = (x) => T("div", Et, x);
    l.appendChild(h("2D"));
    const b = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${kt.canvas2D};`
    );
    l.appendChild(b), p.appendChild(h("3D"));
    const y = Wi();
    p.appendChild(y.wrap);
    const $ = T(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:${J.body};background:${M.toolbarBg};border-top:1px solid ${M.toolbarBorder};color:${M.textPrimary};`
    );
    t.appendChild($);
    const w = r ? fs(r) : null, _ = [
      ["Name", i || dt, !1],
      ["SMILES", o || dt, !0],
      ["Charge", s == null ? dt : String(s), !1],
      ["Atoms", w ? String(w.atoms) : dt, !1],
      ["Bonds", w ? String(w.bonds) : dt, !1]
    ];
    for (const [x, O, A] of _) {
      const P = T("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      P.appendChild(
        T(
          "span",
          `font-size:${J.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${M.textMuted2};`,
          x
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
    b.appendChild(le("Loading 2D depiction...")), Or().then((x) => {
      const O = ps(x, r, _i, ut.layout);
      O ? hs(b, O, _i) : b.replaceChildren(le("Failed to parse molecule", !0));
    }).catch((x) => {
      b.replaceChildren(le(`RDKit failed to load: ${ge(x)}`, !0));
    });
    let u = null, v = null;
    const f = pt(
      "small-molecule.style",
      "stick",
      bi.map((x) => x.id)
    ), m = Ct("small-molecule.spin", !1);
    let C = f.get(), c = m.get();
    const d = T(
      "div",
      Vi
    );
    d.appendChild(
      zn(
        bi,
        C,
        (x) => {
          C = x, u && (u.setStyle({}, wi[x]), u.render());
        },
        f
      )
    );
    const g = Gi(
      "Spin",
      c,
      (x) => {
        c = x;
        try {
          u?.spin(x ? "y" : !1);
        } catch {
        }
      },
      { title: "Toggle continuous rotation", remember: m }
    );
    g.style.marginLeft = "4px", d.appendChild(g);
    const k = jr(() => v?.reset());
    return k.style.marginLeft = "4px", d.appendChild(k), p.appendChild(d), y.container.appendChild(le("Loading 3D viewer...")), Fr().then(() => {
      y.container.replaceChildren(), u = Ze.createViewer(y.container, { backgroundColor: kt.viewer }), u.addModel(Kd(r), "sdf"), u.setStyle({}, wi[C]), u.zoomTo(), u.render(), v = ls(y.container, u);
    }).catch((x) => {
      y.container.replaceChildren(le(`3D render failed: ${ge(x)}`, !0));
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
Re("gufe-small-molecule", Hd);
const ms = ["HOH", "WAT", "SOL", "TIP3"], Si = { hetflag: !1 }, Gd = { hetflag: !0 }, Wd = { resn: ms }, Ue = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function Jd(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const p = l.slice(0, 6);
    if (p === "ENDMDL") break;
    if (p !== "ATOM  " && p !== "HETATM") continue;
    r++, p === "HETATM" && i++;
    const h = l.slice(17, 20).trim(), b = l.slice(21, 22).trim() || "_", y = l.slice(22, 26).trim(), $ = l.slice(26, 27).trim();
    ms.indexOf(h) !== -1 && o++, t.add(b), n.add(`${b}|${y}${$}|${h}`);
    const w = parseInt(y, 10);
    isNaN(w) || (w < s && (s = w), w > a && (a = w));
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
function Yd(e) {
  return `${yt(e.chains)} chains · ${yt(e.residues)} residues · ${yt(e.atoms)} atoms · ${yt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${yt(e.waters)} water)` : "");
}
function Xd(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function Ci(e, t, n, r) {
  const i = r || (() => {
  }), o = Xd(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    Si,
    t.rep === "stick" ? { stick: { radius: Ue.stick.radius, ...o } } : t.rep === "sphere" ? { sphere: { scale: Ue.sphere.scale, ...o } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...o } }
    )
  ), e.setStyle(
    Gd,
    t.hetero ? {
      stick: { radius: Ue.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ue.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Wd,
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
        e.addSurface(Ze.SurfaceType.VDW, { opacity: Ue.surfaceOpacity, ...o }, Si)
      ).then(() => {
        i(null), e.render();
      }).catch((s) => i(`Surface failed: ${ge(s)}`, "error"));
    } catch (s) {
      i(`Surface failed: ${ge(s)}`, "error");
    }
  }, 30);
}
const ki = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Ei = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Zd extends Ae {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, i = n.name ?? "", o = n.type !== "ProteinComponentViz", s = pt(
      "protein.representation",
      "cartoon",
      ki.map((k) => k.id)
    ), a = pt(
      "protein.color",
      "chain",
      Ei.map((k) => k.id)
    ), l = Ct("protein.waters", o), p = Ct("protein.hetero", !0), h = Ct("protein.spin", !1), b = {
      rep: s.get(),
      color: a.get(),
      waters: l.get(),
      hetero: p.get(),
      spin: h.get()
    };
    let y = null, $ = null, w = null;
    const _ = T(
      "div",
      qi.top
    );
    t.appendChild(_), _.appendChild(
      T("span", `font-weight:700;font-size:${J.heading};letter-spacing:.02em;color:${M.titleColor};`, i || "Protein")
    );
    const u = (k) => T("span", `font-size:${J.small};color:${M.textMuted};`, k);
    _.appendChild(u("Style:")), _.appendChild(
      zn(
        ki,
        b.rep,
        (k) => {
          b.rep = k, g();
        },
        s
      )
    ), _.appendChild(u("Color:")), _.appendChild(
      wr(
        Ei,
        b.color,
        (k) => {
          b.color = k, g();
        },
        a
      )
    );
    const v = T("div", "display:flex;gap:4px;");
    _.appendChild(v);
    const f = [
      ["waters", "Waters", "Show water molecules", l, () => g()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", p, () => g()],
      ["spin", "Spin", "Rotate the view continuously", h, () => y?.spin(b.spin ? "y" : !1)]
    ];
    for (const [k, x, O, A, P] of f)
      v.appendChild(
        Gi(
          x,
          b[k],
          (I) => {
            b[k] = I, P();
          },
          { title: O, remember: A }
        )
      );
    v.appendChild(jr(() => $?.reset()));
    const m = T("span", `margin-left:auto;font-size:${J.small};white-space:nowrap;color:${M.textMuted2};`);
    _.appendChild(m);
    const C = Wi();
    t.appendChild(C.wrap);
    const c = T(
      "div",
      `position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${J.body};z-index:20;display:none;pointer-events:none;`
    );
    C.wrap.appendChild(c);
    const d = (k, x) => {
      if (k == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = k, c.style.display = "block";
      const O = x === "error";
      c.style.background = O ? M.warnBg : M.toolbarBg, c.style.color = O ? M.warnFg : M.textMuted, c.style.border = `1px solid ${O ? M.warnBorder : M.toolbarBorder}`;
    };
    function g() {
      y && Ci(y, b, w, d);
    }
    if (!r || !r.trim())
      return d("No protein data - waiting for a PDB payload."), {};
    try {
      w = Jd(r), m.textContent = Yd(w);
    } catch (k) {
      d(`⚠ PDB parse error: ${ge(k)}`, "error");
    }
    return d("Loading 3D viewer..."), Fr().then(() => {
      y = Ze.createViewer(C.container, { backgroundColor: kt.viewer }), y.addModel(r, "pdb"), Ci(y, b, w, d), y.zoomTo(), y.spin(b.spin ? "y" : !1), y.render(), $ = ls(C.container, y);
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
Re("gufe-protein", Zd);
const gs = "http://www.w3.org/2000/svg";
function se(e, t = {}) {
  const n = document.createElementNS(gs, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function Tn(e, t) {
  const n = document.createElementNS(gs, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Qd = 8, eu = 64, tu = () => new Promise((e) => setTimeout(e, 0));
function vr(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function nu(e, t, n, r) {
  let i = null;
  try {
    if (i = e.get_mol(n, JSON.stringify({ removeHs: r })), !i || !i.get_substruct_matches) return null;
    const o = i.get_substruct_matches(t), s = JSON.parse(o || "[]");
    if (!Array.isArray(s)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const l of s) {
      const p = l.atoms;
      if (Array.isArray(p))
        for (const h of p) typeof h == "number" && a.add(h);
    }
    return [...a].sort((l, p) => l - p);
  } catch (o) {
    return console.warn("[gufe-viz] SMARTS match threw -", ge(o)), null;
  } finally {
    vr(i);
  }
}
function ru(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let i = 0;
  return { run: async (s) => {
    const a = s.trim(), l = ++i;
    if (!a) return { status: "cleared" };
    const p = r.get(a);
    if (p) return { status: "ok", matched: p, unreadable: 0 };
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
      return vr(b), { status: "unsupported" };
    const y = /* @__PURE__ */ new Map();
    let $ = 0;
    try {
      let w = performance.now(), _ = 0;
      for (let u = 0; u < t.length; u++) {
        const v = t[u] ? nu(h, b, t[u], n) : null;
        if (v ? v.length && y.set(u, v) : $++, !(++_ < eu && performance.now() - w < Qd)) {
          if (await tu(), l !== i) return { status: "superseded" };
          _ = 0, w = performance.now();
        }
      }
    } finally {
      vr(b);
    }
    return r.set(a, y), { status: "ok", matched: y, unreadable: $ };
  }, cancel: () => void ++i };
}
function Rt(e) {
  const t = /* @__PURE__ */ new Map();
  return $r(e, t, /* @__PURE__ */ new Set()), t;
}
function $r(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) $r(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) $r(i, t, n);
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
function An(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function xi(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function ou(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Pi(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], l = o[s][1], p = t[a * 3 + l];
      if (Math.abs(p) < 1e-14) continue;
      const h = t[a * 3 + a], b = t[l * 3 + l], y = (b - h) / (2 * p);
      let $;
      Math.abs(y) > 1e10 ? $ = 1 / (2 * y) : $ = (y >= 0 ? 1 : -1) / (Math.abs(y) + Math.sqrt(y * y + 1));
      const w = 1 / Math.sqrt(1 + $ * $), _ = $ * w;
      t[a * 3 + a] = h - $ * p, t[l * 3 + l] = b + $ * p, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let u = 0; u < 3; u++)
        if (u !== a && u !== l) {
          const v = t[u * 3 + a], f = t[u * 3 + l];
          t[u * 3 + a] = w * v - _ * f, t[a * 3 + u] = t[u * 3 + a], t[u * 3 + l] = _ * v + w * f, t[l * 3 + u] = t[u * 3 + l];
        }
      for (let u = 0; u < 3; u++) {
        const v = n[u * 3 + a], f = n[u * 3 + l];
        n[u * 3 + a] = w * v - _ * f, n[u * 3 + l] = _ * v + w * f;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function iu(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], i[0] += t[m][0], i[1] += t[m][1], i[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]] };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const C = e[m][0] - r[0], c = e[m][1] - r[1], d = e[m][2] - r[2], g = t[m][0] - i[0], k = t[m][1] - i[1], x = t[m][2] - i[2];
    o[0] += C * g, o[1] += C * k, o[2] += C * x, o[3] += c * g, o[4] += c * k, o[5] += c * x, o[6] += d * g, o[7] += d * k, o[8] += d * x;
  }
  const s = xi(o), a = An(s, o), l = An(o, s);
  let p = Pi(a), h = Pi(l);
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
  p = b(p), h = b(h);
  const y = p.vectors, $ = h.vectors;
  for (let m = 0; m < 3; m++) {
    const C = y[m], c = y[3 + m], d = y[6 + m], g = o[0] * C + o[1] * c + o[2] * d, k = o[3] * C + o[4] * c + o[5] * d, x = o[6] * C + o[7] * c + o[8] * d, O = $[m], A = $[3 + m], P = $[6 + m];
    g * O + k * A + x * P < 0 && ($[m] = -O, $[3 + m] = -A, $[6 + m] = -P);
  }
  const w = xi(y);
  let _ = An($, w);
  ou(_) < 0 && ($[2] = -$[2], $[5] = -$[5], $[8] = -$[8], _ = An($, w));
  const u = _[0] * i[0] + _[1] * i[1] + _[2] * i[2], v = _[3] * i[0] + _[4] * i[1] + _[5] * i[2], f = _[6] * i[0] + _[7] * i[1] + _[8] * i[2];
  return { R: _, t: [r[0] - u, r[1] - v, r[2] - f] };
}
function su(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
const Ai = `
`, ar = 4;
function Ri(e, t, n) {
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
function au(e, t, n) {
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
  let l = null, p = -1 / 0;
  for (const h of [!1, !0]) {
    let b = 0, y = 0;
    for (let f = 0; f < r.length; f++) {
      const m = (h ? -1 : 1) * (r[f][0] - s[0]), C = r[f][1] - s[1], c = i[f][0] - a[0], d = i[f][1] - a[1];
      b += m * d - C * c, y += m * c + C * d;
    }
    const $ = Math.hypot(b, y);
    if ($ <= p) continue;
    p = $;
    const w = Math.atan2(b, y), _ = Math.cos(w), u = Math.sin(w), v = (h ? -1 : 1) * s[0];
    l = {
      cos: _,
      sin: u,
      mirror: h,
      tx: a[0] - (_ * v - u * s[1]),
      ty: a[1] - (u * v + _ * s[1])
    };
  }
  return l;
}
function cu(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function lu(e, t, n) {
  const r = fs(e);
  if (!r) return e;
  const i = e.replace(/\r/g, "").split(Ai);
  if (i[3].indexOf("V3000") !== -1) return e;
  for (let o = 0; o < r.atoms; o++) {
    const s = i[ar + o], a = t[o];
    if (s == null || !a) return e;
    i[ar + o] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + s.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = ar + r.atoms + a, p = i[l];
      if (p == null) break;
      const h = parseInt(p.substring(9, 12), 10);
      h !== 1 && h !== 6 || (i[l] = p.substring(0, 9) + String(h === 1 ? 6 : 1).padStart(3) + p.substring(12));
    }
  return i.join(Ai);
}
function du(e, t, n) {
  try {
    const r = (s) => yr(s).coords.map((a) => [a[0], a[1]]), i = r(t), o = au(i, r(e), n);
    return o ? lu(
      t,
      i.map((s) => cu(o, s)),
      o.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", ge(r)), t;
  }
}
function uu(e, t, n, r, i) {
  const o = Ri(e, t, r), s = Ri(e, n, r);
  return !i || r === "conformer" ? { left: o, right: s } : { left: o, right: du(o, s, i) };
}
const fu = {
  core: "0xaaaaaa",
  uniqueA: "0xff4d4d",
  uniqueB: "0x4dff88",
  pairA: "0xff8888",
  pairB: "0x88ffaa",
  pairLine: "0xffee55",
  overlayA: "0xff6666",
  overlayB: "0x66ff99"
}, pu = {
  core: "0x888888",
  uniqueA: "0xd62828",
  uniqueB: "0x2a9d4a",
  pairA: "0xd62828",
  pairB: "0x2a9d4a",
  pairLine: "0xd9a300",
  overlayA: "0xd62828",
  overlayB: "0x2a9d4a"
};
function hu() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const Ee = hu() ? fu : pu, Ni = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], cr = 420, $e = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04
}, lr = { gap: 2.5, minLiftFraction: 0.6 };
function Mi(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function mu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function ys(e, t) {
  const n = je(t, e.componentA, "SmallMoleculeComponentViz"), r = je(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: n["gufe-key"] === r["gufe-key"] ? [n] : [n, r] };
}
function Fi(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function gu(e, t) {
  const n = Fi(e), r = Fi(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + lr.gap, a = lr.minLiftFraction * o + lr.gap;
  return { axis: i, lift: Math.max(s, a) };
}
class yu extends Ae {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Rt(n), i = je(r, n.componentA, "SmallMoleculeComponentViz"), o = je(r, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !o)
      return t.appendChild(
        le("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = ht(i), a = ht(o), l = mu(n);
    let p, h;
    try {
      p = yr(i.sdf, s), h = yr(o.sdf, a);
    } catch (K) {
      return t.appendChild(le(`Could not read a molecule: ${ge(K)}`, !0)), {};
    }
    const b = /* @__PURE__ */ new Map();
    for (const [K, G] of l) b.set(G, K);
    const y = Mi(l, p.symbols, h.symbols), $ = Mi(b, h.symbols, p.symbols), w = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(w);
    const _ = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    w.appendChild(_);
    const u = pt("atom-mapping.mode", "plain", Ni.map((K) => K.id));
    let v = u.get();
    const f = T(
      "div",
      Vi
    );
    f.appendChild(
      zn(
        Ni,
        v,
        (K) => {
          v = K, Q();
        },
        u
      )
    ), w.appendChild(f);
    let m = [], C = 0, c = !0;
    const d = () => {
      C && cancelAnimationFrame(C), C = 0;
      for (const K of m) {
        K.guard?.cleanup();
        try {
          K.viewer?.clear();
        } catch {
        }
      }
      m = [], _.replaceChildren();
    }, g = (K) => {
      const G = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      G.appendChild(
        T(
          "div",
          Et,
          K
        )
      );
      const ee = T("div", "flex:1;position:relative;min-height:0;");
      ee.dataset.gufeViewer = "", G.appendChild(ee), _.appendChild(G);
      const q = { container: ee, viewer: null, guard: null };
      return m.push(q), q;
    }, k = () => {
      if (m.length < 2) return;
      const K = m.map(() => "");
      let G = !1;
      const ee = () => {
        if (c) {
          if (!G)
            for (let q = 0; q < m.length; q++) {
              const R = m[q].viewer;
              if (!R) continue;
              const D = JSON.stringify(R.getView());
              if (D !== K[q]) {
                G = !0;
                for (let F = 0; F < m.length; F++)
                  F !== q && m[F].viewer && (m[F].viewer.setView(R.getView()), m[F].viewer.render()), K[F] = D;
                G = !1;
                break;
              }
            }
          C = requestAnimationFrame(ee);
        }
      };
      C = requestAnimationFrame(ee);
    }, x = (K, G) => {
      const ee = Ze.createViewer(K.container, { backgroundColor: kt.viewer });
      for (const { mol: q } of G) ee.addModel(Ud(q), "sdf");
      return K.viewer = ee, K.guard = Tr(K.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => {
        }
      }), ee;
    }, O = () => {
      for (const K of [p, h]) {
        const G = g(K.name), ee = x(G, [{ mol: K }]);
        ee.setStyle(
          {},
          { stick: { radius: $e.stick, colorscheme: "Jmol" }, sphere: { scale: $e.sphere, colorscheme: "Jmol" } }
        ), ee.zoomTo(), ee.render();
      }
      k();
    }, A = () => {
      const K = [
        { mol: p, uniques: y, colour: Ee.uniqueA },
        { mol: h, uniques: $, colour: Ee.uniqueB }
      ];
      for (const G of K) {
        const ee = g(G.mol.name), q = x(ee, [{ mol: G.mol }]);
        q.setStyle(
          {},
          { stick: { radius: $e.stick, color: Ee.core }, sphere: { scale: $e.sphere, color: Ee.core } }
        );
        for (const R of G.uniques.atoms)
          q.addStyle(
            { serial: R + 1 },
            {
              stick: { radius: $e.uniqueStick, color: G.colour },
              sphere: { scale: $e.uniqueSphere, color: G.colour }
            }
          );
        q.zoomTo(), q.render();
      }
      k();
    }, P = () => {
      const K = g(`${s} to ${a}  (${l.size} mapped pairs)`), G = [], ee = [];
      for (const [z, W] of l) {
        const B = p.coords[z], Z = h.coords[W];
        B && Z && (G.push(B), ee.push(Z));
      }
      const q = iu(G, ee), R = h.coords.map((z) => q ? su(z, q.R, q.t) : [...z]), { axis: D, lift: F } = gu(p.coords, R), S = {
        ...h,
        coords: R.map((z) => {
          const W = [z[0], z[1], z[2]];
          return W[D] += F, W;
        })
      }, E = x(K, [{ mol: p }, { mol: S }]);
      E.setStyle(
        { model: 0 },
        { stick: { radius: $e.stick, color: Ee.pairA }, sphere: { scale: $e.pairSphere, color: Ee.pairA } }
      ), E.setStyle(
        { model: 1 },
        { stick: { radius: $e.stick, color: Ee.pairB }, sphere: { scale: $e.pairSphere, color: Ee.pairB } }
      );
      for (const [z, W] of l) {
        const B = p.coords[z], Z = S.coords[W];
        !B || !Z || E.addCylinder({
          start: { x: B[0], y: B[1], z: B[2] },
          end: { x: Z[0], y: Z[1], z: Z[2] },
          radius: $e.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: Ee.pairLine
        });
      }
      E.zoomTo(), D === 2 ? E.rotate(90, "x") : D === 0 && E.rotate(-90, "z"), E.render();
    }, I = () => {
      const K = g(`${s} + ${a}  (overlay)`), G = x(K, [{ mol: p }, { mol: h }]);
      for (const [ee, q] of [
        [0, Ee.overlayA],
        [1, Ee.overlayB]
      ])
        G.setStyle(
          { model: ee },
          {
            stick: { radius: $e.stick, color: q, opacity: $e.overlayOpacity },
            sphere: { scale: $e.pairSphere, color: q, opacity: $e.overlayOpacity }
          }
        );
      G.zoomTo(), G.render();
    }, H = () => {
      const K = ut, G = Ad(K.customSpec), q = [
        { mol: p, uniques: y, side: "left", custom: G.left },
        { mol: h, uniques: $, side: "right", custom: G.right }
      ].map((R) => {
        const D = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        D.appendChild(
          T(
            "div",
            Et,
            R.mol.name
          )
        );
        const F = T(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${kt.canvas2D};`
        );
        return F.appendChild(le("Loading 2D depiction...")), D.appendChild(F), _.appendChild(D), { box: F, side: R };
      });
      Or().then((R) => {
        const D = Od(K, R), F = uu(R, i.sdf, o.sdf, K.layout, K.alignPair ? l : null);
        for (const { box: S, side: E } of q) {
          const z = Md(K, E.mol, E.uniques, E.side), W = Td(
            K,
            cr,
            z,
            E.custom,
            D,
            E.mol.symbols.length
          ), B = jd(R, E.side === "left" ? F.left : F.right, cr, W);
          if (S.replaceChildren(), !B) {
            S.appendChild(le("Failed to parse molecule", !0));
            continue;
          }
          hs(S, B, cr);
          const Z = S.querySelector("svg");
          Z && Ld(Z, E.mol, K, z, E.custom, D);
        }
      }).catch((R) => {
        for (const { box: D } of q)
          D.replaceChildren(le(`RDKit failed to load: ${ge(R)}`, !0));
      });
    }, X = () => {
      const K = T("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      _.appendChild(K);
      const G = T("div", "display:flex;flex-direction:column;gap:2px;");
      G.appendChild(
        T(
          "div",
          `font-size:${J.title};font-weight:${He.bold};color:${Te.title};`,
          n.name || `${s} to ${a}`
        )
      ), G.appendChild(T("div", `font-size:${J.body};color:${Te.faint};`, "LigandAtomMapping")), K.appendChild(G);
      const ee = T("div", `display:flex;flex-wrap:wrap;gap:${ce.lg} 16px;font-size:${J.small};`);
      ee.appendChild(pe("mapped atoms", String(l.size))), ee.appendChild(
        pe("element changes", String(y.elements.length), ut.modifiedColor)
      ), ee.appendChild(pe(`unique to ${s}`, String(y.atoms.length), ut.destroyedColor)), ee.appendChild(pe(`unique to ${a}`, String($.atoms.length), ut.createdColor)), ee.appendChild(pe(`atoms in ${s}`, String(p.symbols.length))), ee.appendChild(pe(`atoms in ${a}`, String(h.symbols.length))), ee.appendChild(pe("score", n.score == null ? dt : n.score.toFixed(3))), K.appendChild(ee);
      const q = T("div", Lr, "Correspondence");
      K.appendChild(q);
      const R = T("div", Vr);
      R.textContent = l.size ? Array.from(l, ([F, S]) => `${F} -> ${S}`).join("   ") : "This mapping relates no atoms at all.", K.appendChild(R);
      const D = Object.entries(n.annotations ?? {}).filter(([F]) => F !== "score");
      if (D.length) {
        K.appendChild(T("div", Lr, "Annotations"));
        const F = T("div", `${Vr}color:${Te.faint};`);
        for (const [S, E] of D)
          F.appendChild(T("div", "", `${S}: ${String(E)}`));
        K.appendChild(F);
      }
      K.appendChild(
        T(
          "div",
          `${ks}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, Q = () => {
      if (d(), v === "info") {
        X();
        return;
      }
      if (v === "2d") {
        H();
        return;
      }
      _.appendChild(le("Loading 3D viewer...")), Fr().then(() => {
        c && (_.replaceChildren(), v === "colored" ? A() : v === "lines" ? P() : v === "overlay" ? I() : O());
      }).catch((K) => {
        _.replaceChildren(le(`3D render failed: ${ge(K)}`, !0));
      });
    };
    return Q(), {
      onResize() {
        for (const K of m)
          K.viewer && (K.viewer.resize(), K.viewer.render());
      },
      cleanup() {
        c = !1, d();
      }
    };
  }
}
Re("gufe-atom-mapping", yu);
const Oi = ["Force-directed", "Circular", "Radial"], vu = "ligand-network", Ti = "Cmd/Ctrl-click to select several.", ji = (e) => Math.round(e * 100) / 100;
function $u(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (o) => typeof o == "number" && Number.isFinite(o);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((o) => Array.isArray(o) && o.length === 2 && o.every(r))) return null;
  const i = r(n.selected) ? Math.trunc(n.selected) : -1;
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: i };
}
function bu(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const et = 38, Rn = 200, vs = 4, wu = 14, _u = 18, Pe = {
  fontSize: 11,
  below: et - vs + 12,
  minFontSize: 7,
  insideWidth: (et - 6) * 2
}, zi = 1.5, Su = 6.5, Cu = 0.9, ku = 14, dr = { size: 8, clearance: 8 }, Eu = { fontSize: 10 }, $s = { debounceMs: 250, atomRadius: 0.4 }, xu = mr(M.netMatchAtom), Pu = { padding: 4 }, ft = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], Au = (e) => ft.find((t) => e >= t.from) ?? ft[ft.length - 1], Ru = (e) => ft[Math.min(ft.indexOf(e) + 1, ft.length - 1)], Nn = 200, Nu = 24, ur = { node: 0.12, edge: 0.06 }, Mu = 1.8, Se = {
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
function Fu(e) {
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
function Ou(e) {
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
      refX: et + dr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: dr.size,
      markerHeight: dr.size,
      orient: "auto"
    });
    return o.appendChild(se("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function Tu(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function ju(e) {
  const [t, n] = M.netEdgeRamp.map(Tu), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Fe = ht, zu = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Iu(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], i = (b) => (e.matched().get(b) ?? []).join(","), o = (b, y) => {
    if (t.has(y) || n.has(y)) return;
    const $ = e.nodes[y], w = e.matched().get(y), _ = $.sdf && ps(
      b,
      $.sdf,
      Rn,
      ut.layout,
      w && { atoms: w, color: xu, radius: $s.atomRadius }
    );
    if (!_) {
      n.add(y);
      return;
    }
    const u = new DOMParser().parseFromString(_, "image/svg+xml").documentElement;
    if (!u || u.nodeName.toLowerCase() === "parsererror") {
      n.add(y);
      return;
    }
    const v = (et - vs) * 2 / Rn, f = e.depictionGroups[y];
    f.setAttribute(
      "transform",
      `translate(${-v * Rn / 2},${-v * Rn / 2}) scale(${v})`
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
        f.appendChild(document.importNode(C, !0)), m++;
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
    const w = Pe.fontSize * Pe.insideWidth / $;
    return a[b] = Math.max(Pe.minFontSize, Math.min(Pe.fontSize, w)), a[b];
  }, p = (b, y) => {
    const $ = y.structure && !t.has(b) ? Ru(y) : y;
    e.depictionGroups[b].setAttribute("display", $.structure ? "inline" : "none");
    const w = e.matched().has(b), _ = e.circles[b];
    _.setAttribute("fill", $.disc ? w ? M.netMatchFill : M.netNodeFill : "none"), _.setAttribute("stroke", $.disc ? w ? M.netMatchStroke : M.netNodeStroke : "none"), e.initials[b].setAttribute("display", $.initials ? "inline" : "none");
    const u = e.captions[b];
    if (u.setAttribute("fill", w ? M.netMatchStroke : M.netNodeCaption), u.setAttribute("display", $.name === "none" ? "none" : "inline"), $.name === "none") return;
    const v = $.name === "inside";
    u.setAttribute("y", v ? "0" : String(Pe.below)), u.setAttribute("dominant-baseline", v ? "middle" : "auto"), u.setAttribute("font-size", String(v ? l(b, u) : Pe.fontSize));
  };
  return { apply: (b, y, $) => {
    const w = Au(b);
    e.stage.setAttribute("data-detail", w.id), e.edgeLabels.setAttribute("display", w.edgeScores ? "inline" : "none");
    for (let f = 0; f < e.nodes.length; f++) p(f, w);
    if (!w.structure) return;
    const { width: _, height: u } = e.viewport(), v = [];
    e.nodes.forEach((f, m) => {
      if (t.has(m) || n.has(m)) return;
      const C = f.x * b + y, c = f.y * b + $;
      C < -Nn || c < -Nn || C > _ + Nn || c > u + Nn || v.push(m);
    }), v.length && e.rdkit().then((f) => {
      if (f)
        for (const m of v)
          o(f, m), p(m, w);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: s };
}
function Du(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : Fe(s);
  return r === "ligands" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(`
`) : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function qu(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Ii(e, t)), navigator.clipboard || Ii(e, t);
}
function Ii(e, t) {
  const n = T("textarea", `width:100%;height:80px;font-size:${J.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Vu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Lu(e) {
  const t = Br("ligand-network.query"), n = Br("ligand-network.smarts"), r = Is("ligand-network.minScore", 0, 0, 1), i = pt("ligand-network.exportAs", "names", ["names", "keys"]), o = T(
    "div",
    `display:flex;flex-direction:column;gap:8px;min-width:236px;max-width:340px;box-sizing:border-box;padding:10px;min-height:0;background:${M.panelBg};border-right:1px solid ${M.splitBorder};`
  ), s = T("input", `${fr}width:100%;box-sizing:border-box;`);
  s.type = "search", s.placeholder = "Search ligands", s.value = t.get(), e.query.text = s.value, s.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), o.appendChild(s);
  const a = T("input", `${fr}width:100%;box-sizing:border-box;`);
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
  const p = (A) => {
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
        P.status !== "superseded" && (l.textContent = p(P));
      },
      () => {
        l.textContent = "Matching failed.";
      }
    );
  };
  let b = 0;
  a.oninput = () => {
    n.set(a.value), window.clearTimeout(b), b = window.setTimeout(() => h(a.value), $s.debounceMs);
  };
  const y = T("div", `display:flex;align-items:center;gap:8px;font-size:${J.small};color:${M.textMuted};`), $ = T("span", `min-width:28px;color:${M.textPrimary};`, "0.00"), w = T("input", "flex:1;");
  w.type = "range", w.min = "0", w.max = "1", w.step = "0.01", w.value = String(r.get()), e.filter.minScore = Number(w.value), w.setAttribute("aria-label", "Hide mappings scoring below this"), y.appendChild(T("span", "", "score >=")), y.appendChild(w), y.appendChild($), o.appendChild(y);
  const _ = T("div", `font-size:${J.small};color:${M.textMuted2};`);
  o.appendChild(_);
  const u = T("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  o.appendChild(u), o.appendChild(T("div", `font-size:${J.tiny};line-height:1.5;color:${M.textMuted2};`, Ti));
  const v = T("div", "display:flex;flex-direction:column;gap:6px;"), f = T("div", `display:flex;align-items:center;gap:6px;font-size:${J.small};color:${M.textMuted};`);
  f.appendChild(T("span", "", "copy as"));
  const m = wr(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    i.get(),
    () => {
    },
    i
  );
  m.style.flex = "1", f.appendChild(m), v.appendChild(f);
  const C = T("div", `font-size:${J.tiny};line-height:1.5;color:${M.textMuted2};`), c = (A) => {
    C.textContent = A;
  }, d = T("div", "display:flex;gap:4px;"), g = [
    ["Ligands", "ligands", "Copy the selected ligand names, one per line"],
    ["Edges", "edges", "Copy the edges between the selected ligands, one pair per line"]
  ];
  for (const [A, P, I] of g) {
    const H = T("button", `${xt}flex:1;`, A);
    H.title = I, H.onclick = (X) => {
      const Q = m.value, K = Du(e.nodes, e.edges, e.selected, P, Q);
      if (!K) {
        c(
          e.selected.size === 0 ? "Nothing selected. Click a ligand above." : P === "edges" ? `No mappings between the ${e.selected.size} selected ligands. ${Ti}` : "Nothing to copy."
        );
        return;
      }
      const G = K.split(`
`).length;
      X.shiftKey ? (Vu(K, `selected-${P}.txt`), c(`Saved ${G} ${P === "edges" ? "edges" : "ligands"} to a file.`)) : (qu(K, v), c(P === "edges" ? `Copied ${G} edges.` : `Copied ${e.selected.size} ligands.`));
    }, d.appendChild(H);
  }
  v.appendChild(d), v.appendChild(C), v.appendChild(
    T("div", `font-size:${J.tiny};color:${M.textMuted2};`, "Shift-click to save as a file instead.")
  ), o.appendChild(v);
  const k = T("button", `${xt}width:100%;`, "Clear selection");
  k.onclick = () => {
    e.selected.clear(), O(), e.refresh();
  }, o.appendChild(k);
  const x = (A) => {
    const P = e.query.text.trim().toLowerCase();
    return P ? Fe(A).toLowerCase().includes(P) || (A.smiles ?? "").toLowerCase().includes(P) || A["gufe-key"].toLowerCase().includes(P) : !0;
  }, O = () => {
    c(""), u.replaceChildren();
    const A = e.nodes.map((P, I) => ({ node: P, index: I })).filter(({ node: P }) => x(P));
    _.textContent = `${A.length} of ${e.nodes.length} ligands`;
    for (const { node: P, index: I } of A) {
      const H = P["gufe-key"], X = T(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${J.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(H) ? M.cardBorderActive : M.cardBorder};background:${e.selected.has(H) ? M.cardBgActive : M.cardBg};color:${M.textPrimary};`
      ), Q = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Fe(P));
      Q.title = `${Fe(P)}
${P.smiles ?? ""}`, X.appendChild(Q), X.onclick = (K) => {
        K.shiftKey || K.metaKey || K.ctrlKey ? e.selected.has(H) ? e.selected.delete(H) : e.selected.add(H) : (e.selected.clear(), e.selected.add(H), e.focus(I)), O(), e.refresh();
      }, u.appendChild(X);
    }
    A.length || u.appendChild(T("div", `font-size:${J.small};padding:8px;color:${M.textMuted2};`, "Nothing matches."));
  };
  return s.oninput = () => {
    e.query.text = s.value, t.set(s.value), O(), e.refresh();
  }, w.oninput = () => {
    e.filter.minScore = Number(w.value), $.textContent = e.filter.minScore.toFixed(2), r.set(e.filter.minScore), e.refresh();
  }, O(), a.value.trim() && h(a.value), o;
}
class Bu extends Ae {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Rt(n), i = [];
    let o = 0;
    for (const B of n.nodes ?? []) {
      const Z = je(r, B, "SmallMoleculeComponentViz");
      if (!Z) {
        o++;
        continue;
      }
      i.push({ ...Z, x: 0, y: 0 });
    }
    const s = new Map(i.map((B) => [B["gufe-key"], B])), a = [];
    let l = 0;
    for (const B of n.edges ?? []) {
      const Z = s.get(B.componentA), te = s.get(B.componentB);
      if (!Z || !te) {
        l++;
        continue;
      }
      a.push({ ...B, index: a.length, from: Z, to: te });
    }
    const p = Ge(n.name || "Ligand network");
    p.statsEl.appendChild(pe("ligands", String(i.length))), p.statsEl.appendChild(pe("mappings", String(a.length))), t.appendChild(p);
    const h = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const b = /* @__PURE__ */ new Set(), y = { minScore: 0 }, $ = { text: "" };
    let w = () => {
    }, _ = null;
    const u = () => _ ??= Or().catch((B) => (console.warn("[gufe-viz] RDKit failed to load:", ge(B)), null)), v = ru(
      u,
      i.map((B) => B.sdf ?? "")
    );
    let f = /* @__PURE__ */ new Map(), m = () => {
    };
    const C = async (B) => {
      const Z = await v.run(B);
      return Z.status === "superseded" || (f = Z.status === "ok" ? Z.matched : /* @__PURE__ */ new Map(), m()), Z;
    }, c = ra(
      p,
      () => Lu({
        nodes: i,
        edges: a,
        selected: b,
        filter: y,
        query: $,
        refresh: () => w(),
        focus: (B) => H(B),
        match: (B) => C(B)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => W(),
        remember: Ct("ligand-network.menuOpen", !1)
      }
    );
    h.appendChild(c.panel);
    const d = T("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${M.netCanvasBg};`), g = T("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${M.appBg};`);
    h.appendChild(d), h.appendChild(T("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`)), h.appendChild(g);
    const k = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${M.netCanvasBg};`);
    d.appendChild(k);
    const x = pt("ligand-network.layout", "Force-directed", Oi), O = this.#t(
      (B) => W(B),
      () => E(),
      x
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
    const P = u(), I = Fu(k);
    let H = () => {
    };
    const X = $u(Fs(vu), i.length);
    let Q = X && { scale: X.scale, tx: X.tx, ty: X.ty }, K = X && X.selected < a.length ? X.selected : a.length ? 0 : -1, G = () => ({ scale: 1, tx: 0, ty: 0 }), ee = !1, q = null, R = x.get(), D = !1, F = !0, S = () => {
    }, E = () => {
    };
    const z = (B) => {
      K = B, A.show(a[B] ?? null), S();
    }, W = (B = R) => {
      const Z = ee && B === R ? G() : null;
      R = B, q?.(), q = null, k.querySelector("svg")?.remove();
      const te = k.clientWidth || 800, N = k.clientHeight || 600;
      Uu(i, te, N, R, a), X && bu(i, X.nodes);
      const j = () => {
        if (!F) return;
        const L = this.#r(k, i, a, te, N, z, P, I);
        S = () => L.setSelected(K), E = L.reset, q = L.cleanup, H = (Y) => L.focusOn(Y), G = L.transform, w = () => {
          const Y = $.text.trim().toLowerCase(), ne = b.size > 0 || Y.length > 0, ue = /* @__PURE__ */ new Set();
          for (const fe of i) {
            const de = fe["gufe-key"], Ve = b.has(de) || Y.length > 0 && (Fe(fe).toLowerCase().includes(Y) || (fe.smiles ?? "").toLowerCase().includes(Y) || de.toLowerCase().includes(Y));
            (!ne || Ve) && ue.add(de);
          }
          const be = /* @__PURE__ */ new Set();
          a.forEach((fe, de) => {
            (fe.score ?? 0) < y.minScore || !ue.has(fe.from["gufe-key"]) || !ue.has(fe.to["gufe-key"]) || be.add(de);
          });
          const he = ne || y.minScore > 0;
          L.setEmphasis(he ? ue : null, he ? be : null);
        }, m = () => L.setMatches(f), S(), w(), m();
        const U = Q ?? Z;
        U ? (L.setTransform(U.scale, U.tx, U.ty), Q = null) : L.fit(), ee = !0;
      };
      if (R !== "Force-directed" || D || X) {
        j();
        return;
      }
      Ku(i, a, te, N).then((L) => {
        if (F) {
          if (L) {
            j();
            return;
          }
          D = !0, O.picker.value = "Circular", Xe(k, "d3 could not be loaded - showing the circular layout instead"), W("Circular");
        }
      }, j);
    };
    return W(), A.show(a[K] ?? null), {
      onResize: () => W(),
      cleanup: () => {
        F = !1, v.cancel(), I.remove(), q?.();
      },
      viewState: () => ({
        nodes: i.map((B) => [ji(B.x), ji(B.y)]),
        ...G(),
        selected: K
      })
    };
  }
  #t(t, n, r) {
    const i = T(
      "div",
      qi.bottom
    ), o = T("div", `display:flex;align-items:center;gap:6px;font-size:${J.small};color:${M.textMuted};`);
    o.appendChild(T("span", "", "score")), o.appendChild(
      T(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${M.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(T("span", "", "0 -> 1")), i.appendChild(o), i.appendChild(T("label", `font-size:${J.body};margin-left:auto;color:${M.textMuted};`, "Layout"));
    const s = wr(
      Oi.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return i.appendChild(s), i.appendChild(jr(n, "Reset pan and zoom")), { bar: i, picker: s };
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
      a.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", a.payload = ys(s, n), r.replaceChildren(a);
    }, message: i };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, r, i, o, s, a, l) {
    const p = se("svg", {
      class: "gufe-graph",
      width: i,
      height: o,
      style: "display:block;touch-action:none;"
    }), h = se("g");
    p.appendChild(h), t.appendChild(p);
    const b = se("defs"), y = Ou(b);
    p.appendChild(b);
    const $ = [], w = se("g"), _ = se("g"), u = se("g", { "pointer-events": "none" }), v = se("g");
    h.append(w, _, u, v);
    for (const A of r) {
      const P = ju(A.score), I = zi + (A.score ?? 0.5) * (Su - zi), H = se("line", {
        stroke: M.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": I + Pu.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), X = se("line", {
        stroke: P,
        "stroke-width": I,
        "stroke-opacity": Cu,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${y(P)})`,
        "pointer-events": "none"
      }), Q = se("line", { stroke: "transparent", "stroke-width": ku, style: "cursor:pointer;" });
      Q.addEventListener("click", (ee) => {
        ee.stopPropagation(), s(A.index);
      }), Q.addEventListener("mousemove", (ee) => {
        l.show(
          `<div style="font-weight:700;color:${M.titleColor};">${qe(Fe(A.from))} -&gt; ${qe(Fe(A.to))}</div>` + (A.score == null ? `<div style="color:${M.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${J.tiny};color:${M.textMuted2};">Click to see the mapping</div>`,
          ee.offsetX,
          ee.offsetY
        );
      }), Q.addEventListener("mouseleave", () => l.hide()), $.push(H), w.append(H, X), _.appendChild(Q);
      const K = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Eu.fontSize,
        "font-weight": 600,
        fill: M.netEdgeLabel
      });
      K.textContent = A.score == null ? "" : A.score.toFixed(2);
      const G = se("g", { class: "gufe-edge-label" });
      G.appendChild(K), u.appendChild(G);
    }
    const f = [], m = [], C = [], c = [], d = n.map((A) => {
      const P = se("g", { class: "gufe-node", style: "cursor:grab;" });
      P.addEventListener("mousemove", (K) => {
        l.show(
          `<div style="font-weight:700;color:${M.titleColor};">${qe(Fe(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${qe(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${J.tiny};color:${M.textMuted2};overflow-wrap:anywhere;">${qe(A["gufe-key"])}</div>`,
          K.offsetX,
          K.offsetY
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
      const H = se("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      P.appendChild(H), f.push(H);
      const X = se("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": _u,
        "font-weight": 700,
        fill: M.netInitials,
        "pointer-events": "none"
      });
      X.textContent = Fe(A).slice(0, 2).toUpperCase(), P.appendChild(X), C.push(X);
      const Q = se("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Pe.below,
        "font-size": Pe.fontSize,
        "font-weight": 600,
        fill: M.netNodeCaption,
        "pointer-events": "none"
      });
      return Q.textContent = zu(Fe(A), wu), Q.setAttribute("display", "none"), c.push(Q), P.appendChild(Q), v.appendChild(P), P;
    }), g = () => {
      r.forEach((A, P) => {
        for (const H of [$[P], w.children[P * 2 + 1], _.children[P]]) {
          const X = H;
          X.setAttribute("x1", String(A.from.x)), X.setAttribute("y1", String(A.from.y)), X.setAttribute("x2", String(A.to.x)), X.setAttribute("y2", String(A.to.y));
        }
        u.children[P].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, P) => d[P].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    g();
    let k = /* @__PURE__ */ new Map();
    const x = Iu({
      nodes: n,
      circles: m,
      matched: () => k,
      captions: c,
      initials: C,
      depictionGroups: f,
      edgeLabels: u,
      stage: p,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), O = this.#n(p, h, n, d, g, x.apply);
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
        k = A, x.forget();
        const { scale: P, tx: I, ty: H } = O.transform();
        x.apply(P, I, H);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, P) {
        d.forEach((I, H) => {
          const X = !A || A.has(n[H]["gufe-key"]);
          I.setAttribute("opacity", X ? "1" : String(ur.node));
        }), r.forEach((I, H) => {
          const X = !P || P.has(H), Q = X ? "0.9" : String(ur.edge);
          w.children[H * 2 + 1].setAttribute("stroke-opacity", Q), u.children[H].setAttribute("opacity", X ? "1" : String(ur.edge));
        });
      },
      focusOn(A) {
        const P = n[A];
        P && O.centreOn(P.x, P.y);
      },
      setDetail: x.apply,
      depictionsDrawn: () => x.drawn(),
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
    let a = 1, l = 0, p = 0;
    const h = () => {
      n.setAttribute("transform", `translate(${l},${p}) scale(${a})`), s(a, l, p);
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
      if (a = 1, l = 0, p = 0, !Number.isFinite(m)) {
        h();
        return;
      }
      const g = et + Nu, { width: k, height: x } = b();
      a = Math.min(1, k / (c - m + g * 2), x / (d - C + g * 2)), l = k / 2 - (m + c) / 2 * a, p = x / 2 - (C + d) / 2 * a, h();
    }, w = Tr(t, {
      onZoom: (m) => {
        const C = t.getBoundingClientRect(), c = m.clientX - C.left, d = m.clientY - C.top, g = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-m.deltaY * 2e-3)));
        return l = c - (c - l) * g, p = d - (d - p) * g, a *= g, h(), g !== 1;
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let _ = null;
    const u = (m) => {
      _ = { x: m.clientX - l, y: m.clientY - p };
    }, v = (m) => {
      _ && (l = m.clientX - _.x, p = m.clientY - _.y, h());
    }, f = () => {
      _ = null;
    };
    return t.addEventListener("pointerdown", u), t.addEventListener("pointermove", v), t.addEventListener("pointerup", f), t.addEventListener("pointercancel", f), t.addEventListener("pointerleave", f), i.forEach((m, C) => {
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
        a = Math.max(a, Mu), l = c / 2 - m * a, p = d / 2 - C * a, h();
      },
      transform: () => ({ scale: a, tx: l, ty: p }),
      // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
      // camera being put back exactly where it was, and a limit applied here
      // would quietly move it.
      setTransform(m, C, c) {
        a = m, l = C, p = c, h();
      },
      cleanup() {
        w.cleanup(), t.removeEventListener("pointerdown", u), t.removeEventListener("pointermove", v), t.removeEventListener("pointerup", f), t.removeEventListener("pointercancel", f), t.removeEventListener("pointerleave", f);
      }
    };
  }
}
function Uu(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (l, p) => {
    l.forEach((h, b) => {
      const y = 2 * Math.PI * b / Math.max(1, l.length) - Math.PI / 2;
      h.x = o + p * Math.cos(y), h.y = s + p * Math.sin(y), h.fx = r === "Force-directed" ? void 0 : h.x, h.fy = r === "Force-directed" ? void 0 : h.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of i)
      l.get(_.from["gufe-key"]).push(_.to["gufe-key"]), l.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const p = new Map(e.map((_) => [_["gufe-key"], _])), h = e.reduce(
      (_, u) => l.get(u["gufe-key"]).length > l.get(_["gufe-key"]).length ? u : _
    ), b = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let y = [h["gufe-key"]], $ = 0;
    const w = Math.min(t, n) * 0.18;
    for (; y.length; ) {
      a(
        y.map((u) => p.get(u)),
        $ === 0 ? 0 : $ * w + 40
      );
      const _ = [];
      for (const u of y)
        for (const v of l.get(u))
          b.has(v) || (b.add(v), _.push(v));
      y = _, $++;
    }
    a(e.filter((_) => !b.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Ku(e, t, n, r) {
  let i;
  try {
    if (i = await cs(), typeof i?.forceSimulation != "function") return !1;
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
Re("gufe-ligand-network", Bu);
const _t = { width: 148, height: 46, radius: 10 }, lt = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, St = ht;
function Hu(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Gu(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
async function Wu(e, t, n, r) {
  let i;
  try {
    if (i = await cs(), typeof i?.forceSimulation != "function") return !1;
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
class Ju extends Ae {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Rt(n), i = [];
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
    const p = (d) => {
      const g = je(r, d.protocol, "ProtocolViz");
      return g?.gufe_type || g?.name || "";
    }, h = new Set(a.map(p).filter(Boolean)), b = Ge(n.name || "Alchemical network");
    b.statsEl.appendChild(pe("systems", String(i.length))), b.statsEl.appendChild(pe("transformations", String(a.length))), h.size && b.statsEl.appendChild(pe("protocol", [...h].join(", "))), t.appendChild(b);
    const y = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    const $ = T("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${M.netCanvasBg};`);
    y.appendChild($), y.appendChild(T("div", `width:1px;flex-shrink:0;background:${M.splitBorder};`));
    const w = T("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${M.appBg};`);
    y.appendChild(w);
    const _ = this.#t(w, r, p);
    if (!i.length)
      return $.appendChild(
        le(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), _.message("Nothing to show."), {};
    o && Xe(
      $,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Xe(
      $,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let u = !0, v = !1, f = null, m = () => {
    };
    const C = (d, g) => {
      f = { kind: d, index: g }, _.show(d === "node" ? i[g] : a[g], d), m();
    }, c = () => {
      $.querySelector("svg")?.remove();
      const d = $.clientWidth || 800, g = $.clientHeight || 600;
      Gu(i, d, g);
      const k = () => {
        if (!u) return;
        const x = this.#e($, i, a, d, g, C);
        m = () => x.setSelected(f), m();
      };
      if (v) {
        k();
        return;
      }
      Wu(i, a, d, g).then((x) => {
        u && (x || (v = !0, Xe($, "d3 could not be loaded - showing the circular layout instead")), k());
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
        Et,
        "Selected"
      )
    );
    const i = T("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(i);
    const o = (l) => i.replaceChildren(le(l)), s = (l, p) => {
      const h = T(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${M.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return h.appendChild(T("div", `font-size:${J.heading};font-weight:600;color:${M.textPrimary};`, l)), h.appendChild(T("div", `font-size:${J.small};color:${M.textMuted2};`, p)), h;
    };
    return { show: (l, p) => {
      if (i.replaceChildren(), p === "node") {
        const y = l;
        i.appendChild(s(St(y), "ChemicalSystem"));
        const $ = T("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), w = Object.entries(y.components ?? {});
        for (const [_, u] of w) {
          const v = Qe(n, u), f = T(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${M.cardBg};border:1px solid ${M.cardBorder};`
          );
          f.appendChild(T("span", `font-size:${J.body};font-weight:700;color:${M.textPrimary};`, _)), f.appendChild(
            T(
              "span",
              `font-size:${J.small};color:${M.textMuted};overflow-wrap:anywhere;min-width:0;`,
              v ? v.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const m = At(
            v ? v.type === "UnknownComponentViz" ? v.gufe_type : v.type.replace(/Viz$/, "") : "missing"
          );
          m.style.marginLeft = "auto", f.appendChild(m), $.appendChild(f);
        }
        w.length || $.appendChild(T("div", `font-size:${J.body};color:${M.textMuted2};`, "This system lists no components.")), i.appendChild($), i.appendChild(
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
        const w = T("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        w.appendChild(
          T(
            "span",
            `flex:0 0 76px;font-size:${J.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${M.textMuted2};`,
            y
          )
        ), w.appendChild(T("span", `flex:1;min-width:0;font-size:${J.body};color:${M.textPrimary};overflow-wrap:anywhere;`, $)), b.appendChild(w);
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
    const l = se("g"), p = se("g");
    a.append(l, p);
    const h = [];
    r.forEach((y, $) => {
      const w = se("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: M.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Tn(w, y.name || "transformation"), w.addEventListener("click", () => s("edge", $)), l.appendChild(w), h.push(w);
      const _ = se("line", {
        x1: y.from.x,
        y1: y.from.y,
        x2: y.to.x,
        y2: y.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      _.addEventListener("click", () => s("edge", $)), l.appendChild(_);
    });
    const b = [];
    return n.forEach((y, $) => {
      const w = se("g", { style: "cursor:pointer;" }), _ = se("rect", {
        x: y.x - _t.width / 2,
        y: y.y - _t.height / 2,
        width: _t.width,
        height: _t.height,
        rx: _t.radius,
        fill: M.cardBg,
        stroke: M.cardBorder,
        "stroke-width": 2
      });
      w.appendChild(_), b.push(_);
      const u = se("text", {
        x: y.x,
        y: y.y - 2,
        "text-anchor": "middle",
        fill: M.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = Hu(St(y), 20), w.appendChild(u);
      const v = Object.keys(y.components ?? {}).length, f = se("text", {
        x: y.x,
        y: y.y + 14,
        "text-anchor": "middle",
        fill: M.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = `${v} component${v === 1 ? "" : "s"}`, w.appendChild(f), Tn(w, St(y)), w.addEventListener("click", () => s("node", $)), p.appendChild(w);
    }), {
      setSelected(y) {
        b.forEach(($, w) => {
          const _ = y?.kind === "node" && y.index === w;
          $.setAttribute("stroke", _ ? M.cardBorderActive : M.cardBorder), $.setAttribute("stroke-width", _ ? "3" : "2");
        }), h.forEach(($, w) => {
          const _ = y?.kind === "edge" && y.index === w;
          $.setAttribute("stroke", _ ? M.netHaloColor : M.netEdgeLine), $.setAttribute("stroke-width", _ ? "4" : "2");
        });
      }
    };
  }
}
Re("gufe-alchemical-network", Ju);
function Yu(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Xu(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Zu extends Ae {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Rt(n), i = [], o = [];
    for (const [w, _] of Object.entries(n.components ?? {})) {
      const u = Qe(r, _);
      u ? i.push([w, u]) : o.push(w);
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
    const p = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(p);
    const h = T("div", "flex:1;min-height:0;display:flex;");
    p.appendChild(h);
    const b = document.createElement("gufe-view");
    b.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(b);
    const y = [], $ = (w) => {
      y.forEach((_, u) => {
        const v = u === w;
        _.style.background = v ? M.cardBgActive : M.cardBg, _.style.borderColor = v ? M.cardBorderActive : M.cardBorder;
      }), b.payload = i[w][1];
    };
    return i.forEach(([w, _], u) => {
      const v = T(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${M.cardBorder};border-radius:8px;background:${M.cardBg};cursor:pointer;font-family:inherit;font-size:${J.body};width:100%;`
      );
      v.appendChild(T("span", `font-weight:700;color:${M.textPrimary};`, w)), v.appendChild(T("span", `font-size:${J.small};color:${M.textMuted};`, Yu(_))), v.appendChild(At(Xu(_))), v.onclick = () => $(u), y.push(v), l.appendChild(v);
    }), $(0), {
      onResize: () => b.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => b.remove()
    };
  }
}
Re("gufe-chemical-system", Zu);
class Qu extends Ae {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Ge(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(At(n.gufe_type)), t.appendChild(r);
    const i = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = Mn();
    return o.style.maxWidth = "460px", o.appendChild(Oe("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Oe("Name", n.name)), o.appendChild(Oe("gufe key", n["gufe-key"], !0)), o.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${J.small};line-height:1.6;color:${M.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Re("gufe-protocol", Qu);
const xe = { width: 340, height: 260, padding: 14, radius: 12 }, ef = 150, tf = 40, nf = 24;
function rf(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function of(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function sf(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(nf, Math.round(e * tf)));
}
function af(e) {
  const t = se("svg", {
    viewBox: `0 0 ${xe.width} ${xe.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Tn(t, `${e.smiles || "solvent"} box`), t.appendChild(
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
  const n = rf(1597463007), r = () => ({
    x: xe.padding + n() * (xe.width - 2 * xe.padding),
    y: xe.padding + n() * (xe.height - 2 * xe.padding)
  });
  for (let s = 0; s < ef; s++) {
    const { x: a, y: l } = r();
    t.appendChild(se("circle", { cx: a, cy: l, r: 2.4, fill: M.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = sf(of(e.ion_concentration)), o = [
    [e.positive_ion, M.diffAdded],
    [e.negative_ion, M.diffRemoved]
  ];
  for (const [s, a] of o)
    for (let l = 0; l < i; l++) {
      const { x: p, y: h } = r(), b = se("circle", { cx: p, cy: h, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(Tn(b, s));
    }
  return t;
}
class cf extends Ae {
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
    const o = Mn();
    o.style.flex = "1 1 320px", o.appendChild(Oe("SMILES", n.smiles, !0)), o.appendChild(Oe("Positive ion", n.positive_ion)), o.appendChild(Oe("Negative ion", n.negative_ion)), o.appendChild(Oe("Ion concentration", n.ion_concentration)), o.appendChild(Oe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(o);
    const s = Mn();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(af(n)), s.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${J.small};text-align:center;color:${M.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(s), {};
  }
}
Re("gufe-solvent", cf);
const br = {
  unchanged: M.diffUnchanged,
  changed: M.diffChanged,
  added: M.diffAdded,
  removed: M.diffRemoved
};
function lf(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function df(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function uf(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Di(e, t) {
  const n = T(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${M.cardBg};border:1px solid ${M.cardBorder};`
  ), r = uf(e);
  return r ? (n.style.borderColor = t === "unchanged" ? M.cardBorder : br[t], n.appendChild(T("span", `font-size:${J.body};font-weight:600;color:${M.textPrimary};`, r.name)), n.appendChild(At(r.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(T("span", `font-size:${J.body};color:${M.textMuted2};`, "absent")), n);
}
function ff(e, t) {
  const n = Qe(t, e.componentA), r = Qe(t, e.componentB);
  return `${n ? ht(n) : "A"} to ${r ? ht(r) : "B"}`;
}
class pf extends Ae {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Rt(n), i = je(r, n.stateA, "ChemicalSystemViz"), o = je(r, n.stateB, "ChemicalSystemViz"), s = je(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = Ge(n.name || "Transformation");
    if (l.statsEl.appendChild(pe("protocol", s?.gufe_type || s?.name || "-")), l.statsEl.appendChild(pe("mappings", String(a.length))), t.appendChild(l), !i || !o)
      return t.appendChild(
        le("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const p = df(i, o), h = T("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
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
    for (const u of p) {
      const v = i.components?.[u], f = o.components?.[u], m = lf(v, f), C = Qe(r, v), c = Qe(r, f), d = T("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), g = T("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      g.appendChild(
        T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${br[m]};`)
      );
      const k = T("span", `font-size:${J.body};font-weight:700;color:${M.textPrimary};overflow-wrap:anywhere;`, u);
      k.title = m, g.appendChild(k), d.appendChild(g), d.appendChild(Di(C, m)), d.appendChild(Di(c, m)), h.appendChild(d);
    }
    const y = T(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${J.small};color:${M.textMuted};`
    );
    for (const u of ["unchanged", "changed", "added", "removed"])
      y.appendChild(pe(u, "", br[u]));
    h.appendChild(y);
    const $ = T(
      "div",
      Et,
      "Atom mapping"
    );
    if (t.appendChild($), !a.length)
      return t.appendChild(
        le(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const w = document.createElement("gufe-atom-mapping");
    w.style.cssText = "flex:1;min-height:0;min-width:0;";
    const _ = (u) => {
      w.payload = ys(a[u], r);
    };
    if (_(0), a.length > 1) {
      const u = T(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${J.small};background:${M.toolbarBg};border-bottom:1px solid ${M.toolbarBorder};color:${M.textMuted};`
      );
      u.appendChild(
        zn(
          a.map((v, f) => ({
            id: String(f),
            label: v.name || ff(v, r)
          })),
          "0",
          (v) => _(Number(v))
        )
      ), t.appendChild(u);
    }
    return t.appendChild(w), {
      onResize: () => w.resize?.(),
      cleanup: () => w.remove()
    };
  }
}
Re("gufe-transformation", pf);
class hf extends Ae {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Ge(n.name || "Unnamed component");
    r.statsEl.appendChild(At(n.gufe_type)), t.appendChild(r);
    const i = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = Mn();
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
Re("gufe-unknown-component", hf);
function wf(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Ui, reset: qs });
export {
  Qs as CHROME_OPEN_BY_DEFAULT,
  xs as DEBUG_ATTRIBUTE,
  Ps as DEBUG_GLOBAL,
  bd as DEFAULT_DEPICT_STYLE,
  Bl as DEFAULT_ZOOM_BOUNDS,
  ut as DEPICT_STYLE,
  Ed as DEPICT_STYLE_RANGES,
  Ju as GufeAlchemicalNetwork,
  yu as GufeAtomMapping,
  Zu as GufeChemicalSystem,
  Ae as GufeElement,
  Bu as GufeLigandNetwork,
  Zd as GufeProtein,
  Qu as GufeProtocol,
  Hd as GufeSmallMolecule,
  cf as GufeSolvent,
  pf as GufeTransformation,
  hf as GufeUnknownComponent,
  Il as GufeView,
  ir as MAPPING_COLORS,
  $f as MAPPING_RAMP_3D,
  bf as MAPPING_RAMP_NAME,
  mf as PAYLOAD_TYPES,
  gf as SCHEMA_TYPES,
  Rr as VIEW_TAGS,
  au as align2D,
  du as alignedToPartner,
  su as applyRT,
  cu as applyTurn,
  Kl as boundedZoom,
  Rt as buildRegistry,
  pt as choice,
  ra as chromeMenu,
  Li as debugEnabled,
  Re as defineElement,
  ss as describeProblem,
  lf as diffStatus,
  vf as dispatchProblem,
  ht as entryLabel,
  Ct as flag,
  jl as formatIssues,
  Tr as guardWheel,
  iu as kabsch,
  Ri as laidOut,
  uu as layoutPair,
  gu as liftFor,
  Ms as logPayload,
  Qe as lookup,
  je as lookupOfType,
  ys as mappingPayloadFor,
  Md as markGroups,
  sr as markedBonds,
  wf as mount,
  Pd as normaliseDepictStyle,
  Is as num,
  Ad as parseAtomSpec,
  of as parseConcentration,
  Ns as payloadJson,
  jr as resetControl,
  qs as resetSettings,
  Du as selectionText,
  jn as setting,
  Ui as settings,
  Br as textSetting,
  Mi as uniqueAtoms,
  Nd as uniqueBonds,
  yf as validateAs,
  Tl as validatePayload,
  ls as viewerInteraction,
  Gl as wheelFactor,
  lu as withCoords
};
