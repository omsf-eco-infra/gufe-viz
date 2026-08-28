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
function Gi() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const O = Gi() ? Yr.dark : Yr.light, Y = {
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
}, Nt = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: O.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: O.canvas2DBg
}, ye = {
  base: `background:${O.btnBg};color:${O.btnFg};border:1px solid ${O.btnBorder};padding:${se.sm} 9px;font-size:${Y.small};font-weight:${Le.bold};border-radius:${ot.sm};cursor:pointer;font-family:inherit;`,
  bg: O.btnBg,
  bgHover: O.btnBgHover,
  bgActive: O.btnBgActive
}, Wi = `background:${O.selectBg};color:${O.textPrimary};border:1px solid ${O.selectBorder};border-radius:${ot.md};padding:${se.sm} ${se.lg};font-size:${Y.body};cursor:pointer;font-family:inherit;`, Ji = `display:flex;align-items:center;gap:12px;padding:9px ${se.xxl};flex-shrink:0;background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};`, ei = `display:flex;flex-direction:column;gap:${se.lg};flex:1;min-width:236px;max-width:340px;box-sizing:border-box;padding:${se.xl};min-height:0;overflow-y:auto;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`, ti = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;", Pr = {
  top: `display:flex;align-items:center;gap:${se.xl};flex-wrap:wrap;padding:${se.lg} ${se.xxl};flex-shrink:0;font-size:${Y.body};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${se.xl};flex-wrap:wrap;padding:${se.lg} ${se.xxl};flex-shrink:0;background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};`
}, ni = `flex-shrink:0;padding:${se.sm} ${se.xl};font-size:${Y.heading};font-weight:${Le.bold};color:${O.labelFg};background:${O.labelBg};`, $r = `position:absolute;top:${se.md};left:${se.md};z-index:10;pointer-events:none;max-width:calc(100% - ${se.xxl} - ${se.xxl});white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:${se.xs} ${se.lg};border-radius:${ot.md};font-size:${Y.heading};font-weight:${Le.bold};color:${O.labelFg};background:${O.labelBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Yi = `display:flex;flex-direction:column;gap:${se.xs};padding:${se.xxl} 18px;border-radius:${ot.xl};background:${O.cardBg};border:1px solid ${O.cardBorder};`, ri = `position:absolute;bottom:${se.xl};right:${se.xl};display:flex;gap:${se.sm};padding:${se.sm};border-radius:${ot.md};z-index:10;background:${O.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Xr = `font-family:${Y.mono};font-size:${Y.small};line-height:1.7;color:${O.textMuted};`, Zr = `font-size:${Y.small};font-weight:${Le.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`, Xi = `font-size:${Y.small};line-height:1.6;color:${O.textMuted2};`, Zi = ["debug", "gufe-debug"], Qi = "debug", ea = "GUFE_VIZ_DEBUG";
function ta() {
  return !!globalThis[ea];
}
function na() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return Zi.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function oi(e) {
  return e?.hasAttribute?.(Qi) ? !0 : ta() || na();
}
function ra(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${he(t)}>`;
  }
}
function oa(e, t, n) {
  if (!oi(n)) return;
  const r = ra(t), o = t?.type, s = `[gufe-viz] ${e}${typeof o == "string" ? ` ${o}` : ""} (${r.length} chars)`, i = typeof console.groupCollapsed == "function";
  i ? console.groupCollapsed(s) : console.log(s), console.log(r), console.log(t), i && console.groupEnd?.();
}
const si = "GUFE_VIZ_VIEW_STATE";
function sa(e) {
  const t = globalThis[si];
  if (!t || typeof t != "object") return null;
  const n = t, r = n[e];
  return delete n[e], r ?? null;
}
const ia = 150, Qr = "data-gufe-shell";
class Ae extends HTMLElement {
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
    this.style.height = t || "100%", !t && !this.parentElement?.closest(`[${Qr}]`) && this.#d() && (this.style.maxHeight = "100vh"), this.style.background = O.appBg, this.style.color = O.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#r && (this.#r = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), ia);
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
    ), this.#t.setAttribute(Qr, ""), this.appendChild(this.#t), this.#t;
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
      t.appendChild(ue(this.placeholder()));
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
    n === this.#s && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(ue(`Failed to render: ${he(r)}`, !0)));
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
const Ce = "gufe-viz:", Ge = /* @__PURE__ */ new Map();
let Tt = null;
function aa() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Mt() {
  if (Tt === !1) return null;
  const e = aa();
  if (!e)
    return Tt = !1, null;
  try {
    const t = `${Ce}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), Tt = !0, e;
  } catch {
    return Tt = !1, null;
  }
}
function ca(e) {
  const t = Mt();
  if (!t) return Ge.get(Ce + e) ?? null;
  try {
    return t.getItem(Ce + e);
  } catch {
    return null;
  }
}
function la(e, t) {
  const n = Mt();
  if (!n) {
    Ge.set(Ce + e, t);
    return;
  }
  try {
    n.setItem(Ce + e, t);
  } catch {
    Ge.set(Ce + e, t);
  }
}
function In(e, t, n) {
  return {
    key: e,
    get() {
      const r = ca(e);
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
        la(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function $t(e, t, n) {
  return In(e, t, (r) => typeof r == "string" && n.includes(r));
}
function gt(e, t) {
  return In(e, t, (n) => typeof n == "boolean");
}
function Ar(e, t, n = -1 / 0, r = 1 / 0) {
  return In(
    e,
    t,
    (o) => typeof o == "number" && Number.isFinite(o) && o >= n && o <= r
  );
}
function At(e, t = "") {
  return In(e, t, (n) => typeof n == "string");
}
function ii() {
  const e = {}, t = Mt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ge.keys());
  for (const r of n) {
    if (!r.startsWith(Ce)) continue;
    const o = t ? t.getItem(r) : Ge.get(r) ?? null;
    if (o !== null)
      try {
        e[r.slice(Ce.length)] = JSON.parse(o);
      } catch {
        e[r.slice(Ce.length)] = o;
      }
  }
  return e;
}
function da() {
  const e = {}, t = Mt(), n = t ? Array.from({ length: t.length }, (r, o) => t.key(o)).filter(
    (r) => typeof r == "string"
  ) : Array.from(Ge.keys());
  for (const r of n) {
    if (!r.startsWith(Ce)) continue;
    const o = t ? t.getItem(r) : Ge.get(r) ?? null;
    o !== null && (e[r] = o);
  }
  return e;
}
function ua() {
  const e = Mt();
  if (e)
    for (const t of Object.keys(ii()))
      try {
        e.removeItem(Ce + t);
      } catch {
      }
  Ge.clear();
}
const ai = "https://framejs.app", ci = 1e4;
function fa(e) {
  for (let t = e; t; t = t.parentElement)
    if (t.payload != null) return t;
  return null;
}
const pa = "/gufe-dev-bundle.js";
function ha() {
  let e = "";
  for (const t of document.querySelectorAll("script[type=module]")) {
    const n = t.textContent || "";
    n.length > e.length && (e = n);
  }
  return e.length >= ci ? e : null;
}
async function ma() {
  const e = ha();
  if (e) return { js: e, note: "" };
  try {
    const t = await fetch(pa);
    if (!t.ok) return null;
    const n = await t.text();
    return n.length < ci ? null : {
      js: n,
      note: "Built from the last `pixi run build`, not from the sources on screen."
    };
  } catch {
    return null;
  }
}
function ga() {
  const e = new Uint8Array(16);
  crypto.getRandomValues(e);
  const t = Date.now();
  for (let n = 0; n < 6; n++) e[n] = Math.floor(t / 2 ** (40 - n * 8)) & 255;
  return e[6] = e[6] & 15 | 112, e[8] = e[8] & 63 | 128, Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function ya(e) {
  const t = [];
  return t.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(Ce)};`,
    `  const menuOpen = ${JSON.stringify(hi)};`,
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
    `globalThis[${JSON.stringify(si)}] = ${JSON.stringify(e.views)};`
  ), t.length ? [...t, ""] : t;
}
function $a(e, t, n) {
  const r = JSON.stringify(JSON.stringify(t));
  return [
    ...ya(n),
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
function va(e) {
  const t = {}, n = e.viewState?.();
  n != null && (t[e.tagName.toLowerCase().replace(/^gufe-/, "")] = n);
  const r = {};
  for (const [o, s] of Object.entries(da()))
    o.endsWith(hi) || (r[o] = s);
  return { settings: r, views: t };
}
const ba = (e) => `${ai}/j/${e}`, wa = (e) => `${ai}/j/${e}.json`;
async function _a(e, t, n) {
  await fetch(wa(e), {
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
function Sa(e) {
  if (!oi()) return;
  const t = j(
    "div",
    `display:flex;flex-direction:column;gap:${se.md};padding-top:${se.lg};border-top:1px dashed ${O.splitBorder};`
  );
  t.appendChild(
    j(
      "div",
      `font-size:${Y.tiny};font-weight:${Le.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
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
    l.href = i, l.target = "_blank", l.rel = "noreferrer", r.replaceChildren(l), a && r.appendChild(j("div", `padding-top:${se.sm};`, a)), r.style.color = O.textMuted2;
  };
  n.onclick = () => {
    const i = fa(e);
    if (!i || i.payload == null) {
      o("Could not find the payload for this view.", !0);
      return;
    }
    const a = i.payload, l = va(i), f = window.open("", "_blank"), h = ga(), g = a, $ = String(g.name || g.type || "gufe-viz"), y = () => {
      n.disabled = !1;
    };
    n.disabled = !0, o("Uploading..."), ma().then((S) => {
      if (!S) {
        f?.close(), y(), o(
          "No bundle to send: this page has none inlined, and the dev server did not answer either. Export the page with to_html, or run `pixi run build`.",
          !0
        );
        return;
      }
      return _a(h, $a(S.js, a, l), $).then(() => {
        y();
        const _ = ba(h);
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
const wt = (e) => e.toLocaleString("en-US"), mt = "-", vt = ye.base, Dn = Wi;
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
  const o = j("select", Dn);
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
function li(e, t, n, r = {}) {
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
  return n.style.cssText = `position:absolute;top:${se.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${se.md} ${se.xxl};border-radius:${ot.md};font-size:${Y.body};background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};`, e.appendChild(n), n;
}
function ue(e, t = !1) {
  return j(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Y.heading};color:${t ? Oe.error : Oe.faint};`,
    e
  );
}
function bt(e) {
  const t = j("div", Ji);
  return t.className = "gufe-header", t.titleEl = j(
    "span",
    `font-weight:${Le.bold};font-size:${Y.title};color:${Oe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = j(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Y.small};color:${Oe.muted};`
  ), t.textEl = j("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;"), t.toggleEl = j("div", "display:flex;align-items:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.textEl.appendChild(t.titleEl), t.textEl.appendChild(t.statsEl), t.appendChild(t.textEl), t;
}
function ke(e, t, n = !1) {
  const r = j("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    j(
      "span",
      `flex:0 0 128px;font-size:${Y.tiny};font-weight:${Le.bold};letter-spacing:.08em;text-transform:uppercase;color:${Oe.faint};`,
      e
    )
  );
  const o = j(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Oe.primary};` + (n ? `font-family:${Y.mono};font-size:${Y.small};` : `font-size:${Y.body};`),
    t
  );
  return o.title = t, r.appendChild(o), r;
}
function Ln(e) {
  return j(
    "span",
    `padding:1px 7px;border-radius:${ot.xl};font-size:${Y.tiny};font-weight:${Le.bold};letter-spacing:.04em;white-space:nowrap;background:${O.badgeBg};color:${O.badgeFg};`,
    e
  );
}
function Rr() {
  return j("div", Yi);
}
function di() {
  const e = j("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = j("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const ui = "data-gufe-hide-name";
function fi(e) {
  return !e.closest(`[${ui}]`);
}
function ka(e, t) {
  if (t(e.clientWidth), typeof ResizeObserver > "u") return () => {
  };
  const n = new ResizeObserver(() => t(e.clientWidth));
  return n.observe(e), () => n.disconnect();
}
const eo = { min: 0.2, max: 0.8 }, Ca = 5;
function pi(e, t, n, r = {}) {
  const o = r.min ?? eo.min, s = r.max ?? eo.max, i = j(
    "div",
    `flex:0 0 ${Ca}px;align-self:stretch;cursor:col-resize;touch-action:none;background:${O.splitBorder};`
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
  const h = (g) => {
    f && (f = !1, i.releasePointerCapture(g.pointerId), r.remember?.set(a), r.onResize?.(a));
  };
  return i.addEventListener("pointerup", h), i.addEventListener("pointercancel", h), i;
}
const Ea = !1, hi = ".menuOpen";
function xa() {
  const e = j("span", "display:inline-flex;width:14px;height:14px;");
  return e.innerHTML = '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false"><path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/><path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/><path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/></svg>', e;
}
const Pa = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: xa
}, Aa = Pa.openFreeEnergy;
function mi(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? Ea, o = !1;
  const s = j("div", "flex-shrink:0;"), i = j("button", `${ye.base}display:inline-flex;align-items:center;gap:${se.md};padding:${se.sm} ${se.lg};`);
  i.appendChild(Aa()), i.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !o && (o = !0, s.appendChild(t()), Sa(s)), s.style.display = r ? "" : "none", i.style.background = r ? ye.bgActive : ye.bg, i.setAttribute("aria-expanded", String(r));
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
function Ra(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, Xn = {}, je = {}, Xe = {}, Zn = {}, Qn = {}, er = {}, to;
function Fn() {
  return to || (to = 1, (function(e) {
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
    function h(v, d) {
      return d.emptyStr() ? v : v.emptyStr() ? d : i`${v}${d}`;
    }
    e.strConcat = h;
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
    function p(v) {
      return new r(v.toString());
    }
    e.regexpCode = p;
  })(er)), er;
}
var tr = {}, no;
function ro() {
  return no || (no = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Fn();
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
        var h, g;
        if (!((g = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || g === void 0) && g.has(f) || this._prefixes && !this._prefixes.has(f))
          throw new Error(`CodeGen: prefix "${f}" is not allowed in this scope`);
        return this._names[f] = { prefix: f, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(f, h) {
        super(h), this.prefix = f;
      }
      setValue(f, { property: h, itemIndex: g }) {
        this.value = f, this.scopePath = (0, t._)`.${new t.Name(h)}[${g}]`;
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
      value(f, h) {
        var g;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(f), { prefix: y } = $, S = (g = h.key) !== null && g !== void 0 ? g : h.ref;
        let _ = this._values[y];
        if (_) {
          const d = _.get(S);
          if (d)
            return d;
        } else
          _ = this._values[y] = /* @__PURE__ */ new Map();
        _.set(S, $);
        const p = this._scope[y] || (this._scope[y] = []), v = p.length;
        return p[v] = h.ref, $.setValue(h, { property: y, itemIndex: v }), $;
      }
      getValue(f, h) {
        const g = this._values[f];
        if (g)
          return g.get(h);
      }
      scopeRefs(f, h = this._values) {
        return this._reduceValues(h, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${f}${g.scopePath}`;
        });
      }
      scopeCode(f = this._values, h, g) {
        return this._reduceValues(f, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, h, g);
      }
      _reduceValues(f, h, g = {}, $) {
        let y = t.nil;
        for (const S in f) {
          const _ = f[S];
          if (!_)
            continue;
          const p = g[S] = g[S] || /* @__PURE__ */ new Map();
          _.forEach((v) => {
            if (p.has(v))
              return;
            p.set(v, r.Started);
            let d = h(v);
            if (d) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${m} ${v} = ${d};${this.opts._n}`;
            } else if (d = $?.(v))
              y = (0, t._)`${y}${d}${this.opts._n}`;
            else
              throw new n(v);
            p.set(v, r.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = a;
  })(tr)), tr;
}
var oo;
function ne() {
  return oo || (oo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Fn(), n = /* @__PURE__ */ ro();
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
    var o = /* @__PURE__ */ ro();
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
        const z = w ? n.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${z} ${this.name}${V};` + C;
      }
      optimizeNames(w, C) {
        if (w[this.name.str])
          return this.rhs && (this.rhs = G(this.rhs, w, C)), this;
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
          return this.rhs = G(this.rhs, w, C), this;
      }
      get names() {
        const w = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return I(w, this.rhs);
      }
    }
    class l extends a {
      constructor(w, C, z, V) {
        super(w, z, V), this.op = C;
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
        return this.code = G(this.code, w, C), this;
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
        let V = z.length;
        for (; V--; ) {
          const U = z[V];
          U.optimizeNames(w, C) || (ee(w, U.names), z.splice(V, 1));
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
    class p extends S {
    }
    p.kind = "else";
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
          C = this.else = Array.isArray(z) ? new p(z) : z;
        }
        if (C)
          return w === !1 ? C instanceof v ? C : C.nodes : this.nodes.length ? this : new v(W(w), C instanceof v ? [C] : C.nodes);
        if (!(w === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(w, C) {
        var z;
        if (this.else = (z = this.else) === null || z === void 0 ? void 0 : z.optimizeNames(w, C), !!(super.optimizeNames(w, C) || this.else))
          return this.condition = G(this.condition, w, C), this;
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
          return this.iteration = G(this.iteration, w, C), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class k extends d {
      constructor(w, C, z, V) {
        super(), this.varKind = w, this.name = C, this.from = z, this.to = V;
      }
      render(w) {
        const C = w.es5 ? n.varKinds.var : this.varKind, { name: z, from: V, to: U } = this;
        return `for(${C} ${z}=${V}; ${z}<${U}; ${z}++)` + super.render(w);
      }
      get names() {
        const w = I(super.names, this.from);
        return I(w, this.to);
      }
    }
    class c extends d {
      constructor(w, C, z, V) {
        super(), this.loop = w, this.varKind = C, this.name = z, this.iterable = V;
      }
      render(w) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
      }
      optimizeNames(w, C) {
        if (super.optimizeNames(w, C))
          return this.iterable = G(this.iterable, w, C), this;
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
        var z, V;
        return super.optimizeNames(w, C), (z = this.catch) === null || z === void 0 || z.optimizeNames(w, C), (V = this.finally) === null || V === void 0 || V.optimizeNames(w, C), this;
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
      _def(w, C, z, V) {
        const U = this._scope.toName(C);
        return z !== void 0 && V && (this._constants[U.str] = z), this._leafNode(new i(w, U, z)), U;
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
        for (const [z, V] of w)
          C.length > 1 && C.push(","), C.push(z), (z !== V || this.opts.es5) && (C.push(":"), (0, t.addCodeArg)(C, V));
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
        return this._elseNode(new p());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, p);
      }
      _for(w, C) {
        return this._blockNode(w), C && this.code(C).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(w, C) {
        return this._for(new m(w), C);
      }
      // `for` statement for a range of values
      forRange(w, C, z, V, U = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(w);
        return this._for(new k(U, Q, C, z), () => V(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(w, C, z, V = n.varKinds.const) {
        const U = this._scope.toName(w);
        if (this.opts.es5) {
          const Q = C instanceof t.Name ? C : this.var("_arr", C);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (Z) => {
            this.var(U, (0, t._)`${Q}[${Z}]`), z(U);
          });
        }
        return this._for(new c("of", V, U, C), () => z(U));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(w, C, z, V = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(w, (0, t._)`Object.keys(${C})`, z);
        const U = this._scope.toName(w);
        return this._for(new c("in", V, U, C), () => z(U));
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
        const C = new b();
        if (this._blockNode(C), this.code(w), C.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(b);
      }
      // `try` statement
      try(w, C, z) {
        if (!C && !z)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new x();
        if (this._blockNode(V), this.code(w), C) {
          const U = this.name("e");
          this._currNode = V.catch = new P(U), C(U);
        }
        return z && (this._currNode = V.finally = new T(), this.code(z)), this._endBlockNode(P, T);
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
      func(w, C = t.nil, z, V) {
        return this._blockNode(new u(w, C, z)), V && this.code(V).endFunc(), this;
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
    function G(M, w, C) {
      if (M instanceof t.Name)
        return z(M);
      if (!V(M))
        return M;
      return new t._Code(M._items.reduce((U, Q) => (Q instanceof t.Name && (Q = z(Q)), Q instanceof t._Code ? U.push(...Q._items) : U.push(Q), U), []));
      function z(U) {
        const Q = C[U.str];
        return Q === void 0 || w[U.str] !== 1 ? U : (delete w[U.str], Q);
      }
      function V(U) {
        return U instanceof t._Code && U._items.some((Q) => Q instanceof t.Name && w[Q.str] === 1 && C[Q.str] !== void 0);
      }
    }
    function ee(M, w) {
      for (const C in w)
        M[C] = (M[C] || 0) - (w[C] || 0);
    }
    function W(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${D(M)}`;
    }
    e.not = W;
    const ae = R(e.operators.AND);
    function X(...M) {
      return M.reduce(ae);
    }
    e.and = X;
    const H = R(e.operators.OR);
    function q(...M) {
      return M.reduce(H);
    }
    e.or = q;
    function R(M) {
      return (w, C) => w === t.nil ? C : C === t.nil ? w : (0, t._)`${D(w)} ${M} ${D(C)}`;
    }
    function D(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  })(Qn)), Qn;
}
var oe = {}, so;
function ie() {
  if (so) return oe;
  so = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.checkStrictMode = oe.getErrorPath = oe.Type = oe.useFunc = oe.setEvaluated = oe.evaluatedPropsToName = oe.mergeEvaluated = oe.eachItem = oe.unescapeJsonPointer = oe.escapeJsonPointer = oe.escapeFragment = oe.unescapeFragment = oe.schemaRefOrVal = oe.schemaHasRulesButRef = oe.schemaHasRules = oe.checkUnknownRules = oe.alwaysValidSchema = oe.toHash = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Fn();
  function n(c) {
    const u = {};
    for (const b of c)
      u[b] = !0;
    return u;
  }
  oe.toHash = n;
  function r(c, u) {
    return typeof u == "boolean" ? u : Object.keys(u).length === 0 ? !0 : (o(c, u), !s(u, c.self.RULES.all));
  }
  oe.alwaysValidSchema = r;
  function o(c, u = c.schema) {
    const { opts: b, self: x } = c;
    if (!b.strictSchema || typeof u == "boolean")
      return;
    const P = x.RULES.keywords;
    for (const T in u)
      P[T] || k(c, `unknown keyword: "${T}"`);
  }
  oe.checkUnknownRules = o;
  function s(c, u) {
    if (typeof c == "boolean")
      return !c;
    for (const b in c)
      if (u[b])
        return !0;
    return !1;
  }
  oe.schemaHasRules = s;
  function i(c, u) {
    if (typeof c == "boolean")
      return !c;
    for (const b in c)
      if (b !== "$ref" && u.all[b])
        return !0;
    return !1;
  }
  oe.schemaHasRulesButRef = i;
  function a({ topSchemaRef: c, schemaPath: u }, b, x, P) {
    if (!P) {
      if (typeof b == "number" || typeof b == "boolean")
        return b;
      if (typeof b == "string")
        return (0, e._)`${b}`;
    }
    return (0, e._)`${c}${u}${(0, e.getProperty)(x)}`;
  }
  oe.schemaRefOrVal = a;
  function l(c) {
    return g(decodeURIComponent(c));
  }
  oe.unescapeFragment = l;
  function f(c) {
    return encodeURIComponent(h(c));
  }
  oe.escapeFragment = f;
  function h(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  oe.escapeJsonPointer = h;
  function g(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  oe.unescapeJsonPointer = g;
  function $(c, u) {
    if (Array.isArray(c))
      for (const b of c)
        u(b);
    else
      u(c);
  }
  oe.eachItem = $;
  function y({ mergeNames: c, mergeToName: u, mergeValues: b, resultToName: x }) {
    return (P, T, F, A) => {
      const I = F === void 0 ? T : F instanceof e.Name ? (T instanceof e.Name ? c(P, T, F) : u(P, T, F), F) : T instanceof e.Name ? (u(P, F, T), T) : b(T, F);
      return A === e.Name && !(I instanceof e.Name) ? x(P, I) : I;
    };
  }
  oe.mergeEvaluated = {
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
  oe.evaluatedPropsToName = S;
  function _(c, u, b) {
    Object.keys(b).forEach((x) => c.assign((0, e._)`${u}${(0, e.getProperty)(x)}`, !0));
  }
  oe.setEvaluated = _;
  const p = {};
  function v(c, u) {
    return c.scopeValue("func", {
      ref: u,
      code: p[u.code] || (p[u.code] = new t._Code(u.code))
    });
  }
  oe.useFunc = v;
  var d;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(d || (oe.Type = d = {}));
  function m(c, u, b) {
    if (c instanceof e.Name) {
      const x = u === d.Num;
      return b ? x ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : x ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return b ? (0, e.getProperty)(c).toString() : "/" + h(c);
  }
  oe.getErrorPath = m;
  function k(c, u, b = c.opts.strictSchema) {
    if (b) {
      if (u = `strict mode: ${u}`, b === !0)
        throw new Error(u);
      c.self.logger.warn(u);
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
var ao;
function Bn() {
  return ao || (ao = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Ne();
    e.keywordError = {
      message: ({ keyword: p }) => (0, t.str)`must pass "${p}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: p, schemaType: v }) => v ? (0, t.str)`"${p}" keyword must be ${v} ($data)` : (0, t.str)`"${p}" keyword is invalid ($data)`
    };
    function o(p, v = e.keywordError, d, m) {
      const { it: k } = p, { gen: c, compositeRule: u, allErrors: b } = k, x = g(p, v, d);
      m ?? (u || b) ? l(c, x) : f(k, (0, t._)`[${x}]`);
    }
    e.reportError = o;
    function s(p, v = e.keywordError, d) {
      const { it: m } = p, { gen: k, compositeRule: c, allErrors: u } = m, b = g(p, v, d);
      l(k, b), c || u || f(m, r.default.vErrors);
    }
    e.reportExtraError = s;
    function i(p, v) {
      p.assign(r.default.errors, v), p.if((0, t._)`${r.default.vErrors} !== null`, () => p.if(v, () => p.assign((0, t._)`${r.default.vErrors}.length`, v), () => p.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function a({ gen: p, keyword: v, schemaValue: d, data: m, errsCount: k, it: c }) {
      if (k === void 0)
        throw new Error("ajv implementation error");
      const u = p.name("err");
      p.forRange("i", k, r.default.errors, (b) => {
        p.const(u, (0, t._)`${r.default.vErrors}[${b}]`), p.if((0, t._)`${u}.instancePath === undefined`, () => p.assign((0, t._)`${u}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), p.assign((0, t._)`${u}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${v}`), c.opts.verbose && (p.assign((0, t._)`${u}.schema`, d), p.assign((0, t._)`${u}.data`, m));
      });
    }
    e.extendErrors = a;
    function l(p, v) {
      const d = p.const("err", v);
      p.if((0, t._)`${r.default.vErrors} === null`, () => p.assign(r.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${r.default.vErrors}.push(${d})`), p.code((0, t._)`${r.default.errors}++`);
    }
    function f(p, v) {
      const { gen: d, validateName: m, schemaEnv: k } = p;
      k.$async ? d.throw((0, t._)`new ${p.ValidationError}(${v})`) : (d.assign((0, t._)`${m}.errors`, v), d.return(!1));
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
    function g(p, v, d) {
      const { createErrors: m } = p.it;
      return m === !1 ? (0, t._)`{}` : $(p, v, d);
    }
    function $(p, v, d = {}) {
      const { gen: m, it: k } = p, c = [
        y(k, d),
        S(p, d)
      ];
      return _(p, v, c), m.object(...c);
    }
    function y({ errorPath: p }, { instancePath: v }) {
      const d = v ? (0, t.str)`${p}${(0, n.getErrorPath)(v, n.Type.Str)}` : p;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, d)];
    }
    function S({ keyword: p, it: { errSchemaPath: v } }, { schemaPath: d, parentSchema: m }) {
      let k = m ? v : (0, t.str)`${v}/${p}`;
      return d && (k = (0, t.str)`${k}${(0, n.getErrorPath)(d, n.Type.Str)}`), [h.schemaPath, k];
    }
    function _(p, { params: v, message: d }, m) {
      const { keyword: k, data: c, schemaValue: u, it: b } = p, { opts: x, propertyName: P, topSchemaRef: T, schemaPath: F } = b;
      m.push([h.keyword, k], [h.params, typeof v == "function" ? v(p) : v || (0, t._)`{}`]), x.messages && m.push([h.message, typeof d == "function" ? d(p) : d]), x.verbose && m.push([h.schema, u], [h.parentSchema, (0, t._)`${T}${F}`], [r.default.data, c]), P && m.push([h.propertyName, P]);
    }
  })(Zn)), Zn;
}
var co;
function Na() {
  if (co) return Xe;
  co = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.boolOrEmptySchema = Xe.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Bn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: l, schema: f, validateName: h } = a;
    f === !1 ? i(a, !1) : typeof f == "object" && f.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${h}.errors`, null), l.return(!0));
  }
  Xe.topBoolOrEmptySchema = o;
  function s(a, l) {
    const { gen: f, schema: h } = a;
    h === !1 ? (f.var(l, !1), i(a)) : f.var(l, !0);
  }
  Xe.boolOrEmptySchema = s;
  function i(a, l) {
    const { gen: f, data: h } = a, g = {
      gen: f,
      keyword: "false schema",
      data: h,
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
var ge = {}, Ze = {}, lo;
function gi() {
  if (lo) return Ze;
  lo = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.getRules = Ze.isJSONType = void 0;
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
var ze = {}, uo;
function yi() {
  if (uo) return ze;
  uo = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.shouldUseRule = ze.shouldUseGroup = ze.schemaHasRulesForType = void 0;
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
var fo;
function jn() {
  if (fo) return ge;
  fo = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ gi(), t = /* @__PURE__ */ yi(), n = /* @__PURE__ */ Bn(), r = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ie();
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
    const { gen: k, data: c, opts: u } = d, b = h(m, u.coerceTypes), x = m.length > 0 && !(b.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(d, m[0]));
    if (x) {
      const P = S(m, c, u.strictNumbers, s.Wrong);
      k.if(P, () => {
        b.length ? g(d, m, b) : p(d);
      });
    }
    return x;
  }
  ge.coerceAndCheckDataType = l;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(d, m) {
    return m ? d.filter((k) => f.has(k) || m === "array" && k === "array") : [];
  }
  function g(d, m, k) {
    const { gen: c, data: u, opts: b } = d, x = c.let("dataType", (0, r._)`typeof ${u}`), P = c.let("coerced", (0, r._)`undefined`);
    b.coerceTypes === "array" && c.if((0, r._)`${x} == 'object' && Array.isArray(${u}) && ${u}.length == 1`, () => c.assign(u, (0, r._)`${u}[0]`).assign(x, (0, r._)`typeof ${u}`).if(S(m, u, b.strictNumbers), () => c.assign(P, u))), c.if((0, r._)`${P} !== undefined`);
    for (const F of k)
      (f.has(F) || F === "array" && b.coerceTypes === "array") && T(F);
    c.else(), p(d), c.endIf(), c.if((0, r._)`${P} !== undefined`, () => {
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
  function p(d) {
    const m = v(d);
    (0, n.reportError)(m, _);
  }
  ge.reportTypeError = p;
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
var _t = {}, po;
function Ma() {
  if (po) return _t;
  po = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.assignDefaults = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie();
  function n(o, s) {
    const { properties: i, items: a } = o.schema;
    if (s === "object" && i)
      for (const l in i)
        r(o, l, i[l].default);
    else s === "array" && Array.isArray(a) && a.forEach((l, f) => r(o, f, l.default));
  }
  _t.assignDefaults = n;
  function r(o, s, i) {
    const { gen: a, compositeRule: l, data: f, opts: h } = o;
    if (i === void 0)
      return;
    const g = (0, e._)`${f}${(0, e.getProperty)(s)}`;
    if (l) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let $ = (0, e._)`${g} === undefined`;
    h.useDefaults === "empty" && ($ = (0, e._)`${$} || ${g} === null || ${g} === ""`), a.if($, (0, e._)`${g} = ${(0, e.stringify)(i)}`);
  }
  return _t;
}
var xe = {}, le = {}, ho;
function Me() {
  if (ho) return le;
  ho = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.validateUnion = le.validateArray = le.usePattern = le.callValidateCode = le.schemaProperties = le.allSchemaProperties = le.noPropertyInData = le.propertyInData = le.isOwnProperty = le.hasPropFunc = le.reportMissingProp = le.checkMissingProp = le.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ ie();
  function o(d, m) {
    const { gen: k, data: c, it: u } = d;
    k.if(h(k, c, m, u.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${m}` }, !0), d.error();
    });
  }
  le.checkReportMissingProp = o;
  function s({ gen: d, data: m, it: { opts: k } }, c, u) {
    return (0, e.or)(...c.map((b) => (0, e.and)(h(d, m, b, k.ownProperties), (0, e._)`${u} = ${b}`)));
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
  function l(d, m, k) {
    return (0, e._)`${a(d)}.call(${m}, ${k})`;
  }
  le.isOwnProperty = l;
  function f(d, m, k, c) {
    const u = (0, e._)`${m}${(0, e.getProperty)(k)} !== undefined`;
    return c ? (0, e._)`${u} && ${l(d, m, k)}` : u;
  }
  le.propertyInData = f;
  function h(d, m, k, c) {
    const u = (0, e._)`${m}${(0, e.getProperty)(k)} === undefined`;
    return c ? (0, e.or)(u, (0, e.not)(l(d, m, k))) : u;
  }
  le.noPropertyInData = h;
  function g(d) {
    return d ? Object.keys(d).filter((m) => m !== "__proto__") : [];
  }
  le.allSchemaProperties = g;
  function $(d, m) {
    return g(m).filter((k) => !(0, t.alwaysValidSchema)(d, m[k]));
  }
  le.schemaProperties = $;
  function y({ schemaCode: d, data: m, it: { gen: k, topSchemaRef: c, schemaPath: u, errorPath: b }, it: x }, P, T, F) {
    const A = F ? (0, e._)`${d}, ${m}, ${c}${u}` : m, I = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, b)],
      [n.default.parentData, x.parentData],
      [n.default.parentDataProperty, x.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    x.opts.dynamicRef && I.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const G = (0, e._)`${A}, ${k.object(...I)}`;
    return T !== e.nil ? (0, e._)`${P}.call(${T}, ${G})` : (0, e._)`${P}(${G})`;
  }
  le.callValidateCode = y;
  const S = (0, e._)`new RegExp`;
  function _({ gen: d, it: { opts: m } }, k) {
    const c = m.unicodeRegExp ? "u" : "", { regExp: u } = m.code, b = u(k, c);
    return d.scopeValue("pattern", {
      key: b.toString(),
      ref: b,
      code: (0, e._)`${u.code === "new RegExp" ? S : (0, r.useFunc)(d, u)}(${k}, ${c})`
    });
  }
  le.usePattern = _;
  function p(d) {
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
  le.validateArray = p;
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
  return le.validateUnion = v, le;
}
var mo;
function Oa() {
  if (mo) return xe;
  mo = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.validateKeywordUsage = xe.validSchemaType = xe.funcKeywordCode = xe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ Bn();
  function o($, y) {
    const { gen: S, keyword: _, schema: p, parentSchema: v, it: d } = $, m = y.macro.call(d.self, p, v, d), k = f(S, _, m);
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
  xe.macroKeywordCode = o;
  function s($, y) {
    var S;
    const { gen: _, keyword: p, schema: v, parentSchema: d, $data: m, it: k } = $;
    l(k, y);
    const c = !m && y.compile ? y.compile.call(k.self, v, d, k) : y.validate, u = f(_, p, c), b = _.let("valid");
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
      return _.try(() => F((0, e._)`await `), (G) => _.assign(b, !1).if((0, e._)`${G} instanceof ${k.ValidationError}`, () => _.assign(I, (0, e._)`${G}.errors`), () => _.throw(G))), I;
    }
    function T() {
      const I = (0, e._)`${u}.errors`;
      return _.assign(I, null), F(e.nil), I;
    }
    function F(I = y.async ? (0, e._)`await ` : e.nil) {
      const G = k.opts.passContext ? t.default.this : t.default.self, ee = !("compile" in y && !m || y.schema === !1);
      _.assign(b, (0, e._)`${I}${(0, n.callValidateCode)($, u, G, ee)}`, y.modifying);
    }
    function A(I) {
      var G;
      _.if((0, e.not)((G = y.valid) !== null && G !== void 0 ? G : b), I);
    }
  }
  xe.funcKeywordCode = s;
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
  function h($, y, S = !1) {
    return !y.length || y.some((_) => _ === "array" ? Array.isArray($) : _ === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == _ || S && typeof $ > "u");
  }
  xe.validSchemaType = h;
  function g({ schema: $, opts: y, self: S, errSchemaPath: _ }, p, v) {
    if (Array.isArray(p.keyword) ? !p.keyword.includes(v) : p.keyword !== v)
      throw new Error("ajv implementation error");
    const d = p.dependencies;
    if (d?.some((m) => !Object.prototype.hasOwnProperty.call($, m)))
      throw new Error(`parent schema must have dependencies of ${v}: ${d.join(",")}`);
    if (p.validateSchema && !p.validateSchema($[v])) {
      const k = `keyword "${v}" value is invalid at path "${_}": ` + S.errorsText(p.validateSchema.errors);
      if (y.validateSchema === "log")
        S.logger.error(k);
      else
        throw new Error(k);
    }
  }
  return xe.validateKeywordUsage = g, xe;
}
var Ie = {}, go;
function Ta() {
  if (go) return Ie;
  go = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.extendSubschemaMode = Ie.extendSubschemaData = Ie.getSubschema = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie();
  function n(s, { keyword: i, schemaProp: a, schema: l, schemaPath: f, errSchemaPath: h, topSchemaRef: g }) {
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
      if (f === void 0 || h === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: f,
        topSchemaRef: g,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ie.getSubschema = n;
  function r(s, i, { dataProp: a, dataPropType: l, data: f, dataTypes: h, propertyName: g }) {
    if (f !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = i;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: _, opts: p } = i, v = $.let("data", (0, e._)`${i.data}${(0, e.getProperty)(a)}`, !0);
      y(v), s.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, l, p.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${a}`, s.dataPathArr = [..._, s.parentDataProperty];
    }
    if (f !== void 0) {
      const S = f instanceof e.Name ? f : $.let("data", f, !0);
      y(S), g !== void 0 && (s.propertyName = g);
    }
    h && (s.dataTypes = h);
    function y(S) {
      s.data = S, s.dataLevel = i.dataLevel + 1, s.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), s.parentData = i.data, s.dataNames = [...i.dataNames, S];
    }
  }
  Ie.extendSubschemaData = r;
  function o(s, { jtdDiscriminator: i, jtdMetadata: a, compositeRule: l, createErrors: f, allErrors: h }) {
    l !== void 0 && (s.compositeRule = l), f !== void 0 && (s.createErrors = f), h !== void 0 && (s.allErrors = h), s.jtdDiscriminator = i, s.jtdMetadata = a;
  }
  return Ie.extendSubschemaMode = o, Ie;
}
var be = {}, nr, yo;
function $i() {
  return yo || (yo = 1, nr = function e(t, n) {
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
  }), nr;
}
var rr = { exports: {} }, $o;
function Fa() {
  if ($o) return rr.exports;
  $o = 1;
  var e = rr.exports = function(r, o, s) {
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
  function t(r, o, s, i, a, l, f, h, g, $) {
    if (i && typeof i == "object" && !Array.isArray(i)) {
      o(i, a, l, f, h, g, $);
      for (var y in i) {
        var S = i[y];
        if (Array.isArray(S)) {
          if (y in e.arrayKeywords)
            for (var _ = 0; _ < S.length; _++)
              t(r, o, s, S[_], a + "/" + y + "/" + _, l, a, y, i, _);
        } else if (y in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var p in S)
              t(r, o, s, S[p], a + "/" + y + "/" + n(p), l, a, y, i, p);
        } else (y in e.keywords || r.allKeys && !(y in e.skipKeywords)) && t(r, o, s, S, a + "/" + y, l, a, y, i);
      }
      s(i, a, l, f, h, g, $);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return rr.exports;
}
var vo;
function Un() {
  if (vo) return be;
  vo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = $i(), n = Fa(), r = /* @__PURE__ */ new Set([
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
  be.inlineRef = o;
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
      const v = _[p];
      if (Array.isArray(v) && v.some(i) || typeof v == "object" && i(v))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let p = 0;
    for (const v in _) {
      if (v === "$ref")
        return 1 / 0;
      if (p++, !r.has(v) && (typeof _[v] == "object" && (0, e.eachItem)(_[v], (d) => p += a(d)), p === 1 / 0))
        return 1 / 0;
    }
    return p;
  }
  function l(_, p = "", v) {
    v !== !1 && (p = g(p));
    const d = _.parse(p);
    return f(_, d);
  }
  be.getFullPath = l;
  function f(_, p) {
    return _.serialize(p).split("#")[0] + "#";
  }
  be._getFullPath = f;
  const h = /#\/?$/;
  function g(_) {
    return _ ? _.replace(h, "") : "";
  }
  be.normalizeId = g;
  function $(_, p, v) {
    return v = g(v), _.resolve(p, v);
  }
  be.resolveUrl = $;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function S(_, p) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: v, uriResolver: d } = this.opts, m = g(_[v] || p), k = { "": m }, c = l(d, m, !1), u = {}, b = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (T, F, A, I) => {
      if (I === void 0)
        return;
      const G = c + F;
      let ee = k[I];
      typeof T[v] == "string" && (ee = W.call(this, T[v])), ae.call(this, T.$anchor), ae.call(this, T.$dynamicAnchor), k[F] = ee;
      function W(X) {
        const H = this.opts.uriResolver.resolve;
        if (X = g(ee ? H(ee, X) : X), b.has(X))
          throw P(X);
        b.add(X);
        let q = this.refs[X];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? x(T, q.schema, X) : X !== g(G) && (X[0] === "#" ? (x(T, u[X], X), u[X] = T) : this.refs[X] = G), X;
      }
      function ae(X) {
        if (typeof X == "string") {
          if (!y.test(X))
            throw new Error(`invalid anchor "${X}"`);
          W.call(this, `#${X}`);
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
  return be.getSchemaRefs = S, be;
}
var bo;
function Kn() {
  if (bo) return je;
  bo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getData = je.KeywordCxt = je.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Na(), t = /* @__PURE__ */ jn(), n = /* @__PURE__ */ yi(), r = /* @__PURE__ */ jn(), o = /* @__PURE__ */ Ma(), s = /* @__PURE__ */ Oa(), i = /* @__PURE__ */ Ta(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ Ne(), f = /* @__PURE__ */ Un(), h = /* @__PURE__ */ ie(), g = /* @__PURE__ */ Bn();
  function $(E) {
    if (c(E) && (b(E), k(E))) {
      p(E);
      return;
    }
    y(E, () => (0, e.topBoolOrEmptySchema)(E));
  }
  je.validateFunctionCode = $;
  function y({ gen: E, validateName: N, schema: B, schemaEnv: K, opts: J }, te) {
    J.code.es5 ? E.func(N, (0, a._)`${l.default.data}, ${l.default.valCxt}`, K.$async, () => {
      E.code((0, a._)`"use strict"; ${d(B, J)}`), _(E, J), E.code(te);
    }) : E.func(N, (0, a._)`${l.default.data}, ${S(J)}`, K.$async, () => E.code(d(B, J)).code(te));
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
  function p(E) {
    const { schema: N, opts: B, gen: K } = E;
    y(E, () => {
      B.$comment && N.$comment && I(E), T(E), K.let(l.default.vErrors, null), K.let(l.default.errors, 0), B.unevaluated && v(E), x(E), G(E);
    });
  }
  function v(E) {
    const { gen: N, validateName: B } = E;
    E.evaluated = N.const("evaluated", (0, a._)`${B}.evaluated`), N.if((0, a._)`${E.evaluated}.dynamicProps`, () => N.assign((0, a._)`${E.evaluated}.props`, (0, a._)`undefined`)), N.if((0, a._)`${E.evaluated}.dynamicItems`, () => N.assign((0, a._)`${E.evaluated}.items`, (0, a._)`undefined`));
  }
  function d(E, N) {
    const B = typeof E == "object" && E[N.schemaId];
    return B && (N.code.source || N.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
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
    for (const B in E)
      if (N.RULES.all[B])
        return !0;
    return !1;
  }
  function c(E) {
    return typeof E.schema != "boolean";
  }
  function u(E, N) {
    const { schema: B, gen: K, opts: J } = E;
    J.$comment && B.$comment && I(E), F(E), A(E);
    const te = K.const("_errs", l.default.errors);
    x(E, te), K.var(N, (0, a._)`${te} === ${l.default.errors}`);
  }
  function b(E) {
    (0, h.checkUnknownRules)(E), P(E);
  }
  function x(E, N) {
    if (E.opts.jtd)
      return W(E, [], !1, N);
    const B = (0, t.getSchemaTypes)(E.schema), K = (0, t.coerceAndCheckDataType)(E, B);
    W(E, B, !K, N);
  }
  function P(E) {
    const { schema: N, errSchemaPath: B, opts: K, self: J } = E;
    N.$ref && K.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(N, J.RULES) && J.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function T(E) {
    const { schema: N, opts: B } = E;
    N.default !== void 0 && B.useDefaults && B.strictSchema && (0, h.checkStrictMode)(E, "default is ignored in the schema root");
  }
  function F(E) {
    const N = E.schema[E.opts.schemaId];
    N && (E.baseId = (0, f.resolveUrl)(E.opts.uriResolver, E.baseId, N));
  }
  function A(E) {
    if (E.schema.$async && !E.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function I({ gen: E, schemaEnv: N, schema: B, errSchemaPath: K, opts: J }) {
    const te = B.$comment;
    if (J.$comment === !0)
      E.code((0, a._)`${l.default.self}.logger.log(${te})`);
    else if (typeof J.$comment == "function") {
      const re = (0, a.str)`${K}/$comment`, fe = E.scopeValue("root", { ref: N.root });
      E.code((0, a._)`${l.default.self}.opts.$comment(${te}, ${re}, ${fe}.schema)`);
    }
  }
  function G(E) {
    const { gen: N, schemaEnv: B, validateName: K, ValidationError: J, opts: te } = E;
    B.$async ? N.if((0, a._)`${l.default.errors} === 0`, () => N.return(l.default.data), () => N.throw((0, a._)`new ${J}(${l.default.vErrors})`)) : (N.assign((0, a._)`${K}.errors`, l.default.vErrors), te.unevaluated && ee(E), N.return((0, a._)`${l.default.errors} === 0`));
  }
  function ee({ gen: E, evaluated: N, props: B, items: K }) {
    B instanceof a.Name && E.assign((0, a._)`${N}.props`, B), K instanceof a.Name && E.assign((0, a._)`${N}.items`, K);
  }
  function W(E, N, B, K) {
    const { gen: J, schema: te, data: re, allErrors: fe, opts: de, self: me } = E, { RULES: pe } = me;
    if (te.$ref && (de.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(te, pe))) {
      J.block(() => V(E, "$ref", pe.all.$ref.definition));
      return;
    }
    de.jtd || X(E, N), J.block(() => {
      for (const ve of pe.rules)
        Te(ve);
      Te(pe.post);
    });
    function Te(ve) {
      (0, n.shouldUseGroup)(te, ve) && (ve.type ? (J.if((0, r.checkDataType)(ve.type, re, de.strictNumbers)), ae(E, ve), N.length === 1 && N[0] === ve.type && B && (J.else(), (0, r.reportTypeError)(E)), J.endIf()) : ae(E, ve), fe || J.if((0, a._)`${l.default.errors} === ${K || 0}`));
    }
  }
  function ae(E, N) {
    const { gen: B, schema: K, opts: { useDefaults: J } } = E;
    J && (0, o.assignDefaults)(E, N.type), B.block(() => {
      for (const te of N.rules)
        (0, n.shouldUseRule)(K, te) && V(E, te.keyword, te.definition, N.type);
    });
  }
  function X(E, N) {
    E.schemaEnv.meta || !E.opts.strictTypes || (H(E, N), E.opts.allowUnionTypes || q(E, N), R(E, E.dataTypes));
  }
  function H(E, N) {
    if (N.length) {
      if (!E.dataTypes.length) {
        E.dataTypes = N;
        return;
      }
      N.forEach((B) => {
        M(E.dataTypes, B) || C(E, `type "${B}" not allowed by context "${E.dataTypes.join(",")}"`);
      }), w(E, N);
    }
  }
  function q(E, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && C(E, "use allowUnionTypes to allow union type keyword");
  }
  function R(E, N) {
    const B = E.self.RULES.all;
    for (const K in B) {
      const J = B[K];
      if (typeof J == "object" && (0, n.shouldUseRule)(E.schema, J)) {
        const { type: te } = J.definition;
        te.length && !te.some((re) => D(N, re)) && C(E, `missing type "${te.join(",")}" for keyword "${K}"`);
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
    const B = [];
    for (const K of E.dataTypes)
      M(N, K) ? B.push(K) : N.includes("integer") && K === "number" && B.push("integer");
    E.dataTypes = B;
  }
  function C(E, N) {
    const B = E.schemaEnv.baseId + E.errSchemaPath;
    N += ` at "${B}" (strictTypes)`, (0, h.checkStrictMode)(E, N, E.opts.strictTypes);
  }
  class z {
    constructor(N, B, K) {
      if ((0, s.validateKeywordUsage)(N, B, K), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = K, this.data = N.data, this.schema = N.schema[K], this.$data = B.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(N, this.schema, K, this.$data), this.schemaType = B.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = B, this.$data)
        this.schemaCode = N.gen.const("vSchema", Z(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = N.gen.const("_errs", l.default.errors));
    }
    result(N, B, K) {
      this.failResult((0, a.not)(N), B, K);
    }
    failResult(N, B, K) {
      this.gen.if(N), K ? K() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
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
    error(N, B, K) {
      if (B) {
        this.setParams(B), this._error(N, K), this.setParams({});
        return;
      }
      this._error(N, K);
    }
    _error(N, B) {
      (N ? g.reportExtraError : g.reportError)(this, this.def.error, B);
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
    setParams(N, B) {
      B ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, B, K = a.nil) {
      this.gen.block(() => {
        this.check$data(N, K), B();
      });
    }
    check$data(N = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: J, schemaType: te, def: re } = this;
      K.if((0, a.or)((0, a._)`${J} === undefined`, B)), N !== a.nil && K.assign(N, !0), (te.length || re.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), N !== a.nil && K.assign(N, !1)), K.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: B, schemaType: K, def: J, it: te } = this;
      return (0, a.or)(re(), fe());
      function re() {
        if (K.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const de = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, r.checkDataTypes)(de, B, te.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function fe() {
        if (J.validateSchema) {
          const de = N.scopeValue("validate$data", { ref: J.validateSchema });
          return (0, a._)`!${de}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(N, B) {
      const K = (0, i.getSubschema)(this.it, N);
      (0, i.extendSubschemaData)(K, this.it, N), (0, i.extendSubschemaMode)(K, N);
      const J = { ...this.it, ...K, items: void 0, props: void 0 };
      return m(J, B), J;
    }
    mergeEvaluated(N, B) {
      const { it: K, gen: J } = this;
      K.opts.unevaluated && (K.props !== !0 && N.props !== void 0 && (K.props = h.mergeEvaluated.props(J, N.props, K.props, B)), K.items !== !0 && N.items !== void 0 && (K.items = h.mergeEvaluated.items(J, N.items, K.items, B)));
    }
    mergeValidEvaluated(N, B) {
      const { it: K, gen: J } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return J.if(B, () => this.mergeEvaluated(N, a.Name)), !0;
    }
  }
  je.KeywordCxt = z;
  function V(E, N, B, K) {
    const J = new z(E, B, N);
    "code" in B ? B.code(J, K) : J.$data && B.validate ? (0, s.funcKeywordCode)(J, B) : "macro" in B ? (0, s.macroKeywordCode)(J, B) : (B.compile || B.validate) && (0, s.funcKeywordCode)(J, B);
  }
  const U = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(E, { dataLevel: N, dataNames: B, dataPathArr: K }) {
    let J, te;
    if (E === "")
      return l.default.rootData;
    if (E[0] === "/") {
      if (!U.test(E))
        throw new Error(`Invalid JSON-pointer: ${E}`);
      J = E, te = l.default.rootData;
    } else {
      const me = Q.exec(E);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${E}`);
      const pe = +me[1];
      if (J = me[2], J === "#") {
        if (pe >= N)
          throw new Error(de("property/index", pe));
        return K[N - pe];
      }
      if (pe > N)
        throw new Error(de("data", pe));
      if (te = B[N - pe], !J)
        return te;
    }
    let re = te;
    const fe = J.split("/");
    for (const me of fe)
      me && (te = (0, a._)`${te}${(0, a.getProperty)((0, h.unescapeJsonPointer)(me))}`, re = (0, a._)`${re} && ${te}`);
    return re;
    function de(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${N}`;
    }
  }
  return je.getData = Z, je;
}
var zt = {}, wo;
function Nr() {
  if (wo) return zt;
  wo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return zt.default = e, zt;
}
var It = {}, _o;
function Hn() {
  if (_o) return It;
  _o = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Un();
  class t extends Error {
    constructor(r, o, s, i) {
      super(i || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return It.default = t, It;
}
var we = {}, So;
function Gn() {
  if (So) return we;
  So = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.resolveSchema = we.getCompilingSchema = we.resolveRef = we.compileSchema = we.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Nr(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ Un(), o = /* @__PURE__ */ ie(), s = /* @__PURE__ */ Kn();
  class i {
    constructor(v) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof v.schema == "object" && (m = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (d = v.baseId) !== null && d !== void 0 ? d : (0, r.normalizeId)(m?.[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  we.SchemaEnv = i;
  function a(p) {
    const v = h.call(this, p);
    if (v)
      return v;
    const d = (0, r.getFullPath)(this.opts.uriResolver, p.root.baseId), { es5: m, lines: k } = this.opts.code, { ownProperties: c } = this.opts, u = new e.CodeGen(this.scope, { es5: m, lines: k, ownProperties: c });
    let b;
    p.$async && (b = u.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = u.scopeName("validate");
    p.validateName = x;
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
      topSchemaRef: u.scopeValue("schema", this.opts.code.source === !0 ? { ref: p.schema, code: (0, e.stringify)(p.schema) } : { ref: p.schema }),
      validateName: x,
      ValidationError: b,
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
      this._compilations.add(p), (0, s.validateFunctionCode)(P), u.optimize(this.opts.code.optimize);
      const F = u.toString();
      T = `${u.scopeRefs(n.default.scope)}return ${F}`, this.opts.code.process && (T = this.opts.code.process(T, p));
      const I = new Function(`${n.default.self}`, `${n.default.scope}`, T)(this, this.scope.get());
      if (this.scope.value(x, { ref: I }), I.errors = null, I.schema = p.schema, I.schemaEnv = p, p.$async && (I.$async = !0), this.opts.code.source === !0 && (I.source = { validateName: x, validateCode: F, scopeValues: u._values }), this.opts.unevaluated) {
        const { props: G, items: ee } = P;
        I.evaluated = {
          props: G instanceof e.Name ? void 0 : G,
          items: ee instanceof e.Name ? void 0 : ee,
          dynamicProps: G instanceof e.Name,
          dynamicItems: ee instanceof e.Name
        }, I.source && (I.source.evaluated = (0, e.stringify)(I.evaluated));
      }
      return p.validate = I, p;
    } catch (F) {
      throw delete p.validate, delete p.validateName, T && this.logger.error("Error compiling schema, function code:", T), F;
    } finally {
      this._compilations.delete(p);
    }
  }
  we.compileSchema = a;
  function l(p, v, d) {
    var m;
    d = (0, r.resolveUrl)(this.opts.uriResolver, v, d);
    const k = p.refs[d];
    if (k)
      return k;
    let c = $.call(this, p, d);
    if (c === void 0) {
      const u = (m = p.localRefs) === null || m === void 0 ? void 0 : m[d], { schemaId: b } = this.opts;
      u && (c = new i({ schema: u, schemaId: b, root: p, baseId: v }));
    }
    if (c !== void 0)
      return p.refs[d] = f.call(this, c);
  }
  we.resolveRef = l;
  function f(p) {
    return (0, r.inlineRef)(p.schema, this.opts.inlineRefs) ? p.schema : p.validate ? p : a.call(this, p);
  }
  function h(p) {
    for (const v of this._compilations)
      if (g(v, p))
        return v;
  }
  we.getCompilingSchema = h;
  function g(p, v) {
    return p.schema === v.schema && p.root === v.root && p.baseId === v.baseId;
  }
  function $(p, v) {
    let d;
    for (; typeof (d = this.refs[v]) == "string"; )
      v = d;
    return d || this.schemas[v] || y.call(this, p, v);
  }
  function y(p, v) {
    const d = this.opts.uriResolver.parse(v), m = (0, r._getFullPath)(this.opts.uriResolver, d);
    let k = (0, r.getFullPath)(this.opts.uriResolver, p.baseId, void 0);
    if (Object.keys(p.schema).length > 0 && m === k)
      return _.call(this, d, p);
    const c = (0, r.normalizeId)(m), u = this.refs[c] || this.schemas[c];
    if (typeof u == "string") {
      const b = y.call(this, p, u);
      return typeof b?.schema != "object" ? void 0 : _.call(this, d, b);
    }
    if (typeof u?.schema == "object") {
      if (u.validate || a.call(this, u), c === (0, r.normalizeId)(v)) {
        const { schema: b } = u, { schemaId: x } = this.opts, P = b[x];
        return P && (k = (0, r.resolveUrl)(this.opts.uriResolver, k, P)), new i({ schema: b, schemaId: x, root: p, baseId: k });
      }
      return _.call(this, d, u);
    }
  }
  we.resolveSchema = y;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(p, { baseId: v, schema: d, root: m }) {
    var k;
    if (((k = p.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/")
      return;
    for (const b of p.fragment.slice(1).split("/")) {
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
  return we;
}
const ja = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", za = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ia = "object", Da = ["$data"], qa = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Va = !1, La = {
  $id: ja,
  description: za,
  type: Ia,
  required: Da,
  properties: qa,
  additionalProperties: Va
};
var Dt = {}, St = { exports: {} }, or, ko;
function vi() {
  if (ko) return or;
  ko = 1;
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
      const G = c[I];
      if (!(G === "[" || G === "]"))
        if (G === ":") {
          if (T === !0 && (F = !0), !A(P, x, b))
            break;
          if (++u > 7) {
            b.error = !0;
            break;
          }
          I > 0 && c[I - 1] === ":" && (T = !0), x.push(":");
          continue;
        } else if (G === "%") {
          if (!A(P, x, b))
            break;
          A = a;
        } else {
          P.push(G);
          continue;
        }
    }
    return P.length && (A === a ? b.zone = P.join("") : F ? x.push(P.join("")) : x.push(s(P))), b.address = x.join(""), b;
  }
  function h(c) {
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
  function p(c, u) {
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
        const x = h(b);
        x.isIPV6 === !0 ? b = `[${x.escapedHost}]` : b = p(b, !1);
      }
      u.push(b);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (u.push(":"), u.push(String(c.port))), u.length ? u.join("") : void 0;
  }
  return or = {
    nonSimpleDomain: i,
    recomposeAuthority: k,
    reescapeHostDelimiters: p,
    normalizePercentEncoding: v,
    normalizePathEncoding: d,
    escapePreservingEscapes: m,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: s
  }, or;
}
var sr, Co;
function Ba() {
  if (Co) return sr;
  Co = 1;
  const { isUUID: e } = vi(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function h(c, u) {
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
  ), p = (
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
  return sr = {
    wsIsSecure: o,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: k
  }, sr;
}
var Eo;
function Ua() {
  if (Eo) return St.exports;
  Eo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: o, escapePreservingEscapes: s, reescapeHostDelimiters: i, isIPv4: a, nonSimpleDomain: l } = vi(), { SCHEMES: f, getSchemeHandler: h } = Ba();
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
    }, A = Object.assign({}, T), I = [], G = h(A.scheme || F.scheme);
    G && G.serialize && G.serialize(F, A), F.path !== void 0 && (A.skipEscape ? F.path = r(F.path) : (F.path = s(F.path), F.scheme !== void 0 && (F.path = F.path.split("%3A").join(":")))), A.reference !== "suffix" && F.scheme && I.push(F.scheme, ":");
    const ee = n(F);
    if (ee !== void 0 && (A.reference !== "suffix" && I.push("//"), I.push(ee), F.path && F.path[0] !== "/" && I.push("/")), F.path !== void 0) {
      let W = F.path;
      !A.absolutePath && (!G || !G.absolutePath) && (W = t(W)), ee === void 0 && W[0] === "/" && W[1] === "/" && (W = "/%2F" + W.slice(2)), I.push(W);
    }
    return F.query !== void 0 && I.push("?", F.query), F.fragment !== void 0 && I.push("#", F.fragment), I.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, v = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
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
    let I = !1, G = !1;
    F.reference === "suffix" && (F.scheme ? P = F.scheme + ":" + P : P = "//" + P);
    const ee = P.match(v);
    ee !== null && ee[1].indexOf("\\") !== -1 && (A.error = "URI authority must not contain a literal backslash.", I = !0);
    const W = P.match(p);
    if (W) {
      A.scheme = W[1], A.userinfo = W[3], A.host = W[4], A.port = parseInt(W[5], 10), A.path = W[6] || "", A.query = W[7], A.fragment = W[8], isNaN(A.port) && (A.port = W[5]);
      const ae = d(A, W);
      if (ae !== void 0 && (A.error = A.error || ae, I = !0), A.host)
        if (a(A.host) === !1) {
          const q = e(A.host);
          A.host = q.host.toLowerCase(), G = q.isIPV6;
        } else
          G = !0;
      A.scheme === void 0 && A.userinfo === void 0 && A.host === void 0 && A.port === void 0 && A.query === void 0 && !A.path ? A.reference = "same-document" : A.scheme === void 0 ? A.reference = "relative" : A.fragment === void 0 ? A.reference = "absolute" : A.reference = "uri", F.reference && F.reference !== "suffix" && F.reference !== A.reference && (A.error = A.error || "URI is not a " + F.reference + " reference.");
      const X = h(F.scheme || A.scheme);
      if (!F.unicodeSupport && (!X || !X.unicodeSupport) && A.host && (F.domainHost || X && X.domainHost) && G === !1 && l(A.host))
        try {
          A.host = new URL("http://" + A.host).hostname;
        } catch (H) {
          A.error = A.error || "Host's domain name can not be converted to ASCII: " + H;
        }
      if ((!X || X && !X.skipNormalize) && (P.indexOf("%") !== -1 && (A.scheme !== void 0 && (A.scheme = unescape(A.scheme)), A.host !== void 0 && (A.host = i(unescape(A.host), G))), A.path && (A.path = o(A.path)), A.fragment))
        try {
          A.fragment = encodeURI(decodeURIComponent(A.fragment));
        } catch {
          A.error = A.error || "URI malformed";
        }
      X && X.parse && X.parse(A, F);
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
  return St.exports = x, St.exports.default = x, St.exports.fastUri = x, St.exports;
}
var xo;
function Ka() {
  if (xo) return Dt;
  xo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = Ua();
  return e.code = 'require("ajv/dist/runtime/uri").default', Dt.default = e, Dt;
}
var Po;
function Ha() {
  return Po || (Po = 1, (function(e) {
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
    const r = /* @__PURE__ */ Nr(), o = /* @__PURE__ */ Hn(), s = /* @__PURE__ */ gi(), i = /* @__PURE__ */ Gn(), a = /* @__PURE__ */ ne(), l = /* @__PURE__ */ Un(), f = /* @__PURE__ */ jn(), h = /* @__PURE__ */ ie(), g = La, $ = /* @__PURE__ */ Ka(), y = (q, R) => new RegExp(q, R);
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
    }, v = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, d = 200;
    function m(q) {
      var R, D, M, w, C, z, V, U, Q, Z, E, N, B, K, J, te, re, fe, de, me, pe, Te, ve, Ee, Fe;
      const Ye = q.strict, Yn = (R = q.code) === null || R === void 0 ? void 0 : R.optimize, Wr = Yn === !0 || Yn === void 0 ? 1 : Yn || 0, Jr = (M = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && M !== void 0 ? M : y, Hi = (w = q.uriResolver) !== null && w !== void 0 ? w : $.default;
      return {
        strictSchema: (z = (C = q.strictSchema) !== null && C !== void 0 ? C : Ye) !== null && z !== void 0 ? z : !0,
        strictNumbers: (U = (V = q.strictNumbers) !== null && V !== void 0 ? V : Ye) !== null && U !== void 0 ? U : !0,
        strictTypes: (Z = (Q = q.strictTypes) !== null && Q !== void 0 ? Q : Ye) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (N = (E = q.strictTuples) !== null && E !== void 0 ? E : Ye) !== null && N !== void 0 ? N : "log",
        strictRequired: (K = (B = q.strictRequired) !== null && B !== void 0 ? B : Ye) !== null && K !== void 0 ? K : !1,
        code: q.code ? { ...q.code, optimize: Wr, regExp: Jr } : { optimize: Wr, regExp: Jr },
        loopRequired: (J = q.loopRequired) !== null && J !== void 0 ? J : d,
        loopEnum: (te = q.loopEnum) !== null && te !== void 0 ? te : d,
        meta: (re = q.meta) !== null && re !== void 0 ? re : !0,
        messages: (fe = q.messages) !== null && fe !== void 0 ? fe : !0,
        inlineRefs: (de = q.inlineRefs) !== null && de !== void 0 ? de : !0,
        schemaId: (me = q.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = q.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (Te = q.validateSchema) !== null && Te !== void 0 ? Te : !0,
        validateFormats: (ve = q.validateFormats) !== null && ve !== void 0 ? ve : !0,
        unicodeRegExp: (Ee = q.unicodeRegExp) !== null && Ee !== void 0 ? Ee : !0,
        int32range: (Fe = q.int32range) !== null && Fe !== void 0 ? Fe : !0,
        uriResolver: Hi
      };
    }
    class k {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...m(R) };
        const { es5: D, lines: M } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: D, lines: M }), this.logger = A(R.logger);
        const w = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, s.getRules)(), c.call(this, p, R, "NOT SUPPORTED"), c.call(this, v, R, "DEPRECATED", "warn"), this._metaOpts = T.call(this), R.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && P.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), b.call(this), R.validateFormats = w;
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
        async function w(Z, E) {
          await C.call(this, Z.$schema);
          const N = this._addSchema(Z, E);
          return N.validate || z.call(this, N);
        }
        async function C(Z) {
          Z && !this.getSchema(Z) && await w.call(this, { $ref: Z }, !0);
        }
        async function z(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (E) {
            if (!(E instanceof o.default))
              throw E;
            return V.call(this, E), await U.call(this, E.missingSchema), z.call(this, Z);
          }
        }
        function V({ missingSchema: Z, missingRef: E }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${E} cannot be resolved`);
        }
        async function U(Z) {
          const E = await Q.call(this, Z);
          this.refs[Z] || await C.call(this, E.$schema), this.refs[Z] || this.addSchema(E, Z, D);
        }
        async function Q(Z) {
          const E = this._loading[Z];
          if (E)
            return E;
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
        if (G.call(this, M, D), !D)
          return (0, h.eachItem)(M, (C) => ee.call(this, C)), this;
        ae.call(this, D);
        const w = {
          ...D,
          type: (0, f.getJSONTypes)(D.type),
          schemaType: (0, f.getJSONTypes)(D.schemaType)
        };
        return (0, h.eachItem)(M, w.type.length === 0 ? (C) => ee.call(this, C, w) : (C) => w.type.forEach((z) => ee.call(this, C, w, z))), this;
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
          for (const V of C)
            z = z[V];
          for (const V in M) {
            const U = M[V];
            if (typeof U != "object")
              continue;
            const { $data: Q } = U.definition, Z = z[V];
            Q && Z && (z[V] = H(Z));
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
        const { schemaId: V } = this.opts;
        if (typeof R == "object")
          z = R[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let U = this._cache.get(R);
        if (U !== void 0)
          return U;
        M = (0, l.normalizeId)(z || M);
        const Q = l.getSchemaRefs.call(this, R, M);
        return U = new i.SchemaEnv({ schema: R, schemaId: V, meta: D, baseId: M, localRefs: Q }), this._cache.set(U.schema, U), C && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = U), w && this.validateSchema(R, !0), U;
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
    function G(q, R) {
      const { RULES: D } = this;
      if ((0, h.eachItem)(q, (M) => {
        if (D.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!I.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function ee(q, R, D) {
      var M;
      const w = R?.post;
      if (D && w)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: C } = this;
      let z = w ? C.post : C.rules.find(({ type: U }) => U === D);
      if (z || (z = { type: D, rules: [] }, C.rules.push(z)), C.keywords[q] = !0, !R)
        return;
      const V = {
        keyword: q,
        definition: {
          ...R,
          type: (0, f.getJSONTypes)(R.type),
          schemaType: (0, f.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? W.call(this, z, V, R.before) : z.rules.push(V), C.all[q] = V, (M = R.implements) === null || M === void 0 || M.forEach((U) => this.addKeyword(U));
    }
    function W(q, R, D) {
      const M = q.rules.findIndex((w) => w.keyword === D);
      M >= 0 ? q.rules.splice(M, 0, R) : (q.rules.push(R), this.logger.warn(`rule ${D} is not defined`));
    }
    function ae(q) {
      let { metaSchema: R } = q;
      R !== void 0 && (q.$data && this.opts.$data && (R = H(R)), q.validateSchema = this.compile(R, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function H(q) {
      return { anyOf: [q, X] };
    }
  })(Xn)), Xn;
}
var qt = {}, Vt = {}, Lt = {}, Ao;
function Ga() {
  if (Ao) return Lt;
  Ao = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Lt.default = e, Lt;
}
var Be = {}, Ro;
function Mr() {
  if (Ro) return Be;
  Ro = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.callRef = Be.getValidate = void 0;
  const e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ ne(), r = /* @__PURE__ */ Ne(), o = /* @__PURE__ */ Gn(), s = /* @__PURE__ */ ie(), i = {
    keyword: "$ref",
    schemaType: "string",
    code(f) {
      const { gen: h, schema: g, it: $ } = f, { baseId: y, schemaEnv: S, validateName: _, opts: p, self: v } = $, { root: d } = S;
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
        const b = h.scopeValue("root", { ref: d });
        return l(f, (0, n._)`${b}.validate`, d, d.$async);
      }
      function c(b) {
        const x = a(f, b);
        l(f, x, b, b.$async);
      }
      function u(b) {
        const x = h.scopeValue("schema", p.code.source === !0 ? { ref: b, code: (0, n.stringify)(b) } : { ref: b }), P = h.name("valid"), T = f.subschema({
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
  function a(f, h) {
    const { gen: g } = f;
    return h.validate ? g.scopeValue("validate", { ref: h.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: h })}.validate`;
  }
  Be.getValidate = a;
  function l(f, h, g, $) {
    const { gen: y, it: S } = f, { allErrors: _, schemaEnv: p, opts: v } = S, d = v.passContext ? r.default.this : n.nil;
    $ ? m() : k();
    function m() {
      if (!p.$async)
        throw new Error("async schema referenced by sync schema");
      const b = y.let("valid");
      y.try(() => {
        y.code((0, n._)`await ${(0, t.callValidateCode)(f, h, d)}`), u(h), _ || y.assign(b, !0);
      }, (x) => {
        y.if((0, n._)`!(${x} instanceof ${S.ValidationError})`, () => y.throw(x)), c(x), _ || y.assign(b, !1);
      }), f.ok(b);
    }
    function k() {
      f.result((0, t.callValidateCode)(f, h, d), () => u(h), () => c(h));
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
  return Be.callRef = l, Be.default = i, Be;
}
var No;
function Wa() {
  if (No) return Vt;
  No = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ga(), t = /* @__PURE__ */ Mr(), n = [
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
var Bt = {}, Ut = {}, Mo;
function Ja() {
  if (Mo) return Ut;
  Mo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
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
  return Ut.default = o, Ut;
}
var Kt = {}, Oo;
function Ya() {
  if (Oo) return Kt;
  Oo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
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
      const { gen: o, data: s, schemaCode: i, it: a } = r, l = a.opts.multipleOfPrecision, f = o.let("res"), h = l ? (0, e._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${l}` : (0, e._)`${f} !== parseInt(${f})`;
      r.fail$data((0, e._)`(${i} === 0 || (${f} = ${s}/${i}, ${h}))`);
    }
  };
  return Kt.default = n, Kt;
}
var Ht = {}, Gt = {}, To;
function Xa() {
  if (To) return Gt;
  To = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, s;
    for (; o < n; )
      r++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < n && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return r;
  }
  return Gt.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Gt;
}
var Fo;
function Za() {
  if (Fo) return Ht;
  Fo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Xa(), o = {
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
      const { keyword: i, data: a, schemaCode: l, it: f } = s, h = i === "maxLength" ? e.operators.GT : e.operators.LT, g = f.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(s.gen, n.default)}(${a})`;
      s.fail$data((0, e._)`${g} ${h} ${l}`);
    }
  };
  return Ht.default = o, Ht;
}
var Wt = {}, jo;
function Qa() {
  if (jo) return Wt;
  jo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ne(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, n.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, n._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schema: f, schemaCode: h, it: g } = s, $ = g.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: y } = g.opts.code, S = y.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(i, y), _ = i.let("valid");
        i.try(() => i.assign(_, (0, n._)`${S}(${h}, ${$}).test(${a})`), () => i.assign(_, !1)), s.fail$data((0, n._)`!${_}`);
      } else {
        const y = (0, e.usePattern)(s, f);
        s.fail$data((0, n._)`!${y}.test(${a})`);
      }
    }
  };
  return Wt.default = o, Wt;
}
var Jt = {}, zo;
function ec() {
  if (zo) return Jt;
  zo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
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
  return Jt.default = n, Jt;
}
var Yt = {}, Io;
function tc() {
  if (Io) return Yt;
  Io = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: i, schema: a, schemaCode: l, data: f, $data: h, it: g } = s, { opts: $ } = g;
      if (!h && a.length === 0)
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
        if (y || h)
          s.block$data(t.nil, p);
        else
          for (const d of a)
            (0, e.checkReportMissingProp)(s, d);
      }
      function _() {
        const d = i.let("missing");
        if (y || h) {
          const m = i.let("valid", !0);
          s.block$data(m, () => v(d, m)), s.ok(m);
        } else
          i.if((0, e.checkMissingProp)(s, a, d)), (0, e.reportMissingProp)(s, d), i.else();
      }
      function p() {
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
  return Yt.default = o, Yt;
}
var Xt = {}, Do;
function nc() {
  if (Do) return Xt;
  Do = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
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
  return Xt.default = n, Xt;
}
var Zt = {}, Qt = {}, qo;
function Or() {
  if (qo) return Qt;
  qo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = $i();
  return e.code = 'require("ajv/dist/runtime/equal").default', Qt.default = e, Qt;
}
var Vo;
function rc() {
  if (Vo) return Zt;
  Vo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jn(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Or(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${i} are identical)`,
      params: ({ params: { i, j: a } }) => (0, t._)`{i: ${i}, j: ${a}}`
    },
    code(i) {
      const { gen: a, data: l, $data: f, schema: h, parentSchema: g, schemaCode: $, it: y } = i;
      if (!f && !h)
        return;
      const S = a.let("valid"), _ = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      i.block$data(S, p, (0, t._)`${$} === false`), i.ok(S);
      function p() {
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
  return Zt.default = s, Zt;
}
var en = {}, Lo;
function oc() {
  if (Lo) return en;
  Lo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Or(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schemaCode: f, schema: h } = s;
      l || h && typeof h == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(i, n.default)}(${a}, ${f})`) : s.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return en.default = o, en;
}
var tn = {}, Bo;
function sc() {
  if (Bo) return tn;
  Bo = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Or(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: i, data: a, $data: l, schema: f, schemaCode: h, it: g } = s;
      if (!l && f.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = f.length >= g.opts.loopEnum;
      let y;
      const S = () => y ?? (y = (0, t.useFunc)(i, n.default));
      let _;
      if ($ || l)
        _ = i.let("valid"), s.block$data(_, p);
      else {
        if (!Array.isArray(f))
          throw new Error("ajv implementation error");
        const d = i.const("vSchema", h);
        _ = (0, e.or)(...f.map((m, k) => v(d, k)));
      }
      s.pass(_);
      function p() {
        i.assign(_, !1), i.forOf("v", h, (d) => i.if((0, e._)`${S()}(${a}, ${d})`, () => i.assign(_, !0).break()));
      }
      function v(d, m) {
        const k = f[m];
        return typeof k == "object" && k !== null ? (0, e._)`${S()}(${a}, ${d}[${m}])` : (0, e._)`${a} === ${k}`;
      }
    }
  };
  return tn.default = o, tn;
}
var Uo;
function ic() {
  if (Uo) return Bt;
  Uo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ja(), t = /* @__PURE__ */ Ya(), n = /* @__PURE__ */ Za(), r = /* @__PURE__ */ Qa(), o = /* @__PURE__ */ ec(), s = /* @__PURE__ */ tc(), i = /* @__PURE__ */ nc(), a = /* @__PURE__ */ rc(), l = /* @__PURE__ */ oc(), f = /* @__PURE__ */ sc(), h = [
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
  return Bt.default = h, Bt;
}
var nn = {}, st = {}, Ko;
function bi() {
  if (Ko) return st;
  Ko = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
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
    const { gen: a, schema: l, data: f, keyword: h, it: g } = s;
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
        s.subschema({ keyword: h, dataProp: _, dataPropType: t.Type.Num }, S), g.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return st.validateAdditionalItems = o, st.default = r, st;
}
var rn = {}, it = {}, Ho;
function wi() {
  if (Ho) return it;
  Ho = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.validateTuple = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Me(), r = {
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
    const { gen: l, parentSchema: f, data: h, keyword: g, it: $ } = s;
    _(f), $.opts.unevaluated && a.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(l, a.length, $.items));
    const y = l.name("valid"), S = l.const("len", (0, e._)`${h}.length`);
    a.forEach((p, v) => {
      (0, t.alwaysValidSchema)($, p) || (l.if((0, e._)`${S} > ${v}`, () => s.subschema({
        keyword: g,
        schemaProp: v,
        dataProp: v
      }, y)), s.ok(y));
    });
    function _(p) {
      const { opts: v, errSchemaPath: d } = $, m = a.length, k = m === p.minItems && (m === p.maxItems || p[i] === !1);
      if (v.strictTuples && !k) {
        const c = `"${g}" is ${m}-tuple, but minItems or maxItems/${i} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)($, c, v.strictTuples);
      }
    }
  }
  return it.validateTuple = o, it.default = r, it;
}
var Go;
function ac() {
  if (Go) return rn;
  Go = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wi(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return rn.default = t, rn;
}
var on = {}, Wo;
function cc() {
  if (Wo) return on;
  Wo = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Me(), r = /* @__PURE__ */ bi(), s = {
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
  return on.default = s, on;
}
var sn = {}, Jo;
function lc() {
  if (Jo) return sn;
  Jo = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
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
      let h, g;
      const { minContains: $, maxContains: y } = a;
      f.opts.next ? (h = $ === void 0 ? 1 : $, g = y) : h = 1;
      const S = s.const("len", (0, e._)`${l}.length`);
      if (o.setParams({ min: h, max: g }), g === void 0 && h === 0) {
        (0, t.checkStrictMode)(f, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && h > g) {
        (0, t.checkStrictMode)(f, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(f, i)) {
        let m = (0, e._)`${S} >= ${h}`;
        g !== void 0 && (m = (0, e._)`${m} && ${S} <= ${g}`), o.pass(m);
        return;
      }
      f.items = !0;
      const _ = s.name("valid");
      g === void 0 && h === 1 ? v(_, () => s.if(_, () => s.break())) : h === 0 ? (s.let(_, !0), g !== void 0 && s.if((0, e._)`${l}.length > 0`, p)) : (s.let(_, !1), p()), o.result(_, () => o.reset());
      function p() {
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
        s.code((0, e._)`${m}++`), g === void 0 ? s.if((0, e._)`${m} >= ${h}`, () => s.assign(_, !0).break()) : (s.if((0, e._)`${m} > ${g}`, () => s.assign(_, !1).break()), h === 1 ? s.assign(_, !0) : s.if((0, e._)`${m} >= ${h}`, () => s.assign(_, !0)));
      }
    }
  };
  return sn.default = r, sn;
}
var ir = {}, Yo;
function Tr() {
  return Yo || (Yo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Me();
    e.error = {
      message: ({ params: { property: l, depsCount: f, deps: h } }) => {
        const g = f === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${h} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: f, deps: h, missingProperty: g } }) => (0, t._)`{property: ${l},
    missingProperty: ${g},
    depsCount: ${f},
    deps: ${h}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [f, h] = s(l);
        i(l, f), a(l, h);
      }
    };
    function s({ schema: l }) {
      const f = {}, h = {};
      for (const g in l) {
        if (g === "__proto__")
          continue;
        const $ = Array.isArray(l[g]) ? f : h;
        $[g] = l[g];
      }
      return [f, h];
    }
    function i(l, f = l.schema) {
      const { gen: h, data: g, it: $ } = l;
      if (Object.keys(f).length === 0)
        return;
      const y = h.let("missing");
      for (const S in f) {
        const _ = f[S];
        if (_.length === 0)
          continue;
        const p = (0, r.propertyInData)(h, g, S, $.opts.ownProperties);
        l.setParams({
          property: S,
          depsCount: _.length,
          deps: _.join(", ")
        }), $.allErrors ? h.if(p, () => {
          for (const v of _)
            (0, r.checkReportMissingProp)(l, v);
        }) : (h.if((0, t._)`${p} && (${(0, r.checkMissingProp)(l, _, y)})`), (0, r.reportMissingProp)(l, y), h.else());
      }
    }
    e.validatePropertyDeps = i;
    function a(l, f = l.schema) {
      const { gen: h, data: g, keyword: $, it: y } = l, S = h.name("valid");
      for (const _ in f)
        (0, n.alwaysValidSchema)(y, f[_]) || (h.if(
          (0, r.propertyInData)(h, g, _, y.opts.ownProperties),
          () => {
            const p = l.subschema({ keyword: $, schemaProp: _ }, S);
            l.mergeValidEvaluated(p, S);
          },
          () => h.var(S, !0)
          // TODO var
        ), l.ok(S));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(ir)), ir;
}
var an = {}, Xo;
function dc() {
  if (Xo) return an;
  Xo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
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
      s.forIn("key", a, (h) => {
        o.setParams({ propertyName: h }), o.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, f), s.if((0, e.not)(f), () => {
          o.error(!0), l.allErrors || s.break();
        });
      }), o.ok(f);
    }
  };
  return an.default = r, an;
}
var cn = {}, Zo;
function _i() {
  if (Zo) return cn;
  Zo = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ ie(), s = {
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
      const { gen: a, schema: l, parentSchema: f, data: h, errsCount: g, it: $ } = i;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: S } = $;
      if ($.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)($, l))
        return;
      const _ = (0, e.allSchemaProperties)(f.properties), p = (0, e.allSchemaProperties)(f.patternProperties);
      v(), i.ok((0, t._)`${g} === ${n.default.errors}`);
      function v() {
        a.forIn("key", h, (u) => {
          !_.length && !p.length ? k(u) : a.if(d(u), () => k(u));
        });
      }
      function d(u) {
        let b;
        if (_.length > 8) {
          const x = (0, r.schemaRefOrVal)($, f.properties, "properties");
          b = (0, e.isOwnProperty)(a, x, u);
        } else _.length ? b = (0, t.or)(..._.map((x) => (0, t._)`${u} === ${x}`)) : b = t.nil;
        return p.length && (b = (0, t.or)(b, ...p.map((x) => (0, t._)`${(0, e.usePattern)(i, x)}.test(${u})`))), (0, t.not)(b);
      }
      function m(u) {
        a.code((0, t._)`delete ${h}[${u}]`);
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
  return cn.default = s, cn;
}
var ln = {}, Qo;
function uc() {
  if (Qo) return ln;
  Qo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kn(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ _i(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, parentSchema: l, data: f, it: h } = s;
      h.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(h, r.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const p of g)
        h.definedProperties.add(p);
      h.opts.unevaluated && g.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(i, (0, n.toHash)(g), h.props));
      const $ = g.filter((p) => !(0, n.alwaysValidSchema)(h, a[p]));
      if ($.length === 0)
        return;
      const y = i.name("valid");
      for (const p of $)
        S(p) ? _(p) : (i.if((0, t.propertyInData)(i, f, p, h.opts.ownProperties)), _(p), h.allErrors || i.else().var(y, !0), i.endIf()), s.it.definedProperties.add(p), s.ok(y);
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
  return ln.default = o, ln;
}
var dn = {}, es;
function fc() {
  if (es) return dn;
  es = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Me(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ie(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: i, schema: a, data: l, parentSchema: f, it: h } = s, { opts: g } = h, $ = (0, e.allSchemaProperties)(a), y = $.filter((k) => (0, n.alwaysValidSchema)(h, a[k]));
      if ($.length === 0 || y.length === $.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const S = g.strictSchema && !g.allowMatchingProperties && f.properties, _ = i.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(i, h.props));
      const { props: p } = h;
      v();
      function v() {
        for (const k of $)
          S && d(k), h.allErrors ? m(k) : (i.var(_, !0), m(k), i.if(_));
      }
      function d(k) {
        for (const c in S)
          new RegExp(k).test(c) && (0, n.checkStrictMode)(h, `property ${c} matches pattern ${k} (use allowMatchingProperties)`);
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
            }, _), h.opts.unevaluated && p !== !0 ? i.assign((0, t._)`${p}[${c}]`, !0) : !u && !h.allErrors && i.if((0, t.not)(_), () => i.break());
          });
        });
      }
    }
  };
  return dn.default = o, dn;
}
var un = {}, ts;
function pc() {
  if (ts) return un;
  ts = 1, Object.defineProperty(un, "__esModule", { value: !0 });
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
  return un.default = t, un;
}
var fn = {}, ns;
function hc() {
  if (ns) return fn;
  ns = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Me()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return fn.default = t, fn;
}
var pn = {}, rs;
function mc() {
  if (rs) return pn;
  rs = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
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
      const f = i, h = s.let("valid", !1), g = s.let("passing", null), $ = s.name("_valid");
      o.setParams({ passing: g }), s.block(y), o.result(h, () => o.reset(), () => o.error(!0));
      function y() {
        f.forEach((S, _) => {
          let p;
          (0, t.alwaysValidSchema)(l, S) ? s.var($, !0) : p = o.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, $), _ > 0 && s.if((0, e._)`${$} && ${h}`).assign(h, !1).assign(g, (0, e._)`[${g}, ${_}]`).else(), s.if($, () => {
            s.assign(h, !0), s.assign(g, _), p && o.mergeEvaluated(p, e.Name);
          });
        });
      }
    }
  };
  return pn.default = r, pn;
}
var hn = {}, os;
function gc() {
  if (os) return hn;
  os = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
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
  return hn.default = t, hn;
}
var mn = {}, ss;
function yc() {
  if (ss) return mn;
  ss = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
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
      const f = o(l, "then"), h = o(l, "else");
      if (!f && !h)
        return;
      const g = i.let("valid", !0), $ = i.name("_valid");
      if (y(), s.reset(), f && h) {
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
      function S(_, p) {
        return () => {
          const v = s.subschema({ keyword: _ }, $);
          i.assign(g, $), s.mergeValidEvaluated(v, g), p ? i.assign(p, (0, e._)`${_}`) : s.setParams({ ifClause: _ });
        };
      }
    }
  };
  function o(s, i) {
    const a = s.schema[i];
    return a !== void 0 && !(0, t.alwaysValidSchema)(s, a);
  }
  return mn.default = r, mn;
}
var gn = {}, is;
function $c() {
  if (is) return gn;
  is = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return gn.default = t, gn;
}
var as;
function vc() {
  if (as) return nn;
  as = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bi(), t = /* @__PURE__ */ ac(), n = /* @__PURE__ */ wi(), r = /* @__PURE__ */ cc(), o = /* @__PURE__ */ lc(), s = /* @__PURE__ */ Tr(), i = /* @__PURE__ */ dc(), a = /* @__PURE__ */ _i(), l = /* @__PURE__ */ uc(), f = /* @__PURE__ */ fc(), h = /* @__PURE__ */ pc(), g = /* @__PURE__ */ hc(), $ = /* @__PURE__ */ mc(), y = /* @__PURE__ */ gc(), S = /* @__PURE__ */ yc(), _ = /* @__PURE__ */ $c();
  function p(v = !1) {
    const d = [
      // any
      h.default,
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
  return nn.default = p, nn;
}
var yn = {}, at = {}, cs;
function Si() {
  if (cs) return at;
  cs = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Gn(), r = /* @__PURE__ */ Mr(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => s(a, a.schema)
  };
  function s(a, l) {
    const { gen: f, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[l] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, $ = h.errSchemaPath === "#" ? h.validateName : i(a);
    f.if((0, e._)`!${g}`, () => f.assign(g, $));
  }
  at.dynamicAnchor = s;
  function i(a) {
    const { schemaEnv: l, schema: f, self: h } = a.it, { root: g, baseId: $, localRefs: y, meta: S } = l.root, { schemaId: _ } = h.opts, p = new n.SchemaEnv({ schema: f, schemaId: _, root: g, baseId: $, localRefs: y, meta: S });
    return n.compileSchema.call(h, p), (0, r.getValidate)(a, p);
  }
  return at.default = o, at;
}
var ct = {}, ls;
function ki() {
  if (ls) return ct;
  ls = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.dynamicRef = void 0;
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Ne(), n = /* @__PURE__ */ Mr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (s) => o(s, s.schema)
  };
  function o(s, i) {
    const { gen: a, keyword: l, it: f } = s;
    if (i[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const h = i.slice(1);
    if (f.allErrors)
      g();
    else {
      const y = a.let("valid", !1);
      g(y), s.ok(y);
    }
    function g(y) {
      if (f.schemaEnv.root.dynamicAnchors[h]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
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
  return ct.dynamicRef = o, ct.default = r, ct;
}
var $n = {}, ds;
function bc() {
  if (ds) return $n;
  ds = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Si(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return $n.default = n, $n;
}
var vn = {}, us;
function wc() {
  if (us) return vn;
  us = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ki(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return vn.default = t, vn;
}
var fs;
function _c() {
  if (fs) return yn;
  fs = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Si(), t = /* @__PURE__ */ ki(), n = /* @__PURE__ */ bc(), r = /* @__PURE__ */ wc(), o = [e.default, t.default, n.default, r.default];
  return yn.default = o, yn;
}
var bn = {}, wn = {}, ps;
function Sc() {
  if (ps) return wn;
  ps = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return wn.default = t, wn;
}
var _n = {}, hs;
function kc() {
  if (hs) return _n;
  hs = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return _n.default = t, _n;
}
var Sn = {}, ms;
function Cc() {
  if (ms) return Sn;
  ms = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Sn.default = t, Sn;
}
var gs;
function Ec() {
  if (gs) return bn;
  gs = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Sc(), t = /* @__PURE__ */ kc(), n = /* @__PURE__ */ Cc(), r = [e.default, t.default, n.default];
  return bn.default = r, bn;
}
var kn = {}, Cn = {}, ys;
function xc() {
  if (ys) return Cn;
  ys = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ne(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: s }) => (0, e._)`{unevaluatedProperty: ${s.unevaluatedProperty}}`
    },
    code(s) {
      const { gen: i, schema: a, data: l, errsCount: f, it: h } = s;
      if (!f)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: $ } = h;
      $ instanceof e.Name ? i.if((0, e._)`${$} !== true`, () => i.forIn("key", l, (p) => i.if(S($, p), () => y(p)))) : $ !== !0 && i.forIn("key", l, (p) => $ === void 0 ? y(p) : i.if(_($, p), () => y(p))), h.props = !0, s.ok((0, e._)`${f} === ${n.default.errors}`);
      function y(p) {
        if (a === !1) {
          s.setParams({ unevaluatedProperty: p }), s.error(), g || i.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, a)) {
          const v = i.name("valid");
          s.subschema({
            keyword: "unevaluatedProperties",
            dataProp: p,
            dataPropType: t.Type.Str
          }, v), g || i.if((0, e.not)(v), () => i.break());
        }
      }
      function S(p, v) {
        return (0, e._)`!${p} || !${p}[${v}]`;
      }
      function _(p, v) {
        const d = [];
        for (const m in p)
          p[m] === !0 && d.push((0, e._)`${v} !== ${m}`);
        return (0, e.and)(...d);
      }
    }
  };
  return Cn.default = o, Cn;
}
var En = {}, $s;
function Pc() {
  if ($s) return En;
  $s = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ ie(), r = {
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
      const h = s.const("len", (0, e._)`${a}.length`);
      if (i === !1)
        o.setParams({ len: f }), o.fail((0, e._)`${h} > ${f}`);
      else if (typeof i == "object" && !(0, t.alwaysValidSchema)(l, i)) {
        const $ = s.var("valid", (0, e._)`${h} <= ${f}`);
        s.if((0, e.not)($), () => g($, f)), o.ok($);
      }
      l.items = !0;
      function g($, y) {
        s.forRange("i", y, h, (S) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, $), l.allErrors || s.if((0, e.not)($), () => s.break());
        });
      }
    }
  };
  return En.default = r, En;
}
var vs;
function Ac() {
  if (vs) return kn;
  vs = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xc(), t = /* @__PURE__ */ Pc(), n = [e.default, t.default];
  return kn.default = n, kn;
}
var xn = {}, Pn = {}, bs;
function Rc() {
  if (bs) return Pn;
  bs = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
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
      const { gen: s, data: i, $data: a, schema: l, schemaCode: f, it: h } = r, { opts: g, errSchemaPath: $, schemaEnv: y, self: S } = h;
      if (!g.validateFormats)
        return;
      a ? _() : p();
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
      function p() {
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
  return Pn.default = n, Pn;
}
var ws;
function Nc() {
  if (ws) return xn;
  ws = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Rc()).default];
  return xn.default = t, xn;
}
var Qe = {}, _s;
function Mc() {
  return _s || (_s = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.contentVocabulary = Qe.metadataVocabulary = void 0, Qe.metadataVocabulary = [
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
var Ss;
function Oc() {
  if (Ss) return qt;
  Ss = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wa(), t = /* @__PURE__ */ ic(), n = /* @__PURE__ */ vc(), r = /* @__PURE__ */ _c(), o = /* @__PURE__ */ Ec(), s = /* @__PURE__ */ Ac(), i = /* @__PURE__ */ Nc(), a = /* @__PURE__ */ Mc(), l = [
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
  return qt.default = l, qt;
}
var An = {}, kt = {}, ks;
function Tc() {
  if (ks) return kt;
  ks = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (kt.DiscrError = e = {})), kt;
}
var Cs;
function Fc() {
  if (Cs) return An;
  Cs = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = /* @__PURE__ */ Tc(), n = /* @__PURE__ */ Gn(), r = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ ie(), i = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: f } }) => (0, e._)`{error: ${a}, tag: ${f}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: f, schema: h, parentSchema: g, it: $ } = a, { oneOf: y } = g;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = h.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = l.let("valid", !1), p = l.const("tag", (0, e._)`${f}${(0, e.getProperty)(S)}`);
      l.if((0, e._)`typeof ${p} == "string"`, () => v(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: p, tagName: S })), a.ok(_);
      function v() {
        const k = m();
        l.if(!1);
        for (const c in k)
          l.elseIf((0, e._)`${p} === ${c}`), l.assign(_, d(k[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: p, tagName: S }), l.endIf();
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
            const G = A.$ref;
            if (A = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, G), A instanceof n.SchemaEnv && (A = A.schema), A === void 0)
              throw new r.default($.opts.uriResolver, $.baseId, G);
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
  return An.default = i, An;
}
var Rn = {};
const jc = "https://json-schema.org/draft/2020-12/schema", zc = "https://json-schema.org/draft/2020-12/schema", Ic = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Dc = "meta", qc = "Core and Validation specifications meta-schema", Vc = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Lc = ["object", "boolean"], Bc = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Uc = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Kc = {
  $schema: jc,
  $id: zc,
  $vocabulary: Ic,
  $dynamicAnchor: Dc,
  title: qc,
  allOf: Vc,
  type: Lc,
  $comment: Bc,
  properties: Uc
}, Hc = "https://json-schema.org/draft/2020-12/schema", Gc = "https://json-schema.org/draft/2020-12/meta/applicator", Wc = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Jc = "meta", Yc = "Applicator vocabulary meta-schema", Xc = ["object", "boolean"], Zc = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Qc = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, el = {
  $schema: Hc,
  $id: Gc,
  $vocabulary: Wc,
  $dynamicAnchor: Jc,
  title: Yc,
  type: Xc,
  properties: Zc,
  $defs: Qc
}, tl = "https://json-schema.org/draft/2020-12/schema", nl = "https://json-schema.org/draft/2020-12/meta/unevaluated", rl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, ol = "meta", sl = "Unevaluated applicator vocabulary meta-schema", il = ["object", "boolean"], al = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, cl = {
  $schema: tl,
  $id: nl,
  $vocabulary: rl,
  $dynamicAnchor: ol,
  title: sl,
  type: il,
  properties: al
}, ll = "https://json-schema.org/draft/2020-12/schema", dl = "https://json-schema.org/draft/2020-12/meta/content", ul = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, fl = "meta", pl = "Content vocabulary meta-schema", hl = ["object", "boolean"], ml = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, gl = {
  $schema: ll,
  $id: dl,
  $vocabulary: ul,
  $dynamicAnchor: fl,
  title: pl,
  type: hl,
  properties: ml
}, yl = "https://json-schema.org/draft/2020-12/schema", $l = "https://json-schema.org/draft/2020-12/meta/core", vl = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, bl = "meta", wl = "Core vocabulary meta-schema", _l = ["object", "boolean"], Sl = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, kl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Cl = {
  $schema: yl,
  $id: $l,
  $vocabulary: vl,
  $dynamicAnchor: bl,
  title: wl,
  type: _l,
  properties: Sl,
  $defs: kl
}, El = "https://json-schema.org/draft/2020-12/schema", xl = "https://json-schema.org/draft/2020-12/meta/format-annotation", Pl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Al = "meta", Rl = "Format vocabulary meta-schema for annotation results", Nl = ["object", "boolean"], Ml = { format: { type: "string" } }, Ol = {
  $schema: El,
  $id: xl,
  $vocabulary: Pl,
  $dynamicAnchor: Al,
  title: Rl,
  type: Nl,
  properties: Ml
}, Tl = "https://json-schema.org/draft/2020-12/schema", Fl = "https://json-schema.org/draft/2020-12/meta/meta-data", jl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, zl = "meta", Il = "Meta-data vocabulary meta-schema", Dl = ["object", "boolean"], ql = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Vl = {
  $schema: Tl,
  $id: Fl,
  $vocabulary: jl,
  $dynamicAnchor: zl,
  title: Il,
  type: Dl,
  properties: ql
}, Ll = "https://json-schema.org/draft/2020-12/schema", Bl = "https://json-schema.org/draft/2020-12/meta/validation", Ul = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Kl = "meta", Hl = "Validation vocabulary meta-schema", Gl = ["object", "boolean"], Wl = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Jl = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Yl = {
  $schema: Ll,
  $id: Bl,
  $vocabulary: Ul,
  $dynamicAnchor: Kl,
  title: Hl,
  type: Gl,
  properties: Wl,
  $defs: Jl
};
var Es;
function Xl() {
  if (Es) return Rn;
  Es = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = Kc, t = el, n = cl, r = gl, o = Cl, s = Ol, i = Vl, a = Yl, l = ["/properties"];
  function f(h) {
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
      return h ? $.$dataMetaSchema(y, l) : y;
    }
  }
  return Rn.default = f, Rn;
}
var xs;
function Zl() {
  return xs || (xs = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ha(), r = /* @__PURE__ */ Oc(), o = /* @__PURE__ */ Fc(), s = /* @__PURE__ */ Xl(), i = "https://json-schema.org/draft/2020-12/schema";
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
    var h = /* @__PURE__ */ Nr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var g = /* @__PURE__ */ Hn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(Ft, Ft.exports)), Ft.exports;
}
var Ql = /* @__PURE__ */ Zl();
const ed = /* @__PURE__ */ Ra(Ql), td = "https://json-schema.org/draft/2020-12/schema", nd = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", rd = "gufe-viz payload", od = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", sd = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], id = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), Fr = {
  $schema: td,
  $id: nd,
  title: rd,
  description: od,
  oneOf: sd,
  $defs: id
}, Qf = [
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
], jr = Fr.$id, zr = new ed({ allErrors: !0, strict: !1 });
zr.addSchema(Fr, jr);
const Ps = zr.getSchema(jr), Ci = Object.entries(Fr.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), ep = Ci, Ir = /* @__PURE__ */ new Map();
for (const e of Ci) {
  const t = zr.getSchema(`${jr}#/$defs/${e}`);
  t && Ir.set(e, t);
}
const vr = { valid: !0, issues: [] };
function br(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function ad(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? Ir.get(t) : void 0;
  return n ? n(e) ? vr : { valid: !1, issues: br(n.errors) } : Ps(e) ? vr : { valid: !1, issues: br(Ps.errors) };
}
function tp(e, t) {
  const n = Ir.get(e);
  return n ? n(t) ? vr : { valid: !1, issues: br(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function cd(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const Dr = {
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
function Ei(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!Dr[t]) return ld(t);
  const { valid: n, issues: r } = ad(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: cd(r)
  };
}
function ld(e) {
  const t = Object.keys(Dr).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function np(e) {
  return Ei(e)?.message ?? null;
}
class dd extends Ae {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    oa("payload", n, this);
    const r = Ei(n);
    if (r)
      return t.appendChild(ud(r, n)), {};
    const o = n.type, s = Dr[o], i = document.createElement(s);
    return i.style.cssText = "flex:1;min-height:0;min-width:0;", i.payload = n, t.appendChild(i), {
      onResize: () => i.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => i.remove()
    };
  }
}
function ud(e, t) {
  const n = j(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(ue(e.message));
  const r = (s, i) => j(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (i ? `background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};` : `background:${O.panelBg};color:${O.textMuted2};border:1px solid ${O.cardBorder};`),
    s
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const o = fd(t);
  return o && n.appendChild(r(o, !1)), n;
}
function fd(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${Ve(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${Ve(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Re("gufe-view", dd);
const ar = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0"
}, qr = {
  threeDmol: `https://unpkg.com/3dmol@${ar.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${ar.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${ar.d3}/+esm`
};
function Vr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function xi(e, t) {
  return new Promise((n, r) => {
    const o = document.createElement("script");
    o.src = e, o.onload = () => n(), o.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(o);
  });
}
let rt = null, lt = null;
function Lr() {
  if (lt) return lt;
  const e = Vr("threeDmol");
  return e ? (lt = e.then((t) => rt = t || window.$3Dmol), lt) : (lt = (async () => {
    if (window.$3Dmol) return rt = window.$3Dmol;
    if (await xi(qr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return rt = window.$3Dmol;
  })(), lt);
}
let dt = null;
function Wn() {
  if (dt) return dt;
  const e = Vr("rdkit");
  return e ? (dt = e.then((t) => window.RDKit = t), dt) : (dt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await xi(qr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), dt);
}
let cr = null;
function Pi() {
  if (!cr) {
    const e = qr.d3;
    cr = Vr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return cr;
}
function Ai(e, t) {
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
    t.hint && !r && (r = !0, hd(e, t.hint));
  };
  return e.addEventListener("wheel", i, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", o), e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", s), {
    cleanup() {
      e.removeEventListener("wheel", i, { capture: !0 }), e.removeEventListener("pointerdown", o), e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", s);
    }
  };
}
const pd = 1600;
function hd(e, t) {
  const n = j(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, pd);
}
const md = { min: 0.25, max: 12 }, gd = 150;
function As(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? gd) - t;
}
function yd(e, t = md) {
  const n = As(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let o = 1;
  const s = () => {
    if (!r) return o;
    const i = As(e);
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
const $d = 2e-3;
function Ri(e) {
  return Math.exp(-e.deltaY * $d);
}
function Br(e, t, n = {}) {
  const r = yd(t, n.bounds), o = Ai(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (s) => r.zoomBy(Ri(s))
  });
  return { ...r, cleanup: o.cleanup };
}
function Ur(e, t = "Reset view") {
  const n = j("button", vt, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const lr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, vd = [
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
], rp = "hsv", L = [0, 0, 0], bd = {
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
}, wd = "rdkit", _d = !0, Sd = !0, kd = !0, Cd = !0, Ed = "rdkit", xd = "filled", Pd = 0.42, Ad = 1.5, Rd = !0, Nd = "show", Md = "mono", Od = 0.51, Td = 0.74, Fd = 1.6, jd = 1.7, zd = 5, Id = 0.3, Dd = "#d62828", qd = "#d62828", Vd = "#015ab5", Ld = !1, Bd = "", Ud = "#7c3aed", Kd = {
  layout: wd,
  alignPair: _d,
  atomNumbers: Sd,
  createdDestroyed: kd,
  modified: Cd,
  style: Ed,
  circles: xd,
  circleRadius: Pd,
  circleStroke: Ad,
  boundary: Rd,
  hydrogens: Nd,
  elementColors: Md,
  numScale: Od,
  labelScale: Td,
  bondWidth: Fd,
  markWidth: jd,
  haloWidth: zd,
  haloOpacity: Id,
  destroyedColor: Dd,
  createdColor: qd,
  modifiedColor: Vd,
  stereo: Ld,
  customSpec: Bd,
  customColor: Ud
}, Hd = {
  version: 1,
  layout: "rdkit",
  alignPair: !0,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: lr.uniqueAtom,
  createdColor: lr.uniqueAtom,
  modifiedColor: lr.elementChange,
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
}, Gd = ["rdkit", "coordgen", "conformer"], Wd = ["rdkit", "recolor", "halo"], Jd = ["outline", "filled", "off"], Yd = ["show", "dim", "hide"], Xd = ["cpk", "mono"], Zd = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, Qd = /^#[0-9a-fA-F]{6}$/;
function Ct(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Ue(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = Zd[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const ut = (e, t) => typeof e == "boolean" ? e : t, Nn = (e, t) => typeof e == "string" && Qd.test(e) ? e : t;
function eu(e) {
  const t = e && typeof e == "object" ? e : {}, n = Hd;
  return {
    version: 1,
    layout: Ct(t.layout, Gd, n.layout),
    alignPair: ut(t.alignPair, n.alignPair),
    style: Ct(t.style, Wd, n.style),
    createdDestroyed: ut(t.createdDestroyed, n.createdDestroyed),
    modified: ut(t.modified, n.modified),
    destroyedColor: Nn(t.destroyedColor, n.destroyedColor),
    createdColor: Nn(t.createdColor, n.createdColor),
    modifiedColor: Nn(t.modifiedColor, n.modifiedColor),
    boundary: ut(t.boundary, n.boundary),
    circles: Ct(t.circles, Jd, n.circles),
    circleRadius: Ue(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Ue(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Ct(t.hydrogens, Yd, n.hydrogens),
    elementColors: Ct(t.elementColors, Xd, n.elementColors),
    atomNumbers: ut(t.atomNumbers, n.atomNumbers),
    stereo: ut(t.stereo, n.stereo),
    numScale: Ue(t.numScale, "numScale", n.numScale),
    labelScale: Ue(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Ue(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Ue(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Ue(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Ue(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: Nn(t.customColor, n.customColor)
  };
}
const et = eu(Kd);
function Rs(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const o of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const s = /^([LlRr])[:=](.*)$/.exec(o), i = s ? s[1].toLowerCase() === "l" ? "left" : "right" : "both", a = s ? s[2] : o, l = (h) => {
      i !== "right" && t.add(h), i !== "left" && n.add(h);
    }, f = /^(\d+)-(\d+)$/.exec(a);
    if (f) {
      const h = Math.min(+f[1], +f[2]), g = Math.min(Math.max(+f[1], +f[2]), h + r - 1);
      for (let $ = h; $ <= g; $++) l($);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function dr(e, t, n) {
  const r = [];
  for (let o = 0; o < e.bonds.length; o++) {
    const [s, i] = e.bonds[o], a = t.has(s), l = t.has(i);
    (n ? a || l : a && l) && r.push(o);
  }
  return r;
}
function Ns(e) {
  return `0x${e.replace("#", "")}`;
}
function wr(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function tu(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function nu(e, t, n) {
  const r = new Set(t.atoms), o = new Set(dr(e, r, !0));
  return {
    deletions: dr(e, r, n),
    changes: dr(e, new Set(t.elements), n).filter((s) => !o.has(s))
  };
}
function Ms(e, t, n, r) {
  const o = nu(t, n, e.boundary), s = [];
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
function ru(e) {
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
function ou(e, t) {
  return e.style === "rdkit" ? "rdkit" : ru(t) ? e.style : "rdkit";
}
function su(e, t, n, r, o, s) {
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
  e.elementColors === "mono" && (i.atomColourPalette = bd), o === "rdkit" && (i.continuousHighlight = !1);
  const a = {}, l = {}, f = {};
  for (const y of n) {
    const S = wr(y.color);
    if (o === "rdkit") for (const p of y.bonds) f[p] = S;
    if (o === "recolor" && e.circles === "off") continue;
    const _ = o === "recolor" && e.circles === "filled" ? tu(S, 0.7) : S;
    for (const p of y.atoms)
      a[p] = _, l[p] = e.circleRadius;
  }
  const h = wr(e.customColor);
  for (const y of r)
    y < s && (a[y] = h, l[y] = e.circleRadius);
  const g = Object.keys(a).map(Number);
  g.length && (i.atoms = g, i.highlightAtomColors = a, i.highlightAtomRadii = l);
  const $ = Object.keys(f).map(Number);
  return $.length && (i.bonds = $, i.highlightBondColors = f), i;
}
function iu(e, t, n, r) {
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
const au = "http://www.w3.org/2000/svg";
function Ni(e, t) {
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
function Mi(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function Os(e, t, n, r, o, s) {
  for (const i of r)
    for (const a of Ni(e, i)) {
      const l = a.style;
      Mi(a) ? l.fill = o : (l.stroke = o, l.strokeWidth = `${t.markWidth}px`);
    }
  if (s)
    for (const i of n)
      for (const a of Kr(e, i, !1)) a.style.fill = s;
}
function cu(e, t, n, r) {
  const o = e.ownerDocument;
  if (!o) return;
  const s = o.createElementNS(au, "g");
  s.setAttribute("data-gufe-halo", "1"), s.style.opacity = String(t.haloOpacity);
  for (const a of n)
    for (const l of Ni(e, a)) {
      if (Mi(l)) continue;
      const f = l.cloneNode(!0);
      f.removeAttribute("class"), f.style.fill = "none", f.style.stroke = r, f.style.strokeWidth = `${t.haloWidth}px`, f.style.strokeLinecap = "round", f.style.strokeLinejoin = "round", f.style.strokeOpacity = "1", s.appendChild(f);
    }
  if (!s.childNodes.length) return;
  const i = e.querySelector("rect");
  i?.nextSibling ? e.insertBefore(s, i.nextSibling) : i ? e.appendChild(s) : e.insertBefore(s, e.firstChild);
}
function lu(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Kr(e, s, !0)) {
        const a = i.style;
        a.fill = "none", a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function du(e, t, n, r, o) {
  for (const s of n)
    if (!r.has(s))
      for (const i of Kr(e, s, !0)) {
        const a = i.style;
        a.stroke = o, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function uu(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const o of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const s = o.style;
          n.hydrogens === "hide" ? s.display = "none" : s.opacity = "0.22";
        }
  }
}
function fu(e, t, n, r, o, s) {
  if (s !== "rdkit")
    for (const i of r)
      if (s === "recolor") {
        const a = n.circles === "filled";
        Os(
          e,
          n,
          i.atoms,
          i.bonds,
          i.color,
          a && i.blackLabelOnFill ? "#000000" : i.color
        ), n.circles === "outline" ? lu(e, n, i.atoms, o, i.color) : a && i.edgeOnFill && du(e, n, i.atoms, o, i.color);
      } else
        cu(e, n, i.bonds, i.color), Os(e, n, i.atoms, i.bonds, i.color, null);
  uu(e, t, n);
}
const Jn = `
`, _r = "$$$$";
function Sr(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Jn);
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
  const l = [];
  for (let h = 0; h < (isFinite(s) ? s : 0); h++) {
    const g = n[4 + o + h];
    if (g == null) break;
    const $ = parseInt(g.substring(0, 3), 10), y = parseInt(g.substring(3, 6), 10), S = parseInt(g.substring(6, 9), 10);
    !isFinite($) || !isFinite(y) || l.push([$ - 1, y - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: i };
}
function pu(e) {
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
  return r.push("M  END"), r.join(Jn);
}
const hu = (e) => `${pu(e)}${Jn}${_r}`, mu = (e) => e.indexOf(_r) >= 0 ? e : `${e}${Jn}${_r}`;
function Oi(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Ti(e, t, n, r, o) {
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
function Fi(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const Ts = [
  { id: "2d", label: "2D", title: "The 2D depiction" },
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
  { id: "info", label: "Info", title: "Name, SMILES, charge and the counts" }
], kr = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, pt = (e) => e in kr, Fs = 400, ur = "position:absolute;inset:0;min-width:0;min-height:0;";
class gu extends Ae {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, o = n.name ?? "", s = n.smiles, i = n.total_charge, a = j("div", "flex:1;position:relative;min-height:0;overflow:hidden;");
    t.appendChild(a);
    const l = j(
      "div",
      `${ur}display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${Nt.canvas2D};`
    );
    a.appendChild(l);
    const f = di();
    f.wrap.style.cssText = ur, a.appendChild(f.wrap);
    const h = j(
      "div",
      `${ur}overflow:auto;padding:16px 20px;background:${O.panelBg};color:${O.textPrimary};font-size:${Y.body};`
    );
    a.appendChild(h);
    const g = r ? Oi(r) : null, $ = [
      ["Name", o || mt, !1],
      ["SMILES", s || mt, !0],
      ["Charge", i == null ? mt : String(i), !1],
      ["Atoms", g ? String(g.atoms) : mt, !1],
      ["Bonds", g ? String(g.bonds) : mt, !1]
    ], y = j("div", `display:grid;grid-template-columns:auto minmax(0,1fr);gap:${se.xl} 20px;align-items:baseline;`);
    h.appendChild(y);
    for (const [F, A, I] of $) {
      y.appendChild(
        j(
          "div",
          `font-size:${Y.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;color:${O.textMuted2};`,
          F
        )
      );
      const G = j(
        "div",
        `user-select:text;cursor:text;overflow-wrap:anywhere;color:${O.textPrimary}` + (I ? `;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${Y.small};` : ""),
        A
      );
      G.title = A, y.appendChild(G);
    }
    const S = fi(t), _ = j("div", $r, o || "Unnamed molecule");
    S && a.appendChild(_);
    const p = $t(
      "small-molecule.mode",
      "2d",
      Ts.map((F) => F.id)
    ), v = gt("small-molecule.spin", !1);
    let d = p.get(), m = v.get(), k = null, c = null;
    const u = () => {
      try {
        k?.spin(m && pt(d) ? "y" : !1);
      } catch {
      }
    }, b = (F) => {
      d = F, l.style.visibility = d === "2d" ? "visible" : "hidden", f.wrap.style.visibility = pt(d) ? "visible" : "hidden", h.style.visibility = d === "info" ? "visible" : "hidden", _.style.display = d === "info" || !S ? "none" : "block", T.disabled = !pt(d), T.style.opacity = pt(d) ? "1" : "0.5", pt(d) && k && (k.setStyle({}, kr[d]), k.resize(), k.render()), u();
    }, x = j("div", ri), P = qn(Ts, d, (F) => b(F), p), T = li(
      "Spin",
      m,
      (F) => {
        m = F, u();
      },
      { title: "Toggle continuous rotation", remember: v }
    );
    return P.insertBefore(T, P.lastElementChild), x.appendChild(P), a.appendChild(x), b(d), !r || !r.trim() ? (l.appendChild(ue("No molecule provided")), f.container.appendChild(ue("No molecule provided")), {}) : (l.appendChild(ue("Loading 2D depiction...")), Wn().then((F) => {
      const A = Ti(F, r, Fs, et.layout);
      A ? Fi(l, A, Fs) : l.replaceChildren(ue("Failed to parse molecule", !0));
    }).catch((F) => {
      l.replaceChildren(ue(`RDKit failed to load: ${he(F)}`, !0));
    }), f.container.appendChild(ue("Loading 3D viewer...")), Lr().then(() => {
      f.container.replaceChildren(), k = rt.createViewer(f.container, { backgroundColor: Nt.viewer }), k.addModel(mu(r), "sdf"), k.setStyle({}, kr[pt(d) ? d : "stick"]), k.zoomTo(), k.render(), c = Br(f.container, k), u();
    }).catch((F) => {
      f.container.replaceChildren(ue(`3D render failed: ${he(F)}`, !0));
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
Re("gufe-small-molecule", gu);
const ji = ["HOH", "WAT", "SOL", "TIP3"], js = { hetflag: !1 }, yu = { hetflag: !0 }, $u = { resn: ji }, Ke = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function vu(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, o = 0, s = 0, i = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const f = l.slice(0, 6);
    if (f === "ENDMDL") break;
    if (f !== "ATOM  " && f !== "HETATM") continue;
    r++, f === "HETATM" && o++;
    const h = l.slice(17, 20).trim(), g = l.slice(21, 22).trim() || "_", $ = l.slice(22, 26).trim(), y = l.slice(26, 27).trim();
    ji.indexOf(h) !== -1 && s++, t.add(g), n.add(`${g}|${$}${y}|${h}`);
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
function bu(e) {
  return `${wt(e.chains)} chains · ${wt(e.residues)} residues · ${wt(e.atoms)} atoms · ${wt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${wt(e.waters)} water)` : "");
}
function wu(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function zs(e, t, n, r) {
  const o = r || (() => {
  }), s = wu(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    js,
    t.rep === "stick" ? { stick: { radius: Ke.stick.radius, ...s } } : t.rep === "sphere" ? { sphere: { scale: Ke.sphere.scale, ...s } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...s } }
    )
  ), e.setStyle(
    yu,
    t.hetero ? {
      stick: { radius: Ke.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ke.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    $u,
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
        e.addSurface(rt.SurfaceType.VDW, { opacity: Ke.surfaceOpacity, ...s }, js)
      ).then(() => {
        o(null), e.render();
      }).catch((i) => o(`Surface failed: ${he(i)}`, "error"));
    } catch (i) {
      o(`Surface failed: ${he(i)}`, "error");
    }
  }, 30);
}
const Is = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], Ds = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class _u extends Ae {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, o = n.name ?? "", s = n.type !== "ProteinComponentViz", i = $t(
      "protein.representation",
      "cartoon",
      Is.map((x) => x.id)
    ), a = $t(
      "protein.color",
      "chain",
      Ds.map((x) => x.id)
    ), l = gt("protein.waters", s), f = gt("protein.hetero", !0), h = gt("protein.spin", !1), g = {
      rep: i.get(),
      color: a.get(),
      waters: l.get(),
      hetero: f.get(),
      spin: h.get()
    };
    let $ = null, y = null, S = null;
    const _ = j(
      "div",
      Pr.top
    );
    t.appendChild(_), _.appendChild(
      j("span", `font-weight:700;font-size:${Y.heading};letter-spacing:.02em;color:${O.titleColor};`, o || "Protein")
    );
    const p = (x) => j("span", `font-size:${Y.small};color:${O.textMuted};`, x);
    _.appendChild(p("Style:")), _.appendChild(
      qn(
        Is,
        g.rep,
        (x) => {
          g.rep = x, b();
        },
        i
      )
    ), _.appendChild(p("Color:")), _.appendChild(
      Vn(
        Ds,
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
      ["spin", "Spin", "Rotate the view continuously", h, () => $?.spin(g.spin ? "y" : !1)]
    ];
    for (const [x, P, T, F, A] of d)
      v.appendChild(
        li(
          P,
          g[x],
          (I) => {
            g[x] = I, A();
          },
          { title: T, remember: F }
        )
      );
    v.appendChild(Ur(() => y?.reset()));
    const m = j("span", `margin-left:auto;font-size:${Y.small};white-space:nowrap;color:${O.textMuted2};`);
    _.appendChild(m);
    const k = di();
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
      $ && zs($, g, S, u);
    }
    if (!r || !r.trim())
      return u("No protein data - waiting for a PDB payload."), {};
    try {
      S = vu(r), m.textContent = bu(S);
    } catch (x) {
      u(`⚠ PDB parse error: ${he(x)}`, "error");
    }
    return u("Loading 3D viewer..."), Lr().then(() => {
      $ = rt.createViewer(k.container, { backgroundColor: Nt.viewer }), $.addModel(r, "pdb"), zs($, g, S, u), $.zoomTo(), $.spin(g.spin ? "y" : !1), $.render(), y = Br(k.container, $);
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
Re("gufe-protein", _u);
function Ot(e) {
  const t = /* @__PURE__ */ new Map();
  return Cr(e, t, /* @__PURE__ */ new Set()), t;
}
function Cr(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const o of e) Cr(o, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const o of r) {
      const s = o["gufe-key"];
      typeof s == "string" && s && !t.has(s) && t.set(s, o);
    }
  for (const o of Object.values(e)) Cr(o, t, n);
}
function We(e, t) {
  return t ? e.get(t) : void 0;
}
function _e(e, t, n) {
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
function Su(e, t, n, r, o) {
  const s = (i) => o === "keys" ? i["gufe-key"] : Je(i);
  return r === "nodes" ? e.filter((i) => n.has(i["gufe-key"])).map(s).join(`
`) : t.filter((i) => n.has(i.from["gufe-key"]) && n.has(i.to["gufe-key"])).map((i) => `${s(i.from)}, ${s(i.to)}`).join(`
`);
}
function ku(e, t) {
  navigator.clipboard?.writeText(e).catch(() => qs(e, t)), navigator.clipboard || qs(e, t);
}
function qs(e, t) {
  const n = j("textarea", `width:100%;height:80px;font-size:${Y.small};box-sizing:border-box;`);
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Cu(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = j("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function zi(e) {
  const { words: t } = e, n = $t(e.setting, "names", ["names", "keys"]), r = j("div", "display:flex;flex-direction:column;gap:6px;"), o = j("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${O.textMuted};`);
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
  const i = j("div", `font-size:${Y.tiny};line-height:1.5;color:${O.textMuted2};`), a = (h) => {
    i.textContent = h;
  }, l = j("div", "display:flex;gap:4px;"), f = [
    ["nodes", t.nodes, `Copy the selected ${t.nodes.plural}, one per line`],
    ["edges", t.edges, `Copy the ${t.edges.plural} between the selected ${t.nodes.plural}, one pair per line`]
  ];
  for (const [h, g, $] of f) {
    const y = j("button", `${vt}flex:1;`, g.button);
    y.title = $, y.onclick = (S) => {
      const _ = s.value, p = Su(e.nodes, e.edges, e.selected, h, _);
      if (!p) {
        a(
          e.selected.size === 0 ? `Nothing selected. Click one of the ${t.nodes.plural} above.` : h === "edges" ? `No ${t.edges.plural} between the ${e.selected.size} selected ${t.nodes.plural}. ${Gr}` : "Nothing to copy."
        );
        return;
      }
      const v = p.split(`
`).length;
      S.shiftKey ? (Cu(p, `selected-${g.plural}.txt`), a(`Saved ${v} ${g.plural} to a file.`)) : (ku(p, r), a(
        h === "edges" ? `Copied ${v} ${t.edges.plural}.` : `Copied ${e.selected.size} ${t.nodes.plural}.`
      ));
    }, l.appendChild(y);
  }
  return r.appendChild(l), r.appendChild(i), r.appendChild(j("div", `font-size:${Y.tiny};color:${O.textMuted2};`, "Shift-click to save as a file instead.")), { box: r, clearNote: () => a("") };
}
const Ii = "http://www.w3.org/2000/svg";
function ce(e, t = {}) {
  const n = document.createElementNS(Ii, e);
  for (const [r, o] of Object.entries(t)) n.setAttribute(r, String(o));
  return n;
}
function Vs(e, t) {
  const n = document.createElementNS(Ii, "title");
  return n.textContent = t, e.appendChild(n), e;
}
const Eu = 3;
function Di(e, t, n = t) {
  if (!e.length) return null;
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const a of e)
    r = Math.min(r, a.x), o = Math.min(o, a.y), s = Math.max(s, a.x), i = Math.max(i, a.y);
  return !Number.isFinite(r) || !Number.isFinite(o) ? null : { minX: r - t, minY: o - n, maxX: s + t, maxY: i + n };
}
const xu = { min: 0.15, max: 5 };
function qi(e, t, n) {
  const r = n.margin ?? 0, o = n.zoom ?? xu;
  let s = 1, i = 0, a = 0;
  const l = () => {
    t.setAttribute("transform", `translate(${i},${a}) scale(${s})`), n.onTransform?.(s, i, a);
  }, f = () => {
    const d = e.getBoundingClientRect();
    return {
      width: d.width || Number(e.getAttribute("width")) || e.clientWidth || 800,
      height: d.height || Number(e.getAttribute("height")) || e.clientHeight || 600
    };
  }, h = () => {
    s = 1, i = 0, a = 0;
    const d = n.bounds();
    if (!d) {
      l();
      return;
    }
    const { width: m, height: k } = f();
    s = Math.min(1, m / (d.maxX - d.minX + r * 2), k / (d.maxY - d.minY + r * 2)), i = m / 2 - (d.minX + d.maxX) / 2 * s, a = k / 2 - (d.minY + d.maxY) / 2 * s, l();
  }, $ = Ai(e, {
    onZoom: (d) => {
      const m = e.getBoundingClientRect(), k = d.clientX - m.left, c = d.clientY - m.top, u = Math.min(o.max / s, Math.max(o.min / s, Ri(d)));
      return i = k - (k - i) * u, a = c - (c - a) * u, s *= u, l(), u !== 1;
    },
    hint: n.hint ?? "Click the graph or hold Ctrl to zoom"
  });
  let y = null, S = !1;
  const _ = (d) => {
    y = { x: d.clientX - i, y: d.clientY - a, from: { x: d.clientX, y: d.clientY } }, S = !1;
  }, p = (d) => {
    y && (Math.hypot(d.clientX - y.from.x, d.clientY - y.from.y) > Eu && (S = !0), i = d.clientX - y.x, a = d.clientY - y.y, l());
  }, v = () => {
    y = null;
  };
  return e.addEventListener("pointerdown", _), e.addEventListener("pointermove", p), e.addEventListener("pointerup", v), e.addEventListener("pointercancel", v), e.addEventListener("pointerleave", v), {
    fit: h,
    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: h,
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
      $.cleanup(), e.removeEventListener("pointerdown", _), e.removeEventListener("pointermove", p), e.removeEventListener("pointerup", v), e.removeEventListener("pointercancel", v), e.removeEventListener("pointerleave", v);
    }
  };
}
const Pu = ["x", "y", "vx", "vy", "fx", "fy", "index"];
function Vi(e) {
  const t = { ...e };
  for (const n of Pu) delete t[n];
  return t;
}
const Au = 8, Ru = 64, Nu = () => new Promise((e) => setTimeout(e, 0));
function Er(e) {
  if (e)
    try {
      e.delete();
    } catch {
    }
}
function Mu(e, t, n, r) {
  let o = null;
  try {
    if (o = e.get_mol(n, JSON.stringify({ removeHs: r })), !o || !o.get_substruct_matches) return null;
    const s = o.get_substruct_matches(t), i = JSON.parse(s || "[]");
    if (!Array.isArray(i)) return [];
    const a = /* @__PURE__ */ new Set();
    for (const l of i) {
      const f = l.atoms;
      if (Array.isArray(f))
        for (const h of f) typeof h == "number" && a.add(h);
    }
    return [...a].sort((l, f) => l - f);
  } catch (s) {
    return console.warn("[gufe-viz] SMARTS match threw -", he(s)), null;
  } finally {
    Er(o);
  }
}
function Li(e, t, n = !0) {
  const r = /* @__PURE__ */ new Map();
  let o = 0;
  return { run: async (i) => {
    const a = i.trim(), l = ++o;
    if (!a) return { status: "cleared" };
    const f = r.get(a);
    if (f) return { status: "ok", matched: f, unreadable: 0 };
    const h = await e();
    if (l !== o) return { status: "superseded" };
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
      return Er(g), { status: "unsupported" };
    const $ = /* @__PURE__ */ new Map();
    let y = 0;
    try {
      let S = performance.now(), _ = 0;
      for (let p = 0; p < t.length; p++) {
        const v = t[p] ? Mu(h, g, t[p], n) : null;
        if (v ? v.length && $.set(p, v) : y++, !(++_ < Ru && performance.now() - S < Au)) {
          if (await Nu(), l !== o) return { status: "superseded" };
          _ = 0, S = performance.now();
        }
      }
    } finally {
      Er(g);
    }
    return r.set(a, $), { status: "ok", matched: $, unreadable: y };
  }, cancel: () => void ++o };
}
const Ou = 250;
function Bi(e) {
  const t = j("div", "display:flex;flex-direction:column;gap:8px;"), n = j("input", `${Dn}width:100%;box-sizing:border-box;`);
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
    e.remember.set(n.value), window.clearTimeout(i), i = window.setTimeout(() => s(n.value), Ou);
  }, {
    element: t,
    apply: () => {
      n.value.trim() && s(n.value);
    }
  };
}
function Mn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let o = 0; o < 3; o++)
      n[r * 3 + o] = e[r * 3] * t[o] + e[r * 3 + 1] * t[3 + o] + e[r * 3 + 2] * t[6 + o];
  return n;
}
function Ls(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Tu(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function Bs(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const s = [[0, 1], [0, 2], [1, 2]];
    for (let i = 0; i < 3; i++) {
      const a = s[i][0], l = s[i][1], f = t[a * 3 + l];
      if (Math.abs(f) < 1e-14) continue;
      const h = t[a * 3 + a], g = t[l * 3 + l], $ = (g - h) / (2 * f);
      let y;
      Math.abs($) > 1e10 ? y = 1 / (2 * $) : y = ($ >= 0 ? 1 : -1) / (Math.abs($) + Math.sqrt($ * $ + 1));
      const S = 1 / Math.sqrt(1 + y * y), _ = y * S;
      t[a * 3 + a] = h - y * f, t[l * 3 + l] = g + y * f, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let p = 0; p < 3; p++)
        if (p !== a && p !== l) {
          const v = t[p * 3 + a], d = t[p * 3 + l];
          t[p * 3 + a] = S * v - _ * d, t[a * 3 + p] = t[p * 3 + a], t[p * 3 + l] = _ * v + S * d, t[l * 3 + p] = t[p * 3 + l];
        }
      for (let p = 0; p < 3; p++) {
        const v = n[p * 3 + a], d = n[p * 3 + l];
        n[p * 3 + a] = S * v - _ * d, n[p * 3 + l] = _ * v + S * d;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Fu(e, t) {
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
  const i = Ls(s), a = Mn(i, s), l = Mn(s, i);
  let f = Bs(a), h = Bs(l);
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
  f = g(f), h = g(h);
  const $ = f.vectors, y = h.vectors;
  for (let m = 0; m < 3; m++) {
    const k = $[m], c = $[3 + m], u = $[6 + m], b = s[0] * k + s[1] * c + s[2] * u, x = s[3] * k + s[4] * c + s[5] * u, P = s[6] * k + s[7] * c + s[8] * u, T = y[m], F = y[3 + m], A = y[6 + m];
    b * T + x * F + P * A < 0 && (y[m] = -T, y[3 + m] = -F, y[6 + m] = -A);
  }
  const S = Ls($);
  let _ = Mn(y, S);
  Tu(_) < 0 && (y[2] = -y[2], y[5] = -y[5], y[8] = -y[8], _ = Mn(y, S));
  const p = _[0] * o[0] + _[1] * o[1] + _[2] * o[2], v = _[3] * o[0] + _[4] * o[1] + _[5] * o[2], d = _[6] * o[0] + _[7] * o[1] + _[8] * o[2];
  return { R: _, t: [r[0] - p, r[1] - v, r[2] - d] };
}
function ju(e, t, n) {
  const r = e[0], o = e[1], s = e[2];
  return [
    t[0] * r + t[1] * o + t[2] * s + n[0],
    t[3] * r + t[4] * o + t[5] * s + n[1],
    t[6] * r + t[7] * o + t[8] * s + n[2]
  ];
}
const Us = `
`, fr = 4;
function Ks(e, t, n) {
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
function zu(e, t, n) {
  const r = [], o = [];
  for (const [h, g] of n) {
    const $ = e[g], y = t[h];
    !$ || !y || (r.push($), o.push(y));
  }
  if (r.length < 2) return null;
  const s = (h) => {
    let g = 0, $ = 0;
    for (const y of h)
      g += y[0], $ += y[1];
    return [g / h.length, $ / h.length];
  }, i = s(r), a = s(o);
  let l = null, f = -1 / 0;
  for (const h of [!1, !0]) {
    let g = 0, $ = 0;
    for (let d = 0; d < r.length; d++) {
      const m = (h ? -1 : 1) * (r[d][0] - i[0]), k = r[d][1] - i[1], c = o[d][0] - a[0], u = o[d][1] - a[1];
      g += m * u - k * c, $ += m * c + k * u;
    }
    const y = Math.hypot(g, $);
    if (y <= f) continue;
    f = y;
    const S = Math.atan2(g, $), _ = Math.cos(S), p = Math.sin(S), v = (h ? -1 : 1) * i[0];
    l = {
      cos: _,
      sin: p,
      mirror: h,
      tx: a[0] - (_ * v - p * i[1]),
      ty: a[1] - (p * v + _ * i[1])
    };
  }
  return l;
}
function Iu(e, t) {
  const n = (e.mirror ? -1 : 1) * t[0], r = t[1];
  return [e.cos * n - e.sin * r + e.tx, e.sin * n + e.cos * r + e.ty];
}
function Du(e, t, n) {
  const r = Oi(e);
  if (!r) return e;
  const o = e.replace(/\r/g, "").split(Us);
  if (o[3].indexOf("V3000") !== -1) return e;
  for (let s = 0; s < r.atoms; s++) {
    const i = o[fr + s], a = t[s];
    if (i == null || !a) return e;
    o[fr + s] = a[0].toFixed(4).padStart(10) + a[1].toFixed(4).padStart(10) + 0 .toFixed(4).padStart(10) + i.substring(30);
  }
  if (n)
    for (let a = 0; a < r.bonds; a++) {
      const l = fr + r.atoms + a, f = o[l];
      if (f == null) break;
      const h = parseInt(f.substring(9, 12), 10);
      h !== 1 && h !== 6 || (o[l] = f.substring(0, 9) + String(h === 1 ? 6 : 1).padStart(3) + f.substring(12));
    }
  return o.join(Us);
}
function qu(e, t, n) {
  try {
    const r = (i) => Sr(i).coords.map((a) => [a[0], a[1]]), o = r(t), s = zu(o, r(e), n);
    return s ? Du(
      t,
      o.map((i) => Iu(s, i)),
      s.mirror
    ) : t;
  } catch (r) {
    return console.warn("[gufe-viz] could not align a depiction to its partner -", he(r)), t;
  }
}
function Vu(e, t, n, r, o) {
  const s = Ks(e, t, r), i = Ks(e, n, r);
  return !o || r === "conformer" ? { left: s, right: i } : { left: s, right: qu(s, i, o) };
}
const Lu = {
  core: "0xaaaaaa",
  pairLine: "0xffee55"
}, Bu = {
  core: "0x888888",
  pairLine: "0xd9a300"
};
function Uu() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const pr = Uu() ? Lu : Bu, Hs = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], hr = 420, De = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04
}, mr = { gap: 2.5, minLiftFraction: 0.6 }, Ku = 24, Rt = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5
};
function Gs(e, t, n) {
  const r = [], o = [], s = [];
  for (let i = 0; i < t.length; i++) {
    const a = e.get(i);
    a === void 0 ? r.push(i) : t[i] !== n[a] ? o.push(i) : s.push(i);
  }
  return { atoms: r, elements: o, mapped: s };
}
function Hu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function Ui(e, t) {
  const n = _e(t, e.componentA, "SmallMoleculeComponentViz"), r = _e(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: Hr(t, [e.componentA, e.componentB]) };
}
function Ws(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let o = 0; o < 3; o++)
      r[o] < t[o] && (t[o] = r[o]), r[o] > n[o] && (n[o] = r[o]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function Gu(e, t) {
  const n = Ws(e), r = Ws(t);
  let o = 0;
  n.span[1] < n.span[o] && (o = 1), n.span[2] < n.span[o] && (o = 2);
  const s = Math.max(n.span[0], n.span[1], n.span[2]), i = n.max[o] - r.min[o] + mr.gap, a = mr.minLiftFraction * s + mr.gap;
  return { axis: o, lift: Math.max(i, a) };
}
function Wu(e, t) {
  let n = 0;
  for (const o of [e, t]) {
    let s = 1 / 0;
    for (const i of o)
      i[0] < s && (s = i[0]), i[0] - s > n && (n = i[0] - s);
  }
  const r = Math.round(n * 10) / 10;
  return (r > Rt.minSpread ? r : Rt.minSpread) * Rt.spreadFactor;
}
function Ju(e, t) {
  const n = vd, o = (t > 1 ? Math.min(Math.max(e / (t - 1), 0), 1) : 0) * (n.length - 1), s = Math.floor(o), i = Math.min(s + 1, n.length - 1), a = o - s;
  let l = "0x";
  for (let f = 0; f < 3; f++) {
    const h = ($) => parseInt($.slice(1 + f * 2, 3 + f * 2), 16), g = Math.round(h(n[s]) + (h(n[i]) - h(n[s])) * a);
    l += g.toString(16).padStart(2, "0");
  }
  return l;
}
class Yu extends Ae {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = Ot(n), o = _e(r, n.componentA, "SmallMoleculeComponentViz"), s = _e(r, n.componentB, "SmallMoleculeComponentViz");
    if (!o || !s)
      return t.appendChild(
        ue("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const i = Je(o), a = Je(s), l = Hu(n);
    let f, h;
    try {
      f = Sr(o.sdf, i), h = Sr(s.sdf, a);
    } catch (H) {
      return t.appendChild(ue(`Could not read a molecule: ${he(H)}`, !0)), {};
    }
    const g = /* @__PURE__ */ new Map();
    for (const [H, q] of l) g.set(q, H);
    const $ = Gs(l, f.symbols, h.symbols), y = Gs(g, h.symbols, f.symbols), S = fi(t), _ = j("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(_);
    const p = j("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    _.appendChild(p);
    const v = $t("atom-mapping.mode", "plain", Hs.map((H) => H.id));
    let d = v.get();
    const m = j(
      "div",
      ri
    );
    m.appendChild(
      qn(
        Hs,
        d,
        (H) => {
          d = H, X();
        },
        v
      )
    ), _.appendChild(m);
    let k = [], c = 0, u = !0;
    const b = () => {
      c && cancelAnimationFrame(c), c = 0;
      for (const H of k) {
        H.interaction?.cleanup();
        try {
          H.viewer?.clear();
        } catch {
        }
      }
      k = [], p.replaceChildren();
    }, x = (H) => {
      const q = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), R = j("div", "flex:1;position:relative;min-height:0;");
      R.dataset.gufeViewer = "", q.appendChild(R), S && q.appendChild(j("div", $r, H)), p.appendChild(q);
      const D = { container: R, viewer: null, interaction: null };
      return k.push(D), D;
    }, P = () => {
      if (k.length < 2) return;
      const H = k.map(() => "");
      let q = !1;
      const R = () => {
        if (u) {
          if (!q)
            for (let D = 0; D < k.length; D++) {
              const M = k[D].viewer;
              if (!M) continue;
              const w = JSON.stringify(M.getView());
              if (w !== H[D]) {
                q = !0;
                for (let C = 0; C < k.length; C++)
                  C !== D && k[C].viewer && (k[C].viewer.setView(M.getView()), k[C].viewer.render()), H[C] = w;
                q = !1;
                break;
              }
            }
          c = requestAnimationFrame(R);
        }
      };
      c = requestAnimationFrame(R);
    }, T = (H, q) => {
      const R = rt.createViewer(H.container, { backgroundColor: Nt.viewer });
      for (const { mol: D } of q) R.addModel(hu(D), "sdf");
      return H.viewer = R, R;
    }, F = (H) => {
      H.viewer && (H.interaction = Br(H.container, H.viewer));
    }, A = () => {
      for (const H of [f, h]) {
        const q = x(H.name), R = T(q, [{ mol: H }]);
        R.setStyle(
          {},
          { stick: { radius: De.stick, colorscheme: "Jmol" }, sphere: { scale: De.sphere, colorscheme: "Jmol" } }
        ), R.zoomTo(), R.render(), F(q);
      }
      P();
    }, I = () => {
      const H = et, q = Rs(H.customSpec), R = [
        { mol: f, uniques: $, side: "left", custom: q.left },
        { mol: h, uniques: y, side: "right", custom: q.right }
      ];
      for (const D of R) {
        const M = x(D.mol.name), w = T(M, [{ mol: D.mol }]);
        w.setStyle(
          {},
          { stick: { radius: De.stick, color: pr.core }, sphere: { scale: De.sphere, color: pr.core } }
        );
        const C = (z, V) => {
          w.addStyle(
            { serial: z + 1 },
            {
              stick: { radius: De.markStick, color: Ns(V) },
              sphere: { scale: De.markSphere, color: Ns(V) }
            }
          );
        };
        for (const z of Ms(H, D.mol, D.uniques, D.side))
          for (const V of z.atoms) C(V, z.color);
        for (const z of D.custom)
          z < D.mol.symbols.length && C(z, H.customColor);
        w.zoomTo(), w.render(), F(M);
      }
      P();
    }, G = () => {
      const H = x(`${i} (left), both overlaid (middle), ${a} (right)`), q = Wu(f.coords, h.coords), R = (Q, Z) => ({
        ...Q,
        coords: Q.coords.map(([E, N, B]) => [E + Z, N, B])
      }), D = R(f, -q), M = R(h, q), w = T(H, [{ mol: D }, { mol: M }, { mol: f }, { mol: h }]);
      w.setStyle({}, { stick: {} });
      const C = Array.from(l);
      C.forEach(([Q, Z], E) => {
        const N = D.coords[Q], B = M.coords[Z];
        if (!N || !B) return;
        const K = Ju(E, C.length);
        for (const [J, te, re] of [N, B])
          w.addSphere({
            center: { x: J, y: te, z: re },
            radius: Rt.sphereRadius,
            color: K,
            alpha: Rt.sphereAlpha
          });
      }), w.zoomTo();
      const { clientWidth: z, clientHeight: V } = H.container, U = z - 2 * Ku;
      U > 0 && U < V && w.zoom(U / V), w.render(), F(H);
    }, ee = () => {
      const H = x(`${i} to ${a}  (${l.size} mapped pairs)`), q = [], R = [];
      for (const [Q, Z] of l) {
        const E = f.coords[Q], N = h.coords[Z];
        E && N && (q.push(E), R.push(N));
      }
      const D = Fu(q, R), M = h.coords.map((Q) => D ? ju(Q, D.R, D.t) : [...Q]), { axis: w, lift: C } = Gu(f.coords, M), z = {
        ...h,
        coords: M.map((Q) => {
          const Z = [Q[0], Q[1], Q[2]];
          return Z[w] += C, Z;
        })
      }, V = T(H, [{ mol: f }, { mol: z }]), U = {
        stick: { radius: De.stick, colorscheme: "Jmol" },
        sphere: { scale: De.pairSphere, colorscheme: "Jmol" }
      };
      V.setStyle({ model: 0 }, U), V.setStyle({ model: 1 }, U);
      for (const [Q, Z] of l) {
        const E = f.coords[Q], N = z.coords[Z];
        !E || !N || V.addCylinder({
          start: { x: E[0], y: E[1], z: E[2] },
          end: { x: N[0], y: N[1], z: N[2] },
          radius: De.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: pr.pairLine
        });
      }
      V.zoomTo(), w === 2 ? V.rotate(90, "x") : w === 0 && V.rotate(-90, "z"), V.render(), F(H);
    }, W = () => {
      const H = et, q = Rs(H.customSpec), D = [
        { mol: f, uniques: $, side: "left", custom: q.left },
        { mol: h, uniques: y, side: "right", custom: q.right }
      ].map((M) => {
        const w = j("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;"), C = j(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${Nt.canvas2D};`
        );
        return C.appendChild(ue("Loading 2D depiction...")), w.appendChild(C), S && w.appendChild(j("div", $r, M.mol.name)), p.appendChild(w), { box: C, side: M };
      });
      Wn().then((M) => {
        const w = ou(H, M), C = Vu(M, o.sdf, s.sdf, H.layout, H.alignPair ? l : null);
        for (const { box: z, side: V } of D) {
          const U = Ms(H, V.mol, V.uniques, V.side), Q = su(
            H,
            hr,
            U,
            V.custom,
            w,
            V.mol.symbols.length
          ), Z = iu(M, V.side === "left" ? C.left : C.right, hr, Q);
          if (z.replaceChildren(), !Z) {
            z.appendChild(ue("Failed to parse molecule", !0));
            continue;
          }
          Fi(z, Z, hr);
          const E = z.querySelector("svg");
          E && fu(E, V.mol, H, U, V.custom, w);
        }
      }).catch((M) => {
        for (const { box: w } of D)
          w.replaceChildren(ue(`RDKit failed to load: ${he(M)}`, !0));
      });
    }, ae = () => {
      const H = j("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      p.appendChild(H);
      const q = j("div", "display:flex;flex-direction:column;gap:2px;");
      q.appendChild(
        j(
          "div",
          `font-size:${Y.title};font-weight:${Le.bold};color:${Oe.title};`,
          n.name || `${i} to ${a}`
        )
      ), q.appendChild(j("div", `font-size:${Y.body};color:${Oe.faint};`, "LigandAtomMapping")), H.appendChild(q);
      const R = j("div", `display:flex;flex-wrap:wrap;gap:${se.lg} 16px;font-size:${Y.small};`);
      R.appendChild($e("mapped atoms", String(l.size))), R.appendChild(
        $e("element changes", String($.elements.length), et.modifiedColor)
      ), R.appendChild($e(`unique to ${i}`, String($.atoms.length), et.destroyedColor)), R.appendChild($e(`unique to ${a}`, String(y.atoms.length), et.createdColor)), R.appendChild($e(`atoms in ${i}`, String(f.symbols.length))), R.appendChild($e(`atoms in ${a}`, String(h.symbols.length))), R.appendChild($e("score", n.score == null ? mt : n.score.toFixed(3))), H.appendChild(R);
      const D = j("div", Zr, "Correspondence");
      H.appendChild(D);
      const M = j("div", Xr);
      M.textContent = l.size ? Array.from(l, ([C, z]) => `${C} -> ${z}`).join("   ") : "This mapping relates no atoms at all.", H.appendChild(M);
      const w = Object.entries(n.annotations ?? {}).filter(([C]) => C !== "score");
      if (w.length) {
        H.appendChild(j("div", Zr, "Annotations"));
        const C = j("div", `${Xr}color:${Oe.faint};`);
        for (const [z, V] of w)
          C.appendChild(j("div", "", `${z}: ${String(V)}`));
        H.appendChild(C);
      }
      H.appendChild(
        j(
          "div",
          `${Xi}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, X = () => {
      if (b(), d === "info") {
        ae();
        return;
      }
      if (d === "2d") {
        W();
        return;
      }
      p.appendChild(ue("Loading 3D viewer...")), Lr().then(() => {
        u && (p.replaceChildren(), d === "colored" ? I() : d === "openfe" ? G() : d === "lines" ? ee() : A());
      }).catch((H) => {
        p.replaceChildren(ue(`3D render failed: ${he(H)}`, !0));
      });
    };
    return X(), {
      onResize() {
        for (const H of k)
          H.viewer && (H.viewer.resize(), H.viewer.render());
      },
      cleanup() {
        u = !1, b();
      }
    };
  }
}
Re("gufe-atom-mapping", Yu);
const Js = ["Force-directed", "Circular", "Radial"], Xu = "ligand-network", Zu = "Click a ligand or an edge to see it.";
function Qu(e) {
  const { index: t, from: n, to: r, ...o } = e;
  return o;
}
function ef(e) {
  return Vi(e);
}
const Ys = (e) => Math.round(e * 100) / 100;
function tf(e, t) {
  if (!e || typeof e != "object") return null;
  const n = e, r = (i) => typeof i == "number" && Number.isFinite(i);
  if (!r(n.scale) || n.scale <= 0 || !r(n.tx) || !r(n.ty) || !Array.isArray(n.nodes) || n.nodes.length !== t || !n.nodes.every((i) => Array.isArray(i) && i.length === 2 && i.every(r))) return null;
  const o = r(n.selected) ? Math.trunc(n.selected) : -1, s = n.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: n.nodes, scale: n.scale, tx: n.tx, ty: n.ty, selected: o, selectedKind: s };
}
function nf(e, t) {
  e.forEach((n, r) => {
    n.x = t[r][0], n.y = t[r][1], n.fx !== void 0 && (n.fx = n.x), n.fy !== void 0 && (n.fy = n.y);
  });
}
const Et = { initial: 0.58, min: 0.25, max: 0.8 }, He = 38, On = 200, Ki = 4, rf = 14, of = 18, Pe = {
  fontSize: 11,
  below: He - Ki + 12,
  minFontSize: 7,
  insideWidth: (He - 6) * 2
}, Xs = 1.5, sf = 6.5, af = 0.9, cf = 14, gr = { size: 8, clearance: 8 }, lf = { fontSize: 10 }, df = 0.4, uf = wr(O.netMatchAtom), xt = { padding: 4, opacity: 0.95 }, ff = 3, yt = [
  { id: "structures", from: 1.1, disc: !1, structure: !0, name: "below", initials: !1, edgeScores: !0 },
  { id: "names", from: 0.5, disc: !0, structure: !1, name: "inside", initials: !1, edgeScores: !0 },
  { id: "shape", from: 0, disc: !0, structure: !1, name: "none", initials: !0, edgeScores: !1 }
], pf = (e) => yt.find((t) => e >= t.from) ?? yt[yt.length - 1], hf = (e) => yt[Math.min(yt.indexOf(e) + 1, yt.length - 1)], Tn = 200, mf = 24, yr = { node: 0.12, edge: 0.06 }, gf = 1.8, Se = {
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
function yf(e) {
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
function $f(e) {
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
      refX: He + gr.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: gr.size,
      markerHeight: gr.size,
      orient: "auto"
    });
    return s.appendChild(ce("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(s), o;
  };
}
function vf(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function bf(e) {
  const [t, n] = O.netEdgeRamp.map(vf), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((s, i) => Math.round(s + (n[i] - s) * r)).join(",")})`;
}
const qe = Je, wf = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function _f(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = [], o = (g) => (e.matched().get(g) ?? []).join(","), s = (g, $) => {
    if (t.has($) || n.has($)) return;
    const y = e.nodes[$], S = e.matched().get($), _ = y.sdf && Ti(
      g,
      y.sdf,
      On,
      et.layout,
      S && { atoms: S, color: uf, radius: df }
    );
    if (!_) {
      n.add($);
      return;
    }
    const p = new DOMParser().parseFromString(_, "image/svg+xml").documentElement;
    if (!p || p.nodeName.toLowerCase() === "parsererror") {
      n.add($);
      return;
    }
    const v = (He - Ki) * 2 / On, d = e.depictionGroups[$];
    d.setAttribute(
      "transform",
      `translate(${-v * On / 2},${-v * On / 2}) scale(${v})`
    );
    let m = 0;
    for (const k of Array.from(p.childNodes)) {
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
    $.setAttribute("font-size", String(Pe.fontSize));
    let y = 0;
    try {
      y = $.getBBox().width;
    } catch {
      return Pe.fontSize;
    }
    if (!y) return Pe.fontSize;
    const S = Pe.fontSize * Pe.insideWidth / y;
    return a[g] = Math.max(Pe.minFontSize, Math.min(Pe.fontSize, S)), a[g];
  }, f = (g, $) => {
    const y = $.structure && !t.has(g) ? hf($) : $;
    e.depictionGroups[g].setAttribute("display", y.structure ? "inline" : "none");
    const S = e.matched().has(g), _ = e.circles[g];
    _.setAttribute("fill", y.disc ? S ? O.netMatchFill : O.netNodeFill : "none"), _.setAttribute("stroke", y.disc ? S ? O.netMatchStroke : O.netNodeStroke : "none"), e.initials[g].setAttribute("display", y.initials ? "inline" : "none");
    const p = e.captions[g];
    if (p.setAttribute("fill", S ? O.netMatchStroke : O.netNodeCaption), p.setAttribute("display", y.name === "none" ? "none" : "inline"), y.name === "none") return;
    const v = y.name === "inside";
    p.setAttribute("y", v ? "0" : String(Pe.below)), p.setAttribute("dominant-baseline", v ? "middle" : "auto"), p.setAttribute("font-size", String(v ? l(g, p) : Pe.fontSize));
  };
  return { apply: (g, $, y) => {
    const S = pf(g);
    e.stage.setAttribute("data-detail", S.id), e.edgeLabels.setAttribute("display", S.edgeScores ? "inline" : "none");
    for (let d = 0; d < e.nodes.length; d++) f(d, S);
    if (!S.structure) return;
    const { width: _, height: p } = e.viewport(), v = [];
    e.nodes.forEach((d, m) => {
      if (t.has(m) || n.has(m)) return;
      const k = d.x * g + $, c = d.y * g + y;
      k < -Tn || c < -Tn || k > _ + Tn || c > p + Tn || v.push(m);
    }), v.length && e.rdkit().then((d) => {
      if (d)
        for (const m of v)
          s(d, m), f(m, S);
    }).catch(() => {
    });
  }, drawn: () => t.size, forget: i };
}
function Sf(e) {
  const t = At("ligand-network.query"), n = Ar("ligand-network.minScore", 0, 0, 1), r = j("div", ei), o = j("input", `${Dn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), r.appendChild(o);
  const s = Bi({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: At("ligand-network.smarts"),
    run: (_) => e.match(_),
    describe: (_) => {
      const p = _.unreadable ? `, ${_.unreadable} could not be read` : "";
      return `${_.matched.size} of ${e.nodes.length} ligands match${p}`;
    }
  });
  r.appendChild(s.element);
  const i = j("div", `display:flex;align-items:center;gap:8px;font-size:${Y.small};color:${O.textMuted};`), a = j("span", `min-width:28px;color:${O.textPrimary};`, "0.00"), l = j("input", "flex:1;");
  l.type = "range", l.min = "0", l.max = "1", l.step = "0.01", l.value = String(n.get()), e.filter.minScore = Number(l.value), l.setAttribute("aria-label", "Hide mappings scoring below this"), i.appendChild(j("span", "", "score >=")), i.appendChild(l), i.appendChild(a), r.appendChild(i);
  const f = j("div", `font-size:${Y.small};color:${O.textMuted2};`);
  r.appendChild(f);
  const h = j("div", ti);
  r.appendChild(h), r.appendChild(j("div", `font-size:${Y.tiny};line-height:1.5;color:${O.textMuted2};`, Gr));
  const g = zi({
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
  const $ = j("button", `${vt}width:100%;`, "Clear selection");
  $.onclick = () => {
    e.selected.clear(), S(), e.refresh();
  }, r.appendChild($);
  const y = (_) => {
    const p = e.query.text.trim().toLowerCase();
    return p ? qe(_).toLowerCase().includes(p) || (_.smiles ?? "").toLowerCase().includes(p) || _["gufe-key"].toLowerCase().includes(p) : !0;
  }, S = () => {
    g.clearNote(), h.replaceChildren();
    const _ = e.nodes.map((p, v) => ({ node: p, index: v })).filter(({ node: p }) => y(p));
    f.textContent = `${_.length} of ${e.nodes.length} ligands`;
    for (const { node: p, index: v } of _) {
      const d = p["gufe-key"], m = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Y.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? O.cardBorderActive : O.cardBorder};background:${e.selected.has(d) ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), k = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", qe(p));
      k.title = `${qe(p)}
${p.smiles ?? ""}`, m.appendChild(k), m.onclick = (c) => {
        c.shiftKey || c.metaKey || c.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus(v)), S(), e.refresh();
      }, h.appendChild(m);
    }
    _.length || h.appendChild(j("div", `font-size:${Y.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), S(), e.refresh();
  }, l.oninput = () => {
    e.filter.minScore = Number(l.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, S(), s.apply(), r;
}
class kf extends Ae {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = Ot(n), o = [];
    let s = 0;
    for (const E of n.nodes ?? []) {
      const N = _e(r, E, "SmallMoleculeComponentViz");
      if (!N) {
        s++;
        continue;
      }
      o.push({ ...N, x: 0, y: 0 });
    }
    const i = new Map(o.map((E) => [E["gufe-key"], E])), a = [];
    let l = 0;
    for (const E of n.edges ?? []) {
      const N = i.get(E.componentA), B = i.get(E.componentB);
      if (!N || !B) {
        l++;
        continue;
      }
      a.push({ ...E, index: a.length, from: N, to: B });
    }
    const f = bt(n.name || "Ligand network");
    f.statsEl.appendChild($e("ligands", String(o.length))), f.statsEl.appendChild($e("mappings", String(a.length))), t.appendChild(f);
    const h = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const g = /* @__PURE__ */ new Set(), $ = { minScore: 0 }, y = { text: "" };
    let S = () => {
    }, _ = null;
    const p = () => _ ??= Wn().catch((E) => (console.warn("[gufe-viz] RDKit failed to load:", he(E)), null)), v = Li(
      p,
      o.map((E) => E.sdf ?? "")
    );
    let d = /* @__PURE__ */ new Map(), m = () => {
    };
    const k = async (E) => {
      const N = await v.run(E);
      return N.status === "superseded" || (d = N.status === "ok" ? N.matched : /* @__PURE__ */ new Map(), m()), N;
    }, c = mi(
      f,
      () => Sf({
        nodes: o,
        edges: a,
        selected: g,
        filter: $,
        query: y,
        refresh: () => S(),
        // Jumping to a ligand and opening it are one action: the list is
        // how you find one you cannot see, and finding it is not the point.
        focus: (E) => {
          ee(E), Q({ kind: "ligand", index: E });
        },
        match: (E) => k(E)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => Z(),
        remember: gt("ligand-network.menuOpen", !1)
      }
    );
    c.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", h.appendChild(c.panel);
    let u = () => {
    };
    const b = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), x = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.appBg};`);
    h.appendChild(b), h.appendChild(
      pi(h, b, x, {
        min: Et.min,
        max: Et.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: Ar("ligand-network.canvasShare", Et.initial, Et.min, Et.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => u()
      })
    ), h.appendChild(x);
    const P = j("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${O.netCanvasBg};`);
    b.appendChild(P);
    const T = $t("ligand-network.layout", "Force-directed", Js), F = this.#n(
      (E) => Z(E),
      () => z(),
      T
    );
    b.appendChild(F.bar);
    const A = this.#e(x, r);
    if (!o.length)
      return P.appendChild(
        ue(
          s ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), A.message("Nothing to show."), {};
    s && nt(
      P,
      `${s} ligand${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && nt(P, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const I = p(), G = yf(P);
    let ee = () => {
    };
    const W = tf(sa(Xu), o.length);
    let ae = W && { scale: W.scale, tx: W.tx, ty: W.ty }, X = a.length ? { kind: "edge", index: 0 } : null;
    if (W && W.selected >= 0) {
      const E = W.selectedKind ?? "edge";
      W.selected < (E === "ligand" ? o.length : a.length) && (X = { kind: E, index: W.selected });
    }
    let H = () => ({ scale: 1, tx: 0, ty: 0 }), q = !1, R = null, D = T.get(), M = !1, w = !0, C = () => {
    }, z = () => {
    }, V = 0;
    const U = () => {
      if (!X) {
        A.message(a.length ? Zu : "Click a ligand to see it.");
        return;
      }
      X.kind === "edge" ? A.showMapping(a[X.index]) : A.showLigand(o[X.index]);
    }, Q = (E) => {
      X = E, U(), C();
    }, Z = (E = D) => {
      const N = q && E === D ? H() : null, B = ++V;
      D = E, R?.(), R = null, P.querySelectorAll("svg").forEach((re) => re.remove());
      const K = P.clientWidth || 800, J = P.clientHeight || 600;
      Cf(o, K, J, D, a), W && nf(o, W.nodes);
      const te = () => {
        if (!w || B !== V) return;
        const re = this.#t(P, o, a, K, J, Q, I, G);
        C = () => re.setSelected(X), z = re.reset, R = re.cleanup, ee = (de) => re.focusOn(de), H = re.transform, S = () => {
          const de = y.text.trim().toLowerCase(), me = g.size > 0 || de.length > 0, pe = /* @__PURE__ */ new Set();
          for (const Ee of o) {
            const Fe = Ee["gufe-key"], Ye = g.has(Fe) || de.length > 0 && (qe(Ee).toLowerCase().includes(de) || (Ee.smiles ?? "").toLowerCase().includes(de) || Fe.toLowerCase().includes(de));
            (!me || Ye) && pe.add(Fe);
          }
          const Te = /* @__PURE__ */ new Set();
          a.forEach((Ee, Fe) => {
            (Ee.score ?? 0) < $.minScore || !pe.has(Ee.from["gufe-key"]) || !pe.has(Ee.to["gufe-key"]) || Te.add(Fe);
          });
          const ve = me || $.minScore > 0;
          re.setEmphasis(ve ? pe : null, ve ? Te : null);
        }, m = () => re.setMatches(d), C(), S(), m();
        const fe = ae ?? N;
        fe ? (re.setTransform(fe.scale, fe.tx, fe.ty), ae = null) : re.fit(), q = !0;
      };
      if (D !== "Force-directed" || M || W) {
        te();
        return;
      }
      Ef(o, a, K, J).then((re) => {
        if (!(!w || B !== V)) {
          if (re) {
            te();
            return;
          }
          M = !0, F.picker.value = "Circular", nt(P, "d3 could not be loaded - showing the circular layout instead"), Z("Circular");
        }
      }, te);
    };
    return u = () => Z(), Z(), U(), {
      onResize: () => Z(),
      cleanup: () => {
        w = !1, v.cancel(), G.remove(), R?.();
      },
      viewState: () => ({
        nodes: o.map((E) => [Ys(E.x), Ys(E.y)]),
        ...H(),
        selected: X ? X.index : -1,
        selectedKind: X ? X.kind : "edge"
      })
    };
  }
  #n(t, n, r) {
    const o = j(
      "div",
      Pr.bottom
    ), s = j("div", `display:flex;align-items:center;gap:6px;font-size:${Y.small};color:${O.textMuted};`);
    s.appendChild(j("span", "", "score")), s.appendChild(
      j(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${O.netEdgeRamp.join(",")});`
      )
    ), s.appendChild(j("span", "", "0 -> 1")), o.appendChild(s), o.appendChild(j("label", `font-size:${Y.body};margin-left:auto;color:${O.textMuted};`, "Layout"));
    const i = Vn(
      Js.map((a) => ({ id: a, label: a })),
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
    const o = (i) => r.replaceChildren(ue(i)), s = (i, a) => {
      const l = document.createElement(i);
      l.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", l.payload = a, r.replaceChildren(l);
    };
    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (i) => s("gufe-atom-mapping", Ui(Qu(i), n)),
      showLigand: (i) => s("gufe-small-molecule", ef(i)),
      message: o
    };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #t(t, n, r, o, s, i, a, l) {
    const f = ce("svg", {
      class: "gufe-graph",
      width: o,
      height: s,
      style: "display:block;touch-action:none;"
    }), h = ce("g");
    f.appendChild(h), t.appendChild(f);
    const g = ce("defs"), $ = $f(g);
    f.appendChild(g);
    const y = [], S = ce("g"), _ = ce("g"), p = ce("g", { "pointer-events": "none" }), v = ce("g");
    h.append(S, _, p, v);
    for (const A of r) {
      const I = bf(A.score), G = Xs + (A.score ?? 0.5) * (sf - Xs), ee = ce("line", {
        stroke: O.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": G + xt.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), W = ce("line", {
        stroke: I,
        "stroke-width": G,
        "stroke-opacity": af,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${$(I)})`,
        "pointer-events": "none"
      }), ae = ce("line", { stroke: "transparent", "stroke-width": cf, style: "cursor:pointer;" });
      ae.addEventListener("click", (q) => {
        q.stopPropagation(), i({ kind: "edge", index: A.index });
      }), ae.addEventListener("mousemove", (q) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Ve(qe(A.from))} -&gt; ${Ve(qe(A.to))}</div>` + (A.score == null ? `<div style="color:${O.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${A.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Y.tiny};color:${O.textMuted2};">Click to see the mapping</div>`,
          q.offsetX,
          q.offsetY
        );
      }), ae.addEventListener("mouseleave", () => l.hide()), y.push(ee), S.append(ee, W), _.appendChild(ae);
      const X = ce("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": lf.fontSize,
        "font-weight": 600,
        fill: O.netEdgeLabel
      });
      X.textContent = A.score == null ? "" : A.score.toFixed(2);
      const H = ce("g", { class: "gufe-edge-label" });
      H.appendChild(X), p.appendChild(H);
    }
    const d = [], m = [], k = [], c = [], u = [], b = n.map((A) => {
      const I = ce("g", { class: "gufe-node", style: "cursor:grab;" });
      I.addEventListener("mousemove", (H) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${Ve(qe(A))}</div>` + (A.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${Ve(A.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Y.tiny};color:${O.textMuted2};overflow-wrap:anywhere;">${Ve(A["gufe-key"])}</div><div style="margin-top:4px;font-size:${Y.tiny};color:${O.textMuted2};">Click to see the ligand</div>`,
          H.offsetX,
          H.offsetY
        );
      }), I.addEventListener("mouseleave", () => l.hide());
      const G = ce("circle", {
        class: "gufe-node-halo",
        r: He + xt.padding,
        fill: "none",
        stroke: O.netHaloColor,
        "stroke-width": xt.padding * 2,
        opacity: 0,
        "pointer-events": "none"
      });
      I.appendChild(G), k.push(G);
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
        "font-size": of,
        "font-weight": 700,
        fill: O.netInitials,
        "pointer-events": "none"
      });
      ae.textContent = qe(A).slice(0, 2).toUpperCase(), I.appendChild(ae), c.push(ae);
      const X = ce("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: Pe.below,
        "font-size": Pe.fontSize,
        "font-weight": 600,
        fill: O.netNodeCaption,
        "pointer-events": "none"
      });
      return X.textContent = wf(qe(A), rf), X.setAttribute("display", "none"), u.push(X), I.appendChild(X), v.appendChild(I), I;
    }), x = () => {
      r.forEach((A, I) => {
        for (const ee of [y[I], S.children[I * 2 + 1], _.children[I]]) {
          const W = ee;
          W.setAttribute("x1", String(A.from.x)), W.setAttribute("y1", String(A.from.y)), W.setAttribute("x2", String(A.to.x)), W.setAttribute("y2", String(A.to.y));
        }
        p.children[I].setAttribute(
          "transform",
          `translate(${(A.from.x + A.to.x) / 2},${(A.from.y + A.to.y) / 2 - 8})`
        );
      }), n.forEach((A, I) => b[I].setAttribute("transform", `translate(${A.x},${A.y})`));
    };
    x();
    let P = /* @__PURE__ */ new Map();
    const T = _f({
      nodes: n,
      circles: m,
      matched: () => P,
      captions: u,
      initials: c,
      depictionGroups: d,
      edgeLabels: p,
      stage: f,
      rdkit: () => a,
      viewport: () => ({ width: o, height: s })
    }), F = this.#r(
      f,
      h,
      n,
      b,
      x,
      T.apply,
      (A) => i({ kind: "ligand", index: A })
    );
    return {
      setSelected(A) {
        const I = A?.kind === "edge" ? A.index : -1, G = A?.kind === "ligand" ? A.index : -1;
        y.forEach((ee, W) => ee.setAttribute("opacity", W === I ? String(xt.opacity) : "0")), k.forEach((ee, W) => ee.setAttribute("opacity", W === G ? String(xt.opacity) : "0"));
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
        const { scale: I, tx: G, ty: ee } = F.transform();
        T.apply(I, G, ee);
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(A, I) {
        b.forEach((G, ee) => {
          const W = !A || A.has(n[ee]["gufe-key"]);
          G.setAttribute("opacity", W ? "1" : String(yr.node));
        }), r.forEach((G, ee) => {
          const W = !I || I.has(ee), ae = W ? "0.9" : String(yr.edge);
          S.children[ee * 2 + 1].setAttribute("stroke-opacity", ae), p.children[ee].setAttribute("opacity", W ? "1" : String(yr.edge));
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
    const l = qi(t, n, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => Di(r, He),
      margin: mf,
      onTransform: i,
      hint: "Click the graph or hold Ctrl to zoom"
    });
    return o.forEach((f, h) => {
      let g = null, $ = !1;
      f.addEventListener("pointerdown", (S) => {
        S.stopPropagation();
        const { scale: _ } = l.transform();
        g = { x: S.clientX - r[h].x * _, y: S.clientY - r[h].y * _ }, $ = !1, f.setPointerCapture(S.pointerId);
      }), f.addEventListener("pointermove", (S) => {
        if (!g) return;
        const { scale: _ } = l.transform(), p = (S.clientX - g.x) / _, v = (S.clientY - g.y) / _;
        Math.hypot(p - r[h].x, v - r[h].y) * _ > ff && ($ = !0), r[h].x = r[h].fx = p, r[h].y = r[h].fy = v, s();
      });
      const y = () => {
        g = null;
      };
      f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("click", (S) => {
        S.stopPropagation(), $ || a(h);
      });
    }), {
      ...l,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (f, h) => l.centreOn(f, h, gf)
    };
  }
}
function Cf(e, t, n, r, o) {
  const s = t / 2, i = n / 2, a = (l, f) => {
    l.forEach((h, g) => {
      const $ = 2 * Math.PI * g / Math.max(1, l.length) - Math.PI / 2;
      h.x = s + f * Math.cos($), h.y = i + f * Math.sin($), h.fx = r === "Force-directed" ? void 0 : h.x, h.fy = r === "Force-directed" ? void 0 : h.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of o)
      l.get(_.from["gufe-key"]).push(_.to["gufe-key"]), l.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const f = new Map(e.map((_) => [_["gufe-key"], _])), h = e.reduce(
      (_, p) => l.get(p["gufe-key"]).length > l.get(_["gufe-key"]).length ? p : _
    ), g = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let $ = [h["gufe-key"]], y = 0;
    const S = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      a(
        $.map((p) => f.get(p)),
        y === 0 ? 0 : y * S + 40
      );
      const _ = [];
      for (const p of $)
        for (const v of l.get(p))
          g.has(v) || (g.add(v), _.push(v));
      $ = _, y++;
    }
    a(e.filter((_) => !g.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Ef(e, t, n, r) {
  let o;
  try {
    if (o = await Pi(), typeof o?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const s = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), i = o.forceSimulation(e).force(
    "link",
    o.forceLink(s).id((l) => l["gufe-key"]).distance((l) => Se.linkBaseDistance + (1 - (l.score ?? 0.5)) * Se.linkScoreBonus).strength(Se.linkStrength)
  ).force(
    "charge",
    o.forceManyBody().strength(Se.chargeStrength).distanceMin(Se.chargeDistanceMin).distanceMax(Se.chargeDistanceMax)
  ).force("center", o.forceCenter(n / 2, r / 2).strength(Se.centerStrength)).force("collision", o.forceCollide(He + Se.collisionPadding).iterations(Se.collisionIterations)).force("x", o.forceX(n / 2).strength(Se.drift)).force("y", o.forceY(r / 2).strength(Se.drift)).stop(), a = Math.ceil(Math.log(i.alphaMin()) / Math.log(1 - i.alphaDecay()));
  for (let l = 0; l < a * Se.tickMultiplier; l++) i.tick();
  return !0;
}
Re("gufe-ligand-network", kf);
function xf(e, t) {
  return { ...e, registry: Hr(t, Object.values(e.components ?? {})) };
}
function Pf(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function Af(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class Rf extends Ae {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = Ot(n), o = [], s = [];
    for (const [S, _] of Object.entries(n.components ?? {})) {
      const p = We(r, _);
      p ? o.push([S, p]) : s.push(S);
    }
    const i = bt(n.name || "Chemical system");
    if (i.statsEl.appendChild($e("components", String(o.length))), t.appendChild(i), !o.length)
      return t.appendChild(
        ue(
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
    const h = j("div", "flex:1;min-height:0;display:flex;");
    f.appendChild(h);
    const g = document.createElement("gufe-view");
    g.style.cssText = "flex:1;min-width:0;min-height:0;", g.setAttribute(ui, ""), h.appendChild(g);
    const $ = [], y = (S) => {
      $.forEach((_, p) => {
        const v = p === S;
        _.style.background = v ? O.cardBgActive : O.cardBg, _.style.borderColor = v ? O.cardBorderActive : O.cardBorder;
      }), g.payload = o[S][1];
    };
    return o.forEach(([S, _], p) => {
      const v = j(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${O.cardBorder};border-radius:8px;background:${O.cardBg};cursor:pointer;font-family:inherit;font-size:${Y.body};flex-shrink:0;width:auto;`
      );
      v.appendChild(j("span", `font-weight:700;color:${O.textPrimary};`, S)), v.appendChild(j("span", `font-size:${Y.small};color:${O.textMuted};`, Pf(_))), v.appendChild(Ln(Af(_))), v.onclick = () => y(p), $.push(v), l.appendChild(v);
    }), y(0), {
      onResize: () => g.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => g.remove()
    };
  }
}
Re("gufe-chemical-system", Rf);
const Nf = 460;
function Mf(e, t) {
  const n = _e(t, e.stateA, "ChemicalSystemViz"), r = _e(t, e.stateB, "ChemicalSystemViz");
  if (!n || !r) return null;
  const o = [e.stateA, e.stateB, e.protocol];
  for (const s of [n, r]) o.push(...Object.values(s.components ?? {}));
  for (const s of e.mappings ?? []) o.push(s.componentA, s.componentB);
  return { ...e, registry: Hr(t, o) };
}
const xr = {
  unchanged: O.diffUnchanged,
  changed: O.diffChanged,
  added: O.diffAdded,
  removed: O.diffRemoved
};
function Of(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function Tf(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function Ff(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function jf(e, t, n) {
  const r = j(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${O.cardBg};border:1px solid ${O.cardBorder};`
  ), o = j(
    "span",
    `display:none;font-size:${Y.tiny};font-weight:700;letter-spacing:.08em;color:${O.textMuted2};`,
    n
  );
  r.appendChild(o);
  const s = Ff(e);
  return s ? (r.style.borderColor = t === "unchanged" ? O.cardBorder : xr[t], r.appendChild(j("span", `font-size:${Y.body};font-weight:600;color:${O.textPrimary};`, s.name)), r.appendChild(Ln(s.type)), { cell: r, sideMark: o }) : (r.style.background = "transparent", r.style.borderStyle = "dashed", r.appendChild(j("span", `font-size:${Y.body};color:${O.textMuted2};`, "absent")), { cell: r, sideMark: o });
}
function zf(e, t) {
  const n = We(t, e.componentA), r = We(t, e.componentB);
  return `${n ? Je(n) : "A"} to ${r ? Je(r) : "B"}`;
}
class If extends Ae {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = Ot(n), o = _e(r, n.stateA, "ChemicalSystemViz"), s = _e(r, n.stateB, "ChemicalSystemViz"), i = _e(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = bt(n.name || "Transformation");
    if (l.statsEl.appendChild($e("protocol", i?.gufe_type || i?.name || "-")), l.statsEl.appendChild($e("mappings", String(a.length))), t.appendChild(l), !o || !s)
      return t.appendChild(
        ue("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const f = Tf(o, s), h = j("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
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
    h.appendChild(g);
    const $ = [], y = [], S = [];
    for (const c of f) {
      const u = o.components?.[c], b = s.components?.[c], x = Of(u, b), P = We(r, u), T = We(r, b), F = j("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), A = j("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      A.appendChild(
        j("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${xr[x]};`)
      );
      const I = j("span", `font-size:${Y.body};font-weight:700;color:${O.textPrimary};overflow-wrap:anywhere;`, c);
      I.title = x, A.appendChild(I), F.appendChild(A);
      for (const [G, ee] of [
        [P, "A"],
        [T, "B"]
      ]) {
        const W = jf(G, x, ee);
        F.appendChild(W.cell), S.push(W.sideMark);
      }
      $.push(F), y.push(A), h.appendChild(F);
    }
    let _ = null;
    const p = ka(t, (c) => {
      const u = c > 0 && c < Nf;
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
      v.appendChild($e(c, "", xr[c]));
    h.appendChild(v);
    const d = j(
      "div",
      ni,
      "Atom mapping"
    );
    if (t.appendChild(d), !a.length)
      return t.appendChild(
        ue(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), { cleanup: p };
    const m = document.createElement("gufe-atom-mapping");
    m.style.cssText = "flex:1;min-height:0;min-width:0;";
    const k = (c) => {
      m.payload = Ui(a[c], r);
    };
    if (k(0), a.length > 1) {
      const c = j(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${Y.small};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textMuted};`
      );
      c.appendChild(
        qn(
          a.map((u, b) => ({
            id: String(b),
            label: u.name || zf(u, r)
          })),
          "0",
          (u) => k(Number(u))
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
Re("gufe-transformation", If);
const tt = { width: 148, height: 46, radius: 10 }, ht = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, Pt = { initial: 0.56, min: 0.25, max: 0.78 }, Df = 24, Zs = { x: tt.width / 2, y: tt.height / 2 }, Qs = { node: 0.12, edge: 0.06 }, qf = 1.4, zn = Je;
function Vf(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Lf(e, t) {
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
function Bf(e, t) {
  const n = { fill: O.cardBg, stroke: O.cardBorder }, r = e.map((i) => Lf(i, t)), o = [...new Set(r)];
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
function Uf(e, t) {
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
function Kf(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = e.map((s) => {
    const i = [];
    for (const a of Object.values(s.components ?? {})) {
      const l = _e(t, a, "SmallMoleculeComponentViz");
      if (!l) continue;
      let f = r.get(a);
      f === void 0 && (f = n.length, r.set(a, f), n.push(l.sdf ?? "")), i.push(f);
    }
    return i;
  });
  return { sources: n, perNode: o };
}
function Hf(e) {
  const t = At("alchemical-network.query"), n = At("alchemical-network.composition"), r = j("div", ei), o = j("input", `${Dn}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search systems", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search systems by name, component or gufe key"), r.appendChild(o);
  const s = Bi({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: At("alchemical-network.smarts"),
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
  const a = j("div", ti);
  r.appendChild(a), r.appendChild(j("div", `font-size:${Y.tiny};line-height:1.5;color:${O.textMuted2};`, Gr));
  const l = zi({
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
  const f = j("button", `${vt}width:100%;`, "Clear selection");
  f.onclick = () => {
    e.selected.clear(), g(), e.refresh();
  }, r.appendChild(f);
  const h = ($) => {
    const y = e.query.text.trim().toLowerCase();
    if (y && !e.haystacks[$].includes(y) || e.filter.composition && e.signatures[$] !== e.filter.composition) return !1;
    const S = e.matched();
    return !(S && !S.has($));
  }, g = () => {
    l.clearNote(), a.replaceChildren();
    const $ = e.nodes.map((y, S) => ({ node: y, index: S })).filter(({ index: y }) => h(y));
    i.textContent = `${$.length} of ${e.nodes.length} systems`;
    for (const { node: y, index: S } of $) {
      const _ = y["gufe-key"], p = e.selected.has(_), v = j(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:${Y.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${p ? O.cardBorderActive : O.cardBorder};background:${p ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), d = e.colorOf(S);
      v.appendChild(
        j(
          "span",
          `width:10px;height:10px;border-radius:3px;flex-shrink:0;background:${d.fill};border:1px solid ${d.stroke};`
        )
      );
      const m = j("span", "flex:1;min-width:0;overflow-wrap:anywhere;", zn(y));
      m.title = `${zn(y)}
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
function Gf(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((o, s) => {
    const i = 2 * Math.PI * s / Math.max(1, e.length) - Math.PI / 2;
    o.x = t / 2 + r * Math.cos(i), o.y = n / 2 + r * Math.sin(i);
  });
}
async function Wf(e, t, n, r) {
  let o;
  try {
    if (o = await Pi(), typeof o?.forceSimulation != "function") return !1;
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
class Jf extends Ae {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = Ot(n), o = [];
    let s = 0;
    for (const V of n.nodes ?? []) {
      const U = _e(r, V, "ChemicalSystemViz");
      if (!U) {
        s++;
        continue;
      }
      o.push({ ...U, x: 0, y: 0 });
    }
    const i = new Map(o.map((V) => [V["gufe-key"], V])), a = [];
    let l = 0;
    for (const V of n.edges ?? []) {
      const U = i.get(V.stateA), Q = i.get(V.stateB);
      if (!U || !Q) {
        l++;
        continue;
      }
      a.push({ ...V, index: a.length, from: U, to: Q });
    }
    const f = (V) => {
      const U = _e(r, V.protocol, "ProtocolViz");
      return U?.gufe_type || U?.name || "";
    }, h = new Set(a.map(f).filter(Boolean)), g = bt(n.name || "Alchemical network");
    g.statsEl.appendChild($e("systems", String(o.length))), g.statsEl.appendChild($e("transformations", String(a.length))), h.size && g.statsEl.appendChild($e("protocol", [...h].join(", "))), t.appendChild(g);
    const $ = Bf(o, r), y = j("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(y);
    let S = () => {
    };
    const _ = /* @__PURE__ */ new Set(), p = { composition: "" }, v = { text: "" };
    let d = () => {
    }, m = () => {
    }, k = () => {
    };
    const c = o.map((V) => Uf(V, r));
    let u = null;
    const b = () => u ??= Wn().catch((V) => (console.warn("[gufe-viz] RDKit failed to load:", he(V)), null)), x = Kf(o, r), P = Li(b, x.sources);
    let T = null, F = () => {
    };
    const A = async (V) => {
      const U = await P.run(V);
      return U.status === "superseded" || (T = U.status === "ok" ? new Set(o.flatMap((Q, Z) => x.perNode[Z].some((E) => U.matched.has(E)) ? [Z] : [])) : null, F(), d()), U;
    }, I = mi(
      g,
      () => Hf({
        nodes: o,
        edges: a,
        haystacks: c,
        signatures: $.signatures,
        colorOf: $.colorOf,
        compositions: $.compositions,
        selected: _,
        filter: p,
        query: v,
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
          m(V), k(V);
        }
      }),
      {
        label: "Search, filter and select systems",
        onToggle: () => S(),
        remember: gt("alchemical-network.menuOpen", !1)
      }
    );
    I.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;", y.appendChild(I.panel);
    const G = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), ee = j("div", `min-width:0;display:flex;flex-direction:column;background:${O.appBg};`), W = j("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${O.netCanvasBg};`);
    G.appendChild(W), y.appendChild(G), y.appendChild(
      pi(y, G, ee, {
        min: Pt.min,
        max: Pt.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: Ar("alchemical-network.canvasShare", Pt.initial, Pt.min, Pt.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => S()
      })
    ), y.appendChild(ee);
    const ae = this.#e(ee, r);
    if (!o.length)
      return W.appendChild(
        ue(
          s ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), ae.message("Nothing to show."), { cleanup: () => ae.cleanup() };
    s && nt(
      W,
      `${s} chemical system${s === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && nt(
      W,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let X = !0, H = !1, q = null, R = () => {
    }, D = () => {
    }, M = () => {
    }, w = 0;
    G.appendChild(this.#n($.legend, () => D()));
    const C = (V, U) => {
      q = { kind: V, index: U }, ae.show(V === "node" ? o[U] : a[U], V), R();
    };
    k = (V) => C("node", V);
    const z = () => {
      const V = ++w, U = W.clientWidth || 800, Q = W.clientHeight || 600;
      Gf(o, U, Q);
      const Z = () => {
        if (!X || V !== w) return;
        M(), W.querySelectorAll("svg").forEach((N) => N.remove());
        const E = this.#t(W, o, a, U, Q, $.colorOf, C);
        M = E.cleanup, D = E.reset, m = (N) => E.focusOn(N), R = () => E.setSelected(q), R(), d = () => {
          const N = v.text.trim().toLowerCase();
          if (!(_.size > 0 || N.length > 0 || p.composition !== "" || T !== null)) {
            E.setEmphasis(null, null);
            return;
          }
          const K = N.length > 0 || p.composition !== "" || T !== null, J = /* @__PURE__ */ new Set();
          o.forEach((re, fe) => {
            const de = K && (!N || c[fe].includes(N)) && (!p.composition || $.signatures[fe] === p.composition) && (!T || T.has(fe));
            (_.has(re["gufe-key"]) || de) && J.add(re["gufe-key"]);
          });
          const te = /* @__PURE__ */ new Set();
          a.forEach((re, fe) => {
            J.has(re.from["gufe-key"]) && J.has(re.to["gufe-key"]) && te.add(fe);
          }), E.setEmphasis(J, te);
        }, d();
      };
      if (H) {
        Z();
        return;
      }
      Wf(o, a, U, Q).then((E) => {
        !X || V !== w || (E || (H = !0, nt(W, "d3 could not be loaded - showing the circular layout instead")), Z());
      }, Z);
    };
    return S = z, z(), C("node", 0), {
      onResize: () => z(),
      cleanup: () => {
        X = !1, M(), ae.cleanup();
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
    const r = j("div", Pr.bottom);
    if (r.appendChild(Ur(n, "Reset pan and zoom")), !t.length) return r;
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
    t.appendChild(j("div", ni, "Selected"));
    const r = j("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(r);
    const o = document.createElement("gufe-view");
    o.style.cssText = "flex:1;min-width:0;min-height:0;";
    const s = (a) => r.replaceChildren(ue(a));
    return { show: (a, l) => {
      let f;
      if (l === "node")
        f = xf(Vi(a), n);
      else {
        const { index: h, from: g, to: $, ...y } = a;
        f = Mf(y, n);
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
    const l = ce("svg", { class: "gufe-graph", width: o, height: s, style: "display:block;touch-action:none;" });
    t.appendChild(l);
    const f = ce("g");
    l.appendChild(f);
    const h = ce("g"), g = ce("g");
    f.append(h, g);
    const $ = qi(l, f, {
      bounds: () => Di(n, Zs.x, Zs.y),
      margin: Df,
      hint: "Click the graph or hold Ctrl to zoom"
    }), y = (d, m) => {
      $.wasPan() || a(d, m);
    }, S = [];
    r.forEach((d, m) => {
      const k = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: O.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Vs(k, d.name || "transformation"), k.addEventListener("click", () => y("edge", m)), h.appendChild(k), S.push(k);
      const c = ce("line", {
        x1: d.from.x,
        y1: d.from.y,
        x2: d.to.x,
        y2: d.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      c.addEventListener("click", () => y("edge", m)), h.appendChild(c);
    });
    const _ = [], p = [], v = [];
    return n.forEach((d, m) => {
      const k = i(m), c = ce("g", { style: "cursor:pointer;" });
      v.push(c);
      const u = ce("rect", {
        x: d.x - tt.width / 2,
        y: d.y - tt.height / 2,
        width: tt.width,
        height: tt.height,
        rx: tt.radius,
        fill: k.fill,
        stroke: k.stroke,
        "stroke-width": 2
      });
      c.appendChild(u), _.push(u), p.push(k.stroke);
      const b = ce("text", {
        x: d.x,
        y: d.y - 2,
        "text-anchor": "middle",
        fill: O.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      b.textContent = Vf(zn(d), 20), c.appendChild(b);
      const x = Object.keys(d.components ?? {}).length, P = ce("text", {
        x: d.x,
        y: d.y + 14,
        "text-anchor": "middle",
        fill: O.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      P.textContent = `${x} component${x === 1 ? "" : "s"}`, c.appendChild(P), Vs(c, zn(d)), c.addEventListener("click", () => y("node", m)), g.appendChild(c);
    }), $.fit(), {
      setSelected(d) {
        _.forEach((m, k) => {
          const c = d?.kind === "node" && d.index === k;
          m.setAttribute("stroke", c ? O.cardBorderActive : p[k]), m.setAttribute("stroke-width", c ? "3" : "2");
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
          k.setAttribute("opacity", u ? "1" : String(Qs.node));
        }), S.forEach((k, c) => {
          const u = !m || m.has(c);
          k.setAttribute("opacity", u ? "1" : String(Qs.edge));
        });
      },
      focusOn(d) {
        const m = n[d];
        m && $.centreOn(m.x, m.y, qf);
      },
      reset: $.reset,
      cleanup: $.cleanup
    };
  }
}
Re("gufe-alchemical-network", Jf);
class Yf extends Ae {
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
    const s = Rr();
    return s.style.maxWidth = "460px", s.appendChild(ke("gufe class", n.gufe_type, !0)), n.name && s.appendChild(ke("Name", n.name)), s.appendChild(ke("gufe key", n["gufe-key"], !0)), s.appendChild(
      j(
        "div",
        `padding-top:10px;font-size:${Y.small};line-height:1.6;color:${O.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), o.appendChild(s), {};
  }
}
Re("gufe-protocol", Yf);
class Xf extends Ae {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = j(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;"
    );
    t.appendChild(r);
    const o = Rr();
    return o.style.maxWidth = "560px", o.style.width = "100%", o.appendChild(ke("Name", n.name || "(unnamed)")), o.appendChild(ke("SMILES", n.smiles, !0)), o.appendChild(ke("Positive ion", n.positive_ion)), o.appendChild(ke("Negative ion", n.negative_ion)), o.appendChild(ke("Ion concentration", n.ion_concentration)), o.appendChild(ke("Neutralize", n.neutralize ? "yes" : "no")), o.appendChild(ke("gufe key", n["gufe-key"], !0)), r.appendChild(o), {};
  }
}
Re("gufe-solvent", Xf);
class Zf extends Ae {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = bt(n.name || "Unnamed component");
    r.statsEl.appendChild(Ln(n.gufe_type)), t.appendChild(r);
    const o = j("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(o);
    const s = Rr();
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
    ), s.appendChild(ke("Name", n.name || "(unnamed)")), s.appendChild(ke("gufe class", n.gufe_type, !0)), o.appendChild(s), {};
  }
}
Re("gufe-unknown-component", Zf);
function op(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: ii, reset: ua });
export {
  Ea as CHROME_OPEN_BY_DEFAULT,
  Qi as DEBUG_ATTRIBUTE,
  ea as DEBUG_GLOBAL,
  Hd as DEFAULT_DEPICT_STYLE,
  md as DEFAULT_ZOOM_BOUNDS,
  et as DEPICT_STYLE,
  Zd as DEPICT_STYLE_RANGES,
  Jf as GufeAlchemicalNetwork,
  Yu as GufeAtomMapping,
  Rf as GufeChemicalSystem,
  Ae as GufeElement,
  kf as GufeLigandNetwork,
  _u as GufeProtein,
  Yf as GufeProtocol,
  gu as GufeSmallMolecule,
  Xf as GufeSolvent,
  If as GufeTransformation,
  Zf as GufeUnknownComponent,
  dd as GufeView,
  ui as HIDE_NAME_ATTRIBUTE,
  lr as MAPPING_COLORS,
  vd as MAPPING_RAMP_3D,
  rp as MAPPING_RAMP_NAME,
  Gr as MULTI_SELECT_HINT,
  Qf as PAYLOAD_TYPES,
  ep as SCHEMA_TYPES,
  Dr as VIEW_TAGS,
  zu as align2D,
  qu as alignedToPartner,
  ju as applyRT,
  Iu as applyTurn,
  yd as boundedZoom,
  Ot as buildRegistry,
  $t as choice,
  mi as chromeMenu,
  oi as debugEnabled,
  Re as defineElement,
  Ei as describeProblem,
  Of as diffStatus,
  np as dispatchProblem,
  Hr as entriesFor,
  Je as entryLabel,
  zi as exportBlock,
  Di as extentOf,
  gt as flag,
  cd as formatIssues,
  Ai as guardWheel,
  Fu as kabsch,
  Ks as laidOut,
  Vu as layoutPair,
  Gu as liftFor,
  oa as logPayload,
  We as lookup,
  _e as lookupOfType,
  Ui as mappingPayloadFor,
  Ms as markGroups,
  dr as markedBonds,
  op as mount,
  fi as nameWanted,
  eu as normaliseDepictStyle,
  Ar as num,
  ka as onWidth,
  Wu as openfeShift,
  Ju as pairColour,
  Rs as parseAtomSpec,
  ra as payloadJson,
  Ur as resetControl,
  ua as resetSettings,
  qi as sceneCamera,
  Su as selectionText,
  In as setting,
  ii as settings,
  pi as splitter,
  xf as systemPayloadFor,
  At as textSetting,
  Mf as transformationPayloadFor,
  Gs as uniqueAtoms,
  nu as uniqueBonds,
  tp as validateAs,
  ad as validatePayload,
  Br as viewerInteraction,
  Ri as wheelFactor,
  Du as withCoords
};
