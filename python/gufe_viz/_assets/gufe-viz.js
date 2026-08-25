const Fr = {
  dark: {
    appBg: "#1a1a2e",
    panelBg: "#16213e",
    cardBg: "#16213e",
    cardBgActive: "#0f3460",
    cardBorder: "#2a4a7f",
    cardBorderActive: "#7ecfff",
    splitBorder: "#2a4a7f",
    toolbarBg: "#16213e",
    toolbarBorder: "#2a4a7f",
    tooltipBg: "#16213e",
    tooltipBorder: "#2a4a7f",
    titleColor: "#7ecfff",
    textPrimary: "#e6f3ff",
    textMuted: "#9bb8d6",
    textMuted2: "#7a96b8",
    selectBg: "#0f3460",
    selectBorder: "#2a4a7f",
    labelBg: "#16213e",
    labelFg: "#7ecfff",
    badgeBg: "#0f3460",
    badgeFg: "#7ecfff",
    switcherBg: "rgba(22,33,62,0.9)",
    btnBg: "#0f3460",
    btnBgHover: "#1a4a8a",
    btnBgActive: "#2a6ab5",
    btnFg: "#7ecfff",
    btnBorder: "#2a4a7f",
    warnBg: "#3b1d1d",
    warnFg: "#ffb4b4",
    warnBorder: "#7f2a2a",
    errorFg: "#ff8080",
    viewerBg: "0x1a1a2e",
    canvas2DBg: "#ffffff",
    diffUnchanged: "#64748b",
    diffChanged: "#d9a300",
    diffAdded: "#2a9d4a",
    diffRemoved: "#d62828",
    netCanvasBg: "#1a1a2e",
    netNodeFill: "#16213e",
    netNodeStroke: "#2a4a7f",
    netNodeLabel: "#cfe6ff",
    netInitials: "#7ecfff",
    netEdgeRamp: ["#3a4a6a", "#7ecfff"],
    netEdgeLine: "#5f7ea8",
    netEdgeLabel: "#cfe6ff",
    netLabelBg: "#16213e",
    netHaloColor: "#ff79c6",
    boxFill: "#0f2a4a",
    boxStroke: "#2a4a7f"
  },
  light: {
    appBg: "#ffffff",
    panelBg: "#f8fafc",
    cardBg: "#ffffff",
    cardBgActive: "#e0f2fe",
    cardBorder: "#e2e8f0",
    cardBorderActive: "#0369a1",
    splitBorder: "#e2e8f0",
    toolbarBg: "#f8fafc",
    toolbarBorder: "#e2e8f0",
    tooltipBg: "#ffffff",
    tooltipBorder: "#cbd5e1",
    titleColor: "#0369a1",
    textPrimary: "#1e293b",
    textMuted: "#475569",
    textMuted2: "#64748b",
    selectBg: "#ffffff",
    selectBorder: "#cbd5e1",
    labelBg: "#f0f4fa",
    labelFg: "#1a4a8a",
    badgeBg: "#e1e8f2",
    badgeFg: "#1a4a8a",
    switcherBg: "rgba(240,244,250,0.95)",
    btnBg: "#e1e8f2",
    btnBgHover: "#c8d4e8",
    btnBgActive: "#7ab0e5",
    btnFg: "#1a4a8a",
    btnBorder: "#a8bcd6",
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
    netNodeStroke: "#ffffff",
    netNodeLabel: "#334155",
    netInitials: "#0369a1",
    netEdgeRamp: ["#cbd5e1", "#0f766e"],
    netEdgeLine: "#94a3b8",
    netEdgeLabel: "#334155",
    netLabelBg: "#ffffff",
    netHaloColor: "#fbcfe8",
    boxFill: "#eff6ff",
    boxStroke: "#bfdbfe"
  }
};
function is() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const O = is() ? Fr.dark : Fr.light, Z = {
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
}, Ye = {
  bold: "700"
}, ce = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px"
}, ut = {
  sm: "3px",
  md: "6px",
  xl: "10px"
}, Oe = {
  title: O.titleColor,
  primary: O.textPrimary,
  muted: O.textMuted,
  faint: O.textMuted2,
  error: O.errorFg
}, wt = {
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: O.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: O.canvas2DBg
}, ge = {
  base: `background:${O.btnBg};color:${O.btnFg};border:1px solid ${O.btnBorder};padding:${ce.sm} 9px;font-size:${Z.small};font-weight:${Ye.bold};border-radius:${ut.sm};cursor:pointer;font-family:inherit;`,
  bg: O.btnBg,
  bgHover: O.btnBgHover,
  bgActive: O.btnBgActive
}, ss = `background:${O.selectBg};color:${O.textPrimary};border:1px solid ${O.selectBorder};border-radius:${ut.md};padding:${ce.sm} ${ce.lg};font-size:${Z.body};cursor:pointer;font-family:inherit;`, as = `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${ce.xxl};flex-shrink:0;background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};`, Ri = {
  top: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;font-size:${Z.body};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textPrimary};`,
  bottom: `display:flex;align-items:center;gap:${ce.xl};flex-wrap:wrap;padding:${ce.lg} ${ce.xxl};flex-shrink:0;background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};`
}, _t = `flex-shrink:0;padding:${ce.sm} ${ce.xl};font-size:${Z.heading};font-weight:${Ye.bold};color:${O.labelFg};background:${O.labelBg};`, cs = `display:flex;flex-direction:column;gap:${ce.xs};padding:${ce.xxl} 18px;border-radius:${ut.xl};background:${O.cardBg};border:1px solid ${O.cardBorder};`, Ni = `position:absolute;bottom:${ce.xl};right:${ce.xl};display:flex;gap:${ce.sm};padding:${ce.sm};border-radius:${ut.md};z-index:10;background:${O.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`, Or = `font-family:${Z.mono};font-size:${Z.small};line-height:1.7;color:${O.textMuted};`, Mr = `font-size:${Z.small};font-weight:${Ye.bold};letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`, ls = `font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`;
function T(e, t, n) {
  const r = document.createElement(e);
  return t && (r.style.cssText = t), n != null && (r.textContent = n), r;
}
function De(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ve(e) {
  if (e == null) return "unknown error";
  const t = e.message;
  if (typeof t == "string" && t) return t;
  const n = String(e);
  return n === "[object Object]" ? e.name || "unknown error" : n;
}
const pt = (e) => e.toLocaleString("en-US"), st = "-", St = ge.base, Fi = ss;
function On(e, t, n, r) {
  if (r) {
    const s = r.get();
    e.some((a) => a.id === s) && (t = s);
  }
  const i = T("div", "display:flex;gap:4px;"), o = e.map((s) => {
    const a = T("button", St, s.label);
    return a.title = s.title || s.label, a.onmouseover = () => {
      a.style.background = ge.bgHover;
    }, a.onmouseout = () => {
      a.style.background = t === s.id ? ge.bgActive : ge.bg;
    }, a.onclick = () => {
      i.setActive(s.id), r?.set(s.id), n(s.id);
    }, i.appendChild(a), { id: s.id, btn: a };
  });
  return i.setActive = (s) => {
    t = s, o.forEach((a) => {
      a.btn.style.background = a.id === t ? ge.bgActive : ge.bg;
    });
  }, i.setActive(t), i;
}
function pr(e, t, n, r) {
  const i = T("select", Fi);
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
function Oi(e, t, n, r = {}) {
  let i = r.remember ? r.remember.get() : t;
  const o = T("button", St, e);
  o.title = r.title || e, o.setAttribute("aria-pressed", String(i));
  const s = () => {
    o.style.background = i ? ge.bgActive : ge.bg, o.setAttribute("aria-pressed", String(i));
  };
  return o.onclick = () => {
    i = !i, s(), r.remember?.set(i), n(i);
  }, s(), o;
}
function de(e, t, n) {
  const r = T("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  n && r.appendChild(
    T("span", `width:8px;height:8px;border-radius:50%;background:${n};display:inline-block;`)
  );
  const i = T("span");
  return i.innerHTML = `${De(e)} <b style="color:${Oe.primary};">${De(t)}</b>`, r.appendChild(i), r;
}
function Ge(e, t) {
  const n = T("div", "", `⚠ ${t}`);
  return n.style.cssText = `position:absolute;top:${ce.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;padding:${ce.md} ${ce.xxl};border-radius:${ut.md};font-size:${Z.body};background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};`, e.appendChild(n), n;
}
function le(e, t = !1) {
  return T(
    "div",
    `flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:${Z.heading};color:${t ? Oe.error : Oe.faint};`,
    e
  );
}
function Le(e) {
  const t = T("div", as);
  return t.className = "gufe-header", t.titleEl = T(
    "span",
    `font-weight:${Ye.bold};font-size:${Z.title};color:${Oe.title};letter-spacing:.02em;`,
    e
  ), t.statsEl = T(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${Z.small};color:${Oe.muted};`
  ), t.toggleEl = T("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;"), t.appendChild(t.toggleEl), t.appendChild(t.titleEl), t.appendChild(t.statsEl), t;
}
function Fe(e, t, n = !1) {
  const r = T("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  r.appendChild(
    T(
      "span",
      `flex:0 0 128px;font-size:${Z.tiny};font-weight:${Ye.bold};letter-spacing:.08em;text-transform:uppercase;color:${Oe.faint};`,
      e
    )
  );
  const i = T(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${Oe.primary};` + (n ? `font-family:${Z.mono};font-size:${Z.small};` : `font-size:${Z.body};`),
    t
  );
  return i.title = t, r.appendChild(i), r;
}
function Ct(e) {
  return T(
    "span",
    `padding:1px 7px;border-radius:${ut.xl};font-size:${Z.tiny};font-weight:${Ye.bold};letter-spacing:.04em;white-space:nowrap;background:${O.badgeBg};color:${O.badgeFg};`,
    e
  );
}
function An() {
  return T("div", cs);
}
function Mi() {
  const e = T("div", "flex:1;position:relative;min-height:0;min-width:0;"), t = T("div", "position:absolute;inset:0;");
  return t.dataset.gufeViewer = "", e.appendChild(t), { wrap: e, container: t };
}
const ds = !1;
function us() {
  const e = T("span", `display:inline-flex;flex-direction:column;gap:${ce.xs};justify-content:center;`);
  for (let t = 0; t < 3; t++)
    e.appendChild(T("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${O.btnFg};`));
  return e;
}
function fs(e, t, n = {}) {
  let r = n.remember ? n.remember.get() : n.open ?? ds, i = !1;
  const o = T("div", "flex-shrink:0;"), s = T("button", `${ge.base}display:inline-flex;align-items:center;gap:${ce.md};padding:${ce.sm} ${ce.lg};`);
  s.appendChild(us()), s.setAttribute("aria-label", n.label || "Toggle menu");
  const a = () => {
    r && !i && (i = !0, o.appendChild(t())), o.style.display = r ? "" : "none", s.style.background = r ? ge.bgActive : ge.bg, s.setAttribute("aria-expanded", String(r));
  }, l = (g) => {
    g !== r && (r = g, a(), n.remember?.set(r), n.onToggle?.(r));
  };
  return s.onclick = () => l(!r), s.onmouseover = () => {
    s.style.background = r ? ge.bgActive : ge.bgHover;
  }, s.onmouseout = () => {
    s.style.background = r ? ge.bgActive : ge.bg;
  }, e.toggleEl.style.marginRight = "2px", e.toggleEl.appendChild(s), a(), {
    panel: o,
    isOpen: () => r,
    setOpen: l
  };
}
const ps = ["debug", "gufe-debug"], hs = "debug", ms = "GUFE_VIZ_DEBUG";
function gs() {
  return !!globalThis[ms];
}
function ys() {
  try {
    const e = globalThis.location?.search;
    if (!e) return !1;
    const t = new URLSearchParams(e);
    return ps.some((n) => t.has(n));
  } catch {
    return !1;
  }
}
function $s(e) {
  return e?.hasAttribute?.(hs) ? !0 : gs() || ys();
}
function vs(e) {
  try {
    return JSON.stringify(e, null, 2) ?? String(e);
  } catch (t) {
    return `<could not be stringified: ${ve(t)}>`;
  }
}
function bs(e, t, n) {
  if (!$s(n)) return;
  const r = vs(t), i = t?.type, o = `[gufe-viz] ${e}${typeof i == "string" ? ` ${i}` : ""} (${r.length} chars)`, s = typeof console.groupCollapsed == "function";
  s ? console.groupCollapsed(o) : console.log(o), console.log(r), console.log(t), s && console.groupEnd?.();
}
const ws = 150;
class xe extends HTMLElement {
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
    this.style.display = "block", this.style.width = this.style.width || "100%", this.style.height = this.style.height || "100%", this.style.background = O.appBg, this.style.color = O.textPrimary, this.style.fontFamily = "'Inter',system-ui,sans-serif", typeof ResizeObserver < "u" && !this.#n && (this.#n = new ResizeObserver(() => {
      this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => this.#e?.onResize?.(), ws);
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
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${O.appBg};`
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
    n === this.#i && (console.warn("[gufe-viz] render failed:", r), t.replaceChildren(le(`Failed to render: ${ve(r)}`, !0)));
  }
  /** Force a resize pass - for hosts that know they resized us. */
  resize() {
    this.#e?.onResize?.();
  }
}
function Pe(e, t) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, t);
}
function _s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Et = { exports: {} }, Kn = {}, je = {}, Ue = {}, Hn = {}, Gn = {}, Wn = {}, Tr;
function Rn() {
  return Tr || (Tr = 1, (function(e) {
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((m, C) => `${m}${C}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((m, C) => (C instanceof n && (m[C.str] = (m[C.str] || 0) + 1), m), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function i(y, ...u) {
      const m = [y[0]];
      let C = 0;
      for (; C < u.length; )
        a(m, u[C]), m.push(y[++C]);
      return new r(m);
    }
    e._ = i;
    const o = new r("+");
    function s(y, ...u) {
      const m = [v(y[0])];
      let C = 0;
      for (; C < u.length; )
        m.push(o), a(m, u[C]), m.push(o, v(y[++C]));
      return l(m), new r(m);
    }
    e.str = s;
    function a(y, u) {
      u instanceof r ? y.push(...u._items) : u instanceof n ? y.push(u) : y.push(w(u));
    }
    e.addCodeArg = a;
    function l(y) {
      let u = 1;
      for (; u < y.length - 1; ) {
        if (y[u] === o) {
          const m = g(y[u - 1], y[u + 1]);
          if (m !== void 0) {
            y.splice(u - 1, 3, m);
            continue;
          }
          y[u++] = "+";
        }
        u++;
      }
    }
    function g(y, u) {
      if (u === '""')
        return y;
      if (y === '""')
        return u;
      if (typeof y == "string")
        return u instanceof n || y[y.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${y.slice(0, -1)}${u}"` : u[0] === '"' ? y.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(y instanceof n))
        return `"${y}${u.slice(1)}`;
    }
    function h(y, u) {
      return u.emptyStr() ? y : y.emptyStr() ? u : s`${y}${u}`;
    }
    e.strConcat = h;
    function w(y) {
      return typeof y == "number" || typeof y == "boolean" || y === null ? y : v(Array.isArray(y) ? y.join(",") : y);
    }
    function $(y) {
      return new r(v(y));
    }
    e.stringify = $;
    function v(y) {
      return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function S(y) {
      return typeof y == "string" && e.IDENTIFIER.test(y) ? new r(`.${y}`) : i`[${y}]`;
    }
    e.getProperty = S;
    function _(y) {
      if (typeof y == "string" && e.IDENTIFIER.test(y))
        return new r(`${y}`);
      throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function f(y) {
      return new r(y.toString());
    }
    e.regexpCode = f;
  })(Wn)), Wn;
}
var Jn = {}, jr;
function zr() {
  return jr || (jr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Rn();
    class n extends Error {
      constructor(g) {
        super(`CodeGen: "code" for ${g} not defined`), this.value = g.value;
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
      constructor({ prefixes: g, parent: h } = {}) {
        this._names = {}, this._prefixes = g, this._parent = h;
      }
      toName(g) {
        return g instanceof t.Name ? g : this.name(g);
      }
      name(g) {
        return new t.Name(this._newName(g));
      }
      _newName(g) {
        const h = this._names[g] || this._nameGroup(g);
        return `${g}${h.index++}`;
      }
      _nameGroup(g) {
        var h, w;
        if (!((w = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || w === void 0) && w.has(g) || this._prefixes && !this._prefixes.has(g))
          throw new Error(`CodeGen: prefix "${g}" is not allowed in this scope`);
        return this._names[g] = { prefix: g, index: 0 };
      }
    }
    e.Scope = i;
    class o extends t.Name {
      constructor(g, h) {
        super(h), this.prefix = g;
      }
      setValue(g, { property: h, itemIndex: w }) {
        this.value = g, this.scopePath = (0, t._)`.${new t.Name(h)}[${w}]`;
      }
    }
    e.ValueScopeName = o;
    const s = (0, t._)`\n`;
    class a extends i {
      constructor(g) {
        super(g), this._values = {}, this._scope = g.scope, this.opts = { ...g, _n: g.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(g) {
        return new o(g, this._newName(g));
      }
      value(g, h) {
        var w;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(g), { prefix: v } = $, S = (w = h.key) !== null && w !== void 0 ? w : h.ref;
        let _ = this._values[v];
        if (_) {
          const u = _.get(S);
          if (u)
            return u;
        } else
          _ = this._values[v] = /* @__PURE__ */ new Map();
        _.set(S, $);
        const f = this._scope[v] || (this._scope[v] = []), y = f.length;
        return f[y] = h.ref, $.setValue(h, { property: v, itemIndex: y }), $;
      }
      getValue(g, h) {
        const w = this._values[g];
        if (w)
          return w.get(h);
      }
      scopeRefs(g, h = this._values) {
        return this._reduceValues(h, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${g}${w.scopePath}`;
        });
      }
      scopeCode(g = this._values, h, w) {
        return this._reduceValues(g, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, h, w);
      }
      _reduceValues(g, h, w = {}, $) {
        let v = t.nil;
        for (const S in g) {
          const _ = g[S];
          if (!_)
            continue;
          const f = w[S] = w[S] || /* @__PURE__ */ new Map();
          _.forEach((y) => {
            if (f.has(y))
              return;
            f.set(y, r.Started);
            let u = h(y);
            if (u) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${m} ${y} = ${u};${this.opts._n}`;
            } else if (u = $?.(y))
              v = (0, t._)`${v}${u}${this.opts._n}`;
            else
              throw new n(y);
            f.set(y, r.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = a;
  })(Jn)), Jn;
}
var Ir;
function te() {
  return Ir || (Ir = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Rn(), n = /* @__PURE__ */ zr();
    var r = /* @__PURE__ */ Rn();
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
    var i = /* @__PURE__ */ zr();
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
      optimizeNames(b, x) {
        return this;
      }
    }
    class s extends o {
      constructor(b, x, I) {
        super(), this.varKind = b, this.name = x, this.rhs = I;
      }
      render({ es5: b, _n: x }) {
        const I = b ? n.varKinds.var : this.varKind, W = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${W};` + x;
      }
      optimizeNames(b, x) {
        if (b[this.name.str])
          return this.rhs && (this.rhs = G(this.rhs, b, x)), this;
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
          return this.rhs = G(this.rhs, b, x), this;
      }
      get names() {
        const b = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return j(b, this.rhs);
      }
    }
    class l extends a {
      constructor(b, x, I, W) {
        super(b, I, W), this.op = x;
      }
      render({ _n: b }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + b;
      }
    }
    class g extends o {
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
    class w extends o {
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
        return this.code = G(this.code, b, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class v extends o {
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
        let W = I.length;
        for (; W--; ) {
          const H = I[W];
          H.optimizeNames(b, x) || (Q(b, H.names), I.splice(W, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((b, x) => P(b, x.names), {});
      }
    }
    class S extends v {
      render(b) {
        return "{" + b._n + super.render(b) + "}" + b._n;
      }
    }
    class _ extends v {
    }
    class f extends S {
    }
    f.kind = "else";
    class y extends S {
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
          x = this.else = Array.isArray(I) ? new f(I) : I;
        }
        if (x)
          return b === !1 ? x instanceof y ? x : x.nodes : this.nodes.length ? this : new y(X(b), x instanceof y ? [x] : x.nodes);
        if (!(b === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(b, x) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(b, x), !!(super.optimizeNames(b, x) || this.else))
          return this.condition = G(this.condition, b, x), this;
      }
      get names() {
        const b = super.names;
        return j(b, this.condition), this.else && P(b, this.else.names), b;
      }
    }
    y.kind = "if";
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
          return this.iteration = G(this.iteration, b, x), this;
      }
      get names() {
        return P(super.names, this.iteration.names);
      }
    }
    class C extends u {
      constructor(b, x, I, W) {
        super(), this.varKind = b, this.name = x, this.from = I, this.to = W;
      }
      render(b) {
        const x = b.es5 ? n.varKinds.var : this.varKind, { name: I, from: W, to: H } = this;
        return `for(${x} ${I}=${W}; ${I}<${H}; ${I}++)` + super.render(b);
      }
      get names() {
        const b = j(super.names, this.from);
        return j(b, this.to);
      }
    }
    class c extends u {
      constructor(b, x, I, W) {
        super(), this.loop = b, this.varKind = x, this.name = I, this.iterable = W;
      }
      render(b) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(b);
      }
      optimizeNames(b, x) {
        if (super.optimizeNames(b, x))
          return this.iterable = G(this.iterable, b, x), this;
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
    class p extends v {
      render(b) {
        return "return " + super.render(b);
      }
    }
    p.kind = "return";
    class k extends S {
      render(b) {
        let x = "try" + super.render(b);
        return this.catch && (x += this.catch.render(b)), this.finally && (x += this.finally.render(b)), x;
      }
      optimizeNodes() {
        var b, x;
        return super.optimizeNodes(), (b = this.catch) === null || b === void 0 || b.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(b, x) {
        var I, W;
        return super.optimizeNames(b, x), (I = this.catch) === null || I === void 0 || I.optimizeNames(b, x), (W = this.finally) === null || W === void 0 || W.optimizeNames(b, x), this;
      }
      get names() {
        const b = super.names;
        return this.catch && P(b, this.catch.names), this.finally && P(b, this.finally.names), b;
      }
    }
    class E extends S {
      constructor(b) {
        super(), this.error = b;
      }
      render(b) {
        return `catch(${this.error})` + super.render(b);
      }
    }
    E.kind = "catch";
    class F extends S {
      render(b) {
        return "finally" + super.render(b);
      }
    }
    F.kind = "finally";
    class z {
      constructor(b, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
` : "" }, this._extScope = b, this._scope = new n.Scope({ parent: b }), this._nodes = [new _()];
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
      _def(b, x, I, W) {
        const H = this._scope.toName(x);
        return I !== void 0 && W && (this._constants[H.str] = I), this._leafNode(new s(b, H, I)), H;
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
        for (const [I, W] of b)
          x.length > 1 && x.push(","), x.push(I), (I !== W || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, W));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(b, x, I) {
        if (this._blockNode(new y(b)), x && I)
          this.code(x).else().code(I).endIf();
        else if (x)
          this.code(x).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(b) {
        return this._elseNode(new y(b));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(y, f);
      }
      _for(b, x) {
        return this._blockNode(b), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(b, x) {
        return this._for(new m(b), x);
      }
      // `for` statement for a range of values
      forRange(b, x, I, W, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const ee = this._scope.toName(b);
        return this._for(new C(H, ee, x, I), () => W(ee));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(b, x, I, W = n.varKinds.const) {
        const H = this._scope.toName(b);
        if (this.opts.es5) {
          const ee = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${ee}.length`, (ie) => {
            this.var(H, (0, t._)`${ee}[${ie}]`), I(H);
          });
        }
        return this._for(new c("of", W, H, x), () => I(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(b, x, I, W = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(b, (0, t._)`Object.keys(${x})`, I);
        const H = this._scope.toName(b);
        return this._for(new c("in", W, H, x), () => I(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(b) {
        return this._leafNode(new g(b));
      }
      // `break` statement
      break(b) {
        return this._leafNode(new h(b));
      }
      // `return` statement
      return(b) {
        const x = new p();
        if (this._blockNode(x), this.code(b), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(p);
      }
      // `try` statement
      try(b, x, I) {
        if (!x && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const W = new k();
        if (this._blockNode(W), this.code(b), x) {
          const H = this.name("e");
          this._currNode = W.catch = new E(H), x(H);
        }
        return I && (this._currNode = W.finally = new F(), this.code(I)), this._endBlockNode(E, F);
      }
      // `throw` statement
      throw(b) {
        return this._leafNode(new w(b));
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
      func(b, x = t.nil, I, W) {
        return this._blockNode(new d(b, x, I)), W && this.code(W).endFunc(), this;
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
        if (!(x instanceof y))
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
    e.CodeGen = z;
    function P(R, b) {
      for (const x in b)
        R[x] = (R[x] || 0) + (b[x] || 0);
      return R;
    }
    function j(R, b) {
      return b instanceof t._CodeOrName ? P(R, b.names) : R;
    }
    function G(R, b, x) {
      if (R instanceof t.Name)
        return I(R);
      if (!W(R))
        return R;
      return new t._Code(R._items.reduce((H, ee) => (ee instanceof t.Name && (ee = I(ee)), ee instanceof t._Code ? H.push(...ee._items) : H.push(ee), H), []));
      function I(H) {
        const ee = x[H.str];
        return ee === void 0 || b[H.str] !== 1 ? H : (delete b[H.str], ee);
      }
      function W(H) {
        return H instanceof t._Code && H._items.some((ee) => ee instanceof t.Name && b[ee.str] === 1 && x[ee.str] !== void 0);
      }
    }
    function Q(R, b) {
      for (const x in b)
        R[x] = (R[x] || 0) - (b[x] || 0);
    }
    function X(R) {
      return typeof R == "boolean" || typeof R == "number" || R === null ? !R : (0, t._)`!${D(R)}`;
    }
    e.not = X;
    const K = A(e.operators.AND);
    function L(...R) {
      return R.reduce(K);
    }
    e.and = L;
    const J = A(e.operators.OR);
    function q(...R) {
      return R.reduce(J);
    }
    e.or = q;
    function A(R) {
      return (b, x) => b === t.nil ? x : x === t.nil ? b : (0, t._)`${D(b)} ${R} ${D(x)}`;
    }
    function D(R) {
      return R instanceof t.Name ? R : (0, t._)`(${R})`;
    }
  })(Gn)), Gn;
}
var ne = {}, Dr;
function oe() {
  if (Dr) return ne;
  Dr = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Rn();
  function n(c) {
    const d = {};
    for (const p of c)
      d[p] = !0;
    return d;
  }
  ne.toHash = n;
  function r(c, d) {
    return typeof d == "boolean" ? d : Object.keys(d).length === 0 ? !0 : (i(c, d), !o(d, c.self.RULES.all));
  }
  ne.alwaysValidSchema = r;
  function i(c, d = c.schema) {
    const { opts: p, self: k } = c;
    if (!p.strictSchema || typeof d == "boolean")
      return;
    const E = k.RULES.keywords;
    for (const F in d)
      E[F] || C(c, `unknown keyword: "${F}"`);
  }
  ne.checkUnknownRules = i;
  function o(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const p in c)
      if (d[p])
        return !0;
    return !1;
  }
  ne.schemaHasRules = o;
  function s(c, d) {
    if (typeof c == "boolean")
      return !c;
    for (const p in c)
      if (p !== "$ref" && d.all[p])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: c, schemaPath: d }, p, k, E) {
    if (!E) {
      if (typeof p == "number" || typeof p == "boolean")
        return p;
      if (typeof p == "string")
        return (0, e._)`${p}`;
    }
    return (0, e._)`${c}${d}${(0, e.getProperty)(k)}`;
  }
  ne.schemaRefOrVal = a;
  function l(c) {
    return w(decodeURIComponent(c));
  }
  ne.unescapeFragment = l;
  function g(c) {
    return encodeURIComponent(h(c));
  }
  ne.escapeFragment = g;
  function h(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = h;
  function w(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = w;
  function $(c, d) {
    if (Array.isArray(c))
      for (const p of c)
        d(p);
    else
      d(c);
  }
  ne.eachItem = $;
  function v({ mergeNames: c, mergeToName: d, mergeValues: p, resultToName: k }) {
    return (E, F, z, P) => {
      const j = z === void 0 ? F : z instanceof e.Name ? (F instanceof e.Name ? c(E, F, z) : d(E, F, z), z) : F instanceof e.Name ? (d(E, z, F), F) : p(F, z);
      return P === e.Name && !(j instanceof e.Name) ? k(E, j) : j;
    };
  }
  ne.mergeEvaluated = {
    props: v({
      mergeNames: (c, d, p) => c.if((0, e._)`${p} !== true && ${d} !== undefined`, () => {
        c.if((0, e._)`${d} === true`, () => c.assign(p, !0), () => c.assign(p, (0, e._)`${p} || {}`).code((0, e._)`Object.assign(${p}, ${d})`));
      }),
      mergeToName: (c, d, p) => c.if((0, e._)`${p} !== true`, () => {
        d === !0 ? c.assign(p, !0) : (c.assign(p, (0, e._)`${p} || {}`), _(c, p, d));
      }),
      mergeValues: (c, d) => c === !0 ? !0 : { ...c, ...d },
      resultToName: S
    }),
    items: v({
      mergeNames: (c, d, p) => c.if((0, e._)`${p} !== true && ${d} !== undefined`, () => c.assign(p, (0, e._)`${d} === true ? true : ${p} > ${d} ? ${p} : ${d}`)),
      mergeToName: (c, d, p) => c.if((0, e._)`${p} !== true`, () => c.assign(p, d === !0 ? !0 : (0, e._)`${p} > ${d} ? ${p} : ${d}`)),
      mergeValues: (c, d) => c === !0 ? !0 : Math.max(c, d),
      resultToName: (c, d) => c.var("items", d)
    })
  };
  function S(c, d) {
    if (d === !0)
      return c.var("props", !0);
    const p = c.var("props", (0, e._)`{}`);
    return d !== void 0 && _(c, p, d), p;
  }
  ne.evaluatedPropsToName = S;
  function _(c, d, p) {
    Object.keys(p).forEach((k) => c.assign((0, e._)`${d}${(0, e.getProperty)(k)}`, !0));
  }
  ne.setEvaluated = _;
  const f = {};
  function y(c, d) {
    return c.scopeValue("func", {
      ref: d,
      code: f[d.code] || (f[d.code] = new t._Code(d.code))
    });
  }
  ne.useFunc = y;
  var u;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(u || (ne.Type = u = {}));
  function m(c, d, p) {
    if (c instanceof e.Name) {
      const k = d === u.Num;
      return p ? k ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : k ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return p ? (0, e.getProperty)(c).toString() : "/" + h(c);
  }
  ne.getErrorPath = m;
  function C(c, d, p = c.opts.strictSchema) {
    if (p) {
      if (d = `strict mode: ${d}`, p === !0)
        throw new Error(d);
      c.self.logger.warn(d);
    }
  }
  return ne.checkStrictMode = C, ne;
}
var xt = {}, qr;
function Ae() {
  if (qr) return xt;
  qr = 1, Object.defineProperty(xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = {
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
  return xt.default = t, xt;
}
var Vr;
function Mn() {
  return Vr || (Vr = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Ae();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: y }) => y ? (0, t.str)`"${f}" keyword must be ${y} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function i(f, y = e.keywordError, u, m) {
      const { it: C } = f, { gen: c, compositeRule: d, allErrors: p } = C, k = w(f, y, u);
      m ?? (d || p) ? l(c, k) : g(C, (0, t._)`[${k}]`);
    }
    e.reportError = i;
    function o(f, y = e.keywordError, u) {
      const { it: m } = f, { gen: C, compositeRule: c, allErrors: d } = m, p = w(f, y, u);
      l(C, p), c || d || g(m, r.default.vErrors);
    }
    e.reportExtraError = o;
    function s(f, y) {
      f.assign(r.default.errors, y), f.if((0, t._)`${r.default.vErrors} !== null`, () => f.if(y, () => f.assign((0, t._)`${r.default.vErrors}.length`, y), () => f.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: f, keyword: y, schemaValue: u, data: m, errsCount: C, it: c }) {
      if (C === void 0)
        throw new Error("ajv implementation error");
      const d = f.name("err");
      f.forRange("i", C, r.default.errors, (p) => {
        f.const(d, (0, t._)`${r.default.vErrors}[${p}]`), f.if((0, t._)`${d}.instancePath === undefined`, () => f.assign((0, t._)`${d}.instancePath`, (0, t.strConcat)(r.default.instancePath, c.errorPath))), f.assign((0, t._)`${d}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${y}`), c.opts.verbose && (f.assign((0, t._)`${d}.schema`, u), f.assign((0, t._)`${d}.data`, m));
      });
    }
    e.extendErrors = a;
    function l(f, y) {
      const u = f.const("err", y);
      f.if((0, t._)`${r.default.vErrors} === null`, () => f.assign(r.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${r.default.vErrors}.push(${u})`), f.code((0, t._)`${r.default.errors}++`);
    }
    function g(f, y) {
      const { gen: u, validateName: m, schemaEnv: C } = f;
      C.$async ? u.throw((0, t._)`new ${f.ValidationError}(${y})`) : (u.assign((0, t._)`${m}.errors`, y), u.return(!1));
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
    function w(f, y, u) {
      const { createErrors: m } = f.it;
      return m === !1 ? (0, t._)`{}` : $(f, y, u);
    }
    function $(f, y, u = {}) {
      const { gen: m, it: C } = f, c = [
        v(C, u),
        S(f, u)
      ];
      return _(f, y, c), m.object(...c);
    }
    function v({ errorPath: f }, { instancePath: y }) {
      const u = y ? (0, t.str)`${f}${(0, n.getErrorPath)(y, n.Type.Str)}` : f;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, u)];
    }
    function S({ keyword: f, it: { errSchemaPath: y } }, { schemaPath: u, parentSchema: m }) {
      let C = m ? y : (0, t.str)`${y}/${f}`;
      return u && (C = (0, t.str)`${C}${(0, n.getErrorPath)(u, n.Type.Str)}`), [h.schemaPath, C];
    }
    function _(f, { params: y, message: u }, m) {
      const { keyword: C, data: c, schemaValue: d, it: p } = f, { opts: k, propertyName: E, topSchemaRef: F, schemaPath: z } = p;
      m.push([h.keyword, C], [h.params, typeof y == "function" ? y(f) : y || (0, t._)`{}`]), k.messages && m.push([h.message, typeof u == "function" ? u(f) : u]), k.verbose && m.push([h.schema, d], [h.parentSchema, (0, t._)`${F}${z}`], [r.default.data, c]), E && m.push([h.propertyName, E]);
    }
  })(Hn)), Hn;
}
var Br;
function Ss() {
  if (Br) return Ue;
  Br = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.boolOrEmptySchema = Ue.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Ae(), r = {
    message: "boolean schema is false"
  };
  function i(a) {
    const { gen: l, schema: g, validateName: h } = a;
    g === !1 ? s(a, !1) : typeof g == "object" && g.$async === !0 ? l.return(n.default.data) : (l.assign((0, t._)`${h}.errors`, null), l.return(!0));
  }
  Ue.topBoolOrEmptySchema = i;
  function o(a, l) {
    const { gen: g, schema: h } = a;
    h === !1 ? (g.var(l, !1), s(a)) : g.var(l, !0);
  }
  Ue.boolOrEmptySchema = o;
  function s(a, l) {
    const { gen: g, data: h } = a, w = {
      gen: g,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(w, r, void 0, l);
  }
  return Ue;
}
var pe = {}, Ke = {}, Lr;
function Ti() {
  if (Lr) return Ke;
  Lr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.getRules = Ke.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(i) {
    return typeof i == "string" && t.has(i);
  }
  Ke.isJSONType = n;
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
  return Ke.getRules = r, Ke;
}
var ze = {}, Ur;
function ji() {
  if (Ur) return ze;
  Ur = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.shouldUseRule = ze.shouldUseGroup = ze.schemaHasRulesForType = void 0;
  function e({ schema: r, self: i }, o) {
    const s = i.RULES.types[o];
    return s && s !== !0 && t(r, s);
  }
  ze.schemaHasRulesForType = e;
  function t(r, i) {
    return i.rules.some((o) => n(r, o));
  }
  ze.shouldUseGroup = t;
  function n(r, i) {
    var o;
    return r[i.keyword] !== void 0 || ((o = i.definition.implements) === null || o === void 0 ? void 0 : o.some((s) => r[s] !== void 0));
  }
  return ze.shouldUseRule = n, ze;
}
var Kr;
function Nn() {
  if (Kr) return pe;
  Kr = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.reportTypeError = pe.checkDataTypes = pe.checkDataType = pe.coerceAndCheckDataType = pe.getJSONTypes = pe.getSchemaTypes = pe.DataType = void 0;
  const e = /* @__PURE__ */ Ti(), t = /* @__PURE__ */ ji(), n = /* @__PURE__ */ Mn(), r = /* @__PURE__ */ te(), i = /* @__PURE__ */ oe();
  var o;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(o || (pe.DataType = o = {}));
  function s(u) {
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
  pe.getSchemaTypes = s;
  function a(u) {
    const m = Array.isArray(u) ? u : u ? [u] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  pe.getJSONTypes = a;
  function l(u, m) {
    const { gen: C, data: c, opts: d } = u, p = h(m, d.coerceTypes), k = m.length > 0 && !(p.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(u, m[0]));
    if (k) {
      const E = S(m, c, d.strictNumbers, o.Wrong);
      C.if(E, () => {
        p.length ? w(u, m, p) : f(u);
      });
    }
    return k;
  }
  pe.coerceAndCheckDataType = l;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(u, m) {
    return m ? u.filter((C) => g.has(C) || m === "array" && C === "array") : [];
  }
  function w(u, m, C) {
    const { gen: c, data: d, opts: p } = u, k = c.let("dataType", (0, r._)`typeof ${d}`), E = c.let("coerced", (0, r._)`undefined`);
    p.coerceTypes === "array" && c.if((0, r._)`${k} == 'object' && Array.isArray(${d}) && ${d}.length == 1`, () => c.assign(d, (0, r._)`${d}[0]`).assign(k, (0, r._)`typeof ${d}`).if(S(m, d, p.strictNumbers), () => c.assign(E, d))), c.if((0, r._)`${E} !== undefined`);
    for (const z of C)
      (g.has(z) || z === "array" && p.coerceTypes === "array") && F(z);
    c.else(), f(u), c.endIf(), c.if((0, r._)`${E} !== undefined`, () => {
      c.assign(d, E), $(u, E);
    });
    function F(z) {
      switch (z) {
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
  function $({ gen: u, parentData: m, parentDataProperty: C }, c) {
    u.if((0, r._)`${m} !== undefined`, () => u.assign((0, r._)`${m}[${C}]`, c));
  }
  function v(u, m, C, c = o.Correct) {
    const d = c === o.Correct ? r.operators.EQ : r.operators.NEQ;
    let p;
    switch (u) {
      case "null":
        return (0, r._)`${m} ${d} null`;
      case "array":
        p = (0, r._)`Array.isArray(${m})`;
        break;
      case "object":
        p = (0, r._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        p = k((0, r._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        p = k();
        break;
      default:
        return (0, r._)`typeof ${m} ${d} ${u}`;
    }
    return c === o.Correct ? p : (0, r.not)(p);
    function k(E = r.nil) {
      return (0, r.and)((0, r._)`typeof ${m} == "number"`, E, C ? (0, r._)`isFinite(${m})` : r.nil);
    }
  }
  pe.checkDataType = v;
  function S(u, m, C, c) {
    if (u.length === 1)
      return v(u[0], m, C, c);
    let d;
    const p = (0, i.toHash)(u);
    if (p.array && p.object) {
      const k = (0, r._)`typeof ${m} != "object"`;
      d = p.null ? k : (0, r._)`!${m} || ${k}`, delete p.null, delete p.array, delete p.object;
    } else
      d = r.nil;
    p.number && delete p.integer;
    for (const k in p)
      d = (0, r.and)(d, v(k, m, C, c));
    return d;
  }
  pe.checkDataTypes = S;
  const _ = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: m }) => typeof u == "string" ? (0, r._)`{type: ${u}}` : (0, r._)`{type: ${m}}`
  };
  function f(u) {
    const m = y(u);
    (0, n.reportError)(m, _);
  }
  pe.reportTypeError = f;
  function y(u) {
    const { gen: m, data: C, schema: c } = u, d = (0, i.schemaRefOrVal)(u, c, "type");
    return {
      gen: m,
      keyword: "type",
      data: C,
      schema: c.type,
      schemaCode: d,
      schemaValue: d,
      parentSchema: c,
      params: {},
      it: u
    };
  }
  return pe;
}
var ht = {}, Hr;
function Cs() {
  if (Hr) return ht;
  Hr = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe();
  function n(i, o) {
    const { properties: s, items: a } = i.schema;
    if (o === "object" && s)
      for (const l in s)
        r(i, l, s[l].default);
    else o === "array" && Array.isArray(a) && a.forEach((l, g) => r(i, g, l.default));
  }
  ht.assignDefaults = n;
  function r(i, o, s) {
    const { gen: a, compositeRule: l, data: g, opts: h } = i;
    if (s === void 0)
      return;
    const w = (0, e._)`${g}${(0, e.getProperty)(o)}`;
    if (l) {
      (0, t.checkStrictMode)(i, `default is ignored for: ${w}`);
      return;
    }
    let $ = (0, e._)`${w} === undefined`;
    h.useDefaults === "empty" && ($ = (0, e._)`${$} || ${w} === null || ${w} === ""`), a.if($, (0, e._)`${w} = ${(0, e.stringify)(s)}`);
  }
  return ht;
}
var Ce = {}, ae = {}, Gr;
function Re() {
  if (Gr) return ae;
  Gr = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ oe();
  function i(u, m) {
    const { gen: C, data: c, it: d } = u;
    C.if(h(C, c, m, d.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${m}` }, !0), u.error();
    });
  }
  ae.checkReportMissingProp = i;
  function o({ gen: u, data: m, it: { opts: C } }, c, d) {
    return (0, e.or)(...c.map((p) => (0, e.and)(h(u, m, p, C.ownProperties), (0, e._)`${d} = ${p}`)));
  }
  ae.checkMissingProp = o;
  function s(u, m) {
    u.setParams({ missingProperty: m }, !0), u.error();
  }
  ae.reportMissingProp = s;
  function a(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = a;
  function l(u, m, C) {
    return (0, e._)`${a(u)}.call(${m}, ${C})`;
  }
  ae.isOwnProperty = l;
  function g(u, m, C, c) {
    const d = (0, e._)`${m}${(0, e.getProperty)(C)} !== undefined`;
    return c ? (0, e._)`${d} && ${l(u, m, C)}` : d;
  }
  ae.propertyInData = g;
  function h(u, m, C, c) {
    const d = (0, e._)`${m}${(0, e.getProperty)(C)} === undefined`;
    return c ? (0, e.or)(d, (0, e.not)(l(u, m, C))) : d;
  }
  ae.noPropertyInData = h;
  function w(u) {
    return u ? Object.keys(u).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = w;
  function $(u, m) {
    return w(m).filter((C) => !(0, t.alwaysValidSchema)(u, m[C]));
  }
  ae.schemaProperties = $;
  function v({ schemaCode: u, data: m, it: { gen: C, topSchemaRef: c, schemaPath: d, errorPath: p }, it: k }, E, F, z) {
    const P = z ? (0, e._)`${u}, ${m}, ${c}${d}` : m, j = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, p)],
      [n.default.parentData, k.parentData],
      [n.default.parentDataProperty, k.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    k.opts.dynamicRef && j.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const G = (0, e._)`${P}, ${C.object(...j)}`;
    return F !== e.nil ? (0, e._)`${E}.call(${F}, ${G})` : (0, e._)`${E}(${G})`;
  }
  ae.callValidateCode = v;
  const S = (0, e._)`new RegExp`;
  function _({ gen: u, it: { opts: m } }, C) {
    const c = m.unicodeRegExp ? "u" : "", { regExp: d } = m.code, p = d(C, c);
    return u.scopeValue("pattern", {
      key: p.toString(),
      ref: p,
      code: (0, e._)`${d.code === "new RegExp" ? S : (0, r.useFunc)(u, d)}(${C}, ${c})`
    });
  }
  ae.usePattern = _;
  function f(u) {
    const { gen: m, data: C, keyword: c, it: d } = u, p = m.name("valid");
    if (d.allErrors) {
      const E = m.let("valid", !0);
      return k(() => m.assign(E, !1)), E;
    }
    return m.var(p, !0), k(() => m.break()), p;
    function k(E) {
      const F = m.const("len", (0, e._)`${C}.length`);
      m.forRange("i", 0, F, (z) => {
        u.subschema({
          keyword: c,
          dataProp: z,
          dataPropType: t.Type.Num
        }, p), m.if((0, e.not)(p), E);
      });
    }
  }
  ae.validateArray = f;
  function y(u) {
    const { gen: m, schema: C, keyword: c, it: d } = u;
    if (!Array.isArray(C))
      throw new Error("ajv implementation error");
    if (C.some((F) => (0, t.alwaysValidSchema)(d, F)) && !d.opts.unevaluated)
      return;
    const k = m.let("valid", !1), E = m.name("_valid");
    m.block(() => C.forEach((F, z) => {
      const P = u.subschema({
        keyword: c,
        schemaProp: z,
        compositeRule: !0
      }, E);
      m.assign(k, (0, e._)`${k} || ${E}`), u.mergeValidEvaluated(P, E) || m.if((0, e.not)(k));
    })), u.result(k, () => u.reset(), () => u.error(!0));
  }
  return ae.validateUnion = y, ae;
}
var Wr;
function ks() {
  if (Wr) return Ce;
  Wr = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.validateKeywordUsage = Ce.validSchemaType = Ce.funcKeywordCode = Ce.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ Mn();
  function i($, v) {
    const { gen: S, keyword: _, schema: f, parentSchema: y, it: u } = $, m = v.macro.call(u.self, f, y, u), C = g(S, _, m);
    u.opts.validateSchema !== !1 && u.self.validateSchema(m, !0);
    const c = S.name("valid");
    $.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${_}`,
      topSchemaRef: C,
      compositeRule: !0
    }, c), $.pass(c, () => $.error(!0));
  }
  Ce.macroKeywordCode = i;
  function o($, v) {
    var S;
    const { gen: _, keyword: f, schema: y, parentSchema: u, $data: m, it: C } = $;
    l(C, v);
    const c = !m && v.compile ? v.compile.call(C.self, y, u, C) : v.validate, d = g(_, f, c), p = _.let("valid");
    $.block$data(p, k), $.ok((S = v.valid) !== null && S !== void 0 ? S : p);
    function k() {
      if (v.errors === !1)
        z(), v.modifying && s($), P(() => $.error());
      else {
        const j = v.async ? E() : F();
        v.modifying && s($), P(() => a($, j));
      }
    }
    function E() {
      const j = _.let("ruleErrs", null);
      return _.try(() => z((0, e._)`await `), (G) => _.assign(p, !1).if((0, e._)`${G} instanceof ${C.ValidationError}`, () => _.assign(j, (0, e._)`${G}.errors`), () => _.throw(G))), j;
    }
    function F() {
      const j = (0, e._)`${d}.errors`;
      return _.assign(j, null), z(e.nil), j;
    }
    function z(j = v.async ? (0, e._)`await ` : e.nil) {
      const G = C.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in v && !m || v.schema === !1);
      _.assign(p, (0, e._)`${j}${(0, n.callValidateCode)($, d, G, Q)}`, v.modifying);
    }
    function P(j) {
      var G;
      _.if((0, e.not)((G = v.valid) !== null && G !== void 0 ? G : p), j);
    }
  }
  Ce.funcKeywordCode = o;
  function s($) {
    const { gen: v, data: S, it: _ } = $;
    v.if(_.parentData, () => v.assign(S, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a($, v) {
    const { gen: S } = $;
    S.if((0, e._)`Array.isArray(${v})`, () => {
      S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)($);
    }, () => $.error());
  }
  function l({ schemaEnv: $ }, v) {
    if (v.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function g($, v, S) {
    if (S === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return $.scopeValue("keyword", typeof S == "function" ? { ref: S } : { ref: S, code: (0, e.stringify)(S) });
  }
  function h($, v, S = !1) {
    return !v.length || v.some((_) => _ === "array" ? Array.isArray($) : _ === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == _ || S && typeof $ > "u");
  }
  Ce.validSchemaType = h;
  function w({ schema: $, opts: v, self: S, errSchemaPath: _ }, f, y) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(y) : f.keyword !== y)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u?.some((m) => !Object.prototype.hasOwnProperty.call($, m)))
      throw new Error(`parent schema must have dependencies of ${y}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema($[y])) {
      const C = `keyword "${y}" value is invalid at path "${_}": ` + S.errorsText(f.validateSchema.errors);
      if (v.validateSchema === "log")
        S.logger.error(C);
      else
        throw new Error(C);
    }
  }
  return Ce.validateKeywordUsage = w, Ce;
}
var Ie = {}, Jr;
function Es() {
  if (Jr) return Ie;
  Jr = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.extendSubschemaMode = Ie.extendSubschemaData = Ie.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe();
  function n(o, { keyword: s, schemaProp: a, schema: l, schemaPath: g, errSchemaPath: h, topSchemaRef: w }) {
    if (s !== void 0 && l !== void 0)
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
    if (l !== void 0) {
      if (g === void 0 || h === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: g,
        topSchemaRef: w,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ie.getSubschema = n;
  function r(o, s, { dataProp: a, dataPropType: l, data: g, dataTypes: h, propertyName: w }) {
    if (g !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = s;
    if (a !== void 0) {
      const { errorPath: S, dataPathArr: _, opts: f } = s, y = $.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      v(y), o.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(a, l, f.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${a}`, o.dataPathArr = [..._, o.parentDataProperty];
    }
    if (g !== void 0) {
      const S = g instanceof e.Name ? g : $.let("data", g, !0);
      v(S), w !== void 0 && (o.propertyName = w);
    }
    h && (o.dataTypes = h);
    function v(S) {
      o.data = S, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [...s.dataNames, S];
    }
  }
  Ie.extendSubschemaData = r;
  function i(o, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: l, createErrors: g, allErrors: h }) {
    l !== void 0 && (o.compositeRule = l), g !== void 0 && (o.createErrors = g), h !== void 0 && (o.allErrors = h), o.jtdDiscriminator = s, o.jtdMetadata = a;
  }
  return Ie.extendSubschemaMode = i, Ie;
}
var he = {}, Yn, Yr;
function zi() {
  return Yr || (Yr = 1, Yn = function e(t, n) {
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
  }), Yn;
}
var Xn = { exports: {} }, Xr;
function xs() {
  if (Xr) return Xn.exports;
  Xr = 1;
  var e = Xn.exports = function(r, i, o) {
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
  function t(r, i, o, s, a, l, g, h, w, $) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      i(s, a, l, g, h, w, $);
      for (var v in s) {
        var S = s[v];
        if (Array.isArray(S)) {
          if (v in e.arrayKeywords)
            for (var _ = 0; _ < S.length; _++)
              t(r, i, o, S[_], a + "/" + v + "/" + _, l, a, v, s, _);
        } else if (v in e.propsKeywords) {
          if (S && typeof S == "object")
            for (var f in S)
              t(r, i, o, S[f], a + "/" + v + "/" + n(f), l, a, v, s, f);
        } else (v in e.keywords || r.allKeys && !(v in e.skipKeywords)) && t(r, i, o, S, a + "/" + v, l, a, v, s);
      }
      o(s, a, l, g, h, w, $);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Xn.exports;
}
var Zr;
function Tn() {
  if (Zr) return he;
  Zr = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.getSchemaRefs = he.resolveUrl = he.normalizeId = he._getFullPath = he.getFullPath = he.inlineRef = void 0;
  const e = /* @__PURE__ */ oe(), t = zi(), n = xs(), r = /* @__PURE__ */ new Set([
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
  function i(_, f = !0) {
    return typeof _ == "boolean" ? !0 : f === !0 ? !s(_) : f ? a(_) <= f : !1;
  }
  he.inlineRef = i;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(_) {
    for (const f in _) {
      if (o.has(f))
        return !0;
      const y = _[f];
      if (Array.isArray(y) && y.some(s) || typeof y == "object" && s(y))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let f = 0;
    for (const y in _) {
      if (y === "$ref")
        return 1 / 0;
      if (f++, !r.has(y) && (typeof _[y] == "object" && (0, e.eachItem)(_[y], (u) => f += a(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function l(_, f = "", y) {
    y !== !1 && (f = w(f));
    const u = _.parse(f);
    return g(_, u);
  }
  he.getFullPath = l;
  function g(_, f) {
    return _.serialize(f).split("#")[0] + "#";
  }
  he._getFullPath = g;
  const h = /#\/?$/;
  function w(_) {
    return _ ? _.replace(h, "") : "";
  }
  he.normalizeId = w;
  function $(_, f, y) {
    return y = w(y), _.resolve(f, y);
  }
  he.resolveUrl = $;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function S(_, f) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: y, uriResolver: u } = this.opts, m = w(_[y] || f), C = { "": m }, c = l(u, m, !1), d = {}, p = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (F, z, P, j) => {
      if (j === void 0)
        return;
      const G = c + z;
      let Q = C[j];
      typeof F[y] == "string" && (Q = X.call(this, F[y])), K.call(this, F.$anchor), K.call(this, F.$dynamicAnchor), C[z] = Q;
      function X(L) {
        const J = this.opts.uriResolver.resolve;
        if (L = w(Q ? J(Q, L) : L), p.has(L))
          throw E(L);
        p.add(L);
        let q = this.refs[L];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? k(F, q.schema, L) : L !== w(G) && (L[0] === "#" ? (k(F, d[L], L), d[L] = F) : this.refs[L] = G), L;
      }
      function K(L) {
        if (typeof L == "string") {
          if (!v.test(L))
            throw new Error(`invalid anchor "${L}"`);
          X.call(this, `#${L}`);
        }
      }
    }), d;
    function k(F, z, P) {
      if (z !== void 0 && !t(F, z))
        throw E(P);
    }
    function E(F) {
      return new Error(`reference "${F}" resolves to more than one schema`);
    }
  }
  return he.getSchemaRefs = S, he;
}
var Qr;
function jn() {
  if (Qr) return je;
  Qr = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getData = je.KeywordCxt = je.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ss(), t = /* @__PURE__ */ Nn(), n = /* @__PURE__ */ ji(), r = /* @__PURE__ */ Nn(), i = /* @__PURE__ */ Cs(), o = /* @__PURE__ */ ks(), s = /* @__PURE__ */ Es(), a = /* @__PURE__ */ te(), l = /* @__PURE__ */ Ae(), g = /* @__PURE__ */ Tn(), h = /* @__PURE__ */ oe(), w = /* @__PURE__ */ Mn();
  function $(N) {
    if (c(N) && (p(N), C(N))) {
      f(N);
      return;
    }
    v(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  je.validateFunctionCode = $;
  function v({ gen: N, validateName: M, schema: B, schemaEnv: U, opts: Y }, re) {
    Y.code.es5 ? N.func(M, (0, a._)`${l.default.data}, ${l.default.valCxt}`, U.$async, () => {
      N.code((0, a._)`"use strict"; ${u(B, Y)}`), _(N, Y), N.code(re);
    }) : N.func(M, (0, a._)`${l.default.data}, ${S(Y)}`, U.$async, () => N.code(u(B, Y)).code(re));
  }
  function S(N) {
    return (0, a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${N.dynamicRef ? (0, a._)`, ${l.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(N, M) {
    N.if(l.default.valCxt, () => {
      N.var(l.default.instancePath, (0, a._)`${l.default.valCxt}.${l.default.instancePath}`), N.var(l.default.parentData, (0, a._)`${l.default.valCxt}.${l.default.parentData}`), N.var(l.default.parentDataProperty, (0, a._)`${l.default.valCxt}.${l.default.parentDataProperty}`), N.var(l.default.rootData, (0, a._)`${l.default.valCxt}.${l.default.rootData}`), M.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      N.var(l.default.instancePath, (0, a._)`""`), N.var(l.default.parentData, (0, a._)`undefined`), N.var(l.default.parentDataProperty, (0, a._)`undefined`), N.var(l.default.rootData, l.default.data), M.dynamicRef && N.var(l.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function f(N) {
    const { schema: M, opts: B, gen: U } = N;
    v(N, () => {
      B.$comment && M.$comment && j(N), F(N), U.let(l.default.vErrors, null), U.let(l.default.errors, 0), B.unevaluated && y(N), k(N), G(N);
    });
  }
  function y(N) {
    const { gen: M, validateName: B } = N;
    N.evaluated = M.const("evaluated", (0, a._)`${B}.evaluated`), M.if((0, a._)`${N.evaluated}.dynamicProps`, () => M.assign((0, a._)`${N.evaluated}.props`, (0, a._)`undefined`)), M.if((0, a._)`${N.evaluated}.dynamicItems`, () => M.assign((0, a._)`${N.evaluated}.items`, (0, a._)`undefined`));
  }
  function u(N, M) {
    const B = typeof N == "object" && N[M.schemaId];
    return B && (M.code.source || M.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function m(N, M) {
    if (c(N) && (p(N), C(N))) {
      d(N, M);
      return;
    }
    (0, e.boolOrEmptySchema)(N, M);
  }
  function C({ schema: N, self: M }) {
    if (typeof N == "boolean")
      return !N;
    for (const B in N)
      if (M.RULES.all[B])
        return !0;
    return !1;
  }
  function c(N) {
    return typeof N.schema != "boolean";
  }
  function d(N, M) {
    const { schema: B, gen: U, opts: Y } = N;
    Y.$comment && B.$comment && j(N), z(N), P(N);
    const re = U.const("_errs", l.default.errors);
    k(N, re), U.var(M, (0, a._)`${re} === ${l.default.errors}`);
  }
  function p(N) {
    (0, h.checkUnknownRules)(N), E(N);
  }
  function k(N, M) {
    if (N.opts.jtd)
      return X(N, [], !1, M);
    const B = (0, t.getSchemaTypes)(N.schema), U = (0, t.coerceAndCheckDataType)(N, B);
    X(N, B, !U, M);
  }
  function E(N) {
    const { schema: M, errSchemaPath: B, opts: U, self: Y } = N;
    M.$ref && U.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(M, Y.RULES) && Y.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function F(N) {
    const { schema: M, opts: B } = N;
    M.default !== void 0 && B.useDefaults && B.strictSchema && (0, h.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function z(N) {
    const M = N.schema[N.opts.schemaId];
    M && (N.baseId = (0, g.resolveUrl)(N.opts.uriResolver, N.baseId, M));
  }
  function P(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function j({ gen: N, schemaEnv: M, schema: B, errSchemaPath: U, opts: Y }) {
    const re = B.$comment;
    if (Y.$comment === !0)
      N.code((0, a._)`${l.default.self}.logger.log(${re})`);
    else if (typeof Y.$comment == "function") {
      const ue = (0, a.str)`${U}/$comment`, Se = N.scopeValue("root", { ref: M.root });
      N.code((0, a._)`${l.default.self}.opts.$comment(${re}, ${ue}, ${Se}.schema)`);
    }
  }
  function G(N) {
    const { gen: M, schemaEnv: B, validateName: U, ValidationError: Y, opts: re } = N;
    B.$async ? M.if((0, a._)`${l.default.errors} === 0`, () => M.return(l.default.data), () => M.throw((0, a._)`new ${Y}(${l.default.vErrors})`)) : (M.assign((0, a._)`${U}.errors`, l.default.vErrors), re.unevaluated && Q(N), M.return((0, a._)`${l.default.errors} === 0`));
  }
  function Q({ gen: N, evaluated: M, props: B, items: U }) {
    B instanceof a.Name && N.assign((0, a._)`${M}.props`, B), U instanceof a.Name && N.assign((0, a._)`${M}.items`, U);
  }
  function X(N, M, B, U) {
    const { gen: Y, schema: re, data: ue, allErrors: Se, opts: ye, self: $e } = N, { RULES: fe } = $e;
    if (re.$ref && (ye.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(re, fe))) {
      Y.block(() => W(N, "$ref", fe.all.$ref.definition));
      return;
    }
    ye.jtd || L(N, M), Y.block(() => {
      for (const we of fe.rules)
        Xe(we);
      Xe(fe.post);
    });
    function Xe(we) {
      (0, n.shouldUseGroup)(re, we) && (we.type ? (Y.if((0, r.checkDataType)(we.type, ue, ye.strictNumbers)), K(N, we), M.length === 1 && M[0] === we.type && B && (Y.else(), (0, r.reportTypeError)(N)), Y.endIf()) : K(N, we), Se || Y.if((0, a._)`${l.default.errors} === ${U || 0}`));
    }
  }
  function K(N, M) {
    const { gen: B, schema: U, opts: { useDefaults: Y } } = N;
    Y && (0, i.assignDefaults)(N, M.type), B.block(() => {
      for (const re of M.rules)
        (0, n.shouldUseRule)(U, re) && W(N, re.keyword, re.definition, M.type);
    });
  }
  function L(N, M) {
    N.schemaEnv.meta || !N.opts.strictTypes || (J(N, M), N.opts.allowUnionTypes || q(N, M), A(N, N.dataTypes));
  }
  function J(N, M) {
    if (M.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = M;
        return;
      }
      M.forEach((B) => {
        R(N.dataTypes, B) || x(N, `type "${B}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), b(N, M);
    }
  }
  function q(N, M) {
    M.length > 1 && !(M.length === 2 && M.includes("null")) && x(N, "use allowUnionTypes to allow union type keyword");
  }
  function A(N, M) {
    const B = N.self.RULES.all;
    for (const U in B) {
      const Y = B[U];
      if (typeof Y == "object" && (0, n.shouldUseRule)(N.schema, Y)) {
        const { type: re } = Y.definition;
        re.length && !re.some((ue) => D(M, ue)) && x(N, `missing type "${re.join(",")}" for keyword "${U}"`);
      }
    }
  }
  function D(N, M) {
    return N.includes(M) || M === "number" && N.includes("integer");
  }
  function R(N, M) {
    return N.includes(M) || M === "integer" && N.includes("number");
  }
  function b(N, M) {
    const B = [];
    for (const U of N.dataTypes)
      R(M, U) ? B.push(U) : M.includes("integer") && U === "number" && B.push("integer");
    N.dataTypes = B;
  }
  function x(N, M) {
    const B = N.schemaEnv.baseId + N.errSchemaPath;
    M += ` at "${B}" (strictTypes)`, (0, h.checkStrictMode)(N, M, N.opts.strictTypes);
  }
  class I {
    constructor(M, B, U) {
      if ((0, o.validateKeywordUsage)(M, B, U), this.gen = M.gen, this.allErrors = M.allErrors, this.keyword = U, this.data = M.data, this.schema = M.schema[U], this.$data = B.$data && M.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(M, this.schema, U, this.$data), this.schemaType = B.schemaType, this.parentSchema = M.schema, this.params = {}, this.it = M, this.def = B, this.$data)
        this.schemaCode = M.gen.const("vSchema", ie(this.$data, M));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${U} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = M.gen.const("_errs", l.default.errors));
    }
    result(M, B, U) {
      this.failResult((0, a.not)(M), B, U);
    }
    failResult(M, B, U) {
      this.gen.if(M), U ? U() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
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
    error(M, B, U) {
      if (B) {
        this.setParams(B), this._error(M, U), this.setParams({});
        return;
      }
      this._error(M, U);
    }
    _error(M, B) {
      (M ? w.reportExtraError : w.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(M) {
      this.allErrors || this.gen.if(M);
    }
    setParams(M, B) {
      B ? Object.assign(this.params, M) : this.params = M;
    }
    block$data(M, B, U = a.nil) {
      this.gen.block(() => {
        this.check$data(M, U), B();
      });
    }
    check$data(M = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: U, schemaCode: Y, schemaType: re, def: ue } = this;
      U.if((0, a.or)((0, a._)`${Y} === undefined`, B)), M !== a.nil && U.assign(M, !0), (re.length || ue.validateSchema) && (U.elseIf(this.invalid$data()), this.$dataError(), M !== a.nil && U.assign(M, !1)), U.else();
    }
    invalid$data() {
      const { gen: M, schemaCode: B, schemaType: U, def: Y, it: re } = this;
      return (0, a.or)(ue(), Se());
      function ue() {
        if (U.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const ye = Array.isArray(U) ? U : [U];
          return (0, a._)`${(0, r.checkDataTypes)(ye, B, re.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function Se() {
        if (Y.validateSchema) {
          const ye = M.scopeValue("validate$data", { ref: Y.validateSchema });
          return (0, a._)`!${ye}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(M, B) {
      const U = (0, s.getSubschema)(this.it, M);
      (0, s.extendSubschemaData)(U, this.it, M), (0, s.extendSubschemaMode)(U, M);
      const Y = { ...this.it, ...U, items: void 0, props: void 0 };
      return m(Y, B), Y;
    }
    mergeEvaluated(M, B) {
      const { it: U, gen: Y } = this;
      U.opts.unevaluated && (U.props !== !0 && M.props !== void 0 && (U.props = h.mergeEvaluated.props(Y, M.props, U.props, B)), U.items !== !0 && M.items !== void 0 && (U.items = h.mergeEvaluated.items(Y, M.items, U.items, B)));
    }
    mergeValidEvaluated(M, B) {
      const { it: U, gen: Y } = this;
      if (U.opts.unevaluated && (U.props !== !0 || U.items !== !0))
        return Y.if(B, () => this.mergeEvaluated(M, a.Name)), !0;
    }
  }
  je.KeywordCxt = I;
  function W(N, M, B, U) {
    const Y = new I(N, B, M);
    "code" in B ? B.code(Y, U) : Y.$data && B.validate ? (0, o.funcKeywordCode)(Y, B) : "macro" in B ? (0, o.macroKeywordCode)(Y, B) : (B.compile || B.validate) && (0, o.funcKeywordCode)(Y, B);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, ee = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ie(N, { dataLevel: M, dataNames: B, dataPathArr: U }) {
    let Y, re;
    if (N === "")
      return l.default.rootData;
    if (N[0] === "/") {
      if (!H.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      Y = N, re = l.default.rootData;
    } else {
      const $e = ee.exec(N);
      if (!$e)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const fe = +$e[1];
      if (Y = $e[2], Y === "#") {
        if (fe >= M)
          throw new Error(ye("property/index", fe));
        return U[M - fe];
      }
      if (fe > M)
        throw new Error(ye("data", fe));
      if (re = B[M - fe], !Y)
        return re;
    }
    let ue = re;
    const Se = Y.split("/");
    for (const $e of Se)
      $e && (re = (0, a._)`${re}${(0, a.getProperty)((0, h.unescapeJsonPointer)($e))}`, ue = (0, a._)`${ue} && ${re}`);
    return ue;
    function ye($e, fe) {
      return `Cannot access ${$e} ${fe} levels up, current level is ${M}`;
    }
  }
  return je.getData = ie, je;
}
var Pt = {}, eo;
function hr() {
  if (eo) return Pt;
  eo = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Pt.default = e, Pt;
}
var At = {}, to;
function zn() {
  if (to) return At;
  to = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Tn();
  class t extends Error {
    constructor(r, i, o, s) {
      super(s || `can't resolve reference ${o} from id ${i}`), this.missingRef = (0, e.resolveUrl)(r, i, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return At.default = t, At;
}
var be = {}, no;
function In() {
  if (no) return be;
  no = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.resolveSchema = be.getCompilingSchema = be.resolveRef = be.compileSchema = be.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ hr(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ Tn(), i = /* @__PURE__ */ oe(), o = /* @__PURE__ */ jn();
  class s {
    constructor(y) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof y.schema == "object" && (m = y.schema), this.schema = y.schema, this.schemaId = y.schemaId, this.root = y.root || this, this.baseId = (u = y.baseId) !== null && u !== void 0 ? u : (0, r.normalizeId)(m?.[y.schemaId || "$id"]), this.schemaPath = y.schemaPath, this.localRefs = y.localRefs, this.meta = y.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  be.SchemaEnv = s;
  function a(f) {
    const y = h.call(this, f);
    if (y)
      return y;
    const u = (0, r.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: m, lines: C } = this.opts.code, { ownProperties: c } = this.opts, d = new e.CodeGen(this.scope, { es5: m, lines: C, ownProperties: c });
    let p;
    f.$async && (p = d.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = d.scopeName("validate");
    f.validateName = k;
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
      topSchemaRef: d.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: k,
      ValidationError: p,
      schema: f.schema,
      schemaEnv: f,
      rootId: u,
      baseId: f.baseId || u,
      schemaPath: e.nil,
      errSchemaPath: f.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let F;
    try {
      this._compilations.add(f), (0, o.validateFunctionCode)(E), d.optimize(this.opts.code.optimize);
      const z = d.toString();
      F = `${d.scopeRefs(n.default.scope)}return ${z}`, this.opts.code.process && (F = this.opts.code.process(F, f));
      const j = new Function(`${n.default.self}`, `${n.default.scope}`, F)(this, this.scope.get());
      if (this.scope.value(k, { ref: j }), j.errors = null, j.schema = f.schema, j.schemaEnv = f, f.$async && (j.$async = !0), this.opts.code.source === !0 && (j.source = { validateName: k, validateCode: z, scopeValues: d._values }), this.opts.unevaluated) {
        const { props: G, items: Q } = E;
        j.evaluated = {
          props: G instanceof e.Name ? void 0 : G,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: G instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, j.source && (j.source.evaluated = (0, e.stringify)(j.evaluated));
      }
      return f.validate = j, f;
    } catch (z) {
      throw delete f.validate, delete f.validateName, F && this.logger.error("Error compiling schema, function code:", F), z;
    } finally {
      this._compilations.delete(f);
    }
  }
  be.compileSchema = a;
  function l(f, y, u) {
    var m;
    u = (0, r.resolveUrl)(this.opts.uriResolver, y, u);
    const C = f.refs[u];
    if (C)
      return C;
    let c = $.call(this, f, u);
    if (c === void 0) {
      const d = (m = f.localRefs) === null || m === void 0 ? void 0 : m[u], { schemaId: p } = this.opts;
      d && (c = new s({ schema: d, schemaId: p, root: f, baseId: y }));
    }
    if (c !== void 0)
      return f.refs[u] = g.call(this, c);
  }
  be.resolveRef = l;
  function g(f) {
    return (0, r.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : a.call(this, f);
  }
  function h(f) {
    for (const y of this._compilations)
      if (w(y, f))
        return y;
  }
  be.getCompilingSchema = h;
  function w(f, y) {
    return f.schema === y.schema && f.root === y.root && f.baseId === y.baseId;
  }
  function $(f, y) {
    let u;
    for (; typeof (u = this.refs[y]) == "string"; )
      y = u;
    return u || this.schemas[y] || v.call(this, f, y);
  }
  function v(f, y) {
    const u = this.opts.uriResolver.parse(y), m = (0, r._getFullPath)(this.opts.uriResolver, u);
    let C = (0, r.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && m === C)
      return _.call(this, u, f);
    const c = (0, r.normalizeId)(m), d = this.refs[c] || this.schemas[c];
    if (typeof d == "string") {
      const p = v.call(this, f, d);
      return typeof p?.schema != "object" ? void 0 : _.call(this, u, p);
    }
    if (typeof d?.schema == "object") {
      if (d.validate || a.call(this, d), c === (0, r.normalizeId)(y)) {
        const { schema: p } = d, { schemaId: k } = this.opts, E = p[k];
        return E && (C = (0, r.resolveUrl)(this.opts.uriResolver, C, E)), new s({ schema: p, schemaId: k, root: f, baseId: C });
      }
      return _.call(this, u, d);
    }
  }
  be.resolveSchema = v;
  const S = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(f, { baseId: y, schema: u, root: m }) {
    var C;
    if (((C = f.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/")
      return;
    for (const p of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const k = u[(0, i.unescapeFragment)(p)];
      if (k === void 0)
        return;
      u = k;
      const E = typeof u == "object" && u[this.opts.schemaId];
      !S.has(p) && E && (y = (0, r.resolveUrl)(this.opts.uriResolver, y, E));
    }
    let c;
    if (typeof u != "boolean" && u.$ref && !(0, i.schemaHasRulesButRef)(u, this.RULES)) {
      const p = (0, r.resolveUrl)(this.opts.uriResolver, y, u.$ref);
      c = v.call(this, m, p);
    }
    const { schemaId: d } = this.opts;
    if (c = c || new s({ schema: u, schemaId: d, root: m, baseId: y }), c.schema !== c.root.schema)
      return c;
  }
  return be;
}
const Ps = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", As = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Rs = "object", Ns = ["$data"], Fs = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Os = !1, Ms = {
  $id: Ps,
  description: As,
  type: Rs,
  required: Ns,
  properties: Fs,
  additionalProperties: Os
};
var Rt = {}, mt = { exports: {} }, Zn, ro;
function Ii() {
  if (ro) return Zn;
  ro = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), r = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function o(c) {
    let d = "", p = 0, k = 0;
    for (k = 0; k < c.length; k++)
      if (p = c[k].charCodeAt(0), p !== 48) {
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
          return "";
        d += c[k];
        break;
      }
    for (k += 1; k < c.length; k++) {
      if (p = c[k].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102))
        return "";
      d += c[k];
    }
    return d;
  }
  const s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function a(c) {
    return c.length = 0, !0;
  }
  function l(c, d, p) {
    if (c.length) {
      const k = o(c);
      if (k !== "")
        d.push(k);
      else
        return p.error = !0, !1;
      c.length = 0;
    }
    return !0;
  }
  function g(c) {
    let d = 0;
    const p = { error: !1, address: "", zone: "" }, k = [], E = [];
    let F = !1, z = !1, P = l;
    for (let j = 0; j < c.length; j++) {
      const G = c[j];
      if (!(G === "[" || G === "]"))
        if (G === ":") {
          if (F === !0 && (z = !0), !P(E, k, p))
            break;
          if (++d > 7) {
            p.error = !0;
            break;
          }
          j > 0 && c[j - 1] === ":" && (F = !0), k.push(":");
          continue;
        } else if (G === "%") {
          if (!P(E, k, p))
            break;
          P = a;
        } else {
          E.push(G);
          continue;
        }
    }
    return E.length && (P === a ? p.zone = E.join("") : z ? k.push(E.join("")) : k.push(o(E))), p.address = k.join(""), p;
  }
  function h(c) {
    if (w(c, ":") < 2)
      return { host: c, isIPV6: !1 };
    const d = g(c);
    if (d.error)
      return { host: c, isIPV6: !1 };
    {
      let p = d.address, k = d.address;
      return d.zone && (p += "%" + d.zone, k += "%25" + d.zone), { host: p, isIPV6: !0, escapedHost: k };
    }
  }
  function w(c, d) {
    let p = 0;
    for (let k = 0; k < c.length; k++)
      c[k] === d && p++;
    return p;
  }
  function $(c) {
    let d = c;
    const p = [];
    let k = -1, E = 0;
    for (; E = d.length; ) {
      if (E === 1) {
        if (d === ".")
          break;
        if (d === "/") {
          p.push("/");
          break;
        } else {
          p.push(d);
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
          p.push("/");
          break;
        }
      } else if (E === 3 && d === "/..") {
        p.length !== 0 && p.pop(), p.push("/");
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
          d = d.slice(3), p.length !== 0 && p.pop();
          continue;
        }
      }
      if ((k = d.indexOf("/", 1)) === -1) {
        p.push(d);
        break;
      } else
        p.push(d.slice(0, k)), d = d.slice(k);
    }
    return p.join("");
  }
  const v = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, S = /[@/?#:]/g, _ = /[@/?#]/g;
  function f(c, d) {
    const p = d ? _ : S;
    return p.lastIndex = 0, c.replace(p, (k) => v[k]);
  }
  function y(c, d = !1) {
    if (c.indexOf("%") === -1)
      return c;
    let p = "";
    for (let k = 0; k < c.length; k++) {
      if (c[k] === "%" && k + 2 < c.length) {
        const E = c.slice(k + 1, k + 3);
        if (n(E)) {
          const F = E.toUpperCase(), z = String.fromCharCode(parseInt(F, 16));
          d && r(z) ? p += z : p += "%" + F, k += 2;
          continue;
        }
      }
      p += c[k];
    }
    return p;
  }
  function u(c) {
    let d = "";
    for (let p = 0; p < c.length; p++) {
      if (c[p] === "%" && p + 2 < c.length) {
        const k = c.slice(p + 1, p + 3);
        if (n(k)) {
          const E = k.toUpperCase(), F = String.fromCharCode(parseInt(E, 16));
          F !== "." && r(F) ? d += F : d += "%" + E, p += 2;
          continue;
        }
      }
      i(c[p]) ? d += c[p] : d += escape(c[p]);
    }
    return d;
  }
  function m(c) {
    let d = "";
    for (let p = 0; p < c.length; p++) {
      if (c[p] === "%" && p + 2 < c.length) {
        const k = c.slice(p + 1, p + 3);
        if (n(k)) {
          d += "%" + k.toUpperCase(), p += 2;
          continue;
        }
      }
      d += escape(c[p]);
    }
    return d;
  }
  function C(c) {
    const d = [];
    if (c.userinfo !== void 0 && (d.push(c.userinfo), d.push("@")), c.host !== void 0) {
      let p = unescape(c.host);
      if (!t(p)) {
        const k = h(p);
        k.isIPV6 === !0 ? p = `[${k.escapedHost}]` : p = f(p, !1);
      }
      d.push(p);
    }
    return (typeof c.port == "number" || typeof c.port == "string") && (d.push(":"), d.push(String(c.port))), d.length ? d.join("") : void 0;
  }
  return Zn = {
    nonSimpleDomain: s,
    recomposeAuthority: C,
    reescapeHostDelimiters: f,
    normalizePercentEncoding: y,
    normalizePathEncoding: u,
    escapePreservingEscapes: m,
    removeDotSegments: $,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: h,
    stringArrayToHexStripped: o
  }, Zn;
}
var Qn, oo;
function Ts() {
  if (oo) return Qn;
  oo = 1;
  const { isUUID: e } = Ii(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
      const [d, p] = c.resourceName.split("?");
      c.path = d && d !== "/" ? d : void 0, c.query = p, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function g(c, d) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const p = c.path.match(t);
    if (p) {
      const k = d.scheme || c.scheme || "urn";
      c.nid = p[1].toLowerCase(), c.nss = p[2];
      const E = `${k}:${d.nid || c.nid}`, F = C(E);
      c.path = void 0, F && (c = F.parse(c, d));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function h(c, d) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const p = d.scheme || c.scheme || "urn", k = c.nid.toLowerCase(), E = `${p}:${d.nid || k}`, F = C(E);
    F && (c = F.serialize(c, d));
    const z = c, P = c.nss;
    return z.path = `${k || d.nid}:${P}`, d.skipEscape = !0, z;
  }
  function w(c, d) {
    const p = c;
    return p.uuid = p.nss, p.nss = void 0, !d.tolerant && (!p.uuid || !e(p.uuid)) && (p.error = p.error || "UUID is not valid."), p;
  }
  function $(c) {
    const d = c;
    return d.nss = (c.uuid || "").toLowerCase(), d;
  }
  const v = (
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
      domainHost: v.domainHost,
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
  ), f = (
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
      http: v,
      https: S,
      ws: _,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: g,
          serialize: h,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: w,
          serialize: $,
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
  return Qn = {
    wsIsSecure: i,
    SCHEMES: m,
    isValidSchemeName: r,
    getSchemeHandler: C
  }, Qn;
}
var io;
function js() {
  if (io) return mt.exports;
  io = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizePercentEncoding: r, normalizePathEncoding: i, escapePreservingEscapes: o, reescapeHostDelimiters: s, isIPv4: a, nonSimpleDomain: l } = Ii(), { SCHEMES: g, getSchemeHandler: h } = Ts();
  function w(E, F) {
    return typeof E == "string" ? E = /** @type {T} */
    c(E, F) : typeof E == "object" && (E = /** @type {T} */
    C(_(E, F), F)), E;
  }
  function $(E, F, z) {
    const P = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, j = v(C(E, P), C(F, P), P, !0);
    return P.skipEscape = !0, _(j, P);
  }
  function v(E, F, z, P) {
    const j = {};
    return P || (E = C(_(E, z), z), F = C(_(F, z), z)), z = z || {}, !z.tolerant && F.scheme ? (j.scheme = F.scheme, j.userinfo = F.userinfo, j.host = F.host, j.port = F.port, j.path = t(F.path || ""), j.query = F.query) : (F.userinfo !== void 0 || F.host !== void 0 || F.port !== void 0 ? (j.userinfo = F.userinfo, j.host = F.host, j.port = F.port, j.path = t(F.path || ""), j.query = F.query) : (F.path ? (F.path[0] === "/" ? j.path = t(F.path) : ((E.userinfo !== void 0 || E.host !== void 0 || E.port !== void 0) && !E.path ? j.path = "/" + F.path : E.path ? j.path = E.path.slice(0, E.path.lastIndexOf("/") + 1) + F.path : j.path = F.path, j.path = t(j.path)), j.query = F.query) : (j.path = E.path, F.query !== void 0 ? j.query = F.query : j.query = E.query), j.userinfo = E.userinfo, j.host = E.host, j.port = E.port), j.scheme = E.scheme), j.fragment = F.fragment, j;
  }
  function S(E, F, z) {
    const P = p(E, z), j = p(F, z);
    return P !== void 0 && j !== void 0 && P.toLowerCase() === j.toLowerCase();
  }
  function _(E, F) {
    const z = {
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
    }, P = Object.assign({}, F), j = [], G = h(P.scheme || z.scheme);
    G && G.serialize && G.serialize(z, P), z.path !== void 0 && (P.skipEscape ? z.path = r(z.path) : (z.path = o(z.path), z.scheme !== void 0 && (z.path = z.path.split("%3A").join(":")))), P.reference !== "suffix" && z.scheme && j.push(z.scheme, ":");
    const Q = n(z);
    if (Q !== void 0 && (P.reference !== "suffix" && j.push("//"), j.push(Q), z.path && z.path[0] !== "/" && j.push("/")), z.path !== void 0) {
      let X = z.path;
      !P.absolutePath && (!G || !G.absolutePath) && (X = t(X)), Q === void 0 && X[0] === "/" && X[1] === "/" && (X = "/%2F" + X.slice(2)), j.push(X);
    }
    return z.query !== void 0 && j.push("?", z.query), z.fragment !== void 0 && j.push("#", z.fragment), j.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, y = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
  function u(E, F) {
    if (F[2] !== void 0 && E.path && E.path[0] !== "/")
      return 'URI path must start with "/" when authority is present.';
    if (typeof E.port == "number" && (E.port < 0 || E.port > 65535))
      return "URI port is malformed.";
  }
  function m(E, F) {
    const z = Object.assign({}, F), P = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let j = !1, G = !1;
    z.reference === "suffix" && (z.scheme ? E = z.scheme + ":" + E : E = "//" + E);
    const Q = E.match(y);
    Q !== null && Q[1].indexOf("\\") !== -1 && (P.error = "URI authority must not contain a literal backslash.", j = !0);
    const X = E.match(f);
    if (X) {
      P.scheme = X[1], P.userinfo = X[3], P.host = X[4], P.port = parseInt(X[5], 10), P.path = X[6] || "", P.query = X[7], P.fragment = X[8], isNaN(P.port) && (P.port = X[5]);
      const K = u(P, X);
      if (K !== void 0 && (P.error = P.error || K, j = !0), P.host)
        if (a(P.host) === !1) {
          const q = e(P.host);
          P.host = q.host.toLowerCase(), G = q.isIPV6;
        } else
          G = !0;
      P.scheme === void 0 && P.userinfo === void 0 && P.host === void 0 && P.port === void 0 && P.query === void 0 && !P.path ? P.reference = "same-document" : P.scheme === void 0 ? P.reference = "relative" : P.fragment === void 0 ? P.reference = "absolute" : P.reference = "uri", z.reference && z.reference !== "suffix" && z.reference !== P.reference && (P.error = P.error || "URI is not a " + z.reference + " reference.");
      const L = h(z.scheme || P.scheme);
      if (!z.unicodeSupport && (!L || !L.unicodeSupport) && P.host && (z.domainHost || L && L.domainHost) && G === !1 && l(P.host))
        try {
          P.host = new URL("http://" + P.host).hostname;
        } catch (J) {
          P.error = P.error || "Host's domain name can not be converted to ASCII: " + J;
        }
      if ((!L || L && !L.skipNormalize) && (E.indexOf("%") !== -1 && (P.scheme !== void 0 && (P.scheme = unescape(P.scheme)), P.host !== void 0 && (P.host = s(unescape(P.host), G))), P.path && (P.path = i(P.path)), P.fragment))
        try {
          P.fragment = encodeURI(decodeURIComponent(P.fragment));
        } catch {
          P.error = P.error || "URI malformed";
        }
      L && L.parse && L.parse(P, z);
    } else
      P.error = P.error || "URI can not be parsed.";
    return { parsed: P, malformedAuthorityOrPort: j };
  }
  function C(E, F) {
    return m(E, F).parsed;
  }
  function c(E, F) {
    return d(E, F).normalized;
  }
  function d(E, F) {
    const { parsed: z, malformedAuthorityOrPort: P } = m(E, F);
    return {
      normalized: P ? E : _(z, F),
      malformedAuthorityOrPort: P
    };
  }
  function p(E, F) {
    if (typeof E == "string") {
      const { normalized: z, malformedAuthorityOrPort: P } = d(E, F);
      return P ? void 0 : z;
    }
    if (typeof E == "object")
      return _(E, F);
  }
  const k = {
    SCHEMES: g,
    normalize: w,
    resolve: $,
    resolveComponent: v,
    equal: S,
    serialize: _,
    parse: C
  };
  return mt.exports = k, mt.exports.default = k, mt.exports.fastUri = k, mt.exports;
}
var so;
function zs() {
  if (so) return Rt;
  so = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = js();
  return e.code = 'require("ajv/dist/runtime/uri").default', Rt.default = e, Rt;
}
var ao;
function Is() {
  return ao || (ao = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ jn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ te();
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
    const r = /* @__PURE__ */ hr(), i = /* @__PURE__ */ zn(), o = /* @__PURE__ */ Ti(), s = /* @__PURE__ */ In(), a = /* @__PURE__ */ te(), l = /* @__PURE__ */ Tn(), g = /* @__PURE__ */ Nn(), h = /* @__PURE__ */ oe(), w = Ms, $ = /* @__PURE__ */ zs(), v = (q, A) => new RegExp(q, A);
    v.code = "new RegExp";
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
    ]), f = {
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
    }, y = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function m(q) {
      var A, D, R, b, x, I, W, H, ee, ie, N, M, B, U, Y, re, ue, Se, ye, $e, fe, Xe, we, Bn, Ln;
      const ft = q.strict, Un = (A = q.code) === null || A === void 0 ? void 0 : A.optimize, Rr = Un === !0 || Un === void 0 ? 1 : Un || 0, Nr = (R = (D = q.code) === null || D === void 0 ? void 0 : D.regExp) !== null && R !== void 0 ? R : v, os = (b = q.uriResolver) !== null && b !== void 0 ? b : $.default;
      return {
        strictSchema: (I = (x = q.strictSchema) !== null && x !== void 0 ? x : ft) !== null && I !== void 0 ? I : !0,
        strictNumbers: (H = (W = q.strictNumbers) !== null && W !== void 0 ? W : ft) !== null && H !== void 0 ? H : !0,
        strictTypes: (ie = (ee = q.strictTypes) !== null && ee !== void 0 ? ee : ft) !== null && ie !== void 0 ? ie : "log",
        strictTuples: (M = (N = q.strictTuples) !== null && N !== void 0 ? N : ft) !== null && M !== void 0 ? M : "log",
        strictRequired: (U = (B = q.strictRequired) !== null && B !== void 0 ? B : ft) !== null && U !== void 0 ? U : !1,
        code: q.code ? { ...q.code, optimize: Rr, regExp: Nr } : { optimize: Rr, regExp: Nr },
        loopRequired: (Y = q.loopRequired) !== null && Y !== void 0 ? Y : u,
        loopEnum: (re = q.loopEnum) !== null && re !== void 0 ? re : u,
        meta: (ue = q.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (Se = q.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (ye = q.inlineRefs) !== null && ye !== void 0 ? ye : !0,
        schemaId: ($e = q.schemaId) !== null && $e !== void 0 ? $e : "$id",
        addUsedSchema: (fe = q.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (Xe = q.validateSchema) !== null && Xe !== void 0 ? Xe : !0,
        validateFormats: (we = q.validateFormats) !== null && we !== void 0 ? we : !0,
        unicodeRegExp: (Bn = q.unicodeRegExp) !== null && Bn !== void 0 ? Bn : !0,
        int32range: (Ln = q.int32range) !== null && Ln !== void 0 ? Ln : !0,
        uriResolver: os
      };
    }
    class C {
      constructor(A = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), A = this.opts = { ...A, ...m(A) };
        const { es5: D, lines: R } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: D, lines: R }), this.logger = P(A.logger);
        const b = A.validateFormats;
        A.validateFormats = !1, this.RULES = (0, o.getRules)(), c.call(this, f, A, "NOT SUPPORTED"), c.call(this, y, A, "DEPRECATED", "warn"), this._metaOpts = F.call(this), A.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords && E.call(this, A.keywords), typeof A.meta == "object" && this.addMetaSchema(A.meta), p.call(this), A.validateFormats = b;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: A, meta: D, schemaId: R } = this.opts;
        let b = w;
        R === "id" && (b = { ...w }, b.id = b.$id, delete b.$id), D && A && this.addMetaSchema(b, b[R], !1);
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
        const b = R(D);
        return "$async" in R || (this.errors = R.errors), b;
      }
      compile(A, D) {
        const R = this._addSchema(A, D);
        return R.validate || this._compileSchemaEnv(R);
      }
      compileAsync(A, D) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: R } = this.opts;
        return b.call(this, A, D);
        async function b(ie, N) {
          await x.call(this, ie.$schema);
          const M = this._addSchema(ie, N);
          return M.validate || I.call(this, M);
        }
        async function x(ie) {
          ie && !this.getSchema(ie) && await b.call(this, { $ref: ie }, !0);
        }
        async function I(ie) {
          try {
            return this._compileSchemaEnv(ie);
          } catch (N) {
            if (!(N instanceof i.default))
              throw N;
            return W.call(this, N), await H.call(this, N.missingSchema), I.call(this, ie);
          }
        }
        function W({ missingSchema: ie, missingRef: N }) {
          if (this.refs[ie])
            throw new Error(`AnySchema ${ie} is loaded but ${N} cannot be resolved`);
        }
        async function H(ie) {
          const N = await ee.call(this, ie);
          this.refs[ie] || await x.call(this, N.$schema), this.refs[ie] || this.addSchema(N, ie, D);
        }
        async function ee(ie) {
          const N = this._loading[ie];
          if (N)
            return N;
          try {
            return await (this._loading[ie] = R(ie));
          } finally {
            delete this._loading[ie];
          }
        }
      }
      // Adds schema to the instance
      addSchema(A, D, R, b = this.opts.validateSchema) {
        if (Array.isArray(A)) {
          for (const I of A)
            this.addSchema(I, void 0, R, b);
          return this;
        }
        let x;
        if (typeof A == "object") {
          const { schemaId: I } = this.opts;
          if (x = A[I], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return D = (0, l.normalizeId)(D || x), this._checkUnique(D), this.schemas[D] = this._addSchema(A, R, D, b, !0), this;
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
        const b = this.validate(R, A);
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
      getSchema(A) {
        let D;
        for (; typeof (D = d.call(this, A)) == "string"; )
          A = D;
        if (D === void 0) {
          const { schemaId: R } = this.opts, b = new s.SchemaEnv({ schema: {}, schemaId: R });
          if (D = s.resolveSchema.call(this, b, A), !D)
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
            const D = d.call(this, A);
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
        if (G.call(this, R, D), !D)
          return (0, h.eachItem)(R, (x) => Q.call(this, x)), this;
        K.call(this, D);
        const b = {
          ...D,
          type: (0, g.getJSONTypes)(D.type),
          schemaType: (0, g.getJSONTypes)(D.schemaType)
        };
        return (0, h.eachItem)(R, b.type.length === 0 ? (x) => Q.call(this, x, b) : (x) => b.type.forEach((I) => Q.call(this, x, b, I))), this;
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
          const b = R.rules.findIndex((x) => x.keyword === A);
          b >= 0 && R.rules.splice(b, 1);
        }
        return this;
      }
      // Add format
      addFormat(A, D) {
        return typeof D == "string" && (D = new RegExp(D)), this.formats[A] = D, this;
      }
      errorsText(A = this.errors, { separator: D = ", ", dataVar: R = "data" } = {}) {
        return !A || A.length === 0 ? "No errors" : A.map((b) => `${R}${b.instancePath} ${b.message}`).reduce((b, x) => b + D + x);
      }
      $dataMetaSchema(A, D) {
        const R = this.RULES.all;
        A = JSON.parse(JSON.stringify(A));
        for (const b of D) {
          const x = b.split("/").slice(1);
          let I = A;
          for (const W of x)
            I = I[W];
          for (const W in R) {
            const H = R[W];
            if (typeof H != "object")
              continue;
            const { $data: ee } = H.definition, ie = I[W];
            ee && ie && (I[W] = J(ie));
          }
        }
        return A;
      }
      _removeAllSchemas(A, D) {
        for (const R in A) {
          const b = A[R];
          (!D || D.test(R)) && (typeof b == "string" ? delete A[R] : b && !b.meta && (this._cache.delete(b.schema), delete A[R]));
        }
      }
      _addSchema(A, D, R, b = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let I;
        const { schemaId: W } = this.opts;
        if (typeof A == "object")
          I = A[W];
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
        const ee = l.getSchemaRefs.call(this, A, R);
        return H = new s.SchemaEnv({ schema: A, schemaId: W, meta: D, baseId: R, localRefs: ee }), this._cache.set(H.schema, H), x && !R.startsWith("#") && (R && this._checkUnique(R), this.refs[R] = H), b && this.validateSchema(A, !0), H;
      }
      _checkUnique(A) {
        if (this.schemas[A] || this.refs[A])
          throw new Error(`schema with key or id "${A}" already exists`);
      }
      _compileSchemaEnv(A) {
        if (A.meta ? this._compileMetaSchema(A) : s.compileSchema.call(this, A), !A.validate)
          throw new Error("ajv implementation error");
        return A.validate;
      }
      _compileMetaSchema(A) {
        const D = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, A);
        } finally {
          this.opts = D;
        }
      }
    }
    C.ValidationError = r.default, C.MissingRefError = i.default, e.default = C;
    function c(q, A, D, R = "error") {
      for (const b in q) {
        const x = b;
        x in A && this.logger[R](`${D}: option ${b}. ${q[x]}`);
      }
    }
    function d(q) {
      return q = (0, l.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function p() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const A in q)
            this.addSchema(q[A], A);
    }
    function k() {
      for (const q in this.opts.formats) {
        const A = this.opts.formats[q];
        A && this.addFormat(q, A);
      }
    }
    function E(q) {
      if (Array.isArray(q)) {
        this.addVocabulary(q);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const A in q) {
        const D = q[A];
        D.keyword || (D.keyword = A), this.addKeyword(D);
      }
    }
    function F() {
      const q = { ...this.opts };
      for (const A of S)
        delete q[A];
      return q;
    }
    const z = { log() {
    }, warn() {
    }, error() {
    } };
    function P(q) {
      if (q === !1)
        return z;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const j = /^[a-z_$][a-z0-9_$:-]*$/i;
    function G(q, A) {
      const { RULES: D } = this;
      if ((0, h.eachItem)(q, (R) => {
        if (D.keywords[R])
          throw new Error(`Keyword ${R} is already defined`);
        if (!j.test(R))
          throw new Error(`Keyword ${R} has invalid name`);
      }), !!A && A.$data && !("code" in A || "validate" in A))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(q, A, D) {
      var R;
      const b = A?.post;
      if (D && b)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let I = b ? x.post : x.rules.find(({ type: H }) => H === D);
      if (I || (I = { type: D, rules: [] }, x.rules.push(I)), x.keywords[q] = !0, !A)
        return;
      const W = {
        keyword: q,
        definition: {
          ...A,
          type: (0, g.getJSONTypes)(A.type),
          schemaType: (0, g.getJSONTypes)(A.schemaType)
        }
      };
      A.before ? X.call(this, I, W, A.before) : I.rules.push(W), x.all[q] = W, (R = A.implements) === null || R === void 0 || R.forEach((H) => this.addKeyword(H));
    }
    function X(q, A, D) {
      const R = q.rules.findIndex((b) => b.keyword === D);
      R >= 0 ? q.rules.splice(R, 0, A) : (q.rules.push(A), this.logger.warn(`rule ${D} is not defined`));
    }
    function K(q) {
      let { metaSchema: A } = q;
      A !== void 0 && (q.$data && this.opts.$data && (A = J(A)), q.validateSchema = this.compile(A, !0));
    }
    const L = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function J(q) {
      return { anyOf: [q, L] };
    }
  })(Kn)), Kn;
}
var Nt = {}, Ft = {}, Ot = {}, co;
function Ds() {
  if (co) return Ot;
  co = 1, Object.defineProperty(Ot, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ot.default = e, Ot;
}
var qe = {}, lo;
function mr() {
  if (lo) return qe;
  lo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.callRef = qe.getValidate = void 0;
  const e = /* @__PURE__ */ zn(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ te(), r = /* @__PURE__ */ Ae(), i = /* @__PURE__ */ In(), o = /* @__PURE__ */ oe(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: h, schema: w, it: $ } = g, { baseId: v, schemaEnv: S, validateName: _, opts: f, self: y } = $, { root: u } = S;
      if ((w === "#" || w === "#/") && v === u.baseId)
        return C();
      const m = i.resolveRef.call(y, u, v, w);
      if (m === void 0)
        throw new e.default($.opts.uriResolver, v, w);
      if (m instanceof i.SchemaEnv)
        return c(m);
      return d(m);
      function C() {
        if (S === u)
          return l(g, _, S, S.$async);
        const p = h.scopeValue("root", { ref: u });
        return l(g, (0, n._)`${p}.validate`, u, u.$async);
      }
      function c(p) {
        const k = a(g, p);
        l(g, k, p, p.$async);
      }
      function d(p) {
        const k = h.scopeValue("schema", f.code.source === !0 ? { ref: p, code: (0, n.stringify)(p) } : { ref: p }), E = h.name("valid"), F = g.subschema({
          schema: p,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: k,
          errSchemaPath: w
        }, E);
        g.mergeEvaluated(F), g.ok(E);
      }
    }
  };
  function a(g, h) {
    const { gen: w } = g;
    return h.validate ? w.scopeValue("validate", { ref: h.validate }) : (0, n._)`${w.scopeValue("wrapper", { ref: h })}.validate`;
  }
  qe.getValidate = a;
  function l(g, h, w, $) {
    const { gen: v, it: S } = g, { allErrors: _, schemaEnv: f, opts: y } = S, u = y.passContext ? r.default.this : n.nil;
    $ ? m() : C();
    function m() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const p = v.let("valid");
      v.try(() => {
        v.code((0, n._)`await ${(0, t.callValidateCode)(g, h, u)}`), d(h), _ || v.assign(p, !0);
      }, (k) => {
        v.if((0, n._)`!(${k} instanceof ${S.ValidationError})`, () => v.throw(k)), c(k), _ || v.assign(p, !1);
      }), g.ok(p);
    }
    function C() {
      g.result((0, t.callValidateCode)(g, h, u), () => d(h), () => c(h));
    }
    function c(p) {
      const k = (0, n._)`${p}.errors`;
      v.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${k} : ${r.default.vErrors}.concat(${k})`), v.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function d(p) {
      var k;
      if (!S.opts.unevaluated)
        return;
      const E = (k = w?.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (S.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && (S.props = o.mergeEvaluated.props(v, E.props, S.props));
        else {
          const F = v.var("props", (0, n._)`${p}.evaluated.props`);
          S.props = o.mergeEvaluated.props(v, F, S.props, n.Name);
        }
      if (S.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && (S.items = o.mergeEvaluated.items(v, E.items, S.items));
        else {
          const F = v.var("items", (0, n._)`${p}.evaluated.items`);
          S.items = o.mergeEvaluated.items(v, F, S.items, n.Name);
        }
    }
  }
  return qe.callRef = l, qe.default = s, qe;
}
var uo;
function qs() {
  if (uo) return Ft;
  uo = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ds(), t = /* @__PURE__ */ mr(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Ft.default = n, Ft;
}
var Mt = {}, Tt = {}, fo;
function Vs() {
  if (fo) return Tt;
  fo = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = e.operators, n = {
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
  return Tt.default = i, Tt;
}
var jt = {}, po;
function Bs() {
  if (po) return jt;
  po = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: i, data: o, schemaCode: s, it: a } = r, l = a.opts.multipleOfPrecision, g = i.let("res"), h = l ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${l}` : (0, e._)`${g} !== parseInt(${g})`;
      r.fail$data((0, e._)`(${s} === 0 || (${g} = ${o}/${s}, ${h}))`);
    }
  };
  return jt.default = n, jt;
}
var zt = {}, It = {}, ho;
function Ls() {
  if (ho) return It;
  ho = 1, Object.defineProperty(It, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, i = 0, o;
    for (; i < n; )
      r++, o = t.charCodeAt(i++), o >= 55296 && o <= 56319 && i < n && (o = t.charCodeAt(i), (o & 64512) === 56320 && i++);
    return r;
  }
  return It.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', It;
}
var mo;
function Us() {
  if (mo) return zt;
  mo = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ls(), i = {
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
      const { keyword: s, data: a, schemaCode: l, it: g } = o, h = s === "maxLength" ? e.operators.GT : e.operators.LT, w = g.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${a})`;
      o.fail$data((0, e._)`${w} ${h} ${l}`);
    }
  };
  return zt.default = i, zt;
}
var Dt = {}, go;
function Ks() {
  if (go) return Dt;
  go = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ te(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, n.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, n._)`{pattern: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: g, schemaCode: h, it: w } = o, $ = w.opts.unicodeRegExp ? "u" : "";
      if (l) {
        const { regExp: v } = w.opts.code, S = v.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, v), _ = s.let("valid");
        s.try(() => s.assign(_, (0, n._)`${S}(${h}, ${$}).test(${a})`), () => s.assign(_, !1)), o.fail$data((0, n._)`!${_}`);
      } else {
        const v = (0, e.usePattern)(o, g);
        o.fail$data((0, n._)`!${v}.test(${a})`);
      }
    }
  };
  return Dt.default = i, Dt;
}
var qt = {}, yo;
function Hs() {
  if (yo) return qt;
  yo = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
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
  return qt.default = n, qt;
}
var Vt = {}, $o;
function Gs() {
  if ($o) return Vt;
  $o = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, schemaCode: l, data: g, $data: h, it: w } = o, { opts: $ } = w;
      if (!h && a.length === 0)
        return;
      const v = a.length >= $.loopRequired;
      if (w.allErrors ? S() : _(), $.strictRequired) {
        const u = o.parentSchema.properties, { definedProperties: m } = o.it;
        for (const C of a)
          if (u?.[C] === void 0 && !m.has(C)) {
            const c = w.schemaEnv.baseId + w.errSchemaPath, d = `required property "${C}" is not defined at "${c}" (strictRequired)`;
            (0, n.checkStrictMode)(w, d, w.opts.strictRequired);
          }
      }
      function S() {
        if (v || h)
          o.block$data(t.nil, f);
        else
          for (const u of a)
            (0, e.checkReportMissingProp)(o, u);
      }
      function _() {
        const u = s.let("missing");
        if (v || h) {
          const m = s.let("valid", !0);
          o.block$data(m, () => y(u, m)), o.ok(m);
        } else
          s.if((0, e.checkMissingProp)(o, a, u)), (0, e.reportMissingProp)(o, u), s.else();
      }
      function f() {
        s.forOf("prop", l, (u) => {
          o.setParams({ missingProperty: u }), s.if((0, e.noPropertyInData)(s, g, u, $.ownProperties), () => o.error());
        });
      }
      function y(u, m) {
        o.setParams({ missingProperty: u }), s.forOf(u, l, () => {
          s.assign(m, (0, e.propertyInData)(s, g, u, $.ownProperties)), s.if((0, t.not)(m), () => {
            o.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Vt.default = i, Vt;
}
var Bt = {}, vo;
function Ws() {
  if (vo) return Bt;
  vo = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
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
  return Bt.default = n, Bt;
}
var Lt = {}, Ut = {}, bo;
function gr() {
  if (bo) return Ut;
  bo = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = zi();
  return e.code = 'require("ajv/dist/runtime/equal").default', Ut.default = e, Ut;
}
var wo;
function Js() {
  if (wo) return Lt;
  wo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Nn(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ gr(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: l, $data: g, schema: h, parentSchema: w, schemaCode: $, it: v } = s;
      if (!g && !h)
        return;
      const S = a.let("valid"), _ = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      s.block$data(S, f, (0, t._)`${$} === false`), s.ok(S);
      function f() {
        const C = a.let("i", (0, t._)`${l}.length`), c = a.let("j");
        s.setParams({ i: C, j: c }), a.assign(S, !0), a.if((0, t._)`${C} > 1`, () => (y() ? u : m)(C, c));
      }
      function y() {
        return _.length > 0 && !_.some((C) => C === "object" || C === "array");
      }
      function u(C, c) {
        const d = a.name("item"), p = (0, e.checkDataTypes)(_, d, v.opts.strictNumbers, e.DataType.Wrong), k = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${C}--;`, () => {
          a.let(d, (0, t._)`${l}[${C}]`), a.if(p, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${d} == "string"`, (0, t._)`${d} += "_"`), a.if((0, t._)`typeof ${k}[${d}] == "number"`, () => {
            a.assign(c, (0, t._)`${k}[${d}]`), s.error(), a.assign(S, !1).break();
          }).code((0, t._)`${k}[${d}] = ${C}`);
        });
      }
      function m(C, c) {
        const d = (0, n.useFunc)(a, r.default), p = a.name("outer");
        a.label(p).for((0, t._)`;${C}--;`, () => a.for((0, t._)`${c} = ${C}; ${c}--;`, () => a.if((0, t._)`${d}(${l}[${C}], ${l}[${c}])`, () => {
          s.error(), a.assign(S, !1).break(p);
        })));
      }
    }
  };
  return Lt.default = o, Lt;
}
var Kt = {}, _o;
function Ys() {
  if (_o) return Kt;
  _o = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ gr(), i = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schemaCode: g, schema: h } = o;
      l || h && typeof h == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${g})`) : o.fail((0, e._)`${h} !== ${a}`);
    }
  };
  return Kt.default = i, Kt;
}
var Ht = {}, So;
function Xs() {
  if (So) return Ht;
  So = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ gr(), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: s, data: a, $data: l, schema: g, schemaCode: h, it: w } = o;
      if (!l && g.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = g.length >= w.opts.loopEnum;
      let v;
      const S = () => v ?? (v = (0, t.useFunc)(s, n.default));
      let _;
      if ($ || l)
        _ = s.let("valid"), o.block$data(_, f);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const u = s.const("vSchema", h);
        _ = (0, e.or)(...g.map((m, C) => y(u, C)));
      }
      o.pass(_);
      function f() {
        s.assign(_, !1), s.forOf("v", h, (u) => s.if((0, e._)`${S()}(${a}, ${u})`, () => s.assign(_, !0).break()));
      }
      function y(u, m) {
        const C = g[m];
        return typeof C == "object" && C !== null ? (0, e._)`${S()}(${a}, ${u}[${m}])` : (0, e._)`${a} === ${C}`;
      }
    }
  };
  return Ht.default = i, Ht;
}
var Co;
function Zs() {
  if (Co) return Mt;
  Co = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vs(), t = /* @__PURE__ */ Bs(), n = /* @__PURE__ */ Us(), r = /* @__PURE__ */ Ks(), i = /* @__PURE__ */ Hs(), o = /* @__PURE__ */ Gs(), s = /* @__PURE__ */ Ws(), a = /* @__PURE__ */ Js(), l = /* @__PURE__ */ Ys(), g = /* @__PURE__ */ Xs(), h = [
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
    g.default
  ];
  return Mt.default = h, Mt;
}
var Gt = {}, Ze = {}, ko;
function Di() {
  if (ko) return Ze;
  ko = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
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
    const { gen: a, schema: l, data: g, keyword: h, it: w } = o;
    w.items = !0;
    const $ = a.const("len", (0, e._)`${g}.length`);
    if (l === !1)
      o.setParams({ len: s.length }), o.pass((0, e._)`${$} <= ${s.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(w, l)) {
      const S = a.var("valid", (0, e._)`${$} <= ${s.length}`);
      a.if((0, e.not)(S), () => v(S)), o.ok(S);
    }
    function v(S) {
      a.forRange("i", s.length, $, (_) => {
        o.subschema({ keyword: h, dataProp: _, dataPropType: t.Type.Num }, S), w.allErrors || a.if((0, e.not)(S), () => a.break());
      });
    }
  }
  return Ze.validateAdditionalItems = i, Ze.default = r, Ze;
}
var Wt = {}, Qe = {}, Eo;
function qi() {
  if (Eo) return Qe;
  Eo = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.validateTuple = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Re(), r = {
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
    const { gen: l, parentSchema: g, data: h, keyword: w, it: $ } = o;
    _(g), $.opts.unevaluated && a.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(l, a.length, $.items));
    const v = l.name("valid"), S = l.const("len", (0, e._)`${h}.length`);
    a.forEach((f, y) => {
      (0, t.alwaysValidSchema)($, f) || (l.if((0, e._)`${S} > ${y}`, () => o.subschema({
        keyword: w,
        schemaProp: y,
        dataProp: y
      }, v)), o.ok(v));
    });
    function _(f) {
      const { opts: y, errSchemaPath: u } = $, m = a.length, C = m === f.minItems && (m === f.maxItems || f[s] === !1);
      if (y.strictTuples && !C) {
        const c = `"${w}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, c, y.strictTuples);
      }
    }
  }
  return Qe.validateTuple = i, Qe.default = r, Qe;
}
var xo;
function Qs() {
  if (xo) return Wt;
  xo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qi(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Wt.default = t, Wt;
}
var Jt = {}, Po;
function ea() {
  if (Po) return Jt;
  Po = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Re(), r = /* @__PURE__ */ Di(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: l, it: g } = s, { prefixItems: h } = l;
      g.items = !0, !(0, t.alwaysValidSchema)(g, a) && (h ? (0, r.validateAdditionalItems)(s, h) : s.ok((0, n.validateArray)(s)));
    }
  };
  return Jt.default = o, Jt;
}
var Yt = {}, Ao;
function ta() {
  if (Ao) return Yt;
  Ao = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
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
      const { gen: o, schema: s, parentSchema: a, data: l, it: g } = i;
      let h, w;
      const { minContains: $, maxContains: v } = a;
      g.opts.next ? (h = $ === void 0 ? 1 : $, w = v) : h = 1;
      const S = o.const("len", (0, e._)`${l}.length`);
      if (i.setParams({ min: h, max: w }), w === void 0 && h === 0) {
        (0, t.checkStrictMode)(g, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && h > w) {
        (0, t.checkStrictMode)(g, '"minContains" > "maxContains" is always invalid'), i.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(g, s)) {
        let m = (0, e._)`${S} >= ${h}`;
        w !== void 0 && (m = (0, e._)`${m} && ${S} <= ${w}`), i.pass(m);
        return;
      }
      g.items = !0;
      const _ = o.name("valid");
      w === void 0 && h === 1 ? y(_, () => o.if(_, () => o.break())) : h === 0 ? (o.let(_, !0), w !== void 0 && o.if((0, e._)`${l}.length > 0`, f)) : (o.let(_, !1), f()), i.result(_, () => i.reset());
      function f() {
        const m = o.name("_valid"), C = o.let("count", 0);
        y(m, () => o.if(m, () => u(C)));
      }
      function y(m, C) {
        o.forRange("i", 0, S, (c) => {
          i.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), C();
        });
      }
      function u(m) {
        o.code((0, e._)`${m}++`), w === void 0 ? o.if((0, e._)`${m} >= ${h}`, () => o.assign(_, !0).break()) : (o.if((0, e._)`${m} > ${w}`, () => o.assign(_, !1).break()), h === 1 ? o.assign(_, !0) : o.if((0, e._)`${m} >= ${h}`, () => o.assign(_, !0)));
      }
    }
  };
  return Yt.default = r, Yt;
}
var er = {}, Ro;
function yr() {
  return Ro || (Ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Re();
    e.error = {
      message: ({ params: { property: l, depsCount: g, deps: h } }) => {
        const w = g === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${h} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: g, deps: h, missingProperty: w } }) => (0, t._)`{property: ${l},
    missingProperty: ${w},
    depsCount: ${g},
    deps: ${h}}`
      // TODO change to reference
    };
    const i = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [g, h] = o(l);
        s(l, g), a(l, h);
      }
    };
    function o({ schema: l }) {
      const g = {}, h = {};
      for (const w in l) {
        if (w === "__proto__")
          continue;
        const $ = Array.isArray(l[w]) ? g : h;
        $[w] = l[w];
      }
      return [g, h];
    }
    function s(l, g = l.schema) {
      const { gen: h, data: w, it: $ } = l;
      if (Object.keys(g).length === 0)
        return;
      const v = h.let("missing");
      for (const S in g) {
        const _ = g[S];
        if (_.length === 0)
          continue;
        const f = (0, r.propertyInData)(h, w, S, $.opts.ownProperties);
        l.setParams({
          property: S,
          depsCount: _.length,
          deps: _.join(", ")
        }), $.allErrors ? h.if(f, () => {
          for (const y of _)
            (0, r.checkReportMissingProp)(l, y);
        }) : (h.if((0, t._)`${f} && (${(0, r.checkMissingProp)(l, _, v)})`), (0, r.reportMissingProp)(l, v), h.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(l, g = l.schema) {
      const { gen: h, data: w, keyword: $, it: v } = l, S = h.name("valid");
      for (const _ in g)
        (0, n.alwaysValidSchema)(v, g[_]) || (h.if(
          (0, r.propertyInData)(h, w, _, v.opts.ownProperties),
          () => {
            const f = l.subschema({ keyword: $, schemaProp: _ }, S);
            l.mergeValidEvaluated(f, S);
          },
          () => h.var(S, !0)
          // TODO var
        ), l.ok(S));
    }
    e.validateSchemaDeps = a, e.default = i;
  })(er)), er;
}
var Xt = {}, No;
function na() {
  if (No) return Xt;
  No = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
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
      const g = o.name("valid");
      o.forIn("key", a, (h) => {
        i.setParams({ propertyName: h }), i.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, g), o.if((0, e.not)(g), () => {
          i.error(!0), l.allErrors || o.break();
        });
      }), i.ok(g);
    }
  };
  return Xt.default = r, Xt;
}
var Zt = {}, Fo;
function Vi() {
  if (Fo) return Zt;
  Fo = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Ae(), r = /* @__PURE__ */ oe(), o = {
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
      const { gen: a, schema: l, parentSchema: g, data: h, errsCount: w, it: $ } = s;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: S } = $;
      if ($.props = !0, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)($, l))
        return;
      const _ = (0, e.allSchemaProperties)(g.properties), f = (0, e.allSchemaProperties)(g.patternProperties);
      y(), s.ok((0, t._)`${w} === ${n.default.errors}`);
      function y() {
        a.forIn("key", h, (d) => {
          !_.length && !f.length ? C(d) : a.if(u(d), () => C(d));
        });
      }
      function u(d) {
        let p;
        if (_.length > 8) {
          const k = (0, r.schemaRefOrVal)($, g.properties, "properties");
          p = (0, e.isOwnProperty)(a, k, d);
        } else _.length ? p = (0, t.or)(..._.map((k) => (0, t._)`${d} === ${k}`)) : p = t.nil;
        return f.length && (p = (0, t.or)(p, ...f.map((k) => (0, t._)`${(0, e.usePattern)(s, k)}.test(${d})`))), (0, t.not)(p);
      }
      function m(d) {
        a.code((0, t._)`delete ${h}[${d}]`);
      }
      function C(d) {
        if (S.removeAdditional === "all" || S.removeAdditional && l === !1) {
          m(d);
          return;
        }
        if (l === !1) {
          s.setParams({ additionalProperty: d }), s.error(), v || a.break();
          return;
        }
        if (typeof l == "object" && !(0, r.alwaysValidSchema)($, l)) {
          const p = a.name("valid");
          S.removeAdditional === "failing" ? (c(d, p, !1), a.if((0, t.not)(p), () => {
            s.reset(), m(d);
          })) : (c(d, p), v || a.if((0, t.not)(p), () => a.break()));
        }
      }
      function c(d, p, k) {
        const E = {
          keyword: "additionalProperties",
          dataProp: d,
          dataPropType: r.Type.Str
        };
        k === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(E, p);
      }
    }
  };
  return Zt.default = o, Zt;
}
var Qt = {}, Oo;
function ra() {
  if (Oo) return Qt;
  Oo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jn(), t = /* @__PURE__ */ Re(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Vi(), i = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, parentSchema: l, data: g, it: h } = o;
      h.opts.removeAdditional === "all" && l.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(h, r.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(a);
      for (const f of w)
        h.definedProperties.add(f);
      h.opts.unevaluated && w.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(s, (0, n.toHash)(w), h.props));
      const $ = w.filter((f) => !(0, n.alwaysValidSchema)(h, a[f]));
      if ($.length === 0)
        return;
      const v = s.name("valid");
      for (const f of $)
        S(f) ? _(f) : (s.if((0, t.propertyInData)(s, g, f, h.opts.ownProperties)), _(f), h.allErrors || s.else().var(v, !0), s.endIf()), o.it.definedProperties.add(f), o.ok(v);
      function S(f) {
        return h.opts.useDefaults && !h.compositeRule && a[f].default !== void 0;
      }
      function _(f) {
        o.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, v);
      }
    }
  };
  return Qt.default = i, Qt;
}
var en = {}, Mo;
function oa() {
  if (Mo) return en;
  Mo = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Re(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ oe(), r = /* @__PURE__ */ oe(), i = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: s, schema: a, data: l, parentSchema: g, it: h } = o, { opts: w } = h, $ = (0, e.allSchemaProperties)(a), v = $.filter((C) => (0, n.alwaysValidSchema)(h, a[C]));
      if ($.length === 0 || v.length === $.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const S = w.strictSchema && !w.allowMatchingProperties && g.properties, _ = s.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(s, h.props));
      const { props: f } = h;
      y();
      function y() {
        for (const C of $)
          S && u(C), h.allErrors ? m(C) : (s.var(_, !0), m(C), s.if(_));
      }
      function u(C) {
        for (const c in S)
          new RegExp(C).test(c) && (0, n.checkStrictMode)(h, `property ${c} matches pattern ${C} (use allowMatchingProperties)`);
      }
      function m(C) {
        s.forIn("key", l, (c) => {
          s.if((0, t._)`${(0, e.usePattern)(o, C)}.test(${c})`, () => {
            const d = v.includes(C);
            d || o.subschema({
              keyword: "patternProperties",
              schemaProp: C,
              dataProp: c,
              dataPropType: r.Type.Str
            }, _), h.opts.unevaluated && f !== !0 ? s.assign((0, t._)`${f}[${c}]`, !0) : !d && !h.allErrors && s.if((0, t.not)(_), () => s.break());
          });
        });
      }
    }
  };
  return en.default = i, en;
}
var tn = {}, To;
function ia() {
  if (To) return tn;
  To = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
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
  return tn.default = t, tn;
}
var nn = {}, jo;
function sa() {
  if (jo) return nn;
  jo = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Re()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return nn.default = t, nn;
}
var rn = {}, zo;
function aa() {
  if (zo) return rn;
  zo = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
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
      const g = s, h = o.let("valid", !1), w = o.let("passing", null), $ = o.name("_valid");
      i.setParams({ passing: w }), o.block(v), i.result(h, () => i.reset(), () => i.error(!0));
      function v() {
        g.forEach((S, _) => {
          let f;
          (0, t.alwaysValidSchema)(l, S) ? o.var($, !0) : f = i.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, $), _ > 0 && o.if((0, e._)`${$} && ${h}`).assign(h, !1).assign(w, (0, e._)`[${w}, ${_}]`).else(), o.if($, () => {
            o.assign(h, !0), o.assign(w, _), f && i.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return rn.default = r, rn;
}
var on = {}, Io;
function ca() {
  if (Io) return on;
  Io = 1, Object.defineProperty(on, "__esModule", { value: !0 });
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
        const g = n.subschema({ keyword: "allOf", schemaProp: l }, s);
        n.ok(s), n.mergeEvaluated(g);
      });
    }
  };
  return on.default = t, on;
}
var sn = {}, Do;
function la() {
  if (Do) return sn;
  Do = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
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
      const g = i(l, "then"), h = i(l, "else");
      if (!g && !h)
        return;
      const w = s.let("valid", !0), $ = s.name("_valid");
      if (v(), o.reset(), g && h) {
        const _ = s.let("ifClause");
        o.setParams({ ifClause: _ }), s.if($, S("then", _), S("else", _));
      } else g ? s.if($, S("then")) : s.if((0, e.not)($), S("else"));
      o.pass(w, () => o.error(!0));
      function v() {
        const _ = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        o.mergeEvaluated(_);
      }
      function S(_, f) {
        return () => {
          const y = o.subschema({ keyword: _ }, $);
          s.assign(w, $), o.mergeValidEvaluated(y, w), f ? s.assign(f, (0, e._)`${_}`) : o.setParams({ ifClause: _ });
        };
      }
    }
  };
  function i(o, s) {
    const a = o.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(o, a);
  }
  return sn.default = r, sn;
}
var an = {}, qo;
function da() {
  if (qo) return an;
  qo = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: i }) {
      r.if === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "if" is ignored`);
    }
  };
  return an.default = t, an;
}
var Vo;
function ua() {
  if (Vo) return Gt;
  Vo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Di(), t = /* @__PURE__ */ Qs(), n = /* @__PURE__ */ qi(), r = /* @__PURE__ */ ea(), i = /* @__PURE__ */ ta(), o = /* @__PURE__ */ yr(), s = /* @__PURE__ */ na(), a = /* @__PURE__ */ Vi(), l = /* @__PURE__ */ ra(), g = /* @__PURE__ */ oa(), h = /* @__PURE__ */ ia(), w = /* @__PURE__ */ sa(), $ = /* @__PURE__ */ aa(), v = /* @__PURE__ */ ca(), S = /* @__PURE__ */ la(), _ = /* @__PURE__ */ da();
  function f(y = !1) {
    const u = [
      // any
      h.default,
      w.default,
      $.default,
      v.default,
      S.default,
      _.default,
      // object
      s.default,
      a.default,
      o.default,
      l.default,
      g.default
    ];
    return y ? u.push(t.default, r.default) : u.push(e.default, n.default), u.push(i.default), u;
  }
  return Gt.default = f, Gt;
}
var cn = {}, et = {}, Bo;
function Bi() {
  if (Bo) return et;
  Bo = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ In(), r = /* @__PURE__ */ mr(), i = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => o(a, a.schema)
  };
  function o(a, l) {
    const { gen: g, it: h } = a;
    h.schemaEnv.root.dynamicAnchors[l] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(l)}`, $ = h.errSchemaPath === "#" ? h.validateName : s(a);
    g.if((0, e._)`!${w}`, () => g.assign(w, $));
  }
  et.dynamicAnchor = o;
  function s(a) {
    const { schemaEnv: l, schema: g, self: h } = a.it, { root: w, baseId: $, localRefs: v, meta: S } = l.root, { schemaId: _ } = h.opts, f = new n.SchemaEnv({ schema: g, schemaId: _, root: w, baseId: $, localRefs: v, meta: S });
    return n.compileSchema.call(h, f), (0, r.getValidate)(a, f);
  }
  return et.default = i, et;
}
var tt = {}, Lo;
function Li() {
  if (Lo) return tt;
  Lo = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ae(), n = /* @__PURE__ */ mr(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => i(o, o.schema)
  };
  function i(o, s) {
    const { gen: a, keyword: l, it: g } = o;
    if (s[0] !== "#")
      throw new Error(`"${l}" only supports hash fragment reference`);
    const h = s.slice(1);
    if (g.allErrors)
      w();
    else {
      const v = a.let("valid", !1);
      w(v), o.ok(v);
    }
    function w(v) {
      if (g.schemaEnv.root.dynamicAnchors[h]) {
        const S = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        a.if(S, $(S, v), $(g.validateName, v));
      } else
        $(g.validateName, v)();
    }
    function $(v, S) {
      return S ? () => a.block(() => {
        (0, n.callRef)(o, v), a.let(S, !0);
      }) : () => (0, n.callRef)(o, v);
    }
  }
  return tt.dynamicRef = i, tt.default = r, tt;
}
var ln = {}, Uo;
function fa() {
  if (Uo) return ln;
  Uo = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bi(), t = /* @__PURE__ */ oe(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return ln.default = n, ln;
}
var dn = {}, Ko;
function pa() {
  if (Ko) return dn;
  Ko = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Li(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return dn.default = t, dn;
}
var Ho;
function ha() {
  if (Ho) return cn;
  Ho = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bi(), t = /* @__PURE__ */ Li(), n = /* @__PURE__ */ fa(), r = /* @__PURE__ */ pa(), i = [e.default, t.default, n.default, r.default];
  return cn.default = i, cn;
}
var un = {}, fn = {}, Go;
function ma() {
  if (Go) return fn;
  Go = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yr(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return fn.default = t, fn;
}
var pn = {}, Wo;
function ga() {
  if (Wo) return pn;
  Wo = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yr(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return pn.default = t, pn;
}
var hn = {}, Jo;
function ya() {
  if (Jo) return hn;
  Jo = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: i }) {
      r.contains === void 0 && (0, e.checkStrictMode)(i, `"${n}" without "contains" is ignored`);
    }
  };
  return hn.default = t, hn;
}
var Yo;
function $a() {
  if (Yo) return un;
  Yo = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ma(), t = /* @__PURE__ */ ga(), n = /* @__PURE__ */ ya(), r = [e.default, t.default, n.default];
  return un.default = r, un;
}
var mn = {}, gn = {}, Xo;
function va() {
  if (Xo) return gn;
  Xo = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Ae(), i = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: s, schema: a, data: l, errsCount: g, it: h } = o;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: $ } = h;
      $ instanceof e.Name ? s.if((0, e._)`${$} !== true`, () => s.forIn("key", l, (f) => s.if(S($, f), () => v(f)))) : $ !== !0 && s.forIn("key", l, (f) => $ === void 0 ? v(f) : s.if(_($, f), () => v(f))), h.props = !0, o.ok((0, e._)`${g} === ${n.default.errors}`);
      function v(f) {
        if (a === !1) {
          o.setParams({ unevaluatedProperty: f }), o.error(), w || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, a)) {
          const y = s.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: f,
            dataPropType: t.Type.Str
          }, y), w || s.if((0, e.not)(y), () => s.break());
        }
      }
      function S(f, y) {
        return (0, e._)`!${f} || !${f}[${y}]`;
      }
      function _(f, y) {
        const u = [];
        for (const m in f)
          f[m] === !0 && u.push((0, e._)`${y} !== ${m}`);
        return (0, e.and)(...u);
      }
    }
  };
  return gn.default = i, gn;
}
var yn = {}, Zo;
function ba() {
  if (Zo) return yn;
  Zo = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ oe(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { gen: o, schema: s, data: a, it: l } = i, g = l.items || 0;
      if (g === !0)
        return;
      const h = o.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        i.setParams({ len: g }), i.fail((0, e._)`${h} > ${g}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(l, s)) {
        const $ = o.var("valid", (0, e._)`${h} <= ${g}`);
        o.if((0, e.not)($), () => w($, g)), i.ok($);
      }
      l.items = !0;
      function w($, v) {
        o.forRange("i", v, h, (S) => {
          i.subschema({ keyword: "unevaluatedItems", dataProp: S, dataPropType: t.Type.Num }, $), l.allErrors || o.if((0, e.not)($), () => o.break());
        });
      }
    }
  };
  return yn.default = r, yn;
}
var Qo;
function wa() {
  if (Qo) return mn;
  Qo = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ va(), t = /* @__PURE__ */ ba(), n = [e.default, t.default];
  return mn.default = n, mn;
}
var $n = {}, vn = {}, ei;
function _a() {
  if (ei) return vn;
  ei = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, i) {
      const { gen: o, data: s, $data: a, schema: l, schemaCode: g, it: h } = r, { opts: w, errSchemaPath: $, schemaEnv: v, self: S } = h;
      if (!w.validateFormats)
        return;
      a ? _() : f();
      function _() {
        const y = o.scopeValue("formats", {
          ref: S.formats,
          code: w.code.formats
        }), u = o.const("fDef", (0, e._)`${y}[${g}]`), m = o.let("fType"), C = o.let("format");
        o.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => o.assign(m, (0, e._)`${u}.type || "string"`).assign(C, (0, e._)`${u}.validate`), () => o.assign(m, (0, e._)`"string"`).assign(C, u)), r.fail$data((0, e.or)(c(), d()));
        function c() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${C}`;
        }
        function d() {
          const p = v.$async ? (0, e._)`(${u}.async ? await ${C}(${s}) : ${C}(${s}))` : (0, e._)`${C}(${s})`, k = (0, e._)`(typeof ${C} == "function" ? ${p} : ${C}.test(${s}))`;
          return (0, e._)`${C} && ${C} !== true && ${m} === ${i} && !${k}`;
        }
      }
      function f() {
        const y = S.formats[l];
        if (!y) {
          c();
          return;
        }
        if (y === !0)
          return;
        const [u, m, C] = d(y);
        u === i && r.pass(p());
        function c() {
          if (w.strictSchema === !1) {
            S.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${l}" ignored in schema at path "${$}"`;
          }
        }
        function d(k) {
          const E = k instanceof RegExp ? (0, e.regexpCode)(k) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(l)}` : void 0, F = o.scopeValue("formats", { key: l, ref: k, code: E });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${F}.validate`] : ["string", k, F];
        }
        function p() {
          if (typeof y == "object" && !(y instanceof RegExp) && y.async) {
            if (!v.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${C}(${s})`;
          }
          return typeof m == "function" ? (0, e._)`${C}(${s})` : (0, e._)`${C}.test(${s})`;
        }
      }
    }
  };
  return vn.default = n, vn;
}
var ti;
function Sa() {
  if (ti) return $n;
  ti = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ _a()).default];
  return $n.default = t, $n;
}
var He = {}, ni;
function Ca() {
  return ni || (ni = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.contentVocabulary = He.metadataVocabulary = void 0, He.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], He.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), He;
}
var ri;
function ka() {
  if (ri) return Nt;
  ri = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qs(), t = /* @__PURE__ */ Zs(), n = /* @__PURE__ */ ua(), r = /* @__PURE__ */ ha(), i = /* @__PURE__ */ $a(), o = /* @__PURE__ */ wa(), s = /* @__PURE__ */ Sa(), a = /* @__PURE__ */ Ca(), l = [
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
  return Nt.default = l, Nt;
}
var bn = {}, gt = {}, oi;
function Ea() {
  if (oi) return gt;
  oi = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (gt.DiscrError = e = {})), gt;
}
var ii;
function xa() {
  if (ii) return bn;
  ii = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ea(), n = /* @__PURE__ */ In(), r = /* @__PURE__ */ zn(), i = /* @__PURE__ */ oe(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: l } }) => a === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: l, tagName: g } }) => (0, e._)`{error: ${a}, tag: ${g}, tagValue: ${l}}`
    },
    code(a) {
      const { gen: l, data: g, schema: h, parentSchema: w, it: $ } = a, { oneOf: v } = w;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const S = h.propertyName;
      if (typeof S != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = l.let("valid", !1), f = l.const("tag", (0, e._)`${g}${(0, e.getProperty)(S)}`);
      l.if((0, e._)`typeof ${f} == "string"`, () => y(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: S })), a.ok(_);
      function y() {
        const C = m();
        l.if(!1);
        for (const c in C)
          l.elseIf((0, e._)`${f} === ${c}`), l.assign(_, u(C[c]));
        l.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: S }), l.endIf();
      }
      function u(C) {
        const c = l.name("valid"), d = a.subschema({ keyword: "oneOf", schemaProp: C }, c);
        return a.mergeEvaluated(d, e.Name), c;
      }
      function m() {
        var C;
        const c = {}, d = k(w);
        let p = !0;
        for (let z = 0; z < v.length; z++) {
          let P = v[z];
          if (P?.$ref && !(0, i.schemaHasRulesButRef)(P, $.self.RULES)) {
            const G = P.$ref;
            if (P = n.resolveRef.call($.self, $.schemaEnv.root, $.baseId, G), P instanceof n.SchemaEnv && (P = P.schema), P === void 0)
              throw new r.default($.opts.uriResolver, $.baseId, G);
          }
          const j = (C = P?.properties) === null || C === void 0 ? void 0 : C[S];
          if (typeof j != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
          p = p && (d || k(P)), E(j, z);
        }
        if (!p)
          throw new Error(`discriminator: "${S}" must be required`);
        return c;
        function k({ required: z }) {
          return Array.isArray(z) && z.includes(S);
        }
        function E(z, P) {
          if (z.const)
            F(z.const, P);
          else if (z.enum)
            for (const j of z.enum)
              F(j, P);
          else
            throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
        }
        function F(z, P) {
          if (typeof z != "string" || z in c)
            throw new Error(`discriminator: "${S}" values must be unique strings`);
          c[z] = P;
        }
      }
    }
  };
  return bn.default = s, bn;
}
var wn = {};
const Pa = "https://json-schema.org/draft/2020-12/schema", Aa = "https://json-schema.org/draft/2020-12/schema", Ra = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Na = "meta", Fa = "Core and Validation specifications meta-schema", Oa = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Ma = ["object", "boolean"], Ta = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", ja = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, za = {
  $schema: Pa,
  $id: Aa,
  $vocabulary: Ra,
  $dynamicAnchor: Na,
  title: Fa,
  allOf: Oa,
  type: Ma,
  $comment: Ta,
  properties: ja
}, Ia = "https://json-schema.org/draft/2020-12/schema", Da = "https://json-schema.org/draft/2020-12/meta/applicator", qa = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Va = "meta", Ba = "Applicator vocabulary meta-schema", La = ["object", "boolean"], Ua = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ka = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Ha = {
  $schema: Ia,
  $id: Da,
  $vocabulary: qa,
  $dynamicAnchor: Va,
  title: Ba,
  type: La,
  properties: Ua,
  $defs: Ka
}, Ga = "https://json-schema.org/draft/2020-12/schema", Wa = "https://json-schema.org/draft/2020-12/meta/unevaluated", Ja = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Ya = "meta", Xa = "Unevaluated applicator vocabulary meta-schema", Za = ["object", "boolean"], Qa = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ec = {
  $schema: Ga,
  $id: Wa,
  $vocabulary: Ja,
  $dynamicAnchor: Ya,
  title: Xa,
  type: Za,
  properties: Qa
}, tc = "https://json-schema.org/draft/2020-12/schema", nc = "https://json-schema.org/draft/2020-12/meta/content", rc = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, oc = "meta", ic = "Content vocabulary meta-schema", sc = ["object", "boolean"], ac = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, cc = {
  $schema: tc,
  $id: nc,
  $vocabulary: rc,
  $dynamicAnchor: oc,
  title: ic,
  type: sc,
  properties: ac
}, lc = "https://json-schema.org/draft/2020-12/schema", dc = "https://json-schema.org/draft/2020-12/meta/core", uc = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, fc = "meta", pc = "Core vocabulary meta-schema", hc = ["object", "boolean"], mc = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, gc = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, yc = {
  $schema: lc,
  $id: dc,
  $vocabulary: uc,
  $dynamicAnchor: fc,
  title: pc,
  type: hc,
  properties: mc,
  $defs: gc
}, $c = "https://json-schema.org/draft/2020-12/schema", vc = "https://json-schema.org/draft/2020-12/meta/format-annotation", bc = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, wc = "meta", _c = "Format vocabulary meta-schema for annotation results", Sc = ["object", "boolean"], Cc = { format: { type: "string" } }, kc = {
  $schema: $c,
  $id: vc,
  $vocabulary: bc,
  $dynamicAnchor: wc,
  title: _c,
  type: Sc,
  properties: Cc
}, Ec = "https://json-schema.org/draft/2020-12/schema", xc = "https://json-schema.org/draft/2020-12/meta/meta-data", Pc = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ac = "meta", Rc = "Meta-data vocabulary meta-schema", Nc = ["object", "boolean"], Fc = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Oc = {
  $schema: Ec,
  $id: xc,
  $vocabulary: Pc,
  $dynamicAnchor: Ac,
  title: Rc,
  type: Nc,
  properties: Fc
}, Mc = "https://json-schema.org/draft/2020-12/schema", Tc = "https://json-schema.org/draft/2020-12/meta/validation", jc = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, zc = "meta", Ic = "Validation vocabulary meta-schema", Dc = ["object", "boolean"], qc = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Vc = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Bc = {
  $schema: Mc,
  $id: Tc,
  $vocabulary: jc,
  $dynamicAnchor: zc,
  title: Ic,
  type: Dc,
  properties: qc,
  $defs: Vc
};
var si;
function Lc() {
  if (si) return wn;
  si = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = za, t = Ha, n = ec, r = cc, i = yc, o = kc, s = Oc, a = Bc, l = ["/properties"];
  function g(h) {
    return [
      e,
      t,
      n,
      r,
      i,
      w(this, o),
      s,
      w(this, a)
    ].forEach(($) => this.addMetaSchema($, void 0, !1)), this;
    function w($, v) {
      return h ? $.$dataMetaSchema(v, l) : v;
    }
  }
  return wn.default = g, wn;
}
var ai;
function Uc() {
  return ai || (ai = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Is(), r = /* @__PURE__ */ ka(), i = /* @__PURE__ */ xa(), o = /* @__PURE__ */ Lc(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(v = {}) {
        super({
          ...v,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(i.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: v, meta: S } = this.opts;
        S && (o.default.call(this, v), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var l = /* @__PURE__ */ jn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var g = /* @__PURE__ */ te();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return g._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return g.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return g.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return g.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return g.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return g.CodeGen;
    } });
    var h = /* @__PURE__ */ hr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var w = /* @__PURE__ */ zn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(Et, Et.exports)), Et.exports;
}
var Kc = /* @__PURE__ */ Uc();
const Hc = /* @__PURE__ */ _s(Kc), Gc = "https://json-schema.org/draft/2020-12/schema", Wc = "https://raw.githubusercontent.com/omsf-eco-infra/gufe-viz/main/schema/gufe-viz.schema.json", Jc = "gufe-viz payload", Yc = "Python-to-TypeScript contract bridge for gufe visualizations. Source of truth both languages are downstream of it. This schema is not strictly versioned or published as it is only internally consumed by this codebase. Schema description: one schema object per gufe class: every $def named *Viz is the visualization form of exactly one GufeTokenizable, it carries that object's `gufe-key`. Every reference from one gufe object to another is that object's gufe key, and the objects themselves live in the `registry` on the root payload. So a ligand network's nodes are keys, a chemical system's components and a transformation's protocol are keys and each one resolves to a complete, drawable object. An alchemical network whose forty systems share one protein carries that PDB once and points at it forty times, and the browser can still drill into it, because what it points at is a whole ProteinComponentViz. This is a single-shot dump rather than a conversation with a server, so the registry travels with the payload.", Xc = [{ $ref: "#/$defs/SmallMoleculeComponentViz" }, { $ref: "#/$defs/ProteinComponentViz" }, { $ref: "#/$defs/SolvatedPDBComponentViz" }, { $ref: "#/$defs/ProteinMembraneComponentViz" }, { $ref: "#/$defs/SolventComponentViz" }, { $ref: "#/$defs/UnknownComponentViz" }, { $ref: "#/$defs/ProtocolViz" }, { $ref: "#/$defs/LigandAtomMappingViz" }, { $ref: "#/$defs/LigandNetworkViz" }, { $ref: "#/$defs/ChemicalSystemViz" }, { $ref: "#/$defs/TransformationViz" }, { $ref: "#/$defs/AlchemicalNetworkViz" }], Zc = /* @__PURE__ */ JSON.parse('{"GufeKey":{"title":"GufeKey","description":"A gufe key: the identity of a GufeTokenizable, of the form \'ClassName-<hex digest>\'. It is deterministic and repeatable within a software environment. Only its non-emptiness is checked","type":"string","minLength":1},"ComponentKey":{"title":"ComponentKey","description":"A gufe key naming a ComponentViz in the registry. Identical to GufeKey at validation time: JSON Schema has no way to say \'this string is the gufe-key of an entry in that array, and that entry has this type\', because that is a join across two parts of the document. What the name buys is that the referent\'s type is stated in the contract and carried into the generated TypeScript, instead of living only in a test and a view.","$ref":"#/$defs/GufeKey"},"SmallMoleculeComponentKey":{"title":"SmallMoleculeComponentKey","description":"A gufe key naming a SmallMoleculeComponentViz in the registry. Resolving it yields the whole molecule, SDF included. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ChemicalSystemKey":{"title":"ChemicalSystemKey","description":"A gufe key naming a ChemicalSystemViz in the registry. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"ProtocolKey":{"title":"ProtocolKey","description":"A gufe key naming a ProtocolViz in the registry. Every transformation of a network usually names the same one. See ComponentKey for what the schema can and cannot check about that.","$ref":"#/$defs/GufeKey"},"Registry":{"title":"Registry","description":"The pool of gufe objects this payload refers to by key, each a complete payload object in its own right. Entries are unique by `gufe-key` and sorted by (type, gufe-key) so a committed fixture is byte-stable. JSON Schema cannot express \'unique by a property\' or \'every reference resolves\', so both are covered by tests on the Python side and degraded over by the views.","type":"array","items":{"oneOf":[{"$ref":"#/$defs/ComponentViz"},{"$ref":"#/$defs/ProtocolViz"},{"$ref":"#/$defs/ChemicalSystemViz"}]}},"ComponentViz":{"title":"ComponentViz","description":"Any single chemical-system component","oneOf":[{"$ref":"#/$defs/SmallMoleculeComponentViz"},{"$ref":"#/$defs/ProteinComponentViz"},{"$ref":"#/$defs/SolvatedPDBComponentViz"},{"$ref":"#/$defs/ProteinMembraneComponentViz"},{"$ref":"#/$defs/SolventComponentViz"},{"$ref":"#/$defs/UnknownComponentViz"}]},"SmallMoleculeComponentViz":{"title":"SmallMoleculeComponentViz","description":"A small molecule, carried as a complete SDF record.","type":"object","properties":{"type":{"const":"SmallMoleculeComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"sdf":{"type":"string","minLength":1,"description":"Complete inline SDF record, including the conformer."},"smiles":{"type":"string"},"total_charge":{"type":"integer","description":"Net formal charge. Displayed, never recomputed from the SDF."}},"required":["type","gufe-key","name","sdf","smiles","total_charge"],"additionalProperties":false},"ProteinComponentViz":{"title":"ProteinComponentViz","description":"A protein, carried as a complete PDB record.","type":"object","properties":{"type":{"const":"ProteinComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolvatedPDBComponentViz":{"title":"SolvatedPDBComponentViz","description":"A protein with explicit solvent. A distinct type rather than a flag on ProteinComponentViz, because the discriminator is what a view dispatches on and the presence of waters changes what a sensible default representation is.","type":"object","properties":{"type":{"const":"SolvatedPDBComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation, including explicit solvent."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"ProteinMembraneComponentViz":{"title":"ProteinMembraneComponentViz","description":"A protein embedded in a membrane.","type":"object","properties":{"type":{"const":"ProteinMembraneComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"pdb":{"type":"string","minLength":1,"description":"Complete inline PDB representation of the protein and membrane system."}},"required":["type","gufe-key","name","pdb"],"additionalProperties":false},"SolventComponentViz":{"title":"SolventComponentViz","description":"Bulk solvent settings. There is no structure to draw, so these are flat fields suitable for rendering as a settings card.","type":"object","properties":{"type":{"const":"SolventComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"smiles":{"type":"string","minLength":1},"positive_ion":{"type":"string"},"negative_ion":{"type":"string"},"neutralize":{"type":"boolean"},"ion_concentration":{"type":"string","description":"Display-form concentration with units, for example \'0.15 molar\'. A string rather than a number because the unit is part of the value and the view only ever prints it."}},"required":["type","gufe-key","name","smiles","positive_ion","negative_ion","neutralize","ion_concentration"],"additionalProperties":false},"UnknownComponentViz":{"title":"UnknownComponentViz","description":"The graceful fallback for a component type this build does not recognize. gufe supports custom Component subclasses, so meeting one is an expected outcome rather than an error, and the browser answers it with \'sorry, there is no visualization for this\'. This covers an unrecognized type only: a recognized component whose serializer fails is a bug, and raises in Python rather than arriving here wearing a disguise.","type":"object","properties":{"type":{"const":"UnknownComponentViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The gufe class name, so the panel can say which type it could not draw."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ProtocolViz":{"title":"ProtocolViz","description":"A gufe Protocol, named. Every transformation in an alchemical network usually shares one, so this is a registry entry that many edges point at rather than a class name repeated per edge. Settings are deliberately absent for now: they are large, deeply nested, and nothing draws them yet, adding a `settings` field later is additive and breaks nothing.","type":"object","properties":{"type":{"const":"ProtocolViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"gufe_type":{"type":"string","minLength":1,"description":"The Protocol\'s class name, which is what identifies it to a reader, a Protocol has no name of its own, so `name` is usually empty."}},"required":["type","gufe-key","name","gufe_type"],"additionalProperties":false},"ChemicalSystemViz":{"title":"ChemicalSystemViz","description":"A gufe ChemicalSystem: labels mapped to the gufe keys of its components.","type":"object","properties":{"type":{"const":"ChemicalSystemViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"components":{"type":"object","description":"ChemicalSystem labels mapped to the gufe keys of the components in the registry.","additionalProperties":{"$ref":"#/$defs/ComponentKey"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","components"],"additionalProperties":false},"AtomMapping":{"title":"AtomMapping","description":"Atom index correspondence from molecule A to molecule B, as a list of index pairs. A list rather than an object keyed by A\'s index, because JSON object keys can only be strings: keying by index would put decimal strings such as \'12\' in the payload and leave both languages casting them back to integers, and it is Python\'s dict-of-int shape only by resemblance. As a list, both indices stay integers, and \'an entry has a B index for every A index\' becomes a `required` the schema states rather than a convention a reader has to trust. Pairs are ordered by `index_A` so a committed fixture is byte-stable.","type":"array","items":{"type":"object","properties":{"index_A":{"type":"integer","minimum":0,"description":"An atom index in molecule A."},"index_B":{"type":"integer","minimum":0,"description":"The atom index in molecule B that it maps to."}},"required":["index_A","index_B"],"additionalProperties":false}},"Annotations":{"title":"Annotations","description":"Free-form mapping metadata. gufe puts nothing here by design and every mapper picks its own keys, so this is deliberately open. Values are whatever survived being made JSON-safe. Displayed but never interpreted, with the single exception of \'score\'.","type":"object"},"LigandAtomMappingViz":{"title":"LigandAtomMappingViz","description":"One atom mapping between two small molecules. This is also what an edge of a ligand network is because the two endpoints are gufe keys either way: standalone they resolve in this object\'s own registry, and in a network they resolve in the network\'s, where they are the same entries the nodes name. `componentA` and `componentB` are the molecules the two sides of `componentA_to_componentB` index into: an `index_A` is an atom of the SmallMoleculeComponentViz that `componentA` names, and an `index_B` an atom of `componentB`\'s.","type":"object","properties":{"type":{"const":"LigandAtomMappingViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"componentA":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentB":{"$ref":"#/$defs/SmallMoleculeComponentKey"},"componentA_to_componentB":{"$ref":"#/$defs/AtomMapping"},"score":{"type":["number","null"],"description":"The \'score\' annotation when it is a plain number, otherwise null. This is the one annotation key that is interpreted rather than displayed: it drives the edge colouring and the force layout\'s link distance."},"annotations":{"$ref":"#/$defs/Annotations"},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","componentA","componentB","componentA_to_componentB","score","annotations"],"additionalProperties":false},"LigandNetworkViz":{"title":"LigandNetworkViz","description":"A ligand network: the ligands in the registry, the nodes as keys into it, and the mappings as edges. Deliberately not gufe\'s GraphML: that format embeds a gufe to_json moldict per node, so forwarding it would relocate the decoding problem into the browser rather than avoid it.","type":"object","properties":{"type":{"const":"LigandNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ligand, resolved in `registry`.","items":{"$ref":"#/$defs/SmallMoleculeComponentKey"}},"edges":{"type":"array","description":"The mappings, whose `componentA` and `componentB` name nodes of this network. JSON Schema cannot express that referential constraint, so a Python test covers it, and the view drops a dangling edge with a banner rather than failing.","items":{"$ref":"#/$defs/LigandAtomMappingViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false},"TransformationViz":{"title":"TransformationViz","description":"A transformation between two chemical systems, both named by gufe key, as is its protocol: `stateA` is the system it starts from, `stateB` the one it ends at, and every edge of a network usually names the same protocol. This is also what an edge of an alchemical network is (there is no separate edge type) because `stateA` and `stateB` are keys either way, and in a network they are the keys the nodes name. NonTransformation uses this type too: it exposes the same stateA and stateB properties, both its single system, so it renders as a diff with no differences.","type":"object","properties":{"type":{"const":"TransformationViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"protocol":{"$ref":"#/$defs/ProtocolKey"},"stateA":{"$ref":"#/$defs/ChemicalSystemKey"},"stateB":{"$ref":"#/$defs/ChemicalSystemKey"},"mappings":{"type":"array","items":{"$ref":"#/$defs/LigandAtomMappingViz"}},"registry":{"$ref":"#/$defs/Registry"}},"required":["type","gufe-key","name","protocol","stateA","stateB","mappings"],"additionalProperties":false},"AlchemicalNetworkViz":{"title":"AlchemicalNetworkViz","description":"A graph of chemical systems joined by transformations. What repeats here is not the nodes and edges themselves but what they are made of: in practice every system shares one protein and every transformation shares one protocol. Both live in the registry, once, as whole objects so this view can show composition and topology while still letting a reader open a node and see the protein.","type":"object","properties":{"type":{"const":"AlchemicalNetworkViz"},"gufe-key":{"$ref":"#/$defs/GufeKey"},"name":{"type":"string"},"registry":{"$ref":"#/$defs/Registry"},"nodes":{"type":"array","description":"The gufe key of each ChemicalSystem, resolved in `registry`.","items":{"$ref":"#/$defs/ChemicalSystemKey"}},"edges":{"type":"array","description":"The transformations, whose `stateA` and `stateB` name nodes of this network.","items":{"$ref":"#/$defs/TransformationViz"}}},"required":["type","gufe-key","name","registry","nodes","edges"],"additionalProperties":false}}'), $r = {
  $schema: Gc,
  $id: Wc,
  title: Jc,
  description: Yc,
  oneOf: Xc,
  $defs: Zc
}, vu = [
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
], vr = $r.$id, br = new Hc({ allErrors: !0, strict: !1 });
br.addSchema($r, vr);
const ci = br.getSchema(vr), Ui = Object.entries($r.$defs).filter(
  ([e, t]) => t.properties?.type?.const === e
).map(([e]) => e).sort(), bu = Ui, wr = /* @__PURE__ */ new Map();
for (const e of Ui) {
  const t = br.getSchema(`${vr}#/$defs/${e}`);
  t && wr.set(e, t);
}
const cr = { valid: !0, issues: [] };
function lr(e) {
  return (e ?? []).map((t) => ({
    path: t.instancePath || "",
    message: t.keyword === "additionalProperties" ? `unknown property ${JSON.stringify(t.params.additionalProperty)}` : t.message ?? "is invalid"
  }));
}
function Qc(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      valid: !1,
      issues: [{ path: "", message: "must be a JSON object" }]
    };
  const t = e.type, n = typeof t == "string" ? wr.get(t) : void 0;
  return n ? n(e) ? cr : { valid: !1, issues: lr(n.errors) } : ci(e) ? cr : { valid: !1, issues: lr(ci.errors) };
}
function wu(e, t) {
  const n = wr.get(e);
  return n ? n(t) ? cr : { valid: !1, issues: lr(n.errors) } : {
    valid: !1,
    issues: [
      { path: "", message: `unknown payload type ${JSON.stringify(e)}` }
    ]
  };
}
function el(e, t = 8) {
  const n = e.slice(0, t).map((r) => `${r.path || "(root)"}: ${r.message}`);
  return e.length > t && n.push(`... and ${e.length - t} more`), n.join(`
`);
}
const _r = {
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
function Ki(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return {
      message: "This does not look like a gufe-viz payload (expected a JSON object)."
    };
  const { type: t } = e;
  if (typeof t != "string" || !t)
    return {
      message: "This payload has no `type`, so there is nothing to say what it is."
    };
  if (!_r[t]) return tl(t);
  const { valid: n, issues: r } = Qc(e);
  return n ? null : {
    message: `This payload says it is a ${t}, but it does not match the gufe-viz schema.`,
    detail: el(r)
  };
}
function tl(e) {
  const t = Object.keys(_r).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${e} yet. This build can draw: ${t}.`
  };
}
function _u(e) {
  return Ki(e)?.message ?? null;
}
class nl extends xe {
  placeholder() {
    return "Waiting for data...";
  }
  renderView(t, n) {
    bs("payload", n, this);
    const r = Ki(n);
    if (r)
      return t.appendChild(rl(r, n)), {};
    const i = n.type, o = _r[i], s = document.createElement(o);
    return s.style.cssText = "flex:1;min-height:0;min-width:0;", s.payload = n, t.appendChild(s), {
      onResize: () => s.resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => s.remove()
    };
  }
}
function rl(e, t) {
  const n = T(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;"
  );
  n.appendChild(le(e.message));
  const r = (o, s) => T(
    "div",
    "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" + (s ? `background:${O.warnBg};color:${O.warnFg};border:1px solid ${O.warnBorder};` : `background:${O.panelBg};color:${O.textMuted2};border:1px solid ${O.cardBorder};`),
    o
  );
  e.detail && n.appendChild(r(e.detail, !0));
  const i = ol(t);
  return i && n.appendChild(r(i, !1)), n;
}
function ol(e) {
  if (e == null || typeof e != "object") return null;
  const t = e, n = [];
  typeof t.type == "string" && n.push(`type: ${De(t.type)}`), typeof t.name == "string" && t.name && n.push(`name: ${De(t.name)}`);
  const r = Object.keys(e);
  return r.length && n.push(
    `keys: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", ..." : ""}`
  ), n.length ? n.join(`
`) : null;
}
Pe("gufe-view", nl);
const Me = "gufe-viz:", ct = /* @__PURE__ */ new Map();
let _n = null;
function il() {
  const e = globalThis.localStorage;
  return e || globalThis.window?.localStorage;
}
function Dn() {
  if (_n === !1) return null;
  const e = il();
  if (!e)
    return _n = !1, null;
  try {
    const t = `${Me}__probe`;
    return e.setItem(t, "1"), e.removeItem(t), _n = !0, e;
  } catch {
    return _n = !1, null;
  }
}
function sl(e) {
  const t = Dn();
  if (!t) return ct.get(Me + e) ?? null;
  try {
    return t.getItem(Me + e);
  } catch {
    return null;
  }
}
function al(e, t) {
  const n = Dn();
  if (!n) {
    ct.set(Me + e, t);
    return;
  }
  try {
    n.setItem(Me + e, t);
  } catch {
    ct.set(Me + e, t);
  }
}
function qn(e, t, n) {
  return {
    key: e,
    get() {
      const r = sl(e);
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
        al(e, JSON.stringify(r));
      } catch {
      }
    }
  };
}
function lt(e, t, n) {
  return qn(e, t, (r) => typeof r == "string" && n.includes(r));
}
function bt(e, t) {
  return qn(e, t, (n) => typeof n == "boolean");
}
function cl(e, t, n = -1 / 0, r = 1 / 0) {
  return qn(
    e,
    t,
    (i) => typeof i == "number" && Number.isFinite(i) && i >= n && i <= r
  );
}
function ll(e, t = "") {
  return qn(e, t, (n) => typeof n == "string");
}
function Hi() {
  const e = {}, t = Dn(), n = t ? Array.from({ length: t.length }, (r, i) => t.key(i)).filter(
    (r) => typeof r == "string"
  ) : Array.from(ct.keys());
  for (const r of n) {
    if (!r.startsWith(Me)) continue;
    const i = t ? t.getItem(r) : ct.get(r) ?? null;
    if (i !== null)
      try {
        e[r.slice(Me.length)] = JSON.parse(i);
      } catch {
        e[r.slice(Me.length)] = i;
      }
  }
  return e;
}
function dl() {
  const e = Dn();
  if (e)
    for (const t of Object.keys(Hi()))
      try {
        e.removeItem(Me + t);
      } catch {
      }
  ct.clear();
}
const Sr = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm"
};
function Cr(e) {
  const t = globalThis.__gufeEngines?.[e];
  return t ? Promise.resolve(t) : null;
}
function Gi(e, t) {
  return new Promise((n, r) => {
    const i = document.createElement("script");
    i.src = e, i.onload = () => n(), i.onerror = () => r(new Error(`Failed to load ${t}`)), document.head.appendChild(i);
  });
}
let We = null, nt = null;
function kr() {
  if (nt) return nt;
  const e = Cr("threeDmol");
  return e ? (nt = e.then((t) => We = t || window.$3Dmol), nt) : (nt = (async () => {
    if (window.$3Dmol) return We = window.$3Dmol;
    if (await Gi(Sr.threeDmol, "3Dmol.js"), !window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return We = window.$3Dmol;
  })(), nt);
}
let rt = null;
function Er() {
  if (rt) return rt;
  const e = Cr("rdkit");
  return e ? (rt = e.then((t) => window.RDKit = t), rt) : (rt = (async () => {
    if (window.RDKit) return window.RDKit;
    if (await Gi(Sr.rdkit, "RDKit"), !window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    return window.RDKit = await window.initRDKitModule();
  })(), rt);
}
let tr = null;
function Wi() {
  if (!tr) {
    const e = Sr.d3;
    tr = Cr("d3") ?? import(
      /* @vite-ignore */
      e
    );
  }
  return tr;
}
function xr(e, t) {
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
    t.hint && !r && (r = !0, fl(e, t.hint));
  };
  return e.addEventListener("wheel", s, { passive: !1, capture: !0 }), e.addEventListener("pointerdown", i), e.addEventListener("pointerenter", i), e.addEventListener("pointerleave", o), {
    cleanup() {
      e.removeEventListener("wheel", s, { capture: !0 }), e.removeEventListener("pointerdown", i), e.removeEventListener("pointerenter", i), e.removeEventListener("pointerleave", o);
    }
  };
}
const ul = 1600;
function fl(e, t) {
  const n = T(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    t
  );
  e.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", setTimeout(() => n.remove(), 300);
  }, ul);
}
const pl = { min: 0.25, max: 12 }, hl = 150;
function li(e) {
  const t = e.getView?.()?.[3];
  return typeof t != "number" || !Number.isFinite(t) ? NaN : (e.CAMERA_Z ?? hl) - t;
}
function ml(e, t = pl) {
  const n = li(e), r = Number.isFinite(n) && n > 0;
  r && e.setZoomLimits?.(n / t.max, n / t.min);
  let i = 1;
  const o = () => {
    if (!r) return i;
    const s = li(e);
    return Number.isFinite(s) && s > 0 ? n / s : i;
  };
  return {
    zoomBy(s) {
      const a = o(), l = Math.min(t.max, Math.max(t.min, a * s)), g = l / a;
      return !Number.isFinite(g) || Math.abs(g - 1) < 1e-9 ? !1 : (i = l, e.zoom(g), e.render(), !0);
    },
    reset() {
      i = 1, e.zoomTo(), e.render();
    },
    level: o
  };
}
const gl = 2e-3;
function yl(e) {
  return Math.exp(-e.deltaY * gl);
}
function Ji(e, t, n = {}) {
  const r = ml(t, n.bounds), i = xr(e, {
    hint: n.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (o) => r.zoomBy(yl(o))
  });
  return { ...r, cleanup: i.cleanup };
}
function Pr(e, t = "Reset view") {
  const n = T("button", St, "Reset");
  return n.title = t, n.setAttribute("aria-label", t), n.onclick = e, n;
}
const Vn = `
`, dr = "$$$$";
function di(e, t) {
  if (!e || !e.trim()) throw new Error("empty SDF");
  const n = e.replace(/\r/g, "").split(Vn);
  if (n.length < 4) throw new Error("SDF too short");
  const r = n[3];
  if (r.indexOf("V3000") !== -1) throw new Error("V3000 molfiles are not supported");
  const i = parseInt(r.substring(0, 3), 10), o = parseInt(r.substring(3, 6), 10);
  if (!isFinite(i) || i <= 0) throw new Error(`bad counts line: ${r}`);
  const s = [], a = [];
  for (let h = 0; h < i; h++) {
    const w = n[4 + h];
    if (w == null) throw new Error("truncated atom block");
    s.push([
      parseFloat(w.substring(0, 10)) || 0,
      parseFloat(w.substring(10, 20)) || 0,
      parseFloat(w.substring(20, 30)) || 0
    ]), a.push(w.substring(31, 34).trim() || "X");
  }
  const l = [];
  for (let h = 0; h < (isFinite(o) ? o : 0); h++) {
    const w = n[4 + i + h];
    if (w == null) break;
    const $ = parseInt(w.substring(0, 3), 10), v = parseInt(w.substring(3, 6), 10), S = parseInt(w.substring(6, 9), 10);
    !isFinite($) || !isFinite(v) || l.push([$ - 1, v - 1, isFinite(S) ? S : 1]);
  }
  return { name: (n[0] || "").trim() || t || "molecule", symbols: a, bonds: l, coords: s };
}
function $l(e) {
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
  return r.push("M  END"), r.join(Vn);
}
const vl = (e) => `${$l(e)}${Vn}${dr}`, bl = (e) => e.indexOf(dr) >= 0 ? e : `${e}${Vn}${dr}`;
function wl(e) {
  const t = String(e).split(/\r?\n/);
  if (t.length < 4) return null;
  const n = parseInt(t[3].slice(0, 3), 10), r = parseInt(t[3].slice(3, 6), 10);
  return isNaN(n) || isNaN(r) ? null : { atoms: n, bonds: r };
}
function Yi(e, t, n) {
  let r = null;
  try {
    if (r = e.get_mol(t, JSON.stringify({ removeHs: !0 })), !r) return null;
    try {
      r.set_new_coords(!0);
    } catch {
    }
    return r.get_svg(n, n) || null;
  } catch (i) {
    return console.warn("[gufe-viz] depictSVG threw -", ve(i)), null;
  } finally {
    if (r)
      try {
        r.delete();
      } catch {
      }
  }
}
function Xi(e, t, n) {
  e.innerHTML = t;
  const r = e.querySelector("svg");
  r && (r.removeAttribute("width"), r.removeAttribute("height"), r.getAttribute("viewBox") || r.setAttribute("viewBox", `0 0 ${n} ${n}`), r.setAttribute("preserveAspectRatio", "xMidYMid meet"), r.setAttribute("style", "width:100%;height:100%;max-width:100%;max-height:100%;"));
}
const ui = [
  { id: "stick", label: "Stick", title: "Sticks only" },
  { id: "ball", label: "Ball+Stick", title: "Ball and stick" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], fi = {
  stick: { stick: { radius: 0.15, colorscheme: "Jmol" } },
  ball: { stick: { radius: 0.12, colorscheme: "Jmol" }, sphere: { scale: 0.28, colorscheme: "Jmol" } },
  sphere: { sphere: { scale: 1, colorscheme: "Jmol" } }
}, pi = 400;
class _l extends xe {
  placeholder() {
    return "Waiting for a SmallMoleculeComponent payload...";
  }
  renderView(t, n) {
    const r = n.sdf, i = n.name ?? "", o = n.smiles, s = n.total_charge;
    t.appendChild(Le(i || "Unnamed molecule"));
    const a = T("div", "flex:1;display:flex;flex-direction:row;overflow:hidden;min-height:0;");
    t.appendChild(a);
    const l = T("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;"), g = T("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;position:relative;");
    a.appendChild(l), a.appendChild(T("div", `width:1px;flex-shrink:0;background:${O.splitBorder};`)), a.appendChild(g);
    const h = (E) => T("div", _t, E);
    l.appendChild(h("2D"));
    const w = T(
      "div",
      `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px;background:${wt.canvas2D};`
    );
    l.appendChild(w), g.appendChild(h("3D"));
    const $ = Mi();
    g.appendChild($.wrap);
    const v = T(
      "div",
      `flex-shrink:0;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 20px;padding:8px 16px;font-size:\${FONT.body};background:${O.toolbarBg};border-top:1px solid ${O.toolbarBorder};color:${O.textPrimary};`
    );
    t.appendChild(v);
    const S = r ? wl(r) : null, _ = [
      ["Name", i || st, !1],
      ["SMILES", o || st, !0],
      ["Charge", s == null ? st : String(s), !1],
      ["Atoms", S ? String(S.atoms) : st, !1],
      ["Bonds", S ? String(S.bonds) : st, !1]
    ];
    for (const [E, F, z] of _) {
      const P = T("div", "display:flex;align-items:baseline;gap:6px;min-width:0;");
      P.appendChild(
        T(
          "span",
          `font-size:\${FONT.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;color:${O.textMuted2};`,
          E
        )
      );
      const j = T(
        "span",
        `user-select:text;cursor:text;color:${O.textPrimary}` + (z ? ";font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:${FONT.small};overflow-wrap:anywhere;" : ""),
        F
      );
      j.title = F, P.appendChild(j), v.appendChild(P);
    }
    if (!r || !r.trim())
      return w.appendChild(le("No molecule provided")), $.container.appendChild(le("No molecule provided")), {};
    w.appendChild(le("Loading 2D depiction...")), Er().then((E) => {
      const F = Yi(E, r, pi);
      F ? Xi(w, F, pi) : w.replaceChildren(le("Failed to parse molecule", !0));
    }).catch((E) => {
      w.replaceChildren(le(`RDKit failed to load: ${ve(E)}`, !0));
    });
    let f = null, y = null;
    const u = lt(
      "small-molecule.style",
      "stick",
      ui.map((E) => E.id)
    ), m = bt("small-molecule.spin", !1);
    let C = u.get(), c = m.get();
    const d = T(
      "div",
      Ni
    );
    d.appendChild(
      On(
        ui,
        C,
        (E) => {
          C = E, f && (f.setStyle({}, fi[E]), f.render());
        },
        u
      )
    );
    const p = Oi(
      "Spin",
      c,
      (E) => {
        c = E;
        try {
          f?.spin(E ? "y" : !1);
        } catch {
        }
      },
      { title: "Toggle continuous rotation", remember: m }
    );
    p.style.marginLeft = "4px", d.appendChild(p);
    const k = Pr(() => y?.reset());
    return k.style.marginLeft = "4px", d.appendChild(k), g.appendChild(d), $.container.appendChild(le("Loading 3D viewer...")), kr().then(() => {
      $.container.replaceChildren(), f = We.createViewer($.container, { backgroundColor: wt.viewer }), f.addModel(bl(r), "sdf"), f.setStyle({}, fi[C]), f.zoomTo(), f.render(), y = Ji($.container, f);
    }).catch((E) => {
      $.container.replaceChildren(le(`3D render failed: ${ve(E)}`, !0));
    }), {
      onResize() {
        f && (f.resize(), f.render());
      },
      cleanup() {
        if (y?.cleanup(), y = null, !!f) {
          try {
            f.spin(!1);
          } catch {
          }
          try {
            f.clear();
          } catch {
          }
          f = null;
        }
      }
    };
  }
}
Pe("gufe-small-molecule", _l);
const Zi = ["HOH", "WAT", "SOL", "TIP3"], hi = { hetflag: !1 }, Sl = { hetflag: !0 }, Cl = { resn: Zi }, Ve = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 4e4
};
function kl(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  let r = 0, i = 0, o = 0, s = 1 / 0, a = -1 / 0;
  for (const l of e.split(/\r?\n/)) {
    const g = l.slice(0, 6);
    if (g === "ENDMDL") break;
    if (g !== "ATOM  " && g !== "HETATM") continue;
    r++, g === "HETATM" && i++;
    const h = l.slice(17, 20).trim(), w = l.slice(21, 22).trim() || "_", $ = l.slice(22, 26).trim(), v = l.slice(26, 27).trim();
    Zi.indexOf(h) !== -1 && o++, t.add(w), n.add(`${w}|${$}${v}|${h}`);
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
function El(e) {
  return `${pt(e.chains)} chains · ${pt(e.residues)} residues · ${pt(e.atoms)} atoms · ${pt(e.hetatms)} HETATM` + (e.waters > 0 ? ` (${pt(e.waters)} water)` : "");
}
function xl(e, t) {
  return e === "chain" ? { colorscheme: "chain" } : e === "ss" ? { colorscheme: "ssJmol" } : e === "spectrum" && t && t.resiMax > t.resiMin ? { colorscheme: { prop: "resi", gradient: "roygb", min: t.resiMin, max: t.resiMax } } : { colorscheme: "Jmol" };
}
function mi(e, t, n, r) {
  const i = r || (() => {
  }), o = xl(t.color, n);
  try {
    e.removeAllSurfaces();
  } catch {
  }
  if (e.setStyle({}, {}), e.setStyle(
    hi,
    t.rep === "stick" ? { stick: { radius: Ve.stick.radius, ...o } } : t.rep === "sphere" ? { sphere: { scale: Ve.sphere.scale, ...o } } : (
      // For 'surface' the shell is added separately; leave the atoms bare so
      // it is not cluttered from the inside.
      t.rep === "surface" ? {} : { cartoon: { ...o } }
    )
  ), e.setStyle(
    Sl,
    t.hetero ? {
      stick: { radius: Ve.hetero.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ve.hetero.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), e.setStyle(
    Cl,
    t.waters ? {
      stick: { radius: Ve.water.stickRadius, colorscheme: "Jmol" },
      sphere: { scale: Ve.water.sphereScale, colorscheme: "Jmol" }
    } : {}
  ), t.rep !== "surface") {
    i(null), e.render();
    return;
  }
  i(
    n && n.atoms > Ve.surfaceAtomWarn ? "Computing surface (large structure, this may take a while)..." : "Computing surface..."
  ), e.render(), setTimeout(() => {
    try {
      Promise.resolve(
        e.addSurface(We.SurfaceType.VDW, { opacity: Ve.surfaceOpacity, ...o }, hi)
      ).then(() => {
        i(null), e.render();
      }).catch((s) => i(`Surface failed: ${ve(s)}`, "error"));
    } catch (s) {
      i(`Surface failed: ${ve(s)}`, "error");
    }
  }, 30);
}
const gi = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" }
], yi = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" }
];
class Pl extends xe {
  placeholder() {
    return "Waiting for a ProteinComponent payload...";
  }
  renderView(t, n) {
    const r = n.pdb, i = n.name ?? "", o = n.type !== "ProteinComponentViz", s = lt(
      "protein.representation",
      "cartoon",
      gi.map((k) => k.id)
    ), a = lt(
      "protein.color",
      "chain",
      yi.map((k) => k.id)
    ), l = bt("protein.waters", o), g = bt("protein.hetero", !0), h = bt("protein.spin", !1), w = {
      rep: s.get(),
      color: a.get(),
      waters: l.get(),
      hetero: g.get(),
      spin: h.get()
    };
    let $ = null, v = null, S = null;
    const _ = T(
      "div",
      Ri.top
    );
    t.appendChild(_), _.appendChild(
      T("span", `font-weight:700;font-size:${Z.heading};letter-spacing:.02em;color:${O.titleColor};`, i || "Protein")
    );
    const f = (k) => T("span", `font-size:${Z.small};color:${O.textMuted};`, k);
    _.appendChild(f("Style:")), _.appendChild(
      On(
        gi,
        w.rep,
        (k) => {
          w.rep = k, p();
        },
        s
      )
    ), _.appendChild(f("Color:")), _.appendChild(
      pr(
        yi,
        w.color,
        (k) => {
          w.color = k, p();
        },
        a
      )
    );
    const y = T("div", "display:flex;gap:4px;");
    _.appendChild(y);
    const u = [
      ["waters", "Waters", "Show water molecules", l, () => p()],
      ["hetero", "Hetero", "Show hetero atoms / ligands / ions / lipids", g, () => p()],
      ["spin", "Spin", "Rotate the view continuously", h, () => $?.spin(w.spin ? "y" : !1)]
    ];
    for (const [k, E, F, z, P] of u)
      y.appendChild(
        Oi(
          E,
          w[k],
          (j) => {
            w[k] = j, P();
          },
          { title: F, remember: z }
        )
      );
    y.appendChild(Pr(() => v?.reset()));
    const m = T("span", `margin-left:auto;font-size:${Z.small};white-space:nowrap;color:${O.textMuted2};`);
    _.appendChild(m);
    const C = Mi();
    t.appendChild(C.wrap);
    const c = T(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;font-size:${FONT.body};z-index:20;display:none;pointer-events:none;"
    );
    C.wrap.appendChild(c);
    const d = (k, E) => {
      if (k == null) {
        c.style.display = "none";
        return;
      }
      c.textContent = k, c.style.display = "block";
      const F = E === "error";
      c.style.background = F ? O.warnBg : O.toolbarBg, c.style.color = F ? O.warnFg : O.textMuted, c.style.border = `1px solid ${F ? O.warnBorder : O.toolbarBorder}`;
    };
    function p() {
      $ && mi($, w, S, d);
    }
    if (!r || !r.trim())
      return d("No protein data - waiting for a PDB payload."), {};
    try {
      S = kl(r), m.textContent = El(S);
    } catch (k) {
      d(`⚠ PDB parse error: ${ve(k)}`, "error");
    }
    return d("Loading 3D viewer..."), kr().then(() => {
      $ = We.createViewer(C.container, { backgroundColor: wt.viewer }), $.addModel(r, "pdb"), mi($, w, S, d), $.zoomTo(), $.spin(w.spin ? "y" : !1), $.render(), v = Ji(C.container, $);
    }).catch((k) => {
      d(`⚠ Failed to render structure: ${ve(k)}`, "error");
    }), {
      onResize() {
        $ && ($.resize(), $.render());
      },
      cleanup() {
        if (v?.cleanup(), v = null, !!$) {
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
Pe("gufe-protein", Pl);
const Qi = "http://www.w3.org/2000/svg";
function se(e, t = {}) {
  const n = document.createElementNS(Qi, e);
  for (const [r, i] of Object.entries(t)) n.setAttribute(r, String(i));
  return n;
}
function Fn(e, t) {
  const n = document.createElementNS(Qi, "title");
  return n.textContent = t, e.appendChild(n), e;
}
function kt(e) {
  const t = /* @__PURE__ */ new Map();
  return ur(e, t, /* @__PURE__ */ new Set()), t;
}
function ur(e, t, n) {
  if (e == null || typeof e != "object" || n.has(e)) return;
  if (n.add(e), Array.isArray(e)) {
    for (const i of e) ur(i, t, n);
    return;
  }
  const r = e.registry;
  if (Array.isArray(r))
    for (const i of r) {
      const o = i["gufe-key"];
      typeof o == "string" && o && !t.has(o) && t.set(o, i);
    }
  for (const i of Object.values(e)) ur(i, t, n);
}
function Je(e, t) {
  return t ? e.get(t) : void 0;
}
function Te(e, t, n) {
  const r = Je(e, t);
  return r?.type === n ? r : void 0;
}
function dt(e) {
  return e.name ? e.name : (e["gufe-key"].split("-").pop() ?? e["gufe-key"]).slice(0, 6);
}
function Sn(e, t) {
  const n = new Array(9);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++)
      n[r * 3 + i] = e[r * 3] * t[i] + e[r * 3 + 1] * t[3 + i] + e[r * 3 + 2] * t[6 + i];
  return n;
}
function $i(e) {
  return [e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]];
}
function Al(e) {
  return e[0] * (e[4] * e[8] - e[5] * e[7]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
}
function vi(e) {
  const t = e.slice(), n = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (let r = 0; r < 50 && !(Math.abs(t[1]) + Math.abs(t[2]) + Math.abs(t[5]) < 1e-12); r++) {
    const o = [[0, 1], [0, 2], [1, 2]];
    for (let s = 0; s < 3; s++) {
      const a = o[s][0], l = o[s][1], g = t[a * 3 + l];
      if (Math.abs(g) < 1e-14) continue;
      const h = t[a * 3 + a], w = t[l * 3 + l], $ = (w - h) / (2 * g);
      let v;
      Math.abs($) > 1e10 ? v = 1 / (2 * $) : v = ($ >= 0 ? 1 : -1) / (Math.abs($) + Math.sqrt($ * $ + 1));
      const S = 1 / Math.sqrt(1 + v * v), _ = v * S;
      t[a * 3 + a] = h - v * g, t[l * 3 + l] = w + v * g, t[a * 3 + l] = 0, t[l * 3 + a] = 0;
      for (let f = 0; f < 3; f++)
        if (f !== a && f !== l) {
          const y = t[f * 3 + a], u = t[f * 3 + l];
          t[f * 3 + a] = S * y - _ * u, t[a * 3 + f] = t[f * 3 + a], t[f * 3 + l] = _ * y + S * u, t[l * 3 + f] = t[f * 3 + l];
        }
      for (let f = 0; f < 3; f++) {
        const y = n[f * 3 + a], u = n[f * 3 + l];
        n[f * 3 + a] = S * y - _ * u, n[f * 3 + l] = _ * y + S * u;
      }
    }
  }
  return { values: [t[0], t[4], t[8]], vectors: n };
}
function Rl(e, t) {
  const n = Math.min(e.length, t.length);
  if (n < 1) return null;
  const r = [0, 0, 0], i = [0, 0, 0];
  for (let m = 0; m < n; m++)
    r[0] += e[m][0], r[1] += e[m][1], r[2] += e[m][2], i[0] += t[m][0], i[1] += t[m][1], i[2] += t[m][2];
  if (r[0] /= n, r[1] /= n, r[2] /= n, i[0] /= n, i[1] /= n, i[2] /= n, n < 3)
    return { R: [1, 0, 0, 0, 1, 0, 0, 0, 1], t: [r[0] - i[0], r[1] - i[1], r[2] - i[2]] };
  const o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let m = 0; m < n; m++) {
    const C = e[m][0] - r[0], c = e[m][1] - r[1], d = e[m][2] - r[2], p = t[m][0] - i[0], k = t[m][1] - i[1], E = t[m][2] - i[2];
    o[0] += C * p, o[1] += C * k, o[2] += C * E, o[3] += c * p, o[4] += c * k, o[5] += c * E, o[6] += d * p, o[7] += d * k, o[8] += d * E;
  }
  const s = $i(o), a = Sn(s, o), l = Sn(o, s);
  let g = vi(a), h = vi(l);
  function w(m) {
    const C = [0, 1, 2].sort((d, p) => m.values[p] - m.values[d]), c = new Array(9);
    for (let d = 0; d < 3; d++) {
      const p = C[d];
      c[d] = m.vectors[p], c[3 + d] = m.vectors[3 + p], c[6 + d] = m.vectors[6 + p];
    }
    return {
      values: [m.values[C[0]], m.values[C[1]], m.values[C[2]]],
      vectors: c
    };
  }
  g = w(g), h = w(h);
  const $ = g.vectors, v = h.vectors;
  for (let m = 0; m < 3; m++) {
    const C = $[m], c = $[3 + m], d = $[6 + m], p = o[0] * C + o[1] * c + o[2] * d, k = o[3] * C + o[4] * c + o[5] * d, E = o[6] * C + o[7] * c + o[8] * d, F = v[m], z = v[3 + m], P = v[6 + m];
    p * F + k * z + E * P < 0 && (v[m] = -F, v[3 + m] = -z, v[6 + m] = -P);
  }
  const S = $i($);
  let _ = Sn(v, S);
  Al(_) < 0 && (v[2] = -v[2], v[5] = -v[5], v[8] = -v[8], _ = Sn(v, S));
  const f = _[0] * i[0] + _[1] * i[1] + _[2] * i[2], y = _[3] * i[0] + _[4] * i[1] + _[5] * i[2], u = _[6] * i[0] + _[7] * i[1] + _[8] * i[2];
  return { R: _, t: [r[0] - f, r[1] - y, r[2] - u] };
}
function Nl(e, t, n) {
  const r = e[0], i = e[1], o = e[2];
  return [
    t[0] * r + t[1] * i + t[2] * o + n[0],
    t[3] * r + t[4] * i + t[5] * o + n[1],
    t[6] * r + t[7] * i + t[8] * o + n[2]
  ];
}
const nr = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220"
}, Su = [
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
], Cu = "hsv", V = [0, 0, 0], Fl = {
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
}, Ol = "rdkit", Ml = !0, Tl = !0, jl = "#DC3220", zl = "#DC3220", Il = "#005AB5", Dl = !0, ql = "outline", Vl = 0.3, Bl = 1.2, Ll = "show", Ul = "mono", Kl = !0, Hl = !1, Gl = 0.5, Wl = 0.6, Jl = 2, Yl = 2, Xl = 10, Zl = 0.35, Ql = "", ed = "#7C3AED", td = {
  style: Ol,
  createdDestroyed: Ml,
  modified: Tl,
  destroyedColor: jl,
  createdColor: zl,
  modifiedColor: Il,
  boundary: Dl,
  circles: ql,
  circleRadius: Vl,
  circleStroke: Bl,
  hydrogens: Ll,
  elementColors: Ul,
  atomNumbers: Kl,
  stereo: Hl,
  numScale: Gl,
  labelScale: Wl,
  bondWidth: Jl,
  markWidth: Yl,
  haloWidth: Xl,
  haloOpacity: Zl,
  customSpec: Ql,
  customColor: ed
}, nd = {
  version: 1,
  style: "rdkit",
  createdDestroyed: !0,
  modified: !0,
  destroyedColor: nr.uniqueAtom,
  createdColor: nr.uniqueAtom,
  modifiedColor: nr.elementChange,
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
}, rd = ["rdkit", "recolor", "halo"], od = ["outline", "filled", "off"], id = ["show", "dim", "hide"], sd = ["cpk", "mono"], ad = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1]
}, cd = /^#[0-9a-fA-F]{6}$/;
function Cn(e, t, n) {
  return typeof e == "string" && t.includes(e) ? e : n;
}
function Be(e, t, n) {
  if (typeof e != "number" || !isFinite(e)) return n;
  const r = ad[t];
  return r ? Math.min(r[1], Math.max(r[0], e)) : e;
}
const yt = (e, t) => typeof e == "boolean" ? e : t, kn = (e, t) => typeof e == "string" && cd.test(e) ? e : t;
function ld(e) {
  const t = e && typeof e == "object" ? e : {}, n = nd;
  return {
    version: 1,
    style: Cn(t.style, rd, n.style),
    createdDestroyed: yt(t.createdDestroyed, n.createdDestroyed),
    modified: yt(t.modified, n.modified),
    destroyedColor: kn(t.destroyedColor, n.destroyedColor),
    createdColor: kn(t.createdColor, n.createdColor),
    modifiedColor: kn(t.modifiedColor, n.modifiedColor),
    boundary: yt(t.boundary, n.boundary),
    circles: Cn(t.circles, od, n.circles),
    circleRadius: Be(t.circleRadius, "circleRadius", n.circleRadius),
    circleStroke: Be(t.circleStroke, "circleStroke", n.circleStroke),
    hydrogens: Cn(t.hydrogens, id, n.hydrogens),
    elementColors: Cn(t.elementColors, sd, n.elementColors),
    atomNumbers: yt(t.atomNumbers, n.atomNumbers),
    stereo: yt(t.stereo, n.stereo),
    numScale: Be(t.numScale, "numScale", n.numScale),
    labelScale: Be(t.labelScale, "labelScale", n.labelScale),
    bondWidth: Be(t.bondWidth, "bondWidth", n.bondWidth),
    markWidth: Be(t.markWidth, "markWidth", n.markWidth),
    haloWidth: Be(t.haloWidth, "haloWidth", n.haloWidth),
    haloOpacity: Be(t.haloOpacity, "haloOpacity", n.haloOpacity),
    customSpec: typeof t.customSpec == "string" ? t.customSpec : n.customSpec,
    customColor: kn(t.customColor, n.customColor)
  };
}
const En = ld(td);
function dd(e) {
  const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = 5e3;
  for (const i of String(e || "").split(/[,\s;]+/).filter(Boolean)) {
    const o = /^([LlRr])[:=](.*)$/.exec(i), s = o ? o[1].toLowerCase() === "l" ? "left" : "right" : "both", a = o ? o[2] : i, l = (h) => {
      s !== "right" && t.add(h), s !== "left" && n.add(h);
    }, g = /^(\d+)-(\d+)$/.exec(a);
    if (g) {
      const h = Math.min(+g[1], +g[2]), w = Math.min(Math.max(+g[1], +g[2]), h + r - 1);
      for (let $ = h; $ <= w; $++) l($);
    } else /^\d+$/.test(a) && l(+a);
  }
  return { left: t, right: n };
}
function es(e, t, n) {
  const r = [];
  for (let i = 0; i < e.bonds.length; i++) {
    const [o, s] = e.bonds[i], a = t.has(o), l = t.has(s);
    (n ? a || l : a && l) && r.push(i);
  }
  return r;
}
function bi(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16) / 255,
    parseInt(t.slice(2, 4), 16) / 255,
    parseInt(t.slice(4, 6), 16) / 255
  ];
}
function ud(e, t) {
  return [
    1 - (1 - e[0]) * (1 - t),
    1 - (1 - e[1]) * (1 - t),
    1 - (1 - e[2]) * (1 - t)
  ];
}
function fd(e, t, n) {
  const r = [];
  return e.createdDestroyed && t.atoms.length && r.push({
    atoms: new Set(t.atoms),
    color: n === "left" ? e.destroyedColor : e.createdColor,
    boundary: e.boundary,
    blackLabelOnFill: !0,
    edgeOnFill: !1
  }), e.modified && t.elements.length && r.push({
    atoms: new Set(t.elements),
    color: e.modifiedColor,
    boundary: !1,
    blackLabelOnFill: !1,
    edgeOnFill: !0
  }), r;
}
let ot = null;
function pd(e) {
  if (ot !== null) return ot;
  ot = !1;
  let t = null;
  try {
    t = e.get_mol("CC"), t && (ot = /class\s*=\s*['"][^'"]*bond-0/.test(t.get_svg(60, 60)));
  } catch {
  } finally {
    if (t)
      try {
        t.delete();
      } catch {
      }
  }
  return ot || console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking"), ot;
}
function hd(e, t) {
  return e.style === "rdkit" ? "rdkit" : pd(t) ? e.style : "rdkit";
}
function md(e, t, n, r, i, o) {
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
  e.elementColors === "mono" && (s.atomColourPalette = Fl), i === "rdkit" && (s.continuousHighlight = !1);
  const a = {}, l = {};
  for (const w of n) {
    const $ = bi(w.color);
    if (i === "recolor" && e.circles === "off") continue;
    const v = i === "recolor" && e.circles === "filled" ? ud($, 0.7) : $;
    for (const S of w.atoms)
      a[S] = v, l[S] = e.circleRadius;
  }
  const g = bi(e.customColor);
  for (const w of r)
    w < o && (a[w] = g, l[w] = e.circleRadius);
  const h = Object.keys(a).map(Number);
  return h.length && (s.atoms = h, s.highlightAtomColors = a, s.highlightAtomRadii = l), s;
}
function gd(e, t, n, r) {
  let i = null;
  try {
    return i = e.get_mol(t, JSON.stringify({ removeHs: !1 })), i ? i.get_svg_with_highlights ? i.get_svg_with_highlights(JSON.stringify(r)) || null : i.get_svg(n, n) || null : null;
  } catch (o) {
    return console.warn("[gufe-viz] depictStyledSVG threw -", ve(o)), null;
  } finally {
    if (i)
      try {
        i.delete();
      } catch {
      }
  }
}
const yd = "http://www.w3.org/2000/svg";
function ts(e, t) {
  return Array.from(e.querySelectorAll(`[class~="bond-${t}"]`));
}
function Ar(e, t, n) {
  const r = [];
  for (const i of Array.from(e.querySelectorAll(`[class~="atom-${t}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(i.getAttribute("class") || "")) continue;
    const o = i.tagName.toLowerCase();
    (o === "ellipse" || o === "circle" || o === "rect") === n && r.push(i);
  }
  return r;
}
function ns(e) {
  const n = e.style?.fill || e.getAttribute("fill") || "";
  return !!n && n !== "none";
}
function wi(e, t, n, r, i, o, s) {
  for (const a of es(t, r, s))
    for (const l of ts(e, a)) {
      const g = l.style;
      ns(l) ? g.fill = i : (g.stroke = i, g.strokeWidth = `${n.markWidth}px`);
    }
  if (o)
    for (const a of r)
      for (const l of Ar(e, a, !1)) l.style.fill = o;
}
function $d(e, t, n, r, i, o) {
  const s = e.ownerDocument;
  if (!s) return;
  const a = s.createElementNS(yd, "g");
  a.setAttribute("data-gufe-halo", "1"), a.style.opacity = String(n.haloOpacity);
  for (const g of es(t, r, o))
    for (const h of ts(e, g)) {
      if (ns(h)) continue;
      const w = h.cloneNode(!0);
      w.removeAttribute("class"), w.style.fill = "none", w.style.stroke = i, w.style.strokeWidth = `${n.haloWidth}px`, w.style.strokeLinecap = "round", w.style.strokeLinejoin = "round", w.style.strokeOpacity = "1", a.appendChild(w);
    }
  if (!a.childNodes.length) return;
  const l = e.querySelector("rect");
  l?.nextSibling ? e.insertBefore(a, l.nextSibling) : l ? e.appendChild(a) : e.insertBefore(a, e.firstChild);
}
function vd(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Ar(e, o, !0)) {
        const a = s.style;
        a.fill = "none", a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function bd(e, t, n, r, i) {
  for (const o of n)
    if (!r.has(o))
      for (const s of Ar(e, o, !0)) {
        const a = s.style;
        a.stroke = i, a.strokeWidth = `${t.circleStroke}px`;
      }
}
function wd(e, t, n) {
  if (n.hydrogens !== "show") {
    for (let r = 0; r < t.symbols.length; r++)
      if (t.symbols[r] === "H")
        for (const i of Array.from(e.querySelectorAll(`[class~="atom-${r}"]`))) {
          const o = i.style;
          n.hydrogens === "hide" ? o.display = "none" : o.opacity = "0.22";
        }
  }
}
function _d(e, t, n, r, i, o) {
  if (o !== "rdkit")
    for (const s of r)
      if (o === "recolor") {
        const a = n.circles === "filled";
        wi(
          e,
          t,
          n,
          s.atoms,
          s.color,
          a && s.blackLabelOnFill ? "#000000" : s.color,
          s.boundary
        ), n.circles === "outline" ? vd(e, n, s.atoms, i, s.color) : a && s.edgeOnFill && bd(e, n, s.atoms, i, s.color);
      } else
        $d(e, t, n, s.atoms, s.color, s.boundary), wi(e, t, n, s.atoms, s.color, null, s.boundary);
  wd(e, t, n);
}
const Sd = {
  core: "0xaaaaaa",
  uniqueA: "0xff4d4d",
  uniqueB: "0x4dff88",
  pairA: "0xff8888",
  pairB: "0x88ffaa",
  pairLine: "0xffee55",
  overlayA: "0xff6666",
  overlayB: "0x66ff99"
}, Cd = {
  core: "0x888888",
  uniqueA: "0xd62828",
  uniqueB: "0x2a9d4a",
  pairA: "0xd62828",
  pairB: "0x2a9d4a",
  pairLine: "0xd9a300",
  overlayA: "0xd62828",
  overlayB: "0x2a9d4a"
};
function kd() {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? !1;
  } catch {
    return !1;
  }
}
const ke = kd() ? Sd : Cd, _i = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" }
], rr = 420, me = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04
}, or = { gap: 2.5, minLiftFraction: 0.6 };
function Si(e, t, n) {
  const r = [], i = [], o = [];
  for (let s = 0; s < t.length; s++) {
    const a = e.get(s);
    a === void 0 ? r.push(s) : t[s] !== n[a] ? i.push(s) : o.push(s);
  }
  return { atoms: r, elements: i, mapped: o };
}
function Ed(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.componentA_to_componentB ?? [])
    Number.isInteger(n?.index_A) && Number.isInteger(n?.index_B) && t.set(n.index_A, n.index_B);
  return t;
}
function rs(e, t) {
  const n = Te(t, e.componentA, "SmallMoleculeComponentViz"), r = Te(t, e.componentB, "SmallMoleculeComponentViz");
  return !n || !r ? null : { ...e, registry: n["gufe-key"] === r["gufe-key"] ? [n] : [n, r] };
}
function Ci(e) {
  const t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0];
  for (const r of e)
    for (let i = 0; i < 3; i++)
      r[i] < t[i] && (t[i] = r[i]), r[i] > n[i] && (n[i] = r[i]);
  return { min: t, max: n, span: [n[0] - t[0], n[1] - t[1], n[2] - t[2]] };
}
function xd(e, t) {
  const n = Ci(e), r = Ci(t);
  let i = 0;
  n.span[1] < n.span[i] && (i = 1), n.span[2] < n.span[i] && (i = 2);
  const o = Math.max(n.span[0], n.span[1], n.span[2]), s = n.max[i] - r.min[i] + or.gap, a = or.minLiftFraction * o + or.gap;
  return { axis: i, lift: Math.max(s, a) };
}
class Pd extends xe {
  placeholder() {
    return "Waiting for a LigandAtomMapping payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = Te(r, n.componentA, "SmallMoleculeComponentViz"), o = Te(r, n.componentB, "SmallMoleculeComponentViz");
    if (!i || !o)
      return t.appendChild(
        le("This mapping names two molecules, and its registry does not hold them.")
      ), {};
    const s = dt(i), a = dt(o), l = Ed(n);
    let g, h;
    try {
      g = di(i.sdf, s), h = di(o.sdf, a);
    } catch (K) {
      return t.appendChild(le(`Could not read a molecule: ${ve(K)}`, !0)), {};
    }
    const w = /* @__PURE__ */ new Map();
    for (const [K, L] of l) w.set(L, K);
    const $ = Si(l, g.symbols, h.symbols), v = Si(w, h.symbols, g.symbols), S = T("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    t.appendChild(S);
    const _ = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    S.appendChild(_);
    const f = lt("atom-mapping.mode", "plain", _i.map((K) => K.id));
    let y = f.get();
    const u = T(
      "div",
      Ni
    );
    u.appendChild(
      On(
        _i,
        y,
        (K) => {
          y = K, X();
        },
        f
      )
    ), S.appendChild(u);
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
    }, p = (K) => {
      const L = T("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      L.appendChild(
        T(
          "div",
          _t,
          K
        )
      );
      const J = T("div", "flex:1;position:relative;min-height:0;");
      J.dataset.gufeViewer = "", L.appendChild(J), _.appendChild(L);
      const q = { container: J, viewer: null, guard: null };
      return m.push(q), q;
    }, k = () => {
      if (m.length < 2) return;
      const K = m.map(() => "");
      let L = !1;
      const J = () => {
        if (c) {
          if (!L)
            for (let q = 0; q < m.length; q++) {
              const A = m[q].viewer;
              if (!A) continue;
              const D = JSON.stringify(A.getView());
              if (D !== K[q]) {
                L = !0;
                for (let R = 0; R < m.length; R++)
                  R !== q && m[R].viewer && (m[R].viewer.setView(A.getView()), m[R].viewer.render()), K[R] = D;
                L = !1;
                break;
              }
            }
          C = requestAnimationFrame(J);
        }
      };
      C = requestAnimationFrame(J);
    }, E = (K, L) => {
      const J = We.createViewer(K.container, { backgroundColor: wt.viewer });
      for (const { mol: q } of L) J.addModel(vl(q), "sdf");
      return K.viewer = J, K.guard = xr(K.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => {
        }
      }), J;
    }, F = () => {
      for (const K of [g, h]) {
        const L = p(K.name), J = E(L, [{ mol: K }]);
        J.setStyle(
          {},
          { stick: { radius: me.stick, colorscheme: "Jmol" }, sphere: { scale: me.sphere, colorscheme: "Jmol" } }
        ), J.zoomTo(), J.render();
      }
      k();
    }, z = () => {
      const K = [
        { mol: g, uniques: $, colour: ke.uniqueA },
        { mol: h, uniques: v, colour: ke.uniqueB }
      ];
      for (const L of K) {
        const J = p(L.mol.name), q = E(J, [{ mol: L.mol }]);
        q.setStyle(
          {},
          { stick: { radius: me.stick, color: ke.core }, sphere: { scale: me.sphere, color: ke.core } }
        );
        for (const A of L.uniques.atoms)
          q.addStyle(
            { serial: A + 1 },
            {
              stick: { radius: me.uniqueStick, color: L.colour },
              sphere: { scale: me.uniqueSphere, color: L.colour }
            }
          );
        q.zoomTo(), q.render();
      }
      k();
    }, P = () => {
      const K = p(`${s} to ${a}  (${l.size} mapped pairs)`), L = [], J = [];
      for (const [I, W] of l) {
        const H = g.coords[I], ee = h.coords[W];
        H && ee && (L.push(H), J.push(ee));
      }
      const q = Rl(L, J), A = h.coords.map((I) => q ? Nl(I, q.R, q.t) : [...I]), { axis: D, lift: R } = xd(g.coords, A), b = {
        ...h,
        coords: A.map((I) => {
          const W = [I[0], I[1], I[2]];
          return W[D] += R, W;
        })
      }, x = E(K, [{ mol: g }, { mol: b }]);
      x.setStyle(
        { model: 0 },
        { stick: { radius: me.stick, color: ke.pairA }, sphere: { scale: me.pairSphere, color: ke.pairA } }
      ), x.setStyle(
        { model: 1 },
        { stick: { radius: me.stick, color: ke.pairB }, sphere: { scale: me.pairSphere, color: ke.pairB } }
      );
      for (const [I, W] of l) {
        const H = g.coords[I], ee = b.coords[W];
        !H || !ee || x.addCylinder({
          start: { x: H[0], y: H[1], z: H[2] },
          end: { x: ee[0], y: ee[1], z: ee[2] },
          radius: me.lineRadius,
          dashed: !0,
          fromCap: "round",
          toCap: "round",
          color: ke.pairLine
        });
      }
      x.zoomTo(), D === 2 ? x.rotate(90, "x") : D === 0 && x.rotate(-90, "z"), x.render();
    }, j = () => {
      const K = p(`${s} + ${a}  (overlay)`), L = E(K, [{ mol: g }, { mol: h }]);
      for (const [J, q] of [
        [0, ke.overlayA],
        [1, ke.overlayB]
      ])
        L.setStyle(
          { model: J },
          {
            stick: { radius: me.stick, color: q, opacity: me.overlayOpacity },
            sphere: { scale: me.pairSphere, color: q, opacity: me.overlayOpacity }
          }
        );
      L.zoomTo(), L.render();
    }, G = () => {
      const K = En, L = dd(K.customSpec), q = [
        { mol: g, sdf: i.sdf, uniques: $, side: "left", custom: L.left },
        { mol: h, sdf: o.sdf, uniques: v, side: "right", custom: L.right }
      ].map((A) => {
        const D = T("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        D.appendChild(
          T(
            "div",
            _t,
            A.mol.name
          )
        );
        const R = T(
          "div",
          `flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;background:${wt.canvas2D};`
        );
        return R.appendChild(le("Loading 2D depiction...")), D.appendChild(R), _.appendChild(D), { box: R, side: A };
      });
      Er().then((A) => {
        const D = hd(K, A);
        for (const { box: R, side: b } of q) {
          const x = fd(K, b.uniques, b.side), I = md(
            K,
            rr,
            x,
            b.custom,
            D,
            b.mol.symbols.length
          ), W = gd(A, b.sdf, rr, I);
          if (R.replaceChildren(), !W) {
            R.appendChild(le("Failed to parse molecule", !0));
            continue;
          }
          Xi(R, W, rr);
          const H = R.querySelector("svg");
          H && _d(H, b.mol, K, x, b.custom, D);
        }
      }).catch((A) => {
        for (const { box: D } of q)
          D.replaceChildren(le(`RDKit failed to load: ${ve(A)}`, !0));
      });
    }, Q = () => {
      const K = T("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      _.appendChild(K);
      const L = T("div", "display:flex;flex-direction:column;gap:2px;");
      L.appendChild(
        T(
          "div",
          `font-size:${Z.title};font-weight:${Ye.bold};color:${Oe.title};`,
          n.name || `${s} to ${a}`
        )
      ), L.appendChild(T("div", `font-size:${Z.body};color:${Oe.faint};`, "LigandAtomMapping")), K.appendChild(L);
      const J = T("div", `display:flex;flex-wrap:wrap;gap:${ce.lg} 16px;font-size:${Z.small};`);
      J.appendChild(de("mapped atoms", String(l.size))), J.appendChild(
        de("element changes", String($.elements.length), En.modifiedColor)
      ), J.appendChild(de(`unique to ${s}`, String($.atoms.length), En.destroyedColor)), J.appendChild(de(`unique to ${a}`, String(v.atoms.length), En.createdColor)), J.appendChild(de(`atoms in ${s}`, String(g.symbols.length))), J.appendChild(de(`atoms in ${a}`, String(h.symbols.length))), J.appendChild(de("score", n.score == null ? st : n.score.toFixed(3))), K.appendChild(J);
      const q = T("div", Mr, "Correspondence");
      K.appendChild(q);
      const A = T("div", Or);
      A.textContent = l.size ? Array.from(l, ([R, b]) => `${R} -> ${b}`).join("   ") : "This mapping relates no atoms at all.", K.appendChild(A);
      const D = Object.entries(n.annotations ?? {}).filter(([R]) => R !== "score");
      if (D.length) {
        K.appendChild(T("div", Mr, "Annotations"));
        const R = T("div", `${Or}color:${Oe.faint};`);
        for (const [b, x] of D)
          R.appendChild(T("div", "", `${b}: ${String(x)}`));
        K.appendChild(R);
      }
      K.appendChild(
        T(
          "div",
          `${ls}overflow-wrap:anywhere;`,
          `gufe key: ${n["gufe-key"]}`
        )
      );
    }, X = () => {
      if (d(), y === "info") {
        Q();
        return;
      }
      if (y === "2d") {
        G();
        return;
      }
      _.appendChild(le("Loading 3D viewer...")), kr().then(() => {
        c && (_.replaceChildren(), y === "colored" ? z() : y === "lines" ? P() : y === "overlay" ? j() : F());
      }).catch((K) => {
        _.replaceChildren(le(`3D render failed: ${ve(K)}`, !0));
      });
    };
    return X(), {
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
Pe("gufe-atom-mapping", Pd);
const ki = ["Force-directed", "Circular", "Radial"], at = 38, xn = 200, Ad = 4, Rd = 14, Nd = 18, Ei = 1.5, Fd = 6.5, Od = 0.9, Md = 14, ir = { size: 8, clearance: 8 }, sr = { fontSize: 10, padding: 3, backgroundOpacity: 0.92 }, Td = { padding: 4 }, xi = { captions: 0.5, depictions: 1.1 }, Pn = 200, jd = 24, ar = { node: 0.12, edge: 0.06 }, zd = 1.2, _e = {
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
function Id(e) {
  const t = T(
    "div",
    `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;padding:7px 10px;border-radius:6px;font-size:\${FONT.small};line-height:1.5;max-width:260px;background:${O.tooltipBg};border:1px solid ${O.tooltipBorder};color:${O.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`
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
function Dd(e) {
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
      refX: at + ir.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: ir.size,
      markerHeight: ir.size,
      orient: "auto"
    });
    return o.appendChild(se("path", { d: "M0,-5L10,0L0,5", fill: n })), e.appendChild(o), i;
  };
}
function qd(e) {
  const t = parseInt(e.replace("#", ""), 16);
  return [t >> 16 & 255, t >> 8 & 255, t & 255];
}
function Vd(e) {
  const [t, n] = O.netEdgeRamp.map(qd), r = Math.max(0, Math.min(1, e ?? 0.5));
  return `rgb(${t.map((o, s) => Math.round(o + (n[s] - o) * r)).join(",")})`;
}
const Ne = dt, Bd = (e, t) => e.length > t ? `${e.slice(0, t - 1)}...` : e;
function Ld(e) {
  const t = /* @__PURE__ */ new Set();
  let n = /* @__PURE__ */ new Set();
  const r = (o, s) => {
    if (t.has(s) || n.has(s)) return;
    const a = e.nodes[s], l = a.sdf && Yi(o, a.sdf, xn);
    if (!l) {
      n.add(s);
      return;
    }
    const g = new DOMParser().parseFromString(l, "image/svg+xml").documentElement;
    if (!g || g.nodeName.toLowerCase() === "parsererror") {
      n.add(s);
      return;
    }
    const h = (at - Ad) * 2 / xn, w = e.depictionGroups[s];
    w.setAttribute(
      "transform",
      `translate(${-h * xn / 2},${-h * xn / 2}) scale(${h})`
    );
    let $ = 0;
    for (const v of Array.from(g.childNodes)) {
      if (v.nodeType !== 1) continue;
      const S = v.nodeName.toLowerCase();
      if (!(S === "defs" || S === "metadata" || S === "title")) {
        if (S === "rect") {
          const _ = (v.getAttribute("fill") ?? "").toLowerCase();
          if (_ === "#ffffff" || _ === "white" || _ === "rgb(255,255,255)") continue;
        }
        w.appendChild(document.importNode(v, !0)), $++;
      }
    }
    $ ? t.add(s) : n.add(s);
  };
  return { apply: (o, s, a) => {
    const l = o >= xi.captions;
    for (const v of e.captions)
      v.setAttribute("display", l ? "inline" : "none");
    const g = o >= xi.depictions;
    for (let v = 0; v < e.nodes.length; v++) {
      const S = g && t.has(v);
      e.depictionGroups[v].setAttribute("display", S ? "inline" : "none"), e.initials[v].setAttribute("display", S ? "none" : "inline");
    }
    if (!g) return;
    const { width: h, height: w } = e.viewport(), $ = [];
    e.nodes.forEach((v, S) => {
      if (t.has(S) || n.has(S)) return;
      const _ = v.x * o + s, f = v.y * o + a;
      _ < -Pn || f < -Pn || _ > h + Pn || f > w + Pn || $.push(S);
    }), $.length && e.rdkit().then((v) => {
      if (v)
        for (const S of $) {
          r(v, S);
          const _ = t.has(S);
          e.depictionGroups[S].setAttribute("display", _ ? "inline" : "none"), e.initials[S].setAttribute("display", _ ? "none" : "inline");
        }
    }).catch(() => {
    });
  }, drawn: () => t.size };
}
function Ud(e, t, n, r, i) {
  const o = (s) => i === "keys" ? s["gufe-key"] : Ne(s);
  return r === "ligands" ? e.filter((s) => n.has(s["gufe-key"])).map(o).join(", ") : t.filter((s) => n.has(s.from["gufe-key"]) && n.has(s.to["gufe-key"])).map((s) => `${o(s.from)}, ${o(s.to)}`).join(`
`);
}
function Kd(e, t) {
  navigator.clipboard?.writeText(e).catch(() => Pi(e, t)), navigator.clipboard || Pi(e, t);
}
function Pi(e, t) {
  const n = T("textarea", "width:100%;height:80px;font-size:${FONT.small};box-sizing:border-box;");
  n.value = e, n.readOnly = !0, t.appendChild(n), n.select();
}
function Hd(e, t) {
  const n = URL.createObjectURL(new Blob([e], { type: "text/plain" })), r = T("a", "display:none;");
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), r.remove(), URL.revokeObjectURL(n);
}
function Gd(e) {
  const t = ll("ligand-network.query"), n = cl("ligand-network.minScore", 0, 0, 1), r = lt("ligand-network.exportAs", "names", ["names", "keys"]), i = T(
    "div",
    `display:flex;flex-direction:column;gap:8px;width:236px;padding:10px;min-height:0;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`
  ), o = T("input", `${Fi}width:100%;box-sizing:border-box;`);
  o.type = "search", o.placeholder = "Search ligands", o.value = t.get(), e.query.text = o.value, o.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key"), i.appendChild(o);
  const s = T("div", `display:flex;align-items:center;gap:8px;font-size:${Z.small};color:${O.textMuted};`), a = T("span", `min-width:28px;color:${O.textPrimary};`, "0.00"), l = T("input", "flex:1;");
  l.type = "range", l.min = "0", l.max = "1", l.step = "0.01", l.value = String(n.get()), e.filter.minScore = Number(l.value), l.setAttribute("aria-label", "Hide mappings scoring below this"), s.appendChild(T("span", "", "score >=")), s.appendChild(l), s.appendChild(a), i.appendChild(s);
  const g = T("div", `font-size:${Z.small};color:${O.textMuted2};`);
  i.appendChild(g);
  const h = T("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  i.appendChild(h);
  const w = T("div", "display:flex;flex-direction:column;gap:6px;"), $ = T("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
  $.appendChild(T("span", "", "copy as"));
  const v = pr(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" }
    ],
    r.get(),
    () => {
    },
    r
  );
  v.style.flex = "1", $.appendChild(v), w.appendChild($);
  const S = T("div", "display:flex;gap:4px;"), _ = [
    ["Ligands", "ligands", "Copy the selected ligand names, comma separated"],
    ["Edges", "edges", "Copy the selected edges, one pair per line"]
  ];
  for (const [m, C, c] of _) {
    const d = T("button", `${St}flex:1;`, m);
    d.title = c, d.onclick = (p) => {
      const k = v.value, E = Ud(e.nodes, e.edges, e.selected, C, k);
      E && (p.shiftKey ? Hd(E, `selected-${C}.txt`) : Kd(E, w));
    }, S.appendChild(d);
  }
  w.appendChild(S), w.appendChild(
    T("div", `font-size:${Z.tiny};color:${O.textMuted2};`, "Shift-click to save as a file instead.")
  ), i.appendChild(w);
  const f = T("button", `${St}width:100%;`, "Clear selection");
  f.onclick = () => {
    e.selected.clear(), u(), e.refresh();
  }, i.appendChild(f);
  const y = (m) => {
    const C = e.query.text.trim().toLowerCase();
    return C ? Ne(m).toLowerCase().includes(C) || (m.smiles ?? "").toLowerCase().includes(C) || m["gufe-key"].toLowerCase().includes(C) : !0;
  }, u = () => {
    h.replaceChildren();
    const m = e.nodes.map((C, c) => ({ node: C, index: c })).filter(({ node: C }) => y(C));
    g.textContent = `${m.length} of ${e.nodes.length} ligands`;
    for (const { node: C, index: c } of m) {
      const d = C["gufe-key"], p = T(
        "button",
        `display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;font-family:inherit;font-size:\${FONT.small};cursor:pointer;width:100%;min-width:0;border:1px solid ${e.selected.has(d) ? O.cardBorderActive : O.cardBorder};background:${e.selected.has(d) ? O.cardBgActive : O.cardBg};color:${O.textPrimary};`
      ), k = T("span", "flex:1;min-width:0;overflow-wrap:anywhere;", Ne(C));
      k.title = `${Ne(C)}
${C.smiles ?? ""}`, p.appendChild(k), p.onclick = (E) => {
        E.shiftKey || E.metaKey || E.ctrlKey ? e.selected.has(d) ? e.selected.delete(d) : e.selected.add(d) : (e.selected.clear(), e.selected.add(d), e.focus(c)), u(), e.refresh();
      }, h.appendChild(p);
    }
    m.length || h.appendChild(T("div", `font-size:${Z.small};padding:8px;color:${O.textMuted2};`, "Nothing matches."));
  };
  return o.oninput = () => {
    e.query.text = o.value, t.set(o.value), u(), e.refresh();
  }, l.oninput = () => {
    e.filter.minScore = Number(l.value), a.textContent = e.filter.minScore.toFixed(2), n.set(e.filter.minScore), e.refresh();
  }, u(), i;
}
class Wd extends xe {
  placeholder() {
    return "Waiting for a LigandNetwork payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = [];
    let o = 0;
    for (const L of n.nodes ?? []) {
      const J = Te(r, L, "SmallMoleculeComponentViz");
      if (!J) {
        o++;
        continue;
      }
      i.push({ ...J, x: 0, y: 0 });
    }
    const s = new Map(i.map((L) => [L["gufe-key"], L])), a = [];
    let l = 0;
    for (const L of n.edges ?? []) {
      const J = s.get(L.componentA), q = s.get(L.componentB);
      if (!J || !q) {
        l++;
        continue;
      }
      a.push({ ...L, index: a.length, from: J, to: q });
    }
    const g = Le(n.name || "Ligand network");
    g.statsEl.appendChild(de("ligands", String(i.length))), g.statsEl.appendChild(de("mappings", String(a.length))), t.appendChild(g);
    const h = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild(h);
    const w = /* @__PURE__ */ new Set(), $ = { minScore: 0 }, v = { text: "" };
    let S = () => {
    };
    const _ = fs(
      g,
      () => Gd({
        nodes: i,
        edges: a,
        selected: w,
        filter: $,
        query: v,
        refresh: () => S(),
        focus: (L) => k(L)
      }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => K(),
        remember: bt("ligand-network.menuOpen", !1)
      }
    );
    h.appendChild(_.panel);
    const f = T("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${O.netCanvasBg};`), y = T("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${O.appBg};`);
    h.appendChild(f), h.appendChild(T("div", `width:1px;flex-shrink:0;background:${O.splitBorder};`)), h.appendChild(y);
    const u = T("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${O.netCanvasBg};`);
    f.appendChild(u);
    const m = lt("ligand-network.layout", "Force-directed", ki), C = this.#t(
      (L) => K(L),
      () => Q(),
      m
    );
    f.appendChild(C.bar);
    const c = this.#e(y, r);
    if (!i.length)
      return u.appendChild(
        le(
          o ? "None of this network's ligands are in its registry." : "This network has no ligands."
        )
      ), c.message("Nothing to show."), {};
    o && Ge(
      u,
      `${o} ligand${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Ge(u, `${l} mapping${l === 1 ? "" : "s"} name a ligand this network does not contain`);
    const d = Er().catch((L) => (console.warn("[gufe-viz] RDKit failed to load:", ve(L)), null)), p = Id(u);
    let k = () => {
    }, E = a.length ? 0 : -1, F = null, z = m.get(), P = !1, j = !0, G = () => {
    }, Q = () => {
    };
    const X = (L) => {
      E = L, c.show(a[L] ?? null), G();
    }, K = (L = z) => {
      z = L, F?.(), F = null, u.querySelector("svg")?.remove();
      const J = u.clientWidth || 800, q = u.clientHeight || 600;
      Jd(i, J, q, z, a);
      const A = () => {
        if (!j) return;
        const D = this.#r(u, i, a, J, q, X, d, p);
        G = () => D.setSelected(E), Q = D.reset, F = D.cleanup, k = (R) => D.focusOn(R), S = () => {
          const R = v.text.trim().toLowerCase(), b = w.size > 0 || R.length > 0, x = /* @__PURE__ */ new Set();
          for (const H of i) {
            const ee = H["gufe-key"], ie = w.has(ee) || R.length > 0 && (Ne(H).toLowerCase().includes(R) || (H.smiles ?? "").toLowerCase().includes(R) || ee.toLowerCase().includes(R));
            (!b || ie) && x.add(ee);
          }
          const I = /* @__PURE__ */ new Set();
          a.forEach((H, ee) => {
            (H.score ?? 0) < $.minScore || !x.has(H.from["gufe-key"]) || !x.has(H.to["gufe-key"]) || I.add(ee);
          });
          const W = b || $.minScore > 0;
          D.setEmphasis(W ? x : null, W ? I : null);
        }, G(), S(), D.fit();
      };
      if (z !== "Force-directed" || P) {
        A();
        return;
      }
      Yd(i, a, J, q).then((D) => {
        if (j) {
          if (D) {
            A();
            return;
          }
          P = !0, C.picker.value = "Circular", Ge(u, "d3 could not be loaded - showing the circular layout instead"), K("Circular");
        }
      }, A);
    };
    return K(), c.show(a[E] ?? null), {
      onResize: () => K(),
      cleanup: () => {
        j = !1, p.remove(), F?.();
      }
    };
  }
  #t(t, n, r) {
    const i = T(
      "div",
      Ri.bottom
    ), o = T("div", `display:flex;align-items:center;gap:6px;font-size:${Z.small};color:${O.textMuted};`);
    o.appendChild(T("span", "", "score")), o.appendChild(
      T(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${O.netEdgeRamp.join(",")});`
      )
    ), o.appendChild(T("span", "", "0 -> 1")), i.appendChild(o), i.appendChild(T("label", `font-size:${Z.body};margin-left:auto;color:${O.textMuted};`, "Layout"));
    const s = pr(
      ki.map((a) => ({ id: a, label: a })),
      r.get(),
      (a) => t(a),
      r
    );
    return i.appendChild(s), i.appendChild(Pr(n, "Reset pan and zoom")), { bar: i, picker: s };
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
      a.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;", a.payload = rs(s, n), r.replaceChildren(a);
    }, message: i };
  }
  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #r(t, n, r, i, o, s, a, l) {
    const g = se("svg", { width: i, height: o, style: "display:block;touch-action:none;" }), h = se("g");
    g.appendChild(h), t.appendChild(g);
    const w = se("defs"), $ = Dd(w);
    g.appendChild(w);
    const v = [], S = se("g"), _ = se("g"), f = se("g", { "pointer-events": "none" }), y = [], u = [], m = se("g");
    h.append(S, _, f, m);
    for (const P of r) {
      const j = Vd(P.score), G = Ei + (P.score ?? 0.5) * (Fd - Ei), Q = se("line", {
        stroke: O.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": G + Td.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none"
      }), X = se("line", {
        stroke: j,
        "stroke-width": G,
        "stroke-opacity": Od,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${$(j)})`,
        "pointer-events": "none"
      }), K = se("line", { stroke: "transparent", "stroke-width": Md, style: "cursor:pointer;" });
      K.addEventListener("click", (A) => {
        A.stopPropagation(), s(P.index);
      }), K.addEventListener("mousemove", (A) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${De(Ne(P.from))} -&gt; ${De(Ne(P.to))}</div>` + (P.score == null ? `<div style="color:${O.textMuted2};">no score</div>` : `<div style="margin-top:4px;">score <b>${P.score.toFixed(3)}</b></div>`) + `<div style="margin-top:4px;font-size:${Z.tiny};color:${O.textMuted2};">Click to see the mapping</div>`,
          A.offsetX,
          A.offsetY
        );
      }), K.addEventListener("mouseleave", () => l.hide()), v.push(Q), S.append(Q, X), _.appendChild(K);
      const L = se("rect", {
        fill: O.netLabelBg,
        opacity: P.score == null ? 0 : sr.backgroundOpacity,
        rx: 3,
        ry: 3
      }), J = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": sr.fontSize,
        "font-weight": 600,
        fill: O.netEdgeLabel
      });
      J.textContent = P.score == null ? "" : P.score.toFixed(2);
      const q = se("g", { class: "gufe-edge-label" });
      q.append(L, J), f.appendChild(q), y.push(L), u.push(J);
    }
    const C = [], c = [], d = [], p = n.map((P) => {
      const j = se("g", { class: "gufe-node", style: "cursor:grab;" });
      j.addEventListener("mousemove", (K) => {
        l.show(
          `<div style="font-weight:700;color:${O.titleColor};">${De(Ne(P))}</div>` + (P.smiles ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${De(P.smiles)}</div>` : "") + `<div style="margin-top:3px;font-size:${Z.tiny};color:${O.textMuted2};overflow-wrap:anywhere;">${De(P["gufe-key"])}</div>`,
          K.offsetX,
          K.offsetY
        );
      }), j.addEventListener("mouseleave", () => l.hide()), j.appendChild(
        se("circle", {
          r: at,
          fill: O.netNodeFill,
          stroke: O.netNodeStroke,
          "stroke-width": 1.5
        })
      );
      const G = se("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      j.appendChild(G), C.push(G);
      const Q = se("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": Nd,
        "font-weight": 700,
        fill: O.netInitials,
        "pointer-events": "none"
      });
      Q.textContent = Ne(P).slice(0, 2).toUpperCase(), j.appendChild(Q), c.push(Q);
      const X = se("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: at + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: O.netNodeLabel,
        "pointer-events": "none"
      });
      return X.textContent = Bd(Ne(P), Rd), X.setAttribute("display", "none"), d.push(X), j.appendChild(X), m.appendChild(j), j;
    }), k = () => {
      u.forEach((P, j) => {
        if (!P.textContent) return;
        let G;
        try {
          G = P.getBBox();
        } catch {
          return;
        }
        const Q = sr.padding;
        y[j].setAttribute("x", String(G.x - Q)), y[j].setAttribute("y", String(G.y - Q)), y[j].setAttribute("width", String(G.width + Q * 2)), y[j].setAttribute("height", String(G.height + Q * 2));
      });
    }, E = () => {
      r.forEach((P, j) => {
        for (const Q of [v[j], S.children[j * 2 + 1], _.children[j]]) {
          const X = Q;
          X.setAttribute("x1", String(P.from.x)), X.setAttribute("y1", String(P.from.y)), X.setAttribute("x2", String(P.to.x)), X.setAttribute("y2", String(P.to.y));
        }
        f.children[j].setAttribute(
          "transform",
          `translate(${(P.from.x + P.to.x) / 2},${(P.from.y + P.to.y) / 2 - 8})`
        );
      }), n.forEach((P, j) => p[j].setAttribute("transform", `translate(${P.x},${P.y})`));
    };
    E(), k();
    const F = Ld({
      nodes: n,
      captions: d,
      initials: c,
      depictionGroups: C,
      rdkit: () => a,
      viewport: () => ({ width: i, height: o })
    }), z = this.#n(g, h, n, p, E, F.apply);
    return {
      setSelected(P) {
        v.forEach((j, G) => j.setAttribute("opacity", G === P ? "0.95" : "0"));
      },
      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(P, j) {
        p.forEach((G, Q) => {
          const X = !P || P.has(n[Q]["gufe-key"]);
          G.setAttribute("opacity", X ? "1" : String(ar.node));
        }), r.forEach((G, Q) => {
          const X = !j || j.has(Q), K = X ? "0.9" : String(ar.edge);
          S.children[Q * 2 + 1].setAttribute("stroke-opacity", K), f.children[Q].setAttribute("opacity", X ? "1" : String(ar.edge));
        });
      },
      focusOn(P) {
        const j = n[P];
        j && z.centreOn(j.x, j.y);
      },
      setDetail: F.apply,
      depictionsDrawn: () => F.drawn(),
      fit: z.fit,
      reset: z.reset,
      cleanup: z.cleanup
    };
  }
  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #n(t, n, r, i, o, s) {
    let a = 1, l = 0, g = 0;
    const h = () => {
      n.setAttribute("transform", `translate(${l},${g}) scale(${a})`), s(a, l, g);
    }, w = () => {
      const m = t.getBoundingClientRect();
      return {
        width: m.width || Number(t.getAttribute("width")) || t.clientWidth || 800,
        height: m.height || Number(t.getAttribute("height")) || t.clientHeight || 600
      };
    }, $ = () => {
      let m = 1 / 0, C = 1 / 0, c = -1 / 0, d = -1 / 0;
      for (const F of r)
        m = Math.min(m, F.x), C = Math.min(C, F.y), c = Math.max(c, F.x), d = Math.max(d, F.y);
      if (a = 1, l = 0, g = 0, !Number.isFinite(m)) {
        h();
        return;
      }
      const p = at + jd, { width: k, height: E } = w();
      a = Math.min(1, k / (c - m + p * 2), E / (d - C + p * 2)), l = k / 2 - (m + c) / 2 * a, g = E / 2 - (C + d) / 2 * a, h();
    }, S = xr(t, {
      onZoom: (m) => {
        const C = t.getBoundingClientRect(), c = m.clientX - C.left, d = m.clientY - C.top, p = Math.min(5 / a, Math.max(0.15 / a, Math.exp(-m.deltaY * 2e-3)));
        return l = c - (c - l) * p, g = d - (d - g) * p, a *= p, h(), p !== 1;
      },
      hint: "Click the graph or hold Ctrl to zoom"
    });
    let _ = null;
    const f = (m) => {
      _ = { x: m.clientX - l, y: m.clientY - g };
    }, y = (m) => {
      _ && (l = m.clientX - _.x, g = m.clientY - _.y, h());
    }, u = () => {
      _ = null;
    };
    return t.addEventListener("pointerdown", f), t.addEventListener("pointermove", y), t.addEventListener("pointerup", u), t.addEventListener("pointercancel", u), t.addEventListener("pointerleave", u), i.forEach((m, C) => {
      let c = null;
      m.addEventListener("pointerdown", (p) => {
        p.stopPropagation(), c = { x: p.clientX - r[C].x * a, y: p.clientY - r[C].y * a }, m.setPointerCapture(p.pointerId);
      }), m.addEventListener("pointermove", (p) => {
        c && (r[C].x = r[C].fx = (p.clientX - c.x) / a, r[C].y = r[C].fy = (p.clientY - c.y) / a, o());
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
      centreOn(m, C) {
        const { width: c, height: d } = w();
        a = Math.max(a, zd), l = c / 2 - m * a, g = d / 2 - C * a, h();
      },
      cleanup() {
        S.cleanup(), t.removeEventListener("pointerdown", f), t.removeEventListener("pointermove", y), t.removeEventListener("pointerup", u), t.removeEventListener("pointercancel", u), t.removeEventListener("pointerleave", u);
      }
    };
  }
}
function Jd(e, t, n, r, i) {
  const o = t / 2, s = n / 2, a = (l, g) => {
    l.forEach((h, w) => {
      const $ = 2 * Math.PI * w / Math.max(1, l.length) - Math.PI / 2;
      h.x = o + g * Math.cos($), h.y = s + g * Math.sin($), h.fx = r === "Force-directed" ? void 0 : h.x, h.fy = r === "Force-directed" ? void 0 : h.y;
    });
  };
  if (r === "Radial" && e.length) {
    const l = new Map(e.map((_) => [_["gufe-key"], []]));
    for (const _ of i)
      l.get(_.from["gufe-key"]).push(_.to["gufe-key"]), l.get(_.to["gufe-key"]).push(_.from["gufe-key"]);
    const g = new Map(e.map((_) => [_["gufe-key"], _])), h = e.reduce(
      (_, f) => l.get(f["gufe-key"]).length > l.get(_["gufe-key"]).length ? f : _
    ), w = /* @__PURE__ */ new Set([h["gufe-key"]]);
    let $ = [h["gufe-key"]], v = 0;
    const S = Math.min(t, n) * 0.18;
    for (; $.length; ) {
      a(
        $.map((f) => g.get(f)),
        v === 0 ? 0 : v * S + 40
      );
      const _ = [];
      for (const f of $)
        for (const y of l.get(f))
          w.has(y) || (w.add(y), _.push(y));
      $ = _, v++;
    }
    a(e.filter((_) => !w.has(_["gufe-key"])), Math.min(t, n) * 0.45);
    return;
  }
  a(e, Math.min(t, n) * 0.34);
}
async function Yd(e, t, n, r) {
  let i;
  try {
    if (i = await Wi(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"], score: l.score })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((l) => l["gufe-key"]).distance((l) => _e.linkBaseDistance + (1 - (l.score ?? 0.5)) * _e.linkScoreBonus).strength(_e.linkStrength)
  ).force(
    "charge",
    i.forceManyBody().strength(_e.chargeStrength).distanceMin(_e.chargeDistanceMin).distanceMax(_e.chargeDistanceMax)
  ).force("center", i.forceCenter(n / 2, r / 2).strength(_e.centerStrength)).force("collision", i.forceCollide(at + _e.collisionPadding).iterations(_e.collisionIterations)).force("x", i.forceX(n / 2).strength(_e.drift)).force("y", i.forceY(r / 2).strength(_e.drift)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * _e.tickMultiplier; l++) s.tick();
  return !0;
}
Pe("gufe-ligand-network", Wd);
const $t = { width: 148, height: 46, radius: 10 }, it = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2
}, vt = dt;
function Xd(e, t) {
  return e.length > t ? `${e.slice(0, t - 1)}...` : e;
}
function Zd(e, t, n) {
  const r = Math.max(90, Math.min(t, n) * 0.36);
  e.forEach((i, o) => {
    const s = 2 * Math.PI * o / Math.max(1, e.length) - Math.PI / 2;
    i.x = t / 2 + r * Math.cos(s), i.y = n / 2 + r * Math.sin(s);
  });
}
async function Qd(e, t, n, r) {
  let i;
  try {
    if (i = await Wi(), typeof i?.forceSimulation != "function") return !1;
  } catch {
    return !1;
  }
  const o = t.map((l) => ({ source: l.from["gufe-key"], target: l.to["gufe-key"] })), s = i.forceSimulation(e).force(
    "link",
    i.forceLink(o).id((l) => l["gufe-key"]).distance(it.linkDistance).strength(it.linkStrength)
  ).force("charge", i.forceManyBody().strength(it.chargeStrength)).force("center", i.forceCenter(n / 2, r / 2)).force("collision", i.forceCollide(it.collisionRadius).iterations(it.collisionIterations)).stop(), a = Math.ceil(Math.log(s.alphaMin()) / Math.log(1 - s.alphaDecay()));
  for (let l = 0; l < a * it.tickMultiplier; l++) s.tick();
  return !0;
}
class eu extends xe {
  placeholder() {
    return "Waiting for an AlchemicalNetwork payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = [];
    let o = 0;
    for (const d of n.nodes ?? []) {
      const p = Te(r, d, "ChemicalSystemViz");
      if (!p) {
        o++;
        continue;
      }
      i.push({ ...p, x: 0, y: 0 });
    }
    const s = new Map(i.map((d) => [d["gufe-key"], d])), a = [];
    let l = 0;
    for (const d of n.edges ?? []) {
      const p = s.get(d.stateA), k = s.get(d.stateB);
      if (!p || !k) {
        l++;
        continue;
      }
      a.push({ ...d, index: a.length, from: p, to: k });
    }
    const g = (d) => {
      const p = Te(r, d.protocol, "ProtocolViz");
      return p?.gufe_type || p?.name || "";
    }, h = new Set(a.map(g).filter(Boolean)), w = Le(n.name || "Alchemical network");
    w.statsEl.appendChild(de("systems", String(i.length))), w.statsEl.appendChild(de("transformations", String(a.length))), h.size && w.statsEl.appendChild(de("protocol", [...h].join(", "))), t.appendChild(w);
    const $ = T("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    t.appendChild($);
    const v = T("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${O.netCanvasBg};`);
    $.appendChild(v), $.appendChild(T("div", `width:1px;flex-shrink:0;background:${O.splitBorder};`));
    const S = T("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${O.appBg};`);
    $.appendChild(S);
    const _ = this.#t(S, r, g);
    if (!i.length)
      return v.appendChild(
        le(
          o ? "None of this network's chemical systems are in its registry." : "This network has no chemical systems."
        )
      ), _.message("Nothing to show."), {};
    o && Ge(
      v,
      `${o} chemical system${o === 1 ? "" : "s"} named by this network are not in its registry`
    ), l && Ge(
      v,
      `${l} transformation${l === 1 ? "" : "s"} name a system this network does not contain`
    );
    let f = !0, y = !1, u = null, m = () => {
    };
    const C = (d, p) => {
      u = { kind: d, index: p }, _.show(d === "node" ? i[p] : a[p], d), m();
    }, c = () => {
      v.querySelector("svg")?.remove();
      const d = v.clientWidth || 800, p = v.clientHeight || 600;
      Zd(i, d, p);
      const k = () => {
        if (!f) return;
        const E = this.#e(v, i, a, d, p, C);
        m = () => E.setSelected(u), m();
      };
      if (y) {
        k();
        return;
      }
      Qd(i, a, d, p).then((E) => {
        f && (E || (y = !0, Ge(v, "d3 could not be loaded - showing the circular layout instead")), k());
      }, k);
    };
    return c(), C("node", 0), {
      onResize: () => c(),
      cleanup: () => {
        f = !1;
      }
    };
  }
  /** The right-hand pane: what the selected system or transformation is. */
  #t(t, n, r) {
    t.appendChild(
      T(
        "div",
        _t,
        "Selected"
      )
    );
    const i = T("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    t.appendChild(i);
    const o = (l) => i.replaceChildren(le(l)), s = (l, g) => {
      const h = T(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${O.toolbarBorder};display:flex;flex-direction:column;gap:4px;`
      );
      return h.appendChild(T("div", `font-size:${Z.heading};font-weight:600;color:${O.textPrimary};`, l)), h.appendChild(T("div", `font-size:${Z.small};color:${O.textMuted2};`, g)), h;
    };
    return { show: (l, g) => {
      if (i.replaceChildren(), g === "node") {
        const $ = l;
        i.appendChild(s(vt($), "ChemicalSystem"));
        const v = T("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;"), S = Object.entries($.components ?? {});
        for (const [_, f] of S) {
          const y = Je(n, f), u = T(
            "div",
            `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;background:${O.cardBg};border:1px solid ${O.cardBorder};`
          );
          u.appendChild(T("span", `font-size:${Z.body};font-weight:700;color:${O.textPrimary};`, _)), u.appendChild(
            T(
              "span",
              `font-size:${Z.small};color:${O.textMuted};overflow-wrap:anywhere;min-width:0;`,
              y ? y.name || "(unnamed)" : "(not in the registry)"
            )
          );
          const m = Ct(
            y ? y.type === "UnknownComponentViz" ? y.gufe_type : y.type.replace(/Viz$/, "") : "missing"
          );
          m.style.marginLeft = "auto", u.appendChild(m), v.appendChild(u);
        }
        S.length || v.appendChild(T("div", `font-size:${Z.body};color:${O.textMuted2};`, "This system lists no components.")), i.appendChild(v), i.appendChild(
          T(
            "div",
            `padding:0 14px 12px;font-size:${Z.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${O.textMuted2};overflow-wrap:anywhere;`,
            $["gufe-key"]
          )
        );
        return;
      }
      const h = l;
      i.appendChild(s(h.name || "Unnamed transformation", "Transformation"));
      const w = T("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [$, v] of [
        ["State A", vt(h.from)],
        ["State B", vt(h.to)],
        ["Protocol", r(h) || "-"]
      ]) {
        const S = T("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        S.appendChild(
          T(
            "span",
            `flex:0 0 76px;font-size:${Z.tiny};font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${O.textMuted2};`,
            $
          )
        ), S.appendChild(T("span", `flex:1;min-width:0;font-size:${Z.body};color:${O.textPrimary};overflow-wrap:anywhere;`, v)), w.appendChild(S);
      }
      i.appendChild(w), i.appendChild(
        T(
          "div",
          `padding:0 14px 12px;font-size:${Z.small};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${O.textMuted2};overflow-wrap:anywhere;`,
          h["gufe-key"]
        )
      );
    }, message: o };
  }
  /** Build the SVG for the current positions, and hand back the selection hook. */
  #e(t, n, r, i, o, s) {
    const a = se("svg", { width: i, height: o, style: "display:block;" });
    t.appendChild(a);
    const l = se("g"), g = se("g");
    a.append(l, g);
    const h = [];
    r.forEach(($, v) => {
      const S = se("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: O.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;"
      });
      Fn(S, $.name || "transformation"), S.addEventListener("click", () => s("edge", v)), l.appendChild(S), h.push(S);
      const _ = se("line", {
        x1: $.from.x,
        y1: $.from.y,
        x2: $.to.x,
        y2: $.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;"
      });
      _.addEventListener("click", () => s("edge", v)), l.appendChild(_);
    });
    const w = [];
    return n.forEach(($, v) => {
      const S = se("g", { style: "cursor:pointer;" }), _ = se("rect", {
        x: $.x - $t.width / 2,
        y: $.y - $t.height / 2,
        width: $t.width,
        height: $t.height,
        rx: $t.radius,
        fill: O.cardBg,
        stroke: O.cardBorder,
        "stroke-width": 2
      });
      S.appendChild(_), w.push(_);
      const f = se("text", {
        x: $.x,
        y: $.y - 2,
        "text-anchor": "middle",
        fill: O.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      f.textContent = Xd(vt($), 20), S.appendChild(f);
      const y = Object.keys($.components ?? {}).length, u = se("text", {
        x: $.x,
        y: $.y + 14,
        "text-anchor": "middle",
        fill: O.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif"
      });
      u.textContent = `${y} component${y === 1 ? "" : "s"}`, S.appendChild(u), Fn(S, vt($)), S.addEventListener("click", () => s("node", v)), g.appendChild(S);
    }), {
      setSelected($) {
        w.forEach((v, S) => {
          const _ = $?.kind === "node" && $.index === S;
          v.setAttribute("stroke", _ ? O.cardBorderActive : O.cardBorder), v.setAttribute("stroke-width", _ ? "3" : "2");
        }), h.forEach((v, S) => {
          const _ = $?.kind === "edge" && $.index === S;
          v.setAttribute("stroke", _ ? O.netHaloColor : O.netEdgeLine), v.setAttribute("stroke-width", _ ? "4" : "2");
        });
      }
    };
  }
}
Pe("gufe-alchemical-network", eu);
function tu(e) {
  return e.name || e.type.replace(/Viz$/, "");
}
function nu(e) {
  return e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
}
class ru extends xe {
  placeholder() {
    return "Waiting for a ChemicalSystem payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = [], o = [];
    for (const [S, _] of Object.entries(n.components ?? {})) {
      const f = Je(r, _);
      f ? i.push([S, f]) : o.push(S);
    }
    const s = Le(n.name || "Chemical system");
    if (s.statsEl.appendChild(de("components", String(i.length))), t.appendChild(s), !i.length)
      return t.appendChild(
        le(
          o.length ? "None of this system's components are in its registry." : "This chemical system has no components."
        )
      ), {};
    const a = T("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    t.appendChild(a), o.length && Ge(
      a,
      `${o.length} component${o.length === 1 ? "" : "s"} named by this system (${o.join(", ")}) are not in its registry`
    );
    const l = T(
      "div",
      `flex:0 0 220px;min-width:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding:10px;background:${O.panelBg};border-right:1px solid ${O.splitBorder};`
    );
    a.appendChild(l);
    const g = T("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    a.appendChild(g);
    const h = T("div", "flex:1;min-height:0;display:flex;");
    g.appendChild(h);
    const w = document.createElement("gufe-view");
    w.style.cssText = "flex:1;min-width:0;min-height:0;", h.appendChild(w);
    const $ = [], v = (S) => {
      $.forEach((_, f) => {
        const y = f === S;
        _.style.background = y ? O.cardBgActive : O.cardBg, _.style.borderColor = y ? O.cardBorderActive : O.cardBorder;
      }), w.payload = i[S][1];
    };
    return i.forEach(([S, _], f) => {
      const y = T(
        "button",
        `display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;border:1px solid ${O.cardBorder};border-radius:8px;background:${O.cardBg};cursor:pointer;font-family:inherit;font-size:\${FONT.body};width:100%;`
      );
      y.appendChild(T("span", `font-weight:700;color:${O.textPrimary};`, S)), y.appendChild(T("span", `font-size:${Z.small};color:${O.textMuted};`, tu(_))), y.appendChild(Ct(nu(_))), y.onclick = () => v(f), $.push(y), l.appendChild(y);
    }), v(0), {
      onResize: () => w.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => w.remove()
    };
  }
}
Pe("gufe-chemical-system", ru);
class ou extends xe {
  placeholder() {
    return "Waiting for a Protocol payload...";
  }
  renderView(t, n) {
    const r = Le(n.gufe_type || n.name || "Protocol");
    r.statsEl.appendChild(Ct(n.gufe_type)), t.appendChild(r);
    const i = T(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;"
    );
    t.appendChild(i);
    const o = An();
    return o.style.maxWidth = "460px", o.appendChild(Fe("gufe class", n.gufe_type, !0)), n.name && o.appendChild(Fe("Name", n.name)), o.appendChild(Fe("gufe key", n["gufe-key"], !0)), o.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Z.small};line-height:1.6;color:${O.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, deeply nested, and nothing draws them yet."
      )
    ), i.appendChild(o), {};
  }
}
Pe("gufe-protocol", ou);
const Ee = { width: 340, height: 260, padding: 14, radius: 12 }, iu = 150, su = 40, au = 24;
function cu(e) {
  let t = e >>> 0;
  return () => (t = t * 1664525 + 1013904223 >>> 0, t / 4294967296);
}
function lu(e) {
  const t = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(e ?? "");
  if (!t) return null;
  const n = Number(t[0]);
  return Number.isFinite(n) ? n : null;
}
function du(e) {
  return e == null || e <= 0 ? 0 : Math.max(1, Math.min(au, Math.round(e * su)));
}
function uu(e) {
  const t = se("svg", {
    viewBox: `0 0 ${Ee.width} ${Ee.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img"
  });
  Fn(t, `${e.smiles || "solvent"} box`), t.appendChild(
    se("rect", {
      x: 1,
      y: 1,
      width: Ee.width - 2,
      height: Ee.height - 2,
      rx: Ee.radius,
      fill: O.boxFill,
      stroke: O.boxStroke,
      "stroke-width": 1.5
    })
  );
  const n = cu(1597463007), r = () => ({
    x: Ee.padding + n() * (Ee.width - 2 * Ee.padding),
    y: Ee.padding + n() * (Ee.height - 2 * Ee.padding)
  });
  for (let s = 0; s < iu; s++) {
    const { x: a, y: l } = r();
    t.appendChild(se("circle", { cx: a, cy: l, r: 2.4, fill: O.textMuted2, "fill-opacity": 0.45 }));
  }
  const i = du(lu(e.ion_concentration)), o = [
    [e.positive_ion, O.diffAdded],
    [e.negative_ion, O.diffRemoved]
  ];
  for (const [s, a] of o)
    for (let l = 0; l < i; l++) {
      const { x: g, y: h } = r(), w = se("circle", { cx: g, cy: h, r: 5.5, fill: a, "fill-opacity": 0.85 });
      t.appendChild(Fn(w, s));
    }
  return t;
}
class fu extends xe {
  placeholder() {
    return "Waiting for a SolventComponent payload...";
  }
  renderView(t, n) {
    const r = Le(n.name || "Solvent");
    r.statsEl.appendChild(de("neutralized", n.neutralize ? "yes" : "no")), r.statsEl.appendChild(de(n.positive_ion, "", O.diffAdded)), r.statsEl.appendChild(de(n.negative_ion, "", O.diffRemoved)), t.appendChild(r);
    const i = T(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;"
    );
    t.appendChild(i);
    const o = An();
    o.style.flex = "1 1 320px", o.appendChild(Fe("SMILES", n.smiles, !0)), o.appendChild(Fe("Positive ion", n.positive_ion)), o.appendChild(Fe("Negative ion", n.negative_ion)), o.appendChild(Fe("Ion concentration", n.ion_concentration)), o.appendChild(Fe("Neutralize", n.neutralize ? "yes" : "no")), i.appendChild(o);
    const s = An();
    return s.style.flex = "1 1 340px", s.style.alignItems = "center", s.appendChild(uu(n)), s.appendChild(
      T(
        "div",
        `padding-top:10px;font-size:${Z.small};text-align:center;color:${O.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many."
      )
    ), i.appendChild(s), {};
  }
}
Pe("gufe-solvent", fu);
const fr = {
  unchanged: O.diffUnchanged,
  changed: O.diffChanged,
  added: O.diffAdded,
  removed: O.diffRemoved
};
function pu(e, t) {
  return e && !t ? "removed" : !e && t ? "added" : e === t ? "unchanged" : "changed";
}
function hu(e, t) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.components ?? {}), ...Object.keys(t.components ?? {})])].sort();
}
function mu(e) {
  if (!e) return null;
  const t = e.type === "UnknownComponentViz" ? e.gufe_type : e.type.replace(/Viz$/, "");
  return { name: e.name || "(unnamed)", type: t };
}
function Ai(e, t) {
  const n = T(
    "div",
    `flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;background:${O.cardBg};border:1px solid ${O.cardBorder};`
  ), r = mu(e);
  return r ? (n.style.borderColor = t === "unchanged" ? O.cardBorder : fr[t], n.appendChild(T("span", `font-size:${Z.body};font-weight:600;color:${O.textPrimary};`, r.name)), n.appendChild(Ct(r.type)), n) : (n.style.background = "transparent", n.style.borderStyle = "dashed", n.appendChild(T("span", `font-size:${Z.body};color:${O.textMuted2};`, "absent")), n);
}
function gu(e, t) {
  const n = Je(t, e.componentA), r = Je(t, e.componentB);
  return `${n ? dt(n) : "A"} to ${r ? dt(r) : "B"}`;
}
class yu extends xe {
  placeholder() {
    return "Waiting for a Transformation payload...";
  }
  renderView(t, n) {
    const r = kt(n), i = Te(r, n.stateA, "ChemicalSystemViz"), o = Te(r, n.stateB, "ChemicalSystemViz"), s = Te(r, n.protocol, "ProtocolViz"), a = n.mappings ?? [], l = Le(n.name || "Transformation");
    if (l.statsEl.appendChild(de("protocol", s?.gufe_type || s?.name || "-")), l.statsEl.appendChild(de("mappings", String(a.length))), t.appendChild(l), !i || !o)
      return t.appendChild(
        le("This transformation names two chemical systems, and its registry does not hold them.")
      ), {};
    const g = hu(i, o), h = T("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    t.appendChild(h);
    const w = T("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [f, y] of [
      ["State A", i],
      ["State B", o]
    ])
      w.appendChild(
        T(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${Z.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${O.textMuted2};`,
          `${f}${y.name ? ` - ${y.name}` : ""}`
        )
      );
    h.appendChild(w);
    for (const f of g) {
      const y = i.components?.[f], u = o.components?.[f], m = pu(y, u), C = Je(r, y), c = Je(r, u), d = T("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;"), p = T("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      p.appendChild(
        T("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${fr[m]};`)
      );
      const k = T("span", `font-size:${Z.body};font-weight:700;color:${O.textPrimary};overflow-wrap:anywhere;`, f);
      k.title = m, p.appendChild(k), d.appendChild(p), d.appendChild(Ai(C, m)), d.appendChild(Ai(c, m)), h.appendChild(d);
    }
    const $ = T(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${Z.small};color:${O.textMuted};`
    );
    for (const f of ["unchanged", "changed", "added", "removed"])
      $.appendChild(de(f, "", fr[f]));
    h.appendChild($);
    const v = T(
      "div",
      _t,
      "Atom mapping"
    );
    if (t.appendChild(v), !a.length)
      return t.appendChild(
        le(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another."
        )
      ), {};
    const S = document.createElement("gufe-atom-mapping");
    S.style.cssText = "flex:1;min-height:0;min-width:0;";
    const _ = (f) => {
      S.payload = rs(a[f], r);
    };
    if (_(0), a.length > 1) {
      const f = T(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:\${FONT.small};background:${O.toolbarBg};border-bottom:1px solid ${O.toolbarBorder};color:${O.textMuted};`
      );
      f.appendChild(
        On(
          a.map((y, u) => ({
            id: String(u),
            label: y.name || gu(y, r)
          })),
          "0",
          (y) => _(Number(y))
        )
      ), t.appendChild(f);
    }
    return t.appendChild(S), {
      onResize: () => S.resize?.(),
      cleanup: () => S.remove()
    };
  }
}
Pe("gufe-transformation", yu);
class $u extends xe {
  placeholder() {
    return "Waiting for a component payload...";
  }
  renderView(t, n) {
    const r = Le(n.name || "Unnamed component");
    r.statsEl.appendChild(Ct(n.gufe_type)), t.appendChild(r);
    const i = T("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    t.appendChild(i);
    const o = An();
    return o.style.maxWidth = "460px", o.appendChild(
      T(
        "div",
        `font-size:${Z.heading};font-weight:600;padding-bottom:6px;color:${O.textPrimary};`,
        `There is no visualization for ${n.gufe_type}.`
      )
    ), o.appendChild(
      T(
        "div",
        `font-size:${Z.body};line-height:1.6;padding-bottom:10px;color:${O.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a component this build has never been taught to draw - not a broken payload. Everything gufe knows about it that survives serialization is below."
      )
    ), o.appendChild(Fe("Name", n.name || "(unnamed)")), o.appendChild(Fe("gufe class", n.gufe_type, !0)), i.appendChild(o), {};
  }
}
Pe("gufe-unknown-component", $u);
function ku(e, t) {
  let n = e.querySelector("gufe-view");
  return n || (n = document.createElement("gufe-view"), n.style.cssText = "display:block;width:100%;height:100%;", e.appendChild(n)), t !== void 0 && (n.payload = t), n;
}
typeof globalThis < "u" && (globalThis.gufeViz = { settings: Hi, reset: dl });
export {
  ds as CHROME_OPEN_BY_DEFAULT,
  hs as DEBUG_ATTRIBUTE,
  ms as DEBUG_GLOBAL,
  nd as DEFAULT_DEPICT_STYLE,
  pl as DEFAULT_ZOOM_BOUNDS,
  En as DEPICT_STYLE,
  ad as DEPICT_STYLE_RANGES,
  eu as GufeAlchemicalNetwork,
  Pd as GufeAtomMapping,
  ru as GufeChemicalSystem,
  xe as GufeElement,
  Wd as GufeLigandNetwork,
  Pl as GufeProtein,
  ou as GufeProtocol,
  _l as GufeSmallMolecule,
  fu as GufeSolvent,
  yu as GufeTransformation,
  $u as GufeUnknownComponent,
  nl as GufeView,
  nr as MAPPING_COLORS,
  Su as MAPPING_RAMP_3D,
  Cu as MAPPING_RAMP_NAME,
  vu as PAYLOAD_TYPES,
  bu as SCHEMA_TYPES,
  _r as VIEW_TAGS,
  Nl as applyRT,
  ml as boundedZoom,
  kt as buildRegistry,
  lt as choice,
  fs as chromeMenu,
  $s as debugEnabled,
  Pe as defineElement,
  Ki as describeProblem,
  pu as diffStatus,
  _u as dispatchProblem,
  dt as entryLabel,
  bt as flag,
  el as formatIssues,
  xr as guardWheel,
  Rl as kabsch,
  xd as liftFor,
  bs as logPayload,
  Je as lookup,
  Te as lookupOfType,
  rs as mappingPayloadFor,
  fd as markGroups,
  es as markedBonds,
  ku as mount,
  ld as normaliseDepictStyle,
  cl as num,
  dd as parseAtomSpec,
  lu as parseConcentration,
  vs as payloadJson,
  Pr as resetControl,
  dl as resetSettings,
  Ud as selectionText,
  qn as setting,
  Hi as settings,
  ll as textSetting,
  Si as uniqueAtoms,
  wu as validateAs,
  Qc as validatePayload,
  Ji as viewerInteraction,
  yl as wheelFactor
};
